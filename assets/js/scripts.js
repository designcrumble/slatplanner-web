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
