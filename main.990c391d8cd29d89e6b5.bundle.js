webpackJsonp([1],{"+h1B":function(t,n,r){"use strict";var e=r("/oeL"),o=r("aR8+"),a=r("wQAS"),i=r("q4dy"),u=r("qbdv"),l=r("fc+i");r.d(n,"a",function(){return c});var c=e.b(o.a,[a.a],function(t){return e.c([e.d(512,e.e,e.f,[[8,[i.a]],[3,e.e],e.g]),e.d(5120,e.h,e.i,[[3,e.h]]),e.d(4608,u.a,u.b,[e.h]),e.d(4608,e.j,e.j,[]),e.d(5120,e.k,e.l,[]),e.d(5120,e.m,e.n,[]),e.d(5120,e.o,e.p,[]),e.d(4608,l.b,l.c,[l.d]),e.d(6144,e.q,null,[l.b]),e.d(4608,l.e,l.f,[]),e.d(5120,l.g,function(t,n,r,e){return[new l.h(t),new l.i(n),new l.j(r,e)]},[l.d,l.d,l.d,l.e]),e.d(4608,l.k,l.k,[l.g,e.r]),e.d(135680,l.l,l.l,[l.d]),e.d(4608,l.m,l.m,[l.k,l.l]),e.d(6144,e.s,null,[l.m]),e.d(6144,l.n,null,[l.l]),e.d(4608,e.t,e.t,[e.r]),e.d(4608,l.o,l.o,[l.d]),e.d(4608,l.p,l.p,[l.d]),e.d(512,u.c,u.c,[]),e.d(1024,e.u,l.q,[]),e.d(1024,e.v,function(t,n){return[l.r(t,n)]},[[2,l.s],[2,e.w]]),e.d(512,e.x,e.x,[[2,e.v]]),e.d(131584,e.y,e.y,[e.r,e.z,e.A,e.u,e.e,e.x]),e.d(2048,e.B,null,[e.y]),e.d(512,e.C,e.C,[e.B]),e.d(512,l.t,l.t,[[3,l.t]]),e.d(512,o.a,o.a,[])])})},0:function(t,n,r){t.exports=r("cDNt")},"14Se":function(t,n,r){"use strict";var e=r("dU77");r.d(n,"a",function(){return o});var o=function(){function t(t){this.visitCount=0,this.winScore=0,this.board=t?e.a.clone(t):new e.a}return t.clone=function(n){var r=new t;return r.board=e.a.clone(n.board),r.playerNo=n.playerNo,r.visitCount=n.visitCount,r.winScore=n.winScore,r.move=n.move,r},t.prototype.getOpponent=function(){return 3-this.playerNo},t.prototype.getAllPossibleStates=function(){var n=this;return this.board.getEmptyPositions().map(function(r){var o=3-n.playerNo,a=e.a.clone(n.board);a.performMove(o,r);var i=new t(a);return i.playerNo=o,i.move=r,i})},t.prototype.incrementVisit=function(){this.visitCount++},t.prototype.addScore=function(t){this.winScore!==Number.NEGATIVE_INFINITY&&(this.winScore+=t)},t.prototype.randomPlay=function(){var t=this.board.getEmptyPositions(),n=t.length,r=Math.floor(Math.random()*(n-1+1));this.board.performMove(this.playerNo,t[r])},t.prototype.togglePlayer=function(){this.playerNo=3-this.playerNo},t}()},"495J":function(t,n,r){"use strict";var e=r("14Se");r.d(n,"a",function(){return o});var o=function(){function t(t){this.childArray=[],this.state=t?e.a.clone(t):new e.a}return t.clone=function(n){var r=new t(n.state);return r.childArray=n.childArray.map(function(t){return t}),n.parent&&(r.parent=n.parent),r},t.getRandomInt=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},t.prototype.getRandomChildNode=function(){var n=this.childArray.length,r=t.getRandomInt(0,n-1);return this.childArray[r]},t.prototype.getChildWithMaxScore=function(){var t=this.childArray[0];return this.childArray.forEach(function(n){t.state.visitCount<n.state.visitCount&&(t=n)}),t},t}()},EP7b:function(t,n,r){"use strict";var e=r("495J");r.d(n,"a",function(){return o});var o=function(){function t(t){void 0===t&&(t=new e.a),this.root=t}return t}()},NhKt:function(t,n,r){"use strict";r.d(n,"a",function(){return e});var e=[".field[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);grid-gap:4px;grid-auto-rows:1fr;background:#000;width:400px;height:400px}.cell[_ngcontent-%COMP%]{background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;font-size:64px}"]},Py8V:function(t,n,r){"use strict";r.d(n,"a",function(){return e});var e=function(){function t(){}return t.uctValue=function(t,n,r){return void 0===n&&(n=0),0===r?Number.POSITIVE_INFINITY:n/r+1.41*Math.sqrt(Math.log(t)/r)},t.findBestNodeWithUCT=function(n){var r=n.state.visitCount,e=n.childArray[0];return n.childArray.forEach(function(n){t.uctValue(r,e.state.winScore,e.state.visitCount)<t.uctValue(r,n.state.winScore,n.state.visitCount)&&(e=n)}),e},t}()},"aR8+":function(t,n,r){"use strict";r.d(n,"a",function(){return e});var e=function(){function t(){}return t}()},cDNt:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r("/oeL"),o=r("p5Ee"),a=r("+h1B"),i=r("fc+i");o.a.production&&r.i(e.a)(),r.i(i.a)().bootstrapModuleFactory(a.a)},dU77:function(t,n,r){"use strict";r.d(n,"a",function(){return e});var e=function(){function t(){this.boardValues=Array.from({length:9}).fill(0)}return t.clone=function(n){var r=new t;return r.boardValues=n.boardValues.map(function(t){return t}),r},t.prototype.performMove=function(t,n){this.boardValues[n]=t},t.prototype.checkStatus=function(){var n=[this.boardValues[0],this.boardValues[4],this.boardValues[8]],r=[this.boardValues[2],this.boardValues[4],this.boardValues[6]],e=t.checkForWin(n);if(0!==e)return e;var o=t.checkForWin(r);if(0!==o)return o;for(var a=0;a<3;a++){var i=[this.boardValues[a],this.boardValues[a+3],this.boardValues[a+6]],u=t.checkForWin(i);if(0!==u)return u}for(var a=0;a<9;a+=3){var l=[this.boardValues[a],this.boardValues[a+1],this.boardValues[a+2]],c=t.checkForWin(l);if(0!==c)return c}return this.getEmptyPositions().length>0?t.IN_PROGRESS:t.DRAW},t.checkForWin=function(t){for(var n=!0,r=t.length,e=t[0],o=0;o<r;o++){if(e!==t[o]){n=!1;break}e=t[o]}return n?e:0},t.prototype.getEmptyPositions=function(){for(var t=this.boardValues.length,n=[],r=0;r<t;r++)0===this.boardValues[r]&&n.push(r);return n},t.prototype.printBoard=function(){for(var t=this.boardValues.length,n=0;n<t;n++){for(var r="",e=0;e<t;e++)r+=this.boardValues[3*n+e]+" ";console.log(r)}},t.prototype.printStatus=function(){switch(this.checkStatus()){case t.P1:console.log("Player 1 wins");break;case t.P2:console.log("Player 2 wins");break;case t.DRAW:console.log("Game Draw");break;case t.IN_PROGRESS:console.log("Game In progress")}},t}();e.DEFAULT_BOARD_SIZE=3,e.IN_PROGRESS=-1,e.DRAW=0,e.P1=1,e.P2=2},hepG:function(t,n,r){"use strict";var e=r("14Se");r.d(n,"a",function(){return o});var o=function(){function t(t){this.childArray=[],this.state=t?e.a.clone(t):new e.a}return t.clone=function(n){var r=new t(n.state);return r.childArray=n.childArray.map(function(t){return t}),n.parent&&(r.parent=n.parent),r},t.getRandomInt=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},t.prototype.getRandomChildNode=function(){var n=this.childArray.length,r=t.getRandomInt(0,n-1);return this.childArray[r]},t.prototype.getChildWithMaxScore=function(){var t=this.childArray[0];return this.childArray.forEach(function(n){t.state.visitCount<n.state.visitCount&&(t=n)}),t},t}()},p5Ee:function(t,n,r){"use strict";r.d(n,"a",function(){return e});var e={production:!0}},q4dy:function(t,n,r){"use strict";function e(t){return u._12(0,[(t()(),u._13(0,null,null,1,"div",[["class","cell"]],null,[[null,"click"]],function(t,n,r){var e=!0,o=t.component;if("click"===n){e=!1!==o.handleClick(t.context.index)&&e}return e},null,null)),(t()(),u._14(null,["",""]))],null,function(t,n){t(n,1,0,n.component.formatCell(n.context.$implicit))})}function o(t){return u._12(0,[(t()(),u._13(0,null,null,4,"div",[["class","field"]],null,null,null,null,null)),(t()(),u._14(null,["\n  "])),(t()(),u._15(16777216,null,null,1,null,e)),u._16(802816,null,0,l.f,[u._2,u._3,u.m],{ngForOf:[0,"ngForOf"]},null),(t()(),u._14(null,["\n"])),(t()(),u._14(null,["\n"]))],function(t,n){t(n,3,0,n.component.board.boardValues)},null)}function a(t){return u._12(0,[(t()(),u._13(0,null,null,1,"app-root",[],null,null,null,o,d)),u._16(49152,null,0,c.a,[],null,null)],null,null)}var i=r("NhKt"),u=r("/oeL"),l=r("qbdv"),c=r("wQAS");r.d(n,"a",function(){return f});var s=[i.a],d=u._11({encapsulation:0,styles:s,data:{}}),f=u._17("app-root",c.a,a,{},{},[])},qT4i:function(t,n,r){"use strict";var e=r("dU77"),o=r("EP7b"),a=r("hepG"),i=r("Py8V");r.d(n,"a",function(){return u});var u=function(){function t(){this.level=3}return t.prototype.getMillisForCurrentLevel=function(){return 2*(this.level-1)+1},t.prototype.findNextMove=function(t,n){var r=Date.now().valueOf(),a=r+60*this.getMillisForCurrentLevel();this.opponent=3-n;var i=new o.a,u=i.root;for(u.state.board=t,u.state.playerNo=this.opponent;Date.now().valueOf()<a;){var l=this.selectPromisingNode(u);l.state.board.checkStatus()===e.a.IN_PROGRESS&&this.expandNode(l);var c=l;l.childArray.length>0&&(c=l.getRandomChildNode());var s=this.simulateRandomPlayout(c);this.backPropagation(c,s)}var d=u.getChildWithMaxScore();return console.log("wwwwwwwwwww",d.state.move),i.root=d,d.state.move},t.prototype.selectPromisingNode=function(t){for(var n=t;n.childArray.length;)n=i.a.findBestNodeWithUCT(n);return n},t.prototype.expandNode=function(t){t.state.getAllPossibleStates().forEach(function(n){var r=new a.a(n);r.parent=t,r.state.playerNo=t.state.getOpponent(),t.childArray.push(r)})},t.prototype.backPropagation=function(n,r){for(var e=n;e;)e.state.incrementVisit(),e.state.playerNo===r&&e.state.addScore(t.WIN_SCORE),e=e.parent},t.prototype.simulateRandomPlayout=function(t){var n=a.a.clone(t),r=n.state,o=r.board.checkStatus();if(o===this.opponent)return n.parent.state.winScore=Number.NEGATIVE_INFINITY,o;for(;o===e.a.IN_PROGRESS;)r.togglePlayer(),r.randomPlay(),o=r.board.checkStatus();return o},t}();u.WIN_SCORE=10},qtrl:function(t,n){function r(t){throw new Error("Cannot find module '"+t+"'.")}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id="qtrl"},wQAS:function(t,n,r){"use strict";var e=r("dU77"),o=r("qT4i");r.d(n,"a",function(){return a});var a=function(){function t(){this.board=new e.a,this.mcts=new o.a,this.mcts.level=3,this.board.printStatus()}return t.prototype.handleClick=function(t){if(this.board.checkStatus()===e.a.IN_PROGRESS&&(this.board.performMove(e.a.P1,t),this.board.checkStatus()===e.a.IN_PROGRESS)){var n=this.mcts.findNextMove(this.board,e.a.P2);this.board.performMove(e.a.P2,n)}},t.prototype.formatCell=function(t){return 1===t?"x":2===t?"o":""},t.ctorParameters=function(){return[]},t}()}},[0]);