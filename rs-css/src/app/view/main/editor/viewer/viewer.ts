import './viewer.css';
import View from '../../../view';
import ElementCreater from '../../../../util/element-creator';
import { ElementsParams } from '../../../../util/element-creator';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const CssStyles = {
    VIEWER: 'viewer',
    MDC_CARD: 'mdc-card',
    VIEWER_HEADER: 'viewer_header',
    VIEWER_HEADER_TEXT: 'viewer-header_text',
    VIEWER_MAIN: 'viewer_main',
    LINE_NUMBER: 'line-number',
    HTML_CODE: 'html-code',
    CODE: 'code',
};

const TITLE_VIEWER = 'HTML viewer';
const TITLE_INDEX_HTML = 'index.html';
export class ViewerView extends View {
    paramsViewer!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    currentElem: HTMLElement | null = null;
    HTMLCreator!: ElementCreater;
    lineNumberCreator!: ElementCreater;
    constructor() {
        const paramsOrder = {
            tag: 'div',
            classNames: [CssStyles.VIEWER, CssStyles.MDC_CARD],
            textContent: '',
            callback: null,
        };
        super(paramsOrder);
        this.configureView();
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
        this.HTMLCreator.getElement().append(this.getViewerCode());
        this.HTMLCreator.getElement()
            .querySelectorAll('.code')
            .forEach((block) => {
                this.hljs.highlightBlock(block);
            });
        viewerMainCreator.addInnerElement(this.HTMLCreator);
    }
    getHtmlElement = () => {
        return this.HTMLCreator.getElement();
    };

    getAttributes = (child: any) => {
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
        const div = document.createElement('div');
        div.classList.add('wrap');
        const openTag = `&lt${element.nodeName.toLocaleLowerCase()}${this.getAttributes(element)}>`;
        const closedTag = `&lt;/${element.nodeName.toLocaleLowerCase()}>`;
        if (element.children.length > 0) {
            const span = document.createElement('span');
            span.classList.add('code');
            span.innerHTML = `${openTag}`;
            div.append(span);
            for (let i = 0; i < element.children.length; i += 1) {
                div.append(this.getElementViewerCode(element.children[i].cloneNode(true)));
            }
            const secondSpan = document.createElement('span');
            secondSpan.classList.add('code');
            secondSpan.innerHTML = `${closedTag}`;
            div.append(secondSpan);
        } else {
            const thirdSpan = document.createElement('span');
            thirdSpan.classList.add('code');
            thirdSpan.innerHTML = `${openTag}${closedTag}`;
            div.append(thirdSpan);
        }
        return div;
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
}
