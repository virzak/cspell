"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14420],{37757:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(86106),d=s(79252);const r={},t="Interface: ParsedText",l={id:"api/cspell/interfaces/ParsedText",title:"Interface: ParsedText",description:"Properties",source:"@site/docs/api/cspell/interfaces/ParsedText.md",sourceDirName:"api/cspell/interfaces",slug:"/api/cspell/interfaces/ParsedText",permalink:"/docsV2/docs/api/cspell/interfaces/ParsedText",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell/interfaces/ParsedText.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: ParseResult",permalink:"/docsV2/docs/api/cspell/interfaces/ParseResult"},next:{title:"Interface: Parser",permalink:"/docsV2/docs/api/cspell/interfaces/Parser"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"delegate?",id:"delegate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"map?",id:"map",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"range",id:"range",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"rawText?",id:"rawtext",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"scope?",id:"scope",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"text",id:"text",level:3},{value:"Defined in",id:"defined-in-5",level:4}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-parsedtext",children:"Interface: ParsedText"}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"delegate",children:"delegate?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"delegate"}),": ",(0,i.jsx)(n.code,{children:"DelegateInfo"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Used to delegate parsing the contents of ",(0,i.jsx)(n.code,{children:"text"})," to another parser."]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:"cspell-types/dist/Parser/index.d.ts:47"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"map",children:"map?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"map"}),": ",(0,i.jsx)(n.code,{children:"SourceMap"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The source map is used to support text transformations."}),"\n",(0,i.jsx)(n.p,{children:"See: SourceMap"}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:"cspell-types/dist/Parser/index.d.ts:42"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"range",children:"range"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"range"}),": ",(0,i.jsx)(n.code,{children:"Range"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"start and end offsets of the text"}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:"cspell-types/dist/Parser/index.d.ts:30"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rawtext",children:"rawText?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"rawText"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The raw text before it has been transformed"}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:"cspell-types/dist/Parser/index.d.ts:26"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"scope",children:"scope?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"scope"}),": ",(0,i.jsx)(n.code,{children:"Scope"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Scope annotation for a segment of text.\nUsed by the spell checker to apply spell checking options\nbased upon the value of the scope."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:"cspell-types/dist/Parser/index.d.ts:36"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"text",children:"text"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"text"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The text extracted and possibly transformed"}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:"cspell-types/dist/Parser/index.d.ts:22"})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},79252:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(7378);const d={},r=i.createContext(d);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);