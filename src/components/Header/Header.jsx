import React, { useState } from "react";
import imageResoucres from "../../assets/imageResoucres";
import { StyledHeader, StyledActiveNavbar } from "./Header.styled";
import { AbsoluteFlexContainer } from "../Flex/Flex.styled";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
      key="before"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Desktop display: max-width:768px */}
      <img className="desktop-logo" src={imageResoucres.Logo} alt="Logo Icon" />
      <ul className="desktop-ul">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
        <li className="push-right">
          <img src={imageResoucres.CartIcon} alt="Cart Icon" />
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

      <ul className="mobile-ul">
        <li className="push-right">
          <img src={imageResoucres.CartIcon} alt="Cart Icon" />
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
                x: -300,opacity: 0,duration:0.1
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
    </StyledHeader>
  );
};

export default Header;
