$('.fade_slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.carousel_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 4000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});