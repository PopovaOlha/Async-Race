import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import CarList from '../car-list/car-list';
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
            callback: null,
        };
        const garageButtonCreator = new ElementCreater({ param: paramsGarageButton });
        garageButtonCreator.addAttribute('id', 'to-garage');
        this.elementCreater.addInnerElement(garageButtonCreator);

        const paramsWinnersButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.PULSE],
            textContent: BUTTON_WINNERS_TEXT,
            callback: null,
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
}
