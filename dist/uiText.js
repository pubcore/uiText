var uiText=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.initLogMissingTextkey=t.isMissingTextkey=void 0;var r,o=(r=n(3))&&r.__esModule?r:{default:r};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,s={},f={},l={postUri:"",timeout:3e3},a=0,c=function(){return(0,o.default)(l.postUri,f).then(function(){f={},s={}})};t.isMissingTextkey=function(e){return s[e]||!1};t.initLogMissingTextkey=function(e){l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({},l,e)};t.default=function(e,t,n){s[e]||(s[e]=!0,f[e]=(n||e)+(t?" "+JSON.stringify(t):""),l.postUri&&a<1&&(a++,0===l.timeout?c():l.timeout>0&&(i&&clearTimeout(i),i=setTimeout(c,l.timeout))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"initLogMissingTextkey",{enumerable:!0,get:function(){return u.initLogMissingTextkey}}),t.uiTextOptional=t.default=void 0;var r,o=(r=n(2))&&r.__esModule?r:{default:r},u=n(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.default=function(e,t,n,r){return(0,o.default)({text:e[t],defaultText:"string"==typeof n?n:"",replacement:"object"===i(n)?n:r,key:t})};t.uiTextOptional=function(e,t,n,r){return(0,o.default)({text:void 0===e[t]?"string"==typeof n?n:"":e[t],defaultText:"",replacement:"object"===i(n)?n:r,key:t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.text,n=e.defaultText,r=e.replacement,u=e.key,i=void 0===t?(0,o.default)(u,r,n)||n||u:t;if(i&&r){var s=[];i=i.replace(/\{(\w+)\}/g,function(e,t){return t in r?r[t]:s.push(t)&&e}),s.length&&console.warn("No data for replacement(s): "+s.join(", "))}return""+i};var r,o=(r=n(0))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";return new Promise(function(r,o){var u=new XMLHttpRequest;u.onreadystatechange=function(){if(4==u.readyState)if(200!=u.status){var e=new Error("HTTP Error:"+u.statusText);e.status=u.status;try{e.body="string"==typeof e.response?u.response:u.response&&JSON.stringify(u.response)||u.responseText}catch(t){e.body=""}o(e)}else"string"==typeof u.response?r(u.response&&JSON.parse(u.response)||null):null===u.response||u.response?r(u.response):r(u.responseText&&JSON.parse(u.responseText)||null)},u.open(n,e,!0),u.withCredentials=!0,u.setRequestHeader("Accept","application/json"),u.setRequestHeader("Content-Type","application/json"),u.responseType="json",u.send(JSON.stringify(t))})}}]).default;