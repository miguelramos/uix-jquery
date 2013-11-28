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
});