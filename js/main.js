$(document).ready(function() {

//sticky-menu
  $(window) .on('scroll',function(){
    var scroll = $(window) .scrollTop();
    if (scroll < 1) {
      $(".sticky").removeClass("scroll-header");
    }else{
      $(".sticky").addClass("scroll-header");
    }
  });

  $("#sticker").sticky({topSpacing:0});
  var $grid = $('.portfolio-active').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
});

$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

	/*mobile-menu*/
	$('#mobile-menu').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu'
	});
	
	//slider-active
	$('.slider-active').slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
  slidesToScroll: 1
});
		//testimonial-active
	$('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  slidesToScroll: 1
})		
//brand-active
	$('.brand-active').slick({
  infinite: true,
  slidesToShow: 5,
  autoplay: true,
  dots: false,
  arrows: false,
  slidesToScroll: 1
});
	//counterUp
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});
	
})