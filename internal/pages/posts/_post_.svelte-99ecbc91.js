import{_ as a}from"../../chunks/preload-helper-4b04d29c.js";import{S as $,i as w,s as h,x as m,l as _,y as v,z as f,g as y,p,q as g,r as l,d as E,C as d,o as k}from"../../chunks/index-c39fd906.js";function x(o){switch(o){case"../../posts/emojik-es-a-windows.md":return a(()=>import("../../chunks/emojik-es-a-windows-37119453.js"),["chunks/emojik-es-a-windows-37119453.js","chunks/index-c39fd906.js","chunks/_post-427ed7c8.js","assets/_post-b312ce0f.css","chunks/stores-3ebc5a7f.js"]);case"../../posts/hidden-post.md":return a(()=>import("../../chunks/hidden-post-255d4816.js"),["chunks/hidden-post-255d4816.js","chunks/index-c39fd906.js","chunks/_post-427ed7c8.js","assets/_post-b312ce0f.css","chunks/stores-3ebc5a7f.js"]);case"../../posts/welcome.md":return a(()=>import("../../chunks/welcome-4b8131af.js"),["chunks/welcome-4b8131af.js","chunks/index-c39fd906.js","chunks/_post-427ed7c8.js","assets/_post-b312ce0f.css","chunks/stores-3ebc5a7f.js"]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function D(o){let t,n,s;var r=o[0];function c(e){return{}}return r&&(t=new r(c())),{c(){t&&m(t.$$.fragment),n=_()},l(e){t&&v(t.$$.fragment,e),n=_()},m(e,i){t&&f(t,e,i),y(e,n,i),s=!0},p(e,[i]){if(r!==(r=e[0])){if(t){k();const u=t;p(u.$$.fragment,1,0,()=>{d(u,1)}),g()}r?(t=new r(c()),m(t.$$.fragment),l(t.$$.fragment,1),f(t,n.parentNode,n)):t=null}},i(e){s||(t&&l(t.$$.fragment,e),s=!0)},o(e){t&&p(t.$$.fragment,e),s=!1},d(e){e&&E(n),t&&d(t,e)}}}const I=async o=>{try{let t=(await x(`../../posts/${o.params.post}.md`)).default;return{status:200,props:{comp:t}}}catch{return{status:404}}};function P(o,t,n){let{comp:s}=t;return o.$$set=r=>{"comp"in r&&n(0,s=r.comp)},[s]}class R extends ${constructor(t){super(),w(this,t,P,D,h,{comp:0})}}export{R as default,I as load};
