import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Chip } from '@mui/material';

const hardwareItems = [
  { id: 1, name: "DDR5 RAM 32GB", price: "$150", cat: "Memory", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400" },
  { id: 2, name: "Gaming Laptop Z1", price: "$1200", cat: "Laptops", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400" },
  { id: 3, name: "Mechanical Keyboard", price: "$80", cat: "Peripherals", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400" },
];

const Products = () => (
  <Box sx={{ py: 10 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight="800" mb={4}>Featured Hardware</Typography>
      <Grid container spacing={3}>
        {hardwareItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ bgcolor: '#102A43', borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardMedia component="img" height="200" image={item.img} alt={item.name} />
              <CardContent>
                <Chip label={item.cat} size="small" sx={{ mb: 1, bgcolor: '#0074D9' }} />
                <Typography variant="h6" fontWeight="700">{item.name}</Typography>
                <Typography variant="h5" color="#2ECC40" fontWeight="800" sx={{ my: 1 }}>{item.price}</Typography>
                <Button fullWidth variant="outlined" sx={{ mt: 1, borderColor: '#0074D9' }}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Products;