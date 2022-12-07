import {
  _ as V,
  g as E,
  p as O,
  s as j,
  c as I,
  a as h,
  b as B,
  i as F,
  d as R,
  l as z,
  e as b,
  f as q,
  h as x,
  j as Y,
} from './locales.b1a63ec1.js';
import {
  c as $,
  w as y,
  n as v,
  a as r,
  r as _,
  o as i,
  b as c,
  F as k,
  d as C,
  e as P,
  t as f,
  f as p,
  g as u,
  h as W,
  T as G,
  i as w,
  j as J,
  v as K,
  p as Q,
  k as U,
  l as X,
  m as Z,
  q as ee,
  s as te,
} from './vue-libs.15abd0dc.js';
const m = (e, n) => {
    const t = e.__vccOpts || e;
    for (const [a, s] of n) t[a] = s;
    return t;
  },
  ne = {
    name: 'VanDocNavLink',
    props: { base: String, item: Object },
    computed: {
      itemName() {
        const e = (this.item.title || this.item.name).split(' ');
        return `${e[0]} <span>${e.slice(1).join(' ')}</span>`;
      },
      path() {
        return `${this.base}${this.item.path}`;
      },
      active() {
        return this.$route.path === this.path
          ? !0
          : this.item.path === 'home'
          ? this.$route.path === this.base
          : !1;
      },
    },
    watch: {
      active() {
        this.scrollIntoView();
      },
    },
    mounted() {
      this.scrollIntoView();
    },
    methods: {
      scrollIntoView() {
        this.active &&
          this.$el &&
          this.$el.scrollIntoViewIfNeeded &&
          this.$el.scrollIntoViewIfNeeded();
      },
    },
  },
  oe = ['innerHTML'],
  se = ['href', 'innerHTML'],
  ae = ['innerHTML'];
function ie(e, n, t, a, s, o) {
  const d = _('router-link');
  return t.item.path
    ? (i(),
      $(
        d,
        { key: 0, class: v({ active: o.active }), to: o.path },
        {
          default: y(() => [c('div', { innerHTML: o.itemName }, null, 8, oe)]),
          _: 1,
        },
        8,
        ['class', 'to']
      ))
    : t.item.link
    ? (i(),
      r('a', { key: 1, href: t.item.link, innerHTML: o.itemName }, null, 8, se))
    : (i(), r('a', { key: 2, innerHTML: o.itemName }, null, 8, ae));
}
const H = m(ne, [['render', ie]]);
const re = {
    name: 'VanDocNav',
    components: { [H.name]: H },
    props: { lang: String, navConfig: Array },
    data() {
      return { top: 64, bottom: 0 };
    },
    computed: {
      style() {
        return { top: this.top + 'px', bottom: this.bottom + 'px' };
      },
      base() {
        return this.lang ? `/${this.lang}/` : '/';
      },
    },
    created() {
      window.addEventListener('scroll', this.onScroll), this.onScroll();
    },
    methods: {
      onScroll() {
        const { pageYOffset: e } = window;
        this.top = Math.max(0, 64 - e);
      },
    },
  },
  ce = { class: 'van-doc-nav__title' };
function le(e, n, t, a, s, o) {
  const d = _('van-doc-nav-link');
  return (
    i(),
    r(
      'div',
      { class: 'van-doc-nav', style: P(o.style) },
      [
        (i(!0),
        r(
          k,
          null,
          C(
            t.navConfig,
            (l, g) => (
              i(),
              r('div', { class: 'van-doc-nav__group', key: g }, [
                c('div', ce, f(l.title), 1),
                l.items
                  ? (i(!0),
                    r(
                      k,
                      { key: 0 },
                      C(
                        l.items,
                        (S, L) => (
                          i(),
                          r('div', { key: L, class: 'van-doc-nav__item' }, [
                            p(d, { item: S, base: o.base }, null, 8, [
                              'item',
                              'base',
                            ]),
                          ])
                        )
                      ),
                      128
                    ))
                  : u('', !0),
              ])
            )
          ),
          128
        )),
      ],
      4
    )
  );
}
const de = m(re, [['render', le]]);
const he = {
    name: 'VanDocSearch',
    props: { lang: String, searchConfig: Object },
    watch: {
      lang() {
        this.initDocsearch();
      },
    },
    mounted() {
      this.initDocsearch();
    },
    methods: {
      initDocsearch() {
        this.searchConfig &&
          (V(() => Promise.resolve({}), ['assets/style.7ea6b6a8.css']),
          V(() => import('./index.5c0f6507.js'), []).then((e) => {
            e.default({ ...this.searchConfig, container: '#docsearch' });
          }));
      },
    },
  },
  ue = { id: 'docsearch' };
function _e(e, n, t, a, s, o) {
  return i(), r('div', ue);
}
const me = m(he, [['render', _e]]);
const ge = {
    name: 'VanDocHeader',
    components: { SearchInput: me },
    props: {
      lang: String,
      config: Object,
      versions: Array,
      langConfigs: Array,
      darkModeClass: String,
    },
    data() {
      return { currentTheme: E(), packageVersion: O, showVersionPop: !1 };
    },
    computed: {
      langLink() {
        return `#${this.$route.path.replace(this.lang, this.anotherLang.lang)}`;
      },
      langLabel() {
        return this.anotherLang.label;
      },
      anotherLang() {
        const e = this.langConfigs.filter((n) => n.lang !== this.lang);
        return e.length ? e[0] : {};
      },
      searchConfig() {
        return this.config.searchConfig;
      },
      themeImg() {
        return this.currentTheme === 'light'
          ? 'https://b.yzcdn.cn/vant/dark-theme.svg'
          : 'https://b.yzcdn.cn/vant/light-theme.svg';
      },
    },
    watch: {
      currentTheme: {
        handler(e, n) {
          window.localStorage.setItem('vantTheme', e),
            document.documentElement.classList.remove(`van-doc-theme-${n}`),
            document.documentElement.classList.add(`van-doc-theme-${e}`),
            j(e);
        },
        immediate: !0,
      },
    },
    methods: {
      toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      },
      toggleVersionPop() {
        const e = !this.showVersionPop,
          n = e ? 'add' : 'remove';
        document.body[`${n}EventListener`]('click', this.checkHideVersionPop),
          (this.showVersionPop = e);
      },
      checkHideVersionPop(e) {
        this.$refs.version.contains(e.target) || (this.showVersionPop = !1);
      },
      onSwitchLang(e) {
        this.$router.push(this.$route.path.replace(e.from, e.to));
      },
      onSwitchVersion(e) {
        e.link && (location.href = e.link);
      },
    },
  },
  fe = { class: 'van-doc-header' },
  pe = { class: 'van-doc-row' },
  ve = { class: 'van-doc-header__top' },
  ye = { class: 'van-doc-header__logo' },
  ke = ['src'],
  we = { class: 'van-doc-header__title' },
  Se = { key: 0, class: 'van-doc-header__subtitle' },
  be = { class: 'van-doc-header__top-nav' },
  Ce = ['href'],
  $e = ['src'],
  Te = { key: 1 },
  Le = { key: 0, class: 'van-doc-header__top-nav-item' },
  Ve = ['src'],
  xe = { key: 1, ref: 'version', class: 'van-doc-header__top-nav-item' },
  He = { key: 0, class: 'van-doc-header__version-pop' },
  Ne = ['onClick'],
  De = { key: 2, class: 'van-doc-header__top-nav-item' },
  Ie = ['href'];
function Pe(e, n, t, a, s, o) {
  const d = _('search-input');
  return (
    i(),
    r('div', fe, [
      c('div', pe, [
        c('div', ve, [
          c('a', ye, [
            c('img', { src: t.config.logo }, null, 8, ke),
            c('span', we, f(t.config.title), 1),
            t.config.subtitle
              ? (i(), r('span', Se, f(t.config.subtitle), 1))
              : u('', !0),
          ]),
          c('ul', be, [
            (i(!0),
            r(
              k,
              null,
              C(
                t.config.links,
                (l, g) => (
                  i(),
                  r('li', { key: g, class: 'van-doc-header__top-nav-item' }, [
                    c(
                      'a',
                      {
                        class: 'van-doc-header__link',
                        target: '_blank',
                        href: l.url,
                      },
                      [
                        l.logo
                          ? (i(),
                            r('img', { key: 0, src: l.logo }, null, 8, $e))
                          : l.text
                          ? (i(), r('span', Te, f(l.text), 1))
                          : u('', !0),
                      ],
                      8,
                      Ce
                    ),
                  ])
                )
              ),
              128
            )),
            t.darkModeClass
              ? (i(),
                r('li', Le, [
                  c(
                    'a',
                    {
                      class: 'van-doc-header__link',
                      target: '_blank',
                      onClick:
                        n[0] ||
                        (n[0] = (...l) => o.toggleTheme && o.toggleTheme(...l)),
                    },
                    [c('img', { src: o.themeImg }, null, 8, Ve)]
                  ),
                ]))
              : u('', !0),
            t.versions
              ? (i(),
                r(
                  'li',
                  xe,
                  [
                    c(
                      'span',
                      {
                        class: 'van-doc-header__cube van-doc-header__version',
                        onClick:
                          n[1] ||
                          (n[1] = (...l) =>
                            o.toggleVersionPop && o.toggleVersionPop(...l)),
                      },
                      [
                        W(f(s.packageVersion) + ' ', 1),
                        p(
                          G,
                          { name: 'van-doc-dropdown' },
                          {
                            default: y(() => [
                              s.showVersionPop
                                ? (i(),
                                  r('div', He, [
                                    (i(!0),
                                    r(
                                      k,
                                      null,
                                      C(
                                        t.versions,
                                        (l, g) => (
                                          i(),
                                          r(
                                            'div',
                                            {
                                              key: g,
                                              class:
                                                'van-doc-header__version-pop-item',
                                              onClick: (S) =>
                                                o.onSwitchVersion(l),
                                            },
                                            f(l.label),
                                            9,
                                            Ne
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]))
                                : u('', !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ]
                    ),
                  ],
                  512
                ))
              : u('', !0),
            o.langLabel && o.langLink
              ? (i(),
                r('li', De, [
                  c(
                    'a',
                    { class: 'van-doc-header__cube', href: o.langLink },
                    f(o.langLabel),
                    9,
                    Ie
                  ),
                ]))
              : u('', !0),
            o.searchConfig
              ? (i(),
                $(
                  d,
                  { key: 3, lang: t.lang, 'search-config': o.searchConfig },
                  null,
                  8,
                  ['lang', 'search-config']
                ))
              : u('', !0),
          ]),
        ]),
      ]),
    ])
  );
}
const Ae = m(ge, [['render', Pe]]);
const Me = {
  name: 'VanDocContent',
  computed: {
    currentPage() {
      const { path: e } = this.$route;
      return e ? e.split('/').slice(-1)[0] : this.$route.name;
    },
  },
  watch: {
    $route(e, n) {
      n.path !== e.path &&
        setTimeout(() => {
          this.copyAction();
        });
    },
  },
  mounted() {
    this.copyAction();
  },
  methods: {
    onClick({ target: e }) {
      ['H2', 'H3', 'H4', 'H5'].includes(e.tagName) && this.scrollToAnchor(e);
    },
    scrollToAnchor(e) {
      e.id && this.$router.push({ name: this.$route.name, hash: '#' + e.id });
    },
    copyAction() {
      const e = document.querySelectorAll('.van-doc-card pre code');
      if (!(!e || !e.length))
        for (let n = 0; n < e.length; n++) {
          const t = e[n];
          let a = null;
          t.addEventListener('click', () => {
            if (a) return;
            const s = t.innerText;
            I(s),
              t.classList.add('code-copy-success'),
              (a = setTimeout(() => {
                t.classList.remove('code-copy-success'), (a = null);
              }, 1400));
          });
        }
    },
  },
};
function Ee(e, n, t, a, s, o) {
  return (
    i(),
    r(
      'div',
      {
        class: v(['van-doc-content', `van-doc-content--${o.currentPage}`]),
        onClick: n[0] || (n[0] = (...d) => o.onClick && o.onClick(...d)),
      },
      [w(e.$slots, 'default')],
      2
    )
  );
}
const Oe = m(Me, [['render', Ee]]);
const je = { name: 'VanDocContainer', props: { hasSimulator: Boolean } };
function Be(e, n, t, a, s, o) {
  return (
    i(),
    r(
      'div',
      {
        class: v([
          'van-doc-container van-doc-row',
          { 'van-doc-container--with-simulator': t.hasSimulator },
        ]),
      },
      [w(e.$slots, 'default')],
      2
    )
  );
}
const Fe = m(je, [['render', Be]]);
const Re = {
    name: 'VanDocSimulator',
    props: { src: String },
    data() {
      return { scrollTop: window.scrollY, windowHeight: window.innerHeight };
    },
    computed: {
      isFixed() {
        return this.scrollTop > 60;
      },
      simulatorStyle() {
        return { height: Math.min(640, this.windowHeight - 90) + 'px' };
      },
    },
    mounted() {
      window.addEventListener('scroll', () => {
        this.scrollTop = window.scrollY;
      }),
        window.addEventListener('resize', () => {
          this.windowHeight = window.innerHeight;
        });
    },
  },
  ze = ['src'];
function qe(e, n, t, a, s, o) {
  return (
    i(),
    r(
      'div',
      {
        class: v([
          'van-doc-simulator',
          { 'van-doc-simulator-fixed': o.isFixed },
        ]),
      },
      [
        c(
          'iframe',
          {
            ref: 'iframe',
            src: t.src,
            style: P(o.simulatorStyle),
            frameborder: '0',
          },
          null,
          12,
          ze
        ),
      ],
      2
    )
  );
}
const Ye = m(Re, [['render', qe]]),
  We = {
    name: 'VanDoc',
    components: {
      DocNav: de,
      DocHeader: Ae,
      DocContent: Oe,
      DocContainer: Fe,
      DocSimulator: Ye,
    },
    props: {
      lang: String,
      versions: Array,
      simulator: String,
      langConfigs: Array,
      hasSimulator: Boolean,
      darkModeClass: String,
      config: { type: Object, required: !0 },
      base: { type: String, default: '' },
    },
    emits: ['switch-version'],
    watch: {
      $route() {
        this.setNav();
      },
    },
    created() {
      this.setNav(), this.keyboardHandler();
    },
    methods: {
      setNav() {
        const { nav: e } = this.config,
          n = e.reduce((s, o) => s.concat(o.items), []),
          t = this.$route.path.split('/').pop();
        let a;
        for (let s = 0, o = n.length; s < o; s++)
          if (n[s].path === t) {
            a = s;
            break;
          }
        (this.leftNav = n[a - 1]), (this.rightNav = n[a + 1]);
      },
      keyboardNav(e) {
        if (/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase())) return;
        const n = e === 'prev' ? this.leftNav : this.rightNav;
        n.path && this.$router.push(this.base + n.path);
      },
      keyboardHandler() {
        window.addEventListener('keyup', (e) => {
          switch (e.keyCode) {
            case 37:
              this.keyboardNav('prev');
              break;
            case 39:
              this.keyboardNav('next');
              break;
          }
        });
      },
    },
  },
  Ge = { class: 'van-doc' };
function Je(e, n, t, a, s, o) {
  const d = _('doc-header'),
    l = _('doc-nav'),
    g = _('doc-content'),
    S = _('doc-container'),
    L = _('doc-simulator');
  return (
    i(),
    r('div', Ge, [
      p(
        d,
        {
          lang: t.lang,
          config: t.config,
          versions: t.versions,
          'lang-configs': t.langConfigs,
          'dark-mode-class': t.darkModeClass,
          onSwitchVersion: n[0] || (n[0] = (M) => e.$emit('switch-version', M)),
        },
        null,
        8,
        ['lang', 'config', 'versions', 'lang-configs', 'dark-mode-class']
      ),
      p(l, { lang: t.lang, 'nav-config': t.config.nav }, null, 8, [
        'lang',
        'nav-config',
      ]),
      p(
        S,
        { 'has-simulator': t.hasSimulator },
        {
          default: y(() => [
            p(g, null, { default: y(() => [w(e.$slots, 'default')]), _: 3 }),
          ]),
          _: 3,
        },
        8,
        ['has-simulator']
      ),
      t.hasSimulator
        ? (i(), $(L, { key: 0, src: t.simulator }, null, 8, ['src']))
        : u('', !0),
    ])
  );
}
const Ke = m(We, [['render', Je]]);
const Qe = {
    components: { VanDoc: Ke },
    data() {
      return { hasSimulator: !0, darkModeClass: h.site.darkModeClass };
    },
    computed: {
      simulator() {
        var n, t;
        return (n = h.site.simulator) != null && n.url
          ? (t = h.site.simulator) == null
            ? void 0
            : t.url
          : `${location.pathname.replace(/\/index(\.html)?/, '/')}mobile.html${
              location.hash
            }`;
      },
      lang() {
        const { lang: e } = this.$route.meta;
        return e || '';
      },
      langConfigs() {
        const { locales: e = {} } = h.site;
        return Object.keys(e).map((n) => ({
          lang: n,
          label: e[n].langLabel || '',
        }));
      },
      config() {
        const { locales: e } = h.site;
        return e ? e[this.lang] : h.site;
      },
      versions() {
        return h.site.versions || null;
      },
    },
    watch: {
      '$route.path'() {
        this.setTitleAndToggleSimulator();
      },
      lang(e) {
        B(e), this.setTitleAndToggleSimulator();
      },
      config: {
        handler(e) {
          e && this.setTitleAndToggleSimulator();
        },
        immediate: !0,
      },
    },
    mounted() {
      this.$route.hash &&
        this.$nextTick(() => {
          const e = document.querySelector(this.$route.hash);
          e && e.scrollIntoView();
        });
    },
    methods: {
      setTitleAndToggleSimulator() {
        let { title: e } = this.config;
        const t = this.config.nav
          .reduce((a, s) => [...a, ...s.items], [])
          .find((a) => a.path === this.$route.meta.name);
        t && t.title
          ? (e = t.title + ' - ' + e)
          : this.config.description && (e += ` - ${this.config.description}`),
          (document.title = e),
          (this.hasSimulator = !(
            h.site.hideSimulator ||
            this.config.hideSimulator ||
            (t && t.hideSimulator)
          ));
      },
    },
  },
  Ue = { class: 'app' };
function Xe(e, n, t, a, s, o) {
  const d = _('router-view'),
    l = _('van-doc');
  return (
    i(),
    r('div', Ue, [
      o.config
        ? (i(),
          $(
            l,
            {
              key: 0,
              lang: o.lang,
              config: o.config,
              versions: o.versions,
              simulator: o.simulator,
              'has-simulator': s.hasSimulator,
              'lang-configs': o.langConfigs,
              'dark-mode-class': s.darkModeClass,
            },
            { default: y(() => [p(d)]), _: 1 },
            8,
            [
              'lang',
              'config',
              'versions',
              'simulator',
              'has-simulator',
              'lang-configs',
              'dark-mode-class',
            ]
          ))
        : u('', !0),
    ])
  );
}
const Ze = m(Qe, [['render', Xe]]);
const et = {
    name: 'DemoPlayground',
    props: {
      originCode: String,
      codeSnippet: String,
      transform: Boolean,
      compact: Boolean,
      inline: Boolean,
    },
    data() {
      return { showSource: !1, copyStatus: 'ready' };
    },
    methods: {
      unescape,
      toggleSource() {
        this.showSource = !this.showSource;
      },
      copySourceCode() {
        I(unescape(this.originCode)),
          (this.copyStatus = 'copied'),
          setTimeout(() => {
            this.copyStatus = 'ready';
          }, 2e3);
      },
    },
  },
  tt = (e) => (Q('data-v-95763b72'), (e = e()), U(), e),
  nt = { class: 'demo-playground--code' },
  ot = { class: 'demo-playground--code--actions' },
  st = tt(() => c('span', null, null, -1)),
  at = ['data-status'],
  it = ['innerHTML'];
function rt(e, n, t, a, s, o) {
  return (
    i(),
    r(
      'div',
      { class: v({ 'demo-playground': !t.inline, transform: t.transform }) },
      [
        t.inline
          ? w(e.$slots, 'default', { key: 0 }, void 0, !0)
          : (i(),
            r(
              k,
              { key: 1 },
              [
                c(
                  'div',
                  {
                    class: v([
                      'demo-playground--previewer',
                      { compact: t.compact },
                    ]),
                  },
                  [w(e.$slots, 'default', {}, void 0, !0)],
                  2
                ),
                c('div', nt, [
                  c('div', ot, [
                    st,
                    c(
                      'button',
                      {
                        title: 'Copy source code',
                        class: 'action-icon',
                        role: 'copy',
                        'data-status': s.copyStatus,
                        onClick:
                          n[0] ||
                          (n[0] = (...d) =>
                            o.copySourceCode && o.copySourceCode(...d)),
                      },
                      null,
                      8,
                      at
                    ),
                    c('button', {
                      title: 'Toggle source code panel',
                      class: 'action-icon',
                      role: 'source',
                      onClick:
                        n[1] ||
                        (n[1] = (...d) =>
                          o.toggleSource && o.toggleSource(...d)),
                    }),
                  ]),
                  J(
                    c(
                      'div',
                      {
                        innerHTML: o.unescape(t.codeSnippet),
                        class: 'demo-playground--code--content',
                      },
                      null,
                      8,
                      it
                    ),
                    [[K, s.showSource]]
                  ),
                ]),
              ],
              64
            )),
      ],
      2
    )
  );
}
const N = m(et, [
  ['render', rt],
  ['__scopeId', 'data-v-95763b72'],
]);
F && location.replace('mobile.html' + location.hash);
const { locales: A, defaultLang: ct } = h.site;
R(ct);
function lt(e) {
  if (e.indexOf('_') !== -1) {
    const n = e.split('_'),
      t = n.shift();
    return { component: `${x(t)}`, lang: n.join('-') };
  }
  return { component: `${x(e)}`, lang: '' };
}
function dt(e) {
  const n = e.path.split('/')[1];
  return Object.keys(A).indexOf(n) !== -1 ? n : Y();
}
function ht() {
  const e = [],
    n = Object.keys(b);
  A
    ? e.push({
        name: 'notFound',
        path: '/:path(.*)+',
        redirect: (a) => ({ name: dt(a) }),
      })
    : e.push({
        name: 'notFound',
        path: '/:path(.*)+',
        redirect: { name: 'home' },
      });
  function t(a, s) {
    e.push({
      name: s || 'home',
      path: `/${s || ''}`,
      component: a,
      meta: { lang: s },
    });
  }
  return (
    n.forEach((a) => {
      const { component: s, lang: o } = lt(a);
      s === 'home' && t(b[a], o),
        o
          ? e.push({
              name: `${o}/${s}`,
              path: `/${o}/${s}`,
              component: b[a],
              meta: { lang: o, name: s },
            })
          : e.push({
              name: `${s}`,
              path: `/${s}`,
              component: b[a],
              meta: { name: s },
            });
    }),
    e
  );
}
const T = X({
  history: Z(),
  routes: ht(),
  scrollBehavior(e) {
    return e.hash ? { el: e.hash } : { top: 0 };
  },
});
T.afterEach(() => {
  ee(q);
});
var D;
((D = h.site.simulator) == null ? void 0 : D.syncPathFromSimulator) !== !1 &&
  z(T);
window.vueRouter = T;
window.app = te(Ze).use(T).component(N.name, N);
setTimeout(() => {
  window.app.mount('#app');
}, 0);
