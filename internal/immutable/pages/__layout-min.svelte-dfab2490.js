import{S,i as M,s as g,e as b,c as w,a as q,d as m,b as c,g as d,K as z,L as E,M as N,r as f,G as $,p as h,O as A,k,x as C,a1 as T,m as y,y as G,Y as I,z as K,q as L,C as O,U as Y,N as j,o as B,n as D}from"../chunks/index-df60f785.js";import{l as F,S as H,f as v}from"../chunks/layout-helper-4156d03e.js";function U(o){let t,l,r,u;const i=o[3].default,a=Y(i,o,o[2],null);return{c(){t=b("main"),a&&a.c(),this.h()},l(e){t=w(e,"MAIN",{class:!0});var s=q(t);a&&a.l(s),s.forEach(m),this.h()},h(){c(t,"class","svelte-1tumzm9")},m(e,s){d(e,t,s),a&&a.m(t,null),u=!0},p(e,s){a&&a.p&&(!u||s&4)&&z(a,i,e,e[2],u?N(i,e[2],s,null):E(e[2]),null)},i(e){u||(f(a,e),$(()=>{r&&r.end(1),l=j(t,v,{duration:150,delay:100}),l.start()}),u=!0)},o(e){h(a,e),l&&l.invalidate(),r=A(t,v,{duration:100}),u=!1},d(e){e&&m(t),a&&a.d(e),e&&r&&r.end()}}}function J(o){let t,l,r,u=o[0],i,a,e,s=U(o);return a=new H({props:{shlinkUrl:o[1]}}),{c(){t=b("meta"),r=k(),s.c(),i=k(),C(a.$$.fragment),this.h()},l(n){const _=T('[data-svelte="svelte-s660wh"]',document.head);t=w(_,"META",{property:!0,content:!0}),_.forEach(m),r=y(n),s.l(n),i=y(n),G(a.$$.fragment,n),this.h()},h(){c(t,"property","og:url"),c(t,"content",l=`https://skornel02.hu${o[0]}`)},m(n,_){I(document.head,t),d(n,r,_),s.m(n,_),d(n,i,_),K(a,n,_),e=!0},p(n,[_]){(!e||_&1&&l!==(l=`https://skornel02.hu${n[0]}`))&&c(t,"content",l),_&1&&g(u,u=n[0])?(B(),h(s,1,1,D),L(),s=U(n),s.c(),f(s,1),s.m(i.parentNode,i)):s.p(n,_);const p={};_&2&&(p.shlinkUrl=n[1]),a.$set(p)},i(n){e||(f(s),f(a.$$.fragment,n),e=!0)},o(n){h(s),h(a.$$.fragment,n),e=!1},d(n){m(t),n&&m(r),s.d(n),n&&m(i),O(a,n)}}}const V=async({url:o,fetch:t})=>{const l=o.pathname;let r=await F(l,t);return{props:{route:l,shlinkUrl:r}}};function P(o,t,l){let{$$slots:r={},$$scope:u}=t,{route:i}=t,{shlinkUrl:a}=t;return o.$$set=e=>{"route"in e&&l(0,i=e.route),"shlinkUrl"in e&&l(1,a=e.shlinkUrl),"$$scope"in e&&l(2,u=e.$$scope)},[i,a,u,r]}class W extends S{constructor(t){super(),M(this,t,P,J,g,{route:0,shlinkUrl:1})}}export{W as default,V as load};
