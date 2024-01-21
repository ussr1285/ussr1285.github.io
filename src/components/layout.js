import React from 'react'
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

    const makeNavs = () => {
        const navLinkLists = [
            ["/", "Main"],
            ["/about", "About"],
            ["https://github.com/ussr1285", "Github"],
            ["/guestbook", "Guestbook"],
            ["https://minjaegoogling.notion.site/fb5067a26b514e6580519523e319a5f6?pvs=4", "My Googling"],
        ]
        let navs = []
        navLinkLists.map((navInfo) => {
            navs = [
                ...navs,
                <li className={navLinkItem}>
                    <Link to={navInfo[0]} className={linkText}>
                        {navInfo[1]}
                    </Link>
                </li>
            ]
        })
        return navs
    }

    return (
        <div className={container}>
            <header className={siteHeader}>
                <Link to="/" className={linkText}>
                    <span className={siteTitle}>{data.site.siteMetadata.title}</span>
                </Link>
                <nav>
                    <ul className={navLinks}>
                        {makeNavs()}
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