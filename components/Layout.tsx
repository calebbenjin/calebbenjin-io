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

Layout.defaultProps = {
  title: "Caleb Benjamin - Developer, Writer, Creator.",
  description: "calebbenjin.io",
  keyword: "JavaScript, TypeScript ReactJs, NextJs, SvelteJs, NodeJs, Severless, CSS-In-Js, "
}

export default Layout
