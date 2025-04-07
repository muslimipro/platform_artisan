import{_ as W,o as a,c as i,y as m,X as L,m as f,ab as le,a as c,t as de,ac as q,d as ue,ad as we,j as ce,ae as pe,h,k as y,w as C,b as v,u as A,Y as ae,e as he,s as ve,r as ke,af as _e,i as $e,ag as Me,f as Re,A as je,q as oe,F as B,n as S,x as Ce}from"./index-DXB2I9xK.js";import{s as ze}from"./index-BcroYAgO.js";import{s as De,a as Ve,b as Te}from"./index-CUQAJOh4.js";import{b as Be,s as Se}from"./index-xNe5y7OU.js";import{_ as Pe}from"./AHeader.vue_vue_type_script_setup_true_lang-LN9f1ioW.js";import{s as Le}from"./index-DeZkeaEe.js";import{s as Ee}from"./index-BPtqFzci.js";import{s as Xe}from"./logo-BzlekoRn.js";import{a as U,t as ie}from"./types-BqpaHL8x.js";import{P as re}from"./pibody-BwAjMvHk.js";import{u as Ye}from"./editor-store-DoZ1Lm03.js";import{u as Ae,m as Ie}from"./useSortable-DrEVQ-ke.js";import"./index-oIFTCw5O.js";import"./index-BZ9krLl1.js";import"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-C1p2VIdv.js";import"./index-BuAiehrN.js";var Ue=function(n){var t=n.dt;return`
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
`)},Ke={root:function(n){var t=n.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},Fe={root:function(n){var t=n.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},Ne=W.extend({name:"divider",theme:Ue,classes:Fe,inlineStyles:Ke}),Oe={name:"BaseDivider",extends:le,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Ne,provide:function(){return{$pcDivider:this,$parentInstance:this}}},me={name:"Divider",extends:Oe,inheritAttrs:!1},He=["aria-orientation"];function qe(e,n,t,s,p,o){return a(),i("div",m({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(a(),i("div",m({key:0,class:e.cx("content")},e.ptm("content")),[L(e.$slots,"default")],16)):f("",!0)],16,He)}me.render=qe;var Ge=function(n){var t=n.dt;return`
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
`)},We={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Je=W.extend({name:"card",theme:Ge,classes:We}),Qe={name:"BaseCard",extends:le,style:Je,provide:function(){return{$pcCard:this,$parentInstance:this}}},fe={name:"Card",extends:Qe,inheritAttrs:!1};function Ze(e,n,t,s,p,o){return a(),i("div",m({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),i("div",m({key:0,class:e.cx("header")},e.ptm("header")),[L(e.$slots,"header")],16)):f("",!0),c("div",m({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),i("div",m({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),i("div",m({key:0,class:e.cx("title")},e.ptm("title")),[L(e.$slots,"title")],16)):f("",!0),e.$slots.subtitle?(a(),i("div",m({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[L(e.$slots,"subtitle")],16)):f("",!0)],16)):f("",!0),c("div",m({class:e.cx("content")},e.ptm("content")),[L(e.$slots,"content")],16),e.$slots.footer?(a(),i("div",m({key:1,class:e.cx("footer")},e.ptm("footer")),[L(e.$slots,"footer")],16)):f("",!0)],16)],16)}fe.render=Ze;var et=function(n){var t=n.dt;return`
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
`)},tt={root:function(n){var t=n.instance,s=n.props;return["p-knob p-component",{"p-disabled":s.disabled,"p-invalid":t.$invalid}]},range:"p-knob-range",value:"p-knob-value",text:"p-knob-text"},nt=W.extend({name:"knob",theme:et,classes:tt}),at={name:"BaseKnob",extends:Be,props:{size:{type:Number,default:100},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:function(){return q("knob.value.background").variable}},rangeColor:{type:String,default:function(){return q("knob.range.background").variable}},textColor:{type:String,default:function(){return q("knob.text.color").variable}},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:[String,Function],default:"{value}"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:nt,provide:function(){return{$pcKnob:this,$parentInstance:this}}},P=3.14159265358979,ye={name:"Knob",extends:at,inheritAttrs:!1,emits:["change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*P/3,maxRadians:-P/3}},methods:{updateValueByOffset:function(n,t){var s=n-this.size/2,p=this.size/2-t,o=Math.atan2(p,s),b=-P/2-P/6;this.updateModel(o,b)},updateModel:function(n,t){var s;if(n>this.maxRadians)s=this.mapRange(n,this.minRadians,this.maxRadians,this.min,this.max);else if(n<t)s=this.mapRange(n+2*P,this.minRadians,this.maxRadians,this.min,this.max);else return;var p=Math.round((s-this.min)/this.step)*this.step+this.min;this.writeValue(p),this.$emit("change",p)},updateModelValue:function(n){n>this.max?this.writeValue(this.max):n<this.min?this.writeValue(this.min):this.writeValue(n)},mapRange:function(n,t,s,p,o){return(n-t)*(o-p)/(s-t)+p},onClick:function(n){!this.disabled&&!this.readonly&&this.updateValueByOffset(n.offsetX,n.offsetY)},onBlur:function(n){var t,s;(t=(s=this.formField).onBlur)===null||t===void 0||t.call(s,n)},onMouseDown:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),n.preventDefault())},onMouseUp:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),n.preventDefault())},onTouchStart:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),n.preventDefault())},onTouchEnd:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),n.preventDefault())},onMouseMove:function(n){!this.disabled&&!this.readonly&&(this.updateValueByOffset(n.offsetX,n.offsetY),n.preventDefault())},onTouchMove:function(n){if(!this.disabled&&!this.readonly&&n.touches.length==1){var t=this.$el.getBoundingClientRect(),s=n.targetTouches.item(0),p=s.clientX-t.left,o=s.clientY-t.top;this.updateValueByOffset(p,o)}},onKeyDown:function(n){if(!this.disabled&&!this.readonly)switch(n.code){case"ArrowRight":case"ArrowUp":{n.preventDefault(),this.updateModelValue(this.d_value+this.step);break}case"ArrowLeft":case"ArrowDown":{n.preventDefault(),this.updateModelValue(this.d_value-this.step);break}case"Home":{n.preventDefault(),this.writeValue(this.min);break}case"End":{n.preventDefault(),this.writeValue(this.max);break}case"PageUp":{n.preventDefault(),this.updateModelValue(this.d_value+10);break}case"PageDown":{n.preventDefault(),this.updateModelValue(this.d_value-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.d_value,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<P?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return typeof this.valueTemplate=="string"?this.valueTemplate.replace(/{value}/g,this.d_value):this.valueTemplate(this.d_value)}}},ot=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],it=["d","stroke-width","stroke"],rt=["d","stroke-width","stroke"],st=["fill"];function lt(e,n,t,s,p,o){return a(),i("div",m({class:e.cx("root")},e.ptmi("root")),[(a(),i("svg",m({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.d_value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:n[0]||(n[0]=function(){return o.onClick&&o.onClick.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:n[2]||(n[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),onMousedown:n[3]||(n[3]=function(){return o.onMouseDown&&o.onMouseDown.apply(o,arguments)}),onMouseup:n[4]||(n[4]=function(){return o.onMouseUp&&o.onMouseUp.apply(o,arguments)}),onTouchstartPassive:n[5]||(n[5]=function(){return o.onTouchStart&&o.onTouchStart.apply(o,arguments)}),onTouchend:n[6]||(n[6]=function(){return o.onTouchEnd&&o.onTouchEnd.apply(o,arguments)})},e.ptm("svg")),[c("path",m({d:o.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,it),c("path",m({d:o.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,rt),e.showValue?(a(),i("text",m({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("text")},e.ptm("text")),de(o.valueToDisplay),17,st)):f("",!0)],16,ot))],16)}ye.render=lt;const dt={class:"h-[174px] overflow-hidden"},ut={key:0,class:"absolute top-2 left-2"},ct={key:1,class:"absolute top-0 right-0"},pt={key:0,class:"bg-yellow-500 text-white w-full px-2 py-[1px] rounded-bl-xl"},ht={key:1,class:"bg-green-500 text-white px-2 py-[1px] rounded-bl-xl"},vt={key:2,class:"absolute bottom-0 left-0"},mt={key:0,class:"bg-green-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},ft={key:1,class:"bg-purple-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},yt={key:2,class:"bg-blue-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},gt={key:3,class:"bg-red-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},bt={class:"flex justify-between items-center px-4 py-1"},xt={class:"flex items-center"},wt={key:0,class:"pi pi-crown text-purple-500 bg-purple-100 p-2 rounded-md mr-2"},kt={class:"py-3"},_t={key:0,class:"flex"},$t={key:1},G=ue({__name:"ProjectCard",props:{project:{}},emits:["after-remove"],setup(e,{emit:n}){const t=he(),s=we(),p=ce(),{user:o}=pe(p),b=h(!1),l=e,I=n;function x(){s.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{z()}})}async function z(){b.value=!0;try{await U.deleteProjectByID(l.project.id),I("after-remove")}catch(k){console.log(k)}finally{b.value=!1}}function D(){t.push(`/project/${l.project.id}/edit`)}const V=h(l.project.cover_image.length>0?l.project.cover_image:re);function E(){l.project.cover_gif&&(V.value=l.project.cover_gif)}function X(){V.value=l.project.cover_image.length>0?l.project.cover_image:re}return(k,$)=>{const T=Xe,Y=Ee,w=ve,M=ye,K=Le,F=fe,_=ke("RouterLink");return a(),y(_,{to:b.value?"":`/project/${l.project.id}`},{default:C(()=>[v(F,{style:{width:"300px",height:"234px",overflow:"hidden"},class:"relative p-0",dt:{body:{padding:"0px",gap:"2px"}}},{header:C(()=>{var R,j;return[c("div",dt,[v(T,{alt:"user header",src:V.value,class:"animate-fadein animate-once animate-duration-1000 animate-ease-in-out",onMouseover:E,onMouseleave:X},null,8,["src"]),l.project.level>0?(a(),i("div",ut,[l.project.level<3?(a(),y(Y,{key:0,severity:"success",value:"Easy"})):l.project.level<5?(a(),y(Y,{key:1,severity:"info",value:"Medium"})):l.project.level==5?(a(),y(Y,{key:2,severity:"danger",value:"Hard"})):f("",!0)])):f("",!0),((R=A(o))==null?void 0:R.user_type)=="editor"?(a(),i("div",ct,[l.project.editing_status=="inreview"?(a(),i("div",pt,"In review")):(a(),i("div",ht,"Published"))])):f("",!0),((j=A(o))==null?void 0:j.user_type)=="editor"?(a(),i("div",vt,[l.project.access_type=="freemium"?(a(),i("div",mt,"Free")):l.project.access_type=="premium"?(a(),i("div",ft,"Premium")):l.project.access_type=="demo"?(a(),i("div",yt,"Demo")):l.project.access_type=="hackaton"?(a(),i("div",gt,"Hackaton")):f("",!0)])):f("",!0)])]}),subtitle:C(()=>{var R;return[c("div",bt,[c("div",xt,[l.project.access_type=="premium"?(a(),i("span",wt)):f("",!0),c("div",kt,de(l.project.title),1)]),((R=A(o))==null?void 0:R.user_type)=="editor"?(a(),i("div",_t,[v(w,{icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:ae(D,["prevent"])}),v(w,{icon:"pi pi-trash",severity:"danger",variant:"text",rounded:"","aria-label":"Remove",onClick:ae(x,["prevent"]),disabled:b.value,loading:b.value},null,8,["disabled","loading"])])):(a(),i("div",$t,[l.project.student_progress<100?(a(),y(M,{key:0,"model-value":l.project.student_progress,size:50,"value-template":j=>`${j}%`,readonly:"",valueColor:"orange"},null,8,["model-value","value-template"])):(a(),y(K,{key:1,label:k.$t("done"),icon:"pi pi-check",class:"bg-primary text-sm h-6 text-white font-semibold"},{icon:C(()=>$[0]||($[0]=[c("i",{class:"pi pi-check text-white font-semibold",style:{"font-size":"12px"}},null,-1)])),_:1},8,["label"]))]))])]}),_:1})]),_:1},8,["to"])}}}),Mt={class:"flex flex-col min-h-screen bg-slate-50"},Rt={class:"flex gap-4 bg-slate-50 py-4 px-12 items-center"},jt={class:"flex px-12 pb-4"},Ct={key:0,class:"text-2xl pr-4"},zt={class:"border border-dashed rounded-xl border-green-400 overflow-hidden"},Dt={key:1,class:"flex flex-col gap-4 pb-8"},Vt={key:0,class:"flex h-[256px] gap-2 px-3"},Tt={class:"flex px-12 pb-4"},Bt={class:"flex flex-wrap justify-center gap-8 px-12"},se=332,Wt=ue({__name:"ProjectsView",setup(e){const n=_e("el"),t=$e(),{locale:s}=Me(),p=he(),o=Ye(),{addLesson:b}=o,l=ce(),{user:I}=pe(l),x=h([]),z=h([]),D=h([]),V=h(0),E=h(0),X=h(0),k=h(!1),$=h(!1);Ae(n,x,{onUpdate:r=>{Ie(x.value,r.oldIndex,r.newIndex,r),Ce(async()=>{const d=[];x.value.map(g=>{const N=parseInt(g.id,10);d.push(N)});try{await U.changeProjectsOrder(d),t.add({severity:"success",summary:"Projects order saved!",life:2e3})}catch(g){t.add({severity:"error",summary:"Order set error!",detail:g,life:2e3})}})}});async function T(){if(!k.value){k.value=!0;try{const{data:r}=await U.getProjects();k.value=!1,x.value=[],z.value=[],D.value=[],V.value=r.length,E.value=0,X.value=0;for(const d of r)d.is_guidable?E.value++:X.value++;for(const d of r){const g=await ie(d,s.value);x.value.push(g),g.is_guidable?z.value.push(g):D.value.push(g)}}catch(r){console.log(r)}finally{k.value=!1}}}Re(T),je(s,T);async function Y(){$.value=!0;try{const{data:r}=await U.createProject(),d=await ie(r,s.value);b(d),p.push(`/project/${d.id}/edit`)}catch(r){console.log(r)}finally{$.value=!1}}const w=h(""),M=h(null),K=()=>{M.value&&M.value.scrollBy({left:-se,behavior:"smooth"})},F=()=>{M.value&&M.value.scrollBy({left:se,behavior:"smooth"})},_=h(""),R=h(["Easy","Medium","Hard"]),j=h(""),ge=h(["LED","switch","push-button","light-sensor","touch-sensor","potentiometer","encoder","motion-detector","microphone","climate-sensor","gyro-accel","buzzer","color-sensor","joystick","distance-sensor","servo"]);function J(r){return r==0?"":r<3?"Easy":r<5?"Medium":r==5?"Hard":""}const Q=oe(()=>z.value.filter(r=>(!_.value.length||_.value.includes(J(r.level)))&&(!w.value||r.title.toLowerCase().includes(w.value.toLowerCase())))),be=oe(()=>D.value.filter(r=>(!_.value.length||_.value.includes(J(r.level)))&&(!w.value||r.title.toLowerCase().includes(w.value.toLowerCase()))));return(r,d)=>{var te,ne;const g=De,N=Se,xe=Ve,Z=Te,ee=me,O=ze,H=ve;return a(),i("div",Mt,[v(Pe,{class:"sticky top-0 z-10"}),c("div",Rt,[v(xe,null,{default:C(()=>[v(g,{class:"text-primary"},{default:C(()=>d[3]||(d[3]=[c("i",{class:"pi pi-search"},null,-1)])),_:1}),v(N,{type:"text",modelValue:w.value,"onUpdate:modelValue":d[0]||(d[0]=u=>w.value=u),placeholder:"Search",variant:"filled",class:"h-fit bg-white"},null,8,["modelValue"])]),_:1}),v(Z,{modelValue:j.value,"onUpdate:modelValue":d[1]||(d[1]=u=>j.value=u),options:ge.value,"max-selected-labels":3,placeholder:"Filter by modules",display:"chip",variant:"filled",class:"bg-white min-w-60"},null,8,["modelValue","options"]),v(Z,{modelValue:_.value,"onUpdate:modelValue":d[2]||(d[2]=u=>_.value=u),options:R.value,placeholder:"Filter by level",display:"chip",variant:"filled",class:"bg-white min-w-60"},null,8,["modelValue","options"])]),c("div",jt,[((te=A(I))==null?void 0:te.user_type)!="editor"?(a(),i("div",Ct,"Learn")):f("",!0),v(ee)]),((ne=A(I))==null?void 0:ne.user_type)=="editor"?(a(),i("div",{key:0,ref_key:"el",ref:n,class:"flex flex-wrap justify-center gap-8 px-12 pb-8"},[(a(!0),i(B,null,S(x.value,u=>(a(),y(G,{key:u.id,project:u,onAfterRemove:T},null,8,["project"]))),128)),(a(!0),i(B,null,S(V.value-x.value.length,u=>(a(),y(O,{key:u,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128)),c("div",zt,[v(H,{variant:"text",style:{width:"300px",height:"234px"},class:"bg-green-50",onClick:Y,loading:$.value,disabled:$.value},{icon:C(()=>d[4]||(d[4]=[c("i",{class:"pi pi-plus text-3xl"},null,-1)])),_:1},8,["loading","disabled"])])],512)):(a(),i("div",Dt,[Q.value.length>0?(a(),i("div",Vt,[v(H,{icon:"pi pi-angle-left",onClick:K,class:"self-center",severity:"secondary"}),c("div",{ref_key:"scrollContainer",ref:M,class:"flex items-center flex-grow snap-x snap-mandatory overflow-x-auto max-w-screen gap-8"},[(a(!0),i(B,null,S(Q.value,u=>(a(),y(G,{key:u.id,project:u,id:u.id,class:"snap-start shrink-0 w-[300px]"},null,8,["project","id"]))),128)),(a(!0),i(B,null,S(E.value-z.value.length,u=>(a(),y(O,{key:u,width:"300px",height:"234px",class:"rounded-xl shadow-sm shrink-0 w-[300px]"}))),128))],512),v(H,{icon:"pi pi-angle-right",onClick:F,class:"self-center",severity:"secondary"})])):f("",!0),c("div",Tt,[d[5]||(d[5]=c("div",{class:"text-2xl pr-4"},"Practice",-1)),v(ee)]),c("div",Bt,[(a(!0),i(B,null,S(be.value,u=>(a(),y(G,{key:u.id,project:u,onAfterRemove:T},null,8,["project"]))),128)),(a(!0),i(B,null,S(X.value-D.value.length,u=>(a(),y(O,{key:u,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))])]))])}}});export{Wt as default};
