import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>제가 보려고 만든, 잡다한 것 올리고 정리하는 사이트입니다.</p>
        <StaticImage
          alt="Ama Dablam mountain"
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
