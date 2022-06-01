(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{500:function(t,e,o){"use strict";var r,n,c;c=function(t){function g(t,g,e,o){t.hasOwnProperty(g)||(t[g]=o.apply(null,e))}g(t=t?t._modules:{},"Extensions/BoostCanvas.js",[t["Core/Chart/Chart.js"],t["Core/Color/Color.js"],t["Core/Globals.js"],t["Core/Series/Series.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(t,g,e,o,r,n){var c,l=g.parse,h=e.doc,d=e.noop,v=r.seriesTypes,f=n.addEvent,y=n.extend,C=n.fireEvent,m=n.isNumber,x=n.merge,T=n.pick,w=n.wrap;return function(){e.seriesTypes.heatmap&&w(e.seriesTypes.heatmap.prototype,"drawPoints",(function(){var a=this.chart,b=this.getContext(),t=this.chart.inverted,e=this.xAxis,o=this.yAxis;b?(this.points.forEach((function(r){var n=r.plotY;if(void 0!==n&&!isNaN(n)&&null!==r.y&&b){var c=r.shapeArgs||{};n=void 0===(n=c.x)?0:n;var g=c.y;g=void 0===g?0:g;var u=c.width;u=void 0===u?0:u,c=void 0===(c=c.height)?0:c,r=a.styledMode?r.series.colorAttribs(r):r.series.pointAttribs(r),b.fillStyle=r.fill,t?b.fillRect(o.len-g+e.left,e.len-n+o.top,-c,-u):b.fillRect(n+e.left,g+o.top,u,c)}})),this.canvasToSVG()):this.chart.showLoading("Your browser doesn't support HTML5 canvas, <br>please use a modern browser")})),y(o.prototype,{getContext:function(){var a=this.chart,b=a.chartWidth,t=a.chartHeight,e=a.seriesGroup||this.group,o=this,g=function(a,t,e,b,o,r,g){a.call(this,e,t,b,o,r,g)};a.isChartSeriesBoosting()&&(o=a,e=a.seriesGroup);var r=o.ctx;return o.canvas||(o.canvas=h.createElement("canvas"),o.renderTarget=a.renderer.image("",0,0,b,t).addClass("highcharts-boost-canvas").add(e),o.ctx=r=o.canvas.getContext("2d"),a.inverted&&["moveTo","lineTo","rect","arc"].forEach((function(a){w(r,a,g)})),o.boostCopy=function(){o.renderTarget.attr({href:o.canvas.toDataURL("image/png")})},o.boostClear=function(){r.clearRect(0,0,o.canvas.width,o.canvas.height),o===this&&o.renderTarget.attr({href:""})},o.boostClipRect=a.renderer.clipRect(),o.renderTarget.clip(o.boostClipRect)),o.canvas.width!==b&&(o.canvas.width=b),o.canvas.height!==t&&(o.canvas.height=t),o.renderTarget.attr({x:0,y:0,width:b,height:t,style:"pointer-events: none",href:""}),o.boostClipRect.attr(a.getBoostClipRect(o)),r},canvasToSVG:function(){this.chart.isChartSeriesBoosting()?this.boostClear&&this.boostClear():(this.boostCopy||this.chart.boostCopy)&&(this.boostCopy||this.chart.boostCopy)()},cvsLineTo:function(a,b,t){a.lineTo(b,t)},renderCanvas:function(){var t,o,a=this,b=a.options,r=a.chart,h=this.xAxis,v=this.yAxis,w=(r.options.boost||{}).timeRendering||!1,k=0,S=a.processedXData,M=a.processedYData,u=b.data,D=h.getExtremes(),P=D.min,R=D.max,A=(D=v.getExtremes()).min,E=D.max,G={},j=!!a.sampling,B=b.marker&&b.marker.radius,N=this.cvsDrawPoint,X=b.lineWidth?this.cvsLineTo:void 0,L=B&&1>=B?this.cvsMarkerSquare:this.cvsMarkerCircle,Y=this.cvsStrokeBatch||1e3,O=!1!==b.enableMouseTracking;D=b.threshold;var V=v.getThreshold(D),W=m(D),H=V,I=this.fill,J=a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),K=!!b.stacking,U=a.cropStart||0;D=r.options.loading;var _,z,F,Q,Z,$,tt=a.requireSorting,et=b.connectNulls,ot=!S,it=K?a.data:S||u,st=a.fillOpacity?g.parse(a.color).setOpacity(T(b.fillOpacity,.75)).get():a.color,at=function(){I?(p.fillStyle=st,p.fill()):(p.strokeStyle=a.color,p.lineWidth=b.lineWidth,p.stroke())},nt=function(t,b,e,n){0===k&&(p.beginPath(),X&&(p.lineJoin="round")),r.scroller&&"highcharts-navigator-series"===a.options.className?(b+=r.scroller.top,e&&(e+=r.scroller.top)):b+=r.plotTop,t+=r.plotLeft,_?p.moveTo(t,b):N?N(p,t,b,e,o):X?X(p,t,b):L&&L.call(a,p,t,b,B,n),(k+=1)===Y&&(at(),k=0),o={clientX:t,plotY:b,yBottom:e}},ct="x"===b.findNearestPointBy,lt=this.xData||this.options.xData||this.processedXData||!1,ht=function(a,b,t){$=ct?a:a+","+b,O&&!G[$]&&(G[$]=!0,r.inverted&&(a=h.len-a,b=v.len-b),pt.push({x:!!lt&&lt[U+t],clientX:a,plotX:a,plotY:b,i:U+t}))};this.renderTarget&&this.renderTarget.attr({href:""}),(this.points||this.graph)&&this.destroyGraphics(),a.plotGroup("group","series",a.visible?"visible":"hidden",b.zIndex,r.seriesGroup),a.markerGroup=a.group,f(a,"destroy",(function(){a.markerGroup=null}));var pt=this.points=[],p=this.getContext();a.buildKDTree=d,this.boostClear&&this.boostClear(),this.visible&&(99999<u.length&&(r.options.loading=x(D,{labelStyle:{backgroundColor:l("#ffffff").setOpacity(.75).get(),padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),n.clearTimeout(c),r.showLoading("Drawing..."),r.options.loading=D),w&&console.time("canvas rendering"),e.eachAsync(it,(function(b,e){var g=!1,o=!1,n=!1,c=!1,l=void 0===r.index,p=!0;if(!l){if(ot){var q=b[0],d=b[1];it[e+1]&&(n=it[e+1][0]),it[e-1]&&(c=it[e-1][0])}else q=b,d=M[e],it[e+1]&&(n=it[e+1]),it[e-1]&&(c=it[e-1]);if(n&&n>=P&&n<=R&&(g=!0),c&&c>=P&&c<=R&&(o=!0),J){ot&&(d=b.slice(1,3));var f=d[0];d=d[1]}else K&&(q=b.x,f=(d=b.stackY)-b.y);tt||(p=d>=A&&d<=E),!(b=null===d)&&(q>=P&&q<=R&&p||g||o)&&(q=Math.round(h.toPixels(q,!0)),j?(void 0!==Q&&q!==t||(J||(f=d),(void 0===Z||d>F)&&(F=d,Z=e),(void 0===Q||f<z)&&(z=f,Q=e)),q!==t&&(void 0!==Q&&(d=v.toPixels(F,!0),V=v.toPixels(z,!0),nt(q,W?Math.min(d,H):d,W?Math.max(V,H):V,e),ht(q,d,Z),V!==d&&ht(q,V,Q)),Q=Z=void 0,t=q)):(d=Math.round(v.toPixels(d,!0)),nt(q,d,V,e),ht(q,d,e))),_=b&&!et,0==e%5e4&&(a.boostCopy||a.chart.boostCopy)&&(a.boostCopy||a.chart.boostCopy)()}return!l}),(function(){var b=r.loadingDiv,t=r.loadingShown;at(),a.canvasToSVG(),w&&console.timeEnd("canvas rendering"),C(a,"renderedCanvas"),t&&(y(b.style,{transition:"opacity 250ms",opacity:0}),r.loadingShown=!1,c=setTimeout((function(){b.parentNode&&b.parentNode.removeChild(b),r.loadingDiv=r.loadingSpan=null}),250)),delete a.buildKDTree,a.buildKDTree()}),r.renderer.forExport?Number.MAX_VALUE:void 0))}}),v.scatter.prototype.cvsMarkerCircle=function(a,b,t,e){a.moveTo(b,t),a.arc(b,t,e,0,2*Math.PI,!1)},v.scatter.prototype.cvsMarkerSquare=function(a,b,t,e){a.rect(b-e,t-e,2*e,2*e)},v.scatter.prototype.fill=!0,v.bubble&&(v.bubble.prototype.cvsMarkerCircle=function(a,b,t,e,o){a.moveTo(b,t),a.arc(b,t,this.radii&&this.radii[o],0,2*Math.PI,!1)},v.bubble.prototype.cvsStrokeBatch=1),y(v.area.prototype,{cvsDrawPoint:function(a,b,t,e,o){o&&b!==o.clientX&&(a.moveTo(o.clientX,o.yBottom),a.lineTo(o.clientX,o.plotY),a.lineTo(b,t),a.lineTo(b,e))},fill:!0,fillOpacity:!0,sampling:!0}),y(v.column.prototype,{cvsDrawPoint:function(a,b,t,e){a.rect(b-1,t,1,e-t)},fill:!0,sampling:!0}),t.prototype.callbacks.push((function(a){f(a,"predraw",(function(){a.renderTarget&&a.renderTarget.attr({href:""}),a.canvas&&a.canvas.getContext("2d").clearRect(0,0,a.canvas.width,a.canvas.height)})),f(a,"render",(function(){a.boostCopy&&a.boostCopy()}))}))}})),g(t,"masters/modules/boost-canvas.src.js",[],(function(){}))},t.exports?(c.default=c,t.exports=c):(r=[o(190)],void 0===(n=function(g){return c(g),c.Highcharts=g,c}.apply(e,r))||(t.exports=n))}}]);