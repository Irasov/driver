const swiper = new Swiper('.slider-customer', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 32,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-customer__next',
      prevEl: '.slider-customer__prev',
    },
    slidesPerView: 3,
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1231: {
        slidesPerView: 3,
      },
    },
  });
