"use strict"

document.addEventListener("click", showList);

document.addEventListener('click', changeWidth);

const ICON_MENU = document.querySelector('.pets-menu');
ICON_MENU.classList.toggle('active');
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
    
    if (el.closest('.menu_body') && window.innerWidth <= 768 && ICON_MENU.classList.toggle('active')) { 
        BODY_MENU.style.width = '80%';
        document.querySelector('body').style.overflowY = 'hidden';
       
    } else {
        BODY_MENU.style.width = '100%';
        document.querySelector('body').style.overflowY = 'auto';
    }
 }
