import{S as M,i as S,s as G,k as d,l as u,a0 as Q,n as a,b as D,H as b,h as l,y as V,a as A,m as g,z as B,c as H,G as v,A as w,g as k,d as q,B as F,J as j,K as z,M as J,L}from"../chunks/index.864269ae.js";import{f as P}from"../chunks/index.ef1416e5.js";import{C as N}from"../chunks/CardNavigation.aebfd97f.js";function R(p){let e,r;return{c(){e=d("img"),this.h()},l(t){e=u(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Q(e.src,r="/business-card-back.svg")||a(e,"src",r),a(e,"alt","Frontside of business card"),a(e,"class","svelte-5l81q9")},m(t,s){D(t,e,s)},p:b,i:b,o:b,d(t){t&&l(e)}}}class T extends M{constructor(e){super(),S(this,e,null,R,G,{})}}function O(p){let e,r;return{c(){e=d("img"),this.h()},l(t){e=u(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Q(e.src,r="/business-card-front.svg")||a(e,"src",r),a(e,"alt","Frontside of business card"),a(e,"class","svelte-5l81q9")},m(t,s){D(t,e,s)},p:b,i:b,o:b,d(t){t&&l(e)}}}class U extends M{constructor(e){super(),S(this,e,null,O,G,{})}}function W(p){let e,r,t,s,c,h,m,E,f,o,y;return m=new U({}),o=new T({}),{c(){e=d("div"),r=d("div"),t=d("div"),s=d("div"),c=d("div"),h=d("div"),V(m.$$.fragment),E=A(),f=d("div"),V(o.$$.fragment),this.h()},l(i){e=u(i,"DIV",{class:!0});var $=g(e);r=u($,"DIV",{class:!0});var n=g(r);t=u(n,"DIV",{class:!0});var x=g(t);s=u(x,"DIV",{class:!0});var I=g(s);c=u(I,"DIV",{class:!0});var _=g(c);h=u(_,"DIV",{class:!0});var C=g(h);B(m.$$.fragment,C),C.forEach(l),E=H(_),f=u(_,"DIV",{class:!0});var K=g(f);B(o.$$.fragment,K),K.forEach(l),_.forEach(l),I.forEach(l),x.forEach(l),n.forEach(l),$.forEach(l),this.h()},h(){a(h,"class","front svelte-1y24923"),a(f,"class","back svelte-1y24923"),a(c,"class","flipper svelte-1y24923"),a(s,"class","flip-container svelte-1y24923"),a(t,"class","col"),a(r,"class","row"),a(e,"class","card-container svelte-1y24923")},m(i,$){D(i,e,$),v(e,r),v(r,t),v(t,s),v(s,c),v(c,h),w(m,h,null),v(c,E),v(c,f),w(o,f,null),y=!0},p:b,i(i){y||(k(m.$$.fragment,i),k(o.$$.fragment,i),y=!0)},o(i){q(m.$$.fragment,i),q(o.$$.fragment,i),y=!1},d(i){i&&l(e),F(m),F(o)}}}class X extends M{constructor(e){super(),S(this,e,null,W,G,{})}}function Y(p){let e,r,t,s,c,h,m,E,f,o,y,i,$;return c=new X({}),o=new N({props:{home:!0,card:!1,details:!0}}),{c(){e=d("meta"),r=A(),t=d("div"),s=d("div"),V(c.$$.fragment),h=A(),m=d("hr"),E=A(),f=d("div"),V(o.$$.fragment),this.h()},l(n){const x=j("svelte-24s81g",document.head);e=u(x,"META",{name:!0,content:!0}),x.forEach(l),r=H(n),t=u(n,"DIV",{class:!0});var I=g(t);s=u(I,"DIV",{class:!0});var _=g(s);B(c.$$.fragment,_),h=H(_),m=u(_,"HR",{class:!0}),E=H(_),f=u(_,"DIV",{id:!0});var C=g(f);B(o.$$.fragment,C),C.forEach(l),_.forEach(l),I.forEach(l),this.h()},h(){document.title="Stefán Kornél",a(e,"name","description"),a(e,"content","Physical personal information card"),a(m,"class","text-primary svelte-1bt1nj8"),a(f,"id","navigationSlot"),a(s,"class","card-body"),a(t,"class","card w-80 sm:w-96 bg-base-100 m-auto")},m(n,x){v(document.head,e),D(n,r,x),D(n,t,x),v(t,s),w(c,s,null),v(s,h),v(s,m),v(s,E),v(s,f),w(o,f,null),$=!0},p:b,i(n){$||(k(c.$$.fragment,n),k(o.$$.fragment,n),z(()=>{$&&(i&&i.end(1),y=J(t,P,{duration:700,delay:250}),y.start())}),$=!0)},o(n){q(c.$$.fragment,n),q(o.$$.fragment,n),y&&y.invalidate(),i=L(t,P,{duration:150}),$=!1},d(n){l(e),n&&l(r),n&&l(t),F(c),F(o),n&&i&&i.end()}}}class Z extends M{constructor(e){super(),S(this,e,null,Y,G,{})}}function ee(p){let e,r;return e=new Z({}),{c(){V(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){w(e,t,s),r=!0},p:b,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}class ae extends M{constructor(e){super(),S(this,e,null,ee,G,{})}}export{ae as component};
