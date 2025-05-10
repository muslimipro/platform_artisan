import{B as Z,ae as j,P as ae,x as r,ao as W,ap as re,o as s,c,e as p,aq as O,f,ai as _,J as D,h as b,t as w,U as R,Z as M,au as x,bg as C,a5 as H,y as le,C as ce,A as P,D as de,E as ue,O as he,G as pe,H as A,w as k,b as z,T as ge,I as S,F as y,i as N,g as me,d as q,a as G,ah as J,p as be,r as fe,L as E,j as I,k as Q,s as ve,ba as ye}from"./index-DvMEUTFI.js";import{s as we}from"./index-DKTTY6Z_.js";import{f as ke,T as Ie}from"./index-BnETu33R.js";import{b as Le}from"./index-Bb3NBgzE.js";var Oe=function(e){var t=e.dt;return`
.p-menu {
    background: `.concat(t("menu.background"),`;
    color: `).concat(t("menu.color"),`;
    border: 1px solid `).concat(t("menu.border.color"),`;
    border-radius: `).concat(t("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(t("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(t("menu.transition.duration"),", color ").concat(t("menu.transition.duration"),`;
    border-radius: `).concat(t("menu.item.border.radius"),`;
    color: `).concat(t("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menu.item.padding"),`;
    gap: `).concat(t("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(t("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(t("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(t("menu.submenu.label.background"),`;
    padding: `).concat(t("menu.submenu.label.padding"),`;
    color: `).concat(t("menu.submenu.label.color"),`;
    font-weight: `).concat(t("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-block-start: 1px solid `).concat(t("menu.separator.border.color"),`;
}
`)},xe={root:function(e){var t=e.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var t=e.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ce=Z.extend({name:"menu",theme:Oe,classes:xe}),Se={name:"BaseMenu",extends:j,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ce,provide:function(){return{$pcMenu:this,$parentInstance:this}}},X={name:"Menuitem",hostName:"Menu",extends:j,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?ae(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:W}},Te=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Me=["href","target"];function Pe(n,e,t,o,a,i){var g=re("ripple");return i.visible()?(s(),c("li",r({key:0,id:t.id,class:[n.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[p("div",r({class:n.cx("itemContent"),onClick:e[0]||(e[0]=function(h){return i.onItemClick(h)}),onMousemove:e[1]||(e[1]=function(h){return i.onItemMouseMove(h)})},i.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(s(),f(D(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps(t.item)},null,8,["item","label","props"])):b("",!0):O((s(),c("a",r({key:0,href:t.item.url,class:n.cx("itemLink"),target:t.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[t.templates.itemicon?(s(),f(D(t.templates.itemicon),{key:0,item:t.item,class:_(n.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(s(),c("span",r({key:1,class:[n.cx("itemIcon"),t.item.icon]},i.getPTOptions("itemIcon")),null,16)):b("",!0),p("span",r({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),w(i.label()),17)],16,Me)),[[g]])],16)],16,Te)):b("",!0)}X.render=Pe;function U(n){return Ee(n)||ze(n)||Ae(n)||_e()}function _e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(n,e){if(n){if(typeof n=="string")return V(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?V(n,e):void 0}}function ze(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ee(n){if(Array.isArray(n))return V(n)}function V(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,o=Array(e);t<e;t++)o[t]=n[t];return o}var Y={name:"Menu",extends:Se,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||R()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||R(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&M.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(x(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)x(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(C(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var t=H(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=t&&H(t,'a[data-pc-section="itemlink"]');this.popup&&x(this.target),o?o.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=C(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=U(t).findIndex(function(a){return a.id===e});return o>-1?o+1:0},findPrevOptionIndex:function(e){var t=C(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=U(t).findIndex(function(a){return a.id===e});return o>-1?o-1:0},changeFocusedOptionIndex:function(e){var t=C(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=e>=t.length?t.length-1:e<0?0:e;o>-1&&(this.focusedOptionIndex=t[o].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){le(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&M.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&x(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&M.clear(e)},alignOverlay:function(){ce(this.container,this.target);var e=P(this.target);e>P(this.container)&&(this.container.style.minWidth=P(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var o=e.container&&!e.container.contains(t.target),a=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&o&&a?e.hide():!e.popup&&o&&a&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new de(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ue()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){he.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:X,Portal:pe}},Ve=["id"],Be=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Fe=["id"];function Ke(n,e,t,o,a,i){var g=A("PVMenuitem"),h=A("Portal");return s(),f(h,{appendTo:n.appendTo,disabled:!n.popup},{default:k(function(){return[z(ge,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:k(function(){return[!n.popup||a.overlayVisible?(s(),c("div",r({key:0,ref:i.containerRef,id:a.id,class:n.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(s(),c("div",r({key:0,class:n.cx("start")},n.ptm("start")),[S(n.$slots,"start")],16)):b("",!0),p("ul",r({ref:i.listRef,id:a.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(s(!0),c(y,null,N(n.model,function(l,u){return s(),c(y,{key:i.label(l)+u.toString()},[l.items&&i.visible(l)&&!l.separator?(s(),c(y,{key:0},[l.items?(s(),c("li",r({key:0,id:a.id+"_"+u,class:[n.cx("submenuLabel"),l.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[S(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[me(w(i.label(l)),1)]})],16,Fe)):b("",!0),(s(!0),c(y,null,N(l.items,function(d,v){return s(),c(y,{key:d.label+u+"_"+v},[i.visible(d)&&!d.separator?(s(),f(g,{key:0,id:a.id+"_"+u+"_"+v,item:d,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(d)&&d.separator?(s(),c("li",r({key:"separator"+u+v,class:[n.cx("separator"),l.class],style:d.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):b("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(s(),c("li",r({key:"separator"+u.toString(),class:[n.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(s(),f(g,{key:i.label(l)+u.toString(),id:a.id+"_"+u,item:l,index:u,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Be),n.$slots.end?(s(),c("div",r({key:1,class:n.cx("end")},n.ptm("end")),[S(n.$slots,"end")],16)):b("",!0)],16,Ve)):b("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Y.render=Ke;const De={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},Re={class:"inline-flex flex-col items-start"},He={class:"font-bold"},Ne={class:"text-sm"},Ue=["href","onClick"],Ze={class:"ml-2"},je=["href","target"],We={class:"ml-2"},st=q({__name:"UserMenu",setup(n){const e=G(),{user:t}=J(e),o=Q(),{t:a}=be(),i=fe(),{width:g}=ke(),h=E(()=>g.value<640),l=E(()=>{const d=[{label:a("header.menu.settings"),icon:"pi pi-cog",route:"/settings/edit-profile"},{label:a("logOut"),icon:"pi pi-sign-out",command:async()=>{await o.replace({name:"login"}),e.logout()}}],v=[{label:a("projects"),icon:"pi pi-stop",route:"/projects"},{label:a("modules"),icon:"pi pi-circle",route:"/modules"}];return h.value?[...v,...d]:d}),u=d=>{i.value.toggle(d)};return(d,v)=>{var F;const B=ve,ee=we,te=ye,ne=A("router-link"),ie=Y,T=W;return s(),c(y,null,[(F=I(t))!=null&&F.verified?(s(),f(B,{key:1,type:"button",icon:"pi pi-ellipsis-v",onClick:u,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})):(s(),f(ee,{key:0,value:"1",severity:"danger",size:"small"},{default:k(()=>[z(B,{type:"button",icon:"pi pi-ellipsis-v",onClick:u,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})]),_:1})),z(ie,{ref_key:"menu",ref:i,id:"overlay_menu",model:l.value,popup:!0},{start:k(()=>{var m,L;return[O((s(),c("button",De,[p("span",Re,[p("span",He,w((m=I(t))==null?void 0:m.email),1),p("span",Ne,w((L=I(t))==null?void 0:L.user_type),1)])])),[[T]])]}),item:k(({item:m,props:L})=>[m.route?(s(),f(ne,{key:0,to:m.route},{default:k(({href:oe,navigate:se})=>{var K;return[O((s(),c("a",r({href:oe},L.action,{onClick:se}),[p("span",{class:_(m.icon)},null,2),p("span",Ze,w(m.label),1),!((K=I(t))!=null&&K.verified)&&m.route.includes("settings")?(s(),f(te,{key:0,value:"1",severity:"danger",size:"small"})):b("",!0)],16,Ue)),[[T]])]}),_:2},1032,["to"])):O((s(),c("a",r({key:1,href:m.url,target:m.target},L.action),[p("span",{class:_(m.icon)},null,2),p("span",We,w(m.label),1)],16,je)),[[T]])]),_:1},8,["model"])],64)}}});var qe=function(e){var t=e.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(t("toggleswitch.width"),`;
    height: `).concat(t("toggleswitch.height"),`;
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
    border-radius: `).concat(t("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(t("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("toggleswitch.border.color"),`;
    background: `).concat(t("toggleswitch.background"),`;
    transition: background `).concat(t("toggleswitch.transition.duration"),", color ").concat(t("toggleswitch.transition.duration"),", border-color ").concat(t("toggleswitch.transition.duration"),", outline-color ").concat(t("toggleswitch.transition.duration"),", box-shadow ").concat(t("toggleswitch.transition.duration"),`;
    border-radius: `).concat(t("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("toggleswitch.shadow"),`;
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: `).concat(t("toggleswitch.handle.background"),`;
    color: `).concat(t("toggleswitch.handle.color"),`;
    width: `).concat(t("toggleswitch.handle.size"),`;
    height: `).concat(t("toggleswitch.handle.size"),`;
    inset-inline-start: `).concat(t("toggleswitch.gap"),`;
    margin-block-start: calc(-1 * calc(`).concat(t("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(t("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(t("toggleswitch.transition.duration"),", color ").concat(t("toggleswitch.transition.duration"),", inset-inline-start ").concat(t("toggleswitch.slide.duration"),", box-shadow ").concat(t("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(t("toggleswitch.checked.background"),`;
    border-color: `).concat(t("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(t("toggleswitch.handle.checked.background"),`;
    color: `).concat(t("toggleswitch.handle.checked.color"),`;
    inset-inline-start: calc(`).concat(t("toggleswitch.width")," - calc(").concat(t("toggleswitch.handle.size")," + ").concat(t("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(t("toggleswitch.hover.background"),`;
    border-color: `).concat(t("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: `).concat(t("toggleswitch.handle.hover.background"),`;
    color: `).concat(t("toggleswitch.handle.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(t("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(t("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(t("toggleswitch.handle.checked.hover.background"),`;
    color: `).concat(t("toggleswitch.handle.checked.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(t("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(t("toggleswitch.focus.ring.width")," ").concat(t("toggleswitch.focus.ring.style")," ").concat(t("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(t("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(t("toggleswitch.invalid.border.color"),`;
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: `).concat(t("toggleswitch.disabled.background"),`;
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: `).concat(t("toggleswitch.handle.disabled.background"),`;
}
`)},Ge={root:{position:"relative"}},Je={root:function(e){var t=e.instance,o=e.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":t.checked,"p-disabled":o.disabled,"p-invalid":t.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Qe=Z.extend({name:"toggleswitch",theme:qe,classes:Je,inlineStyles:Ge}),Xe={name:"BaseToggleSwitch",extends:Le,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Qe,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},$={name:"ToggleSwitch",extends:Xe,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var t,o;this.$emit("blur",e),(t=(o=this.formField).onBlur)===null||t===void 0||t.call(o,e)}},computed:{checked:function(){return this.d_value===this.trueValue}}},Ye=["data-p-checked","data-p-disabled"],$e=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function et(n,e,t,o,a,i){return s(),c("div",r({class:n.cx("root"),style:n.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled}),[p("input",r({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":i.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:e[2]||(e[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,$e),p("div",r({class:n.cx("slider")},i.getPTOptions("slider")),[p("div",r({class:n.cx("handle")},i.getPTOptions("handle")),[S(n.$slots,"handle",{checked:i.checked})],16)],16)],16,Ye)}$.render=et;const at=q({__name:"StudentViewToggle",props:{path:{}},setup(n){const e=n,t=Q(),o=G(),{tokenUserRole:a}=J(o),i=E({get:()=>{var g;return((g=o.user)==null?void 0:g.user_type)==="student"},set:g=>{var h;g!==(((h=o.user)==null?void 0:h.user_type)==="student")&&(o.toggleRole(),t.push({path:e.path}))}});return(g,h)=>{const l=$,u=Ie;return I(a)&&I(a)=="editor"?O((s(),f(l,{key:0,modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=d=>i.value=d)},null,8,["modelValue"])),[[u,"Student view"]]):b("",!0)}}});export{at as _,st as a,Y as b,$ as s};
