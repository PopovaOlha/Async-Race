import View from '../view';
import TableView from '../table-wrapper/table-wrapper';

const CssStyles = {
    WRAPPER: 'wrapper',
    GAME: 'game',
    TABLE_WRAPPER: 'table-wrapper',
    TABLE_SURFACE: 'table-surface',
    NAMETAGS: 'nametags',
    TABLE: 'table',
    DANCE: 'dance',
    TABLE_ADGE: 'table-edge',
};

export default class WrapperView extends View {
    constructor() {
        const paramsWrapper = {
            tag: 'div',
            classNames: [CssStyles.WRAPPER],
            textContent: '',
            callback: null,
        };
        super(paramsWrapper);
        this.configureView();
    }
    public configureView() {
        const TableItems = [
            {
                StyleTable: [CssStyles.GAME],
                LinkName: 'div',
            },
            {
                StyleTable: [CssStyles.TABLE_WRAPPER],
                LinkName: 'div',
            },
            {
                StyleTable: [CssStyles.TABLE_SURFACE],
                LinkName: 'div',
            },
            {
                StyleTable: [CssStyles.NAMETAGS],
                LinkName: 'div',
            },
        ];
        TableItems.forEach((item) => {
            const tableElement = new TableView(item.LinkName, item.StyleTable);
            this.elementCreater.addInnerElement(tableElement.getHtmlDocument());
        });
    }
}
