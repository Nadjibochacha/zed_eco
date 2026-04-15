import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub, SettingsInputComponent } from '@mui/icons-material';

const Footer = () => (
  <Box sx={{ bgcolor: '#050C16', color: 'white', pt: 8, pb: 4, borderTop: '2px solid #0074D9' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <SettingsInputComponent sx={{ color: '#2ECC40' }} />
            <Typography variant="h6" fontWeight="900">ZED-ECO</Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
            A modern Full-Stack E-commerce Ecosystem bridging the gap between shopping and administrative control.
          </Typography>
        </Grid>
        
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="700" gutterBottom>Shop</Typography>
          <Link href="#" color="inherit" underline="hover" display="block">Hardware</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Laptops</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Peripherals</Link>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="700" gutterBottom>Support</Typography>
          <Link href="#" color="inherit" underline="hover" display="block">Contact Us</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Track Order</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Privacy Policy</Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight="700" gutterBottom>Connect With Us</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><GitHub /></IconButton>
            <IconButton color="inherit"><LinkedIn /></IconButton>
          </Stack>
        </Grid>
      </Grid>
      
      <Typography variant="body2" sx={{ mt: 8, textAlign: 'center', color: 'gray' }}>
        © {new Date().getFullYear()} Zed-Eco Ecosystem. Built by Mr. ELHADJ-MOUSSA, Mr. Khanchali & Mr. SAMAI[cite: 19].
      </Typography>
    </Container>
  </Box>
);

export default Footer;