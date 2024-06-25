"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[857],{3568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=t(6106),r=t(9252),i=t(8550),l=t(2227);const o={title:"Getting Started with CSpell",categories:"docs",sidebar_position:1,sidebar_label:"Getting Started"},a="Spell Checking",c={id:"getting-started",title:"Getting Started with CSpell",description:"Installation",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docsV2/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started with CSpell",categories:"docs",sidebar_position:1,sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docsV2/docs/installation"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"1. Create a configuration file.",id:"1-create-a-configuration-file",level:2},{value:"2. Add words to the project dictionary",id:"2-add-words-to-the-project-dictionary",level:2},{value:"3. Fine-tuning",id:"3-fine-tuning",level:2},{value:"Command: <code>lint</code> -- Spell Checking",id:"command-lint----spell-checking",level:2},{value:"Help",id:"help-1",level:3},{value:"Options",id:"options",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"spell-checking",children:"Spell Checking"}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["See: ",(0,s.jsx)(n.a,{href:"/docsV2/docs/installation",children:"Installation"})]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Example: recursively spell check all JavaScript files in ",(0,s.jsx)(n.code,{children:"src"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"JavaScript files"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'cspell "src/**/*.js"\n# or\ncspell lint "src/**/*.js"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Check everything"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'cspell .\n# or\ncspell "**"\n'})}),"\n",(0,s.jsx)(n.h1,{id:"adding-cspell-to-an-existing-project",children:"Adding CSpell to an existing project"}),"\n",(0,s.jsx)(n.p,{children:"In the steps below we will create a cspell configuration file and setup a single custom dictionary for the project."}),"\n",(0,s.jsx)(n.p,{children:"Steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#1-create-a-configuration-file",children:"Create a configuration file"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#2-add-words-to-the-project-dictionary",children:"Add words to the project dictionary"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-create-a-configuration-file",children:"1. Create a configuration file."}),"\n",(0,s.jsxs)(n.p,{children:["CSpell can use JSON, Yaml, and JavaScript files for configuration. It automatically searches for one of the following: ",(0,s.jsx)(n.code,{children:"cspell.json"}),", ",(0,s.jsx)(n.code,{children:"cspell.config.yaml"}),", ",(0,s.jsx)(n.code,{children:"cspell.config.cjs"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For now choose to use either JSON or Yaml. Below are examples of each that include a custom dictionary definition. Both of them are equivalent. If you have both, CSpell will look for the ",(0,s.jsx)(n.code,{children:".json"})," file first."]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"json",label:"cspell.json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "$schema": "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",\n    "version": "0.2",\n    "dictionaryDefinitions": [\n        {\n            "name": "project-words",\n            "path": "./project-words.txt",\n            "addWords": true\n        }\n    ],\n    "dictionaries": ["project-words"],\n    "ignorePaths": ["node_modules", "/project-words.txt"]\n}\n'})})}),(0,s.jsx)(l.A,{value:"yaml",label:"cspell.config.yaml",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"---\n$schema: https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json\nversion: '0.2'\ndictionaryDefinitions:\n    - name: project-words\n    path: './project-words.txt'\n    addWords: true\ndictionaries:\n    - project-words\nignorePaths:\n    - 'node_modules'\n    - '/project-words.txt'\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"These configuration files do three things:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Define the custom dictionary ",(0,s.jsx)(n.code,{children:"project-words"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Tell the spell checker to use the custom dictionary."}),"\n",(0,s.jsxs)(n.li,{children:["Tell the spell checker to ignore any files inside of ",(0,s.jsx)(n.code,{children:"node_modules"})," and the file ",(0,s.jsx)(n.code,{children:"project-words.txt"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-add-words-to-the-project-dictionary",children:"2. Add words to the project dictionary"}),"\n",(0,s.jsx)(n.p,{children:"It might take a few iterations to get fully setup, but the process in the same."}),"\n",(0,s.jsx)(n.p,{children:"Steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create the dictionary file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"touch project-words.txt\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose a set of files to start with, like all Markdown files, ",(0,s.jsx)(n.code,{children:"**/*.md"})," and run the spell checker."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'cspell "**/*.md"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Look for any directories that need to be ignored and add them to ",(0,s.jsx)(n.code,{children:"ignorePaths"}),". Example:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"bin"'})," - to ignore any directory / file called ",(0,s.jsx)(n.code,{children:"bin"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"translations/**"'})," - to ignore all files under the ",(0,s.jsx)(n.code,{children:"translations"})," directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"packages/*/dist"'})," - to ignore the ",(0,s.jsx)(n.code,{children:"dist"})," directory in each ",(0,s.jsx)(n.em,{children:"package"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once you have finished identifying directories and files to be ignored, it is now time to add words to the custom dictionary."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Have CSpell populate it with the words from your project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'echo "# New Words" >> project-words.txt\ncspell --words-only --unique "**/*.md" | sort --ignore-case >> project-words.txt\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will append all new issues to the end of ",(0,s.jsx)(n.code,{children:"project-words.txt"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Review the words in ",(0,s.jsx)(n.code,{children:"project-words.txt"})," to check for any actual misspellings and remove them (the spell checker already thinks they are wrong)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fix spelling issues."}),"\n",(0,s.jsx)(n.p,{children:"To show the issues and suggestions, use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'cspell --no-progress --show-suggestions --show-context "**/*.md"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the process with the other file types you want to check."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-fine-tuning",children:"3. Fine-tuning"}),"\n",(0,s.jsx)(n.p,{children:"The following resources can help you with fine-tuning your configurations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docsV2/docs/forbidden-words",children:"Making words forbidden"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./dictionaries/custom-dictionaries",children:"Defining Custom Dictionaries"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./dictionaries",children:"About Dictionaries"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docsV2/docs/globs",children:"Understanding CSpell Globs"})}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"help",children:"Help"}),"\n",(0,s.jsxs)(n.h2,{id:"command-lint----spell-checking",children:["Command: ",(0,s.jsx)(n.code,{children:"lint"})," -- Spell Checking"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"lint"})," command is used for spell checking files."]}),"\n",(0,s.jsx)(n.h3,{id:"help-1",children:"Help"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cspell lint --help\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2227:(e,n,t)=>{t.d(n,{A:()=>l});t(7378);var s=t(3372);const r={tabItem:"tabItem_l72u"};var i=t(6106);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},8550:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(7378),r=t(3372),i=t(4304),l=t(505),o=t(5514),a=t(7645),c=t(8818),d=t(8677);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[l,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,h]=j({queryString:t,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=t(2770);const g={tabList:"tabList_ZhiO",tabItem:"tabItem_ZGSu"};var m=t(6106);function b(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),r=o[t].value;r!==s&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(w,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,m.jsx)(v,{...e,children:h(e.children)},String(n))}},9252:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(7378);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);