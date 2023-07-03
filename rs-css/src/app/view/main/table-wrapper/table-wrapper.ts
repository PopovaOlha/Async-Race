import './table-wrapper.css';
import ElementCreater, { ElementsParams } from '../../../util/element-creator';
import View from '../../view';
import TableContentView from '../table-content/table-content';
import { DataLevels } from '../editor/editor-view';
import levels from '../../../data/level-game';
import ViewerView from '../editor/viewer/viewer';
// @ts-ignore
import hljs from 'highlight.js/lib/core';
import HeadlineView from '../../header/headline/headline';
import LevelMenuView from '../../../level-column/level-menu/level-menu';
import LevelColumnView from '../../../level-column/level-column';

const CssStyles = {
    GAME_WRAPPER: 'game-wrapper',
    KITHEN_IMAGE: 'kitchen-image',
    TABLE_WRAPPER: 'table-wrapper',
    TABLE_SURFACE: 'table-surface',
    NAMETAGS: 'nametags',
    TABLE: 'table',
    DANCE: 'dance',
    TABLE_ADGE: 'table-edge',
    TABLE_LEG: 'table-leg',
};
export default class TableView extends View {
    paramsGameWrapper!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    creatorTable!: ElementCreater;
    levels!: DataLevels[];
    isPassedLevel = true;
    isMenuActive = false;
    isPrintText = true;
    isGame = true;
    levelActive = Number(localStorage.getItem('level')) || 0;
    editor: any;
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
            classNames: [CssStyles.TABLE],
            textContent: '',
            callback: null,
        };
        this.creatorTable = new ElementCreater({ param: paramsTable });
        creatorTableWrapper.addInnerElement(this.creatorTable);
        const ContentOfTable = [
            {
                className: [CssStyles.DANCE],
                tagName: 'plate',
            },
            {
                className: [CssStyles.DANCE],
                tagName: 'plate',
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
    getTableContent() {
        return this.creatorTable.getElement();
    }
    checkingResult = (): void => {
        const elementsTable = Array.prototype.slice.call(this.creatorTable.getElement().querySelectorAll('*'));
        const isElements = elementsTable.every(
            (item: Element) =>
                item.closest(`.table ${this.editor.getValue()}`) ===
                item.closest(`.table ${this.levels[this.levelActive].selector}`)
        );
        if (isElements) {
            this.creatorTable
                .getElement()
                .querySelectorAll('*')
                .forEach((item: Element) => {
                    if (item.closest(levels[this.levelActive].selector)) {
                        item.closest(`${levels[this.levelActive].selector}`).classList.add('win');
                        item.addEventListener('animationend', () => {
                            this.loudNewLewel();
                        });
                    }
                });
            this.setLocalStorageProgress();
            this.levelActive += 1;
            this.isPassedLevel = true;
        } else {
            this.elementCreater.getElement().classList.add('shake');
            this.elementCreater.getElement().addEventListener('animationend', () => {
                this.elementCreater.getElement().classList.remove('shake');
            });
        }
    };
    setLocalStorageProgress = (): void => {
        const progress = JSON.parse(localStorage.getItem('progress')) || {};
        const result =
            progress[`${this.levelActive}`] && progress[`${this.levelActive}`].correct
                ? progress
                : { ...progress, [this.levelActive]: { correct: this.isPassedLevel, incorrect: !this.isPassedLevel } };
        localStorage.setItem('progress', JSON.stringify(result));
    };
    loudNewLewel = (): void => {
        const htmlCode = new ViewerView().getHtmlDocument();
        if (this.levelActive < levels.length) {
            this.isGame = true;
            htmlCode.innerHTML = ``;
            this.editor.setValue('');
            this.editor.focus();
            this.isPrintText = true;
            htmlCode.append(new ViewerView().getViewerCode());
            htmlCode.querySelectorAll('.code').forEach((block) => {
                hljs.highlightBlock(block);
            });
            this.creatorTable.getElement().innerHTML = levels[this.levelActive].boardMarkup;
            this.creatorTable
                .getElement()
                .querySelectorAll('*')
                .forEach((item: Element) => {
                    if (item.closest(levels[this.levelActive].selector)) {
                        if (item.tagName === 'BAT' || item.className === 'red') {
                            item.closest(`.table ${levels[this.levelActive].selector}`).classList.add(
                                'selected-bat'
                            );
                        } else if (
                            item.tagName === 'PUMPKIN' ||
                            item.tagName === 'SKULL' ||
                            item.tagName === 'CASPER'
                        ) {
                            item.closest(`.table ${levels[this.levelActive].selector}`).classList.add(
                                'selected-pumpkin'
                            );
                        } else {
                            item.closest(`.table ${levels[this.levelActive].selector}`).classList.add(
                                'selected-element'
                            );
                        }
                    }
                });
            new LevelMenuView().getLevelMenu().removeChild(new LevelColumnView(levels).createLevelHelp());
            new LevelMenuView().getLevelMenu().append(new LevelColumnView(levels).createLevelHelp());
            this.toggleListActives();
            localStorage.setItem('level', `${this.levelActive}`);
        } else {
            this.isGame = false;
            this.editor.setValue('');
            this.creatorTable.getElement().innerHTML = '';
            this.showWinningResult();
        }
    };
}
