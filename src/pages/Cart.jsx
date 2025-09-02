import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Divider,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Delete, Add, Remove, ShoppingBag } from '@mui/icons-material';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const calculatedSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);

    // Calculate tax (18% IGV)
    const calculatedTax = calculatedSubtotal * 0.18;
    setTax(calculatedTax);

    // Calculate total
    setTotal(calculatedSubtotal + calculatedTax);
  }, [cartItems]);

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity > 0 && newQuantity <= item.stock) {
      updateQuantity(item.id, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <ShoppingBag sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Tu carrito está vacío
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Parece que aún no has añadido productos a tu carrito.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Continuar Comprando
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tu Carrito de Compra
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Cart Items */}
          <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ mb: 2, display: 'flex', width: '100%', maxWidth: '600px' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 120, objectFit: 'contain', p: 1 }}
                  image={item.image}
                  alt={item.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      S/{item.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pl: 2,
                      pb: 2,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Remove />
                      </IconButton>
                      <TextField
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item, parseInt(e.target.value) || 1)
                        }
                        inputProps={{ min: 1, max: item.stock }}
                        type="number"
                        size="small"
                        sx={{ width: 60, mx: 1 }}
                      />
                      <IconButton
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="subtitle1" sx={{ mr: 2 }}>
                        S/{(item.price * item.quantity).toFixed(2)}
                      </Typography>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Card>
            ))}

            <Button
              variant="outlined"
              onClick={() => navigate('/')}
              sx={{ mt: 2 }}
            >
              Continuar Comprando
            </Button>
          </Grid>

          {/* Cart Summary */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: '400px' }}>
              <Typography variant="h6" gutterBottom>
                Resumen del Pedido
              </Typography>
              <List disablePadding>
                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary="Subtotal" />
                  <Typography variant="body1">S/{subtotal.toFixed(2)}</Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary="IGV (18%)" />
                  <Typography variant="body1">S/{tax.toFixed(2)}</Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary="Envío" />
                  <Typography variant="body1">Gratis</Typography>
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary="Total" />
                  <Typography variant="h6">S/{total.toFixed(2)}</Typography>
                </ListItem>
              </List>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                onClick={() => navigate('/checkout')}
              >
                Proceder al Pago
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;