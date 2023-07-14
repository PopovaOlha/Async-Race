import View from '../../utils/view';
import './title.css';
const CssStyles = {
    TITLE: 'title',
};
export default class TitleView extends View {
    item!: HTMLSpanElement;
    constructor() {
        const paramsHeader = {
            tag: 'div',
            classNames: [CssStyles.TITLE],
            textContent: '',
            callback: null,
        };
        super(paramsHeader);
        this.addAnimation();
    }
    addAnimation = () => {
        const text = ['a', 's', 'y', 'n', 'c', 'r', 'a', 'c', 'e'];
        text.map((value: string, index: number) => {
            setTimeout(() => {
                this.item = document.createElement('span');
                this.item.classList.add('item');
                this.item.textContent = value.toUpperCase();
                this.elementCreater.addInnerElement(this.item);
            }, 1000 * index);
        });
    };
}
