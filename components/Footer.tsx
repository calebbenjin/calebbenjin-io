import styled from 'styled-components'
import Link from 'next/link'

const Footer = () => {
  return (
    <FooterSection>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <Link href="https://github.com/calebbenjin">
          <a target="_blank">GitHub</a>
        </Link>
        <Link href="https://twitter.com/calebbenjin">
          <a target="_blank">Twitter</a>
        </Link>
        <Link href="https://www.instagram.com/calebbenjin.dev/">
          <a target="_blank">Instagram</a>
        </Link>
        <Link href="https://www.linkedin.com/in/calebbenjin/">
          <a target="_blank">Linkedin</a>
        </Link>
      </div>
      <div>
        <Link href="/snippets">
          <a>Code Snippets</a>
        </Link>
        <Link href="/tweets">
          <a>Tweets</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0 3rem;
  border-top: solid 1px #d6d6d6;
  margin-top: 4rem;

  div a{
    display: block;
    line-height: 2.5;
  }
`;

export default Footer
