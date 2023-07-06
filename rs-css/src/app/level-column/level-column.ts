import './level-column.css';
import View from '../view/view';
import ElementCreater from '../util/element-creator';
import { ElementsParams } from '../util/element-creator';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hljs from 'highlight.js/lib/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import { LevelMenuView } from './level-menu/level-menu';
import levels from '../data/level-game';
import { TableView } from '../view/main/table-wrapper/table-wrapper';
hljs.registerLanguage('xml', xml);

const CssStyles = {
    LEVEL_COLUMN: 'level-column',
    LEVEL: 'level',
    MDC_CARD: 'mdc-card',
    LEVEL_HEADER: 'level__header',
    MDC_TOP_APP: 'mdc-top-app-bar__row',
    MDC_BUTTON: 'level__header_button-menu',
    MDC_ICON_BUTTON: 'mdc-icon-button',
    MATERIAL_ICONS: 'material-icons',
    MDC_TOP_TITLE: 'mdc-top-app-bar__title',
    LEVEL_BUTTON_PREV: 'level__header_button-prev',
    LEVEL_BUTTON_NEXT: 'level__header_button-next',
    LEVEL_HELP: 'level__help',
    SELECTOR_NAME: 'selector-name',
    TITLE: 'title',
    SYNTAX: 'syntax',
    DESCRIPTION: 'description',
    RESET: 'reset',
    EXAMPLES: 'examples',
    EXAMPLE: 'example',
    LEVEL_MENU: 'level__menu',
    CHECK_MARK: 'check-mark',
    MDC_LIST_ITEM_GRAPHIC: 'mdc-list-item__graphic',
    CHECK: 'check',
};
const buttonMenuTextContent = 'close';
const CHECK_MARK_CONTENT = 'done';
const BUTTON_PREV_CONTENT = 'navigate_before';
const BUTTON_NEXT_CONTENT = 'navigate_next';
const BUTTON_TITLE = 'RESET';
let EXAMPLE_CONTENT: 'Examples';
const levelMenuCreator = new LevelMenuView();
const tableView = new TableView();
export class LevelColumnView extends View {
    paramsLevelColumn!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    levelHelpCreator!: ElementCreater;
    selectorNameCreator!: ElementCreater;
    selectorTitleCreator!: ElementCreater;
    selectorSyntaxCreator!: ElementCreater;
    selectorDescriptionCreator!: ElementCreater;
    selectorButtonCreator!: ElementCreater;
    selectorExampleCreator!: ElementCreater;
    selectorExamplesCreator!: ElementCreater;
    exampleCreator!: ElementCreater;
    appTittleCreater!: ElementCreater;
    levelHeaderCreater!: ElementCreater;
    examplesCreator!: ElementCreater;
    levelCreater!: ElementCreater;
    constructor() {
        const paramsLevelColumn = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_COLUMN],
            textContent: '',
            callback: null,
        };
        super(paramsLevelColumn);
        this.getConfigureView();
        this.toggleListActives();
        this.levels = levels;
    }
    getConfigureView() {
        const paramsLevel = {
            tag: 'div',
            classNames: [CssStyles.LEVEL, CssStyles.MDC_CARD],
            textContent: '',
            callback: null,
        };
        this.levelCreater = new ElementCreater({ param: paramsLevel });
        this.elementCreater.addInnerElement(this.levelCreater);
        const paramsLevelHeader = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_HEADER, CssStyles.MDC_TOP_APP],
            textContent: '',
            callback: null,
        };
        this.levelHeaderCreater = new ElementCreater({ param: paramsLevelHeader });
        this.levelCreater.addInnerElement(this.levelHeaderCreater);

        const paramsButtonMenu = {
            tag: 'button',
            classNames: [CssStyles.MDC_BUTTON, CssStyles.MDC_ICON_BUTTON, CssStyles.MATERIAL_ICONS],
            textContent: buttonMenuTextContent,
            callback: null,
        };

        const buttonMenuCreater = new ElementCreater({ param: paramsButtonMenu });
        this.levelHeaderCreater.addInnerElement(buttonMenuCreater);
        buttonMenuCreater.getElement().addEventListener('click', this.toggleMenu);

        const paramsAppTittle = {
            tag: 'span',
            classNames: [CssStyles.MDC_TOP_TITLE],
            textContent: '',
            callback: null,
        };

        this.appTittleCreater = new ElementCreater({ param: paramsAppTittle });
        this.appTittleCreater.getElement().textContent = `Level ${this.levelActive + 1} of ${levels.length}`;
        this.levelHeaderCreater.addInnerElement(this.appTittleCreater);

        const paramsCheckMark = {
            tag: 'i',
            classNames: [CssStyles.CHECK_MARK, CssStyles.MATERIAL_ICONS, CssStyles.MDC_LIST_ITEM_GRAPHIC, CssStyles.CHECK],
            textContent: CHECK_MARK_CONTENT,
            callback: null,
        };

        const checkMarkCreator = new ElementCreater({ param: paramsCheckMark });
        this.levelHeaderCreater.addInnerElement(checkMarkCreator);

        const paramsButPrev = {
            tag: 'button',
            classNames: [CssStyles.LEVEL_BUTTON_PREV, CssStyles.MDC_ICON_BUTTON, CssStyles.MATERIAL_ICONS],
            textContent: BUTTON_PREV_CONTENT,
            callback: null,
        };

        const butPrevCreater = new ElementCreater({ param: paramsButPrev });
        butPrevCreater.addAttribute('type', 'button');
        butPrevCreater.getElement().addEventListener('click', this.showPrevLevel);
        this.levelHeaderCreater.addInnerElement(butPrevCreater);

        const paramsButNext = {
            tag: 'button',
            classNames: [CssStyles.LEVEL_BUTTON_NEXT, CssStyles.MDC_ICON_BUTTON, CssStyles.MATERIAL_ICONS],
            textContent: BUTTON_NEXT_CONTENT,
            callback: null,
        };

        const butNextCreater = new ElementCreater({ param: paramsButNext });
        butNextCreater.addAttribute('type', 'button');
        butNextCreater.getElement().addEventListener('click', this.showNextLevel);
        this.levelHeaderCreater.addInnerElement(butNextCreater);

        this.levelHeaderCreater.addInnerElement(levelMenuCreator.getHtmlDocument());

        const paramsLevelHelp = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_HELP],
            textContent: '',
            callback: null,
        };
        this.levelHelpCreator = new ElementCreater({ param: paramsLevelHelp });
        this.levelCreater.addInnerElement(this.levelHelpCreator);

        const paramsSelectorName = {
            tag: 'h2',
            classNames: [CssStyles.SELECTOR_NAME],
            textContent: levels[this.levelActive].selectorName,
            callback: null,
        };
        this.selectorNameCreator = new ElementCreater({ param: paramsSelectorName });
        this.levelHelpCreator.addInnerElement(this.selectorNameCreator);
        const paramsTitle = {
            tag: 'h3',
            classNames: [CssStyles.TITLE],
            textContent: levels[this.levelActive].helpTitle,
            callback: null,
        };
        this.selectorTitleCreator = new ElementCreater({ param: paramsTitle });
        this.levelHelpCreator.addInnerElement(this.selectorTitleCreator);
        const paramsSyntax = {
            tag: 'h2',
            classNames: [CssStyles.SYNTAX],
            textContent: levels[this.levelActive].syntax,
            callback: null,
        };
        this.selectorSyntaxCreator = new ElementCreater({ param: paramsSyntax });
        this.levelHelpCreator.addInnerElement(this.selectorSyntaxCreator);
        const paramsDescription = {
            tag: 'p',
            classNames: [CssStyles.DESCRIPTION],
            textContent: levels[this.levelActive].help,
            callback: null,
        };
        this.selectorDescriptionCreator = new ElementCreater({ param: paramsDescription });
        this.levelHelpCreator.addInnerElement(this.selectorDescriptionCreator);
        const paramsReset = {
            tag: 'button',
            classNames: [CssStyles.RESET],
            textContent: BUTTON_TITLE,
            callback: null,
        };
        this.selectorButtonCreator = new ElementCreater({ param: paramsReset });
        this.selectorButtonCreator.addAttribute('type', 'button');
        this.selectorButtonCreator.getElement().addEventListener('click', this.reset);
        this.levelHelpCreator.addInnerElement(this.selectorButtonCreator);

        if (!levels[this.levelActive].examples) {
            const paramsExamples = {
                tag: 'h3',
                classNames: [CssStyles.EXAMPLES],
                textContent: EXAMPLE_CONTENT,
                callback: null,
            };
            this.examplesCreator = new ElementCreater({ param: paramsExamples });
            this.levelHelpCreator.addInnerElement(this.selectorExamplesCreator);
            levels[this.levelActive].examples?.forEach((el) => {
                const paramsExample = {
                    tag: 'div',
                    classNames: [CssStyles.EXAMPLE],
                    textContent: EXAMPLE_CONTENT,
                    callback: null,
                };
                this.exampleCreator = new ElementCreater({ param: paramsExample });
                this.selectorExampleCreator.setTextContent(el);
            }, this.levelHelpCreator.addInnerElement(this.selectorExampleCreator));
        }
    }
    getMdcCard = () => {
        return this.levelCreater.getElement();
    } 
    getLevelHeader = () => {
        return this.levelHeaderCreater.getElement();
    }
    getLevelHelp = () => {
        return this.levelHelpCreator.getElement();
    }
    toggleMenu = () => {
        this.isMenuActive = !this.isMenuActive;
        levelMenuCreator.getHtmlDocument().style.right = this.isMenuActive
            ? '0px'
            : `-${levelMenuCreator.getHtmlDocument().offsetWidth}px`;
        this.levelHeaderCreater.getElement().children[0].textContent = this.isMenuActive ? 'close' : 'menu';
    };
    toggleListActives = (): void => {
        this.levelHeaderCreater.getElement().children[2].classList.remove('not-passed', 'passed');
        this.appTittleCreater.getElement().textContent = `Level ${this.levelActive + 1} of ${levels.length}`;

        const objProgress = JSON.parse(localStorage.getItem('progress') as string) || {};
        if (objProgress[this.levelActive] && objProgress[this.levelActive].correct) {
            this.levelHeaderCreater.getElement().children[2].classList.add('passed');
        }
        if (objProgress[this.levelActive] && objProgress[this.levelActive].incorrect) {
            this.levelHeaderCreater.getElement().children[2].classList.add('not-passed');
        }
    };
    showPrevLevel = (): void => {
        if (this.levelActive > 0) {
            this.levelActive -= 1;
            tableView.loudNewLewel();
        }
    };
    showNextLevel = (): void => {
        if (+this.levelActive < this.levels.length - 1) {
            this.levelActive += 1;
            tableView.loudNewLewel();
        }
    };
    reset = (): void => {
        this.levelActive = 0;
        localStorage.clear();
        tableView.loudNewLewel();
    };
}
