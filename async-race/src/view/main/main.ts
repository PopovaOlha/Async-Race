import View from '../../utils/view';
import FormView from '../form/form';
import './main.css';

const CssStyles = {
    MAIN: 'garage',
}
export default class MainView extends View {
    constructor(car: any) {
        const paramsMain = {
            tag: 'main',
            classNames: [CssStyles.MAIN],
            textContent: car,
            callback: null,
        };
        super(paramsMain);
        this.configureView();
    }
    configureView = () => {
        const formView = new FormView();
        this.elementCreater.addInnerElement(formView.getHtmlDocument());
    }
}