import styled from 'styled-components'
import Image from 'next/image'
import profilImg from '../public/profile.png'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <Section>
          <div className="leftSide">
            <div className="contentContainer">
              <h1 className="sectionTitle">About Me</h1>
              
            </div>
          </div>
          <div className="rightSide">
          <div className="aboutContainer">
            <div className="aboutme">
              <div className="aboutBody">
                <p>I write code, think about great designs, founder of FrontendProf, Content Creator, Technical Writer. Blockchain enthusiast <br /> I am passionate about solving business problems through human-centered design. <br /> Currently open for a Developer Advocate role.</p>
              </div>
            </div>
          </div>
          </div>
        </Section>
      </AboutContainer>
    </>
  )
}

const AboutContainer = styled.div`
  overflow: hidden !important;
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
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 479px) {
      height: 100%;
      padding: 1.5rem 0 2rem 0;;
    }

    .contentContainer {
      width: 85%;

      @media screen and (max-width: 479px) {
        width: 80%;
      }
    }

    
    .sectionTitle {
      color: ${({ theme }) => theme.brand};
      font-size: 6vw;
      line-height: 0.9;
      font-weight: 900;  
      margin-bottom: 4rem;
      font-family: 'Inter Tight', sans-serif;
      @media screen and (max-width: 991px) {
        font-size: 7vw;
        margin-bottom: 1rem;
      }

      @media screen and (max-width: 479px) {
        font-size: 10vw;
        line-height: 1;
        letter-spacing: 1.5px;
        text-align: center;
      }
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
      height: 100%;
      padding: 3rem 0;
    }


    .aboutContainer {
      position: absolute;
      left: 0;
      right: 0;
      padding-top: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 479px) {
        position: static;
        left: 0;
        right: 0;
        padding-top: 0;
      }
    }

    .aboutme {
      color: ${({ theme }) => theme.white};
      font-weight: 600;
      font-size: 1.3rem;
      width: 50%;
      line-height: 1.2;
      background: ${({ theme }) => theme.text};
      border-radius: 40px;
      box-shadow: rgba(0, 0, 0, 0.15) 14px 14px 40px 0px;
      border: solid 1rem ${({ theme }) => theme.brand};
      
      .aboutBody {
        background: ${({ theme }) => theme.text};
        border-radius: 50px;
        padding: 10px;
        color: ${({ theme }) => theme.white};

        p {
          color: ${({ theme }) => theme.white};
          padding: 20px;
        }
      }

      @media screen and (max-width: 991px) {
        width: 80%;
        font-size: 1.1rem;
      }

      @media screen and (max-width: 479px) {
        font-size: 1rem;
        letter-spacing: 1px;
        border: solid 0.5rem ${({ theme }) => theme.text};
        width: 90%;
        padding: 0;
      }
    }
  }
`;

export default AboutSection
