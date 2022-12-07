import { a as t } from './mobile.2513ebf0.js';
import './locales.b1a63ec1.js';
function o(n) {
  return t('button', { className: 'demo-button', children: n.children });
}
function i() {
  return t('div', { children: t(o, { children: 'demo-button' }) });
}
export { i as default };
