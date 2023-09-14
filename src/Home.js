import React from 'react';
import { Box, Avatar, Typography, Divider, Chip } from '@mui/material';
import sam from "./assets/sam.jpg";



export default function Home() {
  return (
    <>
    <Box
      sx={{
        width: "50%",
        height: "30vh",
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
          width: "60%",
          margin: "auto",
          height: "30vh",
          paddingTop: 3, // Adjust as needed
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <Typography sx={{
          margin: 3
        }}>
        Hey there, I'm Sam Giorgievski, and I've been on quite the tech adventure for the past 8 years. 
        
        
        </Typography>

        <Typography sx={{
          margin: 3
        }}>
        My last position as Project Manager/Scrum Master taught me everything about the software development lifecycle, and what it means to work effectively with a team of developers. 
        </Typography>

        <Typography sx={{
          margin: 3
        }}>
        I LOVED working with developers and learned so much that it inspired me to attend a full-stack web dev bootcamp at Lighthouse Labs and become one myself! It was intense, but I loved every moment of it. 
        </Typography>

        </Box>

    <Divider variant="middle" />

    <Box
        sx={{
          width: "50%",
          margin: "auto",
          height: "30vh",
          paddingTop: 3, // Adjust as needed
          textAlign: 'center',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
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

          <Chip label="Salsa dancing" />
          <Chip label="Biking" />
          <Chip label="Learning spanish" />
          <Chip label="crypto mining & investing" />
          <Chip label="gluten-free cooking" />

          </Box>
        </Box>
      </Box>

    </>
  )
}
