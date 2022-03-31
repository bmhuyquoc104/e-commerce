import React from 'react'
import Navbar from '../Navbar/Navbar'
import imageResoucres from '../../assets/imageResoucres'
import {StyledHeader} from './Header.styled'
const Header = () => {
  return (
    <StyledHeader>
        <img src={imageResoucres.Logo} alt="Logo Icon" />
        <Navbar/>
    </StyledHeader>
  )
}

export default Header