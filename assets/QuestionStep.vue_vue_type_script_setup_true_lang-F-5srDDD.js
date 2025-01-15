import{h as b}from"./http-CLrmqCzG.js";import{ab as m,S as w,D as i,E as r,a3 as f,a9 as g,V as y,X as I,I as d,Y as h,T as l,c as $,_ as j,ag as N,ah as S,e as B,H as A,m as p,J as z,ax as T,aI as R,F as D,ak as L}from"./index-RW0gPhT6.js";import{s as q}from"./index-dZ05eilR.js";import{_ as M}from"./_plugin-vue_export-helper-6uhltXGq.js";import{s as E,b as H,a as G}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-DLeo4-HJ.js";import{b as U}from"./logo-B6ezLIKK.js";const Z={getSteps:Y,createStep:J,getStepByID:Q,updateStepByID:W,deleteStepByID:X,getStepTranslationByID:K,updateStepTranslationByID:nn,linkStepToProjectByID:en,unlinkStepFromProjectByID:on,getProjectStepsByID:tn};async function Y(){try{return await b.get("/steps")}catch(t){throw console.log(t),t}}async function J(t){try{return await b.post("/step",{last_edited_by:0,step_type:t})}catch(e){throw console.log(e),e}}async function Q(t){try{return await b.get(`/step/${t}`)}catch(e){throw console.log(e),e}}async function W(t){try{return await b.put(`/step/${t}`,{})}catch(e){throw console.log(e),e}}async function X(t){try{return await b.delete(`/step/${t}`)}catch(e){throw console.log(e),e}}async function K(t,e){try{return await b.get(`/step/${t}/translation/${e}`)}catch(n){throw console.log(n),n}}async function nn(t,e,n,c){try{return await b.put(`/step/${t}/translation/${e}`,{content:c,name:n})}catch(a){throw console.log(a),a}}async function tn(t){try{return await b.get(`/project/${t}/steps`)}catch(e){throw console.log(e),e}}async function en(t,e){try{return await b.post(`/project/${t}/step/${e}/link`)}catch(n){throw console.log(n),n}}async function on(t,e){try{return await b.delete(`/project/${t}/step/${e}/unlink`)}catch(n){throw console.log(n),n}}async function Wn(t,e,n){const{data:c}=await Z.getStepTranslationByID(t.id.toString(),e),a=c;return{id:t.id.toString(),title:a.name,type:t.step_type,progress:"nothing",inner:n||a.content.contents==null?{contents:[]}:a.content}}const cn={class:"flex flex-col gap-2"},an=["src"],v=m({__name:"ContentsView",props:{contents:{}},setup(t){const e=t;return(n,c)=>{const a=w("v-md-preview"),o=U;return i(),r("div",cn,[(i(!0),r(f,null,g(e.contents,s=>(i(),r("div",{key:s.id},[s.type=="text"?(i(),y(a,{key:0,text:s.text},null,8,["text"])):s.type=="video"?(i(),r("iframe",{key:1,width:"100%",height:"240",src:s.text,title:"YouTube video player",frameborder:"0",allow:"clipboard-write; encrypted-media; picture-in-picture",allowfullscreen:""},null,8,an)):s.type=="image"?(i(),y(o,{key:2,src:s.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):I("",!0)]))),128))])}}}),rn={class:"text-3xl font-semibold mb-4"},Xn=m({__name:"ArticleStep",props:{step:{}},setup(t){const e=t;return(n,c)=>(i(),r(f,null,[d("div",rn,h(e.step.title),1),l(v,{contents:e.step.inner.contents},null,8,["contents"])],64))}}),sn={class:"text-3xl font-semibold mb-4"},Kn=m({__name:"CodeStep",props:{step:{}},setup(t){const e=t;return(n,c)=>(i(),r(f,null,[d("div",sn,h(e.step.title),1),l(v,{contents:e.step.inner.contents},null,8,["contents"])],64))}}),dn={class:"flex flex-col gap-4"},ln={class:"text-3xl font-semibold mb-4"},un={class:"flex w-full justify-between"},pn={class:"flex flex-col gap-2"},bn={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},hn={class:"content-center h-full"},kn={class:"flex flex-col gap-2"},xn=m({__name:"MatchStep",props:{step:{}},setup(t){const e=t,n=$(()=>{var a;return(a=e.step.inner.pairs)==null?void 0:a.map(o=>o.key)}),c=$(()=>{var a;return(a=e.step.inner.pairs)==null?void 0:a.map(o=>o.value)});return(a,o)=>{const s=q,x=S;return i(),r("div",dn,[d("div",ln,h(e.step.title),1),l(v,{contents:e.step.inner.contents},null,8,["contents"]),d("div",un,[d("div",pn,[(i(!0),r(f,null,g(n.value,k=>(i(),r("div",{key:k,class:"flex flex-col"},[d("div",bn,[d("div",hn,h(k),1)])]))),128))]),d("div",kn,[(i(!0),r(f,null,g(c.value,k=>(i(),r("div",{key:k,class:"flex flex-col"},[o[0]||(o[0]=d("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),l(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:j(()=>[N(h(k.length>0?k:"..."),1)]),_:2},1024)]))),128))])]),l(x,{label:"Submit",icon:"pi pi-check",iconPos:"right",severity:"info",size:"small",class:"self-start"})])}}}),nt=M(xn,[["__scopeId","data-v-b7a34e6b"]]),fn={class:"flex flex-col gap-4"},mn={class:"text-3xl font-semibold mb-4"},tt=m({__name:"OpenStep",props:{step:{}},setup(t){const e=t,n=B(null);return(c,a)=>{const o=E,s=S;return i(),r("div",fn,[d("div",mn,h(e.step.title),1),l(v,{contents:e.step.inner.contents},null,8,["contents"]),l(o,{type:"text",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=x=>n.value=x),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]),l(s,{label:"Submit",icon:"pi pi-check",iconPos:"right",severity:"info",size:"small",class:"self-start"})])}}});var O={name:"MinusIcon",extends:A};function gn(t,e,n,c,a,o){return i(),r("svg",p({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[d("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}O.render=gn;var vn=function(e){var n=e.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("checkbox.width"),`;
    height: `).concat(n("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(n("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(n("checkbox.border.radius"),`;
    border: 1px solid `).concat(n("checkbox.border.color"),`;
    background: `).concat(n("checkbox.background"),`;
    width: `).concat(n("checkbox.width"),`;
    height: `).concat(n("checkbox.height"),`;
    transition: background `).concat(n("checkbox.transition.duration"),", color ").concat(n("checkbox.transition.duration"),", border-color ").concat(n("checkbox.transition.duration"),", box-shadow ").concat(n("checkbox.transition.duration"),", outline-color ").concat(n("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(n("checkbox.transition.duration"),`;
    color: `).concat(n("checkbox.icon.color"),`;
    font-size: `).concat(n("checkbox.icon.size"),`;
    width: `).concat(n("checkbox.icon.size"),`;
    height: `).concat(n("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(n("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(n("checkbox.checked.border.color"),`;
    background: `).concat(n("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(n("checkbox.checked.hover.background"),`;
    border-color: `).concat(n("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(n("checkbox.focus.border.color"),`;
    box-shadow: `).concat(n("checkbox.focus.ring.shadow"),`;
    outline: `).concat(n("checkbox.focus.ring.width")," ").concat(n("checkbox.focus.ring.style")," ").concat(n("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(n("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(n("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(n("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(n("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(n("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(n("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(n("checkbox.disabled.background"),`;
    border-color: `).concat(n("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.disabled.color"),`;
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: `).concat(n("checkbox.sm.width"),`;
    height: `).concat(n("checkbox.sm.height"),`;
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: `).concat(n("checkbox.icon.sm.size"),`;
    width: `).concat(n("checkbox.icon.sm.size"),`;
    height: `).concat(n("checkbox.icon.sm.size"),`;
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: `).concat(n("checkbox.lg.width"),`;
    height: `).concat(n("checkbox.lg.height"),`;
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: `).concat(n("checkbox.icon.lg.size"),`;
    width: `).concat(n("checkbox.icon.lg.size"),`;
    height: `).concat(n("checkbox.icon.lg.size"),`;
}
`)},yn={root:function(e){var n=e.instance,c=e.props;return["p-checkbox p-component",{"p-checkbox-checked":n.checked,"p-disabled":c.disabled,"p-invalid":n.$pcCheckboxGroup?n.$pcCheckboxGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-checkbox-sm p-inputfield-sm":c.size==="small","p-checkbox-lg p-inputfield-lg":c.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},_n=z.extend({name:"checkbox",theme:vn,classes:yn}),wn={name:"BaseCheckbox",extends:G,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:_n,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function $n(t){return In(t)||Sn(t)||Cn(t)||Bn()}function Bn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cn(t,e){if(t){if(typeof t=="string")return C(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}function Sn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function In(t){if(Array.isArray(t))return C(t)}function C(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,c=Array(e);n<e;n++)c[n]=t[n];return c}var P={name:"Checkbox",extends:wn,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(e){this.d_indeterminate=e}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(e){var n=this;if(!this.disabled&&!this.readonly){var c=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,a;this.binary?a=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?a=c.filter(function(o){return!T(o,n.value)}):a=c?[].concat($n(c),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(a,e):this.writeValue(a,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var n,c;this.$emit("blur",e),(n=(c=this.formField).onBlur)===null||n===void 0||n.call(c,e)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var e=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?e===this.trueValue:R(this.value,e)}},components:{CheckIcon:H,MinusIcon:O}},zn=["data-p-checked","data-p-indeterminate","data-p-disabled"],Tn=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function Gn(t,e,n,c,a,o){var s=w("CheckIcon"),x=w("MinusIcon");return i(),r("div",p({class:t.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-indeterminate":a.d_indeterminate||void 0,"data-p-disabled":t.disabled}),[d("input",p({id:t.inputId,type:"checkbox",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:o.groupName,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,required:t.required,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,"aria-checked":a.d_indeterminate?"mixed":void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:e[2]||(e[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Tn),d("div",p({class:t.cx("box")},o.getPTOptions("box")),[D(t.$slots,"icon",{checked:o.checked,indeterminate:a.d_indeterminate,class:L(t.cx("icon"))},function(){return[o.checked?(i(),y(s,p({key:0,class:t.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):a.d_indeterminate?(i(),y(x,p({key:1,class:t.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):I("",!0)]})],16)],16,zn)}P.render=Gn;var On=function(e){var n=e.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
}

.p-radiobutton-input {
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
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid `).concat(n("radiobutton.border.color"),`;
    background: `).concat(n("radiobutton.background"),`;
    width: `).concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
    transition: background `).concat(n("radiobutton.transition.duration"),", color ").concat(n("radiobutton.transition.duration"),", border-color ").concat(n("radiobutton.transition.duration"),", box-shadow ").concat(n("radiobutton.transition.duration"),", outline-color ").concat(n("radiobutton.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("radiobutton.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(n("radiobutton.transition.duration"),`;
    background: transparent;
    font-size: `).concat(n("radiobutton.icon.size"),`;
    width: `).concat(n("radiobutton.icon.size"),`;
    height: `).concat(n("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.hover.border.color"),`;
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.border.color"),`;
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.hover.border.color"),`;
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.focus.border.color"),`;
    box-shadow: `).concat(n("radiobutton.focus.ring.shadow"),`;
    outline: `).concat(n("radiobutton.focus.ring.width")," ").concat(n("radiobutton.focus.ring.style")," ").concat(n("radiobutton.focus.ring.color"),`;
    outline-offset: `).concat(n("radiobutton.focus.ring.offset"),`;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.focus.border.color"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(n("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(n("radiobutton.disabled.background"),`;
    border-color: `).concat(n("radiobutton.checked.disabled.border.color"),`;
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.disabled.color"),`;
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: `).concat(n("radiobutton.sm.width"),`;
    height: `).concat(n("radiobutton.sm.height"),`;
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: `).concat(n("radiobutton.icon.sm.size"),`;
    width: `).concat(n("radiobutton.icon.sm.size"),`;
    height: `).concat(n("radiobutton.icon.sm.size"),`;
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: `).concat(n("radiobutton.lg.width"),`;
    height: `).concat(n("radiobutton.lg.height"),`;
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: `).concat(n("radiobutton.icon.lg.size"),`;
    width: `).concat(n("radiobutton.icon.lg.size"),`;
    height: `).concat(n("radiobutton.icon.lg.size"),`;
}
`)},Pn={root:function(e){var n=e.instance,c=e.props;return["p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-disabled":c.disabled,"p-invalid":n.$pcRadioButtonGroup?n.$pcRadioButtonGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-radiobutton-sm p-inputfield-sm":c.size==="small","p-radiobutton-lg p-inputfield-lg":c.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Vn=z.extend({name:"radiobutton",theme:On,classes:Pn}),Fn={name:"BaseRadioButton",extends:G,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Vn,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},V={name:"RadioButton",extends:Fn,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var n=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(n,e):this.writeValue(n,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var n,c;this.$emit("blur",e),(n=(c=this.formField).onBlur)===null||n===void 0||n.call(c,e)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var e=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return e!=null&&(this.binary?!!e:T(e,this.value))}}},jn=["data-p-checked","data-p-disabled"],Nn=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function An(t,e,n,c,a,o){return i(),r("div",p({class:t.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-disabled":t.disabled}),[d("input",p({id:t.inputId,type:"radio",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:o.groupName,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:e[2]||(e[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Nn),d("div",p({class:t.cx("box")},o.getPTOptions("box")),[d("div",p({class:t.cx("icon")},o.getPTOptions("icon")),null,16)],16)],16,jn)}V.render=An;const Rn={class:"flex flex-col gap-4"},Dn={class:"text-3xl font-semibold mb-4"},Ln={key:0,class:"flex flex-col gap-4 ml-4"},qn=["for"],Mn={key:1,class:"flex flex-col gap-4 ml-4"},En=["for"],et=m({__name:"QuestionStep",props:{step:{}},setup(t){const e=t,n=$(()=>{var o;return((o=e.step.inner.options)==null?void 0:o.filter(s=>s.correct).length)??1}),c=B(null),a=B([]);return(o,s)=>{const x=V,k=P,F=S;return i(),r("div",Rn,[d("div",Dn,h(e.step.title),1),l(v,{contents:e.step.inner.contents},null,8,["contents"]),n.value==1?(i(),r("div",Ln,[(i(!0),r(f,null,g(e.step.inner.options,u=>(i(),r("div",{key:u.id,class:"flex items-center gap-2"},[l(x,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=_=>c.value=_),inputId:u.id,name:"dynamic",value:u.text},null,8,["modelValue","inputId","value"]),d("label",{for:u.id},h(u.text),9,qn)]))),128))])):(i(),r("div",Mn,[(i(!0),r(f,null,g(e.step.inner.options,u=>(i(),r("div",{key:u.id,class:"flex items-center gap-2"},[l(k,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=_=>a.value=_),inputId:u.id,name:"category",value:u.text},null,8,["modelValue","inputId","value"]),d("label",{for:u.id},h(u.text),9,En)]))),128))])),l(F,{label:"Submit",icon:"pi pi-check",iconPos:"right",severity:"info",size:"small",class:"self-start"})])}}});export{nt as M,Xn as _,Z as a,Kn as b,tt as c,et as d,P as e,O as s,Wn as t};
