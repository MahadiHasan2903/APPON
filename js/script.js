$(".banner-slider").slick({
    arrows: false,
    dots: true,
    fade: true,
})
$(".img-slider").slick({
    slidesToShow: 5,
    arrows: false,
    dots: true,
})
$(".text-slider").slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: ".testi-img-slider",
})
$(".testi-img-slider").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".text-slider",

})
$('.venobox').venobox();