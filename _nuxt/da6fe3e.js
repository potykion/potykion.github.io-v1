(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{576:function(t,n,r){"use strict";var e,o,a;a=function(a){function t(a,t,n,r){a.hasOwnProperty(t)||(a[t]=r.apply(null,n))}t(a=a?a._modules:{},"Extensions/ArrowSymbols.js",[a["Core/Renderer/SVG/SVGRenderer.js"]],(function(a){function t(a,t,p,n){return[["M",a,t+n/2],["L",a+p,t],["L",a,t+n/2],["L",a+p,t+n]]}function n(a,t,p,n){return[["M",a+p,t],["L",a,t+n/2],["L",a+p,t+n],["Z"]]}function r(a,t,p,r){return n(a,t,p/2,r)}return(a=a.prototype.symbols).arrow=t,a["arrow-filled"]=n,a["arrow-filled-half"]=r,a["arrow-half"]=function(a,n,p,r){return t(a,n,p/2,r)},a["triangle-left"]=n,a["triangle-left-half"]=r,a})),t(a,"Gantt/Connection.js",[a["Core/Globals.js"],a["Core/DefaultOptions.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],(function(a,t,n,r){function e(b){var t=b.shapeArgs;return t?{xMin:t.x||0,xMax:(t.x||0)+(t.width||0),yMin:t.y||0,yMax:(t.y||0)+(t.height||0)}:(t=b.graphic&&b.graphic.getBBox())?{xMin:b.plotX-t.width/2,xMax:b.plotX+t.width/2,yMin:b.plotY-t.height/2,yMax:b.plotY+t.height/2}:null}var o=r.defined,p=r.error,h=r.extend,c=r.merge,x=r.objectEach,M=a.deg2rad,l=Math.max,d=Math.min;return h(t.defaultOptions,{connectors:{type:"straight",lineWidth:1,marker:{enabled:!1,align:"center",verticalAlign:"middle",inside:!1,lineWidth:1},startMarker:{symbol:"diamond"},endMarker:{symbol:"arrow-filled"}}}),t=function(){function b(t,n,r){this.toPoint=this.pathfinder=this.graphics=this.fromPoint=this.chart=void 0,this.init(t,n,r)}return b.prototype.init=function(t,n,r){this.fromPoint=t,this.toPoint=n,this.options=r,this.chart=t.series.chart,this.pathfinder=this.chart.pathfinder},b.prototype.renderPath=function(t,n,r){var b=this.chart,a=b.styledMode,e=b.pathfinder,o=!b.options.chart.forExport&&!1!==r,g=this.graphics&&this.graphics.path;e.group||(e.group=b.renderer.g().addClass("highcharts-pathfinder-group").attr({zIndex:-1}).add(b.seriesGroup)),e.group.translate(b.plotLeft,b.plotTop),g&&g.renderer||(g=b.renderer.path().add(e.group),a||g.attr({opacity:0})),g.attr(n),t={d:t},a||(t.opacity=1),g[o?"animate":"attr"](t,r),this.graphics=this.graphics||{},this.graphics.path=g},b.prototype.addMarker=function(t,b,n){var a=this.fromPoint.series.chart,r=a.pathfinder;a=a.renderer;var e="start"===t?this.fromPoint:this.toPoint,o=e.getPathfinderAnchorPoint(b);if(b.enabled&&((n="start"===t?n[1]:n[n.length-2])&&"M"===n[0]||"L"===n[0])){if(n={x:n[1],y:n[2]},n=e.getRadiansToVector(n,o),o=e.getMarkerVector(n,b.radius,o),n=-n/M,b.width&&b.height)var g=b.width,u=b.height;else g=u=2*b.radius;this.graphics=this.graphics||{},o={x:o.x-g/2,y:o.y-u/2,width:g,height:u,rotation:n,rotationOriginX:o.x,rotationOriginY:o.y},this.graphics[t]?this.graphics[t].animate(o):(this.graphics[t]=a.symbol(b.symbol).addClass("highcharts-point-connecting-path-"+t+"-marker").attr(o).add(r.group),a.styledMode||this.graphics[t].attr({fill:b.color||this.fromPoint.color,stroke:b.lineColor,"stroke-width":b.lineWidth,opacity:0}).animate({opacity:1},e.series.options.animation))}},b.prototype.getPath=function(b){var t=this.pathfinder,a=this.chart,n=t.algorithms[b.type],r=t.chartObstacles;return"function"!=typeof n?(p('"'+b.type+'" is not a Pathfinder algorithm.'),{path:[],obstacles:[]}):(n.requiresObstacles&&!r&&(r=t.chartObstacles=t.getChartObstacles(b),a.options.connectors.algorithmMargin=b.algorithmMargin,t.chartObstacleMetrics=t.getObstacleMetrics(r)),n(this.fromPoint.getPathfinderAnchorPoint(b.startMarker),this.toPoint.getPathfinderAnchorPoint(b.endMarker),c({chartObstacles:r,lineObstacles:t.lineObstacles||[],obstacleMetrics:t.chartObstacleMetrics,hardBounds:{xMin:0,xMax:a.plotWidth,yMin:0,yMax:a.plotHeight},obstacleOptions:{margin:b.algorithmMargin},startDirectionX:t.getAlgorithmStartDirection(b.startMarker)},b)))},b.prototype.render=function(){var b=this.fromPoint,a=b.series,t=a.chart,n=t.pathfinder,q=c(t.options.connectors,a.options.connectors,b.options.connectors,this.options),r={};t.styledMode||(r.stroke=q.lineColor||b.color,r["stroke-width"]=q.lineWidth,q.dashStyle&&(r.dashstyle=q.dashStyle)),r.class="highcharts-point-connecting-path highcharts-color-"+b.colorIndex,q=c(r,q),o(q.marker.radius)||(q.marker.radius=d(l(Math.ceil((q.algorithmMargin||8)/2)-1,1),5)),t=(b=this.getPath(q)).path,b.obstacles&&(n.lineObstacles=n.lineObstacles||[],n.lineObstacles=n.lineObstacles.concat(b.obstacles)),this.renderPath(t,r,a.options.animation),this.addMarker("start",c(q.marker,q.startMarker),t),this.addMarker("end",c(q.marker,q.endMarker),t)},b.prototype.destroy=function(){this.graphics&&(x(this.graphics,(function(b){b.destroy()})),delete this.graphics)},b}(),a.Connection=t,h(n.prototype,{getPathfinderAnchorPoint:function(b){var a=e(this);switch(b.align){case"right":var t="xMax";break;case"left":t="xMin"}switch(b.verticalAlign){case"top":var n="yMin";break;case"bottom":n="yMax"}return{x:t?a[t]:(a.xMin+a.xMax)/2,y:n?a[n]:(a.yMin+a.yMax)/2}},getRadiansToVector:function(b,a){var t;return o(a)||(t=e(this))&&(a={x:(t.xMin+t.xMax)/2,y:(t.yMin+t.yMax)/2}),Math.atan2(a.y-b.y,b.x-a.x)},getMarkerVector:function(b,a,t){var n=2*Math.PI,r=e(this),o=r.xMax-r.xMin,h=r.yMax-r.yMin,c=Math.atan2(h,o),g=!1;o/=2;for(var u=h/2,x=r.xMin+o,M=x,l=r=r.yMin+u,d=1,y=1;b<-Math.PI;)b+=n;for(;b>Math.PI;)b-=n;return n=Math.tan(b),b>-c&&b<=c?(y=-1,g=!0):b>c&&b<=Math.PI-c?y=-1:b>Math.PI-c||b<=-(Math.PI-c)?(d=-1,g=!0):d=-1,g?(M+=d*o,l+=y*o*n):(M+=h/(2*n)*d,l+=y*u),t.x!==x&&(M=t.x),t.y!==r&&(l=t.y),{x:M+a*Math.cos(b),y:l-a*Math.sin(b)}}}),t})),t(a,"Gantt/PathfinderAlgorithms.js",[a["Core/Utilities.js"]],(function(a){function t(a,t,n){n=n||0;var r,e,b=a.length-1;for(t-=1e-7;n<=b;)if(0<(e=t-a[r=b+n>>1].xMin))n=r+1;else{if(!(0>e))return r;b=r-1}return 0<n?n-1:0}function n(a,n){for(var r=t(a,n.x+1)+1;r--;){var b;if((b=a[r].xMax>=n.x)&&(b=a[r],b=n.x<=b.xMax&&n.x>=b.xMin&&n.y<=b.yMax&&n.y>=b.yMin),b)return r}return-1}function r(a){var t=[];if(a.length){t.push(["M",a[0].start.x,a[0].start.y]);for(var n=0;n<a.length;++n)t.push(["L",a[n].end.x,a[n].end.y])}return t}function e(a,t){a.yMin=h(a.yMin,t.yMin),a.yMax=p(a.yMax,t.yMax),a.xMin=h(a.xMin,t.xMin),a.xMax=p(a.xMax,t.xMax)}var o=a.pick,p=Math.min,h=Math.max,c=Math.abs;(a=function(a,t,e){function b(a,b,t,n,r){return(a={x:a.x,y:a.y})[b]=t[n||b]+(r||0),a}function h(a,t,n){var g=c(t[n]-a[n+"Min"])>c(t[n]-a[n+"Max"]);return b(t,n,a,n+(g?"Max":"Min"),g?1:-1)}var x=[],M=o(e.startDirectionX,c(t.x-a.x)>c(t.y-a.y))?"x":"y",p=e.chartObstacles,q=n(p,a);if(-1<(e=n(p,t))){var l=p[e];l={start:e=h(l,t,M),end:t};var d=e}else d=t;return-1<q&&(e=h(p=p[q],a,M),x.push({start:a,end:e}),e[M]>=a[M]==e[M]>=d[M]&&(t=a[M="y"===M?"x":"y"]<t[M],x.push({start:e,end:b(e,M,p,M+(t?"Max":"Min"),t?1:-1)}),M="y"===M?"x":"y")),e=b(a=x.length?x[x.length-1].end:a,M,d),x.push({start:a,end:e}),M=b(e,"y"===M?"x":"y",d),x.push({start:e,end:M}),x.push(l),{path:r(x),obstacles:x}}).requiresObstacles=!0;var x=function(a,x,M){function b(a,b,g){var n,r=a.x<b.x?1:-1;if(a.x<b.x)var e=a,u=b;else e=b,u=a;if(a.y<b.y)var o=a,h=b;else o=b,h=a;for(n=0>r?p(t(k,u.x),k.length-1):0;k[n]&&(0<r&&k[n].xMin<=u.x||0>r&&k[n].xMax>=e.x);){if(k[n].xMin<=u.x&&k[n].xMax>=e.x&&k[n].yMin<=h.y&&k[n].yMax>=o.y)return g?{y:a.y,x:a.x<b.x?k[n].xMin-1:k[n].xMax+1,obstacle:k[n]}:{x:a.x,y:a.y<b.y?k[n].yMin-1:k[n].yMax+1,obstacle:k[n]};n+=r}return b}function l(a,t,g,n,r){var u=r.soft,e=r.hard,o=n?"x":"y",h={x:t.x,y:t.y},x={x:t.x,y:t.y};r=a[o+"Max"]>=u[o+"Max"],u=a[o+"Min"]<=u[o+"Min"];var M=a[o+"Max"]>=e[o+"Max"];e=a[o+"Min"]<=e[o+"Min"];var l=c(a[o+"Min"]-t[o]),d=c(a[o+"Max"]-t[o]);return g=10>c(l-d)?t[o]<g[o]:d<l,x[o]=a[o+"Min"],h[o]=a[o+"Max"],a=b(t,x,n)[o]!==x[o],t=b(t,h,n)[o]!==h[o],g=a?!t||g:!t&&g,g=u?!r||g:!r&&g,e?!M||g:!M&&g}var d=o(M.startDirectionX,c(x.x-a.x)>c(x.y-a.y)),q=d?"x":"y",y=[],f=!1,g=M.obstacleMetrics,u=p(a.x,x.x)-g.maxWidth-10,v=h(a.x,x.x)+g.maxWidth+10,m=p(a.y,x.y)-g.maxHeight-10,P=h(a.y,x.y)+g.maxHeight+10,k=M.chartObstacles,O=t(k,u);if(g=t(k,v),-1<(g=n(k=k.slice(O,g+1),x))){var w=function(a,b,t){var g=p(a.xMax-b.x,b.x-a.xMin)<p(a.yMax-b.y,b.y-a.yMin);return t=l(a,b,t,g,{soft:M.hardBounds,hard:M.hardBounds}),g?{y:b.y,x:a[t?"xMax":"xMin"]+(t?1:-1)}:{x:b.x,y:a[t?"yMax":"yMin"]+(t?1:-1)}}(k[g],x,a);y.push({end:x,start:w}),x=w}for(;-1<(g=n(k,x));)O=0>x[q]-a[q],(w={x:x.x,y:x.y})[q]=k[g][O?q+"Max":q+"Min"]+(O?1:-1),y.push({end:x,start:w}),x=w;return{path:r(a=(a=function t(a,g,r){if(a.x===g.x&&a.y===g.y)return[];var o=r?"x":"y",c=M.obstacleOptions.margin,x={soft:{xMin:u,xMax:v,yMin:m,yMax:P},hard:M.hardBounds},d=n(k,a);if(-1<d){x=l(d=k[d],a,g,r,x),e(d,M.hardBounds);var y=r?{y:a.y,x:d[x?"xMax":"xMin"]+(x?1:-1)}:{x:a.x,y:d[x?"yMax":"yMin"]+(x?1:-1)},O=n(k,y);-1<O&&(e(O=k[O],M.hardBounds),y[o]=x?h(d[o+"Max"]-c+1,(O[o+"Min"]+d[o+"Max"])/2):p(d[o+"Min"]+c-1,(O[o+"Max"]+d[o+"Min"])/2),a.x===y.x&&a.y===y.y?(f&&(y[o]=x?h(d[o+"Max"],O[o+"Max"])+1:p(d[o+"Min"],O[o+"Min"])-1),f=!f):f=!1),a=[{start:a,end:y}]}else a=[{start:a,end:{x:(o=b(a,{x:r?g.x:a.x,y:r?a.y:g.y},r)).x,y:o.y}}],o[r?"x":"y"]!==g[r?"x":"y"]&&(x=l(o.obstacle,o,g,!r,x),e(o.obstacle,M.hardBounds),x={x:r?o.x:o.obstacle[x?"xMax":"xMin"]+(x?1:-1),y:r?o.obstacle[x?"yMax":"yMin"]+(x?1:-1):o.y},r=!r,a=a.concat(t({x:o.x,y:o.y},x,r)));return a.concat(t(a[a.length-1].end,g,!r))}(a,x,d)).concat(y.reverse())),obstacles:a}};return x.requiresObstacles=!0,{fastAvoid:x,straight:function(a,t){return{path:[["M",a.x,a.y],["L",t.x,t.y]],obstacles:[{start:a,end:t}]}},simpleConnect:a}})),t(a,"Gantt/Pathfinder.js",[a["Gantt/Connection.js"],a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Core/DefaultOptions.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"],a["Gantt/PathfinderAlgorithms.js"]],(function(a,t,n,r,e,o,p){function h(a){var b=a.shapeArgs;return b?{xMin:b.x||0,xMax:(b.x||0)+(b.width||0),yMin:b.y||0,yMax:(b.y||0)+(b.height||0)}:(b=a.graphic&&a.graphic.getBBox())?{xMin:a.plotX-b.width/2,xMax:a.plotX+b.width/2,yMin:a.plotY-b.height/2,yMax:a.plotY+b.height/2}:null}var c=o.addEvent,x=o.defined,M=o.error,b=o.extend,l=o.merge,d=o.pick,y=o.splat,f=Math.max,q=Math.min;b(r.defaultOptions,{connectors:{type:"straight",lineWidth:1,marker:{enabled:!1,align:"center",verticalAlign:"middle",inside:!1,lineWidth:1},startMarker:{symbol:"diamond"},endMarker:{symbol:"arrow-filled"}}});var v=function(){function b(a){this.lineObstacles=this.group=this.connections=this.chartObstacleMetrics=this.chartObstacles=this.chart=void 0,this.init(a)}return b.prototype.init=function(a){this.chart=a,this.connections=[],c(a,"redraw",(function(){this.pathfinder.update()}))},b.prototype.update=function(b){var t=this.chart,n=this,r=n.connections;n.connections=[],t.series.forEach((function(b){b.visible&&!b.options.isInternal&&b.points.forEach((function(b){var g,r=b.options;r&&r.dependency&&(r.connect=r.dependency),r=b.options&&b.options.connect&&y(b.options.connect),b.visible&&!1!==b.isInside&&r&&r.forEach((function(r){(g=t.get("string"==typeof r?r:r.to))instanceof e&&g.series.visible&&g.visible&&!1!==g.isInside&&n.connections.push(new a(b,g,"string"==typeof r?{}:r))}))}))}));for(var g=0,o=void 0,h=void 0,c=r.length,p=n.connections.length;g<c;++g){for(h=!1,o=0;o<p;++o)if(r[g].fromPoint===n.connections[o].fromPoint&&r[g].toPoint===n.connections[o].toPoint){n.connections[o].graphics=r[g].graphics,h=!0;break}h||r[g].destroy()}delete this.chartObstacles,delete this.lineObstacles,n.renderConnections(b)},b.prototype.renderConnections=function(a){a?this.chart.series.forEach((function(a){var b=function(){var b=a.chart.pathfinder;(b&&b.connections||[]).forEach((function(b){b.fromPoint&&b.fromPoint.series===a&&b.render()})),a.pathfinderRemoveRenderEvent&&(a.pathfinderRemoveRenderEvent(),delete a.pathfinderRemoveRenderEvent)};!1===a.options.animation?b():a.pathfinderRemoveRenderEvent=c(a,"afterAnimate",b)})):this.connections.forEach((function(a){a.render()}))},b.prototype.getChartObstacles=function(a){for(var g,b=[],t=this.chart.series,n=d(a.algorithmMargin,0),r=0,e=t.length;r<e;++r)if(t[r].visible&&!t[r].options.isInternal){var o=0,p=t[r].points.length,c=void 0;for(c=void 0;o<p;++o)(c=t[r].points[o]).visible&&(c=h(c))&&b.push({xMin:c.xMin-n,xMax:c.xMax+n,yMin:c.yMin-n,yMax:c.yMax+n})}return b=b.sort((function(a,b){return a.xMin-b.xMin})),x(a.algorithmMargin)||(g=a.algorithmMargin=function(a){for(var t,n,b=a.length,r=0,e=[],o=function(a,b,t){t=d(t,10);var n=a.yMax+t>b.yMin-t&&a.yMin-t<b.yMax+t,r=a.xMax+t>b.xMin-t&&a.xMin-t<b.xMax+t,g=n?a.xMin>b.xMax?a.xMin-b.xMax:b.xMin-a.xMax:1/0,e=r?a.yMin>b.yMax?a.yMin-b.yMax:b.yMin-a.yMax:1/0;return r&&n?t?o(a,b,Math.floor(t/2)):1/0:q(g,e)};r<b;++r)for(t=r+1;t<b;++t)80>(n=o(a[r],a[t]))&&e.push(n);return e.push(80),f(Math.floor(e.sort((function(a,b){return a-b}))[Math.floor(e.length/10)]/2-1),1)}(b),b.forEach((function(a){a.xMin-=g,a.xMax+=g,a.yMin-=g,a.yMax+=g}))),b},b.prototype.getObstacleMetrics=function(a){for(var t,n,b=0,r=0,e=a.length;e--;)b<(t=a[e].xMax-a[e].xMin)&&(b=t),r<(n=a[e].yMax-a[e].yMin)&&(r=n);return{maxHeight:r,maxWidth:b}},b.prototype.getAlgorithmStartDirection=function(a){var b="top"!==a.verticalAlign&&"bottom"!==a.verticalAlign;return"left"!==a.align&&"right"!==a.align?!!b&&void 0:!!b||void 0},b}();return v.prototype.algorithms=p,n.Pathfinder=v,b(e.prototype,{getPathfinderAnchorPoint:function(a){var b=h(this);switch(a.align){case"right":var t="xMax";break;case"left":t="xMin"}switch(a.verticalAlign){case"top":var n="yMin";break;case"bottom":n="yMax"}return{x:t?b[t]:(b.xMin+b.xMax)/2,y:n?b[n]:(b.yMin+b.yMax)/2}},getRadiansToVector:function(a,b){var t;return x(b)||(t=h(this))&&(b={x:(t.xMin+t.xMax)/2,y:(t.yMin+t.yMax)/2}),Math.atan2(b.y-a.y,a.x-b.x)},getMarkerVector:function(a,b,t){var n=2*Math.PI,r=h(this),e=r.xMax-r.xMin,g=r.yMax-r.yMin,o=Math.atan2(g,e),c=!1;e/=2;for(var x=g/2,p=r.xMin+e,M=p,q=r=r.yMin+x,l=1,u=1;a<-Math.PI;)a+=n;for(;a>Math.PI;)a-=n;return n=Math.tan(a),a>-o&&a<=o?(u=-1,c=!0):a>o&&a<=Math.PI-o?u=-1:a>Math.PI-o||a<=-(Math.PI-o)?(l=-1,c=!0):l=-1,c?(M+=l*e,q+=u*e*n):(M+=g/(2*n)*l,q+=u*x),t.x!==p&&(M=t.x),t.y!==r&&(q=t.y),{x:M+b*Math.cos(a),y:q-b*Math.sin(a)}}}),t.prototype.callbacks.push((function(a){!1!==a.options.connectors.enabled&&(function(a){(a.options.pathfinder||a.series.reduce((function(a,b){return b.options&&l(!0,b.options.connectors=b.options.connectors||{},b.options.pathfinder),a||b.options&&b.options.pathfinder}),!1))&&(l(!0,a.options.connectors=a.options.connectors||{},a.options.pathfinder),M('WARNING: Pathfinder options have been renamed. Use "chart.connectors" or "series.connectors" instead.'))}(a),this.pathfinder=new v(this),this.pathfinder.update(!0))})),v})),t(a,"masters/modules/pathfinder.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(e=[r(190)],void 0===(o=function(t){return a(t),a.Highcharts=t,a}.apply(n,e))||(t.exports=o))}}]);