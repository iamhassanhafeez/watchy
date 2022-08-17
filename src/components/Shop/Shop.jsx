import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/product/productActions";
import Product from "./Product";

function Shop() {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("assets/data.json")
      .then((res) => {
        setProducts(res?.data);
        console.log("below are products");
      })
      .catch(console.error());
  }, []);
  console.log(products);
  console.log(allProducts);
  return (
    <div>
      <div className="shop ma products-grid">
        <button onClick={() => dispatch(getProduct())}>click me</button>
        {products.map((product) => (
          <Product
            title={product?.title}
            key={product?.id}
            thumbnail={product?.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
