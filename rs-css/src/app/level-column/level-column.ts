import './level-column.css';
import View from '../view/view';
import { ElementsParams } from '../util/element-creator';

const CssStyles = {
    LEVEL_COLUMN: 'level-column',
};

export default class LevelColumnView extends View {
    paramsLevelColumn!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor() {
        const paramsLevelColumn = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_COLUMN],
            textContent: '',
            callback: null,
        };
        super(paramsLevelColumn);
    }
}
