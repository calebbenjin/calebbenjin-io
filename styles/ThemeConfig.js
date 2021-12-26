import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#333',
  gray: '#f1f1f1',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#eeee',
  gray: '#f1f1f1',
  toggleBorder: '#6B8096',
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