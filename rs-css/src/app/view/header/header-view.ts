/* eslint-disable @typescript-eslint/no-unused-vars */
import ElementCreater from '../../util/element-creator';
import HeaderNavViev from '../header-nav/header-naw';
import View from '../view';

const CssStyles = {
    LEFT_COLUMN: 'left-column',
    SCROLL_BOX: 'scroll_box',
    LEFT_COLUMN_CONTAINER: 'left-column_container',
    HEADER: 'header',
    CSS_LOGO: 'css-logo',
    LOGO: 'logo',
    CSS_LOGO_NAME: 'css-logo_name',
};

export default class HeaderView extends View {
    constructor() {
        const paramsCol = {
            tag: 'div',
            classNames: [CssStyles.LEFT_COLUMN],
            textContent: '',
            callback: null,
        };
        super(paramsCol);
        this.configureView();
    }
    configureView() {
        const paramsScroll = {
            tag: 'div',
            classNames: [CssStyles.SCROLL_BOX],
            textContent: '',
            callback: null,
        };
        const creatorScroll = new ElementCreater({ param: paramsScroll });
        this.elementCreater.addInnerElement(creatorScroll);

        const paramLeftContainer = {
            tag: 'div',
            classNames: [CssStyles.LEFT_COLUMN_CONTAINER],
            textContent: '',
            callback: null,
        };
        const creatorContainer = new ElementCreater({ param: paramLeftContainer });
        creatorScroll.addInnerElement(creatorContainer);

        const paramHeader = {
            tag: 'header',
            classNames: [CssStyles.HEADER],
            textContent: '',
            callback: null,
        };
        const creatorHeader = new ElementCreater({ param: paramHeader });
        creatorContainer.addInnerElement(creatorHeader);

        const paramHeaderLogo = {
            tag: 'div',
            classNames: [CssStyles.CSS_LOGO],
            textContent: '',
            callback: null,
        };
        const creatorCssLogo = new ElementCreater({ param: paramHeaderLogo });
        const creatorNavViev = new HeaderNavViev();
        creatorHeader.addInnerElement(creatorCssLogo);
        creatorHeader.addInnerElement(creatorNavViev);

        const paramLogo = {
            tag: 'img',
            classNames: [CssStyles.LOGO],
            textContent: '',
            callback: null,
        };
        const creatorLogo = new ElementCreater({ param: paramLogo });
        creatorLogo.addAttribute('src', '../../../images/that.png');
        creatorCssLogo.addInnerElement(creatorLogo);

        const paramLogName = {
            tag: 'span',
            classNames: [CssStyles.CSS_LOGO_NAME],
            textContent: 'CSS Diner',
            callback: null,
        };
        const createLogName = new ElementCreater({ param: paramLogName });
        creatorCssLogo.addInnerElement(createLogName);
    }
}
