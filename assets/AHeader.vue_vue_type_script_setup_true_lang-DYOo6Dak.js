import{L as _,_ as f,a as g,b as x}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-DUNicSy-.js";import{j as y,a2 as j,k as i,o as k,c as $,b as l,p as t,M as e,u as c,n as m,v as h}from"./index-tu3qNG6j.js";const w={class:"mx-auto flex items-center justify-between p-2 px-6 w-full border-b bg-white"},C={class:"flex flex-1 items-center"},z={class:"flex items-center gap-1"},B={class:"flex flex-1 justify-end items-center gap-2"},M=y({__name:"AHeader",setup(L){const o=j(),r=i(),p=i([{label:"Profile",icon:"pi pi-user"},{label:"Log out",icon:"pi pi-sign-out"}]),u=a=>{r.value.toggle(a)};return(a,s)=>{const d=g,n=h,b=x;return k(),$("div",w,[l("div",C,[t(d,{src:e(_),width:"32"},null,8,["src"]),s[2]||(s[2]=l("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1))]),l("div",z,[t(n,{id:"#projects",label:a.$t("projects"),variant:e(o).name=="projects"?void 0:"text",severity:"secondary",onClick:s[0]||(s[0]=v=>e(c).push({name:"projects"})),size:"small",class:m({"border border-slate-300 bg-slate-50":e(o).name=="projects"})},null,8,["label","variant","class"]),t(n,{id:"#modules",label:a.$t("modules"),variant:e(o).name=="modules"?void 0:"text",severity:"secondary",onClick:s[1]||(s[1]=v=>e(c).push({name:"modules"})),size:"small",class:m({"border border-slate-300 bg-slate-50":e(o).name=="modules"})},null,8,["label","variant","class"])]),l("div",B,[t(f),t(n,{type:"button",icon:"pi pi-ellipsis-v",onClick:u,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),t(b,{ref_key:"menu",ref:r,id:"overlay_menu",model:p.value,popup:!0},null,8,["model"])])])}}});export{M as _};