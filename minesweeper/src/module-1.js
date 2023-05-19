export default 'module-1';
import stopwatchUrl from "./images/stopwatch.png";
import flagUrl from './images/flag_ok.png';
import bombUrl from './images/Bomb-PNG-Free-Download.png';

const hour = document.createElement('span');
hour.setAttribute('id','hours');
const minute = document.createElement('span');
minute.setAttribute('id','minutes');
const second = document.createElement('span');
second.setAttribute('id', 'seconds');

const WIDTH = 10;
const HEIGHT = 10;
let BOMB_AMOUNT = 10;
let FLAGS = 0;
const SQUARES = [];
let IS_GAME_OVER = false;
let SECONDS = 0;
let INTERVALID = null;


document.addEventListener('DOMContentLoaded', () => { 
    startTimer()
const section = createElements('section', 'wrapper');
const container = createElements('div', 'container');
const bomb = createElements('img','images');
bomb.src = bombUrl;
const watch = createElements('img', 'watch');
watch.src = stopwatchUrl;
const header = createElements('h1','header');
const grid = createElements('div', 'grid');
const p = createElements('p', 'paragraph');



 header.appendChild(bomb)
 section.append(container, grid);
 container.append(watch, p);
 p.append(hour,minute,second);
 document.body.append(header, section);
 header.innerHTML = 'Welcome to minesweeper game 💥';
 hour.innerHTML = '00:';
 minute.innerHTML = '00:';
 second.innerHTML = '00';

 function createElements( tagName, className) {
   const element =  document.createElement(tagName);
   element.classList.add(className);
   return element;
 }
 
 const createBoard = function() {
    const bombsArray = Array(BOMB_AMOUNT).fill('bomb');
    const emptyArray = Array(WIDTH*HEIGHT - BOMB_AMOUNT).fill('valid');
    const gameAray = emptyArray.concat(bombsArray);
    const shuffledArray = gameAray.sort(() => Math.random() -0.5);

    
    for (let i = 0; i < WIDTH*HEIGHT; i++) {
        
        const square = document.createElement('div');
        square.setAttribute('id', i);
        square.classList.add(shuffledArray[i]);
        grid.append(square);
        SQUARES.push(square);
       

        square.addEventListener('click', (e) => {
            click(square);
              
        })

        square.oncontextmenu = function(e) {
            e.preventDefault()
            addFlag(square);
         }
    }
    for (let i = 0; i , SQUARES.length; i++) {
        let total = 0;
        const leftEdge = (i % WIDTH === 0);
        const rightEdge = (i % WIDTH === WIDTH -1);

        if (SQUARES[i].classList.contains('valid')) {
            if (i > 0 && !leftEdge && SQUARES[i - 1].classList.contains('bomb')) total ++
            if (i > 9 && !rightEdge && SQUARES[i + 1 -WIDTH].classList.contains('bomb')) total ++
            if (i > 10 && SQUARES[i - WIDTH].classList.contains('bomb')) total ++
            if (i > 11 && !leftEdge && SQUARES[i - 1 -WIDTH].classList.contains('bomb')) total ++
            if (i < 98 && !rightEdge && SQUARES[i + 1].classList.contains('bomb')) total ++
            if (i < 90 && !leftEdge && SQUARES[i - 1 +WIDTH].classList.contains('bomb')) total ++
            if (i < 88 && !rightEdge && SQUARES[i + 1 +WIDTH].classList.contains('bomb')) total ++
            if (i < 89 && SQUARES[i + WIDTH].classList.contains('bomb')) total ++
            SQUARES[i].setAttribute('data', total);
        }
    }
 }


createBoard();


function startTimer() {
    INTERVALID = setInterval(() => {  
      SECONDS++;
      second.innerHTML = `${SECONDS}`;
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(INTERVALID);
    SECONDS = SECONDS;
    second.innerHTML = `${SECONDS}`;
  }


function addFlag(square) {
    if (IS_GAME_OVER) return
    if (!square.classList.contains('checked') && (FLAGS < BOMB_AMOUNT)) {
        if (!square.classList.contains('flag')) {
            square.classList.add('flag');
            square.innerHTML = '🚩'
            FLAGS ++;
            checkForWin();
            console.log(FLAGS)
        } else {
            square.classList.remove('flag');
            square.innerHTML = '';
            FLAGS --;
            IS_GAME_OVER = true;
        }
    }

}

function click(square) {
    let currentId = square.id;
    if (IS_GAME_OVER) return
    if (square.classList.contains('checked') || square.classList.contains('flag')) return
    if (square.classList.contains('bomb')) {
        gameOver(square);
    } else {
        let total = square.getAttribute('data');
        if (total != 0) {
            square.classList.add('checked');
            square.innerHTML = total;
            return
        }
        checkSquare(square, currentId);
        
    }
    square.classList.add('checked')
}

function checkSquare(square, currentId) {
    const isLeftEdge = (currentId % WIDTH === 0);
    const isRightEdge = (currentId % WIDTH === WIDTH -1);
    setTimeout(() => {
        if (currentId > 0 && !isLeftEdge) {
            const newId = SQUARES[parseInt(currentId) -1].id
            const newSquare = document.getElementById(newId)
            click(newSquare);
        }
        if (currentId > 9 && !isRightEdge) {
            const newId = SQUARES[parseInt(currentId) + 1 -WIDTH].id
            const newSquare = document.getElementById(newId);
            click(newSquare);
        }
        if (currentId > 10) {
            const newId = SQUARES[parseInt(currentId -WIDTH)].id
            const newSquare = document.getElementById(newId);
            click(newSquare);
        }
        if (currentId > 11 && !isLeftEdge) {
            const newId = SQUARES[parseInt(currentId) -1 -WIDTH].id
            const newSquare = document.getElementById(newId);
            click(newSquare);
        }
        if (currentId < 98 && !isRightEdge) {
            const newId = SQUARES[parseInt(currentId) +1].id
            const newSquare = document.getElementById(newId);
            click(newSquare);
        }
        if (currentId < 90 && !isLeftEdge) {
            const newId = SQUARES[parseInt(currentId) -1 +WIDTH].id
            const newSquare = document.getElementById(newId);
            click(newSquare);
        }
        if (currentId < 88 && !isRightEdge) {
            const newId = SQUARES[parseInt(currentId) +1 +WIDTH].id
            const newSquare = document.getElementById(newId);
            click(newSquare);
        }
        if (currentId < 89) {
            const newId = SQUARES[parseInt(currentId) +WIDTH].id
            const newSquare = document.getElementById(newId);
            click(newSquare);
        }
    },10)
}

function gameOver(square) {
    console.log('BOOM, game over!');
    IS_GAME_OVER = true;
 for (let i = 0; i < SQUARES.length; i ++) {
    if ( SQUARES[i].classList.contains('bomb')) {
        SQUARES[i].innerHTML = '💣';
        }
    }
    header.innerHTML = "Game Over 😞";
    stopTimer();
}


function checkForWin() {
    let matches = 0;
    for (let i = 0; i < SQUARES.length; i++) {
        if (SQUARES[i].classList.contains('flag') && SQUARES[i].classList.contains('bomb')) {
            matches ++;
        }
        if (matches === BOMB_AMOUNT) {
            header.innerHTML = 'You Win! 😄';
           
        }
    }
    stopTimer()
}



})



