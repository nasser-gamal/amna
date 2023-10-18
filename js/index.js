// // swiper for survey partner
// var swiper = new Swiper('.support-company-swiper', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2000,
//   },
//   speed: 1000,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     500: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//   },
// });

// // Home Counter
// let statsSection = document.querySelector('.stats');
// let nums = document.querySelectorAll('.stats .counter');
// let started = false; // Function Started ? No

// if (statsSection) {
//   window.onscroll = function () {
//     // Stats Increase Number
//     if (window.scrollY >= statsSection.offsetTop - 500) {
//       if (!started) {
//         nums.forEach((num) => startCount(num));
//       }
//       started = true;
//     }
//   };
//   function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//       el.textContent++;
//       if (el.textContent == goal) {
//         clearInterval(count);
//       }
//     }, 2000 / goal);
//   }
// }

const defaultProps = {
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  distance: '30px',
  origin: 'bottom',
  duration: 1000,
  desktop: true,
  mobile: true,
};
ScrollReveal().reveal('.achive-card', {
  ...defaultProps,
  delay: 600,
  scale: 0.9,
  origin: window.innerWidth > 768 ? 'right' : 'bottom',
});
let tilt = document.querySelectorAll('.rounded');
console.log(tilt)
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  'max-glare': 0.3,
});
