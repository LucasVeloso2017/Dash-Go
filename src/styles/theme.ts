import { extendTheme } from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools"

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    }
  },
  config:{
    initialColorMode: "dark", 
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global:{
      body: {
        color: 'gray.50',
        bg: 'gray.900'
      },
    }
  },
  
})

export const lightTheme = extendTheme({
  colors: {
    gray: {
      "100": "#181B23",
      "200": "#1F2029",
      "300": "#353646",
      "400": "#4B4D63",
      "500": "#616480",
      "600": "#797D9A",
      "700": "#9699B0",
      "800": "#B3B5C6",
      "900": "#D1D2DC",
      "50": "#181B23",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})