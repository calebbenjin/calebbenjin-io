import React from 'react'
import styled from 'styled-components'

const RightBubble = () => {
  return (
    <BubbleStyle>
      
    </BubbleStyle>
  )
}

const BubbleStyle = styled.div`
position: absolute;
right: 0rem;
top: 8rem;
overflow: hidden;
z-index: 0;
width: 5rem;
height: 5rem;
border: solid 2px ${({ theme }) => theme.brand};
border-radius: 42% 56% 72% 28% / 42%  42% 56% 48%;

animation: morph 1.75s linear infinite;

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
  right: 0rem;
  top: 13rem;
  width: 8rem;
  height: 8rem;
  margin: 3rem auto;

  display: none;
}
`

export default RightBubble
