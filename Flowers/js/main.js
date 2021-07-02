const FlowerSlider = new Swiper(".flowers-slider", {
  // Параметры салйдера
  loop: true,
  slidesPerView: 6,

  // Подключаем стрекли
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // настройки адаптивной версии
  breakpoints: {
    // если брайзер >= 320px
    320: {
      slidesPerView: 2,
    },
    // если браузер >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
    },
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Параметры салйдера
  loop: true,
  slidesPerView: 1,

  // Подключаем стрекли
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
