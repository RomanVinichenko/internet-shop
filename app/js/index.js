$(function () {
    $('.intro-top').slick({
        dots: true,
        arrows: false,
    });

    $('.partners-items').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 3,
    });

    var mixer = mixitup('.products');
});
