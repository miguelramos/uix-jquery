head.ready([
	"jquery", 
	"jquery-ui",
	"helpers",
	"widget-box"
	], function(){
		
		
		/*var tag =$('empty').tag({'class':'empty','alt':'hello'});
		$('body').append(z);*/

		var x = $('body').box({'onRemove':true});
		console.log(x);
	}
);