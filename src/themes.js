import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'gray.900',
        color: 'gray.800',
      },
    },
  },
  colors: {
    gray: {
      900: '#353535',
      800: '#424242',
      700: '#4f4f4f',
      600: '#5b5b5b',
      500: '#686868',
      400: '#757575',
      300: '#818181',
      200: '#9b9b9b',
      100: '#a7a7a7',
      50: '#cdcdcd',
    },
    white: '#fff',
    black: '#000',
    teal: {
      900: '#28494b',
      800: '#2e5557',
      700: '#356264',
      600: '#437a7e',
      500: '#4a878b',
      400: '#509397',
      300: '#57a0a4',
      200: '#63a8ac',
      100: '#89bdc1',
      50: '#bddadc',
    },
    lightGray: {
      100: '#D9D9D9',
      50: '#f3f3f3',
    },
    transparent: 'transparent',
  },
});
