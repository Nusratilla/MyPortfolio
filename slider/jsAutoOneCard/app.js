var swiper = new Swiper(".horizontal-card-big", {
  lazy: true,
  spaceBetween: 1,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
