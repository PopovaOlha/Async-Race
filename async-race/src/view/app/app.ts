import HeaderView from '../header/header';
import MainView from '../main/main';

export default class App {
    constructor() {
        this.createView();
    }
    createView() {
        const headerView = new HeaderView();
        const mainView = new MainView();
        document.body.append(headerView.getHtmlDocument(), mainView.getHtmlDocument());
    }
}
