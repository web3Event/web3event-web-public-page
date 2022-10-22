import{W as R,A as _,bk as j,bl as k}from"./index.46af8f58.js";let d,m;const q=()=>{var n,e;d=j?(e=(n=document)===null||n===void 0?void 0:n.fonts)===null||e===void 0?void 0:e.ready:void 0,m=!1,d!==void 0?d.then(()=>{m=!0}):m=!0};q();function K(n){if(m)return;let e=!1;R(()=>{m||d==null||d.then(()=>{e||n()})}),_(()=>{e=!0})}function B(n){let e=0;for(let t=0;t<n.length;++t)n[t]==="&"&&++e;return e}const v=/\s*,(?![^(]*\))\s*/g,M=/\s+/g;function S(n,e){const t=[];return e.split(v).forEach(r=>{let u=B(r);if(u){if(u===1){n.forEach(i=>{t.push(r.replace("&",i))});return}}else{n.forEach(i=>{t.push((i&&i+" ")+r)});return}let o=[r];for(;u--;){const i=[];o.forEach(f=>{n.forEach(l=>{i.push(f.replace("&",l))})}),o=i}o.forEach(i=>t.push(i))}),t}function L(n,e){const t=[];return e.split(v).forEach(r=>{n.forEach(u=>{t.push((u&&u+" ")+r)})}),t}function O(n){let e=[""];return n.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?e=S(e,t):e=L(e,t))}),e.join(", ").replace(M," ")}function g(n){if(!n)return;const e=n.parentElement;e&&e.removeChild(n)}function E(n){return document.head.querySelector(`style[cssr-id="${n}"]`)}function W(n){const e=document.createElement("style");return e.setAttribute("cssr-id",n),e}function p(n){return n?/^\s*@(s|m)/.test(n):!1}const F=/[A-Z]/g;function C(n){return n.replace(F,e=>"-"+e.toLowerCase())}function T(n,e="  "){return typeof n=="object"&&n!==null?` {
`+Object.entries(n).map(t=>e+`  ${C(t[0])}: ${t[1]};`).join(`
`)+`
`+e+"}":`: ${n};`}function U(n,e,t){return typeof n=="function"?n({context:e.context,props:t}):n}function $(n,e,t,r){if(!e)return"";const u=U(e,t,r);if(!u)return"";if(typeof u=="string")return`${n} {
${u}
}`;const o=Object.keys(u);if(o.length===0)return t.config.keepEmptyBlock?n+` {
}`:"";const i=n?[n+" {"]:[];return o.forEach(f=>{const l=u[f];if(f==="raw"){i.push(`
`+l+`
`);return}f=C(f),l!=null&&i.push(`  ${f}${T(l)}`)}),n&&i.push("}"),i.join(`
`)}function x(n,e,t){!n||n.forEach(r=>{if(Array.isArray(r))x(r,e,t);else if(typeof r=="function"){const u=r(e);Array.isArray(u)?x(u,e,t):u&&t(u)}else r&&t(r)})}function A(n,e,t,r,u,o){const i=n.$;let f="";if(!i||typeof i=="string")p(i)?f=i:e.push(i);else if(typeof i=="function"){const s=i({context:r.context,props:u});p(s)?f=s:e.push(s)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")p(i.$)?f=i.$:e.push(i.$);else if(i.$){const s=i.$({context:r.context,props:u});p(s)?f=s:e.push(s)}const l=O(e),c=$(l,n.props,r,u);f?(t.push(`${f} {`),o&&c&&o.insertRule(`${f} {
${c}
}
`)):(o&&c&&o.insertRule(c),!o&&c.length&&t.push(c)),n.children&&x(n.children,{context:r.context,props:u},s=>{if(typeof s=="string"){const a=$(l,{raw:s},r,u);o?o.insertRule(a):t.push(a)}else A(s,e,t,r,u,o)}),e.pop(),f&&t.push("}"),i&&i.after&&i.after(r.context)}function b(n,e,t,r=!1){const u=[];return A(n,[],u,e,t,r?n.instance.__styleSheet:void 0),r?"":u.join(`

`)}typeof window!="undefined"&&(window.__cssrContext={});function N(n,e,t){const{els:r}=e;if(t===void 0)r.forEach(g),e.els=[];else{const u=E(t);u&&r.includes(u)&&(g(u),e.els=r.filter(o=>o!==u))}}function w(n,e){n.push(e)}function Z(n,e,t,r,u,o,i,f,l){if(o&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[t]||(h[t]=!0,b(e,n,r,o));return}let c;if(t===void 0&&(c=e.render(r),t=k(c)),l){l.adapter(t,c!=null?c:e.render(r));return}const s=E(t);if(s!==null&&!i)return s;const a=s!=null?s:W(t);if(c===void 0&&(c=e.render(r)),a.textContent=c,s!==null)return s;if(f){const h=document.head.querySelector(`meta[name="${f}"]`);if(h)return document.head.insertBefore(a,h),w(e.els,a),a}return u?document.head.insertBefore(a,document.head.querySelector("style, link")):document.head.appendChild(a),w(e.els,a),a}function z(n){return b(this,this.instance,n)}function D(n={}){const{id:e,ssr:t,props:r,head:u=!1,silent:o=!1,force:i=!1,anchorMetaName:f}=n;return Z(this.instance,this,e,r,u,o,i,f,t)}function G(n={}){const{id:e}=n;N(this.instance,this,e)}const y=function(n,e,t,r){return{instance:n,$:e,props:t,children:r,els:[],render:z,mount:D,unmount:G}},H=function(n,e,t,r){return Array.isArray(e)?y(n,{$:null},null,e):Array.isArray(t)?y(n,e,null,t):Array.isArray(r)?y(n,e,t,r):y(n,e,t,null)};function I(n={}){let e=null;const t={c:(...r)=>H(t,...r),use:(r,...u)=>r.install(t,...u),find:E,context:{},config:n,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return t}const{c:Q}=I(),V="vueuc-style";export{V as a,Q as c,K as o};
