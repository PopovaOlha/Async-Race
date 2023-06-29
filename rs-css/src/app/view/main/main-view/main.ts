import './main.css';
import TableView from '../table-wrapper/table-wrapper';
import View from '../../view';
import EditorView from '../editor/editor-view';
import levels from '../../../data/level-game';

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
        const editorCreator = new EditorView(levels);
        this.elementCreater.addInnerElement(tableCreator.getHtmlDocument());
        this.elementCreater.addInnerElement(editorCreator.getHtmlDocument());
    }
}
