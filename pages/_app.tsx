import '../styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig" 
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import confetti from 'canvas-confetti'


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

    var duration = 10 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: (Math.random() * skew) - 0.2
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }());

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
