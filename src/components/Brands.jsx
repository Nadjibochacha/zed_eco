import React from 'react';
import { Box, Container, Stack, Typography, alpha } from '@mui/material';

const brandNames = ["Intel", "AMD", "Nvidia", "Corsair", "Asus", "MSI"];

const Brands = () => (
  <Box sx={{ py: 6, bgcolor: '#0A1929', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <Container maxWidth="lg">
      <Stack 
        direction="row" 
        spacing={4} 
        flexWrap="wrap" 
        justifyContent="space-around" 
        alignItems="center"
        sx={{ opacity: 0.6, filter: 'grayscale(100%)' }}
      >
        {brandNames.map((brand) => (
          <Typography 
            key={brand} 
            variant="h4" 
            fontWeight="900" 
            sx={{ 
              color: alpha('#FFF', 0.15), 
              userSelect: 'none',
              '&:hover': { color: '#2ECC40', filter: 'grayscale(0%)', transition: '0.3s' } 
            }}
          >
            {brand}
          </Typography>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default Brands;