import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
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
            <header className={siteTitle}>
                <Link to="/" className={navLinkText}>
                    {data.site.siteMetadata.title}
                </Link>
            </header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <a href="https://github.com/ussr1285" className={navLinkText}>
                            Github
                        </a>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout