import{S as C,i as I,s as M,e as _,t as f,k as w,c as p,a as E,h as v,d as o,m as $,M as R,b as m,g as b,J as n,j as S,n as P}from"../chunks/index-cab9287c.js";function A(c){let e,s,l,g,i,y,d,x,h,r;return{c(){e=_("div"),s=_("h2"),l=f("Page not found!"),g=w(),i=_("p"),y=f("Redirecting to main page in "),d=f(c[0]),x=f("..."),h=w(),r=_("meta"),this.h()},l(t){e=p(t,"DIV",{id:!0,class:!0});var a=E(e);s=p(a,"H2",{});var j=E(s);l=v(j,"Page not found!"),j.forEach(o),g=$(a),i=p(a,"P",{});var u=E(i);y=v(u,"Redirecting to main page in "),d=v(u,c[0]),x=v(u,"..."),u.forEach(o),a.forEach(o),h=$(t);const q=R('[data-svelte="svelte-kafwwa"]',document.head);r=p(q,"META",{"http-equiv":!0,content:!0}),q.forEach(o),this.h()},h(){m(e,"id","content"),m(e,"class","svelte-1yvjgdd"),m(r,"http-equiv","refresh"),m(r,"content",k+"; url=/")},m(t,a){b(t,e,a),n(e,s),n(s,l),n(e,g),n(e,i),n(i,y),n(i,d),n(i,x),b(t,h,a),n(document.head,r)},p(t,[a]){a&1&&S(d,t[0])},i:P,o:P,d(t){t&&o(e),t&&o(h),o(r)}}}const k=5;function D(c,e,s){let l=k;return setInterval(()=>{s(0,l--,l)},1e3),[l]}class J extends C{constructor(e){super(),I(this,e,D,A,M,{})}}export{J as default};