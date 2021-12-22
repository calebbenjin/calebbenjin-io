import BlogList from "../../components/BlogList"
import Layout from "../../components/Layout"


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

const BlogPage = () => {
  return (
    <Layout>
      <BlogList title="Blog Post" data={blogs} />
    </Layout>
  )
}

export default BlogPage
