import{d as M,r as P,aC as dt,i as d,ag as ct,aD as G,aE as ft,a as v,b as C,c as R,e as q,u as Ce,g as O,h as Re,ae as bt,ap as Se,aF as ut,P as vt,x as ze,aG as pt,a1 as ht,O as gt,aq as mt,aH as xt,aI as yt,H as B,R as wt,aJ as Q,z as ee,Y as Ct,K as I,X as Rt,$ as ue,a2 as ve,a7 as Y,a4 as te,aK as St,aL as zt,aM as Tt,aN as $t,j as k,aO as Pt}from"./index.46af8f58.js";import{f as _t,u as pe}from"./use-compitable.7c679801.js";import{u as Wt}from"./use-merged-state.8eed7768.js";import{c as he,a as Lt,o as At}from"./cssr.7bf6fc45.js";const Et=he(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[he("&::-webkit-scrollbar",{width:0,height:0})]);var Bt=M({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function a(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const r=dt();return Et.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Lt,ssr:r}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...i){var o;(o=e.value)===null||o===void 0||o.scrollTo(...i)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),kt=/\s/;function jt(e){for(var a=e.length;a--&&kt.test(e.charAt(a)););return a}var It=/^\s+/;function Ot(e){return e&&e.slice(0,jt(e)+1).replace(It,"")}var ge=0/0,Ft=/^[-+]0x[0-9a-f]+$/i,Dt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Nt=parseInt;function me(e){if(typeof e=="number")return e;if(ct(e))return ge;if(G(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=G(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Ot(e);var r=Dt.test(e);return r||Mt.test(e)?Nt(e.slice(2),r?2:8):Ft.test(e)?ge:+e}var Ht=function(){return ft.Date.now()},ae=Ht,Vt="Expected a function",Xt=Math.max,Ut=Math.min;function Kt(e,a,r){var l,i,o,f,c,h,g=0,y=!1,m=!1,p=!0;if(typeof e!="function")throw new TypeError(Vt);a=me(a)||0,G(r)&&(y=!!r.leading,m="maxWait"in r,o=m?Xt(me(r.maxWait)||0,a):o,p="trailing"in r?!!r.trailing:p);function w(x){var W=l,L=i;return l=i=void 0,g=x,f=e.apply(L,W),f}function S(x){return g=x,c=setTimeout(T,a),y?w(x):f}function z(x){var W=x-h,L=x-g,H=a-W;return m?Ut(H,o-L):H}function u(x){var W=x-h,L=x-g;return h===void 0||W>=a||W<0||m&&L>=o}function T(){var x=ae();if(u(x))return $(x);c=setTimeout(T,z(x))}function $(x){return c=void 0,p&&l?w(x):(l=i=void 0,f)}function _(){c!==void 0&&clearTimeout(c),g=0,l=h=i=c=void 0}function V(){return c===void 0?f:$(ae())}function N(){var x=ae(),W=u(x);if(l=arguments,i=this,h=x,W){if(c===void 0)return S(h);if(m)return clearTimeout(c),c=setTimeout(T,a),w(h)}return c===void 0&&(c=setTimeout(T,a)),f}return N.cancel=_,N.flush=V,N}var Yt="Expected a function";function ne(e,a,r){var l=!0,i=!0;if(typeof e!="function")throw new TypeError(Yt);return G(r)&&(l="leading"in r?!!r.leading:l,i="trailing"in r?!!r.trailing:i),Kt(e,a,{leading:l,maxWait:a,trailing:i})}var Gt=M({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),qt=v("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[C("color-transition",{transition:"color .3s var(--n-bezier)"}),C("depth",{color:"var(--n-color)"},[R("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),R("svg",{height:"1em",width:"1em"})]);const Jt=Object.assign(Object.assign({},q.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),ia=M({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Jt,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:r}=Ce(e),l=q("Icon","-icon",qt,ut,e,a),i=O(()=>{const{depth:f}=e,{common:{cubicBezierEaseInOut:c},self:h}=l.value;if(f!==void 0){const{color:g,[`opacity${f}Depth`]:y}=h;return{"--n-bezier":c,"--n-color":g,"--n-opacity":y}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),o=r?Re("icon",O(()=>`${e.depth||"d"}`),i,e):void 0;return{mergedClsPrefix:a,mergedStyle:O(()=>{const{size:f,color:c}=e;return{fontSize:_t(f),color:c}}),cssVars:r?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:a,depth:r,mergedClsPrefix:l,component:i,onRender:o,themeClass:f}=this;return!((e=a==null?void 0:a.$options)===null||e===void 0)&&e._n_icon__&&bt("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),d("i",Se(this.$attrs,{role:"img",class:[`${l}-icon`,f,{[`${l}-icon--depth`]:r,[`${l}-icon--color-transition`]:r!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?d(i):this.$slots)}}),oe=vt("n-tabs"),Te={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};M({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Te,setup(e){const a=ze(oe,null);return a||pt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return d("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Zt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},yt(Te,["displayDirective"]));var ie=M({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Zt,setup(e){const{mergedClsPrefixRef:a,valueRef:r,typeRef:l,closableRef:i,tabStyleRef:o,tabChangeIdRef:f,onBeforeLeaveRef:c,triggerRef:h,handleAdd:g,activateTab:y,handleClose:m}=ze(oe);return{trigger:h,mergedClosable:O(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?i.value:p}),style:o,clsPrefix:a,value:r,type:l,handleClose(p){p.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){g();return}const{name:p}=e,w=++f.id;if(p!==r.value){const{value:S}=c;S?Promise.resolve(S(e.name,r.value)).then(z=>{z&&f.id===w&&y(p)}):y(p)}}}},render(){const{internalAddable:e,clsPrefix:a,name:r,disabled:l,label:i,tab:o,value:f,mergedClosable:c,style:h,trigger:g,$slots:{default:y}}=this,m=i!=null?i:o;return d("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${a}-tabs-tab-pad`}):null,d("div",Object.assign({key:r,"data-name":r,"data-disabled":l?!0:void 0},Se({class:[`${a}-tabs-tab`,f===r&&`${a}-tabs-tab--active`,l&&`${a}-tabs-tab--disabled`,c&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:g==="click"?this.activateTab:void 0,onMouseenter:g==="hover"?this.activateTab:void 0,style:e?void 0:h},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${a}-tabs-tab__label`},e?d(ht,null,d("div",{class:`${a}-tabs-tab__height-placeholder`},"\xA0"),d(gt,{clsPrefix:a},{default:()=>d(Gt,null)})):y?y():typeof m=="object"?m:mt(m!=null?m:r)),c&&this.type==="card"?d(xt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:l}):null))}}),Qt=v("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[C("segment-type",[v("tabs-rail",[R("&.transition-disabled","color: red;",[v("tabs-tab",`
 transition: none;
 `)])])]),v("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[v("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[v("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),C("flex",[v("tabs-nav",{width:"100%"},[v("tabs-wrapper",{width:"100%"},[v("tabs-tab",{marginRight:0})])])]),v("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[B("prefix, suffix",`
 display: flex;
 align-items: center;
 `),B("prefix","padding-right: 16px;"),B("suffix","padding-left: 16px;")]),v("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("shadow-before",[R("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),C("shadow-after",[R("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),R("&::before",`
 left: 0;
 `),R("&::after",`
 right: 0;
 `)]),v("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),v("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),v("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),v("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("disabled",{cursor:"not-allowed"}),B("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("label",`
 display: flex;
 align-items: center;
 `)]),v("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[R("&.transition-disabled",`
 transition: none;
 `),C("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),v("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),v("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[R("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),R("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),R("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),R("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),R("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),v("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),C("line-type, bar-type",[v("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[R("&:hover",{color:"var(--n-tab-text-color-hover)"}),C("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),C("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),v("tabs-nav",[C("line-type",[B("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),C("card-type",[B("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[C("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[B("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),wt("disabled",[R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),C("closable","padding-right: 6px;"),C("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),C("disabled","color: var(--n-tab-text-color-disabled);")]),v("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const ea=Object.assign(Object.assign({},q.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var oa=M({name:"Tabs",props:ea,setup(e,{slots:a}){var r,l,i,o;const{mergedClsPrefixRef:f,inlineThemeDisabled:c}=Ce(e),h=q("Tabs","-tabs",Qt,$t,e,f),g=P(null),y=P(null),m=P(null),p=P(null),w=P(null),S=P(!0),z=P(!0),u=pe(e,["labelSize","size"]),T=pe(e,["activeName","value"]),$=P((l=(r=T.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&l!==void 0?l:a.default?(o=(i=Q(a.default())[0])===null||i===void 0?void 0:i.props)===null||o===void 0?void 0:o.name:null),_=Wt(T,$),V={id:0},N=O(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ee(_,()=>{V.id=0,L(),H()});function x(){var t;const{value:n}=_;return n===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${n}"]`)}function W(t){if(e.type==="card")return;const{value:n}=y;if(!!n&&t){const s=`${f.value}-tabs-bar--disabled`,{barWidth:b}=e;if(t.dataset.disabled==="true"?n.classList.add(s):n.classList.remove(s),typeof b=="number"&&t.offsetWidth>=b){const A=Math.floor((t.offsetWidth-b)/2)+t.offsetLeft;n.style.left=`${A}px`,n.style.maxWidth=`${b}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}}function L(){if(e.type==="card")return;const t=x();t&&W(t)}function H(t){var n;const s=(n=w.value)===null||n===void 0?void 0:n.$el;if(!s)return;const b=x();if(!b)return;const{scrollLeft:A,offsetWidth:j}=s,{offsetLeft:D,offsetWidth:K}=b;A>D?s.scrollTo({top:0,left:D,behavior:"smooth"}):D+K>A+j&&s.scrollTo({top:0,left:D+K-j,behavior:"smooth"})}const X=P(null);let J=0,E=null;function $e(t){const n=X.value;if(n){J=t.getBoundingClientRect().height;const s=`${J}px`,b=()=>{n.style.height=s,n.style.maxHeight=s};E?(b(),E(),E=null):E=b}}function Pe(t){const n=X.value;if(n){const s=t.getBoundingClientRect().height,b=()=>{document.body.offsetHeight,n.style.maxHeight=`${s}px`,n.style.height=`${Math.max(J,s)}px`};E?(E(),E=null,b()):E=b}}function _e(){const t=X.value;t&&(t.style.maxHeight="",t.style.height="")}const se={value:[]},le=P("next");function We(t){const n=_.value;let s="next";for(const b of se.value){if(b===n)break;if(b===t){s="prev";break}}le.value=s,Le(t)}function Le(t){const{onActiveNameChange:n,onUpdateValue:s,"onUpdate:value":b}=e;n&&Y(n,t),s&&Y(s,t),b&&Y(b,t),$.value=t}function Ae(t){const{onClose:n}=e;n&&Y(n,t)}function de(){const{value:t}=y;if(!t)return;const n="transition-disabled";t.classList.add(n),L(),t.classList.remove(n)}let ce=0;function Ee(t){var n;if(t.contentRect.width===0&&t.contentRect.height===0||ce===t.contentRect.width)return;ce=t.contentRect.width;const{type:s}=e;(s==="line"||s==="bar")&&de(),s!=="segment"&&Z((n=w.value)===null||n===void 0?void 0:n.$el)}const Be=ne(Ee,64);ee([()=>e.justifyContent,()=>e.size],()=>{te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&de()})});const U=P(!1);function ke(t){var n;const{target:s,contentRect:{width:b}}=t,A=s.parentElement.offsetWidth;if(!U.value)A<b&&(U.value=!0);else{const{value:j}=p;if(!j)return;A-b>j.$el.offsetWidth&&(U.value=!1)}Z((n=w.value)===null||n===void 0?void 0:n.$el)}const je=ne(ke,64);function Ie(){const{onAdd:t}=e;t&&t(),te(()=>{const n=x(),{value:s}=w;!n||!s||s.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function Z(t){if(!t)return;const{scrollLeft:n,scrollWidth:s,offsetWidth:b}=t;S.value=n<=0,z.value=n+b>=s}const Oe=ne(t=>{Z(t.target)},64);Ct(oe,{triggerRef:I(e,"trigger"),tabStyleRef:I(e,"tabStyle"),paneClassRef:I(e,"paneClass"),paneStyleRef:I(e,"paneStyle"),mergedClsPrefixRef:f,typeRef:I(e,"type"),closableRef:I(e,"closable"),valueRef:_,tabChangeIdRef:V,onBeforeLeaveRef:I(e,"onBeforeLeave"),activateTab:We,handleClose:Ae,handleAdd:Ie}),At(()=>{L(),H()}),Rt(()=>{const{value:t}=m;if(!t)return;const{value:n}=f,s=`${n}-tabs-nav-scroll-wrapper--shadow-before`,b=`${n}-tabs-nav-scroll-wrapper--shadow-after`;S.value?t.classList.remove(s):t.classList.add(s),z.value?t.classList.remove(b):t.classList.add(b)});const fe=P(null);ee(_,()=>{if(e.type==="segment"){const t=fe.value;t&&te(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Fe={syncBarPosition:()=>{L()}},be=O(()=>{const{value:t}=u,{type:n}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],b=`${t}${s}`,{self:{barColor:A,closeIconColor:j,closeIconColorHover:D,closeIconColorPressed:K,tabColor:De,tabBorderColor:Me,paneTextColor:Ne,tabFontWeight:He,tabBorderRadius:Ve,tabFontWeightActive:Xe,colorSegment:Ue,fontWeightStrong:Ke,tabColorSegment:Ye,closeSize:Ge,closeIconSize:qe,closeColorHover:Je,closeColorPressed:Ze,closeBorderRadius:Qe,[k("panePadding",t)]:et,[k("tabPadding",b)]:tt,[k("tabGap",b)]:at,[k("tabTextColor",n)]:nt,[k("tabTextColorActive",n)]:rt,[k("tabTextColorHover",n)]:it,[k("tabTextColorDisabled",n)]:ot,[k("tabFontSize",t)]:st},common:{cubicBezierEaseInOut:lt}}=h.value;return{"--n-bezier":lt,"--n-color-segment":Ue,"--n-bar-color":A,"--n-tab-font-size":st,"--n-tab-text-color":nt,"--n-tab-text-color-active":rt,"--n-tab-text-color-disabled":ot,"--n-tab-text-color-hover":it,"--n-pane-text-color":Ne,"--n-tab-border-color":Me,"--n-tab-border-radius":Ve,"--n-close-size":Ge,"--n-close-icon-size":qe,"--n-close-color-hover":Je,"--n-close-color-pressed":Ze,"--n-close-border-radius":Qe,"--n-close-icon-color":j,"--n-close-icon-color-hover":D,"--n-close-icon-color-pressed":K,"--n-tab-color":De,"--n-tab-font-weight":He,"--n-tab-font-weight-active":Xe,"--n-tab-padding":tt,"--n-tab-gap":at,"--n-pane-padding":et,"--n-font-weight-strong":Ke,"--n-tab-color-segment":Ye}}),F=c?Re("tabs",O(()=>`${u.value[0]}${e.type[0]}`),be,e):void 0;return Object.assign({mergedClsPrefix:f,mergedValue:_,renderedNames:new Set,tabsRailElRef:fe,tabsPaneWrapperRef:X,tabsElRef:g,barElRef:y,addTabInstRef:p,xScrollInstRef:w,scrollWrapperElRef:m,addTabFixed:U,tabWrapperStyle:N,handleNavResize:Be,mergedSize:u,handleScroll:Oe,handleTabsResize:je,cssVars:c?void 0:be,themeClass:F==null?void 0:F.themeClass,animationDirection:le,renderNameListRef:se,onAnimationBeforeLeave:$e,onAnimationEnter:Pe,onAnimationAfterEnter:_e,onRender:F==null?void 0:F.onRender},Fe)},render(){const{mergedClsPrefix:e,type:a,addTabFixed:r,addable:l,mergedSize:i,renderNameListRef:o,onRender:f,$slots:{default:c,prefix:h,suffix:g}}=this;f==null||f();const y=c?Q(c()).filter(u=>u.type.__TAB_PANE__===!0):[],m=c?Q(c()).filter(u=>u.type.__TAB__===!0):[],p=!m.length,w=a==="card",S=a==="segment",z=!w&&!S&&this.justifyContent;return o.value=[],d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${i}-size`,z&&`${e}-tabs--flex`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav`]},ue(h,u=>u&&d("div",{class:`${e}-tabs-nav__prefix`},u)),S?d("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},p?y.map((u,T)=>(o.value.push(u.props.name),d(ie,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0}),u.children?{default:u.children.tab}:void 0))):m.map((u,T)=>(o.value.push(u.props.name),T===0?u:we(u)))):d(ve,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},d(Bt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const u=d("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),p?y.map(($,_)=>(o.value.push($.props.name),re(d(ie,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0&&(!z||z==="center"||z==="start"||z==="end")}),$.children?{default:$.children.tab}:void 0)))):m.map(($,_)=>(o.value.push($.props.name),re(_!==0&&!z?we($):$))),!r&&l&&w?ye(l,(p?y.length:m.length)!==0):null,z?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let T=u;return w&&l&&(T=d(ve,{onResize:this.handleTabsResize},{default:()=>u})),d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T,w?d("div",{class:`${e}-tabs-pad`}):null,w?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),r&&l&&w?ye(l,!0):null,ue(g,u=>u&&d("div",{class:`${e}-tabs-nav__suffix`},u))),p&&(this.animated?d("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},xe(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):xe(y,this.mergedValue,this.renderedNames)))}});function xe(e,a,r,l,i,o,f){const c=[];return e.forEach(h=>{const{name:g,displayDirective:y,"display-directive":m}=h.props,p=S=>y===S||m===S,w=a===g;if(h.key!==void 0&&(h.key=g),w||p("show")||p("show:lazy")&&r.has(g)){r.has(g)||r.add(g);const S=!p("if");c.push(S?St(h,[[Pt,w]]):h)}}),f?d(zt,{name:`${f}-transition`,onBeforeLeave:l,onEnter:i,onAfterEnter:o},{default:()=>c}):c}function ye(e,a){return d(ie,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function we(e){const a=Tt(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function re(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ia as N,oa as _,ie as a};
