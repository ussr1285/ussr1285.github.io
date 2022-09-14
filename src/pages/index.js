import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>제가 보려고 만든, 잡다한 것 올리고 정리하는 사이트입니다.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
