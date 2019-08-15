!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UserList=t():e.UserList=t()}(window,function(){return function(e){var t=window.webpackHotUpdateUserList;window.webpackHotUpdateUserList=function(e,n){!function(e,t){if(w[e]&&m[e]){for(var n in m[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===g&&O()}}(e,n),t&&t(e,n)};var n,r=!0,i="748eb849568e34bc1f8a",o=1e4,s={},a=[],u=[];function c(e){var t=x[e];if(!t)return D;function r(r){return t.hot.active?(x[r]?-1===x[r].parents.indexOf(e)&&x[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),D(r)}function i(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}}for(var o in D)Object.prototype.hasOwnProperty.call(D,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,i(o));return r.e=function(e){return"ready"===p&&d("prepare"),g++,D.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(b[e]||j(e),0===g&&0===v&&O())}},r.t=function(e,t){return 1&t&&(e=r(e)),D.t(e,-2&t)},r}var l=[],p="idle";function d(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var f,h,y,v=0,g=0,b={},m={},w={};function k(e){return+e+""===e?+e:e}function S(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,d("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=D.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(o).then(function(e){if(!e)return d("idle"),null;m={},b={},w=e.c,y=e.h,d("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});return h={},j(0),"prepare"===p&&0===g&&0===v&&O(),t})}function j(e){w[e]?(m[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function O(){d("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return P(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(k(n));e.resolve(t)}}function P(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,u,c;function l(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});0<r.length;){var i=r.pop(),o=i.id,s=i.chain;if((u=x[o])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(u.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var a=0;a<u.parents.length;a++){var c=u.parents[a],l=x[c];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([c]),moduleId:o,parentId:c};-1===t.indexOf(c)&&(l.hot._acceptedDependencies[o]?(n[c]||(n[c]=[]),f(n[c],[o])):(delete n[c],t.push(c),r.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}function v(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")}t=t||{};var g={},b=[],m={};for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var j;c=k(S);var O=!1,P=!1,E=!1,q="";switch((j=h[S]?l(c):{type:"disposed",moduleId:S}).chain&&(q="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+j.moduleId+q));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+q));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(O=new Error("Aborted because "+c+" is not accepted"+q));break;case"accepted":t.onAccepted&&t.onAccepted(j),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),E=!0;break;default:throw new Error("Unexception type "+j.type)}if(O)return d("abort"),Promise.reject(O);if(P)for(c in m[c]=h[c],f(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,c)&&(g[c]||(g[c]=[]),f(g[c],j.outdatedDependencies[c]));E&&(f(b,[j.moduleId]),m[c]=v)}var _,L=[];for(r=0;r<b.length;r++)c=b[r],x[c]&&x[c].hot._selfAccepted&&m[c]!==v&&L.push({module:c,errorHandler:x[c].hot._selfAccepted});d("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var H,M,C=b.slice();0<C.length;)if(c=C.pop(),u=x[c]){var A={},T=u.hot._disposeHandlers;for(o=0;o<T.length;o++)(n=T[o])(A);for(s[c]=A,u.hot.active=!1,delete x[c],delete g[c],o=0;o<u.children.length;o++){var I=x[u.children[o]];I&&0<=(_=I.parents.indexOf(c))&&I.parents.splice(_,1)}}for(c in g)if(Object.prototype.hasOwnProperty.call(g,c)&&(u=x[c]))for(M=g[c],o=0;o<M.length;o++)H=M[o],0<=(_=u.children.indexOf(H))&&u.children.splice(_,1);for(c in d("apply"),i=y,m)Object.prototype.hasOwnProperty.call(m,c)&&(e[c]=m[c]);var $=null;for(c in g)if(Object.prototype.hasOwnProperty.call(g,c)&&(u=x[c])){M=g[c];var U=[];for(r=0;r<M.length;r++)if(H=M[r],n=u.hot._acceptedDependencies[H]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(M)}catch(n){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:n}),t.ignoreErrored||($=$||n)}}}for(r=0;r<L.length;r++){var N=L[r];c=N.module,a=[c];try{D(c)}catch(r){if("function"==typeof N.errorHandler)try{N.errorHandler(r)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:r}),t.ignoreErrored||($=$||n),$=$||r}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:r}),t.ignoreErrored||($=$||r)}}return $?(d("fail"),Promise.reject($)):(d("idle"),new Promise(function(e){e(b)}))}var x={};function D(t){if(x[t])return x[t].exports;var r=x[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);0<=n&&t._disposeHandlers.splice(n,1)},check:S,apply:P,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);0<=t&&l.splice(t,1)},data:s[e]};return n=void 0,t}(t),parents:(u=a,a=[],u),children:[]};return e[t].call(r.exports,r,r.exports,c(t)),r.l=!0,r.exports}return D.m=e,D.c=x,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="",D.h=function(){return i},c(0)(D.s=0)}([function(e,t,n){"use strict";var r,i=(r=n(1))&&r.__esModule?r:{default:r};new i.default(".type__branding",{strings:["Bienvenido...","Ángel Guerrero Blog"],speed:200,breakLines:!1,waitUntilVisible:!0}).go(),new i.default(".type__presentation",{strings:["Desarrollador de software jr.\n","\n","Realizo aplicaciones de escritorio y aplicaciones web, tengo experiencia \n","en el uso de herramientas para el desarrollo Front-End y Back-End... \n\n\n"],speed:50}).pause(2e3).type("<strong>Node.js</strong>").pause(2e3).delete(7).type("<strong>Vue.js</strong>").pause(2e3).delete(6).type("<strong>Java</strong>").pause(2e3).delete(4).type("<strong>JavaFX</strong>").pause(2e3).delete(6).type("<strong>PHP</strong>").pause(2e3).delete(3).type("<strong>SQL</strong>").pause(2e3).delete(3).type("<strong>PL/SQL</strong>").pause(2e3).delete(6).type("<strong>PL/pgSQL</strong>").pause(2e3).delete(8).type("<strong>Sass</strong>").pause(2e3).delete(4).type("<strong>JavaScript</strong>").pause(2e3).delete(10).type("<strong>Jekyll</strong>").pause(2e3).delete(6).type("<strong>Git</strong>").pause(2e3).delete(3).type("<strong>Express.js</strong>").pause(2e3).delete(10).type("<strong>HTML5</strong>").pause(2e3).delete(5).go()},function(e,t,n){
/*!
 * 
 *   typeit - The most versatile animated typing utility on the planet.
 *   Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
 *   Version: v6.0.3
 *   URL: https://typeitjs.com
 *   License: GPL-2.0
 * 
 */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:null,html:!0,waitUntilVisible:!1,beforeString:!1,afterString:!1,beforeStep:!1,afterStep:!1,afterComplete:!1};function i(e){var t=e.getBoundingClientRect();return!(t.right>window.innerWidth||t.bottom>window.innerHeight||t.top<0||t.left<0)}function o(e,t){return Math.abs(Math.random()*(e+t-(e-t))+(e-t))}function s(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("style");n.id=t,n.appendChild(document.createTextNode(e)),document.head.appendChild(n)}var a=function(e,t){for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},u=function(e){return Array.isArray(e)?e.slice(0):e.split("<br>")};function c(e){return e.replace(/&(.+);/,function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value})}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.tag,n=e.attributes,r=void 0===n?[]:n,i=e.content,o=void 0===i?"":i,s=document.createElement(t);return void 0!==r&&r.forEach(function(e){s.setAttribute(e.name,e.value)}),o&&(s.innerHTML=o),s.outerHTML};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.executed=[],!(this.waiting=t).length&&n&&this.add(n)}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"add",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return this.waiting[t?"unshift":"push"](e),this}},{key:"delete",value:function(e){return this.waiting.splice(e,1),this}},{key:"reset",value:function(){return this.waiting=[].concat(f(this.executed),f(this.waiting)),this.executed=[],this}}]),e}();function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v="display:inline;position:relative;font:inherit;color:inherit;line-height:inherit;",g=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=t.element,i=t.id,o=t.options,s=t.queue,c=void 0===s?[]:s;!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.status={started:!1,complete:!1,frozen:!1,destroyed:!1},this.timeouts=[],this.id=i,this.$e=n,this.isInput=-1<["textarea","input"].indexOf(n.tagName.toLowerCase()),this.opts=a({},r,o),this.opts.strings=u(this.opts.strings),this.opts.html=!this.isInput&&this.opts.html,this.queue=new h(c,[this.pause,this.opts.startDelay]),function(e){1<arguments.length&&void 0!==arguments[1]&&arguments[1]?e.value="":[].slice.call(e.childNodes).forEach(function(t){void 0!==t.classList&&t.classList.contains("ti-wrapper")&&(e.innerHTML="")})}(n,this.isInput),this.prepareDelay("nextStringDelay"),this.prepareDelay("loopDelay");var l=this.$e.innerHTML;this.prepDOM(),this.handleHardCoded(l),this.opts.strings=this.opts.strings.map(function(e){return e.replace(/<\!--.*?-->/g,"")}),!this.opts.strings.length||1<this.queue.waiting.length||this.generateQueue()}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"reset",value:function(){return this.queue.reset(),new e({element:this.$e,id:this.id,options:this.opts,queue:this.queue.waiting})}},{key:"init",value:function(){var e=this;if(!this.status.started){if(this.cursor(),!this.opts.waitUntilVisible||i(this.$e))return this.status.started=!0,this.fire();window.addEventListener("scroll",function t(){i(e.$e)&&!e.status.started&&(e.fire(),window.removeEventListener("scroll",t))})}}},{key:"fire",value:function(){for(var e=this,t=this.queue.waiting.slice(),n=Promise.resolve(),r=function(r){var i=t[r],o=[i,e.queue,e];n=n.then(function(){return new Promise(function(t,n){if(e.status.frozen)return n();var r,s;e.setPace(),i[2]&&i[2].isFirst&&e.opts.beforeString&&(r=e.opts).beforeString.apply(r,o),e.opts.beforeStep&&(s=e.opts).beforeStep.apply(s,o),i[0].call(e,i[1],i[2]).then(function(){var n,r,s=e.queue.waiting.shift();return i[2]&&i[2].isPhantom||(i[2]&&i[2].isLast&&e.opts.afterString&&(n=e.opts).afterString.apply(n,o),e.opts.afterStep&&(r=e.opts).afterStep.apply(r,o),e.queue.executed.push(s)),t()})})})},i=0;i<t.length;i++)r(i);n.then(function(){if(e.opts.loop){var t=e.opts.loopDelay?e.opts.loopDelay:e.opts.nextStringDelay;e.wait(function(){e.loopify(t),e.fire()},t.after)}e.status.completed=!0,e.opts.afterComplete&&e.opts.afterComplete(e)}).catch(function(){})}},{key:"loopify",value:function(e){var t=this;this.queue.reset().delete(0).add([this.pause,e.before],!0),this.getNoderized().forEach(function(e){t.queue.add([t.delete,null,{isPhantom:!0}],!0)})}},{key:"prepDOM",value:function(){this.isInput||(this.$e.innerHTML='\n      <span style="'.concat(v,'" class="ti-wrapper">\n        <span style="').concat(v,'" class="ti-container"></span>\n      </span>\n      '),this.$e.setAttribute("data-typeit-id",this.id),this.$eContainer=this.$e.querySelector(".ti-container"),this.$eWrapper=this.$e.querySelector(".ti-wrapper"),s("\n        .".concat(this.$eContainer.className,":before {\n          content: '.';\n          display: inline-block;\n          width: 0;\n          visibility: hidden;\n        }\n      ")))}},{key:"setContents",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";this.isInput?this.$e.value=e:this.$eContainer[this.opts.html?"innerHTML":"innerText"]=e}},{key:"getRaw",value:function(){return this.isInput?this.$e.value:this.opts.html?this.$eContainer.innerHTML:this.$eContainer.innerText}},{key:"getNoderized",value:function(){return this.maybeNoderize(this.getRaw())}},{key:"prepareDelay",value:function(e){var t=this.opts[e];if(t){var n=Array.isArray(t),r=n?null:t/2;this.opts[e]={before:n?t[0]:r,after:n?t[1]:r,total:n?t[0]+t[1]:t}}}},{key:"generateQueue",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;t&&this.queue.add(t),this.opts.strings.forEach(function(t,n){e.queueString(t);var r=e.queue.waiting.length;if(n+1!==e.opts.strings.length){if(e.opts.breakLines)return e.queue.add([e.type,"<br>"]),void e.addSplitPause(r);e.queueDeletions(t),e.addSplitPause(r,t.length)}})}},{key:"queueDeletions",value:function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t="string"==typeof e?this.maybeNoderize(e).length:e,n=0;n<t;n++)this.queue.add([this.delete])}},{key:"maybeNoderize",value:function(e){return this.opts.html?function(e){var t=function(e){var t=(new DOMParser).parseFromString(e,"text/html"),n=[].slice.call(t.body.querySelectorAll("*"));return(n=n.filter(function(t){return!(-1<t.outerHTML.indexOf("></")&&(e=e.replace(t.outerHTML,""),1))})).forEach(function(t){e=e.replace(new RegExp("<".concat(t.tagName,"(.*?)/?>((.*?)</").concat(t.tagName,">)?"),"i"),"{%}")}),{string:e,nodes:n}}(e),n=t.string,r=t.nodes,i=c(n).split(""),o=[];return i.forEach(function(e,t){if("{%}"===i.slice(t,t+3).join("")){var n=t,s=r.shift(),a=c(s.innerHTML).split(""),u=[].slice.call(s.attributes).map(function(e){return{name:e.name,value:e.nodeValue}});a.length?a.forEach(function(e,r){o.push({tag:s.tagName,attributes:u,content:e,isFirstCharacter:n===t,isLastCharacter:r+1===a.length}),n++}):o.push({tag:s.tagName,attributes:u,content:null})}else o.push(e)}),o=function(e){for(var t=!0;t;)e.some(function(t,n){return!("object"!==l(t)||!t.isLastCharacter&&null!==t.content||"%}"!==e.slice(n+1,n+3).join("")||(e.splice(n+1,2),0))})||(t=!1);return e}(o)}(e):e.split("")}},{key:"queueString",value:function(e){var t=this,n=(e=this.maybeNoderize(e)).length;e.forEach(function(e,r){var i=[t.type,e];0===r&&i.push({isFirst:!0}),r+1===n&&i.push({isLast:!0}),t.queue.add(i)})}},{key:"addSplitPause",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;this.queue.waiting.splice(e,0,[this.pause,this.opts.nextStringDelay.before]),this.queue.waiting.splice(e+t+1,0,[this.pause,this.opts.nextStringDelay.after])}},{key:"cursor",value:function(){if(!this.isInput){var e="display: none;";this.opts.cursor&&(s("\n        @keyframes blink-".concat(this.id," {\n          0% {opacity: 0}\n          49% {opacity: 0}\n          50% {opacity: 1}\n        }\n\n        [data-typeit-id='").concat(this.id,"'] .ti-cursor {\n          animation: blink-").concat(this.id," ").concat(this.opts.cursorSpeed/1e3,"s infinite;\n        }\n      "),this.id),e=""),this.$eWrapper.insertAdjacentHTML("beforeend",'<span style="'.concat(v).concat(e,'left: -.25ch;" class="ti-cursor">').concat(this.opts.cursorChar,"</span>"))}}},{key:"insert",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];this.isInput?this.$e.value="".concat(this.$e.value).concat(e):((t?this.$eContainer.lastChild:this.$eContainer).insertAdjacentHTML("beforeend",e),this.setContents(this.getRaw().split("").join("")))}},{key:"handleHardCoded",value:function(e){return!!e.length&&(this.opts.startDelete?(this.insert(e),this.queue.add([this.delete,!0]),void this.addSplitPause(1)):void(this.opts.strings=[].concat(y(u(e.trim())),y(this.opts.strings))))}},{key:"wait",value:function(e,t){this.timeouts.push(setTimeout(e,t))}},{key:"setPace",value:function(){var e=this.opts.speed,t=null!==this.opts.deleteSpeed?this.opts.deleteSpeed:this.opts.speed/3,n=e/2,r=t/2;this.typePace=this.opts.lifeLike?o(e,n):e,this.deletePace=this.opts.lifeLike?o(t,r):t}},{key:"pause",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,r){e.wait(function(){return n()},t||e.opts.nextStringDelay.total)})}},{key:"type",value:function(e){var t=this;return new Promise(function(n,r){t.wait(function(){return"string"==typeof e?t.insert(e):e.isFirstCharacter||null===e.content?t.insert(p({tag:e.tag,attributes:e.attributes,content:e.content})):t.insert(e.content,!0),n()},t.typePace)})}},{key:"empty",value:function(){var e=this;return new Promise(function(t){return e.setContents(""),t()})}},{key:"delete",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,r){e.wait(function(){var r=e.getNoderized();return r.splice(-1,1),r=function(e){return(e=e.map(function(t,n){if("object"!==d(t)||!t.isFirstCharacter&&null!==t.content)return t;for(var r=n,i=[t.content],o=!1;!o;){var s=e[++r];void 0!==s&&i.push(s.content),void 0!==s&&!s.isLastCharacter||(o=!0)}return p({tag:t.tag,attributes:t.attributes,content:i.join("")})})).filter(function(e){return"object"!==d(e)})}(r),e.setContents(r.join("")),t&&0<r.length?e.delete(!0).then(function(){return n()}):n()},e.deletePace)})}},{key:"setOptions",value:function(e){var t=this;return new Promise(function(n){return t.opts=a({},t.opts,e),n()})}}]),e}();n.d(t,"default",function(){return b});var b=function(){function e(t,n){!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.instances=function(e){return"string"==typeof e?e=document.querySelectorAll(e):e instanceof NodeList||(e=[e]),[].slice.call(e)}(t).map(function(e){return new g({element:e,id:Math.random().toString(36).substring(2,15),options:n,queue:[]})})}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"each",value:function(e){var t=this;this.instances.forEach(function(n){e.call(t,n)})}},{key:"queueUp",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;this.each(function(i){for(var o="string"!=typeof e,s=o?e:i[e],a=o?t:n,u=0;u<r;u++)i.queue.add([s,a])})}},{key:"is",value:function(e){return t=this.instances,n=e,!!t.length&&t.filter(function(e){return!0===e.status[n]}).length===t.length;var t,n}},{key:"freeze",value:function(){this.each(function(e){e.status.frozen=!0})}},{key:"unfreeze",value:function(){this.each(function(e){e.status.frozen&&(e.status.frozen=!1,e.fire())})}},{key:"type",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return this.each(function(t){return t.queueString(e)}),this}},{key:"delete",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return this.queueUp("delete",null===e,null===e?1:e),this}},{key:"pause",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return this.queueUp("pause",e),this}},{key:"break",value:function(){return this.queueUp("type","<br>"),this}},{key:"options",value:function(e){return this.queueUp("setOptions",e),this}},{key:"exec",value:function(e){return this.queueUp(e),this}},{key:"destroy",value:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.each(function(t){t.timeouts.forEach(function(e){clearTimeout(e)}),t.timeouts=[];var n=t.isInput?null:t.$eWrapper.querySelector(".ti-cursor");e&&t.opts.cursor&&null!==n&&t.$eWrapper.removeChild(n),t.status.destroyed=!0})}},{key:"empty",value:function(){return this.queueUp("empty"),this}},{key:"reset",value:function(){return this.destroy(),this.instances=this.instances.map(function(e){return e.reset()}),this}},{key:"go",value:function(){return this.each(function(e){e.init()}),this}}]),e}()}]).default}]).default});