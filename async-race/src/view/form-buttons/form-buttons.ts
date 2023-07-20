import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import './form-buttons.css';

const CssStyles = {
    RACE_CONTROLS: 'race-controls',
    BUTTON: 'button',
    DISABLED: 'disabled',
    LINK: 'link',
    RESET: 'reset',
    RACE: 'race',
    GENERATE_CARS: 'generate-cars',

};
const RACE_BUTTON_TEXT = 'RACE';
const RESET_BUTTON_TEXT = 'RESET';
const GENERATE_BUTTON_TEXT = 'GENERATE CARS';

export default class FormButtonsView extends View {
    constructor() {
        const paramsFormButtons = {
            tag: 'div',
            classNames: [CssStyles.RACE_CONTROLS],
            textContent: '',
            callback: null,
        };
        super(paramsFormButtons);
        this.configureView();
    }
    configureView = () => {
        const paramsRaceButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.LINK, CssStyles.RACE],
            textContent: RACE_BUTTON_TEXT,
            callback: null,
        };

        const raceButtonCreator = new ElementCreater({ param: paramsRaceButton });
        this.elementCreater.addInnerElement(raceButtonCreator);

        const paramsResetButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.LINK, CssStyles.RESET],
            textContent: RESET_BUTTON_TEXT,
            callback: null,
        };
        const resetButtonCreator = new ElementCreater({ param: paramsResetButton });
        resetButtonCreator.addAttribute('disabled', 'disabled');
        resetButtonCreator;
        this.elementCreater.addInnerElement(resetButtonCreator);

        const paramsGenerateButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.LINK, CssStyles.GENERATE_CARS],
            textContent: GENERATE_BUTTON_TEXT,
            callback: null,
        };
        const generateButtonCreator = new ElementCreater({ param: paramsGenerateButton });
        this.elementCreater.addInnerElement(generateButtonCreator);
    };
}
