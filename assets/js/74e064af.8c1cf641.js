"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[4642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,g=d["".concat(i,".").concat(c)]||d[c]||p[c]||o;return r?n.createElement(g,s(s({ref:t},m),{},{components:r})):n.createElement(g,s({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7},s=void 0,l={unversionedId:"Installation/Run an in memory server",id:"Installation/Run an in memory server",title:"Run an in memory server",description:"Run a single-node, in-memory server",source:"@site/docs/Installation/Run an in memory server.mdx",sourceDirName:"Installation",slug:"/Installation/Run an in memory server",permalink:"/docs/Installation/Run an in memory server",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/Installation/Run an in memory server.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Run With Docker",permalink:"/docs/Installation/Run With Docker"},next:{title:"Run a disk based server",permalink:"/docs/Installation/Run a disk based server"}},i={},u=[{value:"Run a single-node, in-memory server",id:"run-a-single-node-in-memory-server",level:2}],m={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"run-a-single-node-in-memory-server"},"Run a single-node, in-memory server"),(0,a.kt)("p",null,"For the purposes of getting started with SurrealDB quickly, we will start an in-memory database which does not persist data on shutdown. This database is great for development and testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"surreal start memory\n")),(0,a.kt)("p",null,"The default logging level for the database server is ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", resulting in any informational logs to be output to the standard output. To control the logging verbosity, specify the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"--log"))," argument. The following command starts the database with ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," level logging, resulting in most logs being output to the terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"surreal start --log trace memory\n")),(0,a.kt)("p",null,"In order to keep SurrealDB secure, enable auth and configure your initial root-level user by setting the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"--user"))," and ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"--pass"))," command-line arguments. The following command starts the database with a top-level user named ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," with a password also set to ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"surreal start --log trace --auth memory\n")),(0,a.kt)("p",null,"The previous command will bootstrap the server with the provided initial credentials, you can now remove those args and rely on ",(0,a.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/define/user"},"DEFINE USER")," to change the password or create more users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"surreal start --log trace --auth memory\n")),(0,a.kt)("p",null,"In order to change the default port that SurrealDB uses for web connections and from database clients you can use the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"--bind"))," argument. The following command starts the database on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"surreal start --log trace --user root --pass root --bind 0.0.0.0:8080 memory\n")),(0,a.kt)("p",null,"After running the above command, you should see the SurrealDB server startup successfully."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"surreal start --user root --pass root --bind 0.0.0.0:8080 memory\n2023-08-30T15:06:34.788739Z  INFO surreal::dbs: \u2705\ud83d\udd12 Authentication is enabled \ud83d\udd12\u2705\n2023-08-30T15:06:34.788821Z  INFO surrealdb::kvs::ds: Starting kvs store in memory\n2023-08-30T15:06:34.788859Z  INFO surrealdb::kvs::ds: Started kvs store in memory\n2023-08-30T15:06:34.789222Z  INFO surrealdb::kvs::ds: Initial credentials were provided and no existing root-level users were found: create the initial user 'root'.\n2023-08-30T15:06:35.205123Z  INFO surrealdb::node: Started node agent\n2023-08-30T15:06:35.205827Z  INFO surrealdb::net: Started web server on 0.0.0.0:8080\n")),(0,a.kt)("p",null,"For details on the different commands available, visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/CLI%20tool"},"CLI tool documentation"),"."))}p.isMDXComponent=!0}}]);