import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { BsMoonStars } from 'react-icons/bs'
import { FiTwitter, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi'
import { RiMenuFoldLine, RiCloseLine } from 'react-icons/ri'


const Navbar = ({toggleTheme}:any) => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle)
    console.log('Mobile Toggle')
  }

  return (
    <HeaderWrapper>
      <DarkMoodIcon onClick={toggleTheme}>
        <BsMoonStars />
      </DarkMoodIcon>
      <NavBar className={mobileToggle ? 'mobileNav' : 'desktopNav'}>
        <div className="container">
          
          <div className="navFlex">
            {/* <Link href="/">
              <a className="navLink">Caleb.</a>
            </Link> */}
            <Link href="https://calebbenjin.hashnode.dev">
              <a className="navLink">Blog</a>
            </Link>
            <Link href="#work">
              <a className="navLink">Work</a>
            </Link>
            <Link href="#about">
              <a className="navLink">About</a>
            </Link>
            <Link href="#contact">
              <a className="navLink">Contact</a>
            </Link>
          </div>
          <Icons>
            <Link href="https://twitter.com/calebbenjin">
              <a target="_blank">
                <FiTwitter className="icon" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/calebbenjin/">
              <a target="_blank">
                <FiLinkedin className="icon" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UC5R4cC91Ldv-nmHMki76YOQ">
              <a target="_blank">
                <FiYoutube className="icon" />
              </a>
            </Link>
            <Link href="https://github.com/calebbenjin">
              <a target="_blank">
                <FiGithub className="icon" />
              </a>
            </Link>
          </Icons>
          <CloseMenu>
            <RiCloseLine className="icon" onClick={handleMobileToggle} />
          </CloseMenu>
        </div>
      </NavBar>
      <Menu>
        <RiMenuFoldLine className="icon" onClick={handleMobileToggle} />
      </Menu>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  .desktopNav {
    display: flex;
    @media screen and (max-width: 991px) {
      // display: none;
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: ${({ theme }) => theme.text};
      padding-top: 4rem;
      transition: all 0.5s ease-in;
      transform: translateX(100%);
    }
  }

  .mobileNav {
    transition: all 0.3s ease-in;
    transform: translateX(0%);
    @media screen and (max-width: 991px) {
      // backdrop-filter: saturate(180%) blur(10px);
      transform: translateX(0%);
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: ${({ theme }) => theme.text};
      padding-top: 4rem;

      .navLink {
        color: ${({ theme }) => theme.white};
        transform: rotate(0deg);
        transition: all 0.9s ease-in;
        font-size: 4vw;
        line-height: 3;
        font-weight: 900;
        letter-spacing: 1.5px;
      }
    }

    @media screen and (max-width: 479px) {
      .navLink {
        color: ${({ theme }) => theme.white};
        transform: rotate(0deg);
        transition: all 0.9s ease-in;
        font-size: 9vw;
        line-height: 3;
        font-weight: 900;
        letter-spacing: 1.5px;
      }
    }
  }
`

const NavBar: any = styled.nav`
  position: fixed;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
  z-index: 50;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 7%;
  height: 100vh;
  padding-bottom: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  border-color: transparent;
  background-color: ${({ theme }) => theme.brand};

  .container {
    padding: 3rem 0 2rem;
  }


  .navLink {
    line-height: 6;
    text-transform: uppercase;
    transition: all 0.3s ease-in;
    transform: rotate(-90deg);
    font-size: 1.1rem;
    display: flex;
    justify-content: space-around;
    font-weight: 300;
    border-radius: 4px;
    color: ${({ theme }) => theme.text};
    &:hover {
      opacity: 0.6;
      letter-spacing: 1.5px;
    }
  }


  

  @media(max-width: 768px) {
    .container {
      padding: 1rem 0;
      width: 90%;
      margin: 0 auto;
    }
  }
`;

const Menu = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    position: fixed;
    right: 2rem;
    top: 2rem;
    z-index: 1;
    font-size: 2.5rem;
    cursor: pointer;
    display: block;

    .icon {
      color: ${({ theme }) => theme.text};
    }
  }

  @media screen and (max-width: 479px) {
    color: ${({ theme }) => theme.white};
    font-size: 2rem;
    
    .icon {
      color: ${({ theme }) => theme.white};
    }
  }
`
const CloseMenu = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    position: fixed;
    right: 2rem;
    top: 2rem;
    z-index: 9;
    color: ${({ theme }) => theme.text};
    font-size: 2.5rem;
    cursor: pointer;
    display: block;

    .icon {
      color: ${({ theme }) => theme.white};
    }
  }

  @media screen and (max-width: 479px) {
    position: fixed;
    right: 2rem;
    top: 1rem;
    z-index: 1;
    display: block;
  }
`

const Icons = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 3rem;
  left: 40%;

  .icon {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }

  @media screen and (max-width: 991px) {
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    bottom: 3rem;
    left: 0;
    right: 0;

    .icon {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.brand};
    }
  }
`;

const DarkMoodIcon = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
  background: ${({ theme }) => theme.body};
  width: 50px;
  height: 50px;
  display: none;
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

  @media screen and (max-width: 991px) {
    position: fixed;
    left: 2rem;
    top: 2rem;
    background: ${({ theme }) => theme.brand};
    border: solid 1px ${({ theme }) => theme.brand};
    z-index: 5;
  }

  @media screen and (max-width: 479px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    position: fixed;
    left: 2.3rem;
    top: 2rem;
  }
`;

export default Navbar
