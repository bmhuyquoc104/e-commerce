import {useState, useEffect} from 'react'

export const useTheme = () => {
  const [theme,setTheme] = useState('lightTheme'); 
  const [toggleSwitchThemeIcon, setToggleSwitchThemeIcon] = useState(false);

  const setMode = mode => {
      localStorage.setItem('theme',mode)
      setTheme(mode)
  }

  const ThemeTogglers = () =>{
      theme === 'lightTheme' ? setMode('darkMode') : setMode('lightMode');
      console.log("alalal")
      setToggleSwitchThemeIcon(!toggleSwitchThemeIcon);
  }

  useEffect(() =>{
      const localTheme = localStorage.getItem('theme');
      localTheme ? setTheme(localTheme) : setMode('lightTheme');
  },[])

  

  return [theme,ThemeTogglers,toggleSwitchThemeIcon]
}

