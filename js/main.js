$(function(){


// Слайдер
  $('.apps__slider').slick({

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>'

  });

  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: false,
    scrollOverflow: true,
    anchors: ['main', 'development', 'choose', 'apps', 'contacts'],
    menu: '#aside__menu-list'
  });




  //Плавно выезжание - заезжание
  // $('.').on('click', function () {
  //   $('.').slideToggle();
  // });



  


// Добавление класса при клике на элемент
  $('.aside__menu-btn').on('click', function () {
    $('.aside__menu').toggleClass('aside__menu--active');
    $('.aside__menu-btn').toggleClass('aside__menu-btn--active');
  })





// загрузка элементов при скролле
// new WOW().init();      
});