import type { NextPage } from 'next'
import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import Hero from '../components/Hero'
import Stack from '../components/Stack'
import ProjectList from '../components/ProjectList'
import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import { sortByDate } from '../lib'
import svelteLogo from '../public/svelte.png'
import krakenLogo from '../public/kraken.png'
import RicnosLogo from '../public/logo.svg'


const packages = {
  projects: [
    {
      id: 1,
      logo: RicnosLogo,
      previewImg: "Preview Image",
      name: 'Ricnos Logistic',
      slug: 'Ricnos Logistic',
      des: 'A logistice management application logistice management application',
      github: "https://github.com/calebbenjin/ricnos-user-one",
      url: "https://ricnosapp.vercel.app/",
      tech: [
        {name: "Next.js"},
        {name: "Chakara-ui"},
        {name: "Redux"},
      ]
    },
    {
      id: 2,
      logo: svelteLogo,
      previewImg: "Preview Image",
      name: 'Headless-Svelte-ui',
      slug: 'Headless-Svelte-ui',
      des: 'A group of resusable headless components that makes it easy building Svelte Apps, with over 90% of styles props.',
      github: "https://github.com/Bojale-Labs/svelte-component-library",
      url: "https://www.npmjs.com/package/@bojalelabs/headless-svelte-ui",
      tech: [
        {name: "Sveltejs"},
      ]
    },
    {
      id: 3,
      logo: krakenLogo,
      previewImg: "Preview Image",
      name: 'Krakenedu',
      slug: 'Krakenedu',
      des: 'An that assess developer skill level, expose them to the right courses and jobs, make employers notice and attract relevant opportunities',
      github: "https://github.com/Bojale-Labs/KrakenEdu-Frontend",
      url: "https://krakenedu.com/",
      tech: [
        {name: "ReactJs"},
        {name: "Sass"},
      ]
    }
    
  ]
};

const Home: NextPage = ({posts}:any) => {
  return (
    <Layout>
      <Hero />
      <Stack />
      <ProjectList data={packages} showMore />
      <BlogList title="Featured Posts" data={posts} showMore />
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
