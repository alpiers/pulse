$(document).ready(function(){
    $('.carousel__inner').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false, 
                    autoplay: true,
                    adaptiveHeight: false
                }
            }
        ]
    });
  });