export interface ElementsParams {
    tag: string;
    classNames: Array<string>;
    textContent: string;
    callback: unknown;
}
export default class ElementCreater {
    element!: HTMLElement;
    constructor(param: {
        param: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    }) {
        this.createsElement(param);
    }
    public createsElement({ param }: { param: ElementsParams }): void {
        this.element = document.createElement(param.tag);
        this.setCssStyles(param.classNames);
        this.setTextContent(param.textContent);
        this.setCallback({ callback: param.callback });
    }
    public getElement() {
        return this.element;
    }
    public setCssStyles(cssStyles: string[]) {
        cssStyles.map((className) => this.element.classList.add(className));
    }
    public setTextContent(text: string) {
        this.element.textContent = text;
    }
    public setCallback({ callback }: { callback: unknown }) {
        if (typeof callback === 'function') {
            this.element.addEventListener('click', (event) => callback(event));
        }
    }
}
