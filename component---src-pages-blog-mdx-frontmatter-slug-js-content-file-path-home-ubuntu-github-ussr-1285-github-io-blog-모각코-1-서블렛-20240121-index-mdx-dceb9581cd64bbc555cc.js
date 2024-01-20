"use strict";(self.webpackChunkminjae_cho_blog=self.webpackChunkminjae_cho_blog||[]).push([[481],{2716:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return E}});var r=n(1151),a=n(7294);function l(e){const t=Object.assign({p:"p",img:"img",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"최근 참여하고 있는 프로젝트에서 React로 방 정보를 불러와서 뛰어주는 메인 페이지를 만들어야 하는 일이 있다.\r\n백엔드 만들어주시는 분이 api 방식으로 간단하게 방 정보들 가져올 수 있도록 해주셔서 그걸 적극 활용하였다.\r\n생각나는대로 api가 가져오는 정보를 기존 방 정보랑 결합해주도록 하는 더보기 버튼을 만드니, 계속해서 방 리스트를 가져올 수가 있었다.\r\n그리고 현재 띄어주는 것과 별개로 미리 다음 방 정보를 가져오는 것이 좋겠다고 같이 모각코를 진행중인 분이 말해주었었는데, 확실히 그렇게하니 더 불러올 방이 있으면 버튼이 활성화되고 없으면 비활성화 되는 기능을 구현하기 쉬웠다."),"\n",a.createElement(t.p,null,"일단 이런 식으로 생각나는 대로 기능을 구현했더니, 그대로 바로 동작했다.\r\n그래서 바로 commit 하고 GitHub로 push하였으나.. 여기서 문제가 발생했다."),"\n",a.createElement(t.p,null,a.createElement(t.img,{src:"./screenshot1.png",alt:"스크린샷1"}),"\r\n그냥 이렇게 떠버리는 것이 아닌가?"),"\n",a.createElement(t.p,null,a.createElement(t.img,{src:"./screenshot2.png",alt:"스크린샷2"}),"\r\n버튼을 한번 눌러주어야 내가 기대한 최초의 화면이 나와버린다\r\n최초 실행 시에도 방 정보를 받아와야 하는데, 버튼을 눌러야 방 정보가 나오는 불친절한 사이트가 되어버린 것이다!"),"\n",a.createElement(t.p,null,"문제의 코드는 바로 이랬다."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"  useEffect(() => {\r\n    fetchRooms(listRoomAmount, listPageAmount);\r\n  }, []);\n")),"\n",a.createElement(t.p,null,"fetch해서 받아온 데이터가 채워져있을 변수를 console.log로 찍어봤더니, 아무것도 없었다.\r\n분명 최초 실행 시에도 방 정보를 받아와야 하는데, 받아오지 못하는 것이다.\r\n",a.createElement(t.img,{src:"./screenshot3.png",alt:"스크린샷3"})),"\n",a.createElement(t.p,null,"그래서 일단 머리를 스친 것은, useEffect가 제때 정보를 못 받아 온 것을 그냥 무시해버리고 있다는 느낌이었다.\r\n과거 react-native 웹뷰 관련 프로젝트를 할 때, gps 정보를 가져온 후에 웹페이지에 있는 js코드를 실행해야 했는데, 이 개념을 잘 몰라서 많이 헤맨적이 있었다.\r\n또한 저번 학기 운영체제 시간에 언급했던 프로젝트 때문에 관심을 가지게 된 동기, 비동기와 관련된 문제인 것 같아 어떻게 검색해서 정보를 알아볼 지 감이 잡혔다.\r\n동기화는 아예 작업을 순차적으로 해버리기 때문에 블록킹 방식과 같다 볼 수 있고, 논블록킹 방식은 작업이 끝날 때까지 기다리지 않는다고 들었었다.\r\n그러면 지금 useEffect는 논블로킹으로 작동 하고있는 것인가? 그래서 바로 구글에 리액트 useEffect 동기화라는 키워드로 검색해보았다.\r\n근데 검색해보니 async, 비동기를 사용하라고 한다.\r\n생각해보면 지금 방 정보를 얻어오는 api에다가 fetch 함수로 데이터를 가져오고 있는데, 당연히 동기나 비동기로 가져와야 했다.\r\n근데 동기화를 하기엔 데이터 받아올 때까지 사용자의 웹페이지가 멈춰있을 수는 없지 않은가?\r\n그래서 비동기로 동작하는 것이 당연한 것이 아닌가 나름대로 생각하며 바로 useEffect에서 async를 사용해버렸다."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},'  useEffect(() => {\r\n    async function fetchData() {\r\n      const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/post" + `?maxPost=${listRoomAmount}&page=${listPageAmount}`);\r\n      const data = await res.json();\r\n      setPreRoomsData(data);\r\n      setRoomsData([...roomsData, ...data]);\r\n    }\r\n    fetchData();\r\n  }, []);\n')),"\n",a.createElement(t.img,{src:"./screenshot4.png",alt:"스크린샷4"}),"\n",a.createElement(t.p,null,"그러니 잘 동작한다."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(8678),s=n(9357),u=n(4372),i=n(8008),m=n(8180);const f={Video:u.Z,ExternalLink:i.Z},d=e=>{let{data:t,children:n}=e;return a.createElement(o.Z,{pageTitle:t.mdx.frontmatter.title},a.createElement(r.Zo,{components:f},n,a.createElement(m.Z)))},p=e=>{let{data:t}=e;return a.createElement(s.Z,{title:t.mdx.frontmatter.title})};function E(e){return a.createElement(d,e,a.createElement(c,e))}},8180:function(e,t,n){var r=n(4578),a=n(7294);let l=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=a.createRef(),n.state={status:"pending"},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){const e=document.createElement("script");e.onload=()=>this.setState({status:"success"}),e.onerror=()=>this.setState({status:"failed"}),e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","ussr1285/ussr1285.github.io"),e.setAttribute("issue-term","title"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(e)},n.render=function(){const{status:e}=this.state;return a.createElement("div",{className:"comments-wrapper"},"failed"===e&&a.createElement("div",null,"Error. Please try again."),"pending"===e&&a.createElement("div",null,"Loading script..."),a.createElement("div",{ref:this.commentsEl}))},t}(a.Component);t.Z=l},8008:function(e,t,n){var r=n(7294),a=n(5292);t.Z=e=>{let{URL:t,children:n}=e;return r.createElement("a",{href:t,className:a.rO},n)}},8678:function(e,t,n){var r=n(5785),a=n(7294),l=n(1883),c=n(5292);t.Z=e=>{let{pageTitle:t,children:n}=e;const o=(0,l.K2)("3159585216");return a.createElement("div",{className:c.nC},a.createElement("header",{className:c.XX},a.createElement(l.rU,{to:"/",className:c.rO},a.createElement("span",{className:c.y7},o.site.siteMetadata.title)),a.createElement("nav",null,a.createElement("ul",{className:c.FV},(()=>{let e=[];return[["/","Main"],["/about","About"],["https://github.com/ussr1285","Github"],["/guestbook","Guestbook"],["/googlingTimeLine","My Googling"]].map((t=>{e=[].concat((0,r.Z)(e),[a.createElement("li",{className:c.up},a.createElement(l.rU,{to:t[0],className:c.rO},t[1]))])})),e})()))),a.createElement("main",null,a.createElement("h1",{className:c.Fq},t),n))}},9357:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,a.K2)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},4372:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);var a=e=>{let{videoSrcURL:t,videoTitle:n,...a}=e;return r.createElement("div",{className:"video-module--video-wrapper--8f25c"},r.createElement("iframe",{src:t,title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}},5292:function(e,t,n){n.d(t,{FV:function(){return o},Fq:function(){return s},KN:function(){return r},XX:function(){return u},nC:function(){return a},rO:function(){return l},up:function(){return c},y7:function(){return i}});var r="layout-module--articleStyle--05fbf",a="layout-module--container--78b04",l="layout-module--link-text--246e7",c="layout-module--nav-link-item--a5f0a",o="layout-module--nav-links--1113b",s="layout-module--page-heading--83cb2",u="layout-module--site-header--d0ab8",i="layout-module--site-title--e4dea"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return l}});var r=n(7294);const a=r.createContext({});function l(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o=l(e);return n&&(o=e||c),r.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-home-ubuntu-github-ussr-1285-github-io-blog-모각코-1-서블렛-20240121-index-mdx-dceb9581cd64bbc555cc.js.map