$(document).ready(function(){
	$('.handle').on('click', function(){
		$('nav ul').toggleClass('showing');
	});
	$(".showing a").mPageScroll2id();
	$(".footer_item ul li a").mPageScroll2id();
	$(".top").mPageScroll2id();
	$(".item").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay:300,
		mainClass:'mfp-fade'
	});
	$('.library').slick({
		slidesToShow: 5,
		infinite : false,
		responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });
});
$('.partners').slick({
  slidesToShow: 4,
  infinite: false,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3
      }
    },
     {
      breakpoint: 820,
      settings: {
        slidesToShow: 2
      }
    },
      {
      breakpoint: 545,
      settings: {
        slidesToShow: 1
      }
    }
    ]
});