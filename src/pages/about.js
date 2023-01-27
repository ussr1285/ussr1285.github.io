import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
    linkText,
    navLinkItem,
} from '../components/layout.module.css'


const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>안녕하세요. 조씨입니다.</p>
            <p>제가 보려고 만든, 잡다한 것 올리고 정리하는 사이트입니다.</p>

            <ul>
                <li className={navLinkItem}>
                    <a href="https://github.com/ussr1285" className={linkText}>
                        깃허브 Github
                    </a>
                </li>
                <li className={navLinkItem}>
                    <a href="https://ussr1285.github.io/odds-ends/story_keyword_card24.html" className={linkText}>
                        오쓰카 에이지(<ruby>大塚<rt>おおつか</rt> 英志<rt>えいじ</rt></ruby>)의 스토리 키워드 카드
                    </a>
                </li>
                <li className={navLinkItem}>
                    그림 그리리
                </li>
                <li className={navLinkItem}>
                    <a href="https://ussr1285.github.io/HTML_CSS_Design_and_Build_Websites_by_Jon_Duckett_Total_Example_Code/" className={linkText}>
                        HTML and CSS: Design and Build Websites by Jon Duckett의 예제 코드 통합본
                    </a>
                </li>
                <li className={navLinkItem}>
                    <a href="https://resisted-sunfish-1cf.notion.site/fb5067a26b514e6580519523e319a5f6" className={linkText}>
                        구글링 타임라인
                    </a>
                </li>
                <li className={navLinkItem}>
                    <a href="https://pedia.watcha.com/ko-KR/users/8nPvyQjmdDvYo" className={linkText}>
                        왓챠피디아
                    </a>
                </li>
            </ul>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
