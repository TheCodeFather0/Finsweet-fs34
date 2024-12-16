const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});
