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
        doThis: 'Select the pumpkin',
        selectorName: 'Type Selector',
        helpTitle: 'Select elements by their type',
        selector: 'pumpkin',
        syntax: 'A',
        help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
          <earth></earth>
          <pumpkin></pumpkin>
          <plates></plates>
          `,
    },
    {
        doThis: 'Select the fancy plate',
        selectorName: 'ID Selector',
        helpTitle: 'Select elements with an ID',
        selector: '#id',
        syntax: 'id',
        help: 'Selects the elуment with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
        examples: [
            '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
            '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
        ],
        boardMarkup: `
            <plates></plates>
            <plates id="apple"></plates>
            <plates></plates>
          `,
    },
    {
        helpTitle: 'Select an element inside another element',
        selectorName: 'Descendant Selector',
        doThis: 'Select the apple on the plate',
        selector: 'A  B',
        syntax: 'A&nbsp;&nbspB',
        help: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
            '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
        ],
        boardMarkup: `
          <plates></plates>
          <pumpkin></pumpkin>
          <earth><skull></skull></earth>
          <skull></skull>
          `,
    },
    {
        doThis: 'Select the pickle on the fancy plate',
        selector: '#id  A',
        selectorName: 'Descendant & ID Selectors',
        helpTitle: 'Combine the Descendant & ID Selectors',
        syntax: '#id&nbsp;&nbsp;A',
        help: 'You can combine any selector with the descendent selector.',
        examples: [
            '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>',
        ],
        boardMarkup: `
            <plates><bat></bat></plates>
            <plates id="apple"><bat></bat></plates>
            <pumpkin><bat></bat></pumpkin>
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
          <skull class="small"></skull>
          <plates><skull class="small"></skull></plates>
          <skull></skull>
          `,
    },
    {
        doThis: 'Select the small oranges',
        selector: 'A.className',
        selectorName: 'Class Selector',
        helpTitle: 'Combine the Class Selector',
        syntax: 'A.className',
        help: 'You can combine the class selector with other selectors, like the type selector.',
        examples: [
            '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
        ],
        boardMarkup: `
            <plates id="apple"><casper class="small"></casper></plates>
            <pumpkin><bat></bat></pumpkin>
            <casper></casper>`,
    },
    {
        doThis: 'Select the small oranges in the bentos',
        selector: 'plate bat.red',
        selectorName: 'Different selectors',
        syntax: 'Put your back into it!',
        helpTitle: 'You can do it...',
        help: 'Combine what you learned in the last few levels to solve this one!',
        boardMarkup: `
            <plates id="rip"><bat class="red"></bat></plates>
            <pumpkin><bat></bat></pumpkin>
            <plates id="apple"><bat class="red"></bat></plates>
            <bat class="red"></bat>`,
    },
    {
        doThis: 'Select all the plates and bentos',
        selector: 'A, B',
        selectorName: 'Comma Combinator',
        helpTitle: 'Combine, selectors, with... commas!',
        syntax: 'A, B',
        help: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
        examples: [
            '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
            '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
        ],
        boardMarkup: `
            <casper></casper>
            <plates id="apple"><bat class="red"></bat></plates>
            <earth><skull></skull></earth>
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
        <skull></skull>
        <casper></casper>
        <pumpkin></pumpkin>
        <bat class="red"></bat>
          `,
    },
];

export default levels;
