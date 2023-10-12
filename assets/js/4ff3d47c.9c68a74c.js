"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[9729],{7918:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>j,contentTitle:()=>x,default:()=>v,frontMatter:()=>h,metadata:()=>b,toc:()=>f});var s=o(7462),i=o(7294),n=o(3905),a=o(508),r=o(5893);const c=a.ZP.p`
  font-style: normal;
  color: white;
`,d=a.ZP.p`
  color: white;
`;a.ZP.span`
  color: #66d9ef;
  margin-right: 10px;
`,a.ZP.span`
  color: white;
`,a.ZP.span`
  color: #e6db74;
`;const l=function(e){let{data:t}=e;const[o,s]=(0,i.useState)("#");return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"table",children:[(0,r.jsxs)("div",{className:"table-header",children:[(0,r.jsx)("div",{className:"table-cell",children:"Argument"}),(0,r.jsx)("div",{className:"table-cell",children:"Description"})]}),(0,r.jsx)("a",{href:o,children:(0,r.jsx)("div",{className:"table-body",children:t.map(((e,t)=>{e.functionKey.split(" ");return(0,r.jsxs)("div",{className:"table-row",onMouseEnter:()=>s(e.functionKey),children:[(0,r.jsxs)("div",{className:"table-cell",children:[(0,r.jsx)(c,{children:e.functionKey}),(0,r.jsx)("span",{className:"layout-boxes-required",children:(0,r.jsx)("required",{className:e.required?"yellow":"grey",r:"",children:e.required?"REQUIRED":"OPTIONAL"})})]}),(0,r.jsx)("div",{className:"table-cell",children:(0,r.jsx)(d,{children:e.description})})]},t)}))})})]})})},p=[{functionKey:"-c / --conn",description:"Sets the url of the database server to connect to",required:!1},{functionKey:"-u / --user",description:"Sets the root, namespace, or database user",required:!0},{functionKey:"-p / --pass",description:"Sets the password for the specified user",required:!0},{functionKey:"--ns",description:"Sets the desired namespace into which to import data",required:!0},{functionKey:"--db",description:"Sets the desired database into which to import data",required:!0}],m=JSON.parse('{"usageHeading":"Import a SurrealQL script into an existing database","usage":"surreal import [OPTIONS] <file>","args":"<file> Path to the sql file to import","options":[{"option":"-c, --conn <conn>","description":"Remote database server URL to connect to [default: https://cloud.surrealdb.com]"},{"option":"--db <db>","description":"The database to import the data into"},{"option":"-h, --help","description":"Print help information"},{"option":"--ns <ns>","description":"The namespace to import the data into"},{"option":"-p, --pass <pass>","description":"Database authentication password to use when connecting [default: root]"},{"option":"-u, --user <user>","description":"Database authentication username to use when connecting [default: root]"}]}');const u=function(){const{commandLine:e,usageHeading:t,usage:o,args:s,options:i}=m;return(0,r.jsx)("codes",{vertical:"",children:(0,r.jsxs)("div",{className:"codes",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:t})}),(0,r.jsxs)("pre",{children:[(0,r.jsx)("h5",{children:"USAGE:"}),(0,r.jsx)("code",{className:"language-txt",children:o})]}),(0,r.jsxs)("pre",{children:[(0,r.jsx)("h5",{children:"ARGS:"}),(0,r.jsx)("code",{className:"language-txt",children:s})]})]}),(0,r.jsxs)("div",{className:"options",children:[(0,r.jsx)("h4",{children:"OPTIONS:"}),(0,r.jsx)("div",{className:"option-description-container",children:i.map(((e,t)=>(0,r.jsxs)("div",{className:"option-description",children:[(0,r.jsx)("div",{className:"option-column",children:(0,r.jsx)("span",{className:"option-align",children:e.option})}),(0,r.jsx)("div",{className:"option-column",children:(0,r.jsx)("span",{className:"option-desc-align",children:e.description})})]},t)))})]})]})})},h={sidebar_position:3},x="Import command",b={unversionedId:"CLI tool/import_command",id:"CLI tool/import_command",title:"Import command",description:"",source:"@site/docs/CLI tool/import_command.mdx",sourceDirName:"CLI tool",slug:"/CLI tool/import_command",permalink:"/docs/CLI tool/import_command",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/CLI tool/import_command.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Start command",permalink:"/docs/CLI tool/start_command"},next:{title:"Export command",permalink:"/docs/CLI tool/export_command"}},j={},f=[],N={toc:f},g="wrapper";function v(e){let{components:t,...o}=e;return(0,n.kt)(g,(0,s.Z)({},N,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"import-command"},"Import command"),(0,n.kt)(l,{data:p,mdxType:"TableImportComponent"}),(0,n.kt)(u,{mdxType:"CommandHelp"}))}v.isMDXComponent=!0}}]);