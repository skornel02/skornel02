import{S as H,i as K,s as Y,e as v,t as j,k as I,c as P,a as E,h as O,d as h,m as V,b as u,$ as q,g as A,Y as d,j as N,a5 as $,n as x,a8 as z}from"../chunks/index-c39fd906.js";import{_ as R}from"../chunks/preload-helper-4b04d29c.js";const G=async()=>{const a=Object.entries({"../posts/emojik-es-a-windows.md":()=>R(()=>import("../chunks/emojik-es-a-windows-bb70d06f.js"),["chunks/emojik-es-a-windows-bb70d06f.js","chunks/index-c39fd906.js","chunks/_post-19075818.js","assets/_post-fcbe0f83.css","chunks/stores-3ebc5a7f.js"]),"../posts/hidden-post.md":()=>R(()=>import("../chunks/hidden-post-a83dc2a3.js"),["chunks/hidden-post-a83dc2a3.js","chunks/index-c39fd906.js","chunks/_post-19075818.js","assets/_post-fcbe0f83.css","chunks/stores-3ebc5a7f.js"]),"../posts/welcome.md":()=>R(()=>import("../chunks/welcome-882c4a18.js"),["chunks/welcome-882c4a18.js","chunks/index-c39fd906.js","chunks/_post-19075818.js","assets/_post-fcbe0f83.css","chunks/stores-3ebc5a7f.js"])});return await Promise.all(a.map(async([t,r])=>{const{metadata:i}=await r(),o=t.slice(2,-3);return{metadata:i,path:o}}))},J=async()=>(await G()).sort((l,t)=>+new Date(t.metadata.date)-+new Date(l.metadata.date));function B(n,a,l){const t=n.slice();return t[1]=a[l],t}function C(n){var F;let a,l,t,r,i=n[1].metadata.title+"",o,e,c,s=((F=n[1].metadata.description)!=null?F:"No description")+"",p,w,_,k,b,y;return{c(){a=v("div"),l=v("div"),t=v("div"),r=v("h5"),o=j(i),e=I(),c=v("p"),p=j(s),w=I(),_=v("a"),k=j("Read"),y=I(),this.h()},l(m){a=P(m,"DIV",{class:!0});var f=E(a);l=P(f,"DIV",{class:!0});var D=E(l);t=P(D,"DIV",{class:!0});var g=E(t);r=P(g,"H5",{class:!0});var L=E(r);o=O(L,i),L.forEach(h),e=V(g),c=P(g,"P",{class:!0});var S=E(c);p=O(S,s),S.forEach(h),w=V(g),_=P(g,"A",{href:!0,class:!0});var T=E(_);k=O(T,"Read"),T.forEach(h),g.forEach(h),D.forEach(h),y=V(f),f.forEach(h),this.h()},h(){u(r,"class","card-title"),u(c,"class","card-text"),u(_,"href",b=n[1].path),u(_,"class","btn btn-outline-primary"),u(t,"class","card-body"),u(l,"class","card w-100"),u(a,"class","col-12 col-md-6 col-xl-4"),q(a,"visually-hidden",n[1].metadata.hidden)},m(m,f){A(m,a,f),d(a,l),d(l,t),d(t,r),d(r,o),d(t,e),d(t,c),d(c,p),d(t,w),d(t,_),d(_,k),d(a,y)},p(m,f){var D;f&1&&i!==(i=m[1].metadata.title+"")&&N(o,i),f&1&&s!==(s=((D=m[1].metadata.description)!=null?D:"No description")+"")&&N(p,s),f&1&&b!==(b=m[1].path)&&u(_,"href",b),f&1&&q(a,"visually-hidden",m[1].metadata.hidden)},d(m){m&&h(a)}}}function M(n){let a,l,t,r,i=n[0],o=[];for(let e=0;e<i.length;e+=1)o[e]=C(B(n,i,e));return{c(){a=I(),l=v("div"),t=v("div"),r=v("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){$('[data-svelte="svelte-hvuf7p"]',document.head).forEach(h),a=V(e),l=P(e,"DIV",{class:!0});var s=E(l);t=P(s,"DIV",{class:!0});var p=E(t);r=P(p,"DIV",{class:!0});var w=E(r);for(let _=0;_<o.length;_+=1)o[_].l(w);w.forEach(h),p.forEach(h),s.forEach(h),this.h()},h(){document.title="SK - Blog",u(r,"class","row"),u(t,"class","column"),u(l,"class","container")},m(e,c){A(e,a,c),A(e,l,c),d(l,t),d(t,r);for(let s=0;s<o.length;s+=1)o[s].m(r,null)},p(e,[c]){if(c&1){i=e[0];let s;for(s=0;s<i.length;s+=1){const p=B(e,i,s);o[s]?o[s].p(p,c):(o[s]=C(p),o[s].c(),o[s].m(r,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=i.length}},i:x,o:x,d(e){e&&h(a),e&&h(l),z(o,e)}}}const X=!0,Z=async()=>{const n=await J();return{status:200,props:{posts:n}}};function Q(n,a,l){let{posts:t}=a;return n.$$set=r=>{"posts"in r&&l(0,t=r.posts)},[t]}class tt extends H{constructor(a){super(),K(this,a,Q,M,Y,{posts:0})}}export{tt as default,Z as load,X as prerender};