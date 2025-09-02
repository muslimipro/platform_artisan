import{a as B}from"./index-DpB8_Bbd.js";import{a2 as E,b as s,e as c,h as p,W as a,a6 as w,ab as F,be as V,aa as D,ac as H,P as R,i as b,n as N,X as C,K as u,t as K,a3 as x,ak as I,a5 as v,aL as y,a8 as S,ap as U,ar as Z,ag as L,as as W,at as j,ao as q,az as X,H as T,w as P,f as G,T as J,F as m,k as M,D as Q}from"./index-CTzBRDkF.js";var Y=function(e){var t=e.dt;return`
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
`)},_={root:{position:"relative"}},$={root:function(e){var t=e.instance,o=e.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":t.checked,"p-disabled":o.disabled,"p-invalid":t.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ee=E.extend({name:"toggleswitch",theme:Y,classes:$,inlineStyles:_}),te={name:"BaseToggleSwitch",extends:B,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ee,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},ne={name:"ToggleSwitch",extends:te,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var t,o;this.$emit("blur",e),(t=(o=this.formField).onBlur)===null||t===void 0||t.call(o,e)}},computed:{checked:function(){return this.d_value===this.trueValue}}},ie=["data-p-checked","data-p-disabled"],oe=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function se(n,e,t,o,r,i){return s(),c("div",a({class:n.cx("root"),style:n.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled}),[p("input",a({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":i.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:e[2]||(e[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,oe),p("div",a({class:n.cx("slider")},i.getPTOptions("slider")),[p("div",a({class:n.cx("handle")},i.getPTOptions("handle")),[w(n.$slots,"handle",{checked:i.checked})],16)],16)],16,ie)}ne.render=se;var ae=function(e){var t=e.dt;return`
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
`)},re={root:function(e){var t=e.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var t=e.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},le=E.extend({name:"menu",theme:ae,classes:re}),ce={name:"BaseMenu",extends:F,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:le,provide:function(){return{$pcMenu:this,$parentInstance:this}}},z={name:"Menuitem",hostName:"Menu",extends:F,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?V(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:a({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:a({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:a({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:D}},de=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],ue=["href","target"];function he(n,e,t,o,r,i){var f=H("ripple");return i.visible()?(s(),c("li",a({key:0,id:t.id,class:[n.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[p("div",a({class:n.cx("itemContent"),onClick:e[0]||(e[0]=function(g){return i.onItemClick(g)}),onMousemove:e[1]||(e[1]=function(g){return i.onItemMouseMove(g)})},i.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(s(),b(C(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps(t.item)},null,8,["item","label","props"])):u("",!0):R((s(),c("a",a({key:0,href:t.item.url,class:n.cx("itemLink"),target:t.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[t.templates.itemicon?(s(),b(C(t.templates.itemicon),{key:0,item:t.item,class:N(n.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(s(),c("span",a({key:1,class:[n.cx("itemIcon"),t.item.icon]},i.getPTOptions("itemIcon")),null,16)):u("",!0),p("span",a({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),K(i.label()),17)],16,ue)),[[f]])],16)],16,de)):u("",!0)}z.render=he;function A(n){return be(n)||me(n)||ge(n)||pe()}function pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(n,e){if(n){if(typeof n=="string")return O(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(n,e):void 0}}function me(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function be(n){if(Array.isArray(n))return O(n)}function O(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,o=Array(e);t<e;t++)o[t]=n[t];return o}var fe={name:"Menu",extends:ce,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||x()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||x(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&I.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(v(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)v(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var t=S(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=t&&S(t,'a[data-pc-section="itemlink"]');this.popup&&v(this.target),o?o.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=A(t).findIndex(function(r){return r.id===e});return o>-1?o+1:0},findPrevOptionIndex:function(e){var t=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=A(t).findIndex(function(r){return r.id===e});return o>-1?o-1:0},changeFocusedOptionIndex:function(e){var t=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=e>=t.length?t.length-1:e<0?0:e;o>-1&&(this.focusedOptionIndex=t[o].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){U(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&I.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&v(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&I.clear(e)},alignOverlay:function(){Z(this.container,this.target);var e=L(this.target);e>L(this.container)&&(this.container.style.minWidth=L(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var o=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&o&&r?e.hide():!e.popup&&o&&r&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new W(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!j()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){q.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:z,Portal:X}},ve=["id"],ye=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],we=["id"];function ke(n,e,t,o,r,i){var f=T("PVMenuitem"),g=T("Portal");return s(),b(g,{appendTo:n.appendTo,disabled:!n.popup},{default:P(function(){return[G(J,a({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:P(function(){return[!n.popup||r.overlayVisible?(s(),c("div",a({key:0,ref:i.containerRef,id:r.id,class:n.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(s(),c("div",a({key:0,class:n.cx("start")},n.ptm("start")),[w(n.$slots,"start")],16)):u("",!0),p("ul",a({ref:i.listRef,id:r.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":r.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(s(!0),c(m,null,M(n.model,function(l,d){return s(),c(m,{key:i.label(l)+d.toString()},[l.items&&i.visible(l)&&!l.separator?(s(),c(m,{key:0},[l.items?(s(),c("li",a({key:0,id:r.id+"_"+d,class:[n.cx("submenuLabel"),l.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[w(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[Q(K(i.label(l)),1)]})],16,we)):u("",!0),(s(!0),c(m,null,M(l.items,function(h,k){return s(),c(m,{key:h.label+d+"_"+k},[i.visible(h)&&!h.separator?(s(),b(f,{key:0,id:r.id+"_"+d+"_"+k,item:h,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(h)&&h.separator?(s(),c("li",a({key:"separator"+d+k,class:[n.cx("separator"),l.class],style:h.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):u("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(s(),c("li",a({key:"separator"+d.toString(),class:[n.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(s(),b(f,{key:i.label(l)+d.toString(),id:r.id+"_"+d,item:l,index:d,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ye),n.$slots.end?(s(),c("div",a({key:1,class:n.cx("end")},n.ptm("end")),[w(n.$slots,"end")],16)):u("",!0)],16,ve)):u("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}fe.render=ke;export{fe as a,ne as s};
