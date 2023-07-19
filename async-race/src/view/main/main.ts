import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import CarList from '../car-list/car-list';
import FormView from '../form/form';
import PaginationButtons from '../pagination-buttons/pagination-buttons';
import './main.css';

const CssStyles = {
    MAIN: 'garage',
    HEADER_TITLE: 'header-title',
};
export default class MainView extends View {
    constructor() {
        const paramsMain = {
            tag: 'main',
            classNames: [CssStyles.MAIN],
            textContent: '',
            callback: null,
        };
        super(paramsMain);
        this.configureView();
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
        const formView = new FormView();
        this.elementCreater.addInnerElement(formView.getHtmlDocument());

        const carList = new CarList();
        this.elementCreater.addInnerElement(carList.getHtmlDocument());

        const paginationButtons = new PaginationButtons();
        this.elementCreater.addInnerElement(paginationButtons.getHtmlDocument());
}
}