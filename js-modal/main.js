const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const modalWindow = document.querySelector('.modal')
const blackout = document.querySelector('.blackout')

openBtn.addEventListener('click', () => {
    modalWindow.style.visibility = 'visible'
    modalWindow.style.opacity = '1'
    blackout.style.visibility = 'visible'
})

closeBtn.addEventListener('click', () => {
    modalWindow.style.visibility = 'hidden'
    modalWindow.style.opacity = '0'
    blackout.style.visibility = 'hidden'
})

window.addEventListener('click', event => {
    if (event.target === blackout) {
        modalWindow.style.visibility = 'hidden'
        modalWindow.style.opacity = '0'
        blackout.style.visibility = 'hidden'
    }
})



