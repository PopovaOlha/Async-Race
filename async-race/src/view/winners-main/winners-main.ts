import { getWinners } from '../../api/get-winners';
import View from '../../utils/view';
import WinnersContent from '../winners-content/winners-content';

const CssStyles = {
    WINNERS_MAIN: 'winners-main',
};

export default class WinnersMain extends View {
    page!: number;
    index!: number;
    count!: number;
    constructor() {
        const paramsWinnersMain = {
            tag: 'div',
            classNames: [CssStyles.WINNERS_MAIN],
            textContent: '',
            callback: null,
        };
        super(paramsWinnersMain);
        this.getWinnersMet(this.page);
        this.count = 1;
        this.page = 1;
        this.index = 0;
    }
    async getWinnersMet(page: number): Promise<void> {
        this.count = (await getWinners(page, 10, '', '')).count;
        (await getWinners(page, 10, '', '')).items.forEach((el) => {
            this.index += 1;
            const { id } = el;
            const { index } = this;
            const { name } = el.car!;
            const { color }: any = el.car;
            const { wins } = el;
            const { time } = el;
            const winer = new WinnersContent({
                index,
                id,
                name,
                color,
                wins,
                time,
            });
            document.querySelector('.winners-main')?.appendChild(winer.getHtmlDocument());
            winer.addCarImg(el.id);
        });
        await this.paginPrev();
        await this.paginNext();
        await this.updateStateWinner();
    }

    async paginNext(): Promise<void> {
        const btn = document.querySelector('.winners_next') as HTMLButtonElement;
        if (this.page * 10 < this.count) {
            btn.disabled = false;
            btn.onclick = () => {
                this.page += 1;
                (document.querySelector('.winners-main') as HTMLDivElement).innerHTML = '';
                this.getWinnersMet(this.page);
            };
        } else {
            btn.disabled = true;
        }
        this.updateStateWinner();
    }

    paginPrev(): void {
        const btn = document.querySelector('.winners_prev') as HTMLButtonElement;
        if (this.page > 1) {
            btn.disabled = false;
            btn.onclick = async () => {
                this.index -= 10 + (await getWinners(this.page, 10, '', '')).items.length;
                this.page -= 1;
                (document.querySelector('.winners-main') as HTMLDivElement).innerHTML = '';
                this.getWinnersMet(this.page);
            };
        } else {
            btn.disabled = true;
        }
        this.updateStateWinner();
    }

    updateStateWinner(): void {
        const headers = document.querySelector('.header-title') as HTMLDivElement;
        headers.innerHTML = `
            <h1>Garage (${this.count})</h1>
            <h2>Page #${this.page}</h2>
        `;
    }
}
