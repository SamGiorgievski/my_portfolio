import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';



export default function Header( { handleThemeToggle }) {
  return (
    <AppBar 
    position="static"
    
    >
        <Toolbar 
        sx={{
          width: "100%",
          display:"flex",
          justifyContent:"space-between"
        }}
        >

          <Typography 
          variant="h6" 
          component="div" 
          sx={{ }}>
            SG Portfolio
          </Typography>

          <Box>


          <Link to="/">
              <Button 
              variant="text"
              color="primary"
              >
                Home
              </Button>
            </Link>

            <Link to="/experience">
              <Button 
              variant="text"
              color="primary"
              >
                Experience
              </Button>
            </Link>
            
            
            <Link to="/projects">
              <Button variant="text">
            Projects
            </Button>
            </Link>
          </Box>
          
          <Box 
          sx={{
            display: "flex",
            flexDirection:"row",
            alignItems:"center"
          }}>
            <LightModeIcon />
            <Switch 
            color="primary"
            defaultChecked
            onClick={handleThemeToggle}
            />
            <DarkModeIcon />
          </Box>
        </Toolbar>
      </AppBar>
  )
}
