import View from "../../utils/view";

export default class HeaderView extends View {
    constructor() {
        const paramsCol = {
            tag: 'div',
            classNames: [],
            textContent: '',
            callback: null,
        };
        super(paramsCol);
        this.configureView();
    }
    configureView = () => {
        
    }
}