import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Memory, Speed, Security } from '@mui/icons-material';

const features = [
  { icon: <Memory />, title: "Premium Hardware", desc: "Sourcing the latest RAMs, CPUs, and motherboards." },
  { icon: <Speed />, title: "Data-Driven", desc: "Powerful administrative control for real-time stock management." },
  { icon: <Security />, title: "Secure Ecosystem", desc: "Safety-first approach for all consumer transactions." }
];

const AboutUs = () => (
  <Box sx={{ py: 10, bgcolor: '#0D1E31' }}>
    <Container maxWidth="lg">
      <Typography variant="h3" fontWeight="800" textAlign="center" gutterBottom>
        Why Zed-Eco?
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ color: 'gray', mb: 6, maxWidth: '700px', mx: 'auto' }}>
        We bridge the gap between seamless consumer shopping and powerful administrative control.
      </Typography>
      <Grid container spacing={4}>
        {features.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper sx={{ p: 4, bgcolor: '#0A1929', textAlign: 'center', border: '1px solid rgba(0,116,217,0.2)' }}>
              <Box sx={{ color: '#2ECC40', mb: 2 }}>{f.icon}</Box>
              <Typography variant="h6" fontWeight="700">{f.title}</Typography>
              <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>{f.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default AboutUs;