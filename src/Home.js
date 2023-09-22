import React, { useState, useEffect, useMemo } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import sam from "./assets/sam_profilepic.png";
import Collapse from '@mui/material/Collapse';


export default function Home() {
  const words = useMemo(() => ["helpful.", "interesting.", "creative.", "fun."], []); ;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
  }, [currentWordIndex, words]);

  return (
    <Box sx={{
      height: "90vh"
    }}>
      <Box
        sx={{
          width: "100vw",
          margin: "auto",
          position: 'relative',
          marginTop: "65px",
          display: 'flex',
          flexDirection: {xs: "column", sm: "column", md:"row"},
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: {xs: "center", sm: "start"},
          whiteSpace: "nowrap",
          minWidth: "350px"
        }}
      > 
        <Avatar 
        alt="Sam G" 
        src={sam}
        sx={{ 
          width: "50%",
          height: "auto",
          maxWidth: "300px",
          maxheight: "300px",
          marginTop: {xs: "20px", sm: "20px", md:"50px"}
        }}
        />

        <Box sx={{
          marginLeft: {xs: "0px", sm: "0px", md:"50px"},
          textAlign: {xs: "center", sm: "center", md:"left"},
          marginTop: {xs: "20px", sm: "20px", md:"0px"}
        }}>
        <Typography 
        // variant="h3" 
        gutterBottom
        sx={{
          fontSize: {xs: "20px", sm: "50px"}
        }}
        >
          Sam Giorgievski
        </Typography>

        <Typography 
        variant="h6" 
        gutterBottom
        sx={{
          left: '50%',
          fontSize: {xs: "10px", sm: "20px"}
        }}
        >
          full-stack developer
        </Typography>
        </Box>
      </Box>


      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
        flexWrap: "wrap", 
        textAlign: "center",
        minWidth: {xs: "350px", sm: "600px"},
        maxWidth: {xs: "400px", sm: "700px", lg: "1000px"},
        marginTop: {xs: "20px", sm: "50px"}
      }}>
        
      <Typography 
        variant="h6" 
        gutterBottom
        component="div"
        display="inline"
        sx={{
          marginRight: "5px",
          fontSize: {xs: "10px", sm: "20px"}
        }}
        >
          From scrum master/project mgr to fullstack web developer, 
        </Typography>

        <Typography 
        variant="h6" 
        gutterBottom
        display={'inline'}
        sx={{
          marginRight: "5px",
          marginLeft: "5px",
          fontSize: {xs: "10px", sm: "20px"}
        }}
        >
          I love building apps that are
        </Typography>


        <Typography
          color="primary"
          variant="h6"
          display={'inline'}
          sx={{
            marginRight: "5px",
            fontSize: {xs: "10px", sm: "20px"}
          }}
        >
          <Collapse 
          orientation="horizontal" 
          in={true}
          sx={{
            width: "50px"
          }}
            {...(currentWord ? { timeout: 500 } : {})}
          >
            {currentWord} 
          </Collapse>

          </Typography>
        </Box>

      {/* <Divider variant="middle" /> */}



  {/* SKILLS */}

      <Box sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minWidth: "350px",
        maxWidth: "1300px",
        margin: "auto"
      }}>

        {/* <Typography variant="h4">About me</Typography> */}


    

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: 5,
          width: "90%",
          height: "50%",
          minWidth: "100px"
        }}> 

        {/* Row 1 */}
        <Box sx={{
          display: "flex",
          flexDirection: "row"
        }}>

          <Box sx={{
            width: {xs: "60px", sm: "125px"},
            margin: "10px"
          }}>
            
            <Typography
            variant="h6" 
            sx={{
              textAlign: "end",
              fontSize: {xs: "10px", sm: "20px"}
          }}>
              Tech Skills
            </Typography>
            </Box>

            <Box sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              marginLeft: "10px"
              
            }}>
              <Typography sx={{
                fontSize: {xs: "10px", sm: "20px"}
              }}>Javascript, React, NodeJS, Express, HTML, CSS, Ruby on rails, jQuery, Ajax</Typography>

            </Box>
          
        </Box>

        {/* Row 2 */}

        <Box sx={{
          display: "flex",
          flexDirection: "row"
        }}>

          <Box sx={{
            width: {xs: "60px", sm: "125px"},
            margin: "10px"
          }}>
            <Typography
            variant="h6" 
            sx={{
              textAlign: "end",
              fontSize: {xs: "10px", sm: "20px"}
            }}>
              Other Skills
            </Typography>

            
            
          </Box>

          <Box sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              marginLeft: "10px"
              
            }}>
              <Typography sx={{
                fontSize: {xs: "10px", sm: "20px"}
              }}>GraphQL, Apollo graphQL, PostgreSQL, Firebase, Jest, Storybook, Cypress, Mocha&Chai</Typography>

            </Box>

        </Box>

        {/* Row 3 */}

        <Box sx={{
          display: "flex",
          flexDirection: "row"
        }}> 

        <Box sx={{
          width: {xs: "60px", sm: "125px"},
          margin: "10px"
        }}>
          <Typography 
          variant="h6" 
          sx={{
            textAlign: "end",
            fontSize: {xs: "10px", sm: "20px"}
          }}>
            Tools
          </Typography>
      
        </Box>

        <Box sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              marginLeft: "10px"
              
            }}>
              <Typography sx={{
                fontSize: {xs: "10px", sm: "20px"}
              }}> Jira (Expert), Postman, PGAdmin, Miro, monday.com, Trello</Typography>

            </Box>
      </Box>
        
        
        </Box>


      </Box>

      {/* <Box
          sx={{
            width: "60%",
            margin: "auto",
            height: "30vh",
            paddingTop: 3,
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
          I LOVED working with developers and learned so much that it inspired me to attend a full-stack web dev bootcamp at Lighthouse Labs and become one myself! It was intense, but I loved every moment of it. Now, i'm looking to for an opportunity to take my tech experience, showcase my skills and grow as a developer.
          </Typography>

          </Box> */}




      {/* <Box
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
          <Typography variant="h4" gutterBottom sx={{
            whiteSpace: "nowrap"
          }}>
            Skills and Tech
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
  
            <Chip label="Apollo GraphQL" />
            <Chip label="PostgreSQL" />
            <Chip label="Firebase" />

            <Chip label="Jest" />
            <Chip label="Storybook" />
            <Chip label="Cypress" />
            <Chip label="Mocha&Chai" />
  
          </Box>

          </Box>

          <Typography variant="h4" gutterBottom sx={{ 
            marginTop: 3,
            whiteSpace: "nowrap" }}>
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
            <Chip label="video games" />

            </Box>
          </Box>
        </Box> */}

    </Box>
  )
}
