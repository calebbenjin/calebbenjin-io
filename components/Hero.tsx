import styled from 'styled-components'
import Image from 'next/image'
import heroImg from '../public/banner_bg.png'
import LeftBubble from './LeftBubble'

const Hero = () => {
  return (
    <>
      <HeroContainer>
        {/* <LeftBubble /> */}
        <div className="container">
          <div className="contentBox">
            <p className="hi">Hi, I&lsquo;m</p>
            <h1 className="name">Caleb Benjamin</h1>
            <p className="about">I write code, think about great designs, a Software Engineer, Content Creator, and Community Engineer who is currently open for a Developer Advocate role. I am passionate about building great products. I love being part of a team, whilst enjoying the autonomous nature of working remotely.</p>
          </div>
          {/* <SocialMediaButtons /> */}
        </div>
      </HeroContainer>
    </>
  )
}

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 80vh;
  width: 100%;
  overflow: hidden !important;
  background-image: url(./banner_bg.png);
  background-position: right;
  background-size: cover;

  .contentBox {
    width: 100%;
    color: ${({ theme }) => theme.text};
    z-index: 9;

    .hi {
      font-size: 2rem;
      font-family: Inter, sans-serif;
      color: ${({ theme }) => theme.text};
      padding-left: 10px;
    }

    .about {
      width: 50%;
      font-size: 1.2rem;
      line-height: 1.5;
      margin-top: 2rem;
      color: ${({ theme }) => theme.text};
    }

    .name {
      color: ${({ theme }) => theme.brand};
      line-height: 1;
      z-index: 99;
      margin: 0;
      
      background: linear-gradient(-15deg, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brand});
      background-size: 300%;
      font-weight: 900;
      font-size: 5rem;
      // letter-spacing: -5px;
      text-transform: capitalize;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: animated_text 8s ease-in-out infinite;
      -moz-animation: animated_text 8s ease-in-out infinite;
      -webkit-animation: animated_text 8s ease-in-out infinite;

      @keyframes animated_text {
        0% { background-position: 0px 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0px 50%; }
      }
    }

    .intro {
      color: ${({ theme }) => theme.text};
      line-height: 24px
    }

    .title {
      font-weight: 700;
      // margin-top: 2rem;

      span {
        font-weight: 400;
      }
    }
  }

  .ImageBox {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 50%;
    }
  }

  @media(max-width: 768px) {
    margin-top: 1rem;
    height: 75vh;

    // background-image: none;
    background-image:  url(./banner_bg.png);
    background-position: bottom;
    background-size: cover;

    .contentBox {
      width: 100%;
      margin-top: -12rem;
      .about {
        width: 70%;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1.5;
        margin-top: 1rem;
        color: ${({ theme }) => theme.text};
        // background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))
      }

      .hi {
        font-size: 1.5rem;
        font-family: Inter, sans-serif;
        color: ${({ theme }) => theme.text};
        padding-left: 1px;
        margin-bottom: 1rem;
      }

      .name {
        color: ${({ theme }) => theme.text};
        text-align: left;

        background: linear-gradient(-15deg, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brand});
        background-size: 300%;
        font-weight: 900;
        font-size: 2.5rem;
        letter-spacing: -1px;
        text-transform: capitalize;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: animated_text 10s ease-in-out infinite;
        -moz-animation: animated_text 10s ease-in-out infinite;
        -webkit-animation: animated_text 10s ease-in-out infinite;

        @keyframes animated_text {
          0% { background-position: 0px 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0px 50%; }
        }
      }
    }
  }
`;

export default Hero
