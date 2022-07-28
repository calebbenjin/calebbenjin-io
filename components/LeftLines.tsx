import React from 'react'
import styled from 'styled-components'

const LeftLines = () => {
  return (
    <LeftLinesStyle>
      <div className="line-1">
      <div className="line-2">
      <div className="line-3"></div>
      </div>
      </div>
    </LeftLinesStyle>
  )
}

const LeftLinesStyle = styled.div`
  position: absolute;
  left: -30rem;
  bottom: 0;
  height: 20rem;
  width: 20rem;
  border: dashed 3px #6355a4;
  transform: rotate(20deg);

  .line-1 {
    height: 25rem;
    width: 28rem;
    border: dashed 3px #6355a4;
    transform: rotate(20deg);
    animation: morph 1.5s linear infinite;
  }

  .line-2 {
    height: 20rem;
    width: 20rem;
    border: dashed 3px #6355a4;
    transform: rotate(20deg);
    
  }
  .line-3 {
    height: 20rem;
    width: 30rem;
    border: dashed 3px red;
    transform: rotate(20deg);
    animation: morph 1.5s linear infinite;
  }


  @keyframes morph {
    0%, 100% {
      border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    }
    33% {
      border-radius: 72% 28% 48% / 28% 28% 72% 72%;
    }
    66% {
      border-rdius: 100% 56% 100% / 100% 100% 56% 56%;
    }
  }

  @media(max-width: 768px) {
    position: absolute;
    left: -28rem;
    bottom: 0;


    .line-1 {
      height: 20rem;
      width: 30rem;
      border: dashed 3px ${({ theme }) => theme.brandBlue};
      transform: rotate(20deg);
      animation: morph 1.5s linear infinite;
    }
    .line-2 {
      height: 20rem;
      width: 32rem;
      border: dashed 3px ${({ theme }) => theme.brand};
      transform: rotate(20deg);
      animation: morph 1.5s linear infinite;
    }
  }
`

export default LeftLines