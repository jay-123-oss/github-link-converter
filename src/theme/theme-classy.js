import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b89d7f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#61dafb',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#30383c',
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
  },
});

export default theme;
