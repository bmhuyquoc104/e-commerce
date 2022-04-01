import React from "react";
import imageResoucres from "../../assets/imageResoucres";
import { StyledHeader } from "./Header.styled";
const Header = () => {
  return (
    <StyledHeader>
      <img src={imageResoucres.Logo} alt="Logo Icon" />
      <ul>
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
    </StyledHeader>
  );
};

export default Header;
