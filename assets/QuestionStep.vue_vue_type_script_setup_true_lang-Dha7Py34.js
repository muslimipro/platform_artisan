import{a as fe}from"./index-BNTzXF58.js";import{aR as me,ar as xe,ag as ke,i as ve,ae as O,h as k,q as j,d as C,o as l,c as p,F as w,n as L,k as y,a as h,m as G,r as R,t as g,b as S,w as ge,l as ye,aP as _e,aO as we,Z as Se,y as _,_ as Ce,ao as $e,aS as Ae,aM as Ie,X as Be,aq as Pe,A as Ve,f as ze,u as X}from"./index-B44sbgom.js";import{s as Me}from"./index-CYYyC0Mi.js";import{_ as Te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as je,a as Le}from"./index-B_iG_Hws.js";import{s as Ge}from"./logo-C5OIO6yL.js";import{d as qe,f as Fe,g as Ne}from"./index-ChbGAM9M.js";import{h as P}from"./index-BTlblSkV.js";const Ee={submitStep:We,getStudentProjectStepsByID:Oe,getStudentStepTranslationByID:Re,resetStepsProgress:He,saveStudentStepStateByID:Ue};async function Oe(t){try{return await P.get(`/student/project/${t}/steps`)}catch(n){throw console.log(n),n}}async function Re(t,n){try{return await P.get(`/student/step/${t}/language/${n}`)}catch(e){throw console.log(e),e}}async function Ue(t,n,e){try{return await P.put(`/student/step/${t.id}/language/${n}/save`,e)}catch(s){throw console.log(s),s}}async function We(t,n,e){try{return await P.put(`/student/step/${t}/language/${n}`,{student_answer:e})}catch(s){throw console.log(s),s}}async function He(t){try{return await P.delete(`/project/${t}/reset`)}catch(n){throw console.log(n),n}}async function Ze(t,n){const{data:e}=await Ee.getStudentStepTranslationByID(t.id.toString(),n),s=e;return{id:t.id.toString(),title:s.name,type:t.step_type,progress:t.status,inner:s.content,answer:s.user_answer,state:s.step_state,access_type:t.access_type,accessibility:t.accessibility,skip_submit:t.skip_submit}}const Ke=me("useLessonStore",()=>{const t=xe(),{locale:n}=ke(),e=ve(),s=qe(),{newModuleToSlot:c,clearSlots:o,reset:b}=s,{slots:r,moduleComponents:m,isConnected:$,isLoading:A}=O(s),v=Fe(),{fileContent:q}=O(v),{setCode:I}=v,Y=Ne(),{setStdout:ee,clear:W}=Y,u=k(null),d=k(null),F=k(!1),N=k(!0),z=k(!0),te=j(()=>N.value&&z.value),H=k(!1),Z=k(!1),ne=j(()=>q.value);let M=0;function oe(i){i!=null&&(u.value=i)}function se(i){u.value!=null&&(u.value.steps=i,d.value!=null&&K(d.value))}function ce(i){d.value=i}function ie(i){u.value==null||d.value==null||(u.value.steps[d.value].progress=i)}function re(i){u.value==null||d.value==null||d.value+1!=u.value.steps.length&&(u.value.steps[d.value+1].accessibility=i)}function ae(i,f){u.value==null||d.value==null||u.value.steps[d.value].inner.options!=null&&(u.value.steps[d.value].inner.options[f].correct=i)}async function K(i){var B,Q;if(u.value==null)return;d.value=i;const f=u.value.steps[d.value];if(f.title==""){F.value=!0;const x=await Ze({id:f.id,status:f.progress,step_type:f.type,skip_submit:f.skip_submit,access_type:f.access_type,accessibility:f.accessibility},n.value);u.value.steps[i]=x,F.value=!1}const a=u.value.steps[d.value];if(b(),o(),E(),I(""),W(),Z.value=!(((B=a.inner.platformActions)==null?void 0:B.includes("hide-ide"))??!1),H.value=!(((Q=a.inner.platformActions)==null?void 0:Q.includes("hide-sim"))??!1),a.progress=="nothing"&&u.value.is_guidable||t.name=="module"){if(a.inner.platformActions!=null&&a.inner.platformActions!=null&&a.inner.platformActions.length>0)for(const x of a.inner.platformActions){if(x=="code2ide"&&I(a.inner.starting??""),x=="auto-put"&&a.inner.highlights!=null)for(const T of a.inner.highlights)M++,c(T.module,T.slot);x=="auto-run"&&$.value&&!A.value&&(s.run(),e.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}if(a.inner.userActions!=null&&a.inner.userActions!=null&&a.inner.userActions.length>0)for(const x of a.inner.userActions)x=="put-module"&&(N.value=!1,o()),x=="run-code"&&(z.value=!1)}else{if(a.state==null||a.state==null)return;if(a.state.code!=null&&a.state.code!=null&&I(a.state.code),a.state.stdout!=null&&a.state.stdout!=null&&ee(a.state.stdout),a.state.slots!=null&&a.state.slots!=null)for(const[x,T]of a.state.slots.entries()){const be=String.fromCharCode(65+x);c(T,be)}}}function le(i){u.value==null||d.value==null||(u.value.steps[d.value].state={code:i.code,stdout:i.stdout,slots:i.slots,answer:i.answer})}function ue(){if(u.value==null||d.value==null)return;const i=u.value.steps[d.value];if(b(),o(),E(),I(""),W(),u.value.steps[d.value].state={code:"",stdout:"",slots:[],answer:{open:"",question:[]}},i.inner.platformActions!=null&&i.inner.platformActions!=null&&i.inner.platformActions.length>0)for(const f of i.inner.platformActions){if(f=="code2ide"&&I(i.inner.starting??""),f=="auto-put"&&i.inner.highlights!=null)for(const a of i.inner.highlights)M++,c(a.module,a.slot);f=="auto-run"&&$.value&&!A.value&&(s.run(),e.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}}function de(i,f){const a=(i??"A").charCodeAt(0)-65;r.value[a].class="bg-yellow-200/[0.5] shadow-lg shadow-yellow-500",r.value[a].style={backgroundColor:"rgba(0, 157, 255, 0.26)",boxShadow:"0 0 15px rgb(0, 157, 255)"},m.value.forEach(B=>{B.type==f&&(B.style={animation:"breathing 1s ease-out infinite normal",backgroundColor:"#ff0000",boxShadow:"0 0 15px rgb(0, 157, 255)",borderRadius:"10px"})})}function E(){for(let i=0;i<=5;i++)r.value[i].class="",r.value[i].style="";for(const i of m.value)i.class="",i.style=""}function pe(){z.value=!0}function he(i,f){M<=0?i===f?e.add({severity:"success",summary:"Correct, good job!",detail:"Module has been put successfully",life:3e3}):e.add({severity:"error",summary:"Wrong!",detail:"Keep trying",life:3e3}):M--}return{lesson:u,stepIndex:d,stepLoading:F,userCode:ne,submitEnabled:te,modulesWerePut:N,codeWasRun:z,simVisible:H,ideVisible:Z,setLesson:oe,setSteps:se,setStepIndex:ce,updateStatus:ie,updateAccess:re,changeStep:K,runCodePressed:pe,saveOption:ae,lightUp:de,clearSlotsModulesClasses:E,toastModulePut:he,saveStepStateLocally:le,restartStep:ue}});async function qt(t,n,e){const{data:s}=await fe.getStepTranslationByID(t.id.toString(),n),c=s;return{id:t.id.toString(),title:c.name,type:t.step_type,progress:"nothing",inner:e||c.content.contents==null?{contents:[],modules:[]}:c.content,access_type:t.access_type,skip_submit:t.skip_submit}}const Qe={class:"flex flex-col gap-2"},Xe={key:1},De={key:0,style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},Je=["src"],Ye={key:1,style:{position:"relative","margin-left":"5%",width:"90%",height:"0","padding-bottom":"160%"}},et=["src"],V=C({__name:"ContentsView",props:{contents:{}},setup(t){const n=t;function e(s){return s.replace("shorts","embed")}return(s,c)=>{const o=R("v-md-preview"),b=Ge;return l(),p("div",Qe,[(l(!0),p(w,null,L(n.contents,r=>{var m;return l(),p("div",{key:r.id},[r.type=="text"?(l(),y(o,{key:0,text:r.text},null,8,["text"])):r.type=="video"?(l(),p("div",Xe,[(m=r.text)!=null&&m.includes("embed")?(l(),p("div",De,[h("iframe",{credentialless:"",src:e(r.text),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Je),c[0]||(c[0]=h("iframe",null,null,-1))])):(l(),p("div",Ye,[h("iframe",{credentialless:"",src:e(r.text??""),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,et)]))])):r.type=="image"?(l(),y(b,{key:2,src:r.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):G("",!0)])}),128))])}}}),tt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ft=C({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,s)=>(l(),p(w,null,[h("div",tt,g(n.step.title),1),S(V,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),nt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Nt=C({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t;return(e,s)=>(l(),p(w,null,[h("div",nt,g(n.step.title),1),S(V,{contents:n.step.inner.contents},null,8,["contents"])],64))}}),ot={class:"flex flex-col gap-4"},st={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},ct={class:"flex w-full justify-between"},it={class:"flex flex-col gap-2"},rt={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},at={class:"content-center h-full"},lt={class:"flex flex-col gap-2"},ut=C({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=t,e=j(()=>{var c;return(c=n.step.inner.pairs)==null?void 0:c.map(o=>o.key)}),s=j(()=>{var c;return(c=n.step.inner.pairs)==null?void 0:c.map(o=>o.value)});return(c,o)=>{const b=Me;return l(),p("div",ot,[h("div",st,g(n.step.title),1),S(V,{contents:n.step.inner.contents},null,8,["contents"]),h("div",ct,[h("div",it,[(l(!0),p(w,null,L(e.value,r=>(l(),p("div",{key:r,class:"flex flex-col"},[h("div",rt,[h("div",at,g(r),1)])]))),128))]),h("div",lt,[(l(!0),p(w,null,L(s.value,r=>(l(),p("div",{key:r,class:"flex flex-col"},[o[0]||(o[0]=h("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),S(b,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:ge(()=>[ye(g(r.length>0?r:"..."),1)]),_:2},1024)]))),128))])])])}}}),Et=Te(ut,[["__scopeId","data-v-265024ce"]]),dt={class:"flex flex-col gap-4"},pt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ot=C({__name:"OpenStep",props:_e({step:{},isPreview:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const n=we(t,"modelValue"),e=t,s=k(null);return(c,o)=>{const b=je;return l(),p("div",dt,[h("div",pt,g(e.step.title),1),S(V,{contents:e.step.inner.contents},null,8,["contents"]),e.isPreview?(l(),y(b,{key:0,type:"text",modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=r=>s.value=r),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])):(l(),y(b,{key:1,type:"text",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=r=>n.value=r),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]))])}}});var D={name:"MinusIcon",extends:Se};function ht(t,n,e,s,c,o){return l(),p("svg",_({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[h("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}D.render=ht;var bt=function(n){var e=n.dt;return`
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
`)},ft={root:function(n){var e=n.instance,s=n.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":s.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":s.size==="small","p-checkbox-lg p-inputfield-lg":s.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},mt=Ce.extend({name:"checkbox",theme:bt,classes:ft}),xt={name:"BaseCheckbox",extends:Le,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:mt,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function kt(t){return _t(t)||yt(t)||gt(t)||vt()}function vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(t,n){if(t){if(typeof t=="string")return U(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?U(t,n):void 0}}function yt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _t(t){if(Array.isArray(t))return U(t)}function U(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,s=Array(n);e<n;e++)s[e]=t[e];return s}var J={name:"Checkbox",extends:xt,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var e=this;if(!this.disabled&&!this.readonly){var s=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,c;this.binary?c=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?c=s.filter(function(o){return!$e(o,e.value)}):c=s?[].concat(kt(s),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(c,n):this.writeValue(c,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,s;this.$emit("blur",n),(e=(s=this.formField).onBlur)===null||e===void 0||e.call(s,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:Ae(this.value,n)}},components:{CheckIcon:Ie,MinusIcon:D}},wt=["data-p-checked","data-p-indeterminate","data-p-disabled"],St=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function Ct(t,n,e,s,c,o){var b=R("CheckIcon"),r=R("MinusIcon");return l(),p("div",_({class:t.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-indeterminate":c.d_indeterminate||void 0,"data-p-disabled":t.disabled}),[h("input",_({id:t.inputId,type:"checkbox",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:o.groupName,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,required:t.required,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,"aria-checked":c.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:n[2]||(n[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,St),h("div",_({class:t.cx("box")},o.getPTOptions("box")),[Be(t.$slots,"icon",{checked:o.checked,indeterminate:c.d_indeterminate,class:Pe(t.cx("icon"))},function(){return[o.checked?(l(),y(b,_({key:0,class:t.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):c.d_indeterminate?(l(),y(r,_({key:1,class:t.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):G("",!0)]})],16)],16,wt)}J.render=Ct;const $t={class:"flex flex-col gap-4"},At={key:0,class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},It={class:"flex flex-col gap-4 ml-4"},Bt=["for"],Rt=C({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(t){const n=Ke(),{lesson:e}=O(n),{saveOption:s}=n,c=t,o=k([]);return Ve([o],()=>{if(!c.isPreview&&!(c.step.inner.options==null||o.value==null))for(const[b,r]of c.step.inner.options.entries())s(o.value.some(m=>m==r.text),b)}),ze(()=>{var b;if(!c.isPreview&&!(c.step.inner.options==null||o.value==null)&&(o.value=[],(b=e.value)!=null&&b.is_guidable&&c.step.answer.question))for(const[r,m]of c.step.inner.options.entries())c.step.answer.question[r]&&o.value.push(m.text)}),(b,r)=>{var $,A;const m=J;return l(),p("div",$t,[($=X(e))!=null&&$.is_guidable?(l(),p("div",At,g(c.step.title),1)):G("",!0),(A=X(e))!=null&&A.is_guidable?(l(),y(V,{key:1,contents:c.step.inner.contents},null,8,["contents"])):G("",!0),h("div",It,[(l(!0),p(w,null,L(c.step.inner.options,v=>(l(),p("div",{key:v.id,class:"flex items-center gap-2"},[S(m,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=q=>o.value=q),inputId:v.id,name:"option",value:v.text},null,8,["modelValue","inputId","value"]),h("label",{for:v.id},g(v.text),9,Bt)]))),128))])])}}});export{Et as M,Ft as _,Ee as a,qt as b,Nt as c,Ot as d,Rt as e,D as f,J as s,Ze as t,Ke as u};
