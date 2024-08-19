import{c as lt}from"./hrefs.xlMFv88Q.js";import"./hoisted.D-2wbxhY.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,B=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),V=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&V.set(e,t))}return t}toString(){return this.cssText}};const dt=s=>new rt(typeof s=="string"?s:s+"",void 0,G),pt=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new rt(e,s,G)},ut=(s,t)=>{if(B)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=M.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},F=B?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return dt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:gt,getOwnPropertyDescriptor:ft,getOwnPropertyNames:_t,getOwnPropertySymbols:mt,getPrototypeOf:At}=Object,L=globalThis,J=L.trustedTypes,yt=J?J.emptyScript:"",St=L.reactiveElementPolyfillSupport,U=(s,t)=>s,x={toAttribute(s,t){switch(t){case Boolean:s=s?yt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},W=(s,t)=>!$t(s,t),Z={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&gt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=ft(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r?.call(this)},set(o){const c=r?.call(this);n.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[..._t(e),...mt(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(F(r))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:x).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:x;this._$Em=r,this[r]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??W)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[U("elementProperties")]=new Map,v[U("finalized")]=new Map,St?.({ReactiveElement:v}),(L.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,H=q.trustedTypes,Q=H?H.createPolicy("lit-html",{createHTML:s=>s}):void 0,nt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+m,vt=`<${ot}>`,S=document,O=()=>S.createComment(""),T=s=>s===null||typeof s!="object"&&typeof s!="function",K=Array.isArray,Et=s=>K(s)||typeof s?.[Symbol.iterator]=="function",Y=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,tt=/>/g,A=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,ht=/^(?:script|style|textarea|title)$/i,bt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),wt=bt(1),E=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),it=new WeakMap,y=S.createTreeWalker(S,129);function at(s,t){if(!K(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const Ut=(s,t)=>{const e=s.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=w;for(let c=0;c<e;c++){const h=s[c];let d,u,a=-1,f=0;for(;f<h.length&&(o.lastIndex=f,u=o.exec(h),u!==null);)f=o.lastIndex,o===w?u[1]==="!--"?o=X:u[1]!==void 0?o=tt:u[2]!==void 0?(ht.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=r??w,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?A:u[3]==='"'?st:et):o===st||o===et?o=A:o===X||o===tt?o=w:(o=A,r=void 0);const _=o===A&&s[c+1].startsWith("/>")?" ":"";n+=o===w?h+vt:a>=0?(i.push(d),h.slice(0,a)+nt+h.slice(a)+m+_):h+m+(a===-2?c:_)}return[at(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const c=t.length-1,h=this.parts,[d,u]=Ut(t,e);if(this.el=N.createElement(d,i),y.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=y.nextNode())!==null&&h.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const a of r.getAttributeNames())if(a.endsWith(nt)){const f=u[o++],_=r.getAttribute(a).split(m),I=/([.?@])?(.*)/.exec(f);h.push({type:1,index:n,name:I[2],strings:_,ctor:I[1]==="."?Pt:I[1]==="?"?Ot:I[1]==="@"?Tt:z}),r.removeAttribute(a)}else a.startsWith(m)&&(h.push({type:6,index:n}),r.removeAttribute(a));if(ht.test(r.tagName)){const a=r.textContent.split(m),f=a.length-1;if(f>0){r.textContent=H?H.emptyScript:"";for(let _=0;_<f;_++)r.append(a[_],O()),y.nextNode(),h.push({type:2,index:++n});r.append(a[f],O())}}}else if(r.nodeType===8)if(r.data===ot)h.push({type:2,index:n});else{let a=-1;for(;(a=r.data.indexOf(m,a+1))!==-1;)h.push({type:7,index:n}),a+=m.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function b(s,t,e=s,i){if(t===E)return t;let r=i!==void 0?e.o?.[i]:e.l;const n=T(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,i)),i!==void 0?(e.o??=[])[i]=r:e.l=r),r!==void 0&&(t=b(s,r._$AS(s,t.values),r,i)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??S).importNode(e,!0);y.currentNode=r;let n=y.nextNode(),o=0,c=0,h=i[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new R(n,n.nextSibling,this,t):h.type===1?d=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(d=new Nt(n,this,t)),this._$AV.push(d),h=i[++c]}o!==h?.index&&(n=y.nextNode(),o++)}return y.currentNode=S,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,r){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this.v=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),T(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(at(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const n=new Ct(r,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new N(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new R(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this.v=t,this._$AP?.(t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const c=t;let h,d;for(t=n[0],h=0;h<n.length-1;h++)d=b(this,c[i+h],e,h),d===E&&(d=this._$AH[h]),o||=!T(d)||d!==this._$AH[h],d===l?t=l:t!==l&&(t+=(d??"")+n[h+1]),this._$AH[h]=d}o&&!r&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}}class Ot extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}}class Tt extends z{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??l)===E)return;const i=this._$AH,r=t===l&&i!==l||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==l&&(i===l||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const Rt=q.litHtmlPolyfillSupport;Rt?.(N,R),(q.litHtmlVersions??=[]).push("3.2.0");const It=(s,t,e)=>{const i=e?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const n=e?.renderBefore??null;i._$litPart$=r=new R(t.insertBefore(O(),n),n,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class C extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return E}}C._$litElement$=!0,C.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:C});const Mt=globalThis.litElementPolyfillSupport;Mt?.({LitElement:C});(globalThis.litElementVersions??=[]).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:W},kt=(s=Ht,t,e)=>{const{kind:i,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,h,s)},init(c){return c!==void 0&&this.P(o,void 0,s),c}}}if(i==="setter"){const{name:o}=e;return function(c){const h=this[o];t.call(this,c),this.requestUpdate(o,h,s)}}throw Error("Unsupported decorator location: "+i)};function g(s){return(t,e)=>typeof e=="object"?kt(s,t,e):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yt=s=>(...t)=>({_$litDirective$:s,values:t});let Dt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),P(i,t);return!0},k=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},ct=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Gt(t)}};function jt(s){this._$AN!==void 0?(k(this),this._$AM=s,ct(this)):this._$AM=s}function Bt(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)P(i[n],!1),k(i[n]);else i!=null&&(P(i,!1),k(i));else P(this,s)}const Gt=s=>{s.type==zt.CHILD&&(s._$AP??=Bt,s._$AQ??=jt)};class Wt extends Dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ct(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(P(this,t),k(this))}setValue(t){if(Lt(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=()=>new Kt;class Kt{}const D=new WeakMap,Vt=Yt(class extends Wt{render(s){return l}update(s,[t]){const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),l}rt(s){if(this.isConnected||(s=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=D.get(t);e===void 0&&(e=new WeakMap,D.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){return typeof this.Y=="function"?D.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ft=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,$=(s,t,e,i)=>{for(var r=i>1?void 0:i?Jt(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&Ft(t,e,r),r};function Zt(s){return customElements.get(s)?t=>t:xt(s)}let p=class extends C{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=qt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var s;return(s=this._iframeRef)==null?void 0:s.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(s){return`[giscus] An error occurred. Error message: "${s}".`}setupSession(){const s=location.href,t=new URL(s),e=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")??"";if(this.__session="",i){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(e)try{this.__session=JSON.parse(e)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(r?.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(s){if(s.origin!==this._host)return;const{data:t}=s;if(!(typeof t=="object"&&t.giscus))return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!t.giscus.error)return;const e=t.giscus.error;if(e.includes("Bad credentials")||e.includes("Invalid state value")||e.includes("State has expired")){if(localStorage.getItem(this.GISCUS_SESSION_KEY)!==null){console.warn(`${this._formatError(e)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(e)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(e.includes("Discussion not found")){console.warn(`[giscus] ${e}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(e)} ${this.ERROR_SUGGESTION}`)}sendMessage(s){var t;!((t=this.iframeRef)!=null&&t.contentWindow)||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:s},this._host)}updateConfig(){const s={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:this.strict==="1",reactionsEnabled:this.reactionsEnabled==="1",emitMetadata:this.emitMetadata==="1",inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(s)}firstUpdated(){var s;(s=this.iframeRef)==null||s.addEventListener("load",()=>{var t;(t=this.iframeRef)==null||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(s,t,e){if(!this.hasUpdated||s==="host"){super.requestUpdate(s,t,e);return}this.updateConfig()}getMetaContent(s,t=!1){const e=t?`meta[property='og:${s}'],`:"",i=document.querySelector(e+`meta[name='${s}']`);return i?i.content:""}_getCleanedUrl(){const s=new URL(location.href);return s.searchParams.delete("giscus"),s.hash="",s}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return this.mapping==="number"?this.term??"":""}getIframeSrc(){const s=this._getCleanedUrl().toString(),t=`${s}${this.id?"#"+this.id:""}`,e=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||s,r={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:e,backLink:i},n=this._host,o=this.lang?`/${this.lang}`:"",c=new URLSearchParams(r);return`${n}${o}/widget?${c.toString()}`}render(){return wt`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${Vt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};p.styles=pt`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;$([g({reflect:!0})],p.prototype,"host",2);$([g({reflect:!0})],p.prototype,"repo",2);$([g({reflect:!0})],p.prototype,"repoId",2);$([g({reflect:!0})],p.prototype,"category",2);$([g({reflect:!0})],p.prototype,"categoryId",2);$([g({reflect:!0})],p.prototype,"mapping",2);$([g({reflect:!0})],p.prototype,"term",2);$([g({reflect:!0})],p.prototype,"strict",2);$([g({reflect:!0})],p.prototype,"reactionsEnabled",2);$([g({reflect:!0})],p.prototype,"emitMetadata",2);$([g({reflect:!0})],p.prototype,"inputPosition",2);$([g({reflect:!0})],p.prototype,"theme",2);$([g({reflect:!0})],p.prototype,"lang",2);$([g({reflect:!0})],p.prototype,"loading",2);p=$([Zt("giscus-widget")],p);const Qt=new URLSearchParams(window.location.search),j=Qt.get("page");if(j&&j!=="1"){const s=document.getElementById("posts-go-back");s&&"href"in s&&(s.href=lt(Number(j)))}
