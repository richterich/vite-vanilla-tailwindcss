import {setupCounter} from '@';
import './main.postcss';

document.addEventListener('DOMContentLoaded', () => {
  setupCounter(document.querySelector('#counter'));
});
