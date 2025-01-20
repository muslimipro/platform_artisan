import{d as k,z as g,o as r,c as s,F as b,k as v,h as x,j as w,e as l,t as h,b as p,C as _,w as I,i as z,r as C,a3 as V,v as u,B as P,y as T,ax as A,ay as O,p as G,q as F,J as N}from"./index-CXOwPGdy.js";import{s as j}from"./index-CBT3LGg4.js";import{_ as L,u as q}from"./store-DTWq21S1.js";import{s as M,c as E}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-n4cL8gx1.js";import{s as U}from"./logo-2b8tI7rb.js";const H={class:"flex flex-col gap-2"},D=["src"],f=k({__name:"ContentsView",props:{contents:{}},setup(n){const o=n;return(e,i)=>{const c=g("v-md-preview"),t=U;return r(),s("div",H,[(r(!0),s(b,null,v(o.contents,a=>(r(),s("div",{key:a.id},[a.type=="text"?(r(),x(c,{key:0,text:a.text},null,8,["text"])):a.type=="video"?(r(),s("iframe",{key:1,width:"100%",height:"100%",src:a.text,title:"YouTube video player",frameborder:"0",allow:"clipboard-write; encrypted-media; picture-in-picture",allowfullscreen:""},null,8,D)):a.type=="image"?(r(),x(t,{key:2,src:a.src,alt:"Image",class:"rounded-xl object-cover h-64"},null,8,["src"])):w("",!0)]))),128))])}}}),J={class:"text-3xl font-semibold mb-4"},Be=k({__name:"ArticleStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const o=n;return(e,i)=>(r(),s(b,null,[l("div",J,h(o.step.title),1),p(f,{contents:o.step.inner.contents},null,8,["contents"])],64))}}),Q={class:"text-3xl font-semibold mb-4"},Se=k({__name:"CodeStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const o=n;return(e,i)=>(r(),s(b,null,[l("div",Q,h(o.step.title),1),p(f,{contents:o.step.inner.contents},null,8,["contents"])],64))}}),W={class:"flex flex-col gap-4"},Y={class:"text-3xl font-semibold mb-4"},Z={class:"flex w-full justify-between"},K={class:"flex flex-col gap-2"},R={class:"w-40 mb-[29px] border rounded-lg h-[40px] place-items-center bg-white",draggable:"true"},X={class:"content-center h-full"},ee={class:"flex flex-col gap-2"},ne=k({__name:"MatchStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const o=n,e=_(()=>{var c;return(c=o.step.inner.pairs)==null?void 0:c.map(t=>t.key)}),i=_(()=>{var c;return(c=o.step.inner.pairs)==null?void 0:c.map(t=>t.value)});return(c,t)=>{const a=j;return r(),s("div",W,[l("div",Y,h(o.step.title),1),p(f,{contents:o.step.inner.contents},null,8,["contents"]),l("div",Z,[l("div",K,[(r(!0),s(b,null,v(e.value,d=>(r(),s("div",{key:d,class:"flex flex-col"},[l("div",R,[l("div",X,h(d),1)])]))),128))]),l("div",ee,[(r(!0),s(b,null,v(i.value,d=>(r(),s("div",{key:d,class:"flex flex-col"},[t[0]||(t[0]=l("div",{class:"w-40 h-10 border-dashed border-gray-300 rounded-border border-x border-y"},null,-1)),p(a,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:I(()=>[z(h(d.length>0?d:"..."),1)]),_:2},1024)]))),128))])])])}}}),Ie=L(ne,[["__scopeId","data-v-b75a56f7"]]),oe={class:"flex flex-col gap-4"},te={class:"text-3xl font-semibold mb-4"},ze=k({__name:"OpenStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const o=n,e=C(null);return(i,c)=>{const t=M;return r(),s("div",oe,[l("div",te,h(o.step.title),1),p(f,{contents:o.step.inner.contents},null,8,["contents"]),o.isPreview?(r(),x(t,{key:0,type:"text",modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=a=>e.value=a),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"])):(r(),x(t,{key:1,type:"text",modelValue:i.step.inner.answer,"onUpdate:modelValue":c[1]||(c[1]=a=>i.step.inner.answer=a),size:"small",placeholder:"Enter your answer"},null,8,["modelValue"]))])}}});var $={name:"MinusIcon",extends:V};function ce(n,o,e,i,c,t){return r(),s("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),o[0]||(o[0]=[l("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}$.render=ce;var ie=function(o){var e=o.dt;return`
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
`)},re={root:function(o){var e=o.instance,i=o.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":i.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":i.size==="small","p-checkbox-lg p-inputfield-lg":i.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ae=P.extend({name:"checkbox",theme:ie,classes:re}),se={name:"BaseCheckbox",extends:E,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ae,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function le(n){return ue(n)||pe(n)||he(n)||de()}function de(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(n,o){if(n){if(typeof n=="string")return y(n,o);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(n,o):void 0}}function pe(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ue(n){if(Array.isArray(n))return y(n)}function y(n,o){(o==null||o>n.length)&&(o=n.length);for(var e=0,i=Array(o);e<o;e++)i[e]=n[e];return i}var B={name:"Checkbox",extends:se,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(o){this.d_indeterminate=o}},methods:{getPTOptions:function(o){var e=o==="root"?this.ptmi:this.ptm;return e(o,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(o){var e=this;if(!this.disabled&&!this.readonly){var i=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,c;this.binary?c=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?c=i.filter(function(t){return!T(t,e.value)}):c=i?[].concat(le(i),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(c,o):this.writeValue(c,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var e,i;this.$emit("blur",o),(e=(i=this.formField).onBlur)===null||e===void 0||e.call(i,o)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var o=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?o===this.trueValue:A(this.value,o)}},components:{CheckIcon:O,MinusIcon:$}},be=["data-p-checked","data-p-indeterminate","data-p-disabled"],xe=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function ke(n,o,e,i,c,t){var a=g("CheckIcon"),d=g("MinusIcon");return r(),s("div",u({class:n.cx("root")},t.getPTOptions("root"),{"data-p-checked":t.checked,"data-p-indeterminate":c.d_indeterminate||void 0,"data-p-disabled":n.disabled}),[l("input",u({id:n.inputId,type:"checkbox",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:t.groupName,checked:t.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,required:n.required,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,"aria-checked":c.d_indeterminate?"mixed":void 0,onFocus:o[0]||(o[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:o[1]||(o[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)}),onChange:o[2]||(o[2]=function(){return t.onChange&&t.onChange.apply(t,arguments)})},t.getPTOptions("input")),null,16,xe),l("div",u({class:n.cx("box")},t.getPTOptions("box")),[G(n.$slots,"icon",{checked:t.checked,indeterminate:c.d_indeterminate,class:F(n.cx("icon"))},function(){return[t.checked?(r(),x(a,u({key:0,class:n.cx("icon")},t.getPTOptions("icon")),null,16,["class"])):c.d_indeterminate?(r(),x(d,u({key:1,class:n.cx("icon")},t.getPTOptions("icon")),null,16,["class"])):w("",!0)]})],16)],16,be)}B.render=ke;const me={class:"flex flex-col gap-4"},fe={class:"text-3xl font-semibold mb-4"},ve={class:"flex flex-col gap-4 ml-4"},ge=["for"],Ve=k({__name:"QuestionStep",props:{step:{},isPreview:{type:Boolean}},setup(n){const o=q(),{saveOption:e}=o,i=n,c=C([]);return N([c],()=>{if(!i.isPreview&&!(i.step.inner.options==null||c.value==null))for(const[t,a]of i.step.inner.options.entries())e(c.value.some(d=>d==a.text),t)}),(t,a)=>{const d=B;return r(),s("div",me,[l("div",fe,h(i.step.title),1),p(f,{contents:i.step.inner.contents},null,8,["contents"]),l("div",ve,[(r(!0),s(b,null,v(i.step.inner.options,m=>(r(),s("div",{key:m.id,class:"flex items-center gap-2"},[p(d,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=S=>c.value=S),inputId:m.id,name:"category",value:m.text},null,8,["modelValue","inputId","value"]),l("label",{for:m.id},h(m.text),9,ge)]))),128))])])}}});export{Ie as M,Be as _,Se as a,ze as b,Ve as c,B as d,$ as s};
