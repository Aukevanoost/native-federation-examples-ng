import { a as Jr, c as xf, d as Of, e as Pf, g as Lf, h as Ff, i as jf, j as Hf, l as Vf, o as ec } from "@nf-internal/chunk-5HKSTRV7";
import { a as tC } from "@nf-internal/chunk-VLUWNQRU";
import { $ as ut, $a as Z, $b as an, $c as Kr, A as da, Aa as re, Ab as vf, Ac as yt, B as lt, Ba as ee, Bb as yo, Bc as Ne, C as St, Ca as kt, Cb as Vr, Cc as Ua, D as C, Da as L, Db as Br, Dc as Ga, E as ve, Ea as z, Eb as $r, Ec as Wa, F as of, Fa as ze, Fb as Ma, Fc as qa, G as fa, Ga as T, Gb as Pt, Gc as Eo, H as Rt, Ha as ft, Hb as If, Hc as Ae, I as rf, Ia as uo, Ib as Ef, Ic as $D, J as Se, Ja as fo, Jb as Df, Jc as Rf, K as Rr, Ka as Q, Kb as Ur, Kc as Ce, L as D, La as pt, Lb as Cf, Lc as UD, M as pa, Ma as on, Mb as Tf, Mc as cn, N as tn, Na as je, Nb as _a, Nc as Zr, O as kr, Oa as rn, Ob as Gr, Oc as vt, P as sf, Pa as Ia, Pb as vo, Pc as za, Q as Re, Qa as Ea, Qb as Na, Qc as GD, R as ha, Ra as jr, Rb as wa, Rc as kf, S as so, Sa as po, Sb as Mf, Sc as WD, T as ao, Ta as _e, Tb as ba, Tc as Qa, U as ga, Ua as At, Ub as Sa, Uc as Af, V as af, Va as I, Vb as g, Vc as Za, W as co, Wa as Ie, Wb as _, Wc as Qe, X as Ar, Xa as ke, Xb as Ra, Xc as ln, Y as xr, Ya as ho, Yb as ka, Yc as Ya, Z as Te, Za as xt, Zb as M, Zc as Yr, _ as O, _a as B, _b as _f, _c as qD, a as Mr, aa as jD, ab as Y, ac as Ve, ad as Lt, b as N, ba as nn, bb as Da, bc as Aa, bd as Ka, c as ef, ca as Or, cb as Ee, cc as xa, cd as Do, d as ye, da as V, db as sn, dc as Oa, dd as Ja, e as ca, ea as Me, eb as ge, ec as Pa, ed as Xa, f as tf, fa as Fe, fb as He, fc as La, fd as zD, g as Xt, ga as lo, gb as Ca, gc as Fa, gd as QD, h as _r, ha as qe, hb as df, hc as ce, hd as ZD, i as AD, ia as HD, ib as ht, ic as Be, id as YD, j as la, ja as VD, jb as ff, jc as ja, jd as KD, k as H, ka as ma, kb as pf, kc as fe, kd as JD, l as Nr, la as Pr, lb as k, lc as $e, ld as XD, m as nf, ma as cf, mb as go, mc as Nf, md as eC, n as F, na as lf, nb as Ot, nc as Ha, o as xD, oa as Lr, ob as De, oc as wf, p as io, pa as dt, pb as hf, pc as bf, q as OD, qa as ya, qb as gt, qc as Va, r as PD, ra as uf, rb as mt, rc as Wr, s as wr, sa as Fr, sb as mo, sc as qr, t as ua, ta as va, tb as de, tc as Io, u as w, ua as BD, ub as gf, uc as Ba, v as LD, va as P, vb as mf, vc as zr, w as FD, wa as y, wb as yf, wc as $a, x as en, xa as b, xb as ie, xc as Qr, y as br, ya as W, yb as Ta, yc as Sf, z as Sr, za as oe, zb as Hr, zc as te } from "@nf-internal/chunk-5DSTNYXD";
import { C as aa, b as ct, c as S, d as Kd, g as ra, h as Dr, o as ro, p as Cr, q as Tr, r as ia, u as Jd, v as Xd, z as sa } from "@nf-internal/chunk-ZBJPMEPH";
import { b as kD } from "@nf-internal/chunk-24OE5QOD";
import { a as G, b as Le, d as oo } from "@nf-internal/chunk-4CLCTAJ7";
import { Subject as wl, Subscription as bl } from "rxjs";
import { setActiveConsumer as Bf } from "@angular/core/primitives/signals";
import { map as nC } from "rxjs/operators";
function Ge(e) { return { toString: e }.toString(); }
var fn = "__annotations__", pn = "__parameters__", hn = "__prop__metadata__";
function Yo(e, t, n, o, r) { return Ge(() => { let i = Sl(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(fn) ? u[fn] : Object.defineProperty(u, fn, { value: [] })[fn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function Sl(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Fn(e, t, n) { return Ge(() => { let o = Sl(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(pn) ? c[pn] : Object.defineProperty(c, pn, { value: [] })[pn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function tt(e, t, n, o) { return Ge(() => { let r = Sl(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(hn) ? d[hn] : Object.defineProperty(d, hn, { value: {} })[hn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Jp = tn(Fn("Inject", e => ({ token: e })), -1), Gi = tn(Fn("Optional"), 8), Xp = tn(Fn("Self"), 2), Wi = tn(Fn("SkipSelf"), 4), eh = tn(Fn("Host"), 1);
function J(e) { let t = ye.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var $f = { \u0275\u0275defineInjectable: F, \u0275\u0275defineInjector: io, \u0275\u0275inject: Se, \u0275\u0275invalidFactoryDep: Rr, resolveForwardRef: H }, th = Function;
function To(e) { return typeof e == "function"; }
var oC = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, rC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, iC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, sC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function aC(e) { return oC.test(e) || sC.test(e) || rC.test(e) && !iC.test(e); }
var yi = class {
    _reflect;
    constructor(t) { this._reflect = t || ye.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = ao(n.length) : o = ao(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (aC(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && tc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(pn) && t[pn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : ao(t.length); }
    parameters(t) { if (!To(t))
        return []; let n = Xr(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? tc(t.decorators) : t.hasOwnProperty(fn) ? t[fn] : null; }
    annotations(t) { if (!To(t))
        return []; let n = Xr(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = tc(o[i]); }), r;
    } return t.hasOwnProperty(hn) ? t[hn] : null; }
    propMetadata(t) { if (!To(t))
        return {}; let n = Xr(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return To(t) ? this._ownPropMetadata(t, Xr(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof th && n in t.prototype; }
};
function tc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function Xr(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var vi = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
};
function nh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var oh = (() => { let e = () => rh; return e.ngInherit = !0, e; })();
function rh(e) { return e.type.prototype.ngOnChanges && (e.setInput = lC), cC; }
function cC() { let e = sh(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Te)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function lC(e, t, n, o, r) { let i = this.declaredInputs[o], s = sh(e) || uC(e, { previous: Te, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new vi(l && l.currentValue, n, c === Te), nh(e, t, r, n); }
var ih = "__ngSimpleChanges__";
function sh(e) { return e[ih] || null; }
function uC(e, t) { return e[ih] = t; }
var Uf = [];
var A = function (e, t = null, n) { for (let o = 0; o < Uf.length; o++) {
    let r = Uf[o];
    r(e, t, n);
} };
function dC(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = rh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function ah(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function ai(e, t, n) { ch(e, t, 3, n); }
function ci(e, t, n, o) { (e[b] & 3) === n && ch(e, t, n, o); }
function nc(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function ch(e, t, n, o) { let r = o !== void 0 ? e[on] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[on] += 65536), (a < i || i == -1) && (fC(e, n, t, c), e[on] = (e[on] & 4294901760) + c + 2), c++; }
function Gf(e, t) { A(4, e, t); let n = S(null); try {
    t.call(e);
}
finally {
    S(n), A(5, e, t);
} }
function fC(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[on] >> 16 && (e[b] & 3) === t && (e[b] += 16384, Gf(a, i)) : Gf(a, i); }
var In = -1, $t = class {
    factory;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o) { this.factory = t, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function qi(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function lh(e) { return !!(e.type & 128); }
function pC(e) { return (e.flags & 8) !== 0; }
function hC(e) { return (e.flags & 16) !== 0; }
function gC(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        mC(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function uh(e) { return e === 3 || e === 4 || e === 6; }
function mC(e) { return e.charCodeAt(0) === 64; }
function _n(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Wf(e, n, r, null, t[++o]) : Wf(e, n, r, null, null));
        }
    } return e; }
function Wf(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function dh(e) { return e !== In; }
function Ii(e) { return e & 32767; }
function yC(e) { return e >> 16; }
function Ei(e, t) { let n = yC(e), o = t; for (; n > 0;)
    o = o[fo], n--; return o; }
var wc = !0;
function Di(e) { let t = wc; return wc = e, t; }
var vC = 256, fh = vC - 1, ph = 5, IC = 0, Ue = {};
function EC(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(St) && (o = n[St]), o == null && (o = n[St] = IC++); let r = o & fh, i = 1 << r; t.data[e + (r >> ph)] |= i; }
function Ci(e, t) { let n = hh(e, t); if (n !== -1)
    return n; let o = t[y]; o.firstCreatePass && (e.injectorIndex = t.length, oc(o.data, e), oc(t, null), oc(o.blueprint, null)); let r = Rl(e, t), i = e.injectorIndex; if (dh(r)) {
    let s = Ii(r), a = Ei(r, t), c = a[y].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function oc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function hh(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Rl(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Eh(r), o === null)
        return In;
    if (n++, r = r[fo], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return In; }
function bc(e, t, n) { EC(e, t, n); }
function DC(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (uh(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function gh(e, t, n) { if (n & 8 || e !== void 0)
    return e; fa(t, "NodeInjector"); }
function mh(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[z], i = Rt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : rf(t, o, n & 8);
    }
    finally {
        Rt(i);
    }
} return gh(o, t, n); }
function yh(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = _C(e, t, n, o, Ue);
        if (s !== Ue)
            return s;
    }
    let i = vh(e, t, n, o, Ue);
    if (i !== Ue)
        return i;
} return mh(t, n, o, r); }
function vh(e, t, n, o, r) { let i = TC(n); if (typeof i == "function") {
    if (!Ba(t, e, o))
        return o & 1 ? gh(r, n, o) : mh(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            fa(n);
        else
            return s;
    }
    finally {
        $a();
    }
}
else if (typeof i == "number") {
    let s = null, a = hh(e, t), c = In, l = o & 1 ? t[Q][re] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? Rl(e, t) : t[a + 8], c === In || !zf(o, !1) ? a = -1 : (s = t[y], a = Ii(c), t = Ei(c, t))); a !== -1;) {
        let u = t[y];
        if (qf(i, a, u.data)) {
            let d = CC(a, t, n, s, o, l);
            if (d !== Ue)
                return d;
        }
        c = t[a + 8], c !== In && zf(o, t[y].data[a + 8] === l) && qf(i, a, t) ? (s = u, a = Ii(c), t = Ei(c, t)) : a = -1;
    }
} return r; }
function CC(e, t, n, o, r, i) { let s = t[y], a = s.data[e + 8], c = o == null ? Ee(a) && wc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = li(a, s, n, c, l); return u !== null ? Oo(t, s, u, a, r) : Ue; }
function li(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && ge(p) && p.type === n)
        return c;
} return null; }
function Oo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof $t) {
    let a = i;
    a.resolving && of(ve(s[n]));
    let c = Di(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Rt(a.injectImpl) : null, f = Ba(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && dC(n, s[n], t);
    }
    finally {
        d !== null && Rt(d), Di(c), a.resolving = !1, $a();
    }
} return i; }
function TC(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(St) ? e[St] : void 0; return typeof t == "number" ? t >= 0 ? t & fh : MC : t; }
function qf(e, t, n) { let o = 1 << e; return !!(n[t + (e >> ph)] & o); }
function zf(e, t) { return !(e & 2) && !(e & 1 && t); }
var Et = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return yh(this._tNode, this._lView, t, pa(o), n); }
};
function MC() { return new Et(M(), g()); }
function Ih(e) { return Ge(() => { let t = e.prototype.constructor, n = t[lt] || Sc(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[lt] || Sc(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Sc(e) { return Nr(e) ? () => { let t = Sc(H(e)); return t && t(); } : kr(e); }
function _C(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !He(s);) {
    let a = vh(i, s, n, o | 2, Ue);
    if (a !== Ue)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Ia];
        if (l) {
            let u = l.get(n, Ue, o);
            if (u !== Ue)
                return u;
        }
        c = Eh(s), s = s[fo];
    }
    i = c;
} return r; }
function Eh(e) { let t = e[y], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[re] : null; }
function zi(e) { return DC(M(), e); }
var Dh = Fn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => zi(e) })), Qf = null;
function kl() { return Qf = Qf || new yi; }
function Qi(e) { return Ch(kl().parameters(e)); }
function Ch(e) { return e.map(t => NC(t)); }
function NC(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Gi || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Wi || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Xp || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof eh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Jp)
            t.token = o.token;
        else if (o instanceof Dh) {
            if (o.attributeName === void 0)
                throw new N(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function wC(e, t) { let n = null, o = null; e.hasOwnProperty(wr) || Object.defineProperty(e, wr, { get: () => (n === null && (n = J({ usage: 0, kind: "injectable", type: e }).compileInjectable($f, `ng:///${e.name}/\u0275prov.js`, kC(e, t))), n) }), e.hasOwnProperty(lt) || Object.defineProperty(e, lt, { get: () => { if (o === null) {
        let r = J({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory($f, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: Qi(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var bC = ca({ provide: String, useValue: ca });
function Zf(e) { return e.useClass !== void 0; }
function SC(e) { return bC in e; }
function Yf(e) { return e.useFactory !== void 0; }
function RC(e) { return e.useExisting !== void 0; }
function kC(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Zf(n) || Yf(n)) && n.deps !== void 0 && (o.deps = Ch(n.deps)), Zf(n) ? o.useClass = n.useClass : SC(n) ? o.useValue = n.useValue : Yf(n) ? o.useFactory = n.useFactory : RC(n) && (o.useExisting = n.useExisting), o; }
var AC = Yo("Injectable", void 0, void 0, void 0, (e, t) => wC(e, t));
function xC() { return jn(M(), g()); }
function jn(e, t) { return new Ko(De(e, t)); }
var Ko = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = xC;
} return e; })();
function Th(e) { return e instanceof Ko ? e.nativeElement : e; }
function OC() { return this._results[Symbol.iterator](); }
var Ti = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new wl; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Re(t); (this._changesDetected = !sf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = OC;
}, Hn = "ngSkipHydration", PC = "ngskiphydration";
function Al(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === PC)
        return !0;
} return !1; }
function Mh(e) { return e.hasAttribute(Hn); }
function Po(e) { return (e.flags & 128) === 128; }
function Vn(e) { if (Po(e))
    return !0; let t = e.parent; for (; t;) {
    if (Po(e) || Al(t))
        return !0;
    t = t.parent;
} return !1; }
function _h(e) { return Po(e) || Al(e) || Vn(e); }
var Zi = function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; }(Zi || {}), Yi = new Map, LC = 0;
function FC() { return LC++; }
function jC(e) { Yi.set(e[rn], e); }
function Nh(e) { return Yi.get(e) || null; }
function Rc(e) { Yi.delete(e[rn]); }
function HC() { return Yi; }
var Mi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Nh(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function me(e) { let t = ui(e); if (t) {
    if (Z(t)) {
        let n = t, o, r, i;
        if (bh(e)) {
            if (o = $C(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (VC(e)) {
            if (o = UC(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Sh(o, n);
        }
        else if (o = Jf(n, e), o == -1)
            return null;
        let s = k(n[o]), a = ui(s), c = a && !Array.isArray(a) ? a : Kf(n, o, s);
        if (r && c.component === void 0 && (c.component = r, we(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                we(i[l], c);
        }
        we(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = ui(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Jf(i, n);
            if (s >= 0) {
                let a = k(i[s]), c = Kf(i, s, a);
                we(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Kf(e, t, n) { return new Mi(e[rn], t, n); }
var kc = "__ngContext__";
function we(e, t) { Z(t) ? (e[kc] = t[rn], jC(t)) : e[kc] = t; }
function ui(e) { let t = e[kc]; return typeof t == "number" ? Nh(t) : t || null; }
function wh(e) { let t = ui(e); return t ? Z(t) ? t : t.lView : null; }
function bh(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function VC(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Jf(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (k(e[o]) === t)
        return o; return -1; }
function BC(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function $C(e, t) { let n = e[y].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (de(r, e)[L] === t)
            return r;
    }
else if (de(I, e)[L] === t)
    return I; return -1; }
function UC(e, t) { let n = e[y].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = BC(n);
} return -1; }
function Sh(e, t) { let n = t[y].data[e]; if (n.directiveStart === 0)
    return O; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    bh(i) || o.push(i);
} return o; }
function GC(e, t) { let n = t[y].data[e]; return Ee(n) ? t[n.directiveStart + n.componentOffset] : null; }
function WC(e, t) { let n = e[y].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Rh(e) { return Ah(e[ft]); }
function kh(e) { return Ah(e[oe]); }
function Ah(e) { for (; e !== null && !Y(e);)
    e = e[oe]; return e; }
function Xf(e) { let t = me(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = GC(t.nodeIndex, n);
} return t.component; }
function qC(e) { nT(e); let t = me(e), n = t ? t.lView : null; return n === null ? null : n[L]; }
function zC(e) { let t = me(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[y].type === 2 && (o = Pt(n));)
    n = o; return He(n) ? null : n[L]; }
function QC(e) { let t = me(e), n = t ? t.lView : null; if (n === null)
    return Ce.NULL; let o = n[y].data[t.nodeIndex]; return new Et(o, n); }
function ZC(e) { let t = me(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    tT(l) && (l = l.type), i.push(l);
} return i; }
function YC(e) { if (e instanceof Text)
    return []; let t = me(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Sh(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var xh = function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; }(xh || {}), Oh = function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; }(Oh || {}), Ph = function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; }(Ph || {});
function KC(e) { let t = me(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = WC(n, t.nodeIndex);
} return t.localRefs || {}; }
function JC(e) { return me(e).native; }
function XC(e) { let t = me(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[y], r = n[kt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = k(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort(eT), s; }
function eT(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function tT(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function nT(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Ac;
function oT(e) { Ac = e; }
function Mt() { if (Ac !== void 0)
    return Ac; if (typeof document < "u")
    return document; throw new N(210, !1); }
var _t = new w("", { providedIn: "root", factory: () => rT }), rT = "ng", xl = new w(""), iT = new w("", { providedIn: "platform", factory: () => "unknown" }), sT = new w(""), aT = new w(""), cT = new w("", { providedIn: "root", factory: () => Mt().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Lh = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, lT = new w("", { providedIn: "root", factory: () => Lh });
function uT(e) { return e; }
function dT() { let e = new Zt; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = fT(Mt(), D(_t))), e; }
var Zt = (() => { class e {
    static \u0275prov = F({ token: e, providedIn: "root", factory: dT });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function fT(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Ol = "h", Pl = "b", Fh = "f", jh = "n", Jo = "e", Ki = "t", Bn = "c", Xo = "x", Je = "r", Ji = "i", er = "n", $n = "d", Xi = "l", es = "di", tr = "s", Ll = "p", ts = "t", Yt = new w(""), Hh = !1, Fl = new w("", { providedIn: "root", factory: () => Hh }), jl = new w(""), ns = new w(""), Hl = !1, Vl = new w(""), nr = new w("", { providedIn: "root", factory: () => new Map });
var _i = { passive: !0, capture: !0 }, rc = new WeakMap, ic = new WeakMap, gn = new WeakMap, Ni = ["click", "keydown"], wi = ["mouseenter", "mouseover", "focusin"], un = null, sc = 0, Lo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Vh(e, t) { let n = ic.get(e); if (!n) {
    n = new Lo, ic.set(e, n);
    for (let o of Ni)
        e.addEventListener(o, n.listener, _i);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    ic.delete(e);
    for (let i of Ni)
        e.removeEventListener(i, r, _i);
} }; }
function Bh(e, t) { let n = rc.get(e); if (!n) {
    n = new Lo, rc.set(e, n);
    for (let o of wi)
        e.addEventListener(o, n.listener, _i);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of wi)
        e.removeEventListener(i, r, _i);
    rc.delete(e);
} }; }
function pT() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && gn.has(t.target) && gn.get(t.target).listener(); }); }
function hT(e, t, n) { let o = gn.get(e); return un = un || n(), o || (o = new Lo, un.observe(e), gn.set(e, o), sc++), o.callbacks.add(t), () => { gn.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (un?.unobserve(e), gn.delete(e), sc--), sc === 0 && (un?.disconnect(), un = null)); }; }
var Un = "ngb";
function Bl(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(Jr.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Jr.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Un, i); }
var $h = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, $l = (e, t) => { let n = e, o = n.getAttribute(Un) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function gT(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(Ul);
} }
var Ul = e => { e.removeAttribute(Jr.JSACTION), e.removeAttribute(Un), e.__jsaction_fns = void 0; }, Gl = new w("", { providedIn: "root", factory: () => ({}) });
function Wl(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var xc = new Map;
function Uh(e, t) { return xc.set(e, t), () => xc.delete(e); }
var ep = !1, Gh = (e, t, n, o) => { };
function mT(e, t, n, o) { Gh(e, t, n, o); }
function Wh() { ep || (Gh = (e, t, n, o) => { let r = e[z].get(_t); xc.get(r)?.(t, n, o); }, ep = !0); }
var nt = new w(""), qh = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(nr);
    contract = D(Gl);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { gT(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = F({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Gn(e) { return (e.flags & 32) === 32; }
var yT = "__nghData__", os = yT, vT = "__nghDeferData__", rs = vT, En = "ngh", zh = "nghm", Qh = () => null;
function IT(e, t, n = !1) { let o = e.getAttribute(En); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Zt, null, { optional: !0 });
    u !== null && (c = u.get(os, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, is(l, 0, e.nextSibling)), a ? e.setAttribute(En, a) : e.removeAttribute(En), l; }
function Zh() { Qh = IT; }
function Yh(e, t, n = !1) { return Qh(e, t, n); }
function ql(e) { let t = e._lView; return t[y].type === 2 ? null : (He(t) && (t = t[I]), t); }
function ET(e) { return e.textContent?.replace(/\s/gm, ""); }
function DT(e) { let t = Mt(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = ET(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Kh = function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; }(Kh || {}), CT = "__ngDebugHydrationInfo__";
function TT(e) { return e[CT] ?? null; }
function is(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Oc(e, t) { return e.segmentHeads?.[t] ?? null; }
function ss(e) { return e.get(Vl, !1, { optional: !0 }); }
function Jh(e, t) { let n = e.data, o = n[Jo]?.[t] ?? null; return o === null && n[Bn]?.[t] && (o = zl(e, t)), o; }
function MT(e, t) { return e.data[Jo]?.[t] !== void 0; }
function Xh(e, t) { return e.data[Bn]?.[t] ?? null; }
function zl(e, t) { let n = Xh(e, t) ?? [], o = 0; for (let r of n)
    o += r[Je] * (r[Xo] ?? 1); return o; }
function eg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[$n];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function as(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[$n];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!eg(e)?.has(t); }
function cs(e, t) { let n = e[ee]; return n !== null && !vo() && !Gn(t) && !as(n, t.index - I); }
function Ql(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function tg(e) { let t = []; return e !== null && (e.has(4) && t.push(...wi), e.has(3) && t.push(...Ni)), t; }
function _T(e, t) { let n = t.get(nt), r = t.get(Zt).get(rs, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][Ll];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function NT(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [wi.join(":;"), Ni.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function ng(e, t) { let n = NT(e), o = t.get(nr); for (let r of n)
    $l(r, o); }
var og = () => ({});
function wT(e) { let t = e.get(Zt, null, { optional: !0 }); return t !== null ? t.get(rs, {}) : {}; }
function rg() { og = wT; }
function bT(e) { return og(e); }
function ST(e) { return typeof e == "object" && e.trigger === 5; }
function RT(e) { return e[ts]?.find(n => ST(n))?.delay ?? null; }
function ac(e, t) { return e[ts]?.includes(t) ?? !1; }
function kT(e) { return { data: e, hydrate: { idle: ac(e, 0), immediate: ac(e, 1), timer: RT(e), viewport: ac(e, 2) } }; }
function ig(e) { let t = bT(e), n = new Map; for (let o in t)
    n.set(o, kT(t[o])); return n; }
function cc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === zh; }
function tp(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function sg(e) { for (let o of e.body.childNodes)
    if (cc(o))
        return; let t = tp(e.body.previousSibling); if (cc(t))
    return; let n = tp(e.head.lastChild); if (!cc(n))
    throw new N(-507, !1); }
function ag(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = S(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Io(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        S(o);
    }
} }
function Pc(e, t, n) { Io(0); let o = S(null); try {
    t(e, n);
}
finally {
    S(o);
} }
function Zl(e, t, n) { if (Da(t)) {
    let o = S(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        S(o);
    }
} }
var Xe = function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; }(Xe || {}), ei;
function cg() { if (ei === void 0 && (ei = null, ye.trustedTypes))
    try {
        ei = ye.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ei; }
function Wn(e) { return cg()?.createHTML(e) || e; }
function AT(e) { return cg()?.createScriptURL(e) || e; }
var ti;
function Yl() { if (ti === void 0 && (ti = null, ye.trustedTypes))
    try {
        ti = ye.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ti; }
function np(e) { return Yl()?.createHTML(e) || e; }
function op(e) { return Yl()?.createScript(e) || e; }
function rp(e) { return Yl()?.createScriptURL(e) || e; }
var et = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Mr})`; }
}, Lc = class extends et {
    getTypeName() { return "HTML"; }
}, Fc = class extends et {
    getTypeName() { return "Style"; }
}, jc = class extends et {
    getTypeName() { return "Script"; }
}, Hc = class extends et {
    getTypeName() { return "URL"; }
}, Vc = class extends et {
    getTypeName() { return "ResourceURL"; }
};
function ot(e) { return e instanceof et ? e.changingThisBreaksApplicationSecurity : e; }
function qn(e, t) { let n = lg(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Mr})`);
} return n === t; }
function lg(e) { return e instanceof et && e.getTypeName() || null; }
function xT(e) { return new Lc(e); }
function OT(e) { return new Fc(e); }
function PT(e) { return new jc(e); }
function LT(e) { return new Hc(e); }
function FT(e) { return new Vc(e); }
function ug(e) { let t = new $c(e); return jT() ? new Bc(t) : t; }
var Bc = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Wn(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, $c = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Wn(t), n; }
};
function jT() { try {
    return !!new window.DOMParser().parseFromString(Wn(""), "text/html");
}
catch {
    return !1;
} }
var HT = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function ls(e) { return e = String(e), e.match(HT) ? e : "unsafe:" + e; }
function rt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function or(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var dg = rt("area,br,col,hr,img,wbr"), fg = rt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), pg = rt("rp,rt"), VT = or(pg, fg), BT = or(fg, rt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), $T = or(pg, rt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Uc = or(dg, BT, $T, VT), Kl = rt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), UT = rt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), GT = rt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), hg = or(Kl, UT, GT), WT = rt("script,style,template"), Gc = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = QT(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = zT(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = ip(t).toLowerCase(); if (!Uc.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !WT.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!hg.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Kl[a] && (c = ls(c)), this.buf.push(" ", s, '="', sp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = ip(t).toLowerCase(); Uc.hasOwnProperty(n) && !dg.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(sp(t)); }
};
function qT(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function zT(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw gg(t); return t; }
function QT(e) { let t = e.firstChild; if (t && qT(e, t))
    throw gg(t); return t; }
function ip(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function gg(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var ZT = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, YT = /([^\#-~ |!])/g;
function sp(e) { return e.replace(/&/g, "&amp;").replace(ZT, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(YT, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var ni;
function mg(e, t) { let n = null; try {
    ni = ni || ug(e);
    let o = t ? String(t) : "";
    n = ni.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = ni.getInertBodyElement(o);
    } while (o !== i);
    let a = new Gc().sanitizeChildren(Wc(n) || n);
    return Wn(a);
}
finally {
    if (n) {
        let o = Wc(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Wc(e) { return "content" in e && KT(e) ? e.content : null; }
function KT(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var Kt = function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; }(Kt || {});
function yg(e) { let t = rr(); return t ? np(t.sanitize(Kt.HTML, e) || "") : qn(e, "HTML") ? np(ot(e)) : mg(Mt(), C(e)); }
function vg(e) { let t = rr(); return t ? t.sanitize(Kt.STYLE, e) || "" : qn(e, "Style") ? ot(e) : C(e); }
function Jl(e) { let t = rr(); return t ? t.sanitize(Kt.URL, e) || "" : qn(e, "URL") ? ot(e) : ls(C(e)); }
function Xl(e) { let t = rr(); if (t)
    return rp(t.sanitize(Kt.RESOURCE_URL, e) || ""); if (qn(e, "ResourceURL"))
    return rp(ot(e)); throw new N(904, !1); }
function Ig(e) { let t = rr(); if (t)
    return op(t.sanitize(Kt.SCRIPT, e) || ""); if (qn(e, "Script"))
    return op(ot(e)); throw new N(905, !1); }
function Eg(e) { return Wn(e[0]); }
function Dg(e) { return AT(e[0]); }
function JT(e, t) { return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? Xl : Jl; }
function Cg(e, t, n) { return JT(t, n)(e); }
function rr() { let e = g(); return e && e[ze].sanitizer; }
var XT = /^>|^->|<!--|-->|--!>|<!-$/g, eM = /(<|>)/g, tM = "\u200B$1\u200B";
function nM(e) { return e.replace(XT, t => t.replace(eM, tM)); }
function oM() { return qe([]); }
var rM = { name: "custom-elements" }, iM = { name: "no-errors-schema" }, Tg = !1;
function sM(e) { Tg = e; }
function aM() { return Tg; }
var Mg = !1;
function cM(e) { Mg = e; }
function lM() { return Mg; }
function _g(e) { return e.ownerDocument.defaultView; }
function Ng(e) { return e.ownerDocument; }
function eu(e) { return e.ownerDocument.body; }
var uM = "\uFFFD";
function mn(e) { return e instanceof Function ? e() : e; }
function dM(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var wg = "ng-template";
function fM(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && dM(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (tu(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function tu(e) { return e.type === 4 && e.value !== wg; }
function pM(e, t, n) { let o = e.type === 4 && !n ? wg : e.value; return t === o; }
function hM(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? yM(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !xe(o) && !xe(c))
            return !1;
        if (s && xe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !pM(e, c, n) || c === "" && t.length === 1) {
                if (xe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !fM(e, r, c, n)) {
                if (xe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = gM(c, r, tu(e), n);
            if (u === -1) {
                if (xe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (xe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return xe(o) || s; }
function xe(e) { return (e & 1) === 0; }
function gM(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return vM(t, e); }
function bg(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (hM(e, t[o], n))
        return !0; return !1; }
function mM(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function yM(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (uh(n))
        return t;
} return e.length; }
function vM(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function IM(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function ap(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function EM(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !xe(s) && (t += ap(i, r), r = ""), o = s, i = i || !xe(o);
    n++;
} return r !== "" && (t += ap(i, r)), t; }
function DM(e) { return e.map(EM).join(","); }
function CM(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!xe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var x = {};
function nu(e, t) { return e.createText(t); }
function Sg(e, t, n) { e.setValue(t, n); }
function ou(e, t) { return e.createComment(nM(t)); }
function us(e, t, n) { return e.createElement(t, n); }
function Ut(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function Rg(e, t, n) { e.appendChild(t, n); }
function cp(e, t, n, o, r) { o !== null ? Ut(e, t, n, o, r) : Rg(e, t, n); }
function ir(e, t, n) { e.removeChild(null, t, n); }
function kg(e) { e.textContent = ""; }
function TM(e, t, n) { e.setAttribute(t, "style", n); }
function MM(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Ag(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && gC(e, t, o), r !== null && MM(e, t, r), i !== null && TM(e, t, i); }
function ru(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = _M(d, f), h = typeof l == "function" ? l() : l; return p[y] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function _M(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : x); return n; }
function xg(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = ru(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function ds(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[P] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), Ta(d), d[W] = d[fo] = e, d[L] = n, d[ze] = s || e && e[ze], d[T] = a || e && e[T], d[z] = c || e && e[z] || null, d[re] = i, d[rn] = FC(), d[ee] = u, d[Ia] = l, d[Q] = t.type == 2 ? e[Q] : d, d; }
function NM(e, t, n) { let o = De(t, e), r = xg(n), i = e[ze].rendererFactory, s = su(e, ds(e, r, null, iu(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function iu(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function sr(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function su(e, t) { return e[ft] ? e[uo][oe] = t : e[ft] = t, e[uo] = t, t; }
function Og(e = 1) { Pg(_(), g(), te() + e, !1); }
function Pg(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && ai(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && ci(t, i, 0, n);
    } yt(n); }
var fs = function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; }(fs || {});
function Fo(e, t, n, o) { let r = S(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & fs.SignalBased) !== 0 && (c = t[i][ct]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : nh(t, c, i, o);
}
finally {
    S(r);
} }
var bi = function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; }(bi || {}), qc;
function au(e, t) { return qc(e, t); }
function wM(e) { qc === void 0 && (qc = e()); }
function yn(e, t, n, o, r) { if (o != null) {
    let i, s = !1;
    Y(o) ? i = o : Z(o) && (s = !0, o = o[P]);
    let a = k(o);
    e === 0 && n !== null ? r == null ? Rg(t, n, a) : Ut(t, n, a, r || null, !0) : e === 1 && n !== null ? Ut(t, n, a, r || null, !0) : e === 2 ? ir(t, a, s) : e === 3 && t.destroyNode(a), i != null && xM(t, e, i, n, r);
} }
function Lg(e, t) { Fg(e, t), t[P] = null, t[re] = null; }
function bM(e, t, n, o, r, i) { o[P] = r, o[re] = t, ps(e, o, n, 1, r, i); }
function Fg(e, t) { t[ze].changeDetectionScheduler?.notify(9), ps(e, t, t[T], 2, null, null); }
function SM(e) { let t = e[ft]; if (!t)
    return lc(e[y], e); for (; t;) {
    let n = null;
    if (Z(t))
        n = t[ft];
    else {
        let o = t[B];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[oe] && t !== e;)
            Z(t) && lc(t[y], t), t = t[W];
        t === null && (t = e), Z(t) && lc(t[y], t), n = t && t[oe];
    }
    t = n;
} }
function cu(e, t) { let n = e[xt], o = n.indexOf(t); n.splice(o, 1); }
function ar(e, t) { if (ht(t))
    return; let n = t[T]; n.destroyNode && ps(e, t, n, 3, null, null), SM(t); }
function lc(e, t) { if (ht(t))
    return; let n = S(null); try {
    t[b] &= -129, t[b] |= 256, t[_e] && ia(t[_e]), kM(e, t), RM(e, t), t[y].type === 1 && t[T].destroy();
    let o = t[pt];
    if (o !== null && Y(t[W])) {
        o !== t[W] && cu(o, t);
        let r = t[je];
        r !== null && r.detachView(e);
    }
    Rc(t);
}
finally {
    S(n);
} }
function RM(e, t) { let n = e.cleanup, o = t[kt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[kt] = null); let r = t[Ea]; if (r !== null) {
    t[Ea] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[po]; if (i !== null) {
    t[po] = null;
    for (let s of i)
        s.destroy();
} }
function kM(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof $t)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    A(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        A(5, a, c);
                    }
                }
            else {
                A(4, r, i);
                try {
                    i.call(r);
                }
                finally {
                    A(5, r, i);
                }
            }
        }
    } }
function lu(e, t, n) { return jg(e, t.parent, n); }
function jg(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[P]; if (Ee(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Xe.None || r === Xe.Emulated)
        return null;
} return De(o, n); }
function Hg(e, t, n) { return Bg(e, t, n); }
function Vg(e, t, n) { return e.type & 40 ? De(e, n) : null; }
var Bg = Vg, zc;
function $g(e, t) { Bg = e, zc = t; }
function uu(e, t, n, o) { let r = lu(e, o, t), i = t[T], s = o.parent || t[re], a = Hg(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            cp(i, r, n[c], a, !1);
    else
        cp(i, r, n, a, !1); zc !== void 0 && zc(i, o, t, n, r); }
function Bt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return De(t, e);
    if (n & 4)
        return Qc(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Bt(e, o);
        {
            let r = e[t.index];
            return Y(r) ? Qc(-1, r) : k(r);
        }
    }
    else {
        if (n & 128)
            return Bt(e, t.next);
        if (n & 32)
            return au(t, e)() || k(e[t.index]);
        {
            let o = Ug(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Pt(e[Q]);
                return Bt(r, o);
            }
            else
                return Bt(e, t.next);
        }
    }
} return null; }
function Ug(e, t) { if (t !== null) {
    let o = e[Q][re], r = t.projection;
    return o.projection[r];
} return null; }
function Qc(e, t) { let n = B + e + 1; if (n < t.length) {
    let o = t[n], r = o[y].firstChild;
    if (r !== null)
        return Bt(o, r);
} return t[ke]; }
function du(e, t, n, o, r, i, s) { for (; n != null;) {
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let a = o[n.index], c = n.type;
    if (s && t === 0 && (a && we(k(a), o), n.flags |= 2), !Gn(n))
        if (c & 8)
            du(e, t, n.child, o, r, i, !1), yn(t, e, r, a, i);
        else if (c & 32) {
            let l = au(n, o), u;
            for (; u = l();)
                yn(t, e, r, u, i);
            yn(t, e, r, a, i);
        }
        else
            c & 16 ? Gg(e, t, o, n, r, i) : yn(t, e, r, a, i);
    n = s ? n.projectionNext : n.next;
} }
function ps(e, t, n, o, r, i) { du(n, o, e.firstChild, t, r, i, !1); }
function AM(e, t, n) { let o = t[T], r = lu(e, n, t), i = n.parent || t[re], s = Hg(i, n, t); Gg(o, 0, t, n, r, s); }
function Gg(e, t, n, o, r, i) { let s = n[Q], c = s[re].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        yn(t, e, r, u, i);
    }
else {
    let l = c, u = s[W];
    Po(o) && (l.flags |= 128), du(e, t, l, u, r, i, !0);
} }
function xM(e, t, n, o, r) { let i = n[ke], s = k(n); i !== s && yn(t, e, o, i, r); for (let a = B; a < n.length; a++) {
    let c = n[a];
    ps(c[y], c, e, t, o, i);
} }
function OM(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : bi.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= bi.Important), e.setStyle(n, o, r, i));
} }
function Wg(e, t, n, o, r) { let i = te(), s = o & 2; try {
    yt(-1), s && t.length > I && Pg(e, t, I, !1), A(s ? 2 : 0, r, n), n(o, r);
}
finally {
    yt(i), A(s ? 3 : 1, r, n);
} }
function hs(e, t, n) { VM(e, t, n), (n.flags & 64) === 64 && BM(e, t, n); }
function zn(e, t, n = De) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function PM(e, t, n, o) { let i = o.get(Fl, Hh) || n === Xe.ShadowDom, s = e.selectRootElement(t, i); return LM(s), s; }
function LM(e) { qg(e); }
var qg = () => null;
function FM(e) { Mh(e) ? kg(e) : DT(e); }
function zg() { qg = FM; }
function jM(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function fu(e, t, n, o, r, i) { let s = t[y]; if (yu(e, s, t, n, o)) {
    Ee(e) && HM(t, e.index);
    return;
} e.type & 3 && (n = jM(n)), pu(e, t, n, o, r, i); }
function pu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = De(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function HM(e, t) { let n = de(t, e); n[b] & 16 || (n[b] |= 64); }
function VM(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; Ee(n) && NM(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Ci(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Oo(t, e, s, n);
    if (we(c, t), i !== null && GM(t, s - o, c, a, n, i), ge(a)) {
        let l = de(n.index, t);
        l[L] = Oo(t, e, s, n);
    }
} }
function BM(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = bf(); try {
    yt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        Va(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && $M(c, l);
    }
}
finally {
    yt(-1), Va(s);
} }
function $M(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function hu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        bg(t, i.selectors, !1) && (o ??= [], ge(i) ? o.unshift(i) : o.push(i));
    } return o; }
function UM(e, t, n, o, r, i) { let s = De(e, t); gu(t[T], s, i, e.value, n, o, r); }
function gu(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? C(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function GM(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Fo(o, n, c, l);
    } }
function gs(e, t, n, o, r) { let i = I + n, s = t[y], a = r(s, t, e, o, n); t[i] = a, Ve(e, !0); let c = e.type === 2; return c ? (Ag(t[T], a, e), (Cf() === 0 || sn(e)) && we(a, t), Tf()) : we(a, t), Eo() && (!c || !Gn(e)) && uu(s, t, a, e), e; }
function ms(e) { let t = e; return Aa() ? xa() : (t = t.parent, Ve(t, !1)), t; }
function Qg(e, t, n) { return (e === null || ge(e)) && (n = go(n[t.index])), n[T]; }
function mu(e, t) { let n = e[z]; if (!n)
    return; n.get(vt, null)?.(t); }
function yu(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Fo(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Fo(u, l, o, r), a = !0;
    } return a; }
function WM(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            Fo(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Fo(o, n[s], r, i), l = !0), l; }
function qM(e, t) { let n = de(t, e), o = n[y]; zM(o, n); let r = n[P]; r !== null && n[ee] === null && (n[ee] = Yh(r, n[z])), A(18), ys(o, n, n[L]), A(19, n[L]); }
function zM(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function ys(e, t, n) { zr(t); try {
    let o = e.viewQuery;
    o !== null && Pc(1, o, n);
    let r = e.template;
    r !== null && Wg(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[je]?.finishViewCreation(e), e.staticContentQueries && ag(e, t), e.staticViewQueries && Pc(2, e.viewQuery, n);
    let i = e.components;
    i !== null && QM(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, Qr();
} }
function QM(e, t) { for (let n = 0; n < t.length; n++)
    qM(e, t[n]); }
function Qn(e, t, n, o) { let r = S(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = ds(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[pt] = l;
    let u = e[je];
    return u !== null && (c[je] = u.createEmbeddedView(i)), ys(i, c, n), c;
}
finally {
    S(r);
} }
function Gt(e, t) { return !t || t.firstChild === null || Po(e); }
var lp = !1, ZM = new w("");
function Nn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(k(i)), Y(i) && vs(i, o);
    let s = n.type;
    if (s & 8)
        Nn(e, t, n.child, o);
    else if (s & 32) {
        let a = au(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Ug(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Pt(t[Q]);
            Nn(c[y], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function vs(e, t) { for (let n = B; n < e.length; n++) {
    let o = e[n], r = o[y].firstChild;
    r !== null && Nn(o[y], o, r, t);
} e[ke] !== e[P] && t.push(e[ke]); }
function Zg(e) { if (e[At] !== null) {
    for (let t of e[At])
        t.impl.addSequence(t);
    e[At].length = 0;
} }
var Yg = [];
function YM(e) { return e[_e] ?? KM(e); }
function KM(e) { let t = Yg.pop() ?? Object.create(XM); return t.lView = e, t; }
function JM(e) { e.lView[_e] !== e && (e.lView = null, Yg.push(e)); }
var XM = Le(G({}, ra), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { Br(e.lView); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function e_(e) { let t = e[_e] ?? Object.create(t_); return t.lView = e, t; }
var t_ = Le(G({}, ra), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Pt(e.lView); for (; t && !Kg(t[y]);)
        t = Pt(t); t && Hr(t); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function Kg(e) { return e.type !== 2; }
function Jg(e) { if (e[po] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[po])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var n_ = 100;
function vu(e, t = 0) { let o = e[ze].rendererFactory, r = !1; r || o.begin?.(); try {
    o_(e, t);
}
finally {
    r || o.end?.();
} }
function o_(e, t) { let n = La(); try {
    Fa(!0), Zc(e, t);
    let o = 0;
    for (; yo(e);) {
        if (o === n_)
            throw new N(103, !1);
        o++, Zc(e, 1);
    }
}
finally {
    Fa(n);
} }
function Xg(e, t) { Pa(t ? Ur.Exhaustive : Ur.OnlyDirtyViews); try {
    vu(e);
}
finally {
    Pa(Ur.Off);
} }
function em(e, t, n, o) { if (ht(t))
    return; let r = t[b], i = !1, s = !1; zr(t); let a = !0, c = null, l = null; i || (Kg(e) ? (l = YM(t), c = ro(l)) : Kd() === null ? (a = !1, l = e_(t), c = ro(l)) : t[_e] && (ia(t[_e]), t[_e] = null)); try {
    Ta(t), ja(e.bindingStartIndex), n !== null && Wg(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && ai(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && ci(t, p, 0, null), nc(t, 0);
        }
    if (s || r_(t), Jg(t), tm(t, 0), e.contentQueries !== null && ag(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && ai(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && ci(t, p, 1), nc(t, 1);
        }
    s_(e, t);
    let d = e.components;
    d !== null && om(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Pc(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && ai(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && ci(t, p, 2), nc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[jr]) {
        for (let p of t[jr])
            p();
        t[jr] = null;
    }
    i || (Zg(t), t[b] &= -73);
}
catch (u) {
    throw i || Br(t), u;
}
finally {
    l !== null && (Cr(l, c), a && JM(l)), Qr();
} }
function tm(e, t) { for (let n = Rh(e); n !== null; n = kh(n))
    for (let o = B; o < n.length; o++) {
        let r = n[o];
        nm(r, t);
    } }
function r_(e) { for (let t = Rh(e); t !== null; t = kh(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[xt];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        Hr(r);
    }
} }
function i_(e, t, n) { A(18); let o = de(t, e); nm(o, n), A(19, o[L]); }
function nm(e, t) { mf(e) && Zc(e, t); }
function Zc(e, t) { let o = e[y], r = e[b], i = e[_e], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Tr(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    em(o, e, o.template, e[L]);
else if (r & 8192) {
    let a = S(null);
    try {
        Jg(e), tm(e, 1);
        let c = o.components;
        c !== null && om(e, c, 1), Zg(e);
    }
    finally {
        S(a);
    }
} }
function om(e, t, n) { for (let o = 0; o < t.length; o++)
    i_(e, t[o], n); }
function s_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                yt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                wf(s, i);
                let c = t[i];
                A(24, c), a(2, c), A(25, c);
            }
        }
    }
    finally {
        yt(-1);
    } }
function Is(e, t) { let n = La() ? 64 : 1088; for (e[ze].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = Pt(e);
    if (He(e) && !o)
        return e;
    e = o;
} return null; }
function rm(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function im(e, t) { let n = B + t; if (n < e.length)
    return e[n]; }
function Zn(e, t, n, o = !0) { let r = t[y]; if (a_(r, t, e, n), o) {
    let s = Qc(n, e), a = t[T], c = a.parentNode(e[ke]);
    c !== null && bM(r, e[re], a, t, c, s);
} let i = t[ee]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Iu(e, t) { let n = jo(e, t); return n !== void 0 && ar(n[y], n), n; }
function jo(e, t) { if (e.length <= B)
    return; let n = B + t, o = e[n]; if (o) {
    let r = o[pt];
    r !== null && r !== e && cu(r, o), t > 0 && (e[n - 1][oe] = o[oe]);
    let i = so(e, B + t);
    Lg(o[y], o);
    let s = i[je];
    s !== null && s.detachView(i[y]), o[W] = null, o[oe] = null, o[b] &= -129;
} return o; }
function a_(e, t, n, o) { let r = B + o, i = n.length; o > 0 && (n[r - 1][oe] = t), o < i - B ? (t[oe] = n[r], ha(n, B + o, t)) : (n.push(t), t[oe] = null), t[W] = n; let s = t[pt]; s !== null && n !== s && sm(s, t); let a = t[je]; a !== null && a.insertView(e), Vr(t), t[b] |= 128; }
function sm(e, t) { let n = e[xt], o = t[W]; if (Z(o))
    e[b] |= 2;
else {
    let r = o[W][Q];
    t[Q] !== r && (e[b] |= 2);
} n === null ? e[xt] = [t] : n.push(t); }
var Ct = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[y]; return Nn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[L]; }
    set context(t) { this._lView[L] = t; }
    get destroyed() { return ht(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[W];
        if (Y(t)) {
            let n = t[ho], o = n ? n.indexOf(this) : -1;
            o > -1 && (jo(t, o), so(n, o));
        }
        this._attachedToViewContainer = !1;
    } ar(this._lView[y], this._lView); }
    onDestroy(t) { $r(this._lView, t); }
    markForCheck() { Is(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { Vr(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, vu(this._lView); }
    checkNoChanges() { return; try {
        this.exhaustive ??= this._lView[z].get(ZM, lp);
    }
    catch {
        this.exhaustive = lp;
    } }
    attachToViewContainerRef() { if (this._appRef)
        throw new N(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = He(this._lView), n = this._lView[pt]; n !== null && !t && cu(n, this._lView), Fg(this._lView[y], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new N(902, !1); this._appRef = t; let n = He(this._lView), o = this._lView[pt]; o !== null && !n && sm(o, this._lView), Vr(this._lView); }
};
function c_(e) { return yo(e._lView) || !!(e._lView[b] & 64); }
function l_(e) { Hr(e._lView); }
var Ho = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = u_;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Qn(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new Ct(i); }
} return e; })();
function u_() { return Es(M(), g()); }
function Es(e, t) { return e.type & 4 ? new Ho(t, e, jn(e, t)) : null; }
var Yc = "<-- AT THIS LOCATION";
function d_(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function f_(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${m_(e, t, !1)}

`, r = v_();
    throw new N(-502, n + o + r);
}
function am(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${y_(e)}

`, o = t + n + I_();
    return new N(-503, o);
}
function p_(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Si(r)}"`);
    } return t.join(" "); }
var h_ = new Set(["ngh", "ng-version", "ng-server-context"]);
function g_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    h_.has(o.name) || t.push(`${o.name}="${Si(o.value)}"`);
} return t.join(" "); }
function uc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = p_(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${d_(e.type)})`;
} }
function di(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = g_(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Si(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Si(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function m_(e, t, n) {
    let o = "  ", r = "";
    t.prev ? (r += o + `\u2026
`, r += o + uc(t.prev) + `
`) : t.type && t.type & 12 && (r += o + `\u2026
`), n ? (r += o + uc(t) + `
`, r += o + `<!-- container -->  ${Yc}
`) : r += o + uc(t) + `  ${Yc}
`, r += o + `\u2026
`;
    let i = t.type ? lu(e[y], t, e) : null;
    return i && (r = di(i, `
` + r)), r;
}
function y_(e) {
    let t = "  ", n = "", o = e;
    return o.previousSibling && (n += t + `\u2026
`, n += t + di(o.previousSibling) + `
`), n += t + di(o) + `  ${Yc}
`, e.nextSibling && (n += t + `\u2026
`), e.parentNode && (n = di(o.parentNode, `
` + n)), n;
}
function v_(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function I_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function E_(e) { return e.replace(/\s+/gm, ""); }
function Si(e, t = 50) { return e ? (e = E_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function cm(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Vg(e, t, n) : k(n[r]); }
function lm(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Ut(e, s, l, a, !1);
        }
} }
function Jt(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Eu(e, t, n, o, r), Nf() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = an();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return Ve(i, !0), i; }
function Eu(e, t, n, o, r) { let i = _f(), s = Aa(), a = s ? i : i && i.parent, c = e.data[t] = C_(e, a, n, t, o, r); return D_(e, c, i, s), c; }
function D_(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function C_(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return vo() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function um(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        dm(o) || T_(o, t) && M_(o) === null && __(o, t.index);
    } }
function dm(e) { return !(e.type & 64); }
function T_(e, t) { return dm(t) || e.index > t.index; }
function M_(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function __(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : ($g(cm, lm), e.insertBeforeIndex = t); }
function _o(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function N_(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function w_(e, t) { let n = e.insertBeforeIndex; n === null ? ($g(cm, lm), n = e.insertBeforeIndex = [null, t]) : (nf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function b_(e, t, n) { let o = Eu(e, n, 64, null, null); return um(t, o), o; }
function Ds(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function S_(e) { return e >>> 17; }
function R_(e) { return (e & 131070) >>> 1; }
function k_(e, t, n) { return e | t << 17 | n << 1; }
function fm(e) { return e === -1; }
function Du(e, t, n) { e.index = 0; let o = Ds(t, n); o !== null ? e.removes = t.remove[o] : e.removes = O; }
function Ri(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[y].data[n];
        return Du(e, o, e.lView), Ri(e);
    }
}
else
    return e.stack.length === 0 ? null : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Ri(e)); }
function A_() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Du(e, n.value, o), Ri.bind(null, e); } return t; }
function x_(e, t) { let n = { stack: [], index: -1, lView: t }; return Du(n, e, t), Ri.bind(null, n); }
var O_ = new RegExp(`^(\\d+)*(${Pl}|${Ol})*(.*)`);
function P_(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function L_(e) { let t = e.match(O_), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function F_(e) { return !e.prev && e.parent?.type === 8; }
function dc(e) { return e.index - I; }
function Yn(e, t) { return !(e.type & 144) && !!t[e.index] && pm(k(t[e.index])); }
function pm(e) { return !!e && !e.isConnected; }
function hm(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function j_(e, t, n) { let r = e.data[er]?.[n]; return r ? gm(r, t) : null; }
function cr(e, t, n, o) { let r = dc(o), i = hm(e, r); if (i === void 0) {
    let s = e.data[er];
    if (s?.[r])
        i = gm(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (F_(o)) {
            let l = dc(o.parent);
            i = Oc(e, l);
        }
        else {
            let l = De(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = dc(c), d = Oc(e, u);
                if (c.type === 2 && d) {
                    let p = zl(e, u) + 1;
                    i = Cs(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Cs(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function H_(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Fh:
                n = n.firstChild;
                break;
            case jh:
                n = n.nextSibling;
                break;
        }
} return n; }
function gm(e, t) { let [n, ...o] = L_(e), r; if (n === Ol)
    r = t[Q][P];
else if (n === Pl)
    r = eu(t[Q][P]);
else {
    let i = Number(n);
    r = k(t[i + I]);
} return H_(r, o); }
function Kc(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return V_(e, t); {
    let n = t.parentElement, o = Kc(e, n), r = Kc(n.firstChild, t);
    return !o || !r ? null : [...o, Fh, ...r];
} }
function V_(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(jh); return o == null ? null : n; }
function up(e, t, n) { let o = Kc(e, t); return o === null ? null : P_(n, o); }
function mm(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Yn(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Ol, i = t[Q][P]) : (r = o.index, i = k(t[r]), s = C(r - I)); let a = k(t[e.index]); if (e.type & 44) {
    let l = Bt(t, e);
    l && (a = l);
} let c = up(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = up(l, a, Pl), c === null)
        throw f_(t, e);
} return c; }
function ym(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: B_ }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function B_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var vm = !1, Im = () => { };
function Cu(e) { vm = e; }
function Ts() { return vm; }
function $_(e, t, n, o) { Im(e, t, n, o); }
function Em() { Im = z_; }
function Dm(e) { return e = e ?? D(Ce), e.get(jl, !1); }
function Cm(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = U_(e), t.i18nChildren.set(e, n)), n; }
function U_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Tm(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[y], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && _h(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Jc(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Jc(e, t, n, o) { let r = null; for (let i of o) {
    let s = W_(e, t, n, i);
    s && (G_(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function G_(e, t) { return e && e.nextSibling !== t; }
function W_(e, t, n, o) { let r = k(e[o.index]); if (!r || pm(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        Ql(n, i);
        break;
    }
    case 1:
    case 2: {
        Jc(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Jc(e, t, n, o.cases[a]);
        }
        break;
    }
} return q_(e, o); }
function q_(e, t) { let o = e[y].data[t.index]; return qi(o) ? Bt(e, o) : t.kind === 3 ? x_(o, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null; }
function Ft(e, t) { e.currentNode = t; }
function Co(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function fc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function pc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function z_(e, t, n, o) { let r = e[ee]; if (!r || !Ts() || n && (_h(n) || as(r, n.index - I)))
    return; let i = e[y], s = i.data[t]; function a() { if (fm(o)) {
    let p = cr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = eg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Xi]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; dn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function dn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = j_(e.hydrationInfo, e.lView, r.index - I);
        i && (o = pc(t, i)), dn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = Co(e, t, n);
            Ft(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            dn(e, pc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Co(e, t, n);
            Ft(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = Jh(r, o);
            switch (n.type) {
                case 0: {
                    let s = Co(e, t, n);
                    if (MT(r, o)) {
                        dn(e, t, n.children);
                        let a = fc(t, 1);
                        Ft(t, a);
                    }
                    else if (dn(e, pc(t, t.currentNode?.firstChild ?? null), n.children), Ft(t, s?.nextSibling ?? null), i !== null) {
                        let a = fc(t, i + 1);
                        Ft(t, a);
                    }
                    break;
                }
                case 1: {
                    Co(e, t, n);
                    let s = fc(t, i + 1);
                    Ft(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                dn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Co(e, t, n);
            Ft(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Mm = () => { };
function Q_(e, t, n) { Mm(e, t, n); }
function _m() { Mm = Z_; }
function Z_(e, t, n) { let o = e[ee]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Y_(e) { let t = e[ee]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            K_(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function K_(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && ir(e, r, !1);
} }
function Ms(e) { let t = e[Ie] ?? [], o = e[W][T], r = []; for (let i of t)
    i.data[es] !== void 0 ? r.push(i) : Nm(i, o); e[Ie] = r; }
function J_(e) { let { lContainer: t } = e, n = t[Ie]; if (n === null)
    return; let r = t[W][T]; for (let i of n)
    Nm(i, r); }
function Nm(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[Je];
    for (; n < r;) {
        let i = o.nextSibling;
        ir(t, o, !1), o = i, n++;
    }
} }
function _s(e) { Ms(e); let t = e[P]; Z(t) && ki(t); for (let n = B; n < e.length; n++)
    ki(e[n]); }
function ki(e) { Y_(e); let t = e[y]; for (let n = I; n < t.bindingStartIndex; n++)
    if (Y(e[n])) {
        let o = e[n];
        _s(o);
    }
    else
        Z(e[n]) && ki(e[n]); }
function Tu(e) { let t = e._views; for (let n of t) {
    let o = ql(n);
    o !== null && o[P] !== null && (Z(o) ? ki(o) : _s(o));
} }
function X_(e, t, n, o) { e !== null && (n.cleanup(t), _s(e.lContainer), Tu(o)); }
function eN(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[Xo] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[Je] > 0 && (i.firstChild = e, e = Cs(o[Je], e)), n.push(i);
    } return [e, n]; }
var wm = () => null, bm = () => null;
function Sm() { wm = tN, bm = nN; }
function tN(e, t) { return km(e, t) ? e[Ie].shift() : (Ms(e), null); }
function Vo(e, t) { return wm(e, t); }
function nN(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = Vo(e, t.tView.ssrId); return n[y].firstUpdatePass && o === null && oN(n, t), o; }
function Rm(e, t, n) { return bm(e, t, n); }
function oN(e, t) { let n = t; for (; n;) {
    if (dp(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (dp(e, n))
        return;
    n = n.next;
} }
function km(e, t) { let n = e[Ie]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Ji] === t; }
function dp(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return Y(o) && km(o, n) ? (Ms(o), !0) : !1; }
var Am = class {
}, Ns = class {
}, Xc = class {
    resolveComponentFactory(t) { throw new N(917, !1); }
}, lr = class {
    static NULL = new Xc;
}, Bo = class {
}, rN = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => iN();
} return e; })();
function iN() { let e = g(), t = M(), n = de(t.index, e); return (Z(n) ? n : e)[T]; }
var xm = (() => { class e {
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Mu(e) { return e.ngModule !== void 0; }
function Ht(e) { return !!nn(e); }
function oi(e) { return !!Fe(e); }
function fp(e) { return !!Me(e); }
function No(e) { return !!V(e); }
function sN(e) { return V(e) ? "component" : Me(e) ? "directive" : Fe(e) ? "pipe" : "type"; }
function aN(e, t) { if (Nr(e) && (e = H(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${ve(t)}", to return a standalone entity or NgModule but got "${ve(e) || e}".`); if (nn(e) == null) {
    let n = V(e) || Me(e) || Fe(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${ve(e)}" ${sN(e)}, imported from "${ve(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw Mu(e) ? new Error(`A module with providers was imported from "${ve(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${ve(e)}" type, imported from "${ve(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var el = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = nn(t);
            if (n?.declarations)
                for (let o of mn(n.declarations))
                    No(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = V(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Ht(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Or(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of mn(n.imports))
        if (Ht(r)) {
            let i = this.getNgModuleScope(r);
            It(i.exported.directives, o.compilation.directives), It(i.exported.pipes, o.compilation.pipes);
        }
        else if (lo(r))
            if (fp(r) || No(r))
                o.compilation.directives.add(r);
            else if (oi(r))
                o.compilation.pipes.add(r);
            else
                throw new N(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of mn(n.declarations)) {
            if (Ht(r) || lo(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            oi(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of mn(n.exports))
        if (Ht(r)) {
            let i = this.getNgModuleScope(r);
            It(i.exported.directives, o.exported.directives), It(i.exported.pipes, o.exported.pipes), It(i.exported.directives, o.compilation.directives), It(i.exported.pipes, o.compilation.pipes);
        }
        else
            oi(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Re(n ?? [])) {
        let i = H(r);
        try {
            aN(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Ht(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            It(s.exported.directives, o.compilation.directives), It(s.exported.pipes, o.compilation.pipes);
        }
        else if (oi(i))
            o.compilation.pipes.add(i);
        else if (fp(i) || No(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = V(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function It(e, t) { for (let n of e)
    t.add(n); }
var wn = new el, fi = {}, Dn = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, fi, o); return r !== fi || n === fi ? r : this.parentInjector.get(t, n, o); }
};
function Ai(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = _r(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = _r(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function Kn(e, t = 0) { let n = g(); if (n === null)
    return Se(e, t); let o = M(); return yh(o, n, H(e), t); }
function Om() { let e = "invalid"; throw new Error(e); }
function Pm(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    uN(e, t, n, a, i, c, l);
} i !== null && o !== null && cN(n, o, i); }
function cN(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new N(-301, !1);
    o.push(t[r], i);
} }
function lN(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function uN(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && ge(p) && (c = !0, lN(e, n, f)), bc(Ci(n, t), e, p.type);
} mN(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = sr(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = _n(n.mergedAttrs, p.hostAttrs), fN(e, n, t, d, p), gN(d, p, r), s !== null && s.has(p)) {
        let [m, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} dN(e, n, i); }
function dN(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        pp(0, t, r, o), pp(1, t, r, o), gp(t, o, !1);
    else {
        let i = n.get(r);
        hp(0, t, i, o), hp(1, t, i, o), gp(t, o, !0);
    }
} }
function pp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Lm(t, i);
    } }
function hp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Lm(t, s);
    } }
function Lm(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function gp(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || tu(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function fN(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = kr(r.type, !0)), s = new $t(i, ge(r), Kn); e.blueprint[o] = s, n[o] = s, pN(e, t, o, sr(e, n, r.hostVars, x), r); }
function pN(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    hN(s) != a && s.push(a), s.push(n, o, i);
} }
function hN(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function gN(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    ge(t) && (n[""] = e);
} }
function mN(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function _u(e, t, n, o, r, i, s, a) { let c = t[y], l = c.consts, u = ie(l, s), d = Jt(c, e, n, o, u); return i && Pm(c, t, d, ie(l, a), r), d.mergedAttrs = _n(d.mergedAttrs, d.attrs), d.attrs !== null && Ai(d, d.attrs, !1), d.mergedAttrs !== null && Ai(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function Nu(e, t) { ah(e, t), Da(t) && e.queries.elementEnd(t); }
function Fm(e, t, n, o, r, i) { let s = t.consts, a = ie(s, r), c = Jt(t, e, n, o, a); if (c.mergedAttrs = _n(c.mergedAttrs, c.attrs), i != null) {
    let l = ie(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Ai(c, c.attrs, !1), c.mergedAttrs !== null && Ai(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function $o(e) { return ws(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function yN(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function jm(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ws(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Hm(e, t) { let n = $o(e), o = $o(t); return n && o ? yN(e, t, Hm) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function We(e, t, n) { return e[t] = n; }
function ur(e, t) { return e[t]; }
function U(e, t, n) { if (n === x)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Wt(e, t, n, o) { let r = U(e, t, n); return U(e, t + 1, o) || r; }
function bs(e, t, n, o, r) { let i = Wt(e, t, n, o); return U(e, t + 2, r) || i; }
function be(e, t, n, o, r, i) { let s = Wt(e, t, n, o); return Wt(e, t + 2, r, i) || s; }
function wo(e, t, n) { return function o(r) { let i = Ee(e) ? de(e.index, t) : t; Is(i, 5); let s = t[L], a = mp(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = mp(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function mp(e, t, n, o) { let r = Bf(null); try {
    return A(6, t, n), n(o) !== !1;
}
catch (i) {
    return mu(e, i), !1;
}
finally {
    A(7, t, n), Bf(r);
} }
function Vm(e, t, n, o, r, i, s, a) { let c = sn(e), l = !1, u = null; if (!o && c && (u = vN(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = De(e, n), f = o ? o(d) : d;
    mT(n, f, i, a);
    let p = r.listen(f, i, a), h = o ? m => o(k(m[e.index])) : e.index;
    Bm(h, t, n, i, a, p, !1);
} return l; }
function vN(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[kt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Bm(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? Ef(t) : null, c = If(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function IN(e, t, n, o, r) { let i = wo(e, t, n), s = EN(e, t, o, r, i); }
function EN(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, xi(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, xi(e, t, i, o, o, r)), c; }
function xi(e, t, n, o, r, i) { let s = t[n], a = t[y], l = a.data[n].outputs[o], d = s[l].subscribe(i); Bm(e.index, a, t, r, i, d, !0); }
var Dt = Symbol("BINDING"), DN = { kind: "input", requiredVars: 1 }, CN = { kind: "output", requiredVars: 0 };
function TN(e, t, n) { let o = g(), r = fe(); if (U(o, r, n)) {
    let i = o[y], s = Ne(), a = i.directiveRegistry[e], c = WM(s, i, o, a, t, n);
} }
function $m(e, t) { let n = { [Dt]: DN, update: () => TN(n.targetIdx, e, t()) }; return n; }
function Um(e, t) { let n = { [Dt]: CN, create: () => { let o = g(), r = M(), s = o[y].directiveRegistry[n.targetIdx]; IN(r, o, t, s, e); } }; return n; }
function MN(e, t) { let n = $m(e, t), o = Um(e + "Change", i => t.set(i)); return { [Dt]: { kind: "twoWay", requiredVars: n[Dt].requiredVars + o[Dt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var Oi = class extends lr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = V(t); return new Tt(n, this.ngModule); }
};
function _N(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & fs.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function NN(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function wN(e, t, n) { let o = t instanceof dt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new Dn(n, o) : n; }
function bN(e) { let t = e.get(Bo, null); if (t === null)
    throw new N(407, !1); let n = e.get(xm, null), o = e.get(Qe, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function SN(e, t) { let n = (e.selectors[0][0] || "div").toLowerCase(); return us(t, n, n === "svg" ? ff : n === "math" ? pf : null); }
var Tt = class extends Ns {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= _N(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= NN(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = DM(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { A(22); let a = S(null); try {
        let c = this.componentDef, l = RN(o, c, s, i), u = wN(c, r || this.ngModule, t), d = bN(u), f = d.rendererFactory.createRenderer(null, c), p = o ? PM(f, o, c.encapsulation, u) : SN(c, f), h = s?.some(yp) || i?.some(E => typeof E != "function" && E.bindings.some(yp)), m = ds(null, l, null, 512 | iu(c), null, null, d, f, u, null, Yh(p, u, !0));
        m[I] = p, zr(m);
        let v = null;
        try {
            let E = _u(I, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            p && (Ag(f, p, E), we(p, m)), hs(l, m, E), Zl(l, E, m), Nu(l, E), n !== void 0 && AN(E, this.ngContentSelectors, n), v = de(E.index, m), m[L] = v[L], ys(l, m, null);
        }
        catch (E) {
            throw v !== null && Rc(v), Rc(m), E;
        }
        finally {
            A(23), Qr();
        }
        return new Pi(this.componentType, m, !!h);
    }
    finally {
        S(a);
    } }
};
function RN(e, t, n, o) { let r = e ? ["ng-version", "20.1.0"] : CM(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Dt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Dt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Me(d);
        c.push(f);
    } return ru(0, null, kN(i, s), 1, a, c, null, null, null, [r], null); }
function kN(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function yp(e) { let t = e[Dt].kind; return t === "input" || t === "twoWay"; }
var Pi = class extends Am {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = gt(n[y], I), this.location = jn(this._tNode, n), this.instance = de(this._tNode.index, n)[L], this.hostView = this.changeDetectorRef = new Ct(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = yu(o, r[y], r, t, n); this.previousInputValues.set(t, n); let s = de(o.index, r); Is(s, 1); }
    get injector() { return new Et(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function AN(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Ss = (() => { class e {
    static __NG_ELEMENT_ID__ = xN;
} return e; })();
function xN() { let e = M(); return Wm(e, g()); }
var ON = Ss, Gm = class extends ON {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return jn(this._hostTNode, this._hostLView); }
    get injector() { return new Et(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Rl(this._hostTNode, this._hostLView); if (dh(t)) {
        let n = Ei(t, this._hostLView), o = Ii(t), r = n[y].data[o + 8];
        return new Et(r, n);
    }
    else
        return new Et(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = vp(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - B; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = Vo(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Gt(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !To(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new Tt(V(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let E = (c ? d : this.parentInjector).get(dt, null);
        E && (i = E);
    } let f = V(u.componentType ?? {}), p = Vo(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, r, h, i, s, a); return this.insertImpl(m.hostView, l, Gt(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (yf(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[W], l = new Gm(c, c[re], c[W]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Zn(s, r, i, o), t.attachToViewContainerRef(), ha(hc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = vp(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = jo(this._lContainer, n); o && (so(hc(this._lContainer), n), ar(o[y], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = jo(this._lContainer, n); return o && so(hc(this._lContainer), n) != null ? new Ct(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function vp(e) { return e[ho]; }
function hc(e) { return e[ho] || (e[ho] = []); }
function Wm(e, t) { let n, o = t[e.index]; return Y(o) ? n = o : (n = rm(o, t, null, e), t[e.index] = n, su(t, n)), qm(n, t, e, o), new Gm(n, e, t); }
function PN(e, t) { let n = e[T], o = n.createComment(""), r = De(t, e), i = n.parentNode(r); return Ut(n, i, o, n.nextSibling(r), !1), o; }
var qm = Qm, wu = () => !1;
function zm(e, t, n) { return wu(e, t, n); }
function Qm(e, t, n, o) { if (e[ke])
    return; let r; n.type & 8 ? r = k(o) : r = PN(t, n), e[ke] = r; }
function LN(e, t, n) { if (e[ke] && e[Ie])
    return !0; let o = n[ee], r = t.index - I; if (!o || Vn(t) || as(o, r))
    return !1; let s = Oc(o, r), a = o.data[Bn]?.[r], [c, l] = eN(s, a); return e[ke] = c, e[Ie] = l, !0; }
function FN(e, t, n, o) { wu(e, n, t) || Qm(e, t, n, o); }
function Zm() { qm = FN, wu = LN; }
var tl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, nl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        Su(t, n).matches !== null && this.queries[n].setDirty(); }
}, Li = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = $N(t) : this.predicate = t; }
}, ol = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, rl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, jN(n, i)), this.matchTNodeWithReadOption(t, n, li(n, t, i, !1, !1));
        }
    else
        o === Ho ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, li(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === Ko || r === Ss || r === Ho && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = li(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function jN(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function HN(e, t) { return e.type & 11 ? jn(e, t) : e.type & 4 ? Es(e, t) : null; }
function VN(e, t, n, o) { return n === -1 ? HN(t, e) : n === -2 ? BN(e, t, o) : Oo(e, e[y], n, t); }
function BN(e, t, n) { if (n === Ko)
    return jn(t, e); if (n === Ho)
    return Es(t, e); if (n === Ss)
    return Wm(t, e); }
function Ym(e, t, n, o) { let r = t[je].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(VN(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function il(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = Ym(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = B; d < u.length; d++) {
                let f = u[d];
                f[pt] === f[W] && il(f[y], f, l, o);
            }
            if (u[xt] !== null) {
                let d = u[xt];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    il(p[y], p, l, o);
                }
            }
        }
    }
} return o; }
function bu(e, t) { return e[je].queries[t].queryList; }
function Km(e, t, n) { let o = new Ti((n & 4) === 4); return Df(e, t, o, o.destroy), (t[je] ??= new nl).queries.push(new tl(o)) - 1; }
function Jm(e, t, n) { let o = _(); return o.firstCreatePass && (ey(o, new Li(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), Km(o, g(), t); }
function Xm(e, t, n, o) { let r = _(); if (r.firstCreatePass) {
    let i = M();
    ey(r, new Li(t, n, o), i.index), UN(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return Km(r, g(), n); }
function $N(e) { return e.split(",").map(t => t.trim()); }
function ey(e, t, n) { e.queries === null && (e.queries = new ol), e.queries.track(new rl(t, n)); }
function UN(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Su(e, t) { return e.queries.getByIndex(t); }
function ty(e, t) { let n = e[y], o = Su(n, t); return o.crossesNgTemplate ? il(n, e, t, []) : Ym(n, e, o, t); }
function Ru(e, t, n) { let o, r = Jd(() => { o._dirtyCounter(); let i = GN(o, e); if (t && i === void 0)
    throw new N(-951, !1); return i; }); return o = r[ct], o._dirtyCounter = Qa(0), o._flatValue = void 0, r; }
function ku(e) { return Ru(!0, !1, e); }
function Au(e) { return Ru(!0, !0, e); }
function xu(e) { return Ru(!1, !1, e); }
function ny(e, t) { let n = e[ct]; n._lView = g(), n._queryIndex = t, n._queryList = bu(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function GN(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : O; let r = bu(n, o), i = ty(n, o); return r.reset(i, Th), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
function oy(e) { let t = [], n = new Map; function o(r) { let i = n.get(r); if (!i) {
    let s = e(r);
    n.set(r, i = s.then(QN));
} return i; } return bn.forEach((r, i) => { let s = []; r.templateUrl && s.push(o(r.templateUrl).then(l => { r.template = l; })); let a = typeof r.styles == "string" ? [r.styles] : r.styles || []; if (r.styles = a, r.styleUrl && r.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (r.styleUrls?.length) {
    let l = r.styles.length, u = r.styleUrls;
    r.styleUrls.forEach((d, f) => { a.push(""), s.push(o(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0); })); });
}
else
    r.styleUrl && s.push(o(r.styleUrl).then(l => { a.push(l), r.styleUrl = void 0; })); let c = Promise.all(s).then(() => ZN(i)); t.push(c); }), iy(), Promise.all(t).then(() => { }); }
var bn = new Map, Uo = new Set;
function WN(e, t) { ry(t) && (bn.set(e, t), Uo.add(e)); }
function qN(e) { return Uo.has(e); }
function ry(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function iy() { let e = bn; return bn = new Map, e; }
function zN(e) { Uo.clear(), e.forEach((t, n) => Uo.add(n)), bn = e; }
function sy() { return bn.size === 0; }
function QN(e) { return typeof e == "string" ? e : e.text(); }
function ZN(e) { Uo.delete(e); }
var sl = new Map, ay = !0;
function YN(e, t, n) { if (t && t !== n && ay)
    throw new Error(`Duplicate module registered for ${e} - ${Xt(t)} vs ${Xt(t.name)}`); }
function Ou(e, t) { let n = sl.get(t) || null; YN(t, n, e), sl.set(t, e); }
function Pu(e) { return sl.get(e); }
function KN(e) { ay = !e; }
function cy(e, t, n) { let o = g(), r = Ne(), i = De(r, o); if (r.type === 2 && t.toLowerCase() === "iframe") {
    let s = i;
    s.src = "", s.srcdoc = Wn(""), ir(o[T], s);
    let a = !1;
    throw new N(-910, a);
} return e; }
var Ip = new Set;
function se(e) { Ip.has(e) || (Ip.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Sn = class {
}, ly = class {
};
function uy(e, t) { return new Rn(e, t ?? null, []); }
var JN = uy, Rn = class extends Sn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Oi(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = nn(t); this._bootstrapComponents = mn(i.bootstrap), this._r3Injector = Rf(t, n, [{ provide: Sn, useValue: this }, { provide: lr, useValue: this.componentFactoryResolver }, ...o], Xt(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, kn = class extends ly {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new Rn(this.moduleType, t, []); }
};
function dy(e, t, n) { return new Rn(e, t, n, !1); }
var Go = class extends Sn {
    injector;
    componentFactoryResolver = new Oi(this);
    instance = null;
    constructor(t) { super(); let n = new ya([...t.providers, { provide: Sn, useValue: this }, { provide: lr, useValue: this.componentFactoryResolver }], t.parent || Lr(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Lu(e, t, n = null) { return new Go({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var XN = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = ma(!1, n.type), r = o.length > 0 ? Lu([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = F({ token: e, providedIn: "environment", factory: () => new e(Se(dt)) });
} return e; })();
function fy(e) { return Ge(() => { let t = my(e), n = Le(G({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Zi.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(XN).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Xe.Emulated, styles: e.styles || O, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && se("NgStandalone"), yy(n); let o = e.dependencies; return n.directiveDefs = Fi(o, py), n.pipeDefs = Fi(o, Fe), n.id = ow(n), n; }); }
function py(e) { return V(e) || Me(e); }
function Fu(e) { return Ge(() => ({ type: e.type, bootstrap: e.bootstrap || O, declarations: e.declarations || O, imports: e.imports || O, exports: e.exports || O, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function ew(e, t) { if (e == null)
    return Te; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = fs.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function tw(e) { if (e == null)
    return Te; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function hy(e) { return Ge(() => { let t = my(e); return yy(t), t; }); }
function gy(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function my(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Te, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || O, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: ew(e.inputs, t), outputs: tw(e.outputs), debugInfo: null }; }
function yy(e) { e.features?.forEach(t => t(e)); }
function Fi(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var nw = new Map;
function ow(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function vy(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function ju(e) { let t = vy(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (ge(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new N(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = gc(e.inputs), s.declaredInputs = gc(e.declaredInputs), s.outputs = gc(e.outputs);
            let a = r.hostBindings;
            a && cw(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && sw(e, c), l && aw(e, l), rw(e, r), tf(e.outputs, r.outputs), ge(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === ju && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} iw(o); }
function rw(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function iw(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = _n(r.hostAttrs, n = _n(n, r.hostAttrs));
} }
function gc(e) { return e === Te ? {} : e === O ? [] : e; }
function sw(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function aw(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function cw(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
var lw = ["providersResolver"], uw = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function Iy(e) { let t = vy(e.type), n; ge(e) ? n = t.\u0275cmp : n = t.\u0275dir; let o = e; for (let r of lw)
    o[r] = n[r]; if (ge(n))
    for (let r of uw)
        o[r] = n[r]; }
function Ey(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = dw, n.hostDirectives = o ? e.map(al) : [e]) : o ? n.hostDirectives.unshift(...e.map(al)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function dw(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, Dy(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && ge(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function Dy(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                Ep(al(i), t, n);
        }
        else
            Ep(o, t, n); }
function Ep(e, t, n) { let o = Me(e.directive); fw(o.declaredInputs, e.inputs), Dy(o, t, n), n.set(o, e), t.push(o); }
function al(e) { return typeof e == "function" ? { directive: H(e), inputs: Te, outputs: Te } : { directive: H(e.directive), inputs: Dp(e.inputs), outputs: Dp(e.outputs) }; }
function Dp(e) { if (e === void 0 || e.length === 0)
    return Te; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function fw(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function Cy(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = _n(e.mergedAttrs, e.attrs);
    let u = e.tView = ru(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), Ve(e, !1); let c = Ty(n, t, e, o); Eo() && uu(n, t, c, e), we(c, t); let l = rm(c, t, c, e); t[o + I] = l, su(t, l), zm(l, e, t); }
function pw(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = Jt(t, d, 4, s || null, a || null), Gr() && Pm(t, e, f, ie(t.consts, l), hu), ah(t, f)) : f = t.data[d], Cy(f, e, t, n, o, r, i, c), sn(f) && hs(t, e, f), l != null && zn(e, f, u), f; }
function qt(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = Jt(t, d, 4, s || null, a || null), l != null) {
        let p = ie(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return Cy(f, e, t, n, o, r, i, c), l != null && zn(e, f, u), f; }
function Hu(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ie(l.consts, i); return pw(c, l, e, t, n, o, r, u, void 0, s, a), Hu; }
function Vu(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ie(l.consts, i); return qt(c, l, e, t, n, o, r, u, void 0, s, a), Vu; }
var Ty = My;
function My(e, t, n, o) { return Ae(!0), t[T].createComment(""); }
function hw(e, t, n, o) { let r = !cs(t, n); Ae(r); let i = t[ee]?.data[Ki]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return My(e, t); let s = t[ee], a = cr(s, e, t, n); is(s, o, a); let c = zl(s, o); return Cs(c, a); }
function _y() { Ty = hw; }
var K = function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; }(K || {}), Cp = 0, gw = 1, j = function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; }(j || {}), Wo = function (e) { return e[e.Initial = -1] = "Initial", e; }(Wo || {}), Cn = 0, it = 1, Mo = 2, ri = 3, mw = 4, yw = 5, Rs = 6, vw = 7, Tn = 8, Iw = 9, Bu = function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; }(Bu || {});
function dr(e, t, n) { let o = wy(e); t[o] === null && (t[o] = []), t[o].push(n); }
function pi(e, t) { let n = wy(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function Ny(e) { pi(1, e), pi(0, e), pi(2, e); }
function wy(e) { let t = mw; return e === 1 ? t = yw : e === 2 && (t = Iw), t; }
var ks = function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; }(ks || {}), Jn = new w(""), by = !1, cl = class extends wl {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, va() && (this.destroyRef = D(cn, { optional: !0 }) ?? void 0, this.pendingTasks = D(Lt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = S(null); try {
        super.next(t);
    }
    finally {
        S(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof bl && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, Ye = cl;
function Sy(e) { let t, n; function o() { e = Do; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Tp(e) { return queueMicrotask(() => e()), () => { e = Do; }; }
var $u = "isAngularZone", ji = $u + "_ID", Ew = 0, $ = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new Ye(!1);
    onMicrotaskEmpty = new Ye(!1);
    onStable = new Ye(!1);
    onError = new Ye(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = by } = t; if (typeof Zone > "u")
        throw new N(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, Tw(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get($u) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new N(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new N(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, Dw, Do, Do); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, Dw = {};
function Uu(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function Cw(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Sy(() => { e.callbackScheduled = !1, ll(e), e.isCheckStableRunning = !0, Uu(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), ll(e); }
function Tw(e) { let t = () => { Cw(e); }, n = Ew++; e._inner = e._inner.fork({ name: "angular", properties: { [$u]: !0, [ji]: n, [ji + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (Mw(c))
        return o.invokeTask(i, s, a, c); try {
        return Mp(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), _p(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Mp(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !_w(c) && t(), _p(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, ll(e), Uu(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function ll(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Mp(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function _p(e) { e._nesting--, Uu(e); }
var An = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new Ye;
    onMicrotaskEmpty = new Ye;
    onStable = new Ye;
    onError = new Ye;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function Mw(e) { return Ry(e, "__ignore_ng_zone__"); }
function _w(e) { return Ry(e, "__scheduler_tick__"); }
function Ry(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function ky(e = "zone.js", t) { return e === "noop" ? new An : e === "zone.js" ? new $(t) : e; }
var As = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Gu = [0, 1, 2, 3], Wu = (() => { class e {
    ngZone = D($);
    scheduler = D(Qe);
    errorHandler = D(Zr, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(Jn, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && A(16), this.executing = !0; for (let o of Gu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && A(17); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[At] ??= []).push(n), Br(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(ks.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), qo = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[At]; t && (this.view[At] = t.filter(n => n !== this)); }
};
function Ay(e, t) { let n = t?.injector ?? D(Ce); return typeof ngServerMode < "u" && ngServerMode ? xs : (se("NgAfterRender"), Oy(e, n, t, !1)); }
function xy(e, t) { let n = t?.injector ?? D(Ce); return typeof ngServerMode < "u" && ngServerMode ? xs : (se("NgAfterNextRender"), Oy(e, n, t, !0)); }
function Nw(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Oy(e, t, n, o) { let r = t.get(As); r.impl ??= t.get(Wu); let i = t.get(Jn, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(cn) : null, a = t.get(Kr, null, { optional: !0 }), c = new qo(r.impl, Nw(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var xs = { destroy() { } };
function fr(e) { return e + 1; }
function pe(e, t) { let n = e[y], o = fr(t.index); return e[o]; }
function ww(e, t, n) { let o = e[y], r = fr(t); e[r] = n; }
function ne(e, t) { let n = fr(t.index); return e.data[n]; }
function bw(e, t, n) { let o = fr(t); e.data[o] = n; }
function Sw(e, t, n) { let o = t[y], r = ne(o, n); switch (e) {
    case j.Complete: return r.primaryTmplIndex;
    case j.Loading: return r.loadingTmplIndex;
    case j.Error: return r.errorTmplIndex;
    case j.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function ul(e, t) { return t === j.Placeholder ? e.placeholderBlockConfig?.[Cp] ?? null : t === j.Loading ? e.loadingBlockConfig?.[Cp] ?? null : null; }
function Py(e) { return e.loadingBlockConfig?.[gw] ?? null; }
function Np(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function Rw(e, t) { let n = t.primaryTmplIndex + I; return gt(e, n); }
function Ly(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Fy(e, t) { let n = null, o = fr(t.index); return I < o && o < e.bindingStartIndex && (n = ne(e, t)), !!n && Ly(n); }
function qu(e, t, n) { let o = n.get($); return hT(e, () => o.run(t), () => o.runOutsideAngular(() => pT())); }
function kw(e, t, n) { return n == null ? e : n >= 0 ? vf(n, e) : e[t.index][B] ?? null; }
function Aw(e, t) { return Ot(I + t, e); }
function Xn(e, t, n, o, r, i, s) { let a = e[z], c = a.get($), l; function u() { if (ht(e)) {
    l.destroy();
    return;
} let d = pe(e, t), f = d[it]; if (f !== Wo.Initial && f !== j.Placeholder) {
    l.destroy();
    return;
} let p = kw(e, t, o); if (!p || (l.destroy(), ht(p)))
    return; let h = Aw(p, n), m = r(h, () => { c.run(() => { e !== p && Ma(p, m), i(); }); }, a); e !== p && $r(p, m), dr(s, d, m); } l = Ay({ read: u }, { injector: a }); }
function Os(e, t) { let n = t.get(Pw), o = () => n.remove(e); return n.add(e), o; }
var xw = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, Ow = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, Pw = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D($);
    requestIdleCallbackFn = xw().bind(globalThis);
    cancelIdleCallbackFn = Ow().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Ps(e) { return (t, n) => jy(e, t, n); }
function jy(e, t, n) { let o = n.get(Hy), r = n.get($), i = () => o.remove(t); return o.add(e, t, r), i; }
var Hy = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } af(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && ga(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && ga(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Lw = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? Lu(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = F({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), Fw = new w("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Vy = new w("");
function mc(e, t, n) { return e.get(Lw).getOrCreateInjector(t, e, n, ""); }
function jw(e, t, n) { if (e instanceof Dn) {
    let r = e.injector, i = e.parentInjector, s = mc(i, t, n);
    return new Dn(r, s);
} let o = e.get(dt); if (o !== e) {
    let r = mc(o, t, n);
    return new Dn(e, r);
} return mc(e, t, n); }
function Ke(e, t, n, o = !1) { let r = n[W], i = r[y]; if (ht(r))
    return; let s = pe(r, t), a = s[it], c = s[vw]; if (!(c !== null && e < c) && bp(a, e) && bp(s[Cn] ?? -1, e)) {
    let l = ne(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (Py(l) !== null || ul(l, j.Loading) !== null || ul(l, j.Placeholder)) ? dl : By;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        mu(r, f);
    }
} }
function Hw(e, t) { let n = e[Ie]?.findIndex(r => r.data[tr] === t[it]) ?? -1; return { dehydratedView: n > -1 ? e[Ie][n] : null, dehydratedViewIx: n }; }
function By(e, t, n, o, r) { A(20); let i = Sw(e, r, o); if (i !== null) {
    t[it] = e;
    let s = r[y], a = i + I, c = gt(s, a), l = 0;
    Iu(n, l);
    let u;
    if (e === j.Complete) {
        let h = ne(s, o), m = h.providers;
        m && m.length > 0 && (u = jw(r[z], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = Hw(n, t), p = Qn(r, c, null, { injector: u, dehydratedView: d });
    if (Zn(n, p, l, Gt(c, d)), Is(p, 2), f > -1 && n[Ie]?.splice(f, 1), (e === j.Complete || e === j.Error) && Array.isArray(t[Tn])) {
        for (let h of t[Tn])
            h();
        t[Tn] = null;
    }
} A(21); }
function Vw(e, t, n, o, r) { let i = Date.now(), s = r[y], a = ne(s, o); if (t[Mo] === null || t[Mo] <= i) {
    t[Mo] = null;
    let c = Py(a), l = t[ri] !== null;
    if (e === j.Loading && c !== null && !l) {
        t[Cn] = e;
        let u = wp(c, t, o, n, r);
        t[ri] = u;
    }
    else {
        e > j.Loading && l && (t[ri](), t[ri] = null, t[Cn] = null), By(e, t, n, o, r);
        let u = ul(a, e);
        u !== null && (t[Mo] = i + u, wp(u, t, o, n, r));
    }
}
else
    t[Cn] = e; }
function wp(e, t, n, o, r) { return jy(e, () => { let s = t[Cn]; t[Mo] = null, t[Cn] = null, s !== null && Ke(s, n, o); }, r[z]); }
function bp(e, t) { return e < t; }
function eo(e, t) { let n = e[t.index]; Ke(j.Placeholder, t, n); }
function Sp(e, t, n) { e.loadingPromise.then(() => { e.loadingState === K.COMPLETE ? Ke(j.Complete, t, n) : e.loadingState === K.FAILED && Ke(j.Error, t, n); }); }
var dl = null;
function $y(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ie(r, n)), o != null && (t.loadingBlockConfig = ie(r, o)), dl === null && (dl = Vw); }
var hi = "__ngAsyncComponentMetadataFn__";
function Bw(e) { return e[hi] ?? null; }
function Uy(e, t, n) { let o = e; return o[hi] = () => Promise.all(t()).then(r => (n(...r), o[hi] = null, r)), o[hi]; }
function zu(e, t, n, o) { return Ge(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = G(G({}, r.propDecorators), o) : r.propDecorators = o); }); }
var $w = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function gi(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (Y(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ne(n, s);
            if (Ly(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        Z(r[P]) && gi(r[P], t);
        for (let s = B; s < r.length; s++)
            gi(r[s], t);
    }
    else
        Z(e[o]) && gi(e[o], t); }
function Uw() { return se("Chrome DevTools profiling"), () => { }; }
var Rp = "ng";
function Gw(e, t) { Ww(e, t); }
function Ww(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = ye;
    n[Rp] ??= {}, n[Rp][e] = t;
} }
var Gy = new w(""), Wy = new w(""), qw = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, va() && (this._destroyRef = D(cn, { optional: !0 }) ?? void 0), Qu || (zy(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { $.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Se($), Se(qy), Se(Wy)); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac });
} return e; })(), qy = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Qu?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function zy(e) { Qu = e; }
var Qu;
function Zu(e) { return !!e && typeof e.then == "function"; }
function Qy(e) { return !!e && typeof e.subscribe == "function"; }
var Yu = new w("");
function zw(e) { return qe([{ provide: Yu, multi: !0, useValue: e }]); }
var Ku = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = D(Yu, { optional: !0 }) ?? [];
    injector = D(Ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Fr(this.injector, r);
        if (Zu(i))
            n.push(i);
        else if (Qy(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), pr = new w("");
function Ju() { Xd(() => { let e = ""; throw new N(600, e); }); }
function Zy(e) { return e.isBoundToModule; }
var fl = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, Qw = 10;
function Xu(e, t) { return Array.isArray(t) ? t.reduce(Xu, e) : G(G({}, e), t); }
var Oe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(vt);
    afterRenderManager = D(As);
    zonelessEnabled = D(ln);
    rootEffectScheduler = D(Ja);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new wl;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(Lt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(nC(n => !n)); }
    constructor() { D(Jn, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(dt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Ce.NULL) { return this._injector.get($).run(() => { A(10); let s = n instanceof Ns; if (!this._injector.get(Ku).done) {
        let h = "";
        throw new N(405, h);
    } let c; s ? c = n : c = this._injector.get(lr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Zy(c) ? void 0 : this._injector.get(Sn), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(Gy, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), bo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), A(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { A(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(ks.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new N(101, !1); let n = S(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, S(n), this.afterTick.next(), A(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Bo, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < Qw;)
        A(14), this.synchronizeOnce(), A(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !yo(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            vu(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => yo(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; bo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(pr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => bo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new N(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function bo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function Yy(e) { let t = g(), n = M(); if (eo(t, n), !Xy(0, t))
    return; let o = t[z], r = pe(t, n), i = e(() => he(0, t, n), o); dr(0, r, i); }
function Ky(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let n = g(), o = n[z], r = M(), i = n[y], s = ne(i, r); if (s.loadingState === K.NOT_STARTED) {
    let a = pe(n, r), l = e(() => hr(s, n, r), o);
    dr(1, a, l);
} }
function Jy(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[z], r = pe(t, n), i = r[Rs], s = e(() => st(o, i), o); dr(2, r, s); }
function hr(e, t, n) { Ls(e, t, n); }
function Ls(e, t, n) { let o = t[z], r = t[y]; if (e.loadingState !== K.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = pe(t, n), s = Rw(r, e); e.loadingState = K.IN_PROGRESS, pi(1, i); let a = e.dependencyResolverFn, c = o.get(Ka).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = V(h) || Me(h);
        if (m)
            d.push(m);
        else {
            let v = Fe(h);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = K.FAILED, e.errorTmplIndex === null) {
        let p = "", h = new N(-750, !1);
        mu(t, h);
    }
}
else {
    e.loadingState = K.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Np(p.directiveRegistry, d);
        let h = d.map(v => v.type), m = ma(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = Np(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = K.COMPLETE, c(); }), e.loadingPromise); }
function Xy(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[z].get(Vy, null, { optional: !0 })?.behavior === Bu.Manual); }
function he(e, t, n) { let o = t[y], r = t[n.index]; if (!Xy(e, t))
    return; let i = pe(t, n), s = ne(o, n); switch (Ny(i), s.loadingState) {
    case K.NOT_STARTED:
        Ke(j.Loading, n, r), Ls(s, t, n), s.loadingState === K.IN_PROGRESS && Sp(s, n, r);
        break;
    case K.IN_PROGRESS:
        Ke(j.Loading, n, r), Sp(s, n, r);
        break;
    case K.COMPLETE:
        Ke(j.Complete, n, r);
        break;
    case K.FAILED:
        Ke(j.Error, n, r);
        break;
    default:
} }
function st(e, t, n) { return oo(this, null, function* () { let o = e.get(nt); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = _T(t, e); if (s.length === 0)
    return; i !== null && s.shift(), Kw(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield kp(e, s, n) : o.awaitParentBlock(a, () => oo(null, null, function* () { return yield kp(e, s, n); })); }); }
function kp(e, t, n) { return oo(this, null, function* () { let o = e.get(nt), r = o.hydrating, i = e.get(Lt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield Xw(u), yield Jw(e), Zw(u)) {
            J_(u), Ap(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        Yw(c, t, o), Ap(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), X_(o.get(a), t, o, e.get(Oe)); }); }
function Zw(e) { return pe(e.lView, e.tNode)[it] === j.Error; }
function Yw(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && _s(r.lContainer); }
function Ap(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function Kw(e, t) { for (let n of t)
    e.hydrating.set(n, Promise.withResolvers()); }
function Jw(e) { return new Promise(t => xy(t, { injector: e })); }
function Xw(e) { return oo(this, null, function* () { let { tNode: t, lView: n } = e, o = pe(n, t); return new Promise(r => { eb(o, r), he(2, n, t); }); }); }
function eb(e, t) { Array.isArray(e[Tn]) || (e[Tn] = []), e[Tn].push(t); }
function q(e, t, n) { return e === 0 ? xp(t, n) : e === 2 ? !xp(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function tb(e) { return e != null && (e & 1) === 1; }
function xp(e, t) { let n = e[z], o = ne(e[y], t), r = ss(n), i = tb(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = pe(e, t)[Rs] !== null; return !(i && a && r); }
function Nt(e, t) { let n = ne(e, t); return n.hydrateTriggers ??= new Map; }
function ev(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[Je], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} nb(e, o), ib(e, s), ob(e, i), rb(e, r); }
function nb(e, t) { for (let n of t) {
    let o = e.get(nt), i = Os(() => st(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function ob(e, t) { if (t.length > 0) {
    let n = e.get(nt);
    for (let o of t) {
        let r = qu(o.el, () => st(e, o.blockName), e);
        n.addCleanupFn(o.blockName, r);
    }
} }
function rb(e, t) { for (let n of t) {
    let o = e.get(nt), r = () => st(e, n.blockName), s = Ps(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function ib(e, t) { for (let n of t)
    st(e, n.blockName); }
function tv(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = _(), f = e + I, p = qt(u, d, e, null, 0, 0), h = u[z]; if (d.firstCreatePass) {
    se("NgDefer");
    let ue = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: K.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ue, a, s), bw(d, f, ue);
} let m = u[f]; zm(m, p, u); let v = null, E = null; if (m[Ie]?.length > 0) {
    let ue = m[Ie][0].data;
    E = ue[es] ?? null, v = ue[tr];
} let R = [null, Wo.Initial, null, null, null, null, E, v, null, null]; ww(u, f, R); let ae = null; E !== null && (ae = h.get(nt), ae.add(E, { lView: u, tNode: p, lContainer: m })); let Pe = () => { Ny(R), E !== null && ae?.cleanup([E]); }; dr(0, R, () => Ma(u, Pe)), $r(u, Pe); }
function nv(e) { let t = g(), n = Ne(); if (!q(0, t, n))
    return; let o = fe(); if (U(t, o, e)) {
    let r = S(null);
    try {
        let i = !!e, a = pe(t, n)[it];
        i === !1 && a === Wo.Initial ? eo(t, n) : i === !0 && (a === Wo.Initial || a === j.Placeholder) && he(0, t, n);
    }
    finally {
        S(r);
    }
} }
function ov(e) { let t = g(), n = Ne(); if (!q(1, t, n))
    return; let o = fe(); if (U(t, o, e)) {
    let r = S(null);
    try {
        let i = !!e, s = t[y], a = Ne(), c = ne(s, a);
        i === !0 && c.loadingState === K.NOT_STARTED && hr(c, t, a);
    }
    finally {
        S(r);
    }
} }
function rv(e) { let t = g(), n = Ne(); if (!q(2, t, n))
    return; let o = fe(), r = _(); if (Nt(r, n).set(6, null), U(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        he(2, t, n);
    else {
        let s = t[z], a = S(null);
        try {
            if (!!e === !0) {
                let u = pe(t, n)[Rs];
                st(s, u);
            }
        }
        finally {
            S(a);
        }
    } }
function iv() { let e = g(), t = M(); if (!q(2, e, t))
    return; Nt(_(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function sv() { let e = g(), t = M(); q(0, e, t) && Yy(Os); }
function av() { let e = g(), t = M(); q(1, e, t) && Ky(Os); }
function cv() { let e = g(), t = M(); if (!q(2, e, t))
    return; Nt(_(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? he(2, e, t) : Jy(Os, e, t); }
function lv() { let e = g(), t = M(); if (!q(0, e, t))
    return; ne(e[y], t).loadingTmplIndex === null && eo(e, t), he(0, e, t); }
function uv() { let e = g(), t = M(); if (!q(1, e, t))
    return; let n = e[y], o = ne(n, t); o.loadingState === K.NOT_STARTED && Ls(o, e, t); }
function dv() { let e = g(), t = M(); if (!q(2, e, t))
    return; if (Nt(_(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    he(2, e, t);
else {
    let o = e[z], i = pe(e, t)[Rs];
    st(o, i);
} }
function fv(e) { let t = g(), n = M(); q(0, t, n) && Yy(Ps(e)); }
function pv(e) { let t = g(), n = M(); q(1, t, n) && Ky(Ps(e)); }
function hv(e) { let t = g(), n = M(); if (!q(2, t, n))
    return; Nt(_(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? he(2, t, n) : Jy(Ps(e), t, n); }
function gv(e, t) { let n = g(), o = M(); q(0, n, o) && (eo(n, o), typeof ngServerMode < "u" && ngServerMode || Xn(n, o, e, t, Bh, () => he(0, n, o), 0)); }
function mv(e, t) { let n = g(), o = M(); if (!q(1, n, o))
    return; let r = n[y], i = ne(r, o); i.loadingState === K.NOT_STARTED && Xn(n, o, e, t, Bh, () => hr(i, n, o), 1); }
function yv() { let e = g(), t = M(); if (!q(2, e, t))
    return; Nt(_(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function vv(e, t) { let n = g(), o = M(); q(0, n, o) && (eo(n, o), typeof ngServerMode < "u" && ngServerMode || Xn(n, o, e, t, Vh, () => he(0, n, o), 0)); }
function Iv(e, t) { let n = g(), o = M(); if (!q(1, n, o))
    return; let r = n[y], i = ne(r, o); i.loadingState === K.NOT_STARTED && Xn(n, o, e, t, Vh, () => hr(i, n, o), 1); }
function Ev() { let e = g(), t = M(); if (!q(2, e, t))
    return; Nt(_(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function Dv(e, t) { let n = g(), o = M(); q(0, n, o) && (eo(n, o), typeof ngServerMode < "u" && ngServerMode || Xn(n, o, e, t, qu, () => he(0, n, o), 0)); }
function Cv(e, t) { let n = g(), o = M(); if (!q(1, n, o))
    return; let r = n[y], i = ne(r, o); i.loadingState === K.NOT_STARTED && Xn(n, o, e, t, qu, () => hr(i, n, o), 1); }
function Tv() { let e = g(), t = M(); if (!q(2, e, t))
    return; Nt(_(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function ed(e, t, n, o) { let r = g(), i = fe(); if (U(r, i, t)) {
    let s = _(), a = Ne();
    UM(a, r, e, t, n, o);
} return ed; }
function Mv() { return g()[Q][L]; }
var pl = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function yc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function sb(e, t, n) { let o, r, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = yc(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = yc(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let m = n(i, l), v = n(s, f), E = n(i, u);
        if (Object.is(E, v)) {
            let R = n(c, p);
            Object.is(R, m) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (o ??= new Hi, r ??= Pp(e, i, s, n), hl(e, o, i, E))
            e.updateValue(i, u), i++, s++;
        else if (r.has(E))
            o.set(m, e.detach(i)), s--;
        else {
            let R = e.create(i, t[i]);
            e.attach(i, R), i++, s++;
        }
    }
    for (; i <= c;)
        Op(e, o, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = yc(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            o ??= new Hi, r ??= Pp(e, i, s, n);
            let p = n(i, d);
            if (hl(e, o, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!r.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                o.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        Op(e, o, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); o?.forEach(c => { e.destroy(c); }); }
function hl(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Op(e, t, n, o, r) { if (hl(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Pp(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var Hi = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function _v(e, t, n, o, r, i, s, a) { se("NgControlFlow"); let c = g(), l = _(), u = ie(l.consts, i); return qt(c, l, e, t, n, o, r, u, 256, s, a), Fs; }
function Fs(e, t, n, o, r, i, s, a) { se("NgControlFlow"); let c = g(), l = _(), u = ie(l.consts, i); return qt(c, l, e, t, n, o, r, u, 512, s, a), Fs; }
function Nv(e, t) { se("NgControlFlow"); let n = g(), o = fe(), r = n[o] !== x ? n[o] : -1, i = r !== -1 ? Vi(n, I + r) : void 0, s = 0; if (U(n, o, e)) {
    let a = S(null);
    try {
        if (i !== void 0 && Iu(i, s), e !== -1) {
            let c = I + e, l = Vi(n, c), u = vl(n[y], c), d = Rm(l, u, n), f = Qn(n, u, t, { dehydratedView: d });
            Zn(l, f, s, Gt(u, d));
        }
    }
    finally {
        S(a);
    }
}
else if (i !== void 0) {
    let a = im(i, s);
    a !== void 0 && (a[L] = t);
} }
var gl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - B; }
};
function wv(e) { return e; }
function bv(e, t) { return t; }
var ml = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function Sv(e, t, n, o, r, i, s, a, c, l, u, d, f) { se("NgControlFlow"); let p = g(), h = _(), m = c !== void 0, v = g(), E = a ? s.bind(v[Q][L]) : s, R = new ml(m, E); v[I + e] = R, qt(p, h, e + 1, t, n, o, r, ie(h.consts, i), 256), m && qt(p, h, e + 2, c, l, u, d, ie(h.consts, f), 512); }
var yl = class extends pl {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - B; }
    at(t) { return this.getLView(t)[L].$implicit; }
    attach(t, n) { let o = n[ee]; this.needsIndexUpdate ||= t !== this.length, Zn(this.lContainer, n, t, Gt(this.templateTNode, o)); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, ab(this.lContainer, t); }
    create(t, n) { let o = Vo(this.lContainer, this.templateTNode.tView.ssrId), r = Qn(this.hostLView, this.templateTNode, new gl(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { ar(t[y], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[L].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[L].$index = t; }
    getLView(t) { return cb(this.lContainer, t); }
};
function Rv(e) { let t = S(null), n = te(); try {
    let o = g(), r = o[y], i = o[n], s = n + 1, a = Vi(o, s);
    if (i.liveCollection === void 0) {
        let l = vl(r, s);
        i.liveCollection = new yl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (sb(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = fe(), u = c.length === 0;
        if (U(o, l, u)) {
            let d = n + 2, f = Vi(o, d);
            if (u) {
                let p = vl(r, d), h = Rm(f, p, o), m = Qn(o, p, void 0, { dehydratedView: h });
                Zn(f, m, 0, Gt(p, h));
            }
            else
                r.firstUpdatePass && Ms(f), Iu(f, 0);
        }
    }
}
finally {
    S(t);
} }
function Vi(e, t) { return e[t]; }
function ab(e, t) { return jo(e, t); }
function cb(e, t) { return im(e, t); }
function vl(e, t) { return gt(e, t); }
function td(e, t, n) { let o = g(), r = fe(); if (U(o, r, t)) {
    let i = _(), s = Ne();
    fu(s, o, e, t, o[T], n);
} return td; }
function Il(e, t, n, o, r) { yu(t, e, n, r ? "class" : "style", o); }
function js(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? _u(s, r, 2, t, hu, Gr(), n, o) : i.data[s]; if (gs(a, r, e, t, rd), sn(a)) {
    let c = r[y];
    hs(c, r, a), Zl(c, a, r);
} return o != null && zn(r, a), js; }
function Hs() { let e = _(), t = M(), n = ms(t); return e.firstCreatePass && Nu(e, n), Na(n) && Sa(), _a(), n.classesWithoutHost != null && pC(n) && Il(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && hC(n) && Il(e, n, g(), n.stylesWithoutHost, !1), Hs; }
function nd(e, t, n, o) { return js(e, t, n, o), Hs(), nd; }
function Vs(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? Fm(s, i, 2, t, n, o) : i.data[s]; return gs(a, r, e, t, rd), o != null && zn(r, a), Vs; }
function Bs() { let e = M(), t = ms(e); return Na(t) && Sa(), _a(), Bs; }
function od(e, t, n, o) { return Vs(e, t, n, o), Bs(), od; }
var rd = (e, t, n, o, r) => (Ae(!0), us(t[T], o, qa()));
function lb(e, t, n, o, r) { let i = !cs(t, n); if (Ae(i), i)
    return us(t[T], o, qa()); let s = t[ee], a = cr(s, e, t, n); return Xh(s, r) && is(s, r, a.nextSibling), s && (Al(n) || Mh(a)) && Ee(n) && (Mf(n), kg(a)), a; }
function kv() { rd = lb; }
function $s(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? _u(i, o, 8, "ng-container", hu, Gr(), t, n) : r.data[i]; if (gs(s, o, e, "ng-container", cd), sn(s)) {
    let a = o[y];
    hs(a, o, s), Zl(a, s, o);
} return n != null && zn(o, s), $s; }
function gr() { let e = _(), t = M(), n = ms(t); return e.firstCreatePass && Nu(e, n), gr; }
function id(e, t, n) { return $s(e, t, n), gr(), id; }
function Us(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? Fm(i, r, 8, "ng-container", t, n) : r.data[i]; return gs(s, o, e, "ng-container", cd), n != null && zn(o, s), Us; }
function sd() { let e = M(), t = ms(e); return gr; }
function ad(e, t, n) { return Us(e, t, n), sd(), ad; }
var cd = (e, t, n, o, r) => (Ae(!0), ou(t[T], ""));
function ub(e, t, n, o, r) { let i, s = !cs(t, n); if (Ae(s), s)
    return ou(t[T], ""); let a = t[ee], c = cr(a, e, t, n), l = Jh(a, r); return is(a, r, c), i = Cs(l, c), i; }
function Av() { cd = ub; }
function xv() { return g(); }
function ld(e, t, n) { let o = g(), r = fe(); if (U(o, r, t)) {
    let i = _(), s = Ne();
    pu(s, o, e, t, o[T], n);
} return ld; }
function ud(e, t, n) { let o = g(), r = fe(); if (U(o, r, t)) {
    let i = _(), s = Ne(), a = Wr(i.data), c = Qg(a, s, o);
    pu(s, o, e, t, c, n);
} return ud; }
var jt = void 0;
function db(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var fb = ["en", [["a", "p"], ["AM", "PM"], jt], [["AM", "PM"], jt, jt], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], jt, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], jt, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", jt, "{1} 'at' {0}", jt], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", db], Mn = {};
function pb(e, t, n) { typeof t != "string" && (n = t, t = e[xn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Mn[t] = e, n && (Mn[t][xn.ExtraData] = n); }
function dd(e) { let t = mb(e), n = Lp(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Lp(o), n)
    return n; if (o === "en")
    return fb; throw new N(701, !1); }
function hb(e) { return dd(e)[xn.CurrencyCode] || null; }
function Ov(e) { return dd(e)[xn.PluralCase]; }
function Lp(e) { return e in Mn || (Mn[e] = ye.ng && ye.ng.common && ye.ng.common.locales && ye.ng.common.locales[e]), Mn[e]; }
function gb() { Mn = {}; }
var xn = function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; }(xn || {});
function mb(e) { return e.toLowerCase().replace(/_/g, "-"); }
var yb = ["zero", "one", "two", "few", "many"];
function vb(e, t) { let n = Ov(t)(parseInt(e, 10)), o = yb[n]; return o !== void 0 ? o : "other"; }
var mr = "en-US", Ib = "USD", Pv = { marker: "element" }, Lv = { marker: "ICU" }, Ze = function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; }(Ze || {}), Fv = mr;
function jv(e) { typeof e == "string" && (Fv = e.toLowerCase().replace(/_/g, "-")); }
function Eb() { return Fv; }
var zo = 0, So = 0;
function Db(e) { e && (zo = zo | 1 << Math.min(So, 31)), So++; }
function Cb(e, t, n) { if (So > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Be() - So - 1;
    $v(e, t, r, i, zo);
} zo = 0, So = 0; }
function Hv(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return ou(o, t);
    case Node.TEXT_NODE: return nu(o, t);
    case Node.ELEMENT_NODE: return us(o, t, null);
} }
var Ro = (e, t, n, o) => (Ae(!0), Hv(e, n, o));
function Tb(e, t, n, o) { let r = e[ee], i = t - I, s = !Ts() || !r || vo() || as(r, i); return Ae(s), s ? Hv(e, n, o) : hm(r, i); }
function Vv() { Ro = Tb; }
function Mb(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Ze.COMMENT) === Ze.COMMENT, l = (s & Ze.APPEND_EAGERLY) === Ze.APPEND_EAGERLY, u = s >>> Ze.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Ro(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Eo()), l && n !== null && f && Ut(r, n, d, o, !1);
} }
function Bv(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Ro(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = S_(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = k(n[l])), d !== null) {
                    let m = R_(c), v = n[m];
                    Ut(r, d, v, u, !1);
                    let E = _o(e, m);
                    if (E !== null && typeof E == "object") {
                        let R = Ds(E, n);
                        R !== null && Bv(e, E.create[R], n, n[E.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                gu(r, Ot(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case Lv:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Ro(n, u, l, Node.COMMENT_NODE);
                    we(p, n);
                }
                break;
            case Pv:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Ro(n, f, d, Node.ELEMENT_NODE);
                    we(p, n);
                }
                break;
            default:
        }
} }
function $v(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += C(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? gu(t[T], t[d], null, h, f, c, p) : fu(h, t, f, c, t[T], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && Sg(t[T], m, c);
                            break;
                        case 2:
                            _b(e, _o(e, d), t, c);
                            break;
                        case 3:
                            Fp(e, _o(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = _o(e, l);
            t[u.currentCaseLViewIndex] < 0 && Fp(e, u, o, t);
        }
    }
    i += a;
} }
function Fp(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = zo;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), $v(e, o, t.update[r], n, i);
} }
function _b(e, t, n, o) { let r = Nb(t, o); if (Ds(t, n) !== r && (Uv(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && Bv(e, t.create[r], n, s), Q_(n, t.anchorIdx, r);
} }
function Uv(e, t, n) { let o = Ds(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Ot(s, n);
            a !== null && ir(n[T], a);
        }
        else
            Uv(e, _o(e, ~s), n);
    }
} }
function Nb(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = vb(t, Eb());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var Bi = /�(\d+):?\d*�/gi, wb = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, bb = /�(\d+)�/, Gv = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, ko = "\uFFFD", Sb = /�\/?\*(\d+:\d+)�/gi, Rb = /�(\/?[#*]\d+):?\d*�/gi, kb = /\uE500/g;
function Ab(e) { return e.replace(kb, " "); }
function xb(e, t, n, o, r, i) { let s = an(), a = [], c = [], l = [[]], u = [[]]; r = Fb(r, i); let d = Ab(r).split(Rb); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = El(p);
        for (let m = 0; m < h.length; m++) {
            let v = h[m];
            if ((m & 1) === 0) {
                let E = v;
                E !== "" && Ob(u[0], e, s, l[0], a, c, n, E);
            }
            else {
                let E = v;
                if (typeof E != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let ae = Wv(e, s, l[0], n, a, "", !0).index;
                zv(u[0], e, n, c, t, E, ae);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), v = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), Ve(an(), !1);
        else {
            let E = b_(e, l[0], v);
            l.unshift([]), Ve(E, !0);
            let R = { kind: 2, index: v, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(R), u.unshift(R.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function Wv(e, t, n, o, r, i, s) { let a = sr(e, o, 1, null), c = a << Ze.SHIFT, l = an(); t === l && (l = null), l === null && (c |= Ze.APPEND_EAGERLY), s && (c |= Ze.COMMENT, wM(A_)), r.push(c, i === null ? "" : i); let u = Eu(e, a, s ? 32 : 1, i === null ? "" : i, null); um(n, u); let d = u.index; return Ve(u, !1), l !== null && t !== l && w_(l, d), u; }
function Ob(e, t, n, o, r, i, s, a) { let c = a.match(Bi), u = Wv(t, n, o, s, r, c ? null : a, !1).index; c && Ao(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function Pb(e, t, n) { let r = M().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (wb.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Ao(i, c, r, a, Lb(i), null);
        }
    }
    e.data[t] = i;
} }
function Ao(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(Bi), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | qv(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function Lb(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function qv(e) { return 1 << Math.min(e, 31); }
function jp(e) { let t, n = "", o = 0, r = !1, i; for (; (t = Sb.exec(e)) !== null;)
    r ? t[0] === `${ko}/*${i}${ko}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function Fb(e, t) { if (fm(t))
    return jp(e); {
    let n = e.indexOf(`:${t}${ko}`) + 2 + t.toString().length, o = e.search(new RegExp(`${ko}\\/\\*\\d+:${t}${ko}`));
    return jp(e.substring(n, o));
} }
function zv(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: sr(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; Bb(o, i, s), N_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let v = f[m];
        if (typeof v != "string") {
            let E = p.push(v) - 1;
            f[m] = `<!--\uFFFD${E}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = Hb(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && $b(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function jb(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(Gv, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = El(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = El(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function El(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            Gv.test(c) ? o.push(jb(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function Hb(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = ug(Mt()).getInertBodyElement(a), h = Wc(p) || p; return h ? Qv(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function Qv(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = sr(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, v = m.tagName.toLowerCase();
            if (Uc.hasOwnProperty(v)) {
                vc(i, Pv, v, l, h), t.data[h] = v;
                let Pe = m.attributes;
                for (let oa = 0; oa < Pe.length; oa++) {
                    let bt = Pe.item(oa), Yd = bt.name.toLowerCase();
                    !!bt.value.match(Bi) ? hg.hasOwnProperty(Yd) && (Kl[Yd] ? Ao(a, bt.value, h, bt.name, 0, ls) : Ao(a, bt.value, h, bt.name, 0, null)) : Ub(i, h, bt);
                }
                let ue = { kind: 1, index: h, children: [] };
                e.push(ue), f = Qv(ue.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, Hp(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let E = p.textContent || "", R = E.match(Bi);
            vc(i, null, R ? "" : E, l, h), Hp(s, h, d), R && (f = Ao(a, E, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let ae = bb.exec(p.textContent || "");
            if (ae) {
                let Pe = parseInt(ae[1], 10), ue = u[Pe];
                vc(i, Lv, "", l, h), zv(e, t, o, r, l, ue, h), Vb(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Hp(e, t, n) { n === 0 && e.push(t); }
function Vb(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function Bb(e, t, n) { e.push(qv(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function $b(e, t, n) { e.push(t, 1, n << 2 | 3); }
function vc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, k_(0, o, r)); }
function Ub(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var Vp = 0, Gb = /\[(�.+?�?)\]/, Wb = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, qb = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, zb = /{([A-Z0-9_]+)}/g, Qb = /�I18N_EXP_(ICU(_\d+)?)�/g, Zb = /\/\*/, Yb = /\d+\:(\d+)/;
function Kb(e, t = {}) { let n = e; if (Gb.test(e)) {
    let o = {}, r = [Vp];
    n = n.replace(Wb, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let v = m.match(Yb), E = v ? parseInt(v[1], 10) : Vp, R = Zb.test(m); l.push([E, R, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(qb, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(zb, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(Qb, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function fd(e, t, n = -1) { let o = _(), r = g(), i = I + e, s = ie(o.consts, t), a = an(); if (o.firstCreatePass && xb(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[Q];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[re] ? null : a, u = jg(o, l, r), d = a && a.type & 8 ? r[a.index] : null; $_(r, i, a, n), Mb(r, c.create, u, d), Ha(!0); }
function pd() { Ha(!1); }
function Zv(e, t, n) { fd(e, t, n), pd(); }
function Yv(e, t) { let n = _(), o = ie(n.consts, t); Pb(n, e + I, o); }
function hd(e) { let t = g(); return Db(U(t, fe(), e)), hd; }
function Kv(e) { Cb(_(), g(), e + I); }
function Jv(e, t = {}) { return Kb(e, t); }
function gd(e, t, n) { let o = g(), r = _(), i = M(); return vd(r, o, o[T], i, e, t, n), gd; }
function md(e, t) { let n = M(), o = g(), r = _(), i = Wr(r.data), s = Qg(i, n, o); return vd(r, o, s, n, e, t), md; }
function yd(e, t, n) { let o = g(), r = _(), i = M(); return (i.type & 3 || n) && Vm(i, r, o, n, o[T], e, t, wo(i, o, t)), yd; }
function vd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= wo(o, t, i), Vm(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= wo(o, t, i), xi(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= wo(o, t, i), xi(o, t, d, r, r, c);
} }
function Xv(e = 1) { return Sf(e); }
function Jb(e, t) { let n = null, o = mM(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? bg(e, i, !0) : IM(o, i))
        return r;
} return n; }
function eI(e) { let t = g()[Q][re]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = ao(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? Jb(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function tI(e, t = 0, n, o, r, i) { let s = g(), a = _(), c = o ? e + 1 : null; c !== null && qt(s, a, c, o, r, i, null, n); let l = Jt(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), xa(); let d = !s[ee] || vo(); s[Q][re].projection[l.projection] === null && c !== null ? Xb(s, a, c) : d && !Gn(l) && AM(a, s, l); }
function Xb(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = Vo(i, r.tView.ssrId), a = Qn(e, r, void 0, { dehydratedView: s }); Zn(i, a, 0, Gt(r, s)); }
function nI(e, t, n, o) { Xm(e, t, n, o); }
function oI(e, t, n) { Jm(e, t, n); }
function rI(e) { let t = g(), n = _(), o = qr(); Io(o + 1); let r = Su(n, o); if (e.dirty && gf(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = ty(t, o);
        e.reset(i, Th), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function iI() { return bu(g(), qr()); }
function sI(e, t, n, o, r) { ny(t, Xm(e, n, o, r)); }
function aI(e, t, n, o) { ny(e, Jm(t, n, o)); }
function cI(e = 1) { Io(qr() + e); }
function lI(e) { let t = Oa(); return mt(t, I + e); }
function ii(e, t) { return e << 17 | t << 2; }
function zt(e) { return e >> 17 & 32767; }
function eS(e) { return (e & 2) == 2; }
function tS(e, t) { return e & 131071 | t << 17; }
function Dl(e) { return e | 2; }
function On(e) { return (e & 131068) >> 2; }
function Ic(e, t) { return e & -131069 | t << 2; }
function nS(e) { return (e & 1) === 1; }
function Cl(e) { return e | 1; }
function oS(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = zt(s), c = On(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || xr(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = zt(e[a + 1]);
        e[o + 1] = ii(f, a), f !== 0 && (e[f + 1] = Ic(e[f + 1], o)), e[a + 1] = tS(e[a + 1], o);
    }
    else
        e[o + 1] = ii(a, 0), a !== 0 && (e[a + 1] = Ic(e[a + 1], o)), a = o;
else
    e[o + 1] = ii(c, 0), a === 0 ? a = o : e[c + 1] = Ic(e[c + 1], o), c = o; l && (e[o + 1] = Dl(e[o + 1])), Bp(e, u, o, !0), Bp(e, u, o, !1), rS(t, u, e, o, i), s = ii(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function rS(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && xr(i, t) >= 0 && (n[o + 1] = Cl(n[o + 1])); }
function Bp(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? zt(r) : On(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    iS(c, t) && (a = !0, e[s + 1] = o ? Cl(l) : Dl(l)), s = o ? zt(l) : On(l);
} a && (e[n + 1] = o ? Dl(r) : Cl(r)); }
function iS(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? xr(e, t) >= 0 : !1; }
var X = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function uI(e) { return e.substring(X.key, X.keyEnd); }
function sS(e) { return e.substring(X.value, X.valueEnd); }
function aS(e) { return pI(e), dI(e, Pn(e, 0, X.textEnd)); }
function dI(e, t) { let n = X.textEnd; return n === t ? -1 : (t = X.keyEnd = lS(e, X.key = t, n), Pn(e, t, n)); }
function cS(e) { return pI(e), fI(e, Pn(e, 0, X.textEnd)); }
function fI(e, t) { let n = X.textEnd, o = X.key = Pn(e, t, n); return n === o ? -1 : (o = X.keyEnd = uS(e, o, n), o = $p(e, o, n, 58), o = X.value = Pn(e, o, n), o = X.valueEnd = dS(e, o, n), $p(e, o, n, 59)); }
function pI(e) { X.key = 0, X.keyEnd = 0, X.value = 0, X.valueEnd = 0, X.textEnd = e.length; }
function Pn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function lS(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function uS(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function $p(e, t, n, o) { return t = Pn(e, t, n), t < n && t++, t; }
function dS(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Up(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Up(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Up(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Id(e, t, n) { return mI(e, t, n, !1), Id; }
function Ed(e, t) { return mI(e, t, null, !0), Ed; }
function hI(e) { yI(EI, fS, e, !1); }
function fS(e, t) { for (let n = cS(t); n >= 0; n = fI(t, n))
    EI(e, uI(t), sS(t)); }
function gI(e) { yI(IS, pS, e, !0); }
function pS(e, t) { for (let n = aS(t); n >= 0; n = dI(t, n))
    co(e, uI(t), !0); }
function mI(e, t, n, o) { let r = g(), i = _(), s = $e(2); if (i.firstUpdatePass && II(i, e, s, o), t !== x && U(r, s, t)) {
    let a = i.data[te()];
    DI(i, a, r, r[T], e, r[s + 1] = DS(t, n), o, s);
} }
function yI(e, t, n, o) { let r = _(), i = $e(2); r.firstUpdatePass && II(r, null, i, o); let s = g(); if (n !== x && U(s, i, n)) {
    let a = r.data[te()];
    if (CI(a, o) && !vI(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = _r(c, n || "")), Il(r, a, s, n, o);
    }
    else
        ES(r, a, s, s[T], s[i + 1], s[i + 1] = vS(e, t, n), o, i);
} }
function vI(e, t) { return t >= e.expandoStartIndex; }
function II(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[te()], s = vI(e, n);
    CI(i, o) && t === null && !s && (t = !1), t = hS(r, i, t, o), oS(r, i, t, n, s, o);
} }
function hS(e, t, n, o) { let r = Wr(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Ec(null, e, t, n, o), n = Qo(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Ec(r, e, t, n, o), i === null) {
            let c = gS(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Ec(null, e, t, c[1], o), c = Qo(c, t.attrs, o), mS(e, t, o, c));
        }
        else
            i = yS(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function gS(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (On(o) !== 0)
    return e[zt(o)]; }
function mS(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[zt(r)] = o; }
function yS(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = Qo(o, s, n);
} return Qo(o, t.attrs, n); }
function Ec(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = Qo(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function Qo(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), co(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function vS(e, t, n) { if (n == null || n === "")
    return O; let o = [], r = ot(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function EI(e, t, n) { co(e, t, ot(n)); }
function IS(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && co(e, o, n); }
function ES(e, t, n, o, r, i, s, a) { r === x && (r = O); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && DI(e, t, n, o, h, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function DI(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = nS(l) ? Gp(c, t, n, r, On(l), s) : void 0; if (!$i(u)) {
    $i(i) || eS(l) && (i = Gp(c, null, n, r, a, s));
    let d = Ot(te(), n);
    OM(o, s, d, r, i);
} }
function Gp(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === x && (f = d ? O : void 0);
    let p = d ? Ar(f, o) : u === o ? f : void 0;
    if (l && !$i(p) && (p = Ar(c, o)), $i(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? zt(h) : On(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Ar(c, o));
} return a; }
function $i(e) { return e !== void 0; }
function DS(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Xt(ot(e)))), e; }
function CI(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function TI(e, t = "") { let n = g(), o = _(), r = e + I, i = o.firstCreatePass ? Jt(o, r, 1, t, null) : o.data[r], s = MI(o, n, i, t, e); n[r] = s, Eo() && uu(o, n, s, i), Ve(i, !1); }
var MI = (e, t, n, o, r) => (Ae(!0), nu(t[T], o));
function CS(e, t, n, o, r) { let i = !cs(t, n); if (Ae(i), i)
    return nu(t[T], o); let s = t[ee]; return cr(s, e, t, n); }
function _I() { MI = CS; }
function NI(e, t) { let n = !1, o = Be(); for (let i = 1; i < t.length; i += 2)
    n = U(e, o++, t[i]) || n; if (ja(o), !n)
    return x; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += C(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function wI(e, t, n, o = "") { return U(e, fe(), n) ? t + C(n) + o : x; }
function bI(e, t, n, o, r, i = "") { let s = Be(), a = Wt(e, s, n, r); return $e(2), a ? t + C(n) + o + C(r) + i : x; }
function SI(e, t, n, o, r, i, s, a = "") { let c = Be(), l = bs(e, c, n, r, s); return $e(3), l ? t + C(n) + o + C(r) + i + C(s) + a : x; }
function RI(e, t, n, o, r, i, s, a, c, l = "") { let u = Be(), d = be(e, u, n, r, s, c); return $e(4), d ? t + C(n) + o + C(r) + i + C(s) + a + C(c) + l : x; }
function kI(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Be(), p = be(e, f, n, r, s, c); return p = U(e, f + 4, u) || p, $e(5), p ? t + C(n) + o + C(r) + i + C(s) + a + C(c) + l + C(u) + d : x; }
function AI(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Be(), m = be(e, h, n, r, s, c); return m = Wt(e, h + 4, u, f) || m, $e(6), m ? t + C(n) + o + C(r) + i + C(s) + a + C(c) + l + C(u) + d + C(f) + p : x; }
function xI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m = "") { let v = Be(), E = be(e, v, n, r, s, c); return E = bs(e, v + 4, u, f, h) || E, $e(7), E ? t + C(n) + o + C(r) + i + C(s) + a + C(c) + l + C(u) + d + C(f) + p + C(h) + m : x; }
function OI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v, E = "") { let R = Be(), ae = be(e, R, n, r, s, c); return ae = be(e, R + 4, u, f, h, v) || ae, $e(8), ae ? t + C(n) + o + C(r) + i + C(s) + a + C(c) + l + C(u) + d + C(f) + p + C(h) + m + C(v) + E : x; }
function Dd(e) { return Gs("", e), Dd; }
function Gs(e, t, n) { let o = g(), r = wI(o, e, t, n); return r !== x && at(o, te(), r), Gs; }
function Cd(e, t, n, o, r) { let i = g(), s = bI(i, e, t, n, o, r); return s !== x && at(i, te(), s), Cd; }
function Td(e, t, n, o, r, i, s) { let a = g(), c = SI(a, e, t, n, o, r, i, s); return c !== x && at(a, te(), c), Td; }
function Md(e, t, n, o, r, i, s, a, c) { let l = g(), u = RI(l, e, t, n, o, r, i, s, a, c); return u !== x && at(l, te(), u), Md; }
function _d(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = kI(d, e, t, n, o, r, i, s, a, c, l, u); return f !== x && at(d, te(), f), _d; }
function Nd(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = AI(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== x && at(p, te(), h), Nd; }
function wd(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let m = g(), v = xI(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== x && at(m, te(), v), wd; }
function bd(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v) { let E = g(), R = OI(E, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); return R !== x && at(E, te(), R), bd; }
function Sd(e) { let t = g(), n = NI(t, e); return n !== x && at(t, te(), n), Sd; }
function at(e, t, n) { let o = Ot(t, e); Sg(e[T], o, n); }
function Rd(e, t, n) { Za(t) && (t = t()); let o = g(), r = fe(); if (U(o, r, t)) {
    let i = _(), s = Ne();
    fu(s, o, e, t, o[T], n);
} return Rd; }
function PI(e, t) { let n = Za(e); return n && e.set(t), n; }
function kd(e, t) { let n = g(), o = _(), r = M(); return vd(o, n, n[T], r, e, t), kd; }
var LI = {};
function Ad(e) { let t = _(), n = g(), o = e + I, r = Jt(t, o, 128, null, null); return Ve(r, !1), mo(t, n, o, LI), Ad; }
function FI(e) { se("NgLet"); let t = _(), n = g(), o = te(); return mo(t, n, o, e), e; }
function jI(e) { let t = Oa(), n = mt(t, I + e); if (n === LI)
    throw new N(314, !1); return n; }
function HI(e, t) { let n = _(), o = g(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = gt(n, s + I), d = Ot(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function VI(e) { return U(g(), fe(), e) ? C(e) : x; }
function BI(e, t, n = "") { return wI(g(), e, t, n); }
function $I(e, t, n, o, r = "") { return bI(g(), e, t, n, o, r); }
function UI(e, t, n, o, r, i, s = "") { return SI(g(), e, t, n, o, r, i, s); }
function GI(e, t, n, o, r, i, s, a, c = "") { return RI(g(), e, t, n, o, r, i, s, a, c); }
function WI(e, t, n, o, r, i, s, a, c, l, u = "") { return kI(g(), e, t, n, o, r, i, s, a, c, l, u); }
function qI(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return AI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function zI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return xI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function QI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v = "") { return OI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); }
function ZI(e) { return NI(g(), e); }
function TS(e, t, n) { let o = _(); if (o.firstCreatePass) {
    let r = ge(e);
    Tl(n, o.data, o.blueprint, r, !0), Tl(t, o.data, o.blueprint, r, !1);
} }
function Tl(e, t, n, o, r) { if (e = H(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        Tl(e[i], t, n, o, r);
else {
    let i = _(), s = g(), a = M(), c = Pr(e) ? e : H(e.provide), l = uf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (Pr(e) || !e.multi) {
        let p = new $t(l, r, Kn), h = Cc(c, t, r ? u : u + f, d);
        h === -1 ? (bc(Ci(a, s), i, c), Dc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Cc(c, t, u + f, d), h = Cc(c, t, u, u + f), m = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !m) {
            bc(Ci(a, s), i, c);
            let E = NS(r ? _S : MS, n.length, r, o, l);
            !r && v && (n[h].providerFactory = E), Dc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(E), s.push(E);
        }
        else {
            let E = YI(n[r ? h : p], l, !r && o);
            Dc(i, e, p > -1 ? p : h, E);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function Dc(e, t, n, o) { let r = Pr(t), i = cf(t); if (r || i) {
    let c = (i ? H(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function YI(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Cc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function MS(e, t, n, o, r) { return Ml(this.multi, []); }
function _S(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Oo(o, o[y], this.providerFactory.index, r);
    s = c.slice(0, a), Ml(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], Ml(i, s); return s; }
function Ml(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function NS(e, t, n, o, r) { let i = new $t(e, n, Kn); return i.multi = [], i.index = t, i.componentProviders = 0, YI(i, r, o && !n), i; }
function KI(e, t = []) { return n => { n.providersResolver = (o, r) => TS(o, r ? r(e) : e, t); }; }
function JI(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function XI(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = Fi(t, py), o.pipeDefs = Fi(n, Fe); }
function eE(e, t) { return Ge(() => { let n = Or(e); n.declarations = si(t.declarations || O), n.imports = si(t.imports || O), n.exports = si(t.exports || O), t.bootstrap && (n.bootstrap = si(t.bootstrap)), wn.registerNgModule(e, t); }); }
function si(e) { if (typeof e == "function")
    return e; let t = Re(e); return t.some(Nr) ? () => t.map(H).map(Wp) : t.map(Wp); }
function Wp(e) { return Mu(e) ? e.ngModule : e; }
function tE(e, t, n) { let o = ce() + e, r = g(); return r[o] === x ? We(r, o, n ? t.call(n) : t()) : ur(r, o); }
function nE(e, t, n, o) { return dE(g(), ce(), e, t, n, o); }
function oE(e, t, n, o, r) { return fE(g(), ce(), e, t, n, o, r); }
function rE(e, t, n, o, r, i) { return pE(g(), ce(), e, t, n, o, r, i); }
function iE(e, t, n, o, r, i, s) { return hE(g(), ce(), e, t, n, o, r, i, s); }
function sE(e, t, n, o, r, i, s, a) { let c = ce() + e, l = g(), u = be(l, c, n, o, r, i); return U(l, c + 4, s) || u ? We(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : ur(l, c + 5); }
function aE(e, t, n, o, r, i, s, a, c) { let l = ce() + e, u = g(), d = be(u, l, n, o, r, i); return Wt(u, l + 4, s, a) || d ? We(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : ur(u, l + 6); }
function cE(e, t, n, o, r, i, s, a, c, l) { let u = ce() + e, d = g(), f = be(d, u, n, o, r, i); return bs(d, u + 4, s, a, c) || f ? We(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : ur(d, u + 7); }
function lE(e, t, n, o, r, i, s, a, c, l, u) { let d = ce() + e, f = g(), p = be(f, d, n, o, r, i); return be(f, d + 4, s, a, c, l) || p ? We(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : ur(f, d + 8); }
function uE(e, t, n, o) { return gE(g(), ce(), e, t, n, o); }
function yr(e, t) { let n = e[t]; return n === x ? void 0 : n; }
function dE(e, t, n, o, r, i) { let s = t + n; return U(e, s, r) ? We(e, s + 1, i ? o.call(i, r) : o(r)) : yr(e, s + 1); }
function fE(e, t, n, o, r, i, s) { let a = t + n; return Wt(e, a, r, i) ? We(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : yr(e, a + 2); }
function pE(e, t, n, o, r, i, s, a) { let c = t + n; return bs(e, c, r, i, s) ? We(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : yr(e, c + 3); }
function hE(e, t, n, o, r, i, s, a, c) { let l = t + n; return be(e, l, r, i, s, a) ? We(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : yr(e, l + 4); }
function gE(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    U(e, s++, r[c]) && (a = !0); return a ? We(e, s, o.apply(i, r)) : yr(e, s); }
function mE(e, t) { let n = _(), o, r = e + I; n.firstCreatePass ? (o = wS(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = kr(o.type, !0)), s, a = Rt(Kn); try {
    let c = Di(!1), l = i();
    return Di(c), mo(n, g(), r, l), l;
}
finally {
    Rt(a);
} }
function wS(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function yE(e, t, n) { let o = e + I, r = g(), i = mt(r, o); return vr(r, o) ? dE(r, ce(), t, i.transform, n, i) : i.transform(n); }
function vE(e, t, n, o) { let r = e + I, i = g(), s = mt(i, r); return vr(i, r) ? fE(i, ce(), t, s.transform, n, o, s) : s.transform(n, o); }
function IE(e, t, n, o, r) { let i = e + I, s = g(), a = mt(s, i); return vr(s, i) ? pE(s, ce(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function EE(e, t, n, o, r, i) { let s = e + I, a = g(), c = mt(a, s); return vr(a, s) ? hE(a, ce(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function DE(e, t, n) { let o = e + I, r = g(), i = mt(r, o); return vr(r, o) ? gE(r, ce(), t, i.transform, n, i) : i.transform.apply(i, n); }
function vr(e, t) { return e[y].data[t].pure; }
function CE(e, t) { return Es(e, t); }
function TE(e, t) { return () => { try {
    return wn.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function ME(e, t) { let n = V(e); n !== null && (n.debugInfo = t); }
function _E(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function NE(e, t, n, o, r = null, i = null) { let s = V(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = bS(s, V(e)); if (e[en] = a, c.tView) {
    let l = HC().values();
    for (let u of l)
        He(u) && u[W] === null && mi(r, i, a, c, u);
} }
function bS(e, t) { let n = G({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function mi(e, t, n, o, r) { let i = r[y]; if (i === o.tView) {
    RS(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (Y(a)) {
        Z(a[P]) && mi(e, t, n, o, a[P]);
        for (let c = B; c < a.length; c++)
            mi(e, t, n, o, a[c]);
    }
    else
        Z(a) && mi(e, t, n, o, a);
} }
function SS(e, t) { e.componentReplaced?.(t.id); }
function RS(e, t, n, o, r) { let i = r[L], s = r[P], a = r[W], c = r[re], l = r[z].get($, null), u = () => { if (o.encapsulation === Xe.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = xg(n), f = ds(a, d, i, iu(n), s, c, null, null, null, null, null); kS(a, r, f, c.index), ar(r[y], r); let p = r[ze].rendererFactory; SS(p, o), f[T] = p.createRenderer(s, n), Lg(r[y], r), AS(c), ys(d, f, i), em(d, f, d.template, i); }; l === null ? qp(e, t, u) : l.run(() => qp(e, t, u)); }
function qp(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function kS(e, t, n, o) { for (let r = I; r < e[y].bindingStartIndex; r++) {
    let i = e[r];
    if ((Z(i) || Y(i)) && i[oe] === t) {
        i[oe] = n;
        break;
    }
} e[ft] === t && (e[ft] = n), e[uo] === t && (e[uo] = n), n[oe] = t[oe], t[oe] = null, e[o] = n; }
function AS(e) { if (e.projection !== null) {
    for (let t of e.projection)
        qi(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var le = { \u0275\u0275attribute: ed, \u0275\u0275defineComponent: fy, \u0275\u0275defineDirective: hy, \u0275\u0275defineInjectable: F, \u0275\u0275defineInjector: io, \u0275\u0275defineNgModule: Fu, \u0275\u0275definePipe: gy, \u0275\u0275directiveInject: Kn, \u0275\u0275getInheritedFactory: Ih, \u0275\u0275inject: Se, \u0275\u0275injectAttribute: zi, \u0275\u0275invalidFactory: Om, \u0275\u0275invalidFactoryDep: Rr, \u0275\u0275templateRefExtractor: CE, \u0275\u0275resetView: ka, \u0275\u0275HostDirectivesFeature: Ey, \u0275\u0275NgOnChangesFeature: oh, \u0275\u0275ProvidersFeature: KI, \u0275\u0275CopyDefinitionFeature: Iy, \u0275\u0275InheritDefinitionFeature: ju, \u0275\u0275ExternalStylesFeature: JI, \u0275\u0275nextContext: Xv, \u0275\u0275namespaceHTML: Wa, \u0275\u0275namespaceMathML: Ga, \u0275\u0275namespaceSVG: Ua, \u0275\u0275enableBindings: wa, \u0275\u0275disableBindings: ba, \u0275\u0275elementStart: js, \u0275\u0275elementEnd: Hs, \u0275\u0275element: nd, \u0275\u0275elementContainerStart: $s, \u0275\u0275elementContainerEnd: gr, \u0275\u0275domElement: od, \u0275\u0275domElementStart: Vs, \u0275\u0275domElementEnd: Bs, \u0275\u0275domElementContainer: ad, \u0275\u0275domElementContainerStart: Us, \u0275\u0275domElementContainerEnd: sd, \u0275\u0275domTemplate: Vu, \u0275\u0275domListener: yd, \u0275\u0275elementContainer: id, \u0275\u0275pureFunction0: tE, \u0275\u0275pureFunction1: nE, \u0275\u0275pureFunction2: oE, \u0275\u0275pureFunction3: rE, \u0275\u0275pureFunction4: iE, \u0275\u0275pureFunction5: sE, \u0275\u0275pureFunction6: aE, \u0275\u0275pureFunction7: cE, \u0275\u0275pureFunction8: lE, \u0275\u0275pureFunctionV: uE, \u0275\u0275getCurrentView: xv, \u0275\u0275restoreView: Ra, \u0275\u0275listener: gd, \u0275\u0275projection: tI, \u0275\u0275syntheticHostProperty: ud, \u0275\u0275syntheticHostListener: md, \u0275\u0275pipeBind1: yE, \u0275\u0275pipeBind2: vE, \u0275\u0275pipeBind3: IE, \u0275\u0275pipeBind4: EE, \u0275\u0275pipeBindV: DE, \u0275\u0275projectionDef: eI, \u0275\u0275domProperty: ld, \u0275\u0275property: td, \u0275\u0275pipe: mE, \u0275\u0275queryRefresh: rI, \u0275\u0275queryAdvance: cI, \u0275\u0275viewQuery: oI, \u0275\u0275viewQuerySignal: aI, \u0275\u0275loadQuery: iI, \u0275\u0275contentQuery: nI, \u0275\u0275contentQuerySignal: sI, \u0275\u0275reference: lI, \u0275\u0275classMap: gI, \u0275\u0275styleMap: hI, \u0275\u0275styleProp: Id, \u0275\u0275classProp: Ed, \u0275\u0275advance: Og, \u0275\u0275template: Hu, \u0275\u0275conditional: Nv, \u0275\u0275conditionalCreate: _v, \u0275\u0275conditionalBranchCreate: Fs, \u0275\u0275defer: tv, \u0275\u0275deferWhen: nv, \u0275\u0275deferOnIdle: sv, \u0275\u0275deferOnImmediate: lv, \u0275\u0275deferOnTimer: fv, \u0275\u0275deferOnHover: gv, \u0275\u0275deferOnInteraction: vv, \u0275\u0275deferOnViewport: Dv, \u0275\u0275deferPrefetchWhen: ov, \u0275\u0275deferPrefetchOnIdle: av, \u0275\u0275deferPrefetchOnImmediate: uv, \u0275\u0275deferPrefetchOnTimer: pv, \u0275\u0275deferPrefetchOnHover: mv, \u0275\u0275deferPrefetchOnInteraction: Iv, \u0275\u0275deferPrefetchOnViewport: Cv, \u0275\u0275deferHydrateWhen: rv, \u0275\u0275deferHydrateNever: iv, \u0275\u0275deferHydrateOnIdle: cv, \u0275\u0275deferHydrateOnImmediate: dv, \u0275\u0275deferHydrateOnTimer: hv, \u0275\u0275deferHydrateOnHover: yv, \u0275\u0275deferHydrateOnInteraction: Ev, \u0275\u0275deferHydrateOnViewport: Tv, \u0275\u0275deferEnableTimerScheduling: $y, \u0275\u0275repeater: Rv, \u0275\u0275repeaterCreate: Sv, \u0275\u0275repeaterTrackByIndex: wv, \u0275\u0275repeaterTrackByIdentity: bv, \u0275\u0275componentInstance: Mv, \u0275\u0275text: TI, \u0275\u0275textInterpolate: Dd, \u0275\u0275textInterpolate1: Gs, \u0275\u0275textInterpolate2: Cd, \u0275\u0275textInterpolate3: Td, \u0275\u0275textInterpolate4: Md, \u0275\u0275textInterpolate5: _d, \u0275\u0275textInterpolate6: Nd, \u0275\u0275textInterpolate7: wd, \u0275\u0275textInterpolate8: bd, \u0275\u0275textInterpolateV: Sd, \u0275\u0275i18n: Zv, \u0275\u0275i18nAttributes: Yv, \u0275\u0275i18nExp: hd, \u0275\u0275i18nStart: fd, \u0275\u0275i18nEnd: pd, \u0275\u0275i18nApply: Kv, \u0275\u0275i18nPostprocess: Jv, \u0275\u0275resolveWindow: _g, \u0275\u0275resolveDocument: Ng, \u0275\u0275resolveBody: eu, \u0275\u0275setComponentScope: XI, \u0275\u0275setNgModuleScope: eE, \u0275\u0275registerNgModuleType: Ou, \u0275\u0275getComponentDepsFactory: TE, \u0275setClassDebugInfo: ME, \u0275\u0275declareLet: Ad, \u0275\u0275storeLet: FI, \u0275\u0275readContextLet: jI, \u0275\u0275attachSourceLocations: HI, \u0275\u0275interpolate: VI, \u0275\u0275interpolate1: BI, \u0275\u0275interpolate2: $I, \u0275\u0275interpolate3: UI, \u0275\u0275interpolate4: GI, \u0275\u0275interpolate5: WI, \u0275\u0275interpolate6: qI, \u0275\u0275interpolate7: zI, \u0275\u0275interpolate8: QI, \u0275\u0275interpolateV: ZI, \u0275\u0275sanitizeHtml: yg, \u0275\u0275sanitizeStyle: vg, \u0275\u0275sanitizeResourceUrl: Xl, \u0275\u0275sanitizeScript: Ig, \u0275\u0275sanitizeUrl: Jl, \u0275\u0275sanitizeUrlOrResourceUrl: Cg, \u0275\u0275trustConstantHtml: Eg, \u0275\u0275trustConstantResourceUrl: Dg, \u0275\u0275validateIframeAttribute: cy, forwardRef: la, resolveForwardRef: H, \u0275\u0275twoWayProperty: Rd, \u0275\u0275twoWayBindingSet: PI, \u0275\u0275twoWayListener: kd, \u0275\u0275replaceMetadata: NE, \u0275\u0275getReplaceMetadataURL: _E }, vn = null;
function wE(e) { vn !== null && (e.defaultEncapsulation !== vn.defaultEncapsulation || e.preserveWhitespaces !== vn.preserveWhitespaces) || (vn = e); }
function xS() { return vn; }
function OS() { vn = null; }
var xo = [];
function PS(e, t) { xo.push({ moduleType: e, ngModule: t }); }
var Tc = !1;
function bE() { if (!Tc) {
    Tc = !0;
    try {
        for (let e = xo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = xo[e];
            n.declarations && n.declarations.every(SE) && (xo.splice(e, 1), VS(t, n));
        }
    }
    finally {
        Tc = !1;
    }
} }
function SE(e) { return Array.isArray(e) ? e.every(SE) : !!H(e); }
function RE(e, t = {}) { kE(e, t), t.id !== void 0 && Ou(e, t.id), PS(e, t); }
function kE(e, t, n = !1) { let o = Re(t.declarations || O), r = null; Object.defineProperty(e, da, { configurable: !0, get: () => (r === null && (r = J({ usage: 0, kind: "NgModule", type: e }).compileNgModule(le, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Re(t.bootstrap || O).map(H), declarations: o.map(H), imports: Re(t.imports || O).map(H).map(zp), exports: Re(t.exports || O).map(H).map(zp), schemas: t.schemas ? Re(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, lt, { get: () => { if (i === null) {
        let a = J({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(le, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: Qi(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, ua, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || O, imports: [(t.imports || O).map(H), (t.exports || O).map(H)] };
        s = J({ usage: 0, kind: "NgModule", type: e }).compileInjector(le, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function LS(e, t) { let n = `Unexpected "${ve(e)}" found in the "declarations" array of the`, o = `"${ve(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var FS = new WeakMap, jS = new WeakMap;
function HS() { FS = new WeakMap, jS = new WeakMap, xo.length = 0, nw.clear(); }
function VS(e, t) { let n = Re(t.declarations || O), o = Od(e); n.forEach(r => { if (r = H(r), r.hasOwnProperty(en)) {
    let s = V(r);
    xd(s, o);
}
else
    !r.hasOwnProperty(br) && !r.hasOwnProperty(Sr) && (r.ngSelectorScope = e); }); }
function xd(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(en) ? V(n) : Me(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Fe(n)), e.schemas = t.schemas, e.tView = null; }
function Od(e) { if (Ht(e)) {
    let t = wn.getNgModuleScope(e), n = Or(e);
    return G({ schemas: n.schemas || null }, t);
}
else if (lo(e)) {
    if ((V(e) || Me(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Fe(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function zp(e) { return Mu(e) ? e.ngModule : e; }
var Mc = 0;
function AE(e, t) {
    let n = null;
    WN(e, t), OE(e, t), Object.defineProperty(e, en, { get: () => {
            if (n === null) {
                let o = J({ usage: 0, kind: "component", type: e });
                if (ry(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = xS(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Xe.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = PE(e, t), l = Le(G({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || O, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Mc++;
                try {
                    if (l.usesInheritance && LE(e), n = o.compileComponent(le, a, l), l.isStandalone) {
                        let u = Re(t.imports || O), { directiveDefs: d, pipeDefs: f } = BS(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(H);
                    }
                }
                finally {
                    Mc--;
                }
                if (Mc === 0 && bE(), $S(e)) {
                    let u = Od(e.ngSelectorScope);
                    xd(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${ve(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function BS(e, t) { return { directiveDefs: () => No(e) ? [...wn.getStandaloneComponentScope(e, t).compilation.directives].map(i => V(i) || Me(i)).filter(i => i !== null) : [], pipeDefs: () => No(e) ? [...wn.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Fe(i)).filter(i => i !== null) : [] }; }
function $S(e) { return e.ngSelectorScope !== void 0; }
function Pd(e, t) { let n = null; OE(e, t || {}), Object.defineProperty(e, br, { get: () => { if (n === null) {
        let o = xE(e, t || {});
        n = J({ usage: 0, kind: "directive", type: e }).compileDirective(le, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function xE(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = J({ usage: 0, kind: "directive", type: e }), i = PE(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && LE(e), { metadata: i, sourceMapUrl: o }; }
function OE(e, t) { let n = null; Object.defineProperty(e, lt, { get: () => { if (n === null) {
        let o = xE(e, t), r = J({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(le, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: Qi(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function US(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function PE(e, t) { let n = kl(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Te, propMetadata: o, inputs: t.inputs || O, outputs: t.outputs || O, queries: Qp(e, o, FE), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !US(e), exportAs: qS(t.exportAs), providers: t.providers || null, viewQueries: Qp(e, o, jE), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function LE(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Me(n) && !V(n) && QS(n) && Pd(n, null), n = Object.getPrototypeOf(n); }
function GS(e) { return typeof e == "string" ? VE(e) : H(e); }
function WS(e, t) { return { propertyName: e, predicate: GS(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Qp(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${ve(e)}" since the query selector wasn't defined.`);
            if (i.some(HE))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(WS(r, s));
        } });
    } return o; }
function qS(e) { return e === void 0 ? null : VE(e); }
function FE(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function jE(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function HE(e) { return e.ngMetadataName === "Input"; }
function VE(e) { return e.split(",").map(t => t.trim()); }
var zS = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function QS(e) { let t = kl(); if (zS.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (HE(s) || FE(s) || jE(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function BE(e, t) { let n = null, o = null; Object.defineProperty(e, lt, { get: () => { if (o === null) {
        let r = Zp(e, t), i = J({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(le, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: Qi(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Sr, { get: () => { if (n === null) {
        let r = Zp(e, t);
        n = J({ usage: 0, kind: "pipe", type: r.type }).compilePipe(le, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Zp(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var $E = Yo("Directive", (e = {}) => e, void 0, void 0, (e, t) => Pd(e, t)), ZS = Yo("Component", (e = {}) => G({ changeDetection: Zi.Default }, e), $E, void 0, (e, t) => AE(e, t)), YS = Yo("Pipe", e => G({ pure: !0 }, e), void 0, void 0, (e, t) => BE(e, t)), KS = tt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), JS = tt("Output", e => ({ alias: e })), XS = tt("HostBinding", e => ({ hostPropertyName: e })), eR = tt("HostListener", (e, t) => ({ eventName: e, args: t })), tR = Yo("NgModule", e => e, void 0, void 0, (e, t) => RE(e, t)), Ui = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, nR = (() => { class e {
    compileModuleSync(n) { return new kn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = nn(n), i = mn(r.declarations).reduce((s, a) => { let c = V(a); return c && s.push(new Tt(c)), s; }, []); return new Ui(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), UE = new w(""), _l = class {
}, oR = (() => { class e {
    zone = D($);
    changeDetectionScheduler = D(Qe);
    applicationRef = D(Oe);
    applicationErrorHandler = D(vt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), GE = new w("", { factory: () => !1 });
function Ws({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new $(Le(G({}, qs()), { scheduleInRootZone: n })), [{ provide: $, useFactory: e }, { provide: ut, multi: !0, useFactory: () => { let o = D(oR, { optional: !0 }); return () => o.initialize(); } }, { provide: ut, multi: !0, useFactory: () => { let o = D(iR); return () => { o.initialize(); }; } }, t === !0 ? { provide: Ya, useValue: !0 } : [], { provide: Yr, useValue: n ?? by }, { provide: vt, useFactory: () => { let o = D($), r = D(dt), i; return s => { o.runOutsideAngular(() => { r.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= r.get(Zr), i.handleError(s)); }); }; } }]; }
function rR(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, o = Ws({ ngZoneFactory: () => { let r = qs(e); return r.scheduleInRootZone = n, r.shouldCoalesceEventChangeDetection && se("NgZone_CoalesceEvent"), new $(r); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return qe([{ provide: GE, useValue: !0 }, { provide: ln, useValue: !1 }, o]); }
function qs(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var iR = (() => { class e {
    subscription = new bl;
    initialized = !1;
    zone = D($);
    pendingTasks = D(Lt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { $.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { $.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var zs = (() => { class e {
    applicationErrorHandler = D(vt);
    appRef = D(Oe);
    taskService = D(Lt);
    ngZone = D($);
    zonelessEnabled = D(ln);
    tracing = D(Jn, { optional: !0 });
    disableScheduling = D(Ya, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new bl;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(ji) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(Yr, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof An || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let o = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, o = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 11: {
            o = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(o))
        return; let r = this.useMicrotaskScheduler ? Tp : Sy; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => r(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => r(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(ji + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, Tp(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function sR() { return se("NgZoneless"), qe([{ provide: Qe, useExisting: zs }, { provide: $, useClass: An }, { provide: ln, useValue: !0 }, { provide: Yr, useValue: !1 }, []]); }
function aR() { return typeof $localize < "u" && $localize.locale || mr; }
var Ld = new w("", { providedIn: "root", factory: () => D(Ld, { optional: !0, skipSelf: !0 }) || aR() }), cR = new w("", { providedIn: "root", factory: () => Ib }), lR = new w(""), uR = new w(""), WE = function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; }(WE || {}), Nl = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function dR(e) { return e.map(t => t.nativeElement); }
var Zo = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Qt(t) : null; }
    get injector() { return QC(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Xf(t) || zC(t)); }
    get context() { return Xf(this.nativeNode) || qC(this.nativeNode); }
    get listeners() { return XC(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return KC(this.nativeNode); }
    get providerTokens() { return ZC(this.nativeNode); }
}, Qt = class extends Zo {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = me(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[y].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = me(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[y].data, r = o[t.nodeIndex], i = {}; return fR(this.nativeElement, i), hR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = me(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[y].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(Ln(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Ln(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Yp(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Yp(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function fR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                pR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function pR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Yp(e, t, n, o) { let r = me(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[y].data[r.nodeIndex];
    Vt(s, i, t, n, o, e.nativeNode);
}
else
    Fd(e.nativeNode, t, n, o); }
function Vt(e, t, n, o, r, i) { let s = hf(e, t); if (e.type & 11) {
    if (_c(s, n, o, r, i), Ee(e)) {
        let c = de(e.index, t);
        c && c[y].firstChild && Vt(c[y].firstChild, c, n, o, r, i);
    }
    else
        e.child && Vt(e.child, t, n, o, r, i), s && Fd(s, n, o, r);
    let a = t[e.index];
    Y(a) && Kp(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    _c(a[ke], n, o, r, i), Kp(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[Q], l = a[re].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            _c(u, n, o, r, i);
    else if (l) {
        let u = a[W], d = u[y].data[l.index];
        Vt(d, u, n, o, r, i);
    }
}
else
    e.child && Vt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Vt(a, t, n, o, r, i);
} }
function Kp(e, t, n, o, r) { for (let i = B; i < e.length; i++) {
    let s = e[i], a = s[y].firstChild;
    a && Vt(a, s, t, n, o, r);
} }
function _c(e, t, n, o, r) { if (r !== e) {
    let i = Ln(e);
    if (!i)
        return;
    (o && i instanceof Qt && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Fd(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Ln(a);
    c && ((o && c instanceof Qt && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Fd(a, t, n, o));
} }
function hR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(uM), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += C(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Nc = "__ng_debug__";
function Ln(e) { return e instanceof Node ? (e.hasOwnProperty(Nc) || (e[Nc] = e.nodeType == Node.ELEMENT_NODE ? new Qt(e) : new Zo(e)), e[Nc]) : null; }
import "rxjs";
import "@angular/core/primitives/di";
import "@angular/core/primitives/signals";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var ta = Symbol("InputSignalNode#UNSET"), dD = Le(G({}, aa), { transformFn: void 0, applyValueToInputSignal(e, t) { sa(e, t); } }), jA = Symbol();
function fD(e, t) { let n = Object.create(dD); n.value = e, n.transformFn = t?.transform; function o() { if (Dr(n), n.value === ta) {
    let r = null;
    throw new N(-950, r);
} return n.value; } return o[ct] = n, o; }
var to = function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; }(to || {});
var qE = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => zi(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, gR = new w("");
gR.__NG_ELEMENT_ID__ = e => { let t = M(); if (t === null)
    throw new N(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new N(204, !1); };
function HA(e) { return new Xa; }
function zE(e, t) { return fD(e, t); }
function mR(e) { return fD(ta, e); }
var VA = (zE.required = mR, zE);
function QE(e, t) { return ku(t); }
function yR(e, t) { return Au(t); }
var BA = (QE.required = yR, QE);
function $A(e, t) { return xu(t); }
function ZE(e, t) { return ku(t); }
function vR(e, t) { return Au(t); }
var UA = (ZE.required = vR, ZE);
function GA(e, t) { return xu(t); }
function pD(e, t) { let n = Object.create(dD), o = new Xa; n.value = e; function r() { return Dr(n), YE(n.value), n.value; } return r[ct] = n, r.asReadonly = Af.bind(r), r.set = i => { n.equal(n.value, i) || (sa(n, i), o.emit(i)); }, r.update = i => { YE(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function YE(e) { if (e === ta)
    throw new N(952, !1); }
function KE(e, t) { return pD(e, t); }
function IR(e) { return pD(ta, e); }
var WA = (KE.required = IR, KE), hD = !0, no = class {
}, qA = tt("ContentChildren", (e, t = {}) => G({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: hD }, t), no), zA = tt("ContentChild", (e, t = {}) => G({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), no), QA = tt("ViewChildren", (e, t = {}) => G({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: hD }, t), no), ZA = tt("ViewChild", (e, t) => G({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), no), Vd = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, YA = new Vd("20.1.0");
function ER(e, t, n) { let o = new kn(n); return Promise.resolve(o); }
function JE(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Ys = new w(""), DR = new w("");
function Ir(e) { return !e.moduleRef; }
function gD(e) { let t = Ir(e) ? e.r3Injector : e.moduleRef.injector, n = t.get($); return n.run(() => { Ir(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(vt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Ir(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ys);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ys);
    s.add(i), e.moduleRef.onDestroy(() => { bo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return TR(o, n, () => { let i = t.get(Ku); return i.runInitializers(), i.donePromise.then(() => { let s = t.get(Ld, mr); if (jv(s || mr), !t.get(DR, !0))
    return Ir(e) ? t.get(Oe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Ir(e)) {
    let c = t.get(Oe);
    return e.rootComponent !== void 0 && c.bootstrap(e.rootComponent), c;
}
else
    return mD?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }); }); }); }
var mD;
function XE() { mD = CR; }
function CR(e, t) { let n = e.injector.get(Oe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new N(-403, !1); t.push(e); }
function TR(e, t, n) { try {
    let o = n();
    return Zu(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var yD = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = o?.scheduleInRootZone, i = () => ky(o?.ngZone, Le(G({}, qs({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing })), { scheduleInRootZone: r })), s = o?.ignoreChangesOutsideZone, a = [Ws({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Qe, useExisting: zs }, za], c = dy(n.moduleType, this.injector, a); return XE(), gD({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Xu({}, o); return XE(), ER(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new N(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Ys, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Se(Ce)); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), wt = null, vD = new w("");
function MR(e) { if (wt && !wt.get(vD, !1))
    throw new N(400, !1); Ju(), wt = e; let t = e.get(yD); return ED(e), t; }
function _R(e, t, n = []) { let o = `Platform: ${t}`, r = new w(o); return (i = []) => { let s = Zd(); if (!s || s.injector.get(vD, !1)) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    e ? e(a) : MR(ID(a, o));
} return NR(r); }; }
function ID(e = [], t) { return Ce.create({ name: t, providers: [{ provide: lf, useValue: "platform" }, { provide: Ys, useValue: new Set([() => wt = null]) }, ...e] }); }
function NR(e) { let t = Zd(); if (!t)
    throw new N(401, !1); return t; }
function Zd() { return wt?.get(yD) ?? null; }
function KA() { Zd()?.destroy(); }
function wR(e = []) { if (wt)
    return wt; let t = ID(e); return wt = t, Ju(), ED(t), t; }
function JA(e) { return qe([{ provide: xl, useValue: e, multi: !0 }]); }
function ED(e) { let t = e.get(xl, null); Fr(e, () => { t?.forEach(n => n()); }); }
function XA(e) { return qe([]); }
function ex() { return !1; }
function tx() { }
function nx(e) { let t = Pu(e); if (!t)
    throw DD(e); return new kn(t); }
function ox(e) { let t = Pu(e); if (!t)
    throw DD(e); return t; }
function DD(e) { return new Error(`No module with ID ${e} loaded`); }
var bR = (() => { class e {
    static __NG_ELEMENT_ID__ = SR;
} return e; })();
function SR(e) { return RR(M(), g(), (e & 16) === 16); }
function RR(e, t, n) { if (Ee(e) && !n) {
    let o = de(e.index, t);
    return new Ct(o, o);
}
else if (e.type & 175) {
    let o = t[Q];
    return new Ct(o, t);
} return null; }
var Bd = class extends bR {
}, eD = class extends Bd {
}, Ks = class {
    constructor() { }
    supports(t) { return $o(t); }
    create(t) { return new $d(t); }
}, kR = (e, t) => t, $d = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || kR; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < tD(o, r, i) ? n : o, a = tD(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !$o(t))
        throw new N(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, jm(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new Ud(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Js), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Js), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, Ud = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, Gd = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Js = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new Gd, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function tD(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Xs = class {
    constructor() { }
    supports(t) { return t instanceof Map || ws(t); }
    create() { return new Wd; }
}, Wd = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ws(t)))
        throw new N(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new qd(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, qd = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function nD() { return new CD([new Ks]); }
var CD = (() => { class e {
    factories;
    static \u0275prov = F({ token: e, providedIn: "root", factory: nD });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: o => e.create(n, o || nD()), deps: [[e, new Wi, new Gi]] }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new N(901, !1); }
} return e; })();
function oD() { return new TD([new Xs]); }
var TD = (() => { class e {
    static \u0275prov = F({ token: e, providedIn: "root", factory: oD });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: o => e.create(n, o || oD()), deps: [[e, new Wi, new Gi]] }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new N(901, !1); }
} return e; })(), AR = [new Xs], xR = [new Ks], rx = new CD(xR), ix = new TD(AR), sx = _R(null, "core", []), ax = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Se(Oe)); };
    static \u0275mod = Fu({ type: e });
    static \u0275inj = io({});
} return e; })();
function cx(e) { A(8); try {
    let { rootComponent: t, appProviders: n, platformProviders: o } = e, r = wR(o), i = [Ws({}), { provide: Qe, useExisting: zs }, za, ...n || []], s = new Go({ providers: i, parent: r, debugName: "", runEnvironmentInitializers: !1 });
    return gD({ r3Injector: s.injector, platformInjector: r, rootComponent: t });
}
catch (t) {
    return Promise.reject(t);
}
finally {
    A(9);
} }
var Qs = new WeakSet, rD = "", Zs = [];
function iD(e) { return e.get(ns, Hl); }
function OR() { let e = [{ provide: ns, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(_t);
            t = !!window._ejsas?.[n];
        } return t && se("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: ut, useValue: () => { let t = D(Oe), { injector: n } = t; if (!Qs.has(t)) {
        let o = D(nr);
        if (iD(n)) {
            Wh();
            let r = n.get(_t), i = Uh(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && ($h(s, a, c), $l(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: pr, useFactory: () => { let t = D(Oe), { injector: n } = t; return () => { if (!iD(n) || Qs.has(t))
        return; Qs.add(t); let o = n.get(_t); t.onDestroy(() => { Qs.delete(t), typeof ngServerMode < "u" && !ngServerMode && ec(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Gl); PR(r, n); let i = n.get(nr); i.get(rD)?.forEach(Ul), i.delete(rD); let s = r.instance; ss(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var PR = (e, t) => { let n = t.get(_t), o = window._ejsas[n], r = e.instance = new Hf(new Pf(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = Vf(n); r.replayEarlyEventInfos(i), ec(n); let s = new Ff(a => { FR(t, a, a.currentTarget); }); jf(r, s); };
function LR(e, t, n) { let o = new Map, r = t[kt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!Of(l))
        continue;
    xf(l) ? n.capture.add(l) : n.regular.add(l);
    let u = k(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function FR(e, t, n) { let o = (n && n.getAttribute(Un)) ?? ""; /d\d+/.test(o) ? jR(o, e, t, n) : t.eventPhase === Lf.REPLAY && Wl(t, n); }
function jR(e, t, n, o) { Zs.push({ event: n, currentTarget: o }), st(t, e, HR); }
function HR(e) { let t = [...Zs], n = new Set(e); Zs = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(Un);
    n.has(i) ? Wl(o, r) : Zs.push({ event: o, currentTarget: r });
} }
var zd = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, VR = 0;
function MD(e) { return e.ssrId || (e.ssrId = `t${VR++}`), e.ssrId; }
function _D(e, t, n) { let o = []; return Nn(e, t, n, o), o.length; }
function BR(e) { let t = []; return vs(e, t), t.length; }
function ND(e, t, n) { let o = e[P]; return o && !o.hasAttribute(Hn) ? ea(o, e, null, t) : null; }
function wD(e, t, n) { let o = go(e[P]), r = ND(o, t); if (r === null)
    return; let i = k(o[P]), s = e[W], a = ea(i, s, null, t), c = o[T], l = `${r}|${a}`; c.setAttribute(i, En, l); }
function lx(e, t) { let n = e.injector, o = Dm(n), r = ss(n), i = new zd, s = new Map, a = e._views, c = n.get(ns, Hl), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(_t); for (let h of a) {
    let m = ql(h);
    if (m !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        Y(m) ? wD(m, v) : ND(m, v), qR(s, t);
    }
} let f = i.getAll(), p = n.get(Zt); if (p.set(os, f), u.size > 0) {
    let h = {};
    for (let [m, v] of u.entries())
        h[m] = v;
    p.set(rs, h);
} return l; }
function $R(e, t, n, o, r) { let i = [], s = ""; for (let a = B; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (He(c) && (c = c[I], Y(c))) {
        u = BR(c) + 1, wD(c, r);
        let p = go(c[P]);
        d = { [Ji]: p[y].ssrId, [Je]: u };
    }
    if (!d) {
        let p = c[y];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = MD(p), u = _D(p, c, p.firstChild)), d = { [Ji]: l, [Je]: u };
        let h = !1;
        if (Fy(n[y], t)) {
            let m = pe(n, t), v = ne(n[y], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let E = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let R = [];
                vs(e, R);
                let ae = { [Je]: R.length, [tr]: m[it] }, Pe = UR(v.hydrateTriggers);
                Pe.length > 0 && (ae[ts] = Pe), o !== null && (ae[Ll] = o), r.deferBlocks.set(E, ae);
                let ue = k(e);
                ue !== void 0 ? ue.nodeType === Node.COMMENT_NODE && sD(ue, E) : sD(ue, E), h || QR(v, R, E, r), o = E, d[es] = E;
            }
            d[tr] = m[it];
        }
        h || Object.assign(d, bD(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Xo] ??= 1, p[Xo]++;
    }
    else
        s = f, i.push(d);
} return i; }
function UR(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : n.push({ trigger: o, delay: r.delay })); return n; }
function Er(e, t, n, o) { let r = t.index - I; e[er] ??= {}, e[er][r] ??= mm(t, n, o); }
function jd(e, t) { let n = typeof t == "number" ? t : t.index - I; e[$n] ??= [], e[$n].includes(n) || e[$n].push(n); }
function bD(e, t = null, n) { let o = {}, r = e[y], i = Cm(r, n), s = n.shouldReplayEvents ? LR(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = Tm(e, a, n);
    if (u) {
        o[Xi] ??= {}, o[Xi][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            jd(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Er(o, f, e, i);
        }
        continue;
    }
    if (qi(c) && !Gn(c)) {
        if (Y(e[a]) && c.tView && (o[Ki] ??= {}, o[Ki][l] = MD(c.tView)), Yn(c, e) && zR(c)) {
            jd(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Ca(d) && !Vn(d) && (Yn(d, e) ? jd(o, d) : Er(o, d, e, i));
                    else
                        throw am(k(e[a]));
        }
        if (GR(o, c, e, i), Y(e[a])) {
            let d = e[a][P];
            if (Array.isArray(d)) {
                let f = k(d);
                f.hasAttribute(Hn) || ea(f, d, t, n);
            }
            o[Bn] ??= {}, o[Bn][l] = $R(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !lh(c)) {
            let d = k(e[a][P]);
            d.hasAttribute(Hn) || ea(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[Jo] ??= {}, o[Jo][l] = _D(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Vn(d) && Er(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = k(e[a]);
            Ql(n, d);
        }
        if (s && c.type & 2) {
            let d = k(e[a]);
            s.has(d) && Bl(d, s.get(d), t);
        }
    }
} return o; }
function GR(e, t, n, o) { Ca(t) || (t.projectionNext && t.projectionNext !== t.next && !Vn(t.projectionNext) && Er(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Yn(t.parent, n) && !Yn(t, n) && Er(e, t, n, o)); }
function WR(e) { let t = e[L]; return t?.constructor ? V(t.constructor)?.encapsulation === Xe.ShadowDom : !1; }
function ea(e, t, n, o) { let r = t[T]; if (df(t) && !Ts() || WR(t))
    return r.setAttribute(e, Hn, ""), null; {
    let i = bD(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, En, s.toString()), s;
} }
function sD(e, t) { e.textContent = `ngh=${t}`; }
function qR(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function zR(e) { let t = e; for (; t != null;) {
    if (Ee(t))
        return !0;
    t = t.parent;
} return !1; }
function QR(e, t, n, o) { let r = tg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Bl(s, r, n);
} }
var aD = !1, cD = !1, lD = !1;
function ZR() { aD || (aD = !0, Zh(), kv(), _I(), Av(), _y(), Zm(), Sm(), zg()); }
function YR() { cD || (cD = !0, Vv(), Em(), _m()); }
function KR() { lD || (lD = !0, rg()); }
function JR(e) { return e.whenStable(); }
var ux = "ngcm";
function dx() { let e = [{ provide: Yt, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(Zt, { optional: !0 })?.get(os, null)), t && se("NgHydration"), t; } }, { provide: ut, useValue: () => { Cu(!1), !(typeof ngServerMode < "u" && ngServerMode) && D(Yt) && (sg(Mt()), ZR()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Fl, useFactory: () => D(Yt) }, { provide: pr, useFactory: () => { if (D(Yt)) {
        let t = D(Oe);
        return () => { JR(t).then(() => { t.destroyed || Tu(t); }); };
    } return () => { }; }, multi: !0 }), qe(e); }
function fx() { return [{ provide: jl, useFactory: () => D(Yt) }, { provide: ut, useValue: () => { D(Yt) && (YR(), Cu(!0), se("NgI18nHydration")); }, multi: !0 }]; }
function px() { let e = [OR(), { provide: Vl, useValue: !0 }, { provide: nt, useClass: qh }, { provide: ut, useValue: () => { KR(), se("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: pr, useFactory: () => { let t = D(Ce), n = Mt(); return () => { let o = ig(t), r = ym(n, n.body); ev(t, o, r), ng(n, t); }; }, multi: !0 }), e; }
function hx(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function gx(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var XR = "\u{1F170}\uFE0F", na = !1;
function mx(e) { if (!na)
    return; let { startLabel: t } = SD(e); performance.mark(t); }
function yx(e) { if (!na)
    return; let { startLabel: t, labelName: n, endLabel: o } = SD(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function SD(e) { let t = `${XR}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var uD = !1;
function vx() { if (!uD && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    uD = !0, console.warn("Performance API is not supported on this platform");
    return;
} na = !0; }
function Ix() { na = !1; }
function Ex(e) { let t = e; for (; t;) {
    let n = wh(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!Z(r) && !Y(r) || r[P] !== t)
                continue;
            let i = n[y], s = gt(i, o);
            if (Ee(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function Dx(e) { return J({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(le, `ng:///${e.type.name}/\u0275fac.js`, e); }
function Cx(e) { zu(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function Tx(e) { Uy(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); zu(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function Mx(e) { return J({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(le, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function _x(e) { return J({ usage: 1, kind: ek(e.target), type: e.type }).compileFactoryDeclaration(le, `ng:///${e.type.name}/\u0275fac.js`, e); }
function ek(e) { switch (e) {
    case to.Directive: return "directive";
    case to.Component: return "component";
    case to.Injectable: return "injectable";
    case to.Pipe: return "pipe";
    case to.NgModule: return "NgModule";
} }
function Nx(e) { return J({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(le, `ng:///${e.type.name}/\u0275prov.js`, e); }
function wx(e) { return J({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(le, `ng:///${e.type.name}/\u0275inj.js`, e); }
function bx(e) { return J({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(le, `ng:///${e.type.name}/\u0275mod.js`, e); }
function Sx(e) { return J({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(le, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var Hd = Symbol("NOT_SET"), RD = new Set, tk = Le(G({}, aa), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: Hd, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== Hd && !Tr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? RD)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = ro(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Cr(this, n);
    } return (this.value === Hd || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Qd = class extends qo {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i, s), this.scheduler = r; for (let a of Gu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(tk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Dr(l), l.value), l.signal[ct] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        for (let n of t?.cleanup ?? RD)
            n(); }
};
function Rx(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return xs; let n = t?.injector ?? D(Ce), o = n.get(Qe), r = n.get(As), i = n.get(Jn, null, { optional: !0 }); r.impl ??= n.get(Wu); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(Kr, null, { optional: !0 }), c = new Qd(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n.get(cn), i?.snapshot(null)); return r.impl.register(c), c; }
function kx(e, t) { let n = V(e), o = t.elementInjector || Lr(); return new Tt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function Ax(e) { let t = V(e); if (!t)
    return null; let n = new Tt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function xx(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var Ox = new w("", { providedIn: "platform", factory: () => null }), Px = new w("", { providedIn: "platform", factory: () => null }), Lx = new w("", { providedIn: "platform", factory: () => null });
export { aT as ANIMATION_MODULE_TYPE, pr as APP_BOOTSTRAP_LISTENER, _t as APP_ID, Yu as APP_INITIALIZER, Ku as ApplicationInitStatus, ax as ApplicationModule, Oe as ApplicationRef, Dh as Attribute, UE as COMPILER_OPTIONS, cT as CSP_NONCE, rM as CUSTOM_ELEMENTS_SCHEMA, Zi as ChangeDetectionStrategy, bR as ChangeDetectorRef, nR as Compiler, _l as CompilerFactory, ZS as Component, Ns as ComponentFactory, lr as ComponentFactoryResolver, Am as ComponentRef, zA as ContentChild, qA as ContentChildren, cR as DEFAULT_CURRENCY_CODE, UD as DOCUMENT, Qt as DebugElement, Nl as DebugEventListener, Zo as DebugNode, $d as DefaultIterableDiffer, cn as DestroyRef, $E as Directive, ut as ENVIRONMENT_INITIALIZER, Ko as ElementRef, eD as EmbeddedViewRef, dt as EnvironmentInjector, Zr as ErrorHandler, Ye as EventEmitter, gR as HOST_TAG_NAME, eh as Host, qE as HostAttributeToken, XS as HostBinding, eR as HostListener, jD as INJECTOR, Jp as Inject, AC as Injectable, w as InjectionToken, Ce as Injector, KS as Input, CD as IterableDiffers, TD as KeyValueDiffers, Ld as LOCALE_ID, WE as MissingTranslationStrategy, Ui as ModuleWithComponentFactories, iM as NO_ERRORS_SCHEMA, tR as NgModule, ly as NgModuleFactory, Sn as NgModuleRef, fl as NgProbeToken, $ as NgZone, Gi as Optional, JS as Output, Xa as OutputEmitterRef, sT as PACKAGE_ROOT_URL, iT as PLATFORM_ID, xl as PLATFORM_INITIALIZER, Ka as PendingTasks, YS as Pipe, yD as PlatformRef, no as Query, Ti as QueryList, Ox as REQUEST, Lx as REQUEST_CONTEXT, Px as RESPONSE_INIT, rN as Renderer2, Bo as RendererFactory2, bi as RendererStyleFlags2, xm as Sanitizer, Kt as SecurityContext, Xp as Self, vi as SimpleChange, Wi as SkipSelf, lR as TRANSLATIONS, uR as TRANSLATIONS_FORMAT, Ho as TemplateRef, qw as Testability, qy as TestabilityRegistry, Zt as TransferState, th as Type, YA as VERSION, Vd as Version, ZA as ViewChild, QA as ViewChildren, Ss as ViewContainerRef, Xe as ViewEncapsulation, Bd as ViewRef, Ay as afterEveryRender, xy as afterNextRender, Rx as afterRenderEffect, dR as asNativeElements, BD as assertInInjectionContext, qD as assertNotInReactiveContext, NR as assertPlatform, hx as booleanAttribute, ZD as computed, UA as contentChild, GA as contentChildren, kx as createComponent, Lu as createEnvironmentInjector, uy as createNgModule, JN as createNgModuleRef, MR as createPlatform, _R as createPlatformFactory, xD as defineInjectable, KA as destroyPlatform, YD as effect, tx as enableProdMode, Uw as enableProfiling, la as forwardRef, Ln as getDebugNode, nx as getModuleFactory, ox as getNgModuleById, Zd as getPlatform, VD as importProvidersFrom, D as inject, VA as input, $m as inputBinding, ex as isDevMode, kf as isSignal, lo as isStandalone, KD as linkedSignal, qe as makeEnvironmentProviders, uT as makeStateKey, xx as mergeApplicationConfig, WA as model, gx as numberAttribute, HA as output, Um as outputBinding, sx as platformCore, zw as provideAppInitializer, GD as provideBrowserGlobalErrorListeners, XA as provideCheckNoChangesConfig, HD as provideEnvironmentInitializer, oM as provideNgReflectAttributes, JA as providePlatformInitializer, rR as provideZoneChangeDetection, sR as provideZonelessChangeDetection, Ax as reflectComponentType, H as resolveForwardRef, JD as resource, Fr as runInInjectionContext, zy as setTestabilityGetter, Qa as signal, MN as twoWayBinding, QD as untracked, BA as viewChild, $A as viewChildren, vD as \u0275ALLOW_MULTIPLE_PLATFORMS, Oh as \u0275AcxChangeDetectionStrategy, Ph as \u0275AcxViewEncapsulation, As as \u0275AfterRenderManager, ux as \u0275CLIENT_RENDER_MODE_FLAG, B as \u0275CONTAINER_HEADER_OFFSET, Qe as \u0275ChangeDetectionScheduler, zs as \u0275ChangeDetectionSchedulerImpl, Ns as \u0275ComponentFactory, $w as \u0275Console, mr as \u0275DEFAULT_LOCALE_ID, Vy as \u0275DEFER_BLOCK_CONFIG, Fw as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, nt as \u0275DEHYDRATED_BLOCK_REGISTRY, Bu as \u0275DeferBlockBehavior, j as \u0275DeferBlockState, DR as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Ja as \u0275EffectScheduler, xh as \u0275Framework, Kh as \u0275HydrationStatus, lT as \u0275IMAGE_CONFIG, Lh as \u0275IMAGE_CONFIG_DEFAULTS, lf as \u0275INJECTOR_SCOPE, jA as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, vt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, Yt as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Vl as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, nr as \u0275JSACTION_BLOCK_ELEMENT_MAP, Gl as \u0275JSACTION_EVENT_CONTRACT, Mi as \u0275LContext, xn as \u0275LocaleDataIndex, en as \u0275NG_COMP_DEF, br as \u0275NG_DIR_DEF, St as \u0275NG_ELEMENT_ID, ua as \u0275NG_INJ_DEF, da as \u0275NG_MOD_DEF, Sr as \u0275NG_PIPE_DEF, wr as \u0275NG_PROV_DEF, fi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, x as \u0275NO_CHANGE, kn as \u0275NgModuleFactory, An as \u0275NoopNgZone, XR as \u0275PERFORMANCE_MARK_PREFIX, GE as \u0275PROVIDED_NG_ZONE, Lt as \u0275PendingTasksInternal, ya as \u0275R3Injector, yi as \u0275ReflectionCapabilities, Tt as \u0275Render3ComponentFactory, Pi as \u0275Render3ComponentRef, Rn as \u0275Render3NgModuleRef, XD as \u0275ResourceImpl, N as \u0275RuntimeError, ct as \u0275SIGNAL, zh as \u0275SSR_CONTENT_INTEGRITY_MARKER, Gy as \u0275TESTABILITY, Wy as \u0275TESTABILITY_GETTER, Hy as \u0275TimerScheduler, ks as \u0275TracingAction, Jn as \u0275TracingService, Ct as \u0275ViewRef, Mr as \u0275XSS_SECURITY_URL, ln as \u0275ZONELESS_ENABLED, mg as \u0275_sanitizeHtml, ls as \u0275_sanitizeUrl, qn as \u0275allowSanitizationBypassAndThrow, lx as \u0275annotateForHydration, xT as \u0275bypassSanitizationTrustHtml, FT as \u0275bypassSanitizationTrustResourceUrl, PT as \u0275bypassSanitizationTrustScript, OT as \u0275bypassSanitizationTrustStyle, LT as \u0275bypassSanitizationTrustUrl, iy as \u0275clearResolutionOfComponentResourcesQueue, AE as \u0275compileComponent, Pd as \u0275compileDirective, RE as \u0275compileNgModule, kE as \u0275compileNgModuleDefs, ER as \u0275compileNgModuleFactory, BE as \u0275compilePipe, pa as \u0275convertToBitFlags, $D as \u0275createInjector, wR as \u0275createOrReusePlatformInjector, rx as \u0275defaultIterableDiffers, ix as \u0275defaultKeyValueDiffers, wn as \u0275depsTracker, Hm as \u0275devModeEqual, Ix as \u0275disableProfiling, vx as \u0275enableProfiling, eC as \u0275encapsulateResourceError, dd as \u0275findLocaleData, bE as \u0275flushModuleScopingQueueAsMuchAsPossible, ef as \u0275formatRuntimeError, LS as \u0275generateStandaloneInDeclarationsError, Bw as \u0275getAsyncClassMetadataFn, Ex as \u0275getClosestComponentName, V as \u0275getComponentDef, Ln as \u0275getDebugNode, gi as \u0275getDeferBlocks, YC as \u0275getDirectives, Mt as \u0275getDocument, JC as \u0275getHostElement, OD as \u0275getInjectableDef, me as \u0275getLContext, hb as \u0275getLocaleCurrencyCode, Ov as \u0275getLocalePluralCase, zD as \u0275getOutputDestroyRef, lg as \u0275getSanitizationBypassType, aM as \u0275getUnknownElementStrictMode, lM as \u0275getUnknownPropertyStrictMode, ye as \u0275global, SR as \u0275injectChangeDetectorRef, cx as \u0275internalCreateApplication, Ws as \u0275internalProvideZoneChangeDetection, Zy as \u0275isBoundToModule, qN as \u0275isComponentDefPendingResolution, FD as \u0275isEnvironmentProviders, PD as \u0275isInjectable, Ht as \u0275isNgModule, Zu as \u0275isPromise, Qy as \u0275isSubscribable, c_ as \u0275isViewDirty, l_ as \u0275markForRefresh, Ge as \u0275noSideEffects, xd as \u0275patchComponentDefWithScope, se as \u0275performanceMarkFeature, Gw as \u0275publishExternalGlobalUtil, TT as \u0275readHydrationInfo, pb as \u0275registerLocaleData, Ke as \u0275renderDeferBlockState, HS as \u0275resetCompiledComponents, OS as \u0275resetJitOptions, oy as \u0275resolveComponentResources, zN as \u0275restoreComponentResolutionQueue, KN as \u0275setAllowDuplicateNgModuleIdsForTest, tC as \u0275setAlternateWeakRefImpl, ME as \u0275setClassDebugInfo, zu as \u0275setClassMetadata, Uy as \u0275setClassMetadataAsync, kD as \u0275setCurrentInjector, oT as \u0275setDocument, LD as \u0275setInjectorProfilerContext, jv as \u0275setLocaleId, sM as \u0275setUnknownElementStrictMode, cM as \u0275setUnknownPropertyStrictMode, mx as \u0275startMeasuring, yx as \u0275stopMeasuring, mo as \u0275store, Xt as \u0275stringify, Od as \u0275transitiveScopesFor, Ls as \u0275triggerResourceLoading, AD as \u0275truncateMiddle, gb as \u0275unregisterLocaleData, ot as \u0275unwrapSafeValue, WD as \u0275unwrapWritableSignal, dx as \u0275withDomHydration, OR as \u0275withEventReplay, fx as \u0275withI18nSupport, px as \u0275withIncrementalHydration, Iy as \u0275\u0275CopyDefinitionFeature, JI as \u0275\u0275ExternalStylesFeature, to as \u0275\u0275FactoryTarget, Ey as \u0275\u0275HostDirectivesFeature, ju as \u0275\u0275InheritDefinitionFeature, oh as \u0275\u0275NgOnChangesFeature, KI as \u0275\u0275ProvidersFeature, Og as \u0275\u0275advance, HI as \u0275\u0275attachSourceLocations, ed as \u0275\u0275attribute, gI as \u0275\u0275classMap, Ed as \u0275\u0275classProp, Mv as \u0275\u0275componentInstance, Nv as \u0275\u0275conditional, Fs as \u0275\u0275conditionalBranchCreate, _v as \u0275\u0275conditionalCreate, nI as \u0275\u0275contentQuery, sI as \u0275\u0275contentQuerySignal, Ad as \u0275\u0275declareLet, tv as \u0275\u0275defer, $y as \u0275\u0275deferEnableTimerScheduling, iv as \u0275\u0275deferHydrateNever, yv as \u0275\u0275deferHydrateOnHover, cv as \u0275\u0275deferHydrateOnIdle, dv as \u0275\u0275deferHydrateOnImmediate, Ev as \u0275\u0275deferHydrateOnInteraction, hv as \u0275\u0275deferHydrateOnTimer, Tv as \u0275\u0275deferHydrateOnViewport, rv as \u0275\u0275deferHydrateWhen, gv as \u0275\u0275deferOnHover, sv as \u0275\u0275deferOnIdle, lv as \u0275\u0275deferOnImmediate, vv as \u0275\u0275deferOnInteraction, fv as \u0275\u0275deferOnTimer, Dv as \u0275\u0275deferOnViewport, mv as \u0275\u0275deferPrefetchOnHover, av as \u0275\u0275deferPrefetchOnIdle, uv as \u0275\u0275deferPrefetchOnImmediate, Iv as \u0275\u0275deferPrefetchOnInteraction, pv as \u0275\u0275deferPrefetchOnTimer, Cv as \u0275\u0275deferPrefetchOnViewport, ov as \u0275\u0275deferPrefetchWhen, nv as \u0275\u0275deferWhen, fy as \u0275\u0275defineComponent, hy as \u0275\u0275defineDirective, F as \u0275\u0275defineInjectable, io as \u0275\u0275defineInjector, Fu as \u0275\u0275defineNgModule, gy as \u0275\u0275definePipe, Kn as \u0275\u0275directiveInject, ba as \u0275\u0275disableBindings, od as \u0275\u0275domElement, ad as \u0275\u0275domElementContainer, sd as \u0275\u0275domElementContainerEnd, Us as \u0275\u0275domElementContainerStart, Bs as \u0275\u0275domElementEnd, Vs as \u0275\u0275domElementStart, yd as \u0275\u0275domListener, ld as \u0275\u0275domProperty, Vu as \u0275\u0275domTemplate, nd as \u0275\u0275element, id as \u0275\u0275elementContainer, gr as \u0275\u0275elementContainerEnd, $s as \u0275\u0275elementContainerStart, Hs as \u0275\u0275elementEnd, js as \u0275\u0275elementStart, wa as \u0275\u0275enableBindings, TE as \u0275\u0275getComponentDepsFactory, xv as \u0275\u0275getCurrentView, Ih as \u0275\u0275getInheritedFactory, _E as \u0275\u0275getReplaceMetadataURL, Zv as \u0275\u0275i18n, Kv as \u0275\u0275i18nApply, Yv as \u0275\u0275i18nAttributes, pd as \u0275\u0275i18nEnd, hd as \u0275\u0275i18nExp, Jv as \u0275\u0275i18nPostprocess, fd as \u0275\u0275i18nStart, Se as \u0275\u0275inject, zi as \u0275\u0275injectAttribute, VI as \u0275\u0275interpolate, BI as \u0275\u0275interpolate1, $I as \u0275\u0275interpolate2, UI as \u0275\u0275interpolate3, GI as \u0275\u0275interpolate4, WI as \u0275\u0275interpolate5, qI as \u0275\u0275interpolate6, zI as \u0275\u0275interpolate7, QI as \u0275\u0275interpolate8, ZI as \u0275\u0275interpolateV, Om as \u0275\u0275invalidFactory, Rr as \u0275\u0275invalidFactoryDep, gd as \u0275\u0275listener, iI as \u0275\u0275loadQuery, Wa as \u0275\u0275namespaceHTML, Ga as \u0275\u0275namespaceMathML, Ua as \u0275\u0275namespaceSVG, Xv as \u0275\u0275nextContext, Cx as \u0275\u0275ngDeclareClassMetadata, Tx as \u0275\u0275ngDeclareClassMetadataAsync, Mx as \u0275\u0275ngDeclareComponent, Dx as \u0275\u0275ngDeclareDirective, _x as \u0275\u0275ngDeclareFactory, Nx as \u0275\u0275ngDeclareInjectable, wx as \u0275\u0275ngDeclareInjector, bx as \u0275\u0275ngDeclareNgModule, Sx as \u0275\u0275ngDeclarePipe, mE as \u0275\u0275pipe, yE as \u0275\u0275pipeBind1, vE as \u0275\u0275pipeBind2, IE as \u0275\u0275pipeBind3, EE as \u0275\u0275pipeBind4, DE as \u0275\u0275pipeBindV, tI as \u0275\u0275projection, eI as \u0275\u0275projectionDef, td as \u0275\u0275property, tE as \u0275\u0275pureFunction0, nE as \u0275\u0275pureFunction1, oE as \u0275\u0275pureFunction2, rE as \u0275\u0275pureFunction3, iE as \u0275\u0275pureFunction4, sE as \u0275\u0275pureFunction5, aE as \u0275\u0275pureFunction6, cE as \u0275\u0275pureFunction7, lE as \u0275\u0275pureFunction8, uE as \u0275\u0275pureFunctionV, cI as \u0275\u0275queryAdvance, rI as \u0275\u0275queryRefresh, jI as \u0275\u0275readContextLet, lI as \u0275\u0275reference, Ou as \u0275\u0275registerNgModuleType, Rv as \u0275\u0275repeater, Sv as \u0275\u0275repeaterCreate, bv as \u0275\u0275repeaterTrackByIdentity, wv as \u0275\u0275repeaterTrackByIndex, NE as \u0275\u0275replaceMetadata, ka as \u0275\u0275resetView, eu as \u0275\u0275resolveBody, Ng as \u0275\u0275resolveDocument, _g as \u0275\u0275resolveWindow, Ra as \u0275\u0275restoreView, yg as \u0275\u0275sanitizeHtml, Xl as \u0275\u0275sanitizeResourceUrl, Ig as \u0275\u0275sanitizeScript, vg as \u0275\u0275sanitizeStyle, Jl as \u0275\u0275sanitizeUrl, Cg as \u0275\u0275sanitizeUrlOrResourceUrl, XI as \u0275\u0275setComponentScope, eE as \u0275\u0275setNgModuleScope, FI as \u0275\u0275storeLet, hI as \u0275\u0275styleMap, Id as \u0275\u0275styleProp, md as \u0275\u0275syntheticHostListener, ud as \u0275\u0275syntheticHostProperty, Hu as \u0275\u0275template, CE as \u0275\u0275templateRefExtractor, TI as \u0275\u0275text, Dd as \u0275\u0275textInterpolate, Gs as \u0275\u0275textInterpolate1, Cd as \u0275\u0275textInterpolate2, Td as \u0275\u0275textInterpolate3, Md as \u0275\u0275textInterpolate4, _d as \u0275\u0275textInterpolate5, Nd as \u0275\u0275textInterpolate6, wd as \u0275\u0275textInterpolate7, bd as \u0275\u0275textInterpolate8, Sd as \u0275\u0275textInterpolateV, Eg as \u0275\u0275trustConstantHtml, Dg as \u0275\u0275trustConstantResourceUrl, PI as \u0275\u0275twoWayBindingSet, kd as \u0275\u0275twoWayListener, Rd as \u0275\u0275twoWayProperty, cy as \u0275\u0275validateIframeAttribute, oI as \u0275\u0275viewQuery, aI as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
