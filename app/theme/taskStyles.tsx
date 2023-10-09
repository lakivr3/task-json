import { Theme } from "@chakra-ui/react";
import { CSSObjectWithLabel } from "react-select";

const taskstyles = {
  container: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    background: "#262626",
    margin: "0.5rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  }),
  input: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,

    color: "#fff",
  }),
  placeholder: (baseStyle: any) => ({
    ...baseStyle,
    color: "#fff",
    textAlign: "start",
  }),
  singleValue: (baseStyle: any) => ({
    ...baseStyle,
    color: "#fff",
    textAlign: "start",
  }),

  control: (baseStyles: CSSObjectWithLabel, state: any) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "gray" : "transparent",
    backgroundColor: "transparent",
  }),
  option: (baseStyles: CSSObjectWithLabel, state: any) => ({
    ...baseStyles,
    background: state.isFocused ? "#262626" : "#404040",
  }),
};
const theme = (theme: any) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50: "neutral10",
    primary25: "neutral150",
    primary: "neutral150",
  },
});

export { taskstyles, theme };
