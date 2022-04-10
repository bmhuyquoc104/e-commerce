import React, { useState } from "react";
import imageResource from "../../assets/imageResoucres";
import { StyledMain, StyledMainModal } from "./Main.styled";
import { AbsoluteFlexContainerPC } from "../Flex/Flex.styled";
import { motion } from "framer-motion";
const Main = () => {
  const [toggleImage, setToggalImage] = useState(false);
  // Initialize image arr
  const imageArr = [
    imageResource.Product1,
    imageResource.Product2,
    imageResource.Product3,
    imageResource.Product4,
  ];

  // Use use state to control the index of the image array
  const [index, setActiveStep] = useState(0);

  // Declare the size for the image array
  const imageArrSize = imageArr.length;

  // Switch to next image
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Switch to previous image
  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const buttonVariant = {
    hover: {
      cursor: "pointer",
    },
  };

  const pathVariants = {
    hover: {
      stroke: `var(--clr_orange)`,
      cursor: "pointer",
    },
  };

  return (
    <StyledMain>
      {/* Mobile version */}

      <div className="mobile-image">
        <div className="product-image mobile">
          <div className="product-feature">
            <motion.button
              onClick={goToPreviousPicture}
              disabled={index === 0}
              variants={buttonVariant}
              className="button previous"
              whileHover="hover"
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M11 1 3 9l8 8"
                  stroke="#13161b"
                  whileHover={{
                    stroke: `var(--clr_orange)`,
                    cursor: "pointer",
                  }}
                  variants={pathVariants}
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </motion.button>

            <img src={imageArr[index]} alt="Feature-product-1" />

            <motion.button
              variants={buttonVariant}
              whileHover="hover"
              onClick={goToNextPicture}
              disabled={index === imageArrSize - 1}
              className="button next"
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  variants={pathVariants}
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  whileHover={{
                    stroke: `var(--clr_orange)`,
                    cursor: "pointer",
                  }}
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Desltop version */}
      <div className="product-image desktop">
        <div className="product-feature">
          <img
            onClick={() => setToggalImage(true)}
            src={imageArr[index]}
            alt="Feature-product-1"
          />
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
      <div className="product-info">
        {/* Desktop version */}
        <div className="product-header">
          <h1>Sneaker Company</h1>
          <h2>Fall Limited Edition Sneakers</h2>
        </div>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="product-price">
          <h3 className="discount-price">$125.00</h3>
          <h3 className="discount">50%</h3>
          <h3 className="original-price">$250.00</h3>
        </div>

        <div className="button-container">
          <div className="operator-container">
            <h3 className="operand">-</h3>
            <h3 className="quantity">0</h3>
            <h3 className="operand">+</h3>
          </div>
          <button>
            <img src={imageResource.CartIconWhite} alt="Cart icon" />
            <p>Add to cart</p>
          </button>
        </div>
      </div>

      {toggleImage && (
        <AbsoluteFlexContainerPC>
          <StyledMainModal>
            <div onClick={() => setToggalImage(false)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  whileHover={{ fill: `var(--clr_orange)`, cursor: "pointer" }}
                  fill="#ffffff"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="product-image">
              <div className="product-feature">
                <motion.button
                  variants={buttonVariant}
                  whileHover="hover"
                  onClick={goToPreviousPicture}
                  disabled={index === 0}
                  className="button previous"
                >
                  <svg
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      variants={pathVariants}
                      d="M11 1 3 9l8 8"
                      stroke="#1D2026"
                      strokeWidth="3"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </motion.button>

                <img src={imageArr[index]} alt="Feature-product-1" />

                <motion.button
                  variants={buttonVariant}
                  whileHover="hover"
                  className="button next"
                  onClick={goToNextPicture}
                  disabled={index === imageArrSize - 1}
                >
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      variants={pathVariants}
                      d="m2 1 8 8-8 8"
                      stroke="#1D2026"
                      strokeWidth="3"
                      whileHover={{
                        stroke: `var(--clr_orange)`,
                        cursor: "pointer",
                      }}
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </motion.button>
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
          </StyledMainModal>
        </AbsoluteFlexContainerPC>
      )}
    </StyledMain>
  );
};

export default Main;
