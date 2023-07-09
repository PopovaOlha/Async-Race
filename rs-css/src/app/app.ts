import { LevelColumnView } from './level-column/level-column';
import HeaderView from './view/header/header-view/header-view';
import WrapperView from './view/wrapper/wrapper';
import '../images/3534508.png';
import { EditorView } from '../../src/app/view/main/editor/editor-view';
import { TableView } from './view/main/table-wrapper/table-wrapper';

export default class App {
    constructor() {
        this.createView();
    }
    createView() {
        const headerView = new HeaderView();
        const levelColumnView = new LevelColumnView();
        const wrapperView = new WrapperView();
        wrapperView.getHtmlDocument().append(headerView.getHtmlDocument(), levelColumnView.getHtmlDocument());
        document.body.append(wrapperView.getHtmlDocument());
        new EditorView().createCodeMirrorTextaria();
        new TableView().loudNewLewel();
    }
}
