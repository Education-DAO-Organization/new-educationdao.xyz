window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;

    // If the user has scrolled more than 100 pixels, add a fixed positioning to the navbar
    if (scrollPosition > 100) {
      document.querySelector(".header").style.position = "sticky";
      document.querySelector(".header").style.top = "0";
    } else {
      document.querySelector(".header").style.position = "sticky";
      document.querySelector(".header").style.top = "0";
    }
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset;

  // If the user has scrolled more than 0 pixels, add a fixed positioning to the sub-header
  if (scrollPosition > 0) {
    document.querySelector(".sub-header").style.position = "sticky";
    document.querySelector(".sub-header").style.top = "63px";
  } else {
    // If the user has not scrolled more than 0 pixels, revert to the default positioning
    document.querySelector(".sub-header").style.position = "sticky";
    document.querySelector(".sub-header").style.top = "0";
  }
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

;(function($) {
    "use strict";
    $(document).ready(function() {
        $('#access').on('touchstart click', '.skip-link', function(event) {
            $(this).toggleClass('focus');
            $($(this).attr('href')).toggleClass('target');
            event.preventDefault();
        }).find('.skip-link').append('<span>'+$('#menu .active').text()+'</span>');
    });
})(jQuery);