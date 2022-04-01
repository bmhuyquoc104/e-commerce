import React, { useState } from "react";
import imageResoucres from "../../assets/imageResoucres";
import { StyledHeader, StyledActiveNavbar } from "./Header.styled";
import { AbsoluteFlexContainer } from "../Flex/Flex.styled";
const Header = ({ setToggle }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <StyledHeader>
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

      {toggleMenu && (
        <AbsoluteFlexContainer>
          <StyledActiveNavbar>
            <img
              onClick={() => {
                setToggleMenu(false);
              }}
              src={imageResoucres.CloseIcon}
              alt="CloseIcon"
            ></img>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </StyledActiveNavbar>
        </AbsoluteFlexContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
