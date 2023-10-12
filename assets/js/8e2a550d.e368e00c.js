"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[9557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3},o=void 0,i={unversionedId:"Installation/Install on Linux",id:"Installation/Install on Linux",title:"Install on Linux",description:"Install on Linux",source:"@site/docs/Installation/Install on Linux.mdx",sourceDirName:"Installation",slug:"/Installation/Install on Linux",permalink:"/docs/Installation/Install on Linux",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/Installation/Install on Linux.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install on macOS",permalink:"/docs/Installation/Install on macOS"},next:{title:"Install on Windows",permalink:"/docs/Installation/Install on Windows"}},s={},u=[{value:"Install on Linux",id:"install-on-linux",level:2},{value:"Installing SurrealDB using the install script",id:"installing-surrealdb-using-the-install-script",level:2},{value:"Updating SurrealDB",id:"updating-surrealdb",level:3},{value:"Checking SurrealDB",id:"checking-surrealdb",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-on-linux"},"Install on Linux"),(0,a.kt)("p",null,"Use this tutorial to install SurrealDB on Linux or Unix operating systems using the SurrealDB ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/surrealdb/install.surrealdb.com"},"install script"),". Both the SurrealDB Database Server and the SurrealDB Command Line Tool are packaged and distributed as a single executable file, which is easy to install, and easy to uninstall."),(0,a.kt)("h2",{id:"installing-surrealdb-using-the-install-script"},"Installing SurrealDB using the install script"),(0,a.kt)("p",null,"To get started, you can use the SurrealDB ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/surrealdb/install.surrealdb.com"},"install script"),". This script securely downloads the latest version for the platform and CPU type. It attempts to install SurrealDB into the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," folder, falling back to a user-specified folder if necessary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://install.surrealdb.com | sh\n")),(0,a.kt)("h3",{id:"updating-surrealdb"},"Updating SurrealDB"),(0,a.kt)("p",null,"To ensure that you are using the latest version, update SurrealDB to version ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.0.0")," using the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://install.surrealdb.com | sh\n")),(0,a.kt)("h3",{id:"checking-surrealdb"},"Checking SurrealDB"),(0,a.kt)("p",null,"Once installed, you can run the SurrealDB command-line tool by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"surreal")," command. To check whether the install was successful run the following command in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"surreal help\n")),(0,a.kt)("p",null,"The result should look similar to the output below, confirming that the SurrealDB command-line tool was installed successfully."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".d8888b.                                             888 8888888b.  888888b.\nd88P  Y88b                                            888 888  'Y88b 888  '88b\nY88b.                                                 888 888    888 888  .88P\n 'Y888b.   888  888 888d888 888d888  .d88b.   8888b.  888 888    888 8888888K.\n    'Y88b. 888  888 888P'   888P'   d8P  Y8b     '88b 888 888    888 888  'Y88b\n      '888 888  888 888     888     88888888 .d888888 888 888    888 888    888\nY88b  d88P Y88b 888 888     888     Y8b.     888  888 888 888  .d88P 888   d88P\n 'Y8888P'   'Y88888 888     888      'Y8888  'Y888888 888 8888888P'  8888888P'\n\n\nSurrealDB command-line interface and server\n\nTo get started using SurrealDB, and for guides on connecting to and building applications\non top of SurrealDB, check out the SurrealDB documentation (https://surrealdb.com/docs).\n\nIf you have questions or ideas, join the SurrealDB community (https://surrealdb.com/community).\n\nIf you find a bug, submit an issue on Github (https://github.com/surrealdb/surrealdb/issues).\n\nWe would love it if you could star the repository (https://github.com/surrealdb/surrealdb).\n\n----------\n\nUSAGE:\n    surreal [SUBCOMMAND]\n\nOPTIONS:\n    -h, --help    Print help information\n\nSUBCOMMANDS:\n    start      Start the database server\n    backup     Backup data to or from an existing database\n    import     Import a SQL script into an existing database\n    export     Export an existing database into a SQL script\n    version    Output the command-line tool version information\n    sql        Start an SQL REPL in your terminal with pipe support\n    help       Print this message or the help of the given subcommand(s)\n\n")))}p.isMDXComponent=!0}}]);