import type { NextPage } from 'next'
import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { sortByDate } from '../lib'
import AboutSection from '../components/AboutSection'
import SocialMediaButtons from '../components/SocialMediaButtons'


const Home: NextPage = ({posts}:any) => {
  return (
    <Layout>
      {/* <Hero /> */}
      <AboutSection />
      <SocialMediaButtons />
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('data/blog'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('data/blog', filename), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 3)
    }
  }
}

export default Home
