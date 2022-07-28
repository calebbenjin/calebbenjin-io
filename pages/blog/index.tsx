import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import { sortByDate } from '../../lib'
import Layout from "../../components/Layout"
import Heading from "../../components/Heading"
import styled from 'styled-components'
import BlogCard from '../../components/BlogCard'
import Link from 'next/link'


const BlogPage = ({posts}:any) => {
  return (
    <Layout>
      <Section>
      <Heading>Blog</Heading>
      {/* <p>I've been writing online since 2020, mostly about web development and tech careers. In total, I've written 70 articles on my blog. Use the search below to filter by title.</p> */}

      <div className="gridContainer">
        {posts.map((post:any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
    </Layout>
  )
}


const Section = styled.section`
  margin: 5rem auto;
  width: 85%;

  .gridContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;    

    @media(max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 30px;
    }
  }

  .viewLink {
      margin: 3rem auto 0rem;
      text-align: center;
      a {
        color: ${({ theme }) => theme.text};
        font-weight: 500;
        padding: 10px;
        border-radius: 4px;
        transition: all 0.3s ease;
        &:hover {
          background: ${({ theme }) => theme.body};
          box-shadow: 1px -1px 14px rgba(0,0,0,0.2);
        }
      }
    }
`;

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
      posts: posts.sort(sortByDate)
    }
  }
}

export default BlogPage
