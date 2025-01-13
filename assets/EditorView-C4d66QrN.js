import{a as Ie,s as Ge,t as bt}from"./types-C39Ma9Tn.js";import{u as z}from"./editor-store-D_3R_FrP.js";import{B as G,m as u,o as a,c as p,r as w,s as X,d as de,b as m,O as j,t as B,a as b,v as A,a3 as vt,l as V,e as Y,p as h,n as $,w as y,h as g,i as P,F as K,a4 as Ne,a5 as Me,a6 as me,a7 as Ee,a8 as We,j as M,x as ge,K as be,k,y as U,z as _,M as I,U as le,S as Se,T as yt,a9 as xe,aa as ie,ab as ne,f as q,ac as Ct,g as wt,ad as It,ae as pe,af as kt,ag as Ze,ah as Ot,E as qe,ai as St,aj as xt,ak as Lt,al as Ft,am as Q,an as fe,ao as Bt,ap as Vt,aq as Dt,ar as Ye,as as $t,at as Xe,au as zt,Q as Le,av as Ae,aw as Te,ax as Mt,G as Et,ay as At,az as Tt,a2 as Je,u as Pt}from"./index-tu3qNG6j.js";import{c as Qe,d as ve,a as Fe,e as ee,b as et,f as tt,g as Kt,h as Rt,i as Ut,j as _t,k as jt,l as Ht,L as Gt,_ as Nt}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-DUNicSy-.js";import{s as ye,a as oe,g as Wt,h as nt,_ as it,b as se,t as Pe,c as Zt,d as qt,M as Yt,e as Xt,f as Jt}from"./QuestionStep.vue_vue_type_script_setup_true_lang-D8JyCPhL.js";var Qt=function(t){var n=t.dt;return`
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
`)},en={root:function(t){var n=t.instance,l=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},tn=G.extend({name:"textarea",theme:Qt,classes:en}),nn={name:"BaseTextarea",extends:Qe,props:{autoResize:Boolean},style:tn,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},lt={name:"Textarea",extends:nn,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){t.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return u(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},ln=["value","disabled","aria-invalid"];function on(e,t,n,l,o,i){return a(),p("textarea",u({class:e.cx("root"),value:e.d_value,disabled:e.disabled,"aria-invalid":e.invalid||void 0,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,ln)}lt.render=on;var an=function(t){var n=t.dt;return`
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
`)},sn={root:function(t){t.instance;var n=t.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},rn=G.extend({name:"floatlabel",theme:an,classes:sn}),cn={name:"BaseFloatLabel",extends:X,props:{variant:{type:String,default:"over"}},style:rn,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Be={name:"FloatLabel",extends:cn,inheritAttrs:!1};function un(e,t,n,l,o,i){return a(),p("span",u({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}Be.render=un;var Ve={name:"PlusIcon",extends:de};function dn(e,t,n,l,o,i){return a(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}Ve.render=dn;var ot={name:"UploadIcon",extends:de};function pn(e,t,n,l,o,i){return a(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}ot.render=pn;var fn=function(t){var n=t.dt;return`
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
`)},hn={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},mn=G.extend({name:"progressbar",theme:fn,classes:hn}),gn={name:"BaseProgressBar",extends:X,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:mn,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},at={name:"ProgressBar",extends:gn,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},bn=["aria-valuenow"];function vn(e,t,n,l,o,i){return a(),p("div",u({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[i.determinate?(a(),p("div",u({key:0,class:e.cx("value"),style:i.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(a(),p("div",u({key:0,class:e.cx("label")},e.ptm("label")),[w(e.$slots,"default",{},function(){return[j(B(e.value+"%"),1)]})],16)):b("",!0)],16)):i.indeterminate?(a(),p("div",u({key:1,class:e.cx("value")},e.ptm("value")),null,16)):b("",!0)],16,bn)}at.render=vn;var yn=function(t){var n=t.dt;return`
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
`)},Cn={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},wn=G.extend({name:"fileupload",theme:yn,classes:Cn}),In={name:"BaseFileUpload",extends:X,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:wn,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},st={name:"FileContent",hostName:"FileUpload",extends:X,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),d=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(d," ").concat(i[s])}},components:{Button:A,Badge:vt,TimesIcon:ve}},kn=["alt","src","width"];function On(e,t,n,l,o,i){var s=V("Badge"),d=V("TimesIcon"),r=V("Button");return a(!0),p(K,null,Y(n.files,function(c,f){return a(),p("div",u({key:c.name+c.type+c.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[m("img",u({role:"presentation",class:e.cx("fileThumbnail"),alt:c.name,src:c.objectURL,width:n.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,kn),m("div",u({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[m("div",u({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),B(c.name),17),m("span",u({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),B(i.formatSize(c.size)),17)],16),h(s,{value:n.badgeValue,class:$(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),m("div",u({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[h(r,{onClick:function(v){return e.$emit("remove",f)},text:"",rounded:"",severity:"danger",class:$(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:y(function(C){return[n.templates.fileremoveicon?(a(),g(P(n.templates.fileremoveicon),{key:0,class:$(C.class),file:c,index:f},null,8,["class","file","index"])):(a(),g(d,u({key:1,class:C.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}st.render=On;function we(e){return Ln(e)||xn(e)||rt(e)||Sn()}function Sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ln(e){if(Array.isArray(e))return ke(e)}function he(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=rt(e))||t){n&&(e=n);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return s=c.done,c},e:function(c){d=!0,i=c},f:function(){try{s||n.return==null||n.return()}finally{if(d)throw i}}}}function rt(e,t){if(e){if(typeof e=="string")return ke(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var De={name:"FileUpload",extends:In,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=he(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value;this.isFileSelected(i)||this.validate(i)&&(this.isImage(i)&&(i.objectURL=window.URL.createObjectURL(i)),this.files.push(i))}}catch(s){l.e(s)}finally{l.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var n=new XMLHttpRequest,l=new FormData;this.$emit("before-upload",{xhr:n,formData:l});var o=he(this.files),i;try{for(o.s();!(i=o.n()).done;){var s=i.value;l.append(this.name,s,s.name)}}catch(d){o.e(d)}finally{o.f()}n.upload.addEventListener("progress",function(d){d.lengthComputable&&(t.progress=Math.round(d.loaded*100/d.total)),t.$emit("progress",{originalEvent:d,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){var d;t.progress=0,n.status>=200&&n.status<300?(t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files})):t.$emit("error",{xhr:n,files:t.files}),(d=t.uploadedFiles).push.apply(d,we(t.files)),t.clear()}},n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:l}),n.withCredentials=this.withCredentials,n.send(l)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=he(this.files),l;try{for(n.s();!(l=n.n()).done;){var o=l.value;if(o.name+o.type+o.size===t.name+t.type+t.size)return!0}}catch(i){n.e(i)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(d){return d.trim()}),l=he(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value,s=this.isWildcard(i)?this.getTypeClass(t.type)===this.getTypeClass(i):t.type==i||this.getFileExtension(t).toLowerCase()===i.toLowerCase();if(s)return!0}}catch(d){l.e(d)}finally{l.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&Ne(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&Me(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&Me(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=this.multiple||n&&n.length===1;l&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=we(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=we(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),d=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(d," ").concat(i[s])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:A,ProgressBar:at,Message:ye,FileContent:st,PlusIcon:Ve,UploadIcon:ot,TimesIcon:ve},directives:{ripple:me}},Fn=["multiple","accept","disabled"],Bn=["files"],Vn=["accept","disabled","multiple"];function Dn(e,t,n,l,o,i){var s=V("Button"),d=V("ProgressBar"),r=V("Message"),c=V("FileContent");return i.isAdvanced?(a(),p("div",u({key:0,class:e.cx("root")},e.ptmi("root")),[m("input",u({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),multiple:e.multiple,accept:e.accept,disabled:i.chooseDisabled},e.ptm("input")),null,16,Fn),m("div",u({class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{files:o.files,uploadedFiles:o.uploadedFiles,chooseCallback:i.choose,uploadCallback:i.uploader,clearCallback:i.clear},function(){return[h(s,u({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:i.choose,onKeydown:Ee(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(f){return[w(e.$slots,"chooseicon",{},function(){return[(a(),g(P(e.chooseIcon?"span":"PlusIcon"),u({class:[f.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(a(),g(s,u({key:0,class:e.cx("pcUploadButton"),label:i.uploadButtonLabel,onClick:i.uploader,disabled:i.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:y(function(f){return[w(e.$slots,"uploadicon",{},function(){return[(a(),g(P(e.uploadIcon?"span":"UploadIcon"),u({class:[f.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0),e.showCancelButton?(a(),g(s,u({key:1,class:e.cx("pcCancelButton"),label:i.cancelButtonLabel,onClick:i.clear,disabled:i.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:y(function(f){return[w(e.$slots,"cancelicon",{},function(){return[(a(),g(P(e.cancelIcon?"span":"TimesIcon"),u({class:[f.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0)]})],16),m("div",u({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return i.onDragEnter&&i.onDragEnter.apply(i,arguments)}),onDragover:t[2]||(t[2]=function(){return i.onDragOver&&i.onDragOver.apply(i,arguments)}),onDragleave:t[3]||(t[3]=function(){return i.onDragLeave&&i.onDragLeave.apply(i,arguments)}),onDrop:t[4]||(t[4]=function(){return i.onDrop&&i.onDrop.apply(i,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[w(e.$slots,"content",{files:o.files,uploadedFiles:o.uploadedFiles,removeUploadedFileCallback:i.removeUploadedFile,removeFileCallback:i.remove,progress:o.progress,messages:o.messages},function(){return[i.hasFiles?(a(),g(d,{key:0,value:o.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):b("",!0),(a(!0),p(K,null,Y(o.messages,function(f){return a(),g(r,{key:f,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[j(B(f),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),i.hasFiles?(a(),p("div",{key:1,class:$(e.cx("fileList"))},[h(c,{files:o.files,onRemove:i.remove,badgeValue:i.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0),i.hasUploadedFiles?(a(),p("div",{key:2,class:$(e.cx("fileList"))},[h(c,{files:o.uploadedFiles,onRemove:i.removeUploadedFile,badgeValue:i.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0)]}),e.$slots.empty&&!i.hasFiles&&!i.hasUploadedFiles?(a(),p("div",We(u({key:0},e.ptm("empty"))),[w(e.$slots,"empty")],16)):b("",!0)],16)],16)):i.isBasic?(a(),p("div",u({key:1,class:e.cx("root")},e.ptmi("root")),[(a(!0),p(K,null,Y(o.messages,function(f){return a(),g(r,{key:f,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[j(B(f),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),h(s,u({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:i.onBasicUploaderClick,onKeydown:Ee(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(f){return[w(e.$slots,"chooseicon",{},function(){return[(a(),g(P(e.chooseIcon?"span":"PlusIcon"),u({class:[f.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?b("",!0):w(e.$slots,"filelabel",{key:0,class:$(e.cx("filelabel"))},function(){return[m("span",{class:$(e.cx("filelabel")),files:o.files},B(i.basicFileChosenLabel),11,Bn)]}),m("input",u({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),onFocus:t[6]||(t[6]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[7]||(t[7]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},e.ptm("input")),null,16,Vn)],16)):b("",!0)}De.render=Dn;const $n={class:"p-4 h-full"},zn={key:0},Mn={key:1,class:"flex flex-col gap-4"},En={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},An=M({__name:"LessonCard",setup(e){const{locale:t}=ge(),n=z(),{lesson:l}=be(n),o=k(null),i=k(!0),s=k(!1);U(()=>{var c;o.value=((c=l.value)==null?void 0:c.cover_image)??""}),_([()=>{var c;return(c=l.value)==null?void 0:c.title},()=>{var c;return(c=l.value)==null?void 0:c.description},o],()=>{i.value=!1});function d(c){const f=c.files[0],C=new FileReader;C.onload=async v=>{var S;try{o.value=((S=v.target)==null?void 0:S.result)??null}catch(D){alert(D)}},C.readAsDataURL(f)}async function r(){var c;s.value=!0;try{await Ie.updateProjectByID(l.value.id,((c=o.value)==null?void 0:c.toString())??""),await Ie.updateProjectTranslationByID(l.value.id,t.value,l.value.title,l.value.description)}catch(f){alert(f)}finally{i.value=!0,s.value=!1}}return(c,f)=>{const C=Fe,v=De,S=ee,D=Be,R=lt,O=A;return a(),p("div",$n,[I(l)?(a(),p("div",Mn,[m("div",En,[o.value?(a(),g(C,{key:0,src:o.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):b("",!0),h(v,{mode:"basic",onSelect:d,customUpload:"",auto:"",severity:"secondary","choose-icon":o.value==null?"pi pi-plus":"pi pi-pencil","choose-label":o.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),h(D,{variant:"on",class:"w-full"},{default:y(()=>[f[2]||(f[2]=m("label",{for:"title"},"Title",-1)),h(S,{id:"title",modelValue:I(l).title,"onUpdate:modelValue":f[0]||(f[0]=T=>I(l).title=T),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),h(D,{variant:"on",class:"w-full"},{default:y(()=>[f[3]||(f[3]=m("label",{for:"description"},"Description",-1)),h(R,{id:"description",modelValue:I(l).description,"onUpdate:modelValue":f[1]||(f[1]=T=>I(l).description=T),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1}),h(O,{label:"Save",severity:"info",icon:"pi pi-save",class:"w-fit self-end",size:"small",onClick:r,disabled:i.value||s.value,loading:s.value},null,8,["disabled","loading"])])):(a(),p("div",zn,"Null"))])}}}),Tn=oe(An,[["__scopeId","data-v-915c70a6"]]);var Pn=function(t){var n=t.dt;return`
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
`)},Kn={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Rn=G.extend({name:"panel",theme:Pn,classes:Kn}),Un={name:"BasePanel",extends:X,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Rn,provide:function(){return{$pcPanel:this,$parentInstance:this}}},N={name:"Panel",extends:Un,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||le()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||le()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:Ve,MinusIcon:Wt,Button:A},directives:{ripple:me}},_n=["id"],jn=["id","aria-labelledby"];function Hn(e,t,n,l,o,i){var s=V("Button");return a(),p("div",u({class:e.cx("root")},e.ptmi("root")),[m("div",u({class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{id:o.id+"_header",class:$(e.cx("title"))},function(){return[e.header?(a(),p("span",u({key:0,id:o.id+"_header",class:e.cx("title")},e.ptm("title")),B(e.header),17,_n)):b("",!0)]}),m("div",u({class:e.cx("headerActions")},e.ptm("headerActions")),[w(e.$slots,"icons"),e.toggleable?(a(),g(s,u({key:0,id:o.id+"_header",class:e.cx("pcToggleButton"),"aria-label":i.buttonAriaLabel,"aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,unstyled:e.unstyled,onClick:i.toggle,onKeydown:i.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:y(function(d){return[w(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed},function(){return[(a(),g(P(o.d_collapsed?"PlusIcon":"MinusIcon"),u({class:d.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):b("",!0)],16)],16),h(xe,u({name:"p-toggleable-content"},e.ptm("transition")),{default:y(function(){return[Se(m("div",u({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[m("div",u({class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16),e.$slots.footer?(a(),p("div",u({key:0,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):b("",!0)],16,jn),[[yt,!o.d_collapsed]])]}),_:3},16)],16)}N.render=Hn;const Gn={class:"flex items-center"},Nn=M({__name:"AnswerPanel",props:{answer:{}},setup(e){const t=e,n=z(),{saveAnswer:l}=n,o=k("");return U(()=>{o.value=t.answer??""}),_(o,()=>{l(o.value)}),(i,s)=>{const d=ee,r=N;return a(),g(r,{header:"Answer"},{default:y(()=>[m("div",Gn,[h(d,{id:"answer",modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>o.value=c),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),Wn={class:"flex items-start"},Zn=M({__name:"MdEditor",props:{content:{},index:{}},setup(e){const t=z(),{saveContent:n,removeContent:l}=t,o=e,i=k(""),s=()=>{l(o.index)};return U(()=>{i.value=o.content.text??"none"}),_(i,()=>{n(i.value,null,o.index)}),(d,r)=>{const c=V("v-md-editor"),f=A;return a(),p("div",Wn,[h(c,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=C=>i.value=C),mode:"edit","left-toolbar":"undo redo clear | h bold italic strikethrough quote ul ol table hr link code","right-toolbar":""},null,8,["modelValue"]),h(f,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:s})])}}}),qn=oe(Zn,[["__scopeId","data-v-927919ee"]]),Yn={class:"flex items-start"},Xn={class:"relative flex flex-grow justify-center items-center dashed-border h-64"},Jn=M({__name:"AssetEditor",props:{content:{},index:{}},setup(e){const t=k(null);function n(r){const c=r.files[0],f=new FileReader;f.onload=async C=>{var v;try{t.value=((v=C.target)==null?void 0:v.result)??null}catch(S){alert(S)}},f.readAsDataURL(c)}const l=z(),{saveContent:o,removeContent:i}=l,s=e,d=()=>{i(s.index)};return U(()=>{t.value=s.content.src??null}),_(t,()=>{o(null,t.value,s.index)}),(r,c)=>{const f=Fe,C=De,v=A;return a(),p("div",Yn,[m("div",Xn,[t.value?(a(),g(f,{key:0,src:t.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-64"},null,8,["src"])):b("",!0),h(C,{mode:"basic",onSelect:n,customUpload:"",auto:"",severity:"secondary","choose-icon":t.value==null?"pi pi-plus":"pi pi-pencil","choose-label":t.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),h(v,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:d})])}}}),Qn=oe(Jn,[["__scopeId","data-v-0ab8fa7e"]]),ei={class:"flex items-center"},ti=M({__name:"VideoEditor",props:{content:{},index:{}},setup(e){const t=e,n=z(),{saveContent:l,removeContent:o}=n,i=k(""),s=()=>{o(t.index)};return U(()=>{i.value=t.content.text??""}),_(i,()=>{l(i.value,null,t.index)}),(d,r)=>{const c=ee,f=A;return a(),p("div",ei,[h(c,{id:"video",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=C=>i.value=C),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),h(f,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:s})])}}}),ni={class:"flex flex-col gap-2"},ii=M({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(e){const t=e,n=z(),{addContent:l}=n,o=k(),i=k([{label:"Text",icon:"pi pi-align-left",command:()=>{l("text")}},{label:"Image | Gif",icon:"pi pi-image",command:()=>{l("image")}},{label:"Video",icon:"pi pi-play",command:()=>{l("video")}}]),s=d=>{o.value.toggle(d)};return(d,r)=>{const c=A,f=et,C=N;return a(),g(C,{header:"Contents"},{default:y(()=>[m("div",ni,[(a(!0),p(K,null,Y(t.contents,(v,S)=>(a(),p("div",{key:v.id},[v.type=="text"?(a(),g(qn,{key:0,content:v,index:S},null,8,["content","index"])):v.type=="image"?(a(),g(Qn,{key:1,content:v,index:S},null,8,["content","index"])):v.type=="video"?(a(),g(ti,{key:2,content:v,index:S},null,8,["content","index"])):b("",!0)]))),128))]),h(c,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:s,"aria-haspopup":"true","aria-controls":"overlay_menu"}),h(f,{ref_key:"menu",ref:o,id:"overlay_menu",model:i.value,popup:!0},null,8,["model"])]),_:1})}}});var li=function(t){var n=t.dt;return`
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
`)},oi={root:"p-inputgroup"},ai=G.extend({name:"inputgroup",theme:li,classes:oi}),si={name:"BaseInputGroup",extends:X,style:ai,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},$e={name:"InputGroup",extends:si,inheritAttrs:!1};function ri(e,t,n,l,o,i){return a(),p("div",u({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}$e.render=ri;var ci={root:"p-inputgroupaddon"},ui=G.extend({name:"inputgroupaddon",classes:ci}),di={name:"BaseInputGroupAddon",extends:X,style:ui,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},ze={name:"InputGroupAddon",extends:di,inheritAttrs:!1};function pi(e,t,n,l,o,i){return a(),p("div",u({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}ze.render=pi;const fi={class:"flex items-center"},hi=M({__name:"OptionEditor",props:{option:{},index:{}},setup(e){const t=z(),{saveOption:n,removeOption:l}=t,o=e,i=k(""),s=k(!1),d=()=>{l(o.index)};return U(()=>{i.value=o.option.text??"",s.value=o.option.correct}),_([i,s],()=>{n(i.value,s.value,o.index)}),(r,c)=>{const f=nt,C=ze,v=ee,S=$e,D=A;return a(),p("div",fi,[h(S,null,{default:y(()=>[h(C,null,{default:y(()=>[h(f,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=R=>s.value=R),binary:!0},null,8,["modelValue"])]),_:1}),h(v,{placeholder:"Option",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=R=>i.value=R),size:"small"},null,8,["modelValue"])]),_:1}),h(D,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d,class:"ml-2"})])}}}),mi={class:"flex flex-col gap-2"},gi=M({__name:"OptionsPanel",props:{options:{}},setup(e){const t=e,n=z(),{addOption:l}=n;return(o,i)=>{const s=ye,d=A,r=N;return a(),g(r,{header:"Options"},{default:y(()=>[h(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:y(()=>i[0]||(i[0]=[j("*Create options and select correct ones ")])),_:1}),m("div",mi,[(a(!0),p(K,null,Y(t.options,(c,f)=>(a(),p("div",{key:c.id},[h(hi,{option:c,index:f},null,8,["option","index"])]))),128))]),h(d,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:I(l)},null,8,["onClick"])]),_:1})}}}),bi={class:"flex items-center"},vi=M({__name:"PairEditor",props:{pair:{},index:{}},setup(e){const t=z(),{savePair:n,removePair:l}=t,o=e,i=k(""),s=k(""),d=()=>{l(o.index)};return U(()=>{i.value=o.pair.key,s.value=o.pair.value}),_([i,s],()=>{n(i.value,s.value,o.index)}),(r,c)=>{const f=ee,C=ze,v=$e,S=A;return a(),p("div",bi,[h(v,null,{default:y(()=>[h(f,{placeholder:"Key",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=D=>i.value=D),size:"small"},null,8,["modelValue"]),h(C,null,{default:y(()=>c[2]||(c[2]=[m("div",null,"=",-1)])),_:1}),h(f,{placeholder:"Value",modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=D=>s.value=D),size:"small"},null,8,["modelValue"])]),_:1}),h(S,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d,class:"ml-2"})])}}}),yi={class:"flex flex-col gap-2"},Ci=M({__name:"PairsPanel",props:{pairs:{}},setup(e){const t=e,n=z(),{addPair:l}=n;return(o,i)=>{const s=ye,d=A,r=N;return a(),g(r,{header:"Pairs"},{default:y(()=>[h(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:y(()=>i[0]||(i[0]=[j("*Create matching pairs")])),_:1}),m("div",yi,[(a(!0),p(K,null,Y(t.pairs,(c,f)=>(a(),p("div",{key:c.id},[h(vi,{pair:c,index:f},null,8,["pair","index"])]))),128))]),h(d,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:I(l)},null,8,["onClick"])]),_:1})}}}),wi={class:"flex-grow dashed-border"},Ii=M({__name:"SolutionPanel",props:{solution:{}},setup(e){const t=e,n=z(),{saveSolution:l}=n,o=k("");return U(()=>{o.value=t.solution??""}),_(o,()=>{l(o.value)}),(i,s)=>{const d=N;return a(),g(d,{header:"Solution code"},{default:y(()=>[m("div",wi,[h(it,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r)},null,8,["modelValue"])])]),_:1})}}}),ki=oe(Ii,[["__scopeId","data-v-1e8de051"]]),Oi={class:"flex-grow dashed-border"},Si=M({__name:"StartingPanel",props:{starting:{}},setup(e){const t=e,n=z(),{saveStarting:l}=n,o=k("");return U(()=>{o.value=t.starting??""}),_(o,()=>{l(o.value)}),(i,s)=>{const d=N;return a(),g(d,{header:"Starting code"},{default:y(()=>[m("div",Oi,[h(it,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r)},null,8,["modelValue"])])]),_:1})}}}),xi=oe(Si,[["__scopeId","data-v-d5b12a01"]]),Li={class:"flex flex-col gap-2"},Fi={class:"flex items-center"},Bi={class:"flex items-center"},Vi=M({__name:"ActionsPanel",props:{userAction:{},platformAction:{}},setup(e){const t=e,n=z(),{saveUserAction:l,savePlatformAction:o}=n,i=k(null),s=k(null),d=k(["put","run-ide"]),r=k(["code2ide","light-up"]);U(()=>{i.value=t.userAction||null,s.value=t.platformAction||null}),_([i,s],()=>{l(i.value),o(s.value)});function c(){s.value=null}function f(){i.value=null}return(C,v)=>{const S=tt,D=A,R=N;return a(),g(R,{header:"Actions"},{default:y(()=>[m("div",Li,[m("div",Fi,[h(S,{modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=O=>i.value=O),variant:"filled",options:d.value,placeholder:"User action",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),h(D,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:f})]),m("div",Bi,[h(S,{modelValue:s.value,"onUpdate:modelValue":v[1]||(v[1]=O=>s.value=O),variant:"filled",options:r.value,placeholder:"Platform actions",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),h(D,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:c})])])]),_:1})}}});var ct={name:"TimesCircleIcon",extends:de};function Di(e,t,n,l,o,i){return a(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}ct.render=Di;var $i=function(t){var n=t.dt;return`
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
`)},zi={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Mi=G.extend({name:"chip",theme:$i,classes:zi}),Ei={name:"BaseChip",extends:X,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Mi,provide:function(){return{$pcChip:this,$parentInstance:this}}},ut={name:"Chip",extends:Ei,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},components:{TimesCircleIcon:ct}},Ai=["aria-label"],Ti=["src"];function Pi(e,t,n,l,o,i){return o.visible?(a(),p("div",u({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[w(e.$slots,"default",{},function(){return[e.image?(a(),p("img",u({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Ti)):e.$slots.icon?(a(),g(P(e.$slots.icon),u({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),p("span",u({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):b("",!0),e.label?(a(),p("div",u({key:3,class:e.cx("label")},e.ptm("label")),B(e.label),17)):b("",!0)]}),e.removable?w(e.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(a(),g(P(e.removeIcon?"span":"TimesCircleIcon"),u({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:i.close,onKeydown:i.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):b("",!0)],16,Ai)):b("",!0)}ut.render=Pi;var Ki=function(t){var n=t.dt;return`
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
`)},Ri={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},Ui={root:function(t){var n=t.instance,l=t.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-display-chip":l.display==="chip","p-disabled":l.disabled,"p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-focus":n.focused,"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-multiselect-open":n.overlayVisible,"p-multiselect-fluid":n.$fluid,"p-multiselect-sm p-inputfield-sm":l.size==="small","p-multiselect-lg p-inputfield-lg":l.size==="large"}]},labelContainer:"p-multiselect-label-container",label:function(t){var n=t.instance,l=t.props;return["p-multiselect-label",{"p-placeholder":n.label===l.placeholder,"p-multiselect-label-empty":!l.placeholder&&(!l.modelValue||l.modelValue.length===0)}]},clearIcon:"p-multiselect-clear-icon",chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:function(t){var n=t.instance,l=t.option,o=t.index,i=t.getItemOptions,s=t.props;return["p-multiselect-option",{"p-multiselect-option-selected":n.isSelected(l)&&s.highlightOnSelect,"p-focus":n.focusedOptionIndex===n.getOptionIndex(o,i),"p-disabled":n.isOptionDisabled(l)}]},emptyMessage:"p-multiselect-empty-message"},_i=G.extend({name:"multiselect",theme:Ki,classes:Ui,inlineStyles:Ri}),ji={name:"BaseMultiSelect",extends:Qe,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},placeholder:String,inputId:{type:String,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},overlayClass:{type:String,default:null},overlayStyle:{type:null,default:null},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},resetFilterOnClear:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:null},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:_i,provide:function(){return{$pcMultiSelect:this,$parentInstance:this}}};function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,l)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ke(Object(n),!0).forEach(function(l){dt(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function dt(e,t,n){return(t=Hi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hi(e){var t=Gi(e,"string");return re(t)=="symbol"?t:t+""}function Gi(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(re(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ue(e){return qi(e)||Zi(e)||Wi(e)||Ni()}function Ni(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wi(e,t){if(e){if(typeof e=="string")return Oe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oe(e,t):void 0}}function Zi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qi(e){if(Array.isArray(e))return Oe(e)}function Oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var pt={name:"MultiSelect",extends:ji,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(t){this.id=t||le()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||le(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(ie.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,n){return this.virtualScrollerDisabled?t:n&&n(t).index},getOptionLabel:function(t){return this.optionLabel?ne(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?ne(t,this.optionValue):t},getOptionRenderKey:function(t,n){return this.dataKey?ne(t,this.dataKey):this.getOptionLabel(t)+"_".concat(n)},getHeaderCheckboxPTOptions:function(t){return this.ptm(t,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(t,n,l,o){return this.ptm(o,{context:{selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(l,n),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.maxSelectionLimitReached&&!this.isSelected(t)?!0:this.optionDisabled?ne(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return ne(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return ne(t,this.optionGroupChildren)},getAriaPosInset:function(t){var n=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(l){return n.isOptionGroup(l)}).length:t)+1},show:function(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),t&&q(this.$refs.focusInput)},hide:function(t){var n=this,l=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),t&&q(n.$refs.focusInput)};setTimeout(function(){l()},0)},onFocus:function(t){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var n,l;this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",t),(n=(l=this.formField).onBlur)===null||n===void 0||n.call(l)},onKeyDown:function(t){var n=this;if(this.disabled){t.preventDefault();return}var l=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(t);break;default:if(t.code==="KeyA"&&l){var o=this.visibleOptions.filter(function(i){return n.isValidOption(i)}).map(function(i){return n.getOptionValue(i)});this.updateModel(t,o),t.preventDefault();break}!l&&Ct(t.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(t),t.preventDefault());break}this.clicked=!1},onContainerClick:function(t){this.disabled||this.loading||t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(t){this.updateModel(t,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?wt(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;q(n)},onLastHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?It(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;q(n)},onOptionSelect:function(t,n){var l=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(n))){var s=this.isSelected(n),d=null;s?d=this.d_value.filter(function(r){return!pe(r,l.getOptionValue(n),l.equalityKey)}):d=[].concat(Ue(this.d_value||[]),[this.getOptionValue(n)]),this.updateModel(t,d),o!==-1&&(this.focusedOptionIndex=o),i&&q(this.$refs.focusInput)}},onOptionMouseMove:function(t,n){this.focusOnHover&&this.changeFocusedOptionIndex(t,n)},onOptionSelectRange:function(t){var n=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(l===-1&&(l=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(l)),l!==-1&&o!==-1){var i=Math.min(l,o),s=Math.max(l,o),d=this.visibleOptions.slice(i,s+1).filter(function(r){return n.isValidOption(r)}).map(function(r){return n.getOptionValue(r)});this.updateModel(t,d)}},onFilterChange:function(t){var n=t.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(t){kt.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(!this.overlayVisible)this.show();else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,this.startRangeIndex,n),this.changeFocusedOptionIndex(t,n)}t.preventDefault()},onArrowUpKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var l=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,l,this.startRangeIndex),this.changeFocusedOptionIndex(t,l),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;t.shiftKey?l.setSelectionRange(0,t.target.selectionStart):(l.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var o=t.metaKey||t.ctrlKey,i=this.findFirstOptionIndex();t.shiftKey&&o&&this.onOptionSelectRange(t,i,this.startRangeIndex),this.changeFocusedOptionIndex(t,i),!this.overlayVisible&&this.show()}t.preventDefault()},onEndKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;if(t.shiftKey)l.setSelectionRange(t.target.selectionStart,l.value.length);else{var o=l.value.length;l.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else{var i=t.metaKey||t.ctrlKey,s=this.findLastOptionIndex();t.shiftKey&&i&&this.onOptionSelectRange(t,this.startRangeIndex,s),this.changeFocusedOptionIndex(t,s),!this.overlayVisible&&this.show()}t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.overlayVisible?this.focusedOptionIndex!==-1&&(t.shiftKey?this.onOptionSelectRange(t,this.focusedOptionIndex):this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(q(t.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(t){ie.set("overlay",t,this.$primevue.config.zIndex.overlay),Ze(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&q(this.$refs.filterInput.$el)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){ie.clear(t)},alignOverlay:function(){this.appendTo==="self"?Ot(this.overlay,this.$el):(this.overlay.style.minWidth=qe(this.$el)+"px",St(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.overlayVisible&&t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new xt(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Lt()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},getLabelByValue:function(t){var n=this,l=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],o=l.find(function(i){return!n.isOptionGroup(i)&&pe(n.getOptionValue(i),t,n.equalityKey)});return o?this.getOptionLabel(o):null},getSelectedItemsLabel:function(){var t=/{(.*?)}/,n=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return t.test(n)?n.replace(n.match(t)[0],this.d_value.length+""):n},onToggleAll:function(t){var n=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:t,checked:!this.allSelected});else{var l=this.allSelected?[]:this.visibleOptions.filter(function(o){return n.isValidOption(o)}).map(function(o){return n.getOptionValue(o)});this.updateModel(t,l)}},removeOption:function(t,n){var l=this;t.stopPropagation();var o=this.d_value.filter(function(i){return!pe(i,n,l.equalityKey)});this.updateModel(t,o)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return Ft(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(t){var n;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((n=this.getOptionLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(t){return Q(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isEquals:function(t,n){return pe(t,n,this.equalityKey)},isSelected:function(t){var n=this,l=this.getOptionValue(t);return(this.d_value||[]).some(function(o){return n.isEquals(o,l)})},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(n){return t.isValidOption(n)})},findLastOptionIndex:function(){var t=this;return fe(this.visibleOptions,function(n){return t.isValidOption(n)})},findNextOptionIndex:function(t){var n=this,l=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidOption(o)}):-1;return l>-1?l+t+1:t},findPrevOptionIndex:function(t){var n=this,l=t>0?fe(this.visibleOptions.slice(0,t),function(o){return n.isValidOption(o)}):-1;return l>-1?l:t},findSelectedOptionIndex:function(){var t=this;if(this.$filled){for(var n=function(){var s=t.d_value[o],d=t.visibleOptions.findIndex(function(r){return t.isValidSelectedOption(r)&&t.isEquals(s,t.getOptionValue(r))});if(d>-1)return{v:d}},l,o=this.d_value.length-1;o>=0;o--)if(l=n(),l)return l.v}return-1},findFirstSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(n){return t.isValidSelectedOption(n)}):-1},findLastSelectedOptionIndex:function(){var t=this;return this.$filled?fe(this.visibleOptions,function(n){return t.isValidSelectedOption(n)}):-1},findNextSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l+t+1:-1},findPrevSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t>0?fe(this.visibleOptions.slice(0,t),function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l:-1},findNearestSelectedOptionIndex:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=-1;return this.$filled&&(n?(l=this.findPrevSelectedOptionIndex(t),l=l===-1?this.findNextSelectedOptionIndex(t):l):(l=this.findNextSelectedOptionIndex(t),l=l===-1?this.findPrevSelectedOptionIndex(t):l)),l>-1?l:t},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions:function(t){var n=this;this.searchValue=(this.searchValue||"")+t.key;var l=-1;Q(this.searchValue)&&(this.focusedOptionIndex!==-1?(l=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}),l=l===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}):l+this.focusedOptionIndex):l=this.visibleOptions.findIndex(function(o){return n.isOptionMatched(o)}),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(t,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue="",n.searchTimeout=null},500)},changeFocusedOptionIndex:function(t,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[n]))},scrollInView:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var l=n!==-1?"".concat(t.id,"_").concat(n):t.focusedOptionId,o=Bt(t.list,'li[id="'.concat(l,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(n!==-1?n:t.focusedOptionIndex)})},autoUpdateModel:function(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.$filled){this.focusedOptionIndex=this.findFirstFocusedOptionIndex();var t=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[t])}},updateModel:function(t,n){this.writeValue(n,t),this.$emit("change",{originalEvent:t,value:n})},flatOptions:function(t){var n=this;return(t||[]).reduce(function(l,o,i){l.push({optionGroup:o,group:!0,index:i});var s=n.getOptionGroupChildren(o);return s&&s.forEach(function(d){return l.push(d)}),l},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,n){this.list=t,n&&n(t)},virtualScrollerRef:function(t){this.virtualScroller=t}},computed:{visibleOptions:function(){var t=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var l=Vt.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],i=[];return o.forEach(function(s){var d=t.getOptionGroupChildren(s),r=d.filter(function(c){return l.includes(c)});r.length>0&&i.push(Re(Re({},s),{},dt({},typeof t.optionGroupChildren=="string"?t.optionGroupChildren:"items",Ue(r))))}),this.flatOptions(i)}return l}return n},label:function(){var t;if(this.d_value&&this.d_value.length){if(Q(this.maxSelectedLabels)&&this.d_value.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();t="";for(var n=0;n<this.d_value.length;n++)n!==0&&(t+=", "),t+=this.getLabelByValue(this.d_value[n])}else t=this.placeholder;return t},chipSelectedItems:function(){return Q(this.maxSelectedLabels)&&this.d_value&&this.d_value.length>this.maxSelectedLabels},allSelected:function(){var t=this;return this.selectAll!==null?this.selectAll:Q(this.visibleOptions)&&this.visibleOptions.every(function(n){return t.isOptionGroup(n)||t.isOptionDisabled(n)||t.isSelected(n)})},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.d_value&&this.d_value.length===this.selectionLimit},filterResultMessageText:function(){return Q(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.d_value.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(n){return!t.isOptionGroup(n)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return Dt(this.fluid)?!!this.$pcFluid:this.fluid},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&Q(this.options)}},directives:{ripple:me},components:{InputText:ee,Checkbox:nt,VirtualScroller:Kt,Portal:Ye,Chip:ut,IconField:Rt,InputIcon:Ut,TimesIcon:ve,SearchIcon:_t,ChevronDownIcon:jt,SpinnerIcon:$t,CheckIcon:Ht}};function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ce(e)}function _e(e,t,n){return(t=Yi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yi(e){var t=Xi(e,"string");return ce(t)=="symbol"?t:t+""}function Xi(e,t){if(ce(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(ce(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ji=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Qi={key:0},el=["id","aria-label"],tl=["id"],nl=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function il(e,t,n,l,o,i){var s=V("Chip"),d=V("SpinnerIcon"),r=V("Checkbox"),c=V("InputText"),f=V("SearchIcon"),C=V("InputIcon"),v=V("IconField"),S=V("VirtualScroller"),D=V("Portal"),R=Xe("ripple");return a(),p("div",u({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[7]||(t[7]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},e.ptmi("root")),[m("div",u({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[m("input",u({ref:"focusInput",id:e.inputId,type:"text",readonly:"",disabled:e.disabled,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},e.ptm("hiddenInput")),null,16,Ji)],16),m("div",u({class:e.cx("labelContainer")},e.ptm("labelContainer")),[m("div",u({class:e.cx("label")},e.ptm("label")),[w(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){return[e.display==="comma"?(a(),p(K,{key:0},[j(B(i.label||"empty"),1)],64)):e.display==="chip"?(a(),p(K,{key:1},[i.chipSelectedItems?(a(),p("span",Qi,B(i.label),1)):(a(!0),p(K,{key:1},Y(e.d_value,function(O){return a(),p("span",u({key:i.getLabelByValue(O),class:e.cx("chipItem"),ref_for:!0},e.ptm("chipItem")),[w(e.$slots,"chip",{value:O,removeCallback:function(H){return i.removeOption(H,O)}},function(){return[h(s,{class:$(e.cx("pcChip")),label:i.getLabelByValue(O),removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(H){return i.removeOption(H,O)},pt:e.ptm("pcChip")},{removeicon:y(function(){return[w(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:$(e.cx("chipIcon")),item:O,removeCallback:function(H){return i.removeOption(H,O)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16)}),128)),!e.d_value||e.d_value.length===0?(a(),p(K,{key:2},[j(B(e.placeholder||"empty"),1)],64)):b("",!0)],64)):b("",!0)]})],16)],16),i.isClearIconVisible?w(e.$slots,"clearicon",{key:0,class:$(e.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(a(),g(P(e.clearIcon?"i":"TimesIcon"),u({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:i.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):b("",!0),m("div",u({class:e.cx("dropdown")},e.ptm("dropdown")),[e.loading?w(e.$slots,"loadingicon",{key:0,class:$(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(a(),p("span",u({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(a(),g(d,u({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):w(e.$slots,"dropdownicon",{key:1,class:$(e.cx("dropdownIcon"))},function(){return[(a(),g(P(e.dropdownIcon?"span":"ChevronDownIcon"),u({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true"},e.ptm("dropdownIcon")),null,16,["class"]))]})],16),h(D,{appendTo:e.appendTo},{default:y(function(){return[h(xe,u({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:y(function(){return[o.overlayVisible?(a(),p("div",u({key:0,ref:i.overlayRef,style:[e.panelStyle,e.overlayStyle],class:[e.cx("overlay"),e.panelClass,e.overlayClass],onClick:t[5]||(t[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:t[6]||(t[6]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},e.ptm("overlay")),[m("span",u({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),w(e.$slots,"header",{value:e.d_value,options:i.visibleOptions}),e.showToggleAll&&e.selectionLimit==null||e.filter?(a(),p("div",u({key:0,class:e.cx("header")},e.ptm("header")),[e.showToggleAll&&e.selectionLimit==null?(a(),g(r,{key:0,modelValue:i.allSelected,binary:!0,disabled:e.disabled,variant:e.variant,"aria-label":i.toggleAllAriaLabel,onChange:i.onToggleAll,unstyled:e.unstyled,pt:i.getHeaderCheckboxPTOptions("pcHeaderCheckbox")},{icon:y(function(O){return[e.$slots.headercheckboxicon?(a(),g(P(e.$slots.headercheckboxicon),{key:0,checked:O.checked,class:$(O.class)},null,8,["checked","class"])):O.checked?(a(),g(P(e.checkboxIcon?"span":"CheckIcon"),u({key:1,class:[O.class,_e({},e.checkboxIcon,O.checked)]},i.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")),null,16,["class"])):b("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):b("",!0),e.filter?(a(),g(v,{key:1,class:$(e.cx("pcFilterContainer")),unstyled:e.unstyled,pt:e.ptm("pcFilterContainer")},{default:y(function(){return[h(c,{ref:"filterInput",value:o.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:$(e.cx("pcFilter")),placeholder:e.filterPlaceholder,disabled:e.disabled,variant:e.variant,unstyled:e.unstyled,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:e.ptm("pcFilter")},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","disabled","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),h(C,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:y(function(){return[w(e.$slots,"filtericon",{},function(){return[e.filterIcon?(a(),p("span",u({key:0,class:e.filterIcon},e.ptm("filterIcon")),null,16)):(a(),g(f,We(u({key:1},e.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["class","unstyled","pt"])):b("",!0),e.filter?(a(),p("span",u({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),B(i.filterResultMessageText),17)):b("",!0)],16)):b("",!0),m("div",u({class:e.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[h(S,u({ref:i.virtualScrollerRef},e.virtualScrollerOptions,{items:i.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),zt({content:y(function(O){var T=O.styleClass,H=O.contentRef,te=O.items,x=O.getItemOptions,F=O.contentStyle,J=O.itemSize;return[m("ul",u({ref:function(E){return i.listRef(E,H)},id:o.id+"_list",class:[e.cx("list"),T],style:F,role:"listbox","aria-multiselectable":"true","aria-label":i.listAriaLabel},e.ptm("list")),[(a(!0),p(K,null,Y(te,function(L,E){return a(),p(K,{key:i.getOptionRenderKey(L,i.getOptionIndex(E,x))},[i.isOptionGroup(L)?(a(),p("li",u({key:0,id:o.id+"_"+i.getOptionIndex(E,x),style:{height:J?J+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[w(e.$slots,"optiongroup",{option:L.optionGroup,index:i.getOptionIndex(E,x)},function(){return[j(B(i.getOptionGroupLabel(L.optionGroup)),1)]})],16,tl)):Se((a(),p("li",u({key:1,id:o.id+"_"+i.getOptionIndex(E,x),style:{height:J?J+"px":void 0},class:e.cx("option",{option:L,index:E,getItemOptions:x}),role:"option","aria-label":i.getOptionLabel(L),"aria-selected":i.isSelected(L),"aria-disabled":i.isOptionDisabled(L),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(E,x)),onClick:function(ae){return i.onOptionSelect(ae,L,i.getOptionIndex(E,x),!0)},onMousemove:function(ae){return i.onOptionMouseMove(ae,i.getOptionIndex(E,x))},ref_for:!0},i.getCheckboxPTOptions(L,x,E,"option"),{"data-p-selected":i.isSelected(L),"data-p-focused":o.focusedOptionIndex===i.getOptionIndex(E,x),"data-p-disabled":i.isOptionDisabled(L)}),[h(r,{defaultValue:i.isSelected(L),binary:!0,tabindex:-1,variant:e.variant,unstyled:e.unstyled,pt:i.getCheckboxPTOptions(L,x,E,"pcOptionCheckbox")},{icon:y(function(W){return[e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon?(a(),g(P(e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon),{key:0,checked:W.checked,class:$(W.class)},null,8,["checked","class"])):W.checked?(a(),g(P(e.checkboxIcon?"span":"CheckIcon"),u({key:1,class:[W.class,_e({},e.checkboxIcon,W.checked)],ref_for:!0},i.getCheckboxPTOptions(L,x,E,"pcOptionCheckbox.icon")),null,16,["class"])):b("",!0)]}),_:2},1032,["defaultValue","variant","unstyled","pt"]),w(e.$slots,"option",{option:L,selected:i.isSelected(L),index:i.getOptionIndex(E,x)},function(){return[m("span",u({ref_for:!0},e.ptm("optionLabel")),B(i.getOptionLabel(L)),17)]})],16,nl)),[[R]])],64)}),128)),o.filterValue&&(!te||te&&te.length===0)?(a(),p("li",u({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[w(e.$slots,"emptyfilter",{},function(){return[j(B(i.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(a(),p("li",u({key:1,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[w(e.$slots,"empty",{},function(){return[j(B(i.emptyMessageText),1)]})],16)):b("",!0)],16,el)]}),_:2},[e.$slots.loader?{name:"loader",fn:y(function(O){var T=O.options;return[w(e.$slots,"loader",{options:T})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),w(e.$slots,"footer",{value:e.d_value,options:i.visibleOptions}),!e.options||e.options&&e.options.length===0?(a(),p("span",u({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),B(i.emptyMessageText),17)):b("",!0),m("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),B(i.selectedMessageText),17),m("span",u({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[4]||(t[4]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}pt.render=il;const ll={class:"flex flex-col gap-4"},ol=M({__name:"HighlightPanel",props:{slots:{},modules:{}},setup(e){const t=e,n=z(),{saveSlots:l,saveModules:o}=n,i=k(null),s=k(null),d=k(["A","B","C","D","E","F"]),r=k(["LED","PB","LS","TS","PTM","NCD","MT","MCP","CLM","GS","BZ","CLR","JS","DS","SW","OLD","LDT"]);return U(()=>{i.value=t.slots||null,s.value=t.modules||null}),_([i,s],()=>{var c,f;((c=i.value)==null?void 0:c.length)==0&&(i.value=null),((f=s.value)==null?void 0:f.length)==0&&(s.value=null),l(i.value),o(s.value)}),(c,f)=>{const C=pt,v=N;return a(),g(v,{header:"Highlight slots & modules"},{default:y(()=>[m("div",ll,[h(C,{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=S=>i.value=S),display:"chip",options:d.value,placeholder:"Select slots",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),h(C,{modelValue:s.value,"onUpdate:modelValue":f[1]||(f[1]=S=>s.value=S),display:"chip",options:r.value,placeholder:"Select modules",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"])])]),_:1})}}}),al={class:"flex flex-col gap-2"},sl={class:"flex items-center"},rl={class:"flex items-center justify-end gap-2 mb-8 mt-4"},cl=M({__name:"StepEditor",setup(e){const{locale:t}=ge(),n=z(),{lesson:l,stepIndex:o}=be(n),{removeStep:i}=n,s=k(!1),d=k(!1),r=Le(()=>{var C;return o.value==null?null:((C=l.value)==null?void 0:C.steps[o.value])??null});async function c(){if(!(s.value||r.value==null)){s.value=!0;try{await se.updateStepTranslationByID(r.value.id,t.value,r.value.title,r.value.inner)}finally{s.value=!1}}}async function f(){if(!(d.value||r.value==null)){d.value=!0;try{await se.deleteStepByID(r.value.id),i()}finally{d.value=!1}}}return(C,v)=>{const S=ee,D=Be,R=ye,O=N,T=A;return r.value?(a(),p("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:r.value.id},[h(O,{header:"Info",class:"mb-2"},{default:y(()=>[m("div",al,[m("div",sl,[h(D,{variant:"on",class:"w-full"},{default:y(()=>[v[1]||(v[1]=m("label",{for:"title"},"Title",-1)),h(S,{id:"title",modelValue:r.value.title,"onUpdate:modelValue":v[0]||(v[0]=H=>r.value.title=H),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),h(R,{size:"small",severity:"secondary",variant:"simple"},{default:y(()=>[j(B(r.value.type),1)]),_:1})])]),_:1}),h(I(ii),{contents:r.value.inner.contents,"step-type":r.value.type,class:"mb-2"},null,8,["contents","step-type"]),r.value.type=="code"?(a(),g(I(xi),{key:0,starting:r.value.inner.starting,class:"mb-2"},null,8,["starting"])):b("",!0),r.value.type=="code"?(a(),g(I(ki),{key:1,solution:r.value.inner.solution,class:"mb-2"},null,8,["solution"])):b("",!0),r.value.type=="code"?(a(),g(I(ol),{key:2,slots:r.value.inner.slots,modules:r.value.inner.modules,class:"mb-2"},null,8,["slots","modules"])):b("",!0),r.value.type=="question"?(a(),g(I(gi),{key:3,options:r.value.inner.options,class:"mb-2"},null,8,["options"])):b("",!0),r.value.type=="matching"?(a(),g(I(Ci),{key:4,pairs:r.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):b("",!0),r.value.type=="open"?(a(),g(I(Nn),{key:5,answer:r.value.inner.answer,class:"mb-2"},null,8,["answer"])):b("",!0),h(I(Vi),{"user-action":r.value.inner.userAction,"platform-action":r.value.inner.platformAction},null,8,["user-action","platform-action"]),m("div",rl,[h(T,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:f,loading:d.value,disabled:d.value},null,8,["loading","disabled"]),h(T,{label:"Save",icon:"pi pi-save",severity:"info",size:"small",onClick:c,loading:s.value,disabled:s.value},null,8,["loading","disabled"])])])):b("",!0)}}});var ft={name:"WindowMaximizeIcon",extends:de};function ul(e,t,n,l,o,i){return a(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}ft.render=ul;var ht={name:"WindowMinimizeIcon",extends:de};function dl(e,t,n,l,o,i){return a(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}ht.render=dl;var pl=function(t){var n=t.dt;return`
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
`)},fl={mask:function(t){var n=t.position,l=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:l?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},hl={mask:function(t){var n=t.props,l=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],o=l.find(function(i){return i===n.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":n.modal},o?"p-dialog-".concat(o):""]},root:function(t){var n=t.props,l=t.instance;return["p-dialog p-component",{"p-dialog-maximized":n.maximizable&&l.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},ml=G.extend({name:"dialog",theme:pl,classes:hl,inlineStyles:fl}),gl={name:"BaseDialog",extends:X,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:ml,provide:function(){return{$pcDialog:this,$parentInstance:this}}},mt={name:"Dialog",extends:gl,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:Le(function(){return t._instance})}},data:function(){return{id:this.$attrs.id,containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},watch:{"$attrs.id":function(t){this.id=t||le()}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&ie.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.id=this.id||le(),this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&ie.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ne(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),q(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&ie.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.footer&&t(this.footerContainer);n||(n=this.$slots.header&&t(this.headerContainer),n||(n=this.$slots.default&&t(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&q(n,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?Ae():Te())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Ae()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Te()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Mt(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var l in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(l,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[l],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&Ze(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(n){if(t.dragging){var l=qe(t.container),o=Et(t.container),i=n.pageX-t.lastPageX,s=n.pageY-t.lastPageY,d=t.container.getBoundingClientRect(),r=d.left+i,c=d.top+s,f=At(),C=getComputedStyle(t.container),v=parseFloat(C.marginLeft),S=parseFloat(C.marginTop);t.container.style.position="fixed",t.keepInViewport?(r>=t.minX&&r+l<f.width&&(t.lastPageX=n.pageX,t.container.style.left=r-v+"px"),c>=t.minY&&c+o<f.height&&(t.lastPageY=n.pageY,t.container.style.top=c-S+"px")):(t.lastPageX=n.pageX,t.container.style.left=r-v+"px",t.lastPageY=n.pageY,t.container.style.top=c-S+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(n){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:me,focustrap:Tt},components:{Button:A,Portal:Ye,WindowMinimizeIcon:ht,WindowMaximizeIcon:ft,TimesIcon:ve}};function ue(e){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ue(e)}function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,l)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?je(Object(n),!0).forEach(function(l){bl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function bl(e,t,n){return(t=vl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vl(e){var t=yl(e,"string");return ue(t)=="symbol"?t:t+""}function yl(e,t){if(ue(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(ue(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Cl=["aria-labelledby","aria-modal"],wl=["id"];function Il(e,t,n,l,o,i){var s=V("Button"),d=V("Portal"),r=Xe("focustrap");return a(),g(d,{appendTo:e.appendTo},{default:y(function(){return[o.containerVisible?(a(),p("div",u({key:0,ref:i.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return i.onMaskMouseDown&&i.onMaskMouseDown.apply(i,arguments)}),onMouseup:t[2]||(t[2]=function(){return i.onMaskMouseUp&&i.onMaskMouseUp.apply(i,arguments)})},e.ptm("mask")),[h(xe,u({name:"p-dialog",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:y(function(){return[e.visible?Se((a(),p("div",u({key:0,ref:i.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:i.close,maximizeCallback:function(f){return i.maximize(f)}}):(a(),p(K,{key:1},[e.showHeader?(a(),p("div",u({key:0,ref:i.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return i.initDrag&&i.initDrag.apply(i,arguments)})},e.ptm("header")),[w(e.$slots,"header",{class:$(e.cx("title"))},function(){return[e.header?(a(),p("span",u({key:0,id:i.ariaLabelledById,class:e.cx("title")},e.ptm("title")),B(e.header),17,wl)):b("",!0)]}),m("div",u({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?(a(),g(s,u({key:0,ref:i.maximizableRef,autofocus:o.focusableMax,class:e.cx("pcMaximizeButton"),onClick:i.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:y(function(c){return[w(e.$slots,"maximizeicon",{maximized:o.maximized},function(){return[(a(),g(P(i.maximizeIconComponent),u({class:[c.class,o.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])):b("",!0),e.closable?(a(),g(s,u({key:1,ref:i.closeButtonRef,autofocus:o.focusableClose,class:e.cx("pcCloseButton"),onClick:i.close,"aria-label":i.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:y(function(c){return[w(e.$slots,"closeicon",{},function(){return[(a(),g(P(e.closeIcon?"span":"TimesIcon"),u({class:[e.closeIcon,c.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])):b("",!0)],16)],16)):b("",!0),m("div",u({ref:i.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle},He(He({},e.contentProps),e.ptm("content"))),[w(e.$slots,"default")],16),e.footer||e.$slots.footer?(a(),p("div",u({key:1,ref:i.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer",{},function(){return[j(B(e.footer),1)]})],16)):b("",!0)],64))],16,Cl)),[[r,{disabled:!e.modal}]]):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):b("",!0)]}),_:3},8,["appendTo"])}mt.render=Il;const kl={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},Ol={class:"flex flex-1 items-center"},Sl={key:1,class:"flex items-center gap-1"},xl={class:"flex items-center gap-1"},Ll={class:"flex flex-1 justify-end items-center gap-2"},Fl={class:"flex justify-between items-center mb-8"},Bl={class:"flex justify-end gap-2"},Vl=M({__name:"EditorHeader",setup(e){const{locale:t}=ge(),n=Je(),l=z(),{lesson:o,stepIndex:i}=be(l),{changeStep:s,addStep:d,setSteps:r}=l,c=k(!1),f=k(!1),C=k(!1),v=k(null),S=k(["article","code","matching","open","question"]);function D(x){switch(x){case"article":return"pi pi-align-left";case"code":return"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function R(){if(!f.value){f.value=!0;try{const{data:x}=await se.getProjectStepsByID(n.params.id.toString()),F=[];for(const J of x){const L=await Pe(J,t.value,!1);F.push(L)}r(F)}catch(x){alert(x)}finally{f.value=!1}}}U(R),_(t,R,{immediate:!0});async function O(){if(v.value){C.value=!0;try{const{data:x}=await se.createStep(v.value),F=await Pe(x,t.value,!0);await se.linkStepToProjectByID(n.params.id.toString(),x.id),d(v.value,F)}catch(x){alert(x)}finally{C.value=!1,c.value=!1}}}const T=k(),H=k([{label:"Profile",icon:"pi pi-user"},{label:"Log out",icon:"pi pi-sign-out"}]),te=x=>{T.value.toggle(x)};return(x,F)=>{const J=Fe,L=A,E=Ge,W=et,ae=tt,gt=mt;return a(),p(K,null,[m("div",kl,[m("div",Ol,[h(J,{src:I(Gt),width:"32"},null,8,["src"]),F[5]||(F[5]=m("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),h(L,{id:"#projects",icon:"pi pi-angle-left",label:x.$t("projects"),severity:"secondary",variant:"text",onClick:F[0]||(F[0]=Z=>I(Pt).push({name:"projects"})),size:"small"},null,8,["label"])]),f.value||I(o)==null?(a(),g(E,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):(a(),p("div",Sl,[m("div",xl,[(a(!0),p(K,null,Y(I(o).steps,(Z,Ce)=>(a(),g(L,{key:Z.id,icon:D(Z.type),rounded:"",severity:I(i)==Ce?void 0:"secondary",variant:I(i)==Ce?void 0:"outlined",onClick:Ul=>I(s)(Ce),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128))]),h(L,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:F[1]||(F[1]=Z=>c.value=!0)})])),m("div",Ll,[h(Nt),h(L,{type:"button",icon:"pi pi-ellipsis-v",onClick:te,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),h(W,{ref_key:"menu",ref:T,id:"overlay_menu",model:H.value,popup:!0},null,8,["model"])])]),h(gt,{visible:c.value,"onUpdate:visible":F[4]||(F[4]=Z=>c.value=Z),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:y(()=>[m("div",Fl,[F[6]||(F[6]=m("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),h(ae,{modelValue:v.value,"onUpdate:modelValue":F[2]||(F[2]=Z=>v.value=Z),options:S.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),m("div",Bl,[h(L,{type:"button",label:"Cancel",severity:"secondary",onClick:F[3]||(F[3]=Z=>c.value=!1)}),h(L,{type:"button",label:"+ Add",onClick:O,loading:C.value,disabled:C.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),Dl={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},$l={key:0},zl={key:1,class:"flex"},Ml=M({__name:"LessonPreview",setup(e){const t=z(),{lesson:n,stepIndex:l}=be(t),{changeStep:o}=t,i=Le(()=>{var r;return l.value==null?null:((r=n.value)==null?void 0:r.steps[l.value])??null});async function s(){l.value!=null&&o(l.value-1)}async function d(){l.value!=null&&o(l.value+1)}return(r,c)=>{const f=A;return a(),p("div",Dl,[i.value?(a(),p("div",$l,[i.value.type=="article"?(a(),g(I(Zt),{key:0,step:i.value},null,8,["step"])):i.value.type=="code"?(a(),g(I(qt),{key:1,step:i.value},null,8,["step"])):i.value.type=="matching"?(a(),g(I(Yt),{key:2,step:i.value},null,8,["step"])):i.value.type=="open"?(a(),g(I(Xt),{key:3,step:i.value},null,8,["step"])):i.value.type=="question"?(a(),g(I(Jt),{key:4,step:i.value},null,8,["step"])):b("",!0)])):b("",!0),I(n)!=null&&I(n).steps!=null&&I(n).steps.length>0&&i.value?(a(),p("div",zl,[I(l)!==0?(a(),g(f,{key:0,label:"Previous",icon:"pi pi-angle-left",size:"small",onClick:s})):b("",!0),I(l)<I(n).steps.length-1?(a(),g(f,{key:1,label:"Next",icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:d})):b("",!0)])):b("",!0)])}}}),El={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 58px)"}},Al={class:"max-w-[320px] w-full bg-white"},Tl={key:0,class:"p-4"},Pl={class:"flex-grow border-l"},Kl={class:"border-l max-w-[400px] w-full"},Rl=M({__name:"EditorView",setup(e){const{locale:t}=ge(),n=Je(),l=z(),{setLesson:o}=l,i=k(!1);async function s(){if(!i.value){i.value=!0;try{const{data:d}=await Ie.getProjectByID(n.params.id.toString()),r=await bt(d,t.value);o(r)}finally{i.value=!1}}}return U(s),_(t,s),(d,r)=>{const c=Ge;return a(),p(K,null,[i.value?b("",!0):(a(),g(Vl,{key:0})),m("div",El,[m("div",Al,[i.value?(a(),p("div",Tl,[h(c,{height:"192px"}),r[0]||(r[0]=m("br",null,null,-1)),h(c,{height:"32px"}),r[1]||(r[1]=m("br",null,null,-1)),h(c,{height:"32px"})])):(a(),g(Tn,{key:1}))]),m("div",Pl,[i.value?b("",!0):(a(),g(cl,{key:0}))]),m("div",Kl,[i.value?b("",!0):(a(),g(Ml,{key:0}))])])],64)}}}),Wl=oe(Rl,[["__scopeId","data-v-4984c2dd"]]);export{Wl as default};
