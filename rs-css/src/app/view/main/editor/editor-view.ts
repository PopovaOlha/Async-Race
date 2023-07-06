import './editor.css';
import './codemirror/lib/codemirror.css';
import './codemirror/theme/neat.css';
import './codemirror/mode/css/css';
import './codemirror/addon/display/placeholder';
import './codemirror/theme/dracula.css';
import ElementCreater from '../../../util/element-creator';
import View from '../../view';
import { FormButtonView } from './editor-button/editor-button';
import levels from '../../../data/level-game';
import { TableView } from '../table-wrapper/table-wrapper';
import { ViewerView } from './viewer/viewer';

export interface DataLevels {
    helpTitle: string;
    selectorName?: string;
    doThis: string;
    selector?: string;
    syntax: string;
    help: string;
    examples?: string[];
    boardMarkup: string;
}

const TEXT_CSS_EDITOR = 'CSS Editor';
const TEXT_STYLE_CSS = 'style.css';

const CssStyles = {
    EDITOR: 'editor',
    CSS_PANEL: 'css-panel',
    PANEL_HEADER: 'panel_header',
    FORM_INPUT: 'form__input',
    PANEL_BUTTON: 'panel_button',
    EDITOR_MAIN: 'editor_main',
    FORM: 'form',
    BLINK: 'blink',
    CODEMIRROR: 'Codemirror',
    CM_S_DRACULA: 'cm-s-dracula',
    CODEMIRROR_EMPTY: 'Codemirror-empty',
    FORM_DIV: 'form-div',
    LINE_NUMBER: 'line-number',
    FORM_BUTTON_HELP: 'form__button-help',
    MDC_ICON_BUTTON: 'mdc-icon-button',
    MATERIALS_ICONS: 'material-icons',
};
const HELP_BUTTON_TEXCONTENT = 'help';
export class EditorView extends View {
    currentElem: HTMLElement | null = null;
    isPassedLevel = true;
    config = {
        theme: 'dracula',
        value: 'Type in a CSS selector',
        tabSize: 1,
        lineNumbers: false,
        mode: 'css',
    };
    formCreator!: ElementCreater | HTMLFormElement;
    textareaCreator!: ElementCreater | HTMLFormElement;
    lineNumberCreator!: ElementCreater;
    constructor() {
        const paramsEditor = {
            tag: 'div',
            classNames: [CssStyles.EDITOR],
            textContent: '',
            callback: null,
        };
        super(paramsEditor);
        this.levels = levels;
        this.configureView();
    }
    public configureView() {
        const paramsCssPanel = {
            tag: 'div',
            classNames: [CssStyles.CSS_PANEL],
            textContent: '',
            callback: null,
        };
        const cssPanelCreator = new ElementCreater({ param: paramsCssPanel });
        this.elementCreater.addInnerElement(cssPanelCreator);

        const paramsPanelHeader = {
            tag: 'div',
            classNames: [CssStyles.PANEL_HEADER],
            textContent: '',
            callback: null,
        };
        const panelHeader = new ElementCreater({ param: paramsPanelHeader });
        cssPanelCreator.addInnerElement(panelHeader);

        const paramsSpan = {
            tag: 'span',
            classNames: [],
            textContent: TEXT_CSS_EDITOR,
            callback: null,
        };
        const firstSpanCreator = new ElementCreater({ param: paramsSpan });
        panelHeader.addInnerElement(firstSpanCreator);

        const paramsSecondSpan = {
            tag: 'span',
            classNames: [],
            textContent: TEXT_STYLE_CSS,
            callback: null,
        };
        const secondSpanCreator = new ElementCreater({ param: paramsSecondSpan });
        panelHeader.addInnerElement(secondSpanCreator);

        const paramsEditorMain = {
            tag: 'div',
            classNames: [CssStyles.EDITOR_MAIN],
            textContent: '',
            callback: null,
        };
        const editorMainCreator = new ElementCreater({ param: paramsEditorMain });
        this.elementCreater.addInnerElement(editorMainCreator);
        const viewerCreator = new ViewerView();
        this.elementCreater.addInnerElement(viewerCreator.getHtmlDocument());

        const paramsForm = {
            tag: 'form',
            classNames: [CssStyles.FORM],
            textContent: '',
            callback: null,
        };
        this.formCreator = new ElementCreater({ param: paramsForm });
        editorMainCreator.addInnerElement(this.formCreator);

        const paramsTextArea = {
            tag: 'textarea',
            classNames: [CssStyles.FORM_INPUT, CssStyles.BLINK],
            textContent: '',
            callback: null,
        };
        this.textareaCreator = new ElementCreater({ param: paramsTextArea });
        this.textareaCreator.addAttribute('placeholder', 'tipe in a CSS selector');
        this.formCreator.addInnerElement(this.textareaCreator);

        const paramsCodemirror = {
            tag: 'div',
            classNames: [CssStyles.CODEMIRROR, CssStyles.CM_S_DRACULA, CssStyles.CODEMIRROR_EMPTY],
            textContent: '',
            callback: null,
        };
        const codemirrorCreator = new ElementCreater({ param: paramsCodemirror });
        this.formCreator.addInnerElement(codemirrorCreator);

        const paramsDiv = {
            tag: 'div',
            classNames: [CssStyles.FORM_DIV],
            textContent: '',
            callback: null,
        };
        const divCreator = new ElementCreater({ param: paramsDiv });
        codemirrorCreator.addInnerElement(divCreator);

        const formButtonCreator = new FormButtonView();
        formButtonCreator.elementCreater.addAttribute('type', 'submit');
        this.formCreator.addInnerElement(formButtonCreator.getHtmlDocument());

        const paramsHelpButton = {
            tag: 'button',
            classNames: [CssStyles.FORM_BUTTON_HELP, CssStyles.MDC_ICON_BUTTON, CssStyles.MATERIALS_ICONS],
            textContent: HELP_BUTTON_TEXCONTENT,
            callback: null,
        };
        const helpButtonCreator = new ElementCreater({ param: paramsHelpButton });
        helpButtonCreator.getElement().addEventListener('click', this.showAnswer);
        this.formCreator.addInnerElement(helpButtonCreator);

        this.formCreator.getElement().addEventListener('submit', (e: Event) => {
            e.preventDefault();
            if (this.isPrintText && this.isGame) {
                new TableView().checkingResult();
            }
        });

        this.textareaCreator.getElement().addEventListener('input', () => {
            return this.textareaCreator.getElement().value.length === 0
                ? this.textareaCreator.getElement().classList.add('blink')
                : this.textareaCreator.getElement().classList.remove('blink');
        });

        const paramsLineNumber = {
            tag: 'div',
            classNames: [CssStyles.LINE_NUMBER],
            textContent: '',
            callback: null,
        };
        this.lineNumberCreator = new ElementCreater({ param: paramsLineNumber });
        editorMainCreator.addInnerElement(this.lineNumberCreator);
        this.lineNumberCreator.getElement().innerHTML = `1`;
    }
    showAnswer = (): void => {
        if (this.isPrintText && this.isGame) {
            this.editor.setValue('');
            this.isPrintText = false;
            const arrayResponseLetters: string[] = levels[this.levelActive].selector.split('');
            this.textareaCreator.getElement().classList.remove('blink');
            let count = 0;
            const printText = (): void => {
                if (count === arrayResponseLetters.length) {
                    this.isPrintText = true;
                    return;
                }
                this.textareaCreator.getElement().value += arrayResponseLetters[count];
                this.editor.setValue(this.editor.getValue() + arrayResponseLetters[count]);
                count += 1;
                this.editor.focus();
                this.editor.setCursor(this.editor.lineCount(), 0);
                setTimeout(printText, 500);
            };
            printText();
            this.isPassedLevel = false;
        }
    };
}
