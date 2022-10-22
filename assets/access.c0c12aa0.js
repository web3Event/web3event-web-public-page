import{c as p,a as f,b as g,E as n,bb as ye,bc as we,d as N,u as te,X as le,e as P,W as ke,H as se,g as V,h as ie,j as i,L as $e,bd as Re,y as Ce,ai as ze,F as re,O as oe,R as Se,r as F,Q as Be,be as G,Y as C,I as Ve,N as Pe,bf as Ee,a5 as J,k as z,p as Z,aO as w,$ as de,bg as je,m as ee,o as Fe,n as Te,q as d,t as R,bh as ae,w as B,at as De,v as O,_ as Ie}from"./index.b0ea033f.js";var Oe=p([f("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[g("show-divider",[f("list-item",[p("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),g("clickable",[f("list-item",`
 cursor: pointer;
 `)]),g("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),g("hoverable",[f("list-item",`
 border-radius: var(--n-border-radius);
 `,[p("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),g("bordered, hoverable",[f("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),f("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),n("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),ye(f("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),we(f("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const Ne=Object.assign(Object.assign({},P.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),ce=$e("n-list");var We=N({name:"List",props:Ne,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:a,mergedRtlRef:u}=te(e),b=le("List",u,t),_=P("List","-list",Oe,Re,e,t);ke(ce,{showDividerRef:se(e,"showDivider"),mergedClsPrefixRef:t});const h=V(()=>{const{common:{cubicBezierEaseInOut:v},self:{fontSize:l,textColor:r,color:m,colorModal:s,colorPopover:x,borderColor:y,borderColorModal:W,borderColorPopover:H,borderRadius:L,colorHover:K,colorHoverModal:M,colorHoverPopover:U}}=_.value;return{"--n-font-size":l,"--n-bezier":v,"--n-text-color":r,"--n-color":m,"--n-border-radius":L,"--n-border-color":y,"--n-border-color-modal":W,"--n-border-color-popover":H,"--n-color-modal":s,"--n-color-popover":x,"--n-color-hover":K,"--n-color-hover-modal":M,"--n-color-hover-popover":U}}),c=a?ie("list",void 0,h,e):void 0;return{mergedClsPrefix:t,rtlEnabled:b,cssVars:a?void 0:h,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:a,onRender:u}=this;return u==null||u(),i("ul",{class:[`${a}-list`,this.rtlEnabled&&`${a}-list--rtl`,this.bordered&&`${a}-list--bordered`,this.showDivider&&`${a}-list--show-divider`,this.hoverable&&`${a}-list--hoverable`,this.clickable&&`${a}-list--clickable`,this.themeClass],style:this.cssVars},t.header?i("div",{class:`${a}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?i("div",{class:`${a}-list__footer`},t.footer()):null)}}),He=N({name:"ListItem",setup(){const e=Ce(ce,null);return e||ze("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return i("li",{class:`${t}-list-item`},e.prefix?i("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?i("div",{class:`${t}-list-item__main`},e):null,e.suffix?i("div",{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&i("div",{class:`${t}-list-item__divider`}))}}),Le=f("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),n("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),f("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[re({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),n("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),p("&:focus",[n("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),g("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),oe("disabled",[oe("icon",[g("rubber-band",[g("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[p("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),g("active",[g("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[p("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),g("active",[n("rail",[n("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),n("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[n("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[re()]),n("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),g("active",[n("rail","background-color: var(--n-rail-color-active);")]),g("loading",[n("rail",`
 cursor: wait;
 `)]),g("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Ke=Object.assign(Object.assign({},P.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let j;var Me=N({name:"Switch",props:Ke,setup(e){j===void 0&&(typeof CSS!="undefined"?typeof CSS.supports!="undefined"?j=CSS.supports("width","max(1px)"):j=!1:j=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:a}=te(e),u=P("Switch","-switch",Le,Ee,e,t),b=Se(e),{mergedSizeRef:_,mergedDisabledRef:h}=b,c=F(e.defaultValue),v=se(e,"value"),l=Be(v,c),r=V(()=>l.value===e.checkedValue),m=F(!1),s=F(!1),x=V(()=>{const{railStyle:o}=e;if(!!o)return o({focused:s.value,checked:r.value})});function y(o){const{"onUpdate:value":T,onChange:D,onUpdateValue:I}=e,{nTriggerFormInput:Y,nTriggerFormChange:A}=b;T&&J(T,o),I&&J(I,o),D&&J(D,o),c.value=o,Y(),A()}function W(){const{nTriggerFormFocus:o}=b;o()}function H(){const{nTriggerFormBlur:o}=b;o()}function L(){e.loading||h.value||(l.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue))}function K(){s.value=!0,W()}function M(){s.value=!1,H(),m.value=!1}function U(o){e.loading||h.value||o.key===" "&&(l.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue),m.value=!1)}function ue(o){e.loading||h.value||o.key===" "&&(o.preventDefault(),m.value=!0)}const ne=V(()=>{const{value:o}=_,{self:{opacityDisabled:T,railColor:D,railColorActive:I,buttonBoxShadow:Y,buttonColor:A,boxShadowFocus:he,loadingColor:ve,textColor:fe,iconColor:be,[z("buttonHeight",o)]:k,[z("buttonWidth",o)]:ge,[z("buttonWidthPressed",o)]:me,[z("railHeight",o)]:$,[z("railWidth",o)]:E,[z("railBorderRadius",o)]:xe,[z("buttonBorderRadius",o)]:pe},common:{cubicBezierEaseInOut:_e}}=u.value;let q,X,Q;return j?(q=`calc((${$} - ${k}) / 2)`,X=`max(${$}, ${k})`,Q=`max(${E}, calc(${E} + ${k} - ${$}))`):(q=Z((w($)-w(k))/2),X=Z(Math.max(w($),w(k))),Q=w($)>w(k)?E:Z(w(E)+w(k)-w($))),{"--n-bezier":_e,"--n-button-border-radius":pe,"--n-button-box-shadow":Y,"--n-button-color":A,"--n-button-width":ge,"--n-button-width-pressed":me,"--n-button-height":k,"--n-height":X,"--n-offset":q,"--n-opacity-disabled":T,"--n-rail-border-radius":xe,"--n-rail-color":D,"--n-rail-color-active":I,"--n-rail-height":$,"--n-rail-width":E,"--n-width":Q,"--n-box-shadow-focus":he,"--n-loading-color":ve,"--n-text-color":fe,"--n-icon-color":be}}),S=a?ie("switch",V(()=>_.value[0]),ne,e):void 0;return{handleClick:L,handleBlur:M,handleFocus:K,handleKeyup:U,handleKeydown:ue,mergedRailStyle:x,pressed:m,mergedClsPrefix:t,mergedValue:l,checked:r,mergedDisabled:h,cssVars:a?void 0:ne,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:a,mergedRailStyle:u,onRender:b,$slots:_}=this;b==null||b();const{checked:h,unchecked:c,icon:v,"checked-icon":l,"unchecked-icon":r}=_,m=!(G(v)&&G(l)&&G(r));return i("div",{role:"switch","aria-checked":a,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,a&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:u},C(h,s=>C(c,x=>s||x?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),s),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),x)):null)),i("div",{class:`${e}-switch__button`},C(v,s=>C(l,x=>C(r,y=>i(Ve,null,{default:()=>this.loading?i(Pe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(x||s)?i("div",{class:`${e}-switch__button-icon`,key:x?"checked-icon":"icon"},x||s):!this.checked&&(y||s)?i("div",{class:`${e}-switch__button-icon`,key:y?"unchecked-icon":"icon"},y||s):null})))),C(h,s=>s&&i("div",{key:"checked",class:`${e}-switch__checked`},s)),C(c,s=>s&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},s)))))}}),Ue=f("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[f("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),f("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[f("thing-header-wrapper",`
 flex: 1;
 `)]),f("thing-main",`
 flex-grow: 1;
 `,[f("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[n("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),n("description",[p("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),n("content",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),n("footer",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),n("action",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const Ye=Object.assign(Object.assign({},P.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean});var Ae=N({name:"Thing",props:Ye,setup(e,{slots:t}){const{mergedClsPrefixRef:a,inlineThemeDisabled:u,mergedRtlRef:b}=te(e),_=P("Thing","-thing",Ue,je,e,a),h=le("Thing",b,a),c=V(()=>{const{self:{titleTextColor:l,textColor:r,titleFontWeight:m,fontSize:s},common:{cubicBezierEaseInOut:x}}=_.value;return{"--n-bezier":x,"--n-font-size":s,"--n-text-color":r,"--n-title-font-weight":m,"--n-title-text-color":l}}),v=u?ie("thing",void 0,c,e):void 0;return()=>{var l;const{value:r}=a,m=h?h.value:!1;return(l=v==null?void 0:v.onRender)===null||l===void 0||l.call(v),i("div",{class:[`${r}-thing`,v==null?void 0:v.themeClass,m&&`${r}-thing--rtl`],style:u?void 0:c.value},t.avatar&&e.contentIndented?i("div",{class:`${r}-thing-avatar`},t.avatar()):null,i("div",{class:`${r}-thing-main`},!e.contentIndented&&(t.header||e.title||t["header-extra"]||e.titleExtra||t.avatar)?i("div",{class:`${r}-thing-avatar-header-wrapper`},t.avatar?i("div",{class:`${r}-thing-avatar`},t.avatar()):null,t.header||e.title||t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header-wrapper`},i("div",{class:`${r}-thing-header`},t.header||e.title?i("div",{class:`${r}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null),t.description||e.description?i("div",{class:`${r}-thing-main__description`,style:e.descriptionStyle},t.description?t.description():e.description):null):null):i(de,null,t.header||e.title||t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header`},t.header||e.title?i("div",{class:`${r}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null):null,t.description||e.description?i("div",{class:`${r}-thing-main__description`,style:e.descriptionStyle},t.description?t.description():e.description):null),t.default||e.content?i("div",{class:`${r}-thing-main__content`,style:e.contentStyle},t.default?t.default():e.content):null,t.footer?i("div",{class:`${r}-thing-main__footer`},t.footer()):null,t.action?i("div",{class:`${r}-thing-main__action`},t.action()):null))}}});const qe=d("div",{class:"py-3"},[d("div",{class:"font-black text-xl my-2"},"Event Page Discoverability"),d("div",{class:"text-gray-500 text-sm mt-1"}," Where can people find this event? ")],-1),Xe={class:"p-4 bg-white flex"},Qe={class:"flex-1",style:{"border-right":"1px solid #ebeced"}},Ge=d("div",{class:"font-black text-base my-2"},"Via Profile Page",-1),Je={class:"flex pr-2"},Ze=d("div",{class:"flex-1 text-sm mt-1 text-gray-900"}," List on Your Profile ",-1),et=d("div",{class:"pt-2 text-xs text-gray-400"}," This event is listed on your Profile. Unlisting it will also remove any social sharing prompts and remove it from search engine results. ",-1),tt={class:"flex-1 pl-2"},it=d("div",{class:"font-black text-base my-2"},"Via Community",-1),nt={class:"flex pr-2"},rt=d("div",{class:"flex-1 text-sm mt-1 text-gray-900"}," List on Community Calendar ",-1),ot=d("div",{class:"pt-2 text-xs text-gray-400"}," You are not part of any community. ",-1),at=De('<div class="py-3"><div class="font-black text-xl my-2">Registration Permission</div><div class="text-gray-500 text-sm mt-1"> Who can register for this event? </div></div><section class="flex"><div class="p-4 flex-1 bg-white"><div class="font-black text-base my-2">Free</div><div class="flex-1 text-sm mt-1 text-gray-900"> Your event is free to join. You can still control who can join. </div></div><div class="p-4 flex-1" style="border-top:1px solid #ebeced;border-right:1px solid #ebeced;"><div class="font-black text-base my-2">Paid</div><div class="flex-1 text-sm mt-1 text-gray-900"> Sell tickets to your event or accept donations. </div></div><div class="p-4 flex-1" style="border-top:1px solid #ebeced;border-right:1px solid #ebeced;"><div class="font-black text-base my-2">Crypto</div><div class="flex-1 text-sm mt-1 text-gray-900"> Require guests to have a token in order to join. </div></div></section>',2),lt={class:"p-4 bg-white"},st=d("div",{class:"font-black text-lg my-2"},"Free to Register",-1),dt=d("br",null,null,-1),ct=d("br",null,null,-1),ut=d("br",null,null,-1),vt={__name:"access",setup(e){ee(router.currentRoute).query,F({url:"",numbers:"",remark:""});var t=F(!0);return(a,u)=>{const b=Me,_=Ie,h=Ae,c=He,v=We;return Fe(),Te(de,null,[qe,d("div",Xe,[d("div",Qe,[Ge,d("div",Je,[Ze,R(b,{value:ee(t),"onUpdate:value":u[0]||(u[0]=l=>ae(t)?t.value=l:t=l)},null,8,["value"])]),et]),d("div",tt,[it,d("div",nt,[rt,R(b,{value:ee(t),"onUpdate:value":u[1]||(u[1]=l=>ae(t)?t.value=l:t=l),disabled:""},null,8,["value"])]),ot])]),at,d("div",lt,[st,R(v,{hoverable:"",clickable:""},{default:B(()=>[R(c,null,{prefix:B(()=>[R(_,null,{default:B(()=>[O("Prefix")]),_:1})]),default:B(()=>[R(h,{title:"Thing","title-extra":"extra",description:"description"},{default:B(()=>[O(" Biu"),dt,O(" Biu"),ct,O(" Biu"),ut]),_:1})]),_:1}),R(c,null,{default:B(()=>[R(h,{title:"Thing","title-extra":"extra",description:"description"})]),_:1})]),_:1})])],64)}}};export{vt as default};
