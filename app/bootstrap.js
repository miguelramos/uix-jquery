head.ready([
	"jquery", 
	"jquery-ui",
	"helpers",
	"widget-box"
	], function(){
		
		$('body').box();
		var z =$('empty').tag({'class':'empty','alt':'hello'});
		$('body').append(z);
	}
);