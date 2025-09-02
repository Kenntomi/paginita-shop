import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  Divider,
  TextField,
  IconButton,
  Breadcrumbs,
  Link,
  Alert,
} from '@mui/material';
import { Add, Remove, ShoppingCart, ArrowBack } from '@mui/icons-material';
import { getProductById } from '../utils/mockData';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchedProduct = getProductById(id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setTotalPrice(fetchedProduct.price);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [quantity, product]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (!product) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h5">Producto no encontrado</Typography>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Volver a la tienda
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Inicio
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href={`/category/${product.category}`}
          >
            {product.category === 'electronics'
              ? 'Electrónicos'
              : product.category === 'clothing'
              ? 'Ropa'
              : product.category === 'home'
              ? 'Hogar'
              : 'Juguetes'}
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>

        {addedToCart && (
          <Alert severity="success" sx={{ mb: 2 }}>
            ¡Producto añadido al carrito correctamente!
          </Alert>
        )}

        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ bgcolor: 'background.paper' }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ height: 400, objectFit: 'contain', p: 2 }}
              />
            </Card>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="h5" color="primary" sx={{ my: 2 }}>
              S/{product.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2" color={product.stock > 0 ? 'success.main' : 'error.main'}>
                {product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'}
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Quantity Selector */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Cantidad:
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={handleDecrement} disabled={quantity <= 1}>
                  <Remove />
                </IconButton>
                <TextField
                  value={quantity}
                  onChange={handleQuantityChange}
                  inputProps={{ min: 1, max: product.stock }}
                  type="number"
                  size="small"
                  sx={{ width: 60, mx: 1 }}
                />
                <IconButton onClick={handleIncrement} disabled={quantity >= product.stock}>
                  <Add />
                </IconButton>
              </Box>
            </Box>

            {/* Total Price */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1">Precio Total:</Typography>
              <Typography variant="h5" color="primary">
                S/{totalPrice.toFixed(2)}
              </Typography>
            </Box>

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ShoppingCart />}
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              fullWidth
              sx={{ mb: 2 }}
            >
              Añadir al Carrito
            </Button>

            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              fullWidth
            >
              Volver
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetail;