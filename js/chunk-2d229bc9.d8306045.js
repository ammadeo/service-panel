(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229bc9"],{df5f:function(t,e,i){"use strict";i.r(e);i("ddb0");var o=i("7a23");function n(t,e,i,n,a,l){const s=Object(o["z"])("base-icon"),p=Object(o["z"])("base-tooltip");return Object(o["s"])(),Object(o["e"])(p,{show:t.tooltipShow,right:t.tooltipRight,text:t.tooltipText,timeout:5e3,onClose:e[2]||(e[2]=e=>t.tooltipShow=!1)},{default:Object(o["G"])(i=>[Object(o["g"])("button",{"aria-labelledby":i?i.id:"test-id",disabled:t.skipping,class:"button button-primary p-3 sm:p-4 overflow-hidden",onClickOnce:e[1]||(e[1]=(...e)=>t.skipWaiting&&t.skipWaiting(...e))},[Object(o["g"])(s,{class:["h-5 text-white",{"animate-elevator":t.skipping}],icon:t.skipping?"downloading":"download"},null,8,["class","icon"])],40,["aria-labelledby","disabled"])]),_:1},8,["show","right","text"])}var a=i("db46"),l=i("8533"),s=Object(o["i"])({props:{tooltipRight:{type:Boolean,default:!1}},setup(){const{skipWaiting:t,skipping:e}=Object(a["useVersionControl"])(),i=Object(o["w"])(!e.value),n=()=>{i.value=!1,t()},{render:s}=Object(l["a"])(),p=Object(o["c"])(()=>s.value.interface.header.versionControl.tooltip);return{skipWaiting:n,tooltipShow:i,tooltipText:p,skipping:e}}});s.render=n;e["default"]=s}}]);
//# sourceMappingURL=chunk-2d229bc9.d8306045.js.map