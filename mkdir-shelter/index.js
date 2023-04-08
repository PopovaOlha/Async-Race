'use strict'

console.log("Страница(main):\nВерстка страницы валидная(+4);\nЛоготип в хедере состоит из текстовых элементов (+1);\nСтраница содержит ровно один элемент <h1> (+1);\nдобавлен favicon +1;\nВёрстка соответствует макету (+35);\nТребования к css выполнены(+6);\nИнтерактивность элементов выполнена(+12);\nСтраница  Pets:\nВерстка страницы валидная(+4);\nЛоготип в хедере состоит из текстовых элементов (+1);\nСтраница содержит ровно один элемент <h1> (+1);\nдобавлен favicon +1;\nВёрстка соответствует макету (+15);\nТребования к css выполнены(+4);\nИнтерактивность элементов выполнена(+14);")

document.addEventListener("click", showList);

document.addEventListener('click', changeWidth);

const BODY_MENU =  document.querySelector('.menu_body');

function showList(e){
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');    
}
}

function changeWidth(e){
    const el = e.target;
    console.log(el);
    
    if (el.closest('.menu_body') && window.innerWidth === 320) { 
        BODY_MENU.style.width = '250px';
       
    } else {
        BODY_MENU.style.width = '100%';
    }
 }


