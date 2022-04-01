import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import { useState } from "react";
import { StyledActiveNavbar } from "./components/Header/Header.styled";
import { AbsoluteFlexContainer } from "./components/Flex/Flex.styled";
import imageResoucres from "./assets/imageResoucres";
function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header toggle={toggleMenu} setToggleMenu={setToggleMenu} />
      {toggleMenu && (
        <AbsoluteFlexContainer>
          <div className="wrapper">
            <img onClick = {() => {setToggleMenu(false)}} src={imageResoucres.CloseIcon} alt="CloseIcon"></img>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </AbsoluteFlexContainer>
      )}
    </>
  );
}

export default App;
