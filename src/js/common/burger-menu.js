const setBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger__menu')
    const headerList = document.querySelector('.header__list')

    burgerMenu.addEventListener('click', () => {
        const toggleBurgerMenu = () => {
            if (headerList.classList.contains('burger__menu_open')) {
                headerList.classList.remove('burger__menu_open')
                headerList.style.display = 'none'
            } else {
                headerList.classList.add('burger__menu_open')
                headerList.style.display = 'flex'
            }
        }
        toggleBurgerMenu()
    })
}

setBurgerMenu()
