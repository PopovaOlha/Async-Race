import ElementCreater from '../../util/element-creator';

const CssStyles = {
    HEADER: 'header',
    WRAPPER: 'left-column',
};
const TEXT = 'CSS-DINER';

export default class HeaderView {
    elementCreater: ElementCreater;
    constructor() {
        this.elementCreater = this.createView();
    }
    public getHtmlDocument() {
        return this.elementCreater.getElement();
    }
    public createView() {
        const params = {
            tag: 'header',
            classNames: [CssStyles.HEADER],
            textContent: TEXT,
            callback: null,
        };
        const elementCreater = new ElementCreater({ param: params });
        return elementCreater;
    }
}
