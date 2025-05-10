import{s as ce}from"./index-b31FG3hB.js";import{s as ee}from"./index-DdJW52L6.js";import{B as q,o as i,c as o,x as g,I as V,h as p,ae as te,e as v,t as M,af as H,d as ne,ag as pe,a as ie,ah as oe,r as k,f as y,w as z,b as w,j as A,ai as ae,g as N,ac as G,k as re,s as se,H as he,aj as ve,u as fe,p as me,m as ge,Q as ye,L as be,F as C,i as T,N as xe}from"./index-DvMEUTFI.js";import{s as ke}from"./index-gEtsoZIN.js";import{_ as we}from"./AHeader.vue_vue_type_script_setup_true_lang-CJh9TNSk.js";import{s as _e}from"./index-bfam60NI.js";import{b as je}from"./index-Bb3NBgzE.js";import{a as $e}from"./logo-Dl-wl1zX.js";import{a as K,t as J}from"./types-CIHSKO1M.js";import{P as Z}from"./pibody-BwAjMvHk.js";import{u as Me}from"./editor-store-CmTy21XP.js";import{u as Re,m as ze}from"./useSortable-WQEONQUz.js";import"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-DymMAcze.js";import"./index-CSkusN2b.js";import"./index-30rg-UU4.js";import"./StudentViewToggle.vue_vue_type_script_setup_true_lang-Ms66n8f5.js";import"./index-DKTTY6Z_.js";import"./index-BnETu33R.js";import"./index-DiTCltIY.js";var Ce=function(n){var t=n.dt;return`
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
`)},Te={root:function(n){var t=n.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},Be={root:function(n){var t=n.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},Se=q.extend({name:"divider",theme:Ce,classes:Be,inlineStyles:Te}),Pe={name:"BaseDivider",extends:te,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Se,provide:function(){return{$pcDivider:this,$parentInstance:this}}},le={name:"Divider",extends:Pe,inheritAttrs:!1},Ve=["aria-orientation"];function Le(e,n,t,s,f,a){return i(),o("div",g({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(i(),o("div",g({key:0,class:e.cx("content")},e.ptm("content")),[V(e.$slots,"default")],16)):p("",!0)],16,Ve)}le.render=Le;var Ee=function(n){var t=n.dt;return`
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
`)},Xe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ye=q.extend({name:"card",theme:Ee,classes:Xe}),De={name:"BaseCard",extends:te,style:Ye,provide:function(){return{$pcCard:this,$parentInstance:this}}},de={name:"Card",extends:De,inheritAttrs:!1};function Ae(e,n,t,s,f,a){return i(),o("div",g({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(i(),o("div",g({key:0,class:e.cx("header")},e.ptm("header")),[V(e.$slots,"header")],16)):p("",!0),v("div",g({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(i(),o("div",g({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(i(),o("div",g({key:0,class:e.cx("title")},e.ptm("title")),[V(e.$slots,"title")],16)):p("",!0),e.$slots.subtitle?(i(),o("div",g({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[V(e.$slots,"subtitle")],16)):p("",!0)],16)):p("",!0),v("div",g({class:e.cx("content")},e.ptm("content")),[V(e.$slots,"content")],16),e.$slots.footer?(i(),o("div",g({key:1,class:e.cx("footer")},e.ptm("footer")),[V(e.$slots,"footer")],16)):p("",!0)],16)],16)}de.render=Ae;var Ie=function(n){var t=n.dt;return`
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
`)},Ue={root:function(n){var t=n.instance,s=n.props;return["p-knob p-component",{"p-disabled":s.disabled,"p-invalid":t.$invalid}]},range:"p-knob-range",value:"p-knob-value",text:"p-knob-text"},Ne=q.extend({name:"knob",theme:Ie,classes:Ue}),Ke={name:"BaseKnob",extends:je,props:{size:{type:Number,default:100},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:function(){return H("knob.value.background").variable}},rangeColor:{type:String,default:function(){return H("knob.range.background").variable}},textColor:{type:String,default:function(){return H("knob.text.color").variable}},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:[String,Function],default:"{value}"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ne,provide:function(){return{$pcKnob:this,$parentInstance:this}}},P=3.14159265358979,ue={name:"Knob",extends:Ke,inheritAttrs:!1,emits:["change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*P/3,maxRadians:-P/3}},methods:{updateValueByOffset:function(n,t){var s=n-this.size/2,f=this.size/2-t,a=Math.atan2(f,s),_=-P/2-P/6;this.updateModel(a,_)},updateModel:function(n,t){var s;if(n>this.maxRadians)s=this.mapRange(n,this.minRadians,this.maxRadians,this.min,this.max);else if(n<t)s=this.mapRange(n+2*P,this.minRadians,this.maxRadians,this.min,this.max);else return;var f=Math.round((s-this.min)/this.step)*this.step+this.min;this.writeValue(f),this.$emit("change",f)},updateModelValue:function(n){n>this.max?this.writeValue(this.max):n<this.min?this.writeValue(this.min):this.writeValue(n)},mapRange:function(n,t,s,f,a){return(n-t)*(a-f)/(s-t)+f},onClick:function(n){!this.disabled&&!this.readonly&&this.updateValueByOffset(n.offsetX,n.offsetY)},onBlur:function(n){var t,s;(t=(s=this.formField).onBlur)===null||t===void 0||t.call(s,n)},onMouseDown:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),n.preventDefault())},onMouseUp:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),n.preventDefault())},onTouchStart:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),n.preventDefault())},onTouchEnd:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),n.preventDefault())},onMouseMove:function(n){!this.disabled&&!this.readonly&&(this.updateValueByOffset(n.offsetX,n.offsetY),n.preventDefault())},onTouchMove:function(n){if(!this.disabled&&!this.readonly&&n.touches.length==1){var t=this.$el.getBoundingClientRect(),s=n.targetTouches.item(0),f=s.clientX-t.left,a=s.clientY-t.top;this.updateValueByOffset(f,a)}},onKeyDown:function(n){if(!this.disabled&&!this.readonly)switch(n.code){case"ArrowRight":case"ArrowUp":{n.preventDefault(),this.updateModelValue(this.d_value+this.step);break}case"ArrowLeft":case"ArrowDown":{n.preventDefault(),this.updateModelValue(this.d_value-this.step);break}case"Home":{n.preventDefault(),this.writeValue(this.min);break}case"End":{n.preventDefault(),this.writeValue(this.max);break}case"PageUp":{n.preventDefault(),this.updateModelValue(this.d_value+10);break}case"PageDown":{n.preventDefault(),this.updateModelValue(this.d_value-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.d_value,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<P?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return typeof this.valueTemplate=="string"?this.valueTemplate.replace(/{value}/g,this.d_value):this.valueTemplate(this.d_value)}}},Oe=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],Fe=["d","stroke-width","stroke"],He=["d","stroke-width","stroke"],We=["fill"];function qe(e,n,t,s,f,a){return i(),o("div",g({class:e.cx("root")},e.ptmi("root")),[(i(),o("svg",g({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.d_value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:n[0]||(n[0]=function(){return a.onClick&&a.onClick.apply(a,arguments)}),onBlur:n[1]||(n[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onKeydown:n[2]||(n[2]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)}),onMousedown:n[3]||(n[3]=function(){return a.onMouseDown&&a.onMouseDown.apply(a,arguments)}),onMouseup:n[4]||(n[4]=function(){return a.onMouseUp&&a.onMouseUp.apply(a,arguments)}),onTouchstartPassive:n[5]||(n[5]=function(){return a.onTouchStart&&a.onTouchStart.apply(a,arguments)}),onTouchend:n[6]||(n[6]=function(){return a.onTouchEnd&&a.onTouchEnd.apply(a,arguments)})},e.ptm("svg")),[v("path",g({d:a.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,Fe),v("path",g({d:a.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,He),e.showValue?(i(),o("text",g({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("text")},e.ptm("text")),M(a.valueToDisplay),17,We)):p("",!0)],16,Oe))],16)}ue.render=qe;const Qe={class:"flex justify-center h-[174px] overflow-hidden"},Ge={key:0,class:"absolute top-2 left-2"},Je={key:1,class:"absolute top-0 right-0 text-sm"},Ze={key:0,class:"flex items-center gap-1 bg-yellow-500 text-white w-full px-2 py-[1px] rounded-bl-xl"},et={key:2,class:"flex items-center gap-1 bg-red-500 text-white px-2 py-[1px] rounded-bl-xl"},tt={key:2,class:"absolute bottom-0 left-0 text-sm"},nt={key:0,class:"bg-green-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},it={key:1,class:"bg-purple-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},ot={key:2,class:"bg-blue-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},at={key:3,class:"bg-red-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},rt={key:3,class:"absolute bottom-0 right-0 text-sm"},st={class:"bg-blue-500 text-white w-full px-2 py-[1px] rounded-tl-xl"},lt={class:"flex justify-between items-center px-4 py-1"},dt={class:"flex items-center"},ut={key:0,class:"pi pi-crown text-purple-500 bg-purple-100 p-2 rounded-md mr-2"},ct={key:0,class:"flex"},pt={key:1},W=ne({__name:"ProjectCard",props:{project:{}},emits:["after-remove"],setup(e,{emit:n}){const t=re(),s=pe(),f=ie(),{user:a}=oe(f),_=k(!1),r=e,O=n;function j(){s.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{L()}})}async function L(){_.value=!0;try{await K.deleteProjectByID(r.project.id),O("after-remove")}catch($){console.log($)}finally{_.value=!1}}function E(){t.push(`/project/${r.project.id}/edit`)}const B=k(r.project.cover_image.length>0?r.project.cover_image:Z);function X(){r.project.cover_gif&&(B.value=r.project.cover_gif)}function Y(){B.value=r.project.cover_image.length>0?r.project.cover_image:Z}return($,m)=>{const S=$e,D=ee,I=se,F=ue,l=_e,c=de,h=he("RouterLink");return i(),y(h,{to:_.value?"":`/project/${r.project.id}`,class:"w-full md:w-[300px]"},{default:z(()=>[w(c,{style:{height:"234px",overflow:"hidden"},class:"relative p-0",dt:{body:{padding:"0px",gap:"2px"}}},{header:z(()=>{var b,d,U;return[v("div",Qe,[w(S,{alt:"user header",src:B.value,class:"animate-fadein animate-once animate-duration-1000 animate-ease-in-out",onMouseover:X,onMouseleave:Y},null,8,["src"]),r.project.level>0?(i(),o("div",Ge,[r.project.level<3?(i(),y(D,{key:0,severity:"success",value:"Easy"})):r.project.level<5?(i(),y(D,{key:1,severity:"info",value:"Medium"})):r.project.level==5?(i(),y(D,{key:2,severity:"danger",value:"Hard"})):p("",!0)])):p("",!0),["editor","contributor"].includes(((b=A(a))==null?void 0:b.user_type)??"")?(i(),o("div",Je,[["prepare_for_submission","waiting_for_review","in_review","in_modify"].includes(r.project.stage)?(i(),o("div",Ze,[m[0]||(m[0]=v("i",{class:"pi pi-clock",style:{"font-size":"12px"}},null,-1)),v("div",null,M(r.project.stage.replace(/_/g," ").replace(/^./,R=>R.toUpperCase())),1)])):["ready_for_publish","published"].includes(r.project.stage)?(i(),o("div",{key:1,class:ae(["flex items-center gap-1 px-2 py-[1px] rounded-bl-xl",r.project.stage=="published"?"bg-green-500 text-white":"bg-green-100 text-green-700"])},[m[1]||(m[1]=v("i",{class:"pi pi-check-circle",style:{"font-size":"12px"}},null,-1)),v("div",null,M(r.project.stage.replace(/_/g," ").replace(/^./,R=>R.toUpperCase())),1)],2)):["rejected"].includes(r.project.stage)?(i(),o("div",et,[m[2]||(m[2]=v("i",{class:"pi pi-times-circle",style:{"font-size":"12px"}},null,-1)),v("div",null,M(r.project.stage.replace(/_/g," ").replace(/^./,R=>R.toUpperCase())),1)])):p("",!0)])):p("",!0),["editor","contributor"].includes(((d=A(a))==null?void 0:d.user_type)??"")?(i(),o("div",tt,[r.project.access_type=="freemium"?(i(),o("div",nt,"Free")):r.project.access_type=="premium"?(i(),o("div",it,"Premium")):r.project.access_type=="demo"?(i(),o("div",ot,"Demo")):r.project.access_type=="hackaton"?(i(),o("div",at,"Hackaton")):p("",!0)])):p("",!0),["editor","contributor"].includes(((U=A(a))==null?void 0:U.user_type)??"")?(i(),o("div",rt,[v("div",st,[m[3]||(m[3]=N("Created by ")),v("span",null,M($.project.created_by),1)])])):p("",!0)])]}),subtitle:z(()=>{var b;return[v("div",lt,[v("div",dt,[r.project.access_type=="premium"?(i(),o("span",ut)):p("",!0),v("div",null,M(r.project.title),1)]),["editor","contributor"].includes(((b=A(a))==null?void 0:b.user_type)??"")?(i(),o("div",ct,[w(I,{icon:r.project.is_editable?"pi pi-pen-to-square":"pi pi-eye",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:G(E,["prevent"])},null,8,["icon"]),r.project.is_editable?(i(),y(I,{key:0,icon:"pi pi-trash",severity:"danger",variant:"text",rounded:"","aria-label":"Remove",onClick:G(j,["prevent"]),disabled:_.value,loading:_.value},null,8,["disabled","loading"])):p("",!0)])):(i(),o("div",pt,[r.project.student_progress<100?(i(),y(F,{key:0,"model-value":r.project.student_progress,size:50,"value-template":d=>`${d}%`,readonly:"",valueColor:"orange"},null,8,["model-value","value-template"])):(i(),y(l,{key:1,label:$.$t("done"),icon:"pi pi-check",class:"bg-primary text-sm h-6 text-white font-semibold"},{icon:z(()=>m[4]||(m[4]=[v("i",{class:"pi pi-check text-white font-semibold",style:{"font-size":"12px"}},null,-1)])),_:1},8,["label"]))]))])]}),_:1})]),_:1},8,["to"])}}}),ht={class:"flex flex-col min-h-screen bg-slate-50"},vt={class:"border border-dashed rounded-xl border-green-400 overflow-hidden"},ft={key:0,class:"flex px-4 sm:px-12"},mt={key:1,class:"flex px-4 sm:px-12"},gt={key:3,class:"flex px-4 sm:px-12"},yt={key:4,class:"flex flex-wrap justify-center gap-8 px-4 sm:px-12 pb-8"},Yt=ne({__name:"ProjectsView",setup(e){const n=ve("el"),t=fe(),{locale:s}=me(),f=re(),a=Me(),{addLesson:_}=a,r=ie(),{user:O}=oe(r),j=k([]),L=k([]),E=k([]),B=k(0),X=k([0,0,0,0,0,0]),Y=k([0,0,0,0,0,0]),$=k(!1),m=k(!1);Re(n,j,{onUpdate:l=>{ze(j.value,l.oldIndex,l.newIndex,l),xe(async()=>{const c=[];j.value.map(h=>{const b=parseInt(h.id,10);c.push(b)});try{await K.changeProjectsOrder(c),t.add({severity:"success",summary:"Projects order saved!",life:2e3})}catch(h){t.add({severity:"error",summary:"Order set error!",detail:h,life:2e3})}})}});async function S(){if(!$.value){$.value=!0;try{const{data:l}=await K.getProjects();$.value=!1,j.value=[],L.value=[],E.value=[],B.value=l.length,X.value=[0,0,0,0,0,0],Y.value=[0,0,0,0,0,0];for(const c of l)c.is_guidable?X.value[c.layer]++:Y.value[c.layer]++;for(const c of l){const h=await J(c,s.value);j.value.push(h),h.is_guidable?L.value.push(h):E.value.push(h)}}catch(l){console.log(l)}finally{$.value=!1}}}ge(S),ye(s,S);async function D(){m.value=!0;try{const{data:l}=await K.createProject(),c=await J(l,s.value);_(c),f.push(`/project/${c.id}/edit`)}catch(l){console.log(l)}finally{m.value=!1}}const I=be(()=>{const l=new Map,c=new Map;for(const d of L.value)l.has(d.layer)||l.set(d.layer,[]),l.get(d.layer).push(d);for(const d of E.value)c.has(d.layer)||c.set(d.layer,[]),c.get(d.layer).push(d);const h=[];for(let d=0;d<=5;d++)h.push({id:d,guided:l.get(d)||[],unguided:c.get(d)||[]});const b=h.shift();return b&&h.push(b),h}),F=["secondary","success","info","warn","danger","contrast"];return(l,c)=>{var Q;const h=ke,b=se,d=le,U=ee,R=ce;return i(),o("div",ht,[w(we,{class:"sticky top-0 z-10 mb-4"}),["editor","contributor"].includes(((Q=A(O))==null?void 0:Q.user_type)??"")?(i(),o("div",{key:0,ref_key:"el",ref:n,class:"flex flex-wrap justify-center gap-8 px-4 sm:px-12 pb-8"},[(i(!0),o(C,null,T(j.value,u=>(i(),y(W,{key:u.id,project:u,onAfterRemove:S},null,8,["project"]))),128)),(i(!0),o(C,null,T(B.value-j.value.length,u=>(i(),y(h,{key:u,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128)),v("div",vt,[w(b,{variant:"text",style:{width:"300px",height:"234px"},class:"bg-green-50",onClick:D,loading:m.value,disabled:m.value},{icon:z(()=>c[0]||(c[0]=[v("i",{class:"pi pi-plus text-3xl"},null,-1)])),_:1},8,["loading","disabled"])])],512)):(i(!0),o(C,{key:1},T(I.value,u=>(i(),o("div",{key:u.id,class:"flex flex-col gap-2"},[u.guided.length>0||u.unguided.length>0?(i(),o("div",ft,[w(d),w(U,{class:"min-w-fit text-2xl px-4",severity:F[u.id]},{default:z(()=>[N(M(u.id>0?`Level -
          ${u.id-1}`:"Other"),1)]),_:2},1032,["severity"]),w(d)])):p("",!0),u.guided.length>0?(i(),o("div",mt,[w(R,{class:"min-w-fit pr-4",size:"small",severity:"success"},{default:z(()=>[N(M(l.$t("pages.projects.learn")),1)]),_:1})])):p("",!0),u.guided.length>0?(i(),o("div",{key:2,class:ae(["flex flex-wrap justify-center gap-8 px-4 sm:px-12",{"pb-8":u.unguided.length==0}])},[(i(!0),o(C,null,T(u.guided,x=>(i(),y(W,{key:x.id,project:x,id:x.id},null,8,["project","id"]))),128)),(i(!0),o(C,null,T(X.value[u.id]-u.guided.length,x=>(i(),y(h,{key:x,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))],2)):p("",!0),u.unguided.length>0?(i(),o("div",gt,[w(R,{class:"min-w-fit pr-4",size:"small",severity:"info"},{default:z(()=>[N(M(l.$t("pages.projects.practice")),1)]),_:1})])):p("",!0),u.unguided.length>0?(i(),o("div",yt,[(i(!0),o(C,null,T(u.unguided,x=>(i(),y(W,{key:x.id,project:x,onAfterRemove:S},null,8,["project"]))),128)),(i(!0),o(C,null,T(Y.value[u.id]-u.unguided.length,x=>(i(),y(h,{key:x,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))])):p("",!0)]))),128))])}}});export{Yt as default};
