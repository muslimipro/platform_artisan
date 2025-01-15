import{a as Ie,s as Ge,t as bt}from"./types-Bvcz5iWp.js";import{u as $}from"./editor-store-DqejoYgb.js";import{J as N,m as c,D as a,E as f,F as C,a0 as J,H as he,I as m,ag as G,Y as B,X as b,ah as E,ap as vt,S as V,a9 as X,T as h,ak as z,_ as y,V as g,W as T,a3 as P,aq as Ne,ar as Me,a1 as me,as as Ee,a4 as We,ab as M,al as ge,am as be,e as S,o as _,w as j,ae as O,U as le,a5 as Se,at as yt,$ as xe,Z as ie,au as ne,aj as Y,av as wt,ai as Ct,aw as It,ax as de,Q as kt,K as qe,L as Ot,M as Ze,N as St,O as xt,P as Lt,ay as Ft,d as Q,az as pe,v as Bt,aA as Vt,a7 as Dt,R as Ye,aB as zt,a2 as Xe,aC as $t,c as Le,aD as Ae,aE as Te,h as Mt,aF as Et,aG as At,aH as Tt,af as Pt,ao as Je}from"./index-RW0gPhT6.js";import{a as Qe,s as ee,d as et,e as Kt,f as Rt,g as Ut,h as _t,i as jt,b as Ht,_ as Gt}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-DLeo4-HJ.js";import{a as ve,b as Fe,L as Nt}from"./logo-B6ezLIKK.js";import{s as ye}from"./index-dZ05eilR.js";import{_ as oe,a as tt}from"./_plugin-vue_export-helper-6uhltXGq.js";import{s as Wt,e as nt,a as se,t as Pe,_ as qt,b as Zt,M as Yt,c as Xt,d as Jt}from"./QuestionStep.vue_vue_type_script_setup_true_lang-F-5srDDD.js";import{s as it}from"./index-BtzmQAXC.js";import{s as Qt}from"./index-C4-c0WUN.js";import"./http-CLrmqCzG.js";var en=function(t){var n=t.dt;return`
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
`)},tn={root:function(t){var n=t.instance,l=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},nn=N.extend({name:"textarea",theme:en,classes:tn}),ln={name:"BaseTextarea",extends:Qe,props:{autoResize:Boolean},style:nn,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},lt={name:"Textarea",extends:ln,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){t.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return c(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},on=["value","disabled","aria-invalid"];function an(e,t,n,l,o,i){return a(),f("textarea",c({class:e.cx("root"),value:e.d_value,disabled:e.disabled,"aria-invalid":e.invalid||void 0,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,on)}lt.render=an;var sn=function(t){var n=t.dt;return`
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
`)},rn={root:function(t){t.instance;var n=t.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},cn=N.extend({name:"floatlabel",theme:sn,classes:rn}),un={name:"BaseFloatLabel",extends:J,props:{variant:{type:String,default:"over"}},style:cn,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Be={name:"FloatLabel",extends:un,inheritAttrs:!1};function dn(e,t,n,l,o,i){return a(),f("span",c({class:e.cx("root")},e.ptmi("root")),[C(e.$slots,"default")],16)}Be.render=dn;var Ve={name:"PlusIcon",extends:he};function pn(e,t,n,l,o,i){return a(),f("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}Ve.render=pn;var ot={name:"UploadIcon",extends:he};function fn(e,t,n,l,o,i){return a(),f("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}ot.render=fn;var hn=function(t){var n=t.dt;return`
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
`)},mn={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},gn=N.extend({name:"progressbar",theme:hn,classes:mn}),bn={name:"BaseProgressBar",extends:J,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:gn,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},at={name:"ProgressBar",extends:bn,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},vn=["aria-valuenow"];function yn(e,t,n,l,o,i){return a(),f("div",c({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[i.determinate?(a(),f("div",c({key:0,class:e.cx("value"),style:i.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(a(),f("div",c({key:0,class:e.cx("label")},e.ptm("label")),[C(e.$slots,"default",{},function(){return[G(B(e.value+"%"),1)]})],16)):b("",!0)],16)):i.indeterminate?(a(),f("div",c({key:1,class:e.cx("value")},e.ptm("value")),null,16)):b("",!0)],16,vn)}at.render=yn;var wn=function(t){var n=t.dt;return`
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
`)},Cn={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},In=N.extend({name:"fileupload",theme:wn,classes:Cn}),kn={name:"BaseFileUpload",extends:J,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:In,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},st={name:"FileContent",hostName:"FileUpload",extends:J,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),d=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(d," ").concat(i[s])}},components:{Button:E,Badge:vt,TimesIcon:ve}},On=["alt","src","width"];function Sn(e,t,n,l,o,i){var s=V("Badge"),d=V("TimesIcon"),r=V("Button");return a(!0),f(P,null,X(n.files,function(u,p){return a(),f("div",c({key:u.name+u.type+u.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[m("img",c({role:"presentation",class:e.cx("fileThumbnail"),alt:u.name,src:u.objectURL,width:n.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,On),m("div",c({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[m("div",c({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),B(u.name),17),m("span",c({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),B(i.formatSize(u.size)),17)],16),h(s,{value:n.badgeValue,class:z(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),m("div",c({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[h(r,{onClick:function(v){return e.$emit("remove",p)},text:"",rounded:"",severity:"danger",class:z(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:y(function(w){return[n.templates.fileremoveicon?(a(),g(T(n.templates.fileremoveicon),{key:0,class:z(w.class),file:u,index:p},null,8,["class","file","index"])):(a(),g(d,c({key:1,class:w.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}st.render=Sn;function Ce(e){return Fn(e)||Ln(e)||rt(e)||xn()}function xn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ln(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fn(e){if(Array.isArray(e))return ke(e)}function fe(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=rt(e))||t){n&&(e=n);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return s=u.done,u},e:function(u){d=!0,i=u},f:function(){try{s||n.return==null||n.return()}finally{if(d)throw i}}}}function rt(e,t){if(e){if(typeof e=="string")return ke(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var De={name:"FileUpload",extends:kn,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=fe(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value;this.isFileSelected(i)||this.validate(i)&&(this.isImage(i)&&(i.objectURL=window.URL.createObjectURL(i)),this.files.push(i))}}catch(s){l.e(s)}finally{l.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var n=new XMLHttpRequest,l=new FormData;this.$emit("before-upload",{xhr:n,formData:l});var o=fe(this.files),i;try{for(o.s();!(i=o.n()).done;){var s=i.value;l.append(this.name,s,s.name)}}catch(d){o.e(d)}finally{o.f()}n.upload.addEventListener("progress",function(d){d.lengthComputable&&(t.progress=Math.round(d.loaded*100/d.total)),t.$emit("progress",{originalEvent:d,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){var d;t.progress=0,n.status>=200&&n.status<300?(t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files})):t.$emit("error",{xhr:n,files:t.files}),(d=t.uploadedFiles).push.apply(d,Ce(t.files)),t.clear()}},n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:l}),n.withCredentials=this.withCredentials,n.send(l)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=fe(this.files),l;try{for(n.s();!(l=n.n()).done;){var o=l.value;if(o.name+o.type+o.size===t.name+t.type+t.size)return!0}}catch(i){n.e(i)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(d){return d.trim()}),l=fe(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value,s=this.isWildcard(i)?this.getTypeClass(t.type)===this.getTypeClass(i):t.type==i||this.getFileExtension(t).toLowerCase()===i.toLowerCase();if(s)return!0}}catch(d){l.e(d)}finally{l.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&Ne(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&Me(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&Me(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=this.multiple||n&&n.length===1;l&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=Ce(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=Ce(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),d=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(d," ").concat(i[s])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:E,ProgressBar:at,Message:ye,FileContent:st,PlusIcon:Ve,UploadIcon:ot,TimesIcon:ve},directives:{ripple:me}},Bn=["multiple","accept","disabled"],Vn=["files"],Dn=["accept","disabled","multiple"];function zn(e,t,n,l,o,i){var s=V("Button"),d=V("ProgressBar"),r=V("Message"),u=V("FileContent");return i.isAdvanced?(a(),f("div",c({key:0,class:e.cx("root")},e.ptmi("root")),[m("input",c({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),multiple:e.multiple,accept:e.accept,disabled:i.chooseDisabled},e.ptm("input")),null,16,Bn),m("div",c({class:e.cx("header")},e.ptm("header")),[C(e.$slots,"header",{files:o.files,uploadedFiles:o.uploadedFiles,chooseCallback:i.choose,uploadCallback:i.uploader,clearCallback:i.clear},function(){return[h(s,c({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:i.choose,onKeydown:Ee(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(p){return[C(e.$slots,"chooseicon",{},function(){return[(a(),g(T(e.chooseIcon?"span":"PlusIcon"),c({class:[p.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(a(),g(s,c({key:0,class:e.cx("pcUploadButton"),label:i.uploadButtonLabel,onClick:i.uploader,disabled:i.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:y(function(p){return[C(e.$slots,"uploadicon",{},function(){return[(a(),g(T(e.uploadIcon?"span":"UploadIcon"),c({class:[p.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0),e.showCancelButton?(a(),g(s,c({key:1,class:e.cx("pcCancelButton"),label:i.cancelButtonLabel,onClick:i.clear,disabled:i.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:y(function(p){return[C(e.$slots,"cancelicon",{},function(){return[(a(),g(T(e.cancelIcon?"span":"TimesIcon"),c({class:[p.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0)]})],16),m("div",c({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return i.onDragEnter&&i.onDragEnter.apply(i,arguments)}),onDragover:t[2]||(t[2]=function(){return i.onDragOver&&i.onDragOver.apply(i,arguments)}),onDragleave:t[3]||(t[3]=function(){return i.onDragLeave&&i.onDragLeave.apply(i,arguments)}),onDrop:t[4]||(t[4]=function(){return i.onDrop&&i.onDrop.apply(i,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[C(e.$slots,"content",{files:o.files,uploadedFiles:o.uploadedFiles,removeUploadedFileCallback:i.removeUploadedFile,removeFileCallback:i.remove,progress:o.progress,messages:o.messages},function(){return[i.hasFiles?(a(),g(d,{key:0,value:o.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):b("",!0),(a(!0),f(P,null,X(o.messages,function(p){return a(),g(r,{key:p,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[G(B(p),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),i.hasFiles?(a(),f("div",{key:1,class:z(e.cx("fileList"))},[h(u,{files:o.files,onRemove:i.remove,badgeValue:i.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0),i.hasUploadedFiles?(a(),f("div",{key:2,class:z(e.cx("fileList"))},[h(u,{files:o.uploadedFiles,onRemove:i.removeUploadedFile,badgeValue:i.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0)]}),e.$slots.empty&&!i.hasFiles&&!i.hasUploadedFiles?(a(),f("div",We(c({key:0},e.ptm("empty"))),[C(e.$slots,"empty")],16)):b("",!0)],16)],16)):i.isBasic?(a(),f("div",c({key:1,class:e.cx("root")},e.ptmi("root")),[(a(!0),f(P,null,X(o.messages,function(p){return a(),g(r,{key:p,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[G(B(p),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),h(s,c({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:i.onBasicUploaderClick,onKeydown:Ee(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(p){return[C(e.$slots,"chooseicon",{},function(){return[(a(),g(T(e.chooseIcon?"span":"PlusIcon"),c({class:[p.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?b("",!0):C(e.$slots,"filelabel",{key:0,class:z(e.cx("filelabel"))},function(){return[m("span",{class:z(e.cx("filelabel")),files:o.files},B(i.basicFileChosenLabel),11,Vn)]}),m("input",c({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),onFocus:t[6]||(t[6]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[7]||(t[7]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},e.ptm("input")),null,16,Dn)],16)):b("",!0)}De.render=zn;const $n={class:"p-4 h-full"},Mn={key:0},En={key:1,class:"flex flex-col gap-4"},An={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},Tn=M({__name:"LessonCard",setup(e){const{locale:t}=ge(),n=$(),{lesson:l}=be(n),o=S(null),i=S(!0),s=S(!1);_(()=>{var u;o.value=((u=l.value)==null?void 0:u.cover_image)??""}),j([()=>{var u;return(u=l.value)==null?void 0:u.title},()=>{var u;return(u=l.value)==null?void 0:u.description},o],()=>{i.value=!1});function d(u){const p=u.files[0],w=new FileReader;w.onload=async v=>{var I;try{o.value=((I=v.target)==null?void 0:I.result)??null}catch(D){alert(D)}},w.readAsDataURL(p)}async function r(){var u;s.value=!0;try{await Ie.updateProjectByID(l.value.id,((u=o.value)==null?void 0:u.toString())??""),await Ie.updateProjectTranslationByID(l.value.id,t.value,l.value.title,l.value.description)}catch(p){alert(p)}finally{i.value=!0,s.value=!1}}return(u,p)=>{const w=Fe,v=De,I=ee,D=Be,U=lt,k=E;return a(),f("div",$n,[O(l)?(a(),f("div",En,[m("div",An,[o.value?(a(),g(w,{key:0,src:o.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):b("",!0),h(v,{mode:"basic",onSelect:d,customUpload:"",auto:"",severity:"secondary","choose-icon":o.value==null?"pi pi-plus":"pi pi-pencil","choose-label":o.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),h(D,{variant:"on",class:"w-full"},{default:y(()=>[p[2]||(p[2]=m("label",{for:"title"},"Title",-1)),h(I,{id:"title",modelValue:O(l).title,"onUpdate:modelValue":p[0]||(p[0]=K=>O(l).title=K),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),h(D,{variant:"on",class:"w-full"},{default:y(()=>[p[3]||(p[3]=m("label",{for:"description"},"Description",-1)),h(U,{id:"description",modelValue:O(l).description,"onUpdate:modelValue":p[1]||(p[1]=K=>O(l).description=K),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1}),h(k,{label:"Save",severity:"info",icon:"pi pi-save",class:"w-fit self-end",size:"small",onClick:r,disabled:i.value||s.value,loading:s.value},null,8,["disabled","loading"])])):(a(),f("div",Mn,"Null"))])}}}),Pn=oe(Tn,[["__scopeId","data-v-915c70a6"]]);var Kn=function(t){var n=t.dt;return`
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
`)},Rn={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Un=N.extend({name:"panel",theme:Kn,classes:Rn}),_n={name:"BasePanel",extends:J,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Un,provide:function(){return{$pcPanel:this,$parentInstance:this}}},W={name:"Panel",extends:_n,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||le()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||le()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:Ve,MinusIcon:Wt,Button:E},directives:{ripple:me}},jn=["id"],Hn=["id","aria-labelledby"];function Gn(e,t,n,l,o,i){var s=V("Button");return a(),f("div",c({class:e.cx("root")},e.ptmi("root")),[m("div",c({class:e.cx("header")},e.ptm("header")),[C(e.$slots,"header",{id:o.id+"_header",class:z(e.cx("title"))},function(){return[e.header?(a(),f("span",c({key:0,id:o.id+"_header",class:e.cx("title")},e.ptm("title")),B(e.header),17,jn)):b("",!0)]}),m("div",c({class:e.cx("headerActions")},e.ptm("headerActions")),[C(e.$slots,"icons"),e.toggleable?(a(),g(s,c({key:0,id:o.id+"_header",class:e.cx("pcToggleButton"),"aria-label":i.buttonAriaLabel,"aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,unstyled:e.unstyled,onClick:i.toggle,onKeydown:i.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:y(function(d){return[C(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed},function(){return[(a(),g(T(o.d_collapsed?"PlusIcon":"MinusIcon"),c({class:d.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):b("",!0)],16)],16),h(xe,c({name:"p-toggleable-content"},e.ptm("transition")),{default:y(function(){return[Se(m("div",c({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[m("div",c({class:e.cx("content")},e.ptm("content")),[C(e.$slots,"default")],16),e.$slots.footer?(a(),f("div",c({key:0,class:e.cx("footer")},e.ptm("footer")),[C(e.$slots,"footer")],16)):b("",!0)],16,Hn),[[yt,!o.d_collapsed]])]}),_:3},16)],16)}W.render=Gn;const Nn={class:"flex items-center"},Wn=M({__name:"AnswerPanel",props:{answer:{}},setup(e){const t=e,n=$(),{saveAnswer:l}=n,o=S("");return _(()=>{o.value=t.answer??""}),j(o,()=>{l(o.value)}),(i,s)=>{const d=ee,r=W;return a(),g(r,{header:"Answer"},{default:y(()=>[m("div",Nn,[h(d,{id:"answer",modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=u=>o.value=u),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),qn={class:"flex items-start"},Zn=M({__name:"MdEditor",props:{content:{},index:{}},setup(e){const t=$(),{saveContent:n,removeContent:l}=t,o=e,i=S(""),s=()=>{l(o.index)};return _(()=>{i.value=o.content.text??"none"}),j(i,()=>{n(i.value,null,o.index)}),(d,r)=>{const u=V("v-md-editor"),p=E;return a(),f("div",qn,[h(u,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=w=>i.value=w),mode:"edit","left-toolbar":"undo redo clear | h bold italic strikethrough quote ul ol table hr link code","right-toolbar":""},null,8,["modelValue"]),h(p,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:s})])}}}),Yn=oe(Zn,[["__scopeId","data-v-927919ee"]]),Xn={class:"flex items-start"},Jn={class:"relative flex flex-grow justify-center items-center dashed-border h-64"},Qn=M({__name:"AssetEditor",props:{content:{},index:{}},setup(e){const t=S(null);function n(r){const u=r.files[0],p=new FileReader;p.onload=async w=>{var v;try{t.value=((v=w.target)==null?void 0:v.result)??null}catch(I){alert(I)}},p.readAsDataURL(u)}const l=$(),{saveContent:o,removeContent:i}=l,s=e,d=()=>{i(s.index)};return _(()=>{t.value=s.content.src??null}),j(t,()=>{o(null,t.value,s.index)}),(r,u)=>{const p=Fe,w=De,v=E;return a(),f("div",Xn,[m("div",Jn,[t.value?(a(),g(p,{key:0,src:t.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-64"},null,8,["src"])):b("",!0),h(w,{mode:"basic",onSelect:n,customUpload:"",auto:"",severity:"secondary","choose-icon":t.value==null?"pi pi-plus":"pi pi-pencil","choose-label":t.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),h(v,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:d})])}}}),ei=oe(Qn,[["__scopeId","data-v-0ab8fa7e"]]),ti={class:"flex items-center"},ni=M({__name:"VideoEditor",props:{content:{},index:{}},setup(e){const t=e,n=$(),{saveContent:l,removeContent:o}=n,i=S(""),s=()=>{o(t.index)};return _(()=>{i.value=t.content.text??""}),j(i,()=>{l(i.value,null,t.index)}),(d,r)=>{const u=ee,p=E;return a(),f("div",ti,[h(u,{id:"video",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=w=>i.value=w),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),h(p,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:s})])}}}),ii={class:"flex flex-col gap-2"},li=M({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(e){const t=e,n=$(),{addContent:l}=n,o=S(),i=S([{label:"Text",icon:"pi pi-align-left",command:()=>{l("text")}},{label:"Image | Gif",icon:"pi pi-image",command:()=>{l("image")}},{label:"Video",icon:"pi pi-play",command:()=>{l("video")}}]),s=d=>{o.value.toggle(d)};return(d,r)=>{const u=E,p=it,w=W;return a(),g(w,{header:"Contents"},{default:y(()=>[m("div",ii,[(a(!0),f(P,null,X(t.contents,(v,I)=>(a(),f("div",{key:v.id},[v.type=="text"?(a(),g(Yn,{key:0,content:v,index:I},null,8,["content","index"])):v.type=="image"?(a(),g(ei,{key:1,content:v,index:I},null,8,["content","index"])):v.type=="video"?(a(),g(ni,{key:2,content:v,index:I},null,8,["content","index"])):b("",!0)]))),128))]),h(u,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:s,"aria-haspopup":"true","aria-controls":"overlay_menu"}),h(p,{ref_key:"menu",ref:o,id:"overlay_menu",model:i.value,popup:!0},null,8,["model"])]),_:1})}}});var oi=function(t){var n=t.dt;return`
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
`)},ai={root:"p-inputgroup"},si=N.extend({name:"inputgroup",theme:oi,classes:ai}),ri={name:"BaseInputGroup",extends:J,style:si,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},ze={name:"InputGroup",extends:ri,inheritAttrs:!1};function ci(e,t,n,l,o,i){return a(),f("div",c({class:e.cx("root")},e.ptmi("root")),[C(e.$slots,"default")],16)}ze.render=ci;var ui={root:"p-inputgroupaddon"},di=N.extend({name:"inputgroupaddon",classes:ui}),pi={name:"BaseInputGroupAddon",extends:J,style:di,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},$e={name:"InputGroupAddon",extends:pi,inheritAttrs:!1};function fi(e,t,n,l,o,i){return a(),f("div",c({class:e.cx("root")},e.ptmi("root")),[C(e.$slots,"default")],16)}$e.render=fi;const hi={class:"flex items-center"},mi=M({__name:"OptionEditor",props:{option:{},index:{}},setup(e){const t=$(),{saveOption:n,removeOption:l}=t,o=e,i=S(""),s=S(!1),d=()=>{l(o.index)};return _(()=>{i.value=o.option.text??"",s.value=o.option.correct}),j([i,s],()=>{n(i.value,s.value,o.index)}),(r,u)=>{const p=nt,w=$e,v=ee,I=ze,D=E;return a(),f("div",hi,[h(I,null,{default:y(()=>[h(w,null,{default:y(()=>[h(p,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=U=>s.value=U),binary:!0},null,8,["modelValue"])]),_:1}),h(v,{placeholder:"Option",modelValue:i.value,"onUpdate:modelValue":u[1]||(u[1]=U=>i.value=U),size:"small"},null,8,["modelValue"])]),_:1}),h(D,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d,class:"ml-2"})])}}}),gi={class:"flex flex-col gap-2"},bi=M({__name:"OptionsPanel",props:{options:{}},setup(e){const t=e,n=$(),{addOption:l}=n;return(o,i)=>{const s=ye,d=E,r=W;return a(),g(r,{header:"Options"},{default:y(()=>[h(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:y(()=>i[0]||(i[0]=[G("*Create options and select correct ones ")])),_:1}),m("div",gi,[(a(!0),f(P,null,X(t.options,(u,p)=>(a(),f("div",{key:u.id},[h(mi,{option:u,index:p},null,8,["option","index"])]))),128))]),h(d,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:O(l)},null,8,["onClick"])]),_:1})}}}),vi={class:"flex items-center"},yi=M({__name:"PairEditor",props:{pair:{},index:{}},setup(e){const t=$(),{savePair:n,removePair:l}=t,o=e,i=S(""),s=S(""),d=()=>{l(o.index)};return _(()=>{i.value=o.pair.key,s.value=o.pair.value}),j([i,s],()=>{n(i.value,s.value,o.index)}),(r,u)=>{const p=ee,w=$e,v=ze,I=E;return a(),f("div",vi,[h(v,null,{default:y(()=>[h(p,{placeholder:"Key",modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=D=>i.value=D),size:"small"},null,8,["modelValue"]),h(w,null,{default:y(()=>u[2]||(u[2]=[m("div",null,"=",-1)])),_:1}),h(p,{placeholder:"Value",modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=D=>s.value=D),size:"small"},null,8,["modelValue"])]),_:1}),h(I,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d,class:"ml-2"})])}}}),wi={class:"flex flex-col gap-2"},Ci=M({__name:"PairsPanel",props:{pairs:{}},setup(e){const t=e,n=$(),{addPair:l}=n;return(o,i)=>{const s=ye,d=E,r=W;return a(),g(r,{header:"Pairs"},{default:y(()=>[h(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:y(()=>i[0]||(i[0]=[G("*Create matching pairs")])),_:1}),m("div",wi,[(a(!0),f(P,null,X(t.pairs,(u,p)=>(a(),f("div",{key:u.id},[h(yi,{pair:u,index:p},null,8,["pair","index"])]))),128))]),h(d,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:O(l)},null,8,["onClick"])]),_:1})}}}),Ii={class:"flex-grow dashed-border"},ki=M({__name:"SolutionPanel",props:{solution:{}},setup(e){const t=e,n=$(),{saveSolution:l}=n,o=S("");return _(()=>{o.value=t.solution??""}),j(o,()=>{l(o.value)}),(i,s)=>{const d=W;return a(),g(d,{header:"Solution code"},{default:y(()=>[m("div",Ii,[h(tt,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r)},null,8,["modelValue"])])]),_:1})}}}),Oi=oe(ki,[["__scopeId","data-v-1e8de051"]]),Si={class:"flex-grow dashed-border"},xi=M({__name:"StartingPanel",props:{starting:{}},setup(e){const t=e,n=$(),{saveStarting:l}=n,o=S("");return _(()=>{o.value=t.starting??""}),j(o,()=>{l(o.value)}),(i,s)=>{const d=W;return a(),g(d,{header:"Starting code"},{default:y(()=>[m("div",Si,[h(tt,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r)},null,8,["modelValue"])])]),_:1})}}}),Li=oe(xi,[["__scopeId","data-v-d5b12a01"]]),Fi={class:"flex flex-col gap-2"},Bi={class:"flex items-center"},Vi={class:"flex items-center"},Di=M({__name:"ActionsPanel",props:{userAction:{},platformAction:{}},setup(e){const t=e,n=$(),{saveUserAction:l,savePlatformAction:o}=n,i=S(null),s=S(null),d=S(["put","run-ide"]),r=S(["code2ide","light-up"]);_(()=>{i.value=t.userAction||null,s.value=t.platformAction||null}),j([i,s],()=>{l(i.value),o(s.value)});function u(){s.value=null}function p(){i.value=null}return(w,v)=>{const I=et,D=E,U=W;return a(),g(U,{header:"Actions"},{default:y(()=>[m("div",Fi,[m("div",Bi,[h(I,{modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=k=>i.value=k),variant:"filled",options:d.value,placeholder:"User action",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),h(D,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p})]),m("div",Vi,[h(I,{modelValue:s.value,"onUpdate:modelValue":v[1]||(v[1]=k=>s.value=k),variant:"filled",options:r.value,placeholder:"Platform actions",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),h(D,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:u})])])]),_:1})}}});var zi=function(t){var n=t.dt;return`
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
`)},$i={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Mi=N.extend({name:"chip",theme:zi,classes:$i}),Ei={name:"BaseChip",extends:J,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Mi,provide:function(){return{$pcChip:this,$parentInstance:this}}},ct={name:"Chip",extends:Ei,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},components:{TimesCircleIcon:Qt}},Ai=["aria-label"],Ti=["src"];function Pi(e,t,n,l,o,i){return o.visible?(a(),f("div",c({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[C(e.$slots,"default",{},function(){return[e.image?(a(),f("img",c({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Ti)):e.$slots.icon?(a(),g(T(e.$slots.icon),c({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),f("span",c({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):b("",!0),e.label?(a(),f("div",c({key:3,class:e.cx("label")},e.ptm("label")),B(e.label),17)):b("",!0)]}),e.removable?C(e.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(a(),g(T(e.removeIcon?"span":"TimesCircleIcon"),c({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:i.close,onKeydown:i.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):b("",!0)],16,Ai)):b("",!0)}ct.render=Pi;var Ki=function(t){var n=t.dt;return`
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
`)},Ri={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},Ui={root:function(t){var n=t.instance,l=t.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-display-chip":l.display==="chip","p-disabled":l.disabled,"p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-focus":n.focused,"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-multiselect-open":n.overlayVisible,"p-multiselect-fluid":n.$fluid,"p-multiselect-sm p-inputfield-sm":l.size==="small","p-multiselect-lg p-inputfield-lg":l.size==="large"}]},labelContainer:"p-multiselect-label-container",label:function(t){var n=t.instance,l=t.props;return["p-multiselect-label",{"p-placeholder":n.label===l.placeholder,"p-multiselect-label-empty":!l.placeholder&&(!l.modelValue||l.modelValue.length===0)}]},clearIcon:"p-multiselect-clear-icon",chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:function(t){var n=t.instance,l=t.option,o=t.index,i=t.getItemOptions,s=t.props;return["p-multiselect-option",{"p-multiselect-option-selected":n.isSelected(l)&&s.highlightOnSelect,"p-focus":n.focusedOptionIndex===n.getOptionIndex(o,i),"p-disabled":n.isOptionDisabled(l)}]},emptyMessage:"p-multiselect-empty-message"},_i=N.extend({name:"multiselect",theme:Ki,classes:Ui,inlineStyles:Ri}),ji={name:"BaseMultiSelect",extends:Qe,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},placeholder:String,inputId:{type:String,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},overlayClass:{type:String,default:null},overlayStyle:{type:null,default:null},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},resetFilterOnClear:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:null},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:_i,provide:function(){return{$pcMultiSelect:this,$parentInstance:this}}};function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,l)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ke(Object(n),!0).forEach(function(l){ut(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function ut(e,t,n){return(t=Hi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hi(e){var t=Gi(e,"string");return re(t)=="symbol"?t:t+""}function Gi(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(re(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ue(e){return Zi(e)||qi(e)||Wi(e)||Ni()}function Ni(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wi(e,t){if(e){if(typeof e=="string")return Oe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oe(e,t):void 0}}function qi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zi(e){if(Array.isArray(e))return Oe(e)}function Oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var dt={name:"MultiSelect",extends:ji,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(t){this.id=t||le()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||le(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(ie.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,n){return this.virtualScrollerDisabled?t:n&&n(t).index},getOptionLabel:function(t){return this.optionLabel?ne(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?ne(t,this.optionValue):t},getOptionRenderKey:function(t,n){return this.dataKey?ne(t,this.dataKey):this.getOptionLabel(t)+"_".concat(n)},getHeaderCheckboxPTOptions:function(t){return this.ptm(t,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(t,n,l,o){return this.ptm(o,{context:{selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(l,n),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.maxSelectionLimitReached&&!this.isSelected(t)?!0:this.optionDisabled?ne(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return ne(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return ne(t,this.optionGroupChildren)},getAriaPosInset:function(t){var n=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(l){return n.isOptionGroup(l)}).length:t)+1},show:function(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),t&&Y(this.$refs.focusInput)},hide:function(t){var n=this,l=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),t&&Y(n.$refs.focusInput)};setTimeout(function(){l()},0)},onFocus:function(t){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var n,l;this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",t),(n=(l=this.formField).onBlur)===null||n===void 0||n.call(l)},onKeyDown:function(t){var n=this;if(this.disabled){t.preventDefault();return}var l=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(t);break;default:if(t.code==="KeyA"&&l){var o=this.visibleOptions.filter(function(i){return n.isValidOption(i)}).map(function(i){return n.getOptionValue(i)});this.updateModel(t,o),t.preventDefault();break}!l&&wt(t.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(t),t.preventDefault());break}this.clicked=!1},onContainerClick:function(t){this.disabled||this.loading||t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(t){this.updateModel(t,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?Ct(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Y(n)},onLastHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?It(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Y(n)},onOptionSelect:function(t,n){var l=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(n))){var s=this.isSelected(n),d=null;s?d=this.d_value.filter(function(r){return!de(r,l.getOptionValue(n),l.equalityKey)}):d=[].concat(Ue(this.d_value||[]),[this.getOptionValue(n)]),this.updateModel(t,d),o!==-1&&(this.focusedOptionIndex=o),i&&Y(this.$refs.focusInput)}},onOptionMouseMove:function(t,n){this.focusOnHover&&this.changeFocusedOptionIndex(t,n)},onOptionSelectRange:function(t){var n=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(l===-1&&(l=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(l)),l!==-1&&o!==-1){var i=Math.min(l,o),s=Math.max(l,o),d=this.visibleOptions.slice(i,s+1).filter(function(r){return n.isValidOption(r)}).map(function(r){return n.getOptionValue(r)});this.updateModel(t,d)}},onFilterChange:function(t){var n=t.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(t){kt.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(!this.overlayVisible)this.show();else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,this.startRangeIndex,n),this.changeFocusedOptionIndex(t,n)}t.preventDefault()},onArrowUpKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var l=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,l,this.startRangeIndex),this.changeFocusedOptionIndex(t,l),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;t.shiftKey?l.setSelectionRange(0,t.target.selectionStart):(l.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var o=t.metaKey||t.ctrlKey,i=this.findFirstOptionIndex();t.shiftKey&&o&&this.onOptionSelectRange(t,i,this.startRangeIndex),this.changeFocusedOptionIndex(t,i),!this.overlayVisible&&this.show()}t.preventDefault()},onEndKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;if(t.shiftKey)l.setSelectionRange(t.target.selectionStart,l.value.length);else{var o=l.value.length;l.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else{var i=t.metaKey||t.ctrlKey,s=this.findLastOptionIndex();t.shiftKey&&i&&this.onOptionSelectRange(t,this.startRangeIndex,s),this.changeFocusedOptionIndex(t,s),!this.overlayVisible&&this.show()}t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.overlayVisible?this.focusedOptionIndex!==-1&&(t.shiftKey?this.onOptionSelectRange(t,this.focusedOptionIndex):this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(Y(t.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(t){ie.set("overlay",t,this.$primevue.config.zIndex.overlay),qe(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&Y(this.$refs.filterInput.$el)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){ie.clear(t)},alignOverlay:function(){this.appendTo==="self"?Ot(this.overlay,this.$el):(this.overlay.style.minWidth=Ze(this.$el)+"px",St(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.overlayVisible&&t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new xt(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Lt()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},getLabelByValue:function(t){var n=this,l=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],o=l.find(function(i){return!n.isOptionGroup(i)&&de(n.getOptionValue(i),t,n.equalityKey)});return o?this.getOptionLabel(o):null},getSelectedItemsLabel:function(){var t=/{(.*?)}/,n=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return t.test(n)?n.replace(n.match(t)[0],this.d_value.length+""):n},onToggleAll:function(t){var n=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:t,checked:!this.allSelected});else{var l=this.allSelected?[]:this.visibleOptions.filter(function(o){return n.isValidOption(o)}).map(function(o){return n.getOptionValue(o)});this.updateModel(t,l)}},removeOption:function(t,n){var l=this;t.stopPropagation();var o=this.d_value.filter(function(i){return!de(i,n,l.equalityKey)});this.updateModel(t,o)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return Ft(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(t){var n;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((n=this.getOptionLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(t){return Q(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isEquals:function(t,n){return de(t,n,this.equalityKey)},isSelected:function(t){var n=this,l=this.getOptionValue(t);return(this.d_value||[]).some(function(o){return n.isEquals(o,l)})},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(n){return t.isValidOption(n)})},findLastOptionIndex:function(){var t=this;return pe(this.visibleOptions,function(n){return t.isValidOption(n)})},findNextOptionIndex:function(t){var n=this,l=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidOption(o)}):-1;return l>-1?l+t+1:t},findPrevOptionIndex:function(t){var n=this,l=t>0?pe(this.visibleOptions.slice(0,t),function(o){return n.isValidOption(o)}):-1;return l>-1?l:t},findSelectedOptionIndex:function(){var t=this;if(this.$filled){for(var n=function(){var s=t.d_value[o],d=t.visibleOptions.findIndex(function(r){return t.isValidSelectedOption(r)&&t.isEquals(s,t.getOptionValue(r))});if(d>-1)return{v:d}},l,o=this.d_value.length-1;o>=0;o--)if(l=n(),l)return l.v}return-1},findFirstSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(n){return t.isValidSelectedOption(n)}):-1},findLastSelectedOptionIndex:function(){var t=this;return this.$filled?pe(this.visibleOptions,function(n){return t.isValidSelectedOption(n)}):-1},findNextSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l+t+1:-1},findPrevSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t>0?pe(this.visibleOptions.slice(0,t),function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l:-1},findNearestSelectedOptionIndex:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=-1;return this.$filled&&(n?(l=this.findPrevSelectedOptionIndex(t),l=l===-1?this.findNextSelectedOptionIndex(t):l):(l=this.findNextSelectedOptionIndex(t),l=l===-1?this.findPrevSelectedOptionIndex(t):l)),l>-1?l:t},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions:function(t){var n=this;this.searchValue=(this.searchValue||"")+t.key;var l=-1;Q(this.searchValue)&&(this.focusedOptionIndex!==-1?(l=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}),l=l===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}):l+this.focusedOptionIndex):l=this.visibleOptions.findIndex(function(o){return n.isOptionMatched(o)}),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(t,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue="",n.searchTimeout=null},500)},changeFocusedOptionIndex:function(t,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[n]))},scrollInView:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var l=n!==-1?"".concat(t.id,"_").concat(n):t.focusedOptionId,o=Bt(t.list,'li[id="'.concat(l,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(n!==-1?n:t.focusedOptionIndex)})},autoUpdateModel:function(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.$filled){this.focusedOptionIndex=this.findFirstFocusedOptionIndex();var t=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[t])}},updateModel:function(t,n){this.writeValue(n,t),this.$emit("change",{originalEvent:t,value:n})},flatOptions:function(t){var n=this;return(t||[]).reduce(function(l,o,i){l.push({optionGroup:o,group:!0,index:i});var s=n.getOptionGroupChildren(o);return s&&s.forEach(function(d){return l.push(d)}),l},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,n){this.list=t,n&&n(t)},virtualScrollerRef:function(t){this.virtualScroller=t}},computed:{visibleOptions:function(){var t=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var l=Vt.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],i=[];return o.forEach(function(s){var d=t.getOptionGroupChildren(s),r=d.filter(function(u){return l.includes(u)});r.length>0&&i.push(Re(Re({},s),{},ut({},typeof t.optionGroupChildren=="string"?t.optionGroupChildren:"items",Ue(r))))}),this.flatOptions(i)}return l}return n},label:function(){var t;if(this.d_value&&this.d_value.length){if(Q(this.maxSelectedLabels)&&this.d_value.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();t="";for(var n=0;n<this.d_value.length;n++)n!==0&&(t+=", "),t+=this.getLabelByValue(this.d_value[n])}else t=this.placeholder;return t},chipSelectedItems:function(){return Q(this.maxSelectedLabels)&&this.d_value&&this.d_value.length>this.maxSelectedLabels},allSelected:function(){var t=this;return this.selectAll!==null?this.selectAll:Q(this.visibleOptions)&&this.visibleOptions.every(function(n){return t.isOptionGroup(n)||t.isOptionDisabled(n)||t.isSelected(n)})},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.d_value&&this.d_value.length===this.selectionLimit},filterResultMessageText:function(){return Q(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.d_value.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(n){return!t.isOptionGroup(n)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return Dt(this.fluid)?!!this.$pcFluid:this.fluid},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&Q(this.options)}},directives:{ripple:me},components:{InputText:ee,Checkbox:nt,VirtualScroller:Kt,Portal:Ye,Chip:ct,IconField:Rt,InputIcon:Ut,TimesIcon:ve,SearchIcon:_t,ChevronDownIcon:jt,SpinnerIcon:zt,CheckIcon:Ht}};function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ce(e)}function _e(e,t,n){return(t=Yi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yi(e){var t=Xi(e,"string");return ce(t)=="symbol"?t:t+""}function Xi(e,t){if(ce(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(ce(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ji=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Qi={key:0},el=["id","aria-label"],tl=["id"],nl=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function il(e,t,n,l,o,i){var s=V("Chip"),d=V("SpinnerIcon"),r=V("Checkbox"),u=V("InputText"),p=V("SearchIcon"),w=V("InputIcon"),v=V("IconField"),I=V("VirtualScroller"),D=V("Portal"),U=Xe("ripple");return a(),f("div",c({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[7]||(t[7]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},e.ptmi("root")),[m("div",c({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[m("input",c({ref:"focusInput",id:e.inputId,type:"text",readonly:"",disabled:e.disabled,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},e.ptm("hiddenInput")),null,16,Ji)],16),m("div",c({class:e.cx("labelContainer")},e.ptm("labelContainer")),[m("div",c({class:e.cx("label")},e.ptm("label")),[C(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){return[e.display==="comma"?(a(),f(P,{key:0},[G(B(i.label||"empty"),1)],64)):e.display==="chip"?(a(),f(P,{key:1},[i.chipSelectedItems?(a(),f("span",Qi,B(i.label),1)):(a(!0),f(P,{key:1},X(e.d_value,function(k){return a(),f("span",c({key:i.getLabelByValue(k),class:e.cx("chipItem"),ref_for:!0},e.ptm("chipItem")),[C(e.$slots,"chip",{value:k,removeCallback:function(H){return i.removeOption(H,k)}},function(){return[h(s,{class:z(e.cx("pcChip")),label:i.getLabelByValue(k),removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(H){return i.removeOption(H,k)},pt:e.ptm("pcChip")},{removeicon:y(function(){return[C(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:z(e.cx("chipIcon")),item:k,removeCallback:function(H){return i.removeOption(H,k)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16)}),128)),!e.d_value||e.d_value.length===0?(a(),f(P,{key:2},[G(B(e.placeholder||"empty"),1)],64)):b("",!0)],64)):b("",!0)]})],16)],16),i.isClearIconVisible?C(e.$slots,"clearicon",{key:0,class:z(e.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(a(),g(T(e.clearIcon?"i":"TimesIcon"),c({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:i.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):b("",!0),m("div",c({class:e.cx("dropdown")},e.ptm("dropdown")),[e.loading?C(e.$slots,"loadingicon",{key:0,class:z(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(a(),f("span",c({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(a(),g(d,c({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):C(e.$slots,"dropdownicon",{key:1,class:z(e.cx("dropdownIcon"))},function(){return[(a(),g(T(e.dropdownIcon?"span":"ChevronDownIcon"),c({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true"},e.ptm("dropdownIcon")),null,16,["class"]))]})],16),h(D,{appendTo:e.appendTo},{default:y(function(){return[h(xe,c({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:y(function(){return[o.overlayVisible?(a(),f("div",c({key:0,ref:i.overlayRef,style:[e.panelStyle,e.overlayStyle],class:[e.cx("overlay"),e.panelClass,e.overlayClass],onClick:t[5]||(t[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:t[6]||(t[6]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},e.ptm("overlay")),[m("span",c({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),C(e.$slots,"header",{value:e.d_value,options:i.visibleOptions}),e.showToggleAll&&e.selectionLimit==null||e.filter?(a(),f("div",c({key:0,class:e.cx("header")},e.ptm("header")),[e.showToggleAll&&e.selectionLimit==null?(a(),g(r,{key:0,modelValue:i.allSelected,binary:!0,disabled:e.disabled,variant:e.variant,"aria-label":i.toggleAllAriaLabel,onChange:i.onToggleAll,unstyled:e.unstyled,pt:i.getHeaderCheckboxPTOptions("pcHeaderCheckbox")},{icon:y(function(k){return[e.$slots.headercheckboxicon?(a(),g(T(e.$slots.headercheckboxicon),{key:0,checked:k.checked,class:z(k.class)},null,8,["checked","class"])):k.checked?(a(),g(T(e.checkboxIcon?"span":"CheckIcon"),c({key:1,class:[k.class,_e({},e.checkboxIcon,k.checked)]},i.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")),null,16,["class"])):b("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):b("",!0),e.filter?(a(),g(v,{key:1,class:z(e.cx("pcFilterContainer")),unstyled:e.unstyled,pt:e.ptm("pcFilterContainer")},{default:y(function(){return[h(u,{ref:"filterInput",value:o.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:z(e.cx("pcFilter")),placeholder:e.filterPlaceholder,disabled:e.disabled,variant:e.variant,unstyled:e.unstyled,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:e.ptm("pcFilter")},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","disabled","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),h(w,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:y(function(){return[C(e.$slots,"filtericon",{},function(){return[e.filterIcon?(a(),f("span",c({key:0,class:e.filterIcon},e.ptm("filterIcon")),null,16)):(a(),g(p,We(c({key:1},e.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["class","unstyled","pt"])):b("",!0),e.filter?(a(),f("span",c({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),B(i.filterResultMessageText),17)):b("",!0)],16)):b("",!0),m("div",c({class:e.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[h(I,c({ref:i.virtualScrollerRef},e.virtualScrollerOptions,{items:i.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),$t({content:y(function(k){var K=k.styleClass,H=k.contentRef,te=k.items,R=k.getItemOptions,A=k.contentStyle,x=k.itemSize;return[m("ul",c({ref:function(L){return i.listRef(L,H)},id:o.id+"_list",class:[e.cx("list"),K],style:A,role:"listbox","aria-multiselectable":"true","aria-label":i.listAriaLabel},e.ptm("list")),[(a(!0),f(P,null,X(te,function(F,L){return a(),f(P,{key:i.getOptionRenderKey(F,i.getOptionIndex(L,R))},[i.isOptionGroup(F)?(a(),f("li",c({key:0,id:o.id+"_"+i.getOptionIndex(L,R),style:{height:x?x+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[C(e.$slots,"optiongroup",{option:F.optionGroup,index:i.getOptionIndex(L,R)},function(){return[G(B(i.getOptionGroupLabel(F.optionGroup)),1)]})],16,tl)):Se((a(),f("li",c({key:1,id:o.id+"_"+i.getOptionIndex(L,R),style:{height:x?x+"px":void 0},class:e.cx("option",{option:F,index:L,getItemOptions:R}),role:"option","aria-label":i.getOptionLabel(F),"aria-selected":i.isSelected(F),"aria-disabled":i.isOptionDisabled(F),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(L,R)),onClick:function(ae){return i.onOptionSelect(ae,F,i.getOptionIndex(L,R),!0)},onMousemove:function(ae){return i.onOptionMouseMove(ae,i.getOptionIndex(L,R))},ref_for:!0},i.getCheckboxPTOptions(F,R,L,"option"),{"data-p-selected":i.isSelected(F),"data-p-focused":o.focusedOptionIndex===i.getOptionIndex(L,R),"data-p-disabled":i.isOptionDisabled(F)}),[h(r,{defaultValue:i.isSelected(F),binary:!0,tabindex:-1,variant:e.variant,unstyled:e.unstyled,pt:i.getCheckboxPTOptions(F,R,L,"pcOptionCheckbox")},{icon:y(function(q){return[e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon?(a(),g(T(e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon),{key:0,checked:q.checked,class:z(q.class)},null,8,["checked","class"])):q.checked?(a(),g(T(e.checkboxIcon?"span":"CheckIcon"),c({key:1,class:[q.class,_e({},e.checkboxIcon,q.checked)],ref_for:!0},i.getCheckboxPTOptions(F,R,L,"pcOptionCheckbox.icon")),null,16,["class"])):b("",!0)]}),_:2},1032,["defaultValue","variant","unstyled","pt"]),C(e.$slots,"option",{option:F,selected:i.isSelected(F),index:i.getOptionIndex(L,R)},function(){return[m("span",c({ref_for:!0},e.ptm("optionLabel")),B(i.getOptionLabel(F)),17)]})],16,nl)),[[U]])],64)}),128)),o.filterValue&&(!te||te&&te.length===0)?(a(),f("li",c({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[C(e.$slots,"emptyfilter",{},function(){return[G(B(i.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(a(),f("li",c({key:1,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[C(e.$slots,"empty",{},function(){return[G(B(i.emptyMessageText),1)]})],16)):b("",!0)],16,el)]}),_:2},[e.$slots.loader?{name:"loader",fn:y(function(k){var K=k.options;return[C(e.$slots,"loader",{options:K})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),C(e.$slots,"footer",{value:e.d_value,options:i.visibleOptions}),!e.options||e.options&&e.options.length===0?(a(),f("span",c({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),B(i.emptyMessageText),17)):b("",!0),m("span",c({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),B(i.selectedMessageText),17),m("span",c({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[4]||(t[4]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}dt.render=il;const ll={class:"flex flex-col gap-4"},ol=M({__name:"HighlightPanel",props:{slots:{},modules:{}},setup(e){const t=e,n=$(),{saveSlots:l,saveModules:o}=n,i=S(null),s=S(null),d=S(["A","B","C","D","E","F"]),r=S(["LED","PB","LS","TS","PTM","NCD","MT","MCP","CLM","GS","BZ","CLR","JS","DS","SW","OLD","LDT"]);return _(()=>{i.value=t.slots||null,s.value=t.modules||null}),j([i,s],()=>{var u,p;((u=i.value)==null?void 0:u.length)==0&&(i.value=null),((p=s.value)==null?void 0:p.length)==0&&(s.value=null),l(i.value),o(s.value)}),(u,p)=>{const w=dt,v=W;return a(),g(v,{header:"Highlight slots & modules"},{default:y(()=>[m("div",ll,[h(w,{modelValue:i.value,"onUpdate:modelValue":p[0]||(p[0]=I=>i.value=I),display:"chip",options:d.value,placeholder:"Select slots",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),h(w,{modelValue:s.value,"onUpdate:modelValue":p[1]||(p[1]=I=>s.value=I),display:"chip",options:r.value,placeholder:"Select modules",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"])])]),_:1})}}}),al={class:"flex flex-col gap-2"},sl={class:"flex items-center"},rl={class:"flex items-center justify-end gap-2 mb-8 mt-4"},cl=M({__name:"StepEditor",setup(e){const{locale:t}=ge(),n=$(),{lesson:l,stepIndex:o}=be(n),{removeStep:i}=n,s=S(!1),d=S(!1),r=Le(()=>{var w;return o.value==null?null:((w=l.value)==null?void 0:w.steps[o.value])??null});async function u(){if(!(s.value||r.value==null)){s.value=!0;try{await se.updateStepTranslationByID(r.value.id,t.value,r.value.title,r.value.inner)}finally{s.value=!1}}}async function p(){if(!(d.value||r.value==null)){d.value=!0;try{await se.deleteStepByID(r.value.id),i()}finally{d.value=!1}}}return(w,v)=>{const I=ee,D=Be,U=ye,k=W,K=E;return r.value?(a(),f("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:r.value.id},[h(k,{header:"Info",class:"mb-2"},{default:y(()=>[m("div",al,[m("div",sl,[h(D,{variant:"on",class:"w-full"},{default:y(()=>[v[1]||(v[1]=m("label",{for:"title"},"Title",-1)),h(I,{id:"title",modelValue:r.value.title,"onUpdate:modelValue":v[0]||(v[0]=H=>r.value.title=H),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),h(U,{size:"small",severity:"secondary",variant:"simple"},{default:y(()=>[G(B(r.value.type),1)]),_:1})])]),_:1}),h(O(li),{contents:r.value.inner.contents,"step-type":r.value.type,class:"mb-2"},null,8,["contents","step-type"]),r.value.type=="code"?(a(),g(O(Li),{key:0,starting:r.value.inner.starting,class:"mb-2"},null,8,["starting"])):b("",!0),r.value.type=="code"?(a(),g(O(Oi),{key:1,solution:r.value.inner.solution,class:"mb-2"},null,8,["solution"])):b("",!0),r.value.type=="code"?(a(),g(O(ol),{key:2,slots:r.value.inner.slots,modules:r.value.inner.modules,class:"mb-2"},null,8,["slots","modules"])):b("",!0),r.value.type=="question"?(a(),g(O(bi),{key:3,options:r.value.inner.options,class:"mb-2"},null,8,["options"])):b("",!0),r.value.type=="matching"?(a(),g(O(Ci),{key:4,pairs:r.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):b("",!0),r.value.type=="open"?(a(),g(O(Wn),{key:5,answer:r.value.inner.answer,class:"mb-2"},null,8,["answer"])):b("",!0),h(O(Di),{"user-action":r.value.inner.userAction,"platform-action":r.value.inner.platformAction},null,8,["user-action","platform-action"]),m("div",rl,[h(K,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:p,loading:d.value,disabled:d.value},null,8,["loading","disabled"]),h(K,{label:"Save",icon:"pi pi-save",severity:"info",size:"small",onClick:u,loading:s.value,disabled:s.value},null,8,["loading","disabled"])])])):b("",!0)}}});var pt={name:"WindowMaximizeIcon",extends:he};function ul(e,t,n,l,o,i){return a(),f("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}pt.render=ul;var ft={name:"WindowMinimizeIcon",extends:he};function dl(e,t,n,l,o,i){return a(),f("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}ft.render=dl;var pl=function(t){var n=t.dt;return`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: `.concat(n("dialog.border.radius"),`;
    box-shadow: `).concat(n("dialog.shadow"),`;
    background: `).concat(n("dialog.background"),`;
    border: 1px solid `).concat(n("dialog.border.color"),`;
    color: `).concat(n("dialog.color"),`;
}

.p-dialog-content {
    overflow-y: auto;
    padding: `).concat(n("dialog.content.padding"),`;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(n("dialog.header.padding"),`;
}

.p-dialog-title {
    font-weight: `).concat(n("dialog.title.font.weight"),`;
    font-size: `).concat(n("dialog.title.font.size"),`;
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: `).concat(n("dialog.footer.padding"),`;
    display: flex;
    justify-content: flex-end;
    gap: `).concat(n("dialog.footer.gap"),`;
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: `).concat(n("dialog.header.gap"),`;
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}
`)},fl={mask:function(t){var n=t.position,l=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:l?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},hl={mask:function(t){var n=t.props,l=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],o=l.find(function(i){return i===n.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":n.modal},o?"p-dialog-".concat(o):""]},root:function(t){var n=t.props,l=t.instance;return["p-dialog p-component",{"p-dialog-maximized":n.maximizable&&l.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},ml=N.extend({name:"dialog",theme:pl,classes:hl,inlineStyles:fl}),gl={name:"BaseDialog",extends:J,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:ml,provide:function(){return{$pcDialog:this,$parentInstance:this}}},ht={name:"Dialog",extends:gl,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:Le(function(){return t._instance})}},data:function(){return{id:this.$attrs.id,containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},watch:{"$attrs.id":function(t){this.id=t||le()}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&ie.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.id=this.id||le(),this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&ie.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ne(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),Y(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&ie.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.footer&&t(this.footerContainer);n||(n=this.$slots.header&&t(this.headerContainer),n||(n=this.$slots.default&&t(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&Y(n,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?Ae():Te())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Ae()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Te()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Mt(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var l in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(l,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[l],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&qe(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(n){if(t.dragging){var l=Ze(t.container),o=Et(t.container),i=n.pageX-t.lastPageX,s=n.pageY-t.lastPageY,d=t.container.getBoundingClientRect(),r=d.left+i,u=d.top+s,p=At(),w=getComputedStyle(t.container),v=parseFloat(w.marginLeft),I=parseFloat(w.marginTop);t.container.style.position="fixed",t.keepInViewport?(r>=t.minX&&r+l<p.width&&(t.lastPageX=n.pageX,t.container.style.left=r-v+"px"),u>=t.minY&&u+o<p.height&&(t.lastPageY=n.pageY,t.container.style.top=u-I+"px")):(t.lastPageX=n.pageX,t.container.style.left=r-v+"px",t.lastPageY=n.pageY,t.container.style.top=u-I+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(n){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:me,focustrap:Tt},components:{Button:E,Portal:Ye,WindowMinimizeIcon:ft,WindowMaximizeIcon:pt,TimesIcon:ve}};function ue(e){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ue(e)}function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,l)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?je(Object(n),!0).forEach(function(l){bl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function bl(e,t,n){return(t=vl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vl(e){var t=yl(e,"string");return ue(t)=="symbol"?t:t+""}function yl(e,t){if(ue(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(ue(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var wl=["aria-labelledby","aria-modal"],Cl=["id"];function Il(e,t,n,l,o,i){var s=V("Button"),d=V("Portal"),r=Xe("focustrap");return a(),g(d,{appendTo:e.appendTo},{default:y(function(){return[o.containerVisible?(a(),f("div",c({key:0,ref:i.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return i.onMaskMouseDown&&i.onMaskMouseDown.apply(i,arguments)}),onMouseup:t[2]||(t[2]=function(){return i.onMaskMouseUp&&i.onMaskMouseUp.apply(i,arguments)})},e.ptm("mask")),[h(xe,c({name:"p-dialog",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:y(function(){return[e.visible?Se((a(),f("div",c({key:0,ref:i.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?C(e.$slots,"container",{key:0,closeCallback:i.close,maximizeCallback:function(p){return i.maximize(p)}}):(a(),f(P,{key:1},[e.showHeader?(a(),f("div",c({key:0,ref:i.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return i.initDrag&&i.initDrag.apply(i,arguments)})},e.ptm("header")),[C(e.$slots,"header",{class:z(e.cx("title"))},function(){return[e.header?(a(),f("span",c({key:0,id:i.ariaLabelledById,class:e.cx("title")},e.ptm("title")),B(e.header),17,Cl)):b("",!0)]}),m("div",c({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?(a(),g(s,c({key:0,ref:i.maximizableRef,autofocus:o.focusableMax,class:e.cx("pcMaximizeButton"),onClick:i.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:y(function(u){return[C(e.$slots,"maximizeicon",{maximized:o.maximized},function(){return[(a(),g(T(i.maximizeIconComponent),c({class:[u.class,o.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])):b("",!0),e.closable?(a(),g(s,c({key:1,ref:i.closeButtonRef,autofocus:o.focusableClose,class:e.cx("pcCloseButton"),onClick:i.close,"aria-label":i.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:y(function(u){return[C(e.$slots,"closeicon",{},function(){return[(a(),g(T(e.closeIcon?"span":"TimesIcon"),c({class:[e.closeIcon,u.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])):b("",!0)],16)],16)):b("",!0),m("div",c({ref:i.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle},He(He({},e.contentProps),e.ptm("content"))),[C(e.$slots,"default")],16),e.footer||e.$slots.footer?(a(),f("div",c({key:1,ref:i.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[C(e.$slots,"footer",{},function(){return[G(B(e.footer),1)]})],16)):b("",!0)],64))],16,wl)),[[r,{disabled:!e.modal}]]):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):b("",!0)]}),_:3},8,["appendTo"])}ht.render=Il;const kl={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},Ol={class:"flex flex-1 items-center"},Sl={key:1,class:"flex items-center gap-1"},xl={class:"flex items-center gap-1"},Ll={class:"flex flex-1 justify-end items-center gap-2"},Fl={class:"flex justify-between items-center mb-8"},Bl={class:"flex justify-end gap-2"},Vl=M({__name:"EditorHeader",setup(e){const{locale:t}=ge(),n=Pt(),l=Je(),o=$(),{lesson:i,stepIndex:s}=be(o),{changeStep:d,addStep:r,setSteps:u}=o,p=S(!1),w=S(!1),v=S(!1),I=S(null),D=S(["article","code","matching","open","question"]);function U(A){switch(A){case"article":return"pi pi-align-left";case"code":return"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function k(){if(!w.value){w.value=!0;try{const{data:A}=await se.getProjectStepsByID(l.params.id.toString()),x=[];for(const F of A){const L=await Pe(F,t.value,!1);x.push(L)}u(x)}catch(A){alert(A)}finally{w.value=!1}}}_(k),j(t,k,{immediate:!0});async function K(){if(I.value){v.value=!0;try{const{data:A}=await se.createStep(I.value),x=await Pe(A,t.value,!0);await se.linkStepToProjectByID(l.params.id.toString(),A.id),r(I.value,x)}catch(A){alert(A)}finally{v.value=!1,p.value=!1}}}const H=S(),te=S([{label:"Profile",icon:"pi pi-user"},{label:"Log out",icon:"pi pi-sign-out"}]),R=A=>{H.value.toggle(A)};return(A,x)=>{const F=Fe,L=E,q=Ge,ae=it,mt=et,gt=ht;return a(),f(P,null,[m("div",kl,[m("div",Ol,[h(F,{src:O(Nt),width:"32"},null,8,["src"]),x[5]||(x[5]=m("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),h(L,{id:"#projects",icon:"pi pi-angle-left",label:A.$t("projects"),severity:"secondary",variant:"text",onClick:x[0]||(x[0]=Z=>O(n).push({name:"projects"})),size:"small"},null,8,["label"])]),w.value||O(i)==null?(a(),g(q,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):(a(),f("div",Sl,[m("div",xl,[(a(!0),f(P,null,X(O(i).steps,(Z,we)=>(a(),g(L,{key:Z.id,icon:U(Z.type),rounded:"",severity:O(s)==we?void 0:"secondary",variant:O(s)==we?void 0:"outlined",onClick:Ul=>O(d)(we),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128))]),h(L,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:x[1]||(x[1]=Z=>p.value=!0)})])),m("div",Ll,[h(Gt),h(L,{type:"button",icon:"pi pi-ellipsis-v",onClick:R,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),h(ae,{ref_key:"menu",ref:H,id:"overlay_menu",model:te.value,popup:!0},null,8,["model"])])]),h(gt,{visible:p.value,"onUpdate:visible":x[4]||(x[4]=Z=>p.value=Z),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:y(()=>[m("div",Fl,[x[6]||(x[6]=m("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),h(mt,{modelValue:I.value,"onUpdate:modelValue":x[2]||(x[2]=Z=>I.value=Z),options:D.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),m("div",Bl,[h(L,{type:"button",label:"Cancel",severity:"secondary",onClick:x[3]||(x[3]=Z=>p.value=!1)}),h(L,{type:"button",label:"+ Add",onClick:K,loading:v.value,disabled:v.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),Dl={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},zl={key:0},$l={key:1,class:"flex"},Ml=M({__name:"LessonPreview",setup(e){const t=$(),{lesson:n,stepIndex:l}=be(t),{changeStep:o}=t,i=Le(()=>{var r;return l.value==null?null:((r=n.value)==null?void 0:r.steps[l.value])??null});async function s(){l.value!=null&&o(l.value-1)}async function d(){l.value!=null&&o(l.value+1)}return(r,u)=>{const p=E;return a(),f("div",Dl,[i.value?(a(),f("div",zl,[i.value.type=="article"?(a(),g(O(qt),{key:0,step:i.value},null,8,["step"])):i.value.type=="code"?(a(),g(O(Zt),{key:1,step:i.value},null,8,["step"])):i.value.type=="matching"?(a(),g(O(Yt),{key:2,step:i.value},null,8,["step"])):i.value.type=="open"?(a(),g(O(Xt),{key:3,step:i.value},null,8,["step"])):i.value.type=="question"?(a(),g(O(Jt),{key:4,step:i.value},null,8,["step"])):b("",!0)])):b("",!0),O(n)!=null&&O(n).steps!=null&&O(n).steps.length>0&&i.value?(a(),f("div",$l,[O(l)!==0?(a(),g(p,{key:0,label:"Previous",icon:"pi pi-angle-left",size:"small",onClick:s})):b("",!0),O(l)<O(n).steps.length-1?(a(),g(p,{key:1,label:"Next",icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:d})):b("",!0)])):b("",!0)])}}}),El={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 58px)"}},Al={class:"max-w-[320px] w-full bg-white"},Tl={key:0,class:"p-4"},Pl={class:"flex-grow border-l"},Kl={class:"border-l max-w-[400px] w-full"},Rl=M({__name:"EditorView",setup(e){const{locale:t}=ge(),n=Je(),l=$(),{setLesson:o}=l,i=S(!1);async function s(){if(!i.value){i.value=!0;try{const{data:d}=await Ie.getProjectByID(n.params.id.toString()),r=await bt(d,t.value);o(r)}finally{i.value=!1}}}return _(s),j(t,s),(d,r)=>{const u=Ge;return a(),f(P,null,[i.value?b("",!0):(a(),g(Vl,{key:0})),m("div",El,[m("div",Al,[i.value?(a(),f("div",Tl,[h(u,{height:"192px"}),r[0]||(r[0]=m("br",null,null,-1)),h(u,{height:"32px"}),r[1]||(r[1]=m("br",null,null,-1)),h(u,{height:"32px"})])):(a(),g(Pn,{key:1}))]),m("div",Pl,[i.value?b("",!0):(a(),g(cl,{key:0}))]),m("div",Kl,[i.value?b("",!0):(a(),g(Ml,{key:0}))])])],64)}}}),Ql=oe(Rl,[["__scopeId","data-v-4984c2dd"]]);export{Ql as default};
