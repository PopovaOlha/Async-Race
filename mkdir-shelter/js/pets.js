"use strict"

document.addEventListener("click", showList);
document.addEventListener('click', changeWidth);
const ICON_MENU = document.querySelector('.pets-menu');
ICON_MENU.classList.toggle('active');
const BODY_MENU =  document.querySelector('.menu_body');
const RIGHT_ONCE_BUTTON = document.querySelector('#four-paginator');
const LEFT_ONCE_BUTTON = document.querySelector('#two-paginator');
const PETS_COLUMN = document.querySelector('.pets_column');
const PAGES_NUMBER = document.querySelector('#three-paginator');

LEFT_ONCE_BUTTON.addEventListener('click', buttonToTheLeft);
RIGHT_ONCE_BUTTON.addEventListener('click', buttonToTheRight);

function buttonToTheLeft() {
           mixTextCard();
           mixImageCard();
           let count = 0;
           count += 1;
           PAGES_NUMBER.innerText -= +count;
}     

function buttonToTheRight() {
    mixTextCard();
    mixImageCard();
}
function mixImageCard() {
    const mixRand=(a,b)=>Math.random()-0.5;
    let arrImg = Array.from(document.getElementsByClassName('pets_img')), arrImgSrcMix=arrImg.map(e=>e.src).sort(mixRand);
            arrImg.map((e,i)=>e.src=arrImgSrcMix[i]);
}
const button = document.getElementById("four-paginator");
let count = 0;
button.addEventListener('click', () => {
    count += 1;
    PAGES_NUMBER.innerHTML =  + count;
})



 function mixTextCard(){
    const mixRand=(a,b)=>Math.random()-0.5;
    let arrImg = Array.from(document.getElementsByClassName('our-friends_name')), arrImgSrcMix=arrImg.map(e=>e.innerText).sort(mixRand);
            arrImg.map((e,i)=>e.innerText=arrImgSrcMix[i]);
 }       
       

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
        ICON_MENU.classList.toggle('change_icon');
        BODY_MENU.style.transition = '1s';
        BODY_MENU.style.width = '80%';
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        BODY_MENU.style.width = '100%';
        document.querySelector('body').style.overflowY = 'auto';
        ICON_MENU.classList.toggle('change_icon');
    }
 }

