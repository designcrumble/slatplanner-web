
function showSnackbar(value) {

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    x.innerHTML = value;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

$(document).ready(function () {

	// Scroll Reveal
	window.sr = ScrollReveal();

	function divreveal() {
	  sr.reveal('div', { container: sections, duration: 2000, scale: 1, distance: '30px' });
	  // sr.reveal('div', { container: footer, duration: 2000, scale: 1, distance: '30px' });
	  // ds.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
	}
			sr.reveal('section div', {duration: 1000, scale: 1, distance: '30px', viewFactor: 0.05, });

});


$(window).load(function () {

 	$("body").addClass('all-loaded');

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
	            .staggerFrom('header',0.35, {opacity:0, width:0, ease: Power1.easeOut}, 0.1)
	            .staggerFrom('#hero',0.35, {opacity:0, height:0, ease: Power1.easeOut}, 0.1)
	            .staggerFrom('nav',0.5, {opacity:0, y:20, ease: Back.easeInOut}, 0.1)
	            .staggerFrom($headline,1, {opacity:0, y:20, ease: Back.easeInOut}, 0.3)
	             .staggerTo($monogram,1, {opacity:1, y: -20, ease: Back.easeInOut}, 0.3)
	            .staggerFrom($subHeader ,0.75, {opacity:0, y:20, ease: Back.easeInOut}, 0.3)
	            .staggerFrom($heroActions,0.5, {opacity:0, y:20, ease: Back.easeInOut}, 0.3);
	            // .staggerFrom($strike,1, {opacity:1, x: 50, ease: Back.easeInOut}, 0.5)
	          
	  // place this within dom ready function
	  function showheader() {     


		var words = $("#hero h1").blast({ delimiter: "word", customClass: "word" }),
		    chars = $(".word").blast({ delimiter: "character", customClass: "character" }),
			tl = new TimelineLite(),
		    numChars = chars.length;
		for(var i = 0; i < numChars; i++){
		  //random value used as position parameter
		  tl.from(chars[i], 5, {opacity:0}, Math.random() * 2);
		}
	 }

	 // use setTimeout() to execute
	 setTimeout(showheader, 2000)

});

// onResize animation
$(window).resize(function() {

});




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