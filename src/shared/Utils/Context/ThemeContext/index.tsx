import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeMode } from "../../Hooks/useThemeMode";
import { DarkMode } from "../../../Styles/Themes/DarkMode/DarkMode";
import { LightMode } from "../../../Styles/Themes/LightMode/LightMode";

interface ThemeContextProps {
  children: ReactNode;
};

const ThemeContext = ({ children }: ThemeContextProps) => {
  const { theme } = useThemeMode();

  const themeMode = theme === "DarkMode" ? DarkMode : LightMode;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;