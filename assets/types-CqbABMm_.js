import{Z as f,o as d,c as p,a as l,y as i,_ as g,ao as m,aS as y,aQ as v,r as u,X as w,k as b,m as _,aq as C}from"./index-D3ENlnNp.js";import{a as $}from"./index-CVYngPYM.js";import{h as a}from"./index-BplbRwNZ.js";var k={name:"MinusIcon",extends:f};function B(n,c,e,t,r,o){return d(),p("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),c[0]||(c[0]=[l("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}k.render=B;var I=function(c){var e=c.dt;return`
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
`)},P={root:function(c){var e=c.instance,t=c.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":t.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":t.size==="small","p-checkbox-lg p-inputfield-lg":t.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},S=g.extend({name:"checkbox",theme:I,classes:P}),j={name:"BaseCheckbox",extends:$,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function z(n){return N(n)||F(n)||G(n)||A()}function A(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(n,c){if(n){if(typeof n=="string")return h(n,c);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(n,c):void 0}}function F(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function N(n){if(Array.isArray(n))return h(n)}function h(n,c){(c==null||c>n.length)&&(c=n.length);for(var e=0,t=Array(c);e<c;e++)t[e]=n[e];return t}var q={name:"Checkbox",extends:j,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(c){this.d_indeterminate=c}},methods:{getPTOptions:function(c){var e=c==="root"?this.ptmi:this.ptm;return e(c,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(c){var e=this;if(!this.disabled&&!this.readonly){var t=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,r;this.binary?r=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?r=t.filter(function(o){return!m(o,e.value)}):r=t?[].concat(z(t),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(r,c):this.writeValue(r,c),this.$emit("change",c)}},onFocus:function(c){this.$emit("focus",c)},onBlur:function(c){var e,t;this.$emit("blur",c),(e=(t=this.formField).onBlur)===null||e===void 0||e.call(t,c)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var c=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?c===this.trueValue:y(this.value,c)}},components:{CheckIcon:v,MinusIcon:k}},V=["data-p-checked","data-p-indeterminate","data-p-disabled"],L=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function T(n,c,e,t,r,o){var s=u("CheckIcon"),x=u("MinusIcon");return d(),p("div",i({class:n.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-indeterminate":r.d_indeterminate||void 0,"data-p-disabled":n.disabled}),[l("input",i({id:n.inputId,type:"checkbox",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:o.groupName,checked:o.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,required:n.required,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,"aria-checked":r.d_indeterminate?"mixed":void 0,onFocus:c[0]||(c[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:c[1]||(c[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:c[2]||(c[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,L),l("div",i({class:n.cx("box")},o.getPTOptions("box")),[w(n.$slots,"icon",{checked:o.checked,indeterminate:r.d_indeterminate,class:C(n.cx("icon"))},function(){return[o.checked?(d(),b(s,i({key:0,class:n.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):r.d_indeterminate?(d(),b(x,i({key:1,class:n.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):_("",!0)]})],16)],16,V)}q.render=T;const E={getProjects:H,createProject:M,getProjectByID:Z,updateProjectByID:O,deleteProjectByID:Q,getProjectTranslationByID:U,updateProjectTranslationByID:W,changeProjectsOrder:X,updateProjectEditingStatus:J};async function H(){try{return await a.get("/projects")}catch(n){throw console.log(n),n}}async function M(){try{return await a.post("/project",{cover_image:"",is_guidable:!0,last_edited_by:0,video_url:"",access_type:"freemium",project_editing_status:"inreview"})}catch(n){throw console.log(n),n}}async function Z(n){try{return await a.get(`/project/${n}`)}catch(c){throw console.log(c),c}}async function O(n,c,e,t,r,o){try{return await a.put(`/project/${n}`,{cover_image:c,cover_gif:e,is_guidable:t,access_type:r,level:o})}catch(s){throw console.log(s),s}}async function Q(n){try{return await a.delete(`/project/${n}`)}catch(c){throw console.log(c),c}}async function U(n,c){try{return await a.get(`/project/${n}/translation/${c}`)}catch(e){throw console.log(e),e}}async function W(n,c,e,t){try{return await a.put(`/project/${n}/translation/${c}`,{content:{description:t},name:e})}catch(r){throw console.log(r),r}}async function X(n){try{return await a.patch("/projects/order",{order:n})}catch(c){throw console.log(c),c}}async function J(n,c){try{return await a.patch(`/project/${n}/status/${c}`)}catch(e){throw console.log(e),e}}async function D(n,c){const{data:e}=await E.getProjectTranslationByID(n.id.toString(),c),t=e;return{id:n.id.toString(),cover_image:n.cover_image,cover_gif:n.cover_gif,last_updated_time:n.last_updated_time,last_edited_by:n.last_edited_by,is_guidable:n.is_guidable,editing_status:n.project_editing_status,student_progress:n.student_progress,video_url:n.video_url,title:t.name,description:t.content.description,level:n.level,access_type:n.access_type,steps:[]}}export{E as a,q as b,k as s,D as t};
