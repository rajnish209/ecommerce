$(function () {
    console.log('Script loaded!!!')

// Slick Carousel
$('.slider-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 300,
    autoScroll: true
  });
});