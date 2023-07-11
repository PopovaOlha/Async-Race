/* eslint-disable @typescript-eslint/no-unused-vars */
import ElementCreater from '../util/element-creator';
import { ElementsParams } from '../util/element-creator';
// @ts-ignore
import hljs from 'highlight.js/lib/core';
// @ts-ignore
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import { DataLevels } from '../view/main/editor/editor-view';
import levels from '../data/level-game';

hljs.registerLanguage('xml', xml);

export default abstract class View {
    isMenuActive = false;
    isPrintText = true;
    isGame = true;
    levelActive = 0;
    editor: any;
    hljs = hljs;
    levels: DataLevels[] = levels;
    elementCreater: ElementCreater;
    htmlCode: HTMLElement = document.createElement('div');
    listMenu: HTMLElement = document.createElement('div');
    container: HTMLElement = document.createElement('div');

    constructor(params: ElementsParams) {
        this.elementCreater = this.createView({ params });
    }
    public getHtmlDocument() {
        return this.elementCreater.getElement();
    }
    createView({ params }: { params: ElementsParams }): ElementCreater {
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: params.textContent,
            callback: params.callback,
        };
        const elementCreater = new ElementCreater({ param: params });
        return elementCreater;
    }
}
