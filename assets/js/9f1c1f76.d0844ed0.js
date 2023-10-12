"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[5331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3929:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4},s=void 0,i={unversionedId:"Introduction/concepts",id:"Introduction/concepts",title:"concepts",description:"Concepts",source:"@site/docs/Introduction/concepts.mdx",sourceDirName:"Introduction",slug:"/Introduction/concepts",permalink:"/docs/Introduction/concepts",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/Introduction/concepts.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Introduction/Getting Started"},next:{title:"architecture",permalink:"/docs/Introduction/architecture"}},d={},l=[{value:"Concepts",id:"concepts",level:2},{value:"Traditional database or backend layer",id:"traditional-database-or-backend-layer",level:2},{value:"Relational, document, or graph",id:"relational-document-or-graph",level:2},{value:"Single-node or distributed",id:"single-node-or-distributed",level:2},{value:"System structure",id:"system-structure",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"concepts"},"Concepts"),(0,n.kt)("p",null,"This page aims to give details about some of the core concepts of SurrealDB, including the intended usecases, design choices, and overarching features."),(0,n.kt)("h2",{id:"traditional-database-or-backend-layer"},"Traditional database or backend layer"),(0,n.kt)("p",null,"SurrealDB can be used either as a traditional database platform, with backend languages and frameworks including Golang, Python, Rust, C, Java, .Net, Node.js, and PHP. Alternatively, you can use SurrealDB as a complete backend platform, connecting directly to it from frontend languages and frameworks including JavaScript, ",(0,n.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly"),", ",(0,n.kt)("a",{parentName:"p",href:"https://react.dev/"},"React.js"),", ",(0,n.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://emberjs.com/"},"Ember.js"),". In this mode, permissions can be defined on a table, record, and field level, allow for granular data access patterns for multiple different types of users."),(0,n.kt)("h2",{id:"relational-document-or-graph"},"Relational, document, or graph"),(0,n.kt)("p",null,"SurrealDB is, at its core, a document database. Each record is stored on an underlying key-value store storage engine, with the ability to store arbitrary arrays, objects, and many other types of data. However, SurrealDB isn't just a document database. Because of the way that SurrealDB handles Record IDs and the fetching of individual records from the underlying key-value storage engine, it can be used to store time-series ordered data, and highly-connected graph data. With the addition of an SQL-like query language (named ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql"},"SurrealQL"),"), it is easy to create, update, and read data from across the database."),(0,n.kt)("h2",{id:"single-node-or-distributed"},"Single-node or distributed"),(0,n.kt)("p",null,"SurrealDB is designed to be run in many different ways, and environments. Due to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/introduction/architecture"},"separation of the storage and compute layers"),", SurrealDB can be run in embedded mode, as a vertically-scalable, single-node database server, or as a horizontally-scalable, multi-node, distributed cluster. In embedded mode, SurrealDB can be run with an in-memory storage engine, in a web browser it can persist data using ",(0,n.kt)("a",{parentName:"p",href:"https://web.dev/indexeddb/"},"IndexedDB"),", or it can persist data using the file-based ",(0,n.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB")," storage engine. As a database server, SurrealDB can currently be configured to store data using ",(0,n.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB"),", ",(0,n.kt)("a",{parentName:"p",href:"https://tikv.org/"},"TiKV"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://www.foundationdb.org/"},"FoundationDB"),"."),(0,n.kt)("h2",{id:"system-structure"},"System structure"),(0,n.kt)("p",null,"SurrealDB works similarly to other traditional relational databases, and document databases, with a few slight differences. SurrealDB is designed and developed to be a multi-tenant database platform with a high-level ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/define/namespace"},(0,n.kt)("inlineCode",{parentName:"a"},"namespace"))," layer designed as a separation for each organisations, department, or development team. There is no limit to the number of namespaces on SurrealDB. Below this, the ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/define/database"},(0,n.kt)("inlineCode",{parentName:"a"},"databases"))," layer is similar to databases in other database management systems. There is no limit to the number of databases on each namespace. Within each database, data can be stored within ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/define/table"},(0,n.kt)("inlineCode",{parentName:"a"},"table"))," definitions, otherwise known as collections in other database management systems. In SurrealDB each row or document is called a ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/datamodel/ids"},(0,n.kt)("inlineCode",{parentName:"a"},"records"))," and columns are called ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/define/field"},(0,n.kt)("inlineCode",{parentName:"a"},"fields")),". While you can ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/define"},(0,n.kt)("inlineCode",{parentName:"a"},"define")),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/surrealql/statements/define/namespace"},(0,n.kt)("inlineCode",{parentName:"a"},"namespace"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/surrealql/statements/define/database"},(0,n.kt)("inlineCode",{parentName:"a"},"databases"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/surrealql/statements/define/table"},(0,n.kt)("inlineCode",{parentName:"a"},"table"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/surrealql/statements/define/field"},(0,n.kt)("inlineCode",{parentName:"a"},"fields")))),(0,n.kt)("p",null,"You cannot define ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/datamodel/ids"},(0,n.kt)("inlineCode",{parentName:"a"},"records")),", you can only ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/create"},"create"),", read, ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/update"},"update")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/surrealql/statements/delete"},"delete")," them."),(0,n.kt)("p",null,"Multiple authentication ",(0,n.kt)("inlineCode",{parentName:"p"},"scope")," definitions can be defined on each ",(0,n.kt)("inlineCode",{parentName:"p"},"database"),", allowing for custom authentication across tables, records, and fields."))}p.isMDXComponent=!0}}]);