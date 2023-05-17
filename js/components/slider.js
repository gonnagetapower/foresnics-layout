let slider = document.querySelector('.work-slider');

let swiperLib1 = new Swiper(slider, {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
