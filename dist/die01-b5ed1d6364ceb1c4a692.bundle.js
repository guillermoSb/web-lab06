(()=>{var e={538:(e,n,r)=>{"use strict";function t(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){d=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(d)throw i}}}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}r.r(n),r.d(n,{footer:()=>o});var o=function(e){var n=document.createElement("footer");n.classList=["container"],n.classList.add("my-5");var r=document.createElement("div");r.className="row justify-content-md-center",e=e.map((function(e){var n=document.createElement("a");return n.setAttribute("href",e.src),n.classList.add("col-3"),n.classList.add("btn"),n.classList.add("mx-4"),n.classList.add("btn-primary"),n.classList.add("animate__animated"),n.classList.add("animate__bounce"),n.innerHTML=e.content+" &rarr;",n}));var a,o=t(e);try{for(o.s();!(a=o.n()).done;){var i=a.value;r.appendChild(i)}}catch(e){o.e(e)}finally{o.f()}return n.appendChild(r),n}},34:(e,n,r)=>{"use strict";r.r(n),r.d(n,{header:()=>t});var t=function(){var e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego [Version '.concat("1.0.0","]</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    "),e}},418:(e,n,r)=>{"use strict";r.r(n),r.d(n,{progressBar:()=>t});var t=function(e){var n=document.createElement("div");n.className="container-fluid";var r=document.createElement("div");return r.className="progress",r.classList.add("animate__animated"),r.classList.add("animate__fadeIn"),r.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),n.appendChild(r),n}},86:(e,n,r)=>{var t=r(538).footer,a=r(34).header,o=r(418).progressBar;e.exports={footer:t,header:a,progressBar:o}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=r(86),n=e.header,t=e.footer,a=e.progressBar;document.body.appendChild(n("Sara")),document.body.appendChild(a(100));var o=document.createElement("section");o.classList.add("container-fluid"),o.classList.add("my-5"),o.innerHTML="\n    \n      <h2>Has Muerto</h2>\n      <p>\n        La opción que escogiste no fue la correcta para abordar el problema de\n        tu nave. La pérdida de presión te deja inconsiente.\n      </p>\n\n",document.body.appendChild(o),document.body.appendChild(t([{content:"Intentar De Nuevo ",src:"index.html"}]))})()})();