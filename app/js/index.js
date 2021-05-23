$(function () {
    $('.intro-top').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $('.partners__items').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    var mixer = mixitup('.products');
});
