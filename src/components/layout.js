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
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                        Home
                        </Link>
                    </li>
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
                        <a href="./Etc/story_keyword_card24/story_keyword_card24.html" className={navLinkText}>
                            오쓰카 에이지(<ruby>大塚<rt>おおつか</rt> 英志<rt>えいじ</rt></ruby>)의 스토리 키워드 카드
                        </a>
                    </li>
                    <li className={navLinkItem}>
                        <a href="https://ussr1285.github.io/HTML_CSS_Design_and_Build_Websites_by_Jon_Duckett_Total_Example_Code/" className={navLinkText}>
                            HTML and CSS: Design and Build Websites by Jon Duckett의 예제 코드 통합본
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