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
  color: ${({ theme }) => theme.text};
  margin-bottom: 4rem;
  line-height: 1;

  @media(max-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
`

export default Heading
