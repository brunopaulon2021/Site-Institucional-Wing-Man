/* window.alert('olaaaa'); */
const menu = document.querySelector('.menuModal')
const btnOpen = document.querySelector('#btn-open')
const btnClose = document.querySelector('#btn-close')

const openMenu = () => {

    if (menu.style.display == 'none')
        (menu.style.display = 'block')
        (btnOpen.style.scale = '0')
        (btnClose.style.scale = '3')
        else  
        (menu.style.display = 'none')
        (btnOpen.style.scale = '3')
        (btnClose.style.scale = '0')

};

btnOpen.addEventListener("click", openMenu)