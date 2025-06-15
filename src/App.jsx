import {Typography} from "@mui/material"
import NavBar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection";

import { createTheme , ThemeProvider } from '@mui/material/styles';
import { fromJSON } from "postcss"

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
   
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
    <NavBar>
      Nav Bar
    </NavBar>
    
    <HeroSection/>

    </ThemeProvider>
  )
}

export default App
