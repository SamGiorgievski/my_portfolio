import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    position="fixed"
    sx={{
      height: "65px"
    }}
    >
        <Toolbar 
        sx={{
          display:"flex",
          justifyContent: { xs: "center", sm:"space-between"},
          alignItems: "center",
          height: "100%"
        }}
        >

            <Typography 
            variant="h5" 
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

          <Link to="/" >
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
            {/* <LightModeIcon />
            <Switch 
            color="primary"
            defaultChecked
            onClick={handleThemeToggle}
            />
            <DarkModeIcon /> */}
            <Link to="https://github.com/SamGiorgievski" target="_blank">
              <GitHubIcon color="primary" sx={{
                fontSize: 30
              }}></GitHubIcon>
            </Link>
            <Link to="https://www.linkedin.com/in/samgiorgievski/" target="_blank">
              <LinkedInIcon color="primary" sx={{
                marginLeft: "10px",
                fontSize: 30
              }}></LinkedInIcon>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
  )
}