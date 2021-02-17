$(document).ready(function () {
    //Функия для Gulp, и проверки на webp
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });


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

$('#burger_menu').click(function () {
    $(this).toggleClass('active_burger')
    $('#mobile_header_nav').toggleClass('active_menu')
});


});



