import './header.css';
import View from '../../utils/view';
import NavigationView from '../header-navigation/navigation';
import TitleView from '../header-title/title';
import ElementCreater from '../../utils/element-creator';

const CssStyles = {
    HEADER: 'header',
    LOGO: 'logo',
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
        const navigationView = new NavigationView();
        this.elementCreater.addInnerElement(navigationView.getHtmlDocument());

        const titleView = new TitleView();
        this.elementCreater.addInnerElement(titleView.getHtmlDocument());

        const paramsLogo = {
            tag: 'div',
            classNames: [CssStyles.LOGO],
            textContent: '',
            callback: null,
        };
        const logoView = new ElementCreater({ param: paramsLogo });
        this.elementCreater.addInnerElement(logoView);
    };
}
