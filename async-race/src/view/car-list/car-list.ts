import View from '../../utils/view';
import names from '../../data/car-makers';
import models from '../../data/car-models';
import getCarsAPI from '../../api/get-cars';
import './car-list.css';
import { CarOBJ } from '../../interfaces/types';
import CarRoad from '../car-road/car-road';
import createCarAPI from '../../api/create-car';

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
        this.count = 4;
        this.getCarMet(this.page);
        this.renderCars();
    }
    async getCarMet(page: number): Promise<void> {
        this.count = (await getCarsAPI(this.page)).count;
        ((await getCarsAPI(page)).items as Array<CarOBJ>).forEach((el) => {
          const caradnroad = new CarRoad(el);
          document.querySelector('.cars_list')?.appendChild(caradnroad.getHtmlDocument());
          caradnroad.addCarImg(el.id);
        });
        await this.paginPrev();
        await this.paginNext();
      }
    async paginNext(): Promise<void> {
        const btn = document.querySelector('.next') as HTMLButtonElement;
        if (this.page * 7 < this.count) {
            btn.onclick = () => {
                this.page++;
                (document.querySelector('.cars_list') as HTMLDivElement).innerHTML = '';
                this.getCarMet(this.page);
            };
    }
}

    paginPrev(): void {
        const btn = document.querySelector('.prev') as HTMLButtonElement;
        if (this.page > 1) {
            btn.onclick = () => {
                this.page--;
                (document.querySelector('.cars_list') as HTMLDivElement).innerHTML = '';
                this.getCarMet(this.page);
            };
        } else {
        }
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

    renderCars(): void {
        const btn = document.querySelector('.gen_car') as HTMLButtonElement;
        btn.addEventListener('click', async () => {
            const cars = this.generateRandomCars();
            await Promise.all(
                cars.map(async (car) => {
                    return await createCarAPI(car);
                })
            );
            (document.querySelector('.cars_list') as HTMLDivElement).innerHTML = '';
            this.getCarMet(this.page);
        });
    }
}
