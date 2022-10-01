import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import LoadingImg from '../public/loading.gif'

const Loading = () => {
  return (
    <Loader>
      <div className="loadingContainer">
        <Image src={LoadingImg} alt="loading" width="200" height="200" />
        <h3>Building...</h3>
      </div>
    </Loader>
  )
}

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #000;
  width: 100%;
  height: 100vh;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;

  .loadingContainer {
    text-align: center;
  }

  color: #fff;
`

export default Loading
