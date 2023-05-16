import modulName from './module-1';

import '../scss/common.scss';
import codeImageUrl from "./images/stopwatch.png";
import flagUrl from './images/flag_ok.png';

const codeImage = document.createElement('img');
codeImage.classList.add('images')
codeImage.src = codeImageUrl;

const codeFlag = document.createElement('img');
codeFlag.classList.add('images')
codeFlag.src= flagUrl;
document.body.append(codeImage, codeFlag);
