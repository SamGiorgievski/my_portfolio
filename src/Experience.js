import React from 'react'
import { Box, Typography } from '@mui/material';

export default function Experience() {
  return (
    <>
    <Box
      sx={{

        backgroundColor: 'primary.dark',
        margin: "auto",
        width: '80%',
        height: '80%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative'
      }}
    > 
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
