import { D as re, E as ke, F as Ve, G as $e, b as v, c as b, d as be, g as je, o as Oe, p as Le, q as Pe, r as te, u as Se, w as Ae } from "@nf-internal/chunk-ZBJPMEPH";
import { a as ee, b as E, f as ne } from "@nf-internal/chunk-24OE5QOD";
import { a as V, b as $, d as X } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as On, Observable as Ln } from "rxjs";
import { NotFoundError as Pn, isNotFound as qe } from "@angular/core/primitives/di";
import { setActiveConsumer as N } from "@angular/core/primitives/signals";
var lr = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", f = class extends Error {
    code;
    constructor(n, t) { super(ve(n, t)), this.code = n; }
};
function Sn(e) { return `NG0${Math.abs(e)}`; }
function ve(e, n) { return `${Sn(e)}${n ? ": " + n : ""}`; }
var fr = globalThis;
function d(e) { for (let n in e)
    if (e[n] === d)
        return n; throw Error(""); }
function hr(e, n) { for (let t in n)
    n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]); }
function y(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(y).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function pr(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function gr(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var An = d({ __forward_ref__: d });
function Qe(e) { return e.__forward_ref__ = Qe, e.toString = function () { return y(this()); }, e; }
function m(e) { return kn(e) ? e() : e; }
function kn(e) { return typeof e == "function" && e.hasOwnProperty(An) && e.__forward_ref__ === Qe; }
function vr(e, n, t) { e != n && me(t, e, n, "=="); }
function me(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function F(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
var mr = F;
function yr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function Y(e) { return Vn(e, Ke); }
function Ir(e) { return Y(e) !== null; }
function Vn(e, n) { return e.hasOwnProperty(n) && e[n] || null; }
function $n(e) { let n = e?.[Ke] ?? null; return n || null; }
function He(e) { return e && e.hasOwnProperty(Ge) ? e[Ge] : null; }
var Ke = d({ ɵprov: d }), Ge = d({ ɵinj: d }), g = class {
    _desc;
    ngMetadataName = "InjectionToken";
    ɵprov;
    constructor(n, t) { this._desc = n, this.ɵprov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.ɵprov = F({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Be;
function Er(e) { me("setInjectorProfilerContext should never be called in production mode"); let n = Be; return Be = e, n; }
function Xe(e) { return e && !!e.ɵproviders; }
var qn = d({ ɵcmp: d }), Hn = d({ ɵdir: d }), Gn = d({ ɵpipe: d }), Bn = d({ ɵmod: d }), Ue = d({ ɵfac: d }), Dr = d({ __NG_ELEMENT_ID__: d }), We = d({ __NG_ENV_ID__: d });
function Un(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function wr(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Un(e); }
function Wn(e, n) { throw new f(-200, e); }
function zn(e, n) { throw new f(-201, !1); }
var ie;
function en() { return ie; }
function D(e) { let n = ie; return ie = e, n; }
function Yn(e, n, t) { let r = Y(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; zn(e, "Injector"); }
var Jn = {}, T = Jn, se = "__NG_DI_FLAG__", ue = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = G(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : T, r);
    }
    catch (o) {
        if (ne(o))
            return o;
        throw o;
    } }
}, H = "ngTempTokenPath", Zn = "ngTokenPath", Qn = /\n/gm, Kn = "\u0275", ze = "__source";
function Xn(e, n = 0) { let t = ee(); if (t === void 0)
    throw new f(-203, !1); if (t === null)
    return Yn(e, void 0, n); {
    let r = et(n), o = t.retrieve(e, r);
    if (ne(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function M(e, n = 0) { return (en() || Xn)(m(e), n); }
function Tr(e) { throw new f(202, !1); }
function h(e, n) { return M(e, G(n)); }
function G(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function et(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function ce(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = m(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new f(900, !1);
        let o, i = 0;
        for (let u = 0; u < r.length; u++) {
            let c = r[u], a = nt(c);
            typeof a == "number" ? a === -1 ? o = c.token : i |= a : o = c;
        }
        n.push(M(o, i));
    }
    else
        n.push(M(r));
} return n; }
function Nr(e, n) { return e[se] = n, e.prototype[se] = n, e; }
function nt(e) { return e[se]; }
function tt(e, n, t, r) {
    let o = e[H];
    throw n[ze] && o.unshift(n[ze]), e.message = rt(`
` + e.message, o, t, r), e[Zn] = o, e[H] = null, e;
}
function rt(e, n, t, r = null) {
    e = e && e.charAt(0) === `
` && e.charAt(1) == Kn ? e.slice(2) : e;
    let o = y(n);
    if (Array.isArray(n))
        o = n.map(y).join(" -> ");
    else if (typeof n == "object") {
        let i = [];
        for (let u in n)
            if (n.hasOwnProperty(u)) {
                let c = n[u];
                i.push(u + ":" + (typeof c == "string" ? JSON.stringify(c) : y(c)));
            }
        o = `{${i.join(", ")}}`;
    }
    return `${t}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(Qn, `
  `)}`;
}
function B(e, n) { let t = e.hasOwnProperty(Ue); return t ? e[Ue] : null; }
function Cr(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function xr(e) { return e.flat(Number.POSITIVE_INFINITY); }
function ye(e, n) { e.forEach(t => Array.isArray(t) ? ye(t, n) : n(t)); }
function Mr(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function _r(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function Fr(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function Rr(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function ot(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function br(e, n, t) { let r = nn(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, ot(e, r, n, t)), r; }
function jr(e, n) { let t = nn(e, n); if (t >= 0)
    return e[t | 1]; }
function nn(e, n) { return it(e, n, 1); }
function it(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), u = e[i << t];
    if (n === u)
        return i << t;
    u > n ? o = i : r = i + 1;
} return ~(o << t); }
var Or = {}, U = [], J = new g(""), tn = new g("", -1), rn = new g(""), W = class {
    get(n, t = T) { if (t === T)
        throw new Pn(`NullInjectorError: No provider for ${y(n)}!`); return t; }
};
function st(e) { return e[Bn] || null; }
function Lr(e) { let n = st(e); if (!n)
    throw new f(915, !1); return n; }
function on(e) { return e[qn] || null; }
function ut(e) { return e[Hn] || null; }
function ct(e) { return e[Gn] || null; }
function Pr(e) { let n = on(e) || ut(e) || ct(e); return n !== null && n.standalone; }
function sn(e) { return { ɵproviders: e }; }
function at(e) { return sn([{ provide: J, multi: !0, useValue: e }]); }
function dt(...e) { return { ɵproviders: lt(!0, e), ɵfromNgModule: !0 }; }
function lt(e, ...n) { let t = [], r = new Set, o, i = u => { t.push(u); }; return ye(n, u => { let c = u; ae(c, i, [], r) && (o ||= [], o.push(c)); }), o !== void 0 && un(o, i), t; }
function un(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    Ie(o, i => { n(i, r); });
} }
function ae(e, n, t, r) { if (e = m(e), !e)
    return !1; let o = null, i = He(e), u = !i && on(e); if (!i && !u) {
    let a = e.ngModule;
    if (i = He(a), i)
        o = a;
    else
        return !1;
}
else {
    if (u && !u.standalone)
        return !1;
    o = e;
} let c = r.has(o); if (u) {
    if (c)
        return !1;
    if (r.add(o), u.dependencies) {
        let a = typeof u.dependencies == "function" ? u.dependencies() : u.dependencies;
        for (let l of a)
            ae(l, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !c) {
        r.add(o);
        let l;
        try {
            ye(i.imports, w => { ae(w, n, t, r) && (l ||= [], l.push(w)); });
        }
        finally { }
        l !== void 0 && un(l, n);
    }
    if (!c) {
        let l = B(o) || (() => new o);
        n({ provide: o, useFactory: l, deps: U }, o), n({ provide: rn, useValue: o, multi: !0 }, o), n({ provide: J, useValue: () => M(o), multi: !0 }, o);
    }
    let a = i.providers;
    if (a != null && !c) {
        let l = e;
        Ie(a, w => { n(w, l); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function Ie(e, n) { for (let t of e)
    Xe(t) && (t = t.ɵproviders), Array.isArray(t) ? Ie(t, n) : n(t); }
var ft = d({ provide: String, useValue: d });
function cn(e) { return e !== null && typeof e == "object" && ft in e; }
function ht(e) { return !!(e && e.useExisting); }
function pt(e) { return !!(e && e.useFactory); }
function de(e) { return typeof e == "function"; }
function Sr(e) { return !!e.useClass; }
var gt = new g(""), q = {}, Ye = {}, oe;
function an() { return oe === void 0 && (oe = new W), oe; }
var O = class {
}, z = class extends O {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, fe(n, u => this.processProvider(u)), this.records.set(tn, C(void 0, this)), o.has("environment") && this.records.set(O, C(void 0, this)); let i = this.records.get(gt); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(rn, U, { self: !0 })); }
    retrieve(n, t) { let r = G(t) || 0; try {
        return this.get(n, T, r);
    }
    catch (o) {
        if (qe(o))
            return o;
        throw o;
    } }
    destroy() { j(this), this._destroyed = !0; let n = N(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), N(n);
    } }
    onDestroy(n) { return j(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { j(this); let t = E(this), r = D(void 0), o; try {
        return n();
    }
    finally {
        E(t), D(r);
    } }
    get(n, t = T, r) { if (j(this), n.hasOwnProperty(We))
        return n[We](this); let o = G(r), i, u = E(this), c = D(void 0); try {
        if (!(o & 4)) {
            let l = this.records.get(n);
            if (l === void 0) {
                let w = Dt(n) && Y(n);
                w && this.injectableDefInScope(w) ? l = C(le(n), q) : l = null, this.records.set(n, l);
            }
            if (l != null)
                return this.hydrate(n, l, o);
        }
        let a = o & 2 ? an() : this.parent;
        return t = o & 8 && t === T ? null : t, a.get(n, t);
    }
    catch (a) {
        if (qe(a)) {
            if ((a[H] = a[H] || []).unshift(y(n)), u)
                throw a;
            return tt(a, n, "R3InjectorError", this.source);
        }
        else
            throw a;
    }
    finally {
        D(c), E(u);
    } }
    resolveInjectorInitializers() { let n = N(null), t = E(this), r = D(void 0), o; try {
        let i = this.get(J, U, { self: !0 });
        for (let u of i)
            u();
    }
    finally {
        E(t), D(r), N(n);
    } }
    toString() { let n = [], t = this.records; for (let r of t.keys())
        n.push(y(r)); return `R3Injector[${n.join(", ")}]`; }
    processProvider(n) { n = m(n); let t = de(n) ? n : m(n && n.provide), r = mt(n); if (!de(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = C(void 0, q, !0), o.factory = () => ce(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = N(null); try {
        return t.value === Ye ? Wn(y(n)) : t.value === q && (t.value = Ye, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && Et(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        N(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = m(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function le(e) { let n = Y(e), t = n !== null ? n.factory : B(e); if (t !== null)
    return t; if (e instanceof g)
    throw new f(204, !1); if (e instanceof Function)
    return vt(e); throw new f(204, !1); }
function vt(e) { if (e.length > 0)
    throw new f(204, !1); let t = $n(e); return t !== null ? () => t.factory(e) : () => new e; }
function mt(e) { if (cn(e))
    return C(void 0, e.useValue); {
    let n = yt(e);
    return C(n, q);
} }
function yt(e, n, t) { let r; if (de(e)) {
    let o = m(e);
    return B(o) || le(o);
}
else if (cn(e))
    r = () => m(e.useValue);
else if (pt(e))
    r = () => e.useFactory(...ce(e.deps || []));
else if (ht(e))
    r = (o, i) => M(m(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = m(e && (e.useClass || e.provide));
    if (It(e))
        r = () => new o(...ce(e.deps));
    else
        return B(o) || le(o);
} return r; }
function j(e) { if (e.destroyed)
    throw new f(205, !1); }
function C(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function It(e) { return !!e.deps; }
function Et(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function Dt(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function fe(e, n) { for (let t of e)
    Array.isArray(t) ? fe(t, n) : t && Xe(t) ? fe(t.ɵproviders, n) : n(t); }
function Ar(e, n) { let t; e instanceof z ? (j(e), t = e) : t = new ue(e); let r, o = E(t), i = D(void 0); try {
    return n();
}
finally {
    E(o), D(i);
} }
function wt() { return en() !== void 0 || ee() != null; }
function kr(e) { if (!wt())
    throw new f(-203, !1); }
var Ee = 0, dn = 1, p = 2, he = 3, Vr = 4, Tt = 5, $r = 6, Nt = 7, ln = 8, qr = 9, fn = 10, Hr = 11, Gr = 12, Br = 13, hn = 14, Ur = 15, Wr = 16, Ct = 17, zr = 18, Yr = 19, Jr = 20, x = 21, Zr = 22, Z = 23, xt = 24, Qr = 25, Kr = 26, De = 1, Xr = 6, eo = 7, no = 8, to = 9, ro = 10;
function Mt(e) { return Array.isArray(e) && typeof e[De] == "object"; }
function pn(e) { return Array.isArray(e) && e[De] === !0; }
function oo(e) { return (e.flags & 4) !== 0; }
function io(e) { return e.componentOffset > -1; }
function so(e) { return (e.flags & 1) === 1; }
function uo(e) { return !!e.template; }
function co(e) { return (e[p] & 512) !== 0; }
function ao(e) { return (e.type & 16) === 16; }
function lo(e) { return (e[p] & 32) === 32; }
function gn(e) { return (e[p] & 256) === 256; }
var _t = "svg", Ft = "math";
function we(e) { for (; Array.isArray(e);)
    e = e[Ee]; return e; }
function fo(e) { for (; Array.isArray(e);) {
    if (typeof e[De] == "object")
        return e;
    e = e[Ee];
} return null; }
function ho(e, n) { return we(n[e]); }
function po(e, n) { return we(n[e.index]); }
function go(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? we(n[t]) : null; }
function Rt(e, n) { return e.data[n]; }
function vo(e, n) { return e[n]; }
function mo(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function yo(e, n) { let t = n[e]; return Mt(t) ? t : t[Ee]; }
function Io(e) { return (e[p] & 4) === 4; }
function vn(e) { return (e[p] & 128) === 128; }
function Eo(e) { return pn(e[he]); }
function Do(e, n) { return n == null ? null : e[n]; }
function wo(e) { e[Ct] = 0; }
function To(e) { e[p] & 1024 || (e[p] |= 1024, vn(e) && Q(e)); }
function bt(e, n) { for (; e > 0;)
    n = n[hn], e--; return n; }
function jt(e) { return !!(e[p] & 9216 || e[xt]?.dirty); }
function No(e) { e[fn].changeDetectionScheduler?.notify(8), e[p] & 64 && (e[p] |= 1024), jt(e) && Q(e); }
function Q(e) { e[fn].changeDetectionScheduler?.notify(0); let n = Je(e); for (; n !== null && !(n[p] & 8192 || (n[p] |= 8192, !vn(n)));)
    n = Je(n); }
function Ot(e, n) { if (gn(e))
    throw new f(911, !1); e[x] === null && (e[x] = []), e[x].push(n); }
function Lt(e, n) { if (e[x] === null)
    return; let t = e[x].indexOf(n); t !== -1 && e[x].splice(t, 1); }
function Je(e) { let n = e[he]; return pn(n) ? n[he] : n; }
function Pt(e) { return e[Nt] ??= []; }
function St(e) { return e.cleanup ??= []; }
function Co(e, n, t, r) { let o = Pt(n); o.push(t), e.firstCreatePass && St(e).push(r, o.length - 1); }
var s = { lFrame: In(null), bindingsEnabled: !0, skipHydrationRootTNode: null }, At = function (e) { return e[e.Off = 0] = "Off", e[e.Exhaustive = 1] = "Exhaustive", e[e.OnlyDirtyViews = 2] = "OnlyDirtyViews", e; }(At || {}), kt = 0, pe = !1;
function xo() { return s.lFrame.elementDepthCount; }
function Mo() { s.lFrame.elementDepthCount++; }
function _o() { s.lFrame.elementDepthCount--; }
function Fo() { return s.bindingsEnabled; }
function Ro() { return s.skipHydrationRootTNode !== null; }
function bo(e) { return s.skipHydrationRootTNode === e; }
function jo() { s.bindingsEnabled = !0; }
function Oo(e) { s.skipHydrationRootTNode = e; }
function Lo() { s.bindingsEnabled = !1; }
function Po() { s.skipHydrationRootTNode = null; }
function mn() { return s.lFrame.lView; }
function So() { return s.lFrame.tView; }
function Ao(e) { return s.lFrame.contextLView = e, e[ln]; }
function ko(e) { return s.lFrame.contextLView = null, e; }
function Vt() { let e = $t(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function $t() { return s.lFrame.currentTNode; }
function Vo() { let e = s.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function $o(e, n) { let t = s.lFrame; t.currentTNode = e, t.isParent = n; }
function qo() { return s.lFrame.isParent; }
function Ho() { s.lFrame.isParent = !1; }
function Go() { return s.lFrame.contextLView; }
function Bo(e) { me("Must never be called in production mode"), kt = e; }
function Uo() { return pe; }
function Te(e) { let n = pe; return pe = e, n; }
function Wo() { let e = s.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function zo() { return s.lFrame.bindingIndex; }
function Yo(e) { return s.lFrame.bindingIndex = e; }
function Jo() { return s.lFrame.bindingIndex++; }
function Zo(e) { let n = s.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function Qo() { return s.lFrame.inI18n; }
function Ko(e) { s.lFrame.inI18n = e; }
function Xo(e, n) { let t = s.lFrame; t.bindingIndex = t.bindingRootIndex = e, qt(n); }
function ei() { return s.lFrame.currentDirectiveIndex; }
function qt(e) { s.lFrame.currentDirectiveIndex = e; }
function ni(e) { let n = s.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function ti() { return s.lFrame.currentQueryIndex; }
function ri(e) { s.lFrame.currentQueryIndex = e; }
function Ht(e) { let n = e[dn]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[Tt] : null; }
function oi(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = Ht(i), o === null || (i = i[hn], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = s.lFrame = yn(); return r.currentTNode = n, r.lView = e, !0; }
function ii(e) { let n = yn(), t = e[dn]; s.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function yn() { let e = s.lFrame, n = e === null ? null : e.child; return n === null ? In(e) : n; }
function In(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function En() { let e = s.lFrame; return s.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var si = En;
function ui() { let e = En(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function ci(e) { return (s.lFrame.contextLView = bt(e, s.lFrame.contextLView))[ln]; }
function ai() { return s.lFrame.selectedIndex; }
function di(e) { s.lFrame.selectedIndex = e; }
function li() { let e = s.lFrame; return Rt(e.tView, e.selectedIndex); }
function fi() { s.lFrame.currentNamespace = _t; }
function hi() { s.lFrame.currentNamespace = Ft; }
function pi() { Gt(); }
function Gt() { s.lFrame.currentNamespace = null; }
function gi() { return s.lFrame.currentNamespace; }
var Dn = !0;
function vi() { return Dn; }
function mi(e) { Dn = e; }
function Ze(e, n = null, t = null, r) { let o = Bt(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function Bt(e, n = null, t = null, r, o = new Set) { let i = [t || U, dt(e)]; return r = r || (typeof e == "object" ? void 0 : y(e)), new z(i, n || an(), r || null, o); }
var L = class e {
    static THROW_IF_NOT_FOUND = T;
    static NULL = new W;
    static create(n, t) { if (Array.isArray(n))
        return Ze({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return Ze({ name: r }, n.parent, n.providers, r);
    } }
    static ɵprov = F({ token: e, providedIn: "any", factory: () => M(tn) });
    static __NG_ELEMENT_ID__ = -1;
}, Ut = new g(""), R = (() => { class e {
    static __NG_ELEMENT_ID__ = Wt;
    static __NG_ENV_ID__ = t => t;
} return e; })(), P = class extends R {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return gn(this._lView); }
    onDestroy(n) { let t = this._lView; return Ot(t, n), () => Lt(t, n); }
};
function Wt() { return new P(mn()); }
var _ = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, wn = new g("", { providedIn: "root", factory: () => { let e = h(O), n; return t => { e.destroyed && !n ? setTimeout(() => { throw t; }) : (n ??= e.get(_), n.handleError(t)); }; } }), yi = { provide: J, useValue: () => void h(_), multi: !0 }, zt = new g("", { providedIn: "root", factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = h(Ut).defaultView; if (!e)
        return; let n = h(wn), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), h(R).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function Ii() { return sn([at(() => void h(zt))]); }
function Yt(e) { return typeof e == "function" && e[v] !== void 0; }
function Ei(e) { return null; }
function A(e, n) { let [t, r, o] = Ae(e, n?.equal), i = t, u = i[v]; return i.set = r, i.update = o, i.asReadonly = K.bind(i), i; }
function K() { let e = this[v]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[v] = e, e.readonlyFn = n;
} return e.readonlyFn; }
function Di(e) { return Yt(e) && typeof e.set == "function"; }
var S = class {
}, wi = new g("", { providedIn: "root", factory: () => !1 });
var Ti = new g(""), Ni = new g("");
function Ci(e, n) { if (be() !== null)
    throw new f(-602, !1); }
var Ne = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = Jt;
} return e; })();
function Jt() { return new Ne(mn(), Vt()); }
var Zt = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new On(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new Ln(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static ɵprov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Tn = (() => { class e {
    internalPendingTasks = h(Zt);
    scheduler = h(S);
    errorHandler = h(wn);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); t().catch(this.errorHandler).finally(r); }
    static ɵprov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Nn(...e) { }
var Cn = (() => { class e {
    static ɵprov = F({ token: e, providedIn: "root", factory: () => new ge });
} return e; })(), ge = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
};
var xn = class {
    destroyed = !1;
    listeners = null;
    errorHandler = h(_, { optional: !0 });
    destroyRef = h(R);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new f(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners?.indexOf(n); t !== void 0 && t !== -1 && this.listeners?.splice(t, 1); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(ve(953, !1));
        return;
    } if (this.listeners === null)
        return; let t = b(null); try {
        for (let r of this.listeners)
            try {
                r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        b(t);
    } }
};
function Pi(e) { return e.destroyRef; }
function I(e) { return $e(e); }
function k(e, n) { return Se(e, n?.equal); }
var Ce = class {
    [v];
    constructor(n) { this[v] = n; }
    destroy() { this[v].destroy(); }
};
function Qt(e, n) { let t = n?.injector ?? h(L), r = n?.manualCleanup !== !0 ? t.get(R) : null, o, i = t.get(Ne, null, { optional: !0 }), u = t.get(S); return i !== null ? (o = er(i.view, u, e), r instanceof P && r._lView === i.view && (r = null)) : o = nr(e, t.get(Cn), u), o.injector = t, r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())), new Ce(o); }
var Rn = $(V({}, je), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, dirty: !0, hasRun: !1, cleanupFns: void 0, zone: null, kind: "effect", onDestroyFn: Nn, run() { if (this.dirty = !1, this.hasRun && !Pe(this))
        return; this.hasRun = !0; let e = r => (this.cleanupFns ??= []).push(r), n = Oe(this), t = Te(!1); try {
        this.maybeCleanup(), this.fn(e);
    }
    finally {
        Te(t), Le(this, n);
    } }, maybeCleanup() { if (!this.cleanupFns?.length)
        return; let e = b(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], b(e);
    } } }), Kt = $(V({}, Rn), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { te(this), this.onDestroyFn(), this.maybeCleanup(), this.scheduler.remove(this); } }), Xt = $(V({}, Rn), { consumerMarkedDirty() { this.view[p] |= 8192, Q(this.view), this.notifier.notify(13); }, destroy() { te(this), this.onDestroyFn(), this.maybeCleanup(), this.view[Z]?.delete(this); } });
function er(e, n, t) { let r = Object.create(Xt); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = t, e[Z] ??= new Set, e[Z].add(r), r.consumerMarkedDirty(r), r; }
function nr(e, n, t) { let r = Object.create(Kt); return r.fn = e, r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
var tr = e => e;
function Mn(e, n) { if (typeof e == "function") {
    let t = re(e, tr, n?.equal);
    return _n(t);
}
else {
    let t = re(e.source, e.computation, e.equal);
    return _n(t);
} }
function _n(e) { let n = e[v], t = e; return t.set = r => ke(n, r), t.update = r => Ve(n, r), t.asReadonly = K.bind(e), t; }
var bn = !0;
function Si(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new Me(t, or(e), e.defaultValue, e.equal ? rr(e.equal) : void 0, e.injector ?? h(L), bn); }
var xe = class {
    value;
    constructor(n) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = K; }
    isError = k(() => this.status() === "error");
    update(n) { this.set(n(I(this.value))); }
    isLoading = k(() => this.status() === "loading" || this.status() === "reloading");
    hasValue() { return this.isError() ? !1 : this.value() !== void 0; }
    asReadonly() { return this; }
}, Me = class extends xe {
    loaderFn;
    equal;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    constructor(n, t, r, o, i, u = bn) { super(k(() => { let c = this.state().stream?.(); if (!c || this.state().status === "loading" && this.error())
        return r; if (!_e(c)) {
        if (u)
            throw new Fe(this.error());
        return r;
    } return c.value; }, { equal: o })), this.loaderFn = t, this.equal = o, this.extRequest = Mn({ source: n, computation: c => ({ request: c, reload: 0 }) }), this.state = Mn({ source: this.extRequest, computation: (c, a) => { let l = c.request === void 0 ? "idle" : "loading"; return a ? { extRequest: c, status: l, previousStatus: Fn(a.value), stream: a.value.extRequest.request === c.request ? a.value.stream : void 0 } : { extRequest: c, status: l, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = Qt(this.loadEffect.bind(this), { injector: i, manualCleanup: !0 }), this.pendingTasks = i.get(Tn), this.unregisterOnDestroy = i.get(R).onDestroy(() => this.destroy()); }
    status = k(() => Fn(this.state()));
    error = k(() => { let n = this.state().stream?.(); return n && !_e(n) ? n.error : void 0; });
    set(n) { if (this.destroyed)
        return; let t = I(this.error), r = I(this.state); if (!t) {
        let o = I(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: A({ value: n }) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = I(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return X(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = I(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let u = yield I(() => this.loaderFn({ params: n.request, request: n.request, abortSignal: i, previous: { status: r } }));
        if (i.aborted || I(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: u });
    }
    catch (u) {
        if (i.aborted || I(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: A({ error: jn(u) }) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { I(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function rr(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function or(e) { return ir(e) ? e.stream : n => X(null, null, function* () { try {
    return A({ value: yield e.loader(n) });
}
catch (t) {
    return A({ error: jn(t) });
} }); }
function ir(e) { return !!e.stream; }
function Fn(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return _e(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function _e(e) { return e.error === void 0; }
function jn(e) { return e instanceof Error ? e : new Re(e); }
var Fe = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, Re = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
export { lr as a, f as b, ve as c, fr as d, d as e, hr as f, y as g, pr as h, gr as i, Qe as j, m as k, kn as l, vr as m, F as n, mr as o, yr as p, Y as q, Ir as r, Ke as s, Ge as t, g as u, Er as v, Xe as w, qn as x, Hn as y, Gn as z, Bn as A, Ue as B, Dr as C, Un as D, wr as E, Wn as F, zn as G, D as H, Yn as I, M as J, Tr as K, h as L, G as M, Nr as N, B as O, Cr as P, xr as Q, Mr as R, _r as S, Fr as T, Rr as U, ot as V, br as W, jr as X, nn as Y, Or as Z, U as _, J as $, tn as aa, st as ba, Lr as ca, on as da, ut as ea, ct as fa, Pr as ga, sn as ha, at as ia, dt as ja, lt as ka, de as la, Sr as ma, gt as na, an as oa, O as pa, z as qa, yt as ra, Ar as sa, wt as ta, kr as ua, Ee as va, dn as wa, p as xa, he as ya, Vr as za, Tt as Aa, $r as Ba, Nt as Ca, ln as Da, qr as Ea, fn as Fa, Hr as Ga, Gr as Ha, Br as Ia, hn as Ja, Ur as Ka, Wr as La, Ct as Ma, zr as Na, Yr as Oa, Jr as Pa, x as Qa, Zr as Ra, Z as Sa, xt as Ta, Qr as Ua, Kr as Va, Xr as Wa, eo as Xa, no as Ya, to as Za, ro as _a, Mt as $a, pn as ab, oo as bb, io as cb, so as db, uo as eb, co as fb, ao as gb, lo as hb, gn as ib, _t as jb, Ft as kb, we as lb, fo as mb, ho as nb, po as ob, go as pb, Rt as qb, vo as rb, mo as sb, yo as tb, Io as ub, vn as vb, Eo as wb, Do as xb, wo as yb, To as zb, bt as Ab, jt as Bb, No as Cb, Q as Db, Ot as Eb, Lt as Fb, Je as Gb, Pt as Hb, St as Ib, Co as Jb, At as Kb, xo as Lb, Mo as Mb, _o as Nb, Fo as Ob, Ro as Pb, bo as Qb, jo as Rb, Oo as Sb, Lo as Tb, Po as Ub, mn as Vb, So as Wb, Ao as Xb, ko as Yb, Vt as Zb, $t as _b, Vo as $b, $o as ac, qo as bc, Ho as cc, Go as dc, Bo as ec, Uo as fc, Te as gc, Wo as hc, zo as ic, Yo as jc, Jo as kc, Zo as lc, Qo as mc, Ko as nc, Xo as oc, ei as pc, qt as qc, ni as rc, ti as sc, ri as tc, oi as uc, ii as vc, si as wc, ui as xc, ci as yc, ai as zc, di as Ac, li as Bc, fi as Cc, hi as Dc, pi as Ec, gi as Fc, vi as Gc, mi as Hc, Ze as Ic, Bt as Jc, L as Kc, Ut as Lc, R as Mc, _ as Nc, wn as Oc, yi as Pc, Ii as Qc, Yt as Rc, Ei as Sc, A as Tc, K as Uc, Di as Vc, S as Wc, wi as Xc, Ti as Yc, Ni as Zc, Ci as _c, Ne as $c, Zt as ad, Tn as bd, Nn as cd, Cn as dd, xn as ed, Pi as fd, I as gd, k as hd, Qt as id, Mn as jd, Si as kd, Me as ld, jn as md }; /*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/resource.mjs:
(**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 *)
*/
