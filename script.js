/* window.alert('olaaaa'); */
const menu = document.querySelector('.menuModal')
const btn = document.querySelector('#btn-modal')


function openMenu () {

    if (menu.style.display == 'none')
       (menu.style.display = 'block')

    else (menu.style.display = 'none')
       
}

btn.addEventListener ("click" , openMenu)