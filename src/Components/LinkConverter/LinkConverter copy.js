import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper, TextField, Button, Grid } from '@material-ui/core';

function convertUrl(event) {
  console.log(event);
  console.log('CONVERT URL');
}

function LinkConverter(props) {
  return (
    <div>
      <Typography color="primary" variant="h4" component="h1" gutterBottom>
        {props.appTitle}
      </Typography>
      <Typography color="primary" component="p">
        Convert between a GitHub Pages and Repo link
      </Typography>
      <Container maxWidth="sm">
        <Box my={4}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="url-input"
                  label="Enter URL"
                  // placeholder="https://github.com/martink-rsa/github-link-converter"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="url-result"
                  label="Result"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={convertUrl}
                >
                  Convert URL
                </Button>
                <Button variant="contained" color="secondary">
                  Convert &amp; Go
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default LinkConverter;
