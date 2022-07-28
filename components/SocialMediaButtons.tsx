import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'

const SocialMediaButtons = () => {
  return (
    <SocialMediaStyle>
      <Link href="" passHref>
        <div className="icon">
          <BsLinkedin />
        </div>
      </Link>
      <Link href="" passHref>
        <div className="icon">
          <BsTwitter />
        </div>
      </Link>
      <Link href="" passHref>
        <div className="icon">
          <BsInstagram />
        </div>
      </Link>
      <Link href="" passHref>
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
    width: 80px;
    height: 80px;
    background: transparent;
    border: solid 2px ${({ theme }) => theme.brand};
    color: ${({ theme }) => theme.brand};
    font-size: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-weight: 900;
    transition: all 0.5s ease;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.brand};

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