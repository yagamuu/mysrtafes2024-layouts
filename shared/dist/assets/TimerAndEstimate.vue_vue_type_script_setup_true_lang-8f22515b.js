import{d,p,o as h,i as f,b as r,t as l,k as _,v as C,q as x,c as m,n as g,l as T}from"./customData-8a30595c.js";const w=([c,o,n,a])=>{const t=[[c,n],[c,a],[o,n],[o,a]];return t.sort((s,e)=>s[0]===e[0]?s[1]-e[1]:s[0]-e[0]),[t[0],t[1],t[3],t[2],t[0]]},R=c=>{var a,t;const o=c.map(s=>w(s));o.sort((s,e)=>{var i,u;return!((i=s[0])!=null&&i[0])||!((u=e[0])!=null&&u[0])?0:s[0][0]-e[0][0]});const n=[[0,0]];for(const s of o){if(!((a=s[0])!=null&&a[0])&&((t=s[0])==null?void 0:t[0])!==0)throw new Error("first element of boxCorners is empty");const e=[s[0][0],0];n.push(e,...s,e)}return n.push([1920,0],[1920,1080],[0,1080],[0,0]),`${n.map(s=>s.map(e=>`${e}px`).join(" ")).join(",")}`},y={class:"game_box"},S={class:"title"},$=r("span",{class:"dashed_line"},null,-1),B={class:"game_detail"},b={class:"category"},k={class:"game_console"},V=d({__name:"InfoBox",setup(c){const{runTitle:o,runCategory:n,runSystem:a,runRelease:t}=p();return(s,e)=>(h(),f("div",y,[r("div",S,l(_(o)),1),$,r("div",B,[r("div",b,l(_(n)),1),r("div",k,l(_(a))+" - "+l(_(t)),1)])]))}}),D={class:"time"},E={class:"will"},q=d({__name:"TimerAndEstimate",setup(c){const{estimate:o,estimateS:n}=p(),{isChallenge:a,challengeTime:t}=C(),{time:s,runState:e,timer:i}=x(),u=m(()=>e.value==="finished"?"stop_yellow":""),v=m(()=>!a.value||!(i!=null&&i.data)?s.value:t.value);return(j,N)=>(h(),f("div",D,[r("div",{class:g([u.value,"now"])},l(v.value),3),r("div",E,[T("予定タイム"),r("span",null,l(_(o)),1)])]))}});export{V as _,q as a,R as c};
