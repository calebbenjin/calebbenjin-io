import { useState } from 'react'
import styled, { keyframes } from 'styled-components'


const packages = {
  monthly: [
    {
      id: 3,
      name: 'Ricnos Logistic',
      // description: 'A logistice management application',
      // tech: "JavaScript, React, NextJS, Prisma"
    },
    {
      id: 2,
      name: 'Optimuspro',
      // description: 'For pro level developers',
      // tech: "JavaScript, React, NextJS, Prisma"
    },
  ],
  annual: [
    {
      id: 1,
      name: 'E-commerce boilerplate',
      description: 'For Small teams or office',
    },
    {
      id: 2,
      name: 'React Authentication boilerplate',
      description: 'For Small teams or office',
    },
    {
      id: 3,
      name: 'DJ event App',
      description: 'For Small teams or office',
    },
    {
      id: 4,
      name: 'Evolt',
      description: 'Voting management application',
    },
    {
      id: 5,
      name: 'CryptoMeta',
      description: 'Cryptocurrency application',
    },
    {
      id: 6,
      name: 'CryptoMeta',
      description: 'Cryptocurrency application',
    },
  ]
};

const Projects = () => {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  })

  const handlePricingPlan = (plan) => {
    if(plan === 'annual') {
      setState({
        active: 'annual',
        pricingPlan: annual
      })
    } else {
      setState({
        active: 'monthly',
        pricingPlan: monthly
      })
    }
  }


  return (
    <ProjectSection>
      <h2 className="title">Projects</h2>
      <ToggleButtons>
        <button 
        className={state.active === 'monthly' ? 'active' : ''} 
        type="button" 
        aria-label="Monthly"
        onClick={() => handlePricingPlan('monthly')}
        >Projects</button>
        <button 
        className={state.active === 'annual' ? 'active' : ''} 
        type="button" 
        aria-label="Monthly"
        onClick={() => handlePricingPlan('annual')}
        >Pet Projects</button>
      </ToggleButtons>
      
      <div className="cardWrapper">
        {state.pricingPlan.map(project => (
          <div key={project.id} className="projectCard">
           <div>
              <h3 className="protitle">{project.name}</h3>
              <p className="des" >{project.description}</p>
              {/* <p className="lang">{project.tech}</p> */}
              {/* <p>View app <span>Source code</span></p> */}
           </div>
          </div>
        ))}
      </div>
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  margin: 5rem 0;
  .title {
    font-weight: 900;
    font-size: 40px;
    color: #000;
    line-height: 0;
  }

  .projectCard {
    /* border: solid 1px #acacac; */
    border-radius: 4px;
    padding: 10px 20px;
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 1px -1px 14px rgba(0,0,0,0.1);
    /* line-height: 1; */

    .lang {
      font-size: 0.7rem;
      font-weight: 900;
      color: #626262;
    }

    .protitle {
      font-size: 1rem;
    }
  }

  .cardWrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  @media(max-width: 768px) {
    .title {
      font-size: 28px;
    }

    .protitle {
      font-size: 1rem;
    }

    .cardWrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    .projectCard {
      padding: 10px;
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
    border: none;
    width: 100%;
    margin: 10px;
    font-weight: 600;
    color: #777777;
    border-radius: 4px;
    text-transform: capitalize;
    transition: all 0.6s,
  }
  .active {
    background: #fff;
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
