export default 'module-1';
import stopwatchUrl from "./images/stopwatch.png";
import flagUrl from './images/flag_ok.png';
import bombUrl from './images/Bomb-PNG-Free-Download.png';
const bomb = document.createElement('img');
bomb.src = bombUrl;
const WIDTH = 10;
const HEIGHT = 10;
const BOMB_AMOUNT = 10;
const SQUERES = [];

document.addEventListener('DOMContentLoaded', () => {
 const grid = document.querySelector('.grid');
 
const createBoard = function() {
    const bombsArray = Array(BOMB_AMOUNT).fill('bomb');
    const emptyArray = Array(WIDTH*HEIGHT - BOMB_AMOUNT).fill('valid');
    const gameAray = emptyArray.concat(bombsArray);
    const shuffledArray = gameAray.sort(() => Math.random() -0.5)

    for (let i = 0; i < WIDTH*HEIGHT; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        square.classList.add(shuffledArray[i]);
        grid.appendChild(square);
        SQUERES.push(square);

        square.addEventListener('click', (e) => {
            click(square);
        })
    }
    for (let i = 0; i , SQUERES.length; i++) {
        let total = 0;
        const leftEdge = (i % WIDTH === 0);
        const rightEdge = (i % WIDTH === WIDTH -1);

        if (SQUERES[i].classList.contains('valid')) {
            if (i > 0 && !leftEdge && SQUERES[i - 1].classList.contains('bomb')) total ++
            if (i > 9 && !rightEdge && SQUERES[i + 1 -WIDTH].classList.contains('bomb')) total ++
            if (i > 10 && SQUERES[i - WIDTH].classList.contains('bomb')) total ++
            if (i > 11 && !leftEdge && SQUERES[i - 1 -WIDTH].classList.contains('bomb')) total ++
            if (i < 98 && !rightEdge && SQUERES[i + 1].classList.contains('bomb')) total ++
            if (i < 90 && !leftEdge && SQUERES[i - 1 +WIDTH].classList.contains('bomb')) total ++
            if (i < 88 && !rightEdge && SQUERES[i + 1 +WIDTH].classList.contains('bomb')) total ++
            if (i < 89 && SQUERES[i + WIDTH].classList.contains('bomb')) total ++
            SQUERES[i].setAttribute('data', total);
            console.log(SQUERES[i])
        }
    }
 }
createBoard()

function click(square) {
    if (square.classList.contains('bomb')) {
        alert('game over');
    }
}

})



