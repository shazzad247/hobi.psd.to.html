$(document).ready(function(){


  // meanmenu
$('#main-menu').meanmenu({
	meanMenuContainer: '.hobi-mobile-menu',
  meanScreenWidth: "1149",
  onePage:true
});

   // slider-active

   $('.slider-active').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1
});


    // video-popup
    $(document).ready(function() {
      $('.video-popup').magnificPopup({
          type:'image'});
  });	

// WOW active
new WOW().init();



// sticky

$(window).on('scroll', function () {
  var scroll = $ (window) .scrollTop() ;
  if (scroll < 5) {
    $ (".sticky").removeClass("scroll-header");
  } else {
      $(".sticky").addClass("scroll-header");
      
  }
});


// data-background
$("[data-background]").each(function () {
   $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")


})

// counter

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// isotope

 var $grid = $('.protfolio-active').isotope({
   itemSelector: '.grid-item',
   percentPosition: true,
   masonry: {
     // use outer width of grid-sizer for columnWidth
     columnWidth: 1
   }
 })

 // filter items on button click
$('.protfolio-menu').on( 'click', 'button', function() {
   var filterValue = $(this).attr('data-filter');
   $grid.isotope({ filter: filterValue });
 });

// for menu active class
$('.protfolio-menu button').on( 'click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// owlCarousel
$('.testimonial-active').owlCarousel({
  loop:true,
  margin:0,
items:1,
navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  nav:true,
dots:false,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:1
      },
      992:{
          items:1
      },
      1200:{
        items:1
    }
  }
})


})