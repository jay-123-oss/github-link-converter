import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper, TextField, Button, Grid } from '@material-ui/core';

class LinkConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputURL: '',
      convertedURL: '',
      allowConvert: false
    };
  }

  inputValidation = inputURL => {
    const ghPagesRegex = /github\.io/;
    const ghLinkRegex = /github\.com/;
    const regexMatch =
      inputURL.match(ghPagesRegex) || inputURL.match(ghLinkRegex);
    if (regexMatch) {
      this.setState({ allowConvert: true });
    } else {
      this.setState({ allowConvert: false });
    }
  };

  handleChange = event => {
    const inputURL = event.target.value;
    this.setState(() => {
      return { inputURL };
    });
    this.inputValidation(inputURL);
  };

  convertURL = () => {
    const ghPagesRegex = /github\.io/;
    const ghLinkRegex = /github\.com/;

    const inputURL = this.state.inputURL;
    console.log(inputURL);
  };

  render() {
    return (
      <div>
        <Typography color="primary" variant="h4" component="h1" gutterBottom>
          {this.props.appTitle}
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
                    value={this.state.inputURL}
                    onChange={this.handleChange}
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
                  {this.state.allowConvert ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.convertURL}
                    >
                      Convert URL
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary" disabled>
                      Convert URL
                    </Button>
                  )}
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
}

export default LinkConverter;
