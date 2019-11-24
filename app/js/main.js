window.onscroll = function showHeader () {
	var header = document.querySelector('.header_top');

	if(window.pageYOffset > 75) {
		header.classList.add('header_top_fixed');
	} else {
		header.classList.remove('header_top_fixed');
	}
}

$(document).ready(function() {
  $(".header_top_menu_link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });
});

$(document).ready(function() {
  $(".header_mobile_menu_link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });
});

$('.burger').click(function() {
	$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('second');
	$('.burger span:nth-child(3)').toggleClass('third');
	$('.burger span:nth-child(4)').toggleClass('fourth');
});

$('.burger').click(function() {
	$('.header_mobile').slideToggle(600);

		if(window.pageYOffset < 75) {
		$('.header_top').toggleClass('header_mobile_fixed');
	} else {
		$('.header_top').remove('header_mobile_fixed');
	}

	//$('.header_top').toggleClass('header_mobile_fixed');
});

$('.header_mobile_menu_link').click(function(event) {
	$('.header_mobile').slideToggle(600);
		$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('second');
	$('.burger span:nth-child(3)').toggleClass('third');
	$('.burger span:nth-child(4)').toggleClass('fourth');
});