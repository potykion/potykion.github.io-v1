(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{596:function(t,e,r){"use strict";var n,o,a;a=function(a){function b(a,t,b,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,b))}b(a=a?a._modules:{},"Series/Streamgraph/StreamgraphSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,b){var t=this&&this.__extends||function(){var a=function(b,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var b in t)t.hasOwnProperty(b)&&(a[b]=t[b])})(b,t)};return function(b,t){function g(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(g.prototype=t.prototype,new g)}}(),e=a.seriesTypes.areaspline,r=b.merge;b=b.extend;var n=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.points=void 0,b.options=void 0,b}return t(b,a),b.prototype.streamStacker=function(a,b,t){a[0]-=b.total/2,a[1]-=b.total/2,this.stackedYData[t]=a},b.defaultOptions=r(e.defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),b}(e);return b(n.prototype,{negStacks:!1}),a.registerSeriesType("streamgraph",n),n})),b(a,"masters/modules/streamgraph.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[r(190)],void 0===(o=function(b){return a(b),a.Highcharts=b,a}.apply(e,n))||(t.exports=o))}}]);