$(function () {
   $('.slider__box').slick({
      prevArrow: '<img class=" arrow arrow-left" src="images/arrow-left.svg" alt="arrow">',
      nextArrow: '<img class=" arrow arrow-right" src="images/arrow-right.svg" alt="arrow">',
      responsive: [
         {
            breakpoint: 481,
            settings: {
               arrows: false
            }
         },
      ]

   });
   $('.menu__burger').on('click', function () {
      $('.menu__list').toggleClass('active');
   });
});