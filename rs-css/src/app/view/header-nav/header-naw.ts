import View from '../view';
import ElementCreater, { ElementsParams } from '../../util/element-creator';

const CssStyles = {
    SHARE_CONTENT: 'share-content',
    SHARE_MENU: 'share-menu',
    SHARE_EMAIL: 'share-email',
    SHARE_FACEBOOK: 'share-facebook',
    SHARE_TWITTER: 'share-twitter',
};

export default class HeaderNavViev extends View {
    paramsNavContent!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor() {
        const paramsNavContent = {
            tag: 'div',
            classNames: [CssStyles.SHARE_CONTENT],
            textContent: '',
            callback: null,
        };
        super(paramsNavContent);
    }
    public configView() {
        const creatorNavViev = new ElementCreater({ param: this.paramsNavContent });
        this.elementCreater.addInnerElement(creatorNavViev);
    }
}
