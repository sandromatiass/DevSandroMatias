import GlobalStyles from "./shared/Styles";

import CHeader from "./shared/Components/Containers/CHeader/CHeader";
import CBody from "./shared/Components/Containers/CBody/CBody.tsx";

import { LightMode } from "./shared/Styles/Themes/LightMode/LightMode.ts";
import { DarkMode } from "./shared/Styles/Themes/DarkMode/DarkMode.ts";


import { ThemeProvider } from "styled-components";
import useThemeMode from "./shared/Utils/Hooks/useThemeMode.ts";

import ButtonTranslate from "./shared/Components/ButtonTranslate/ButtonTranslate.tsx";

import AboutMe from "./shared/Sections/AboutMe/AboutMe.tsx";


function App() {
  const { theme, themeChanger } = useThemeMode();
  
  const themeMode = theme === "LightMode" ? LightMode : DarkMode;

  

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <CHeader themeChanger={themeChanger}/>
        <CBody/>
        <AboutMe/>
        <ButtonTranslate/>
      </ThemeProvider>
    </>
  )
};

export default App;
