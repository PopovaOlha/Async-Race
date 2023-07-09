import './headline.css';
import View from '../../view';
import { ElementsParams } from '../../../util/element-creator';

const CssStyles = {
    ORDER: 'order',
};

export default class HeadlineView extends View {
    paramsOrder!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor() {
        const paramsOrder = {
            tag: 'div',
            classNames: [CssStyles.ORDER],
            textContent: '',
            callback: null,
        };
        super(paramsOrder);
        this.elementCreater.getElement().innerHTML = `${this.levels[this.levelActive].doThis}`;
    }
}
