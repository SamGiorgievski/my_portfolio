import React from 'react';
import { Container, Typography, Paper, Grid, CardMedia, Button, Box } from '@mui/material';
import eatSafely1 from "../src/assets/EatSafely1.png"
import profileMaker1 from "../src/assets/ProfilePicGenerator1.png"
import basicapi from "../src/assets/basicAPI.png"


const Projects = () => {
  return (
    <Container sx={{
      marginTop: "40px"

    }}>
      <Grid container spacing={3} sx={{
      }}>
        
        {/* Project 1 */}

        <Grid item xs={12}>
          
          <Paper elevation={3} 
          sx={{
            padding: 3
          }}>

            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
              }}> 

                <CardMedia
                  component="img"
                  alt="Basic API Screenshot"
                  height= "200"
                  image={eatSafely1}
                  sx={{
                    width: "40%"
                  }}
                  />

            <Grid 
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              
    
              <Typography variant="h4">EatSafely</Typography>
              <Typography variant="body1" sx={{
              }}>
                A helpful app for people with food allergies/intolerances. Create a profile, enter your allergies/intolerances, then scan any ingredient label to see if the product is safe for consumption. This app uses Tesseract OCR (optical character recognition) to extract the text from an image.
              </Typography>

              <Grid sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-end",
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
                  padding="none"
                  sx={{
                    padding: "0px !important"
                  }}
                  >
                    View source code
                  </Button>

                  
              </Grid>
              
              </Grid>

            </Box>

          </Paper>
        </Grid>




        {/* PROJECT 2 */}

        <Grid item xs={12}>

          <Paper 
          elevation={3} 
          sx={{
            padding: 3
          }}>

            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
              }}> 

              <CardMedia
                  component="img"
                  alt="Profile Pic Generator Screenshot"
                  height="200"
                  image={profileMaker1}
                  sx={{
                    width: "40%"
                  }}
                />

            <Grid container spacing={1} sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>

            <Typography variant="h4">Profile Pic Generator</Typography>
            <Typography variant="body1" sx={{
              marginBottom: 2
            }}>
              A fun app that generates unique profile pictures based on user prompts. Images are generated using openai api DALL·E model and stored in firebase.
            </Typography>

 
            <Grid sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
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
                sx={{
                  padding: "0px !important"
                }}
                >
                  View source code
                </Button>
            </Grid>

            </Grid>
            </Box>

          </Paper>
        </Grid>

                  {/* PROJECT 3 */}

        <Grid item xs={12}>
          
          <Paper elevation={3} 
          sx={{
            padding: 3
          }}>

            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
              }}> 

                <CardMedia
                  component="img"
                  alt="Basic API Screenshot"

                  image={basicapi}
                  sx={{
                    width: "40%"
                  }}
                  />

            <Grid 
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              
    
              <Typography variant="h4">Basic API</Typography>
              <Typography variant="body1" sx={{
              }}>
                A simple API backend project that demonstrates CRUD
                operations with a database. The purpose of me building this app was to learn Postman, and pgAdmin.
              </Typography>

              <Grid sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-end",
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
                  padding="none"
                  sx={{
                    padding: "0px !important"
                  }}
                  >
                    View source code
                  </Button>

                  
              </Grid>
              
              </Grid>

            </Box>

          </Paper>
        </Grid>


      </Grid>
    </Container>
  );
};

export default Projects;