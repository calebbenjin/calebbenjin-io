import Heading from "./Heading"
import styled from 'styled-components'
import { FaCalendarAlt } from "react-icons/fa"
import Link from 'next/link'



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

const BlogSection = ({post}:any) => {
  return (
    <Section>
      <Link href={`/blog/${post.slug}`}>
        <a>
          <div key={post.id} className="card">
            <div className="body">
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.excerpt}</p>
              <small><FaCalendarAlt /> {post.frontmatter.date}</small>
            </div>
          </div>
        </a>
      </Link>
    </Section>
  )
}


const Section = styled.section`
  .card {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #e68e01, #09a0e6, #0777a3f2);
    padding: 4px;
    border-radius: 4px;
    box-shadow: 1px -1px 14px rgba(0,0,0,0.1);
    transition: all 0.4s ease;
    transform: scale(1); 
    &:hover {
      transform: scale(1.1);
      color: #e68e01;
      cursor: pointer;

      small {
        color: ${({ theme }) => theme.text};
      }
    }

    .body {
      background: ${({ theme }) => theme.body};
      border-radius: 4px;
      padding: 1.5rem; 
      height: 100%;
      position: relative;

      small {
        position: absolute;
        bottom: 1rem;
      }

      h3 {
        font-weight: 500;
        margin: 0;
        line-height: 28px;
        font-size: 20px;
        color: #11111;
      }

      p {
        margin-bottom: 2rem;
        font-size: 0.8rem;
        line-height: 20px;
        color: ${({ theme }) => theme.text};
      }
    }
  }
`;

export default BlogSection
