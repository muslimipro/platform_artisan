import{a as ft}from"./index-BC48hOV4.js";import{aR as ht,ar as mt,ag as vt,i as gt,ae as O,h as x,q as P,d as $,o as u,c,F as k,n as A,k as V,a as f,m as U,r as yt,t as w,b as S,w as xt,l as _t,aH as wt,aG as kt,_ as St,ao as $t,y as G,A as D,f as Bt,u as J}from"./index-CvScODyK.js";import{s as Ct}from"./index-rYpGX7rc.js";import{_ as Pt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as At,a as Vt}from"./index-ppktc8P6.js";import{b as Rt}from"./types-CMmp8hYD.js";import{s as It}from"./logo-BuoHMiZU.js";import{j as zt,k as Mt,n as jt}from"./index-D_ttRctw.js";import{h as R}from"./index-BuiGX5cy.js";const Lt={submitStep:Tt,getStudentProjectStepsByID:Ft,getStudentStepTranslationByID:Gt,resetStepsProgress:Et,saveStudentStepStateByID:Nt};async function Ft(n){try{return await R.get(`/student/project/${n}/steps`)}catch(e){throw console.log(e),e}}async function Gt(n,e){try{return await R.get(`/student/step/${n}/language/${e}`)}catch(t){throw console.log(t),t}}async function Nt(n,e,t){try{return await R.put(`/student/step/${n.id}/language/${e}/save`,t)}catch(i){throw console.log(i),i}}async function Tt(n,e,t){try{return await R.put(`/student/step/${n}/language/${e}`,{student_answer:t})}catch(i){throw console.log(i),i}}async function Et(n){try{return await R.delete(`/project/${n}/reset`)}catch(e){throw console.log(e),e}}async function Ot(n,e){const{data:t}=await Lt.getStudentStepTranslationByID(n.id.toString(),e),i=t;return{id:n.id.toString(),title:i.name,type:n.step_type,progress:n.status,inner:i.content,answer:i.user_answer,state:i.step_state,access_type:n.access_type,accessibility:n.accessibility,skip_submit:n.skip_submit}}const Ut=ht("useLessonStore",()=>{const n=mt(),{locale:e}=vt(),t=gt(),i=zt(),{newModuleToSlot:s,clearSlots:a,reset:m}=i,{slots:l,helpArrows:v,moduleComponents:g,isConnected:_,isLoading:z}=O(i),B=Mt(),{fileContent:M}=O(B),{setCode:h}=B,C=jt(),{setStdout:Y,clear:q}=C,d=x(null),b=x(null),N=x(!1),T=x(!0),j=x(!0),tt=P(()=>T.value&&j.value),W=x(!1),Z=x(!1),et=P(()=>M.value);let L=0;function nt(o){o!=null&&(d.value=o)}function ot(o){d.value!=null&&(d.value.steps=o,b.value!=null&&H(b.value))}function it(o){b.value=o}function st(o){d.value==null||b.value==null||(d.value.steps[b.value].progress=o)}function at(o){d.value==null||b.value==null||b.value+1!=d.value.steps.length&&(d.value.steps[b.value+1].accessibility=o)}function rt(o,p){d.value==null||b.value==null||d.value.steps[b.value].inner.options!=null&&(d.value.steps[b.value].inner.options[p].correct=o)}async function H(o){var K,Q;if(d.value==null)return;b.value=o;const p=d.value.steps[b.value];if(p.title==""){N.value=!0;const y=await Ot({id:p.id,status:p.progress,step_type:p.type,skip_submit:p.skip_submit,access_type:p.access_type,accessibility:p.accessibility},e.value);d.value.steps[o]=y,N.value=!1}const r=d.value.steps[b.value];if(m(),a(),E(),h(""),q(),Z.value=!(((K=r.inner.platformActions)==null?void 0:K.includes("hide-ide"))??!1),W.value=!(((Q=r.inner.platformActions)==null?void 0:Q.includes("hide-sim"))??!1),r.progress=="nothing"&&d.value.is_guidable||n.name=="module"){if(r.inner.platformActions!=null&&r.inner.platformActions!=null&&r.inner.platformActions.length>0)for(const y of r.inner.platformActions){if(y=="code2ide"&&h(r.inner.starting??""),y=="auto-put"&&r.inner.highlights!=null)for(const F of r.inner.highlights)L++,s(F.module,F.slot);y=="auto-run"&&_.value&&!z.value&&(i.run(),t.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}if(r.inner.userActions!=null&&r.inner.userActions!=null&&r.inner.userActions.length>0)for(const y of r.inner.userActions)y=="put-module"&&(T.value=!1,a()),y=="run-code"&&(j.value=!1)}else{if(r.state==null||r.state==null)return;if(r.state.code!=null&&r.state.code!=null&&h(r.state.code),r.state.stdout!=null&&r.state.stdout!=null&&Y(r.state.stdout),r.state.slots!=null&&r.state.slots!=null)for(const[y,F]of r.state.slots.entries()){const bt=String.fromCharCode(65+y);s(F,bt)}}}function lt(o){d.value==null||b.value==null||(d.value.steps[b.value].state={code:o.code,stdout:o.stdout,slots:o.slots})}function ut(){if(d.value==null||b.value==null)return;const o=d.value.steps[b.value];if(m(),a(),E(),h(""),q(),d.value.steps[b.value].state={code:"",stdout:"",slots:[]},o.inner.platformActions!=null&&o.inner.platformActions!=null&&o.inner.platformActions.length>0)for(const p of o.inner.platformActions){if(p=="code2ide"&&h(o.inner.starting??""),p=="auto-put"&&o.inner.highlights!=null)for(const r of o.inner.highlights)L++,s(r.module,r.slot);p=="auto-run"&&_.value&&!z.value&&(i.run(),t.add({severity:"success",summary:"Run is completed!",detail:"Code has successfully auto run",life:3e3}))}}function ct(o,p){if(o==="8"||o==="9")console.log(o),v.value[o].style={color:"rgba(0, 157, 255)"},v.value[o].visible=!0;else{const r=(o??"A").charCodeAt(0)-65;l.value[r].style={backgroundColor:"rgba(0, 157, 255, 0.26)",boxShadow:"0 0 15px rgb(0, 157, 255)"}}g.value.forEach(r=>{if(r.type==p){r.style={animation:"breathing 1s ease-out infinite normal",boxShadow:"0 0 15px rgb(0, 157, 255)",borderRadius:"10px"};return}})}function E(){for(let o=0;o<=5;o++)l.value[o].class="",l.value[o].style={};for(const o of g.value)o.class="",o.style={};for(const o in v.value){const p=v.value[o];p.visible=!1,p.style={},p.class=""}}function dt(){j.value=!0}function pt(o,p){L<=0?o===p?t.add({severity:"success",summary:"Correct, good job!",detail:"Module has been put successfully",life:3e3}):t.add({severity:"error",summary:"Wrong!",detail:"Keep trying",life:3e3}):L--}return{lesson:d,stepIndex:b,stepLoading:N,userCode:et,submitEnabled:tt,modulesWerePut:T,codeWasRun:j,simVisible:W,ideVisible:Z,setLesson:nt,setSteps:ot,setStepIndex:it,updateStatus:st,updateAccess:at,changeStep:H,runCodePressed:dt,saveOption:rt,lightUp:ct,clearSlotsModulesClasses:E,toastModulePut:pt,saveStepStateLocally:lt,restartStep:ut}});async function Ve(n,e,t){const{data:i}=await ft.getStepTranslationByID(n.id.toString(),e),s=i;return{id:n.id.toString(),title:s.name,type:n.step_type,progress:"nothing",inner:t||s.content.contents==null?{contents:[],modules:[]}:s.content,access_type:n.access_type,skip_submit:n.skip_submit}}const qt={class:"flex flex-col gap-2"},Wt={key:1},Zt={key:0,style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},Ht=["src"],Kt={key:1,style:{position:"relative","margin-left":"5%",width:"90%",height:"0","padding-bottom":"160%"}},Qt=["src"],I=$({__name:"ContentsView",props:{contents:{}},setup(n){const e=n;function t(i){return i.replace("shorts","embed")}return(i,s)=>{const a=yt("v-md-preview"),m=It;return u(),c("div",qt,[(u(!0),c(k,null,A(e.contents,l=>{var v;return u(),c("div",{key:l.id},[l.type=="text"?(u(),V(a,{key:0,text:l.text},null,8,["text"])):l.type=="video"?(u(),c("div",Wt,[(v=l.text)!=null&&v.includes("embed")?(u(),c("div",Zt,[f("iframe",{credentialless:"",src:t(l.text),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Ht),s[0]||(s[0]=f("iframe",null,null,-1))])):(u(),c("div",Kt,[f("iframe",{credentialless:"",src:t(l.text??""),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Qt)]))])):l.type=="image"?(u(),V(m,{key:2,src:l.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):U("",!0)])}),128))])}}}),Dt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Re=$({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=n;return(t,i)=>(u(),c(k,null,[f("div",Dt,w(e.step.title),1),S(I,{contents:e.step.inner.contents},null,8,["contents"])],64))}}),Jt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Ie=$({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=n;return(t,i)=>(u(),c(k,null,[f("div",Jt,w(e.step.title),1),S(I,{contents:e.step.inner.contents},null,8,["contents"])],64))}}),Xt={class:"flex flex-col gap-4"},Yt={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},te={class:"flex w-full justify-between"},ee={class:"flex flex-col gap-2"},ne={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},oe={class:"content-center h-full"},ie={class:"flex flex-col gap-2"},se=$({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=n,t=P(()=>{var s;return(s=e.step.inner.pairs)==null?void 0:s.map(a=>a.key)}),i=P(()=>{var s;return(s=e.step.inner.pairs)==null?void 0:s.map(a=>a.value)});return(s,a)=>{const m=Ct;return u(),c("div",Xt,[f("div",Yt,w(e.step.title),1),S(I,{contents:e.step.inner.contents},null,8,["contents"]),f("div",te,[f("div",ee,[(u(!0),c(k,null,A(t.value,l=>(u(),c("div",{key:l,class:"flex flex-col"},[f("div",ne,[f("div",oe,w(l),1)])]))),128))]),f("div",ie,[(u(!0),c(k,null,A(i.value,l=>(u(),c("div",{key:l,class:"flex flex-col"},[a[0]||(a[0]=f("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),S(m,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:xt(()=>[_t(w(l.length>0?l:"..."),1)]),_:2},1024)]))),128))])])])}}}),ze=Pt(se,[["__scopeId","data-v-265024ce"]]),ae={class:"flex flex-col gap-4"},re={class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},Me=$({__name:"OpenStep",props:wt({step:{},isPreview:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=kt(n,"modelValue"),t=n,i=x(null);return(s,a)=>{const m=At;return u(),c("div",ae,[f("div",re,w(t.step.title),1),S(I,{contents:t.step.inner.contents},null,8,["contents"]),t.isPreview?(u(),V(m,{key:0,type:"text",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])):(u(),V(m,{key:1,type:"text",modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value=l),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]))])}}});var le=function(e){var t=e.dt;return`
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
`)},ue={root:function(e){var t=e.instance,i=e.props;return["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":i.disabled,"p-invalid":t.$pcRadioButtonGroup?t.$pcRadioButtonGroup.$invalid:t.$invalid,"p-variant-filled":t.$variant==="filled","p-radiobutton-sm p-inputfield-sm":i.size==="small","p-radiobutton-lg p-inputfield-lg":i.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},ce=St.extend({name:"radiobutton",theme:le,classes:ue}),de={name:"BaseRadioButton",extends:Vt,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ce,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},X={name:"RadioButton",extends:de,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(t,e):this.writeValue(t,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var t,i;this.$emit("blur",e),(t=(i=this.formField).onBlur)===null||t===void 0||t.call(i,e)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var e=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return e!=null&&(this.binary?!!e:$t(e,this.value))}}},pe=["data-p-checked","data-p-disabled"],be=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function fe(n,e,t,i,s,a){return u(),c("div",G({class:n.cx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-disabled":n.disabled}),[f("input",G({id:n.inputId,type:"radio",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:a.groupName,checked:a.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:e[0]||(e[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:e[1]||(e[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:e[2]||(e[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,be),f("div",G({class:n.cx("box")},a.getPTOptions("box")),[f("div",G({class:n.cx("icon")},a.getPTOptions("icon")),null,16)],16)],16,pe)}X.render=fe;const he={class:"flex flex-col gap-4"},me={key:0,class:"text-[33px] font-semibold mb-4 text-center border-b pb-2"},ve={key:2,class:"flex flex-col gap-4 ml-4"},ge=["for"],ye={key:3,class:"flex flex-col gap-4 ml-4"},xe=["for"],je=$({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const e=Ut(),{lesson:t}=O(e),{saveOption:i}=e,s=n,a=P(()=>s.step.inner.single),m=x(null),l=x([]);return D([l],()=>{if(!s.isPreview&&s.step.inner.options!=null&&!s.step.inner.single)for(const[v,g]of s.step.inner.options.entries())i(l.value.some(_=>_==g.text),v)}),D([m],()=>{if(!s.isPreview&&s.step.inner.options!=null&&s.step.inner.single)for(const[v,g]of s.step.inner.options.entries())i(m.value==g.text,v)}),Bt(()=>{var v;if(!s.isPreview&&s.step.inner.options!=null&&(m.value=null,l.value=[],(v=t.value)!=null&&v.is_guidable&&s.step.answer.question))for(const[g,_]of s.step.inner.options.entries())s.step.answer.question[g]&&(l.value.push(_.text),m.value=_.text)}),(v,g)=>{var B,M;const _=X,z=Rt;return u(),c("div",he,[(B=J(t))!=null&&B.is_guidable?(u(),c("div",me,w(s.step.title),1)):U("",!0),(M=J(t))!=null&&M.is_guidable?(u(),V(I,{key:1,contents:s.step.inner.contents},null,8,["contents"])):U("",!0),a.value?(u(),c("div",ve,[(u(!0),c(k,null,A(s.step.inner.options,h=>(u(),c("div",{key:h.id,class:"flex items-center gap-2"},[S(_,{modelValue:m.value,"onUpdate:modelValue":g[0]||(g[0]=C=>m.value=C),inputId:h.id,name:"dynamic",value:h.text},null,8,["modelValue","inputId","value"]),f("label",{for:h.id},w(h.text),9,ge)]))),128))])):(u(),c("div",ye,[(u(!0),c(k,null,A(s.step.inner.options,h=>(u(),c("div",{key:h.id,class:"flex items-center gap-2"},[S(z,{modelValue:l.value,"onUpdate:modelValue":g[1]||(g[1]=C=>l.value=C),inputId:h.id,name:"option",value:h.text},null,8,["modelValue","inputId","value"]),f("label",{for:h.id},w(h.text),9,xe)]))),128))]))])}}});export{ze as M,Re as _,Lt as a,Ve as b,Ie as c,Me as d,je as e,Ot as t,Ut as u};
