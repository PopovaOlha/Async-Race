import '../editor/editor.css';
import ElementCreater from '../../util/element-creator';
import View from '../view';

const TEXT_CSS_EDITOR = 'CSS Editor';
const TEXT_STYLE_CSS = 'style.css';

const CssStyles = {
    EDITOR: 'editor',
    CSS_PANEL: 'css-panel',
    PANEL_HEADER: 'panel_header',
    PANEL_WINDOW: 'panel_window',
    PANEL_LINE_NUMBERS: 'panel-line_numbers',
    PANEL_INPUT: 'panel-input',
    PANEL_BUTTON: 'panel_button',
};
export default class EditorView extends View {
    constructor() {
        const paramsEditor = {
            tag: 'div',
            classNames: [CssStyles.EDITOR],
            textContent: '',
            callback: null,
        };
        super(paramsEditor);
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

        const paramsPanelWindow = {
            tag: 'div',
            classNames: [CssStyles.PANEL_WINDOW],
            textContent: '',
            callback: null,
        };
        const panelWindowCreator = new ElementCreater({ param: paramsPanelWindow });
        panelWindowCreator.getElement().innerHTML = `<div class="${CssStyles.PANEL_LINE_NUMBERS}">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>`;
        cssPanelCreator.addInnerElement(panelWindowCreator);

        const paramsTextArea = {
            tag: 'textarea',
            classNames: [CssStyles.PANEL_INPUT],
            textContent: '',
            callback: null,
        };
        const textareaCreator = new ElementCreater({ param: paramsTextArea });
        cssPanelCreator.addInnerElement(textareaCreator);
    }
}
