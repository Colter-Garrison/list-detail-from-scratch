import { findById } from '../utils.js';
import { mollusks } from '../data.js';
// console.log('hello from mollusks page');

const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));

const mollusk = findById(params.get('id'), mollusks);
// console.log(mollusk);

const molluskName = document.getElementById('mollusk-name');
molluskName.textContent = mollusk.name;

const molluskImage = document.getElementById('mollusk-image');
molluskImage.src = `.${mollusk.image}`;

const molluskNative = document.getElementById('mollusk-native');
molluskNative.textContent = mollusk.native;

const molluskLength = document.getElementById('mollusk-length');
molluskLength.textContent = mollusk.length;

const molluskFound = document.getElementById('mollusk-found');
molluskFound.textContent = mollusk.found;