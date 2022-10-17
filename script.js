/* window.alert('olaaaa'); */
const menu = document.querySelector('.menuModal')
const btnOpen = document.querySelector('#btn-open')
const btnClose = document.querySelector('#btn-close')

const openMenu = () => {

    if (menu.style.display == 'none')
        (menu.style.display = 'block')
        (btnOpen.style.scale = '0')
        else  
        (menu.style.display = 'none')

};

btnOpen.addEventListener("click", openMenu)