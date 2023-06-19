import HeaderView from './view/header/header-view';

export default class App {
    constructor() {
        this.createView();
    }
    createView() {
        const headerView = new HeaderView();
        document.body.append(headerView.getHtmlDocument());
    }
}
