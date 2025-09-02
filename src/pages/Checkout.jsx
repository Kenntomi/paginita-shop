import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  RadioGroup,
  Radio,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Avatar,
} from '@mui/material';
import {
  Home,
  CreditCard,
  Receipt,
  CheckCircle,
} from '@mui/icons-material';

const steps = [
  { label: 'Dirección de envío' },
  { label: 'Método de pago' },
  { label: 'Revisar pedido' },
];

const Checkout = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    saveAddress: false,
  });
  
  const [paymentData, setPaymentData] = useState({
    method: 'credit',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    saveCard: false,
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleShippingChange = (event) => {
    const { name, value, checked } = event.target;
    setShippingData({
      ...shippingData,
      [name]: name === 'saveAddress' ? checked : value,
    });
  };

  const handlePaymentChange = (event) => {
    const { name, value, checked } = event.target;
    setPaymentData({
      ...paymentData,
      [name]: name === 'saveCard' ? checked : value,
    });
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const handleCloseDialog = () => {
    setOrderPlaced(false);
    navigate('/');
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Dirección de Envío
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={3} className="fade-in">
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Nombre"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  value={shippingData.firstName}
                  onChange={handleShippingChange}
                  className="MuiTextField-root"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Apellidos"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  value={shippingData.lastName}
                  onChange={handleShippingChange}
                  className="MuiTextField-root"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Dirección"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="outlined"
                  value={shippingData.address}
                  onChange={handleShippingChange}
                  className="MuiTextField-root"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="Ciudad"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="outlined"
                  value={shippingData.city}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="postalCode"
                  name="postalCode"
                  label="Código Postal"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="outlined"
                  value={shippingData.postalCode}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="País"
                  fullWidth
                  autoComplete="shipping country"
                  variant="outlined"
                  value={shippingData.country}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="saveAddress"
                      checked={shippingData.saveAddress}
                      onChange={handleShippingChange}
                    />
                  }
                  label="Usar esta dirección para futuros envíos"
                />
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Método de Pago
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <FormControl component="fieldset" className="fade-in">
              <RadioGroup
                aria-label="payment-method"
                name="method"
                value={paymentData.method}
                onChange={handlePaymentChange}
              >
                <FormControlLabel
                  value="credit"
                  control={<Radio color="primary" />}
                  label="Tarjeta de Crédito/Débito"
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio color="primary" />}
                  label="PayPal"
                />
                <FormControlLabel
                  value="transfer"
                  control={<Radio color="primary" />}
                  label="Transferencia Bancaria"
                />
              </RadioGroup>
            </FormControl>

            {paymentData.method === 'credit' && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Información de la Tarjeta
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="cardName"
                      name="cardName"
                      label="Nombre en la tarjeta"
                      fullWidth
                      autoComplete="cc-name"
                      variant="outlined"
                      value={paymentData.cardName}
                      onChange={handlePaymentChange}
                      className="MuiTextField-root"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="cardNumber"
                      name="cardNumber"
                      label="Número de tarjeta"
                      fullWidth
                      autoComplete="cc-number"
                      variant="outlined"
                      value={paymentData.cardNumber}
                      onChange={handlePaymentChange}
                      inputProps={{ maxLength: 16 }}
                      className="MuiTextField-root"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="expDate"
                      name="expDate"
                      label="Fecha de expiración (MM/AA)"
                      fullWidth
                      autoComplete="cc-exp"
                      variant="outlined"
                      value={paymentData.expDate}
                      onChange={handlePaymentChange}
                      className="MuiTextField-root"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="cvv"
                      name="cvv"
                      label="CVV"
                      helperText="Últimos tres dígitos en la parte trasera de la tarjeta"
                      fullWidth
                      autoComplete="cc-csc"
                      variant="outlined"
                      value={paymentData.cvv}
                      onChange={handlePaymentChange}
                      inputProps={{ maxLength: 3 }}
                      className="MuiTextField-root"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          name="saveCard"
                          checked={paymentData.saveCard}
                          onChange={handlePaymentChange}
                        />
                      }
                      label="Recordar los datos de la tarjeta para futuros pagos"
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

            {paymentData.method === 'paypal' && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="body1">
                  Serás redirigido a PayPal para completar el pago después de revisar tu pedido.
                </Typography>
              </Box>
            )}

            {paymentData.method === 'transfer' && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="body1" paragraph>
                  Realiza una transferencia bancaria a la siguiente cuenta:
                </Typography>
                <Typography variant="body2">
                  Banco: Banco Ejemplo
                </Typography>
                <Typography variant="body2">
                  IBAN: ES12 3456 7890 1234 5678 9012
                </Typography>
                <Typography variant="body2">
                  Beneficiario: Paginita Shop S.L.
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Tu pedido se procesará una vez confirmemos el pago.
                </Typography>
              </Box>
            )}
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Resumen del Pedido
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <List disablePadding className="fade-in">
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Producto 1" secondary="Descripción corta" />
                <Typography variant="body2">S/19.99</Typography>
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Producto 2" secondary="Descripción corta" />
                <Typography variant="body2">S/29.99</Typography>
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Envío" />
                <Typography variant="body2">S/4.99</Typography>
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  S/54.97
                </Typography>
              </ListItem>
            </List>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Dirección de Envío
                </Typography>
                <Typography gutterBottom>{shippingData.firstName} {shippingData.lastName}</Typography>
                <Typography gutterBottom>{shippingData.address}</Typography>
                <Typography gutterBottom>
                  {shippingData.city}, {shippingData.postalCode}, {shippingData.country}
                </Typography>
              </Grid>
              <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Detalles de Pago
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography gutterBottom>Método:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>
                      {paymentData.method === 'credit' && 'Tarjeta de Crédito'}
                      {paymentData.method === 'paypal' && 'PayPal'}
                      {paymentData.method === 'transfer' && 'Transferencia Bancaria'}
                    </Typography>
                  </Grid>
                  {paymentData.method === 'credit' && (
                    <>
                      <Grid item xs={6}>
                        <Typography gutterBottom>Titular:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{paymentData.cardName}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>Número:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>
                          **** **** **** {paymentData.cardNumber.slice(-4)}
                        </Typography>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </>
        );
      default:
        return 'Paso desconocido';
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper variant="outlined" className="checkout-paper" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 56, height: 56 }}>
            {activeStep === 0 ? <Home /> : activeStep === 1 ? <CreditCard /> : <Receipt />}
          </Avatar>
          <Typography component="h1" variant="h4" fontWeight="bold">
            Proceso de Pago
          </Typography>
        </Box>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              ¡Gracias por tu pedido!
            </Typography>
            <Typography variant="subtitle1">
              Tu número de pedido es #2001539. Te hemos enviado un correo electrónico con la confirmación
              de tu pedido y te avisaremos cuando haya sido enviado.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/')}
                sx={{ mt: 3, ml: 1, borderRadius: 2, boxShadow: 2 }}
              >
                Volver a la tienda
              </Button>
            </Box>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1, borderRadius: 2 }} className="fade-in">
                  Atrás
                </Button>
              )}
              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handlePlaceOrder : handleNext}
                sx={{ borderRadius: 2, boxShadow: 2 }}
                className="fade-in"
              >
                {activeStep === steps.length - 1 ? 'Realizar Pedido' : 'Siguiente'}
              </Button>
            </Box>
          </>
        )}
      </Paper>

      <Dialog
        open={orderPlaced}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircle color="success" sx={{ mr: 1 }} />
            {"¡Pedido Realizado con Éxito!"}
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu pedido ha sido procesado correctamente. Recibirás un correo electrónico con los detalles
            de tu compra. ¡Gracias por confiar en nosotros!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Checkout;