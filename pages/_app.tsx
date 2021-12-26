import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig" 
import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
