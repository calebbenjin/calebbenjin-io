import styled from 'styled-components'
import Link from 'next/link'

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <small>Designed and developed with ❤ by Caleb Benjamin. {new Date().getFullYear()} All rights reserved</small>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  padding-top: 1rem;
  background: ${({ theme }) => theme.brand};

  .container {
    width: 60%;
    padding: 2rem 0;
    text-align: center;
    border-top: solid 1px ${({ theme}) => theme.background};

    @media screen and (max-width: 479px) {
      width: 80%;
      padding: 1rem 0;
    }
  }

`;

export default Footer
