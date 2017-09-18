// // Shrink the lower navbar when scroll down
// $(window).scroll(function() {
//   if ($(document).scrollTop() > 60) {
//     $('nav').addClass('shrink');
//   } else {
//     $('nav').removeClass('shrink');
//   }
// });
$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 55) {
      $('#header-lower').addClass('header-fixed');
    }
    if ($(window).scrollTop() < 56) {
      $('#header-lower').removeClass('header-fixed');
    }
  });
});



$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 55) {
      $('#header-lower').addClass('navbar-shrink').removeClass('navbar-normal');
    }
    if ($(window).scrollTop() < 56) {
      $('#header-lower').removeClass('navbar-shrink').addClass('navbar-normal');
    }
  });
});