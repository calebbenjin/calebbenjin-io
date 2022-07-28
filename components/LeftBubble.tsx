import React from 'react'
import styled from 'styled-components'

const LeftBubble = () => {
  return (
    <BubbleStyle>
      
    </BubbleStyle>
  )
}

const BubbleStyle = styled.div`
position: absolute;
left: -5rem;
top: 8rem;
overflow: hidden;
z-index: 0;
width: 15rem;
height: 15rem;
background: #6355a4;
border: solid 2px #6355a4;
border-radius: 42% 56% 72% 28% / 42%  42% 56% 48%;

animation: morph 1.5s linear infinite;

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
  left: -7rem;
  top: 13rem;
  width: 10rem;
  height: 10rem;
  margin: 3rem auto;

  // display: none;
}
`

export default LeftBubble
