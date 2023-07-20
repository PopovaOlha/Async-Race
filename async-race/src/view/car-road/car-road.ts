import View from '../../utils/view';
import './car-road.css';
import Car from '../car/car';

const CssStyles = {
    CAR_AND_ROAD: 'car_and_road',
};

export default class CarRoad extends View {
    Car: Car;
    constructor({ name, color, id }: any) {
        const paramsCarRoad = {
            tag: 'li',
            classNames: [CssStyles.CAR_AND_ROAD],
            textContent: `<div class="car_btns">
            <button class="button select" value="${id}">Select</button>
            <button class="button delete" value="${id}">Delete</button>
            <span class="car_name">${name}</span>
        </div>
        <div class="road">
            <div class="lounch" id="${id}">
                <div class="controls">
                    <button class="button start " value="${id}" id="start${id}">start</button>
                    <button class="button stop " value="${id}" id="stop${id}" disabled>stop</button>
                </div>
            </div>
        </div>
        <div class="flag flag${id}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="70" height="70"><g id="Layer_13" data-name="Layer 13">
        <path d="M21,52.051c6.785.346,12,2.43,12,4.949,0,2.761-6.268,5-14,5S5,59.761,5,57c0-2.519,5.215-4.6,12-4.949" 
        style="fill:#313e44"/><path d="M32.9,57.573A1.855,1.855,0,0,0,33,57c0-2.519-5.215-4.6-12-4.949H17c-4.18.213-7.758,
        1.087-9.894,2.315A1.873,1.873,0,0,0,7,54.949c0,2.762,6.268,5,14,5C26.034,59.949,30.434,59,32.9,57.573Z" 
        style="fill:#43525b"/><path d="M21,7H34.172A6.826,6.826,0,0,1,39,9h0a6.826,6.826,0,0,0,4.828,2H59l-4,4,4,3-4,
        4,4,3-4,4,4,3H43.828A6.826,6.826,0,0,1,39,30h0a6.826,6.826,0,0,0-4.828-2H21" style="fill:#317363"/>
        <path d="M39,9a6.826,6.826,0,0,0-4.828-2H23V26H36.172A6.826,6.826,0,0,1,41,28a6.826,6.826,0,0,0,4.828,
        2h10.5L55,29l4-4-4-3,4-4-4-3,4-4H43.828A6.826,6.826,0,0,1,39,9Z" style="fill:#4aa58f"/><path d="M34.172,
        7H32L21,18v7.5L38.186,8.314A6.826,6.826,0,0,0,34.172,7Z" style="fill:#aab1b7"/><path d="M59,18l-3.143-2.357L40.42,
        31.08a6.824,6.824,0,0,0,3.408.92H47l9.143-9.143L55,22Z" style="fill:#aab1b7"/><path d="M45.5,11l-17,17h5.672a6.842,
        6.842,0,0,1,1.624.2L53,11Z" style="fill:#aab1b7"/><path d="M19,2h0a2,2,0,0,1,2,2V57a0,0,0,0,1,0,0H17a0,0,0,0,1,0
        ,0V4A2,2,0,0,1,19,2Z" style="fill:#69737a"/><path d="M20,2.277A1.994,1.994,0,0,0,19,4V57h2V4A1.994,1.994,0,0,0,20
        ,2.277Z" style="fill:#91989d"/><path d="M19,2a2,2,0,0,0-2,2V7h4V4A2,2,0,0,0,19,2Z" style="fill:#3e8e80"/>
        <path d="M34.172,7H32l-9,9v7.5L38.186,8.314A6.826,6.826,0,0,0,34.172,7Z" style="fill:#e4e5e7"/><path d="M55.857
        ,15.643,42.42,29.08a6.824,6.824,0,0,0,3.408.92H49l7.143-7.143L55,22l2-2,2-2Z" style="fill:#e4e5e7"/><path d="M45.5,
        11l-15,15h5.672a6.842,6.842,0,0,1,1.624.2L53,11Z" style="fill:#e4e5e7"/><path d="M19,1a3,3,0,0,0-3,3V51.116C9.881,
        51.582,4,53.528,4,57c0,3.9,7.729,6,15,6s15-2.1,15-6c0-3.472-5.881-5.418-12-5.884V29H34.172a5.789,5.789,0,0,1,4.121,
        1.707A7.772,7.772,0,0,0,43.828,33H59a1,1,0,0,0,.6-1.8l-3.078-2.308,3.185-3.185A1,1,0,0,0,59.6,24.2l-3.078-2.308,
        3.185-3.185A1,1,0,0,0,59.6,17.2l-3.078-2.308,3.185-3.185A1,1,0,0,0,59,10H43.828a5.789,5.789,0,0,1-4.121-1.707A7.772,
        7.772,0,0,0,34.172,6H22V4A3,3,0,0,0,19,1ZM18,8h2V56H18Zm1-5a1,1,0,0,1,1,1V6H18V4A1,1,0,0,1,19,3ZM32,57c0,1.631-5.064,
        4-13,4S6,58.631,6,57c0-1.348,3.472-3.364,10-3.879V57a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V53.121C28.528,53.636,32,55.652,32,
        57ZM30.914,27l15-15h4.672L35.471,27.115a7.891,7.891,0,0,0-1.3-.115Zm23.379,1.293A1,1,0,0,0,54.4,29.8L56,
        31H49.414l6.822-6.823,1.242.931Zm0-7A1,1,0,0,0,54.4,22.8l.221.165L46.586,31H43.828a5.868,5.868,0,0,1-1.671-.243L55.951,
        16.963l1.527,1.145Zm0-7a.977.977,0,0,0,.055,1.446L40.29,29.8a5.886,5.886,0,0,1-.583-.5A7.806,7.806,0,0,0,37.612,
        27.8L53.414,12h3.172ZM43.12,11.966,28.086,27H22V25.914L38.248,9.666c.015.014.031.027.045.041A7.767,7.767,0,0,0,
        43.12,11.966ZM36.568,8.518,22,23.086V18.414L32.414,8h1.758A5.806,5.806,0,0,1,36.568,8.518ZM29.586,8,22,15.586V8Z"/>
        </g></svg>

        </div>
        `,
            callback: null,
        };
        super(paramsCarRoad);
        this.Car = new Car(color);
    }
    addCarImg(id: number): void {
        this.Car.getHtmlDocument().id = `car${id}`;
        document.getElementById(`${id}`)?.appendChild(this.Car.getHtmlDocument());
    }

}