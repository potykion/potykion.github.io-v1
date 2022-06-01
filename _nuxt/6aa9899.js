(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{556:function(t,e,r){"use strict";var o,n,l;l=function(t){function e(t,e,r,o){t.hasOwnProperty(e)||(t[e]=o.apply(null,r))}e(t=t?t._modules:{},"Extensions/MarkerClusters.js",[t["Core/Animation/AnimationUtilities.js"],t["Core/Chart/Chart.js"],t["Core/DefaultOptions.js"],t["Core/Series/Point.js"],t["Core/Series/Series.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Renderer/SVG/SVGRenderer.js"],t["Core/Utilities.js"],t["Core/Axis/Axis.js"]],(function(t,e,r,o,n,l,d,u,h){function c(a){var t,b=a.length,e=0,r=0;for(t=0;t<b;t++)e+=a[t].x,r+=a[t].y;return{x:e/b,y:r/b}}function f(a,b){var t=[];return t.length=b,a.clusters.forEach((function(a){a.data.forEach((function(a){t[a.dataIndex]=a}))})),a.noise.forEach((function(a){t[a.data[0].dataIndex]=a.data[0]})),t}function m(a,b,t,e,r){a.point&&(e&&a.point.graphic&&(a.point.graphic.show(),a.point.graphic.attr({opacity:b}).animate({opacity:1},t)),r&&a.point.dataLabel&&(a.point.dataLabel.show(),a.point.dataLabel.attr({opacity:b}).animate({opacity:1},t)))}function x(a,b,t){a.point&&(b&&a.point.graphic&&a.point.graphic.hide(),t&&a.point.dataLabel&&a.point.dataLabel.hide())}function y(a,b,t,e){m(a,e,t,!0,!0),b.forEach((function(a){a.point&&a.point.destroy&&a.point.destroy()}))}var C=t.animObject;t=r.defaultOptions,l=l.seriesTypes;var I=d.prototype.symbols,k=u.addEvent,M=u.defined,S=u.error,v=u.isArray,D=u.isFunction,A=u.isObject,X=u.isNumber,Y=u.merge,L=u.objectEach,z=u.relativeLength,P=u.syncTimeout;d=l.scatter;var w=n.prototype.generatePoints,E=[],T=0,O={enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},inside:!0}};(t.plotOptions||{}).series=Y((t.plotOptions||{}).series,{cluster:O,tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}});var V=function(a,b){var t=a.chart,e=a.xAxis;return a=a.yAxis,t.mapView?t.mapView.pixelsToProjectedUnits(b):{x:e?e.toValue(b.x):0,y:a?a.toValue(b.y):0}},j=function(a,b){var t=a.chart,e=a.xAxis;return a=a.yAxis,t.mapView?t.mapView.projectedUnitsToPixels(b):{x:e?e.toPixels(b.x):0,y:a?a.toPixels(b.y):0}};I.cluster=function(a,b,t,e){t/=2,e/=2;var r=I.arc(a+t,b+e,t-4,e-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1}),o=I.arc(a+t,b+e,t-3,e-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:t-2,open:!1});return I.arc(a+t,b+e,t-1,e-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:t,open:!1}).concat(o,r)},d.prototype.animateClusterPoint=function(a){var b=this.chart,t=b.mapView,e=C((this.options.cluster||{}).animation),r=e.duration||500,o=(this.markerClusterInfo||{}).pointsState,n=(o||{}).newState,l=(o||{}).oldState,p=[],d=o=0,q=0,h=!1,c=!1;if(l&&n){var g=n[a.stateId];if(o=j(this,g),d=o.x-(t?0:b.plotLeft),q=o.y-(t?0:b.plotTop),1===g.parentsId.length){a=(n||{})[a.stateId].parentsId[0];var f=l[a];g.point&&g.point.graphic&&f&&f.point&&f.point.plotX&&f.point.plotY&&f.point.plotX!==g.point.plotX&&f.point.plotY!==g.point.plotY&&(a=g.point.graphic.getBBox(),o=g.point.graphic&&g.point.graphic.isImg?0:a.width/2,g.point.graphic.attr({x:f.point.plotX-o,y:f.point.plotY-o}),g.point.graphic.animate({x:d-(g.point.graphic.radius||0),y:q-(g.point.graphic.radius||0)},e,(function(){c=!0,f.point&&f.point.destroy&&f.point.destroy()})),g.point.dataLabel&&g.point.dataLabel.alignAttr&&f.point.dataLabel&&f.point.dataLabel.alignAttr&&(g.point.dataLabel.attr({x:f.point.dataLabel.alignAttr.x,y:f.point.dataLabel.alignAttr.y}),g.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,y:g.point.dataLabel.alignAttr.y},e)))}else 0===g.parentsId.length?(x(g,!0,!0),P((function(){m(g,.1,e,!0,!0)}),r/2)):(x(g,!0,!0),g.parentsId.forEach((function(a){l&&l[a]&&(f=l[a],p.push(f),f.point&&f.point.graphic&&(h=!0,f.point.graphic.show(),f.point.graphic.animate({x:d-(f.point.graphic.radius||0),y:q-(f.point.graphic.radius||0),opacity:.4},e,(function(){c=!0,y(g,p,e,.7)})),f.point.dataLabel&&-9999!==f.point.dataLabel.y&&g.point&&g.point.dataLabel&&g.point.dataLabel.alignAttr&&(f.point.dataLabel.show(),f.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,y:g.point.dataLabel.alignAttr.y,opacity:.4},e))))})),P((function(){c||y(g,p,e,.85)}),r),h||P((function(){y(g,p,e,.1)}),r/2))}},d.prototype.getGridOffset=function(){var a=this.chart,b=this.xAxis,t=this.yAxis;return{plotLeft:b=b&&this.dataMinX&&this.dataMaxX?b.reversed?b.toPixels(this.dataMaxX):b.toPixels(this.dataMinX):a.plotLeft,plotTop:a=t&&this.dataMinY&&this.dataMaxY?t.reversed?t.toPixels(this.dataMinY):t.toPixels(this.dataMaxY):a.plotTop}},d.prototype.getScaledGridSize=function(a){var b=this.xAxis,t=this.chart.mapView;a=a.processedGridSize||O.layoutAlgorithm.gridSize;var e=!0,r=1,o=1;for(this.gridValueSize||(this.gridValueSize=t?a/t.getScale():Math.abs(b.toValue(a)-b.toValue(0))),b=+(a/(b=t?this.gridValueSize*t.getScale():b.toPixels(this.gridValueSize)-b.toPixels(0))).toFixed(14);e&&1!==b;)t=Math.pow(2,r),.75<b&&1.25>b?e=!1:b>=1/t&&b<1/t*2?(e=!1,o=t):b<=t&&b>t/2&&(e=!1,o=1/t),r++;return a/o/b},d.prototype.getRealExtremes=function(){var a=this.chart,b=a.mapView?0:a.plotLeft,t=V(this,{x:b,y:a.mapView?0:a.plotTop}),e=V(this,{x:b+a.plotWidth,y:b+a.plotHeight});return a=t.x,b=e.x,t=t.y,e=e.y,{minX:Math.min(a,b),maxX:Math.max(a,b),minY:Math.min(t,e),maxY:Math.max(t,e)}},d.prototype.onDrillToCluster=function(a){(a.point||a.target).firePointEvent("drillToCluster",a,(function(a){var b=a.point||a.target,t=b.series.xAxis,e=b.series.yAxis,r=b.series.chart,o=r.mapView;if((b.series.options.cluster||{}).drillToCluster&&b.clusteredData){var n=b.clusteredData.map((function(a){return a.x})).sort((function(a,b){return a-b}));b=b.clusteredData.map((function(a){return a.y})).sort((function(a,b){return a-b}));var p=n[0],l=n[n.length-1];n=b[0];var q=b[b.length-1],d=Math.abs(.1*(l-p)),h=Math.abs(.1*(q-n));b=Math.min(p,l)-d,p=Math.max(p,l)+d,l=Math.min(n,q)-h,n=Math.max(n,q)+h,o?o.fitToBounds({x1:b,x2:p,y1:l,y2:n}):t&&e&&(r.pointer.zoomX=!0,r.pointer.zoomY=!0,r.zoom({originalEvent:a,xAxis:[{axis:t,min:b,max:p}],yAxis:[{axis:e,min:l,max:n}]}))}}))},d.prototype.getClusterDistancesFromPoint=function(a,b,t){for(var e=[],r=0;r<a.length;r++){var o=j(this,{x:b,y:t}),n=j(this,{x:a[r].posX,y:a[r].posY});e.push({clusterIndex:r,distance:Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2))})}return e.sort((function(a,b){return a.distance-b.distance}))},d.prototype.getPointsState=function(a,b,t){b=b?f(b,t):[],t=f(a,t);var e,r={};for(E=[],a.clusters.forEach((function(a){r[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}})),a.noise.forEach((function(a){r[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}})),e=0;e<t.length;e++){a=t[e];var o=b[e];a&&o&&a.parentStateId&&o.parentStateId&&r[a.parentStateId]&&-1===r[a.parentStateId].parentsId.indexOf(o.parentStateId)&&(r[a.parentStateId].parentsId.push(o.parentStateId),-1===E.indexOf(o.parentStateId)&&E.push(o.parentStateId))}return r},d.prototype.markerClusterAlgorithms={grid:function(a,b,t,e){var r={},o=this.getGridOffset(),n=this.getScaledGridSize(e);for(e=0;e<a.length;e++){var l=j(this,{x:a[e],y:b[e]}),p=l.x-o.plotLeft;l=l.y-o.plotTop,p=Math.floor(p/n),r[p=(l=Math.floor(l/n))+"-"+p]||(r[p]=[]),r[p].push({dataIndex:t[e],x:a[e],y:b[e]})}return r},kmeans:function(a,b,t,e){var r,o=[],n=[],l={},d=e.processedDistance||O.layoutAlgorithm.distance,p=e.iterations,h=0,q=!0,f=0,m=0,g=[];for(r in e.processedGridSize=e.processedDistance,f=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,a,b,t,e):{})1<f[r].length&&(g=c(f[r]),o.push({posX:g.x,posY:g.y,oldX:0,oldY:0,startPointsLen:f[r].length,points:[]}));for(;q;){for(o.map((function(a){return a.points.length=0,a})),q=n.length=0;q<a.length;q++)f=a[q],m=b[q],(g=this.getClusterDistancesFromPoint(o,f,m)).length&&g[0].distance<d?o[g[0].clusterIndex].points.push({x:f,y:m,dataIndex:t[q]}):n.push({x:f,y:m,dataIndex:t[q]});for(r=0;r<o.length;r++)1===o[r].points.length&&(g=this.getClusterDistancesFromPoint(o,o[r].points[0].x,o[r].points[0].y))[1].distance<d&&(o[g[1].clusterIndex].points.push(o[r].points[0]),o[g[0].clusterIndex].points.length=0);for(q=!1,r=0;r<o.length;r++)g=c(o[r].points),o[r].oldX=o[r].posX,o[r].oldY=o[r].posY,o[r].posX=g.x,o[r].posY=g.y,(o[r].posX>o[r].oldX+1||o[r].posX<o[r].oldX-1||o[r].posY>o[r].oldY+1||o[r].posY<o[r].oldY-1)&&(q=!0);p&&(q=h<p-1),h++}return o.forEach((function(a,b){l["cluster"+b]=a.points})),n.forEach((function(a,b){l["noise"+b]=[a]})),l},optimizedKmeans:function(a,b,t,e){var q,r,o=this,n=e.processedDistance||O.layoutAlgorithm.gridSize,l={},d=o.getRealExtremes(),p=(o.options.cluster||{}).marker;return!o.markerClusterInfo||o.initMaxX&&o.initMaxX<d.maxX||o.initMinX&&o.initMinX>d.minX||o.initMaxY&&o.initMaxY<d.maxY||o.initMinY&&o.initMinY>d.minY?(o.initMaxX=d.maxX,o.initMinX=d.minX,o.initMaxY=d.maxY,o.initMinY=d.minY,l=o.markerClusterAlgorithms?o.markerClusterAlgorithms.kmeans.call(o,a,b,t,e):{},o.baseClusters=null):(o.baseClusters||(o.baseClusters={clusters:o.markerClusterInfo.clusters,noise:o.markerClusterInfo.noise}),o.baseClusters.clusters.forEach((function(a){a.pointsOutside=[],a.pointsInside=[],a.data.forEach((function(b){var t=j(o,b),e=j(o,a);q=Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)),r=a.clusterZone&&a.clusterZone.marker&&a.clusterZone.marker.radius?a.clusterZone.marker.radius:p&&p.radius?p.radius:O.marker.radius,q>r+(0<=n-r?n-r:r)&&M(a.pointsOutside)?a.pointsOutside.push(b):M(a.pointsInside)&&a.pointsInside.push(b)})),a.pointsInside.length&&(l[a.id]=a.pointsInside),a.pointsOutside.forEach((function(b,t){l[a.id+"_noise"+t]=[b]}))})),o.baseClusters.noise.forEach((function(a){l[a.id]=a.data}))),l}},d.prototype.preventClusterCollisions=function(a){var b=this,t=a.key.split("-").map(parseFloat),e=t[0],r=t[1],o=a.gridSize,n=a.groupedData,l=a.defaultRadius,p=a.clusterRadius,d=r*o,q=e*o,h=(t=j(b,a)).x,f=t.y;t=[];var u,m,x,y,C,I,k,g=0,S=0,v=(b.options.cluster||{}).marker,D=(b.options.cluster||{}).zones,A=b.getGridOffset();for(h-=A.plotLeft,f-=A.plotTop,x=1;5>x;x++){var X=x%2?-1:1,Y=3>x?-1:1;for(X=Math.floor((h+X*p)/o),X=[(Y=Math.floor((f+Y*p)/o))+"-"+X,Y+"-"+r,e+"-"+X],Y=0;Y<X.length;Y++)-1===t.indexOf(X[Y])&&X[Y]!==a.key&&t.push(X[Y])}return t.forEach((function(a){if(n[a]){n[a].posX||(I=c(n[a]),n[a].posX=I.x,n[a].posY=I.y);var t=j(b,{x:n[a].posX||0,y:n[a].posY||0});if(u=t.x-A.plotLeft,m=t.y-A.plotTop,t=a.split("-").map(parseFloat),C=t[0],y=t[1],D)for(g=n[a].length,x=0;x<D.length;x++)g>=D[x].from&&g<=D[x].to&&(S=M((D[x].marker||{}).radius)?D[x].marker.radius||0:v&&v.radius?v.radius:O.marker.radius);1<n[a].length&&0===S&&v&&v.radius?S=v.radius:1===n[a].length&&(S=l),k=p+S,S=0,y!==r&&Math.abs(h-u)<k&&(h=0>y-r?d+p:d+o-p),C!==e&&Math.abs(f-m)<k&&(f=0>C-e?q+p:q+o-p)}})),t=V(b,{x:h+A.plotLeft,y:f+A.plotTop}),n[a.key].posX=t.x,n[a.key].posY=t.y,t},d.prototype.isValidGroupedDataObject=function(a){var t,b=!1;return!!A(a)&&(L(a,(function(a){if(b=!0,v(a)&&a.length){for(t=0;t<a.length;t++)if(!A(a[t])||!a[t].x||!a[t].y){b=!1;break}}else b=!1})),b)},d.prototype.getClusteredData=function(a,b){var t,q,e=[],r=[],o=[],n=[],l=[],d=0,p=Math.max(2,b.minimumClusterSize||2);if(D(b.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(a))return S("Highcharts marker-clusters module: The custom algorithm result is not valid!",!1,this.chart),!1;for(q in a)if(a[q].length>=p){var h=a[q],f=Math.random().toString(36).substring(2,7)+"-"+T++,g=h.length;if(b.zones)for(t=0;t<b.zones.length;t++)if(g>=b.zones[t].from&&g<=b.zones[t].to){var m=b.zones[t];m.zoneIndex=t;var x=b.zones[t].marker,u=b.zones[t].className}var y=c(h);for("grid"!==b.layoutAlgorithm.type||b.allowOverlap?y={x:y.x,y:y.y}:(t=this.options.marker||{},y=this.preventClusterCollisions({x:y.x,y:y.y,key:q,groupedData:a,gridSize:this.getScaledGridSize(b.layoutAlgorithm),defaultRadius:t.radius||3+(t.lineWidth||0),clusterRadius:x&&x.radius?x.radius:(b.marker||{}).radius||O.marker.radius})),t=0;t<g;t++)h[t].parentStateId=f;if(o.push({x:y.x,y:y.y,id:q,stateId:f,index:d,data:h,clusterZone:m,clusterZoneClassName:u}),e.push(y.x),r.push(y.y),l.push({options:{formatPrefix:"cluster",dataLabels:b.dataLabels,marker:Y(b.marker,{states:b.states},x||{})}}),this.options.data&&this.options.data.length)for(t=0;t<g;t++)A(this.options.data[h[t].dataIndex])&&(h[t].options=this.options.data[h[t].dataIndex]);d++,x=null}else for(t=0;t<a[q].length;t++)h=a[q][t],f=Math.random().toString(36).substring(2,7)+"-"+T++,g=((this.options||{}).data||[])[h.dataIndex],e.push(h.x),r.push(h.y),h.parentStateId=f,n.push({x:h.x,y:h.y,id:q,stateId:f,index:d,data:a[q]}),f=g&&"object"==typeof g&&!v(g)?Y(g,{x:h.x,y:h.y}):{userOptions:g,x:h.x,y:h.y},l.push({options:f}),d++;return{clusters:o,noise:n,groupedXData:e,groupedYData:r,groupMap:l}},d.prototype.destroyClusteredData=function(){(this.markerClusterSeriesData||[]).forEach((function(a){a&&a.destroy&&a.destroy()})),this.markerClusterSeriesData=null},d.prototype.hideClusteredData=function(){var a=this.markerClusterSeriesData,b=((this.markerClusterInfo||{}).pointsState||{}).oldState||{},t=E.map((function(a){return(b[a].point||{}).id||""}));(a||[]).forEach((function(a){a&&-1!==t.indexOf(a.id)?(a.graphic&&a.graphic.hide(),a.dataLabel&&a.dataLabel.hide()):a&&a.destroy&&a.destroy()}))},d.prototype.generatePoints=function(){var t,p,e,a=this,b=a.chart,r=a.options.cluster,o=a.getRealExtremes(),n=[],l=[],d=[];if(r&&r.enabled&&a.xData&&a.xData.length&&a.yData&&a.yData.length&&!b.polar){var q=r.layoutAlgorithm.type,h=r.layoutAlgorithm;h.processedGridSize=z(h.gridSize||O.layoutAlgorithm.gridSize,b.plotWidth),h.processedDistance=z(h.distance||O.layoutAlgorithm.distance,b.plotWidth),b=h.kmeansThreshold||O.layoutAlgorithm.kmeansThreshold;var c=h.processedGridSize/2,g=V(a,{x:0,y:0}),f=V(a,{x:c,y:c});for(c=Math.abs(g.x-f.x),g=Math.abs(g.y-f.y),f=0;f<a.xData.length;f++){if(!a.dataMaxX)if(M(u)&&M(t)&&M(m)&&M(p))X(a.yData[f])&&X(m)&&X(p)&&(u=Math.max(a.xData[f],u),t=Math.min(a.xData[f],t),m=Math.max(a.yData[f]||m,m),p=Math.min(a.yData[f]||p,p));else var u=t=a.xData[f],m=p=a.yData[f];a.xData[f]>=o.minX-c&&a.xData[f]<=o.maxX+c&&(a.yData[f]||o.minY)>=o.minY-g&&(a.yData[f]||o.maxY)<=o.maxY+g&&(n.push(a.xData[f]),l.push(a.yData[f]),d.push(f))}M(u)&&M(t)&&X(m)&&X(p)&&(a.dataMaxX=u,a.dataMinX=t,a.dataMaxY=m,a.dataMinY=p),h=(n=(o=D(q)?q:a.markerClusterAlgorithms?q&&a.markerClusterAlgorithms[q]?a.markerClusterAlgorithms[q]:n.length<b?a.markerClusterAlgorithms.kmeans:a.markerClusterAlgorithms.grid:function(){return!1}).call(this,n,l,d,h))?a.getClusteredData(n,r):n,r.animation&&a.markerClusterInfo&&a.markerClusterInfo.pointsState&&a.markerClusterInfo.pointsState.oldState?(function(a){a&&L(a,(function(a){a.point&&a.point.destroy&&a.point.destroy()}))}(a.markerClusterInfo.pointsState.oldState),n=a.markerClusterInfo.pointsState.newState):n={},l=a.xData.length,d=a.markerClusterInfo,h&&(a.processedXData=h.groupedXData,a.processedYData=h.groupedYData,a.hasGroupedData=!0,a.markerClusterInfo=h,a.groupMap=h.groupMap),w.apply(this),h&&a.markerClusterInfo&&((a.markerClusterInfo.clusters||[]).forEach((function(b){(e=a.points[b.index]).isCluster=!0,e.clusteredData=b.data,e.clusterPointsAmount=b.data.length,b.point=e,k(e,"click",a.onDrillToCluster)})),(a.markerClusterInfo.noise||[]).forEach((function(b){b.point=a.points[b.index]})),r.animation&&a.markerClusterInfo&&(a.markerClusterInfo.pointsState={oldState:n,newState:a.getPointsState(h,d,l)}),r.animation?this.hideClusteredData():this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else w.apply(this)},k(e,"render",(function(){(this.series||[]).forEach((function(a){if(a.markerClusterInfo){var b=((a.markerClusterInfo||{}).pointsState||{}).oldState;(a.options.cluster||{}).animation&&a.markerClusterInfo&&0===a.chart.pointer.pinchDown.length&&"pan"!==((a.xAxis||{}).eventArgs||{}).trigger&&b&&Object.keys(b).length&&(a.markerClusterInfo.clusters.forEach((function(b){a.animateClusterPoint(b)})),a.markerClusterInfo.noise.forEach((function(b){a.animateClusterPoint(b)})))}}))})),k(o,"update",(function(){if(this.dataGroup)return S("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1})),k(n,"destroy",d.prototype.destroyClusteredData),k(n,"afterRender",(function(){var a=(this.options.cluster||{}).drillToCluster;this.markerClusterInfo&&this.markerClusterInfo.clusters&&this.markerClusterInfo.clusters.forEach((function(b){b.point&&b.point.graphic&&(b.point.graphic.addClass("highcharts-cluster-point"),a&&b.point&&(b.point.graphic.css({cursor:"pointer"}),b.point.dataLabel&&b.point.dataLabel.css({cursor:"pointer"})),M(b.clusterZone)&&b.point.graphic.addClass(b.clusterZoneClassName||"highcharts-cluster-zone-"+b.clusterZone.zoneIndex))}))})),k(o,"drillToCluster",(function(a){var b=(((a.point||a.target).series.options.cluster||{}).events||{}).drillToCluster;D(b)&&b.call(this,a)})),k(h,"setExtremes",(function(){var t,a=this.chart,b=0;a.series.forEach((function(a){a.markerClusterInfo&&(t=C((a.options.cluster||{}).animation),b=t.duration||0)})),P((function(){a.tooltip&&a.tooltip.destroy()}),b)}))})),e(t,"masters/modules/marker-clusters.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(o=[r(190)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(e,o))||(t.exports=n))}}]);