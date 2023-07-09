import './table-wrapper.css';
import ElementCreater from '../../../util/element-creator';
import { ElementsParams } from '../../../util/element-creator';
import View from '../../view';
import { TableContentView } from '../table-content/table-content';
import { LevelColumnView } from '../../../level-column/level-column';
import MainView from '../main-view/main';
import { ViewerView } from '../editor/viewer/viewer';

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
    UNANSWERED: 'unanswered',
    INCORRECT: 'incorrect',
    GAME_OVER: 'game-over',
};
export class TableView extends View {
    paramsGameWrapper!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    creatorTable!: ElementCreater;
    isPassedLevel = false;
    creatorUnswer!: ElementCreater;
    creatorIncorrect!: ElementCreater;
    creatorGameOver!: ElementCreater;
    constructor() {
        const paramsGameWrapper = {
            tag: 'div',
            classNames: [CssStyles.GAME_WRAPPER],
            textContent: '',
            callback: null,
        };
        super(paramsGameWrapper);
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
        creatorTableWrapper.addInnerElement(this.creatorTable);
        const paramsUnswer = {
            tag: 'div',
            classNames: [CssStyles.UNANSWERED],
            textContent: '',
            callback: null,
        };
        this.creatorUnswer = new ElementCreater({ param: paramsUnswer });
        const paramsIncorrect = {
            tag: 'div',
            classNames: [CssStyles.INCORRECT],
            textContent: '',
            callback: null,
        };
        this.creatorIncorrect = new ElementCreater({ param: paramsIncorrect });
        const paramsGameOver = {
            tag: 'div',
            classNames: [CssStyles.GAME_OVER],
            textContent: '',
            callback: null,
        };
        this.creatorGameOver = new ElementCreater({ param: paramsGameOver });
        this.creatorTable
            .getElement()
            .querySelectorAll('*')
            .forEach((item: Element) => {
                if (item.closest(this.levels[this.levelActive].selector)) {
                    if (item.tagName === 'BAT' || item.className === 'red') {
                        item.closest(`.table ${this.levels[this.levelActive].selector}`)?.classList.add('selected-bat');
                    } else if (item.tagName === 'PUMPKIN' || item.tagName === 'SKULL' || item.tagName === 'CASPER') {
                        item.closest(`.table ${this.levels[this.levelActive].selector}`)?.classList.add(
                            'selected-pumpkin'
                        );
                    } else {
                        item.closest(`.table ${this.levels[this.levelActive].selector}`)?.classList.add('dance');
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
                item.closest(`.table ${this.levels[this.levelActive].selector}`)
        );
        if (isElements) {
            this.creatorTable
                .getElement()
                .querySelectorAll('*')
                .forEach((item: Element) => {
                    if (item.closest(this.levels[this.levelActive].selector)) {
                        item.addEventListener('animationend', () => {
                            item.classList.add('animationed');
                            this.loudNewLewel();
                        });
                    }
                });
            this.setLocalStorageProgress();
            this.levelActive++;
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
        if (this.levelActive < this.levels.length - 1) {
            this.isGame = true;
            this.htmlCode.innerHTML = ``;
            this.isPrintText = true;
            this.htmlCode.append(new ViewerView().getViewerCode());
            this.htmlCode.querySelectorAll('.code').forEach((block) => {
                this.hljs.highlightBlock(block);
            });
            const headline: any = document.querySelector('.order');
            const tableView: any = document.querySelector('.table');
            tableView.innerHTML = `${this.levels[this.levelActive].boardMarkup}`;
            headline.innerHTML = `${this.levels[this.levelActive].doThis}`;

            new LevelColumnView().toggleListActives();
            localStorage.setItem('level', `${this.levelActive}`);
        } else {
            this.isGame = false;
            this.creatorTable.getElement().innerHTML = '';
        }
    };
    showWinningResult = (): void => {
        const objProgress = JSON.parse(localStorage.getItem('progress') as string);
        let countCorrect = 0;
        let countIncorrect = 0;
        Object.keys(objProgress).forEach((e) => {
            if (objProgress[e].correct) countCorrect += 1;
            if (objProgress[e].incorrect) countIncorrect += 1;
        });
        const win = document.createElement('div');
        win.classList.add('game-win');
        win.innerHTML = 'YOU WIN';
        const unanswered =
            this.levels.length - countCorrect - countIncorrect === 0
                ? ''
                : (this.creatorUnswer.getElement().innerHTML = `unanswered: ${
                      this.levels.length - countCorrect - countIncorrect
                  }`);
        const correct =
            countCorrect === 0 ? '' : (this.creatorIncorrect.getElement().innerHTML = `correct: ${countCorrect}`);
        const incorrect =
            countIncorrect === 0 ? '' : (this.creatorIncorrect.getElement().innerHTML = `wrong: ${countIncorrect}`);
        const result =
            countCorrect === this.levels.length
                ? win
                : (this.creatorGameOver.getElement().innerHTML = `${correct}, ${incorrect}, ${unanswered}`);
        this.creatorTable.getElement().append(result);
    };
}
