(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7215a3a0","chunk-2d228c76"],{6653:function(e,t,r){"use strict";var n=r("7a23");const c={class:"space-y-2 sm:space-y-4 md:space-y-5"},a={class:"first-letter:uppercase"};function s(e,t,r,s,i,o){return Object(n["s"])(),Object(n["e"])("nav",c,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(e.render,(e,t)=>(Object(n["s"])(),Object(n["e"])("div",{key:t},[Object(n["g"])("a",{class:"link text-2xl sm:text-3xl md:text-4xl block text-primary-700 dark:text-primary-200 font-semibold transform transition-transform duration-75 ease-in hover:translate-x-1",href:"#"+e.name},[Object(n["g"])("p",a,Object(n["B"])(e.name),1)],8,["href"])]))),128))])}var i=Object(n["i"])({props:{render:{required:!0,type:Array}},setup(){return{}}});i.render=s;t["a"]=i},"6a80":function(e,t,r){"use strict";r.r(t);var n=r("7a23");const c={class:"mb-8"},a={class:"font-semibold text-5xl text-black dark:text-gray-200 first-letter:uppercase"},s={class:"flex space-x-2"};function i(e,t,r,i,o,l){const b=Object(n["z"])("MenuContainerContent"),u=Object(n["z"])("button-toggle-color-scheme"),d=Object(n["z"])("button-new-version"),j=Object(n["z"])("transition-fade");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["g"])("div",null,[Object(n["g"])("div",c,[Object(n["g"])("h1",a,Object(n["B"])(e.header.title),1),Object(n["g"])("a",{class:"link text-2xl text-primary-700 dark:text-primary-200 underline font-small-caps",href:e.header.link.href,target:"_blank",rel:"noreferrer"},Object(n["B"])(e.header.link.title),9,["href"])]),Object(n["g"])(b,{render:e.render.categories},null,8,["render"])]),Object(n["g"])("div",s,[Object(n["g"])(u,{render:e.render},null,8,["render"]),Object(n["g"])(j,{duration:"duration-600"},{default:Object(n["G"])(()=>[e.serviceWorkerWaiting?(Object(n["s"])(),Object(n["e"])(d,{key:0,render:e.render},null,8,["render"])):Object(n["f"])("",!0)]),_:1})])],64)}var o=r("6653"),l=r("c9db"),b=r("db46"),u=r("c8ca");const d=Object(n["h"])(()=>r.e("chunk-2d229bc9").then(r.bind(null,"df5f")));var j=Object(n["i"])({components:{MenuContainerContent:o["a"],ButtonToggleColorScheme:l["a"],ButtonNewVersion:d,TransitionFade:u["a"]},props:{render:{required:!0,type:Object}},setup(e){const t=Object(n["c"])(()=>e.render.interface.header),{serviceWorkerWaiting:r}=Object(b["useVersionControl"])();return{header:t,serviceWorkerWaiting:r}}});j.render=i;t["default"]=j},c9db:function(e,t,r){"use strict";var n=r("7a23");function c(e,t,r,c,a,s){const i=Object(n["z"])("base-icon");return Object(n["s"])(),Object(n["e"])("button",{class:"button button-primary p-3 sm:p-4 mr-1 sm:mr-3","data-testid":"toggle-color-scheme","aria-label":e.label,onClick:t[1]||(t[1]=t=>e.setColorScheme(!e.isLight))},[Object(n["g"])(i,{class:"h-5 text-white",icon:e.isLight?"sun":"moon"},null,8,["icon"])],8,["aria-label"])}var a=r("07df"),s=Object(n["i"])({props:{render:{required:!0,type:Object}},setup(e){const{isLight:t,setColorScheme:r}=Object(a["a"])(),c=Object(n["c"])(()=>e.render.interface.header.colorScheme.buttonLabel),s=Object(n["c"])(()=>t.value?c.value.changeToDarkMode:c.value.changeToLightMode);return{isLight:t,setColorScheme:r,label:s}}});s.render=c;t["a"]=s},db46:function(e,t,r){"use strict";r.r(t),r.d(t,"useVersionControl",(function(){return s}));var n=r("7a23");const c=Object(n["w"])(),a=Object(n["w"])(!1),s=()=>{const e=e=>{c.value=e},t=Object(n["c"])(()=>!!c.value),r=()=>{var e;return a.value=!0,null===(e=c.value)||void 0===e?void 0:e.call(c)};return{setSkipWaiting:e,skipWaiting:r,serviceWorkerWaiting:t,skipping:Object(n["v"])(a)}}}}]);
//# sourceMappingURL=chunk-7215a3a0.80b52915.js.map