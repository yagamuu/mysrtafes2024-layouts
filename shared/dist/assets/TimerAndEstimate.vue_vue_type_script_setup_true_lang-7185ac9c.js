import{p as _,c as u,j as p,d as f,h,o as v,k as C,b as i,t as d,s as m,F as x,i as T,n as I,l as $}from"./timer-96652686.js";const k=([t,e,n,r])=>{const o=[[t,n],[t,r],[e,n],[e,r]];return o.sort((s,a)=>s[0]===a[0]?s[1]-a[1]:s[0]-a[0]),[o[0],o[1],o[3],o[2],o[0]]},V=t=>{var r,o;const e=t.map(s=>k(s));e.sort((s,a)=>{var c,l;return!((c=s[0])!=null&&c[0])||!((l=a[0])!=null&&l[0])?0:s[0][0]-a[0][0]});const n=[[0,0]];for(const s of e){if(!((r=s[0])!=null&&r[0])&&((o=s[0])==null?void 0:o[0])!==0)throw new Error("first element of boxCorners is empty");const a=[s[0][0],0];n.push(a,...s,a)}return n.push([1920,0],[1920,1080],[0,1080],[0,0]),`${n.map(s=>s.map(a=>`${a}px`).join(" ")).join(",")}`};function B(){const t=_("timekeeping","nodecg-timekeeper"),e=_("history","nodecg-timekeeper"),n=u(()=>!(t!=null&&t.data)||t.data.time.rawInSecond<=0?"00:00":p(t.data.time.rawInSecond)),r=u(()=>{var a;return((a=t==null?void 0:t.data)==null?void 0:a.status)||"finished"}),o=u(()=>!!(e!=null&&e.data&&e.data.length>0)),s=u(()=>{var a,c,l;return!((a=e==null?void 0:e.data)!=null&&a[0])||((c=e==null?void 0:e.data)==null?void 0:c[0].time.rawInSecond)<=0?"00:00":p((l=e==null?void 0:e.data)==null?void 0:l[0].time.rawInSecond)});return{timekeeping:t,time:n,status:r,history:e,hasHistory:o,latestHistorytime:s}}function D(){const t=_("runDataActiveRun","nodecg-speedcontrol");return{isChallenge:u(()=>{var n;return!!((n=t==null?void 0:t.data)!=null&&n.customData.isChallenge)})}}const H={class:"title"},j=i("span",{class:"dashed_line"},null,-1),y={class:"game_detail"},E={class:"category"},R={class:"game_console"},z=f({__name:"InfoBox",setup(t){const{runTitle:e,runCategory:n,runSystem:r,runRelease:o}=h();return(s,a)=>(v(),C(x,null,[i("div",H,d(m(e)),1),j,i("div",y,[i("div",E,d(m(n)),1),i("div",R,d(m(r))+" - "+d(m(o)),1)])],64))}}),b={class:"time"},F={class:"will"},A=f({__name:"TimerAndEstimate",setup(t){const{estimate:e}=h(),{isChallenge:n}=D(),{time:r,runState:o}=T(),{time:s,status:a,hasHistory:c,latestHistorytime:l}=B(),g=u(()=>(n.value?a:o).value==="finished"&&(!n.value||c.value)?"stop_yellow":""),w=u(()=>n.value?c.value?l.value:s.value:r.value);return(S,N)=>(v(),C("div",b,[i("div",{class:I([g.value,"now"])},d(w.value),3),i("div",F,[$("予定タイム"),i("span",null,d(m(e)),1)])]))}});export{z as _,A as a,V as c};