import{b6 as t,b7 as e,T as o,a2 as a,q as n,f as s,d as r,r as i,w as c,b1 as h,b2 as d,m as u,C as l,af as p,D as g,b4 as m,g as v,b8 as b,b9 as f}from"./main.js";function w(t){return s(t.data.url.round)}function k(o,a=!1){return t(`/game/export/${o}${a?"?evals=0&clocks=0":"?literate=1"}`,{headers:{Accept:"application/x-chess-pgn, text/*","X-Requested-With":"__delete",[e]:"__delete"},credentials:"omit"},!0)}function x(t,e){return s("/api/crosstable/"+t+"/"+e,{cache:"reload"})}class y{constructor(e){var s;this.syncNotes=r((e=>{const s=e.target.value;var r,c;this.data.note!==s&&(r=this.data.game.id,c=s,t(`/${r}/note`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Accept:"application/json, text/*"},body:o({text:c})},!1).catch((t=>{throw a.show({text:n("notesSynchronizationHasFailed"),duration:"short"}),t}))).then((()=>{this.data.note=s,i()}))}),1e3),this.open=()=>{c.backbutton.stack.push(h(this.close,"notes")),this.showing=!0},this.close=t=>{d.hide(),"backbutton"!==t&&this.showing&&c.backbutton.stack.pop(),this.showing=!1},this.syncing=!0,this.data=e,this.showing=!1,this.inputValue="",(s=e.game.id,t(`/${s}/note`)).then((t=>{this.data.note=t,this.syncing=!1,i()})).catch((()=>{this.syncing=!1,i(),a.show({text:"Could not read notes from server.",position:"bottom",duration:"short"})}))}}function C(t){return t.showing?u("div#notes.modal",{oncreate:m},[u("header",[u("button.modal_close",{oncreate:l(h(t.close,"notes"))},p),u("h2",n("notes"))]),u("div.modal_content",[t.syncing?u("div.notesTextarea.loading",g.getVdom()):u("textarea#notesTextarea.native_scroller",{placeholder:n("typePrivateNotesHere"),oninput:t.syncNotes,value:t.data.note})])]):null}const N=["pawn","knight","bishop","rook","queen"],T={oninit(t){const{ctrl:e}=t.attrs,o=t=>function(t,e){if(e.touches&&e.touches.length>1)return;if(!t.canDrop())return;const o=e.target.getAttribute("data-role"),a=e.target.getAttribute("data-color"),n=e.target.getAttribute("data-nb");if(!o||!a||"0"===n)return;if(!function(t,e){return t.movable.color===e&&(t.turnColor===e||t.predroppable.enabled)}(t.chessground.state,a))return;e.stopPropagation(),e.preventDefault();const s={role:o,color:a};t.chessground.dragNewPiece(e,s)}(e,t),a=t=>b(e.chessground,t),n=t=>f(e.chessground,t);this.pocketOnCreate=function(t){const e=t.dom;e.addEventListener("touchstart",o),e.addEventListener("touchmove",a),e.addEventListener("touchend",n)},this.pocketOnRemove=function(t){const e=t.dom;e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",a),e.removeEventListener("touchend",n)}},view(t){const{crazyData:e,position:o,color:a,customPieceTheme:n}=t.attrs,s=e.pockets["white"===a?0:1],r=[n||v.general.theme.piece(),"pocket",o||""].join(" ");return u("div",{className:r,oncreate:this.pocketOnCreate,onremove:this.pocketOnRemove},N.map((t=>u("piece",{"data-role":t,"data-color":a,"data-nb":s[t]||0,className:t+" "+a}))))}};export{T as C,y as N,x as a,k as g,C as n,w as r};