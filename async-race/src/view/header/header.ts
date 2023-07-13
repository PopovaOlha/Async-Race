import View from '../../utils/view';
import TitleView from '../title/title';
const CssStyles = {
    HEADER: 'header',
};
export default class HeaderView extends View {
    constructor() {
        const paramsHeader = {
            tag: 'header',
            classNames: [CssStyles.HEADER],
            textContent: '',
            callback: null,
        };
        super(paramsHeader);
        this.configureView();
    }
    configureView = () => {
        const titleView = new TitleView();
        this.elementCreater.addInnerElement(titleView.getHtmlDocument());
    };
}
