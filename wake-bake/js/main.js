
/////////////////////////////////////////////////////////////
////////////////////// H e a d e r /////////////////////////
/////////////////////// HAMBURGER ////////////////////////

const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.header__nav')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
})

//////////////////////////////////////////////////////////
/////////////////////// A b o u t ////////////////////////
///////////////////////   MODAL   ////////////////////////

const modalWin = document.querySelector('.modal')
const openModal = document.querySelector('.about__img-btn')
const closeModal = document.querySelector('.modal__cancel')
const closeModalOutside = document.querySelector('.modal__blackout')
const modalArray = [openModal, closeModal, closeModalOutside]
modalArray.forEach((element => {
    element.addEventListener('click', () => {
        modalWin.classList.toggle('active')
        closeModalOutside.classList.remove('active')
    })
}))
closeModalOutside.addEventListener('click', () => {
    closeModalOutside.classList.toggle('active')
})

////////////////////////////////////////////////////////////////
/////////////////////// P r o g r a m ////////////////////////// 
///////////////////////     TABS      //////////////////////////

const tabControls = document.querySelector('.tab__controls')
tabControls.addEventListener('click', tabToggle)

function tabToggle(event) {
    const tabControl = event.target.closest('.tab__controls-link')
    if (!tabControl) return
    event.preventDefault()
    if (tabControl.classList.contains('tab__controls-link--active')) return

    const tabContentID = tabControl.getAttribute('href')

    document.querySelector('.tab__content--active').classList.remove('tab__content--active')
    document.querySelector('.tab__controls-link--active').classList.remove('tab__controls-link--active')
    document.querySelector(tabContentID).classList.add('tab__content--active')
    tabControl.classList.add('tab__controls-link--active')

}

///////////////////////   ACCORDIONS  ///////////////////////////

const accordions = document.querySelectorAll('.accordion')

accordions.forEach(element => {
    element.addEventListener('click', (event) => {

        const accordionControl = event.target.closest('.accordion__control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling

        accordions.forEach(accordion => {
            const content = accordion.querySelector('.accordion__content');
            const anyAccordion = accordion;
            if (anyAccordion !== accordionItem) {
                anyAccordion.classList.remove('accordion__item--active');
                content.style.maxHeight = null;
            }
        });

        accordionItem.classList.toggle('accordion__item--active')

        if (accordionItem.classList.contains('accordion__item--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = null
        }
    })
})

////////////////////////////////////////////////////////////////
/////////////////////////G a l l e r y//////////////////////////
///////////////////////     SLIDER      ////////////////////////

const swiper = new Swiper('.gallery__slider', {
    spaceBetween: 10,
    slidesPerView: 1.5,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    breakpoints: {
        321: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },

        601: {
            slidesPerView: 2,
        },

        801: {
            slidesPerView: 3,
            spaceBetween: 16,
        },

        1101: {
            slidesPerView: 4,
            spaceBetween: 32,
        }
    }
});

////////////////////////////////////////////////////////////////
/////////////////////T e s t i m o n i a l s///////////////////
///////////////////////     SLIDER      //////////////////////

new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        
        801: {
            slidesPerView: 1.5,
        },

        801: {
            slidesPerView: 1.5,
        },

        1201: {
            slidesPerView: 2.1,
        }
    }
});


////////////////////////////////////////////////////////////////
/////////////////////     C o n t a c t     ///////////////////
///////////////////////     INPUT MASK       /////////////////

const telInputs = document.querySelectorAll('input[type="tel"');
const im = new Inputmask('+7 (999) 999 99 99');
im.mask(telInputs)





















