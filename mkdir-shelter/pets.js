"use strict"

document.addEventListener("click", showList);

function showList(e){
    const targetItem = e.target;

    if (targetItem.closest('.pets-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}