import{X as U,o,c as r,v as l,U as g,j as d,e as i,aa as X,d as N,g as q,ab as G,a as z,ac as F,r as b,a6 as H,h as $,w as B,b as j,f as R,t as J,V,s as M,ad as K,l as O,y as Q,F as A,k as E}from"./index-DRZ-B3PQ.js";import{a as S,t as L,s as W}from"./types-BUivUqNA.js";import{_ as Y}from"./AHeader.vue_vue_type_script_setup_true_lang-Bv55PrXe.js";import{s as Z,u as ee}from"./editor-store-Bbxj6M0i.js";import{s as te}from"./logo-C4-nlLcK.js";import{P as oe}from"./pibody-B70zHXNr.js";import"./http-B0ZoMD11.js";import"./index-CY_SPIgv.js";import"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-RRG0UzA8.js";var ae=function(c){var t=c.dt;return`
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
`)},se={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},re=U.extend({name:"card",theme:ae,classes:se}),ne={name:"BaseCard",extends:X,style:re,provide:function(){return{$pcCard:this,$parentInstance:this}}},T={name:"Card",extends:ne,inheritAttrs:!1};function ie(e,c,t,_,w,v){return o(),r("div",l({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),r("div",l({key:0,class:e.cx("header")},e.ptm("header")),[g(e.$slots,"header")],16)):d("",!0),i("div",l({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(o(),r("div",l({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(o(),r("div",l({key:0,class:e.cx("title")},e.ptm("title")),[g(e.$slots,"title")],16)):d("",!0),e.$slots.subtitle?(o(),r("div",l({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[g(e.$slots,"subtitle")],16)):d("",!0)],16)):d("",!0),i("div",l({class:e.cx("content")},e.ptm("content")),[g(e.$slots,"content")],16),e.$slots.footer?(o(),r("div",l({key:1,class:e.cx("footer")},e.ptm("footer")),[g(e.$slots,"footer")],16)):d("",!0)],16)],16)}T.render=ie;const ce={class:"h-[174px] overflow-hidden"},le={class:"flex justify-between items-center px-4 py-1"},de={class:"pb-1"},pe={class:"flex"},ue=N({__name:"ProjectCard",props:{project:{}},emits:["after-remove"],setup(e,{emit:c}){const t=q(),_=G(),w=z(),{user:v}=F(w),p=b(!1),a=e,k=c;function u(){_.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{m()}})}async function m(){p.value=!0;try{await S.deleteProjectByID(a.project.id),k("after-remove")}catch(x){alert(x)}finally{p.value=!1}}function h(){t.push(`/project/${a.project.id}/edit`)}return(x,s)=>{const n=te,y=Z,C=M,P=T,f=H("RouterLink");return o(),$(f,{to:p.value?"":`/project/${a.project.id}`},{default:B(()=>[j(P,{style:{width:"300px",height:"234px",overflow:"hidden"},class:"p-0",dt:{body:{padding:"0px",gap:"2px"}}},{header:B(()=>[i("div",ce,[j(n,{alt:"user header",src:a.project.cover_image.length>0?a.project.cover_image:R(oe),class:"animate-fadein animate-once animate-duration-1000 animate-ease-in-out"},null,8,["src"])])]),subtitle:B(()=>{var D,I;return[i("div",le,[i("div",null,[i("div",de,J(a.project.title),1),j(y,{"model-value":a.project.level,readonly:""},null,8,["model-value"])]),i("div",pe,[((D=R(v))==null?void 0:D.user_type)=="editor"?(o(),$(C,{key:0,icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:V(h,["prevent"])})):d("",!0),((I=R(v))==null?void 0:I.user_type)=="editor"?(o(),$(C,{key:1,icon:"pi pi-trash",severity:"danger",variant:"text",rounded:"","aria-label":"Remove",onClick:V(u,["prevent"]),disabled:p.value,loading:p.value},null,8,["disabled","loading"])):d("",!0)])])]}),_:1})]),_:1},8,["to"])}}}),me={class:"flex flex-col min-h-screen bg-slate-50"},fe={class:"flex flex-wrap justify-center gap-8 px-12 py-6"},ve={key:0,class:"border border-dashed rounded-xl border-green-400 overflow-hidden"},xe=N({__name:"ProjectsView",setup(e){const{locale:c}=K(),t=q(),_=ee(),{addLesson:w}=_,v=z(),{user:p}=F(v),a=b([]),k=b(0),u=b(!1),m=b(!1);async function h(){if(!u.value){u.value=!0;try{const{data:s}=await S.getProjects();u.value=!1,a.value=[],k.value=s.length;for(const n of s){const y=await L(n,c.value);a.value.push(y)}}catch(s){alert(s)}finally{u.value=!1}}}O(h),Q(c,h);async function x(){m.value=!0;try{const{data:s}=await S.createProject(),n=await L(s,c.value);w(n),t.push(`/project/${n.id}/edit`)}catch(s){alert(s)}finally{m.value=!1}}return(s,n)=>{var P;const y=W,C=M;return o(),r("div",me,[j(Y),i("div",fe,[(o(!0),r(A,null,E(a.value,f=>(o(),$(ue,{key:f.id,project:f,onAfterRemove:h},null,8,["project"]))),128)),(o(!0),r(A,null,E(k.value-a.value.length,f=>(o(),$(y,{key:f,width:"300px",height:"234px",class:"rounded-xl shadow-sm"}))),128)),((P=R(p))==null?void 0:P.user_type)=="editor"?(o(),r("div",ve,[j(C,{variant:"text",style:{width:"300px",height:"234px"},class:"bg-green-50",onClick:x,loading:m.value,disabled:m.value},{icon:B(()=>n[0]||(n[0]=[i("i",{class:"pi pi-plus text-3xl"},null,-1)])),_:1},8,["loading","disabled"])])):d("",!0)])])}}});export{xe as default};
