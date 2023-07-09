import './level-menu.css';
import View from '../../view/view';
import ElementCreater from '../../util/element-creator';
import { ElementsParams } from '../../util/element-creator';
import { TableView } from '../../view/main/table-wrapper/table-wrapper';
import { LevelColumnView } from '../level-column';

const CssStyles = {
    LEVEL_MENU: 'level__menu',
};

export class LevelMenuView extends View {
    paramsLevelMenu!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
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
        this.createMenuLevel();
    }
    createMenuLevel = (): any => {
        this.listMenu.classList.add('mdc-list');
        for (let i = 0; i < this.levels.length; i += 1) {
            const item = document.createElement('li');
            item.classList.add('mdc-list-item');
            item.id = (i + 1).toString();
            item.innerHTML = `<i class="material-icons mdc-list-item__graphic" aria-hidden="true">done</i><span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">${i + 1}.${this.levels[i].syntax}</span>`;
            this.listMenu.append(item);
            item.addEventListener('click', () => {
                this.levelActive = +item.id - 1;
                new TableView().loudNewLewel();
                new LevelColumnView().toggleMenu();
            });
            const objProgress = JSON.parse(localStorage.getItem('progress') as string) || {};
            this.listMenu.childNodes.forEach((item: any, i: number) => {
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
        this.elementCreater.addInnerElement(this.listMenu);
        return this.elementCreater.getElement();
    };
}
