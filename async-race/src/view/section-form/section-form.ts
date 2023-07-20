import View from '../../utils/view';
import FormView from '../form/form';
import WinnersTitle from '../winners-title/winners-title';
import './section-form.css';

const CssStyles = {
    SECTION_FORM: 'section-form',
}

export default class SectionForm extends View {
    constructor() {
        const paramsGenerateButton = {
            tag: 'section',
            classNames: [CssStyles.SECTION_FORM],
            textContent: '',
            callback: null,
        };
        super(paramsGenerateButton);
        this.configureView();
    }
    configureView = () => {
        const winnersTitle = new WinnersTitle();
        this.elementCreater.addInnerElement(winnersTitle.getHtmlDocument());

        const formView = new FormView();
        this.elementCreater.addInnerElement(formView.getHtmlDocument());
    }
}