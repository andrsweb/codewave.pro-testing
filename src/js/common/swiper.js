const initCatalogSlider = () => {
    new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            675: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-slide-button-next',
            prevEl: '.swiper-slide-button-prev',
        },
    });
}
initCatalogSlider();