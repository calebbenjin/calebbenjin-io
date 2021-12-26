import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Stack from '../components/Stack'
import Footer from '../components/Footer'
import ProjectList from '../components/ProjectList'
import BlogList from '../components/BlogList'
import Layout from '../components/Layout'


const blogs = [
  {
    id: 2,
    title: "Everything I Know About Style Guides, Design Systems, and Component Libraries",
    slug: "Everything I Know About Style Guides, Design Systems, and Component Libraries",
    date: "12/01/2022"
  },
  {
    id: 3,
    title: "How to handle JWT & Http-Only Cookies Authentication with Next.js",
    slug: "How to handle JWT & Http-Only Cookies Authentication with Next.js",
    date: "12/01/2022"
  },
  {
    id: 4,
    title: "Past, Present, and Future of React State Management",
    slug: "Past, Present, and Future of React State Management",
    date: "12/01/2022"
  }
]

const packages = {
  projects: [
    {
      id: 1,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'Ricnos Logistic',
      slug: 'Ricnos Logistic',
      des: 'A logistice management application logistice management application',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Chakara-ui"},
        {name: "Redux"},
      ]
    },
    {
      id: 2,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'Svelteui',
      slug: 'Svelteui',
      des: 'A logistice management application logistice management application',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Chakara-ui"},
        {name: "Redux"},
      ]
    },
    {
      id: 3,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'OptimusPro',
      slug: 'OptimusPro',
      des: 'A Learning platform for forex and cryptocurrency traders.',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "TailwindCss"},
        {name: "Node.js"},
      ]
    }
    
  ],
  sideProjects: [
    {
      id: 1,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'E-commerce boilerplate',
      slug: 'E-commerce boilerplate',
      des: 'Kickstart your app with less stress, from Authentication, Payment, Checkout, Filter item with color, price all done out of the box.',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
    },
    {
      id: 2,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'EasyStore',
      slug: 'EasyStore',
      des: 'EasyStore help you create and own an online shop with less stress and is free',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
    },
    {
      id: 4,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'Evolt',
      slug: 'Evolt',
      des: 'A voting management system to help organizers create and manage perticipant and voters on their event.',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
    },
  ]
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Stack />
      <ProjectList data={packages} showMore />
      <BlogList title="Featured Posts" data={blogs} showMore />
    </Layout>
  )
}

export default Home
