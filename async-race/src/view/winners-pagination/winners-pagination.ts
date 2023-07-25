import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import './winners-pagination.css';

const CssStyles = {
    WINNERS_PAGINATION: 'winners-pagination',
    WINNERS_PREV: 'winners_prev',
    WINNERS_NEXT: 'winners_next',
    BUTTON: 'button',
};
const WINNERS_PREV_TEXCONTENT = 'PREV';
const WINNERS_NEXT_TEXCONTENT = 'NEXT';

export default class WinnersPaginationButtons extends View {
    constructor() {
        const paramsWinnersButtons = {
            tag: 'div',
            classNames: [CssStyles.WINNERS_PAGINATION],
            textContent: '',
            callback: null,
        };
        super(paramsWinnersButtons);
        this.configureView();
    }
    configureView = () => {
        const paramsWinnersPrev = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.WINNERS_PREV],
            textContent: WINNERS_PREV_TEXCONTENT,
            callback: null,
        };
        const winnersPrevButton = new ElementCreater({ param: paramsWinnersPrev });
        this.elementCreater.addInnerElement(winnersPrevButton);

        const paramsWinnersNext = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.WINNERS_NEXT],
            textContent: WINNERS_NEXT_TEXCONTENT,
            callback: null,
        };
        const winnerNextButton = new ElementCreater({ param: paramsWinnersNext });
        this.elementCreater.addInnerElement(winnerNextButton);
    };
}
