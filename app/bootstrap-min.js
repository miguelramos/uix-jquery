$(document).ready(function(){var e,t,n=$(".box-container").box({removeEnable:!0});n.box("addContent","<h1>Hello World</h1>");e=$(".icons-container").box();e.box("addContent",$("div").tag({"class":"icons-maps"}).icons());t=$(".map-container").gmaps();t.gmaps("addMarker",{zIndex:9,title:"Map Icons",position:"41.358773, -8.753555",icon:{path:MAP_PIN,fillColor:"#0E77E9",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1/3},label:'<i class="map-icon-school"></i>'}).click(function(){console.log(this);alert("marker")});t.gmaps("addMarker",{zIndex:9,title:"Map Icons",position:"41.41674, -8.50125",icon:{path:MAP_PIN,fillColor:"#0E77E9",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1/3},label:'<i class="map-icon-post-office"></i>'}).click(function(){$(".map-container").gmaps("openInfoWindow",{content:"Hello World!",title:"Hello on this land."},this,function(e){console.log(e)})})});