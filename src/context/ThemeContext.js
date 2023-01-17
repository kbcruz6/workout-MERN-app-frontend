import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const onToggle = () => {
    toggleTheme();
    setChecked(!checked);
  };

  const data = {
    isDarkTheme,
    theme,
    setTheme,
    toggleTheme,
    onToggle,
    checked,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
