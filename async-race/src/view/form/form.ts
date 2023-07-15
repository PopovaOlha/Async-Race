import ElementCreater from '../../utils/element-creator';
import View from '../../utils/view';
import FormButtonsView from '../form-buttons/form-buttons';
import './form.css';

const CssStyles = {
MENU: 'menu',
CREATE_CAR: 'create-car',
CREATE_TEXT: 'create-text',
CREATE_COLOR: 'create-color',
BUTTON: 'button',
SWIPE: 'swipe',
UPDATE_CAR: 'update-car',
UPDATE_TEXT: 'update-text',
UPDATE_COLOR: 'update-color',
DISABLED: 'disabled',
}
const CREATE_BUTTON_TEXT = 'CREATE';
const UPDATE_BUTTON_TEXT = 'UPDATE';

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

        const paramsUpdateCar = {
            tag: 'div',
            classNames: [CssStyles.UPDATE_CAR],
            textContent: '',
            callback: null,
        };
        const updateCarCreator = new ElementCreater({ param: paramsUpdateCar });
        this.elementCreater.addInnerElement(updateCarCreator);

        const paramsSecondInput = {
            tag: 'input',
            classNames: [CssStyles.UPDATE_TEXT],
            textContent: '',
            callback: null,
        };
        const secondInputCreator = new ElementCreater({ param: paramsSecondInput });
        updateCarCreator.addInnerElement(secondInputCreator);

        const paramsSecondInputColor = {
            tag: 'input',
            classNames: [CssStyles.UPDATE_COLOR],
            textContent: '',
            callback: null,
        };
        const secondInputColorCreator = new ElementCreater({ param: paramsSecondInputColor });

        const SecondInputsAttributes = [{
            attribute: 'id',
            type: 'update-color',
        }, 
        {
            attribute: 'name',
            type: 'update-color',
        },
        {
            attribute: 'type',
            type: 'color',
        }];
        SecondInputsAttributes.forEach(element => {
            return secondInputColorCreator.addAttribute(element.attribute, element.type);
        });
        updateCarCreator.addInnerElement(secondInputColorCreator);

        const paramsUpdateButton = {
            tag: 'button',
            classNames: [CssStyles.BUTTON, CssStyles.SWIPE, CssStyles.DISABLED],
            textContent: UPDATE_BUTTON_TEXT,
            callback: null,
        };
        const updateButtonCreator = new ElementCreater({ param: paramsUpdateButton });
        if (this.disabled) {
            updateButtonCreator.getElement().classList.add('disabled');
          }
        updateCarCreator.addInnerElement(updateButtonCreator);

        const formButtonsCreator = new FormButtonsView();
        this.elementCreater.addInnerElement(formButtonsCreator.getHtmlDocument());
    }
}