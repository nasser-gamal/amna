// swiper for survey partner
var swiper = new Swiper('.support-company-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  },
});