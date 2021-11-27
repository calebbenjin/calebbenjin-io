import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <main className="container">
      <Navbar name="Nav List" />
      <Hero />
    </main>
  )
}

export default Home
