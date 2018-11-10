(function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/personal-timeline-game/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0dbb":function(e,t,n){"use strict";var a=n("6653"),r=n.n(a);r.a},"0dfc":function(e,t,n){e.exports=n.p+"img/carte-saltimbanque.b1426689.jpg"},"10c9":function(e,t,n){e.exports=n.p+"img/carte-papa.41faf21e.png"},"13f4":function(e,t,n){e.exports=n.p+"img/carte-le-randonneur.2eaf9207.jpg"},"1ca4":function(e,t,n){"use strict";var a=n("e964"),r=n.n(a);r.a},"24c8":function(e,t,n){e.exports=n.p+"img/carte-bricoleur.e70026bf.jpg"},"4bbf":function(e,t,n){e.exports=n.p+"img/carte-papy.492aa083.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("board")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[n("div",{staticClass:"timeline__wrapper"},[n("div",{staticClass:"timeline__area"},[0===e.game.board.length?n("span",[e._v("Déposes ta première carte ici")]):e._e()]),n("draggable",{staticClass:"timeline",attrs:{options:{group:{name:"timeline",pull:!1,put:"desk"},sort:!1,fallbackOnBody:!0}},on:{add:e.checkMove},model:{value:e.game.board,callback:function(t){e.$set(e.game,"board",t)},expression:"game.board"}},e._l(e.game.board,function(e,t){return n("div",{key:t,staticClass:"event"},[n("card",{attrs:{event:e,width:"140px",height:"220px"}})],1)}))],1),n("div",{staticClass:"desk__wrapper"},[e.game.desk.length>0?n("div",{staticClass:"desk"},[n("button",{on:{click:function(t){e.game.toPrevCardOfTheDeck()}}},[e._v("Image précedente")]),n("draggable",{attrs:{options:{group:{name:"desk",pull:"timeline",put:!1}}},model:{value:e.topOfTheDesk,callback:function(t){e.topOfTheDesk=t},expression:"topOfTheDesk"}},e._l(e.topOfTheDesk,function(e,t){return n("card",{attrs:{event:e,"enabled-date":!1,width:"140px",height:"220px",draggable:!0}})})),n("button",{on:{click:function(t){e.game.toNextCardOfTheDeck()}}},[e._v("Image suivante")])],1):n("div",{staticClass:"end__message"},[n("h1",[e._v("🏆 Fin du jeu ! 🏆")]),n("h2",[e._v("Bravo, tu as reussi à remettre un peu d'ordre dans tes souvenirs")])])]),n("call-chantal"),n("modal",{attrs:{name:"success"}},[n("div",{staticClass:"content success__content",on:{click:function(t){e.$modal.pop()}}},[n("h1",{staticClass:"title"},[e._v("✅ Bien joué ! 👌")]),e.lastCardPlay?n("card",{attrs:{event:e.lastCardPlay,"enable-preview":!1,width:"420px",height:"660px"}}):e._e(),n("span",{staticClass:"text"},[e._v("*Clique n'importe où pour revenir au jeu")])],1)]),n("modal",{attrs:{name:"error"}},[n("div",{staticClass:"content error__content",on:{click:function(t){e.$modal.pop()}}},[n("h1",{staticClass:"title"},[e._v("❌ Il semblerait que tu te sois trompé, recommence ! ❌")]),e.lastCardPlay?n("card",{attrs:{event:e.lastCardPlay,"enabled-date":!1,"enable-preview":!1,width:"420px",height:"660px"}}):e._e(),n("span",{staticClass:"text"},[e._v("*Clique n'importe où pour revenir au jeu")])],1)]),0===e.game.desk.length?n("confetti-canvas"):e._e()],1)},o=[],l=[{title:"Le Bricoleur",year:"2016",pictureUrl:n("24c8")},{title:"Le Caviste",year:"2012",pictureUrl:n("9586")},{title:"En Famille",year:"2002",pictureUrl:n("6041")},{title:"L'Engagé",year:"1993",pictureUrl:n("ebad")},{title:"Le Fils",year:"1962",pictureUrl:n("d7db")},{title:"L'Amoureux",year:"1983",pictureUrl:n("ae87")},{title:"Le Photographe",year:"2007",pictureUrl:n("863c")},{title:"Le Randonneur",year:"1995",pictureUrl:n("13f4")},{title:"Le Papa",year:"2005",pictureUrl:n("10c9")},{title:"Le Papi",year:"2018",pictureUrl:n("4bbf")},{title:"Le Saltinbanque",year:"1977",pictureUrl:n("0dfc")},{title:"Le Sportif",year:"1986",pictureUrl:n("7db7")}],c=(n("55dd"),n("c665")),u=n("aa9a"),d=function(){function e(t,n){Object(c["a"])(this,e),this.events=this.initializeEvents(t),this.shuffelisedEvents=this.shuffle(this.events.map(function(e,t){return t})),this.topOfTheDeskIndex=0,this.selectedInterval=null,this.board=[],this.rounds=0,this.fails=0,this.successCallback=n?n.onSuccess:void 0,this.errorCallback=n?n.onError:void 0}return Object(u["a"])(e,[{key:"initializeEvents",value:function(e){return this.orderByDate(e).map(function(e,t){return e.onBoard=!1,e.id=t,e})}},{key:"orderByDate",value:function(e){return e.sort(function(e,t){return e.year-t.year})}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.topOfTheDesk,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selectedInterval;this.rounds++,this.eventCanBePutThere(e,t)?(this.onSuccess(e),this.selectedInterval=null,this.events[e.id].onBoard=!0,this.board.splice(t,0,e)):(this.onError(e),this.fails++)}},{key:"getInterval",value:function(e){return{MIN:this.board[e-1]?this.board[e-1].year:this.events[0].year,MAX:this.board[e]?this.board[e].year:this.events[this.events.length-1].year}}},{key:"eventCanBePutThere",value:function(e,t){var n=this.getInterval(t);return e.year>=n.MIN&&e.year<=n.MAX}},{key:"toNextCardOfTheDeck",value:function(){this.selectedInterval=null,this.topOfTheDeskIndex<this.desk.length-1?this.topOfTheDeskIndex++:this.topOfTheDeskIndex=0}},{key:"toPrevCardOfTheDeck",value:function(){this.selectedInterval=null,this.topOfTheDeskIndex>0?this.topOfTheDeskIndex--:this.topOfTheDeskIndex=this.desk.length-1}},{key:"onSuccess",value:function(e){return this.successCallback?this.successCallback(e):this.onSuccessDefault()}},{key:"onSuccessDefault",value:function(){console.log("Well done !")}},{key:"onError",value:function(e){return this.errorCallback?this.errorCallback(e):this.onErrorDefault()}},{key:"onErrorDefault",value:function(){console.log("Nop ! try again ..."),window.alert("Fail !")}},{key:"shuffle",value:function(e){var t=e.length;while(t>0){var n=Math.floor(Math.random()*t);t--;var a=e[t];e[t]=e[n],e[n]=a}return e}},{key:"desk",get:function(){var e=this;return this.shuffelisedEvents.map(function(t){return e.events[t]}).filter(function(e){return!e.onBoard})}},{key:"topOfTheDesk",get:function(){return this.topOfTheDeskIndex>this.desk.length-1&&(this.topOfTheDeskIndex=0),this.desk[this.topOfTheDeskIndex]}}]),e}(),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{attrs:{id:"confetti-holder"}})},f=[],h=(n("ba27"),{target:"confetti-holder",max:"408",size:"1",animate:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"25",rotate:!0}),v={data:function(){return{confetti:null}},mounted:function(){this.confetti=new ConfettiGenerator(h),this.confetti.render()}},g=v,b=(n("1ca4"),n("2877")),m=Object(b["a"])(g,p,f,!1,null,null,null);m.options.__file="ConffetiCanvas.vue";var _=m.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"call__chantal",class:{blink:e.blink,using:e.using,used:e.used},on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[!e.hover&&!e.using||e.used?e._e():n("div",{staticClass:"dropdown__wrapper"},[n("div",{staticClass:"dropdown"},[n("h4",[e._v("📞 L'appel à Chantal")]),e.using?e._e():n("button",{on:{click:e.use}},[e._v("Utiliser")]),e.using?n("span",[e._v(e._s(e.timer>0?"Encore "+e.timer+" secondes ...":"fini ..."))]):e._e()])]),n("div",{staticClass:"chantal__button"})])},y=[],C={data:function(){return{hover:!1,using:!1,timer:60,used:!1}},computed:{blink:function(){return this.timer%2===0&&60!==this.timer&&0!==this.timer}},methods:{use:function(){var e=this;this.using=!0;var t=setInterval(function(){0===e.timer?(clearInterval(t),setTimeout(function(){e.using=!1,e.used=!0},3e3)):e.timer--},1e3)}}},x=C,O=(n("e28d"),Object(b["a"])(x,k,y,!1,null,"a86ff464",null));O.options.__file="CallChantal.vue";var w=O.exports,D=n("1516"),j=n.n(D),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event__card",class:{draggable:e.draggable},style:[e.background,{width:e.width,height:e.height}]},[e.enabledDate?n("span",{staticClass:"event__card__date"},[e._v(e._s(e.event.year))]):e._e(),n("span",{staticClass:"event__card__title"},[e._v(e._s(e.event.title))]),e.enablePreview?n("div",{staticClass:"event__cart__showmore__button",on:{click:function(t){e.bigMode=!0}}},[n("div",{staticClass:"text"},[e._v("Afficher en grand")])]):e._e(),e.bigMode?n("div",{staticClass:"big__card__wrapper",on:{click:function(t){e.bigMode=!1}}},[n("div",{staticClass:"big__card"},[n("img",{attrs:{src:e.event.pictureUrl}}),n("span",{staticClass:"text"},[e._v("*Clique n'importe où pour revenir au jeu")])])]):e._e()])},I=[],P={props:{event:{type:Object,required:!0},enabledDate:{type:Boolean,default:!0},enablePreview:{type:Boolean,default:!0},width:{type:String,default:"auto"},height:{type:String,default:"auto"},draggable:{type:Boolean,default:!1}},data:function(){return{bigMode:!1}},computed:{background:function(){return{backgroundImage:"url(".concat(this.event.pictureUrl,")")}}}},E=P,S=(n("0dbb"),Object(b["a"])(E,T,I,!1,null,"d1baf8aa",null));S.options.__file="Card.vue";var B=S.exports,M={components:{Card:B,CallChantal:w,Draggable:j.a,ConfettiCanvas:_},data:function(){return{game:new d(l,{onSuccess:this.onSuccess,onError:this.onError}),lastCardPlay:null}},computed:{topOfTheDesk:{get:function(){return[this.game.topOfTheDesk]},set:function(e){}}},methods:{checkMove:function(e){this.game.board.splice(e.newIndex,1),this.game.play(this.game.topOfTheDesk[0],e.newIndex)},onSuccess:function(e){this.lastCardPlay=e,this.$modal.push("success")},onError:function(e){this.lastCardPlay=e,this.$modal.push("error")}}},U=M,L=(n("920f"),Object(b["a"])(U,s,o,!1,null,null,null));L.options.__file="Board.vue";var $=L.exports,q={components:{Board:$},name:"app"},A=q,N=(n("7c55"),Object(b["a"])(A,r,i,!1,null,null,null));N.options.__file="App.vue";var F=N.exports,z=n("95a5");n("7d35");a["a"].config.productionTip=!1,a["a"].use(z["a"]),new a["a"]({render:function(e){return e(F)}}).$mount("#app")},"5c48":function(e,t,n){},6041:function(e,t,n){e.exports=n.p+"img/carte-enfamille.f599087e.jpg"},6653:function(e,t,n){},"7c55":function(e,t,n){"use strict";var a=n("5c48"),r=n.n(a);r.a},"7db7":function(e,t,n){e.exports=n.p+"img/carte-sportif.62af2ef2.png"},"863c":function(e,t,n){e.exports=n.p+"img/carte-le-photographe.ca15111c.jpg"},"920f":function(e,t,n){"use strict";var a=n("b9c7"),r=n.n(a);r.a},9586:function(e,t,n){e.exports=n.p+"img/carte-lecaviste.145bb98c.png"},ae87:function(e,t,n){e.exports=n.p+"img/carte-l_amoureux.82d96eba.png"},b9c7:function(e,t,n){},d7db:function(e,t,n){e.exports=n.p+"img/carte-fils.d755065d.jpg"},e28d:function(e,t,n){"use strict";var a=n("f017"),r=n.n(a);r.a},e964:function(e,t,n){},ebad:function(e,t,n){e.exports=n.p+"img/carte-engagement.a09b5304.jpg"},f017:function(e,t,n){}});
//# sourceMappingURL=app.17df03c6.js.map