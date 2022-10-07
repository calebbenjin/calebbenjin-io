import React from 'react'
import styled from 'styled-components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from './Navbar'

const Layout: NextPage = ({title, keyword, description, children}:any) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={keyword} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <DevelopmentCard>
          <h2>🛠 😍Still under Development...</h2>
        </DevelopmentCard>
        {children}
      </Main>
    </React.Fragment>
  )
}

const Main = styled.main`
  width: 93%;
  margin: 0 0 0 auto;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`
const DevelopmentCard = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: #fff;
    background: ${({ theme }) => theme.text};
    padding: 20px;
  }

  @media screen and (max-width: 479px) {
    h2 {
      color: #333;
      background: ${({ theme }) => theme.brand};
      padding: 5px;
      font-size: 0.8rem;
      margin-top: -0.3rem;
    }
  }
`

Layout.defaultProps = {
  title: "Caleb Benjamin - Developer, Writer, Creator.",
  description: "calebbenjin.io",
  keyword: "JavaScript, TypeScript ReactJs, NextJs, SvelteJs, NodeJs, Severless, CSS-In-Js, "
}

export default Layout
