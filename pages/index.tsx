import type { NextPage } from 'next'
import fs from "fs"
import { useState } from 'react'
import path from "path"
import matter from 'gray-matter'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { sortByDate } from '../lib'
import project1 from '../public/pro1.png'
import project2 from '../public/project2.png'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import ToolsSection from '../components/ToolsSection'
import MySkillSection from '../components/MySkillSection'
import MyWorkSection from '../components/MyWorkSection'

const project1Img = "https://i.ibb.co/BK1Hn0x/Screenshot-2022-08-08-at-4-05-48-PM.png"


const packages = {
  projects: [
    {
      id: 1,
      image: project1Img,
      previewImg: "Preview Image",
      task: [
        {
          title: "Developed a flexible and well-structured design from the ground up.",
        },
        {
          title: "Using best practice of React, and CSS",
        },
        {
          title: "Design is 100% the same with the Figma Design",
        },
      ],
      name: 'HooBank',
      slug: 'hoobank',
      des: 'HooBank - One of the best Modern UI/UX Bank Design Website. Built with React.js & Tailwind CSS. Using best practice.',
      github: "https://github.com/calebbenjin/hoobank.git",
      url: "https://ihoobank.vercel.app",
      tech: [
        {name: "ReactJs"},
        {name: "ViteJs"},
        {name: "TailWindCSS"},
      ]
    },
    {
      id: 2,
      image: project1,
      previewImg: "Preview Image",
      task: [
        {
          title: "Developed a flexible and well-structured design system from the ground up.",
        },
        {
          title: "Build a smart waitlist system with over 1000 new users weekly",
        },
        {
          title: "Implement Secure HttpOnly Cookie for Login",
        },
        {
          title: "Build a functional Defi calculator",
        },
        {
          title: "Develop a secure user dashboard",
        },
        {
          title: "Build a smart Currency conveter",
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
      id: 3,
      image: project2,
      previewImg: "Preview Image",
      task: [
        {
          title: "React Functional components and their reusability"
        },
        {
          title: "React file and folder structure",
        },
        {
          title: "CSS flex & grid",
        },
        {
          title: "CSS BEM Model",
        },
        {
          title: "From soft and pleasant animations to complex gradients",
        },
        {
          title: "Perfectly placed media queries for satisfactory responsiveness covering almost devices",
        },
      ],
      name: 'GPT-3 Landing Page',
      slug: 'GPT-3LandingPage',
      des: "Let's Build Something amazing with GPT-3 OpenAI",
      github: "https://github.com/calebbenjin/ricnosadmin1",
      url: "https://gbt-3-landingpage.vercel.app",
      tech: [
        {name: "ReactJs"},
        {name: "CSS BEM Model"},
      ]
    },
  ]
};

const Home: NextPage = ({posts}:any) => {
  
  
  return (
    <Layout>
      <Hero />
      <MyWorkSection />
      <MySkillSection />
      <ToolsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
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
