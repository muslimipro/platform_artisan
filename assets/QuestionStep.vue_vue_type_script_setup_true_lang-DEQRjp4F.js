import{h as p}from"./http-B1ARadxs.js";import{d as m,a6 as v,o as i,c as l,F as k,k as y,h as f,a as s,j as $,t as h,b,n as w,w as z,i as T,r as C,W as P,v as x,X as V,az as j,aI as A,aF as O,U as F,ag as G,y as D,l as N}from"./index-CxyCel7M.js";import{s as M}from"./index-BAOoh0gY.js";import{_ as L,u as q}from"./store-BFum4a5U.js";import{s as U,a as E}from"./index-oCkN5M1f.js";import{s as H}from"./logo-Ba5PqW90.js";const W={getSteps:Q,createStep:X,getStepByID:Z,updateStepByID:J,deleteStepByID:K,getStepTranslationByID:R,updateStepTranslationByID:Y,getProjectStepsByID:ee,linkStepToProjectByID:te,getModuleStepsByID:ne,linkStepToModuleByID:oe,uploadFile:ce,changeStepsOrder:re};async function Q(){try{return await p.get("/steps")}catch(t){throw console.log(t),t}}async function X(t){try{return await p.post("/step",{last_edited_by:0,step_type:t})}catch(n){throw console.log(n),n}}async function Z(t){try{return await p.get(`/step/${t}`)}catch(n){throw console.log(n),n}}async function J(t){try{return await p.put(`/step/${t}`,{})}catch(n){throw console.log(n),n}}async function K(t){try{return await p.delete(`/step/${t}`)}catch(n){throw console.log(n),n}}async function R(t,n){try{return await p.get(`/step/${t}/translation/${n}`)}catch(e){throw console.log(e),e}}async function Y(t,n,e,r){try{return await p.put(`/step/${t}/translation/${n}`,{content:r,name:e})}catch(o){throw console.log(o),o}}async function ee(t){try{return await p.get(`/project/${t}/steps`)}catch(n){throw console.log(n),n}}async function te(t,n){try{return await p.post(`/project/${t}/step/${n}/link`)}catch(e){throw console.log(e),e}}async function ne(t){try{return await p.get(`/module/${t}/steps`)}catch(n){throw console.log(n),n}}async function oe(t,n){try{return await p.post(`/module/${t}/step/${n}/link`)}catch(e){throw console.log(e),e}}async function ce(t){try{return await p.post("/upload-file",t,{headers:{"Content-Type":"multipart/form-data"}})}catch(n){throw console.log(n),n}}async function re(t){try{return await p.patch("/steps/order",{order:t})}catch(n){throw console.log(n),n}}async function Qe(t,n,e){const{data:r}=await W.getStepTranslationByID(t.id.toString(),n),o=r;return{id:t.id.toString(),title:o.name,type:t.step_type,progress:"nothing",inner:e||o.content.contents==null?{contents:[]}:o.content}}const ie={class:"flex flex-col gap-2"},ae={key:1},se={key:0,style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},le=["src"],de={key:1,style:{position:"relative","margin-left":"5%",width:"90%",height:"0","padding-bottom":"160%"}},pe=["src"],g=m({__name:"ContentsView",props:{contents:{}},setup(t){const n=t;function e(r){return r.replace("shorts","embed")}return(r,o)=>{const c=v("v-md-preview"),d=H;return i(),l("div",ie,[(i(!0),l(k,null,y(n.contents,a=>{var u;return i(),l("div",{key:a.id},[a.type=="text"?(i(),f(c,{key:0,text:a.text},null,8,["text"])):a.type=="video"?(i(),l("div",ae,[(u=a.text)!=null&&u.includes("embed")?(i(),l("div",se,[s("iframe",{credentialless:"",src:e(a.text),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,le),o[0]||(o[0]=s("iframe",null,null,-1))])):(i(),l("div",de,[s("iframe",{credentialless:"",src:e(a.text??""),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,pe)]))])):a.type=="image"?(i(),f(d,{key:2,src:a.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):$("",!0)])}),128))])}}}),ue={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Xe=m({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,r)=>(i(),l(k,null,[s("div",ue,h(n.step.title),1),b(g,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),he={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ze=m({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,r)=>(i(),l(k,null,[s("div",he,h(n.step.title),1),b(g,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),be={class:"flex flex-col gap-4"},xe={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},ke={class:"flex w-full justify-between"},fe={class:"flex flex-col gap-2"},me={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},ge={class:"content-center h-full"},ye={class:"flex flex-col gap-2"},ve=m({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t,e=w(()=>{var o;return(o=n.step.inner.pairs)==null?void 0:o.map(c=>c.key)}),r=w(()=>{var o;return(o=n.step.inner.pairs)==null?void 0:o.map(c=>c.value)});return(o,c)=>{const d=M;return i(),l("div",be,[s("div",xe,h(n.step.title),1),b(g,{contents:n.step.inner.contents},null,8,["contents"]),s("div",ke,[s("div",fe,[(i(!0),l(k,null,y(e.value,a=>(i(),l("div",{key:a,class:"flex flex-col"},[s("div",me,[s("div",ge,h(a),1)])]))),128))]),s("div",ye,[(i(!0),l(k,null,y(r.value,a=>(i(),l("div",{key:a,class:"flex flex-col"},[c[0]||(c[0]=s("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),b(d,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:z(()=>[T(h(a.length>0?a:"..."),1)]),_:2},1024)]))),128))])])])}}}),Je=L(ve,[["__scopeId","data-v-265024ce"]]),_e={class:"flex flex-col gap-4"},we={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ke=m({__name:"OpenStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t,e=C(null);return(r,o)=>{const c=U;return i(),l("div",_e,[s("div",we,h(n.step.title),1),b(g,{contents:n.step.inner.contents},null,8,["contents"]),n.isPreview?(i(),f(c,{key:0,type:"text",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])):(i(),f(c,{key:1,type:"text",modelValue:n.step.answer.open,"onUpdate:modelValue":o[1]||(o[1]=d=>n.step.answer.open=d),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]))])}}});var S={name:"MinusIcon",extends:P};function $e(t,n,e,r,o,c){return i(),l("svg",x({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[s("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}S.render=$e;var Ce=function(n){var e=n.dt;return`
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
`)},Se={root:function(n){var e=n.instance,r=n.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":r.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":r.size==="small","p-checkbox-lg p-inputfield-lg":r.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Be=V.extend({name:"checkbox",theme:Ce,classes:Se}),Ie={name:"BaseCheckbox",extends:E,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Be,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function ze(t){return je(t)||Ve(t)||Pe(t)||Te()}function Te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(t,n){if(t){if(typeof t=="string")return _(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_(t,n):void 0}}function Ve(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function je(t){if(Array.isArray(t))return _(t)}function _(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var B={name:"Checkbox",extends:Ie,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var e=this;if(!this.disabled&&!this.readonly){var r=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,o;this.binary?o=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?o=r.filter(function(c){return!j(c,e.value)}):o=r?[].concat(ze(r),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(o,n):this.writeValue(o,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,r;this.$emit("blur",n),(e=(r=this.formField).onBlur)===null||e===void 0||e.call(r,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:A(this.value,n)}},components:{CheckIcon:O,MinusIcon:S}},Ae=["data-p-checked","data-p-indeterminate","data-p-disabled"],Oe=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function Fe(t,n,e,r,o,c){var d=v("CheckIcon"),a=v("MinusIcon");return i(),l("div",x({class:t.cx("root")},c.getPTOptions("root"),{"data-p-checked":c.checked,"data-p-indeterminate":o.d_indeterminate||void 0,"data-p-disabled":t.disabled}),[s("input",x({id:t.inputId,type:"checkbox",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:c.groupName,checked:c.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,required:t.required,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,"aria-checked":o.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return c.onFocus&&c.onFocus.apply(c,arguments)}),onBlur:n[1]||(n[1]=function(){return c.onBlur&&c.onBlur.apply(c,arguments)}),onChange:n[2]||(n[2]=function(){return c.onChange&&c.onChange.apply(c,arguments)})},c.getPTOptions("input")),null,16,Oe),s("div",x({class:t.cx("box")},c.getPTOptions("box")),[F(t.$slots,"icon",{checked:c.checked,indeterminate:o.d_indeterminate,class:G(t.cx("icon"))},function(){return[c.checked?(i(),f(d,x({key:0,class:t.cx("icon")},c.getPTOptions("icon")),null,16,["class"])):o.d_indeterminate?(i(),f(a,x({key:1,class:t.cx("icon")},c.getPTOptions("icon")),null,16,["class"])):$("",!0)]})],16)],16,Ae)}B.render=Fe;const Ge={class:"flex flex-col gap-4"},De={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ne={class:"flex flex-col gap-4 ml-4"},Me=["for"],Re=m({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=q(),{saveOption:e}=n,r=t,o=C([]);return D([o],()=>{if(!r.isPreview&&!(r.step.inner.options==null||o.value==null))for(const[c,d]of r.step.inner.options.entries())e(o.value.some(a=>a==d.text),c)}),N(()=>{if(!r.isPreview&&!(r.step.inner.options==null||o.value==null)){o.value=[];for(const[c,d]of r.step.inner.options.entries())r.step.answer.question[c]&&o.value.push(d.text)}}),(c,d)=>{const a=B;return i(),l("div",Ge,[s("div",De,h(r.step.title),1),b(g,{contents:r.step.inner.contents},null,8,["contents"]),s("div",Ne,[(i(!0),l(k,null,y(r.step.inner.options,u=>(i(),l("div",{key:u.id,class:"flex items-center gap-2"},[b(a,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=I=>o.value=I),inputId:u.id,name:"option",value:u.text},null,8,["modelValue","inputId","value"]),s("label",{for:u.id},h(u.text),9,Me)]))),128))])])}}});export{Je as M,Xe as _,W as a,Ze as b,Ke as c,Re as d,B as e,S as s,Qe as t};
