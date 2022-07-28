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
            <Link href="/snippets">
              <a className="navLink">About me.</a>
            </Link>
            <Link href="/projects">
              <a className="navLink">Projects</a>
            </Link>
            <Link href="/blog">
              <a className="navLink">Blog</a>
            </Link>
        </div>
        <div className="navContainer">
          <Link href="/">
            <a className="navLink">Home</a>
          </Link>
          <Link href="/about">
            <a className="navLink">About me.</a>
          </Link>
          <Link href="/projects">
            <a className="navLink">Projects</a>
          </Link>
          <Link href="/blog">
            <a className="navLink">Articles</a>
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
    padding: 2rem 0;

    width: 65%;
    margin: 0 auto;
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
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    .navLink {
      text-transform: capitalize;
      transition: all 0.3s ease-in;
      padding: 5px 10px;
      margin-right: 2rem;
      font-size: 1.1rem;
      border-radius: 4px;
      &:hover {
        background: #f1f1f1;
        color: ${({ theme }) => theme.text};
      }
    }

    .navLogo {
      font-weight: 900;
      font-size: 1.5rem;
      span {
        color: #ff9100;
      }
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
      transform: scale(1.3)
    }
    &::focus {
      box-shadow: 1px -1px 14px rgba(0,0,0,0.3);
    }
  }

  @media(max-width: 768px) {

    .navContainer {
      display: none;
    }

    .container {
      padding: 1rem 0;
      width: 85%;
      margin: 0 auto;
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
