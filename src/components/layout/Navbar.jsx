import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Drawer, List, ListItem, ListItemText, Box, Container, Avatar } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon, Home, Devices, Checkroom, Weekend, Toys } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount = 0 }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categories = [
    { name: 'Todos', path: '/', icon: <Home /> },
    { name: 'Electrónicos', path: '/category/electronics', icon: <Devices /> },
    { name: 'Ropa', path: '/category/clothing', icon: <Checkroom /> },
    { name: 'Hogar', path: '/category/home', icon: <Weekend /> },
    { name: 'Juguetes', path: '/category/toys', icon: <Toys /> },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
          Paginita Shop
        </Typography>
      </Box>
      <List>
        {categories.map((category) => (
          <ListItem button key={category.name} component={Link} to={category.path}>
            <Box sx={{ mr: 2, color: 'primary.main' }}>{category.icon}</Box>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="primary" elevation={3}>
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menú"
            sx={{ mr: 2, display: { sm: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Avatar 
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Logo" 
              sx={{ width: 40, height: 40, mr: 1, display: { xs: 'none', sm: 'flex' } }}
            />
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit',
                fontWeight: 'bold',
                letterSpacing: '0.5px'
              }}
            >
              Paginita Shop
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {categories.map((category) => (
              <Button 
                key={category.name} 
                color="inherit" 
                component={Link} 
                to={category.path}
                sx={{ 
                  mx: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                <Box sx={{ mb: 0.5 }}>{category.icon}</Box>
                {category.name}
              </Button>
            ))}
          </Box>
          
          <Button 
            color="inherit" 
            component={Link} 
            to="/cart"
            sx={{ 
              ml: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <Badge 
              badgeContent={cartItemCount} 
              color="secondary"
              sx={{ '& .MuiBadge-badge': { fontWeight: 'bold' } }}
            >
              <ShoppingCart />
            </Badge>
            <Typography sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
              Carrito
            </Typography>
          </Button>
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;