import{z as rt,a as k,s as it,_ as st,b as ut}from"./AuthHeader.vue_vue_type_script_setup_true_lang-BTKLh7ea.js";import{B as U,l as R,R as H,m as ct,n as dt,o as p,c as x,e as r,p as M,q as gt,v as w,j as L,t as S,x as _,y as I,z as pt,F as D,k as W,h as V,A as bt,w as g,d as mt,r as y,C as ft,D as vt,u as yt,b as s,f as A,g as ht,s as xt,i as $}from"./index-CXOwPGdy.js";import{a as Y,s as kt,b as wt}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-n4cL8gx1.js";import{s as St}from"./index-CBT3LGg4.js";import{s as Lt}from"./index-rZYChDSN.js";import{L as Vt,s as Bt}from"./logo-2b8tI7rb.js";var _t=function(n){var t=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(t("togglebutton.content.left"),`;
    inset-block-start: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(t("togglebutton.sm.padding"),`;
    font-size: `).concat(t("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(t("togglebutton.lg.padding"),`;
    font-size: `).concat(t("togglebutton.lg.font.size"),`;
}
`)},Ot={root:function(n){var t=n.instance,i=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Tt=U.extend({name:"togglebutton",theme:_t,classes:Ot}),zt={name:"BaseToggleButton",extends:Y,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:Tt,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},Z={name:"ToggleButton",extends:zt,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var t,i;(t=(i=this.formField).onBlur)===null||t===void 0||t.call(i,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return R(this.onLabel)&&R(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:H}},Ct=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function It(e,n,t,i,c,o){var u=ct("ripple");return dt((p(),x("button",w({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled}),[r("span",w({class:e.cx("content")},o.getPTOptions("content")),[M(e.$slots,"default",{},function(){return[M(e.$slots,"icon",{value:e.d_value,class:gt(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(p(),x("span",w({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):L("",!0)]}),r("span",w({class:e.cx("label")},o.getPTOptions("label")),S(o.label),17)]})],16)],16,Ct)),[[u]])}Z.render=It;var At=function(n){var t=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},$t={root:function(n){var t=n.instance;return["p-selectbutton p-component",{"p-invalid":t.$invalid}]}},Mt=U.extend({name:"selectbutton",theme:At,classes:$t}),Dt={name:"BaseSelectButton",extends:Y,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:Mt,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Kt(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=G(e))||n){t&&(e=t);var i=0,c=function(){};return{s:c,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(v){throw v},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,u=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var v=t.next();return u=v.done,v},e:function(v){l=!0,o=v},f:function(){try{u||t.return==null||t.return()}finally{if(l)throw o}}}}function Ft(e){return qt(e)||jt(e)||G(e)||Pt()}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,n){if(e){if(typeof e=="string")return K(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?K(e,n):void 0}}function jt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qt(e){if(Array.isArray(e))return K(e)}function K(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var J={name:"SelectButton",extends:Dt,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?_(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?_(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?_(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?_(n,this.optionDisabled):!1},onOptionSelect:function(n,t,i){var c=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var u=this.getOptionValue(t),l;this.multiple?o?l=this.d_value.filter(function(d){return!I(d,u,c.equalityKey)}):l=this.d_value?[].concat(Ft(this.d_value),[u]):[u]:l=o?null:u,this.writeValue(l,n),this.$emit("change",{event:n,value:l})}}},isSelected:function(n){var t=!1,i=this.getOptionValue(n);if(this.multiple){if(this.d_value){var c=Kt(this.d_value),o;try{for(c.s();!(o=c.n()).done;){var u=o.value;if(I(u,i,this.equalityKey)){t=!0;break}}}catch(l){c.e(l)}finally{c.f()}}}else t=I(this.d_value,i,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:H},components:{ToggleButton:Z}},Et=["aria-labelledby"];function Nt(e,n,t,i,c,o){var u=pt("ToggleButton");return p(),x("div",w({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(p(!0),x(D,null,W(e.options,function(l,d){return p(),V(u,{key:o.getOptionRenderKey(l),modelValue:o.isSelected(l),onLabel:o.getOptionLabel(l),offLabel:o.getOptionLabel(l),disabled:e.disabled||o.isOptionDisabled(l),unstyled:e.unstyled,size:e.size,onChange:function(O){return o.onOptionSelect(O,l,d)},pt:e.ptm("pcToggleButton")},bt({_:2},[e.$slots.option?{name:"default",fn:g(function(){return[M(e.$slots,"option",{option:l,index:d},function(){return[r("span",w({ref_for:!0},e.ptm("pcToggleButton").label),S(o.getOptionLabel(l)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","onChange","pt"])}),128))],16,Et)}J.render=Nt;const Rt={class:"card flex flex-col items-center pt-4"},Ut={class:"flex flex-1 items-center justify-center my-4"},Ht={class:"flex flex-col gap-1"},Wt={class:"flex gap-2"},Yt={class:"flex flex-col gap-1"},Zt={class:"flex flex-col gap-1"},Gt={class:"my-0 px-4 flex flex-col gap-1"},Jt={class:"flex flex-col gap-1"},Qt={class:"flex gap-2"},Xt={class:"flex flex-col gap-4 w-full"},re=mt({__name:"RegisterPage",setup(e){const n=y([]),t=y(null),i=y(null),c=y("Learner"),o=y(["Learner","Educator"]),u=y(null),l=y(["School student","Independent learner","University student"]),d=y(["School teacher","University teacher"]),v=ft(()=>c.value=="Learner"?l:d);vt(async()=>{const m=await fetch("src/assets/countries.json");n.value=await m.json()});const O=yt(),Q=ht(),X=y({name:"",surname:"",email:"",password:"",city:""}),tt=rt(k.object({name:k.string().min(1,{message:"Name "}).max(30,{message:"Maximum 30 characters."}),surname:k.string().min(1,{message:"Surname "}).max(30,{message:"Maximum 30 characters."}),email:k.string().min(1,{message:"Email is required."}).max(30,{message:"Maximum 30 characters."}),password:k.string().min(8,{message:"Minimum 8 characters."}).max(30,{message:"Maximum 30 characters."}).refine(m=>/[a-z]/.test(m),{message:"Must have a lowercase letter."}).refine(m=>/[A-Z]/.test(m),{message:"Must have an uppercase letter."}).refine(m=>/[0-9]/.test(m),{message:"Must have a number."}),city:k.string().min(1,{message:"Country and City is required"}).max(30,{message:"Maximum 30 characters."})})),et=m=>{m.valid&&O.add({severity:"success",summary:"Form is submitted.",life:3e3})};return(m,a)=>{const nt=Bt,T=kt,h=Lt,B=St,ot=ut,z=wt,at=J,F=xt,lt=it;return p(),x(D,null,[s(st),r("div",Rt,[s(lt,{initialValues:X.value,resolver:A(tt),onSubmit:et,class:"flex flex-col gap-4 w-full sm:w-80"},{default:g(b=>{var P,j,q,E,N;return[r("div",Ut,[s(nt,{src:A(Vt),width:"32"},null,8,["src"]),a[5]||(a[5]=r("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1))]),r("div",Ht,[r("div",Wt,[s(h,{variant:"on"},{default:g(()=>[s(T,{id:"name",name:"name",type:"text",fluid:""}),a[6]||(a[6]=r("label",{for:"name"},"Name",-1))]),_:1}),s(h,{variant:"on"},{default:g(()=>[s(T,{id:"surname",name:"surname",type:"text",fluid:""}),a[7]||(a[7]=r("label",{for:"surname"},"Surname",-1))]),_:1})]),(P=b.name)!=null&&P.invalid||(j=b.surname)!=null&&j.invalid?(p(),V(B,{key:0,severity:"error",size:"small",variant:"simple"},{default:g(()=>[$(S(b.name.error.message+b.surname.error.message+"is required."),1)]),_:2},1024)):L("",!0)]),r("div",Yt,[s(h,{variant:"on"},{default:g(()=>[s(T,{id:"email",name:"email",type:"text",fluid:""}),a[8]||(a[8]=r("label",{for:"email"},"Email",-1))]),_:1}),(q=b.email)!=null&&q.invalid?(p(),V(B,{key:0,severity:"error",size:"small",variant:"simple"},{default:g(()=>[$(S(b.email.error.message),1)]),_:2},1024)):L("",!0)]),r("div",Zt,[s(h,{variant:"on"},{default:g(()=>[s(ot,{id:"password",name:"password",feedback:!1,toggleMask:"",fluid:""}),a[9]||(a[9]=r("label",{for:"password"},"Password",-1))]),_:1}),(E=b.password)!=null&&E.invalid?(p(),V(B,{key:0,severity:"error",size:"small",variant:"simple"},{default:g(()=>[r("ul",Gt,[(p(!0),x(D,null,W(b.password.errors,(f,C)=>(p(),x("li",{key:C},S(f.message),1))),128))])]),_:2},1024)):L("",!0)]),r("div",Jt,[r("div",Qt,[s(h,{variant:"on"},{default:g(()=>[s(z,{id:"country",name:"country",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=f=>t.value=f),options:n.value,filter:"",optionLabel:"country",class:"w-[156px]"},null,8,["modelValue","options"]),a[10]||(a[10]=r("label",{for:"country"},"Country",-1))]),_:1}),s(h,{variant:"on"},{default:g(()=>{var f;return[s(z,{id:"city",name:"city",modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=C=>i.value=C),options:(f=t.value)==null?void 0:f.cities,filter:"",class:"w-[156px]"},null,8,["modelValue","options"]),a[11]||(a[11]=r("label",{for:"city"},"City",-1))]}),_:1})]),(N=b.city)!=null&&N.invalid?(p(),V(B,{key:0,severity:"error",size:"small",variant:"simple"},{default:g(()=>[$(S(b.city.error.message),1)]),_:2},1024)):L("",!0)]),r("div",Xt,[s(at,{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=f=>c.value=f),options:o.value,size:"small"},null,8,["modelValue","options"]),s(h,{variant:"on"},{default:g(()=>[s(z,{id:"iam",name:"iam",modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=f=>u.value=f),options:v.value.value,class:"w-full"},null,8,["modelValue","options"]),a[12]||(a[12]=r("label",{for:"iam"},"I am",-1))]),_:1})]),s(F,{type:"submit",label:"Sign up"})]}),_:1},8,["initialValues","resolver"]),s(F,{severity:"secondary",variant:"link",label:"Already have an account",onClick:a[4]||(a[4]=b=>A(Q).push({name:"login"}))})])],64)}}});export{re as default};
