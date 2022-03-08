(()=>{var e={538:(e,a,n)=>{"use strict";n.r(a),n.d(a,{footer:()=>t});const t=e=>{const a=document.createElement("footer");a.classList=["container"],a.classList.add("my-5");const n=document.createElement("div");n.className="row justify-content-md-center",e=e.map((e=>{const a=document.createElement("a");return a.setAttribute("href",e.src),a.classList.add("col-3"),a.classList.add("btn"),a.classList.add("mx-4"),a.classList.add("btn-primary"),a.classList.add("animate__animated"),a.classList.add("animate__bounce"),a.innerHTML=e.content+" &rarr;",a}));for(const a of e)n.appendChild(a);return a.appendChild(n),a}},34:(e,a,n)=>{"use strict";n.r(a),n.d(a,{header:()=>t});const t=function(){const e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego [Version '.concat("1.0.0","]</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    "),e}},418:(e,a,n)=>{"use strict";n.r(a),n.d(a,{progressBar:()=>t});const t=e=>{const a=document.createElement("div");a.className="container-fluid";const n=document.createElement("div");return n.className="progress",n.classList.add("animate__animated"),n.classList.add("animate__fadeIn"),n.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),a.appendChild(n),a}},86:(e,a,n)=>{const{footer:t}=n(538),{header:r}=n(34),{progressBar:s}=n(418);e.exports={footer:t,header:r,progressBar:s}}},a={};function n(t){var r=a[t];if(void 0!==r)return r.exports;var s=a[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{header:e,footer:a,progressBar:t}=n(86);document.body.appendChild(e()),document.body.appendChild(t(10));const r=document.createElement("section");r.classList.add("container-fluid"),r.classList.add("my-5"),r.innerHTML="\n      <h2>Próximos Pasos</h2>\n      <p>\n        Has logrado arreglar tu nave. Sin embargo el generador de energía está\n        averiado, por lo que en unos momentos el sistema de soporte de vida va a\n        fallar. En tu memoria llega un recuerdo:\n        <em>Un objeto no identificado chocó con los paneles solares</em>\n        <strong>Tu objetivo es arreglar el generador de energía</strong>\n      </p>\n      <p>Tienes las siguientes opciones para visitar:</p>\n",document.body.appendChild(r),document.body.appendChild(a([{content:"Cabina de energía  ",src:"energy01.html"},{content:"Cápsula de Escape ",src:"escape01.html"},{content:"Cabina de observación ",src:"obs01.html"}]))})()})();