import{d as p,r as y,c as d,o as u,a as _,b as s,e as g,t as c,f as I,g as v,n as M,u as N,F as f,h as x,i as D,j as m,k as j,l as w,m as k,p as B,w as T,q as C,s as F}from"./timer-c0e757f4.js";import{u as O}from"./setupInformation-83574d07.js";const U={class:"footer"},V=s("div",{class:"left"},"本イベントは、RTA in Japanのチャンネル貸出システムを利用した外部のRTAイベントです。",-1),A={class:"right"},H=s("div",{class:"x_icon"},null,-1),P=p({__name:"TheFooter",setup(e){const t=y(new Date),n=d(()=>{const a=t.value.getFullYear().toString(),o=(t.value.getMonth()+1).toString(),l=t.value.getDate().toString(),r=t.value.getHours().toString().padStart(2,"0"),i=t.value.getMinutes().toString().padStart(2,"0");return`${a}/${o}/${l} ${r}:${i}`});return setInterval(()=>{t.value=new Date},1e3),(a,o)=>(u(),_("div",U,[V,s("div",A,[H,g("#不思議RTAフェス"),s("span",null,c(n.value),1)])]))}}),z=s("div",{class:"logo"},null,-1),q=p({__name:"BaseOverlay",props:{clipPath:{},backgroundUrl:{}},setup(e){const t=e,n=d(()=>{const a=t.clipPath?`polygon(${t.clipPath})`:"",o=t.backgroundUrl?`url(${t.backgroundUrl})`:void 0;return{clipPath:a,backgroundImage:o}});return(a,o)=>(u(),_("div",null,[s("div",{id:"container",style:M(n.value)},[z,I(a.$slots,"default"),v(P)],4)]))}});function E(){const e=N("spotifyPlayingTrack","nodecg-spotify-widget"),t=d(()=>{var a;return((a=e==null?void 0:e.data)==null?void 0:a.name)||""}),n=d(()=>{var a;return((a=e==null?void 0:e.data)==null?void 0:a.artists.join(", "))||""});return{spotifyPlayingTrack:e,trackName:t,artists:n}}const J={class:"setup_box_1"},L={class:"title"},Y={class:"runner"},G=p({__name:"UpnextSchedule",props:{runData:{type:Object,default:void 0}},setup(e){const t=e,{setupInformationArray:n}=O(),a=d(()=>t.runData?t.runData.teams.flatMap(l=>l.players.flatMap(r=>r.name)).join(", "):""),o=y(0);return setInterval(()=>{var r;const l=((r=n==null?void 0:n.data)==null?void 0:r.length)||0;o.value=(o.value+1)%l},3e6),(l,r)=>{var i,h,S;return u(),_("div",J,[s("span",L,c((i=e.runData)==null?void 0:i.game),1),s("span",Y,c((h=e.runData)==null?void 0:h.category)+" / Runner : "+c(a.value),1),(u(!0),_(f,null,x((S=m(n))==null?void 0:S.data,($,R)=>(u(),_("span",{class:D(["detail",[R===o.value?"active":""]]),key:$.id},c($.text),3))),128))])}}}),K={class:"next_time_box"},Q={class:"next_time"},W={class:"title"},X={class:"runner"},Z=p({__name:"OndeckSchedule",props:{runData:{type:Object,default:void 0},upcomingStartInSeconds:{type:Number,default:0}},setup(e){const t=e,n=d(()=>t.runData?t.runData.teams.flatMap(l=>l.players.flatMap(r=>r.name)).join(", "):""),a=d(()=>Math.floor(t.upcomingStartInSeconds/3600)),o=d(()=>(Math.floor(t.upcomingStartInSeconds/60)%60).toString().padStart(2,"0"));return(l,r)=>{var i,h;return u(),_("div",null,[s("div",K,[s("p",Q,[a.value>0?(u(),_(f,{key:0},[s("span",null,c(a.value),1),g("時間 ")],64)):j("",!0),s("span",null,c(o.value),1),g("分後 ")])]),s("span",W,c((i=e.runData)==null?void 0:i.game),1),s("span",X,c((h=e.runData)==null?void 0:h.category)+" / Runner : "+c(n.value),1)])}}}),tt=p({__name:"SetupSchedule",setup(e){const{upnextRun:t,ondeckRuns:n,upcomingStartIn:a}=w();return(o,l)=>(u(),_(f,null,[v(G,{"run-data":m(t)},null,8,["run-data"]),(u(!0),_(f,null,x(m(n),(r,i)=>(u(),k(Z,{key:r.id,class:D(`setup_box_${i+2}`),"run-data":r,"upcoming-start-in-seconds":m(a)[i]},null,8,["class","run-data","upcoming-start-in-seconds"]))),128))],64))}}),et={class:"music"},at=s("span",{class:"icon"},null,-1),nt=p({__name:"SpotifyTrack",setup(e){const{trackName:t,artists:n}=E();return(a,o)=>(u(),_("div",et,[at,g(" "+c(m(t))+" - "+c(m(n)),1)]))}}),st=p({__name:"main",setup(e){return B({title:"Setup"}),(t,n)=>(u(),k(q,null,{default:T(()=>[v(tt),v(nt)]),_:1}))}});const b=C(st),ot=F();b.use(ot);b.mount("#app");