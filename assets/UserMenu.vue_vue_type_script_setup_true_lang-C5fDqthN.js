import{b as te}from"./index-hgS5cF5J.js";import{B as Z,o,c as l,e as u,x as a,I as S,ae as W,P as ne,ao as q,ap as ie,aq as T,f as g,aj as z,J as _,h as m,t as k,U as R,Z as P,au as C,bg as x,a5 as H,y as oe,C as se,A,D as ae,E as re,O as le,G as ce,H as E,w,b as B,T as de,F as y,i as N,g as ue,d as he,a as pe,ah as me,p as ge,r as be,L as U,j as L,k as fe,s as ve,ba as ye}from"./index-CrZk4WSl.js";import{s as ke}from"./index-Cps8jVCj.js";import{f as we}from"./index-CGugdBBV.js";var Ie=function(t){var e=t.dt;return`
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
`)},Le={root:{position:"relative"}},Oe={root:function(t){var e=t.instance,s=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":s.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Ce=Z.extend({name:"toggleswitch",theme:Ie,classes:Oe,inlineStyles:Le}),xe={name:"BaseToggleSwitch",extends:te,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ce,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},Se={name:"ToggleSwitch",extends:xe,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e,s;this.$emit("blur",t),(e=(s=this.formField).onBlur)===null||e===void 0||e.call(s,t)}},computed:{checked:function(){return this.d_value===this.trueValue}}},Te=["data-p-checked","data-p-disabled"],Me=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function Pe(n,t,e,s,r,i){return o(),l("div",a({class:n.cx("root"),style:n.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled}),[u("input",a({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":i.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,Me),u("div",a({class:n.cx("slider")},i.getPTOptions("slider")),[u("div",a({class:n.cx("handle")},i.getPTOptions("handle")),[S(n.$slots,"handle",{checked:i.checked})],16)],16)],16,Te)}Se.render=Pe;var Ae=function(t){var e=t.dt;return`
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
`)},ze={root:function(t){var e=t.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var e=t.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ee=Z.extend({name:"menu",theme:Ae,classes:ze}),Be={name:"BaseMenu",extends:W,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ee,provide:function(){return{$pcMenu:this,$parentInstance:this}}},G={name:"Menuitem",hostName:"Menu",extends:W,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,e){return t&&t.item?ne(t.item[e]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:a({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:a({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:a({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:q}},Fe=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Ke=["href","target"];function Ve(n,t,e,s,r,i){var f=ie("ripple");return i.visible()?(o(),l("li",a({key:0,id:e.id,class:[n.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[u("div",a({class:n.cx("itemContent"),onClick:t[0]||(t[0]=function(b){return i.onItemClick(b)}),onMousemove:t[1]||(t[1]=function(b){return i.onItemMouseMove(b)})},i.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(o(),g(_(e.templates.item),{key:1,item:e.item,label:i.label(),props:i.getMenuItemProps(e.item)},null,8,["item","label","props"])):m("",!0):T((o(),l("a",a({key:0,href:e.item.url,class:n.cx("itemLink"),target:e.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[e.templates.itemicon?(o(),g(_(e.templates.itemicon),{key:0,item:e.item,class:z(n.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(o(),l("span",a({key:1,class:[n.cx("itemIcon"),e.item.icon]},i.getPTOptions("itemIcon")),null,16)):m("",!0),u("span",a({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),k(i.label()),17)],16,Ke)),[[f]])],16)],16,Fe)):m("",!0)}G.render=Ve;function j(n){return He(n)||Re(n)||_e(n)||De()}function De(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(n,t){if(n){if(typeof n=="string")return F(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?F(n,t):void 0}}function Re(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function He(n){if(Array.isArray(n))return F(n)}function F(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,s=Array(t);e<t;e++)s[e]=n[e];return s}var J={name:"Menu",extends:Be,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||R()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||R(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&P.clear(this.container),this.container=null},methods:{itemClick:function(t){var e=t.item;this.disabled(e)||(e.command&&e.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(C(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)C(this.target),this.hide(),t.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var e=H(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=e&&H(e,'a[data-pc-section="itemlink"]');this.popup&&C(this.target),s?s.click():e&&e.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var e=x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=j(e).findIndex(function(r){return r.id===t});return s>-1?s+1:0},findPrevOptionIndex:function(t){var e=x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=j(e).findIndex(function(r){return r.id===t});return s>-1?s-1:0},changeFocusedOptionIndex:function(t){var e=x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=t>=e.length?e.length-1:t<0?0:t;s>-1&&(this.focusedOptionIndex=e[s].getAttribute("id"))},toggle:function(t){this.overlayVisible?this.hide():this.show(t)},show:function(t){this.overlayVisible=!0,this.target=t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){oe(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&P.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&C(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&P.clear(t)},alignOverlay:function(){se(this.container,this.target);var t=A(this.target);t>A(this.container)&&(this.container.style.minWidth=A(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(e){var s=t.container&&!t.container.contains(e.target),r=!(t.target&&(t.target===e.target||t.target.contains(e.target)));t.overlayVisible&&s&&r?t.hide():!t.popup&&s&&r&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new ae(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!re()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){le.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:G,Portal:ce}},Ne=["id"],Ue=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],je=["id"];function Ze(n,t,e,s,r,i){var f=E("PVMenuitem"),b=E("Portal");return o(),g(b,{appendTo:n.appendTo,disabled:!n.popup},{default:w(function(){return[B(de,a({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:w(function(){return[!n.popup||r.overlayVisible?(o(),l("div",a({key:0,ref:i.containerRef,id:r.id,class:n.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(o(),l("div",a({key:0,class:n.cx("start")},n.ptm("start")),[S(n.$slots,"start")],16)):m("",!0),u("ul",a({ref:i.listRef,id:r.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":r.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(o(!0),l(y,null,N(n.model,function(c,h){return o(),l(y,{key:i.label(c)+h.toString()},[c.items&&i.visible(c)&&!c.separator?(o(),l(y,{key:0},[c.items?(o(),l("li",a({key:0,id:r.id+"_"+h,class:[n.cx("submenuLabel"),c.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[S(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:c},function(){return[ue(k(i.label(c)),1)]})],16,je)):m("",!0),(o(!0),l(y,null,N(c.items,function(d,v){return o(),l(y,{key:d.label+h+"_"+v},[i.visible(d)&&!d.separator?(o(),g(f,{key:0,id:r.id+"_"+h+"_"+v,item:d,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(d)&&d.separator?(o(),l("li",a({key:"separator"+h+v,class:[n.cx("separator"),c.class],style:d.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):m("",!0)],64)}),128))],64)):i.visible(c)&&c.separator?(o(),l("li",a({key:"separator"+h.toString(),class:[n.cx("separator"),c.class],style:c.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(o(),g(f,{key:i.label(c)+h.toString(),id:r.id+"_"+h,item:c,index:h,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Ue),n.$slots.end?(o(),l("div",a({key:1,class:n.cx("end")},n.ptm("end")),[S(n.$slots,"end")],16)):m("",!0)],16,Ne)):m("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}J.render=Ze;const We={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},qe={class:"inline-flex flex-col items-start"},Ge={class:"font-bold"},Je={class:"text-sm"},Qe=["href","onClick"],Xe={class:"ml-2"},Ye=["href","target"],$e={class:"ml-2"},ot=he({__name:"UserMenu",setup(n){const t=pe(),{user:e}=me(t),s=fe(),{t:r}=ge(),i=be(),{width:f}=we(),b=U(()=>f.value<640),c=U(()=>{const d=[{label:r("header.menu.settings"),icon:"pi pi-cog",route:"/settings/edit-profile"},{label:r("logOut"),icon:"pi pi-sign-out",command:()=>{t.logout(),s.replace({name:"login"})}}],v=[{label:r("projects"),icon:"pi pi-stop",route:"/projects"},{label:r("modules"),icon:"pi pi-circle",route:"/modules"}];return b.value?[...v,...d]:d}),h=d=>{i.value.toggle(d)};return(d,v)=>{var V;const K=ve,Q=ke,X=ye,Y=E("router-link"),$=J,M=q;return o(),l(y,null,[(V=L(e))!=null&&V.verified?(o(),g(K,{key:1,type:"button",icon:"pi pi-ellipsis-v",onClick:h,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})):(o(),g(Q,{key:0,value:"1",severity:"danger",size:"small"},{default:w(()=>[B(K,{type:"button",icon:"pi pi-ellipsis-v",onClick:h,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})]),_:1})),B($,{ref_key:"menu",ref:i,id:"overlay_menu",model:c.value,popup:!0},{start:w(()=>{var p,I,O;return[T((o(),l("button",We,[u("span",qe,[u("span",Ge,k((p=L(e))==null?void 0:p.email),1),u("span",Je,k(((I=L(e))==null?void 0:I.user_type)=="student"?d.$t("student"):((O=L(e))==null?void 0:O.user_type)=="teacher"?d.$t("teacher"):d.$t("editor")),1)])])),[[M]])]}),item:w(({item:p,props:I})=>[p.route?(o(),g(Y,{key:0,to:p.route},{default:w(({href:O,navigate:ee})=>{var D;return[T((o(),l("a",a({href:O},I.action,{onClick:ee}),[u("span",{class:z(p.icon)},null,2),u("span",Xe,k(p.label),1),!((D=L(e))!=null&&D.verified)&&p.route.includes("settings")?(o(),g(X,{key:0,value:"1",severity:"danger",size:"small"})):m("",!0)],16,Qe)),[[M]])]}),_:2},1032,["to"])):T((o(),l("a",a({key:1,href:p.url,target:p.target},I.action),[u("span",{class:z(p.icon)},null,2),u("span",$e,k(p.label),1)],16,Ye)),[[M]])]),_:1},8,["model"])],64)}}});export{ot as _,J as a,Se as s};
