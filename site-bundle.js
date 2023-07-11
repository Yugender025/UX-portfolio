!function(e) {
    function t(o) {
        if (n[o])
            return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
}([function(e, t, n) {
    e.exports = n(1)
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r = n(2)
      , i = o(r)
      , a = n(56)
      , s = n(62)
      , l = o(s)
      , c = n(63)
      , u = o(c)
      , d = n(64)
      , f = o(d)
      , p = n(65)
      , A = o(p)
      , h = n(76)
      , m = o(h)
      , y = n(77)
      , v = o(y)
      , g = n(78)
      , b = o(g)
      , w = n(79)
      , E = o(w)
      , T = n(80)
      , S = o(T)
      , x = n(81)
      , _ = o(x)
      , L = n(82)
      , k = o(L)
      , j = n(83)
      , C = o(j)
      , I = n(84)
      , P = o(I)
      , R = n(85)
      , O = o(R)
      , M = n(86)
      , N = o(M);
    i.default.register("AncillaryLayout", A.default),
    i.default.register("BannerController", m.default),
    i.default.register("BodyClassController", v.default),
    i.default.register("IndexController", b.default),
    i.default.register("IndexNavigationController", E.default),
    i.default.register("MobileNavController", S.default),
    i.default.register("MobileOffset", _.default),
    i.default.register("MobileOverlayFolders", k.default),
    i.default.register("MobileOverlayFolders", k.default),
    i.default.register("MobileOverlayToggle", C.default),
    i.default.register("ProjectController", P.default),
    i.default.register("UserAccountsController", O.default);
    var B = ["show-index-banner", "show-album-banner", "show-blog-banner", "show-events-banner", "show-gallery-banner", "show-homepage-banner", "show-page-banner", "show-products-banner", "show-project-banner", "index-item-width", "banner-height", "banner-image-crop", "banner-image-alignment", "site-outer-padding", "siteCustomSpacing", "siteMaxWidth", "full-bleed-project", "full-bleed-banner"];
    i.default.register("VideoBackground", function(e) {
        return e.classList.contains("page-banner-image-container") ? f.default.shouldShowBanner() || l.default.AUTHENTICATED ? (0,
        N.default)(e, B) : void 0 : (0,
        N.default)(e, B)
    }),
    window.addEventListener("DOMContentLoaded", function() {
        i.default.refresh(),
        f.default.reloadImages(document.querySelectorAll("img.custom-fallback-image"), {
            load: !0
        });
        var e = "true" === a.Tweak.getValue("tweak-site-ajax-loading-enable");
        if (e && !l.default.AUTHENTICATED && !l.default.COVER_PAGE) {
            new u.default({
                sqsController: !0,
                timeout: 6e3,
                siteContainer: ".content-container",
                pageTransition: {
                    animLink: "index-page-transition-link",
                    animClass: "tweak-page-transition-animation",
                    fadeInDuration: .78,
                    fadeOutDuration: .2
                },
                beforeRequestAnim: function() {
                    var e = document.querySelector(".content-container");
                    e.classList.add("slide-up")
                },
                afterRequestAnim: function() {
                    var e = document.querySelector(".content-container");
                    e.classList.remove("slide-up"),
                    e.classList.add("slide-into-view"),
                    window.setTimeout(function() {
                        e.classList.remove("slide-into-view")
                    }, 500)
                }
            })
        }
    })
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e) {
        return e.fn && e.element ? e.fn(e.element) : null
    }
    function i(e, t) {
        return !!(e.element && t.element && e.fn && t.fn) && (e.element === t.element && e.fn === t.fn)
    }
    function a(e, t) {
        u[e] = t
    }
    function s() {
        var e = (0,
        c.default)(document.querySelectorAll("[data-controller]"))
          , t = [];
        e.forEach(function(e) {
            var n = e.getAttribute("data-controller").split(",");
            n.forEach(function(n) {
                n = n.trim();
                var o = u[n];
                o && t.push({
                    namespace: n,
                    element: e,
                    fn: o
                })
            })
        }),
        d = d.filter(function(e) {
            var n = t.some(function(t) {
                return i(e, t)
            });
            return n ? (e.methods && e.methods.sync && e.methods.sync.apply(e.element, null),
            t = t.filter(function(t) {
                return !i(e, t)
            })) : e.methods && e.methods.destroy && e.methods.destroy.apply(e.element, null),
            n
        }),
        t.forEach(function(e) {
            e.methods = r(e),
            d.push(e);
            var t = [];
            if (e.element.hasAttribute("data-controllers-bound")) {
                var n = e.element.getAttribute("data-controllers-bound").split(", ");
                t = t.concat(n)
            }
            t.push(e.namespace),
            e.element.setAttribute("data-controllers-bound", t.join(", "))
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = n(3)
      , c = o(l);
    t.register = a,
    t.refresh = s;
    var u = {}
      , d = [];
    ["interactive", "complete"].includes(document.readyState) ? s() : document.addEventListener("DOMContentLoaded", s),
    t.default = {
        register: a,
        refresh: s
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(4),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(5),
    n(49),
    e.exports = n(13).Array.from
}
, function(e, t, n) {
    "use strict";
    var o = n(6)(!0);
    n(9)(String, "String", function(e) {
        this._t = String(e),
        this._i = 0
    }, function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = o(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    })
}
, function(e, t, n) {
    var o = n(7)
      , r = n(8);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, s = String(r(t)), l = o(n), c = s.length;
            return l < 0 || l >= c ? e ? "" : void 0 : (i = s.charCodeAt(l),
            i < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : (i - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}
, function(e, t) {
    var n = Math.ceil
      , o = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(10)
      , r = n(11)
      , i = n(27)
      , a = n(16)
      , s = n(28)
      , l = n(29)
      , c = n(45)
      , u = n(47)
      , d = n(46)("iterator")
      , f = !([].keys && "next"in [].keys())
      , p = "@@iterator"
      , A = "keys"
      , h = "values"
      , m = function() {
        return this
    };
    e.exports = function(e, t, n, y, v, g, b) {
        l(n, t, y);
        var w, E, T, S = function(e) {
            if (!f && e in k)
                return k[e];
            switch (e) {
            case A:
                return function() {
                    return new n(this,e)
                }
                ;
            case h:
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, x = t + " Iterator", _ = v == h, L = !1, k = e.prototype, j = k[d] || k[p] || v && k[v], C = j || S(v), I = v ? _ ? S("entries") : C : void 0, P = "Array" == t ? k.entries || j : j;
        if (P && (T = u(P.call(new e)),
        T !== Object.prototype && T.next && (c(T, x, !0),
        o || "function" == typeof T[d] || a(T, d, m))),
        _ && j && j.name !== h && (L = !0,
        C = function() {
            return j.call(this)
        }
        ),
        o && !b || !f && !L && k[d] || a(k, d, C),
        s[t] = C,
        s[x] = m,
        v)
            if (w = {
                values: _ ? C : S(h),
                keys: g ? C : S(A),
                entries: I
            },
            b)
                for (E in w)
                    E in k || i(k, E, w[E]);
            else
                r(r.P + r.F * (f || L), t, w);
        return w
    }
}
, function(e, t) {
    e.exports = !0
}
, function(e, t, n) {
    var o = n(12)
      , r = n(13)
      , i = n(14)
      , a = n(16)
      , s = n(26)
      , l = "prototype"
      , c = function(e, t, n) {
        var u, d, f, p = e & c.F, A = e & c.G, h = e & c.S, m = e & c.P, y = e & c.B, v = e & c.W, g = A ? r : r[t] || (r[t] = {}), b = g[l], w = A ? o : h ? o[t] : (o[t] || {})[l];
        A && (n = t);
        for (u in n)
            d = !p && w && void 0 !== w[u],
            d && s(g, u) || (f = d ? w[u] : n[u],
            g[u] = A && "function" != typeof w[u] ? n[u] : y && d ? i(f, o) : v && w[u] == f ? function(e) {
                var t = function(t, n, o) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,n)
                        }
                        return new e(t,n,o)
                    }
                    return e.apply(this, arguments)
                };
                return t[l] = e[l],
                t
            }(f) : m && "function" == typeof f ? i(Function.call, f) : f,
            m && ((g.virtual || (g.virtual = {}))[u] = f,
            e & c.R && b && !b[u] && a(b, u, f)))
    };
    c.F = 1,
    c.G = 2,
    c.S = 4,
    c.P = 8,
    c.B = 16,
    c.W = 32,
    c.U = 64,
    c.R = 128,
    e.exports = c
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t) {
    var n = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    var o = n(15);
    e.exports = function(e, t, n) {
        if (o(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, o) {
                return e.call(t, n, o)
            }
            ;
        case 3:
            return function(n, o, r) {
                return e.call(t, n, o, r)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    var o = n(17)
      , r = n(25);
    e.exports = n(21) ? function(e, t, n) {
        return o.f(e, t, r(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var o = n(18)
      , r = n(20)
      , i = n(24)
      , a = Object.defineProperty;
    t.f = n(21) ? Object.defineProperty : function(e, t, n) {
        if (o(e),
        t = i(t, !0),
        o(n),
        r)
            try {
                return a(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var o = n(19);
    e.exports = function(e) {
        if (!o(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    e.exports = !n(21) && !n(22)(function() {
        return 7 != Object.defineProperty(n(23)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t, n) {
    e.exports = !n(22)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var o = n(19)
      , r = n(12).document
      , i = o(r) && o(r.createElement);
    e.exports = function(e) {
        return i ? r.createElement(e) : {}
    }
}
, function(e, t, n) {
    var o = n(19);
    e.exports = function(e, t) {
        if (!o(e))
            return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e)))
            return r;
        if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e)))
            return r;
        if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t, n) {
    e.exports = n(16)
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    "use strict";
    var o = n(30)
      , r = n(25)
      , i = n(45)
      , a = {};
    n(16)(a, n(46)("iterator"), function() {
        return this
    }),
    e.exports = function(e, t, n) {
        e.prototype = o(a, {
            next: r(1, n)
        }),
        i(e, t + " Iterator")
    }
}
, function(e, t, n) {
    var o = n(18)
      , r = n(31)
      , i = n(43)
      , a = n(40)("IE_PROTO")
      , s = function() {}
      , l = "prototype"
      , c = function() {
        var e, t = n(23)("iframe"), o = i.length, r = "<", a = ">";
        for (t.style.display = "none",
        n(44).appendChild(t),
        t.src = "javascript:",
        e = t.contentWindow.document,
        e.open(),
        e.write(r + "script" + a + "document.F=Object" + r + "/script" + a),
        e.close(),
        c = e.F; o--; )
            delete c[l][i[o]];
        return c()
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s[l] = o(e),
        n = new s,
        s[l] = null,
        n[a] = e) : n = c(),
        void 0 === t ? n : r(n, t)
    }
}
, function(e, t, n) {
    var o = n(17)
      , r = n(18)
      , i = n(32);
    e.exports = n(21) ? Object.defineProperties : function(e, t) {
        r(e);
        for (var n, a = i(t), s = a.length, l = 0; s > l; )
            o.f(e, n = a[l++], t[n]);
        return e
    }
}
, function(e, t, n) {
    var o = n(33)
      , r = n(43);
    e.exports = Object.keys || function(e) {
        return o(e, r)
    }
}
, function(e, t, n) {
    var o = n(26)
      , r = n(34)
      , i = n(37)(!1)
      , a = n(40)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = r(e), l = 0, c = [];
        for (n in s)
            n != a && o(s, n) && c.push(n);
        for (; t.length > l; )
            o(s, n = t[l++]) && (~i(c, n) || c.push(n));
        return c
    }
}
, function(e, t, n) {
    var o = n(35)
      , r = n(8);
    e.exports = function(e) {
        return o(r(e))
    }
}
, function(e, t, n) {
    var o = n(36);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == o(e) ? e.split("") : Object(e)
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t, n) {
    var o = n(34)
      , r = n(38)
      , i = n(39);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, l = o(t), c = r(l.length), u = i(a, c);
            if (e && n != n) {
                for (; c > u; )
                    if (s = l[u++],
                    s != s)
                        return !0
            } else
                for (; c > u; u++)
                    if ((e || u in l) && l[u] === n)
                        return e || u || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var o = n(7)
      , r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(o(e), 9007199254740991) : 0
    }
}
, function(e, t, n) {
    var o = n(7)
      , r = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        return e = o(e),
        e < 0 ? r(e + t, 0) : i(e, t)
    }
}
, function(e, t, n) {
    var o = n(41)("keys")
      , r = n(42);
    e.exports = function(e) {
        return o[e] || (o[e] = r(e))
    }
}
, function(e, t, n) {
    var o = n(13)
      , r = n(12)
      , i = "__core-js_shared__"
      , a = r[i] || (r[i] = {});
    (e.exports = function(e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: o.version,
        mode: n(10) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    var n = 0
      , o = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t, n) {
    var o = n(12).document;
    e.exports = o && o.documentElement
}
, function(e, t, n) {
    var o = n(17).f
      , r = n(26)
      , i = n(46)("toStringTag");
    e.exports = function(e, t, n) {
        e && !r(e = n ? e : e.prototype, i) && o(e, i, {
            configurable: !0,
            value: t
        })
    }
}
, function(e, t, n) {
    var o = n(41)("wks")
      , r = n(42)
      , i = n(12).Symbol
      , a = "function" == typeof i
      , s = e.exports = function(e) {
        return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e))
    }
    ;
    s.store = o
}
, function(e, t, n) {
    var o = n(26)
      , r = n(48)
      , i = n(40)("IE_PROTO")
      , a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = r(e),
        o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}
, function(e, t, n) {
    var o = n(8);
    e.exports = function(e) {
        return Object(o(e))
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(14)
      , r = n(11)
      , i = n(48)
      , a = n(50)
      , s = n(51)
      , l = n(38)
      , c = n(52)
      , u = n(53);
    r(r.S + r.F * !n(55)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, r, d, f = i(e), p = "function" == typeof this ? this : Array, A = arguments.length, h = A > 1 ? arguments[1] : void 0, m = void 0 !== h, y = 0, v = u(f);
            if (m && (h = o(h, A > 2 ? arguments[2] : void 0, 2)),
            void 0 == v || p == Array && s(v))
                for (t = l(f.length),
                n = new p(t); t > y; y++)
                    c(n, y, m ? h(f[y], y) : f[y]);
            else
                for (d = v.call(f),
                n = new p; !(r = d.next()).done; y++)
                    c(n, y, m ? a(d, h, [r.value, y], !0) : r.value);
            return n.length = y,
            n
        }
    })
}
, function(e, t, n) {
    var o = n(18);
    e.exports = function(e, t, n, r) {
        try {
            return r ? t(o(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && o(i.call(e)),
            t
        }
    }
}
, function(e, t, n) {
    var o = n(28)
      , r = n(46)("iterator")
      , i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (o.Array === e || i[r] === e)
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(17)
      , r = n(25);
    e.exports = function(e, t, n) {
        t in e ? o.f(e, t, r(0, n)) : e[t] = n
    }
}
, function(e, t, n) {
    var o = n(54)
      , r = n(46)("iterator")
      , i = n(28);
    e.exports = n(13).getIteratorMethod = function(e) {
        if (void 0 != e)
            return e[r] || e["@@iterator"] || i[o(e)]
    }
}
, function(e, t, n) {
    var o = n(36)
      , r = n(46)("toStringTag")
      , i = "Arguments" == o(function() {
        return arguments
    }())
      , a = function(e, t) {
        try {
            return e[t]
        } catch (e) {}
    };
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a(t = Object(e), r)) ? n : i ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}
, function(e, t, n) {
    var o = n(46)("iterator")
      , r = !1;
    try {
        var i = [7][o]();
        i.return = function() {
            r = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !r)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , a = i[o]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[o] = function() {
                return a
            }
            ,
            e(i)
        } catch (e) {}
        return n
    }
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = o(n(57))
      , i = o(n(58))
      , a = o(n(59))
      , s = o(n(60))
      , l = {
        ImageLoader: r.default,
        Lifecycle: i.default,
        Tweak: a.default,
        UserAccounts: s.default
    }
      , c = l;
    t.default = c,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    /**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
    var n = {
        load: function(e, t) {
            return window.ImageLoader.load(e, t)
        }
    }
      , o = n;
    t.default = o,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    /**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
    var n = {
        init: function() {
            window.Squarespace.AFTER_BODY_LOADED = !1,
            window.Squarespace.afterBodyLoad()
        },
        destroy: function() {
            window.Squarespace.globalDestroy(window.Y)
        }
    }
      , o = n;
    t.default = o,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    function n() {
        window.Y.Global.on("tweak:change", function(e) {
            var t = e.getName()
              , n = {
                name: t,
                value: e.config && e.config.value || e.value
            };
            r[t] && r[t].callbacks.forEach(function(e) {
                try {
                    e(n)
                } catch (e) {
                    console.error(e)
                }
            }),
            r.all.callbacks.length > 0 && r.all.callbacks.forEach(function(e) {
                try {
                    e(n)
                } catch (e) {
                    console.error(e)
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    /**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
    var o = window.Static.SQUARESPACE_CONTEXT.authenticatedAccount
      , r = {
        all: {
            callbacks: []
        }
    }
      , i = {
        getValue: function(e) {
            return e && "string" == typeof e ? window.Static.SQUARESPACE_CONTEXT.tweakJSON[e] || window.Static.SQUARESPACE_CONTEXT.tweakJSON[e.replace("@", "").replace(".", "")] : (console.error("squarespace-core: Invalid tweak name " + e),
            null)
        },
        watch: function() {
            var e = arguments;
            if (o) {
                if (0 === arguments.length)
                    return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");
                if (1 === arguments.length)
                    return void ("function" == typeof arguments[0] && r.all.callbacks.push(arguments[0]));
                if ("string" == typeof arguments[0] && "function" == typeof arguments[1]) {
                    var t = arguments[0];
                    r[t] || (r[t] = {
                        callbacks: []
                    }),
                    r[t].callbacks.push(arguments[1])
                } else
                    arguments[0].constructor === Array && "function" == typeof arguments[1] && arguments[0].forEach(function(t) {
                        r[t] || (r[t] = {
                            callbacks: []
                        }),
                        r[t].callbacks.push(e[1])
                    })
            }
        }
    };
    o && ("complete" !== document.readyState ? window.addEventListener("load", n) : window.Y && window.Y.Global && n());
    var a = i;
    t.default = a,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var o = n(61)
      , r = "UserAccounts API not available"
      , i = function() {
        console.warn(r)
    }
      , a = function() {
        var e, t, n;
        return null !== (e = null === (t = window) || void 0 === t ? void 0 : null === (n = t[o.USER_ACCOUNT_API]) || void 0 === n ? void 0 : n[o.IS_USER_AUTHENTICATED]()) && void 0 !== e ? e : i()
    }
      , s = function() {
        var e, t, n;
        return null !== (e = null === (t = window) || void 0 === t ? void 0 : null === (n = t[o.USER_ACCOUNT_API]) || void 0 === n ? void 0 : n[o.OPEN_ACCOUNT_SCREEN]()) && void 0 !== e ? e : i()
    }
      , l = {
        isUserAuthenticated: a,
        openAccountScreen: s
    };
    t.default = l,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.OPEN_ACCOUNT_SCREEN = t.IS_USER_AUTHENTICATED = t.USER_ACCOUNT_API = void 0;
    var n = "UserAccountApi";
    t.USER_ACCOUNT_API = n;
    var o = "isUserAuthenticated";
    t.IS_USER_AUTHENTICATED = o;
    var r = "openAccountScreen";
    t.OPEN_ACCOUNT_SCREEN = r
}
, function(e, t) {
    "use strict";
    var n = {
        BREAKPOINT_MOBILE_BAR: 768,
        AUTHENTICATED: document.documentElement.classList.contains("authenticated-account"),
        COVER_PAGE: document.querySelector(".sqs-slide-container"),
        DEBUG: !1
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i, a, s = n(56), l = o(s), c = n(2), u = o(c), d = n(64), f = o(d), p = !1, A = ["a[href]", ':not([target="_blank"])', ':not([href^="/s/"])', ':not([href^="http"])', ':not([href^="#"])', ':not([href^="/#"])', ':not([href^="/commerce"])', ':not([href^="mailto"])', ':not([href^="tel"])', ':not([href^="javascript"])', ":not(.nav-item-splash-page)"].join(""), h = function(e) {
        return window.history && document.querySelector ? (e || (e = {}),
        this.CONTENT = e.content || '[role="main"]',
        this.ANCHORS = e.anchors || A,
        this.SITE_CONTAINER = e.siteContainer || null,
        this.TIMEOUT = window.parseInt(e.timeout, 10) || 5e3,
        this.SQS_CONTROLLER = e.sqsController || !1,
        this.RUN_ON_LOGIN = e.runOnLogin || !1,
        this.ACTIVE_NAV_CLASS = e.activeNavClass || "active",
        this.pageTransition = {
            animLink: e.pageTransition.animLink || null,
            animClass: e.pageTransition.animClass || null,
            fadeInDuration: e.pageTransition.fadeInDuration || .78,
            fadeOutDuration: e.pageTransition.fadeOutDuration || .2
        },
        this.beforeRequestAnim = e.beforeRequestAnim || null,
        this.afterRequestAnim = e.afterRequestAnim || null,
        void this.initialize()) : (console.log("returning, dont run AjaxLoader"),
        !1)
    };
    h.prototype = {
        initialize: function() {
            "scrollRestoration"in history && (history.scrollRestoration = "manual"),
            this.replaceHistory(),
            this.bind()
        },
        bind: function() {
            var e = document.body;
            this.bindAjaxAttr(document),
            this.bindMetaTags(this.findMetaTags()),
            e.addEventListener("click", this.bindLinks.bind(this)),
            window.addEventListener("popstate", this.bindPopState.bind(this))
        },
        bindAjaxAttr: function(e) {
            e || (e = document),
            document.body.dataset.ajaxLoader = "loaded";
            var t = e.querySelectorAll(this.ANCHORS);
            if (!(t.length <= 0))
                for (var n = 0; n < t.length; n++)
                    t[n].dataset.ajaxLoader = "ajax-loader-binded"
        },
        walkUpDOM: function(e, t) {
            for (var n = e; null !== n && n.tagName !== t.toUpperCase(); )
                n = n.parentNode;
            return n
        },
        bindLinks: function(e) {
            var t = this.walkUpDOM(e.target || e.srcElement, "A");
            if (t && "ajax-loader-binded" === t.getAttribute("data-ajax-loader")) {
                if (this.modifierKeyPressed(e))
                    return !1;
                if (e.preventDefault(),
                !p) {
                    i = e,
                    a = e.target;
                    var n = t.getAttribute("href");
                    this.fireRequest(n)
                }
            }
        },
        findMetaTags: function(e) {
            e || (e = document.head);
            var t = Array.prototype.filter.call(e.childNodes, function(e) {
                if (e.nodeType !== Node.ELEMENT_NODE)
                    return null;
                var t, n = e.nodeName.toUpperCase(), o = e.hasAttribute("property"), r = e.hasAttribute("itemprop"), i = e.hasAttribute("name");
                i && (t = e.getAttribute("name"));
                var a = e.hasAttribute("rel")
                  , s = ("META" === n || "LINK" === n && "canonical" === e.getAttribute("rel")) && (o || r || i && "viewport" !== t || a);
                return s
            });
            return t
        },
        bindMetaTags: function(e) {
            e.forEach(function(e) {
                e.setAttribute("data-ajax-meta", "binded")
            })
        },
        modifyLinkState: function(e) {
            Array.prototype.forEach.call(document.querySelectorAll("." + this.ACTIVE_NAV_CLASS), function(e) {
                e.classList.remove(this.ACTIVE_NAV_CLASS)
            }
            .bind(this)),
            Array.prototype.forEach.call(document.querySelectorAll('[href="' + e + '"]'), function(e) {
                e.parentNode.classList.add(this.ACTIVE_NAV_CLASS)
            }
            .bind(this))
        },
        modifierKeyPressed: function(e) {
            return !!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)
        },
        hasSomeParentTheClass: function(e, t) {
            return !!(e.className && e.className.split && e.className.split(" ").indexOf(t) >= 0) || e.parentNode && this.hasSomeParentTheClass(e.parentNode, t)
        },
        fireRequest: function(e) {
            p = !0,
            this.toggleLoadingAttr("add"),
            "click" === i.type ? this.isPageTransitionEnabled() && this.hasSomeParentTheClass(a, this.pageTransition.animLink) ? (this.beforeRequestAnim && this.beforeRequestAnim(),
            this.animations.fadeOut(this.SITE_CONTAINER, this.pageTransition.fadeOutDuration, function() {
                this.modifyLinkState(e),
                this.destroySqsBlocks(),
                this.ajax(e)
            }
            .bind(this))) : this.hasSomeParentTheClass(a, this.pageTransition.animLink) ? this.animations.fadeOut(this.SITE_CONTAINER, this.pageTransition.fadeOutDuration, function() {
                this.modifyLinkState(e),
                this.destroySqsBlocks(),
                this.ajax(e)
            }
            .bind(this)) : this.animations.fadeOut(this.SITE_CONTAINER, .12, function() {
                this.modifyLinkState(e),
                this.destroySqsBlocks(),
                this.ajax(e)
            }
            .bind(this)) : this.animations.fadeOut(this.SITE_CONTAINER, .12, function() {
                this.modifyLinkState(e),
                this.destroySqsBlocks(),
                this.ajax(e)
            }
            .bind(this))
        },
        ajax: function(e) {
            r = new XMLHttpRequest,
            r.open("GET", e),
            r.timeout = this.TIMEOUT,
            r.onreadystatechange = this.handleRequest.bind(this, e),
            r.ontimeout = this.handleTimeout.bind(this, e),
            r.send(null)
        },
        handleRequest: function(e) {
            if (4 === r.readyState)
                if (200 === r.status) {
                    var t = this.createDummyDom(r.responseText);
                    t.container && t.content ? (e !== window.location.pathname && (this.replaceHistory(),
                    this.updateHistory(e, document.querySelector("title").textContent)),
                    this.updatePage(t)) : this.handleTimeout(e)
                } else
                    this.handleTimeout(e)
        },
        handleTimeout: function(e) {
            p = !1,
            window.location.href = e
        },
        createDummyDom: function(e) {
            var t = document.createElement("html");
            t.innerHTML = e;
            var n = t.querySelector("body").classList
              , o = t.querySelector("title").textContent
              , r = t.querySelector("head")
              , i = r.querySelector('script[data-name="static-context"]')
              , a = this.findMetaTags(r);
            this.bindMetaTags(a);
            var s = document.createDocumentFragment();
            Array.prototype.forEach.call(a, function(e) {
                s.appendChild(e)
            });
            var l = t.querySelector("body").id;
            this.bindAjaxAttr(t);
            var c = {
                newHeadChildren: s,
                docTitle: o,
                staticContext: i,
                bodyClasses: n,
                bodyId: l,
                content: t.querySelector(this.CONTENT) ? t.querySelector(this.CONTENT).outerHTML : null,
                container: t.querySelector(this.SITE_CONTAINER) ? t.querySelector(this.SITE_CONTAINER).innerHTML : null
            };
            return t = null,
            c
        },
        updatePage: function(e) {
            var t = document.querySelector("body")
              , n = document.querySelector("head")
              , o = n.querySelector('script[data-name="static-context"]');
            Array.prototype.forEach.call(n.querySelectorAll('[data-ajax-meta="binded"]'), function(e) {
                n.removeChild(e)
            }),
            n.appendChild(e.newHeadChildren),
            document.title = e.docTitle,
            t.className = e.bodyClasses,
            t.id = e.bodyId,
            document.querySelector(this.SITE_CONTAINER).innerHTML = e.container,
            f.default.replaceScript(o, e.staticContext),
            this.initializeSqsBlocks(),
            this.SQS_CONTROLLER && this.refireTemplateControllers(),
            this.toggleLoadingAttr("remove"),
            "click" === i.type && this.hasSomeParentTheClass(a, this.pageTransition.animLink) ? this.afterRequestAnim && (this.afterRequestAnim(),
            this.animations.fadeIn(this.SITE_CONTAINER, this.pageTransition.fadeInDuration)) : this.animations.fadeIn(this.SITE_CONTAINER, this.pageTransition.fadeInDuration),
            "click" === i.type ? (this.scrollToPosition(0, 0),
            this.replaceHistory()) : this.scrollToPosition(0, 0),
            p = !1
        },
        initializeSqsBlocks: function() {
            l.default.Lifecycle.init()
        },
        destroySqsBlocks: function() {
            l.default.Lifecycle.destroy(),
            r = null
        },
        refireTemplateControllers: function() {
            u.default.refresh()
        },
        updateHistory: function(e, t) {
            var n = {
                url: e,
                search: window.location.search,
                docTitle: t,
                position: {
                    x: window.scrollX,
                    y: window.scrollY
                }
            };
            window.history.pushState(n, t, e)
        },
        replaceHistory: function() {
            var e = window.location.hash || "";
            window.history.replaceState({
                url: window.location.pathname + e,
                search: window.location.search,
                docTitle: document.title,
                position: {
                    x: window.scrollX,
                    y: window.scrollY
                }
            }, document.title, window.location.pathname + window.location.search + e)
        },
        bindPopState: function(e) {
            e.state && (p ? console.log("uh oh something wrong with bindPopState") : (i = e,
            this.fireRequest(e.state.url + e.state.search)))
        },
        scrollToPosition: function(e, t) {
            window.scrollTo(e, t)
        },
        toggleLoadingAttr: function(e) {
            "add" === e ? document.body.setAttribute("data-ajax-loader", "loading") : "remove" === e && document.body.setAttribute("data-ajax-loader", "loaded")
        },
        toggleWillChange: function(e, t) {
            var n = t.map(function(e, t, n) {
                return t < n.length - 1 ? e + ", " : e
            }).toString();
            e.style.willChange = n
        },
        isPageTransitionEnabled: function() {
            return !!document.body.classList.contains(this.pageTransition.animClass)
        },
        animations: {
            fadeIn: function(e, t, n) {
                var o = document.querySelector('[data-ajax-loader="loaded"] ' + e);
                o.setAttribute("style", ["opacity: 1;", "-webkit-transition: opacity " + t + "s;", "transition: opacity " + t + "s;"].join("")),
                n && window.setTimeout(n, t)
            },
            fadeOut: function(e, t, n) {
                var o = document.querySelector('[data-ajax-loader="loading"] ' + e);
                o.setAttribute("style", ["opacity: 0;", "-webkit-transition: opacity " + t + "s;", "transition: opacity " + t + "s;"].join("")),
                n && window.setTimeout(n, 1e3 * t)
            },
            fade: function(e, t, n) {
                var o, r;
                "in" === e ? (o = 1,
                r = '[data-ajax-loader="loaded"]') : (o = 0,
                r = '[data-ajax-loader="loading"]'),
                document.querySelector(r + " " + t).setAttribute("style", ["opacity: " + o + ";", "-webkit-transition: opacity " + n + "s;", "transition: opacity " + n + "s;"].join(""))
            },
            slideUp: function(e, t, n) {
                document.querySelector(e).classList.add("slide-up"),
                n && window.setTimeout(n, 1e3 * t)
            },
            slideIntoView: function(e, t, n) {
                document.querySelector(e).classList.add("slide-into-view"),
                n && n()
            }
        }
    },
    t.default = h
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r = n(3)
      , i = o(r)
      , a = n(56)
      , s = {
        resizeEnd: function(e) {
            var t, n = 100, o = !1;
            window.addEventListener("resize", function() {
                o || (o = !0),
                t && clearTimeout(t),
                t = setTimeout(function() {
                    e(),
                    o = !1
                }, n)
            })
        },
        reloadImages: function(e, t) {
            for (var n = 0; n < e.length; n++)
                a.ImageLoader.load(e[n], t)
        },
        getClosest: function(e, t) {
            for (var n = t.charAt(0); e && e !== document; e = e.parentNode) {
                if ("." === n && e.classList.contains(t.substr(1)))
                    return e;
                if ("#" === n && e.id === t.substr(1))
                    return e;
                if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2)))
                    return e;
                if (e.tagName.toLowerCase() === t)
                    return e
            }
            return !1
        },
        determineCollectionType: function() {
            var e, t = Array.prototype.slice.apply(document.body.classList);
            return t.forEach(function(t) {
                0 === t.indexOf("collection-type-") && (e = t.split("-")[2])
            }),
            e
        },
        shouldShowBanner: function(e) {
            e = e || this.determineCollectionType();
            var t = document.body.classList.contains("show-" + e + "-banner")
              , n = document.body.classList.contains("homepage")
              , o = document.body.classList.contains("show-homepage-banner");
            return t || n && o
        },
        replaceAttributes: function(e, t) {
            for (var n = (0,
            i.default)(e.attributes), o = 0; o < n.length; o++)
                e.removeAttribute(n[o].name);
            for (var r = 0; r < t.attributes.length; r++)
                e.setAttribute(t.attributes[r].name, t.attributes[r].value)
        },
        replaceScript: function(e, t) {
            var n = e.parentElement
              , o = document.createElement("script");
            o.innerHTML = t.innerHTML,
            this.replaceAttributes(o, e),
            n.removeChild(e),
            n.appendChild(o)
        }
    };
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e) {
        var t = new d.default(e,{
            DEBUG: p.DEBUG
        });
        if (e.classList.contains("Mobile")) {
            var n = function() {
                t.sync(),
                e.classList.add("loaded")
            };
            return n(),
            c.Tweak.watch(A, n),
            {
                sync: n
            }
        }
        var o = e.getAttribute("data-nc-base")
          , r = (0,
        l.default)(e.querySelectorAll("[data-nc-group]")).reduce(function(e, t) {
            var n = t.getAttribute("data-nc-group");
            if (!n)
                return e;
            var o = (0,
            l.default)(t.querySelectorAll("[data-nc-container]"));
            return e[n] = {
                node: t,
                containers: o,
                breakpoint: {
                    min: 0,
                    max: 999999
                }
            },
            e
        }, {})
          , i = function(e) {
            for (var t = r[e], n = 0; n < t.containers.length; n++)
                for (var i = t.containers[n], a = i.getAttribute("data-nc-container"), s = Math.ceil(parseFloat(window.getComputedStyle(i).width)), l = i.querySelectorAll("[data-nc-element]"), c = document.body.classList.contains("ancillary-" + o + "-" + a + "-layout-stacked"), u = 0, d = 0; d < l.length; d++) {
                    var f = l[d]
                      , p = f.offsetWidth;
                    if (p > 0 && !c && (u += p),
                    c && p > s || !c && u > s)
                        return window.innerWidth > t.breakpoint.min && (t.breakpoint.min = window.innerWidth),
                        !0
                }
            return window.innerWidth < t.breakpoint.max && (t.breakpoint.max = window.innerWidth),
            !1
        }
          , s = function() {
            return !document.body.classList.contains("is-mobile")
        }
          , u = function() {
            s() && (0,
            a.default)(r).forEach(function(e) {
                var t = r[e];
                window.innerWidth > t.breakpoint.min && window.innerWidth <= t.breakpoint.max ? (t.node.removeAttribute("data-nc-collapse"),
                i(e) && t.node.setAttribute("data-nc-collapse", "")) : window.innerWidth <= t.breakpoint.min ? t.node.setAttribute("data-nc-collapse", "") : window.innerWidth > t.breakpoint.max && t.node.removeAttribute("data-nc-collapse")
            })
        }
          , m = function() {
            t.sync(),
            u(),
            e.classList.add("loaded")
        };
        return (0,
        f.resizeEnd)(function() {
            u()
        }),
        c.Tweak.watch(h, m),
        m(),
        {
            sync: m
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(66)
      , a = o(i)
      , s = n(3)
      , l = o(s)
      , c = n(56)
      , u = n(70)
      , d = o(u)
      , f = n(64)
      , p = n(62)
      , A = ["ancillary-mobile-bar-branding-position", "ancillary-mobile-bar-menu-icon-position", "ancillary-mobile-bar-search-icon-position", "ancillary-mobile-bar-cart-position", "ancillary-mobile-bar-account-position"]
      , h = ["ancillary-header-branding-position", "ancillary-header-tagline-position", "ancillary-header-primary-nav-position", "ancillary-header-secondary-nav-position", "ancillary-header-social-position", "ancillary-header-search-position", "ancillary-header-cart-position", "ancillary-header-account-position"];
    t.default = r
}
, function(e, t, n) {
    e.exports = {
        default: n(67),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(68),
    e.exports = n(13).Object.keys
}
, function(e, t, n) {
    var o = n(48)
      , r = n(32);
    n(69)("keys", function() {
        return function(e) {
            return r(o(e))
        }
    })
}
, function(e, t, n) {
    var o = n(11)
      , r = n(13)
      , i = n(22);
    e.exports = function(e, t) {
        var n = (r.Object || {})[e] || Object[e]
          , a = {};
        a[e] = t(n),
        o(o.S + o.F * i(function() {
            n(1)
        }), "Object", a)
    }
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(71)
      , i = o(r)
      , a = n(72)
      , s = o(a)
      , l = n(3)
      , c = o(l)
      , u = function(e, t) {
        var n = new RegExp("ancillary-|" + t + "-","gi")
          , o = e.replace(n, "").toLowerCase().split(/-position-?/);
        return 2 === o.length ? {
            elementName: o[0],
            containerName: o[1]
        } : null
    }
      , d = function(e) {
        var t = new RegExp("ancillary-" + e + "-(.{1,20})-position-(.+?)(?=(\\s|$))","gi")
          , n = document.body.className.match(t)
          , o = n.reduce(function(t, n) {
            var o = u(n, e);
            return t[o.elementName] = o.containerName,
            t
        }, {});
        return o
    }
      , f = function(e) {
        var t = (0,
        c.default)(e.querySelectorAll("[data-nc-element]"))
          , n = t.reduce(function(e, t) {
            var n = t.getAttribute("data-nc-element");
            return n.length > 0 && (e[n] = t),
            e
        }, {});
        return n
    }
      , p = function(e) {
        var t = (0,
        c.default)(e.querySelectorAll("[data-nc-container]"))
          , n = t.reduce(function(e, t) {
            var n = t.getAttribute("data-nc-container");
            return n.length > 0 && (e[n] = t),
            e
        }, {});
        return n
    }
      , A = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0,
            i.default)(this, e),
            this.baseName = t.getAttribute("data-nc-base").toLowerCase(),
            this.base = t,
            this.config = n,
            this.elements = f(this.base),
            this.containers = p(this.base)
        }
        return (0,
        s.default)(e, [{
            key: "sync",
            value: function() {
                this.positions = d(this.baseName);
                for (var e in this.elements)
                    this.syncElement(e, this.positions[e])
            }
        }, {
            key: "syncElement",
            value: function(e, t) {
                var n = this.elements[e]
                  , o = this.containers[t];
                !n && this.config.debug ? console.error('Element "' + e + '"" not found.') : o ? o.appendChild(n) : n.parentNode && (n.parentNode.removeChild(n),
                this.config.debug && console.warn('Container "' + t + '" not found. Removing element "' + e + '".'))
            }
        }], [{
            key: "parse",
            value: function(e) {
                return u(e, this.baseName)
            }
        }]),
        e
    }();
    t.default = A,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var r = n(73)
      , i = o(r);
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                (0,
                i.default)(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
}
, function(e, t, n) {
    e.exports = {
        default: n(74),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(75);
    var o = n(13).Object;
    e.exports = function(e, t, n) {
        return o.defineProperty(e, t, n)
    }
}
, function(e, t, n) {
    var o = n(11);
    o(o.S + o.F * !n(21), "Object", {
        defineProperty: n(17).f
    })
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        var e = document.querySelector(".page-banner-wrapper")
          , t = void 0
          , n = ["show-index-banner", "show-album-banner", "show-blog-banner", "show-events-banner", "show-gallery-banner", "show-homepage-banner", "show-page-banner", "show-products-banner", "show-project-banner", "banner-height", "banner-image-crop", "banner-image-alignment", "site-outer-padding", "siteCustomSpacing", "siteMaxWidth", "auto-color-banner-background", "full-bleed-project", "full-bleed-banner"]
          , o = ["banner-page-description-font-font-size", "banner-page-description-title-font-size", "bannerPageTitleMin", "bannerPageDescriptionMin", "scale-banner-description-font-size", "scale-banner-title-font-size", "banner-title-spacing", "page-banner-text-width"]
          , r = function(e) {
            var t = document.querySelector("body.collection-type-" + e)
              , n = document.querySelector(".collection-thumbnail-image-container")
              , o = document.querySelector(".js-page-banner-image");
            s.default.shouldShowBanner() ? n.classList.remove("hide-collection-image") : n.classList.add("hide-collection-image");
            var r = t.classList.contains("banner-image-alignment-left")
              , i = t.classList.contains("banner-image-alignment-right")
              , a = t.classList.contains("banner-image-alignment-center");
            r || i || a ? t.classList.contains("banner-image-crop") ? (n.classList.add("content-fill"),
            o && o.classList.remove("page-banner-image")) : (n.classList.remove("content-fill"),
            o && (o.removeAttribute("style"),
            o.classList.add("page-banner-image"))) : (t.classList.remove("banner-image-crop"),
            n.classList.remove("content-fill"),
            o && (o.removeAttribute("style"),
            o.classList.add("page-banner-image")));
            var l = ".page-banner-image-container:not(.hide-collection-image) .js-page-banner-image";
            s.default.reloadImages(document.querySelectorAll(l), {
                load: !0
            }),
            s.default.reloadImages(document.querySelectorAll("img.custom-fallback-image"), {
                load: !0
            })
        }
          , a = function() {
            for (var e = document.querySelectorAll(".page-description p"), t = 0; t < e.length; t++) {
                var n = "<span>" + e[t].innerHTML + "</span>";
                e[t].innerHTML = n
            }
        }
          , l = function(e) {
            var t = document.querySelector(".page-text-wrapper")
              , n = document.querySelector("#page");
            s.default.shouldShowBanner() ? document.querySelector(".page-banner-wrapper").appendChild(t) : n.insertBefore(t, n.firstChild),
            t.classList.remove("hide")
        }
          , c = function(e) {
            var t = document.querySelector("body.collection-type-" + e)
              , n = void 0
              , o = document.querySelector(".page-banner-wrapper");
            s.default.shouldShowBanner() && t.classList.contains("auto-color-banner-background") ? (n = o.dataset.suggestedBgColorThumbnail,
            o.style.backgroundColor = n) : o.removeAttribute("style")
        }
          , u = function() {
            if (!s.default.shouldShowBanner())
                return void (e.style.minHeight = 0);
            var t = document.querySelector(".page-text-wrapper");
            e.style.minHeight = t.offsetHeight + "px"
        }
          , d = function() {
            u(),
            s.default.reloadImages(document.querySelectorAll(".collection-thumbnail-image-container img"), {
                load: !0
            })
        }
          , f = function() {
            t = s.default.determineCollectionType(),
            s.default.reloadImages(document.querySelectorAll(".collection-thumbnail-image img"), {
                load: !0
            }),
            window.addEventListener("resize", d),
            c(t),
            a(),
            l(t),
            u(),
            r(t)
        };
        return i.Tweak.watch(n, function(e) {
            c(t),
            l(t),
            u(),
            r(t)
        }),
        i.Tweak.watch(o, function(e) {
            u(),
            r(t)
        }),
        f(),
        {
            sync: function() {
                f()
            },
            destroy: function() {
                t = null,
                window.removeEventListener("resize", d)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(56)
      , a = n(64)
      , s = o(a);
    t.default = r
}
, function(e, t, n) {
    "use strict";
    function o() {
        var e = document.body
          , t = e.querySelector('[data-nc-element="tagline"]')
          , n = e.querySelector('[data-nc-element="secondary-nav"]')
          , o = e.querySelector('[data-nc-element="primary-nav"]')
          , i = ["tagline-position", "primary-nav-position", "secondary-nav-position"]
          , a = function() {
            t && t.hasChildNodes() ? e.classList.add("has-tagline") : e.classList.remove("has-tagline"),
            n && n.hasChildNodes() ? e.classList.add("has-secondary-nav") : e.classList.remove("has-secondary-nav"),
            o && o.hasChildNodes() ? e.classList.add("has-primary-nav") : e.classList.remove("has-primary-nav")
        };
        return r.Tweak.watch(i, a),
        a(),
        {
            sync: function() {
                a()
            },
            destroy: function() {}
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(56);
    t.default = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        var e = document.body
          , t = void 0
          , n = document.querySelector(".index-list")
          , o = ["index-item-image-crop", "index-item-image-alignment", "index-item-alternate-widths", "index-item-spacing", "indexItemSpacing", "index-item-width", "full-bleed-index", "indexItemsPerRow", "tabletItemsPerRow", "mobileItemsPerRow", "thumbnailRatio", "indexItemWidth"]
          , r = ["index-item-title-display", "index-item-title-alignment", "index-item-height", "index-item-alternate-widths"]
          , a = [].slice.call(document.querySelectorAll(".index-item-text-wrapper"))
          , l = function(t) {
            var n = document.querySelectorAll(".js-index-item-image-wrapper")
              , o = document.querySelectorAll(".js-index-item-image")
              , r = e.classList.contains("index-item-image-alignment-left")
              , i = e.classList.contains("index-item-image-alignment-right")
              , a = e.classList.contains("index-item-image-alignment-center");
            if (r || i || a)
                if (e.classList.contains("index-item-image-crop"))
                    for (var l = 0; l < n.length; l++)
                        n[l].classList.add("content-fill"),
                        o[l] && o[l].classList.remove("index-item-image");
                else
                    for (var c = 0; c < n.length; c++)
                        n[c].classList.remove("content-fill"),
                        o[c] && (o[c].removeAttribute("style"),
                        o[c].classList.add("index-item-image"));
            else {
                e.classList.remove("index-item-image-crop");
                for (var u = 0; u < n.length; u++)
                    n[u].classList.remove("content-fill"),
                    o[u] && (o[u].removeAttribute("style"),
                    o[u].classList.add("index-item-image"))
            }
            s.default.reloadImages(document.querySelectorAll(".js-index-item-image"), {
                load: !0
            }),
            s.default.reloadImages(document.querySelectorAll("img.custom-fallback-image"), {
                load: !0
            })
        }
          , c = function() {
            s.default.reloadImages(document.querySelectorAll(".js-index-item-image"), {
                load: !0
            }),
            s.default.reloadImages(document.querySelectorAll("img.custom-fallback-image"), {
                load: !0
            })
        }
          , u = function(e) {
            var t = e.getBoundingClientRect();
            return t.top <= window.innerHeight / 2 || t.bottom <= window.innerHeight
        }
          , d = function() {
            var e = void 0;
            a.forEach(function(t, n, o) {
                if (e = u(t))
                    return void t.classList.add("reveal-index-title")
            })
        }
          , f = function() {
            e.classList.contains("index-item-title-display-on-scroll") ? d() : a.forEach(function(e) {
                e.classList.remove("reveal-index-title")
            })
        }
          , p = function(t) {
            if (e.classList.contains("index-item-title-display-on-hover")) {
                var n = t.target
                  , o = document.querySelector(".reveal-index-title");
                if (n && n.classList.contains("index-section"))
                    return void (o && o.classList.remove("reveal-index-title"));
                for (; n && !n.classList.contains("index-item"); )
                    n = n.parentNode;
                var r = n.querySelector(".index-item-text-wrapper");
                r.classList.contains("reveal-index-title") || (t.preventDefault(),
                o && o.classList.remove("reveal-index-title"),
                r.classList.add("reveal-index-title"))
            }
        };
        i.Tweak.watch(o, l),
        i.Tweak.watch(r, f),
        i.Tweak.watch("index-item-height", function(e) {
            s.default.reloadImages(document.querySelectorAll(".js-index-item-image"), {
                load: !0
            })
        });
        var A = function() {
            window.addEventListener("resize", c),
            window.addEventListener("scroll", f),
            n.addEventListener("touchend", p),
            l(),
            t = window.setTimeout(function() {
                f()
            }, 1e3)
        }
          , h = function() {
            window.removeEventListener("resize", c),
            window.removeEventListener("scroll", f),
            n.removeEventListener("touchend", p),
            window.clearTimeout(t)
        };
        return A(),
        {
            sync: A,
            destroy: h
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(56)
      , a = n(64)
      , s = o(a);
    t.default = r
}
, function(e, t, n) {
    "use strict";
    function o() {
        var e = ["index-link-style", "show-index-navigation"]
          , t = void 0
          , n = void 0
          , o = function() {
            var e = document.body
              , t = void 0
              , n = void 0
              , o = e.classList.contains("index-link-style-next-inline")
              , r = e.classList.contains("index-link-style-next-stacked");
            (o || r) && (n = document.querySelector("#indexNext"));
            var i = e.classList.contains("index-link-style-list-inline")
              , a = e.classList.contains("index-link-style-list-stacked");
            return (i || a) && (n = document.querySelector("#indexNav")),
            n.classList.remove("hide"),
            t = n.querySelector(".active-link"),
            t.nextElementSibling ? t.nextElementSibling.classList.add("link-next-up") : n.querySelector("nav").firstElementChild.classList.add("link-next-up"),
            n
        }
          , i = function(e) {
            var t = e.getBoundingClientRect();
            return t.top >= window.innerHeight / 1.25 && t.top <= window.innerHeight / 1.1 || t.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        }
          , a = function(e) {
            var t = i(e);
            t && e.classList.add("reveal-index-nav")
        }
          , s = function() {
            var e = o();
            t = a.bind(null, e),
            e.classList.remove("reveal-index-nav"),
            n = window.setTimeout(function() {
                a(e)
            }, 250),
            window.addEventListener("scroll", t)
        };
        return r.Tweak.watch(e, function(e) {
            var t = o();
            a(t)
        }),
        s(),
        {
            sync: s,
            destroy: function() {
                window.removeEventListener("scroll", t),
                window.clearTimeout(n)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(56);
    t.default = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        var e = 100
          , t = document.body
          , n = document.querySelector("#mobileNavToggle")
          , o = Array.prototype.map.call(document.querySelectorAll("#overlayNav a, #overlayNav button"), function(e) {
            return e
        })
          , r = document.querySelector(".mobile-branding-wrapper a")
          , i = void 0
          , s = void 0
          , l = []
          , c = function(o) {
            var r = document.querySelector(".site-container")
              , a = document.querySelector(".mobile-bar-wrapper")
              , c = document.querySelector(".overlay-nav-container");
            t.classList.contains("mobile-menu-open") || (i = window.scrollY,
            s = window.scrollX),
            document.documentElement.classList.toggle("mobile-menu-open", n.checked),
            t.classList.toggle("mobile-menu-open", n.checked),
            t.classList.contains("mobile-menu-open") && (c.style.paddingTop = a.offsetHeight + "px",
            c.style.paddingBottom = a.offsetHeight + "px"),
            t.classList.contains("mobile-menu-open") ? (t.classList.contains("tweak-mobile-bar-position-top-fixed") && l.push(window.setTimeout(function() {
                window.scrollTo(0, 0)
            }, e)),
            t.classList.contains("tweak-mobile-bar-position-bottom-fixed") && l.push(window.setTimeout(function() {
                window.scrollTo(0, a.getBoundingClientRect().bottom)
            }, e))) : l.push(window.setTimeout(function() {
                window.scrollTo(s, i)
            }, e)),
            t.classList.contains("tweak-mobile-bar-position-standard") && (t.classList.contains("mobile-menu-open") ? l.push(window.setTimeout(function() {
                r.style.marginTop = a.offsetHeight + "px"
            }, e)) : r.style.marginTop = "0px")
        }
          , u = function() {
            n.checked = !1,
            c()
        }
          , d = function() {
            var e = document.querySelector(".mobile-bar-wrapper")
              , n = document.querySelector(".site-container");
            return window.innerWidth <= 768 ? t.classList.contains("tweak-mobile-bar-position-standard") ? void (n.style.paddingTop = "0px") : t.classList.contains("tweak-mobile-bar-position-top-fixed") ? void (n.style.paddingTop = e.offsetHeight + "px") : t.classList.contains("tweak-mobile-bar-position-bottom-fixed") ? void (n.style.paddingBottom = e.offsetHeight + "px") : void 0 : (n.style.paddingTop = "0px",
            void (n.style.paddingBottom = "0px"))
        }
          , f = function() {
            var e = document.querySelector(".sqs-announcement-bar")
              , n = document.querySelector(".mobile-bar-wrapper");
            e && (t.classList.contains("tweak-mobile-bar-position-top-fixed") ? e.style.top = n.offsetHeight + "px" : e.style.top = 0)
        }
          , p = function() {
            var e = document.querySelector(".sqs-mobile-info-bar")
              , n = document.querySelector(".mobile-bar-wrapper");
            e && (t.classList.contains("tweak-mobile-bar-position-bottom-fixed") ? e.style.bottom = n.offsetHeight + "px" : e.style.bottom = 0)
        }
          , A = function() {
            d(),
            f(),
            p(),
            window.addEventListener("resize", d),
            window.addEventListener("resize", f),
            n.addEventListener("change", c),
            r.addEventListener("click", u);
            for (var e = 0; e < o.length; e++)
                o[e].addEventListener("click", u)
        }
          , h = function() {
            window.removeEventListener("resize", d),
            window.removeEventListener("resize", f),
            n.removeEventListener("change", c),
            r.removeEventListener("click", u);
            for (var e = 0; e < o.length; e++)
                o[e].removeEventListener("click", u);
            l.forEach(function(e) {
                window.clearTimeout(e)
            })
        };
        return a.default.Tweak.watch("tweak-mobile-bar-position", function(e) {
            d(),
            f(),
            p()
        }),
        A(),
        {
            sync: A,
            destroy: h
        }
    }
    var i = n(56)
      , a = o(i);
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e) {
        var t = function() {
            if (window.innerWidth < l.default.MOBILE_BREAKPOINT) {
                var t = 0
                  , n = window.getComputedStyle(e);
                if ("none" !== n.display && "fixed" === n.position && (t = e.offsetHeight),
                0 === parseFloat(n.bottom)) {
                    document.body.style.marginBottom = t + "px";
                    var o = document.querySelector(".sqs-mobile-info-bar");
                    o && (o.style.bottom = t + "px")
                } else
                    document.body.style.marginTop = t + "px"
            } else
                document.body.style.marginTop = "",
                document.body.style.marginBottom = ""
        }
          , n = ["tweak-mobile-bar-bottom-fixed", "tweak-mobile-bar-top-fixed"];
        return a.default.Tweak.watch(n, t),
        u.default.resizeEnd(t),
        t(),
        {
            sync: t
        }
    }
    var i = n(56)
      , a = o(i)
      , s = n(62)
      , l = o(s)
      , c = n(64)
      , u = o(c);
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e) {
        a.default.DEBUG && console.log("MobileOverlayFolders");
        var t = function(t) {
            for (var n = t.target; n !== e && null === n.getAttribute("data-controller-folder-toggle"); )
                n = n.parentNode;
            var o = n.getAttribute("data-controller-folder-toggle");
            if (o) {
                var r = e.querySelector('[data-controller-folder="' + o + '"]');
                r && (r.classList.toggle("is-active-folder"),
                e.classList.toggle("has-active-folder"))
            }
        }
          , n = function() {
            e.addEventListener("click", t)
        }
          , o = function() {
            e.removeEventListener("click", t)
        };
        return n(),
        {
            sync: n,
            destroy: o
        }
    }
    var i = n(62)
      , a = o(i);
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e) {
        l.default.DEBUG && console.log("MobileOverlayToggle");
        var t = ["tweak-mobile-overlay-slide-origin", "tweak-mobile-overlay-back-color", "tweak-mobile-overlay-close-show", "tweak-mobile-overlay-close-background-color", "tweak-mobile-overlay-close-icon-color", "tweak-mobile-overlay-menu-color", "tweak-mobile-overlay-menu-indicator-color", "tweak-mobile-overlay-menu-primary-font", "tweak-mobile-overlay-menu-primary-text-color", "tweak-mobile-overlay-menu-secondary-font", "tweak-mobile-overlay-menu-secondary-text-color"];
        a.default.Tweak.watch(function(e) {
            var n = window.innerWidth < l.default.MOBILE_BREAKPOINT && e.name && t.indexOf(e.name) >= 0;
            document.body.classList.toggle("is-mobile-overlay-active", n)
        });
        var n = function(e) {
            e.preventDefault(),
            document.body.classList.contains("is-mobile-overlay-active") ? (document.body.classList.remove("is-mobile-overlay-active"),
            document.body.style.top = null,
            window.scrollTo(0, d)) : (d = document.body.scrollTop,
            document.body.classList.add("is-mobile-overlay-active"),
            document.body.style.top = -1 * d + "px")
        }
          , o = function() {
            e.addEventListener("click", n)
        }
          , r = function() {
            e.removeEventListener("click", n)
        };
        return u.default.resizeEnd(function() {
            window.innerWidth > l.default.MOBILE_BREAKPOINT && document.body.classList.remove("is-mobile-overlay-active")
        }),
        o(),
        {
            sync: o,
            destroy: r
        }
    }
    var i = n(56)
      , a = o(i)
      , s = n(62)
      , l = o(s)
      , c = n(64)
      , u = o(c)
      , d = 0;
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        function e() {
            l.default.reloadImages(document.querySelectorAll(".project-slide-video-wrapper img[data-src]"), {
                load: !0,
                mode: "fill"
            })
        }
        var t = []
          , n = document.querySelectorAll(".project-slide-image-wrapper img[data-src]")
          , o = Array.prototype.map.call(n, function(e, t) {
            return e
        })
          , r = o[0]
          , i = Array.prototype.map.call(document.querySelectorAll(".project-slide"), function(e) {
            return e
        })
          , s = void 0
          , c = ["project-image-portrait-caption-style", "project-image-landscape-caption-style"]
          , u = function(e) {
            var t = e.getAttribute("data-image-dimensions").split("x");
            return parseInt(t[0], 10) / parseInt(t[1], 10) * 100
        }
          , d = function(e) {
            var t = u(e);
            return t > 200 ? "project-slide-pano project-slide-landscape" : t > 115 ? "project-slide-landscape" : t < 85 ? "project-slide-portrait project-slide-staggerable" : "project-slide-square project-slide-staggerable"
        }
          , f = function() {
            var e = document.body
              , t = void 0;
            e.classList.contains("collapse-landscape-spacing") ? (t = document.querySelectorAll(".project-slide-landscape"),
            Array.prototype.forEach.call(t, function(e) {
                e.removeAttribute("style")
            }),
            e.classList.contains("show-project-captions") ? (t = document.querySelectorAll(".project-slide-landscape.project-slide-has-no-description"),
            Array.prototype.forEach.call(t, function(e) {
                e.removeAttribute("style");
                var t = e.nextElementSibling;
                t && t.classList.contains("project-slide-landscape") && (e.style.marginBottom = "-1px"),
                e.classList.contains("project-slide-has-description") && e.removeAttribute("style")
            })) : (t = document.querySelectorAll(".project-slide-landscape"),
            Array.prototype.forEach.call(t, function(e) {
                var t = e.nextElementSibling;
                t && t.classList.contains("project-slide-landscape") && (e.style.marginBottom = "-1px")
            }))) : (t = document.querySelectorAll(".project-slide-landscape"),
            Array.prototype.forEach.call(t, function(e) {
                e.removeAttribute("style")
            }))
        }
          , p = function() {
            var e = void 0
              , t = document.body;
            if (t.classList.contains("tweak-project-slide-transition")) {
                var n = document.body.classList.contains("project-image-portrait-caption-style-offset")
                  , o = document.body.classList.contains("project-image-landscape-caption-style-offset");
                if (n && o) {
                    var r = ".project-slide-image-container, .project-slide-description-wrapper, .project-slide-video-wrapper";
                    e = Array.prototype.map.call(document.querySelectorAll(r), function(e) {
                        return e
                    })
                } else if (document.body.classList.contains("project-image-portrait-caption-style-offset")) {
                    var i = [".project-slide-portrait .project-slide-image-container", ".project-slide-portrait .project-slide-description-wrapper", ".project-slide-square .project-slide-image-container", ".project-slide-square .project-slide-description-wrapper", ".project-slide-landscape", ".project-slide-video"].join(",");
                    e = Array.prototype.map.call(document.querySelectorAll(i), function(e) {
                        return e
                    })
                } else if (document.body.classList.contains("project-image-landscape-caption-style-offset")) {
                    var a = [".project-slide-landscape .project-slide-image-container", ".project-slide-landscape .project-slide-description-wrapper", ".project-slide-portrait", ".project-slide-square", ".project-slide-video .project-slide-video-wrapper", ".project-slide-video .project-slide-description-wrapper"].join(",");
                    e = Array.prototype.map.call(document.querySelectorAll(a), function(e) {
                        return e
                    })
                } else
                    e = Array.prototype.map.call(document.querySelectorAll(".project-slide"), function(e) {
                        return e
                    })
            } else
                e = Array.prototype.map.call(document.querySelectorAll(".project-slide"), function(e) {
                    return e
                });
            return e
        }
          , A = function(e) {
            var t = e.getBoundingClientRect()
              , n = Math.round(window.innerHeight / 1.1);
            return t.top >= 0 && t.top <= n || t.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        }
          , h = function() {
            var e = void 0;
            s.forEach(function(t, n, o) {
                if (e = A(t),
                e && !t.classList.contains("already-animated"))
                    return t.classList.add("slide-in"),
                    t.classList.add("already-animated"),
                    void s.splice(n, 1)
            })
        }
          , m = function() {
            o.forEach(function(e) {
                a.default.ImageLoader.load(e, {
                    load: !0
                })
            }),
            h()
        }
          , y = function(e) {
            var t = l.default.getClosest(e, ".project-slide-image-container")
              , n = t.getAttribute("data-image-dimensions").split("x")
              , o = l.default.getClosest(e, ".project-slide-image-wrapper");
            "none" === window.getComputedStyle(o).maxWidth && (o.style.maxWidth = Math.min(n[0], 2500) + "px"),
            "none" === window.getComputedStyle(o).maxHeight && (o.style.maxHeight = n[1] + "px")
        }
          , v = function(e) {
            var n = i[0];
            n.className += " " + d(r),
            n.classList.contains("project-slide-staggerable") && (t.push(n),
            n.classList.add("portrait-caption-alternate-odd")),
            y(r),
            a.default.ImageLoader.load(r, {
                load: !0
            })
        }
          , g = function(e) {
            e.target.parentNode.classList.remove("not-ready")
        }
          , b = function() {
            l.default.reloadImages(document.querySelectorAll(".project-slide-image"), {
                load: !0
            }),
            l.default.reloadImages(document.querySelectorAll("img.custom-fallback-image"), {
                load: !0
            })
        }
          , w = function(e) {
            var n = l.default.getClosest(e, ".project-slide");
            n.className += " " + d(e),
            n.classList.contains("project-slide-staggerable") && (t.push(n),
            t.length % 2 === 0 ? n.classList.add("portrait-caption-alternate-even") : n.classList.add("portrait-caption-alternate-odd"))
        }
          , E = function() {
            var e = ".project-slide-video-wrapper .sqs-video-wrapper"
              , t = Array.prototype.map.call(document.querySelectorAll(e), function(e) {
                return e
            })
              , n = ".project-slide-video-wrapper img[data-src]"
              , o = Array.prototype.map.call(document.querySelectorAll(n), function(e) {
                return e
            });
            t.forEach(function(e, t) {
                var n = e.getAttribute("data-html")
                  , o = document.createElement("div");
                o.innerHTML = n;
                var r = o.firstChild
                  , i = r.getAttribute("width");
                e.parentNode.style.maxWidth = i + "px"
            }),
            o.forEach(function(e, t) {
                var n = l.default.getClosest(e, ".project-slide");
                n.className += " " + d(e),
                a.default.ImageLoader.load(e, {
                    load: !0,
                    mode: "fill"
                })
            })
        }
          , T = function() {
            o.forEach(function(e) {
                e.addEventListener("load", g),
                w(e),
                y(e)
            }),
            r && (v(),
            r.addEventListener("load", m)),
            s = p(),
            s.length && s[0].classList.add("slide-in"),
            E(),
            f(),
            window.addEventListener("resize", e),
            window.addEventListener("resize", b),
            window.addEventListener("scroll", h)
        }
          , S = function() {
            window.removeEventListener("resize", e),
            window.removeEventListener("resize", b),
            window.removeEventListener("scroll", h),
            r && r.removeEventListener("load", m),
            o.forEach(function(e) {
                e.removeEventListener("load", g)
            })
        };
        return a.default.Tweak.watch("allow-full-width-portrait", function(e) {
            Array.prototype.forEach.call(document.querySelectorAll("img[data-src]"), function(e) {
                a.default.ImageLoader.load(e, {
                    load: !0
                })
            })
        }),
        a.default.Tweak.watch(c, function(e) {
            var t = [].slice.call(document.querySelectorAll(".slide-in"));
            t.forEach(function(e) {
                e.classList.remove("slide-in")
            }),
            s = p(),
            s.forEach(function(e, t, n) {
                var o = A(e);
                if (o && !e.classList.contains("already-animated"))
                    return void e.classList.add("slide-in")
            }),
            l.default.reloadImages(document.querySelectorAll("img[data-src]"), {
                load: !0
            })
        }),
        a.default.Tweak.watch(["collapse-landscape-spacing", "show-project-captions"], f),
        a.default.Tweak.watch(["tweak-project-slide-transition"], function(e) {
            s = p();
            var t = [].slice.call(document.querySelectorAll(".already-animated"));
            t.forEach(function(e) {
                e.classList.add("slide-in")
            })
        }),
        T(),
        {
            sync: T,
            destroy: S
        }
    }
    var i = n(56)
      , a = o(i)
      , s = n(64)
      , l = o(s);
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = function() {
            var t = r.UserAccounts.isUserAuthenticated() ? ".unauth" : ".auth"
              , n = e.querySelector(t);
            n && e.removeChild(n),
            e.classList.add("loaded")
        }
          , n = function(e) {
            e.preventDefault(),
            r.UserAccounts.openAccountScreen()
        }
          , o = function() {
            e.addEventListener("click", n)
        }
          , i = function() {
            e.removeEventListener("click", n)
        };
        return t(),
        o(),
        {
            destroy: i
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(56);
    t.default = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e, t) {
        var n = e.querySelector(".sqs-video-background")
          , o = (0,
        s.default)(n)
          , r = new i.VideoBackground(o)
          , a = function() {
            r.scaleVideo()
        }
          , l = function() {
            r.destroy(),
            r = new i.VideoBackground(o)
        };
        return "function" == typeof t && t({
            handleResize: a,
            handleTweak: l
        }),
        {
            destroy: function() {
                r.destroy()
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(87)
      , a = n(104)
      , s = o(a);
    t.default = r,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0,
    n(88);
    var o = n(89);
    t.VideoBackground = o.VideoBackground,
    t.VideoFilterPropertyValues = o.VideoFilterPropertyValues,
    t.videoAutoplayTest = o.videoAutoplayTest
}
, function(e, t) {
    !function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            n
        }
        return "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype,
        void (window.CustomEvent = e))
    }()
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0;
    var r = n(90)
      , i = o(r)
      , a = n(103)
      , s = n(93)
      , l = o(s);
    t.VideoBackground = i.default,
    t.VideoFilterPropertyValues = a.filterProperties,
    t.videoAutoplayTest = l.default
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , a = n(91)
      , s = o(a)
      , l = n(93)
      , c = o(l)
      , u = n(95)
      , d = n(102)
      , f = n(97)
      , p = n(103)
      , A = n(96)
      , h = {
        vimeo: {
            api: u.initializeVimeoAPI,
            player: u.initializeVimeoPlayer
        },
        youtube: {
            api: d.initializeYouTubeAPI,
            player: d.initializeYouTubePlayer
        }
    }
      , m = function() {
        function e(t) {
            var n = this
              , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
            r(this, e),
            this.windowContext = o,
            this.events = [],
            this.browserCanAutoPlay = !1,
            this.videoCanAutoPlay = !1,
            this.setInstanceProperties(t),
            (0,
            c.default)().then(function(e) {
                n.logger(e),
                n.browserCanAutoPlay = !0,
                n.initializeVideoAPI()
            }, function(e) {
                n.logger(e),
                n.browserCanAutoPlay = !1,
                n.renderFallbackBehavior()
            }).then(function() {
                n.setDisplayEffects(),
                n.bindUI(),
                n.DEBUG.enabled === !0 && (window.vdbg = n)
            })
        }
        return i(e, [{
            key: "destroy",
            value: function() {
                this.events && this.events.forEach(function(e) {
                    return e.target.removeEventListener(e.type, e.handler, !0)
                }),
                this.events = null,
                this.player && "function" == typeof this.player.destroy && (this.player.iframe.classList.remove("ready"),
                clearTimeout(this.playTimeout),
                this.playTimeout = null,
                this.player.destroy(),
                this.player = {}),
                "number" == typeof this.timer && (clearTimeout(this.timer),
                this.timer = null)
            }
        }, {
            key: "bindUI",
            value: function() {
                var e = this
                  , t = function() {
                    e.windowContext.requestAnimationFrame(function() {
                        e.scaleVideo()
                    })
                };
                this.events.push({
                    target: this.windowContext,
                    type: "resize",
                    handler: t
                }),
                this.windowContext.addEventListener("resize", t, !0)
            }
        }, {
            key: "setInstanceProperties",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e = (0,
                s.default)({}, f.DEFAULT_PROPERTY_VALUES, e),
                1 === e.container.nodeType ? this.container = e.container : "string" == typeof e.container && (this.container = document.querySelector(e.container)),
                this.container ? (this.videoSource = (0,
                A.getVideoSource)(e.url),
                this.videoId = (0,
                A.getVideoID)(e.url, this.videoSource),
                this.customFallbackImage = (0,
                A.validatedImage)(e.customFallbackImage),
                this.filter = e.filter,
                this.filterStrength = e.filterStrength,
                this.fitMode = e.fitMode,
                this.scaleFactor = e.scaleFactor,
                this.playbackSpeed = parseFloat(e.playbackSpeed) < .5 ? 1 : parseFloat(e.playbackSpeed),
                this.timeCode = {
                    start: (0,
                    A.getStartTime)(e.url, this.videoSource) || e.timeCode.start,
                    end: e.timeCode.end
                },
                this.player = {},
                void (this.DEBUG = e.DEBUG)) : (console.error("Container " + e.container + " not found"),
                !1)
            }
        }, {
            key: "setFallbackImage",
            value: function() {
                var e = this.customFallbackImage;
                if (!(!e || this.browserCanAutoPlay && this.videoCanAutoPlay))
                    return e.addEventListener("load", function() {
                        e.classList.add("loaded")
                    }, {
                        once: !0
                    }),
                    this.windowContext.ImageLoader ? void this.windowContext.ImageLoader.load(e, {
                        load: !0
                    }) : void (e.src = e.src)
            }
        }, {
            key: "initializeVideoAPI",
            value: function() {
                var e = this;
                if (this.browserCanAutoPlay && this.videoSource && this.videoId) {
                    this.player.ready = !1;
                    var t = h[this.videoSource].api
                      , n = t(this.windowContext);
                    n.then(function(t) {
                        e.logger(t),
                        e.player.ready = !1,
                        e.initializeVideoPlayer()
                    }).catch(function(t) {
                        e.renderFallbackBehavior(),
                        document.body.classList.add("ready"),
                        e.logger(t)
                    })
                } else
                    this.renderFallbackBehavior(),
                    document.body.classList.add("ready")
            }
        }, {
            key: "initializeVideoPlayer",
            value: function() {
                var e = this;
                if (this.player.ready) {
                    try {
                        this.player.destroy()
                    } catch (e) {}
                    this.player.ready = !1
                }
                var t = h[this.videoSource].player
                  , n = t({
                    instance: this,
                    container: this.container,
                    win: this.windowContext,
                    videoId: this.videoId,
                    startTime: this.timeCode.start,
                    speed: this.playbackSpeed,
                    readyCallback: function(t, n) {
                        e.player.iframe.classList.add("background-video"),
                        e.videoAspectRatio = (0,
                        A.findPlayerAspectRatio)(e.container, e.player, e.videoSource),
                        e.syncPlayer();
                        var o = new CustomEvent("ready");
                        e.container.dispatchEvent(o)
                    },
                    stateChangeCallback: function(t, n) {
                        switch (t) {
                        case "buffering":
                            e.testVideoEmbedAutoplay();
                            break;
                        case "playing":
                            null === e.playTimeout && e.videoCanAutoPlay || e.testVideoEmbedAutoplay(!0)
                        }
                        t && e.logger(t),
                        n && e.logger(n)
                    }
                });
                n.then(function(t) {
                    e.player = t
                }, function(t) {
                    e.logger(t),
                    e.testVideoEmbedAutoplay(!1)
                })
            }
        }, {
            key: "testVideoEmbedAutoplay",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                return void 0 === t && (this.logger("test video autoplay: begin"),
                this.playTimeout && (clearTimeout(this.playTimeout),
                this.playTimeout = null),
                this.playTimeout = setTimeout(function() {
                    e.testVideoEmbedAutoplay(!1)
                }, f.TIMEOUT)),
                t === !0 ? (clearTimeout(this.playTimeout),
                this.logger("test video autoplay: success"),
                this.playTimeout = null,
                this.videoCanAutoPlay = !0,
                this.player.ready = !0,
                this.player.iframe.classList.add("ready"),
                void this.container.classList.remove("mobile")) : t === !1 ? (clearTimeout(this.playTimeout),
                this.logger("test video autoplay: failure"),
                this.playTimeout = null,
                this.videoCanAutoPlay = !1,
                void this.renderFallbackBehavior()) : void 0
            }
        }, {
            key: "renderFallbackBehavior",
            value: function() {
                this.setFallbackImage(),
                this.container.classList.add("mobile"),
                this.logger("added mobile")
            }
        }, {
            key: "syncPlayer",
            value: function() {
                this.setDisplayEffects(),
                this.setSpeed(),
                this.scaleVideo()
            }
        }, {
            key: "scaleVideo",
            value: function(e) {
                this.setFallbackImage();
                var t = this.player.iframe;
                if (t) {
                    var n = e || this.scaleFactor;
                    if ("fill" !== this.fitMode)
                        return t.style.width = "",
                        void (t.style.height = "");
                    var o = t.parentNode.clientWidth
                      , r = t.parentNode.clientHeight
                      , i = o / r
                      , a = 0
                      , s = 0;
                    i > this.videoAspectRatio ? (a = o * n,
                    s = o * n / this.videoAspectRatio) : this.videoAspectRatio > i ? (a = r * n * this.videoAspectRatio,
                    s = r * n) : (a = o * n,
                    s = r * n),
                    t.style.width = a + "px",
                    t.style.height = s + "px",
                    t.style.left = 0 - (a - o) / 2 + "px",
                    t.style.top = 0 - (s - r) / 2 + "px"
                }
            }
        }, {
            key: "setSpeed",
            value: function(e) {
                this.playbackSpeed = parseFloat(this.playbackSpeed),
                this.player.setPlaybackRate && this.player.setPlaybackRate(this.playbackSpeed)
            }
        }, {
            key: "setDisplayEffects",
            value: function() {
                this.setFilter()
            }
        }, {
            key: "setFilter",
            value: function() {
                var e = this.container.style
                  , t = p.filterOptions[this.filter - 1]
                  , n = "";
                "none" !== t && (n = this.getFilterStyle(t, this.filterStrength));
                var o = "blur" === t;
                e.webkitFilter = o ? "" : n,
                e.filter = o ? "" : n,
                this.container.classList.toggle("filter-blur", o),
                Array.prototype.slice.call(this.container.children).forEach(function(e) {
                    e.style.webkitFilter = o ? n : "",
                    e.style.filter = o ? n : ""
                })
            }
        }, {
            key: "getFilterStyle",
            value: function(e, t) {
                return e + "(" + (p.filterProperties[e].modifier(t) + p.filterProperties[e].unit) + ")"
            }
        }, {
            key: "logger",
            value: function(e) {
                this.DEBUG.enabled && this.DEBUG.verbose && this.windowContext.console.log(e)
            }
        }]),
        e
    }();
    t.default = m
}
, function(e, t, n) {
    (function(e, n) {
        function o(e, t, n) {
            switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        function r(e, t) {
            for (var n = -1, o = Array(e); ++n < e; )
                o[n] = t(n);
            return o
        }
        function i(e) {
            return function(t) {
                return e(t)
            }
        }
        function a(e, t) {
            return null == e ? void 0 : e[t]
        }
        function s(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        function l(e, t) {
            return "__proto__" == t ? void 0 : e[t]
        }
        function c(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        function u() {
            this.__data__ = Dt ? Dt(null) : {},
            this.size = 0
        }
        function d(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        function f(e) {
            var t = this.__data__;
            if (Dt) {
                var n = t[e];
                return n === Le ? void 0 : n
            }
            return St.call(t, e) ? t[e] : void 0
        }
        function p(e) {
            var t = this.__data__;
            return Dt ? void 0 !== t[e] : St.call(t, e)
        }
        function A(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = Dt && void 0 === t ? Le : t,
            this
        }
        function h(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        function m() {
            this.__data__ = [],
            this.size = 0
        }
        function y(e) {
            var t = this.__data__
              , n = N(t, e);
            if (n < 0)
                return !1;
            var o = t.length - 1;
            return n == o ? t.pop() : Nt.call(t, n, 1),
            --this.size,
            !0
        }
        function v(e) {
            var t = this.__data__
              , n = N(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        function g(e) {
            return N(this.__data__, e) > -1
        }
        function b(e, t) {
            var n = this.__data__
              , o = N(n, e);
            return o < 0 ? (++this.size,
            n.push([e, t])) : n[o][1] = t,
            this
        }
        function w(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        function E() {
            this.size = 0,
            this.__data__ = {
                hash: new c,
                map: new (Gt || h),
                string: new c
            }
        }
        function T(e) {
            var t = $(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        function S(e) {
            return $(this, e).get(e)
        }
        function x(e) {
            return $(this, e).has(e)
        }
        function _(e, t) {
            var n = $(this, e)
              , o = n.size;
            return n.set(e, t),
            this.size += n.size == o ? 0 : 1,
            this
        }
        function L(e) {
            var t = this.__data__ = new h(e);
            this.size = t.size
        }
        function k() {
            this.__data__ = new h,
            this.size = 0
        }
        function j(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        function C(e) {
            return this.__data__.get(e)
        }
        function I(e) {
            return this.__data__.has(e)
        }
        function P(e, t) {
            var n = this.__data__;
            if (n instanceof h) {
                var o = n.__data__;
                if (!Gt || o.length < _e - 1)
                    return o.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new w(o)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        function R(e, t) {
            var n = Wt(e)
              , o = !n && Zt(e)
              , i = !n && !o && Jt(e)
              , a = !n && !o && !i && Xt(e)
              , s = n || o || i || a
              , l = s ? r(e.length, String) : []
              , c = l.length;
            for (var u in e)
                !t && !St.call(e, u) || s && ("length" == u || i && ("offset" == u || "parent" == u) || a && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || oe(u, c)) || l.push(u);
            return l
        }
        function O(e, t, n) {
            (void 0 === n || pe(e[t], n)) && (void 0 !== n || t in e) || B(e, t, n)
        }
        function M(e, t, n) {
            var o = e[t];
            St.call(e, t) && pe(o, n) && (void 0 !== n || t in e) || B(e, t, n)
        }
        function N(e, t) {
            for (var n = e.length; n--; )
                if (pe(e[n][0], t))
                    return n;
            return -1
        }
        function B(e, t, n) {
            "__proto__" == t && Ft ? Ft(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        function F(e) {
            return null == e ? void 0 === e ? Qe : Ve : Bt && Bt in Object(e) ? te(e) : ce(e)
        }
        function q(e) {
            return ge(e) && F(e) == Ie
        }
        function U(e) {
            if (!ve(e) || ae(e))
                return !1;
            var t = me(e) ? kt : st;
            return t.test(fe(e))
        }
        function V(e) {
            return ge(e) && ye(e.length) && !!ct[F(e)]
        }
        function G(e) {
            if (!ve(e))
                return le(e);
            var t = se(e)
              , n = [];
            for (var o in e)
                ("constructor" != o || !t && St.call(e, o)) && n.push(o);
            return n
        }
        function D(e, t, n, o, r) {
            e !== t && Yt(t, function(i, a) {
                if (ve(i))
                    r || (r = new L),
                    H(e, t, a, n, D, o, r);
                else {
                    var s = o ? o(l(e, a), i, a + "", e, t, r) : void 0;
                    void 0 === s && (s = i),
                    O(e, a, s)
                }
            }, Ee)
        }
        function H(e, t, n, o, r, i, a) {
            var s = l(e, n)
              , c = l(t, n)
              , u = a.get(c);
            if (u)
                return void O(e, n, u);
            var d = i ? i(s, c, n + "", e, t, a) : void 0
              , f = void 0 === d;
            if (f) {
                var p = Wt(c)
                  , A = !p && Jt(c)
                  , h = !p && !A && Xt(c);
                d = c,
                p || A || h ? Wt(s) ? d = s : he(s) ? d = W(s) : A ? (f = !1,
                d = z(c, !0)) : h ? (f = !1,
                d = Z(c, !0)) : d = [] : be(c) || Zt(c) ? (d = s,
                Zt(s) ? d = we(s) : (!ve(s) || o && me(s)) && (d = ne(c))) : f = !1
            }
            f && (a.set(c, d),
            r(d, c, o, i, a),
            a.delete(c)),
            O(e, n, d)
        }
        function Y(e, t) {
            return Qt(ue(e, t, Se), e + "")
        }
        function z(e, t) {
            if (t)
                return e.slice();
            var n = e.length
              , o = Pt ? Pt(n) : new e.constructor(n);
            return e.copy(o),
            o
        }
        function Q(e) {
            var t = new e.constructor(e.byteLength);
            return new It(t).set(new It(e)),
            t
        }
        function Z(e, t) {
            var n = t ? Q(e.buffer) : e.buffer;
            return new e.constructor(n,e.byteOffset,e.length)
        }
        function W(e, t) {
            var n = -1
              , o = e.length;
            for (t || (t = Array(o)); ++n < o; )
                t[n] = e[n];
            return t
        }
        function J(e, t, n, o) {
            var r = !n;
            n || (n = {});
            for (var i = -1, a = t.length; ++i < a; ) {
                var s = t[i]
                  , l = o ? o(n[s], e[s], s, n, e) : void 0;
                void 0 === l && (l = e[s]),
                r ? B(n, s, l) : M(n, s, l)
            }
            return n
        }
        function X(e) {
            return Y(function(t, n) {
                var o = -1
                  , r = n.length
                  , i = r > 1 ? n[r - 1] : void 0
                  , a = r > 2 ? n[2] : void 0;
                for (i = e.length > 3 && "function" == typeof i ? (r--,
                i) : void 0,
                a && re(n[0], n[1], a) && (i = r < 3 ? void 0 : i,
                r = 1),
                t = Object(t); ++o < r; ) {
                    var s = n[o];
                    s && e(t, s, o, i)
                }
                return t
            })
        }
        function K(e) {
            return function(t, n, o) {
                for (var r = -1, i = Object(t), a = o(t), s = a.length; s--; ) {
                    var l = a[e ? s : ++r];
                    if (n(i[l], l, i) === !1)
                        break
                }
                return t
            }
        }
        function $(e, t) {
            var n = e.__data__;
            return ie(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
        function ee(e, t) {
            var n = a(e, t);
            return U(n) ? n : void 0
        }
        function te(e) {
            var t = St.call(e, Bt)
              , n = e[Bt];
            try {
                e[Bt] = void 0;
                var o = !0
            } catch (e) {}
            var r = _t.call(e);
            return o && (t ? e[Bt] = n : delete e[Bt]),
            r
        }
        function ne(e) {
            return "function" != typeof e.constructor || se(e) ? {} : Ht(Rt(e))
        }
        function oe(e, t) {
            var n = typeof e;
            return t = null == t ? Ce : t,
            !!t && ("number" == n || "symbol" != n && lt.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        function re(e, t, n) {
            if (!ve(n))
                return !1;
            var o = typeof t;
            return !!("number" == o ? Ae(n) && oe(t, n.length) : "string" == o && t in n) && pe(n[t], e)
        }
        function ie(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
        function ae(e) {
            return !!xt && xt in e
        }
        function se(e) {
            var t = e && e.constructor
              , n = "function" == typeof t && t.prototype || wt;
            return e === n
        }
        function le(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e))
                    t.push(n);
            return t
        }
        function ce(e) {
            return _t.call(e)
        }
        function ue(e, t, n) {
            return t = Ut(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, i = -1, a = Ut(r.length - t, 0), s = Array(a); ++i < a; )
                    s[i] = r[t + i];
                i = -1;
                for (var l = Array(t + 1); ++i < t; )
                    l[i] = r[i];
                return l[t] = n(s),
                o(e, this, l)
            }
        }
        function de(e) {
            var t = 0
              , n = 0;
            return function() {
                var o = Vt()
                  , r = je - (o - n);
                if (n = o,
                r > 0) {
                    if (++t >= ke)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        function fe(e) {
            if (null != e) {
                try {
                    return Tt.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
        function pe(e, t) {
            return e === t || e !== e && t !== t
        }
        function Ae(e) {
            return null != e && ye(e.length) && !me(e)
        }
        function he(e) {
            return ge(e) && Ae(e)
        }
        function me(e) {
            if (!ve(e))
                return !1;
            var t = F(e);
            return t == Be || t == Fe || t == Re || t == De
        }
        function ye(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Ce
        }
        function ve(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        function ge(e) {
            return null != e && "object" == typeof e
        }
        function be(e) {
            if (!ge(e) || F(e) != Ge)
                return !1;
            var t = Rt(e);
            if (null === t)
                return !0;
            var n = St.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && Tt.call(n) == Lt
        }
        function we(e) {
            return J(e, Ee(e))
        }
        function Ee(e) {
            return Ae(e) ? R(e, !0) : G(e)
        }
        function Te(e) {
            return function() {
                return e
            }
        }
        function Se(e) {
            return e
        }
        function xe() {
            return !1
        }
        var _e = 200
          , Le = "__lodash_hash_undefined__"
          , ke = 800
          , je = 16
          , Ce = 9007199254740991
          , Ie = "[object Arguments]"
          , Pe = "[object Array]"
          , Re = "[object AsyncFunction]"
          , Oe = "[object Boolean]"
          , Me = "[object Date]"
          , Ne = "[object Error]"
          , Be = "[object Function]"
          , Fe = "[object GeneratorFunction]"
          , qe = "[object Map]"
          , Ue = "[object Number]"
          , Ve = "[object Null]"
          , Ge = "[object Object]"
          , De = "[object Proxy]"
          , He = "[object RegExp]"
          , Ye = "[object Set]"
          , ze = "[object String]"
          , Qe = "[object Undefined]"
          , Ze = "[object WeakMap]"
          , We = "[object ArrayBuffer]"
          , Je = "[object DataView]"
          , Xe = "[object Float32Array]"
          , Ke = "[object Float64Array]"
          , $e = "[object Int8Array]"
          , et = "[object Int16Array]"
          , tt = "[object Int32Array]"
          , nt = "[object Uint8Array]"
          , ot = "[object Uint8ClampedArray]"
          , rt = "[object Uint16Array]"
          , it = "[object Uint32Array]"
          , at = /[\\^$.*+?()[\]{}|]/g
          , st = /^\[object .+?Constructor\]$/
          , lt = /^(?:0|[1-9]\d*)$/
          , ct = {};
        ct[Xe] = ct[Ke] = ct[$e] = ct[et] = ct[tt] = ct[nt] = ct[ot] = ct[rt] = ct[it] = !0,
        ct[Ie] = ct[Pe] = ct[We] = ct[Oe] = ct[Je] = ct[Me] = ct[Ne] = ct[Be] = ct[qe] = ct[Ue] = ct[Ge] = ct[He] = ct[Ye] = ct[ze] = ct[Ze] = !1;
        var ut = "object" == typeof e && e && e.Object === Object && e
          , dt = "object" == typeof self && self && self.Object === Object && self
          , ft = ut || dt || Function("return this")()
          , pt = "object" == typeof t && t && !t.nodeType && t
          , At = pt && "object" == typeof n && n && !n.nodeType && n
          , ht = At && At.exports === pt
          , mt = ht && ut.process
          , yt = function() {
            try {
                return mt && mt.binding && mt.binding("util")
            } catch (e) {}
        }()
          , vt = yt && yt.isTypedArray
          , gt = Array.prototype
          , bt = Function.prototype
          , wt = Object.prototype
          , Et = ft["__core-js_shared__"]
          , Tt = bt.toString
          , St = wt.hasOwnProperty
          , xt = function() {
            var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }()
          , _t = wt.toString
          , Lt = Tt.call(Object)
          , kt = RegExp("^" + Tt.call(St).replace(at, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , jt = ht ? ft.Buffer : void 0
          , Ct = ft.Symbol
          , It = ft.Uint8Array
          , Pt = jt ? jt.allocUnsafe : void 0
          , Rt = s(Object.getPrototypeOf, Object)
          , Ot = Object.create
          , Mt = wt.propertyIsEnumerable
          , Nt = gt.splice
          , Bt = Ct ? Ct.toStringTag : void 0
          , Ft = function() {
            try {
                var e = ee(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch (e) {}
        }()
          , qt = jt ? jt.isBuffer : void 0
          , Ut = Math.max
          , Vt = Date.now
          , Gt = ee(ft, "Map")
          , Dt = ee(Object, "create")
          , Ht = function() {
            function e() {}
            return function(t) {
                if (!ve(t))
                    return {};
                if (Ot)
                    return Ot(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0,
                n
            }
        }();
        c.prototype.clear = u,
        c.prototype.delete = d,
        c.prototype.get = f,
        c.prototype.has = p,
        c.prototype.set = A,
        h.prototype.clear = m,
        h.prototype.delete = y,
        h.prototype.get = v,
        h.prototype.has = g,
        h.prototype.set = b,
        w.prototype.clear = E,
        w.prototype.delete = T,
        w.prototype.get = S,
        w.prototype.has = x,
        w.prototype.set = _,
        L.prototype.clear = k,
        L.prototype.delete = j,
        L.prototype.get = C,
        L.prototype.has = I,
        L.prototype.set = P;
        var Yt = K()
          , zt = Ft ? function(e, t) {
            return Ft(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Te(t),
                writable: !0
            })
        }
        : Se
          , Qt = de(zt)
          , Zt = q(function() {
            return arguments
        }()) ? q : function(e) {
            return ge(e) && St.call(e, "callee") && !Mt.call(e, "callee")
        }
          , Wt = Array.isArray
          , Jt = qt || xe
          , Xt = vt ? i(vt) : V
          , Kt = X(function(e, t, n) {
            D(e, t, n)
        });
        n.exports = Kt
    }
    ).call(t, function() {
        return this
    }(), n(92)(e))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children = [],
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = !1
      , r = n(94)
      , i = r.OggVideo
      , a = r.Mp4Video
      , s = function() {
        return new Promise(function(e, t) {
            if ("resolve" === o)
                return void e("resolved for debugging");
            if ("reject" === o)
                return void t("rejected for debugging");
            var n = document.createElement("video");
            n.autoplay = !0,
            n.setAttribute("autoplay", !0),
            n.muted = !0,
            n.setAttribute("muted", !0),
            n.playsinline = !0,
            n.setAttribute("playsinline", !0),
            n.volume = 0,
            n.setAttribute("data-is-playing", "false"),
            n.setAttribute("style", "width: 1px; height: 1px; position: fixed; top: 0; left: 0; z-index: 100;"),
            document.body.appendChild(n);
            var r = null
              , s = function() {
                r && (clearTimeout(r),
                r = null);
                try {
                    document.body.removeChild(n)
                } catch (e) {
                    return
                }
            };
            try {
                if (n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/))
                    n.src = i;
                else {
                    if (!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/))
                        return s(),
                        void t("no autoplay: element does not support mp4 or ogg format");
                    n.src = a
                }
            } catch (e) {
                return s(),
                void t("no autoplay: " + e)
            }
            n.addEventListener("play", function() {
                n.setAttribute("data-is-playing", "true"),
                r = setTimeout(function() {
                    s(),
                    t("no autoplay: unsure")
                }, 3e3)
            }),
            n.addEventListener("canplay", function() {
                return "true" === n.getAttribute("data-is-playing") ? (s(),
                e("autoplay supported"),
                !0) : (s(),
                t("no autoplay: browser does not support autoplay"),
                !1)
            }),
            n.load(),
            n.play()
        }
        )
    };
    t.default = s
}
, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A"
      , o = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";
    t.OggVideo = n,
    t.Mp4Video = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.initializeVimeoPlayer = t.initializeVimeoAPI = void 0;
    var o = n(96)
      , r = n(97)
      , i = void 0
      , a = "*"
      , s = null
      , l = function() {
        return new Promise(function(e, t) {
            e("no api needed")
        }
        )
    }
      , c = function(e, t) {
        var n = {
            method: e
        };
        t && (n.value = t);
        var o = JSON.stringify(n);
        i.ownerDocument.defaultView.eval("(function(playerIframe){ playerIframe.contentWindow.postMessage(" + o + ", " + JSON.stringify(a) + ") })")(i)
    }
      , u = function(e) {
        var t = e.win
          , n = e.instance
          , l = e.container
          , u = e.videoId
          , d = e.startTime
          , f = e.readyCallback
          , p = e.stateChangeCallback;
        return new Promise(function(e, A) {
            var h = n.logger || function() {}
            ;
            i = t.document.createElement("iframe"),
            i.id = "vimeoplayer";
            var m = "&background=1";
            i.src = "//player.vimeo.com/video/" + u + "?api=1" + m;
            var y = (0,
            o.getPlayerElement)(l);
            y.appendChild(i);
            var v = {
                iframe: i,
                setPlaybackRate: function() {}
            };
            e(v);
            var g = function() {
                c("getDuration"),
                c("getVideoHeight"),
                c("getVideoWidth")
            }
              , b = null
              , w = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (e || v.dimensions.width && v.dimensions.height && v.duration) && (e && g(),
                v.dimensions.width = v.dimensions.width || v.iframe.parentNode.offsetWidth,
                v.dimensions.height = v.dimensions.height || v.iframe.parentNode.offsetHeight,
                v.duration = v.duration || 10,
                c("setVolume", "0"),
                c("setLoop", "true"),
                c("seekTo", d),
                c("addEventListener", "playProgress"),
                f(v))
            }
              , E = function() {
                s && (clearTimeout(s),
                s = null),
                v.dimensions || (v.dimensions = {},
                g(),
                p("buffering"),
                b = setTimeout(function() {
                    h.call(n, "retrying"),
                    w(!0)
                }, .75 * r.TIMEOUT))
            }
              , T = function(e) {
                if (!/^https?:\/\/player.vimeo.com/.test(e.origin))
                    return !1;
                a = e.origin;
                var t = e.data;
                switch ("string" == typeof t && (t = JSON.parse(t)),
                t.event) {
                case "ready":
                    E(a);
                    break;
                case "playProgress":
                case "timeupdate":
                    b && (clearTimeout(b),
                    b = null),
                    p("playing", t),
                    c("setVolume", "0"),
                    t.data.percent >= .98 && d > 0 && c("seekTo", d)
                }
                switch (t.method) {
                case "getVideoHeight":
                    h.call(n, t.method),
                    v.dimensions.height = t.value,
                    w();
                    break;
                case "getVideoWidth":
                    h.call(n, t.method),
                    v.dimensions.width = t.value,
                    w();
                    break;
                case "getDuration":
                    h.call(n, t.method),
                    v.duration = t.value,
                    d >= v.duration && (d = 0),
                    w()
                }
            }
              , S = function(e) {
                T(e)
            };
            t.addEventListener("message", S, !1),
            v.destroy = function() {
                t.removeEventListener("message", S),
                v.iframe.parentElement && v.iframe.parentElement.removeChild(v.iframe)
            }
            ,
            s = setTimeout(function() {
                A("Ran out of time")
            }, r.TIMEOUT)
        }
        )
    };
    t.initializeVimeoAPI = l,
    t.initializeVimeoPlayer = u
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.validatedImage = t.getVideoSource = t.getVideoID = t.getStartTime = t.getPlayerElement = t.findPlayerAspectRatio = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , i = n(97)
      , a = n(98)
      , s = o(a)
      , l = n(101)
      , c = o(l)
      , u = function(e) {
        var t = void 0
          , n = void 0;
        for (var o in e) {
            var i = e[o];
            if ("object" === ("undefined" == typeof i ? "undefined" : r(i)) && i.width && i.height) {
                t = i.width,
                n = i.height;
                break
            }
        }
        return {
            w: t,
            h: n
        }
    }
      , d = function(e) {
        var t = void 0
          , n = void 0;
        return e.dimensions ? (t = e.dimensions.width,
        n = e.dimensions.height) : e.iframe && (t = e.iframe.clientWidth,
        n = e.iframe.clientHeight),
        {
            w: t,
            h: n
        }
    }
      , f = {
        youtube: {
            parsePath: "query.t",
            timeRegex: /[hms]/,
            idRegex: i.YOUTUBE_REGEX,
            getDimensions: u
        },
        vimeo: {
            parsePath: null,
            timeRegex: /[#t=s]/,
            idRegex: i.VIMEO_REGEX,
            getDimensions: d
        }
    }
      , p = function(e, t) {
        return f[t].parsePath ? (0,
        c.default)(e, f[t].parsePath) : null
    }
      , A = function(e, t) {
        var n = new s.default(e,!0)
          , o = p(n, t);
        if (o) {
            var r = o.split(f[t].timeRegex).filter(Boolean)
              , i = parseInt(r.pop(), 10) || 0
              , a = 60 * parseInt(r.pop(), 10) || 0
              , l = 3600 * parseInt(r.pop(), 10) || 0;
            return l + a + i
        }
    }
      , h = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.DEFAULT_PROPERTY_VALUES.url
          , t = e.match(i.YOUTUBE_REGEX);
        return t && t[2].length ? "youtube" : (t = e.match(i.VIMEO_REGEX),
        t && t[2].length ? "vimeo" : void console.error("Video source " + e + " does not match supported types"))
    }
      , m = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.DEFAULT_PROPERTY_VALUES.url
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          , n = e.match(f[t].idRegex);
        return n && n[2].length ? n[2] : void console.error("Video id at " + e + " is not valid")
    }
      , y = function(e) {
        if (!e)
            return !1;
        var t = "IMG" === e.nodeName && e;
        return t || console.warn("Element is not a valid image element."),
        t
    }
      , v = function(e, t, n) {
        var o = void 0
          , r = void 0;
        if (t) {
            var i = f[n].getDimensions(t);
            o = i.w,
            r = i.h
        }
        return o && r || (o = e.clientWidth,
        r = e.clientHeight,
        console.warn("No width and height found in " + n + " player " + t + ". Using container dimensions.")),
        parseInt(o, 10) / parseInt(r, 10)
    }
      , g = function(e) {
        var t = e.querySelector("#player");
        return t || (t = e.ownerDocument.createElement("div"),
        t.id = "player",
        e.appendChild(t)),
        t.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0;"),
        t
    };
    t.findPlayerAspectRatio = v,
    t.getPlayerElement = g,
    t.getStartTime = A,
    t.getVideoID = m,
    t.getVideoSource = h,
    t.validatedImage = y
}
, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        enabled: !0,
        verbose: !1
    }
      , o = {
        container: "body",
        url: "https://youtu.be/xkEmYQvJ_68",
        source: "youtube",
        fitMode: "fill",
        scaleFactor: 1,
        playbackSpeed: 1,
        filter: 1,
        filterStrength: 50,
        timeCode: {
            start: 0,
            end: null
        },
        DEBUG: n
    }
      , r = 2500
      , i = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/
      , a = /^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/;
    t.DEBUG = n,
    t.DEFAULT_PROPERTY_VALUES = o,
    t.TIMEOUT = r,
    t.YOUTUBE_REGEX = i,
    t.VIMEO_REGEX = a
}
, function(e, t, n) {
    (function(t) {
        "use strict";
        function o(e) {
            var n;
            n = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
            var o = n.location || {};
            e = e || o;
            var r, i = {}, s = typeof e;
            if ("blob:" === e.protocol)
                i = new a(unescape(e.pathname),{});
            else if ("string" === s) {
                i = new a(e,{});
                for (r in A)
                    delete i[r]
            } else if ("object" === s) {
                for (r in e)
                    r in A || (i[r] = e[r]);
                void 0 === i.slashes && (i.slashes = f.test(e.href))
            }
            return i
        }
        function r(e) {
            var t = d.exec(e);
            return {
                protocol: t[1] ? t[1].toLowerCase() : "",
                slashes: !!t[2],
                rest: t[3]
            }
        }
        function i(e, t) {
            for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), o = n.length, r = n[o - 1], i = !1, a = 0; o--; )
                "." === n[o] ? n.splice(o, 1) : ".." === n[o] ? (n.splice(o, 1),
                a++) : a && (0 === o && (i = !0),
                n.splice(o, 1),
                a--);
            return i && n.unshift(""),
            "." !== r && ".." !== r || n.push(""),
            n.join("/")
        }
        function a(e, t, n) {
            if (!(this instanceof a))
                return new a(e,t,n);
            var s, l, d, f, A, h, m = p.slice(), y = typeof t, v = this, g = 0;
            for ("object" !== y && "string" !== y && (n = t,
            t = null),
            n && "function" != typeof n && (n = u.parse),
            t = o(t),
            l = r(e || ""),
            s = !l.protocol && !l.slashes,
            v.slashes = l.slashes || s && t.slashes,
            v.protocol = l.protocol || t.protocol || "",
            e = l.rest,
            l.slashes || (m[3] = [/(.*)/, "pathname"]); g < m.length; g++)
                f = m[g],
                "function" != typeof f ? (d = f[0],
                h = f[1],
                d !== d ? v[h] = e : "string" == typeof d ? ~(A = e.indexOf(d)) && ("number" == typeof f[2] ? (v[h] = e.slice(0, A),
                e = e.slice(A + f[2])) : (v[h] = e.slice(A),
                e = e.slice(0, A))) : (A = d.exec(e)) && (v[h] = A[1],
                e = e.slice(0, A.index)),
                v[h] = v[h] || (s && f[3] ? t[h] || "" : ""),
                f[4] && (v[h] = v[h].toLowerCase())) : e = f(e);
            n && (v.query = n(v.query)),
            s && t.slashes && "/" !== v.pathname.charAt(0) && ("" !== v.pathname || "" !== t.pathname) && (v.pathname = i(v.pathname, t.pathname)),
            c(v.port, v.protocol) || (v.host = v.hostname,
            v.port = ""),
            v.username = v.password = "",
            v.auth && (f = v.auth.split(":"),
            v.username = f[0] || "",
            v.password = f[1] || ""),
            v.origin = v.protocol && v.host && "file:" !== v.protocol ? v.protocol + "//" + v.host : "null",
            v.href = v.toString()
        }
        function s(e, t, n) {
            var o = this;
            switch (e) {
            case "query":
                "string" == typeof t && t.length && (t = (n || u.parse)(t)),
                o[e] = t;
                break;
            case "port":
                o[e] = t,
                c(t, o.protocol) ? t && (o.host = o.hostname + ":" + t) : (o.host = o.hostname,
                o[e] = "");
                break;
            case "hostname":
                o[e] = t,
                o.port && (t += ":" + o.port),
                o.host = t;
                break;
            case "host":
                o[e] = t,
                /:\d+$/.test(t) ? (t = t.split(":"),
                o.port = t.pop(),
                o.hostname = t.join(":")) : (o.hostname = t,
                o.port = "");
                break;
            case "protocol":
                o.protocol = t.toLowerCase(),
                o.slashes = !n;
                break;
            case "pathname":
            case "hash":
                if (t) {
                    var r = "pathname" === e ? "/" : "#";
                    o[e] = t.charAt(0) !== r ? r + t : t
                } else
                    o[e] = t;
                break;
            default:
                o[e] = t
            }
            for (var i = 0; i < p.length; i++) {
                var a = p[i];
                a[4] && (o[a[1]] = o[a[1]].toLowerCase())
            }
            return o.origin = o.protocol && o.host && "file:" !== o.protocol ? o.protocol + "//" + o.host : "null",
            o.href = o.toString(),
            o
        }
        function l(e) {
            e && "function" == typeof e || (e = u.stringify);
            var t, n = this, o = n.protocol;
            o && ":" !== o.charAt(o.length - 1) && (o += ":");
            var r = o + (n.slashes ? "//" : "");
            return n.username && (r += n.username,
            n.password && (r += ":" + n.password),
            r += "@"),
            r += n.host + n.pathname,
            t = "object" == typeof n.query ? e(n.query) : n.query,
            t && (r += "?" !== t.charAt(0) ? "?" + t : t),
            n.hash && (r += n.hash),
            r
        }
        var c = n(99)
          , u = n(100)
          , d = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
          , f = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
          , p = [["#", "hash"], ["?", "query"], function(e) {
            return e.replace("\\", "/")
        }
        , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
          , A = {
            hash: 1,
            query: 1
        };
        a.prototype = {
            set: s,
            toString: l
        },
        a.extractProtocol = r,
        a.location = o,
        a.qs = u,
        e.exports = a
    }
    ).call(t, function() {
        return this
    }())
}
, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        if (t = t.split(":")[0],
        e = +e,
        !e)
            return !1;
        switch (t) {
        case "http":
        case "ws":
            return 80 !== e;
        case "https":
        case "wss":
            return 443 !== e;
        case "ftp":
            return 21 !== e;
        case "gopher":
            return 70 !== e;
        case "file":
            return !1
        }
        return 0 !== e
    }
}
, function(e, t) {
    "use strict";
    function n(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    function o(e) {
        for (var t, o = /([^=?&]+)=?([^&]*)/g, r = {}; t = o.exec(e); ) {
            var i = n(t[1])
              , a = n(t[2]);
            i in r || (r[i] = a)
        }
        return r
    }
    function r(e, t) {
        t = t || "";
        var n, o, r = [];
        "string" != typeof t && (t = "?");
        for (o in e)
            a.call(e, o) && (n = e[o],
            n || null !== n && n !== i && !isNaN(n) || (n = ""),
            r.push(encodeURIComponent(o) + "=" + encodeURIComponent(n)));
        return r.length ? t + r.join("&") : ""
    }
    var i, a = Object.prototype.hasOwnProperty;
    t.stringify = r,
    t.parse = o
}
, function(e, t) {
    (function(t) {
        function n(e, t) {
            return null == e ? void 0 : e[t]
        }
        function o(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
                try {
                    t = !!(e + "")
                } catch (e) {}
            return t
        }
        function r(e) {
            var t = -1
              , n = e ? e.length : 0;
            for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        function i() {
            this.__data__ = me ? me(null) : {}
        }
        function a(e) {
            return this.has(e) && delete this.__data__[e]
        }
        function s(e) {
            var t = this.__data__;
            if (me) {
                var n = t[e];
                return n === D ? void 0 : n
            }
            return ue.call(t, e) ? t[e] : void 0
        }
        function l(e) {
            var t = this.__data__;
            return me ? void 0 !== t[e] : ue.call(t, e)
        }
        function c(e, t) {
            var n = this.__data__;
            return n[e] = me && void 0 === t ? D : t,
            this
        }
        function u(e) {
            var t = -1
              , n = e ? e.length : 0;
            for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        function d() {
            this.__data__ = []
        }
        function f(e) {
            var t = this.__data__
              , n = E(t, e);
            if (n < 0)
                return !1;
            var o = t.length - 1;
            return n == o ? t.pop() : Ae.call(t, n, 1),
            !0
        }
        function p(e) {
            var t = this.__data__
              , n = E(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        function A(e) {
            return E(this.__data__, e) > -1
        }
        function h(e, t) {
            var n = this.__data__
              , o = E(n, e);
            return o < 0 ? n.push([e, t]) : n[o][1] = t,
            this
        }
        function m(e) {
            var t = -1
              , n = e ? e.length : 0;
            for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        function y() {
            this.__data__ = {
                hash: new r,
                map: new (he || u),
                string: new r
            }
        }
        function v(e) {
            return L(this, e).delete(e)
        }
        function g(e) {
            return L(this, e).get(e)
        }
        function b(e) {
            return L(this, e).has(e)
        }
        function w(e, t) {
            return L(this, e).set(e, t),
            this
        }
        function E(e, t) {
            for (var n = e.length; n--; )
                if (M(e[n][0], t))
                    return n;
            return -1
        }
        function T(e, t) {
            t = j(t, e) ? [t] : _(t);
            for (var n = 0, o = t.length; null != e && n < o; )
                e = e[P(t[n++])];
            return n && n == o ? e : void 0
        }
        function S(e) {
            if (!B(e) || I(e))
                return !1;
            var t = N(e) || o(e) ? fe : ee;
            return t.test(R(e))
        }
        function x(e) {
            if ("string" == typeof e)
                return e;
            if (q(e))
                return ve ? ve.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -H ? "-0" : t
        }
        function _(e) {
            return be(e) ? e : ge(e)
        }
        function L(e, t) {
            var n = e.__data__;
            return C(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
        function k(e, t) {
            var o = n(e, t);
            return S(o) ? o : void 0
        }
        function j(e, t) {
            if (be(e))
                return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !q(e)) || (W.test(e) || !Z.test(e) || null != t && e in Object(t))
        }
        function C(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
        function I(e) {
            return !!le && le in e
        }
        function P(e) {
            if ("string" == typeof e || q(e))
                return e;
            var t = e + "";
            return "0" == t && 1 / e == -H ? "-0" : t
        }
        function R(e) {
            if (null != e) {
                try {
                    return ce.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
        function O(e, t) {
            if ("function" != typeof e || t && "function" != typeof t)
                throw new TypeError(G);
            var n = function() {
                var o = arguments
                  , r = t ? t.apply(this, o) : o[0]
                  , i = n.cache;
                if (i.has(r))
                    return i.get(r);
                var a = e.apply(this, o);
                return n.cache = i.set(r, a),
                a
            };
            return n.cache = new (O.Cache || m),
            n
        }
        function M(e, t) {
            return e === t || e !== e && t !== t
        }
        function N(e) {
            var t = B(e) ? de.call(e) : "";
            return t == Y || t == z
        }
        function B(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        function F(e) {
            return !!e && "object" == typeof e
        }
        function q(e) {
            return "symbol" == typeof e || F(e) && de.call(e) == Q
        }
        function U(e) {
            return null == e ? "" : x(e)
        }
        function V(e, t, n) {
            var o = null == e ? void 0 : T(e, t);
            return void 0 === o ? n : o
        }
        var G = "Expected a function"
          , D = "__lodash_hash_undefined__"
          , H = 1 / 0
          , Y = "[object Function]"
          , z = "[object GeneratorFunction]"
          , Q = "[object Symbol]"
          , Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , W = /^\w*$/
          , J = /^\./
          , X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , K = /[\\^$.*+?()[\]{}|]/g
          , $ = /\\(\\)?/g
          , ee = /^\[object .+?Constructor\]$/
          , te = "object" == typeof t && t && t.Object === Object && t
          , ne = "object" == typeof self && self && self.Object === Object && self
          , oe = te || ne || Function("return this")()
          , re = Array.prototype
          , ie = Function.prototype
          , ae = Object.prototype
          , se = oe["__core-js_shared__"]
          , le = function() {
            var e = /[^.]+$/.exec(se && se.keys && se.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }()
          , ce = ie.toString
          , ue = ae.hasOwnProperty
          , de = ae.toString
          , fe = RegExp("^" + ce.call(ue).replace(K, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , pe = oe.Symbol
          , Ae = re.splice
          , he = k(oe, "Map")
          , me = k(Object, "create")
          , ye = pe ? pe.prototype : void 0
          , ve = ye ? ye.toString : void 0;
        r.prototype.clear = i,
        r.prototype.delete = a,
        r.prototype.get = s,
        r.prototype.has = l,
        r.prototype.set = c,
        u.prototype.clear = d,
        u.prototype.delete = f,
        u.prototype.get = p,
        u.prototype.has = A,
        u.prototype.set = h,
        m.prototype.clear = y,
        m.prototype.delete = v,
        m.prototype.get = g,
        m.prototype.has = b,
        m.prototype.set = w;
        var ge = O(function(e) {
            e = U(e);
            var t = [];
            return J.test(e) && t.push(""),
            e.replace(X, function(e, n, o, r) {
                t.push(o ? r.replace($, "$1") : n || e)
            }),
            t
        });
        O.Cache = m;
        var be = Array.isArray;
        e.exports = V
    }
    ).call(t, function() {
        return this
    }())
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.initializeYouTubePlayer = t.initializeYouTubeAPI = void 0;
    var o = n(96)
      , r = function(e) {
        return new Promise(function(t, n) {
            if (e.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded'))
                return void t("already loaded");
            var o = e.document.createElement("script");
            o.src = "https://www.youtube.com/iframe_api";
            var r = e.document.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(o, r),
            o.addEventListener("load", function(e) {
                e.currentTarget.classList.add("loaded"),
                t("api script tag created and loaded")
            }, !0),
            o.addEventListener("error", function(e) {
                n("Failed to load YouTube script: ", e)
            })
        }
        )
    }
      , i = function(e, t) {
        var n = e.target;
        n.iframe = n.getIframe(),
        n.mute(),
        n.ready = !0,
        n.seekTo(t < n.getDuration() ? t : 0),
        n.playVideo()
    }
      , a = function(e, t, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
          , r = e.target
          , i = (r.getDuration() - t) / o
          , a = function e() {
            r.getCurrentTime() + .1 >= r.getDuration() && (r.pauseVideo(),
            r.seekTo(t),
            r.playVideo()),
            requestAnimationFrame(e)
        };
        return e.data === n.YT.PlayerState.BUFFERING && 1 !== r.getVideoLoadedFraction() && (0 === r.getCurrentTime() || r.getCurrentTime() > i - -.1) ? "buffering" : e.data === n.YT.PlayerState.PLAYING ? (requestAnimationFrame(a),
        "playing") : void (e.data === n.YT.PlayerState.ENDED && r.playVideo())
    }
      , s = function(e) {
        var t = e.container
          , n = e.win
          , r = e.videoId
          , s = e.startTime
          , l = e.speed
          , c = e.readyCallback
          , u = e.stateChangeCallback
          , d = (0,
        o.getPlayerElement)(t)
          , f = function() {
            return new n.YT.Player(d,{
                videoId: r,
                playerVars: {
                    autohide: 1,
                    autoplay: 0,
                    controls: 0,
                    enablejsapi: 1,
                    iv_load_policy: 3,
                    loop: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    showinfo: 0,
                    wmode: "opaque"
                },
                events: {
                    onReady: function(e) {
                        i(e, s),
                        c(e.target)
                    },
                    onStateChange: function(e) {
                        var t = a(e, s, n, l);
                        u(t, t)
                    }
                }
            })
        };
        return new Promise(function(e, t) {
            var o = function t() {
                1 === n.YT.loaded ? e(f()) : setTimeout(t, 100)
            };
            o()
        }
        )
    };
    t.initializeYouTubeAPI = r,
    t.initializeYouTubePlayer = s
}
, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = ["none", "blur", "brightness", "contrast", "invert", "opacity", "saturate", "sepia", "drop-shadow", "grayscale", "hue-rotate"]
      , o = {
        blur: {
            modifier: function(e) {
                return .3 * e
            },
            unit: "px"
        },
        brightness: {
            modifier: function(e) {
                return .009 * e + .1
            },
            unit: ""
        },
        contrast: {
            modifier: function(e) {
                return .4 * e + 80
            },
            unit: "%"
        },
        grayscale: {
            modifier: function(e) {
                return e
            },
            unit: "%"
        },
        "hue-rotate": {
            modifier: function(e) {
                return 3.6 * e
            },
            unit: "deg"
        },
        invert: {
            modifier: function(e) {
                return 1
            },
            unit: ""
        },
        opacity: {
            modifier: function(e) {
                return e
            },
            unit: "%"
        },
        saturate: {
            modifier: function(e) {
                return 2 * e
            },
            unit: "%"
        },
        sepia: {
            modifier: function(e) {
                return e
            },
            unit: "%"
        }
    };
    t.filterOptions = n,
    t.filterProperties = o
}
, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e) {
        var t = {
            container: e
        };
        return e.getAttribute("data-config-url") && (t.url = e.getAttribute("data-config-url")),
        e.getAttribute("data-config-playback-speed") && (t.playbackSpeed = e.getAttribute("data-config-playback-speed")),
        e.getAttribute("data-config-filter") && (t.filter = e.getAttribute("data-config-filter")),
        e.getAttribute("data-config-filter-strength") && (t.filterStrength = e.getAttribute("data-config-filter-strength")),
        t
    };
    t.default = n,
    e.exports = t.default
}
]);
