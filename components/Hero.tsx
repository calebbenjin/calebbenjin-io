import styled from 'styled-components'
import Image from 'next/image'
import profileImage from '../public/profileImage.jpg'

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <div className="contentBox">
          <h1 className="name">Caleb Benjamin</h1>
          <h4 className="title">Frontend/UX Engineer</h4>
          <p className="intro">I have a robust problem-solving skill, and a proven experience in creating thoughtful digital products that lie at the interaction of beauty, that are  functional, maintainable, and has scalable context. I also help developers build a faster web app. I love Teaching and Writing about web development, serverless, React, and Next.js.</p>
        </div>
        <div className="ImageBox">
          <Image src={profileImage} alt="ProfileImage" width="150" height="150" placeholder="blur" />
        </div>
      </HeroContainer>
    </>

  )
}

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 4rem;

  .contentBox {
    width: 65%;

    .name {
      font-weight: 900;
      font-size: 48px;
      color: #000;
      line-height: 0;
    }

    .title {

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

    .contentBox {
      width: 100%;

      .name {
        font-weight: 900;
        font-size: 30px;
        color: #000;
        line-height: 0;
      }
    }

    .ImageBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 2rem;

      img {
        width: 120px !important;
        height: 120px !important;
      }
    }
  }
`;

export default Hero
