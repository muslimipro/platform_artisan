import{B as $,z as ee,b3 as ge,x as r,R as te,S as me,o,c,e as h,T as S,f as b,D as F,V as X,h as f,t as I,U as G,a2 as E,Z as P,aX as z,M as J,a8 as be,aa as fe,P as B,ab as ye,ac as ve,a7 as we,ai as ke,v as K,w as L,b as D,am as Ie,y as V,F as k,i as Q,g as Le,d as ne,a as ie,C as oe,p as Oe,r as xe,I as R,j as m,k as se,s as Ce,aR as Se}from"./index-06dapWEh.js";import{s as _e}from"./index-X9g85Gzm.js";import{i as Te,T as Me}from"./index-NhdULNGN.js";import{S as ae}from"./index-CMLj0k4k.js";import{a as Pe}from"./index-D8v7f4pp.js";import{a as ze}from"./index-Db1rzZhZ.js";var Ve=function(t){var e=t.dt;return`
.p-menu {
    background: `.concat(e("menu.background"),`;
    color: `).concat(e("menu.color"),`;
    border: 1px solid `).concat(e("menu.border.color"),`;
    border-radius: `).concat(e("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(e("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(e("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(e("menu.transition.duration"),", color ").concat(e("menu.transition.duration"),`;
    border-radius: `).concat(e("menu.item.border.radius"),`;
    color: `).concat(e("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(e("menu.item.padding"),`;
    gap: `).concat(e("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(e("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(e("menu.item.focus.color"),`;
    background: `).concat(e("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(e("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(e("menu.item.focus.color"),`;
    background: `).concat(e("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(e("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(e("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(e("menu.submenu.label.background"),`;
    padding: `).concat(e("menu.submenu.label.padding"),`;
    color: `).concat(e("menu.submenu.label.color"),`;
    font-weight: `).concat(e("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-block-start: 1px solid `).concat(e("menu.separator.border.color"),`;
}
`)},Ae={root:function(t){var e=t.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var e=t.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ee=$.extend({name:"menu",theme:Ve,classes:Ae}),Be={name:"BaseMenu",extends:ee,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ee,provide:function(){return{$pcMenu:this,$parentInstance:this}}},le={name:"Menuitem",hostName:"Menu",extends:ee,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,e){return t&&t.item?ge(t.item[e]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:te}},Fe=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Ke=["href","target"];function De(n,t,e,s,a,i){var y=me("ripple");return i.visible()?(o(),c("li",r({key:0,id:e.id,class:[n.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[h("div",r({class:n.cx("itemContent"),onClick:t[0]||(t[0]=function(p){return i.onItemClick(p)}),onMousemove:t[1]||(t[1]=function(p){return i.onItemMouseMove(p)})},i.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(o(),b(X(e.templates.item),{key:1,item:e.item,label:i.label(),props:i.getMenuItemProps(e.item)},null,8,["item","label","props"])):f("",!0):S((o(),c("a",r({key:0,href:e.item.url,class:n.cx("itemLink"),target:e.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[e.templates.itemicon?(o(),b(X(e.templates.itemicon),{key:0,item:e.item,class:F(n.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(o(),c("span",r({key:1,class:[n.cx("itemIcon"),e.item.icon]},i.getPTOptions("itemIcon")),null,16)):f("",!0),h("span",r({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),I(i.label()),17)],16,Ke)),[[y]])],16)],16,Fe)):f("",!0)}le.render=De;function Y(n){return Ne(n)||Ue(n)||He(n)||Re()}function Re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(n,t){if(n){if(typeof n=="string")return H(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?H(n,t):void 0}}function Ue(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ne(n){if(Array.isArray(n))return H(n)}function H(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,s=Array(t);e<t;e++)s[e]=n[e];return s}var re={name:"Menu",extends:Be,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||G()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||G(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&E.clear(this.container),this.container=null},methods:{itemClick:function(t){var e=t.item;this.disabled(e)||(e.command&&e.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(P(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)P(this.target),this.hide(),t.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var e=J(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=e&&J(e,'a[data-pc-section="itemlink"]');this.popup&&P(this.target),s?s.click():e&&e.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var e=z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=Y(e).findIndex(function(a){return a.id===t});return s>-1?s+1:0},findPrevOptionIndex:function(t){var e=z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=Y(e).findIndex(function(a){return a.id===t});return s>-1?s-1:0},changeFocusedOptionIndex:function(t){var e=z(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=t>=e.length?e.length-1:t<0?0:t;s>-1&&(this.focusedOptionIndex=e[s].getAttribute("id"))},toggle:function(t){this.overlayVisible?this.hide():this.show(t)},show:function(t){this.overlayVisible=!0,this.target=t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){be(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&E.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&P(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&E.clear(t)},alignOverlay:function(){fe(this.container,this.target);var t=B(this.target);t>B(this.container)&&(this.container.style.minWidth=B(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(e){var s=t.container&&!t.container.contains(e.target),a=!(t.target&&(t.target===e.target||t.target.contains(e.target)));t.overlayVisible&&s&&a?t.hide():!t.popup&&s&&a&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new ye(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!ve()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){we.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:le,Portal:ke}},Ze=["id"],je=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],We=["id"];function qe(n,t,e,s,a,i){var y=K("PVMenuitem"),p=K("Portal");return o(),b(p,{appendTo:n.appendTo,disabled:!n.popup},{default:L(function(){return[D(Ie,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:L(function(){return[!n.popup||a.overlayVisible?(o(),c("div",r({key:0,ref:i.containerRef,id:a.id,class:n.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(o(),c("div",r({key:0,class:n.cx("start")},n.ptm("start")),[V(n.$slots,"start")],16)):f("",!0),h("ul",r({ref:i.listRef,id:a.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(o(!0),c(k,null,Q(n.model,function(l,d){return o(),c(k,{key:i.label(l)+d.toString()},[l.items&&i.visible(l)&&!l.separator?(o(),c(k,{key:0},[l.items?(o(),c("li",r({key:0,id:a.id+"_"+d,class:[n.cx("submenuLabel"),l.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[V(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[Le(I(i.label(l)),1)]})],16,We)):f("",!0),(o(!0),c(k,null,Q(l.items,function(u,g){return o(),c(k,{key:u.label+d+"_"+g},[i.visible(u)&&!u.separator?(o(),b(y,{key:0,id:a.id+"_"+d+"_"+g,item:u,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(u)&&u.separator?(o(),c("li",r({key:"separator"+d+g,class:[n.cx("separator"),l.class],style:u.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):f("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(o(),c("li",r({key:"separator"+d.toString(),class:[n.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(o(),b(y,{key:i.label(l)+d.toString(),id:a.id+"_"+d,item:l,index:d,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,je),n.$slots.end?(o(),c("div",r({key:1,class:n.cx("end")},n.ptm("end")),[V(n.$slots,"end")],16)):f("",!0)],16,Ze)):f("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}re.render=qe;const Xe={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},Ge={class:"inline-flex flex-col items-start"},Je={class:"font-bold"},Qe={class:"text-sm"},Ye={class:"flex flex-col gap-1 px-2"},$e=["href","onClick"],et={class:"ml-2"},tt=["href","target"],nt={class:"ml-2"},ft=ne({__name:"UserMenu",setup(n){const t=ie(),{user:e}=oe(t),s=se(),{t:a}=Oe(),i=xe(),{width:y}=Te(),p=R(()=>y.value<640),l=R(()=>{const g=[{label:a("header.menu.settings"),icon:"pi pi-cog",route:"/settings/edit-profile"},{label:a("logOut"),icon:"pi pi-sign-out",command:async()=>{await s.replace({name:"login"}),await Pe.logout(),t.logout()}}],w=[{label:a("projects"),icon:"pi pi-stop",route:"/projects"},{label:a("modules"),icon:"pi pi-circle",route:"/modules"}];return p.value?[...w,...g]:g}),d=g=>{i.value.toggle(g)};async function u(g){const{data:w}=await ae.changeView(g);t.setToken(w),t.setUser(w),window.location.reload()}return(g,w)=>{var U;const O=Ce,de=_e,ue=Se,he=K("router-link"),pe=re,A=te;return o(),c(k,null,[(U=m(e))!=null&&U.verified?(o(),b(O,{key:1,type:"button",icon:"pi pi-ellipsis-v",onClick:d,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})):(o(),b(de,{key:0,value:"1",severity:"danger",size:"small"},{default:L(()=>[D(O,{type:"button",icon:"pi pi-ellipsis-v",onClick:d,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})]),_:1})),D(pe,{ref_key:"menu",ref:i,id:"overlay_menu",model:l.value,popup:!0},{start:L(()=>{var v,x,_,T,C,N,Z,j,W;return[S((o(),c("button",Xe,[h("span",Ge,[h("span",Je,I((v=m(e))==null?void 0:v.email),1),h("span",Qe,I((x=m(e))==null?void 0:x.user_type),1)])])),[[A]]),h("div",Ye,[((_=m(e))==null?void 0:_.user_type)!="teacher"&&((T=m(e))==null?void 0:T.origin_user_type)!="student"?(o(),b(O,{key:0,label:"Teacher mode",class:"w-full",size:"small",onClick:w[0]||(w[0]=M=>u("teacher"))})):f("",!0),((C=m(e))==null?void 0:C.user_type)!="student"?(o(),b(O,{key:1,label:"Student mode",class:"w-full",size:"small",onClick:w[1]||(w[1]=M=>u("student")),severity:"info"})):f("",!0),!["student","teacher"].includes(((N=m(e))==null?void 0:N.origin_user_type)??"student")&&((Z=m(e))==null?void 0:Z.user_type)!=((j=m(e))==null?void 0:j.origin_user_type)?(o(),b(O,{key:2,label:`${(W=m(e))==null?void 0:W.origin_user_type.replace(/_/g," ").replace(/^./,M=>M.toUpperCase())} mode`,class:"w-full",size:"small",onClick:w[2]||(w[2]=M=>{var q;return u(((q=m(e))==null?void 0:q.origin_user_type)??"student")}),severity:"help"},null,8,["label"])):f("",!0)])]}),item:L(({item:v,props:x})=>[v.route?(o(),b(he,{key:0,to:v.route},{default:L(({href:_,navigate:T})=>{var C;return[S((o(),c("a",r({href:_},x.action,{onClick:T}),[h("span",{class:F(v.icon)},null,2),h("span",et,I(v.label),1),!((C=m(e))!=null&&C.verified)&&v.route.includes("settings")?(o(),b(ue,{key:0,value:"1",severity:"danger",size:"small"})):f("",!0)],16,$e)),[[A]])]}),_:2},1032,["to"])):S((o(),c("a",r({key:1,href:v.url,target:v.target},x.action),[h("span",{class:F(v.icon)},null,2),h("span",nt,I(v.label),1)],16,tt)),[[A]])]),_:1},8,["model"])],64)}}});var it=function(t){var e=t.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(e("toggleswitch.width"),`;
    height: `).concat(e("toggleswitch.height"),`;
}

.p-toggleswitch-input {
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
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(e("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("toggleswitch.border.color"),`;
    background: `).concat(e("toggleswitch.background"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", border-color ").concat(e("toggleswitch.transition.duration"),", outline-color ").concat(e("toggleswitch.transition.duration"),", box-shadow ").concat(e("toggleswitch.transition.duration"),`;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("toggleswitch.shadow"),`;
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: `).concat(e("toggleswitch.handle.background"),`;
    color: `).concat(e("toggleswitch.handle.color"),`;
    width: `).concat(e("toggleswitch.handle.size"),`;
    height: `).concat(e("toggleswitch.handle.size"),`;
    inset-inline-start: `).concat(e("toggleswitch.gap"),`;
    margin-block-start: calc(-1 * calc(`).concat(e("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(e("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", inset-inline-start ").concat(e("toggleswitch.slide.duration"),", box-shadow ").concat(e("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.background"),`;
    border-color: `).concat(e("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.color"),`;
    inset-inline-start: calc(`).concat(e("toggleswitch.width")," - calc(").concat(e("toggleswitch.handle.size")," + ").concat(e("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.hover.background"),`;
    border-color: `).concat(e("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(e("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(e("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(e("toggleswitch.focus.ring.width")," ").concat(e("toggleswitch.focus.ring.style")," ").concat(e("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(e("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(e("toggleswitch.invalid.border.color"),`;
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.disabled.background"),`;
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.disabled.background"),`;
}
`)},ot={root:{position:"relative"}},st={root:function(t){var e=t.instance,s=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":s.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},at=$.extend({name:"toggleswitch",theme:it,classes:st,inlineStyles:ot}),lt={name:"BaseToggleSwitch",extends:ze,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:at,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},ce={name:"ToggleSwitch",extends:lt,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e,s;this.$emit("blur",t),(e=(s=this.formField).onBlur)===null||e===void 0||e.call(s,t)}},computed:{checked:function(){return this.d_value===this.trueValue}}},rt=["data-p-checked","data-p-disabled"],ct=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function dt(n,t,e,s,a,i){return o(),c("div",r({class:n.cx("root"),style:n.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled}),[h("input",r({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":i.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,ct),h("div",r({class:n.cx("slider")},i.getPTOptions("slider")),[h("div",r({class:n.cx("handle")},i.getPTOptions("handle")),[V(n.$slots,"handle",{checked:i.checked})],16)],16)],16,rt)}ce.render=dt;const yt=ne({__name:"StudentViewToggle",props:{path:{}},setup(n){const t=n,e=se(),s=ie(),{user:a}=oe(s),i=R({get:()=>{var y;return((y=a.value)==null?void 0:y.user_type)==="student"},set:async y=>{var l;const{data:p}=await ae.changeView(y?"student":((l=a.value)==null?void 0:l.origin_user_type)??"student");s.setToken(p),s.setUser(p),t.path?e.push({path:t.path}):window.location.reload()}});return(y,p)=>{var u;const l=ce,d=Me;return["editor","contributor"].includes(((u=m(a))==null?void 0:u.origin_user_type)??"")?S((o(),b(l,{key:0,modelValue:i.value,"onUpdate:modelValue":p[0]||(p[0]=g=>i.value=g)},null,8,["modelValue"])),[[d,"Student view"]]):f("",!0)}}});export{yt as _,ft as a,re as b,ce as s};
