import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
