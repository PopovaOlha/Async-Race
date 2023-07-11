const levels = [
    {
        helpTitle: 'Select elements by their type',
        selectorName: 'Type Selector',
        doThis: 'Select the plates',
        selector: 'plates',
        syntax: 'A',
        help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
             <plates></plates>
             <plates></plates>
          `,
    },
    {
        doThis: 'Select the napkins',
        selectorName: 'Type Selector',
        helpTitle: 'Select elements by their type',
        selector: 'napkin',
        syntax: 'A',
        help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
          <napkin></napkin>
          <pumpkin></pumpkin>
          <napkin></napkin>
          `,
    },
    {
        doThis: 'Select the fancy plate',
        selectorName: 'ID Selector',
        helpTitle: 'Select elements with an ID',
        selector: '#fancy',
        syntax: 'id',
        help: 'Selects the elуment with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
        examples: [
            '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
            '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
        ],
        boardMarkup: `
            <plates id="fancy"></plates>
            <plates></plates>
            <napkin></napkin>
          `,
    },
    {
        helpTitle: 'Select an element inside another element',
        selectorName: 'Descendant Selector',
        doThis: 'Select the apple on the plate',
        selector: 'apple',
        syntax: 'A&nbsp;&nbspB',
        help: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
            '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
        ],
        boardMarkup: `
        <napkin></napkin>
          <plates><apple></apple></plates>
          <apple></apple>
          `,
    },
    {
        doThis: 'Select the eggplant on the fancy plate',
        selector: '#fancy',
        selectorName: 'Descendant & ID Selectors',
        helpTitle: 'Combine the Descendant & ID Selectors',
        syntax: '#id&nbsp;&nbsp;A',
        help: 'You can combine any selector with the descendent selector.',
        examples: [
            '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>',
        ],
        boardMarkup: `
            <napkin><pumpkin></pumpkin></napkin>
            <plates id="fancy"><eggplant></eggplant></plates>
            <plates><eggplant></egglplant></plates>
          `,
    },
    {
        doThis: 'Select the small apples',
        selector: '.small',
        selectorName: 'Class Selector',
        helpTitle: 'Select elements by their class',
        syntax: '.classname',
        help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
        examples: ['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],
        boardMarkup: `
        <apple></apple>
          <apple class="small"></apple>
          <plates><apple class="small"></apple></plates>
          <plates></plates>
          `,
    },
    {
        doThis: 'Select the small pumpkins',
        selector: '.small',
        selectorName: 'Class Selector',
        helpTitle: 'Combine the Class Selector',
        syntax: 'A.className',
        help: 'You can combine the class selector with other selectors, like the type selector.',
        examples: [
            '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
        ],
        boardMarkup: `
        <apple></apple>
        <apple class="small"></apple>
        <napkin><pumpkin class="small"></pumpkin></napkin>
        <plates><pumpkin></pumpkin></plates>
        <plates><pumpkin class="small"></pumpkin></plates>`,
    },
    {
        doThis: 'Select the small pumpkins in the napkins',
        selector: 'pumpkin, .small',
        selectorName: 'Different selectors',
        syntax: 'Put your back into it!',
        helpTitle: 'You can do it...',
        help: 'Combine what you learned in the last few levels to solve this one!',
        boardMarkup: `
            <napkin><pumpkin></pumpkin></napkin>
            <pumpkin class="small"></pumpkin>
            <napkin><pumpkin class="small"></pumpkin></napkin>
            <napkin><apple class="small"></apple></napkin>
            <napkin><pumpkin class="small"></pumpkin></napkin>`,
    },
    {
        doThis: 'Select all the plates and napkins',
        selector: 'plate, eggplant',
        selectorName: 'Comma Combinator',
        helpTitle: 'Combine, selectors, with... commas!',
        syntax: 'A, B',
        help: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
        examples: [
            '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
            '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
        ],
        boardMarkup: `
            <eggplant class="small"></eggplant>
            <plates><eggplant></eggplant></plates>
            <napkin><eggplant></eggplant></napkin>
            <plates><eggplant></eggplant></plates>
          `,
    },
    {
        doThis: 'Select all the things!',
        selector: '*',
        selectorName: 'The Universal Selector',
        helpTitle: 'You can select everything!',
        syntax: '*',
        help: 'You can select all elements with the universal selector! ',
        examples: ['<strong>p *</strong> selects any element inside all <tag>p</tag> elements.'],
        boardMarkup: `
        <apple></apple>
        <plates><pumpkin class="small"></pumpkin></plates>
        <napkin><pumpkin></pumpkin></napkin>
        <plates id="fancy"></plates>
          `,
    },
];

export default levels;
