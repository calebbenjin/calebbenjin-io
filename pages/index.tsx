import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Stack from '../components/Stack'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <main className="container">
      <Navbar name="Nav List" />
      <Hero />
      <Stack />
      <Projects />
      <Footer />
    </main>
  )
}

export default Home
