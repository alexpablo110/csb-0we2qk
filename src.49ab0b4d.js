parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=document.getElementById("library-input"),t=document.getElementById("form-pd"),n=[],r=[],a=[];function o(t){document.getElementById("info-messages").innerHTML="",t.preventDefault();var n=document.getElementById("pageids-textarea").value.trim().split(",").map(function(e){return e.trim()}),r=e.files&&e.files.length&&e.files[0],a=r.name;document.getElementById("app").classList.add("loading"),i(r).then(function(e){e&&e instanceof XMLDocument?g(n,e,a):v('File "'.concat(a,'" can not be parsed.'),"error")})}function i(e){var t=new FileReader;return new Promise(function(n,r){t.onerror=function(){t.abort(),r(new DOMException("Problem parsing input file."))},t.onload=function(){var e=t.result,r=(new DOMParser).parseFromString(e,"text/xml");n(r)},t.readAsText(e)})}function c(e,t){var n,r="/*[local-name()='price-table'][@product-id=\"".concat(e,'"]');if(t.evaluate)for(var a=t.evaluate(r,t,null,XPathResult.ANY_TYPE,null),o=a.iterateNext();o;)n=o,o=a.iterateNext();else window.ActiveXObject&&(t.setProperty("SelectionLanguage","XPath"),n=(a=t.selectNodes(r))&&a[0]);return n}function l(e,t){var n=[];if(t.evaluate)for(var r=t.evaluate(e,t,null,XPathResult.ANY_TYPE,null),a=r.iterateNext();a;)n.push(a),a=r.iterateNext();else window.ActiveXObject&&(t.setProperty("SelectionLanguage","XPath"),n=r=t.selectNodes(e));return n}function u(e,t){var n=f(e),r=l("/*[local-name()='catalog']/*[local-name()='category-assignment'][@category-id=\"".concat(n,'"]'),t);return a=a.concat(r.map(function(e){return e.getAttribute("product-id")})),r}function s(e){var t=e.getElementsByTagName("parent");return t&&Array.from(t).length&&Array.from(t)[0].innerHTML}function d(e,t){var n=e,r=t.getElementsByTagName("price-table");return r=Array.from(r).filter(function(e){return e.getAttribute("product-id")===n})}function m(e,t){var n=f(e);return l("/*[local-name()='catalog']/*[local-name()='category']",t).filter(function(e){return s(e)===n})}function f(e){return e.getAttribute("category-id")}function g(e,t,n){var r=t.getElementsByTagName("pricebooks")[0];if(!r)return v('"library" node was not found in file "'.concat(n,'". Please verify xml structure.'),"error"),void document.getElementById("app").classList.remove("loading");var a=r.cloneNode(!0);a.innerHTML="";var o=!1;e.forEach(function(e){var n=d(e,t);if(n&&n.length){var r=n;for(o=!0;r.length;){var i=r.pop();a.appendChild(document.createTextNode("\n\n    ")),a.appendChild(i)}a.appendChild(document.createTextNode("\n\n    "))}else v('Page "'.concat(e,'" is not found. Skipping..'),"warning")}),a.appendChild(document.createTextNode("\n\n")),o?(p(n,'<?xml version="1.0" encoding="UTF-8"?>\n'+a.outerHTML),v("Library xml is successfully filtered.","success")):v("No pages found.","error"),document.getElementById("app").classList.remove("loading")}function p(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/xml;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.setAttribute("target","_blank"),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}function v(e,t){var n="";switch(t){case"error":n="error-msg";break;case"warning":n="warning-msg";break;case"info":n="info-msg";break;case"success":default:n="success-msg"}var r=document.createElement("div");r.classList.add(n),r.innerHTML=e,document.getElementById("info-messages").appendChild(r)}t.addEventListener("submit",o,!1);
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-0we2qk/src.49ab0b4d.js.map