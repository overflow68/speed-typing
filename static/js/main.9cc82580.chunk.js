(this["webpackJsonpspeed-typing"]=this["webpackJsonpspeed-typing"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(7),a=c.n(r),i=c(6),o=c.n(i),u=c(9),l=c(8),j=c(3),d=(c(15),c(0));var p=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(j.a)(r,2),i=a[0],p=a[1],f=Object(n.useState)(0),b=Object(j.a)(f,2),v=b[0],m=b[1],O=Object(n.useState)(!1),h=Object(j.a)(O,2),x=h[0],g=h[1],y=0;Object(n.useEffect)((function(){var e=setInterval(E,1e3);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){m(0)}),[x]);var E=function(){m(v+1)};function L(){return fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(e){return e.content}))}function N(){return(N=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,s(t),g(!x);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[i]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"timer",children:Object(d.jsx)("div",{children:v})}),Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("div",{id:"quoteDisplay",className:"quote-display",children:c.split("").map((function(e){return Object(d.jsx)("span",{className:"letter",id:y++,children:e})}))}),Object(d.jsx)("textarea",{id:"quoteInput",className:"quote-input",onChange:function(e){var t=document.getElementById("quoteInput"),n=document.getElementsByClassName("letter"),s=Object(u.a)(n),r=c.split(""),a=e.target.value.split("");0!==e.target.value.localeCompare(c)?r.forEach((function(e,t){e!==a[t]&&a[t]?(n[t].classList.add("incorrect"),n[t].classList.remove("correct")):e===a[t]?(n[t].classList.add("correct"),n[t].classList.remove("incorrect")):a.length!==r.length&&(n[t].classList.remove("incorrect"),n[t].classList.remove("correct"))})):(t.value="",s.forEach((function(e){e.classList.remove("correct"),e.classList.remove("incorrect"),p(!i)})))}})]})]})};var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9cc82580.chunk.js.map