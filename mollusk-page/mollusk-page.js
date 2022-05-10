import { findById } from '../utils.js';
import { mollusks } from '../data.js';
console.log('hello from mollusks page');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const mollusk = findById(params.get('id'), mollusks);
console.log(mollusk);

const molluskName = document.getElementById('mollusk-name');
molluskName.textContent = mollusk.name;

const molluskImage = document.createElement('img');
molluskImage.src = `.${mollusk.image}`;

const molluskNative = document.createElement('p');
molluskNative.textContent = `This mollusk is ${mollusk.native}!`;

const molluskLength = document.createElement('p');
molluskLength.textContent = `This mollusk ${mollusk.length}!`;

const molluskFound = document.createElement('p');
molluskFound.textContent = `Among other places this mollusk can commonly be found in ${mollusk.found}.`;

molluskName.append(molluskImage, molluskNative, molluskLength, molluskFound);