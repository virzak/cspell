"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46863],{69278:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(86106),l=s(79252);const o={title:"Configuration",description:"Customizing CSpell",has_children:!0},c="Configuration",r={id:"Configuration/index",title:"Configuration",description:"Customizing CSpell",source:"@site/docs/Configuration/index.md",sourceDirName:"Configuration",slug:"/Configuration/",permalink:"/docsV2/docs/Configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/Configuration/index.md",tags:[],version:"current",frontMatter:{title:"Configuration",description:"Customizing CSpell",has_children:!0},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docsV2/docs/installation"},next:{title:"Properties",permalink:"/docsV2/docs/Configuration/properties"}},t={},d=[{value:"<code>cspell.json</code>",id:"cspelljson",level:2},{value:"Example <code>cspell.json</code> file",id:"example-cspelljson-file",level:4},{value:"cspell.json sections",id:"cspelljson-sections",level:3},{value:"<code>package.json</code>",id:"packagejson",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"CSpell"}),"'s behavior can be controlled through a config file."]}),"\n",(0,i.jsx)(n.p,{children:"By default it looks for any of the following files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".cspell.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".cSpell.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cSpell.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.config.js"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.config.cjs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.config.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.config.yaml"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.config.yml"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.yaml"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cspell.yml"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#packagejson",children:(0,i.jsx)(n.code,{children:"package.json"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Or you can specify a path to a config file with the ",(0,i.jsx)(n.code,{children:"--config <path>"})," argument on the command line."]}),"\n",(0,i.jsx)(n.h2,{id:"cspelljson",children:(0,i.jsx)(n.code,{children:"cspell.json"})}),"\n",(0,i.jsxs)(n.h4,{id:"example-cspelljson-file",children:["Example ",(0,i.jsx)(n.code,{children:"cspell.json"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// cSpell Settings\n{\n    // Version of the setting file.  Always 0.2\n    "version": "0.2",\n    // language - current active spelling language\n    "language": "en",\n    // words - list of words to be always considered correct\n    "words": [\n        "mkdirp",\n        "tsmerge",\n        "githubusercontent",\n        "streetsidesoftware",\n        "vsmarketplacebadge",\n        "visualstudio"\n    ],\n    // flagWords - list of words to be always considered incorrect\n    // This is useful for offensive words and common spelling errors.\n    // For example "hte" should be "the"\n    "flagWords": [\n        "hte"\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"cspelljson-sections",children:"cspell.json sections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"version"})," - currently always 0.2 - controls how the settings in the configuration file behave."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"language"})," - this specifies the language locale to use in choosing the general dictionary.\nFor example: ",(0,i.jsx)(n.code,{children:'"language": "en-GB"'})," tells cspell to use British English instead of US English."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"words"})," - a list of words to be considered correct."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"flagWords"})," - a list of words to be always considered incorrect"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ignoreWords"})," - a list of words to be ignored (even if they are in the flagWords)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ignorePaths"})," - a list of globs to specify which files are to be ignored."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"ignorePaths": ["node_modules/**"]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["will cause cspell to ignore anything in the ",(0,i.jsx)(n.code,{children:"node_modules"})," directory."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"maxNumberOfProblems"})," - defaults to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"100"})})," per file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"minWordLength"})," - defaults to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"4"})})," - the minimum length of a word before it is checked."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allowCompoundWords"})," - defaults to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"false"})}),"; set to ",(0,i.jsx)(n.strong,{children:"true"})," to allow compound words by default."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dictionaries"})," - list of the names of the dictionaries to use. See ",(0,i.jsx)(n.a,{href:"../docs/dictionaries",children:"Dictionaries"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dictionaryDefinitions"})," - this list defines any custom dictionaries to use. This is how you can include other languages like Spanish."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'"language": "en",\n// Dictionaries "spanish", "ruby", and "corp-terms" will always be checked.\n// Including "spanish" in the list of dictionaries means both Spanish and English\n// words will be considered correct.\n"dictionaries": ["spanish", "ruby", "corp-terms", "fonts"],\n// Define each dictionary:\n//  - Relative paths are relative to the config file.\n//  - URLs will be retrieved via HTTP GET\n"dictionaryDefinitions": [\n    { "name": "spanish", "path": "./spanish-words.txt"},\n    { "name": "ruby", "path": "./ruby.txt"},\n    {\n      "name": "corp-terms",\n      "path": "https://shared-company-repository/cspell-terms.txt"\n    },\n],\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ignoreRegExpList"})," - list of patterns to be ignored"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"includeRegExpList"})," - ",(0,i.jsx)(n.em,{children:"(Advanced)"})," limits the text checked to be only that matching the expressions in the list."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"patterns"})," - this allows you to define named patterns to be used with\n",(0,i.jsx)(n.code,{children:"ignoreRegExpList"})," and ",(0,i.jsx)(n.code,{children:"includeRegExpList"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'"patterns": [\n    {\n        "name": "comment-single-line",\n        "pattern": "/#.*/g"\n    },\n    {\n        "name": "comment-multi-line",\n        "pattern": "/(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)/g"\n    },\n    // You can also combine multiple named patterns into one single named pattern\n    {\n        "name": "comments",\n        "pattern": ["comment-single-line", "comment-multi-line"]\n    }\n],\n\n"ignoreRegExpList": ["comments"]\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"languageSettings"})," - this allow for per programming language configuration settings. See ",(0,i.jsx)(n.a,{href:"/docsV2/docs/Configuration/language-settings#languagesettings",children:"LanguageSettings"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"packagejson",children:(0,i.jsx)(n.code,{children:"package.json"})}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to store CSpell configuration in the ",(0,i.jsx)(n.code,{children:"package.json"})," file of a project. CSpell looks\nfor the configuration in the ",(0,i.jsx)(n.code,{children:"cspell"})," field of the ",(0,i.jsx)(n.code,{children:".json"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "name": "cspell-docs",\n  "description": "Documentation for CSpell",\n  // ...\n  "cspell": {\n    "version": "0.2",\n    "useGitignore": true\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},79252:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var i=s(7378);const l={},o=i.createContext(l);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);