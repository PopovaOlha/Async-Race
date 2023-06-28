import { ElementsParams } from '../../../util/element-creator';
import View from '../../view';

export default class TableContentView extends View {
    paramsTableContent!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor(name: string, text: Array<string>) {
        const paramsTableContent = {
            tag: name,
            classNames: text,
            textContent: '',
            callback: null,
        };
        super(paramsTableContent);
    }
}
