
$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > 734) {
		$(".navbar").addClass("scroll");
		// $(".navbar-brand").removeClass("hidden");

	}
		else if (prueba < 734) {
		$(".navbar").removeClass("scroll");
		// $(".navbar-brand").addClass("hidden");

	}
});


