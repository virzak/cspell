"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48104],{40977:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=n(86106),r=n(79252);const d={},t="Interface: VFileSystemProvider",l={id:"api/cspell-lib/interfaces/VFileSystemProvider",title:"Interface: VFileSystemProvider",description:"Extends",source:"@site/docs/api/cspell-lib/interfaces/VFileSystemProvider.md",sourceDirName:"api/cspell-lib/interfaces",slug:"/api/cspell-lib/interfaces/VFileSystemProvider",permalink:"/docsV2/docs/api/cspell-lib/interfaces/VFileSystemProvider",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/interfaces/VFileSystemProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: TraceWordResult",permalink:"/docsV2/docs/api/cspell-lib/interfaces/TraceWordResult"},next:{title:"Interface: ValidationIssue",permalink:"/docsV2/docs/api/cspell-lib/interfaces/ValidationIssue"}},c={},o=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()?",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getFileSystem()",id:"getfilesystem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"interface-vfilesystemprovider",children:"Interface: VFileSystemProvider"}),"\n",(0,s.jsx)(i.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Partial"}),"<",(0,s.jsx)(i.code,{children:"Disposable"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"name"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Name of the Provider"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:"packages/cspell-io/dist/esm/VirtualFS.d.ts:54"}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.h3,{id:"dispose",children:"dispose()?"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"optional"})," ",(0,s.jsx)(i.strong,{children:"dispose"}),"(): ",(0,s.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"void"})}),"\n",(0,s.jsx)(i.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"Partial.dispose"})}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:"packages/cspell-io/dist/esm/models/disposable.d.ts:2"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"getfilesystem",children:"getFileSystem()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"getFileSystem"}),"(",(0,s.jsx)(i.code,{children:"url"}),", ",(0,s.jsx)(i.code,{children:"next"}),"): ",(0,s.jsx)(i.code,{children:"undefined"})," | ",(0,s.jsx)(i.code,{children:"VProviderFileSystem"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Get the file system for a given url. The provider is cached based upon the protocol and hostname."}),"\n",(0,s.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"url"}),": ",(0,s.jsx)(i.code,{children:"URL"})]}),"\n",(0,s.jsx)(i.p,{children:"the url to get the file system for."}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"next"}),": ",(0,s.jsx)(i.code,{children:"NextProvider"})]}),"\n",(0,s.jsx)(i.p,{children:"call this function to get the next provider to try. This is useful for chaining providers that operate on the same protocol."}),"\n",(0,s.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"undefined"})," | ",(0,s.jsx)(i.code,{children:"VProviderFileSystem"})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:"packages/cspell-io/dist/esm/VirtualFS.d.ts:60"})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},79252:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>l});var s=n(7378);const r={},d=s.createContext(r);function t(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);