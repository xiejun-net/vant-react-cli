(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === 'childList')
        for (const i of r.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && a(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerpolicy && (r.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (r.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = n(o);
    fetch(o.href, r);
  }
})();
const w = 'modulepreload',
  _ = function (t) {
    return '/vant-react-cli/' + t;
  },
  d = {},
  u = function (e, n, a) {
    return !n || n.length === 0
      ? e()
      : Promise.all(
          n.map((o) => {
            if (((o = _(o)), o in d)) return;
            d[o] = !0;
            const r = o.endsWith('.css'),
              i = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${o}"]${i}`)) return;
            const s = document.createElement('link');
            if (
              ((s.rel = r ? 'stylesheet' : w),
              r || ((s.as = 'script'), (s.crossOrigin = '')),
              (s.href = o),
              document.head.appendChild(s),
              r)
            )
              return new Promise((y, v) => {
                s.addEventListener('load', y),
                  s.addEventListener('error', () =>
                    v(new Error(`Unable to preload CSS for ${o}`))
                  );
              });
          })
        ).then(() => e());
  },
  L = () =>
    u(
      () => import('./home.8becc680.js'),
      ['assets/home.8becc680.js', 'assets/vue-libs.15abd0dc.js']
    ),
  E = () =>
    u(
      () => import('./quickstart.dd249e03.js'),
      ['assets/quickstart.dd249e03.js', 'assets/vue-libs.15abd0dc.js']
    ),
  C = () =>
    u(
      () => import('./README.065d89b4.js'),
      ['assets/README.065d89b4.js', 'assets/vue-libs.15abd0dc.js']
    ),
  f = {
    name: 'react-library-demo',
    build: {
      css: { preprocessor: 'less' },
      site: { outputDir: '../../../docs', publicPath: '/vant-react-cli/' },
    },
    site: {
      title: 'react-library-demo',
      logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
      nav: [
        {
          title: '\u5F00\u53D1\u6307\u5357',
          items: [
            { path: 'home', title: '\u4ECB\u7ECD' },
            { path: 'quickstart', title: '\u5FEB\u901F\u4E0A\u624B' },
          ],
        },
        {
          title: '\u57FA\u7840\u7EC4\u4EF6',
          items: [{ path: 'demo-button', title: 'DemoButton \u6309\u94AE' }],
        },
      ],
    },
  },
  P = { Home: L, Quickstart: E, DemoButton: C },
  A = '0.0.1';
let l = [],
  m = !1;
function p(t) {
  m ? t() : l.push(t);
}
window.top === window
  ? window.addEventListener('message', (t) => {
      t.data.type === 'iframeReady' &&
        ((m = !0), l.forEach((e) => e()), (l = []));
    })
  : window.top.postMessage({ type: 'iframeReady' }, '*');
function R() {
  var n, a;
  const t = window.vueRouter,
    { path: e } = t.currentRoute.value;
  return (n = f.site.simulator) != null && n.routeMapper
    ? (a = f.site.simulator) == null
      ? void 0
      : a.routeMapper(e)
    : e;
}
function D() {
  const t = document.querySelector('iframe');
  t &&
    p(() => {
      t.contentWindow.postMessage({ type: 'replacePath', value: R() }, '*');
    });
}
function T(t) {
  const e = document.querySelector('iframe');
  e &&
    p(() => {
      e.contentWindow.postMessage({ type: 'updateTheme', value: t }, '*');
    });
}
function k() {
  const t = window.localStorage.getItem('vantTheme');
  return (
    t ||
    (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  );
}
function O(t) {
  window.addEventListener('message', (e) => {
    var a, o;
    if (((a = e.data) == null ? void 0 : a.type) !== 'replacePath') return;
    const n = ((o = e.data) == null ? void 0 : o.value) || '';
    t.currentRoute.value.path !== n && t.replace(n).catch(() => {});
  });
}
const b = navigator.userAgent.toLowerCase(),
  I = /ios|iphone|ipod|ipad|android/.test(b);
function M(t, e = '-') {
  return t
    .replace(/([a-z\d])([A-Z])/g, '$1' + e + '$2')
    .replace(/([A-Z])([A-Z][a-z\d]+)/g, '$1' + e + '$2')
    .toLowerCase();
}
function $(t) {
  const e = document.createElement('textarea');
  (e.value = t),
    e.setAttribute('readonly', ''),
    (e.style.position = 'absolute'),
    (e.style.left = '-9999px'),
    document.body.appendChild(e);
  const n = document.getSelection();
  if (!n) return;
  const a = n.rangeCount > 0 ? n.getRangeAt(0) : !1;
  e.select(),
    document.execCommand('copy'),
    document.body.removeChild(e),
    a && (n.removeAllRanges(), n.addRange(a));
}
const h = 'zh-CN',
  S = 'en-US',
  g = 'vant-cli-lang';
let c = h;
function q() {
  return c;
}
function N(t) {
  (c = t), localStorage.setItem(g, t);
}
function x(t) {
  const e = localStorage.getItem(g);
  if (e) {
    c = e;
    return;
  }
  if (navigator.language && navigator.language.indexOf('zh-') !== -1) {
    c = h;
    return;
  }
  c = t || S;
}
export {
  u as _,
  f as a,
  N as b,
  $ as c,
  x as d,
  P as e,
  D as f,
  k as g,
  M as h,
  I as i,
  q as j,
  O as l,
  A as p,
  T as s,
};
