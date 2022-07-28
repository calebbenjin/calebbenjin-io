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
            <h1 className="name">I join teams to build next generation web apps, using cutting edge technologies.</h1>
          </div>
          <SocialMediaButtons />
        </div>
        <RightBubble />
        <RightBubble />
      </HeroContainer>
    </>
  )
}

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 90vh;
  overflow: hidden !important;

  .contentBox {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.text};
    z-index: 9;

    .name {
      color: ${({ theme }) => theme.text};
      line-height: 1.5;
      z-index: 99;
      
      background: linear-gradient(-15deg, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brand});
      background-size: 300%;
      font-weight: 900;
      font-size: 5vw;
      letter-spacing: -5px;
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
    flex-direction: column-reverse;
    margin-top: 1rem;
    height: 30vh;

    .contentBox {
      width: 100%;

      .name {
        color: ${({ theme }) => theme.text};
        line-height: 1.3;
        text-align: left;

        background: linear-gradient(-15deg, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brand});
        background-size: 300%;
        font-weight: 900;
        font-size: 2rem;
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
