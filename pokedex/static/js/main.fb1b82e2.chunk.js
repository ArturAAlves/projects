(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{70:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(19),r=n.n(a),s=n(6),i=n.n(s),l=n(16),u=n(13),d=n(5),b=n(18),j=n.n(b),m=n(3),p=n.p+"static/media/preloader.6c61cd91.gif",v=(n(70),n(28)),f=n.n(v),O=(n(75),n(29)),h=n(2),x=function(e){var t=e.barWidth,n=Object(O.useSpring)({config:O.config.wobbly,width:t+"%",from:{width:"0%"},delay:1100,background:"white"});return t?Object(h.jsx)(O.animated.div,{className:"pokemon-stat-bar",style:n}):"loading"},g=(n(77),n(43)),N=n.n(g),k=function(e){var t=e.evolution;return Object(h.jsx)("div",{className:"pokemon-evolution",children:t?t.map((function(e,t,n){return Object(h.jsx)("div",{className:"pokemon-evolution-container",children:Object(h.jsxs)("div",{className:"evolution-img-container",children:[Object(h.jsx)("img",{className:"evolution-img",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(e.id,".png"),alt:e.name}),Object(h.jsx)("div",{className:"evolution-arrow ",children:e.name!==n[n.length-1].name?Object(h.jsx)(N.a,{}):""})]})},e.id)})):"loading..."})};var w=function(e){var t=e.url,n=Object(c.useState)(""),o=Object(d.a)(n,2),a=o[0],r=o[1],s=Object(c.useState)(""),l=Object(d.a)(s,2),b=l[0],v=l[1],O=Object(c.useState)(""),g=Object(d.a)(O,2),N=g[0],w=g[1],y=Object(c.useState)(""),S=Object(d.a)(y,2),_=S[0],E=S[1],C=Object(c.useState)(""),B=Object(d.a)(C,2),W=B[0],A=B[1],F=Object(c.useState)(""),H=Object(d.a)(F,2),J=H[0],L=H[1],T=a.name,D=a.id,I=a.stats,M=a.types,P=a.height,q=a.weight,z=a.species,G=[{colorName:"fire",color:"#f57830"},{colorName:"grass",color:"#79bb5b"},{colorName:"electric",color:"#FCB925"},{colorName:"water",color:"#73d0f5"},{colorName:"ice",color:"#33addd"},{colorName:"ground",color:"#906523"},{colorName:"rock",color:"#8f7f67"},{colorName:"fairy",color:"#bfb0db"},{colorName:"poison",color:"#a082d6"},{colorName:"bug",color:"#A8D59F"},{colorName:"dragon",color:"#97B3E6"},{colorName:"psychic",color:"#bfb0db"},{colorName:"flying",color:"#b6bcbe"},{colorName:"fighting",color:"#d4cbb9"},{colorName:"normal",color:"#c0b6a4"},{colorName:"ghost",color:"#67626e52"},{colorName:"dark",color:"#3d3944"},{colorName:"steel",color:"#707070"}],K=function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()(t);case 3:n=e.sent,r(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Q="https://pokeres.bastionbot.org/images/pokemon/".concat(D,".png"),R=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()(z.url);case 3:t=e.sent,v(t.data.habitat.name),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()(t);case 3:n=e.sent,E(n.data.evolution_chain.url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()(t);case 3:n=e.sent,A(n.data.chain),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return K(),function(){}}),[]),Object(c.useEffect)((function(){return R(),w(M),function(){}}),[a]),Object(c.useEffect)((function(){return N&&U(a.species.url),function(){}}),[N]),Object(c.useEffect)((function(){return _&&V(_),function(){}}),[_]),Object(c.useEffect)((function(){return W&&L(Y),function(){}}),[W]);var X=function(){return G.filter((function(e){var t=[];return void 0!==N[0].type.name&&(t=e.colorName===N[0].type.name),void 0===N[0].type.name&&(t=[{colorName:"ghost",color:"#3d3944"}]),t}))},Y=function(){var e,t,n,c,o=function(e){return e.slice(-5).match(/\d+/g,"")};return t={name:W.species.name,id:o(W.species.url)},W.evolves_to[0]?(n={name:W.evolves_to[0].species.name,id:o(W.evolves_to[0].species.url)},W.evolves_to[0].evolves_to[0]?(c={name:W.evolves_to[0].evolves_to[0].species.name,id:o(W.evolves_to[0].evolves_to[0].species.url)},e=[Object(m.a)({},t),Object(m.a)({},n),Object(m.a)({},c)]):e=[Object(m.a)({},t),Object(m.a)({},n)]):e=[Object(m.a)({},t)],e};return Object(h.jsxs)("div",{className:"pokeCard-container",style:{backgroundColor:N?0!==X().length?X()[0].color:"red":""},children:[Object(h.jsx)("div",{className:"pokemon-img-container",children:Object(h.jsx)("img",{src:a?Q:p,alt:T,className:a?"pokemon-img":"pokemon-loading"})}),Object(h.jsxs)("div",{className:"pokemon-id",children:["#",D?function(e){for(var t=e.toString();t.length<3;)t="0"+t;return t}(D):"Loading..."," "]}),Object(h.jsx)("div",{className:"pokemon-types",children:a?M.map((function(e,t){return Object(h.jsx)("div",{className:"pokemon-type",children:e.type.name},t)})):"loading..."}),Object(h.jsxs)("div",{className:"pokecard-header-container",children:[Object(h.jsx)("div",{className:"pokecard-name",children:T}),Object(h.jsxs)("div",{className:"pokecard-header-left",children:[Object(h.jsxs)("div",{children:["Weight: ",q?Object(h.jsx)(f.a,{start:0,end:q,duration:2,separator:","}):q]}),Object(h.jsxs)("div",{children:["Height: ",P?Object(h.jsx)(f.a,{start:0,end:P,duration:2,separator:","}):P]})]}),Object(h.jsx)("div",{className:"pokecard-header-right",children:b?Object(h.jsxs)("div",{children:["Habitat: ",b]}):"loading..."})]}),Object(h.jsx)("div",{className:"pokemon-stat-container",children:a?I.map((function(e,t){return Object(h.jsxs)("div",{className:"pokemon-stats",children:[Object(h.jsxs)("div",{className:"pokemon-stats-info",children:[e.stat.name,Object(h.jsxs)("span",{className:"pokemon-stats-number",children:[Object(h.jsx)(f.a,{start:0,end:e.base_stat,duration:2,separator:","}),"/250"]})]}),Object(h.jsx)(x,{barWidth:e.base_stat/2.4})]},t)})):"loading..."}),Object(h.jsx)("div",{className:"pokemon-evolution-container",children:Object(h.jsx)(k,{evolution:J})})]})},y=n.p+"static/media/pokemonLogo.8837f87d.png";n(84);var S=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),r=Object(d.a)(a,2),s=r[0],b=r[1],m=Object(c.useState)(""),p=Object(d.a)(m,2),v=p[0],f=p[1],O=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()(t);case 3:n=e.sent,o((function(e){return Object(l.a)(n.data.results)})),b((function(e){return n.data.next})),f((function(e){return n.data.previous})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return O("https://pokeapi.co/api/v2/pokemon?limit=15"),function(){}}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("img",{src:y,alt:"logo"})}),Object(h.jsx)("div",{className:"pokedex",children:n?Object(h.jsx)("div",{className:"pokedex",children:n.map((function(e){return Object(h.jsx)(w,{url:e.url},e.name)}))}):"loading"}),Object(h.jsxs)("div",{className:"main-btns-container",children:[v?Object(h.jsx)("button",{type:"button",className:"big-button btn-prev",onClick:function(){v&&(window.scrollTo(0,0),O(v))},children:"Previous"}):null,s?Object(h.jsx)("button",{type:"button",className:"big-button btn-next",onClick:function(){s&&(window.scrollTo(0,0),O(s))},children:"Next"}):null]})]})};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.fb1b82e2.chunk.js.map