import{r as F,z as we,aj as eo,ak as oo,al as to,A as no,a8 as ue,am as ro,a5 as ve,d as O,i as d,e as ae,an as io,g as f,P as oe,x as j,ao as $e,Y as L,V as ee,T as lo,ap as Te,aq as q,ae as ao,a1 as ye,ar as co,as as so,at as uo,a as p,au as vo,c as y,R as le,b as _,H as m,K as E,u as Me,av as ho,a7 as U,j as J,h as je,aw as me,O as mo,ax as po,aa as Ce,ay as fo,az as go,X as Ne,o as te,m as ne,n as M,l as de,q as ce,w as xo,aA as ie,k as bo}from"./index.36c17873.js";import{N as ge}from"./Tabs.3efd8009.js";import{N as Fe,p as ze,V as wo,a as yo,b as Co,h as Ae,r as zo,c as Ee}from"./Popover.0835b5a3.js";import{u as xe}from"./use-merged-state.5adb7a80.js";import{u as Io}from"./use-compitable.6001ac25.js";import{P as So,M as ko}from"./PeopleOutline.7254a2ee.js";import _o from"./home.46c781b1.js";import"./cssr.8a7243fb.js";import"./get.b6359c6c.js";function Po(e){return o=>{o?e.value=o.$el:e.value=null}}function Ro(e,o,t){if(!o)return e;const l=F(e.value);let r=null;return we(e,a=>{r!==null&&window.clearTimeout(r),a===!0?t&&!t.value?l.value=!0:r=window.setTimeout(()=>{l.value=!0},o):l.value=!1}),l}function No(e={},o){const t=eo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:l,keyup:r}=e,a=c=>{switch(c.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}l!==void 0&&Object.keys(l).forEach(I=>{if(I!==c.key)return;const C=l[I];if(typeof C=="function")C(c);else{const{stop:S=!1,prevent:h=!1}=C;S&&c.stopPropagation(),h&&c.preventDefault(),C.handler(c)}})},s=c=>{switch(c.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(I=>{if(I!==c.key)return;const C=r[I];if(typeof C=="function")C(c);else{const{stop:S=!1,prevent:h=!1}=C;S&&c.stopPropagation(),h&&c.preventDefault(),C.handler(c)}})},u=()=>{(o===void 0||o.value)&&(ve("keydown",document,a),ve("keyup",document,s)),o!==void 0&&we(o,c=>{c?(ve("keydown",document,a),ve("keyup",document,s)):(ue("keydown",document,a),ue("keyup",document,s))})};return oo()?(to(u),no(()=>{(o===void 0||o.value)&&(ue("keydown",document,a),ue("keyup",document,s))})):u(),ro(t)}var Ao=O({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Oo=O({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const Ho=Object.assign(Object.assign({},ze),ae.props);var Ko=O({name:"Tooltip",props:Ho,__popover__:!0,setup(e){const o=ae("Tooltip","-tooltip",void 0,io,e),t=F(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(r){t.value.setShow(r)}}),{popoverRef:t,mergedTheme:o,popoverThemeOverrides:f(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return d(Fe,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Le=O({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}});const Ie=oe("n-dropdown-menu"),pe=oe("n-dropdown"),Oe=oe("n-dropdown-option");function be(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function $o(e){return e.type==="group"}function Be(e){return e.type==="divider"}function To(e){return e.type==="render"}var De=O({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=j(pe),{hoverKeyRef:t,keyboardKeyRef:l,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:a,activeKeyPathRef:s,animatedRef:u,mergedShowRef:c,renderLabelRef:I,renderIconRef:C,labelFieldRef:S,childrenFieldRef:h,renderOptionRef:N,nodePropsRef:K,menuPropsRef:$}=o,P=j(Oe,null),T=j(Ie),G=j($e),W=f(()=>e.tmNode.rawNode),B=f(()=>{const{value:x}=h;return be(e.tmNode.rawNode,x)}),D=f(()=>{const{disabled:x}=e.tmNode;return x}),re=f(()=>{if(!B.value)return!1;const{key:x,disabled:H}=e.tmNode;if(H)return!1;const{value:X}=t,{value:Z}=l,{value:fe}=r,{value:Y}=a;return X!==null?Y.includes(x):Z!==null?Y.includes(x)&&Y[Y.length-1]!==x:fe!==null?Y.includes(x):!1}),V=f(()=>l.value===null&&!u.value),b=Ro(re,300,V),w=f(()=>!!(P!=null&&P.enteringSubmenuRef.value)),n=F(!1);L(Oe,{enteringSubmenuRef:n});function g(){n.value=!0}function v(){n.value=!1}function R(){const{parentKey:x,tmNode:H}=e;H.disabled||!c.value||(r.value=x,l.value=null,t.value=H.key)}function k(){const{tmNode:x}=e;x.disabled||!c.value||t.value!==x.key&&R()}function z(x){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:H}=x;H&&!Ae({target:H},"dropdownOption")&&!Ae({target:H},"scrollbarRail")&&(t.value=null)}function i(){const{value:x}=B,{tmNode:H}=e;!c.value||!x&&!H.disabled&&(o.doSelect(H.key,H.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:I,renderIcon:C,siblingHasIcon:T.showIconRef,siblingHasSubmenu:T.hasSubmenuRef,menuProps:$,popoverBody:G,animated:u,mergedShowSubmenu:f(()=>b.value&&!w.value),rawNode:W,hasSubmenu:B,pending:ee(()=>{const{value:x}=a,{key:H}=e.tmNode;return x.includes(H)}),childActive:ee(()=>{const{value:x}=s,{key:H}=e.tmNode,X=x.findIndex(Z=>H===Z);return X===-1?!1:X<x.length-1}),active:ee(()=>{const{value:x}=s,{key:H}=e.tmNode,X=x.findIndex(Z=>H===Z);return X===-1?!1:X===x.length-1}),mergedDisabled:D,renderOption:N,nodeProps:K,handleClick:i,handleMouseMove:k,handleMouseEnter:R,handleMouseLeave:z,handleSubmenuBeforeEnter:g,handleSubmenuAfterEnter:v}},render(){var e,o;const{animated:t,rawNode:l,mergedShowSubmenu:r,clsPrefix:a,siblingHasIcon:s,siblingHasSubmenu:u,renderLabel:c,renderIcon:I,renderOption:C,nodeProps:S,props:h,scrollable:N}=this;let K=null;if(r){const G=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,l,l.children);K=d(Ve,Object.assign({},G,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const $={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},P=S==null?void 0:S(l),T=d("div",Object.assign({class:[`${a}-dropdown-option`,P==null?void 0:P.class],"data-dropdown-option":!0},P),d("div",Te($,h),[d("div",{class:[`${a}-dropdown-option-body__prefix`,s&&`${a}-dropdown-option-body__prefix--show-icon`]},[I?I(l):q(l.icon)]),d("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(l):q((o=l[this.labelField])!==null&&o!==void 0?o:l.title)),d("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,u&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(ge,null,{default:()=>d(Ao,null)}):null)]),this.hasSubmenu?d(wo,null,{default:()=>[d(yo,null,{default:()=>d("div",{class:`${a}-dropdown-offset-container`},d(Co,{show:this.mergedShowSubmenu,placement:this.placement,to:N&&this.popoverBody||void 0,teleportDisabled:!N},{default:()=>d("div",{class:`${a}-dropdown-menu-wrapper`},t?d(lo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>K}):K)}))})]}):null);return C?C({node:T,option:l}):T}}),Mo=O({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=j(Ie),{renderLabelRef:t,labelFieldRef:l,nodePropsRef:r,renderOptionRef:a}=j(pe);return{labelField:l,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:a}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:l,nodeProps:r,renderLabel:a,renderOption:s}=this,{rawNode:u}=this.tmNode,c=d("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(u)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,l&&`${o}-dropdown-option-body__prefix--show-icon`]},q(u.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(u):q((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return s?s({node:c,option:u}):c}}),jo=O({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:l}=e;return d(ye,null,d(Mo,{clsPrefix:t,tmNode:e,key:e.key}),l==null?void 0:l.map(r=>{const{rawNode:a}=r;return a.show===!1?null:Be(a)?d(Le,{clsPrefix:t,key:r.key}):r.isGroup?(ao("dropdown","`group` node is not allowed to be put in `group` node."),null):d(De,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),Fo=O({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),Ve=O({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=j(pe);L(Ie,{showIconRef:f(()=>{const r=o.value;return e.tmNodes.some(a=>{var s;if(a.isGroup)return(s=a.children)===null||s===void 0?void 0:s.some(({rawNode:c})=>r?r(c):c.icon);const{rawNode:u}=a;return r?r(u):u.icon})}),hasSubmenuRef:f(()=>{const{value:r}=t;return e.tmNodes.some(a=>{var s;if(a.isGroup)return(s=a.children)===null||s===void 0?void 0:s.some(({rawNode:c})=>be(c,r));const{rawNode:u}=a;return be(u,r)})})});const l=F(null);return L(co,null),L(so,null),L($e,l),{bodyRef:l}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,l=this.tmNodes.map(r=>{const{rawNode:a}=r;return a.show===!1?null:To(a)?d(Fo,{tmNode:r,key:r.key}):Be(a)?d(Le,{clsPrefix:o,key:r.key}):$o(a)?d(jo,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):d(De,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:a.props,scrollable:t})});return d("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?d(uo,{contentClass:`${o}-dropdown-menu__content`},{default:()=>l}):l,this.showArrow?zo({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Eo=p("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[vo(),p("dropdown-option",`
 position: relative;
 `,[y("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[y("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),p("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[y("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[_("pending",`
 color: var(--n-option-text-color-hover);
 `,[m("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),y("&::before","background-color: var(--n-option-color-hover);")]),_("active",`
 color: var(--n-option-text-color-active);
 `,[m("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),y("&::before","background-color: var(--n-option-color-active);")]),_("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[m("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),_("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),_("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[m("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[_("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),m("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[_("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),p("icon",`
 font-size: var(--n-option-icon-size);
 `)]),m("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),m("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[_("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),p("icon",`
 font-size: var(--n-option-icon-size);
 `)]),p("dropdown-menu","pointer-events: all;")]),p("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),p("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),p("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),y(">",[p("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),_("scrollable",[m("content",`
 padding: var(--n-padding);
 `)])]);const Lo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Bo=Object.keys(ze),Do=Object.assign(Object.assign(Object.assign({},ze),Lo),ae.props);var Vo=O({name:"Dropdown",inheritAttrs:!1,props:Do,setup(e){const o=F(!1),t=xe(E(e,"show"),o),l=f(()=>{const{keyField:v,childrenField:R}=e;return Ee(e.options,{getKey(k){return k[v]},getDisabled(k){return k.disabled===!0},getIgnored(k){return k.type==="divider"||k.type==="render"},getChildren(k){return k[R]}})}),r=f(()=>l.value.treeNodes),a=F(null),s=F(null),u=F(null),c=f(()=>{var v,R,k;return(k=(R=(v=a.value)!==null&&v!==void 0?v:s.value)!==null&&R!==void 0?R:u.value)!==null&&k!==void 0?k:null}),I=f(()=>l.value.getPath(c.value).keyPath),C=f(()=>l.value.getPath(e.value).keyPath),S=ee(()=>e.keyboard&&t.value);No({keydown:{ArrowUp:{prevent:!0,handler:D},ArrowRight:{prevent:!0,handler:B},ArrowDown:{prevent:!0,handler:re},ArrowLeft:{prevent:!0,handler:W},Enter:{prevent:!0,handler:V},Escape:G}},S);const{mergedClsPrefixRef:h,inlineThemeDisabled:N}=Me(e),K=ae("Dropdown","-dropdown",Eo,ho,e,h);L(pe,{labelFieldRef:E(e,"labelField"),childrenFieldRef:E(e,"childrenField"),renderLabelRef:E(e,"renderLabel"),renderIconRef:E(e,"renderIcon"),hoverKeyRef:a,keyboardKeyRef:s,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:I,activeKeyPathRef:C,animatedRef:E(e,"animated"),mergedShowRef:t,nodePropsRef:E(e,"nodeProps"),renderOptionRef:E(e,"renderOption"),menuPropsRef:E(e,"menuProps"),doSelect:$,doUpdateShow:P}),we(t,v=>{!e.animated&&!v&&T()});function $(v,R){const{onSelect:k}=e;k&&U(k,v,R)}function P(v){const{"onUpdate:show":R,onUpdateShow:k}=e;R&&U(R,v),k&&U(k,v),o.value=v}function T(){a.value=null,s.value=null,u.value=null}function G(){P(!1)}function W(){w("left")}function B(){w("right")}function D(){w("up")}function re(){w("down")}function V(){const v=b();(v==null?void 0:v.isLeaf)&&t.value&&($(v.key,v.rawNode),P(!1))}function b(){var v;const{value:R}=l,{value:k}=c;return!R||k===null?null:(v=R.getNode(k))!==null&&v!==void 0?v:null}function w(v){const{value:R}=c,{value:{getFirstAvailableNode:k}}=l;let z=null;if(R===null){const i=k();i!==null&&(z=i.key)}else{const i=b();if(i){let x;switch(v){case"down":x=i.getNext();break;case"up":x=i.getPrev();break;case"right":x=i.getChild();break;case"left":x=i.getParent();break}x&&(z=x.key)}}z!==null&&(a.value=null,s.value=z)}const n=f(()=>{const{size:v,inverted:R}=e,{common:{cubicBezierEaseInOut:k},self:z}=K.value,{padding:i,dividerColor:x,borderRadius:H,optionOpacityDisabled:X,[J("optionIconSuffixWidth",v)]:Z,[J("optionSuffixWidth",v)]:fe,[J("optionIconPrefixWidth",v)]:Y,[J("optionPrefixWidth",v)]:Ze,[J("fontSize",v)]:Ye,[J("optionHeight",v)]:Je,[J("optionIconSize",v)]:Qe}=z,A={"--n-bezier":k,"--n-font-size":Ye,"--n-padding":i,"--n-border-radius":H,"--n-option-height":Je,"--n-option-prefix-width":Ze,"--n-option-icon-prefix-width":Y,"--n-option-suffix-width":fe,"--n-option-icon-suffix-width":Z,"--n-option-icon-size":Qe,"--n-divider-color":x,"--n-option-opacity-disabled":X};return R?(A["--n-color"]=z.colorInverted,A["--n-option-color-hover"]=z.optionColorHoverInverted,A["--n-option-color-active"]=z.optionColorActiveInverted,A["--n-option-text-color"]=z.optionTextColorInverted,A["--n-option-text-color-hover"]=z.optionTextColorHoverInverted,A["--n-option-text-color-active"]=z.optionTextColorActiveInverted,A["--n-option-text-color-child-active"]=z.optionTextColorChildActiveInverted,A["--n-prefix-color"]=z.prefixColorInverted,A["--n-suffix-color"]=z.suffixColorInverted,A["--n-group-header-text-color"]=z.groupHeaderTextColorInverted):(A["--n-color"]=z.color,A["--n-option-color-hover"]=z.optionColorHover,A["--n-option-color-active"]=z.optionColorActive,A["--n-option-text-color"]=z.optionTextColor,A["--n-option-text-color-hover"]=z.optionTextColorHover,A["--n-option-text-color-active"]=z.optionTextColorActive,A["--n-option-text-color-child-active"]=z.optionTextColorChildActive,A["--n-prefix-color"]=z.prefixColor,A["--n-suffix-color"]=z.suffixColor,A["--n-group-header-text-color"]=z.groupHeaderTextColor),A}),g=N?je("dropdown",f(()=>`${e.size[0]}${e.inverted?"i":""}`),n,e):void 0;return{mergedClsPrefix:h,mergedTheme:K,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{!e.animated||T()},doUpdateShow:P,cssVars:N?void 0:n,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){const e=(l,r,a,s,u)=>{var c;const{mergedClsPrefix:I,menuProps:C}=this;(c=this.onRender)===null||c===void 0||c.call(this);const S=(C==null?void 0:C(void 0,this.tmNodes.map(N=>N.rawNode)))||{},h={ref:Po(r),class:[l,`${I}-dropdown`,this.themeClass],clsPrefix:I,tmNodes:this.tmNodes,style:[a,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:s,onMouseleave:u};return d(Ve,Te(this.$attrs,h,S))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Fe,Object.assign({},me(this.$props,Bo),t),{trigger:()=>{var l,r;return(r=(l=this.$slots).default)===null||r===void 0?void 0:r.call(l)}})}});const Uo=oe("n-layout-sider"),se=oe("n-menu"),Se=oe("n-submenu"),ke=oe("n-menu-item-group"),he=8;function _e(e){const o=j(se),{props:t,mergedCollapsedRef:l}=o,r=j(Se,null),a=j(ke,null),s=f(()=>t.mode==="horizontal"),u=f(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=f(()=>{var h;return Math.max((h=t.collapsedIconSize)!==null&&h!==void 0?h:t.iconSize,t.iconSize)}),I=f(()=>{var h;return!s.value&&e.root&&l.value&&(h=t.collapsedIconSize)!==null&&h!==void 0?h:t.iconSize}),C=f(()=>{if(s.value)return;const{collapsedWidth:h,indent:N,rootIndent:K}=t,{root:$,isGroup:P}=e,T=K===void 0?N:K;if($)return l.value?h/2-c.value/2:T;if(a)return N/2+a.paddingLeftRef.value;if(r)return(P?N/2:N)+r.paddingLeftRef.value}),S=f(()=>{const{collapsedWidth:h,indent:N,rootIndent:K}=t,{value:$}=c,{root:P}=e;return s.value||!P||!l.value?he:(K===void 0?N:K)+$+he-(h+$)/2});return{dropdownPlacement:u,activeIconSize:I,maxIconSize:c,paddingLeft:C,iconMarginRight:S,NMenu:o,NSubmenu:r}}const Pe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ue=Object.assign(Object.assign({},Pe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),qo=O({name:"MenuOptionGroup",props:Ue,setup(e){L(Se,null);const o=_e(e);L(ke,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:l}=j(se);return function(){const{value:r}=t,a=o.paddingLeft.value,{nodeProps:s}=l,u=s==null?void 0:s(e.tmNode.rawNode);return d("div",{class:`${r}-menu-item-group`,role:"group"},d("div",Object.assign({},u,{class:[`${r}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),q(e.title),e.extra?d(ye,null," ",q(e.extra)):null),d("div",null,e.tmNodes.map(c=>Re(c,l))))}}});var qe=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=j(se);return{menuProps:o,style:f(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:f(()=>{const{maxIconSize:t,activeIconSize:l,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${l}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:l,renderExtra:r,expandIcon:a}}=this,s=t?t(o.rawNode):q(this.icon);return d("div",{onClick:u=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(o.rawNode):q(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):q(this.extra)):null),this.showArrow?d(mo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(o.rawNode):d(Oo,null)}):null)}});const Ge=Object.assign(Object.assign({},Pe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Go=O({name:"Submenu",props:Ge,setup(e){const o=_e(e),{NMenu:t,NSubmenu:l}=o,{props:r,mergedCollapsedRef:a,mergedThemeRef:s}=t,u=f(()=>{const{disabled:h}=e;return l!=null&&l.mergedDisabledRef.value||r.disabled?!0:h}),c=F(!1);L(Se,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:u}),L(ke,null);function I(){const{onClick:h}=e;h&&h()}function C(){u.value||(a.value||t.toggleExpand(e.internalKey),I())}function S(h){c.value=h}return{menuProps:r,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:c,paddingLeft:o.paddingLeft,mergedDisabled:u,mergedValue:t.mergedValueRef,childActive:ee(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:f(()=>r.mode==="horizontal"?!1:a.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:f(()=>!u.value&&(r.mode==="horizontal"||a.value)),handlePopoverShowChange:S,handleClick:C}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:l}}=this,r=()=>{const{isHorizontal:s,paddingLeft:u,collapsed:c,mergedDisabled:I,maxIconSize:C,activeIconSize:S,title:h,childActive:N,icon:K,handleClick:$,menuProps:{nodeProps:P},dropdownShow:T,iconMarginRight:G,tmNode:W,mergedClsPrefix:B}=this,D=P==null?void 0:P(W.rawNode);return d("div",Object.assign({},D,{class:[`${B}-menu-item`,D==null?void 0:D.class],role:"menuitem"}),d(qe,{tmNode:W,paddingLeft:u,collapsed:c,disabled:I,iconMarginRight:G,maxIconSize:C,activeIconSize:S,title:h,extra:this.extra,showArrow:!s,childActive:N,clsPrefix:B,icon:K,hover:T,onClick:$}))},a=()=>d(po,null,{default:()=>{const{tmNodes:s,collapsed:u}=this;return u?null:d("div",{class:`${o}-submenu-children`,role:"menu"},s.map(c=>Re(c,this.menuProps)))}});return this.root?d(Vo,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:l}),{default:()=>d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:a())}):d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),a())}}),We=Object.assign(Object.assign({},Pe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Wo=O({name:"MenuOption",props:We,setup(e){const o=_e(e),{NSubmenu:t,NMenu:l}=o,{props:r,mergedClsPrefixRef:a,mergedCollapsedRef:s}=l,u=t?t.mergedDisabledRef:{value:!1},c=f(()=>u.value||e.disabled);function I(S){const{onClick:h}=e;h&&h(S)}function C(S){c.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),I(S))}return{mergedClsPrefix:a,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:r,dropdownEnabled:ee(()=>e.root&&s.value&&r.mode!=="horizontal"&&!c.value),selected:ee(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:C}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:l,nodeProps:r}}=this,a=r==null?void 0:r(t.rawNode);return d("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),d(Ko,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(t.rawNode):q(this.title),trigger:()=>d(qe,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Xo=O({name:"MenuDivider",setup(){const e=j(se),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${o.value}-menu-divider`})}});const Zo=Ce(Ue),Yo=Ce(We),Jo=Ce(Ge);function Xe(e){return e.type==="divider"||e.type==="render"}function Qo(e){return e.type==="divider"}function Re(e,o){const{rawNode:t}=e,{show:l}=t;if(l===!1)return null;if(Xe(t))return Qo(t)?d(Xo,Object.assign({key:e.key},t.props)):null;const{labelField:r}=o,{key:a,level:s,isGroup:u}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:a,internalKey:a,level:s,root:s===0,isGroup:u});return e.children?e.isGroup?d(qo,me(c,Zo,{tmNode:e,tmNodes:e.children,key:a})):d(Go,me(c,Jo,{key:a,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):d(Wo,me(c,Yo,{key:a,tmNode:e}))}const He=[y("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[y("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ke=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])];var et=y([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[_("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[y("&::before","display: none;"),_("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[_("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),_("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),le("disabled",[le("selected, child-active",[y("&:focus-within",Ke)]),_("selected",[Q(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),_("child-active",[Q(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Q("border-bottom: 2px solid var(--n-border-color-horizontal);",Ke)]),p("menu-item-content-header",[y("a","color: var(--n-item-text-color-horizontal);")])])]),_("collapsed",[p("menu-item-content",[_("selected",[y("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("> *","z-index: 1;"),y("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),_("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),_("collapsed",[m("arrow","transform: rotate(0);")]),_("selected",[y("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[y("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),_("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[y("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),le("disabled",[le("selected, child-active",[y("&:focus-within",He)]),_("selected",[Q(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[y("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),_("child-active",[Q(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[y("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),_("selected",[Q(null,[y("&::before","background-color: var(--n-item-color-active-hover);")])]),Q(null,He)]),m("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[y("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[y("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[fo({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[y("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Q(e,o){return[_("hover",e,o),y("&:hover",e,o)]}const ot=Object.assign(Object.assign({},ae.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var tt=O({name:"Menu",props:ot,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Me(e),l=ae("Menu","-menu",et,go,e,o),r=j(Uo,null),a=f(()=>{var b;const{collapsed:w}=e;if(w!==void 0)return w;if(r){const{collapseModeRef:n,collapsedRef:g}=r;if(n.value==="width")return(b=g.value)!==null&&b!==void 0?b:!1}return!1}),s=f(()=>{const{keyField:b,childrenField:w,disabledField:n}=e;return Ee(e.items||e.options,{getIgnored(g){return Xe(g)},getChildren(g){return g[w]},getDisabled(g){return g[n]},getKey(g){var v;return(v=g[b])!==null&&v!==void 0?v:g.name}})}),u=f(()=>new Set(s.value.treeNodes.map(b=>b.key))),{watchProps:c}=e,I=F(null);c!=null&&c.includes("defaultValue")?Ne(()=>{I.value=e.defaultValue}):I.value=e.defaultValue;const C=E(e,"value"),S=xe(C,I),h=F([]),N=()=>{h.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(S.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ne(N):N();const K=Io(e,["expandedNames","expandedKeys"]),$=xe(K,h),P=f(()=>s.value.treeNodes),T=f(()=>s.value.getPath(S.value).keyPath);L(se,{props:e,mergedCollapsedRef:a,mergedThemeRef:l,mergedValueRef:S,mergedExpandedKeysRef:$,activePathRef:T,mergedClsPrefixRef:o,isHorizontalRef:f(()=>e.mode==="horizontal"),invertedRef:E(e,"inverted"),doSelect:G,toggleExpand:B});function G(b,w){const{"onUpdate:value":n,onUpdateValue:g,onSelect:v}=e;g&&U(g,b,w),n&&U(n,b,w),v&&U(v,b,w),I.value=b}function W(b){const{"onUpdate:expandedKeys":w,onUpdateExpandedKeys:n,onExpandedNamesChange:g,onOpenNamesChange:v}=e;w&&U(w,b),n&&U(n,b),g&&U(g,b),v&&U(v,b),h.value=b}function B(b){const w=Array.from($.value),n=w.findIndex(g=>g===b);if(~n)w.splice(n,1);else{if(e.accordion&&u.value.has(b)){const g=w.findIndex(v=>u.value.has(v));g>-1&&w.splice(g,1)}w.push(b)}W(w)}const D=b=>{const w=s.value.getPath(b!=null?b:S.value,{includeSelf:!1}).keyPath;if(!w.length)return;const n=Array.from($.value),g=new Set([...n,...w]);e.accordion&&u.value.forEach(v=>{g.has(v)&&!w.includes(v)&&g.delete(v)}),W(Array.from(g))},re=f(()=>{const{inverted:b}=e,{common:{cubicBezierEaseInOut:w},self:n}=l.value,{borderRadius:g,borderColorHorizontal:v,fontSize:R,itemHeight:k,dividerColor:z}=n,i={"--n-divider-color":z,"--n-bezier":w,"--n-font-size":R,"--n-border-color-horizontal":v,"--n-border-radius":g,"--n-item-height":k};return b?(i["--n-group-text-color"]=n.groupTextColorInverted,i["--n-color"]=n.colorInverted,i["--n-item-text-color"]=n.itemTextColorInverted,i["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,i["--n-item-text-color-active"]=n.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=n.itemIconColorInverted,i["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=n.arrowColorInverted,i["--n-arrow-color-hover"]=n.arrowColorHoverInverted,i["--n-arrow-color-active"]=n.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=n.itemColorHoverInverted,i["--n-item-color-active"]=n.itemColorActiveInverted,i["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=n.groupTextColor,i["--n-color"]=n.color,i["--n-item-text-color"]=n.itemTextColor,i["--n-item-text-color-hover"]=n.itemTextColorHover,i["--n-item-text-color-active"]=n.itemTextColorActive,i["--n-item-text-color-child-active"]=n.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,i["--n-item-icon-color"]=n.itemIconColor,i["--n-item-icon-color-hover"]=n.itemIconColorHover,i["--n-item-icon-color-active"]=n.itemIconColorActive,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=n.arrowColor,i["--n-arrow-color-hover"]=n.arrowColorHover,i["--n-arrow-color-active"]=n.arrowColorActive,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,i["--n-arrow-color-child-active"]=n.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,i["--n-item-color-hover"]=n.itemColorHover,i["--n-item-color-active"]=n.itemColorActive,i["--n-item-color-active-hover"]=n.itemColorActiveHover,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),i}),V=t?je("menu",f(()=>e.inverted?"a":"b"),re,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:K,uncontrolledExpanededKeys:h,mergedExpandedKeys:$,uncontrolledValue:I,mergedValue:S,activePath:T,tmNodes:P,mergedTheme:l,mergedCollapsed:a,cssVars:t?void 0:re,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender,showOption:D}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:l}=this;return l==null||l(),d("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>Re(r,this.$props)))}});const nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},rt=M("rect",{x:"416",y:"96",width:"64",height:"320",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),it=M("rect",{x:"288",y:"176",width:"64",height:"240",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),lt=M("rect",{x:"160",y:"240",width:"64",height:"176",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),at=M("rect",{x:"32",y:"304",width:"64",height:"112",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),dt=[rt,it,lt,at];var ct=O({name:"CellularOutline",render:function(o,t){return te(),ne("svg",nt,dt)}});const st={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ut=M("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),vt=M("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ht=M("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),mt=[ut,vt,ht];var pt=O({name:"HomeOutline",render:function(o,t){return te(),ne("svg",st,mt)}});const ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},gt=M("path",{d:"M410.47 279.2c-5-11.5-12.7-21.6-28.1-30.1a98.15 98.15 0 0 0-25.4-10a62.22 62.22 0 0 0 16.3-11a56.37 56.37 0 0 0 15.6-23.3a77.11 77.11 0 0 0 3.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40v64h-32V32h-41v64H96v48h27.87c8.7 0 14.6.8 17.6 2.3a13.22 13.22 0 0 1 6.5 6c1.3 2.5 1.9 8.4 1.9 17.5V343c0 9-.6 14.8-1.9 17.4s-2 4.9-5.1 6.3s-3.2 1.3-11.8 1.3h-26.4L96 416h87v64h41v-64h32v64h40v-64.4c26-1.3 44.5-4.7 59.4-10.3c19.3-7.2 34.1-17.7 44.7-31.5s14-34.9 14.93-51.2c.67-14.5-.03-33.2-4.56-43.4zM224 150h32v74h-32zm0 212v-90h32v90zm72-208.1c6 2.5 9.9 7.5 13.8 12.7c4.3 5.7 6.5 13.3 6.5 21.4c0 7.8-2.9 14.5-7.5 20.5c-3.8 4.9-6.8 8.3-12.8 11.1zm28.8 186.7c-7.8 6.9-12.3 10.1-22.1 13.8a56.06 56.06 0 0 1-6.7 1.9v-82.8a40.74 40.74 0 0 1 11.3 3.4c7.8 3.3 15.2 6.9 19.8 13.2a43.82 43.82 0 0 1 8 24.7c-.03 10.9-2.83 19.2-10.33 25.8z",fill:"currentColor"},null,-1),xt=[gt];var bt=O({name:"LogoBitcoin",render:function(o,t){return te(),ne("svg",ft,xt)}});const wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},yt=M("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ct=[yt];var zt=O({name:"SettingsOutline",render:function(o,t){return te(),ne("svg",wt,Ct)}});const It={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},St=M("path",{d:"M374.79 308.78L457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),kt=M("path",{d:"M268 384H84a52.15 52.15 0 0 1-52-52V180a52.15 52.15 0 0 1 52-52h184.48A51.68 51.68 0 0 1 320 179.52V332a52.15 52.15 0 0 1-52 52z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),_t=[St,kt];var Pt=O({name:"VideocamOutline",render:function(o,t){return te(),ne("svg",It,_t)}});const Rt={style:{padding:"20px 10px 40px"}},Nt={__name:"Sidebar",setup(e){var o=F(!1);setInterval(()=>{var r=document.documentElement.clientWidth;r>=820?o.value=!1:o.value=!0},200),de(router.currentRoute).query;function t(r){return()=>d(ge,null,{default:()=>d(r)})}const l=[{label:()=>d(ie,{to:"/home"},{default:()=>"Home"}),key:"home",icon:t(pt)},{label:()=>d(ie,{to:"/events"},{default:()=>"Events"}),key:"events",icon:t(Pt)},{label:()=>d(ie,{to:"/audience"},{default:()=>"Audience"}),key:"audience",icon:t(So)},{label:()=>d(ie,{to:"/newsletters"},{default:()=>"Newsletters"}),key:"newsletters",icon:t(ko)},{label:()=>d(ie,{to:"/insights"},{default:()=>"Insights"}),key:"insights",icon:t(ct)},{label:()=>d(ie,{to:"/settings"},{default:()=>"Settings"}),key:"settings",icon:t(zt)}];return(r,a)=>{const s=tt;return te(),ne(ye,null,[M("div",Rt,[ce(de(ge),{size:"18",style:{"vertical-align":"text-bottom"}},{default:xo(()=>[ce(de(bt))]),_:1})]),ce(s,{options:l,collapsed:de(o),"collapsed-width":44,indent:0},null,8,["collapsed"])],64)}}};const At={class:"flex"},Ot={class:"flex event-sidebar-wrap"},Ht=M("div",{class:"flex-auto"},null,-1),Kt={class:"event-sidebar"},$t={class:"flex-auto",style:{"background-color":"#ffffff"}},Ut={__name:"MainView",setup(e){const o=bo();return de(o.currentRoute).query,(l,r)=>(te(),ne("div",At,[M("div",Ot,[Ht,M("div",Kt,[ce(Nt)])]),M("div",$t,[ce(_o)])]))}};export{Ut as default};
