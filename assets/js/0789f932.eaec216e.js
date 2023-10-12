"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[9979],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,slug:"/Integration/sdks/rust"},l="Rust",i={unversionedId:"Integration/SDKs/Rust",id:"Integration/SDKs/Rust",title:"Rust",description:"Rust SDK for SurrealDB",source:"@site/docs/Integration/SDKs/Rust.mdx",sourceDirName:"Integration/SDKs",slug:"/Integration/sdks/rust",permalink:"/docs/Integration/sdks/rust",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/Integration/SDKs/Rust.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/Integration/sdks/rust"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Integration/SDKs/Overview"},next:{title:"Node.js",permalink:"/docs/Integration/sdks/nodejs"}},s={},u=[{value:"Rust SDK for SurrealDB",id:"rust-sdk-for-surrealdb",level:2},{value:"Install the SDK",id:"install-the-sdk",level:3},{value:"Connect to SurrealDB",id:"connect-to-surrealdb",level:3},{value:"Windows",id:"windows",level:3},{value:"Using SurrealQL",id:"using-surrealql",level:2},{value:"<code>CREATE</code>",id:"create",level:3},{value:"Querying data with <code>SELECT</code>",id:"querying-data-with-select",level:3},{value:"<code>UPDATE</code>",id:"update",level:3},{value:"<code>DELETE</code>",id:"delete",level:3},{value:"<code>REMOVE</code>",id:"remove",level:3},{value:"Learn more",id:"learn-more",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rust"},"Rust"),(0,r.kt)("h2",{id:"rust-sdk-for-surrealdb"},"Rust SDK for SurrealDB"),(0,r.kt)("p",null,"The SurrealDB SDK for Rust enables simple and advanced querying of a remote or embedded database from a browser or from server-side code. Remote connections automatically reconnect when the connection is terminated."),(0,r.kt)("p",null,"To contribute to this documentation, edit this file on GitHub."),(0,r.kt)("p",null,"To contribute to the SDK code, submit an Issue or Pull Request here."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("em",null,"NOTE:")," This SDK is compatible with V1.0.0"),(0,r.kt)("h3",{id:"install-the-sdk"},"Install the SDK"),(0,r.kt)("p",null,"First, create a new project using cargo new and add the SurrealDB SDK to your dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add surrealdb\n")),(0,r.kt)("h3",{id:"connect-to-surrealdb"},"Connect to SurrealDB"),(0,r.kt)("p",null,"Open src/main.rs and replace everything in there with the following code to try out some basic operations using the SurrealDB SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'use serde::{Deserialize, Serialize};\nuse surrealdb::engine::remote::ws::Ws;\nuse surrealdb::opt::auth::Root;\nuse surrealdb::sql::Thing;\nuse surrealdb::Surreal;\n\n#[derive(Debug, Serialize)]\nstruct Name<\'a> {\n    first: &\'a str,\n    last: &\'a str,\n}\n\n#[derive(Debug, Serialize)]\nstruct Person<\'a> {\n    title: &\'a str,\n    name: Name<\'a>,\n    marketing: bool,\n}\n\n#[derive(Debug, Serialize)]\nstruct Responsibility {\n    marketing: bool,\n}\n\n#[derive(Debug, Deserialize)]\nstruct Record {\n    #[allow(dead_code)]\n    id: Thing,\n}\n\n#[tokio::main]\nasync fn main() -> surrealdb::Result<()> {\n    // Connect to the server\n    let db = Surreal::new::<Ws>("127.0.0.1:8000").await?;\n\n    // Signin as a namespace, database, or root user\n    db.signin(Root {\n        username: "root",\n        password: "root",\n    })\n    .await?;\n\n    // Select a specific namespace / database\n    db.use_ns("test").use_db("test").await?;\n\n    // Create a new person with a random id\n    let created: Vec<Record> = db\n        .create("person")\n        .content(Person {\n            title: "Founder & CEO",\n            name: Name {\n                first: "Tobie",\n                last: "Morgan Hitchcock",\n            },\n            marketing: true,\n        })\n    .await?;\n    dbg!(created);\n\n    // Update a person record with a specific id\n    let updated: Option<Record> = db\n        .update(("person", "jaime"))\n        .merge(Responsibility { marketing: true })\n        .await?;\n    dbg!(updated);\n\n    // Select all people records\n    let people: Vec<Record> = db.select("person").await?;\n    dbg!(people);\n\n    // Perform a custom advanced query\n    let groups = db\n        .query("SELECT marketing, count() FROM type::table($table) GROUP BY marketing")\n        .bind(("table", "person"))\n        .await?;\n    dbg!(groups);\n\n    Ok(())\n}\n')),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"surreal.exe start memory -A --auth --user root --pass root\n")),(0,r.kt)("p",null,"Here's what each segment of this command does: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"surreal start"),": This initiates the process of starting the SurrealDB database server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-A"),": Enable all capabilities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--auth"),": Enable authentication for the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--user root --pass root"),": These flags set the initial username and password to access the database. Here both are set as root. Once the initial credentials are created, they are persisted in the datastore, which means you don't have to include the command line arguments next time you start SurrealDB. Instead, they should be securely stored in environment variables or some form of secret management system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory"),": This argument indicates that the database should be run in memory. Databases run in memory can have quicker data access times because they're not reading and writing from disk, but the data will be lost when the server is restarted.")),(0,r.kt)("h2",{id:"using-surrealql"},"Using SurrealQL"),(0,r.kt)("p",null,"Using SurrealQL, you can query data from your SurrealDB database. While this is not a requirement for getting started, it is helpful to familiarise yourself with some commands."),(0,r.kt)("p",null,"Once you have your database running, head over to ",(0,r.kt)("a",{parentName:"p",href:"https://Surrealist.app"},"Surrealist"),". Before you can start using Surrealist you will have to input the credentials for your session, which include the ",(0,r.kt)("inlineCode",{parentName:"p"},"Endpoint URL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Database"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Username"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Password"),". By default these fields are empty and you can set them to the values below. However, these values can be set to your preference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EndpointURL: 'http://127.0.0.1:8000/'\nNamespace: 'test',\nDatabase: 'test',\nUsername: 'root',\nPassword: 'root',\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note"),":  Surrealist is a third-party web-based SurrealQL client that allows you to run queries against your SurrealDB, built and maintained by StarlaneStudios!")),(0,r.kt)("h3",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h3"},"CREATE")),(0,r.kt)("p",null,"The create command is used to add records to the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE account SET\n    name = 'ACME Inc',\n    created_at = time::now()\n;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," record will be created, and a random ID has been generated for this record."),(0,r.kt)("p",null,"In SurrealDB, every record can be created and accessed directly by its ID. In the following query, we will create a record, but will use a specific ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE author:john SET\n    name.first = 'John',\n    name.last = 'Adams',\n    name.full = string::join(' ', name.first, name.last),\n    age = 29,\n    admin = true,\n    signup_at = time::now()\n;\n")),(0,r.kt)("p",null,"You can also link records to each other by creating a mutual record, for example, create a blog article record, which links to the author and account tables. In the following example we link to the author record directly by its ID, and we link to the account record with a subquery which searches using the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field."),(0,r.kt)("p",null,"Let's now create a blog article record, which links to the ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," tables. In the following example we link to the author record directly by its ID, and we link to the account record with a subquery which gives us the ID for ACME Inc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE article SET\n    created_at = time::now(),\n    author = author:john,\n    title = 'Lorem ipsum dolor',\n    text = 'Donec eleifend, nunc vitae commodo accumsan, mauris est fringilla.',\n    account = (SELECT VALUE id FROM account WHERE name = 'ACME Inc' LIMIT 1)[0]\n;\n\n")),(0,r.kt)("h3",{id:"querying-data-with-select"},"Querying data with ",(0,r.kt)("inlineCode",{parentName:"h3"},"SELECT")),(0,r.kt)("p",null,"The querying functionality in SurrealDB works similarly to a traditional SQL, but with many of the added benefits of NoSQL query languages. To retrieve data, we will use a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query. You can query all the articles in your records and this will also return the record links."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM article;\n")),(0,r.kt)("p",null,"Also in SurrealDB we can retrieve data from multiple different tables or records at once. In the example below we'll retrieve data from both the ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," table in one query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM article, account;\n")),(0,r.kt)("p",null,"Also, Instead of pulling data from multiple tables and merging that data together, SurrealDB allows you to traverse related records efficiently without needing to use JOINs. In the following example, we will get all the articles where the author is younger than 30. In order to get the information for the author age for our filter condition we need to fetch the relevant records from the author table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM article WHERE author.age < 30 FETCH author, account;\n")),(0,r.kt)("h3",{id:"update"},(0,r.kt)("inlineCode",{parentName:"h3"},"UPDATE")),(0,r.kt)("p",null,"Similar to UPDATE in SQL you can also update specific IDs, for example say you wanted to update the first name of the author you can do so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE author:john SET name = 'David'\n")),(0,r.kt)("p",null,"you can also update specific fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE author:john SET admin = false WHERE name.last = 'Adams';\n")),(0,r.kt)("h3",{id:"delete"},(0,r.kt)("inlineCode",{parentName:"h3"},"DELETE")),(0,r.kt)("p",null,"You can also delete specific records ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE person:david"),". You could also delete a record with specific conditions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE article WHERE author = 'David';\n")),(0,r.kt)("h3",{id:"remove"},(0,r.kt)("inlineCode",{parentName:"h3"},"REMOVE")),(0,r.kt)("p",null,"You can also remove a specific table using the ",(0,r.kt)("inlineCode",{parentName:"p"},"REMOVE TABLE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REMOVE TABLE person\n")),(0,r.kt)("p",null,"Congratulations, you\u2019re now on your way to database and API simplicity! For the next steps, take a look at some of our in-depth guides to see some of the other advanced functionality that you can use in SurrealDB."),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"By completing this guide you have successfully set up a SurrealDB database and ran some SurrealQL queries. To learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://surrealdb.com/docs/surrealql"},"SurrealQL, refer to the SurrealQL guides"),"."))}p.isMDXComponent=!0}}]);