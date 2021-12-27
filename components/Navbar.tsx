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
        <div className="mobileToggle" onClick={handleMobileToggle}>
          <div className="link"></div>
          <div className="link"></div>
          <div className="link"></div>
        </div>
        <div className={`${mobileToggle ? "showMobileNav" : "mobileNav"}`}>
            <Link href="/">
              <a className="navLink">Home</a>
            </Link>
            <Link href="/projects">
              <a className="navLink">Projects</a>
            </Link>
            <Link href="/blog">
              <a className="navLink">Blog</a>
            </Link>
            <Link href="/snippets">
              <a className="navLink">Code Snippets</a>
            </Link>
        </div>
        <Link href="/">
          <a className="MobileLogo">Caleb<span>benjin.</span></a>
        </Link>
        <div className="navContainer">
          <Link href="/">
            <a className="navLogo">Caleb<span>benjin.</span></a>
          </Link>
          <Link href="/">
            <a className="navLink">Home</a>
          </Link>
          <Link href="/projects">
            <a className="navLink">Projects</a>
          </Link>
          <Link href="/blog">
            <a className="navLink">Blog</a>
          </Link>
          <Link href="/snippets">
            <a className="navLink">Code Snippets</a>
          </Link>
        </div>
        <div className="darkMoodIcon" onClick={toggleTheme}>
          <BsMoonStars />
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
    padding: 1.5rem 0;
  }


  .MobileLogo {
    display: none;
  }

  .mobileToggle {
    display: none;
  }

  .mobileNav {
    display: none;
  }

  .navContainer {
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    .navLink {
      text-transform: capitalize;
      transition: all 0.3s ease-in;
      padding: 5px 10px;
      border-radius: 4px;
      &:hover {
        background: #f1f1f1;
        color: ${({ theme }) => theme.text};
      }
    }

    .navLogo {
      font-weight: 900;
      font-size: 1.1rem;
      span {
        color: #ff9100;
      }
    }
  }

  .darkMoodIcon {
    background: ${({ theme }) => theme.body};
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in;
    &:hover {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }
    &::focus {
      box-shadow: 1px -1px 14px rgba(0,0,0,0.3);
    }
  }

  @media(max-width: 768px) {

    .navContainer {
      display: none;
    }

    .mobileToggle {
      display: block;
    .link {
      width: 25px;
      height: 2.5px;
      background: ${({ theme }) => theme.text};
      margin-bottom: 4px;
    }
  }

    .MobileLogo {
      display: flex;
      font-weight: 900;
      font-size: 0.9rem;
      span {
        color: #ff9100;
      }
    }


    .showMobileNav {
    transform: translateX(0%);
    transition: all 0.5s ease-in;
    opacity: 1;
    position: fixed;
    top: 6rem;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    .navLink {
      text-transform: capitalize;
      transition: all 0.3s ease-in;
      display: block;
      line-height: 4rem;
      padding: 10px 2rem;
      border-bottom: solid 1px #333;
      &:hover {
        background: #333;
        color: #eee;
      }
    }
  }

  .mobileNav {
    display: block;
    transform: translateX(-100%);
    transition: all 0.5s ease-in;
    opacity: 0.5;
    position: fixed;
    top: 6rem;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    .navLink {
      text-transform: capitalize;
      transition: all 0.3s ease-in;
      display: block;
      line-height: 4rem;
      padding: 10px 2rem;
      border-bottom: solid 1px #333;
      &:hover {
        background: #333;
        color: #eee;
      }
    }
  }
  }
`;

export default Navbar
