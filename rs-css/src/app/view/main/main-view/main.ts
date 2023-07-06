import './main.css';
import { TableView } from '../table-wrapper/table-wrapper';
import View from '../../view';
import { EditorView } from '../editor/editor-view';
import ElementCreater from '../../../util/element-creator';
import { ViewerView } from '../editor/viewer/viewer';

const CssStyles = {
    MAIN: 'main',
    TOOLTIP: 'tooltip',
};
const viewerView = new ViewerView();
export default class MainView extends View {
    currentElem: HTMLElement | null = null;
    constructor() {
        const paramsMain = {
            tag: 'main',
            classNames: [CssStyles.MAIN],
            textContent: '',
            callback: null,
        };
        super(paramsMain);
        this.configeView();
    }
    configeView() {
        const tableCreator = new TableView();
        const editorCreator = new EditorView();
        this.elementCreater.addInnerElement(tableCreator.getHtmlDocument());
        this.elementCreater.addInnerElement(editorCreator.getHtmlDocument());

        const paramsTooltip = {
            tag: 'span',
            classNames: [CssStyles.TOOLTIP],
            textContent: '',
            callback: null,
        };
        const tooltipCreator = new ElementCreater({ param: paramsTooltip });
        this.elementCreater.addInnerElement(tooltipCreator);

        document.querySelector('.html-code')?.addEventListener('mouseover', (e: Event) => this.highlightElement(e));
        document.querySelector('.html-code')?.addEventListener('mouseout', (e: Event) => this.highlightElement(e));
    }
    showTooltip = (element: HTMLElement): void => {
        if (element.tagName) {
            const tooltipText = `<${element.tagName.toLocaleLowerCase()}${viewerView.getAttributes(
                element
            )}></${element.tagName.toLocaleLowerCase()}>`;
            const node = document.querySelector('.tooltip') as HTMLElement;
            node.classList.toggle('hidden');
            node.innerHTML = this.hljs.highlightAuto(tooltipText).value;
            node.style.left = `${element.getClientRects()[0].x}px`;
            node.style.top = `${element.getClientRects()[0].y - 70}px`;
        }
    };
    highlightElement = (e: any): void => {
        const htmlCode = document.querySelector('.html-code');
        const table = document.querySelector('.table');
        if (this.isGame) {
            const elementsCode = Array.prototype.slice.call(htmlCode?.querySelectorAll('div'));
            const elementsTable = Array.prototype.slice.call(table?.querySelectorAll('*'));
            const index = e.target.closest('.table')
                ? elementsTable.indexOf(e.target)
                : elementsCode.indexOf(e.target.closest('.wrap'));
            if (e.type === 'mouseover') {
                if (this.currentElem) return;
                this.currentElem = e.target;
                this.showTooltip(elementsTable[index]);
                elementsTable[index].dataset.hover = true;
                elementsCode[index].classList.add('bold');
            }
            if (e.type === 'mouseout') {
                if (!this.currentElem) return;
                elementsTable[index].removeAttribute('data-hover');
                elementsCode[index].classList.remove('bold');
                this.currentElem = null;
                this.showTooltip(elementsTable[index]);
            }
        }
    };
}
