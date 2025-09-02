import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Rating, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ 
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          mb: 1
        }}>
          {product.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
          <Typography variant="h6" color="primary">
            S/{product.price.toFixed(2)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" color={product.stock > 0 ? 'success.main' : 'error.main'}>
              {product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          component={Link} 
          to={`/product/${product.id}`}
          fullWidth
          variant="contained"
          disabled={product.stock <= 0}
        >
          Ver Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;