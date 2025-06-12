import {Typography} from "@mui/material"
import NavBar from "./Components/Navbar"

import { createTheme , ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
    secondary: {
      main: 'white',
    },
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
    <NavBar>
      Nav Bar
    </NavBar>


    </ThemeProvider>
  )
}

export default App
