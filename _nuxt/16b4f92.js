(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{644:function(e,t,n){var r=n(8),c=n(312),o=n(92);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return c(e,(function(e,n){o(t,e,n)}),{AS_ENTRIES:!0}),t}})},716:function(e,t,n){"use strict";n.r(t);n(70),n(42),n(31),n(41),n(30),n(53);var r=n(21),c=n(7),o=n(23),f=n(36),l=n(34),h=n(35),y=n(19),O=n(13),d=(n(46),n(27),n(644),n(47),n(24),n(43),n(49),n(16)),j=n(191);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(y.a)(e);if(t){var c=Object(y.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var x=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(O.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},P=function(e){Object(l.a)(n,e);var t=w(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"article",get:function(){return j.a.fromNuxtContent(this.page)}},{key:"head",value:function(){return this.article.seoHead}}]),n}(d.Vue),R=P=x([Object(d.Component)({asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.params,t.next=3,n("index").fetch();case 3:return r=t.sent,t.t0=Object,t.next=7,Promise.all([n("dev/postman").fetch(),n("dev/py/gsheets").fetch(),n("dev/py/pyenv").fetch(),n("dev/py/test-gae").fetch(),n("dev/py/test").fetch(),n("dev/py/xlsx").fetch(),n("n/rent").fetch(),n("n/principles").fetch(),n("n/index").fetch(),n("n/goals-2022").fetch(),n("cool-story/gigs-08-21").fetch(),n("cool-story/bad-day").fetch(),n("cool-story/pure").fetch()]);case 7:return t.t1=t.sent.map((function(p){return[p.path.substr("/".length),p]})),r.pages=t.t0.fromEntries.call(t.t0,t.t1),r.pages.n=m(m({},r.pages["n/index"]),{},{path:"n"}),t.abrupt("return",{page:r});case 11:case"end":return t.stop()}}),t)})))()}})],P),E=n(18),component=Object(E.a)(R,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("nuxt-content",{attrs:{document:e.article.content}})}),[],!1,null,"58d701c4",null);t.default=component.exports}}]);