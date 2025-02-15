
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

        accordionItem.classList.toggle('accordion__item--active')

        if (accordionItem.classList.contains('accordion__item--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = null
        }
        /////////////////////////
        // const accordionContents = document.querySelectorAll('.accordion__content')
        // accordionContents.forEach(event => {
        //     if (event.currentTarget !== accordionContent) {
        //         accordionItem.classList.remove('accordion__item--active')
        //         accordionContent.style.maxHeight = '0'
        //     } else {
        //         accordionItem.classList.add('accordion__item--active')
        //         accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        //     }
        // })
    })
})























