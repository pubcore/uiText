!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initLogMissingTextkey=t.isMissingTextkey=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(2),u=function(e){return e&&e.__esModule?e:{default:e}}(i),s={},f={},a={postUri:"",timeout:3e3},c=0,l=function(){return(0,u.default)(a.postUri,f).then(function(){f={},s={}})},p=function(){o&&clearTimeout(o),o=setTimeout(l,a.timeout)};t.isMissingTextkey=function(e){return s[e]||!1},t.initLogMissingTextkey=function(e){a=r({},a,e)};t.default=function(e,t,n){s[e]||(s[e]=!0,f[e]=(n||e)+(t?" "+JSON.stringify(t):""),a.postUri&&c<1&&(c++,0===a.timeout?l():a.timeout>0&&p()))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uiTextOptional=t.initLogMissingTextkey=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(0);Object.defineProperty(t,"initLogMissingTextkey",{enumerable:!0,get:function(){return r.initLogMissingTextkey}});var i=n(3),u=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(e,t,n,r){return(0,u.default)({text:e[t],defaultText:"string"==typeof n?n:"",replacement:"object"===(void 0===n?"undefined":o(n))?n:r,key:t})};t.uiTextOptional=function(e,t,n,r){return(0,u.default)({text:void 0===e[t]?"string"==typeof n?n:"":e[t],defaultText:"",replacement:"object"===(void 0===n?"undefined":o(n))?n:r,key:t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";return new Promise(function(o,r){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200!=i.status)r(new Error("HTTP Error:"+i.statusText));else{var e="string"==typeof i.response?JSON.parse(i.response):i.response||JSON.parse(i.responseText);o(e)}},i.open(n,e,!0),i.withCredentials=!0,i.setRequestHeader("Accept","application/json"),i.setRequestHeader("Content-Type","application/json"),i.responseType="json",i.send(JSON.stringify(t))})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.text,n=e.defaultText,o=e.replacement,i=e.key,u=void 0===t?(0,r.default)(i,o,n)||n||i:t;if(u&&o){var s=[];u=u.replace(/\{(\w+)\}/g,function(e,t){return t in o?o[t]:s.push(t)&&e}),s.length&&console.warn("No data for replacement(s): "+s.join(", "))}return""+u};var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o)}]);