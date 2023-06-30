import './editor-button.css';
import View from '../../../view';
import { ElementsParams } from '../../../../util/element-creator';

const CssStyles = {
    FORM_BUTTON: 'form__button',
    MDC_BUTTON: 'mdc-button',
    MDS_BUTTON_RAISED: 'mdc-button--raised',
};

const BUTTON_TEXT = 'Enter';

export default class FormButtonView extends View {
    paramsFormButton!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor() {
        const paramsFormButton = {
            tag: 'button',
            classNames: [CssStyles.FORM_BUTTON, CssStyles.MDC_BUTTON, CssStyles.MDS_BUTTON_RAISED],
            textContent: BUTTON_TEXT,
            callback: null,
        };
        super(paramsFormButton);
    }
}
