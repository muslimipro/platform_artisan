import{B as T,o as t,c as a,v as i,p as $,j as l,e as d,ah as G,d as V,g as z,ai as H,a as N,aj as q,r as k,z as K,h as w,w as x,b as v,f as C,t as O,a2 as I,s as F,ak as Q,D as U,J as W,F as A,k as E}from"./index-CXOwPGdy.js";import{a as R,t as L,s as X}from"./types-BmPXa5Uu.js";import{_ as Y}from"./AHeader.vue_vue_type_script_setup_true_lang-DXJ4mCjY.js";import{s as Z,u as ee}from"./editor-store-C4CFtR2v.js";import{s as te}from"./logo-2b8tI7rb.js";import{P as oe}from"./pibody-B70zHXNr.js";import"./http-OZ8xEx_I.js";import"./index-BGV9MnCK.js";import"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-n4cL8gx1.js";var ae=function(n){var o=n.dt;return`
.p-card {
    background: `.concat(o("card.background"),`;
    color: `).concat(o("card.color"),`;
    box-shadow: `).concat(o("card.shadow"),`;
    border-radius: `).concat(o("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(o("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(o("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(o("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(o("card.title.font.size"),`;
    font-weight: `).concat(o("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(o("card.subtitle.color"),`;
}
`)},se={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},re=T.extend({name:"card",theme:ae,classes:se}),ne={name:"BaseCard",extends:G,style:re,provide:function(){return{$pcCard:this,$parentInstance:this}}},M={name:"Card",extends:ne,inheritAttrs:!1};function ce(e,n,o,j,_,h){return t(),a("div",i({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(t(),a("div",i({key:0,class:e.cx("header")},e.ptm("header")),[$(e.$slots,"header")],16)):l("",!0),d("div",i({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(t(),a("div",i({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(t(),a("div",i({key:0,class:e.cx("title")},e.ptm("title")),[$(e.$slots,"title")],16)):l("",!0),e.$slots.subtitle?(t(),a("div",i({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[$(e.$slots,"subtitle")],16)):l("",!0)],16)):l("",!0),d("div",i({class:e.cx("content")},e.ptm("content")),[$(e.$slots,"content")],16),e.$slots.footer?(t(),a("div",i({key:1,class:e.cx("footer")},e.ptm("footer")),[$(e.$slots,"footer")],16)):l("",!0)],16)],16)}M.render=ce;const ie={class:"h-[174px] overflow-hidden"},le={class:"flex justify-between items-center px-4 py-1"},de={class:"pb-1"},pe={class:"flex"},ue=V({__name:"ProjectCard",props:{project:{}},emits:["after-remove"],setup(e,{emit:n}){const o=z(),j=H(),_=N(),{user:h}=q(_),p=k(!1),s=e,u=n;function f(){j.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{y()}})}async function y(){p.value=!0;try{await R.deleteProjectByID(s.project.id),u("after-remove")}catch(r){alert(r)}finally{p.value=!1}}function P(){o.push(`/project/${s.project.id}/edit`)}return(r,c)=>{const g=te,B=Z,b=F,m=M,J=K("RouterLink");return t(),w(J,{to:p.value?"":`/project/${s.project.id}`},{default:x(()=>[v(m,{style:{width:"300px",height:"234px",overflow:"hidden"},class:"p-0",dt:{body:{padding:"0px",gap:"2px"}}},{header:x(()=>[d("div",ie,[v(g,{alt:"user header",src:s.project.cover_image.length>0?s.project.cover_image:C(oe)},null,8,["src"])])]),subtitle:x(()=>{var S,D;return[d("div",le,[d("div",null,[d("div",de,O(s.project.title),1),v(B,{"model-value":s.project.level,readonly:""},null,8,["model-value"])]),d("div",pe,[((S=C(h))==null?void 0:S.user_type)=="editor"?(t(),w(b,{key:0,icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:I(P,["prevent"])})):l("",!0),((D=C(h))==null?void 0:D.user_type)=="editor"?(t(),w(b,{key:1,icon:"pi pi-trash",severity:"danger",variant:"text",rounded:"","aria-label":"Remove",onClick:I(f,["prevent"]),disabled:p.value,loading:p.value},null,8,["disabled","loading"])):l("",!0)])])]}),_:1})]),_:1},8,["to"])}}}),fe={class:"flex flex-col min-h-screen bg-slate-50"},me={key:0,class:"flex flex-wrap justify-center gap-8 px-12 py-6"},ve={key:1,class:"flex flex-wrap justify-center gap-8 px-12 py-6"},he={key:0,class:"border border-dashed rounded-xl border-green-400 overflow-hidden"},Ce=V({__name:"ProjectsView",setup(e){const{locale:n}=Q(),o=z(),j=ee(),{addLesson:_}=j,h=N(),{user:p}=q(h),s=k(null),u=k(!1),f=k(!1);async function y(){if(!u.value){u.value=!0;try{const{data:r}=await R.getProjects();u.value=!1,s.value=[];for(const c of r){const g=await L(c,n.value);s.value.push(g)}}catch(r){alert(r)}finally{u.value=!1}}}U(y),W(n,y);async function P(){f.value=!0;try{const{data:r}=await R.createProject(),c=await L(r,n.value);_(c),o.push(`/project/${c.id}/edit`)}catch(r){alert(r)}finally{f.value=!1}}return(r,c)=>{var b;const g=X,B=F;return t(),a("div",fe,[v(Y),u.value?(t(),a("div",me,[(t(),a(A,null,E(1,m=>v(g,{key:m,width:"300px",height:"234px",class:"rounded-xl shadow-sm"})),64))])):(t(),a("div",ve,[(t(!0),a(A,null,E(s.value,m=>(t(),w(ue,{key:m.id,project:m,onAfterRemove:y},null,8,["project"]))),128)),((b=C(p))==null?void 0:b.user_type)=="editor"?(t(),a("div",he,[v(B,{variant:"text",style:{width:"300px",height:"234px"},class:"bg-green-50",onClick:P,loading:f.value,disabled:f.value},{icon:x(()=>c[0]||(c[0]=[d("i",{class:"pi pi-plus text-3xl"},null,-1)])),_:1},8,["loading","disabled"])])):l("",!0)]))])}}});export{Ce as default};
