import{sleep as b}from"./sleep-648bee9f.js";import{r as f}from"./me@min-e53bebdf.js";import"./index-df60f785.js";import"./Face-a0bd5c4e.js";import"./IconBase-379d5b9d.js";import"./FaEnvelope-e7d31840.js";import"./preload-helper-e51e4937.js";const a=(e,t)=>Math.floor(Math.random()*(t-e))+e,w=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=e.length,r=a(0,t);return e[r]},g=(e,t)=>{const r=t/3;return e.map(()=>a(r,t-100))},F=async(e,t)=>{const r=typeof t.scramble=="number"?t.scramble:3e3;await new Promise(s=>{e.forEach(async({currentNode:m,text:i})=>{let o=i.split("");const L=g(o,r),c=Date.now();for(f(m,t.parentElement,n=>{n.classList.add("finished-typing")});Date.now()-c<r;){const n=a(0,o.length),h=L[n],p=o[n]===" ",l=()=>Date.now()-c;if((()=>l()>=h)()||p)if(!(o[n]===i[n]))o[n]=i[n];else continue;else o[n]=w();const d=o.join("");m.innerHTML=d;const u=d===i,T=t.scrambleSlowdown?Math.round(l()/100):1;if(await b(T),u){s();break}}m.innerHTML=i})}),t.dispatch("done")};export{F as mode};
