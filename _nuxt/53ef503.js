/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{537:function(t,e,n){"use strict";var o,r,l;l=function(t){var e=t?t._modules:{};function n(t,path,e,n){t.hasOwnProperty(path)||(t[path]=n.apply(null,e))}n(e,"Series/Funnel/FunnelSeries.js",[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,n,o){var r,l=this&&this.__extends||(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),c=e.noop,d=n.series,h=n.seriesTypes.pie,f=o.addEvent,y=o.extend,v=o.fireEvent,m=o.isArray,L=o.merge,_=o.pick,x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.options=void 0,e.points=void 0,e}return l(e,t),e.prototype.alignDataLabel=function(t,e,n,o,r){var l=t.series,c=l.options.reversed,h=t.dlBox||t.shapeArgs,f=n.align,y=n.verticalAlign,v=((l.options||{}).dataLabels||{}).inside,m=l.center[1],L=c?2*m-t.plotY:t.plotY,x=l.getWidthAt(L-h.height/2+e.height),A="middle"===y?(h.topWidth-h.bottomWidth)/4:(x-h.bottomWidth)/2,w=h.y,W=h.x,j=_(e.height,e.getBBox().height);"middle"===y?w=h.y-h.height/2+j/2:"top"===y&&(w=h.y-h.height+j+n.padding),("top"===y&&!c||"bottom"===y&&c||"middle"===y)&&("right"===f?W=h.x-n.padding+A:"left"===f&&(W=h.x+n.padding-A)),o={x:W,y:c?w-h.height:w,width:h.bottomWidth,height:h.height},n.verticalAlign="bottom",v&&!t.visible||d.prototype.alignDataLabel.call(this,t,e,n,o,r),v&&(!t.visible&&t.dataLabel&&(t.dataLabel.placed=!1),t.contrastColor&&e.css({color:t.contrastColor}))},e.prototype.drawDataLabels=function(){var t,e,o,r,l,c=this,data=c.data,d=c.options.dataLabels.distance,i=data.length;for(c.center[2]-=2*d;i--;)e=(t=(o=data[i]).half)?1:-1,l=o.plotY,o.labelDistance=_(o.options.dataLabels&&o.options.dataLabels.distance,d),c.maxLabelDistance=Math.max(o.labelDistance,c.maxLabelDistance||0),r=c.getX(l,t,o),o.labelPosition={natural:{x:0,y:l},final:{},alignment:t?"right":"left",connectorPosition:{breakAt:{x:r+(o.labelDistance-5)*e,y:l},touchingSliceAt:{x:r+o.labelDistance*e,y:l}}};n.seriesTypes[c.options.dataLabels.inside?"column":"pie"].prototype.drawDataLabels.call(this)},e.prototype.translate=function(){var t,path,e,n,o,r,l,d,h,f,y=0,m=this,L=m.chart,x=m.options,A=x.reversed,w=x.ignoreHiddenPoint,W=L.plotWidth,j=L.plotHeight,O=0,D=x.center,S=E(D[0],W),C=E(D[1],j),P=E(x.width,W),k=E(x.height,j),H=E(x.neckWidth,W),Y=E(x.neckHeight,j),T=C-k/2+k-Y,data=m.data,B="left"===x.dataLabels.position?1:0;function E(t,e){return/%$/.test(t)?e*parseInt(t,10)/100:parseInt(t,10)}m.getWidthAt=function(t){return t>T||k===Y?H:H+(P-H)*(1-(t-(C-k/2))/(k-Y))},m.getX=function(t,e,n){return S+(e?-1:1)*(m.getWidthAt(A?2*C-t:t)/2+n.labelDistance)},m.center=[S,C,k],m.centerX=S,data.forEach((function(t){w&&!1===t.visible||(y+=t.y)})),data.forEach((function(v){f=null,e=y?v.y/y:0,d=(o=C-k/2+O*k)+e*k,t=m.getWidthAt(o),r=(n=S-t/2)+t,t=m.getWidthAt(d),h=(l=S-t/2)+t,o>T?(n=l=S-H/2,r=h=S+H/2):d>T&&(f=d,t=m.getWidthAt(T),h=(l=S-t/2)+t,d=T),A&&(o=2*C-o,d=2*C-d,null!==f&&(f=2*C-f)),path=[["M",n,o],["L",r,o],["L",h,d]],null!==f&&path.push(["L",h,f],["L",l,f]),path.push(["L",l,d],["Z"]),v.shapeType="path",v.shapeArgs={d:path},v.percentage=100*e,v.plotX=S,v.plotY=(o+(f||d))/2,v.tooltipPos=[S,v.plotY],v.dlBox={x:l,y:o,topWidth:r-n,bottomWidth:h-l,height:Math.abs(_(f,d)-o),width:NaN},v.slice=c,v.half=B,w&&!1===v.visible||(O+=e)})),v(m,"afterTranslate")},e.prototype.sortByAngle=function(t){t.sort((function(a,b){return a.plotY-b.plotY}))},e.defaultOptions=L(h.defaultOptions,{animation:!1,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1,verticalAlign:"middle"},states:{select:{color:"#cccccc",borderColor:"#000000"}}}),e}(h);return y(x.prototype,{animate:c}),f(t,"afterHideAllOverlappingLabels",(function(){this.series.forEach((function(t){var e=t.options&&t.options.dataLabels;m(e)&&(e=e[0]),t.is("pie")&&t.placeDataLabels&&e&&!e.inside&&t.placeDataLabels()}))})),n.registerSeriesType("funnel",x),x})),n(e,"Series/Pyramid/PyramidSeries.js",[e["Series/Funnel/FunnelSeries.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,n){var o,r=this&&this.__extends||(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),l=n.merge,c=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return r(n,e),n.defaultOptions=l(t.defaultOptions,{neckWidth:"0%",neckHeight:"0%",reversed:!0}),n}(t);return e.registerSeriesType("pyramid",c),c})),n(e,"masters/modules/funnel.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(o=[n(190)],void 0===(r=function(t){return l(t),l.Highcharts=t,l}.apply(e,o))||(t.exports=r))}}]);