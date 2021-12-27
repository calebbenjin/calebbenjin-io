import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'

const Layout: NextPage = ({title, keyword, description, children}:any) => {
  return (
    <main className="container">
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={keyword} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {children}
      <Footer />
    </main>
  )
}

Layout.defaultProps = {
  title: "Caleb Benjamin - Developer, Writer, Creator.",
  description: "calebbenjin.io",
  keyword: "JavaScript, TypeScript ReactJs, NextJs, SvelteJs, NodeJs, Severless, CSS-In-Js, "
}

export default Layout
