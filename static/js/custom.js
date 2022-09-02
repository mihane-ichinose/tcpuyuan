(function($) {
  
  "use strict";

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });

  // Responsive Menu
  var $offcanvasNav = $("#offcanvasNav a");
  $offcanvasNav.on("click", function () {
    var link = $(this);
    var closestUl = link.closest("ul");
    var activeLinks = closestUl.find(".active");
    var closestLi = link.closest("li");
    var linkStatus = closestLi.hasClass("active");
    var count = 0;

    closestUl.find("ul").slideUp(function () {
      if (++count == closestUl.find("ul").length)
        activeLinks.removeClass("active");
    });

    if (!linkStatus) {
      closestLi.children("ul").slideDown();
      closestLi.addClass("active");
    }
  });

  // Swipper JS

  // Home Slider
  var swiper = new Swiper('.home-slider-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.home-slider-container .swiper-btn-next',
      prevEl: '.home-slider-container .swiper-btn-prev',
    },
  });

  // Brand Slider
  var swiper = new Swiper('.brand-logo-slider-container', {
    slidesPerView : 5,
    loop: true,
    speed: 1000,
    spaceBetween : 100,
    autoplay: false,
    breakpoints: {
      1200:{
          slidesPerView : 5
      },

      992:{
          slidesPerView : 4,
          spaceBetween : 30
      },

      768:{
          slidesPerView : 3,
          spaceBetween : 30

      },

      576:{
          slidesPerView : 3,
          spaceBetween : 30
      },

      380:{
          slidesPerView : 2,
          spaceBetween : 30
      },

      0:{
          slidesPerView : 2,
          spaceBetween : 30
      }
    }
  });

  // Testimonial Trends Slider
  var swiper = new Swiper('.testimonial-slider-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween : 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  // Testimonial Slider Two
  var swiper = new Swiper('.testimonial-slider2-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween : 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  var swiper = new Swiper('.service-slider-container', {
    slidesPerView : 3,
    speed: 1000,
    loop: true,
    spaceBetween : 30,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1200:{
          slidesPerView : 3
      },

      991:{
          slidesPerView : 2
      },

      767:{
          slidesPerView : 2

      },

      560:{
          slidesPerView : 2
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  var swiper = new Swiper('.blog-slider-container', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200:{
        slidesPerView : 3,
      },

      992:{
        slidesPerView : 2,
        centeredSlides: false
      },

      768:{
        slidesPerView : 2,
        centeredSlides: false
      },

      576:{
        slidesPerView : 1,
        centeredSlides: false
      },

      0:{
        slidesPerView : 1,
        centeredSlides: false
      }
    }
  });
  $(".blog-slider-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
    (this).swiper.autoplay.start();
  });

  var swiper = new Swiper('.team-slider-container', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200:{
        slidesPerView : 3
      },

      992:{
        slidesPerView : 3
      },

      768:{
        slidesPerView : 3

      },

      576:{
        slidesPerView : 1,
        centeredSlides: false
      },

      0:{
        slidesPerView : 1
      }
    }
  });

  var blogRelatedSlider = new Swiper('.related-post-slider-container', {
    slidesPerView : 3,
    slidesPerGroup : 1,
    speed: 1000,
    loop: true,
    spaceBetween : 30,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200:{
          slidesPerView : 3,
          spaceBetween : 60
      },

      992:{
          slidesPerView : 3,
          spaceBetween : 30
      },

      768:{
          slidesPerView : 2

      },

      576:{
          slidesPerView : 2
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  var swiper = new Swiper('.gallery-slider-container', {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Fancybox Js
  $('.lightbox-image').fancybox();
  
  // Isotope and data filter
  function isotopePortfolio() {
    var $grid = $('.masonry-grid').isotope({
      itemSelector: '.masonry-item',
      masonry: {
        columnWidth: 1
      }
    })
    // Isotope Masonry
    var $gridMasonry = $('.masonry-style').isotope()
    // Isotope filter Menu
    $('.portfolio-filter-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $gridMasonry.isotope({ filter: filterValue });
      var filterMenuactive = $(".portfolio-filter-menu button");
      filterMenuactive.removeClass('active');
      $(this).addClass('active');
    });
  }

  // Countdown JS
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear() + 1;
  var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

  $('.countdown-timer').countdown({
    date: '1/2/2022 23:59:59', // TODO Date format: 07/27/2017 17:00:00
    offset: +2, // TODO Your Timezone Offset
    day: 'Day',
    days: 'Days',
    hideOnComplete: true
  }, function (container) {
    //alert('Done!');
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function(e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
    }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert alert-danger');
        $(formMessages).addClass('alert alert-success fade show');

        // Set the message text.
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(response);

        // Clear the form.
        $('#contact-form input,#contact-form textarea').val('');
    }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert alert-success');
        $(formMessages).addClass('alert alert-danger fade show');

        // Set the message text.
        if (data.responseText === '') {
            formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
            formMessages.append(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        }
    });
  });

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 180) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }
  });

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  varWindow.on('load', function() {
    isotopePortfolio();
  });
  

})(window.jQuery);