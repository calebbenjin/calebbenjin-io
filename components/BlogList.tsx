import { useState } from 'react'
import Heading from "./Heading"
import styled from 'styled-components'
import BlogCard from './BlogCard'
import Link from 'next/link'

const BlogSection = ({title, showMore, data}:any) => {
  return (
    <Section>
      <Heading>{title}</Heading>

      <div className="gridContainer">
        {data.map((post:any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {showMore ? <div className="viewLink">
        <Link href="/blog/"><a>See more</a></Link>
      </div> : null}
    </Section>
  )
}


const Section = styled.section`
  margin-bottom: 5rem;


  .gridContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    a {
      
    }

    

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
        color: #5f5f5f;
        font-weight: 500;
        padding: 10px;
        border-radius: 4px;
        transition: all 0.3s ease;
        &:hover {
          background: #dfdfdf;

        }
      }
    }
`;

export default BlogSection
