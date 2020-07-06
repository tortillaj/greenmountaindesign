import swiss from '@theme-ui/preset-swiss'
import merge from 'lodash/merge'
import { Global } from '@emotion/core'

const siteWidth = 1500

export const theme = merge(swiss, {
  buttons: {
    text: {
      appearance: 'none',
      color: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      padding: 0,
      textDecoration: 'underline',
    },
  },
  colors: {
    text: '#f7f7f7',
    background: '#1b1b1b',
    primary: '#6dab9a',
    secondary: '#BF9393',
    tertiary: '#8A9EA6',
    quaternary: '#D9AF8B',
    gray: '#3E3E40',
  },
  fonts: {
    body: 'freight-sans-pro, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    heading: 'freight-sans-pro, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  fontSizes: [
    9.26, 11.11, 13.33, 16, 19.2, 23.04, 27.65, 33.18, 39.81,
  ],
  fontWeights: { body: 400, heading: 600, display: 900 },
  forms: {
    input: {
      borderColor: 'gray',
    },
    label: {
      textTransform: 'uppercase',
      fontSize: 0,
      fontWeight: 'bold',
    },
  },
  lineHeights: {
    body: 1.35,
    heading: 1.15,
  },
  styles: {
    a: {
      cursor: 'pointer',
      color: 'text',
      '&:hover': {
        color: 'primary'
      }
    },
  },
  text: {
    meta: {
      fontSize: 2,
      textTransform: 'uppercase',
      display: 'block',
      mt: 3,
      lineHeight: 1,
    },
    tag: {
      display: 'inline-block',
      mr: 1,
      px: 1,
      backgroundColor: 'quaternary',
      color: 'black',
      fontSize: 2,
      lineHeight: 1.5,
    }
  },
  sizes: {
    siteWidth,
    mainColumn: Math.floor(siteWidth * 0.6),
    sidebarColumn: Math.floor(siteWidth * 0.4),
  },
})

export const GlobalStyle = () => (
  <Global styles={theme => ({
    '*': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      'font-smoothing': 'antialiased',
    },
  })}/>
)
