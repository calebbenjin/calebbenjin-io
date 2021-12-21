import styled from 'styled-components'

type headingProp = {
  children: string
}

const Heading = (props: headingProp) => {
  return (
    <Header>{props.children}</Header>
  )
}


const Header = styled.h2`
  font-weight: 900;
  font-size: 40px;
  color: #000;
  margin-bottom: 2rem;

  @media(max-width: 768px) {
    font-size: 30px;
  }
`

export default Heading
