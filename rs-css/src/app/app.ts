import { LevelColumnView } from './level-column/level-column';
import HeaderView from './view/header/header-view/header-view';
import WrapperView from './view/wrapper/wrapper';
import levels from './data/level-game';
import '../images/3534508.png';

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
    }
}
