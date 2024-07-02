"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6292],{4541:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=s(86106),i=s(79252);const l={},c="Interface: EditCosts",d={id:"api/cspell/interfaces/EditCosts",title:"Interface: EditCosts",description:"Properties",source:"@site/docs/api/cspell/interfaces/EditCosts.md",sourceDirName:"api/cspell/interfaces",slug:"/api/cspell/interfaces/EditCosts",permalink:"/docsV2/docs/api/cspell/interfaces/EditCosts",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell/interfaces/EditCosts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: DictionaryInformation",permalink:"/docsV2/docs/api/cspell/interfaces/DictionaryInformation"},next:{title:"Interface: ExtendableSettings",permalink:"/docsV2/docs/api/cspell/interfaces/ExtendableSettings"}},r={},a=[{value:"Properties",id:"properties",level:2},{value:"accentCosts?",id:"accentcosts",level:3},{value:"Default",id:"default",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"baseCost?",id:"basecost",level:3},{value:"Default",id:"default-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"capsCosts?",id:"capscosts",level:3},{value:"Default",id:"default-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"firstLetterPenalty?",id:"firstletterpenalty",level:3},{value:"Default",id:"default-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"nonAlphabetCosts?",id:"nonalphabetcosts",level:3},{value:"Default",id:"default-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"interface-editcosts",children:"Interface: EditCosts"}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"accentcosts",children:"accentCosts?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"accentCosts"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The cost to add / remove an accent\nThis should be very cheap, it helps with fixing accent issues."}),"\n",(0,t.jsx)(n.h4,{id:"default",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"1\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:"cspell-types/dist/DictionaryInformation.d.ts:176"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"basecost",children:"baseCost?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"baseCost"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is the base cost for making an edit."}),"\n",(0,t.jsx)(n.h4,{id:"default-1",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"100\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:"cspell-types/dist/DictionaryInformation.d.ts:153"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"capscosts",children:"capsCosts?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"capsCosts"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The cost to change capitalization.\nThis should be very cheap, it helps with fixing capitalization issues."}),"\n",(0,t.jsx)(n.h4,{id:"default-2",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"1\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:"cspell-types/dist/DictionaryInformation.d.ts:170"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"firstletterpenalty",children:"firstLetterPenalty?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"firstLetterPenalty"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The extra cost incurred for changing the first letter of a word.\nThis value should be less than ",(0,t.jsx)(n.code,{children:"100 - baseCost"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"default-3",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"4\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:"cspell-types/dist/DictionaryInformation.d.ts:164"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"nonalphabetcosts",children:"nonAlphabetCosts?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"nonAlphabetCosts"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is the cost for characters not in the alphabet."}),"\n",(0,t.jsx)(n.h4,{id:"default-4",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"110\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:"cspell-types/dist/DictionaryInformation.d.ts:158"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},79252:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(7378);const i={},l=t.createContext(i);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);