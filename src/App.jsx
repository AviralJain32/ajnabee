import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import {createTheme} from "@mui/material/styles"
// import { primaryColor } from './Styles/global.style';
import { ThemeProvider } from '@emotion/react'
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: `${primaryColor}`
//     }
//   }
// });
const App = () => {
  return (
    // <ThemeProvider theme={theme}>
      <LandingPage/>
    // </ThemeProvider>
  )
}

export default App
