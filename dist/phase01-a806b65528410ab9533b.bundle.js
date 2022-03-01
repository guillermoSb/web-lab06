/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/components/phase01.js":
/*!***************************************!*\
  !*** ./src/app/components/phase01.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { header, footer, progressBar } = __webpack_require__(/*! ../shared/shared */ \"./src/app/shared/shared.js\");\n\ndocument.body.appendChild(header());\n\ndocument.body.appendChild(progressBar(10))\n\nconst content = document.createElement('section');\ncontent.innerHTML = `\n      <h2>Próximos Pasos</h2>\n      <p>\n        Has logrado arreglar tu nave. Sin embargo el generador de energía está\n        averiado, por lo que en unos momentos el sistema de soporte de vida va a\n        fallar. En tu memoria llega un recuerdo:\n        <em>Un objeto no identificado chocó con los paneles solares</em>\n        <strong>Tu objetivo es arreglar el generador de energía</strong>\n      </p>\n      <p>Tienes las siguientes opciones para visitar:</p>\n`\n\ndocument.body.appendChild(content);\n\ndocument.body.appendChild(footer([\n  { content: 'Cabina de energía  ', src: 'energy01.html' },\n  { content: 'Cápsula de Escape ', src: 'escape01.html' },\n  { content: 'Cabina de observación ', src: 'obs01.html' }\n]));\n\n\n\n//# sourceURL=webpack://lab-06/./src/app/components/phase01.js?");

/***/ }),

/***/ "./src/app/shared/footer.js":
/*!**********************************!*\
  !*** ./src/app/shared/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\n\nconst footer = (links) => {\n    const footerContainer = document.createElement('footer');\n    const ulContainer = document.createElement('ul');\n    links = links.map(link => {\n        const liContainer = document.createElement('li');\n        const linkContainer = document.createElement('a');\n        linkContainer.setAttribute('href', link.src);\n        linkContainer.innerHTML = link.content + ' &rarr;';\n        liContainer.appendChild(linkContainer);\n        return liContainer;\n    });\n    for (const link of links) {\n        ulContainer.appendChild(link);\n    }\n    footerContainer.appendChild(ulContainer);\n    return footerContainer;\n}\n\n//# sourceURL=webpack://lab-06/./src/app/shared/footer.js?");

/***/ }),

/***/ "./src/app/shared/header.js":
/*!**********************************!*\
  !*** ./src/app/shared/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = () => {\n  const headerContainer = document.createElement('header');   // Create header document\n  headerContainer.innerHTML = `\n    <h1>Perdido en el espacio 🚀</h1>\n      <details>\n        <summary>Reglas del juego</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    `;\n  return headerContainer;\n}\n\n//# sourceURL=webpack://lab-06/./src/app/shared/header.js?");

/***/ }),

/***/ "./src/app/shared/progressBar.js":
/*!***************************************!*\
  !*** ./src/app/shared/progressBar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"progressBar\": () => (/* binding */ progressBar)\n/* harmony export */ });\nconst progressBar = (value) => {\n    const progressBarDiv = document.createElement('div');\n    const progressBarSpan = document.createElement('span');\n    progressBarSpan.innerHTML = 'Tu Progreso</br>';\n    const progressBar = document.createElement('progress')\n    progressBar.max = 100;\n    progressBar.value = value;\n    progressBarDiv.appendChild(progressBarSpan);\n    progressBarDiv.appendChild(progressBar);\n    return progressBarDiv;\n}\n\n//# sourceURL=webpack://lab-06/./src/app/shared/progressBar.js?");

/***/ }),

/***/ "./src/app/shared/shared.js":
/*!**********************************!*\
  !*** ./src/app/shared/shared.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { footer } = __webpack_require__(/*! ./footer */ \"./src/app/shared/footer.js\");\nconst { header } = __webpack_require__(/*! ./header */ \"./src/app/shared/header.js\");\nconst { progressBar } = __webpack_require__(/*! ./progressBar */ \"./src/app/shared/progressBar.js\");\n\nmodule.exports = {\n    footer,\n    header,\n    progressBar\n}\n\n//# sourceURL=webpack://lab-06/./src/app/shared/shared.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/components/phase01.js");
/******/ 	
/******/ })()
;