import{a as be,s as Pe,t as ot}from"./types-BJZksKjt.js";import{u as M}from"./editor-store-ZLhxoFWV.js";import{J as Z,m as d,D as a,E as h,F as k,a0 as J,H as Ee,I as m,ah as G,Y as V,X as g,ai as z,ar as at,a1 as Oe,S as T,aa as Y,T as p,al as _,_ as y,V as v,W as U,a4 as K,as as st,at as Be,a2 as ke,au as Ve,a5 as ze,ac as A,ao as pe,an as fe,e as S,o as R,w as j,af as w,U as de,a6 as De,av as rt,$ as Ke,Z as ve,aw as te,ak as X,ax as ct,aj as ut,ay as dt,az as re,Q as pt,K as ft,L as ht,M as mt,N as vt,O as gt,P as bt,aA as yt,d as Q,aB as ce,v as It,aC as Ot,a8 as kt,R as wt,aD as St,a3 as Ct,aE as xt,am as Ft,ad as Lt,c as Ue,ag as Bt,aq as Re,ae as Vt,aF as $t}from"./index-DQ09DRTx.js";import{a as je,s as ee,d as He,e as Tt,f as Mt,g as At,h as _t,i as Pt,b as Et,_ as zt}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-CKk1Uz2r.js";import{s as he}from"./index-CIId-dDd.js";import{a as we,L as Dt}from"./logo-6aUMIinI.js";import{_ as ne,a as Ge}from"./_plugin-vue_export-helper-CnJYPT4v.js";import{s as Kt,e as Ne,a as oe,t as $e,_ as Ut,b as Rt,M as jt,c as Ht,d as Gt}from"./QuestionStep.vue_vue_type_script_setup_true_lang-DScBrhQW.js";import{s as qe}from"./index-B4CW8PyX.js";import{s as Nt}from"./index-AcPB0r01.js";import"./http-D0lPt2Q8.js";var qt=function(t){var n=t.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(n("textarea.color"),`;
    background: `).concat(n("textarea.background"),`;
    padding-block: `).concat(n("textarea.padding.y"),`;
    padding-inline: `).concat(n("textarea.padding.x"),`;
    border: 1px solid `).concat(n("textarea.border.color"),`;
    transition: background `).concat(n("textarea.transition.duration"),", color ").concat(n("textarea.transition.duration"),", border-color ").concat(n("textarea.transition.duration"),", outline-color ").concat(n("textarea.transition.duration"),", box-shadow ").concat(n("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(n("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(n("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(n("textarea.focus.border.color"),`;
    box-shadow: `).concat(n("textarea.focus.ring.shadow"),`;
    outline: `).concat(n("textarea.focus.ring.width")," ").concat(n("textarea.focus.ring.style")," ").concat(n("textarea.focus.ring.color"),`;
    outline-offset: `).concat(n("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(n("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(n("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(n("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(n("textarea.disabled.background"),`;
    color: `).concat(n("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(n("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(n("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(n("textarea.sm.font.size"),`;
    padding-block: `).concat(n("textarea.sm.padding.y"),`;
    padding-inline: `).concat(n("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(n("textarea.lg.font.size"),`;
    padding-block: `).concat(n("textarea.lg.padding.y"),`;
    padding-inline: `).concat(n("textarea.lg.padding.x"),`;
}
`)},Wt={root:function(t){var n=t.instance,l=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},Yt=Z.extend({name:"textarea",theme:qt,classes:Wt}),Zt={name:"BaseTextarea",extends:je,props:{autoResize:Boolean},style:Yt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},We={name:"Textarea",extends:Zt,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){t.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return d(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},Jt=["value","disabled","aria-invalid"];function Xt(e,t,n,l,o,i){return a(),h("textarea",d({class:e.cx("root"),value:e.d_value,disabled:e.disabled,"aria-invalid":e.invalid||void 0,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,Jt)}We.render=Xt;var Qt=function(t){var n=t.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: `.concat(n("floatlabel.font.weight"),`;
    inset-inline-start: `).concat(n("floatlabel.position.x"),`;
    color: `).concat(n("floatlabel.color"),`;
    transition-duration: `).concat(n("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(n("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(n("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(n("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(n("floatlabel.active.font.size"),`;
    font-weight: `).concat(n("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(n("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: `).concat(n("floatlabel.focus.color"),`;
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: `).concat(n("floatlabel.in.input.padding.top"),`;
    padding-block-end: `).concat(n("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(n("floatlabel.in.active.top"),`;
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: `).concat(n("floatlabel.on.border.radius"),`;
    background: `).concat(n("floatlabel.on.active.background"),`;
    padding: `).concat(n("floatlabel.on.active.padding"),`;
}
`)},en={root:function(t){t.instance;var n=t.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},tn=Z.extend({name:"floatlabel",theme:Qt,classes:en}),nn={name:"BaseFloatLabel",extends:J,props:{variant:{type:String,default:"over"}},style:tn,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Se={name:"FloatLabel",extends:nn,inheritAttrs:!1};function ln(e,t,n,l,o,i){return a(),h("span",d({class:e.cx("root")},e.ptmi("root")),[k(e.$slots,"default")],16)}Se.render=ln;var Ce={name:"PlusIcon",extends:Ee};function on(e,t,n,l,o,i){return a(),h("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}Ce.render=on;var Ye={name:"UploadIcon",extends:Ee};function an(e,t,n,l,o,i){return a(),h("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}Ye.render=an;var sn=function(t){var n=t.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(n("progressbar.height"),`;
    background: `).concat(n("progressbar.background"),`;
    border-radius: `).concat(n("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(n("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(n("progressbar.label.color"),`;
    font-size: `).concat(n("progressbar.label.font.size"),`;
    font-weight: `).concat(n("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`)},rn={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},cn=Z.extend({name:"progressbar",theme:sn,classes:rn}),un={name:"BaseProgressBar",extends:J,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:cn,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},Ze={name:"ProgressBar",extends:un,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},dn=["aria-valuenow"];function pn(e,t,n,l,o,i){return a(),h("div",d({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[i.determinate?(a(),h("div",d({key:0,class:e.cx("value"),style:i.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(a(),h("div",d({key:0,class:e.cx("label")},e.ptm("label")),[k(e.$slots,"default",{},function(){return[G(V(e.value+"%"),1)]})],16)):g("",!0)],16)):i.indeterminate?(a(),h("div",d({key:1,class:e.cx("value")},e.ptm("value")),null,16)):g("",!0)],16,dn)}Ze.render=pn;var fn=function(t){var n=t.dt;return`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid `.concat(n("fileupload.border.color"),`;
    border-radius: `).concat(n("fileupload.border.radius"),`;
    background: `).concat(n("fileupload.background"),`;
    color: `).concat(n("fileupload.color"),`;
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: `).concat(n("fileupload.header.padding"),`;
    background: `).concat(n("fileupload.header.background"),`;
    color: `).concat(n("fileupload.header.color"),`;
    border-style: solid;
    border-width: `).concat(n("fileupload.header.border.width"),`;
    border-color: `).concat(n("fileupload.header.border.color"),`;
    border-radius: `).concat(n("fileupload.header.border.radius"),`;
    gap: `).concat(n("fileupload.header.gap"),`;
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("fileupload.content.gap"),`;
    transition: border-color `).concat(n("fileupload.transition.duration"),`;
    padding: `).concat(n("fileupload.content.padding"),`;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: `).concat(n("fileupload.progressbar.height"),`;
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: `).concat(n("fileupload.filelist.gap"),`;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: `).concat(n("fileupload.file.padding"),`;
    border-block-end: 1px solid `).concat(n("fileupload.file.border.color"),`;
    gap: `).concat(n("fileupload.file.gap"),`;
}

.p-fileupload-file:last-child {
    border-block-end: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: `).concat(n("fileupload.file.info.gap"),`;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-inline-start: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(n("fileupload.content.highlight.border.color"),`;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: `).concat(n("fileupload.basic.gap"),`;
}
`)},hn={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},mn=Z.extend({name:"fileupload",theme:fn,classes:hn}),vn={name:"BaseFileUpload",extends:J,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:mn,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},Je={name:"FileContent",hostName:"FileUpload",extends:J,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),u=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(u," ").concat(i[s])}},components:{Button:z,Badge:at,TimesIcon:Oe}},gn=["alt","src","width"];function bn(e,t,n,l,o,i){var s=T("Badge"),u=T("TimesIcon"),f=T("Button");return a(!0),h(K,null,Y(n.files,function(c,r){return a(),h("div",d({key:c.name+c.type+c.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[m("img",d({role:"presentation",class:e.cx("fileThumbnail"),alt:c.name,src:c.objectURL,width:n.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,gn),m("div",d({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[m("div",d({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),V(c.name),17),m("span",d({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),V(i.formatSize(c.size)),17)],16),p(s,{value:n.badgeValue,class:_(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),m("div",d({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[p(f,{onClick:function(I){return e.$emit("remove",r)},text:"",rounded:"",severity:"danger",class:_(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:y(function(O){return[n.templates.fileremoveicon?(a(),v(U(n.templates.fileremoveicon),{key:0,class:_(O.class),file:c,index:r},null,8,["class","file","index"])):(a(),v(u,d({key:1,class:O.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}Je.render=bn;function ge(e){return On(e)||In(e)||Xe(e)||yn()}function yn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function In(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function On(e){if(Array.isArray(e))return ye(e)}function ue(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Xe(e))||t){n&&(e=n);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return s=c.done,c},e:function(c){u=!0,i=c},f:function(){try{s||n.return==null||n.return()}finally{if(u)throw i}}}}function Xe(e,t){if(e){if(typeof e=="string")return ye(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ye(e,t):void 0}}function ye(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var xe={name:"FileUpload",extends:vn,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=ue(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value;this.isFileSelected(i)||this.validate(i)&&(this.isImage(i)&&(i.objectURL=window.URL.createObjectURL(i)),this.files.push(i))}}catch(s){l.e(s)}finally{l.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var n=new XMLHttpRequest,l=new FormData;this.$emit("before-upload",{xhr:n,formData:l});var o=ue(this.files),i;try{for(o.s();!(i=o.n()).done;){var s=i.value;l.append(this.name,s,s.name)}}catch(u){o.e(u)}finally{o.f()}n.upload.addEventListener("progress",function(u){u.lengthComputable&&(t.progress=Math.round(u.loaded*100/u.total)),t.$emit("progress",{originalEvent:u,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){var u;t.progress=0,n.status>=200&&n.status<300?(t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files})):t.$emit("error",{xhr:n,files:t.files}),(u=t.uploadedFiles).push.apply(u,ge(t.files)),t.clear()}},n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:l}),n.withCredentials=this.withCredentials,n.send(l)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=ue(this.files),l;try{for(n.s();!(l=n.n()).done;){var o=l.value;if(o.name+o.type+o.size===t.name+t.type+t.size)return!0}}catch(i){n.e(i)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(u){return u.trim()}),l=ue(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value,s=this.isWildcard(i)?this.getTypeClass(t.type)===this.getTypeClass(i):t.type==i||this.getFileExtension(t).toLowerCase()===i.toLowerCase();if(s)return!0}}catch(u){l.e(u)}finally{l.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&st(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&Be(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&Be(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=this.multiple||n&&n.length===1;l&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=ge(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=ge(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),u=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(u," ").concat(i[s])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:z,ProgressBar:Ze,Message:he,FileContent:Je,PlusIcon:Ce,UploadIcon:Ye,TimesIcon:Oe},directives:{ripple:ke}},kn=["multiple","accept","disabled"],wn=["files"],Sn=["accept","disabled","multiple"];function Cn(e,t,n,l,o,i){var s=T("Button"),u=T("ProgressBar"),f=T("Message"),c=T("FileContent");return i.isAdvanced?(a(),h("div",d({key:0,class:e.cx("root")},e.ptmi("root")),[m("input",d({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),multiple:e.multiple,accept:e.accept,disabled:i.chooseDisabled},e.ptm("input")),null,16,kn),m("div",d({class:e.cx("header")},e.ptm("header")),[k(e.$slots,"header",{files:o.files,uploadedFiles:o.uploadedFiles,chooseCallback:i.choose,uploadCallback:i.uploader,clearCallback:i.clear},function(){return[p(s,d({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:i.choose,onKeydown:Ve(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(r){return[k(e.$slots,"chooseicon",{},function(){return[(a(),v(U(e.chooseIcon?"span":"PlusIcon"),d({class:[r.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(a(),v(s,d({key:0,class:e.cx("pcUploadButton"),label:i.uploadButtonLabel,onClick:i.uploader,disabled:i.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:y(function(r){return[k(e.$slots,"uploadicon",{},function(){return[(a(),v(U(e.uploadIcon?"span":"UploadIcon"),d({class:[r.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):g("",!0),e.showCancelButton?(a(),v(s,d({key:1,class:e.cx("pcCancelButton"),label:i.cancelButtonLabel,onClick:i.clear,disabled:i.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:y(function(r){return[k(e.$slots,"cancelicon",{},function(){return[(a(),v(U(e.cancelIcon?"span":"TimesIcon"),d({class:[r.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):g("",!0)]})],16),m("div",d({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return i.onDragEnter&&i.onDragEnter.apply(i,arguments)}),onDragover:t[2]||(t[2]=function(){return i.onDragOver&&i.onDragOver.apply(i,arguments)}),onDragleave:t[3]||(t[3]=function(){return i.onDragLeave&&i.onDragLeave.apply(i,arguments)}),onDrop:t[4]||(t[4]=function(){return i.onDrop&&i.onDrop.apply(i,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[k(e.$slots,"content",{files:o.files,uploadedFiles:o.uploadedFiles,removeUploadedFileCallback:i.removeUploadedFile,removeFileCallback:i.remove,progress:o.progress,messages:o.messages},function(){return[i.hasFiles?(a(),v(u,{key:0,value:o.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):g("",!0),(a(!0),h(K,null,Y(o.messages,function(r){return a(),v(f,{key:r,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[G(V(r),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),i.hasFiles?(a(),h("div",{key:1,class:_(e.cx("fileList"))},[p(c,{files:o.files,onRemove:i.remove,badgeValue:i.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):g("",!0),i.hasUploadedFiles?(a(),h("div",{key:2,class:_(e.cx("fileList"))},[p(c,{files:o.uploadedFiles,onRemove:i.removeUploadedFile,badgeValue:i.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):g("",!0)]}),e.$slots.empty&&!i.hasFiles&&!i.hasUploadedFiles?(a(),h("div",ze(d({key:0},e.ptm("empty"))),[k(e.$slots,"empty")],16)):g("",!0)],16)],16)):i.isBasic?(a(),h("div",d({key:1,class:e.cx("root")},e.ptmi("root")),[(a(!0),h(K,null,Y(o.messages,function(r){return a(),v(f,{key:r,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[G(V(r),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),p(s,d({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:i.onBasicUploaderClick,onKeydown:Ve(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(r){return[k(e.$slots,"chooseicon",{},function(){return[(a(),v(U(e.chooseIcon?"span":"PlusIcon"),d({class:[r.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?g("",!0):k(e.$slots,"filelabel",{key:0,class:_(e.cx("filelabel"))},function(){return[m("span",{class:_(e.cx("filelabel")),files:o.files},V(i.basicFileChosenLabel),11,wn)]}),m("input",d({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),onFocus:t[6]||(t[6]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[7]||(t[7]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},e.ptm("input")),null,16,Sn)],16)):g("",!0)}xe.render=Cn;const xn={class:"p-4 h-full"},Fn={key:0},Ln={key:1,class:"flex flex-col gap-4"},Bn={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},Vn=A({__name:"LessonCard",setup(e){const{locale:t}=pe(),n=M(),{lesson:l}=fe(n),o=S(null),i=S(!0),s=S(!1);R(()=>{var c;o.value=((c=l.value)==null?void 0:c.cover_image)??""}),j([()=>{var c;return(c=l.value)==null?void 0:c.title},()=>{var c;return(c=l.value)==null?void 0:c.description},o],()=>{i.value=!1});function u(c){const r=c.files[0],O=new FileReader;O.onload=async I=>{var x;try{o.value=((x=I.target)==null?void 0:x.result)??null}catch(F){alert(F)}},O.readAsDataURL(r)}async function f(){var c;s.value=!0;try{await be.updateProjectByID(l.value.id,((c=o.value)==null?void 0:c.toString())??""),await be.updateProjectTranslationByID(l.value.id,t.value,l.value.title,l.value.description)}catch(r){alert(r)}finally{i.value=!0,s.value=!1}}return(c,r)=>{const O=we,I=xe,x=ee,F=Se,P=We,C=z;return a(),h("div",xn,[w(l)?(a(),h("div",Ln,[m("div",Bn,[o.value?(a(),v(O,{key:0,src:o.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):g("",!0),p(I,{mode:"basic",onSelect:u,customUpload:"",auto:"",severity:"secondary","choose-icon":o.value==null?"pi pi-plus":"pi pi-pencil","choose-label":o.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),p(F,{variant:"on",class:"w-full"},{default:y(()=>[r[2]||(r[2]=m("label",{for:"title"},"Title",-1)),p(x,{id:"title",modelValue:w(l).title,"onUpdate:modelValue":r[0]||(r[0]=D=>w(l).title=D),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),p(F,{variant:"on",class:"w-full"},{default:y(()=>[r[3]||(r[3]=m("label",{for:"description"},"Description",-1)),p(P,{id:"description",modelValue:w(l).description,"onUpdate:modelValue":r[1]||(r[1]=D=>w(l).description=D),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1}),p(C,{label:"Save",severity:"info",icon:"pi pi-save",class:"w-fit self-end",size:"small",onClick:f,disabled:i.value||s.value,loading:s.value},null,8,["disabled","loading"])])):(a(),h("div",Fn,"Null"))])}}}),$n=ne(Vn,[["__scopeId","data-v-915c70a6"]]);var Tn=function(t){var n=t.dt;return`
.p-panel {
    border: 1px solid `.concat(n("panel.border.color"),`;
    border-radius: `).concat(n("panel.border.radius"),`;
    background: `).concat(n("panel.background"),`;
    color: `).concat(n("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(n("panel.header.padding"),`;
    background: `).concat(n("panel.header.background"),`;
    color: `).concat(n("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(n("panel.header.border.width"),`;
    border-color: `).concat(n("panel.header.border.color"),`;
    border-radius: `).concat(n("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(n("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(n("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(n("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(n("panel.footer.padding"),`;
}
`)},Mn={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},An=Z.extend({name:"panel",theme:Tn,classes:Mn}),_n={name:"BasePanel",extends:J,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:An,provide:function(){return{$pcPanel:this,$parentInstance:this}}},N={name:"Panel",extends:_n,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||de()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||de()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:Ce,MinusIcon:Kt,Button:z},directives:{ripple:ke}},Pn=["id"],En=["id","aria-labelledby"];function zn(e,t,n,l,o,i){var s=T("Button");return a(),h("div",d({class:e.cx("root")},e.ptmi("root")),[m("div",d({class:e.cx("header")},e.ptm("header")),[k(e.$slots,"header",{id:o.id+"_header",class:_(e.cx("title"))},function(){return[e.header?(a(),h("span",d({key:0,id:o.id+"_header",class:e.cx("title")},e.ptm("title")),V(e.header),17,Pn)):g("",!0)]}),m("div",d({class:e.cx("headerActions")},e.ptm("headerActions")),[k(e.$slots,"icons"),e.toggleable?(a(),v(s,d({key:0,id:o.id+"_header",class:e.cx("pcToggleButton"),"aria-label":i.buttonAriaLabel,"aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,unstyled:e.unstyled,onClick:i.toggle,onKeydown:i.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:y(function(u){return[k(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed},function(){return[(a(),v(U(o.d_collapsed?"PlusIcon":"MinusIcon"),d({class:u.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):g("",!0)],16)],16),p(Ke,d({name:"p-toggleable-content"},e.ptm("transition")),{default:y(function(){return[De(m("div",d({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[m("div",d({class:e.cx("content")},e.ptm("content")),[k(e.$slots,"default")],16),e.$slots.footer?(a(),h("div",d({key:0,class:e.cx("footer")},e.ptm("footer")),[k(e.$slots,"footer")],16)):g("",!0)],16,En),[[rt,!o.d_collapsed]])]}),_:3},16)],16)}N.render=zn;const Dn={class:"flex items-center"},Kn=A({__name:"AnswerPanel",props:{answer:{}},setup(e){const t=e,n=M(),{saveAnswer:l}=n,o=S("");return R(()=>{o.value=t.answer??""}),j(o,()=>{l(o.value)}),(i,s)=>{const u=ee,f=N;return a(),v(f,{header:"Answer"},{default:y(()=>[m("div",Dn,[p(u,{id:"answer",modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>o.value=c),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),Un={class:"flex items-start"},Rn=A({__name:"MdEditor",props:{content:{},index:{}},setup(e){const t=M(),{saveContent:n,removeContent:l}=t,o=e,i=S(""),s=()=>{l(o.index)};return R(()=>{i.value=o.content.text??"none"}),j(i,()=>{n(i.value,null,o.index)}),(u,f)=>{const c=T("v-md-editor"),r=z;return a(),h("div",Un,[p(c,{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=O=>i.value=O),mode:"edit","left-toolbar":"undo redo clear | h bold italic strikethrough quote ul ol table hr link code","right-toolbar":""},null,8,["modelValue"]),p(r,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:s})])}}}),jn=ne(Rn,[["__scopeId","data-v-927919ee"]]),Hn={class:"flex items-start"},Gn={class:"relative flex flex-grow justify-center items-center dashed-border h-64"},Nn=A({__name:"AssetEditor",props:{content:{},index:{}},setup(e){const t=S(null);function n(f){const c=f.files[0],r=new FileReader;r.onload=async O=>{var I;try{t.value=((I=O.target)==null?void 0:I.result)??null}catch(x){alert(x)}},r.readAsDataURL(c)}const l=M(),{saveContent:o,removeContent:i}=l,s=e,u=()=>{i(s.index)};return R(()=>{t.value=s.content.src??null}),j(t,()=>{o(null,t.value,s.index)}),(f,c)=>{const r=we,O=xe,I=z;return a(),h("div",Hn,[m("div",Gn,[t.value?(a(),v(r,{key:0,src:t.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-64"},null,8,["src"])):g("",!0),p(O,{mode:"basic",onSelect:n,customUpload:"",auto:"",severity:"secondary","choose-icon":t.value==null?"pi pi-plus":"pi pi-pencil","choose-label":t.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),p(I,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:u})])}}}),qn=ne(Nn,[["__scopeId","data-v-0ab8fa7e"]]),Wn={class:"flex items-center"},Yn=A({__name:"VideoEditor",props:{content:{},index:{}},setup(e){const t=e,n=M(),{saveContent:l,removeContent:o}=n,i=S(""),s=()=>{o(t.index)};return R(()=>{i.value=t.content.text??""}),j(i,()=>{l(i.value,null,t.index)}),(u,f)=>{const c=ee,r=z;return a(),h("div",Wn,[p(c,{id:"video",modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=O=>i.value=O),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),p(r,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:s})])}}}),Zn={class:"flex flex-col gap-2"},Jn=A({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(e){const t=e,n=M(),{addContent:l}=n,o=S(),i=S([{label:"Text",icon:"pi pi-align-left",command:()=>{l("text")}},{label:"Image | Gif",icon:"pi pi-image",command:()=>{l("image")}},{label:"Video",icon:"pi pi-play",command:()=>{l("video")}}]),s=u=>{o.value.toggle(u)};return(u,f)=>{const c=z,r=qe,O=N;return a(),v(O,{header:"Contents"},{default:y(()=>[m("div",Zn,[(a(!0),h(K,null,Y(t.contents,(I,x)=>(a(),h("div",{key:I.id},[I.type=="text"?(a(),v(jn,{key:0,content:I,index:x},null,8,["content","index"])):I.type=="image"?(a(),v(qn,{key:1,content:I,index:x},null,8,["content","index"])):I.type=="video"?(a(),v(Yn,{key:2,content:I,index:x},null,8,["content","index"])):g("",!0)]))),128))]),p(c,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:s,"aria-haspopup":"true","aria-controls":"overlay_menu"}),p(r,{ref_key:"menu",ref:o,id:"overlay_menu",model:i.value,popup:!0},null,8,["model"])]),_:1})}}});var Xn=function(t){var n=t.dt;return`
.p-inputgroup,
.p-inputgroup .p-iconfield,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `.concat(n("inputgroup.addon.padding"),`;
    background: `).concat(n("inputgroup.addon.background"),`;
    color: `).concat(n("inputgroup.addon.color"),`;
    border-block-start: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-block-end: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    min-width: `).concat(n("inputgroup.addon.min.width"),`;
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iconfield > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-iconfield:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-end-start-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-iconfield:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-end-end-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

.p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
    border-inline-start: 0;
}
`)},Qn={root:"p-inputgroup"},ei=Z.extend({name:"inputgroup",theme:Xn,classes:Qn}),ti={name:"BaseInputGroup",extends:J,style:ei,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},Fe={name:"InputGroup",extends:ti,inheritAttrs:!1};function ni(e,t,n,l,o,i){return a(),h("div",d({class:e.cx("root")},e.ptmi("root")),[k(e.$slots,"default")],16)}Fe.render=ni;var ii={root:"p-inputgroupaddon"},li=Z.extend({name:"inputgroupaddon",classes:ii}),oi={name:"BaseInputGroupAddon",extends:J,style:li,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},Le={name:"InputGroupAddon",extends:oi,inheritAttrs:!1};function ai(e,t,n,l,o,i){return a(),h("div",d({class:e.cx("root")},e.ptmi("root")),[k(e.$slots,"default")],16)}Le.render=ai;const si={class:"flex items-center"},ri=A({__name:"OptionEditor",props:{option:{},index:{}},setup(e){const t=M(),{saveOption:n,removeOption:l}=t,o=e,i=S(""),s=S(!1),u=()=>{l(o.index)};return R(()=>{i.value=o.option.text??"",s.value=o.option.correct}),j([i,s],()=>{n(i.value,s.value,o.index)}),(f,c)=>{const r=Ne,O=Le,I=ee,x=Fe,F=z;return a(),h("div",si,[p(x,null,{default:y(()=>[p(O,null,{default:y(()=>[p(r,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=P=>s.value=P),binary:!0},null,8,["modelValue"])]),_:1}),p(I,{placeholder:"Option",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=P=>i.value=P),size:"small"},null,8,["modelValue"])]),_:1}),p(F,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:u,class:"ml-2"})])}}}),ci={class:"flex flex-col gap-2"},ui=A({__name:"OptionsPanel",props:{options:{}},setup(e){const t=e,n=M(),{addOption:l}=n;return(o,i)=>{const s=he,u=z,f=N;return a(),v(f,{header:"Options"},{default:y(()=>[p(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:y(()=>i[0]||(i[0]=[G("*Create options and select correct ones ")])),_:1}),m("div",ci,[(a(!0),h(K,null,Y(t.options,(c,r)=>(a(),h("div",{key:c.id},[p(ri,{option:c,index:r},null,8,["option","index"])]))),128))]),p(u,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:w(l)},null,8,["onClick"])]),_:1})}}}),di={class:"flex items-center"},pi=A({__name:"PairEditor",props:{pair:{},index:{}},setup(e){const t=M(),{savePair:n,removePair:l}=t,o=e,i=S(""),s=S(""),u=()=>{l(o.index)};return R(()=>{i.value=o.pair.key,s.value=o.pair.value}),j([i,s],()=>{n(i.value,s.value,o.index)}),(f,c)=>{const r=ee,O=Le,I=Fe,x=z;return a(),h("div",di,[p(I,null,{default:y(()=>[p(r,{placeholder:"Key",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=F=>i.value=F),size:"small"},null,8,["modelValue"]),p(O,null,{default:y(()=>c[2]||(c[2]=[m("div",null,"=",-1)])),_:1}),p(r,{placeholder:"Value",modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=F=>s.value=F),size:"small"},null,8,["modelValue"])]),_:1}),p(x,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:u,class:"ml-2"})])}}}),fi={class:"flex flex-col gap-2"},hi=A({__name:"PairsPanel",props:{pairs:{}},setup(e){const t=e,n=M(),{addPair:l}=n;return(o,i)=>{const s=he,u=z,f=N;return a(),v(f,{header:"Pairs"},{default:y(()=>[p(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:y(()=>i[0]||(i[0]=[G("*Create matching pairs")])),_:1}),m("div",fi,[(a(!0),h(K,null,Y(t.pairs,(c,r)=>(a(),h("div",{key:c.id},[p(pi,{pair:c,index:r},null,8,["pair","index"])]))),128))]),p(u,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:w(l)},null,8,["onClick"])]),_:1})}}}),mi={class:"flex-grow dashed-border"},vi=A({__name:"SolutionPanel",props:{solution:{}},setup(e){const t=e,n=M(),{saveSolution:l}=n,o=S("");return R(()=>{o.value=t.solution??""}),j(o,()=>{l(o.value)}),(i,s)=>{const u=N;return a(),v(u,{header:"Solution code"},{default:y(()=>[m("div",mi,[p(Ge,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=f=>o.value=f)},null,8,["modelValue"])])]),_:1})}}}),gi=ne(vi,[["__scopeId","data-v-1e8de051"]]),bi={class:"flex-grow dashed-border"},yi=A({__name:"StartingPanel",props:{starting:{}},setup(e){const t=e,n=M(),{saveStarting:l}=n,o=S("");return R(()=>{o.value=t.starting??""}),j(o,()=>{l(o.value)}),(i,s)=>{const u=N;return a(),v(u,{header:"Starting code"},{default:y(()=>[m("div",bi,[p(Ge,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=f=>o.value=f)},null,8,["modelValue"])])]),_:1})}}}),Ii=ne(yi,[["__scopeId","data-v-d5b12a01"]]),Oi={class:"flex flex-col gap-2"},ki={class:"flex items-center"},wi={class:"flex items-center"},Si=A({__name:"ActionsPanel",props:{userAction:{},platformAction:{}},setup(e){const t=e,n=M(),{saveUserAction:l,savePlatformAction:o}=n,i=S(null),s=S(null),u=S(["put","run-ide"]),f=S(["code2ide","light-up"]);R(()=>{i.value=t.userAction||null,s.value=t.platformAction||null}),j([i,s],()=>{l(i.value),o(s.value)});function c(){s.value=null}function r(){i.value=null}return(O,I)=>{const x=He,F=z,P=N;return a(),v(P,{header:"Actions"},{default:y(()=>[m("div",Oi,[m("div",ki,[p(x,{modelValue:i.value,"onUpdate:modelValue":I[0]||(I[0]=C=>i.value=C),variant:"filled",options:u.value,placeholder:"User action",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),p(F,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:r})]),m("div",wi,[p(x,{modelValue:s.value,"onUpdate:modelValue":I[1]||(I[1]=C=>s.value=C),variant:"filled",options:f.value,placeholder:"Platform actions",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),p(F,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:c})])])]),_:1})}}});var Ci=function(t){var n=t.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: `).concat(n("chip.border.radius"),`;
    padding-block: `).concat(n("chip.padding.y"),`;
    padding-inline: `).concat(n("chip.padding.x"),`;
    gap: `).concat(n("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(n("chip.icon.color"),`;
    font-size: `).concat(n("chip.icon.font.size"),`;
    width: `).concat(n("chip.icon.size"),`;
    height: `).concat(n("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(n("chip.image.width"),`;
    height: `).concat(n("chip.image.height"),`;
    margin-inline-start: calc(-1 * `).concat(n("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: `).concat(n("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(`).concat(n("chip.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(n("chip.remove.icon.size"),`;
    width: `).concat(n("chip.remove.icon.size"),`;
    height: `).concat(n("chip.remove.icon.size"),`;
    color: `).concat(n("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(n("chip.transition.duration"),", box-shadow ").concat(n("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(n("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(n("chip.remove.icon.focus.ring.width")," ").concat(n("chip.remove.icon.focus.ring.style")," ").concat(n("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(n("chip.remove.icon.focus.ring.offset"),`;
}
`)},xi={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Fi=Z.extend({name:"chip",theme:Ci,classes:xi}),Li={name:"BaseChip",extends:J,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Fi,provide:function(){return{$pcChip:this,$parentInstance:this}}},Qe={name:"Chip",extends:Li,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},components:{TimesCircleIcon:Nt}},Bi=["aria-label"],Vi=["src"];function $i(e,t,n,l,o,i){return o.visible?(a(),h("div",d({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[k(e.$slots,"default",{},function(){return[e.image?(a(),h("img",d({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Vi)):e.$slots.icon?(a(),v(U(e.$slots.icon),d({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),h("span",d({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):g("",!0),e.label?(a(),h("div",d({key:3,class:e.cx("label")},e.ptm("label")),V(e.label),17)):g("",!0)]}),e.removable?k(e.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(a(),v(U(e.removeIcon?"span":"TimesCircleIcon"),d({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:i.close,onKeydown:i.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):g("",!0)],16,Bi)):g("",!0)}Qe.render=$i;var Ti=function(t){var n=t.dt;return`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("multiselect.background"),`;
    border: 1px solid `).concat(n("multiselect.border.color"),`;
    transition: background `).concat(n("multiselect.transition.duration"),", color ").concat(n("multiselect.transition.duration"),", border-color ").concat(n("multiselect.transition.duration"),", outline-color ").concat(n("multiselect.transition.duration"),", box-shadow ").concat(n("multiselect.transition.duration"),`;
    border-radius: `).concat(n("multiselect.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("multiselect.shadow"),`;
}

.p-multiselect:not(.p-disabled):hover {
    border-color: `).concat(n("multiselect.hover.border.color"),`;
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: `).concat(n("multiselect.focus.border.color"),`;
    box-shadow: `).concat(n("multiselect.focus.ring.shadow"),`;
    outline: `).concat(n("multiselect.focus.ring.width")," ").concat(n("multiselect.focus.ring.style")," ").concat(n("multiselect.focus.ring.color"),`;
    outline-offset: `).concat(n("multiselect.focus.ring.offset"),`;
}

.p-multiselect.p-variant-filled {
    background: `).concat(n("multiselect.filled.background"),`;
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: `).concat(n("multiselect.filled.hover.background"),`;
}

.p-multiselect.p-variant-filled.p-focus {
    background: `).concat(n("multiselect.filled.focus.background"),`;
}

.p-multiselect.p-invalid {
    border-color: `).concat(n("multiselect.invalid.border.color"),`;
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: `).concat(n("multiselect.disabled.background"),`;
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("multiselect.dropdown.color"),`;
    width: `).concat(n("multiselect.dropdown.width"),`;
    border-start-end-radius: `).concat(n("multiselect.border.radius"),`;
    border-end-end-radius: `).concat(n("multiselect.border.radius"),`;
}

.p-multiselect-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: `).concat(n("multiselect.clear.icon.color"),`;
    inset-inline-end: `).concat(n("multiselect.dropdown.width"),`;
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: flex;
    align-items: center;
    gap: calc(`).concat(n("multiselect.padding.y"),` / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: `).concat(n("multiselect.padding.y")," ").concat(n("multiselect.padding.x"),`;
    color: `).concat(n("multiselect.color"),`;
}

.p-multiselect-label.p-placeholder {
    color: `).concat(n("multiselect.placeholder.color"),`;
}

.p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
    color: `).concat(n("multiselect.invalid.placeholder.color"),`;
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: `).concat(n("multiselect.disabled.color"),`;
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("multiselect.overlay.background"),`;
    color: `).concat(n("multiselect.overlay.color"),`;
    border: 1px solid `).concat(n("multiselect.overlay.border.color"),`;
    border-radius: `).concat(n("multiselect.overlay.border.radius"),`;
    box-shadow: `).concat(n("multiselect.overlay.shadow"),`;
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: `).concat(n("multiselect.list.header.padding"),`;
}

.p-multiselect-header .p-checkbox {
    margin-inline-end: `).concat(n("multiselect.option.gap"),`;
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: `).concat(n("multiselect.list.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("multiselect.list.gap"),`;
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: `).concat(n("multiselect.option.gap"),`;
    padding: `).concat(n("multiselect.option.padding"),`;
    border: 0 none;
    color: `).concat(n("multiselect.option.color"),`;
    background: transparent;
    transition: background `).concat(n("multiselect.transition.duration"),", color ").concat(n("multiselect.transition.duration"),", border-color ").concat(n("multiselect.transition.duration"),", box-shadow ").concat(n("multiselect.transition.duration"),", outline-color ").concat(n("multiselect.transition.duration"),`;
    border-radius: `).concat(n("multiselect.option.border.radius"),`;
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("multiselect.option.focus.background"),`;
    color: `).concat(n("multiselect.option.focus.color"),`;
}

.p-multiselect-option.p-multiselect-option-selected {
    background: `).concat(n("multiselect.option.selected.background"),`;
    color: `).concat(n("multiselect.option.selected.color"),`;
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: `).concat(n("multiselect.option.selected.focus.background"),`;
    color: `).concat(n("multiselect.option.selected.focus.color"),`;
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: `).concat(n("multiselect.option.group.padding"),`;
    background: `).concat(n("multiselect.option.group.background"),`;
    color: `).concat(n("multiselect.option.group.color"),`;
    font-weight: `).concat(n("multiselect.option.group.font.weight"),`;
}

.p-multiselect-empty-message {
    padding: `).concat(n("multiselect.empty.message.padding"),`;
}

.p-multiselect-label .p-chip {
    padding-block-start: calc(`).concat(n("multiselect.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("multiselect.padding.y"),` / 2);
    border-radius: `).concat(n("multiselect.chip.border.radius"),`;
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(`).concat(n("multiselect.padding.y")," / 2) calc(").concat(n("multiselect.padding.x"),` / 2);
}

.p-multiselect-fluid {
    display: flex;
}

.p-multiselect-sm .p-multiselect-label {
    font-size: `).concat(n("multiselect.sm.font.size"),`;
    padding-block: `).concat(n("multiselect.sm.padding.y"),`;
    padding-inline: `).concat(n("multiselect.sm.padding.x"),`;
}

.p-multiselect-sm .p-multiselect-dropdown .p-icon {
    font-size: `).concat(n("multiselect.sm.font.size"),`;
    width: `).concat(n("multiselect.sm.font.size"),`;
    height: `).concat(n("multiselect.sm.font.size"),`;
}

.p-multiselect-lg .p-multiselect-label {
    font-size: `).concat(n("multiselect.lg.font.size"),`;
    padding-block: `).concat(n("multiselect.lg.padding.y"),`;
    padding-inline: `).concat(n("multiselect.lg.padding.x"),`;
}

.p-multiselect-lg .p-multiselect-dropdown .p-icon {
    font-size: `).concat(n("multiselect.lg.font.size"),`;
    width: `).concat(n("multiselect.lg.font.size"),`;
    height: `).concat(n("multiselect.lg.font.size"),`;
}
`)},Mi={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},Ai={root:function(t){var n=t.instance,l=t.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-display-chip":l.display==="chip","p-disabled":l.disabled,"p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-focus":n.focused,"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-multiselect-open":n.overlayVisible,"p-multiselect-fluid":n.$fluid,"p-multiselect-sm p-inputfield-sm":l.size==="small","p-multiselect-lg p-inputfield-lg":l.size==="large"}]},labelContainer:"p-multiselect-label-container",label:function(t){var n=t.instance,l=t.props;return["p-multiselect-label",{"p-placeholder":n.label===l.placeholder,"p-multiselect-label-empty":!l.placeholder&&(!l.modelValue||l.modelValue.length===0)}]},clearIcon:"p-multiselect-clear-icon",chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:function(t){var n=t.instance,l=t.option,o=t.index,i=t.getItemOptions,s=t.props;return["p-multiselect-option",{"p-multiselect-option-selected":n.isSelected(l)&&s.highlightOnSelect,"p-focus":n.focusedOptionIndex===n.getOptionIndex(o,i),"p-disabled":n.isOptionDisabled(l)}]},emptyMessage:"p-multiselect-empty-message"},_i=Z.extend({name:"multiselect",theme:Ti,classes:Ai,inlineStyles:Mi}),Pi={name:"BaseMultiSelect",extends:je,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},placeholder:String,inputId:{type:String,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},overlayClass:{type:String,default:null},overlayStyle:{type:null,default:null},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},resetFilterOnClear:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:null},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:_i,provide:function(){return{$pcMultiSelect:this,$parentInstance:this}}};function ae(e){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ae(e)}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,l)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Te(Object(n),!0).forEach(function(l){et(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function et(e,t,n){return(t=Ei(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ei(e){var t=zi(e,"string");return ae(t)=="symbol"?t:t+""}function zi(e,t){if(ae(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(ae(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ae(e){return Ri(e)||Ui(e)||Ki(e)||Di()}function Di(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ki(e,t){if(e){if(typeof e=="string")return Ie(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ie(e,t):void 0}}function Ui(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ri(e){if(Array.isArray(e))return Ie(e)}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var tt={name:"MultiSelect",extends:Pi,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(t){this.id=t||de()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||de(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(ve.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,n){return this.virtualScrollerDisabled?t:n&&n(t).index},getOptionLabel:function(t){return this.optionLabel?te(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?te(t,this.optionValue):t},getOptionRenderKey:function(t,n){return this.dataKey?te(t,this.dataKey):this.getOptionLabel(t)+"_".concat(n)},getHeaderCheckboxPTOptions:function(t){return this.ptm(t,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(t,n,l,o){return this.ptm(o,{context:{selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(l,n),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.maxSelectionLimitReached&&!this.isSelected(t)?!0:this.optionDisabled?te(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return te(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return te(t,this.optionGroupChildren)},getAriaPosInset:function(t){var n=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(l){return n.isOptionGroup(l)}).length:t)+1},show:function(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),t&&X(this.$refs.focusInput)},hide:function(t){var n=this,l=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),t&&X(n.$refs.focusInput)};setTimeout(function(){l()},0)},onFocus:function(t){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var n,l;this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",t),(n=(l=this.formField).onBlur)===null||n===void 0||n.call(l)},onKeyDown:function(t){var n=this;if(this.disabled){t.preventDefault();return}var l=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(t);break;default:if(t.code==="KeyA"&&l){var o=this.visibleOptions.filter(function(i){return n.isValidOption(i)}).map(function(i){return n.getOptionValue(i)});this.updateModel(t,o),t.preventDefault();break}!l&&ct(t.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(t),t.preventDefault());break}this.clicked=!1},onContainerClick:function(t){this.disabled||this.loading||t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(t){this.updateModel(t,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?ut(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;X(n)},onLastHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?dt(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;X(n)},onOptionSelect:function(t,n){var l=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(n))){var s=this.isSelected(n),u=null;s?u=this.d_value.filter(function(f){return!re(f,l.getOptionValue(n),l.equalityKey)}):u=[].concat(Ae(this.d_value||[]),[this.getOptionValue(n)]),this.updateModel(t,u),o!==-1&&(this.focusedOptionIndex=o),i&&X(this.$refs.focusInput)}},onOptionMouseMove:function(t,n){this.focusOnHover&&this.changeFocusedOptionIndex(t,n)},onOptionSelectRange:function(t){var n=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(l===-1&&(l=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(l)),l!==-1&&o!==-1){var i=Math.min(l,o),s=Math.max(l,o),u=this.visibleOptions.slice(i,s+1).filter(function(f){return n.isValidOption(f)}).map(function(f){return n.getOptionValue(f)});this.updateModel(t,u)}},onFilterChange:function(t){var n=t.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(t){pt.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(!this.overlayVisible)this.show();else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,this.startRangeIndex,n),this.changeFocusedOptionIndex(t,n)}t.preventDefault()},onArrowUpKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var l=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,l,this.startRangeIndex),this.changeFocusedOptionIndex(t,l),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;t.shiftKey?l.setSelectionRange(0,t.target.selectionStart):(l.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var o=t.metaKey||t.ctrlKey,i=this.findFirstOptionIndex();t.shiftKey&&o&&this.onOptionSelectRange(t,i,this.startRangeIndex),this.changeFocusedOptionIndex(t,i),!this.overlayVisible&&this.show()}t.preventDefault()},onEndKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;if(t.shiftKey)l.setSelectionRange(t.target.selectionStart,l.value.length);else{var o=l.value.length;l.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else{var i=t.metaKey||t.ctrlKey,s=this.findLastOptionIndex();t.shiftKey&&i&&this.onOptionSelectRange(t,this.startRangeIndex,s),this.changeFocusedOptionIndex(t,s),!this.overlayVisible&&this.show()}t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.overlayVisible?this.focusedOptionIndex!==-1&&(t.shiftKey?this.onOptionSelectRange(t,this.focusedOptionIndex):this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(X(t.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(t){ve.set("overlay",t,this.$primevue.config.zIndex.overlay),ft(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&X(this.$refs.filterInput.$el)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){ve.clear(t)},alignOverlay:function(){this.appendTo==="self"?ht(this.overlay,this.$el):(this.overlay.style.minWidth=mt(this.$el)+"px",vt(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.overlayVisible&&t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new gt(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!bt()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},getLabelByValue:function(t){var n=this,l=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],o=l.find(function(i){return!n.isOptionGroup(i)&&re(n.getOptionValue(i),t,n.equalityKey)});return o?this.getOptionLabel(o):null},getSelectedItemsLabel:function(){var t=/{(.*?)}/,n=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return t.test(n)?n.replace(n.match(t)[0],this.d_value.length+""):n},onToggleAll:function(t){var n=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:t,checked:!this.allSelected});else{var l=this.allSelected?[]:this.visibleOptions.filter(function(o){return n.isValidOption(o)}).map(function(o){return n.getOptionValue(o)});this.updateModel(t,l)}},removeOption:function(t,n){var l=this;t.stopPropagation();var o=this.d_value.filter(function(i){return!re(i,n,l.equalityKey)});this.updateModel(t,o)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return yt(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(t){var n;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((n=this.getOptionLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(t){return Q(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isEquals:function(t,n){return re(t,n,this.equalityKey)},isSelected:function(t){var n=this,l=this.getOptionValue(t);return(this.d_value||[]).some(function(o){return n.isEquals(o,l)})},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(n){return t.isValidOption(n)})},findLastOptionIndex:function(){var t=this;return ce(this.visibleOptions,function(n){return t.isValidOption(n)})},findNextOptionIndex:function(t){var n=this,l=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidOption(o)}):-1;return l>-1?l+t+1:t},findPrevOptionIndex:function(t){var n=this,l=t>0?ce(this.visibleOptions.slice(0,t),function(o){return n.isValidOption(o)}):-1;return l>-1?l:t},findSelectedOptionIndex:function(){var t=this;if(this.$filled){for(var n=function(){var s=t.d_value[o],u=t.visibleOptions.findIndex(function(f){return t.isValidSelectedOption(f)&&t.isEquals(s,t.getOptionValue(f))});if(u>-1)return{v:u}},l,o=this.d_value.length-1;o>=0;o--)if(l=n(),l)return l.v}return-1},findFirstSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(n){return t.isValidSelectedOption(n)}):-1},findLastSelectedOptionIndex:function(){var t=this;return this.$filled?ce(this.visibleOptions,function(n){return t.isValidSelectedOption(n)}):-1},findNextSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l+t+1:-1},findPrevSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t>0?ce(this.visibleOptions.slice(0,t),function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l:-1},findNearestSelectedOptionIndex:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=-1;return this.$filled&&(n?(l=this.findPrevSelectedOptionIndex(t),l=l===-1?this.findNextSelectedOptionIndex(t):l):(l=this.findNextSelectedOptionIndex(t),l=l===-1?this.findPrevSelectedOptionIndex(t):l)),l>-1?l:t},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions:function(t){var n=this;this.searchValue=(this.searchValue||"")+t.key;var l=-1;Q(this.searchValue)&&(this.focusedOptionIndex!==-1?(l=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}),l=l===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}):l+this.focusedOptionIndex):l=this.visibleOptions.findIndex(function(o){return n.isOptionMatched(o)}),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(t,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue="",n.searchTimeout=null},500)},changeFocusedOptionIndex:function(t,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[n]))},scrollInView:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var l=n!==-1?"".concat(t.id,"_").concat(n):t.focusedOptionId,o=It(t.list,'li[id="'.concat(l,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(n!==-1?n:t.focusedOptionIndex)})},autoUpdateModel:function(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.$filled){this.focusedOptionIndex=this.findFirstFocusedOptionIndex();var t=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[t])}},updateModel:function(t,n){this.writeValue(n,t),this.$emit("change",{originalEvent:t,value:n})},flatOptions:function(t){var n=this;return(t||[]).reduce(function(l,o,i){l.push({optionGroup:o,group:!0,index:i});var s=n.getOptionGroupChildren(o);return s&&s.forEach(function(u){return l.push(u)}),l},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,n){this.list=t,n&&n(t)},virtualScrollerRef:function(t){this.virtualScroller=t}},computed:{visibleOptions:function(){var t=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var l=Ot.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],i=[];return o.forEach(function(s){var u=t.getOptionGroupChildren(s),f=u.filter(function(c){return l.includes(c)});f.length>0&&i.push(Me(Me({},s),{},et({},typeof t.optionGroupChildren=="string"?t.optionGroupChildren:"items",Ae(f))))}),this.flatOptions(i)}return l}return n},label:function(){var t;if(this.d_value&&this.d_value.length){if(Q(this.maxSelectedLabels)&&this.d_value.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();t="";for(var n=0;n<this.d_value.length;n++)n!==0&&(t+=", "),t+=this.getLabelByValue(this.d_value[n])}else t=this.placeholder;return t},chipSelectedItems:function(){return Q(this.maxSelectedLabels)&&this.d_value&&this.d_value.length>this.maxSelectedLabels},allSelected:function(){var t=this;return this.selectAll!==null?this.selectAll:Q(this.visibleOptions)&&this.visibleOptions.every(function(n){return t.isOptionGroup(n)||t.isOptionDisabled(n)||t.isSelected(n)})},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.d_value&&this.d_value.length===this.selectionLimit},filterResultMessageText:function(){return Q(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.d_value.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(n){return!t.isOptionGroup(n)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return kt(this.fluid)?!!this.$pcFluid:this.fluid},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&Q(this.options)}},directives:{ripple:ke},components:{InputText:ee,Checkbox:Ne,VirtualScroller:Tt,Portal:wt,Chip:Qe,IconField:Mt,InputIcon:At,TimesIcon:Oe,SearchIcon:_t,ChevronDownIcon:Pt,SpinnerIcon:St,CheckIcon:Et}};function se(e){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function _e(e,t,n){return(t=ji(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(e){var t=Hi(e,"string");return se(t)=="symbol"?t:t+""}function Hi(e,t){if(se(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(se(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Gi=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Ni={key:0},qi=["id","aria-label"],Wi=["id"],Yi=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function Zi(e,t,n,l,o,i){var s=T("Chip"),u=T("SpinnerIcon"),f=T("Checkbox"),c=T("InputText"),r=T("SearchIcon"),O=T("InputIcon"),I=T("IconField"),x=T("VirtualScroller"),F=T("Portal"),P=Ct("ripple");return a(),h("div",d({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[7]||(t[7]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},e.ptmi("root")),[m("div",d({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[m("input",d({ref:"focusInput",id:e.inputId,type:"text",readonly:"",disabled:e.disabled,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},e.ptm("hiddenInput")),null,16,Gi)],16),m("div",d({class:e.cx("labelContainer")},e.ptm("labelContainer")),[m("div",d({class:e.cx("label")},e.ptm("label")),[k(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){return[e.display==="comma"?(a(),h(K,{key:0},[G(V(i.label||"empty"),1)],64)):e.display==="chip"?(a(),h(K,{key:1},[i.chipSelectedItems?(a(),h("span",Ni,V(i.label),1)):(a(!0),h(K,{key:1},Y(e.d_value,function(C){return a(),h("span",d({key:i.getLabelByValue(C),class:e.cx("chipItem"),ref_for:!0},e.ptm("chipItem")),[k(e.$slots,"chip",{value:C,removeCallback:function(H){return i.removeOption(H,C)}},function(){return[p(s,{class:_(e.cx("pcChip")),label:i.getLabelByValue(C),removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(H){return i.removeOption(H,C)},pt:e.ptm("pcChip")},{removeicon:y(function(){return[k(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:_(e.cx("chipIcon")),item:C,removeCallback:function(H){return i.removeOption(H,C)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16)}),128)),!e.d_value||e.d_value.length===0?(a(),h(K,{key:2},[G(V(e.placeholder||"empty"),1)],64)):g("",!0)],64)):g("",!0)]})],16)],16),i.isClearIconVisible?k(e.$slots,"clearicon",{key:0,class:_(e.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(a(),v(U(e.clearIcon?"i":"TimesIcon"),d({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:i.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):g("",!0),m("div",d({class:e.cx("dropdown")},e.ptm("dropdown")),[e.loading?k(e.$slots,"loadingicon",{key:0,class:_(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(a(),h("span",d({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(a(),v(u,d({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):k(e.$slots,"dropdownicon",{key:1,class:_(e.cx("dropdownIcon"))},function(){return[(a(),v(U(e.dropdownIcon?"span":"ChevronDownIcon"),d({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true"},e.ptm("dropdownIcon")),null,16,["class"]))]})],16),p(F,{appendTo:e.appendTo},{default:y(function(){return[p(Ke,d({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:y(function(){return[o.overlayVisible?(a(),h("div",d({key:0,ref:i.overlayRef,style:[e.panelStyle,e.overlayStyle],class:[e.cx("overlay"),e.panelClass,e.overlayClass],onClick:t[5]||(t[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:t[6]||(t[6]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},e.ptm("overlay")),[m("span",d({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),k(e.$slots,"header",{value:e.d_value,options:i.visibleOptions}),e.showToggleAll&&e.selectionLimit==null||e.filter?(a(),h("div",d({key:0,class:e.cx("header")},e.ptm("header")),[e.showToggleAll&&e.selectionLimit==null?(a(),v(f,{key:0,modelValue:i.allSelected,binary:!0,disabled:e.disabled,variant:e.variant,"aria-label":i.toggleAllAriaLabel,onChange:i.onToggleAll,unstyled:e.unstyled,pt:i.getHeaderCheckboxPTOptions("pcHeaderCheckbox")},{icon:y(function(C){return[e.$slots.headercheckboxicon?(a(),v(U(e.$slots.headercheckboxicon),{key:0,checked:C.checked,class:_(C.class)},null,8,["checked","class"])):C.checked?(a(),v(U(e.checkboxIcon?"span":"CheckIcon"),d({key:1,class:[C.class,_e({},e.checkboxIcon,C.checked)]},i.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")),null,16,["class"])):g("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):g("",!0),e.filter?(a(),v(I,{key:1,class:_(e.cx("pcFilterContainer")),unstyled:e.unstyled,pt:e.ptm("pcFilterContainer")},{default:y(function(){return[p(c,{ref:"filterInput",value:o.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:_(e.cx("pcFilter")),placeholder:e.filterPlaceholder,disabled:e.disabled,variant:e.variant,unstyled:e.unstyled,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:e.ptm("pcFilter")},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","disabled","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),p(O,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:y(function(){return[k(e.$slots,"filtericon",{},function(){return[e.filterIcon?(a(),h("span",d({key:0,class:e.filterIcon},e.ptm("filterIcon")),null,16)):(a(),v(r,ze(d({key:1},e.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["class","unstyled","pt"])):g("",!0),e.filter?(a(),h("span",d({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),V(i.filterResultMessageText),17)):g("",!0)],16)):g("",!0),m("div",d({class:e.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[p(x,d({ref:i.virtualScrollerRef},e.virtualScrollerOptions,{items:i.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),xt({content:y(function(C){var D=C.styleClass,H=C.contentRef,q=C.items,$=C.getItemOptions,ie=C.contentStyle,L=C.itemSize;return[m("ul",d({ref:function(B){return i.listRef(B,H)},id:o.id+"_list",class:[e.cx("list"),D],style:ie,role:"listbox","aria-multiselectable":"true","aria-label":i.listAriaLabel},e.ptm("list")),[(a(!0),h(K,null,Y(q,function(b,B){return a(),h(K,{key:i.getOptionRenderKey(b,i.getOptionIndex(B,$))},[i.isOptionGroup(b)?(a(),h("li",d({key:0,id:o.id+"_"+i.getOptionIndex(B,$),style:{height:L?L+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[k(e.$slots,"optiongroup",{option:b.optionGroup,index:i.getOptionIndex(B,$)},function(){return[G(V(i.getOptionGroupLabel(b.optionGroup)),1)]})],16,Wi)):De((a(),h("li",d({key:1,id:o.id+"_"+i.getOptionIndex(B,$),style:{height:L?L+"px":void 0},class:e.cx("option",{option:b,index:B,getItemOptions:$}),role:"option","aria-label":i.getOptionLabel(b),"aria-selected":i.isSelected(b),"aria-disabled":i.isOptionDisabled(b),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(B,$)),onClick:function(le){return i.onOptionSelect(le,b,i.getOptionIndex(B,$),!0)},onMousemove:function(le){return i.onOptionMouseMove(le,i.getOptionIndex(B,$))},ref_for:!0},i.getCheckboxPTOptions(b,$,B,"option"),{"data-p-selected":i.isSelected(b),"data-p-focused":o.focusedOptionIndex===i.getOptionIndex(B,$),"data-p-disabled":i.isOptionDisabled(b)}),[p(f,{defaultValue:i.isSelected(b),binary:!0,tabindex:-1,variant:e.variant,unstyled:e.unstyled,pt:i.getCheckboxPTOptions(b,$,B,"pcOptionCheckbox")},{icon:y(function(E){return[e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon?(a(),v(U(e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon),{key:0,checked:E.checked,class:_(E.class)},null,8,["checked","class"])):E.checked?(a(),v(U(e.checkboxIcon?"span":"CheckIcon"),d({key:1,class:[E.class,_e({},e.checkboxIcon,E.checked)],ref_for:!0},i.getCheckboxPTOptions(b,$,B,"pcOptionCheckbox.icon")),null,16,["class"])):g("",!0)]}),_:2},1032,["defaultValue","variant","unstyled","pt"]),k(e.$slots,"option",{option:b,selected:i.isSelected(b),index:i.getOptionIndex(B,$)},function(){return[m("span",d({ref_for:!0},e.ptm("optionLabel")),V(i.getOptionLabel(b)),17)]})],16,Yi)),[[P]])],64)}),128)),o.filterValue&&(!q||q&&q.length===0)?(a(),h("li",d({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[k(e.$slots,"emptyfilter",{},function(){return[G(V(i.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(a(),h("li",d({key:1,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[k(e.$slots,"empty",{},function(){return[G(V(i.emptyMessageText),1)]})],16)):g("",!0)],16,qi)]}),_:2},[e.$slots.loader?{name:"loader",fn:y(function(C){var D=C.options;return[k(e.$slots,"loader",{options:D})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),k(e.$slots,"footer",{value:e.d_value,options:i.visibleOptions}),!e.options||e.options&&e.options.length===0?(a(),h("span",d({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),V(i.emptyMessageText),17)):g("",!0),m("span",d({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),V(i.selectedMessageText),17),m("span",d({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[4]||(t[4]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):g("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}tt.render=Zi;const Ji={class:"flex flex-col gap-4"},Xi=A({__name:"HighlightPanel",props:{slots:{},modules:{}},setup(e){const t=e,n=M(),{saveSlots:l,saveModules:o}=n,i=S(null),s=S(null),u=S(["A","B","C","D","E","F"]),f=S(["LED","PB","LS","TS","PTM","NCD","MT","MCP","CLM","GS","BZ","CLR","JS","DS","SW","OLD","LDT"]);return R(()=>{i.value=t.slots||null,s.value=t.modules||null}),j([i,s],()=>{var c,r;((c=i.value)==null?void 0:c.length)==0&&(i.value=null),((r=s.value)==null?void 0:r.length)==0&&(s.value=null),l(i.value),o(s.value)}),(c,r)=>{const O=tt,I=N;return a(),v(I,{header:"Highlight slots & modules"},{default:y(()=>[m("div",Ji,[p(O,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=x=>i.value=x),display:"chip",options:u.value,placeholder:"Select slots",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),p(O,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=x=>s.value=x),display:"chip",options:f.value,placeholder:"Select modules",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"])])]),_:1})}}}),Qi={class:"flex flex-col gap-2"},el={class:"flex items-center"},tl={class:"flex items-center justify-end gap-2 mb-8 mt-4"},nl=A({__name:"StepEditor",setup(e){const{locale:t}=pe(),n=Ft(),l=Lt(),o=M(),{lesson:i,stepIndex:s}=fe(o),{removeStep:u}=o,f=S(!1),c=S(!1),r=Ue(()=>{var F;return s.value==null?null:((F=i.value)==null?void 0:F.steps[s.value])??null});async function O(){if(!(f.value||r.value==null)){f.value=!0;try{await oe.updateStepTranslationByID(r.value.id,t.value,r.value.title,r.value.inner)}catch(F){alert(F)}finally{f.value=!1}}}function I(){n.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{x()}})}async function x(){if(!(c.value||r.value==null)){c.value=!0;try{await oe.deleteStepByID(r.value.id),u(),l.add({severity:"info",summary:"Deleted",detail:"Successfully removed",life:3e3})}catch(F){alert(F)}finally{c.value=!1}}}return(F,P)=>{const C=ee,D=Se,H=he,q=N,$=z;return r.value?(a(),h("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:r.value.id},[p(q,{header:"Info",class:"mb-2"},{default:y(()=>[m("div",Qi,[m("div",el,[p(D,{variant:"on",class:"w-full"},{default:y(()=>[P[1]||(P[1]=m("label",{for:"title"},"Title",-1)),p(C,{id:"title",modelValue:r.value.title,"onUpdate:modelValue":P[0]||(P[0]=ie=>r.value.title=ie),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),p(H,{size:"small",severity:"secondary",variant:"simple"},{default:y(()=>[G(V(r.value.type),1)]),_:1})])]),_:1}),p(w(Jn),{contents:r.value.inner.contents,"step-type":r.value.type,class:"mb-2"},null,8,["contents","step-type"]),r.value.type=="code"?(a(),v(w(Ii),{key:0,starting:r.value.inner.starting,class:"mb-2"},null,8,["starting"])):g("",!0),r.value.type=="code"?(a(),v(w(gi),{key:1,solution:r.value.inner.solution,class:"mb-2"},null,8,["solution"])):g("",!0),r.value.type=="code"?(a(),v(w(Xi),{key:2,slots:r.value.inner.slots,modules:r.value.inner.modules,class:"mb-2"},null,8,["slots","modules"])):g("",!0),r.value.type=="question"?(a(),v(w(ui),{key:3,options:r.value.inner.options,class:"mb-2"},null,8,["options"])):g("",!0),r.value.type=="matching"?(a(),v(w(hi),{key:4,pairs:r.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):g("",!0),r.value.type=="open"?(a(),v(w(Kn),{key:5,answer:r.value.inner.answer,class:"mb-2"},null,8,["answer"])):g("",!0),p(w(Si),{"user-action":r.value.inner.userAction,"platform-action":r.value.inner.platformAction},null,8,["user-action","platform-action"]),m("div",tl,[p($,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:I,loading:c.value,disabled:c.value},null,8,["loading","disabled"]),p($,{label:"Save",icon:"pi pi-save",severity:"info",size:"small",onClick:O,loading:f.value,disabled:f.value},null,8,["loading","disabled"])])])):g("",!0)}}}),il={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},ll={class:"flex flex-1 items-center"},ol={key:1,class:"flex items-center gap-1"},al={class:"flex items-center gap-1"},sl={class:"flex flex-1 justify-end items-center gap-2"},rl={class:"flex justify-between items-center mb-8"},cl={class:"flex justify-end gap-2"},ul=A({__name:"EditorHeader",setup(e){const{locale:t}=pe(),n=Bt(),l=Re(),o=Vt(),i=M(),{lesson:s,stepIndex:u}=fe(i),{changeStep:f,addStep:c,setSteps:r}=i,O=S(!1),I=S(!1),x=S(!1),F=S(null),P=S(["article","code","matching","open","question"]);function C(L){switch(L){case"article":return"pi pi-align-left";case"code":return"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function D(){if(!I.value){I.value=!0;try{const{data:L}=await oe.getProjectStepsByID(l.params.id.toString()),b=[];for(const B of L){const E=await $e(B,t.value,!1);b.push(E)}r(b)}catch(L){alert(L)}finally{I.value=!1}}}R(D),j(t,D,{immediate:!0});async function H(){if(F.value){x.value=!0;try{const{data:L}=await oe.createStep(F.value),b=await $e(L,t.value,!0);await oe.linkStepToProjectByID(l.params.id.toString(),L.id),c(F.value,b)}catch(L){alert(L)}finally{x.value=!1,O.value=!1}}}const q=S(),$=S([{label:"Profile",icon:"pi pi-user"},{label:"Log out",icon:"pi pi-sign-out",command:()=>{o.logout(),n.replace({name:"login"})}}]),ie=L=>{q.value.toggle(L)};return(L,b)=>{const B=we,E=z,le=Pe,nt=qe,it=He,lt=$t;return a(),h(K,null,[m("div",il,[m("div",ll,[p(B,{src:w(Dt),width:"32"},null,8,["src"]),b[5]||(b[5]=m("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),p(E,{id:"#projects",icon:"pi pi-angle-left",label:L.$t("projects"),severity:"secondary",variant:"text",onClick:b[0]||(b[0]=W=>w(n).push({name:"projects"})),size:"small"},null,8,["label"])]),I.value||w(s)==null?(a(),v(le,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):(a(),h("div",ol,[m("div",al,[(a(!0),h(K,null,Y(w(s).steps,(W,me)=>(a(),v(E,{key:W.id,icon:C(W.type),rounded:"",severity:w(u)==me?void 0:"secondary",variant:w(u)==me?void 0:"outlined",onClick:Ol=>w(f)(me),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128))]),p(E,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:b[1]||(b[1]=W=>O.value=!0)})])),m("div",sl,[p(zt),p(E,{type:"button",icon:"pi pi-ellipsis-v",onClick:ie,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),p(nt,{ref_key:"menu",ref:q,id:"overlay_menu",model:$.value,popup:!0},null,8,["model"])])]),p(lt,{visible:O.value,"onUpdate:visible":b[4]||(b[4]=W=>O.value=W),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:y(()=>[m("div",rl,[b[6]||(b[6]=m("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),p(it,{modelValue:F.value,"onUpdate:modelValue":b[2]||(b[2]=W=>F.value=W),options:P.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),m("div",cl,[p(E,{type:"button",label:"Cancel",severity:"secondary",onClick:b[3]||(b[3]=W=>O.value=!1)}),p(E,{type:"button",label:"+ Add",onClick:H,loading:x.value,disabled:x.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),dl={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},pl={key:0},fl={key:1,class:"flex"},hl=A({__name:"LessonPreview",setup(e){const t=M(),{lesson:n,stepIndex:l}=fe(t),{changeStep:o}=t,i=Ue(()=>{var f;return l.value==null?null:((f=n.value)==null?void 0:f.steps[l.value])??null});async function s(){l.value!=null&&o(l.value-1)}async function u(){l.value!=null&&o(l.value+1)}return(f,c)=>{const r=z;return a(),h("div",dl,[i.value?(a(),h("div",pl,[i.value.type=="article"?(a(),v(w(Ut),{key:0,step:i.value},null,8,["step"])):i.value.type=="code"?(a(),v(w(Rt),{key:1,step:i.value},null,8,["step"])):i.value.type=="matching"?(a(),v(w(jt),{key:2,step:i.value},null,8,["step"])):i.value.type=="open"?(a(),v(w(Ht),{key:3,step:i.value},null,8,["step"])):i.value.type=="question"?(a(),v(w(Gt),{key:4,step:i.value},null,8,["step"])):g("",!0)])):g("",!0),w(n)!=null&&w(n).steps!=null&&w(n).steps.length>0&&i.value?(a(),h("div",fl,[w(l)!==0?(a(),v(r,{key:0,label:"Previous",icon:"pi pi-angle-left",size:"small",onClick:s})):g("",!0),w(l)<w(n).steps.length-1?(a(),v(r,{key:1,label:"Next",icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:u})):g("",!0)])):g("",!0)])}}}),ml={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 58px)"}},vl={class:"max-w-[320px] w-full bg-white"},gl={key:0,class:"p-4"},bl={class:"flex-grow border-l"},yl={class:"border-l max-w-[400px] w-full"},Il=A({__name:"EditorView",setup(e){const{locale:t}=pe(),n=Re(),l=M(),{setLesson:o}=l,i=S(!1);async function s(){if(!i.value){i.value=!0;try{const{data:u}=await be.getProjectByID(n.params.id.toString()),f=await ot(u,t.value);o(f)}catch(u){alert(u)}finally{i.value=!1}}}return R(s),j(t,s),(u,f)=>{const c=Pe;return a(),h(K,null,[i.value?g("",!0):(a(),v(ul,{key:0})),m("div",ml,[m("div",vl,[i.value?(a(),h("div",gl,[p(c,{height:"192px"}),f[0]||(f[0]=m("br",null,null,-1)),p(c,{height:"32px"}),f[1]||(f[1]=m("br",null,null,-1)),p(c,{height:"32px"})])):(a(),v($n,{key:1}))]),m("div",bl,[i.value?g("",!0):(a(),v(nl,{key:0}))]),m("div",yl,[i.value?g("",!0):(a(),v(hl,{key:0}))])])],64)}}}),Ml=ne(Il,[["__scopeId","data-v-a4780613"]]);export{Ml as default};
