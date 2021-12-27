import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import styled from 'styled-components'
import Image from 'next/image'
import Layout from "../../components/Layout"

const SinglePostPage = ({frontmatter:{author_image, author, cover_image, title, date, excerpt}, content, slug}) => {

  return (
    <Layout>
      <Heading>{title}</Heading>
      <Container>
        <div className="author">
          <Image src={author_image} alt={author} width="40" height="40" />
          <small>{author}</small>
        </div>
        <small>{date}</small>
      </Container>

      <Image src={cover_image} alt={author} width="800" height="500" />

      <BlogContent>
        <div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div>
      </BlogContent>
    </Layout>
  )
}

const BlogContent = styled.div`
  margin: 3rem 0;

  p {
    margin: 15px 0;
    line-height: 1.8;
    color: ${({ theme }) => theme.text};
  }

  .blog-text ul,
  ol {
    font-size: 110%;
    line-height: 2.3;
    font-weight: bold;
    margin: 10px 0;
  }

  .blog-text pre {
    background: #f4f4f4;
    padding: 20px;
    margin: 20px 0;
    line-height: 2.3;
  }

  .blog-text h1 {
    font-size: 35px;
  }

  .blog-text h2,
  .blog-text h3,
  .blog-text h4 {
    font-size: 27px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      border-radius: 50%;
    }
    small {
      margin-left: 0.5rem;
    }
  }
`;

const Heading = styled.h2`
  font-weight: 900;
  font-size: 40px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1;

  @media(max-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }
`

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('data/blog'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md' , '')
    }
  }))

  return {
    paths, 
    fallback: false
  }
}


export async function getStaticProps({params: {slug}}) {

  const markdownWithMeta = fs.readFileSync(path.join('data/blog', slug + '.md'), 'utf-8')

  const {data:frontmatter, content} = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content, 
      slug
    },
  }
}

export default SinglePostPage
