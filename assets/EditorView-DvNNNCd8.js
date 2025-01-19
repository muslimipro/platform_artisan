import{a as ue,s as we,t as Re}from"./types-CVDl5fln.js";import{u as $}from"./editor-store-zh0KGm4j.js";import{J as N,m as v,D as s,E as m,F as L,a0 as W,H as xe,I as f,ah as Y,Y as U,X as x,ai as I,aq as Oe,a1 as Ce,S as M,aa as O,T as u,al as R,_ as w,V as h,W as q,a4 as D,ar as He,as as ge,a2 as ce,at as be,a5 as Ge,ac as S,ao as le,an as X,e as _,o as z,w as A,af as y,U as ye,a6 as ke,au as Ne,$ as We,am as Ke,c as Be,ag as qe,ap as $e,ae as Ye,av as Ze}from"./index-CWUNhQcE.js";import{a as Je,s as Z,d as de,_ as Xe}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-d6gJApLN.js";import{s as ae}from"./index-N5zE1uUk.js";import{a as fe,L as Qe}from"./logo-Db3w56_L.js";import{a as G,_ as J,b as Se,t as _e}from"./dto-b17w84_a.js";import{s as et,d as tt,_ as nt,a as lt,M as at,b as ot,c as it}from"./QuestionStep.vue_vue_type_script_setup_true_lang-DHxODSuN.js";import{s as Ie}from"./index-iod-wkUq.js";import"./http-8dPoYH0A.js";var st=function(n){var t=n.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("textarea.color"),`;
    background: `).concat(t("textarea.background"),`;
    padding-block: `).concat(t("textarea.padding.y"),`;
    padding-inline: `).concat(t("textarea.padding.x"),`;
    border: 1px solid `).concat(t("textarea.border.color"),`;
    transition: background `).concat(t("textarea.transition.duration"),", color ").concat(t("textarea.transition.duration"),", border-color ").concat(t("textarea.transition.duration"),", outline-color ").concat(t("textarea.transition.duration"),", box-shadow ").concat(t("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(t("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(t("textarea.focus.border.color"),`;
    box-shadow: `).concat(t("textarea.focus.ring.shadow"),`;
    outline: `).concat(t("textarea.focus.ring.width")," ").concat(t("textarea.focus.ring.style")," ").concat(t("textarea.focus.ring.color"),`;
    outline-offset: `).concat(t("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(t("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(t("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(t("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(t("textarea.disabled.background"),`;
    color: `).concat(t("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(t("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(t("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(t("textarea.sm.font.size"),`;
    padding-block: `).concat(t("textarea.sm.padding.y"),`;
    padding-inline: `).concat(t("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(t("textarea.lg.font.size"),`;
    padding-block: `).concat(t("textarea.lg.padding.y"),`;
    padding-inline: `).concat(t("textarea.lg.padding.x"),`;
}
`)},rt={root:function(n){var t=n.instance,o=n.props;return["p-textarea p-component",{"p-filled":t.$filled,"p-textarea-resizable ":o.autoResize,"p-textarea-sm p-inputfield-sm":o.size==="small","p-textarea-lg p-inputfield-lg":o.size==="large","p-invalid":t.$invalid,"p-variant-filled":t.$variant==="filled","p-textarea-fluid":t.$fluid}]}},ut=N.extend({name:"textarea",theme:st,classes:rt}),pt={name:"BaseTextarea",extends:Je,props:{autoResize:Boolean},style:ut,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Fe={name:"Textarea",extends:pt,inheritAttrs:!1,observer:null,mounted:function(){var n=this;this.autoResize&&(this.observer=new ResizeObserver(function(){n.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(n){this.autoResize&&this.resize(),this.writeValue(n.target.value,n)}},computed:{attrs:function(){return v(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},ct=["value","disabled","aria-invalid"];function dt(e,n,t,o,a,l){return s(),m("textarea",v({class:e.cx("root"),value:e.d_value,disabled:e.disabled,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return l.onInput&&l.onInput.apply(l,arguments)})},l.attrs),null,16,ct)}Fe.render=dt;var ft=function(n){var t=n.dt;return`
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
    font-weight: `.concat(t("floatlabel.font.weight"),`;
    inset-inline-start: `).concat(t("floatlabel.position.x"),`;
    color: `).concat(t("floatlabel.color"),`;
    transition-duration: `).concat(t("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(t("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((`).concat(t("form.field.padding.x")," * 2) + ").concat(t("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(t("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(t("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(t("floatlabel.active.font.size"),`;
    font-weight: `).concat(t("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(t("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: `).concat(t("floatlabel.focus.color"),`;
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: `).concat(t("floatlabel.in.input.padding.top"),`;
    padding-block-end: `).concat(t("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(t("floatlabel.in.active.top"),`;
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
    border-radius: `).concat(t("floatlabel.on.border.radius"),`;
    background: `).concat(t("floatlabel.on.active.background"),`;
    padding: `).concat(t("floatlabel.on.active.padding"),`;
}
`)},mt={root:function(n){n.instance;var t=n.props;return["p-floatlabel",{"p-floatlabel-over":t.variant==="over","p-floatlabel-on":t.variant==="on","p-floatlabel-in":t.variant==="in"}]}},ht=N.extend({name:"floatlabel",theme:ft,classes:mt}),vt={name:"BaseFloatLabel",extends:W,props:{variant:{type:String,default:"over"}},style:ht,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},me={name:"FloatLabel",extends:vt,inheritAttrs:!1};function gt(e,n,t,o,a,l){return s(),m("span",v({class:e.cx("root")},e.ptmi("root")),[L(e.$slots,"default")],16)}me.render=gt;var he={name:"PlusIcon",extends:xe};function bt(e,n,t,o,a,l){return s(),m("svg",v({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[f("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}he.render=bt;var Le={name:"UploadIcon",extends:xe};function yt(e,n,t,o,a,l){return s(),m("svg",v({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}Le.render=yt;var _t=function(n){var t=n.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(t("progressbar.height"),`;
    background: `).concat(t("progressbar.background"),`;
    border-radius: `).concat(t("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(t("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(t("progressbar.label.color"),`;
    font-size: `).concat(t("progressbar.label.font.size"),`;
    font-weight: `).concat(t("progressbar.label.font.weight"),`;
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
`)},wt={root:function(n){var t=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},xt=N.extend({name:"progressbar",theme:_t,classes:wt}),Ct={name:"BaseProgressBar",extends:W,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:xt,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},Pe={name:"ProgressBar",extends:Ct,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},kt=["aria-valuenow"];function Bt(e,n,t,o,a,l){return s(),m("div",v({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[l.determinate?(s(),m("div",v({key:0,class:e.cx("value"),style:l.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(s(),m("div",v({key:0,class:e.cx("label")},e.ptm("label")),[L(e.$slots,"default",{},function(){return[Y(U(e.value+"%"),1)]})],16)):x("",!0)],16)):l.indeterminate?(s(),m("div",v({key:1,class:e.cx("value")},e.ptm("value")),null,16)):x("",!0)],16,kt)}Pe.render=Bt;var $t=function(n){var t=n.dt;return`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid `.concat(t("fileupload.border.color"),`;
    border-radius: `).concat(t("fileupload.border.radius"),`;
    background: `).concat(t("fileupload.background"),`;
    color: `).concat(t("fileupload.color"),`;
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: `).concat(t("fileupload.header.padding"),`;
    background: `).concat(t("fileupload.header.background"),`;
    color: `).concat(t("fileupload.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("fileupload.header.border.width"),`;
    border-color: `).concat(t("fileupload.header.border.color"),`;
    border-radius: `).concat(t("fileupload.header.border.radius"),`;
    gap: `).concat(t("fileupload.header.gap"),`;
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.content.gap"),`;
    transition: border-color `).concat(t("fileupload.transition.duration"),`;
    padding: `).concat(t("fileupload.content.padding"),`;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: `).concat(t("fileupload.progressbar.height"),`;
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.filelist.gap"),`;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: `).concat(t("fileupload.file.padding"),`;
    border-block-end: 1px solid `).concat(t("fileupload.file.border.color"),`;
    gap: `).concat(t("fileupload.file.gap"),`;
}

.p-fileupload-file:last-child {
    border-block-end: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.file.info.gap"),`;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-inline-start: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(t("fileupload.content.highlight.border.color"),`;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("fileupload.basic.gap"),`;
}
`)},St={root:function(n){var t=n.props;return["p-fileupload p-fileupload-".concat(t.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},It=N.extend({name:"fileupload",theme:$t,classes:St}),Ft={name:"BaseFileUpload",extends:W,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:It,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},Ve={name:"FileContent",hostName:"FileUpload",extends:W,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(n){var t,o=1024,a=3,l=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(l[0]);var r=Math.floor(Math.log(n)/Math.log(o)),p=parseFloat((n/Math.pow(o,r)).toFixed(a));return"".concat(p," ").concat(l[r])}},components:{Button:I,Badge:Oe,TimesIcon:Ce}},Lt=["alt","src","width"];function Pt(e,n,t,o,a,l){var r=M("Badge"),p=M("TimesIcon"),c=M("Button");return s(!0),m(D,null,O(t.files,function(i,d){return s(),m("div",v({key:i.name+i.type+i.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[f("img",v({role:"presentation",class:e.cx("fileThumbnail"),alt:i.name,src:i.objectURL,width:t.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,Lt),f("div",v({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[f("div",v({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),U(i.name),17),f("span",v({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),U(l.formatSize(i.size)),17)],16),u(r,{value:t.badgeValue,class:R(e.cx("pcFileBadge")),severity:t.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),f("div",v({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[u(c,{onClick:function(b){return e.$emit("remove",d)},text:"",rounded:"",severity:"danger",class:R(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:w(function(g){return[t.templates.fileremoveicon?(s(),h(q(t.templates.fileremoveicon),{key:0,class:R(g.class),file:i,index:d},null,8,["class","file","index"])):(s(),h(p,v({key:1,class:g.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}Ve.render=Pt;function re(e){return At(e)||zt(e)||ze(e)||Vt()}function Vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function At(e){if(Array.isArray(e))return pe(e)}function ne(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ze(e))||n){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(i){throw i},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,r=!0,p=!1;return{s:function(){t=t.call(e)},n:function(){var i=t.next();return r=i.done,i},e:function(i){p=!0,l=i},f:function(){try{r||t.return==null||t.return()}finally{if(p)throw l}}}}function ze(e,n){if(e){if(typeof e=="string")return pe(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?pe(e,n):void 0}}function pe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var ve={name:"FileUpload",extends:Ft,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(n){n.button===0&&this.$refs.fileInput.click()},onFileSelect:function(n){if(n.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var t=n.dataTransfer?n.dataTransfer.files:n.target.files,o=ne(t),a;try{for(o.s();!(a=o.n()).done;){var l=a.value;this.isFileSelected(l)||this.validate(l)&&(this.isImage(l)&&(l.objectURL=window.URL.createObjectURL(l)),this.files.push(l))}}catch(r){o.e(r)}finally{o.f()}this.$emit("select",{originalEvent:n,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),n.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var n=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var t=new XMLHttpRequest,o=new FormData;this.$emit("before-upload",{xhr:t,formData:o});var a=ne(this.files),l;try{for(a.s();!(l=a.n()).done;){var r=l.value;o.append(this.name,r,r.name)}}catch(p){a.e(p)}finally{a.f()}t.upload.addEventListener("progress",function(p){p.lengthComputable&&(n.progress=Math.round(p.loaded*100/p.total)),n.$emit("progress",{originalEvent:p,progress:n.progress})}),t.onreadystatechange=function(){if(t.readyState===4){var p;n.progress=0,t.status>=200&&t.status<300?(n.fileLimit&&(n.uploadedFileCount+=n.files.length),n.$emit("upload",{xhr:t,files:n.files})):n.$emit("error",{xhr:t,files:n.files}),(p=n.uploadedFiles).push.apply(p,re(n.files)),n.clear()}},t.open("POST",this.url,!0),this.$emit("before-send",{xhr:t,formData:o}),t.withCredentials=this.withCredentials,t.send(o)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(n){if(this.files&&this.files.length){var t=ne(this.files),o;try{for(t.s();!(o=t.n()).done;){var a=o.value;if(a.name+a.type+a.size===n.name+n.type+n.size)return!0}}catch(l){t.e(l)}finally{t.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(n){return this.accept&&!this.isFileTypeValid(n)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",n.name).replace("{1}",this.accept)),!1):this.maxFileSize&&n.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",n.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(n){var t=this.accept.split(",").map(function(p){return p.trim()}),o=ne(t),a;try{for(o.s();!(a=o.n()).done;){var l=a.value,r=this.isWildcard(l)?this.getTypeClass(n.type)===this.getTypeClass(l):n.type==l||this.getFileExtension(n).toLowerCase()===l.toLowerCase();if(r)return!0}}catch(p){o.e(p)}finally{o.f()}return!1},getTypeClass:function(n){return n.substring(0,n.indexOf("/"))},isWildcard:function(n){return n.indexOf("*")!==-1},getFileExtension:function(n){return"."+n.name.split(".").pop()},isImage:function(n){return/^image\//.test(n.type)},onDragEnter:function(n){this.disabled||(n.stopPropagation(),n.preventDefault())},onDragOver:function(n){this.disabled||(!this.isUnstyled&&He(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),n.stopPropagation(),n.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&ge(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(n){if(!this.disabled){!this.isUnstyled&&ge(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),n.stopPropagation(),n.preventDefault();var t=n.dataTransfer?n.dataTransfer.files:n.target.files,o=this.multiple||t&&t.length===1;o&&this.onFileSelect(n)}},remove:function(n){this.clearInputElement();var t=this.files.splice(n,1)[0];this.files=re(this.files),this.$emit("remove",{file:t,files:this.files})},removeUploadedFile:function(n){var t=this.uploadedFiles.splice(n,1)[0];this.uploadedFiles=re(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:t,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(n){var t,o=1024,a=3,l=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(l[0]);var r=Math.floor(Math.log(n)/Math.log(o)),p=parseFloat((n/Math.pow(o,r)).toFixed(a));return"".concat(p," ").concat(l[r])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var n;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var t;return this.files&&this.files.length===1?this.files[0].name:(t=this.$primevue.config.locale)===null||t===void 0||(t=t.fileChosenMessage)===null||t===void 0?void 0:t.replace("{0}",this.files.length)}return((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:I,ProgressBar:Pe,Message:ae,FileContent:Ve,PlusIcon:he,UploadIcon:Le,TimesIcon:Ce},directives:{ripple:ce}},Tt=["multiple","accept","disabled"],Ut=["files"],Dt=["accept","disabled","multiple"];function Et(e,n,t,o,a,l){var r=M("Button"),p=M("ProgressBar"),c=M("Message"),i=M("FileContent");return l.isAdvanced?(s(),m("div",v({key:0,class:e.cx("root")},e.ptmi("root")),[f("input",v({ref:"fileInput",type:"file",onChange:n[0]||(n[0]=function(){return l.onFileSelect&&l.onFileSelect.apply(l,arguments)}),multiple:e.multiple,accept:e.accept,disabled:l.chooseDisabled},e.ptm("input")),null,16,Tt),f("div",v({class:e.cx("header")},e.ptm("header")),[L(e.$slots,"header",{files:a.files,uploadedFiles:a.uploadedFiles,chooseCallback:l.choose,uploadCallback:l.uploader,clearCallback:l.clear},function(){return[u(r,v({label:l.chooseButtonLabel,class:l.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:l.choose,onKeydown:be(l.choose,["enter"]),onFocus:l.onFocus,onBlur:l.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:w(function(d){return[L(e.$slots,"chooseicon",{},function(){return[(s(),h(q(e.chooseIcon?"span":"PlusIcon"),v({class:[d.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(s(),h(r,v({key:0,class:e.cx("pcUploadButton"),label:l.uploadButtonLabel,onClick:l.uploader,disabled:l.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:w(function(d){return[L(e.$slots,"uploadicon",{},function(){return[(s(),h(q(e.uploadIcon?"span":"UploadIcon"),v({class:[d.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):x("",!0),e.showCancelButton?(s(),h(r,v({key:1,class:e.cx("pcCancelButton"),label:l.cancelButtonLabel,onClick:l.clear,disabled:l.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:w(function(d){return[L(e.$slots,"cancelicon",{},function(){return[(s(),h(q(e.cancelIcon?"span":"TimesIcon"),v({class:[d.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):x("",!0)]})],16),f("div",v({ref:"content",class:e.cx("content"),onDragenter:n[1]||(n[1]=function(){return l.onDragEnter&&l.onDragEnter.apply(l,arguments)}),onDragover:n[2]||(n[2]=function(){return l.onDragOver&&l.onDragOver.apply(l,arguments)}),onDragleave:n[3]||(n[3]=function(){return l.onDragLeave&&l.onDragLeave.apply(l,arguments)}),onDrop:n[4]||(n[4]=function(){return l.onDrop&&l.onDrop.apply(l,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[L(e.$slots,"content",{files:a.files,uploadedFiles:a.uploadedFiles,removeUploadedFileCallback:l.removeUploadedFile,removeFileCallback:l.remove,progress:a.progress,messages:a.messages},function(){return[l.hasFiles?(s(),h(p,{key:0,value:a.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):x("",!0),(s(!0),m(D,null,O(a.messages,function(d){return s(),h(c,{key:d,severity:"error",onClose:l.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:w(function(){return[Y(U(d),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),l.hasFiles?(s(),m("div",{key:1,class:R(e.cx("fileList"))},[u(i,{files:a.files,onRemove:l.remove,badgeValue:l.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):x("",!0),l.hasUploadedFiles?(s(),m("div",{key:2,class:R(e.cx("fileList"))},[u(i,{files:a.uploadedFiles,onRemove:l.removeUploadedFile,badgeValue:l.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):x("",!0)]}),e.$slots.empty&&!l.hasFiles&&!l.hasUploadedFiles?(s(),m("div",Ge(v({key:0},e.ptm("empty"))),[L(e.$slots,"empty")],16)):x("",!0)],16)],16)):l.isBasic?(s(),m("div",v({key:1,class:e.cx("root")},e.ptmi("root")),[(s(!0),m(D,null,O(a.messages,function(d){return s(),h(c,{key:d,severity:"error",onClose:l.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:w(function(){return[Y(U(d),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),u(r,v({label:l.chooseButtonLabel,class:l.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:l.onBasicUploaderClick,onKeydown:be(l.choose,["enter"]),onFocus:l.onFocus,onBlur:l.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:w(function(d){return[L(e.$slots,"chooseicon",{},function(){return[(s(),h(q(e.chooseIcon?"span":"PlusIcon"),v({class:[d.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?x("",!0):L(e.$slots,"filelabel",{key:0,class:R(e.cx("filelabel"))},function(){return[f("span",{class:R(e.cx("filelabel")),files:a.files},U(l.basicFileChosenLabel),11,Ut)]}),f("input",v({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:n[5]||(n[5]=function(){return l.onFileSelect&&l.onFileSelect.apply(l,arguments)}),onFocus:n[6]||(n[6]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:n[7]||(n[7]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)})},e.ptm("input")),null,16,Dt)],16)):x("",!0)}ve.render=Et;const Mt={class:"p-4 h-full"},jt={key:0},Rt={key:1,class:"flex flex-col gap-4"},Ot={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},Ht=S({__name:"LessonCard",setup(e){const{locale:n}=le(),t=$(),{lesson:o}=X(t),a=_(null),l=_(!0),r=_(!1);z(()=>{var i;a.value=((i=o.value)==null?void 0:i.cover_image)??""}),A([()=>{var i;return(i=o.value)==null?void 0:i.title},()=>{var i;return(i=o.value)==null?void 0:i.description},a],()=>{l.value=!1});async function p(i){const d=i.files[0],g=new FormData;g.append("file",d);try{const{data:b}=await G.uploadFile(g);a.value=b.presigned_url}catch(b){alert(b)}}async function c(){var i;r.value=!0;try{await ue.updateProjectByID(o.value.id,((i=a.value)==null?void 0:i.toString())??""),await ue.updateProjectTranslationByID(o.value.id,n.value,o.value.title,o.value.description)}catch(d){alert(d)}finally{l.value=!0,r.value=!1}}return(i,d)=>{const g=fe,b=ve,C=Z,k=me,F=Fe,V=I;return s(),m("div",Mt,[y(o)?(s(),m("div",Rt,[f("div",Ot,[a.value?(s(),h(g,{key:0,src:a.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):x("",!0),u(b,{mode:"basic",onSelect:p,customUpload:"",auto:"",severity:"secondary","choose-icon":a.value==null?"pi pi-plus":"pi pi-pencil","choose-label":a.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),u(k,{variant:"on",class:"w-full"},{default:w(()=>[d[2]||(d[2]=f("label",{for:"title"},"Title",-1)),u(C,{id:"title",modelValue:y(o).title,"onUpdate:modelValue":d[0]||(d[0]=H=>y(o).title=H),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),u(k,{variant:"on",class:"w-full"},{default:w(()=>[d[3]||(d[3]=f("label",{for:"description"},"Description",-1)),u(F,{id:"description",modelValue:y(o).description,"onUpdate:modelValue":d[1]||(d[1]=H=>y(o).description=H),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1}),u(V,{label:"Save",severity:"info",icon:"pi pi-save",class:"w-fit self-end",size:"small",onClick:c,disabled:l.value||r.value,loading:r.value},null,8,["disabled","loading"])])):(s(),m("div",jt,"Null"))])}}}),Gt=J(Ht,[["__scopeId","data-v-8b1cef69"]]);var Nt=function(n){var t=n.dt;return`
.p-panel {
    border: 1px solid `.concat(t("panel.border.color"),`;
    border-radius: `).concat(t("panel.border.radius"),`;
    background: `).concat(t("panel.background"),`;
    color: `).concat(t("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(t("panel.header.padding"),`;
    background: `).concat(t("panel.header.background"),`;
    color: `).concat(t("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("panel.header.border.width"),`;
    border-color: `).concat(t("panel.header.border.color"),`;
    border-radius: `).concat(t("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(t("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(t("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(t("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(t("panel.footer.padding"),`;
}
`)},Wt={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Kt=N.extend({name:"panel",theme:Nt,classes:Wt}),qt={name:"BasePanel",extends:W,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Kt,provide:function(){return{$pcPanel:this,$parentInstance:this}}},E={name:"Panel",extends:qt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||ye()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||ye()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:he,MinusIcon:et,Button:I},directives:{ripple:ce}},Yt=["id"],Zt=["id","aria-labelledby"];function Jt(e,n,t,o,a,l){var r=M("Button");return s(),m("div",v({class:e.cx("root")},e.ptmi("root")),[f("div",v({class:e.cx("header")},e.ptm("header")),[L(e.$slots,"header",{id:a.id+"_header",class:R(e.cx("title"))},function(){return[e.header?(s(),m("span",v({key:0,id:a.id+"_header",class:e.cx("title")},e.ptm("title")),U(e.header),17,Yt)):x("",!0)]}),f("div",v({class:e.cx("headerActions")},e.ptm("headerActions")),[L(e.$slots,"icons"),e.toggleable?(s(),h(r,v({key:0,id:a.id+"_header",class:e.cx("pcToggleButton"),"aria-label":l.buttonAriaLabel,"aria-controls":a.id+"_content","aria-expanded":!a.d_collapsed,unstyled:e.unstyled,onClick:l.toggle,onKeydown:l.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:w(function(p){return[L(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed},function(){return[(s(),h(q(a.d_collapsed?"PlusIcon":"MinusIcon"),v({class:p.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):x("",!0)],16)],16),u(We,v({name:"p-toggleable-content"},e.ptm("transition")),{default:w(function(){return[ke(f("div",v({id:a.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":a.id+"_header"},e.ptm("contentContainer")),[f("div",v({class:e.cx("content")},e.ptm("content")),[L(e.$slots,"default")],16),e.$slots.footer?(s(),m("div",v({key:0,class:e.cx("footer")},e.ptm("footer")),[L(e.$slots,"footer")],16)):x("",!0)],16,Zt),[[Ne,!a.d_collapsed]])]}),_:3},16)],16)}E.render=Jt;const Xt={class:"flex items-center"},Qt=S({__name:"AnswerPanel",props:{answer:{}},setup(e){const n=e,t=$(),{saveAnswer:o}=t,a=_("");return z(()=>{a.value=n.answer??""}),A(a,()=>{o(a.value)}),(l,r)=>{const p=Z,c=E;return s(),h(c,{header:"Answer"},{default:w(()=>[f("div",Xt,[u(p,{id:"answer",modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=i=>a.value=i),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),en={class:"flex items-start"},tn=S({__name:"MdEditor",props:{content:{},index:{}},setup(e){const n=$(),{saveContent:t,removeContent:o}=n,a=e,l=_(""),r=()=>{o(a.index)};return z(()=>{l.value=a.content.text??"none"}),A(l,()=>{t(l.value,null,a.index)}),(p,c)=>{const i=M("v-md-editor"),d=I;return s(),m("div",en,[u(i,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=g=>l.value=g),mode:"edit","left-toolbar":"undo redo clear | h bold italic strikethrough quote ul ol table hr link code","right-toolbar":""},null,8,["modelValue"]),u(d,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:r})])}}}),nn=J(tn,[["__scopeId","data-v-927919ee"]]),ln={class:"flex items-start"},an={class:"relative flex flex-grow justify-center items-center dashed-border h-64"},on=S({__name:"AssetEditor",props:{content:{},index:{}},setup(e){const n=_(null);async function t(c){const i=c.files[0],d=new FormData;d.append("file",i);try{const{data:g}=await G.uploadFile(d);n.value=g.presigned_url}catch(g){alert(g)}}const o=$(),{saveContent:a,removeContent:l}=o,r=e,p=()=>{l(r.index)};return z(()=>{n.value=r.content.src??null}),A(n,()=>{a(null,n.value,r.index)}),(c,i)=>{const d=fe,g=ve,b=I;return s(),m("div",ln,[f("div",an,[n.value?(s(),h(d,{key:0,src:n.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-64"},null,8,["src"])):x("",!0),u(g,{mode:"basic",onSelect:t,customUpload:"",auto:"",severity:"secondary","choose-icon":n.value==null?"pi pi-plus":"pi pi-pencil","choose-label":n.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),u(b,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:p})])}}}),sn=J(on,[["__scopeId","data-v-eb03b23c"]]),rn={class:"flex items-center"},un=S({__name:"VideoEditor",props:{content:{},index:{}},setup(e){const n=e,t=$(),{saveContent:o,removeContent:a}=t,l=_(""),r=()=>{a(n.index)};return z(()=>{l.value=n.content.text??""}),A(l,()=>{o(l.value,null,n.index)}),(p,c)=>{const i=Z,d=I;return s(),m("div",rn,[u(i,{id:"video",modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=g=>l.value=g),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),u(d,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:r})])}}}),pn={class:"flex flex-col gap-2"},cn=S({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(e){const n=e,t=$(),{addContent:o}=t,a=_(),l=_([{label:"Text",icon:"pi pi-align-left",command:()=>{o("text")}},{label:"Image | Gif",icon:"pi pi-image",command:()=>{o("image")}},{label:"Video",icon:"pi pi-play",command:()=>{o("video")}}]),r=p=>{a.value.toggle(p)};return(p,c)=>{const i=I,d=Ie,g=E;return s(),h(g,{header:"Contents"},{default:w(()=>[f("div",pn,[(s(!0),m(D,null,O(n.contents,(b,C)=>(s(),m("div",{key:b.id},[b.type=="text"?(s(),h(nn,{key:0,content:b,index:C},null,8,["content","index"])):b.type=="image"?(s(),h(sn,{key:1,content:b,index:C},null,8,["content","index"])):b.type=="video"?(s(),h(un,{key:2,content:b,index:C},null,8,["content","index"])):x("",!0)]))),128))]),u(i,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:r,"aria-haspopup":"true","aria-controls":"overlay_menu"}),u(d,{ref_key:"menu",ref:a,id:"overlay_menu",model:l.value,popup:!0},null,8,["model"])]),_:1})}}});var dn=function(n){var t=n.dt;return`
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
    padding: `.concat(t("inputgroup.addon.padding"),`;
    background: `).concat(t("inputgroup.addon.background"),`;
    color: `).concat(t("inputgroup.addon.color"),`;
    border-block-start: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-block-end: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    min-width: `).concat(t("inputgroup.addon.min.width"),`;
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
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
    border-start-start-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-end-start-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-iconfield:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-end-end-radius: `).concat(t("inputgroup.addon.border.radius"),`;
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
`)},fn={root:"p-inputgroup"},mn=N.extend({name:"inputgroup",theme:dn,classes:fn}),hn={name:"BaseInputGroup",extends:W,style:mn,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},oe={name:"InputGroup",extends:hn,inheritAttrs:!1};function vn(e,n,t,o,a,l){return s(),m("div",v({class:e.cx("root")},e.ptmi("root")),[L(e.$slots,"default")],16)}oe.render=vn;var gn={root:"p-inputgroupaddon"},bn=N.extend({name:"inputgroupaddon",classes:gn}),yn={name:"BaseInputGroupAddon",extends:W,style:bn,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},ie={name:"InputGroupAddon",extends:yn,inheritAttrs:!1};function _n(e,n,t,o,a,l){return s(),m("div",v({class:e.cx("root")},e.ptmi("root")),[L(e.$slots,"default")],16)}ie.render=_n;const wn={class:"flex items-center"},xn=S({__name:"OptionEditor",props:{option:{},index:{}},setup(e){const n=$(),{saveOption:t,removeOption:o}=n,a=e,l=_(""),r=_(!1),p=()=>{o(a.index)};return z(()=>{l.value=a.option.text??"",r.value=a.option.correct}),A([l,r],()=>{t(l.value,r.value,a.index)}),(c,i)=>{const d=tt,g=ie,b=Z,C=oe,k=I;return s(),m("div",wn,[u(C,null,{default:w(()=>[u(g,null,{default:w(()=>[u(d,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=F=>r.value=F),binary:!0},null,8,["modelValue"])]),_:1}),u(b,{placeholder:"Option",modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=F=>l.value=F),size:"small"},null,8,["modelValue"])]),_:1}),u(k,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),Cn={class:"flex flex-col gap-2"},kn=S({__name:"OptionsPanel",props:{options:{}},setup(e){const n=e,t=$(),{addOption:o}=t;return(a,l)=>{const r=ae,p=I,c=E;return s(),h(c,{header:"Options"},{default:w(()=>[u(r,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:w(()=>l[0]||(l[0]=[Y("*Create options and select correct ones ")])),_:1}),f("div",Cn,[(s(!0),m(D,null,O(n.options,(i,d)=>(s(),m("div",{key:i.id},[u(xn,{option:i,index:d},null,8,["option","index"])]))),128))]),u(p,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:y(o)},null,8,["onClick"])]),_:1})}}}),Bn={class:"flex items-center"},$n=S({__name:"PairEditor",props:{pair:{},index:{}},setup(e){const n=$(),{savePair:t,removePair:o}=n,a=e,l=_(""),r=_(""),p=()=>{o(a.index)};return z(()=>{l.value=a.pair.key,r.value=a.pair.value}),A([l,r],()=>{t(l.value,r.value,a.index)}),(c,i)=>{const d=Z,g=ie,b=oe,C=I;return s(),m("div",Bn,[u(b,null,{default:w(()=>[u(d,{placeholder:"Key",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=k=>l.value=k),size:"small"},null,8,["modelValue"]),u(g,null,{default:w(()=>i[2]||(i[2]=[f("div",null,"=",-1)])),_:1}),u(d,{placeholder:"Value",modelValue:r.value,"onUpdate:modelValue":i[1]||(i[1]=k=>r.value=k),size:"small"},null,8,["modelValue"])]),_:1}),u(C,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),Sn={class:"flex flex-col gap-2"},In=S({__name:"PairsPanel",props:{pairs:{}},setup(e){const n=e,t=$(),{addPair:o}=t;return(a,l)=>{const r=ae,p=I,c=E;return s(),h(c,{header:"Pairs"},{default:w(()=>[u(r,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:w(()=>l[0]||(l[0]=[Y("*Create matching pairs")])),_:1}),f("div",Sn,[(s(!0),m(D,null,O(n.pairs,(i,d)=>(s(),m("div",{key:i.id},[u($n,{pair:i,index:d},null,8,["pair","index"])]))),128))]),u(p,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:y(o)},null,8,["onClick"])]),_:1})}}}),Fn={class:"flex-grow dashed-border"},Ln=S({__name:"SolutionPanel",props:{solution:{}},setup(e){const n=e,t=$(),{saveSolution:o}=t,a=_("");return z(()=>{a.value=n.solution??""}),A(a,()=>{o(a.value)}),(l,r)=>{const p=E;return s(),h(p,{header:"Solution code"},{default:w(()=>[f("div",Fn,[u(Se,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=c=>a.value=c)},null,8,["modelValue"])])]),_:1})}}}),Pn=J(Ln,[["__scopeId","data-v-1e8de051"]]),Vn={class:"flex-grow dashed-border"},zn=S({__name:"StartingPanel",props:{starting:{}},setup(e){const n=e,t=$(),{saveStarting:o}=t,a=_("");return z(()=>{a.value=n.starting??""}),A(a,()=>{o(a.value)}),(l,r)=>{const p=E;return s(),h(p,{header:"Starting code"},{default:w(()=>[f("div",Vn,[u(Se,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=c=>a.value=c)},null,8,["modelValue"])])]),_:1})}}}),An=J(zn,[["__scopeId","data-v-d5b12a01"]]),Tn={class:"flex flex-col gap-2"},Un={class:"flex items-center"},Dn={class:"flex items-center"},En=S({__name:"ActionsPanel",props:{userAction:{},platformAction:{}},setup(e){const n=e,t=$(),{saveUserAction:o,savePlatformAction:a}=t,l=_(null),r=_(null),p=_(["put","run"]),c=_(["code2ide","light-up","auto-run","auto-put"]);z(()=>{l.value=n.userAction||null,r.value=n.platformAction||null}),A([l,r],()=>{o(l.value),a(r.value)});function i(){r.value=null}function d(){l.value=null}return(g,b)=>{const C=de,k=I,F=E;return s(),h(F,{header:"Actions"},{default:w(()=>[f("div",Tn,[f("div",Un,[u(C,{modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=V=>l.value=V),variant:"filled",options:p.value,placeholder:"User action",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),u(k,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d})]),f("div",Dn,[u(C,{modelValue:r.value,"onUpdate:modelValue":b[1]||(b[1]=V=>r.value=V),variant:"filled",options:c.value,placeholder:"Platform actions",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),u(k,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:i})])])]),_:1})}}}),Mn={class:"flex items-center"},jn=S({__name:"HighlightEditor",props:{highlight:{},index:{}},setup(e){const n=$(),{saveHighlight:t,removeHighlight:o}=n,a=e,l=_(null),r=_(null),p=()=>{o(a.index)};z(()=>{l.value=a.highlight.module,r.value=a.highlight.slot}),A([l,r],()=>{l.value==null||r.value==null||t(l.value,r.value,a.index)});const c=_(["A","B","C","D","E","F"]),i=_(["LED","PB","LS","TS","PTM","NCD","MT","MCP","CLM","GS","BZ","CLR","JS","DS","SW","OLD","LDT"]);return(d,g)=>{const b=de,C=ie,k=oe,F=I;return s(),m("div",Mn,[u(k,null,{default:w(()=>[u(b,{modelValue:l.value,"onUpdate:modelValue":g[0]||(g[0]=V=>l.value=V),options:i.value,placeholder:"Select module",class:"place-content-center",size:"small"},null,8,["modelValue","options"]),u(C,{class:"h-[35px]"},{default:w(()=>g[2]||(g[2]=[f("div",null,"=>",-1)])),_:1}),u(b,{modelValue:r.value,"onUpdate:modelValue":g[1]||(g[1]=V=>r.value=V),options:c.value,placeholder:"Select slot",size:"small"},null,8,["modelValue","options"])]),_:1}),u(F,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),Rn={class:"flex flex-col gap-2"},On=S({__name:"HighlightPanel",props:{highlights:{}},setup(e){const n=e,t=$(),{addHighlight:o}=t;return(a,l)=>{const r=I,p=E;return s(),h(p,{header:"Highlight slots & modules"},{default:w(()=>[f("div",Rn,[(s(!0),m(D,null,O(n.highlights,(c,i)=>(s(),m("div",{key:c.id},[u(jn,{highlight:c,index:i},null,8,["highlight","index"])]))),128))]),u(r,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:y(o)},null,8,["onClick"])]),_:1})}}}),Hn={class:"flex flex-col gap-2"},Gn={class:"flex items-center"},Nn={class:"flex items-center justify-end gap-2 mb-8 mt-4"},Wn=S({__name:"StepEditor",setup(e){const{locale:n}=le(),t=Ke(),o=$(),{lesson:a,stepIndex:l}=X(o),{removeStep:r}=o,p=_(!1),c=_(!1),i=Be(()=>{var C;return l.value==null?null:((C=a.value)==null?void 0:C.steps[l.value])??null});async function d(){if(!(p.value||i.value==null)){p.value=!0;try{await G.updateStepTranslationByID(i.value.id,n.value,i.value.title,i.value.inner)}catch(C){alert(C)}finally{p.value=!1}}}function g(){t.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{b()}})}async function b(){if(!(c.value||i.value==null)){c.value=!0;try{await G.deleteStepByID(i.value.id),r()}catch(C){alert(C)}finally{c.value=!1}}}return(C,k)=>{const F=Z,V=me,H=ae,Q=E,ee=I;return i.value?(s(),m("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:i.value.id},[u(Q,{header:"Info",class:"mb-2"},{default:w(()=>[f("div",Hn,[f("div",Gn,[u(V,{variant:"on",class:"w-full"},{default:w(()=>[k[1]||(k[1]=f("label",{for:"title"},"Title",-1)),u(F,{id:"title",modelValue:i.value.title,"onUpdate:modelValue":k[0]||(k[0]=te=>i.value.title=te),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),u(H,{size:"small",severity:"secondary",variant:"simple"},{default:w(()=>[Y(U(i.value.type),1)]),_:1})])]),_:1}),u(y(cn),{contents:i.value.inner.contents,"step-type":i.value.type,class:"mb-2"},null,8,["contents","step-type"]),i.value.type=="code"?(s(),h(y(An),{key:0,starting:i.value.inner.starting,class:"mb-2"},null,8,["starting"])):x("",!0),i.value.type=="code"?(s(),h(y(Pn),{key:1,solution:i.value.inner.solution,class:"mb-2"},null,8,["solution"])):x("",!0),i.value.type=="code"?(s(),h(y(On),{key:2,highlights:i.value.inner.highlights,class:"mb-2"},null,8,["highlights"])):x("",!0),i.value.type=="question"?(s(),h(y(kn),{key:3,options:i.value.inner.options,class:"mb-2"},null,8,["options"])):x("",!0),i.value.type=="matching"?(s(),h(y(In),{key:4,pairs:i.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):x("",!0),i.value.type=="open"?(s(),h(y(Qt),{key:5,answer:i.value.inner.answer,class:"mb-2"},null,8,["answer"])):x("",!0),u(y(En),{"user-action":i.value.inner.userAction,"platform-action":i.value.inner.platformAction},null,8,["user-action","platform-action"]),f("div",Nn,[u(ee,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:g,loading:c.value,disabled:c.value},null,8,["loading","disabled"]),u(ee,{label:"Save",icon:"pi pi-save",severity:"info",size:"small",onClick:d,loading:p.value,disabled:p.value},null,8,["loading","disabled"])])])):x("",!0)}}}),Kn={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},qn={class:"flex flex-1 items-center"},Yn={key:1,class:"flex items-center gap-1"},Zn={class:"flex items-center gap-1"},Jn={class:"flex flex-1 justify-end items-center gap-2"},Xn={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},Qn={class:"inline-flex flex-col items-start"},el={class:"font-bold"},tl={class:"text-sm"},nl={class:"flex justify-between items-center mb-8"},ll={class:"flex justify-end gap-2"},al=S({__name:"EditorHeader",setup(e){const{locale:n}=le(),t=qe(),o=$e(),a=Ye(),{user:l}=X(a),r=$(),{lesson:p,stepIndex:c}=X(r),{changeStep:i,addStep:d,setSteps:g}=r,b=_(!1),C=_(!1),k=_(!1),F=_(null),V=_(["article","code","matching","open","question"]);function H(P){switch(P){case"article":return"pi pi-align-left";case"code":return"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function Q(){if(!C.value){C.value=!0;try{const{data:P}=await G.getProjectStepsByID(o.params.id.toString()),B=[];for(const se of P){const j=await _e(se,n.value,!1);B.push(j)}g(B)}catch(P){alert(P)}finally{C.value=!1}}}z(Q),A(n,Q,{immediate:!0});async function ee(){if(F.value){k.value=!0;try{const{data:P}=await G.createStep(F.value),B=await _e(P,n.value,!0);await G.linkStepToProjectByID(o.params.id.toString(),P.id),d(F.value,B)}catch(P){alert(P)}finally{k.value=!1,b.value=!1}}}const te=_(),Ae=_([{label:"Log out",icon:"pi pi-sign-out",command:()=>{a.logout(),t.replace({name:"login"})}}]),Te=P=>{te.value.toggle(P)};return(P,B)=>{const se=fe,j=I,Ue=we,De=Ie,Ee=de,Me=Ze,je=ce;return s(),m(D,null,[f("div",Kn,[f("div",qn,[u(se,{src:y(Qe),width:"32"},null,8,["src"]),B[5]||(B[5]=f("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),u(j,{id:"#projects",icon:"pi pi-angle-left",label:P.$t("projects"),severity:"secondary",variant:"text",onClick:B[0]||(B[0]=T=>y(t).push({name:"projects"})),size:"small"},null,8,["label"])]),C.value||y(p)==null?(s(),h(Ue,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):(s(),m("div",Yn,[f("div",Zn,[(s(!0),m(D,null,O(y(p).steps,(T,K)=>(s(),h(j,{key:T.id,icon:H(T.type),rounded:"",severity:y(c)==K?void 0:"secondary",variant:y(c)==K?void 0:"outlined",onClick:vl=>y(i)(K),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128))]),u(j,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:B[1]||(B[1]=T=>b.value=!0)})])),f("div",Jn,[u(Xe),u(j,{type:"button",icon:"pi pi-ellipsis-v",onClick:Te,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),u(De,{ref_key:"menu",ref:te,id:"overlay_menu",model:Ae.value,popup:!0},{start:w(()=>{var T,K;return[ke((s(),m("button",Xn,[f("span",Qn,[f("span",el,U((T=y(l))==null?void 0:T.email),1),f("span",tl,U((K=y(l))==null?void 0:K.user_type),1)])])),[[je]])]}),_:1},8,["model"])])]),u(Me,{visible:b.value,"onUpdate:visible":B[4]||(B[4]=T=>b.value=T),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:w(()=>[f("div",nl,[B[6]||(B[6]=f("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),u(Ee,{modelValue:F.value,"onUpdate:modelValue":B[2]||(B[2]=T=>F.value=T),options:V.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),f("div",ll,[u(j,{type:"button",label:"Cancel",severity:"secondary",onClick:B[3]||(B[3]=T=>b.value=!1)}),u(j,{type:"button",label:"+ Add",onClick:ee,loading:k.value,disabled:k.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),ol={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},il={key:0},sl={key:1,class:"flex"},rl=S({__name:"LessonPreview",setup(e){const n=$(),{lesson:t,stepIndex:o}=X(n),{changeStep:a}=n,l=Be(()=>{var c;return o.value==null?null:((c=t.value)==null?void 0:c.steps[o.value])??null});async function r(){o.value!=null&&a(o.value-1)}async function p(){o.value!=null&&a(o.value+1)}return(c,i)=>{const d=I;return s(),m("div",ol,[l.value?(s(),m("div",il,[l.value.type=="article"?(s(),h(y(nt),{key:0,step:l.value,isPreview:!0},null,8,["step"])):l.value.type=="code"?(s(),h(y(lt),{key:1,step:l.value,isPreview:!0},null,8,["step"])):l.value.type=="matching"?(s(),h(y(at),{key:2,step:l.value,isPreview:!0},null,8,["step"])):l.value.type=="open"?(s(),h(y(ot),{key:3,step:l.value,isPreview:!0},null,8,["step"])):l.value.type=="question"?(s(),h(y(it),{key:4,step:l.value,isPreview:!0},null,8,["step"])):x("",!0)])):x("",!0),y(t)!=null&&y(t).steps!=null&&y(t).steps.length>0&&l.value?(s(),m("div",sl,[y(o)!==0?(s(),h(d,{key:0,label:"Previous",icon:"pi pi-angle-left",size:"small",onClick:r})):x("",!0),y(o)<y(t).steps.length-1?(s(),h(d,{key:1,label:"Next",icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:p})):x("",!0)])):x("",!0)])}}}),ul={key:1,class:"h-[51px]"},pl={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 58px)"}},cl={class:"max-w-[320px] w-full bg-white"},dl={key:0,class:"p-4"},fl={class:"flex-grow border-l"},ml={class:"border-l max-w-[400px] w-full"},hl=S({__name:"EditorView",setup(e){const{locale:n}=le(),t=$e(),o=$(),{setLesson:a}=o,l=_(!1);async function r(){if(!l.value){l.value=!0;try{const{data:p}=await ue.getProjectByID(t.params.id.toString()),c=await Re(p,n.value);a(c)}catch(p){alert(p)}finally{l.value=!1}}}return z(r),A(n,r),(p,c)=>{const i=we;return s(),m(D,null,[l.value?(s(),m("div",ul)):(s(),h(al,{key:0})),f("div",pl,[f("div",cl,[l.value?(s(),m("div",dl,[u(i,{height:"192px"}),c[0]||(c[0]=f("br",null,null,-1)),u(i,{height:"32px"}),c[1]||(c[1]=f("br",null,null,-1)),u(i,{height:"32px"})])):(s(),h(Gt,{key:1}))]),f("div",fl,[l.value?x("",!0):(s(),h(Wn,{key:0}))]),f("div",ml,[l.value?x("",!0):(s(),h(rl,{key:0}))])])],64)}}}),Sl=J(hl,[["__scopeId","data-v-664f3809"]]);export{Sl as default};
