import{h as p}from"./index-BNIQajTb.js";import{d as m,o as i,c as s,F as k,l as v,i as b,a as l,k as _,r as w,t as h,b as f,p as B,w as O,j,h as z,X as A,x,Y as F,an as G,aO as D,aK as N,V as M,ap as L,ad as q,z as E,m as U,u as I}from"./index-BGDblIW0.js";import{s as H}from"./index-IAmpqgBn.js";import{_ as K,u as Q}from"./index-BKYtfxJU.js";import{s as R,a as W}from"./index-CVLZgaYp.js";import{s as X}from"./logo-Cv8-7bgr.js";const Y={getSteps:Z,createStep:J,getStepByID:ee,updateStepByID:te,deleteStepByID:ne,getStepTranslationByID:oe,updateStepTranslationByID:ce,getProjectStepsByID:re,linkStepToProjectByID:ie,getModuleStepsByID:ae,linkStepToModuleByID:se,uploadFile:le,changeStepsOrder:de};async function Z(){try{return await p.get("/steps")}catch(t){throw console.log(t),t}}async function J(t){try{return await p.post("/step",{last_edited_by:0,step_type:t})}catch(n){throw console.log(n),n}}async function ee(t){try{return await p.get(`/step/${t}`)}catch(n){throw console.log(n),n}}async function te(t){try{return await p.put(`/step/${t}`,{})}catch(n){throw console.log(n),n}}async function ne(t){try{return await p.delete(`/step/${t}`)}catch(n){throw console.log(n),n}}async function oe(t,n){try{return await p.get(`/step/${t}/translation/${n}`)}catch(e){throw console.log(e),e}}async function ce(t,n,e,r){try{return await p.put(`/step/${t}/translation/${n}`,{content:r,name:e})}catch(o){throw console.log(o),o}}async function re(t){try{return await p.get(`/project/${t}/steps`)}catch(n){throw console.log(n),n}}async function ie(t,n){try{return await p.post(`/project/${t}/step/${n}/link`)}catch(e){throw console.log(e),e}}async function ae(t){try{return await p.get(`/module/${t}/steps`)}catch(n){throw console.log(n),n}}async function se(t,n){try{return await p.post(`/module/${t}/step/${n}/link`)}catch(e){throw console.log(e),e}}async function le(t){try{return await p.post("/upload-file",t,{headers:{"Content-Type":"multipart/form-data"}})}catch(n){throw console.log(n),n}}async function de(t){try{return await p.patch("/steps/order",{order:t})}catch(n){throw console.log(n),n}}async function Ze(t,n,e){const{data:r}=await Y.getStepTranslationByID(t.id.toString(),n),o=r;return{id:t.id.toString(),title:o.name,type:t.step_type,progress:"nothing",inner:e||o.content.contents==null?{contents:[],modules:[]}:o.content}}const pe={class:"flex flex-col gap-2"},ue={key:1},he={key:0,style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},be=["src"],xe={key:1,style:{position:"relative","margin-left":"5%",width:"90%",height:"0","padding-bottom":"160%"}},ke=["src"],y=m({__name:"ContentsView",props:{contents:{}},setup(t){const n=t;function e(r){return r.replace("shorts","embed")}return(r,o)=>{const c=w("v-md-preview"),d=X;return i(),s("div",pe,[(i(!0),s(k,null,v(n.contents,a=>{var u;return i(),s("div",{key:a.id},[a.type=="text"?(i(),b(c,{key:0,text:a.text},null,8,["text"])):a.type=="video"?(i(),s("div",ue,[(u=a.text)!=null&&u.includes("embed")?(i(),s("div",he,[l("iframe",{credentialless:"",src:e(a.text),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,be),o[0]||(o[0]=l("iframe",null,null,-1))])):(i(),s("div",xe,[l("iframe",{credentialless:"",src:e(a.text??""),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,ke)]))])):a.type=="image"?(i(),b(d,{key:2,src:a.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):_("",!0)])}),128))])}}}),fe={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Je=m({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,r)=>(i(),s(k,null,[l("div",fe,h(n.step.title),1),f(y,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),me={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},et=m({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,r)=>(i(),s(k,null,[l("div",me,h(n.step.title),1),f(y,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),ge={class:"flex flex-col gap-4"},ye={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},ve={class:"flex w-full justify-between"},_e={class:"flex flex-col gap-2"},we={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},$e={class:"content-center h-full"},Ce={class:"flex flex-col gap-2"},Se=m({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t,e=B(()=>{var o;return(o=n.step.inner.pairs)==null?void 0:o.map(c=>c.key)}),r=B(()=>{var o;return(o=n.step.inner.pairs)==null?void 0:o.map(c=>c.value)});return(o,c)=>{const d=H;return i(),s("div",ge,[l("div",ye,h(n.step.title),1),f(y,{contents:n.step.inner.contents},null,8,["contents"]),l("div",ve,[l("div",_e,[(i(!0),s(k,null,v(e.value,a=>(i(),s("div",{key:a,class:"flex flex-col"},[l("div",we,[l("div",$e,h(a),1)])]))),128))]),l("div",Ce,[(i(!0),s(k,null,v(r.value,a=>(i(),s("div",{key:a,class:"flex flex-col"},[c[0]||(c[0]=l("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),f(d,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:O(()=>[j(h(a.length>0?a:"..."),1)]),_:2},1024)]))),128))])])])}}}),tt=K(Se,[["__scopeId","data-v-265024ce"]]),Be={class:"flex flex-col gap-4"},Ie={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},nt=m({__name:"OpenStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t,e=z(null);return(r,o)=>{const c=R;return i(),s("div",Be,[l("div",Ie,h(n.step.title),1),f(y,{contents:n.step.inner.contents},null,8,["contents"]),n.isPreview?(i(),b(c,{key:0,type:"text",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])):(i(),b(c,{key:1,type:"text",modelValue:n.step.answer.open,"onUpdate:modelValue":o[1]||(o[1]=d=>n.step.answer.open=d),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]))])}}});var T={name:"MinusIcon",extends:A};function ze(t,n,e,r,o,c){return i(),s("svg",x({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[l("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}T.render=ze;var Te=function(n){var e=n.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
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
    border-radius: `).concat(e("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(e("checkbox.border.radius"),`;
    border: 1px solid `).concat(e("checkbox.border.color"),`;
    background: `).concat(e("checkbox.background"),`;
    width: `).concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
    transition: background `).concat(e("checkbox.transition.duration"),", color ").concat(e("checkbox.transition.duration"),", border-color ").concat(e("checkbox.transition.duration"),", box-shadow ").concat(e("checkbox.transition.duration"),", outline-color ").concat(e("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(e("checkbox.transition.duration"),`;
    color: `).concat(e("checkbox.icon.color"),`;
    font-size: `).concat(e("checkbox.icon.size"),`;
    width: `).concat(e("checkbox.icon.size"),`;
    height: `).concat(e("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(e("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.border.color"),`;
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
    border-color: `).concat(e("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.focus.border.color"),`;
    box-shadow: `).concat(e("checkbox.focus.ring.shadow"),`;
    outline: `).concat(e("checkbox.focus.ring.width")," ").concat(e("checkbox.focus.ring.style")," ").concat(e("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(e("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(e("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(e("checkbox.disabled.background"),`;
    border-color: `).concat(e("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.disabled.color"),`;
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: `).concat(e("checkbox.sm.width"),`;
    height: `).concat(e("checkbox.sm.height"),`;
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.sm.size"),`;
    width: `).concat(e("checkbox.icon.sm.size"),`;
    height: `).concat(e("checkbox.icon.sm.size"),`;
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: `).concat(e("checkbox.lg.width"),`;
    height: `).concat(e("checkbox.lg.height"),`;
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.lg.size"),`;
    width: `).concat(e("checkbox.icon.lg.size"),`;
    height: `).concat(e("checkbox.icon.lg.size"),`;
}
`)},Ve={root:function(n){var e=n.instance,r=n.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":r.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":r.size==="small","p-checkbox-lg p-inputfield-lg":r.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Pe=F.extend({name:"checkbox",theme:Te,classes:Ve}),Oe={name:"BaseCheckbox",extends:W,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Pe,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function je(t){return De(t)||Ge(t)||Fe(t)||Ae()}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(t,n){if(t){if(typeof t=="string")return $(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?$(t,n):void 0}}function Ge(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function De(t){if(Array.isArray(t))return $(t)}function $(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var V={name:"Checkbox",extends:Oe,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var e=this;if(!this.disabled&&!this.readonly){var r=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,o;this.binary?o=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?o=r.filter(function(c){return!G(c,e.value)}):o=r?[].concat(je(r),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(o,n):this.writeValue(o,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,r;this.$emit("blur",n),(e=(r=this.formField).onBlur)===null||e===void 0||e.call(r,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:D(this.value,n)}},components:{CheckIcon:N,MinusIcon:T}},Ne=["data-p-checked","data-p-indeterminate","data-p-disabled"],Me=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function Le(t,n,e,r,o,c){var d=w("CheckIcon"),a=w("MinusIcon");return i(),s("div",x({class:t.cx("root")},c.getPTOptions("root"),{"data-p-checked":c.checked,"data-p-indeterminate":o.d_indeterminate||void 0,"data-p-disabled":t.disabled}),[l("input",x({id:t.inputId,type:"checkbox",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:c.groupName,checked:c.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,required:t.required,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,"aria-checked":o.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return c.onFocus&&c.onFocus.apply(c,arguments)}),onBlur:n[1]||(n[1]=function(){return c.onBlur&&c.onBlur.apply(c,arguments)}),onChange:n[2]||(n[2]=function(){return c.onChange&&c.onChange.apply(c,arguments)})},c.getPTOptions("input")),null,16,Me),l("div",x({class:t.cx("box")},c.getPTOptions("box")),[M(t.$slots,"icon",{checked:c.checked,indeterminate:o.d_indeterminate,class:L(t.cx("icon"))},function(){return[c.checked?(i(),b(d,x({key:0,class:t.cx("icon")},c.getPTOptions("icon")),null,16,["class"])):o.d_indeterminate?(i(),b(a,x({key:1,class:t.cx("icon")},c.getPTOptions("icon")),null,16,["class"])):_("",!0)]})],16)],16,Ne)}V.render=Le;const qe={class:"flex flex-col gap-4"},Ee={key:0,class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ue={class:"flex flex-col gap-4 ml-4"},He=["for"],ot=m({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=Q(),{lesson:e}=q(n),{saveOption:r}=n,o=t,c=z([]);return E([c],()=>{if(!o.isPreview&&!(o.step.inner.options==null||c.value==null))for(const[d,a]of o.step.inner.options.entries())r(c.value.some(u=>u==a.text),d)}),U(()=>{var d;if(!o.isPreview&&!(o.step.inner.options==null||c.value==null)&&(c.value=[],(d=e.value)!=null&&d.is_guidable))for(const[a,u]of o.step.inner.options.entries())o.step.answer.question[a]&&c.value.push(u.text)}),(d,a)=>{var C,S;const u=V;return i(),s("div",qe,[(C=I(e))!=null&&C.is_guidable?(i(),s("div",Ee,h(o.step.title),1)):_("",!0),(S=I(e))!=null&&S.is_guidable?(i(),b(y,{key:1,contents:o.step.inner.contents},null,8,["contents"])):_("",!0),l("div",Ue,[(i(!0),s(k,null,v(o.step.inner.options,g=>(i(),s("div",{key:g.id,class:"flex items-center gap-2"},[f(u,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=P=>c.value=P),inputId:g.id,name:"option",value:g.text},null,8,["modelValue","inputId","value"]),l("label",{for:g.id},h(g.text),9,He)]))),128))])])}}});export{tt as M,Je as _,Y as a,et as b,nt as c,ot as d,T as e,V as s,Ze as t};
