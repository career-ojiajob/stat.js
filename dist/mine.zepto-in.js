(function () {
    /* Zepto v1.1.7 - zepto event data selector - zeptojs.com/license */
var Zepto=function(){function Z(t){return null==t?String(t):N[C.call(t)]||"object"}function L(t){return"function"==Z(t)}function k(t){return null!=t&&t==t.window}function D(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function j(t){return"object"==Z(t)}function z(t){return j(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){var e=!!t&&"length"in t&&t.length,i=n.type(t);return"function"!=i&&!k(t)&&("array"==i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function _(t){return s.call(t,function(t){return null!=t})}function q(t){return t.length>0?n.fn.concat.apply([],t):t}function V(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function R(t){return t in a?a[t]:a[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function F(t,e){return"number"!=typeof e||c[V(t)]?e:e+"px"}function B(t){var e,n;return f[t]||(e=u.createElement(t),u.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]}function I(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function H(n,i,r){for(e in i)r&&(z(i[e])||$(i[e]))?(z(i[e])&&!z(n[e])&&(n[e]={}),$(i[e])&&!$(n[e])&&(n[e]=[]),H(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function X(t,e){return null==e?n(t):n(t).filter(e)}function Y(t,e,n,i){return L(e)?e.call(t,n,i):e}function J(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function U(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function W(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,P,S,r=[],o=r.slice,s=r.filter,u=window.document,f={},a={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=u.createElement("table"),w=u.createElement("tr"),b={tr:u.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:w,th:w,"*":u.createElement("div")},E=/complete|loaded|interactive/,x=/^[\w-]*$/,N={},C=N.toString,O={},T=u.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},$=Array.isArray||function(t){return t instanceof Array};return O.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=T).appendChild(t),i=~O.qsa(r,e).indexOf(t),o&&T.removeChild(t),i},P=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},O.fragment=function(e,i,r){var s,f,a;return h.test(e)&&(s=n(u.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),a=b[i],a.innerHTML=""+e,s=n.each(o.call(a.childNodes),function(){a.removeChild(this)})),z(r)&&(f=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?f[t](e):f.attr(t,e)})),s},O.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},O.isZ=function(t){return t instanceof O.Z},O.init=function(e,i){var r;if(!e)return O.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=O.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=O.qsa(u,e)}else{if(L(e))return n(u).ready(e);if(O.isZ(e))return e;if($(e))r=_(e);else if(j(e))r=[e],e=null;else if(l.test(e))r=O.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=O.qsa(u,e)}}return O.Z(r,e)},n=function(t,e){return O.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){H(t,n,e)}),t},O.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,u=x.test(s);return D(t)&&u&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(u&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=u.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=Z,n.isFunction=L,n.isWindow=k,n.isArray=$,n.isPlainObject=z,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=P,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return q(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){N["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return E.test(u.readyState)&&u.body?t(n):u.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return L(t)?this.not(this.not(t)):n(s.call(this,function(e){return O.matches(e,t)}))},add:function(t,e){return n(S(this.concat(n(t,e))))},is:function(t){return this.length>0&&O.matches(this[0],t)},not:function(e){var i=[];if(L(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&L(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return j(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!j(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!j(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(O.qsa(this[0],t)):this.map(function(){return O.qsa(this,t)}):n()},closest:function(t,e){var i=[],r="object"==typeof t&&n(t);return this.each(function(n,o){for(;o&&!(r?r.indexOf(o)>=0:O.matches(o,t));)o=o!==e&&!D(o)&&o.parentNode;o&&i.indexOf(o)<0&&i.push(o)}),n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!D(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return X(e,t)},parent:function(t){return X(S(this.pluck("parentNode")),t)},children:function(t){return X(this.map(function(){return I(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return X(this.map(function(t,e){return s.call(I(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=L(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=L(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(Y(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(j(n))for(e in n)J(this,e,n[e]);else J(this,n,Y(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){J(this,t)},this)})},prop:function(t,e){return t=A[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?W(r):t},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=Y(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;if(u.documentElement!==this[0]&&!n.contains(u.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0];if("string"==typeof t){if(!r)return;return r.style[P(t)]||getComputedStyle(r,"").getPropertyValue(t)}if($(t)){if(!r)return;var o={},s=getComputedStyle(r,"");return n.each(t,function(t,e){o[e]=r.style[P(e)]||s.getPropertyValue(e)}),o}}var u="";if("string"==Z(t))i||0===i?u=V(t)+":"+F(t,i):this.each(function(){this.style.removeProperty(V(t))});else for(e in t)t[e]||0===t[e]?u+=V(e)+":"+F(e,t[e])+";":this.each(function(){this.style.removeProperty(V(e))});return this.each(function(){this.style.cssText+=";"+u})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(U(t))},R(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=U(this),o=Y(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&U(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return U(this,"");i=U(this),Y(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(R(t)," ")}),U(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=Y(this,e,r,U(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?k(s)?s["inner"+i]:D(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,Y(this,r,t,s[e]()))})}}),v.forEach(function(e,i){var r=i%2;n.fn[e]=function(){var e,s,o=n.map(arguments,function(i){var r=[];return e=Z(i),"array"==e?(i.forEach(function(e){return e.nodeType!==t?r.push(e):n.zepto.isZ(e)?r=r.concat(e.get()):void(r=r.concat(O.fragment(e)))}),r):"object"==e||null==i?i:O.fragment(i)}),f=this.length>1;return o.length<1?this:this.each(function(t,e){s=r?e:e.parentNode,e=0==i?e.nextSibling:1==i?e.firstChild:2==i?e:null;var a=n.contains(u.documentElement,s);o.forEach(function(t){if(f)t=t.cloneNode(!0);else if(!s)return n(t).remove();s.insertBefore(t,e),a&&G(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:window;e.eval.call(e,t.innerHTML)}})})})},n.fn[r?e+"To":"insert"+(i?"Before":"After")]=function(t){return n(t)[e](this),this}}),O.Z.prototype=n.fn,O.uniq=S,O.deserializeValue=W,n.zepto=O,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!i||t.sel==i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!f&&t.e in a||!!e}function g(t){return c[t]||f&&a[t]||t}function v(e,i,r,o,u,f,a){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=u,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=f;var l=f||r;s.proxy=function(t){if(t=N(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,a))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function N(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(x,function(t,n){var r=i[t];e[t]=function(){return this[n]=w,r&&r.apply(i,arguments)},e[n]=b}),e.timeStamp||(e.timeStamp=Date.now()),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function C(t){var e,i={originalEvent:t};for(e in t)E.test(e)||t[e]===n||(i[e]=t[e]);return N(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},u={},f="onfocusin"in window,a={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var u=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return u._zid=l(e),u}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},b=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,u,f,a){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,u,e,a)}),h):(o(s)||r(f)||f===!1||(f=u,u=s,s=n),(f===n||u===!1)&&(f=u,u=n),f===!1&&(f=b),h.each(function(n,r){a&&(c=function(t){return y(r,t.type,f),f.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(C(e),{currentTarget:o,liveFired:r}),(c||f).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,f,u,s,l||c)}))},t.fn.off=function(e,i,s){var u=this;return e&&!o(e)?(t.each(e,function(t,e){u.off(t,i,e)}),u):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),u.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):N(e),e._args=n,this.each(function(){e.type in a&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,u){i=C(o(e)?t.Event(e):e),i._args=n,i.target=u,t.each(h(u,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),N(n)}}(Zepto),function(t){function s(o,s){var f=o[r],a=f&&e[f];if(void 0===s)return a||u(o);if(a){if(s in a)return a[s];var c=i(s);if(c in a)return a[c]}return n.call(t(o),s)}function u(n,o,s){var u=n[r]||(n[r]=++t.uuid),a=e[u]||(e[u]=f(n));return void 0!==o&&(a[i(o)]=s),a}function f(e){var n={};return t.each(e.attributes||o,function(e,r){0==r.name.indexOf("data-")&&(n[i(r.name.replace("data-",""))]=t.zepto.deserializeValue(r.value))}),n}var e={},n=t.fn.data,i=t.camelCase,r=t.expando="Zepto"+ +new Date,o=[];t.fn.data=function(e,n){return void 0===n?t.isPlainObject(e)?this.each(function(n,i){t.each(e,function(t,e){u(i,t,e)})}):0 in this?s(this[0],e):void 0:this.each(function(){u(this,e,n)})},t.fn.removeData=function(n){return"string"==typeof n&&(n=n.split(/\s+/)),this.each(function(){var o=this[r],s=o&&e[o];s&&t.each(n||s,function(t){delete s[n?i(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(Zepto),function(t){function r(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function a(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in o&&(n=o[r[2]],i=r[3],t=r[1],i)){var u=Number(i);i=isNaN(u)?i.replace(/^["']|["']$/g,""):u}return e(t,n,i)}var e=t.zepto,n=e.qsa,i=e.matches,o=t.expr[":"]={visible:function(){return r(this)?this:void 0},hidden:function(){return r(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,n,i){return e.qsa(this,i).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,f="Zepto"+ +new Date;e.qsa=function(i,r){return a(r,function(o,s,a){try{var c;!o&&s?o="*":u.test(o)&&(c=t(i).addClass(f),o="."+f+" "+o);var l=n(i,o)}catch(h){throw console.error("error performing selector: %o",r),h}finally{c&&c.removeClass(f)}return s?e.uniq(t.map(l,function(t,e){return s.call(t,e,l,a)})):l})},e.matches=function(t,e){return a(e,function(e,n,r){return(!e||i(t,e))&&(!n||n.call(t,null,r)===t)})}}(Zepto);

    (function (window, $, undefined) {
        (function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jQueryOrZepto')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jQueryOrZepto'], factory) :
	(factory((global.Mine = {}),$));
}(this, (function (exports,$) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

function select(sel) {
    return $(sel);
}

var config = function (conf) {};

var bind = function () {};

var unbind = function () {};

var check = function () {};

var send = function () {};

exports.config = config;
exports.bind = bind;
exports.unbind = unbind;
exports.check = check;
exports.send = send;
exports.select = select;

Object.defineProperty(exports, '__esModule', { value: true });

})));

    })(window, (typeof jQuery === 'undefined') ? Zepto : jQuery);
})();