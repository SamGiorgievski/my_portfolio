import React, {  useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./Home";
import Header from "./Header";
import Projects from "./Projects";
import Experience from "./Experience";
import {Helmet} from "react-helmet";


function App() {

  // State
  const [themeToggle, setThemeToggle] = useState("dark")

  // Theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const handleThemeToggle = () => {
    console.log(themeToggle)
    setThemeToggle((prev) => (
      (themeToggle === "dark" ? "light" : "dark")
      ));
    console.log(themeToggle)
  }

  const theme = themeToggle === "dark" ? darkTheme : lightTheme;

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">

      <Helmet>
        <title>Sam's Portfolio</title>
        <meta name="description" content="Sam Giorgievski's full-stack web developer portfolio" />
      </Helmet>

        <Header 
        handleThemeToggle={handleThemeToggle}
        />
        <Routes>
          <Route 
          path ="/" 
          index element = {<Home/>}
          />

          <Route 
          path ="/projects" 
          index element = {<Projects/>}
          />

          <Route 
          path ="/experience" 
          index element = {<Experience/>}
          />


        </Routes>

      </div>
    </ThemeProvider>
  );
}

export default App;
