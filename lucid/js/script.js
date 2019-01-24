// тень шапки
$(window).scroll(function() {
  $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});

// меню-бургер
$('.menu__icon').on('click', function(){
	$('.list').toggleClass(' active');
});

// при клике на li закрывается меню

$(window).scroll(function(){
	if ($(this).scrollTop() < 767) {
		$('.nav__link').on('click', function(){
			$('.list').removeClass(' active');
		});
	}
});

// паралакс
$(window).scroll(function() {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.bg').css('top', - (scrolled*0.1) + 'px');
  $('.banner__content').css('top', 50 + (scrolled*0.1) + '%');
	if ($(window).width() < 768) {
		$('.banner__content').css('opacity', 1);
	} else {
		$('.banner__content').css('opacity', 1 - (scrolled*0.01)/5);
	}
}

// slick-slider

$(document).ready(function(){
  $('.carousel').slick({
		arrows: false,
    dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		fade: true,
		// adaptiveHeight: true,
		cssEase: 'linear'
  });
});







