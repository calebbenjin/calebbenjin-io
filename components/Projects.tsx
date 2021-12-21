import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Heading from './Heading';
import Link from 'next/link'
import { FaRegEye, FaGithub } from 'react-icons/fa'

const packages = {
  projects: [
    {
      id: 1,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'Ricnos Logistic',
      des: 'A logistice management application logistice management application',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Chakara-ui"},
        {name: "Redux"},
      ]
    },
    {
      id: 2,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'Svelteui',
      des: 'A logistice management application logistice management application',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Chakara-ui"},
        {name: "Redux"},
      ]
    },
    {
      id: 3,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'OptimusPro',
      des: 'A Learning platform for forex and cryptocurrency traders.',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "TailwindCss"},
        {name: "Node.js"},
      ]
    },
    {
      id: 4,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'Evolt',
      des: 'A voting management system to help organizers create and manage perticipant and voters on their event.',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
    },
  ],
  sideProjects: [
    {
      id: 1,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'E-commerce boilerplate',
      des: 'For Small teams or office',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
    },
    {
      id: 2,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'React Authentication boilerplate',
      des: 'For Small teams or office',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
    },
    {
      id: 3,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'DJ event App',
      des: 'For Small teams or office',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
    },
    {
      id: 5,
      logo: "logo",
      previewImg: "Preview Image",
      name: 'CryptoMeta',
      des: 'Cryptocurrency application',
      github: "https://github.com/calebbenjin",
      url: "https://calebbenjin.vercel.app",
      tech: [
        {name: "Next.js"},
        {name: "Typescript"},
        {name: "Redux"},
        {name: "Prisma"},
        {name: "Styled-component"},
      ]
      
    }
  ]
};

const Projects = () => {
  const { projects, sideProjects } = packages;
  const [state, setState] = useState({
    active: 'projects',
    projectsPlan: projects,
  })

  const handlePricingPlan = (project: any) => {
    if(project === 'sideProjects') {
      setState({
        active: 'sideProjects',
        projectsPlan: sideProjects
      })
    } else {
      setState({
        active: 'projects',
        projectsPlan: projects
      })
    }
  }


  return (
    <ProjectSection>
      <Heading>Projects</Heading>
      <ToggleButtons>
        <button 
        className={state.active === 'projects' ? 'active' : ''} 
        type="button" 
        aria-label="Projects"
        onClick={() => handlePricingPlan('projects')}
        >Projects</button>
        <button 
        className={state.active === 'sideProjects' ? 'active' : ''} 
        type="button" 
        aria-label="sideProjects"
        onClick={() => handlePricingPlan('sideProjects')}
        >Pet Projects</button>
      </ToggleButtons>
      
      <div className="cardWrapper">
        {state.projectsPlan.map(project => (
          <div key={project.id} className="projectCard">
           <div>
              <header className="header">
                <div className="headFlex">
                  <h3 className="logo">{project.logo}</h3>
                  <h3 className="protitle">{project.name}</h3>
                </div>
                <div className="link">
                  <Link href={project.url}><a title="View Website"><FaRegEye /></a></Link>
                  <Link href={project.github}><a title="View Source code"><FaGithub /></a></Link>
                </div>
              </header>
              <p className="des" >{project.des}</p>
                <div className="lang">{project.tech.map((item, i) => (
                  <small key={i}>{item.name}</small>
                ))}</div>
              
           </div>
          </div>
        ))}
      </div>
      <div className="viewLink">
        <Link href="/projects"><a>See more</a></Link>
      </div>
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  margin: 5rem 0;

  .projectCard {
    /* border: solid 1px #acacac; */
    border-radius: 4px;
    padding: 20px;
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 1px -1px 14px rgba(0,0,0,0.1);
    /* line-height: 1; */

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .headFlex {
        display: flex;
        align-items: center;
      }
      a {
        font-size: 0.8rem;
      }
      .link a {
        margin-left: 1rem;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        color: #5d5c5c;
        &:hover {
          color: #333;
        }
      }
    }
    .lang {
      font-size: 0.8rem;
      list-style: none;
      text-align: left;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      color: #626262;

      small {
        margin: 0.5rem 0.5rem 0 0;
        background: #f1f1f1;
        padding: 5px 8px;
        border-radius: 4px;
        transition: all 0.3s ease-in;
        &:hover {
          background: #333;
          color: #fff;
          cursor: pointer
        }
      }
    }

    .des {
      font-size: 0.9rem;
    }

    .protitle {
      font-size: 1rem;
      margin: 0;
    }
    .logo {
      font-size: 1rem;
      margin-right: 1rem;
      font-weight: 900;
    }
  }

  .viewLink {
    margin: 3rem auto 0rem;
    text-align: center;
    a {
      color: #333;
      padding: 10px;
      border-radius: 4px;
      transition: all 0.3s ease;
      &:hover {
        background: #dfdfdf;

      }
    }
  }

  .cardWrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-bottom: 2rem;
  }

  @media(max-width: 768px) {
    .title {
      font-size: 28px;
    }

    .projectCard {
      .protitle {
        font-size: 1rem;
      }

      .logo {
        font-size: 1rem;
        margin-right: 1rem;
        font-weight: 900;
      }

      .header {
        .link a {
          margin-left: 0.5rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          color: #5d5c5c;
          &:hover {
            font-size: 1rem;
            color: #ccc;
          }
        }
      }
    }

    .cardWrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
    }
  }
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;

const ToggleButtons = styled.div`
  background: #eeeeee;
  width: 40%;
  margin: 4rem auto;
  /* padding: 10px; */
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  button {
    background: transparent;
    padding: 15px 30px;
    white-space: nowrap;
    border: none;
    width: 100%;
    margin: 10px;
    font-weight: 600;
    color: #777777;
    border-radius: 4px;
    animation: ${fadeIn} .4s ease-in;
    text-transform: capitalize;
    transition: all 0.6s,
  }
  .active {
    background: #fff;
    animation: ${fadeIn2} .4s ease-in;
    color: #333;
    box-shadow: 1px -1px 14px rgba(0,0,0,0.2);
  }

  @media(max-width: 768px) {
    width: 100%;
    margin: 3rem 0;
    button {
      padding: 13px;
    }
  }
`;

export default Projects
