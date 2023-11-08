import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Card, CardMedia} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import portfoliopic3 from "./assets/portfoliopic3.jpg";


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
      height: "80vh"
    }}>
      <Box
        sx={{
          width: "100vw",
          margin: "auto",
          position: 'relative',
          marginTop: "150px",
          display: 'flex',
          flexDirection: {xs: "column", sm: "column", md:"row"},
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: {xs: "center", sm: "start"},
          whiteSpace: "nowrap",
          minWidth: "350px"
        }}
      > 

          <Card>
            <CardMedia
              component="img"
              height="400"
              image={portfoliopic3}
              alt="Your Image Alt Text"
            />
          </Card>

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
        marginTop: {xs: "20px", sm: "100px"}
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
          From software project manager to fullstack web developer, 
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

    </Box>
  )
}
