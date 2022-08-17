import React from "react";

function Product({ title, thumbnail }) {
  return (
    <div>
      <div className="product-item">
        <img
          src={thumbnail}
          className="product-thumbnail"
          alt="product-thumbnail"
        />
        <h3 className="product-title">{title}</h3>
        <div className="add-to-cart">
          <i>+</i>
        </div>
      </div>
    </div>
  );
}

export default Product;
