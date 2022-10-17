/* window.alert('olaaaa'); */
const menu = document.querySelector('.menuModal')
const btnOpen = document.querySelector('#btn-open')
const btnClose = document.querySelector('#btn-close')

const openMenu = () => {
    menu.style.display != 'none' ? menu.style.display = 'none' : menu.style.display = 'block';
    btnClose.style.scale != '0' ? btnClose.style.scale = '0' : btnClose.style.scale = '1';
};

btnOpen.addEventListener ("click" , openMenu)