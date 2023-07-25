import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import './navigation.css';

const CssStyles = {
    NAVIGATION: 'nav',
    BUTTON: 'button',
    FILL: 'fill',
    PULSE: 'pulse',
    HEADERS: 'headers',
};
const BUTTON_GARAGE_TEXT = 'TO GARAGE';
const BUTTON_WINNERS_TEXT = 'TO WINNERS';

export default class NavigationView extends View {
    constructor() {
        const paramsNavigation = {
            tag: 'nav',
            classNames: [CssStyles.NAVIGATION],
            textContent: '',
            callback: null,
        };
        super(paramsNavigation);
        this.configureView();
    }
    configureView = () => {
        const paramsGarageButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.FILL],
            textContent: BUTTON_GARAGE_TEXT,
            callback: this.showGarage,
        };
        const garageButtonCreator = new ElementCreater({ param: paramsGarageButton });
        garageButtonCreator.addAttribute('id', 'to-garage');
        this.elementCreater.addInnerElement(garageButtonCreator);

        const paramsWinnersButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.PULSE],
            textContent: BUTTON_WINNERS_TEXT,
            callback: this.showWinner,
        };
        const winnersButtonCreator = new ElementCreater({ param: paramsWinnersButton });
        garageButtonCreator.addAttribute('id', 'to-winners');
        this.elementCreater.addInnerElement(winnersButtonCreator);

        const paramsCount = {
            tag: 'div',
            classNames: [CssStyles.HEADERS],
            textContent: '',
            callback: null,
        };
        const countCreator = new ElementCreater({ param: paramsCount });
        this.elementCreater.addInnerElement(countCreator);
    };
    showGarage = () => {
        const GARAGE = document.querySelector('.garage') as HTMLElement;
        const WINNER = document.querySelector('.winners-section') as HTMLElement;
        if (GARAGE.classList.contains('hidden')) {
            GARAGE.classList.remove('hidden');
            WINNER.classList.add('hidden');
            document.querySelector('.section-form')?.classList.remove('hidden');
        }
    };
    showWinner = () => {
        const WINNER = document.querySelector('.winners-section') as HTMLElement;
        const GARAGE = document.querySelector('.garage') as HTMLElement;
        if (WINNER.classList.contains('hidden')) {
            WINNER.classList.remove('hidden');
            GARAGE.classList.add('hidden');
            document.querySelector('.section-form')?.classList.add('hidden');
        }
    };
}
