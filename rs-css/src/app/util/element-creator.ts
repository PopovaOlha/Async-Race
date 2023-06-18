/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ElementsParams } from '../../../index';

export class createElement {
    element!: HTMLElement;
    constructor({ params }: { params: ElementsParams }) {
        this.createElement({ params });
    }

    public createElement({ params }: { params: ElementsParams }): void {
        this.element = document.createElement(params.tag);
        this.addCssClasses(params.className);
        this.addText(params.textContent);
    }
    public getElement(): HTMLElement {
        return this.element;
    }
    public addCssClasses(cssClasses: Array<string>) {
        cssClasses.forEach((className) => this.element.classList.add(className));
    }
    public addText(text: string) {
        this.element.textContent = text;
    }
}
