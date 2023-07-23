import ElementCreater from './element-creator';
import ElementsParams from '../interfaces/types';

export default abstract class View {
    elementCreater: ElementCreater;
    disabled?: boolean;

    constructor(params: ElementsParams) {
        this.elementCreater = this.createView({ params });
        this.disabled = true;
    }
    public getHtmlDocument() {
        return this.elementCreater.getElement();
    }
    createView({ params }: { params: ElementsParams }): ElementCreater {
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: params.textContent,
            callback: params.callback,
        };
        const elementCreater = new ElementCreater({ param: params });
        return elementCreater;
    }
}
