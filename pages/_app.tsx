import '../styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig" 
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'


function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoader] = useState(true)
  const [stopLoader, setStopLoader] = useState<any>()
  const [theme, setTheme] = useState("light") 

  

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('isLoading', 'false')
      }
    }, 3000)

    // if (typeof window !== 'undefined') {
    //   const loader = window.localStorage.getItem('isLoading')
    //   setStopLoader(loader)
    // }

  }, [])


  if(isLoading) {
    return <Loading />
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
