import{B as te,aB as re,aC as oe,a8 as F,aK as B,aL as J,K as ae,o as c,c as g,F as C,k as G,h as $,ae as K,v as N,e as m,j as R,ah as ne,p as le,d as A,aj as O,D as j,aM as ue,r as L,f as r,w as M,b as _,q as T,s as H,aN as ce,i as q,t as U,J as pe,H as he,E as de,aO as I,a2 as Q,aP as fe}from"./index-CXOwPGdy.js";import{c as se,d as ie,i as x,e as k,s as ve,f as me,g as Z,h as ge,r as ye,p as be,j as xe,l as Se,k as ze,b as we,w as Pe,_ as W,m as Le,u as _e,n as Ee}from"./store-DTWq21S1.js";import{s as Te}from"./logo-2b8tI7rb.js";import{P as Me}from"./pibody-B70zHXNr.js";var $e=function(e){var t=e.dt;return`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid `.concat(t("splitter.border.color"),`;
    background: `).concat(t("splitter.background"),`;
    border-radius: `).concat(t("border.radius.md"),`;
    color: `).concat(t("splitter.color"),`;
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: `).concat(t("splitter.gutter.background"),`;
}

.p-splitter-gutter-handle {
    border-radius: `).concat(t("splitter.handle.border.radius"),`;
    background: `).concat(t("splitter.handle.background"),`;
    transition: outline-color `).concat(t("splitter.transition.duration"),", box-shadow ").concat(t("splitter.transition.duration"),`;
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: `).concat(t("splitter.handle.focus.ring.shadow"),`;
    outline: `).concat(t("splitter.handle.focus.ring.width")," ").concat(t("splitter.handle.focus.ring.style")," ").concat(t("splitter.handle.focus.ring.color"),`;
    outline-offset: `).concat(t("splitter.handle.focus.ring.offset"),`;
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: `).concat(t("splitter.handle.size"),`;
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: `).concat(t("splitter.handle.size"),`;
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitterpanel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitterpanel-nested {
    display: flex;
}

.p-splitterpanel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`)},ke={root:function(e){var t=e.props;return["p-splitter p-component","p-splitter-"+t.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},De={root:function(e){var t=e.props;return[{display:"flex","flex-wrap":"nowrap"},t.layout==="vertical"?{"flex-direction":"column"}:""]}},Ie=te.extend({name:"splitter",theme:$e,classes:ke,inlineStyles:De}),Ce={name:"BaseSplitter",extends:ne,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:Ie,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function ee(n){return Be(n)||Fe(n)||Ae(n)||Re()}function Re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(n,e){if(n){if(typeof n=="string")return V(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?V(n,e):void 0}}function Fe(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Be(n){if(Array.isArray(n))return V(n)}function V(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,s=Array(e);t<e;t++)s[t]=n[t];return s}var Ge={name:"Splitter",extends:Ce,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,mutationObserver:null,data:function(){return{prevSize:null,isRTL:!1}},mounted:function(){this.initializePanels(),this.updateDirection(),this.observeDirectionChanges()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners(),this.mutationObserver&&this.mutationObserver.disconnect()},methods:{updateDirection:function(){this.isRTL=!!this.$el.closest('[dir="rtl"]')},observeDirectionChanges:function(){var e=this,t=document.documentElement,s={attributes:!0,attributeFilter:["dir"]};this.mutationObserver=new MutationObserver(function(){e.updateDirection()}),this.mutationObserver.observe(t,s)},isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){var t=!1;if(this.isStateful()&&(t=this.restoreState()),!t){var s=ee(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"}),o=[];this.panels.map(function(i,l){var a=i.props&&i.props.size?i.props.size:null,p=a||100/e.panels.length;o[l]=p,s[l].style.flexBasis="calc("+p+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=o,this.prevSize=parseFloat(o[0]).toFixed(4)}}},onResizeStart:function(e,t,s){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?re(this.$el):oe(this.$el),s||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,s?(this.prevPanelSize=this.horizontal?F(this.prevPanelElement,!0):B(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?F(this.nextPanelElement,!0):B(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?F(this.prevPanelElement,!0):B(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?F(this.nextPanelElement,!0):B(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=t,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[t].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,t,s){var o,i,l;s?this.horizontal?(i=100*(this.prevPanelSize+t)/this.size,l=100*(this.nextPanelSize-t)/this.size):(i=100*(this.prevPanelSize-t)/this.size,l=100*(this.nextPanelSize+t)/this.size):(this.horizontal?this.isRTL?o=(this.startPos-e.pageX)*100/this.size:o=(e.pageX-this.startPos)*100/this.size:o=(e.pageY-this.startPos)*100/this.size,i=this.prevPanelSize+o,l=this.nextPanelSize-o),this.validateResize(i,l)&&(this.prevPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+l+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=i,this.panelSizes[this.prevPanelIndex+1]=l,this.prevSize=parseFloat(i).toFixed(4)),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(t){return t.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,t,s){this.onResizeStart(e,t,!0),this.onResize(e,s,!0)},setTimer:function(e,t,s){var o=this;this.timer||(this.timer=setInterval(function(){o.repeat(e,t,s)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,t){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,t,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,t,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,t){this.onResizeStart(e,t),this.bindMouseListeners()},onGutterTouchStart:function(e,t){this.onResizeStart(e,t),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(t){return e.onResize(t)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(t){e.onResizeEnd(t),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(t){return e.onResize(t.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(t){e.resizeEnd(t),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,t){if(e>100||e<0||t>100||t<0)return!1;var s=J(this.panels[this.prevPanelIndex],"minSize");if(this.panels[this.prevPanelIndex].props&&s&&s>e)return!1;var o=J(this.panels[this.prevPanelIndex+1],"minSize");return!(this.panels[this.prevPanelIndex+1].props&&o&&o>t)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){ae(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,t=this.getStorage(),s=t.getItem(this.stateKey);if(s){this.panelSizes=JSON.parse(s);var o=ee(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"});return o.forEach(function(i,l){i.style.flexBasis="calc("+e.panelSizes[l]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e=this,t=[];return this.$slots.default().forEach(function(s){e.isSplitterPanel(s)?t.push(s):s.children instanceof Array&&s.children.forEach(function(o){e.isSplitterPanel(o)&&t.push(o)})}),t},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}}}},Ne=["onMousedown","onTouchstart","onTouchmove","onTouchend"],Oe=["aria-orientation","aria-valuenow","onKeydown"];function Ke(n,e,t,s,o,i){return c(),g("div",N({class:n.cx("root"),style:n.sx("root"),"data-p-resizing":!1},n.ptmi("root",i.getPTOptions)),[(c(!0),g(C,null,G(i.panels,function(l,a){return c(),g(C,{key:a},[(c(),$(K(l),{tabindex:"-1"})),a!==i.panels.length-1?(c(),g("div",N({key:0,ref_for:!0,ref:"gutter",class:n.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(d){return i.onGutterMouseDown(d,a)},onTouchstart:function(d){return i.onGutterTouchStart(d,a)},onTouchmove:function(d){return i.onGutterTouchMove(d,a)},onTouchend:function(d){return i.onGutterTouchEnd(d,a)},"data-p-gutter-resizing":!1},n.ptm("gutter")),[m("div",N({class:n.cx("gutterHandle"),tabindex:"0",style:[i.gutterStyle],"aria-orientation":n.layout,"aria-valuenow":o.prevSize,onKeyup:e[0]||(e[0]=function(){return i.onGutterKeyUp&&i.onGutterKeyUp.apply(i,arguments)}),onKeydown:function(d){return i.onGutterKeyDown(d,a)},ref_for:!0},n.ptm("gutterHandle")),null,16,Oe)],16,Ne)):R("",!0)],64)}),128))],16)}Ge.render=Ke;var Ue={root:function(e){var t=e.instance;return["p-splitterpanel",{"p-splitterpanel-nested":t.isNested}]}},Ve=te.extend({name:"splitterpanel",classes:Ue}),je={name:"BaseSplitterPanel",extends:ne,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:Ve,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},He={name:"SplitterPanel",extends:je,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var e=this;return this.$slots.default().some(function(t){return e.nestedState=t.type.name==="Splitter"?!0:null,e.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function We(n,e,t,s,o,i){return c(),g("div",N({ref:"container",class:n.cx("root")},n.ptmi("root",i.getPTOptions)),[le(n.$slots,"default")],16)}He.render=We;const Xe={key:0,class:"material-icons"},Ye={key:1,class:"material-icons"},Je=A({__name:"IdeButtons",setup(n){const e=se(),t=ie(),{isProject:s,filePath:o,fileContent:i,fileTree:l}=O(e),{openFile:a}=e;let p=null;j(()=>{s.value||(p=setInterval(()=>{localStorage.setItem("fileContent",i.value)},1e3))}),ue(()=>{p&&clearInterval(p)});async function d(){const y=await be();if(y&&(await xe(y,t.write,()=>{s.value&&(o.value="",i.value=""),l.value={name:"empty",path:"",children:[]}}),t.clear(),s.value)){const u=await Se();a("/main.py",u),l.value=await ze()}}function f(){x.value?(ge(),s.value&&(o.value="",i.value="",l.value={name:"empty",path:"",children:[]})):d()}const v=L(!1);function w(){ye(i.value)}return(y,u)=>{const S=H;return c(),g("div",null,[r(x)?(c(),$(S,{key:0,id:"#run",type:"button",class:"w-9 h-9 mr-1",variant:r(k)||!r(x)?"outlined":void 0,severity:"info",rounded:"",onClick:w,disabled:r(k)||!r(x),loading:r(k)},{default:M(()=>u[5]||(u[5]=[m("span",{class:"material-icons"},"play_arrow",-1)])),_:1},8,["variant","disabled","loading"])):R("",!0),r(x)?(c(),$(S,{key:1,type:"button",class:"w-9 h-9 mr-1",variant:!r(k)||!r(x)?"outlined":void 0,severity:"danger",rounded:"",onClick:u[0]||(u[0]=P=>r(ve)()),disabled:!r(k)||!r(x)},{default:M(()=>u[6]||(u[6]=[m("span",{class:"material-icons"},"stop",-1)])),_:1},8,["variant","disabled"])):R("",!0),r(x)?(c(),$(S,{key:2,type:"button",class:"w-9 h-9",variant:"outlined",severity:"secondary",rounded:"",onClick:u[1]||(u[1]=P=>r(me)(r(o),r(i))),disabled:r(Z)||r(k)||!r(x),loading:r(Z)},{default:M(()=>u[7]||(u[7]=[m("span",{class:"material-icons"},"save",-1)])),_:1},8,["disabled","loading"])):R("",!0),_(S,{type:"button",class:T(["w-9 h-9 mr-1 text-white",r(x)?v.value?"bg-red-500":"bg-green-500":"bg-gray-600"]),rounded:"",text:"",onClick:u[2]||(u[2]=P=>f()),onMouseover:u[3]||(u[3]=P=>v.value=!0),onMouseleave:u[4]||(u[4]=P=>v.value=!1)},{default:M(()=>[v.value&&r(x)?(c(),g("span",Xe,"close")):(c(),g("span",Ye,"cable"))]),_:1},8,["class"])])}}}),qe={class:"relative flex h-full"},dt=A({__name:"CodeView",setup(n){const e=se(),{fileContent:t}=O(e);return(s,o)=>(c(),g("div",qe,[_(we,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=i=>ce(t)?t.value=i:null)},null,8,["modelValue"]),o[1]||(o[1]=m("div",{id:"#editor",class:"absolute top-10 left-10"},null,-1)),_(Je,{class:"absolute bottom-2 right-2"})]))}}),Qe={class:"flex flex-col h-full"},Ze={class:"flex px-2 w-full bg-zinc-900 text-white h-6 justify-between items-center"},et=A({__name:"TerminalView",setup(n){const e=L(!1),t=ie(),{output:s}=O(t);function o(l){let a=l.key;if(a==="Enter")a=`
\r`;else if(a==="Backspace")a="\b";else if(a.length>1)return;Pe(a)}const i=L(null);return j(()=>{t.openTerminal(i.value)}),(l,a)=>{const p=H;return c(),g("div",Qe,[m("div",Ze,[a[4]||(a[4]=m("span",{class:"material-icons"},"terminal",-1)),_(p,{onClick:a[0]||(a[0]=d=>r(t).clear()),class:"w-4 h-4 text-white",link:""},{default:M(()=>a[3]||(a[3]=[m("span",{class:"material-icons",style:{"font-size":"16px"}},"cleaning_services",-1)])),_:1})]),m("pre",{class:"h-full font-mono overflow-auto p-2 text-white bg-black",ref_key:"el",ref:i,tabindex:"0",onKeydown:o,onFocus:a[1]||(a[1]=d=>e.value=!0),onBlur:a[2]||(a[2]=d=>e.value=!1)},[a[5]||(a[5]=q("")),m("span",null,U(r(s)),1),m("span",{class:T([{caret:e.value},"bg-white"])}," ",2),a[6]||(a[6]=q(`
    `))],544)])}}}),ft=W(et,[["__scopeId","data-v-61224fc2"]]),tt=["width","height"],E=12,nt=A({__name:"Display",setup(n){const e=L(112),t=L(160),s=L(null),o=L(null),i=L(0),l=Le();l.text||(l.text="");function a(f){const v=f.deltaY>0?1:-1;i.value+=v*E,i.value=Math.max(0,i.value);const{lines:w,visibleLines:y}=p();i.value=Math.min(w.length*E,i.value),d(w,y)}function p(){const f=[];let v=0;return o.value&&l.text&&(String(l.text).split(`
`).forEach(y=>{let u="";y.split(" ").forEach(P=>{const z=u+P+" ";o.value.measureText(z).width>e.value?(f.push(u),u=P+" "):u=z}),f.push(u)}),v=Math.ceil(t.value/E)),{lines:f,visibleLines:v}}function d(f,v){if(o.value){o.value.fillStyle="#FFFFFF",o.value.fillRect(0,0,e.value,t.value),o.value.fillStyle=String(l.textColor)||"#000000",o.value.font="12px Monaco";const w=Math.floor(i.value/E);for(let y=0;y<v;y++){const u=w+y;if(u<f.length){const S=(y+1)*E-i.value%E;o.value.fillText(f[u],0,S)}}}else console.warn("Canvas context is not initialized.")}return pe(()=>[l.text,l.textColor],()=>{const{lines:f,visibleLines:v}=p();i.value=Math.max(0,(f.length-v)*E),d(f,v)}),j(async()=>{if(await he(),console.log("onMounted called"),!s.value){console.error("Canvas element not found!");return}if(o.value=s.value.getContext("2d"),o.value){console.log("Canvas context successfully initialized."),o.value.fillStyle="#FFFFFF",o.value.fillRect(0,0,e.value,t.value),console.log("Initial text:",l.text);const{lines:f,visibleLines:v}=p();console.log("Lines:",f,"Visible Lines:",v),i.value=0,d(f,v)}else console.error("Failed to initialize canvas context.")}),(f,v)=>(c(),g("div",{class:"display-container",onWheel:a},[m("canvas",{ref_key:"canvas",ref:s,width:e.value,height:t.value,style:{border:"1px solid black",width:"112px",height:"160px"}},null,8,tt)],32))}}),st=W(nt,[["__scopeId","data-v-6d3c5eb8"]]),it={id:"pibody",class:"relative h-[450px] flex-shrink-0 max-h-[calc(100%-100px)] overflow-auto"},rt={class:"absolute top-4 right-1 flex flex-col gap-1"},ot={class:"material-icons"},at={class:"material-icons"},lt=A({__name:"SimulationView",setup(n){const e=_e(),{runCodePressed:t}=e,s=Ee(),{maxAreaIndex:o,isLoading:i,isStopping:l,isRunning:a,isConnected:p,fromSlotIndex:d,toDelete:f,slots:v,dragged:w,moduleComponents:y,modules:u}=O(s);de([]),s.connect();function S(){p.value?(s.run(),t()):s.connect()}return(P,z)=>{const X=Te,Y=H;return c(),g("div",{id:"emulator",class:T(["h-full parent relative flex flex-col border-t border-surface overflow-auto select-none",{"bg-rose-500":r(f)}])},[m("div",it,[_(X,{src:r(Me),width:"384px",draggable:"false",class:"absolute pt-4 min-w-[384px]",style:{left:"32px",top:"0px"}},null,8,["src"]),_(st,{class:"absolute top-[213px] left-[167px] w-[112px] h-[160px]"}),m("div",rt,[_(Y,{id:"#run",type:"button",class:"w-9 h-9 mr-1",severity:"info",rounded:"",onClick:S,disabled:r(i)||r(a)},{default:M(()=>[m("span",ot,U(r(i)?"hourglass_top":"play_arrow"),1)]),_:1},8,["disabled"]),_(Y,{type:"button",class:"w-9 h-9 mr-1",variant:r(a)?void 0:"outlined",severity:"danger",rounded:"",onClick:z[0]||(z[0]=h=>r(s).stop()),disabled:!r(a)||!r(p)},{default:M(()=>[m("span",at,U(r(l)?"hourglass_top":"stop"),1)]),_:1},8,["variant","disabled"])]),(c(!0),g(C,null,G(r(v),(h,b)=>(c(),g("div",{key:b,class:T(["absolute w-20 h-20 border rounded-lg text-center",[{"bg-green-200/[0.5]":r(o)==b,"bg-blue-200/[0.5]":r(d)==b},h.class]]),style:I([h.style,{left:h.x+"px",top:h.y+"px"}])},null,6))),128)),r(p)?(c(),g("div",{key:0,class:"absolute bg-black",style:I({left:r(s).usb.x+"px",top:r(s).usb.y-70+"px",width:r(s).usb.w+"px",height:r(s).usb.h+50+"px"})},null,4)):R("",!0),m("div",{class:"absolute",style:I({left:r(s).onLED.x+"px",top:r(s).onLED.y+"px",width:r(s).onLED.w+"px",height:r(s).onLED.h+"px"})},null,4)]),m("div",{class:T(["max-h-fit w-full overflow-auto flex flex-wrap gap-2 justify-center items-start",{"bg-rose-500":r(f)}])},[(c(!0),g(C,null,G(r(y),h=>(c(),$(K(h.is),{ref_for:!0,ref:b=>h.ref=b,onPointerdown:[b=>r(s).startDragFromModuleList(h,b),z[1]||(z[1]=Q(b=>b.preventDefault(),["prevent"]))],class:T(["flex-none w-20 h-20 border-sm cursor-move",h.class]),style:I(h.style)},null,40,["onPointerdown","class","style"]))),256))],2),(c(!0),g(C,null,G(r(u),(h,b)=>(c(),$(fe,{to:h.dragging?"#emulator":"#pibody",key:b},[(c(),$(K(h.is),{style:I([h.style,{left:h.x+"px",top:h.y+"px"}]),class:T([h.class,"absolute w-20 h-20 border-sm rounded-xl overflow-hidden"]),onPointerdown:[D=>r(s).startDragFromSlot(h,b,h.on,D),z[2]||(z[2]=Q(D=>D.preventDefault(),["prevent"]))],ref_for:!0,ref:D=>h.ref=D},null,40,["style","class","onPointerdown"]))],8,["to"]))),128))],2)}}}),vt=W(lt,[["__scopeId","data-v-59bd4cfd"]]);export{vt as S,ft as T,dt as _,He as a,Ge as s};