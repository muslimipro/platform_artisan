import{s as ue}from"./index-BMaFWavY.js";import{s as Z}from"./index-BNc49j_h.js";import{B as H,o as i,c as o,x as f,I as P,h,ae as ee,e as b,t as Y,af as O,d as te,ag as ce,a as ne,ah as ie,r as k,f as g,w as j,b as y,j as A,ac as Q,k as ae,s as oe,H as pe,ai as he,u as ve,p as fe,m as me,Q as ge,L as ye,F as R,i as z,g as U,aj as be,N as xe}from"./index-CrZk4WSl.js";import{s as ke}from"./index-Bl4DDHvI.js";import{_ as we}from"./AHeader.vue_vue_type_script_setup_true_lang-ByZI4vle.js";import{s as _e}from"./index-N01lV6lJ.js";import{b as $e}from"./index-hgS5cF5J.js";import{a as je}from"./logo-CkXcmcLO.js";import{a as I,t as G}from"./types-DyspkLCH.js";import{P as J}from"./pibody-BwAjMvHk.js";import{u as Me}from"./editor-store-Cj4Tw-EM.js";import{u as Re,m as ze}from"./useSortable-8gvblX1w.js";import"./index-CGugdBBV.js";import"./UserMenu.vue_vue_type_script_setup_true_lang-C5fDqthN.js";import"./index-Cps8jVCj.js";import"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-DBI2jhCR.js";import"./index-Cc6t9hEq.js";import"./index-B8QDPJ39.js";import"./index-BsBNJozc.js";var Ce=function(n){var t=n.dt;return`
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
`)},Te={root:function(n){var t=n.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},Be={root:function(n){var t=n.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},Pe=H.extend({name:"divider",theme:Ce,classes:Be,inlineStyles:Te}),Se={name:"BaseDivider",extends:ee,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Pe,provide:function(){return{$pcDivider:this,$parentInstance:this}}},re={name:"Divider",extends:Se,inheritAttrs:!1},Ve=["aria-orientation"];function Le(e,n,t,r,v,a){return i(),o("div",f({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(i(),o("div",f({key:0,class:e.cx("content")},e.ptm("content")),[P(e.$slots,"default")],16)):h("",!0)],16,Ve)}re.render=Le;var Ee=function(n){var t=n.dt;return`
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
`)},Xe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ye=H.extend({name:"card",theme:Ee,classes:Xe}),De={name:"BaseCard",extends:ee,style:Ye,provide:function(){return{$pcCard:this,$parentInstance:this}}},se={name:"Card",extends:De,inheritAttrs:!1};function Ae(e,n,t,r,v,a){return i(),o("div",f({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(i(),o("div",f({key:0,class:e.cx("header")},e.ptm("header")),[P(e.$slots,"header")],16)):h("",!0),b("div",f({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(i(),o("div",f({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(i(),o("div",f({key:0,class:e.cx("title")},e.ptm("title")),[P(e.$slots,"title")],16)):h("",!0),e.$slots.subtitle?(i(),o("div",f({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[P(e.$slots,"subtitle")],16)):h("",!0)],16)):h("",!0),b("div",f({class:e.cx("content")},e.ptm("content")),[P(e.$slots,"content")],16),e.$slots.footer?(i(),o("div",f({key:1,class:e.cx("footer")},e.ptm("footer")),[P(e.$slots,"footer")],16)):h("",!0)],16)],16)}se.render=Ae;var Ie=function(n){var t=n.dt;return`
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
`)},Ne={root:function(n){var t=n.instance,r=n.props;return["p-knob p-component",{"p-disabled":r.disabled,"p-invalid":t.$invalid}]},range:"p-knob-range",value:"p-knob-value",text:"p-knob-text"},Ke=H.extend({name:"knob",theme:Ie,classes:Ne}),Oe={name:"BaseKnob",extends:$e,props:{size:{type:Number,default:100},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:function(){return O("knob.value.background").variable}},rangeColor:{type:String,default:function(){return O("knob.range.background").variable}},textColor:{type:String,default:function(){return O("knob.text.color").variable}},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:[String,Function],default:"{value}"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ke,provide:function(){return{$pcKnob:this,$parentInstance:this}}},B=3.14159265358979,le={name:"Knob",extends:Oe,inheritAttrs:!1,emits:["change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*B/3,maxRadians:-B/3}},methods:{updateValueByOffset:function(n,t){var r=n-this.size/2,v=this.size/2-t,a=Math.atan2(v,r),w=-B/2-B/6;this.updateModel(a,w)},updateModel:function(n,t){var r;if(n>this.maxRadians)r=this.mapRange(n,this.minRadians,this.maxRadians,this.min,this.max);else if(n<t)r=this.mapRange(n+2*B,this.minRadians,this.maxRadians,this.min,this.max);else return;var v=Math.round((r-this.min)/this.step)*this.step+this.min;this.writeValue(v),this.$emit("change",v)},updateModelValue:function(n){n>this.max?this.writeValue(this.max):n<this.min?this.writeValue(this.min):this.writeValue(n)},mapRange:function(n,t,r,v,a){return(n-t)*(a-v)/(r-t)+v},onClick:function(n){!this.disabled&&!this.readonly&&this.updateValueByOffset(n.offsetX,n.offsetY)},onBlur:function(n){var t,r;(t=(r=this.formField).onBlur)===null||t===void 0||t.call(r,n)},onMouseDown:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),n.preventDefault())},onMouseUp:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),n.preventDefault())},onTouchStart:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),n.preventDefault())},onTouchEnd:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),n.preventDefault())},onMouseMove:function(n){!this.disabled&&!this.readonly&&(this.updateValueByOffset(n.offsetX,n.offsetY),n.preventDefault())},onTouchMove:function(n){if(!this.disabled&&!this.readonly&&n.touches.length==1){var t=this.$el.getBoundingClientRect(),r=n.targetTouches.item(0),v=r.clientX-t.left,a=r.clientY-t.top;this.updateValueByOffset(v,a)}},onKeyDown:function(n){if(!this.disabled&&!this.readonly)switch(n.code){case"ArrowRight":case"ArrowUp":{n.preventDefault(),this.updateModelValue(this.d_value+this.step);break}case"ArrowLeft":case"ArrowDown":{n.preventDefault(),this.updateModelValue(this.d_value-this.step);break}case"Home":{n.preventDefault(),this.writeValue(this.min);break}case"End":{n.preventDefault(),this.writeValue(this.max);break}case"PageUp":{n.preventDefault(),this.updateModelValue(this.d_value+10);break}case"PageDown":{n.preventDefault(),this.updateModelValue(this.d_value-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.d_value,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<B?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return typeof this.valueTemplate=="string"?this.valueTemplate.replace(/{value}/g,this.d_value):this.valueTemplate(this.d_value)}}},Ue=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],Fe=["d","stroke-width","stroke"],He=["d","stroke-width","stroke"],We=["fill"];function qe(e,n,t,r,v,a){return i(),o("div",f({class:e.cx("root")},e.ptmi("root")),[(i(),o("svg",f({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.d_value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:n[0]||(n[0]=function(){return a.onClick&&a.onClick.apply(a,arguments)}),onBlur:n[1]||(n[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onKeydown:n[2]||(n[2]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)}),onMousedown:n[3]||(n[3]=function(){return a.onMouseDown&&a.onMouseDown.apply(a,arguments)}),onMouseup:n[4]||(n[4]=function(){return a.onMouseUp&&a.onMouseUp.apply(a,arguments)}),onTouchstartPassive:n[5]||(n[5]=function(){return a.onTouchStart&&a.onTouchStart.apply(a,arguments)}),onTouchend:n[6]||(n[6]=function(){return a.onTouchEnd&&a.onTouchEnd.apply(a,arguments)})},e.ptm("svg")),[b("path",f({d:a.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,Fe),b("path",f({d:a.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,He),e.showValue?(i(),o("text",f({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("text")},e.ptm("text")),Y(a.valueToDisplay),17,We)):h("",!0)],16,Ue))],16)}le.render=qe;const Qe={class:"flex justify-center h-[174px] overflow-hidden"},Ge={key:0,class:"absolute top-2 left-2"},Je={key:1,class:"absolute top-0 right-0"},Ze={key:0,class:"bg-yellow-500 text-white w-full px-2 py-[1px] rounded-bl-xl"},et={key:1,class:"bg-green-500 text-white px-2 py-[1px] rounded-bl-xl"},tt={key:2,class:"absolute bottom-0 left-0"},nt={key:0,class:"bg-green-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},it={key:1,class:"bg-purple-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},at={key:2,class:"bg-blue-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},ot={key:3,class:"bg-red-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},rt={class:"flex justify-between items-center px-4 py-1"},st={class:"flex items-center"},lt={key:0,class:"pi pi-crown text-purple-500 bg-purple-100 p-2 rounded-md mr-2"},dt={class:"py-3"},ut={key:0,class:"flex"},ct={key:1},F=te({__name:"ProjectCard",props:{project:{}},emits:["after-remove"],setup(e,{emit:n}){const t=ae(),r=ce(),v=ne(),{user:a}=ie(v),w=k(!1),s=e,N=n;function _(){r.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{S()}})}async function S(){w.value=!0;try{await I.deleteProjectByID(s.project.id),N("after-remove")}catch($){console.log($)}finally{w.value=!1}}function V(){t.push(`/project/${s.project.id}/edit`)}const C=k(s.project.cover_image.length>0?s.project.cover_image:J);function L(){s.project.cover_gif&&(C.value=s.project.cover_gif)}function E(){C.value=s.project.cover_image.length>0?s.project.cover_image:J}return($,M)=>{const T=je,X=Z,D=oe,K=le,l=_e,c=se,p=pe("RouterLink");return i(),g(p,{to:w.value?"":`/project/${s.project.id}`,class:"w-full md:w-[300px]"},{default:j(()=>[y(c,{style:{height:"234px",overflow:"hidden"},class:"relative p-0",dt:{body:{padding:"0px",gap:"2px"}}},{header:j(()=>{var m,d;return[b("div",Qe,[y(T,{alt:"user header",src:C.value,class:"animate-fadein animate-once animate-duration-1000 animate-ease-in-out",onMouseover:L,onMouseleave:E},null,8,["src"]),s.project.level>0?(i(),o("div",Ge,[s.project.level<3?(i(),g(X,{key:0,severity:"success",value:"Easy"})):s.project.level<5?(i(),g(X,{key:1,severity:"info",value:"Medium"})):s.project.level==5?(i(),g(X,{key:2,severity:"danger",value:"Hard"})):h("",!0)])):h("",!0),((m=A(a))==null?void 0:m.user_type)=="editor"?(i(),o("div",Je,[s.project.editing_status=="inreview"?(i(),o("div",Ze,"In review")):(i(),o("div",et,"Published"))])):h("",!0),((d=A(a))==null?void 0:d.user_type)=="editor"?(i(),o("div",tt,[s.project.access_type=="freemium"?(i(),o("div",nt,"Free")):s.project.access_type=="premium"?(i(),o("div",it,"Premium")):s.project.access_type=="demo"?(i(),o("div",at,"Demo")):s.project.access_type=="hackaton"?(i(),o("div",ot,"Hackaton")):h("",!0)])):h("",!0)])]}),subtitle:j(()=>{var m;return[b("div",rt,[b("div",st,[s.project.access_type=="premium"?(i(),o("span",lt)):h("",!0),b("div",dt,Y(s.project.title),1)]),((m=A(a))==null?void 0:m.user_type)=="editor"?(i(),o("div",ut,[y(D,{icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:Q(V,["prevent"])}),y(D,{icon:"pi pi-trash",severity:"danger",variant:"text",rounded:"","aria-label":"Remove",onClick:Q(_,["prevent"]),disabled:w.value,loading:w.value},null,8,["disabled","loading"])])):(i(),o("div",ct,[s.project.student_progress<100?(i(),g(K,{key:0,"model-value":s.project.student_progress,size:50,"value-template":d=>`${d}%`,readonly:"",valueColor:"orange"},null,8,["model-value","value-template"])):(i(),g(l,{key:1,label:$.$t("done"),icon:"pi pi-check",class:"bg-primary text-sm h-6 text-white font-semibold"},{icon:j(()=>M[0]||(M[0]=[b("i",{class:"pi pi-check text-white font-semibold",style:{"font-size":"12px"}},null,-1)])),_:1},8,["label"]))]))])]}),_:1})]),_:1},8,["to"])}}}),pt={class:"flex flex-col min-h-screen bg-slate-50"},ht={class:"border border-dashed rounded-xl border-green-400 overflow-hidden"},vt={key:0,class:"flex px-4 sm:px-12"},ft={key:1,class:"flex px-4 sm:px-12"},mt={key:3,class:"flex px-4 sm:px-12"},gt={key:4,class:"flex flex-wrap justify-center gap-8 px-4 sm:px-12 pb-8"},Xt=te({__name:"ProjectsView",setup(e){const n=he("el"),t=ve(),{locale:r}=fe(),v=ae(),a=Me(),{addLesson:w}=a,s=ne(),{user:N}=ie(s),_=k([]),S=k([]),V=k([]),C=k(0),L=k([0,0,0,0,0,0]),E=k([0,0,0,0,0,0]),$=k(!1),M=k(!1);Re(n,_,{onUpdate:l=>{ze(_.value,l.oldIndex,l.newIndex,l),xe(async()=>{const c=[];_.value.map(p=>{const m=parseInt(p.id,10);c.push(m)});try{await I.changeProjectsOrder(c),t.add({severity:"success",summary:"Projects order saved!",life:2e3})}catch(p){t.add({severity:"error",summary:"Order set error!",detail:p,life:2e3})}})}});async function T(){if(!$.value){$.value=!0;try{const{data:l}=await I.getProjects();$.value=!1,_.value=[],S.value=[],V.value=[],C.value=l.length,L.value=[0,0,0,0,0,0],E.value=[0,0,0,0,0,0];for(const c of l)c.is_guidable?L.value[c.layer]++:E.value[c.layer]++;for(const c of l){const p=await G(c,r.value);_.value.push(p),p.is_guidable?S.value.push(p):V.value.push(p)}}catch(l){console.log(l)}finally{$.value=!1}}}me(T),ge(r,T);async function X(){M.value=!0;try{const{data:l}=await I.createProject(),c=await G(l,r.value);w(c),v.push(`/project/${c.id}/edit`)}catch(l){console.log(l)}finally{M.value=!1}}const D=ye(()=>{const l=new Map,c=new Map;for(const d of S.value)l.has(d.layer)||l.set(d.layer,[]),l.get(d.layer).push(d);for(const d of V.value)c.has(d.layer)||c.set(d.layer,[]),c.get(d.layer).push(d);const p=[];for(let d=0;d<=5;d++)p.push({id:d,guided:l.get(d)||[],unguided:c.get(d)||[]});const m=p.shift();return m&&p.push(m),p}),K=["secondary","success","info","warn","danger","contrast"];return(l,c)=>{var q;const p=ke,m=oe,d=re,de=Z,W=ue;return i(),o("div",pt,[y(we,{class:"sticky top-0 z-10 mb-4"}),((q=A(N))==null?void 0:q.user_type)=="editor"?(i(),o("div",{key:0,ref_key:"el",ref:n,class:"flex flex-wrap justify-center gap-8 px-4 sm:px-12 pb-8"},[(i(!0),o(R,null,z(_.value,u=>(i(),g(F,{key:u.id,project:u,onAfterRemove:T},null,8,["project"]))),128)),(i(!0),o(R,null,z(C.value-_.value.length,u=>(i(),g(p,{key:u,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128)),b("div",ht,[y(m,{variant:"text",style:{width:"300px",height:"234px"},class:"bg-green-50",onClick:X,loading:M.value,disabled:M.value},{icon:j(()=>c[0]||(c[0]=[b("i",{class:"pi pi-plus text-3xl"},null,-1)])),_:1},8,["loading","disabled"])])],512)):(i(!0),o(R,{key:1},z(D.value,u=>(i(),o("div",{key:u.id,class:"flex flex-col gap-2"},[u.guided.length>0||u.unguided.length>0?(i(),o("div",vt,[y(d),y(de,{class:"min-w-fit text-2xl px-4",severity:K[u.id]},{default:j(()=>[U(Y(u.id>0?`Level -
          ${u.id-1}`:"Other"),1)]),_:2},1032,["severity"]),y(d)])):h("",!0),u.guided.length>0?(i(),o("div",ft,[y(W,{class:"min-w-fit pr-4",size:"small",severity:"success"},{default:j(()=>[U(Y(l.$t("pages.projects.learn")),1)]),_:1})])):h("",!0),u.guided.length>0?(i(),o("div",{key:2,class:be(["flex flex-wrap justify-center gap-8 px-4 sm:px-12",{"pb-8":u.unguided.length==0}])},[(i(!0),o(R,null,z(u.guided,x=>(i(),g(F,{key:x.id,project:x,id:x.id},null,8,["project","id"]))),128)),(i(!0),o(R,null,z(L.value[u.id]-u.guided.length,x=>(i(),g(p,{key:x,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))],2)):h("",!0),u.unguided.length>0?(i(),o("div",mt,[y(W,{class:"min-w-fit pr-4",size:"small",severity:"info"},{default:j(()=>[U(Y(l.$t("pages.projects.practice")),1)]),_:1})])):h("",!0),u.unguided.length>0?(i(),o("div",gt,[(i(!0),o(R,null,z(u.unguided,x=>(i(),g(F,{key:x.id,project:x,onAfterRemove:T},null,8,["project"]))),128)),(i(!0),o(R,null,z(E.value[u.id]-u.unguided.length,x=>(i(),g(p,{key:x,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))])):h("",!0)]))),128))])}}});export{Xt as default};
