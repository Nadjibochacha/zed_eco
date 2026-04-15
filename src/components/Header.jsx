import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, InputBase, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Search as SearchIcon, ShoppingCart, AccountCircle, SettingsInputComponent } from '@mui/icons-material';

const themeColors = {
  electricBlue: '#0074D9',
  techGreen: '#2ECC40',
};

const StyledAppBar = styled(AppBar)({
  background: 'rgba(10, 25, 41, 0.9)',
  backdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${alpha(themeColors.electricBlue, 0.2)}`,
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 0.08),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.12) },
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
}));

const Header = () => (
  <StyledAppBar position="sticky" elevation={0}>
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <SettingsInputComponent sx={{ color: themeColors.techGreen, mr: 1, fontSize: 32 }} />
        <Typography variant="h5" fontWeight="900" sx={{ flexGrow: 1, letterSpacing: 1, color: '#FFF' }}>
          ZED-ECO
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 4 }}>
          <Button sx={{ color: 'rgba(255,255,255,0.7)' }}>Products</Button>
          <Button sx={{ color: 'rgba(255,255,255,0.7)' }}>About Us</Button>
          <Button sx={{ color: 'rgba(255,255,255,0.7)' }}>Brands</Button>
        </Box>

        <Search>
          <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
            <SearchIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }} />
            <InputBase placeholder="Search gear..." sx={{ color: 'white', ml: 1, fontSize: '0.9rem' }} />
          </Box>
        </Search>

        <Stack direction="row" spacing={1}>
          <IconButton sx={{ color: 'white' }}><ShoppingCart /></IconButton>
          <IconButton sx={{ color: 'white' }}><AccountCircle /></IconButton>
        </Stack>
      </Toolbar>
    </Container>
  </StyledAppBar>
);

export default Header;