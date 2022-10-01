import styled from 'styled-components'
import { FiLinkedin, FiClipboard } from 'react-icons/fi'
import { FaTabletAlt, FaRegIdCard } from 'react-icons/fa'

const MySkillSection = () => {
  return (
    <>
      <SkillContainer>
        <Section>
        <div className="contentContainer">
          <div className="cardContainer">
            <div className="cardRow">
              <div className="cardLayout">
              <h1 className="sectionTitle">My Skill</h1>
                <div className="card">
                  <div className="cardIcon">
                    <FaRegIdCard className="icon" />
                  </div>
                  <h2 className="cardTitle">User Experience Design</h2>
                  <p>Defining business problems, building strategies to piece together the business goal and user needs by designing meaningful experiences.</p>
                </div>
              </div>
              
              <div className="cardLayout cardLayout2">
                <h1 className="sectionTitle none">My Skill</h1>
                <div className="card">
                  <div className="cardIcon">
                    <FiLinkedin className="icon" />
                  </div>
                  <h2 className="darkCardTitle">Animated Interactions</h2>
                  <p className="dark-text">I create animated micro-interactions usually to make things more engaging and less boring.</p>
                </div>
              </div>

              <div className="cardLayout">
                <div className="card">
                  <div className="cardIcon">
                    <FiLinkedin className="icon" />
                  </div>
                  <h2 className="cardTitle">Responsive Web Design</h2>
                  <p>I create layouts that adjust to any type of screen size, desktop, tablet or mobile.</p>
                </div>
              </div>

              <div className="cardLayout">
                <div className="card">
                  <div className="cardIcon">
                    <FiLinkedin className="icon" />
                  </div>
                  <h2 className="darkCardTitle">Founder of FrontendProf</h2>
                  <p className="dark-text">A community that house over 2k frontend engineers, mentoring and hosting bootcamps, is my way to give back to the community</p>
                </div>
              </div>

              <div className="cardLayout">
                <div className="card">
                  <div className="cardIcon">
                    <FiLinkedin className="icon" />
                  </div>
                  <h2 className="cardTitle">Technical Writer</h2>
                  <p>In my spare time, I love to share my knowledge, you will see some of best work at Hashnode.</p>
                </div>
              </div>

              <div className="cardLayout">
                <div className="card">
                  <div className="cardIcon">
                    <FiLinkedin className="icon" />
                  </div>
                  <h2 className="darkCardTitle">Youtube Channel</h2>
                  <p className="dark-text">After I founded FrontendProf, I thought it will be a good idea to start a Youtube channel to create content and host live-stream for the community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Section>
      </SkillContainer>
    </>
  )
}

const SkillContainer = styled.div`
  overflow: hidden !important;
`;

const Section = styled.section`
  position: relative;

  .sectionTitle {
    color: ${({ theme }) => theme.white};
    font-size: 6vw;
    line-height: 0.9;
    font-weight: 900;  
    text-align: left;
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


  .cardContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 479px) {
      position: static;
    }
  }

  .cardRow {
    color: ${({ theme }) => theme.white};
    text-align: center;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 479px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    .cardLayout {
      background: ${({ theme }) => theme.text};
      padding: 0 4rem;
      &:nth-child(even) {
        background: ${({ theme }) => theme.brand};
      }
      @media screen and (max-width: 991px) {
        padding: 0 2rem;
      }
    }

    .cardLayout2 {
      .sectionTitle {
        visibility: hidden;

        @media screen and (max-width: 479px) {
          display: none;
        }
      }
    }

    .card {
      width: 60%;
      margin: 0 auto 3rem auto;
      
      @media screen and (max-width: 991px) {
        width: 80%;
        margin: 5rem auto 3rem auto;
      }
      @media screen and (max-width: 991px) {
        width: 90%;
      }

      .cardIcon {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 50%;
        background: ${({ theme }) => theme.brand};
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          color: ${({ theme }) => theme.text};
          font-size: 3rem;
        }
      }

      .darkCardTitle {
        color: ${({ theme }) => theme.text};
        font-size: 1.7rem;
      }

      .dark-text {
        color: ${({ theme }) => theme.text};
        @media screen and (max-width: 991px) {
          color: ${({ theme }) => theme.white};
        }
      }

      .cardTitle {
        font-size: 1.7rem;
        color: ${({ theme }) => theme.brand};
      }

      @media screen and (max-width: 991px) {
        .cardTitle, .darkCardTitle {
          font-size: 1.5rem;
        }
      }

      p {
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.white};
      }
    }
  }

  .rightSide {
    background: ${({ theme }) => theme.brand};
    width: 100%;
    height: 170vh;

    @media screen and (max-width: 479px) {
      height: 100%;
      padding: 3rem 0;
    }
  }
`;

export default MySkillSection
