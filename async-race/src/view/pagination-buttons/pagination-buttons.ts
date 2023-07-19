import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import CarList from '../car-list/car-list';
import './pagination-buttons.css';

const CssStyles = {
    PAGINATION: 'pagination',
    BUTTON: 'button',
    PREV: 'prev',
    NEXT: 'next',
}
const PAGINATION_PREV_BUTTON_TEXT = 'PREV';
const PAGINATION_NEXT_BUTTON_TEXT = 'NEXT';

const carList = new CarList();

export default class PaginationButtons extends View {
    constructor() {
        const paramsPagination = {
            tag: 'div',
            classNames: [CssStyles.PAGINATION],
            textContent: '',
            callback: null,
        };
        super(paramsPagination);
        this.configureView();
    }
    configureView = () => {
        const paramsPaginationButtonPrev = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.PREV],
            textContent: PAGINATION_PREV_BUTTON_TEXT,
            callback: carList.paginPrev,
        };
        const paginationButtonPrev = new ElementCreater({ param: paramsPaginationButtonPrev });
        this.elementCreater.addInnerElement(paginationButtonPrev);

        const paramsPaginationButtonNext = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.NEXT],
            textContent: PAGINATION_NEXT_BUTTON_TEXT,
            callback: carList.paginNext,
        };
        const paginationButtonNext = new ElementCreater({ param: paramsPaginationButtonNext });
        this.elementCreater.addInnerElement(paginationButtonNext);
    }
}