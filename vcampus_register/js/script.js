// Shrink the lower navbar when scroll down
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

// Stick the navbar at the top while scrolling
$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 280) {
      $('#navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#navbar').removeClass('navbar-fixed');
    }
  });
});