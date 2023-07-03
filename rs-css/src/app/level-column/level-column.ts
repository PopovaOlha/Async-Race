import './level-column.css';
import View from '../view/view';
import ElementCreater, { ElementsParams } from '../util/element-creator';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hljs from 'highlight.js/lib/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import { DataLevels } from '../view/main/editor/editor-view';
import LevelMenuView from './level-menu/level-menu';
import levels from '../data/level-game';
hljs.registerLanguage('xml', xml);

const CssStyles = {
    LEVEL_COLUMN: 'level-column',
    LEVEL: 'level',
    MDC_CARD: 'mdc-card',
    LEVEL_HEADER: 'level__header',
    MDC_TOP_APP: 'mdc-top-app-bar__row',
    MDC_BUTTON: 'level__header_button-menu',
    MDC_ICON_BUTTON: 'mdc-icon-button',
    MDC_TOP_TITLE: 'mdc-top-app-bar__title',
    LEVEL_BUTTON_PREV: 'level__header_button-prev',
    LEVEL_BUTTON_NEXT: 'level__header_button-next',
    LEVEL_HELP: 'level__help',
    SELECTOR_NAME: 'selector-name',
    TITLE: 'title',
    SYNTAX: 'syntax',
    DESCRIPTION: 'description',
    RESET: 'RESET',
    EXAMPLES: 'examples',
    EXAMPLE: 'example',
};
const TITLE_TEXT = 'Level 1 of 10';
const appIconTextContent = `<i class="fa-solid fa-check"></i>`;
const buttonMenuTextContent = `<i class="fa-sharp fa-solid fa-bars"></i>`;
const BUTTON_PREV_CONTENT = `<i class="fa-solid fa-arrow-left"></i>`;
const BUTTON_NEXT_CONTENT = `<i class="fa-solid fa-arrow-right"></i>`;
const BUTTON_TITLE = 'Reset';
let EXAMPLE_CONTENT: 'Examples';

export default class LevelColumnView extends View {
    paramsLevelColumn!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    isMenuActive = false;
    isPrintText = true;
    isGame = true;
    levelActive = Number(localStorage.getItem('levels')) || 0;
    editor!: string;
    hljs = hljs;
    levels: DataLevels[];
    levelHelpCreator!: ElementCreater;
    selectorNameCreator!: ElementCreater;
    selectorTitleCreator!: ElementCreater;
    selectorSyntaxCreator!: ElementCreater;
    selectorDescriptionCreator!: ElementCreater;
    selectorButtonCreator!: ElementCreater;
    selectorExampleCreator!: ElementCreater;
    selectorExamplesCreator!: ElementCreater;
    exampleCreator!: ElementCreater;
    constructor(date: DataLevels[]) {
        const paramsLevelColumn = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_COLUMN],
            textContent: '',
            callback: null,
        };
        super(paramsLevelColumn);
        this.getConfigureView();
        this.levels = date;
    }
    getConfigureView() {
        const paramsLevel = {
            tag: 'div',
            classNames: [CssStyles.LEVEL, CssStyles.MDC_CARD],
            textContent: '',
            callback: null,
        };
        const levelCreater = new ElementCreater({ param: paramsLevel });
        this.elementCreater.addInnerElement(levelCreater);
        const paramsLevelHeader = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_HEADER, CssStyles.MDC_TOP_APP],
            textContent: '',
            callback: null,
        };
        const levelHeaderCreater = new ElementCreater({ param: paramsLevelHeader });
        levelCreater.addInnerElement(levelHeaderCreater);

        const paramsButtonMenu = {
            tag: 'button',
            classNames: [CssStyles.MDC_BUTTON, CssStyles.MDC_ICON_BUTTON],
            textContent: buttonMenuTextContent,
            callback: null,
        };

        const buttonMenuCreater = new ElementCreater({ param: paramsButtonMenu });
        levelHeaderCreater.addInnerElement(buttonMenuCreater);

        const paramsAppTittle = {
            tag: 'span',
            classNames: [CssStyles.MDC_TOP_TITLE],
            textContent: TITLE_TEXT,
            callback: null,
        };

        const appTittleCreater = new ElementCreater({ param: paramsAppTittle });
        levelHeaderCreater.addInnerElement(appTittleCreater);

        const paramsAppIcon = {
            tag: 'span',
            classNames: [],
            textContent: appIconTextContent,
            callback: null,
        };

        const appIconCreater = new ElementCreater({ param: paramsAppIcon });
        levelHeaderCreater.addInnerElement(appIconCreater);

        const paramsButPrev = {
            tag: 'button',
            classNames: [CssStyles.LEVEL_BUTTON_PREV],
            textContent: BUTTON_PREV_CONTENT,
            callback: null,
        };

        const butPrevCreater = new ElementCreater({ param: paramsButPrev });
        levelHeaderCreater.addInnerElement(butPrevCreater);

        const paramsButNext = {
            tag: 'button',
            classNames: [CssStyles.LEVEL_BUTTON_NEXT],
            textContent: BUTTON_NEXT_CONTENT,
            callback: null,
        };

        const butNextCreater = new ElementCreater({ param: paramsButNext });
        levelHeaderCreater.addInnerElement(butNextCreater);

        const levelMenuCreator = new LevelMenuView();
        levelHeaderCreater.addInnerElement(levelMenuCreator.getHtmlDocument());

        const paramsLevelHelp = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_HELP],
            textContent: '',
            callback: null,
        };
        this.levelHelpCreator = new ElementCreater({ param: paramsLevelHelp });
        levelCreater.addInnerElement(this.levelHelpCreator);

        const paramsTitle = {
            tag: 'h3',
            classNames: [CssStyles.TITLE],
            textContent: levels[this.levelActive].helpTitle,
            callback: null,
        };
        this.selectorTitleCreator = new ElementCreater({ param: paramsTitle });

        const paramsSyntax = {
            tag: 'h2',
            classNames: [CssStyles.SYNTAX],
            textContent: levels[this.levelActive].syntax,
            callback: null,
        };
        this.selectorSyntaxCreator = new ElementCreater({ param: paramsSyntax });

        const paramsDescription = {
            tag: 'p',
            classNames: [CssStyles.DESCRIPTION],
            textContent: levels[this.levelActive].help,
            callback: null,
        };
        this.selectorDescriptionCreator = new ElementCreater({ param: paramsDescription });

        const paramsReset = {
            tag: 'button',
            classNames: [CssStyles.RESET],
            textContent: BUTTON_TITLE,
            callback: null,
        };
        this.selectorButtonCreator = new ElementCreater({ param: paramsReset });

        const paramsExamples = {
            tag: 'h3',
            classNames: [CssStyles.EXAMPLES],
            textContent: EXAMPLE_CONTENT,
            callback: null,
        };
        this.exampleCreator = new ElementCreater({ param: paramsExamples });
    }
    createLevelHelp = (): HTMLElement => {
        this.levelHelpCreator.addInnerElement(this.selectorTitleCreator);
        this.levelHelpCreator.addInnerElement(this.selectorSyntaxCreator);
        this.levelHelpCreator.addInnerElement(this.selectorDescriptionCreator);
        this.levelHelpCreator.addInnerElement(this.selectorButtonCreator);
        this.levelHelpCreator.addInnerElement(this.exampleCreator);

        if (levels[this.levelActive].examples) {
            this.levelHelpCreator.addInnerElement(this.selectorExamplesCreator);
            levels[this.levelActive].examples?.forEach((el) => {
                return this.selectorExampleCreator.setTextContent(el);
            }, this.levelHelpCreator.addInnerElement(this.selectorExampleCreator));
        }
        return this.levelHelpCreator.getElement();
    };
}
