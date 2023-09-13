import React from 'react';
import { Container, Typography, Paper, Grid, CardMedia, Link, Button } from '@mui/material';
import eatSafely1 from "../src/assets/EatSafely1.png"
import eatSafely2 from "../src/assets/EatSafely2.png"
import eatSafely3 from "../src/assets/EatSafely3.png"
import profileMaker1 from "../src/assets/ProfilePicGenerator1.png"
import basicapi1 from "../src/assets/basicAPI1.png"


const Projects = () => {
  return (
    <Container sx={{
      marginTop: "40px"

    }}>
      <Grid container spacing={3} sx={{
        marginBottom: 5
      }}>
        <Grid item xs={12}>
          <Paper 
          elevation={3} 
          sx={{
            padding: 3
          }}>
            <Typography variant="h4">EatSafely</Typography>
            <Typography variant="body1" sx={{
              marginBottom: 2
            }}>
              Create a profile, enter your allergies/intolerances, then scan any ingredient label to see if the product is safe for consumption.
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="EatSafely Screenshot"
                  height="200"
                  image={eatSafely1}
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="EatSafely Screenshot"
                  height="200"
                  image={eatSafely2}
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="EatSafely Screenshot"
                  height="200"
                  image={eatSafely3}
                />
              </Grid>

              <Grid sx={{
                width: "100%",
                marginLeft: 2,
                marginTop: 2,
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flex: "wrap"
              }}>
                <Typography variant="body2" sx={{  
                  fontStyle: 'italic' }}>
                  Tech Stack: React, Node.js, Express, Tesseract OCR
                </Typography>
                <Button 
                variant="text"
                color="primary"
                target="_blank" href="https://github.com/SamGiorgievski/EatSafely"
                >
                  View source code
                </Button>
            </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper 
          elevation={3} 
          sx={{
            padding: 3
          }}>
            <Typography variant="h4">Profile Pic Generator</Typography>
            <Typography variant="body1" sx={{
              marginBottom: 2
            }}>
              A fun app that generates unique profile
              pictures based on user prompts.
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Profile Pic Generator Screenshot"
                  height="200"
                  image={profileMaker1}
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Profile Pic Generator Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Profile Pic Generator Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
              </Grid>

            <Grid sx={{
                width: "100%",
                marginLeft: 2,
                marginTop: 2,
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flex: "wrap"
              }}>
                <Typography variant="body2" sx={{  
                  fontStyle: 'italic' }}>
                  Tech Stack: React, React Router, Firebase
                </Typography>
                <Button 
                variant="text"
                color="primary"
                target="_blank" href="https://github.com/SamGiorgievski/image_generation"
                >
                  View source code
                </Button>
            </Grid>

            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} 
          sx={{
            padding: 3
          }}>
            <Typography variant="h4">Basic API</Typography>
            <Typography variant="body1" sx={{
              marginBottom: 2
            }}>
              Basic API is a simple API backend project that demonstrates CRUD
              operations with a database.
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Basic API Screenshot"
                  height="200"
                  image={basicapi1}
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Basic API Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Basic API Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
              </Grid>

            <Grid sx={{
                width: "100%",
                marginLeft: 2,
                marginTop: 2,
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flex: "wrap"
              }}>
                <Typography variant="body2" sx={{  
                  fontStyle: 'italic' }}>
                  Tech Stack: React, Node.js, Express, Postman
                </Typography>
                <Button 
                variant="text"
                color="primary"
                target="_blank" href="https://github.com/SamGiorgievski/basic-api"
                >
                  View source code
                </Button>
            </Grid>
            
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;