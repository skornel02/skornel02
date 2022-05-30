var kt=Object.defineProperty;var ht=Object.getOwnPropertySymbols;var Pt=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var ut=(s,t,e)=>t in s?kt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,H=(s,t)=>{for(var e in t||(t={}))Pt.call(t,e)&&ut(s,e,t[e]);if(ht)for(var e of ht(t))Ot.call(t,e)&&ut(s,e,t[e]);return s};import{S as Nt,i as Tt,s as Ct,e as R,t as U,k as j,c as k,a as C,h as Q,d as S,m as D,b as x,g as et,Z as _,j as Z,a3 as Ft,ab as dt,I as $t,n as ft,a6 as jt}from"../chunks/index-1dd851d7.js";import{_ as q}from"../chunks/preload-helper-e51e4937.js";function K(s){return Array.isArray?Array.isArray(s):It(s)==="[object Array]"}const Dt=1/0;function Kt(s){if(typeof s=="string")return s;let t=s+"";return t=="0"&&1/s==-Dt?"-0":t}function Vt(s){return s==null?"":Kt(s)}function F(s){return typeof s=="string"}function vt(s){return typeof s=="number"}function Bt(s){return s===!0||s===!1||Ht(s)&&It(s)=="[object Boolean]"}function xt(s){return typeof s=="object"}function Ht(s){return xt(s)&&s!==null}function N(s){return s!=null}function tt(s){return!s.trim().length}function It(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Wt="Incorrect 'index' type",zt=s=>`Invalid value for key ${s}`,Yt=s=>`Pattern length exceeds max of ${s}.`,Gt=s=>`Missing ${s} property in key`,Ut=s=>`Property 'weight' in key '${s}' must be a positive integer`,pt=Object.prototype.hasOwnProperty;class Qt{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(n=>{let r=wt(n);e+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,e+=r.weight}),this._keys.forEach(n=>{n.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function wt(s){let t=null,e=null,n=null,r=1,c=null;if(F(s)||K(s))n=s,t=gt(s),e=st(s);else{if(!pt.call(s,"name"))throw new Error(Gt("name"));const i=s.name;if(n=i,pt.call(s,"weight")&&(r=s.weight,r<=0))throw new Error(Ut(i));t=gt(i),e=st(i),c=s.getFn}return{path:t,id:e,weight:r,src:n,getFn:c}}function gt(s){return K(s)?s:s.split(".")}function st(s){return K(s)?s.join("."):s}function Xt(s,t){let e=[],n=!1;const r=(c,i,o)=>{if(!!N(c))if(!i[o])e.push(c);else{let a=i[o];const h=c[a];if(!N(h))return;if(o===i.length-1&&(F(h)||vt(h)||Bt(h)))e.push(Vt(h));else if(K(h)){n=!0;for(let l=0,u=h.length;l<u;l+=1)r(h[l],i,o+1)}else i.length&&r(h,i,o+1)}};return r(s,F(t)?t.split("."):t,0),n?e:e[0]}const Jt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Zt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,t)=>s.score===t.score?s.idx<t.idx?-1:1:s.score<t.score?-1:1},qt={location:0,threshold:.6,distance:100},te={useExtendedSearch:!1,getFn:Xt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var f=H(H(H(H({},Zt),Jt),qt),te);const ee=/[^ ]+/g;function se(s=1,t=3){const e=new Map,n=Math.pow(10,t);return{get(r){const c=r.match(ee).length;if(e.has(c))return e.get(c);const i=1/Math.pow(c,.5*s),o=parseFloat(Math.round(i*n)/n);return e.set(c,o),o},clear(){e.clear()}}}class at{constructor({getFn:t=f.getFn,fieldNormWeight:e=f.fieldNormWeight}={}){this.norm=se(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,n)=>{this._keysMap[e.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,F(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();F(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!N(t)||tt(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach((r,c)=>{let i=r.getFn?r.getFn(t):this.getFn(t,r.path);if(!!N(i)){if(K(i)){let o=[];const a=[{nestedArrIndex:-1,value:i}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(!!N(l))if(F(l)&&!tt(l)){let u={v:l,i:h,n:this.norm.get(l)};o.push(u)}else K(l)&&l.forEach((u,d)=>{a.push({nestedArrIndex:d,value:u})})}n.$[c]=o}else if(F(i)&&!tt(i)){let o={v:i,n:this.norm.get(i)};n.$[c]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function St(s,t,{getFn:e=f.getFn,fieldNormWeight:n=f.fieldNormWeight}={}){const r=new at({getFn:e,fieldNormWeight:n});return r.setKeys(s.map(wt)),r.setSources(t),r.create(),r}function ne(s,{getFn:t=f.getFn,fieldNormWeight:e=f.fieldNormWeight}={}){const{keys:n,records:r}=s,c=new at({getFn:t,fieldNormWeight:e});return c.setKeys(n),c.setIndexRecords(r),c}function X(s,{errors:t=0,currentLocation:e=0,expectedLocation:n=0,distance:r=f.distance,ignoreLocation:c=f.ignoreLocation}={}){const i=t/s.length;if(c)return i;const o=Math.abs(n-e);return r?i+o/r:o?1:i}function re(s=[],t=f.minMatchCharLength){let e=[],n=-1,r=-1,c=0;for(let i=s.length;c<i;c+=1){let o=s[c];o&&n===-1?n=c:!o&&n!==-1&&(r=c-1,r-n+1>=t&&e.push([n,r]),n=-1)}return s[c-1]&&c-n>=t&&e.push([n,c-1]),e}const W=32;function ie(s,t,e,{location:n=f.location,distance:r=f.distance,threshold:c=f.threshold,findAllMatches:i=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,includeMatches:a=f.includeMatches,ignoreLocation:h=f.ignoreLocation}={}){if(t.length>W)throw new Error(Yt(W));const l=t.length,u=s.length,d=Math.max(0,Math.min(n,u));let g=c,M=d;const v=o>1||a,P=v?Array(u):[];let A;for(;(A=s.indexOf(t,M))>-1;){let w=X(t,{currentLocation:A,expectedLocation:d,distance:r,ignoreLocation:h});if(g=Math.min(w,g),M=A+l,v){let I=0;for(;I<l;)P[A+I]=1,I+=1}}M=-1;let b=[],E=1,p=l+u;const L=1<<l-1;for(let w=0;w<l;w+=1){let I=0,y=p;for(;I<y;)X(t,{errors:w,currentLocation:d+y,expectedLocation:d,distance:r,ignoreLocation:h})<=g?I=y:p=y,y=Math.floor((p-I)/2+I);p=y;let T=Math.max(1,d-y+1),z=i?u:Math.min(d+y,u)+l,$=Array(z+2);$[z+1]=(1<<w)-1;for(let O=z;O>=T;O-=1){let B=O-1,lt=e[s.charAt(B)];if(v&&(P[B]=+!!lt),$[O]=($[O+1]<<1|1)&lt,w&&($[O]|=(b[O+1]|b[O])<<1|1|b[O+1]),$[O]&L&&(E=X(t,{errors:w,currentLocation:B,expectedLocation:d,distance:r,ignoreLocation:h}),E<=g)){if(g=E,M=B,M<=d)break;T=Math.max(1,2*d-M)}}if(X(t,{errors:w+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>g)break;b=$}const m={isMatch:M>=0,score:Math.max(.001,E)};if(v){const w=re(P,o);w.length?a&&(m.indices=w):m.isMatch=!1}return m}function ce(s){let t={};for(let e=0,n=s.length;e<n;e+=1){const r=s.charAt(e);t[r]=(t[r]||0)|1<<n-e-1}return t}class At{constructor(t,{location:e=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:c=f.includeMatches,findAllMatches:i=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:h=f.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:r,includeMatches:c,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:ce(d),startIndex:g})},u=this.pattern.length;if(u>W){let d=0;const g=u%W,M=u-g;for(;d<M;)l(this.pattern.substr(d,W),d),d+=W;if(g){const v=u-W;l(this.pattern.substr(v),v)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let M={isMatch:!0,score:0};return n&&(M.indices=[[0,t.length-1]]),M}const{location:r,distance:c,threshold:i,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],u=0,d=!1;this.chunks.forEach(({pattern:M,alphabet:v,startIndex:P})=>{const{isMatch:A,score:b,indices:E}=ie(t,M,v,{location:r+P,distance:c,threshold:i,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:h});A&&(d=!0),u+=b,A&&E&&(l=[...l,...E])});let g={isMatch:d,score:d?u/this.chunks.length:1};return d&&n&&(g.indices=l),g}}class V{constructor(t){this.pattern=t}static isMultiMatch(t){return mt(t,this.multiRegex)}static isSingleMatch(t){return mt(t,this.singleRegex)}search(){}}function mt(s,t){const e=s.match(t);return e?e[1]:null}class oe extends V{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class ae extends V{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class le extends V{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class he extends V{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class ue extends V{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class de extends V{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class bt extends V{constructor(t,{location:e=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:c=f.includeMatches,findAllMatches:i=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:h=f.ignoreLocation}={}){super(t),this._bitapSearch=new At(t,{location:e,threshold:n,distance:r,includeMatches:c,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Lt extends V{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,n;const r=[],c=this.pattern.length;for(;(n=t.indexOf(this.pattern,e))>-1;)e=n+c,r.push([n,e-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const nt=[oe,Lt,le,he,de,ue,ae,bt],_t=nt.length,fe=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,pe="|";function ge(s,t={}){return s.split(pe).map(e=>{let n=e.trim().split(fe).filter(c=>c&&!!c.trim()),r=[];for(let c=0,i=n.length;c<i;c+=1){const o=n[c];let a=!1,h=-1;for(;!a&&++h<_t;){const l=nt[h];let u=l.isMultiMatch(o);u&&(r.push(new l(u,t)),a=!0)}if(!a)for(h=-1;++h<_t;){const l=nt[h];let u=l.isSingleMatch(o);if(u){r.push(new l(u,t));break}}}return r})}const me=new Set([bt.type,Lt.type]);class _e{constructor(t,{isCaseSensitive:e=f.isCaseSensitive,includeMatches:n=f.includeMatches,minMatchCharLength:r=f.minMatchCharLength,ignoreLocation:c=f.ignoreLocation,findAllMatches:i=f.findAllMatches,location:o=f.location,threshold:a=f.threshold,distance:h=f.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:c,location:o,threshold:a,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=ge(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let c=0,i=[],o=0;for(let a=0,h=e.length;a<h;a+=1){const l=e[a];i.length=0,c=0;for(let u=0,d=l.length;u<d;u+=1){const g=l[u],{isMatch:M,indices:v,score:P}=g.search(t);if(M){if(c+=1,o+=P,n){const A=g.constructor.type;me.has(A)?i=[...i,...v]:i.push(v)}}else{o=0,c=0,i.length=0;break}}if(c){let u={isMatch:!0,score:o/c};return n&&(u.indices=i),u}}return{isMatch:!1,score:1}}}const rt=[];function Me(...s){rt.push(...s)}function it(s,t){for(let e=0,n=rt.length;e<n;e+=1){let r=rt[e];if(r.condition(s,t))return new r(s,t)}return new At(s,t)}const J={AND:"$and",OR:"$or"},ct={PATH:"$path",PATTERN:"$val"},ot=s=>!!(s[J.AND]||s[J.OR]),Ee=s=>!!s[ct.PATH],ye=s=>!K(s)&&xt(s)&&!ot(s),Mt=s=>({[J.AND]:Object.keys(s).map(t=>({[t]:s[t]}))});function Rt(s,t,{auto:e=!0}={}){const n=r=>{let c=Object.keys(r);const i=Ee(r);if(!i&&c.length>1&&!ot(r))return n(Mt(r));if(ye(r)){const a=i?r[ct.PATH]:c[0],h=i?r[ct.PATTERN]:r[a];if(!F(h))throw new Error(zt(a));const l={keyId:st(a),pattern:h};return e&&(l.searcher=it(h,t)),l}let o={children:[],operator:c[0]};return c.forEach(a=>{const h=r[a];K(h)&&h.forEach(l=>{o.children.push(n(l))})}),o};return ot(s)||(s=Mt(s)),n(s)}function ve(s,{ignoreFieldNorm:t=f.ignoreFieldNorm}){s.forEach(e=>{let n=1;e.matches.forEach(({key:r,norm:c,score:i})=>{const o=r?r.weight:null;n*=Math.pow(i===0&&o?Number.EPSILON:i,(o||1)*(t?1:c))}),e.score=n})}function xe(s,t){const e=s.matches;t.matches=[],N(e)&&e.forEach(n=>{if(!N(n.indices)||!n.indices.length)return;const{indices:r,value:c}=n;let i={indices:r,value:c};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),t.matches.push(i)})}function Ie(s,t){t.score=s.score}function we(s,t,{includeMatches:e=f.includeMatches,includeScore:n=f.includeScore}={}){const r=[];return e&&r.push(xe),n&&r.push(Ie),s.map(c=>{const{idx:i}=c,o={item:t[i],refIndex:i};return r.length&&r.forEach(a=>{a(c,o)}),o})}class Y{constructor(t,e={},n){this.options=H(H({},f),e),this.options.useExtendedSearch,this._keyStore=new Qt(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof at))throw new Error(Wt);this._myIndex=e||St(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){!N(t)||(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let n=0,r=this._docs.length;n<r;n+=1){const c=this._docs[n];t(c,n)&&(this.removeAt(n),n-=1,r-=1,e.push(c))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:c,sortFn:i,ignoreFieldNorm:o}=this.options;let a=F(t)?F(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return ve(a,{ignoreFieldNorm:o}),c&&a.sort(i),vt(e)&&e>-1&&(a=a.slice(0,e)),we(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const e=it(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:c,i,n:o})=>{if(!N(c))return;const{isMatch:a,score:h,indices:l}=e.searchIn(c);a&&r.push({item:c,idx:i,matches:[{score:h,value:c,norm:o,indices:l}]})}),r}_searchLogical(t){const e=Rt(t,this.options),n=(o,a,h)=>{if(!o.children){const{keyId:u,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:d});return g&&g.length?[{idx:h,item:a,matches:g}]:[]}const l=[];for(let u=0,d=o.children.length;u<d;u+=1){const g=o.children[u],M=n(g,a,h);if(M.length)l.push(...M);else if(o.operator===J.AND)return[]}return l},r=this._myIndex.records,c={},i=[];return r.forEach(({$:o,i:a})=>{if(N(o)){let h=n(e,o,a);h.length&&(c[a]||(c[a]={idx:a,item:o,matches:[]},i.push(c[a])),h.forEach(({matches:l})=>{c[a].matches.push(...l)}))}}),i}_searchObjectList(t){const e=it(t,this.options),{keys:n,records:r}=this._myIndex,c=[];return r.forEach(({$:i,i:o})=>{if(!N(i))return;let a=[];n.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:i[l],searcher:e}))}),a.length&&c.push({idx:o,item:i,matches:a})}),c}_findMatches({key:t,value:e,searcher:n}){if(!N(e))return[];let r=[];if(K(e))e.forEach(({v:c,i,n:o})=>{if(!N(c))return;const{isMatch:a,score:h,indices:l}=n.searchIn(c);a&&r.push({score:h,key:t,value:c,idx:i,norm:o,indices:l})});else{const{v:c,n:i}=e,{isMatch:o,score:a,indices:h}=n.searchIn(c);o&&r.push({score:a,key:t,value:c,norm:i,indices:h})}return r}}Y.version="6.6.2";Y.createIndex=St;Y.parseIndex=ne;Y.config=f;Y.parseQuery=Rt;Me(_e);const Se=async()=>{const t=Object.entries({"../posts/emojik-es-a-windows.md":()=>q(()=>import("../chunks/emojik-es-a-windows-43d23127.js"),["chunks/emojik-es-a-windows-43d23127.js","chunks/index-1dd851d7.js","chunks/_post-e931ddf1.js","assets/_post-b312ce0f.css","chunks/preload-helper-e51e4937.js"]),"../posts/hidden-post.md":()=>q(()=>import("../chunks/hidden-post-e355d6e1.js"),["chunks/hidden-post-e355d6e1.js","chunks/index-1dd851d7.js","chunks/_post-e931ddf1.js","assets/_post-b312ce0f.css","chunks/preload-helper-e51e4937.js"]),"../posts/welcome.md":()=>q(()=>import("../chunks/welcome-4d47ed6e.js"),["chunks/welcome-4d47ed6e.js","chunks/index-1dd851d7.js","chunks/_post-e931ddf1.js","assets/_post-b312ce0f.css","chunks/preload-helper-e51e4937.js"])});return await Promise.all(t.map(async([n,r])=>{const{metadata:c}=await r(),i=n.slice(2,-3);return{metadata:c,path:i}}))},Ae=async(s=!0)=>{let t=await Se();return s||(t=t.filter(e=>e.metadata.hidden!==!0)),t=t.sort((e,n)=>+new Date(n.metadata.date)-+new Date(e.metadata.date)),t};function Et(s,t,e){const n=s.slice();return n[6]=t[e],n[8]=e,n}function yt(s){var w;let t,e,n=s[6].metadata.title+"",r,c,i,o=((w=s[6].metadata.description)!=null?w:"No description")+"",a,h,l,u,d,g,M,v,P,A=new Date(s[6].metadata.date).toLocaleDateString()+"",b,E,p,L,m;return{c(){t=R("div"),e=R("h2"),r=U(n),c=j(),i=R("p"),a=U(o),h=j(),l=R("div"),u=R("div"),d=R("a"),g=U("Read"),v=j(),P=R("p"),b=U(A),E=j(),p=R("hr"),L=j(),this.h()},l(I){t=k(I,"DIV",{id:!0,class:!0});var y=C(t);e=k(y,"H2",{class:!0});var T=C(e);r=Q(T,n),T.forEach(S),c=D(y),i=k(y,"P",{});var z=C(i);a=Q(z,o),z.forEach(S),h=D(y),l=k(y,"DIV",{class:!0});var $=C(l);u=k($,"DIV",{class:!0});var G=C(u);d=k(G,"A",{href:!0,class:!0});var O=C(d);g=Q(O,"Read"),O.forEach(S),v=D(G),P=k(G,"P",{});var B=C(P);b=Q(B,A),B.forEach(S),G.forEach(S),$.forEach(S),E=D(y),p=k(y,"HR",{class:!0}),L=D(y),y.forEach(S),this.h()},h(){x(e,"class","svelte-10n9tv7"),x(d,"href",M=s[6].path),x(d,"class","btn btn-outline-primary"),x(u,"class","d-flex flex-column"),x(l,"class","d-flex justify-content-end"),x(p,"class","svelte-10n9tv7"),x(t,"id",m="post-"+s[8]),x(t,"class","w-100 d-flex flex-column post svelte-10n9tv7")},m(I,y){et(I,t,y),_(t,e),_(e,r),_(t,c),_(t,i),_(i,a),_(t,h),_(t,l),_(l,u),_(u,d),_(d,g),_(u,v),_(u,P),_(P,b),_(t,E),_(t,p),_(t,L)},p(I,y){var T;y&2&&n!==(n=I[6].metadata.title+"")&&Z(r,n),y&2&&o!==(o=((T=I[6].metadata.description)!=null?T:"No description")+"")&&Z(a,o),y&2&&M!==(M=I[6].path)&&x(d,"href",M),y&2&&A!==(A=new Date(I[6].metadata.date).toLocaleDateString()+"")&&Z(b,A)},d(I){I&&S(t)}}}function be(s){let t,e,n,r,c,i,o,a,h,l,u,d,g,M,v,P,A,b=s[1],E=[];for(let p=0;p<b.length;p+=1)E[p]=yt(Et(s,b,p));return{c(){t=R("meta"),e=R("meta"),n=R("meta"),r=R("meta"),c=j(),i=R("div"),o=R("h1"),a=U("Blog Posts"),h=j(),l=R("div"),u=R("input"),d=j(),g=R("hr"),M=j(),v=R("div");for(let p=0;p<E.length;p+=1)E[p].c();this.h()},l(p){const L=Ft('[data-svelte="svelte-3hozdh"]',document.head);t=k(L,"META",{property:!0,content:!0}),e=k(L,"META",{property:!0,content:!0}),n=k(L,"META",{property:!0,content:!0}),r=k(L,"META",{name:!0,content:!0}),L.forEach(S),c=D(p),i=k(p,"DIV",{class:!0});var m=C(i);o=k(m,"H1",{});var w=C(o);a=Q(w,"Blog Posts"),w.forEach(S),h=D(m),l=k(m,"DIV",{id:!0});var I=C(l);u=k(I,"INPUT",{class:!0,type:!0,placeholder:!0}),I.forEach(S),d=D(m),g=k(m,"HR",{}),M=D(m),v=k(m,"DIV",{class:!0});var y=C(v);for(let T=0;T<E.length;T+=1)E[T].l(y);y.forEach(S),m.forEach(S),this.h()},h(){x(t,"property","og:title"),x(t,"content","SK - Blog"),x(e,"property","og:description"),x(e,"content","Personal blog of SK"),x(n,"property","og:type"),x(n,"content","website"),document.title="SK - Blog",x(r,"name","description"),x(r,"content","Personal blog of SK"),x(u,"class","form-control form-control-lg"),x(u,"type","text"),x(u,"placeholder","Search..."),x(l,"id","search"),x(v,"class","d-flex flex-column"),x(i,"class","container")},m(p,L){_(document.head,t),_(document.head,e),_(document.head,n),_(document.head,r),et(p,c,L),et(p,i,L),_(i,o),_(o,a),_(i,h),_(i,l),_(l,u),dt(u,s[0]),_(i,d),_(i,g),_(i,M),_(i,v);for(let m=0;m<E.length;m+=1)E[m].m(v,null);P||(A=$t(u,"input",s[3]),P=!0)},p(p,[L]){if(L&1&&u.value!==p[0]&&dt(u,p[0]),L&2){b=p[1];let m;for(m=0;m<b.length;m+=1){const w=Et(p,b,m);E[m]?E[m].p(w,L):(E[m]=yt(w),E[m].c(),E[m].m(v,null))}for(;m<E.length;m+=1)E[m].d(1);E.length=b.length}},i:ft,o:ft,d(p){S(t),S(e),S(n),S(r),p&&S(c),p&&S(i),jt(E,p),P=!1,A()}}}const Oe=!0,Ne=async()=>{const s=await Ae(!1);return{status:200,props:{posts:s}}};function Le(s,t,e){let{posts:n}=t,r=n;const c={includeScore:!0,keys:[{name:"metadata.title",weight:.8},{name:"metadata.description",weight:.2}]};let i="";const o=new Y(n,c);function a(){i=this.value,e(0,i)}return s.$$set=h=>{"posts"in h&&e(2,n=h.posts)},s.$$.update=()=>{if(s.$$.dirty&5)if(i!==""){const h=o.search(i);e(1,r=h.map(l=>l.item))}else e(1,r=n)},[i,r,n,a]}class Te extends Nt{constructor(t){super(),Tt(this,t,Le,be,Ct,{posts:2})}}export{Te as default,Ne as load,Oe as prerender};