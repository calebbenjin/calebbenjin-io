import styled from 'styled-components'
import Image from 'next/image'
import projectImage from '../public/Pay.com-CS-Edgar-Deiner.png'
import Link from 'next/link'

const MyWorkSection = () => {
  return (
    <>
      <SkillContainer id="work">
        <Section>
        <div className="contentContainer">
          <div className="cardContainer">
            <div className="cardRow">
              <div className="cardLayout">
                <h1 className="sectionTitle">My Work</h1>
                <div className="card">
                  <h1 className="projectTitle"><span>01.</span> Pay.com</h1>
                  <h4 className="subTitle">Accept payments online</h4>
                  <p className="des">Led the full design process on a multi million dollar domain for a fintech company that is redefining the world of payments.</p>

                  <div className="role">
                    <p><strong>Role :</strong> Frontend Development & SEO.</p>
                    <p><strong>Stacks :</strong> Nextjs, TypeScript, ThemeUI, Redux, Unit-Test</p>
                  </div>
                  <div className="footerBottons">
                    <Link href="/">
                      <a className="siteBtn">Go To Website</a>
                    </Link>
                    <Link href="/">
                      <a className="caseBtn">Case-Study coming soon</a>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="cardLayout cardLayout2">
                <h1 className="sectionTitle none">My Skill</h1>
                <div className="imageCard">
                  <Image src={projectImage} alt="Pay.com Image" width="600" height="450" />
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
    position: relative;
    display: grid;
    width: 100%;
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
      width: 90%;
      margin: 10rem auto 3rem auto;
      border-left: solid 1px ${({ theme }) => theme.gray};
      padding-left: 5rem;
      
      @media screen and (max-width: 991px) {
        width: 80%;
        margin: 5rem auto 3rem auto;
      }
      @media screen and (max-width: 479px) {
        width: 95%;
        margin: 2rem auto 3rem auto;
      }

      .projectTitle {
        font-size: 2rem;

        span {
          margin-right: 1rem;
          color: ${({ theme }) => theme.brand};
        }
      }

      .subTitle {
        letter-spacing: 1.5px;
      }

      .role {
        margin: 10rem 0 1rem 0;
        padding: 0.5rem 0;
        border-top: solid 1px ${({ theme }) => theme.gray};
        border-bottom: solid 1px ${({ theme }) => theme.gray};
      }

      .footerBottons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        .siteBtn {
          background: ${({ theme }) => theme.brand};
          padding: 15px;
          color: ${({ theme }) => theme.text};
          text-align: center;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .caseBtn {
          background: ${({ theme }) => theme.background};
          padding: 15px;
          color: ${({ theme }) => theme.white};
          text-align: center;
          font-weight: 400;
          font-size: 1.1rem;
        }
      }

      p {
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.white};
      }
    }
  }

  .imageCard {
    margin-top: 8rem;
  }
`;

export default MyWorkSection
