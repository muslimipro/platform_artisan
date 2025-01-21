import{a as pe,s as we,t as Oe}from"./types-DhkaH52u.js";import{u as $,s as He}from"./editor-store-D6UBHaKU.js";import{X as Z,v,o as s,c as m,W as Ce,e as f,U as P,i as q,t as E,j as C,aa as Y,s as F,aj as Ge,ak as xe,a6 as R,k as N,b as u,af as H,w,h,a7 as K,F as M,al as Ne,am as ge,ah as de,an as be,ao as We,d as S,ad as le,ac as ee,r as _,l as z,y as A,f as g,Y as ye,ag as ke,ap as Ke,a8 as qe,ab as Ze,n as Be,g as Ye,ae as $e,a as Xe,ai as Je}from"./index-Da3VoFGc.js";import{a as Qe,s as X,b as fe,_ as et}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-BmLzZRla.js";import{s as Se}from"./index-CQlB3ZJw.js";import{s as ae}from"./index-C-FWZaBR.js";import{s as me,L as tt}from"./logo-Dw92LOTY.js";import{h as T}from"./http-By252DPI.js";import{_ as J,b as Ie}from"./store-BLBtlJoi.js";import{s as nt,d as ot,_ as lt,a as at,M as it,b as st,c as rt}from"./QuestionStep.vue_vue_type_script_setup_true_lang-Cudt_vfu.js";import{s as Fe}from"./index-COV6P-2l.js";var ut=function(n){var t=n.dt;return`
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
`)},pt={root:function(n){var t=n.instance,a=n.props;return["p-textarea p-component",{"p-filled":t.$filled,"p-textarea-resizable ":a.autoResize,"p-textarea-sm p-inputfield-sm":a.size==="small","p-textarea-lg p-inputfield-lg":a.size==="large","p-invalid":t.$invalid,"p-variant-filled":t.$variant==="filled","p-textarea-fluid":t.$fluid}]}},ct=Z.extend({name:"textarea",theme:ut,classes:pt}),dt={name:"BaseTextarea",extends:Qe,props:{autoResize:Boolean},style:ct,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Pe={name:"Textarea",extends:dt,inheritAttrs:!1,observer:null,mounted:function(){var n=this;this.autoResize&&(this.observer=new ResizeObserver(function(){n.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(n){this.autoResize&&this.resize(),this.writeValue(n.target.value,n)}},computed:{attrs:function(){return v(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},ft=["value","disabled","aria-invalid"];function mt(e,n,t,a,l,o){return s(),m("textarea",v({class:e.cx("root"),value:e.d_value,disabled:e.disabled,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,ft)}Pe.render=mt;var he={name:"PlusIcon",extends:Ce};function ht(e,n,t,a,l,o){return s(),m("svg",v({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[f("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}he.render=ht;var Le={name:"UploadIcon",extends:Ce};function vt(e,n,t,a,l,o){return s(),m("svg",v({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}Le.render=vt;var gt=function(n){var t=n.dt;return`
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
`)},bt={root:function(n){var t=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},yt=Z.extend({name:"progressbar",theme:gt,classes:bt}),_t={name:"BaseProgressBar",extends:Y,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:yt,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},Ve={name:"ProgressBar",extends:_t,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},wt=["aria-valuenow"];function Ct(e,n,t,a,l,o){return s(),m("div",v({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[o.determinate?(s(),m("div",v({key:0,class:e.cx("value"),style:o.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(s(),m("div",v({key:0,class:e.cx("label")},e.ptm("label")),[P(e.$slots,"default",{},function(){return[q(E(e.value+"%"),1)]})],16)):C("",!0)],16)):o.indeterminate?(s(),m("div",v({key:1,class:e.cx("value")},e.ptm("value")),null,16)):C("",!0)],16,wt)}Ve.render=Ct;var xt=function(n){var t=n.dt;return`
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
`)},kt={root:function(n){var t=n.props;return["p-fileupload p-fileupload-".concat(t.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},Bt=Z.extend({name:"fileupload",theme:xt,classes:kt}),$t={name:"BaseFileUpload",extends:Y,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:Bt,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},ze={name:"FileContent",hostName:"FileUpload",extends:Y,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(n){var t,a=1024,l=3,o=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(o[0]);var r=Math.floor(Math.log(n)/Math.log(a)),p=parseFloat((n/Math.pow(a,r)).toFixed(l));return"".concat(p," ").concat(o[r])}},components:{Button:F,Badge:Ge,TimesIcon:xe}},St=["alt","src","width"];function It(e,n,t,a,l,o){var r=R("Badge"),p=R("TimesIcon"),c=R("Button");return s(!0),m(M,null,N(t.files,function(i,d){return s(),m("div",v({key:i.name+i.type+i.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[f("img",v({role:"presentation",class:e.cx("fileThumbnail"),alt:i.name,src:i.objectURL,width:t.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,St),f("div",v({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[f("div",v({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),E(i.name),17),f("span",v({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),E(o.formatSize(i.size)),17)],16),u(r,{value:t.badgeValue,class:H(e.cx("pcFileBadge")),severity:t.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),f("div",v({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[u(c,{onClick:function(y){return e.$emit("remove",d)},text:"",rounded:"",severity:"danger",class:H(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:w(function(b){return[t.templates.fileremoveicon?(s(),h(K(t.templates.fileremoveicon),{key:0,class:H(b.class),file:i,index:d},null,8,["class","file","index"])):(s(),h(p,v({key:1,class:b.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}ze.render=It;function ue(e){return Lt(e)||Pt(e)||Ae(e)||Ft()}function Ft(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lt(e){if(Array.isArray(e))return ce(e)}function oe(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Ae(e))||n){t&&(e=t);var a=0,l=function(){};return{s:l,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(i){throw i},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,r=!0,p=!1;return{s:function(){t=t.call(e)},n:function(){var i=t.next();return r=i.done,i},e:function(i){p=!0,o=i},f:function(){try{r||t.return==null||t.return()}finally{if(p)throw o}}}}function Ae(e,n){if(e){if(typeof e=="string")return ce(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ce(e,n):void 0}}function ce(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var ve={name:"FileUpload",extends:$t,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(n){n.button===0&&this.$refs.fileInput.click()},onFileSelect:function(n){if(n.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var t=n.dataTransfer?n.dataTransfer.files:n.target.files,a=oe(t),l;try{for(a.s();!(l=a.n()).done;){var o=l.value;this.isFileSelected(o)||this.validate(o)&&(this.isImage(o)&&(o.objectURL=window.URL.createObjectURL(o)),this.files.push(o))}}catch(r){a.e(r)}finally{a.f()}this.$emit("select",{originalEvent:n,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),n.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var n=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var t=new XMLHttpRequest,a=new FormData;this.$emit("before-upload",{xhr:t,formData:a});var l=oe(this.files),o;try{for(l.s();!(o=l.n()).done;){var r=o.value;a.append(this.name,r,r.name)}}catch(p){l.e(p)}finally{l.f()}t.upload.addEventListener("progress",function(p){p.lengthComputable&&(n.progress=Math.round(p.loaded*100/p.total)),n.$emit("progress",{originalEvent:p,progress:n.progress})}),t.onreadystatechange=function(){if(t.readyState===4){var p;n.progress=0,t.status>=200&&t.status<300?(n.fileLimit&&(n.uploadedFileCount+=n.files.length),n.$emit("upload",{xhr:t,files:n.files})):n.$emit("error",{xhr:t,files:n.files}),(p=n.uploadedFiles).push.apply(p,ue(n.files)),n.clear()}},t.open("POST",this.url,!0),this.$emit("before-send",{xhr:t,formData:a}),t.withCredentials=this.withCredentials,t.send(a)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(n){if(this.files&&this.files.length){var t=oe(this.files),a;try{for(t.s();!(a=t.n()).done;){var l=a.value;if(l.name+l.type+l.size===n.name+n.type+n.size)return!0}}catch(o){t.e(o)}finally{t.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(n){return this.accept&&!this.isFileTypeValid(n)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",n.name).replace("{1}",this.accept)),!1):this.maxFileSize&&n.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",n.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(n){var t=this.accept.split(",").map(function(p){return p.trim()}),a=oe(t),l;try{for(a.s();!(l=a.n()).done;){var o=l.value,r=this.isWildcard(o)?this.getTypeClass(n.type)===this.getTypeClass(o):n.type==o||this.getFileExtension(n).toLowerCase()===o.toLowerCase();if(r)return!0}}catch(p){a.e(p)}finally{a.f()}return!1},getTypeClass:function(n){return n.substring(0,n.indexOf("/"))},isWildcard:function(n){return n.indexOf("*")!==-1},getFileExtension:function(n){return"."+n.name.split(".").pop()},isImage:function(n){return/^image\//.test(n.type)},onDragEnter:function(n){this.disabled||(n.stopPropagation(),n.preventDefault())},onDragOver:function(n){this.disabled||(!this.isUnstyled&&Ne(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),n.stopPropagation(),n.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&ge(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(n){if(!this.disabled){!this.isUnstyled&&ge(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),n.stopPropagation(),n.preventDefault();var t=n.dataTransfer?n.dataTransfer.files:n.target.files,a=this.multiple||t&&t.length===1;a&&this.onFileSelect(n)}},remove:function(n){this.clearInputElement();var t=this.files.splice(n,1)[0];this.files=ue(this.files),this.$emit("remove",{file:t,files:this.files})},removeUploadedFile:function(n){var t=this.uploadedFiles.splice(n,1)[0];this.uploadedFiles=ue(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:t,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(n){var t,a=1024,l=3,o=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(o[0]);var r=Math.floor(Math.log(n)/Math.log(a)),p=parseFloat((n/Math.pow(a,r)).toFixed(l));return"".concat(p," ").concat(o[r])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var n;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var t;return this.files&&this.files.length===1?this.files[0].name:(t=this.$primevue.config.locale)===null||t===void 0||(t=t.fileChosenMessage)===null||t===void 0?void 0:t.replace("{0}",this.files.length)}return((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:F,ProgressBar:Ve,Message:ae,FileContent:ze,PlusIcon:he,UploadIcon:Le,TimesIcon:xe},directives:{ripple:de}},Vt=["multiple","accept","disabled"],zt=["files"],At=["accept","disabled","multiple"];function Dt(e,n,t,a,l,o){var r=R("Button"),p=R("ProgressBar"),c=R("Message"),i=R("FileContent");return o.isAdvanced?(s(),m("div",v({key:0,class:e.cx("root")},e.ptmi("root")),[f("input",v({ref:"fileInput",type:"file",onChange:n[0]||(n[0]=function(){return o.onFileSelect&&o.onFileSelect.apply(o,arguments)}),multiple:e.multiple,accept:e.accept,disabled:o.chooseDisabled},e.ptm("input")),null,16,Vt),f("div",v({class:e.cx("header")},e.ptm("header")),[P(e.$slots,"header",{files:l.files,uploadedFiles:l.uploadedFiles,chooseCallback:o.choose,uploadCallback:o.uploader,clearCallback:o.clear},function(){return[u(r,v({label:o.chooseButtonLabel,class:o.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:o.choose,onKeydown:be(o.choose,["enter"]),onFocus:o.onFocus,onBlur:o.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:w(function(d){return[P(e.$slots,"chooseicon",{},function(){return[(s(),h(K(e.chooseIcon?"span":"PlusIcon"),v({class:[d.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(s(),h(r,v({key:0,class:e.cx("pcUploadButton"),label:o.uploadButtonLabel,onClick:o.uploader,disabled:o.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:w(function(d){return[P(e.$slots,"uploadicon",{},function(){return[(s(),h(K(e.uploadIcon?"span":"UploadIcon"),v({class:[d.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):C("",!0),e.showCancelButton?(s(),h(r,v({key:1,class:e.cx("pcCancelButton"),label:o.cancelButtonLabel,onClick:o.clear,disabled:o.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:w(function(d){return[P(e.$slots,"cancelicon",{},function(){return[(s(),h(K(e.cancelIcon?"span":"TimesIcon"),v({class:[d.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):C("",!0)]})],16),f("div",v({ref:"content",class:e.cx("content"),onDragenter:n[1]||(n[1]=function(){return o.onDragEnter&&o.onDragEnter.apply(o,arguments)}),onDragover:n[2]||(n[2]=function(){return o.onDragOver&&o.onDragOver.apply(o,arguments)}),onDragleave:n[3]||(n[3]=function(){return o.onDragLeave&&o.onDragLeave.apply(o,arguments)}),onDrop:n[4]||(n[4]=function(){return o.onDrop&&o.onDrop.apply(o,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[P(e.$slots,"content",{files:l.files,uploadedFiles:l.uploadedFiles,removeUploadedFileCallback:o.removeUploadedFile,removeFileCallback:o.remove,progress:l.progress,messages:l.messages},function(){return[o.hasFiles?(s(),h(p,{key:0,value:l.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):C("",!0),(s(!0),m(M,null,N(l.messages,function(d){return s(),h(c,{key:d,severity:"error",onClose:o.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:w(function(){return[q(E(d),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),o.hasFiles?(s(),m("div",{key:1,class:H(e.cx("fileList"))},[u(i,{files:l.files,onRemove:o.remove,badgeValue:o.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):C("",!0),o.hasUploadedFiles?(s(),m("div",{key:2,class:H(e.cx("fileList"))},[u(i,{files:l.uploadedFiles,onRemove:o.removeUploadedFile,badgeValue:o.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):C("",!0)]}),e.$slots.empty&&!o.hasFiles&&!o.hasUploadedFiles?(s(),m("div",We(v({key:0},e.ptm("empty"))),[P(e.$slots,"empty")],16)):C("",!0)],16)],16)):o.isBasic?(s(),m("div",v({key:1,class:e.cx("root")},e.ptmi("root")),[(s(!0),m(M,null,N(l.messages,function(d){return s(),h(c,{key:d,severity:"error",onClose:o.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:w(function(){return[q(E(d),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),u(r,v({label:o.chooseButtonLabel,class:o.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:o.onBasicUploaderClick,onKeydown:be(o.choose,["enter"]),onFocus:o.onFocus,onBlur:o.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:w(function(d){return[P(e.$slots,"chooseicon",{},function(){return[(s(),h(K(e.chooseIcon?"span":"PlusIcon"),v({class:[d.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?C("",!0):P(e.$slots,"filelabel",{key:0,class:H(e.cx("filelabel"))},function(){return[f("span",{class:H(e.cx("filelabel")),files:l.files},E(o.basicFileChosenLabel),11,zt)]}),f("input",v({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:n[5]||(n[5]=function(){return o.onFileSelect&&o.onFileSelect.apply(o,arguments)}),onFocus:n[6]||(n[6]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:n[7]||(n[7]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},e.ptm("input")),null,16,At)],16)):C("",!0)}ve.render=Dt;const G={getSteps:Tt,createStep:Ut,getStepByID:Et,updateStepByID:Mt,deleteStepByID:jt,getStepTranslationByID:Rt,updateStepTranslationByID:Ot,linkStepToProjectByID:Gt,unlinkStepFromProjectByID:Nt,getProjectStepsByID:Ht,uploadFile:Wt};async function Tt(){try{return await T.get("/steps")}catch(e){throw console.log(e),e}}async function Ut(e){try{return await T.post("/step",{last_edited_by:0,step_type:e})}catch(n){throw console.log(n),n}}async function Et(e){try{return await T.get(`/step/${e}`)}catch(n){throw console.log(n),n}}async function Mt(e){try{return await T.put(`/step/${e}`,{})}catch(n){throw console.log(n),n}}async function jt(e){try{return await T.delete(`/step/${e}`)}catch(n){throw console.log(n),n}}async function Rt(e,n){try{return await T.get(`/step/${e}/translation/${n}`)}catch(t){throw console.log(t),t}}async function Ot(e,n,t,a){try{return await T.put(`/step/${e}/translation/${n}`,{content:a,name:t})}catch(l){throw console.log(l),l}}async function Ht(e){try{return await T.get(`/project/${e}/steps`)}catch(n){throw console.log(n),n}}async function Gt(e,n){try{return await T.post(`/project/${e}/step/${n}/link`)}catch(t){throw console.log(t),t}}async function Nt(e,n){try{return await T.delete(`/project/${e}/step/${n}/unlink`)}catch(t){throw console.log(t),t}}async function Wt(e){try{return await T.post("/upload-file",e,{headers:{"Content-Type":"multipart/form-data"}})}catch(n){throw console.log(n),n}}const Kt={class:"p-4 h-full"},qt={key:0},Zt={key:1,class:"flex flex-col gap-4"},Yt={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},Xt={class:"flex justify-end"},Jt=S({__name:"LessonCard",setup(e){const{locale:n}=le(),t=$(),{lesson:a}=ee(t),l=_(null),o=_(!0),r=_(!1);z(()=>{var i;l.value=((i=a.value)==null?void 0:i.cover_image)??""}),A([()=>{var i;return(i=a.value)==null?void 0:i.title},()=>{var i;return(i=a.value)==null?void 0:i.description},()=>{var i;return(i=a.value)==null?void 0:i.level},l],()=>{o.value=!1});async function p(i){const d=i.files[0],b=new FormData;b.append("file",d);try{const{data:y}=await G.uploadFile(b);l.value=y.presigned_url}catch(y){alert(y)}}async function c(){var i;r.value=!0;try{await pe.updateProjectByID(a.value.id,((i=l.value)==null?void 0:i.toString())??""),await pe.updateProjectTranslationByID(a.value.id,n.value,a.value.title,a.value.description,a.value.level)}catch(d){alert(d)}finally{o.value=!0,r.value=!1}}return(i,d)=>{const b=me,y=ve,x=He,k=X,I=Se,V=Pe,Q=F;return s(),m("div",Kt,[g(a)?(s(),m("div",Zt,[f("div",Yt,[l.value?(s(),h(b,{key:0,src:l.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):C("",!0),u(y,{mode:"basic",onSelect:p,customUpload:"",auto:"",severity:"secondary","choose-icon":l.value==null?"pi pi-plus":"pi pi-pencil","choose-label":l.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),f("div",Xt,[u(x,{id:"level",modelValue:g(a).level,"onUpdate:modelValue":d[0]||(d[0]=U=>g(a).level=U)},null,8,["modelValue"])]),u(I,{variant:"on",class:"w-full"},{default:w(()=>[d[3]||(d[3]=f("label",{for:"title"},"Title",-1)),u(k,{id:"title",modelValue:g(a).title,"onUpdate:modelValue":d[1]||(d[1]=U=>g(a).title=U),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),u(I,{variant:"on",class:"w-full"},{default:w(()=>[d[4]||(d[4]=f("label",{for:"description"},"Description",-1)),u(V,{id:"description",modelValue:g(a).description,"onUpdate:modelValue":d[2]||(d[2]=U=>g(a).description=U),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1}),u(Q,{label:"Save",severity:"info",icon:"pi pi-save",class:"w-fit self-end",size:"small",onClick:c,disabled:o.value||r.value,loading:r.value},null,8,["disabled","loading"])])):(s(),m("div",qt,"Null"))])}}}),Qt=J(Jt,[["__scopeId","data-v-fa39fbad"]]);var en=function(n){var t=n.dt;return`
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
`)},tn={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},nn=Z.extend({name:"panel",theme:en,classes:tn}),on={name:"BasePanel",extends:Y,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:nn,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:on,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||ye()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||ye()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:he,MinusIcon:nt,Button:F},directives:{ripple:de}},ln=["id"],an=["id","aria-labelledby"];function sn(e,n,t,a,l,o){var r=R("Button");return s(),m("div",v({class:e.cx("root")},e.ptmi("root")),[f("div",v({class:e.cx("header")},e.ptm("header")),[P(e.$slots,"header",{id:l.id+"_header",class:H(e.cx("title"))},function(){return[e.header?(s(),m("span",v({key:0,id:l.id+"_header",class:e.cx("title")},e.ptm("title")),E(e.header),17,ln)):C("",!0)]}),f("div",v({class:e.cx("headerActions")},e.ptm("headerActions")),[P(e.$slots,"icons"),e.toggleable?(s(),h(r,v({key:0,id:l.id+"_header",class:e.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":l.id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:o.toggle,onKeydown:o.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:w(function(p){return[P(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(s(),h(K(l.d_collapsed?"PlusIcon":"MinusIcon"),v({class:p.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):C("",!0)],16)],16),u(qe,v({name:"p-toggleable-content"},e.ptm("transition")),{default:w(function(){return[ke(f("div",v({id:l.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":l.id+"_header"},e.ptm("contentContainer")),[f("div",v({class:e.cx("content")},e.ptm("content")),[P(e.$slots,"default")],16),e.$slots.footer?(s(),m("div",v({key:0,class:e.cx("footer")},e.ptm("footer")),[P(e.$slots,"footer")],16)):C("",!0)],16,an),[[Ke,!l.d_collapsed]])]}),_:3},16)],16)}j.render=sn;const rn={class:"flex items-center"},un=S({__name:"AnswerPanel",props:{answer:{}},setup(e){const n=e,t=$(),{saveAnswer:a}=t,l=_("");return z(()=>{l.value=n.answer??""}),A(l,()=>{a(l.value)}),(o,r)=>{const p=X,c=j;return s(),h(c,{header:"Answer"},{default:w(()=>[f("div",rn,[u(p,{id:"answer",modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=i=>l.value=i),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),pn={class:"flex items-start"},cn=S({__name:"MdEditor",props:{content:{},index:{}},setup(e){const n=$(),{saveContent:t,removeContent:a}=n,l=e,o=_(""),r=()=>{a(l.index)};return z(()=>{o.value=l.content.text??"none"}),A(o,()=>{t(o.value,null,l.index)}),(p,c)=>{const i=R("v-md-editor"),d=F;return s(),m("div",pn,[u(i,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=b=>o.value=b),mode:"edit","left-toolbar":"undo redo clear | h bold italic strikethrough quote ul ol table hr link code","right-toolbar":""},null,8,["modelValue"]),u(d,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:r})])}}}),dn=J(cn,[["__scopeId","data-v-927919ee"]]),fn={class:"flex items-start"},mn={class:"relative flex flex-grow justify-center items-center dashed-border h-64"},hn=S({__name:"AssetEditor",props:{content:{},index:{}},setup(e){const n=_(null);async function t(c){const i=c.files[0],d=new FormData;d.append("file",i);try{const{data:b}=await G.uploadFile(d);n.value=b.presigned_url}catch(b){alert(b)}}const a=$(),{saveContent:l,removeContent:o}=a,r=e,p=()=>{o(r.index)};return z(()=>{n.value=r.content.src??null}),A(n,()=>{l(null,n.value,r.index)}),(c,i)=>{const d=me,b=ve,y=F;return s(),m("div",fn,[f("div",mn,[n.value?(s(),h(d,{key:0,src:n.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-64"},null,8,["src"])):C("",!0),u(b,{mode:"basic",onSelect:t,customUpload:"",auto:"",severity:"secondary","choose-icon":n.value==null?"pi pi-plus":"pi pi-pencil","choose-label":n.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),u(y,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:p})])}}}),vn=J(hn,[["__scopeId","data-v-eb03b23c"]]),gn={class:"flex items-center"},bn=S({__name:"VideoEditor",props:{content:{},index:{}},setup(e){const n=e,t=$(),{saveContent:a,removeContent:l}=t,o=_(""),r=()=>{l(n.index)};return z(()=>{o.value=n.content.text??""}),A(o,()=>{a(o.value,null,n.index)}),(p,c)=>{const i=X,d=F;return s(),m("div",gn,[u(i,{id:"video",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=b=>o.value=b),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),u(d,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:r})])}}}),yn={class:"flex flex-col gap-2"},_n=S({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(e){const n=e,t=$(),{addContent:a}=t,l=_(),o=_([{label:"Text",icon:"pi pi-align-left",command:()=>{a("text")}},{label:"Image | Gif",icon:"pi pi-image",command:()=>{a("image")}},{label:"Video",icon:"pi pi-play",command:()=>{a("video")}}]),r=p=>{l.value.toggle(p)};return(p,c)=>{const i=F,d=Fe,b=j;return s(),h(b,{header:"Contents"},{default:w(()=>[f("div",yn,[(s(!0),m(M,null,N(n.contents,(y,x)=>(s(),m("div",{key:y.id},[y.type=="text"?(s(),h(dn,{key:0,content:y,index:x},null,8,["content","index"])):y.type=="image"?(s(),h(vn,{key:1,content:y,index:x},null,8,["content","index"])):y.type=="video"?(s(),h(bn,{key:2,content:y,index:x},null,8,["content","index"])):C("",!0)]))),128))]),u(i,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:r,"aria-haspopup":"true","aria-controls":"overlay_menu"}),u(d,{ref_key:"menu",ref:l,id:"overlay_menu",model:o.value,popup:!0},null,8,["model"])]),_:1})}}});var wn=function(n){var t=n.dt;return`
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
`)},Cn={root:"p-inputgroup"},xn=Z.extend({name:"inputgroup",theme:wn,classes:Cn}),kn={name:"BaseInputGroup",extends:Y,style:xn,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},ie={name:"InputGroup",extends:kn,inheritAttrs:!1};function Bn(e,n,t,a,l,o){return s(),m("div",v({class:e.cx("root")},e.ptmi("root")),[P(e.$slots,"default")],16)}ie.render=Bn;var $n={root:"p-inputgroupaddon"},Sn=Z.extend({name:"inputgroupaddon",classes:$n}),In={name:"BaseInputGroupAddon",extends:Y,style:Sn,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},se={name:"InputGroupAddon",extends:In,inheritAttrs:!1};function Fn(e,n,t,a,l,o){return s(),m("div",v({class:e.cx("root")},e.ptmi("root")),[P(e.$slots,"default")],16)}se.render=Fn;const Pn={class:"flex items-center"},Ln=S({__name:"OptionEditor",props:{option:{},index:{}},setup(e){const n=$(),{saveOption:t,removeOption:a}=n,l=e,o=_(""),r=_(!1),p=()=>{a(l.index)};return z(()=>{o.value=l.option.text??"",r.value=l.option.correct}),A([o,r],()=>{t(o.value,r.value,l.index)}),(c,i)=>{const d=ot,b=se,y=X,x=ie,k=F;return s(),m("div",Pn,[u(x,null,{default:w(()=>[u(b,null,{default:w(()=>[u(d,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=I=>r.value=I),binary:!0},null,8,["modelValue"])]),_:1}),u(y,{placeholder:"Option",modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=I=>o.value=I),size:"small"},null,8,["modelValue"])]),_:1}),u(k,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),Vn={class:"flex flex-col gap-2"},zn=S({__name:"OptionsPanel",props:{options:{}},setup(e){const n=e,t=$(),{addOption:a}=t;return(l,o)=>{const r=ae,p=F,c=j;return s(),h(c,{header:"Options"},{default:w(()=>[u(r,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:w(()=>o[0]||(o[0]=[q("*Create options and select correct ones ")])),_:1}),f("div",Vn,[(s(!0),m(M,null,N(n.options,(i,d)=>(s(),m("div",{key:i.id},[u(Ln,{option:i,index:d},null,8,["option","index"])]))),128))]),u(p,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:g(a)},null,8,["onClick"])]),_:1})}}}),An={class:"flex items-center"},Dn=S({__name:"PairEditor",props:{pair:{},index:{}},setup(e){const n=$(),{savePair:t,removePair:a}=n,l=e,o=_(""),r=_(""),p=()=>{a(l.index)};return z(()=>{o.value=l.pair.key,r.value=l.pair.value}),A([o,r],()=>{t(o.value,r.value,l.index)}),(c,i)=>{const d=X,b=se,y=ie,x=F;return s(),m("div",An,[u(y,null,{default:w(()=>[u(d,{placeholder:"Key",modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=k=>o.value=k),size:"small"},null,8,["modelValue"]),u(b,null,{default:w(()=>i[2]||(i[2]=[f("div",null,"=",-1)])),_:1}),u(d,{placeholder:"Value",modelValue:r.value,"onUpdate:modelValue":i[1]||(i[1]=k=>r.value=k),size:"small"},null,8,["modelValue"])]),_:1}),u(x,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),Tn={class:"flex flex-col gap-2"},Un=S({__name:"PairsPanel",props:{pairs:{}},setup(e){const n=e,t=$(),{addPair:a}=t;return(l,o)=>{const r=ae,p=F,c=j;return s(),h(c,{header:"Pairs"},{default:w(()=>[u(r,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:w(()=>o[0]||(o[0]=[q("*Create matching pairs")])),_:1}),f("div",Tn,[(s(!0),m(M,null,N(n.pairs,(i,d)=>(s(),m("div",{key:i.id},[u(Dn,{pair:i,index:d},null,8,["pair","index"])]))),128))]),u(p,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:g(a)},null,8,["onClick"])]),_:1})}}}),En={class:"flex-grow dashed-border"},Mn=S({__name:"SolutionPanel",props:{solution:{}},setup(e){const n=e,t=$(),{saveSolution:a}=t,l=_("");return z(()=>{l.value=n.solution??""}),A(l,()=>{a(l.value)}),(o,r)=>{const p=j;return s(),h(p,{header:"Solution code"},{default:w(()=>[f("div",En,[u(Ie,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c)},null,8,["modelValue"])])]),_:1})}}}),jn=J(Mn,[["__scopeId","data-v-1e8de051"]]),Rn={class:"flex-grow dashed-border"},On=S({__name:"StartingPanel",props:{starting:{}},setup(e){const n=e,t=$(),{saveStarting:a}=t,l=_("");return z(()=>{l.value=n.starting??""}),A(l,()=>{a(l.value)}),(o,r)=>{const p=j;return s(),h(p,{header:"Starting code"},{default:w(()=>[f("div",Rn,[u(Ie,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c)},null,8,["modelValue"])])]),_:1})}}}),Hn=J(On,[["__scopeId","data-v-d5b12a01"]]),Gn={class:"flex flex-col gap-2"},Nn={class:"flex items-center"},Wn={class:"flex items-center"},Kn=S({__name:"ActionsPanel",props:{userAction:{},platformAction:{}},setup(e){const n=e,t=$(),{saveUserAction:a,savePlatformAction:l}=t,o=_(null),r=_(null),p=_(["put","run"]),c=_(["code2ide","light-up","auto-run","auto-put"]);z(()=>{o.value=n.userAction||null,r.value=n.platformAction||null}),A([o,r],()=>{a(o.value),l(r.value)});function i(){r.value=null}function d(){o.value=null}return(b,y)=>{const x=fe,k=F,I=j;return s(),h(I,{header:"Actions"},{default:w(()=>[f("div",Gn,[f("div",Nn,[u(x,{modelValue:o.value,"onUpdate:modelValue":y[0]||(y[0]=V=>o.value=V),variant:"filled",options:p.value,placeholder:"User action",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),u(k,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:d})]),f("div",Wn,[u(x,{modelValue:r.value,"onUpdate:modelValue":y[1]||(y[1]=V=>r.value=V),variant:"filled",options:c.value,placeholder:"Platform actions",class:"w-full mr-2",size:"small"},null,8,["modelValue","options"]),u(k,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:i})])])]),_:1})}}}),qn={class:"flex items-center"},Zn=S({__name:"HighlightEditor",props:{highlight:{},index:{}},setup(e){const n=$(),{saveHighlight:t,removeHighlight:a}=n,l=e,o=_(null),r=_(null),p=()=>{a(l.index)};z(()=>{o.value=l.highlight.module,r.value=l.highlight.slot}),A([o,r],()=>{o.value==null||r.value==null||t(o.value,r.value,l.index)});const c=_(["A","B","C","D","E","F"]),i=_(["LED","PB","LS","TS","PTM","NCD","MT","MCP","CLM","GS","BZ","CLR","JS","DS","SW","OLD","LDT"]);return(d,b)=>{const y=fe,x=se,k=ie,I=F;return s(),m("div",qn,[u(k,null,{default:w(()=>[u(y,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=V=>o.value=V),options:i.value,placeholder:"Select module",class:"place-content-center",size:"small"},null,8,["modelValue","options"]),u(x,{class:"h-[35px]"},{default:w(()=>b[2]||(b[2]=[f("div",null,"=>",-1)])),_:1}),u(y,{modelValue:r.value,"onUpdate:modelValue":b[1]||(b[1]=V=>r.value=V),options:c.value,placeholder:"Select slot",size:"small"},null,8,["modelValue","options"])]),_:1}),u(I,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),Yn={class:"flex flex-col gap-2"},Xn=S({__name:"HighlightPanel",props:{highlights:{}},setup(e){const n=e,t=$(),{addHighlight:a}=t;return(l,o)=>{const r=F,p=j;return s(),h(p,{header:"Highlight slots & modules"},{default:w(()=>[f("div",Yn,[(s(!0),m(M,null,N(n.highlights,(c,i)=>(s(),m("div",{key:c.id},[u(Zn,{highlight:c,index:i},null,8,["highlight","index"])]))),128))]),u(r,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:g(a)},null,8,["onClick"])]),_:1})}}}),Jn={class:"flex flex-col gap-2"},Qn={class:"flex items-center"},eo={class:"flex items-center justify-end gap-2 mb-8 mt-4"},to=S({__name:"StepEditor",setup(e){const{locale:n}=le(),t=Ze(),a=$(),{lesson:l,stepIndex:o}=ee(a),{removeStep:r}=a,p=_(!1),c=_(!1),i=Be(()=>{var x;return o.value==null?null:((x=l.value)==null?void 0:x.steps[o.value])??null});async function d(){if(!(p.value||i.value==null)){p.value=!0;try{await G.updateStepTranslationByID(i.value.id,n.value,i.value.title,i.value.inner)}catch(x){alert(x)}finally{p.value=!1}}}function b(){t.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{y()}})}async function y(){if(!(c.value||i.value==null)){c.value=!0;try{await G.deleteStepByID(i.value.id),r()}catch(x){alert(x)}finally{c.value=!1}}}return(x,k)=>{const I=X,V=Se,Q=ae,U=j,te=F;return i.value?(s(),m("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:i.value.id},[u(U,{header:"Info",class:"mb-2"},{default:w(()=>[f("div",Jn,[f("div",Qn,[u(V,{variant:"on",class:"w-full"},{default:w(()=>[k[1]||(k[1]=f("label",{for:"title"},"Title",-1)),u(I,{id:"title",modelValue:i.value.title,"onUpdate:modelValue":k[0]||(k[0]=ne=>i.value.title=ne),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),u(Q,{size:"small",severity:"secondary",variant:"simple"},{default:w(()=>[q(E(i.value.type),1)]),_:1})])]),_:1}),u(g(_n),{contents:i.value.inner.contents,"step-type":i.value.type,class:"mb-2"},null,8,["contents","step-type"]),i.value.type=="code"?(s(),h(g(Hn),{key:0,starting:i.value.inner.starting,class:"mb-2"},null,8,["starting"])):C("",!0),i.value.type=="code"?(s(),h(g(jn),{key:1,solution:i.value.inner.solution,class:"mb-2"},null,8,["solution"])):C("",!0),i.value.type=="code"?(s(),h(g(Xn),{key:2,highlights:i.value.inner.highlights,class:"mb-2"},null,8,["highlights"])):C("",!0),i.value.type=="question"?(s(),h(g(zn),{key:3,options:i.value.inner.options,class:"mb-2"},null,8,["options"])):C("",!0),i.value.type=="matching"?(s(),h(g(Un),{key:4,pairs:i.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):C("",!0),i.value.type=="open"?(s(),h(g(un),{key:5,answer:i.value.inner.answer,class:"mb-2"},null,8,["answer"])):C("",!0),u(g(Kn),{"user-action":i.value.inner.userAction,"platform-action":i.value.inner.platformAction},null,8,["user-action","platform-action"]),f("div",eo,[u(te,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:b,loading:c.value,disabled:c.value},null,8,["loading","disabled"]),u(te,{label:"Save",icon:"pi pi-save",severity:"info",size:"small",onClick:d,loading:p.value,disabled:p.value},null,8,["loading","disabled"])])])):C("",!0)}}});async function _e(e,n,t){const{data:a}=await G.getStepTranslationByID(e.id.toString(),n),l=a;return{id:e.id.toString(),title:l.name,type:e.step_type,progress:"nothing",inner:t||l.content.contents==null?{contents:[]}:l.content}}const no={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},oo={class:"flex flex-1 items-center"},lo={key:1,class:"flex items-center gap-1"},ao={class:"flex items-center gap-1"},io={class:"flex flex-1 justify-end items-center gap-2"},so={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},ro={class:"inline-flex flex-col items-start"},uo={class:"font-bold"},po={class:"text-sm"},co={class:"flex justify-between items-center mb-8"},fo={class:"flex justify-end gap-2"},mo=S({__name:"EditorHeader",setup(e){const{locale:n}=le(),t=Ye(),a=$e(),l=Xe(),{user:o}=ee(l),r=$(),{lesson:p,stepIndex:c}=ee(r),{changeStep:i,addStep:d,setSteps:b}=r,y=_(!1),x=_(!1),k=_(!1),I=_(null),V=_(["article","code","matching","open","question"]);function Q(L){switch(L){case"article":return"pi pi-align-left";case"code":return"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function U(){if(!x.value){x.value=!0;try{const{data:L}=await G.getProjectStepsByID(a.params.id.toString()),B=[];for(const re of L){const O=await _e(re,n.value,!1);B.push(O)}b(B)}catch(L){alert(L)}finally{x.value=!1}}}z(U),A(n,U,{immediate:!0});async function te(){if(I.value){k.value=!0;try{const{data:L}=await G.createStep(I.value),B=await _e(L,n.value,!0);await G.linkStepToProjectByID(a.params.id.toString(),L.id),d(I.value,B)}catch(L){alert(L)}finally{k.value=!1,y.value=!1}}}const ne=_(),De=_([{label:"Log out",icon:"pi pi-sign-out",command:()=>{l.logout(),t.replace({name:"login"})}}]),Te=L=>{ne.value.toggle(L)};return(L,B)=>{const re=me,O=F,Ue=we,Ee=Fe,Me=fe,je=Je,Re=de;return s(),m(M,null,[f("div",no,[f("div",oo,[u(re,{src:g(tt),width:"32"},null,8,["src"]),B[5]||(B[5]=f("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),u(O,{id:"#projects",icon:"pi pi-angle-left",label:L.$t("projects"),severity:"secondary",variant:"text",onClick:B[0]||(B[0]=D=>g(t).push({name:"projects"})),size:"small"},null,8,["label"])]),x.value||g(p)==null?(s(),h(Ue,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):(s(),m("div",lo,[f("div",ao,[(s(!0),m(M,null,N(g(p).steps,(D,W)=>(s(),h(O,{key:D.id,icon:Q(D.type),rounded:"",severity:g(c)==W?void 0:"secondary",variant:g(c)==W?void 0:"outlined",onClick:$o=>g(i)(W),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128))]),u(O,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:B[1]||(B[1]=D=>y.value=!0)})])),f("div",io,[u(et),u(O,{type:"button",icon:"pi pi-ellipsis-v",onClick:Te,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),u(Ee,{ref_key:"menu",ref:ne,id:"overlay_menu",model:De.value,popup:!0},{start:w(()=>{var D,W;return[ke((s(),m("button",so,[f("span",ro,[f("span",uo,E((D=g(o))==null?void 0:D.email),1),f("span",po,E((W=g(o))==null?void 0:W.user_type),1)])])),[[Re]])]}),_:1},8,["model"])])]),u(je,{visible:y.value,"onUpdate:visible":B[4]||(B[4]=D=>y.value=D),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:w(()=>[f("div",co,[B[6]||(B[6]=f("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),u(Me,{modelValue:I.value,"onUpdate:modelValue":B[2]||(B[2]=D=>I.value=D),options:V.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),f("div",fo,[u(O,{type:"button",label:"Cancel",severity:"secondary",onClick:B[3]||(B[3]=D=>y.value=!1)}),u(O,{type:"button",label:"+ Add",onClick:te,loading:k.value,disabled:k.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),ho={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},vo={key:0},go={key:1,class:"flex"},bo=S({__name:"LessonPreview",setup(e){const n=$(),{lesson:t,stepIndex:a}=ee(n),{changeStep:l}=n,o=Be(()=>{var c;return a.value==null?null:((c=t.value)==null?void 0:c.steps[a.value])??null});async function r(){a.value!=null&&l(a.value-1)}async function p(){a.value!=null&&l(a.value+1)}return(c,i)=>{const d=F;return s(),m("div",ho,[o.value?(s(),m("div",vo,[o.value.type=="article"?(s(),h(g(lt),{key:0,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="code"?(s(),h(g(at),{key:1,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="matching"?(s(),h(g(it),{key:2,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="open"?(s(),h(g(st),{key:3,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="question"?(s(),h(g(rt),{key:4,step:o.value,isPreview:!0},null,8,["step"])):C("",!0)])):C("",!0),g(t)!=null&&g(t).steps!=null&&g(t).steps.length>0&&o.value?(s(),m("div",go,[g(a)!==0?(s(),h(d,{key:0,label:"Previous",icon:"pi pi-angle-left",size:"small",onClick:r})):C("",!0),g(a)<g(t).steps.length-1?(s(),h(d,{key:1,label:"Next",icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:p})):C("",!0)])):C("",!0)])}}}),yo={key:1,class:"h-[51px]"},_o={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 58px)"}},wo={class:"max-w-[320px] w-full bg-white"},Co={key:0,class:"p-4"},xo={class:"flex-grow border-l"},ko={class:"border-l max-w-[400px] w-full"},Bo=S({__name:"EditorView",setup(e){const{locale:n}=le(),t=$e(),a=$(),{setLesson:l}=a,o=_(!1);async function r(){if(!o.value){o.value=!0;try{const{data:p}=await pe.getProjectByID(t.params.id.toString()),c=await Oe(p,n.value);l(c)}catch(p){alert(p)}finally{o.value=!1}}}return z(r),A(n,r),(p,c)=>{const i=we;return s(),m(M,null,[o.value?(s(),m("div",yo)):(s(),h(mo,{key:0})),f("div",_o,[f("div",wo,[o.value?(s(),m("div",Co,[u(i,{height:"192px"}),c[0]||(c[0]=f("br",null,null,-1)),u(i,{height:"32px"}),c[1]||(c[1]=f("br",null,null,-1)),u(i,{height:"32px"})])):(s(),h(Qt,{key:1}))]),f("div",xo,[o.value?C("",!0):(s(),h(to,{key:0}))]),f("div",ko,[o.value?C("",!0):(s(),h(bo,{key:0}))])])],64)}}}),Eo=J(Bo,[["__scopeId","data-v-664f3809"]]);export{Eo as default};
