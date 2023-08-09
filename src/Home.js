import React from 'react';
import { Box, Avatar } from '@mui/material';
import sam from "./assets/sam.jpg"

export default function Home() {
  return (
    <Box
      sx={{
        width: 700,
        height: 400,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        margin: "auto",
        position: 'relative'
      }}
    > 
      <Avatar 
      alt="Sam G" 
      src={sam}
      sx={{ 
        width: 300, 
        height: 300,
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        bottom: '50%'
      }}
      />
    </Box>
  )
}
