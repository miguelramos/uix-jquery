head.ready([
	"jquery", 
	"jquery-ui",
	"colors",
	"helpers",
	"widget-box",
	"widget-icons"
	], function(){
		
		
		/*var tag =$('empty').tag({'class':'empty','alt':'hello'});
		$('body').append(z);*/

		$('body').box({'onRemove':true});

		$('.uix-box').icons();
	}
);