$(document).ready(function() {

  // MOBILE MENU
  $('.hamburger').on('click', function() {
    $('body').addClass('ovw-hidden');
    $('.header__nav').show(100, function() {
      $(this).addClass('show');
    });
  });

  $('.header__nav-close').on('click', function() {
    $('body').removeClass('ovw-hidden');
    $('.header__nav').removeClass('show');
  });

  $('.gallery').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });
});