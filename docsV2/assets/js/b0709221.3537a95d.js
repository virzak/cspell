"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53906],{62614:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=i(86106),t=i(79252);const l={},r="Function: readSettings()",d={id:"api/cspell-lib/functions/readSettings",title:"Function: readSettings()",description:"readSettings(filename)",source:"@site/docs/api/cspell-lib/functions/readSettings.md",sourceDirName:"api/cspell-lib/functions",slug:"/api/cspell-lib/functions/readSettings",permalink:"/docsV2/docs/api/cspell-lib/functions/readSettings",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/functions/readSettings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Function: readRawSettings()",permalink:"/docsV2/docs/api/cspell-lib/functions/readRawSettings"},next:{title:"Function: ~~readSettingsFiles()~~",permalink:"/docsV2/docs/api/cspell-lib/functions/readSettingsFiles"}},c={},a=[{value:"readSettings(filename)",id:"readsettingsfilename",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"readSettings(filename, pnpSettings)",id:"readsettingsfilename-pnpsettings",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in-1",level:3},{value:"readSettings(filename, relativeTo)",id:"readsettingsfilename-relativeto",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Defined in",id:"defined-in-2",level:3},{value:"readSettings(filename, relativeTo, pnpSettings)",id:"readsettingsfilename-relativeto-pnpsettings",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Defined in",id:"defined-in-3",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"function-readsettings",children:"Function: readSettings()"})}),"\n",(0,s.jsx)(n.h2,{id:"readsettingsfilename",children:"readSettings(filename)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"readSettings"}),"(",(0,s.jsx)(n.code,{children:"filename"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Read / import a cspell configuration file."}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"filename"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"URL"})]}),"\n",(0,s.jsx)(n.p,{children:"the path to the file.\nSupported types: json, yaml, js, and cjs. ES Modules are not supported."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["absolute path ",(0,s.jsx)(n.code,{children:"/absolute/path/to/file"})]}),"\n",(0,s.jsxs)(n.li,{children:["relative path ",(0,s.jsx)(n.code,{children:"./path/to/file"})," (relative to the current working directory)"]}),"\n",(0,s.jsxs)(n.li,{children:["package ",(0,s.jsx)(n.code,{children:"@cspell/dict-typescript/cspell-ext.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/95c95f27324672d2082a4b3e2ddfcdb5710d4598/packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts#L13",children:"packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts:13"})}),"\n",(0,s.jsx)(n.h2,{id:"readsettingsfilename-pnpsettings",children:"readSettings(filename, pnpSettings)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"readSettings"}),"(",(0,s.jsx)(n.code,{children:"filename"}),", ",(0,s.jsx)(n.code,{children:"pnpSettings"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"filename"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"URL"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"pnpSettings"}),": ",(0,s.jsx)(n.code,{children:"OptionalOrUndefined"}),"<",(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/PnPSettings",children:(0,s.jsx)(n.code,{children:"PnPSettings"})}),">"]}),"\n",(0,s.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/95c95f27324672d2082a4b3e2ddfcdb5710d4598/packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts#L14",children:"packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts:14"})}),"\n",(0,s.jsx)(n.h2,{id:"readsettingsfilename-relativeto",children:"readSettings(filename, relativeTo)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"readSettings"}),"(",(0,s.jsx)(n.code,{children:"filename"}),", ",(0,s.jsx)(n.code,{children:"relativeTo"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Read / import a cspell configuration file."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"filename"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"URL"})]}),"\n",(0,s.jsx)(n.p,{children:"the path to the file.\nSupported types: json, yaml, js, and cjs. ES Modules are not supported."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["absolute path ",(0,s.jsx)(n.code,{children:"/absolute/path/to/file"})]}),"\n",(0,s.jsxs)(n.li,{children:["relative path ",(0,s.jsx)(n.code,{children:"./path/to/file"})," (relative to ",(0,s.jsx)(n.code,{children:"relativeTo"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["package ",(0,s.jsx)(n.code,{children:"@cspell/dict-typescript/cspell-ext.json"})," searches for node_modules relative to ",(0,s.jsx)(n.code,{children:"relativeTo"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"relativeTo"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"URL"})]}),"\n",(0,s.jsx)(n.p,{children:"absolute path to start searching for relative files or node_modules."}),"\n",(0,s.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/95c95f27324672d2082a4b3e2ddfcdb5710d4598/packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts#L24",children:"packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts:24"})}),"\n",(0,s.jsx)(n.h2,{id:"readsettingsfilename-relativeto-pnpsettings",children:"readSettings(filename, relativeTo, pnpSettings)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"readSettings"}),"(",(0,s.jsx)(n.code,{children:"filename"}),", ",(0,s.jsx)(n.code,{children:"relativeTo"}),", ",(0,s.jsx)(n.code,{children:"pnpSettings"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"filename"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"URL"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"relativeTo"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"URL"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"pnpSettings"}),": ",(0,s.jsx)(n.code,{children:"OptionalOrUndefined"}),"<",(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/PnPSettings",children:(0,s.jsx)(n.code,{children:"PnPSettings"})}),">"]}),"\n",(0,s.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"CSpellSettingsI"}),">"]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/95c95f27324672d2082a4b3e2ddfcdb5710d4598/packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts#L25",children:"packages/cspell-lib/src/lib/Settings/Controller/configLoader/readSettings.ts:25"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},79252:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(7378);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);