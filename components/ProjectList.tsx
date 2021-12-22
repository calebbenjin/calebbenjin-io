import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Heading from './Heading';
import Link from 'next/link'
import ProjectCard from './ProjectCard';
import { FaRegEye, FaGithub } from 'react-icons/fa'



const Projects = ({data, showMore}:any) => {
  const { projects, sideProjects } = data;
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
        {state.projectsPlan.map((project:any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {showMore ? <div className="viewLink">
        <Link href="/projects"><a>See more</a></Link>
      </div> : null}
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  margin: 5rem 0;

  .viewLink {
    margin: 3rem auto 0rem;
    text-align: center;
    a {
      color: #5f5f5f;
      font-weight: 500;
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
    grid-gap: 30px;
    margin-bottom: 2rem;
  }

  @media(max-width: 768px) {
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
