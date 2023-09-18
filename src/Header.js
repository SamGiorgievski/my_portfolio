import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, Switch, Menu, MenuItem } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';



export default function Header( { handleThemeToggle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar 
    position="static"
    >
        <Toolbar 
        sx={{
          width: "100%",
          display:"flex",
          justifyContent: { xs: "center", sm:"space-between"}
        }}
        >

          <Typography 
          variant="h6" 
          component={Link}
          to="/"
          color="textPrimary"
          sx={{ textDecoration: 'none',
          whiteSpace: "nowrap"
          
        }}
          >
            Sam's Portfolio
          </Typography>

          <Box sx={{
            display: { xs: 'none', sm: 'flex' }
            }}>


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


        {/* Menu */}
          <Box sx={{
            display: { xs: 'flex', sm: 'none' },
            textAlign: 'start'
            }}>

           <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon></MenuIcon>
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Typography 
                  component={Link}
                  to="/"
                  color="textPrimary"
                  sx={{ textDecoration: 'none',
                  }}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
              <Typography 
                  component={Link}
                  to="/experience"
                  color="textPrimary"
                  sx={{ textDecoration: 'none',
                  }}
                >
                  Experience
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
              <Typography 
                  component={Link}
                  to="/projects"
                  color="textPrimary"
                  sx={{ textDecoration: 'none',
                  }}
                >
                  Projects
                </Typography>
              </MenuItem>
            </Menu>

        
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
