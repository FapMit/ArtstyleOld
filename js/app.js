const burger = document.querySelector('.burger')
const navList = document.querySelector('.nav__list')

burger.addEventListener('click', (e) => {
    e.preventDefault()
    if (burger.classList.contains('burger--active')) {
        burger.classList.remove('burger--active')
        navList.classList.remove('nav__list--active')
    }
    else {
        burger.classList.add('burger--active')
        navList.classList.add('nav__list--active')
    }
})