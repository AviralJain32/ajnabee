import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';

const ContactUsPage = () => {
  return (
    <Box mb={5} mt={8}>
      <Container maxWidth="md">
        <Box p={4} component={Paper} elevation={3} borderRadius="md" color="black" textAlign="center">
          <Typography variant="h4" mb={2}>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" mb={4}>
            Get in touch with us
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Box mb={4}>
                <Typography fontWeight="bold" variant="subtitle1">Email:</Typography>
                <Typography variant="body1">ajnabee@gmail.com</Typography>
              </Box>
              <Box mb={4}>
                <Typography fontWeight="bold" variant="subtitle1">Address:</Typography>
                <Typography variant="body1">New Delhi, India</Typography>
              </Box>
              <Box mb={4}>
                <Typography fontWeight="bold" variant="subtitle1">For any queries :</Typography>
                <Typography variant="body1">Mr. saksham</Typography>
                <Typography variant="body1">Ceo, Ajnabee</Typography>
                <Typography variant="body1">Email: ajnabee@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2} component={Paper} elevation={1} borderRadius="md" bgcolor="gray.100">
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField id="name" label="Name" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="email" label="Email" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="message" label="Message" multiline rows={4} fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="secondary"  type="submit" fullWidth>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
