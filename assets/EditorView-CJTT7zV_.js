import{a as Oe,s as De,t as rt}from"./types-Dg8sKFfX.js";import{u as V,s as ct}from"./editor-store-BG36NTm5.js";import{X as J,v as u,o as a,c as f,W as Ee,e as m,U as x,i as N,t as B,j as v,aa as te,s as D,aj as ut,ak as Ce,a6 as M,k as W,b as d,af as P,w as b,h as g,a7 as z,F as E,al as dt,am as Ve,ah as he,an as $e,ao as ze,d as $,ad as me,ac as se,r as S,l as K,y as U,f as I,Y as fe,ag as xe,ap as pt,a8 as Ke,aq as ft,Z as Ie,ar as oe,as as Q,at as ht,au as mt,av as gt,aw as ue,a4 as vt,_ as bt,$ as yt,a0 as It,a1 as wt,a2 as Ot,a3 as kt,ax as St,C as ee,ay as de,N as Ct,az as xt,aA as Ft,a5 as Lt,aB as Bt,aC as Vt,aD as $t,aE as _t,ab as Tt,n as Ue,g as At,ae as Re,a as Mt,ai as Pt}from"./index-DPR03QxN.js";import{a as je,s as ne,b as Dt,c as Et,d as zt,e as Kt,f as Ut,g as He,_ as Rt}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-1LOZqoIq.js";import{s as Ge}from"./index-U4jr6C8W.js";import{s as ge}from"./index-D2ISNsTm.js";import{s as Fe,L as jt}from"./logo-DXBEFZEz.js";import{h as q}from"./http-D1Zy6-RB.js";import{_ as ae,b as Ne}from"./store-Cu6EZccs.js";import{s as Ht,d as qe,_ as Gt,a as Nt,M as qt,b as Wt,c as Zt}from"./QuestionStep.vue_vue_type_script_setup_true_lang-DM8MBWMF.js";import{s as We}from"./index-DF40pb3B.js";var Yt=function(t){var n=t.dt;return`
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
`)},Xt={root:function(t){var n=t.instance,l=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},Jt=J.extend({name:"textarea",theme:Yt,classes:Xt}),Qt={name:"BaseTextarea",extends:je,props:{autoResize:Boolean},style:Jt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Ze={name:"Textarea",extends:Qt,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){t.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return u(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},en=["value","disabled","aria-invalid"];function tn(e,t,n,l,o,i){return a(),f("textarea",u({class:e.cx("root"),value:e.d_value,disabled:e.disabled,"aria-invalid":e.invalid||void 0,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,en)}Ze.render=tn;var Le={name:"PlusIcon",extends:Ee};function nn(e,t,n,l,o,i){return a(),f("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}Le.render=nn;var Ye={name:"UploadIcon",extends:Ee};function ln(e,t,n,l,o,i){return a(),f("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}Ye.render=ln;var on=function(t){var n=t.dt;return`
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
`)},an={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},sn=J.extend({name:"progressbar",theme:on,classes:an}),rn={name:"BaseProgressBar",extends:te,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:sn,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},Xe={name:"ProgressBar",extends:rn,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},cn=["aria-valuenow"];function un(e,t,n,l,o,i){return a(),f("div",u({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[i.determinate?(a(),f("div",u({key:0,class:e.cx("value"),style:i.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(a(),f("div",u({key:0,class:e.cx("label")},e.ptm("label")),[x(e.$slots,"default",{},function(){return[N(B(e.value+"%"),1)]})],16)):v("",!0)],16)):i.indeterminate?(a(),f("div",u({key:1,class:e.cx("value")},e.ptm("value")),null,16)):v("",!0)],16,cn)}Xe.render=un;var dn=function(t){var n=t.dt;return`
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
`)},pn={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},fn=J.extend({name:"fileupload",theme:dn,classes:pn}),hn={name:"BaseFileUpload",extends:te,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:fn,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},Je={name:"FileContent",hostName:"FileUpload",extends:te,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),c=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(c," ").concat(i[s])}},components:{Button:D,Badge:ut,TimesIcon:Ce}},mn=["alt","src","width"];function gn(e,t,n,l,o,i){var s=M("Badge"),c=M("TimesIcon"),p=M("Button");return a(!0),f(E,null,W(n.files,function(r,h){return a(),f("div",u({key:r.name+r.type+r.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[m("img",u({role:"presentation",class:e.cx("fileThumbnail"),alt:r.name,src:r.objectURL,width:n.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,mn),m("div",u({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[m("div",u({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),B(r.name),17),m("span",u({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),B(i.formatSize(r.size)),17)],16),d(s,{value:n.badgeValue,class:P(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),m("div",u({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[d(p,{onClick:function(w){return e.$emit("remove",h)},text:"",rounded:"",severity:"danger",class:P(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:b(function(y){return[n.templates.fileremoveicon?(a(),g(z(n.templates.fileremoveicon),{key:0,class:P(y.class),file:r,index:h},null,8,["class","file","index"])):(a(),g(c,u({key:1,class:y.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}Je.render=gn;function we(e){return yn(e)||bn(e)||Qe(e)||vn()}function vn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yn(e){if(Array.isArray(e))return ke(e)}function pe(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Qe(e))||t){n&&(e=n);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(r){throw r},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var r=n.next();return s=r.done,r},e:function(r){c=!0,i=r},f:function(){try{s||n.return==null||n.return()}finally{if(c)throw i}}}}function Qe(e,t){if(e){if(typeof e=="string")return ke(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var Be={name:"FileUpload",extends:hn,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=pe(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value;this.isFileSelected(i)||this.validate(i)&&(this.isImage(i)&&(i.objectURL=window.URL.createObjectURL(i)),this.files.push(i))}}catch(s){l.e(s)}finally{l.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var n=new XMLHttpRequest,l=new FormData;this.$emit("before-upload",{xhr:n,formData:l});var o=pe(this.files),i;try{for(o.s();!(i=o.n()).done;){var s=i.value;l.append(this.name,s,s.name)}}catch(c){o.e(c)}finally{o.f()}n.upload.addEventListener("progress",function(c){c.lengthComputable&&(t.progress=Math.round(c.loaded*100/c.total)),t.$emit("progress",{originalEvent:c,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){var c;t.progress=0,n.status>=200&&n.status<300?(t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files})):t.$emit("error",{xhr:n,files:t.files}),(c=t.uploadedFiles).push.apply(c,we(t.files)),t.clear()}},n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:l}),n.withCredentials=this.withCredentials,n.send(l)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=pe(this.files),l;try{for(n.s();!(l=n.n()).done;){var o=l.value;if(o.name+o.type+o.size===t.name+t.type+t.size)return!0}}catch(i){n.e(i)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(c){return c.trim()}),l=pe(n),o;try{for(l.s();!(o=l.n()).done;){var i=o.value,s=this.isWildcard(i)?this.getTypeClass(t.type)===this.getTypeClass(i):t.type==i||this.getFileExtension(t).toLowerCase()===i.toLowerCase();if(s)return!0}}catch(c){l.e(c)}finally{l.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&dt(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&Ve(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&Ve(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,l=this.multiple||n&&n.length===1;l&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=we(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=we(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,l=1024,o=3,i=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(i[0]);var s=Math.floor(Math.log(t)/Math.log(l)),c=parseFloat((t/Math.pow(l,s)).toFixed(o));return"".concat(c," ").concat(i[s])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:D,ProgressBar:Xe,Message:ge,FileContent:Je,PlusIcon:Le,UploadIcon:Ye,TimesIcon:Ce},directives:{ripple:he}},In=["multiple","accept","disabled"],wn=["files"],On=["accept","disabled","multiple"];function kn(e,t,n,l,o,i){var s=M("Button"),c=M("ProgressBar"),p=M("Message"),r=M("FileContent");return i.isAdvanced?(a(),f("div",u({key:0,class:e.cx("root")},e.ptmi("root")),[m("input",u({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),multiple:e.multiple,accept:e.accept,disabled:i.chooseDisabled},e.ptm("input")),null,16,In),m("div",u({class:e.cx("header")},e.ptm("header")),[x(e.$slots,"header",{files:o.files,uploadedFiles:o.uploadedFiles,chooseCallback:i.choose,uploadCallback:i.uploader,clearCallback:i.clear},function(){return[d(s,u({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:i.choose,onKeydown:$e(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:b(function(h){return[x(e.$slots,"chooseicon",{},function(){return[(a(),g(z(e.chooseIcon?"span":"PlusIcon"),u({class:[h.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(a(),g(s,u({key:0,class:e.cx("pcUploadButton"),label:i.uploadButtonLabel,onClick:i.uploader,disabled:i.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:b(function(h){return[x(e.$slots,"uploadicon",{},function(){return[(a(),g(z(e.uploadIcon?"span":"UploadIcon"),u({class:[h.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):v("",!0),e.showCancelButton?(a(),g(s,u({key:1,class:e.cx("pcCancelButton"),label:i.cancelButtonLabel,onClick:i.clear,disabled:i.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:b(function(h){return[x(e.$slots,"cancelicon",{},function(){return[(a(),g(z(e.cancelIcon?"span":"TimesIcon"),u({class:[h.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):v("",!0)]})],16),m("div",u({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return i.onDragEnter&&i.onDragEnter.apply(i,arguments)}),onDragover:t[2]||(t[2]=function(){return i.onDragOver&&i.onDragOver.apply(i,arguments)}),onDragleave:t[3]||(t[3]=function(){return i.onDragLeave&&i.onDragLeave.apply(i,arguments)}),onDrop:t[4]||(t[4]=function(){return i.onDrop&&i.onDrop.apply(i,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[x(e.$slots,"content",{files:o.files,uploadedFiles:o.uploadedFiles,removeUploadedFileCallback:i.removeUploadedFile,removeFileCallback:i.remove,progress:o.progress,messages:o.messages},function(){return[i.hasFiles?(a(),g(c,{key:0,value:o.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):v("",!0),(a(!0),f(E,null,W(o.messages,function(h){return a(),g(p,{key:h,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:b(function(){return[N(B(h),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),i.hasFiles?(a(),f("div",{key:1,class:P(e.cx("fileList"))},[d(r,{files:o.files,onRemove:i.remove,badgeValue:i.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):v("",!0),i.hasUploadedFiles?(a(),f("div",{key:2,class:P(e.cx("fileList"))},[d(r,{files:o.uploadedFiles,onRemove:i.removeUploadedFile,badgeValue:i.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):v("",!0)]}),e.$slots.empty&&!i.hasFiles&&!i.hasUploadedFiles?(a(),f("div",ze(u({key:0},e.ptm("empty"))),[x(e.$slots,"empty")],16)):v("",!0)],16)],16)):i.isBasic?(a(),f("div",u({key:1,class:e.cx("root")},e.ptmi("root")),[(a(!0),f(E,null,W(o.messages,function(h){return a(),g(p,{key:h,severity:"error",onClose:i.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:b(function(){return[N(B(h),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),d(s,u({label:i.chooseButtonLabel,class:i.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:i.onBasicUploaderClick,onKeydown:$e(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:b(function(h){return[x(e.$slots,"chooseicon",{},function(){return[(a(),g(z(e.chooseIcon?"span":"PlusIcon"),u({class:[h.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?v("",!0):x(e.$slots,"filelabel",{key:0,class:P(e.cx("filelabel"))},function(){return[m("span",{class:P(e.cx("filelabel")),files:o.files},B(i.basicFileChosenLabel),11,wn)]}),m("input",u({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),onFocus:t[6]||(t[6]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[7]||(t[7]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},e.ptm("input")),null,16,On)],16)):v("",!0)}Be.render=kn;const X={getSteps:Sn,createStep:Cn,getStepByID:xn,updateStepByID:Fn,deleteStepByID:Ln,getStepTranslationByID:Bn,updateStepTranslationByID:Vn,linkStepToProjectByID:_n,unlinkStepFromProjectByID:Tn,getProjectStepsByID:$n,uploadFile:An};async function Sn(){try{return await q.get("/steps")}catch(e){throw console.log(e),e}}async function Cn(e){try{return await q.post("/step",{last_edited_by:0,step_type:e})}catch(t){throw console.log(t),t}}async function xn(e){try{return await q.get(`/step/${e}`)}catch(t){throw console.log(t),t}}async function Fn(e){try{return await q.put(`/step/${e}`,{})}catch(t){throw console.log(t),t}}async function Ln(e){try{return await q.delete(`/step/${e}`)}catch(t){throw console.log(t),t}}async function Bn(e,t){try{return await q.get(`/step/${e}/translation/${t}`)}catch(n){throw console.log(n),n}}async function Vn(e,t,n,l){try{return await q.put(`/step/${e}/translation/${t}`,{content:l,name:n})}catch(o){throw console.log(o),o}}async function $n(e){try{return await q.get(`/project/${e}/steps`)}catch(t){throw console.log(t),t}}async function _n(e,t){try{return await q.post(`/project/${e}/step/${t}/link`)}catch(n){throw console.log(n),n}}async function Tn(e,t){try{return await q.delete(`/project/${e}/step/${t}/unlink`)}catch(n){throw console.log(n),n}}async function An(e){try{return await q.post("/upload-file",e,{headers:{"Content-Type":"multipart/form-data"}})}catch(t){throw console.log(t),t}}const Mn={class:"p-4 h-full"},Pn={key:0},Dn={key:1,class:"flex flex-col gap-4"},En={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},zn={class:"flex justify-end"},Kn=$({__name:"LessonCard",setup(e){const{locale:t}=me(),n=V(),{lesson:l}=se(n),o=S(null),i=S(!0),s=S(!1);K(()=>{var r;o.value=((r=l.value)==null?void 0:r.cover_image)??""}),U([()=>{var r;return(r=l.value)==null?void 0:r.title},()=>{var r;return(r=l.value)==null?void 0:r.description},()=>{var r;return(r=l.value)==null?void 0:r.level},o],()=>{i.value=!1});async function c(r){const h=r.files[0],y=new FormData;y.append("file",h);try{const{data:w}=await X.uploadFile(y);o.value=w.presigned_url}catch(w){alert(w)}}async function p(){var r;s.value=!0;try{await Oe.updateProjectByID(l.value.id,((r=o.value)==null?void 0:r.toString())??""),await Oe.updateProjectTranslationByID(l.value.id,t.value,l.value.title,l.value.description,l.value.level)}catch(h){alert(h)}finally{i.value=!0,s.value=!1}}return(r,h)=>{const y=Fe,w=Be,F=ct,L=ne,_=Ge,C=Ze,R=D;return a(),f("div",Mn,[I(l)?(a(),f("div",Dn,[m("div",En,[o.value?(a(),g(y,{key:0,src:o.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):v("",!0),d(w,{mode:"basic",onSelect:c,customUpload:"",auto:"",severity:"secondary","choose-icon":o.value==null?"pi pi-plus":"pi pi-pencil","choose-label":o.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),m("div",zn,[d(F,{id:"level",modelValue:I(l).level,"onUpdate:modelValue":h[0]||(h[0]=T=>I(l).level=T)},null,8,["modelValue"])]),d(_,{variant:"on",class:"w-full"},{default:b(()=>[h[3]||(h[3]=m("label",{for:"title"},"Title",-1)),d(L,{id:"title",modelValue:I(l).title,"onUpdate:modelValue":h[1]||(h[1]=T=>I(l).title=T),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),d(_,{variant:"on",class:"w-full"},{default:b(()=>[h[4]||(h[4]=m("label",{for:"description"},"Description",-1)),d(C,{id:"description",modelValue:I(l).description,"onUpdate:modelValue":h[2]||(h[2]=T=>I(l).description=T),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1}),d(R,{label:"Save",severity:"info",icon:"pi pi-save",class:"w-fit self-end",size:"small",onClick:p,disabled:i.value||s.value,loading:s.value},null,8,["disabled","loading"])])):(a(),f("div",Pn,"Null"))])}}}),Un=ae(Kn,[["__scopeId","data-v-fa39fbad"]]);var Rn=function(t){var n=t.dt;return`
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
`)},jn={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Hn=J.extend({name:"panel",theme:Rn,classes:jn}),Gn={name:"BasePanel",extends:te,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Hn,provide:function(){return{$pcPanel:this,$parentInstance:this}}},Z={name:"Panel",extends:Gn,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||fe()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||fe()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:Le,MinusIcon:Ht,Button:D},directives:{ripple:he}},Nn=["id"],qn=["id","aria-labelledby"];function Wn(e,t,n,l,o,i){var s=M("Button");return a(),f("div",u({class:e.cx("root")},e.ptmi("root")),[m("div",u({class:e.cx("header")},e.ptm("header")),[x(e.$slots,"header",{id:o.id+"_header",class:P(e.cx("title"))},function(){return[e.header?(a(),f("span",u({key:0,id:o.id+"_header",class:e.cx("title")},e.ptm("title")),B(e.header),17,Nn)):v("",!0)]}),m("div",u({class:e.cx("headerActions")},e.ptm("headerActions")),[x(e.$slots,"icons"),e.toggleable?(a(),g(s,u({key:0,id:o.id+"_header",class:e.cx("pcToggleButton"),"aria-label":i.buttonAriaLabel,"aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,unstyled:e.unstyled,onClick:i.toggle,onKeydown:i.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:b(function(c){return[x(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed},function(){return[(a(),g(z(o.d_collapsed?"PlusIcon":"MinusIcon"),u({class:c.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):v("",!0)],16)],16),d(Ke,u({name:"p-toggleable-content"},e.ptm("transition")),{default:b(function(){return[xe(m("div",u({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[m("div",u({class:e.cx("content")},e.ptm("content")),[x(e.$slots,"default")],16),e.$slots.footer?(a(),f("div",u({key:0,class:e.cx("footer")},e.ptm("footer")),[x(e.$slots,"footer")],16)):v("",!0)],16,qn),[[pt,!o.d_collapsed]])]}),_:3},16)],16)}Z.render=Wn;const Zn={class:"flex items-center"},Yn=$({__name:"AnswerPanel",props:{answer:{}},setup(e){const t=e,n=V(),{saveAnswer:l}=n,o=S("");return K(()=>{o.value=t.answer??""}),U(o,()=>{l(o.value)}),(i,s)=>{const c=ne,p=Z;return a(),g(p,{header:"Answer"},{default:b(()=>[m("div",Zn,[d(c,{id:"answer",modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),Xn={class:"flex items-start"},Jn=$({__name:"MdEditor",props:{content:{},index:{}},setup(e){const t=V(),{saveContent:n,removeContent:l}=t,o=e,i=S(""),s=()=>{l(o.index)};return K(()=>{i.value=o.content.text??"none"}),U(i,()=>{n(i.value,null,o.index)}),(c,p)=>{const r=M("v-md-editor"),h=D;return a(),f("div",Xn,[d(r,{modelValue:i.value,"onUpdate:modelValue":p[0]||(p[0]=y=>i.value=y),mode:"edit","left-toolbar":"undo redo clear | h bold italic strikethrough quote ul ol table hr link code","right-toolbar":""},null,8,["modelValue"]),d(h,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:s})])}}}),Qn=ae(Jn,[["__scopeId","data-v-927919ee"]]),ei={class:"flex items-start"},ti={class:"relative flex flex-grow justify-center items-center dashed-border h-64"},ni=$({__name:"AssetEditor",props:{content:{},index:{}},setup(e){const t=S(null);async function n(p){const r=p.files[0],h=new FormData;h.append("file",r);try{const{data:y}=await X.uploadFile(h);t.value=y.presigned_url}catch(y){alert(y)}}const l=V(),{saveContent:o,removeContent:i}=l,s=e,c=()=>{i(s.index)};return K(()=>{t.value=s.content.src??null}),U(t,()=>{o(null,t.value,s.index)}),(p,r)=>{const h=Fe,y=Be,w=D;return a(),f("div",ei,[m("div",ti,[t.value?(a(),g(h,{key:0,src:t.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-64"},null,8,["src"])):v("",!0),d(y,{mode:"basic",onSelect:n,customUpload:"",auto:"",severity:"secondary","choose-icon":t.value==null?"pi pi-plus":"pi pi-pencil","choose-label":t.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),d(w,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:c})])}}}),ii=ae(ni,[["__scopeId","data-v-eb03b23c"]]),li={class:"flex items-center"},oi=$({__name:"VideoEditor",props:{content:{},index:{}},setup(e){const t=e,n=V(),{saveContent:l,removeContent:o}=n,i=S(""),s=()=>{o(t.index)};return K(()=>{i.value=t.content.text??""}),U(i,()=>{l(i.value,null,t.index)}),(c,p)=>{const r=ne,h=D;return a(),f("div",li,[d(r,{id:"video",modelValue:i.value,"onUpdate:modelValue":p[0]||(p[0]=y=>i.value=y),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),d(h,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:s})])}}}),ai={class:"flex flex-col gap-2"},si=$({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(e){const t=e,n=V(),{addContent:l}=n,o=S(),i=S([{label:"Text",icon:"pi pi-align-left",command:()=>{l("text")}},{label:"Image | Gif",icon:"pi pi-image",command:()=>{l("image")}},{label:"Video",icon:"pi pi-play",command:()=>{l("video")}}]),s=c=>{o.value.toggle(c)};return(c,p)=>{const r=D,h=We,y=Z;return a(),g(y,{header:"Contents"},{default:b(()=>[m("div",ai,[(a(!0),f(E,null,W(t.contents,(w,F)=>(a(),f("div",{key:w.id},[w.type=="text"?(a(),g(Qn,{key:0,content:w,index:F},null,8,["content","index"])):w.type=="image"?(a(),g(ii,{key:1,content:w,index:F},null,8,["content","index"])):w.type=="video"?(a(),g(oi,{key:2,content:w,index:F},null,8,["content","index"])):v("",!0)]))),128))]),d(r,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:s,"aria-haspopup":"true","aria-controls":"overlay_menu"}),d(h,{ref_key:"menu",ref:o,id:"overlay_menu",model:i.value,popup:!0},null,8,["model"])]),_:1})}}});var ri=function(t){var n=t.dt;return`
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
`)},ci={root:"p-inputgroup"},ui=J.extend({name:"inputgroup",theme:ri,classes:ci}),di={name:"BaseInputGroup",extends:te,style:ui,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},ve={name:"InputGroup",extends:di,inheritAttrs:!1};function pi(e,t,n,l,o,i){return a(),f("div",u({class:e.cx("root")},e.ptmi("root")),[x(e.$slots,"default")],16)}ve.render=pi;var fi={root:"p-inputgroupaddon"},hi=J.extend({name:"inputgroupaddon",classes:fi}),mi={name:"BaseInputGroupAddon",extends:te,style:hi,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},be={name:"InputGroupAddon",extends:mi,inheritAttrs:!1};function gi(e,t,n,l,o,i){return a(),f("div",u({class:e.cx("root")},e.ptmi("root")),[x(e.$slots,"default")],16)}be.render=gi;const vi={class:"flex items-center"},bi=$({__name:"OptionEditor",props:{option:{},index:{}},setup(e){const t=V(),{saveOption:n,removeOption:l}=t,o=e,i=S(""),s=S(!1),c=()=>{l(o.index)};return K(()=>{i.value=o.option.text??"",s.value=o.option.correct}),U([i,s],()=>{n(i.value,s.value,o.index)}),(p,r)=>{const h=qe,y=be,w=ne,F=ve,L=D;return a(),f("div",vi,[d(F,null,{default:b(()=>[d(y,null,{default:b(()=>[d(h,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=_=>s.value=_),binary:!0},null,8,["modelValue"])]),_:1}),d(w,{placeholder:"Option",modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=_=>i.value=_),size:"small"},null,8,["modelValue"])]),_:1}),d(L,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:c,class:"ml-2"})])}}}),yi={class:"flex flex-col gap-2"},Ii=$({__name:"OptionsPanel",props:{options:{}},setup(e){const t=e,n=V(),{addOption:l}=n;return(o,i)=>{const s=ge,c=D,p=Z;return a(),g(p,{header:"Options"},{default:b(()=>[d(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:b(()=>i[0]||(i[0]=[N("*Create options and select correct ones ")])),_:1}),m("div",yi,[(a(!0),f(E,null,W(t.options,(r,h)=>(a(),f("div",{key:r.id},[d(bi,{option:r,index:h},null,8,["option","index"])]))),128))]),d(c,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:I(l)},null,8,["onClick"])]),_:1})}}}),wi={class:"flex items-center"},Oi=$({__name:"PairEditor",props:{pair:{},index:{}},setup(e){const t=V(),{savePair:n,removePair:l}=t,o=e,i=S(""),s=S(""),c=()=>{l(o.index)};return K(()=>{i.value=o.pair.key,s.value=o.pair.value}),U([i,s],()=>{n(i.value,s.value,o.index)}),(p,r)=>{const h=ne,y=be,w=ve,F=D;return a(),f("div",wi,[d(w,null,{default:b(()=>[d(h,{placeholder:"Key",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=L=>i.value=L),size:"small"},null,8,["modelValue"]),d(y,null,{default:b(()=>r[2]||(r[2]=[m("div",null,"=",-1)])),_:1}),d(h,{placeholder:"Value",modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=L=>s.value=L),size:"small"},null,8,["modelValue"])]),_:1}),d(F,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:c,class:"ml-2"})])}}}),ki={class:"flex flex-col gap-2"},Si=$({__name:"PairsPanel",props:{pairs:{}},setup(e){const t=e,n=V(),{addPair:l}=n;return(o,i)=>{const s=ge,c=D,p=Z;return a(),g(p,{header:"Pairs"},{default:b(()=>[d(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:b(()=>i[0]||(i[0]=[N("*Create matching pairs")])),_:1}),m("div",ki,[(a(!0),f(E,null,W(t.pairs,(r,h)=>(a(),f("div",{key:r.id},[d(Oi,{pair:r,index:h},null,8,["pair","index"])]))),128))]),d(c,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:I(l)},null,8,["onClick"])]),_:1})}}}),Ci={class:"flex-grow dashed-border"},xi=$({__name:"SolutionPanel",props:{solution:{}},setup(e){const t=e,n=V(),{saveSolution:l}=n,o=S("");return K(()=>{o.value=t.solution??""}),U(o,()=>{l(o.value)}),(i,s)=>{const c=Z;return a(),g(c,{header:"Solution code"},{default:b(()=>[m("div",Ci,[d(Ne,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=p=>o.value=p)},null,8,["modelValue"])])]),_:1})}}}),Fi=ae(xi,[["__scopeId","data-v-1e8de051"]]),Li={class:"flex-grow dashed-border"},Bi=$({__name:"StartingPanel",props:{starting:{}},setup(e){const t=e,n=V(),{saveStarting:l}=n,o=S("");return K(()=>{o.value=t.starting??""}),U(o,()=>{l(o.value)}),(i,s)=>{const c=Z;return a(),g(c,{header:"Starting code"},{default:b(()=>[m("div",Li,[d(Ne,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=p=>o.value=p)},null,8,["modelValue"])])]),_:1})}}}),Vi=ae(Bi,[["__scopeId","data-v-d5b12a01"]]);var $i=function(t){var n=t.dt;return`
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
`)},_i={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Ti=J.extend({name:"chip",theme:$i,classes:_i}),Ai={name:"BaseChip",extends:te,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Ti,provide:function(){return{$pcChip:this,$parentInstance:this}}},et={name:"Chip",extends:Ai,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},components:{TimesCircleIcon:ft}},Mi=["aria-label"],Pi=["src"];function Di(e,t,n,l,o,i){return o.visible?(a(),f("div",u({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[x(e.$slots,"default",{},function(){return[e.image?(a(),f("img",u({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Pi)):e.$slots.icon?(a(),g(z(e.$slots.icon),u({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),f("span",u({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):v("",!0),e.label?(a(),f("div",u({key:3,class:e.cx("label")},e.ptm("label")),B(e.label),17)):v("",!0)]}),e.removable?x(e.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(a(),g(z(e.removeIcon?"span":"TimesCircleIcon"),u({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:i.close,onKeydown:i.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):v("",!0)],16,Mi)):v("",!0)}et.render=Di;var Ei=function(t){var n=t.dt;return`
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
`)},zi={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},Ki={root:function(t){var n=t.instance,l=t.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-display-chip":l.display==="chip","p-disabled":l.disabled,"p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-focus":n.focused,"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-multiselect-open":n.overlayVisible,"p-multiselect-fluid":n.$fluid,"p-multiselect-sm p-inputfield-sm":l.size==="small","p-multiselect-lg p-inputfield-lg":l.size==="large"}]},labelContainer:"p-multiselect-label-container",label:function(t){var n=t.instance,l=t.props;return["p-multiselect-label",{"p-placeholder":n.label===l.placeholder,"p-multiselect-label-empty":!l.placeholder&&(!l.modelValue||l.modelValue.length===0)}]},clearIcon:"p-multiselect-clear-icon",chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:function(t){var n=t.instance,l=t.option,o=t.index,i=t.getItemOptions,s=t.props;return["p-multiselect-option",{"p-multiselect-option-selected":n.isSelected(l)&&s.highlightOnSelect,"p-focus":n.focusedOptionIndex===n.getOptionIndex(o,i),"p-disabled":n.isOptionDisabled(l)}]},emptyMessage:"p-multiselect-empty-message"},Ui=J.extend({name:"multiselect",theme:Ei,classes:Ki,inlineStyles:zi}),Ri={name:"BaseMultiSelect",extends:je,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},placeholder:String,inputId:{type:String,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},overlayClass:{type:String,default:null},overlayStyle:{type:null,default:null},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},resetFilterOnClear:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:null},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ui,provide:function(){return{$pcMultiSelect:this,$parentInstance:this}}};function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,l)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(n),!0).forEach(function(l){tt(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function tt(e,t,n){return(t=ji(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(e){var t=Hi(e,"string");return re(t)=="symbol"?t:t+""}function Hi(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(re(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ae(e){return Wi(e)||qi(e)||Ni(e)||Gi()}function Gi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ni(e,t){if(e){if(typeof e=="string")return Se(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Se(e,t):void 0}}function qi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wi(e){if(Array.isArray(e))return Se(e)}function Se(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var nt={name:"MultiSelect",extends:Ri,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(t){this.id=t||fe()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||fe(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(Ie.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,n){return this.virtualScrollerDisabled?t:n&&n(t).index},getOptionLabel:function(t){return this.optionLabel?oe(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?oe(t,this.optionValue):t},getOptionRenderKey:function(t,n){return this.dataKey?oe(t,this.dataKey):this.getOptionLabel(t)+"_".concat(n)},getHeaderCheckboxPTOptions:function(t){return this.ptm(t,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(t,n,l,o){return this.ptm(o,{context:{selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(l,n),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.maxSelectionLimitReached&&!this.isSelected(t)?!0:this.optionDisabled?oe(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return oe(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return oe(t,this.optionGroupChildren)},getAriaPosInset:function(t){var n=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(l){return n.isOptionGroup(l)}).length:t)+1},show:function(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),t&&Q(this.$refs.focusInput)},hide:function(t){var n=this,l=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),t&&Q(n.$refs.focusInput)};setTimeout(function(){l()},0)},onFocus:function(t){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var n,l;this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",t),(n=(l=this.formField).onBlur)===null||n===void 0||n.call(l)},onKeyDown:function(t){var n=this;if(this.disabled){t.preventDefault();return}var l=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(t);break;default:if(t.code==="KeyA"&&l){var o=this.visibleOptions.filter(function(i){return n.isValidOption(i)}).map(function(i){return n.getOptionValue(i)});this.updateModel(t,o),t.preventDefault();break}!l&&ht(t.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(t),t.preventDefault());break}this.clicked=!1},onContainerClick:function(t){this.disabled||this.loading||t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(t){this.updateModel(t,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?mt(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Q(n)},onLastHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?gt(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Q(n)},onOptionSelect:function(t,n){var l=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(n))){var s=this.isSelected(n),c=null;s?c=this.d_value.filter(function(p){return!ue(p,l.getOptionValue(n),l.equalityKey)}):c=[].concat(Ae(this.d_value||[]),[this.getOptionValue(n)]),this.updateModel(t,c),o!==-1&&(this.focusedOptionIndex=o),i&&Q(this.$refs.focusInput)}},onOptionMouseMove:function(t,n){this.focusOnHover&&this.changeFocusedOptionIndex(t,n)},onOptionSelectRange:function(t){var n=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(l===-1&&(l=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(l)),l!==-1&&o!==-1){var i=Math.min(l,o),s=Math.max(l,o),c=this.visibleOptions.slice(i,s+1).filter(function(p){return n.isValidOption(p)}).map(function(p){return n.getOptionValue(p)});this.updateModel(t,c)}},onFilterChange:function(t){var n=t.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(t){vt.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(!this.overlayVisible)this.show();else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,this.startRangeIndex,n),this.changeFocusedOptionIndex(t,n)}t.preventDefault()},onArrowUpKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var l=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,l,this.startRangeIndex),this.changeFocusedOptionIndex(t,l),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;t.shiftKey?l.setSelectionRange(0,t.target.selectionStart):(l.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var o=t.metaKey||t.ctrlKey,i=this.findFirstOptionIndex();t.shiftKey&&o&&this.onOptionSelectRange(t,i,this.startRangeIndex),this.changeFocusedOptionIndex(t,i),!this.overlayVisible&&this.show()}t.preventDefault()},onEndKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var l=t.currentTarget;if(t.shiftKey)l.setSelectionRange(t.target.selectionStart,l.value.length);else{var o=l.value.length;l.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else{var i=t.metaKey||t.ctrlKey,s=this.findLastOptionIndex();t.shiftKey&&i&&this.onOptionSelectRange(t,this.startRangeIndex,s),this.changeFocusedOptionIndex(t,s),!this.overlayVisible&&this.show()}t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.overlayVisible?this.focusedOptionIndex!==-1&&(t.shiftKey?this.onOptionSelectRange(t,this.focusedOptionIndex):this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(Q(t.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(t){Ie.set("overlay",t,this.$primevue.config.zIndex.overlay),bt(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&Q(this.$refs.filterInput.$el)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){Ie.clear(t)},alignOverlay:function(){this.appendTo==="self"?yt(this.overlay,this.$el):(this.overlay.style.minWidth=It(this.$el)+"px",wt(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.overlayVisible&&t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Ot(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!kt()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},getLabelByValue:function(t){var n=this,l=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],o=l.find(function(i){return!n.isOptionGroup(i)&&ue(n.getOptionValue(i),t,n.equalityKey)});return o?this.getOptionLabel(o):null},getSelectedItemsLabel:function(){var t=/{(.*?)}/,n=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return t.test(n)?n.replace(n.match(t)[0],this.d_value.length+""):n},onToggleAll:function(t){var n=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:t,checked:!this.allSelected});else{var l=this.allSelected?[]:this.visibleOptions.filter(function(o){return n.isValidOption(o)}).map(function(o){return n.getOptionValue(o)});this.updateModel(t,l)}},removeOption:function(t,n){var l=this;t.stopPropagation();var o=this.d_value.filter(function(i){return!ue(i,n,l.equalityKey)});this.updateModel(t,o)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return St(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(t){var n;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((n=this.getOptionLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(t){return ee(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isEquals:function(t,n){return ue(t,n,this.equalityKey)},isSelected:function(t){var n=this,l=this.getOptionValue(t);return(this.d_value||[]).some(function(o){return n.isEquals(o,l)})},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(n){return t.isValidOption(n)})},findLastOptionIndex:function(){var t=this;return de(this.visibleOptions,function(n){return t.isValidOption(n)})},findNextOptionIndex:function(t){var n=this,l=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidOption(o)}):-1;return l>-1?l+t+1:t},findPrevOptionIndex:function(t){var n=this,l=t>0?de(this.visibleOptions.slice(0,t),function(o){return n.isValidOption(o)}):-1;return l>-1?l:t},findSelectedOptionIndex:function(){var t=this;if(this.$filled){for(var n=function(){var s=t.d_value[o],c=t.visibleOptions.findIndex(function(p){return t.isValidSelectedOption(p)&&t.isEquals(s,t.getOptionValue(p))});if(c>-1)return{v:c}},l,o=this.d_value.length-1;o>=0;o--)if(l=n(),l)return l.v}return-1},findFirstSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(n){return t.isValidSelectedOption(n)}):-1},findLastSelectedOptionIndex:function(){var t=this;return this.$filled?de(this.visibleOptions,function(n){return t.isValidSelectedOption(n)}):-1},findNextSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l+t+1:-1},findPrevSelectedOptionIndex:function(t){var n=this,l=this.$filled&&t>0?de(this.visibleOptions.slice(0,t),function(o){return n.isValidSelectedOption(o)}):-1;return l>-1?l:-1},findNearestSelectedOptionIndex:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=-1;return this.$filled&&(n?(l=this.findPrevSelectedOptionIndex(t),l=l===-1?this.findNextSelectedOptionIndex(t):l):(l=this.findNextSelectedOptionIndex(t),l=l===-1?this.findPrevSelectedOptionIndex(t):l)),l>-1?l:t},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions:function(t){var n=this;this.searchValue=(this.searchValue||"")+t.key;var l=-1;ee(this.searchValue)&&(this.focusedOptionIndex!==-1?(l=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}),l=l===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(o){return n.isOptionMatched(o)}):l+this.focusedOptionIndex):l=this.visibleOptions.findIndex(function(o){return n.isOptionMatched(o)}),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(t,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue="",n.searchTimeout=null},500)},changeFocusedOptionIndex:function(t,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[n]))},scrollInView:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var l=n!==-1?"".concat(t.id,"_").concat(n):t.focusedOptionId,o=Ct(t.list,'li[id="'.concat(l,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(n!==-1?n:t.focusedOptionIndex)})},autoUpdateModel:function(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.$filled){this.focusedOptionIndex=this.findFirstFocusedOptionIndex();var t=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[t])}},updateModel:function(t,n){this.writeValue(n,t),this.$emit("change",{originalEvent:t,value:n})},flatOptions:function(t){var n=this;return(t||[]).reduce(function(l,o,i){l.push({optionGroup:o,group:!0,index:i});var s=n.getOptionGroupChildren(o);return s&&s.forEach(function(c){return l.push(c)}),l},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,n){this.list=t,n&&n(t)},virtualScrollerRef:function(t){this.virtualScroller=t}},computed:{visibleOptions:function(){var t=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var l=xt.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],i=[];return o.forEach(function(s){var c=t.getOptionGroupChildren(s),p=c.filter(function(r){return l.includes(r)});p.length>0&&i.push(Te(Te({},s),{},tt({},typeof t.optionGroupChildren=="string"?t.optionGroupChildren:"items",Ae(p))))}),this.flatOptions(i)}return l}return n},label:function(){var t;if(this.d_value&&this.d_value.length){if(ee(this.maxSelectedLabels)&&this.d_value.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();t="";for(var n=0;n<this.d_value.length;n++)n!==0&&(t+=", "),t+=this.getLabelByValue(this.d_value[n])}else t=this.placeholder;return t},chipSelectedItems:function(){return ee(this.maxSelectedLabels)&&this.d_value&&this.d_value.length>this.maxSelectedLabels},allSelected:function(){var t=this;return this.selectAll!==null?this.selectAll:ee(this.visibleOptions)&&this.visibleOptions.every(function(n){return t.isOptionGroup(n)||t.isOptionDisabled(n)||t.isSelected(n)})},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.d_value&&this.d_value.length===this.selectionLimit},filterResultMessageText:function(){return ee(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.d_value.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(n){return!t.isOptionGroup(n)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return Ft(this.fluid)?!!this.$pcFluid:this.fluid},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&ee(this.options)}},directives:{ripple:he},components:{InputText:ne,Checkbox:qe,VirtualScroller:Dt,Portal:Lt,Chip:et,IconField:Et,InputIcon:zt,TimesIcon:Ce,SearchIcon:Kt,ChevronDownIcon:Ut,SpinnerIcon:Bt,CheckIcon:Vt}};function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ce(e)}function Me(e,t,n){return(t=Zi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zi(e){var t=Yi(e,"string");return ce(t)=="symbol"?t:t+""}function Yi(e,t){if(ce(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(ce(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Xi=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Ji={key:0},Qi=["id","aria-label"],el=["id"],tl=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function nl(e,t,n,l,o,i){var s=M("Chip"),c=M("SpinnerIcon"),p=M("Checkbox"),r=M("InputText"),h=M("SearchIcon"),y=M("InputIcon"),w=M("IconField"),F=M("VirtualScroller"),L=M("Portal"),_=$t("ripple");return a(),f("div",u({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[7]||(t[7]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},e.ptmi("root")),[m("div",u({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[m("input",u({ref:"focusInput",id:e.inputId,type:"text",readonly:"",disabled:e.disabled,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},e.ptm("hiddenInput")),null,16,Xi)],16),m("div",u({class:e.cx("labelContainer")},e.ptm("labelContainer")),[m("div",u({class:e.cx("label")},e.ptm("label")),[x(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){return[e.display==="comma"?(a(),f(E,{key:0},[N(B(i.label||"empty"),1)],64)):e.display==="chip"?(a(),f(E,{key:1},[i.chipSelectedItems?(a(),f("span",Ji,B(i.label),1)):(a(!0),f(E,{key:1},W(e.d_value,function(C){return a(),f("span",u({key:i.getLabelByValue(C),class:e.cx("chipItem"),ref_for:!0},e.ptm("chipItem")),[x(e.$slots,"chip",{value:C,removeCallback:function(T){return i.removeOption(T,C)}},function(){return[d(s,{class:P(e.cx("pcChip")),label:i.getLabelByValue(C),removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(T){return i.removeOption(T,C)},pt:e.ptm("pcChip")},{removeicon:b(function(){return[x(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:P(e.cx("chipIcon")),item:C,removeCallback:function(T){return i.removeOption(T,C)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16)}),128)),!e.d_value||e.d_value.length===0?(a(),f(E,{key:2},[N(B(e.placeholder||"empty"),1)],64)):v("",!0)],64)):v("",!0)]})],16)],16),i.isClearIconVisible?x(e.$slots,"clearicon",{key:0,class:P(e.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(a(),g(z(e.clearIcon?"i":"TimesIcon"),u({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:i.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):v("",!0),m("div",u({class:e.cx("dropdown")},e.ptm("dropdown")),[e.loading?x(e.$slots,"loadingicon",{key:0,class:P(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(a(),f("span",u({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(a(),g(c,u({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):x(e.$slots,"dropdownicon",{key:1,class:P(e.cx("dropdownIcon"))},function(){return[(a(),g(z(e.dropdownIcon?"span":"ChevronDownIcon"),u({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true"},e.ptm("dropdownIcon")),null,16,["class"]))]})],16),d(L,{appendTo:e.appendTo},{default:b(function(){return[d(Ke,u({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:b(function(){return[o.overlayVisible?(a(),f("div",u({key:0,ref:i.overlayRef,style:[e.panelStyle,e.overlayStyle],class:[e.cx("overlay"),e.panelClass,e.overlayClass],onClick:t[5]||(t[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:t[6]||(t[6]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},e.ptm("overlay")),[m("span",u({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),x(e.$slots,"header",{value:e.d_value,options:i.visibleOptions}),e.showToggleAll&&e.selectionLimit==null||e.filter?(a(),f("div",u({key:0,class:e.cx("header")},e.ptm("header")),[e.showToggleAll&&e.selectionLimit==null?(a(),g(p,{key:0,modelValue:i.allSelected,binary:!0,disabled:e.disabled,variant:e.variant,"aria-label":i.toggleAllAriaLabel,onChange:i.onToggleAll,unstyled:e.unstyled,pt:i.getHeaderCheckboxPTOptions("pcHeaderCheckbox")},{icon:b(function(C){return[e.$slots.headercheckboxicon?(a(),g(z(e.$slots.headercheckboxicon),{key:0,checked:C.checked,class:P(C.class)},null,8,["checked","class"])):C.checked?(a(),g(z(e.checkboxIcon?"span":"CheckIcon"),u({key:1,class:[C.class,Me({},e.checkboxIcon,C.checked)]},i.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")),null,16,["class"])):v("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):v("",!0),e.filter?(a(),g(w,{key:1,class:P(e.cx("pcFilterContainer")),unstyled:e.unstyled,pt:e.ptm("pcFilterContainer")},{default:b(function(){return[d(r,{ref:"filterInput",value:o.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:P(e.cx("pcFilter")),placeholder:e.filterPlaceholder,disabled:e.disabled,variant:e.variant,unstyled:e.unstyled,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:e.ptm("pcFilter")},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","disabled","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),d(y,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:b(function(){return[x(e.$slots,"filtericon",{},function(){return[e.filterIcon?(a(),f("span",u({key:0,class:e.filterIcon},e.ptm("filterIcon")),null,16)):(a(),g(h,ze(u({key:1},e.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["class","unstyled","pt"])):v("",!0),e.filter?(a(),f("span",u({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),B(i.filterResultMessageText),17)):v("",!0)],16)):v("",!0),m("div",u({class:e.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[d(F,u({ref:i.virtualScrollerRef},e.virtualScrollerOptions,{items:i.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),_t({content:b(function(C){var R=C.styleClass,T=C.contentRef,Y=C.items,A=C.getItemOptions,ye=C.contentStyle,ie=C.itemSize;return[m("ul",u({ref:function(O){return i.listRef(O,T)},id:o.id+"_list",class:[e.cx("list"),R],style:ye,role:"listbox","aria-multiselectable":"true","aria-label":i.listAriaLabel},e.ptm("list")),[(a(!0),f(E,null,W(Y,function(k,O){return a(),f(E,{key:i.getOptionRenderKey(k,i.getOptionIndex(O,A))},[i.isOptionGroup(k)?(a(),f("li",u({key:0,id:o.id+"_"+i.getOptionIndex(O,A),style:{height:ie?ie+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[x(e.$slots,"optiongroup",{option:k.optionGroup,index:i.getOptionIndex(O,A)},function(){return[N(B(i.getOptionGroupLabel(k.optionGroup)),1)]})],16,el)):xe((a(),f("li",u({key:1,id:o.id+"_"+i.getOptionIndex(O,A),style:{height:ie?ie+"px":void 0},class:e.cx("option",{option:k,index:O,getItemOptions:A}),role:"option","aria-label":i.getOptionLabel(k),"aria-selected":i.isSelected(k),"aria-disabled":i.isOptionDisabled(k),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(O,A)),onClick:function(j){return i.onOptionSelect(j,k,i.getOptionIndex(O,A),!0)},onMousemove:function(j){return i.onOptionMouseMove(j,i.getOptionIndex(O,A))},ref_for:!0},i.getCheckboxPTOptions(k,A,O,"option"),{"data-p-selected":i.isSelected(k),"data-p-focused":o.focusedOptionIndex===i.getOptionIndex(O,A),"data-p-disabled":i.isOptionDisabled(k)}),[d(p,{defaultValue:i.isSelected(k),binary:!0,tabindex:-1,variant:e.variant,unstyled:e.unstyled,pt:i.getCheckboxPTOptions(k,A,O,"pcOptionCheckbox")},{icon:b(function(G){return[e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon?(a(),g(z(e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon),{key:0,checked:G.checked,class:P(G.class)},null,8,["checked","class"])):G.checked?(a(),g(z(e.checkboxIcon?"span":"CheckIcon"),u({key:1,class:[G.class,Me({},e.checkboxIcon,G.checked)],ref_for:!0},i.getCheckboxPTOptions(k,A,O,"pcOptionCheckbox.icon")),null,16,["class"])):v("",!0)]}),_:2},1032,["defaultValue","variant","unstyled","pt"]),x(e.$slots,"option",{option:k,selected:i.isSelected(k),index:i.getOptionIndex(O,A)},function(){return[m("span",u({ref_for:!0},e.ptm("optionLabel")),B(i.getOptionLabel(k)),17)]})],16,tl)),[[_]])],64)}),128)),o.filterValue&&(!Y||Y&&Y.length===0)?(a(),f("li",u({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[x(e.$slots,"emptyfilter",{},function(){return[N(B(i.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(a(),f("li",u({key:1,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[x(e.$slots,"empty",{},function(){return[N(B(i.emptyMessageText),1)]})],16)):v("",!0)],16,Qi)]}),_:2},[e.$slots.loader?{name:"loader",fn:b(function(C){var R=C.options;return[x(e.$slots,"loader",{options:R})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),x(e.$slots,"footer",{value:e.d_value,options:i.visibleOptions}),!e.options||e.options&&e.options.length===0?(a(),f("span",u({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),B(i.emptyMessageText),17)):v("",!0),m("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),B(i.selectedMessageText),17),m("span",u({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[4]||(t[4]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):v("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}nt.render=nl;const il={class:"flex flex-col gap-2"},ll={class:"flex items-center"},ol={class:"flex items-center"},al=$({__name:"ActionsPanel",props:{userActions:{},platformActions:{}},setup(e){const t=e,n=V(),{saveUserActions:l,savePlatformActions:o}=n,i=S(null),s=S(null),c=S(["put","run"]),p=S(["code2ide","light-up","auto-run","auto-put"]);return K(()=>{i.value=t.userActions||[],s.value=t.platformActions||null}),U([i,s],()=>{console.log("1"),l(i.value),o(s.value)}),(r,h)=>{const y=nt,w=Z;return a(),g(w,{header:"Actions"},{default:b(()=>[m("div",il,[m("div",ll,[d(y,{modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=F=>i.value=F),display:"chip",options:c.value,placeholder:"Select user actions",class:"w-full"},null,8,["modelValue","options"])]),m("div",ol,[d(y,{modelValue:s.value,"onUpdate:modelValue":h[1]||(h[1]=F=>s.value=F),display:"chip",options:p.value,placeholder:"Select platform actions",class:"w-full"},null,8,["modelValue","options"])])])]),_:1})}}}),sl={class:"flex items-center"},rl=$({__name:"HighlightEditor",props:{highlight:{},index:{}},setup(e){const t=V(),{saveHighlight:n,removeHighlight:l}=t,o=e,i=S(null),s=S(null),c=()=>{l(o.index)};K(()=>{i.value=o.highlight.module,s.value=o.highlight.slot}),U([i,s],()=>{i.value==null||s.value==null||n(i.value,s.value,o.index)});const p=S(["A","B","C","D","E","F"]),r=S(["LED","PB","LS","TS","PTM","NCD","MT","MCP","CLM","GS","BZ","CLR","JS","DS","SW","OLD","LDT"]);return(h,y)=>{const w=He,F=be,L=ve,_=D;return a(),f("div",sl,[d(L,null,{default:b(()=>[d(w,{modelValue:i.value,"onUpdate:modelValue":y[0]||(y[0]=C=>i.value=C),options:r.value,placeholder:"Select module",class:"place-content-center",size:"small"},null,8,["modelValue","options"]),d(F,{class:"h-[35px]"},{default:b(()=>y[2]||(y[2]=[m("div",null,"=>",-1)])),_:1}),d(w,{modelValue:s.value,"onUpdate:modelValue":y[1]||(y[1]=C=>s.value=C),options:p.value,placeholder:"Select slot",size:"small"},null,8,["modelValue","options"])]),_:1}),d(_,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:c,class:"ml-2"})])}}}),cl={class:"flex flex-col gap-2"},ul=$({__name:"HighlightPanel",props:{highlights:{}},setup(e){const t=e,n=V(),{addHighlight:l}=n;return(o,i)=>{const s=D,c=Z;return a(),g(c,{header:"Highlight slots & modules"},{default:b(()=>[m("div",cl,[(a(!0),f(E,null,W(t.highlights,(p,r)=>(a(),f("div",{key:p.id},[d(rl,{highlight:p,index:r},null,8,["highlight","index"])]))),128))]),d(s,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:I(l)},null,8,["onClick"])]),_:1})}}}),dl={class:"flex flex-col gap-2"},pl={class:"flex items-center"},fl={class:"flex items-center justify-end gap-2 mb-8 mt-4"},hl=$({__name:"StepEditor",setup(e){const{locale:t}=me(),n=Tt(),l=V(),{lesson:o,stepIndex:i}=se(l),{removeStep:s}=l,c=S(!1),p=S(!1),r=Ue(()=>{var F;return i.value==null?null:((F=o.value)==null?void 0:F.steps[i.value])??null});async function h(){if(!(c.value||r.value==null)){c.value=!0;try{await X.updateStepTranslationByID(r.value.id,t.value,r.value.title,r.value.inner)}catch(F){alert(F)}finally{c.value=!1}}}function y(){n.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{w()}})}async function w(){if(!(p.value||r.value==null)){p.value=!0;try{await X.deleteStepByID(r.value.id),s()}catch(F){alert(F)}finally{p.value=!1}}}return(F,L)=>{const _=ne,C=Ge,R=ge,T=Z,Y=D;return r.value?(a(),f("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:r.value.id},[d(T,{header:"Info",class:"mb-2"},{default:b(()=>[m("div",dl,[m("div",pl,[d(C,{variant:"on",class:"w-full"},{default:b(()=>[L[1]||(L[1]=m("label",{for:"title"},"Title",-1)),d(_,{id:"title",modelValue:r.value.title,"onUpdate:modelValue":L[0]||(L[0]=A=>r.value.title=A),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),d(R,{size:"small",severity:"secondary",variant:"simple"},{default:b(()=>[N(B(r.value.type),1)]),_:1})])]),_:1}),d(I(si),{contents:r.value.inner.contents,"step-type":r.value.type,class:"mb-2"},null,8,["contents","step-type"]),r.value.type=="code"?(a(),g(I(Vi),{key:0,starting:r.value.inner.starting,class:"mb-2"},null,8,["starting"])):v("",!0),r.value.type=="code"?(a(),g(I(Fi),{key:1,solution:r.value.inner.solution,class:"mb-2"},null,8,["solution"])):v("",!0),d(I(ul),{highlights:r.value.inner.highlights,class:"mb-2"},null,8,["highlights"]),r.value.type=="question"?(a(),g(I(Ii),{key:2,options:r.value.inner.options,class:"mb-2"},null,8,["options"])):v("",!0),r.value.type=="matching"?(a(),g(I(Si),{key:3,pairs:r.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):v("",!0),r.value.type=="open"?(a(),g(I(Yn),{key:4,answer:r.value.inner.answer,class:"mb-2"},null,8,["answer"])):v("",!0),d(I(al),{"user-actions":r.value.inner.userActions,"platform-actions":r.value.inner.platformActions},null,8,["user-actions","platform-actions"]),m("div",fl,[d(Y,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:y,loading:p.value,disabled:p.value},null,8,["loading","disabled"]),d(Y,{label:"Save",icon:"pi pi-save",severity:"info",size:"small",onClick:h,loading:c.value,disabled:c.value},null,8,["loading","disabled"])])])):v("",!0)}}});async function Pe(e,t,n){const{data:l}=await X.getStepTranslationByID(e.id.toString(),t),o=l;return{id:e.id.toString(),title:o.name,type:e.step_type,progress:"nothing",inner:n||o.content.contents==null?{contents:[]}:o.content}}const ml={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},gl={class:"flex flex-1 items-center"},vl={key:1,class:"flex items-center gap-1"},bl={class:"flex items-center gap-1"},yl={class:"flex flex-1 justify-end items-center gap-2"},Il={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},wl={class:"inline-flex flex-col items-start"},Ol={class:"font-bold"},kl={class:"text-sm"},Sl={class:"flex justify-between items-center mb-8"},Cl={class:"flex justify-end gap-2"},xl=$({__name:"EditorHeader",setup(e){const{locale:t}=me(),n=At(),l=Re(),o=Mt(),{user:i}=se(o),s=V(),{lesson:c,stepIndex:p}=se(s),{changeStep:r,addStep:h,setSteps:y}=s,w=S(!1),F=S(!1),L=S(!1),_=S(null),C=S(["article","code","matching","open","question"]);function R(k){switch(k){case"article":return"pi pi-align-left";case"code":return"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function T(){if(!F.value){F.value=!0;try{const{data:k}=await X.getProjectStepsByID(l.params.id.toString()),O=[];for(const G of k){const j=await Pe(G,t.value,!1);O.push(j)}y(O)}catch(k){alert(k)}finally{F.value=!1}}}K(T),U(t,T,{immediate:!0});async function Y(){if(_.value){L.value=!0;try{const{data:k}=await X.createStep(_.value),O=await Pe(k,t.value,!0);await X.linkStepToProjectByID(l.params.id.toString(),k.id),h(_.value,O)}catch(k){alert(k)}finally{L.value=!1,w.value=!1}}}const A=S(),ye=S([{label:"Log out",icon:"pi pi-sign-out",command:()=>{o.logout(),n.replace({name:"login"})}}]),ie=k=>{A.value.toggle(k)};return(k,O)=>{const G=Fe,j=D,it=De,lt=We,ot=He,at=Pt,st=he;return a(),f(E,null,[m("div",ml,[m("div",gl,[d(G,{src:I(jt),width:"32"},null,8,["src"]),O[5]||(O[5]=m("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),d(j,{id:"#projects",icon:"pi pi-angle-left",label:k.$t("projects"),severity:"secondary",variant:"text",onClick:O[0]||(O[0]=H=>I(n).push({name:"projects"})),size:"small"},null,8,["label"])]),F.value||I(c)==null?(a(),g(it,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):(a(),f("div",vl,[m("div",bl,[(a(!0),f(E,null,W(I(c).steps,(H,le)=>(a(),g(j,{key:H.id,icon:R(H.type),rounded:"",severity:I(p)==le?void 0:"secondary",variant:I(p)==le?void 0:"outlined",onClick:El=>I(r)(le),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128))]),d(j,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:O[1]||(O[1]=H=>w.value=!0)})])),m("div",yl,[d(Rt),d(j,{type:"button",icon:"pi pi-ellipsis-v",onClick:ie,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),d(lt,{ref_key:"menu",ref:A,id:"overlay_menu",model:ye.value,popup:!0},{start:b(()=>{var H,le;return[xe((a(),f("button",Il,[m("span",wl,[m("span",Ol,B((H=I(i))==null?void 0:H.email),1),m("span",kl,B((le=I(i))==null?void 0:le.user_type),1)])])),[[st]])]}),_:1},8,["model"])])]),d(at,{visible:w.value,"onUpdate:visible":O[4]||(O[4]=H=>w.value=H),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:b(()=>[m("div",Sl,[O[6]||(O[6]=m("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),d(ot,{modelValue:_.value,"onUpdate:modelValue":O[2]||(O[2]=H=>_.value=H),options:C.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),m("div",Cl,[d(j,{type:"button",label:"Cancel",severity:"secondary",onClick:O[3]||(O[3]=H=>w.value=!1)}),d(j,{type:"button",label:"+ Add",onClick:Y,loading:L.value,disabled:L.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),Fl={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},Ll={key:0},Bl={key:1,class:"flex"},Vl=$({__name:"LessonPreview",setup(e){const t=V(),{lesson:n,stepIndex:l}=se(t),{changeStep:o}=t,i=Ue(()=>{var p;return l.value==null?null:((p=n.value)==null?void 0:p.steps[l.value])??null});async function s(){l.value!=null&&o(l.value-1)}async function c(){l.value!=null&&o(l.value+1)}return(p,r)=>{const h=D;return a(),f("div",Fl,[i.value?(a(),f("div",Ll,[i.value.type=="article"?(a(),g(I(Gt),{key:0,step:i.value,isPreview:!0},null,8,["step"])):i.value.type=="code"?(a(),g(I(Nt),{key:1,step:i.value,isPreview:!0},null,8,["step"])):i.value.type=="matching"?(a(),g(I(qt),{key:2,step:i.value,isPreview:!0},null,8,["step"])):i.value.type=="open"?(a(),g(I(Wt),{key:3,step:i.value,isPreview:!0},null,8,["step"])):i.value.type=="question"?(a(),g(I(Zt),{key:4,step:i.value,isPreview:!0},null,8,["step"])):v("",!0)])):v("",!0),I(n)!=null&&I(n).steps!=null&&I(n).steps.length>0&&i.value?(a(),f("div",Bl,[I(l)!==0?(a(),g(h,{key:0,label:"Previous",icon:"pi pi-angle-left",size:"small",onClick:s})):v("",!0),I(l)<I(n).steps.length-1?(a(),g(h,{key:1,label:"Next",icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:c})):v("",!0)])):v("",!0)])}}}),$l={key:1,class:"h-[51px]"},_l={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 58px)"}},Tl={class:"max-w-[320px] w-full bg-white"},Al={key:0,class:"p-4"},Ml={class:"flex-grow border-l"},Pl={class:"border-l max-w-[400px] w-full"},Dl=$({__name:"EditorView",setup(e){const{locale:t}=me(),n=Re(),l=V(),{setLesson:o}=l,i=S(!1);async function s(){if(!i.value){i.value=!0;try{const{data:c}=await Oe.getProjectByID(n.params.id.toString()),p=await rt(c,t.value);o(p)}catch(c){alert(c)}finally{i.value=!1}}}return K(s),U(t,s),(c,p)=>{const r=De;return a(),f(E,null,[i.value?(a(),f("div",$l)):(a(),g(xl,{key:0})),m("div",_l,[m("div",Tl,[i.value?(a(),f("div",Al,[d(r,{height:"192px"}),p[0]||(p[0]=m("br",null,null,-1)),d(r,{height:"32px"}),p[1]||(p[1]=m("br",null,null,-1)),d(r,{height:"32px"})])):(a(),g(Un,{key:1}))]),m("div",Ml,[i.value?v("",!0):(a(),g(hl,{key:0}))]),m("div",Pl,[i.value?v("",!0):(a(),g(Vl,{key:0}))])])],64)}}}),Yl=ae(Dl,[["__scopeId","data-v-664f3809"]]);export{Yl as default};
