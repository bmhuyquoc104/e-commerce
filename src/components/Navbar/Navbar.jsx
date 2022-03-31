import React from "react";
import imageResoucres from "../../assets/imageResoucres";
import {StyledNavBar} from './Navbar.styled'
const Navbar = () => {
  return (
    <StyledNavBar>
      <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
          <li className="bottom-nav"><img src={imageResoucres.CartIcon} alt="Cart Icon" /></li>
          <li className="avatar"><img src = {imageResoucres.ImageAvatar} alt = "Avatar Icon"/></li>
      </ul>
    </StyledNavBar>
  );
};

export default Navbar;
