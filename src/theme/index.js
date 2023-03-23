import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';

const theme = {
  fg: "palevioletred",
  bg: "white"
};

const darkTheme = {
  fg: "#282C33",
  bg: "white"
};

const TheTheme = ({children}) => {
  const [state, setState] = useState(true);
  return (
    <ThemeProvider theme={state ? theme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default TheTheme