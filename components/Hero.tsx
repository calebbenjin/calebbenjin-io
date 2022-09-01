import styled from 'styled-components'
import Image from 'next/image'
import profileImage from '../public/profileImage.jpg'
import LeftBubble from './LeftBubble'
import RightBubble from './RightBubble'
import SocialMediaButtons from './SocialMediaButtons'

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <LeftBubble />
        <div className="container">
          <div className="contentBox">
            <p className="hi">Hi, I&lsquo;m</p>
            <h1 className="name">Caleb <br /> Benjamin</h1>
            <p className="about">I write code, think about great designs, and a frontend engineer. Currently Frontend engineer @Capitalrollup. I&lsquo;m a Technical writer, an enthusiastic and resourceful engineer who is passionate about building great products. I love being part of a team, whilst enjoying the autonomous nature of working remotely.</p>
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
  height: 100vh;
  overflow: hidden !important;

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
      width: 75%;
      font-size: 1.5rem;
      line-height: 1.5;
      margin-top: 3rem;
      color: ${({ theme }) => theme.text};
    }

    .name {
      color: ${({ theme }) => theme.text};
      line-height: 1;
      z-index: 99;
      margin: 0;
      
      background: linear-gradient(-15deg, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brand});
      background-size: 300%;
      font-weight: 900;
      font-size: 8rem;
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
    height: 70vh;

    

    .contentBox {
      width: 100%;
      .about {
        width: 100%;
        font-size: 1rem;
        line-height: 1.5;
        margin-top: 1rem;
        color: ${({ theme }) => theme.text};
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
