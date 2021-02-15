(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(297)),i={},o={unversionedId:"api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",id:"api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",isDocsHomePage:!1,title:"types_src.yamlconfig.cacheinvalidateconfig",description:"Interface: CacheInvalidateConfig",source:"@site/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig.md",slug:"/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig.md",version:"current",sidebar:"sidebar",previous:{title:"types_src.yamlconfig.cacheeffectingoperationconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cacheeffectingoperationconfig"},next:{title:"types_src.yamlconfig.cachetransformconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"effectingOperations",id:"effectingoperations",children:[]},{value:"ttl",id:"ttl",children:[]}]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-cacheinvalidateconfig"},"Interface: CacheInvalidateConfig"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src"}),"types/src"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src.yamlconfig"}),"YamlConfig"),".CacheInvalidateConfig"),Object(c.b)("p",null,"Invalidation rules"),Object(c.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig#effectingoperations"}),"effectingOperations")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig#ttl"}),"ttl"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"effectingoperations"},"effectingOperations"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"effectingOperations"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.cacheeffectingoperationconfig"}),Object(c.b)("em",{parentName:"a"},"CacheEffectingOperationConfig")),"[]"),Object(c.b)("p",null,"Invalidate the cache when a specific operation is done without an error"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L930"}),"packages/types/src/config.ts:930")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ttl"},"ttl"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"ttl"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Specified in seconds, the time-to-live (TTL) value limits the lifespan"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L934"}),"packages/types/src/config.ts:934")))}l.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),u=r,m=f["".concat(i,".").concat(u)]||f[u]||b[u]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);