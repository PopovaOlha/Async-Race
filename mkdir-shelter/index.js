

const ICON_MENU = document.querySelector('.icon-menu');
ICON_MENU.classList.toggle('active');
const BODY_MENU =  document.querySelector('.menu_body');
const LEFT_ARROW = document.querySelector('.first-arrow');
const RIGHT_ARROW = document.querySelector('.second-arrow');
const CAROUSEL = document.querySelector('#our-friends_body');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');


document.addEventListener("click", showList);
document.addEventListener('click', changeWidth);
LEFT_ARROW.addEventListener('click', moveLeft);
RIGHT_ARROW.addEventListener('click', moveRight);

const cartTemplate = Array.from(document.querySelectorAll('.our-friends_cart'));
cartTemplate.forEach((cart,value,index) => {
    cart 
})
    


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
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove('transition-left');
        changedItem = ITEM_RIGHT;
        document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
    } else {
        CAROUSEL.classList.remove('transition-right');
         changedItem = ITEM_LEFT;
         document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;

    }
   
    LEFT_ARROW.addEventListener('click', moveLeft);
    RIGHT_ARROW.addEventListener('click', moveRight);
};


 

function showList(e){
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');    
}
};

function changeWidth(e){
    const el = e.target;
    
    if (el.closest('.menu_body') && window.innerWidth <= 768 && ICON_MENU.classList.toggle('active')) { 
        BODY_MENU.style.width = '80%';
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        BODY_MENU.style.width = '100%';
        document.querySelector('body').style.overflowY = 'auto';
    }
 };




