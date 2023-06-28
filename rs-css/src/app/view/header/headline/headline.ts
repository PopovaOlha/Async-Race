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
            textContent: 'Select the plates',
            callback: null,
        };
        super(paramsOrder);
        this.setContent();
    }
    public setContent() {
        this.elementCreater.getElement().innerHTML = 'Select the plates';
    }
}
