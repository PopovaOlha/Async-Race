import './winners-section.css';
import View from '../../utils/view';
import WinnersPaginationButtons from '../winners-pagination/winners-pagination';
import WinnersMain from '../winners-main/winners-main';

const CssStyles = {
    WINNERS_SECTION: 'winners-section',
    HIDDEN: 'hidden',
};

export default class WinnersSection extends View {
    count!: number;
    page!: number;
    constructor() {
        const paramsWinnersSection = {
            tag: 'div',
            classNames: [CssStyles.WINNERS_SECTION, CssStyles.HIDDEN],
            textContent: '',
            callback: null,
        };
        super(paramsWinnersSection);
        this.configureView();
    }
    configureView = () => {
        const winnersMain = new WinnersMain();
        this.elementCreater.addInnerElement(winnersMain.getHtmlDocument());

        const winnersPagination = new WinnersPaginationButtons();
        this.elementCreater.addInnerElement(winnersPagination.getHtmlDocument());

        this.count = winnersMain.count;
        this.page = winnersMain.page;
    };
}
