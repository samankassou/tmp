/*! For license information please see 11.js.LICENSE.txt?id=90e77ca8eb872db50485 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3qul":function(t,e,r){"use strict";r.r(e);var a=r("L2JU"),n={props:{isLoading:{type:Boolean,default:!0},review:{type:Object,required:!0,default:function(){}}},computed:{}},o=r("KHd+"),i=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex py-4"},[t.review.user.avatar?e("v-avatar",[e("img",{staticClass:"border",attrs:{src:t.review.user.avatar,alt:t.review.user.name}})]):e("v-avatar",{attrs:{color:t.get_random_color()}},[e("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.review.user.name.charAt(0)))])]),t._v(" "),e("span",{staticClass:"ms-4"},[e("div",{staticClass:"fw-700 lh-1"},[t._v(t._s(t.review.user.name))]),t._v(" "),e("div",{staticClass:"fs-11 opacity-50"},[t._v(t._s(t.review.time))]),t._v(" "),e("v-rating",{staticClass:"lh-1-5 mb-2",attrs:{"background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half half",hover:"","half-increments":"",readonly:"",size:"12",length:"5",value:t.review.rating}}),t._v(" "),e("div",{staticClass:"fs-12 opacity-70"},[t._v(t._s(t.review.comment))])],1)],1)}),[],!1,null,null,null).exports;function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),s=new k(n||[]);return a(i,"_invoke",{value:L(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var v={};function h(){}function p(){}function m(){}var g={};u(g,o,(function(){return this}));var y=Object.getPrototypeOf,_=y&&y(y(O([])));_&&_!==e&&r.call(_,o)&&(g=_);var w=m.prototype=h.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;a(this,"_invoke",{value:function(a,o){function i(){return new e((function(n,i){!function a(n,o,i,l){var c=f(t[n],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==s(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,l)}),(function(t){a("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,l)}))}l(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}})}function L(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return S()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=P(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=f(t,e,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function P(t,e){var r=e.method,a=t.iterator[r];if(void 0===a)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var n=f(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:p,configurable:!0}),p.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new x(d(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},t}function c(t,e,r,a,n,o,i){try{var s=t[o](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(a,n)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){c(o,a,n,i,s,"next",t)}function s(t){c(o,a,n,i,s,"throw",t)}i(void 0)}))}}var d={props:{isLoading:{type:Boolean,default:!0},id:{type:Number,default:null},reviewSummary:{type:Object,required:!0,default:function(){}}},data:function(){return{loading:!0,sortingDefaultValue:"latest",filterDefaultValue:"all",totalPages:1,currentPage:1,reviews:[]}},components:{ProductSingleReview:i},computed:{sortingDefault:{get:function(){return{name:this.$i18n.t("latest_first"),value:"latest"}},set:function(t){}},sortingOptions:function(){return[{name:this.$i18n.t("latest_first"),value:"latest"},{name:this.$i18n.t("oldest_first"),value:"oldest"},{name:this.$i18n.t("higher_rating_first"),value:"higer_rating"},{name:this.$i18n.t("lower_rating_first"),value:"lower_rating"}]},filterDefault:{get:function(){return{name:this.$i18n.t("all_star"),value:"all"}},set:function(t){}},filterOptions:function(){return[{name:this.$i18n.t("all_star"),value:"all"},{name:"5 "+this.$i18n.t("star"),value:"5"},{name:"4 "+this.$i18n.t("star"),value:"4"},{name:"3 "+this.$i18n.t("star"),value:"3"},{name:"2 "+this.$i18n.t("star"),value:"2"},{name:"1 "+this.$i18n.t("star"),value:"1"}]}},methods:{getList:function(){var t=arguments,e=this;return u(l().mark((function r(){var a,n,o,i;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=t.length>0&&void 0!==t[0]?t[0]:1,n=e.sortingDefaultValue,o=e.filterDefaultValue,null===e.id){r.next=8;break}return r.next=6,e.call_api("get","product/reviews/".concat(e.id,"?page=").concat(a,"&sortby=").concat(n,"&filterby=").concat(o));case 6:(i=r.sent).data.success&&(e.loading=!1,e.reviews=i.data.data,e.totalPages=i.data.meta.last_page);case 8:case"end":return r.stop()}}),r)})))()},sortUpdate:function(t){this.sortingDefaultValue=t,this.getList()},filterUpdate:function(t){this.filterDefaultValue=t,this.getList()}},watch:{id:function(){this.getList()}}};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),s=new k(n||[]);return a(i,"_invoke",{value:L(t,r,s)}),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function h(){}function p(){}function m(){}var g={};l(g,o,(function(){return this}));var y=Object.getPrototypeOf,_=y&&y(y(O([])));_&&_!==e&&r.call(_,o)&&(g=_);var w=m.prototype=h.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;a(this,"_invoke",{value:function(a,o){function i(){return new e((function(n,i){!function a(n,o,i,s){var l=u(t[n],t,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==f(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(d).then((function(t){c.value=t,i(c)}),(function(t){return a("throw",t,i,s)}))}s(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}})}function L(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return S()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=P(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(t,e,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function P(t,e){var r=e.method,a=t.iterator[r];if(void 0===a)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new x(c(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),l(w,s,"Generator"),l(w,o,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function h(t,e,r,a,n,o,i){try{var s=t[o](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(a,n)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){h(o,a,n,i,s,"next",t)}function s(t){h(o,a,n,i,s,"throw",t)}i(void 0)}))}}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==f(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===f(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var _={metaInfo:function(){return{title:this.metaTitle}},data:function(){return{metaTitle:"",detailsLoading:!0,productDetails:{},reviewSummary:{average:0},relatedLoading:!0,relatedProducts:[{},{},{},{},{}],togetherLoading:!0,boughtTogetherProducts:[{},{},{},{},{}],moreLoading:!0,moreProducts:[{},{},{},{},{}],panel:[0,1],carouselOption:{slidesPerView:5,spaceBetween:20,breakpoints:{0:{slidesPerView:2,spaceBetween:12},599:{slidesPerView:3,spaceBetween:16},960:{slidesPerView:4,spaceBetween:20},1264:{slidesPerView:4,spaceBetween:20},1904:{slidesPerView:5,spaceBetween:20}}}}},components:{ProductReviews:Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-reviews"},[e("v-row",{staticClass:"pt-8 pb-16",attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"display-2 opacity-60"},[t._v(t._s(t.reviewSummary.average.toFixed(2)))]),t._v(" "),e("div",[t._v(t._s(t.$t("out_of"))+" 5.00")]),t._v(" "),e("v-rating",{staticClass:"lh-1-5",attrs:{"background-color":"","empty-icon":"las la-star grey--text","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"15",length:"5",value:t.reviewSummary.average}}),t._v(" "),e("div",{staticClass:"fs-12 opacity-70 mt-1"},[t._v(t._s(t.reviewSummary.total_count)+" "+t._s(t.$t("ratings")))])],1),t._v(" "),e("v-col",{staticClass:"text-center border-md-start",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"w-260px mx-auto"},[e("div",{staticClass:"d-flex align-center"},[e("v-rating",{staticClass:"lh-1-5",attrs:{"background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"12",length:"5",value:5}}),t._v(" "),e("v-progress-linear",{staticClass:"ms-5",attrs:{"background-color":"#EEEEEE",color:"#B8B8B8",value:parseInt(100*t.reviewSummary.count_5/t.reviewSummary.total_count),height:"6",rounded:""}}),t._v(" "),e("span",{staticClass:"w-60px text-right fs-12 opacity-60"},[t._v(t._s(t.reviewSummary.count_5))])],1),t._v(" "),e("div",{staticClass:"d-flex align-center"},[e("v-rating",{staticClass:"lh-1-5",attrs:{"background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"12",length:"5",value:4}}),t._v(" "),e("v-progress-linear",{staticClass:"ms-5",attrs:{"background-color":"#EEEEEE",color:"#B8B8B8",value:parseInt(100*t.reviewSummary.count_4/t.reviewSummary.total_count),height:"6",rounded:""}}),t._v(" "),e("span",{staticClass:"w-60px text-right fs-12 opacity-60"},[t._v(t._s(t.reviewSummary.count_4))])],1),t._v(" "),e("div",{staticClass:"d-flex align-center"},[e("v-rating",{staticClass:"lh-1-5",attrs:{"background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"12",length:"5",value:3}}),t._v(" "),e("v-progress-linear",{staticClass:"ms-5",attrs:{"background-color":"#EEEEEE",color:"#B8B8B8",value:parseInt(100*t.reviewSummary.count_3/t.reviewSummary.total_count),height:"6",rounded:""}}),t._v(" "),e("span",{staticClass:"w-60px text-right fs-12 opacity-60"},[t._v(t._s(t.reviewSummary.count_3))])],1),t._v(" "),e("div",{staticClass:"d-flex align-center"},[e("v-rating",{staticClass:"lh-1-5",attrs:{"background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"12",length:"5",value:2}}),t._v(" "),e("v-progress-linear",{staticClass:"ms-5",attrs:{"background-color":"#EEEEEE",color:"#B8B8B8",value:parseInt(100*t.reviewSummary.count_2/t.reviewSummary.total_count),height:"6",rounded:""}}),t._v(" "),e("span",{staticClass:"w-60px text-right fs-12 opacity-60"},[t._v(t._s(t.reviewSummary.count_2))])],1),t._v(" "),e("div",{staticClass:"d-flex align-center"},[e("v-rating",{staticClass:"lh-1-5",attrs:{"background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"12",length:"5",value:1}}),t._v(" "),e("v-progress-linear",{staticClass:"ms-5",attrs:{"background-color":"#EEEEEE",color:"#B8B8B8",value:parseInt(100*t.reviewSummary.count_1/t.reviewSummary.total_count),height:"6",rounded:""}}),t._v(" "),e("span",{staticClass:"w-60px text-right fs-12 opacity-60"},[t._v(t._s(t.reviewSummary.count_1))])],1)])])],1),t._v(" "),e("div",[e("div",{staticClass:"border-md-top border-bottom d-md-flex align-center mb-3"},[e("span",{staticClass:"fw-700 d-inline-block mb-4 mb-md-0"},[t._v(t._s(t.$t("product_reviews")))]),t._v(" "),e("div",{staticClass:"ms-auto d-flex justify-space-between border-top border-md-top-0"},[e("span",{staticClass:"border-md-start border-start-0 d-block flex-grow-1"},[e("v-select",{attrs:{items:t.sortingOptions,"item-text":"name","item-value":"value","menu-props":{offsetY:!0},flat:"",solo:"","hide-details":""},on:{change:t.sortUpdate},scopedSlots:t._u([{key:"selection",fn:function(r){var a=r.item;return[e("span",{staticClass:"fs-13 d-flex align-center opacity-80"},[e("i",{staticClass:"las la-exchange-alt la-rotate-90 fs-17"}),t._v(" "),e("span",{staticClass:"opacity-60 mx-1"},[t._v(t._s(t.$t("sort"))+":")]),t._v(" "),e("span",[t._v(t._s(a.name))])])]}}]),model:{value:t.sortingDefault,callback:function(e){t.sortingDefault=e},expression:"sortingDefault"}})],1),t._v(" "),e("span",{staticClass:"border-start d-block flex-grow-1"},[e("v-select",{attrs:{items:t.filterOptions,"item-text":"name","item-value":"value","menu-props":{offsetY:!0},flat:"",solo:"","hide-details":""},on:{change:t.filterUpdate},scopedSlots:t._u([{key:"selection",fn:function(r){var a=r.item;return[e("span",{staticClass:"fs-13 d-flex align-center"},[e("i",{staticClass:"las la-filter fs-17 opacity-80"}),t._v(" "),e("span",{staticClass:"opacity-60 mx-1"},[t._v("Filter:")]),t._v(" "),e("span",[t._v(t._s(a.name))])])]}}]),model:{value:t.filterDefault,callback:function(e){t.filterDefault=e},expression:"filterDefault"}})],1)])]),t._v(" "),e("div",[t.reviews.length>0?t._l(t.reviews,(function(r,a){return e("ProductSingleReview",{key:a,attrs:{"id-loading":t.loading,review:r}})})):[e("div",{staticClass:"text-center pa-4"},[t._v(t._s(t.$t("no_reviews_found_for_this_product")))])]],2),t._v(" "),t.totalPages>1?e("div",{staticClass:"text-end"},[e("v-pagination",{staticClass:"my-4",attrs:{length:t.totalPages,"prev-icon":"la-angle-left","next-icon":"la-angle-right","total-visible":7,elevation:"0"},on:{input:t.getList},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()])],1)}),[],!1,null,null,null).exports,AddToCart:r("YDey").a},computed:{},methods:g(g({},Object(a.b)("recentlyViewed",["addNewRecentlyViewedProduct"])),{},{getDetails:function(){var t=this;return p(v().mark((function e(){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.call_api("get","product/details/".concat(t.$route.params.slug));case 2:(r=e.sent).data.success?(t.metaTitle=r.data.data.metaTitle,t.productDetails=r.data.data,t.reviewSummary=t.productDetails.review_summary,t.getRelatedProducts(t.productDetails.id),t.getBoughtTogetherProducts(t.productDetails.id),t.getMoreProducts(t.productDetails.id),t.addNewRecentlyViewedProduct(t.productDetails.id)):(t.snack({message:r.data.message,color:"red"}),t.$router.push({name:"404"})),t.detailsLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},getRelatedProducts:function(t){var e=this;return p(v().mark((function r(){var a;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.call_api("get","product/related/".concat(t));case 2:(a=r.sent).data.success&&(e.relatedProducts=a.data.data,e.relatedLoading=!1);case 4:case"end":return r.stop()}}),r)})))()},getBoughtTogetherProducts:function(t){var e=this;return p(v().mark((function r(){var a;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.call_api("get","product/bought-together/".concat(t));case 2:(a=r.sent).data.success&&(e.boughtTogetherProducts=a.data.data,e.togetherLoading=!1);case 4:case"end":return r.stop()}}),r)})))()},getMoreProducts:function(t){var e=this;return p(v().mark((function r(){var a;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.call_api("get","product/random/10/".concat(t));case 2:(a=r.sent).data.success&&(e.moreProducts=a.data.data,e.moreLoading=!1);case 4:case"end":return r.stop()}}),r)})))()}}),created:function(){var t=this;return p(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getDetails();case 1:case"end":return e.stop()}}),e)})))()}},w=(r("GLkQ"),Object(o.a)(_,(function(){var t=this,e=t._self._c;return e("v-container",{staticClass:"pt-7"},[e("v-row",{attrs:{align:"start"}},[e("v-col",{staticClass:"main-bar",attrs:{lg:"10",cols:"12"}},[e("add-to-cart",{staticClass:"mb-10",attrs:{"is-loading":t.detailsLoading,"product-details":t.productDetails}}),t._v(" "),e("div",{staticClass:"mb-6",attrs:{cols:"12"}},[e("v-expansion-panels",{staticClass:"product-details-expansion",attrs:{flat:"",multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[e("v-expansion-panel",{staticClass:"mb-3"},[e("v-expansion-panel-header",{attrs:{"expand-icon":"las la-arrow-circle-right"}},[e("div",{staticClass:"d-flex align-center"},[e("svg",{attrs:{id:"_004-product-description","data-name":"004-product-description",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[e("g",{attrs:{id:"Group_1264","data-name":"Group 1264"}},[e("path",{attrs:{id:"Path_3166","data-name":"Path 3166",d:"M18.75,5H1.25A1.252,1.252,0,0,1,0,3.75V1.25A1.252,1.252,0,0,1,1.25,0h17.5A1.252,1.252,0,0,1,20,1.25v2.5A1.252,1.252,0,0,1,18.75,5ZM1.25.833a.417.417,0,0,0-.417.417v2.5a.417.417,0,0,0,.417.417h17.5a.417.417,0,0,0,.417-.417V1.25A.417.417,0,0,0,18.75.833Z",fill:"#f5a100"}})]),t._v(" "),e("g",{attrs:{id:"Group_1265","data-name":"Group 1265",transform:"translate(15 7.5)"}},[e("path",{attrs:{id:"Path_3167","data-name":"Path 3167",d:"M20.5,14A2.5,2.5,0,1,1,23,11.5,2.5,2.5,0,0,1,20.5,14Zm0-4.167A1.667,1.667,0,1,0,22.167,11.5,1.668,1.668,0,0,0,20.5,9.833Z",transform:"translate(-18 -9)",fill:"#f5a100"}})]),t._v(" "),e("g",{attrs:{id:"Group_1266","data-name":"Group 1266",transform:"translate(15 15)"}},[e("path",{attrs:{id:"Path_3168","data-name":"Path 3168",d:"M20.5,23A2.5,2.5,0,1,1,23,20.5,2.5,2.5,0,0,1,20.5,23Zm0-4.167A1.667,1.667,0,1,0,22.167,20.5,1.668,1.668,0,0,0,20.5,18.833Z",transform:"translate(-18 -18)",fill:"#f5a100"}})]),t._v(" "),e("g",{attrs:{id:"Group_1267","data-name":"Group 1267",transform:"translate(0 8.333)"}},[e("path",{attrs:{id:"Path_3169","data-name":"Path 3169",d:"M12.917,10.833H.417a.417.417,0,1,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",transform:"translate(0 -10)",fill:"#f5a100"}})]),t._v(" "),e("g",{attrs:{id:"Group_1268","data-name":"Group 1268",transform:"translate(0 10.833)"}},[e("path",{attrs:{id:"Path_3170","data-name":"Path 3170",d:"M12.917,13.833H.417a.417.417,0,1,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",transform:"translate(0 -13)",fill:"#f5a100"}})]),t._v(" "),e("g",{attrs:{id:"Group_1269","data-name":"Group 1269",transform:"translate(0 15.833)"}},[e("path",{attrs:{id:"Path_3171","data-name":"Path 3171",d:"M12.917,19.833H.417a.417.417,0,1,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",transform:"translate(0 -19)",fill:"#f5a100"}})]),t._v(" "),e("g",{attrs:{id:"Group_1270","data-name":"Group 1270",transform:"translate(0 18.333)"}},[e("path",{attrs:{id:"Path_3172","data-name":"Path 3172",d:"M12.917,22.833H.417a.417.417,0,0,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",transform:"translate(0 -22)",fill:"#f5a100"}})])]),t._v(" "),e("span",{staticClass:"fs-16 ms-5"},[t._v(t._s(t.$t("description")))])])]),t._v(" "),e("v-expansion-panel-content",[e("div",{domProps:{innerHTML:t._s(t.productDetails.description)}})])],1),t._v(" "),e("v-expansion-panel",{staticClass:"mb-3"},[e("v-expansion-panel-header",{attrs:{"expand-icon":"las la-arrow-circle-right"}},[e("div",{staticClass:"d-flex align-center"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[e("g",{attrs:{id:"Group_1286","data-name":"Group 1286",transform:"translate(-567 -1260.5)"}},[e("g",{attrs:{id:"Group_1272","data-name":"Group 1272",transform:"translate(567 1260.5)"}},[e("g",{attrs:{id:"Group_1271","data-name":"Group 1271",transform:"translate(0 0)"}},[e("path",{attrs:{id:"Path_3173","data-name":"Path 3173",d:"M6.65,2.545a.417.417,0,0,0-.287-.273L4.655,1.805,3.684.325a.433.433,0,0,0-.7,0l-.971,1.48L.307,2.271a.417.417,0,0,0-.216.663L1.2,4.316,1.115,6.085a.417.417,0,0,0,.564.41l1.656-.627,1.656.627a.417.417,0,0,0,.564-.41L5.471,4.316,6.579,2.935A.417.417,0,0,0,6.65,2.545ZM4.722,3.917a.418.418,0,0,0-.091.281L4.692,5.49,3.483,5.032a.416.416,0,0,0-.3,0L1.978,5.49,2.04,4.2a.417.417,0,0,0-.091-.281L1.14,2.909l1.248-.341a.417.417,0,0,0,.239-.174l.709-1.081.709,1.081a.417.417,0,0,0,.239.174l1.247.341Z",transform:"translate(0 -0.148)",fill:"#fff"}})])]),t._v(" "),e("g",{attrs:{id:"Group_1285","data-name":"Group 1285",transform:"translate(567 1274.127)"}},[e("g",{attrs:{id:"Group_1271-2","data-name":"Group 1271",transform:"translate(0 0)"}},[e("path",{attrs:{id:"Path_3173-2","data-name":"Path 3173",d:"M6.65,2.545a.417.417,0,0,0-.287-.273L4.655,1.805,3.684.325a.433.433,0,0,0-.7,0l-.971,1.48L.307,2.271a.417.417,0,0,0-.216.663L1.2,4.316,1.115,6.085a.417.417,0,0,0,.564.41l1.656-.627,1.656.627a.417.417,0,0,0,.564-.41L5.471,4.316,6.579,2.935A.417.417,0,0,0,6.65,2.545ZM4.722,3.917a.418.418,0,0,0-.091.281L4.692,5.49,3.483,5.032a.416.416,0,0,0-.3,0L1.978,5.49,2.04,4.2a.417.417,0,0,0-.091-.281L1.14,2.909l1.248-.341a.417.417,0,0,0,.239-.174l.709-1.081.709,1.081a.417.417,0,0,0,.239.174l1.247.341Z",transform:"translate(0 -0.148)",fill:"#fff"}})])]),t._v(" "),e("g",{attrs:{id:"Group_1278","data-name":"Group 1278",transform:"translate(567 1267.314)"}},[e("g",{attrs:{id:"Group_1277","data-name":"Group 1277"}},[e("path",{attrs:{id:"Path_3174","data-name":"Path 3174",d:"M6.65,169.895a.418.418,0,0,0-.287-.273l-1.708-.466-.971-1.48a.433.433,0,0,0-.7,0l-.971,1.48-1.708.466a.417.417,0,0,0-.216.663L1.2,171.666l-.084,1.769a.417.417,0,0,0,.564.41l1.656-.627,1.656.627a.417.417,0,0,0,.564-.41l-.084-1.769,1.108-1.381A.417.417,0,0,0,6.65,169.895Zm-1.928,1.372a.418.418,0,0,0-.091.281l.062,1.292-1.209-.458a.416.416,0,0,0-.3,0l-1.209.458.062-1.291a.417.417,0,0,0-.091-.281l-.809-1.009,1.248-.34a.417.417,0,0,0,.239-.174l.709-1.081.709,1.081a.417.417,0,0,0,.239.174l1.247.34Z",transform:"translate(0 -167.498)",fill:"#fff"}})])]),t._v(" "),e("rect",{attrs:{id:"Rectangle_1289","data-name":"Rectangle 1289",width:"6.667",height:"0.833",rx:"0.417",transform:"translate(575.333 1262.583)",fill:"#fff"}}),t._v(" "),e("rect",{attrs:{id:"Rectangle_1293","data-name":"Rectangle 1293",width:"6.667",height:"0.833",rx:"0.417",transform:"translate(575.333 1276.21)",fill:"#fff"}}),t._v(" "),e("rect",{attrs:{id:"Rectangle_1291","data-name":"Rectangle 1291",width:"6.667",height:"0.833",rx:"0.417",transform:"translate(575.333 1269.25)",fill:"#fff"}}),t._v(" "),e("rect",{attrs:{id:"Rectangle_1290","data-name":"Rectangle 1290",width:"11.667",height:"0.833",rx:"0.417",transform:"translate(575.333 1265.083)",fill:"#fff"}}),t._v(" "),e("rect",{attrs:{id:"Rectangle_1294","data-name":"Rectangle 1294",width:"11.667",height:"0.833",rx:"0.417",transform:"translate(575.333 1278.71)",fill:"#fff"}}),t._v(" "),e("rect",{attrs:{id:"Rectangle_1292","data-name":"Rectangle 1292",width:"11.667",height:"0.833",rx:"0.417",transform:"translate(575.333 1271.75)",fill:"#fff"}})])]),t._v(" "),e("span",{staticClass:"fs-16 ms-5"},[t._v(t._s(t.$t("rating__reviews")))])])]),t._v(" "),e("v-expansion-panel-content",{},[e("ProductReviews",{attrs:{id:t.productDetails.id,"is-loading":t.detailsLoading,"review-summary":t.reviewSummary}})],1)],1)],1)],1),t._v(" "),t.boughtTogetherProducts.length>0?e("div",{staticClass:"mb-5"},[e("h2",{staticClass:"mb-3 fs-21 opacity-80"},[t._v("\n                    "+t._s(t.$t("frequently_bought_together"))+"\n                ")]),t._v(" "),e("swiper",{attrs:{options:t.carouselOption}},t._l(t.boughtTogetherProducts,(function(r,a){return e("swiper-slide",{key:a},[e("product-box",{attrs:{"product-details":r,"is-loading":t.togetherLoading}})],1)})),1)],1):t._e(),t._v(" "),e("div",{staticClass:"mb-5"},[e("h2",{staticClass:"mb-3 fs-21 opacity-80"},[t._v("\n                    "+t._s(t.$t("more_items_to_explore"))+"\n                ")]),t._v(" "),e("swiper",{attrs:{options:t.carouselOption}},t._l(t.moreProducts,(function(r,a){return e("swiper-slide",{key:a},[e("product-box",{attrs:{"product-details":r,"is-loading":t.moreLoading}})],1)})),1)],1)],1),t._v(" "),e("v-col",{staticClass:"sticky-top right-bar",attrs:{lg:"2",cols:"12"}},[e("v-row",[e("v-col",{attrs:{lg:"12",md:"3",sm:"4",cols:"12"}},[t.is_addon_activated("multi_vendor")?[t.detailsLoading?[e("v-skeleton-loader",{staticClass:"mb-3",attrs:{type:"image",height:"158"}})]:e("div",{staticClass:"border rounded bg-light px-3 py-2 mb-3 grey lighten-5 border-gray-300"},[e("div",{staticClass:"fw-700 fs-12 mb-2"},[t._v(t._s(t.$t("shop")))]),t._v(" "),e("div",{staticClass:"d-flex mb-2"},[e("img",{staticClass:"flex-shrink-0 border rounded-circle shadow-xl size-50px mb-2",attrs:{src:t.productDetails.shop.logo,alt:t.productDetails.shop.name}}),t._v(" "),e("div",{staticClass:"fs-13 fw-500 ms-3 mt-2 text-truncate-2 minw-0"},[t._v(t._s(t.productDetails.shop.name))])]),t._v(" "),e("div",{staticClass:"d-flex align-center fs-12 mb-2"},[e("span",{},[t._v(t._s(t.productDetails.shop.rating.toFixed(2)))]),t._v(" "),e("v-rating",{staticClass:"lh-1-5 mx-1",attrs:{"background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"12",length:"5",value:t.productDetails.shop.rating}}),t._v(" "),e("span",{staticClass:"opacity-50"},[t._v(" ("+t._s(t.productDetails.shop.review_count)+" "+t._s(t.$t("ratings"))+") ")])],1),t._v(" "),e("router-link",{staticClass:"text-primary fw-500 fs-11",attrs:{to:{name:"ShopDetails",params:{slug:t.productDetails.shop.slug}}}},[t._v("\n                                "+t._s(t.$t("visit_store"))+"\n                            ")])],1)]:t._e(),t._v(" "),t.detailsLoading?[e("v-skeleton-loader",{attrs:{type:"image",height:"200"}})]:[e("banner",{attrs:{loading:!1,banner:t.$store.getters["app/banners"].product_page}})],t._v(" "),1==t.productDetails.has_warranty?e("div",{staticClass:"bg-soft-primary border border-primary d-flex rounded px-4 py-3 mt-3"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16.667",height:"20",viewBox:"0 0 16.667 20"}},[e("g",{attrs:{id:"Policy",transform:"translate(-8.752 -4.644)"}},[e("path",{attrs:{id:"Path_3102","data-name":"Path 3102",d:"M17.085,24.644a.7.7,0,0,1-.211-.033,17.254,17.254,0,0,1-6.395-4.9C8.608,17.09,8.647,11.575,8.841,7.654a.368.368,0,0,1,.133-.267.353.353,0,0,1,.28-.077,9.543,9.543,0,0,0,7.578-2.558.354.354,0,0,1,.509,0,9.507,9.507,0,0,0,7.578,2.558.353.353,0,0,1,.28.077.368.368,0,0,1,.133.267c.194,3.921.233,9.436-1.638,12.06a17.431,17.431,0,0,1-6.395,4.9A.7.7,0,0,1,17.085,24.644ZM9.558,8.063c-.172,3.779-.161,8.855,1.516,11.2A16.654,16.654,0,0,0,17.1,23.9a16.743,16.743,0,0,0,6.029-4.634c1.66-2.339,1.67-7.415,1.5-11.2A9.979,9.979,0,0,1,17.1,5.505,10,10,0,0,1,9.558,8.063Z",fill:"#b8b8b8"}}),t._v(" "),e("path",{attrs:{id:"Path_3103","data-name":"Path 3103",d:"M25.523,30.137a.358.358,0,0,1-.258-.111L23.387,28.1a.359.359,0,1,1,.513-.5l1.613,1.652,3.405-3.724a.359.359,0,0,1,.531.484l-3.66,4a.376.376,0,0,1-.258.118Z",transform:"translate(-9.323 -13.133)",fill:"#b8b8b8"}})])]),t._v(" "),e("span",{staticClass:"ms-2"},[e("div",{staticClass:"fw-700"},[t._v("\n                                "+t._s(t.$t("warranty_available"))+"\n                            ")]),t._v(" "),e("router-link",{staticClass:"text-decoration-underline grey--text fs-12",attrs:{to:{name:"CustomPage",params:{pageSlug:"warranty-policy"}}}},[t._v("\n                                * "+t._s(t.$t("view_warranty_policy"))+"\n                            ")])],1)]):t._e()],2),t._v(" "),e("v-col",{attrs:{lg:"12",md:"9",sm:"8",cols:"12"}},[e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-3"},[t._v(t._s(t.$t("related_products")))]),t._v(" "),e("v-row",{staticClass:"row-cols-2 row-cols-md-3 row-cols-lg-1 gutters-10"},t._l(t.relatedProducts,(function(r,a){return e("v-col",{key:a,staticClass:"py-2"},[e("product-box",{attrs:{"product-details":r,"is-loading":t.relatedLoading,"box-style":"two"}})],1)})),1)],1)])],1)],1)],1)],1)}),[],!1,null,"614cc09a",null));e.default=w.exports},GLkQ:function(t,e,r){"use strict";r("iQMD")},iQMD:function(t,e,r){var a=r("mTlb");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(t.exports=a.locals)},mTlb:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"@media (min-width:1264px){.main-bar[data-v-614cc09a]{max-width:calc(100% - 224px)}.right-bar[data-v-614cc09a]{width:224px;max-width:224px}}",""])}}]);