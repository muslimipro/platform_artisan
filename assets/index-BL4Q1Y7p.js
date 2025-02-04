import{d as B,g as S,ab as _,u as I,ae as R,r as h,o as r,c as i,a as o,b as l,e as s,af as $,w as A,ag as D,t as k,s as L,ah as N,X as V,v as n,U as m,j as b,ak as E}from"./index-DxkNwnS6.js";import{a as H}from"./index-DUHCRcVP.js";import{L as M,s as P}from"./logo-B1m1Cn2A.js";import{_ as T}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-B3ghzxqy.js";const U={class:"mx-auto flex items-center justify-between p-2 px-6 w-full border-b bg-white"},X={class:"flex flex-1 items-center"},q={class:"flex items-center gap-1"},F={class:"flex flex-1 justify-end items-center gap-2"},G={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},J={class:"inline-flex flex-col items-start"},K={class:"font-bold"},O={class:"text-sm"},re=B({__name:"AHeader",setup(e){const d=S(),{user:t}=_(d),c=I(),p=R(),g=h(),w=h([{label:"Log out",icon:"pi pi-sign-out",command:()=>{d.logout(),c.replace({name:"login"})}}]),C=f=>{g.value.toggle(f)};return(f,a)=>{const x=P,v=L,j=H,z=N;return r(),i("div",U,[o("div",X,[l(x,{src:s(M),width:"32"},null,8,["src"]),a[3]||(a[3]=o("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1))]),o("div",q,[l(v,{id:"#projects",label:f.$t("projects"),variant:s(p).name=="projects"?void 0:"text",severity:"secondary",onClick:a[0]||(a[0]=u=>s(c).push({name:"projects"})),size:"small",class:$({"border border-slate-300 bg-slate-50":s(p).name=="projects"})},null,8,["label","variant","class"]),l(v,{id:"#modules",label:f.$t("modules"),variant:s(p).name=="modules"?void 0:"text",severity:"secondary",onClick:a[1]||(a[1]=u=>s(c).push({name:"modules"})),size:"small",class:$({"border border-slate-300 bg-slate-50":s(p).name=="modules"})},null,8,["label","variant","class"])]),o("div",F,[l(v,{id:"#ide",label:"IDE",onClick:a[2]||(a[2]=u=>s(c).push({name:"ide"})),size:"small",class:"bg-indigo-600 border-indigo-600",icon:"pi pi-microchip"}),l(T),l(v,{type:"button",icon:"pi pi-ellipsis-v",onClick:C,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),l(j,{ref_key:"menu",ref:g,id:"overlay_menu",model:w.value,popup:!0},{start:A(()=>{var u,y;return[D((r(),i("button",G,[o("span",J,[o("span",K,k((u=s(t))==null?void 0:u.email),1),o("span",O,k((y=s(t))==null?void 0:y.user_type),1)])])),[[z]])]}),_:1},8,["model"])])])}}});var Q=function(d){var t=d.dt;return`
.p-card {
    background: `.concat(t("card.background"),`;
    color: `).concat(t("card.color"),`;
    box-shadow: `).concat(t("card.shadow"),`;
    border-radius: `).concat(t("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(t("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(t("card.title.font.size"),`;
    font-weight: `).concat(t("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(t("card.subtitle.color"),`;
}
`)},W={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Y=V.extend({name:"card",theme:Q,classes:W}),Z={name:"BaseCard",extends:E,style:Y,provide:function(){return{$pcCard:this,$parentInstance:this}}},ee={name:"Card",extends:Z,inheritAttrs:!1};function te(e,d,t,c,p,g){return r(),i("div",n({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(r(),i("div",n({key:0,class:e.cx("header")},e.ptm("header")),[m(e.$slots,"header")],16)):b("",!0),o("div",n({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(r(),i("div",n({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(r(),i("div",n({key:0,class:e.cx("title")},e.ptm("title")),[m(e.$slots,"title")],16)):b("",!0),e.$slots.subtitle?(r(),i("div",n({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[m(e.$slots,"subtitle")],16)):b("",!0)],16)):b("",!0),o("div",n({class:e.cx("content")},e.ptm("content")),[m(e.$slots,"content")],16),e.$slots.footer?(r(),i("div",n({key:1,class:e.cx("footer")},e.ptm("footer")),[m(e.$slots,"footer")],16)):b("",!0)],16)],16)}ee.render=te;export{re as _,ee as s};
