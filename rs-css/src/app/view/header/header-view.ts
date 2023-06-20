import ElementCreater from '../../util/element-creator';
import View from '../view';

const CssStyles = {
    WRAPPER: 'wrapper',
    LEFT_COLUMN: 'left-column',
    SCROLL_BOX: 'scroll_box',
    LEFT_COLUMN_CONTAINER: 'left-column_container',
};

export default class HeaderView extends View {
    constructor() {
        const params = {
            tag: 'div',
            classNames: [CssStyles.WRAPPER],
            textContent: '',
            callback: null,
        };
        super(params);
        this.configureView();
    }
    configureView() {
        const paramsCol = {
            tag: 'div',
            classNames: [CssStyles.LEFT_COLUMN],
            textContent: '',
            callback: null,
        };
        const creatorCol = new ElementCreater({ param: paramsCol });
        this.elementCreater.addInnerElement(creatorCol);

        const paramScroll = {
            tag: 'div',
            classNames: [CssStyles.SCROLL_BOX],
            textContent: '',
            callback: null,
        };
        const creatScroll = new ElementCreater({ param: paramScroll });
        creatorCol.addInnerElement(creatScroll);

        const paramLeftContainer = {
            tag: 'div',
            classNames: [CssStyles.LEFT_COLUMN_CONTAINER],
            textContent: '',
            callback: null,
        };
        const creatContainer = new ElementCreater({ param: paramLeftContainer });
        creatScroll.addInnerElement(creatContainer);
    }
}
