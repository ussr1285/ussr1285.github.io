"use strict";(self.webpackChunkminjae_cho_blog=self.webpackChunkminjae_cho_blog||[]).push([[644],{3109:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return d}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({p:"p",a:"a"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"드디어 나의 처음부터 만든 블로그가 완성되었다. (2022년 여름 기준)"),"\n",a.createElement(t.p,null,"블로그 플랫폼(네이버 블로그, 티스토리 등)을 이용하지 않고, 내 블로그를 직접 만들고자 하는 욕망은 사실 2017년 고등학교 1학년때부터 있었다."),"\n",a.createElement(t.p,null,"그러나 그 당시 사용하려 했던 jekyll과 ruby라는 낯선 친구들에게 어려움을 느꼈었기에 계속 좌절되었었다."),"\n",a.createElement(t.p,null,"나는 아예 제로부터 HTML과 CSS를 만지작 거리며 github.io 도메인을 가진 블로그를 만들고 싶었는데, 그렇게 하기에는 좀 더 jekyll에 대해 이해할 필요가 있었다. (템플렛등은 그냥 클론하면 되어서 매우 쉬웠으나, 이것을 입맛대로 수정하는 것에 대해서는 아쉽게도 당시에 이해를 못함)"),"\n",a.createElement(t.p,null,"일단 정적페이지를 활용한 깃허브 블로그의 근본적인 핵심은 .md같은 마크다운 파일들을 게시글로 (html 문서로) 변환하여 보여준다는 것이었다."),"\n",a.createElement(t.p,null,"그 마크다운 변환 기능을 탑재한, 그리고 github-pages에서 처리해주는 대표적인 것이 jekyll과 gatsby 였고, 나는 이 블로그 개설에 gatsby를 사용하게 되었다."),"\n",a.createElement(t.p,null,"기존에 Expo(React Native 쉬운 버젼) 관련해서 깨작깨작 무언가를 만들어본 적이 있었기에, npm과 react gatsby는 ruby와 jekyll에 비해서 그나마 내게 친숙할 것이라 생각했고, 그리고 ",a.createElement(t.a,{href:"https://www.gatsbyjs.com/docs/"},"공식 문서"),"가 상당히 친절하여 마음에 들었다."),"\n",a.createElement(t.p,null,"최근(2022년 봄)에 취미를 들인 ",a.createElement(t.a,{href:"https://youtube.com/playlist?list=PLmrVWPFHf_oG1Im06PQ7hAGe8cLjRr_b5"},"만화 캐릭터 그리기와 관련된 유튜브 강의"),"를 보며 공책에 메모&그림을 따라 그렸는데, 이걸 보존할 겸 블로그에 올리면 되겠다는 생각으로 블로그 제작에 힘썼었다."),"\n",a.createElement(t.p,null,"그렇게 5년 만에 꿈에 그리던 핸드메이드(gatsby의 힘을 빌린) 블로그가 완성되었다!"),"\n",a.createElement(t.p,null,"이제 외출 or 외박을 나가서 그림을 스캔하고 메모와 함께 게시물을 올리려하였으나…!"),"\n",a.createElement(t.p,null,"아쉽게도 근방의 프린터 카페 스캔 방식이 전부 문서형 스캐너(",a.createElement(t.a,{href:"https://namu.wiki/w/%EC%8A%A4%EC%BA%90%EB%84%88#toc"},"이런 느낌?"),")라서, 공책을 스캔하려면 종이를 뜯어야 했기 때문에 스캔을 못해왔다."),"\n",a.createElement(t.p,null,"이것 때문에 약간 좌절한 나는, 게시글을 블로그 완성 이후로 하나도 포스팅하지 않았다.."),"\n",a.createElement(t.p,null,"허나 취미 뿐만 아니라 평소의 생각, 책에서 읽은 감명깊은 내용, 평소에 문제를 해결하게 된 기술적인 내용을 블로그에 기록하자는 목적도 있었기에, 그리고 게시글을 올리지 않으면, 웹 개발 공부 겸해서 하는 블로그 제작에 흥미가 생기지 않아 완성이 지연되기 때문에, 지금 다소 두서없는 글로 블로>그의 첫 게시글을 시작하고 있다."),"\n",a.createElement(t.p,null,"이제 생활하는 중 노트에 적어놓았던 것과, 노션에 개인적으로 글을 쓴 것들을 정리해서? 블로그 게시물로 올리면 될 것 같다."),"\n",a.createElement(t.p,null,"아무도 보지 않는 공개 일기?! 같은 느낌이지만, 블로그 글 게시가 작은 목표가 되어 삶의 원동력이 될 것이라 기대하고 있다."),"\n",a.createElement(t.p,null,"아직 블로그에 보완해야할 점이 많기에, 앞으로 블로그에서 구현/활용하고 싶은 기능은 다음과 같다."),"\n",a.createElement(t.p,null,"게시글 카테고리화 기능(네이버 블로그의 카테고리 스타일을 지향한다), 댓글 기능(firebase를 활용하거나, 아예 CRUD 기능 구현해볼 겸 아예 다른 사이트를 삽입하는 등 응용해볼까 생각 중이다. 이건 좀 더 알아봐야겠다), 1대1 채팅기능, 앞 두개의 기능을 위한 SSO(Single Sign-On) 로그인 연동, 포트\r\n폴리오용 페이지, 기술블로그와 취미&일상블로그의 분리, 구글애널리틱스 연동 등을 생각하고 있다."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},u=n(8678),o=n(9357),m=n(4372),i=n(8008);const s={Video:m.Z,ExternalLink:i.Z},p=e=>{let{data:t,children:n}=e;return a.createElement(u.Z,{pageTitle:t.mdx.frontmatter.title},a.createElement(l.Zo,{components:s},n))},E=e=>{let{data:t}=e;return a.createElement(o.Z,{title:t.mdx.frontmatter.title})};function d(e){return a.createElement(p,e,a.createElement(c,e))}},8008:function(e,t,n){var l=n(7294),a=n(5292);t.Z=e=>{let{URL:t,children:n}=e;return l.createElement("a",{href:t,className:a.rO},n)}},8678:function(e,t,n){var l=n(7294),a=n(1883),r=n(5292);t.Z=e=>{let{pageTitle:t,children:n}=e;const c=(0,a.K2)("3159585216");return l.createElement("div",{className:r.nC},l.createElement("header",{className:r.XX},l.createElement(a.rU,{to:"/",className:r.rO},l.createElement("span",{className:r.y7},c.site.siteMetadata.title)),l.createElement("nav",null,l.createElement("ul",{className:r.FV},l.createElement("li",{className:r.up},l.createElement(a.rU,{to:"/about",className:r.rO},"About")),l.createElement("li",{className:r.up},l.createElement(a.rU,{to:"/blog",className:r.rO},"Blog")),l.createElement("li",{className:r.up},l.createElement("a",{href:"https://github.com/ussr1285",className:r.rO},"Github"))))),l.createElement("main",null,l.createElement("h1",{className:r.Fq},t),n))}},9357:function(e,t,n){var l=n(7294),a=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,a.K2)("3159585216");return l.createElement("title",null,t," | ",n.site.siteMetadata.title)}},4372:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294);var a=e=>{let{videoSrcURL:t,videoTitle:n,...a}=e;return l.createElement("div",{className:"video-module--video-wrapper--8f25c"},l.createElement("iframe",{src:t,title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}},5292:function(e,t,n){n.d(t,{FV:function(){return c},Fq:function(){return u},XX:function(){return o},nC:function(){return l},rO:function(){return a},up:function(){return r},y7:function(){return m}});var l="layout-module--container--78b04",a="layout-module--link-text--246e7",r="layout-module--nav-link-item--a5f0a",c="layout-module--nav-links--1113b",u="layout-module--page-heading--83cb2",o="layout-module--site-header--d0ab8",m="layout-module--site-title--e4dea"},1151:function(e,t,n){n.d(t,{Zo:function(){return u},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:n}){let u=r(e);return n&&(u=e||c),l.createElement(a.Provider,{value:u},t)}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-home-ubuntu-github-ussr-1285-github-io-blog-첫글-20221231-mdx-94d6d3b08f5abe1abab7.js.map