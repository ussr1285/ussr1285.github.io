import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>제가 보려고 만든, 잡다한 것 올리고 정리하는 사이트입니다.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
