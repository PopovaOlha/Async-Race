const levels = [
    {
        helpTitle: 'Select elements by their type',
        selectorName: 'Type Selector',
        doThis: 'Select the plates',
        selector: 'tombstone',
        syntax: 'A',
        help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
             <tombstone></tombstone>
             <tombstone></tombstone>
          `,
    },
    {
        doThis: 'Select the pumpkin',
        selector: 'pumpkin',
        syntax: 'A',
        helpTitle: 'Select elements by their type',
        selectorName: 'Type Selector',
        help: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
          <earth></earth>
          <pumpkin></pumpkin>
          <tombstone></tombstone>
          `,
    },
    {
        doThis: 'Select the tombstone rip',
        selector: '#rip',
        selectorName: 'ID Selector',
        helpTitle: 'Select elements with an ID',
        syntax: '#id',
        help: 'Selects the elуment with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
        examples: [
            '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
            '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
        ],
        boardMarkup: `
            <tombstone></tombstone>
            <tombstone id="rip"></tombstone>
            <tombstone></tombstone>
          `,
    },
    {
        helpTitle: 'Select an element inside another element',
        selectorName: 'Descendant Selector',
        doThis: 'Select the skull on the earth',
        selector: 'earth skull',
        syntax: 'A&nbsp;&nbsp;B',
        help: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
            '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
        ],
        boardMarkup: `
          <tombstone></tombstone>
          <pumpkin></pumpkin>
          <earth><skull></skull></earth>
          <skull></skull>
          `,
    },
    {
        doThis: 'Select the bat on the rip tombstone',
        selector: '#rip bat',
        selectorName: '',
        helpTitle: 'Combine the Descendant & ID Selectors',
        syntax: '#id&nbsp;&nbsp;A',
        help: 'You can combine any selector with the descendent selector.',
        examples: [
            '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>',
        ],
        boardMarkup: `
            <tombstone><bat></bat></tombstone>
            <tombstone id="rip"><bat></bat></tombstone>
            <pumpkin><bat></bat></pumpkin>
          `,
    },
    {
        doThis: 'Select the small skull',
        selector: '.small',
        selectorName: 'Class Selector',
        helpTitle: 'Select elements by their class',
        syntax: '.classname',
        help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
        examples: ['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],
        boardMarkup: `
          <skull class="small"></skull>
          <tombstone><skull class="small"></skull></tombstone>
          <skull></skull>
          `,
    },
    {
        doThis: 'Select the small casper',
        selector: 'casper.small',
        selectorName: '',
        helpTitle: 'Combine the Class Selector',
        syntax: 'A.className',
        help: 'You can combine the class selector with other selectors, like the type selector.',
        examples: [
            '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
        ],
        boardMarkup: `
            <tombstone id="rip"><casper class="small"></casper></tombstone>
            <pumpkin><bat></bat></pumpkin>
            <casper></casper>`,
    },
    {
        doThis: 'Select the red bat in the tombstone',
        selector: 'tombstone bat.red',
        selectorName: '',
        syntax: 'Put your back into it!',
        helpTitle: 'You can do it...',
        help: 'Combine what you learned in the last few levels to solve this one!',
        boardMarkup: `
            <tombstone id="rip"><bat class="red"></bat></tombstone>
            <pumpkin><bat></bat></pumpkin>
            <tombstone id="rip"><bat class="red"></bat></tombstone>
            <bat class="red"></bat>`,
    },
    {
        doThis: 'Select all the casper and skull',
        selector: 'casper,skull',
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
            <tombstone id="rip"><bat class="red"></bat></tombstone>
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
