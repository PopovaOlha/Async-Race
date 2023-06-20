/* eslint-disable @typescript-eslint/no-unused-vars */
import ElementCreater from '../util/element-creator';
import { ElementsParams } from '../util/element-creator';

export default abstract class View {
    elementCreater: ElementCreater;
    constructor(params: ElementsParams) {
        this.elementCreater = this.createView({ params });
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
