import { createTheme } from '@mui/material/styles';

import colors from './colors';

const theme = createTheme({
  palette: {
    background: { default: colors.white },
    primary: { main: colors.primary },
    secondary: { main: colors.orange },
    success: { main: colors.green },
    text: {
      primary: colors.darkGray,
      secondary: colors.orange,
      success: colors.green,
      white: colors.white,
      gray: colors.gray,
    },
  },
  spacing: 8,
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: [0, 480, 768, 960, 1220],
  },
  typography: {
    fontFamily: 'SFProText, sans-serif',
    pxToRem: (size) => `${(size / 16) * 1}rem`,
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: -1,
    },
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: -1,
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: -0.8,
    },
    h3: {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: -0.4,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: -0.4,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: -0.2,
    },
    body1: {
      fontSize: 12,
      lineHeight: 1,
      textTransform: 'none',
    },
    body1bold: {
      fontSize: 12,
      lineHeight: 1,
      textTransform: 'none',
      fontWeight: 'bold',
    },
    overline: {
      fontSize: 10,
      lineHeight: 1.4,
      textTransform: 'none',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiSkeleton: {
      root: {
        backgroundColor: '#EAEAEA',
      },
    },
    MuiButton: {
      outlinedPrimary: {
        '&.Mui-disabled': {
          border: 'solid 1px #348498',
          opacity: 0.25,
          color: colors.primary,
        },
      },
      outlinedSecondary: {
        '&.Mui-disabled': {
          border: '1px solid rgba(255, 80, 47, 0.5)',
          opacity: 0.25,
          color: colors.orange,
        },
      },
      containedSecondary: {
        '&.Mui-disabled': {
          backgroundColor: colors.orange,
          opacity: 0.25,
        },
      },
    },
  },
  mixins: {
    toolbar: {
      backgroundColor: colors.white,
      '& *': { color: colors.darkGray },
      '@media (min-width:0)': {
        minHeight: 56,
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
  },
});

// export default responsiveFontSizes(theme);
export default theme;
