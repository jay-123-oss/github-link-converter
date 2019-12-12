import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#61dafb',
    },
    secondary: {
      main: '#b5ecfb',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        marginBottom: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});

export default theme;
