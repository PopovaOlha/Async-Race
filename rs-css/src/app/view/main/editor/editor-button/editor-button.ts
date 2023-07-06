import './editor-button.css';
import View from '../../../view';
import ElementCreater from '../../../../util/element-creator';
import { ElementsParams } from '../../../../util/element-creator';

const CssStyles = {
    FORM_BUTTON: 'form__button',
    MDC_BUTTON: 'mdc-button',
    MDS_BUTTON_RAISED: 'mdc-button--raised',
    MDS_BUTTON_LABEL: 'mdc-button__label',
};

const BUTTON_TEXT = 'Enter';

export class FormButtonView extends View {
    paramsFormButton!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor() {
        const paramsFormButton = {
            tag: 'button',
            classNames: [CssStyles.FORM_BUTTON, CssStyles.MDC_BUTTON, CssStyles.MDS_BUTTON_RAISED],
            textContent: '',
            callback: null,
        };
        super(paramsFormButton);
        this.configureView();
    }
    public configureView() {
        const paramsButtonSpan = {
            tag: 'span',
            classNames: [CssStyles.MDS_BUTTON_LABEL],
            textContent: BUTTON_TEXT,
            callback: null,
        };
        const buttonSpanCreator = new ElementCreater({ param: paramsButtonSpan });
        this.elementCreater.addInnerElement(buttonSpanCreator);
    }
}
