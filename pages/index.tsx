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
import CapitalRollupLogo from '../public/logo.png'
import project1 from '../public/pro1.png'
import project2 from '../public/project2.png'
import project3 from '../public/project3.png'
import project4 from '../public/project4.png'
import AboutSection from '../components/AboutSection'


const packages = {
  projects: [
    {
      id: 1,
      image: project1,
      previewImg: "Preview Image",
      task: [
        {
          title: "Developed a flexible and well-structured design system from the ground up.",
        },
        {
          title: "Build a smart waitlist system with over 3000 new users",
        },
        {
          title: "Implement Secure HttpOnly Cookie.",
        },
        {
          title: "Build a functional Defi calculator",
        },
        {
          title: "Develop a secure user dashboard",
        },
        {
          title: "Used React Hooks to manage state and to keep information organized",
        },
        {
          title: "Integrate recurring stripe-payment with webhook",
        },
        {
          title: "Used React-Form-Hook to manage form state and validation.",
        },
        {
          title: "Used Styled-Component for styling and create custom theme",
        },
      ],
      name: 'CapitalRollup',
      slug: 'CapitalRollup',
      des: 'CapitalRollup offers crypto indexes to provide passive long-term crypto investment opportunities for our users. In addition to this, we help you save through Dollar Cost Averaging (DCA). Our goal is to help everyday people grow their wealth with as little as $5.',
      github: "https://github.com/Bojale-Labs/capitalrollup_landing_page",
      url: "https://capitalrollup.com/",
      tech: [
        {name: "TypeScript"},
        {name: "NextJs"},
        {name: "Redux"},
        {name: "Nodejs"},
        {name: "Styled-Component"},
      ]
    },
    {
      id: 1,
      image: project2,
      previewImg: "Preview Image",
      task: [
        {
          title: "Developed a flexible and well-structured design system from the ground up.",
        },
        {
          title: "Implement Secure HttpOnly Cookie for login and registration process",
        },
        {
          title: "Used React Hooks to manage state and to keep information organized",
        },
        {
          title: "Build a full design system from ground up, using the atomic design architecture.",
        },
        {
          title: "Develop a secure user for the supper admin and drivers dashboard",
        },
        {
          title: "Develop a real-time chatting system",
        },
        {
          title: "Integrate recurring stripe-payment with webhook",
        },
        {
          title: "Used React-Form-Hook to manage form state and validation.",
        },
        {
          title: "Used Styled-Component for styling and create custom theme",
        },
      ],
      name: 'Ricnos Logistic',
      slug: 'CapitalRollup',
      des: 'Ricnos is a reliable logistics and Transport Solutions Saves your Time',
      github: "https://github.com/calebbenjin/ricnosadmin1",
      url: "https://ricnosapp.vercel.app/",
      tech: [
        {name: "TypeScript"},
        {name: "NextJs"},
        {name: "Redux"},
        {name: "Nodejs"},
        {name: "Styled-Component"},
      ]
    },
  ]
};

const Home: NextPage = ({posts}:any) => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      {/* <Stack /> */}

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
