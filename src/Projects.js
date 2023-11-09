import React from 'react';
import { Container, Typography, Paper, Grid, CardMedia, Button, Box } from '@mui/material';
import eatSafely1 from "../src/assets/EatSafely1.png"
import scheduler from "../src/assets/scheduler.png"
import profileMaker1 from "../src/assets/ProfilePicGenerator1.png"
import basicapi from "../src/assets/basicAPI.png"


const Projects = () => {
  return (
    <Container sx={{
      minWidth: "350px",
      marginTop: "90px",
      marginBottom: "25px"
    }}>
      <Grid container spacing={3} sx={{
      }}>

        {/* PROJECT 1 */}

        <Grid item xs={12}>
          
          <Paper elevation={3} 
          sx={{
            padding: 3,
            maxWidth: {xs: "600px", sm: "600px", md: "1050px", lg: "1050px", xl: "1050px"},
            margin: "auto"
          }}>

            <Box sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: "column", md: "row"},
              justifyContent: "space-around",
              alignItems: { xs: "center", sm: "center", md: "normal"}
              }}> 

                <CardMedia
                  component="img"
                  alt="EatSafely Screenshot"
                  height= "auto"
                  image={eatSafely1}
                  sx={{
                    width: { xs: "90%", sm: "90%", md: "40%"},
                    marginBottom: {xs: "10px", sm: "10px", md: "0px", lg: "0px", xl: "0px"},
                    marginLeft: {md: "30px", lg: "30px", xl: "30px"},
                    maxHeight: "250px",
                    maxWidth: "300px"
                  }}
                  />

            <Grid 
            sx={{
              width: { xs: "90%", sm: "90%", md: "70%"},
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: {xs: "center", sm: "center", md: "center"},
              marginLeft: {md: "50px", lg: "50px", xl: "50px"},
              marginRight: {md: "30px", lg: "30px", xl: "30px"}
            }}>
              
    
              <Typography variant="h4" sx={{
                marginBottom: {xs: "5px", sm: "5px"}
              }}>
                EatSafely
                </Typography>
              <Typography variant="body1" sx={{
                marginBottom: {xs: "10px", sm: "10px"},
                wordWrap: "break-word"
              }}>
                A helpful app for people with food allergies and intolerances. Create a profile, enter your allergies and intolerances, then scan any ingredient label to see if the product is safe for consumption. This app uses Tesseract OCR (optical character recognition) to extract the text from an image.
              </Typography>

              <Grid sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {xs: "column", sm: "column", md: "row"},
                  alignItems: {xs: "center", sm: "center", md: "flex-end"},
                  justifyContent: "space-between",
                  flex: "wrap"
                }}>
                  <Typography variant="body2" sx={{  
                    fontStyle: 'italic',
                    marginBottom: {xs: "5px", sm: "5px", md: "0px", lg: "0px", xl: "0px"},
                    textAlign: {xs: "center", sm: "center"} }}>
                    Stack: React, Node.js, Express, Tesseract OCR
                  </Typography>
                  <Button 
                  variant="text"
                  color="primary"
                  target="_blank" href="https://github.com/SamGiorgievski/EatSafely"
                  padding="none"
                  sx={{
                    padding: "0px !important",
                    whiteSpace: "nowrap"
                  }}
                  >
                    View code
                  </Button>

                  
              </Grid>
              
              </Grid>

            </Box>

          </Paper>
        </Grid>

      {/* PROJECT 2 */}


        <Grid item xs={12}>
          
          <Paper elevation={3} 
          sx={{
            padding: 3,
            maxWidth: {xs: "600px", sm: "600px", md: "1050px", lg: "1050px", xl: "1050px"},
            margin: "auto"
          }}>

            <Box sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: "column", md: "row"},
              justifyContent: "space-around",
              alignItems: { xs: "center", sm: "center", md: "normal"}
              }}> 

                <CardMedia
                  component="img"
                  alt="Scheduler Screenshot"
                  height= "auto"
                  image={scheduler}
                  sx={{
                    width: { xs: "90%", sm: "90%", md: "40%"},
                    marginBottom: {xs: "10px", sm: "10px", md: "0px", lg: "0px", xl: "0px"},
                    marginLeft: {md: "30px", lg: "30px", xl: "30px"},
                    maxHeight: "250px",
                    maxWidth: "300px"
                  }}
                  />

            <Grid 
            sx={{
              width: { xs: "90%", sm: "90%", md: "70%"},
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: {xs: "center", sm: "center", md: "center"},
              marginLeft: {md: "50px", lg: "50px", xl: "50px"},
              marginRight: {md: "30px", lg: "30px", xl: "30px"}
            }}>
              
    
              <Typography variant="h4" sx={{
                marginBottom: {xs: "5px", sm: "5px"}
              }}>
                Scheduler
                </Typography>
              <Typography variant="body1" sx={{
                marginBottom: {xs: "10px", sm: "10px"},
                wordWrap: "break-word"
              }}>
                A single-page app built with react that allows students to view available timeslots, and create/edit delete appointments with interviewers.
              </Typography>

              <Grid sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {xs: "column", sm: "column", md: "row"},
                  alignItems: {xs: "center", sm: "center", md: "flex-end"},
                  justifyContent: "space-between",
                  flex: "wrap"
                }}>
                  <Typography variant="body2" sx={{  
                    fontStyle: 'italic',
                    marginBottom: {xs: "5px", sm: "5px", md: "0px", lg: "0px", xl: "0px"},
                    textAlign: {xs: "center", sm: "center"} }}>
                    Stack: React, Node.js, Normalize, Jest, Storybook, Cypress
                  </Typography>
                  <Button 
                  variant="text"
                  color="primary"
                  target="_blank" href="https://github.com/SamGiorgievski/scheduler"
                  padding="none"
                  sx={{
                    padding: "0px !important",
                    whiteSpace: "nowrap"
                  }}
                  >
                    View code
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
            padding: 3,
            minWidth: "350px",
            maxWidth: {xs: "600px", sm: "600px", md: "1050px", lg: "1050px", xl: "1050px"},
            margin: "auto"
          }}>

            <Box sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: "column", md: "row"},
              justifyContent: "space-around",
              alignItems: { xs: "center", sm: "center", md: "normal"}
              }}> 

                <CardMedia
                  component="img"
                  alt="Profile Pic Generator Screenshot"
                  height= "auto"
                  image={profileMaker1}
                  sx={{
                    width: { xs: "90%", sm: "90%", md: "40%"},
                    marginBottom: {xs: "10px", sm: "10px", md: "0px", lg: "0px", xl: "0px"},
                    marginLeft: {md: "30px", lg: "30px", xl: "30px"},
                    maxHeight: "250px",
                    maxWidth: "300px"
                  }}
                  />

            <Grid 
            sx={{
              width: { xs: "90%", sm: "90%", md: "70%"},
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: {xs: "center", sm: "center", md: "center"},
              marginLeft: {md: "50px", lg: "50px", xl: "50px"},
              marginRight: {md: "30px", lg: "30px", xl: "30px"}
            }}>

            <Typography variant="h4" sx={{
              marginBottom: {xs: "5px", sm: "5px"}
            }}>Profile Picture Generator</Typography>
            <Typography variant="body1" sx={{
                marginBottom: {xs: "10px", sm: "10px"},
                wordWrap: "break-word"
              }}>
              A fun app that generates unique profile pictures based on user prompts. Images are generated using openai api DALL·E model and stored in firebase.
            </Typography>

 
            <Grid sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {xs: "column", sm: "column", md: "row"},
                  alignItems: {xs: "center", sm: "center", md: "flex-end"},
                  justifyContent: "space-between",
                  flex: "wrap"
                }}>
                <Typography variant="body2" sx={{  
                    fontStyle: 'italic',
                    marginBottom: {xs: "5px", sm: "5px", md: "0px", lg: "0px", xl: "0px"},
                    textAlign: {xs: "center", sm: "center"} }}>
                  Tech Stack: React, React Router, Firebase
                </Typography>
                <Button 
                variant="text"
                color="primary"
                target="_blank" href="https://github.com/SamGiorgievski/Profile-Picture-Generator"
                sx={{
                  padding: "0px !important",
                  whiteSpace: "nowrap"
                }}
                >
                  View code
                </Button>
            </Grid>

            </Grid>
            </Box>

          </Paper>
        </Grid>


        {/* PROJECT 4 */}

        <Grid item xs={12}>
          
        <Paper elevation={3} 
          sx={{
            padding: 3,
            minWidth: "350px",
            maxWidth: {xs: "600px", sm: "600px", md: "1050px", lg: "1050px", xl: "1050px"},
            margin: "auto"
          }}>

            <Box sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: "column", md: "row"},
              justifyContent: "space-around",
              alignItems: { xs: "center", sm: "center", md: "normal"}
              }}> 


                <CardMedia
                  component="img"
                  alt="Basic API Screenshot"
                  height= "auto"
                  image={basicapi}
                  sx={{
                    width: { xs: "90%", sm: "90%", md: "40%"},
                    marginBottom: {xs: "10px", sm: "10px", md: "0px", lg: "0px", xl: "0px"},
                    marginLeft: {md: "30px", lg: "30px", xl: "30px"},
                    maxHeight: "250px",
                    maxWidth: "300px"
                  }}
                  /> 
                  

            <Grid 
            sx={{
              width: { xs: "90%", sm: "90%", md: "70%"},
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: {xs: "center", sm: "center", md: "center"},
              marginLeft: {md: "50px", lg: "50px", xl: "50px"},
              marginRight: {md: "30px", lg: "30px", xl: "30px"}
            }}>
              
    
              <Typography variant="h4" sx={{
                marginBottom: {xs: "5px", sm: "5px"}
              }}>
                Access API
                </Typography>
              <Typography variant="body1" sx={{
                marginBottom: {xs: "10px", sm: "10px"},
                wordWrap: "break-word"
              }}>
                A simple API backend project that demonstrates CRUD
                operations with a database. The purpose of me building this app was to learn Postman, and pgAdmin.
              </Typography>

              <Grid sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {xs: "column", sm: "column", md: "row"},
                  alignItems: {xs: "center", sm: "center", md: "flex-end"},
                  justifyContent: "space-between",
                  flex: "wrap"
                }}>
                  <Typography variant="body2" sx={{  
                    fontStyle: 'italic',
                    marginBottom: {xs: "5px", sm: "5px", md: "0px", lg: "0px", xl: "0px"},
                    textAlign: {xs: "center", sm: "center"} }}>
                    Tech Stack: React, Node.js, Express, Postman
                  </Typography>
                  <Button 
                  variant="text"
                  color="primary"
                  target="_blank" href="https://github.com/SamGiorgievski/access-api"
                  padding="none"
                  sx={{
                    padding: "0px !important",
                    whiteSpace: "nowrap"
                  }}
                  >
                    View code
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