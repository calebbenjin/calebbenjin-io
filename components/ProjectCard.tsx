import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Heading from './Heading';
import Link from 'next/link'
import { FaRegEye, FaGithub } from 'react-icons/fa'


const Projects = ({project}:any) => {

  console.log(project)

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
          <div className="lang">{project.tech.map(({item, i}:any) => (
            <small key={i}>{item.name}</small>
          ))}</div>
        
      </div>
    </Card>
  )
}

const Card = styled.section`
    /* border: solid 1px #acacac; */
    border-radius: 10px;
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
        font-size: 1rem;
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
