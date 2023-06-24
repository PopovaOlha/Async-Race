import './table-wrapper.css';
import ElementCreater, { ElementsParams } from '../../util/element-creator';
import View from '../view';
import TableContentView from '../table-content/table-content';

const CssStyles = {
    GAME_WRAPPER: 'game-wrapper',
    TABLE_WRAPPER: 'table-wrapper',
    TABLE_SURFACE: 'table-surface',
    NAMETAGS: 'nametags',
    TABLE: 'table',
    DANCE: 'dance',
    TABLE_ADGE: 'table-edge',
};
export default class TableView extends View {
    paramsGameWrapper!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor() {
        const paramsGameWrapper = {
            tag: 'div',
            classNames: [CssStyles.GAME_WRAPPER],
            textContent: '',
            callback: null,
        };
        super(paramsGameWrapper);
        this.configureView();
    }
    public configureView() {
        const paramsTableWrapper = {
            tag: 'div',
            classNames: [CssStyles.TABLE_WRAPPER],
            textContent: '',
            callback: null,
        };
        const creatorTableWrapper = new ElementCreater({ param: paramsTableWrapper });
        this.elementCreater.addInnerElement(creatorTableWrapper);

        const paramsTableSurface = {
            tag: 'div',
            classNames: [CssStyles.TABLE_SURFACE],
            textContent: '',
            callback: null,
        };
        const creatorTableSurface = new ElementCreater({ param: paramsTableSurface });
        creatorTableWrapper.addInnerElement(creatorTableSurface);

        const paramsNametags = {
            tag: 'div',
            classNames: [CssStyles.NAMETAGS],
            textContent: '',
            callback: null,
        };
        const creatorNametags = new ElementCreater({ param: paramsNametags });
        creatorTableWrapper.addInnerElement(creatorNametags);

        const paramsTable = {
            tag: 'div',
            classNames: [CssStyles.TABLE],
            textContent: '',
            callback: null,
        };
        const creatorTable = new ElementCreater({ param: paramsTable });
        creatorTableWrapper.addInnerElement(creatorTable);
        const ContentOfTable = [
            {
                className: [CssStyles.DANCE],
                tagName: 'plate',
            },
            {
                className: [CssStyles.DANCE],
                tagName: 'plate',
            },
        ];
        ContentOfTable.forEach((item) => {
            const creatorPlats = new TableContentView(item.tagName, item.className);
            creatorTable.addInnerElement(creatorPlats.getHtmlDocument());
        });
    }
}