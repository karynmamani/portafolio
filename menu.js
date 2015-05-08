
$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > 539) {
		$(".navbar").addClass("scroll");
		// $(".navbar-brand").removeClass("hidden");

	}
		else if (prueba < 539) {
		$(".navbar").removeClass("scroll");
		// $(".navbar-brand").addClass("hidden");

	}
});


