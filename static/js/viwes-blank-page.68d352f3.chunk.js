(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[8],{126:function(e,a,t){"use strict";var l=t(5),c=t.n(l),n=t(10),s=t(14),r=t(23),m=t.n(r),i=t(96),o=t.n(i),u=t(98),b={tag:u.q,listTag:u.q,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},g=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,r=e.children,m=e.tag,i=e.listTag,b=e["aria-label"],g=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),d=Object(u.m)(o()(a),l),p=Object(u.m)(o()("breadcrumb",t),l);return c.a.createElement(m,Object(n.a)({},g,{className:d,"aria-label":b}),c.a.createElement(i,{className:p},r))};g.propTypes=b,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var d=g,p={tag:u.q,active:m.a.bool,className:m.a.string,cssModule:m.a.object},E=function(e){var a=e.className,t=e.cssModule,l=e.active,r=e.tag,m=Object(s.a)(e,["className","cssModule","active","tag"]),i=Object(u.m)(o()(a,!!l&&"active","breadcrumb-item"),t);return c.a.createElement(r,Object(n.a)({},m,{className:i,"aria-current":l?"page":void 0}))};E.propTypes=p,E.defaultProps={tag:"li"};var h=E,N=t(74),v=t(103),f=t(8);const j=e=>"/"+e===f.a?c.a.createElement(v.a,{id:"menu.home"}):c.a.createElement(v.a,{id:"menu.".concat(e)}),O=(e,a,t)=>e.split(a)[0]+a,k=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,l)=>c.a.createElement(h,{key:l,active:t.length===l+1},t.length!==l+1?c.a.createElement(N.b,{to:"/".concat(O(a,e))},j(e)):j(e)))))};a.a=({heading:e,match:a})=>c.a.createElement(c.a.Fragment,null,e&&c.a.createElement("h1",null,c.a.createElement(v.a,{id:e})),c.a.createElement(k,{match:a}))},274:function(e,a,t){"use strict";t.r(a);var l=t(5),c=t.n(l),n=t(331),s=t(103),r=t(112),m=t(126);a.default=({match:e})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,null,c.a.createElement(r.a,{xxs:"12"},c.a.createElement(m.a,{heading:"menu.blank-page",match:e}),c.a.createElement(r.b,{className:"mb-5"}))),c.a.createElement(n.a,null,c.a.createElement(r.a,{xxs:"12",className:"mb-4"},c.a.createElement("p",null,c.a.createElement(s.a,{id:"menu.blank-page"})))))}}]);