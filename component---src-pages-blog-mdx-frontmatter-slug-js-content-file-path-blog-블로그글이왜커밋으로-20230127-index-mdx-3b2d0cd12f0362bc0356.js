"use strict";(self.webpackChunkminjae_cho_blog=self.webpackChunkminjae_cho_blog||[]).push([[653],{5519:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return E}});var r=n(8453),a=n(6540);function l(e){const t=Object.assign({p:"p",pre:"pre",code:"code"},(0,r.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"예전에 군에서 AWS 환경에서 글을 올렸을 때 (npm run deploy) 했을 때는 “ubuntu” 라는 이름으로  github에 commit & push 되어서 내 잔디가 생기지 않았었다. 추가적으로 blog 폴더 하위 파일들도 .ignore에 추가하여(ex. blog/*) 글 작성 관련은 커밋되지 않도록 하도록 했었다."),"\n",a.createElement(t.p,null,"근데 방금 확인해보니 지금 이 윈도우10 컴퓨터에 내장된 WSL2 Ubuntu가 글을 올리는 것은 “ubuntu”가 아니라 내 깃허브 계정인 “ussr1285”로 올라가는 것이 아닌가?"),"\n",a.createElement(t.p,null,"급하게 아래처럼 타이핑하고 글 올려봤더니, 다시 ubuntu가 커밋한 것으로 찍혀서 나왔다."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'$ git config user.name "ubuntu"\r\n$ git config user.email "ubuntu@email.com"\n')),"\n",a.createElement(t.p,null,"“은밀하게 글쓰기”, “코드 수정만 commit하기” 라는 나 자신과의 약속?이 5번 정도 깨져버리는 순간이었다."))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.R)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(3895),c=n(7528),i=n(5240),s=n(9314),m=n(5551);const d={Video:i.A,ExternalLink:s.A},f=e=>{let{data:t,children:n}=e;return a.createElement(o.A,{pageTitle:t.mdx.frontmatter.title},a.createElement(r.x,{components:d},n,a.createElement(m.A)))},p=e=>{let{data:t}=e;return a.createElement(c.A,{title:t.mdx.frontmatter.title})};function E(e){return a.createElement(f,e,a.createElement(u,e))}},5551:function(e,t,n){var r=n(5540),a=n(6540);let l=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=a.createRef(),n.state={status:"pending"},n}(0,r.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){const e=document.createElement("script");e.onload=()=>this.setState({status:"success"}),e.onerror=()=>this.setState({status:"failed"}),e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","ussr1285/ussr1285.github.io"),e.setAttribute("issue-term","title"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(e)},n.render=function(){const{status:e}=this.state;return a.createElement("div",{className:"comments-wrapper"},"failed"===e&&a.createElement("div",null,"Error. Please try again."),"pending"===e&&a.createElement("div",null,"Loading script..."),a.createElement("div",{ref:this.commentsEl}))},t}(a.Component);t.A=l},9314:function(e,t,n){var r=n(6540),a=n(9216);t.A=e=>{let{URL:t,children:n}=e;return r.createElement("a",{href:t,className:a.yX},n)}},3895:function(e,t,n){var r=n(4506),a=n(6540),l=n(4810),u=n(9216);t.A=e=>{let{pageTitle:t,children:n}=e;const o=(0,l.GR)("3159585216");return a.createElement("div",{className:u.kL},a.createElement("header",{className:u.Lu},a.createElement(l.N_,{to:"/",className:u.yX},a.createElement("span",{className:u.q0},o.site.siteMetadata.title)),a.createElement("nav",null,a.createElement("ul",{className:u.rG},(()=>{let e=[];return[["/","Main"],["/about","About"],["https://github.com/ussr1285","Github"],["/guestbook","Guestbook"],["https://minjaegoogling.notion.site/fb5067a26b514e6580519523e319a5f6?pvs=4","My Googling"]].map((t=>{e=[].concat((0,r.A)(e),[a.createElement("li",{className:u.Fw},a.createElement(l.N_,{to:t[0],className:u.yX},t[1]))])})),e})()))),a.createElement("main",null,a.createElement("h1",{className:u.EF},t),n))}},7528:function(e,t,n){var r=n(6540),a=n(4810);t.A=e=>{let{title:t}=e;const n=(0,a.GR)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},5240:function(e,t,n){n.d(t,{A:function(){return a}});var r=n(6540);var a=e=>{let{videoSrcURL:t,videoTitle:n,...a}=e;return r.createElement("div",{className:"video-module--video-wrapper--8f25c"},r.createElement("iframe",{src:t,title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}},9216:function(e,t,n){n.d(t,{EF:function(){return c},Fw:function(){return u},Lu:function(){return i},kL:function(){return a},q0:function(){return s},rG:function(){return o},u3:function(){return r},yX:function(){return l}});var r="layout-module--articleStyle--05fbf",a="layout-module--container--78b04",l="layout-module--link-text--246e7",u="layout-module--nav-link-item--a5f0a",o="layout-module--nav-links--1113b",c="layout-module--page-heading--83cb2",i="layout-module--site-header--d0ab8",s="layout-module--site-title--e4dea"},8453:function(e,t,n){n.d(t,{R:function(){return u},x:function(){return o}});var r=n(6540);const a={},l=r.createContext(a);function u(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-블로그글이왜커밋으로-20230127-index-mdx-3b2d0cd12f0362bc0356.js.map