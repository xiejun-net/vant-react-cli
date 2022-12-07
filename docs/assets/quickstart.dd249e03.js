import { o as n, a as s, u as e } from './vue-libs.15abd0dc.js';
const t = { class: 'van-doc-markdown-body' },
  c = e(
    `<h1>\u5FEB\u901F\u4E0A\u624B</h1><div class="van-doc-card"><h3 id="an-zhuang" tabindex="-1">\u5B89\u88C5</h3><pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 npm</span>
npm i react-library-demo

<span class="hljs-comment"># \u901A\u8FC7 yarn</span>
yarn add react-library-demo

<span class="hljs-comment"># \u901A\u8FC7 pnpm</span>
pnpm add react-library-demo
</code></pre></div>`,
    2
  ),
  o = [c],
  i = {
    __name: 'quickstart',
    setup(r, { expose: a }) {
      return a({ frontmatter: {} }), (m, p) => (n(), s('div', t, o));
    },
  };
export { i as default };
