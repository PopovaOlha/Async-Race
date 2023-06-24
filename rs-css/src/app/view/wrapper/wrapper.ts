import View from '../view';

const CssStyles = {
    WRAPPER: 'wrapper',
};

export default class WrapperView extends View {
    constructor() {
        const paramsWrapper = {
            tag: 'div',
            classNames: [CssStyles.WRAPPER],
            textContent: '',
            callback: null,
        };
        super(paramsWrapper);
    }
}
