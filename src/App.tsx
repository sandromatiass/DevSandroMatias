import { ThemeProvider } from "styled-components";

import GlobalStyles from "./shared/Styles";

import CHeader from "./shared/Components/Containers/CHeader/CHeader";
import { LightMode } from "./shared/Styles/Themes/LightMode/LightMode.ts";
import { DarkMode } from "./shared/Styles/Themes/DarkMode/DarkMode.ts";
import useThemeMode from "./shared/Utils/Hooks/useThemeMode.ts";

function App() {
  const { theme, themeChanger } = useThemeMode();
  
  const themeMode = theme === "LightMode" ? LightMode : DarkMode;

  return (
    <>
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <CHeader themeChanger={themeChanger}/>
    </ThemeProvider>
      
    </>
  )
};

export default App;
