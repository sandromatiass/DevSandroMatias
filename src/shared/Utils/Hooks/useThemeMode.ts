import { useEffect, useState } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState("DarkMode");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode)
  };

  const themeChanger = () => (theme === "DarkMode" ? setMode("LightMode") : setMode("DarkMode"));

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, themeChanger};

};

export default useThemeMode;