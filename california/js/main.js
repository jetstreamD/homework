

/// Header hamburger
const body = document.querySelector('body')
const hamburger = document.querySelector('.hamburger')
const offScreenMenu = document.querySelector('.offscreen-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
    body.classList.toggle('no-scroll')
})

// const hamburgerLink = document.querySelectorAll('.header__link')
// hamburgerLink.forEach((hamLink) => {
//     hamLink.addEventListener('click', () => {
//         if (window.innerWidth <= 1000) {
//             hamburger.classList.toggle('active')
//             offScreenMenu.classList.toggle('active')
//         }
//     })
// })

//// Home swiper carousel

new Swiper('.home__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoHeight: true,
    freeMode: true,
    initialSlide: 0,
    speed: 800,
    effect: 'fade',
    // effect: 'slide',

    pagination: {
        el: '.home__pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.home__prev',
        nextEl: '.home__next',
    },

    fadeEffect: {
        crossFade: true,
    },

    autoplay: {
        delay: 7000,

        stopOnLastSlide: false,

        disableOnInteraction: true,
    },

    hashNavigation: {

        watchState: true,

    },

    keyboard: {
        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,
    },

    // mousewheel: {

    //     sensitivity: 10,

    //     eventsTarget: '.home__swiper',

    // },

});

new Swiper('.ideas__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    speed: 800,
    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },

    autoplay: {
        delay: 5000,

        stopOnLastSlide: false,

        disableOnInteraction: false,
    },
});