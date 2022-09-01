import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { FaRegEye, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import project1Image from '../public/project1.png'


const Projects = ({project}:any) => {

  return (
    <Card key={project.id}>
      <Divider>
        <div className="line"></div>
        <p>Development & Design</p>
      </Divider>  
      <Content>
        <h2>{project.name}</h2>
        <p>{project.des}</p>
        <div>
          {project.task.map((task: any) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </div>
        <div className="tech">
          {project.tech.map((tech: any) => (
            <span key={tech.id} className="tech">{tech.name}</span>
          ))}
        </div>
      </Content>
      
      <ImageBox>
        <ImageContainer>
          <Image src={project.image} alt="project-image" layout="fill" />
        </ImageContainer>
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
  margin-bottom: 10rem;

  &:nth-child(2) {
    flex-direction: row-reverse;
  }

  @media(max-width: 768px) {
    margin-bottom: 3rem;
    flex-direction: column-reverse;

    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 1rem;
    text-transform: uppercase;
    letter-spacing: 4.5px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.gray};
  }
  .line {
    width: 20%;
    height: 2px;
    background: ${({ theme }) => theme.gray};
  }

  @media(max-width: 768px) {
    p {
      margin-left: 0.5rem;
      font-size: 0.7rem;
    }
    .line {
      width: 15%;
      height: 2px;
      background: ${({ theme }) => theme.gray};
    }
  }
`;

const Content = styled.div`
  width: 73%;
  margin: 7rem auto 5rem auto;

  h2 {
    font-size: 4rem;
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
    margin: 2rem auto 2rem auto;

    h2 {
      font-size: 1.7rem;
      font-weight: 800;
    }

    p {
      color: ${({ theme }) => theme.text};
      font-size: 0.8rem;
    }

    li {
      color: ${({ theme }) => theme.text};
      font-size: 0.8rem;
    }

    .tech {
      margin-right: 1rem;
      font-weight: 900;
      font-size: 0.8rem
    }
  }
`

const ImageContainer = styled.div`
  height: 53rem;
  width: 100%;
  

  @media(max-width: 768px) {
    height: 200px;
    width: 100%;
    margin: 0;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.1s all ease;
  
  img {
    z-index: 1;
    width: 100% !important;
    transition: 0.5s all ease;
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
    backdrop-filter: saturate(180%) blur(1px);
    padding: 2rem;
    transition: 0.5s all ease;
    z-index: 1;
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
      width: 80%;
      padding: 0.6rem;
      font-weight: 700;
      font-size: 0.7rem;
      border-radius: 10px;
      border: none;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
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
