import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    navLinks,
    navLinkItem,
    linkText,
    siteHeader,
    siteTitle,
    pageHeading
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
            <header className={siteHeader}>
                <Link to="/" className={linkText}>
                    <span className={siteTitle}>{data.site.siteMetadata.title}</span>
                </Link>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={linkText}>
                                Main
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={linkText}>
                                About
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <a href="https://github.com/ussr1285" className={linkText}>
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1 className={pageHeading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout