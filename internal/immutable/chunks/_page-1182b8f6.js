import{_ as a}from"./preload-helper-41c905a7.js";const i=async()=>{const t=Object.entries(Object.assign({"../posts/emojik-es-a-windows.md":()=>a(()=>import("./emojik-es-a-windows-80f7a992.js"),["./emojik-es-a-windows-80f7a992.js","./index-f343c706.js","./_post-79e7d324.js","./preload-helper-41c905a7.js","../assets/_post-2c05d00e.css"],import.meta.url),"../posts/hidden-post.md":()=>a(()=>import("./hidden-post-f0a1736f.js"),["./hidden-post-f0a1736f.js","./index-f343c706.js","./_post-79e7d324.js","./preload-helper-41c905a7.js","../assets/_post-2c05d00e.css"],import.meta.url),"../posts/welcome.md":()=>a(()=>import("./welcome-d5f258a0.js"),["./welcome-d5f258a0.js","./index-f343c706.js","./_post-79e7d324.js","./preload-helper-41c905a7.js","../assets/_post-2c05d00e.css"],import.meta.url)}));return await Promise.all(t.map(async([o,r])=>{const{metadata:l}=await r(),n=o.slice(2,-3);return{metadata:l,path:n}}))},d=async(s=!0)=>{let t=await i();return s||(t=t.filter(e=>e.metadata.hidden!==!0)),t=t.sort((e,o)=>+new Date(o.metadata.date)-+new Date(e.metadata.date)),t},p=!0,_=async()=>({posts:await d(!1)}),u=Object.freeze(Object.defineProperty({__proto__:null,prerender:p,load:_},Symbol.toStringTag,{value:"Module"}));export{u as _,_ as l,p};
