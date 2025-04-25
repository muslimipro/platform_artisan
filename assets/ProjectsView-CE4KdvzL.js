import{B as F,o as i,c as o,x as f,I as T,h,ae as Q,e as m,t as Y,af as U,d as G,ag as oe,a as J,ah as Z,r as b,f as g,w as X,b as $,j as I,ac as H,k as ee,s as te,H as re,ai as se,u as le,p as de,m as ue,Q as ce,L as pe,F as R,i as z,N as he}from"./index-CKgW3A1F.js";import{s as ve}from"./index-Chj9enau.js";import{_ as fe}from"./AHeader.vue_vue_type_script_setup_true_lang-BJmQuKaI.js";import{s as me}from"./index-B2Mf4gCs.js";import{b as ge}from"./index-DVVUCRIM.js";import{s as ye}from"./index--3qp7vZx.js";import{a as be}from"./logo-BYSqbw0q.js";import{a as K,t as W}from"./types-Ir5CXkrs.js";import{P as q}from"./pibody-BwAjMvHk.js";import{u as xe}from"./editor-store-KsfxQ2e3.js";import{u as ke,m as we}from"./useSortable-QTvYma6k.js";import"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-1YJpCmQe.js";import"./index-Be_Eg_x9.js";import"./index-DLA--7o5.js";import"./UserMenu.vue_vue_type_script_setup_true_lang-XNX8K6LL.js";import"./index-DwSGl8ML.js";import"./index-Dbfgb3Kw.js";import"./index-B4NNgC0z.js";var _e=function(n){var t=n.dt;return`
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
`)},$e={root:function(n){var t=n.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},je={root:function(n){var t=n.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},Me=F.extend({name:"divider",theme:_e,classes:je,inlineStyles:$e}),Re={name:"BaseDivider",extends:Q,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Me,provide:function(){return{$pcDivider:this,$parentInstance:this}}},ne={name:"Divider",extends:Re,inheritAttrs:!1},ze=["aria-orientation"];function Ce(e,n,t,r,v,a){return i(),o("div",f({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(i(),o("div",f({key:0,class:e.cx("content")},e.ptm("content")),[T(e.$slots,"default")],16)):h("",!0)],16,ze)}ne.render=Ce;var Be=function(n){var t=n.dt;return`
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
`)},Pe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Te=F.extend({name:"card",theme:Be,classes:Pe}),Se={name:"BaseCard",extends:Q,style:Te,provide:function(){return{$pcCard:this,$parentInstance:this}}},ie={name:"Card",extends:Se,inheritAttrs:!1};function De(e,n,t,r,v,a){return i(),o("div",f({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(i(),o("div",f({key:0,class:e.cx("header")},e.ptm("header")),[T(e.$slots,"header")],16)):h("",!0),m("div",f({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(i(),o("div",f({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(i(),o("div",f({key:0,class:e.cx("title")},e.ptm("title")),[T(e.$slots,"title")],16)):h("",!0),e.$slots.subtitle?(i(),o("div",f({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[T(e.$slots,"subtitle")],16)):h("",!0)],16)):h("",!0),m("div",f({class:e.cx("content")},e.ptm("content")),[T(e.$slots,"content")],16),e.$slots.footer?(i(),o("div",f({key:1,class:e.cx("footer")},e.ptm("footer")),[T(e.$slots,"footer")],16)):h("",!0)],16)],16)}ie.render=De;var Ve=function(n){var t=n.dt;return`
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
`)},Le={root:function(n){var t=n.instance,r=n.props;return["p-knob p-component",{"p-disabled":r.disabled,"p-invalid":t.$invalid}]},range:"p-knob-range",value:"p-knob-value",text:"p-knob-text"},Ee=F.extend({name:"knob",theme:Ve,classes:Le}),Xe={name:"BaseKnob",extends:ge,props:{size:{type:Number,default:100},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:function(){return U("knob.value.background").variable}},rangeColor:{type:String,default:function(){return U("knob.range.background").variable}},textColor:{type:String,default:function(){return U("knob.text.color").variable}},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:[String,Function],default:"{value}"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ee,provide:function(){return{$pcKnob:this,$parentInstance:this}}},P=3.14159265358979,ae={name:"Knob",extends:Xe,inheritAttrs:!1,emits:["change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*P/3,maxRadians:-P/3}},methods:{updateValueByOffset:function(n,t){var r=n-this.size/2,v=this.size/2-t,a=Math.atan2(v,r),x=-P/2-P/6;this.updateModel(a,x)},updateModel:function(n,t){var r;if(n>this.maxRadians)r=this.mapRange(n,this.minRadians,this.maxRadians,this.min,this.max);else if(n<t)r=this.mapRange(n+2*P,this.minRadians,this.maxRadians,this.min,this.max);else return;var v=Math.round((r-this.min)/this.step)*this.step+this.min;this.writeValue(v),this.$emit("change",v)},updateModelValue:function(n){n>this.max?this.writeValue(this.max):n<this.min?this.writeValue(this.min):this.writeValue(n)},mapRange:function(n,t,r,v,a){return(n-t)*(a-v)/(r-t)+v},onClick:function(n){!this.disabled&&!this.readonly&&this.updateValueByOffset(n.offsetX,n.offsetY)},onBlur:function(n){var t,r;(t=(r=this.formField).onBlur)===null||t===void 0||t.call(r,n)},onMouseDown:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),n.preventDefault())},onMouseUp:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),n.preventDefault())},onTouchStart:function(n){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),n.preventDefault())},onTouchEnd:function(n){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),n.preventDefault())},onMouseMove:function(n){!this.disabled&&!this.readonly&&(this.updateValueByOffset(n.offsetX,n.offsetY),n.preventDefault())},onTouchMove:function(n){if(!this.disabled&&!this.readonly&&n.touches.length==1){var t=this.$el.getBoundingClientRect(),r=n.targetTouches.item(0),v=r.clientX-t.left,a=r.clientY-t.top;this.updateValueByOffset(v,a)}},onKeyDown:function(n){if(!this.disabled&&!this.readonly)switch(n.code){case"ArrowRight":case"ArrowUp":{n.preventDefault(),this.updateModelValue(this.d_value+this.step);break}case"ArrowLeft":case"ArrowDown":{n.preventDefault(),this.updateModelValue(this.d_value-this.step);break}case"Home":{n.preventDefault(),this.writeValue(this.min);break}case"End":{n.preventDefault(),this.writeValue(this.max);break}case"PageUp":{n.preventDefault(),this.updateModelValue(this.d_value+10);break}case"PageDown":{n.preventDefault(),this.updateModelValue(this.d_value-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.d_value,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<P?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return typeof this.valueTemplate=="string"?this.valueTemplate.replace(/{value}/g,this.d_value):this.valueTemplate(this.d_value)}}},Ye=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],Ae=["d","stroke-width","stroke"],Ie=["d","stroke-width","stroke"],Ke=["fill"];function Ne(e,n,t,r,v,a){return i(),o("div",f({class:e.cx("root")},e.ptmi("root")),[(i(),o("svg",f({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.d_value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:n[0]||(n[0]=function(){return a.onClick&&a.onClick.apply(a,arguments)}),onBlur:n[1]||(n[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onKeydown:n[2]||(n[2]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)}),onMousedown:n[3]||(n[3]=function(){return a.onMouseDown&&a.onMouseDown.apply(a,arguments)}),onMouseup:n[4]||(n[4]=function(){return a.onMouseUp&&a.onMouseUp.apply(a,arguments)}),onTouchstartPassive:n[5]||(n[5]=function(){return a.onTouchStart&&a.onTouchStart.apply(a,arguments)}),onTouchend:n[6]||(n[6]=function(){return a.onTouchEnd&&a.onTouchEnd.apply(a,arguments)})},e.ptm("svg")),[m("path",f({d:a.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,Ae),m("path",f({d:a.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,Ie),e.showValue?(i(),o("text",f({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("text")},e.ptm("text")),Y(a.valueToDisplay),17,Ke)):h("",!0)],16,Ye))],16)}ae.render=Ne;const Ue={class:"flex justify-center h-[174px] overflow-hidden"},Oe={key:0,class:"absolute top-2 left-2"},Fe={key:1,class:"absolute top-0 right-0"},He={key:0,class:"bg-yellow-500 text-white w-full px-2 py-[1px] rounded-bl-xl"},We={key:1,class:"bg-green-500 text-white px-2 py-[1px] rounded-bl-xl"},qe={key:2,class:"absolute bottom-0 left-0"},Qe={key:0,class:"bg-green-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},Ge={key:1,class:"bg-purple-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},Je={key:2,class:"bg-blue-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},Ze={key:3,class:"bg-red-500 text-white w-full px-2 py-[1px] rounded-tr-xl"},et={class:"flex justify-between items-center px-4 py-1"},tt={class:"flex items-center"},nt={key:0,class:"pi pi-crown text-purple-500 bg-purple-100 p-2 rounded-md mr-2"},it={class:"py-3"},at={key:0,class:"flex"},ot={key:1},O=G({__name:"ProjectCard",props:{project:{}},emits:["after-remove"],setup(e,{emit:n}){const t=ee(),r=oe(),v=J(),{user:a}=Z(v),x=b(!1),s=e,N=n;function k(){r.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{S()}})}async function S(){x.value=!0;try{await K.deleteProjectByID(s.project.id),N("after-remove")}catch(w){console.log(w)}finally{x.value=!1}}function D(){t.push(`/project/${s.project.id}/edit`)}const C=b(s.project.cover_image.length>0?s.project.cover_image:q);function V(){s.project.cover_gif&&(C.value=s.project.cover_gif)}function L(){C.value=s.project.cover_image.length>0?s.project.cover_image:q}return(w,j)=>{const B=be,E=ye,A=te,d=ae,u=me,c=ie,_=re("RouterLink");return i(),g(_,{to:x.value?"":`/project/${s.project.id}`,class:"w-full md:w-[300px]"},{default:X(()=>[$(c,{style:{height:"234px",overflow:"hidden"},class:"relative p-0",dt:{body:{padding:"0px",gap:"2px"}}},{header:X(()=>{var l,M;return[m("div",Ue,[$(B,{alt:"user header",src:C.value,class:"animate-fadein animate-once animate-duration-1000 animate-ease-in-out",onMouseover:V,onMouseleave:L},null,8,["src"]),s.project.level>0?(i(),o("div",Oe,[s.project.level<3?(i(),g(E,{key:0,severity:"success",value:"Easy"})):s.project.level<5?(i(),g(E,{key:1,severity:"info",value:"Medium"})):s.project.level==5?(i(),g(E,{key:2,severity:"danger",value:"Hard"})):h("",!0)])):h("",!0),((l=I(a))==null?void 0:l.user_type)=="editor"?(i(),o("div",Fe,[s.project.editing_status=="inreview"?(i(),o("div",He,"In review")):(i(),o("div",We,"Published"))])):h("",!0),((M=I(a))==null?void 0:M.user_type)=="editor"?(i(),o("div",qe,[s.project.access_type=="freemium"?(i(),o("div",Qe,"Free")):s.project.access_type=="premium"?(i(),o("div",Ge,"Premium")):s.project.access_type=="demo"?(i(),o("div",Je,"Demo")):s.project.access_type=="hackaton"?(i(),o("div",Ze,"Hackaton")):h("",!0)])):h("",!0)])]}),subtitle:X(()=>{var l;return[m("div",et,[m("div",tt,[s.project.access_type=="premium"?(i(),o("span",nt)):h("",!0),m("div",it,Y(s.project.title),1)]),((l=I(a))==null?void 0:l.user_type)=="editor"?(i(),o("div",at,[$(A,{icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:H(D,["prevent"])}),$(A,{icon:"pi pi-trash",severity:"danger",variant:"text",rounded:"","aria-label":"Remove",onClick:H(k,["prevent"]),disabled:x.value,loading:x.value},null,8,["disabled","loading"])])):(i(),o("div",ot,[s.project.student_progress<100?(i(),g(d,{key:0,"model-value":s.project.student_progress,size:50,"value-template":M=>`${M}%`,readonly:"",valueColor:"orange"},null,8,["model-value","value-template"])):(i(),g(u,{key:1,label:w.$t("done"),icon:"pi pi-check",class:"bg-primary text-sm h-6 text-white font-semibold"},{icon:X(()=>j[0]||(j[0]=[m("i",{class:"pi pi-check text-white font-semibold",style:{"font-size":"12px"}},null,-1)])),_:1},8,["label"]))]))])]}),_:1})]),_:1},8,["to"])}}}),rt={class:"flex flex-col min-h-screen bg-slate-50"},st={class:"border border-dashed rounded-xl border-green-400 overflow-hidden"},lt={key:0,class:"flex px-4 sm:px-12"},dt={class:"min-w-fit text-2xl px-4"},ut={key:1,class:"flex px-4 sm:px-12"},ct={class:"min-w-fit text-lg pr-4"},pt={key:2,class:"flex flex-wrap justify-center gap-8 px-4 sm:px-12"},ht={key:3,class:"flex px-4 sm:px-12"},vt={class:"min-w-fit text-lg pr-4"},ft={key:4,class:"flex flex-wrap justify-center gap-8 px-4 sm:px-12 pb-8"},Dt=G({__name:"ProjectsView",setup(e){const n=se("el"),t=le(),{locale:r}=de(),v=ee(),a=xe(),{addLesson:x}=a,s=J(),{user:N}=Z(s),k=b([]),S=b([]),D=b([]),C=b(0),V=b([0,0,0,0,0,0]),L=b([0,0,0,0,0,0]),w=b(!1),j=b(!1);ke(n,k,{onUpdate:d=>{we(k.value,d.oldIndex,d.newIndex,d),he(async()=>{const u=[];k.value.map(c=>{const _=parseInt(c.id,10);u.push(_)});try{await K.changeProjectsOrder(u),t.add({severity:"success",summary:"Projects order saved!",life:2e3})}catch(c){t.add({severity:"error",summary:"Order set error!",detail:c,life:2e3})}})}});async function B(){if(!w.value){w.value=!0;try{const{data:d}=await K.getProjects();w.value=!1,k.value=[],S.value=[],D.value=[],C.value=d.length,V.value=[0,0,0,0,0,0],L.value=[0,0,0,0,0,0];for(const u of d)u.is_guidable?V.value[u.layer]++:L.value[u.layer]++;for(const u of d){const c=await W(u,r.value);k.value.push(c),c.is_guidable?S.value.push(c):D.value.push(c)}}catch(d){console.log(d)}finally{w.value=!1}}}ue(B),ce(r,B);async function E(){j.value=!0;try{const{data:d}=await K.createProject(),u=await W(d,r.value);x(u),v.push(`/project/${u.id}/edit`)}catch(d){console.log(d)}finally{j.value=!1}}const A=pe(()=>{const d=new Map,u=new Map;for(const l of S.value)d.has(l.layer)||d.set(l.layer,[]),d.get(l.layer).push(l);for(const l of D.value)u.has(l.layer)||u.set(l.layer,[]),u.get(l.layer).push(l);const c=[];for(let l=0;l<=5;l++)c.push({id:l,guided:d.get(l)||[],unguided:u.get(l)||[]});const _=c.shift();return _&&c.push(_),c});return(d,u)=>{var M;const c=ve,_=te,l=ne;return i(),o("div",rt,[$(fe,{class:"sticky top-0 z-10 mb-4"}),((M=I(N))==null?void 0:M.user_type)=="editor"?(i(),o("div",{key:0,ref_key:"el",ref:n,class:"flex flex-wrap justify-center gap-8 px-4 sm:px-12 pb-8"},[(i(!0),o(R,null,z(k.value,p=>(i(),g(O,{key:p.id,project:p,onAfterRemove:B},null,8,["project"]))),128)),(i(!0),o(R,null,z(C.value-k.value.length,p=>(i(),g(c,{key:p,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128)),m("div",st,[$(_,{variant:"text",style:{width:"300px",height:"234px"},class:"bg-green-50",onClick:E,loading:j.value,disabled:j.value},{icon:X(()=>u[0]||(u[0]=[m("i",{class:"pi pi-plus text-3xl"},null,-1)])),_:1},8,["loading","disabled"])])],512)):(i(!0),o(R,{key:1},z(A.value,p=>(i(),o("div",{key:p.id,class:"flex flex-col gap-2"},[p.guided.length>0?(i(),o("div",lt,[$(l),m("div",dt,Y(`Part - ${p.id}`),1),$(l)])):h("",!0),p.guided.length>0?(i(),o("div",ut,[m("div",ct,Y(d.$t("pages.projects.learn")),1)])):h("",!0),p.guided.length>0?(i(),o("div",pt,[(i(!0),o(R,null,z(p.guided,y=>(i(),g(O,{key:y.id,project:y,id:y.id},null,8,["project","id"]))),128)),(i(!0),o(R,null,z(V.value[p.id]-p.guided.length,y=>(i(),g(c,{key:y,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))])):h("",!0),p.unguided.length>0?(i(),o("div",ht,[m("div",vt,Y(d.$t("pages.projects.practice")),1)])):h("",!0),p.unguided.length>0?(i(),o("div",ft,[(i(!0),o(R,null,z(p.unguided,y=>(i(),g(O,{key:y.id,project:y,onAfterRemove:B},null,8,["project"]))),128)),(i(!0),o(R,null,z(L.value[p.id]-p.unguided.length,y=>(i(),g(c,{key:y,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128))])):h("",!0)]))),128))])}}});export{Dt as default};
