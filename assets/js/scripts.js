$(document).ready(function () {

	// // Scroll Reveal
	// window.sr = ScrollReveal();

	// var sections = document.getElementsByClassName('main');
	// function divreveal() {
	//   sr.reveal('div', { container: sections, duration: 2000, scale: 1, distance: '30px' });
	//   // sr.reveal('div', { container: footer, duration: 2000, scale: 1, distance: '30px' });
	//   // ds.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
	// }
	//         sr.reveal('header', { duration: 1000, scale: 1, distance: '10px' });
	//         sr.reveal('.hero', { duration: 1000, scale: 1, distance: '0px' });
	//         sr.reveal('.hero h1', { duration: 3000, scale: 1.1, distance: '150px' });
	//         sr.reveal('.hero h4', { duration: 3000, scale: 1.1, distance: '200px' });
	//         sr.reveal('.hero-cta', { duration: 3000, scale: 1.1, distance: '250px' });
	//         sr.reveal('.hero__media', { duration: 3000, scale: 1.1, distance: '300px' });
	//         // sr.reveal('.main__description', { duration: 2000, scale: 1, distance: '80px' });
	//         sr.reveal('.footer', { duration: 1000, scale: 1, distance: '30px' });
	//         sr.reveal('section div', {duration: 1000, scale: 1, distance: '30px' });

});



	// Desktop - GIF on Hover
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

	$(document).ready(function(){

		$('#nav-icon1').click(function(){
		  $(this).toggleClass('open');
		  $('.header--mobile__menu').toggleClass('open');
		  
		  $("header").css("background","#00171F");
		});

		$(window).on("scroll", function() {
		  if ($(this).scrollTop() > 100) {
		    $("nav").css("background","#00171F");
		    $(".header-link").css("color","#fff");
		  }
		  else {
		     $("nav").css("background","none");
		     $(".header-link").css("color","#fff");
		  }
		});

	});

$.fn.numberChange = function(options) {

  var settings = $.extend({
    wait: 1000,
    duration: 1000,
    startValue: 100,
    endValue: 0,
    prefix: '',
    easing: 'swing'
  }, options)
  
  var that = this;
  that.html(settings.prefix + settings.startValue);
  
  $({number: settings.startValue})
    .delay(settings.wait)
    .animate({number:settings.endValue},{
    duration: settings.duration,
    easing: settings.easing,
    step: function(now, tween) {
      that.html(settings.prefix + Math.floor(now));
    }
  });

  return this;
  
}


$(".number").click(function() {
  $(this).numberChange({
    easing: 'easeOutQuint',
    wait: 0,
    duration: 4000,
    prefix:'$',
    startValue: 575,
    endValue: 310
  });
})