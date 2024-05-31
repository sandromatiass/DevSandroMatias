import { useEffect, useState } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState("DarkMode");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeChanger = () => {
    setMode(theme === "DarkMode" ? "LightMode" : "DarkMode");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return { theme, themeChanger };
};

export default useThemeMode;
