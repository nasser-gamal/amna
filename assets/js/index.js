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
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});



// Home Counter 
let statsSection = document.querySelector('.stats');
let nums = document.querySelectorAll('.stats .counter');
let started = false; // Function Started ? No

window.onscroll = function () {
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


