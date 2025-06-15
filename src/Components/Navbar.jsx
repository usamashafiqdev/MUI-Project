import React from 'react'
import {AppBar , Typography , Toolbar , Button} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
  return (
    <>
        <AppBar position='static'color='primary'>
          <Toolbar>
             <Typography variant='h6' flexGrow={1}> Quick Bite Express</Typography>
             <Button variant='text' color='inherit' startIcon ={<LoginIcon/>}>Login</Button>
              <Button variant='text' color='inherit' endIcon ={<LogoutIcon/>}>LogOut</Button>
          </Toolbar>


         
        </AppBar>
    
    </> 
  )
} 
export default NavBar;