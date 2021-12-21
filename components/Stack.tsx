import styled from 'styled-components'
import { DiJsBadge, DiReact } from 'react-icons/di'
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiStorybook,
  SiTailwindcss,
  SiSass,
  SiServerless,
} from 'react-icons/si'

const techStackData = [
  {
    id: 1,
    name: 'JavaScript',
    icon: <DiJsBadge />,
  },
  {
    id: 2,
    name: 'ReactJS',
    icon: <DiReact />,
  },
  {
    id: 3,
    name: 'NextJS',
    icon: <SiNextdotjs />,
  },
  {
    id: 4,
    name: 'Redux',
    icon: <SiRedux />,
  },
  {
    id: 5,
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    id: 56,
    name: 'Svelte.js',
    icon: <SiTypescript />,
  },
  {
    id: 6,
    name: 'Serverless',
    icon: <SiServerless />,
  },
  {
    id: 7,
    name: 'Storybook',
    icon: <SiStorybook />,
  },
  {
    id: 8,
    name: 'Tailwindcss',
    icon: <SiTailwindcss />,
  },
  {
    id: 9,
    name: 'SASS',
    icon: <SiSass />,
  },
  
]

const TechStack = () => {
  return <StackSection>
    <h4>Tech Stacks</h4>
    <div className="techContainer">
      {techStackData.map(tech => (
        <span className="card" key={tech.id}><span>{tech.icon}</span> {tech.name}</span>
      ))}
    </div>
  </StackSection>
}

const StackSection = styled.section`
  margin-bottom: 2rem;
  
  .techContainer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    width: 70%;
    margin-top: 1rem;
  }

  .card {
    background: #fff;
    padding: 10px;
    box-shadow: 1px -1px 14px rgba(0,0,0,0.1);
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span { 
      margin-right: 5px;
    }
  }

  @media(max-width: 768px) {
    .techContainer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      width: 100%;
      margin-top: 1rem;
      margin: 0 auto;
    }
    
    .card {
      margin-bottom: 0.5rem;
      padding: 8px;
      text-align: center;
    }
  }
`;

export default TechStack
