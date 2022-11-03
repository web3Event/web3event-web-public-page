import{K as _,b as B,g as u,L as m,f as o,j as i,i as f,d as x,u as E,M as k,p as C,O as w,s as z,h as P,C as b,D as h,P as $,Q as y,B as c}from"./index.21342fa2.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";function j(r,e){return _(r,n=>{n!==void 0&&(e.value=n)}),B(()=>r.value===void 0?e.value:r.value)}const t="0!important",v="-1px!important";function s(r){return i(r+"-type",[o("& +",[u("button",{},[i(r+"-type",[f("border",{borderLeftWidth:t}),f("state-border",{left:v})])])])])}function a(r){return i(r+"-type",[o("& +",[u("button",[i(r+"-type",[f("border",{borderTopWidth:t}),f("state-border",{top:v})])])])])}var G=u("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[m("vertical",{flexDirection:"row"},[m("rtl",[u("button",[o("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),s("default"),i("ghost",[s("primary"),s("info"),s("success"),s("warning"),s("error")])])])]),i("vertical",{flexDirection:"column"},[u("button",[o("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),a("default"),i("ghost",[a("primary"),a("info"),a("success"),a("warning"),a("error")])])])]);const M={size:{type:String,default:void 0},vertical:Boolean};var I=x({name:"ButtonGroup",props:M,setup(r){const{mergedClsPrefixRef:e,mergedRtlRef:n}=E(r);return k("-button-group",G,e),C(w,r),{rtlEnabled:z("ButtonGroup",n,e),mergedClsPrefix:e}},render(){const{mergedClsPrefix:r}=this;return P("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});const D={__name:"EButton",props:{type:{type:String,default:"outline"},size:{type:String,default:"large"}},emits:["click"],setup(r,{emit:e}){const n=r;var l=()=>{e("click",n)};return(g,d)=>r.size=="large"?(b(),h("div",{key:0,class:y(["ebtn cursor-pointer",r.type=="primary"?"ebtn-large-fill":"ebtn-large"]),onClick:d[0]||(d[0]=(...p)=>c(l)&&c(l)(...p))},[$(g.$slots,"default",{},void 0,!0)],2)):(b(),h("div",{key:1,class:y(["ebtn cursor-pointer",r.type=="primary"?"ebtn-medium-fill":"ebtn-medium"]),onClick:d[1]||(d[1]=(...p)=>c(l)&&c(l)(...p))},[$(g.$slots,"default",{},void 0,!0)],2))}};var K=S(D,[["__scopeId","data-v-67e0c77a"]]);export{K as E,I as _,j as u};
