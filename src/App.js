import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { useTheme } from "./hooks/useTheme";
import { useState, useEffect } from "react";
import { ItemContext } from "./hooks/useContext";
import Main from "./components/Main/Main";
function App() {
  const [theme, ThemeTogglers, toggleSwitchThemeIcon] = useTheme();

  const [itemsArr, setItemsArr] = useState(() => {
    const localItem = localStorage.getItem("items");
    return localItem ? JSON.parse(localItem) : [];
  });

  useEffect (() => {
    localStorage.setItem("items",JSON.stringify(itemsArr));
  },[itemsArr])

  

  // Tenary assign the value for themeMode base on theme
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <ItemContext.Provider value={{ setItemsArr, itemsArr }}>
          <Header
            themeToggler={ThemeTogglers}
            toggleSwitchThemeIcon={toggleSwitchThemeIcon}
          />
          <Main />
        </ItemContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
