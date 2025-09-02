import React, { useState } from 'react';
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  IconButton,
  Paper,
  Avatar,
  Box,
  Divider,
} from '@mui/material';
import { ContactSupport, Close, Send, Person, Email, Message } from '@mui/icons-material';

const ContactButton = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // Close modal
    handleClose();
    // Show success message (in a real app)
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <>
      <Fab
        color="secondary"
        aria-label="contact"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease'
          }
        }}
        onClick={handleOpen}
      >
        <ContactSupport />
      </Fab>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
          }
        }}
      >
        <Paper elevation={0}>
          <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white', pb: 2 }}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                <ContactSupport />
              </Avatar>
              <Typography variant="h5" component="div" fontWeight="bold">
                Contáctanos
              </Typography>
            </Box>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
        </Paper>
        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ py: 3 }}>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              ¿Tienes alguna pregunta o comentario? Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  label="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="dense"
                  InputProps={{
                    startAdornment: <Person color="primary" sx={{ mr: 1 }} />,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="dense"
                  InputProps={{
                    startAdornment: <Email color="primary" sx={{ mr: 1 }} />,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Mensaje"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="dense"
                  InputProps={{
                    startAdornment: <Message color="primary" sx={{ mr: 1, alignSelf: 'flex-start', mt: 1.5 }} />,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button 
              onClick={handleClose} 
              color="primary"
              variant="outlined"
              sx={{ borderRadius: 2, px: 3 }}
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              color="primary" 
              variant="contained"
              startIcon={<Send />}
              sx={{ 
                borderRadius: 2, 
                px: 3,
                boxShadow: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 3,
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Enviar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ContactButton;