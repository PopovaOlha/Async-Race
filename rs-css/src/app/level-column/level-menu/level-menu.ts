import './level-menu.css';
import View from '../../view/view';
import levels from '../../data/level-game';
import ElementCreater from '../../util/element-creator';
import { ElementsParams } from '../../util/element-creator';
import { TableView } from '../../view/main/table-wrapper/table-wrapper';
import { LevelColumnView } from '../level-column';

const CssStyles = {
    LEVEL_MENU: 'level__menu',
    MDC_LIST: 'mdc-list',
    MDC_LIST_ITEM: 'mdc-list-item',
};

export class LevelMenuView extends View {
    paramsLevelMenu!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    levelActive = Number(localStorage.getItem('level')) || 0;
    listCreator!: ElementCreater;
    tableView!: TableView;
    levelColumn!: LevelColumnView;
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
    createMenuLevel = (): any => {
        for (let i = 0; i < levels.length; i += 1) {
            const liCreator = document.createElement('li');
            liCreator.classList.add(CssStyles.MDC_LIST_ITEM);
            liCreator.innerHTML = `<i class="material-icons mdc-list-item__graphic" aria-hidden="true">done</i><span class="mdc-list-item__ripple"></span>
<span class="mdc-list-item__text">${i + 1}.${levels[i].syntax}</span>`;
            liCreator.id = (i + 1).toString();
            liCreator.addEventListener('click', () => {
                this.levelActive = +liCreator.id - 1;
                new LevelColumnView().toggleMenu();
                new TableView().loudNewLewel();
            });
            this.listCreator.addInnerElement(liCreator);
            const objProgress = JSON.parse(localStorage.getItem('progress') as string) || {};
            this.listCreator.getElement().childNodes.forEach((item: any, i: number) => {
                item.classList.remove('mdc-list-item--activated');
                if (+item.id === this.levelActive + 1) item.classList.add('mdc-list-item--activated');
                item.children[0].classList.remove('not-passed', 'passed');
                if (objProgress[`${i}`]) {
                    if (objProgress[`${i}`].correct && !objProgress[`${i}`].incorrect) {
                        item.children[0].classList.add('passed');
                    }
                    if (objProgress[`${i}`].incorrect && !objProgress[`${i}`].correct) {
                        item.children[0].classList.add('not-passed');
                    }
                }
            });
        }
        return this.listCreator.getElement();
    };
}
