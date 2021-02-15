(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{297:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),o=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=o(a),f=r,u=l["".concat(s,".").concat(f)]||l[f]||m[f]||c;return a?n.a.createElement(u,i(i({ref:t},b),{},{components:a})):n.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var b=2;b<c;b++)s[b]=a[b];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),c=(a(0),a(297)),s={},i={unversionedId:"api/interfaces/types_src.yamlconfig.serveconfig",id:"api/interfaces/types_src.yamlconfig.serveconfig",isDocsHomePage:!1,title:"types_src.yamlconfig.serveconfig",description:"Interface: ServeConfig",source:"@site/docs/api/interfaces/types_src.yamlconfig.serveconfig.md",slug:"/api/interfaces/types_src.yamlconfig.serveconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.serveconfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.serveconfig.md",version:"current",sidebar:"sidebar",previous:{title:"types_src.yamlconfig.selectqueryormutationfieldconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.selectqueryormutationfieldconfig"},next:{title:"types_src.yamlconfig.snapshottransformconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.snapshottransformconfig"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"cors",id:"cors",children:[]},{value:"exampleQuery",id:"examplequery",children:[]},{value:"fork",id:"fork",children:[]},{value:"handlers",id:"handlers",children:[]},{value:"hostname",id:"hostname",children:[]},{value:"maxRequestBodySize",id:"maxrequestbodysize",children:[]},{value:"playground",id:"playground",children:[]},{value:"port",id:"port",children:[]},{value:"sslCredentials",id:"sslcredentials",children:[]},{value:"staticFiles",id:"staticfiles",children:[]},{value:"upload",id:"upload",children:[]}]}],b={toc:p};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-serveconfig"},"Interface: ServeConfig"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src"}),"types/src"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src.yamlconfig"}),"YamlConfig"),".ServeConfig"),Object(c.b)("p",null,"Configuration for ",Object(c.b)("inlineCode",{parentName:"p"},"mesh serve")," command.\nThose commands won't be available in programmatic usage."),Object(c.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#cors"}),"cors")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#examplequery"}),"exampleQuery")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#fork"}),"fork")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#handlers"}),"handlers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#hostname"}),"hostname")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#maxrequestbodysize"}),"maxRequestBodySize")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#playground"}),"playground")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#port"}),"port")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#sslcredentials"}),"sslCredentials")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#staticfiles"}),"staticFiles")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.serveconfig#upload"}),"upload"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"cors"},"cors"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"cors"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.corsconfig"}),Object(c.b)("em",{parentName:"a"},"CorsConfig"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L65"}),"packages/types/src/config.ts:65")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"examplequery"},"exampleQuery"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"exampleQuery"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Provide an example query or queries for GraphQL Playground\nThe value can be the file path, glob expression for the file paths or the SDL.\n(.js, .jsx, .graphql, .gql, .ts and .tsx files are supported.\nBut TypeScript support is only available if ",Object(c.b)("inlineCode",{parentName:"p"},"ts-node")," is installed and ",Object(c.b)("inlineCode",{parentName:"p"},"ts-node/register")," is added under ",Object(c.b)("inlineCode",{parentName:"p"},"require")," parameter)"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L64"}),"packages/types/src/config.ts:64")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fork"},"fork"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"fork"),": ",Object(c.b)("em",{parentName:"p"},"number")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Spawn multiple server instances as node clusters (default: ",Object(c.b)("inlineCode",{parentName:"p"},"1"),") (Any of: Int, Boolean)"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L49"}),"packages/types/src/config.ts:49")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"handlers"},"handlers"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"handlers"),": (",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.webhookhandler"}),Object(c.b)("em",{parentName:"a"},"WebhookHandler"))," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.expresshandler"}),Object(c.b)("em",{parentName:"a"},"ExpressHandler")),")[]"),Object(c.b)("p",null,"Express/Connect compatible handlers and middlewares extend GraphQL Mesh HTTP Server (Any of: WebhookHandler, ExpressHandler)"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L69"}),"packages/types/src/config.ts:69")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"hostname"},"hostname"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"hostname"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"The binding hostname (default: ",Object(c.b)("inlineCode",{parentName:"p"},"localhost"),")"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L57"}),"packages/types/src/config.ts:57")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"maxrequestbodysize"},"maxRequestBodySize"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"maxRequestBodySize"),": ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'. (Any of: Int, String)"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L81"}),"packages/types/src/config.ts:81")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"playground"},"playground"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"playground"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Show GraphiQL Playground"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L77"}),"packages/types/src/config.ts:77")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"port"},"port"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"port"),": ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"TCP Port to listen (default: ",Object(c.b)("inlineCode",{parentName:"p"},"3000"),") (Any of: Int, String)"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L53"}),"packages/types/src/config.ts:53")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sslcredentials"},"sslCredentials"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sslCredentials"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.httpsconfig"}),Object(c.b)("em",{parentName:"a"},"HTTPSConfig"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L83"}),"packages/types/src/config.ts:83")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"staticfiles"},"staticFiles"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"staticFiles"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Path to your static files you want to be served with GraphQL Mesh HTTP Server"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L73"}),"packages/types/src/config.ts:73")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"upload"},"upload"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"upload"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.uploadoptions"}),Object(c.b)("em",{parentName:"a"},"UploadOptions"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L82"}),"packages/types/src/config.ts:82")))}o.isMDXComponent=!0}}]);