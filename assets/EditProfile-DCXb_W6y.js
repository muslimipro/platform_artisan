import{s as ce}from"./index-MqisFpEi.js";import{a as pe,c as de,s as fe}from"./index-DLIVeltf.js";import{s as oe,a as ie}from"./index-CEpHkoeb.js";import{s as ae,a as he}from"./index-n8pVcVr8.js";import{s as me}from"./index-B3a-TUPC.js";import{s as ge}from"./index-Cm2jLQMu.js";import{B as le,W as j,U as Q,Z as H,az as $,au as A,O as ve,aI as ye,y as be,z as Oe,A as we,C as Ie,D as Se,E as ke,aq as Ce,aG as X,a5 as xe,G as Le,aK as Me,an as Ke,H as P,ao as Ve,o as c,c as h,f as E,as as T,aS as De,h as V,x as u,F as G,i as Y,I,b as s,w as d,e as m,J as re,t as k,T as Ae,aA as Te,g as F,ap as ze,ae as Ee,d as se,aB as _,r as M,j as z,a as Fe,ah as Be,aU as $e}from"./index-CYUYDN2E.js";import{s as Pe}from"./index-DaIw1UoS.js";import{S as Re}from"./index-B7NvzflU.js";import{a as je}from"./index-BKnpv2yJ.js";import{s as Ge}from"./index-uFyGkY1H.js";import{_ as Ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-B-OoBJQY.js";import"./index-B99X7DoE.js";import"./index-BanUC7cS.js";import"./index-CVg5t83u.js";var He=function(e){var n=e.dt;return`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: `.concat(n("autocomplete.padding.x"),`;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(`).concat(n("autocomplete.dropdown.width")," + ").concat(n("autocomplete.padding.x"),`);
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `).concat(n("autocomplete.dropdown.width"),`;
    border-start-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    border-end-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    background: `).concat(n("autocomplete.dropdown.background"),`;
    border: 1px solid `).concat(n("autocomplete.dropdown.border.color"),`;
    border-inline-start: 0 none;
    color: `).concat(n("autocomplete.dropdown.color"),`;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: `).concat(n("autocomplete.dropdown.hover.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.hover.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.hover.color"),`;
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: `).concat(n("autocomplete.dropdown.active.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.active.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.active.color"),`;
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: `).concat(n("autocomplete.dropdown.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.dropdown.focus.ring.width")," ").concat(n("autocomplete.dropdown.focus.ring.style")," ").concat(n("autocomplete.dropdown.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.dropdown.focus.ring.offset"),`;
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("autocomplete.overlay.background"),`;
    color: `).concat(n("autocomplete.overlay.color"),`;
    border: 1px solid `).concat(n("autocomplete.overlay.border.color"),`;
    border-radius: `).concat(n("autocomplete.overlay.border.radius"),`;
    box-shadow: `).concat(n("autocomplete.overlay.shadow"),`;
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("autocomplete.list.gap"),`;
    padding: `).concat(n("autocomplete.list.padding"),`;
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("autocomplete.option.padding"),`;
    border: 0 none;
    color: `).concat(n("autocomplete.option.color"),`;
    background: transparent;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),`;
    border-radius: `).concat(n("autocomplete.option.border.radius"),`;
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("autocomplete.option.focus.background"),`;
    color: `).concat(n("autocomplete.option.focus.color"),`;
}

.p-autocomplete-option-selected {
    background: `).concat(n("autocomplete.option.selected.background"),`;
    color: `).concat(n("autocomplete.option.selected.color"),`;
}

.p-autocomplete-option-selected.p-focus {
    background: `).concat(n("autocomplete.option.selected.focus.background"),`;
    color: `).concat(n("autocomplete.option.selected.focus.color"),`;
}

.p-autocomplete-option-group {
    margin: 0;
    padding: `).concat(n("autocomplete.option.group.padding"),`;
    color: `).concat(n("autocomplete.option.group.color"),`;
    background: `).concat(n("autocomplete.option.group.background"),`;
    font-weight: `).concat(n("autocomplete.option.group.font.weight"),`;
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(`).concat(n("autocomplete.padding.y")," / 2) ").concat(n("autocomplete.padding.x"),`;
    gap: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    color: `).concat(n("autocomplete.color"),`;
    background: `).concat(n("autocomplete.background"),`;
    border: 1px solid `).concat(n("autocomplete.border.color"),`;
    border-radius: `).concat(n("autocomplete.border.radius"),`;
    width: 100%;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("autocomplete.shadow"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.hover.border.color"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.focus.border.color"),`;
    box-shadow: `).concat(n("autocomplete.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.focus.ring.width")," ").concat(n("autocomplete.focus.ring.style")," ").concat(n("autocomplete.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.focus.ring.offset"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.invalid.border.color"),`;
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.background"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.hover.background"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: `).concat(n("autocomplete.filled.focus.background"),`;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: `).concat(n("autocomplete.disabled.background"),`;
    color: `).concat(n("autocomplete.disabled.color"),`;
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    border-radius: `).concat(n("autocomplete.chip.border.radius"),`;
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-inline-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: `).concat(n("autocomplete.chip.focus.background"),`;
    color: `).concat(n("autocomplete.chip.focus.color"),`;
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.placeholder.color"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.invalid.placeholder.color"),`;
}

.p-autocomplete-empty-message {
    padding: `).concat(n("autocomplete.empty.message.padding"),`;
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.sm.width"),`;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.sm.font.size"),`;
    width: `).concat(n("form.field.sm.font.size"),`;
    height: `).concat(n("form.field.sm.font.size"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.lg.width"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.lg.font.size"),`;
    width: `).concat(n("form.field.lg.font.size"),`;
    height: `).concat(n("form.field.lg.font.size"),`;
}
`)},Ne={root:{position:"relative"}},qe={root:function(e){var n=e.instance,i=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":i.disabled,"p-invalid":n.$invalid,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled||j(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.$fluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){e.props;var n=e.instance;return["p-autocomplete-input-multiple",{"p-variant-filled":n.$variant==="filled"}]},chipItem:function(e){var n=e.instance,i=e.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===i}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var n=e.instance,i=e.option,a=e.i,o=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(i),"p-focus":n.focusedOptionIndex===n.getOptionIndex(a,o),"p-disabled":n.isOptionDisabled(i)}]},emptyMessage:"p-autocomplete-empty-message"},We=le.extend({name:"autocomplete",theme:He,classes:qe,inlineStyles:Ne}),Je={name:"BaseAutoComplete",extends:he,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:We,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function ee(t){return Ye(t)||Xe(t)||Qe(t)||Ze()}function Ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(t,e){if(t){if(typeof t=="string")return q(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(t,e):void 0}}function Xe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ye(t){if(Array.isArray(t))return q(t)}function q(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var W={name:"AutoComplete",extends:Je,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{"$attrs.id":function(e){this.id=e||Q()},suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.id=this.id||Q(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(H.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?$(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?$(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,i,a){return this.ptm(a,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?$(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return $(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return $(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(i){return n.isOptionGroup(i)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&A(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var n=this,i=function(){n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,e&&A(n.multiple?n.$refs.focusInput:n.$refs.focusInput.$el)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var n,i;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e),(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var i=e.target.value;this.multiple||this.updateModel(e,i),i.length===0?(this.hide(),this.$emit("clear")):i.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,i,"input")},this.delay)):this.hide()}},onChange:function(e){var n=this;if(this.forceSelection){var i=!1;if(this.visibleOptions&&!this.multiple){var a=this.multiple?this.$refs.focusInput.value:this.$refs.focusInput.$el.value,o=this.visibleOptions.find(function(b){return n.isOptionMatched(b,a||"")});o!==void 0&&(i=!0,!this.isSelected(o)&&this.onOptionSelect(e,o))}i||(this.multiple?this.$refs.focusInput.value="":this.$refs.focusInput.$el.value="",this.$emit("clear"),!this.multiple&&this.updateModel(e,null))}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&A(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var i=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;A(i),n=i.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(ee(this.d_value||[]),[a]))):this.updateModel(e,a),this.$emit("item-select",{originalEvent:e,value:n}),this.$emit("option-select",{originalEvent:e,value:n}),i&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOverlayClick:function(e){ve.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(ye(n.value)&&this.$filled?(A(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,i=n.value.length;n.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,i=n.value.length;n.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(this.updateModel(e,[].concat(ee(this.d_value||[]),[e.target.value])),this.$refs.focusInput.value=""),e.preventDefault()},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onBackspaceKey:function(e){if(this.multiple){if(j(this.d_value)&&!this.$refs.focusInput.value){var n=this.d_value[this.d_value.length-1],i=this.d_value.slice(0,-1);this.writeValue(i,e),this.$emit("item-unselect",{originalEvent:e,value:n}),this.$emit("option-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,A(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){H.set("overlay",e,this.$primevue.config.zIndex.overlay),be(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){H.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?Oe(this.overlay,e):(this.overlay.style.minWidth=we(e)+"px",Ie(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Se(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ke()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,n){var i;return this.isValidOption(e)&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return j(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return Ce(e,n,this.equalityKey)},isSelected:function(e){var n=this,i=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(a){return n.isEquals(a,i)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return X(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(a){return n.isValidOption(a)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var n=this,i=e>0?X(this.visibleOptions.slice(0,e),function(a){return n.isValidOption(a)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,i){n!=null&&(i==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var i=this,a=this.d_value[n],o=this.d_value.filter(function(b,S){return S!==n}).map(function(b){return i.getOptionValue(b)});this.updateModel(e,o),this.$emit("item-unselect",{originalEvent:e,value:a}),this.$emit("option-unselect",{originalEvent:e,value:a}),this.dirty=!0,A(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,a=xe(e.list,'li[id="'.concat(i,'"]'));a?a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(i,a,o){i.push({optionGroup:a,group:!0,index:o});var b=n.getOptionGroupChildren(a);return b&&b.forEach(function(S){return i.push(S)}),i},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(N(this.d_value)==="object"){var e=this.getOptionLabel(this.d_value);return e??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return j(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.id+"_panel"}},components:{InputText:ae,VirtualScroller:pe,Portal:Le,ChevronDownIcon:de,SpinnerIcon:Me,Chip:Ge},directives:{ripple:Ke}};function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function te(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function ne(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?te(Object(n),!0).forEach(function(i){_e(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function _e(t,e,n){return(e=et(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function et(t){var e=tt(t,"string");return R(e)=="symbol"?e:e+""}function tt(t,e){if(R(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(R(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var nt=["aria-activedescendant"],ot=["id","aria-label","aria-setsize","aria-posinset"],it=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],at=["disabled","aria-expanded","aria-controls"],lt=["id"],rt=["id","aria-label"],st=["id"],ut=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focus","data-p-disabled"];function ct(t,e,n,i,a,o){var b=P("InputText"),S=P("Chip"),w=P("SpinnerIcon"),g=P("VirtualScroller"),L=P("Portal"),C=Ve("ripple");return c(),h("div",u({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return o.onContainerClick&&o.onContainerClick.apply(o,arguments)})},t.ptmi("root")),[t.multiple?V("",!0):(c(),E(b,{key:0,ref:"focusInput",id:t.inputId,type:"text",name:t.$formName,class:T([t.cx("pcInputText"),t.inputClass]),style:De(t.inputStyle),value:o.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:t.$fluid,disabled:t.disabled,size:t.size,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":o.panelId,"aria-activedescendant":a.focused?o.focusedOptionId:void 0,onFocus:o.onFocus,onBlur:o.onBlur,onKeydown:o.onKeyDown,onInput:o.onInput,onChange:o.onChange,unstyled:t.unstyled,pt:t.ptm("pcInputText")},null,8,["id","name","class","style","value","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","pt"])),t.multiple?(c(),h("ul",u({key:1,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":a.focused?o.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return o.onMultipleContainerFocus&&o.onMultipleContainerFocus.apply(o,arguments)}),onBlur:e[6]||(e[6]=function(){return o.onMultipleContainerBlur&&o.onMultipleContainerBlur.apply(o,arguments)}),onKeydown:e[7]||(e[7]=function(){return o.onMultipleContainerKeyDown&&o.onMultipleContainerKeyDown.apply(o,arguments)})},t.ptm("inputMultiple")),[(c(!0),h(G,null,Y(t.d_value,function(r,l){return c(),h("li",u({key:"".concat(l,"_").concat(o.getOptionLabel(r)),id:a.id+"_multiple_option_"+l,class:t.cx("chipItem",{i:l}),role:"option","aria-label":o.getOptionLabel(r),"aria-selected":!0,"aria-setsize":t.d_value.length,"aria-posinset":l+1,ref_for:!0},t.ptm("chipItem")),[I(t.$slots,"chip",u({class:t.cx("pcChip"),value:r,index:l,removeCallback:function(p){return o.removeOption(p,l)},ref_for:!0},t.ptm("pcChip")),function(){return[s(S,{class:T(t.cx("pcChip")),label:o.getOptionLabel(r),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(p){return o.removeOption(p,l)},pt:t.ptm("pcChip")},{removeicon:d(function(){return[I(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:T(t.cx("chipIcon")),index:l,removeCallback:function(p){return o.removeOption(p,l)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,ot)}),128)),m("li",u({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[m("input",u({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":a.id+"_list","aria-activedescendant":a.focused?o.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),onInput:e[3]||(e[3]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onChange:e[4]||(e[4]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},t.ptm("input")),null,16,it)],16)],16,nt)):V("",!0),a.searching||t.loading?I(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:2,class:T(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(c(),h("i",u({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true"},t.ptm("loader")),null,16)):(c(),E(w,u({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true"},t.ptm("loader")),null,16,["class"]))]}):V("",!0),I(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(l){return o.onDropdownClick(l)}},function(){return[t.dropdown?(c(),h("button",u({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":a.overlayVisible,"aria-controls":o.panelId,onClick:e[8]||(e[8]=function(){return o.onDropdownClick&&o.onDropdownClick.apply(o,arguments)})},t.ptm("dropdown")),[I(t.$slots,"dropdownicon",{class:T(t.dropdownIcon)},function(){return[(c(),E(re(t.dropdownIcon?"span":"ChevronDownIcon"),u({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,at)):V("",!0)]}),m("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),k(o.searchResultMessageText),17),s(L,{appendTo:t.appendTo},{default:d(function(){return[s(Ae,u({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:d(function(){return[a.overlayVisible?(c(),h("div",u({key:0,ref:o.overlayRef,id:o.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:ne(ne({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[10]||(e[10]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},t.ptm("overlay")),[I(t.$slots,"header",{value:t.d_value,suggestions:o.visibleOptions}),m("div",u({class:t.cx("listContainer"),style:{"max-height":o.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[s(g,u({ref:o.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:o.visibleOptions,tabindex:-1,disabled:o.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),Te({content:d(function(r){var l=r.styleClass,x=r.contentRef,p=r.items,v=r.getItemOptions,D=r.contentStyle,K=r.itemSize;return[m("ul",u({ref:function(y){return o.listRef(y,x)},id:a.id+"_list",class:[t.cx("list"),l],style:D,role:"listbox","aria-label":o.listAriaLabel},t.ptm("list")),[(c(!0),h(G,null,Y(p,function(f,y){return c(),h(G,{key:o.getOptionRenderKey(f,o.getOptionIndex(y,v))},[o.isOptionGroup(f)?(c(),h("li",u({key:0,id:a.id+"_"+o.getOptionIndex(y,v),style:{height:K?K+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[I(t.$slots,"optiongroup",{option:f.optionGroup,index:o.getOptionIndex(y,v)},function(){return[F(k(o.getOptionGroupLabel(f.optionGroup)),1)]})],16,st)):ze((c(),h("li",u({key:1,id:a.id+"_"+o.getOptionIndex(y,v),style:{height:K?K+"px":void 0},class:t.cx("option",{option:f,i:y,getItemOptions:v}),role:"option","aria-label":o.getOptionLabel(f),"aria-selected":o.isSelected(f),"aria-disabled":o.isOptionDisabled(f),"aria-setsize":o.ariaSetSize,"aria-posinset":o.getAriaPosInset(o.getOptionIndex(y,v)),onClick:function(B){return o.onOptionSelect(B,f)},onMousemove:function(B){return o.onOptionMouseMove(B,o.getOptionIndex(y,v))},"data-p-selected":o.isSelected(f),"data-p-focus":a.focusedOptionIndex===o.getOptionIndex(y,v),"data-p-disabled":o.isOptionDisabled(f),ref_for:!0},o.getPTOptions(f,v,y,"option")),[I(t.$slots,"option",{option:f,index:o.getOptionIndex(y,v)},function(){return[F(k(o.getOptionLabel(f)),1)]})],16,ut)),[[C]])],64)}),128)),t.showEmptyMessage&&(!p||p&&p.length===0)?(c(),h("li",u({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[I(t.$slots,"empty",{},function(){return[F(k(o.searchResultMessageText),1)]})],16)):V("",!0)],16,rt)]}),_:2},[t.$slots.loader?{name:"loader",fn:d(function(r){var l=r.options;return[I(t.$slots,"loader",{options:l})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),I(t.$slots,"footer",{value:t.d_value,suggestions:o.visibleOptions}),m("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),k(o.selectedMessageText),17)],16,lt)):V("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}W.render=ct;var pt=function(e){var n=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    color: `).concat(n("avatar.color"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.icon.size"),`;
    width: `).concat(n("avatar.icon.size"),`;
    height: `).concat(n("avatar.icon.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.icon.size"),`;
    width: `).concat(n("avatar.lg.icon.size"),`;
    height: `).concat(n("avatar.lg.icon.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.icon.size"),`;
    width: `).concat(n("avatar.xl.icon.size"),`;
    height: `).concat(n("avatar.xl.icon.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: `).concat(n("avatar.lg.group.offset"),`;
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: `).concat(n("avatar.xl.group.offset"),`;
}
`)},dt={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},ft=le.extend({name:"avatar",theme:pt,classes:dt}),ht={name:"BaseAvatar",extends:Ee,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ft,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},ue={name:"Avatar",extends:ht,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},mt=["aria-labelledby","aria-label"],gt=["src","alt"];function vt(t,e,n,i,a,o){return c(),h("div",u({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[I(t.$slots,"default",{},function(){return[t.label?(c(),h("span",u({key:0,class:t.cx("label")},t.ptm("label")),k(t.label),17)):t.$slots.icon?(c(),E(re(t.$slots.icon),{key:1,class:T(t.cx("icon"))},null,8,["class"])):t.icon?(c(),h("span",u({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(c(),h("img",u({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image")),null,16,gt)):V("",!0)]})],16,mt)}ue.render=vt;const yt=se({__name:"LocationInput",props:{country:{},countryModifiers:{},city:{},cityModifiers:{}},emits:["update:country","update:city"],setup(t){const e="artisan_education",n=_(t,"country"),i=_(t,"city"),a=M([]),o=M([]);async function b(w){const g=w.query.toLowerCase();if(g.length<2){a.value=[];return}const C=await(await fetch("https://restcountries.com/v3.1/all")).json();a.value=C.map(r=>{const l=r.translations||{},p=[{lang:"eng",name:r.name.common},...Object.entries(l).map(([v,D])=>({lang:v,name:D.common}))].find(v=>v.name.toLowerCase().includes(g));return p?{name:p.name,code:r.cca2}:null}).filter(Boolean)}async function S(w){if(!n.value||w.query.length<3){o.value=[];return}const L=await(await fetch(`https://secure.geonames.org/searchJSON?name_startsWith=${w.query}&maxRows=10&country=${n.value.code}&username=${e}`)).json(),C=new Map(L.geonames.map(r=>[r.name.toLowerCase(),r]));o.value=Array.from(C.values()).map(r=>({name:r.name}))}return(w,g)=>{const L=oe,C=ie;return c(),h(G,null,[s(C,null,{default:d(()=>[s(L,null,{default:d(()=>g[2]||(g[2]=[m("i",{class:"pi pi-flag"},null,-1)])),_:1}),s(z(W),{modelValue:n.value,"onUpdate:modelValue":g[0]||(g[0]=r=>n.value=r),suggestions:a.value,optionLabel:"name",onComplete:b,placeholder:w.$t("pages.settings.country")},null,8,["modelValue","suggestions","placeholder"])]),_:1}),s(C,null,{default:d(()=>[s(L,null,{default:d(()=>g[3]||(g[3]=[m("i",{class:"pi pi-building"},null,-1)])),_:1}),s(z(W),{modelValue:i.value,"onUpdate:modelValue":g[1]||(g[1]=r=>i.value=r),suggestions:o.value,optionLabel:"name",onComplete:S,placeholder:w.$t("pages.settings.city")},null,8,["modelValue","suggestions","placeholder"])]),_:1})],64)}}}),bt={key:1,class:"flex gap-2 flex-wrap items-center"},Ot={class:"flex-1 flex flex-col gap-4 items-center mb-4"},wt={class:"relative"},It={class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},St={class:"text-3xl"},kt={class:"text-xl font-semibold"},Ct={class:"flex gap-2 justify-end"},xt={class:"flex-1 flex flex-col gap-2 min-w-52"},Lt=se({__name:"EditProfile",setup(t){const e=M(null),n=M(!1),i=Fe(),{user:a}=Be(i),o=M(null),b=M(null),S=M(null),w=M(null),g=M(["5","6","7","8","9","10","11","12"]);async function L(){var r;n.value=!0;try{const{data:l}=await Re.getUserProfile();e.value=l,o.value=((r=e.value)==null?void 0:r.avatar_url)??null,b.value={name:e.value.country,code:""},S.value={name:e.value.city}}catch(l){console.log(l)}finally{n.value=!1}}async function C(r){const l=r.files[0],x=new FormData;x.append("file",l);try{const{data:p}=await je.uploadFile(x);o.value=p.presigned_url}catch(p){console.log(p)}}return $e(L),(r,l)=>{const x=Pe,p=ue,v=ge,D=me,K=oe,f=ae,y=ie,U=fe,B=ce;return c(),E(B,{class:"flex-grow",header:r.$t("pages.settings.editProfile")},{default:d(()=>{var J,Z;return[n.value?(c(),E(x,{key:0})):e.value?(c(),h("div",bt,[m("div",Ot,[m("div",wt,[s(p,{class:"w-40 h-40 border",shape:"circle",image:o.value??void 0},null,8,["image"]),m("div",It,[s(v,{mode:"basic",customUpload:"",auto:"",onSelect:C,"choose-icon":o.value==null?"pi pi-plus":"pi pi-pencil",class:"p-button-link p-button-secondary p-button-rounded w-10 h-10"},null,8,["choose-icon"])])]),m("label",St,k(e.value.xp)+" xp",1),m("label",kt,k((J=z(a))==null?void 0:J.email),1),m("div",Ct,[s(D,{severity:"secondary"},{default:d(()=>{var O;return[F(k((O=z(a))==null?void 0:O.user_type),1)]}),_:1}),s(D,{severity:(Z=z(a))!=null&&Z.access_type?"purple":"success"},{default:d(()=>{var O;return[F(k((O=z(a))==null?void 0:O.access_type),1)]}),_:1},8,["severity"]),s(D,{severity:e.value.verified?"success":"warn"},{default:d(()=>[F(k(e.value.verified?"verified":"not verified"),1)]),_:1},8,["severity"])])]),m("div",xt,[s(y,null,{default:d(()=>[s(K,null,{default:d(()=>l[5]||(l[5]=[m("i",{class:"pi pi-user-edit"},null,-1)])),_:1}),s(f,{id:"name",modelValue:e.value.name,"onUpdate:modelValue":l[0]||(l[0]=O=>e.value.name=O),autocomplete:"off",variant:"filled",class:"w-full",placeholder:r.$t("pages.settings.name")},null,8,["modelValue","placeholder"])]),_:1}),s(yt,{country:b.value,"onUpdate:country":l[1]||(l[1]=O=>b.value=O),city:S.value,"onUpdate:city":l[2]||(l[2]=O=>S.value=O)},null,8,["country","city"]),s(y,null,{default:d(()=>[s(K,null,{default:d(()=>l[6]||(l[6]=[m("i",{class:"pi pi-building-columns"},null,-1)])),_:1}),s(f,{id:"school",modelValue:e.value.school,"onUpdate:modelValue":l[3]||(l[3]=O=>e.value.school=O),autocomplete:"off",variant:"filled",class:"w-full",placeholder:r.$t("pages.settings.school")},null,8,["modelValue","placeholder"])]),_:1}),s(y,null,{default:d(()=>[s(K,null,{default:d(()=>l[7]||(l[7]=[m("i",{class:"pi pi-graduation-cap"},null,-1)])),_:1}),s(U,{modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=O=>w.value=O),options:g.value,class:"w-full",placeholder:r.$t("pages.settings.grade"),showClear:""},null,8,["modelValue","options","placeholder"])]),_:1})])])):V("",!0)]}),_:1},8,["header"])}}}),Ht=Ue(Lt,[["__scopeId","data-v-acbbf91b"]]);export{Ht as default};
