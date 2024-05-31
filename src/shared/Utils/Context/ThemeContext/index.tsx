import { ReactNode, createContext, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import useThemeMode from "../../Hooks/useThemeMode";
import { DarkMode } from "../../../Styles/Themes/DarkMode/DarkMode";
import { LightMode } from "../../../Styles/Themes/LightMode/LightMode";

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const { theme, themeChanger } = useThemeMode();

  const themeMode = theme === "DarkMode" ? DarkMode : LightMode;

  return (
    <ThemeContext.Provider value={{ theme, themeChanger }}>
      <StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
