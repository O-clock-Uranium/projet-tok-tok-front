import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#49c1ad',
      light: '#02B8AC',
      dark: '#03665C',
    },
    secondary: {
      main: '#ef6f6c',
    },
    background: {
      default: '#F5F6FA',
    },
    text: {
      secondary: '#A5A5A5',
      disabled: '#888888',
    },
  },
  typography: {
    fontFamily: 'DM Sans , Manrope',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
  },
  // TODO A revoir pour modifier le background des badges
  // components: {
  //   MuiBadge: {
  //     styleOverrides: {
  //       color: white,
  //     },
  //   },
  // },
});

export default theme;
