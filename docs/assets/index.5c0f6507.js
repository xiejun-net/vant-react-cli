/*! @docsearch/js 3.3.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */ function Ct(
  e,
  t
) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ct(Object(n), !0).forEach(function (r) {
          jr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ct(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function we(e) {
  return (
    (we =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    we(e)
  );
}
function jr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function st() {
  return (
    (st =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    st.apply(this, arguments)
  );
}
function Pr(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Ve(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o =
        n == null
          ? null
          : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) &&
            (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (c) {
          (s = !0), (i = c);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    qn(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function We(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ft(t);
    })(e) ||
    (function (t) {
      if (
        (typeof Symbol < 'u' && t[Symbol.iterator] != null) ||
        t['@@iterator'] != null
      )
        return Array.from(t);
    })(e) ||
    qn(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function qn(e, t) {
  if (e) {
    if (typeof e == 'string') return ft(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? ft(e, t)
        : void 0
    );
  }
}
function ft(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var E,
  Oe,
  Mn,
  At,
  Hn,
  Ke = {},
  Et = [],
  Ir = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Un(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r,
    o,
    a,
    i = arguments,
    u = {};
  for (a in t)
    a == 'key' ? (r = t[a]) : a == 'ref' ? (o = t[a]) : (u[a] = t[a]);
  if (arguments.length > 3)
    for (n = [n], a = 3; a < arguments.length; a++) n.push(i[a]);
  if (
    (n != null && (u.children = n),
    typeof e == 'function' && e.defaultProps != null)
  )
    for (a in e.defaultProps) u[a] === void 0 && (u[a] = e.defaultProps[a]);
  return Se(e, u, r, o, null);
}
function Se(e, t, n, r, o) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o == null ? ++E.__v : o,
  };
  return E.vnode != null && E.vnode(a), a;
}
function Z(e) {
  return e.children;
}
function W(e, t) {
  (this.props = e), (this.context = t);
}
function je(e, t) {
  if (t == null) return e.__ ? je(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == 'function' ? je(e) : null;
}
function Fn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fn(e);
  }
}
function pt(e) {
  ((!e.__d && (e.__d = !0) && Oe.push(e) && !ze.__r++) ||
    At !== E.debounceRendering) &&
    ((At = E.debounceRendering) || Mn)(ze);
}
function ze() {
  for (var e; (ze.__r = Oe.length); )
    (e = Oe.sort(function (t, n) {
      return t.__v.__b - n.__v.__b;
    })),
      (Oe = []),
      e.some(function (t) {
        var n, r, o, a, i, u;
        t.__d &&
          ((i = (a = (n = t).__v).__e),
          (u = n.__P) &&
            ((r = []),
            ((o = z({}, a)).__v = a.__v + 1),
            wt(
              u,
              a,
              o,
              n.__n,
              u.ownerSVGElement !== void 0,
              a.__h != null ? [i] : null,
              r,
              i == null ? je(a) : i,
              a.__h
            ),
            Kn(r, a),
            a.__e != i && Fn(a)));
      });
}
function Bn(e, t, n, r, o, a, i, u, l, s) {
  var c,
    m,
    d,
    p,
    _,
    h,
    g,
    v = (r && r.__k) || Et,
    S = v.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if (
      (p = n.__k[c] =
        (p = t[c]) == null || typeof p == 'boolean'
          ? null
          : typeof p == 'string' || typeof p == 'number'
          ? Se(null, p, null, null, p)
          : Array.isArray(p)
          ? Se(Z, { children: p }, null, null, null)
          : p.__b > 0
          ? Se(p.type, p.props, p.key, null, p.__v)
          : p) != null
    ) {
      if (
        ((p.__ = n),
        (p.__b = n.__b + 1),
        (d = v[c]) === null || (d && p.key == d.key && p.type === d.type))
      )
        v[c] = void 0;
      else
        for (m = 0; m < S; m++) {
          if ((d = v[m]) && p.key == d.key && p.type === d.type) {
            v[m] = void 0;
            break;
          }
          d = null;
        }
      wt(e, p, (d = d || Ke), o, a, i, u, l, s),
        (_ = p.__e),
        (m = p.ref) &&
          d.ref != m &&
          (g || (g = []),
          d.ref && g.push(d.ref, null, p),
          g.push(m, p.__c || _, p)),
        _ != null
          ? (h == null && (h = _),
            typeof p.type == 'function' && p.__k != null && p.__k === d.__k
              ? (p.__d = l = Vn(p, l, e))
              : (l = Wn(e, p, d, v, _, l)),
            s || n.type !== 'option'
              ? typeof n.type == 'function' && (n.__d = l)
              : (e.value = ''))
          : l && d.__e == l && l.parentNode != e && (l = je(d));
    }
  for (n.__e = h, c = S; c--; )
    v[c] != null &&
      (typeof n.type == 'function' &&
        v[c].__e != null &&
        v[c].__e == n.__d &&
        (n.__d = je(r, c + 1)),
      Jn(v[c], v[c]));
  if (g) for (c = 0; c < g.length; c++) zn(g[c], g[++c], g[++c]);
}
function Vn(e, t, n) {
  var r, o;
  for (r = 0; r < e.__k.length; r++)
    (o = e.__k[r]) &&
      ((o.__ = e),
      (t =
        typeof o.type == 'function'
          ? Vn(o, t, n)
          : Wn(n, o, o, e.__k, o.__e, t)));
  return t;
}
function J(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == 'boolean' ||
      (Array.isArray(e)
        ? e.some(function (n) {
            J(n, t);
          })
        : t.push(e)),
    t
  );
}
function Wn(e, t, n, r, o, a) {
  var i, u, l;
  if (t.__d !== void 0) (i = t.__d), (t.__d = void 0);
  else if (n == null || o != a || o.parentNode == null)
    e: if (a == null || a.parentNode !== e) e.appendChild(o), (i = null);
    else {
      for (u = a, l = 0; (u = u.nextSibling) && l < r.length; l += 2)
        if (u == o) break e;
      e.insertBefore(o, a), (i = a);
    }
  return i !== void 0 ? i : o.nextSibling;
}
function xt(e, t, n) {
  t[0] === '-'
    ? e.setProperty(t, n)
    : (e[t] =
        n == null ? '' : typeof n != 'number' || Ir.test(t) ? n : n + 'px');
}
function Ae(e, t, n, r, o) {
  var a;
  e: if (t === 'style')
    if (typeof n == 'string') e.style.cssText = n;
    else {
      if ((typeof r == 'string' && (e.style.cssText = r = ''), r))
        for (t in r) (n && t in n) || xt(e.style, t, '');
      if (n) for (t in n) (r && n[t] === r[t]) || xt(e.style, t, n[t]);
    }
  else if (t[0] === 'o' && t[1] === 'n')
    (a = t !== (t = t.replace(/Capture$/, ''))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + a] = n),
      n
        ? r || e.addEventListener(t, a ? Rt : Nt, a)
        : e.removeEventListener(t, a ? Rt : Nt, a);
  else if (t !== 'dangerouslySetInnerHTML') {
    if (o) t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
    else if (
      t !== 'href' &&
      t !== 'list' &&
      t !== 'form' &&
      t !== 'download' &&
      t in e
    )
      try {
        e[t] = n == null ? '' : n;
        break e;
      } catch {}
    typeof n == 'function' ||
      (n != null && (n !== !1 || (t[0] === 'a' && t[1] === 'r'))
        ? e.setAttribute(t, n)
        : e.removeAttribute(t));
  }
}
function Nt(e) {
  this.l[e.type + !1](E.event ? E.event(e) : e);
}
function Rt(e) {
  this.l[e.type + !0](E.event ? E.event(e) : e);
}
function wt(e, t, n, r, o, a, i, u, l) {
  var s,
    c,
    m,
    d,
    p,
    _,
    h,
    g,
    v,
    S,
    O,
    y = t.type;
  if (t.constructor !== void 0) return null;
  n.__h != null &&
    ((l = n.__h), (u = t.__e = n.__e), (t.__h = null), (a = [u])),
    (s = E.__b) && s(t);
  try {
    e: if (typeof y == 'function') {
      if (
        ((g = t.props),
        (v = (s = y.contextType) && r[s.__c]),
        (S = s ? (v ? v.props.value : s.__) : r),
        n.__c
          ? (h = (c = t.__c = n.__c).__ = c.__E)
          : ('prototype' in y && y.prototype.render
              ? (t.__c = c = new y(g, S))
              : ((t.__c = c = new W(g, S)),
                (c.constructor = y),
                (c.render = Dr)),
            v && v.sub(c),
            (c.props = g),
            c.state || (c.state = {}),
            (c.context = S),
            (c.__n = r),
            (m = c.__d = !0),
            (c.__h = [])),
        c.__s == null && (c.__s = c.state),
        y.getDerivedStateFromProps != null &&
          (c.__s == c.state && (c.__s = z({}, c.__s)),
          z(c.__s, y.getDerivedStateFromProps(g, c.__s))),
        (d = c.props),
        (p = c.state),
        m)
      )
        y.getDerivedStateFromProps == null &&
          c.componentWillMount != null &&
          c.componentWillMount(),
          c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (
          (y.getDerivedStateFromProps == null &&
            g !== d &&
            c.componentWillReceiveProps != null &&
            c.componentWillReceiveProps(g, S),
          (!c.__e &&
            c.shouldComponentUpdate != null &&
            c.shouldComponentUpdate(g, c.__s, S) === !1) ||
            t.__v === n.__v)
        ) {
          (c.props = g),
            (c.state = c.__s),
            t.__v !== n.__v && (c.__d = !1),
            (c.__v = t),
            (t.__e = n.__e),
            (t.__k = n.__k),
            c.__h.length && i.push(c);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, S),
          c.componentDidUpdate != null &&
            c.__h.push(function () {
              c.componentDidUpdate(d, p, _);
            });
      }
      (c.context = S),
        (c.props = g),
        (c.state = c.__s),
        (s = E.__r) && s(t),
        (c.__d = !1),
        (c.__v = t),
        (c.__P = e),
        (s = c.render(c.props, c.state, c.context)),
        (c.state = c.__s),
        c.getChildContext != null && (r = z(z({}, r), c.getChildContext())),
        m ||
          c.getSnapshotBeforeUpdate == null ||
          (_ = c.getSnapshotBeforeUpdate(d, p)),
        (O = s != null && s.type === Z && s.key == null ? s.props.children : s),
        Bn(e, Array.isArray(O) ? O : [O], t, n, r, o, a, i, u, l),
        (c.base = t.__e),
        (t.__h = null),
        c.__h.length && i.push(c),
        h && (c.__E = c.__ = null),
        (c.__e = !1);
    } else
      a == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = kr(n.__e, t, n, r, o, a, i, l));
    (s = E.diffed) && s(t);
  } catch (b) {
    (t.__v = null),
      (l || a != null) &&
        ((t.__e = u), (t.__h = !!l), (a[a.indexOf(u)] = null)),
      E.__e(b, t, n);
  }
}
function Kn(e, t) {
  E.__c && E.__c(t, e),
    e.some(function (n) {
      try {
        (e = n.__h),
          (n.__h = []),
          e.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        E.__e(r, n.__v);
      }
    });
}
function kr(e, t, n, r, o, a, i, u) {
  var l,
    s,
    c,
    m,
    d = n.props,
    p = t.props,
    _ = t.type,
    h = 0;
  if ((_ === 'svg' && (o = !0), a != null)) {
    for (; h < a.length; h++)
      if ((l = a[h]) && (l === e || (_ ? l.localName == _ : l.nodeType == 3))) {
        (e = l), (a[h] = null);
        break;
      }
  }
  if (e == null) {
    if (_ === null) return document.createTextNode(p);
    (e = o
      ? document.createElementNS('http://www.w3.org/2000/svg', _)
      : document.createElement(_, p.is && p)),
      (a = null),
      (u = !1);
  }
  if (_ === null) d === p || (u && e.data === p) || (e.data = p);
  else {
    if (
      ((a = a && Et.slice.call(e.childNodes)),
      (s = (d = n.props || Ke).dangerouslySetInnerHTML),
      (c = p.dangerouslySetInnerHTML),
      !u)
    ) {
      if (a != null)
        for (d = {}, m = 0; m < e.attributes.length; m++)
          d[e.attributes[m].name] = e.attributes[m].value;
      (c || s) &&
        ((c && ((s && c.__html == s.__html) || c.__html === e.innerHTML)) ||
          (e.innerHTML = (c && c.__html) || ''));
    }
    if (
      ((function (g, v, S, O, y) {
        var b;
        for (b in S)
          b === 'children' || b === 'key' || b in v || Ae(g, b, null, S[b], O);
        for (b in v)
          (y && typeof v[b] != 'function') ||
            b === 'children' ||
            b === 'key' ||
            b === 'value' ||
            b === 'checked' ||
            S[b] === v[b] ||
            Ae(g, b, v[b], S[b], O);
      })(e, p, d, o, u),
      c)
    )
      t.__k = [];
    else if (
      ((h = t.props.children),
      Bn(
        e,
        Array.isArray(h) ? h : [h],
        t,
        n,
        r,
        o && _ !== 'foreignObject',
        a,
        i,
        e.firstChild,
        u
      ),
      a != null)
    )
      for (h = a.length; h--; ) a[h] != null && Un(a[h]);
    u ||
      ('value' in p &&
        (h = p.value) !== void 0 &&
        (h !== e.value || (_ === 'progress' && !h)) &&
        Ae(e, 'value', h, d.value, !1),
      'checked' in p &&
        (h = p.checked) !== void 0 &&
        h !== e.checked &&
        Ae(e, 'checked', h, d.checked, !1));
  }
  return e;
}
function zn(e, t, n) {
  try {
    typeof e == 'function' ? e(t) : (e.current = t);
  } catch (r) {
    E.__e(r, n);
  }
}
function Jn(e, t, n) {
  var r, o, a;
  if (
    (E.unmount && E.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || zn(r, null, t)),
    n || typeof e.type == 'function' || (n = (o = e.__e) != null),
    (e.__e = e.__d = void 0),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        E.__e(i, t);
      }
    r.base = r.__P = null;
  }
  if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && Jn(r[a], t, n);
  o != null && Un(o);
}
function Dr(e, t, n) {
  return this.constructor(e, n);
}
function Pe(e, t, n) {
  var r, o, a;
  E.__ && E.__(e, t),
    (o = (r = typeof n == 'function') ? null : (n && n.__k) || t.__k),
    (a = []),
    wt(
      t,
      (e = ((!r && n) || t).__k = V(Z, null, [e])),
      o || Ke,
      Ke,
      t.ownerSVGElement !== void 0,
      !r && n
        ? [n]
        : o
        ? null
        : t.firstChild
        ? Et.slice.call(t.childNodes)
        : null,
      a,
      !r && n ? n : o ? o.__e : t.firstChild,
      r
    ),
    Kn(a, e);
}
function $n(e, t) {
  Pe(e, t, $n);
}
function Cr(e, t, n) {
  var r,
    o,
    a,
    i = arguments,
    u = z({}, e.props);
  for (a in t)
    a == 'key' ? (r = t[a]) : a == 'ref' ? (o = t[a]) : (u[a] = t[a]);
  if (arguments.length > 3)
    for (n = [n], a = 3; a < arguments.length; a++) n.push(i[a]);
  return (
    n != null && (u.children = n), Se(e.type, u, r || e.key, o || e.ref, null)
  );
}
(E = {
  __e: function (e, t) {
    for (var n, r, o; (t = t.__); )
      if ((n = t.__c) && !n.__)
        try {
          if (
            ((r = n.constructor) &&
              r.getDerivedStateFromError != null &&
              (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
            n.componentDidCatch != null &&
              (n.componentDidCatch(e), (o = n.__d)),
            o)
          )
            return (n.__E = n);
        } catch (a) {
          e = a;
        }
    throw e;
  },
  __v: 0,
}),
  (W.prototype.setState = function (e, t) {
    var n;
    (n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = z({}, this.state))),
      typeof e == 'function' && (e = e(z({}, n), this.props)),
      e && z(n, e),
      e != null && this.__v && (t && this.__h.push(t), pt(this));
  }),
  (W.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), pt(this));
  }),
  (W.prototype.render = Z),
  (Oe = []),
  (Mn =
    typeof Promise == 'function'
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (ze.__r = 0),
  (Hn = 0);
var le,
  T,
  Tt,
  ue = 0,
  mt = [],
  Lt = E.__b,
  qt = E.__r,
  Mt = E.diffed,
  Ht = E.__c,
  Ut = E.unmount;
function ke(e, t) {
  E.__h && E.__h(T, e, ue || t), (ue = 0);
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Qn(e) {
  return (ue = 1), Zn(Gn, e);
}
function Zn(e, t, n) {
  var r = ke(le++, 2);
  return (
    (r.t = e),
    r.__c ||
      ((r.__ = [
        n ? n(t) : Gn(void 0, t),
        function (o) {
          var a = r.t(r.__[0], o);
          r.__[0] !== a && ((r.__ = [a, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = T)),
    r.__
  );
}
function Yn(e, t) {
  var n = ke(le++, 3);
  !E.__s && jt(n.__H, t) && ((n.__ = e), (n.__H = t), T.__H.__h.push(n));
}
function Ft(e, t) {
  var n = ke(le++, 4);
  !E.__s && jt(n.__H, t) && ((n.__ = e), (n.__H = t), T.__h.push(n));
}
function rt(e, t) {
  var n = ke(le++, 7);
  return jt(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
}
function Ar() {
  mt.forEach(function (e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(He), e.__H.__h.forEach(dt), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), E.__e(t, e.__v);
      }
  }),
    (mt = []);
}
(E.__b = function (e) {
  (T = null), Lt && Lt(e);
}),
  (E.__r = function (e) {
    qt && qt(e), (le = 0);
    var t = (T = e.__c).__H;
    t && (t.__h.forEach(He), t.__h.forEach(dt), (t.__h = []));
  }),
  (E.diffed = function (e) {
    Mt && Mt(e);
    var t = e.__c;
    t &&
      t.__H &&
      t.__H.__h.length &&
      ((mt.push(t) !== 1 && Tt === E.requestAnimationFrame) ||
        (
          (Tt = E.requestAnimationFrame) ||
          function (n) {
            var r,
              o = function () {
                clearTimeout(a), Bt && cancelAnimationFrame(r), setTimeout(n);
              },
              a = setTimeout(o, 100);
            Bt && (r = requestAnimationFrame(o));
          }
        )(Ar)),
      (T = void 0);
  }),
  (E.__c = function (e, t) {
    t.some(function (n) {
      try {
        n.__h.forEach(He),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || dt(r);
          }));
      } catch (r) {
        t.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (t = []),
          E.__e(r, n.__v);
      }
    }),
      Ht && Ht(e, t);
  }),
  (E.unmount = function (e) {
    Ut && Ut(e);
    var t = e.__c;
    if (t && t.__H)
      try {
        t.__H.__.forEach(He);
      } catch (n) {
        E.__e(n, t.__v);
      }
  });
var Bt = typeof requestAnimationFrame == 'function';
function He(e) {
  var t = T;
  typeof e.__c == 'function' && e.__c(), (T = t);
}
function dt(e) {
  var t = T;
  (e.__c = e.__()), (T = t);
}
function jt(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, r) {
      return n !== e[r];
    })
  );
}
function Gn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Xn(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function ht(e, t) {
  for (var n in e) if (n !== '__source' && !(n in t)) return !0;
  for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
  return !1;
}
function vt(e) {
  this.props = e;
}
((vt.prototype = new W()).isPureReactComponent = !0),
  (vt.prototype.shouldComponentUpdate = function (e, t) {
    return ht(this.props, e) || ht(this.state, t);
  });
var Vt = E.__b;
E.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Vt && Vt(e);
};
var xr =
    (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) ||
    3911,
  Wt = function (e, t) {
    return e == null ? null : J(J(e).map(t));
  },
  Nr = {
    map: Wt,
    forEach: Wt,
    count: function (e) {
      return e ? J(e).length : 0;
    },
    only: function (e) {
      var t = J(e);
      if (t.length !== 1) throw 'Children.only';
      return t[0];
    },
    toArray: J,
  },
  Rr = E.__e;
function Ue() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function er(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function ge() {
  (this.u = null), (this.o = null);
}
(E.__e = function (e, t, n) {
  if (e.then) {
    for (var r, o = t; (o = o.__); )
      if ((r = o.__c) && r.__c)
        return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
  }
  Rr(e, t, n);
}),
  ((Ue.prototype = new W()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = er(r.__v),
      a = !1,
      i = function () {
        a || ((a = !0), (n.componentWillUnmount = n.__c), o ? o(u) : u());
      };
    (n.__c = n.componentWillUnmount),
      (n.componentWillUnmount = function () {
        i(), n.__c && n.__c();
      });
    var u = function () {
        if (!--r.__u) {
          if (r.state.__e) {
            var s = r.state.__e;
            r.__v.__k[0] = (function m(d, p, _) {
              return (
                d &&
                  ((d.__v = null),
                  (d.__k =
                    d.__k &&
                    d.__k.map(function (h) {
                      return m(h, p, _);
                    })),
                  d.__c &&
                    d.__c.__P === p &&
                    (d.__e && _.insertBefore(d.__e, d.__d),
                    (d.__c.__e = !0),
                    (d.__c.__P = _))),
                d
              );
            })(s, s.__c.__P, s.__c.__O);
          }
          var c;
          for (r.setState({ __e: (r.__b = null) }); (c = r.t.pop()); )
            c.forceUpdate();
        }
      },
      l = t.__h === !0;
    r.__u++ || l || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(i, i);
  }),
  (Ue.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (Ue.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement('div'),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = (function a(i, u, l) {
          return (
            i &&
              (i.__c &&
                i.__c.__H &&
                (i.__c.__H.__.forEach(function (s) {
                  typeof s.__c == 'function' && s.__c();
                }),
                (i.__c.__H = null)),
              (i = Xn({}, i)).__c != null &&
                (i.__c.__P === l && (i.__c.__P = u), (i.__c = null)),
              (i.__k =
                i.__k &&
                i.__k.map(function (s) {
                  return a(s, u, l);
                }))),
            i
          );
        })(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var o = t.__e && V(Z, null, e.fallback);
    return o && (o.__h = null), [V(Z, null, t.__e ? null : e.children), o];
  });
var Kt = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
function Tr(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Lr(e) {
  var t = this,
    n = e.i;
  (t.componentWillUnmount = function () {
    Pe(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== n && t.componentWillUnmount(),
    e.__v
      ? (t.l ||
          ((t.i = n),
          (t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            insertBefore: function (r, o) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                t.i.removeChild(r);
            },
          })),
        Pe(V(Tr, { context: t.context }, e.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function tr(e, t) {
  return V(Lr, { __v: e, i: t });
}
((ge.prototype = new W()).__e = function (e) {
  var t = this,
    n = er(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (o) {
      var a = function () {
        t.props.revealOrder ? (r.push(o), Kt(t, e, r)) : o();
      };
      n ? n(a) : a();
    }
  );
}),
  (ge.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = J(e.children);
    e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (ge.prototype.componentDidUpdate = ge.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        Kt(e, n, t);
      });
    });
var nr =
    (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
  qr =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Mr = function (e) {
    return (
      typeof Symbol < 'u' && we(Symbol()) == 'symbol'
        ? /fil|che|rad/i
        : /fil|che|ra/i
    ).test(e);
  };
function rr(e, t, n) {
  return (
    t.__k == null && (t.textContent = ''),
    Pe(e, t),
    typeof n == 'function' && n(),
    e ? e.__c : null
  );
}
(W.prototype.isReactComponent = {}),
  [
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate',
  ].forEach(function (e) {
    Object.defineProperty(W.prototype, e, {
      configurable: !0,
      get: function () {
        return this['UNSAFE_' + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var zt = E.event;
function Hr() {}
function Ur() {
  return this.cancelBubble;
}
function Fr() {
  return this.defaultPrevented;
}
E.event = function (e) {
  return (
    zt && (e = zt(e)),
    (e.persist = Hr),
    (e.isPropagationStopped = Ur),
    (e.isDefaultPrevented = Fr),
    (e.nativeEvent = e)
  );
};
var or,
  Jt = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  $t = E.vnode;
E.vnode = function (e) {
  var t = e.type,
    n = e.props,
    r = n;
  if (typeof t == 'string') {
    for (var o in ((r = {}), n)) {
      var a = n[o];
      (o === 'value' && 'defaultValue' in n && a == null) ||
        (o === 'defaultValue' && 'value' in n && n.value == null
          ? (o = 'value')
          : o === 'download' && a === !0
          ? (a = '')
          : /ondoubleclick/i.test(o)
          ? (o = 'ondblclick')
          : /^onchange(textarea|input)/i.test(o + t) && !Mr(n.type)
          ? (o = 'oninput')
          : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
          ? (o = o.toLowerCase())
          : qr.test(o)
          ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
          : a === null && (a = void 0),
        (r[o] = a));
    }
    t == 'select' &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = J(n.children).forEach(function (i) {
        i.props.selected = r.value.indexOf(i.props.value) != -1;
      })),
      t == 'select' &&
        r.defaultValue != null &&
        (r.value = J(n.children).forEach(function (i) {
          i.props.selected = r.multiple
            ? r.defaultValue.indexOf(i.props.value) != -1
            : r.defaultValue == i.props.value;
        })),
      (e.props = r);
  }
  t &&
    n.class != n.className &&
    ((Jt.enumerable = 'className' in n),
    n.className != null && (r.class = n.className),
    Object.defineProperty(r, 'className', Jt)),
    (e.$$typeof = nr),
    $t && $t(e);
};
var Qt = E.__r;
E.__r = function (e) {
  Qt && Qt(e), (or = e.__c);
};
var Br = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (e) {
        return or.__n[e.__c].props.value;
      },
    },
  },
};
(typeof performance > 'u' ? 'undefined' : we(performance)) == 'object' &&
  typeof performance.now == 'function' &&
  performance.now.bind(performance);
function Zt(e) {
  return !!e && e.$$typeof === nr;
}
var f = {
  useState: Qn,
  useReducer: Zn,
  useEffect: Yn,
  useLayoutEffect: Ft,
  useRef: function (e) {
    return (
      (ue = 5),
      rt(function () {
        return { current: e };
      }, [])
    );
  },
  useImperativeHandle: function (e, t, n) {
    (ue = 6),
      Ft(
        function () {
          typeof e == 'function' ? e(t()) : e && (e.current = t());
        },
        n == null ? n : n.concat(e)
      );
  },
  useMemo: rt,
  useCallback: function (e, t) {
    return (
      (ue = 8),
      rt(function () {
        return e;
      }, t)
    );
  },
  useContext: function (e) {
    var t = T.context[e.__c],
      n = ke(le++, 9);
    return (
      (n.__c = e),
      t ? (n.__ == null && ((n.__ = !0), t.sub(T)), t.props.value) : e.__
    );
  },
  useDebugValue: function (e, t) {
    E.useDebugValue && E.useDebugValue(t ? t(e) : e);
  },
  version: '16.8.0',
  Children: Nr,
  render: rr,
  hydrate: function (e, t, n) {
    return $n(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  },
  unmountComponentAtNode: function (e) {
    return !!e.__k && (Pe(null, e), !0);
  },
  createPortal: tr,
  createElement: V,
  createContext: function (e, t) {
    var n = {
      __c: (t = '__cC' + Hn++),
      __: e,
      Consumer: function (r, o) {
        return r.children(o);
      },
      Provider: function (r) {
        var o, a;
        return (
          this.getChildContext ||
            ((o = []),
            ((a = {})[t] = this),
            (this.getChildContext = function () {
              return a;
            }),
            (this.shouldComponentUpdate = function (i) {
              this.props.value !== i.value && o.some(pt);
            }),
            (this.sub = function (i) {
              o.push(i);
              var u = i.componentWillUnmount;
              i.componentWillUnmount = function () {
                o.splice(o.indexOf(i), 1), u && u.call(i);
              };
            })),
          r.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  },
  createFactory: function (e) {
    return V.bind(null, e);
  },
  cloneElement: function (e) {
    return Zt(e) ? Cr.apply(null, arguments) : e;
  },
  createRef: function () {
    return { current: null };
  },
  Fragment: Z,
  isValidElement: Zt,
  findDOMNode: function (e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  },
  Component: W,
  PureComponent: vt,
  memo: function (e, t) {
    function n(o) {
      var a = this.props.ref,
        i = a == o.ref;
      return (
        !i && a && (a.call ? a(null) : (a.current = null)),
        t ? !t(this.props, o) || !i : ht(this.props, o)
      );
    }
    function r(o) {
      return (this.shouldComponentUpdate = n), V(e, o);
    }
    return (
      (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
      (r.prototype.isReactComponent = !0),
      (r.__f = !0),
      r
    );
  },
  forwardRef: function (e) {
    function t(n, r) {
      var o = Xn({}, n);
      return (
        delete o.ref,
        e(
          o,
          (r = n.ref || r) && (we(r) != 'object' || 'current' in r) ? r : null
        )
      );
    }
    return (
      (t.$$typeof = xr),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
      t
    );
  },
  unstable_batchedUpdates: function (e, t) {
    return e(t);
  },
  StrictMode: Z,
  Suspense: Ue,
  SuspenseList: ge,
  lazy: function (e) {
    var t, n, r;
    function o(a) {
      if (
        (t ||
          (t = e()).then(
            function (i) {
              n = i.default || i;
            },
            function (i) {
              r = i;
            }
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return V(n, a);
    }
    return (o.displayName = 'Lazy'), (o.__f = !0), o;
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Br,
};
function Vr() {
  return f.createElement(
    'svg',
    { width: '15', height: '15', className: 'DocSearch-Control-Key-Icon' },
    f.createElement('path', {
      d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
      strokeWidth: '1.2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'square',
    })
  );
}
function ar() {
  return f.createElement(
    'svg',
    {
      width: '20',
      height: '20',
      className: 'DocSearch-Search-Icon',
      viewBox: '0 0 20 20',
    },
    f.createElement('path', {
      d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  );
}
var Wr = ['translations'];
function yt() {
  return (
    (yt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    yt.apply(this, arguments)
  );
}
function Kr(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o =
        n == null
          ? null
          : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) &&
            (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (c) {
          (s = !0), (i = c);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (!!n) {
        if (typeof n == 'string') return Yt(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name),
          o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (
          o === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        )
          return Yt(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zr(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var Jr = f.forwardRef(function (e, t) {
  var n = e.translations,
    r = n === void 0 ? {} : n,
    o = zr(e, Wr),
    a = r.buttonText,
    i = a === void 0 ? 'Search' : a,
    u = r.buttonAriaLabel,
    l = u === void 0 ? 'Search' : u,
    s = Kr(Qn(null), 2),
    c = s[0],
    m = s[1];
  return (
    Yn(function () {
      typeof navigator < 'u' &&
        (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ? m('\u2318')
          : m('Ctrl'));
    }, []),
    f.createElement(
      'button',
      yt(
        {
          type: 'button',
          className: 'DocSearch DocSearch-Button',
          'aria-label': l,
        },
        o,
        { ref: t }
      ),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Container' },
        f.createElement(ar, null),
        f.createElement(
          'span',
          { className: 'DocSearch-Button-Placeholder' },
          i
        )
      ),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Keys' },
        c !== null &&
          f.createElement(
            f.Fragment,
            null,
            f.createElement(
              'kbd',
              { className: 'DocSearch-Button-Key' },
              c === 'Ctrl' ? f.createElement(Vr, null) : c
            ),
            f.createElement('kbd', { className: 'DocSearch-Button-Key' }, 'K')
          )
      )
    )
  );
});
function Ie(e) {
  return e.reduce(function (t, n) {
    return t.concat(n);
  }, []);
}
var $r = 0;
function _t(e) {
  return e.collections.length === 0
    ? 0
    : e.collections.reduce(function (t, n) {
        return t + n.items.length;
      }, 0);
}
var ir = function () {},
  Qr = [{ segment: 'autocomplete-core', version: '1.7.2' }];
function Fe(e, t) {
  var n = t;
  return {
    then: function (r, o) {
      return Fe(e.then(xe(r, n, e), xe(o, n, e)), n);
    },
    catch: function (r) {
      return Fe(e.catch(xe(r, n, e)), n);
    },
    finally: function (r) {
      return (
        r && n.onCancelList.push(r),
        Fe(
          e.finally(
            xe(
              r &&
                function () {
                  return (n.onCancelList = []), r();
                },
              n,
              e
            )
          ),
          n
        )
      );
    },
    cancel: function () {
      n.isCanceled = !0;
      var r = n.onCancelList;
      (n.onCancelList = []),
        r.forEach(function (o) {
          o();
        });
    },
    isCanceled: function () {
      return n.isCanceled === !0;
    },
  };
}
function Gt(e) {
  return Fe(e, { isCanceled: !1, onCancelList: [] });
}
function xe(e, t, n) {
  return e
    ? function (r) {
        return t.isCanceled ? r : e(r);
      }
    : n;
}
function Xt(e, t, n, r) {
  if (!n) return null;
  if (e < 0 && (t === null || (r !== null && t === 0))) return n + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= n ? (r === null ? null : 0) : o;
}
function en(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Zr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Yr(e, t) {
  var n = [];
  return Promise.resolve(e(t)).then(function (r) {
    return Promise.all(
      r
        .filter(function (o) {
          return Boolean(o);
        })
        .map(function (o) {
          if ((o.sourceId, n.includes(o.sourceId)))
            throw new Error(
              '[Autocomplete] The `sourceId` '.concat(
                JSON.stringify(o.sourceId),
                ' is not unique.'
              )
            );
          n.push(o.sourceId);
          var a = (function (i) {
            for (var u = 1; u < arguments.length; u++) {
              var l = arguments[u] != null ? arguments[u] : {};
              u % 2
                ? en(Object(l), !0).forEach(function (s) {
                    Zr(i, s, l[s]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    i,
                    Object.getOwnPropertyDescriptors(l)
                  )
                : en(Object(l)).forEach(function (s) {
                    Object.defineProperty(
                      i,
                      s,
                      Object.getOwnPropertyDescriptor(l, s)
                    );
                  });
            }
            return i;
          })(
            {
              getItemInputValue: function (i) {
                return i.state.query;
              },
              getItemUrl: function () {},
              onSelect: function (i) {
                (0, i.setIsOpen)(!1);
              },
              onActive: ir,
            },
            o
          );
          return Promise.resolve(a);
        })
    );
  });
}
function ie(e) {
  var t = (function (o) {
    var a = o.collections
      .map(function (i) {
        return i.items.length;
      })
      .reduce(function (i, u, l) {
        var s = (i[l - 1] || 0) + u;
        return i.push(s), i;
      }, [])
      .reduce(function (i, u) {
        return u <= o.activeItemId ? i + 1 : i;
      }, 0);
    return o.collections[a];
  })(e);
  if (!t) return null;
  var n =
      t.items[
        (function (o) {
          for (
            var a = o.state, i = o.collection, u = !1, l = 0, s = 0;
            u === !1;

          ) {
            var c = a.collections[l];
            if (c === i) {
              u = !0;
              break;
            }
            (s += c.items.length), l++;
          }
          return a.activeItemId - s;
        })({ state: e, collection: t })
      ],
    r = t.source;
  return {
    item: n,
    itemInputValue: r.getItemInputValue({ item: n, state: e }),
    itemUrl: r.getItemUrl({ item: n, state: e }),
    source: r,
  };
}
var Gr = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tn(Object(n), !0).forEach(function (r) {
          Xr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Xr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function eo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function to(e, t, n) {
  var r,
    o = t.initialState;
  return {
    getState: function () {
      return o;
    },
    dispatch: function (a, i) {
      var u = (function (l) {
        for (var s = 1; s < arguments.length; s++) {
          var c = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? nn(Object(c), !0).forEach(function (m) {
                eo(l, m, c[m]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c))
            : nn(Object(c)).forEach(function (m) {
                Object.defineProperty(
                  l,
                  m,
                  Object.getOwnPropertyDescriptor(c, m)
                );
              });
        }
        return l;
      })({}, o);
      (o = e(o, { type: a, props: t, payload: i })),
        n({ state: o, prevState: u });
    },
    pendingRequests:
      ((r = []),
      {
        add: function (a) {
          return (
            r.push(a),
            a.finally(function () {
              r = r.filter(function (i) {
                return i !== a;
              });
            })
          );
        },
        cancelAll: function () {
          r.forEach(function (a) {
            return a.cancel();
          });
        },
        isEmpty: function () {
          return r.length === 0;
        },
      }),
  };
}
function rn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rn(Object(n), !0).forEach(function (r) {
          no(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : rn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function no(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ro(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ot(t);
    })(e) ||
    (function (t) {
      if (
        (typeof Symbol < 'u' && t[Symbol.iterator] != null) ||
        t['@@iterator'] != null
      )
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (!!t) {
        if (typeof t == 'string') return ot(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name),
          r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (
          r === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return ot(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function on(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? on(Object(n), !0).forEach(function (r) {
          oo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : on(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function oo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function an(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? an(Object(n), !0).forEach(function (r) {
          cr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : an(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function cr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ao(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return at(t);
    })(e) ||
    (function (t) {
      if (
        (typeof Symbol < 'u' && t[Symbol.iterator] != null) ||
        t['@@iterator'] != null
      )
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (!!t) {
        if (typeof t == 'string') return at(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name),
          r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (
          r === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return at(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function at(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cn(Object(n), !0).forEach(function (r) {
          io(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function io(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Le(e) {
  return Boolean(e.execute);
}
function co(e, t) {
  return (
    (n = e),
    Boolean(n == null ? void 0 : n.execute)
      ? un(
          un({}, e),
          {},
          {
            requests: e.queries.map(function (r) {
              return {
                query: r,
                sourceId: t,
                transformResponse: e.transformResponse,
              };
            }),
          }
        )
      : { items: e, sourceId: t }
  );
  var n;
}
function uo(e) {
  var t = e
    .reduce(function (n, r) {
      if (!Le(r)) return n.push(r), n;
      var o = r.searchClient,
        a = r.execute,
        i = r.requesterId,
        u = r.requests,
        l = n.find(function (m) {
          return (
            Le(r) &&
            Le(m) &&
            m.searchClient === o &&
            Boolean(i) &&
            m.requesterId === i
          );
        });
      if (l) {
        var s;
        (s = l.items).push.apply(s, ao(u));
      } else {
        var c = { execute: a, requesterId: i, items: u, searchClient: o };
        n.push(c);
      }
      return n;
    }, [])
    .map(function (n) {
      if (!Le(n)) return Promise.resolve(n);
      var r = n,
        o = r.execute,
        a = r.items;
      return o({ searchClient: r.searchClient, requests: a });
    });
  return Promise.all(t).then(function (n) {
    return Ie(n);
  });
}
function lo(e, t) {
  return t.map(function (n) {
    var r = e.filter(function (u) {
        return u.sourceId === n.sourceId;
      }),
      o = r.map(function (u) {
        return u.items;
      }),
      a = r[0].transformResponse,
      i = a
        ? a(
            (function (u) {
              var l = u.map(function (s) {
                var c;
                return Ne(
                  Ne({}, s),
                  {},
                  {
                    hits:
                      (c = s.hits) === null || c === void 0
                        ? void 0
                        : c.map(function (m) {
                            return Ne(
                              Ne({}, m),
                              {},
                              {
                                __autocomplete_indexName: s.index,
                                __autocomplete_queryID: s.queryID,
                              }
                            );
                          }),
                  }
                );
              });
              return {
                results: l,
                hits: l
                  .map(function (s) {
                    return s.hits;
                  })
                  .filter(Boolean),
                facetHits: l
                  .map(function (s) {
                    var c;
                    return (c = s.facetHits) === null || c === void 0
                      ? void 0
                      : c.map(function (m) {
                          return {
                            label: m.value,
                            count: m.count,
                            _highlightResult: {
                              label: { value: m.highlighted },
                            },
                          };
                        });
                  })
                  .filter(Boolean),
              };
            })(o)
          )
        : o;
    return (
      i.every(Boolean),
      'The `getItems` function from source "'
        .concat(n.sourceId, '" must return an array of items but returned ')
        .concat(
          JSON.stringify(void 0),
          `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`
        ),
      { source: n, items: i }
    );
  });
}
var so = ['event', 'nextState', 'props', 'query', 'refresh', 'store'];
function ln(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ln(Object(n), !0).forEach(function (r) {
          fo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ln(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function fo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function po(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var sn,
  it,
  qe,
  ye = null,
  fn =
    ((sn = -1),
    (it = -1),
    (qe = void 0),
    function (e) {
      var t = ++sn;
      return Promise.resolve(e).then(function (n) {
        return qe && t < it ? qe : ((it = t), (qe = n), n);
      });
    });
function ae(e) {
  var t = e.event,
    n = e.nextState,
    r = n === void 0 ? {} : n,
    o = e.props,
    a = e.query,
    i = e.refresh,
    u = e.store,
    l = po(e, so);
  ye && o.environment.clearTimeout(ye);
  var s = l.setCollections,
    c = l.setIsOpen,
    m = l.setQuery,
    d = l.setActiveItemId,
    p = l.setStatus;
  if ((m(a), d(o.defaultActiveItemId), !a && o.openOnFocus === !1)) {
    var _,
      h = u.getState().collections.map(function (S) {
        return ve(ve({}, S), {}, { items: [] });
      });
    p('idle'),
      s(h),
      c(
        (_ = r.isOpen) !== null && _ !== void 0
          ? _
          : o.shouldPanelOpen({ state: u.getState() })
      );
    var g = Gt(
      fn(h).then(function () {
        return Promise.resolve();
      })
    );
    return u.pendingRequests.add(g);
  }
  p('loading'),
    (ye = o.environment.setTimeout(function () {
      p('stalled');
    }, o.stallThreshold));
  var v = Gt(
    fn(
      o
        .getSources(ve({ query: a, refresh: i, state: u.getState() }, l))
        .then(function (S) {
          return Promise.all(
            S.map(function (O) {
              return Promise.resolve(
                O.getItems(ve({ query: a, refresh: i, state: u.getState() }, l))
              ).then(function (y) {
                return co(y, O.sourceId);
              });
            })
          )
            .then(uo)
            .then(function (O) {
              return lo(O, S);
            })
            .then(function (O) {
              return (function (y) {
                var b = y.collections,
                  I = y.props,
                  N = y.state,
                  A = b.reduce(function (k, R) {
                    return Te(
                      Te({}, k),
                      {},
                      cr(
                        {},
                        R.source.sourceId,
                        Te(
                          Te({}, R.source),
                          {},
                          {
                            getItems: function () {
                              return Ie(R.items);
                            },
                          }
                        )
                      )
                    );
                  }, {});
                return Ie(
                  I.reshape({
                    sources: Object.values(A),
                    sourcesBySourceId: A,
                    state: N,
                  })
                )
                  .filter(Boolean)
                  .map(function (k) {
                    return { source: k, items: k.getItems() };
                  });
              })({ collections: O, props: o, state: u.getState() });
            });
        })
    )
  )
    .then(function (S) {
      var O;
      p('idle'), s(S);
      var y = o.shouldPanelOpen({ state: u.getState() });
      c(
        (O = r.isOpen) !== null && O !== void 0
          ? O
          : (o.openOnFocus && !a && y) || y
      );
      var b = ie(u.getState());
      if (u.getState().activeItemId !== null && b) {
        var I = b.item,
          N = b.itemInputValue,
          A = b.itemUrl,
          k = b.source;
        k.onActive(
          ve(
            {
              event: t,
              item: I,
              itemInputValue: N,
              itemUrl: A,
              refresh: i,
              source: k,
              state: u.getState(),
            },
            l
          )
        );
      }
    })
    .finally(function () {
      p('idle'), ye && o.environment.clearTimeout(ye);
    });
  return u.pendingRequests.add(v);
}
var mo = ['event', 'props', 'refresh', 'store'];
function pn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pn(Object(n), !0).forEach(function (r) {
          ho(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : pn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ho(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function vo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var yo = ['props', 'refresh', 'store'],
  _o = ['inputElement', 'formElement', 'panelElement'],
  go = ['inputElement'],
  bo = ['inputElement', 'maxLength'],
  Oo = ['item', 'source'];
function mn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mn(Object(n), !0).forEach(function (r) {
          So(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : mn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function So(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _e(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Eo(e) {
  var t = e.props,
    n = e.refresh,
    r = e.store,
    o = _e(e, yo);
  return {
    getEnvironmentProps: function (a) {
      var i = a.inputElement,
        u = a.formElement,
        l = a.panelElement;
      function s(c) {
        (!r.getState().isOpen && r.pendingRequests.isEmpty()) ||
          c.target === i ||
          ([u, l].some(function (m) {
            return (d = m), (p = c.target), d === p || d.contains(p);
            var d, p;
          }) === !1 &&
            (r.dispatch('blur', null),
            t.debug || r.pendingRequests.cancelAll()));
      }
      return x(
        {
          onTouchStart: s,
          onMouseDown: s,
          onTouchMove: function (c) {
            r.getState().isOpen !== !1 &&
              i === t.environment.document.activeElement &&
              c.target !== i &&
              i.blur();
          },
        },
        _e(a, _o)
      );
    },
    getRootProps: function (a) {
      return x(
        {
          role: 'combobox',
          'aria-expanded': r.getState().isOpen,
          'aria-haspopup': 'listbox',
          'aria-owns': r.getState().isOpen ? ''.concat(t.id, '-list') : void 0,
          'aria-labelledby': ''.concat(t.id, '-label'),
        },
        a
      );
    },
    getFormProps: function (a) {
      return (
        a.inputElement,
        x(
          {
            action: '',
            noValidate: !0,
            role: 'search',
            onSubmit: function (i) {
              var u;
              i.preventDefault(),
                t.onSubmit(x({ event: i, refresh: n, state: r.getState() }, o)),
                r.dispatch('submit', null),
                (u = a.inputElement) === null || u === void 0 || u.blur();
            },
            onReset: function (i) {
              var u;
              i.preventDefault(),
                t.onReset(x({ event: i, refresh: n, state: r.getState() }, o)),
                r.dispatch('reset', null),
                (u = a.inputElement) === null || u === void 0 || u.focus();
            },
          },
          _e(a, go)
        )
      );
    },
    getLabelProps: function (a) {
      return x(
        { htmlFor: ''.concat(t.id, '-input'), id: ''.concat(t.id, '-label') },
        a
      );
    },
    getInputProps: function (a) {
      var i;
      function u(h) {
        (t.openOnFocus || Boolean(r.getState().query)) &&
          ae(
            x(
              {
                event: h,
                props: t,
                query: r.getState().completion || r.getState().query,
                refresh: n,
                store: r,
              },
              o
            )
          ),
          r.dispatch('focus', null);
      }
      var l = a || {},
        s = (l.inputElement, l.maxLength),
        c = s === void 0 ? 512 : s,
        m = _e(l, bo),
        d = ie(r.getState()),
        p = (function (h) {
          return Boolean(h && h.match(Gr));
        })(
          ((i = t.environment.navigator) === null || i === void 0
            ? void 0
            : i.userAgent) || ''
        ),
        _ = d != null && d.itemUrl && !p ? 'go' : 'search';
      return x(
        {
          'aria-autocomplete': 'both',
          'aria-activedescendant':
            r.getState().isOpen && r.getState().activeItemId !== null
              ? ''.concat(t.id, '-item-').concat(r.getState().activeItemId)
              : void 0,
          'aria-controls': r.getState().isOpen
            ? ''.concat(t.id, '-list')
            : void 0,
          'aria-labelledby': ''.concat(t.id, '-label'),
          value: r.getState().completion || r.getState().query,
          id: ''.concat(t.id, '-input'),
          autoComplete: 'off',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          enterKeyHint: _,
          spellCheck: 'false',
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: c,
          type: 'search',
          onChange: function (h) {
            ae(
              x(
                {
                  event: h,
                  props: t,
                  query: h.currentTarget.value.slice(0, c),
                  refresh: n,
                  store: r,
                },
                o
              )
            );
          },
          onKeyDown: function (h) {
            (function (g) {
              var v = g.event,
                S = g.props,
                O = g.refresh,
                y = g.store,
                b = vo(g, mo);
              if (v.key === 'ArrowUp' || v.key === 'ArrowDown') {
                var I = function () {
                    var q = S.environment.document.getElementById(
                      ''
                        .concat(S.id, '-item-')
                        .concat(y.getState().activeItemId)
                    );
                    q &&
                      (q.scrollIntoViewIfNeeded
                        ? q.scrollIntoViewIfNeeded(!1)
                        : q.scrollIntoView(!1));
                  },
                  N = function () {
                    var q = ie(y.getState());
                    if (y.getState().activeItemId !== null && q) {
                      var De = q.item,
                        Y = q.itemInputValue,
                        Xe = q.itemUrl,
                        se = q.source;
                      se.onActive(
                        X(
                          {
                            event: v,
                            item: De,
                            itemInputValue: Y,
                            itemUrl: Xe,
                            refresh: O,
                            source: se,
                            state: y.getState(),
                          },
                          b
                        )
                      );
                    }
                  };
                v.preventDefault(),
                  y.getState().isOpen === !1 &&
                  (S.openOnFocus || Boolean(y.getState().query))
                    ? ae(
                        X(
                          {
                            event: v,
                            props: S,
                            query: y.getState().query,
                            refresh: O,
                            store: y,
                          },
                          b
                        )
                      ).then(function () {
                        y.dispatch(v.key, {
                          nextActiveItemId: S.defaultActiveItemId,
                        }),
                          N(),
                          setTimeout(I, 0);
                      })
                    : (y.dispatch(v.key, {}), N(), I());
              } else if (v.key === 'Escape')
                v.preventDefault(),
                  y.dispatch(v.key, null),
                  y.pendingRequests.cancelAll();
              else if (v.key === 'Tab')
                y.dispatch('blur', null), y.pendingRequests.cancelAll();
              else if (v.key === 'Enter') {
                if (
                  y.getState().activeItemId === null ||
                  y.getState().collections.every(function (q) {
                    return q.items.length === 0;
                  })
                )
                  return void (S.debug || y.pendingRequests.cancelAll());
                v.preventDefault();
                var A = ie(y.getState()),
                  k = A.item,
                  R = A.itemInputValue,
                  L = A.itemUrl,
                  B = A.source;
                if (v.metaKey || v.ctrlKey)
                  L !== void 0 &&
                    (B.onSelect(
                      X(
                        {
                          event: v,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: y.getState(),
                        },
                        b
                      )
                    ),
                    S.navigator.navigateNewTab({
                      itemUrl: L,
                      item: k,
                      state: y.getState(),
                    }));
                else if (v.shiftKey)
                  L !== void 0 &&
                    (B.onSelect(
                      X(
                        {
                          event: v,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: y.getState(),
                        },
                        b
                      )
                    ),
                    S.navigator.navigateNewWindow({
                      itemUrl: L,
                      item: k,
                      state: y.getState(),
                    }));
                else if (!v.altKey) {
                  if (L !== void 0)
                    return (
                      B.onSelect(
                        X(
                          {
                            event: v,
                            item: k,
                            itemInputValue: R,
                            itemUrl: L,
                            refresh: O,
                            source: B,
                            state: y.getState(),
                          },
                          b
                        )
                      ),
                      void S.navigator.navigate({
                        itemUrl: L,
                        item: k,
                        state: y.getState(),
                      })
                    );
                  ae(
                    X(
                      {
                        event: v,
                        nextState: { isOpen: !1 },
                        props: S,
                        query: R,
                        refresh: O,
                        store: y,
                      },
                      b
                    )
                  ).then(function () {
                    B.onSelect(
                      X(
                        {
                          event: v,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: y.getState(),
                        },
                        b
                      )
                    );
                  });
                }
              }
            })(x({ event: h, props: t, refresh: n, store: r }, o));
          },
          onFocus: u,
          onBlur: ir,
          onClick: function (h) {
            a.inputElement !== t.environment.document.activeElement ||
              r.getState().isOpen ||
              u(h);
          },
        },
        m
      );
    },
    getPanelProps: function (a) {
      return x(
        {
          onMouseDown: function (i) {
            i.preventDefault();
          },
          onMouseLeave: function () {
            r.dispatch('mouseleave', null);
          },
        },
        a
      );
    },
    getListProps: function (a) {
      return x(
        {
          role: 'listbox',
          'aria-labelledby': ''.concat(t.id, '-label'),
          id: ''.concat(t.id, '-list'),
        },
        a
      );
    },
    getItemProps: function (a) {
      var i = a.item,
        u = a.source,
        l = _e(a, Oo);
      return x(
        {
          id: ''.concat(t.id, '-item-').concat(i.__autocomplete_id),
          role: 'option',
          'aria-selected': r.getState().activeItemId === i.__autocomplete_id,
          onMouseMove: function (s) {
            if (i.__autocomplete_id !== r.getState().activeItemId) {
              r.dispatch('mousemove', i.__autocomplete_id);
              var c = ie(r.getState());
              if (r.getState().activeItemId !== null && c) {
                var m = c.item,
                  d = c.itemInputValue,
                  p = c.itemUrl,
                  _ = c.source;
                _.onActive(
                  x(
                    {
                      event: s,
                      item: m,
                      itemInputValue: d,
                      itemUrl: p,
                      refresh: n,
                      source: _,
                      state: r.getState(),
                    },
                    o
                  )
                );
              }
            }
          },
          onMouseDown: function (s) {
            s.preventDefault();
          },
          onClick: function (s) {
            var c = u.getItemInputValue({ item: i, state: r.getState() }),
              m = u.getItemUrl({ item: i, state: r.getState() });
            (m
              ? Promise.resolve()
              : ae(
                  x(
                    {
                      event: s,
                      nextState: { isOpen: !1 },
                      props: t,
                      query: c,
                      refresh: n,
                      store: r,
                    },
                    o
                  )
                )
            ).then(function () {
              u.onSelect(
                x(
                  {
                    event: s,
                    item: i,
                    itemInputValue: c,
                    itemUrl: m,
                    refresh: n,
                    source: u,
                    state: r.getState(),
                  },
                  o
                )
              );
            });
          },
        },
        l
      );
    },
  };
}
function dn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function wo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dn(Object(n), !0).forEach(function (r) {
          ur(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ur(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jo(e) {
  var t,
    n,
    r,
    o,
    a = e.plugins,
    i = e.options,
    u =
      (t = (((n = i.__autocomplete_metadata) === null || n === void 0
        ? void 0
        : n.userAgents) || [])[0]) === null || t === void 0
        ? void 0
        : t.segment,
    l = u
      ? ur(
          {},
          u,
          Object.keys(
            ((r = i.__autocomplete_metadata) === null || r === void 0
              ? void 0
              : r.options) || {}
          )
        )
      : {};
  return {
    plugins: a.map(function (s) {
      return {
        name: s.name,
        options: Object.keys(s.__autocomplete_pluginOptions || []),
      };
    }),
    options: wo({ 'autocomplete-core': Object.keys(i) }, l),
    ua: Qr.concat(
      ((o = i.__autocomplete_metadata) === null || o === void 0
        ? void 0
        : o.userAgents) || []
    ),
  };
}
function hn(e) {
  var t,
    n = e.state;
  return n.isOpen === !1 || n.activeItemId === null
    ? null
    : ((t = ie(n)) === null || t === void 0 ? void 0 : t.itemInputValue) ||
        null;
}
function vn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vn(Object(n), !0).forEach(function (r) {
          Po(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Po(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Io = function (e, t) {
  switch (t.type) {
    case 'setActiveItemId':
    case 'mousemove':
      return w(w({}, e), {}, { activeItemId: t.payload });
    case 'setQuery':
      return w(w({}, e), {}, { query: t.payload, completion: null });
    case 'setCollections':
      return w(w({}, e), {}, { collections: t.payload });
    case 'setIsOpen':
      return w(w({}, e), {}, { isOpen: t.payload });
    case 'setStatus':
      return w(w({}, e), {}, { status: t.payload });
    case 'setContext':
      return w(w({}, e), {}, { context: w(w({}, e.context), t.payload) });
    case 'ArrowDown':
      var n = w(
        w({}, e),
        {},
        {
          activeItemId: t.payload.hasOwnProperty('nextActiveItemId')
            ? t.payload.nextActiveItemId
            : Xt(1, e.activeItemId, _t(e), t.props.defaultActiveItemId),
        }
      );
      return w(w({}, n), {}, { completion: hn({ state: n }) });
    case 'ArrowUp':
      var r = w(
        w({}, e),
        {},
        {
          activeItemId: Xt(
            -1,
            e.activeItemId,
            _t(e),
            t.props.defaultActiveItemId
          ),
        }
      );
      return w(w({}, r), {}, { completion: hn({ state: r }) });
    case 'Escape':
      return e.isOpen
        ? w(w({}, e), {}, { activeItemId: null, isOpen: !1, completion: null })
        : w(
            w({}, e),
            {},
            { activeItemId: null, query: '', status: 'idle', collections: [] }
          );
    case 'submit':
      return w(
        w({}, e),
        {},
        { activeItemId: null, isOpen: !1, status: 'idle' }
      );
    case 'reset':
      return w(
        w({}, e),
        {},
        {
          activeItemId:
            t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null,
          status: 'idle',
          query: '',
        }
      );
    case 'focus':
      return w(
        w({}, e),
        {},
        {
          activeItemId: t.props.defaultActiveItemId,
          isOpen:
            (t.props.openOnFocus || Boolean(e.query)) &&
            t.props.shouldPanelOpen({ state: e }),
        }
      );
    case 'blur':
      return t.props.debug
        ? e
        : w(w({}, e), {}, { isOpen: !1, activeItemId: null });
    case 'mouseleave':
      return w(w({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return (
        'The reducer action '.concat(
          JSON.stringify(t.type),
          ' is not supported.'
        ),
        e
      );
  }
};
function yn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yn(Object(n), !0).forEach(function (r) {
          ko(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : yn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ko(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Do(e) {
  var t = [],
    n = (function (u, l) {
      var s,
        c = typeof window < 'u' ? window : {},
        m = u.plugins || [];
      return re(
        re(
          {
            debug: !1,
            openOnFocus: !1,
            placeholder: '',
            autoFocus: !1,
            defaultActiveItemId: null,
            stallThreshold: 300,
            environment: c,
            shouldPanelOpen: function (d) {
              return _t(d.state) > 0;
            },
            reshape: function (d) {
              return d.sources;
            },
          },
          u
        ),
        {},
        {
          id:
            (s = u.id) !== null && s !== void 0
              ? s
              : 'autocomplete-'.concat($r++),
          plugins: m,
          initialState: re(
            {
              activeItemId: null,
              query: '',
              completion: null,
              collections: [],
              isOpen: !1,
              status: 'idle',
              context: {},
            },
            u.initialState
          ),
          onStateChange: function (d) {
            var p;
            (p = u.onStateChange) === null || p === void 0 || p.call(u, d),
              m.forEach(function (_) {
                var h;
                return (h = _.onStateChange) === null || h === void 0
                  ? void 0
                  : h.call(_, d);
              });
          },
          onSubmit: function (d) {
            var p;
            (p = u.onSubmit) === null || p === void 0 || p.call(u, d),
              m.forEach(function (_) {
                var h;
                return (h = _.onSubmit) === null || h === void 0
                  ? void 0
                  : h.call(_, d);
              });
          },
          onReset: function (d) {
            var p;
            (p = u.onReset) === null || p === void 0 || p.call(u, d),
              m.forEach(function (_) {
                var h;
                return (h = _.onReset) === null || h === void 0
                  ? void 0
                  : h.call(_, d);
              });
          },
          getSources: function (d) {
            return Promise.all(
              []
                .concat(
                  ro(
                    m.map(function (p) {
                      return p.getSources;
                    })
                  ),
                  [u.getSources]
                )
                .filter(Boolean)
                .map(function (p) {
                  return Yr(p, d);
                })
            )
              .then(function (p) {
                return Ie(p);
              })
              .then(function (p) {
                return p.map(function (_) {
                  return re(
                    re({}, _),
                    {},
                    {
                      onSelect: function (h) {
                        _.onSelect(h),
                          l.forEach(function (g) {
                            var v;
                            return (v = g.onSelect) === null || v === void 0
                              ? void 0
                              : v.call(g, h);
                          });
                      },
                      onActive: function (h) {
                        _.onActive(h),
                          l.forEach(function (g) {
                            var v;
                            return (v = g.onActive) === null || v === void 0
                              ? void 0
                              : v.call(g, h);
                          });
                      },
                    }
                  );
                });
              });
          },
          navigator: re(
            {
              navigate: function (d) {
                var p = d.itemUrl;
                c.location.assign(p);
              },
              navigateNewTab: function (d) {
                var p = d.itemUrl,
                  _ = c.open(p, '_blank', 'noopener');
                _ == null || _.focus();
              },
              navigateNewWindow: function (d) {
                var p = d.itemUrl;
                c.open(p, '_blank', 'noopener');
              },
            },
            u.navigator
          ),
        }
      );
    })(e, t),
    r = to(Io, n, function (u) {
      var l = u.prevState,
        s = u.state;
      n.onStateChange(ee({ prevState: l, state: s, refresh: i }, o));
    }),
    o = (function (u) {
      var l = u.store;
      return {
        setActiveItemId: function (s) {
          l.dispatch('setActiveItemId', s);
        },
        setQuery: function (s) {
          l.dispatch('setQuery', s);
        },
        setCollections: function (s) {
          var c = 0,
            m = s.map(function (d) {
              return Re(
                Re({}, d),
                {},
                {
                  items: Ie(d.items).map(function (p) {
                    return Re(Re({}, p), {}, { __autocomplete_id: c++ });
                  }),
                }
              );
            });
          l.dispatch('setCollections', m);
        },
        setIsOpen: function (s) {
          l.dispatch('setIsOpen', s);
        },
        setStatus: function (s) {
          l.dispatch('setStatus', s);
        },
        setContext: function (s) {
          l.dispatch('setContext', s);
        },
      };
    })({ store: r }),
    a = Eo(ee({ props: n, refresh: i, store: r }, o));
  function i() {
    return ae(
      ee(
        {
          event: new Event('input'),
          nextState: { isOpen: r.getState().isOpen },
          props: n,
          query: r.getState().query,
          refresh: i,
          store: r,
        },
        o
      )
    );
  }
  return (
    n.plugins.forEach(function (u) {
      var l;
      return (l = u.subscribe) === null || l === void 0
        ? void 0
        : l.call(
            u,
            ee(
              ee({}, o),
              {},
              {
                refresh: i,
                onSelect: function (s) {
                  t.push({ onSelect: s });
                },
                onActive: function (s) {
                  t.push({ onActive: s });
                },
              }
            )
          );
    }),
    (function (u) {
      var l,
        s,
        c = u.metadata,
        m = u.environment;
      if (
        !(
          (l = m.navigator) === null ||
          l === void 0 ||
          (s = l.userAgent) === null ||
          s === void 0
        ) &&
        s.includes('Algolia Crawler')
      ) {
        var d = m.document.createElement('meta'),
          p = m.document.querySelector('head');
        (d.name = 'algolia:metadata'),
          setTimeout(function () {
            (d.content = JSON.stringify(c)), p.appendChild(d);
          }, 0);
      }
    })({
      metadata: jo({ plugins: n.plugins, options: e }),
      environment: n.environment,
    }),
    ee(ee({ refresh: i }, a), o)
  );
}
function Co(e) {
  var t = e.translations,
    n = (t === void 0 ? {} : t).searchByText,
    r = n === void 0 ? 'Search by' : n;
  return f.createElement(
    'a',
    {
      href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(
        window.location.hostname,
        '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch'
      ),
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    f.createElement('span', { className: 'DocSearch-Label' }, r),
    f.createElement(
      'svg',
      {
        width: '77',
        height: '19',
        'aria-label': 'Algolia',
        role: 'img',
        id: 'Layer_1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 2196.2 500',
      },
      f.createElement(
        'defs',
        null,
        f.createElement(
          'style',
          null,
          '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}'
        )
      ),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('rect', {
        className: 'cls-1',
        x: '1845.88',
        y: '104.73',
        width: '62.58',
        height: '277.9',
        rx: '5.9',
        ry: '5.9',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z',
      }),
      f.createElement('path', {
        className: 'cls-1',
        d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z',
      })
    )
  );
}
function Me(e) {
  return f.createElement(
    'svg',
    { width: '15', height: '15', 'aria-label': e.ariaLabel, role: 'img' },
    f.createElement(
      'g',
      {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1.2',
      },
      e.children
    )
  );
}
function Ao(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = n.selectText,
    o = r === void 0 ? 'to select' : r,
    a = n.selectKeyAriaLabel,
    i = a === void 0 ? 'Enter key' : a,
    u = n.navigateText,
    l = u === void 0 ? 'to navigate' : u,
    s = n.navigateUpKeyAriaLabel,
    c = s === void 0 ? 'Arrow up' : s,
    m = n.navigateDownKeyAriaLabel,
    d = m === void 0 ? 'Arrow down' : m,
    p = n.closeText,
    _ = p === void 0 ? 'to close' : p,
    h = n.closeKeyAriaLabel,
    g = h === void 0 ? 'Escape key' : h,
    v = n.searchByText,
    S = v === void 0 ? 'Search by' : v;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(
      'div',
      { className: 'DocSearch-Logo' },
      f.createElement(Co, { translations: { searchByText: S } })
    ),
    f.createElement(
      'ul',
      { className: 'DocSearch-Commands' },
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: i },
            f.createElement('path', {
              d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3',
            })
          )
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, o)
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: d },
            f.createElement('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' })
          )
        ),
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: c },
            f.createElement('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' })
          )
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, l)
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: g },
            f.createElement('path', {
              d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
            })
          )
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, _)
      )
    )
  );
}
function xo(e) {
  var t = e.hit,
    n = e.children;
  return f.createElement('a', { href: t.url }, n);
}
function No() {
  return f.createElement(
    'svg',
    { viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5' },
    f.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      f.createElement(
        'g',
        { transform: 'translate(1 1)', strokeWidth: '2' },
        f.createElement('circle', {
          strokeOpacity: '.3',
          cx: '18',
          cy: '18',
          r: '18',
        }),
        f.createElement(
          'path',
          { d: 'M36 18c0-9.94-8.06-18-18-18' },
          f.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 18 18',
            to: '360 18 18',
            dur: '1s',
            repeatCount: 'indefinite',
          })
        )
      )
    )
  );
}
function Ro() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      f.createElement('path', {
        d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0',
      }),
      f.createElement('path', {
        d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13',
      })
    )
  );
}
function gt() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  );
}
function To() {
  return f.createElement(
    'svg',
    {
      className: 'DocSearch-Hit-Select-Icon',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
    },
    f.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      f.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }),
      f.createElement('path', { d: 'M8 17l-6-6 6-6' })
    )
  );
}
var Lo = function () {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    })
  );
};
function qo(e) {
  switch (e.type) {
    case 'lvl1':
      return f.createElement(Lo, null);
    case 'content':
      return f.createElement(Ho, null);
    default:
      return f.createElement(Mo, null);
  }
}
function Mo() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  );
}
function Ho() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    })
  );
}
function _n() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    })
  );
}
function Uo() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
    })
  );
}
function Fo() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
    })
  );
}
function Bo(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = n.titleText,
    o = r === void 0 ? 'Unable to fetch results' : r,
    a = n.helpText,
    i = a === void 0 ? 'You might want to check your network connection.' : a;
  return f.createElement(
    'div',
    { className: 'DocSearch-ErrorScreen' },
    f.createElement(
      'div',
      { className: 'DocSearch-Screen-Icon' },
      f.createElement(Uo, null)
    ),
    f.createElement('p', { className: 'DocSearch-Title' }, o),
    f.createElement('p', { className: 'DocSearch-Help' }, i)
  );
}
var Vo = ['translations'];
function Wo(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ct(t);
    })(e) ||
    (function (t) {
      if (
        (typeof Symbol < 'u' && t[Symbol.iterator] != null) ||
        t['@@iterator'] != null
      )
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (!!t) {
        if (typeof t == 'string') return ct(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name),
          r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (
          r === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return ct(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function ct(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ko(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function zo(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = Ko(e, Vo),
    o = n.noResultsText,
    a = o === void 0 ? 'No results for' : o,
    i = n.suggestedQueryText,
    u = i === void 0 ? 'Try searching for' : i,
    l = n.reportMissingResultsText,
    s = l === void 0 ? 'Believe this query should return results?' : l,
    c = n.reportMissingResultsLinkText,
    m = c === void 0 ? 'Let us know.' : c,
    d = r.state.context.searchSuggestions;
  return f.createElement(
    'div',
    { className: 'DocSearch-NoResults' },
    f.createElement(
      'div',
      { className: 'DocSearch-Screen-Icon' },
      f.createElement(Fo, null)
    ),
    f.createElement(
      'p',
      { className: 'DocSearch-Title' },
      a,
      ' "',
      f.createElement('strong', null, r.state.query),
      '"'
    ),
    d &&
      d.length > 0 &&
      f.createElement(
        'div',
        { className: 'DocSearch-NoResults-Prefill-List' },
        f.createElement('p', { className: 'DocSearch-Help' }, u, ':'),
        f.createElement(
          'ul',
          null,
          d.slice(0, 3).reduce(function (p, _) {
            return [].concat(Wo(p), [
              f.createElement(
                'li',
                { key: _ },
                f.createElement(
                  'button',
                  {
                    className: 'DocSearch-Prefill',
                    key: _,
                    type: 'button',
                    onClick: function () {
                      r.setQuery(_.toLowerCase() + ' '),
                        r.refresh(),
                        r.inputRef.current.focus();
                    },
                  },
                  _
                )
              ),
            ]);
          }, [])
        )
      ),
    r.getMissingResultsUrl &&
      f.createElement(
        'p',
        { className: 'DocSearch-Help' },
        ''.concat(s, ' '),
        f.createElement(
          'a',
          {
            href: r.getMissingResultsUrl({ query: r.state.query }),
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          m
        )
      )
  );
}
var Jo = ['hit', 'attribute', 'tagName'];
function gn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gn(Object(n), !0).forEach(function (r) {
          $o(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function $o(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Qo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function On(e, t) {
  return t.split('.').reduce(function (n, r) {
    return n != null && n[r] ? n[r] : null;
  }, e);
}
function oe(e) {
  var t = e.hit,
    n = e.attribute,
    r = e.tagName;
  return V(
    r === void 0 ? 'span' : r,
    bn(
      bn({}, Qo(e, Jo)),
      {},
      {
        dangerouslySetInnerHTML: {
          __html: On(t, '_snippetResult.'.concat(n, '.value')) || On(t, n),
        },
      }
    )
  );
}
function Sn(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o =
        n == null
          ? null
          : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) &&
            (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (c) {
          (s = !0), (i = c);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (!!n) {
        if (typeof n == 'string') return En(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name),
          o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (
          o === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        )
          return En(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function En(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Je() {
  return (
    (Je =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Je.apply(this, arguments)
  );
}
function bt(e) {
  return e.collection && e.collection.items.length !== 0
    ? f.createElement(
        'section',
        { className: 'DocSearch-Hits' },
        f.createElement('div', { className: 'DocSearch-Hit-source' }, e.title),
        f.createElement(
          'ul',
          e.getListProps(),
          e.collection.items.map(function (t, n) {
            return f.createElement(
              Zo,
              Je({ key: [e.title, t.objectID].join(':'), item: t, index: n }, e)
            );
          })
        )
      )
    : null;
}
function Zo(e) {
  var t = e.item,
    n = e.index,
    r = e.renderIcon,
    o = e.renderAction,
    a = e.getItemProps,
    i = e.onItemClick,
    u = e.collection,
    l = e.hitComponent,
    s = Sn(f.useState(!1), 2),
    c = s[0],
    m = s[1],
    d = Sn(f.useState(!1), 2),
    p = d[0],
    _ = d[1],
    h = f.useRef(null),
    g = l;
  return f.createElement(
    'li',
    Je(
      {
        className: [
          'DocSearch-Hit',
          t.__docsearch_parent && 'DocSearch-Hit--Child',
          c && 'DocSearch-Hit--deleting',
          p && 'DocSearch-Hit--favoriting',
        ]
          .filter(Boolean)
          .join(' '),
        onTransitionEnd: function () {
          h.current && h.current();
        },
      },
      a({
        item: t,
        source: u.source,
        onClick: function () {
          i(t);
        },
      })
    ),
    f.createElement(
      g,
      { hit: t },
      f.createElement(
        'div',
        { className: 'DocSearch-Hit-Container' },
        r({ item: t, index: n }),
        t.hierarchy[t.type] &&
          t.type === 'lvl1' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, {
              className: 'DocSearch-Hit-title',
              hit: t,
              attribute: 'hierarchy.lvl1',
            }),
            t.content &&
              f.createElement(oe, {
                className: 'DocSearch-Hit-path',
                hit: t,
                attribute: 'content',
              })
          ),
        t.hierarchy[t.type] &&
          (t.type === 'lvl2' ||
            t.type === 'lvl3' ||
            t.type === 'lvl4' ||
            t.type === 'lvl5' ||
            t.type === 'lvl6') &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, {
              className: 'DocSearch-Hit-title',
              hit: t,
              attribute: 'hierarchy.'.concat(t.type),
            }),
            f.createElement(oe, {
              className: 'DocSearch-Hit-path',
              hit: t,
              attribute: 'hierarchy.lvl1',
            })
          ),
        t.type === 'content' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, {
              className: 'DocSearch-Hit-title',
              hit: t,
              attribute: 'content',
            }),
            f.createElement(oe, {
              className: 'DocSearch-Hit-path',
              hit: t,
              attribute: 'hierarchy.lvl1',
            })
          ),
        o({
          item: t,
          runDeleteTransition: function (v) {
            m(!0), (h.current = v);
          },
          runFavoriteTransition: function (v) {
            _(!0), (h.current = v);
          },
        })
      )
    )
  );
}
function wn(e, t) {
  return e.reduce(function (n, r) {
    var o = t(r);
    return (
      n.hasOwnProperty(o) || (n[o] = []), n[o].length < 5 && n[o].push(r), n
    );
  }, {});
}
function jn(e) {
  return e;
}
function Yo() {}
var lr = /(<mark>|<\/mark>)/g,
  Go = RegExp(lr.source);
function sr(e) {
  var t,
    n,
    r,
    o,
    a,
    i = e;
  if (!i.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
  var u = (
    (i.__docsearch_parent
      ? (t = i.__docsearch_parent) === null ||
        t === void 0 ||
        (n = t._highlightResult) === null ||
        n === void 0 ||
        (r = n.hierarchy) === null ||
        r === void 0
        ? void 0
        : r.lvl0
      : (o = e._highlightResult) === null ||
        o === void 0 ||
        (a = o.hierarchy) === null ||
        a === void 0
      ? void 0
      : a.lvl0) || {}
  ).value;
  return u && Go.test(u) ? u.replace(lr, '') : u;
}
function Ot() {
  return (
    (Ot =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ot.apply(this, arguments)
  );
}
function Xo(e) {
  return f.createElement(
    'div',
    { className: 'DocSearch-Dropdown-Container' },
    e.state.collections.map(function (t) {
      if (t.items.length === 0) return null;
      var n = sr(t.items[0]);
      return f.createElement(
        bt,
        Ot({}, e, {
          key: t.source.sourceId,
          title: n,
          collection: t,
          renderIcon: function (r) {
            var o,
              a = r.item,
              i = r.index;
            return f.createElement(
              f.Fragment,
              null,
              a.__docsearch_parent &&
                f.createElement(
                  'svg',
                  { className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54' },
                  f.createElement(
                    'g',
                    {
                      stroke: 'currentColor',
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    },
                    a.__docsearch_parent !==
                      ((o = t.items[i + 1]) === null || o === void 0
                        ? void 0
                        : o.__docsearch_parent)
                      ? f.createElement('path', { d: 'M8 6v21M20 27H8.3' })
                      : f.createElement('path', { d: 'M8 6v42M20 27H8.3' })
                  )
                ),
              f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(qo, { type: a.type })
              )
            );
          },
          renderAction: function () {
            return f.createElement(
              'div',
              { className: 'DocSearch-Hit-action' },
              f.createElement(To, null)
            );
          },
        })
      );
    }),
    e.resultsFooterComponent &&
      f.createElement(
        'section',
        { className: 'DocSearch-HitsFooter' },
        f.createElement(e.resultsFooterComponent, { state: e.state })
      )
  );
}
var ea = ['translations'];
function $e() {
  return (
    ($e =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    $e.apply(this, arguments)
  );
}
function ta(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function na(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = ta(e, ea),
    o = n.recentSearchesTitle,
    a = o === void 0 ? 'Recent' : o,
    i = n.noRecentSearchesText,
    u = i === void 0 ? 'No recent searches' : i,
    l = n.saveRecentSearchButtonTitle,
    s = l === void 0 ? 'Save this search' : l,
    c = n.removeRecentSearchButtonTitle,
    m = c === void 0 ? 'Remove this search from history' : c,
    d = n.favoriteSearchesTitle,
    p = d === void 0 ? 'Favorite' : d,
    _ = n.removeFavoriteSearchButtonTitle,
    h = _ === void 0 ? 'Remove this search from favorites' : _;
  return r.state.status === 'idle' && r.hasCollections === !1
    ? r.disableUserPersonalization
      ? null
      : f.createElement(
          'div',
          { className: 'DocSearch-StartScreen' },
          f.createElement('p', { className: 'DocSearch-Help' }, u)
        )
    : r.hasCollections === !1
    ? null
    : f.createElement(
        'div',
        { className: 'DocSearch-Dropdown-Container' },
        f.createElement(
          bt,
          $e({}, r, {
            title: a,
            collection: r.state.collections[0],
            renderIcon: function () {
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(Ro, null)
              );
            },
            renderAction: function (g) {
              var v = g.item,
                S = g.runFavoriteTransition,
                O = g.runDeleteTransition;
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  f.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: s,
                      type: 'submit',
                      onClick: function (y) {
                        y.preventDefault(),
                          y.stopPropagation(),
                          S(function () {
                            r.favoriteSearches.add(v),
                              r.recentSearches.remove(v),
                              r.refresh();
                          });
                      },
                    },
                    f.createElement(_n, null)
                  )
                ),
                f.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  f.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: m,
                      type: 'submit',
                      onClick: function (y) {
                        y.preventDefault(),
                          y.stopPropagation(),
                          O(function () {
                            r.recentSearches.remove(v), r.refresh();
                          });
                      },
                    },
                    f.createElement(gt, null)
                  )
                )
              );
            },
          })
        ),
        f.createElement(
          bt,
          $e({}, r, {
            title: p,
            collection: r.state.collections[1],
            renderIcon: function () {
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(_n, null)
              );
            },
            renderAction: function (g) {
              var v = g.item,
                S = g.runDeleteTransition;
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-action' },
                f.createElement(
                  'button',
                  {
                    className: 'DocSearch-Hit-action-button',
                    title: h,
                    type: 'submit',
                    onClick: function (O) {
                      O.preventDefault(),
                        O.stopPropagation(),
                        S(function () {
                          r.favoriteSearches.remove(v), r.refresh();
                        });
                    },
                  },
                  f.createElement(gt, null)
                )
              );
            },
          })
        )
      );
}
var ra = ['translations'];
function Qe() {
  return (
    (Qe =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Qe.apply(this, arguments)
  );
}
function oa(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var aa = f.memo(
    function (e) {
      var t = e.translations,
        n = t === void 0 ? {} : t,
        r = oa(e, ra);
      if (r.state.status === 'error')
        return f.createElement(Bo, {
          translations: n == null ? void 0 : n.errorScreen,
        });
      var o = r.state.collections.some(function (a) {
        return a.items.length > 0;
      });
      return r.state.query
        ? o === !1
          ? f.createElement(
              zo,
              Qe({}, r, {
                translations: n == null ? void 0 : n.noResultsScreen,
              })
            )
          : f.createElement(Xo, r)
        : f.createElement(
            na,
            Qe({}, r, {
              hasCollections: o,
              translations: n == null ? void 0 : n.startScreen,
            })
          );
    },
    function (e, t) {
      return t.state.status === 'loading' || t.state.status === 'stalled';
    }
  ),
  ia = ['translations'];
function Ze() {
  return (
    (Ze =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ze.apply(this, arguments)
  );
}
function ca(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function ua(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = ca(e, ia),
    o = n.resetButtonTitle,
    a = o === void 0 ? 'Clear the query' : o,
    i = n.resetButtonAriaLabel,
    u = i === void 0 ? 'Clear the query' : i,
    l = n.cancelButtonText,
    s = l === void 0 ? 'Cancel' : l,
    c = n.cancelButtonAriaLabel,
    m = c === void 0 ? 'Cancel' : c,
    d = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return (
    f.useEffect(
      function () {
        r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
      },
      [r.autoFocus, r.inputRef]
    ),
    f.useEffect(
      function () {
        r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
      },
      [r.isFromSelection, r.inputRef]
    ),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(
        'form',
        {
          className: 'DocSearch-Form',
          onSubmit: function (p) {
            p.preventDefault();
          },
          onReset: d,
        },
        f.createElement(
          'label',
          Ze({ className: 'DocSearch-MagnifierLabel' }, r.getLabelProps()),
          f.createElement(ar, null)
        ),
        f.createElement(
          'div',
          { className: 'DocSearch-LoadingIndicator' },
          f.createElement(No, null)
        ),
        f.createElement(
          'input',
          Ze(
            { className: 'DocSearch-Input', ref: r.inputRef },
            r.getInputProps({
              inputElement: r.inputRef.current,
              autoFocus: r.autoFocus,
              maxLength: 64,
            })
          )
        ),
        f.createElement(
          'button',
          {
            type: 'reset',
            title: a,
            className: 'DocSearch-Reset',
            'aria-label': u,
            hidden: !r.state.query,
          },
          f.createElement(gt, null)
        )
      ),
      f.createElement(
        'button',
        {
          className: 'DocSearch-Cancel',
          type: 'reset',
          'aria-label': m,
          onClick: r.onClose,
        },
        s
      )
    )
  );
}
var la = ['_highlightResult', '_snippetResult'];
function sa(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function fa(e) {
  return (function () {
    var t = '__TEST_KEY__';
    try {
      return localStorage.setItem(t, ''), localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  })() === !1
    ? {
        setItem: function () {},
        getItem: function () {
          return [];
        },
      }
    : {
        setItem: function (t) {
          return window.localStorage.setItem(e, JSON.stringify(t));
        },
        getItem: function () {
          var t = window.localStorage.getItem(e);
          return t ? JSON.parse(t) : [];
        },
      };
}
function Pn(e) {
  var t = e.key,
    n = e.limit,
    r = n === void 0 ? 5 : n,
    o = fa(t),
    a = o.getItem().slice(0, r);
  return {
    add: function (i) {
      var u = i,
        l = (u._highlightResult, u._snippetResult, sa(u, la)),
        s = a.findIndex(function (c) {
          return c.objectID === l.objectID;
        });
      s > -1 && a.splice(s, 1), a.unshift(l), (a = a.slice(0, r)), o.setItem(a);
    },
    remove: function (i) {
      (a = a.filter(function (u) {
        return u.objectID !== i.objectID;
      })),
        o.setItem(a);
    },
    getAll: function () {
      return a;
    },
  };
}
var pa = ['facetName', 'facetQuery'];
function ma(e) {
  var t,
    n = 'algoliasearch-client-js-'.concat(e.key),
    r = function () {
      return t === void 0 && (t = e.localStorage || window.localStorage), t;
    },
    o = function () {
      return JSON.parse(r().getItem(n) || '{}');
    };
  return {
    get: function (a, i) {
      var u =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {
              miss: function () {
                return Promise.resolve();
              },
            };
      return Promise.resolve()
        .then(function () {
          var l = JSON.stringify(a),
            s = o()[l];
          return Promise.all([s || i(), s !== void 0]);
        })
        .then(function (l) {
          var s = Ve(l, 2),
            c = s[0],
            m = s[1];
          return Promise.all([c, m || u.miss(c)]);
        })
        .then(function (l) {
          return Ve(l, 1)[0];
        });
    },
    set: function (a, i) {
      return Promise.resolve().then(function () {
        var u = o();
        return (u[JSON.stringify(a)] = i), r().setItem(n, JSON.stringify(u)), i;
      });
    },
    delete: function (a) {
      return Promise.resolve().then(function () {
        var i = o();
        delete i[JSON.stringify(a)], r().setItem(n, JSON.stringify(i));
      });
    },
    clear: function () {
      return Promise.resolve().then(function () {
        r().removeItem(n);
      });
    },
  };
}
function be(e) {
  var t = We(e.caches),
    n = t.shift();
  return n === void 0
    ? {
        get: function (r, o) {
          var a =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return o()
            .then(function (i) {
              return Promise.all([i, a.miss(i)]);
            })
            .then(function (i) {
              return Ve(i, 1)[0];
            });
        },
        set: function (r, o) {
          return Promise.resolve(o);
        },
        delete: function (r) {
          return Promise.resolve();
        },
        clear: function () {
          return Promise.resolve();
        },
      }
    : {
        get: function (r, o) {
          var a =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return n.get(r, o, a).catch(function () {
            return be({ caches: t }).get(r, o, a);
          });
        },
        set: function (r, o) {
          return n.set(r, o).catch(function () {
            return be({ caches: t }).set(r, o);
          });
        },
        delete: function (r) {
          return n.delete(r).catch(function () {
            return be({ caches: t }).delete(r);
          });
        },
        clear: function () {
          return n.clear().catch(function () {
            return be({ caches: t }).clear();
          });
        },
      };
}
function ut() {
  var e =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : { serializable: !0 },
    t = {};
  return {
    get: function (n, r) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve();
                },
              },
        a = JSON.stringify(n);
      if (a in t)
        return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
      var i = r(),
        u =
          (o && o.miss) ||
          function () {
            return Promise.resolve();
          };
      return i
        .then(function (l) {
          return u(l);
        })
        .then(function () {
          return i;
        });
    },
    set: function (n, r) {
      return (
        (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r),
        Promise.resolve(r)
      );
    },
    delete: function (n) {
      return delete t[JSON.stringify(n)], Promise.resolve();
    },
    clear: function () {
      return (t = {}), Promise.resolve();
    },
  };
}
function da(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)),
      r = e[t];
    (e[t] = e[n]), (e[n] = r);
  }
  return e;
}
function fr(e, t) {
  return (
    t &&
      Object.keys(t).forEach(function (n) {
        e[n] = t[n](e);
      }),
    e
  );
}
function Ye(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = 0;
  return e.replace(/%s/g, function () {
    return encodeURIComponent(n[o++]);
  });
}
var Be = { WithinQueryParameters: 0, WithinHeaders: 1 };
function In(e, t) {
  var n = e || {},
    r = n.data || {};
  return (
    Object.keys(n).forEach(function (o) {
      ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(
        o
      ) === -1 && (r[o] = n[o]);
    }),
    {
      data: Object.entries(r).length > 0 ? r : void 0,
      timeout: n.timeout || t,
      headers: n.headers || {},
      queryParameters: n.queryParameters || {},
      cacheable: n.cacheable,
    }
  );
}
var ce = { Read: 1, Write: 2, Any: 3 },
  pr = 1,
  ha = 2,
  mr = 3;
function dr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pr;
  return P(P({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function hr(e) {
  return typeof e == 'string'
    ? { protocol: 'https', url: e, accept: ce.Any }
    : {
        protocol: e.protocol || 'https',
        url: e.url,
        accept: e.accept || ce.Any,
      };
}
var kn = 'GET',
  Ge = 'POST';
function va(e, t) {
  return Promise.all(
    t.map(function (n) {
      return e.get(n, function () {
        return Promise.resolve(dr(n));
      });
    })
  ).then(function (n) {
    var r = n.filter(function (i) {
        return (function (u) {
          return u.status === pr || Date.now() - u.lastUpdate > 12e4;
        })(i);
      }),
      o = n.filter(function (i) {
        return (function (u) {
          return u.status === mr && Date.now() - u.lastUpdate <= 12e4;
        })(i);
      }),
      a = [].concat(We(r), We(o));
    return {
      getTimeout: function (i, u) {
        return (o.length === 0 && i === 0 ? 1 : o.length + 3 + i) * u;
      },
      statelessHosts:
        a.length > 0
          ? a.map(function (i) {
              return hr(i);
            })
          : t,
    };
  });
}
function Dn(e, t, n, r) {
  var o = [],
    a = (function (d, p) {
      if (!(d.method === kn || (d.data === void 0 && p.data === void 0))) {
        var _ = Array.isArray(d.data) ? d.data : P(P({}, d.data), p.data);
        return JSON.stringify(_);
      }
    })(n, r),
    i = (function (d, p) {
      var _ = P(P({}, d.headers), p.headers),
        h = {};
      return (
        Object.keys(_).forEach(function (g) {
          var v = _[g];
          h[g.toLowerCase()] = v;
        }),
        h
      );
    })(e, r),
    u = n.method,
    l = n.method !== kn ? {} : P(P({}, n.data), r.data),
    s = P(
      P(P({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters), l),
      r.queryParameters
    ),
    c = 0,
    m = function d(p, _) {
      var h = p.pop();
      if (h === void 0)
        throw {
          name: 'RetryError',
          message:
            'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
          transporterStackTrace: Cn(o),
        };
      var g = {
          data: a,
          headers: i,
          method: u,
          url: _a(h, n.path, s),
          connectTimeout: _(c, e.timeouts.connect),
          responseTimeout: _(c, r.timeout),
        },
        v = function (O) {
          var y = { request: g, response: O, host: h, triesLeft: p.length };
          return o.push(y), y;
        },
        S = {
          onSucess: function (O) {
            return (function (y) {
              try {
                return JSON.parse(y.content);
              } catch (b) {
                throw (function (I, N) {
                  return {
                    name: 'DeserializationError',
                    message: I,
                    response: N,
                  };
                })(b.message, y);
              }
            })(O);
          },
          onRetry: function (O) {
            var y = v(O);
            return (
              O.isTimedOut && c++,
              Promise.all([
                e.logger.info('Retryable failure', yr(y)),
                e.hostsCache.set(h, dr(h, O.isTimedOut ? mr : ha)),
              ]).then(function () {
                return d(p, _);
              })
            );
          },
          onFail: function (O) {
            throw (
              (v(O),
              (function (y, b) {
                var I = y.content,
                  N = y.status,
                  A = I;
                try {
                  A = JSON.parse(I).message;
                } catch {}
                return (function (k, R, L) {
                  return {
                    name: 'ApiError',
                    message: k,
                    status: R,
                    transporterStackTrace: L,
                  };
                })(A, N, b);
              })(O, Cn(o)))
            );
          },
        };
      return e.requester.send(g).then(function (O) {
        return (function (y, b) {
          return (function (I) {
            var N = I.status;
            return (
              I.isTimedOut ||
              (function (A) {
                var k = A.isTimedOut,
                  R = A.status;
                return !k && ~~R == 0;
              })(I) ||
              (~~(N / 100) != 2 && ~~(N / 100) != 4)
            );
          })(y)
            ? b.onRetry(y)
            : ~~(y.status / 100) == 2
            ? b.onSucess(y)
            : b.onFail(y);
        })(O, S);
      });
    };
  return va(e.hostsCache, t).then(function (d) {
    return m(We(d.statelessHosts).reverse(), d.getTimeout);
  });
}
function ya(e) {
  var t = {
    value: 'Algolia for JavaScript ('.concat(e, ')'),
    add: function (n) {
      var r = '; '
        .concat(n.segment)
        .concat(n.version !== void 0 ? ' ('.concat(n.version, ')') : '');
      return (
        t.value.indexOf(r) === -1 && (t.value = ''.concat(t.value).concat(r)), t
      );
    },
  };
  return t;
}
function _a(e, t, n) {
  var r = vr(n),
    o = ''
      .concat(e.protocol, '://')
      .concat(e.url, '/')
      .concat(t.charAt(0) === '/' ? t.substr(1) : t);
  return r.length && (o += '?'.concat(r)), o;
}
function vr(e) {
  return Object.keys(e)
    .map(function (t) {
      return Ye(
        '%s=%s',
        t,
        ((n = e[t]),
        Object.prototype.toString.call(n) === '[object Object]' ||
        Object.prototype.toString.call(n) === '[object Array]'
          ? JSON.stringify(e[t])
          : e[t])
      );
      var n;
    })
    .join('&');
}
function Cn(e) {
  return e.map(function (t) {
    return yr(t);
  });
}
function yr(e) {
  var t = e.request.headers['x-algolia-api-key']
    ? { 'x-algolia-api-key': '*****' }
    : {};
  return P(
    P({}, e),
    {},
    {
      request: P(
        P({}, e.request),
        {},
        { headers: P(P({}, e.request.headers), t) }
      ),
    }
  );
}
var ga = function (e) {
    var t = e.appId,
      n = (function (a, i, u) {
        var l = { 'x-algolia-api-key': u, 'x-algolia-application-id': i };
        return {
          headers: function () {
            return a === Be.WithinHeaders ? l : {};
          },
          queryParameters: function () {
            return a === Be.WithinQueryParameters ? l : {};
          },
        };
      })(e.authMode !== void 0 ? e.authMode : Be.WithinHeaders, t, e.apiKey),
      r = (function (a) {
        var i = a.hostsCache,
          u = a.logger,
          l = a.requester,
          s = a.requestsCache,
          c = a.responsesCache,
          m = a.timeouts,
          d = a.userAgent,
          p = a.hosts,
          _ = a.queryParameters,
          h = {
            hostsCache: i,
            logger: u,
            requester: l,
            requestsCache: s,
            responsesCache: c,
            timeouts: m,
            userAgent: d,
            headers: a.headers,
            queryParameters: _,
            hosts: p.map(function (g) {
              return hr(g);
            }),
            read: function (g, v) {
              var S = In(v, h.timeouts.read),
                O = function () {
                  return Dn(
                    h,
                    h.hosts.filter(function (b) {
                      return (b.accept & ce.Read) != 0;
                    }),
                    g,
                    S
                  );
                };
              if ((S.cacheable !== void 0 ? S.cacheable : g.cacheable) !== !0)
                return O();
              var y = {
                request: g,
                mappedRequestOptions: S,
                transporter: {
                  queryParameters: h.queryParameters,
                  headers: h.headers,
                },
              };
              return h.responsesCache.get(
                y,
                function () {
                  return h.requestsCache.get(y, function () {
                    return h.requestsCache
                      .set(y, O())
                      .then(
                        function (b) {
                          return Promise.all([h.requestsCache.delete(y), b]);
                        },
                        function (b) {
                          return Promise.all([
                            h.requestsCache.delete(y),
                            Promise.reject(b),
                          ]);
                        }
                      )
                      .then(function (b) {
                        var I = Ve(b, 2);
                        return I[0], I[1];
                      });
                  });
                },
                {
                  miss: function (b) {
                    return h.responsesCache.set(y, b);
                  },
                }
              );
            },
            write: function (g, v) {
              return Dn(
                h,
                h.hosts.filter(function (S) {
                  return (S.accept & ce.Write) != 0;
                }),
                g,
                In(v, h.timeouts.write)
              );
            },
          };
        return h;
      })(
        P(
          P(
            {
              hosts: [
                { url: ''.concat(t, '-dsn.algolia.net'), accept: ce.Read },
                { url: ''.concat(t, '.algolia.net'), accept: ce.Write },
              ].concat(
                da([
                  { url: ''.concat(t, '-1.algolianet.com') },
                  { url: ''.concat(t, '-2.algolianet.com') },
                  { url: ''.concat(t, '-3.algolianet.com') },
                ])
              ),
            },
            e
          ),
          {},
          {
            headers: P(
              P(P({}, n.headers()), {
                'content-type': 'application/x-www-form-urlencoded',
              }),
              e.headers
            ),
            queryParameters: P(P({}, n.queryParameters()), e.queryParameters),
          }
        )
      ),
      o = {
        transporter: r,
        appId: t,
        addAlgoliaAgent: function (a, i) {
          r.userAgent.add({ segment: a, version: i });
        },
        clearCache: function () {
          return Promise.all([
            r.requestsCache.clear(),
            r.responsesCache.clear(),
          ]).then(function () {});
        },
      };
    return fr(o, e.methods);
  },
  _r = function (e) {
    return function (t) {
      var n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = { transporter: e.transporter, appId: e.appId, indexName: t };
      return fr(r, n.methods);
    };
  },
  An = function (e) {
    return function (t, n) {
      var r = t.map(function (o) {
        return P(P({}, o), {}, { params: vr(o.params || {}) });
      });
      return e.transporter.read(
        {
          method: Ge,
          path: '1/indexes/*/queries',
          data: { requests: r },
          cacheable: !0,
        },
        n
      );
    };
  },
  xn = function (e) {
    return function (t, n) {
      return Promise.all(
        t.map(function (r) {
          var o = r.params,
            a = o.facetName,
            i = o.facetQuery,
            u = Pr(o, pa);
          return _r(e)(r.indexName, {
            methods: { searchForFacetValues: gr },
          }).searchForFacetValues(a, i, P(P({}, n), u));
        })
      );
    };
  },
  ba = function (e) {
    return function (t, n, r) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/answers/%s/prediction', e.indexName),
          data: { query: t, queryLanguages: n },
          cacheable: !0,
        },
        r
      );
    };
  },
  Oa = function (e) {
    return function (t, n) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/indexes/%s/query', e.indexName),
          data: { query: t },
          cacheable: !0,
        },
        n
      );
    };
  },
  gr = function (e) {
    return function (t, n, r) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/indexes/%s/facets/%s/query', e.indexName, t),
          data: { facetQuery: n },
          cacheable: !0,
        },
        r
      );
    };
  },
  Sa = 1,
  Ea = 2,
  wa = 3;
function br(e, t, n) {
  var r,
    o = {
      appId: e,
      apiKey: t,
      timeouts: { connect: 1, read: 2, write: 30 },
      requester: {
        send: function (a) {
          return new Promise(function (i) {
            var u = new XMLHttpRequest();
            u.open(a.method, a.url, !0),
              Object.keys(a.headers).forEach(function (m) {
                return u.setRequestHeader(m, a.headers[m]);
              });
            var l,
              s = function (m, d) {
                return setTimeout(function () {
                  u.abort(), i({ status: 0, content: d, isTimedOut: !0 });
                }, 1e3 * m);
              },
              c = s(a.connectTimeout, 'Connection timeout');
            (u.onreadystatechange = function () {
              u.readyState > u.OPENED &&
                l === void 0 &&
                (clearTimeout(c), (l = s(a.responseTimeout, 'Socket timeout')));
            }),
              (u.onerror = function () {
                u.status === 0 &&
                  (clearTimeout(c),
                  clearTimeout(l),
                  i({
                    content: u.responseText || 'Network request failed',
                    status: u.status,
                    isTimedOut: !1,
                  }));
              }),
              (u.onload = function () {
                clearTimeout(c),
                  clearTimeout(l),
                  i({
                    content: u.responseText,
                    status: u.status,
                    isTimedOut: !1,
                  });
              }),
              u.send(a.data);
          });
        },
      },
      logger:
        ((r = wa),
        {
          debug: function (a, i) {
            return Sa >= r && console.debug(a, i), Promise.resolve();
          },
          info: function (a, i) {
            return Ea >= r && console.info(a, i), Promise.resolve();
          },
          error: function (a, i) {
            return console.error(a, i), Promise.resolve();
          },
        }),
      responsesCache: ut(),
      requestsCache: ut({ serializable: !1 }),
      hostsCache: be({
        caches: [ma({ key: ''.concat('4.8.5', '-').concat(e) }), ut()],
      }),
      userAgent: ya('4.8.5').add({ segment: 'Browser', version: 'lite' }),
      authMode: Be.WithinQueryParameters,
    };
  return ga(
    P(
      P(P({}, o), n),
      {},
      {
        methods: {
          search: An,
          searchForFacetValues: xn,
          multipleQueries: An,
          multipleSearchForFacetValues: xn,
          initIndex: function (a) {
            return function (i) {
              return _r(a)(i, {
                methods: {
                  search: Oa,
                  searchForFacetValues: gr,
                  findAnswers: ba,
                },
              });
            };
          },
        },
      }
    )
  );
}
br.version = '4.8.5';
var ja = ['footer', 'searchBox'];
function Ee() {
  return (
    (Ee =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ee.apply(this, arguments)
  );
}
function Nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nn(Object(n), !0).forEach(function (r) {
          Pa(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Nn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Pa(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ia(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o =
        n == null
          ? null
          : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) &&
            (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (c) {
          (s = !0), (i = c);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (!!n) {
        if (typeof n == 'string') return Rn(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name),
          o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (
          o === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        )
          return Rn(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Rn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ka(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (i, u) {
      if (i == null) return {};
      var l,
        s,
        c = {},
        m = Object.keys(i);
      for (s = 0; s < m.length; s++)
        (l = m[s]), u.indexOf(l) >= 0 || (c[l] = i[l]);
      return c;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Da(e) {
  var t = e.appId,
    n = e.apiKey,
    r = e.indexName,
    o = e.placeholder,
    a = o === void 0 ? 'Search docs' : o,
    i = e.searchParameters,
    u = e.onClose,
    l = u === void 0 ? Yo : u,
    s = e.transformItems,
    c = s === void 0 ? jn : s,
    m = e.hitComponent,
    d = m === void 0 ? xo : m,
    p = e.resultsFooterComponent,
    _ =
      p === void 0
        ? function () {
            return null;
          }
        : p,
    h = e.navigator,
    g = e.initialScrollY,
    v = g === void 0 ? 0 : g,
    S = e.transformSearchClient,
    O = S === void 0 ? jn : S,
    y = e.disableUserPersonalization,
    b = y !== void 0 && y,
    I = e.initialQuery,
    N = I === void 0 ? '' : I,
    A = e.translations,
    k = A === void 0 ? {} : A,
    R = e.getMissingResultsUrl,
    L = k.footer,
    B = k.searchBox,
    q = ka(k, ja),
    De = Ia(
      f.useState({
        query: '',
        collections: [],
        completion: null,
        context: {},
        isOpen: !1,
        activeItemId: null,
        status: 'idle',
      }),
      2
    ),
    Y = De[0],
    Xe = De[1],
    se = f.useRef(null),
    et = f.useRef(null),
    Pt = f.useRef(null),
    Ce = f.useRef(null),
    fe = f.useRef(null),
    $ = f.useRef(10),
    It = f.useRef(
      typeof window < 'u' ? window.getSelection().toString().slice(0, 64) : ''
    ).current,
    G = f.useRef(N || It).current,
    kt = (function (j, D, M) {
      return f.useMemo(
        function () {
          var H = br(j, D);
          return (
            H.addAlgoliaAgent('docsearch', '3.3.0'),
            /docsearch.js \(.*\)/.test(H.transporter.userAgent.value) === !1 &&
              H.addAlgoliaAgent('docsearch-react', '3.3.0'),
            M(H)
          );
        },
        [j, D, M]
      );
    })(t, n, O),
    te = f.useRef(
      Pn({ key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(r), limit: 10 })
    ).current,
    pe = f.useRef(
      Pn({
        key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(r),
        limit: te.getAll().length === 0 ? 7 : 4,
      })
    ).current,
    me = f.useCallback(
      function (j) {
        if (!b) {
          var D = j.type === 'content' ? j.__docsearch_parent : j;
          D &&
            te.getAll().findIndex(function (M) {
              return M.objectID === D.objectID;
            }) === -1 &&
            pe.add(D);
        }
      },
      [te, pe, b]
    ),
    de = f.useMemo(
      function () {
        return Do({
          id: 'docsearch',
          defaultActiveItemId: 0,
          placeholder: a,
          openOnFocus: !0,
          initialState: { query: G, context: { searchSuggestions: [] } },
          navigator: h,
          onStateChange: function (j) {
            Xe(j.state);
          },
          getSources: function (j) {
            var D = j.query,
              M = j.state,
              H = j.setContext,
              Q = j.setStatus;
            return D
              ? kt
                  .search([
                    {
                      query: D,
                      indexName: r,
                      params: lt(
                        {
                          attributesToRetrieve: [
                            'hierarchy.lvl0',
                            'hierarchy.lvl1',
                            'hierarchy.lvl2',
                            'hierarchy.lvl3',
                            'hierarchy.lvl4',
                            'hierarchy.lvl5',
                            'hierarchy.lvl6',
                            'content',
                            'type',
                            'url',
                          ],
                          attributesToSnippet: [
                            'hierarchy.lvl1:'.concat($.current),
                            'hierarchy.lvl2:'.concat($.current),
                            'hierarchy.lvl3:'.concat($.current),
                            'hierarchy.lvl4:'.concat($.current),
                            'hierarchy.lvl5:'.concat($.current),
                            'hierarchy.lvl6:'.concat($.current),
                            'content:'.concat($.current),
                          ],
                          snippetEllipsisText: '\u2026',
                          highlightPreTag: '<mark>',
                          highlightPostTag: '</mark>',
                          hitsPerPage: 20,
                        },
                        i
                      ),
                    },
                  ])
                  .catch(function (C) {
                    throw (C.name === 'RetryError' && Q('error'), C);
                  })
                  .then(function (C) {
                    var U = C.results[0],
                      F = U.hits,
                      Er = U.nbHits,
                      tt = wn(F, function (nt) {
                        return sr(nt);
                      });
                    return (
                      M.context.searchSuggestions.length <
                        Object.keys(tt).length &&
                        H({ searchSuggestions: Object.keys(tt) }),
                      H({ nbHits: Er }),
                      Object.values(tt).map(function (nt, wr) {
                        return {
                          sourceId: 'hits'.concat(wr),
                          onSelect: function (K) {
                            var he = K.item,
                              ne = K.event;
                            me(he),
                              ne.shiftKey || ne.ctrlKey || ne.metaKey || l();
                          },
                          getItemUrl: function (K) {
                            return K.item.url;
                          },
                          getItems: function () {
                            return Object.values(
                              wn(nt, function (K) {
                                return K.hierarchy.lvl1;
                              })
                            )
                              .map(c)
                              .map(function (K) {
                                return K.map(function (he) {
                                  return lt(
                                    lt({}, he),
                                    {},
                                    {
                                      __docsearch_parent:
                                        he.type !== 'lvl1' &&
                                        K.find(function (ne) {
                                          return (
                                            ne.type === 'lvl1' &&
                                            ne.hierarchy.lvl1 ===
                                              he.hierarchy.lvl1
                                          );
                                        }),
                                    }
                                  );
                                });
                              })
                              .flat();
                          },
                        };
                      })
                    );
                  })
              : b
              ? []
              : [
                  {
                    sourceId: 'recentSearches',
                    onSelect: function (C) {
                      var U = C.item,
                        F = C.event;
                      me(U), F.shiftKey || F.ctrlKey || F.metaKey || l();
                    },
                    getItemUrl: function (C) {
                      return C.item.url;
                    },
                    getItems: function () {
                      return pe.getAll();
                    },
                  },
                  {
                    sourceId: 'favoriteSearches',
                    onSelect: function (C) {
                      var U = C.item,
                        F = C.event;
                      me(U), F.shiftKey || F.ctrlKey || F.metaKey || l();
                    },
                    getItemUrl: function (C) {
                      return C.item.url;
                    },
                    getItems: function () {
                      return te.getAll();
                    },
                  },
                ];
          },
        });
      },
      [r, i, kt, l, pe, te, me, G, a, h, c, b]
    ),
    Or = de.getEnvironmentProps,
    Sr = de.getRootProps,
    Dt = de.refresh;
  return (
    (function (j) {
      var D = j.getEnvironmentProps,
        M = j.panelElement,
        H = j.formElement,
        Q = j.inputElement;
      f.useEffect(
        function () {
          if (M && H && Q) {
            var C = D({ panelElement: M, formElement: H, inputElement: Q }),
              U = C.onTouchStart,
              F = C.onTouchMove;
            return (
              window.addEventListener('touchstart', U),
              window.addEventListener('touchmove', F),
              function () {
                window.removeEventListener('touchstart', U),
                  window.removeEventListener('touchmove', F);
              }
            );
          }
        },
        [D, M, H, Q]
      );
    })({
      getEnvironmentProps: Or,
      panelElement: Ce.current,
      formElement: Pt.current,
      inputElement: fe.current,
    }),
    (function (j) {
      var D = j.container;
      f.useEffect(
        function () {
          if (D) {
            var M = D.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), input:not([disabled])'
              ),
              H = M[0],
              Q = M[M.length - 1];
            return (
              D.addEventListener('keydown', C),
              function () {
                D.removeEventListener('keydown', C);
              }
            );
          }
          function C(U) {
            U.key === 'Tab' &&
              (U.shiftKey
                ? document.activeElement === H &&
                  (U.preventDefault(), Q.focus())
                : document.activeElement === Q &&
                  (U.preventDefault(), H.focus()));
          }
        },
        [D]
      );
    })({ container: se.current }),
    f.useEffect(function () {
      return (
        document.body.classList.add('DocSearch--active'),
        function () {
          var j, D;
          document.body.classList.remove('DocSearch--active'),
            (j = (D = window).scrollTo) === null ||
              j === void 0 ||
              j.call(D, 0, v);
        }
      );
    }, []),
    f.useEffect(function () {
      window.matchMedia('(max-width: 768px)').matches && ($.current = 5);
    }, []),
    f.useEffect(
      function () {
        Ce.current && (Ce.current.scrollTop = 0);
      },
      [Y.query]
    ),
    f.useEffect(
      function () {
        G.length > 0 && (Dt(), fe.current && fe.current.focus());
      },
      [G, Dt]
    ),
    f.useEffect(function () {
      function j() {
        if (et.current) {
          var D = 0.01 * window.innerHeight;
          et.current.style.setProperty('--docsearch-vh', ''.concat(D, 'px'));
        }
      }
      return (
        j(),
        window.addEventListener('resize', j),
        function () {
          window.removeEventListener('resize', j);
        }
      );
    }, []),
    f.createElement(
      'div',
      Ee({ ref: se }, Sr({ 'aria-expanded': !0 }), {
        className: [
          'DocSearch',
          'DocSearch-Container',
          Y.status === 'stalled' && 'DocSearch-Container--Stalled',
          Y.status === 'error' && 'DocSearch-Container--Errored',
        ]
          .filter(Boolean)
          .join(' '),
        role: 'button',
        tabIndex: 0,
        onMouseDown: function (j) {
          j.target === j.currentTarget && l();
        },
      }),
      f.createElement(
        'div',
        { className: 'DocSearch-Modal', ref: et },
        f.createElement(
          'header',
          { className: 'DocSearch-SearchBar', ref: Pt },
          f.createElement(
            ua,
            Ee({}, de, {
              state: Y,
              autoFocus: G.length === 0,
              inputRef: fe,
              isFromSelection: Boolean(G) && G === It,
              translations: B,
              onClose: l,
            })
          )
        ),
        f.createElement(
          'div',
          { className: 'DocSearch-Dropdown', ref: Ce },
          f.createElement(
            aa,
            Ee({}, de, {
              indexName: r,
              state: Y,
              hitComponent: d,
              resultsFooterComponent: _,
              disableUserPersonalization: b,
              recentSearches: pe,
              favoriteSearches: te,
              inputRef: fe,
              translations: q,
              getMissingResultsUrl: R,
              onItemClick: function (j) {
                me(j), l();
              },
            })
          )
        ),
        f.createElement(
          'footer',
          { className: 'DocSearch-Footer' },
          f.createElement(Ao, { translations: L })
        )
      )
    )
  );
}
function St() {
  return (
    (St =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    St.apply(this, arguments)
  );
}
function Tn(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o =
        n == null
          ? null
          : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          i,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) &&
            (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (c) {
          (s = !0), (i = c);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw i;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (!!n) {
        if (typeof n == 'string') return Ln(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name),
          o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (
          o === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        )
          return Ln(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ca(e) {
  var t,
    n,
    r = f.useRef(null),
    o = Tn(f.useState(!1), 2),
    a = o[0],
    i = o[1],
    u = Tn(f.useState((e == null ? void 0 : e.initialQuery) || void 0), 2),
    l = u[0],
    s = u[1],
    c = f.useCallback(
      function () {
        i(!0);
      },
      [i]
    ),
    m = f.useCallback(
      function () {
        i(!1);
      },
      [i]
    );
  return (
    (function (d) {
      var p = d.isOpen,
        _ = d.onOpen,
        h = d.onClose,
        g = d.onInput,
        v = d.searchButtonRef;
      f.useEffect(
        function () {
          function S(O) {
            ((O.keyCode === 27 && p) ||
              (O.key.toLowerCase() === 'k' && (O.metaKey || O.ctrlKey)) ||
              (!(function (y) {
                var b = y.target,
                  I = b.tagName;
                return (
                  b.isContentEditable ||
                  I === 'INPUT' ||
                  I === 'SELECT' ||
                  I === 'TEXTAREA'
                );
              })(O) &&
                O.key === '/' &&
                !p)) &&
              (O.preventDefault(),
              p
                ? h()
                : document.body.classList.contains('DocSearch--active') ||
                  document.body.classList.contains('DocSearch--active') ||
                  _()),
              v &&
                v.current === document.activeElement &&
                g &&
                /[a-zA-Z0-9]/.test(String.fromCharCode(O.keyCode)) &&
                g(O);
          }
          return (
            window.addEventListener('keydown', S),
            function () {
              window.removeEventListener('keydown', S);
            }
          );
        },
        [p, _, h, g, v]
      );
    })({
      isOpen: a,
      onOpen: c,
      onClose: m,
      onInput: f.useCallback(
        function (d) {
          i(!0), s(d.key);
        },
        [i, s]
      ),
      searchButtonRef: r,
    }),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(Jr, {
        ref: r,
        translations:
          e == null || (t = e.translations) === null || t === void 0
            ? void 0
            : t.button,
        onClick: c,
      }),
      a &&
        tr(
          f.createElement(
            Da,
            St({}, e, {
              initialScrollY: window.scrollY,
              initialQuery: l,
              translations:
                e == null || (n = e.translations) === null || n === void 0
                  ? void 0
                  : n.modal,
              onClose: m,
            })
          ),
          document.body
        )
    )
  );
}
function Aa(e) {
  rr(
    f.createElement(
      Ca,
      st({}, e, {
        transformSearchClient: function (t) {
          return (
            t.addAlgoliaAgent('docsearch.js', '3.3.0'),
            e.transformSearchClient ? e.transformSearchClient(t) : t
          );
        },
      })
    ),
    (function (t) {
      var n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
      return typeof t == 'string' ? n.document.querySelector(t) : t;
    })(e.container, e.environment)
  );
}
export { Aa as default };
