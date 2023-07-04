import './level-menu.css';
import View from '../../view/view';
import levels from '../../data/level-game';
import ElementCreater, { ElementsParams } from '../../util/element-creator';
import { DataLevels } from '../../view/main/editor/editor-view';
import TableView from '../../view/main/table-wrapper/table-wrapper';
import LevelColumnView from '../level-column';

const CssStyles = {
    LEVEL_MENU: 'level__menu',
    MDC_LIST: 'mdc-list',
    MDC_LIST_ITEM: 'mdc-list-item',
};

export default class LevelMenuView extends View {
    paramsLevelMenu!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    levelActive = Number(localStorage.getItem('level')) || 0;
    levels: DataLevels[];
    listCreator!: ElementCreater;
    tableView!: TableView;
    isMenuActive!: false;
    constructor() {
        const paramsLevelMenu = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_MENU],
            textContent: '',
            callback: null,
        };
        super(paramsLevelMenu);
        this.configureView();
        this.levels = levels;
    }
    public configureView() {
        const paramsList = {
            tag: 'ul',
            classNames: [CssStyles.MDC_LIST],
            textContent: '',
            callback: null,
        };
        this.listCreator = new ElementCreater({ param: paramsList });
        this.elementCreater.addInnerElement(this.createMenuLevel());
    }
    createMenuLevel() {
        for (let i = 0; i < levels.length; i += 1) {
            const liCreator = document.createElement('li');
            liCreator.classList.add(CssStyles.MDC_LIST_ITEM);
            liCreator.innerHTML = `<i class="material-icons mdc-list-item__graphic" aria-hidden="true">done</i><span class="mdc-list-item__ripple"></span>
<span class="mdc-list-item__text">${i + 1}.${levels[i].syntax}</span>`;
            liCreator.id = (i + 1).toString();
            liCreator.addEventListener('click', () => {
                this.levelActive = +liCreator.id - 1;
                new LevelColumnView(levels).toggleMenu();
            });
            this.listCreator.addInnerElement(liCreator);
        }
        return this.listCreator;
    }
}
