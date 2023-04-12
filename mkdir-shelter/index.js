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

CAROUSEL.addEventListener('animationend', showCarousel);

  function showCarousel(animationEvent) { 
    let changeItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove('transition-left');
        const mixRand=(a,b)=>Math.random()-0.5;
        let arrImg = Array.from(document.getElementsByClassName('pets_img')), arrImgSrcMix=arrImg.map(e=>e.src).sort(mixRand);
                arrImg.map((e,i)=>e.src=arrImgSrcMix[i]);
        } else {
            const mixRand=(a,b)=>Math.random()-0.5;
            let arrImg = Array.from(document.getElementsByClassName('pets_img')), arrImgSrcMix=arrImg.map(e=>e.src).sort(mixRand);
                    arrImg.map((e,i)=>e.src=arrImgSrcMix[i]);
        CAROUSEL.classList.remove('transition-right');
    }
    LEFT_ARROW.addEventListener('click', moveLeft);
    RIGHT_ARROW.addEventListener('click', moveRight);
};

const learnMoreButtons = Array.from(document.querySelectorAll('.learn-more_action'));
learnMoreButtons.forEach(button => {
   button.addEventListener('click', (function() {
    const w = document.querySelector('.wrapper_pets');
   w.style.display = "block";
   const popUp = document.querySelector('.modal_popup');
   popUp.style.visibility = "visible";
   const closeButton = document.querySelector('.modal_button');
   closeButton.addEventListener('click', () => {
    popUp.style.visibility = "hidden";
    w.style.display = "none";
   });

   }));
});

function showList(e){
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');      
}
};

function changeWidth(e){
    const el = e.target;
    document.addEventListener('click', changeWidth);
    if (el.closest('.menu_body') && window.innerWidth <= 768 && ICON_MENU.classList.toggle('active')) { 
        ICON_MENU.classList.toggle('change_icon');
        BODY_MENU.style.width = '80%';
        BODY_MENU.style.transition = '1s';
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        BODY_MENU.style.width = '100%';
        document.querySelector('body').style.overflowY = 'auto';
        ICON_MENU.classList.toggle('change_icon');
    }
 };




