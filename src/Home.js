import React from 'react';
import { Box, Avatar, Typography, Divider, Chip } from '@mui/material';
import sam from "./assets/sam.jpg";



export default function Home() {
  return (
    <>
    <Box
      sx={{
        width: "50%",
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

      <Box>
      <Typography 
      variant="h3" 
      gutterBottom
      sx={{
        left: '50%'
        
      }}
      >
        Sam Giorgievski
      </Typography>

      <Typography 
      variant="h6" 
      gutterBottom
      sx={{
        left: '50%'
        
      }}
      >
        full-stack developer
      </Typography>

      </Box>

    </Box>

    <Divider variant="middle" />

    <Box
        sx={{
          width: "50%",
          margin: "auto",
          paddingTop: 3, // Adjust as needed
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Skills and Tech Stack
        </Typography>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}> 

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 1
        }}>
          <Chip label="Javascript" />
          <Chip label="HTML" />
          <Chip label="React" />
          <Chip label="Ruby on Rails" />

          <Chip label="NodeJS" />
          <Chip label="jQuery" />
          <Chip label="Ajax" />

          <Chip label="Express" />
          <Chip label="GraphQL" />
 
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 1
        }}>

          <Chip label="Apollo GraphQL" />
          <Chip label="PostgreSQL" />
          <Chip label="Firebase" />

          <Chip label="Jest" />
          <Chip label="Storybook" />
          <Chip label="Cypress" />
          <Chip label="Mocha&Chai" />
 
        </Box>

        </Box>



        <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
          Personal Interests
        </Typography>

        <Typography variant="body1">
          Salsa dancing, biking, learning spanish, crypto mining & investing, gluten-free cooking
        </Typography>
      </Box>

    
    </>
  )
}
