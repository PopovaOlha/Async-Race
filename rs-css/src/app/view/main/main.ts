import './main.css';
import TableView from '../table-wrapper/table-wrapper';
import View from '../view';

const CssStyles = {
    MAIN: 'main',
};
export default class MainView extends View {
    constructor() {
        const paramsMain = {
            tag: 'main',
            classNames: [CssStyles.MAIN],
            textContent: '',
            callback: null,
        };
        super(paramsMain);
        this.configeView();
    }
    configeView() {
        const tableCreator = new TableView();
        this.elementCreater.addInnerElement(tableCreator.getHtmlDocument());
    }
}
