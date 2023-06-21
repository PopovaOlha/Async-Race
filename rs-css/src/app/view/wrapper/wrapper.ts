import View from '../view';
import ElementCreater from '../../util/element-creator';
import { ElementsParams } from '../../util/element-creator';

const CssStyles = {
    WRAPPER: 'wrapper',
};

export default class WrapperView extends View {
    paramsWrapper!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor() {
        const paramsWrapper = {
            tag: 'div',
            classNames: [CssStyles.WRAPPER],
            textContent: '',
            callback: null,
        };
        super(paramsWrapper);
    }
    public configView() {
        const creatorWrapper = new ElementCreater({ param: this.paramsWrapper });
        this.elementCreater.addInnerElement(creatorWrapper);
    }
}
