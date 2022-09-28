import styled from 'styled-components'
import Image from 'next/image'
import profilImg from '../public/profile.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Section>
          <div className="leftSide">
            <div className="contentContainer">
            <h1 className="greet">Hi there, I&apos;m</h1>
            <h1 className="name">Caleb Benjamin</h1>
            <h1 className="title">Frontend Engineer</h1>
            <p className="about">I write code, think about great designs, Founder of FrontendProf, Content Creator, Technical Writer. <br /> I am passionate about solving business problems through human-centered design. <br /> Currently open for a Developer Advocate role.</p>
            {/* <p className="about">I write code, think about great designs, Founder of FrontendProf, Content Creator, Technical Writer. <br /> I am passionate about building great products. <br /> I love being part of a team, whilst enjoying the autonomous nature of working remotely. <br /> I am currently open for a Developer Advocate role.</p> */}
            
            <div className="buttonFooter">
              <div className="flexContainer">
                <Link href="/">
                  <a className="reachBtn">React out to me</a>
                </Link>
                <Link href="/">
                  <a className="workBtn">View my works</a>
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="imgContainer">
              <Image src={profilImg} alt="Profile Image" layout="fill"/>
            </div>
          </div>
        </Section>
      </HeroContainer>
    </>
  )
}

const HeroContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: row;
  // height: 80vh;
  // width: 100%;
  overflow: hidden !important;
  // background-image: url(./banner_bg.png);
  // background-position: right;
  // background-size: cover;

  // .contentBox {
  //   width: 100%;
  //   color: ${({ theme }) => theme.text};
  //   z-index: 9;

  //   .hi {
  //     font-size: 2rem;
  //     font-family: Inter, sans-serif;
  //     color: ${({ theme }) => theme.text};
  //     padding-left: 10px;
  //   }

  //   .about {
  //     width: 50%;
  //     font-size: 1.2rem;
  //     line-height: 1.5;
  //     margin-top: 2rem;
  //     color: ${({ theme }) => theme.text};
  //   }

  //   .name {
  //     color: ${({ theme }) => theme.brand};
  //     line-height: 1;
  //     z-index: 99;
  //     margin: 0;
      
  //     background: linear-gradient(-15deg, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brand});
  //     background-size: 300%;
  //     font-weight: 900;
  //     font-size: 5rem;
  //     // letter-spacing: -5px;
  //     text-transform: capitalize;
  //     -webkit-background-clip: text;
  //     -webkit-text-fill-color: transparent;
  //     animation: animated_text 8s ease-in-out infinite;
  //     -moz-animation: animated_text 8s ease-in-out infinite;
  //     -webkit-animation: animated_text 8s ease-in-out infinite;

  //     @keyframes animated_text {
  //       0% { background-position: 0px 50%; }
  //       50% { background-position: 100% 50%; }
  //       100% { background-position: 0px 50%; }
  //     }
  //   }

  //   .intro {
  //     color: ${({ theme }) => theme.text};
  //     line-height: 24px
  //   }

  //   .title {
  //     font-weight: 700;
  //     // margin-top: 2rem;

  //     span {
  //       font-weight: 400;
  //     }
  //   }
  // }

  // .ImageBox {
  //   width: 30%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   img {
  //     border-radius: 50%;
  //   }
  // }

  // @media(max-width: 768px) {
  //   margin-top: 1rem;
  //   height: 75vh;

  //   // background-image: none;
  //   background-image:  url(./banner_bg.png);
  //   background-position: bottom;
  //   background-size: cover;

  //   .contentBox {
  //     width: 100%;
  //     margin-top: -12rem;
  //     .about {
  //       width: 70%;
  //       font-size: 0.8rem;
  //       font-weight: 500;
  //       line-height: 1.5;
  //       margin-top: 1rem;
  //       color: ${({ theme }) => theme.text};
  //       // background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))
  //     }

  //     .hi {
  //       font-size: 1.5rem;
  //       font-family: Inter, sans-serif;
  //       color: ${({ theme }) => theme.text};
  //       padding-left: 1px;
  //       margin-bottom: 1rem;
  //     }

  //     .name {
  //       color: ${({ theme }) => theme.text};
  //       text-align: left;

  //       background: linear-gradient(-15deg, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brand}, ${({ theme }) => theme.brandBlue}, ${({ theme }) => theme.brand});
  //       background-size: 300%;
  //       font-weight: 900;
  //       font-size: 2.5rem;
  //       letter-spacing: -1px;
  //       text-transform: capitalize;
  //       -webkit-background-clip: text;
  //       -webkit-text-fill-color: transparent;
  //       animation: animated_text 10s ease-in-out infinite;
  //       -moz-animation: animated_text 10s ease-in-out infinite;
  //       -webkit-animation: animated_text 10s ease-in-out infinite;

  //       @keyframes animated_text {
  //         0% { background-position: 0px 50%; }
  //         50% { background-position: 100% 50%; }
  //         100% { background-position: 0px 50%; }
  //       }
  //     }
  //   }
  // }
`;

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 479px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .leftSide {
    background: ${({ theme }) => theme.text};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 479px) {
      height: 100%;
      padding: 1.5rem 0 2rem 0;
    }

    .contentContainer {
      width: 85%;

      @media screen and (max-width: 479px) {
        width: 80%;
      }
    }

    .greet {
      color: ${({ theme }) => theme.text};
      -webkit-text-stroke: 1px #fff;
      font-size: 3.5vw;
      font-weight: 800;
      margin-bottom: 2rem;
      @media screen and (max-width: 991px) {
        color: ${({ theme }) => theme.brand};
        -webkit-text-stroke: 1px ${({ theme }) => theme.brand};
        font-size: 4vw;
        margin-bottom: 1rem;
      }

      @media screen and (max-width: 479px) {
        font-size: 6vw;
        letter-spacing: 1.5px;
      }
    }

    .name {
      color: ${({ theme }) => theme.white};
      font-size: 6vw;
      line-height: 0.9;
      font-weight: 900;
      margin: 0;
      font-family: 'Inter Tight', sans-serif;
      @media screen and (max-width: 991px) {
        font-size: 7vw;
        margin-bottom: 1rem;
      }

      @media screen and (max-width: 479px) {
        font-size: 14vw;
        line-height: 1;
        letter-spacing: 1.5px;
      }
    }

    .title {
      color: ${({ theme }) => theme.text};
      -webkit-text-stroke: 1px #fff;
      font-size: 3vw;
      font-weight: 800;
      margin-bottom: 2rem;
      @media screen and (max-width: 991px) {
        color: ${({ theme }) => theme.brand};
        -webkit-text-stroke: 1px ${({ theme }) => theme.brand};
        font-size: 4vw;
      }
      @media screen and (max-width: 479px) {
        font-size: 6vw;
        letter-spacing: 1.5px;
      }
    }

    .about {
      color: ${({ theme }) => theme.white};
      font-weight: 600;
      font-size: 1.3rem;
      width: 80%;
      line-height: 1.2;

      @media screen and (max-width: 991px) {
        width: 100%;
        font-size: 1.1rem;
      }

      @media screen and (max-width: 479px) {
        font-size: 1rem;
        letter-spacing: 0.5px;
      }
    }

    .reachBtn {
      background: ${({ theme }) => theme.brand};
      padding: 15px 20px;
      font-weight: 800;
      font-size: 1rem;
      text-transform: capitalize;
    }
  }

  .rightSide {
    background: ${({ theme }) => theme.brand};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    

    @media screen and (max-width: 479px) {
      height: 50%;
    }

    .imgContainer {
      position: relative;
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 991px) {
        position: relative;
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  
      @media screen and (max-width: 479px) {
        height: 50%;
      }
    }
  }

  .buttonFooter {
    position: absolute;
    bottom: 5rem;
    width: 100%;
    display: flex;
    align-text: center;
    justify-content: center;

    .flexContainer {
      display: flex;
      align-text: center;
      justify-content: space-between;
      width: 100%;

      .reachBtn {
        background: ${({ theme }) => theme.brand};
        padding: 15px 30px;
        font-weight: 900;
        letter-spacing: 1.5px;
        text-transform: capitalize;
        text-align: center;
        @media screen and (max-width: 479px) {
          width: 100%;
        }
      }
      .workBtn {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.brand};
        padding: 15px 30px;
        font-weight: 900;
        letter-spacing: 1.5px;
        text-transform: capitalize;
        margin-right: 20rem;
        text-align: center;
        @media screen and (max-width: 991px) {
          margin-right: 3rem;
        }
        @media screen and (max-width: 479px) {
          background: ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.text};
          width: 100%;
          margin-top: 1rem;
        }
      }

      
      @media screen and (max-width: 479px)  {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
      }
    }

    @media screen and (max-width: 479px) {
      position: static;
      bottom: 0rem;
    }
  }
`;

export default Hero
