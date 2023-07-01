import './headline.css';
import View from '../../view';
import { ElementsParams } from '../../../util/element-creator';
import levels from '../../../data/level-game';
import { DataLevels } from '../../main/editor/editor-view';

const CssStyles = {
    ORDER: 'order',
};

export default class HeadlineView extends View {
    paramsOrder!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    levels!: DataLevels[];
    levelActive = Number(localStorage.getItem('level')) || 0;
    constructor() {
        const paramsOrder = {
            tag: 'div',
            classNames: [CssStyles.ORDER],
            textContent: '',
            callback: null,
        };
        super(paramsOrder);
        this.setContent();
        this.levels = levels;
    }
    public setContent() {
        levels.forEach(() => {
            this.elementCreater.getElement().innerHTML = levels[this.levelActive].doThis;
        });
    }
}
