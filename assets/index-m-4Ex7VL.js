import{B as s,aR as r,v as l,o as i,c as d,y as p,b as c,x as t}from"./index-Dyj0Na_L.js";var v=function(n){var a=n.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(a("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(a("overlaybadge.outline.color"),`;
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`)},g={root:"p-overlaybadge"},m=s.extend({name:"overlaybadge",theme:v,classes:g}),y={name:"OverlayBadge",extends:r,style:m,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},u={name:"OverlayBadge",extends:y,inheritAttrs:!1,components:{Badge:r}};function b(e,n,a,B,$,f){var o=l("Badge");return i(),d("div",t({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default"),c(o,t(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}u.render=b;export{u as s};
