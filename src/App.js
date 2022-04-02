import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import {ThemeProvider} from 'styled-components'
import {lightTheme,darkTheme} from './components/Theme/Theme'
import {useTheme} from './hooks/useTheme'
function App() {
  const [theme,ThemeTogglers,toggleSwitchThemeIcon] = useTheme();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme
  return (
    <>
      <GlobalStyle  />
      <ThemeProvider theme={themeMode}>
      <Header themeToggler={ThemeTogglers} toggleSwitchThemeIcon={toggleSwitchThemeIcon}/>
      </ThemeProvider>
    </>
  );
}

export default App;
