(()=>{var e={538:(e,a,t)=>{"use strict";t.r(a),t.d(a,{footer:()=>n});const n=e=>{const a=document.createElement("footer");a.classList=["container"],a.classList.add("my-5");const t=document.createElement("div");t.className="row justify-content-md-center",e=e.map((e=>{const a=document.createElement("a");return a.setAttribute("href",e.src),a.classList.add("col-3"),a.classList.add("btn"),a.classList.add("mx-4"),a.classList.add("btn-primary"),a.classList.add("animate__animated"),a.classList.add("animate__bounce"),a.innerHTML=e.content+" &rarr;",a}));for(const a of e)t.appendChild(a);return a.appendChild(t),a}},34:(e,a,t)=>{"use strict";t.r(a),t.d(a,{header:()=>n});const n=function(){const e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego [Version '.concat("1.0.0","]</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    "),e}},418:(e,a,t)=>{"use strict";t.r(a),t.d(a,{progressBar:()=>n});const n=e=>{const a=document.createElement("div");a.className="container-fluid";const t=document.createElement("div");return t.className="progress",t.classList.add("animate__animated"),t.classList.add("animate__fadeIn"),t.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),a.appendChild(t),a}},86:(e,a,t)=>{const{footer:n}=t(538),{header:r}=t(34),{progressBar:s}=t(418);e.exports={footer:n,header:r,progressBar:s}}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var s=a[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{header:e,footer:a,progressBar:n}=t(86);document.body.appendChild(e()),document.body.appendChild(n(100));const r=document.createElement("section");r.classList.add("container-fluid"),r.classList.add("my-5"),r.innerHTML="\n\n        <h2>Has Muerto</h2>\n        <p>\n            Cuando desacoplaste la cápsula esta no tenía suficiente energía para\n            activar sus retro-propulsores. Por lo que has quedado a la deriva en el\n            espacio.\n        </p>\n\n",document.body.appendChild(r),document.body.appendChild(a([{content:"Intentar De Nuevo ",src:"index.html"}]))})()})();