import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper, TextField, Button, Grid, Link } from '@material-ui/core';

/*
TEST STRINGS:
martink-rsa.github.io/library
martink-rsa.github.io/library/newpage
https://martink-rsa.github.io/library

https://www.github.com/martink-rsa/library
https://www.github.com/martink-rsa/library/newpage
*/

const ghPagesRegex = /github\.io/;
const ghLinkRegex = /github\.com/;
const ghCombinedRegex = /github\.(io|com)/;
const ghPagesGroupedRegex = /^(https?:\/\/)?([a-zA-Z0-9-]*)(\.github.io)(\/[a-zA-Z0-9-_/]*)/;
// const ghPagesGroupedRegex = /^(https?\:\/\/)?([a-zA-Z0-9\-]*)(\.github.io)(\/[a-zA-Z0-9\-\_\/]*)/;
const ghRepoGroupedRegex = /^(https?:\/\/(www.)?)(github.com\/)([a-zA-Z0-9-]*)(\/[a-zA-Z0-9-_/]*)/;
// const ghRepoGroupedRegex = /^(https?\:\/\/(www.)?)(github.com\/)([a-zA-Z0-9\-]*)(\/[a-zA-Z0-9\-\_\/]*)/;

class LinkConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputURL: '', // Set to empty for default
      convertedURL: '',
      allowConvert: false // Set to false for default
    };
  }

  inputValidation = inputURL => {
    return ghCombinedRegex.test(inputURL);
  };

  handleChange = event => {
    const {
      target: { value: inputURL }
    } = event;
    this.setState(() => {
      return {
        inputURL,
        allowConvert: this.inputValidation(inputURL)
      };
    });
  };

  convertURL = () => {
    const inputURL = this.state.inputURL.slice(0);
    if (inputURL.match(ghPagesRegex)) {
      const username = inputURL.match(ghPagesGroupedRegex)[2];
      const folders = inputURL.match(ghPagesGroupedRegex)[4];
      const newURL = `https://www.github.com/${username}${folders}`;
      console.log(newURL);
      this.setState({ convertedURL: newURL });
    } else if (inputURL.match(ghLinkRegex)) {
      console.log('GitHub Repo Convert');
      const username = inputURL.match(ghRepoGroupedRegex)[4];
      const folders = inputURL.match(ghRepoGroupedRegex)[5];
      const newURL = `https://${username}.github.io${folders}`;
      console.log(newURL);
      this.setState({ convertedURL: newURL });
    }
  };

  openLink = () => {
    this.convertURL();
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
                    autoFocus
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
                    value={this.state.convertedURL}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    margin={10}
                    variant="contained"
                    color="primary"
                    onClick={this.convertURL}
                    disabled={!this.state.allowConvert}
                  >
                    Convert URL
                  </Button>
                  <Link
                    href={this.state.convertedURL}
                    target="_blank"
                    rel="noopener"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={!this.state.allowConvert}
                      onClick={this.openLink}
                    >
                      Convert &amp; Go
                    </Button>
                  </Link>
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
