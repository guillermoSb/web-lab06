(()=>{var e={538:(e,a,r)=>{"use strict";function n(e,a){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,a)}(e))||a&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw i}}}}function t(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,n=new Array(a);r<a;r++)n[r]=e[r];return n}r.r(a),r.d(a,{footer:()=>o});var o=function(e){var a=document.createElement("footer");a.classList=["container"],a.classList.add("my-5");var r=document.createElement("div");r.className="row justify-content-md-center",e=e.map((function(e){var a=document.createElement("a");return a.setAttribute("href",e.src),a.classList.add("col-3"),a.classList.add("btn"),a.classList.add("mx-4"),a.classList.add("btn-primary"),a.classList.add("animate__animated"),a.classList.add("animate__bounce"),a.innerHTML=e.content+" &rarr;",a}));var t,o=n(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;r.appendChild(i)}}catch(e){o.e(e)}finally{o.f()}return a.appendChild(r),a}},34:(e,a,r)=>{"use strict";r.r(a),r.d(a,{header:()=>n});var n=function(){var e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    ',e}},418:(e,a,r)=>{"use strict";r.r(a),r.d(a,{progressBar:()=>n});var n=function(e){var a=document.createElement("div");a.className="container-fluid";var r=document.createElement("div");return r.className="progress",r.classList.add("animate__animated"),r.classList.add("animate__fadeIn"),r.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),a.appendChild(r),a}},86:(e,a,r)=>{var n=r(538).footer,t=r(34).header,o=r(418).progressBar;e.exports={footer:n,header:t,progressBar:o}}},a={};function r(n){var t=a[n];if(void 0!==t)return t.exports;var o=a[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,a)=>{for(var n in a)r.o(a,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=r(86),a=e.header,n=e.footer,t=e.progressBar;document.body.appendChild(a()),document.body.appendChild(t(30));var o=document.createElement("section");o.classList.add("container-fluid"),o.classList.add("my-5"),o.innerHTML="\n      <h2>En el espacio...</h2>\n      <p>\n        Te has puesto el traje espacial. Y ya te encuentras en el espacio. Estas\n        avanzando hacia el panel solar y utilizas el repuesto para reparalo.\n        Todo parece encajar a la perfección.\n      </p>\n",document.body.appendChild(o),document.body.appendChild(n([{content:"Entrar a la nave y probar la energía ",src:"phase02.html"}]))})()})();