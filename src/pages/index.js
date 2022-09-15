import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { 
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Joe's Blog">
        <p>제가 보려고 만든, 잡다한 것 올리고 정리하는 사이트입니다.</p>
        
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <a href="https://ussr1285.github.io/odds-ends/story_keyword_card24.html" className={navLinkText}>
              오쓰카 에이지(<ruby>大塚<rt>おおつか</rt> 英志<rt>えいじ</rt></ruby>)의 스토리 키워드 카드
            </a>
          </li>
          <li className={navLinkItem}>
            그림 그리리
          </li>
          <li className={navLinkItem}>
            <a href="https://ussr1285.github.io/HTML_CSS_Design_and_Build_Websites_by_Jon_Duckett_Total_Example_Code/" className={navLinkText}>
              HTML and CSS: Design and Build Websites by Jon Duckett의 예제 코드 통합본
            </a>
          </li>
          <li className={navLinkItem}>
            <a href="https://resisted-sunfish-1cf.notion.site/fb5067a26b514e6580519523e319a5f6" className={navLinkText}>
              구글링 타임라인
            </a>
          </li>
          <li className={navLinkItem}>
            <a href="https://pedia.watcha.com/ko-KR/users/8nPvyQjmdDvYo" className={navLinkText}>
              왓챠피디아
            </a>
          </li>
        </ul>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
