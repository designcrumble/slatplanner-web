$(window).load(function () {

	$('#b-menu').click(function() {
		$('.nav--mobile__menu').css('display', 'flex');
		$('body').addClass('no-scroll');
	});

	$('#b-menu-close').click(function() {
		$('.nav--mobile__menu').hide();
		$('body').removeClass('no-scroll');
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

    var $headline = $("#heroTitle");

    var xd=new TimelineMax()
            .staggerTo($headline,1, {opacity:1, y:-20, ease: Back.easeInOut}, 0.5);

});


// $.fn.numberChange = function(options) {

//   var settings = $.extend({
//     wait: 1000,
//     duration: 1000,
//     startValue: 100,
//     endValue: 0,
//     prefix: '',
//     easing: 'swing'
//   }, options)
  
//   var that = this;
//   that.html(settings.prefix + settings.startValue);
  
//   $({number: settings.startValue})
//     .delay(settings.wait)
//     .animate({number:settings.endValue},{
//     duration: settings.duration,
//     easing: settings.easing,
//     step: function(now, tween) {
//       that.html(settings.prefix + Math.floor(now));
//     }
//   });

//   return this;
  
// }


// $(".number").click(function() {
//   $(this).numberChange({
//     easing: 'easeOutQuint',
//     wait: 0,
//     duration: 4000,
//     prefix:'$',
//     startValue: 575,
//     endValue: 310
//   });
// })