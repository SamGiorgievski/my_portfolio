import React from 'react';
import { Box, Avatar } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    > 
      <Avatar alt="Sam G" src="/assets/Sam.jpg" />
    </Box>
  )
}
