import { j as o, a as l, L as m, c as t } from './mobile.2513ebf0.js';
import './locales.b1a63ec1.js';
function s() {
  return o('svg', {
    className: 'demo-home-nav__icon',
    viewBox: '0 0 1024 1024',
    children: [
      l('path', {
        fill: '#B6C3D2',
        d: 'M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z',
      }),
      l('path', {
        fill: '#B6C3D2',
        d: 'M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z',
      }),
    ],
  });
}
function d(i) {
  const a = i.lang ? `/${i.lang}` : '';
  return o('div', {
    className: 'demo-home-nav',
    children: [
      l('div', { className: 'demo-home-nav__title', children: i.group.title }),
      l('div', {
        className: 'demo-home-nav__group',
        children: i.group.items.map((e) =>
          o(
            m,
            {
              to: `${a}/${e.path}`,
              className: 'demo-home-nav__block',
              children: [e.title, l(s, {})],
            },
            e.title
          )
        ),
      }),
    ],
  });
}
function g(i) {
  const { locales: a } = t.site;
  let e = t.site;
  return (
    a && (e = a[i.lang]),
    o('div', {
      className: 'demo-home',
      children: [
        o('h1', {
          className: `demo-home__title ${e.title || 'demo-home__title--small'}`,
          children: [
            l('img', { src: e.logo }),
            l('span', { children: e.title }),
          ],
        }),
        e && l('h2', { className: 'demo-home__desc', children: e.description }),
        e.nav.map((n, c) => l(d, { group: n, lang: i.lang }, c)),
      ],
    })
  );
}
export { g as default };
