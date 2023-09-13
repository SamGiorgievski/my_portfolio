import React from 'react';
import { Container, Typography, Paper, Grid, CardMedia } from '@mui/material';

const Projects = () => {
  return (
    <Container sx={{
      marginTop: "40px"

    }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper 
          elevation={3} 
          sx={{
            padding: 3
          }}>
            <Typography variant="h4">EatSafely</Typography>
            <Typography variant="body1">
              EatSafely is a food safety application that allows users to check
              the safety rating of restaurants in their area.
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="EatSafely Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="EatSafely Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="EatSafely Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
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
            <Typography variant="body1">
              Profile Pic Generator is a fun tool that generates unique profile
              pictures based on user prompts.
            </Typography>
            <Grid container spacing={1}>
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
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Profile Pic Generator Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
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
            <Typography variant="body1">
              Basic API is a simple API backend project that demonstrates CRUD
              operations with a database.
            </Typography>
            <Grid container spacing={1}>
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
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt="Basic API Screenshot"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;