import { ElementsParams } from '../../util/element-creator';
import View from '../view';

export default class LinkView extends View {
    paramsNavLink!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor(name: string, text: Array<string>) {
        const paramsNavLink = {
            tag: name,
            classNames: text,
            textContent: '',
            callback: null,
        };
        super(paramsNavLink);
    }
}
