import{S as B,i as D,s as S,C as F,T as m,a5 as j,e as g,a6 as q,m as w,h as d,a7 as k,b as N,G,D as P,E as Q,F as T,X as A,f as U,t as X,a8 as H,Q as z,U as W}from"./index-bd98a8e9.js";const C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function E(n,e,o){const s=n.slice();return s[9]=e[o][0],s[10]=e[o][1],s}function v(n){let e,o=[n[10]],s={};for(let t=0;t<o.length;t+=1)s=m(s,o[t]);return{c(){e=j(n[9]),this.h()},l(t){e=q(t,n[9],{}),w(e).forEach(d),this.h()},h(){k(e,s)},m(t,h){N(t,e,h)},p(t,h){s=A(o,[h&16&&t[10]]),k(e,s)},d(t){t&&d(e)}}}function I(n){let e=n[9],o,s=n[9]&&v(n);return{c(){s&&s.c(),o=g()},l(t){s&&s.l(t),o=g()},m(t,h){s&&s.m(t,h),N(t,o,h)},p(t,h){t[9]?e?S(e,t[9])?(s.d(1),s=v(t),s.c(),s.m(o.parentNode,o)):s.p(t,h):(s=v(t),s.c(),s.m(o.parentNode,o)):e&&(s.d(1),s=null),e=t[9]},d(t){t&&d(o),s&&s.d(t)}}}function J(n){let e,o,s,t,h=n[4],r=[];for(let l=0;l<h.length;l+=1)r[l]=I(E(n,h,l));const u=n[8].default,c=F(u,n,n[7],null);let _=[C,n[5],{width:n[2]},{height:n[2]},{stroke:n[1]},{"stroke-width":n[3]},{class:s=`lucide-icon lucide lucide-${n[0]} ${n[6].class??""}`}],f={};for(let l=0;l<_.length;l+=1)f=m(f,_[l]);return{c(){e=j("svg");for(let l=0;l<r.length;l+=1)r[l].c();o=g(),c&&c.c(),this.h()},l(l){e=q(l,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var i=w(e);for(let a=0;a<r.length;a+=1)r[a].l(i);o=g(),c&&c.l(i),i.forEach(d),this.h()},h(){k(e,f)},m(l,i){N(l,e,i);for(let a=0;a<r.length;a+=1)r[a].m(e,null);G(e,o),c&&c.m(e,null),t=!0},p(l,[i]){if(i&16){h=l[4];let a;for(a=0;a<h.length;a+=1){const b=E(l,h,a);r[a]?r[a].p(b,i):(r[a]=I(b),r[a].c(),r[a].m(e,o))}for(;a<r.length;a+=1)r[a].d(1);r.length=h.length}c&&c.p&&(!t||i&128)&&P(c,u,l,l[7],t?T(u,l[7],i,null):Q(l[7]),null),k(e,f=A(_,[C,i&32&&l[5],(!t||i&4)&&{width:l[2]},(!t||i&4)&&{height:l[2]},(!t||i&2)&&{stroke:l[1]},(!t||i&8)&&{"stroke-width":l[3]},(!t||i&65&&s!==(s=`lucide-icon lucide lucide-${l[0]} ${l[6].class??""}`))&&{class:s}]))},i(l){t||(U(c,l),t=!0)},o(l){X(c,l),t=!1},d(l){l&&d(e),H(r,l),c&&c.d(l)}}}function K(n,e,o){const s=["name","color","size","strokeWidth","iconNode"];let t=z(e,s),{$$slots:h={},$$scope:r}=e,{name:u}=e,{color:c="currentColor"}=e,{size:_=24}=e,{strokeWidth:f=2}=e,{iconNode:l}=e;return n.$$set=i=>{o(6,e=m(m({},e),W(i))),o(5,t=z(e,s)),"name"in i&&o(0,u=i.name),"color"in i&&o(1,c=i.color),"size"in i&&o(2,_=i.size),"strokeWidth"in i&&o(3,f=i.strokeWidth),"iconNode"in i&&o(4,l=i.iconNode),"$$scope"in i&&o(7,r=i.$$scope)},e=W(e),[u,c,_,f,l,t,e,r,h]}class L extends B{constructor(e){super(),D(this,e,K,J,S,{name:0,color:1,size:2,strokeWidth:3,iconNode:4})}}const O=L;export{O as I};
