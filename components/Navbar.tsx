import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { BsMoonStars } from 'react-icons/bs'


const Navbar = ({toggleTheme}:any) => {
  const [mobileToggle, setMobileToggle] = useState(false)

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle)
    console.log('Mobile Toggle')
  }

  return (
    <NavBar>
      <div className="container">
        <h3 className="logo">Calebbenjin</h3>
        <div className="darkMoodIcon" onClick={toggleTheme}>
          <BsMoonStars />
        </div>
        <div>
          <Link href="/blog">
            <a className="navLink">Thoughts</a>
          </Link>
        </div>
      </div>
    </NavBar>
  )
}

const NavBar: any = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(10px);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    width: 95%;
    margin: 0 auto;
  }

  .navLogo {
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0;
  }

  .navLink {
    text-transform: capitalize;
    transition: all 0.3s ease-in;
    font-size: 1.1rem;
    font-weight: 900;
    border-radius: 4px;
    border: solid 2px ${({ theme }) => theme.brand};
    padding: 5px 20px;
    &:hover {
      color: ${({ theme }) => theme.brand};
      letter-spacing: 1.5px;
    }
  }

  .darkMoodIcon {
    background: ${({ theme }) => theme.body};
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.2rem;
    transition: all 0.3s ease-in;
    border: solid 1px ${({ theme }) => theme.text};
    &:hover {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      transform: scale(1.3);
    }
    &::focus {
      box-shadow: 1px -1px 14px rgba(0,0,0,0.3);
    }
  }

  @media(max-width: 768px) {

    .navContainer {
      display: none;
    }

    .logo {
      font-weight: 900;
      font-size: 1rem;
      margin: 0;
    }

    .navLink {
      text-transform: capitalize;
      transition: all 0.3s ease-in;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: 4px;
      border: solid 1px ${({ theme }) => theme.brand};
      padding: 5px 10px;
      &:hover {
        color: ${({ theme }) => theme.brand};
        letter-spacing: 1.5px;
      }
    }

    .darkMoodIcon {
      background: ${({ theme }) => theme.body};
      width: 30px;
      height: 30px;
      font-size: 0.9rem;
    }

    .container {
      padding: 1rem 0;
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export default Navbar
