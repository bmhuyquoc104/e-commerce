import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { useTheme } from "./hooks/useTheme";
import Main from './components/Main/Main'
function App() {
  const [theme, ThemeTogglers, toggleSwitchThemeIcon] = useTheme();
 
  
  // Tenary assign the value for themeMode base on theme
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
      <GlobalStyle />
        <Header
          themeToggler={ThemeTogglers}
          toggleSwitchThemeIcon={toggleSwitchThemeIcon}
        />
        <Main/>
      </ThemeProvider>
    </>
  );
}

export default App;
