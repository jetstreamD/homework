
/////////////////////// HAMBURGER ////////////////////////
const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.header__nav')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
})

/////////////////////// MODAL WINDOW /////////////////////

const modalWin = document.querySelector('.modal')
const openModal = document.querySelector('.about__img-btn')
const closeModal = document.querySelector('.modal__cancel')
const closeModalOutside = document.querySelector('.modal__blackout')
const modalArray = [openModal, closeModal, closeModalOutside]
modalArray.forEach((element => {
    element.addEventListener('click', () => {
        modalWin.classList.toggle('active')
    })
}))


















