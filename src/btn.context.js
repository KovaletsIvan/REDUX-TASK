import { createContext } from "react";

export const theme = {
  light: {
    background: "#5DADE2",
    color: "#D7DBDD",
  },
  darck: {
    background: "#1B4F72",
    color: "#D7DBDD",
  },
};

const ThemeContext = createContext(theme);
export default ThemeContext;
