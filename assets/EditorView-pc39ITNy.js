import{s as Le}from"./index-CDLANb-4.js";import{u as P}from"./editor-store-DdTXM6um.js";import{s as be}from"./index-CXeTR8u1.js";import{b as se,a as Ge,s as J}from"./index-bLYsa6RN.js";import{B as ee,o as r,c as _,e as h,x as B,I as Y,v as ye,U as Se,ay as Ze,au as We,F as R,i as G,f as y,J as Ve,as as fe,W as Ie,an as ze,ao as Ye,ap as Je,h as S,t as re,az as le,aq as me,H as _e,aA as Qe,w as $,d as L,p as ce,n as xe,ah as te,r as k,m as q,Q as A,j as v,b as u,aB as ue,K as Xe,s as O,g as W,aC as et,L as X,k as Pe,ag as tt,ai as nt,u as ot,N as lt,av as at}from"./index-BdAa8Vwj.js";import{s as Te}from"./index-Dp6FDtRS.js";import{s as it}from"./index-D91kiC0F.js";import{a as Oe,L as st}from"./logo-CZj2lZIP.js";import{a as ae,t as rt}from"./types-6htF1nCT.js";import{a as ie,t as ct}from"./types-CUfPDkB4.js";import{a as U}from"./index-DrRp_q9R.js";import{q as Ae,_ as Fe}from"./index-NsnnIZqM.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as D}from"./index-CA5VFue5.js";import{s as we}from"./index-x2ApknX6.js";import{s as je,_ as ut}from"./UserMenu.vue_vue_type_script_setup_true_lang-Cm1ZiPW1.js";import{s as ke,a as $e}from"./index-BJbg5G83.js";import{s as dt}from"./index-i4o5NJ-J.js";import{s as Ue}from"./index-AVFAQ9HU.js";import{b as he,_ as pt,c as gt,M as mt,d as ft,e as ht}from"./QuestionStep.vue_vue_type_script_setup_true_lang-pB5gm1T8.js";import{_ as vt}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-w6qSvhc4.js";import{_ as bt}from"./SavedCloud.vue_vue_type_script_setup_true_lang-DrGmILYP.js";import{u as yt,m as _t}from"./useSortable-lhu83egB.js";import"./index-Cu4UI7yz.js";import"./index-BjDT9Omc.js";import"./index-BsLYcb3L.js";import"./index-BFwE7A-8.js";import"./index-CDst3zWy.js";import"./index-CBMipU-p.js";var xt=function(n){var e=n.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(e("toggleswitch.width"),`;
    height: `).concat(e("toggleswitch.height"),`;
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(e("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("toggleswitch.border.color"),`;
    background: `).concat(e("toggleswitch.background"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", border-color ").concat(e("toggleswitch.transition.duration"),", outline-color ").concat(e("toggleswitch.transition.duration"),", box-shadow ").concat(e("toggleswitch.transition.duration"),`;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("toggleswitch.shadow"),`;
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: `).concat(e("toggleswitch.handle.background"),`;
    color: `).concat(e("toggleswitch.handle.color"),`;
    width: `).concat(e("toggleswitch.handle.size"),`;
    height: `).concat(e("toggleswitch.handle.size"),`;
    inset-inline-start: `).concat(e("toggleswitch.gap"),`;
    margin-block-start: calc(-1 * calc(`).concat(e("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(e("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", inset-inline-start ").concat(e("toggleswitch.slide.duration"),", box-shadow ").concat(e("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.background"),`;
    border-color: `).concat(e("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.color"),`;
    inset-inline-start: calc(`).concat(e("toggleswitch.width")," - calc(").concat(e("toggleswitch.handle.size")," + ").concat(e("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.hover.background"),`;
    border-color: `).concat(e("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(e("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(e("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(e("toggleswitch.focus.ring.width")," ").concat(e("toggleswitch.focus.ring.style")," ").concat(e("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(e("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(e("toggleswitch.invalid.border.color"),`;
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.disabled.background"),`;
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.disabled.background"),`;
}
`)},wt={root:{position:"relative"}},kt={root:function(n){var e=n.instance,l=n.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":l.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},$t=ee.extend({name:"toggleswitch",theme:xt,classes:kt,inlineStyles:wt}),Ct={name:"BaseToggleSwitch",extends:se,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$t,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},Ce={name:"ToggleSwitch",extends:Ct,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(n){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,l;this.$emit("blur",n),(e=(l=this.formField).onBlur)===null||e===void 0||e.call(l,n)}},computed:{checked:function(){return this.d_value===this.trueValue}}},St=["data-p-checked","data-p-disabled"],Vt=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function It(t,n,e,l,a,o){return r(),_("div",B({class:t.cx("root"),style:t.sx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-disabled":t.disabled}),[h("input",B({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":o.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:n[0]||(n[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:n[2]||(n[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Vt),h("div",B({class:t.cx("slider")},o.getPTOptions("slider")),[h("div",B({class:t.cx("handle")},o.getPTOptions("handle")),[Y(t.$slots,"handle",{checked:o.checked})],16)],16)],16,St)}Ce.render=It;var De={name:"BanIcon",extends:ye};function Bt(t,n,e,l,a,o){return r(),_("svg",B({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[h("path",{d:"M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z",fill:"currentColor"},null,-1)]),16)}De.render=Bt;var Me={name:"StarIcon",extends:ye};function Lt(t,n,e,l,a,o){return r(),_("svg",B({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[h("path",{d:"M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z",fill:"currentColor"},null,-1)]),16)}Me.render=Lt;var Re={name:"StarFillIcon",extends:ye};function zt(t,n,e,l,a,o){return r(),_("svg",B({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[h("path",{d:"M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z",fill:"currentColor"},null,-1)]),16)}Re.render=zt;var Pt=function(n){var e=n.dt;return`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: `.concat(e("rating.gap"),`;
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    transition: background `).concat(e("rating.transition.duration"),", color ").concat(e("rating.transition.duration"),", border-color ").concat(e("rating.transition.duration"),", outline-color ").concat(e("rating.transition.duration"),", box-shadow ").concat(e("rating.transition.duration"),`;
}

.p-rating-option.p-focus-visible {
    box-shadow: `).concat(e("rating.focus.ring.shadow"),`;
    outline: `).concat(e("rating.focus.ring.width")," ").concat(e("rating.focus.ring.style")," ").concat(e("rating.focus.ring.color"),`;
    outline-offset: `).concat(e("rating.focus.ring.offset"),`;
}

.p-rating-icon {
    color: `).concat(e("rating.icon.color"),`;
    transition: background `).concat(e("rating.transition.duration"),", color ").concat(e("rating.transition.duration"),", border-color ").concat(e("rating.transition.duration"),", outline-color ").concat(e("rating.transition.duration"),", box-shadow ").concat(e("rating.transition.duration"),`;
    font-size: `).concat(e("rating.icon.size"),`;
    width: `).concat(e("rating.icon.size"),`;
    height: `).concat(e("rating.icon.size"),`;
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: `).concat(e("rating.icon.hover.color"),`;
}

.p-rating-option-active .p-rating-icon {
    color: `).concat(e("rating.icon.active.color"),`;
}

.p-rating-icon.p-invalid { /* @todo */
    stroke: `).concat(e("rating.invalid.icon.color"),`;
}
`)},Tt={root:function(n){var e=n.props;return["p-rating",{"p-readonly":e.readonly,"p-disabled":e.disabled}]},option:function(n){var e=n.instance,l=n.value;return["p-rating-option",{"p-rating-option-active":l<=e.d_value,"p-focus-visible":l===e.focusedOptionIndex&&e.isFocusVisibleItem}]},onIcon:function(n){var e=n.instance;return["p-rating-icon p-rating-on-icon",{"p-invalid":e.$invalid}]},offIcon:function(n){var e=n.instance;return["p-rating-icon p-rating-off-icon",{"p-invalid":e.$invalid}]}},Ot=ee.extend({name:"rating",theme:Pt,classes:Tt}),At={name:"BaseRating",extends:se,props:{readonly:{type:Boolean,default:!1},stars:{type:Number,default:5},onIcon:{type:String,default:void 0},offIcon:{type:String,default:void 0}},style:Ot,provide:function(){return{$pcRating:this,$parentInstance:this}}},Ee={name:"Rating",extends:At,inheritAttrs:!1,emits:["change","focus","blur"],data:function(){return{d_name:this.name,focusedOptionIndex:-1,isFocusVisibleItem:!0}},watch:{name:function(n){this.d_name=n||Se()}},mounted:function(){this.d_name=this.d_name||Se()},methods:{getPTOptions:function(n,e){return this.ptm(n,{context:{active:e<=this.d_value,focused:e===this.focusedOptionIndex}})},onOptionClick:function(n,e){if(!this.readonly&&!this.disabled){this.onOptionSelect(n,e),this.isFocusVisibleItem=!1;var l=Ze(n.currentTarget);l&&We(l)}},onFocus:function(n,e){this.focusedOptionIndex=e,this.$emit("focus",n)},onBlur:function(n){var e,l;this.focusedOptionIndex=-1,this.$emit("blur",n),(e=(l=this.formField).onBlur)===null||e===void 0||e.call(l)},onChange:function(n,e){this.onOptionSelect(n,e),this.isFocusVisibleItem=!0},onOptionSelect:function(n,e){this.focusedOptionIndex===e||this.d_value===e?(this.focusedOptionIndex=-1,this.updateModel(n,null)):(this.focusedOptionIndex=e,this.updateModel(n,e||null))},updateModel:function(n,e){this.writeValue(e,n),this.$emit("change",{originalEvent:n,value:e})},starAriaLabel:function(n){return n===1?this.$primevue.config.locale.aria.star:this.$primevue.config.locale.aria.stars.replace(/{star}/g,n)}},components:{StarFillIcon:Re,StarIcon:Me,BanIcon:De}},Ft=["onClick","data-p-active","data-p-focused"],jt=["value","name","checked","disabled","readonly","aria-label","onFocus","onChange"];function Ut(t,n,e,l,a,o){return r(),_("div",B({class:t.cx("root")},t.ptmi("root")),[(r(!0),_(R,null,G(t.stars,function(i){return r(),_("div",B({key:i,class:t.cx("option",{value:i}),onClick:function(p){return o.onOptionClick(p,i)},ref_for:!0},o.getPTOptions("option",i),{"data-p-active":i<=t.d_value,"data-p-focused":i===a.focusedOptionIndex}),[h("span",B({class:"p-hidden-accessible",ref_for:!0},t.ptm("hiddenOptionInputContainer"),{"data-p-hidden-accessible":!0}),[h("input",B({type:"radio",value:i,name:a.d_name,checked:t.d_value===i,disabled:t.disabled,readonly:t.readonly,"aria-label":o.starAriaLabel(i),onFocus:function(p){return o.onFocus(p,i)},onBlur:n[0]||(n[0]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:function(p){return o.onChange(p,i)},ref_for:!0},t.ptm("hiddenOptionInput")),null,16,jt)],16),i<=t.d_value?Y(t.$slots,"onicon",{key:0,value:i,class:fe(t.cx("onIcon"))},function(){return[(r(),y(Ve(t.onIcon?"span":"StarFillIcon"),B({class:[t.cx("onIcon"),t.onIcon],ref_for:!0},t.ptm("onIcon")),null,16,["class"]))]}):Y(t.$slots,"officon",{key:1,value:i,class:fe(t.cx("offIcon"))},function(){return[(r(),y(Ve(t.offIcon?"span":"StarIcon"),B({class:[t.cx("offIcon"),t.offIcon],ref_for:!0},t.ptm("offIcon")),null,16,["class"]))]})],16,Ft)}),128))],16)}Ee.render=Ut;var Dt=function(n){var e=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(e("togglebutton.color"),`;
    background: `).concat(e("togglebutton.background"),`;
    border: 1px solid `).concat(e("togglebutton.border.color"),`;
    padding: `).concat(e("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(e("togglebutton.transition.duration"),", color ").concat(e("togglebutton.transition.duration"),", border-color ").concat(e("togglebutton.transition.duration"),`,
        outline-color `).concat(e("togglebutton.transition.duration"),", box-shadow ").concat(e("togglebutton.transition.duration"),`;
    border-radius: `).concat(e("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(e("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(e("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(e("togglebutton.transition.duration"),", color ").concat(e("togglebutton.transition.duration"),", border-color ").concat(e("togglebutton.transition.duration"),`,
            outline-color `).concat(e("togglebutton.transition.duration"),", box-shadow ").concat(e("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(e("togglebutton.content.left"),`;
    inset-block-start: `).concat(e("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(e("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(e("togglebutton.content.top"),`));
    border-radius: `).concat(e("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(e("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(e("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(e("togglebutton.hover.background"),`;
    color: `).concat(e("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(e("togglebutton.checked.background"),`;
    border-color: `).concat(e("togglebutton.checked.border.color"),`;
    color: `).concat(e("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(e("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(e("togglebutton.focus.ring.width")," ").concat(e("togglebutton.focus.ring.style")," ").concat(e("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(e("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(e("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(e("togglebutton.disabled.background"),`;
    border-color: `).concat(e("togglebutton.disabled.border.color"),`;
    color: `).concat(e("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(e("togglebutton.sm.padding"),`;
    font-size: `).concat(e("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(e("togglebutton.lg.padding"),`;
    font-size: `).concat(e("togglebutton.lg.font.size"),`;
}
`)},Mt={root:function(n){var e=n.instance,l=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":e.active,"p-invalid":e.$invalid,"p-togglebutton-sm p-inputfield-sm":l.size==="small","p-togglebutton-lg p-inputfield-lg":l.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Rt=ee.extend({name:"togglebutton",theme:Dt,classes:Mt}),Et={name:"BaseToggleButton",extends:se,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:Rt,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},qe={name:"ToggleButton",extends:Et,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var e,l;(e=(l=this.formField).onBlur)===null||e===void 0||e.call(l,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return Ie(this.onLabel)&&Ie(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:ze}},qt=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function Kt(t,n,e,l,a,o){var i=Ye("ripple");return Je((r(),_("button",B({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":t.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":t.disabled}),[h("span",B({class:t.cx("content")},o.getPTOptions("content")),[Y(t.$slots,"default",{},function(){return[Y(t.$slots,"icon",{value:t.d_value,class:fe(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(r(),_("span",B({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},o.getPTOptions("icon")),null,16)):S("",!0)]}),h("span",B({class:t.cx("label")},o.getPTOptions("label")),re(o.label),17)]})],16)],16,qt)),[[i]])}qe.render=Kt;var Ht=function(n){var e=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(e("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(e("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(e("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(e("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(e("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(e("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},Nt={root:function(n){var e=n.instance;return["p-selectbutton p-component",{"p-invalid":e.$invalid}]}},Gt=ee.extend({name:"selectbutton",theme:Ht,classes:Nt}),Zt={name:"BaseSelectButton",extends:se,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:Gt,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Wt(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Ke(t))||n){e&&(t=e);var l=0,a=function(){};return{s:a,n:function(){return l>=t.length?{done:!0}:{done:!1,value:t[l++]}},e:function(c){throw c},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return i=c.done,c},e:function(c){d=!0,o=c},f:function(){try{i||e.return==null||e.return()}finally{if(d)throw o}}}}function Yt(t){return Xt(t)||Qt(t)||Ke(t)||Jt()}function Jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ke(t,n){if(t){if(typeof t=="string")return ve(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?ve(t,n):void 0}}function Qt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xt(t){if(Array.isArray(t))return ve(t)}function ve(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=Array(n);e<n;e++)l[e]=t[e];return l}var He={name:"SelectButton",extends:Zt,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?le(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?le(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?le(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?le(n,this.optionDisabled):!1},onOptionSelect:function(n,e,l){var a=this;if(!(this.disabled||this.isOptionDisabled(e))){var o=this.isSelected(e);if(!(o&&!this.allowEmpty)){var i=this.getOptionValue(e),d;this.multiple?o?d=this.d_value.filter(function(p){return!me(p,i,a.equalityKey)}):d=this.d_value?[].concat(Yt(this.d_value),[i]):[i]:d=o?null:i,this.writeValue(d,n),this.$emit("change",{event:n,value:d})}}},isSelected:function(n){var e=!1,l=this.getOptionValue(n);if(this.multiple){if(this.d_value){var a=Wt(this.d_value),o;try{for(a.s();!(o=a.n()).done;){var i=o.value;if(me(i,l,this.equalityKey)){e=!0;break}}}catch(d){a.e(d)}finally{a.f()}}}else e=me(this.d_value,l,this.equalityKey);return e}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:ze},components:{ToggleButton:qe}},en=["aria-labelledby"];function tn(t,n,e,l,a,o){var i=_e("ToggleButton");return r(),_("div",B({class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root")),[(r(!0),_(R,null,G(t.options,function(d,p){return r(),y(i,{key:o.getOptionRenderKey(d),modelValue:o.isSelected(d),onLabel:o.getOptionLabel(d),offLabel:o.getOptionLabel(d),disabled:t.disabled||o.isOptionDisabled(d),unstyled:t.unstyled,size:t.size,onChange:function(m){return o.onOptionSelect(m,d,p)},pt:t.ptm("pcToggleButton")},Qe({_:2},[t.$slots.option?{name:"default",fn:$(function(){return[Y(t.$slots,"option",{option:d,index:p},function(){return[h("span",B({ref_for:!0},t.ptm("pcToggleButton").label),re(o.getOptionLabel(d)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","onChange","pt"])}),128))],16,en)}He.render=tn;var nn=function(n){var e=n.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},on={root:function(n){var e=n.instance,l=n.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},ln=ee.extend({name:"textarea",theme:nn,classes:on}),an={name:"BaseTextarea",extends:Ge,props:{autoResize:Boolean},style:ln,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Ne={name:"Textarea",extends:an,inheritAttrs:!1,observer:null,mounted:function(){var n=this;this.autoResize&&(this.observer=new ResizeObserver(function(){n.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(n){this.autoResize&&this.resize(),this.writeValue(n.target.value,n)}},computed:{attrs:function(){return B(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},sn=["value","disabled","aria-invalid"];function rn(t,n,e,l,a,o){return r(),_("textarea",B({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:n[0]||(n[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,sn)}Ne.render=rn;const cn={class:"p-4 h-full overflow-y-scroll"},un={key:0},dn={key:1,class:"flex flex-col gap-4"},pn={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},gn={key:0,class:"flex justify-end"},mn={key:2,class:"flex justify-start gap-2"},fn=L({__name:"LessonCard",setup(t){const{locale:n}=ce(),e=xe(),l=P(),{lesson:a}=te(l),{setCardSaving:o}=l,i=k(null),d=k(null),p=k(["freemium","premium","hackaton","demo"]);q(()=>{var g;i.value=((g=a.value)==null?void 0:g.cover_image)??""}),A([()=>{var g;return(g=a.value)==null?void 0:g.title},()=>{var g;return(g=a.value)==null?void 0:g.description},()=>{var g;return(g=a.value)==null?void 0:g.level},i,()=>{var g;return(g=a.value)==null?void 0:g.is_guidable},()=>{var g;return(g=a.value)==null?void 0:g.access_type}],()=>{o(!0),m()},{deep:!0});async function c(g){const f=g.files[0],b=new FormData;b.append("file",f);try{const{data:z}=await U.uploadFile(b);i.value=z.presigned_url,d.value=z.full_gif_url}catch(z){console.log(z)}}const m=Ae(()=>{s()},1e3,{maxWait:5e3});async function s(){var g,f;o(!0);try{e.name=="project-edit"?(await ae.updateProjectByID(a.value.id,((g=i.value)==null?void 0:g.toString())??"",d.value??"",a.value.is_guidable,a.value.access_type,a.value.level),await ae.updateProjectTranslationByID(a.value.id,n.value,a.value.title,a.value.description)):e.name=="module-edit"&&(await ie.updateModuleByID(a.value.id,((f=i.value)==null?void 0:f.toString())??"",a.value.access_type),await ie.updateModuleTranslationByID(a.value.id,n.value,a.value.title))}catch(b){console.log(b)}finally{o(!1)}}return(g,f)=>{const b=Oe,z=it,M=Ee,K=J,T=Te,E=Ne,Z=Ce,V=be;return r(),_("div",cn,[v(a)?(r(),_("div",dn,[h("div",pn,[i.value?(r(),y(b,{key:0,src:i.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):S("",!0),u(z,{mode:"basic",onSelect:c,customUpload:"",auto:"",severity:"secondary","choose-icon":i.value==null?"pi pi-plus":"pi pi-pencil","choose-label":i.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),v(e).name=="project-edit"?(r(),_("div",gn,[u(M,{id:"level",modelValue:v(a).level,"onUpdate:modelValue":f[0]||(f[0]=x=>v(a).level=x)},null,8,["modelValue"])])):S("",!0),u(T,{variant:"on",class:"w-full"},{default:$(()=>[f[5]||(f[5]=h("label",{for:"title"},"Title",-1)),u(K,{id:"title",modelValue:v(a).title,"onUpdate:modelValue":f[1]||(f[1]=x=>v(a).title=x),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),v(e).name=="project-edit"?(r(),y(T,{key:1,variant:"on",class:"w-full"},{default:$(()=>[f[6]||(f[6]=h("label",{for:"description"},"Description",-1)),u(E,{id:"description",modelValue:v(a).description,"onUpdate:modelValue":f[2]||(f[2]=x=>v(a).description=x),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1})):S("",!0),v(e).name=="project-edit"?(r(),_("div",mn,[u(Z,{modelValue:v(a).is_guidable,"onUpdate:modelValue":f[3]||(f[3]=x=>v(a).is_guidable=x)},null,8,["modelValue"]),f[7]||(f[7]=h("div",{class:"text-base"},"Guidable",-1))])):S("",!0),u(V,{modelValue:v(a).access_type,"onUpdate:modelValue":f[4]||(f[4]=x=>v(a).access_type=x),options:p.value,placeholder:"Set Access",class:"w-full",size:"small"},null,8,["modelValue","options"])])):(r(),_("div",un,"Null"))])}}}),hn=ne(fn,[["__scopeId","data-v-3a965ebc"]]),vn={class:"flex items-center"},bn=L({__name:"AnswerPanel",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const n=ue(t,"modelValue");return(e,l)=>{const a=J,o=D;return r(),y(o,{header:"Answer"},{default:$(()=>[h("div",vn,[u(a,{id:"answer",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=i=>n.value=i),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),yn={class:"flex items-start"},_n=L({__name:"MdEditor",props:{content:{},index:{}},setup(t){const n=P(),{saveContent:e,removeContent:l}=n,a=t,o=k(""),i=()=>{l(a.index)};q(()=>{o.value=a.content.text??"none"}),A(o,()=>{e(o.value,null,a.index)});const d=Xe({title:{title:"Title",icon:"v-md-icon-tip",action(c){c.insert(m=>{const s="# <center>",g="</center>",b=m||"Title";return{text:`${s}${b}${g}`,selected:b}})}},icons:{title:"icons",icon:"v-md-icon-tip",menus:[{name:"Attention",text:"Attention",action(c){c.insert(()=>{const m='<span style="font-size: 20px">',s="</span>",g="⚠️";return{text:`${m}${g}${s}`,selected:g}})}},{name:"PiBody",text:"PiBody",action(c){c.insert(()=>{const m="<b>",s="</b>",g='<span style="color: #FF3F85"> Pi</span>Body';return{text:`${m}${g}${s}`,selected:g}})}},{name:"Run",text:"Run",action(c){c.insert(()=>({text:"▶️<b>Run</b>"}))}}]},style:{title:"Style",icon:"v-md-icon-tip",action(c){c.insert(m=>{const s='<span style="">',g="</span>",b=m||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}},underline:{title:"Underline",icon:"v-md-icon-under-line",action(c){c.insert(m=>{const s='<span style="text-decoration: underline">',g="</span>",b=m||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}},tip:{title:"Tip",icon:"v-md-icon-tip",action(c){c.insert(m=>{const s='<div style="background-color:#F3F5F7; padding: 20px; border-left: solid 8px #42B983">',g="</div>",b=m||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}},note:{title:"Note",icon:"v-md-icon-tip",action(c){c.insert(m=>{const s='<div style="background-color:#F3F5F7; padding: 15px; border-left: solid 8px #FFCD6B; margin-bottom: 15px">',g="</div>",b=m||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}}});async function p(c,m,s){const g=s[0],f=new FormData;f.append("file",g);try{const{data:b}=await U.uploadFile(f),z=b.presigned_url;m({url:z,desc:"desc",width:"auto",height:"auto"})}catch(b){console.log(b)}}return(c,m)=>{const s=_e("v-md-editor"),g=O;return r(),_("div",yn,[u(s,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=f=>o.value=f),mode:"edit","left-toolbar":"undo redo clear | tip emoji todo-list | h bold italic strikethrough quote ul ol table hr link code image | title icons style underline tip note","right-toolbar":"",toolbar:d,"disabled-menus":[],onUploadImage:p},null,8,["modelValue","toolbar"]),u(g,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:i})])}}}),xn=ne(_n,[["__scopeId","data-v-2e4065c3"]]),wn={class:"flex items-center"},kn=L({__name:"VideoEditor",props:{content:{},index:{}},setup(t){const n=t,e=P(),{saveContent:l,removeContent:a}=e,o=k(""),i=()=>{a(n.index)};return q(()=>{o.value=n.content.text??""}),A(o,()=>{l(o.value,null,n.index)}),(d,p)=>{const c=J,m=O;return r(),_("div",wn,[u(c,{id:"video",modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=s=>o.value=s),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),u(m,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:i})])}}}),$n={class:"flex flex-col gap-2"},Cn=L({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(t){const n=t,e=P(),{addContent:l}=e,a=k(),o=k([{label:"Text",icon:"pi pi-align-left",command:()=>{l("text")}},{label:"Video",icon:"pi pi-play",command:()=>{l("video")}}]),i=d=>{a.value.toggle(d)};return(d,p)=>{const c=O,m=je,s=D;return r(),y(s,{header:"Contents"},{default:$(()=>[h("div",$n,[(r(!0),_(R,null,G(n.contents,(g,f)=>(r(),_("div",{key:g.id},[g.type=="text"?(r(),y(xn,{key:0,content:g,index:f},null,8,["content","index"])):g.type=="video"?(r(),y(kn,{key:1,content:g,index:f},null,8,["content","index"])):S("",!0)]))),128))]),u(c,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:i,"aria-haspopup":"true","aria-controls":"overlay_menu"}),u(m,{ref_key:"menu",ref:a,id:"overlay_menu",model:o.value,popup:!0},null,8,["model"])]),_:1})}}}),Sn={class:"flex items-center"},Vn=L({__name:"OptionEditor",props:{option:{},index:{}},setup(t){const n=P(),{saveOption:e,removeOption:l}=n,a=t,o=k(""),i=k(!1),d=()=>{l(a.index)};return q(()=>{o.value=a.option.text??"",i.value=a.option.correct}),A([o,i],()=>{e(o.value,i.value,a.index)}),(p,c)=>{const m=dt,s=ke,g=J,f=$e,b=O;return r(),_("div",Sn,[u(f,null,{default:$(()=>[u(s,null,{default:$(()=>[u(m,{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=z=>i.value=z),binary:!0},null,8,["modelValue"])]),_:1}),u(g,{placeholder:"Option",modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=z=>o.value=z),size:"small"},null,8,["modelValue"])]),_:1}),u(b,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d,class:"ml-2"})])}}}),In={class:"flex flex-col gap-2"},Be=L({__name:"OptionsPanel",props:{options:{},guidable:{type:Boolean}},setup(t){const n=t,e=P(),{addOption:l}=e;return(a,o)=>{const i=we,d=O,p=D;return r(),y(p,{header:n.guidable?"Checklist":"Options"},{default:$(()=>[n.guidable?S("",!0):(r(),y(i,{key:0,size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:$(()=>o[0]||(o[0]=[W("*Create options and select correct ones ")])),_:1})),h("div",In,[(r(!0),_(R,null,G(n.options,(c,m)=>(r(),_("div",{key:c.id},[u(Vn,{option:c,index:m},null,8,["option","index"])]))),128))]),u(d,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:v(l)},null,8,["onClick"])]),_:1},8,["header"])}}}),Bn={class:"flex items-center"},Ln=L({__name:"PairEditor",props:{pair:{},index:{}},setup(t){const n=P(),{savePair:e,removePair:l}=n,a=t,o=k(""),i=k(""),d=()=>{l(a.index)};return q(()=>{o.value=a.pair.key,i.value=a.pair.value}),A([o,i],()=>{e(o.value,i.value,a.index)}),(p,c)=>{const m=J,s=ke,g=$e,f=O;return r(),_("div",Bn,[u(g,null,{default:$(()=>[u(m,{placeholder:"Key",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=b=>o.value=b),size:"small"},null,8,["modelValue"]),u(s,null,{default:$(()=>c[2]||(c[2]=[h("div",null,"=",-1)])),_:1}),u(m,{placeholder:"Value",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=b=>i.value=b),size:"small"},null,8,["modelValue"])]),_:1}),u(f,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d,class:"ml-2"})])}}}),zn={class:"flex flex-col gap-2"},Pn=L({__name:"PairsPanel",props:{pairs:{}},setup(t){const n=t,e=P(),{addPair:l}=e;return(a,o)=>{const i=we,d=O,p=D;return r(),y(p,{header:"Pairs"},{default:$(()=>[u(i,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:$(()=>o[0]||(o[0]=[W("*Create matching pairs")])),_:1}),h("div",zn,[(r(!0),_(R,null,G(n.pairs,(c,m)=>(r(),_("div",{key:c.id},[u(Ln,{pair:c,index:m},null,8,["pair","index"])]))),128))]),u(d,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:v(l)},null,8,["onClick"])]),_:1})}}}),Tn={class:"flex-grow dashed-border"},On=L({__name:"SolutionPanel",props:et({skipSubmit:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const n=ue(t,"modelValue"),e=t;return A(()=>e.skipSubmit,()=>{e.skipSubmit&&(n.value="")}),(l,a)=>{const o=D;return r(),y(o,{header:"Solution code"},{default:$(()=>[h("div",Tn,[u(Fe,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i)},null,8,["modelValue"])])]),_:1})}}}),An=ne(On,[["__scopeId","data-v-5f094cb3"]]),Fn={class:"flex-grow dashed-border"},jn=L({__name:"StartingPanel",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const n=ue(t,"modelValue");return(e,l)=>{const a=D;return r(),y(a,{header:"Starting code"},{default:$(()=>[h("div",Fn,[u(Fe,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o)},null,8,["modelValue"])])]),_:1})}}}),Un=ne(jn,[["__scopeId","data-v-c3c10a28"]]),Dn={class:"flex flex-col gap-2"},Mn={class:"flex items-center"},Rn={class:"flex items-center"},En=L({__name:"ActionsPanel",props:{userActions:{},platformActions:{}},setup(t){const n=t,e=P(),{saveUserActions:l,savePlatformActions:a}=e,o=k(null),i=k(null),d=k(["put-module","run-code"]),p=k(["code2ide","light-up","auto-run","auto-put","hide-ide","hide-sim"]);return q(()=>{o.value=n.userActions||null,i.value=n.platformActions||null}),A([o,i],()=>{l(o.value),a(i.value)}),A([()=>n.userActions,()=>n.platformActions],()=>{o.value=n.userActions||null,i.value=n.platformActions||null}),(c,m)=>{const s=Ue,g=D;return r(),y(g,{header:"Actions"},{default:$(()=>[h("div",Dn,[h("div",Mn,[u(s,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=f=>o.value=f),display:"chip",options:d.value,placeholder:"Select user actions",class:"w-full"},null,8,["modelValue","options"])]),h("div",Rn,[u(s,{modelValue:i.value,"onUpdate:modelValue":m[1]||(m[1]=f=>i.value=f),display:"chip",options:p.value,placeholder:"Select platform actions",class:"w-full"},null,8,["modelValue","options"])])])]),_:1})}}}),qn={class:"flex items-center"},Kn=L({__name:"HighlightEditor",props:{highlight:{},index:{}},setup(t){const n=P(),{saveHighlight:e,removeHighlight:l}=n,a=t,o=k(null),i=k(null),d=()=>{l(a.index)};q(()=>{o.value=a.highlight.module,i.value=a.highlight.slot}),A([o,i],()=>{o.value==null||i.value==null||e(o.value,i.value,a.index)});const p=k(["A","B","C","D","E","F"]),c=k(["8","9"]),m=k(["LED","switch","push-button","light-sensor","touch-sensor","potentiometer","encoder","motion-detector","microphone","climate-sensor","gyro-accel","buzzer","color-sensor","joystick","distance-sensor","servo"]),s=X(()=>o.value?o.value==="servo"?c.value:p.value:[...p.value,...c.value]),g=X(()=>i.value?i.value==="8"||i.value==="9"?["servo"]:m.value.filter(f=>f!=="servo"):m.value);return(f,b)=>{const z=be,M=ke,K=$e,T=O;return r(),_("div",qn,[u(K,null,{default:$(()=>[u(z,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=E=>o.value=E),options:g.value,placeholder:"Select module",class:"place-content-center",size:"small"},null,8,["modelValue","options"]),u(M,{class:"h-[35px]"},{default:$(()=>b[2]||(b[2]=[h("div",null,"=>",-1)])),_:1}),u(z,{modelValue:i.value,"onUpdate:modelValue":b[1]||(b[1]=E=>i.value=E),options:s.value,placeholder:"Select slot",size:"small"},null,8,["modelValue","options"])]),_:1}),u(T,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d,class:"ml-2"})])}}}),Hn={class:"flex flex-col gap-2"},Nn=L({__name:"HighlightPanel",props:{highlights:{}},setup(t){const n=t,e=P(),{addHighlight:l}=e;return(a,o)=>{const i=O,d=D;return r(),y(d,{header:"Highlight slots & modules"},{default:$(()=>[h("div",Hn,[(r(!0),_(R,null,G(n.highlights,(p,c)=>(r(),_("div",{key:p.id},[u(Kn,{highlight:p,index:c},null,8,["highlight","index"])]))),128))]),u(i,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:v(l)},null,8,["onClick"])]),_:1})}}}),Gn=L({__name:"ModulesPanel",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const n=ue(t,"modelValue"),e=k(["LED","switch","push-button","light-sensor","touch-sensor","potentiometer","encoder","motion-detector","microphone","climate-sensor","gyro-accel","buzzer","color-sensor","joystick","distance-sensor","servo"]);return(l,a)=>{const o=Ue,i=D;return r(),y(i,{header:"Modules"},{default:$(()=>[u(o,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=d=>n.value=d),display:"chip",options:e.value,placeholder:"Select modules",class:"w-full"},null,8,["modelValue","options"])]),_:1})}}}),Zn={class:"font-bold"},Wn={class:"flex gap-2 flex-wrap"},Yn=L({__name:"TestsPanel",props:{tests:{}},setup(t){const n=P(),e=t,l=Pe(),{lesson:a,stepIndex:o}=te(n),i=()=>{var p;if(o.value==null)return;const d=(p=a.value)==null?void 0:p.steps[o.value].id;l.push({path:`/tester/${d}/`})};return(d,p)=>{const c=O,m=D;return r(),y(m,{header:"Tests"},{header:$(()=>[h("div",Zn,[p[0]||(p[0]=W(" Tests ")),u(c,{icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:i})])]),default:$(()=>[h("div",Wn,[(r(!0),_(R,null,G(e.tests,s=>(r(),_("div",{key:s.url,class:"border p-2 px-4 rounded shadow"},re(s.name),1))),128))])]),_:1})}}}),Jn={class:"flex items-center justify-between w-full"},Qn={class:"flex flex-col gap-2"},Xn={class:"flex items-center"},eo={class:"flex justify-between"},to={class:"flex gap-2"},no={class:"flex justify-between items-center gap-4"},oo={class:"flex items-center justify-end gap-2 mb-8 mt-4"},lo=L({__name:"StepEditor",setup(t){const{locale:n}=ce(),e=tt(),l=P(),{lesson:a,stepIndex:o}=te(l),{removeStep:i,setStepSaving:d,setStep:p}=l,c=k(!1),m=k(["freemium","premium","hackaton","demo"]),s=X(()=>{var V;return o.value==null?null:((V=a.value)==null?void 0:V.steps[o.value])??null}),g=Ae(()=>{f()},1e3,{maxWait:5e3});A(s,(V,x)=>{V==null||x==null||V.id==x.id&&(d(!0),g())},{deep:!0});async function f(){if(s.value!=null){d(!0);try{await U.updateStepTranslationByID(s.value.id,n.value,s.value.title,s.value.inner),await U.updateStepByID(s.value.id,s.value.access_type,s.value.skip_submit,s.value.type)}catch(V){console.log(V)}finally{d(!1)}}}function b(){e.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{z()}})}async function z(){if(!(c.value||s.value==null)){c.value=!0;try{await U.deleteStepByID(s.value.id),i()}catch(V){console.log(V)}finally{c.value=!1}}}function M(V){e.require({message:"Are you sure you want to Copy step?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Copy"},accept:()=>K(V)})}async function K(V){var H;if(s.value==null)return;const x=await he({id:(H=s.value)==null?void 0:H.id,last_edited_time:"",step_type:s.value.type,last_edited_by:0,access_type:s.value.access_type,skip_submit:s.value.skip_submit},V,!1);p(x),f()}const T=k(),E=X(()=>[n.value==="en"?null:{label:"Copy this step from ENG",icon:"pi pi-clone",command:()=>M("en")},n.value==="ru"?null:{label:"Copy this step from RUS",icon:"pi pi-clone",command:()=>M("ru")},n.value==="kk"?null:{label:"Copy this step from KAZ",icon:"pi pi-clone",command:()=>M("kk")}].filter(V=>V!==null)),Z=V=>{T.value.toggle(V)};return(V,x)=>{var oe,Q;const H=O,I=je,w=J,N=Te,F=we,j=Ce,de=He,pe=D;return s.value?(r(),_("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:s.value.id},[u(pe,{header:"Info",class:"mb-2"},{header:$(()=>[h("div",Jn,[x[7]||(x[7]=h("span",{class:"font-semibold"},"Info",-1)),u(H,{icon:"pi pi-download",variant:"text",onClick:Z}),u(I,{ref_key:"menu",ref:T,id:"overlay_menu",model:E.value,popup:!0},null,8,["model"])])]),default:$(()=>[h("div",Qn,[h("div",Xn,[u(N,{variant:"on",class:"w-full"},{default:$(()=>[x[8]||(x[8]=h("label",{for:"title"},"Title",-1)),u(w,{id:"title",modelValue:s.value.title,"onUpdate:modelValue":x[0]||(x[0]=C=>s.value.title=C),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),h("div",eo,[u(F,{size:"small",severity:"secondary",variant:"simple"},{default:$(()=>[W(re(s.value.type),1)]),_:1}),h("div",to,[u(F,{size:"small",severity:"secondary",variant:"simple"},{default:$(()=>x[9]||(x[9]=[W("skip submit")])),_:1}),u(j,{modelValue:s.value.skip_submit,"onUpdate:modelValue":x[1]||(x[1]=C=>s.value.skip_submit=C)},null,8,["modelValue"])])]),h("div",no,[u(F,{size:"small",severity:"secondary",variant:"simple"},{default:$(()=>x[10]||(x[10]=[W("step access")])),_:1}),u(de,{modelValue:s.value.access_type,"onUpdate:modelValue":x[2]||(x[2]=C=>s.value.access_type=C),options:m.value,size:"small"},null,8,["modelValue","options"])])])]),_:1}),u(v(Cn),{contents:s.value.inner.contents,"step-type":s.value.type,class:"mb-2"},null,8,["contents","step-type"]),s.value.type=="code"?(r(),y(v(Un),{key:0,modelValue:s.value.inner.starting,"onUpdate:modelValue":x[3]||(x[3]=C=>s.value.inner.starting=C),class:"mb-2"},null,8,["modelValue"])):S("",!0),s.value.type=="code"?(r(),y(v(An),{key:1,modelValue:s.value.inner.solution,"onUpdate:modelValue":x[4]||(x[4]=C=>s.value.inner.solution=C),"skip-submit":s.value.skip_submit,class:"mb-2"},null,8,["modelValue","skip-submit"])):S("",!0),s.value.type=="code"?(r(),y(v(Yn),{key:2,tests:s.value.inner.tests,class:"mb-2"},null,8,["tests"])):S("",!0),s.value.type=="question"?(r(),y(v(Be),{key:3,options:s.value.inner.options,guidable:!1,class:"mb-2"},null,8,["options"])):S("",!0),s.value.type=="matching"?(r(),y(v(Pn),{key:4,pairs:s.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):S("",!0),s.value.type=="open"?(r(),y(v(bn),{key:5,modelValue:s.value.inner.answer,"onUpdate:modelValue":x[5]||(x[5]=C=>s.value.inner.answer=C),class:"mb-2"},null,8,["modelValue"])):S("",!0),(oe=v(a))!=null&&oe.is_guidable?S("",!0):(r(),y(v(Gn),{key:6,modelValue:s.value.inner.modules,"onUpdate:modelValue":x[6]||(x[6]=C=>s.value.inner.modules=C),guidable:!0,class:"mb-2"},null,8,["modelValue"])),(Q=v(a))!=null&&Q.is_guidable?S("",!0):(r(),y(v(Be),{key:7,options:s.value.inner.options,guidable:!0,class:"mb-2"},null,8,["options"])),u(v(Nn),{highlights:s.value.inner.highlights,class:"mb-2"},null,8,["highlights"]),u(v(En),{"user-actions":s.value.inner.userActions,"platform-actions":s.value.inner.platformActions},null,8,["user-actions","platform-actions"]),h("div",oo,[u(H,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:b,loading:c.value,disabled:c.value},null,8,["loading","disabled"])])])):S("",!0)}}}),ao={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},io={class:"flex flex-1 items-center"},so={class:"flex flex-1 justify-end items-center gap-2"},ro={class:"flex justify-between items-center mb-8"},co={class:"flex justify-end gap-2"},uo=L({__name:"EditorHeader",setup(t){var H;const{locale:n}=ce(),e=Pe(),l=xe(),a=P(),{lesson:o,stepIndex:i}=te(a),{changeStep:d,addStep:p,setSteps:c}=a,m=k(!1),s=k(!1),g=k(!1),f=k(!1),b=k(null),z=k(["article","code","matching","open","question"]),M=nt("el"),K=ot(),T=k([]);yt(M,T,{disabled:((H=o.value)==null?void 0:H.editing_status)=="published",onUpdate:I=>{var w;((w=o.value)==null?void 0:w.editing_status)!="published"&&(_t(T.value,I.oldIndex,I.newIndex,I),lt(async()=>{const N=[];T.value.map(F=>{const j=parseInt(F.id,10);N.push(j)});try{await U.changeStepsOrder(N),K.add({severity:"success",summary:"Steps order saved!",life:2e3})}catch(F){K.add({severity:"error",summary:"Order set error!",detail:F,life:2e3})}}))}});function E(I,w){switch(I){case"article":return"pi pi-align-left";case"code":return w?"pi pi-hashtag":"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function Z(){if(!s.value){s.value=!0;try{const{data:I}=await(l.name==="project-edit"?U.getProjectStepsByID(l.params.id.toString()):U.getModuleStepsByID(l.params.id.toString())),w=[];for(const N of I){const F=await he(N,n.value,!1);w.push(F)}T.value=w,c(w)}catch(I){console.log(I)}finally{s.value=!1}}}q(Z),A(n,Z,{immediate:!0});async function V(){if(b.value){g.value=!0;try{const{data:I}=await U.createStep(b.value),w=await he(I,n.value,!0);l.name=="project-edit"?await U.linkStepToProjectByID(l.params.id.toString(),I.id):l.name=="module-edit"&&await U.linkStepToModuleByID(l.params.id.toString(),I.id),p(b.value,w)}catch(I){console.log(I)}finally{g.value=!1,m.value=!1}}}async function x(I){f.value=!0;try{l.name=="project-edit"?await ae.updateProjectEditingStatus(l.params.id.toString(),I):l.name=="module-edit"&&await ie.updateModuleEditingStatus(l.params.id.toString(),I),window.location.reload()}catch(w){console.log(w)}finally{f.value=!1}}return(I,w)=>{var Q;const N=Oe,F=_e("RouterLink"),j=O,de=Le,pe=be,oe=at;return r(),_(R,null,[h("div",ao,[h("div",io,[u(F,{to:"/",class:"hover:opacity-80 transition"},{default:$(()=>[u(N,{src:v(st),width:"32"},null,8,["src"])]),_:1}),w[7]||(w[7]=h("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),u(j,{icon:"pi pi-angle-left",label:I.$t("back"),severity:"secondary",variant:"text",onClick:w[0]||(w[0]=C=>v(e).go(-1)),size:"small"},null,8,["label"])]),s.value||v(o)==null?(r(),y(de,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):S("",!0),h("div",{ref_key:"el",ref:M,class:"flex items-center gap-1"},[(r(!0),_(R,null,G(T.value,(C,ge)=>(r(),y(j,{key:C.id,icon:E(C.type,C.skip_submit),rounded:"",severity:v(i)==ge?void 0:"secondary",variant:v(i)==ge?void 0:"outlined",onClick:wo=>v(d)(ge),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128)),u(j,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:w[1]||(w[1]=C=>m.value=!0)})],512),h("div",so,[u(bt,{class:"mr-4"}),((Q=v(o))==null?void 0:Q.editing_status)=="inreview"?(r(),y(j,{key:0,label:"Publish",icon:"pi pi-send",size:"small",onClick:w[2]||(w[2]=C=>x("published")),disabled:f.value,loading:f.value},null,8,["disabled","loading"])):(r(),y(j,{key:1,label:"Hide",icon:"pi pi-eye-slash",severity:"danger",size:"small",onClick:w[3]||(w[3]=C=>x("inreview")),disabled:f.value,loading:f.value},null,8,["disabled","loading"])),u(vt),u(ut)])]),u(oe,{visible:m.value,"onUpdate:visible":w[6]||(w[6]=C=>m.value=C),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:$(()=>[h("div",ro,[w[8]||(w[8]=h("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),u(pe,{modelValue:b.value,"onUpdate:modelValue":w[4]||(w[4]=C=>b.value=C),options:z.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),h("div",co,[u(j,{type:"button",label:"Cancel",severity:"secondary",onClick:w[5]||(w[5]=C=>m.value=!1)}),u(j,{type:"button",label:"+ Add",onClick:V,loading:g.value,disabled:g.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),po={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},go={key:1,class:"flex"},mo=L({__name:"LessonPreview",setup(t){const n=P(),{lesson:e,stepIndex:l}=te(n),{changeStep:a}=n,o=X(()=>{var p;return l.value==null?null:((p=e.value)==null?void 0:p.steps[l.value])??null});async function i(){l.value!=null&&a(l.value-1)}async function d(){l.value!=null&&a(l.value+1)}return(p,c)=>{const m=O;return r(),_("div",po,[o.value?(r(),_("div",{key:o.value.id},[o.value.type=="article"?(r(),y(v(pt),{key:0,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="code"?(r(),y(v(gt),{key:1,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="matching"?(r(),y(v(mt),{key:2,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="open"?(r(),y(v(ft),{key:3,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="question"?(r(),y(v(ht),{key:4,step:o.value,isPreview:!0},null,8,["step"])):S("",!0)])):S("",!0),v(e)!=null&&v(e).steps!=null&&v(e).steps.length>0&&o.value&&v(l)!=null?(r(),_("div",go,[v(l)!==0?(r(),y(m,{key:0,label:p.$t("previous"),icon:"pi pi-angle-left",size:"small",onClick:i},null,8,["label"])):S("",!0),v(l)<v(e).steps.length-1?(r(),y(m,{key:1,label:p.$t("next"),icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:d},null,8,["label"])):S("",!0)])):S("",!0)])}}}),fo={key:1,class:"h-[51px]"},ho={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 52px)"}},vo={class:"max-w-[320px] w-full bg-white"},bo={key:0,class:"p-4"},yo={class:"flex-grow border-l"},_o={class:"border-l max-w-[400px] w-full"},xo=L({__name:"EditorView",setup(t){const{locale:n}=ce(),e=xe(),l=P(),{setLesson:a}=l,o=k(!1);async function i(){if(!o.value){o.value=!0;try{if(e.name=="project-edit"){const{data:d}=await ae.getProjectByID(e.params.id.toString()),p=await rt(d,n.value);a(p)}else if(e.name=="module-edit"){const{data:d}=await ie.getModuleByID(e.params.id.toString()),p=await ct(d,n.value);a(p)}}catch(d){console.log(d)}finally{o.value=!1}}}return q(i),A(n,i),(d,p)=>{const c=Le;return r(),_(R,null,[o.value?(r(),_("div",fo)):(r(),y(uo,{key:0})),h("div",ho,[h("div",vo,[o.value?(r(),_("div",bo,[u(c,{height:"192px"}),p[0]||(p[0]=h("br",null,null,-1)),u(c,{height:"32px"}),p[1]||(p[1]=h("br",null,null,-1)),u(c,{height:"32px"})])):(r(),y(hn,{key:1}))]),h("div",yo,[o.value?S("",!0):(r(),y(lo,{key:0}))]),h("div",_o,[o.value?S("",!0):(r(),y(mo,{key:0}))])])],64)}}}),Qo=ne(xo,[["__scopeId","data-v-f260a524"]]);export{Qo as default};
