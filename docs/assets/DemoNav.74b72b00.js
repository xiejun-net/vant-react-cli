import { u as c, j as i, a } from './mobile.2513ebf0.js';
import './locales.b1a63ec1.js';
function h(e) {
  const l = c(),
    t = e.name,
    n =
      'M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z';
  function s() {
    if ((console.log(history.length), history.length > 1)) history.back();
    else {
      const o = e.lang ? `/${e.lang}/` : '/';
      l(o, { replace: !0 });
    }
  }
  return (
    t &&
    i('div', {
      className: 'demo-nav',
      children: [
        a('div', { className: 'demo-nav__title', children: t }),
        a('svg', {
          className: 'demo-nav__back',
          viewBox: '0 0 1000 1000',
          onClick: s,
          children: a('path', { fill: '#969799', fillRule: 'evenodd', d: n }),
        }),
      ],
    })
  );
}
export { h as default };
