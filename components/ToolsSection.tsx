import styled from 'styled-components'
import { FiTwitter, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { DiJavascript1 } from 'react-icons/di'
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiCss3, SiRedux, SiAmazonaws, SiGatsby, SiStorybook, SiJest, SiNodedotjs, SiMongodb } from 'react-icons/si'

const ToolsSection = () => {
  return (
    <>
      <ToolsContainer>
        <Section>
          <div className="leftSide">
            <div className="contentContainer">
              <h1 className="sectionTitle">Tools I Use</h1>
              <div className="aboutContainer">
                <div className="aboutme">
                  <div className="aboutBody">
                    <div className="card">
                      <div className="cardHead">
                        <SiJavascript className="icon" />
                        <h3 className="cardTitle">JavaScript</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiTypescript className="icon" />
                        <h3 className="cardTitle">TypeScript</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiReact className="icon" />
                        <h3 className="cardTitle">React</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiNextdotjs className="icon" />
                        <h3 className="cardTitle">Next</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiCss3 className="icon" />
                        <h3 className="cardTitle">CSS</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiRedux className="icon" />
                        <h3 className="cardTitle">Redux</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiAmazonaws className="icon" />
                        <h3 className="cardTitle">AWS</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiGatsby className="icon" />
                        <h3 className="cardTitle">Gastby</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiStorybook className="icon" />
                        <h3 className="cardTitle">Storybook</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiJest className="icon" />
                        <h3 className="cardTitle">Jest</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiNodedotjs className="icon" />
                        <h3 className="cardTitle">Node</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                    <div className="card">
                      <div className="cardHead">
                        <SiMongodb className="icon" />
                        <h3 className="cardTitle">MongoDB</h3>
                      </div>
                      <p>My main design tool mostly for collaboration and for its different design elements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide">
          </div>
        </Section>
      </ToolsContainer>
    </>
  )
}

const ToolsContainer = styled.div`
  
`;

const Section = styled.section`
  position: relative;
  // height: 200vh;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 991px) {
    height: 250vh;
  }
  @media screen and (max-width: 479px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .leftSide {
    background: ${({ theme }) => theme.text};
    width: 100%;
    height: 150vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 991px) {
      height: 250vh;
    }

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

    .sectionTitle {
      color: ${({ theme }) => theme.white};
      font-size: 6vw;
      line-height: 0.9;
      font-weight: 900;  
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

    .aboutContainer {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      padding-top: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 479px) {
        position: static;
      }
    }

    .aboutme {
      color: ${({ theme }) => theme.white};
      font-weight: 500;
      padding: 2rem;
      width: 90%;
      line-height: 1.2;
      background: ${({ theme }) => theme.text};
      border-radius: 40px;
      box-shadow: rgba(0, 0, 0, 0.15) 14px 14px 40px 0px;
      border: solid 0.4rem ${({ theme }) => theme.brand};
      @media screen and (max-width: 991px) {
        padding: 2rem;
      }

      @media screen and (max-width: 479px) {
        border: none;
      }
      
      .aboutBody {
        background: ${({ theme }) => theme.text};
        border-radius: 50px;
        padding: 2rem;
        color: ${({ theme }) => theme.text};
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 991px) {
          padding: 1rem;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 2rem;
        }
        @media screen and (max-width: 768px) {
          padding: 1rem;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
        }
        @media screen and (max-width: 479px) {
          padding: 1rem;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 2rem;
        }

        p {
          color: ${({ theme }) => theme.text};
          padding: 0;
          line-height: 1.5;
        }
      }

      @media screen and (max-width: 991px) {
        width: 90%;
        font-size: 1.1rem;
      }

      @media screen and (max-width: 479px) {
        font-size: 1rem;
        letter-spacing: 0.5px;
      }
    }
  }

  .card {
    background: ${({ theme }) => theme.brand};
    color: ${({ theme }) => theme.text};
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: rgba(254, 212, 58, 0.2) 11px 11px 30px 0px;

    .cardHead {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icon {
        font-size: 2rem;
        margin: 0;
      }

      .cardTitle {
        font-size: 1.5rem;
        font-weight: 900;
        margin: 0;
      }
    }
  }

  .rightSide {
    background: ${({ theme }) => theme.brand};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 479px) {
      height: 100%;
      padding: 3rem 0;
    }

    @media screen and (max-width: 479px) {
      display: none;
    }
  }

  
`;

export default ToolsSection
