import{b as e,r as n,k as l,a7 as s,w as a,T as t,u as i,ag as o,H as c,m as r,o as u,z as m,q as p,B as f,ca as d,al as g,cb as N,aM as b,c as v,cc as h}from"./main.js";import{a as k}from"./browse-1f8ce718.js";import{a as _,p as w}from"./perfs-2bc54d35.js";import{c as T}from"./countries-a19495bf.js";import{l as M}from"./html-1975aa10.js";import{u as y,a as $,f as j,b as x,c as z}from"./userXhr-6849aa54.js";function C(c){const r=o(null);function u(e){Object.assign(r(),e),n()}const m=e.get();return m&&m.id===c&&r(m),y(c).then((e=>{r(e),n()})).then(e.refresh).catch((e=>{l()&&s(e)})),{user:r,isMe:()=>e.getUserId()===c,toggleFollowing(){const e=r();e&&P(e)&&e.following?$(e.id).then(u):e&&j(e.id).then(u)},toggleBlocking(){const e=r();e&&P(e)&&e.blocking?x(e.id).then(u):e&&z(e.id).then(u)},goToGames(){const e=r();if(e){const n={username:e.username};e.patron&&(n.patron="1"),e.title&&(n.title=e.title),a.set(`/@/${e.id}/games?${t(n)}`)}},goToUserTV(){const e=r();e&&a.set(`/@/${e.id}/tv`)},challenge(){const e=r();e&&i.open(e.id)},composeMessage(){const e=r();e&&a.set(`/inbox/new/${e.id}`)},followers(){const e=r();if(e){const n={username:e.username};e.title&&(n.title=e.title),a.set(`/@/${e.id}/related?${t(n)}`)}}}}function P(e){return void 0!==e.count}function S(e,n){const l=A(e.online,e.patron,e.username,e.title),s=n.isMe()?null:g(l);return c(s?null:l,s)}function A(e,n,s,a){const t=l()&&e?"online":"offline",i=r("span",n?{className:"userStatus patron "+t,"data-icon":""}:{className:"fa fa-circle userStatus "+t});return r("div.title",[i,r("span",[...a?[r("span.userTitle"+("BOT"===a?".bot":""),a)," "]:[],s])])}function R(n,s){return r("div",{id:"userProfile",className:"native_scroller page"},function(e){return e.tosViolation?r("section",{className:"warnings"},e.tosViolation?r("div",{className:"warning","data-icon":"j"},p("thisAccountViolatedTos")):null):null}(n),function(e){if(e.profile){const n=[e.profile.firstName,e.profile.lastName].filter((e=>null!=e)).join(" "),s=null!=e.profile.country?T[e.profile.country]:null,a=e.profile.location,t=p("memberSince")+" "+N(new Date(e.createdAt));return r("section",{className:"profileSection"},n?r("h3",{className:"fullname"},n):null,null!=e.profile.bio?r("p",{className:"profileBio"},r.trust(M(e.profile.bio))):null,r("div",null,null!=e.profile.fideRating?r("p",null,"FIDE rating: ",r("strong",null,e.profile.fideRating)):null,r("p",{className:"location"},a,null!=s&&l()?r("span",{className:"country"},null!=a?",":""," ",r("img",{className:"flag",src:b(`images/flags/${e.profile.country}.png`)}),s):null),r("p",null,t),e.seenAt?r("p",null,r.trust(p("lastSeenActive",`<small>${v(new Date(e.seenAt))}</small>`))):null))}return null}(n),function(e){let n=null;const l=e.playTime?p("tpTimeSpentPlaying",h(e.playTime.total)):null;P(e)&&(n=e.playTime&&e.playTime.tv>0?p("tpTimeSpentOnTV",h(e.playTime.tv)):null);return r("section",{className:"profileSection"},P(e)&&e.completionRate?r("p",null,p("gameCompletionRate",e.completionRate+"%")):null,l?r("p",null,l):null,n?r("p",null,n):null)}(n),function(e,n){return r("section",{className:"profileSection websiteLinks"},e.isMe()?r("p",null,r("a",{className:"external_link",oncreate:u((()=>k("/account/profile")))},p("editProfile"))):r("p",null,r("a",{className:"external_link",oncreate:u((()=>k(`/@/${n.id}`)))},"More on lichess.org")),n.patron?r("p",null,r("a",{className:"external_link",oncreate:u((()=>k("/patron")))},"Lichess Patron")):null)}(s,n),function(e){function n(e){return-1!==["blitz","bullet","rapid","classical","correspondence"].indexOf(e.key)||e.perf.games>0}return r("section",{id:"userProfileRatings",className:"perfs"},function(e){const n=w.map((n=>{const l=e.perfs[n[0]];return{key:n[0],name:n[1],perf:l||"-"}}));e.perfs.puzzle&&n.push({key:"puzzle",name:"Training",perf:e.perfs.puzzle});return n}(e).filter(n).map((n=>function(e,n,l,s){const t=function(e,n){return"puzzle"!==e&&n.games>0}(e,l);return r("div",{className:"profilePerf"+(t?" nav":""),"data-icon":f(e),oncreate:u((()=>{t&&a.set(`/@/${s.id}/${e}/perf`)}))},[r("span.name",n),r("div.rating",[l.rating,l.rd>=_?"?":null,d(l.prog),r("span.nb","/ "+l.games)])])}(n.key,n.name,n.perf,e))))}(n),function(n,l){return r("section",{id:"userProfileActions",className:"items_list_block noPadding"},P(l)?r("div",{className:"list_item nav",oncreate:u(n.goToGames)},m("nbGames",l.count.all)):null,e.isConnected()&&n.isMe()?r("div",{className:"list_item",oncreate:u((()=>a.set("/inbox")))},r("span",{className:"fa fa-envelope"}),p("inbox")):null,e.isConnected()&&n.isMe()?r("div",{className:"list_item",oncreate:u((()=>a.set("/account/preferences")))},r("span",{className:"fa fa-cog"}),p("preferences")):null,e.isConnected()&&n.isMe()?r("div",{className:"list_item nav",oncreate:u(n.followers)},p("friends")):null,n.isMe()?null:r("div",{className:"list_item nav","data-icon":"1",oncreate:u(n.goToUserTV)},p("watchGames")),e.isConnected()&&!n.isMe()?r("div",{className:"list_item","data-icon":"U",oncreate:u(n.challenge)},p("challengeToPlay")):null,e.isConnected()&&!n.isMe()?r("div",{className:"list_item nav",oncreate:u(n.composeMessage)},r("span",{className:"fa fa-comment"}),p("composeMessage")):null,e.isConnected()&&P(l)&&l.followable&&!n.isMe()?r("div",{className:["list_item",l.blocking?"disabled":""].join(" ")},r("div",{className:"check_container"},r("label",{htmlFor:"user_following"},p("follow")),r("input",{id:"user_following",type:"checkbox",checked:l.following,disabled:l.blocking,onchange:n.toggleFollowing}))):null,e.isConnected()&&P(l)&&!n.isMe()?r("div",{className:["list_item",l.following?"disabled":""].join(" ")},r("div",{className:"check_container"},r("label",{htmlFor:"user_blocking"},p("block")),r("input",{id:"user_blocking",type:"checkbox",checked:l.blocking,disabled:l.following,onchange:n.toggleBlocking}))):null,e.isConnected()&&!n.isMe()?r("div",{className:"list_item","data-icon":"!",oncreate:u((()=>k(`/report?username=${l.username}`)))},p("reportXToModerators",l.username)):null,e.isConnected()&&n.isMe()?r("div",{className:"list_item",oncreate:u(e.logout)},r("span",{className:"fa fa-power-off"}),p("logOut")):null)}(s,n))}export{C as U,S as h,R as p,A as u};