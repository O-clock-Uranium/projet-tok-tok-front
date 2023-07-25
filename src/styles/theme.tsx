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
      default: '#f0f3fa',
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
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#03665C',
            '&:hover': {
              color: '#fff',
              backgroundColor: '#03665C',
            },
          },
        },
      },
    },
  },
});

export default theme;
