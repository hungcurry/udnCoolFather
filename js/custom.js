$(document).ready(function(){

	//product header change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $headerFive = $("#js-product05");
		var $headerSix = $("#js-product06");
		if(scrollDistance > 1350){
			$headerFive.addClass("fadeInRight--waved");
		}
		if(scrollDistance > 2400){
			$headerSix.addClass("fadeInLeft--waved");
		}
	})


	// wow plugin initialize
	// if(screen.width > 768){
	// 		new WOW().init();
	// }

	// skrollr plugin initialize
	// if(screen.width > 768){
	// 		var s = skrollr.init();
	// }

	// wow rellax initialize
	// $(function () {
	// 	var rellax = new Rellax('.rellax_bg');
	// });

	// wow parallax initialize
	// var scenes = document.getElementById('scenes');
	// var gdParallax = new Parallax(scenes);

	
})

