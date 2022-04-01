import React, {useState} from "react";
import imageResoucres from "../../assets/imageResoucres";
import { StyledHeader } from "./Header.styled";
const Header = ({toggle,setToggleMenu}) => {
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
        onClick = {()=> setToggleMenu(true)}
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
    </StyledHeader>
  );
};

export default Header;
