"use strict";(self.webpackChunkminjae_cho_blog=self.webpackChunkminjae_cho_blog||[]).push([[505],{2176:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return E}});var r=n(1151),a=n(7294);function l(e){const t=Object.assign({p:"p"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,'어렸을 땐 무엇을 "~싫어, 이건 싫어, 그런 사람 싫어, 싫어싫어"하며 말하고 다니는 경향이 많은 것 같다.\r\n허나 시간이 조금만 지나거나 나이가 들면, 사람은 성숙해지고 생각이 바뀐다.\r\n부정적인 발언을 남에게 들려줘 각인시킨다면, 그런 사람으로 인식되고 있을 확률이 클 것이다.'),"\n",a.createElement(t.p,null,"반대로 삶에 이로운 성취 의지나 도덕 관념 등을 다른 이들에게 들려준다면, 과거에 꺼낸 말로 인해 어떻게든 그 말을 지키려는 경향이 강해진다.\r\n(이것이 내가 블로그 글을 쓰기 시작한 이유 중 하나다.)"),"\n",a.createElement(t.p,null,"말과 글은 세상에 꺼낸 순간 돌이킬 수 없다.\r\n내가 뱉은 말은 돌이킬 수 없고, 내가 쓴 글은 사라지지 않고 어딘가에 남게된다.\r\n내 말을 듣게 된 사람들은, 나를 그 말에 근거하여 판단하게 될 것이다.\r\n그리고 그러한 말을 뱉은 나 자신 또한, 그 말에 묶여서 살게 될 것이다.\r\n허나 사람은 계속 변하는 존재다.\r\n삶에 좋은 쪽이던, 안 좋은 쪽이던 계속 어떤 방향으로 가며 변한다."),"\n",a.createElement(t.p,null,"그렇기에 말에는 신중을 기해야 할 것이다.\r\n그리고 자신을 변화시킬 좋은 선언 도구로 사용해야 할 것이다."),"\n",a.createElement(t.p,null,"그러므로 말과 글을 생각없이 남발하고 다니면 안된다."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(8678),u=n(9357),i=n(4372),s=n(8008),m=n(8180);const d={Video:i.Z,ExternalLink:s.Z},f=e=>{let{data:t,children:n}=e;return a.createElement(o.Z,{pageTitle:t.mdx.frontmatter.title},a.createElement(r.Zo,{components:d},n,a.createElement(m.Z)))},p=e=>{let{data:t}=e;return a.createElement(u.Z,{title:t.mdx.frontmatter.title})};function E(e){return a.createElement(f,e,a.createElement(c,e))}},8180:function(e,t,n){var r=n(4578),a=n(7294);let l=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=a.createRef(),n.state={status:"pending"},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){const e=document.createElement("script");e.onload=()=>this.setState({status:"success"}),e.onerror=()=>this.setState({status:"failed"}),e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","ussr1285/ussr1285.github.io"),e.setAttribute("issue-term","title"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(e)},n.render=function(){const{status:e}=this.state;return a.createElement("div",{className:"comments-wrapper"},"failed"===e&&a.createElement("div",null,"Error. Please try again."),"pending"===e&&a.createElement("div",null,"Loading script..."),a.createElement("div",{ref:this.commentsEl}))},t}(a.Component);t.Z=l},8008:function(e,t,n){var r=n(7294),a=n(5292);t.Z=e=>{let{URL:t,children:n}=e;return r.createElement("a",{href:t,className:a.rO},n)}},8678:function(e,t,n){var r=n(5785),a=n(7294),l=n(1883),c=n(5292);t.Z=e=>{let{pageTitle:t,children:n}=e;const o=(0,l.K2)("3159585216");return a.createElement("div",{className:c.nC},a.createElement("header",{className:c.XX},a.createElement(l.rU,{to:"/",className:c.rO},a.createElement("span",{className:c.y7},o.site.siteMetadata.title)),a.createElement("nav",null,a.createElement("ul",{className:c.FV},(()=>{let e=[];return[["/","Main"],["/about","About"],["https://github.com/ussr1285","Github"],["/guestbook","Guestbook"],["/googlingTimeLine","My Googling"]].map((t=>{e=[].concat((0,r.Z)(e),[a.createElement("li",{className:c.up},a.createElement(l.rU,{to:t[0],className:c.rO},t[1]))])})),e})()))),a.createElement("main",null,a.createElement("h1",{className:c.Fq},t),n))}},9357:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,a.K2)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},4372:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);var a=e=>{let{videoSrcURL:t,videoTitle:n,...a}=e;return r.createElement("div",{className:"video-module--video-wrapper--8f25c"},r.createElement("iframe",{src:t,title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}},5292:function(e,t,n){n.d(t,{FV:function(){return o},Fq:function(){return u},KN:function(){return r},XX:function(){return i},nC:function(){return a},rO:function(){return l},up:function(){return c},y7:function(){return s}});var r="layout-module--articleStyle--05fbf",a="layout-module--container--78b04",l="layout-module--link-text--246e7",c="layout-module--nav-link-item--a5f0a",o="layout-module--nav-links--1113b",u="layout-module--page-heading--83cb2",i="layout-module--site-header--d0ab8",s="layout-module--site-title--e4dea"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return l}});var r=n(7294);const a=r.createContext({});function l(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o=l(e);return n&&(o=e||c),r.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-home-ubuntu-github-ussr-1285-github-io-blog-말과글의힘-20230214-index-mdx-a63a49f143fc8f0509cd.js.map