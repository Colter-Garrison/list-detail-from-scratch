// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderMollusks } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Pacific Banana Slug Test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="mollusk"><a href="./mollusk-page/?id=1"><h1>Pacific Banana Slug</h1><img src="./assets/banana-slug.png"></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const pacificBananaSlug = {
        id: '1',
        name: 'Pacific Banana Slug',
        image: './assets/banana-slug.png',
        native: 'native to Oregon',
        length: 'can grow up to 25cm long',
        found: ['Alaska', ' Oregon', ' and California'],
    };

    const actual = renderMollusks(pacificBananaSlug);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});