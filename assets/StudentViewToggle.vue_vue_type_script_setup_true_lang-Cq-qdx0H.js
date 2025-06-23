import{B as pe,z as he,aY as Me,x as r,R as ge,O as Pe,o,c as d,e as h,P as M,f as m,D as j,Q as le,h as g,t as x,Y as re,a1 as R,M as E,aG as B,L as ce,a7 as Ve,a9 as ze,V as U,aa as Ae,ab as Ee,a6 as Be,ah as Fe,v as H,w as O,b as L,al as Ke,y as K,F as C,i as de,g as De,d as me,a as fe,C as N,u as Re,p as Ue,r as F,I as Z,m as je,Z as He,j as c,k as be,s as Ne,aZ as Ze,_ as We}from"./index-DTnuYjp0.js";import{a as Je,s as Ye}from"./index-DeD98j8u.js";import{s as qe}from"./index-Bzu9VR-e.js";import{i as Ge}from"./index-Cf8GXusc.js";import{S as W}from"./index-B5MOm-i3.js";import{a as Qe}from"./index-Cn1av5Rm.js";import{u as Xe}from"./profile-cGLQkZaC.js";import{T as $e}from"./index-CUUP1TJQ.js";var et=function(t){var e=t.dt;return`
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
`)},tt={root:function(t){var e=t.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var e=t.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},nt=pe.extend({name:"menu",theme:et,classes:tt}),it={name:"BaseMenu",extends:he,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:nt,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ve={name:"Menuitem",hostName:"Menu",extends:he,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,e){return t&&t.item?Me(t.item[e]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:ge}},ot=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],st=["href","target"];function at(n,t,e,s,l,i){var f=Pe("ripple");return i.visible()?(o(),d("li",r({key:0,id:e.id,class:[n.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[h("div",r({class:n.cx("itemContent"),onClick:t[0]||(t[0]=function(b){return i.onItemClick(b)}),onMousemove:t[1]||(t[1]=function(b){return i.onItemMouseMove(b)})},i.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(o(),m(le(e.templates.item),{key:1,item:e.item,label:i.label(),props:i.getMenuItemProps(e.item)},null,8,["item","label","props"])):g("",!0):M((o(),d("a",r({key:0,href:e.item.url,class:n.cx("itemLink"),target:e.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[e.templates.itemicon?(o(),m(le(e.templates.itemicon),{key:0,item:e.item,class:j(n.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(o(),d("span",r({key:1,class:[n.cx("itemIcon"),e.item.icon]},i.getPTOptions("itemIcon")),null,16)):g("",!0),h("span",r({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),x(i.label()),17)],16,st)),[[f]])],16)],16,ot)):g("",!0)}ve.render=at;function ue(n){return dt(n)||ct(n)||rt(n)||lt()}function lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(n,t){if(n){if(typeof n=="string")return J(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?J(n,t):void 0}}function ct(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function dt(n){if(Array.isArray(n))return J(n)}function J(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,s=Array(t);e<t;e++)s[e]=n[e];return s}var ye={name:"Menu",extends:it,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||re()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||re(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&R.clear(this.container),this.container=null},methods:{itemClick:function(t){var e=t.item;this.disabled(e)||(e.command&&e.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(E(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)E(this.target),this.hide(),t.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var e=ce(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=e&&ce(e,'a[data-pc-section="itemlink"]');this.popup&&E(this.target),s?s.click():e&&e.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var e=B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=ue(e).findIndex(function(l){return l.id===t});return s>-1?s+1:0},findPrevOptionIndex:function(t){var e=B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=ue(e).findIndex(function(l){return l.id===t});return s>-1?s-1:0},changeFocusedOptionIndex:function(t){var e=B(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=t>=e.length?e.length-1:t<0?0:t;s>-1&&(this.focusedOptionIndex=e[s].getAttribute("id"))},toggle:function(t){this.overlayVisible?this.hide():this.show(t)},show:function(t){this.overlayVisible=!0,this.target=t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){Ve(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&R.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&E(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&R.clear(t)},alignOverlay:function(){ze(this.container,this.target);var t=U(this.target);t>U(this.container)&&(this.container.style.minWidth=U(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(e){var s=t.container&&!t.container.contains(e.target),l=!(t.target&&(t.target===e.target||t.target.contains(e.target)));t.overlayVisible&&s&&l?t.hide():!t.popup&&s&&l&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Ae(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Ee()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){Be.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:ve,Portal:Fe}},ut=["id"],pt=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],ht=["id"];function gt(n,t,e,s,l,i){var f=H("PVMenuitem"),b=H("Portal");return o(),m(b,{appendTo:n.appendTo,disabled:!n.popup},{default:O(function(){return[L(Ke,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:O(function(){return[!n.popup||l.overlayVisible?(o(),d("div",r({key:0,ref:i.containerRef,id:l.id,class:n.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(o(),d("div",r({key:0,class:n.cx("start")},n.ptm("start")),[K(n.$slots,"start")],16)):g("",!0),h("ul",r({ref:i.listRef,id:l.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(o(!0),d(C,null,de(n.model,function(a,v){return o(),d(C,{key:i.label(a)+v.toString()},[a.items&&i.visible(a)&&!a.separator?(o(),d(C,{key:0},[a.items?(o(),d("li",r({key:0,id:l.id+"_"+v,class:[n.cx("submenuLabel"),a.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[K(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:a},function(){return[De(x(i.label(a)),1)]})],16,ht)):g("",!0),(o(!0),d(C,null,de(a.items,function(y,k){return o(),d(C,{key:y.label+v+"_"+k},[i.visible(y)&&!y.separator?(o(),m(f,{key:0,id:l.id+"_"+v+"_"+k,item:y,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(y)&&y.separator?(o(),d("li",r({key:"separator"+v+k,class:[n.cx("separator"),a.class],style:y.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):g("",!0)],64)}),128))],64)):i.visible(a)&&a.separator?(o(),d("li",r({key:"separator"+v.toString(),class:[n.cx("separator"),a.class],style:a.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(o(),m(f,{key:i.label(a)+v.toString(),id:l.id+"_"+v,item:a,index:v,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,pt),n.$slots.end?(o(),d("div",r({key:1,class:n.cx("end")},n.ptm("end")),[K(n.$slots,"end")],16)):g("",!0)],16,ut)):g("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ye.render=gt;var mt=function(t){var e=t.dt;return`
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
`)},ft={root:{position:"relative"}},bt={root:function(t){var e=t.instance,s=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":s.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},vt=pe.extend({name:"toggleswitch",theme:mt,classes:bt,inlineStyles:ft}),yt={name:"BaseToggleSwitch",extends:Je,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:vt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},we={name:"ToggleSwitch",extends:yt,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e,s;this.$emit("blur",t),(e=(s=this.formField).onBlur)===null||e===void 0||e.call(s,t)}},computed:{checked:function(){return this.d_value===this.trueValue}}},wt=["data-p-checked","data-p-disabled"],kt=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function It(n,t,e,s,l,i){return o(),d("div",r({class:n.cx("root"),style:n.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled}),[h("input",r({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":i.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,kt),h("div",r({class:n.cx("slider")},i.getPTOptions("slider")),[h("div",r({class:n.cx("handle")},i.getPTOptions("handle")),[K(n.$slots,"handle",{checked:i.checked})],16)],16)],16,wt)}we.render=It;const Lt={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},Ot={class:"inline-flex flex-col items-start"},Ct={class:"font-bold"},xt={class:"text-sm"},St={key:0,class:"flex flex-col gap-1 px-2"},_t=["href","onClick"],Tt={class:"ml-2"},Mt=["href","target"],Pt={class:"ml-2"},Vt={class:"flex justify-between items-center mb-8"},zt={class:"flex justify-end gap-2"},jt=me({__name:"UserMenu",setup(n){const t=fe(),{user:e}=N(t),s=Re(),l=be(),{t:i}=Ue(),f=F(),{width:b}=Ge(),a=Z(()=>b.value<640),v=Z(()=>{const w=[{label:i("header.menu.settings"),icon:"pi pi-cog",route:"/settings/edit-profile"},{label:i("logOut"),icon:"pi pi-sign-out",command:async()=>{await l.replace({name:"login"}),await Qe.logout(),t.logout()}}],u=[{label:i("projects"),icon:"pi pi-stop",route:"/projects"},{label:i("modules"),icon:"pi pi-circle",route:"/modules"}];return a.value?[...u,...w]:w}),y=w=>{f.value.toggle(w)};async function k(w){const{data:u}=await W.changeView(w);t.setToken(u),t.setUser(u),window.location.reload()}const P=F(""),S=F(!1),V=F(!1);async function ke(){if(P.value.length!=0){V.value=!0;try{await W.joinClass(P.value),s.add({severity:"success",summary:"Joined to class!",life:2e3}),S.value=!1,window.location.reload()}catch(w){console.log(w),s.add({severity:"error",summary:"Join class failed!",detail:w,life:2e3})}finally{V.value=!1}}}const Y=Xe(),{fetchProfile:q}=Y,{verified:G,profile:Ie,loading:Le}=N(Y),Q=()=>{Le.value||q()};return je(()=>{q(),window.addEventListener("focus",Q)}),He(()=>{window.removeEventListener("focus",Q)}),(w,u)=>{const I=Ne,Oe=qe,Ce=Ze,xe=H("router-link"),Se=ye,_e=Ye,Te=We,D=ge;return o(),d(C,null,[c(G)?(o(),m(I,{key:1,type:"button",icon:"pi pi-ellipsis-v",onClick:y,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})):(o(),m(Oe,{key:0,value:"1",severity:"danger",size:"small"},{default:O(()=>[L(I,{type:"button",icon:"pi pi-ellipsis-v",onClick:y,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})]),_:1})),L(Se,{ref_key:"menu",ref:f,id:"overlay_menu",model:v.value,popup:!0},{start:O(()=>{var p,_,z,A,X,$,ee,te,ne,ie,oe,se;return[M((o(),d("button",Lt,[h("span",Ot,[h("span",Ct,x((p=c(e))==null?void 0:p.email),1),h("span",xt,x((_=c(e))==null?void 0:_.user_type),1)])])),[[D]]),["school_manager","super_admin"].includes(((z=c(e))==null?void 0:z.origin_user_type)??"student")?g("",!0):(o(),d("div",St,[((A=c(e))==null?void 0:A.user_type)!="teacher"&&((X=c(e))==null?void 0:X.origin_user_type)!="student"?(o(),m(I,{key:0,label:"Teacher mode",class:"w-full",size:"small",onClick:u[0]||(u[0]=T=>k("teacher"))})):g("",!0),(($=c(e))==null?void 0:$.user_type)!="student"?(o(),m(I,{key:1,label:"Student mode",class:"w-full",size:"small",onClick:u[1]||(u[1]=T=>k("student")),severity:"info"})):g("",!0),!["student","teacher"].includes(((ee=c(e))==null?void 0:ee.origin_user_type)??"student")&&((te=c(e))==null?void 0:te.user_type)!=((ne=c(e))==null?void 0:ne.origin_user_type)?(o(),m(I,{key:2,label:`${(ie=c(e))==null?void 0:ie.origin_user_type.replace(/_/g," ").replace(/^./,T=>T.toUpperCase())} mode`,class:"w-full",size:"small",onClick:u[2]||(u[2]=T=>{var ae;return k(((ae=c(e))==null?void 0:ae.origin_user_type)??"student")}),severity:"help"},null,8,["label"])):g("",!0),((oe=c(e))==null?void 0:oe.origin_user_type)=="student"&&((se=c(Ie))==null?void 0:se.class_name)==null?(o(),m(I,{key:3,label:c(i)("pages.settings.joinClass"),icon:"pi pi-user-plus",size:"small",variant:"outlined",onClick:u[3]||(u[3]=T=>S.value=!0)},null,8,["label"])):g("",!0)]))]}),item:O(({item:p,props:_})=>[p.route?(o(),m(xe,{key:0,to:p.route},{default:O(({href:z,navigate:A})=>[M((o(),d("a",r({href:z},_.action,{onClick:A}),[h("span",{class:j(p.icon)},null,2),h("span",Tt,x(p.label),1),!c(G)&&p.route.includes("settings")?(o(),m(Ce,{key:0,value:"1",severity:"danger",size:"small"})):g("",!0)],16,_t)),[[D]])]),_:2},1032,["to"])):M((o(),d("a",r({key:1,href:p.url,target:p.target},_.action),[h("span",{class:j(p.icon)},null,2),h("span",Pt,x(p.label),1)],16,Mt)),[[D]])]),_:1},8,["model"]),L(Te,{visible:S.value,"onUpdate:visible":u[6]||(u[6]=p=>S.value=p),modal:"",header:c(i)("pages.settings.joinClassByCode"),closable:!1},{default:O(()=>[h("div",Vt,[L(_e,{type:"text",modelValue:P.value,"onUpdate:modelValue":u[4]||(u[4]=p=>P.value=p),placeholder:c(i)("pages.settings.enterCode")},null,8,["modelValue","placeholder"])]),h("div",zt,[L(I,{type:"button",label:c(i)("pages.settings.cancel"),severity:"secondary",onClick:u[5]||(u[5]=p=>S.value=!1)},null,8,["label"]),L(I,{type:"button",label:c(i)("pages.settings.join"),onClick:ke,loading:V.value,disabled:V.value},null,8,["label","loading","disabled"])])]),_:1},8,["visible","header"])],64)}}}),Ht=me({__name:"StudentViewToggle",props:{path:{}},setup(n){const t=n,e=be(),s=fe(),{user:l}=N(s),i=Z({get:()=>{var f;return((f=l.value)==null?void 0:f.user_type)==="student"},set:async f=>{var a;const{data:b}=await W.changeView(f?"student":((a=l.value)==null?void 0:a.origin_user_type)??"student");s.setToken(b),s.setUser(b),t.path?e.push({path:t.path}):window.location.reload()}});return(f,b)=>{var y;const a=we,v=$e;return["editor","contributor"].includes(((y=c(l))==null?void 0:y.origin_user_type)??"")?M((o(),m(a,{key:0,modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=k=>i.value=k)},null,8,["modelValue"])),[[v,"Student view"]]):g("",!0)}}});export{Ht as _,jt as a,ye as b,we as s};
