(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{543:function(t,e,o){"use strict";var r,n,b;b=function(b){function t(b,t,e,o){b.hasOwnProperty(t)||(b[t]=o.apply(null,e))}t(b=b?b._modules:{},"Core/Axis/Color/ColorAxisComposition.js",[b["Core/Color/Color.js"],b["Core/Utilities.js"]],(function(b,t){var e,o=b.parse,r=t.addEvent,n=t.extend,l=t.merge,h=t.pick,c=t.splat;return function(t){function b(){var t=this,a=this.options;this.colorAxis=[],a.colorAxis&&(a.colorAxis=c(a.colorAxis),a.colorAxis.forEach((function(a,e){a.index=e,new v(t,a)})))}function e(a){var p,t,e=this,o=function(t){-1!==(t=a.allItems.indexOf(t))&&(e.destroyItem(a.allItems[t]),a.allItems.splice(t,1))},r=[];for((this.chart.colorAxis||[]).forEach((function(a){(p=a.options)&&p.showInLegend&&(p.dataClasses&&p.visible?r=r.concat(a.getDataClassLegendSymbols()):p.visible&&r.push(a),a.series.forEach((function(a){a.options.showInLegend&&!p.dataClasses||("point"===a.options.legendType?a.points.forEach((function(a){o(a)})):o(a))})))})),t=r.length;t--;)a.allItems.unshift(r[t])}function d(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}function u(){var a=this.chart.colorAxis;a&&a.forEach((function(a,t,e){a.update({},e)}))}function f(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function q(){var a=this.axisTypes;a?-1===a.indexOf("colorAxis")&&a.push("colorAxis"):this.axisTypes=["colorAxis"]}function y(a){var t=this,e=a?"show":"hide";t.visible=t.options.visible=!!a,["graphic","dataLabel"].forEach((function(a){t[a]&&t[a][e]()})),this.series.buildKDTree()}function g(){var a=this,t=this.options.nullColor,e=this.colorAxis,o=this.colorKey;(this.data.length?this.data:this.points).forEach((function(r){var n=r.getNestedProperty(o);(n=r.options.color||(r.isNull||null===r.value?t:e&&void 0!==n?e.toColor(n,r):r.color||a.color))&&r.color!==n&&(r.color=n,"point"===a.options.legendType&&r.legendItem&&a.chart.legend.colorizeItem(r,r.visible))}))}function m(){this.elem.attr("fill",o(this.start).tweenTo(o(this.end),this.pos),void 0,!0)}function x(){this.elem.attr("stroke",o(this.start).tweenTo(o(this.end),this.pos),void 0,!0)}var v,a=[];t.compose=function(p,t,o,c,C){v||(v=p),-1===a.indexOf(t)&&(a.push(t),(p=t.prototype).collectionsWithUpdate.push("colorAxis"),p.collectionsWithInit.colorAxis=[p.addColorAxis],r(t,"afterGetAxes",b),function(a){var t=a.prototype.createAxis;a.prototype.createAxis=function(a,e){if("colorAxis"!==a)return t.apply(this,arguments);var o=new v(this,l(e.axis,{index:this[a].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach((function(a){a.series=[]})),this.series.forEach((function(a){a.bindAxes(),a.isDirtyData=!0})),h(e.redraw,!0)&&this.redraw(e.animation),o}}(t)),-1===a.indexOf(o)&&(a.push(o),(t=o.prototype).fillSetter=m,t.strokeSetter=x),-1===a.indexOf(c)&&(a.push(c),r(c,"afterGetAllItems",e),r(c,"afterColorizeItem",d),r(c,"afterUpdate",u)),-1===a.indexOf(C)&&(a.push(C),n(C.prototype,{optionalAxis:"colorAxis",translateColors:g}),n(C.prototype.pointClass.prototype,{setVisible:y}),r(C,"afterTranslate",f),r(C,"bindAxes",q))},t.pointSetVisible=y}(e||(e={})),e})),t(b,"Core/Axis/Color/ColorAxisDefaults.js",[],(function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}})),t(b,"Core/Axis/Color/ColorAxis.js",[b["Core/Axis/Axis.js"],b["Core/Color/Color.js"],b["Core/Axis/Color/ColorAxisComposition.js"],b["Core/Axis/Color/ColorAxisDefaults.js"],b["Core/Globals.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t,e,o,r,n,l,h){var c=this&&this.__extends||function(){var t=function(g,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(g,e)};return function(g,e){function o(){this.constructor=g}t(g,e),g.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),d=t.parse,f=r.noop,y=l.series,m=h.extend,u=h.isNumber,x=h.merge,q=h.pick;return t=function(b){function g(t,e){var o=b.call(this,t,e)||this;return o.beforePadding=!1,o.chart=void 0,o.coll="colorAxis",o.dataClasses=void 0,o.legendItem=void 0,o.legendItems=void 0,o.name="",o.options=void 0,o.stops=void 0,o.visible=!0,o.init(t,e),o}return c(g,b),g.compose=function(t,o,r,a){e.compose(g,t,o,r,a)},g.prototype.init=function(t,e){var o=t.options.legend||{},a=e.layout?"vertical"!==e.layout:"vertical"!==o.layout,r=e.visible;o=x(g.defaultColorAxisOptions,e,{showEmpty:!1,title:null,visible:o.enabled&&!1!==r}),this.coll="colorAxis",this.side=e.side||a?2:1,this.reversed=e.reversed||!a,this.opposite=!a,b.prototype.init.call(this,t,o),this.userOptions.visible=r,e.dataClasses&&this.initDataClasses(e),this.initStops(),this.horiz=a,this.zoomEnabled=!1},g.prototype.initDataClasses=function(t){var e,o=this.chart,r=this.options,a=t.dataClasses.length,b=0,n=o.options.chart.colorCount;this.dataClasses=e=[],this.legendItems=[],(t.dataClasses||[]).forEach((function(t,g){t=x(t),e.push(t),!o.styledMode&&t.color||("category"===r.dataClassColor?(o.styledMode||(g=o.options.colors,n=g.length,t.color=g[b]),t.colorIndex=b,++b===n&&(b=0)):t.color=d(r.minColor).tweenTo(d(r.maxColor),2>a?.5:g/(a-1)))}))},g.prototype.hasData=function(){return!!(this.tickPositions||[]).length},g.prototype.setTickPositions=function(){if(!this.dataClasses)return b.prototype.setTickPositions.call(this)},g.prototype.initStops=function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach((function(t){t.color=d(t[1])}))},g.prototype.setOptions=function(t){b.prototype.setOptions.call(this,t),this.options.crosshair=this.options.marker},g.prototype.setAxisSize=function(){var a,t,e=this.legendSymbol,o=this.chart,r=o.options.legend||{};e?(this.left=r=e.attr("x"),this.top=a=e.attr("y"),this.width=t=e.attr("width"),this.height=e=e.attr("height"),this.right=o.chartWidth-r-t,this.bottom=o.chartHeight-a-e,this.len=this.horiz?t:e,this.pos=this.horiz?r:a):this.len=(this.horiz?r.symbolWidth:r.symbolHeight)||g.defaultLegendLength},g.prototype.normalizedValue=function(t){return this.logarithmic&&(t=this.logarithmic.log2lin(t)),1-(this.max-t)/(this.max-this.min||1)},g.prototype.toColor=function(t,e){var o,r=this.dataClasses,a=this.stops;if(r)for(o=r.length;o--;){var b=r[o],n=b.from;if(a=b.to,(void 0===n||t>=n)&&(void 0===a||t<=a)){var g=b.color;e&&(e.dataClass=o,e.colorIndex=b.colorIndex);break}}else{for(t=this.normalizedValue(t),o=a.length;o--&&!(t>a[o][0]););n=a[o]||a[o+1],t=1-((a=a[o+1]||n)[0]-t)/(a[0]-n[0]||1),g=n.color.tweenTo(a.color,t)}return g},g.prototype.getOffset=function(){var t=this.legendGroup,e=this.chart.axisOffset[this.side];t&&(this.axisParent=t,b.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=e)},g.prototype.setLegendColor=function(){var t=this.reversed,e=t?1:0;t=t?0:1,e=this.horiz?[e,0,t,0]:[0,t,0,e],this.legendColor={linearGradient:{x1:e[0],y1:e[1],x2:e[2],y2:e[3]},stops:this.stops}},g.prototype.drawLegendSymbol=function(t,e){var o=t.padding,a=t.options,r=this.horiz,b=q(a.symbolWidth,r?g.defaultLegendLength:12),n=q(a.symbolHeight,r?12:g.defaultLegendLength),l=q(a.labelPadding,r?16:30);a=q(a.itemDistance,10),this.setLegendColor(),e.legendSymbol=this.chart.renderer.rect(0,t.baseline-11,b,n).attr({zIndex:1}).add(e.legendGroup),this.legendItemWidth=b+o+(r?a:l),this.legendItemHeight=n+o+(r?l:0)},g.prototype.setState=function(t){this.series.forEach((function(e){e.setState(t)}))},g.prototype.setVisible=function(){},g.prototype.getSeriesExtremes=function(){var t,e=this.series,o=e.length;for(this.dataMin=1/0,this.dataMax=-1/0;o--;){var a=e[o],r=a.colorKey=q(a.options.colorKey,a.colorKey,a.pointValKey,a.zoneAxis,"y"),b=a.pointArrayMap,n=a[r+"Min"]&&a[r+"Max"];if(a[r+"Data"])var g=a[r+"Data"];else if(b){g=[],b=b.indexOf(r);var l=a.yData;if(0<=b&&l)for(t=0;t<l.length;t++)g.push(q(l[t][b],l[t]))}else g=a.yData;n?(a.minColorValue=a[r+"Min"],a.maxColorValue=a[r+"Max"]):(g=y.prototype.getExtremes.call(a,g),a.minColorValue=g.dataMin,a.maxColorValue=g.dataMax),void 0!==a.minColorValue&&(this.dataMin=Math.min(this.dataMin,a.minColorValue),this.dataMax=Math.max(this.dataMax,a.maxColorValue)),n||y.prototype.applyExtremes.call(a)}},g.prototype.drawCrosshair=function(t,e){var o=e&&e.plotX,a=e&&e.plotY,r=this.pos,g=this.len;if(e){var n=this.toPixels(e.getNestedProperty(e.series.colorKey));n<r?n=r-2:n>r+g&&(n=r+g+2),e.plotX=n,e.plotY=this.len-n,b.prototype.drawCrosshair.call(this,t,e),e.plotX=o,e.plotY=a,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!=typeof this.crosshair||this.cross.attr({fill:this.crosshair.color}))}},g.prototype.getPlotLinePath=function(t){var e=this.left,o=t.translatedValue,a=this.top;return u(o)?this.horiz?[["M",o-4,a-6],["L",o+4,a-6],["L",o,a],["Z"]]:[["M",e,o],["L",e-6,o+6],["L",e-6,o-6],["Z"]]:b.prototype.getPlotLinePath.call(this,t)},g.prototype.update=function(t,e){var o=this.chart.legend;this.series.forEach((function(a){a.isDirtyData=!0})),(t.dataClasses&&o.allItems||this.dataClasses)&&this.destroyItems(),b.prototype.update.call(this,t,e),this.legendItem&&(this.setLegendColor(),o.colorizeItem(this,!0))},g.prototype.destroyItems=function(){var t=this.chart;this.legendItem?t.legend.destroyItem(this):this.legendItems&&this.legendItems.forEach((function(e){t.legend.destroyItem(e)})),t.isDirtyLegend=!0},g.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),b.prototype.destroy.apply(this,[].slice.call(arguments))},g.prototype.remove=function(t){this.destroyItems(),b.prototype.remove.call(this,t)},g.prototype.getDataClassLegendSymbols=function(){var t,e=this,o=e.chart,r=e.legendItems,a=o.options.legend,l=a.valueDecimals,b=a.valueSuffix||"";return r.length||e.dataClasses.forEach((function(a,g){var h=a.from,c=a.to,d=o.numberFormatter,p=!0;t="",void 0===h?t="< ":void 0===c&&(t="> "),void 0!==h&&(t+=d(h,l)+b),void 0!==h&&void 0!==c&&(t+=" - "),void 0!==c&&(t+=d(c,l)+b),r.push(m({chart:o,name:t,options:{},drawLegendSymbol:n.drawRectangle,visible:!0,setState:f,isDataClass:!0,setVisible:function(){p=e.visible=!p,e.series.forEach((function(a){a.points.forEach((function(a){a.dataClass===g&&a.setVisible(p)}))})),o.legend.colorizeItem(this,p)}},a))})),r},g.defaultColorAxisOptions=o,g.defaultLegendLength=200,g.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"],g}(b),Array.prototype.push.apply(b.keepProps,t.keepProps),t})),t(b,"Series/ColorMapMixin.js",[b["Core/Globals.js"],b["Core/Series/Point.js"],b["Core/Utilities.js"]],(function(b,t,e){var o=b.noop;b=b.seriesTypes;var r=e.defined;return(e=e.addEvent)(t,"afterSetState",(function(b){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:b&&"hover"===b.state?1:0})})),{PointMixin:{dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&1/0!==this.value&&-1/0!==this.value}},SeriesMixin:{pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:o,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:b.column.prototype.pointAttribs,colorAttribs:function(b){var t={};return!r(b.color)||b.state&&"normal"!==b.state||(t[this.colorProp||"fill"]=b.color),t}}}})),t(b,"Series/Heatmap/HeatmapPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t){var e=this&&this.__extends||function(){var b=function(t,e){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,t){b.__proto__=t}||function(b,t){for(var e in t)t.hasOwnProperty(e)&&(b[e]=t[e])})(t,e)};return function(t,e){function o(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),o=t.clamp,r=t.defined,n=t.extend,l=t.pick;return n((b=function(b){function t(){var t=null!==b&&b.apply(this,arguments)||this;return t.options=void 0,t.series=void 0,t.value=void 0,t.x=void 0,t.y=void 0,t}return e(t,b),t.prototype.applyOptions=function(t,e){return(t=b.prototype.applyOptions.call(this,t,e)).formatPrefix=t.isNull||null===t.value?"null":"point",t},t.prototype.getCellAttributes=function(){var b=this.series,t=b.options,e=(t.colsize||1)/2,n=(t.rowsize||1)/2,u=b.xAxis,h=b.yAxis,q=this.options.marker||b.options.marker;b=b.pointPlacementToXValue();var c=l(this.pointPadding,t.pointPadding,0),g={x1:o(Math.round(u.len-(u.translate(this.x-e,!1,!0,!1,!0,-b)||0)),-u.len,2*u.len),x2:o(Math.round(u.len-(u.translate(this.x+e,!1,!0,!1,!0,-b)||0)),-u.len,2*u.len),y1:o(Math.round(h.translate(this.y-n,!1,!0,!1,!0)||0),-h.len,2*h.len),y2:o(Math.round(h.translate(this.y+n,!1,!0,!1,!0)||0),-h.len,2*h.len)};return[["width","x"],["height","y"]].forEach((function(b){var t=b[0],e=(b=b[1])+"1",a=b+"2",o=Math.abs(g[e]-g[a]),n=q&&q.lineWidth||0,l=Math.abs(g[e]+g[a])/2;t=q&&q[t],r(t)&&t<o&&(t=t/2+n/2,g[e]=l-t,g[a]=l+t),c&&("y"===b&&(e=a,a=b+"1"),g[e]+=c,g[a]-=c)})),g},t.prototype.haloPath=function(b){if(!b)return[];var t=this.shapeArgs;return["M",t.x-b,t.y-b,"L",t.x-b,t.y+t.height+b,t.x+t.width+b,t.y+t.height+b,t.x+t.width+b,t.y-b,"Z"]},t.prototype.isValid=function(){return 1/0!==this.value&&-1/0!==this.value},t}(b.seriesTypes.scatter.prototype.pointClass)).prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1}),b})),t(b,"Series/Heatmap/HeatmapSeries.js",[b["Core/Color/Color.js"],b["Series/ColorMapMixin.js"],b["Series/Heatmap/HeatmapPoint.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Renderer/SVG/SVGRenderer.js"],b["Core/Utilities.js"]],(function(b,t,e,o,r,n,l){var h=this&&this.__extends||function(){var b=function(t,e){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var b in t)t.hasOwnProperty(b)&&(a[b]=t[b])})(t,e)};return function(t,e){function a(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),c=r.series,d=r.seriesTypes,f=d.column,y=d.scatter,m=n.prototype.symbols,u=l.extend,x=l.fireEvent,q=l.isNumber,v=l.merge,g=l.pick;return n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.colorAxis=void 0,e.data=void 0,e.options=void 0,e.points=void 0,e.valueMax=NaN,e.valueMin=NaN,e}return h(e,t),e.prototype.drawPoints=function(){var t=this;((this.options.marker||{}).enabled||this._hasPointMarkers)&&(c.prototype.drawPoints.call(this),this.points.forEach((function(a){a.graphic&&(a.graphic[t.chart.styledMode?"css":"animate"](t.colorAttribs(a)),t.options.borderRadius&&a.graphic.attr({r:t.options.borderRadius}),(a.shapeArgs||{}).r=t.options.borderRadius,(a.shapeArgs||{}).d=a.graphic.pathArray,null===a.value&&a.graphic.addClass("highcharts-null-point"))})))},e.prototype.getExtremes=function(){var t=c.prototype.getExtremes.call(this,this.valueData),a=t.dataMin;return t=t.dataMax,q(a)&&(this.valueMin=a),q(t)&&(this.valueMax=t),c.prototype.getExtremes.call(this)},e.prototype.getValidPoints=function(t,a){return c.prototype.getValidPoints.call(this,t,a,!0)},e.prototype.hasData=function(){return!!this.processedXData.length},e.prototype.init=function(){c.prototype.init.apply(this,arguments);var t=this.options;t.pointRange=g(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1,m.ellipse=m.circle},e.prototype.markerAttribs=function(t,a){var b=t.marker||{},e=this.options.marker||{},o=t.shapeArgs||{},r={};if(t.hasImage)return{x:t.plotX,y:t.plotY};if(a){var g=e.states[a]||{},n=b.states&&b.states[a]||{};[["width","x"],["height","y"]].forEach((function(a){r[a[0]]=(n[a[0]]||g[a[0]]||o[a[0]])+(n[a[0]+"Plus"]||g[a[0]+"Plus"]||0),r[a[1]]=o[a[1]]+(o[a[0]]-r[a[0]])/2}))}return a?r:o},e.prototype.pointAttribs=function(t,a){var e=c.prototype.pointAttribs.call(this,t,a),o=this.options||{},r=this.chart.options.plotOptions||{},g=r.series||{},n=r.heatmap||{};return r=t&&t.options.borderColor||o.borderColor||n.borderColor||g.borderColor,g=t&&t.options.borderWidth||o.borderWidth||n.borderWidth||g.borderWidth||e["stroke-width"],e.stroke=t&&t.marker&&t.marker.lineColor||o.marker&&o.marker.lineColor||r||this.color,e["stroke-width"]=g,a&&(a=(t=v(o.states[a],o.marker&&o.marker.states[a],t&&t.options.states&&t.options.states[a]||{})).brightness,e.fill=t.color||b.parse(e.fill).brighten(a||0).get(),e.stroke=t.lineColor),e},e.prototype.setClip=function(b){var a=this.chart;c.prototype.setClip.apply(this,arguments),(!1!==this.options.clip||b)&&this.markerGroup.clip((b||this.clipBox)&&this.sharedClipKey?a.sharedClips[this.sharedClipKey]:a.clipRect)},e.prototype.translate=function(){var b=this.options,a=b.marker&&b.marker.symbol||"rect",t=m[a]?a:"rect",e=-1!==["circle","square"].indexOf(t);this.generatePoints(),this.points.forEach((function(b){var o=b.getCellAttributes(),r={};r.x=Math.min(o.x1,o.x2),r.y=Math.min(o.y1,o.y2),r.width=Math.max(Math.abs(o.x2-o.x1),0),r.height=Math.max(Math.abs(o.y2-o.y1),0);var g=b.hasImage=0===(b.marker&&b.marker.symbol||a||"").indexOf("url");if(e){var n=Math.abs(r.width-r.height);r.x=Math.min(o.x1,o.x2)+(r.width<r.height?0:n/2),r.y=Math.min(o.y1,o.y2)+(r.width<r.height?n/2:0),r.width=r.height=Math.min(r.width,r.height)}n={plotX:(o.x1+o.x2)/2,plotY:(o.y1+o.y2)/2,clientX:(o.x1+o.x2)/2,shapeType:"path",shapeArgs:v(!0,r,{d:m[t](r.x,r.y,r.width,r.height)})},g&&(b.marker={width:r.width,height:r.height}),u(b,n)})),x(this,"afterTranslate")},e.defaultOptions=v(y.defaultOptions,{animation:!1,borderRadius:0,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){var b=this.series.chart.numberFormatter,a=this.point.value;return q(a)?b(a,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}}),e}(y),u(n.prototype,{alignDataLabel:f.prototype.alignDataLabel,axisTypes:t.SeriesMixin.axisTypes,colorAttribs:t.SeriesMixin.colorAttribs,colorKey:t.SeriesMixin.colorKey,directTouch:!0,drawLegendSymbol:o.drawRectangle,getExtremesFromAll:!0,getSymbol:c.prototype.getSymbol,parallelArrays:t.SeriesMixin.parallelArrays,pointArrayMap:["y","value"],pointClass:e,trackerGroups:t.SeriesMixin.trackerGroups}),r.registerSeriesType("heatmap",n),n})),t(b,"masters/modules/heatmap.src.js",[b["Core/Globals.js"],b["Core/Axis/Color/ColorAxis.js"]],(function(b,t){b.ColorAxis=t,t.compose(b.Chart,b.Fx,b.Legend,b.Series)}))},t.exports?(b.default=b,t.exports=b):(r=[o(190)],void 0===(n=function(t){return b(t),b.Highcharts=t,b}.apply(e,r))||(t.exports=n))}}]);