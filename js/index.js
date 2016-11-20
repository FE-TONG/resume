window.onload = function(){
	$('#ccc li a').hover(function(){
		var l = parseInt(Math.random()*10000)%255;
		var b = parseInt(Math.random()*10000)%255;
		var r = parseInt(Math.random()*10000)%255;		
		$(this).css('background','rgb('+l+','+b+','+r+')');
		
	
	},
	function(){
		
	});
	

}