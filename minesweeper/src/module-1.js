export default 'module-1';
import stopwatchUrl from "./images/stopwatch.png";
import flagUrl from './images/flag_ok.png';
import bombUrl from './images/Bomb-PNG-Free-Download.png';
const WIDTH = 10;
const HEIGHT = 10;
const BOMB_AMOUNT = 10;
const SQUERES = [];

document.addEventListener('DOMContentLoaded', () => {
 const grid = document.querySelector('.grid');
 
 function createBoard() {
    const bombsArray = Array(BOMB_AMOUNT).fill('bomb');
    const emptyArray = Array(WIDTH*WIDTH - BOMB_AMOUNT).fill('valid');
    const gameAray = emptyArray.concat(bombsArray);
    const shuffledArray = gameAray.sort(() => Math.random() -0.5)

    for (let i = 0; i < WIDTH*WIDTH; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        square.classList.add(shuffledArray[i]);
        grid.appendChild(square);
        SQUERES.push(square);
    }
 }
createBoard();
})



