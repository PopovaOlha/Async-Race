import './headline.css';
import View from '../../view';
import { ElementsParams } from '../../../util/element-creator';
import levels from '../../../data/level-game';

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
        this.setContent();
    }
    public setContent() {
        levels.forEach((level) => {
            this.elementCreater.getElement().innerHTML = level.doThis;
        });
    }
}
