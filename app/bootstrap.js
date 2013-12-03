$(document).ready(function() {
	/*var tag =$('empty').tag({'class':'empty','alt':'hello'});
	$('body').append(z);*/

	//$('body').box({'removeEnable':true});

	//$('.uix-box').icons({'selected':'map-icon-art-gallery','color':'#000'});
	//$('.uix-box').data('iconSelected', 'map-icon-art-gallery').data('iconColor','#000').icons();

	var boxSimple = $('.box-container').box({
		'removeEnable': true
	});
	boxSimple.box('addContent', '<h1>Hello World</h1>');

	var boxIcons = $('.icons-container').box();
	boxIcons.box('addContent', $('div').tag({
		'class': 'icons-maps'
	}).icons());

	/*var gmap = $('.map-container').maps();
	gmap.maps('addMarker',{});*/

	var $map = $('.map-container').gmaps();
	$map.gmaps('addMarker', {
		'zIndex': 9,
		'title': 'Map Icons',
		'position': '41.358773, -8.753555',
		'icon': {
			path: MAP_PIN,
			fillColor: '#0E77E9',
			fillOpacity: 1,
			strokeColor: '#fff',
			strokeWeight: 2,
			scale: 1 / 3
		},
		'label': '<i class="map-icon-school"></i>'
	}).click(function(evt) {
		console.log(this);
		//evt.stopPropagation();
		
		alert('marker');
	});

	$map.gmaps('addMarker', {
		'zIndex': 9,
		'title': 'Map Icons',
		'position': '41.41674, -8.50125',
		'icon': {
			path: MAP_PIN,
			fillColor: '#0E77E9',
			fillOpacity: 1,
			strokeColor: '#fff',
			strokeWeight: 2,
			scale: 1 / 3
		},
		'label': '<i class="map-icon-post-office"></i>'
	}).click(function(marker) {
            $('.map-container').gmaps('openInfoWindow', {'content': 'Hello World!', 'title': 'Hello on this land.'}, this, function(iw){
                //console.log(iw);
            });
            //console.log(marker);
	});
});