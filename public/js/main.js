/* Template Name: Pazano. - bootsrap 5 eCommerce HTML Template 
   Author: Acavo
   Version: 1.0.0
   Created: Oct 2020
   File Description: Main js file of the template
*/

(function ($) {
  'use strict';
  /*============================================

                Commons Variables
      
    =============================================*/

  var windows = $(window);
  /*============================================

                        Menu
      
    =============================================*/
  jQuery(document).ready(function ($) {
    /*--- checkout toggle function ----*/
    $('.checkout-click1').on('click', function (e) {
      e.preventDefault();
      $('.checkout-login-info').slideToggle(900);
    });

    /*--- checkout toggle function ----*/
    $('.checkout-click3').on('click', function (e) {
      e.preventDefault();
      $('.checkout-login-info3').slideToggle(1000);
    });
    $('.shop-filter-active').on('click', function (e) {
      e.preventDefault();
      $('.product-filter-wrapper').slideToggle();
    });
    $('.related-product-active').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      fade: false,
      loop: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    $('.product-details-images').each(function () {
      var $this = $(this);
      var $thumb = $this.siblings('.product-details-thumbs');
      $this.slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        centerMode: false,
        centerPadding: 0,
        asNavFor: $thumb,
      });
    });
    $('.product-details-thumbs').each(function () {
      var $this = $(this);
      var $details = $this.siblings('.product-details-images');
      $this.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow:
          '<span class="slick-prev"><i class="las la-angle-left"></i></span>',
        nextArrow:
          '<span class="slick-next"><i class="las la-angle-right"></i></span>',
        asNavFor: $details,
        responsive: [
          {
            breakpoint: 1024,
            settings: {},
          },
          {
            breakpoint: 600,
            settings: {},
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    });

    $('.hero-01-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: false,
      nextArrow: false,
      customPaging: function (slider, i) {
        var title = $(slider.$slides[i].innerHTML)
          .find('div[data-title]')
          .data('title');
        return '<a class="pager__item"> ' + title + ' </a>';
      },
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $('.hero-03-slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow:
        '<span class="arrow-prv"><i class="las la-angle-left"></i></span>',
      nextArrow:
        '<span class="arrow-next"><i class="las la-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    $('#googleMap-3').each(function () {
      if ($(this).length) {
        var $this = $(this);
        var $lat = $this.data('lat');
        var $long = $this.data('long');

        function initialize() {
          var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: new google.maps.LatLng($lat, $long),
            styles: [
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#F1F1F1',
                  },
                ],
              },
              {
                featureType: 'transit',
                stylers: [
                  {
                    color: '#F1F1F1',
                  },
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                  {
                    visibility: 'on',
                  },
                  {
                    color: '#fff',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#fff',
                  },
                ],
              },
              {
                featureType: 'road.local',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    visibility: 'on',
                  },
                  {
                    color: '#F1F1F1',
                  },
                  {
                    weight: 1.8,
                  },
                ],
              },
              {
                featureType: 'road.local',
                elementType: 'geometry.stroke',
                stylers: [
                  {
                    color: '#ECECEC',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    visibility: 'on',
                  },
                  {
                    color: '#FF5151',
                  },
                ],
              },
              {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#fff',
                  },
                ],
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#F1F1F1',
                  },
                ],
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#ffffff',
                  },
                ],
              },
              {
                featureType: 'landscape',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    visibility: 'on',
                  },
                  {
                    color: '#F9F9F9',
                  },
                ],
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#B7B7B7',
                  },
                ],
              },
              {
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    visibility: 'on',
                  },
                  {
                    color: '#8b8b8b',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry.stroke',
                stylers: [
                  {
                    color: '#d6d6d6',
                  },
                ],
              },
              {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {},
              {
                featureType: 'poi',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#EBEBEB',
                  },
                ],
              },
            ],
          };
          var map = new google.maps.Map(
            document.getElementById('googleMap-3'),
            mapOptions,
          );
          var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: 'img/icon/map-marker-02.png',
            map: map,
            animation: google.maps.Animation.BOUNCE,
          });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    });
    $('.testimonial-active').owlCarousel({
      loop: true,
      nav: false,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      item: 2,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
    $('.brand-logo-active').owlCarousel({
      loop: true,
      nav: false,
      autoplay: false,
      autoplayTimeout: 5000,
      item: 5,
      margin: 100,
      responsive: {
        0: {
          items: 2,
          margin: 30,
        },
        576: {
          items: 3,
          margin: 50,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1000: {
          items: 5,
        },
      },
    });

    // Google Map For Single Property Map
  });

  var sticky = $('.header-sticky');

  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
      sticky.removeClass('is-sticky');
    } else {
      sticky.addClass('is-sticky');
    }
  });
  /*-- Mobile Menu --*/
  $('#mobile-menu-trigger').on('click', function () {
    $('#offcanvas-mobile-menu').removeClass('inactive').addClass('active');
  });

  $('#offcanvas-menu-close-trigger').on('click', function () {
    console.log('click');
    $('#offcanvas-mobile-menu').removeClass('active').addClass('inactive');
  });
  /*-- Offcanvas Menu --*/
  var $offCanvasNav = $('.offcanvas-navigation'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.submenu2');

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr('class')
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr('href') === '#' || $this.hasClass('menu-expand'))
    ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length) {
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this
          .closest('li')
          .siblings('li')
          .removeClass('active')
          .find('li')
          .removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
  });

  /*============================================

                    Price slider Active 
      
    =============================================*/

  $('#price-range').slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 900],
    slide: function (event, ui) {
      $('#price-amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
    },
  });
  $('#price-amount').val(
    '$' +
      $('#price-range').slider('values', 0) +
      ' - $' +
      $('#price-range').slider('values', 1),
  );

  /*============================================

                Cart Plus Minus Button 
      
    =============================================*/

  var CartPlusMinus = $('.cart-plus-minus');
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $('.qtybutton').on('click', function () {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.text() === '+') {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find('input').val(newVal);
  });

  /*============================================

                 Shipping Form Toggle 
       
     =============================================*/

  $('[data-shipping]').on('click', function () {
    if ($('[data-shipping]:checked').length > 0) {
      $('#shipping-form').slideDown();
    } else {
      $('#shipping-form').slideUp();
    }
  });
  /*============================================

                 Payment Method Select
       
     =============================================*/

  $('[name="payment-method"]').on('click', function () {
    var $value = $(this).attr('value');

    $('.single-method p').slideUp();
    $('[data-method="' + $value + '"]').slideDown();
  });

  /*============================================

                 Nice Select Active
      
    =============================================*/

  $('select').niceSelect();

  /*============================================

                 ScrollUp Active
      
    =============================================*/

  $.scrollUp({
    scrollText: '<i class="las la-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
  });

  /*============================================

                 Magnific Popup
      
    =============================================*/
  $('.popup-video,.video-popup').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false,
  });

  /*============================================

                Magnific Popup Video
      
    =============================================*/

  $('.venobox').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  /*============================================

                    Shop filter active 
      
    =============================================*/

  /*============================================

                    Price slider 
      
    =============================================*/

  var sliderrange = $('#slider-range');
  var amountprice = $('#amount');
  $(function () {
    sliderrange.slider({
      range: true,
      min: 16,
      max: 400,
      values: [0, 300],
      slide: function (event, ui) {
        amountprice.val('$' + ui.values[0] + ' - $' + ui.values[1]);
      },
    });
    amountprice.val(
      '$' +
        sliderrange.slider('values', 0) +
        ' - $' +
        sliderrange.slider('values', 1),
    );
  });
  /*============================================

                    Color active 
      
    =============================================*/

  $('.sidebar-widget-color').on('click', 'a', function (e) {
    e.preventDefault();
    $(this)
      .addClass('active')
      .parent()
      .siblings()
      .children('a')
      .removeClass('active');
  });

  /*============================================

                    Toggle Ativation 
      
    =============================================*/

  function itemToggler() {
    $('.toggle-item-active').slice(0, 16).show();
    $('.item-wrapper')
      .find('.loadmore')
      .on('click', function (e) {
        e.preventDefault();
        $(this)
          .parents('.item-wrapper')
          .find('.toggle-item-active:hidden')
          .slice(0, 4)
          .slideDown();
        if ($('.toggle-item-active:hidden').length == 0) {
          $(this).parent('.toggle-btn').fadeOut('slow');
        }
      });
  }
  itemToggler();

  /*============================================

                    Sidebar Menu
      
    =============================================*/

  /*====== clickable Main Menu 2 active ======*/
  var $clickableMainMenu = $(
      '.clickable-mainmenu-wrap-2, .sidebar-widget-categories',
    ),
    $clickableSubMenu = $clickableMainMenu.find('.sub-menu-3, .sw-sub-menu');
  /*Add Toggle Button in Off Canvas Sub Menu*/
  $clickableSubMenu
    .siblings('a')
    .append(
      '<span class="menu-expand"><i class="las la-angle-down "></i></span>',
    );
  /*Close Off Canvas Sub Menu*/
  $clickableSubMenu.slideUp();
  /*Category Sub Menu Toggle*/
  $clickableMainMenu.on('click', 'li a, li .menu-expand', function (e) {
    var $this = $(this);
    if (
      $this.parent('li').hasClass('sw-sub-wrap, has-sub-menu') ||
      $this.attr('href') === '#' ||
      $this.hasClass('menu-expand')
    ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length) {
        $this
          .parent('li')
          .removeClass('active')
          .children('ul')
          .slideUp()
          .siblings('a')
          .find('.menu-expand i')
          .removeClass('fa fa-angle-up ')
          .addClass('las la-angle-down');
        $this
          .parent('li')
          .siblings('li')
          .removeClass('active')
          .find('ul:visible')
          .slideUp()
          .siblings('a')
          .find('.menu-expand i')
          .removeClass('fa fa-angle-up')
          .addClass('las la-angle-down');
      } else {
        $this
          .parent('li')
          .addClass('active')
          .children('ul')
          .slideDown()
          .siblings('a')
          .find('.menu-expand i')
          .removeClass('las la-angle-down ')
          .addClass('fa fa-angle-up');
        $this
          .parent('li')
          .siblings('li')
          .removeClass('active')
          .find('ul:visible')
          .slideUp()
          .siblings('a')
          .find('.menu-expand i')
          .removeClass('fa fa-angle-up')
          .addClass('las la-angle-down');
      }
    }
  });

  /*============================================

                     Hero Slider
      
    =============================================*/

  $('.hero-01-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: false,
    nextArrow: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i].innerHTML)
        .find('div[data-title]')
        .data('title');
      return '<a class="pager__item"> ' + title + ' </a>';
    },
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.hero-03-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:
      '<span class="arrow-prv"><i class="las la-angle-left"></i></span>',
    nextArrow:
      '<span class="arrow-next"><i class="las la-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /*============================================

           checkout one click toggle function
      
    =============================================*/

  /*============================================

           Instantiate EasyZoom instances
      
    =============================================*/

  var $easyzoom = $('.easyzoom').easyZoom();

  /*============================================
 
                Product Active Slider
      
    =============================================*/

  $('.related-product-active').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    loop: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /*============================================
 
                    Product Slide
      
    =============================================*/

  $('.product-details-images').each(function () {
    var $this = $(this);
    var $thumb = $this.siblings('.product-details-thumbs');
    $this.slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      centerMode: false,
      centerPadding: 0,
      asNavFor: $thumb,
    });
  });
  $('.product-details-thumbs').each(function () {
    var $this = $(this);
    var $details = $this.siblings('.product-details-images');
    $this.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: 0,
      prevArrow:
        '<span class="slick-prev"><i class="las la-angle-left"></i></span>',
      nextArrow:
        '<span class="slick-next"><i class="las la-angle-right"></i></span>',
      asNavFor: $details,
      responsive: [
        {
          breakpoint: 1024,
          settings: {},
        },
        {
          breakpoint: 600,
          settings: {},
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  });

  /*============================================
 
                   countdown activate
      
    =============================================*/

  $('[data-countdown]').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="single-countdown"><span class="single-countdown-time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown-time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown-time">%M</span><span class="single-countdown__text">Minutes</span></div><div class="single-countdown"><span class="single-countdown-time">%S</span><span class="single-countdown__text">Seconds</span></div>',
        ),
      );
    });
  });

  /* Brand logo active 2 */

  /* Testimonial active 3 */
})(jQuery);
