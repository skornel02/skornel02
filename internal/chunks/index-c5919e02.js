function g(){}const K=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function W(){return Object.create(null)}function x(t){t.forEach(Q)}function q(t){return typeof t=="function"}function Mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Rt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function zt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,o){if(r){const c=U(e,n,i,o);t.p(c,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Wt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Gt(t){return t==null?"":t}function Jt(t){return t&&q(t.destroy)?t.destroy:g}const V=typeof window!="undefined";let X=V?()=>window.performance.now():()=>Date.now(),F=V?t=>requestAnimationFrame(t):g;const b=new Set;function Y(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&F(Y)}function Z(t){let e;return b.size===0&&F(Y),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let M=!1;function mt(){M=!0}function pt(){M=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:yt(1,r,_=>e[n[_]].claim_order,a))-1;i[s]=n[f]+1;const u=f+1;n[u]=s,r=Math.max(u,r)}const o=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<c.length;s++){for(;a<o.length&&c[s].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(c[s],f)}}function bt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=et("style");return $t(tt(t),e),e.sheet}function $t(t,e){bt(t.head||t,e)}function wt(t,e){if(M){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){M&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function vt(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Ut(){return H(" ")}function Vt(){return H("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:nt(t,i,e[i])}function te(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:nt(t,e,n)}function Et(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,r=!1){At(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,e,n,i){return it(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function ee(t,e,n){return rt(t,e,n,et)}function ne(t,e,n){return rt(t,e,n,kt)}function Nt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function ie(t){return Nt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function oe(t,e=document.body){return Array.from(e.querySelectorAll(t))}const O=new Map;let P=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:xt(e),rules:{}};return O.set(t,n),n}function ct(t,e,n,i,r,o,c,l=0){const s=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=s){const N=e+(n-e)*o(m);a+=m*100+`%{${c(N,1-N)}}
`}const f=a+`100% {${c(n,1-n)}}
}`,u=`__svelte_${St(f)}_${l}`,_=tt(t),{stylesheet:d,rules:h}=O.get(_)||jt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${r}ms 1 both`,P+=1,u}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),P-=r,P||Ct())}function Ct(){F(()=>{P||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let E;function k(t){E=t}function $(){if(!E)throw new Error("Function called outside component initialization");return E}function le(t){$().$$.on_mount.push(t)}function ae(t){$().$$.after_update.push(t)}function ue(t){$().$$.on_destroy.push(t)}function fe(){const t=$();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=st(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function _e(t,e){return $().$$.context.set(t,e),e}function de(t){return $().$$.context.get(t)}function he(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],G=[],C=[],J=[],ot=Promise.resolve();let B=!1;function lt(){B||(B=!0,ot.then(at))}function me(){return lt(),ot}function A(t){C.push(t)}const L=new Set;let j=0;function at(){const t=E;do{for(;j<v.length;){const e=v[j];j++,k(e),Dt(e.$$)}for(k(null),v.length=0,j=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];L.has(n)||(L.add(n),n())}C.length=0}while(v.length);for(;J.length;)J.pop()();B=!1,L.clear(),k(t)}function Dt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let w;function ut(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function T(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const D=new Set;let y;function pe(){y={r:0,c:[],p:y}}function ye(){y.r||x(y.c),y=y.p}function Ot(t,e){t&&t.i&&(D.delete(t),t.i(e))}function ge(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),y.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ft={duration:0};function be(t,e,n){let i=e(t,n),r=!1,o,c,l=0;function s(){o&&z(t,o)}function a(){const{delay:u=0,duration:_=300,easing:d=K,tick:h=g,css:p}=i||ft;p&&(o=ct(t,0,1,_,u,d,p,l++)),h(0,1);const m=X()+u,N=m+_;c&&c.abort(),r=!0,A(()=>T(t,!0,"start")),c=Z(R=>{if(r){if(R>=N)return h(1,0),T(t,!0,"end"),s(),r=!1;if(R>=m){const I=d((R-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),q(i)?(i=i(),ut().then(a)):a())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function xe(t,e,n){let i=e(t,n),r=!0,o;const c=y;c.r+=1;function l(){const{delay:s=0,duration:a=300,easing:f=K,tick:u=g,css:_}=i||ft;_&&(o=ct(t,1,0,a,s,f,_));const d=X()+s,h=d+a;A(()=>T(t,!1,"start")),Z(p=>{if(r){if(p>=h)return u(0,1),T(t,!1,"end"),--c.r||x(c.c),!1;if(p>=d){const m=f((p-d)/a);u(1-m,m)}}return r})}return q(i)?ut().then(()=>{i=i(),l()}):l(),{end(s){s&&i.tick&&i.tick(1,0),r&&(o&&z(t,o),r=!1)}}}const $e=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function we(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],l=e[o];if(l){for(const s in c)s in l||(i[s]=1);for(const s in l)r[s]||(n[s]=l[s],r[s]=1);t[o]=l}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function ve(t){return typeof t=="object"&&t!==null?t:{}}function ke(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:c,after_update:l}=t.$$;r&&r.m(e,n),i||A(()=>{const s=o.map(Q).filter(q);c?c.push(...s):x(s),t.$$.on_mount=[]}),l.forEach(A)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(v.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,i,r,o,c,l=[-1]){const s=E;k(t);const a=t.$$={fragment:null,ctx:null,props:o,update:g,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:W(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};c&&c(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return a.ctx&&r(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),f&&qt(t,u)),_}):[],a.update(),f=!0,x(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){mt();const u=Et(e.target);a.fragment&&a.fragment.l(u),u.forEach(vt)}else a.fragment&&a.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),pt(),at()}k(s)}class Ne{$destroy(){Tt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Jt as $,we as A,ve as B,Tt as C,_t as D,me as E,de as F,A as G,Zt as H,Xt as I,q as J,Ft as K,Ht as L,Bt as M,be as N,xe as O,x as P,Wt as Q,fe as R,Ne as S,It as T,zt as U,he as V,K as W,G as X,Rt as Y,wt as Z,Lt as _,Et as a,ce as a0,kt as a1,ne as a2,oe as a3,X as a4,Z as a5,ue as a6,Gt as a7,Yt as a8,Qt as a9,$e as aa,te as ab,nt as b,ee as c,vt as d,et as e,se as f,Kt as g,Nt as h,Ae as i,re as j,Ut as k,Vt as l,ie as m,g as n,pe as o,ge as p,ye as q,Ot as r,Mt as s,H as t,_e as u,ae as v,le as w,ke as x,Ee as y,Pt as z};
