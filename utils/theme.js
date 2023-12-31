import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { COLORS } from "../constants/Colors1";

export const getThemeColors = (theme) => {
  return {
    textColor: COLORS.theme[theme]?.textColor,
    backgroundColor: COLORS.theme[theme]?.backgroundColor,
  };
};
