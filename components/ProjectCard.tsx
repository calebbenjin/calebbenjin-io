import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { FaRegEye, FaGithub } from 'react-icons/fa'


const Projects = ({project}:any) => {

  return (
    <Card key={project.id}>
      <div>
        <header className="header">
          <div className="headFlex">
            <h3 className="logo">{project.logo}</h3>
            <h3 className="protitle">{project.name}</h3>
          </div>
          <div className="link">
            <Link href={`/projects/${project.slug}`}><a title="View Website"><FaRegEye /></a></Link>
            <Link href={project.github}><a target="_blank" title="View Source code"><FaGithub /></a></Link>
          </div>
        </header>
        <p className="des" >{project.des}</p>
          <div className="lang">{project.tech.map((item:any, i:any) => (
            <small key={i}>{item?.name}</small>
          ))}</div>
        
      </div>
    </Card>
  )
}

const Card = styled.section`
    border: solid 1px ${({ theme }) => theme.text};
    border-radius: 10px;
    padding: 20px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    box-shadow: 1px -1px 14px rgba(0,0,0,0.1);
    line-height: 24px;
    cursor: pointer;

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
        font-size: 1rem;
        transition: all 0.3s ease;
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

      small {
        margin: 0.5rem 0.5rem 0 0;
        padding: 1px 8px;
        border-radius: 4px;
        transition: all 0.3s ease-in;
        color: ${( {theme} ) => theme.text};
        border: solid 1px #f1f1f1;
        &:hover {
          box-shadow: 1px -1px 10px rgba(0,0,0,0.1);
          cursor: pointer;
          border: solid 1px ${({ theme }) => theme.text};
        }
      }
    }

    .des {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.text};
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
  }
`;

export default Projects
