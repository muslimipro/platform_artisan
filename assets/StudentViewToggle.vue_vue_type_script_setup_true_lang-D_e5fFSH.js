import{D as me,H as fe,aY as ze,E as c,_ as be,a0 as Ve,o,c as u,e as g,L as M,f as m,B as j,R as de,h,t as S,U as ue,a9 as R,Q as E,aG as B,Y as pe,ae as Ae,ag as Ee,a4 as U,ah as Be,ai as Fe,ad as Ke,ao as De,q as H,w as O,b as L,as as Re,G as K,F as x,i as he,g as Ue,d as ve,a as ye,y as N,u as je,x as He,r as F,A as Z,m as Ne,K as Ze,j as a,k as we,s as We,aZ as qe,M as Ge}from"./index-BRYS-vcQ.js";import{a as Ye,s as Qe}from"./index-Df5aeo5u.js";import{s as Je}from"./index-B66HduS2.js";import{i as Xe}from"./index-B_FzxdIN.js";import{S as W}from"./index-CXh-xjcX.js";import{a as $e}from"./index-Cu6Erxkx.js";import{u as et}from"./profile-DexA0tEb.js";import{T as tt}from"./index-D7LiWKXz.js";var nt=function(t){var e=t.dt;return`
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
`)},it={root:function(t){var e=t.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var e=t.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},ot=me.extend({name:"menu",theme:nt,classes:it}),st={name:"BaseMenu",extends:fe,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ot,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ke={name:"Menuitem",hostName:"Menu",extends:fe,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,e){return t&&t.item?ze(t.item[e]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:c({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:c({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:c({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:be}},at=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],lt=["href","target"];function rt(n,t,e,s,r,i){var f=Ve("ripple");return i.visible()?(o(),u("li",c({key:0,id:e.id,class:[n.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[g("div",c({class:n.cx("itemContent"),onClick:t[0]||(t[0]=function(b){return i.onItemClick(b)}),onMousemove:t[1]||(t[1]=function(b){return i.onItemMouseMove(b)})},i.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(o(),m(de(e.templates.item),{key:1,item:e.item,label:i.label(),props:i.getMenuItemProps(e.item)},null,8,["item","label","props"])):h("",!0):M((o(),u("a",c({key:0,href:e.item.url,class:n.cx("itemLink"),target:e.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[e.templates.itemicon?(o(),m(de(e.templates.itemicon),{key:0,item:e.item,class:j(n.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(o(),u("span",c({key:1,class:[n.cx("itemIcon"),e.item.icon]},i.getPTOptions("itemIcon")),null,16)):h("",!0),g("span",c({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),S(i.label()),17)],16,lt)),[[f]])],16)],16,at)):h("",!0)}ke.render=rt;function ge(n){return pt(n)||ut(n)||dt(n)||ct()}function ct(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(n,t){if(n){if(typeof n=="string")return q(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?q(n,t):void 0}}function ut(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function pt(n){if(Array.isArray(n))return q(n)}function q(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,s=Array(t);e<t;e++)s[e]=n[e];return s}var Ie={name:"Menu",extends:st,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||ue()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||ue(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&R.clear(this.container),this.container=null},methods:{itemClick:function(t){var e=t.item;this.disabled(e)||(e.command&&e.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(E(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)E(this.target),this.hide(),t.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var e=pe(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=e&&pe(e,'a[data-pc-section="itemlink"]');this.popup&&E(this.target),s?s.click():e&&e.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var e=B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=ge(e).findIndex(function(r){return r.id===t});return s>-1?s+1:0},findPrevOptionIndex:function(t){var e=B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=ge(e).findIndex(function(r){return r.id===t});return s>-1?s-1:0},changeFocusedOptionIndex:function(t){var e=B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=t>=e.length?e.length-1:t<0?0:t;s>-1&&(this.focusedOptionIndex=e[s].getAttribute("id"))},toggle:function(t){this.overlayVisible?this.hide():this.show(t)},show:function(t){this.overlayVisible=!0,this.target=t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){Ae(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&R.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&E(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&R.clear(t)},alignOverlay:function(){Ee(this.container,this.target);var t=U(this.target);t>U(this.container)&&(this.container.style.minWidth=U(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(e){var s=t.container&&!t.container.contains(e.target),r=!(t.target&&(t.target===e.target||t.target.contains(e.target)));t.overlayVisible&&s&&r?t.hide():!t.popup&&s&&r&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Be(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Fe()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){Ke.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:ke,Portal:De}},ht=["id"],gt=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],mt=["id"];function ft(n,t,e,s,r,i){var f=H("PVMenuitem"),b=H("Portal");return o(),m(b,{appendTo:n.appendTo,disabled:!n.popup},{default:O(function(){return[L(Re,c({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:O(function(){return[!n.popup||r.overlayVisible?(o(),u("div",c({key:0,ref:i.containerRef,id:r.id,class:n.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(o(),u("div",c({key:0,class:n.cx("start")},n.ptm("start")),[K(n.$slots,"start")],16)):h("",!0),g("ul",c({ref:i.listRef,id:r.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":r.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(o(!0),u(x,null,he(n.model,function(l,v){return o(),u(x,{key:i.label(l)+v.toString()},[l.items&&i.visible(l)&&!l.separator?(o(),u(x,{key:0},[l.items?(o(),u("li",c({key:0,id:r.id+"_"+v,class:[n.cx("submenuLabel"),l.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[K(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[Ue(S(i.label(l)),1)]})],16,mt)):h("",!0),(o(!0),u(x,null,he(l.items,function(y,k){return o(),u(x,{key:y.label+v+"_"+k},[i.visible(y)&&!y.separator?(o(),m(f,{key:0,id:r.id+"_"+v+"_"+k,item:y,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(y)&&y.separator?(o(),u("li",c({key:"separator"+v+k,class:[n.cx("separator"),l.class],style:y.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):h("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(o(),u("li",c({key:"separator"+v.toString(),class:[n.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(o(),m(f,{key:i.label(l)+v.toString(),id:r.id+"_"+v,item:l,index:v,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,gt),n.$slots.end?(o(),u("div",c({key:1,class:n.cx("end")},n.ptm("end")),[K(n.$slots,"end")],16)):h("",!0)],16,ht)):h("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Ie.render=ft;var bt=function(t){var e=t.dt;return`
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
`)},vt={root:{position:"relative"}},yt={root:function(t){var e=t.instance,s=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":s.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},wt=me.extend({name:"toggleswitch",theme:bt,classes:yt,inlineStyles:vt}),kt={name:"BaseToggleSwitch",extends:Ye,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:wt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},Le={name:"ToggleSwitch",extends:kt,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e,s;this.$emit("blur",t),(e=(s=this.formField).onBlur)===null||e===void 0||e.call(s,t)}},computed:{checked:function(){return this.d_value===this.trueValue}}},It=["data-p-checked","data-p-disabled"],Lt=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function Ot(n,t,e,s,r,i){return o(),u("div",c({class:n.cx("root"),style:n.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled}),[g("input",c({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":i.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,Lt),g("div",c({class:n.cx("slider")},i.getPTOptions("slider")),[g("div",c({class:n.cx("handle")},i.getPTOptions("handle")),[K(n.$slots,"handle",{checked:i.checked})],16)],16)],16,It)}Le.render=Ot;const Ct={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},xt={class:"inline-flex flex-col items-start"},St={class:"font-bold"},_t={class:"text-sm"},Tt={key:0,class:"flex flex-col gap-1 px-2"},Mt=["href","onClick"],Pt={class:"ml-2"},zt=["href","target"],Vt={class:"ml-2"},At={class:"flex justify-between items-center mb-8"},Et={class:"flex justify-end gap-2"},Nt=ve({__name:"UserMenu",setup(n){const t=ye(),{user:e}=N(t),s=je(),r=we(),{t:i}=He(),f=F(),{width:b}=Xe(),l=Z(()=>b.value<640),v=Z(()=>{const w=[{label:i("header.menu.settings"),icon:"pi pi-cog",route:"/settings/edit-profile"},{label:i("logOut"),icon:"pi pi-sign-out",command:async()=>{await r.replace({name:"login"}),await $e.logout(),t.logout()}}],d=[{label:i("projects"),icon:"pi pi-stop",route:"/projects"},{label:i("modules"),icon:"pi pi-circle",route:"/modules"}];return l.value?[...d,...w]:w}),y=w=>{f.value.toggle(w)};async function k(w){const{data:d}=await W.changeView(w);t.setToken(d),t.setUser(d),window.location.reload()}const P=F(""),_=F(!1),z=F(!1);async function Oe(){if(P.value.length!=0){z.value=!0;try{const{data:w}=await W.joinClass(P.value);_.value=!1,window.location.reload(),s.add({severity:"success",summary:w.message,life:2e3})}catch(w){s.add({severity:"error",summary:w.response.data.error,detail:w,life:2e3})}finally{z.value=!1}}}const G=et(),{fetchProfile:Y}=G,{verified:Q,profile:J,loading:Ce}=N(G),X=()=>{Ce.value||Y()};return Ne(()=>{Y(),window.addEventListener("focus",X)}),Ze(()=>{window.removeEventListener("focus",X)}),(w,d)=>{const I=We,xe=Je,Se=qe,_e=H("router-link"),Te=Ie,Me=Qe,Pe=Ge,D=be;return o(),u(x,null,[a(Q)?(o(),m(I,{key:1,type:"button",icon:"pi pi-ellipsis-v",onClick:y,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})):(o(),m(xe,{key:0,value:"1",severity:"danger",size:"small"},{default:O(()=>[L(I,{type:"button",icon:"pi pi-ellipsis-v",onClick:y,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})]),_:1})),L(Te,{ref_key:"menu",ref:f,id:"overlay_menu",model:v.value,popup:!0},{start:O(()=>{var p,T,V,A,$,ee,te,ne,ie,oe,se,ae,le,re;return[M((o(),u("button",Ct,[g("span",xt,[g("span",St,S((p=a(e))==null?void 0:p.email),1),g("span",_t,S((T=a(e))==null?void 0:T.user_type),1)])])),[[D]]),["school_manager","super_admin"].includes(((V=a(e))==null?void 0:V.origin_user_type)??"student")?h("",!0):(o(),u("div",Tt,[((A=a(e))==null?void 0:A.user_type)!="teacher"&&(($=a(e))==null?void 0:$.origin_user_type)!="student"?(o(),m(I,{key:0,label:"Teacher mode",class:"w-full",size:"small",onClick:d[0]||(d[0]=C=>k("teacher"))})):h("",!0),((ee=a(e))==null?void 0:ee.user_type)!="student"?(o(),m(I,{key:1,label:"Student mode",class:"w-full",size:"small",onClick:d[1]||(d[1]=C=>k("student")),severity:"info"})):h("",!0),!["student","teacher"].includes(((te=a(e))==null?void 0:te.origin_user_type)??"student")&&((ne=a(e))==null?void 0:ne.user_type)!=((ie=a(e))==null?void 0:ie.origin_user_type)?(o(),m(I,{key:2,label:`${(oe=a(e))==null?void 0:oe.origin_user_type.replace(/_/g," ").replace(/^./,C=>C.toUpperCase())} mode`,class:"w-full",size:"small",onClick:d[2]||(d[2]=C=>{var ce;return k(((ce=a(e))==null?void 0:ce.origin_user_type)??"student")}),severity:"help"},null,8,["label"])):h("",!0),((se=a(e))==null?void 0:se.origin_user_type)=="student"&&((ae=a(J))==null?void 0:ae.class_name)==null?(o(),m(I,{key:3,label:a(i)("pages.settings.joinClass"),icon:"pi pi-user-plus",size:"small",variant:"outlined",onClick:d[3]||(d[3]=C=>_.value=!0)},null,8,["label"])):h("",!0),((le=a(e))==null?void 0:le.origin_user_type)=="student"&&((re=a(J))==null?void 0:re.class_name)!=null?(o(),m(I,{key:4,label:a(i)("pages.teacher.schedule"),icon:"pi pi-calendar-plus",size:"small",variant:"outlined",onClick:d[4]||(d[4]=C=>w.$router.push("/student/schedule"))},null,8,["label"])):h("",!0)]))]}),item:O(({item:p,props:T})=>[p.route?(o(),m(_e,{key:0,to:p.route},{default:O(({href:V,navigate:A})=>[M((o(),u("a",c({href:V},T.action,{onClick:A}),[g("span",{class:j(p.icon)},null,2),g("span",Pt,S(p.label),1),!a(Q)&&p.route.includes("settings")?(o(),m(Se,{key:0,value:"1",severity:"danger",size:"small"})):h("",!0)],16,Mt)),[[D]])]),_:2},1032,["to"])):M((o(),u("a",c({key:1,href:p.url,target:p.target},T.action),[g("span",{class:j(p.icon)},null,2),g("span",Vt,S(p.label),1)],16,zt)),[[D]])]),_:1},8,["model"]),L(Pe,{visible:_.value,"onUpdate:visible":d[7]||(d[7]=p=>_.value=p),modal:"",header:a(i)("pages.settings.joinClassByCode"),closable:!1},{default:O(()=>[g("div",At,[L(Me,{type:"text",modelValue:P.value,"onUpdate:modelValue":d[5]||(d[5]=p=>P.value=p),placeholder:a(i)("pages.settings.enterCode")},null,8,["modelValue","placeholder"])]),g("div",Et,[L(I,{type:"button",label:a(i)("pages.settings.cancel"),severity:"secondary",onClick:d[6]||(d[6]=p=>_.value=!1)},null,8,["label"]),L(I,{type:"button",label:a(i)("pages.settings.join"),onClick:Oe,loading:z.value,disabled:z.value},null,8,["label","loading","disabled"])])]),_:1},8,["visible","header"])],64)}}}),Zt=ve({__name:"StudentViewToggle",props:{path:{}},setup(n){const t=n,e=we(),s=ye(),{user:r}=N(s),i=Z({get:()=>{var f;return((f=r.value)==null?void 0:f.user_type)==="student"},set:async f=>{var l;const{data:b}=await W.changeView(f?"student":((l=r.value)==null?void 0:l.origin_user_type)??"student");s.setToken(b),s.setUser(b),t.path?e.push({path:t.path}):window.location.reload()}});return(f,b)=>{var y;const l=Le,v=tt;return["editor","contributor"].includes(((y=a(r))==null?void 0:y.origin_user_type)??"")?M((o(),m(l,{key:0,modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=k=>i.value=k)},null,8,["modelValue"])),[[v,"Student view"]]):h("",!0)}}});export{Zt as _,Nt as a,Ie as b,Le as s};
