import { GetWinnerParam } from '../../interfaces/types';
import View from '../../utils/view';
import Car from '../car/car';
import './winners-content.css';

const CssStyles = {
    WINNERS_CONTENT: 'winners-content',
};

export default class WinnersContent extends View {
    car!: Car;
    constructor({ index, id, name, color, wins, time }: GetWinnerParam) {
        const paramsWinnersContent = {
            tag: 'div',
            classNames: [CssStyles.WINNERS_CONTENT],
            textContent: `<div class="number">${index}</div>
            <div class="table_car" id="winner${id}"></div>
            <div class="name">${name}</div>
            <div class="wins">${wins}</div>
            <div class="time">${time} sec</div>`,
            callback: null,
        };
        super(paramsWinnersContent);
        this.car = new Car(color);
    }
    addCarImg(id: number): void {
        document.getElementById(`winner${id}`)?.appendChild(this.car.getHtmlDocument());
    }
}
