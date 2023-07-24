import { createCar } from '../../api/create-car';
import deleteCar from '../../api/delete-car';
import { deleteWinner } from '../../api/delete-winner';
import { getCar } from '../../api/get-car';
import { getCars } from '../../api/get-cars';
import { saveWinner } from '../../api/save-winner';
import { updateCar } from '../../api/update-car';
import { CarOBJ, Race, Start } from '../../interfaces/types';
import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import CarList from '../car-list/car-list';
import PaginationButtons from '../pagination-buttons/pagination-buttons';
import { start, stop } from '../start-stop-buttons/start-stop-buttons';

import './main.css';

const CssStyles = {
    MAIN: 'garage',
    HEADER_TITLE: 'header-title',
    SECTION_FORM: 'section-form',
};
export default class MainView extends View {
    count: number;
    carList!: CarList;
    constructor() {
        const paramsMain = {
            tag: 'main',
            classNames: [CssStyles.MAIN],
            textContent: '',
            callback: null,
        };
        super(paramsMain);
        this.configureView();
        this.count = 4;
        this.deleteSelectUpdate();
    }
    configureView = () => {
        const paramsHeaderTitle = {
            tag: 'div',
            classNames: [CssStyles.HEADER_TITLE],
            textContent: '',
            callback: null,
        };
        const headerTitleCreator = new ElementCreater({ param: paramsHeaderTitle });
        this.elementCreater.addInnerElement(headerTitleCreator);

        this.carList = new CarList();
        this.elementCreater.addInnerElement(this.carList.getHtmlDocument());

        const paginationButtons = new PaginationButtons();
        this.elementCreater.addInnerElement(paginationButtons.getHtmlDocument());
    };
    async deleteSelectUpdate(): Promise<void> {
        document.body.addEventListener('click', async (el) => {
            const garageWinner = document.querySelector('.garage-winners_title') as HTMLElement;
            if ((el.target as HTMLElement).classList.contains('delete')) {
                this.Delete(el.target as HTMLButtonElement);
            }
            if ((el.target as HTMLElement).classList.contains('select')) {
                this.Select(el.target as HTMLButtonElement);
            }
            if ((el.target as HTMLButtonElement).classList.contains('start')) {
                const id = parseInt((el.target as HTMLButtonElement).value, 10);
                start(id);
            }
            if ((el.target as HTMLElement).classList.contains('stop')) {
                const id = parseInt((el.target as HTMLButtonElement).value, 10);
                stop(id);
            }
            if ((el.target as HTMLElement).classList.contains('race')) {
                (document.querySelector('.race') as HTMLButtonElement).disabled = true;
                const winner = await this.race(start);
                garageWinner.innerHTML = `
        ${winner.name} won the race against time ${winner.time}
        `;
                garageWinner.classList.remove('hidden');
                saveWinner(winner);
                const table = document.querySelector('.winners_table_body') as HTMLElement;
                table.innerHTML = '';
            }
            if ((el.target as HTMLElement).classList.contains('reset')) {
                this.reset(stop);
                garageWinner.classList.add('hide');
                (document.querySelector('.race') as HTMLButtonElement).disabled = false;
            }
        });
    }
    addNewCarContent(): void {
        const form = document.querySelector('.create-car') as HTMLFormElement;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = (document.querySelector('.create-text') as HTMLInputElement).value;
            const color = (document.querySelector('.create-color') as HTMLInputElement).value;
            createCar({
                name,
                color,
            });
            this.getcount();
            const count = document.querySelector('.garage_count') as HTMLElement;
            count.innerHTML = `
                  Garage(${this.count})
                  `;
            form.reset();
            (document.querySelector('.cars_list') as HTMLDivElement).innerHTML = '';
            this.carList.getCarMet(this.carList.page);
        });
    }

    async getcount(): Promise<void> {
        this.count = (await getCars(1)).count;
    }
    Delete(el: HTMLButtonElement): void {
        deleteCar(parseInt(el.value, 10));
        deleteWinner(parseInt(el.value, 10));
        (document.querySelector('.cars_list') as HTMLDivElement).innerHTML = '';
        this.carList.getCarMet(this.carList.page);
        (document.querySelector('.winners_table_body') as HTMLElement).innerHTML = '';
    }

    async Select(el: HTMLButtonElement): Promise<void> {
        const car = getCar(parseInt(el.value, 10));
        const inputname = document.querySelector('.update-text') as HTMLInputElement;
        const inputcolor = document.querySelector('.update-color') as HTMLInputElement;
        const submit = document.querySelector('.submit_update') as HTMLButtonElement;
        inputname.disabled = false;
        inputcolor.disabled = false;
        submit.disabled = false;
        const { id } = await car;
        let { name } = await car;
        let { color } = await car;
        inputname.value = name;
        inputcolor.value = color;
        const form = document.querySelector('.update-car') as HTMLFormElement;
        form.onsubmit = (event) => {
            event.preventDefault();
            inputname.disabled = true;
            inputcolor.disabled = true;
            submit.disabled = true;
            name = inputname.value;
            color = inputcolor.value;
            updateCar(id, { name, color });
            (document.querySelector('.cars_list') as HTMLDivElement).innerHTML = '';
            this.carList.getCarMet(this.carList.page);
            form.reset();
        };
    }

    async raceCars(promises: Promise<Start>[], ids: number[]): Promise<Race> {
        const { success, id, time } = await Promise.race(promises);

        if (!success) {
            const filedIndex = ids.findIndex((i) => i === id);
            const restPromise = [...promises.slice(0, filedIndex), ...promises.slice(filedIndex + 1, promises.length)];
            const restIds = [...ids.slice(0, filedIndex), ...ids.slice(filedIndex + 1, ids.length)];
            return this.raceCars(restPromise, restIds);
        }
        const winner = {
            ...((await getCars(this.carList.page)).items as Array<CarOBJ>).find((car) => car.id === id),
            time: +(time / 1000).toFixed(2),
        } as Race;
        return winner;
    }

    async race(action: (id: number) => Promise<Start>): Promise<Race> {
        const promise = ((await getCars(this.carList.page)).items as Array<CarOBJ>).map(({ id }) => action(id));
        const winner = await this.raceCars(
            promise,
            ((await getCars(this.carList.page)).items as Array<CarOBJ>).map(({ id }) => id)
        );
        return winner;
    }

    async reset(action: (id: number) => Promise<void>): Promise<void> {
        ((await getCars(this.carList.page)).items as Array<CarOBJ>).map(({ id }) => action(id));
    }
}
