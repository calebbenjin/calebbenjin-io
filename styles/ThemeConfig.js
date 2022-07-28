import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#eeeeee59',
  text: '#333',
  brand: '#ff9100',
  brandBlue: '#6355a4',
  toggleBorder: '#FFF',
  white: '#fff',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#eeee',
  brand: '#ff9100',
  brandBlue: '#6355a4',
  toggleBorder: '#6B8096',
  white: '#333',
  background: '#333',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    line-height: 24px
  }
`


