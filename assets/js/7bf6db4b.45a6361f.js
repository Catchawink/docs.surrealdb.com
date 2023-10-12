"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[6210],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},l=void 0,i={unversionedId:"Introduction/Getting Started",id:"Introduction/Getting Started",title:"Getting Started",description:"Getting started",source:"@site/docs/Introduction/Getting Started.mdx",sourceDirName:"Introduction",slug:"/Introduction/Getting Started",permalink:"/docs/Introduction/Getting Started",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/Introduction/Getting Started.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Introduction/overview"},next:{title:"concepts",permalink:"/docs/Introduction/concepts"}},s={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Start the database",id:"start-the-database",level:2},{value:"macOS or Linux",id:"macos-or-linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Using SurrealQL",id:"using-surrealql",level:2},{value:"<code>CREATE</code>",id:"create",level:3},{value:"Querying data with <code>SELECT</code>",id:"querying-data-with-select",level:3},{value:"<code>UPDATE</code>",id:"update",level:3},{value:"<code>DELETE</code>",id:"delete",level:3},{value:"<code>REMOVE</code>",id:"remove",level:3},{value:"Learn more",id:"learn-more",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"In this guide, we will walk you through installing SurrealDB on your machine, defining your schema, and writing some queries with SurrealQL."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("em",null,"BEFORE YOU START :")," Make sure you\u2019ve installed SurrealDB \u2014 it should only take a second!"),(0,n.kt)("h2",{id:"start-the-database"},"Start the database"),(0,n.kt)("p",null,"First ensure that your database is set up correctly. To do so, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"surreal version\n")),(0,n.kt)("p",null,"To start your database, run the start command specific to your machine."),(0,n.kt)("h3",{id:"macos-or-linux"},"macOS or Linux"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"surreal start memory -A --auth --user root --pass root\n")),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"surreal.exe start memory -A --auth --user root --pass root\n")),(0,n.kt)("p",null,"Here's what each segment of this command does: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"surreal start"),": This initiates the process of starting the SurrealDB database server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-A"),": Enable all capabilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--auth"),": Enable authentication for the database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--user root --pass root"),": These flags set the initial username and password to access the database. Here both are set as root. Once the initial credentials are created, they are persisted in the datastore, which means you don't have to include the command line arguments next time you start SurrealDB. Instead, they should be securely stored in environment variables or some form of secret management system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"memory"),": This argument indicates that the database should be run in memory. Databases run in memory can have quicker data access times because they're not reading and writing from disk, but the data will be lost when the server is restarted.")),(0,n.kt)("h2",{id:"using-surrealql"},"Using SurrealQL"),(0,n.kt)("p",null,"Using SurrealQL, you can query data from your SurrealDB database. While this is not a requirement for getting started, it is helpful to familiarise yourself with some commands."),(0,n.kt)("p",null,"Once you have your database running, head over to ",(0,n.kt)("a",{parentName:"p",href:"https://Surrealist.app"},"Surrealist"),". Before you can start using Surrealist you will have to input the credentials for your session, which include the ",(0,n.kt)("inlineCode",{parentName:"p"},"Endpoint URL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Database"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Username"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"Password"),". By default these fields are empty and you can set them to the values below. However, these values can be set to your preference."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"EndpointURL: 'http://127.0.0.1:8000/'\nNamespace: 'test',\nDatabase: 'test',\nUsername: 'root',\nPassword: 'root',\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Note"),":  Surrealist is a third-party web-based SurrealQL client that allows you to run queries against your SurrealDB, built and maintained by StarlaneStudios!")),(0,n.kt)("h3",{id:"create"},(0,n.kt)("inlineCode",{parentName:"h3"},"CREATE")),(0,n.kt)("p",null,"The create command is used to add records to the database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE account SET\n    name = 'ACME Inc',\n    created_at = time::now()\n;\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"account")," record will be created, and a random ID has been generated for this record."),(0,n.kt)("p",null,"In SurrealDB, every record can be created and accessed directly by its ID. In the following query, we will create a record, but will use a specific ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE author:john SET\n    name.first = 'John',\n    name.last = 'Adams',\n    name.full = string::join(' ', name.first, name.last),\n    age = 29,\n    admin = true,\n    signup_at = time::now()\n;\n")),(0,n.kt)("p",null,"You can also link records to each other by creating a mutual record, for example, create a blog article record, which links to the author and account tables. In the following example we link to the author record directly by its ID, and we link to the account record with a subquery which searches using the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," field."),(0,n.kt)("p",null,"Let's now create a blog article record, which links to the ",(0,n.kt)("inlineCode",{parentName:"p"},"author")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"account")," tables. In the following example we link to the author record directly by its ID, and we link to the account record with a subquery which gives us the ID for ACME Inc."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE article SET\n    created_at = time::now(),\n    author = author:john,\n    title = 'Lorem ipsum dolor',\n    text = 'Donec eleifend, nunc vitae commodo accumsan, mauris est fringilla.',\n    account = (SELECT VALUE id FROM account WHERE name = 'ACME Inc' LIMIT 1)[0]\n;\n\n")),(0,n.kt)("h3",{id:"querying-data-with-select"},"Querying data with ",(0,n.kt)("inlineCode",{parentName:"h3"},"SELECT")),(0,n.kt)("p",null,"The querying functionality in SurrealDB works similarly to a traditional SQL, but with many of the added benefits of NoSQL query languages. To retrieve data, we will use a ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT")," query. You can query all the articles in your records and this will also return the record links."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM article;\n")),(0,n.kt)("p",null,"Also in SurrealDB we can retrieve data from multiple different tables or records at once. In the example below we'll retrieve data from both the ",(0,n.kt)("inlineCode",{parentName:"p"},"article")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"account")," table in one query."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM article, account;\n")),(0,n.kt)("p",null,"Also, Instead of pulling data from multiple tables and merging that data together, SurrealDB allows you to traverse related records efficiently without needing to use JOINs. In the following example, we will get all the articles where the author is younger than 30. In order to get the information for the author age for our filter condition we need to fetch the relevant records from the author table."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM article WHERE author.age < 30 FETCH author, account;\n")),(0,n.kt)("h3",{id:"update"},(0,n.kt)("inlineCode",{parentName:"h3"},"UPDATE")),(0,n.kt)("p",null,"Similar to UPDATE in SQL you can also update specific IDs, for example say you wanted to update the first name of the author you can do so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE author:john SET name = 'David'\n")),(0,n.kt)("p",null,"you can also update specific fields:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE author:john SET admin = false WHERE name.last = 'Adams';\n")),(0,n.kt)("h3",{id:"delete"},(0,n.kt)("inlineCode",{parentName:"h3"},"DELETE")),(0,n.kt)("p",null,"You can also delete specific records ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE person:david"),". You could also delete a record with specific conditions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE article WHERE author = 'David';\n")),(0,n.kt)("h3",{id:"remove"},(0,n.kt)("inlineCode",{parentName:"h3"},"REMOVE")),(0,n.kt)("p",null,"You can also remove a specific table using the ",(0,n.kt)("inlineCode",{parentName:"p"},"REMOVE TABLE"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"REMOVE TABLE person\n")),(0,n.kt)("p",null,"Congratulations, you\u2019re now on your way to database and API simplicity! For the next steps, take a look at some of our in-depth guides to see some of the other advanced functionality that you can use in SurrealDB."),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("p",null,"By completing this guide you have successfully set up a SurrealDB database and ran some SurrealQL queries. To learn more about ",(0,n.kt)("a",{parentName:"p",href:"https://surrealdb.com/docs/surrealql"},"SurrealQL, refer to the SurrealQL guides"),"."))}p.isMDXComponent=!0}}]);