import { menu } from './menu.js';
import { heart } from './heart.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
    menu.init();
    heart.init();
}