import './viewer.css';
import View from '../../../view';
import ElementCreater, { ElementsParams } from '../../../../util/element-creator';
import levels from '../../../../data/level-game';
import { DataLevels } from '../../editor/editor-view';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hljs from 'highlight.js/lib/core';
import TableView from '../../table-wrapper/table-wrapper';

const CssStyles = {
    VIEWER: 'viewer',
    MDC_CARD: 'mdc-card',
    VIEWER_HEADER: 'viewer_header',
    VIEWER_HEADER_TEXT: 'viewer-header_text',
    VIEWER_MAIN: 'viewer_main',
    LINE_NUMBER: 'line-number',
    HTML_CODE: 'html-code',
    WRAP: 'wrap',
    CODE: 'code',
};

const TITLE_VIEWER = 'HTML viewer';
const TITLE_INDEX_HTML = 'index.html';

export default class ViewerView extends View {
    paramsViewer!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    currentElem: HTMLElement | null = null;
    levels!: DataLevels[];
    levelActive = Number(localStorage.getItem('level')) || 0;
    HTMLCreator!: ElementCreater;
    lineNumberCreator!: ElementCreater;
    wrapCreator!: ElementCreater;
    spanTagCreator!: ElementCreater;
    isPassedLevel = true;
    isMenuActive = false;
    isPrintText = true;
    isGame = true;
    editor!: string;
    hljs = hljs;
    constructor() {
        const paramsOrder = {
            tag: 'div',
            classNames: [CssStyles.VIEWER, CssStyles.MDC_CARD],
            textContent: '',
            callback: null,
        };
        super(paramsOrder);
        this.configureView();
        this.levels = levels;
    }
    public configureView() {
        const paramsHeaderViewer = {
            tag: 'div',
            classNames: [CssStyles.VIEWER_HEADER],
            textContent: '',
            callback: null,
        };
        const headerViewerCreator = new ElementCreater({ param: paramsHeaderViewer });
        this.elementCreater.addInnerElement(headerViewerCreator);

        const paramsLeftTitle = {
            tag: 'span',
            classNames: [CssStyles.VIEWER_HEADER_TEXT],
            textContent: TITLE_VIEWER,
            callback: null,
        };
        const leftTitlerCreator = new ElementCreater({ param: paramsLeftTitle });
        headerViewerCreator.addInnerElement(leftTitlerCreator);

        const paramsRightTitle = {
            tag: 'span',
            classNames: [CssStyles.VIEWER_HEADER_TEXT],
            textContent: TITLE_INDEX_HTML,
            callback: null,
        };
        const rightTitlerCreator = new ElementCreater({ param: paramsRightTitle });
        headerViewerCreator.addInnerElement(rightTitlerCreator);

        const paramsViewerMain = {
            tag: 'div',
            classNames: [CssStyles.VIEWER_MAIN],
            textContent: '',
            callback: null,
        };
        const viewerMainCreator = new ElementCreater({ param: paramsViewerMain });
        this.elementCreater.addInnerElement(viewerMainCreator);

        const paramsLineNumber = {
            tag: 'div',
            classNames: [CssStyles.LINE_NUMBER],
            textContent: '',
            callback: null,
        };
        this.lineNumberCreator = new ElementCreater({ param: paramsLineNumber });
        viewerMainCreator.addInnerElement(this.lineNumberCreator);
        for (let i = 0; i < 14; i += 1) {
            this.lineNumberCreator.getElement().innerHTML += `${i + 1}<br>`;
        }

        const paramsHTML = {
            tag: 'div',
            classNames: [CssStyles.HTML_CODE],
            textContent: '',
            callback: null,
        };
        this.HTMLCreator = new ElementCreater({ param: paramsHTML });
        viewerMainCreator.addInnerElement(this.HTMLCreator);

        this.HTMLCreator.getElement().addEventListener('mouseover', (e: Event) => this.highlightElement(e));
        this.HTMLCreator.getElement().addEventListener('mouseout', (e: Event) => this.highlightElement(e));

        const paramsWrap = {
            tag: 'div',
            classNames: [CssStyles.WRAP],
            textContent: '',
            callback: null,
        };
        this.wrapCreator = new ElementCreater({ param: paramsWrap });
        this.HTMLCreator.addInnerElement(this.wrapCreator);

        const paramsSpanTag = {
            tag: 'span',
            classNames: [CssStyles.CODE],
            textContent: '',
            callback: null,
        };
        this.spanTagCreator = new ElementCreater({ param: paramsSpanTag });
        this.wrapCreator.addInnerElement(this.spanTagCreator);
    }
    getHtmlElement() {
        return this.spanTagCreator.getElement();
    }

    getAttributes = function (child: any): string {
        let childClass;
        if (child.attributes.class) {
            childClass = child.attributes.class.value
                .split(' ')
                .filter((e: string) => e !== 'dance' && e !== 'selected-bat' && e !== 'selected-pumpkin')
                .join('');
        }
        const childId = child.attributes.getNamedItem('id');
        const attributes = `${childClass ? ` class="${childClass}"` : ''}${
            childId && childId.value ? ` id="${childId.value}"` : ''
        }`;
        return attributes;
    };

    getElementViewerCode = (element: any): HTMLElement => {
        const openTag = `&lt${element.nodeName.toLocaleLowerCase()}${this.getAttributes(element)}>`;
        const closedTag = `&lt;/${element.nodeName.toLocaleLowerCase()}>`;
        if (element.children.length > 0) {
            this.spanTagCreator.setTextContent(openTag);
            this.wrapCreator.addInnerElement(this.spanTagCreator);
            for (let i = 0; i < element.children.length; i += 1) {
                this.wrapCreator.addInnerElement(this.getElementViewerCode(element.children[i].cloneNode(true)));
            }
            this.spanTagCreator.setTextContent(closedTag);
            this.wrapCreator.addInnerElement(this.spanTagCreator);
        } else {
            this.spanTagCreator.setTextContent(`${openTag}${closedTag}`);
            this.wrapCreator.addInnerElement(this.spanTagCreator);
        }
        return this.wrapCreator.getElement();
    };

    getViewerCode = (): DocumentFragment => {
        const result = document.createDocumentFragment();
        const container = document.createElement('div');
        container.innerHTML = this.levels[this.levelActive].boardMarkup;
        container.childNodes.forEach((element: Node) => {
            if (element.nodeType === 1) result.append(this.getElementViewerCode(element));
        });
        return result;
    };
    showTooltip = (element: HTMLElement): void => {
        if (element.tagName) {
            const tooltipText = `<${element.tagName.toLocaleLowerCase()}${this.getAttributes(
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
        if (this.isGame) {
            const elementsCode = Array.prototype.slice.call(this.HTMLCreator.getElement().querySelectorAll('div'));
            const elementsTable = Array.prototype.slice.call(new TableView().getTableContent().querySelectorAll('*'));
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