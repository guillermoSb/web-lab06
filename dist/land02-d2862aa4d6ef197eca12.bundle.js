(()=>{var e={538:(e,r,t)=>{"use strict";function n(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,d=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){d=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(d)throw i}}}}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.r(r),t.d(r,{footer:()=>o});var o=function(e){var r=document.createElement("footer");r.classList=["container"],r.classList.add("my-5");var t=document.createElement("div");t.className="row justify-content-md-center",e=e.map((function(e){var r=document.createElement("a");return r.setAttribute("href",e.src),r.classList.add("col-3"),r.classList.add("btn"),r.classList.add("mx-4"),r.classList.add("btn-primary"),r.classList.add("animate__animated"),r.classList.add("animate__bounce"),r.innerHTML=e.content+" &rarr;",r}));var a,o=n(e);try{for(o.s();!(a=o.n()).done;){var i=a.value;t.appendChild(i)}}catch(e){o.e(e)}finally{o.f()}return r.appendChild(t),r}},34:(e,r,t)=>{"use strict";t.r(r),t.d(r,{header:()=>n});var n=function(){var e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    ',e}},418:(e,r,t)=>{"use strict";t.r(r),t.d(r,{progressBar:()=>n});var n=function(e){var r=document.createElement("div");r.className="container-fluid";var t=document.createElement("div");return t.className="progress",t.classList.add("animate__animated"),t.classList.add("animate__fadeIn"),t.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),r.appendChild(t),r}},86:(e,r,t)=>{var n=t(538).footer,a=t(34).header,o=t(418).progressBar;e.exports={footer:n,header:a,progressBar:o}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=t(86),r=e.header,n=e.footer,a=e.progressBar;document.body.appendChild(r()),document.body.appendChild(a(100));var o=document.createElement("section");o.classList.add("container-fluid"),o.classList.add("my-5"),o.innerHTML="\n       <h2>No hay nadie</h2>\n      <p>\n        Has logrado aterrizar bien, pero no hay nadie que te reciba. Sales a ver\n        el paisaje y lo ultimo que ves es un oso polar :O\n      </p>\n",document.body.appendChild(o),document.body.appendChild(n([{content:"Volver a jugar ",src:"index.html"}]))})()})();