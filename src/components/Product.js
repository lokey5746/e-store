import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <img
                  className="product__ratingIcon"
                  src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-256.png"
                  alt=""
                />
              </p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;
