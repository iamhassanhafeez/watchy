import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Product from "./Product";
import { getAllProducts } from "../../features/product/productSlice";

function Shop() {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("assets/data.json")
      .then((res) => {
        dispatch(getAllProducts(res.data));
        console.log("below are products");
      })
      .catch(console.error());
  }, [dispatch]);
  console.log(products);
  return (
    <div>
      <div className="shop ma products-grid">
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
