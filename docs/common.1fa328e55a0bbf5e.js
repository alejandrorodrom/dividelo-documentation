"use strict";(self.webpackChunkdividelo_documentation=self.webpackChunkdividelo_documentation||[]).push([[592],{3080:(_,p,s)=>{function t(o,n,i,l,m,f,g){try{var d=o[f](g),u=d.value}catch(C){return void i(C)}d.done?n(u):Promise.resolve(u).then(l,m)}s.d(p,{P:()=>c});var e=s(3020),a=s(1015);let c=(()=>{class o{constructor(){this.textButton="Copiar"}copyCode(){var i=this;return function r(o){return function(){var n=this,i=arguments;return new Promise(function(l,m){var f=o.apply(n,i);function g(u){t(f,l,m,g,d,"next",u)}function d(u){t(f,l,m,g,d,"throw",u)}g(void 0)})}}(function*(){yield navigator.clipboard.writeText(i.code),i.textButton="\xa1Copiado!",setTimeout(()=>{i.textButton="Copiar"},1500)})()}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-code-block"]],inputs:{code:"code"},decls:9,vars:2,consts:[[1,"code-block"],[3,"highlight"],[1,"button"],[1,"button__action",3,"click"]],template:function(i,l){1&i&&(e.TgZ(0,"div",0)(1,"pre"),e._uU(2,"    "),e.TgZ(3,"code",1),e._uU(4,"\n    "),e.qZA(),e._uU(5,"\n  "),e.qZA(),e.TgZ(6,"div",2)(7,"button",3),e.NdJ("click",function(){return l.copyCode()}),e._uU(8),e.qZA()()()),2&i&&(e.xp6(3),e.Q6J("highlight",l.code),e.xp6(5),e.hij(" ",l.textButton," "))},dependencies:[a.y$],styles:[".code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin-bottom:-15px}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Geometria-Regular,monospace;background-color:#f5f7ff}.button[_ngcontent-%COMP%]{display:flex;justify-content:right}.button__action[_ngcontent-%COMP%]{font-size:12px;background-color:#d7d7d7;border:none;border-radius:5px;padding:8px 8px 5px;cursor:pointer;width:72px}.button__action[_ngcontent-%COMP%]:hover{background-color:#b2b5b6}"]}),o})()},5581:(_,p,s)=>{s.d(p,{w:()=>e});var t=s(3020);const r=["*"];let e=(()=>{class a{constructor(){this.opaque=!1,this.noMargin=!1}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-paragraph"]],inputs:{opaque:"opaque",noMargin:"noMargin"},ngContentSelectors:r,decls:2,vars:4,consts:[[1,"paragraph"]],template:function(o,n){1&o&&(t.F$t(),t.TgZ(0,"p",0),t.Hsn(1),t.qZA()),2&o&&t.ekj("paragraph__opaque",n.opaque)("paragraph__no-margin",n.noMargin)},styles:[".paragraph{font-family:Geometria-Regular,monospace;font-size:16px}.paragraph__opaque{color:gray;font-style:italic}.paragraph__no-margin{margin:0}.paragraph .blue{font-family:Geometria-Medium,monospace;color:#0039a6}.paragraph .bold{font-family:Geometria-Medium,monospace}.paragraph a{color:#05be50;font-family:Geometria-Medium,monospace}\n"],encapsulation:2}),a})()},1094:(_,p,s)=>{s.d(p,{H:()=>e});var t=s(3020);const r=["*"];let e=(()=>{class a{constructor(){this.noMargin=!1,this.noMarginBottom=!1,this.opaque=!1,this.secondLevel=!1}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-subtitle"]],inputs:{noMargin:"noMargin",noMarginBottom:"noMarginBottom",opaque:"opaque",secondLevel:"secondLevel"},ngContentSelectors:r,decls:2,vars:8,consts:[[1,"subtitle"]],template:function(o,n){1&o&&(t.F$t(),t.TgZ(0,"h3",0),t.Hsn(1),t.qZA()),2&o&&t.ekj("subtitle__no-margin",n.noMargin)("subtitle__no-margin-bottom",n.noMarginBottom)("subtitle__opaque",n.opaque)("subtitle__second-level",n.secondLevel)},styles:[".subtitle[_ngcontent-%COMP%]{font-family:Geometria-Medium,monospace;font-size:19px}.subtitle__no-margin[_ngcontent-%COMP%]{margin:0}.subtitle__no-margin-bottom[_ngcontent-%COMP%]{margin-bottom:0}.subtitle__second-level[_ngcontent-%COMP%]{font-size:16px}.subtitle__opaque[_ngcontent-%COMP%]{color:gray}"]}),a})()},9896:(_,p,s)=>{s.d(p,{r:()=>e});var t=s(3020);const r=["*"];let e=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-title"]],ngContentSelectors:r,decls:2,vars:0,consts:[[1,"title"]],template:function(o,n){1&o&&(t.F$t(),t.TgZ(0,"h1",0),t.Hsn(1),t.qZA())},styles:[".title[_ngcontent-%COMP%]{font-family:Geometria-Medium,monospace;font-size:32px;padding-bottom:15px;border-bottom:1px solid #9a9a9a}"]}),a})()},257:(_,p,s)=>{s.d(p,{q:()=>a});var t=s(2910),r=s(3020);const e=["*"];let a=(()=>{class c{getToastColor(n){switch(n){case t.p.ERROR:return"#FBCCDA";case t.p.WARN:return"#FFEFCA";case t.p.INFO:return"#E0F0FA"}}getIconUrl(n){switch(n){case t.p.ERROR:return"assets/images/toast/error.svg";case t.p.WARN:return"assets/images/toast/info.svg";case t.p.INFO:return"assets/images/toast/info_blue.svg"}}}return c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-toast"]],inputs:{type:"type"},ngContentSelectors:e,decls:4,vars:3,consts:[[1,"toast"],["alt","toast icon",1,"toast__icon",3,"src"],[1,"toast__message"]],template:function(n,i){1&n&&(r.F$t(),r.TgZ(0,"div",0),r._UZ(1,"img",1),r.TgZ(2,"div",2),r.Hsn(3),r.qZA()()),2&n&&(r.Udp("background-color",i.getToastColor(i.type)),r.xp6(1),r.Q6J("src",i.getIconUrl(i.type),r.LSH))},styles:[".toast[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;margin-top:23px;border-radius:4px;background-color:#ffefca;padding:16px;font-family:Geometria-Regular,monospace}.toast__icon[_ngcontent-%COMP%]{margin-right:7px}.toast__message[_ngcontent-%COMP%]{margin-top:2px;text-align:left;font-size:14px}"]}),c})()},2910:(_,p,s)=>{s.d(p,{p:()=>t});var t=(()=>((t=t||{}).ERROR="ERROR",t.WARN="WARN",t.INFO="INFO",t))()}}]);