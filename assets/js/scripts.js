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
    var $subHeader = $("#subHeader");
    var subHeader = $("#subHeader").blast({ delimiter: "word"});
    var $heroActions = $("#heroActions a");
    var $nav = $("nav");
    var $strike = $(".hero-elements .strike");
    var $monogram = $(".hero-elements .monogram");

	// $("#hero h1").blast({ delimiter: "word" });
// 	tl.staggerFromTo(".blast", 0.15, {autoAlpha:0}, {autoAlpha:1},0.055);

var xd=new TimelineMax()
            .staggerFrom('header',0.5, {opacity:0, width:0, ease: Power1.easeOut}, 0.5)
            .staggerFrom('nav',2, {opacity:0, y:20, ease: Back.easeInOut}, 0.5)
            .staggerFrom($headline,1, {opacity:0, y:20, ease: Back.easeInOut}, 2)
             .staggerTo($monogram,1, {opacity:1, y: -20, ease: Back.easeInOut}, 0.5)
            .staggerFrom($subHeader ,1, {opacity:0, y:20, ease: Back.easeInOut}, 0.5)
            .staggerFrom($heroActions,2, {opacity:0, y:20, ease: Back.easeInOut}, 0.5)
            .staggerFrom('.section-anim',1, {opacity:0, y:20, ease: Back.easeInOut}, 0.5);
            // .staggerFrom($strike,1, {opacity:1, x: 50, ease: Back.easeInOut}, 0.5)
          


		
  // place this within dom ready function
  function showheader() {     


	var words = $("#hero h1").blast({ delimiter: "word", customClass: "word" }),
	    chars = $(".word").blast({ delimiter: "character", customClass: "character" }),
		tl = new TimelineLite(),
	    numChars = chars.length;
	for(var i = 0; i < numChars; i++){
	  //random value used as position parameter
	  tl.from(chars[i], 2, {opacity:0}, Math.random() * 2);
	}
 }

 // use setTimeout() to execute
 setTimeout(showheader, 2000)

// 	$("#hero h1").blast({ delimiter: "letter" });

// 	var tl = new TimelineMax({delay:1, onComplete:completeHandler});

// 	tl.staggerFromTo(".blast", 0.15, {autoAlpha:0}, {autoAlpha:1},0.055);

// 	function completeHandler()
// {
//     $("#hero h1").blast(false);
// }
	// TweenMax.fromTo(".blast", 1, {autoAlpha:0}, {autoAlpha:1});

 //    var xd=new TimelineMax()
 //            .staggerTo('.blast',1, {opacity:1, y:-20, ease: Back.easeInOut}, 0.2)
 //            .staggerTo($strike,3, {opacity:1, x: 20, ease: Back.easeInOut}, 0.5)
 //            .staggerTo($monogram,1, {opacity:1, y: -20, ease: Back.easeInOut}, 0.5)
 //            .staggerTo($strike,1, {opacity:0, ease: Back.easeInOut}, 0.1);

});

// onResize animation
$(window).resize(function() {

	var xd=new TimelineMax()
	            .staggerFrom('header',0.5, {opacity:0, width:0, ease: Power1.easeOut}, 0.5)
	            .staggerFrom('nav',2, {opacity:0, y:20, ease: Back.easeInOut}, 0.5)
	            .staggerFrom($headline,1, {opacity:0, y:20, ease: Back.easeInOut}, 2)
	             .staggerTo($monogram,1, {opacity:1, y: -20, ease: Back.easeInOut}, 0.5)
	            .staggerFrom($subHeader ,1, {opacity:0, y:20, ease: Back.easeInOut}, 0.5)
	            .staggerFrom($heroActions,2, {opacity:0, y:20, ease: Back.easeInOut}, 0.5)
	            .staggerFrom('.section-anim',2, {opacity:0, y:20, ease: Back.easeInOut}, 0.5);
	            // .staggerFrom($strike,1, {opacity:1, x: 50, ease: Back.easeInOut}, 0.5)
	 setTimeout(showheader, 2000)

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