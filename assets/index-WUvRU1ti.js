import{_ as K,o,c as u,y as r,ab as S,z as D,al as F,am as V,a as O,an as B,k as h,aq as H,a9 as w,m as c,t as T,$ as C,a0 as k,au as y,aW as v,P as M,a1 as N,a4 as U,a3 as I,a5 as Z,a6 as X,a7 as W,a8 as q,r as A,w as E,b as j,T as G,X as L,F as f,n as P,l as J}from"./index-B44sbgom.js";var Q=function(e){var t=e.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(t("skeleton.background"),`;
    border-radius: `).concat(t("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(t("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},Y={root:{position:"relative"}},_={root:function(e){var t=e.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},$=K.extend({name:"skeleton",theme:Q,classes:_,inlineStyles:Y}),ee={name:"BaseSkeleton",extends:S,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:$,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},ne={name:"Skeleton",extends:ee,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function te(n,e,t,s,a,i){return o(),u("div",r({class:n.cx("root"),style:[n.sx("root"),i.containerStyle],"aria-hidden":"true"},n.ptmi("root")),null,16)}ne.render=te;var ie=function(e){var t=e.dt;return`
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
`)},se={root:function(e){var t=e.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var t=e.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},oe=K.extend({name:"menu",theme:ie,classes:se}),re={name:"BaseMenu",extends:S,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:oe,provide:function(){return{$pcMenu:this,$parentInstance:this}}},R={name:"Menuitem",hostName:"Menu",extends:S,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?D(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:F}},ae=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],le=["href","target"];function ue(n,e,t,s,a,i){var b=V("ripple");return i.visible()?(o(),u("li",r({key:0,id:t.id,class:[n.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[O("div",r({class:n.cx("itemContent"),onClick:e[0]||(e[0]=function(p){return i.onItemClick(p)}),onMousemove:e[1]||(e[1]=function(p){return i.onItemMouseMove(p)})},i.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(o(),h(w(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps(t.item)},null,8,["item","label","props"])):c("",!0):B((o(),u("a",r({key:0,href:t.item.url,class:n.cx("itemLink"),target:t.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[t.templates.itemicon?(o(),h(w(t.templates.itemicon),{key:0,item:t.item,class:H(n.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(o(),u("span",r({key:1,class:[n.cx("itemIcon"),t.item.icon]},i.getPTOptions("itemIcon")),null,16)):c("",!0),O("span",r({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),T(i.label()),17)],16,le)),[[b]])],16)],16,ae)):c("",!0)}R.render=ue;function z(n){return pe(n)||me(n)||ce(n)||de()}function de(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(n,e){if(n){if(typeof n=="string")return x(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?x(n,e):void 0}}function me(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function pe(n){if(Array.isArray(n))return x(n)}function x(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,s=Array(e);t<e;t++)s[t]=n[t];return s}var fe={name:"Menu",extends:re,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||C()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||C(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&k.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(y(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)y(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var t=M(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=t&&M(t,'a[data-pc-section="itemlink"]');this.popup&&y(this.target),s?s.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=z(t).findIndex(function(a){return a.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var t=v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=z(t).findIndex(function(a){return a.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var t=v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=t.length?t.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=t[s].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){N(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&k.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&y(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&k.clear(e)},alignOverlay:function(){U(this.container,this.target);var e=I(this.target);e>I(this.container)&&(this.container.style.minWidth=I(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var s=e.container&&!e.container.contains(t.target),a=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&s&&a?e.hide():!e.popup&&s&&a&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Z(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!X()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){W.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:R,Portal:q}},he=["id"],be=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],ye=["id"];function ve(n,e,t,s,a,i){var b=A("PVMenuitem"),p=A("Portal");return o(),h(p,{appendTo:n.appendTo,disabled:!n.popup},{default:E(function(){return[j(G,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:E(function(){return[!n.popup||a.overlayVisible?(o(),u("div",r({key:0,ref:i.containerRef,id:a.id,class:n.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(o(),u("div",r({key:0,class:n.cx("start")},n.ptm("start")),[L(n.$slots,"start")],16)):c("",!0),O("ul",r({ref:i.listRef,id:a.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(o(!0),u(f,null,P(n.model,function(l,d){return o(),u(f,{key:i.label(l)+d.toString()},[l.items&&i.visible(l)&&!l.separator?(o(),u(f,{key:0},[l.items?(o(),u("li",r({key:0,id:a.id+"_"+d,class:[n.cx("submenuLabel"),l.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[L(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[J(T(i.label(l)),1)]})],16,ye)):c("",!0),(o(!0),u(f,null,P(l.items,function(m,g){return o(),u(f,{key:m.label+d+"_"+g},[i.visible(m)&&!m.separator?(o(),h(b,{key:0,id:a.id+"_"+d+"_"+g,item:m,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(m)&&m.separator?(o(),u("li",r({key:"separator"+d+g,class:[n.cx("separator"),l.class],style:m.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):c("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(o(),u("li",r({key:"separator"+d.toString(),class:[n.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(o(),h(b,{key:i.label(l)+d.toString(),id:a.id+"_"+d,item:l,index:d,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,be),n.$slots.end?(o(),u("div",r({key:1,class:n.cx("end")},n.ptm("end")),[L(n.$slots,"end")],16)):c("",!0)],16,he)):c("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}fe.render=ve;export{fe as a,ne as s};
