import { mollusks } from './data.js'; 
import { renderMollusks } from './render-utils.js';

const molluskListEl = document.getElementById('mollusks');
for (let mollusk of mollusks) {
    const molluskDiv = renderMollusks(mollusk);
    molluskListEl.append(molluskDiv);
}