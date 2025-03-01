// /hamburger
////
const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.burger__nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
})