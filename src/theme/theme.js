import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a6623f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#a1a19a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#322e2f',
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
