import React from "react";
import imageResource from "../../assets/imageResoucres";
import { StyledMain } from "./Main.styled";
const Main = () => {
  return (
    <StyledMain>
      <div className="product-image">
        <div className="product-feature">
          <img src={imageResource.Product1} alt="Feature-product-1" />
        </div>
        <div className="product-side-container">
          <img
            src={imageResource.ImageProduct1Thumbnail}
            alt="Thumbnail product 1"
          />
          <img
            src={imageResource.ImageProduct2Thumbnail}
            alt="Thumbnail product 2"
          />
          <img
            src={imageResource.ImageProduct3Thumbnail}
            alt="Thumbnail product 3"
          />
          <img
            src={imageResource.ImageProduct4Thumbnail}
            alt="Thumbnail product 4"
          />
        </div>
      </div>
      <div className="productInfo">
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <h3>$125.00</h3>
        <h3>$250.00</h3>
        <div className="button-container">
          <div className="operator-container">
            <h3 className="operand">-</h3>
            <h3>0</h3>
            <h3 className="operand">+</h3>
          </div>
          <button>
            <img src={imageResource.CartIcon} alt="Cart icon" />
            Add to cart
          </button>
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
