"use strict"

document.addEventListener("click", showList);

document.addEventListener('click', changeWidth);

const BODY_MENU =  document.querySelector('.menu_body');

function showList(e){
    const targetItem = e.target;

    if (targetItem.closest('.pets-menu')) {
        document.documentElement.classList.toggle('menu-open');    
}
}

function changeWidth(e){
    const el = e.target;
    console.log(el);
    
    if (el.closest('.menu_body') && window.innerWidth >= 320 && window.innerWidth <= 768 ) { 
        BODY_MENU.style.width = '80%';
       
    } else {
        BODY_MENU.style.width = '100%';
    }
 }
