import pets from './info.js';

const ICON_MENU = document.querySelector('.icon-menu');
ICON_MENU.classList.toggle('active');
const BODY_MENU =  document.querySelector('.menu_body');
const LEFT_ARROW = document.querySelector('.first-arrow');
const RIGHT_ARROW = document.querySelector('.second-arrow');
const CAROUSEL = document.querySelector('#our-friends_body');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');
const CARD = Array.from(document.querySelectorAll('.our-friends_cart'));  


document.addEventListener("click", showList);
document.addEventListener('click', changeWidth);
LEFT_ARROW.addEventListener('click', moveLeft);
RIGHT_ARROW.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', showCarousel);

function moveLeft() {
    CAROUSEL.classList.add("transition-left");
    LEFT_ARROW.removeEventListener('click', moveLeft);
    RIGHT_ARROW.removeEventListener('click', moveRight );
};
   
function moveRight() {
    CAROUSEL.classList.add("transition-right");
    RIGHT_ARROW.removeEventListener('click', moveRight );
    LEFT_ARROW.removeEventListener('click', moveLeft);
    
};

  function showCarousel(animationEvent) { 
    let changeItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove('transition-left');
        const mixRand=(a,b)=>Math.random() * 9;
        let arrImg = Array.from(document.getElementsByClassName('our-friends_cart')), arrImgSrcMix=arrImg.map(e=>e).sort(mixRand);
                arrImg.map((e,i)=>e=arrImgSrcMix[i]);
        } else {
            const mixRand=(a,b)=>Math.random() * 9;
            let arrImg = Array.from(document.getElementsByClassName('our-friends_cart')), arrImgSrcMix=arrImg.map(e=>e).sort(mixRand);
                    arrImg.map((e,i)=>e=arrImgSrcMix[i]);
        CAROUSEL.classList.remove('transition-right');
    }
    LEFT_ARROW.addEventListener('click', moveLeft);
    RIGHT_ARROW.addEventListener('click', moveRight);
};

    /*const myModal = $.modal();
    console.log(myModal.close());*/
 console.log($.modal());

function showList(e){
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');      
}
};

function changeWidth(e){
    const el = e.target;
    ICON_MENU.classList.toggle('change_icon');
    document.addEventListener('click', changeWidth);
    if (el.closest('.menu_body') && window.innerWidth <= 768 && ICON_MENU.classList.contains('change_icon')) { 
        BODY_MENU.style.width = '80%';
        BODY_MENU.style.transition = '1s';
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        BODY_MENU.style.width = '100%';
        document.querySelector('body').style.overflowY = 'auto';
    }
 };

