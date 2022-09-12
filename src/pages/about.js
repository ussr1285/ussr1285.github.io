import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>안녕하세요.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
