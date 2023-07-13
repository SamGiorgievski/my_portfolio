import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function Header( { handleThemeToggle }) {
  return (
    <AppBar 
    position="static">
        <Toolbar>

          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>


          <Link to="/projects">
            <Button 
            variant="text"
            color="primary"
            >
              Experience
            </Button>
          </Link>
          
          
          <Link to="/projects">
            <Button variant="text" href="/">
          Projects
          </Button>
          </Link>
          

          <LightModeIcon />
          <Switch 
          color="primary"
          defaultChecked
          onClick={handleThemeToggle}
          />
          <DarkModeIcon />
        </Toolbar>
      </AppBar>
  )
}
