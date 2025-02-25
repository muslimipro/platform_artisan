import{a as me}from"./index-CkQhOb_O.js";import{aQ as xe,ae as E,ag as ke,i as ve,h as k,q as F,d as A,o as l,c as u,F as C,n as L,k as w,a as h,m as G,r as U,t as v,b as $,w as ge,l as ye,Z as _e,y as S,_ as we,ao as Se,aR as Ce,aM as $e,X as Ae,aq as Ie,A as Be,f as Pe,u as K}from"./index-CN0vLODe.js";import{s as Te}from"./index-D2ilFsgG.js";import{_ as Ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as ze,a as Me}from"./index-LWceEU3M.js";import{s as je}from"./logo-Qfc1U5yA.js";import{d as Fe,f as Le,g as Ge}from"./index-D60eMmph.js";import{h as P}from"./index-B8UTu9zp.js";const Oe={submitStep:Ue,getStudentProjectStepsByID:Ne,getStudentStepTranslationByID:qe,resetStepsProgress:Re,saveStudentStepStateByID:Ee};async function Ne(t){try{return await P.get(`/student/project/${t}/steps`)}catch(n){throw console.log(n),n}}async function qe(t,n){try{return await P.get(`/student/step/${t}/language/${n}`)}catch(e){throw console.log(e),e}}async function Ee(t,n,e){try{return await P.put(`/student/step/${t.id}/language/${n}/save`,e)}catch(c){throw console.log(c),c}}async function Ue(t,n,e){try{return await P.put(`/student/step/${t}/language/${n}`,{student_answer:e})}catch(c){throw console.log(c),c}}async function Re(t){try{return await P.delete(`/project/${t}/reset`)}catch(n){throw console.log(n),n}}async function De(t,n){const{data:e}=await Oe.getStudentStepTranslationByID(t.id.toString(),n),c=e;return{id:t.id.toString(),title:c.name,type:t.step_type,progress:t.status,inner:c.content,answer:c.user_answer,state:c.step_state}}const We=xe("useLessonStore",()=>{const t=Fe(),{newModuleToSlot:n,clearSlots:e,reset:c}=t,{slots:o,moduleComponents:s,isConnected:d,isLoading:a}=E(t),{locale:m}=ke(),g=ve(),I=Le(),{fileContent:y}=E(I),{setCode:_}=I,Y=Ge(),{setStdout:ee,clear:D}=Y,p=k(null),b=k(null),O=k(!1),V=k(0),N=k(!0),z=k(!0),te=F(()=>N.value&&z.value),W=k(!1),H=k(!1),ne=F(()=>y.value);let M=0;function oe(r){r!=null&&(p.value=r)}function se(r){p.value!=null&&(p.value.steps=r,b.value!=null&&Q(b.value))}function ce(r){b.value=r}function re(r){p.value==null||b.value==null||(p.value.steps[b.value].progress=r)}function ie(r){V.value=r}function ae(){V.value=V.value+1}function le(r,f){p.value==null||b.value==null||p.value.steps[b.value].inner.options!=null&&(p.value.steps[b.value].inner.options[f].correct=r)}async function Q(r){var B,Z;if(p.value==null)return;b.value=r;const f=p.value.steps[b.value];if(f.title==""){O.value=!0;const x=await De({id:f.id,status:f.progress,step_type:f.type},m.value);p.value.steps[r]=x,O.value=!1}const i=p.value.steps[b.value];if(c(),e(),q(),_(""),D(),H.value=!(((B=i.inner.platformActions)==null?void 0:B.includes("hide-ide"))??!1),W.value=!(((Z=i.inner.platformActions)==null?void 0:Z.includes("hide-sim"))??!1),i.progress=="nothing"){if(i.inner.platformActions!=null&&i.inner.platformActions!=null&&i.inner.platformActions.length>0)for(const x of i.inner.platformActions){if(x=="code2ide"&&_(i.inner.starting??""),x=="auto-put"&&i.inner.highlights!=null)for(const j of i.inner.highlights)M++,n(j.module,j.slot);x=="auto-run"&&d.value&&!a.value&&(t.run(),g.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}if(i.inner.userActions!=null&&i.inner.userActions!=null&&i.inner.userActions.length>0)for(const x of i.inner.userActions)x=="put-module"&&(N.value=!1,e()),x=="run-code"&&(z.value=!1)}else{if(i.state==null||i.state==null)return;if(i.state.code!=null&&i.state.code!=null&&_(i.state.code),i.state.stdout!=null&&i.state.stdout!=null&&ee(i.state.stdout),i.state.slots!=null&&i.state.slots!=null)for(const[x,j]of i.state.slots.entries()){const fe=String.fromCharCode(65+x);n(j,fe)}}}function ue(r){p.value==null||b.value==null||(p.value.steps[b.value].state={code:r.code,stdout:r.stdout,slots:r.slots})}function de(){if(p.value==null||b.value==null)return;const r=p.value.steps[b.value];if(c(),e(),q(),_(""),D(),p.value.steps[b.value].state={code:"",stdout:"",slots:[]},r.inner.platformActions!=null&&r.inner.platformActions!=null&&r.inner.platformActions.length>0)for(const f of r.inner.platformActions){if(f=="code2ide"&&_(r.inner.starting??""),f=="auto-put"&&r.inner.highlights!=null)for(const i of r.inner.highlights)M++,n(i.module,i.slot);f=="auto-run"&&d.value&&!a.value&&(t.run(),g.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}}function pe(r,f){const i=(r??"A").charCodeAt(0)-65;o.value[i].class="bg-yellow-200/[0.5] shadow-lg shadow-yellow-500",o.value[i].style={backgroundColor:"rgba(0, 157, 255, 0.26)",boxShadow:"0 0 15px rgb(0, 157, 255)"},s.value.forEach(B=>{B.type==f&&(B.style={animation:"breathing 1s ease-out infinite normal",backgroundColor:"#ff0000",boxShadow:"0 0 15px rgb(0, 157, 255)",borderRadius:"10px"})})}function q(){for(let r=0;r<=5;r++)o.value[r].class="",o.value[r].style="";for(const r of s.value)r.class="",r.style=""}function he(){z.value=!0}function be(r,f){M<=0?r===f?g.add({severity:"success",summary:"Correct, good job!",detail:"Module has been put successfully",life:3e3}):g.add({severity:"error",summary:"Wrong!",detail:"Keep trying",life:3e3}):M--}return{lesson:p,stepIndex:b,stepLoading:O,userCode:ne,firstUncompletedIndex:V,submitEnabled:te,modulesWerePut:N,codeWasRun:z,simVisible:W,ideVisible:H,setLesson:oe,setSteps:se,setStepIndex:ce,updateStatus:re,changeStep:Q,runCodePressed:he,saveOption:le,setFirstUncompletedIndex:ie,incrementFirstUncompletedIndex:ae,lightUp:pe,clearSlotsModulesClasses:q,toastModulePut:be,saveStepStateLocally:ue,restartStep:de}});async function Ft(t,n,e){const{data:c}=await me.getStepTranslationByID(t.id.toString(),n),o=c;return{id:t.id.toString(),title:o.name,type:t.step_type,progress:"nothing",inner:e||o.content.contents==null?{contents:[],modules:[],skip_submit:!1}:o.content}}const He={class:"flex flex-col gap-2"},Qe={key:1},Ze={key:0,style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},Ke=["src"],Xe={key:1,style:{position:"relative","margin-left":"5%",width:"90%",height:"0","padding-bottom":"160%"}},Je=["src"],T=A({__name:"ContentsView",props:{contents:{}},setup(t){const n=t;function e(c){return c.replace("shorts","embed")}return(c,o)=>{const s=U("v-md-preview"),d=je;return l(),u("div",He,[(l(!0),u(C,null,L(n.contents,a=>{var m;return l(),u("div",{key:a.id},[a.type=="text"?(l(),w(s,{key:0,text:a.text},null,8,["text"])):a.type=="video"?(l(),u("div",Qe,[(m=a.text)!=null&&m.includes("embed")?(l(),u("div",Ze,[h("iframe",{credentialless:"",src:e(a.text),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Ke),o[0]||(o[0]=h("iframe",null,null,-1))])):(l(),u("div",Xe,[h("iframe",{credentialless:"",src:e(a.text??""),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Je)]))])):a.type=="image"?(l(),w(d,{key:2,src:a.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):G("",!0)])}),128))])}}}),Ye={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Lt=A({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,c)=>(l(),u(C,null,[h("div",Ye,v(n.step.title),1),$(T,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),et={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Gt=A({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,c)=>(l(),u(C,null,[h("div",et,v(n.step.title),1),$(T,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),tt={class:"flex flex-col gap-4"},nt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},ot={class:"flex w-full justify-between"},st={class:"flex flex-col gap-2"},ct={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},rt={class:"content-center h-full"},it={class:"flex flex-col gap-2"},at=A({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t,e=F(()=>{var o;return(o=n.step.inner.pairs)==null?void 0:o.map(s=>s.key)}),c=F(()=>{var o;return(o=n.step.inner.pairs)==null?void 0:o.map(s=>s.value)});return(o,s)=>{const d=Te;return l(),u("div",tt,[h("div",nt,v(n.step.title),1),$(T,{contents:n.step.inner.contents},null,8,["contents"]),h("div",ot,[h("div",st,[(l(!0),u(C,null,L(e.value,a=>(l(),u("div",{key:a,class:"flex flex-col"},[h("div",ct,[h("div",rt,v(a),1)])]))),128))]),h("div",it,[(l(!0),u(C,null,L(c.value,a=>(l(),u("div",{key:a,class:"flex flex-col"},[s[0]||(s[0]=h("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),$(d,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:ge(()=>[ye(v(a.length>0?a:"..."),1)]),_:2},1024)]))),128))])])])}}}),Ot=Ve(at,[["__scopeId","data-v-265024ce"]]),lt={class:"flex flex-col gap-4"},ut={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Nt=A({__name:"OpenStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t,e=k(null);return(c,o)=>{const s=ze;return l(),u("div",lt,[h("div",ut,v(n.step.title),1),$(T,{contents:n.step.inner.contents},null,8,["contents"]),n.isPreview?(l(),w(s,{key:0,type:"text",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])):(l(),w(s,{key:1,type:"text",modelValue:n.step.answer.open,"onUpdate:modelValue":o[1]||(o[1]=d=>n.step.answer.open=d),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]))])}}});var X={name:"MinusIcon",extends:_e};function dt(t,n,e,c,o,s){return l(),u("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[h("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}X.render=dt;var pt=function(n){var e=n.dt;return`
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
`)},ht={root:function(n){var e=n.instance,c=n.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":c.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":c.size==="small","p-checkbox-lg p-inputfield-lg":c.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},bt=we.extend({name:"checkbox",theme:pt,classes:ht}),ft={name:"BaseCheckbox",extends:Me,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:bt,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function mt(t){return gt(t)||vt(t)||kt(t)||xt()}function xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kt(t,n){if(t){if(typeof t=="string")return R(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?R(t,n):void 0}}function vt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gt(t){if(Array.isArray(t))return R(t)}function R(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,c=Array(n);e<n;e++)c[e]=t[e];return c}var J={name:"Checkbox",extends:ft,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var e=this;if(!this.disabled&&!this.readonly){var c=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,o;this.binary?o=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?o=c.filter(function(s){return!Se(s,e.value)}):o=c?[].concat(mt(c),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(o,n):this.writeValue(o,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,c;this.$emit("blur",n),(e=(c=this.formField).onBlur)===null||e===void 0||e.call(c,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:Ce(this.value,n)}},components:{CheckIcon:$e,MinusIcon:X}},yt=["data-p-checked","data-p-indeterminate","data-p-disabled"],_t=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function wt(t,n,e,c,o,s){var d=U("CheckIcon"),a=U("MinusIcon");return l(),u("div",S({class:t.cx("root")},s.getPTOptions("root"),{"data-p-checked":s.checked,"data-p-indeterminate":o.d_indeterminate||void 0,"data-p-disabled":t.disabled}),[h("input",S({id:t.inputId,type:"checkbox",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:s.groupName,checked:s.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,required:t.required,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,"aria-checked":o.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:n[1]||(n[1]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)}),onChange:n[2]||(n[2]=function(){return s.onChange&&s.onChange.apply(s,arguments)})},s.getPTOptions("input")),null,16,_t),h("div",S({class:t.cx("box")},s.getPTOptions("box")),[Ae(t.$slots,"icon",{checked:s.checked,indeterminate:o.d_indeterminate,class:Ie(t.cx("icon"))},function(){return[s.checked?(l(),w(d,S({key:0,class:t.cx("icon")},s.getPTOptions("icon")),null,16,["class"])):o.d_indeterminate?(l(),w(a,S({key:1,class:t.cx("icon")},s.getPTOptions("icon")),null,16,["class"])):G("",!0)]})],16)],16,yt)}J.render=wt;const St={class:"flex flex-col gap-4"},Ct={key:0,class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},$t={class:"flex flex-col gap-4 ml-4"},At=["for"],qt=A({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=We(),{lesson:e}=E(n),{saveOption:c}=n,o=t,s=k([]);return Be([s],()=>{if(!o.isPreview&&!(o.step.inner.options==null||s.value==null))for(const[d,a]of o.step.inner.options.entries())c(s.value.some(m=>m==a.text),d)}),Pe(()=>{var d;if(!o.isPreview&&!(o.step.inner.options==null||s.value==null)&&(s.value=[],(d=e.value)!=null&&d.is_guidable&&o.step.answer.question))for(const[a,m]of o.step.inner.options.entries())o.step.answer.question[a]&&s.value.push(m.text)}),(d,a)=>{var g,I;const m=J;return l(),u("div",St,[(g=K(e))!=null&&g.is_guidable?(l(),u("div",Ct,v(o.step.title),1)):G("",!0),(I=K(e))!=null&&I.is_guidable?(l(),w(T,{key:1,contents:o.step.inner.contents},null,8,["contents"])):G("",!0),h("div",$t,[(l(!0),u(C,null,L(o.step.inner.options,y=>(l(),u("div",{key:y.id,class:"flex items-center gap-2"},[$(m,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=_=>s.value=_),inputId:y.id,name:"option",value:y.text},null,8,["modelValue","inputId","value"]),h("label",{for:y.id},v(y.text),9,At)]))),128))])])}}});export{Ot as M,Lt as _,Oe as a,Ft as b,Gt as c,Nt as d,qt as e,X as f,J as s,De as t,We as u};
