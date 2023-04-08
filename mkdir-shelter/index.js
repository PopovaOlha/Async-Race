'use strict'

console.log("Страница(main):\nВерстка страницы валидная(+4);\nЛоготип в хедере состоит из текстовых элементов (+1);\nСтраница содержит ровно один элемент <h1> (+1);\nдобавлен favicon +1;\nВёрстка соответствует макету (+35);\nТребования к css выполнены(+6);\nИнтерактивность элементов выполнена(+12);\nСтраница  Pets:\nВерстка страницы валидная(+4);\nЛоготип в хедере состоит из текстовых элементов (+1);\nСтраница содержит ровно один элемент <h1> (+1);\nдобавлен favicon +1;\nВёрстка соответствует макету (+15);\nТребования к css выполнены(+4);\nИнтерактивность элементов выполнена(+14);")

document.addEventListener("click", showList);

document.addEventListener('click', changeWidth);
const ICON_MENU = document.querySelector('.icon-menu');
ICON_MENU.classList.toggle('active');
const BODY_MENU =  document.querySelector('.menu_body');
const LEFT_ARROW = document.querySelector('.first-arrow');
const RIGHT_ARROW = document.querySelector('.second-arrow');

function showList(e){
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');    
}
}

function changeWidth(e){
    const el = e.target;
    
    if (el.closest('.menu_body') && window.innerWidth <= 768 && ICON_MENU.classList.toggle('active')) { 
        BODY_MENU.style.width = '80%';
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        BODY_MENU.style.width = '100%';
        document.querySelector('body').style.overflowY = 'auto';
    }
 }

 


