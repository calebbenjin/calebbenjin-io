import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Stack from '../components/Stack'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import BlogSection from './BlogSection'

const Layout: NextPage = ({children}) => {
  return (
    <main className="container">
      <Navbar/>
        {children}
      <Footer />
    </main>
  )
}

export default Layout
