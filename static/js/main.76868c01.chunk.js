(this.webpackJsonppingpong=this.webpackJsonppingpong||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),u=n.n(r),i=(n(11),n(1)),o=(n(12),n(2)),l=n.n(o),f=n(5),s=function(e){return new Promise((function(t){return setTimeout(t,e)}))},m=function(e){var t=e.play();void 0!==t&&t.then((function(e){})).catch((function(e){console.info(e)}))},d=[];function p(e){var t=e.handleGameOver,n=Object(c.useState)(0),r=Object(i.a)(n,2),u=r[0],o=r[1],m=Object(c.useState)(!0),p=Object(i.a)(m,2),b=p[0],v=p[1],h=Object(c.useState)(!0),E=Object(i.a)(h,2),O=E[0],g=E[1],j=Object(c.useRef)(null),w=Object(c.useRef)(null),k=j.clientWidth-w.clientWidth,S=j.clientHeight-w.clientHeight;function x(e){var t=e.beta,n=e.gamma;t>90&&(t=90),t<-90&&(t=-90),t+=90,n+=90,w.style.top=S*n/180-10+"px",w.style.left=k*t/180-10+"px"}window.addEventListener("deviceorientation",x,!0);new Audio("../public/ball-incoming.mp3"),new Audio("../public/ball-outgoing.mp3");Object(c.useEffect)((function(){y()}),[b]);var y=function(){d.push(setTimeout((function(){!1===b&&(console.log("failed to return"),t())}),2e3))},A=function(){!function(e){clearTimeout(e[e.length-1]),e.pop()}(d),o((function(e){return e+1})),g((function(e){return!e})),v((function(){return!0})),C()},C=function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.round(200*Math.random())+600,e.next=3,s(t);case 3:v((function(e){return!e})),g((function(e){return!e}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("div",null,u),O&&a.a.createElement("button",{onClick:function(){return A()}},"Click me"),a.a.createElement("button",{onClick:function(e){return console.log(x())}},"test"),a.a.createElement("div",{ref:j,class:"garden"},a.a.createElement("div",{ref:w,class:"ball"})))}function b(e){var t=e.handleRestart;return a.a.createElement("div",null,a.a.createElement("div",null,"Game Over"),a.a.createElement("button",{onClick:function(){return t()}},"Restart"))}var v=function(){new Audio("../public/game-over.mp3");var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(!1),o=Object(i.a)(u,2),l=o[0],f=o[1];return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){r(!n)}},"Game Start")),n&&a.a.createElement(p,{handleGameOver:function(){r((function(e){return!e})),f((function(e){return!e}))},handleAudio:m}),l&&a.a.createElement(b,{handleRestart:function(){r((function(e){return!e})),f((function(e){return!e}))}}))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.76868c01.chunk.js.map