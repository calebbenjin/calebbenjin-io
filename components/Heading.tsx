import styled from 'styled-components'

type headingProp = {
  children: string
}

const Heading = (props: headingProp) => {
  return (
    <Container>
      <Header>{props.children}</Header>
    </Container>
  )
}


const Container = styled.div`
  width: 90%;
  margin: 0 auto 6rem auto;

  @media(max-width: 768px) {
    width: 100%;
    margin: 0 auto 0rem auto;
  }
`

const Header = styled.h2`
  font-weight: 900;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  line-height: 1;
  font-size: 3.5rem;

  @media(max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
`

export default Heading
