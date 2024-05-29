/*impotation configuration styles */
import GlobalStyles from "./shared/Styles";

/*importation containers */
import CHeader from "./shared/Components/Containers/CHeader/CHeader";
import CBody from "./shared/Components/Containers/CBody/CBody.tsx";

/*Importation theme*/
import { LightMode } from "./shared/Styles/Themes/LightMode/LightMode.ts";
import { DarkMode } from "./shared/Styles/Themes/DarkMode/DarkMode.ts";

import { ThemeProvider } from "styled-components";
import useThemeMode from "./shared/Utils/Hooks/useThemeMode.ts";


function App() {
  const { theme, themeChanger } = useThemeMode();
  
  const themeMode = theme === "LightMode" ? LightMode : DarkMode;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <CHeader themeChanger={themeChanger}/>
        <CBody/>
      </ThemeProvider>
    </>
  )
};

export default App;
