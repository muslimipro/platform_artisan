import{B as Z,ae as W,P as ae,x as r,ao as q,ap as re,o as s,c,e as p,aq as O,f,aj as z,J as R,h as b,t as k,U as H,Z as P,au as x,bg as S,a5 as N,y as le,C as ce,A,D as de,E as ue,O as he,G as pe,H as E,w as I,b as _,T as ge,I as T,F as w,i as U,g as me,d as G,a as J,ah as Q,p as be,r as fe,L as V,j as v,k as X,s as ve,ba as ye}from"./index-Bsd047Aq.js";import{s as we}from"./index-CUKdH7Pw.js";import{f as ke,T as Ie}from"./index-Cn_YktQ8.js";import{b as Le}from"./index-CuqUGYXy.js";var Oe=function(t){var e=t.dt;return`
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
`)},Ce={root:function(t){var e=t.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var e=t.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},xe=Z.extend({name:"menu",theme:Oe,classes:Ce}),Se={name:"BaseMenu",extends:W,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:xe,provide:function(){return{$pcMenu:this,$parentInstance:this}}},Y={name:"Menuitem",hostName:"Menu",extends:W,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,e){return t&&t.item?ae(t.item[e]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:q}},Te=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Me=["href","target"];function Pe(n,t,e,o,a,i){var g=re("ripple");return i.visible()?(s(),c("li",r({key:0,id:e.id,class:[n.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[p("div",r({class:n.cx("itemContent"),onClick:t[0]||(t[0]=function(h){return i.onItemClick(h)}),onMousemove:t[1]||(t[1]=function(h){return i.onItemMouseMove(h)})},i.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(s(),f(R(e.templates.item),{key:1,item:e.item,label:i.label(),props:i.getMenuItemProps(e.item)},null,8,["item","label","props"])):b("",!0):O((s(),c("a",r({key:0,href:e.item.url,class:n.cx("itemLink"),target:e.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[e.templates.itemicon?(s(),f(R(e.templates.itemicon),{key:0,item:e.item,class:z(n.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(s(),c("span",r({key:1,class:[n.cx("itemIcon"),e.item.icon]},i.getPTOptions("itemIcon")),null,16)):b("",!0),p("span",r({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),k(i.label()),17)],16,Me)),[[g]])],16)],16,Te)):b("",!0)}Y.render=Pe;function j(n){return _e(n)||Ee(n)||ze(n)||Ae()}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(n,t){if(n){if(typeof n=="string")return B(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?B(n,t):void 0}}function Ee(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function _e(n){if(Array.isArray(n))return B(n)}function B(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}var $={name:"Menu",extends:Se,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||H()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||H(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&P.clear(this.container),this.container=null},methods:{itemClick:function(t){var e=t.item;this.disabled(e)||(e.command&&e.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(x(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)x(this.target),this.hide(),t.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(S(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var e=N(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=e&&N(e,'a[data-pc-section="itemlink"]');this.popup&&x(this.target),o?o.click():e&&e.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var e=S(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=j(e).findIndex(function(a){return a.id===t});return o>-1?o+1:0},findPrevOptionIndex:function(t){var e=S(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=j(e).findIndex(function(a){return a.id===t});return o>-1?o-1:0},changeFocusedOptionIndex:function(t){var e=S(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=t>=e.length?e.length-1:t<0?0:t;o>-1&&(this.focusedOptionIndex=e[o].getAttribute("id"))},toggle:function(t){this.overlayVisible?this.hide():this.show(t)},show:function(t){this.overlayVisible=!0,this.target=t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){le(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&P.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&x(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&P.clear(t)},alignOverlay:function(){ce(this.container,this.target);var t=A(this.target);t>A(this.container)&&(this.container.style.minWidth=A(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(e){var o=t.container&&!t.container.contains(e.target),a=!(t.target&&(t.target===e.target||t.target.contains(e.target)));t.overlayVisible&&o&&a?t.hide():!t.popup&&o&&a&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new de(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!ue()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){he.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:Y,Portal:pe}},Ve=["id"],Be=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Fe=["id"];function Ke(n,t,e,o,a,i){var g=E("PVMenuitem"),h=E("Portal");return s(),f(h,{appendTo:n.appendTo,disabled:!n.popup},{default:I(function(){return[_(ge,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:I(function(){return[!n.popup||a.overlayVisible?(s(),c("div",r({key:0,ref:i.containerRef,id:a.id,class:n.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(s(),c("div",r({key:0,class:n.cx("start")},n.ptm("start")),[T(n.$slots,"start")],16)):b("",!0),p("ul",r({ref:i.listRef,id:a.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(s(!0),c(w,null,U(n.model,function(l,u){return s(),c(w,{key:i.label(l)+u.toString()},[l.items&&i.visible(l)&&!l.separator?(s(),c(w,{key:0},[l.items?(s(),c("li",r({key:0,id:a.id+"_"+u,class:[n.cx("submenuLabel"),l.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[T(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[me(k(i.label(l)),1)]})],16,Fe)):b("",!0),(s(!0),c(w,null,U(l.items,function(d,y){return s(),c(w,{key:d.label+u+"_"+y},[i.visible(d)&&!d.separator?(s(),f(g,{key:0,id:a.id+"_"+u+"_"+y,item:d,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(d)&&d.separator?(s(),c("li",r({key:"separator"+u+y,class:[n.cx("separator"),l.class],style:d.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):b("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(s(),c("li",r({key:"separator"+u.toString(),class:[n.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(s(),f(g,{key:i.label(l)+u.toString(),id:a.id+"_"+u,item:l,index:u,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Be),n.$slots.end?(s(),c("div",r({key:1,class:n.cx("end")},n.ptm("end")),[T(n.$slots,"end")],16)):b("",!0)],16,Ve)):b("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}$.render=Ke;const De={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},Re={class:"inline-flex flex-col items-start"},He={class:"font-bold"},Ne={class:"text-sm"},Ue=["href","onClick"],je={class:"ml-2"},Ze=["href","target"],We={class:"ml-2"},st=G({__name:"UserMenu",setup(n){const t=J(),{user:e}=Q(t),o=X(),{t:a}=be(),i=fe(),{width:g}=ke(),h=V(()=>g.value<640),l=V(()=>{const d=[{label:a("header.menu.settings"),icon:"pi pi-cog",route:"/settings/edit-profile"},{label:a("logOut"),icon:"pi pi-sign-out",command:()=>{t.logout(),o.replace({name:"login"})}}],y=[{label:a("projects"),icon:"pi pi-stop",route:"/projects"},{label:a("modules"),icon:"pi pi-circle",route:"/modules"}];return h.value?[...y,...d]:d}),u=d=>{i.value.toggle(d)};return(d,y)=>{var K;const F=ve,te=we,ne=ye,ie=E("router-link"),oe=$,M=q;return s(),c(w,null,[(K=v(e))!=null&&K.verified?(s(),f(F,{key:1,type:"button",icon:"pi pi-ellipsis-v",onClick:u,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})):(s(),f(te,{key:0,value:"1",severity:"danger",size:"small"},{default:I(()=>[_(F,{type:"button",icon:"pi pi-ellipsis-v",onClick:u,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}})]),_:1})),_(oe,{ref_key:"menu",ref:i,id:"overlay_menu",model:l.value,popup:!0},{start:I(()=>{var m,L,C;return[O((s(),c("button",De,[p("span",Re,[p("span",He,k((m=v(e))==null?void 0:m.email),1),p("span",Ne,k(((L=v(e))==null?void 0:L.user_type)=="student"?d.$t("student"):((C=v(e))==null?void 0:C.user_type)=="teacher"?d.$t("teacher"):d.$t("editor")),1)])])),[[M]])]}),item:I(({item:m,props:L})=>[m.route?(s(),f(ie,{key:0,to:m.route},{default:I(({href:C,navigate:se})=>{var D;return[O((s(),c("a",r({href:C},L.action,{onClick:se}),[p("span",{class:z(m.icon)},null,2),p("span",je,k(m.label),1),!((D=v(e))!=null&&D.verified)&&m.route.includes("settings")?(s(),f(ne,{key:0,value:"1",severity:"danger",size:"small"})):b("",!0)],16,Ue)),[[M]])]}),_:2},1032,["to"])):O((s(),c("a",r({key:1,href:m.url,target:m.target},L.action),[p("span",{class:z(m.icon)},null,2),p("span",We,k(m.label),1)],16,Ze)),[[M]])]),_:1},8,["model"])],64)}}});var qe=function(t){var e=t.dt;return`
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
`)},Ge={root:{position:"relative"}},Je={root:function(t){var e=t.instance,o=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":o.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Qe=Z.extend({name:"toggleswitch",theme:qe,classes:Je,inlineStyles:Ge}),Xe={name:"BaseToggleSwitch",extends:Le,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Qe,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},ee={name:"ToggleSwitch",extends:Xe,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e,o;this.$emit("blur",t),(e=(o=this.formField).onBlur)===null||e===void 0||e.call(o,t)}},computed:{checked:function(){return this.d_value===this.trueValue}}},Ye=["data-p-checked","data-p-disabled"],$e=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function et(n,t,e,o,a,i){return s(),c("div",r({class:n.cx("root"),style:n.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled}),[p("input",r({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":i.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,$e),p("div",r({class:n.cx("slider")},i.getPTOptions("slider")),[p("div",r({class:n.cx("handle")},i.getPTOptions("handle")),[T(n.$slots,"handle",{checked:i.checked})],16)],16)],16,Ye)}ee.render=et;const at=G({__name:"StudentViewToggle",props:{path:{}},setup(n){const t=n,e=X(),o=J(),{tokenUserRole:a}=Q(o),i=V({get:()=>{var g;return((g=o.user)==null?void 0:g.user_type)==="student"},set:g=>{var h;g!==(((h=o.user)==null?void 0:h.user_type)==="student")&&(o.toggleRole(),e.push({path:t.path}))}});return(g,h)=>{const l=ee,u=Ie;return v(a)&&v(a)=="editor"?O((s(),f(l,{key:0,modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=d=>i.value=d)},null,8,["modelValue"])),[[u,"Student view"]]):b("",!0)}}});export{at as _,st as a,$ as b,ee as s};
