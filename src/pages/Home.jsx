import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, Tabs, Tab, Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { getProductsByCategory } from '../utils/mockData';

const Home = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(category || 'all');
  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    if (category) {
      setCurrentCategory(category);
    }
  }, [category]);

  useEffect(() => {
    // Fetch products based on category
    const fetchedProducts = getProductsByCategory(currentCategory);
    setProducts(fetchedProducts);
    setPage(1); // Reset to first page when category changes
  }, [currentCategory]);

  const handleCategoryChange = (event, newCategory) => {
    setCurrentCategory(newCategory);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Calculate pagination
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageCount = Math.ceil(products.length / productsPerPage);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Nuestra Galería de Productos
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Explora nuestra selección de productos de alta calidad
        </Typography>

        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs 
            value={currentCategory} 
            onChange={handleCategoryChange} 
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Todos" value="all" />
            <Tab label="Electrónicos" value="electronics" />
            <Tab label="Ropa" value="clothing" />
            <Tab label="Hogar" value="home" />
            <Tab label="Juguetes" value="toys" />
          </Tabs>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))
          ) : (
            <Box sx={{ width: '100%', textAlign: 'center', py: 5 }}>
              <Typography variant="h6">
                No se encontraron productos en esta categoría.
              </Typography>
            </Box>
          )}
        </Grid>

        {/* Pagination */}
        {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination 
              count={pageCount} 
              page={page} 
              onChange={handlePageChange} 
              color="primary" 
              size="large"
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Home;