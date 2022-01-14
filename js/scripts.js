(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});



		// code for video changing
		$("h3#video-thumb").click(function (){
			let pickVideo = $(this).attr('video-data')
			$("#video-left-frames").html(`<video autoplay loop src="${pickVideo}">`);		
		});
		
		$("h3#images-thumb").click(function (){
			let pickImg = $(this).attr('phndata')
			$("#video-left-frames").html(`<img src="${pickImg}">`);
		});




		$(".video-sm .video-content-one h3").click(function (){
			$(this).next("p").slideToggle();
			$(this).children("span").toggleClass("rotedarrow")
		});

		$('.products-slider').owlCarousel({
			loop: true,
			margin: 35,
			center: false,
			nav: false,
			dots: false,
			autoplay:true,
			autoplayTimeout:5000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				960 : {
					items: 2
				},
				1200 : {
					items: 2
				},
				1920 : {
					items: 2
				}
			}
		});

		var owl = $('.products-slider');
			 owl.owlCarousel();
			 $('#right, #right-sm').click(function() {
				 owl.trigger('next.owl.carousel');
			 })
			 $('#left, #left-sm').click(function() {
				 owl.trigger('prev.owl.carousel', [300]);
			 });


			 $(".header-bar").click(function (){
				$(".header-right").slideToggle();
				$(this).toggleClass("bar-cross")
			});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);