import React, { useState } from "react";
import imageResoucres from "../../assets/imageResoucres";
import {
  GreyBlueMoon,
  OrangeSunFill,
  StyledHeader,
  StyledActiveNavbar,
} from "./Header.styled";
import { AbsoluteFlexContainer } from "../Flex/Flex.styled";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ themeToggler, toggleSwitchThemeIcon }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const itemsInCardArr2 = [
    {
      id: 1,
      quantity: 1,
      name: "Fall Limited Edition Sneakers",
      price: "$125.000",
      totalPrice: "$375.000",
      image: `${imageResoucres.Product1}`,
    },
    {
      id: 2,
      quantity: 1,
      name: "Fall Limited Edition Sneakers",
      totalPrice: "$125.000",
      image: `${imageResoucres.Product1}`,
    },
  ];

  const [itemsInCardArr, setItemsArr] = useState(() => {
    const localData = localStorage.getItem("item");
    return localData ? JSON.parse(localData) : itemsInCardArr2;
  });

  const cardQuantity = itemsInCardArr.length;


  
  const handleRemove = (id) => {
    const newList = itemsInCardArr.filter((item) => item.id !== id);

    setItemsArr(newList);
  }

  const ulVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const liVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <StyledHeader
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {/* Desktop display: max-width:768px */}
      <img className="desktop-logo" src={imageResoucres.Logo} alt="Logo Icon" />
      <ul className="desktop-ul">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
        <li className="push-right desktop">
          {!toggleSwitchThemeIcon ? (
            <OrangeSunFill onClick={themeToggler} />
          ) : (
            <GreyBlueMoon onClick={themeToggler} />
          )}
        </li>

        <li className="push-right">
          {cardQuantity === 0 ? (
            <div className="item-quantities"></div>
          ) : (
            <div className="item-quantities">{cardQuantity}</div>
          )}
          <img
            onClick={() => {
              setToggleCart(!toggleCart);
            }}
            src={imageResoucres.CartIcon}
            alt="Cart Icon"
          />
        </li>
        <li className="avatar">
          <div>
            <img src={imageResoucres.ImageAvatar} alt="Avatar Icon" />
          </div>
        </li>
      </ul>
      <div className="decorative"></div>

      {/* Mobile display */}
      <img
        className="menu-icon"
        src={imageResoucres.MenuIcon}
        alt="Menu Icon"
        onClick={() => setToggleMenu(true)}
      />
      <img className="logo-mobile" src={imageResoucres.Logo} alt="Logo Icon" />

      <li className="push-right mobile">
        {!toggleSwitchThemeIcon ? (
          <OrangeSunFill onClick={themeToggler} />
        ) : (
          <GreyBlueMoon onClick={themeToggler} />
        )}
      </li>
      <ul className="mobile-ul">
        <li className="push-right">
          {cardQuantity === 0 ? (
            <div className="item-quantities"></div>
          ) : (
            <div className="item-quantities">{cardQuantity}</div>
          )}
          <img
            onClick={() => {
              setToggleCart(!toggleCart);
            }}
            src={imageResoucres.CartIcon}
            alt="Cart Icon"
          />
        </li>
        <li className="avatar">
          <div>
            <img src={imageResoucres.ImageAvatar} alt="Avatar Icon" />
          </div>
        </li>
      </ul>

      <AnimatePresence exitBeforeEnter>
        {toggleMenu && (
          <AbsoluteFlexContainer>
            <StyledActiveNavbar
              key="after"
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { type: "spring", duration: 1 },
              }}
              exit={{
                x: -300,
                opacity: 0,
                duration: 0.1,
              }}
            >
              <img
                onClick={() => {
                  setToggleMenu(false);
                }}
                src={imageResoucres.CloseIcon}
                alt="CloseIcon"
              ></img>
              <motion.ul
                key="After"
                variants={ulVariant}
                initial="hidden"
                animate="visible"
              >
                <motion.li variants={liVariant}>Collections</motion.li>
                <motion.li variants={liVariant}>Men</motion.li>
                <motion.li variants={liVariant}>Women</motion.li>
                <motion.li variants={liVariant}>About</motion.li>
                <motion.li variants={liVariant}>Contact</motion.li>
              </motion.ul>
            </StyledActiveNavbar>
          </AbsoluteFlexContainer>
        )}
      </AnimatePresence>

      {toggleCart && (
        <div className="cartContainer">
          <div className="cart-title">
            <h2>Cart</h2>
            {cardQuantity !== 0 ? (
              <div className="card-content">
                {itemsInCardArr.map((item) => (
                  <div key={item.id} className="card-content-top">
                    <div className="card-image">
                      <img src={item.image} alt="Sneaker 1" />
                    </div>

                    <div className="card-info">
                      <h3>{item.name}</h3>
                      <div>
                        <h4>{item.price}</h4>
                        <h4>x</h4>
                        <h4 className="quantity">{item.quantity}</h4>
                        <h4 className="total">{item.totalPrice}</h4>
                      </div>
                    </div>
                    <div onClick={() => handleRemove(item.id)} className="card-icon">
                      <img src={imageResoucres.DeleteIcon} alt="Delete icon" />
                    </div>
                  </div>
                ))}

                <button>Checkout</button>
              </div>
            ) : (
              <div className="card-content-empty">
                <h4 className="card-content-empty">Your cart is empty</h4>
              </div>
            )}
          </div>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
