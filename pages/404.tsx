import Layout from "../components/Layout"
import Heading from "../components/Heading"
import styled from 'styled-components'
import Link from 'next/link'


const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <div>
          <Heading>451 Unavailable For Legal Reasons</Heading>
          <p>Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?</p>
          <div className="link">
            <Link href="/">
              <a>Return Home</a>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  width: 70%;
  .link {
    width: 50%;
    text-align: center;
    margin: 2rem auto;
    a {
      background: #e6e6e6cc;
      padding: 15px 30px;
      border-radius: 4px;
    }
  }

  p {
    color: #6e6e6ecc;
    margin-bottom: 3rem;
  }
`;

export default NotFoundPage
