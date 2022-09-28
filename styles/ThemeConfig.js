import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  brand: '#fed43a',
  brandBlue: '#6355a4',
  toggleBorder: '#FFF',
  white: '#fff',
  gray: '#ccc',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#eeee',
  brand: '#fed43a',
  brandBlue: '#6355a4',
  toggleBorder: '#6B8096',
  white: '#292e31',
  gray: '#ccc',
  background: '#292e31',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter Tight', sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: all 0.50s linear;
    line-height: 24px
  }
`


