(this.webpackJsonpminc=this.webpackJsonpminc||[]).push([[0],{18:function(e,t,a){},35:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(44),a(21)),l=a(15),o=a(6),m=a(54),u=a(30),i=a(58),s=function(e){var t=void 0==JSON.parse(localStorage.getItem("charData"))?{disabled:!0}:{disabled:!1};return r.a.createElement("div",{className:"menu-root"},r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,null,r.a.createElement("h3",null,"Select an option"))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:3},r.a.createElement(i.a,Object.assign({variant:"primary",block:!0,className:"my-1"},t,{onClick:function(){return e.selection(1)}}),"Play"))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:3},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return e.selection(2)}},"Create"))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:3},r.a.createElement(i.a,Object.assign({variant:"primary",block:!0,className:"my-1"},t,{onClick:function(){return e.selection(3)}}),"Delete"))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:3},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return e.selection(4)}},"About"))))},E=function(e){var t=Object(n.useState)(JSON.parse(localStorage.getItem("charData"))),a=Object(o.a)(t,2),c=a[0],l=a[1];return null==c?r.a.createElement("div",{className:"menu-root"},r.a.createElement("h5",null,"Deleted"),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:4,className:"mt-2"},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return e.selection(0)}},"Back")))):r.a.createElement("div",{className:"menu-root"},r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:10},Object.keys(c).map((function(e,t){return r.a.createElement(m.a,{key:t},r.a.createElement(u.a,{md:4},r.a.createElement("h5",null,e,":\xa0")),r.a.createElement(u.a,null,r.a.createElement("p",null,c[e])))})))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:4},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return localStorage.removeItem("charData"),void l(null)}},"Delete"))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:4,className:"mt-2"},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return e.selection(0)}},"Back"))))},f=function(e){return r.a.createElement("div",{className:"menu-root"},r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:4,className:"mt-1"},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return e.selection(0)}},"Back"))))},d=a(57),v=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({username:"",level:"",xp:"",gold:"",currentHp:10,Hp:10,Attack:1,Defence:1}),E=Object(o.a)(s,1)[0];return r.a.createElement("div",{className:"menu-root"},r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{className:"mb-5"},r.a.createElement("h3",null,"Create"))),r.a.createElement(d.a,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:3,className:"align-self-center"},r.a.createElement(d.a.Label,{htmlFor:"username-input"},"Username")),r.a.createElement(u.a,{md:6},r.a.createElement(d.a.Control,{type:"text",id:"username-input",onChange:function(e){return function(e,t){switch(t){case 0:E.username=e.target.value}}(e,0)}}))),c.map((function(e,t){return r.a.createElement(m.a,{key:t,className:"justify-content-center"},r.a.createElement(u.a,null,r.a.createElement("h5",null,e)))}))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:4,className:"mt-5"},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return function(){var t=[];""===E.username&&(t.push("Must enter a name"),l(t)),E.username.length>20&&(t.push("Name too long"),l(t)),0===t.length&&(E.level=1,E.xp=0,E.gold=0,localStorage.setItem("charData",JSON.stringify(E)),e.selection(0))}()}},"Save"))),r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:4,className:"mt-1"},r.a.createElement(i.a,{variant:"primary",block:!0,className:"my-1",onClick:function(){return e.selection(0)}},"Back"))))},b=a(55),p=(a(18),function(e){return r.a.createElement("div",{className:"box"},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement("h5",null,e.player.username))),r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement("h5",null,"Level:\xa0",e.player.level))))}),y=function(e){return r.a.createElement("div",{className:"half-height-box"},r.a.createElement(m.a,null,r.a.createElement(u.a,{md:4},r.a.createElement("h5",null,"Name:\xa0")),r.a.createElement(u.a,null,r.a.createElement("p",null,e.enemy.name))),r.a.createElement(m.a,null,r.a.createElement(u.a,{md:4},r.a.createElement("h5",null,"Level:\xa0")),r.a.createElement(u.a,null,r.a.createElement("p",null,e.enemy.level))),r.a.createElement(m.a,null,r.a.createElement(u.a,{md:4},r.a.createElement("h5",null,"Health:\xa0")),r.a.createElement(u.a,null,r.a.createElement("p",null,e.enemy.eHp))),r.a.createElement(m.a,null,r.a.createElement(u.a,{md:4},r.a.createElement("h5",null,"Attack:\xa0")),r.a.createElement(u.a,null,r.a.createElement("p",null,e.enemy.attack))),r.a.createElement(m.a,null,r.a.createElement(u.a,{md:4},r.a.createElement("h5",null,"Defence:\xa0")),r.a.createElement(u.a,null,r.a.createElement("p",null,e.enemy.defence))))},h=function(e){var t=Object(n.useState)(e.history),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){l(e.history)}),[e.history]),r.a.createElement("div",{id:"log-box",className:"half-height-box"},c.map((function(e,t){return r.a.createElement("div",{key:t},e)})))},k=a(56),g=function(){for(var e=[],t=0;t<200;t++)if(0===t)e.push(0);else if(1===t)e.push(0);else{var a=t+80,n=Math.floor(Math.pow(1.016*t*550,.008*a));e.push(Math.floor(n/9+e[t-1]))}return console.log(e),e}(),j=function(e){localStorage.setItem("charData",JSON.stringify(e))},N=function(){return JSON.parse(localStorage.getItem("charData"))},O=function(e,t){return Math.floor(Math.random()*(t-e))+e},S=function(){return console.log(localStorage.getItem("levelLock")),null!==localStorage.getItem("levelLock")},w=function(e){e?localStorage.setItem("levelLock","0"):localStorage.removeItem("levelLock")},M=function(e){return r.a.createElement(k.a,e,r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,"Levelled up!")),r.a.createElement(k.a.Body,null,r.a.createElement(m.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:4},r.a.createElement(i.a,{block:!0,variant:"success",onClick:function(){return e.onHide("0")}},"HP +5")),r.a.createElement(u.a,{md:4},r.a.createElement(i.a,{block:!0,variant:"danger",onClick:function(){return e.onHide("1")}},"Attack +1")),r.a.createElement(u.a,{md:4},r.a.createElement(i.a,{block:!0,variant:"primary",onClick:function(){return e.onHide("2")}},"Defence +1")))))},x={Rat:{locationId:0,name:"Rat",level:1,eHp:5,defence:2,attack:1,xpReward:function(){return O(Math.floor(5/4),Math.floor(6))},goldReward:function(){return O(1,10)}},Frog:{locationId:0,name:"Frog",level:2,eHp:10,defence:2,attack:3,xpReward:function(){return O(Math.floor(2.5),Math.floor(12))},goldReward:function(){return O(1,10)}},Snake:{locationId:0,name:"Snake",level:4,eHp:20,defence:3,attack:5,xpReward:function(){return O(Math.floor(5),Math.floor(24))},goldReward:function(){return O(1,10)}},Blob:{locationId:0,name:"Blob",level:5,eHp:50,defence:10,attack:6,xpReward:function(){return O(Math.floor(12.5),Math.floor(60))},goldReward:function(){return O(1,10)}},Wolf:{locationId:0,name:"Wolf",level:7,eHp:80,defence:5,attack:9,xpReward:function(){return O(Math.floor(20),Math.floor(96))},goldReward:function(){return O(1,10)}},ForestEnemy:{locationId:1,name:"ForestEnemy",level:7,eHp:80,defence:5,attack:9,xpReward:function(){return O(Math.floor(20),Math.floor(96))},goldReward:function(){return O(1,10)}},SwampEnemy:{locationId:2,name:"SwampEnemy",level:7,eHp:80,defence:5,attack:9,xpReward:function(){return O(Math.floor(20),Math.floor(96))},goldReward:function(){return O(1,10)}},DesertEnemy:{locationId:3,name:"DesertEnemy",level:7,eHp:80,defence:5,attack:9,xpReward:function(){return O(Math.floor(20),Math.floor(96))},goldReward:function(){return O(1,10)}},MountainsEnemy:{locationId:4,name:"MountainsEnemy",level:7,eHp:80,defence:5,attack:9,xpReward:function(){return O(Math.floor(20),Math.floor(96))},goldReward:function(){return O(1,10)}},TundraEnemy:{locationId:5,name:"TundraEnemy",level:7,eHp:80,defence:5,attack:9,xpReward:function(){return O(Math.floor(20),Math.floor(96))},goldReward:function(){return O(1,10)}}},C=function(e){var t=Object.values(H).filter((function(t){return t.id===e})).pop();return{id:t.id,name:t.name,getMobs:function(){return Object.values(x).filter((function(t){return t.locationId===e}))}}},H={Grassland:{id:0,name:"Grassland"},Forest:{id:1,name:"Forest"},Swamp:{id:2,name:"Swamp"},Desert:{id:3,name:"Desert"},Mountains:{id:4,name:"Mountains"},Tundra:{id:5,name:"Tundra"}},L=function(e,t,a,n){if(e){var r=O(0,C(n).getMobs().length),c=C(n).getMobs().map((function(e,t){if(t===r){var a={};return Object.keys(e).forEach((function(t){a[t]=e[t]})),a}return null}));console.log(c),t(c[r]),a(!1)}},R=function(e,t,a){if(e.xp+=a.xpReward(),n=e.level,e.xp>=g[n+1]&&(w(!0),1))return j(e),!0;var n;t(e)},I=a(32),D=function e(t,a){var n=this;Object(I.a)(this,e),this.addMessageToLog=function(e){var t=n.history;20===t.length&&t.pop(),t.unshift(e),n.setHistory(t)},this.history=t,this.setHistory=a},F=function(e){var t=Object(n.useState)(N()),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(0),s=Object(o.a)(i,2),E=s[0],f=s[1],d=Object(n.useState)(!0),v=Object(o.a)(d,2),k=v[0],g=v[1],x=Object(n.useState)({}),C=Object(o.a)(x,2),H=C[0],I=C[1],F=Object(n.useState)([]),T=Object(o.a)(F,2),B=T[0],A=T[1],J=Object(n.useState)(!1),U=Object(o.a)(J,2),P=U[0],G=U[1],W=Object(n.useState)(new D(B,A,E)),Y=Object(o.a)(W,1)[0],_=Object(n.useState)(!0),q=Object(o.a)(_,2),z=q[0],K=q[1];Object(n.useEffect)((function(){L(k,I,g,e.currentLocation),S()&&K(!1)}),[e.currentLocation,k]),Object(n.useEffect)((function(){if(z){var e=setInterval((function(){f((function(e){return e+1})),Q()}),P?1500:500);return function(){clearInterval(e),P&&G(!1)}}}));var Q=function(){if(function(e,t,a){return e.eHp<=0&&(t(!0),a.addMessageToLog("".concat(e.name," died!")),!0)}(H,g,Y))return G(!0),L(k,I,g,e.currentLocation),function(e,t,a){e.gold+=a.goldReward(),t(e)}(c,l,H),void(R(c,l,H)&&K(!1));!function(e,t,a,n,r){var c=N(),l=O(c.Attack-5,c.Attack+5);l=l<1?1:l,e.eHp-=l,r.addMessageToLog("You hit for ".concat(l," damage!")),t(e)}(H,I,0,0,Y),j(c)};return r.a.createElement("div",{className:"game-root"},S?r.a.createElement(M,{backdrop:"static",keyboard:!1,show:!z,onHide:function(e){!function(e,t,a){switch(a){case"0":e.Hp+=5,e.level+=1,t(e);break;case"1":e.Attack+=1,e.level+=1,t(e);break;case"2":e.Defence+=1,e.level+=1,t(e);break;default:throw new Error("Tried to level up, but failed")}}(c,l,e),w(!1),K(!0)}}):null,r.a.createElement(b.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{md:6},r.a.createElement(p,{player:c})),r.a.createElement(u.a,{md:6},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(y,{enemy:H,dead:g})),r.a.createElement(u.a,null,r.a.createElement(h,{t:E,history:B})))))))},T=function(e){var t=Object(n.useState)(e.action),a=Object(o.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(e.currentLocation),u=Object(o.a)(m,2),s=u[0],E=u[1],f=["Travel","Shop","Heal","Stats"],d=Object.keys(H);Object(n.useEffect)((function(){l(e.action),E(e.currentLocation)}),[e.action,e.currentLocation]);var v=function(t){e.setAction(t)};switch(c){case 0:return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wide-box"},r.a.createElement("div",{id:"action-box"},d.map((function(t,a,n){return r.a.createElement(i.a,{key:a,variant:s===a?"secondary":"primary",className:"m-2",onClick:function(){return function(t){e.setCurrentLocation(t)}(a)}},t)}))),r.a.createElement("div",{id:"action-bar"},f.map((function(e,t,a){return r.a.createElement(i.a,{key:t,variant:c===t?"secondary":"primary",className:"m-2",onClick:function(){return v(t)}},e)})))));case 1:return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wide-box"},r.a.createElement("div",{id:"action-box"},"shop"),r.a.createElement("div",{id:"action-bar"},f.map((function(e,t,a){return r.a.createElement(i.a,{key:t,variant:c===t?"secondary":"primary",className:"m-2",onClick:function(){return v(t)}},e)})))));case 2:return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wide-box"},r.a.createElement("div",{id:"action-box"},"heal"),r.a.createElement("div",{id:"action-bar"},f.map((function(e,t,a){return r.a.createElement(i.a,{key:t,variant:c===t?"secondary":"primary",className:"m-2",onClick:function(){return v(t)}},e)})))));case 3:return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wide-box"},r.a.createElement("div",{id:"action-box"},"stats"),r.a.createElement("div",{id:"action-bar"},f.map((function(e,t,a){return r.a.createElement(i.a,{key:t,variant:c===t?"secondary":"primary",className:"m-2",onClick:function(){return v(t)}},e)})))));default:return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wide-box"},r.a.createElement("div",{id:"action-box"},"YOU SHOULDNT BE HERE REEEEEEEEEEEEEEEEE"),r.a.createElement("div",{id:"action-bar"},f.map((function(e,t,a){return r.a.createElement(i.a,{key:t,variant:c===t?"secondary":"primary",className:"m-2",onClick:function(){return v(t)}},e)})))))}},B=function(e){var t=Object(n.useState)(e.currentLocation),a=Object(o.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(0),u=Object(o.a)(m,2),i=u[0],s=u[1];return Object(n.useEffect)((function(){l(c),e.setCurrentLocation(c)}),[e,c]),r.a.createElement("div",{className:"game-root"},r.a.createElement(b.a,null,r.a.createElement(T,{action:i,setAction:s,currentLocation:c,setCurrentLocation:l})))},A=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),m=Object(o.a)(l,2),u=m[0],i=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{currentLocation:a,action:u}),r.a.createElement(B,{currentLocation:a,setCurrentLocation:c,action:u,setAction:i}))},J=(a(49),function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1];switch(a){default:case 0:return r.a.createElement(s,{selection:c});case 1:return r.a.createElement(A,null);case 2:return r.a.createElement(v,{selection:c});case 3:return r.a.createElement(E,{selection:c});case 4:return r.a.createElement(f,{selection:c})}}),U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null))};t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:U}))),r.a.createElement(G,null))}},37:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t),function(e){var t=a(0),n=a.n(t),r=a(13),c=a.n(r),l=a(21),o=a(35);c.a.render(n.a.createElement(l.a,{basename:e.nextTick.PUBLIC_URL},n.a.createElement(o.a,null)),document.getElementById("root"))}.call(this,a(39))},49:function(e,t,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.552b7afd.chunk.js.map