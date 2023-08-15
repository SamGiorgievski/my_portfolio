import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import sam from "./assets/sam.jpg";

export default function Home() {
  return (
    <>
    <Box
      sx={{
        width: 700,
        height: 400,
        // backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
        margin: "auto",
        position: 'relative',
        top:'30%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    > 
      <Avatar 
      alt="Sam G" 
      src={sam}
      sx={{ 
        width: 250, 
        height: 250,
        // margin: 'auto',
        // position: 'absolute',
        // top: '50%',
        // bottom: '50%'
      }}
      />

      <Typography 
      variant="h3" 
      gutterBottom
      sx={{
        left: '50%'
        
      }}
      >
        Sam Giorgievski
      </Typography>


    </Box>
    </>
  )
}
