import{_ as K,o as a,c as i,y as p,X as z,m as v,ab as J,a as u,t as Q,ac as G,k as g,a9 as xe,d as ce,ad as $e,j as ue,ae as pe,h as f,w as C,b as m,u as A,Y as ie,e as he,s as ve,r as Me,af as _e,i as je,ag as Re,f as ze,A as Ce,q as re,F as V,n as P,x as De}from"./index-ngKO0IH0.js";import{s as Te}from"./index-afXciwfA.js";import{s as Be,a as Se,b as Ve,c as Pe}from"./index-C_Gt994I.js";import{b as Le,s as Ee}from"./index-D0T-IxUR.js";import{_ as Xe}from"./AHeader.vue_vue_type_script_setup_true_lang-4ruwt0Nu.js";import{s as Ye}from"./logo-C6HUOSsX.js";import{a as U,t as se}from"./types-Df3fvLJQ.js";import{P as le}from"./pibody-BwAjMvHk.js";import{u as Ae}from"./editor-store-DasqN8Yo.js";import{u as Ie,m as Ue}from"./useSortable-Cl1fJ8xS.js";import"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-yTsAru4w.js";import"./index-D1BTjiMw.js";var Ke=function(n){var t=n.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(t("divider.horizontal.margin"),`;
    padding: `).concat(t("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid `).concat(t("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(t("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(t("divider.vertical.margin"),`;
    padding: `).concat(t("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid `).concat(t("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(t("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(t("divider.content.background"),`;
    color: `).concat(t("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`)},Fe={root:function(n){var t=n.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},Ne={root:function(n){var t=n.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},Oe=K.extend({name:"divider",theme:Ke,classes:Ne,inlineStyles:Fe}),He={name:"BaseDivider",extends:J,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Oe,provide:function(){return{$pcDivider:this,$parentInstance:this}}},fe={name:"Divider",extends:He,inheritAttrs:!1},qe=["aria-orientation"];function Ge(e,n,t,r,h,o){return a(),i("div",p({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(a(),i("div",p({key:0,class:e.cx("content")},e.ptm("content")),[z(e.$slots,"default")],16)):v("",!0)],16,qe)}fe.render=Ge;var We=function(n){var t=n.dt;return`
.p-card {
    background: `.concat(t("card.background"),`;
    color: `).concat(t("card.color"),`;
    box-shadow: `).concat(t("card.shadow"),`;
    border-radius: `).concat(t("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(t("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(t("card.title.font.size"),`;
    font-weight: `).concat(t("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(t("card.subtitle.color"),`;
}
`)},Je={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Qe=K.extend({name:"card",theme:We,classes:Je}),Ze={name:"BaseCard",extends:J,style:Qe,provide:function(){return{$pcCard:this,$parentInstance:this}}},me={name:"Card",extends:Ze,inheritAttrs:!1};function et(e,n,t,r,h,o){return a(),i("div",p({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),i("div",p({key:0,class:e.cx("header")},e.ptm("header")),[z(e.$slots,"header")],16)):v("",!0),u("div",p({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),i("div",p({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),i("div",p({key:0,class:e.cx("title")},e.ptm("title")),[z(e.$slots,"title")],16)):v("",!0),e.$slots.subtitle?(a(),i("div",p({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[z(e.$slots,"subtitle")],16)):v("",!0)],16)):v("",!0),u("div",p({class:e.cx("content")},e.ptm("content")),[z(e.$slots,"content")],16),e.$slots.footer?(a(),i("div",p({key:1,class:e.cx("footer")},e.ptm("footer")),[z(e.$slots,"footer")],16)):v("",!0)],16)],16)}me.render=et;var tt=function(n){var t=n.dt;return`
.p-knob-range {
    fill: none;
    transition: stroke 0.1s ease-in;
}

.p-knob-value {
    animation-name: p-knob-dash-frame;
    animation-fill-mode: forwards;
    fill: none;
}

.p-knob-text {
    font-size: 1.3rem;
    text-align: center;
}

.p-knob svg {
    border-radius: 50%;
    outline-color: transparent;
    transition: background `.concat(t("knob.transition.duration"),", color ").concat(t("knob.transition.duration"),", outline-color ").concat(t("knob.transition.duration"),", box-shadow ").concat(t("knob.transition.duration"),`;
}

.p-knob svg:focus-visible {
    box-shadow: `).concat(t("knob.focus.ring.shadow"),`;
    outline: `).concat(t("knob.focus.ring.width")," ").concat(t("knob.focus.ring.style")," ").concat(t("knob.focus.ring.color"),`;
    outline-offset: `).concat(t("knob.focus.ring.offset"),`;
}

@keyframes p-knob-dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
`)},nt={root:function(n){var t=n.instance,r=n.props;return["p-knob p-component",{"p-disabled":r.disabled,"p-invalid":t.$invalid}]},range:"p-knob-range",value:"p-knob-value",text:"p-knob-text"},at=K.extend({name:"knob",theme:tt,classes:nt}),ot={name:"BaseKnob",extends:Le,props:{size:{type:Number,default:100},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:function(){return G("knob.value.background").variable}},rangeColor:{type:String,default:function(){return G("knob.range.background").variable}},textColor:{type:String,default:function(){return G("knob.text.color").variable}},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:[String,Function],default:"{value}"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:at,provide:function(){return{$pcKnob:this,$parentInstance:this}}},L=3.14159265358979,ge={name:"Knob",extends:ot,inheritAttrs:!1,emits:["change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*L/3,maxRadians:-L/3}},methods:{updateValueByOffset:function(n,t){var r=n-this.size/2,h=this.size/2-t,o=Math.atan2(h,r),b=-L/2-L/6;this.updateModel(o,b)},updateModel:function(n,t){var r;if(n>this.maxRadians)r=this.mapRange(n,this.minRadians,this.maxRadians,this.min,this.max);else if(n<t)r=this.mapRange(n+2*L,this.minRadians,this.maxRadians,this.min,this.max);else return;var h=Math.round((r-this.min)/this.step)*this.step+this.min;this.writeValue(h),this.$emit("change",h)},updateModelValue:function(n){n>this.max?this.writeValue(this.max):n<this.min?this.writeValue(this.min):this.writeValue(n)},mapRange:function(n,t,r,h,o){return(n-t)*(o-h)/(r-t)+h},onClick:function(n){!this.disabled&&!this.readonly&&this.updateValueByOffset(n.offsetX,n.offsetY)},onBlur:function(n){var t,r;(t=(r=this.formField).onBlur)===null||t===void 0||t.call(r,n)},onMouseDown:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),n.preventDefault())},onMouseUp:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),n.preventDefault())},onTouchStart:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),n.preventDefault())},onTouchEnd:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),n.preventDefault())},onMouseMove:function(n){!this.disabled&&!this.readonly&&(this.updateValueByOffset(n.offsetX,n.offsetY),n.preventDefault())},onTouchMove:function(n){if(!this.disabled&&!this.readonly&&n.touches.length==1){var t=this.$el.getBoundingClientRect(),r=n.targetTouches.item(0),h=r.clientX-t.left,o=r.clientY-t.top;this.updateValueByOffset(h,o)}},onKeyDown:function(n){if(!this.disabled&&!this.readonly)switch(n.code){case"ArrowRight":case"ArrowUp":{n.preventDefault(),this.updateModelValue(this.d_value+this.step);break}case"ArrowLeft":case"ArrowDown":{n.preventDefault(),this.updateModelValue(this.d_value-this.step);break}case"Home":{n.preventDefault(),this.writeValue(this.min);break}case"End":{n.preventDefault(),this.writeValue(this.max);break}case"PageUp":{n.preventDefault(),this.updateModelValue(this.d_value+10);break}case"PageDown":{n.preventDefault(),this.updateModelValue(this.d_value-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.d_value,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<L?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return typeof this.valueTemplate=="string"?this.valueTemplate.replace(/{value}/g,this.d_value):this.valueTemplate(this.d_value)}}},it=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],rt=["d","stroke-width","stroke"],st=["d","stroke-width","stroke"],lt=["fill"];function dt(e,n,t,r,h,o){return a(),i("div",p({class:e.cx("root")},e.ptmi("root")),[(a(),i("svg",p({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.d_value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:n[0]||(n[0]=function(){return o.onClick&&o.onClick.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:n[2]||(n[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),onMousedown:n[3]||(n[3]=function(){return o.onMouseDown&&o.onMouseDown.apply(o,arguments)}),onMouseup:n[4]||(n[4]=function(){return o.onMouseUp&&o.onMouseUp.apply(o,arguments)}),onTouchstartPassive:n[5]||(n[5]=function(){return o.onTouchStart&&o.onTouchStart.apply(o,arguments)}),onTouchend:n[6]||(n[6]=function(){return o.onTouchEnd&&o.onTouchEnd.apply(o,arguments)})},e.ptm("svg")),[u("path",p({d:o.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,rt),u("path",p({d:o.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,st),e.showValue?(a(),i("text",p({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("text")},e.ptm("text")),Q(o.valueToDisplay),17,lt)):v("",!0)],16,it))],16)}ge.render=dt;var ct=function(n){var t=n.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(t("tag.primary.background"),`;
    color: `).concat(t("tag.primary.color"),`;
    font-size: `).concat(t("tag.font.size"),`;
    font-weight: `).concat(t("tag.font.weight"),`;
    padding: `).concat(t("tag.padding"),`;
    border-radius: `).concat(t("tag.border.radius"),`;
    gap: `).concat(t("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(t("tag.icon.size"),`;
    width: `).concat(t("tag.icon.size"),`;
    height:`).concat(t("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(t("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(t("tag.success.background"),`;
    color: `).concat(t("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(t("tag.info.background"),`;
    color: `).concat(t("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(t("tag.warn.background"),`;
    color: `).concat(t("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(t("tag.danger.background"),`;
    color: `).concat(t("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(t("tag.secondary.background"),`;
    color: `).concat(t("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(t("tag.contrast.background"),`;
    color: `).concat(t("tag.contrast.color"),`;
}
`)},ut={root:function(n){var t=n.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},pt=K.extend({name:"tag",theme:ct,classes:ut}),ht={name:"BaseTag",extends:J,props:{value:null,severity:null,rounded:Boolean,icon:String},style:pt,provide:function(){return{$pcTag:this,$parentInstance:this}}},ye={name:"Tag",extends:ht,inheritAttrs:!1};function vt(e,n,t,r,h,o){return a(),i("span",p({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(a(),g(xe(e.$slots.icon),p({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),i("span",p({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):v("",!0),e.value!=null||e.$slots.default?z(e.$slots,"default",{key:2},function(){return[u("span",p({class:e.cx("label")},e.ptm("label")),Q(e.value),17)]}):v("",!0)],16)}ye.render=vt;const ft={class:"h-[174px] overflow-hidden"},mt={key:0,class:"absolute top-2 left-2"},gt={key:1,class:"absolute top-0 right-0"},yt={key:0,class:"bg-yellow-500 text-white w-full px-2 py-[1px] rounded-bl-xl"},bt={key:1,class:"bg-green-500 text-white px-2 py-[1px] rounded-bl-xl"},kt={key:2,class:"absolute bottom-0 left-0"},wt={key:0,class:"bg-green-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},xt={key:1,class:"bg-purple-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},$t={key:2,class:"bg-blue-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},Mt={key:3,class:"bg-red-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},_t={class:"flex justify-between items-center px-4 py-1"},jt={class:"flex items-center"},Rt={key:0,class:"pi pi-crown text-purple-500 bg-purple-100 p-2 rounded-md mr-2"},zt={class:"py-3"},Ct={key:0,class:"flex"},Dt={key:1},W=ce({__name:"ProjectCard",props:{project:{}},emits:["after-remove"],setup(e,{emit:n}){const t=he(),r=$e(),h=ue(),{user:o}=pe(h),b=f(!1),l=e,I=n;function k(){r.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{D()}})}async function D(){b.value=!0;try{await U.deleteProjectByID(l.project.id),I("after-remove")}catch(x){console.log(x)}finally{b.value=!1}}function T(){t.push(`/project/${l.project.id}/edit`)}const B=f(l.project.cover_image.length>0?l.project.cover_image:le);function E(){l.project.cover_gif&&(B.value=l.project.cover_gif)}function X(){B.value=l.project.cover_image.length>0?l.project.cover_image:le}return(x,M)=>{const S=Ye,Y=ye,w=ve,_=ge,F=Be,N=me,$=Me("RouterLink");return a(),g($,{to:b.value?"":`/project/${l.project.id}`},{default:C(()=>[m(N,{style:{width:"300px",height:"234px",overflow:"hidden"},class:"relative p-0",dt:{body:{padding:"0px",gap:"2px"}}},{header:C(()=>{var j,R;return[u("div",ft,[m(S,{alt:"user header",src:B.value,class:"animate-fadein animate-once animate-duration-1000 animate-ease-in-out",onMouseover:E,onMouseleave:X},null,8,["src"]),l.project.level>0?(a(),i("div",mt,[l.project.level<3?(a(),g(Y,{key:0,severity:"success",value:"Easy"})):l.project.level<5?(a(),g(Y,{key:1,severity:"info",value:"Medium"})):l.project.level==5?(a(),g(Y,{key:2,severity:"danger",value:"Hard"})):v("",!0)])):v("",!0),((j=A(o))==null?void 0:j.user_type)=="editor"?(a(),i("div",gt,[l.project.editing_status=="inreview"?(a(),i("div",yt,"In review")):(a(),i("div",bt,"Published"))])):v("",!0),((R=A(o))==null?void 0:R.user_type)=="editor"?(a(),i("div",kt,[l.project.access_type=="freemium"?(a(),i("div",wt,"Free")):l.project.access_type=="premium"?(a(),i("div",xt,"Premium")):l.project.access_type=="demo"?(a(),i("div",$t,"Demo")):l.project.access_type=="hackaton"?(a(),i("div",Mt,"Hackaton")):v("",!0)])):v("",!0)])]}),subtitle:C(()=>{var j;return[u("div",_t,[u("div",jt,[l.project.access_type=="premium"?(a(),i("span",Rt)):v("",!0),u("div",zt,Q(l.project.title),1)]),((j=A(o))==null?void 0:j.user_type)=="editor"?(a(),i("div",Ct,[m(w,{icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:ie(T,["prevent"])}),m(w,{icon:"pi pi-trash",severity:"danger",variant:"text",rounded:"","aria-label":"Remove",onClick:ie(k,["prevent"]),disabled:b.value,loading:b.value},null,8,["disabled","loading"])])):(a(),i("div",Dt,[l.project.student_progress<100?(a(),g(_,{key:0,"model-value":l.project.student_progress,size:50,"value-template":R=>`${R}%`,readonly:"",valueColor:"orange"},null,8,["model-value","value-template"])):(a(),g(F,{key:1,label:x.$t("done"),icon:"pi pi-check",class:"bg-primary text-sm h-6 text-white font-semibold"},{icon:C(()=>M[0]||(M[0]=[u("i",{class:"pi pi-check text-white font-semibold",style:{"font-size":"12px"}},null,-1)])),_:1},8,["label"]))]))])]}),_:1})]),_:1},8,["to"])}}}),Tt={class:"flex flex-col min-h-screen bg-slate-50"},Bt={class:"flex gap-4 bg-slate-50 py-4 px-12 items-center"},St={class:"flex px-12 pb-4"},Vt={key:0,class:"text-2xl pr-4"},Pt={class:"border border-dashed rounded-xl border-green-400 overflow-hidden"},Lt={key:1,class:"flex flex-col gap-4 pb-8"},Et={key:0,class:"flex h-[256px] gap-2 px-3"},Xt={class:"flex px-12 pb-4"},Yt={class:"flex flex-wrap justify-center gap-8 px-12"},de=332,Qt=ce({__name:"ProjectsView",setup(e){const n=_e("el"),t=je(),{locale:r}=Re(),h=he(),o=Ae(),{addLesson:b}=o,l=ue(),{user:I}=pe(l),k=f([]),D=f([]),T=f([]),B=f(0),E=f(0),X=f(0),x=f(!1),M=f(!1);Ie(n,k,{onUpdate:s=>{Ue(k.value,s.oldIndex,s.newIndex,s),De(async()=>{const d=[];k.value.map(y=>{const O=parseInt(y.id,10);d.push(O)});try{await U.changeProjectsOrder(d),t.add({severity:"success",summary:"Projects order saved!",life:2e3})}catch(y){t.add({severity:"error",summary:"Order set error!",detail:y,life:2e3})}})}});async function S(){if(!x.value){x.value=!0;try{const{data:s}=await U.getProjects();x.value=!1,k.value=[],D.value=[],T.value=[],B.value=s.length,E.value=0,X.value=0;for(const d of s)d.is_guidable?E.value++:X.value++;for(const d of s){const y=await se(d,r.value);k.value.push(y),y.is_guidable?D.value.push(y):T.value.push(y)}}catch(s){console.log(s)}finally{x.value=!1}}}ze(S),Ce(r,S);async function Y(){M.value=!0;try{const{data:s}=await U.createProject(),d=await se(s,r.value);b(d),h.push(`/project/${d.id}/edit`)}catch(s){console.log(s)}finally{M.value=!1}}const w=f(""),_=f(null),F=()=>{_.value&&_.value.scrollBy({left:-de,behavior:"smooth"})},N=()=>{_.value&&_.value.scrollBy({left:de,behavior:"smooth"})},$=f(""),j=f(["Easy","Medium","Hard"]),R=f(""),be=f(["LED","switch","push-button","light-sensor","touch-sensor","potentiometer","encoder","motion-detector","microphone","climate-sensor","gyro-accel","buzzer","color-sensor","joystick","distance-sensor","servo"]);function Z(s){return s==0?"":s<3?"Easy":s<5?"Medium":s==5?"Hard":""}const ee=re(()=>D.value.filter(s=>(!$.value.length||$.value.includes(Z(s.level)))&&(!w.value||s.title.toLowerCase().includes(w.value.toLowerCase())))),ke=re(()=>T.value.filter(s=>(!$.value.length||$.value.includes(Z(s.level)))&&(!w.value||s.title.toLowerCase().includes(w.value.toLowerCase()))));return(s,d)=>{var ae,oe;const y=Se,O=Ee,we=Ve,te=Pe,ne=fe,H=Te,q=ve;return a(),i("div",Tt,[m(Xe,{class:"sticky top-0 z-10"}),u("div",Bt,[m(we,null,{default:C(()=>[m(y,{class:"text-primary"},{default:C(()=>d[3]||(d[3]=[u("i",{class:"pi pi-search"},null,-1)])),_:1}),m(O,{type:"text",modelValue:w.value,"onUpdate:modelValue":d[0]||(d[0]=c=>w.value=c),placeholder:"Search",variant:"filled",class:"h-fit bg-white"},null,8,["modelValue"])]),_:1}),m(te,{modelValue:R.value,"onUpdate:modelValue":d[1]||(d[1]=c=>R.value=c),options:be.value,"max-selected-labels":3,placeholder:"Filter by modules",display:"chip",variant:"filled",class:"bg-white min-w-60"},null,8,["modelValue","options"]),m(te,{modelValue:$.value,"onUpdate:modelValue":d[2]||(d[2]=c=>$.value=c),options:j.value,placeholder:"Filter by level",display:"chip",variant:"filled",class:"bg-white min-w-60"},null,8,["modelValue","options"])]),u("div",St,[((ae=A(I))==null?void 0:ae.user_type)!="editor"?(a(),i("div",Vt,"Learn")):v("",!0),m(ne)]),((oe=A(I))==null?void 0:oe.user_type)=="editor"?(a(),i("div",{key:0,ref_key:"el",ref:n,class:"flex flex-wrap justify-center gap-8 px-12 pb-8"},[(a(!0),i(V,null,P(k.value,c=>(a(),g(W,{key:c.id,project:c,onAfterRemove:S},null,8,["project"]))),128)),(a(!0),i(V,null,P(B.value-k.value.length,c=>(a(),g(H,{key:c,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128)),u("div",Pt,[m(q,{variant:"text",style:{width:"300px",height:"234px"},class:"bg-green-50",onClick:Y,loading:M.value,disabled:M.value},{icon:C(()=>d[4]||(d[4]=[u("i",{class:"pi pi-plus text-3xl"},null,-1)])),_:1},8,["loading","disabled"])])],512)):(a(),i("div",Lt,[ee.value.length>0?(a(),i("div",Et,[m(q,{icon:"pi pi-angle-left",onClick:F,class:"self-center",severity:"secondary"}),u("div",{ref_key:"scrollContainer",ref:_,class:"flex items-center flex-grow snap-x snap-mandatory overflow-x-auto max-w-screen gap-8"},[(a(!0),i(V,null,P(ee.value,c=>(a(),g(W,{key:c.id,project:c,id:c.id,class:"snap-start shrink-0 w-[300px]"},null,8,["project","id"]))),128)),(a(!0),i(V,null,P(E.value-D.value.length,c=>(a(),g(H,{key:c,width:"300px",height:"234px",class:"rounded-xl shadow-sm shrink-0 w-[300px]"}))),128))],512),m(q,{icon:"pi pi-angle-right",onClick:N,class:"self-center",severity:"secondary"})])):v("",!0),u("div",Xt,[d[5]||(d[5]=u("div",{class:"text-2xl pr-4"},"Practice",-1)),m(ne)]),u("div",Yt,[(a(!0),i(V,null,P(ke.value,c=>(a(),g(W,{key:c.id,project:c,onAfterRemove:S},null,8,["project"]))),128)),(a(!0),i(V,null,P(X.value-T.value.length,c=>(a(),g(H,{key:c,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))])]))])}}});export{Qt as default};
