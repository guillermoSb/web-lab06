(()=>{var e={538:(e,n,a)=>{"use strict";function r(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,d=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){d=!0,i=e},f:function(){try{s||null==a.return||a.return()}finally{if(d)throw i}}}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,r=new Array(n);a<n;a++)r[a]=e[a];return r}a.r(n),a.d(n,{footer:()=>o});var o=function(e){var n=document.createElement("footer");n.classList=["container"],n.classList.add("my-5");var a=document.createElement("div");a.className="row justify-content-md-center",e=e.map((function(e){var n=document.createElement("a");return n.setAttribute("href",e.src),n.classList.add("col-3"),n.classList.add("btn"),n.classList.add("mx-4"),n.classList.add("btn-primary"),n.classList.add("animate__animated"),n.classList.add("animate__bounce"),n.innerHTML=e.content+" &rarr;",n}));var t,o=r(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;a.appendChild(i)}}catch(e){o.e(e)}finally{o.f()}return n.appendChild(a),n}},34:(e,n,a)=>{"use strict";a.r(n),a.d(n,{header:()=>r});var r=function(){var e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    ',e}},418:(e,n,a)=>{"use strict";a.r(n),a.d(n,{progressBar:()=>r});var r=function(e){var n=document.createElement("div");n.className="container-fluid";var a=document.createElement("div");return a.className="progress",a.classList.add("animate__animated"),a.classList.add("animate__fadeIn"),a.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),n.appendChild(a),n}},86:(e,n,a)=>{var r=a(538).footer,t=a(34).header,o=a(418).progressBar;e.exports={footer:r,header:t,progressBar:o}}},n={};function a(r){var t=n[r];if(void 0!==t)return t.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.d=(e,n)=>{for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=a(86),n=e.header,r=e.footer,t=e.progressBar;document.body.appendChild(n()),document.body.appendChild(t(50));var o=document.createElement("section");o.classList.add("container-fluid"),o.classList.add("my-5"),o.innerHTML="\n     <h2>Tu nave tiene energía</h2>\n      <p>\n        Todos los sistemas funcionan en orden y ya puedes respirar en paz. Sin\n        embargo la estación ya no tiene comida para que puedas seguir en ella,\n        debes encontrar la forma de salir.\n      </p>\n      <p>\n        Por suerte, hay una nave de escape, pero primero debes marcar la\n        trayectoria en la sala de observación.\n      </p>\n",document.body.appendChild(o),document.body.appendChild(r([{content:"Ir a la sala de observación  ",src:"obs02.html"}]))})()})();