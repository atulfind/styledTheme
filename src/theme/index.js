import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    primary: {
      main: "#C778DD",
      // light: "#42a5f5",
      // dark: "#1565c0"
    },
    secondary: {
      light: "#ba68c8",
      // main: "#9c27b0",
      // dark: "#7b1fa2"
    },
    error: {
      light: "#ef5350",
      // main: "#d32f2f",
      // dark: "#c62828"
    },
    color: {
      default: "#282C33"
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
      transparent: "transparent"
    }
  }
};

const darkTheme = {
  palette: {
    primary: {
      main: "#C778DD",
      // light: "#42a5f5",
      // dark: "#1565c0"
    },
    secondary: {
      light: "#ba68c8",
      // main: "#9c27b0",
      // dark: "#7b1fa2"
    },
    error: {
      light: "#ef5350",
      // main: "#d32f2f",
      // dark: "#c62828"
    },
    color: {
      default: "#fff"
    },
    background: {
      default: "#282C33",
      paper: "#1E1E1E",
      transparent: "transparent"
    }
  }
};

const TheTheme = ({children}) => {
  const [state, setState] = useState(false);
  return (
    <ThemeProvider theme={state ? theme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default TheTheme