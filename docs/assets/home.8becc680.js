import { o, a as e, b as t } from './vue-libs.15abd0dc.js';
const a = { class: 'van-doc-markdown-body' },
  s = t('h1', null, '\u4ECB\u7ECD', -1),
  c = t(
    'div',
    { class: 'van-doc-card' },
    [
      t('h3', { id: 'guan-yu', tabindex: '-1' }, '\u5173\u4E8E'),
      t(
        'p',
        null,
        '\u8FD9\u662F\u4E00\u6BB5\u7EC4\u4EF6\u5E93\u7684\u4ECB\u7ECD'
      ),
    ],
    -1
  ),
  l = t(
    'div',
    { class: 'van-doc-card' },
    [
      t('h3', { id: 'te-xing', tabindex: '-1' }, '\u7279\u6027'),
      t('ul', null, [
        t('li', null, '\u7279\u6027\u4E00'),
        t('li', null, '\u7279\u6027\u4E8C'),
        t('li', null, '\u7279\u6027\u4E09'),
      ]),
    ],
    -1
  ),
  d = [s, c, l],
  m = {
    __name: 'home',
    setup(i, { expose: n }) {
      return n({ frontmatter: {} }), (r, u) => (o(), e('div', a, d));
    },
  };
export { m as default };
