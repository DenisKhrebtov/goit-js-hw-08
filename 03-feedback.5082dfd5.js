!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,s=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),s?S(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=v();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,p&&o?S(e):(o=i=void 0,u)}function w(){var e=v(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(T,t),S(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(v())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const S={form:document.querySelector(".feedback-form"),message:document.querySelector('textarea[name="message"]'),email:document.querySelector('input[name="email"]')};S.form.addEventListener("submit",(function(e){e.preventDefault(),S.email.value&&S.message.value?(e.currentTarget.reset(),localStorage.removeItem(j)):alert("Необходимо заполнить все поля");console.log(O)})),S.form.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(O))}),500));const j="feedback-form-state",O=JSON.parse(localStorage.getItem(j))||{};!function(){const e=localStorage.getItem(j),t=JSON.parse(e);e&&(S.email.value=t.email||"",S.message.value=t.message||"")}()}();
//# sourceMappingURL=03-feedback.5082dfd5.js.map
