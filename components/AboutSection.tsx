import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Image from 'next/image'
import profileImage from '../public/profileImage.jpg'
import LeftLines from './LeftLines'
import Stack from './Stack'

const AboutSection = () => {
  return (
    <AboutSctionStyle>
      <Content>
        <Heading>About Me.</Heading>
        <p>Hey I&lsquo;m Caleb Benjamin, a frontend engineer @Capitalrollup, Technical writer, Youtuber, an enthusiastic and resourceful engineer who is passionate about building great products.  I love being part of a team, whilst enjoying the autonomous nature of working remotely. I have 4+ years of experience with component-based architecture using libraries such as: </p>
        <Stack />
      </Content>
      <ProfileImage>
        <ImageBox>
          <Image src={profileImage} alt="ProfileImage" placeholder="blur" layout="responsive" />
        </ImageBox>
      </ProfileImage>
      <LeftLines />
    </AboutSctionStyle>
  )
}

const AboutSctionStyle = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 65%;
  margin: 0 auto;
  position: relative;

  @media(max-width: 768px) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    width: 85%;
    margin: 0 auto;
  }
`
const Content = styled.div`
  width: 60%;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
  }

  @media(max-width: 768px) {
    width: 100%;
    margin-top: 3rem;

    p {
      font-size: 1.2rem;
      line-height: 1.5;
      color: ${({ theme }) => theme.text};
    }
  }
`
const ProfileImage = styled.div`
  width: 30%;
  @media(max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
const ImageBox = styled.div`
  overflow: hidden;
  width: 20rem;
  height: 20rem;
  border-radius: 42% 56% 72% 28% / 42%  42% 56% 48%;

  animation: morph 2.75s linear infinite;

  @keyframes morph {
    0%, 100% {
      border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    }
    33% {
      border-radius: 72% 28% 48% / 28% 28% 72% 72%;
    }
    66% {
      border-rdius: 100% 56% 100% / 100% 100% 56% 56%;
    }
  }

  @media(max-width: 768px) {
    width: 13rem;
    height: 12rem;
    margin: 3rem auto 0rem;

    // display: none;
  }
`


export default AboutSection
