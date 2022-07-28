import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { FaRegEye, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import project1Image from '../public/project1.png'


const Projects = ({project}:any) => {

  return (
    <Card key={project.id}>
      <Content>
        <h1>{project.name}</h1>
        <p>{project.des}</p>
        <ul>
          {project.task.map((task: any) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
        <div className="tech">
          {project.tech.map((tech: any) => (
            <span key={tech.id} className="tech">{tech.name}</span>
          ))}
        </div>
      </Content>

      <ImageBox>
        <Image src={project.image} alt="project-image" layout='responsive' />
        <div className="overlay-container overlay">
          <div className="box">
            <button className="web-btn btn">
              <Link href={project.url}><a target="_blank">Visit website</a></Link>
            </button>
            <button className="case-btn btn">
              <Link href={`/projects/${project.slug}`}>Github repo</Link>
            </button>
            {/* <button className="case-btn btn">
              <Link href={`/projects/${project.slug}`}>View Case Study</Link>
            </button> */}
          </div>
        </div>
      </ImageBox>
    </Card>
  )
}

const Card = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10rem;

  &:nth-child(2) {
    flex-direction: row-reverse;
  }

  @media(max-width: 768px) {
    flex-direction: column-reverse;

    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

const Content = styled.div`
  width: 40%;
  h1 {
    font-size: 2rem;
    font-weight: 800;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  .tech {
    margin-right: 1rem;
    font-weight: 900;
  }

  @media(max-width: 768px) {
    width: 100%;

    .tech {
      margin-right: 1rem;
      font-weight: 900;
      font-size: 0.8rem
    }
  }
`

const ImageBox = styled.div`
  width: 55%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.1s all ease;
  
  img {
    // z-index: 1;
    // width: 100px !important;
    // transition: 0.5s all ease;
  }

  .overlay-container {
    transition: 0.5s all ease;
    padding: 2rem;
    position: absolute;
    left: -100rem;
    top: 0;
    bottom: 0;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .overlay-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: saturate(180%) blur(10px);
    padding: 2rem;
    transition: 0.5s all ease;
  }

  .btn {
    padding: 1rem 2rem;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    margin: 0 1rem;
    text-transform: uppercase;
  }

  .web-btn {
    background: ${({ theme }) => theme.brand};
    color: ${({ theme }) => theme.white};
  }
  .case-btn {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.brand};
    border: solid 2px ${({ theme }) => theme.brand};
  }

  @media(max-width: 768px) {
    width: 100%;

    .btn {
      padding: 1rem;
      font-weight: 700;
      border-radius: 10px;
      border: none;
      margin: 0 1rem;
      text-transform: uppercase;
    }

    .web-btn {
      background: ${({ theme }) => theme.brand};
      color: #fff;
    }
    .case-btn {
      background: transparent;
      color: ${({ theme }) => theme.brand};
      border: solid 2px ${({ theme }) => theme.brand};
    }
  }
`

export default Projects
