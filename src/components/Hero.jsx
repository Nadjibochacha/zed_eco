import React from 'react';
import { Box, Container, Typography, Stack, Button, Paper } from '@mui/material';
import { alpha } from '@mui/material/styles';

const Hero = () => {
  const electricBlue = '#0074D9';
  const techGreen = '#2ECC40';

  return (
    <Box sx={{ 
      pt: { xs: 8, md: 15 }, pb: { xs: 8, md: 12 }, 
      background: 'radial-gradient(circle at 20% 30%, #102A43 0%, #0A1929 100%)',
    }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center">
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="overline" sx={{ color: techGreen, fontWeight: 800, letterSpacing: 4 }}>
              ULTIMATE HARDWARE
            </Typography>
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '3.2rem', md: '4.8rem' }, 
              fontWeight: 900, mb: 3, lineHeight: 1.1,
              color: '#FFFFFF'
            }}>
              Master Your <br /> Build.
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, fontWeight: 400, maxWidth: '500px' }}>
              Premium RAMs, high-end motherboards, and elite peripherals designed for the modern full-stack ecosystem[cite: 14].
            </Typography>
            
            <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Button variant="contained" sx={{ 
                bgcolor: electricBlue, px: 5, py: 1.8, borderRadius: '8px',
                fontWeight: 'bold', '&:hover': { bgcolor: '#005BB7' }
              }}>
                Explore Catalog
              </Button>
              <Button variant="outlined" sx={{ 
                borderColor: alpha('#FFF', 0.3), color: '#FFF', px: 5, borderRadius: '8px',
                '&:hover': { borderColor: techGreen, color: techGreen }
              }}>
                View Deals
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, position: 'relative' }}>
            <Paper elevation={0} sx={{ 
              p: 1, bgcolor: 'transparent',
              transform: 'perspective(1000px) rotateY(-10deg)',
            }}>
              <Box component="img" 
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800" 
                alt="Hardware Display"
                sx={{ width: '100%', borderRadius: 4, boxShadow: `0 0 40px ${alpha(electricBlue, 0.3)}` }}
              />
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;