import HeaderView from './view/header/header-view/header-view';
import WrapperView from './view/wrapper/wrapper';

export default class App {
    constructor() {
        this.createView();
    }
    createView() {
        const headerView = new HeaderView();
        const wrapperView = new WrapperView();
        wrapperView.getHtmlDocument().append(headerView.getHtmlDocument());
        document.body.append(wrapperView.getHtmlDocument());
    }
}
