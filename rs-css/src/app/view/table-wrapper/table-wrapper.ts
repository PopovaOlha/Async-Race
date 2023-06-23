import { ElementsParams } from '../../util/element-creator';
import View from '../view';

export default class TableView extends View {
    paramsTable!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor(name: string, text: Array<string>) {
        const paramsTable = {
            tag: name,
            classNames: text,
            textContent: '',
            callback: null,
        };
        super(paramsTable);
    }
}
