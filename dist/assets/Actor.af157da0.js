import{a4 as C,ay as a,W as _,D as o,bq as D,aG as V,a2 as $,b1 as N,a1 as R,X as s,k as i,br as q,bs as z,as as M,U as y,bt as U,x as e,V as g,C as G,I,aE as w,aB as P,az as T}from"./index.1d333204.js";import{B as W}from"./BtnBack.aa248c7d.js";const X={class:"fact"},j=C({__name:"Fact",props:{fact:null},setup(u){return(l,t)=>(a(),_("div",X,o(u.fact),1))}});const H={class:"poster__film"},J=C({__name:"Film",props:{film:null},setup(u){return(l,t)=>{const r=V("router-link");return a(),_("div",H,[$(r,{to:`/kinopoisk-widget/poster/${u.film.filmId}`},{default:N(()=>[R(o(u.film.nameRu),1)]),_:1},8,["to"]),s("span",null," \u0420\u0435\u0439\u0442\u0438\u043D\u0433: "+o(u.film.rating),1)])}}});var K=D(J,[["__scopeId","data-v-ead4b3bc"]]);const O=async u=>{const l=i(!1),{response:t,request:r}=q(`v1/staff/${u}`,"");return l.value||(await r(),l.value=!0),{actor:t,loaded:l}};const n=u=>(P("data-v-276691c5"),u=u(),T(),u),Q={class:"actor-page"},Y={key:1,class:"poster"},Z={class:"container container--small"},ss={class:"poster__wrapper"},ts={class:"poster__details"},es={class:"poster__title"},us={class:"poster__rating"},as={class:"poster__detail"},os=n(()=>s("span",null,"\u0413\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:",-1)),ls={key:0,class:"poster__detail"},_s=n(()=>s("span",null,"\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u0440\u0442\u0438:",-1)),ns={class:"poster__detail"},cs=n(()=>s("span",null,"\u0412\u043E\u0437\u0440\u0430\u0441\u0442:",-1)),is={class:"poster__detail"},rs=n(()=>s("span",null,"\u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:",-1)),ds={class:"poster__detail"},ps=n(()=>s("span",null,"\u041C\u0435\u0441\u0442\u043E \u0441\u043C\u0435\u0440\u0442\u0438:",-1)),vs={class:"poster__detail"},hs=n(()=>s("span",null,"\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F:",-1)),ms={class:"poster__detail"},fs=n(()=>s("span",null,"\u041D\u0430\u0433\u0440\u0430\u0434\u044B:",-1)),ks={class:"poster__preview"},ys={class:"poster__desc"},gs={key:0,class:"poster__part"},Cs=n(()=>s("div",{class:"poster__title"}," \u0424\u0430\u043A\u0442\u044B ",-1)),Bs={key:1,class:"poster__part"},Es=n(()=>s("div",{class:"poster__title"}," \u0424\u0438\u043B\u044C\u043C\u044B ",-1)),bs={class:"poster__films"},xs=C({__name:"Actor",setup(u){const l=i(!0);let t=i(),r=i(z().params.id),f=i(15),k=i([]);M(()=>{L(r.value)});const L=async B=>{var d;const{actor:E,loaded:v}=await O(B);t.value=E.value,l.value=!v.value,k.value=(d=t.value)==null?void 0:d.films.reduce((c,p)=>(c.some(h=>h.filmId===p.filmId)||c.push(p),c),[])},S=()=>{f.value=f.value+15};return(B,E)=>{var v,d,c,p,h,b,x,A,F;return a(),_("div",Q,[l.value?(a(),y(U,{key:0,isLoad:l.value},null,8,["isLoad"])):(a(),_("div",Y,[s("div",Z,[$(W),s("div",ss,[s("div",ts,[s("div",es,o((v=e(t))==null?void 0:v.nameRu),1),s("div",us,[s("span",null," \u041F\u043E\u043B: "+o(((d=e(t))==null?void 0:d.sex)==="MALE"?"\u043C\u0443\u0436\u0441\u043A\u043E\u0439":"\u0436\u0435\u043D\u0441\u043A\u0438\u0439"),1)]),s("div",as,[os,s("span",null,o((c=e(t))==null?void 0:c.birthday),1)]),e(t).death?(a(),_("div",ls,[_s,s("span",null,o(e(t).death),1)])):g("",!0),s("div",ns,[cs,s("span",null,o((p=e(t))==null?void 0:p.age),1)]),s("div",is,[rs,s("span",null,o((h=e(t))==null?void 0:h.birthplace),1)]),s("div",ds,[ps,s("span",null,o((b=e(t))==null?void 0:b.deathplace),1)]),s("div",vs,[hs,s("span",null,o((x=e(t))==null?void 0:x.profession),1)]),s("div",ms,[fs,s("span",null,o((A=e(t))==null?void 0:A.hasAwards),1)])]),s("div",ks,[s("div",{class:"poster__img",style:G(`background-image: url(${(F=e(t))==null?void 0:F.posterUrl})`)},null,4)])]),s("div",ys,[e(t).facts.length?(a(),_("div",gs,[Cs,(a(!0),_(I,null,w(e(t).facts,m=>(a(),y(j,{fact:m},null,8,["fact"]))),256))])):g("",!0),e(k).length?(a(),_("div",Bs,[Es,s("div",bs,[(a(!0),_(I,null,w(e(k).slice(0,e(f)),m=>(a(),y(K,{key:m.filmId,film:m},null,8,["film"]))),128))])])):g("",!0),s("button",{class:"poster__btn",onClick:S},"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435")])])]))])}}});var Is=D(xs,[["__scopeId","data-v-276691c5"]]);export{Is as default};
