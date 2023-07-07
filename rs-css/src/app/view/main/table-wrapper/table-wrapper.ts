import './table-wrapper.css';
import ElementCreater from '../../../util/element-creator';
import { ElementsParams } from '../../../util/element-creator';
import View from '../../view';
import { TableContentView } from '../table-content/table-content';
import levels from '../../../data/level-game';
import HeadlineView from '../../header/headline/headline';
import { LevelColumnView } from '../../../level-column/level-column';
import MainView from '../main-view/main';
import { LevelMenuView } from '../../../level-column/level-menu/level-menu';

const CssStyles = {
    GAME_WRAPPER: 'game-wrapper',
    KITHEN_IMAGE: 'kitchen-image',
    TABLE_WRAPPER: 'table-wrapper',
    TABLE_SURFACE: 'table-surface',
    NAMETAGS: 'nametags',
    TABLE: 'table',
    MDC_CARD: 'mdc-card',
    DANCE: 'dance',
    TABLE_ADGE: 'table-edge',
    TABLE_LEG: 'table-leg',
};
export class TableView extends View {
    paramsGameWrapper!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    creatorTable!: ElementCreater;
    isPassedLevel = false;
    htmlCode!: ElementCreater;
    constructor() {
        const paramsGameWrapper = {
            tag: 'div',
            classNames: [CssStyles.GAME_WRAPPER],
            textContent: '',
            callback: null,
        };
        super(paramsGameWrapper);
        this.levels = levels;
        this.configureView();
    }
    public configureView() {
        const paramsTableWrapper = {
            tag: 'div',
            classNames: [CssStyles.TABLE_WRAPPER],
            textContent: '',
            callback: null,
        };
        const creatorTableWrapper = new ElementCreater({ param: paramsTableWrapper });
        this.elementCreater.addInnerElement(creatorTableWrapper);

        const paramsTableSurface = {
            tag: 'div',
            classNames: [CssStyles.TABLE_SURFACE],
            textContent: '',
            callback: null,
        };
        const creatorTableSurface = new ElementCreater({ param: paramsTableSurface });
        creatorTableWrapper.addInnerElement(creatorTableSurface);

        const paramsNametags = {
            tag: 'div',
            classNames: [CssStyles.NAMETAGS],
            textContent: '',
            callback: null,
        };
        const creatorNametags = new ElementCreater({ param: paramsNametags });
        creatorTableWrapper.addInnerElement(creatorNametags);

        const paramsTable = {
            tag: 'div',
            classNames: [CssStyles.TABLE, CssStyles.MDC_CARD],
            textContent: '',
            callback: null,
        };
        this.creatorTable = new ElementCreater({ param: paramsTable });
        this.creatorTable
            .getElement()
            .querySelectorAll('*')
            .forEach((item: Element) => {
                if (item.closest(levels[this.levelActive].selector)) {
                    if (item.tagName === 'BAT' || item.className === 'red') {
                        item.closest(`.table ${levels[this.levelActive].selector}`)?.classList.add('selected-bat');
                    } else if (item.tagName === 'PUMPKIN' || item.tagName === 'SKULL' || item.tagName === 'CASPER') {
                        item.closest(`.table ${levels[this.levelActive].selector}`)?.classList.add('selected-pumpkin');
                    } else {
                        item.closest(`.table ${levels[this.levelActive].selector}`)?.classList.add('dance');
                    }
                }
            });
        this.creatorTable.getElement().addEventListener('mouseover', (e: any) => {
            if (e.target.className !== 'table mdc-card') {
                new MainView().highlightElement(e);
            }
        });
        this.creatorTable.getElement().addEventListener('mouseout', (e: any) => {
            if (e.target.className !== 'table mdc-card') {
                new MainView().highlightElement(e);
            }
        });
        creatorTableWrapper.addInnerElement(this.creatorTable);
        const ContentOfTable = [
            {
                className: [CssStyles.DANCE],
                tagName: 'PLATES',
            },
            {
                className: [CssStyles.DANCE],
                tagName: 'PLATES',
            },
        ];
        ContentOfTable.forEach((item) => {
            const creatorPlats = new TableContentView(item.tagName, item.className);
            this.creatorTable.addInnerElement(creatorPlats.getHtmlDocument());
        });

        const paramsTableAdge = {
            tag: 'div',
            classNames: [CssStyles.TABLE_ADGE],
            textContent: '',
            callback: null,
        };
        const creatorTableAdge = new ElementCreater({ param: paramsTableAdge });
        this.elementCreater.addInnerElement(creatorTableAdge);

        const paramsTableLeg = {
            tag: 'div',
            classNames: [CssStyles.TABLE_LEG],
            textContent: '',
            callback: null,
        };
        const creatorLeftLeg = new ElementCreater({ param: paramsTableLeg });
        const creatorRightLeg = new ElementCreater({ param: paramsTableLeg });
        creatorTableAdge.addInnerElement(creatorLeftLeg);
        creatorTableAdge.addInnerElement(creatorRightLeg);
    }
    getTableContent = () => {
        return this.creatorTable.getElement();
    };
    checkingResult = (): void => {
        const elementsTable = Array.prototype.slice.call(this.creatorTable.getElement().querySelectorAll('*'));
        const isElements = elementsTable.every(
            (item: Element) =>
                item.closest(`.table ${this.editor.getValue()}`) ===
                item.closest(`.table ${levels[this.levelActive].selector}`)
        );
        if (isElements) {
            this.creatorTable
                .getElement()
                .querySelectorAll('*')
                .forEach((item: Element) => {
                    if (item.closest(levels[this.levelActive].selector)) {
                        item.addEventListener('animationend', () => {
                            item.classList.add('animationed');
                            this.loudNewLewel();
                        });
                    }
                });
            this.setLocalStorageProgress();
            this.levelActive += 1;
            this.isPassedLevel = true;
        } else {
            document.querySelector('.editor')?.classList.add('shake');
            document.querySelector('.editor')?.addEventListener('animationend', () => {
                document.querySelector('.editor')?.classList.remove('shake');
            });
        }
    };
    setLocalStorageProgress = (): void => {
        const progress = JSON.parse(localStorage.getItem('progress') as string) || {};
        const result =
            progress[`${this.levelActive}`] && progress[`${this.levelActive}`].correct
                ? progress
                : { ...progress, [this.levelActive]: { correct: this.isPassedLevel, incorrect: !this.isPassedLevel } };
        localStorage.setItem('progress', JSON.stringify(result));
    };
    loudNewLewel = (): void => {
        const levelColumn = new LevelColumnView();
        const headLine = new HeadlineView();
        if (this.levelActive < levels.length) {
            this.isGame = true;
            this.isPrintText = true;
            this.creatorTable.getElement().innerText = levels[this.levelActive].boardMarkup;
            headLine.getHtmlDocument().innerHTML = levels[this.levelActive].doThis;

            levelColumn.getLevelColumn().removeChild(levelColumn.getLevelHeader());
            levelColumn.getLevelColumn().append(levelColumn.getLevelHelpCreator());
            levelColumn.toggleListActives();
            localStorage.setItem('level', `${this.levelActive}`);
        } else {
            this.isGame = false;
            this.creatorTable.getElement().innerHTML = '';
        }
    };
}
