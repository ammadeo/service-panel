(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d85b0d6","chunk-2d228c76"],{6653:function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),a={class:"space-y-2 sm:space-y-4 md:space-y-5"},o={class:"first-letter:uppercase"};function c(e,t,n,c,i,s){var l=Object(r["A"])("focus-target");return Object(r["s"])(),Object(r["e"])("nav",a,[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(e.render,(function(t,n){return Object(r["s"])(),Object(r["e"])("div",{key:n},[Object(r["I"])(Object(r["g"])("a",{id:n+1===e.render.length?e.focusTargetsId.lastLink:"",class:"link text-2xl sm:text-3xl md:text-4xl block text-primary-700 dark:text-primary-200 font-semibold transform transition-transform duration-75 ease-in hover:translate-x-1",href:"#".concat(t.name)},[Object(r["g"])("p",o,Object(r["C"])(t.name),1)],8,["id","href"]),[[l,{query:"#"+e.focusTargetsId.toggleButton,enable:e.focusTargetsId.toggleButton&&n+1===e.render.length}]])])})),128))])}var i=Object(r["i"])({props:{render:{required:!0,type:Array},focusTargetsId:{default:function(){return{lastLink:"",toggleButton:""}},type:Object}},setup:function(){return{}}});i.render=c;t["a"]=i},"8f6f":function(e,t,n){"use strict";n.r(t);n("9911");var r=n("7a23"),a={class:"flex-1 order-1 flex justify-between z-10 items-center"},o={class:"sr-only"},c={class:"transform transition-all duration-200 ease-in flex flex-col p-2 sm:p-4 fixed inset-x-0 bottom-0 shadow-center-lg bg-gray-200 dark:bg-gray-800 rounded-t-xl"};function i(e,t,n,i,s,l){var u=Object(r["z"])("button-new-version"),b=Object(r["z"])("transition-fade"),d=Object(r["z"])("button-toggle-color-scheme"),f=Object(r["z"])("base-icon"),g=Object(r["z"])("MenuContainerContent"),j=Object(r["A"])("focus-target");return Object(r["s"])(),Object(r["e"])(r["a"],null,[Object(r["g"])("div",a,[Object(r["g"])("header",null,[Object(r["g"])("h1",o,Object(r["C"])(e.header.title),1),Object(r["g"])("a",{class:"link text-2xl sm:text-3xl text-primary-700 dark:text-primary-200 underline font-small-caps",href:e.header.link.href,target:"_blank",rel:"noreferrer"},Object(r["C"])(e.header.link.title),9,["href"])]),Object(r["g"])("section",{class:"flex justify-end space-x-2","aria-labelledby":e.controlsHeadingId},[Object(r["g"])("h2",{id:e.controlsHeadingId,class:"sr-only"},Object(r["C"])(e.controls.title),9,["id"]),Object(r["g"])(b,{duration:"duration-600"},{default:Object(r["H"])((function(){return[e.serviceWorkerWaiting?(Object(r["s"])(),Object(r["e"])(u,{key:0,"tooltip-right":"",render:e.render},null,8,["render"])):Object(r["f"])("",!0)]})),_:1}),Object(r["g"])(d,{render:e.render},null,8,["render"]),Object(r["g"])("div",{role:e.mobileShowContent?"":"navigation"},[Object(r["I"])(Object(r["g"])("button",{id:e.navigationIds.toggleButton,"aria-expanded":e.mobileShowContent,"aria-label":e.controls.navigation.buttonLabel,class:"button button-primary p-3 sm:p-4 mr-1 sm:ml-3","data-testid":"toggle",onClick:t[1]||(t[1]=function(t){return e.mobileShowContent=!e.mobileShowContent})},[Object(r["g"])(f,{class:"h-5 w-5 text-white",icon:e.mobileShowContent?"close":"menu"},null,8,["icon"])],8,["id","aria-expanded","aria-label"]),[[j,{query:"#"+e.navigationIds.lastLink,enable:e.mobileShowContent},"back"]])],8,["role"])],8,["aria-labelledby"])]),Object(r["g"])(r["b"],{appear:"","appear-active-class":"transform transition-transform duration-200 ease-in","appear-from-class":"translate-y-full","appear-to-class":"translate-y-0","enter-active-class":"transform transition-all duration-200 ease-in","enter-from-class":"translate-y-full opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transform transition-all duration-200 ease-in","leave-from-class":"translate-y-0","leave-to-class":"translate-y-full"},{default:Object(r["H"])((function(){return[Object(r["I"])(Object(r["g"])("div",c,[Object(r["g"])(g,{class:"mb-14 sm:mb-20 mt-4 mr-5 sm:mr-7 text-right",render:e.render.categories,"focus-targets-id":e.navigationIds},null,8,["render","focus-targets-id"])],512),[[r["E"],e.mobileShowContent]])]})),_:1})],64)}n("d3b7");var s=n("6653"),l=n("c9db"),u=n("6c02"),b=n("db46"),d=n("b75c"),f=Object(r["h"])((function(){return n.e("chunk-2d229bc9").then(n.bind(null,"df5f"))})),g=Object(r["i"])({components:{MenuContainerContent:s["a"],ButtonToggleColorScheme:l["a"],ButtonNewVersion:f},props:{render:{required:!0,type:Object}},setup:function(e){var t=Object(r["w"])(!0);Object(u["c"])((function(){t.value=!1}));var n=Object(r["c"])((function(){return e.render.interface.header})),a=Object(r["c"])((function(){return e.render.interface.controls})),o=Object(b["useVersionControl"])(),c=o.serviceWorkerWaiting,i=Object(r["u"])({lastLink:Object(d["a"])().id,toggleButton:Object(d["a"])().id}),s=Object(d["a"])().id;return{mobileShowContent:t,header:n,navigationIds:i,controls:a,serviceWorkerWaiting:c,controlsHeadingId:s}}});g.render=i;t["default"]=g},c9db:function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["z"])("base-icon");return Object(r["s"])(),Object(r["e"])("button",{class:"button button-primary p-3 sm:p-4 mr-1 sm:mr-3","data-testid":"toggle-color-scheme","aria-label":e.label,onClick:t[1]||(t[1]=function(t){return e.setColorScheme(!e.isLight)})},[Object(r["g"])(i,{class:"h-5 text-white",icon:e.isLight?"sun":"moon"},null,8,["icon"])],8,["aria-label"])}var o=n("07df"),c=Object(r["i"])({props:{render:{required:!0,type:Object}},setup:function(e){var t=Object(o["a"])(),n=t.isLight,a=t.setColorScheme,c=Object(r["c"])((function(){return e.render.interface.controls.colorScheme.buttonLabel})),i=Object(r["c"])((function(){return n.value?c.value.changeToDarkMode:c.value.changeToLightMode}));return{isLight:n,setColorScheme:a,label:i}}});c.render=a;t["a"]=c},db46:function(e,t,n){"use strict";n.r(t),n.d(t,"useVersionControl",(function(){return c}));var r=n("7a23"),a=Object(r["w"])(),o=Object(r["w"])(!1),c=function(){var e=function(e){a.value=e},t=Object(r["c"])((function(){return!!a.value})),n=function(){var e;return o.value=!0,null===(e=a.value)||void 0===e?void 0:e.call(a)};return{setSkipWaiting:e,skipWaiting:n,serviceWorkerWaiting:t,skipping:Object(r["v"])(o)}}}}]);
//# sourceMappingURL=chunk-2d85b0d6-legacy.b6461b41.js.map