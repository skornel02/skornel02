import{_ as o}from"./preload-helper-e51e4937.js";import{w as s}from"./writeEffect-21e9f3ea.js";import"./sleep-648bee9f.js";import"./me@min-e53bebdf.js";import"./index-df60f785.js";import"./Face-a0bd5c4e.js";import"./IconBase-379d5b9d.js";import"./FaEnvelope-e7d31840.js";const d=(t,e)=>{new MutationObserver(i=>{i.forEach(n=>{const c=n.type==="attributes",a=n.target.classList.contains("typing");c&&a&&e()})}).observe(t,{attributes:!0,childList:!0,subtree:!0})},l=t=>t.forEach(e=>e.currentNode.textContent=""),E=async(t,e)=>{if(e.cascade)l(t);else{const{getLongestTextElement:r}=await o(()=>import("./getLongestTextElement-873fd343.js"),[]),i=r(t);d(i,()=>e.dispatch("done"))}for(const r of t)e.cascade?(await s(r,e),r.currentNode.classList.replace("typing","finished-typing")):s(r,e).then(()=>{r.currentNode.classList.replace("typing","finished-typing")});e.cascade&&e.dispatch("done")};export{E as mode};
