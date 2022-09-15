import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { 
    navLinkText,
} from './layout.module.css'
  

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>안녕하세요.</p>
            <p>My Github Profile:
                <a href="https://github.com/ussr1285" className={navLinkText}>
                   logo
                </a>
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
