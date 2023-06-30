// @ts-ignore
import hljs from 'highlight.js/lib/core';
// @ts-ignore
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import ElementCreater from "../util/element-creator";
import { DataLevels } from "../view/main/editor/editor-view";
import { ElementsParams } from '../util/element-creator';
import View from '../view/view';

hljs.registerLanguage('xml', xml);

const CssStyles = {
    LEVEL_HEADER: 'level-header',
}
export default class Level extends View {
    paramsLevelHeader!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    constructor(state: DataLevels[]) {
        const paramsLevelHeader = {
            tag: 'div',
            classNames: [CssStyles.LEVEL_HEADER],
            textContent: '',
            callback: null,
        };
        super(paramsLevelHeader);
    }
    isMenuActive = false;
    isPrintText = true;
    isGame = true;
    levelActive = Number(localStorage.getItem('levels')) || 0;
    editor: any;
    hljs = hljs;
    levels: any;
}