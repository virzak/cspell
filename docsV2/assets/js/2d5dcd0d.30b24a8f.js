"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99091],{15730:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=c(86106),l=c(79252);const n={},r="Interface: CacheSettings",a={id:"api/cspell-types/interfaces/CacheSettings",title:"Interface: CacheSettings",description:"Properties",source:"@site/docs/api/cspell-types/interfaces/CacheSettings.md",sourceDirName:"api/cspell-types/interfaces",slug:"/api/cspell-types/interfaces/CacheSettings",permalink:"/docsV2/docs/api/cspell-types/interfaces/CacheSettings",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-types/interfaces/CacheSettings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: CSpellSettingsWithSourceTrace",permalink:"/docsV2/docs/api/cspell-types/interfaces/CSpellSettingsWithSourceTrace"},next:{title:"Interface: CharacterSetCosts",permalink:"/docsV2/docs/api/cspell-types/interfaces/CharacterSetCosts"}},i={},d=[{value:"Properties",id:"properties",level:2},{value:"cacheFormat?",id:"cacheformat",level:3},{value:"Default",id:"default",level:4},{value:"Source",id:"source",level:4},{value:"cacheLocation?",id:"cachelocation",level:3},{value:"Source",id:"source-1",level:4},{value:"cacheStrategy?",id:"cachestrategy",level:3},{value:"Default",id:"default-1",level:4},{value:"Source",id:"source-2",level:4},{value:"useCache?",id:"usecache",level:3},{value:"Default",id:"default-2",level:4},{value:"Source",id:"source-3",level:4}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"interface-cachesettings",children:"Interface: CacheSettings"}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"cacheformat",children:"cacheFormat?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"cacheFormat"}),": ",(0,t.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/CacheFormat",children:(0,t.jsx)(s.code,{children:"CacheFormat"})})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Format of the cache file."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"legacy"})," - use absolute paths in the cache file"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"universal"})," - use a sharable format."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"default",children:"Default"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"'legacy'\n"})}),"\n",(0,t.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/4bce4044056d10a9c65daaea1fd67441289d1d16/packages/cspell-types/src/CSpellSettingsDef.ts#L375",children:"CSpellSettingsDef.ts:375"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"cachelocation",children:"cacheLocation?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"cacheLocation"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Path to the cache location. Can be a file or a directory.\nIf none specified ",(0,t.jsx)(s.code,{children:".cspellcache"})," will be used.\nRelative paths are relative to the config file in which it\nis defined."]}),"\n",(0,t.jsxs)(s.p,{children:["A prefix of ",(0,t.jsx)(s.code,{children:"${cwd}"})," is replaced with the current working directory."]}),"\n",(0,t.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/4bce4044056d10a9c65daaea1fd67441289d1d16/packages/cspell-types/src/CSpellSettingsDef.ts#L361",children:"CSpellSettingsDef.ts:361"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"cachestrategy",children:"cacheStrategy?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"cacheStrategy"}),": ",(0,t.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/CacheStrategy",children:(0,t.jsx)(s.code,{children:"CacheStrategy"})})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Strategy to use for detecting changed files, default: metadata"}),"\n",(0,t.jsx)(s.h4,{id:"default-1",children:"Default"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"'metadata'\n"})}),"\n",(0,t.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/4bce4044056d10a9c65daaea1fd67441289d1d16/packages/cspell-types/src/CSpellSettingsDef.ts#L367",children:"CSpellSettingsDef.ts:367"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"usecache",children:"useCache?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"useCache"}),": ",(0,t.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Store the results of processed files in order to only operate on the changed ones."}),"\n",(0,t.jsx)(s.h4,{id:"default-2",children:"Default"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"false\n"})}),"\n",(0,t.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/4bce4044056d10a9c65daaea1fd67441289d1d16/packages/cspell-types/src/CSpellSettingsDef.ts#L350",children:"CSpellSettingsDef.ts:350"})})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},79252:(e,s,c)=>{c.d(s,{R:()=>r,x:()=>a});var t=c(7378);const l={},n=t.createContext(l);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);