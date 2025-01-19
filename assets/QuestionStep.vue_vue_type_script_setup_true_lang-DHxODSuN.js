import{ac as x,S as y,D as a,E as r,a4 as k,aa as f,V as g,X as C,I as d,Y as p,T as h,c as _,_ as V,ah as P,H as F,m as b,J as B,ax as z,ay as N,F as A,al as R,e as $,w as j}from"./index-CWUNhQcE.js";import{s as L}from"./index-N5zE1uUk.js";import{_ as q}from"./dto-b17w84_a.js";import{s as M,b as E,a as S}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-d6gJApLN.js";import{a as H}from"./logo-Db3w56_L.js";const U={class:"flex flex-col gap-2"},Z=["src"],m=x({__name:"ContentsView",props:{contents:{}},setup(e){const o=e;return(n,c)=>{const i=y("v-md-preview"),t=H;return a(),r("div",U,[(a(!0),r(k,null,f(o.contents,s=>(a(),r("div",{key:s.id},[s.type=="text"?(a(),g(i,{key:0,text:s.text},null,8,["text"])):s.type=="video"?(a(),r("iframe",{key:1,width:"100%",height:"240",src:s.text,title:"YouTube video player",frameborder:"0",allow:"clipboard-write; encrypted-media; picture-in-picture",allowfullscreen:""},null,8,Z)):s.type=="image"?(a(),g(t,{key:2,src:s.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):C("",!0)]))),128))])}}}),D={class:"text-3xl font-semibold mb-4"},An=x({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(e){const o=e;return(n,c)=>(a(),r(k,null,[d("div",D,p(o.step.title),1),h(m,{contents:o.step.inner.contents},null,8,["contents"])],64))}}),Y={class:"text-3xl font-semibold mb-4"},Rn=x({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(e){const o=e;return(n,c)=>(a(),r(k,null,[d("div",Y,p(o.step.title),1),h(m,{contents:o.step.inner.contents},null,8,["contents"])],64))}}),J={class:"flex flex-col gap-4"},Q={class:"text-3xl font-semibold mb-4"},W={class:"flex w-full justify-between"},X={class:"flex flex-col gap-2"},K={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},nn={class:"content-center h-full"},en={class:"flex flex-col gap-2"},on=x({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(e){const o=e,n=_(()=>{var i;return(i=o.step.inner.pairs)==null?void 0:i.map(t=>t.key)}),c=_(()=>{var i;return(i=o.step.inner.pairs)==null?void 0:i.map(t=>t.value)});return(i,t)=>{const s=L;return a(),r("div",J,[d("div",Q,p(o.step.title),1),h(m,{contents:o.step.inner.contents},null,8,["contents"]),d("div",W,[d("div",X,[(a(!0),r(k,null,f(n.value,u=>(a(),r("div",{key:u,class:"flex flex-col"},[d("div",K,[d("div",nn,p(u),1)])]))),128))]),d("div",en,[(a(!0),r(k,null,f(c.value,u=>(a(),r("div",{key:u,class:"flex flex-col"},[t[0]||(t[0]=d("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),h(s,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:V(()=>[P(p(u.length>0?u:"..."),1)]),_:2},1024)]))),128))])])])}}}),jn=q(on,[["__scopeId","data-v-f1d2b148"]]),tn={class:"flex flex-col gap-4"},cn={class:"text-3xl font-semibold mb-4"},Ln=x({__name:"OpenStep",props:{step:{},isPreview:{type:Boolean}},setup(e){const o=e;return(n,c)=>{const i=M;return a(),r("div",tn,[d("div",cn,p(o.step.title),1),h(m,{contents:o.step.inner.contents},null,8,["contents"]),h(i,{type:"text",modelValue:n.step.inner.answer,"onUpdate:modelValue":c[0]||(c[0]=t=>n.step.inner.answer=t),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])])}}});var I={name:"MinusIcon",extends:F};function an(e,o,n,c,i,t){return a(),r("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),o[0]||(o[0]=[d("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}I.render=an;var rn=function(o){var n=o.dt;return`
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
`)},dn={root:function(o){var n=o.instance,c=o.props;return["p-checkbox p-component",{"p-checkbox-checked":n.checked,"p-disabled":c.disabled,"p-invalid":n.$pcCheckboxGroup?n.$pcCheckboxGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-checkbox-sm p-inputfield-sm":c.size==="small","p-checkbox-lg p-inputfield-lg":c.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},sn=B.extend({name:"checkbox",theme:rn,classes:dn}),ln={name:"BaseCheckbox",extends:S,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:sn,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function un(e){return kn(e)||hn(e)||pn(e)||bn()}function bn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pn(e,o){if(e){if(typeof e=="string")return w(e,o);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,o):void 0}}function hn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kn(e){if(Array.isArray(e))return w(e)}function w(e,o){(o==null||o>e.length)&&(o=e.length);for(var n=0,c=Array(o);n<o;n++)c[n]=e[n];return c}var O={name:"Checkbox",extends:ln,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(o){this.d_indeterminate=o}},methods:{getPTOptions:function(o){var n=o==="root"?this.ptmi:this.ptm;return n(o,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(o){var n=this;if(!this.disabled&&!this.readonly){var c=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,i;this.binary?i=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?i=c.filter(function(t){return!z(t,n.value)}):i=c?[].concat(un(c),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(i,o):this.writeValue(i,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var n,c;this.$emit("blur",o),(n=(c=this.formField).onBlur)===null||n===void 0||n.call(c,o)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var o=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?o===this.trueValue:N(this.value,o)}},components:{CheckIcon:E,MinusIcon:I}},xn=["data-p-checked","data-p-indeterminate","data-p-disabled"],fn=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function mn(e,o,n,c,i,t){var s=y("CheckIcon"),u=y("MinusIcon");return a(),r("div",b({class:e.cx("root")},t.getPTOptions("root"),{"data-p-checked":t.checked,"data-p-indeterminate":i.d_indeterminate||void 0,"data-p-disabled":e.disabled}),[d("input",b({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:t.groupName,checked:t.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,"aria-checked":i.d_indeterminate?"mixed":void 0,onFocus:o[0]||(o[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:o[1]||(o[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)}),onChange:o[2]||(o[2]=function(){return t.onChange&&t.onChange.apply(t,arguments)})},t.getPTOptions("input")),null,16,fn),d("div",b({class:e.cx("box")},t.getPTOptions("box")),[A(e.$slots,"icon",{checked:t.checked,indeterminate:i.d_indeterminate,class:R(e.cx("icon"))},function(){return[t.checked?(a(),g(s,b({key:0,class:e.cx("icon")},t.getPTOptions("icon")),null,16,["class"])):i.d_indeterminate?(a(),g(u,b({key:1,class:e.cx("icon")},t.getPTOptions("icon")),null,16,["class"])):C("",!0)]})],16)],16,xn)}O.render=mn;var gn=function(o){var n=o.dt;return`
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
`)},vn={root:function(o){var n=o.instance,c=o.props;return["p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-disabled":c.disabled,"p-invalid":n.$pcRadioButtonGroup?n.$pcRadioButtonGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-radiobutton-sm p-inputfield-sm":c.size==="small","p-radiobutton-lg p-inputfield-lg":c.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},yn=B.extend({name:"radiobutton",theme:gn,classes:vn}),_n={name:"BaseRadioButton",extends:S,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:yn,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},T={name:"RadioButton",extends:_n,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(o){var n=o==="root"?this.ptmi:this.ptm;return n(o,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(o){if(!this.disabled&&!this.readonly){var n=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(n,o):this.writeValue(n,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var n,c;this.$emit("blur",o),(n=(c=this.formField).onBlur)===null||n===void 0||n.call(c,o)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var o=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return o!=null&&(this.binary?!!o:z(o,this.value))}}},wn=["data-p-checked","data-p-disabled"],$n=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function Cn(e,o,n,c,i,t){return a(),r("div",b({class:e.cx("root")},t.getPTOptions("root"),{"data-p-checked":t.checked,"data-p-disabled":e.disabled}),[d("input",b({id:e.inputId,type:"radio",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:t.groupName,checked:t.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:o[0]||(o[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:o[1]||(o[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)}),onChange:o[2]||(o[2]=function(){return t.onChange&&t.onChange.apply(t,arguments)})},t.getPTOptions("input")),null,16,$n),d("div",b({class:e.cx("box")},t.getPTOptions("box")),[d("div",b({class:e.cx("icon")},t.getPTOptions("icon")),null,16)],16)],16,wn)}T.render=Cn;const Bn={class:"flex flex-col gap-4"},zn={class:"text-3xl font-semibold mb-4"},Sn={key:0,class:"flex flex-col gap-4 ml-4"},In=["for"],On={key:1,class:"flex flex-col gap-4 ml-4"},Tn=["for"],qn=x({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(e){const o=e,n=_(()=>{var t;return((t=o.step.inner.options)==null?void 0:t.filter(s=>s.correct).length)??1}),c=$(null),i=$([]);return j([i],()=>{if(i.value!=null)for(let t=0;t<i.value.length;t++);}),(t,s)=>{const u=T,G=O;return a(),r("div",Bn,[d("div",zn,p(o.step.title),1),h(m,{contents:o.step.inner.contents},null,8,["contents"]),n.value==1?(a(),r("div",Sn,[(a(!0),r(k,null,f(o.step.inner.options,l=>(a(),r("div",{key:l.id,class:"flex items-center gap-2"},[h(u,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=v=>c.value=v),inputId:l.id,name:"dynamic",value:l.text},null,8,["modelValue","inputId","value"]),d("label",{for:l.id},p(l.text),9,In)]))),128))])):(a(),r("div",On,[(a(!0),r(k,null,f(o.step.inner.options,l=>(a(),r("div",{key:l.id,class:"flex items-center gap-2"},[h(G,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=v=>i.value=v),inputId:l.id,name:"category",value:l.text},null,8,["modelValue","inputId","value"]),d("label",{for:l.id},p(l.text),9,Tn)]))),128))]))])}}});export{jn as M,An as _,Rn as a,Ln as b,qn as c,O as d,I as s};
