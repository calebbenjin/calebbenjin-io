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
            <h3>{post.title}</h3>
            <small><FaCalendarAlt /> {post.date}</small>
          </div>
        </a>
      </Link>
    </Section>
  )
}


const Section = styled.section`
  .card {
    background: #fff;
    position: relative;
    padding: 10px 20px;
    height: 100%;
    border-radius: 10px;
    border: solid 4px #dbdbdb;
    box-shadow: 1px -1px 14px rgba(0,0,0,0.1);
    transition: all 0.4s ease;
    transform: scale(1); 
    &:hover {
      border-color: #068dc2;
      transform: scale(1.1);
      color: #000;
      cursor: pointer;
    }

    small {
      position: absolute;
      bottom: 1rem;
    }

    h3 {
      font-weight: 500;
      margin-bottom: 5rem;
      line-height: 28px;
      font-size: 18px;
      color: #11111;
    }
  }
`;

export default BlogSection
