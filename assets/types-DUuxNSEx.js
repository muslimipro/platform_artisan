import{X as s,o as l,c,v as d,aa as u}from"./index-BYazk7S4.js";import{h as r}from"./http-DYqQOZAS.js";var p=function(e){var n=e.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(n("skeleton.background"),`;
    border-radius: `).concat(n("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(n("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},h={root:{position:"relative"}},m={root:function(e){var n=e.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},g=s.extend({name:"skeleton",theme:p,classes:m,inlineStyles:h}),y={name:"BaseSkeleton",extends:u,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:g,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},f={name:"Skeleton",extends:y,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function k(t,e,n,o,i,a){return l(),c("div",d({class:t.cx("root"),style:[t.sx("root"),a.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}f.render=k;const v={getProjects:b,createProject:w,getProjectByID:S,updateProjectByID:_,deleteProjectByID:$,getProjectTranslationByID:j,updateProjectTranslationByID:B};async function b(){try{return await r.get("/projects")}catch(t){throw console.log(t),t}}async function w(){try{return await r.post("/project",{cover_image:"",is_guidable:!0,last_edited_by:0,video_url:""})}catch(t){throw console.log(t),t}}async function S(t){try{return await r.get(`/project/${t}`)}catch(e){throw console.log(e),e}}async function _(t,e){try{return await r.put(`/project/${t}`,{cover_image:e})}catch(n){throw console.log(n),n}}async function $(t){try{return await r.delete(`/project/${t}`)}catch(e){throw console.log(e),e}}async function j(t,e){try{return await r.get(`/project/${t}/translation/${e}`)}catch(n){throw console.log(n),n}}async function B(t,e,n,o,i){try{return await r.put(`/project/${t}/translation/${e}`,{content:{description:o,level:i},name:n})}catch(a){throw console.log(a),a}}async function X(t,e){const{data:n}=await v.getProjectTranslationByID(t.id.toString(),e),o=n;return{id:t.id.toString(),cover_image:t.cover_image,last_updated_time:t.last_updated_time,last_edited_by:t.last_edited_by,is_guidable:t.is_guidable,video_url:t.video_url,title:o.name,description:o.content.description,level:o.content.level,steps:[]}}export{v as a,f as s,X as t};
