"use strict";(self.webpackChunkminjae_cho_blog=self.webpackChunkminjae_cho_blog||[]).push([[674],{500:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var r=n(1151),a=n(7294);function l(e){const t=Object.assign({p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"군에 가기 전부터 지금까지 가족의 요청으로 모바일 웹뷰 앱 관련해서 일을 가끔 하고 있다.\r\n군에 가기 전에는 React Native Expo로 직접 웹뷰 앱을 개발하서 사용하였었는데, 군에 있는 동안 React Native Expo의 체계가 상당히 많이 바뀌어서 기존 코드로는 앱을 빌드할 수 없는 상황이 되어버렸다. 그래서 내가 군에 있는 동안 다른 웹뷰 프레임워크를 도입하게 되었다고 한다.\r\n그래서 전역 후, 그 새로운 웹뷰 프레임워크에 맞춰서 모바일 앱을 출시하게 되었다."),"\n",a.createElement(t.p,null,"그렇게 활용되고 있는 모바일 웹뷰 앱 중 하나가 푸시 알림을 적극 활용하는데, 그 푸시 알림이 일정하지 않게 사람들에게 도착한다하여 문제가 되었다.\r\n예전에 개발했던 방식이 구글 firebase와 Apple 푸시 관련 서비스에 직접 푸시 알림을 요청했었는데, 이번에는 OneSignal 이라는 푸시를 더 간편하게 보낼 수 있는 서비스를 활용하게 되었다. 안드로이드랑 애플 쪽 푸시 알림을 OneSignal이 중계해서 더 쉽게 한방에 보내주는 듯한 서비스다."),"\n",a.createElement(t.p,null,"근데 그렇게 해놓으니 푸시 도착하는 시간이 휴대폰마다 제각각 다른 것이 아닌가?\r\n그래서 이번 모각소 시간에 한번 찾아보았다."),"\n",a.createElement(t.p,null,"그래서 일단 ",a.createElement(t.a,{href:"https://documentation.onesignal.com/docs/notifications-delayed"},"OneSignal Delayed")," 공식 문서에 가서 보았더니, 이유가 될만한 것이 상당히 많았다.\r\n첫째, 받는 사람의 네트워크 문제일 수가 있다.\r\n둘째, 자주 사용하지 않는 앱이라 알림 권한이 삭제된 것일 수도 있다.\r\n셋째, 푸시 알람의 우선순위가 문제일 수도 있다.\r\n등등.. 여러 이유가 있어 하나하나 살펴보았다."),"\n",a.createElement(t.p,null,"먼저 네트워크 문제를 확인하기 위해 같은 네트워크 상에 있는 휴대폰들에 앱을 설치하고 알림 권한도 허용하고 푸시를 날려본 결과, 푸시 알림이 거의 잘 도착했지만 한 사람 휴대폰에서는 푸시 알림이 울리지 않았다.\r\n그래서 그 휴대폰 해당 모바일 앱 권한을 확인해봤는데 권한이 허용되어있었다.\r\n게다가 그 모바일 앱은 출시한지 6개월이 되지 않았다. (앱을 사용을 몇개월 동안 안해야 권한이 삭제된다고 한다.)"),"\n",a.createElement(t.p,null,"그래서 우선순위인 것 같아서 이곳 저곳 영어로도 검색해보기도 한 결과 뭔가 푸시 알림에 우선순위의 속성이 있는 것이 확실해졌다."),"\n",a.createElement(t.p,null,"현재 푸시 알람을 보내는 방식이, 따로 제작한 관리자 웹사이지에서 OneSignal API로 OneSignal에다가 어떤 알림을 보낼지 날려서, 다시 OneSignal에서 구글과 애플 알림 관련 서비스에 날리고, 거기서 다시 모바일 앱으로 알림을 보내주는 방식이다."),"\n",a.createElement(t.p,null,"바로 우리의 관리자 웹페이지에서 OneSiganl API로 보내는 코드에, 다음과 같이 priority 속성을 넣어주었다."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-json"},'{\r\n  "app_id": "YOUR_APP_ID",\r\n  "included_segments": ["All"],\r\n  ... 중략 ...\r\n  "priority": 10\r\n}\n')),"\n",a.createElement(t.p,null,"그러니 푸시 알림이 모든 휴대폰에 바로바로 가기 시작했다."),"\n",a.createElement(t.p,null,"아마 채팅 기능을 만드는 등 신속한 푸시 알림이 필요하면, 이 우선순위 속성을 알고있어야 할 것이다."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(8678),i=n(9357),u=n(4372),s=n(8008),m=n(8180);const d={Video:u.Z,ExternalLink:s.Z},p=e=>{let{data:t,children:n}=e;return a.createElement(o.Z,{pageTitle:t.mdx.frontmatter.title},a.createElement(r.Zo,{components:d},n,a.createElement(m.Z)))},f=e=>{let{data:t}=e;return a.createElement(i.Z,{title:t.mdx.frontmatter.title})};function E(e){return a.createElement(p,e,a.createElement(c,e))}},8180:function(e,t,n){var r=n(1721),a=n(7294);let l=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=a.createRef(),n.state={status:"pending"},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){const e=document.createElement("script");e.onload=()=>this.setState({status:"success"}),e.onerror=()=>this.setState({status:"failed"}),e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","ussr1285/ussr1285.github.io"),e.setAttribute("issue-term","title"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(e)},n.render=function(){const{status:e}=this.state;return a.createElement("div",{className:"comments-wrapper"},"failed"===e&&a.createElement("div",null,"Error. Please try again."),"pending"===e&&a.createElement("div",null,"Loading script..."),a.createElement("div",{ref:this.commentsEl}))},t}(a.Component);t.Z=l},8008:function(e,t,n){var r=n(7294),a=n(5292);t.Z=e=>{let{URL:t,children:n}=e;return r.createElement("a",{href:t,className:a.rO},n)}},8678:function(e,t,n){var r=n(5785),a=n(7294),l=n(4160),c=n(5292);t.Z=e=>{let{pageTitle:t,children:n}=e;const o=(0,l.K2)("3159585216");return a.createElement("div",{className:c.nC},a.createElement("header",{className:c.XX},a.createElement(l.rU,{to:"/",className:c.rO},a.createElement("span",{className:c.y7},o.site.siteMetadata.title)),a.createElement("nav",null,a.createElement("ul",{className:c.FV},(()=>{let e=[];return[["/","Main"],["/about","About"],["https://github.com/ussr1285","Github"],["/guestbook","Guestbook"],["https://minjaegoogling.notion.site/fb5067a26b514e6580519523e319a5f6?pvs=4","My Googling"]].map((t=>{e=[].concat((0,r.Z)(e),[a.createElement("li",{className:c.up},a.createElement(l.rU,{to:t[0],className:c.rO},t[1]))])})),e})()))),a.createElement("main",null,a.createElement("h1",{className:c.Fq},t),n))}},9357:function(e,t,n){var r=n(7294),a=n(4160);t.Z=e=>{let{title:t}=e;const n=(0,a.K2)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},4372:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);var a=e=>{let{videoSrcURL:t,videoTitle:n,...a}=e;return r.createElement("div",{className:"video-module--video-wrapper--8f25c"},r.createElement("iframe",{src:t,title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}},5292:function(e,t,n){n.d(t,{FV:function(){return o},Fq:function(){return i},KN:function(){return r},XX:function(){return u},nC:function(){return a},rO:function(){return l},up:function(){return c},y7:function(){return s}});var r="layout-module--articleStyle--05fbf",a="layout-module--container--78b04",l="layout-module--link-text--246e7",c="layout-module--nav-link-item--a5f0a",o="layout-module--nav-links--1113b",i="layout-module--page-heading--83cb2",u="layout-module--site-header--d0ab8",s="layout-module--site-title--e4dea"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return l}});var r=n(7294);const a=r.createContext({});function l(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o=l(e);return n&&(o=e||c),r.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-모각소-4-모바일앱-one-signal-push우선순위-202402-index-mdx-e4289a387f866a55a80a.js.map