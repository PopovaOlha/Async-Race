const levels = [
    {
        helpTitle: 'Select elements by their type',
        selectorName: 'Type Selector',
        doThis: 'Select the plate',
        selector: 'plate',
        syntax: 'A',
        help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
         <plate></plate>
         <plate></plate>
      `,
    },
    {
        doThis: 'Select the bento boxes',
        selector: 'bento',
        syntax: 'A',
        helpTitle: 'Select elements by their type',
        selectorName: 'Type Selector',
        help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `<div class="table">
        <bento />
        <plate />
        <bento />
        </div>`,
    },
    {
        doThis: 'Select the fancy plate',
        selector: '#fancy',
        selectorName: 'ID Selector',
        helpTitle: 'Select elements with an ID',
        syntax: '#id',
        help: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
        examples: [
            '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
            '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
        ],
        boardMarkup: `<div class="table">
        <plate id="fancy" />
        <plate />
        <bento />
        </div>`,
    },
    {
        helpTitle: 'Select an element inside another element',
        selectorName: '',
        doThis: 'Select the apple on the plate',
        selector: 'plate apple',
        syntax: 'A&nbsp;&nbsp;B',
        help: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
            '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
        ],
        boardMarkup: `<div class="table">
        <bento />
        <plate>
        <apple />
        </plate>
        <apple />
        </div>`,
    },
    {
        doThis: 'Select the pickle on the fancy plate',
        selector: '#fancy pickle',
        helpTitle: 'Combine the Descendant & ID Selectors',
        syntax: '#id&nbsp;&nbsp;A',
        help: 'You can combine any selector with the descendent selector.',
        examples: [
            '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>',
        ],
        boardMarkup: `<div class="table">
        <bento>
        <orange />
        </bento>
        <plate id="fancy">
        <pickle />
        </plate>
        <plate>
        <pickle />
        </plate>
        </div>`,
    },
    {
        doThis: 'Select the small apples',
        selector: '.small',
        selectorName: 'Class Selector',
        helpTitle: 'Select elements by their class',
        syntax: '.classname',
        help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
        examples: ['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],
        boardMarkup: `<div class="table">
        <apple />
        <apple class="small" />
        <plate>
        <apple class="small" />
        </plate>
        <plate />
        </div>`,
    },
    {
        doThis: 'Select the small oranges',
        selector: 'orange.small',
        helpTitle: 'Combine the Class Selector',
        syntax: 'A.className',
        help: 'You can combine the class selector with other selectors, like the type selector.',
        examples: [
            '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
            '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>',
        ],
        boardMarkup: `<div class="table">
        <apple />
        <apple class="small" />
        <bento>
        <orange class="small" />
        </bento>
        <plate>
        <orange />
        </plate>
        <plate>
        <orange class="small" />
        </plate>
        </div>`,
    },
    {
        doThis: 'Select the small oranges in the bentos',
        selector: 'bento orange.small',
        syntax: 'Put your back into it!',
        helpTitle: 'You can do it...',
        help: 'Combine what you learned in the last few levels to solve this one!',
        boardMarkup: `<div class="table">
        <bento>
        <orange />
        </bento>
        <orange class="small" />
        <bento>
        <orange class="small" />
        </bento>
        <bento>
        <apple class="small" />
        </bento>
        <bento>
        <orange class="small" />
        </bento>
        </div>`,
    },
    {
        doThis: 'Select all the plates and bentos',
        selector: 'plate, bento',
        selectorName: 'Comma Combinator',
        helpTitle: 'Combine, selectors, with... commas!',
        syntax: 'A, B',
        help: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
        examples: [
            '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
            '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
        ],
        boardMarkup: `<div class="table">
        <pickle class="small" />
        <pickle />
        <plate>
        <pickle />
        </plate>
        <bento>
        <pickle />
        </bento>
        <plate>
        <pickle />
        </plate>
        <pickle />
        <pickle class="small" />
        </div>`,
    },
    {
        doThis: 'Select all the things!',
        selector: '*',
        selectorName: 'The Universal Selector',
        helpTitle: 'You can select everything!',
        syntax: '*',
        help: 'You can select all elements with the universal selector! ',
        examples: ['<strong>p *</strong> selects any element inside all <tag>p</tag> elements.'],
        boardMarkup: `<div class="table">
        <apple />
        <plate>
        <orange class="small" />
        </plate>
        <bento />
        <bento>
        <orange />
        </bento>
        <plate id="fancy" />
        </div>`,
    },
];
export default levels;