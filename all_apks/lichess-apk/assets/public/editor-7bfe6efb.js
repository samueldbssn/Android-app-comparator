import{a5 as e,m as t,q as o,C as n,w as s,r as i,bd as a,be as r,a2 as c,cj as l,ck as h,cl as u,b3 as d,g,a9 as p,c8 as m,cm as v,aa as f,cc as b,cd as k,aJ as w,aN as F,bX as y,s as C,aL as P,G as O,aM as _}from"./main.js";import{l as E}from"./layout-e08f9316.js";import"./fen-f2d95e2d.js";import{B as T}from"./Board-0a9e6a9d.js";import{S}from"./index-c282ab51.js";import{c as x,s as N,C as U}from"./variant-1fcc5716.js";var j={controller(e){let t=!1;function o(e){"backbutton"!==e&&t&&s.backbutton.stack.pop(),t=!1}return{open:function(){s.backbutton.stack.push(o),t=!0},close:o,isOpen:()=>t,root:e}},view:o=>e("editorMenu",void 0,(()=>function(e){return t("div.editorMenu",[q(e),L(e)])}(o.root)),o.isOpen(),o.close)};function q(e){const n=e.getFen();return t("div.editorSelectors",[t("div.select_input",[t("select.positions",{id:"select_editor_positions",onchange(t){e.loadNewFen(t.target.value)}},[B(o("setTheBoard"),[A(n,{name:`-- ${o("popularOpenings")} --`,fen:"",eco:""}),e.extraPositions.map((e=>A(n,e)))]),B(o("popularOpenings"),e.positions.map((e=>A(n,e,!0))))])]),t("div.select_input",[t("select.positions",{id:"select_editor_endgames",onchange(t){e.loadNewFen(t.target.value)}},[A(n,{name:`-- ${o("endgame")} --`,fen:"",eco:""}),B(o("endgame"),e.endgamesPositions.map((e=>A(n,e))))])]),t("div.select_input",[t("select",{id:"select_editor_color",value:e.turn,onchange(t){e.setTurn(t.target.value)}},[t("option[value=white]",o("whitePlays")),t("option[value=black]",o("blackPlays"))])])])}function L(e){return t("div.editor-castling",[t("h3",o("castling")),t("div.form-multipleChoice",[R(e,"K",o("whiteCastlingKingside")),R(e,"Q",o("O-O-O"))]),t("div.form-multipleChoice",[R(e,"k",o("blackCastlingKingside")),R(e,"q",o("O-O-O"))])])}function R(e,o,s){return t("div",{className:e.castlingToggles[o]?"selected":"",oncreate:n((()=>e.setCastlingToggle(o,!e.castlingToggles[o])))},s)}function A(e,o,n=!1){return t("option",{value:o.fen,selected:e===o.fen},(n?o.eco+" ":"")+o.name)}function B(e,o){return t("optgroup",{label:e},o)}var K={controller(e){const t={isOpen:!1,fenError:null};function o(e){"backbutton"!==e&&t.isOpen&&s.backbutton.stack.pop(),t.isOpen=!1}return{open:function(){s.backbutton.stack.push(o),t.isOpen=!0,t.fenError=null},close:o,isOpen:()=>t.isOpen,root:e,data:t}},view:n=>e("pasteFenPopup",void 0,(()=>t("form",{onsubmit(e){e.preventDefault();const t=e.target[0].value;if(t&&t.length){n.root.loadNewFen(t)?(n.data.fenError=null,n.close()):n.data.fenError=o("invalidFen"),i()}}},[t("input[type=text]",{placeholder:o("pasteTheFenStringHere")}),n.data.fenError?t("div.error",n.data.fenError):null,t("button[data-icon=E].withIcon.popupAction",o("loadPosition"))])),n.isOpen(),n.close)};const I=["K","Q","k","q"];class D{constructor(e){this.turn="white",this.castlingToggles={K:!1,Q:!1,k:!1,q:!1},this.rules="chess",this.halfmoves=0,this.fullmoves=0,this.positions=[],this.endgamesPositions=[],this.extraPositions=[],this.onChange=()=>{const e=this.getFen(),t=`/editor/${encodeURIComponent(e)}`;window.history.replaceState(window.history.state,"","?="+t),i()},this.onstart=e=>function(e,t){if(t.touches&&t.touches.length>1)return;const o=t.target.getAttribute("data-role"),n=t.target.getAttribute("data-color");if(!o||!n)return;t.stopPropagation(),t.preventDefault();const s={role:o,color:n};e.chessground.dragNewPiece(t,s,!0)}(this,e),this.onmove=e=>a(this.chessground,e),this.onend=e=>r(this.chessground,e),this.editorOnCreate=e=>{if(!e.dom)return;const t=document.getElementById("boardEditor");t&&(t.addEventListener("touchstart",this.onstart),t.addEventListener("touchmove",this.onmove),t.addEventListener("touchend",this.onend))},this.editorOnRemove=()=>{const e=document.getElementById("boardEditor");e&&(e.removeEventListener("touchstart",this.onstart),e.removeEventListener("touchmove",this.onmove),e.removeEventListener("touchend",this.onend))},this.loadNewFen=e=>this.setFen(e),this.goToAnalyse=()=>{const e=this.getState();e.legalFen&&s.set(this.makeAnalysisUrl(e.legalFen))},this.continueFromHere=()=>{const e=this.getState();e.legalFen&&e.playable?this.continuePopup.open(e.legalFen,"standard"):c.show({text:o("invalidFen"),position:"center",duration:"short"})},this.initFen=e||l,this.menu=j.controller(this),this.pasteFenPopup=K.controller(this),this.continuePopup=x.controller(),this.extraPositions=[{fen:l,name:o("startPosition"),eco:""},{fen:h,name:o("clearBoard"),eco:""}],Promise.all([u("data/positions.json"),u("data/endgames.json")]).then((([e,t])=>{this.positions=e.reduce(((e,t)=>e.concat(t.positions)),[]),this.endgamesPositions=t,i()})),this.chessground=new d({fen:this.initFen,orientation:"white",movable:{free:!0,color:"both"},highlight:{lastMove:!1,check:!1},animation:{duration:300},premovable:{enabled:!1},draggable:{magnified:g.game.magnified(),deleteOnDropOff:!0},events:{change:this.onChange}}),this.setFen(this.initFen)}bottomColor(){return this.chessground?this.chessground.state.orientation:"white"}setCastlingToggle(e,t){this.castlingToggles[e]!==t&&(this.unmovedRooks=void 0),this.castlingToggles[e]=t,this.onChange()}setTurn(e){this.turn=e,this.onChange()}castlingToggleFen(){let e="";for(const t of I)this.castlingToggles[t]&&(e+=t);return e}getSetup(){const e=this.chessground?this.chessground.getFen():this.initFen,t=p(e).unwrap((e=>e.board),(()=>m.empty()));return{board:t,pockets:this.pockets,turn:this.turn,unmovedRooks:this.unmovedRooks||v(t,this.castlingToggleFen()).unwrap(),epSquare:this.epSquare,remainingChecks:this.remainingChecks,halfmoves:this.halfmoves,fullmoves:this.fullmoves}}getFen(){return f(this.getSetup(),{promoted:"crazyhouse"===this.rules})}getLegalFen(){return N(this.rules,this.getSetup()).unwrap((e=>f(e.toSetup(),{promoted:"crazyhouse"===e.rules})),(()=>{}))}isPlayable(){return N(this.rules,this.getSetup()).unwrap((e=>!e.isEnd()),(()=>!1))}getState(){return{fen:this.getFen(),legalFen:this.getLegalFen(),playable:"chess"===this.rules&&this.isPlayable()}}makeAnalysisUrl(e){switch(this.rules){case"chess":return this.makeUrl("/analyse/fen/",e);case"3check":return this.makeUrl("/analyse/variant/threeCheck/fen/",e);case"kingofthehill":return this.makeUrl("/analyse/variant/kingOfTheHill/fen/",e);case"racingkings":return this.makeUrl("/analyse/variant/racingKings/fen/",e);case"antichess":case"atomic":case"horde":case"crazyhouse":return this.makeUrl(`/analyse/variant/${this.rules}/fen/`,e)}}makeUrl(e,t){return e+encodeURIComponent(t)}setFen(e){return p(e).unwrap((t=>{this.chessground&&this.chessground.set({fen:e}),this.pockets=t.pockets,this.turn=t.turn,this.unmovedRooks=t.unmovedRooks,this.epSquare=t.epSquare,this.remainingChecks=t.remainingChecks,this.halfmoves=t.halfmoves,this.fullmoves=t.fullmoves;const o=U.fromSetup(t);return this.castlingToggles.K=void 0!==o.rook.white.h,this.castlingToggles.Q=void 0!==o.rook.white.a,this.castlingToggles.k=void 0!==o.rook.black.h,this.castlingToggles.q=void 0!==o.rook.black.a,this.onChange(),!0}),(()=>!1))}setRules(e){this.rules=e,"crazyhouse"!==e?this.pockets=void 0:this.pockets||(this.pockets=b.empty()),"3check"!==e?this.remainingChecks=void 0:this.remainingChecks||(this.remainingChecks=k.default()),this.onChange()}}function H(e,o,n){return t("div",{className:["sparePieces",n,"orientation-"+o,e].join(" ")},t("div.sparePiecesInner",["king","queen","rook","bishop","knight","pawn"].map((o=>t("div.sparePiece",t("piece",{className:e+" "+o,"data-color":e,"data-role":o}))))))}function z(e){const s=e.getState();return t("section.actions_bar",[w()||!y()?t("button.action_bar_button.fa.fa-gear",{oncreate:n(e.menu.open)}):null,t("button.action_bar_button[data-icon=B]",{oncreate:n(e.chessground.toggleOrientation)}),t("button.action_bar_button[data-icon=U]",{disabled:!s.playable,oncreate:n(e.continueFromHere,(()=>c.show({text:o("continueFromHere"),duration:"short",position:"bottom"})))}),t("button.action_bar_button[data-icon=A]",{disabled:void 0===s.legalFen,oncreate:n(e.goToAnalyse,(()=>c.show({text:o("analysis"),duration:"short",position:"bottom"})))}),t("button.action_bar_button.fa.fa-upload",{oncreate:n(e.pasteFenPopup.open,(()=>c.show({text:o("loadAPositionFromFen"),duration:"short",position:"bottom"})))}),t("button.action_bar_button.fa.fa-share-alt",{oncreate:n((()=>S.share({text:e.getLegalFen()})),(()=>c.show({text:"Share FEN",duration:"short",position:"bottom"})))})])}const M={oninit({attrs:e}){C.createDefault(),P(),this.editor=new D(e.fen)},oncreate:O,onremove(){_()},view(){return function(e){const n=e.chessground.state.orientation,s="white"===n?"black":"white",i=w(),a=t(T,{variant:"standard",chessground:e.chessground,wrapperClasses:"editor-board"});return E.board(F(o("boardEditor")),[a,t("div.editor-wrapper",[t("div#boardEditor.editor-table.box",{className:g.general.theme.piece(),oncreate:e.editorOnCreate,onremove:e.editorOnRemove},[t("div.editor-piecesDrawer",[H(s,n,"top"),H(n,n,"bottom")]),!i&&y()?t("div.editor-menu",[q(e),L(e)]):null]),z(e)])],void 0,[j.view(e.menu),x.view(e.continuePopup),K.view(e.pasteFenPopup)])}(this.editor)}};export default M;