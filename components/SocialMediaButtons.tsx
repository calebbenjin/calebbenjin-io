import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'

const SocialMediaButtons = () => {
  return (
    <SocialMediaStyle>
      <Link href="https://www.linkedin.com/in/calebbenjin/" passHref>
        <div className="icon">
          <BsLinkedin />
        </div>
      </Link>
      <Link href="https://twitter.com/calebbenjin" passHref>
        <div className="icon">
          <BsTwitter />
        </div>
      </Link>
      <Link href="https://www.instagram.com/calebbenjin" passHref>
        <div className="icon">
          <BsInstagram />
        </div>
      </Link>
      <Link href="https://github.com/calebbenjin" passHref>
        <div className="icon">
          <BsGithub />
        </div>
      </Link>
    </SocialMediaStyle>
  )
}

const SocialMediaStyle = styled.div`
  position: fixed;
  right: 0;
  bottom: 0rem;
  padding: 1rem;
  backdrop-filter: saturate(180%) blur(2px);
  z-index: 9;

  .icon {
    width: 60px;
    height: 60px;
    background: transparent;
    box-shadow: inset 40px 0 0 0 ${({ theme }) => theme.brandBlue};
    border: solid 2px ${({ theme }) => theme.brandBlue};
    color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-weight: 900;
    transition: all 0.5s ease;

    &:hover {
      transition: all 0.5s ease;
      color: ${({ theme }) => theme.white};
      box-shadow: inset 50px 0 0 0 ${({ theme }) => theme.brandBlue}; 
      border: solid 2px ${({ theme }) => theme.brandBlue};
      cursor: pointer;
    }
  }

  @media(max-width: 768px) {
    bottom: 0.5rem;
    .icon {
      width: 40px;
      height: 40px;
      font-size: 1rem;

      &:hover {
        transition: all 0.5s ease;
        color: ${({ theme }) => theme.white};
        box-shadow: inset 25px 0 0 0 ${({ theme }) => theme.brand}; 
        cursor: pointer;
      }
    }
  }
`

export default SocialMediaButtons