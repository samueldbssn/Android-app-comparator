import{h as t,cm as e,w as s,r as o,cn as n,co as a,cp as i,cq as c,cr as d,cs as r,k as h,ct as _,m as u,aK as l,c as v,cu as m,q as p,C as g,a2 as f,cb as b,cv as y,o as k,D as w,a5 as M,S as C,G as D,a7 as T,H as x}from"./main.js";import{l as S}from"./layout-c7d0a2f4.js";import{l as L}from"./html-1975aa10.js";const $=new class{constructor(){this.enabled=!1,this.init=e=>{this.enabled=!0,this.element=e,this.element.addEventListener("scroll",t((()=>{const t=this.element;this.enable(!!t&&t.offsetHeight+t.scrollTop>t.scrollHeight-20)}),500),{passive:!0})},this.auto=()=>{this.element&&this.enabled&&requestAnimationFrame((()=>this.element&&(this.element.scrollTop=9999999)))},this.enable=t=>{this.enabled=t},this.setMarker=()=>{this.marker=this.element&&this.element.querySelector("mine,their")},this.toMarker=()=>!(!this.marker||!this.to(this.marker))&&(this.marker=void 0,!0),this.to=t=>{if(this.element){const e=t.offsetTop-this.element.offsetHeight/2+t.offsetHeight/2;return e>0&&(this.element.scrollTop=e),e>0}return!1}}};class j{constructor(u){this.search={input:""},this.loading=!1,this.confirmDelete=null,this.msgsPerPage=100,this.openConvo=t=>{var n;(null===(n=this.data.convo)||void 0===n?void 0:n.user.id)!==t&&(this.data.convo=void 0,this.loading=!0),e(t).then((t=>{this.data=t,this.search.result=void 0,this.loading=!1,t.convo?(s.History.pushState(`/inbox/${t.convo.user.name}`),this.onLoadConvo(t.convo),o()):this.showSide()})),this.pane="convo",o()},this.showSide=()=>{this.pane="side",s.History.pushState("/inbox"),o()},this.getMore=()=>{this.data.convo&&this.canGetMoreSince&&n(this.data.convo.user.id,this.canGetMoreSince).then((t=>{this.data.convo&&t.convo&&t.convo.user.id===this.data.convo.user.id&&t.convo.msgs[0]&&(t.convo.msgs[0].date>=this.data.convo.msgs[this.data.convo.msgs.length-1].date||(this.data.convo.msgs=this.data.convo.msgs.concat(t.convo.msgs),this.onLoadMsgs(t.convo.msgs),o()))})),this.canGetMoreSince=void 0,o()},this.onLoadConvo=t=>{this.onLoadMsgs(t.msgs),this.typing&&(clearTimeout(this.typing.timeout),this.typing=void 0),setTimeout(this.setRead,500)},this.onLoadMsgs=t=>{const e=t[this.msgsPerPage-1];this.canGetMoreSince=null==e?void 0:e.date},this.post=t=>{if(this.data.convo){this.socket.post(this.data.convo.user.id,t);const e={text:t,user:this.data.me.id,date:new Date,read:!0};this.data.convo.msgs.unshift(e);const s=this.currentContact();s?this.addMsg(e,s):setTimeout((()=>a().then((t=>{this.data.contacts=t.contacts,o()}))),1e3),$.enable(!0),o()}},this.receive=t=>{var e;const s=this.findContact(t.user);if(this.addMsg(t,s),s){let s=!1;t.user===(null===(e=this.data.convo)||void 0===e?void 0:e.user.id)&&(this.data.convo.msgs.unshift(t),s=this.setRead(),this.receiveTyping(t.user,!0)),s||o()}else a().then((t=>{this.data.contacts=t.contacts,o()}))},this.addMsg=(t,e)=>{e&&(e.lastMsg=t,this.data.contacts=[e].concat(this.data.contacts.filter((t=>t.user.id!==e.user.id))))},this.findContact=t=>this.data.contacts.find((e=>e.user.id===t)),this.currentContact=()=>this.data.convo&&this.findContact(this.data.convo.user.id),this.searchInput=t=>{this.search.input=t,t[1]?i(t).then((t=>{this.search.result=this.search.input[1]?t:void 0,o()})):(this.search.result=void 0,o())},this.setRead=()=>{var t;const e=null===(t=this.currentContact())||void 0===t?void 0:t.lastMsg;return!(!e||e.user===this.data.me.id)&&(!e.read&&(e.read=!0,this.socket.setRead(e.user),o(),!0))},this.delete=()=>{var t;const e=null===(t=this.data.convo)||void 0===t?void 0:t.user.id;e&&c(e).then((t=>{this.data=t,this.confirmDelete=null,this.pane="side",o(),s.History.pushState("/inbox")}))},this.block=()=>{var t;const e=null===(t=this.data.convo)||void 0===t?void 0:t.user.id;e&&d(e).then((()=>this.openConvo(e)))},this.unblock=()=>{var t;const e=null===(t=this.data.convo)||void 0===t?void 0:t.user.id;e&&r(e).then((()=>this.openConvo(e)))},this.changeBlockBy=t=>{var e;t===(null===(e=this.data.convo)||void 0===e?void 0:e.user.id)&&this.openConvo(t)},this.sendTyping=t((t=>{this.socket.typing(t)}),3e3),this.receiveTyping=(t,e)=>{var s;this.typing&&(clearTimeout(this.typing.timeout),this.typing=void 0),!0!==e&&(null===(s=this.data.convo)||void 0===s?void 0:s.user.id)===t&&(this.typing={user:t,timeout:setTimeout((()=>{var e;(null===(e=this.data.convo)||void 0===e?void 0:e.user.id)===t&&(this.typing=void 0),o()}),3e3)}),o()},this.onReconnect=()=>{this.data.convo&&this.openConvo(this.data.convo.user.id),o()},this.data=u,this.pane=u.convo?"convo":"side",this.connected=h,this.socket=new _(this),this.data.convo&&this.onLoadConvo(this.data.convo),this.setRead()}}function H(t,e,s){const o=e.user,n=e.lastMsg,a=!n.read&&n.user!==t.data.me.id;return u("div.msg-app__side__contact",{key:`${o.id}${s===o.id?"-active":""}`,className:s===o.id?"active":"","data-userid":o.id},[u("div.msg-app__side__contact__user",[u("div.msg-app__side__contact__head",[l(Object.assign(Object.assign({},o),{username:o.name})),u("div.msg-app__side__contact__date",q(n))]),u("div.msg-app__side__contact__body",[u("div.msg-app__side__contact__msg",{className:a?"msg-app__side__contact__msg--new":""},n.text),a?u("i.msg-app__side__contact__new",{"data-icon":""}):null])])])}function N(t){return m(t,".msg-app__side__contact")}function O(t,e){const s=N(t),o=null==s?void 0:s.dataset;o.userid&&e.openConvo(o.userid)}function q(t){return u("time.timeago",{key:t.date.getTime(),title:t.date.toLocaleString(),datetime:t.date.getTime()},v(t.date))}function G(t,e){return"lichess"===e.user.id?[]:u("button.msg-app__convo__action.button.button-empty.bad",{key:"delete","data-icon":"q",title:p("delete"),oncreate:g((()=>t.confirmDelete=e.user.id))})}let R=0;function E(t,e){const s=t.connected();return u("form.msg-app__convo__post",{onsubmit:e=>{e.preventDefault();const s=Date.now();if(s-1e3<R)return;const o=e.target[0],n=o.value.trim();n.length>8e3?f.show({text:"Message is too long",duration:"short"}):n.length>0&&(R=s,t.post(n),o.value="",o.focus())}},[P(t,e),u("button.msg-app__convo__post__submit.button.fa.fa-telegram",{className:s?"connected":"",type:"submit",disabled:!s})])}function P(e,s){return u("textarea.msg-app__convo__post__text",{rows:1,oncreate:o=>{o.dom.addEventListener("input",t((()=>{e.sendTyping(s.id)}),500))}})}function F(t,e){return u("div.msg-app__convo__msgs.native_scroller",{oncreate(t){$.init(t.dom),$.auto()},onupdate(){$.auto()}},[u("div.msg-app__convo__msgs__content",[t.canGetMoreSince?u("button.msg-app__convo__msgs__more.button.button-empty",{key:"more",oncreate:g((()=>{$.setMarker(),t.getMore()}))},"Load more"):null,...I(t,e.msgs),t.typing?u("div.msg-app__convo__msgs__typing",`${e.user.name} is typing...`):null])])}function I(t,e){const s=function(t){let e=t[0];if(!e)return[{date:new Date,msgs:[]}];const s=[{date:e.date,msgs:[[e]]}];return t.slice(1).forEach((t=>{A(t.date,e.date)?t.user===e.user?s[0].msgs[0].unshift(t):s[0].msgs.unshift([t]):s.unshift({date:t.date,msgs:[[t]]}),e=t})),s}(e),o=[];return s.forEach((e=>o.push(...function(t,e){return[u("day",Y(e.date)),...e.msgs.map((e=>u("group",e.map((e=>function(t,e){const s=e.user===t.data.me.id?"mine":"their";return u(s,[K(e),u("em",`${B(e.date.getHours())}:${B(e.date.getMinutes())}`)])}(t,e))))))]}(t,e)))),o}const B=t=>(t<10?"0":"")+t;const U=new Date,V=new Date;function Y(t){return A(t,U)?p("today").toUpperCase():A(t,V)?p("yesterday").toUpperCase():b(t)}V.setDate(V.getDate()-1);const A=(t,e)=>t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear(),K=t=>u("t",u.trust(L(t.text).replace(/\n/g,"<br>")));function z(t,e){const o=e.user;return u("div.msg-app__convo",{key:"convo-loaded"},[u("div.msg-app__convo__head",[u("div.msg-app__convo__head__left",[u("button.msg-app__convo__head__back",{oncreate:g((()=>{t.showSide()}))},y),u("div.user-link",{oncreate:g((()=>s.set(`/@/${o.name}`))),className:o.online?"online":"offline"},l(Object.assign(Object.assign({},o),{username:o.name})))]),u("div.msg-app__convo__head__actions",G(t,e))]),F(t,e),u("div.msg-app__convo__reply",[!1===e.relations.out||!1===e.relations.in?u("div.msg-app__convo__reply__block.text",{"data-icon":"k"},"This conversation is blocked."):e.postable?E(t,o):u("div.msg-app__convo__reply__block.text",{"data-icon":"k"},`${o.name} doesn't accept new messages.`)])])}function J(e){return u("div.msg-app__side__search",[e.data.me.kid?null:u("input",{placeholder:p("searchOrStartNewDiscussion"),oncreate:s=>{const o=s.dom;o.addEventListener("input",t((()=>e.searchInput(o.value.trim())),500))}})])}function Q(t,e){return u("div.msg-app__search.msg-app__side__content.native_scroller",{oncreate:k((e=>O(e,t)),void 0,N)},[e.contacts[0]&&u("section",[u("h2",p("discussions")),u("div.msg-app__search__contacts",e.contacts.map((e=>H(t,e))))]),e.friends[0]&&u("section",[u("h2",p("friends")),u("div.msg-app__search__users",e.friends.map(W))]),e.users[0]&&u("section",[u("h2",p("players")),u("div.msg-app__search__users",e.users.map(W))])])}function W(t){return u("div.msg-app__side__contact",{key:t.id,"data-userid":t.id},[u("div.msg-app__side__contact__user",[u("div.msg-app__side__contact__head",[l(Object.assign(Object.assign({},t),{username:t.name}))])])])}function X(t,e,s,o){return u("button.withIcon.binary_choice",{className:o,"data-icon":t,oncreate:C(s)},e)}var Z={oncreate:D,oninit({attrs:t}){const n=t.id;n?e(n).then((t=>{this.ctrl=new j(t),o()})).catch((t=>{404===t.status?a().then((t=>{t.convo={user:{id:n,name:n.toLowerCase()},msgs:[],relations:{},postable:!0},this.ctrl=new j(t)})):(T(t),s.set("/inbox"))})):a().then((t=>{this.ctrl=new j(t),o()})).catch(T)},view(){const t=x(p("inbox")),e=function(t){var e;if(t){const s=null===(e=t.data.convo)||void 0===e?void 0:e.user.id;return u("main.box.msg-app",{className:`pane-${t.pane}`},[u("div.msg-app__side",{key:"side"},[J(t),t.search.result?Q(t,t.search.result):u("div.msg-app__contacts.msg-app__side__content.native_scroller",{oncreate:k((e=>O(e,t)),void 0,N)},t.data.contacts.map((e=>H(t,e,s))))]),t.data.convo?z(t,t.data.convo):t.loading?u("div.msg-app__convo",{key:"convo-loading"},[u("div.msg-app__convo__head"),w.getVdom()]):u("div.msg-app__convo",{key:"convo-empty"})])}return w.getVdom()}(this.ctrl),s=(null==(n=this.ctrl)?void 0:n.confirmDelete)?M("go_or_cancel",(()=>`${p("delete")}?`),(()=>[X("L",p("cancel"),(()=>n.confirmDelete=null)),X("q",p("delete"),(()=>n.delete()))]),!0,(()=>{n.confirmDelete=null,o()})):null;var n;return S.free(t,e,null,s)}};export default Z;