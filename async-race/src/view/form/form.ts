import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import './form.css';

const CssStyles = {
MENU: 'menu',
CREATE_CAR: 'create-car',
CREATE_TEXT: 'create-text',
CREATE_COLOR: 'create-color',
BUTTON: 'button',
SWIPE: 'swipe',
}
const CREATE_BUTTON_TEXT = 'CREATE';
export default class FormView extends View {
    constructor() {
        const paramsForm = {
            tag: 'form',
            classNames: [CssStyles.MENU],
            textContent: '',
            callback: null,
        };
        super(paramsForm);
        this.configureView();
    }
    configureView = () => {
        const paramsConteiner = {
            tag: 'div',
            classNames: [CssStyles.CREATE_CAR],
            textContent: '',
            callback: null,
        };
        const containerCreator = new ElementCreater({ param: paramsConteiner });
        this.elementCreater.addInnerElement(containerCreator);

        const paramsInputText = {
            tag: 'input',
            classNames: [CssStyles.CREATE_TEXT],
            textContent: '',
            callback: null,
        };
        const inputTextCreator = new ElementCreater({ param: paramsInputText });
        inputTextCreator.addAttribute('id', 'create-text');
        inputTextCreator.addAttribute('type', 'text');
        containerCreator.addInnerElement(inputTextCreator);

        const paramsInputColor = {
            tag: 'input',
            classNames: [CssStyles.CREATE_COLOR],
            textContent: '',
            callback: null,
        };
        const colorInputCreator = new ElementCreater({ param: paramsInputColor });
        const Attributes = [{
            attribute: 'id',
            type: 'create-color',
        }, 
        {
            attribute: 'name',
            type: 'create-color',
        },
        {
            attribute: 'type',
            type: 'color',
        }];
        Attributes.forEach(element => {
            return colorInputCreator.addAttribute(element.attribute, element.type);
        });
        containerCreator.addInnerElement(colorInputCreator);

        const paramsCreateButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.SWIPE],
            textContent: CREATE_BUTTON_TEXT,
            callback: null,
        };
        const createButtonCreator = new ElementCreater({ param: paramsCreateButton });
        createButtonCreator.addAttribute('id', 'create-btn');
        containerCreator.addInnerElement(createButtonCreator);
    }
}