import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider, Paper } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocationOn, Payment } from '@mui/icons-material';

const Footer = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
        borderRadius: 0
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', borderBottom: '2px solid', borderColor: 'secondary.main', pb: 1, display: 'inline-block' }}>
              Paginita Shop
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Tu tienda online de confianza para encontrar los mejores productos al mejor precio. Ofrecemos calidad, variedad y servicio excepcional.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Payment sx={{ fontSize: 40, opacity: 0.8 }} />
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                Pagos seguros con todas las tarjetas
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', borderBottom: '2px solid', borderColor: 'secondary.main', pb: 1, display: 'inline-block' }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="/" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Inicio
              </Link>
              <Link href="/category/electronics" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Electrónicos
              </Link>
              <Link href="/category/clothing" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Ropa
              </Link>
              <Link href="/category/home" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Hogar
              </Link>
              <Link href="/category/toys" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Juguetes
              </Link>
              <Link href="/cart" color="inherit" display="block" sx={{ '&:hover': { color: 'secondary.main' } }}>
                • Carrito
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', borderBottom: '2px solid', borderColor: 'secondary.main', pb: 1, display: 'inline-block' }}>
              Información Legal
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Términos y Condiciones
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Política de Privacidad
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Política de Cookies
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1.5, '&:hover': { color: 'secondary.main' } }}>
                • Política de Devoluciones
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ '&:hover': { color: 'secondary.main' } }}>
                • Preguntas Frecuentes
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', borderBottom: '2px solid', borderColor: 'secondary.main', pb: 1, display: 'inline-block' }}>
              Contáctanos
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">
                  info@paginitashop.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">
                  +34 123 456 789
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <LocationOn sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">
                  Calle Comercio 123, 28001 Madrid, España
                </Typography>
              </Box>
              <Box>
                <IconButton color="inherit" aria-label="Facebook" sx={{ mr: 1, bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'secondary.main', color: 'white' } }}>
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter" sx={{ mr: 1, bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'secondary.main', color: 'white' } }}>
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" aria-label="Instagram" sx={{ mr: 1, bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'secondary.main', color: 'white' } }}>
                  <Instagram />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'secondary.main', color: 'white' } }}>
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <Box>
          <Typography variant="body2" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Paginita Shop. Todos los derechos reservados. Diseñado con ♥ en España.'}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;