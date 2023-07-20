import View from '../../utils/view';
import './winners-title.css';

const CssStyles = {
    WINNERS_TITLE: 'garage-winners_title',
    HIDDEN: 'hidden',
}

export default class WinnersTitle extends View {
    constructor() {
        const paramsWinnersTitle = {
            tag: 'div',
            classNames: [CssStyles.WINNERS_TITLE, CssStyles.HIDDEN],
            textContent: '',
            callback: null,
        };
        super(paramsWinnersTitle);
    }
}