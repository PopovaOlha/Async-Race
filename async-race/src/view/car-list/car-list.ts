import View from '../../utils/view';
import names from '../../data/car-makers';
import models from '../../data/car-models';
import { getCars } from '../../api/get-cars';
import './car-list.css';
import { CarOBJ } from '../../interfaces/types';
import CarRoad from '../car-road/car-road';

const CssStyles = {
    CARS_LIST: 'cars_list',
};

export default class CarList extends View {
    public page: number;

    public count: number;

    public names: string[];

    public models: string[];

    public leter: string;

    constructor() {
        const paramsCarList = {
            tag: 'ul',
            classNames: [CssStyles.CARS_LIST],
            textContent: '',
            callback: null,
        };
        super(paramsCarList);
        this.names = names;
        this.models = models;
        this.leter = '0123456789ABCDEF';
        this.page = 1;
        this.count = 7;
        this.getCarMet(this.page);
    }
    async getCarMet(page: number): Promise<void> {
        this.count = (await getCars(this.page)).count;
        ((await getCars(page)).items as Array<CarOBJ>).forEach((el) => {
            const carAndRoad = new CarRoad(el);
            this.elementCreater.addInnerElement(carAndRoad.getHtmlDocument());
            carAndRoad.addCarImg(el.id);
        });
        await this.paginPrev();
        await this.paginNext();
    }
    paginPrev(): void {
        const btn = document.querySelector('.prev') as HTMLButtonElement;
        if (this.page > 1) {
            btn.disabled = false;
            btn.onclick = () => {
                this.page -= 1;
                this.elementCreater.getElement().innerHTML = '';
                this.getCarMet(this.page);
            };
        } else {
            btn.disabled = true;
        }
        this.updateStateGarage();
    }
    async paginNext(): Promise<void> {
        const btn = document.querySelector('.next') as HTMLButtonElement;
        if (this.page * 7 < this.count) {
            btn.disabled = false;
            btn.onclick = () => {
                this.page += 1;
                this.elementCreater.getElement().innerHTML = '';
                this.getCarMet(this.page);
            };
        } else {
            btn.disabled = true;
        }
        this.updateStateGarage();
    }
    getRandomName(): string {
        const name = this.names[Math.floor(Math.random() * this.names.length)];
        const model = this.models[Math.floor(Math.random() * this.models.length)];
        return `${name} ${model}`;
    }

    getRandomColor(): string {
        let color = '#';
        for (let i = 0; i < 6; i += 1) {
            color += this.leter[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    generateRandomCars(): {
        name: string;
        color: string;
    }[] {
        const count = 100;
        const arr = new Array(count).fill(1).map(() => ({ name: this.getRandomName(), color: this.getRandomColor() }));
        return arr;
    }
    updateStateGarage(): void {
        const headers = document.querySelector('.header-title') as HTMLDivElement;
        headers.innerHTML = `
            <h1 class="garage_count">Garage (${this.count})</h1>
            <h2>Page #${this.page}</h2>
        `;
    }
}
