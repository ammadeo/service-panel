(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7215a3a0","chunk-2d228c76"],{6653:function(e,t,r){"use strict";var n=r("7a23");const c={class:"space-y-2 sm:space-y-4 md:space-y-5"},a={class:"first-letter:uppercase"};function o(e,t,r,o,s,i){const l=Object(n["A"])("focus-target");return Object(n["s"])(),Object(n["e"])("nav",c,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(e.render,(t,r)=>(Object(n["s"])(),Object(n["e"])("div",{key:r},[Object(n["I"])(Object(n["g"])("a",{id:r+1===e.render.length?e.focusTargetsId.lastLink:"",class:"link text-2xl sm:text-3xl md:text-4xl block text-primary-700 dark:text-primary-200 font-semibold transform transition-transform duration-75 ease-in hover:translate-x-1",href:"#"+t.name},[Object(n["g"])("p",a,Object(n["C"])(t.name),1)],8,["id","href"]),[[l,{query:"#"+e.focusTargetsId.toggleButton,enable:e.focusTargetsId.toggleButton&&r+1===e.render.length}]])]))),128))])}var s=Object(n["i"])({props:{render:{required:!0,type:Array},focusTargetsId:{default:()=>({lastLink:"",toggleButton:""}),type:Object}},setup(){return{}}});s.render=o;t["a"]=s},"6a80":function(e,t,r){"use strict";r.r(t);var n=r("7a23");const c={class:"mb-8"},a={class:"font-semibold text-5xl text-black dark:text-gray-200 first-letter:uppercase"};function o(e,t,r,o,s,i){const l=Object(n["z"])("MenuContainerContent"),b=Object(n["z"])("button-toggle-color-scheme"),d=Object(n["z"])("button-new-version"),u=Object(n["z"])("transition-fade");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["g"])("div",null,[Object(n["g"])("header",c,[Object(n["g"])("h1",a,Object(n["C"])(e.header.title),1),Object(n["g"])("a",{class:"link text-2xl text-primary-700 dark:text-primary-200 underline font-small-caps",href:e.header.link.href,target:"_blank",rel:"noreferrer"},Object(n["C"])(e.header.link.title),9,["href"])]),Object(n["g"])(l,{render:e.render.categories},null,8,["render"])]),Object(n["g"])("section",{class:"flex space-x-2","aria-labelledby":e.controlsHeadingId},[Object(n["g"])("h2",{id:e.controlsHeadingId,class:"sr-only"},Object(n["C"])(e.controls.title),9,["id"]),Object(n["g"])(b,{render:e.render},null,8,["render"]),Object(n["g"])(u,{duration:"duration-600"},{default:Object(n["H"])(()=>[e.serviceWorkerWaiting?(Object(n["s"])(),Object(n["e"])(d,{key:0,render:e.render},null,8,["render"])):Object(n["f"])("",!0)]),_:1})],8,["aria-labelledby"])],64)}var s=r("6653"),i=r("c9db"),l=r("db46"),b=r("c8ca"),d=r("b75c");const u=Object(n["h"])(()=>r.e("chunk-2d229bc9").then(r.bind(null,"df5f")));var j=Object(n["i"])({components:{MenuContainerContent:s["a"],ButtonToggleColorScheme:i["a"],ButtonNewVersion:u,TransitionFade:b["a"]},props:{render:{required:!0,type:Object}},setup(e){const t=Object(n["c"])(()=>e.render.interface.header),r=Object(n["c"])(()=>e.render.interface.controls),{serviceWorkerWaiting:c}=Object(l["useVersionControl"])(),a=Object(d["a"])().id;return{header:t,controls:r,serviceWorkerWaiting:c,controlsHeadingId:a}}});j.render=o;t["default"]=j},c9db:function(e,t,r){"use strict";var n=r("7a23");function c(e,t,r,c,a,o){const s=Object(n["z"])("base-icon");return Object(n["s"])(),Object(n["e"])("button",{class:"button button-primary p-3 sm:p-4 mr-1 sm:mr-3","data-testid":"toggle-color-scheme","aria-label":e.label,onClick:t[1]||(t[1]=t=>e.setColorScheme(!e.isLight))},[Object(n["g"])(s,{class:"h-5 text-white",icon:e.isLight?"sun":"moon"},null,8,["icon"])],8,["aria-label"])}var a=r("07df"),o=Object(n["i"])({props:{render:{required:!0,type:Object}},setup(e){const{isLight:t,setColorScheme:r}=Object(a["a"])(),c=Object(n["c"])(()=>e.render.interface.header.colorScheme.buttonLabel),o=Object(n["c"])(()=>t.value?c.value.changeToDarkMode:c.value.changeToLightMode);return{isLight:t,setColorScheme:r,label:o}}});o.render=c;t["a"]=o},db46:function(e,t,r){"use strict";r.r(t),r.d(t,"useVersionControl",(function(){return o}));var n=r("7a23");const c=Object(n["w"])(),a=Object(n["w"])(!1),o=()=>{const e=e=>{c.value=e},t=Object(n["c"])(()=>!!c.value),r=()=>{var e;return a.value=!0,null===(e=c.value)||void 0===e?void 0:e.call(c)};return{setSkipWaiting:e,skipWaiting:r,serviceWorkerWaiting:t,skipping:Object(n["v"])(a)}}}}]);
//# sourceMappingURL=chunk-7215a3a0.d9e02447.js.map