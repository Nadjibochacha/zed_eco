import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Brands from '../components/Brands';

const darkTheme = createTheme({
  palette: { mode: 'dark', primary: { main: '#0074D9' }, background: { default: '#0A1929' } },
});

const Landing = () => (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Brands />
        <AboutUs />
        <Products />
      </Box>
      <Footer />
    </Box>
  </ThemeProvider>
);

export default Landing;