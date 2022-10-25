const menu = document.querySelector('.menuModal')
const btnOpen = document.querySelector('#btn-open')
const btnClose = document.querySelector('#btn-close')

const openMenu = () => 
{
            if (menu.style.display == 'none')
                
            {
                menu.style.display = 'block'
                
                btnOpen.style.scale = '0'
                btnClose.style.scale = '3'
            }

            else (menu.style.display = 'none')
}

const closeMenu = () => 
{
            if (btnClose.style.scale = '3')    
            
            {
                btnClose.style.scale = '0'
                btnOpen.style.scale = '3'
            }
            if  (menu.style.display = 'block')

            {
                    menu.style.display = 'none'
            }

}


btnOpen.addEventListener("click", openMenu)
btnClose.addEventListener("click", closeMenu)