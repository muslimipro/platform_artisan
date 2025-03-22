import{a as bt}from"./index-MicXTj-V.js";import{aR as ft,ar as ht,ag as mt,i as vt,ae as U,h as x,q as V,d as B,o as u,c,F as S,n as A,k as R,a as b,m as q,r as gt,t as w,b as $,w as yt,l as xt,aH as _t,aG as wt,_ as kt,ao as St,y as N,A as D,f as $t,u as J}from"./index-D3ENlnNp.js";import{s as Bt}from"./index-z7THtbTX.js";import{_ as Ct}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as Pt,a as Vt}from"./index-CVYngPYM.js";import{b as At}from"./types-CqbABMm_.js";import{s as Rt}from"./logo-CkWQkoMO.js";import{j as It,k as zt,n as Mt}from"./index-8y5gHu5i.js";import{h as I}from"./index-BplbRwNZ.js";const jt={submitStep:Nt,getStudentProjectStepsByID:Lt,getStudentStepTranslationByID:Ft,resetStepsProgress:Tt,saveStudentStepStateByID:Gt};async function Lt(n){try{return await I.get(`/student/project/${n}/steps`)}catch(e){throw console.log(e),e}}async function Ft(n,e){try{return await I.get(`/student/step/${n}/language/${e}`)}catch(t){throw console.log(t),t}}async function Gt(n,e,t){try{return await I.put(`/student/step/${n.id}/language/${e}/save`,t)}catch(i){throw console.log(i),i}}async function Nt(n,e,t){try{return await I.put(`/student/step/${n}/language/${e}`,{student_answer:t})}catch(i){throw console.log(i),i}}async function Tt(n){try{return await I.delete(`/project/${n}/reset`)}catch(e){throw console.log(e),e}}async function Et(n,e){const{data:t}=await jt.getStudentStepTranslationByID(n.id.toString(),e),i=t;return{id:n.id.toString(),title:i.name,type:n.step_type,progress:n.status,inner:i.content,answer:i.user_answer,state:i.step_state,access_type:n.access_type,accessibility:n.accessibility,skip_submit:n.skip_submit}}const Ot=ft("useLessonStore",()=>{const n=ht(),{locale:e}=mt(),t=vt(),i=It(),{newModuleToSlot:s,clearSlots:a,reset:h}=i,{slots:r,moduleComponents:m,isConnected:v,isLoading:_}=U(i),M=zt(),{fileContent:j}=U(M),{setCode:k}=M,g=Mt(),{setStdout:C,clear:W}=g,d=x(null),p=x(null),T=x(!1),E=x(!0),L=x(!0),Y=V(()=>E.value&&L.value),Z=x(!1),H=x(!1),tt=V(()=>j.value);let F=0;function et(o){o!=null&&(d.value=o)}function nt(o){d.value!=null&&(d.value.steps=o,p.value!=null&&K(p.value))}function ot(o){p.value=o}function it(o){d.value==null||p.value==null||(d.value.steps[p.value].progress=o)}function st(o){d.value==null||p.value==null||p.value+1!=d.value.steps.length&&(d.value.steps[p.value+1].accessibility=o)}function at(o,f){d.value==null||p.value==null||d.value.steps[p.value].inner.options!=null&&(d.value.steps[p.value].inner.options[f].correct=o)}async function K(o){var P,Q;if(d.value==null)return;p.value=o;const f=d.value.steps[p.value];if(f.title==""){T.value=!0;const y=await Et({id:f.id,status:f.progress,step_type:f.type,skip_submit:f.skip_submit,access_type:f.access_type,accessibility:f.accessibility},e.value);d.value.steps[o]=y,T.value=!1}const l=d.value.steps[p.value];if(h(),a(),O(),k(""),W(),H.value=!(((P=l.inner.platformActions)==null?void 0:P.includes("hide-ide"))??!1),Z.value=!(((Q=l.inner.platformActions)==null?void 0:Q.includes("hide-sim"))??!1),l.progress=="nothing"&&d.value.is_guidable||n.name=="module"){if(l.inner.platformActions!=null&&l.inner.platformActions!=null&&l.inner.platformActions.length>0)for(const y of l.inner.platformActions){if(y=="code2ide"&&k(l.inner.starting??""),y=="auto-put"&&l.inner.highlights!=null)for(const G of l.inner.highlights)F++,s(G.module,G.slot);y=="auto-run"&&v.value&&!_.value&&(i.run(),t.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}if(l.inner.userActions!=null&&l.inner.userActions!=null&&l.inner.userActions.length>0)for(const y of l.inner.userActions)y=="put-module"&&(E.value=!1,a()),y=="run-code"&&(L.value=!1)}else{if(l.state==null||l.state==null)return;if(l.state.code!=null&&l.state.code!=null&&k(l.state.code),l.state.stdout!=null&&l.state.stdout!=null&&C(l.state.stdout),l.state.slots!=null&&l.state.slots!=null)for(const[y,G]of l.state.slots.entries()){const pt=String.fromCharCode(65+y);s(G,pt)}}}function rt(o){d.value==null||p.value==null||(d.value.steps[p.value].state={code:o.code,stdout:o.stdout,slots:o.slots})}function lt(){if(d.value==null||p.value==null)return;const o=d.value.steps[p.value];if(h(),a(),O(),k(""),W(),d.value.steps[p.value].state={code:"",stdout:"",slots:[]},o.inner.platformActions!=null&&o.inner.platformActions!=null&&o.inner.platformActions.length>0)for(const f of o.inner.platformActions){if(f=="code2ide"&&k(o.inner.starting??""),f=="auto-put"&&o.inner.highlights!=null)for(const l of o.inner.highlights)F++,s(l.module,l.slot);f=="auto-run"&&v.value&&!_.value&&(i.run(),t.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}}function ut(o,f){const l=(o??"A").charCodeAt(0)-65;r.value[l].class="bg-yellow-200/[0.5] shadow-lg shadow-yellow-500",r.value[l].style={backgroundColor:"rgba(0, 157, 255, 0.26)",boxShadow:"0 0 15px rgb(0, 157, 255)"},m.value.forEach(P=>{P.type==f&&(P.style={animation:"breathing 1s ease-out infinite normal",backgroundColor:"#ff0000",boxShadow:"0 0 15px rgb(0, 157, 255)",borderRadius:"10px"})})}function O(){for(let o=0;o<=5;o++)r.value[o].class="",r.value[o].style="";for(const o of m.value)o.class="",o.style=""}function ct(){L.value=!0}function dt(o,f){F<=0?o===f?t.add({severity:"success",summary:"Correct, good job!",detail:"Module has been put successfully",life:3e3}):t.add({severity:"error",summary:"Wrong!",detail:"Keep trying",life:3e3}):F--}return{lesson:d,stepIndex:p,stepLoading:T,userCode:tt,submitEnabled:Y,modulesWerePut:E,codeWasRun:L,simVisible:Z,ideVisible:H,setLesson:et,setSteps:nt,setStepIndex:ot,updateStatus:it,updateAccess:st,changeStep:K,runCodePressed:ct,saveOption:at,lightUp:ut,clearSlotsModulesClasses:O,toastModulePut:dt,saveStepStateLocally:rt,restartStep:lt}});async function Ve(n,e,t){const{data:i}=await bt.getStepTranslationByID(n.id.toString(),e),s=i;return{id:n.id.toString(),title:s.name,type:n.step_type,progress:"nothing",inner:t||s.content.contents==null?{contents:[],modules:[]}:s.content,access_type:n.access_type,skip_submit:n.skip_submit}}const Ut={class:"flex flex-col gap-2"},qt={key:1},Wt={key:0,style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},Zt=["src"],Ht={key:1,style:{position:"relative","margin-left":"5%",width:"90%",height:"0","padding-bottom":"160%"}},Kt=["src"],z=B({__name:"ContentsView",props:{contents:{}},setup(n){const e=n;function t(i){return i.replace("shorts","embed")}return(i,s)=>{const a=gt("v-md-preview"),h=Rt;return u(),c("div",Ut,[(u(!0),c(S,null,A(e.contents,r=>{var m;return u(),c("div",{key:r.id},[r.type=="text"?(u(),R(a,{key:0,text:r.text},null,8,["text"])):r.type=="video"?(u(),c("div",qt,[(m=r.text)!=null&&m.includes("embed")?(u(),c("div",Wt,[b("iframe",{credentialless:"",src:t(r.text),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Zt),s[0]||(s[0]=b("iframe",null,null,-1))])):(u(),c("div",Ht,[b("iframe",{credentialless:"",src:t(r.text??""),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Kt)]))])):r.type=="image"?(u(),R(h,{key:2,src:r.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):q("",!0)])}),128))])}}}),Qt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ae=B({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=n;return(t,i)=>(u(),c(S,null,[b("div",Qt,w(e.step.title),1),$(z,{contents:e.step.inner.contents},null,8,["contents"])],64))}}),Dt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Re=B({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=n;return(t,i)=>(u(),c(S,null,[b("div",Dt,w(e.step.title),1),$(z,{contents:e.step.inner.contents},null,8,["contents"])],64))}}),Jt={class:"flex flex-col gap-4"},Xt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Yt={class:"flex w-full justify-between"},te={class:"flex flex-col gap-2"},ee={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},ne={class:"content-center h-full"},oe={class:"flex flex-col gap-2"},ie=B({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=n,t=V(()=>{var s;return(s=e.step.inner.pairs)==null?void 0:s.map(a=>a.key)}),i=V(()=>{var s;return(s=e.step.inner.pairs)==null?void 0:s.map(a=>a.value)});return(s,a)=>{const h=Bt;return u(),c("div",Jt,[b("div",Xt,w(e.step.title),1),$(z,{contents:e.step.inner.contents},null,8,["contents"]),b("div",Yt,[b("div",te,[(u(!0),c(S,null,A(t.value,r=>(u(),c("div",{key:r,class:"flex flex-col"},[b("div",ee,[b("div",ne,w(r),1)])]))),128))]),b("div",oe,[(u(!0),c(S,null,A(i.value,r=>(u(),c("div",{key:r,class:"flex flex-col"},[a[0]||(a[0]=b("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),$(h,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:yt(()=>[xt(w(r.length>0?r:"..."),1)]),_:2},1024)]))),128))])])])}}}),Ie=Ct(ie,[["__scopeId","data-v-265024ce"]]),se={class:"flex flex-col gap-4"},ae={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},ze=B({__name:"OpenStep",props:_t({step:{},isPreview:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=wt(n,"modelValue"),t=n,i=x(null);return(s,a)=>{const h=Pt;return u(),c("div",se,[b("div",ae,w(t.step.title),1),$(z,{contents:t.step.inner.contents},null,8,["contents"]),t.isPreview?(u(),R(h,{key:0,type:"text",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=r=>i.value=r),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])):(u(),R(h,{key:1,type:"text",modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=r=>e.value=r),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]))])}}});var re=function(e){var t=e.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(t("radiobutton.width"),`;
    height: `).concat(t("radiobutton.height"),`;
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
    border: 1px solid `).concat(t("radiobutton.border.color"),`;
    background: `).concat(t("radiobutton.background"),`;
    width: `).concat(t("radiobutton.width"),`;
    height: `).concat(t("radiobutton.height"),`;
    transition: background `).concat(t("radiobutton.transition.duration"),", color ").concat(t("radiobutton.transition.duration"),", border-color ").concat(t("radiobutton.transition.duration"),", box-shadow ").concat(t("radiobutton.transition.duration"),", outline-color ").concat(t("radiobutton.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("radiobutton.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(t("radiobutton.transition.duration"),`;
    background: transparent;
    font-size: `).concat(t("radiobutton.icon.size"),`;
    width: `).concat(t("radiobutton.icon.size"),`;
    height: `).concat(t("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.hover.border.color"),`;
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.checked.border.color"),`;
    background: `).concat(t("radiobutton.checked.background"),`;
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(t("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.checked.hover.border.color"),`;
    background: `).concat(t("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(t("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.focus.border.color"),`;
    box-shadow: `).concat(t("radiobutton.focus.ring.shadow"),`;
    outline: `).concat(t("radiobutton.focus.ring.width")," ").concat(t("radiobutton.focus.ring.style")," ").concat(t("radiobutton.focus.ring.color"),`;
    outline-offset: `).concat(t("radiobutton.focus.ring.offset"),`;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.checked.focus.border.color"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(t("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(t("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(t("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(t("radiobutton.disabled.background"),`;
    border-color: `).concat(t("radiobutton.checked.disabled.border.color"),`;
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(t("radiobutton.icon.disabled.color"),`;
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: `).concat(t("radiobutton.sm.width"),`;
    height: `).concat(t("radiobutton.sm.height"),`;
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: `).concat(t("radiobutton.icon.sm.size"),`;
    width: `).concat(t("radiobutton.icon.sm.size"),`;
    height: `).concat(t("radiobutton.icon.sm.size"),`;
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: `).concat(t("radiobutton.lg.width"),`;
    height: `).concat(t("radiobutton.lg.height"),`;
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: `).concat(t("radiobutton.icon.lg.size"),`;
    width: `).concat(t("radiobutton.icon.lg.size"),`;
    height: `).concat(t("radiobutton.icon.lg.size"),`;
}
`)},le={root:function(e){var t=e.instance,i=e.props;return["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":i.disabled,"p-invalid":t.$pcRadioButtonGroup?t.$pcRadioButtonGroup.$invalid:t.$invalid,"p-variant-filled":t.$variant==="filled","p-radiobutton-sm p-inputfield-sm":i.size==="small","p-radiobutton-lg p-inputfield-lg":i.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},ue=kt.extend({name:"radiobutton",theme:re,classes:le}),ce={name:"BaseRadioButton",extends:Vt,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ue,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},X={name:"RadioButton",extends:ce,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(t,e):this.writeValue(t,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var t,i;this.$emit("blur",e),(t=(i=this.formField).onBlur)===null||t===void 0||t.call(i,e)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var e=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return e!=null&&(this.binary?!!e:St(e,this.value))}}},de=["data-p-checked","data-p-disabled"],pe=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function be(n,e,t,i,s,a){return u(),c("div",N({class:n.cx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-disabled":n.disabled}),[b("input",N({id:n.inputId,type:"radio",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:a.groupName,checked:a.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:e[0]||(e[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:e[1]||(e[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:e[2]||(e[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,pe),b("div",N({class:n.cx("box")},a.getPTOptions("box")),[b("div",N({class:n.cx("icon")},a.getPTOptions("icon")),null,16)],16)],16,de)}X.render=be;const fe={class:"flex flex-col gap-4"},he={key:0,class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},me={key:2,class:"flex flex-col gap-4 ml-4"},ve=["for"],ge={key:3,class:"flex flex-col gap-4 ml-4"},ye=["for"],Me=B({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=Ot(),{lesson:t}=U(e),{saveOption:i}=e,s=n,a=V(()=>s.step.inner.single),h=x(null),r=x([]);return D([r],()=>{if(!s.isPreview&&s.step.inner.options!=null&&!s.step.inner.single)for(const[m,v]of s.step.inner.options.entries())i(r.value.some(_=>_==v.text),m)}),D([h],()=>{if(!s.isPreview&&s.step.inner.options!=null&&s.step.inner.single)for(const[m,v]of s.step.inner.options.entries())i(h.value==v.text,m)}),$t(()=>{var m;if(!s.isPreview&&s.step.inner.options!=null&&(h.value=null,r.value=[],(m=t.value)!=null&&m.is_guidable&&s.step.answer.question))for(const[v,_]of s.step.inner.options.entries())s.step.answer.question[v]&&(r.value.push(_.text),h.value=_.text)}),(m,v)=>{var j,k;const _=X,M=At;return u(),c("div",fe,[(j=J(t))!=null&&j.is_guidable?(u(),c("div",he,w(s.step.title),1)):q("",!0),(k=J(t))!=null&&k.is_guidable?(u(),R(z,{key:1,contents:s.step.inner.contents},null,8,["contents"])):q("",!0),a.value?(u(),c("div",me,[(u(!0),c(S,null,A(s.step.inner.options,g=>(u(),c("div",{key:g.id,class:"flex items-center gap-2"},[$(_,{modelValue:h.value,"onUpdate:modelValue":v[0]||(v[0]=C=>h.value=C),inputId:g.id,name:"dynamic",value:g.text},null,8,["modelValue","inputId","value"]),b("label",{for:g.id},w(g.text),9,ve)]))),128))])):(u(),c("div",ge,[(u(!0),c(S,null,A(s.step.inner.options,g=>(u(),c("div",{key:g.id,class:"flex items-center gap-2"},[$(M,{modelValue:r.value,"onUpdate:modelValue":v[1]||(v[1]=C=>r.value=C),inputId:g.id,name:"option",value:g.text},null,8,["modelValue","inputId","value"]),b("label",{for:g.id},w(g.text),9,ye)]))),128))]))])}}});export{Ie as M,Ae as _,jt as a,Ve as b,Re as c,ze as d,Me as e,Et as t,Ot as u};
