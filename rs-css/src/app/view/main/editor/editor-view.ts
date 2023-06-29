import './editor.css';
import CodeMirror from 'codemirror';
import './codemirror/lib/codemirror.css';
import './codemirror/theme/neat.css';
import './codemirror/mode/css/css';
import './codemirror/addon/display/placeholder';
import './codemirror/theme/dracula.css';
import ElementCreater from '../../../util/element-creator';
import View from '../../view';

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
    FORM_INPUT: 'form-input',
    BLINK: 'blink',
    PANEL_BUTTON: 'panel_button',
    EDITOR_MAIN: 'editor_main',
    FORM: 'form',
    CODEMIRROR: 'Codemirror',
    CM_S_DRACULA: 'cm-s-dracula',
    CODEMIRROR_EMPTY: 'Codemirror-empty',
};
export default class EditorView extends View {
    currentElem: HTMLElement | null = null;

    isPassedLevel = true;

    config = {
        theme: 'dracula',
        value: 'Type in a CSS selector',
        tabSize: 1,
        lineNumbers: false,
        mode: 'css',
    };
    levels: DataLevels[];
    constructor(state: DataLevels[]) {
        const paramsEditor = {
            tag: 'div',
            classNames: [CssStyles.EDITOR],
            textContent: '',
            callback: null,
        };
        super(paramsEditor);
        this.levels = state;
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

        const paramsForm = {
            tag: 'form',
            classNames: [CssStyles.FORM],
            textContent: '',
            callback: null,
        };
        const formCreator = new ElementCreater({ param: paramsForm });
        editorMainCreator.addInnerElement(formCreator);

        const paramsTextArea = {
            tag: 'textarea',
            classNames: [CssStyles.FORM_INPUT, CssStyles.BLINK],
            textContent: '',
            callback: null,
        };
        const textareaCreator = new ElementCreater({ param: paramsTextArea });
        textareaCreator.addAttribute('placeholder', 'tipe in a CSS selector');
        formCreator.addInnerElement(textareaCreator);

        const paramsCodemirror = {
            tag: 'div',
            classNames: [CssStyles.CODEMIRROR, CssStyles.CM_S_DRACULA, CssStyles.CODEMIRROR_EMPTY],
            textContent: '',
            callback: null,
        };
        const codemirrorCreator = new ElementCreater({ param: paramsCodemirror });
        formCreator.addInnerElement(codemirrorCreator);
    }
}
