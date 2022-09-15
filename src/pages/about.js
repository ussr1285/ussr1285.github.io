import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { 
    navLinkItem,
  } from '../components/layout.module.css'
  

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>안녕하세요.</p>
            <p>Github:
                <a href="https://github.com/ussr1285" className={navLinkItem}>
                    My Github Profile
                </a>
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
