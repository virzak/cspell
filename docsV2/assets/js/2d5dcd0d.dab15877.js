"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99091],{37800:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(86106),c=s(79252);const i={},l="Interface: CacheSettings",a={id:"api/cspell-types/interfaces/CacheSettings",title:"Interface: CacheSettings",description:"Properties",source:"@site/docs/api/cspell-types/interfaces/CacheSettings.md",sourceDirName:"api/cspell-types/interfaces",slug:"/api/cspell-types/interfaces/CacheSettings",permalink:"/docsV2/docs/api/cspell-types/interfaces/CacheSettings",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-types/interfaces/CacheSettings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: CSpellSettingsWithSourceTrace",permalink:"/docsV2/docs/api/cspell-types/interfaces/CSpellSettingsWithSourceTrace"},next:{title:"Interface: CharacterSetCosts",permalink:"/docsV2/docs/api/cspell-types/interfaces/CharacterSetCosts"}},r={},d=[{value:"Properties",id:"properties",level:2},{value:"cacheFormat?",id:"cacheformat",level:3},{value:"Default",id:"default",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"cacheLocation?",id:"cachelocation",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"cacheStrategy?",id:"cachestrategy",level:3},{value:"Default",id:"default-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useCache?",id:"usecache",level:3},{value:"Default",id:"default-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"interface-cachesettings",children:"Interface: CacheSettings"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"cacheformat",children:"cacheFormat?"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"optional"})," ",(0,n.jsx)(t.strong,{children:"cacheFormat"}),": ",(0,n.jsx)(t.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/CacheFormat",children:(0,n.jsx)(t.code,{children:"CacheFormat"})})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Format of the cache file."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"legacy"})," - use absolute paths in the cache file"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"universal"})," - use a sharable format."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"default",children:"Default"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"'legacy'\n"})}),"\n",(0,n.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/streetsidesoftware/cspell/blob/cd0124ac6bbee8ddbde4f3b6e943bd8447417bab/packages/cspell-types/src/CSpellSettingsDef.ts#L375",children:"CSpellSettingsDef.ts:375"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"cachelocation",children:"cacheLocation?"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"optional"})," ",(0,n.jsx)(t.strong,{children:"cacheLocation"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Path to the cache location. Can be a file or a directory.\nIf none specified ",(0,n.jsx)(t.code,{children:".cspellcache"})," will be used.\nRelative paths are relative to the config file in which it\nis defined."]}),"\n",(0,n.jsxs)(t.p,{children:["A prefix of ",(0,n.jsx)(t.code,{children:"${cwd}"})," is replaced with the current working directory."]}),"\n",(0,n.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/streetsidesoftware/cspell/blob/cd0124ac6bbee8ddbde4f3b6e943bd8447417bab/packages/cspell-types/src/CSpellSettingsDef.ts#L361",children:"CSpellSettingsDef.ts:361"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"cachestrategy",children:"cacheStrategy?"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"optional"})," ",(0,n.jsx)(t.strong,{children:"cacheStrategy"}),": ",(0,n.jsx)(t.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/CacheStrategy",children:(0,n.jsx)(t.code,{children:"CacheStrategy"})})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Strategy to use for detecting changed files, default: metadata"}),"\n",(0,n.jsx)(t.h4,{id:"default-1",children:"Default"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"'metadata'\n"})}),"\n",(0,n.jsx)(t.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/streetsidesoftware/cspell/blob/cd0124ac6bbee8ddbde4f3b6e943bd8447417bab/packages/cspell-types/src/CSpellSettingsDef.ts#L367",children:"CSpellSettingsDef.ts:367"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"usecache",children:"useCache?"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"optional"})," ",(0,n.jsx)(t.strong,{children:"useCache"}),": ",(0,n.jsx)(t.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Store the results of processed files in order to only operate on the changed ones."}),"\n",(0,n.jsx)(t.h4,{id:"default-2",children:"Default"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"false\n"})}),"\n",(0,n.jsx)(t.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/streetsidesoftware/cspell/blob/cd0124ac6bbee8ddbde4f3b6e943bd8447417bab/packages/cspell-types/src/CSpellSettingsDef.ts#L350",children:"CSpellSettingsDef.ts:350"})})]})}function o(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},79252:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(7378);const c={},i=n.createContext(c);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);