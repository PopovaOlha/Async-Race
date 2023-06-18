/* eslint-disable @typescript-eslint/no-unused-vars */
import { createElement } from '../../util/element-creator';

export const cssClasses = {
    WRAPPER: '.wrapper',
    PAGE: '.page',
    LEFT_COLUMN: '.left-column',
    SCROLL_BOX: '.scroll_box',
    LEFT_COLUMN_CONTEINER: '.left-column_container',
    HEADER: '.header',
};
export const Text = 'jhgjhgjh';

export default class footerView {
    elementCreator: createElement;
    constructor() {
        this.elementCreator = this.createView();
    }
    public getHtmlDocument(): HTMLElement {
        return this.elementCreator.getElement();
    }
    public createView() {
        const p = {
            tag: 'header',
            className: [cssClasses.HEADER],
            textContent: Text,
        };
        const elementCreator = new createElement(p);
        return elementCreator;
    }
}
