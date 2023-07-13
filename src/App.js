import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableFooter, TablePagination, TableRow, TableSortLabel, Paper, useTheme, ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./Home";
import Header from "./Header";
import Projects from "./Projects";
import Experience from "./Experience";


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
