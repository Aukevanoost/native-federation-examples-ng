import { a as E, b as ue } from "@nf-internal/chunk-4CLCTAJ7";
var Yc = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g"), Xn = class n {
    element = null;
    classNames = [];
    attrs = [];
    notSelectors = [];
    static parse(e) {
        let t = [], s = (l, c) => { c.notSelectors.length > 0 && !c.element && c.classNames.length == 0 && c.attrs.length == 0 && (c.element = "*"), l.push(c); }, r = new n, i, o = r, a = !1;
        for (Yc.lastIndex = 0; i = Yc.exec(e);) {
            if (i[1]) {
                if (a)
                    throw new Error("Nesting :not in a selector is not allowed");
                a = !0, o = new n, r.notSelectors.push(o);
            }
            let l = i[2];
            if (l) {
                let p = i[3];
                p === "#" ? o.addAttribute("id", l.slice(1)) : p === "." ? o.addClassName(l.slice(1)) : o.setElement(l);
            }
            let c = i[4];
            if (c && o.addAttribute(o.unescapeAttribute(c), i[6]), i[7] && (a = !1, o = r), i[8]) {
                if (a)
                    throw new Error("Multiple selectors in :not are not supported");
                s(t, r), r = o = new n;
            }
        }
        return s(t, r), t;
    }
    unescapeAttribute(e) {
        let t = "", s = !1;
        for (let r = 0; r < e.length; r++) {
            let i = e.charAt(r);
            if (i === "\\") {
                s = !0;
                continue;
            }
            if (i === "$" && !s)
                throw new Error(`Error in attribute selector "${e}". Unescaped "$" is not supported. Please escape with "\\$".`);
            s = !1, t += i;
        }
        return t;
    }
    escapeAttribute(e) { return e.replace(/\\/g, "\\\\").replace(/\$/g, "\\$"); }
    isElementSelector() { return this.hasElementSelector() && this.classNames.length == 0 && this.attrs.length == 0 && this.notSelectors.length === 0; }
    hasElementSelector() { return !!this.element; }
    setElement(e = null) { this.element = e; }
    getAttrs() { let e = []; return this.classNames.length > 0 && e.push("class", this.classNames.join(" ")), e.concat(this.attrs); }
    addAttribute(e, t = "") { this.attrs.push(e, t && t.toLowerCase() || ""); }
    addClassName(e) { this.classNames.push(e.toLowerCase()); }
    toString() {
        let e = this.element || "";
        if (this.classNames && this.classNames.forEach(t => e += `.${t}`), this.attrs)
            for (let t = 0; t < this.attrs.length; t += 2) {
                let s = this.escapeAttribute(this.attrs[t]), r = this.attrs[t + 1];
                e += `[${s}${r ? "=" + r : ""}]`;
            }
        return this.notSelectors.forEach(t => e += `:not(${t})`), e;
    }
}, wr = class n {
    static createNotMatcher(e) { let t = new n; return t.addSelectables(e, null), t; }
    _elementMap = new Map;
    _elementPartialMap = new Map;
    _classMap = new Map;
    _classPartialMap = new Map;
    _attrValueMap = new Map;
    _attrValuePartialMap = new Map;
    _listContexts = [];
    addSelectables(e, t) {
        let s = null;
        e.length > 1 && (s = new Na(e), this._listContexts.push(s));
        for (let r = 0; r < e.length; r++)
            this._addSelectable(e[r], t, s);
    }
    _addSelectable(e, t, s) {
        let r = this, i = e.element, o = e.classNames, a = e.attrs, l = new Da(e, t, s);
        if (i && (a.length === 0 && o.length === 0 ? this._addTerminal(r._elementMap, i, l) : r = this._addPartial(r._elementPartialMap, i)), o)
            for (let c = 0; c < o.length; c++) {
                let p = a.length === 0 && c === o.length - 1, h = o[c];
                p ? this._addTerminal(r._classMap, h, l) : r = this._addPartial(r._classPartialMap, h);
            }
        if (a)
            for (let c = 0; c < a.length; c += 2) {
                let p = c === a.length - 2, h = a[c], m = a[c + 1];
                if (p) {
                    let v = r._attrValueMap, w = v.get(h);
                    w || (w = new Map, v.set(h, w)), this._addTerminal(w, m, l);
                }
                else {
                    let v = r._attrValuePartialMap, w = v.get(h);
                    w || (w = new Map, v.set(h, w)), r = this._addPartial(w, m);
                }
            }
    }
    _addTerminal(e, t, s) { let r = e.get(t); r || (r = [], e.set(t, r)), r.push(s); }
    _addPartial(e, t) { let s = e.get(t); return s || (s = new n, e.set(t, s)), s; }
    match(e, t) {
        let s = !1, r = e.element, i = e.classNames, o = e.attrs;
        for (let a = 0; a < this._listContexts.length; a++)
            this._listContexts[a].alreadyMatched = !1;
        if (s = this._matchTerminal(this._elementMap, r, e, t) || s, s = this._matchPartial(this._elementPartialMap, r, e, t) || s, i)
            for (let a = 0; a < i.length; a++) {
                let l = i[a];
                s = this._matchTerminal(this._classMap, l, e, t) || s, s = this._matchPartial(this._classPartialMap, l, e, t) || s;
            }
        if (o)
            for (let a = 0; a < o.length; a += 2) {
                let l = o[a], c = o[a + 1], p = this._attrValueMap.get(l);
                c && (s = this._matchTerminal(p, "", e, t) || s), s = this._matchTerminal(p, c, e, t) || s;
                let h = this._attrValuePartialMap.get(l);
                c && (s = this._matchPartial(h, "", e, t) || s), s = this._matchPartial(h, c, e, t) || s;
            }
        return s;
    }
    _matchTerminal(e, t, s, r) {
        if (!e || typeof t != "string")
            return !1;
        let i = e.get(t) || [], o = e.get("*");
        if (o && (i = i.concat(o)), i.length === 0)
            return !1;
        let a, l = !1;
        for (let c = 0; c < i.length; c++)
            a = i[c], l = a.finalize(s, r) || l;
        return l;
    }
    _matchPartial(e, t, s, r) {
        if (!e || typeof t != "string")
            return !1;
        let i = e.get(t);
        return i ? i.match(s, r) : !1;
    }
}, Na = class {
    selectors;
    alreadyMatched = !1;
    constructor(e) { this.selectors = e; }
}, Da = class {
    selector;
    cbContext;
    listContext;
    notSelectors;
    constructor(e, t, s) { this.selector = e, this.cbContext = t, this.listContext = s, this.notSelectors = e.notSelectors; }
    finalize(e, t) { let s = !0; return this.notSelectors.length > 0 && (!this.listContext || !this.listContext.alreadyMatched) && (s = !wr.createNotMatcher(this.notSelectors).match(e, null)), s && t && (!this.listContext || !this.listContext.alreadyMatched) && (this.listContext && (this.listContext.alreadyMatched = !0), t(this.selector, this.cbContext)), s; }
}, Bi = class {
    registry;
    constructor(e) { this.registry = e; }
    match(e) { return this.registry.has(e) ? this.registry.get(e) : []; }
}, ad = !0, Et = function (n) { return n[n.Emulated = 0] = "Emulated", n[n.None = 2] = "None", n[n.ShadowDom = 3] = "ShadowDom", n; }(Et || {}), ui = function (n) { return n[n.OnPush = 0] = "OnPush", n[n.Default = 1] = "Default", n; }(ui || {}), gs = function (n) { return n[n.None = 0] = "None", n[n.SignalBased = 1] = "SignalBased", n[n.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", n; }(gs || {}), Pa = { name: "custom-elements" }, La = { name: "no-errors-schema" }, ld = Function, te = function (n) { return n[n.NONE = 0] = "NONE", n[n.HTML = 1] = "HTML", n[n.STYLE = 2] = "STYLE", n[n.SCRIPT = 3] = "SCRIPT", n[n.URL = 4] = "URL", n[n.RESOURCE_URL = 5] = "RESOURCE_URL", n; }(te || {}), Ts = function (n) { return n[n.Error = 0] = "Error", n[n.Warning = 1] = "Warning", n[n.Ignore = 2] = "Ignore", n; }(Ts || {});
function cd(n) { let e = n.classNames && n.classNames.length ? [8, ...n.classNames] : []; return [n.element && n.element !== "*" ? n.element : "", ...n.attrs, ...e]; }
function ud(n) { let e = n.classNames && n.classNames.length ? [8, ...n.classNames] : []; return n.element ? [5, n.element, ...n.attrs, ...e] : n.attrs.length ? [3, ...n.attrs, ...e] : n.classNames && n.classNames.length ? [9, ...n.classNames] : []; }
function pd(n) { let e = cd(n), t = n.notSelectors && n.notSelectors.length ? n.notSelectors.map(s => ud(s)) : []; return e.concat(...t); }
function Qo(n) { return n ? Xn.parse(n).map(pd) : []; }
var rA = Object.freeze({ __proto__: null, CUSTOM_ELEMENTS_SCHEMA: Pa, get ChangeDetectionStrategy() { return ui; }, get InputFlags() { return gs; }, get MissingTranslationStrategy() { return Ts; }, NO_ERRORS_SCHEMA: La, get SecurityContext() { return te; }, Type: ld, get ViewEncapsulation() { return Et; }, emitDistinctChangesOnlyDefaultValue: ad, parseSelectorToR3Selector: Qo }), Pt = function (n) { return n[n.Directive = 0] = "Directive", n[n.Component = 1] = "Component", n[n.Injectable = 2] = "Injectable", n[n.Pipe = 3] = "Pipe", n[n.NgModule = 4] = "NgModule", n; }(Pt || {});
var Mi;
function Qp(n) { return n.id || Zp(n); }
function Zp(n) { return dd(fd(n.nodes).join("") + `[${n.meaning}]`); }
function Ec(n) { return n.id || Jp(n); }
function Jp(n) { let e = new Ba, t = n.nodes.map(s => s.visit(e, null)); return Kp(t.join(""), n.meaning); }
var Ri = class {
    visitText(e, t) { return e.value; }
    visitContainer(e, t) { return `[${e.children.map(s => s.visit(this)).join(", ")}]`; }
    visitIcu(e, t) { let s = Object.keys(e.cases).map(r => `${r} {${e.cases[r].visit(this)}}`); return `{${e.expression}, ${e.type}, ${s.join(", ")}}`; }
    visitTagPlaceholder(e, t) { return e.isVoid ? `<ph tag name="${e.startName}"/>` : `<ph tag name="${e.startName}">${e.children.map(s => s.visit(this)).join(", ")}</ph name="${e.closeName}">`; }
    visitPlaceholder(e, t) { return e.value ? `<ph name="${e.name}">${e.value}</ph>` : `<ph name="${e.name}"/>`; }
    visitIcuPlaceholder(e, t) { return `<ph icu name="${e.name}">${e.value.visit(this)}</ph>`; }
    visitBlockPlaceholder(e, t) { return `<ph block name="${e.startName}">${e.children.map(s => s.visit(this)).join(", ")}</ph name="${e.closeName}">`; }
}, hd = new Ri;
function fd(n) { return n.map(e => e.visit(hd, null)); }
var Ba = class extends Ri {
    visitIcu(e) { let t = Object.keys(e.cases).map(s => `${s} {${e.cases[s].visit(this)}}`); return `{${e.type}, ${t.join(", ")}}`; }
};
function dd(n) {
    Mi ??= new TextEncoder;
    let e = [...Mi.encode(n)], t = vd(e, Sc.Big), s = e.length * 8, r = new Uint32Array(80), i = 1732584193, o = 4023233417, a = 2562383102, l = 271733878, c = 3285377520;
    t[s >> 5] |= 128 << 24 - s % 32, t[(s + 64 >> 9 << 4) + 15] = s;
    for (let p = 0; p < t.length; p += 16) {
        let h = i, m = o, v = a, w = l, C = c;
        for (let b = 0; b < 80; b++) {
            b < 16 ? r[b] = t[p + b] : r[b] = aa(r[b - 3] ^ r[b - 8] ^ r[b - 14] ^ r[b - 16], 1);
            let _ = md(b, o, a, l), P = _[0], K = _[1], ne = [aa(i, 5), P, c, K, r[b]].reduce(as);
            c = l, l = a, a = aa(o, 30), o = i, i = ne;
        }
        i = as(i, h), o = as(o, m), a = as(a, v), l = as(l, w), c = as(c, C);
    }
    return Ks(i) + Ks(o) + Ks(a) + Ks(l) + Ks(c);
}
function Ks(n) { return (n >>> 0).toString(16).padStart(8, "0"); }
function md(n, e, t, s) { return n < 20 ? [e & t | ~e & s, 1518500249] : n < 40 ? [e ^ t ^ s, 1859775393] : n < 60 ? [e & t | e & s | t & s, 2400959708] : [e ^ t ^ s, 3395469782]; }
function Qc(n) { Mi ??= new TextEncoder; let e = Mi.encode(n), t = new DataView(e.buffer, e.byteOffset, e.byteLength), s = Zc(t, e.length, 0), r = Zc(t, e.length, 102072); return s == 0 && (r == 0 || r == 1) && (s = s ^ 319790063, r = r ^ -1801410264), BigInt.asUintN(32, BigInt(s)) << BigInt(32) | BigInt.asUintN(32, BigInt(r)); }
function Kp(n, e = "") { let t = Qc(n); return e && (t = BigInt.asUintN(64, t << BigInt(1)) | t >> BigInt(63) & BigInt(1), t += Qc(e)), BigInt.asUintN(63, t).toString(); }
function Zc(n, e, t) {
    let s = 2654435769, r = 2654435769, i = 0, o = e - 12;
    for (; i <= o; i += 12) {
        s += n.getUint32(i, !0), r += n.getUint32(i + 4, !0), t += n.getUint32(i + 8, !0);
        let l = Jc(s, r, t);
        s = l[0], r = l[1], t = l[2];
    }
    let a = e - i;
    return t += e, a >= 4 ? (s += n.getUint32(i, !0), i += 4, a >= 8 ? (r += n.getUint32(i, !0), i += 4, a >= 9 && (t += n.getUint8(i++) << 8), a >= 10 && (t += n.getUint8(i++) << 16), a === 11 && (t += n.getUint8(i++) << 24)) : (a >= 5 && (r += n.getUint8(i++)), a >= 6 && (r += n.getUint8(i++) << 8), a === 7 && (r += n.getUint8(i++) << 16))) : (a >= 1 && (s += n.getUint8(i++)), a >= 2 && (s += n.getUint8(i++) << 8), a === 3 && (s += n.getUint8(i++) << 16)), Jc(s, r, t)[2];
}
function Jc(n, e, t) { return n -= e, n -= t, n ^= t >>> 13, e -= t, e -= n, e ^= n << 8, t -= n, t -= e, t ^= e >>> 13, n -= e, n -= t, n ^= t >>> 12, e -= t, e -= n, e ^= n << 16, t -= n, t -= e, t ^= e >>> 5, n -= e, n -= t, n ^= t >>> 3, e -= t, e -= n, e ^= n << 10, t -= n, t -= e, t ^= e >>> 15, [n, e, t]; }
var Sc = function (n) { return n[n.Little = 0] = "Little", n[n.Big = 1] = "Big", n; }(Sc || {});
function as(n, e) { return gd(n, e)[1]; }
function gd(n, e) { let t = (n & 65535) + (e & 65535), s = (n >>> 16) + (e >>> 16) + (t >>> 16); return [s >>> 16, s << 16 | t & 65535]; }
function aa(n, e) { return n << e | n >>> 32 - e; }
function vd(n, e) {
    let t = n.length + 3 >>> 2, s = [];
    for (let r = 0; r < t; r++)
        s[r] = wd(n, r * 4, e);
    return s;
}
function Kc(n, e) { return e >= n.length ? 0 : n[e]; }
function wd(n, e, t) {
    let s = 0;
    if (t === Sc.Big)
        for (let r = 0; r < 4; r++)
            s += Kc(n, e + r) << 24 - 8 * r;
    else
        for (let r = 0; r < 4; r++)
            s += Kc(n, e + r) << 8 * r;
    return s;
}
var xc = function (n) { return n[n.None = 0] = "None", n[n.Const = 1] = "Const", n; }(xc || {}), wn = class {
    modifiers;
    constructor(e = xc.None) { this.modifiers = e; }
    hasModifier(e) { return (this.modifiers & e) !== 0; }
}, Ht = function (n) { return n[n.Dynamic = 0] = "Dynamic", n[n.Bool = 1] = "Bool", n[n.String = 2] = "String", n[n.Int = 3] = "Int", n[n.Number = 4] = "Number", n[n.Function = 5] = "Function", n[n.Inferred = 6] = "Inferred", n[n.None = 7] = "None", n; }(Ht || {}), Ct = class extends wn {
    name;
    constructor(e, t) { super(t), this.name = e; }
    visitType(e, t) { return e.visitBuiltinType(this, t); }
}, Ze = class extends wn {
    value;
    typeParams;
    constructor(e, t, s = null) { super(t), this.value = e, this.typeParams = s; }
    visitType(e, t) { return e.visitExpressionType(this, t); }
}, Ma = class extends wn {
    of;
    constructor(e, t) { super(t), this.of = e; }
    visitType(e, t) { return e.visitArrayType(this, t); }
}, Ra = class extends wn {
    valueType;
    constructor(e, t) { super(t), this.valueType = e || null; }
    visitType(e, t) { return e.visitMapType(this, t); }
}, Fi = class extends wn {
    type;
    constructor(e, t) { super(t), this.type = e; }
    visitType(e, t) { return e.visitTransplantedType(this, t); }
}, qe = new Ct(Ht.Dynamic), Oe = new Ct(Ht.Inferred), eh = new Ct(Ht.Bool), Ed = new Ct(Ht.Int), Zo = new Ct(Ht.Number), Jo = new Ct(Ht.String), Sd = new Ct(Ht.Function), At = new Ct(Ht.None), bs = function (n) { return n[n.Minus = 0] = "Minus", n[n.Plus = 1] = "Plus", n; }(bs || {}), x = function (n) { return n[n.Equals = 0] = "Equals", n[n.NotEquals = 1] = "NotEquals", n[n.Assign = 2] = "Assign", n[n.Identical = 3] = "Identical", n[n.NotIdentical = 4] = "NotIdentical", n[n.Minus = 5] = "Minus", n[n.Plus = 6] = "Plus", n[n.Divide = 7] = "Divide", n[n.Multiply = 8] = "Multiply", n[n.Modulo = 9] = "Modulo", n[n.And = 10] = "And", n[n.Or = 11] = "Or", n[n.BitwiseOr = 12] = "BitwiseOr", n[n.BitwiseAnd = 13] = "BitwiseAnd", n[n.Lower = 14] = "Lower", n[n.LowerEquals = 15] = "LowerEquals", n[n.Bigger = 16] = "Bigger", n[n.BiggerEquals = 17] = "BiggerEquals", n[n.NullishCoalesce = 18] = "NullishCoalesce", n[n.Exponentiation = 19] = "Exponentiation", n[n.In = 20] = "In", n[n.AdditionAssignment = 21] = "AdditionAssignment", n[n.SubtractionAssignment = 22] = "SubtractionAssignment", n[n.MultiplicationAssignment = 23] = "MultiplicationAssignment", n[n.DivisionAssignment = 24] = "DivisionAssignment", n[n.RemainderAssignment = 25] = "RemainderAssignment", n[n.ExponentiationAssignment = 26] = "ExponentiationAssignment", n[n.AndAssignment = 27] = "AndAssignment", n[n.OrAssignment = 28] = "OrAssignment", n[n.NullishCoalesceAssignment = 29] = "NullishCoalesceAssignment", n; }(x || {});
function th(n, e) { return n == null || e == null ? n == e : n.isEquivalent(e); }
function nh(n, e, t) {
    let s = n.length;
    if (s !== e.length)
        return !1;
    for (let r = 0; r < s; r++)
        if (!t(n[r], e[r]))
            return !1;
    return !0;
}
function Be(n, e) { return nh(n, e, (t, s) => t.isEquivalent(s)); }
var G = class {
    type;
    sourceSpan;
    constructor(e, t) { this.type = e || null, this.sourceSpan = t || null; }
    prop(e, t) { return new Ue(this, e, null, t); }
    key(e, t, s) { return new Mt(this, e, t, s); }
    callFn(e, t, s) { return new Me(this, e, null, t, s); }
    instantiate(e, t, s) { return new Is(this, e, t, s); }
    conditional(e, t = null, s) { return new _t(this, e, t, null, s); }
    equals(e, t) { return new H(x.Equals, this, e, null, t); }
    notEquals(e, t) { return new H(x.NotEquals, this, e, null, t); }
    identical(e, t) { return new H(x.Identical, this, e, null, t); }
    notIdentical(e, t) { return new H(x.NotIdentical, this, e, null, t); }
    minus(e, t) { return new H(x.Minus, this, e, null, t); }
    plus(e, t) { return new H(x.Plus, this, e, null, t); }
    divide(e, t) { return new H(x.Divide, this, e, null, t); }
    multiply(e, t) { return new H(x.Multiply, this, e, null, t); }
    modulo(e, t) { return new H(x.Modulo, this, e, null, t); }
    power(e, t) { return new H(x.Exponentiation, this, e, null, t); }
    and(e, t) { return new H(x.And, this, e, null, t); }
    bitwiseOr(e, t) { return new H(x.BitwiseOr, this, e, null, t); }
    bitwiseAnd(e, t) { return new H(x.BitwiseAnd, this, e, null, t); }
    or(e, t) { return new H(x.Or, this, e, null, t); }
    lower(e, t) { return new H(x.Lower, this, e, null, t); }
    lowerEquals(e, t) { return new H(x.LowerEquals, this, e, null, t); }
    bigger(e, t) { return new H(x.Bigger, this, e, null, t); }
    biggerEquals(e, t) { return new H(x.BiggerEquals, this, e, null, t); }
    isBlank(e) { return this.equals(sh, e); }
    nullishCoalesce(e, t) { return new H(x.NullishCoalesce, this, e, null, t); }
    toStmt() { return new tt(this, null); }
}, et = class n extends G {
    name;
    constructor(e, t, s) { super(t, s), this.name = e; }
    isEquivalent(e) { return e instanceof n && this.name === e.name; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadVarExpr(this, t); }
    clone() { return new n(this.name, this.type, this.sourceSpan); }
    set(e) { return new H(x.Assign, this, e, null, this.sourceSpan); }
}, Yn = class n extends G {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitTypeofExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, Er = class n extends G {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitVoidExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, U = class n extends G {
    node;
    constructor(e, t, s) { super(t, s), this.node = e; }
    isEquivalent(e) { return e instanceof n && this.node === e.node; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitWrappedNodeExpr(this, t); }
    clone() { return new n(this.node, this.type, this.sourceSpan); }
}, Me = class n extends G {
    fn;
    args;
    pure;
    constructor(e, t, s, r, i = !1) { super(s, r), this.fn = e, this.args = t, this.pure = i; }
    get receiver() { return this.fn; }
    isEquivalent(e) { return e instanceof n && this.fn.isEquivalent(e.fn) && Be(this.args, e.args) && this.pure === e.pure; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitInvokeFunctionExpr(this, t); }
    clone() { return new n(this.fn.clone(), this.args.map(e => e.clone()), this.type, this.sourceSpan, this.pure); }
}, ks = class n extends G {
    tag;
    template;
    constructor(e, t, s, r) { super(s, r), this.tag = e, this.template = t; }
    isEquivalent(e) { return e instanceof n && this.tag.isEquivalent(e.tag) && this.template.isEquivalent(e.template); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitTaggedTemplateLiteralExpr(this, t); }
    clone() { return new n(this.tag.clone(), this.template.clone(), this.type, this.sourceSpan); }
}, Is = class n extends G {
    classExpr;
    args;
    constructor(e, t, s, r) { super(s, r), this.classExpr = e, this.args = t; }
    isEquivalent(e) { return e instanceof n && this.classExpr.isEquivalent(e.classExpr) && Be(this.args, e.args); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitInstantiateExpr(this, t); }
    clone() { return new n(this.classExpr.clone(), this.args.map(e => e.clone()), this.type, this.sourceSpan); }
}, Ee = class n extends G {
    value;
    constructor(e, t, s) { super(t, s), this.value = e; }
    isEquivalent(e) { return e instanceof n && this.value === e.value; }
    isConstant() { return !0; }
    visitExpression(e, t) { return e.visitLiteralExpr(this, t); }
    clone() { return new n(this.value, this.type, this.sourceSpan); }
}, Ns = class n extends G {
    elements;
    expressions;
    constructor(e, t, s) { super(null, s), this.elements = e, this.expressions = t; }
    isEquivalent(e) { return e instanceof n && nh(this.elements, e.elements, (t, s) => t.text === s.text) && Be(this.expressions, e.expressions); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitTemplateLiteralExpr(this, t); }
    clone() { return new n(this.elements.map(e => e.clone()), this.expressions.map(e => e.clone())); }
}, Sr = class n extends G {
    text;
    rawText;
    constructor(e, t, s) { super(Jo, t), this.text = e, this.rawText = s ?? Fa(bi(e)); }
    visitExpression(e, t) { return e.visitTemplateLiteralElementExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.text === this.text && e.rawText === this.rawText; }
    isConstant() { return !0; }
    clone() { return new n(this.text, this.sourceSpan, this.rawText); }
}, dn = class {
    text;
    sourceSpan;
    constructor(e, t) { this.text = e, this.sourceSpan = t; }
}, Un = class {
    text;
    sourceSpan;
    associatedMessage;
    constructor(e, t, s) { this.text = e, this.sourceSpan = t, this.associatedMessage = s; }
}, xd = "|", eu = "@@", yd = "\u241F", xr = class n extends G {
    metaBlock;
    messageParts;
    placeHolderNames;
    expressions;
    constructor(e, t, s, r, i) { super(Jo, i), this.metaBlock = e, this.messageParts = t, this.placeHolderNames = s, this.expressions = r; }
    isEquivalent(e) { return !1; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitLocalizedString(this, t); }
    clone() { return new n(this.metaBlock, this.messageParts, this.placeHolderNames, this.expressions.map(e => e.clone()), this.sourceSpan); }
    serializeI18nHead() { let e = this.metaBlock.description || ""; return this.metaBlock.meaning && (e = `${this.metaBlock.meaning}${xd}${e}`), this.metaBlock.customId && (e = `${e}${eu}${this.metaBlock.customId}`), this.metaBlock.legacyIds && this.metaBlock.legacyIds.forEach(t => { e = `${e}${yd}${t}`; }), tu(e, this.messageParts[0].text, this.getMessagePartSourceSpan(0)); }
    getMessagePartSourceSpan(e) { return this.messageParts[e]?.sourceSpan ?? this.sourceSpan; }
    getPlaceholderSourceSpan(e) { return this.placeHolderNames[e]?.sourceSpan ?? this.expressions[e]?.sourceSpan ?? this.sourceSpan; }
    serializeI18nTemplatePart(e) { let t = this.placeHolderNames[e - 1], s = this.messageParts[e], r = t.text; return t.associatedMessage?.legacyIds.length === 0 && (r += `${eu}${Kp(t.associatedMessage.messageString, t.associatedMessage.meaning)}`), tu(r, s.text, this.getMessagePartSourceSpan(e)); }
}, bi = n => n.replace(/\\/g, "\\\\"), Cd = n => n.replace(/^:/, "\\:"), Ad = n => n.replace(/:/g, "\\:"), Fa = n => n.replace(/`/g, "\\`").replace(/\${/g, "$\\{");
function tu(n, e, t) { return n === "" ? { cooked: e, raw: Fa(Cd(bi(e))), range: t } : { cooked: `:${n}:${e}`, raw: Fa(`:${Ad(bi(n))}:${bi(e)}`), range: t }; }
var Jt = class n extends G {
    value;
    typeParams;
    constructor(e, t, s = null, r) { super(t, r), this.value = e, this.typeParams = s; }
    isEquivalent(e) { return e instanceof n && this.value.name === e.value.name && this.value.moduleName === e.value.moduleName; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitExternalExpr(this, t); }
    clone() { return new n(this.value, this.type, this.typeParams, this.sourceSpan); }
}, $a = class {
    moduleName;
    name;
    constructor(e, t) { this.moduleName = e, this.name = t; }
}, _t = class n extends G {
    condition;
    falseCase;
    trueCase;
    constructor(e, t, s = null, r, i) { super(r || t.type, i), this.condition = e, this.falseCase = s, this.trueCase = t; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition) && this.trueCase.isEquivalent(e.trueCase) && th(this.falseCase, e.falseCase); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitConditionalExpr(this, t); }
    clone() { return new n(this.condition.clone(), this.trueCase.clone(), this.falseCase?.clone(), this.type, this.sourceSpan); }
}, Qn = class n extends G {
    url;
    urlComment;
    constructor(e, t, s) { super(null, t), this.url = e, this.urlComment = s; }
    isEquivalent(e) { return e instanceof n && this.url === e.url && this.urlComment === e.urlComment; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitDynamicImportExpr(this, t); }
    clone() { return new n(typeof this.url == "string" ? this.url : this.url.clone(), this.sourceSpan, this.urlComment); }
}, Ds = class n extends G {
    condition;
    constructor(e, t) { super(eh, t), this.condition = e; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitNotExpr(this, t); }
    clone() { return new n(this.condition.clone(), this.sourceSpan); }
}, Z = class n {
    name;
    type;
    constructor(e, t = null) { this.name = e, this.type = t; }
    isEquivalent(e) { return this.name === e.name; }
    clone() { return new n(this.name, this.type); }
}, Yt = class n extends G {
    params;
    statements;
    name;
    constructor(e, t, s, r, i) { super(s, r), this.params = e, this.statements = t, this.name = i; }
    isEquivalent(e) { return (e instanceof n || e instanceof yn) && Be(this.params, e.params) && Be(this.statements, e.statements); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitFunctionExpr(this, t); }
    toDeclStmt(e, t) { return new yn(e, this.params, this.statements, this.type, t, this.sourceSpan); }
    clone() { return new n(this.params.map(e => e.clone()), this.statements, this.type, this.sourceSpan, this.name); }
}, En = class n extends G {
    params;
    body;
    constructor(e, t, s, r) { super(s, r), this.params = e, this.body = t; }
    isEquivalent(e) { return !(e instanceof n) || !Be(this.params, e.params) ? !1 : this.body instanceof G && e.body instanceof G ? this.body.isEquivalent(e.body) : Array.isArray(this.body) && Array.isArray(e.body) ? Be(this.body, e.body) : !1; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitArrowFunctionExpr(this, t); }
    clone() { return new n(this.params.map(e => e.clone()), Array.isArray(this.body) ? this.body : this.body.clone(), this.type, this.sourceSpan); }
    toDeclStmt(e, t) { return new le(e, this, Oe, t, this.sourceSpan); }
}, Kt = class n extends G {
    operator;
    expr;
    parens;
    constructor(e, t, s, r, i = !0) { super(s || Zo, r), this.operator = e, this.expr = t, this.parens = i; }
    isEquivalent(e) { return e instanceof n && this.operator === e.operator && this.expr.isEquivalent(e.expr); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitUnaryOperatorExpr(this, t); }
    clone() { return new n(this.operator, this.expr.clone(), this.type, this.sourceSpan, this.parens); }
}, Tt = class n extends G {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitParenthesizedExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, H = class n extends G {
    operator;
    rhs;
    lhs;
    constructor(e, t, s, r, i) { super(r || t.type, i), this.operator = e, this.rhs = s, this.lhs = t; }
    isEquivalent(e) { return e instanceof n && this.operator === e.operator && this.lhs.isEquivalent(e.lhs) && this.rhs.isEquivalent(e.rhs); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitBinaryOperatorExpr(this, t); }
    clone() { return new n(this.operator, this.lhs.clone(), this.rhs.clone(), this.type, this.sourceSpan); }
    isAssignment() { let e = this.operator; return e === x.Assign || e === x.AdditionAssignment || e === x.SubtractionAssignment || e === x.MultiplicationAssignment || e === x.DivisionAssignment || e === x.RemainderAssignment || e === x.ExponentiationAssignment || e === x.AndAssignment || e === x.OrAssignment || e === x.NullishCoalesceAssignment; }
}, Ue = class n extends G {
    receiver;
    name;
    constructor(e, t, s, r) { super(s, r), this.receiver = e, this.name = t; }
    get index() { return this.name; }
    isEquivalent(e) { return e instanceof n && this.receiver.isEquivalent(e.receiver) && this.name === e.name; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadPropExpr(this, t); }
    set(e) { return new H(x.Assign, this.receiver.prop(this.name), e, null, this.sourceSpan); }
    clone() { return new n(this.receiver.clone(), this.name, this.type, this.sourceSpan); }
}, Mt = class n extends G {
    receiver;
    index;
    constructor(e, t, s, r) { super(s, r), this.receiver = e, this.index = t; }
    isEquivalent(e) { return e instanceof n && this.receiver.isEquivalent(e.receiver) && this.index.isEquivalent(e.index); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadKeyExpr(this, t); }
    set(e) { return new H(x.Assign, this.receiver.key(this.index), e, null, this.sourceSpan); }
    clone() { return new n(this.receiver.clone(), this.index.clone(), this.type, this.sourceSpan); }
}, ft = class n extends G {
    entries;
    constructor(e, t, s) { super(t, s), this.entries = e; }
    isConstant() { return this.entries.every(e => e.isConstant()); }
    isEquivalent(e) { return e instanceof n && Be(this.entries, e.entries); }
    visitExpression(e, t) { return e.visitLiteralArrayExpr(this, t); }
    clone() { return new n(this.entries.map(e => e.clone()), this.type, this.sourceSpan); }
}, Zn = class n {
    key;
    value;
    quoted;
    constructor(e, t, s) { this.key = e, this.value = t, this.quoted = s; }
    isEquivalent(e) { return this.key === e.key && this.value.isEquivalent(e.value); }
    clone() { return new n(this.key, this.value.clone(), this.quoted); }
}, bt = class n extends G {
    entries;
    valueType = null;
    constructor(e, t, s) { super(t, s), this.entries = e, t && (this.valueType = t.valueType); }
    isEquivalent(e) { return e instanceof n && Be(this.entries, e.entries); }
    isConstant() { return this.entries.every(e => e.value.isConstant()); }
    visitExpression(e, t) { return e.visitLiteralMapExpr(this, t); }
    clone() { let e = this.entries.map(t => t.clone()); return new n(e, this.type, this.sourceSpan); }
}, Oa = class n extends G {
    parts;
    constructor(e, t) { super(e[e.length - 1].type, t), this.parts = e; }
    isEquivalent(e) { return e instanceof n && Be(this.parts, e.parts); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitCommaExpr(this, t); }
    clone() { return new n(this.parts.map(e => e.clone())); }
}, Sn = new Ee(null, null, null), sh = new Ee(null, Oe, null), ae = function (n) { return n[n.None = 0] = "None", n[n.Final = 1] = "Final", n[n.Private = 2] = "Private", n[n.Exported = 4] = "Exported", n[n.Static = 8] = "Static", n; }(ae || {}), yr = class {
    text;
    multiline;
    trailingNewline;
    constructor(e, t, s) { this.text = e, this.multiline = t, this.trailingNewline = s; }
    toString() { return this.multiline ? ` ${this.text} ` : this.text; }
}, Cr = class extends yr {
    tags;
    constructor(e) { super("", !0, !0), this.tags = e; }
    toString() { return Dd(this.tags); }
}, xn = class {
    modifiers;
    sourceSpan;
    leadingComments;
    constructor(e = ae.None, t = null, s) { this.modifiers = e, this.sourceSpan = t, this.leadingComments = s; }
    hasModifier(e) { return (this.modifiers & e) !== 0; }
    addLeadingComment(e) { this.leadingComments = this.leadingComments ?? [], this.leadingComments.push(e); }
}, le = class n extends xn {
    name;
    value;
    type;
    constructor(e, t, s, r, i, o) { super(r, i, o), this.name = e, this.value = t, this.type = s || t && t.type || null; }
    isEquivalent(e) { return e instanceof n && this.name === e.name && (this.value ? !!e.value && this.value.isEquivalent(e.value) : !e.value); }
    visitStatement(e, t) { return e.visitDeclareVarStmt(this, t); }
}, yn = class n extends xn {
    name;
    params;
    statements;
    type;
    constructor(e, t, s, r, i, o, a) { super(i, o, a), this.name = e, this.params = t, this.statements = s, this.type = r || null; }
    isEquivalent(e) { return e instanceof n && Be(this.params, e.params) && Be(this.statements, e.statements); }
    visitStatement(e, t) { return e.visitDeclareFunctionStmt(this, t); }
}, tt = class n extends xn {
    expr;
    constructor(e, t, s) { super(ae.None, t, s), this.expr = e; }
    isEquivalent(e) { return e instanceof n && this.expr.isEquivalent(e.expr); }
    visitStatement(e, t) { return e.visitExpressionStmt(this, t); }
}, _e = class n extends xn {
    value;
    constructor(e, t = null, s) { super(ae.None, t, s), this.value = e; }
    isEquivalent(e) { return e instanceof n && this.value.isEquivalent(e.value); }
    visitStatement(e, t) { return e.visitReturnStmt(this, t); }
}, Ar = class n extends xn {
    condition;
    trueCase;
    falseCase;
    constructor(e, t, s = [], r, i) { super(ae.None, r, i), this.condition = e, this.trueCase = t, this.falseCase = s; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition) && Be(this.trueCase, e.trueCase) && Be(this.falseCase, e.falseCase); }
    visitStatement(e, t) { return e.visitIfStmt(this, t); }
}, _d = class {
    visitType(e, t) { return e; }
    visitExpression(e, t) { return e.type && e.type.visitType(this, t), e; }
    visitBuiltinType(e, t) { return this.visitType(e, t); }
    visitExpressionType(e, t) { return e.value.visitExpression(this, t), e.typeParams !== null && e.typeParams.forEach(s => this.visitType(s, t)), this.visitType(e, t); }
    visitArrayType(e, t) { return this.visitType(e, t); }
    visitMapType(e, t) { return this.visitType(e, t); }
    visitTransplantedType(e, t) { return e; }
    visitWrappedNodeExpr(e, t) { return e; }
    visitReadVarExpr(e, t) { return this.visitExpression(e, t); }
    visitDynamicImportExpr(e, t) { return this.visitExpression(e, t); }
    visitInvokeFunctionExpr(e, t) { return e.fn.visitExpression(this, t), this.visitAllExpressions(e.args, t), this.visitExpression(e, t); }
    visitTaggedTemplateLiteralExpr(e, t) { return e.tag.visitExpression(this, t), e.template.visitExpression(this, t), this.visitExpression(e, t); }
    visitInstantiateExpr(e, t) { return e.classExpr.visitExpression(this, t), this.visitAllExpressions(e.args, t), this.visitExpression(e, t); }
    visitLiteralExpr(e, t) { return this.visitExpression(e, t); }
    visitLocalizedString(e, t) { return this.visitExpression(e, t); }
    visitExternalExpr(e, t) { return e.typeParams && e.typeParams.forEach(s => s.visitType(this, t)), this.visitExpression(e, t); }
    visitConditionalExpr(e, t) { return e.condition.visitExpression(this, t), e.trueCase.visitExpression(this, t), e.falseCase.visitExpression(this, t), this.visitExpression(e, t); }
    visitNotExpr(e, t) { return e.condition.visitExpression(this, t), this.visitExpression(e, t); }
    visitFunctionExpr(e, t) { return this.visitAllStatements(e.statements, t), this.visitExpression(e, t); }
    visitArrowFunctionExpr(e, t) { return Array.isArray(e.body) ? this.visitAllStatements(e.body, t) : e.body.visitExpression(this, t), this.visitExpression(e, t); }
    visitUnaryOperatorExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitTypeofExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitVoidExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitBinaryOperatorExpr(e, t) { return e.lhs.visitExpression(this, t), e.rhs.visitExpression(this, t), this.visitExpression(e, t); }
    visitReadPropExpr(e, t) { return e.receiver.visitExpression(this, t), this.visitExpression(e, t); }
    visitReadKeyExpr(e, t) { return e.receiver.visitExpression(this, t), e.index.visitExpression(this, t), this.visitExpression(e, t); }
    visitLiteralArrayExpr(e, t) { return this.visitAllExpressions(e.entries, t), this.visitExpression(e, t); }
    visitLiteralMapExpr(e, t) { return e.entries.forEach(s => s.value.visitExpression(this, t)), this.visitExpression(e, t); }
    visitCommaExpr(e, t) { return this.visitAllExpressions(e.parts, t), this.visitExpression(e, t); }
    visitTemplateLiteralExpr(e, t) { return this.visitAllExpressions(e.elements, t), this.visitAllExpressions(e.expressions, t), this.visitExpression(e, t); }
    visitTemplateLiteralElementExpr(e, t) { return this.visitExpression(e, t); }
    visitParenthesizedExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitAllExpressions(e, t) { e.forEach(s => s.visitExpression(this, t)); }
    visitDeclareVarStmt(e, t) { return e.value && e.value.visitExpression(this, t), e.type && e.type.visitType(this, t), e; }
    visitDeclareFunctionStmt(e, t) { return this.visitAllStatements(e.statements, t), e.type && e.type.visitType(this, t), e; }
    visitExpressionStmt(e, t) { return e.expr.visitExpression(this, t), e; }
    visitReturnStmt(e, t) { return e.value.visitExpression(this, t), e; }
    visitIfStmt(e, t) { return e.condition.visitExpression(this, t), this.visitAllStatements(e.trueCase, t), this.visitAllStatements(e.falseCase, t), e; }
    visitAllStatements(e, t) { e.forEach(s => s.visitStatement(this, t)); }
};
function Td(n, e = !1, t = !0) { return new yr(n, e, t); }
function rh(n = []) { return new Cr(n); }
function N(n, e, t) { return new et(n, e, t); }
function y(n, e = null, t) { return new Jt(n, null, e, t); }
function bd(n, e, t) { return n != null ? we(y(n, e, null), t) : null; }
function we(n, e, t) { return new Ze(n, e, t); }
function kd(n, e) { return new Fi(n, e); }
function Xs(n) { return new Yn(n); }
function R(n, e, t) { return new ft(n, e, t); }
function pe(n, e = null) { return new bt(n.map(t => new Zn(t.key, t.value, t.quoted)), e, null); }
function Id(n, e, t, s) { return new Kt(n, e, t, s); }
function ih(n, e) { return new Ds(n, e); }
function en(n, e, t, s, r) { return new Yt(n, e, t, s, r); }
function ie(n, e, t, s) { return new En(n, e, t, s); }
function pi(n, e, t, s, r) { return new Ar(n, e, t, s, r); }
function oh(n, e, t, s) { return new ks(n, e, t, s); }
function d(n, e, t) { return new Ee(n, e, t); }
function ah(n, e, t, s, r) { return new xr(n, e, t, s, r); }
function Nd(n) { return n instanceof Ee && n.value === null; }
function nu(n) {
    let e = "";
    if (n.tagName && (e += ` @${n.tagName}`), n.text) {
        if (n.text.match(/\/\*|\*\//))
            throw new Error("JSDoc text cannot contain \"/*\" and \"*/\"");
        e += " " + n.text.replace(/@/g, "\\@");
    }
    return e;
}
function Dd(n) {
    if (n.length === 0)
        return "";
    if (n.length === 1 && n[0].tagName && !n[0].text)
        return `*${nu(n[0])} `;
    let e = `*
`;
    for (let t of n)
        e += " *", e += nu(t).replace(/\n/g, `
 * `), e += `
`;
    return e += " ", e;
}
var oA = Object.freeze({ __proto__: null, ArrayType: Ma, ArrowFunctionExpr: En, BOOL_TYPE: eh, get BinaryOperator() { return x; }, BinaryOperatorExpr: H, BuiltinType: Ct, get BuiltinTypeName() { return Ht; }, CommaExpr: Oa, ConditionalExpr: _t, DYNAMIC_TYPE: qe, DeclareFunctionStmt: yn, DeclareVarStmt: le, DynamicImportExpr: Qn, Expression: G, ExpressionStatement: tt, ExpressionType: Ze, ExternalExpr: Jt, ExternalReference: $a, FUNCTION_TYPE: Sd, FnParam: Z, FunctionExpr: Yt, INFERRED_TYPE: Oe, INT_TYPE: Ed, IfStmt: Ar, InstantiateExpr: Is, InvokeFunctionExpr: Me, JSDocComment: Cr, LeadingComment: yr, LiteralArrayExpr: ft, LiteralExpr: Ee, LiteralMapEntry: Zn, LiteralMapExpr: bt, LiteralPiece: dn, LocalizedString: xr, MapType: Ra, NONE_TYPE: At, NULL_EXPR: Sn, NUMBER_TYPE: Zo, NotExpr: Ds, ParenthesizedExpr: Tt, PlaceholderPiece: Un, ReadKeyExpr: Mt, ReadPropExpr: Ue, ReadVarExpr: et, RecursiveAstVisitor: _d, ReturnStatement: _e, STRING_TYPE: Jo, Statement: xn, get StmtModifier() { return ae; }, TYPED_NULL_EXPR: sh, TaggedTemplateLiteralExpr: ks, TemplateLiteralElementExpr: Sr, TemplateLiteralExpr: Ns, TransplantedType: Fi, Type: wn, get TypeModifier() { return xc; }, TypeofExpr: Yn, get UnaryOperator() { return bs; }, UnaryOperatorExpr: Kt, VoidExpr: Er, WrappedNodeExpr: U, areAllEquivalent: Be, arrowFn: ie, expressionType: we, fn: en, ifStmt: pi, importExpr: y, importType: bd, isNull: Nd, jsDocComment: rh, leadingComment: Td, literal: d, literalArr: R, literalMap: pe, localizedString: ah, not: ih, nullSafeIsEquivalent: th, taggedTemplate: oh, transplantedType: kd, typeofExpr: Xs, unary: Id, variable: N }), Pd = "_c", su = N("<unknown>"), Ld = {}, Bd = 50, $i = class n extends G {
    resolved;
    original;
    shared = !1;
    constructor(e) { super(e.type), this.resolved = e, this.original = e; }
    visitExpression(e, t) { return t === Ld ? this.original.visitExpression(e, t) : this.resolved.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && this.resolved.isEquivalent(e.resolved); }
    isConstant() { return !0; }
    clone() { throw new Error("Not supported."); }
    fixup(e) { this.resolved = e, this.shared = !0; }
}, Oi = class {
    isClosureCompilerEnabled;
    statements = [];
    literals = new Map;
    literalFactories = new Map;
    sharedConstants = new Map;
    _claimedNames = new Map;
    nextNameIndex = 0;
    constructor(e = !1) { this.isClosureCompilerEnabled = e; }
    getConstLiteral(e, t) {
        if (e instanceof Ee && !ru(e) || e instanceof $i)
            return e;
        let s = xs.INSTANCE.keyOf(e), r = this.literals.get(s), i = !1;
        if (r || (r = new $i(e), this.literals.set(s, r), i = !0), !i && !r.shared || i && t) {
            let o = this.freshName(), a, l;
            this.isClosureCompilerEnabled && ru(e) ? (a = new Yt([], [new _e(e)]), l = N(o).callFn([])) : (a = e, l = N(o)), this.statements.push(new le(o, a, Oe, ae.Final)), r.fixup(l);
        }
        return r;
    }
    getSharedConstant(e, t) {
        let s = e.keyOf(t);
        if (!this.sharedConstants.has(s)) {
            let r = this.freshName();
            this.sharedConstants.set(s, N(r)), this.statements.push(e.toSharedConstantDeclaration(r, t));
        }
        return this.sharedConstants.get(s);
    }
    getLiteralFactory(e) {
        if (e instanceof ft) {
            let t = e.entries.map(r => r.isConstant() ? r : su), s = xs.INSTANCE.keyOf(R(t));
            return this._getLiteralFactory(s, e.entries, r => R(r));
        }
        else {
            let t = pe(e.entries.map(r => ({ key: r.key, value: r.value.isConstant() ? r.value : su, quoted: r.quoted }))), s = xs.INSTANCE.keyOf(t);
            return this._getLiteralFactory(s, e.entries.map(r => r.value), r => pe(r.map((i, o) => ({ key: e.entries[o].key, value: i, quoted: e.entries[o].quoted }))));
        }
    }
    getSharedFunctionReference(e, t, s = !0) {
        let r = e instanceof En;
        for (let o of this.statements)
            if (r && o instanceof le && o.value?.isEquivalent(e) || !r && o instanceof yn && e instanceof Yt && e.isEquivalent(o))
                return N(o.name);
        let i = s ? this.uniqueName(t) : t;
        return this.statements.push(e instanceof Yt ? e.toDeclStmt(i, ae.Final) : new le(i, e, Oe, ae.Final, e.sourceSpan)), N(i);
    }
    _getLiteralFactory(e, t, s) {
        let r = this.literalFactories.get(e), i = t.filter(o => !o.isConstant());
        if (!r) {
            let o = t.map((p, h) => p.isConstant() ? this.getConstLiteral(p, !0) : N(`a${h}`)), a = o.filter(Md).map(p => new Z(p.name, qe)), l = ie(a, s(o), Oe), c = this.freshName();
            this.statements.push(new le(c, l, Oe, ae.Final)), r = N(c), this.literalFactories.set(e, r);
        }
        return { literalFactory: r, literalFactoryArguments: i };
    }
    uniqueName(e, t = !0) { let s = this._claimedNames.get(e) ?? 0, r = s === 0 && !t ? `${e}` : `${e}${s}`; return this._claimedNames.set(e, s + 1), r; }
    freshName() { return this.uniqueName(Pd); }
}, xs = class n {
    static INSTANCE = new n;
    keyOf(e) {
        if (e instanceof Ee && typeof e.value == "string")
            return `"${e.value}"`;
        if (e instanceof Ee)
            return String(e.value);
        if (e instanceof ft) {
            let t = [];
            for (let s of e.entries)
                t.push(this.keyOf(s));
            return `[${t.join(",")}]`;
        }
        else if (e instanceof bt) {
            let t = [];
            for (let s of e.entries) {
                let r = s.key;
                s.quoted && (r = `"${r}"`), t.push(r + ":" + this.keyOf(s.value));
            }
            return `{${t.join(",")}}`;
        }
        else {
            if (e instanceof Jt)
                return `import("${e.value.moduleName}", ${e.value.name})`;
            if (e instanceof et)
                return `read(${e.name})`;
            if (e instanceof Yn)
                return `typeof(${this.keyOf(e.expr)})`;
            throw new Error(`${this.constructor.name} does not handle expressions of type ${e.constructor.name}`);
        }
    }
};
function Md(n) { return n instanceof et; }
function ru(n) { return n instanceof Ee && typeof n.value == "string" && n.value.length >= Bd; }
var g = "@angular/core", f = (() => {
    class n {
        static NEW_METHOD = "factory";
        static TRANSFORM_METHOD = "transform";
        static PATCH_DEPS = "patchedDeps";
        static core = { name: null, moduleName: g };
        static namespaceHTML = { name: "\u0275\u0275namespaceHTML", moduleName: g };
        static namespaceMathML = { name: "\u0275\u0275namespaceMathML", moduleName: g };
        static namespaceSVG = { name: "\u0275\u0275namespaceSVG", moduleName: g };
        static element = { name: "\u0275\u0275element", moduleName: g };
        static elementStart = { name: "\u0275\u0275elementStart", moduleName: g };
        static elementEnd = { name: "\u0275\u0275elementEnd", moduleName: g };
        static domElement = { name: "\u0275\u0275domElement", moduleName: g };
        static domElementStart = { name: "\u0275\u0275domElementStart", moduleName: g };
        static domElementEnd = { name: "\u0275\u0275domElementEnd", moduleName: g };
        static domElementContainer = { name: "\u0275\u0275domElementContainer", moduleName: g };
        static domElementContainerStart = { name: "\u0275\u0275domElementContainerStart", moduleName: g };
        static domElementContainerEnd = { name: "\u0275\u0275domElementContainerEnd", moduleName: g };
        static domTemplate = { name: "\u0275\u0275domTemplate", moduleName: g };
        static domListener = { name: "\u0275\u0275domListener", moduleName: g };
        static advance = { name: "\u0275\u0275advance", moduleName: g };
        static syntheticHostProperty = { name: "\u0275\u0275syntheticHostProperty", moduleName: g };
        static syntheticHostListener = { name: "\u0275\u0275syntheticHostListener", moduleName: g };
        static attribute = { name: "\u0275\u0275attribute", moduleName: g };
        static classProp = { name: "\u0275\u0275classProp", moduleName: g };
        static elementContainerStart = { name: "\u0275\u0275elementContainerStart", moduleName: g };
        static elementContainerEnd = { name: "\u0275\u0275elementContainerEnd", moduleName: g };
        static elementContainer = { name: "\u0275\u0275elementContainer", moduleName: g };
        static styleMap = { name: "\u0275\u0275styleMap", moduleName: g };
        static classMap = { name: "\u0275\u0275classMap", moduleName: g };
        static styleProp = { name: "\u0275\u0275styleProp", moduleName: g };
        static interpolate = { name: "\u0275\u0275interpolate", moduleName: g };
        static interpolate1 = { name: "\u0275\u0275interpolate1", moduleName: g };
        static interpolate2 = { name: "\u0275\u0275interpolate2", moduleName: g };
        static interpolate3 = { name: "\u0275\u0275interpolate3", moduleName: g };
        static interpolate4 = { name: "\u0275\u0275interpolate4", moduleName: g };
        static interpolate5 = { name: "\u0275\u0275interpolate5", moduleName: g };
        static interpolate6 = { name: "\u0275\u0275interpolate6", moduleName: g };
        static interpolate7 = { name: "\u0275\u0275interpolate7", moduleName: g };
        static interpolate8 = { name: "\u0275\u0275interpolate8", moduleName: g };
        static interpolateV = { name: "\u0275\u0275interpolateV", moduleName: g };
        static nextContext = { name: "\u0275\u0275nextContext", moduleName: g };
        static resetView = { name: "\u0275\u0275resetView", moduleName: g };
        static templateCreate = { name: "\u0275\u0275template", moduleName: g };
        static defer = { name: "\u0275\u0275defer", moduleName: g };
        static deferWhen = { name: "\u0275\u0275deferWhen", moduleName: g };
        static deferOnIdle = { name: "\u0275\u0275deferOnIdle", moduleName: g };
        static deferOnImmediate = { name: "\u0275\u0275deferOnImmediate", moduleName: g };
        static deferOnTimer = { name: "\u0275\u0275deferOnTimer", moduleName: g };
        static deferOnHover = { name: "\u0275\u0275deferOnHover", moduleName: g };
        static deferOnInteraction = { name: "\u0275\u0275deferOnInteraction", moduleName: g };
        static deferOnViewport = { name: "\u0275\u0275deferOnViewport", moduleName: g };
        static deferPrefetchWhen = { name: "\u0275\u0275deferPrefetchWhen", moduleName: g };
        static deferPrefetchOnIdle = { name: "\u0275\u0275deferPrefetchOnIdle", moduleName: g };
        static deferPrefetchOnImmediate = { name: "\u0275\u0275deferPrefetchOnImmediate", moduleName: g };
        static deferPrefetchOnTimer = { name: "\u0275\u0275deferPrefetchOnTimer", moduleName: g };
        static deferPrefetchOnHover = { name: "\u0275\u0275deferPrefetchOnHover", moduleName: g };
        static deferPrefetchOnInteraction = { name: "\u0275\u0275deferPrefetchOnInteraction", moduleName: g };
        static deferPrefetchOnViewport = { name: "\u0275\u0275deferPrefetchOnViewport", moduleName: g };
        static deferHydrateWhen = { name: "\u0275\u0275deferHydrateWhen", moduleName: g };
        static deferHydrateNever = { name: "\u0275\u0275deferHydrateNever", moduleName: g };
        static deferHydrateOnIdle = { name: "\u0275\u0275deferHydrateOnIdle", moduleName: g };
        static deferHydrateOnImmediate = { name: "\u0275\u0275deferHydrateOnImmediate", moduleName: g };
        static deferHydrateOnTimer = { name: "\u0275\u0275deferHydrateOnTimer", moduleName: g };
        static deferHydrateOnHover = { name: "\u0275\u0275deferHydrateOnHover", moduleName: g };
        static deferHydrateOnInteraction = { name: "\u0275\u0275deferHydrateOnInteraction", moduleName: g };
        static deferHydrateOnViewport = { name: "\u0275\u0275deferHydrateOnViewport", moduleName: g };
        static deferEnableTimerScheduling = { name: "\u0275\u0275deferEnableTimerScheduling", moduleName: g };
        static conditionalCreate = { name: "\u0275\u0275conditionalCreate", moduleName: g };
        static conditionalBranchCreate = { name: "\u0275\u0275conditionalBranchCreate", moduleName: g };
        static conditional = { name: "\u0275\u0275conditional", moduleName: g };
        static repeater = { name: "\u0275\u0275repeater", moduleName: g };
        static repeaterCreate = { name: "\u0275\u0275repeaterCreate", moduleName: g };
        static repeaterTrackByIndex = { name: "\u0275\u0275repeaterTrackByIndex", moduleName: g };
        static repeaterTrackByIdentity = { name: "\u0275\u0275repeaterTrackByIdentity", moduleName: g };
        static componentInstance = { name: "\u0275\u0275componentInstance", moduleName: g };
        static text = { name: "\u0275\u0275text", moduleName: g };
        static enableBindings = { name: "\u0275\u0275enableBindings", moduleName: g };
        static disableBindings = { name: "\u0275\u0275disableBindings", moduleName: g };
        static getCurrentView = { name: "\u0275\u0275getCurrentView", moduleName: g };
        static textInterpolate = { name: "\u0275\u0275textInterpolate", moduleName: g };
        static textInterpolate1 = { name: "\u0275\u0275textInterpolate1", moduleName: g };
        static textInterpolate2 = { name: "\u0275\u0275textInterpolate2", moduleName: g };
        static textInterpolate3 = { name: "\u0275\u0275textInterpolate3", moduleName: g };
        static textInterpolate4 = { name: "\u0275\u0275textInterpolate4", moduleName: g };
        static textInterpolate5 = { name: "\u0275\u0275textInterpolate5", moduleName: g };
        static textInterpolate6 = { name: "\u0275\u0275textInterpolate6", moduleName: g };
        static textInterpolate7 = { name: "\u0275\u0275textInterpolate7", moduleName: g };
        static textInterpolate8 = { name: "\u0275\u0275textInterpolate8", moduleName: g };
        static textInterpolateV = { name: "\u0275\u0275textInterpolateV", moduleName: g };
        static restoreView = { name: "\u0275\u0275restoreView", moduleName: g };
        static pureFunction0 = { name: "\u0275\u0275pureFunction0", moduleName: g };
        static pureFunction1 = { name: "\u0275\u0275pureFunction1", moduleName: g };
        static pureFunction2 = { name: "\u0275\u0275pureFunction2", moduleName: g };
        static pureFunction3 = { name: "\u0275\u0275pureFunction3", moduleName: g };
        static pureFunction4 = { name: "\u0275\u0275pureFunction4", moduleName: g };
        static pureFunction5 = { name: "\u0275\u0275pureFunction5", moduleName: g };
        static pureFunction6 = { name: "\u0275\u0275pureFunction6", moduleName: g };
        static pureFunction7 = { name: "\u0275\u0275pureFunction7", moduleName: g };
        static pureFunction8 = { name: "\u0275\u0275pureFunction8", moduleName: g };
        static pureFunctionV = { name: "\u0275\u0275pureFunctionV", moduleName: g };
        static pipeBind1 = { name: "\u0275\u0275pipeBind1", moduleName: g };
        static pipeBind2 = { name: "\u0275\u0275pipeBind2", moduleName: g };
        static pipeBind3 = { name: "\u0275\u0275pipeBind3", moduleName: g };
        static pipeBind4 = { name: "\u0275\u0275pipeBind4", moduleName: g };
        static pipeBindV = { name: "\u0275\u0275pipeBindV", moduleName: g };
        static domProperty = { name: "\u0275\u0275domProperty", moduleName: g };
        static property = { name: "\u0275\u0275property", moduleName: g };
        static i18n = { name: "\u0275\u0275i18n", moduleName: g };
        static i18nAttributes = { name: "\u0275\u0275i18nAttributes", moduleName: g };
        static i18nExp = { name: "\u0275\u0275i18nExp", moduleName: g };
        static i18nStart = { name: "\u0275\u0275i18nStart", moduleName: g };
        static i18nEnd = { name: "\u0275\u0275i18nEnd", moduleName: g };
        static i18nApply = { name: "\u0275\u0275i18nApply", moduleName: g };
        static i18nPostprocess = { name: "\u0275\u0275i18nPostprocess", moduleName: g };
        static pipe = { name: "\u0275\u0275pipe", moduleName: g };
        static projection = { name: "\u0275\u0275projection", moduleName: g };
        static projectionDef = { name: "\u0275\u0275projectionDef", moduleName: g };
        static reference = { name: "\u0275\u0275reference", moduleName: g };
        static inject = { name: "\u0275\u0275inject", moduleName: g };
        static injectAttribute = { name: "\u0275\u0275injectAttribute", moduleName: g };
        static directiveInject = { name: "\u0275\u0275directiveInject", moduleName: g };
        static invalidFactory = { name: "\u0275\u0275invalidFactory", moduleName: g };
        static invalidFactoryDep = { name: "\u0275\u0275invalidFactoryDep", moduleName: g };
        static templateRefExtractor = { name: "\u0275\u0275templateRefExtractor", moduleName: g };
        static forwardRef = { name: "forwardRef", moduleName: g };
        static resolveForwardRef = { name: "resolveForwardRef", moduleName: g };
        static replaceMetadata = { name: "\u0275\u0275replaceMetadata", moduleName: g };
        static getReplaceMetadataURL = { name: "\u0275\u0275getReplaceMetadataURL", moduleName: g };
        static ɵɵdefineInjectable = { name: "\u0275\u0275defineInjectable", moduleName: g };
        static declareInjectable = { name: "\u0275\u0275ngDeclareInjectable", moduleName: g };
        static InjectableDeclaration = { name: "\u0275\u0275InjectableDeclaration", moduleName: g };
        static resolveWindow = { name: "\u0275\u0275resolveWindow", moduleName: g };
        static resolveDocument = { name: "\u0275\u0275resolveDocument", moduleName: g };
        static resolveBody = { name: "\u0275\u0275resolveBody", moduleName: g };
        static getComponentDepsFactory = { name: "\u0275\u0275getComponentDepsFactory", moduleName: g };
        static defineComponent = { name: "\u0275\u0275defineComponent", moduleName: g };
        static declareComponent = { name: "\u0275\u0275ngDeclareComponent", moduleName: g };
        static setComponentScope = { name: "\u0275\u0275setComponentScope", moduleName: g };
        static ChangeDetectionStrategy = { name: "ChangeDetectionStrategy", moduleName: g };
        static ViewEncapsulation = { name: "ViewEncapsulation", moduleName: g };
        static ComponentDeclaration = { name: "\u0275\u0275ComponentDeclaration", moduleName: g };
        static FactoryDeclaration = { name: "\u0275\u0275FactoryDeclaration", moduleName: g };
        static declareFactory = { name: "\u0275\u0275ngDeclareFactory", moduleName: g };
        static FactoryTarget = { name: "\u0275\u0275FactoryTarget", moduleName: g };
        static defineDirective = { name: "\u0275\u0275defineDirective", moduleName: g };
        static declareDirective = { name: "\u0275\u0275ngDeclareDirective", moduleName: g };
        static DirectiveDeclaration = { name: "\u0275\u0275DirectiveDeclaration", moduleName: g };
        static InjectorDef = { name: "\u0275\u0275InjectorDef", moduleName: g };
        static InjectorDeclaration = { name: "\u0275\u0275InjectorDeclaration", moduleName: g };
        static defineInjector = { name: "\u0275\u0275defineInjector", moduleName: g };
        static declareInjector = { name: "\u0275\u0275ngDeclareInjector", moduleName: g };
        static NgModuleDeclaration = { name: "\u0275\u0275NgModuleDeclaration", moduleName: g };
        static ModuleWithProviders = { name: "ModuleWithProviders", moduleName: g };
        static defineNgModule = { name: "\u0275\u0275defineNgModule", moduleName: g };
        static declareNgModule = { name: "\u0275\u0275ngDeclareNgModule", moduleName: g };
        static setNgModuleScope = { name: "\u0275\u0275setNgModuleScope", moduleName: g };
        static registerNgModuleType = { name: "\u0275\u0275registerNgModuleType", moduleName: g };
        static PipeDeclaration = { name: "\u0275\u0275PipeDeclaration", moduleName: g };
        static definePipe = { name: "\u0275\u0275definePipe", moduleName: g };
        static declarePipe = { name: "\u0275\u0275ngDeclarePipe", moduleName: g };
        static declareClassMetadata = { name: "\u0275\u0275ngDeclareClassMetadata", moduleName: g };
        static declareClassMetadataAsync = { name: "\u0275\u0275ngDeclareClassMetadataAsync", moduleName: g };
        static setClassMetadata = { name: "\u0275setClassMetadata", moduleName: g };
        static setClassMetadataAsync = { name: "\u0275setClassMetadataAsync", moduleName: g };
        static setClassDebugInfo = { name: "\u0275setClassDebugInfo", moduleName: g };
        static queryRefresh = { name: "\u0275\u0275queryRefresh", moduleName: g };
        static viewQuery = { name: "\u0275\u0275viewQuery", moduleName: g };
        static loadQuery = { name: "\u0275\u0275loadQuery", moduleName: g };
        static contentQuery = { name: "\u0275\u0275contentQuery", moduleName: g };
        static viewQuerySignal = { name: "\u0275\u0275viewQuerySignal", moduleName: g };
        static contentQuerySignal = { name: "\u0275\u0275contentQuerySignal", moduleName: g };
        static queryAdvance = { name: "\u0275\u0275queryAdvance", moduleName: g };
        static twoWayProperty = { name: "\u0275\u0275twoWayProperty", moduleName: g };
        static twoWayBindingSet = { name: "\u0275\u0275twoWayBindingSet", moduleName: g };
        static twoWayListener = { name: "\u0275\u0275twoWayListener", moduleName: g };
        static declareLet = { name: "\u0275\u0275declareLet", moduleName: g };
        static storeLet = { name: "\u0275\u0275storeLet", moduleName: g };
        static readContextLet = { name: "\u0275\u0275readContextLet", moduleName: g };
        static attachSourceLocations = { name: "\u0275\u0275attachSourceLocations", moduleName: g };
        static NgOnChangesFeature = { name: "\u0275\u0275NgOnChangesFeature", moduleName: g };
        static InheritDefinitionFeature = { name: "\u0275\u0275InheritDefinitionFeature", moduleName: g };
        static CopyDefinitionFeature = { name: "\u0275\u0275CopyDefinitionFeature", moduleName: g };
        static ProvidersFeature = { name: "\u0275\u0275ProvidersFeature", moduleName: g };
        static HostDirectivesFeature = { name: "\u0275\u0275HostDirectivesFeature", moduleName: g };
        static ExternalStylesFeature = { name: "\u0275\u0275ExternalStylesFeature", moduleName: g };
        static listener = { name: "\u0275\u0275listener", moduleName: g };
        static getInheritedFactory = { name: "\u0275\u0275getInheritedFactory", moduleName: g };
        static sanitizeHtml = { name: "\u0275\u0275sanitizeHtml", moduleName: g };
        static sanitizeStyle = { name: "\u0275\u0275sanitizeStyle", moduleName: g };
        static sanitizeResourceUrl = { name: "\u0275\u0275sanitizeResourceUrl", moduleName: g };
        static sanitizeScript = { name: "\u0275\u0275sanitizeScript", moduleName: g };
        static sanitizeUrl = { name: "\u0275\u0275sanitizeUrl", moduleName: g };
        static sanitizeUrlOrResourceUrl = { name: "\u0275\u0275sanitizeUrlOrResourceUrl", moduleName: g };
        static trustConstantHtml = { name: "\u0275\u0275trustConstantHtml", moduleName: g };
        static trustConstantResourceUrl = { name: "\u0275\u0275trustConstantResourceUrl", moduleName: g };
        static validateIframeAttribute = { name: "\u0275\u0275validateIframeAttribute", moduleName: g };
        static InputSignalBrandWriteType = { name: "\u0275INPUT_SIGNAL_BRAND_WRITE_TYPE", moduleName: g };
        static UnwrapDirectiveSignalInputs = { name: "\u0275UnwrapDirectiveSignalInputs", moduleName: g };
        static unwrapWritableSignal = { name: "\u0275unwrapWritableSignal", moduleName: g };
    }
    return n;
})(), Rd = /-+([a-z0-9])/g;
function Fd(n) { return n.replace(Rd, (...e) => e[1].toUpperCase()); }
function $d(n, e) { return lh(n, ":", e); }
function Od(n, e) { return lh(n, ".", e); }
function lh(n, e, t) { let s = n.indexOf(e); return s == -1 ? t : [n.slice(0, s).trim(), n.slice(s + 1).trim()]; }
function Vd(n) { return n === void 0 ? null : n; }
function aA(n) { return n.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"); }
function qd(n) {
    let e = [];
    for (let t = 0; t < n.length; t++) {
        let s = n.charCodeAt(t);
        if (s >= 55296 && s <= 56319 && n.length > t + 1) {
            let r = n.charCodeAt(t + 1);
            r >= 56320 && r <= 57343 && (t++, s = (s - 55296 << 10) + r - 56320 + 65536);
        }
        s <= 127 ? e.push(s) : s <= 2047 ? e.push(s >> 6 & 31 | 192, s & 63 | 128) : s <= 65535 ? e.push(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128) : s <= 2097151 && e.push(s >> 18 & 7 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, s & 63 | 128);
    }
    return e;
}
function ch(n) {
    if (typeof n == "string")
        return n;
    if (Array.isArray(n))
        return `[${n.map(ch).join(", ")}]`;
    if (n == null)
        return "" + n;
    let e = n.overriddenName || n.name;
    if (e)
        return `${e}`;
    if (!n.toString)
        return "object";
    let t = n.toString();
    if (t == null)
        return "" + t;
    let s = t.indexOf(`
`);
    return s >= 0 ? t.slice(0, s) : t;
}
var Va = class {
    full;
    major;
    minor;
    patch;
    constructor(e) { this.full = e; let t = e.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, ki = globalThis, Ud = /^([1-9]|1[0-8])\./;
function uh(n) { return n.startsWith("0.") ? !0 : !Ud.test(n); }
var Hd = 3, Wd = "# sourceMappingURL=data:application/json;base64,", qa = class {
    file;
    sourcesContent = new Map;
    lines = [];
    lastCol0 = 0;
    hasMappings = !1;
    constructor(e = null) { this.file = e; }
    addSource(e, t = null) { return this.sourcesContent.has(e) || this.sourcesContent.set(e, t), this; }
    addLine() { return this.lines.push([]), this.lastCol0 = 0, this; }
    addMapping(e, t, s, r) {
        if (!this.currentLine)
            throw new Error("A line must be added before mappings can be added");
        if (t != null && !this.sourcesContent.has(t))
            throw new Error(`Unknown source file "${t}"`);
        if (e == null)
            throw new Error("The column in the generated code must be provided");
        if (e < this.lastCol0)
            throw new Error("Mapping should be added in output order");
        if (t && (s == null || r == null))
            throw new Error("The source location must be provided when a source url is provided");
        return this.hasMappings = !0, this.lastCol0 = e, this.currentLine.push({ col0: e, sourceUrl: t, sourceLine0: s, sourceCol0: r }), this;
    }
    get currentLine() { return this.lines.slice(-1)[0]; }
    toJSON() {
        if (!this.hasMappings)
            return null;
        let e = new Map, t = [], s = [];
        Array.from(this.sourcesContent.keys()).forEach((c, p) => { e.set(c, p), t.push(c), s.push(this.sourcesContent.get(c) || null); });
        let r = "", i = 0, o = 0, a = 0, l = 0;
        return this.lines.forEach(c => { i = 0, r += c.map(p => { let h = gi(p.col0 - i); return i = p.col0, p.sourceUrl != null && (h += gi(e.get(p.sourceUrl) - o), o = e.get(p.sourceUrl), h += gi(p.sourceLine0 - a), a = p.sourceLine0, h += gi(p.sourceCol0 - l), l = p.sourceCol0), h; }).join(","), r += ";"; }), r = r.slice(0, -1), { file: this.file || "", version: Hd, sourceRoot: "", sources: t, sourcesContent: s, mappings: r };
    }
    toJsComment() { return this.hasMappings ? "//" + Wd + jd(JSON.stringify(this, null, 0)) : ""; }
};
function jd(n) {
    let e = "", t = qd(n);
    for (let s = 0; s < t.length;) {
        let r = t[s++], i = s < t.length ? t[s++] : null, o = s < t.length ? t[s++] : null;
        e += rr(r >> 2), e += rr((r & 3) << 4 | (i === null ? 0 : i >> 4)), e += i === null ? "=" : rr((i & 15) << 2 | (o === null ? 0 : o >> 6)), e += i === null || o === null ? "=" : rr(o & 63);
    }
    return e;
}
function gi(n) {
    n = n < 0 ? (-n << 1) + 1 : n << 1;
    let e = "";
    do {
        let t = n & 31;
        n = n >> 5, n > 0 && (t = t | 32), e += rr(t);
    } while (n > 0);
    return e;
}
var zd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function rr(n) {
    if (n < 0 || n >= 64)
        throw new Error("Can only encode value in the range [0, 63]");
    return zd[n];
}
var Gd = /'|\\|\n|\r|\$/g, Xd = /^[$A-Z_][0-9A-Z_$]*$/i, Ua = "  ", Vi = class {
    indent;
    partsLength = 0;
    parts = [];
    srcSpans = [];
    constructor(e) { this.indent = e; }
}, Yd = new Map([[x.And, "&&"], [x.Bigger, ">"], [x.BiggerEquals, ">="], [x.BitwiseOr, "|"], [x.BitwiseAnd, "&"], [x.Divide, "/"], [x.Assign, "="], [x.Equals, "=="], [x.Identical, "==="], [x.Lower, "<"], [x.LowerEquals, "<="], [x.Minus, "-"], [x.Modulo, "%"], [x.Exponentiation, "**"], [x.Multiply, "*"], [x.NotEquals, "!="], [x.NotIdentical, "!=="], [x.NullishCoalesce, "??"], [x.Or, "||"], [x.Plus, "+"], [x.In, "in"], [x.AdditionAssignment, "+="], [x.SubtractionAssignment, "-="], [x.MultiplicationAssignment, "*="], [x.DivisionAssignment, "/="], [x.RemainderAssignment, "%="], [x.ExponentiationAssignment, "**="], [x.AndAssignment, "&&="], [x.OrAssignment, "||="], [x.NullishCoalesceAssignment, "??="]]), Ha = class n {
    _indent;
    static createRoot() { return new n(0); }
    _lines;
    constructor(e) { this._indent = e, this._lines = [new Vi(e)]; }
    get _currentLine() { return this._lines[this._lines.length - 1]; }
    println(e, t = "") { this.print(e || null, t, !0); }
    lineIsEmpty() { return this._currentLine.parts.length === 0; }
    lineLength() { return this._currentLine.indent * Ua.length + this._currentLine.partsLength; }
    print(e, t, s = !1) { t.length > 0 && (this._currentLine.parts.push(t), this._currentLine.partsLength += t.length, this._currentLine.srcSpans.push(e && e.sourceSpan || null)), s && this._lines.push(new Vi(this._indent)); }
    removeEmptyLastLine() { this.lineIsEmpty() && this._lines.pop(); }
    incIndent() { this._indent++, this.lineIsEmpty() && (this._currentLine.indent = this._indent); }
    decIndent() { this._indent--, this.lineIsEmpty() && (this._currentLine.indent = this._indent); }
    toSource() {
        return this.sourceLines.map(e => e.parts.length > 0 ? iu(e.indent) + e.parts.join("") : "").join(`
`);
    }
    toSourceMapGenerator(e, t = 0) {
        let s = new qa(e), r = !1, i = () => { r || (s.addSource(e, " ").addMapping(0, e, 0, 0), r = !0); };
        for (let o = 0; o < t; o++)
            s.addLine(), i();
        return this.sourceLines.forEach((o, a) => {
            s.addLine();
            let l = o.srcSpans, c = o.parts, p = o.indent * Ua.length, h = 0;
            for (; h < l.length && !l[h];)
                p += c[h].length, h++;
            for (h < l.length && a === 0 && p === 0 ? r = !0 : i(); h < l.length;) {
                let m = l[h], v = m.start.file, w = m.start.line, C = m.start.col;
                for (s.addSource(v.url, v.content).addMapping(p, v.url, w, C), p += c[h].length, h++; h < l.length && (m === l[h] || !l[h]);)
                    p += c[h].length, h++;
            }
        }), s;
    }
    spanOf(e, t) {
        let s = this._lines[e];
        if (s) {
            let r = t - iu(s.indent).length;
            for (let i = 0; i < s.parts.length; i++) {
                let o = s.parts[i];
                if (o.length > r)
                    return s.srcSpans[i];
                r -= o.length;
            }
        }
        return null;
    }
    get sourceLines() { return this._lines.length && this._lines[this._lines.length - 1].parts.length === 0 ? this._lines.slice(0, -1) : this._lines; }
}, Wa = class {
    _escapeDollarInStrings;
    lastIfCondition = null;
    constructor(e) { this._escapeDollarInStrings = e; }
    printLeadingComments(e, t) {
        if (e.leadingComments !== void 0)
            for (let s of e.leadingComments)
                s instanceof Cr ? t.print(e, `/*${s.toString()}*/`, s.trailingNewline) : s.multiline ? t.print(e, `/* ${s.text} */`, s.trailingNewline) : s.text.split(`
`).forEach(r => { t.println(e, `// ${r}`); });
    }
    visitExpressionStmt(e, t) { return this.printLeadingComments(e, t), e.expr.visitExpression(this, t), t.println(e, ";"), null; }
    visitReturnStmt(e, t) { return this.printLeadingComments(e, t), t.print(e, "return "), e.value.visitExpression(this, t), t.println(e, ";"), null; }
    visitIfStmt(e, t) { this.printLeadingComments(e, t), t.print(e, "if ("), this.lastIfCondition = e.condition, e.condition.visitExpression(this, t), this.lastIfCondition = null, t.print(e, ") {"); let s = e.falseCase != null && e.falseCase.length > 0; return e.trueCase.length <= 1 && !s ? (t.print(e, " "), this.visitAllStatements(e.trueCase, t), t.removeEmptyLastLine(), t.print(e, " ")) : (t.println(), t.incIndent(), this.visitAllStatements(e.trueCase, t), t.decIndent(), s && (t.println(e, "} else {"), t.incIndent(), this.visitAllStatements(e.falseCase, t), t.decIndent())), t.println(e, "}"), null; }
    visitInvokeFunctionExpr(e, t) { let s = e.fn instanceof En; return s && t.print(e.fn, "("), e.fn.visitExpression(this, t), s && t.print(e.fn, ")"), t.print(e, "("), this.visitAllExpressions(e.args, t, ","), t.print(e, ")"), null; }
    visitTaggedTemplateLiteralExpr(e, t) { return e.tag.visitExpression(this, t), e.template.visitExpression(this, t), null; }
    visitTemplateLiteralExpr(e, t) {
        t.print(e, "`");
        for (let s = 0; s < e.elements.length; s++) {
            e.elements[s].visitExpression(this, t);
            let r = s < e.expressions.length ? e.expressions[s] : null;
            r !== null && (t.print(r, "${"), r.visitExpression(this, t), t.print(r, "}"));
        }
        t.print(e, "`");
    }
    visitTemplateLiteralElementExpr(e, t) { t.print(e, e.rawText); }
    visitWrappedNodeExpr(e, t) { throw new Error("Abstract emitter cannot visit WrappedNodeExpr."); }
    visitTypeofExpr(e, t) { t.print(e, "typeof "), e.expr.visitExpression(this, t); }
    visitVoidExpr(e, t) { t.print(e, "void "), e.expr.visitExpression(this, t); }
    visitReadVarExpr(e, t) { return t.print(e, e.name), null; }
    visitInstantiateExpr(e, t) { return t.print(e, "new "), e.classExpr.visitExpression(this, t), t.print(e, "("), this.visitAllExpressions(e.args, t, ","), t.print(e, ")"), null; }
    visitLiteralExpr(e, t) { let s = e.value; return typeof s == "string" ? t.print(e, $n(s, this._escapeDollarInStrings)) : t.print(e, `${s}`), null; }
    visitLocalizedString(e, t) {
        let s = e.serializeI18nHead();
        t.print(e, "$localize `" + s.raw);
        for (let r = 1; r < e.messageParts.length; r++)
            t.print(e, "${"), e.expressions[r - 1].visitExpression(this, t), t.print(e, `}${e.serializeI18nTemplatePart(r).raw}`);
        return t.print(e, "`"), null;
    }
    visitConditionalExpr(e, t) { return t.print(e, "("), e.condition.visitExpression(this, t), t.print(e, "? "), e.trueCase.visitExpression(this, t), t.print(e, ": "), e.falseCase.visitExpression(this, t), t.print(e, ")"), null; }
    visitDynamicImportExpr(e, t) { t.print(e, `import(${e.url})`); }
    visitNotExpr(e, t) { return t.print(e, "!"), e.condition.visitExpression(this, t), null; }
    visitUnaryOperatorExpr(e, t) {
        let s;
        switch (e.operator) {
            case bs.Plus:
                s = "+";
                break;
            case bs.Minus:
                s = "-";
                break;
            default: throw new Error(`Unknown operator ${e.operator}`);
        }
        let r = e !== this.lastIfCondition;
        return r && t.print(e, "("), t.print(e, s), e.expr.visitExpression(this, t), r && t.print(e, ")"), null;
    }
    visitBinaryOperatorExpr(e, t) {
        let s = Yd.get(e.operator);
        if (!s)
            throw new Error(`Unknown operator ${e.operator}`);
        let r = e !== this.lastIfCondition;
        return r && t.print(e, "("), e.lhs.visitExpression(this, t), t.print(e, ` ${s} `), e.rhs.visitExpression(this, t), r && t.print(e, ")"), null;
    }
    visitReadPropExpr(e, t) { return e.receiver.visitExpression(this, t), t.print(e, "."), t.print(e, e.name), null; }
    visitReadKeyExpr(e, t) { return e.receiver.visitExpression(this, t), t.print(e, "["), e.index.visitExpression(this, t), t.print(e, "]"), null; }
    visitLiteralArrayExpr(e, t) { return t.print(e, "["), this.visitAllExpressions(e.entries, t, ","), t.print(e, "]"), null; }
    visitLiteralMapExpr(e, t) { return t.print(e, "{"), this.visitAllObjects(s => { t.print(e, `${$n(s.key, this._escapeDollarInStrings, s.quoted)}:`), s.value.visitExpression(this, t); }, e.entries, t, ","), t.print(e, "}"), null; }
    visitCommaExpr(e, t) { return t.print(e, "("), this.visitAllExpressions(e.parts, t, ","), t.print(e, ")"), null; }
    visitParenthesizedExpr(e, t) { e.expr.visitExpression(this, t); }
    visitAllExpressions(e, t, s) { this.visitAllObjects(r => r.visitExpression(this, t), e, t, s); }
    visitAllObjects(e, t, s, r) {
        let i = !1;
        for (let o = 0; o < t.length; o++)
            o > 0 && (s.lineLength() > 80 ? (s.print(null, r, !0), i || (s.incIndent(), s.incIndent(), i = !0)) : s.print(null, r, !1)), e(t[o]);
        i && (s.decIndent(), s.decIndent());
    }
    visitAllStatements(e, t) { e.forEach(s => s.visitStatement(this, t)); }
};
function $n(n, e, t = !0) {
    if (n == null)
        return null;
    let s = n.replace(Gd, (...i) => i[0] == "$" ? e ? "\\$" : "$" : i[0] == `
` ? "\\n" : i[0] == "\r" ? "\\r" : `\\${i[0]}`);
    return t || !Xd.test(s) ? `'${s}'` : s;
}
function iu(n) {
    let e = "";
    for (let t = 0; t < n; t++)
        e += Ua;
    return e;
}
function Ko(n, e) {
    if (e === 0)
        return we(n);
    let t = [];
    for (let s = 0; s < e; s++)
        t.push(qe);
    return we(n, void 0, t);
}
function Qd(n, e) { let t = $n(e, !1, !1); return t !== e ? `${n}[${t}]` : `${n}.${e}`; }
function Zd(n) { return ph("ngJitMode", n); }
function _r(n) { return ph("ngDevMode", n); }
function ph(n, e) { let t = new Jt({ name: n, moduleName: null }), s = new H(x.Identical, new Yn(t), d("undefined")), r = new H(x.Or, s, t, void 0, void 0); return new H(x.And, r, e); }
function ge(n) { let e = new U(n); return { value: e, type: e }; }
function xt(n, e) { let t = R(n.map(s => s.value)); return e ? ie([], t) : t; }
function yc(n, e) { return { expression: n, forwardRef: e }; }
function vs({ expression: n, forwardRef: e }) {
    switch (e) {
        case 0:
        case 1: return n;
        case 2: return Cc(n);
    }
}
function Cc(n) { return y(f.forwardRef).callFn([ie([], n)]); }
var qi = function (n) { return n[n.Class = 0] = "Class", n[n.Function = 1] = "Function", n; }(qi || {});
function Rn(n) {
    let e = N("__ngFactoryType__"), t = null, s = au(n) ? e : new H(x.Or, e, n.type.value), r = null;
    n.deps !== null ? n.deps !== "invalid" && (r = new Is(s, ou(n.deps, n.target))) : (t = N(`\u0275${n.name}_BaseFactory`), r = t.callFn([s]));
    let i = [], o = null;
    function a(c) { let p = N("__ngConditionalFactory__"); i.push(new le(p.name, Sn, Oe)); let h = r !== null ? p.set(r).toStmt() : y(f.invalidFactory).callFn([]).toStmt(); return i.push(pi(e, [h], [p.set(c).toStmt()])), p; }
    if (au(n)) {
        let c = ou(n.delegateDeps, n.target), p = new (n.delegateType === qi.Class ? Is : Me)(n.delegate, c);
        o = a(p);
    }
    else
        tm(n) ? o = a(n.expression) : o = r;
    if (o === null)
        i.push(y(f.invalidFactory).callFn([]).toStmt());
    else if (t !== null) {
        let c = y(f.getInheritedFactory).callFn([n.type.value]), p = new H(x.Or, t, t.set(c));
        i.push(new _e(p.callFn([s])));
    }
    else
        i.push(new _e(o));
    let l = en([new Z(e.name, qe)], i, Oe, void 0, `${n.name}_Factory`);
    return t !== null && (l = ie([], [new le(t.name), new _e(l)]).callFn([], void 0, !0)), { expression: l, statements: [], type: hh(n) };
}
function hh(n) { let e = n.deps !== null && n.deps !== "invalid" ? Kd(n.deps) : At; return we(y(f.FactoryDeclaration, [Ko(n.type.type, n.typeArgumentCount), e])); }
function ou(n, e) { return n.map((t, s) => Jd(t, e, s)); }
function Jd(n, e, t) {
    if (n.token === null)
        return y(f.invalidFactoryDep).callFn([d(t)]);
    if (n.attributeNameType === null) {
        let s = 0 | (n.self ? 2 : 0) | (n.skipSelf ? 4 : 0) | (n.host ? 1 : 0) | (n.optional ? 8 : 0) | (e === Pt.Pipe ? 16 : 0), r = s !== 0 || n.optional ? d(s) : null, i = [n.token];
        r && i.push(r);
        let o = nm(e);
        return y(o).callFn(i);
    }
    else
        return y(f.injectAttribute).callFn([n.token]);
}
function Kd(n) { let e = !1, t = n.map(s => { let r = em(s); return r !== null ? (e = !0, r) : d(null); }); return e ? we(R(t)) : At; }
function em(n) { let e = []; return n.attributeNameType !== null && e.push({ key: "attribute", value: n.attributeNameType, quoted: !1 }), n.optional && e.push({ key: "optional", value: d(!0), quoted: !1 }), n.host && e.push({ key: "host", value: d(!0), quoted: !1 }), n.self && e.push({ key: "self", value: d(!0), quoted: !1 }), n.skipSelf && e.push({ key: "skipSelf", value: d(!0), quoted: !1 }), e.length > 0 ? pe(e) : null; }
function au(n) { return n.delegateType !== void 0; }
function tm(n) { return n.expression !== void 0; }
function nm(n) {
    switch (n) {
        case Pt.Component:
        case Pt.Directive:
        case Pt.Pipe: return f.directiveInject;
        case Pt.NgModule:
        case Pt.Injectable:
        default: return f.inject;
    }
}
var Jn = class {
    start;
    end;
    constructor(e, t) { this.start = e, this.end = t; }
    toAbsolute(e) { return new Qe(e + this.start, e + this.end); }
}, se = class {
    span;
    sourceSpan;
    constructor(e, t) { this.span = e, this.sourceSpan = t; }
    toString() { return "AST"; }
}, Tr = class extends se {
    nameSpan;
    constructor(e, t, s) { super(e, t), this.nameSpan = s; }
}, Re = class extends se {
    visit(e, t = null) { }
}, Rt = class extends se {
    visit(e, t = null) { return e.visitImplicitReceiver(this, t); }
}, Kn = class extends Rt {
    visit(e, t = null) { return e.visitThisReceiver?.(this, t); }
}, Ps = class extends se {
    expressions;
    constructor(e, t, s) { super(e, t), this.expressions = s; }
    visit(e, t = null) { return e.visitChain(this, t); }
}, Ui = class extends se {
    condition;
    trueExp;
    falseExp;
    constructor(e, t, s, r, i) { super(e, t), this.condition = s, this.trueExp = r, this.falseExp = i; }
    visit(e, t = null) { return e.visitConditional(this, t); }
}, mn = class extends Tr {
    receiver;
    name;
    constructor(e, t, s, r, i) { super(e, t, s), this.receiver = r, this.name = i; }
    visit(e, t = null) { return e.visitPropertyRead(this, t); }
}, Hi = class extends Tr {
    receiver;
    name;
    constructor(e, t, s, r, i) { super(e, t, s), this.receiver = r, this.name = i; }
    visit(e, t = null) { return e.visitSafePropertyRead(this, t); }
}, Ls = class extends se {
    receiver;
    key;
    constructor(e, t, s, r) { super(e, t), this.receiver = s, this.key = r; }
    visit(e, t = null) { return e.visitKeyedRead(this, t); }
}, Wi = class extends se {
    receiver;
    key;
    constructor(e, t, s, r) { super(e, t), this.receiver = s, this.key = r; }
    visit(e, t = null) { return e.visitSafeKeyedRead(this, t); }
}, Ii = function (n) { return n[n.ReferencedByName = 0] = "ReferencedByName", n[n.ReferencedDirectly = 1] = "ReferencedDirectly", n; }(Ii || {}), ji = class extends Tr {
    exp;
    name;
    args;
    type;
    constructor(e, t, s, r, i, o, a) { super(e, t, a), this.exp = s, this.name = r, this.args = i, this.type = o; }
    visit(e, t = null) { return e.visitPipe(this, t); }
}, ze = class extends se {
    value;
    constructor(e, t, s) { super(e, t), this.value = s; }
    visit(e, t = null) { return e.visitLiteralPrimitive(this, t); }
}, zi = class extends se {
    expressions;
    constructor(e, t, s) { super(e, t), this.expressions = s; }
    visit(e, t = null) { return e.visitLiteralArray(this, t); }
}, Gi = class extends se {
    keys;
    values;
    constructor(e, t, s, r) { super(e, t), this.keys = s, this.values = r; }
    visit(e, t = null) { return e.visitLiteralMap(this, t); }
}, hi = class extends se {
    strings;
    expressions;
    constructor(e, t, s, r) { super(e, t), this.strings = s, this.expressions = r; }
    visit(e, t = null) { return e.visitInterpolation(this, t); }
}, Ne = class extends se {
    operation;
    left;
    right;
    constructor(e, t, s, r, i) { super(e, t), this.operation = s, this.left = r, this.right = i; }
    visit(e, t = null) { return e.visitBinary(this, t); }
    static isAssignmentOperation(e) { return e === "=" || e === "+=" || e === "-=" || e === "*=" || e === "/=" || e === "%=" || e === "**=" || e === "&&=" || e === "||=" || e === "??="; }
}, ys = class n extends Ne {
    operator;
    expr;
    left = null;
    right = null;
    operation = null;
    static createMinus(e, t, s) { return new n(e, t, "-", s, "-", new ze(e, t, 0), s); }
    static createPlus(e, t, s) { return new n(e, t, "+", s, "-", s, new ze(e, t, 0)); }
    constructor(e, t, s, r, i, o, a) { super(e, t, i, o, a), this.operator = s, this.expr = r; }
    visit(e, t = null) { return e.visitUnary !== void 0 ? e.visitUnary(this, t) : e.visitBinary(this, t); }
}, br = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitPrefixNot(this, t); }
}, kr = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitTypeofExpression(this, t); }
}, Ir = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitVoidExpression(this, t); }
}, Nr = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitNonNullAssert(this, t); }
}, Dr = class extends se {
    receiver;
    args;
    argumentSpan;
    constructor(e, t, s, r, i) { super(e, t), this.receiver = s, this.args = r, this.argumentSpan = i; }
    visit(e, t = null) { return e.visitCall(this, t); }
}, Xi = class extends se {
    receiver;
    args;
    argumentSpan;
    constructor(e, t, s, r, i) { super(e, t), this.receiver = s, this.args = r, this.argumentSpan = i; }
    visit(e, t = null) { return e.visitSafeCall(this, t); }
}, Pr = class extends se {
    tag;
    template;
    constructor(e, t, s, r) { super(e, t), this.tag = s, this.template = r; }
    visit(e, t) { return e.visitTaggedTemplateLiteral(this, t); }
}, Lr = class extends se {
    elements;
    expressions;
    constructor(e, t, s, r) { super(e, t), this.elements = s, this.expressions = r; }
    visit(e, t) { return e.visitTemplateLiteral(this, t); }
}, Yi = class extends se {
    text;
    constructor(e, t, s) { super(e, t), this.text = s; }
    visit(e, t) { return e.visitTemplateLiteralElement(this, t); }
}, Qi = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t) { return e.visitParenthesizedExpression(this, t); }
}, Qe = class {
    start;
    end;
    constructor(e, t) { this.start = e, this.end = t; }
}, Ge = class extends se {
    ast;
    source;
    location;
    errors;
    constructor(e, t, s, r, i) { super(new Jn(0, t === null ? 0 : t.length), new Qe(r, t === null ? r : r + t.length)), this.ast = e, this.source = t, this.location = s, this.errors = i; }
    visit(e, t = null) { return e.visitASTWithSource ? e.visitASTWithSource(this, t) : this.ast.visit(e, t); }
    toString() { return `${this.source} in ${this.location}`; }
}, Br = class {
    sourceSpan;
    key;
    value;
    constructor(e, t, s) { this.sourceSpan = e, this.key = t, this.value = s; }
}, ja = class {
    sourceSpan;
    key;
    value;
    constructor(e, t, s) { this.sourceSpan = e, this.key = t, this.value = s; }
}, Zi = class {
    visit(e, t) { e.visit(this, t); }
    visitUnary(e, t) { this.visit(e.expr, t); }
    visitBinary(e, t) { this.visit(e.left, t), this.visit(e.right, t); }
    visitChain(e, t) { this.visitAll(e.expressions, t); }
    visitConditional(e, t) { this.visit(e.condition, t), this.visit(e.trueExp, t), this.visit(e.falseExp, t); }
    visitPipe(e, t) { this.visit(e.exp, t), this.visitAll(e.args, t); }
    visitImplicitReceiver(e, t) { }
    visitThisReceiver(e, t) { }
    visitInterpolation(e, t) { this.visitAll(e.expressions, t); }
    visitKeyedRead(e, t) { this.visit(e.receiver, t), this.visit(e.key, t); }
    visitLiteralArray(e, t) { this.visitAll(e.expressions, t); }
    visitLiteralMap(e, t) { this.visitAll(e.values, t); }
    visitLiteralPrimitive(e, t) { }
    visitPrefixNot(e, t) { this.visit(e.expression, t); }
    visitTypeofExpression(e, t) { this.visit(e.expression, t); }
    visitVoidExpression(e, t) { this.visit(e.expression, t); }
    visitNonNullAssert(e, t) { this.visit(e.expression, t); }
    visitPropertyRead(e, t) { this.visit(e.receiver, t); }
    visitSafePropertyRead(e, t) { this.visit(e.receiver, t); }
    visitSafeKeyedRead(e, t) { this.visit(e.receiver, t), this.visit(e.key, t); }
    visitCall(e, t) { this.visit(e.receiver, t), this.visitAll(e.args, t); }
    visitSafeCall(e, t) { this.visit(e.receiver, t), this.visitAll(e.args, t); }
    visitTemplateLiteral(e, t) {
        for (let s = 0; s < e.elements.length; s++) {
            this.visit(e.elements[s], t);
            let r = s < e.expressions.length ? e.expressions[s] : null;
            r !== null && this.visit(r, t);
        }
    }
    visitTemplateLiteralElement(e, t) { }
    visitTaggedTemplateLiteral(e, t) { this.visit(e.tag, t), this.visit(e.template, t); }
    visitParenthesizedExpression(e, t) { this.visit(e.expression, t); }
    visitAll(e, t) {
        for (let s of e)
            this.visit(s, t);
    }
}, ur = class {
    name;
    expression;
    type;
    sourceSpan;
    keySpan;
    valueSpan;
    isLiteral;
    isLegacyAnimation;
    constructor(e, t, s, r, i, o) { this.name = e, this.expression = t, this.type = s, this.sourceSpan = r, this.keySpan = i, this.valueSpan = o, this.isLiteral = this.type === pn.LITERAL_ATTR, this.isLegacyAnimation = this.type === pn.LEGACY_ANIMATION; }
}, pn = function (n) { return n[n.DEFAULT = 0] = "DEFAULT", n[n.LITERAL_ATTR = 1] = "LITERAL_ATTR", n[n.LEGACY_ANIMATION = 2] = "LEGACY_ANIMATION", n[n.TWO_WAY = 3] = "TWO_WAY", n; }(pn || {}), pt = function (n) { return n[n.Regular = 0] = "Regular", n[n.LegacyAnimation = 1] = "LegacyAnimation", n[n.TwoWay = 2] = "TwoWay", n; }(pt || {}), Ji = class {
    name;
    targetOrPhase;
    type;
    handler;
    sourceSpan;
    handlerSpan;
    keySpan;
    constructor(e, t, s, r, i, o, a) { this.name = e, this.targetOrPhase = t, this.type = s, this.handler = r, this.sourceSpan = i, this.handlerSpan = o, this.keySpan = a; }
}, za = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
}, Y = function (n) { return n[n.Property = 0] = "Property", n[n.Attribute = 1] = "Attribute", n[n.Class = 2] = "Class", n[n.Style = 3] = "Style", n[n.LegacyAnimation = 4] = "LegacyAnimation", n[n.TwoWay = 5] = "TwoWay", n; }(Y || {}), Ki = class {
    name;
    type;
    securityContext;
    value;
    unit;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i, o, a, l) { this.name = e, this.type = t, this.securityContext = s, this.value = r, this.unit = i, this.sourceSpan = o, this.keySpan = a, this.valueSpan = l; }
}, Lt = function (n) { return n[n.RAW_TEXT = 0] = "RAW_TEXT", n[n.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", n[n.PARSABLE_DATA = 2] = "PARSABLE_DATA", n; }(Lt || {});
function kt(n, e = !0) {
    if (n[0] != ":")
        return [null, n];
    let t = n.indexOf(":", 1);
    if (t === -1) {
        if (e)
            throw new Error(`Unsupported format "${n}" expecting ":namespace:name"`);
        return [null, n];
    }
    return [n.slice(1, t), n.slice(t + 1)];
}
function lu(n) { return kt(n)[1] === "ng-container"; }
function Ga(n) { return kt(n)[1] === "ng-content"; }
function sm(n) { return kt(n)[1] === "ng-template"; }
function Xa(n) { return n === null ? null : kt(n)[0]; }
function Ni(n, e) { return n ? `:${n}:${e}` : e; }
var ea = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e) { throw new Error("visit() not implemented for Comment"); }
}, On = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e) { return e.visitText(this); }
}, Bs = class {
    value;
    sourceSpan;
    i18n;
    constructor(e, t, s) { this.value = e, this.sourceSpan = t, this.i18n = s; }
    visit(e) { return e.visitBoundText(this); }
}, Ms = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    i18n;
    constructor(e, t, s, r, i, o) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i, this.i18n = o; }
    visit(e) { return e.visitTextAttribute(this); }
}, Ya = class n {
    name;
    type;
    securityContext;
    value;
    unit;
    sourceSpan;
    keySpan;
    valueSpan;
    i18n;
    constructor(e, t, s, r, i, o, a, l, c) { this.name = e, this.type = t, this.securityContext = s, this.value = r, this.unit = i, this.sourceSpan = o, this.keySpan = a, this.valueSpan = l, this.i18n = c; }
    static fromBoundElementProperty(e, t) {
        if (e.keySpan === void 0)
            throw new Error(`Unexpected state: keySpan must be defined for bound attributes but was not for ${e.name}: ${e.sourceSpan}`);
        return new n(e.name, e.type, e.securityContext, e.value, e.unit, e.sourceSpan, e.keySpan, e.valueSpan, t);
    }
    visit(e) { return e.visitBoundAttribute(this); }
}, Qa = class n {
    name;
    type;
    handler;
    target;
    phase;
    sourceSpan;
    handlerSpan;
    keySpan;
    constructor(e, t, s, r, i, o, a, l) { this.name = e, this.type = t, this.handler = s, this.target = r, this.phase = i, this.sourceSpan = o, this.handlerSpan = a, this.keySpan = l; }
    static fromParsedEvent(e) {
        let t = e.type === pt.Regular ? e.targetOrPhase : null, s = e.type === pt.LegacyAnimation ? e.targetOrPhase : null;
        if (e.keySpan === void 0)
            throw new Error(`Unexpected state: keySpan must be defined for bound event but was not for ${e.name}: ${e.sourceSpan}`);
        return new n(e.name, e.type, e.handler, t, s, e.sourceSpan, e.handlerSpan, e.keySpan);
    }
    visit(e) { return e.visitBoundEvent(this); }
}, Ft = class {
    name;
    attributes;
    inputs;
    outputs;
    directives;
    children;
    references;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, o, a, l, c, p, h, m) { this.name = e, this.attributes = t, this.inputs = s, this.outputs = r, this.directives = i, this.children = o, this.references = a, this.isSelfClosing = l, this.sourceSpan = c, this.startSourceSpan = p, this.endSourceSpan = h, this.i18n = m; }
    visit(e) { return e.visitElement(this); }
}, $t = class {
    nameSpan;
    sourceSpan;
    prefetchSpan;
    whenOrOnSourceSpan;
    hydrateSpan;
    constructor(e, t, s, r, i) { this.nameSpan = e, this.sourceSpan = t, this.prefetchSpan = s, this.whenOrOnSourceSpan = r, this.hydrateSpan = i; }
    visit(e) { return e.visitDeferredTrigger(this); }
}, eo = class extends $t {
    value;
    constructor(e, t, s, r, i) { super(null, t, s, r, i), this.value = e; }
}, Za = class extends $t {
}, Ja = class extends $t {
}, Ka = class extends $t {
}, to = class extends $t {
    reference;
    constructor(e, t, s, r, i, o) { super(t, s, r, i, o), this.reference = e; }
}, el = class extends $t {
    delay;
    constructor(e, t, s, r, i, o) { super(t, s, r, i, o), this.delay = e; }
}, no = class extends $t {
    reference;
    constructor(e, t, s, r, i, o) { super(t, s, r, i, o), this.reference = e; }
}, so = class extends $t {
    reference;
    constructor(e, t, s, r, i, o) { super(t, s, r, i, o), this.reference = e; }
}, dt = class {
    nameSpan;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r) { this.nameSpan = e, this.sourceSpan = t, this.startSourceSpan = s, this.endSourceSpan = r; }
}, Mr = class extends dt {
    children;
    minimumTime;
    i18n;
    constructor(e, t, s, r, i, o, a) { super(s, r, i, o), this.children = e, this.minimumTime = t, this.i18n = a; }
    visit(e) { return e.visitDeferredBlockPlaceholder(this); }
}, Rr = class extends dt {
    children;
    afterTime;
    minimumTime;
    i18n;
    constructor(e, t, s, r, i, o, a, l) { super(r, i, o, a), this.children = e, this.afterTime = t, this.minimumTime = s, this.i18n = l; }
    visit(e) { return e.visitDeferredBlockLoading(this); }
}, Fr = class extends dt {
    children;
    i18n;
    constructor(e, t, s, r, i, o) { super(t, s, r, i), this.children = e, this.i18n = o; }
    visit(e) { return e.visitDeferredBlockError(this); }
}, es = class extends dt {
    children;
    placeholder;
    loading;
    error;
    mainBlockSpan;
    i18n;
    triggers;
    prefetchTriggers;
    hydrateTriggers;
    definedTriggers;
    definedPrefetchTriggers;
    definedHydrateTriggers;
    constructor(e, t, s, r, i, o, a, l, c, p, h, m, v) { super(l, c, h, m), this.children = e, this.placeholder = i, this.loading = o, this.error = a, this.mainBlockSpan = p, this.i18n = v, this.triggers = t, this.prefetchTriggers = s, this.hydrateTriggers = r, this.definedTriggers = Object.keys(t), this.definedPrefetchTriggers = Object.keys(s), this.definedHydrateTriggers = Object.keys(r); }
    visit(e) { return e.visitDeferredBlock(this); }
    visitAll(e) { this.visitTriggers(this.definedHydrateTriggers, this.hydrateTriggers, e), this.visitTriggers(this.definedTriggers, this.triggers, e), this.visitTriggers(this.definedPrefetchTriggers, this.prefetchTriggers, e), j(e, this.children); let t = [this.placeholder, this.loading, this.error].filter(s => s !== null); j(e, t); }
    visitTriggers(e, t, s) { j(s, e.map(r => t[r])); }
}, ro = class extends dt {
    expression;
    cases;
    unknownBlocks;
    constructor(e, t, s, r, i, o, a) { super(a, r, i, o), this.expression = e, this.cases = t, this.unknownBlocks = s; }
    visit(e) { return e.visitSwitchBlock(this); }
}, $r = class extends dt {
    expression;
    children;
    i18n;
    constructor(e, t, s, r, i, o, a) { super(o, s, r, i), this.expression = e, this.children = t, this.i18n = a; }
    visit(e) { return e.visitSwitchBlockCase(this); }
}, Rs = class extends dt {
    item;
    expression;
    trackBy;
    trackKeywordSpan;
    contextVariables;
    children;
    empty;
    mainBlockSpan;
    i18n;
    constructor(e, t, s, r, i, o, a, l, c, p, h, m, v) { super(m, l, p, h), this.item = e, this.expression = t, this.trackBy = s, this.trackKeywordSpan = r, this.contextVariables = i, this.children = o, this.empty = a, this.mainBlockSpan = c, this.i18n = v; }
    visit(e) { return e.visitForLoopBlock(this); }
}, Or = class extends dt {
    children;
    i18n;
    constructor(e, t, s, r, i, o) { super(i, t, s, r), this.children = e, this.i18n = o; }
    visit(e) { return e.visitForLoopBlockEmpty(this); }
}, io = class extends dt {
    branches;
    constructor(e, t, s, r, i) { super(i, t, s, r), this.branches = e; }
    visit(e) { return e.visitIfBlock(this); }
}, Hn = class extends dt {
    expression;
    children;
    expressionAlias;
    i18n;
    constructor(e, t, s, r, i, o, a, l) { super(a, r, i, o), this.expression = e, this.children = t, this.expressionAlias = s, this.i18n = l; }
    visit(e) { return e.visitIfBlockBranch(this); }
}, oo = class {
    name;
    sourceSpan;
    nameSpan;
    constructor(e, t, s) { this.name = e, this.sourceSpan = t, this.nameSpan = s; }
    visit(e) { return e.visitUnknownBlock(this); }
}, Ac = class {
    name;
    value;
    sourceSpan;
    nameSpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.nameSpan = r, this.valueSpan = i; }
    visit(e) { return e.visitLetDeclaration(this); }
}, pr = class {
    componentName;
    tagName;
    fullName;
    attributes;
    inputs;
    outputs;
    directives;
    children;
    references;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, o, a, l, c, p, h, m, v, w) { this.componentName = e, this.tagName = t, this.fullName = s, this.attributes = r, this.inputs = i, this.outputs = o, this.directives = a, this.children = l, this.references = c, this.isSelfClosing = p, this.sourceSpan = h, this.startSourceSpan = m, this.endSourceSpan = v, this.i18n = w; }
    visit(e) { return e.visitComponent(this); }
}, fh = class {
    name;
    attributes;
    inputs;
    outputs;
    references;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, o, a, l, c) { this.name = e, this.attributes = t, this.inputs = s, this.outputs = r, this.references = i, this.sourceSpan = o, this.startSourceSpan = a, this.endSourceSpan = l, this.i18n = c; }
    visit(e) { return e.visitDirective(this); }
}, Je = class {
    tagName;
    attributes;
    inputs;
    outputs;
    directives;
    templateAttrs;
    children;
    references;
    variables;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, o, a, l, c, p, h, m, v, w) { this.tagName = e, this.attributes = t, this.inputs = s, this.outputs = r, this.directives = i, this.templateAttrs = o, this.children = a, this.references = l, this.variables = c, this.isSelfClosing = p, this.sourceSpan = h, this.startSourceSpan = m, this.endSourceSpan = v, this.i18n = w; }
    visit(e) { return e.visitTemplate(this); }
}, Fs = class {
    selector;
    attributes;
    children;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    name = "ng-content";
    constructor(e, t, s, r, i, o, a, l) { this.selector = e, this.attributes = t, this.children = s, this.isSelfClosing = r, this.sourceSpan = i, this.startSourceSpan = o, this.endSourceSpan = a, this.i18n = l; }
    visit(e) { return e.visitContent(this); }
}, Cn = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
    visit(e) { return e.visitVariable(this); }
}, Vr = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
    visit(e) { return e.visitReference(this); }
}, dh = class {
    vars;
    placeholders;
    sourceSpan;
    i18n;
    constructor(e, t, s, r) { this.vars = e, this.placeholders = t, this.sourceSpan = s, this.i18n = r; }
    visit(e) { return e.visitIcu(this); }
}, ao = class {
    tagNames;
    bindings;
    listeners;
    sourceSpan;
    constructor(e, t, s, r) {
        if (this.tagNames = e, this.bindings = t, this.listeners = s, this.sourceSpan = r, e.length === 0)
            throw new Error("HostElement must have at least one tag name.");
    }
    visit() { throw new Error("HostElement cannot be visited"); }
}, rm = class {
    visitElement(e) { j(this, e.attributes), j(this, e.inputs), j(this, e.outputs), j(this, e.directives), j(this, e.children), j(this, e.references); }
    visitTemplate(e) { j(this, e.attributes), j(this, e.inputs), j(this, e.outputs), j(this, e.directives), j(this, e.children), j(this, e.references), j(this, e.variables); }
    visitDeferredBlock(e) { e.visitAll(this); }
    visitDeferredBlockPlaceholder(e) { j(this, e.children); }
    visitDeferredBlockError(e) { j(this, e.children); }
    visitDeferredBlockLoading(e) { j(this, e.children); }
    visitSwitchBlock(e) { j(this, e.cases); }
    visitSwitchBlockCase(e) { j(this, e.children); }
    visitForLoopBlock(e) { let t = [e.item, ...e.contextVariables, ...e.children]; e.empty && t.push(e.empty), j(this, t); }
    visitForLoopBlockEmpty(e) { j(this, e.children); }
    visitIfBlock(e) { j(this, e.branches); }
    visitIfBlockBranch(e) { let t = e.children; e.expressionAlias && t.push(e.expressionAlias), j(this, t); }
    visitContent(e) { j(this, e.children); }
    visitComponent(e) { j(this, e.attributes), j(this, e.inputs), j(this, e.outputs), j(this, e.directives), j(this, e.children), j(this, e.references); }
    visitDirective(e) { j(this, e.attributes), j(this, e.inputs), j(this, e.outputs), j(this, e.references); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitText(e) { }
    visitBoundText(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitLetDeclaration(e) { }
};
function j(n, e) {
    let t = [];
    if (n.visit)
        for (let s of e)
            n.visit(s);
    else
        for (let s of e) {
            let r = s.visit(n);
            r && t.push(r);
        }
    return t;
}
var ke = class {
    nodes;
    placeholders;
    placeholderToMessage;
    meaning;
    description;
    customId;
    sources;
    id;
    legacyIds = [];
    messageString;
    constructor(e, t, s, r, i, o) { this.nodes = e, this.placeholders = t, this.placeholderToMessage = s, this.meaning = r, this.description = i, this.customId = o, this.id = this.customId, this.messageString = im(this.nodes), e.length ? this.sources = [{ filePath: e[0].sourceSpan.start.file.url, startLine: e[0].sourceSpan.start.line + 1, startCol: e[0].sourceSpan.start.col + 1, endLine: e[e.length - 1].sourceSpan.end.line + 1, endCol: e[0].sourceSpan.start.col + 1 }] : this.sources = []; }
}, Bt = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitText(this, t); }
}, Ke = class {
    children;
    sourceSpan;
    constructor(e, t) { this.children = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitContainer(this, t); }
}, An = class {
    expression;
    type;
    cases;
    sourceSpan;
    expressionPlaceholder;
    constructor(e, t, s, r, i) { this.expression = e, this.type = t, this.cases = s, this.sourceSpan = r, this.expressionPlaceholder = i; }
    visit(e, t) { return e.visitIcu(this, t); }
}, Ot = class {
    tag;
    attrs;
    startName;
    closeName;
    children;
    isVoid;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, o, a, l, c) { this.tag = e, this.attrs = t, this.startName = s, this.closeName = r, this.children = i, this.isVoid = o, this.sourceSpan = a, this.startSourceSpan = l, this.endSourceSpan = c; }
    visit(e, t) { return e.visitTagPlaceholder(this, t); }
}, ht = class {
    value;
    name;
    sourceSpan;
    constructor(e, t, s) { this.value = e, this.name = t, this.sourceSpan = s; }
    visit(e, t) { return e.visitPlaceholder(this, t); }
}, _n = class {
    value;
    name;
    sourceSpan;
    previousMessage;
    constructor(e, t, s) { this.value = e, this.name = t, this.sourceSpan = s; }
    visit(e, t) { return e.visitIcuPlaceholder(this, t); }
}, Vt = class {
    name;
    parameters;
    startName;
    closeName;
    children;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, o, a, l) { this.name = e, this.parameters = t, this.startName = s, this.closeName = r, this.children = i, this.sourceSpan = o, this.startSourceSpan = a, this.endSourceSpan = l; }
    visit(e, t) { return e.visitBlockPlaceholder(this, t); }
}, tl = class {
    visitText(e, t) { return new Bt(e.value, e.sourceSpan); }
    visitContainer(e, t) { let s = e.children.map(r => r.visit(this, t)); return new Ke(s, e.sourceSpan); }
    visitIcu(e, t) { let s = {}; return Object.keys(e.cases).forEach(i => s[i] = e.cases[i].visit(this, t)), new An(e.expression, e.type, s, e.sourceSpan, e.expressionPlaceholder); }
    visitTagPlaceholder(e, t) { let s = e.children.map(r => r.visit(this, t)); return new Ot(e.tag, e.attrs, e.startName, e.closeName, s, e.isVoid, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitPlaceholder(e, t) { return new ht(e.value, e.name, e.sourceSpan); }
    visitIcuPlaceholder(e, t) { return new _n(e.value, e.name, e.sourceSpan); }
    visitBlockPlaceholder(e, t) { let s = e.children.map(r => r.visit(this, t)); return new Vt(e.name, e.parameters, e.startName, e.closeName, s, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
}, nl = class {
    visitText(e, t) { }
    visitContainer(e, t) { e.children.forEach(s => s.visit(this)); }
    visitIcu(e, t) { Object.keys(e.cases).forEach(s => { e.cases[s].visit(this); }); }
    visitTagPlaceholder(e, t) { e.children.forEach(s => s.visit(this)); }
    visitPlaceholder(e, t) { }
    visitIcuPlaceholder(e, t) { }
    visitBlockPlaceholder(e, t) { e.children.forEach(s => s.visit(this)); }
};
function im(n) { let e = new sl; return n.map(s => s.visit(e)).join(""); }
var sl = class {
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { let t = Object.keys(e.cases).map(s => `${s} {${e.cases[s].visit(this)}}`); return `{${e.expressionPlaceholder}, ${e.type}, ${t.join(" ")}}`; }
    visitTagPlaceholder(e) { let t = e.children.map(s => s.visit(this)).join(""); return `{$${e.startName}}${t}{$${e.closeName}}`; }
    visitPlaceholder(e) { return `{$${e.name}}`; }
    visitIcuPlaceholder(e) { return `{$${e.name}}`; }
    visitBlockPlaceholder(e) { let t = e.children.map(s => s.visit(this)).join(""); return `{$${e.startName}}${t}{$${e.closeName}}`; }
}, $s = class {
    createNameMapper(e) { return null; }
}, lo = class extends nl {
    mapName;
    internalToPublic = {};
    publicToNextId = {};
    publicToInternal = {};
    constructor(e, t) { super(), this.mapName = t, e.nodes.forEach(s => s.visit(this)); }
    toPublicName(e) { return this.internalToPublic.hasOwnProperty(e) ? this.internalToPublic[e] : null; }
    toInternalName(e) { return this.publicToInternal.hasOwnProperty(e) ? this.publicToInternal[e] : null; }
    visitText(e, t) { return null; }
    visitTagPlaceholder(e, t) { this.visitPlaceholderName(e.startName), super.visitTagPlaceholder(e, t), this.visitPlaceholderName(e.closeName); }
    visitPlaceholder(e, t) { this.visitPlaceholderName(e.name); }
    visitBlockPlaceholder(e, t) { this.visitPlaceholderName(e.startName), super.visitBlockPlaceholder(e, t), this.visitPlaceholderName(e.closeName); }
    visitIcuPlaceholder(e, t) { this.visitPlaceholderName(e.name); }
    visitPlaceholderName(e) {
        if (!e || this.internalToPublic.hasOwnProperty(e))
            return;
        let t = this.mapName(e);
        if (this.publicToInternal.hasOwnProperty(t)) {
            let s = this.publicToNextId[t];
            this.publicToNextId[t] = s + 1, t = `${t}_${s}`;
        }
        else
            this.publicToNextId[t] = 1;
        this.internalToPublic[e] = t, this.publicToInternal[t] = e;
    }
}, om = class {
    visitTag(e) {
        let t = this._serializeAttributes(e.attrs);
        if (e.children.length == 0)
            return `<${e.name}${t}/>`;
        let s = e.children.map(r => r.visit(this));
        return `<${e.name}${t}>${s.join("")}</${e.name}>`;
    }
    visitText(e) { return e.value; }
    visitDeclaration(e) { return `<?xml${this._serializeAttributes(e.attrs)} ?>`; }
    _serializeAttributes(e) { let t = Object.keys(e).map(s => `${s}="${e[s]}"`).join(" "); return t.length > 0 ? " " + t : ""; }
    visitDoctype(e) {
        return `<!DOCTYPE ${e.rootTag} [
${e.dtd}
]>`;
    }
}, am = new om;
function _c(n) { return n.map(e => e.visit(am)).join(""); }
var qr = class {
    attrs = {};
    constructor(e) { Object.keys(e).forEach(t => { this.attrs[t] = ta(e[t]); }); }
    visit(e) { return e.visitDeclaration(this); }
}, rl = class {
    rootTag;
    dtd;
    constructor(e, t) { this.rootTag = e, this.dtd = t; }
    visit(e) { return e.visitDoctype(this); }
}, M = class {
    name;
    children;
    attrs = {};
    constructor(e, t = {}, s = []) { this.name = e, this.children = s, Object.keys(t).forEach(r => { this.attrs[r] = ta(t[r]); }); }
    visit(e) { return e.visitTag(this); }
}, X = class {
    value;
    constructor(e) { this.value = ta(e); }
    visit(e) { return e.visitText(this); }
}, W = class extends X {
    constructor(e = 0) {
        super(`
${new Array(e + 1).join(" ")}`);
    }
}, lm = [[/&/g, "&amp;"], [/"/g, "&quot;"], [/'/g, "&apos;"], [/</g, "&lt;"], [/>/g, "&gt;"]];
function ta(n) { return lm.reduce((e, t) => e.replace(t[0], t[1]), n); }
var cm = "angular", cu = "messagebundle", um = "msg", Bn = "ph", Mn = "ex", pm = "source", hm = `<!ELEMENT messagebundle (msg)*>
<!ATTLIST messagebundle class CDATA #IMPLIED>

<!ELEMENT msg (#PCDATA|ph|source)*>
<!ATTLIST msg id CDATA #IMPLIED>
<!ATTLIST msg seq CDATA #IMPLIED>
<!ATTLIST msg name CDATA #IMPLIED>
<!ATTLIST msg desc CDATA #IMPLIED>
<!ATTLIST msg meaning CDATA #IMPLIED>
<!ATTLIST msg obsolete (obsolete) #IMPLIED>
<!ATTLIST msg xml:space (default|preserve) "default">
<!ATTLIST msg is_hidden CDATA #IMPLIED>

<!ELEMENT source (#PCDATA)>

<!ELEMENT ph (#PCDATA|ex)*>
<!ATTLIST ph name CDATA #REQUIRED>

<!ELEMENT ex (#PCDATA)>`, il = class extends $s {
    write(e, t) { let s = new ol, r = new fm, i = new M(cu); return i.attrs.handler = cm, e.forEach(o => { let a = { id: o.id }; o.description && (a.desc = o.description), o.meaning && (a.meaning = o.meaning); let l = []; o.sources.forEach(c => { l.push(new M(pm, {}, [new X(`${c.filePath}:${c.startLine}${c.endLine !== c.startLine ? "," + c.endLine : ""}`)])); }), i.children.push(new W(2), new M(um, a, [...l, ...r.serialize(o.nodes)])); }), i.children.push(new W), _c([new qr({ version: "1.0", encoding: "UTF-8" }), new W, new rl(cu, hm), new W, s.addDefaultExamples(i), new W]); }
    load(e, t) { throw new Error("Unsupported"); }
    digest(e) { return mh(e); }
    createNameMapper(e) { return new lo(e, Tc); }
}, fm = class {
    visitText(e, t) { return [new X(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new X(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new X(`${r} {`), ...e.cases[r].visit(this), new X("} ")); }), s.push(new X("}")), s; }
    visitTagPlaceholder(e, t) {
        let s = new X(`<${e.tag}>`), r = new M(Mn, {}, [s]), i = new M(Bn, { name: e.startName }, [r, s]);
        if (e.isVoid)
            return [i];
        let o = new X(`</${e.tag}>`), a = new M(Mn, {}, [o]), l = new M(Bn, { name: e.closeName }, [a, o]);
        return [i, ...this.serialize(e.children), l];
    }
    visitPlaceholder(e, t) { let s = new X(`{{${e.value}}}`), r = new M(Mn, {}, [s]); return [new M(Bn, { name: e.name }, [r, s])]; }
    visitBlockPlaceholder(e, t) { let s = new X(`@${e.name}`), r = new M(Mn, {}, [s]), i = new M(Bn, { name: e.startName }, [r, s]), o = new X("}"), a = new M(Mn, {}, [o]), l = new M(Bn, { name: e.closeName }, [a, o]); return [i, ...this.serialize(e.children), l]; }
    visitIcuPlaceholder(e, t) { let s = e.value.expression, r = e.value.type, i = Object.keys(e.value.cases).map(l => l + " {...}").join(" "), o = new X(`{${s}, ${r}, ${i}}`), a = new M(Mn, {}, [o]); return [new M(Bn, { name: e.name }, [a, o])]; }
    serialize(e) { return [].concat(...e.map(t => t.visit(this))); }
};
function mh(n) { return Ec(n); }
var ol = class {
    addDefaultExamples(e) { return e.visit(this), e; }
    visitTag(e) {
        if (e.name === Bn) {
            if (!e.children || e.children.length == 0) {
                let t = new X(e.attrs.name || "...");
                e.children = [new M(Mn, {}, [t])];
            }
        }
        else
            e.children && e.children.forEach(t => t.visit(this));
    }
    visitText(e) { }
    visitDeclaration(e) { }
    visitDoctype(e) { }
};
function Tc(n) { return n.toUpperCase().replace(/[^A-Z0-9_]/g, "_"); }
var gh = "i18n", al = "i18n-", dm = "VAR_";
function vh(n) { return n === gh || n.startsWith(al); }
function mm(n) { return n.attrs.some(e => vh(e.name)); }
function wh(n) { return n.nodes[0]; }
function bc(n = {}, e) { let t = {}; return n && Object.keys(n).length && Object.keys(n).forEach(s => t[fi(s, e)] = n[s]), t; }
function fi(n, e = !0) {
    let t = Tc(n);
    if (!e)
        return t;
    let s = t.split("_");
    if (s.length === 1)
        return n.toLowerCase();
    let r;
    /^\d+$/.test(s[s.length - 1]) && (r = s.pop());
    let i = s.shift().toLowerCase();
    return s.length && (i += s.map(o => o.charAt(0).toUpperCase() + o.slice(1).toLowerCase()).join("")), r ? `${i}_${r}` : i;
}
var kc = /[-.]/, Ic = "_t", Ur = "ctx", Nc = "rf";
function Eh(n, e) { let t = null; return () => (t || (n(new le(Ic, void 0, qe)), t = N(e)), t); }
function Le(n) { return Array.isArray(n) ? R(n.map(Le)) : d(n, Oe); }
function ll(n, e) {
    let t = Object.getOwnPropertyNames(n);
    return t.length === 0 ? null : pe(t.map(s => {
        let r = n[s], i, o, a, l;
        if (typeof r == "string")
            i = s, a = s, o = r, l = Le(o);
        else {
            a = s, i = r.classPropertyName, o = r.bindingPropertyName;
            let c = o !== i, p = r.transformFunction !== null, h = gs.None;
            if (r.isSignal && (h |= gs.SignalBased), p && (h |= gs.HasDecoratorInputTransform), e && (c || p || h !== gs.None)) {
                let m = [d(h), Le(o)];
                (c || p) && (m.push(Le(i)), p && m.push(r.transformFunction)), l = R(m);
            }
            else
                l = Le(o);
        }
        return { key: a, quoted: kc.test(a), value: l };
    }));
}
var oe = class {
    values = [];
    set(e, t) {
        if (t) {
            let s = this.values.find(r => r.key === e);
            s ? s.value = t : this.values.push({ key: e, value: t, quoted: !1 });
        }
    }
    toLiteralMap() { return pe(this.values); }
};
function gm(n) { let e = n instanceof Ft ? n.name : "ng-template", t = vm(n), s = new Xn, r = kt(e)[1]; return s.setElement(r), Object.getOwnPropertyNames(t).forEach(i => { let o = kt(i)[1], a = t[i]; s.addAttribute(o, a), i.toLowerCase() === "class" && a.trim().split(/\s+/).forEach(c => s.addClassName(c)); }), s; }
function vm(n) { let e = {}; return n instanceof Je && n.tagName !== "ng-template" ? n.templateAttrs.forEach(t => e[t.name] = "") : (n.attributes.forEach(t => { vh(t.name) || (e[t.name] = t.value); }), n.inputs.forEach(t => { (t.type === Y.Property || t.type === Y.TwoWay) && (e[t.name] = ""); }), n.outputs.forEach(t => { e[t.name] = ""; })), e; }
function uu(n, e) {
    let t = null, s = { name: n.name, type: n.type, typeArgumentCount: n.typeArgumentCount, deps: [], target: Pt.Injectable };
    if (n.useClass !== void 0) {
        let a = n.useClass.expression.isEquivalent(n.type.value), l;
        n.deps !== void 0 && (l = n.deps), l !== void 0 ? t = Rn(ue(E({}, s), { delegate: n.useClass.expression, delegateDeps: l, delegateType: qi.Class })) : a ? t = Rn(s) : t = { statements: [], expression: pu(n.type.value, n.useClass.expression, e) };
    }
    else
        n.useFactory !== void 0 ? n.deps !== void 0 ? t = Rn(ue(E({}, s), { delegate: n.useFactory, delegateDeps: n.deps || [], delegateType: qi.Function })) : t = { statements: [], expression: ie([], n.useFactory.callFn([])) } : n.useValue !== void 0 ? t = Rn(ue(E({}, s), { expression: n.useValue.expression })) : n.useExisting !== void 0 ? t = Rn(ue(E({}, s), { expression: y(f.inject).callFn([n.useExisting.expression]) })) : t = { statements: [], expression: pu(n.type.value, n.type.value, e) };
    let r = n.type.value, i = new oe;
    return i.set("token", r), i.set("factory", t.expression), n.providedIn.expression.value !== null && i.set("providedIn", vs(n.providedIn)), { expression: y(f.ɵɵdefineInjectable).callFn([i.toLiteralMap()], void 0, !0), type: Sh(n), statements: t.statements };
}
function Sh(n) { return new Ze(y(f.InjectableDeclaration, [Ko(n.type.type, n.typeArgumentCount)])); }
function pu(n, e, t) {
    if (n.node === e.node)
        return e.prop("\u0275fac");
    if (!t)
        return hu(e);
    let s = y(f.resolveForwardRef).callFn([e]);
    return hu(s);
}
function hu(n) { let e = new Z("__ngFactoryType__", qe); return ie([e], n.prop("\u0275fac").callFn([N(e.name)])); }
var wm = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function Em(n, e) {
    if (e != null && !(Array.isArray(e) && e.length == 2))
        throw new Error(`Expected '${n}' to be an array, [start, end].`);
    if (e != null) {
        let t = e[0], s = e[1];
        wm.forEach(r => {
            if (r.test(t) || r.test(s))
                throw new Error(`['${t}', '${s}'] contains unusable interpolation symbol.`);
        });
    }
}
var co = class n {
    start;
    end;
    static fromArray(e) { return e ? (Em("interpolation", e), new n(e[0], e[1])) : ot; }
    constructor(e, t) { this.start = e, this.end = t; }
}, ot = new co("{{", "}}"), xh = new Set(["switch"]), Ae = 0, Sm = 8, Dc = 9, Wn = 10, yh = 11, Ch = 12, Pc = 13, Ah = 32, cl = 33, Hr = 34, _h = 35, na = 36, xm = 37, uo = 38, Wr = 39, yt = 40, Pe = 41, fu = 42, Th = 43, ut = 44, po = 45, ir = 46, vt = 47, jt = 58, Xe = 59, Cs = 60, Te = 61, rt = 62, du = 63, Lc = 48, ym = 55, bh = 57, Dn = 65, Cm = 69, Am = 70, _m = 88, Ys = 90, As = 91, _s = 92, ws = 93, Tm = 94, Pn = 95, ts = 97, bm = 98, km = 101, Bc = 102, kh = 110, Ih = 114, Nh = 116, Dh = 117, Ph = 118, Lh = 120, di = 122, St = 123, mu = 124, Fe = 125, Bh = 160, er = 64, ul = 96;
function jr(n) { return n >= Dc && n <= Ah || n == Bh; }
function wt(n) { return Lc <= n && n <= bh; }
function Os(n) { return n >= ts && n <= di || n >= Dn && n <= Ys; }
function Im(n) { return n >= ts && n <= Bc || n >= Dn && n <= Am || wt(n); }
function Mc(n) { return n === Wn || n === Pc; }
function gu(n) { return Lc <= n && n <= ym; }
function hr(n) { return n === Wr || n === Hr || n === ul; }
var ns = class n {
    file;
    offset;
    line;
    col;
    constructor(e, t, s, r) { this.file = e, this.offset = t, this.line = s, this.col = r; }
    toString() { return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url; }
    moveBy(e) {
        let t = this.file.content, s = t.length, r = this.offset, i = this.line, o = this.col;
        for (; r > 0 && e < 0;)
            if (r--, e++, t.charCodeAt(r) == Wn) {
                i--;
                let l = t.substring(0, r - 1).lastIndexOf(String.fromCharCode(Wn));
                o = l > 0 ? r - l : r;
            }
            else
                o--;
        for (; r < s && e > 0;) {
            let a = t.charCodeAt(r);
            r++, e--, a == Wn ? (i++, o = 0) : o++;
        }
        return new n(this.file, r, i, o);
    }
    getContext(e, t) {
        let s = this.file.content, r = this.offset;
        if (r != null) {
            r > s.length - 1 && (r = s.length - 1);
            let i = r, o = 0, a = 0;
            for (; o < e && r > 0 && (r--, o++, !(s[r] == `
` && ++a == t));)
                ;
            for (o = 0, a = 0; o < e && i < s.length - 1 && (i++, o++, !(s[i] == `
` && ++a == t));)
                ;
            return { before: s.substring(r, this.offset), after: s.substring(this.offset, i + 1) };
        }
        return null;
    }
}, zr = class {
    content;
    url;
    constructor(e, t) { this.content = e, this.url = t; }
}, B = class {
    start;
    end;
    fullStart;
    details;
    constructor(e, t, s = e, r = null) { this.start = e, this.end = t, this.fullStart = s, this.details = r; }
    toString() { return this.start.file.content.substring(this.start.offset, this.end.offset); }
}, fn = function (n) { return n[n.WARNING = 0] = "WARNING", n[n.ERROR = 1] = "ERROR", n; }(fn || {}), D = class extends Error {
    span;
    msg;
    level;
    relatedError;
    constructor(e, t, s = fn.ERROR, r) { super(t), this.span = e, this.msg = t, this.level = s, this.relatedError = r, Object.setPrototypeOf(this, new.target.prototype); }
    contextualMessage() { let e = this.span.start.getContext(100, 3); return e ? `${this.msg} ("${e.before}[${fn[this.level]} ->]${e.after}")` : this.msg; }
    toString() { let e = this.span.details ? `, ${this.span.details}` : ""; return `${this.contextualMessage()}: ${this.span.start}${e}`; }
};
function Nm(n, e, t) { let s = `in ${n} ${e} in ${t}`, r = new zr("", s); return new B(new ns(r, -1, -1, -1), new ns(r, -1, -1, -1)); }
var Dm = 0;
function Pm(n) {
    if (!n || !n.reference)
        return null;
    let e = n.reference;
    if (e.__anonymousType)
        return e.__anonymousType;
    if (e.__forward_ref__)
        return "__forward_ref__";
    let t = ch(e);
    return t.indexOf("(") >= 0 ? (t = `anonymous_${Dm++}`, e.__anonymousType = t) : t = fr(t), t;
}
function fr(n) { return n.replace(/\W/g, "_"); }
var vu = "(this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,\"raw\",{value:t}):e.raw=t,e})", pl = class extends Wa {
    constructor() { super(!1); }
    visitWrappedNodeExpr(e, t) { throw new Error("Cannot emit a WrappedNodeExpr in Javascript."); }
    visitDeclareVarStmt(e, t) { return t.print(e, `var ${e.name}`), e.value && (t.print(e, " = "), e.value.visitExpression(this, t)), t.println(e, ";"), null; }
    visitTaggedTemplateLiteralExpr(e, t) { let s = e.template.elements; return e.tag.visitExpression(this, t), t.print(e, `(${vu}(`), t.print(e, `[${s.map(r => $n(r.text, !1)).join(", ")}], `), t.print(e, `[${s.map(r => $n(r.rawText, !1)).join(", ")}])`), e.template.expressions.forEach(r => { t.print(e, ", "), r.visitExpression(this, t); }), t.print(e, ")"), null; }
    visitTemplateLiteralExpr(e, t) {
        t.print(e, "`");
        for (let s = 0; s < e.elements.length; s++) {
            e.elements[s].visitExpression(this, t);
            let r = s < e.expressions.length ? e.expressions[s] : null;
            r !== null && (t.print(r, "${"), r.visitExpression(this, t), t.print(r, "}"));
        }
        t.print(e, "`");
    }
    visitTemplateLiteralElementExpr(e, t) { return t.print(e, e.rawText), null; }
    visitFunctionExpr(e, t) { return t.print(e, `function${e.name ? " " + e.name : ""}(`), this._visitParams(e.params, t), t.println(e, ") {"), t.incIndent(), this.visitAllStatements(e.statements, t), t.decIndent(), t.print(e, "}"), null; }
    visitArrowFunctionExpr(e, t) {
        if (t.print(e, "("), this._visitParams(e.params, t), t.print(e, ") =>"), Array.isArray(e.body))
            t.println(e, "{"), t.incIndent(), this.visitAllStatements(e.body, t), t.decIndent(), t.print(e, "}");
        else {
            let s = e.body instanceof bt;
            s && t.print(e, "("), e.body.visitExpression(this, t), s && t.print(e, ")");
        }
        return null;
    }
    visitDeclareFunctionStmt(e, t) { return t.print(e, `function ${e.name}(`), this._visitParams(e.params, t), t.println(e, ") {"), t.incIndent(), this.visitAllStatements(e.statements, t), t.decIndent(), t.println(e, "}"), null; }
    visitLocalizedString(e, t) {
        t.print(e, `$localize(${vu}(`);
        let s = [e.serializeI18nHead()];
        for (let r = 1; r < e.messageParts.length; r++)
            s.push(e.serializeI18nTemplatePart(r));
        return t.print(e, `[${s.map(r => $n(r.cooked, !1)).join(", ")}], `), t.print(e, `[${s.map(r => $n(r.raw, !1)).join(", ")}])`), e.expressions.forEach(r => { t.print(e, ", "), r.visitExpression(this, t); }), t.print(e, ")"), null;
    }
    _visitParams(e, t) { this.visitAllObjects(s => t.print(null, s.name), e, t, ","); }
}, vi;
function Lm() {
    if (vi === void 0) {
        let n = ki.trustedTypes;
        if (vi = null, n)
            try {
                vi = n.createPolicy("angular#unsafe-jit", { createScript: e => e });
            }
            catch { }
    }
    return vi;
}
function Bm(n) { return Lm()?.createScript(n) || n; }
function wu(...n) {
    if (!ki.trustedTypes)
        return new Function(...n);
    let e = n.slice(0, -1).join(","), t = n[n.length - 1], s = `(function anonymous(${e}
) { ${t}
})`, r = ki.eval(Bm(s));
    return r.bind === void 0 ? new Function(...n) : (r.toString = () => s, r.bind(ki));
}
var hl = class {
    evaluateStatements(e, t, s, r) { let i = new fl(s), o = Ha.createRoot(); return t.length > 0 && !Mm(t[0]) && (t = [d("use strict").toStmt(), ...t]), i.visitAllStatements(t, o), i.createReturnStmt(o), this.evaluateCode(e, o, i.getArgs(), r); }
    evaluateCode(e, t, s, r) {
        let i = `"use strict";${t.toSource()}
//# sourceURL=${e}`, o = [], a = [];
        for (let c in s)
            a.push(s[c]), o.push(c);
        if (r) {
            let c = wu(...o.concat("return null;")).toString(), p = c.slice(0, c.indexOf("return null;")).split(`
`).length - 1;
            i += `
${t.toSourceMapGenerator(e, p).toJsComment()}`;
        }
        let l = wu(...o.concat(i));
        return this.executeFunction(l, a);
    }
    executeFunction(e, t) { return e(...t); }
}, fl = class extends pl {
    refResolver;
    _evalArgNames = [];
    _evalArgValues = [];
    _evalExportedVars = [];
    constructor(e) { super(), this.refResolver = e; }
    createReturnStmt(e) { new _e(new bt(this._evalExportedVars.map(s => new Zn(s, N(s), !1)))).visitStatement(this, e); }
    getArgs() {
        let e = {};
        for (let t = 0; t < this._evalArgNames.length; t++)
            e[this._evalArgNames[t]] = this._evalArgValues[t];
        return e;
    }
    visitExternalExpr(e, t) { return this._emitReferenceToExternal(e, this.refResolver.resolveExternalReference(e.value), t), null; }
    visitWrappedNodeExpr(e, t) { return this._emitReferenceToExternal(e, e.node, t), null; }
    visitDeclareVarStmt(e, t) { return e.hasModifier(ae.Exported) && this._evalExportedVars.push(e.name), super.visitDeclareVarStmt(e, t); }
    visitDeclareFunctionStmt(e, t) { return e.hasModifier(ae.Exported) && this._evalExportedVars.push(e.name), super.visitDeclareFunctionStmt(e, t); }
    _emitReferenceToExternal(e, t, s) {
        let r = this._evalArgValues.indexOf(t);
        if (r === -1) {
            r = this._evalArgValues.length, this._evalArgValues.push(t);
            let i = Pm({ reference: t }) || "val";
            this._evalArgNames.push(`jit_${i}_${r}`);
        }
        s.print(e, this._evalArgNames[r]);
    }
};
function Mm(n) { return n.isEquivalent(d("use strict").toStmt()); }
function Eu(n) { let e = new oe; n.providers !== null && e.set("providers", n.providers), n.imports.length > 0 && e.set("imports", R(n.imports)); let t = y(f.defineInjector).callFn([e.toLiteralMap()], void 0, !0), s = Mh(n); return { expression: t, type: s, statements: [] }; }
function Mh(n) { return new Ze(y(f.InjectorDeclaration, [new Ze(n.type.type)])); }
var dl = class {
    context;
    constructor(e) { this.context = e; }
    resolveExternalReference(e) {
        if (e.moduleName !== "@angular/core")
            throw new Error(`Cannot resolve external reference to ${e.moduleName}, only references to @angular/core are supported.`);
        if (!this.context.hasOwnProperty(e.name))
            throw new Error(`No value provided for @angular/core symbol '${e.name}'.`);
        return this.context[e.name];
    }
}, ho = function (n) { return n[n.Inline = 0] = "Inline", n[n.SideEffect = 1] = "SideEffect", n[n.Omit = 2] = "Omit", n; }(ho || {}), Gt = function (n) { return n[n.Global = 0] = "Global", n[n.Local = 1] = "Local", n; }(Gt || {});
function Rm(n) {
    let e = [], t = new oe;
    if (t.set("type", n.type.value), n.kind === Gt.Global && n.bootstrap.length > 0 && t.set("bootstrap", xt(n.bootstrap, n.containsForwardDecls)), n.selectorScopeMode === ho.Inline)
        n.declarations.length > 0 && t.set("declarations", xt(n.declarations, n.containsForwardDecls)), n.imports.length > 0 && t.set("imports", xt(n.imports, n.containsForwardDecls)), n.exports.length > 0 && t.set("exports", xt(n.exports, n.containsForwardDecls));
    else if (n.selectorScopeMode === ho.SideEffect) {
        let i = $m(n);
        i !== null && e.push(i);
    }
    n.schemas !== null && n.schemas.length > 0 && t.set("schemas", R(n.schemas.map(i => i.value))), n.id !== null && (t.set("id", n.id), e.push(y(f.registerNgModuleType).callFn([n.type.value, n.id]).toStmt()));
    let s = y(f.defineNgModule).callFn([t.toLiteralMap()], void 0, !0), r = Rh(n);
    return { expression: s, type: r, statements: e };
}
function Fm(n) { let e = new oe; return e.set("type", new U(n.type)), n.bootstrap !== void 0 && e.set("bootstrap", new U(n.bootstrap)), n.declarations !== void 0 && e.set("declarations", new U(n.declarations)), n.imports !== void 0 && e.set("imports", new U(n.imports)), n.exports !== void 0 && e.set("exports", new U(n.exports)), n.schemas !== void 0 && e.set("schemas", new U(n.schemas)), n.id !== void 0 && e.set("id", new U(n.id)), y(f.defineNgModule).callFn([e.toLiteralMap()]); }
function Rh(n) {
    if (n.kind === Gt.Local)
        return new Ze(n.type.value);
    let { type: e, declarations: t, exports: s, imports: r, includeImportTypes: i, publicDeclarationTypes: o } = n;
    return new Ze(y(f.NgModuleDeclaration, [new Ze(e.type), o === null ? la(t) : Om(o), i ? la(r) : At, la(s)]));
}
function $m(n) {
    let e = new oe;
    if (n.kind === Gt.Global ? n.declarations.length > 0 && e.set("declarations", xt(n.declarations, n.containsForwardDecls)) : n.declarationsExpression && e.set("declarations", n.declarationsExpression), n.kind === Gt.Global ? n.imports.length > 0 && e.set("imports", xt(n.imports, n.containsForwardDecls)) : n.importsExpression && e.set("imports", n.importsExpression), n.kind === Gt.Global ? n.exports.length > 0 && e.set("exports", xt(n.exports, n.containsForwardDecls)) : n.exportsExpression && e.set("exports", n.exportsExpression), n.kind === Gt.Local && n.bootstrapExpression && e.set("bootstrap", n.bootstrapExpression), Object.keys(e.values).length === 0)
        return null;
    let t = new Me(y(f.setNgModuleScope), [n.type.value, e.toLiteralMap()]), s = Zd(t), r = new Yt([], [s.toStmt()]);
    return new Me(r, []).toStmt();
}
function la(n) { let e = n.map(t => Xs(t.type)); return n.length > 0 ? we(R(e)) : At; }
function Om(n) { let e = n.map(t => Xs(t)); return n.length > 0 ? we(R(e)) : At; }
function Su(n) { let e = []; e.push({ key: "name", value: d(n.pipeName ?? n.name), quoted: !1 }), e.push({ key: "type", value: n.type.value, quoted: !1 }), e.push({ key: "pure", value: d(n.pure), quoted: !1 }), n.isStandalone === !1 && e.push({ key: "standalone", value: d(!1), quoted: !1 }); let t = y(f.definePipe).callFn([pe(e)], void 0, !0), s = Fh(n); return { expression: t, type: s, statements: [] }; }
function Fh(n) { return new Ze(y(f.PipeDeclaration, [Ko(n.type.type, n.typeArgumentCount), new Ze(new Ee(n.pipeName)), new Ze(new Ee(n.isStandalone))])); }
var Qt = function (n) { return n[n.Directive = 0] = "Directive", n[n.Pipe = 1] = "Pipe", n[n.NgModule = 2] = "NgModule", n; }(Qt || {}), Vm = new Set(["inherit", "initial", "revert", "unset", "alternate", "alternate-reverse", "normal", "reverse", "backwards", "both", "forwards", "none", "paused", "running", "ease", "ease-in", "ease-in-out", "ease-out", "linear", "step-start", "step-end", "end", "jump-both", "jump-end", "jump-none", "jump-start", "start"]), qm = ["@media", "@supports", "@document", "@layer", "@container", "@scope", "@starting-style"], fo = class {
    shimCssText(e, t, s = "") {
        let r = [];
        e = e.replace(eg, a => {
            if (a.match(tg))
                r.push(a);
            else {
                let l = a.match(Km);
                r.push((l?.join("") ?? "") + `
`);
            }
            return Rc;
        }), e = this._insertDirectives(e);
        let i = this._scopeCssText(e, t, s), o = 0;
        return i.replace(ng, () => r[o++]);
    }
    _insertDirectives(e) { return e = this._insertPolyfillDirectivesInCssText(e), this._insertPolyfillRulesInCssText(e); }
    _scopeKeyframesRelatedCss(e, t) { let s = new Set, r = wi(e, i => this._scopeLocalKeyframeDeclarations(i, t, s)); return wi(r, i => this._scopeAnimationRule(i, t, s)); }
    _scopeLocalKeyframeDeclarations(e, t, s) { return ue(E({}, e), { selector: e.selector.replace(/(^@(?:-webkit-)?keyframes(?:\s+))(['"]?)(.+)\2(\s*)$/, (r, i, o, a, l) => (s.add(Cu(a, o)), `${i}${o}${t}_${a}${o}${l}`)) }); }
    _scopeAnimationKeyframe(e, t, s) { return e.replace(/^(\s*)(['"]?)(.+?)\2(\s*)$/, (r, i, o, a, l) => (a = `${s.has(Cu(a, o)) ? t + "_" : ""}${a}`, `${i}${o}${a}${o}${l}`)); }
    _animationDeclarationKeyframesRe = /(^|\s+|,)(?:(?:(['"])((?:\\\\|\\\2|(?!\2).)+)\2)|(-?[A-Za-z][\w\-]*))(?=[,\s]|$)/g;
    _scopeAnimationRule(e, t, s) { let r = e.content.replace(/((?:^|\s+|;)(?:-webkit-)?animation\s*:\s*),*([^;]+)/g, (i, o, a) => o + a.replace(this._animationDeclarationKeyframesRe, (l, c, p = "", h, m) => h ? `${c}${this._scopeAnimationKeyframe(`${p}${h}${p}`, t, s)}` : Vm.has(m) ? l : `${c}${this._scopeAnimationKeyframe(m, t, s)}`)); return r = r.replace(/((?:^|\s+|;)(?:-webkit-)?animation-name(?:\s*):(?:\s*))([^;]+)/g, (i, o, a) => `${o}${a.split(",").map(l => this._scopeAnimationKeyframe(l, t, s)).join(",")}`), ue(E({}, e), { content: r }); }
    _insertPolyfillDirectivesInCssText(e) { return e.replace(Hm, function (...t) { return t[2] + "{"; }); }
    _insertPolyfillRulesInCssText(e) { return e.replace(Wm, (...t) => { let s = t[0].replace(t[1], "").replace(t[2], ""); return t[4] + s; }); }
    _scopeCssText(e, t, s) {
        let r = this._extractUnscopedRulesFromCssText(e);
        return e = this._insertPolyfillHostInCssText(e), e = this._convertColonHost(e), e = this._convertColonHostContext(e), e = this._convertShadowDOMSelectors(e), t && (e = this._scopeKeyframesRelatedCss(e, t), e = this._scopeSelectors(e, t, s)), e = e + `
` + r, e.trim();
    }
    _extractUnscopedRulesFromCssText(e) {
        let t = "", s;
        for (xu.lastIndex = 0; (s = xu.exec(e)) !== null;) {
            let r = s[0].replace(s[2], "").replace(s[1], s[4]);
            t += r + `

`;
        }
        return t;
    }
    _convertColonHost(e) {
        return e.replace(jm, (t, s, r) => {
            if (s) {
                let i = [], o = s.split(",").map(a => a.trim());
                for (let a of o) {
                    if (!a)
                        break;
                    let l = cn + a.replace(mo, "") + r;
                    i.push(l);
                }
                return i.join(",");
            }
            else
                return cn + r;
        });
    }
    _convertColonHostContext(e) {
        let t = e.length, s = 0, r = 0, i = "";
        for (let o = 0; o < t; o++) {
            let a = e[o];
            if (a === "," && s === 0) {
                i += this._convertColonHostContextInSelectorPart(e.slice(r, o)) + ",", r = o + 1;
                continue;
            }
            if (o === t - 1) {
                i += this._convertColonHostContextInSelectorPart(e.slice(r));
                break;
            }
            a === "(" ? s++ : a === ")" && s--;
        }
        return i;
    }
    _convertColonHostContextInSelectorPart(e) {
        return e.replace(zm, (t, s) => {
            let r = [[]], i;
            for (; i = Gm.exec(t);) {
                let o = (i[1] ?? "").trim().split(",").map(l => l.trim()).filter(l => l !== ""), a = r.length;
                fg(r, o.length);
                for (let l = 0; l < o.length; l++)
                    for (let c = 0; c < a; c++)
                        r[c + l * a].push(o[l]);
                t = i[2];
            }
            return r.map(o => hg(o, t, s)).join(", ");
        });
    }
    _convertShadowDOMSelectors(e) { return Ym.reduce((t, s) => t.replace(s, " "), e); }
    _scopeSelectors(e, t, s) { return wi(e, r => { let i = r.selector, o = r.content; return r.selector[0] !== "@" ? i = this._scopeSelector({ selector: i, scopeSelector: t, hostSelector: s, isParentSelector: !0 }) : qm.some(a => r.selector.startsWith(a)) ? o = this._scopeSelectors(r.content, t, s) : (r.selector.startsWith("@font-face") || r.selector.startsWith("@page")) && (o = this._stripScopingSelectors(r.content)), new Gr(i, o); }); }
    _stripScopingSelectors(e) { return wi(e, t => { let s = t.selector.replace(yu, " ").replace(ca, " "); return new Gr(s, t.content); }); }
    _safeSelector;
    _shouldScopeIndicator;
    _scopeSelector({ selector: e, scopeSelector: t, hostSelector: s, isParentSelector: r = !1 }) { let i = / ?,(?!(?:[^)(]*(?:\([^)(]*(?:\([^)(]*(?:\([^)(]*\)[^)(]*)*\)[^)(]*)*\)[^)(]*)*\))) ?/; return e.split(i).map(o => o.split(yu)).map(o => { let [a, ...l] = o; return [(p => this._selectorNeedsScoping(p, t) ? this._applySelectorScope({ selector: p, scopeSelector: t, hostSelector: s, isParentSelector: r }) : p)(a), ...l].join(" "); }).join(", "); }
    _selectorNeedsScoping(e, t) { return !this._makeScopeMatcher(t).test(e); }
    _makeScopeMatcher(e) { let t = /\[/g, s = /\]/g; return e = e.replace(t, "\\[").replace(s, "\\]"), new RegExp("^(" + e + ")" + Qm, "m"); }
    _applySimpleSelectorScope(e, t, s) {
        if (Es.lastIndex = 0, Es.test(e)) {
            let r = `[${s}]`, i = e;
            for (; i.match(ca);)
                i = i.replace(ca, (o, a) => a.replace(/([^:\)]*)(:*)(.*)/, (l, c, p, h) => c + r + p + h));
            return i.replace(Es, r);
        }
        return t + " " + e;
    }
    _applySelectorScope({ selector: e, scopeSelector: t, hostSelector: s, isParentSelector: r }) {
        let i = /\[is=([^\]]*)\]/g;
        t = t.replace(i, (C, ...b) => b[0]);
        let o = `[${t}]`, a = C => {
            let b = C.trim();
            if (!b)
                return C;
            if (C.includes(cn)) {
                if (b = this._applySimpleSelectorScope(C, t, s), !C.match(Xm)) {
                    let [_, P, K, ne] = b.match(/([^:]*)(:*)([\s\S]*)/);
                    b = P + o + K + ne;
                }
            }
            else {
                let _ = C.replace(Es, "");
                if (_.length > 0) {
                    let P = _.match(/([^:]*)(:*)([\s\S]*)/);
                    P && (b = P[1] + o + P[2] + P[3]);
                }
            }
            return b;
        }, l = C => {
            let b = "", _ = [], P;
            for (; (P = tr.exec(C)) !== null;) {
                let K = 1, ne = tr.lastIndex;
                for (; ne < C.length;) {
                    let de = C[ne];
                    if (ne++, de === "(") {
                        K++;
                        continue;
                    }
                    if (de === ")") {
                        if (K--, K === 0)
                            break;
                        continue;
                    }
                }
                _.push(`${P[0]}${C.slice(tr.lastIndex, ne)}`), tr.lastIndex = ne;
            }
            return _.join("") === C ? b = _.map(K => { let [ne] = K.match(tr) ?? [], de = K.slice(ne?.length, -1); de.includes(cn) && (this._shouldScopeIndicator = !0); let oa = this._scopeSelector({ selector: de, scopeSelector: t, hostSelector: s }); return `${ne}${oa})`; }).join("") : (this._shouldScopeIndicator = this._shouldScopeIndicator || C.includes(cn), b = this._shouldScopeIndicator ? a(C) : C), b;
        };
        r && (this._safeSelector = new ml(e), e = this._safeSelector.content());
        let c = "", p = 0, h, m = /( |>|\+|~(?!=))(?!([^)(]*(?:\([^)(]*(?:\([^)(]*(?:\([^)(]*\)[^)(]*)*\)[^)(]*)*\)[^)(]*)*\)))\s*/g, v = e.includes(cn);
        for ((r || this._shouldScopeIndicator) && (this._shouldScopeIndicator = !v); (h = m.exec(e)) !== null;) {
            let C = h[1], b = e.slice(p, h.index);
            if (b.match(/__esc-ph-(\d+)__/) && e[h.index + 1]?.match(/[a-fA-F\d]/))
                continue;
            let _ = l(b);
            c += `${_} ${C} `, p = m.lastIndex;
        }
        let w = e.substring(p);
        return c += l(w), this._safeSelector.restore(c);
    }
    _insertPolyfillHostInCssText(e) { return e.replace(Jm, $h).replace(Zm, mo); }
}, ml = class {
    placeholders = [];
    index = 0;
    _content;
    constructor(e) { e = this._escapeRegexMatches(e, /(\[[^\]]*\])/g), e = e.replace(/(\\.)/g, (t, s) => { let r = `__esc-ph-${this.index}__`; return this.placeholders.push(s), this.index++, r; }), this._content = e.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (t, s, r) => { let i = `__ph-${this.index}__`; return this.placeholders.push(r), this.index++, s + i; }); }
    restore(e) { return e.replace(/__(?:ph|esc-ph)-(\d+)__/g, (t, s) => this.placeholders[+s]); }
    content() { return this._content; }
    _escapeRegexMatches(e, t) { return e.replace(t, (s, r) => { let i = `__ph-${this.index}__`; return this.placeholders.push(r), this.index++, i; }); }
}, Um = "(:(where|is)\\()?", tr = /:(where|is)\(/gi, Hm = /polyfill-next-selector[^}]*content:[\s]*?(['"])(.*?)\1[;\s]*}([^{]*?){/gim, Wm = /(polyfill-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim, xu = /(polyfill-unscoped-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim, mo = "-shadowcsshost", $h = "-shadowcsscontext", Oh = "(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))", jm = new RegExp(mo + Oh + "?([^,{]*)", "gim"), Vh = $h + Oh + "?([^{]*)", zm = new RegExp(`${Um}(${Vh})`, "gim"), Gm = new RegExp(Vh, "im"), cn = mo + "-no-combinator", Xm = new RegExp(`${cn}(?![^(]*\\))`, "g"), ca = /-shadowcsshost-no-combinator([^\s,]*)/, Ym = [/::shadow/g, /::content/g, /\/shadow-deep\//g, /\/shadow\//g], yu = /(?:>>>)|(?:\/deep\/)|(?:::ng-deep)/g, Qm = "([>\\s~+[.,{:][\\s\\S]*)?$", Es = /-shadowcsshost/gim, Zm = /:host/gim, Jm = /:host-context/gim, Km = /\r?\n/g, eg = /\/\*[\s\S]*?\*\//g, tg = /\/\*\s*#\s*source(Mapping)?URL=/g, Rc = "%COMMENT%", ng = new RegExp(Rc, "g"), ua = "%BLOCK%", sg = new RegExp(`(\\s*(?:${Rc}\\s*)*)([^;\\{\\}]+?)(\\s*)((?:{%BLOCK%}?\\s*;?)|(?:\\s*;))`, "g"), rg = new Map([["{", "}"]]), qh = "%COMMA_IN_PLACEHOLDER%", Uh = "%SEMI_IN_PLACEHOLDER%", Hh = "%COLON_IN_PLACEHOLDER%", ig = new RegExp(qh, "g"), og = new RegExp(Uh, "g"), ag = new RegExp(Hh, "g"), Gr = class {
    selector;
    content;
    constructor(e, t) { this.selector = e, this.content = t; }
};
function wi(n, e) { let t = ug(n), s = lg(t, rg, ua), r = 0, i = s.escapedString.replace(sg, (...o) => { let a = o[2], l = "", c = o[4], p = ""; c && c.startsWith("{" + ua) && (l = s.blocks[r++], c = c.substring(ua.length + 1), p = "{"); let h = e(new Gr(a, l)); return `${o[1]}${h.selector}${o[3]}${p}${h.content}${c}`; }); return pg(i); }
var gl = class {
    escapedString;
    blocks;
    constructor(e, t) { this.escapedString = e, this.blocks = t; }
};
function lg(n, e, t) {
    let s = [], r = [], i = 0, o = 0, a = -1, l, c;
    for (let p = 0; p < n.length; p++) {
        let h = n[p];
        h === "\\" ? p++ : h === c ? (i--, i === 0 && (r.push(n.substring(a, p)), s.push(t), o = p, a = -1, l = c = void 0)) : h === l ? i++ : i === 0 && e.has(h) && (l = h, c = e.get(h), i = 1, a = p + 1, s.push(n.substring(o, a)));
    }
    return a !== -1 ? (r.push(n.substring(a)), s.push(t)) : s.push(n.substring(o)), new gl(s.join(""), r);
}
var cg = { ";": Uh, ",": qh, ":": Hh };
function ug(n) {
    let e = n, t = null;
    for (let s = 0; s < e.length; s++) {
        let r = e[s];
        if (r === "\\")
            s++;
        else if (t !== null) {
            if (r === t)
                t = null;
            else {
                let i = cg[r];
                i && (e = `${e.substr(0, s)}${i}${e.substr(s + 1)}`, s += i.length - 1);
            }
        }
        else
            (r === "'" || r === "\"") && (t = r);
    }
    return e;
}
function pg(n) { let e = n.replace(ig, ","); return e = e.replace(og, ";"), e = e.replace(ag, ":"), e; }
function Cu(n, e) { return e ? n.replace(/((?:^|[^\\])(?:\\\\)*)\\(?=['"])/g, "$1") : n; }
function hg(n, e, t = "") {
    let s = cn;
    Es.lastIndex = 0;
    let r = Es.test(e);
    if (n.length === 0)
        return s + e;
    let i = [n.pop() || ""];
    for (; n.length > 0;) {
        let o = i.length, a = n.pop();
        for (let l = 0; l < o; l++) {
            let c = i[l];
            i[o * 2 + l] = c + " " + a, i[o + l] = a + " " + c, i[l] = a + c;
        }
    }
    return i.map(o => r ? `${t}${o}${e}` : `${t}${o}${s}${e}, ${t}${o} ${s}${e}`).join(",");
}
function fg(n, e) {
    let t = n.length;
    for (let s = 1; s < e; s++)
        for (let r = 0; r < t; r++)
            n[r + s * t] = n[r].slice(0);
}
var u = function (n) { return n[n.ListEnd = 0] = "ListEnd", n[n.Statement = 1] = "Statement", n[n.Variable = 2] = "Variable", n[n.ElementStart = 3] = "ElementStart", n[n.Element = 4] = "Element", n[n.Template = 5] = "Template", n[n.ElementEnd = 6] = "ElementEnd", n[n.ContainerStart = 7] = "ContainerStart", n[n.Container = 8] = "Container", n[n.ContainerEnd = 9] = "ContainerEnd", n[n.DisableBindings = 10] = "DisableBindings", n[n.ConditionalCreate = 11] = "ConditionalCreate", n[n.ConditionalBranchCreate = 12] = "ConditionalBranchCreate", n[n.Conditional = 13] = "Conditional", n[n.EnableBindings = 14] = "EnableBindings", n[n.Text = 15] = "Text", n[n.Listener = 16] = "Listener", n[n.InterpolateText = 17] = "InterpolateText", n[n.Binding = 18] = "Binding", n[n.Property = 19] = "Property", n[n.StyleProp = 20] = "StyleProp", n[n.ClassProp = 21] = "ClassProp", n[n.StyleMap = 22] = "StyleMap", n[n.ClassMap = 23] = "ClassMap", n[n.Advance = 24] = "Advance", n[n.Pipe = 25] = "Pipe", n[n.Attribute = 26] = "Attribute", n[n.ExtractedAttribute = 27] = "ExtractedAttribute", n[n.Defer = 28] = "Defer", n[n.DeferOn = 29] = "DeferOn", n[n.DeferWhen = 30] = "DeferWhen", n[n.I18nMessage = 31] = "I18nMessage", n[n.DomProperty = 32] = "DomProperty", n[n.Namespace = 33] = "Namespace", n[n.ProjectionDef = 34] = "ProjectionDef", n[n.Projection = 35] = "Projection", n[n.RepeaterCreate = 36] = "RepeaterCreate", n[n.Repeater = 37] = "Repeater", n[n.TwoWayProperty = 38] = "TwoWayProperty", n[n.TwoWayListener = 39] = "TwoWayListener", n[n.DeclareLet = 40] = "DeclareLet", n[n.StoreLet = 41] = "StoreLet", n[n.I18nStart = 42] = "I18nStart", n[n.I18n = 43] = "I18n", n[n.I18nEnd = 44] = "I18nEnd", n[n.I18nExpression = 45] = "I18nExpression", n[n.I18nApply = 46] = "I18nApply", n[n.IcuStart = 47] = "IcuStart", n[n.IcuEnd = 48] = "IcuEnd", n[n.IcuPlaceholder = 49] = "IcuPlaceholder", n[n.I18nContext = 50] = "I18nContext", n[n.I18nAttributes = 51] = "I18nAttributes", n[n.SourceLocation = 52] = "SourceLocation", n; }(u || {}), k = function (n) { return n[n.LexicalRead = 0] = "LexicalRead", n[n.Context = 1] = "Context", n[n.TrackContext = 2] = "TrackContext", n[n.ReadVariable = 3] = "ReadVariable", n[n.NextContext = 4] = "NextContext", n[n.Reference = 5] = "Reference", n[n.StoreLet = 6] = "StoreLet", n[n.ContextLetReference = 7] = "ContextLetReference", n[n.GetCurrentView = 8] = "GetCurrentView", n[n.RestoreView = 9] = "RestoreView", n[n.ResetView = 10] = "ResetView", n[n.PureFunctionExpr = 11] = "PureFunctionExpr", n[n.PureFunctionParameterExpr = 12] = "PureFunctionParameterExpr", n[n.PipeBinding = 13] = "PipeBinding", n[n.PipeBindingVariadic = 14] = "PipeBindingVariadic", n[n.SafePropertyRead = 15] = "SafePropertyRead", n[n.SafeKeyedRead = 16] = "SafeKeyedRead", n[n.SafeInvokeFunction = 17] = "SafeInvokeFunction", n[n.SafeTernaryExpr = 18] = "SafeTernaryExpr", n[n.EmptyExpr = 19] = "EmptyExpr", n[n.AssignTemporaryExpr = 20] = "AssignTemporaryExpr", n[n.ReadTemporaryExpr = 21] = "ReadTemporaryExpr", n[n.SlotLiteralExpr = 22] = "SlotLiteralExpr", n[n.ConditionalCase = 23] = "ConditionalCase", n[n.ConstCollected = 24] = "ConstCollected", n[n.TwoWayBindingSet = 25] = "TwoWayBindingSet", n; }(k || {}), at = function (n) { return n[n.None = 0] = "None", n[n.AlwaysInline = 1] = "AlwaysInline", n; }(at || {}), Se = function (n) { return n[n.Context = 0] = "Context", n[n.Identifier = 1] = "Identifier", n[n.SavedView = 2] = "SavedView", n[n.Alias = 3] = "Alias", n; }(Se || {}), nt = function (n) { return n[n.Normal = 0] = "Normal", n[n.TemplateDefinitionBuilder = 1] = "TemplateDefinitionBuilder", n; }(nt || {}), I = function (n) { return n[n.Attribute = 0] = "Attribute", n[n.ClassName = 1] = "ClassName", n[n.StyleProperty = 2] = "StyleProperty", n[n.Property = 3] = "Property", n[n.Template = 4] = "Template", n[n.I18n = 5] = "I18n", n[n.LegacyAnimation = 6] = "LegacyAnimation", n[n.TwoWayProperty = 7] = "TwoWayProperty", n; }(I || {}), Xr = function (n) { return n[n.Creation = 0] = "Creation", n[n.Postproccessing = 1] = "Postproccessing", n; }(Xr || {}), Qs = function (n) { return n[n.I18nText = 0] = "I18nText", n[n.I18nAttribute = 1] = "I18nAttribute", n; }(Qs || {}), ee = function (n) { return n[n.None = 0] = "None", n[n.ElementTag = 1] = "ElementTag", n[n.TemplateTag = 2] = "TemplateTag", n[n.OpenTag = 4] = "OpenTag", n[n.CloseTag = 8] = "CloseTag", n[n.ExpressionIndex = 16] = "ExpressionIndex", n; }(ee || {}), be = function (n) { return n[n.HTML = 0] = "HTML", n[n.SVG = 1] = "SVG", n[n.Math = 2] = "Math", n; }(be || {}), Q = function (n) { return n[n.Idle = 0] = "Idle", n[n.Immediate = 1] = "Immediate", n[n.Timer = 2] = "Timer", n[n.Hover = 3] = "Hover", n[n.Interaction = 4] = "Interaction", n[n.Viewport = 5] = "Viewport", n[n.Never = 6] = "Never", n; }(Q || {}), Vn = function (n) { return n[n.RootI18n = 0] = "RootI18n", n[n.Icu = 1] = "Icu", n[n.Attr = 2] = "Attr", n; }(Vn || {}), Ve = function (n) { return n[n.NgTemplate = 0] = "NgTemplate", n[n.Structural = 1] = "Structural", n[n.Block = 2] = "Block", n; }(Ve || {}), Wh = Symbol("ConsumesSlot"), Fc = Symbol("DependsOnSlotContext"), Zs = Symbol("ConsumesVars"), sa = Symbol("UsesVarOffset"), mt = { [Wh]: !0, numSlotsUsed: 1 }, st = { [Fc]: !0 }, He = { [Zs]: !0 };
function Js(n) { return n[Wh] === !0; }
function Yr(n) { return n[Fc] === !0; }
function pa(n) { return n[Zs] === !0; }
function Au(n) { return n[sa] === !0; }
function It(n) { return E({ kind: u.Statement, statement: n }, F); }
function hn(n, e, t, s) { return E({ kind: u.Variable, xref: n, variable: e, initializer: t, flags: s }, F); }
var F = { debugListId: null, prev: null, next: null };
function dg(n, e, t) { return E(E(E({ kind: u.InterpolateText, target: n, interpolation: e, sourceSpan: t }, st), He), F); }
var ce = class {
    strings;
    expressions;
    i18nPlaceholders;
    constructor(e, t, s) {
        if (this.strings = e, this.expressions = t, this.i18nPlaceholders = s, s.length !== 0 && s.length !== t.length)
            throw new Error(`Expected ${t.length} placeholders to match interpolation expression count, but got ${s.length}`);
    }
};
function ss(n, e, t, s, r, i, o, a, l, c, p) { return E({ kind: u.Binding, bindingKind: e, target: n, name: t, expression: s, unit: r, securityContext: i, isTextAttribute: o, isStructuralTemplateAttribute: a, templateKind: l, i18nContext: null, i18nMessage: c, sourceSpan: p }, F); }
function mg(n, e, t, s, r, i, o, a, l, c) { return E(E(E({ kind: u.Property, target: n, name: e, expression: t, isLegacyAnimationTrigger: s, securityContext: r, sanitizer: null, isStructuralTemplateAttribute: i, templateKind: o, i18nContext: a, i18nMessage: l, sourceSpan: c }, st), He), F); }
function gg(n, e, t, s, r, i, o, a, l) { return E(E(E({ kind: u.TwoWayProperty, target: n, name: e, expression: t, securityContext: s, sanitizer: null, isStructuralTemplateAttribute: r, templateKind: i, i18nContext: o, i18nMessage: a, sourceSpan: l }, st), He), F); }
function vg(n, e, t, s, r) { return E(E(E({ kind: u.StyleProp, target: n, name: e, expression: t, unit: s, sourceSpan: r }, st), He), F); }
function wg(n, e, t, s) { return E(E(E({ kind: u.ClassProp, target: n, name: e, expression: t, sourceSpan: s }, st), He), F); }
function Eg(n, e, t) { return E(E(E({ kind: u.StyleMap, target: n, expression: e, sourceSpan: t }, st), He), F); }
function Sg(n, e, t) { return E(E(E({ kind: u.ClassMap, target: n, expression: e, sourceSpan: t }, st), He), F); }
function xg(n, e, t, s, r, i, o, a, l, c) { return E(E(E({ kind: u.Attribute, target: n, namespace: e, name: t, expression: s, securityContext: r, sanitizer: null, isTextAttribute: i, isStructuralTemplateAttribute: o, templateKind: a, i18nContext: null, i18nMessage: l, sourceSpan: c }, st), He), F); }
function yg(n, e) { return E({ kind: u.Advance, delta: n, sourceSpan: e }, F); }
function jh(n, e, t, s) { return E(E(E({ kind: u.Conditional, target: n, test: e, conditions: t, processed: null, sourceSpan: s, contextValue: null }, F), st), He); }
function Cg(n, e, t, s) { return E(E({ kind: u.Repeater, target: n, targetSlot: e, collection: t, sourceSpan: s }, F), st); }
function Ag(n, e, t, s) { return E(E(E({ kind: u.DeferWhen, target: n, expr: e, modifier: t, sourceSpan: s }, F), st), He); }
function zh(n, e, t, s, r, i, o, a, l, c, p) { return E(E(E({ kind: u.I18nExpression, context: n, target: e, i18nOwner: t, handle: s, expression: r, icuPlaceholder: i, i18nPlaceholder: o, resolutionTime: a, usage: l, name: c, sourceSpan: p }, F), He), st); }
function _g(n, e, t) { return E({ kind: u.I18nApply, owner: n, handle: e, sourceSpan: t }, F); }
function Tg(n, e, t, s) { return E(E(E({ kind: u.StoreLet, target: n, declaredName: e, value: t, sourceSpan: s }, st), He), F); }
function qt(n) { return n instanceof J; }
var J = class extends G {
    constructor(e = null) { super(null, e); }
}, Ce = class n extends J {
    name;
    kind = k.LexicalRead;
    constructor(e) { super(), this.name = e; }
    visitExpression(e, t) { }
    isEquivalent(e) { return this.name === e.name; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.name); }
}, go = class n extends J {
    target;
    targetSlot;
    offset;
    kind = k.Reference;
    constructor(e, t, s) { super(), this.target = e, this.targetSlot = t, this.offset = s; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.target, this.targetSlot, this.offset); }
}, Qr = class n extends J {
    target;
    value;
    sourceSpan;
    kind = k.StoreLet;
    [Zs] = !0;
    [Fc] = !0;
    constructor(e, t, s) { super(), this.target = e, this.value = t, this.sourceSpan = s; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target && e.value.isEquivalent(this.value); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.value = T(this.value, e, t); }
    clone() { return new n(this.target, this.value, this.sourceSpan); }
}, Zr = class n extends J {
    target;
    targetSlot;
    kind = k.ContextLetReference;
    constructor(e, t) { super(), this.target = e, this.targetSlot = t; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.target, this.targetSlot); }
}, Tn = class n extends J {
    view;
    kind = k.Context;
    constructor(e) { super(), this.view = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.view === this.view; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.view); }
}, vl = class n extends J {
    view;
    kind = k.TrackContext;
    constructor(e) { super(), this.view = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.view === this.view; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.view); }
}, vo = class n extends J {
    kind = k.NextContext;
    steps = 1;
    constructor() { super(); }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.steps === this.steps; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { let e = new n; return e.steps = this.steps, e; }
}, wl = class n extends J {
    kind = k.GetCurrentView;
    constructor() { super(); }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n; }
}, wo = class n extends J {
    view;
    kind = k.RestoreView;
    constructor(e) { super(), this.view = e; }
    visitExpression(e, t) { typeof this.view != "number" && this.view.visitExpression(e, t); }
    isEquivalent(e) { return !(e instanceof n) || typeof e.view != typeof this.view ? !1 : typeof this.view == "number" ? this.view === e.view : this.view.isEquivalent(e.view); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { typeof this.view != "number" && (this.view = T(this.view, e, t)); }
    clone() { return new n(this.view instanceof G ? this.view.clone() : this.view); }
}, El = class n extends J {
    expr;
    kind = k.ResetView;
    constructor(e) { super(), this.expr = e; }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && this.expr.isEquivalent(e.expr); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.expr = T(this.expr, e, t); }
    clone() { return new n(this.expr.clone()); }
}, Eo = class n extends J {
    target;
    value;
    kind = k.TwoWayBindingSet;
    constructor(e, t) { super(), this.target = e, this.value = t; }
    visitExpression(e, t) { this.target.visitExpression(e, t), this.value.visitExpression(e, t); }
    isEquivalent(e) { return this.target.isEquivalent(e.target) && this.value.isEquivalent(e.value); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.target = T(this.target, e, t), this.value = T(this.value, e, t); }
    clone() { return new n(this.target, this.value); }
}, Zt = class n extends J {
    xref;
    kind = k.ReadVariable;
    name = null;
    constructor(e) { super(), this.xref = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.xref === this.xref; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { let e = new n(this.xref); return e.name = this.name, e; }
}, rs = class n extends J {
    kind = k.PureFunctionExpr;
    [Zs] = !0;
    [sa] = !0;
    varOffset = null;
    body;
    args;
    fn = null;
    constructor(e, t) { super(), this.body = e, this.args = t; }
    visitExpression(e, t) {
        this.body?.visitExpression(e, t);
        for (let s of this.args)
            s.visitExpression(e, t);
    }
    isEquivalent(e) { return !(e instanceof n) || e.args.length !== this.args.length ? !1 : e.body !== null && this.body !== null && e.body.isEquivalent(this.body) && e.args.every((t, s) => t.isEquivalent(this.args[s])); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) {
        this.body !== null ? this.body = T(this.body, e, t | z.InChildOperation) : this.fn !== null && (this.fn = T(this.fn, e, t));
        for (let s = 0; s < this.args.length; s++)
            this.args[s] = T(this.args[s], e, t);
    }
    clone() { let e = new n(this.body?.clone() ?? null, this.args.map(t => t.clone())); return e.fn = this.fn?.clone() ?? null, e.varOffset = this.varOffset, e; }
}, Vs = class n extends J {
    index;
    kind = k.PureFunctionParameterExpr;
    constructor(e) { super(), this.index = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.index === this.index; }
    isConstant() { return !0; }
    transformInternalExpressions() { }
    clone() { return new n(this.index); }
}, is = class n extends J {
    target;
    targetSlot;
    name;
    args;
    kind = k.PipeBinding;
    [Zs] = !0;
    [sa] = !0;
    varOffset = null;
    constructor(e, t, s, r) { super(), this.target = e, this.targetSlot = t, this.name = s, this.args = r; }
    visitExpression(e, t) {
        for (let s of this.args)
            s.visitExpression(e, t);
    }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) {
        for (let s = 0; s < this.args.length; s++)
            this.args[s] = T(this.args[s], e, t);
    }
    clone() { let e = new n(this.target, this.targetSlot, this.name, this.args.map(t => t.clone())); return e.varOffset = this.varOffset, e; }
}, Jr = class n extends J {
    target;
    targetSlot;
    name;
    args;
    numArgs;
    kind = k.PipeBindingVariadic;
    [Zs] = !0;
    [sa] = !0;
    varOffset = null;
    constructor(e, t, s, r, i) { super(), this.target = e, this.targetSlot = t, this.name = s, this.args = r, this.numArgs = i; }
    visitExpression(e, t) { this.args.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.args = T(this.args, e, t); }
    clone() { let e = new n(this.target, this.targetSlot, this.name, this.args.clone(), this.numArgs); return e.varOffset = this.varOffset, e; }
}, qs = class n extends J {
    receiver;
    name;
    kind = k.SafePropertyRead;
    constructor(e, t) { super(), this.receiver = e, this.name = t; }
    get index() { return this.name; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = T(this.receiver, e, t); }
    clone() { return new n(this.receiver.clone(), this.name); }
}, Us = class n extends J {
    receiver;
    index;
    kind = k.SafeKeyedRead;
    constructor(e, t, s) { super(s), this.receiver = e, this.index = t; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t), this.index.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = T(this.receiver, e, t), this.index = T(this.index, e, t); }
    clone() { return new n(this.receiver.clone(), this.index.clone(), this.sourceSpan); }
}, os = class n extends J {
    receiver;
    args;
    kind = k.SafeInvokeFunction;
    constructor(e, t) { super(), this.receiver = e, this.args = t; }
    visitExpression(e, t) {
        this.receiver.visitExpression(e, t);
        for (let s of this.args)
            s.visitExpression(e, t);
    }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) {
        this.receiver = T(this.receiver, e, t);
        for (let s = 0; s < this.args.length; s++)
            this.args[s] = T(this.args[s], e, t);
    }
    clone() { return new n(this.receiver.clone(), this.args.map(e => e.clone())); }
}, Hs = class n extends J {
    guard;
    expr;
    kind = k.SafeTernaryExpr;
    constructor(e, t) { super(), this.guard = e, this.expr = t; }
    visitExpression(e, t) { this.guard.visitExpression(e, t), this.expr.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.guard = T(this.guard, e, t), this.expr = T(this.expr, e, t); }
    clone() { return new n(this.guard.clone(), this.expr.clone()); }
}, Kr = class n extends J {
    kind = k.EmptyExpr;
    visitExpression(e, t) { }
    isEquivalent(e) { return e instanceof n; }
    isConstant() { return !0; }
    clone() { return new n; }
    transformInternalExpressions() { }
}, Ut = class n extends J {
    expr;
    xref;
    kind = k.AssignTemporaryExpr;
    name = null;
    constructor(e, t) { super(), this.expr = e, this.xref = t; }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.expr = T(this.expr, e, t); }
    clone() { let e = new n(this.expr.clone(), this.xref); return e.name = this.name, e; }
}, bn = class n extends J {
    xref;
    kind = k.ReadTemporaryExpr;
    name = null;
    constructor(e) { super(), this.xref = e; }
    visitExpression(e, t) { }
    isEquivalent() { return this.xref === this.xref; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { }
    clone() { let e = new n(this.xref); return e.name = this.name, e; }
}, So = class n extends J {
    slot;
    kind = k.SlotLiteralExpr;
    constructor(e) { super(), this.slot = e; }
    visitExpression(e, t) { }
    isEquivalent(e) { return e instanceof n && e.slot === this.slot; }
    isConstant() { return !0; }
    clone() { return new n(this.slot); }
    transformInternalExpressions() { }
}, xo = class n extends J {
    expr;
    target;
    targetSlot;
    alias;
    kind = k.ConditionalCase;
    constructor(e, t, s, r = null) { super(), this.expr = e, this.target = t, this.targetSlot = s, this.alias = r; }
    visitExpression(e, t) { this.expr !== null && this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && e.expr === this.expr; }
    isConstant() { return !0; }
    clone() { return new n(this.expr, this.target, this.targetSlot); }
    transformInternalExpressions(e, t) { this.expr !== null && (this.expr = T(this.expr, e, t)); }
}, ei = class n extends J {
    expr;
    kind = k.ConstCollected;
    constructor(e) { super(), this.expr = e; }
    transformInternalExpressions(e, t) { this.expr = e(this.expr, t); }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n ? this.expr.isEquivalent(e.expr) : !1; }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr); }
};
function xe(n, e) { fe(n, (t, s) => (e(t, s), t), z.None); }
var z = function (n) { return n[n.None = 0] = "None", n[n.InChildOperation = 1] = "InChildOperation", n; }(z || {});
function ha(n, e, t) {
    for (let s = 0; s < n.expressions.length; s++)
        n.expressions[s] = T(n.expressions[s], e, t);
}
function fe(n, e, t) {
    switch (n.kind) {
        case u.StyleProp:
        case u.StyleMap:
        case u.ClassProp:
        case u.ClassMap:
        case u.Binding:
            n.expression instanceof ce ? ha(n.expression, e, t) : n.expression = T(n.expression, e, t);
            break;
        case u.Property:
        case u.DomProperty:
        case u.Attribute:
            n.expression instanceof ce ? ha(n.expression, e, t) : n.expression = T(n.expression, e, t), n.sanitizer = n.sanitizer && T(n.sanitizer, e, t);
            break;
        case u.TwoWayProperty:
            n.expression = T(n.expression, e, t), n.sanitizer = n.sanitizer && T(n.sanitizer, e, t);
            break;
        case u.I18nExpression:
            n.expression = T(n.expression, e, t);
            break;
        case u.InterpolateText:
            ha(n.interpolation, e, t);
            break;
        case u.Statement:
            yo(n.statement, e, t);
            break;
        case u.Variable:
            n.initializer = T(n.initializer, e, t);
            break;
        case u.Conditional:
            for (let s of n.conditions)
                s.expr !== null && (s.expr = T(s.expr, e, t));
            n.processed !== null && (n.processed = T(n.processed, e, t)), n.contextValue !== null && (n.contextValue = T(n.contextValue, e, t));
            break;
        case u.Listener:
        case u.TwoWayListener:
            for (let s of n.handlerOps)
                fe(s, e, t | z.InChildOperation);
            break;
        case u.ExtractedAttribute:
            n.expression = n.expression && T(n.expression, e, t), n.trustedValueFn = n.trustedValueFn && T(n.trustedValueFn, e, t);
            break;
        case u.RepeaterCreate:
            if (n.trackByOps === null)
                n.track = T(n.track, e, t);
            else
                for (let s of n.trackByOps)
                    fe(s, e, t | z.InChildOperation);
            n.trackByFn !== null && (n.trackByFn = T(n.trackByFn, e, t));
            break;
        case u.Repeater:
            n.collection = T(n.collection, e, t);
            break;
        case u.Defer:
            n.loadingConfig !== null && (n.loadingConfig = T(n.loadingConfig, e, t)), n.placeholderConfig !== null && (n.placeholderConfig = T(n.placeholderConfig, e, t)), n.resolverFn !== null && (n.resolverFn = T(n.resolverFn, e, t));
            break;
        case u.I18nMessage:
            for (let [s, r] of n.params)
                n.params.set(s, T(r, e, t));
            for (let [s, r] of n.postprocessingParams)
                n.postprocessingParams.set(s, T(r, e, t));
            break;
        case u.DeferWhen:
            n.expr = T(n.expr, e, t);
            break;
        case u.StoreLet:
            n.value = T(n.value, e, t);
            break;
        case u.Advance:
        case u.Container:
        case u.ContainerEnd:
        case u.ContainerStart:
        case u.DeferOn:
        case u.DisableBindings:
        case u.Element:
        case u.ElementEnd:
        case u.ElementStart:
        case u.EnableBindings:
        case u.I18n:
        case u.I18nApply:
        case u.I18nContext:
        case u.I18nEnd:
        case u.I18nStart:
        case u.IcuEnd:
        case u.IcuStart:
        case u.Namespace:
        case u.Pipe:
        case u.Projection:
        case u.ProjectionDef:
        case u.Template:
        case u.Text:
        case u.I18nAttributes:
        case u.IcuPlaceholder:
        case u.DeclareLet:
        case u.SourceLocation:
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate: break;
        default: throw new Error(`AssertionError: transformExpressionsInOp doesn't handle ${u[n.kind]}`);
    }
}
function T(n, e, t) {
    if (n instanceof J)
        n.transformInternalExpressions(e, t);
    else if (n instanceof H)
        n.lhs = T(n.lhs, e, t), n.rhs = T(n.rhs, e, t);
    else if (n instanceof Kt)
        n.expr = T(n.expr, e, t);
    else if (n instanceof Ue)
        n.receiver = T(n.receiver, e, t);
    else if (n instanceof Mt)
        n.receiver = T(n.receiver, e, t), n.index = T(n.index, e, t);
    else if (n instanceof Me) {
        n.fn = T(n.fn, e, t);
        for (let s = 0; s < n.args.length; s++)
            n.args[s] = T(n.args[s], e, t);
    }
    else if (n instanceof ft)
        for (let s = 0; s < n.entries.length; s++)
            n.entries[s] = T(n.entries[s], e, t);
    else if (n instanceof bt)
        for (let s = 0; s < n.entries.length; s++)
            n.entries[s].value = T(n.entries[s].value, e, t);
    else if (n instanceof _t)
        n.condition = T(n.condition, e, t), n.trueCase = T(n.trueCase, e, t), n.falseCase !== null && (n.falseCase = T(n.falseCase, e, t));
    else if (n instanceof Yn)
        n.expr = T(n.expr, e, t);
    else if (n instanceof Er)
        n.expr = T(n.expr, e, t);
    else if (n instanceof xr)
        for (let s = 0; s < n.expressions.length; s++)
            n.expressions[s] = T(n.expressions[s], e, t);
    else if (n instanceof Ds)
        n.condition = T(n.condition, e, t);
    else if (n instanceof ks)
        n.tag = T(n.tag, e, t), n.template.expressions = n.template.expressions.map(s => T(s, e, t));
    else if (n instanceof En) {
        if (Array.isArray(n.body))
            for (let s = 0; s < n.body.length; s++)
                yo(n.body[s], e, t);
        else
            n.body = T(n.body, e, t);
    }
    else if (!(n instanceof U)) {
        if (n instanceof Ns)
            for (let s = 0; s < n.expressions.length; s++)
                n.expressions[s] = T(n.expressions[s], e, t);
        else if (n instanceof Tt)
            n.expr = T(n.expr, e, t);
        else if (!(n instanceof et || n instanceof Jt || n instanceof Ee))
            throw new Error(`Unhandled expression kind: ${n.constructor.name}`);
    }
    return e(n, t);
}
function yo(n, e, t) {
    if (n instanceof tt)
        n.expr = T(n.expr, e, t);
    else if (n instanceof _e)
        n.value = T(n.value, e, t);
    else if (n instanceof le)
        n.value !== void 0 && (n.value = T(n.value, e, t));
    else if (n instanceof Ar) {
        n.condition = T(n.condition, e, t);
        for (let s of n.trueCase)
            yo(s, e, t);
        for (let s of n.falseCase)
            yo(s, e, t);
    }
    else
        throw new Error(`Unhandled statement kind: ${n.constructor.name}`);
}
function Gh(n) { return n instanceof Ee && typeof n.value == "string"; }
var S = (() => {
    class n {
        static nextListId = 0;
        debugListId = n.nextListId++;
        head = { kind: u.ListEnd, next: null, prev: null, debugListId: this.debugListId };
        tail = { kind: u.ListEnd, next: null, prev: null, debugListId: this.debugListId };
        constructor() { this.head.next = this.tail, this.tail.prev = this.head; }
        push(t) {
            if (Array.isArray(t)) {
                for (let r of t)
                    this.push(r);
                return;
            }
            n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = this.debugListId;
            let s = this.tail.prev;
            t.prev = s, s.next = t, t.next = this.tail, this.tail.prev = t;
        }
        prepend(t) {
            if (t.length === 0)
                return;
            for (let i of t)
                n.assertIsNotEnd(i), n.assertIsUnowned(i), i.debugListId = this.debugListId;
            let s = this.head.next, r = this.head;
            for (let i of t)
                r.next = i, i.prev = r, r = i;
            r.next = s, s.prev = r;
        }
        *[Symbol.iterator]() {
            let t = this.head.next;
            for (; t !== this.tail;) {
                n.assertIsOwned(t, this.debugListId);
                let s = t.next;
                yield t, t = s;
            }
        }
        *reversed() {
            let t = this.tail.prev;
            for (; t !== this.head;) {
                n.assertIsOwned(t, this.debugListId);
                let s = t.prev;
                yield t, t = s;
            }
        }
        static replace(t, s) { n.assertIsNotEnd(t), n.assertIsNotEnd(s), n.assertIsOwned(t), n.assertIsUnowned(s), s.debugListId = t.debugListId, t.prev !== null && (t.prev.next = s, s.prev = t.prev), t.next !== null && (t.next.prev = s, s.next = t.next), t.debugListId = null, t.prev = null, t.next = null; }
        static replaceWithMany(t, s) {
            if (s.length === 0) {
                n.remove(t);
                return;
            }
            n.assertIsNotEnd(t), n.assertIsOwned(t);
            let r = t.debugListId;
            t.debugListId = null;
            for (let p of s)
                n.assertIsNotEnd(p), n.assertIsUnowned(p);
            let { prev: i, next: o } = t;
            t.prev = null, t.next = null;
            let a = i;
            for (let p of s)
                n.assertIsUnowned(p), p.debugListId = r, a.next = p, p.prev = a, p.next = null, a = p;
            let l = s[0], c = a;
            i !== null && (i.next = l, l.prev = i), o !== null && (o.prev = c, c.next = o);
        }
        static remove(t) { n.assertIsNotEnd(t), n.assertIsOwned(t), t.prev.next = t.next, t.next.prev = t.prev, t.debugListId = null, t.prev = null, t.next = null; }
        static insertBefore(t, s) {
            if (Array.isArray(t)) {
                for (let r of t)
                    n.insertBefore(r, s);
                return;
            }
            if (n.assertIsOwned(s), s.prev === null)
                throw new Error("AssertionError: illegal operation on list start");
            n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = s.debugListId, t.prev = null, s.prev.next = t, t.prev = s.prev, t.next = s, s.prev = t;
        }
        static insertAfter(t, s) {
            if (n.assertIsOwned(s), s.next === null)
                throw new Error("AssertionError: illegal operation on list end");
            n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = s.debugListId, s.next.prev = t, t.next = s.next, t.prev = s, s.next = t;
        }
        static assertIsUnowned(t) {
            if (t.debugListId !== null)
                throw new Error(`AssertionError: illegal operation on owned node: ${u[t.kind]}`);
        }
        static assertIsOwned(t, s) {
            if (t.debugListId === null)
                throw new Error(`AssertionError: illegal operation on unowned node: ${u[t.kind]}`);
            if (s !== void 0 && t.debugListId !== s)
                throw new Error(`AssertionError: node belongs to the wrong list (expected ${s}, actual ${t.debugListId})`);
        }
        static assertIsNotEnd(t) {
            if (t.kind === u.ListEnd)
                throw new Error("AssertionError: illegal operation on list head or tail");
        }
    }
    return n;
})(), Ie = class {
    slot = null;
}, bg = new Set([u.Element, u.ElementStart, u.Container, u.ContainerStart, u.Template, u.RepeaterCreate, u.ConditionalCreate, u.ConditionalBranchCreate]);
function kn(n) { return bg.has(n.kind); }
function kg(n, e, t, s, r, i) { return E(E({ kind: u.ElementStart, xref: e, tag: n, handle: new Ie, attributes: null, localRefs: [], nonBindable: !1, namespace: t, i18nPlaceholder: s, startSourceSpan: r, wholeSourceSpan: i }, mt), F); }
function Xh(n, e, t, s, r, i, o, a) { return E(E({ kind: u.Template, xref: n, templateKind: e, attributes: null, tag: t, handle: new Ie, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: o, wholeSourceSpan: a }, mt), F); }
function Yh(n, e, t, s, r, i, o, a) { return E(E({ kind: u.ConditionalCreate, xref: n, templateKind: e, attributes: null, tag: t, handle: new Ie, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: o, wholeSourceSpan: a }, mt), F); }
function Qh(n, e, t, s, r, i, o, a) { return E(E({ kind: u.ConditionalBranchCreate, xref: n, templateKind: e, attributes: null, tag: t, handle: new Ie, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: o, wholeSourceSpan: a }, mt), F); }
function Ig(n, e, t, s, r, i, o, a, l, c) { return ue(E(E(E({ kind: u.RepeaterCreate, attributes: null, xref: n, handle: new Ie, emptyView: e, track: s, trackByFn: null, trackByOps: null, tag: t, emptyTag: i, emptyAttributes: null, functionNameSuffix: "For", namespace: be.HTML, nonBindable: !1, localRefs: [], decls: null, vars: null, varNames: r, usesComponentInstance: !1, i18nPlaceholder: o, emptyI18nPlaceholder: a, startSourceSpan: l, wholeSourceSpan: c }, mt), F), He), { numSlotsUsed: e === null ? 2 : 3 }); }
function Ng(n, e) { return E({ kind: u.ElementEnd, xref: n, sourceSpan: e }, F); }
function Dg(n) { return E({ kind: u.DisableBindings, xref: n }, F); }
function Pg(n) { return E({ kind: u.EnableBindings, xref: n }, F); }
function Zh(n, e, t, s) { return E(E({ kind: u.Text, xref: n, handle: new Ie, initialValue: e, icuPlaceholder: t, sourceSpan: s }, mt), F); }
function $c(n, e, t, s, r, i, o, a, l) { let c = new S; return c.push(r), E({ kind: u.Listener, target: n, targetSlot: e, tag: s, hostListener: a, name: t, handlerOps: c, handlerFnName: null, consumesDollarEvent: !1, isLegacyAnimationListener: i !== null, legacyAnimationPhase: i, eventTarget: o, sourceSpan: l }, F); }
function Jh(n, e, t, s, r, i) { let o = new S; return o.push(r), E({ kind: u.TwoWayListener, target: n, targetSlot: e, tag: s, name: t, handlerOps: o, handlerFnName: null, sourceSpan: i }, F); }
function Kh(n, e, t) { return E(E({ kind: u.Pipe, xref: n, handle: e, name: t }, F), mt); }
function Lg(n) { return E({ kind: u.Namespace, active: n }, F); }
function Bg(n) { return E({ kind: u.ProjectionDef, def: n }, F); }
function Mg(n, e, t, s, r) { return ue(E(E({ kind: u.Projection, xref: n, handle: new Ie, selector: e, i18nPlaceholder: t, fallbackView: s, projectionSlotIndex: 0, attributes: null, localRefs: [], sourceSpan: r }, F), mt), { numSlotsUsed: s === null ? 1 : 2 }); }
function lt(n, e, t, s, r, i, o, a) { return E({ kind: u.ExtractedAttribute, target: n, bindingKind: e, namespace: t, name: s, expression: r, i18nContext: i, i18nMessage: o, securityContext: a, trustedValueFn: null }, F); }
function Rg(n, e, t, s, r, i) { return ue(E(E({ kind: u.Defer, xref: n, handle: new Ie, mainView: e, mainSlot: t, loadingView: null, loadingSlot: null, loadingConfig: null, loadingMinimumTime: null, loadingAfterTime: null, placeholderView: null, placeholderSlot: null, placeholderConfig: null, placeholderMinimumTime: null, errorView: null, errorSlot: null, ownResolverFn: s, resolverFn: r, flags: null, sourceSpan: i }, F), mt), { numSlotsUsed: 2 }); }
function an(n, e, t, s) { return E({ kind: u.DeferOn, defer: n, trigger: e, modifier: t, sourceSpan: s }, F); }
function Fg(n, e, t) { return E(E({ kind: u.DeclareLet, xref: n, declaredName: e, sourceSpan: t, handle: new Ie }, mt), F); }
function $g(n, e, t, s, r, i, o, a) { return E({ kind: u.I18nMessage, xref: n, i18nContext: e, i18nBlock: t, message: s, messagePlaceholder: r, params: i, postprocessingParams: o, needsPostprocessing: a, subMessages: [] }, F); }
function ra(n, e, t, s) { return E(E({ kind: u.I18nStart, xref: n, handle: new Ie, root: t ?? n, message: e, messageIndex: null, subTemplateIndex: null, context: null, sourceSpan: s }, F), mt); }
function ia(n, e) { return E({ kind: u.I18nEnd, xref: n, sourceSpan: e }, F); }
function Og(n, e, t, s) { return E({ kind: u.IcuStart, xref: n, message: e, messagePlaceholder: t, context: null, sourceSpan: s }, F); }
function Vg(n) { return E({ kind: u.IcuEnd, xref: n }, F); }
function qg(n, e, t) { return E({ kind: u.IcuPlaceholder, xref: n, name: e, strings: t, expressionPlaceholders: [] }, F); }
function fa(n, e, t, s, r) {
    if (t === null && n !== Vn.Attr)
        throw new Error("AssertionError: i18nBlock must be provided for non-attribute contexts.");
    return E({ kind: u.I18nContext, contextKind: n, xref: e, i18nBlock: t, message: s, sourceSpan: r, params: new Map, postprocessingParams: new Map }, F);
}
function ef(n, e, t) { return E(E({ kind: u.I18nAttributes, xref: n, handle: e, target: t, i18nAttributesConfig: null }, F), mt); }
function Ug(n, e) { return E({ kind: u.SourceLocation, templatePath: n, locations: e }, F); }
function Hg(n, e, t, s, r, i) { return E(E({ kind: u.DomProperty, name: n, expression: e, isLegacyAnimationTrigger: t, i18nContext: s, securityContext: r, sanitizer: null, sourceSpan: i }, He), F); }
var tf = "CTX_REF_MARKER", A = function (n) { return n[n.Tmpl = 0] = "Tmpl", n[n.Host = 1] = "Host", n[n.Both = 2] = "Both", n; }(A || {}), je = function (n) { return n[n.Full = 0] = "Full", n[n.DomOnly = 1] = "DomOnly", n; }(je || {}), Co = class {
    componentName;
    pool;
    compatibility;
    mode;
    constructor(e, t, s, r) { this.componentName = e, this.pool = t, this.compatibility = s, this.mode = r; }
    kind = A.Both;
    allocateXrefId() { return this.nextXrefId++; }
    nextXrefId = 0;
}, ti = class extends Co {
    relativeContextFilePath;
    i18nUseExternalIds;
    deferMeta;
    allDeferrableDepsFn;
    relativeTemplatePath;
    enableDebugLocations;
    constructor(e, t, s, r, i, o, a, l, c, p) { super(e, t, s, r), this.relativeContextFilePath = i, this.i18nUseExternalIds = o, this.deferMeta = a, this.allDeferrableDepsFn = l, this.relativeTemplatePath = c, this.enableDebugLocations = p, this.root = new ct(this, this.allocateXrefId(), null), this.views.set(this.root.xref, this.root); }
    kind = A.Tmpl;
    fnSuffix = "Template";
    root;
    views = new Map;
    contentSelectors = null;
    allocateView(e) { let t = new ct(this, this.allocateXrefId(), e); return this.views.set(t.xref, t), t; }
    get units() { return this.views.values(); }
    addConst(e, t) {
        for (let r = 0; r < this.consts.length; r++)
            if (this.consts[r].isEquivalent(e))
                return r;
        let s = this.consts.length;
        return this.consts.push(e), t && this.constsInitializers.push(...t), s;
    }
    consts = [];
    constsInitializers = [];
}, Ao = class {
    xref;
    constructor(e) { this.xref = e; }
    create = new S;
    update = new S;
    fnName = null;
    vars = null;
    *ops() {
        for (let e of this.create)
            if (yield e, e.kind === u.Listener || e.kind === u.TwoWayListener)
                for (let t of e.handlerOps)
                    yield t;
            else if (e.kind === u.RepeaterCreate && e.trackByOps !== null)
                for (let t of e.trackByOps)
                    yield t;
        for (let e of this.update)
            yield e;
    }
}, ct = class extends Ao {
    job;
    parent;
    constructor(e, t, s) { super(t), this.job = e, this.parent = s; }
    contextVariables = new Map;
    aliases = new Set;
    decls = null;
}, _o = class extends Co {
    constructor(e, t, s, r) { super(e, t, s, r), this.root = new Sl(this); }
    kind = A.Host;
    fnSuffix = "HostBindings";
    root;
    get units() { return [this.root]; }
}, Sl = class extends Ao {
    job;
    constructor(e) { super(0), this.job = e; }
    attributes = null;
};
function Wg(n) {
    for (let e of n.units)
        for (let t of e.ops())
            fe(t, jg, z.None);
}
function jg(n) {
    if (n instanceof Me && n.fn instanceof Ce && n.fn.name === "$any") {
        if (n.args.length !== 1)
            throw new Error("The $any builtin function expects exactly one argument.");
        return n.args[0];
    }
    return n;
}
function zg(n) {
    let e = new Map;
    for (let t of n.units)
        for (let s of t.create)
            s.kind === u.I18nContext && e.set(s.xref, s);
    for (let t of n.units)
        for (let s of t.update)
            s.kind === u.I18nExpression && Gg(e, s) && S.insertAfter(_g(s.i18nOwner, s.handle, null), s);
}
function Gg(n, e) {
    if (e.next?.kind !== u.I18nExpression)
        return !0;
    let t = n.get(e.context), s = n.get(e.next.context);
    if (t === void 0)
        throw new Error("AssertionError: expected an I18nContextOp to exist for the I18nExpressionOp's context");
    if (s === void 0)
        throw new Error("AssertionError: expected an I18nContextOp to exist for the next I18nExpressionOp's context");
    return t.i18nBlock !== null ? t.i18nBlock !== s.i18nBlock : e.i18nOwner !== e.next.i18nOwner;
}
function Xg(n) {
    for (let e of n.units) {
        let t = e.update.head, s = [], r = null;
        for (let i of e.create) {
            if (i.kind === u.I18nStart)
                r = { blockXref: i.xref, lastSlotConsumer: i.xref };
            else if (i.kind === u.I18nEnd) {
                for (let o of s)
                    o.target = r.lastSlotConsumer, S.insertBefore(o, t);
                s.length = 0, r = null;
            }
            if (Js(i))
                for (r !== null && (r.lastSlotConsumer = i.xref); t.next !== null;) {
                    if (r !== null && t.kind === u.I18nExpression && t.usage === Qs.I18nText && t.i18nOwner === r.blockXref) {
                        let a = t;
                        t = t.next, S.remove(a), s.push(a);
                        continue;
                    }
                    let o = !1;
                    if (Yr(t) && t.target !== i.xref ? o = !0 : (t.kind === u.Statement || t.kind === u.Variable) && xe(t, a => { !o && Yr(a) && a.target !== i.xref && (o = !0); }), o)
                        break;
                    t = t.next;
                }
        }
    }
}
function Yg(n) {
    if (!(!n.enableDebugLocations || n.relativeTemplatePath === null))
        for (let e of n.units) {
            let t = [];
            for (let s of e.create)
                if (s.kind === u.ElementStart || s.kind === u.Element) {
                    let r = s.startSourceSpan.start;
                    t.push({ targetSlot: s.handle, offset: r.offset, line: r.line, column: r.col });
                }
            t.length > 0 && e.create.push(Ug(n.relativeTemplatePath, t));
        }
}
function Oc(n) {
    let e = new Map;
    for (let t of n.create)
        Js(t) && (e.set(t.xref, t), t.kind === u.RepeaterCreate && t.emptyView !== null && e.set(t.emptyView, t));
    return e;
}
function Qg(n) {
    for (let e of n.units) {
        let t = Oc(e);
        for (let s of e.ops())
            switch (s.kind) {
                case u.Attribute:
                    Zg(e, s, t);
                    break;
                case u.Property:
                    if (!s.isLegacyAnimationTrigger) {
                        let r;
                        s.i18nMessage !== null && s.templateKind === null ? r = I.I18n : s.isStructuralTemplateAttribute ? r = I.Template : r = I.Property, S.insertBefore(lt(s.target, r, null, s.name, null, null, null, s.securityContext), ms(t, s.target));
                    }
                    break;
                case u.TwoWayProperty:
                    S.insertBefore(lt(s.target, I.TwoWayProperty, null, s.name, null, null, null, s.securityContext), ms(t, s.target));
                    break;
                case u.StyleProp:
                case u.ClassProp:
                    e.job.compatibility === nt.TemplateDefinitionBuilder && s.expression instanceof Kr && S.insertBefore(lt(s.target, I.Property, null, s.name, null, null, null, te.STYLE), ms(t, s.target));
                    break;
                case u.Listener:
                    if (!s.isLegacyAnimationListener) {
                        let r = lt(s.target, I.Property, null, s.name, null, null, null, te.NONE);
                        if (n.kind === A.Host) {
                            if (n.compatibility)
                                break;
                            e.create.push(r);
                        }
                        else
                            S.insertBefore(r, ms(t, s.target));
                    }
                    break;
                case u.TwoWayListener:
                    if (n.kind !== A.Host) {
                        let r = lt(s.target, I.Property, null, s.name, null, null, null, te.NONE);
                        S.insertBefore(r, ms(t, s.target));
                    }
                    break;
            }
    }
}
function ms(n, e) {
    let t = n.get(e);
    if (t === void 0)
        throw new Error("All attributes should have an element-like target.");
    return t;
}
function Zg(n, e, t) {
    if (e.expression instanceof ce)
        return;
    let s = e.isTextAttribute || e.expression.isConstant();
    if (n.job.compatibility === nt.TemplateDefinitionBuilder && (s &&= e.isTextAttribute), s) {
        let r = lt(e.target, e.isStructuralTemplateAttribute ? I.Template : I.Attribute, e.namespace, e.name, e.expression, e.i18nContext, e.i18nMessage, e.securityContext);
        if (n.job.kind === A.Host)
            n.create.push(r);
        else {
            let i = ms(t, e.target);
            S.insertBefore(r, i);
        }
        S.remove(e);
    }
}
function Jg(n, e) {
    let t = n.get(e);
    if (t === void 0)
        throw new Error("All attributes should have an element-like target.");
    return t;
}
function Kg(n) {
    let e = new Map;
    for (let t of n.units)
        for (let s of t.create)
            kn(s) && e.set(s.xref, s);
    for (let t of n.units)
        for (let s of t.ops())
            if (s.kind === u.Binding)
                switch (s.bindingKind) {
                    case I.Attribute:
                        if (s.name === "ngNonBindable") {
                            S.remove(s);
                            let r = Jg(e, s.target);
                            r.nonBindable = !0;
                        }
                        else {
                            let [r, i] = kt(s.name);
                            S.replace(s, xg(s.target, r, i, s.expression, s.securityContext, s.isTextAttribute, s.isStructuralTemplateAttribute, s.templateKind, s.i18nMessage, s.sourceSpan));
                        }
                        break;
                    case I.Property:
                    case I.LegacyAnimation:
                        n.kind === A.Host ? S.replace(s, Hg(s.name, s.expression, s.bindingKind === I.LegacyAnimation, s.i18nContext, s.securityContext, s.sourceSpan)) : S.replace(s, mg(s.target, s.name, s.expression, s.bindingKind === I.LegacyAnimation, s.securityContext, s.isStructuralTemplateAttribute, s.templateKind, s.i18nContext, s.i18nMessage, s.sourceSpan));
                        break;
                    case I.TwoWayProperty:
                        if (!(s.expression instanceof G))
                            throw new Error(`Expected value of two-way property binding "${s.name}" to be an expression`);
                        S.replace(s, gg(s.target, s.name, s.expression, s.securityContext, s.isStructuralTemplateAttribute, s.templateKind, s.i18nContext, s.i18nMessage, s.sourceSpan));
                        break;
                    case I.I18n:
                    case I.ClassName:
                    case I.StyleProperty: throw new Error(`Unhandled binding of kind ${I[s.bindingKind]}`);
                }
}
var _u = new Map([[f.attribute, f.attribute], [f.classProp, f.classProp], [f.element, f.element], [f.elementContainer, f.elementContainer], [f.elementContainerEnd, f.elementContainerEnd], [f.elementContainerStart, f.elementContainerStart], [f.elementEnd, f.elementEnd], [f.elementStart, f.elementStart], [f.domProperty, f.domProperty], [f.i18nExp, f.i18nExp], [f.listener, f.listener], [f.listener, f.listener], [f.property, f.property], [f.styleProp, f.styleProp], [f.syntheticHostListener, f.syntheticHostListener], [f.syntheticHostProperty, f.syntheticHostProperty], [f.templateCreate, f.templateCreate], [f.twoWayProperty, f.twoWayProperty], [f.twoWayListener, f.twoWayListener], [f.declareLet, f.declareLet], [f.conditionalCreate, f.conditionalBranchCreate], [f.conditionalBranchCreate, f.conditionalBranchCreate], [f.domElement, f.domElement], [f.domElementStart, f.domElementStart], [f.domElementEnd, f.domElementEnd], [f.domElementContainer, f.domElementContainer], [f.domElementContainerStart, f.domElementContainerStart], [f.domElementContainerEnd, f.domElementContainerEnd], [f.domListener, f.domListener], [f.domTemplate, f.domTemplate]]), ev = 256;
function tv(n) {
    for (let e of n.units)
        Tu(e.create), Tu(e.update);
}
function Tu(n) {
    let e = null;
    for (let t of n) {
        if (t.kind !== u.Statement || !(t.statement instanceof tt)) {
            e = null;
            continue;
        }
        if (!(t.statement.expr instanceof Me) || !(t.statement.expr.fn instanceof Jt)) {
            e = null;
            continue;
        }
        let s = t.statement.expr.fn.value;
        if (!_u.has(s)) {
            e = null;
            continue;
        }
        if (e !== null && _u.get(e.instruction) === s && e.length < ev) {
            let r = e.expression.callFn(t.statement.expr.args, t.statement.expr.sourceSpan, t.statement.expr.pure);
            e.expression = r, e.op.statement = r.toStmt(), e.length++, S.remove(t);
        }
        else
            e = { op: t, instruction: s, expression: t.statement.expr, length: 1 };
    }
}
function nv(n) {
    for (let e of n.units)
        for (let t of e.update)
            (t.kind === u.Attribute || t.kind === u.StyleProp || t.kind == u.StyleMap || t.kind === u.ClassMap) && t.expression instanceof ce && t.expression.strings.length === 2 && t.expression.strings.every(r => r === "") && (t.expression = t.expression.expressions[0]);
}
function sv(n) {
    for (let e of n.units)
        for (let t of e.ops()) {
            if (t.kind !== u.Conditional)
                continue;
            let s, r = t.conditions.findIndex(o => o.expr === null);
            if (r >= 0) {
                let o = t.conditions.splice(r, 1)[0].targetSlot;
                s = new So(o);
            }
            else
                s = d(-1);
            let i = t.test == null ? null : new Ut(t.test, n.allocateXrefId());
            for (let o = t.conditions.length - 1; o >= 0; o--) {
                let a = t.conditions[o];
                if (a.expr !== null) {
                    if (i !== null) {
                        let l = o === 0 ? i : new bn(i.xref);
                        a.expr = new H(x.Identical, l, a.expr);
                    }
                    else if (a.alias !== null) {
                        let l = n.allocateXrefId();
                        a.expr = new Ut(a.expr, l), t.contextValue = new bn(l);
                    }
                    s = new _t(a.expr, new So(a.targetSlot), s);
                }
            }
            t.processed = s, t.conditions = [];
        }
}
var rv = new Map([["&&", x.And], [">", x.Bigger], [">=", x.BiggerEquals], ["|", x.BitwiseOr], ["&", x.BitwiseAnd], ["/", x.Divide], ["=", x.Assign], ["==", x.Equals], ["===", x.Identical], ["<", x.Lower], ["<=", x.LowerEquals], ["-", x.Minus], ["%", x.Modulo], ["**", x.Exponentiation], ["*", x.Multiply], ["!=", x.NotEquals], ["!==", x.NotIdentical], ["??", x.NullishCoalesce], ["||", x.Or], ["+", x.Plus], ["in", x.In], ["+=", x.AdditionAssignment], ["-=", x.SubtractionAssignment], ["*=", x.MultiplicationAssignment], ["/=", x.DivisionAssignment], ["%=", x.RemainderAssignment], ["**=", x.ExponentiationAssignment], ["&&=", x.AndAssignment], ["||=", x.OrAssignment], ["??=", x.NullishCoalesceAssignment]]);
function nf(n) { let e = new Map([["svg", be.SVG], ["math", be.Math]]); return n === null ? be.HTML : e.get(n) ?? be.HTML; }
function iv(n) {
    let e = new Map([["svg", be.SVG], ["math", be.Math]]);
    for (let [t, s] of e.entries())
        if (s === n)
            return t;
    return null;
}
function ov(n, e) { return e === be.HTML ? n : `:${iv(e)}:${n}`; }
function Ws(n) { return Array.isArray(n) ? R(n.map(Ws)) : d(n); }
function av(n) {
    let e = new Map;
    for (let t of n.units)
        for (let s of t.create)
            if (s.kind === u.ExtractedAttribute) {
                let r = e.get(s.target) || new xl(n.compatibility);
                e.set(s.target, r), r.add(s.bindingKind, s.name, s.expression, s.namespace, s.trustedValueFn), S.remove(s);
            }
    if (n instanceof ti) {
        for (let t of n.units)
            for (let s of t.create)
                if (s.kind == u.Projection) {
                    let r = e.get(s.xref);
                    if (r !== void 0) {
                        let i = yl(r);
                        i.entries.length > 0 && (s.attributes = i);
                    }
                }
                else
                    kn(s) && (s.attributes = bu(n, e, s.xref), s.kind === u.RepeaterCreate && s.emptyView !== null && (s.emptyAttributes = bu(n, e, s.emptyView)));
    }
    else if (n instanceof _o)
        for (let [t, s] of e.entries()) {
            if (t !== n.root.xref)
                throw new Error("An attribute would be const collected into the host binding's template function, but is not associated with the root xref.");
            let r = yl(s);
            r.entries.length > 0 && (n.root.attributes = r);
        }
}
function bu(n, e, t) {
    let s = e.get(t);
    if (s !== void 0) {
        let r = yl(s);
        if (r.entries.length > 0)
            return n.addConst(r);
    }
    return null;
}
var ls = Object.freeze([]), xl = class {
    compatibility;
    known = new Map;
    byKind = new Map;
    propertyBindings = null;
    projectAs = null;
    get attributes() { return this.byKind.get(I.Attribute) ?? ls; }
    get classes() { return this.byKind.get(I.ClassName) ?? ls; }
    get styles() { return this.byKind.get(I.StyleProperty) ?? ls; }
    get bindings() { return this.propertyBindings ?? ls; }
    get template() { return this.byKind.get(I.Template) ?? ls; }
    get i18n() { return this.byKind.get(I.I18n) ?? ls; }
    constructor(e) { this.compatibility = e; }
    isKnown(e, t) { let s = this.known.get(e) ?? new Set; return this.known.set(e, s), s.has(t) ? !0 : (s.add(t), !1); }
    add(e, t, s, r, i) {
        if (!(this.compatibility === nt.TemplateDefinitionBuilder && (e === I.Attribute || e === I.ClassName || e === I.StyleProperty)) && this.isKnown(e, t))
            return;
        if (t === "ngProjectAs") {
            if (s === null || !(s instanceof Ee) || s.value == null || typeof s.value?.toString() != "string")
                throw Error("ngProjectAs must have a string literal value");
            this.projectAs = s.value.toString();
        }
        let a = this.arrayFor(e);
        if (a.push(...lv(r, t)), e === I.Attribute || e === I.StyleProperty) {
            if (s === null)
                throw Error("Attribute, i18n attribute, & style element attributes must have a value");
            if (i !== null) {
                if (!Gh(s))
                    throw Error("AssertionError: extracted attribute value should be string literal");
                a.push(oh(i, new Ns([new Sr(s.value)], []), void 0, s.sourceSpan));
            }
            else
                a.push(s);
        }
    }
    arrayFor(e) { return e === I.Property || e === I.TwoWayProperty ? (this.propertyBindings ??= [], this.propertyBindings) : (this.byKind.has(e) || this.byKind.set(e, []), this.byKind.get(e)); }
};
function lv(n, e) { let t = d(e); return n ? [d(0), d(n), t] : [t]; }
function yl({ attributes: n, bindings: e, classes: t, i18n: s, projectAs: r, styles: i, template: o }) {
    let a = [...n];
    if (r !== null) {
        let l = Qo(r)[0];
        a.push(d(5), Ws(l));
    }
    return t.length > 0 && a.push(d(1), ...t), i.length > 0 && a.push(d(2), ...i), e.length > 0 && a.push(d(3), ...e), o.length > 0 && a.push(d(4), ...o), s.length > 0 && a.push(d(6), ...s), R(a);
}
function cv(n) {
    let e = new Map;
    for (let t of n.units) {
        for (let s of t.create)
            s.kind === u.I18nAttributes && e.set(s.target, s);
        for (let s of t.update)
            switch (s.kind) {
                case u.Property:
                case u.Attribute:
                    if (s.i18nContext === null || !(s.expression instanceof ce))
                        continue;
                    let r = e.get(s.target);
                    if (r === void 0)
                        throw new Error("AssertionError: An i18n attribute binding instruction requires the owning element to have an I18nAttributes create instruction");
                    if (r.target !== s.target)
                        throw new Error("AssertionError: Expected i18nAttributes target element to match binding target element");
                    let i = [];
                    for (let o = 0; o < s.expression.expressions.length; o++) {
                        let a = s.expression.expressions[o];
                        if (s.expression.i18nPlaceholders.length !== s.expression.expressions.length)
                            throw new Error(`AssertionError: An i18n attribute binding instruction requires the same number of expressions and placeholders, but found ${s.expression.i18nPlaceholders.length} placeholders and ${s.expression.expressions.length} expressions`);
                        i.push(zh(s.i18nContext, r.target, r.xref, r.handle, a, null, s.expression.i18nPlaceholders[o], Xr.Creation, Qs.I18nAttribute, s.name, s.sourceSpan));
                    }
                    S.replaceWithMany(s, i);
                    break;
            }
    }
}
function uv(n) {
    let e = new Map;
    for (let r of n.units)
        for (let i of r.ops())
            switch (i.kind) {
                case u.Binding:
                case u.Property:
                case u.Attribute:
                case u.ExtractedAttribute:
                    if (i.i18nMessage === null)
                        continue;
                    if (!e.has(i.i18nMessage)) {
                        let o = fa(Vn.Attr, n.allocateXrefId(), null, i.i18nMessage, null);
                        r.create.push(o), e.set(i.i18nMessage, o.xref);
                    }
                    i.i18nContext = e.get(i.i18nMessage);
                    break;
            }
    let t = new Map;
    for (let r of n.units)
        for (let i of r.create)
            switch (i.kind) {
                case u.I18nStart:
                    if (i.xref === i.root) {
                        let o = fa(Vn.RootI18n, n.allocateXrefId(), i.xref, i.message, null);
                        r.create.push(o), i.context = o.xref, t.set(i.xref, o);
                    }
                    break;
            }
    for (let r of n.units)
        for (let i of r.create)
            if (i.kind === u.I18nStart && i.xref !== i.root) {
                let o = t.get(i.root);
                if (o === void 0)
                    throw Error("AssertionError: Root i18n block i18n context should have been created.");
                i.context = o.xref, t.set(i.xref, o);
            }
    let s = null;
    for (let r of n.units)
        for (let i of r.create)
            switch (i.kind) {
                case u.I18nStart:
                    s = i;
                    break;
                case u.I18nEnd:
                    s = null;
                    break;
                case u.IcuStart:
                    if (s === null)
                        throw Error("AssertionError: Unexpected ICU outside of an i18n block.");
                    if (i.message.id !== s.message.id) {
                        let o = fa(Vn.Icu, n.allocateXrefId(), s.root, i.message, null);
                        r.create.push(o), i.context = o.xref;
                    }
                    else
                        i.context = s.context, t.get(s.xref).contextKind = Vn.Icu;
                    break;
            }
}
function pv(n) {
    let e = new Map;
    for (let t of n.units)
        for (let s of t.update.reversed())
            if (s.kind === u.Binding && s.isTextAttribute) {
                let r = e.get(s.target) || new Set;
                r.has(s.name) && n.compatibility === nt.TemplateDefinitionBuilder && (s.name === "style" || s.name === "class") && S.remove(s), r.add(s.name), e.set(s.target, r);
            }
}
function hv(n) {
    for (let e of n.units)
        for (let t of e.create)
            t.kind === u.Defer && (t.placeholderMinimumTime !== null && (t.placeholderConfig = new ei(Ws([t.placeholderMinimumTime]))), (t.loadingMinimumTime !== null || t.loadingAfterTime !== null) && (t.loadingConfig = new ei(Ws([t.loadingMinimumTime, t.loadingAfterTime]))));
}
function fv(n) {
    let e = new Map;
    function t(r) {
        if (e.has(r.xref))
            return e.get(r.xref);
        let i = new dv;
        for (let o of r.create)
            if (!(!kn(o) || o.localRefs === null)) {
                if (!Array.isArray(o.localRefs))
                    throw new Error("LocalRefs were already processed, but were needed to resolve defer targets.");
                for (let a of o.localRefs)
                    a.target === "" && i.targets.set(a.name, { xref: o.xref, slot: o.handle });
            }
        return e.set(r.xref, i), i;
    }
    function s(r, i, o) {
        switch (i.trigger.kind) {
            case Q.Idle:
            case Q.Never:
            case Q.Immediate:
            case Q.Timer: return;
            case Q.Hover:
            case Q.Interaction:
            case Q.Viewport:
                if (i.trigger.targetName === null) {
                    if (o === null)
                        throw new Error("defer on trigger with no target name must have a placeholder block");
                    let c = n.views.get(o);
                    if (c == null)
                        throw new Error("AssertionError: could not find placeholder view for defer on trigger");
                    for (let p of c.create)
                        if (Js(p) && (kn(p) || p.kind === u.Projection)) {
                            i.trigger.targetXref = p.xref, i.trigger.targetView = o, i.trigger.targetSlotViewSteps = -1, i.trigger.targetSlot = p.handle;
                            return;
                        }
                    return;
                }
                let a = o !== null ? n.views.get(o) : r, l = o !== null ? -1 : 0;
                for (; a !== null;) {
                    let c = t(a);
                    if (c.targets.has(i.trigger.targetName)) {
                        let { xref: p, slot: h } = c.targets.get(i.trigger.targetName);
                        i.trigger.targetXref = p, i.trigger.targetView = a.xref, i.trigger.targetSlotViewSteps = l, i.trigger.targetSlot = h;
                        return;
                    }
                    a = a.parent !== null ? n.views.get(a.parent) : null, l++;
                }
                break;
            default: throw new Error(`Trigger kind ${i.trigger.kind} not handled`);
        }
    }
    for (let r of n.units) {
        let i = new Map;
        for (let o of r.create)
            switch (o.kind) {
                case u.Defer:
                    i.set(o.xref, o);
                    break;
                case u.DeferOn:
                    let a = i.get(o.defer);
                    s(r, o, o.modifier === "hydrate" ? a.mainView : a.placeholderView);
                    break;
            }
    }
}
var dv = class {
    targets = new Map;
}, mv = new Map([[u.ElementEnd, [u.ElementStart, u.Element]], [u.ContainerEnd, [u.ContainerStart, u.Container]], [u.I18nEnd, [u.I18nStart, u.I18n]]]), gv = new Set([u.Pipe]);
function vv(n) {
    for (let e of n.units)
        for (let t of e.create) {
            let s = mv.get(t.kind);
            if (s === void 0)
                continue;
            let [r, i] = s, o = t.prev;
            for (; o !== null && gv.has(o.kind);)
                o = o.prev;
            o !== null && o.kind === r && (o.kind = i, S.remove(t));
        }
}
function wv(n) {
    for (let e of n.units)
        for (let t of e.ops())
            fe(t, s => Av(s, { job: n }), z.None), fe(t, _v, z.None);
}
function We(n) { return n instanceof Kt ? We(n.expr) : n instanceof H ? We(n.lhs) || We(n.rhs) : n instanceof _t ? n.falseCase && We(n.falseCase) ? !0 : We(n.condition) || We(n.trueCase) : n instanceof Ds ? We(n.condition) : n instanceof Ut ? We(n.expr) : n instanceof Ue ? We(n.receiver) : n instanceof Mt ? We(n.receiver) || We(n.index) : n instanceof Tt ? We(n.expr) : n instanceof Me || n instanceof ft || n instanceof bt || n instanceof os || n instanceof is; }
function Ev(n) { let e = new Set; return T(n, t => (t instanceof Ut && e.add(t.xref), t), z.None), e; }
function Sv(n, e, t) {
    return T(n, s => {
        if (s instanceof Ut && e.has(s.xref)) {
            let r = new bn(s.xref);
            return t.job.compatibility === nt.TemplateDefinitionBuilder ? new Ut(r, r.xref) : r;
        }
        return s;
    }, z.None), n;
}
function cs(n, e, t) {
    let s;
    if (We(n)) {
        let r = t.job.allocateXrefId();
        s = [new Ut(n, r), new bn(r)];
    }
    else
        s = [n, n.clone()], Sv(s[1], Ev(s[0]), t);
    return new Hs(s[0], e(s[1]));
}
function xv(n) { return n instanceof qs || n instanceof Us || n instanceof os; }
function yv(n) { return n instanceof Ue || n instanceof Mt || n instanceof Me; }
function sf(n) { return xv(n) || yv(n); }
function Cv(n) {
    if (sf(n) && n.receiver instanceof Hs) {
        let e = n.receiver;
        for (; e.expr instanceof Hs;)
            e = e.expr;
        return e;
    }
    return null;
}
function Av(n, e) {
    if (!sf(n))
        return n;
    let t = Cv(n);
    if (t) {
        if (n instanceof Me)
            return t.expr = t.expr.callFn(n.args), n.receiver;
        if (n instanceof Ue)
            return t.expr = t.expr.prop(n.name), n.receiver;
        if (n instanceof Mt)
            return t.expr = t.expr.key(n.index), n.receiver;
        if (n instanceof os)
            return t.expr = cs(t.expr, s => s.callFn(n.args), e), n.receiver;
        if (n instanceof qs)
            return t.expr = cs(t.expr, s => s.prop(n.name), e), n.receiver;
        if (n instanceof Us)
            return t.expr = cs(t.expr, s => s.key(n.index), e), n.receiver;
    }
    else {
        if (n instanceof os)
            return cs(n.receiver, s => s.callFn(n.args), e);
        if (n instanceof qs)
            return cs(n.receiver, s => s.prop(n.name), e);
        if (n instanceof Us)
            return cs(n.receiver, s => s.key(n.index), e);
    }
    return n;
}
function _v(n) { return n instanceof Hs ? new Tt(new _t(new H(x.Equals, n.guard, Sn), Sn, n.expr)) : n; }
var ku = "\uFFFD", Tv = "#", bv = "*", kv = "/", Iv = ":", Nv = "[", Dv = "]", Pv = "|";
function Lv(n) {
    let e = new Map, t = new Map, s = new Map;
    for (let i of n.units)
        for (let o of i.create)
            switch (o.kind) {
                case u.I18nContext:
                    let a = Bv(n, o);
                    i.create.push(a), e.set(o.xref, a), s.set(o.xref, o);
                    break;
                case u.I18nStart:
                    t.set(o.xref, o);
                    break;
            }
    let r = null;
    for (let i of n.units)
        for (let o of i.create)
            switch (o.kind) {
                case u.IcuStart:
                    r = o, S.remove(o);
                    let a = s.get(o.context);
                    if (a.contextKind !== Vn.Icu)
                        continue;
                    let l = t.get(a.i18nBlock);
                    if (l.context === a.xref)
                        continue;
                    let c = t.get(l.root), p = e.get(c.context);
                    if (p === void 0)
                        throw Error("AssertionError: ICU sub-message should belong to a root message.");
                    let h = e.get(a.xref);
                    h.messagePlaceholder = o.messagePlaceholder, p.subMessages.push(h.xref);
                    break;
                case u.IcuEnd:
                    r = null, S.remove(o);
                    break;
                case u.IcuPlaceholder:
                    if (r === null || r.context == null)
                        throw Error("AssertionError: Unexpected ICU placeholder outside of i18n context");
                    e.get(r.context).postprocessingParams.set(o.name, d(Mv(o))), S.remove(o);
                    break;
            }
}
function Bv(n, e, t) { let s = Iu(e.params), r = Iu(e.postprocessingParams), i = [...e.params.values()].some(o => o.length > 1); return $g(n.allocateXrefId(), e.xref, e.i18nBlock, e.message, null, s, r, i); }
function Mv(n) {
    if (n.strings.length !== n.expressionPlaceholders.length + 1)
        throw Error(`AssertionError: Invalid ICU placeholder with ${n.strings.length} strings and ${n.expressionPlaceholders.length} expressions`);
    let e = n.expressionPlaceholders.map(Ss);
    return n.strings.flatMap((t, s) => [t, e[s] || ""]).join("");
}
function Iu(n) {
    let e = new Map;
    for (let [t, s] of n) {
        let r = Rv(s);
        r !== null && e.set(t, d(r));
    }
    return e;
}
function Rv(n) {
    if (n.length === 0)
        return null;
    let e = n.map(t => Ss(t));
    return e.length === 1 ? e[0] : `${Nv}${e.join(Pv)}${Dv}`;
}
function Ss(n) {
    if (n.flags & ee.ElementTag && n.flags & ee.TemplateTag) {
        if (typeof n.value != "object")
            throw Error("AssertionError: Expected i18n param value to have an element and template slot");
        let r = Ss(ue(E({}, n), { value: n.value.element, flags: n.flags & ~ee.TemplateTag })), i = Ss(ue(E({}, n), { value: n.value.template, flags: n.flags & ~ee.ElementTag }));
        return n.flags & ee.OpenTag && n.flags & ee.CloseTag ? `${i}${r}${i}` : n.flags & ee.CloseTag ? `${r}${i}` : `${i}${r}`;
    }
    if (n.flags & ee.OpenTag && n.flags & ee.CloseTag)
        return `${Ss(ue(E({}, n), { flags: n.flags & ~ee.CloseTag }))}${Ss(ue(E({}, n), { flags: n.flags & ~ee.OpenTag }))}`;
    if (n.flags === ee.None)
        return `${n.value}`;
    let e = "", t = "";
    n.flags & ee.ElementTag ? e = Tv : n.flags & ee.TemplateTag && (e = bv), e !== "" && (t = n.flags & ee.CloseTag ? kv : "");
    let s = n.subTemplateIndex === null ? "" : `${Iv}${n.subTemplateIndex}`;
    return `${ku}${t}${e}${n.value}${s}${ku}`;
}
function Fv(n) {
    for (let e of n.units) {
        let t = new Map;
        for (let r of e.create) {
            if (Js(r)) {
                if (r.handle.slot === null)
                    throw new Error("AssertionError: expected slots to have been allocated before generating advance() calls");
            }
            else
                continue;
            t.set(r.xref, r.handle.slot);
        }
        let s = 0;
        for (let r of e.update) {
            let i = null;
            if (Yr(r) ? i = r : xe(r, a => { i === null && Yr(a) && (i = a); }), i === null)
                continue;
            if (!t.has(i.target))
                throw new Error(`AssertionError: reference to unknown slot for target ${i.target}`);
            let o = t.get(i.target);
            if (s !== o) {
                let a = o - s;
                if (a < 0)
                    throw new Error("AssertionError: slot counter should never need to move backwards");
                S.insertBefore(yg(a, i.sourceSpan), r), s = o;
            }
        }
    }
}
function $v(n) {
    for (let e of n.units)
        for (let t of e.update) {
            if (t.kind !== u.StoreLet)
                continue;
            let s = { kind: Se.Identifier, name: null, identifier: t.declaredName, local: !0 };
            S.replace(t, hn(n.allocateXrefId(), s, new Qr(t.target, t.value, t.sourceSpan), at.None));
        }
}
function Ov(n) {
    let e = n.compatibility === nt.TemplateDefinitionBuilder, t = [], s = 0;
    for (let r of n.units)
        for (let i of r.create)
            i.kind === u.Projection && (t.push(i.selector), i.projectionSlotIndex = s++);
    if (t.length > 0) {
        let r = null;
        if (t.length > 1 || t[0] !== "*") {
            let i = t.map(o => o === "*" ? o : Qo(o));
            r = n.pool.getConstLiteral(Ws(i), e);
        }
        n.contentSelectors = n.pool.getConstLiteral(Ws(t), e), n.root.create.prepend([Bg(r)]);
    }
}
function Vv(n) { or(n.root, null); }
function or(n, e) {
    let t = qv(n, e);
    for (let s of n.create)
        switch (s.kind) {
            case u.ConditionalCreate:
            case u.ConditionalBranchCreate:
            case u.Template:
                or(n.job.views.get(s.xref), t);
                break;
            case u.Projection:
                s.fallbackView !== null && or(n.job.views.get(s.fallbackView), t);
                break;
            case u.RepeaterCreate:
                or(n.job.views.get(s.xref), t), s.emptyView && or(n.job.views.get(s.emptyView), t), s.trackByOps !== null && s.trackByOps.prepend(Di(n, t, !1));
                break;
            case u.Listener:
            case u.TwoWayListener:
                s.handlerOps.prepend(Di(n, t, !0));
                break;
        }
    n.update.prepend(Di(n, t, !1));
}
function qv(n, e) {
    let t = { view: n.xref, viewContextVariable: { kind: Se.Context, name: null, view: n.xref }, contextVariables: new Map, aliases: n.aliases, references: [], letDeclarations: [], parent: e };
    for (let s of n.contextVariables.keys())
        t.contextVariables.set(s, { kind: Se.Identifier, name: null, identifier: s, local: !1 });
    for (let s of n.create)
        switch (s.kind) {
            case u.ElementStart:
            case u.ConditionalCreate:
            case u.ConditionalBranchCreate:
            case u.Template:
                if (!Array.isArray(s.localRefs))
                    throw new Error("AssertionError: expected localRefs to be an array");
                for (let r = 0; r < s.localRefs.length; r++)
                    t.references.push({ name: s.localRefs[r].name, targetId: s.xref, targetSlot: s.handle, offset: r, variable: { kind: Se.Identifier, name: null, identifier: s.localRefs[r].name, local: !1 } });
                break;
            case u.DeclareLet:
                t.letDeclarations.push({ targetId: s.xref, targetSlot: s.handle, variable: { kind: Se.Identifier, name: null, identifier: s.declaredName, local: !1 } });
                break;
        }
    return t;
}
function Di(n, e, t) {
    let s = [];
    e.view !== n.xref && s.push(hn(n.job.allocateXrefId(), e.viewContextVariable, new vo, at.None));
    let r = n.job.views.get(e.view);
    for (let [i, o] of r.contextVariables) {
        let a = new Tn(e.view), l = o === tf ? a : new Ue(a, o);
        s.push(hn(n.job.allocateXrefId(), e.contextVariables.get(i), l, at.None));
    }
    for (let i of r.aliases)
        s.push(hn(n.job.allocateXrefId(), i, i.expression.clone(), at.AlwaysInline));
    for (let i of e.references)
        s.push(hn(n.job.allocateXrefId(), i.variable, new go(i.targetId, i.targetSlot, i.offset), at.None));
    if (e.view !== n.xref || t)
        for (let i of e.letDeclarations)
            s.push(hn(n.job.allocateXrefId(), i.variable, new Zr(i.targetId, i.targetSlot), at.None));
    return e.parent !== null && s.push(...Di(n, e.parent, !1)), s;
}
function Uv(n) {
    for (let e of n.units)
        for (let t of e.ops())
            fe(t, s => s instanceof ei ? d(n.addConst(s.expr)) : s, z.None);
}
var Nu = "style.", Du = "class.", Hv = "style!", Pu = "class!", Lu = "!important";
function Wv(n) {
    for (let e of n.root.update)
        if (e.kind === u.Binding && e.bindingKind === I.Property)
            if (e.name.endsWith(Lu) && (e.name = e.name.substring(0, e.name.length - Lu.length)), e.name.startsWith(Nu)) {
                e.bindingKind = I.StyleProperty, e.name = e.name.substring(Nu.length), jv(e.name) || (e.name = zv(e.name));
                let { property: t, suffix: s } = da(e.name);
                e.name = t, e.unit = s;
            }
            else
                e.name.startsWith(Hv) ? (e.bindingKind = I.StyleProperty, e.name = "style") : e.name.startsWith(Du) ? (e.bindingKind = I.ClassName, e.name = da(e.name.substring(Du.length)).property) : e.name.startsWith(Pu) && (e.bindingKind = I.ClassName, e.name = da(e.name.substring(Pu.length)).property);
}
function jv(n) { return n.startsWith("--"); }
function zv(n) { return n.replace(/[a-z][A-Z]/g, e => e.charAt(0) + "-" + e.charAt(1)).toLowerCase(); }
function da(n) { let e = n.indexOf("!important"); e !== -1 && (n = e > 0 ? n.substring(0, e) : ""); let t = null, s = n, r = n.lastIndexOf("."); return r > 0 && (t = n.slice(r + 1), s = n.substring(0, r)), { property: s, suffix: t }; }
function To(n, e = !1) { return pe(Object.keys(n).map(t => ({ key: t, quoted: e, value: n[t] }))); }
var Cl = class {
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { let t = Object.keys(e.cases).map(r => `${r} {${e.cases[r].visit(this)}}`); return `{${e.expressionPlaceholder}, ${e.type}, ${t.join(" ")}}`; }
    visitTagPlaceholder(e) { return e.isVoid ? this.formatPh(e.startName) : `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitPlaceholder(e) { return this.formatPh(e.name); }
    visitBlockPlaceholder(e) { return `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitIcuPlaceholder(e, t) { return this.formatPh(e.name); }
    formatPh(e) { return `{${fi(e, !1)}}`; }
}, Gv = new Cl;
function rf(n) { return n.visit(Gv); }
var tn = class {
    sourceSpan;
    i18n;
    constructor(e, t) { this.sourceSpan = e, this.i18n = t; }
}, nn = class extends tn {
    value;
    tokens;
    constructor(e, t, s, r) { super(t, r), this.value = e, this.tokens = s; }
    visit(e, t) { return e.visitText(this, t); }
}, gn = class extends tn {
    switchValue;
    type;
    cases;
    switchValueSourceSpan;
    constructor(e, t, s, r, i, o) { super(r, o), this.switchValue = e, this.type = t, this.cases = s, this.switchValueSourceSpan = i; }
    visit(e, t) { return e.visitExpansion(this, t); }
}, ni = class {
    value;
    expression;
    sourceSpan;
    valueSourceSpan;
    expSourceSpan;
    constructor(e, t, s, r, i) { this.value = e, this.expression = t, this.sourceSpan = s, this.valueSourceSpan = r, this.expSourceSpan = i; }
    visit(e, t) { return e.visitExpansionCase(this, t); }
}, vn = class extends tn {
    name;
    value;
    keySpan;
    valueSpan;
    valueTokens;
    constructor(e, t, s, r, i, o, a) { super(s, a), this.name = e, this.value = t, this.keySpan = r, this.valueSpan = i, this.valueTokens = o; }
    visit(e, t) { return e.visitAttribute(this, t); }
}, De = class extends tn {
    name;
    attrs;
    directives;
    children;
    isSelfClosing;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, o, a, l = null, c) { super(o, c), this.name = e, this.attrs = t, this.directives = s, this.children = r, this.isSelfClosing = i, this.startSourceSpan = a, this.endSourceSpan = l; }
    visit(e, t) { return e.visitElement(this, t); }
}, In = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitComment(this, t); }
}, it = class extends tn {
    name;
    parameters;
    children;
    nameSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, o, a = null, l) { super(r, l), this.name = e, this.parameters = t, this.children = s, this.nameSpan = i, this.startSourceSpan = o, this.endSourceSpan = a; }
    visit(e, t) { return e.visitBlock(this, t); }
}, ye = class extends tn {
    componentName;
    tagName;
    fullName;
    attrs;
    directives;
    children;
    isSelfClosing;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, o, a, l, c, p = null, h) { super(l, h), this.componentName = e, this.tagName = t, this.fullName = s, this.attrs = r, this.directives = i, this.children = o, this.isSelfClosing = a, this.startSourceSpan = c, this.endSourceSpan = p; }
    visit(e, t) { return e.visitComponent(this, t); }
}, bo = class {
    name;
    attrs;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i = null) { this.name = e, this.attrs = t, this.sourceSpan = s, this.startSourceSpan = r, this.endSourceSpan = i; }
    visit(e, t) { return e.visitDirective(this, t); }
}, ko = class {
    expression;
    sourceSpan;
    constructor(e, t) { this.expression = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitBlockParameter(this, t); }
}, Io = class {
    name;
    value;
    sourceSpan;
    nameSpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.nameSpan = r, this.valueSpan = i; }
    visit(e, t) { return e.visitLetDeclaration(this, t); }
};
function L(n, e, t = null) { let s = [], r = n.visit ? i => n.visit(i, t) || i.visit(n, t) : i => i.visit(n, t); return e.forEach(i => { let o = r(i); o && s.push(o); }), s; }
var Bu = class {
    constructor() { }
    visitElement(e, t) { this.visitChildren(t, s => { s(e.attrs), s(e.directives), s(e.children); }); }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { return this.visitChildren(t, s => { s(e.cases); }); }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { this.visitChildren(t, s => { s(e.parameters), s(e.children); }); }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this.visitChildren(t, s => { s(e.attrs), s(e.children); }); }
    visitDirective(e, t) { this.visitChildren(t, s => { s(e.attrs); }); }
    visitChildren(e, t) { let s = [], r = this; function i(o) { o && s.push(L(r, o, e)); } return t(i), Array.prototype.concat.apply([], s); }
}, si = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\uD835\uDD04", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\uD835\uDD38", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\uD835\uDC9C", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\uD835\uDD05", Bopf: "\uD835\uDD39", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\uD835\uDC9E", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\uD835\uDD07", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\uD835\uDD3B", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\uD835\uDC9F", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\uD835\uDD08", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\uD835\uDD3C", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\uD835\uDD09", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\uD835\uDD3D", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\uD835\uDD0A", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\uD835\uDD3E", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\uD835\uDCA2", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\uD835\uDD40", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\uD835\uDD0D", Jopf: "\uD835\uDD41", Jscr: "\uD835\uDCA5", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\uD835\uDD0E", Kopf: "\uD835\uDD42", Kscr: "\uD835\uDCA6", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\uD835\uDD0F", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\uD835\uDD43", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\uD835\uDD10", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\uD835\uDD44", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\uD835\uDD11", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\uD835\uDCA9", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\uD835\uDD12", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\uD835\uDD46", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\uD835\uDCAA", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\uD835\uDD13", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\uD835\uDCAB", Psi: "\u03A8", QUOT: "\"", quot: "\"", Qfr: "\uD835\uDD14", Qopf: "\u211A", rationals: "\u211A", Qscr: "\uD835\uDCAC", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\uD835\uDD16", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\uD835\uDD4A", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\uD835\uDCAE", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "\t", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\uD835\uDD17", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\uD835\uDD4B", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\uD835\uDCAF", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\uD835\uDD18", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\uD835\uDD4C", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\uD835\uDCB0", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\uD835\uDD19", Vopf: "\uD835\uDD4D", Vscr: "\uD835\uDCB1", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\uD835\uDD1A", Wopf: "\uD835\uDD4E", Wscr: "\uD835\uDCB2", Xfr: "\uD835\uDD1B", Xi: "\u039E", Xopf: "\uD835\uDD4F", Xscr: "\uD835\uDCB3", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\uD835\uDD1C", Yopf: "\uD835\uDD50", Yscr: "\uD835\uDCB4", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\uD835\uDCB5", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\uD835\uDD1E", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\uD835\uDD52", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\uD835\uDCB6", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\uD835\uDD1F", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\uD835\uDD53", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\uD835\uDCB7", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\uD835\uDD20", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\uD835\uDD54", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\uD835\uDCB8", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\uD835\uDD21", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\uD835\uDD55", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\uD835\uDCB9", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\uD835\uDD22", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\uD835\uDD56", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\uD835\uDD23", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\uD835\uDD57", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\uD835\uDCBB", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\uD835\uDD24", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\uD835\uDD58", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\uD835\uDD25", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\uD835\uDD59", horbar: "\u2015", hscr: "\uD835\uDCBD", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\uD835\uDD26", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\uD835\uDD5A", iota: "\u03B9", iquest: "\xBF", iscr: "\uD835\uDCBE", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\uD835\uDD27", jmath: "\u0237", jopf: "\uD835\uDD5B", jscr: "\uD835\uDCBF", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\uD835\uDD28", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\uD835\uDD5C", kscr: "\uD835\uDCC0", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\uD835\uDD29", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\uD835\uDD5D", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\uD835\uDCC1", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\uD835\uDD2A", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\uD835\uDD5E", mscr: "\uD835\uDCC2", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\uD835\uDD2B", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\uD835\uDD5F", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\uD835\uDCC3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\uD835\uDD2C", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\uD835\uDD60", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\uD835\uDD2D", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\uD835\uDD61", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\uD835\uDCC5", psi: "\u03C8", puncsp: "\u2008", qfr: "\uD835\uDD2E", qopf: "\uD835\uDD62", qprime: "\u2057", qscr: "\uD835\uDCC6", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\uD835\uDD2F", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\uD835\uDD63", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\uD835\uDCC7", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\uD835\uDD30", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\uD835\uDD64", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\uD835\uDCC8", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\uD835\uDD31", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\uD835\uDD65", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\uD835\uDCC9", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\uD835\uDD32", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\uD835\uDD66", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\uD835\uDCCA", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\uD835\uDD33", vopf: "\uD835\uDD67", vscr: "\uD835\uDCCB", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\uD835\uDD34", wopf: "\uD835\uDD68", wscr: "\uD835\uDCCC", xfr: "\uD835\uDD35", xi: "\u03BE", xnis: "\u22FB", xopf: "\uD835\uDD69", xscr: "\uD835\uDCCD", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\uD835\uDD36", yicy: "\u0457", yopf: "\uD835\uDD6A", yscr: "\uD835\uDCCE", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\uD835\uDD37", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\uD835\uDD6B", zscr: "\uD835\uDCCF", zwj: "\u200D", zwnj: "\u200C" }, of = "\uE500";
si.ngsp = of;
var Al = class {
    tokens;
    errors;
    nonNormalizedIcuExpressions;
    constructor(e, t, s) { this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = s; }
};
function Xv(n, e, t, s = {}) { let r = new Tl(new zr(n, e), t, s); return r.tokenize(), new Al(sw(r.tokens), r.errors, r.nonNormalizedIcuExpressions); }
var Yv = /\r\n?/g;
function us(n) { return `Unexpected character "${n === Ae ? "EOF" : String.fromCharCode(n)}"`; }
function Mu(n) { return `Unknown entity "${n}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`; }
function Qv(n, e) { return `Unable to parse entity "${e}" - ${n} character reference entities must end with ";"`; }
var _l = function (n) { return n.HEX = "hexadecimal", n.DEC = "decimal", n; }(_l || {}), Tl = class {
    _getTagDefinition;
    _cursor;
    _tokenizeIcu;
    _interpolationConfig;
    _leadingTriviaCodePoints;
    _currentTokenStart = null;
    _currentTokenType = null;
    _expansionCaseStack = [];
    _openDirectiveCount = 0;
    _inInterpolation = !1;
    _preserveLineEndings;
    _i18nNormalizeLineEndingsInICUs;
    _tokenizeBlocks;
    _tokenizeLet;
    _selectorlessEnabled;
    tokens = [];
    errors = [];
    nonNormalizedIcuExpressions = [];
    constructor(e, t, s) {
        this._getTagDefinition = t, this._tokenizeIcu = s.tokenizeExpansionForms || !1, this._interpolationConfig = s.interpolationConfig || ot, this._leadingTriviaCodePoints = s.leadingTriviaChars && s.leadingTriviaChars.map(i => i.codePointAt(0) || 0);
        let r = s.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
        this._cursor = s.escapedString ? new bl(e, r) : new No(e, r), this._preserveLineEndings = s.preserveLineEndings || !1, this._i18nNormalizeLineEndingsInICUs = s.i18nNormalizeLineEndingsInICUs || !1, this._tokenizeBlocks = s.tokenizeBlocks ?? !0, this._tokenizeLet = s.tokenizeLet ?? !0, this._selectorlessEnabled = s.selectorlessEnabled ?? !1;
        try {
            this._cursor.init();
        }
        catch (i) {
            this.handleError(i);
        }
    }
    _processCarriageReturns(e) {
        return this._preserveLineEndings ? e : e.replace(Yv, `
`);
    }
    tokenize() {
        for (; this._cursor.peek() !== Ae;) {
            let e = this._cursor.clone();
            try {
                this._attemptCharCode(Cs) ? this._attemptCharCode(cl) ? this._attemptCharCode(As) ? this._consumeCdata(e) : this._attemptCharCode(po) ? this._consumeComment(e) : this._consumeDocType(e) : this._attemptCharCode(vt) ? this._consumeTagClose(e) : this._consumeTagOpen(e) : this._tokenizeLet && this._cursor.peek() === er && !this._inInterpolation && this._attemptStr("@let") ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._attemptCharCode(er) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(Fe) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
            }
            catch (t) {
                this.handleError(t);
            }
        }
        this._beginToken(41), this._endToken([]);
    }
    _getBlockName() { let e = !1, t = this._cursor.clone(); return this._attemptCharCodeUntilFn(s => jr(s) ? !e : nw(s) ? (e = !0, !1) : !0), this._cursor.getChars(t).trim(); }
    _consumeBlockStart(e) {
        this._beginToken(24, e);
        let t = this._endToken([this._getBlockName()]);
        if (this._cursor.peek() === yt)
            if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(re), this._attemptCharCode(Pe))
                this._attemptCharCodeUntilFn(re);
            else {
                t.type = 28;
                return;
            }
        this._attemptCharCode(St) ? (this._beginToken(25), this._endToken([])) : t.type = 28;
    }
    _consumeBlockEnd(e) { this._beginToken(26, e), this._endToken([]); }
    _consumeBlockParameters() {
        for (this._attemptCharCodeUntilFn(Fu); this._cursor.peek() !== Pe && this._cursor.peek() !== Ae;) {
            this._beginToken(27);
            let e = this._cursor.clone(), t = null, s = 0;
            for (; this._cursor.peek() !== Xe && this._cursor.peek() !== Ae || t !== null;) {
                let r = this._cursor.peek();
                if (r === _s)
                    this._cursor.advance();
                else if (r === t)
                    t = null;
                else if (t === null && hr(r))
                    t = r;
                else if (r === yt && t === null)
                    s++;
                else if (r === Pe && t === null) {
                    if (s === 0)
                        break;
                    s > 0 && s--;
                }
                this._cursor.advance();
            }
            this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Fu);
        }
    }
    _consumeLetDeclaration(e) {
        if (this._beginToken(29, e), jr(this._cursor.peek()))
            this._attemptCharCodeUntilFn(re);
        else {
            let r = this._endToken([this._cursor.getChars(e)]);
            r.type = 32;
            return;
        }
        let t = this._endToken([this._getLetDeclarationName()]);
        if (this._attemptCharCodeUntilFn(re), !this._attemptCharCode(Te)) {
            t.type = 32;
            return;
        }
        this._attemptCharCodeUntilFn(r => re(r) && !Mc(r)), this._consumeLetDeclarationValue(), this._cursor.peek() === Xe ? (this._beginToken(31), this._endToken([]), this._cursor.advance()) : (t.type = 32, t.sourceSpan = this._cursor.getSpan(e));
    }
    _getLetDeclarationName() { let e = this._cursor.clone(), t = !1; return this._attemptCharCodeUntilFn(s => Os(s) || s === na || s === Pn || t && wt(s) ? (t = !0, !1) : !0), this._cursor.getChars(e).trim(); }
    _consumeLetDeclarationValue() {
        let e = this._cursor.clone();
        for (this._beginToken(30, e); this._cursor.peek() !== Ae;) {
            let t = this._cursor.peek();
            if (t === Xe)
                break;
            hr(t) && (this._cursor.advance(), this._attemptCharCodeUntilFn(s => s === _s ? (this._cursor.advance(), !1) : s === t)), this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]);
    }
    _tokenizeExpansionForm() {
        if (this.isExpansionFormStart())
            return this._consumeExpansionFormStart(), !0;
        if (ew(this._cursor.peek()) && this._isInExpansionForm())
            return this._consumeExpansionCaseStart(), !0;
        if (this._cursor.peek() === Fe) {
            if (this._isInExpansionCase())
                return this._consumeExpansionCaseEnd(), !0;
            if (this._isInExpansionForm())
                return this._consumeExpansionFormEnd(), !0;
        }
        return !1;
    }
    _beginToken(e, t = this._cursor.clone()) { this._currentTokenStart = t, this._currentTokenType = e; }
    _endToken(e, t) {
        if (this._currentTokenStart === null)
            throw new D(this._cursor.getSpan(t), "Programming error - attempted to end a token when there was no start to the token");
        if (this._currentTokenType === null)
            throw new D(this._cursor.getSpan(this._currentTokenStart), "Programming error - attempted to end a token which has no token type");
        let s = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
        return this.tokens.push(s), this._currentTokenStart = null, this._currentTokenType = null, s;
    }
    _createError(e, t) { this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`); let s = new D(t, e); return this._currentTokenStart = null, this._currentTokenType = null, s; }
    handleError(e) {
        if (e instanceof ri && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof D)
            this.errors.push(e);
        else
            throw e;
    }
    _attemptCharCode(e) { return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1; }
    _attemptCharCodeCaseInsensitive(e) { return tw(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1; }
    _requireCharCode(e) {
        let t = this._cursor.clone();
        if (!this._attemptCharCode(e))
            throw this._createError(us(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptStr(e) {
        let t = e.length;
        if (this._cursor.charsLeft() < t)
            return !1;
        let s = this._cursor.clone();
        for (let r = 0; r < t; r++)
            if (!this._attemptCharCode(e.charCodeAt(r)))
                return this._cursor = s, !1;
        return !0;
    }
    _attemptStrCaseInsensitive(e) {
        for (let t = 0; t < e.length; t++)
            if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t)))
                return !1;
        return !0;
    }
    _requireStr(e) {
        let t = this._cursor.clone();
        if (!this._attemptStr(e))
            throw this._createError(us(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptCharCodeUntilFn(e) {
        for (; !e(this._cursor.peek());)
            this._cursor.advance();
    }
    _requireCharCodeUntilFn(e, t) {
        let s = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(e), this._cursor.diff(s) < t)
            throw this._createError(us(this._cursor.peek()), this._cursor.getSpan(s));
    }
    _attemptUntilChar(e) {
        for (; this._cursor.peek() !== e;)
            this._cursor.advance();
    }
    _readChar() { let e = String.fromCodePoint(this._cursor.peek()); return this._cursor.advance(), e; }
    _consumeEntity(e) {
        this._beginToken(9);
        let t = this._cursor.clone();
        if (this._cursor.advance(), this._attemptCharCode(_h)) {
            let s = this._attemptCharCode(Lh) || this._attemptCharCode(_m), r = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(Jv), this._cursor.peek() != Xe) {
                this._cursor.advance();
                let o = s ? _l.HEX : _l.DEC;
                throw this._createError(Qv(o, this._cursor.getChars(t)), this._cursor.getSpan());
            }
            let i = this._cursor.getChars(r);
            this._cursor.advance();
            try {
                let o = parseInt(i, s ? 16 : 10);
                this._endToken([String.fromCharCode(o), this._cursor.getChars(t)]);
            }
            catch {
                throw this._createError(Mu(this._cursor.getChars(t)), this._cursor.getSpan());
            }
        }
        else {
            let s = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(Kv), this._cursor.peek() != Xe)
                this._beginToken(e, t), this._cursor = s, this._endToken(["&"]);
            else {
                let r = this._cursor.getChars(s);
                this._cursor.advance();
                let i = si.hasOwnProperty(r) && si[r];
                if (!i)
                    throw this._createError(Mu(r), this._cursor.getSpan(t));
                this._endToken([i, `&${r};`]);
            }
        }
    }
    _consumeRawText(e, t) {
        this._beginToken(e ? 6 : 7);
        let s = [];
        for (;;) {
            let r = this._cursor.clone(), i = t();
            if (this._cursor = r, i)
                break;
            e && this._cursor.peek() === uo ? (this._endToken([this._processCarriageReturns(s.join(""))]), s.length = 0, this._consumeEntity(6), this._beginToken(6)) : s.push(this._readChar());
        }
        this._endToken([this._processCarriageReturns(s.join(""))]);
    }
    _consumeComment(e) { this._beginToken(10, e), this._requireCharCode(po), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]); }
    _consumeCdata(e) { this._beginToken(12, e), this._requireStr("CDATA["), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]); }
    _consumeDocType(e) { this._beginToken(18, e); let t = this._cursor.clone(); this._attemptUntilChar(rt); let s = this._cursor.getChars(t); this._cursor.advance(), this._endToken([s]); }
    _consumePrefixAndName(e) {
        let t = this._cursor.clone(), s = "";
        for (; this._cursor.peek() !== jt && !Zv(this._cursor.peek());)
            this._cursor.advance();
        let r;
        this._cursor.peek() === jt ? (s = this._cursor.getChars(t), this._cursor.advance(), r = this._cursor.clone()) : r = t, this._requireCharCodeUntilFn(e, s === "" ? 0 : 1);
        let i = this._cursor.getChars(r);
        return [s, i];
    }
    _consumeTagOpen(e) {
        let t, s, r, i;
        try {
            if (this._selectorlessEnabled && Ei(this._cursor.peek()))
                i = this._consumeComponentOpenStart(e), [r, s, t] = i.parts, s && (r += `:${s}`), t && (r += `:${t}`), this._attemptCharCodeUntilFn(re);
            else {
                if (!Os(this._cursor.peek()))
                    throw this._createError(us(this._cursor.peek()), this._cursor.getSpan(e));
                i = this._consumeTagOpenStart(e), s = i.parts[0], t = r = i.parts[1], this._attemptCharCodeUntilFn(re);
            }
            for (; !Ou(this._cursor.peek());)
                if (this._selectorlessEnabled && this._cursor.peek() === er) {
                    let a = this._cursor.clone(), l = a.clone();
                    l.advance(), Ei(l.peek()) && this._consumeDirective(a, l);
                }
                else
                    this._consumeAttribute();
            i.type === 33 ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
        }
        catch (a) {
            if (a instanceof D) {
                i ? i.type = i.type === 33 ? 37 : 4 : (this._beginToken(5, e), this._endToken(["<"]));
                return;
            }
            throw a;
        }
        let o = this._getTagDefinition(t).getContentType(s);
        o === Lt.RAW_TEXT ? this._consumeRawTextWithTagClose(i, r, !1) : o === Lt.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(i, r, !0);
    }
    _consumeRawTextWithTagClose(e, t, s) { this._consumeRawText(s, () => !this._attemptCharCode(Cs) || !this._attemptCharCode(vt) || (this._attemptCharCodeUntilFn(re), !this._attemptStrCaseInsensitive(t)) ? !1 : (this._attemptCharCodeUntilFn(re), this._attemptCharCode(rt))), this._beginToken(e.type === 33 ? 36 : 3), this._requireCharCodeUntilFn(r => r === rt, 3), this._cursor.advance(), this._endToken(e.parts); }
    _consumeTagOpenStart(e) { this._beginToken(0, e); let t = this._consumePrefixAndName(ps); return this._endToken(t); }
    _consumeComponentOpenStart(e) { this._beginToken(33, e); let t = this._consumeComponentName(); return this._endToken(t); }
    _consumeComponentName() {
        let e = this._cursor.clone();
        for (; $u(this._cursor.peek());)
            this._cursor.advance();
        let t = this._cursor.getChars(e), s = "", r = "";
        return this._cursor.peek() === jt && (this._cursor.advance(), [s, r] = this._consumePrefixAndName(ps)), [t, s, r];
    }
    _consumeAttribute() { this._consumeAttributeName(), this._attemptCharCodeUntilFn(re), this._attemptCharCode(Te) && (this._attemptCharCodeUntilFn(re), this._consumeAttributeValue()), this._attemptCharCodeUntilFn(re); }
    _consumeAttributeName() {
        let e = this._cursor.peek();
        if (e === Wr || e === Hr)
            throw this._createError(us(e), this._cursor.getSpan());
        this._beginToken(14);
        let t;
        if (this._openDirectiveCount > 0) {
            let r = 0;
            t = i => {
                if (this._openDirectiveCount > 0) {
                    if (i === yt)
                        r++;
                    else if (i === Pe) {
                        if (r === 0)
                            return !0;
                        r--;
                    }
                }
                return ps(i);
            };
        }
        else
            t = ps;
        let s = this._consumePrefixAndName(t);
        this._endToken(s);
    }
    _consumeAttributeValue() {
        if (this._cursor.peek() === Wr || this._cursor.peek() === Hr) {
            let e = this._cursor.peek();
            this._consumeQuote(e);
            let t = () => this._cursor.peek() === e;
            this._consumeWithInterpolation(16, 17, t, t), this._consumeQuote(e);
        }
        else {
            let e = () => ps(this._cursor.peek());
            this._consumeWithInterpolation(16, 17, e, e);
        }
    }
    _consumeQuote(e) { this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]); }
    _consumeTagOpenEnd() { let e = this._attemptCharCode(vt) ? 2 : 1; this._beginToken(e), this._requireCharCode(rt), this._endToken([]); }
    _consumeComponentOpenEnd() { let e = this._attemptCharCode(vt) ? 35 : 34; this._beginToken(e), this._requireCharCode(rt), this._endToken([]); }
    _consumeTagClose(e) {
        if (this._selectorlessEnabled) {
            let s = e.clone();
            for (; s.peek() !== rt && !Ei(s.peek());)
                s.advance();
            if (Ei(s.peek())) {
                this._beginToken(36, e);
                let r = this._consumeComponentName();
                this._attemptCharCodeUntilFn(re), this._requireCharCode(rt), this._endToken(r);
                return;
            }
        }
        this._beginToken(3, e), this._attemptCharCodeUntilFn(re);
        let t = this._consumePrefixAndName(ps);
        this._attemptCharCodeUntilFn(re), this._requireCharCode(rt), this._endToken(t);
    }
    _consumeExpansionFormStart() {
        this._beginToken(19), this._requireCharCode(St), this._endToken([]), this._expansionCaseStack.push(19), this._beginToken(7);
        let e = this._readUntil(ut), t = this._processCarriageReturns(e);
        if (this._i18nNormalizeLineEndingsInICUs)
            this._endToken([t]);
        else {
            let r = this._endToken([e]);
            t !== e && this.nonNormalizedIcuExpressions.push(r);
        }
        this._requireCharCode(ut), this._attemptCharCodeUntilFn(re), this._beginToken(7);
        let s = this._readUntil(ut);
        this._endToken([s]), this._requireCharCode(ut), this._attemptCharCodeUntilFn(re);
    }
    _consumeExpansionCaseStart() { this._beginToken(20); let e = this._readUntil(St).trim(); this._endToken([e]), this._attemptCharCodeUntilFn(re), this._beginToken(21), this._requireCharCode(St), this._endToken([]), this._attemptCharCodeUntilFn(re), this._expansionCaseStack.push(21); }
    _consumeExpansionCaseEnd() { this._beginToken(22), this._requireCharCode(Fe), this._endToken([]), this._attemptCharCodeUntilFn(re), this._expansionCaseStack.pop(); }
    _consumeExpansionFormEnd() { this._beginToken(23), this._requireCharCode(Fe), this._endToken([]), this._expansionCaseStack.pop(); }
    _consumeWithInterpolation(e, t, s, r) {
        this._beginToken(e);
        let i = [];
        for (; !s();) {
            let o = this._cursor.clone();
            this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], o), i.length = 0, this._consumeInterpolation(t, o, r), this._beginToken(e)) : this._cursor.peek() === uo ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
        }
        this._inInterpolation = !1, this._endToken([this._processCarriageReturns(i.join(""))]);
    }
    _consumeInterpolation(e, t, s) {
        let r = [];
        this._beginToken(e, t), r.push(this._interpolationConfig.start);
        let i = this._cursor.clone(), o = null, a = !1;
        for (; this._cursor.peek() !== Ae && (s === null || !s());) {
            let l = this._cursor.clone();
            if (this._isTagStart()) {
                this._cursor = l, r.push(this._getProcessedChars(i, l)), this._endToken(r);
                return;
            }
            if (o === null)
                if (this._attemptStr(this._interpolationConfig.end)) {
                    r.push(this._getProcessedChars(i, l)), r.push(this._interpolationConfig.end), this._endToken(r);
                    return;
                }
                else
                    this._attemptStr("//") && (a = !0);
            let c = this._cursor.peek();
            this._cursor.advance(), c === _s ? this._cursor.advance() : c === o ? o = null : !a && o === null && hr(c) && (o = c);
        }
        r.push(this._getProcessedChars(i, this._cursor)), this._endToken(r);
    }
    _consumeDirective(e, t) {
        for (this._requireCharCode(er), this._cursor.advance(); $u(this._cursor.peek());)
            this._cursor.advance();
        this._beginToken(38, e);
        let s = this._cursor.getChars(t);
        if (this._endToken([s]), this._attemptCharCodeUntilFn(re), this._cursor.peek() === yt) {
            for (this._openDirectiveCount++, this._beginToken(39), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(re); !Ou(this._cursor.peek()) && this._cursor.peek() !== Pe;)
                this._consumeAttribute();
            if (this._attemptCharCodeUntilFn(re), this._openDirectiveCount--, this._cursor.peek() !== Pe) {
                if (this._cursor.peek() === rt || this._cursor.peek() === vt)
                    return;
                throw this._createError(us(this._cursor.peek()), this._cursor.getSpan(e));
            }
            this._beginToken(40), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(re);
        }
    }
    _getProcessedChars(e, t) { return this._processCarriageReturns(t.getChars(e)); }
    _isTextEnd() { return !!(this._isTagStart() || this._cursor.peek() === Ae || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === Fe && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._cursor.peek() === er || this._cursor.peek() === Fe)); }
    _isTagStart() {
        if (this._cursor.peek() === Cs) {
            let e = this._cursor.clone();
            e.advance();
            let t = e.peek();
            if (ts <= t && t <= di || Dn <= t && t <= Ys || t === vt || t === cl)
                return !0;
        }
        return !1;
    }
    _readUntil(e) { let t = this._cursor.clone(); return this._attemptUntilChar(e), this._cursor.getChars(t); }
    _isInExpansion() { return this._isInExpansionCase() || this._isInExpansionForm(); }
    _isInExpansionCase() { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 21; }
    _isInExpansionForm() { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 19; }
    isExpansionFormStart() {
        if (this._cursor.peek() !== St)
            return !1;
        if (this._interpolationConfig) {
            let e = this._cursor.clone(), t = this._attemptStr(this._interpolationConfig.start);
            return this._cursor = e, !t;
        }
        return !0;
    }
};
function re(n) { return !jr(n) || n === Ae; }
function ps(n) { return jr(n) || n === rt || n === Cs || n === vt || n === Wr || n === Hr || n === Te || n === Ae; }
function Zv(n) { return (n < ts || di < n) && (n < Dn || Ys < n) && (n < Lc || n > bh); }
function Jv(n) { return n === Xe || n === Ae || !Im(n); }
function Kv(n) { return n === Xe || n === Ae || !Os(n); }
function ew(n) { return n !== Fe; }
function tw(n, e) { return Ru(n) === Ru(e); }
function Ru(n) { return n >= ts && n <= di ? n - ts + Dn : n; }
function nw(n) { return Os(n) || wt(n) || n === Pn; }
function Fu(n) { return n !== Xe && re(n); }
function Ei(n) { return n === Pn || n >= Dn && n <= Ys; }
function $u(n) { return Os(n) || wt(n) || n === Pn; }
function Ou(n) { return n === vt || n === rt || n === Cs || n === Ae; }
function sw(n) {
    let e = [], t;
    for (let s = 0; s < n.length; s++) {
        let r = n[s];
        t && t.type === 5 && r.type === 5 || t && t.type === 16 && r.type === 16 ? (t.parts[0] += r.parts[0], t.sourceSpan.end = r.sourceSpan.end) : (t = r, e.push(t));
    }
    return e;
}
var No = class n {
    state;
    file;
    input;
    end;
    constructor(e, t) {
        if (e instanceof n) {
            this.file = e.file, this.input = e.input, this.end = e.end;
            let s = e.state;
            this.state = { peek: s.peek, offset: s.offset, line: s.line, column: s.column };
        }
        else {
            if (!t)
                throw new Error("Programming error: the range argument must be provided with a file argument.");
            this.file = e, this.input = e.content, this.end = t.endPos, this.state = { peek: -1, offset: t.startPos, line: t.startLine, column: t.startCol };
        }
    }
    clone() { return new n(this); }
    peek() { return this.state.peek; }
    charsLeft() { return this.end - this.state.offset; }
    diff(e) { return this.state.offset - e.state.offset; }
    advance() { this.advanceState(this.state); }
    init() { this.updatePeek(this.state); }
    getSpan(e, t) {
        e = e || this;
        let s = e;
        if (t)
            for (; this.diff(e) > 0 && t.indexOf(e.peek()) !== -1;)
                s === e && (e = e.clone()), e.advance();
        let r = this.locationFromCursor(e), i = this.locationFromCursor(this), o = s !== e ? this.locationFromCursor(s) : r;
        return new B(r, i, o);
    }
    getChars(e) { return this.input.substring(e.state.offset, this.state.offset); }
    charAt(e) { return this.input.charCodeAt(e); }
    advanceState(e) {
        if (e.offset >= this.end)
            throw this.state = e, new ri("Unexpected character \"EOF\"", this);
        let t = this.charAt(e.offset);
        t === Wn ? (e.line++, e.column = 0) : Mc(t) || e.column++, e.offset++, this.updatePeek(e);
    }
    updatePeek(e) { e.peek = e.offset >= this.end ? Ae : this.charAt(e.offset); }
    locationFromCursor(e) { return new ns(e.file, e.state.offset, e.state.line, e.state.column); }
}, bl = class n extends No {
    internalState;
    constructor(e, t) { e instanceof n ? (super(e), this.internalState = E({}, e.internalState)) : (super(e, t), this.internalState = this.state); }
    advance() { this.state = this.internalState, super.advance(), this.processEscapeSequence(); }
    init() { super.init(), this.processEscapeSequence(); }
    clone() { return new n(this); }
    getChars(e) {
        let t = e.clone(), s = "";
        for (; t.internalState.offset < this.internalState.offset;)
            s += String.fromCodePoint(t.peek()), t.advance();
        return s;
    }
    processEscapeSequence() {
        let e = () => this.internalState.peek;
        if (e() === _s)
            if (this.internalState = E({}, this.state), this.advanceState(this.internalState), e() === kh)
                this.state.peek = Wn;
            else if (e() === Ih)
                this.state.peek = Pc;
            else if (e() === Ph)
                this.state.peek = yh;
            else if (e() === Nh)
                this.state.peek = Dc;
            else if (e() === bm)
                this.state.peek = Sm;
            else if (e() === Bc)
                this.state.peek = Ch;
            else if (e() === Dh) {
                if (this.advanceState(this.internalState), e() === St) {
                    this.advanceState(this.internalState);
                    let t = this.clone(), s = 0;
                    for (; e() !== Fe;)
                        this.advanceState(this.internalState), s++;
                    this.state.peek = this.decodeHexDigits(t, s);
                }
                else {
                    let t = this.clone();
                    this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 4);
                }
            }
            else if (e() === Lh) {
                this.advanceState(this.internalState);
                let t = this.clone();
                this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 2);
            }
            else if (gu(e())) {
                let t = "", s = 0, r = this.clone();
                for (; gu(e()) && s < 3;)
                    r = this.clone(), t += String.fromCodePoint(e()), this.advanceState(this.internalState), s++;
                this.state.peek = parseInt(t, 8), this.internalState = r.internalState;
            }
            else
                Mc(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
    }
    decodeHexDigits(e, t) {
        let s = this.input.slice(e.internalState.offset, e.internalState.offset + t), r = parseInt(s, 16);
        if (isNaN(r))
            throw e.state = e.internalState, new ri("Invalid hexadecimal escape sequence", e);
        return r;
    }
}, ri = class extends Error {
    msg;
    cursor;
    constructor(e, t) { super(e), this.msg = e, this.cursor = t, Object.setPrototypeOf(this, new.target.prototype); }
}, he = class n extends D {
    elementName;
    static create(e, t, s) { return new n(e, t, s); }
    constructor(e, t, s) { super(t, s), this.elementName = e; }
}, js = class {
    rootNodes;
    errors;
    constructor(e, t) { this.rootNodes = e, this.errors = t; }
}, af = class {
    getTagDefinition;
    constructor(e) { this.getTagDefinition = e; }
    parse(e, t, s) { let r = Xv(e, t, this.getTagDefinition, s), i = new kl(r.tokens, this.getTagDefinition); return i.build(), new js(i.rootNodes, [...r.errors, ...i.errors]); }
}, kl = class n {
    tokens;
    tagDefinitionResolver;
    _index = -1;
    _peek;
    _containerStack = [];
    rootNodes = [];
    errors = [];
    constructor(e, t) { this.tokens = e, this.tagDefinitionResolver = t, this._advance(); }
    build() {
        for (; this._peek.type !== 41;)
            this._peek.type === 0 || this._peek.type === 4 ? this._consumeElementStartTag(this._advance()) : this._peek.type === 3 ? this._consumeElementEndTag(this._advance()) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 19 ? this._consumeExpansion(this._advance()) : this._peek.type === 24 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 26 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 28 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 32 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === 33 || this._peek.type === 37 ? this._consumeComponentStartTag(this._advance()) : this._peek.type === 36 ? this._consumeComponentEndTag(this._advance()) : this._advance();
        for (let e of this._containerStack)
            e instanceof it && this.errors.push(he.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
    }
    _advance() { let e = this._peek; return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e; }
    _advanceIf(e) { return this._peek.type === e ? this._advance() : null; }
    _consumeCdata(e) { this._consumeText(this._advance()), this._advanceIf(13); }
    _consumeComment(e) { let t = this._advanceIf(7), s = this._advanceIf(11), r = t != null ? t.parts[0].trim() : null, i = s == null ? e.sourceSpan : new B(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart); this._addToParent(new In(r, i)); }
    _consumeExpansion(e) {
        let t = this._advance(), s = this._advance(), r = [];
        for (; this._peek.type === 20;) {
            let o = this._parseExpansionCase();
            if (!o)
                return;
            r.push(o);
        }
        if (this._peek.type !== 23) {
            this.errors.push(he.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
            return;
        }
        let i = new B(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
        this._addToParent(new gn(t.parts[0], s.parts[0], r, i, t.sourceSpan)), this._advance();
    }
    _parseExpansionCase() {
        let e = this._advance();
        if (this._peek.type !== 21)
            return this.errors.push(he.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
        let t = this._advance(), s = this._collectExpansionExpTokens(t);
        if (!s)
            return null;
        let r = this._advance();
        s.push({ type: 41, parts: [], sourceSpan: r.sourceSpan });
        let i = new n(s, this.tagDefinitionResolver);
        if (i.build(), i.errors.length > 0)
            return this.errors = this.errors.concat(i.errors), null;
        let o = new B(e.sourceSpan.start, r.sourceSpan.end, e.sourceSpan.fullStart), a = new B(t.sourceSpan.start, r.sourceSpan.end, t.sourceSpan.fullStart);
        return new ni(e.parts[0], i.rootNodes, o, e.sourceSpan, a);
    }
    _collectExpansionExpTokens(e) {
        let t = [], s = [21];
        for (;;) {
            if ((this._peek.type === 19 || this._peek.type === 21) && s.push(this._peek.type), this._peek.type === 22)
                if (Vu(s, 21)) {
                    if (s.pop(), s.length === 0)
                        return t;
                }
                else
                    return this.errors.push(he.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            if (this._peek.type === 23)
                if (Vu(s, 19))
                    s.pop();
                else
                    return this.errors.push(he.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            if (this._peek.type === 41)
                return this.errors.push(he.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            t.push(this._advance());
        }
    }
    _consumeText(e) {
        let t = [e], s = e.sourceSpan, r = e.parts[0];
        if (r.length > 0 && r[0] === `
`) {
            let i = this._getContainer();
            i != null && i.children.length === 0 && this._getTagDefinition(i)?.ignoreFirstLf && (r = r.substring(1), t[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [r] });
        }
        for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9;)
            e = this._advance(), t.push(e), e.type === 8 ? r += e.parts.join("").replace(/&([^;]+);/g, qu) : e.type === 9 ? r += e.parts[0] : r += e.parts.join("");
        if (r.length > 0) {
            let i = e.sourceSpan;
            this._addToParent(new nn(r, new B(s.start, i.end, s.fullStart, s.details), t));
        }
    }
    _closeVoidElement() { let e = this._getContainer(); e !== null && this._getTagDefinition(e)?.isVoid && this._containerStack.pop(); }
    _consumeElementStartTag(e) {
        let t = [], s = [];
        this._consumeAttributesAndDirectives(t, s);
        let r = this._getElementFullName(e, this._getClosestElementLikeParent()), i = !1;
        if (this._peek.type === 2) {
            this._advance(), i = !0;
            let m = this._getTagDefinition(r);
            m?.canSelfClose || Xa(r) !== null || m?.isVoid || this.errors.push(he.create(r, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
        }
        else
            this._peek.type === 1 && (this._advance(), i = !1);
        let o = this._peek.sourceSpan.fullStart, a = new B(e.sourceSpan.start, o, e.sourceSpan.fullStart), l = new B(e.sourceSpan.start, o, e.sourceSpan.fullStart), c = new De(r, t, s, [], i, a, l, void 0), p = this._getContainer(), h = p !== null && !!this._getTagDefinition(p)?.isClosedByChild(c.name);
        this._pushContainer(c, h), i ? this._popContainer(r, De, a) : e.type === 4 && (this._popContainer(r, De, null), this.errors.push(he.create(r, a, `Opening tag "${r}" not terminated.`)));
    }
    _consumeComponentStartTag(e) { let t = e.parts[0], s = [], r = []; this._consumeAttributesAndDirectives(s, r); let i = this._getClosestElementLikeParent(), o = this._getComponentTagName(e, i), a = this._getComponentFullName(e, i), l = this._peek.type === 35; this._advance(); let c = this._peek.sourceSpan.fullStart, p = new B(e.sourceSpan.start, c, e.sourceSpan.fullStart), h = new B(e.sourceSpan.start, c, e.sourceSpan.fullStart), m = new ye(t, o, a, s, r, [], l, p, h, void 0), v = this._getContainer(), w = v !== null && m.tagName !== null && !!this._getTagDefinition(v)?.isClosedByChild(m.tagName); this._pushContainer(m, w), l ? this._popContainer(a, ye, p) : e.type === 37 && (this._popContainer(a, ye, null), this.errors.push(he.create(a, p, `Opening tag "${a}" not terminated.`))); }
    _consumeAttributesAndDirectives(e, t) {
        for (; this._peek.type === 14 || this._peek.type === 38;)
            this._peek.type === 38 ? t.push(this._consumeDirective(this._peek)) : e.push(this._consumeAttr(this._advance()));
    }
    _consumeComponentEndTag(e) {
        let t = this._getComponentFullName(e, this._getClosestElementLikeParent());
        if (!this._popContainer(t, ye, e.sourceSpan)) {
            let s = this._containerStack[this._containerStack.length - 1], r;
            s instanceof ye && s.componentName === e.parts[0] ? r = `, did you mean "${s.fullName}"?` : r = ". It may happen when the tag has already been closed by another tag.";
            let i = `Unexpected closing tag "${t}"${r}`;
            this.errors.push(he.create(t, e.sourceSpan, i));
        }
    }
    _getTagDefinition(e) { return typeof e == "string" ? this.tagDefinitionResolver(e) : e instanceof De ? this.tagDefinitionResolver(e.name) : e instanceof ye && e.tagName !== null ? this.tagDefinitionResolver(e.tagName) : null; }
    _pushContainer(e, t) { t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e); }
    _consumeElementEndTag(e) {
        let t = this._getElementFullName(e, this._getClosestElementLikeParent());
        if (this._getTagDefinition(t)?.isVoid)
            this.errors.push(he.create(t, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
        else if (!this._popContainer(t, De, e.sourceSpan)) {
            let s = `Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
            this.errors.push(he.create(t, e.sourceSpan, s));
        }
    }
    _popContainer(e, t, s) {
        let r = !1;
        for (let i = this._containerStack.length - 1; i >= 0; i--) {
            let o = this._containerStack[i];
            if (((o instanceof ye ? o.fullName : o.name) === e || e === null) && o instanceof t)
                return o.endSourceSpan = s, o.sourceSpan.end = s !== null ? s.end : o.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !r;
            (o instanceof it || !this._getTagDefinition(o)?.closedByParent) && (r = !0);
        }
        return !1;
    }
    _consumeAttr(e) {
        let t = Ni(e.parts[0], e.parts[1]), s = e.sourceSpan.end;
        this._peek.type === 15 && this._advance();
        let r = "", i = [], o, a;
        if (this._peek.type === 16)
            for (o = this._peek.sourceSpan, a = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9;) {
                let p = this._advance();
                i.push(p), p.type === 17 ? r += p.parts.join("").replace(/&([^;]+);/g, qu) : p.type === 9 ? r += p.parts[0] : r += p.parts.join(""), a = s = p.sourceSpan.end;
            }
        this._peek.type === 15 && (s = this._advance().sourceSpan.end);
        let c = o && a && new B(o.start, a, o.fullStart);
        return new vn(t, r, new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), e.sourceSpan, c, i.length > 0 ? i : void 0, void 0);
    }
    _consumeDirective(e) {
        let t = [], s = e.sourceSpan.end, r = null;
        if (this._advance(), this._peek.type === 39) {
            for (s = this._peek.sourceSpan.end, this._advance(); this._peek.type === 14;)
                t.push(this._consumeAttr(this._advance()));
            this._peek.type === 40 ? (r = this._peek.sourceSpan, this._advance()) : this.errors.push(he.create(null, e.sourceSpan, "Unterminated directive definition"));
        }
        let i = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), o = new B(i.start, r === null ? e.sourceSpan.end : r.end, i.fullStart);
        return new bo(e.parts[0], t, o, i, r);
    }
    _consumeBlockOpen(e) {
        let t = [];
        for (; this._peek.type === 27;) {
            let a = this._advance();
            t.push(new ko(a.parts[0], a.sourceSpan));
        }
        this._peek.type === 25 && this._advance();
        let s = this._peek.sourceSpan.fullStart, r = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), i = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), o = new it(e.parts[0], t, [], r, e.sourceSpan, i);
        this._pushContainer(o, !1);
    }
    _consumeBlockClose(e) { this._popContainer(null, it, e.sourceSpan) || this.errors.push(he.create(null, e.sourceSpan, "Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the \"&#125;\" HTML entity instead.")); }
    _consumeIncompleteBlock(e) {
        let t = [];
        for (; this._peek.type === 27;) {
            let a = this._advance();
            t.push(new ko(a.parts[0], a.sourceSpan));
        }
        let s = this._peek.sourceSpan.fullStart, r = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), i = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), o = new it(e.parts[0], t, [], r, e.sourceSpan, i);
        this._pushContainer(o, !1), this._popContainer(null, it, null), this.errors.push(he.create(e.parts[0], r, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
    }
    _consumeLet(e) {
        let t = e.parts[0], s, r;
        if (this._peek.type !== 30) {
            this.errors.push(he.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${t}". Declaration must have a value.`));
            return;
        }
        else
            s = this._advance();
        if (this._peek.type !== 31) {
            this.errors.push(he.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${t}". Declaration must be terminated with a semicolon.`));
            return;
        }
        else
            r = this._advance();
        let i = r.sourceSpan.fullStart, o = new B(e.sourceSpan.start, i, e.sourceSpan.fullStart), a = e.sourceSpan.toString().lastIndexOf(t), l = e.sourceSpan.start.moveBy(a), c = new B(l, e.sourceSpan.end), p = new Io(t, s.parts[0], o, c, s.sourceSpan);
        this._addToParent(p);
    }
    _consumeIncompleteLet(e) {
        let t = e.parts[0] ?? "", s = t ? ` "${t}"` : "";
        if (t.length > 0) {
            let r = e.sourceSpan.toString().lastIndexOf(t), i = e.sourceSpan.start.moveBy(r), o = new B(i, e.sourceSpan.end), a = new B(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), l = new Io(t, "", e.sourceSpan, o, a);
            this._addToParent(l);
        }
        this.errors.push(he.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${s}. @let declarations must be written as \`@let <name> = <value>;\``));
    }
    _getContainer() { return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null; }
    _getClosestElementLikeParent() {
        for (let e = this._containerStack.length - 1; e > -1; e--) {
            let t = this._containerStack[e];
            if (t instanceof De || t instanceof ye)
                return t;
        }
        return null;
    }
    _addToParent(e) { let t = this._getContainer(); t === null ? this.rootNodes.push(e) : t.children.push(e); }
    _getElementFullName(e, t) { let s = this._getPrefix(e, t); return Ni(s, e.parts[1]); }
    _getComponentFullName(e, t) { let s = e.parts[0], r = this._getComponentTagName(e, t); return r === null ? s : r.startsWith(":") ? s + r : `${s}:${r}`; }
    _getComponentTagName(e, t) { let s = this._getPrefix(e, t), r = e.parts[2]; return !s && !r ? null : !s && r ? r : Ni(s, r || "ng-component"); }
    _getPrefix(e, t) {
        let s, r;
        if (e.type === 33 || e.type === 37 || e.type === 36 ? (s = e.parts[1], r = e.parts[2]) : (s = e.parts[0], r = e.parts[1]), s = s || this._getTagDefinition(r)?.implicitNamespacePrefix || "", !s && t) {
            let i = t instanceof De ? t.name : t.tagName;
            if (i !== null) {
                let o = kt(i)[1], a = this._getTagDefinition(o);
                a !== null && !a.preventNamespaceInheritance && (s = Xa(i));
            }
        }
        return s;
    }
};
function Vu(n, e) { return n.length > 0 && n[n.length - 1] === e; }
function qu(n, e) { return si[e] !== void 0 ? si[e] || n : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : n; }
var lf = "ngPreserveWhitespaces", Uu = new Set(["pre", "template", "textarea", "script", "style"]), cf = ` \f
\r	\v\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`, rw = new RegExp(`[^${cf}]`), iw = new RegExp(`[${cf}]{2,}`, "g");
function Hu(n) { return n.some(e => e.name === lf); }
function uf(n) { return n.replace(new RegExp(of, "g"), " "); }
var ii = class {
    preserveSignificantWhitespace;
    originalNodeMap;
    requireContext;
    icuExpansionDepth = 0;
    constructor(e, t, s = !0) { this.preserveSignificantWhitespace = e, this.originalNodeMap = t, this.requireContext = s; }
    visitElement(e, t) {
        if (Uu.has(e.name) || Hu(e.attrs)) {
            let r = new De(e.name, gt(this, e.attrs), gt(this, e.directives), e.children, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
            return this.originalNodeMap?.set(r, e), r;
        }
        let s = new De(e.name, e.attrs, e.directives, gt(this, e.children), e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
        return this.originalNodeMap?.set(s, e), s;
    }
    visitAttribute(e, t) { return e.name !== lf ? e : null; }
    visitText(e, t) {
        let s = e.value.match(rw), r = t && (t.prev instanceof gn || t.next instanceof gn);
        if (this.icuExpansionDepth > 0 && this.preserveSignificantWhitespace)
            return e;
        if (s || r) {
            let o = e.tokens.map(p => p.type === 5 ? cw(p) : p);
            if (!this.preserveSignificantWhitespace && o.length > 0) {
                let p = o[0];
                o.splice(0, 1, ow(p, t));
                let h = o[o.length - 1];
                o.splice(o.length - 1, 1, aw(h, t));
            }
            let a = hf(e.value), l = this.preserveSignificantWhitespace ? a : lw(a, t), c = new nn(l, e.sourceSpan, o, e.i18n);
            return this.originalNodeMap?.set(c, e), c;
        }
        return null;
    }
    visitComment(e, t) { return e; }
    visitExpansion(e, t) {
        this.icuExpansionDepth++;
        let s;
        try {
            s = new gn(e.switchValue, e.type, gt(this, e.cases), e.sourceSpan, e.switchValueSourceSpan, e.i18n);
        }
        finally {
            this.icuExpansionDepth--;
        }
        return this.originalNodeMap?.set(s, e), s;
    }
    visitExpansionCase(e, t) { let s = new ni(e.value, gt(this, e.expression), e.sourceSpan, e.valueSourceSpan, e.expSourceSpan); return this.originalNodeMap?.set(s, e), s; }
    visitBlock(e, t) { let s = new it(e.name, e.parameters, gt(this, e.children), e.sourceSpan, e.nameSpan, e.startSourceSpan, e.endSourceSpan); return this.originalNodeMap?.set(s, e), s; }
    visitBlockParameter(e, t) { return e; }
    visitLetDeclaration(e, t) { return e; }
    visitComponent(e, t) {
        if (e.tagName && Uu.has(e.tagName) || Hu(e.attrs)) {
            let r = new ye(e.componentName, e.tagName, e.fullName, gt(this, e.attrs), gt(this, e.directives), e.children, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
            return this.originalNodeMap?.set(r, e), r;
        }
        let s = new ye(e.componentName, e.tagName, e.fullName, e.attrs, e.directives, gt(this, e.children), e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
        return this.originalNodeMap?.set(s, e), s;
    }
    visitDirective(e, t) { return e; }
    visit(e, t) {
        if (this.requireContext && !t)
            throw new Error("WhitespaceVisitor requires context. Visit via `visitAllWithSiblings` to get this context.");
        return !1;
    }
};
function ow(n, e) { return n.type !== 5 || !!e?.prev ? n : pf(n, s => s.trimStart()); }
function aw(n, e) { return n.type !== 5 || !!e?.next ? n : pf(n, s => s.trimEnd()); }
function lw(n, e) { let t = !e?.prev, s = !e?.next, r = t ? n.trimStart() : n; return s ? r.trimEnd() : r; }
function cw({ type: n, parts: e, sourceSpan: t }) { return { type: n, parts: [hf(e[0])], sourceSpan: t }; }
function pf({ type: n, parts: e, sourceSpan: t }, s) { return { type: n, parts: [s(e[0])], sourceSpan: t }; }
function hf(n) { return uf(n).replace(iw, " "); }
function gt(n, e) { let t = []; return e.forEach((s, r) => { let i = { prev: e[r - 1], next: e[r + 1] }, o = s.visit(n, i); o && t.push(o); }), t; }
var $ = function (n) { return n[n.Character = 0] = "Character", n[n.Identifier = 1] = "Identifier", n[n.PrivateIdentifier = 2] = "PrivateIdentifier", n[n.Keyword = 3] = "Keyword", n[n.String = 4] = "String", n[n.Operator = 5] = "Operator", n[n.Number = 6] = "Number", n[n.Error = 7] = "Error", n; }($ || {}), jn = function (n) { return n[n.Plain = 0] = "Plain", n[n.TemplateLiteralPart = 1] = "TemplateLiteralPart", n[n.TemplateLiteralEnd = 2] = "TemplateLiteralEnd", n; }(jn || {}), uw = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this", "typeof", "void", "in"], oi = class {
    tokenize(e) { return new Il(e).scan(); }
}, Nt = class {
    index;
    end;
    type;
    numValue;
    strValue;
    constructor(e, t, s, r, i) { this.index = e, this.end = t, this.type = s, this.numValue = r, this.strValue = i; }
    isCharacter(e) { return this.type === $.Character && this.numValue === e; }
    isNumber() { return this.type === $.Number; }
    isString() { return this.type === $.String; }
    isOperator(e) { return this.type === $.Operator && this.strValue === e; }
    isIdentifier() { return this.type === $.Identifier; }
    isPrivateIdentifier() { return this.type === $.PrivateIdentifier; }
    isKeyword() { return this.type === $.Keyword; }
    isKeywordLet() { return this.type === $.Keyword && this.strValue === "let"; }
    isKeywordAs() { return this.type === $.Keyword && this.strValue === "as"; }
    isKeywordNull() { return this.type === $.Keyword && this.strValue === "null"; }
    isKeywordUndefined() { return this.type === $.Keyword && this.strValue === "undefined"; }
    isKeywordTrue() { return this.type === $.Keyword && this.strValue === "true"; }
    isKeywordFalse() { return this.type === $.Keyword && this.strValue === "false"; }
    isKeywordThis() { return this.type === $.Keyword && this.strValue === "this"; }
    isKeywordTypeof() { return this.type === $.Keyword && this.strValue === "typeof"; }
    isKeywordVoid() { return this.type === $.Keyword && this.strValue === "void"; }
    isKeywordIn() { return this.type === $.Keyword && this.strValue === "in"; }
    isError() { return this.type === $.Error; }
    toNumber() { return this.type === $.Number ? this.numValue : -1; }
    isTemplateLiteralPart() { return this.isString() && this.kind === jn.TemplateLiteralPart; }
    isTemplateLiteralEnd() { return this.isString() && this.kind === jn.TemplateLiteralEnd; }
    isTemplateLiteralInterpolationStart() { return this.isOperator("${"); }
    isTemplateLiteralInterpolationEnd() { return this.isOperator("}"); }
    toString() {
        switch (this.type) {
            case $.Character:
            case $.Identifier:
            case $.Keyword:
            case $.Operator:
            case $.PrivateIdentifier:
            case $.String:
            case $.Error: return this.strValue;
            case $.Number: return this.numValue.toString();
            default: return null;
        }
    }
}, dr = class extends Nt {
    kind;
    constructor(e, t, s, r) { super(e, t, $.String, 0, s), this.kind = r; }
};
function Si(n, e, t) { return new Nt(n, e, $.Character, t, String.fromCharCode(t)); }
function pw(n, e, t) { return new Nt(n, e, $.Identifier, 0, t); }
function hw(n, e, t) { return new Nt(n, e, $.PrivateIdentifier, 0, t); }
function fw(n, e, t) { return new Nt(n, e, $.Keyword, 0, t); }
function hs(n, e, t) { return new Nt(n, e, $.Operator, 0, t); }
function dw(n, e, t) { return new Nt(n, e, $.Number, t, ""); }
function mw(n, e, t) { return new Nt(n, e, $.Error, 0, t); }
var xi = new Nt(-1, -1, $.Character, 0, ""), Il = class {
    input;
    tokens = [];
    length;
    peek = 0;
    index = -1;
    braceStack = [];
    constructor(e) { this.input = e, this.length = e.length, this.advance(); }
    scan() {
        let e = this.scanToken();
        for (; e !== null;)
            this.tokens.push(e), e = this.scanToken();
        return this.tokens;
    }
    advance() { this.peek = ++this.index >= this.length ? Ae : this.input.charCodeAt(this.index); }
    scanToken() {
        let e = this.input, t = this.length, s = this.peek, r = this.index;
        for (; s <= Ah;)
            if (++r >= t) {
                s = Ae;
                break;
            }
            else
                s = e.charCodeAt(r);
        if (this.peek = s, this.index = r, r >= t)
            return null;
        if (Wu(s))
            return this.scanIdentifier();
        if (wt(s))
            return this.scanNumber(r);
        let i = r;
        switch (s) {
            case ir: return this.advance(), wt(this.peek) ? this.scanNumber(i) : Si(i, this.index, ir);
            case yt:
            case Pe:
            case As:
            case ws:
            case ut:
            case jt:
            case Xe: return this.scanCharacter(i, s);
            case St: return this.scanOpenBrace(i, s);
            case Fe: return this.scanCloseBrace(i, s);
            case Wr:
            case Hr: return this.scanString();
            case ul: return this.advance(), this.scanTemplateLiteralPart(i);
            case _h: return this.scanPrivateIdentifier();
            case Th: return this.scanComplexOperator(i, "+", Te, "=");
            case po: return this.scanComplexOperator(i, "-", Te, "=");
            case vt: return this.scanComplexOperator(i, "/", Te, "=");
            case xm: return this.scanComplexOperator(i, "%", Te, "=");
            case Tm: return this.scanOperator(i, "^");
            case fu: return this.scanStar(i);
            case du: return this.scanQuestion(i);
            case Cs:
            case rt: return this.scanComplexOperator(i, String.fromCharCode(s), Te, "=");
            case cl:
            case Te: return this.scanComplexOperator(i, String.fromCharCode(s), Te, "=", Te, "=");
            case uo: return this.scanComplexOperator(i, "&", uo, "&", Te, "=");
            case mu: return this.scanComplexOperator(i, "|", mu, "|", Te, "=");
            case Bh:
                for (; jr(this.peek);)
                    this.advance();
                return this.scanToken();
        }
        return this.advance(), this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0);
    }
    scanCharacter(e, t) { return this.advance(), Si(e, this.index, t); }
    scanOperator(e, t) { return this.advance(), hs(e, this.index, t); }
    scanOpenBrace(e, t) { return this.braceStack.push("expression"), this.advance(), Si(e, this.index, t); }
    scanCloseBrace(e, t) { return this.advance(), this.braceStack.pop() === "interpolation" ? (this.tokens.push(hs(e, this.index, "}")), this.scanTemplateLiteralPart(this.index)) : Si(e, this.index, t); }
    scanComplexOperator(e, t, s, r, i, o) { this.advance(); let a = t; return this.peek == s && (this.advance(), a += r), i != null && this.peek == i && (this.advance(), a += o), hs(e, this.index, a); }
    scanIdentifier() {
        let e = this.index;
        for (this.advance(); ju(this.peek);)
            this.advance();
        let t = this.input.substring(e, this.index);
        return uw.indexOf(t) > -1 ? fw(e, this.index, t) : pw(e, this.index, t);
    }
    scanPrivateIdentifier() {
        let e = this.index;
        if (this.advance(), !Wu(this.peek))
            return this.error("Invalid character [#]", -1);
        for (; ju(this.peek);)
            this.advance();
        let t = this.input.substring(e, this.index);
        return hw(e, this.index, t);
    }
    scanNumber(e) {
        let t = this.index === e, s = !1;
        for (this.advance();;) {
            if (!wt(this.peek))
                if (this.peek === Pn) {
                    if (!wt(this.input.charCodeAt(this.index - 1)) || !wt(this.input.charCodeAt(this.index + 1)))
                        return this.error("Invalid numeric separator", 0);
                    s = !0;
                }
                else if (this.peek === ir)
                    t = !1;
                else if (gw(this.peek)) {
                    if (this.advance(), vw(this.peek) && this.advance(), !wt(this.peek))
                        return this.error("Invalid exponent", -1);
                    t = !1;
                }
                else
                    break;
            this.advance();
        }
        let r = this.input.substring(e, this.index);
        s && (r = r.replace(/_/g, ""));
        let i = t ? Ew(r) : parseFloat(r);
        return dw(e, this.index, i);
    }
    scanString() {
        let e = this.index, t = this.peek;
        this.advance();
        let s = "", r = this.index, i = this.input;
        for (; this.peek != t;)
            if (this.peek == _s) {
                let a = this.scanStringBackslash(s, r);
                if (typeof a != "string")
                    return a;
                s = a, r = this.index;
            }
            else {
                if (this.peek == Ae)
                    return this.error("Unterminated quote", 0);
                this.advance();
            }
        let o = i.substring(r, this.index);
        return this.advance(), new dr(e, this.index, s + o, jn.Plain);
    }
    scanQuestion(e) { this.advance(); let t = "?"; return this.peek === du ? (t += "?", this.advance(), this.peek === Te && (t += "=", this.advance())) : this.peek === ir && (t += ".", this.advance()), hs(e, this.index, t); }
    scanTemplateLiteralPart(e) {
        let t = "", s = this.index;
        for (; this.peek !== ul;)
            if (this.peek === _s) {
                let i = this.scanStringBackslash(t, s);
                if (typeof i != "string")
                    return i;
                t = i, s = this.index;
            }
            else if (this.peek === na) {
                let i = this.index;
                if (this.advance(), this.peek === St)
                    return this.braceStack.push("interpolation"), this.tokens.push(new dr(e, i, t + this.input.substring(s, i), jn.TemplateLiteralPart)), this.advance(), hs(i, this.index, this.input.substring(i, this.index));
            }
            else {
                if (this.peek === Ae)
                    return this.error("Unterminated template literal", 0);
                this.advance();
            }
        let r = this.input.substring(s, this.index);
        return this.advance(), new dr(e, this.index, t + r, jn.TemplateLiteralEnd);
    }
    error(e, t) { let s = this.index + t; return mw(s, this.index, `Lexer Error: ${e} at column ${s} in expression [${this.input}]`); }
    scanStringBackslash(e, t) {
        e += this.input.substring(t, this.index);
        let s;
        if (this.advance(), this.peek === Dh) {
            let r = this.input.substring(this.index + 1, this.index + 5);
            if (/^[0-9a-f]+$/i.test(r))
                s = parseInt(r, 16);
            else
                return this.error(`Invalid unicode escape [\\u${r}]`, 0);
            for (let i = 0; i < 5; i++)
                this.advance();
        }
        else
            s = ww(this.peek), this.advance();
        return e += String.fromCharCode(s), e;
    }
    scanStar(e) { this.advance(); let t = "*"; return this.peek === fu ? (t += "*", this.advance(), this.peek === Te && (t += "=", this.advance())) : this.peek === Te && (t += "=", this.advance()), hs(e, this.index, t); }
};
function Wu(n) { return ts <= n && n <= di || Dn <= n && n <= Ys || n == Pn || n == na; }
function ju(n) { return Os(n) || wt(n) || n == Pn || n == na; }
function gw(n) { return n == km || n == Cm; }
function vw(n) { return n == po || n == Th; }
function ww(n) {
    switch (n) {
        case kh: return Wn;
        case Bc: return Ch;
        case Ih: return Pc;
        case Nh: return Dc;
        case Ph: return yh;
        default: return n;
    }
}
function Ew(n) {
    let e = parseInt(n);
    if (isNaN(e))
        throw new Error("Invalid integer literal when parsing " + n);
    return e;
}
var Nl = class {
    strings;
    expressions;
    offsets;
    constructor(e, t, s) { this.strings = e, this.expressions = t, this.offsets = s; }
}, Dl = class {
    templateBindings;
    warnings;
    errors;
    constructor(e, t, s) { this.templateBindings = e, this.warnings = t, this.errors = s; }
};
function un(n) { return n.start.toString() || "(unknown)"; }
var Do = class {
    _lexer;
    _supportsDirectPipeReferences;
    constructor(e, t = !1) { this._lexer = e, this._supportsDirectPipeReferences = t; }
    parseAction(e, t, s, r = ot) { let i = []; this._checkNoInterpolation(i, e, t, r); let o = this._stripComments(e), a = this._lexer.tokenize(o), l = new Fn(e, t, s, a, 1, i, 0, this._supportsDirectPipeReferences).parseChain(); return new Ge(l, e, un(t), s, i); }
    parseBinding(e, t, s, r = ot) { let i = [], o = this._parseBindingAst(e, t, s, r, i); return new Ge(o, e, un(t), s, i); }
    checkSimpleExpression(e) { let t = new Pl; return e.visit(t), t.errors; }
    parseSimpleBinding(e, t, s, r = ot) { let i = [], o = this._parseBindingAst(e, t, s, r, i), a = this.checkSimpleExpression(o); return a.length > 0 && i.push(mr(`Host binding expression cannot contain ${a.join(" ")}`, e, "", t)), new Ge(o, e, un(t), s, i); }
    _parseBindingAst(e, t, s, r, i) { this._checkNoInterpolation(i, e, t, r); let o = this._stripComments(e), a = this._lexer.tokenize(o); return new Fn(e, t, s, a, 0, i, 0, this._supportsDirectPipeReferences).parseChain(); }
    parseTemplateBindings(e, t, s, r, i) { let o = this._lexer.tokenize(t), a = []; return new Fn(t, s, i, o, 0, a, 0, this._supportsDirectPipeReferences).parseTemplateBindings({ source: e, span: new Qe(r, r + e.length) }); }
    parseInterpolation(e, t, s, r, i = ot) {
        let o = [], { strings: a, expressions: l, offsets: c } = this.splitInterpolation(e, t, o, r, i);
        if (l.length === 0)
            return null;
        let p = [];
        for (let h = 0; h < l.length; ++h) {
            let m = r?.[h * 2 + 1]?.sourceSpan, v = l[h].text, w = this._stripComments(v), C = this._lexer.tokenize(w), b = new Fn(m ? v : e, m || t, s, C, 0, o, c[h], this._supportsDirectPipeReferences).parseChain();
            p.push(b);
        }
        return this.createInterpolationAst(a.map(h => h.text), p, e, un(t), s, o);
    }
    parseInterpolationExpression(e, t, s) { let r = this._stripComments(e), i = this._lexer.tokenize(r), o = [], a = new Fn(e, t, s, i, 0, o, 0, this._supportsDirectPipeReferences).parseChain(), l = ["", ""]; return this.createInterpolationAst(l, [a], e, un(t), s, o); }
    createInterpolationAst(e, t, s, r, i, o) { let a = new Jn(0, s.length), l = new hi(a, a.toAbsolute(i), e, t); return new Ge(l, s, r, i, o); }
    splitInterpolation(e, t, s, r, i = ot) {
        let o = [], a = [], l = [], c = r ? Sw(r) : null, p = 0, h = !1, m = !1, { start: v, end: w } = i;
        for (; p < e.length;)
            if (h) {
                let C = p, b = C + v.length, _ = this._getInterpolationEndIndex(e, w, b);
                if (_ === -1) {
                    h = !1, m = !0;
                    break;
                }
                let P = _ + w.length, K = e.substring(b, _);
                K.trim().length === 0 && s.push(mr("Blank expressions are not allowed in interpolated strings", e, `at column ${p} in`, t)), a.push({ text: K, start: C, end: P });
                let de = (c?.get(C) ?? C) + v.length;
                l.push(de), p = P, h = !1;
            }
            else {
                let C = p;
                p = e.indexOf(v, p), p === -1 && (p = e.length);
                let b = e.substring(C, p);
                o.push({ text: b, start: C, end: p }), h = !0;
            }
        if (!h)
            if (m) {
                let C = o[o.length - 1];
                C.text += e.substring(p), C.end = e.length;
            }
            else
                o.push({ text: e.substring(p), start: p, end: e.length });
        return new Nl(o, a, l);
    }
    wrapLiteralPrimitive(e, t, s) { let r = new Jn(0, e == null ? 0 : e.length); return new Ge(new ze(r, r.toAbsolute(s), e), e, typeof t == "string" ? t : un(t), s, []); }
    _stripComments(e) { let t = this._commentStart(e); return t != null ? e.substring(0, t) : e; }
    _commentStart(e) {
        let t = null;
        for (let s = 0; s < e.length - 1; s++) {
            let r = e.charCodeAt(s), i = e.charCodeAt(s + 1);
            if (r === vt && i == vt && t == null)
                return s;
            t === r ? t = null : t == null && hr(r) && (t = r);
        }
        return null;
    }
    _checkNoInterpolation(e, t, s, { start: r, end: i }) {
        let o = -1, a = -1;
        for (let l of this._forEachUnquotedChar(t, 0))
            if (o === -1)
                t.startsWith(r) && (o = l);
            else if (a = this._getInterpolationEndIndex(t, i, l), a > -1)
                break;
        o > -1 && a > -1 && e.push(mr(`Got interpolation (${r}${i}) where expression was expected`, t, `at column ${o} in`, s));
    }
    _getInterpolationEndIndex(e, t, s) {
        for (let r of this._forEachUnquotedChar(e, s)) {
            if (e.startsWith(t, r))
                return r;
            if (e.startsWith("//", r))
                return e.indexOf(t, r);
        }
        return -1;
    }
    *_forEachUnquotedChar(e, t) {
        let s = null, r = 0;
        for (let i = t; i < e.length; i++) {
            let o = e[i];
            hr(e.charCodeAt(i)) && (s === null || s === o) && r % 2 === 0 ? s = s === null ? o : null : s === null && (yield i), r = o === "\\" ? r + 1 : 0;
        }
    }
}, ar = function (n) { return n[n.None = 0] = "None", n[n.Writable = 1] = "Writable", n; }(ar || {}), Fn = class {
    input;
    parseSourceSpan;
    absoluteOffset;
    tokens;
    parseFlags;
    errors;
    offset;
    supportsDirectPipeReferences;
    rparensExpected = 0;
    rbracketsExpected = 0;
    rbracesExpected = 0;
    context = ar.None;
    sourceSpanCache = new Map;
    index = 0;
    constructor(e, t, s, r, i, o, a, l) { this.input = e, this.parseSourceSpan = t, this.absoluteOffset = s, this.tokens = r, this.parseFlags = i, this.errors = o, this.offset = a, this.supportsDirectPipeReferences = l; }
    peek(e) { let t = this.index + e; return t < this.tokens.length ? this.tokens[t] : xi; }
    get next() { return this.peek(0); }
    get atEOF() { return this.index >= this.tokens.length; }
    get inputIndex() { return this.atEOF ? this.currentEndIndex : this.next.index + this.offset; }
    get currentEndIndex() { return this.index > 0 ? this.peek(-1).end + this.offset : this.tokens.length === 0 ? this.input.length + this.offset : this.next.index + this.offset; }
    get currentAbsoluteOffset() { return this.absoluteOffset + this.inputIndex; }
    span(e, t) {
        let s = this.currentEndIndex;
        if (t !== void 0 && t > this.currentEndIndex && (s = t), e > s) {
            let r = s;
            s = e, e = r;
        }
        return new Jn(e, s);
    }
    sourceSpan(e, t) { let s = `${e}@${this.inputIndex}:${t}`; return this.sourceSpanCache.has(s) || this.sourceSpanCache.set(s, this.span(e, t).toAbsolute(this.absoluteOffset)), this.sourceSpanCache.get(s); }
    advance() { this.index++; }
    withContext(e, t) { this.context |= e; let s = t(); return this.context ^= e, s; }
    consumeOptionalCharacter(e) { return this.next.isCharacter(e) ? (this.advance(), !0) : !1; }
    peekKeywordLet() { return this.next.isKeywordLet(); }
    peekKeywordAs() { return this.next.isKeywordAs(); }
    expectCharacter(e) { this.consumeOptionalCharacter(e) || this.error(`Missing expected ${String.fromCharCode(e)}`); }
    consumeOptionalOperator(e) { return this.next.isOperator(e) ? (this.advance(), !0) : !1; }
    isAssignmentOperator(e) { return e.type === $.Operator && Ne.isAssignmentOperation(e.strValue); }
    expectOperator(e) { this.consumeOptionalOperator(e) || this.error(`Missing expected operator ${e}`); }
    prettyPrintToken(e) { return e === xi ? "end of input" : `token ${e}`; }
    expectIdentifierOrKeyword() { let e = this.next; return !e.isIdentifier() && !e.isKeyword() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier or keyword") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier or keyword`), null) : (this.advance(), e.toString()); }
    expectIdentifierOrKeywordOrString() { let e = this.next; return !e.isIdentifier() && !e.isKeyword() && !e.isString() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier, keyword or string") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier, keyword, or string`), "") : (this.advance(), e.toString()); }
    parseChain() {
        let e = [], t = this.inputIndex;
        for (; this.index < this.tokens.length;) {
            let s = this.parsePipe();
            if (e.push(s), this.consumeOptionalCharacter(Xe))
                for (this.parseFlags & 1 || this.error("Binding expression cannot contain chained expression"); this.consumeOptionalCharacter(Xe);)
                    ;
            else if (this.index < this.tokens.length) {
                let r = this.index;
                if (this.error(`Unexpected token '${this.next}'`), this.index === r)
                    break;
            }
        }
        if (e.length === 0) {
            let s = this.offset, r = this.offset + this.input.length;
            return new Re(this.span(s, r), this.sourceSpan(s, r));
        }
        return e.length == 1 ? e[0] : new Ps(this.span(t), this.sourceSpan(t), e);
    }
    parsePipe() {
        let e = this.inputIndex, t = this.parseExpression();
        if (this.consumeOptionalOperator("|")) {
            this.parseFlags & 1 && this.error("Cannot have a pipe in an action expression");
            do {
                let s = this.inputIndex, r = this.expectIdentifierOrKeyword(), i, o;
                r !== null ? i = this.sourceSpan(s) : (r = "", o = this.next.index !== -1 ? this.next.index : this.input.length + this.offset, i = new Jn(o, o).toAbsolute(this.absoluteOffset));
                let a = [];
                for (; this.consumeOptionalCharacter(jt);)
                    a.push(this.parseExpression());
                let l;
                if (this.supportsDirectPipeReferences) {
                    let c = r.charCodeAt(0);
                    l = c === Pn || c >= Dn && c <= Ys ? Ii.ReferencedDirectly : Ii.ReferencedByName;
                }
                else
                    l = Ii.ReferencedByName;
                t = new ji(this.span(e), this.sourceSpan(e, o), t, r, a, l, i);
            } while (this.consumeOptionalOperator("|"));
        }
        return t;
    }
    parseExpression() { return this.parseConditional(); }
    parseConditional() {
        let e = this.inputIndex, t = this.parseLogicalOr();
        if (this.consumeOptionalOperator("?")) {
            let s = this.parsePipe(), r;
            if (this.consumeOptionalCharacter(jt))
                r = this.parsePipe();
            else {
                let i = this.inputIndex, o = this.input.substring(e, i);
                this.error(`Conditional expression ${o} requires all 3 expressions`), r = new Re(this.span(e), this.sourceSpan(e));
            }
            return new Ui(this.span(e), this.sourceSpan(e), t, s, r);
        }
        else
            return t;
    }
    parseLogicalOr() {
        let e = this.inputIndex, t = this.parseLogicalAnd();
        for (; this.consumeOptionalOperator("||");) {
            let s = this.parseLogicalAnd();
            t = new Ne(this.span(e), this.sourceSpan(e), "||", t, s);
        }
        return t;
    }
    parseLogicalAnd() {
        let e = this.inputIndex, t = this.parseNullishCoalescing();
        for (; this.consumeOptionalOperator("&&");) {
            let s = this.parseNullishCoalescing();
            t = new Ne(this.span(e), this.sourceSpan(e), "&&", t, s);
        }
        return t;
    }
    parseNullishCoalescing() {
        let e = this.inputIndex, t = this.parseEquality();
        for (; this.consumeOptionalOperator("??");) {
            let s = this.parseEquality();
            t = new Ne(this.span(e), this.sourceSpan(e), "??", t, s);
        }
        return t;
    }
    parseEquality() {
        let e = this.inputIndex, t = this.parseRelational();
        for (; this.next.type == $.Operator;) {
            let s = this.next.strValue;
            switch (s) {
                case "==":
                case "===":
                case "!=":
                case "!==":
                    this.advance();
                    let r = this.parseRelational();
                    t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                    continue;
            }
            break;
        }
        return t;
    }
    parseRelational() {
        let e = this.inputIndex, t = this.parseAdditive();
        for (; this.next.type == $.Operator || this.next.isKeywordIn;) {
            let s = this.next.strValue;
            switch (s) {
                case "<":
                case ">":
                case "<=":
                case ">=":
                case "in":
                    this.advance();
                    let r = this.parseAdditive();
                    t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                    continue;
            }
            break;
        }
        return t;
    }
    parseAdditive() {
        let e = this.inputIndex, t = this.parseMultiplicative();
        for (; this.next.type == $.Operator;) {
            let s = this.next.strValue;
            switch (s) {
                case "+":
                case "-":
                    this.advance();
                    let r = this.parseMultiplicative();
                    t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                    continue;
            }
            break;
        }
        return t;
    }
    parseMultiplicative() {
        let e = this.inputIndex, t = this.parseExponentiation();
        for (; this.next.type == $.Operator;) {
            let s = this.next.strValue;
            switch (s) {
                case "*":
                case "%":
                case "/":
                    this.advance();
                    let r = this.parseExponentiation();
                    t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                    continue;
            }
            break;
        }
        return t;
    }
    parseExponentiation() {
        let e = this.inputIndex, t = this.parsePrefix();
        for (; this.next.type == $.Operator && this.next.strValue === "**";) {
            (t instanceof ys || t instanceof br || t instanceof kr || t instanceof Ir) && this.error("Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence"), this.advance();
            let s = this.parseExponentiation();
            t = new Ne(this.span(e), this.sourceSpan(e), "**", t, s);
        }
        return t;
    }
    parsePrefix() {
        if (this.next.type == $.Operator) {
            let e = this.inputIndex, t = this.next.strValue, s;
            switch (t) {
                case "+": return this.advance(), s = this.parsePrefix(), ys.createPlus(this.span(e), this.sourceSpan(e), s);
                case "-": return this.advance(), s = this.parsePrefix(), ys.createMinus(this.span(e), this.sourceSpan(e), s);
                case "!": return this.advance(), s = this.parsePrefix(), new br(this.span(e), this.sourceSpan(e), s);
            }
        }
        else if (this.next.isKeywordTypeof()) {
            this.advance();
            let e = this.inputIndex, t = this.parsePrefix();
            return new kr(this.span(e), this.sourceSpan(e), t);
        }
        else if (this.next.isKeywordVoid()) {
            this.advance();
            let e = this.inputIndex, t = this.parsePrefix();
            return new Ir(this.span(e), this.sourceSpan(e), t);
        }
        return this.parseCallChain();
    }
    parseCallChain() {
        let e = this.inputIndex, t = this.parsePrimary();
        for (;;)
            if (this.consumeOptionalCharacter(ir))
                t = this.parseAccessMember(t, e, !1);
            else if (this.consumeOptionalOperator("?."))
                this.consumeOptionalCharacter(yt) ? t = this.parseCall(t, e, !0) : t = this.consumeOptionalCharacter(As) ? this.parseKeyedReadOrWrite(t, e, !0) : this.parseAccessMember(t, e, !0);
            else if (this.consumeOptionalCharacter(As))
                t = this.parseKeyedReadOrWrite(t, e, !1);
            else if (this.consumeOptionalCharacter(yt))
                t = this.parseCall(t, e, !1);
            else if (this.consumeOptionalOperator("!"))
                t = new Nr(this.span(e), this.sourceSpan(e), t);
            else if (this.next.isTemplateLiteralEnd())
                t = this.parseNoInterpolationTaggedTemplateLiteral(t, e);
            else if (this.next.isTemplateLiteralPart())
                t = this.parseTaggedTemplateLiteral(t, e);
            else
                return t;
    }
    parsePrimary() {
        let e = this.inputIndex;
        if (this.consumeOptionalCharacter(yt)) {
            this.rparensExpected++;
            let t = this.parsePipe();
            return this.consumeOptionalCharacter(Pe) || (this.error("Missing closing parentheses"), this.consumeOptionalCharacter(Pe)), this.rparensExpected--, new Qi(this.span(e), this.sourceSpan(e), t);
        }
        else {
            if (this.next.isKeywordNull())
                return this.advance(), new ze(this.span(e), this.sourceSpan(e), null);
            if (this.next.isKeywordUndefined())
                return this.advance(), new ze(this.span(e), this.sourceSpan(e), void 0);
            if (this.next.isKeywordTrue())
                return this.advance(), new ze(this.span(e), this.sourceSpan(e), !0);
            if (this.next.isKeywordFalse())
                return this.advance(), new ze(this.span(e), this.sourceSpan(e), !1);
            if (this.next.isKeywordIn())
                return this.advance(), new ze(this.span(e), this.sourceSpan(e), "in");
            if (this.next.isKeywordThis())
                return this.advance(), new Kn(this.span(e), this.sourceSpan(e));
            if (this.consumeOptionalCharacter(As)) {
                this.rbracketsExpected++;
                let t = this.parseExpressionList(ws);
                return this.rbracketsExpected--, this.expectCharacter(ws), new zi(this.span(e), this.sourceSpan(e), t);
            }
            else {
                if (this.next.isCharacter(St))
                    return this.parseLiteralMap();
                if (this.next.isIdentifier())
                    return this.parseAccessMember(new Rt(this.span(e), this.sourceSpan(e)), e, !1);
                if (this.next.isNumber()) {
                    let t = this.next.toNumber();
                    return this.advance(), new ze(this.span(e), this.sourceSpan(e), t);
                }
                else {
                    if (this.next.isTemplateLiteralEnd())
                        return this.parseNoInterpolationTemplateLiteral();
                    if (this.next.isTemplateLiteralPart())
                        return this.parseTemplateLiteral();
                    if (this.next.isString() && this.next.kind === jn.Plain) {
                        let t = this.next.toString();
                        return this.advance(), new ze(this.span(e), this.sourceSpan(e), t);
                    }
                    else
                        return this.next.isPrivateIdentifier() ? (this._reportErrorForPrivateIdentifier(this.next, null), new Re(this.span(e), this.sourceSpan(e))) : this.index >= this.tokens.length ? (this.error(`Unexpected end of expression: ${this.input}`), new Re(this.span(e), this.sourceSpan(e))) : (this.error(`Unexpected token ${this.next}`), new Re(this.span(e), this.sourceSpan(e)));
                }
            }
        }
    }
    parseExpressionList(e) {
        let t = [];
        do
            if (!this.next.isCharacter(e))
                t.push(this.parsePipe());
            else
                break;
        while (this.consumeOptionalCharacter(ut));
        return t;
    }
    parseLiteralMap() {
        let e = [], t = [], s = this.inputIndex;
        if (this.expectCharacter(St), !this.consumeOptionalCharacter(Fe)) {
            this.rbracesExpected++;
            do {
                let r = this.inputIndex, i = this.next.isString(), o = this.expectIdentifierOrKeywordOrString(), a = { key: o, quoted: i };
                if (e.push(a), i)
                    this.expectCharacter(jt), t.push(this.parsePipe());
                else if (this.consumeOptionalCharacter(jt))
                    t.push(this.parsePipe());
                else {
                    a.isShorthandInitialized = !0;
                    let l = this.span(r), c = this.sourceSpan(r);
                    t.push(new mn(l, c, c, new Rt(l, c), o));
                }
            } while (this.consumeOptionalCharacter(ut) && !this.next.isCharacter(Fe));
            this.rbracesExpected--, this.expectCharacter(Fe);
        }
        return new Gi(this.span(s), this.sourceSpan(s), e, t);
    }
    parseAccessMember(e, t, s) {
        let r = this.inputIndex, i = this.withContext(ar.Writable, () => { let a = this.expectIdentifierOrKeyword() ?? ""; return a.length === 0 && this.error("Expected identifier for property access", e.span.end), a; }), o = this.sourceSpan(r);
        if (s)
            return this.isAssignmentOperator(this.next) ? (this.advance(), this.error("The '?.' operator cannot be used in the assignment"), new Re(this.span(t), this.sourceSpan(t))) : new Hi(this.span(t), this.sourceSpan(t), o, e, i);
        if (this.isAssignmentOperator(this.next)) {
            let a = this.next.strValue;
            if (this.advance(), !(this.parseFlags & 1))
                return this.error("Bindings cannot contain assignments"), new Re(this.span(t), this.sourceSpan(t));
            let l = new mn(this.span(t), this.sourceSpan(t), o, e, i), c = this.parseConditional();
            return new Ne(this.span(t), this.sourceSpan(t), a, l, c);
        }
        else
            return new mn(this.span(t), this.sourceSpan(t), o, e, i);
    }
    parseCall(e, t, s) { let r = this.inputIndex; this.rparensExpected++; let i = this.parseCallArguments(), o = this.span(r, this.inputIndex).toAbsolute(this.absoluteOffset); this.expectCharacter(Pe), this.rparensExpected--; let a = this.span(t), l = this.sourceSpan(t); return s ? new Xi(a, l, e, i, o) : new Dr(a, l, e, i, o); }
    parseCallArguments() {
        if (this.next.isCharacter(Pe))
            return [];
        let e = [];
        do
            e.push(this.parsePipe());
        while (this.consumeOptionalCharacter(ut));
        return e;
    }
    expectTemplateBindingKey() {
        let e = "", t = !1, s = this.currentAbsoluteOffset;
        do
            e += this.expectIdentifierOrKeywordOrString(), t = this.consumeOptionalOperator("-"), t && (e += "-");
        while (t);
        return { source: e, span: new Qe(s, s + e.length) };
    }
    parseTemplateBindings(e) {
        let t = [];
        for (t.push(...this.parseDirectiveKeywordBindings(e)); this.index < this.tokens.length;) {
            let s = this.parseLetBinding();
            if (s)
                t.push(s);
            else {
                let r = this.expectTemplateBindingKey(), i = this.parseAsBinding(r);
                i ? t.push(i) : (r.source = e.source + r.source.charAt(0).toUpperCase() + r.source.substring(1), t.push(...this.parseDirectiveKeywordBindings(r)));
            }
            this.consumeStatementTerminator();
        }
        return new Dl(t, [], this.errors);
    }
    parseKeyedReadOrWrite(e, t, s) {
        return this.withContext(ar.Writable, () => {
            this.rbracketsExpected++;
            let r = this.parsePipe();
            if (r instanceof Re && this.error("Key access cannot be empty"), this.rbracketsExpected--, this.expectCharacter(ws), this.isAssignmentOperator(this.next)) {
                let i = this.next.strValue;
                if (this.advance(), s)
                    this.error("The '?.' operator cannot be used in the assignment");
                else {
                    let o = new Ls(this.span(t), this.sourceSpan(t), e, r), a = this.parseConditional();
                    return new Ne(this.span(t), this.sourceSpan(t), i, o, a);
                }
            }
            else
                return s ? new Wi(this.span(t), this.sourceSpan(t), e, r) : new Ls(this.span(t), this.sourceSpan(t), e, r);
            return new Re(this.span(t), this.sourceSpan(t));
        });
    }
    parseDirectiveKeywordBindings(e) { let t = []; this.consumeOptionalCharacter(jt); let s = this.getDirectiveBoundTarget(), r = this.currentAbsoluteOffset, i = this.parseAsBinding(e); i || (this.consumeStatementTerminator(), r = this.currentAbsoluteOffset); let o = new Qe(e.span.start, r); return t.push(new ja(o, e, s)), i && t.push(i), t; }
    getDirectiveBoundTarget() {
        if (this.next === xi || this.peekKeywordAs() || this.peekKeywordLet())
            return null;
        let e = this.parsePipe(), { start: t, end: s } = e.span, r = this.input.substring(t, s);
        return new Ge(e, r, un(this.parseSourceSpan), this.absoluteOffset + t, this.errors);
    }
    parseAsBinding(e) {
        if (!this.peekKeywordAs())
            return null;
        this.advance();
        let t = this.expectTemplateBindingKey();
        this.consumeStatementTerminator();
        let s = new Qe(e.span.start, this.currentAbsoluteOffset);
        return new Br(s, t, e);
    }
    parseLetBinding() {
        if (!this.peekKeywordLet())
            return null;
        let e = this.currentAbsoluteOffset;
        this.advance();
        let t = this.expectTemplateBindingKey(), s = null;
        this.consumeOptionalOperator("=") && (s = this.expectTemplateBindingKey()), this.consumeStatementTerminator();
        let r = new Qe(e, this.currentAbsoluteOffset);
        return new Br(r, t, s);
    }
    parseNoInterpolationTaggedTemplateLiteral(e, t) { let s = this.parseNoInterpolationTemplateLiteral(); return new Pr(this.span(t), this.sourceSpan(t), e, s); }
    parseNoInterpolationTemplateLiteral() { let e = this.next.strValue, t = this.inputIndex; this.advance(); let s = this.span(t), r = this.sourceSpan(t); return new Lr(s, r, [new Yi(s, r, e)], []); }
    parseTaggedTemplateLiteral(e, t) { let s = this.parseTemplateLiteral(); return new Pr(this.span(t), this.sourceSpan(t), e, s); }
    parseTemplateLiteral() {
        let e = [], t = [], s = this.inputIndex;
        for (; this.next !== xi;) {
            let r = this.next;
            if (r.isTemplateLiteralPart() || r.isTemplateLiteralEnd()) {
                let i = this.inputIndex;
                if (this.advance(), e.push(new Yi(this.span(i), this.sourceSpan(i), r.strValue)), r.isTemplateLiteralEnd())
                    break;
            }
            else if (r.isTemplateLiteralInterpolationStart()) {
                this.advance();
                let i = this.parsePipe();
                i instanceof Re ? this.error("Template literal interpolation cannot be empty") : t.push(i);
            }
            else
                this.advance();
        }
        return new Lr(this.span(s), this.sourceSpan(s), e, t);
    }
    consumeStatementTerminator() { this.consumeOptionalCharacter(Xe) || this.consumeOptionalCharacter(ut); }
    error(e, t = this.index) { this.errors.push(mr(e, this.input, this.getErrorLocationText(t), this.parseSourceSpan)), this.skip(); }
    getErrorLocationText(e) { return e < this.tokens.length ? `at column ${this.tokens[e].index + 1} in` : "at the end of the expression"; }
    _reportErrorForPrivateIdentifier(e, t) { let s = `Private identifiers are not supported. Unexpected private identifier: ${e}`; t !== null && (s += `, ${t}`), this.error(s); }
    skip() {
        let e = this.next;
        for (; this.index < this.tokens.length && !e.isCharacter(Xe) && !e.isOperator("|") && (this.rparensExpected <= 0 || !e.isCharacter(Pe)) && (this.rbracesExpected <= 0 || !e.isCharacter(Fe)) && (this.rbracketsExpected <= 0 || !e.isCharacter(ws)) && (!(this.context & ar.Writable) || !this.isAssignmentOperator(e));)
            this.next.isError() && this.errors.push(mr(this.next.toString(), this.input, this.getErrorLocationText(this.next.index), this.parseSourceSpan)), this.advance(), e = this.next;
    }
};
function mr(n, e, t, s) { t.length > 0 && (t = ` ${t} `); let r = un(s), i = `Parser Error: ${n}${t}[${e}] in ${r}`; return new D(s, i); }
var Pl = class extends Zi {
    errors = [];
    visitPipe() { this.errors.push("pipes"); }
};
function Sw(n) {
    let e = new Map, t = 0, s = 0, r = 0;
    for (; r < n.length;) {
        let i = n[r];
        if (i.type === 9) {
            let [o, a] = i.parts;
            t += a.length, s += o.length;
        }
        else {
            let o = i.parts.reduce((a, l) => a + l.length, 0);
            s += o, t += o;
        }
        e.set(s, t), r++;
    }
    return e;
}
function xw(n) { return n.visit(new Ll); }
var Ll = class {
    visitUnary(e, t) { return `${e.operator}${e.expr.visit(this, t)}`; }
    visitBinary(e, t) { return `${e.left.visit(this, t)} ${e.operation} ${e.right.visit(this, t)}`; }
    visitChain(e, t) { return e.expressions.map(s => s.visit(this, t)).join("; "); }
    visitConditional(e, t) { return `${e.condition.visit(this, t)} ? ${e.trueExp.visit(this, t)} : ${e.falseExp.visit(this, t)}`; }
    visitThisReceiver() { return "this"; }
    visitImplicitReceiver() { return ""; }
    visitInterpolation(e, t) { return Cw(e.strings, e.expressions.map(s => s.visit(this, t))).join(""); }
    visitKeyedRead(e, t) { return `${e.receiver.visit(this, t)}[${e.key.visit(this, t)}]`; }
    visitLiteralArray(e, t) { return `[${e.expressions.map(s => s.visit(this, t)).join(", ")}]`; }
    visitLiteralMap(e, t) { return `{${yw(e.keys.map(s => s.quoted ? `'${s.key}'` : s.key), e.values.map(s => s.visit(this, t))).map(([s, r]) => `${s}: ${r}`).join(", ")}}`; }
    visitLiteralPrimitive(e) {
        if (e.value === null)
            return "null";
        switch (typeof e.value) {
            case "number":
            case "boolean": return e.value.toString();
            case "undefined": return "undefined";
            case "string": return `'${e.value.replace(/'/g, "\\'")}'`;
            default: throw new Error(`Unsupported primitive type: ${e.value}`);
        }
    }
    visitPipe(e, t) { return `${e.exp.visit(this, t)} | ${e.name}`; }
    visitPrefixNot(e, t) { return `!${e.expression.visit(this, t)}`; }
    visitNonNullAssert(e, t) { return `${e.expression.visit(this, t)}!`; }
    visitPropertyRead(e, t) { return e.receiver instanceof Rt ? e.name : `${e.receiver.visit(this, t)}.${e.name}`; }
    visitSafePropertyRead(e, t) { return `${e.receiver.visit(this, t)}?.${e.name}`; }
    visitSafeKeyedRead(e, t) { return `${e.receiver.visit(this, t)}?.[${e.key.visit(this, t)}]`; }
    visitCall(e, t) { return `${e.receiver.visit(this, t)}(${e.args.map(s => s.visit(this, t)).join(", ")})`; }
    visitSafeCall(e, t) { return `${e.receiver.visit(this, t)}?.(${e.args.map(s => s.visit(this, t)).join(", ")})`; }
    visitTypeofExpression(e, t) { return `typeof ${e.expression.visit(this, t)}`; }
    visitVoidExpression(e, t) { return `void ${e.expression.visit(this, t)}`; }
    visitASTWithSource(e, t) { return e.ast.visit(this, t); }
    visitTemplateLiteral(e, t) {
        let s = "";
        for (let r = 0; r < e.elements.length; r++) {
            s += e.elements[r].visit(this, t);
            let i = r < e.expressions.length ? e.expressions[r] : null;
            i !== null && (s += "${" + i.visit(this, t) + "}");
        }
        return "`" + s + "`";
    }
    visitTemplateLiteralElement(e, t) { return e.text; }
    visitTaggedTemplateLiteral(e, t) { return e.tag.visit(this, t) + e.template.visit(this, t); }
    visitParenthesizedExpression(e, t) { return "(" + e.expression.visit(this, t) + ")"; }
};
function yw(n, e) {
    if (n.length !== e.length)
        throw new Error("Array lengths must match");
    return n.map((t, s) => [t, e[s]]);
}
function Cw(n, e) {
    let t = [];
    for (let s = 0; s < Math.max(n.length, e.length); s++)
        s < n.length && t.push(n[s]), s < e.length && t.push(e[s]);
    return t;
}
var Pi;
function zu() { return Pi || (Pi = {}, yi(te.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), yi(te.STYLE, ["*|style"]), yi(te.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), yi(te.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), Pi; }
function yi(n, e) {
    for (let t of e)
        Pi[t.toLowerCase()] = n;
}
var Aw = new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]);
function _w(n) { return Aw.has(n.toLowerCase()); }
var Bl = class {
}, Tw = "boolean", bw = "number", kw = "string", Iw = "object", Nw = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "selectedcontent^[HTMLElement]|", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "search^[HTMLELement]|", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"], ff = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" })), Dw = Array.from(ff).reduce((n, [e, t]) => (n.set(e, t), n), new Map), zs = class extends Bl {
    _schema = new Map;
    _eventSchema = new Map;
    constructor() {
        super(), Nw.forEach(e => {
            let t = new Map, s = new Set, [r, i] = e.split("|"), o = i.split(","), [a, l] = r.split("^");
            a.split(",").forEach(p => { this._schema.set(p.toLowerCase(), t), this._eventSchema.set(p.toLowerCase(), s); });
            let c = l && this._schema.get(l.toLowerCase());
            if (c) {
                for (let [p, h] of c)
                    t.set(p, h);
                for (let p of this._eventSchema.get(l.toLowerCase()))
                    s.add(p);
            }
            o.forEach(p => {
                if (p.length > 0)
                    switch (p[0]) {
                        case "*":
                            s.add(p.substring(1));
                            break;
                        case "!":
                            t.set(p.substring(1), Tw);
                            break;
                        case "#":
                            t.set(p.substring(1), bw);
                            break;
                        case "%":
                            t.set(p.substring(1), Iw);
                            break;
                        default: t.set(p, kw);
                    }
            });
        });
    }
    hasProperty(e, t, s) {
        if (s.some(i => i.name === La.name))
            return !0;
        if (e.indexOf("-") > -1) {
            if (lu(e) || Ga(e))
                return !1;
            if (s.some(i => i.name === Pa.name))
                return !0;
        }
        return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
    }
    hasElement(e, t) { return t.some(s => s.name === La.name) || e.indexOf("-") > -1 && (lu(e) || Ga(e) || t.some(s => s.name === Pa.name)) ? !0 : this._schema.has(e.toLowerCase()); }
    securityContext(e, t, s) { s && (t = this.getMappedPropName(t)), e = e.toLowerCase(), t = t.toLowerCase(); let r = zu()[e + "|" + t]; return r || (r = zu()["*|" + t], r || te.NONE); }
    getMappedPropName(e) { return ff.get(e) ?? e; }
    getDefaultComponentElementName() { return "ng-component"; }
    validateProperty(e) {
        return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: !1 };
    }
    validateAttribute(e) { return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: !1 }; }
    allKnownElementNames() { return Array.from(this._schema.keys()); }
    allKnownAttributesOfElement(e) { let t = this._schema.get(e.toLowerCase()) || this._schema.get("unknown"); return Array.from(t.keys()).map(s => Dw.get(s) ?? s); }
    allKnownEventsOfElement(e) { return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []); }
    normalizeAnimationStyleProperty(e) { return Fd(e); }
    normalizeAnimationStyleValue(e, t, s) {
        let r = "", i = s.toString().trim(), o = null;
        if (Pw(e) && s !== 0 && s !== "0")
            if (typeof s == "number")
                r = "px";
            else {
                let a = s.match(/^[+-]?[\d\.]+([a-z]*)$/);
                a && a[1].length == 0 && (o = `Please provide a CSS unit value for ${t}:${s}`);
            }
        return { error: o, value: i + r };
    }
};
function Pw(n) {
    switch (n) {
        case "width":
        case "height":
        case "minWidth":
        case "minHeight":
        case "maxWidth":
        case "maxHeight":
        case "left":
        case "top":
        case "bottom":
        case "right":
        case "fontSize":
        case "outlineWidth":
        case "outlineOffset":
        case "paddingTop":
        case "paddingLeft":
        case "paddingBottom":
        case "paddingRight":
        case "marginTop":
        case "marginLeft":
        case "marginBottom":
        case "marginRight":
        case "borderRadius":
        case "borderWidth":
        case "borderTopWidth":
        case "borderLeftWidth":
        case "borderRightWidth":
        case "borderBottomWidth":
        case "textIndent": return !0;
        default: return !1;
    }
}
var V = class {
    closedByChildren = {};
    contentType;
    closedByParent = !1;
    implicitNamespacePrefix;
    isVoid;
    ignoreFirstLf;
    canSelfClose;
    preventNamespaceInheritance;
    constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: s = Lt.PARSABLE_DATA, closedByParent: r = !1, isVoid: i = !1, ignoreFirstLf: o = !1, preventNamespaceInheritance: a = !1, canSelfClose: l = !1 } = {}) { e && e.length > 0 && e.forEach(c => this.closedByChildren[c] = !0), this.isVoid = i, this.closedByParent = r || i, this.implicitNamespacePrefix = t || null, this.contentType = s, this.ignoreFirstLf = o, this.preventNamespaceInheritance = a, this.canSelfClose = l ?? i; }
    isClosedByChild(e) { return this.isVoid || e.toLowerCase() in this.closedByChildren; }
    getContentType(e) { return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType; }
}, Gu, fs;
function Ml(n) { return fs || (Gu = new V({ canSelfClose: !0 }), fs = Object.assign(Object.create(null), { base: new V({ isVoid: !0 }), meta: new V({ isVoid: !0 }), area: new V({ isVoid: !0 }), embed: new V({ isVoid: !0 }), link: new V({ isVoid: !0 }), img: new V({ isVoid: !0 }), input: new V({ isVoid: !0 }), param: new V({ isVoid: !0 }), hr: new V({ isVoid: !0 }), br: new V({ isVoid: !0 }), source: new V({ isVoid: !0 }), track: new V({ isVoid: !0 }), wbr: new V({ isVoid: !0 }), p: new V({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new V({ closedByChildren: ["tbody", "tfoot"] }), tbody: new V({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new V({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new V({ closedByChildren: ["tr"], closedByParent: !0 }), td: new V({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new V({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new V({ isVoid: !0 }), svg: new V({ implicitNamespacePrefix: "svg" }), foreignObject: new V({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: !0 }), math: new V({ implicitNamespacePrefix: "math" }), li: new V({ closedByChildren: ["li"], closedByParent: !0 }), dt: new V({ closedByChildren: ["dt", "dd"] }), dd: new V({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new V({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new V({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new V({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new V({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new V({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new V({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new V({ ignoreFirstLf: !0 }), listing: new V({ ignoreFirstLf: !0 }), style: new V({ contentType: Lt.RAW_TEXT }), script: new V({ contentType: Lt.RAW_TEXT }), title: new V({ contentType: { default: Lt.ESCAPABLE_RAW_TEXT, svg: Lt.PARSABLE_DATA } }), textarea: new V({ contentType: Lt.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), new zs().allKnownElementNames().forEach(e => { !fs[e] && Xa(e) === null && (fs[e] = new V({ canSelfClose: !1 })); })), fs[n] ?? fs[n.toLowerCase()] ?? Gu; }
var Xu = { A: "LINK", B: "BOLD_TEXT", BR: "LINE_BREAK", EM: "EMPHASISED_TEXT", H1: "HEADING_LEVEL1", H2: "HEADING_LEVEL2", H3: "HEADING_LEVEL3", H4: "HEADING_LEVEL4", H5: "HEADING_LEVEL5", H6: "HEADING_LEVEL6", HR: "HORIZONTAL_RULE", I: "ITALIC_TEXT", LI: "LIST_ITEM", LINK: "MEDIA_LINK", OL: "ORDERED_LIST", P: "PARAGRAPH", Q: "QUOTATION", S: "STRIKETHROUGH_TEXT", SMALL: "SMALL_TEXT", SUB: "SUBSTRIPT", SUP: "SUPERSCRIPT", TBODY: "TABLE_BODY", TD: "TABLE_CELL", TFOOT: "TABLE_FOOTER", TH: "TABLE_HEADER_CELL", THEAD: "TABLE_HEADER", TR: "TABLE_ROW", TT: "MONOSPACED_TEXT", U: "UNDERLINED_TEXT", UL: "UNORDERED_LIST" }, Rl = class {
    _placeHolderNameCounts = {};
    _signatureToName = {};
    getStartTagPlaceholderName(e, t, s) {
        let r = this._hashTag(e, t, s);
        if (this._signatureToName[r])
            return this._signatureToName[r];
        let i = e.toUpperCase(), o = Xu[i] || `TAG_${i}`, a = this._generateUniqueName(s ? o : `START_${o}`);
        return this._signatureToName[r] = a, a;
    }
    getCloseTagPlaceholderName(e) {
        let t = this._hashClosingTag(e);
        if (this._signatureToName[t])
            return this._signatureToName[t];
        let s = e.toUpperCase(), r = Xu[s] || `TAG_${s}`, i = this._generateUniqueName(`CLOSE_${r}`);
        return this._signatureToName[t] = i, i;
    }
    getPlaceholderName(e, t) {
        let s = e.toUpperCase(), r = `PH: ${s}=${t}`;
        if (this._signatureToName[r])
            return this._signatureToName[r];
        let i = this._generateUniqueName(s);
        return this._signatureToName[r] = i, i;
    }
    getUniquePlaceholder(e) { return this._generateUniqueName(e.toUpperCase()); }
    getStartBlockPlaceholderName(e, t) {
        let s = this._hashBlock(e, t);
        if (this._signatureToName[s])
            return this._signatureToName[s];
        let r = this._generateUniqueName(`START_BLOCK_${this._toSnakeCase(e)}`);
        return this._signatureToName[s] = r, r;
    }
    getCloseBlockPlaceholderName(e) {
        let t = this._hashClosingBlock(e);
        if (this._signatureToName[t])
            return this._signatureToName[t];
        let s = this._generateUniqueName(`CLOSE_BLOCK_${this._toSnakeCase(e)}`);
        return this._signatureToName[t] = s, s;
    }
    _hashTag(e, t, s) { let r = `<${e}`, i = Object.keys(t).sort().map(a => ` ${a}=${t[a]}`).join(""), o = s ? "/>" : `></${e}>`; return r + i + o; }
    _hashClosingTag(e) { return this._hashTag(`/${e}`, {}, !1); }
    _hashBlock(e, t) { let s = t.length === 0 ? "" : ` (${t.sort().join("; ")})`; return `@${e}${s} {}`; }
    _hashClosingBlock(e) { return this._hashBlock(`close_${e}`, []); }
    _toSnakeCase(e) { return e.toUpperCase().replace(/[^A-Z0-9]/g, "_"); }
    _generateUniqueName(e) {
        if (!this._placeHolderNameCounts.hasOwnProperty(e))
            return this._placeHolderNameCounts[e] = 1, e;
        let s = this._placeHolderNameCounts[e];
        return this._placeHolderNameCounts[e] = s + 1, `${e}_${s}`;
    }
}, Lw = new Do(new oi());
function df(n, e, t, s) { let r = new Fl(Lw, n, e, t, s); return (i, o, a, l, c) => r.toI18nMessage(i, o, a, l, c); }
function Bw(n, e) { return e; }
var Fl = class {
    _expressionParser;
    _interpolationConfig;
    _containerBlocks;
    _retainEmptyTokens;
    _preserveExpressionWhitespace;
    constructor(e, t, s, r, i) { this._expressionParser = e, this._interpolationConfig = t, this._containerBlocks = s, this._retainEmptyTokens = r, this._preserveExpressionWhitespace = i; }
    toI18nMessage(e, t = "", s = "", r = "", i) { let o = { isIcu: e.length == 1 && e[0] instanceof gn, icuDepth: 0, placeholderRegistry: new Rl, placeholderToContent: {}, placeholderToMessage: {}, visitNodeFn: i || Bw }, a = L(this, e, o); return new ke(a, o.placeholderToContent, o.placeholderToMessage, t, s, r); }
    visitElement(e, t) { return this._visitElementLike(e, t); }
    visitComponent(e, t) { return this._visitElementLike(e, t); }
    visitDirective(e, t) { throw new Error("Unreachable code"); }
    visitAttribute(e, t) { let s = e.valueTokens === void 0 || e.valueTokens.length === 1 ? new Bt(e.value, e.valueSpan || e.sourceSpan) : this._visitTextWithInterpolation(e.valueTokens, e.valueSpan || e.sourceSpan, t, e.i18n); return t.visitNodeFn(e, s); }
    visitText(e, t) { let s = e.tokens.length === 1 ? new Bt(e.value, e.sourceSpan) : this._visitTextWithInterpolation(e.tokens, e.sourceSpan, t, e.i18n); return t.visitNodeFn(e, s); }
    visitComment(e, t) { return null; }
    visitExpansion(e, t) {
        t.icuDepth++;
        let s = {}, r = new An(e.switchValue, e.type, s, e.sourceSpan);
        if (e.cases.forEach(a => { s[a.value] = new Ke(a.expression.map(l => l.visit(this, t)), a.expSourceSpan); }), t.icuDepth--, t.isIcu || t.icuDepth > 0) {
            let a = t.placeholderRegistry.getUniquePlaceholder(`VAR_${e.type}`);
            return r.expressionPlaceholder = a, t.placeholderToContent[a] = { text: e.switchValue, sourceSpan: e.switchValueSourceSpan }, t.visitNodeFn(e, r);
        }
        let i = t.placeholderRegistry.getPlaceholderName("ICU", e.sourceSpan.toString());
        t.placeholderToMessage[i] = this.toI18nMessage([e], "", "", "", void 0);
        let o = new _n(r, i, e.sourceSpan);
        return t.visitNodeFn(e, o);
    }
    visitExpansionCase(e, t) { throw new Error("Unreachable code"); }
    visitBlock(e, t) {
        let s = L(this, e.children, t);
        if (this._containerBlocks.has(e.name))
            return new Ke(s, e.sourceSpan);
        let r = e.parameters.map(l => l.expression), i = t.placeholderRegistry.getStartBlockPlaceholderName(e.name, r), o = t.placeholderRegistry.getCloseBlockPlaceholderName(e.name);
        t.placeholderToContent[i] = { text: e.startSourceSpan.toString(), sourceSpan: e.startSourceSpan }, t.placeholderToContent[o] = { text: e.endSourceSpan ? e.endSourceSpan.toString() : "}", sourceSpan: e.endSourceSpan ?? e.sourceSpan };
        let a = new Vt(e.name, r, i, o, s, e.sourceSpan, e.startSourceSpan, e.endSourceSpan);
        return t.visitNodeFn(e, a);
    }
    visitBlockParameter(e, t) { throw new Error("Unreachable code"); }
    visitLetDeclaration(e, t) { return null; }
    _visitElementLike(e, t) { let s = L(this, e.children, t), r = {}, i = h => { r[h.name] = h.value; }, o, a; e instanceof De ? (o = e.name, a = Ml(e.name).isVoid) : (o = e.fullName, a = e.tagName ? Ml(e.tagName).isVoid : !1), e.attrs.forEach(i), e.directives.forEach(h => h.attrs.forEach(i)); let l = t.placeholderRegistry.getStartTagPlaceholderName(o, r, a); t.placeholderToContent[l] = { text: e.startSourceSpan.toString(), sourceSpan: e.startSourceSpan }; let c = ""; a || (c = t.placeholderRegistry.getCloseTagPlaceholderName(o), t.placeholderToContent[c] = { text: `</${o}>`, sourceSpan: e.endSourceSpan ?? e.sourceSpan }); let p = new Ot(o, r, l, c, s, a, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); return t.visitNodeFn(e, p); }
    _visitTextWithInterpolation(e, t, s, r) {
        let i = [], o = !1;
        for (let a of e)
            switch (a.type) {
                case 8:
                case 17:
                    o = !0;
                    let [l, c, p] = a.parts, h = Ow(c) || "INTERPOLATION", m = s.placeholderRegistry.getPlaceholderName(h, c);
                    if (this._preserveExpressionWhitespace)
                        s.placeholderToContent[m] = { text: a.parts.join(""), sourceSpan: a.sourceSpan }, i.push(new ht(c, m, a.sourceSpan));
                    else {
                        let v = this.normalizeExpression(a);
                        s.placeholderToContent[m] = { text: `${l}${v}${p}`, sourceSpan: a.sourceSpan }, i.push(new ht(v, m, a.sourceSpan));
                    }
                    break;
                default:
                    if (a.parts[0].length > 0 || this._retainEmptyTokens) {
                        let v = i[i.length - 1];
                        v instanceof Bt ? (v.value += a.parts[0], v.sourceSpan = new B(v.sourceSpan.start, a.sourceSpan.end, v.sourceSpan.fullStart, v.sourceSpan.details)) : i.push(new Bt(a.parts[0], a.sourceSpan));
                    }
                    else
                        this._retainEmptyTokens && i.push(new Bt(a.parts[0], a.sourceSpan));
                    break;
            }
        return o ? (Mw(i, r), new Ke(i, t)) : i[0];
    }
    normalizeExpression(e) { let t = e.parts[1], s = this._expressionParser.parseBinding(t, e.sourceSpan, e.sourceSpan.start.offset, this._interpolationConfig); return xw(s); }
};
function Mw(n, e) {
    if (e instanceof ke && (Rw(e), e = e.nodes[0]), e instanceof Ke) {
        Fw(e.children, n);
        for (let t = 0; t < n.length; t++)
            n[t].sourceSpan = e.children[t].sourceSpan;
    }
}
function Rw(n) {
    let e = n.nodes;
    if (e.length !== 1 || !(e[0] instanceof Ke))
        throw new Error("Unexpected previous i18n message - expected it to consist of only a single `Container` node.");
}
function Fw(n, e) {
    if (n.length !== e.length)
        throw new Error(`
The number of i18n message children changed between first and second pass.

First pass (${n.length} tokens):
${n.map(t => `"${t.sourceSpan.toString()}"`).join(`
`)}

Second pass (${e.length} tokens):
${e.map(t => `"${t.sourceSpan.toString()}"`).join(`
`)}
    `.trim());
    if (n.some((t, s) => e[s].constructor !== t.constructor))
        throw new Error("The types of the i18n message children changed between first and second pass.");
}
var $w = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
function Ow(n) { return n.split($w)[2]; }
var Yu = new Set(["iframe|srcdoc", "*|innerhtml", "*|outerhtml", "embed|src", "object|codebase", "object|data"]);
function Qu(n, e) { return n = n.toLowerCase(), e = e.toLowerCase(), Yu.has(n + "|" + e) || Yu.has("*|" + e); }
var Vw = n => (e, t) => { let s = n.get(e) ?? e; return s instanceof tn && (t instanceof _n && s.i18n instanceof ke && (t.previousMessage = s.i18n), s.i18n = t), t; }, Po = class {
    interpolationConfig;
    keepI18nAttrs;
    enableI18nLegacyMessageIdFormat;
    containerBlocks;
    preserveSignificantWhitespace;
    retainEmptyTokens;
    hasI18nMeta = !1;
    _errors = [];
    constructor(e = ot, t = !1, s = !1, r = xh, i = !0, o = !i) { this.interpolationConfig = e, this.keepI18nAttrs = t, this.enableI18nLegacyMessageIdFormat = s, this.containerBlocks = r, this.preserveSignificantWhitespace = i, this.retainEmptyTokens = o; }
    _generateI18nMessage(e, t = "", s) { let { meaning: r, description: i, customId: o } = this._parseMetadata(t), l = df(this.interpolationConfig, this.containerBlocks, this.retainEmptyTokens, this.preserveSignificantWhitespace)(e, r, i, o, s); return this._setMessageId(l, t), this._setLegacyIds(l, t), l; }
    visitAllWithErrors(e) { let t = e.map(s => s.visit(this, null)); return new js(t, this._errors); }
    visitElement(e) { return this._visitElementLike(e), e; }
    visitComponent(e, t) { return this._visitElementLike(e), e; }
    visitExpansion(e, t) {
        let s, r = e.i18n;
        if (this.hasI18nMeta = !0, r instanceof _n) {
            let i = r.name;
            s = this._generateI18nMessage([e], r);
            let o = wh(s);
            o.name = i, t !== null && (t.placeholderToMessage[i] = s);
        }
        else
            s = this._generateI18nMessage([e], t || r);
        return e.i18n = s, e;
    }
    visitText(e) { return e; }
    visitAttribute(e) { return e; }
    visitComment(e) { return e; }
    visitExpansionCase(e) { return e; }
    visitBlock(e, t) { return L(this, e.children, t), e; }
    visitBlockParameter(e, t) { return e; }
    visitLetDeclaration(e, t) { return e; }
    visitDirective(e, t) { return e; }
    _visitElementLike(e) {
        let t;
        if (mm(e)) {
            this.hasI18nMeta = !0;
            let s = [], r = {};
            for (let i of e.attrs)
                if (i.name === gh) {
                    let o = e.i18n || i.value, a = new Map, l = this.preserveSignificantWhitespace ? e.children : gt(new ii(!1, a), e.children);
                    t = this._generateI18nMessage(l, o, Vw(a)), t.nodes.length === 0 && (t = void 0), e.i18n = t;
                }
                else if (i.name.startsWith(al)) {
                    let o = i.name.slice(al.length), a;
                    e instanceof ye ? a = e.tagName === null ? !1 : Qu(e.tagName, o) : a = Qu(e.name, o), a ? this._reportError(i, `Translating attribute '${o}' is disallowed for security reasons.`) : r[o] = i.value;
                }
                else
                    s.push(i);
            if (Object.keys(r).length)
                for (let i of s) {
                    let o = r[i.name];
                    o !== void 0 && i.value && (i.i18n = this._generateI18nMessage([i], i.i18n || o));
                }
            this.keepI18nAttrs || (e.attrs = s);
        }
        L(this, e.children, t);
    }
    _parseMetadata(e) { return typeof e == "string" ? Hw(e) : e instanceof ke ? e : {}; }
    _setMessageId(e, t) { e.id || (e.id = t instanceof ke && t.id || Ec(e)); }
    _setLegacyIds(e, t) {
        if (this.enableI18nLegacyMessageIdFormat)
            e.legacyIds = [Zp(e), Jp(e)];
        else if (typeof t != "string") {
            let s = t instanceof ke ? t : t instanceof _n ? t.previousMessage : void 0;
            e.legacyIds = s ? s.legacyIds : [];
        }
    }
    _reportError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
}, qw = "|", Uw = "@@";
function Hw(n = "") {
    let e, t, s;
    if (n = n.trim(), n) {
        let r = n.indexOf(Uw), i = n.indexOf(qw), o;
        [o, e] = r > -1 ? [n.slice(0, r), n.slice(r + 2)] : [n, ""], [t, s] = i > -1 ? [o.slice(0, i), o.slice(i + 1)] : ["", o];
    }
    return { customId: e, meaning: t, description: s };
}
function Ww(n) { let e = []; return n.description ? e.push({ tagName: "desc", text: n.description }) : e.push({ tagName: "suppress", text: "{msgDescriptions}" }), n.meaning && e.push({ tagName: "meaning", text: n.meaning }), rh(e); }
var jw = "goog.getMsg";
function zw(n, e, t, s) { let r = Xw(e), i = [d(r)]; Object.keys(s).length && (i.push(To(bc(s, !0), !0)), i.push(To({ original_code: pe(Object.keys(s).map(l => ({ key: fi(l), quoted: !0, value: e.placeholders[l] ? d(e.placeholders[l].sourceSpan.toString()) : d(e.placeholderToMessage[l].nodes.map(c => c.sourceSpan.toString()).join("")) }))) }))); let o = new le(t.name, N(jw).callFn(i), Oe, ae.Final); o.addLeadingComment(Ww(e)); let a = new tt(n.set(t)); return [o, a]; }
var $l = class {
    formatPh(e) { return `{$${fi(e)}}`; }
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { return rf(e); }
    visitTagPlaceholder(e) { return e.isVoid ? this.formatPh(e.startName) : `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitPlaceholder(e) { return this.formatPh(e.name); }
    visitBlockPlaceholder(e) { return `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitIcuPlaceholder(e, t) { return this.formatPh(e.name); }
}, Gw = new $l;
function Xw(n) { return n.nodes.map(e => e.visit(Gw, null)).join(""); }
function Yw(n, e, t) { let { messageParts: s, placeHolders: r } = Qw(e), i = Zw(e), o = r.map(c => t[c.text]), a = ah(e, s, r, o, i), l = n.set(a); return [new tt(l)]; }
var Ol = class {
    placeholderToMessage;
    pieces;
    constructor(e, t) { this.placeholderToMessage = e, this.pieces = t; }
    visitText(e) {
        if (this.pieces[this.pieces.length - 1] instanceof dn)
            this.pieces[this.pieces.length - 1].text += e.value;
        else {
            let t = new B(e.sourceSpan.fullStart, e.sourceSpan.end, e.sourceSpan.fullStart, e.sourceSpan.details);
            this.pieces.push(new dn(e.value, t));
        }
    }
    visitContainer(e) { e.children.forEach(t => t.visit(this)); }
    visitIcu(e) { this.pieces.push(new dn(rf(e), e.sourceSpan)); }
    visitTagPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.startName, e.startSourceSpan ?? e.sourceSpan)), e.isVoid || (e.children.forEach(t => t.visit(this)), this.pieces.push(this.createPlaceholderPiece(e.closeName, e.endSourceSpan ?? e.sourceSpan))); }
    visitPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.name, e.sourceSpan)); }
    visitBlockPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.startName, e.startSourceSpan ?? e.sourceSpan)), e.children.forEach(t => t.visit(this)), this.pieces.push(this.createPlaceholderPiece(e.closeName, e.endSourceSpan ?? e.sourceSpan)); }
    visitIcuPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.name, e.sourceSpan, this.placeholderToMessage[e.name])); }
    createPlaceholderPiece(e, t, s) { return new Un(fi(e, !1), t, s); }
};
function Qw(n) { let e = [], t = new Ol(n.placeholderToMessage, e); return n.nodes.forEach(s => s.visit(t)), Jw(e); }
function Zw(n) { let e = n.nodes[0], t = n.nodes[n.nodes.length - 1]; return new B(e.sourceSpan.fullStart, t.sourceSpan.end, e.sourceSpan.fullStart, e.sourceSpan.details); }
function Jw(n) {
    let e = [], t = [];
    n[0] instanceof Un && e.push(ma(n[0].sourceSpan.start));
    for (let s = 0; s < n.length; s++) {
        let r = n[s];
        r instanceof dn ? e.push(r) : (t.push(r), n[s - 1] instanceof Un && e.push(ma(n[s - 1].sourceSpan.end)));
    }
    return n[n.length - 1] instanceof Un && e.push(ma(n[n.length - 1].sourceSpan.end)), { messageParts: e, placeHolders: t };
}
function ma(n) { return new dn("", new B(n, n)); }
var Zu = "ngI18nClosureMode", Kw = "i18n_", eE = "I18N_EXP_", Ju = "\uFFFD", tE = "MSG_";
function Ku(n) { return `${tE}${n}`.toUpperCase(); }
function nE(n) { return new le(n.name, void 0, Oe, void 0, n.sourceSpan); }
function sE(n) {
    let e = n.relativeContextFilePath.replace(/[^A-Za-z0-9]/g, "_").toUpperCase() + "_", t = new Map, s = new Map, r = new Map, i = new Map;
    for (let l of n.units)
        for (let c of l.ops())
            if (c.kind === u.ExtractedAttribute && c.i18nContext !== null) {
                let p = t.get(c.i18nContext) ?? [];
                p.push(c), t.set(c.i18nContext, p);
            }
            else if (c.kind === u.I18nAttributes)
                s.set(c.target, c);
            else if (c.kind === u.I18nExpression && c.usage === Qs.I18nAttribute) {
                let p = r.get(c.target) ?? [];
                p.push(c), r.set(c.target, p);
            }
            else
                c.kind === u.I18nMessage && i.set(c.xref, c);
    let o = new Map, a = new Map;
    for (let l of n.units)
        for (let c of l.create)
            if (c.kind === u.I18nMessage) {
                if (c.messagePlaceholder === null) {
                    let { mainVar: p, statements: h } = mf(n, e, i, c);
                    if (c.i18nBlock !== null) {
                        let m = n.addConst(p, h);
                        a.set(c.i18nBlock, m);
                    }
                    else {
                        n.constsInitializers.push(...h), o.set(c.i18nContext, p);
                        let m = t.get(c.i18nContext);
                        if (m !== void 0)
                            for (let v of m)
                                v.expression = p.clone();
                    }
                }
                S.remove(c);
            }
    for (let l of n.units)
        for (let c of l.create)
            if (kn(c)) {
                let p = s.get(c.xref);
                if (p === void 0)
                    continue;
                let h = r.get(c.xref);
                if (h === void 0)
                    throw new Error("AssertionError: Could not find any i18n expressions associated with an I18nAttributes instruction");
                let m = new Set;
                h = h.filter(w => { let C = m.has(w.name); return m.add(w.name), !C; });
                let v = h.flatMap(w => {
                    let C = o.get(w.context);
                    if (C === void 0)
                        throw new Error("AssertionError: Could not find i18n expression's value");
                    return [d(w.name), C];
                });
                p.i18nAttributesConfig = n.addConst(new ft(v));
            }
    for (let l of n.units)
        for (let c of l.create)
            if (c.kind === u.I18nStart) {
                let p = a.get(c.root);
                if (p === void 0)
                    throw new Error("AssertionError: Could not find corresponding i18n block index for an i18n message op; was an i18n message incorrectly assumed to correspond to an attribute?");
                c.messageIndex = p;
            }
}
function mf(n, e, t, s) {
    let r = [], i = new Map;
    for (let c of s.subMessages) {
        let p = t.get(c), { mainVar: h, statements: m } = mf(n, e, t, p);
        r.push(...m);
        let v = i.get(p.messagePlaceholder) ?? [];
        v.push(h), i.set(p.messagePlaceholder, v);
    }
    rE(s, i), s.params = new Map([...s.params.entries()].sort());
    let o = N(n.pool.uniqueName(Kw)), a = aE(n.pool, s.message.id, e, n.i18nUseExternalIds), l;
    if (s.needsPostprocessing || s.postprocessingParams.size > 0) {
        let c = Object.fromEntries([...s.postprocessingParams.entries()].sort()), p = bc(c, !1), h = [];
        s.postprocessingParams.size > 0 && h.push(To(p, !0)), l = m => y(f.i18nPostprocess).callFn([m, ...h]);
    }
    return r.push(...iE(s.message, o, a, s.params, l)), { mainVar: o, statements: r };
}
function rE(n, e) {
    for (let [t, s] of e)
        s.length === 1 ? n.params.set(t, s[0]) : (n.params.set(t, d(`${Ju}${eE}${t}${Ju}`)), n.postprocessingParams.set(t, R(s)));
}
function iE(n, e, t, s, r) { let i = Object.fromEntries(s), o = [nE(e), pi(oE(), zw(e, n, t, i), Yw(e, n, bc(i, !1)))]; return r && o.push(new tt(e.set(r(e)))), o; }
function oE() { return Xs(N(Zu)).notIdentical(d("undefined", Jo)).and(N(Zu)); }
function aE(n, e, t, s) {
    let r, i = t;
    if (s) {
        let o = Ku("EXTERNAL_"), a = n.uniqueName(i);
        r = `${o}${fr(e)}$$${a}`;
    }
    else {
        let o = Ku(i);
        r = n.uniqueName(o);
    }
    return N(r);
}
function lE(n) {
    for (let e of n.units) {
        let t = null, s = null, r = new Map, i = new Map, o = new Map;
        for (let a of e.create)
            switch (a.kind) {
                case u.I18nStart:
                    if (a.context === null)
                        throw Error("I18n op should have its context set.");
                    t = a;
                    break;
                case u.I18nEnd:
                    t = null;
                    break;
                case u.IcuStart:
                    if (a.context === null)
                        throw Error("Icu op should have its context set.");
                    s = a;
                    break;
                case u.IcuEnd:
                    s = null;
                    break;
                case u.Text:
                    if (t !== null)
                        if (r.set(a.xref, t), i.set(a.xref, s), a.icuPlaceholder !== null) {
                            let l = qg(n.allocateXrefId(), a.icuPlaceholder, [a.initialValue]);
                            S.replace(a, l), o.set(a.xref, l);
                        }
                        else
                            S.remove(a);
                    break;
            }
        for (let a of e.update)
            switch (a.kind) {
                case u.InterpolateText:
                    if (!r.has(a.target))
                        continue;
                    let l = r.get(a.target), c = i.get(a.target), p = o.get(a.target), h = c ? c.context : l.context, m = c ? Xr.Postproccessing : Xr.Creation, v = [];
                    for (let w = 0; w < a.interpolation.expressions.length; w++) {
                        let C = a.interpolation.expressions[w];
                        v.push(zh(h, l.xref, l.xref, l.handle, C, p?.xref ?? null, a.interpolation.i18nPlaceholders[w] ?? null, m, Qs.I18nText, "", C.sourceSpan ?? a.sourceSpan));
                    }
                    S.replaceWithMany(a, v), p !== void 0 && (p.strings = a.interpolation.strings);
                    break;
            }
    }
}
function cE(n) {
    for (let e of n.units)
        for (let t of e.create)
            switch (t.kind) {
                case u.ElementStart:
                case u.ConditionalCreate:
                case u.ConditionalBranchCreate:
                case u.Template:
                    if (!Array.isArray(t.localRefs))
                        throw new Error("AssertionError: expected localRefs to be an array still");
                    if (t.numSlotsUsed += t.localRefs.length, t.localRefs.length > 0) {
                        let s = uE(t.localRefs);
                        t.localRefs = n.addConst(s);
                    }
                    else
                        t.localRefs = null;
                    break;
            }
}
function uE(n) {
    let e = [];
    for (let t of n)
        e.push(d(t.name), d(t.target));
    return R(e);
}
function pE(n) {
    for (let e of n.units) {
        let t = be.HTML;
        for (let s of e.create)
            s.kind === u.ElementStart && s.namespace !== t && (S.insertBefore(Lg(s.namespace), s), t = s.namespace);
    }
}
function hE(n) {
    let e = [], t = 0, s = 0, r = 0, i = 0, o = 0, a = null;
    for (; t < n.length;)
        switch (n.charCodeAt(t++)) {
            case 40:
                s++;
                break;
            case 41:
                s--;
                break;
            case 39:
                r === 0 ? r = 39 : r === 39 && n.charCodeAt(t - 1) !== 92 && (r = 0);
                break;
            case 34:
                r === 0 ? r = 34 : r === 34 && n.charCodeAt(t - 1) !== 92 && (r = 0);
                break;
            case 58:
                !a && s === 0 && r === 0 && (a = gf(n.substring(o, t - 1).trim()), i = t);
                break;
            case 59:
                if (a && i > 0 && s === 0 && r === 0) {
                    let c = n.substring(i, t - 1).trim();
                    e.push(a, c), o = t, i = 0, a = null;
                }
                break;
        }
    if (a && i) {
        let l = n.slice(i).trim();
        e.push(a, l);
    }
    return e;
}
function gf(n) { return n.replace(/[a-z][A-Z]/g, e => e.charAt(0) + "-" + e.charAt(1)).toLowerCase(); }
function fE(n) {
    let e = new Map;
    for (let t of n.units)
        for (let s of t.create)
            kn(s) && e.set(s.xref, s);
    for (let t of n.units)
        for (let s of t.create)
            if (s.kind === u.ExtractedAttribute && s.bindingKind === I.Attribute && Gh(s.expression)) {
                let r = e.get(s.target);
                if (r !== void 0 && (r.kind === u.Template || r.kind === u.ConditionalCreate || r.kind === u.ConditionalBranchCreate) && r.templateKind === Ve.Structural)
                    continue;
                if (s.name === "style") {
                    let i = hE(s.expression.value);
                    for (let o = 0; o < i.length - 1; o += 2)
                        S.insertBefore(lt(s.target, I.StyleProperty, null, i[o], d(i[o + 1]), null, null, te.STYLE), s);
                    S.remove(s);
                }
                else if (s.name === "class") {
                    let i = s.expression.value.trim().split(/\s+/g);
                    for (let o of i)
                        S.insertBefore(lt(s.target, I.ClassName, null, o, null, null, null, te.NONE), s);
                    S.remove(s);
                }
            }
}
function dE(n) { lr(n.root, n.componentName, { index: 0 }, n.compatibility === nt.TemplateDefinitionBuilder); }
function lr(n, e, t, s) {
    n.fnName === null && (n.fnName = n.job.pool.uniqueName(fr(`${e}_${n.job.fnSuffix}`), !1));
    let r = new Map;
    for (let i of n.ops())
        switch (i.kind) {
            case u.Property:
            case u.DomProperty:
                i.isLegacyAnimationTrigger && (i.name = "@" + i.name);
                break;
            case u.Listener:
                if (i.handlerFnName !== null)
                    break;
                if (!i.hostListener && i.targetSlot.slot === null)
                    throw new Error("Expected a slot to be assigned");
                let o = "";
                i.isLegacyAnimationListener && (i.name = `@${i.name}.${i.legacyAnimationPhase}`, o = "animation"), i.hostListener ? i.handlerFnName = `${e}_${o}${i.name}_HostBindingHandler` : i.handlerFnName = `${n.fnName}_${i.tag.replace("-", "_")}_${o}${i.name}_${i.targetSlot.slot}_listener`, i.handlerFnName = fr(i.handlerFnName);
                break;
            case u.TwoWayListener:
                if (i.handlerFnName !== null)
                    break;
                if (i.targetSlot.slot === null)
                    throw new Error("Expected a slot to be assigned");
                i.handlerFnName = fr(`${n.fnName}_${i.tag.replace("-", "_")}_${i.name}_${i.targetSlot.slot}_listener`);
                break;
            case u.Variable:
                r.set(i.xref, mE(n, i.variable, t));
                break;
            case u.RepeaterCreate:
                if (!(n instanceof ct))
                    throw new Error("AssertionError: must be compiling a component");
                if (i.handle.slot === null)
                    throw new Error("Expected slot to be assigned");
                if (i.emptyView !== null) {
                    let c = n.job.views.get(i.emptyView);
                    lr(c, `${e}_${i.functionNameSuffix}Empty_${i.handle.slot + 2}`, t, s);
                }
                lr(n.job.views.get(i.xref), `${e}_${i.functionNameSuffix}_${i.handle.slot + 1}`, t, s);
                break;
            case u.Projection:
                if (!(n instanceof ct))
                    throw new Error("AssertionError: must be compiling a component");
                if (i.handle.slot === null)
                    throw new Error("Expected slot to be assigned");
                if (i.fallbackView !== null) {
                    let c = n.job.views.get(i.fallbackView);
                    lr(c, `${e}_ProjectionFallback_${i.handle.slot}`, t, s);
                }
                break;
            case u.ConditionalCreate:
            case u.ConditionalBranchCreate:
            case u.Template:
                if (!(n instanceof ct))
                    throw new Error("AssertionError: must be compiling a component");
                let a = n.job.views.get(i.xref);
                if (i.handle.slot === null)
                    throw new Error("Expected slot to be assigned");
                let l = i.functionNameSuffix.length === 0 ? "" : `_${i.functionNameSuffix}`;
                lr(a, `${e}${l}_${i.handle.slot}`, t, s);
                break;
            case u.StyleProp:
                i.name = gE(i.name), s && (i.name = ep(i.name));
                break;
            case u.ClassProp:
                s && (i.name = ep(i.name));
                break;
        }
    for (let i of n.ops())
        xe(i, o => {
            if (!(!(o instanceof Zt) || o.name !== null)) {
                if (!r.has(o.xref))
                    throw new Error(`Variable ${o.xref} not yet named`);
                o.name = r.get(o.xref);
            }
        });
}
function mE(n, e, t) {
    if (e.name === null)
        switch (e.kind) {
            case Se.Context:
                e.name = `ctx_r${t.index++}`;
                break;
            case Se.Identifier:
                if (n.job.compatibility === nt.TemplateDefinitionBuilder) {
                    let s = e.identifier === "ctx" ? "i" : "";
                    e.name = `${e.identifier}_${s}r${++t.index}`;
                }
                else
                    e.name = `${e.identifier}_i${t.index++}`;
                break;
            default:
                e.name = `_r${++t.index}`;
                break;
        }
    return e.name;
}
function gE(n) { return n.startsWith("--") ? n : gf(n); }
function ep(n) { let e = n.indexOf("!important"); return e > -1 ? n.substring(0, e) : n; }
function vE(n) {
    for (let e of n.units) {
        for (let t of e.create)
            (t.kind === u.Listener || t.kind === u.TwoWayListener) && tp(t.handlerOps);
        tp(e.update);
    }
}
function tp(n) {
    for (let e of n) {
        if (e.kind !== u.Statement || !(e.statement instanceof tt) || !(e.statement.expr instanceof vo))
            continue;
        let t = e.statement.expr.steps, s = !0;
        for (let r = e.next; r.kind !== u.ListEnd && s; r = r.next)
            xe(r, (i, o) => {
                if (!qt(i))
                    return i;
                if (s && !(o & z.InChildOperation))
                    switch (i.kind) {
                        case k.NextContext:
                            i.steps += t, S.remove(e), s = !1;
                            break;
                        case k.GetCurrentView:
                        case k.Reference:
                        case k.ContextLetReference:
                            s = !1;
                            break;
                    }
            });
    }
}
var wE = "ng-container";
function EE(n) {
    for (let e of n.units) {
        let t = new Set;
        for (let s of e.create)
            s.kind === u.ElementStart && s.tag === wE && (s.kind = u.ContainerStart, t.add(s.xref)), s.kind === u.ElementEnd && t.has(s.xref) && (s.kind = u.ContainerEnd);
    }
}
function SE(n, e) {
    let t = n.get(e);
    if (t === void 0)
        throw new Error("All attributes should have an element-like target.");
    return t;
}
function xE(n) {
    let e = new Map;
    for (let t of n.units)
        for (let s of t.create)
            kn(s) && e.set(s.xref, s);
    for (let t of n.units)
        for (let s of t.create)
            (s.kind === u.ElementStart || s.kind === u.ContainerStart) && s.nonBindable && S.insertAfter(Dg(s.xref), s), (s.kind === u.ElementEnd || s.kind === u.ContainerEnd) && SE(e, s.xref).nonBindable && S.insertBefore(Pg(s.xref), s);
}
function zt(n) { return e => e.kind === n; }
function gr(n, e) { return t => t.kind === n && e === t.expression instanceof ce; }
function yE(n) { return n.kind === u.Listener && !(n.hostListener && n.isLegacyAnimationListener) || n.kind === u.TwoWayListener; }
function CE(n) { return (n.kind === u.Property || n.kind === u.TwoWayProperty) && !(n.expression instanceof ce); }
var AE = [{ test: n => n.kind === u.Listener && n.hostListener && n.isLegacyAnimationListener }, { test: yE }], _E = [{ test: zt(u.StyleMap), transform: Lo }, { test: zt(u.ClassMap), transform: Lo }, { test: zt(u.StyleProp) }, { test: zt(u.ClassProp) }, { test: gr(u.Attribute, !0) }, { test: gr(u.Property, !0) }, { test: CE }, { test: gr(u.Attribute, !1) }], TE = [{ test: gr(u.DomProperty, !0) }, { test: gr(u.DomProperty, !1) }, { test: zt(u.Attribute) }, { test: zt(u.StyleMap), transform: Lo }, { test: zt(u.ClassMap), transform: Lo }, { test: zt(u.StyleProp) }, { test: zt(u.ClassProp) }], np = new Set([u.Listener, u.TwoWayListener, u.StyleMap, u.ClassMap, u.StyleProp, u.ClassProp, u.Property, u.TwoWayProperty, u.DomProperty, u.Attribute]);
function bE(n) {
    for (let e of n.units) {
        sp(e.create, AE);
        let t = e.job.kind === A.Host ? TE : _E;
        sp(e.update, t);
    }
}
function sp(n, e) {
    let t = [], s = null;
    for (let r of n) {
        let i = Yr(r) ? r.target : null;
        (!np.has(r.kind) || i !== s && s !== null && i !== null) && (S.insertBefore(rp(t, e), r), t = [], s = null), np.has(r.kind) && (t.push(r), S.remove(r), s = i ?? s);
    }
    n.push(rp(t, e));
}
function rp(n, e) {
    let t = Array.from(e, () => new Array);
    for (let s of n) {
        let r = e.findIndex(i => i.test(s));
        t[r].push(s);
    }
    return t.flatMap((s, r) => { let i = e[r].transform; return i ? i(s) : s; });
}
function Lo(n) { return n.slice(n.length - 1); }
function kE(n) {
    for (let e of n.units) {
        let t = Oc(e);
        for (let s of e.ops())
            switch (s.kind) {
                case u.Binding:
                    let r = NE(t, s.target);
                    IE(s.name) && r.kind === u.Projection && S.remove(s);
                    break;
            }
    }
}
function IE(n) { return n.toLowerCase() === "select"; }
function NE(n, e) {
    let t = n.get(e);
    if (t === void 0)
        throw new Error("All attributes should have an slottable target.");
    return t;
}
function DE(n) {
    for (let e of n.units)
        PE(e);
}
function PE(n) {
    for (let e of n.update)
        xe(e, (t, s) => {
            if (qt(t) && t.kind === k.PipeBinding) {
                if (s & z.InChildOperation)
                    throw new Error("AssertionError: pipe bindings should not appear in child expressions");
                if (n.job.compatibility) {
                    if (e.target == null)
                        throw new Error("AssertionError: expected slot handle to be assigned for pipe creation");
                    LE(n, e.target, t);
                }
                else
                    n.create.push(Kh(t.target, t.targetSlot, t.name));
            }
        });
}
function LE(n, e, t) {
    for (let s = n.create.head.next; s.kind !== u.ListEnd; s = s.next) {
        if (!Js(s) || s.xref !== e)
            continue;
        for (; s.next.kind === u.Pipe;)
            s = s.next;
        let r = Kh(t.target, t.targetSlot, t.name);
        S.insertBefore(r, s.next);
        return;
    }
    throw new Error(`AssertionError: unable to find insertion point for pipe ${t.name}`);
}
function BE(n) {
    for (let e of n.units)
        for (let t of e.update)
            fe(t, s => !(s instanceof is) || s.args.length <= 4 ? s : new Jr(s.target, s.targetSlot, s.name, R(s.args), s.args.length), z.None);
}
function ME(n) { vf(n.root, 0); }
function vf(n, e) {
    let t = null;
    for (let s of n.create)
        switch (s.kind) {
            case u.I18nStart:
                s.subTemplateIndex = e === 0 ? null : e, t = s;
                break;
            case u.I18nEnd:
                t.subTemplateIndex === null && (e = 0), t = null;
                break;
            case u.ConditionalCreate:
            case u.ConditionalBranchCreate:
            case u.Template:
                e = ga(n.job.views.get(s.xref), t, s.i18nPlaceholder, e);
                break;
            case u.RepeaterCreate:
                let r = n.job.views.get(s.xref);
                e = ga(r, t, s.i18nPlaceholder, e), s.emptyView !== null && (e = ga(n.job.views.get(s.emptyView), t, s.emptyI18nPlaceholder, e));
                break;
        }
    return e;
}
function ga(n, e, t, s) {
    if (t !== void 0) {
        if (e === null)
            throw Error("Expected template with i18n placeholder to be in an i18n block.");
        s++, RE(n, e);
    }
    return vf(n, s);
}
function RE(n, e) {
    if (n.create.head.next?.kind !== u.I18nStart) {
        let t = n.job.allocateXrefId();
        S.insertAfter(ra(t, e.message, e.root, null), n.create.head), S.insertBefore(ia(t, null), n.create.tail);
    }
}
function FE(n) {
    for (let e of n.units)
        for (let t of e.ops())
            xe(t, s => {
                if (!(s instanceof rs) || s.body === null)
                    return;
                let r = new Vl(s.args.length);
                s.fn = n.pool.getSharedConstant(r, s.body), s.body = null;
            });
}
var Vl = class extends xs {
    numArgs;
    constructor(e) { super(), this.numArgs = e; }
    keyOf(e) { return e instanceof Vs ? `param(${e.index})` : super.keyOf(e); }
    toSharedConstantDeclaration(e, t) {
        let s = [];
        for (let i = 0; i < this.numArgs; i++)
            s.push(new Z("a" + i));
        let r = T(t, i => i instanceof Vs ? N("a" + i.index) : i, z.None);
        return new le(e, new En(s, r), void 0, ae.Final);
    }
};
function $E(n) {
    for (let e of n.units)
        for (let t of e.update)
            fe(t, (s, r) => r & z.InChildOperation ? s : s instanceof ft ? OE(s) : s instanceof bt ? VE(s) : s, z.None);
}
function OE(n) {
    let e = [], t = [];
    for (let s of n.entries)
        if (s.isConstant())
            e.push(s);
        else {
            let r = t.length;
            t.push(s), e.push(new Vs(r));
        }
    return new rs(R(e), t);
}
function VE(n) {
    let e = [], t = [];
    for (let s of n.entries)
        if (s.value.isConstant())
            e.push(s);
        else {
            let r = t.length;
            t.push(s.value), e.push(new Zn(s.key, new Vs(r), s.quoted));
        }
    return new rs(pe(e), t);
}
function qE(n, e, t, s, r) { return Ln(f.element, n, e, t, s, r); }
function UE(n, e, t, s, r) { return Ln(f.elementStart, n, e, t, s, r); }
function Ln(n, e, t, s, r, i) { let o = [d(e)]; return t !== null && o.push(d(t)), r !== null ? o.push(d(s), d(r)) : s !== null && o.push(d(s)), O(n, o, i); }
function wf(n, e, t, s, r, i, o, a, l) {
    let c = [d(e), t, d(s), d(r), d(i), d(o)];
    for (a !== null && (c.push(d(a)), c.push(y(f.templateRefExtractor))); c[c.length - 1].isEquivalent(Sn);)
        c.pop();
    return O(n, c, l);
}
function Ef(n, e, t, s, r) { let i = [d(e)]; return t instanceof ce ? i.push(mi(t, r)) : i.push(t), s !== null && i.push(s), O(n, i, r); }
function HE(n) { return O(f.elementEnd, [], n); }
function WE(n, e, t, s) { return Ln(f.elementContainerStart, n, null, e, t, s); }
function jE(n, e, t, s) { return Ln(f.elementContainer, n, null, e, t, s); }
function zE() { return O(f.elementContainerEnd, [], null); }
function GE(n, e, t, s, r, i, o, a) { return wf(f.templateCreate, n, e, t, s, r, i, o, a); }
function XE() { return O(f.disableBindings, [], null); }
function YE() { return O(f.enableBindings, [], null); }
function QE(n, e, t, s, r) { let i = [d(n), e]; return t !== null && i.push(y(t)), O(s ? f.syntheticHostListener : f.listener, i, r); }
function ip(n, e) { return y(f.twoWayBindingSet).callFn([n, e]); }
function ZE(n, e, t) { return O(f.twoWayListener, [d(n), e], t); }
function JE(n, e) { return O(f.pipe, [d(n), d(e)], null); }
function KE() { return O(f.namespaceHTML, [], null); }
function eS() { return O(f.namespaceSVG, [], null); }
function tS() { return O(f.namespaceMathML, [], null); }
function nS(n, e) { return O(f.advance, n > 1 ? [d(n)] : [], e); }
function sS(n) { return y(f.reference).callFn([d(n)]); }
function rS(n) { return y(f.nextContext).callFn(n === 1 ? [] : [d(n)]); }
function iS() { return y(f.getCurrentView).callFn([]); }
function oS(n) { return y(f.restoreView).callFn([n]); }
function aS(n) { return y(f.resetView).callFn([n]); }
function lS(n, e, t) { let s = [d(n, null)]; return e !== "" && s.push(d(e)), O(f.text, s, t); }
function cS(n, e, t, s, r, i, o, a, l, c, p) {
    let h = [d(n), d(e), t ?? d(null), d(s), d(r), d(i), o ?? d(null), a ?? d(null), l ? y(f.deferEnableTimerScheduling) : d(null), d(p)], m;
    for (; (m = h[h.length - 1]) !== null && m instanceof Ee && m.value === null;)
        h.pop();
    return O(f.defer, h, c);
}
var uS = new Map([[Q.Idle, { none: f.deferOnIdle, prefetch: f.deferPrefetchOnIdle, hydrate: f.deferHydrateOnIdle }], [Q.Immediate, { none: f.deferOnImmediate, prefetch: f.deferPrefetchOnImmediate, hydrate: f.deferHydrateOnImmediate }], [Q.Timer, { none: f.deferOnTimer, prefetch: f.deferPrefetchOnTimer, hydrate: f.deferHydrateOnTimer }], [Q.Hover, { none: f.deferOnHover, prefetch: f.deferPrefetchOnHover, hydrate: f.deferHydrateOnHover }], [Q.Interaction, { none: f.deferOnInteraction, prefetch: f.deferPrefetchOnInteraction, hydrate: f.deferHydrateOnInteraction }], [Q.Viewport, { none: f.deferOnViewport, prefetch: f.deferPrefetchOnViewport, hydrate: f.deferHydrateOnViewport }], [Q.Never, { none: f.deferHydrateNever, prefetch: f.deferHydrateNever, hydrate: f.deferHydrateNever }]]);
function pS(n, e, t, s) {
    let r = uS.get(n)?.[t];
    if (r === void 0)
        throw new Error(`Unable to determine instruction for trigger ${n}`);
    return O(r, e.map(i => d(i)), s);
}
function hS(n) { return O(f.projectionDef, n ? [n] : [], null); }
function fS(n, e, t, s, r, i, o) { let a = [d(n)]; return (e !== 0 || t !== null || s !== null) && (a.push(d(e)), t !== null && a.push(t), s !== null && (t === null && a.push(d(null)), a.push(N(s), d(r), d(i)))), O(f.projection, a, o); }
function dS(n, e, t, s) { let r = [d(n), d(e)]; return t !== null && r.push(d(t)), O(f.i18nStart, r, s); }
function mS(n, e, t, s, r, i, o, a) {
    let l = [d(n), e, d(t), d(s), d(r), d(i)];
    for (o !== null && (l.push(d(o)), l.push(y(f.templateRefExtractor))); l[l.length - 1].isEquivalent(Sn);)
        l.pop();
    return O(f.conditionalCreate, l, a);
}
function gS(n, e, t, s, r, i, o, a) {
    let l = [d(n), e, d(t), d(s), d(r), d(i)];
    for (o !== null && (l.push(d(o)), l.push(y(f.templateRefExtractor))); l[l.length - 1].isEquivalent(Sn);)
        l.pop();
    return O(f.conditionalBranchCreate, l, a);
}
function vS(n, e, t, s, r, i, o, a, l, c, p, h, m, v) { let w = [d(n), N(e), d(t), d(s), d(r), d(i), o]; return (a || l !== null) && (w.push(d(a)), l !== null && (w.push(N(l), d(c), d(p)), (h !== null || m !== null) && w.push(d(h)), m !== null && w.push(d(m)))), O(f.repeaterCreate, w, v); }
function wS(n, e) { return O(f.repeater, [n], e); }
function ES(n, e, t) { return n === "prefetch" ? O(f.deferPrefetchWhen, [e], t) : n === "hydrate" ? O(f.deferHydrateWhen, [e], t) : O(f.deferWhen, [e], t); }
function SS(n, e) { return O(f.declareLet, [d(n)], e); }
function xS(n, e) { return y(f.storeLet).callFn([n], e); }
function yS(n) { return y(f.readContextLet).callFn([d(n)]); }
function CS(n, e, t, s) { let r = [d(n), d(e)]; return t && r.push(d(t)), O(f.i18n, r, s); }
function AS(n) { return O(f.i18nEnd, [], n); }
function _S(n, e) { let t = [d(n), d(e)]; return O(f.i18nAttributes, t, null); }
function TS(n, e, t, s) { return Ef(f.property, n, e, t, s); }
function bS(n, e, t, s) { let r = [d(n), e]; return t !== null && r.push(t), O(f.twoWayProperty, r, s); }
function kS(n, e, t, s, r) { let i = [d(n)]; return e instanceof ce ? i.push(mi(e, r)) : i.push(e), (t !== null || s !== null) && i.push(t ?? d(null)), s !== null && i.push(d(s)), O(f.attribute, i, null); }
function IS(n, e, t, s) { let r = [d(n)]; return e instanceof ce ? r.push(mi(e, s)) : r.push(e), t !== null && r.push(d(t)), O(f.styleProp, r, s); }
function NS(n, e, t) { return O(f.classProp, [d(n), e], t); }
function DS(n, e) { let t = n instanceof ce ? mi(n, e) : n; return O(f.styleMap, [t], e); }
function PS(n, e) { let t = n instanceof ce ? mi(n, e) : n; return O(f.classMap, [t], e); }
function LS(n, e, t, s, r) { return Ln(f.domElement, n, e, t, s, r); }
function BS(n, e, t, s, r) { return Ln(f.domElementStart, n, e, t, s, r); }
function MS(n) { return O(f.domElementEnd, [], n); }
function RS(n, e, t, s) { return Ln(f.domElementContainerStart, n, null, e, t, s); }
function FS(n, e, t, s) { return Ln(f.domElementContainer, n, null, e, t, s); }
function $S() { return O(f.domElementContainerEnd, [], null); }
function OS(n, e, t, s) { let r = [d(n), e]; return t !== null && r.push(y(t)), O(f.domListener, r, s); }
function VS(n, e, t, s, r, i, o, a) { return wf(f.domTemplate, n, e, t, s, r, i, o, a); }
var op = [f.pipeBind1, f.pipeBind2, f.pipeBind3, f.pipeBind4];
function qS(n, e, t) {
    if (t.length < 1 || t.length > op.length)
        throw new Error("pipeBind() argument count out of bounds");
    let s = op[t.length - 1];
    return y(s).callFn([d(n), d(e), ...t]);
}
function US(n, e, t) { return y(f.pipeBindV).callFn([d(n), d(e), t]); }
function HS(n, e, t) { let s = Sf(n, e); return KS(QS, [], s, [], t); }
function WS(n, e) { return O(f.i18nExp, [n], e); }
function jS(n, e) { return O(f.i18nApply, [d(n)], e); }
function ap(n, e, t, s) { return Ef(f.domProperty, n, e, t, s); }
function zS(n, e, t) { return O(f.syntheticHostProperty, [d(n), e], t); }
function GS(n, e, t) { return Vc(JS, [d(n), e], t, [], null); }
function XS(n, e) { return O(f.attachSourceLocations, [d(n), e], null); }
function Sf(n, e) {
    if (n.length < 1 || e.length !== n.length - 1)
        throw new Error("AssertionError: expected specific shape of args for strings/expressions in interpolation");
    let t = [];
    if (e.length === 1 && n[0] === "" && n[1] === "")
        t.push(e[0]);
    else {
        let s;
        for (s = 0; s < e.length; s++)
            t.push(d(n[s]), e[s]);
        t.push(d(n[s]));
    }
    return t;
}
function mi(n, e) { let t = Sf(n.strings, n.expressions); return Vc(ZS, [], t, [], e); }
function O(n, e, t) { let s = y(n).callFn(e, t); return It(new tt(s, t)); }
function YS(n, e, t) { let s = [n]; return e !== null && s.push(e), O(f.conditional, s, t); }
var QS = { constant: [f.textInterpolate, f.textInterpolate1, f.textInterpolate2, f.textInterpolate3, f.textInterpolate4, f.textInterpolate5, f.textInterpolate6, f.textInterpolate7, f.textInterpolate8], variable: f.textInterpolateV, mapping: n => {
        if (n % 2 === 0)
            throw new Error("Expected odd number of arguments");
        return (n - 1) / 2;
    } }, ZS = { constant: [f.interpolate, f.interpolate1, f.interpolate2, f.interpolate3, f.interpolate4, f.interpolate5, f.interpolate6, f.interpolate7, f.interpolate8], variable: f.interpolateV, mapping: n => {
        if (n % 2 === 0)
            throw new Error("Expected odd number of arguments");
        return (n - 1) / 2;
    } }, JS = { constant: [f.pureFunction0, f.pureFunction1, f.pureFunction2, f.pureFunction3, f.pureFunction4, f.pureFunction5, f.pureFunction6, f.pureFunction7, f.pureFunction8], variable: f.pureFunctionV, mapping: n => n };
function Vc(n, e, t, s, r) {
    let i = n.mapping(t.length), o = t.at(-1);
    if (s.length === 0 && t.length > 1 && o instanceof Ee && o.value === "" && t.pop(), i < n.constant.length)
        return y(n.constant[i]).callFn([...e, ...t, ...s], r);
    if (n.variable !== null)
        return y(n.variable).callFn([...e, R(t), ...s], r);
    throw new Error("AssertionError: unable to call variadic function");
}
function KS(n, e, t, s, r) { return It(Vc(n, e, t, s, r).toStmt()); }
var e2 = new Map([["window", f.resolveWindow], ["document", f.resolveDocument], ["body", f.resolveBody]]), lp = new Map([["class", "className"], ["for", "htmlFor"], ["formaction", "formAction"], ["innerHtml", "innerHTML"], ["readonly", "readOnly"], ["tabindex", "tabIndex"]]);
function t2(n) {
    for (let e of n.units)
        n2(e, e.create), qc(e, e.update);
}
function n2(n, e) {
    for (let t of e)
        switch (fe(t, xf, z.None), t.kind) {
            case u.Text:
                S.replace(t, lS(t.handle.slot, t.initialValue, t.sourceSpan));
                break;
            case u.ElementStart:
                S.replace(t, n.job.mode === je.DomOnly ? BS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.startSourceSpan) : UE(t.handle.slot, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
                break;
            case u.Element:
                S.replace(t, n.job.mode === je.DomOnly ? LS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.wholeSourceSpan) : qE(t.handle.slot, t.tag, t.attributes, t.localRefs, t.wholeSourceSpan));
                break;
            case u.ElementEnd:
                S.replace(t, n.job.mode === je.DomOnly ? MS(t.sourceSpan) : HE(t.sourceSpan));
                break;
            case u.ContainerStart:
                S.replace(t, n.job.mode === je.DomOnly ? RS(t.handle.slot, t.attributes, t.localRefs, t.startSourceSpan) : WE(t.handle.slot, t.attributes, t.localRefs, t.startSourceSpan));
                break;
            case u.Container:
                S.replace(t, n.job.mode === je.DomOnly ? FS(t.handle.slot, t.attributes, t.localRefs, t.wholeSourceSpan) : jE(t.handle.slot, t.attributes, t.localRefs, t.wholeSourceSpan));
                break;
            case u.ContainerEnd:
                S.replace(t, n.job.mode === je.DomOnly ? $S() : zE());
                break;
            case u.I18nStart:
                S.replace(t, dS(t.handle.slot, t.messageIndex, t.subTemplateIndex, t.sourceSpan));
                break;
            case u.I18nEnd:
                S.replace(t, AS(t.sourceSpan));
                break;
            case u.I18n:
                S.replace(t, CS(t.handle.slot, t.messageIndex, t.subTemplateIndex, t.sourceSpan));
                break;
            case u.I18nAttributes:
                if (t.i18nAttributesConfig === null)
                    throw new Error("AssertionError: i18nAttributesConfig was not set");
                S.replace(t, _S(t.handle.slot, t.i18nAttributesConfig));
                break;
            case u.Template:
                if (!(n instanceof ct))
                    throw new Error("AssertionError: must be compiling a component");
                if (Array.isArray(t.localRefs))
                    throw new Error("AssertionError: local refs array should have been extracted into a constant");
                let s = n.job.views.get(t.xref);
                S.replace(t, t.templateKind === Ve.Block || n.job.mode === je.DomOnly ? VS(t.handle.slot, N(s.fnName), s.decls, s.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan) : GE(t.handle.slot, N(s.fnName), s.decls, s.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
                break;
            case u.DisableBindings:
                S.replace(t, XE());
                break;
            case u.EnableBindings:
                S.replace(t, YE());
                break;
            case u.Pipe:
                S.replace(t, JE(t.handle.slot, t.name));
                break;
            case u.DeclareLet:
                S.replace(t, SS(t.handle.slot, t.sourceSpan));
                break;
            case u.Listener:
                let r = cp(n, t.handlerFnName, t.handlerOps, t.consumesDollarEvent), i = t.eventTarget ? e2.get(t.eventTarget) : null;
                if (i === void 0)
                    throw new Error(`Unexpected global target '${t.eventTarget}' defined for '${t.name}' event. Supported list of global targets: window,document,body.`);
                S.replace(t, n.job.mode === je.DomOnly && !t.hostListener && !t.isLegacyAnimationListener ? OS(t.name, r, i, t.sourceSpan) : QE(t.name, r, i, t.hostListener && t.isLegacyAnimationListener, t.sourceSpan));
                break;
            case u.TwoWayListener:
                S.replace(t, ZE(t.name, cp(n, t.handlerFnName, t.handlerOps, !0), t.sourceSpan));
                break;
            case u.Variable:
                if (t.variable.name === null)
                    throw new Error(`AssertionError: unnamed variable ${t.xref}`);
                S.replace(t, It(new le(t.variable.name, t.initializer, void 0, ae.Final)));
                break;
            case u.Namespace:
                switch (t.active) {
                    case be.HTML:
                        S.replace(t, KE());
                        break;
                    case be.SVG:
                        S.replace(t, eS());
                        break;
                    case be.Math:
                        S.replace(t, tS());
                        break;
                }
                break;
            case u.Defer:
                let o = !!t.loadingMinimumTime || !!t.loadingAfterTime || !!t.placeholderMinimumTime;
                S.replace(t, cS(t.handle.slot, t.mainSlot.slot, t.resolverFn, t.loadingSlot?.slot ?? null, t.placeholderSlot?.slot ?? null, t.errorSlot?.slot ?? null, t.loadingConfig, t.placeholderConfig, o, t.sourceSpan, t.flags));
                break;
            case u.DeferOn:
                let a = [];
                switch (t.trigger.kind) {
                    case Q.Never:
                    case Q.Idle:
                    case Q.Immediate: break;
                    case Q.Timer:
                        a = [t.trigger.delay];
                        break;
                    case Q.Interaction:
                    case Q.Hover:
                    case Q.Viewport:
                        t.modifier === "hydrate" ? a = [] : (a = [t.trigger.targetSlot?.slot ?? null], t.trigger.targetSlotViewSteps !== 0 && a.push(t.trigger.targetSlotViewSteps));
                        break;
                    default: throw new Error(`AssertionError: Unsupported reification of defer trigger kind ${t.trigger.kind}`);
                }
                S.replace(t, pS(t.trigger.kind, a, t.modifier, t.sourceSpan));
                break;
            case u.ProjectionDef:
                S.replace(t, hS(t.def));
                break;
            case u.Projection:
                if (t.handle.slot === null)
                    throw new Error("No slot was assigned for project instruction");
                let l = null, c = null, p = null;
                if (t.fallbackView !== null) {
                    if (!(n instanceof ct))
                        throw new Error("AssertionError: must be compiling a component");
                    let P = n.job.views.get(t.fallbackView);
                    if (P === void 0)
                        throw new Error("AssertionError: projection had fallback view xref, but fallback view was not found");
                    if (P.fnName === null || P.decls === null || P.vars === null)
                        throw new Error("AssertionError: expected projection fallback view to have been named and counted");
                    l = P.fnName, c = P.decls, p = P.vars;
                }
                S.replace(t, fS(t.handle.slot, t.projectionSlotIndex, t.attributes, l, c, p, t.sourceSpan));
                break;
            case u.ConditionalCreate:
                if (!(n instanceof ct))
                    throw new Error("AssertionError: must be compiling a component");
                if (Array.isArray(t.localRefs))
                    throw new Error("AssertionError: local refs array should have been extracted into a constant");
                let h = n.job.views.get(t.xref);
                S.replace(t, mS(t.handle.slot, N(h.fnName), h.decls, h.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
                break;
            case u.ConditionalBranchCreate:
                if (!(n instanceof ct))
                    throw new Error("AssertionError: must be compiling a component");
                if (Array.isArray(t.localRefs))
                    throw new Error("AssertionError: local refs array should have been extracted into a constant");
                let m = n.job.views.get(t.xref);
                S.replace(t, gS(t.handle.slot, N(m.fnName), m.decls, m.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
                break;
            case u.RepeaterCreate:
                if (t.handle.slot === null)
                    throw new Error("No slot was assigned for repeater instruction");
                if (!(n instanceof ct))
                    throw new Error("AssertionError: must be compiling a component");
                let v = n.job.views.get(t.xref);
                if (v.fnName === null)
                    throw new Error("AssertionError: expected repeater primary view to have been named");
                let w = null, C = null, b = null;
                if (t.emptyView !== null) {
                    let P = n.job.views.get(t.emptyView);
                    if (P === void 0)
                        throw new Error("AssertionError: repeater had empty view xref, but empty view was not found");
                    if (P.fnName === null || P.decls === null || P.vars === null)
                        throw new Error("AssertionError: expected repeater empty view to have been named and counted");
                    w = P.fnName, C = P.decls, b = P.vars;
                }
                S.replace(t, vS(t.handle.slot, v.fnName, t.decls, t.vars, t.tag, t.attributes, s2(n, t), t.usesComponentInstance, w, C, b, t.emptyTag, t.emptyAttributes, t.wholeSourceSpan));
                break;
            case u.SourceLocation:
                let _ = R(t.locations.map(({ targetSlot: P, offset: K, line: ne, column: de }) => {
                    if (P.slot === null)
                        throw new Error("No slot was assigned for source location");
                    return R([d(P.slot), d(K), d(ne), d(de)]);
                }));
                S.replace(t, XS(t.templatePath, _));
                break;
            case u.Statement: break;
            default: throw new Error(`AssertionError: Unsupported reification of create op ${u[t.kind]}`);
        }
}
function qc(n, e) {
    for (let t of e)
        switch (fe(t, xf, z.None), t.kind) {
            case u.Advance:
                S.replace(t, nS(t.delta, t.sourceSpan));
                break;
            case u.Property:
                S.replace(t, n.job.mode === je.DomOnly && !t.isLegacyAnimationTrigger ? ap(lp.get(t.name) ?? t.name, t.expression, t.sanitizer, t.sourceSpan) : TS(t.name, t.expression, t.sanitizer, t.sourceSpan));
                break;
            case u.TwoWayProperty:
                S.replace(t, bS(t.name, t.expression, t.sanitizer, t.sourceSpan));
                break;
            case u.StyleProp:
                S.replace(t, IS(t.name, t.expression, t.unit, t.sourceSpan));
                break;
            case u.ClassProp:
                S.replace(t, NS(t.name, t.expression, t.sourceSpan));
                break;
            case u.StyleMap:
                S.replace(t, DS(t.expression, t.sourceSpan));
                break;
            case u.ClassMap:
                S.replace(t, PS(t.expression, t.sourceSpan));
                break;
            case u.I18nExpression:
                S.replace(t, WS(t.expression, t.sourceSpan));
                break;
            case u.I18nApply:
                S.replace(t, jS(t.handle.slot, t.sourceSpan));
                break;
            case u.InterpolateText:
                S.replace(t, HS(t.interpolation.strings, t.interpolation.expressions, t.sourceSpan));
                break;
            case u.Attribute:
                S.replace(t, kS(t.name, t.expression, t.sanitizer, t.namespace, t.sourceSpan));
                break;
            case u.DomProperty:
                if (t.expression instanceof ce)
                    throw new Error("not yet handled");
                t.isLegacyAnimationTrigger ? S.replace(t, zS(t.name, t.expression, t.sourceSpan)) : S.replace(t, ap(lp.get(t.name) ?? t.name, t.expression, t.sanitizer, t.sourceSpan));
                break;
            case u.Variable:
                if (t.variable.name === null)
                    throw new Error(`AssertionError: unnamed variable ${t.xref}`);
                S.replace(t, It(new le(t.variable.name, t.initializer, void 0, ae.Final)));
                break;
            case u.Conditional:
                if (t.processed === null)
                    throw new Error("Conditional test was not set.");
                S.replace(t, YS(t.processed, t.contextValue, t.sourceSpan));
                break;
            case u.Repeater:
                S.replace(t, wS(t.collection, t.sourceSpan));
                break;
            case u.DeferWhen:
                S.replace(t, ES(t.modifier, t.expr, t.sourceSpan));
                break;
            case u.StoreLet: throw new Error(`AssertionError: unexpected storeLet ${t.declaredName}`);
            case u.Statement: break;
            default: throw new Error(`AssertionError: Unsupported reification of update op ${u[t.kind]}`);
        }
}
function xf(n) {
    if (!qt(n))
        return n;
    switch (n.kind) {
        case k.NextContext: return rS(n.steps);
        case k.Reference: return sS(n.targetSlot.slot + 1 + n.offset);
        case k.LexicalRead: throw new Error(`AssertionError: unresolved LexicalRead of ${n.name}`);
        case k.TwoWayBindingSet: throw new Error("AssertionError: unresolved TwoWayBindingSet");
        case k.RestoreView:
            if (typeof n.view == "number")
                throw new Error("AssertionError: unresolved RestoreView");
            return oS(n.view);
        case k.ResetView: return aS(n.expr);
        case k.GetCurrentView: return iS();
        case k.ReadVariable:
            if (n.name === null)
                throw new Error(`Read of unnamed variable ${n.xref}`);
            return N(n.name);
        case k.ReadTemporaryExpr:
            if (n.name === null)
                throw new Error(`Read of unnamed temporary ${n.xref}`);
            return N(n.name);
        case k.AssignTemporaryExpr:
            if (n.name === null)
                throw new Error(`Assign of unnamed temporary ${n.xref}`);
            return N(n.name).set(n.expr);
        case k.PureFunctionExpr:
            if (n.fn === null)
                throw new Error("AssertionError: expected PureFunctions to have been extracted");
            return GS(n.varOffset, n.fn, n.args);
        case k.PureFunctionParameterExpr: throw new Error("AssertionError: expected PureFunctionParameterExpr to have been extracted");
        case k.PipeBinding: return qS(n.targetSlot.slot, n.varOffset, n.args);
        case k.PipeBindingVariadic: return US(n.targetSlot.slot, n.varOffset, n.args);
        case k.SlotLiteralExpr: return d(n.slot.slot);
        case k.ContextLetReference: return yS(n.targetSlot.slot);
        case k.StoreLet: return xS(n.value, n.sourceSpan);
        case k.TrackContext: return N("this");
        default: throw new Error(`AssertionError: Unsupported reification of ir.Expression kind: ${k[n.kind]}`);
    }
}
function cp(n, e, t, s) {
    qc(n, t);
    let r = [];
    for (let o of t) {
        if (o.kind !== u.Statement)
            throw new Error(`AssertionError: expected reified statements, but found op ${u[o.kind]}`);
        r.push(o.statement);
    }
    let i = [];
    return s && i.push(new Z("$event")), en(i, r, void 0, void 0, e);
}
function s2(n, e) {
    if (e.trackByFn !== null)
        return e.trackByFn;
    let t = [new Z("$index"), new Z("$item")], s;
    if (e.trackByOps === null)
        s = e.usesComponentInstance ? en(t, [new _e(e.track)]) : ie(t, e.track);
    else {
        qc(n, e.trackByOps);
        let r = [];
        for (let i of e.trackByOps) {
            if (i.kind !== u.Statement)
                throw new Error(`AssertionError: expected reified statements, but found op ${u[i.kind]}`);
            r.push(i.statement);
        }
        s = e.usesComponentInstance || r.length !== 1 || !(r[0] instanceof _e) ? en(t, r) : ie(t, r[0].value);
    }
    return e.trackByFn = n.job.pool.getSharedFunctionReference(s, "_forTrack"), e.trackByFn;
}
function r2(n) {
    for (let e of n.units)
        for (let t of e.update)
            switch (t.kind) {
                case u.Attribute:
                case u.Binding:
                case u.ClassProp:
                case u.ClassMap:
                case u.Property:
                case u.StyleProp:
                case u.StyleMap:
                    t.expression instanceof Kr && S.remove(t);
                    break;
            }
}
function i2(n) {
    for (let e of n.units)
        for (let t of e.create)
            switch (t.kind) {
                case u.I18nContext:
                    S.remove(t);
                    break;
                case u.I18nStart:
                    t.context = null;
                    break;
            }
}
function o2(n) {
    for (let e of n.units)
        for (let t of e.update) {
            if (t.kind !== u.Variable || t.variable.kind !== Se.Identifier || !(t.initializer instanceof Qr))
                continue;
            let s = t.variable.identifier, r = t;
            for (; r && r.kind !== u.ListEnd;)
                fe(r, i => i instanceof Ce && i.name === s ? d(void 0) : i, z.None), r = r.prev;
        }
}
function a2(n) {
    for (let e of n.units) {
        let t = new Set;
        for (let s of e.update)
            switch (s.kind) {
                case u.I18nExpression: t.add(s.i18nOwner);
            }
        for (let s of e.create)
            switch (s.kind) {
                case u.I18nAttributes:
                    if (t.has(s.xref))
                        continue;
                    S.remove(s);
            }
    }
}
function l2(n) {
    for (let e of n.units)
        Bo(e, e.create), Bo(e, e.update);
}
function Bo(n, e) {
    let t = new Map;
    t.set(n.xref, N("ctx"));
    for (let s of e)
        switch (s.kind) {
            case u.Variable:
                switch (s.variable.kind) {
                    case Se.Context:
                        t.set(s.variable.view, new Zt(s.xref));
                        break;
                }
                break;
            case u.Listener:
            case u.TwoWayListener:
                Bo(n, s.handlerOps);
                break;
            case u.RepeaterCreate:
                s.trackByOps !== null && Bo(n, s.trackByOps);
                break;
        }
    n === n.job.root && t.set(n.xref, N("ctx"));
    for (let s of e)
        fe(s, r => {
            if (r instanceof Tn) {
                if (!t.has(r.view))
                    throw new Error(`No context found for reference to view ${r.view} from view ${n.xref}`);
                return t.get(r.view);
            }
            else
                return r;
        }, z.None);
}
function c2(n) {
    for (let e of n.units)
        for (let t of e.create)
            if (t.kind === u.Defer) {
                if (t.resolverFn !== null)
                    continue;
                if (t.ownResolverFn !== null) {
                    if (t.handle.slot === null)
                        throw new Error("AssertionError: slot must be assigned before extracting defer deps functions");
                    let s = e.fnName?.replace("_Template", "");
                    t.resolverFn = n.pool.getSharedFunctionReference(t.ownResolverFn, `${s}_Defer_${t.handle.slot}_DepsFn`, !1);
                }
            }
}
function u2(n) {
    for (let e of n.units)
        up(e.create), up(e.update);
}
function up(n) {
    for (let e of n)
        (e.kind === u.Listener || e.kind === u.TwoWayListener) && fe(e, t => t instanceof Ce && t.name === "$event" ? (e.kind === u.Listener && (e.consumesDollarEvent = !0), new et(t.name)) : t, z.InChildOperation);
}
function p2(n) {
    let e = new Map, t = new Map;
    for (let s of n.units)
        for (let r of s.create)
            switch (r.kind) {
                case u.I18nContext:
                    e.set(r.xref, r);
                    break;
                case u.ElementStart:
                    t.set(r.xref, r);
                    break;
            }
    ln(n, n.root, e, t);
}
function ln(n, e, t, s, r) {
    let i = null, o = new Map;
    for (let a of e.create)
        switch (a.kind) {
            case u.I18nStart:
                if (!a.context)
                    throw Error("Could not find i18n context for i18n op");
                i = { i18nBlock: a, i18nContext: t.get(a.context) };
                break;
            case u.I18nEnd:
                i = null;
                break;
            case u.ElementStart:
                if (a.i18nPlaceholder !== void 0) {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    pp(a, i.i18nContext, i.i18nBlock, r), r && a.i18nPlaceholder.closeName && o.set(a.xref, r), r = void 0;
                }
                break;
            case u.ElementEnd:
                let l = s.get(a.xref);
                if (l && l.i18nPlaceholder !== void 0) {
                    if (i === null)
                        throw Error("AssertionError: i18n tag placeholder should only occur inside an i18n block");
                    hp(l, i.i18nContext, i.i18nBlock, o.get(a.xref)), o.delete(a.xref);
                }
                break;
            case u.Projection:
                if (a.i18nPlaceholder !== void 0) {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    pp(a, i.i18nContext, i.i18nBlock, r), hp(a, i.i18nContext, i.i18nBlock, r), r = void 0;
                }
                break;
            case u.ConditionalCreate:
            case u.ConditionalBranchCreate:
            case u.Template:
                let c = n.views.get(a.xref);
                if (a.i18nPlaceholder === void 0)
                    ln(n, c, t, s);
                else {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    a.templateKind === Ve.Structural ? ln(n, c, t, s, a) : (va(n, c, a.handle.slot, a.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), ln(n, c, t, s), wa(n, c, a.handle.slot, a.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0);
                }
                break;
            case u.RepeaterCreate:
                if (r !== void 0)
                    throw Error("AssertionError: Unexpected structural directive associated with @for block");
                let p = a.handle.slot + 1, h = n.views.get(a.xref);
                if (a.i18nPlaceholder === void 0)
                    ln(n, h, t, s);
                else {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    va(n, h, p, a.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), ln(n, h, t, s), wa(n, h, p, a.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
                }
                if (a.emptyView !== null) {
                    let m = a.handle.slot + 2, v = n.views.get(a.emptyView);
                    if (a.emptyI18nPlaceholder === void 0)
                        ln(n, v, t, s);
                    else {
                        if (i === null)
                            throw Error("i18n tag placeholder should only occur inside an i18n block");
                        va(n, v, m, a.emptyI18nPlaceholder, i.i18nContext, i.i18nBlock, r), ln(n, v, t, s), wa(n, v, m, a.emptyI18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
                    }
                }
                break;
        }
}
function pp(n, e, t, s) { let { startName: r, closeName: i } = n.i18nPlaceholder, o = ee.ElementTag | ee.OpenTag, a = n.handle.slot; s !== void 0 && (o |= ee.TemplateTag, a = { element: a, template: s.handle.slot }), i || (o |= ee.CloseTag), Gs(e.params, r, a, t.subTemplateIndex, o); }
function hp(n, e, t, s) {
    let { closeName: r } = n.i18nPlaceholder;
    if (r) {
        let i = ee.ElementTag | ee.CloseTag, o = n.handle.slot;
        s !== void 0 && (i |= ee.TemplateTag, o = { element: o, template: s.handle.slot }), Gs(e.params, r, o, t.subTemplateIndex, i);
    }
}
function va(n, e, t, s, r, i, o) { let { startName: a, closeName: l } = s, c = ee.TemplateTag | ee.OpenTag; l || (c |= ee.CloseTag), o !== void 0 && Gs(r.params, a, o.handle.slot, i.subTemplateIndex, c), Gs(r.params, a, t, yf(n, i, e), c); }
function wa(n, e, t, s, r, i, o) { let { closeName: a } = s, l = ee.TemplateTag | ee.CloseTag; a && (Gs(r.params, a, t, yf(n, i, e), l), o !== void 0 && Gs(r.params, a, o.handle.slot, i.subTemplateIndex, l)); }
function yf(n, e, t) {
    for (let s of t.create)
        if (s.kind === u.I18nStart)
            return s.subTemplateIndex;
    return e.subTemplateIndex;
}
function Gs(n, e, t, s, r) { let i = n.get(e) ?? []; i.push({ value: t, subTemplateIndex: s, flags: r }), n.set(e, i); }
function h2(n) {
    let e = new Map, t = new Map, s = new Map;
    for (let o of n.units)
        for (let a of o.create)
            switch (a.kind) {
                case u.I18nStart:
                    e.set(a.xref, a.subTemplateIndex);
                    break;
                case u.I18nContext:
                    t.set(a.xref, a);
                    break;
                case u.IcuPlaceholder:
                    s.set(a.xref, a);
                    break;
            }
    let r = new Map, i = o => o.usage === Qs.I18nText ? o.i18nOwner : o.context;
    for (let o of n.units)
        for (let a of o.update)
            if (a.kind === u.I18nExpression) {
                let l = r.get(i(a)) || 0, c = e.get(a.i18nOwner) ?? null, p = { value: l, subTemplateIndex: c, flags: ee.ExpressionIndex };
                f2(a, p, t, s), r.set(i(a), l + 1);
            }
}
function f2(n, e, t, s) {
    if (n.i18nPlaceholder !== null) {
        let r = t.get(n.context), i = n.resolutionTime === Xr.Creation ? r.params : r.postprocessingParams, o = i.get(n.i18nPlaceholder) || [];
        o.push(e), i.set(n.i18nPlaceholder, o);
    }
    n.icuPlaceholder !== null && s.get(n.icuPlaceholder)?.expressionPlaceholders.push(e);
}
function d2(n) {
    for (let e of n.units)
        Mo(e, e.create, null), Mo(e, e.update, null);
}
function Mo(n, e, t) {
    let s = new Map, r = new Map;
    for (let i of e)
        switch (i.kind) {
            case u.Variable:
                switch (i.variable.kind) {
                    case Se.Identifier:
                        if (i.variable.local) {
                            if (r.has(i.variable.identifier))
                                continue;
                            r.set(i.variable.identifier, i.xref);
                        }
                        else if (s.has(i.variable.identifier))
                            continue;
                        s.set(i.variable.identifier, i.xref);
                        break;
                    case Se.Alias:
                        if (s.has(i.variable.identifier))
                            continue;
                        s.set(i.variable.identifier, i.xref);
                        break;
                    case Se.SavedView:
                        t = { view: i.variable.view, variable: i.xref };
                        break;
                }
                break;
            case u.Listener:
            case u.TwoWayListener:
                Mo(n, i.handlerOps, t);
                break;
            case u.RepeaterCreate:
                i.trackByOps !== null && Mo(n, i.trackByOps, t);
                break;
        }
    for (let i of e)
        i.kind == u.Listener || i.kind === u.TwoWayListener || fe(i, o => {
            if (o instanceof Ce)
                return r.has(o.name) ? new Zt(r.get(o.name)) : s.has(o.name) ? new Zt(s.get(o.name)) : new Ue(new Tn(n.job.root.xref), o.name);
            if (o instanceof wo && typeof o.view == "number") {
                if (t === null || t.view !== o.view)
                    throw new Error(`AssertionError: no saved view ${o.view} from view ${n.xref}`);
                return o.view = new Zt(t.variable), o;
            }
            else
                return o;
        }, z.None);
    for (let i of e)
        xe(i, o => {
            if (o instanceof Ce)
                throw new Error(`AssertionError: no lexical reads should remain, but found read of ${o.name}`);
        });
}
var m2 = new Map([[te.HTML, f.sanitizeHtml], [te.RESOURCE_URL, f.sanitizeResourceUrl], [te.SCRIPT, f.sanitizeScript], [te.STYLE, f.sanitizeStyle], [te.URL, f.sanitizeUrl]]), g2 = new Map([[te.HTML, f.trustConstantHtml], [te.RESOURCE_URL, f.trustConstantResourceUrl]]);
function v2(n) {
    for (let e of n.units) {
        let t = Oc(e);
        if (n.kind !== A.Host) {
            for (let s of e.create)
                if (s.kind === u.ExtractedAttribute) {
                    let r = g2.get(fp(s.securityContext)) ?? null;
                    s.trustedValueFn = r !== null ? y(r) : null;
                }
        }
        for (let s of e.update)
            switch (s.kind) {
                case u.Property:
                case u.Attribute:
                case u.DomProperty:
                    let r = null;
                    if (Array.isArray(s.securityContext) && s.securityContext.length === 2 && s.securityContext.indexOf(te.URL) > -1 && s.securityContext.indexOf(te.RESOURCE_URL) > -1 ? r = f.sanitizeUrlOrResourceUrl : r = m2.get(fp(s.securityContext)) ?? null, s.sanitizer = r !== null ? y(r) : null, s.sanitizer === null) {
                        let i = !1;
                        if (n.kind === A.Host || s.kind === u.DomProperty)
                            i = !0;
                        else {
                            let o = t.get(s.target);
                            if (o === void 0 || !kn(o))
                                throw Error("Property should have an element-like owner");
                            i = w2(o);
                        }
                        i && _w(s.name) && (s.sanitizer = y(f.validateIframeAttribute));
                    }
                    break;
            }
    }
}
function w2(n) { return n.kind === u.ElementStart && n.tag?.toLowerCase() === "iframe"; }
function fp(n) {
    if (Array.isArray(n)) {
        if (n.length > 1)
            throw Error("AssertionError: Ambiguous security context");
        return n[0] || te.NONE;
    }
    return n;
}
function E2(n) {
    for (let e of n.units) {
        e.create.prepend([hn(e.job.allocateXrefId(), { kind: Se.SavedView, name: null, view: e.xref }, new wl, at.None)]);
        for (let t of e.create) {
            if (t.kind !== u.Listener && t.kind !== u.TwoWayListener)
                continue;
            let s = e !== n.root;
            if (!s)
                for (let r of t.handlerOps)
                    xe(r, i => { (i instanceof go || i instanceof Zr) && (s = !0); });
            s && S2(e, t);
        }
    }
}
function S2(n, e) {
    e.handlerOps.prepend([hn(n.job.allocateXrefId(), { kind: Se.Context, name: null, view: n.xref }, new wo(n.xref), at.None)]);
    for (let t of e.handlerOps)
        t.kind === u.Statement && t.statement instanceof _e && (t.statement.value = new El(t.statement.value));
}
function x2(n) {
    let e = new Map;
    for (let t of n.units) {
        let s = 0;
        for (let r of t.create)
            Js(r) && (r.handle.slot = s, e.set(r.xref, r.handle.slot), s += r.numSlotsUsed);
        t.decls = s;
    }
    for (let t of n.units)
        for (let s of t.ops())
            if (s.kind === u.Template || s.kind === u.ConditionalCreate || s.kind === u.ConditionalBranchCreate || s.kind === u.RepeaterCreate) {
                let r = n.views.get(s.xref);
                s.decls = r.decls;
            }
}
function y2(n) {
    let e = new Set, t = new Map;
    for (let s of n.units)
        for (let r of s.ops())
            r.kind === u.DeclareLet && t.set(r.xref, r), xe(r, i => { i instanceof Zr && e.add(i.target); });
    for (let s of n.units)
        for (let r of s.update)
            fe(r, i => i instanceof Qr && !e.has(i.target) ? (C2(i) || S.remove(t.get(i.target)), i.value) : i, z.None);
}
function C2(n) { let e = !1; return T(n, t => ((t instanceof is || t instanceof Jr) && (e = !0), t), z.None), e; }
function A2(n) {
    let e = new Set;
    for (let t of n.units)
        for (let s of t.ops())
            xe(s, r => {
                if (r instanceof H)
                    switch (r.operator) {
                        case x.Exponentiation:
                            _2(r, e);
                            break;
                        case x.NullishCoalesce:
                            T2(r, e);
                            break;
                    }
            });
    for (let t of n.units)
        for (let s of t.ops())
            fe(s, r => r instanceof Tt ? e.has(r) ? r : r.expr : r, z.None);
}
function _2(n, e) { n.lhs instanceof Tt && n.lhs.expr instanceof Kt && e.add(n.lhs); }
function T2(n, e) { n.lhs instanceof Tt && (dp(n.lhs.expr) || n.lhs.expr instanceof _t) && e.add(n.lhs), n.rhs instanceof Tt && (dp(n.rhs.expr) || n.rhs.expr instanceof _t) && e.add(n.rhs); }
function dp(n) { return n instanceof H && (n.operator === x.And || n.operator === x.Or); }
function b2(n) {
    for (let e of n.units)
        for (let t of e.update)
            if (t.kind === u.Binding)
                switch (t.bindingKind) {
                    case I.ClassName:
                        if (t.expression instanceof ce)
                            throw new Error("Unexpected interpolation in ClassName binding");
                        S.replace(t, wg(t.target, t.name, t.expression, t.sourceSpan));
                        break;
                    case I.StyleProperty:
                        S.replace(t, vg(t.target, t.name, t.expression, t.unit, t.sourceSpan));
                        break;
                    case I.Property:
                    case I.Template:
                        t.name === "style" ? S.replace(t, Eg(t.target, t.expression, t.sourceSpan)) : t.name === "class" && S.replace(t, Sg(t.target, t.expression, t.sourceSpan));
                        break;
                }
}
function k2(n) {
    for (let e of n.units)
        e.create.prepend(Ro(e.create)), e.update.prepend(Ro(e.update));
}
function Ro(n) {
    let e = 0, t = [];
    for (let s of n) {
        let r = new Map;
        xe(s, (c, p) => { p & z.InChildOperation || c instanceof bn && r.set(c.xref, c); });
        let i = 0, o = new Set, a = new Set, l = new Map;
        xe(s, (c, p) => { p & z.InChildOperation || (c instanceof Ut ? (o.has(c.xref) || (o.add(c.xref), l.set(c.xref, `tmp_${e}_${i++}`)), mp(l, c)) : c instanceof bn && (r.get(c.xref) === c && (a.add(c.xref), i--), mp(l, c))); }), t.push(...Array.from(new Set(l.values())).map(c => It(new le(c)))), e++, s.kind === u.Listener || s.kind === u.TwoWayListener ? s.handlerOps.prepend(Ro(s.handlerOps)) : s.kind === u.RepeaterCreate && s.trackByOps !== null && s.trackByOps.prepend(Ro(s.trackByOps));
    }
    return t;
}
function mp(n, e) {
    let t = n.get(e.xref);
    if (t === void 0)
        throw new Error(`Found xref with unassigned name: ${e.xref}`);
    e.name = t;
}
function I2(n) {
    for (let e of n.units)
        for (let t of e.create)
            if (t.kind === u.RepeaterCreate)
                if (t.track instanceof et && t.track.name === "$index")
                    t.trackByFn = y(f.repeaterTrackByIndex);
                else if (t.track instanceof et && t.track.name === "$item")
                    t.trackByFn = y(f.repeaterTrackByIdentity);
                else if (N2(n.root.xref, t.track))
                    t.usesComponentInstance = !0, t.track.receiver.receiver.view === e.xref ? t.trackByFn = t.track.receiver : (t.trackByFn = y(f.componentInstance).callFn([]).prop(t.track.receiver.name), t.track = t.trackByFn);
                else {
                    t.track = T(t.track, r => {
                        if (r instanceof is || r instanceof Jr)
                            throw new Error("Illegal State: Pipes are not allowed in this context");
                        return r instanceof Tn ? (t.usesComponentInstance = !0, new vl(r.view)) : r;
                    }, z.None);
                    let s = new S;
                    s.push(It(new _e(t.track, t.track.sourceSpan))), t.trackByOps = s;
                }
}
function N2(n, e) {
    if (!(e instanceof Me) || e.args.length === 0 || e.args.length > 2 || !(e.receiver instanceof Ue && e.receiver.receiver instanceof Tn) || e.receiver.receiver.view !== n)
        return !1;
    let [t, s] = e.args;
    return !(t instanceof et) || t.name !== "$index" ? !1 : e.args.length === 1 ? !0 : !(!(s instanceof et) || s.name !== "$item");
}
function D2(n) {
    for (let e of n.units)
        for (let t of e.create)
            t.kind === u.RepeaterCreate && (t.track = T(t.track, s => {
                if (s instanceof Ce) {
                    if (t.varNames.$index.has(s.name))
                        return N("$index");
                    if (s.name === t.varNames.$implicit)
                        return N("$item");
                }
                return s;
            }, z.None));
}
function P2(n) {
    for (let e of n.units)
        for (let t of e.create)
            t.kind === u.TwoWayListener && fe(t, s => {
                if (!(s instanceof Eo))
                    return s;
                let { target: r, value: i } = s;
                if (r instanceof Ue || r instanceof Mt)
                    return ip(r, i).or(r.set(i));
                if (r instanceof Zt)
                    return ip(r, i);
                throw new Error("Unsupported expression in two-way action binding.");
            }, z.InChildOperation);
}
function L2(n) {
    for (let e of n.units) {
        let t = 0;
        for (let s of e.ops())
            pa(s) && (t += B2(s));
        for (let s of e.ops())
            xe(s, r => { qt(r) && (n.compatibility === nt.TemplateDefinitionBuilder && r instanceof rs || (Au(r) && (r.varOffset = t), pa(r) && (t += gp(r)))); });
        if (n.compatibility === nt.TemplateDefinitionBuilder)
            for (let s of e.ops())
                xe(s, r => { !qt(r) || !(r instanceof rs) || (Au(r) && (r.varOffset = t), pa(r) && (t += gp(r))); });
        e.vars = t;
    }
    if (n instanceof ti)
        for (let e of n.units)
            for (let t of e.create) {
                if (t.kind !== u.Template && t.kind !== u.RepeaterCreate && t.kind !== u.ConditionalCreate && t.kind !== u.ConditionalBranchCreate)
                    continue;
                let s = n.views.get(t.xref);
                t.vars = s.vars;
            }
}
function B2(n) {
    let e;
    switch (n.kind) {
        case u.Attribute: return e = 1, n.expression instanceof ce && !M2(n.expression) && (e += n.expression.expressions.length), e;
        case u.Property:
        case u.DomProperty: return e = 1, n.expression instanceof ce && (e += n.expression.expressions.length), e;
        case u.TwoWayProperty: return 1;
        case u.StyleProp:
        case u.ClassProp:
        case u.StyleMap:
        case u.ClassMap: return e = 2, n.expression instanceof ce && (e += n.expression.expressions.length), e;
        case u.InterpolateText: return n.interpolation.expressions.length;
        case u.I18nExpression:
        case u.Conditional:
        case u.DeferWhen:
        case u.StoreLet: return 1;
        case u.RepeaterCreate: return n.emptyView ? 1 : 0;
        default: throw new Error(`Unhandled op: ${u[n.kind]}`);
    }
}
function gp(n) {
    switch (n.kind) {
        case k.PureFunctionExpr: return 1 + n.args.length;
        case k.PipeBinding: return 1 + n.args.length;
        case k.PipeBindingVariadic: return 1 + n.numArgs;
        case k.StoreLet: return 1;
        default: throw new Error(`AssertionError: unhandled ConsumesVarsTrait expression ${n.constructor.name}`);
    }
}
function M2(n) { return !(n.expressions.length !== 1 || n.strings.length !== 2 || n.strings[0] !== "" || n.strings[1] !== ""); }
function R2(n) {
    for (let e of n.units) {
        Ci(e.create), Ci(e.update);
        for (let t of e.create)
            t.kind === u.Listener || t.kind === u.TwoWayListener ? Ci(t.handlerOps) : t.kind === u.RepeaterCreate && t.trackByOps !== null && Ci(t.trackByOps);
        Ai(e.create, n.compatibility), Ai(e.update, n.compatibility);
        for (let t of e.create)
            t.kind === u.Listener || t.kind === u.TwoWayListener ? Ai(t.handlerOps, n.compatibility) : t.kind === u.RepeaterCreate && t.trackByOps !== null && Ai(t.trackByOps, n.compatibility);
    }
}
var ve = function (n) { return n[n.None = 0] = "None", n[n.ViewContextRead = 1] = "ViewContextRead", n[n.ViewContextWrite = 2] = "ViewContextWrite", n[n.SideEffectful = 4] = "SideEffectful", n; }(ve || {});
function Ci(n) {
    let e = new Map;
    for (let t of n)
        t.kind === u.Variable && t.flags & at.AlwaysInline && (xe(t, s => {
            if (qt(s) && Uc(s) !== ve.None)
                throw new Error("AssertionError: A context-sensitive variable was marked AlwaysInline");
        }), e.set(t.xref, t)), fe(t, s => s instanceof Zt && e.has(s.xref) ? e.get(s.xref).initializer.clone() : s, z.None);
    for (let t of e.values())
        S.remove(t);
}
function Ai(n, e) {
    let t = new Map, s = new Map, r = new Set, i = new Map;
    for (let c of n) {
        if (c.kind === u.Variable) {
            if (t.has(c.xref) || s.has(c.xref))
                throw new Error(`Should not see two declarations of the same variable: ${c.xref}`);
            t.set(c.xref, c), s.set(c.xref, 0);
        }
        i.set(c, F2(c)), $2(c, s, r);
    }
    let o = !1;
    for (let c of n.reversed()) {
        let p = i.get(c);
        if (c.kind === u.Variable && s.get(c.xref) === 0) {
            if (o && p.fences & ve.ViewContextWrite || p.fences & ve.SideEffectful) {
                let h = It(c.initializer.toStmt());
                i.set(h, p), S.replace(c, h);
            }
            else
                O2(c, s), S.remove(c);
            i.delete(c), t.delete(c.xref), s.delete(c.xref);
            continue;
        }
        p.fences & ve.ViewContextRead && (o = !0);
    }
    let a = [];
    for (let [c, p] of s) {
        let m = !!(t.get(c).flags & at.AlwaysInline);
        p !== 1 || m || r.has(c) || a.push(c);
    }
    let l;
    for (; l = a.pop();) {
        let c = t.get(l), p = i.get(c);
        if (!!(c.flags & at.AlwaysInline))
            throw new Error("AssertionError: Found an 'AlwaysInline' variable after the always inlining pass.");
        for (let m = c.next; m.kind !== u.ListEnd; m = m.next) {
            let v = i.get(m);
            if (v.variablesUsed.has(l)) {
                if (e === nt.TemplateDefinitionBuilder && !q2(c, m))
                    break;
                if (V2(l, c.initializer, m, p.fences)) {
                    v.variablesUsed.delete(l);
                    for (let w of p.variablesUsed)
                        v.variablesUsed.add(w);
                    v.fences |= p.fences, t.delete(l), s.delete(l), i.delete(c), S.remove(c);
                }
                break;
            }
            if (!Cf(v.fences, p.fences))
                break;
        }
    }
}
function Uc(n) {
    switch (n.kind) {
        case k.NextContext: return ve.ViewContextRead | ve.ViewContextWrite;
        case k.RestoreView: return ve.ViewContextRead | ve.ViewContextWrite | ve.SideEffectful;
        case k.StoreLet: return ve.SideEffectful;
        case k.Reference:
        case k.ContextLetReference: return ve.ViewContextRead;
        default: return ve.None;
    }
}
function F2(n) {
    let e = ve.None, t = new Set;
    return xe(n, s => {
        if (qt(s))
            switch (s.kind) {
                case k.ReadVariable:
                    t.add(s.xref);
                    break;
                default: e |= Uc(s);
            }
    }), { fences: e, variablesUsed: t };
}
function $2(n, e, t) {
    xe(n, (s, r) => {
        if (!qt(s) || s.kind !== k.ReadVariable)
            return;
        let i = e.get(s.xref);
        i !== void 0 && (e.set(s.xref, i + 1), r & z.InChildOperation && t.add(s.xref));
    });
}
function O2(n, e) {
    xe(n, t => {
        if (!qt(t) || t.kind !== k.ReadVariable)
            return;
        let s = e.get(t.xref);
        if (s !== void 0) {
            if (s === 0)
                throw new Error(`Inaccurate variable count: ${t.xref} - found another read but count is already 0`);
            e.set(t.xref, s - 1);
        }
    });
}
function Cf(n, e) {
    if (n & ve.ViewContextWrite) {
        if (e & ve.ViewContextRead)
            return !1;
    }
    else if (n & ve.ViewContextRead && e & ve.ViewContextWrite)
        return !1;
    return !0;
}
function V2(n, e, t, s) {
    let r = !1, i = !0;
    return fe(t, (o, a) => {
        if (!qt(o) || r || !i)
            return o;
        if (a & z.InChildOperation && s & ve.ViewContextRead)
            return o;
        switch (o.kind) {
            case k.ReadVariable:
                if (o.xref === n)
                    return r = !0, e;
                break;
            default:
                let l = Uc(o);
                i = i && Cf(l, s);
                break;
        }
        return o;
    }, z.None), r;
}
function q2(n, e) {
    switch (n.variable.kind) {
        case Se.Identifier: return n.initializer instanceof et && n.initializer.name === "ctx";
        case Se.Context: return e.kind === u.Variable;
        default: return !0;
    }
}
function U2(n) {
    for (let e of n.units) {
        let t = null, s = null;
        for (let r of e.create)
            switch (r.kind) {
                case u.I18nStart:
                    t = r;
                    break;
                case u.I18nEnd:
                    t = null;
                    break;
                case u.IcuStart:
                    t === null && (s = n.allocateXrefId(), S.insertBefore(ra(s, r.message, void 0, null), r));
                    break;
                case u.IcuEnd:
                    s !== null && (S.insertAfter(ia(s, null), r), s = null);
                    break;
            }
    }
}
var H2 = [{ kind: A.Tmpl, fn: kE }, { kind: A.Host, fn: Wv }, { kind: A.Tmpl, fn: pE }, { kind: A.Tmpl, fn: ME }, { kind: A.Tmpl, fn: U2 }, { kind: A.Both, fn: pv }, { kind: A.Both, fn: b2 }, { kind: A.Both, fn: Kg }, { kind: A.Both, fn: Qg }, { kind: A.Tmpl, fn: uv }, { kind: A.Both, fn: fE }, { kind: A.Tmpl, fn: r2 }, { kind: A.Both, fn: nv }, { kind: A.Both, fn: bE }, { kind: A.Tmpl, fn: sv }, { kind: A.Tmpl, fn: DE }, { kind: A.Tmpl, fn: hv }, { kind: A.Tmpl, fn: BE }, { kind: A.Both, fn: $E }, { kind: A.Tmpl, fn: Ov }, { kind: A.Tmpl, fn: $v }, { kind: A.Tmpl, fn: Vv }, { kind: A.Tmpl, fn: E2 }, { kind: A.Both, fn: Wg }, { kind: A.Both, fn: u2 }, { kind: A.Tmpl, fn: D2 }, { kind: A.Tmpl, fn: o2 }, { kind: A.Both, fn: d2 }, { kind: A.Tmpl, fn: fv }, { kind: A.Tmpl, fn: P2 }, { kind: A.Tmpl, fn: I2 }, { kind: A.Both, fn: l2 }, { kind: A.Both, fn: v2 }, { kind: A.Tmpl, fn: cE }, { kind: A.Both, fn: wv }, { kind: A.Both, fn: A2 }, { kind: A.Both, fn: k2 }, { kind: A.Both, fn: R2 }, { kind: A.Both, fn: y2 }, { kind: A.Tmpl, fn: lE }, { kind: A.Tmpl, fn: cv }, { kind: A.Tmpl, fn: a2 }, { kind: A.Tmpl, fn: Xg }, { kind: A.Tmpl, fn: zg }, { kind: A.Tmpl, fn: x2 }, { kind: A.Tmpl, fn: p2 }, { kind: A.Tmpl, fn: h2 }, { kind: A.Tmpl, fn: Lv }, { kind: A.Tmpl, fn: sE }, { kind: A.Tmpl, fn: Uv }, { kind: A.Both, fn: av }, { kind: A.Tmpl, fn: i2 }, { kind: A.Both, fn: L2 }, { kind: A.Tmpl, fn: Fv }, { kind: A.Both, fn: dE }, { kind: A.Tmpl, fn: c2 }, { kind: A.Tmpl, fn: vE }, { kind: A.Tmpl, fn: EE }, { kind: A.Tmpl, fn: vv }, { kind: A.Tmpl, fn: Yg }, { kind: A.Tmpl, fn: xE }, { kind: A.Both, fn: FE }, { kind: A.Both, fn: t2 }, { kind: A.Both, fn: tv }];
function Af(n, e) {
    for (let t of H2)
        (t.kind === e || t.kind === A.Both) && t.fn(n);
}
function W2(n, e) { let t = Tf(n.root); return _f(n.root, e), t; }
function _f(n, e) {
    for (let t of n.job.units) {
        if (t.parent !== n.xref)
            continue;
        _f(t, e);
        let s = Tf(t);
        e.statements.push(s.toDeclStmt(s.name));
    }
}
function Tf(n) {
    if (n.fnName === null)
        throw new Error(`AssertionError: view ${n.xref} is unnamed`);
    let e = [];
    for (let i of n.create) {
        if (i.kind !== u.Statement)
            throw new Error(`AssertionError: expected all create ops to have been compiled, but got ${u[i.kind]}`);
        e.push(i.statement);
    }
    let t = [];
    for (let i of n.update) {
        if (i.kind !== u.Statement)
            throw new Error(`AssertionError: expected all update ops to have been compiled, but got ${u[i.kind]}`);
        t.push(i.statement);
    }
    let s = Fo(1, e), r = Fo(2, t);
    return en([new Z("rf"), new Z("ctx")], [...s, ...r], void 0, void 0, n.fnName);
}
function Fo(n, e) { return e.length === 0 ? [] : [pi(new H(x.BitwiseAnd, N("rf"), d(n)), e)]; }
function j2(n) {
    if (n.root.fnName === null)
        throw new Error("AssertionError: host binding function is unnamed");
    let e = [];
    for (let i of n.root.create) {
        if (i.kind !== u.Statement)
            throw new Error(`AssertionError: expected all create ops to have been compiled, but got ${u[i.kind]}`);
        e.push(i.statement);
    }
    let t = [];
    for (let i of n.root.update) {
        if (i.kind !== u.Statement)
            throw new Error(`AssertionError: expected all update ops to have been compiled, but got ${u[i.kind]}`);
        t.push(i.statement);
    }
    if (e.length === 0 && t.length === 0)
        return null;
    let s = Fo(1, e), r = Fo(2, t);
    return en([new Z("rf"), new Z("ctx")], [...s, ...r], void 0, void 0, n.root.fnName);
}
var bf = nt.TemplateDefinitionBuilder, zn = new zs, Gn = "ng-template";
function Li(n) { return n instanceof ke; }
function z2(n) { return Li(n) && n.nodes.length === 1 && n.nodes[0] instanceof An; }
function G2(n, e, t, s, r, i, o, a, l, c) { let p = new ti(n, t, bf, s, r, i, o, a, l, c); return sn(p.root, e), p; }
function X2(n, e, t) {
    let s = new _o(n.componentName, t, bf, je.DomOnly);
    for (let r of n.properties ?? []) {
        let i = I.Property;
        r.name.startsWith("attr.") && (r.name = r.name.substring(5), i = I.Attribute), r.isLegacyAnimation && (i = I.LegacyAnimation);
        let o = e.calcPossibleSecurityContexts(n.componentSelector, r.name, i === I.Attribute).filter(a => a !== te.NONE);
        Y2(s, r, i, o);
    }
    for (let [r, i] of Object.entries(n.attributes) ?? []) {
        let o = e.calcPossibleSecurityContexts(n.componentSelector, r, !0).filter(a => a !== te.NONE);
        Q2(s, r, i, o);
    }
    for (let r of n.events ?? [])
        Z2(s, r);
    return s;
}
function Y2(n, e, t, s) { let r, i = e.expression.ast; i instanceof hi ? r = new ce(i.strings, i.expressions.map(o => q(o, n, e.sourceSpan)), []) : r = q(i, n, e.sourceSpan), n.root.update.push(ss(n.root.xref, t, e.name, r, null, s, !1, !1, null, null, e.sourceSpan)); }
function Q2(n, e, t, s) { let r = ss(n.root.xref, I.Attribute, e, t, null, s, !0, !1, null, null, t.sourceSpan); n.root.update.push(r); }
function Z2(n, e) { let [t, s] = e.type !== pt.LegacyAnimation ? [null, e.targetOrPhase] : [e.targetOrPhase, null], r = $c(n.root.xref, new Ie, e.name, null, Hc(n.root, e.handler, e.handlerSpan), t, s, !0, e.sourceSpan); n.root.create.push(r); }
function sn(n, e) {
    for (let t of e)
        if (t instanceof Ft)
            J2(n, t);
        else if (t instanceof Je)
            K2(n, t);
        else if (t instanceof Fs)
            ex(n, t);
        else if (t instanceof On)
            kf(n, t, null);
        else if (t instanceof Bs)
            If(n, t, null);
        else if (t instanceof io)
            tx(n, t);
        else if (t instanceof ro)
            nx(n, t);
        else if (t instanceof es)
            sx(n, t);
        else if (t instanceof dh)
            ix(n, t);
        else if (t instanceof Rs)
            ox(n, t);
        else if (t instanceof Ac)
            lx(n, t);
        else if (!(t instanceof pr))
            throw new Error(`Unsupported template node: ${t.constructor.name}`);
}
function J2(n, e) {
    if (e.i18n !== void 0 && !(e.i18n instanceof ke || e.i18n instanceof Ot))
        throw Error(`Unhandled i18n metadata type for element: ${e.i18n.constructor.name}`);
    let t = n.job.allocateXrefId(), [s, r] = kt(e.name), i = kg(r, t, nf(s), e.i18n instanceof Ot ? e.i18n : void 0, e.startSourceSpan, e.sourceSpan);
    n.create.push(i), ux(n, i, e), Pf(i, e);
    let o = null;
    e.i18n instanceof ke && (o = n.job.allocateXrefId(), n.create.push(ra(o, e.i18n, void 0, e.startSourceSpan))), sn(n, e.children);
    let a = Ng(t, e.endSourceSpan ?? e.startSourceSpan);
    n.create.push(a), o !== null && S.insertBefore(ia(o, e.endSourceSpan ?? e.startSourceSpan), a);
}
function K2(n, e) {
    if (e.i18n !== void 0 && !(e.i18n instanceof ke || e.i18n instanceof Ot))
        throw Error(`Unhandled i18n metadata type for template: ${e.i18n.constructor.name}`);
    let t = n.job.allocateView(n.xref), s = e.tagName, r = "";
    e.tagName && ([r, s] = kt(e.tagName));
    let i = e.i18n instanceof Ot ? e.i18n : void 0, o = nf(r), a = s === null ? "" : ov(s, o), l = cx(e) ? Ve.NgTemplate : Ve.Structural, c = Xh(t.xref, l, s, a, o, i, e.startSourceSpan, e.sourceSpan);
    n.create.push(c), px(n, c, e, l), Pf(c, e), sn(t, e.children);
    for (let { name: p, value: h } of e.variables)
        t.contextVariables.set(p, h !== "" ? h : "$implicit");
    if (l === Ve.NgTemplate && e.i18n instanceof ke) {
        let p = n.job.allocateXrefId();
        S.insertAfter(ra(p, e.i18n, void 0, e.startSourceSpan), t.create.head), S.insertBefore(ia(p, e.endSourceSpan ?? e.startSourceSpan), t.create.tail);
    }
}
function ex(n, e) {
    if (e.i18n !== void 0 && !(e.i18n instanceof Ot))
        throw Error(`Unhandled i18n metadata type for element: ${e.i18n.constructor.name}`);
    let t = null;
    e.children.some(i => !(i instanceof ea) && (!(i instanceof On) || i.value.trim().length > 0)) && (t = n.job.allocateView(n.xref), sn(t, e.children));
    let s = n.job.allocateXrefId(), r = Mg(s, e.selector, e.i18n, t?.xref ?? null, e.sourceSpan);
    for (let i of e.attributes) {
        let o = zn.securityContext(e.name, i.name, !0);
        n.update.push(ss(r.xref, I.Attribute, i.name, d(i.value), null, o, !0, !1, null, Xt(i.i18n), i.sourceSpan));
    }
    n.create.push(r);
}
function kf(n, e, t) { n.create.push(Zh(n.job.allocateXrefId(), e.value, t, e.sourceSpan)); }
function If(n, e, t) {
    let s = e.value;
    if (s instanceof Ge && (s = s.ast), !(s instanceof hi))
        throw new Error(`AssertionError: expected Interpolation for BoundText node, got ${s.constructor.name}`);
    if (e.i18n !== void 0 && !(e.i18n instanceof Ke))
        throw Error(`Unhandled i18n metadata type for text interpolation: ${e.i18n?.constructor.name}`);
    let r = e.i18n instanceof Ke ? e.i18n.children.filter(a => a instanceof ht).map(a => a.name) : [];
    if (r.length > 0 && r.length !== s.expressions.length)
        throw Error(`Unexpected number of i18n placeholders (${s.expressions.length}) for BoundText with ${s.expressions.length} expressions`);
    let i = n.job.allocateXrefId();
    n.create.push(Zh(i, "", t, e.sourceSpan));
    let o = n.job.compatibility ? null : e.sourceSpan;
    n.update.push(dg(i, new ce(s.strings, s.expressions.map(a => q(a, n.job, o)), r), e.sourceSpan));
}
function tx(n, e) {
    let t = null, s = [];
    for (let r = 0; r < e.branches.length; r++) {
        let i = e.branches[r], o = n.job.allocateView(n.xref), a = $o(n, o.xref, i);
        i.expressionAlias !== null && o.contextVariables.set(i.expressionAlias.name, tf);
        let l;
        if (i.i18n !== void 0) {
            if (!(i.i18n instanceof Vt))
                throw Error(`Unhandled i18n metadata type for if block: ${i.i18n?.constructor.name}`);
            l = i.i18n;
        }
        let p = (r === 0 ? Yh : Qh)(o.xref, Ve.Block, a, "Conditional", be.HTML, l, i.startSourceSpan, i.sourceSpan);
        n.create.push(p), t === null && (t = o.xref);
        let h = i.expression ? q(i.expression, n.job, null) : null, m = new xo(h, p.xref, p.handle, i.expressionAlias);
        s.push(m), sn(o, i.children);
    }
    n.update.push(jh(t, null, s, e.sourceSpan));
}
function nx(n, e) {
    if (e.cases.length === 0)
        return;
    let t = null, s = [];
    for (let r = 0; r < e.cases.length; r++) {
        let i = e.cases[r], o = n.job.allocateView(n.xref), a = $o(n, o.xref, i), l;
        if (i.i18n !== void 0) {
            if (!(i.i18n instanceof Vt))
                throw Error(`Unhandled i18n metadata type for switch block: ${i.i18n?.constructor.name}`);
            l = i.i18n;
        }
        let p = (r === 0 ? Yh : Qh)(o.xref, Ve.Block, a, "Case", be.HTML, l, i.startSourceSpan, i.sourceSpan);
        n.create.push(p), t === null && (t = o.xref);
        let h = i.expression ? q(i.expression, n.job, e.startSourceSpan) : null, m = new xo(h, p.xref, p.handle);
        s.push(m), sn(o, i.children);
    }
    n.update.push(jh(t, q(e.expression, n.job, null), s, e.sourceSpan));
}
function _i(n, e, t, s, r) {
    if (t !== void 0 && !(t instanceof Vt))
        throw Error("Unhandled i18n metadata type for defer block");
    if (s === void 0)
        return null;
    let i = n.job.allocateView(n.xref);
    sn(i, s);
    let o = Xh(i.xref, Ve.Block, null, `Defer${e}`, be.HTML, t, r, r);
    return n.create.push(o), o;
}
function sx(n, e) {
    let t = null;
    if (n.job.deferMeta.mode === 0) {
        if (!n.job.deferMeta.blocks.has(e))
            throw new Error("AssertionError: unable to find a dependency function for this deferred block");
        t = n.job.deferMeta.blocks.get(e) ?? null;
    }
    let s = _i(n, "", e.i18n, e.children, e.sourceSpan), r = _i(n, "Loading", e.loading?.i18n, e.loading?.children, e.loading?.sourceSpan), i = _i(n, "Placeholder", e.placeholder?.i18n, e.placeholder?.children, e.placeholder?.sourceSpan), o = _i(n, "Error", e.error?.i18n, e.error?.children, e.error?.sourceSpan), a = n.job.allocateXrefId(), l = Rg(a, s.xref, s.handle, t, n.job.allDeferrableDepsFn, e.sourceSpan);
    l.placeholderView = i?.xref ?? null, l.placeholderSlot = i?.handle ?? null, l.loadingSlot = r?.handle ?? null, l.errorSlot = o?.handle ?? null, l.placeholderMinimumTime = e.placeholder?.minimumTime ?? null, l.loadingMinimumTime = e.loading?.minimumTime ?? null, l.loadingAfterTime = e.loading?.afterTime ?? null, l.flags = rx(e), n.create.push(l);
    let c = [], p = [];
    Ea("hydrate", e.hydrateTriggers, c, p, n, a), Ea("none", e.triggers, c, p, n, a), Ea("prefetch", e.prefetchTriggers, c, p, n, a), c.some(m => m.modifier === "none") || p.some(m => m.modifier === "none") || c.push(an(a, { kind: Q.Idle }, "none", null)), n.create.push(c), n.update.push(p);
}
function rx(n) { return Object.keys(n.hydrateTriggers).length > 0 ? 1 : null; }
function Ea(n, e, t, s, r, i) {
    if (e.idle !== void 0) {
        let o = an(i, { kind: Q.Idle }, n, e.idle.sourceSpan);
        t.push(o);
    }
    if (e.immediate !== void 0) {
        let o = an(i, { kind: Q.Immediate }, n, e.immediate.sourceSpan);
        t.push(o);
    }
    if (e.timer !== void 0) {
        let o = an(i, { kind: Q.Timer, delay: e.timer.delay }, n, e.timer.sourceSpan);
        t.push(o);
    }
    if (e.hover !== void 0) {
        let o = an(i, { kind: Q.Hover, targetName: e.hover.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.hover.sourceSpan);
        t.push(o);
    }
    if (e.interaction !== void 0) {
        let o = an(i, { kind: Q.Interaction, targetName: e.interaction.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.interaction.sourceSpan);
        t.push(o);
    }
    if (e.viewport !== void 0) {
        let o = an(i, { kind: Q.Viewport, targetName: e.viewport.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.viewport.sourceSpan);
        t.push(o);
    }
    if (e.never !== void 0) {
        let o = an(i, { kind: Q.Never }, n, e.never.sourceSpan);
        t.push(o);
    }
    if (e.when !== void 0) {
        if (e.when.value instanceof hi)
            throw new Error("Unexpected interpolation in defer block when trigger");
        let o = Ag(i, q(e.when.value, r.job, e.when.sourceSpan), n, e.when.sourceSpan);
        s.push(o);
    }
}
function ix(n, e) {
    if (e.i18n instanceof ke && z2(e.i18n)) {
        let t = n.job.allocateXrefId();
        n.create.push(Og(t, e.i18n, wh(e.i18n).name, null));
        for (let [s, r] of Object.entries(E(E({}, e.vars), e.placeholders)))
            r instanceof Bs ? If(n, r, s) : kf(n, r, s);
        n.create.push(Vg(t));
    }
    else
        throw Error(`Unhandled i18n metadata type for ICU: ${e.i18n?.constructor.name}`);
}
function ox(n, e) {
    let t = n.job.allocateView(n.xref), s = `\u0275$index_${t.xref}`, r = `\u0275$count_${t.xref}`, i = new Set;
    t.contextVariables.set(e.item.name, e.item.value);
    for (let _ of e.contextVariables)
        _.value === "$index" && i.add(_.name), _.name === "$index" ? t.contextVariables.set("$index", _.value).set(s, _.value) : _.name === "$count" ? t.contextVariables.set("$count", _.value).set(r, _.value) : t.aliases.add({ kind: Se.Alias, name: null, identifier: _.name, expression: ax(_, s, r) });
    let o = me(e.trackBy.span, e.sourceSpan), a = q(e.trackBy, n.job, o);
    sn(t, e.children);
    let l = null, c = null;
    e.empty !== null && (l = n.job.allocateView(n.xref), sn(l, e.empty.children), c = $o(n, l.xref, e.empty));
    let p = { $index: i, $implicit: e.item.name };
    if (e.i18n !== void 0 && !(e.i18n instanceof Vt))
        throw Error("AssertionError: Unhandled i18n metadata type or @for");
    if (e.empty?.i18n !== void 0 && !(e.empty.i18n instanceof Vt))
        throw Error("AssertionError: Unhandled i18n metadata type or @empty");
    let h = e.i18n, m = e.empty?.i18n, v = $o(n, t.xref, e), w = Ig(t.xref, l?.xref ?? null, v, a, p, c, h, m, e.startSourceSpan, e.sourceSpan);
    n.create.push(w);
    let C = q(e.expression, n.job, me(e.expression.span, e.sourceSpan)), b = Cg(w.xref, w.handle, C, e.sourceSpan);
    n.update.push(b);
}
function ax(n, e, t) {
    switch (n.value) {
        case "$index": return new Ce(e);
        case "$count": return new Ce(t);
        case "$first": return new Ce(e).identical(d(0));
        case "$last": return new Ce(e).identical(new Ce(t).minus(d(1)));
        case "$even": return new Ce(e).modulo(d(2)).identical(d(0));
        case "$odd": return new Ce(e).modulo(d(2)).notIdentical(d(0));
        default: throw new Error(`AssertionError: unknown @for loop variable ${n.value}`);
    }
}
function lx(n, e) { let t = n.job.allocateXrefId(); n.create.push(Fg(t, e.name, e.sourceSpan)), n.update.push(Tg(t, e.name, q(e.value, n.job, e.valueSpan), e.sourceSpan)); }
function q(n, e, t) {
    if (n instanceof Ge)
        return q(n.ast, e, t);
    if (n instanceof mn)
        return n.receiver instanceof Rt && !(n.receiver instanceof Kn) ? new Ce(n.name) : new Ue(q(n.receiver, e, t), n.name, null, me(n.span, t));
    if (n instanceof Dr) {
        if (n.receiver instanceof Rt)
            throw new Error("Unexpected ImplicitReceiver");
        return new Me(q(n.receiver, e, t), n.args.map(s => q(s, e, t)), void 0, me(n.span, t));
    }
    else {
        if (n instanceof ze)
            return d(n.value, void 0, me(n.span, t));
        if (n instanceof ys)
            switch (n.operator) {
                case "+": return new Kt(bs.Plus, q(n.expr, e, t), void 0, me(n.span, t));
                case "-": return new Kt(bs.Minus, q(n.expr, e, t), void 0, me(n.span, t));
                default: throw new Error(`AssertionError: unknown unary operator ${n.operator}`);
            }
        else if (n instanceof Ne) {
            let s = rv.get(n.operation);
            if (s === void 0)
                throw new Error(`AssertionError: unknown binary operator ${n.operation}`);
            return new H(s, q(n.left, e, t), q(n.right, e, t), void 0, me(n.span, t));
        }
        else {
            if (n instanceof Kn)
                return new Tn(e.root.xref);
            if (n instanceof Ls)
                return new Mt(q(n.receiver, e, t), q(n.key, e, t), void 0, me(n.span, t));
            if (n instanceof Ps)
                throw new Error("AssertionError: Chain in unknown context");
            if (n instanceof Gi) {
                let s = n.keys.map((r, i) => { let o = n.values[i]; return new Zn(r.key, q(o, e, t), r.quoted); });
                return new bt(s, void 0, me(n.span, t));
            }
            else {
                if (n instanceof zi)
                    return new ft(n.expressions.map(s => q(s, e, t)));
                if (n instanceof Ui)
                    return new _t(q(n.condition, e, t), q(n.trueExp, e, t), q(n.falseExp, e, t), void 0, me(n.span, t));
                if (n instanceof Nr)
                    return q(n.expression, e, t);
                if (n instanceof ji)
                    return new is(e.allocateXrefId(), new Ie(), n.name, [q(n.exp, e, t), ...n.args.map(s => q(s, e, t))]);
                if (n instanceof Wi)
                    return new Us(q(n.receiver, e, t), q(n.key, e, t), me(n.span, t));
                if (n instanceof Hi)
                    return new qs(q(n.receiver, e, t), n.name);
                if (n instanceof Xi)
                    return new os(q(n.receiver, e, t), n.args.map(s => q(s, e, t)));
                if (n instanceof Re)
                    return new Kr(me(n.span, t));
                if (n instanceof br)
                    return ih(q(n.expression, e, t), me(n.span, t));
                if (n instanceof kr)
                    return Xs(q(n.expression, e, t));
                if (n instanceof Ir)
                    return new Er(q(n.expression, e, t), void 0, me(n.span, t));
                if (n instanceof Lr)
                    return vp(n, e, t);
                if (n instanceof Pr)
                    return new ks(q(n.tag, e, t), vp(n.template, e, t), void 0, me(n.span, t));
                if (n instanceof Qi)
                    return new Tt(q(n.expression, e, t), void 0, me(n.span, t));
                throw new Error(`Unhandled expression type "${n.constructor.name}" in file "${t?.start.file.url}"`);
            }
        }
    }
}
function vp(n, e, t) { return new Ns(n.elements.map(s => new Sr(s.text, me(s.span, t))), n.expressions.map(s => q(s, e, t)), me(n.span, t)); }
function ql(n, e, t, s) { let r; return e instanceof hi ? r = new ce(e.strings, e.expressions.map(i => q(i, n, null)), Object.keys(Xt(t)?.placeholders ?? {})) : e instanceof se ? r = q(e, n, null) : r = d(e), r; }
var Nf = new Map([[Y.Property, I.Property], [Y.TwoWay, I.TwoWayProperty], [Y.Attribute, I.Attribute], [Y.Class, I.ClassName], [Y.Style, I.StyleProperty], [Y.LegacyAnimation, I.LegacyAnimation]]);
function cx(n) { return kt(n.tagName ?? "")[1] === Gn; }
function Xt(n) {
    if (n == null)
        return null;
    if (!(n instanceof ke))
        throw Error(`Expected i18n meta to be a Message, but got: ${n.constructor.name}`);
    return n;
}
function ux(n, e, t) {
    let s = new Array, r = new Set;
    for (let i of t.attributes) {
        let o = zn.securityContext(t.name, i.name, !0);
        s.push(ss(e.xref, I.Attribute, i.name, ql(n.job, i.value, i.i18n), null, o, !0, !1, null, Xt(i.i18n), i.sourceSpan)), i.i18n && r.add(i.name);
    }
    for (let i of t.inputs)
        r.has(i.name) && console.error(`On component ${n.job.componentName}, the binding ${i.name} is both an i18n attribute and a property. You may want to remove the property binding. This will become a compilation error in future versions of Angular.`), s.push(ss(e.xref, Nf.get(i.type), i.name, ql(n.job, ai(i.value), i.i18n), i.unit, i.securityContext, !1, !1, null, Xt(i.i18n) ?? null, i.sourceSpan));
    n.create.push(s.filter(i => i?.kind === u.ExtractedAttribute)), n.update.push(s.filter(i => i?.kind === u.Binding));
    for (let i of t.outputs) {
        if (i.type === pt.LegacyAnimation && i.phase === null)
            throw Error("Animation listener should have a phase");
        i.type === pt.TwoWay ? n.create.push(Jh(e.xref, e.handle, i.name, e.tag, Df(n, i.handler, i.handlerSpan), i.sourceSpan)) : n.create.push($c(e.xref, e.handle, i.name, e.tag, Hc(n, i.handler, i.handlerSpan), i.phase, i.target, !1, i.sourceSpan));
    }
    s.some(i => i?.i18nMessage) !== null && n.create.push(ef(n.job.allocateXrefId(), new Ie, e.xref));
}
function px(n, e, t, s) {
    let r = new Array;
    for (let i of t.templateAttrs)
        if (i instanceof Ms) {
            let o = zn.securityContext(Gn, i.name, !0);
            r.push(Ti(n, e.xref, Y.Attribute, i.name, i.value, null, o, !0, s, Xt(i.i18n), i.sourceSpan));
        }
        else
            r.push(Ti(n, e.xref, i.type, i.name, ai(i.value), i.unit, i.securityContext, !0, s, Xt(i.i18n), i.sourceSpan));
    for (let i of t.attributes) {
        let o = zn.securityContext(Gn, i.name, !0);
        r.push(Ti(n, e.xref, Y.Attribute, i.name, i.value, null, o, !1, s, Xt(i.i18n), i.sourceSpan));
    }
    for (let i of t.inputs)
        r.push(Ti(n, e.xref, i.type, i.name, ai(i.value), i.unit, i.securityContext, !1, s, Xt(i.i18n), i.sourceSpan));
    n.create.push(r.filter(i => i?.kind === u.ExtractedAttribute)), n.update.push(r.filter(i => i?.kind === u.Binding));
    for (let i of t.outputs) {
        if (i.type === pt.LegacyAnimation && i.phase === null)
            throw Error("Animation listener should have a phase");
        if (s === Ve.NgTemplate && (i.type === pt.TwoWay ? n.create.push(Jh(e.xref, e.handle, i.name, e.tag, Df(n, i.handler, i.handlerSpan), i.sourceSpan)) : n.create.push($c(e.xref, e.handle, i.name, e.tag, Hc(n, i.handler, i.handlerSpan), i.phase, i.target, !1, i.sourceSpan))), s === Ve.Structural && i.type !== pt.LegacyAnimation) {
            let o = zn.securityContext(Gn, i.name, !1);
            n.create.push(lt(e.xref, I.Property, null, i.name, null, null, null, o));
        }
    }
    r.some(i => i?.i18nMessage) !== null && n.create.push(ef(n.job.allocateXrefId(), new Ie, e.xref));
}
function Ti(n, e, t, s, r, i, o, a, l, c, p) {
    let h = typeof r == "string";
    if (l === Ve.Structural) {
        if (!a)
            switch (t) {
                case Y.Property:
                case Y.Class:
                case Y.Style: return lt(e, I.Property, null, s, null, null, c, o);
                case Y.TwoWay: return lt(e, I.TwoWayProperty, null, s, null, null, c, o);
            }
        if (!h && (t === Y.Attribute || t === Y.LegacyAnimation))
            return null;
    }
    let m = Nf.get(t);
    return l === Ve.NgTemplate && (t === Y.Class || t === Y.Style || t === Y.Attribute && !h) && (m = I.Property), ss(e, m, s, ql(n.job, r, c), i, o, h, a, l, c, p);
}
function Hc(n, e, t) {
    e = ai(e);
    let s = new Array, r = e instanceof Ps ? e.expressions : [e];
    if (r.length === 0)
        throw new Error("Expected listener to have non-empty expression list.");
    let i = r.map(a => q(a, n.job, t)), o = i.pop();
    return s.push(...i.map(a => It(new tt(a, a.sourceSpan)))), s.push(It(new _e(o, o.sourceSpan))), s;
}
function Df(n, e, t) {
    e = ai(e);
    let s = new Array;
    if (e instanceof Ps)
        if (e.expressions.length === 1)
            e = e.expressions[0];
        else
            throw new Error("Expected two-way listener to have a single expression.");
    let r = q(e, n.job, t), i = new Ce("$event"), o = new Eo(r, i);
    return s.push(It(new tt(o))), s.push(It(new _e(i))), s;
}
function ai(n) { return n instanceof Ge ? n.ast : n; }
function Pf(n, e) {
    hx(n.localRefs);
    for (let { name: t, value: s } of e.references)
        n.localRefs.push({ name: t, target: s });
}
function hx(n) {
    if (!Array.isArray(n))
        throw new Error("AssertionError: expected an array");
}
function me(n, e) {
    if (e === null)
        return null;
    let t = e.start.moveBy(n.start), s = e.start.moveBy(n.end), r = e.fullStart.moveBy(n.start);
    return new B(t, s, r);
}
function $o(n, e, t) {
    let s = null;
    for (let r of t.children)
        if (!(r instanceof ea || r instanceof Ac)) {
            if (s !== null)
                return null;
            if (r instanceof Ft || r instanceof Je && r.tagName !== null)
                s = r;
            else
                return null;
        }
    if (s !== null) {
        for (let i of s.attributes) {
            let o = zn.securityContext(Gn, i.name, !0);
            n.update.push(ss(e, I.Attribute, i.name, d(i.value), null, o, !0, !1, null, Xt(i.i18n), i.sourceSpan));
        }
        for (let i of s.inputs)
            if (i.type !== Y.LegacyAnimation && i.type !== Y.Attribute) {
                let o = zn.securityContext(Gn, i.name, !0);
                n.create.push(lt(e, I.Property, null, i.name, null, null, null, o));
            }
        let r = s instanceof Ft ? s.name : s.tagName;
        return r === Gn ? null : r;
    }
    return null;
}
var Lf = !1;
function AA(n) { Lf = n; }
function fx() { return Lf; }
function Oo(n, e) { return pi(N(Nc).bitwiseAnd(d(n), null), e); }
function dx(n) { return (n.descendants ? 1 : 0) | (n.static ? 2 : 0) | (n.emitDistinctChangesOnly ? 4 : 0); }
function mx(n, e) {
    if (Array.isArray(n.predicate)) {
        let t = [];
        return n.predicate.forEach(s => { let r = s.split(",").map(i => d(i.trim())); t.push(...r); }), e.getConstLiteral(R(t), !0);
    }
    else
        switch (n.predicate.forwardRef) {
            case 0:
            case 2: return n.predicate.expression;
            case 1: return y(f.resolveForwardRef).callFn([n.predicate.expression]);
        }
}
function Bf(n, e, t, s) { let r = []; s !== void 0 && r.push(...s), n.isSignal && r.push(new Ue(N(Ur), n.propertyName)), r.push(mx(n, e), d(dx(n))), n.read && r.push(n.read); let i = n.isSignal ? t.signalBased : t.nonSignal; return y(i).callFn(r); }
var Wc = Symbol("queryAdvancePlaceholder");
function Mf(n) {
    let e = [], t = 0, s = () => { t > 0 && (e.unshift(y(f.queryAdvance).callFn(t === 1 ? [] : [d(t)]).toStmt()), t = 0); };
    for (let r = n.length - 1; r >= 0; r--) {
        let i = n[r];
        i === Wc ? t++ : (s(), e.unshift(i));
    }
    return s(), e;
}
function gx(n, e, t) {
    let s = [], r = [], i = Eh(a => r.push(a), Ic);
    n.forEach(a => {
        let l = Bf(a, e, { signalBased: f.viewQuerySignal, nonSignal: f.viewQuery });
        if (s.push(l.toStmt()), a.isSignal) {
            r.push(Wc);
            return;
        }
        let c = i(), p = y(f.loadQuery).callFn([]), h = y(f.queryRefresh).callFn([c.set(p)]), m = N(Ur).prop(a.propertyName).set(a.first ? c.prop("first") : c);
        r.push(h.and(m).toStmt());
    });
    let o = t ? `${t}_Query` : null;
    return en([new Z(Nc, Zo), new Z(Ur, null)], [Oo(1, s), Oo(2, Mf(r))], Oe, null, o);
}
function vx(n, e, t) {
    let s = [], r = [], i = Eh(a => r.push(a), Ic);
    for (let a of n) {
        if (s.push(Bf(a, e, { nonSignal: f.contentQuery, signalBased: f.contentQuerySignal }, [N("dirIndex")]).toStmt()), a.isSignal) {
            r.push(Wc);
            continue;
        }
        let l = i(), c = y(f.loadQuery).callFn([]), p = y(f.queryRefresh).callFn([l.set(c)]), h = N(Ur).prop(a.propertyName).set(a.first ? l.prop("first") : l);
        r.push(p.and(h).toStmt());
    }
    let o = t ? `${t}_ContentQueries` : null;
    return en([new Z(Nc, Zo), new Z(Ur, null), new Z("dirIndex", null)], [Oo(1, s), Oo(2, Mf(r))], Oe, null, o);
}
var Vo = class extends af {
    constructor() { super(Ml); }
    parse(e, t, s) { return super.parse(e, t, s); }
}, wp = ".", wx = "attr", Ex = "class", Sx = "style", xx = "*", Sa = "animate-", Ul = class {
    _exprParser;
    _interpolationConfig;
    _schemaRegistry;
    errors;
    constructor(e, t, s, r) { this._exprParser = e, this._interpolationConfig = t, this._schemaRegistry = s, this.errors = r; }
    get interpolationConfig() { return this._interpolationConfig; }
    createBoundHostProperties(e, t) {
        let s = [];
        for (let r of Object.keys(e)) {
            let i = e[r];
            typeof i == "string" ? this.parsePropertyBinding(r, i, !0, !1, t, t.start.offset, void 0, [], s, t) : this._reportError(`Value of the host property binding "${r}" needs to be a string representing an expression but got "${i}" (${typeof i})`, t);
        }
        return s;
    }
    createDirectiveHostEventAsts(e, t) {
        let s = [];
        for (let r of Object.keys(e)) {
            let i = e[r];
            typeof i == "string" ? this.parseEvent(r, i, !1, t, t, [], s, t) : this._reportError(`Value of the host listener "${r}" needs to be a string representing an expression but got "${i}" (${typeof i})`, t);
        }
        return s;
    }
    parseInterpolation(e, t, s) {
        let r = t.fullStart.offset;
        try {
            let i = this._exprParser.parseInterpolation(e, t, r, s, this._interpolationConfig);
            return i && this.errors.push(...i.errors), i;
        }
        catch (i) {
            return this._reportError(`${i}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, r);
        }
    }
    parseInterpolationExpression(e, t) {
        let s = t.start.offset;
        try {
            let r = this._exprParser.parseInterpolationExpression(e, t, s);
            return r && this.errors.push(...r.errors), r;
        }
        catch (r) {
            return this._reportError(`${r}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s);
        }
    }
    parseInlineTemplateBinding(e, t, s, r, i, o, a, l) {
        let c = s.start.offset + xx.length, p = this._parseTemplateBindings(e, t, s, c, r);
        for (let h of p) {
            let m = rn(s, h.sourceSpan), v = h.key.source, w = rn(s, h.key.span);
            if (h instanceof Br) {
                let C = h.value ? h.value.source : "$implicit", b = h.value ? rn(s, h.value.span) : void 0;
                a.push(new za(v, C, m, w, b));
            }
            else if (h.value) {
                let C = l ? m : s, b = rn(s, h.value.ast.sourceSpan);
                this._parsePropertyAst(v, h.value, !1, C, w, b, i, o);
            }
            else
                i.push([v, ""]), this.parseLiteralAttr(v, null, w, r, void 0, i, o, w);
        }
    }
    _parseTemplateBindings(e, t, s, r, i) {
        try {
            let o = this._exprParser.parseTemplateBindings(e, t, s, r, i);
            return o.errors.forEach(a => this.errors.push(a)), o.warnings.forEach(a => { this._reportError(a, s, fn.WARNING); }), o.templateBindings;
        }
        catch (o) {
            return this._reportError(`${o}`, s), [];
        }
    }
    parseLiteralAttr(e, t, s, r, i, o, a, l) { xa(e) ? (e = e.substring(1), l !== void 0 && (l = rn(l, new Qe(l.start.offset + 1, l.end.offset))), t && this._reportError("Assigning animation triggers via @prop=\"exp\" attributes with an expression is invalid. Use property bindings (e.g. [@prop]=\"exp\") or use an attribute without a value (e.g. @prop) instead.", s, fn.ERROR), this._parseLegacyAnimation(e, t, s, r, l, i, o, a)) : a.push(new ur(e, this._exprParser.wrapLiteralPrimitive(t, "", r), pn.LITERAL_ATTR, s, l, i)); }
    parsePropertyBinding(e, t, s, r, i, o, a, l, c, p) { e.length === 0 && this._reportError("Property name is missing in binding", i); let h = !1; e.startsWith(Sa) ? (h = !0, e = e.substring(Sa.length), p !== void 0 && (p = rn(p, new Qe(p.start.offset + Sa.length, p.end.offset)))) : xa(e) && (h = !0, e = e.substring(1), p !== void 0 && (p = rn(p, new Qe(p.start.offset + 1, p.end.offset)))), h ? this._parseLegacyAnimation(e, t, i, o, p, a, l, c) : this._parsePropertyAst(e, this.parseBinding(t, s, a || i, o), r, i, p, a, l, c); }
    parsePropertyInterpolation(e, t, s, r, i, o, a, l) { let c = this.parseInterpolation(t, r || s, l); return c ? (this._parsePropertyAst(e, c, !1, s, a, r, i, o), !0) : !1; }
    _parsePropertyAst(e, t, s, r, i, o, a, l) { a.push([e, t.source]), l.push(new ur(e, t, s ? pn.TWO_WAY : pn.DEFAULT, r, i, o)); }
    _parseLegacyAnimation(e, t, s, r, i, o, a, l) { e.length === 0 && this._reportError("Animation trigger is missing", s); let c = this.parseBinding(t || "undefined", !1, o || s, r); a.push([e, c.source]), l.push(new ur(e, c, pn.LEGACY_ANIMATION, s, i, o)); }
    parseBinding(e, t, s, r) {
        try {
            let i = t ? this._exprParser.parseSimpleBinding(e, s, r, this._interpolationConfig) : this._exprParser.parseBinding(e, s, r, this._interpolationConfig);
            return i && this.errors.push(...i.errors), i;
        }
        catch (i) {
            return this._reportError(`${i}`, s), this._exprParser.wrapLiteralPrimitive("ERROR", s, r);
        }
    }
    createBoundElementProperty(e, t, s = !1, r = !0) {
        if (t.isLegacyAnimation)
            return new Ki(t.name, Y.LegacyAnimation, te.NONE, t.expression, null, t.sourceSpan, t.keySpan, t.valueSpan);
        let i = null, o, a = null, l = t.name.split(wp), c;
        if (l.length > 1)
            if (l[0] == wx) {
                a = l.slice(1).join(wp), s || this._validatePropertyOrAttributeName(a, t.sourceSpan, !0), c = ya(this._schemaRegistry, e, a, !0);
                let p = a.indexOf(":");
                if (p > -1) {
                    let h = a.substring(0, p), m = a.substring(p + 1);
                    a = Ni(h, m);
                }
                o = Y.Attribute;
            }
            else
                l[0] == Ex ? (a = l[1], o = Y.Class, c = [te.NONE]) : l[0] == Sx && (i = l.length > 2 ? l[2] : null, a = l[1], o = Y.Style, c = [te.STYLE]);
        if (a === null) {
            let p = this._schemaRegistry.getMappedPropName(t.name);
            a = r ? p : t.name, c = ya(this._schemaRegistry, e, p, !1), o = t.type === pn.TWO_WAY ? Y.TwoWay : Y.Property, s || this._validatePropertyOrAttributeName(p, t.sourceSpan, !1);
        }
        return new Ki(a, o, c[0], t.expression, i, t.sourceSpan, t.keySpan, t.valueSpan);
    }
    parseEvent(e, t, s, r, i, o, a, l) { e.length === 0 && this._reportError("Event name is missing in binding", r), xa(e) ? (e = e.slice(1), l !== void 0 && (l = rn(l, new Qe(l.start.offset + 1, l.end.offset))), this._parseLegacyAnimationEvent(e, t, r, i, a, l)) : this._parseRegularEvent(e, t, s, r, i, o, a, l); }
    calcPossibleSecurityContexts(e, t, s) { let r = this._schemaRegistry.getMappedPropName(t); return ya(this._schemaRegistry, e, r, s); }
    parseEventListenerName(e) { let [t, s] = $d(e, [null, e]); return { eventName: s, target: t }; }
    parseLegacyAnimationEventName(e) { let t = Od(e, [e, null]); return { eventName: t[0], phase: t[1] === null ? null : t[1].toLowerCase() }; }
    _parseLegacyAnimationEvent(e, t, s, r, i, o) { let { eventName: a, phase: l } = this.parseLegacyAnimationEventName(e), c = this._parseAction(t, r); i.push(new Ji(a, l, pt.LegacyAnimation, c, s, r, o)), a.length === 0 && this._reportError("Animation event name is missing in binding", s), l ? l !== "start" && l !== "done" && this._reportError(`The provided animation output phase value "${l}" for "@${a}" is not supported (use start or done)`, s) : this._reportError(`The animation trigger output event (@${a}) is missing its phase value name (start or done are currently supported)`, s); }
    _parseRegularEvent(e, t, s, r, i, o, a, l) { let { eventName: c, target: p } = this.parseEventListenerName(e), h = this.errors.length, m = this._parseAction(t, i), v = this.errors.length === h; o.push([e, m.source]), s && v && !this._isAllowedAssignmentEvent(m) && this._reportError("Unsupported expression in a two-way binding", r), a.push(new Ji(c, p, s ? pt.TwoWay : pt.Regular, m, r, i, l)); }
    _parseAction(e, t) {
        let s = t && t.start ? t.start.offset : 0;
        try {
            let r = this._exprParser.parseAction(e, t, s, this._interpolationConfig);
            return r && this.errors.push(...r.errors), !r || r.ast instanceof Re ? (this._reportError("Empty expressions are not allowed", t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s)) : r;
        }
        catch (r) {
            return this._reportError(`${r}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s);
        }
    }
    _reportError(e, t, s = fn.ERROR) { this.errors.push(new D(t, e, s)); }
    _validatePropertyOrAttributeName(e, t, s) { let r = s ? this._schemaRegistry.validateAttribute(e) : this._schemaRegistry.validateProperty(e); r.error && this._reportError(r.msg, t, fn.ERROR); }
    _isAllowedAssignmentEvent(e) { return e instanceof Ge ? this._isAllowedAssignmentEvent(e.ast) : e instanceof Nr ? this._isAllowedAssignmentEvent(e.expression) : e instanceof Dr && e.args.length === 1 && e.receiver instanceof mn && e.receiver.name === "$any" && e.receiver.receiver instanceof Rt && !(e.receiver.receiver instanceof Kn) ? this._isAllowedAssignmentEvent(e.args[0]) : e instanceof mn || e instanceof Ls; }
};
function xa(n) { return n[0] == "@"; }
function ya(n, e, t, s) { let r, i = o => n.securityContext(o, t, s); return e === null ? r = n.allKnownElementNames().map(i) : (r = [], Xn.parse(e).forEach(o => { let a = o.element ? [o.element] : n.allKnownElementNames(), l = new Set(o.notSelectors.filter(p => p.isElementSelector()).map(p => p.element)), c = a.filter(p => !l.has(p)); r.push(...c.map(i)); })), r.length === 0 ? [te.NONE] : Array.from(new Set(r)).sort(); }
function rn(n, e) { let t = e.start - n.start.offset, s = e.end - n.end.offset; return new B(n.start.moveBy(t), n.end.moveBy(s), n.fullStart.moveBy(t), n.details); }
function yx(n) {
    if (n == null || n.length === 0 || n[0] == "/")
        return !1;
    let e = n.match(Cx);
    return e === null || e[1] == "package" || e[1] == "asset";
}
var Cx = /^([^:/?#]+):/, Ax = "select", _x = "link", Tx = "rel", bx = "href", kx = "stylesheet", Ix = "style", Nx = "script", Dx = "ngNonBindable", Px = "ngProjectAs";
function Rf(n) { let e = null, t = null, s = null, r = !1, i = ""; n.attrs.forEach(l => { let c = l.name.toLowerCase(); c == Ax ? e = l.value : c == bx ? t = l.value : c == Tx ? s = l.value : l.name == Dx ? r = !0 : l.name == Px && l.value.length > 0 && (i = l.value); }), e = Lx(e); let o = n.name.toLowerCase(), a = Ye.OTHER; return Ga(o) ? a = Ye.NG_CONTENT : o == Ix ? a = Ye.STYLE : o == Nx ? a = Ye.SCRIPT : o == _x && s == kx && (a = Ye.STYLESHEET), new Hl(a, e, t, r, i); }
var Ye = function (n) { return n[n.NG_CONTENT = 0] = "NG_CONTENT", n[n.STYLE = 1] = "STYLE", n[n.STYLESHEET = 2] = "STYLESHEET", n[n.SCRIPT = 3] = "SCRIPT", n[n.OTHER = 4] = "OTHER", n; }(Ye || {}), Hl = class {
    type;
    selectAttr;
    hrefAttr;
    nonBindable;
    projectAs;
    constructor(e, t, s, r, i) { this.type = e, this.selectAttr = t, this.hrefAttr = s, this.nonBindable = r, this.projectAs = i; }
};
function Lx(n) { return n === null || n.length === 0 ? "*" : n; }
var Bx = /^\s*([0-9A-Za-z_$]*)\s+of\s+([\S\s]*)/, Mx = /^track\s+([\S\s]*)/, Rx = /^(as\s+)(.*)/, jc = /^else[^\S\r\n]+if/, Fx = /^let\s+([\S\s]*)/, $x = /^[$A-Z_][0-9A-Z_$]*$/i, Ep = /(\s*)(\S+)(\s*)/, vr = new Set(["$index", "$first", "$last", "$even", "$odd", "$count"]);
function Sp(n) { return n === "empty"; }
function xp(n) { return n === "else" || jc.test(n); }
function Ox(n, e, t, s) {
    let r = Wx(e), i = [], o = yp(n, r, s);
    o !== null && i.push(new Hn(o.expression, L(t, n.children, n.children), o.expressionAlias, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.nameSpan, n.i18n));
    for (let h of e)
        if (jc.test(h.name)) {
            let m = yp(h, r, s);
            if (m !== null) {
                let v = L(t, h.children, h.children);
                i.push(new Hn(m.expression, v, m.expressionAlias, h.sourceSpan, h.startSourceSpan, h.endSourceSpan, h.nameSpan, h.i18n));
            }
        }
        else if (h.name === "else") {
            let m = L(t, h.children, h.children);
            i.push(new Hn(null, m, null, h.sourceSpan, h.startSourceSpan, h.endSourceSpan, h.nameSpan, h.i18n));
        }
    let a = i.length > 0 ? i[0].startSourceSpan : n.startSourceSpan, l = i.length > 0 ? i[i.length - 1].endSourceSpan : n.endSourceSpan, c = n.sourceSpan, p = i[i.length - 1];
    return p !== void 0 && (c = new B(a.start, p.sourceSpan.end)), { node: new io(i, c, n.startSourceSpan, l, n.nameSpan), errors: r };
}
function Vx(n, e, t, s) {
    let r = [], i = Ux(n, r, s), o = null, a = null;
    for (let l of e)
        l.name === "empty" ? a !== null ? r.push(new D(l.sourceSpan, "@for loop can only have one @empty block")) : l.parameters.length > 0 ? r.push(new D(l.sourceSpan, "@empty block cannot have parameters")) : a = new Or(L(t, l.children, l.children), l.sourceSpan, l.startSourceSpan, l.endSourceSpan, l.nameSpan, l.i18n) : r.push(new D(l.sourceSpan, `Unrecognized @for loop block "${l.name}"`));
    if (i !== null)
        if (i.trackBy === null)
            r.push(new D(n.startSourceSpan, "@for loop must have a \"track\" expression"));
        else {
            let l = a?.endSourceSpan ?? n.endSourceSpan, c = new B(n.sourceSpan.start, l?.end ?? n.sourceSpan.end);
            o = new Rs(i.itemName, i.expression, i.trackBy.expression, i.trackBy.keywordSpan, i.context, L(t, n.children, n.children), a, c, n.sourceSpan, n.startSourceSpan, l, n.nameSpan, n.i18n);
        }
    return { node: o, errors: r };
}
function qx(n, e, t) {
    let s = jx(n), r = n.parameters.length > 0 ? li(n.parameters[0], t) : t.parseBinding("", !1, n.sourceSpan, 0), i = [], o = [], a = null;
    for (let l of n.children) {
        if (!(l instanceof it))
            continue;
        if ((l.name !== "case" || l.parameters.length === 0) && l.name !== "default") {
            o.push(new oo(l.name, l.sourceSpan, l.nameSpan));
            continue;
        }
        let c = l.name === "case" ? li(l.parameters[0], t) : null, p = new $r(c, L(e, l.children, l.children), l.sourceSpan, l.startSourceSpan, l.endSourceSpan, l.nameSpan, l.i18n);
        c === null ? a = p : i.push(p);
    }
    return a !== null && i.push(a), { node: new ro(r, i, o, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.nameSpan), errors: s };
}
function Ux(n, e, t) {
    if (n.parameters.length === 0)
        return e.push(new D(n.startSourceSpan, "@for loop does not have an expression")), null;
    let [s, ...r] = n.parameters, i = zx(s, e)?.match(Bx);
    if (!i || i[2].trim().length === 0)
        return e.push(new D(s.sourceSpan, "Cannot parse expression. @for loop expression must match the pattern \"<identifier> of <expression>\"")), null;
    let [, o, a] = i;
    vr.has(o) && e.push(new D(s.sourceSpan, `@for loop item name cannot be one of ${Array.from(vr).join(", ")}.`));
    let l = s.expression.split(" ")[0], c = new B(s.sourceSpan.start, s.sourceSpan.start.moveBy(l.length)), p = { itemName: new Cn(o, "$implicit", c, c), trackBy: null, expression: li(s, t, a), context: Array.from(vr, h => { let m = new B(n.startSourceSpan.end, n.startSourceSpan.end); return new Cn(h, h, m, m); }) };
    for (let h of r) {
        let m = h.expression.match(Fx);
        if (m !== null) {
            let w = new B(h.sourceSpan.start.moveBy(m[0].length - m[1].length), h.sourceSpan.end);
            Hx(h.sourceSpan, m[1], w, o, p.context, e);
            continue;
        }
        let v = h.expression.match(Mx);
        if (v !== null) {
            if (p.trackBy !== null)
                e.push(new D(h.sourceSpan, "@for loop can only have one \"track\" expression"));
            else {
                let w = li(h, t, v[1]);
                w.ast instanceof Re && e.push(new D(n.startSourceSpan, "@for loop must have a \"track\" expression"));
                let C = new B(h.sourceSpan.start, h.sourceSpan.start.moveBy(5));
                p.trackBy = { expression: w, keywordSpan: C };
            }
            continue;
        }
        e.push(new D(h.sourceSpan, `Unrecognized @for loop parameter "${h.expression}"`));
    }
    return p;
}
function Hx(n, e, t, s, r, i) {
    let o = e.split(","), a = t.start;
    for (let l of o) {
        let c = l.split("="), p = c.length === 2 ? c[0].trim() : "", h = c.length === 2 ? c[1].trim() : "";
        if (p.length === 0 || h.length === 0)
            i.push(new D(n, "Invalid @for loop \"let\" parameter. Parameter should match the pattern \"<name> = <variable name>\""));
        else if (!vr.has(h))
            i.push(new D(n, `Unknown "let" parameter variable "${h}". The allowed variables are: ${Array.from(vr).join(", ")}`));
        else if (p === s)
            i.push(new D(n, `Invalid @for loop "let" parameter. Variable cannot be called "${s}"`));
        else if (r.some(m => m.name === p))
            i.push(new D(n, `Duplicate "let" parameter variable "${h}"`));
        else {
            let [, m, v] = c[0].match(Ep) ?? [], w = m !== void 0 && c.length === 2 ? new B(a.moveBy(m.length), a.moveBy(m.length + v.length)) : t, C;
            if (c.length === 2) {
                let [, _, P] = c[1].match(Ep) ?? [];
                C = _ !== void 0 ? new B(a.moveBy(c[0].length + 1 + _.length), a.moveBy(c[0].length + 1 + _.length + P.length)) : void 0;
            }
            let b = new B(w.start, C?.end ?? w.end);
            r.push(new Cn(p, h, b, w, C));
        }
        a = a.moveBy(l.length + 1);
    }
}
function Wx(n) {
    let e = [], t = !1;
    for (let s = 0; s < n.length; s++) {
        let r = n[s];
        r.name === "else" ? (t ? e.push(new D(r.startSourceSpan, "Conditional can only have one @else block")) : n.length > 1 && s < n.length - 1 ? e.push(new D(r.startSourceSpan, "@else block must be last inside the conditional")) : r.parameters.length > 0 && e.push(new D(r.startSourceSpan, "@else block cannot have parameters")), t = !0) : jc.test(r.name) || e.push(new D(r.startSourceSpan, `Unrecognized conditional block @${r.name}`));
    }
    return e;
}
function jx(n) {
    let e = [], t = !1;
    if (n.parameters.length !== 1)
        return e.push(new D(n.startSourceSpan, "@switch block must have exactly one parameter")), e;
    for (let s of n.children)
        if (!(s instanceof In || s instanceof nn && s.value.trim().length === 0)) {
            if (!(s instanceof it) || s.name !== "case" && s.name !== "default") {
                e.push(new D(s.sourceSpan, "@switch block can only contain @case and @default blocks"));
                continue;
            }
            s.name === "default" ? (t ? e.push(new D(s.startSourceSpan, "@switch block can only have one @default block")) : s.parameters.length > 0 && e.push(new D(s.startSourceSpan, "@default block cannot have parameters")), t = !0) : s.name === "case" && s.parameters.length !== 1 && e.push(new D(s.startSourceSpan, "@case block must have exactly one parameter"));
        }
    return e;
}
function li(n, e, t) { let s, r; return typeof t == "string" ? (s = Math.max(0, n.expression.lastIndexOf(t)), r = s + t.length) : (s = 0, r = n.expression.length), e.parseBinding(n.expression.slice(s, r), !1, n.sourceSpan, n.sourceSpan.start.offset + s); }
function yp(n, e, t) {
    if (n.parameters.length === 0)
        return e.push(new D(n.startSourceSpan, "Conditional block does not have an expression")), null;
    let s = li(n.parameters[0], t), r = null;
    for (let i = 1; i < n.parameters.length; i++) {
        let o = n.parameters[i], a = o.expression.match(Rx);
        if (a === null)
            e.push(new D(o.sourceSpan, `Unrecognized conditional parameter "${o.expression}"`));
        else if (n.name !== "if")
            e.push(new D(o.sourceSpan, "\"as\" expression is only allowed on the primary @if block"));
        else if (r !== null)
            e.push(new D(o.sourceSpan, "Conditional can only have one \"as\" expression"));
        else {
            let l = a[2].trim();
            if ($x.test(l)) {
                let c = o.sourceSpan.start.moveBy(a[1].length), p = new B(c, c.moveBy(l.length));
                r = new Cn(l, l, p, p);
            }
            else
                e.push(new D(o.sourceSpan, "\"as\" expression must be a valid JavaScript identifier"));
        }
    }
    return { expression: s, expressionAlias: r };
}
function zx(n, e) {
    let t = n.expression, s = /^\s$/, r = 0, i = 0, o = t.length - 1;
    for (let a = 0; a < t.length; a++) {
        let l = t[a];
        if (l === "(")
            i = a + 1, r++;
        else {
            if (s.test(l))
                continue;
            break;
        }
    }
    if (r === 0)
        return t;
    for (let a = t.length - 1; a > -1; a--) {
        let l = t[a];
        if (l === ")") {
            if (o = a, r--, r === 0)
                break;
        }
        else {
            if (s.test(l))
                continue;
            break;
        }
    }
    return r !== 0 ? (e.push(new D(n.sourceSpan, "Unclosed parentheses in expression")), null) : t.slice(i, o);
}
var Gx = /^\d+\.?\d*(ms|s)?$/, Xx = /^\s$/, Cp = new Map([[St, Fe], [As, ws], [yt, Pe]]), $e = function (n) { return n.IDLE = "idle", n.TIMER = "timer", n.INTERACTION = "interaction", n.IMMEDIATE = "immediate", n.HOVER = "hover", n.VIEWPORT = "viewport", n.NEVER = "never", n; }($e || {});
function Yx({ expression: n, sourceSpan: e }, t, s) { let r = n.indexOf("never"), i = new B(e.start.moveBy(r), e.start.moveBy(r + 5)), o = zc(n, e), a = Gc(n, e); r === -1 ? s.push(new D(e, "Could not find \"never\" keyword in expression")) : Xc("never", t, s, new Za(i, e, o, null, a)); }
function Ca({ expression: n, sourceSpan: e }, t, s, r) {
    let i = n.indexOf("when"), o = new B(e.start.moveBy(i), e.start.moveBy(i + 4)), a = zc(n, e), l = Gc(n, e);
    if (i === -1)
        r.push(new D(e, "Could not find \"when\" keyword in expression"));
    else {
        let c = ci(n, i + 1), p = t.parseBinding(n.slice(c), !1, e, e.start.offset + c);
        Xc("when", s, r, new eo(p, e, a, o, l));
    }
}
function Aa({ expression: n, sourceSpan: e }, t, s, r) {
    let i = n.indexOf("on"), o = new B(e.start.moveBy(i), e.start.moveBy(i + 2)), a = zc(n, e), l = Gc(n, e);
    if (i === -1)
        s.push(new D(e, "Could not find \"on\" keyword in expression"));
    else {
        let c = ci(n, i + 1);
        new Wl(n, c, e, t, s, n.startsWith("hydrate") ? sy : ny, r, a, o, l).parse();
    }
}
function zc(n, e) { return n.startsWith("prefetch") ? new B(e.start, e.start.moveBy(8)) : null; }
function Gc(n, e) { return n.startsWith("hydrate") ? new B(e.start, e.start.moveBy(7)) : null; }
var Wl = class {
    expression;
    start;
    span;
    triggers;
    errors;
    validator;
    placeholder;
    prefetchSpan;
    onSourceSpan;
    hydrateSpan;
    index = 0;
    tokens;
    constructor(e, t, s, r, i, o, a, l, c, p) { this.expression = e, this.start = t, this.span = s, this.triggers = r, this.errors = i, this.validator = o, this.placeholder = a, this.prefetchSpan = l, this.onSourceSpan = c, this.hydrateSpan = p, this.tokens = new oi().tokenize(e.slice(t)); }
    parse() {
        for (; this.tokens.length > 0 && this.index < this.tokens.length;) {
            let e = this.token();
            if (!e.isIdentifier()) {
                this.unexpectedToken(e);
                break;
            }
            if (this.isFollowedByOrLast(ut))
                this.consumeTrigger(e, []), this.advance();
            else if (this.isFollowedByOrLast(yt)) {
                this.advance();
                let t = this.errors.length, s = this.consumeParameters();
                if (this.errors.length !== t)
                    break;
                this.consumeTrigger(e, s), this.advance();
            }
            else
                this.index < this.tokens.length - 1 && this.unexpectedToken(this.tokens[this.index + 1]);
            this.advance();
        }
    }
    advance() { this.index++; }
    isFollowedByOrLast(e) { return this.index === this.tokens.length - 1 ? !0 : this.tokens[this.index + 1].isCharacter(e); }
    token() { return this.tokens[Math.min(this.index, this.tokens.length - 1)]; }
    consumeTrigger(e, t) {
        let s = this.span.start.moveBy(this.start + e.index - this.tokens[0].index), r = new B(s, s.moveBy(e.strValue.length)), i = s.moveBy(this.token().end - e.index), o = e.index === 0, a = o ? this.onSourceSpan : null, l = o ? this.prefetchSpan : null, c = o ? this.hydrateSpan : null, p = new B(o ? this.span.start : s, i);
        try {
            switch (e.toString()) {
                case $e.IDLE:
                    this.trackTrigger("idle", Qx(t, r, p, l, a, c));
                    break;
                case $e.TIMER:
                    this.trackTrigger("timer", Zx(t, r, p, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan));
                    break;
                case $e.INTERACTION:
                    this.trackTrigger("interaction", ey(t, r, p, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.validator));
                    break;
                case $e.IMMEDIATE:
                    this.trackTrigger("immediate", Jx(t, r, p, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan));
                    break;
                case $e.HOVER:
                    this.trackTrigger("hover", Kx(t, r, p, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.placeholder, this.validator));
                    break;
                case $e.VIEWPORT:
                    this.trackTrigger("viewport", ty(t, r, p, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.validator));
                    break;
                default: throw new Error(`Unrecognized trigger type "${e}"`);
            }
        }
        catch (h) {
            this.error(e, h.message);
        }
    }
    consumeParameters() {
        let e = [];
        if (!this.token().isCharacter(yt))
            return this.unexpectedToken(this.token()), e;
        this.advance();
        let t = [], s = "";
        for (; this.index < this.tokens.length;) {
            let r = this.token();
            if (r.isCharacter(Pe) && t.length === 0) {
                s.length && e.push(s);
                break;
            }
            if (r.type === $.Character && Cp.has(r.numValue) && t.push(Cp.get(r.numValue)), t.length > 0 && r.isCharacter(t[t.length - 1]) && t.pop(), t.length === 0 && r.isCharacter(ut) && s.length > 0) {
                e.push(s), s = "", this.advance();
                continue;
            }
            s += this.tokenText(), this.advance();
        }
        return (!this.token().isCharacter(Pe) || t.length > 0) && this.error(this.token(), "Unexpected end of expression"), this.index < this.tokens.length - 1 && !this.tokens[this.index + 1].isCharacter(ut) && this.unexpectedToken(this.tokens[this.index + 1]), e;
    }
    tokenText() { return this.expression.slice(this.start + this.token().index, this.start + this.token().end); }
    trackTrigger(e, t) { Xc(e, this.triggers, this.errors, t); }
    error(e, t) { let s = this.span.start.moveBy(this.start + e.index), r = s.moveBy(e.end - e.index); this.errors.push(new D(new B(s, r), t)); }
    unexpectedToken(e) { this.error(e, `Unexpected token "${e}"`); }
};
function Xc(n, e, t, s) { e[n] ? t.push(new D(s.sourceSpan, `Duplicate "${n}" trigger is not allowed`)) : e[n] = s; }
function Qx(n, e, t, s, r, i) {
    if (n.length > 0)
        throw new Error(`"${$e.IDLE}" trigger cannot have parameters`);
    return new Ja(e, t, s, r, i);
}
function Zx(n, e, t, s, r, i) {
    if (n.length !== 1)
        throw new Error(`"${$e.TIMER}" trigger must have exactly one parameter`);
    let o = qo(n[0]);
    if (o === null)
        throw new Error(`Could not parse time value of trigger "${$e.TIMER}"`);
    return new el(o, e, t, s, r, i);
}
function Jx(n, e, t, s, r, i) {
    if (n.length > 0)
        throw new Error(`"${$e.IMMEDIATE}" trigger cannot have parameters`);
    return new Ka(e, t, s, r, i);
}
function Kx(n, e, t, s, r, i, o, a) { return a($e.HOVER, n), new to(n[0] ?? null, e, t, s, r, i); }
function ey(n, e, t, s, r, i, o) { return o($e.INTERACTION, n), new no(n[0] ?? null, e, t, s, r, i); }
function ty(n, e, t, s, r, i, o) { return o($e.VIEWPORT, n), new so(n[0] ?? null, e, t, s, r, i); }
function ny(n, e) {
    if (e.length > 1)
        throw new Error(`"${n}" trigger can only have zero or one parameters`);
}
function sy(n, e) {
    if (e.length > 0)
        throw new Error(`Hydration trigger "${n}" cannot have parameters`);
}
function ci(n, e = 0) {
    let t = !1;
    for (let s = e; s < n.length; s++)
        if (Xx.test(n[s]))
            t = !0;
        else if (t)
            return s;
    return -1;
}
function qo(n) {
    let e = n.match(Gx);
    if (!e)
        return null;
    let [t, s] = e;
    return parseFloat(t) * (s === "s" ? 1e3 : 1);
}
var ry = /^prefetch\s+when\s/, iy = /^prefetch\s+on\s/, oy = /^hydrate\s+when\s/, ay = /^hydrate\s+on\s/, ly = /^hydrate\s+never(\s*)$/, Ff = /^minimum\s/, cy = /^after\s/, uy = /^when\s/, py = /^on\s/;
function jl(n) { return n === "placeholder" || n === "loading" || n === "error"; }
function hy(n, e, t, s) {
    let r = [], { placeholder: i, loading: o, error: a } = fy(e, r, t), { triggers: l, prefetchTriggers: c, hydrateTriggers: p } = vy(n, s, r, i), h = n.endSourceSpan, m = n.sourceSpan.end;
    if (e.length > 0) {
        let C = e[e.length - 1];
        h = C.endSourceSpan, m = C.sourceSpan.end;
    }
    let v = new B(n.sourceSpan.start, m);
    return { node: new es(L(t, n.children, n.children), l, c, p, i, o, a, n.nameSpan, v, n.sourceSpan, n.startSourceSpan, h, n.i18n), errors: r };
}
function fy(n, e, t) {
    let s = null, r = null, i = null;
    for (let o of n)
        try {
            if (!jl(o.name)) {
                e.push(new D(o.startSourceSpan, `Unrecognized block "@${o.name}"`));
                break;
            }
            switch (o.name) {
                case "placeholder":
                    s !== null ? e.push(new D(o.startSourceSpan, "@defer block can only have one @placeholder block")) : s = dy(o, t);
                    break;
                case "loading":
                    r !== null ? e.push(new D(o.startSourceSpan, "@defer block can only have one @loading block")) : r = my(o, t);
                    break;
                case "error":
                    i !== null ? e.push(new D(o.startSourceSpan, "@defer block can only have one @error block")) : i = gy(o, t);
                    break;
            }
        }
        catch (a) {
            e.push(new D(o.startSourceSpan, a.message));
        }
    return { placeholder: s, loading: r, error: i };
}
function dy(n, e) {
    let t = null;
    for (let s of n.parameters)
        if (Ff.test(s.expression)) {
            if (t != null)
                throw new Error("@placeholder block can only have one \"minimum\" parameter");
            let r = qo(s.expression.slice(ci(s.expression)));
            if (r === null)
                throw new Error("Could not parse time value of parameter \"minimum\"");
            t = r;
        }
        else
            throw new Error(`Unrecognized parameter in @placeholder block: "${s.expression}"`);
    return new Mr(L(e, n.children, n.children), t, n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n);
}
function my(n, e) {
    let t = null, s = null;
    for (let r of n.parameters)
        if (cy.test(r.expression)) {
            if (t != null)
                throw new Error("@loading block can only have one \"after\" parameter");
            let i = qo(r.expression.slice(ci(r.expression)));
            if (i === null)
                throw new Error("Could not parse time value of parameter \"after\"");
            t = i;
        }
        else if (Ff.test(r.expression)) {
            if (s != null)
                throw new Error("@loading block can only have one \"minimum\" parameter");
            let i = qo(r.expression.slice(ci(r.expression)));
            if (i === null)
                throw new Error("Could not parse time value of parameter \"minimum\"");
            s = i;
        }
        else
            throw new Error(`Unrecognized parameter in @loading block: "${r.expression}"`);
    return new Rr(L(e, n.children, n.children), t, s, n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n);
}
function gy(n, e) {
    if (n.parameters.length > 0)
        throw new Error("@error block cannot have parameters");
    return new Fr(L(e, n.children, n.children), n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n);
}
function vy(n, e, t, s) {
    let r = {}, i = {}, o = {};
    for (let a of n.parameters)
        uy.test(a.expression) ? Ca(a, e, r, t) : py.test(a.expression) ? Aa(a, r, t, s) : ry.test(a.expression) ? Ca(a, e, i, t) : iy.test(a.expression) ? Aa(a, i, t, s) : oy.test(a.expression) ? Ca(a, e, o, t) : ay.test(a.expression) ? Aa(a, o, t, s) : ly.test(a.expression) ? Yx(a, o, t) : t.push(new D(a.sourceSpan, "Unrecognized trigger"));
    return o.never && Object.keys(o).length > 1 && t.push(new D(n.startSourceSpan, "Cannot specify additional `hydrate` triggers if `hydrate never` is present")), { triggers: r, prefetchTriggers: i, hydrateTriggers: o };
}
var wy = /^(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@))(.*)$/, Ap = 1, _p = 2, Tp = 3, bp = 4, kp = 5, Ey = 6, nr = 7, on = { BANANA_BOX: { start: "[(", end: ")]" }, PROPERTY: { start: "[", end: "]" }, EVENT: { start: "(", end: ")" } }, _a = "*", Sy = new Set(["link", "style", "script", "ng-template", "ng-container", "ng-content"]), xy = new Set(["ngProjectAs", "ngNonBindable"]);
function yy(n, e, t) { let s = new zl(e, t), r = L(s, n, n), i = e.errors.concat(s.errors), o = { nodes: r, errors: i, styleUrls: s.styleUrls, styles: s.styles, ngContentSelectors: s.ngContentSelectors }; return t.collectCommentNodes && (o.commentNodes = s.commentNodes), o; }
var zl = class {
    bindingParser;
    options;
    errors = [];
    styles = [];
    styleUrls = [];
    ngContentSelectors = [];
    commentNodes = [];
    inI18nBlock = !1;
    processedNodes = new Set;
    constructor(e, t) { this.bindingParser = e, this.options = t; }
    visitElement(e) {
        let t = Li(e.i18n);
        t && (this.inI18nBlock && this.reportError("Cannot mark an element as translatable inside of a translatable section. Please remove the nested i18n marker.", e.sourceSpan), this.inI18nBlock = !0);
        let s = Rf(e);
        if (s.type === Ye.SCRIPT)
            return null;
        if (s.type === Ye.STYLE) {
            let _ = Cy(e);
            return _ !== null && this.styles.push(_), null;
        }
        else if (s.type === Ye.STYLESHEET && yx(s.hrefAttr))
            return this.styleUrls.push(s.hrefAttr), null;
        let r = sm(e.name), { attributes: i, boundEvents: o, references: a, variables: l, templateVariables: c, elementHasInlineTemplate: p, parsedProperties: h, templateParsedProperties: m, i18nAttrsMeta: v } = this.prepareAttributes(e.attrs, r), w = this.extractDirectives(e), C;
        s.nonBindable ? C = L(Ip, e.children).flat(1 / 0) : C = L(this, e.children, e.children);
        let b;
        if (s.type === Ye.NG_CONTENT) {
            let _ = s.selectAttr, P = e.attrs.map(K => this.visitAttribute(K));
            b = new Fs(_, P, C, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n), this.ngContentSelectors.push(_);
        }
        else if (r) {
            let _ = this.categorizePropertyAttributes(e.name, h, v);
            b = new Je(e.name, i, _.bound, o, w, [], C, a, l, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
        }
        else {
            let _ = this.categorizePropertyAttributes(e.name, h, v);
            b = new Ft(e.name, i, _.bound, o, w, C, a, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
        }
        return p && (b = this.wrapInTemplate(b, m, c, v, r, t)), t && (this.inI18nBlock = !1), b;
    }
    visitAttribute(e) { return new Ms(e.name, e.value, e.sourceSpan, e.keySpan, e.valueSpan, e.i18n); }
    visitText(e) { return this.processedNodes.has(e) ? null : this._visitTextWithInterpolation(e.value, e.sourceSpan, e.tokens, e.i18n); }
    visitExpansion(e) {
        if (!e.i18n)
            return null;
        if (!Li(e.i18n))
            throw new Error(`Invalid type "${e.i18n.constructor}" for "i18n" property of ${e.sourceSpan.toString()}. Expected a "Message"`);
        let t = e.i18n, s = {}, r = {};
        return Object.keys(t.placeholders).forEach(i => {
            let o = t.placeholders[i];
            if (i.startsWith(dm)) {
                let a = i.trim(), l = this.bindingParser.parseInterpolationExpression(o.text, o.sourceSpan);
                s[a] = new Bs(l, o.sourceSpan);
            }
            else
                r[i] = this._visitTextWithInterpolation(o.text, o.sourceSpan, null);
        }), new dh(s, r, e.sourceSpan, t);
    }
    visitExpansionCase(e) { return null; }
    visitComment(e) { return this.options.collectCommentNodes && this.commentNodes.push(new ea(e.value || "", e.sourceSpan)), null; }
    visitLetDeclaration(e, t) { let s = this.bindingParser.parseBinding(e.value, !1, e.valueSpan, e.valueSpan.start.offset); return s.errors.length === 0 && s.ast instanceof Re && this.reportError("@let declaration value cannot be empty", e.valueSpan), new Ac(e.name, s, e.sourceSpan, e.nameSpan, e.valueSpan); }
    visitComponent(e) {
        let t = Li(e.i18n);
        if (t && (this.inI18nBlock && this.reportError("Cannot mark a component as translatable inside of a translatable section. Please remove the nested i18n marker.", e.sourceSpan), this.inI18nBlock = !0), e.tagName !== null && Sy.has(e.tagName))
            return this.reportError(`Tag name "${e.tagName}" cannot be used as a component tag`, e.startSourceSpan), null;
        let { attributes: s, boundEvents: r, references: i, templateVariables: o, elementHasInlineTemplate: a, parsedProperties: l, templateParsedProperties: c, i18nAttrsMeta: p } = this.prepareAttributes(e.attrs, !1);
        this.validateSelectorlessReferences(i);
        let h = this.extractDirectives(e), m;
        e.attrs.find(C => C.name === "ngNonBindable") ? m = L(Ip, e.children).flat(1 / 0) : m = L(this, e.children, e.children);
        let v = this.categorizePropertyAttributes(e.tagName, l, p), w = new pr(e.componentName, e.tagName, e.fullName, s, v.bound, r, h, m, i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
        return a && (w = this.wrapInTemplate(w, c, o, p, !1, t)), t && (this.inI18nBlock = !1), w;
    }
    visitDirective() { return null; }
    visitBlockParameter() { return null; }
    visitBlock(e, t) {
        let s = Array.isArray(t) ? t.indexOf(e) : -1;
        if (s === -1)
            throw new Error("Visitor invoked incorrectly. Expecting visitBlock to be invoked siblings array as its context");
        if (this.processedNodes.has(e))
            return null;
        let r = null;
        switch (e.name) {
            case "defer":
                r = hy(e, this.findConnectedBlocks(s, t, jl), this, this.bindingParser);
                break;
            case "switch":
                r = qx(e, this, this.bindingParser);
                break;
            case "for":
                r = Vx(e, this.findConnectedBlocks(s, t, Sp), this, this.bindingParser);
                break;
            case "if":
                r = Ox(e, this.findConnectedBlocks(s, t, xp), this, this.bindingParser);
                break;
            default:
                let i;
                jl(e.name) ? (i = `@${e.name} block can only be used after an @defer block.`, this.processedNodes.add(e)) : Sp(e.name) ? (i = `@${e.name} block can only be used after an @for block.`, this.processedNodes.add(e)) : xp(e.name) ? (i = `@${e.name} block can only be used after an @if or @else if block.`, this.processedNodes.add(e)) : i = `Unrecognized block @${e.name}.`, r = { node: new oo(e.name, e.sourceSpan, e.nameSpan), errors: [new D(e.sourceSpan, i)] };
                break;
        }
        return this.errors.push(...r.errors), r.node;
    }
    findConnectedBlocks(e, t, s) {
        let r = [];
        for (let i = e + 1; i < t.length; i++) {
            let o = t[i];
            if (!(o instanceof In)) {
                if (o instanceof nn && o.value.trim().length === 0) {
                    this.processedNodes.add(o);
                    continue;
                }
                if (!(o instanceof it) || !s(o.name))
                    break;
                r.push(o), this.processedNodes.add(o);
            }
        }
        return r;
    }
    categorizePropertyAttributes(e, t, s) {
        let r = [], i = [];
        return t.forEach(o => {
            let a = s[o.name];
            if (o.isLiteral)
                i.push(new Ms(o.name, o.expression.source || "", o.sourceSpan, o.keySpan, o.valueSpan, a));
            else {
                let l = this.bindingParser.createBoundElementProperty(e, o, !0, !1);
                r.push(Ya.fromBoundElementProperty(l, a));
            }
        }), { bound: r, literal: i };
    }
    prepareAttributes(e, t) {
        let s = [], r = [], i = [], o = [], a = [], l = {}, c = [], p = [], h = !1;
        for (let m of e) {
            let v = !1, w = Np(m.name), C = !1;
            if (m.i18n && (l[m.name] = m.i18n), w.startsWith(_a)) {
                h && this.reportError("Can't have multiple template bindings on one element. Use only one attribute prefixed with *", m.sourceSpan), C = !0, h = !0;
                let b = m.value, _ = w.substring(_a.length), P = [], K = m.valueSpan ? m.valueSpan.start.offset : m.sourceSpan.start.offset + m.name.length;
                this.bindingParser.parseInlineTemplateBinding(_, b, m.sourceSpan, K, [], c, P, !0), p.push(...P.map(ne => new Cn(ne.name, ne.value, ne.sourceSpan, ne.keySpan, ne.valueSpan)));
            }
            else
                v = this.parseAttribute(t, m, [], s, r, i, o);
            !v && !C && a.push(this.visitAttribute(m));
        }
        return { attributes: a, boundEvents: r, references: o, variables: i, templateVariables: p, elementHasInlineTemplate: h, parsedProperties: s, templateParsedProperties: c, i18nAttrsMeta: l };
    }
    parseAttribute(e, t, s, r, i, o, a) {
        let l = Np(t.name), c = t.value, p = t.sourceSpan, h = t.valueSpan ? t.valueSpan.start.offset : p.start.offset;
        function m(_, P, K) { let ne = t.name.length - l.length, de = _.start.moveBy(P.length + ne), oa = de.moveBy(K.length); return new B(de, oa, de, K); }
        let v = l.match(wy);
        if (v) {
            if (v[Ap] != null) {
                let _ = v[nr], P = m(p, v[Ap], _);
                this.bindingParser.parsePropertyBinding(_, c, !1, !1, p, h, t.valueSpan, s, r, P);
            }
            else if (v[_p]) {
                if (e) {
                    let _ = v[nr], P = m(p, v[_p], _);
                    this.parseVariable(_, c, p, P, t.valueSpan, o);
                }
                else
                    this.reportError("\"let-\" is only supported on ng-template elements.", p);
            }
            else if (v[Tp]) {
                let _ = v[nr], P = m(p, v[Tp], _);
                this.parseReference(_, c, p, P, t.valueSpan, a);
            }
            else if (v[bp]) {
                let _ = [], P = v[nr], K = m(p, v[bp], P);
                this.bindingParser.parseEvent(P, c, !1, p, t.valueSpan || p, s, _, K), Ta(_, i);
            }
            else if (v[kp]) {
                let _ = v[nr], P = m(p, v[kp], _);
                this.bindingParser.parsePropertyBinding(_, c, !1, !0, p, h, t.valueSpan, s, r, P), this.parseAssignmentEvent(_, c, p, t.valueSpan, s, i, P);
            }
            else if (v[Ey]) {
                let _ = m(p, "", l);
                this.bindingParser.parseLiteralAttr(l, c, p, h, t.valueSpan, s, r, _);
            }
            return !0;
        }
        let w = null;
        if (l.startsWith(on.BANANA_BOX.start) ? w = on.BANANA_BOX : l.startsWith(on.PROPERTY.start) ? w = on.PROPERTY : l.startsWith(on.EVENT.start) && (w = on.EVENT), w !== null && l.endsWith(w.end) && l.length > w.start.length + w.end.length) {
            let _ = l.substring(w.start.length, l.length - w.end.length), P = m(p, w.start, _);
            if (w.start === on.BANANA_BOX.start)
                this.bindingParser.parsePropertyBinding(_, c, !1, !0, p, h, t.valueSpan, s, r, P), this.parseAssignmentEvent(_, c, p, t.valueSpan, s, i, P);
            else if (w.start === on.PROPERTY.start)
                this.bindingParser.parsePropertyBinding(_, c, !1, !1, p, h, t.valueSpan, s, r, P);
            else {
                let K = [];
                this.bindingParser.parseEvent(_, c, !1, p, t.valueSpan || p, s, K, P), Ta(K, i);
            }
            return !0;
        }
        let C = m(p, "", l);
        return this.bindingParser.parsePropertyInterpolation(l, c, p, t.valueSpan, s, r, C, t.valueTokens ?? null);
    }
    extractDirectives(e) {
        let t = e instanceof ye ? e.tagName : e.name, s = [], r = new Set;
        for (let i of e.directives) {
            let o = !1;
            for (let v of i.attrs)
                v.name.startsWith(_a) ? (o = !0, this.reportError(`Shorthand template syntax "${v.name}" is not supported inside a directive context`, v.sourceSpan)) : xy.has(v.name) && (o = !0, this.reportError(`Attribute "${v.name}" is not supported in a directive context`, v.sourceSpan));
            if (!o && r.has(i.name) && (o = !0, this.reportError(`Cannot apply directive "${i.name}" multiple times on the same element`, i.sourceSpan)), o)
                continue;
            let { attributes: a, parsedProperties: l, boundEvents: c, references: p, i18nAttrsMeta: h } = this.prepareAttributes(i.attrs, !1);
            this.validateSelectorlessReferences(p);
            let { bound: m } = this.categorizePropertyAttributes(t, l, h);
            for (let v of m)
                v.type !== Y.Property && v.type !== Y.TwoWay && (o = !0, this.reportError("Binding is not supported in a directive context", v.sourceSpan));
            o || (r.add(i.name), s.push(new fh(i.name, a, m, c, p, i.sourceSpan, i.startSourceSpan, i.endSourceSpan, void 0)));
        }
        return s;
    }
    wrapInTemplate(e, t, s, r, i, o) { let a = this.categorizePropertyAttributes("ng-template", t, r), l = []; a.literal.forEach(m => l.push(m)), a.bound.forEach(m => l.push(m)); let c = { attributes: [], inputs: [], outputs: [] }; (e instanceof Ft || e instanceof pr) && (c.attributes.push(...e.attributes), c.inputs.push(...e.inputs), c.outputs.push(...e.outputs)); let p = i && o ? void 0 : e.i18n, h; return e instanceof pr ? h = e.tagName : e instanceof Je ? h = null : h = e.name, new Je(h, c.attributes, c.inputs, c.outputs, [], l, [e], [], s, !1, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, p); }
    _visitTextWithInterpolation(e, t, s, r) { let i = uf(e), o = this.bindingParser.parseInterpolation(i, t, s); return o ? new Bs(o, t, r) : new On(i, t); }
    parseVariable(e, t, s, r, i, o) { e.indexOf("-") > -1 ? this.reportError("\"-\" is not allowed in variable names", s) : e.length === 0 && this.reportError("Variable does not have a name", s), o.push(new Cn(e, t, s, r, i)); }
    parseReference(e, t, s, r, i, o) { e.indexOf("-") > -1 ? this.reportError("\"-\" is not allowed in reference names", s) : e.length === 0 ? this.reportError("Reference does not have a name", s) : o.some(a => a.name === e) && this.reportError(`Reference "#${e}" is defined more than once`, s), o.push(new Vr(e, t, s, r, i)); }
    parseAssignmentEvent(e, t, s, r, i, o, a) { let l = []; this.bindingParser.parseEvent(`${e}Change`, t, !0, s, r || s, i, l, a), Ta(l, o); }
    validateSelectorlessReferences(e) {
        if (e.length === 0)
            return;
        let t = new Set;
        for (let s of e)
            s.value.length > 0 ? this.reportError("Cannot specify a value for a local reference in this context", s.valueSpan || s.sourceSpan) : t.has(s.name) ? this.reportError("Duplicate reference names are not allowed", s.sourceSpan) : t.add(s.name);
    }
    reportError(e, t, s = fn.ERROR) { this.errors.push(new D(t, e, s)); }
}, Gl = class {
    visitElement(e) {
        let t = Rf(e);
        if (t.type === Ye.SCRIPT || t.type === Ye.STYLE || t.type === Ye.STYLESHEET)
            return null;
        let s = L(this, e.children, null);
        return new Ft(e.name, L(this, e.attrs), [], [], [], s, [], e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan);
    }
    visitComment(e) { return null; }
    visitAttribute(e) { return new Ms(e.name, e.value, e.sourceSpan, e.keySpan, e.valueSpan, e.i18n); }
    visitText(e) { return new On(e.value, e.sourceSpan); }
    visitExpansion(e) { return null; }
    visitExpansionCase(e) { return null; }
    visitBlock(e, t) { let s = [new On(e.startSourceSpan.toString(), e.startSourceSpan), ...L(this, e.children)]; return e.endSourceSpan !== null && s.push(new On(e.endSourceSpan.toString(), e.endSourceSpan)), s; }
    visitBlockParameter(e, t) { return null; }
    visitLetDeclaration(e, t) { return new On(`@let ${e.name} = ${e.value};`, e.sourceSpan); }
    visitComponent(e, t) { let s = L(this, e.children, null); return new Ft(e.fullName, L(this, e.attrs), [], [], [], s, [], e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitDirective(e, t) { return null; }
}, Ip = new Gl;
function Np(n) { return /^data-/i.test(n) ? n.substring(5) : n; }
function Ta(n, e) { e.push(...n.map(t => Qa.fromParsedEvent(t))); }
function Cy(n) { return n.children.length !== 1 || !(n.children[0] instanceof nn) ? null : n.children[0].value; }
var Ay = [" ", `
`, "\r", "\t"];
function $f(n, e, t = {}) {
    let { interpolationConfig: s, preserveWhitespaces: r, enableI18nLegacyMessageIdFormat: i } = t, o = t.enableSelectorless ?? !1, a = Uo(s, o), c = new Vo().parse(n, e, ue(E({ leadingTriviaChars: Ay }, t), { tokenizeExpansionForms: !0, tokenizeBlocks: t.enableBlockSyntax ?? !0, tokenizeLet: t.enableLetSyntax ?? !0, selectorlessEnabled: o }));
    if (!t.alwaysAttemptHtmlToR3AstConversion && c.errors && c.errors.length > 0) {
        let de = { interpolationConfig: s, preserveWhitespaces: r, errors: c.errors, nodes: [], styleUrls: [], styles: [], ngContentSelectors: [] };
        return t.collectCommentNodes && (de.commentNodes = []), de;
    }
    let p = c.rootNodes, h = !(t.preserveSignificantWhitespace ?? !0), m = new Po(s, !r, i, void 0, t.preserveSignificantWhitespace, h), v = m.visitAllWithErrors(p);
    if (!t.alwaysAttemptHtmlToR3AstConversion && v.errors && v.errors.length > 0) {
        let de = { interpolationConfig: s, preserveWhitespaces: r, errors: v.errors, nodes: [], styleUrls: [], styles: [], ngContentSelectors: [] };
        return t.collectCommentNodes && (de.commentNodes = []), de;
    }
    p = v.rootNodes, r || (p = L(new ii(!0, void 0, !1), p), m.hasI18nMeta && (p = L(new Po(s, !1, void 0, void 0, !0, h), p)));
    let { nodes: w, errors: C, styleUrls: b, styles: _, ngContentSelectors: P, commentNodes: K } = yy(p, a, { collectCommentNodes: !!t.collectCommentNodes });
    C.push(...c.errors, ...v.errors);
    let ne = { interpolationConfig: s, preserveWhitespaces: r, errors: C.length > 0 ? C : null, nodes: w, styleUrls: b, styles: _, ngContentSelectors: P };
    return t.collectCommentNodes && (ne.commentNodes = K), ne;
}
var _y = new zs;
function Uo(n = ot, e = !1) { return new Ul(new Do(new oi(), e), n, _y, []); }
var Ho = "%COMP%", Xl = `_nghost-${Ho}`, Yl = `_ngcontent-${Ho}`;
function Of(n, e, t) { let s = new oe, r = Qo(n.selector); return s.set("type", n.type.value), r.length > 0 && s.set("selectors", Le(r)), n.queries.length > 0 && s.set("contentQueries", vx(n.queries, e, n.name)), n.viewQueries.length && s.set("viewQuery", gx(n.viewQueries, e, n.name)), s.set("hostBindings", Dy(n.host, n.typeSourceSpan, t, e, n.selector || "", n.name, s)), s.set("inputs", ll(n.inputs, !0)), s.set("outputs", ll(n.outputs)), n.exportAs !== null && s.set("exportAs", R(n.exportAs.map(i => d(i)))), n.isStandalone === !1 && s.set("standalone", d(!1)), n.isSignal && s.set("signals", d(!0)), s; }
function Vf(n, e) {
    let t = [], s = e.providers, r = e.viewProviders;
    if (s || r) {
        let i = [s || new ft([])];
        r && i.push(r), t.push(y(f.ProvidersFeature).callFn(i));
    }
    if (e.hostDirectives?.length && t.push(y(f.HostDirectivesFeature).callFn([Ry(e.hostDirectives)])), e.usesInheritance && t.push(y(f.InheritDefinitionFeature)), e.fullInheritance && t.push(y(f.CopyDefinitionFeature)), e.lifecycle.usesOnChanges && t.push(y(f.NgOnChangesFeature)), "externalStyles" in e && e.externalStyles?.length) {
        let i = e.externalStyles.map(o => d(o));
        t.push(y(f.ExternalStylesFeature).callFn([R(i)]));
    }
    t.length && n.set("features", R(t));
}
function Ty(n, e, t) { let s = Of(n, e, t); Vf(s, n); let r = y(f.defineDirective).callFn([s.toLiteralMap()], void 0, !0), i = Hf(n); return { expression: r, type: i, statements: [] }; }
function by(n, e, t) {
    let s = Of(n, e, t);
    Vf(s, n);
    let r = n.selector && Xn.parse(n.selector), i = r && r[0];
    if (i) {
        let w = i.getAttrs();
        w.length && s.set("attrs", e.getConstLiteral(R(w.map(C => C != null ? d(C) : d(void 0))), !0));
    }
    let o = n.name, a = null;
    if (n.defer.mode === 1 && n.defer.dependenciesFn !== null) {
        let w = `${o}_DeferFn`;
        e.statements.push(new le(w, n.defer.dependenciesFn, void 0, ae.Final)), a = N(w);
    }
    let l = n.isStandalone && !n.hasDirectiveDependencies ? je.DomOnly : je.Full, c = G2(n.name, n.template.nodes, e, l, n.relativeContextFilePath, n.i18nUseExternalIds, n.defer, a, n.relativeTemplatePath, fx());
    Af(c, A.Tmpl);
    let p = W2(c, e);
    if (c.contentSelectors !== null && s.set("ngContentSelectors", c.contentSelectors), s.set("decls", d(c.root.decls)), s.set("vars", d(c.root.vars)), c.consts.length > 0 && (c.constsInitializers.length > 0 ? s.set("consts", ie([], [...c.constsInitializers, new _e(R(c.consts))])) : s.set("consts", R(c.consts))), s.set("template", p), n.declarationListEmitMode !== 3 && n.declarations.length > 0)
        s.set("dependencies", ky(R(n.declarations.map(w => w.type)), n.declarationListEmitMode));
    else if (n.declarationListEmitMode === 3) {
        let w = [n.type.value];
        n.rawImports && w.push(n.rawImports), s.set("dependencies", y(f.getComponentDepsFactory).callFn(w));
    }
    n.encapsulation === null && (n.encapsulation = Et.Emulated);
    let h = !!n.externalStyles?.length;
    if (n.styles && n.styles.length) {
        let C = (n.encapsulation == Et.Emulated ? My(n.styles, Yl, Xl) : n.styles).reduce((b, _) => (_.trim().length > 0 && b.push(e.getConstLiteral(d(_))), b), []);
        C.length > 0 && (h = !0, s.set("styles", R(C)));
    }
    !h && n.encapsulation === Et.Emulated && (n.encapsulation = Et.None), n.encapsulation !== Et.Emulated && s.set("encapsulation", d(n.encapsulation)), n.animations !== null && s.set("data", pe([{ key: "animation", value: n.animations, quoted: !1 }])), n.changeDetection !== null && (typeof n.changeDetection == "number" && n.changeDetection !== ui.Default ? s.set("changeDetection", d(n.changeDetection)) : typeof n.changeDetection == "object" && s.set("changeDetection", n.changeDetection));
    let m = y(f.defineComponent).callFn([s.toLiteralMap()], void 0, !0), v = qf(n);
    return { expression: m, type: v, statements: [] };
}
function qf(n) { let e = Uf(n); return e.push(Zl(n.template.ngContentSelectors)), e.push(we(d(n.isStandalone))), e.push(Wf(n)), n.isSignal && e.push(we(d(n.isSignal))), we(y(f.ComponentDeclaration, e)); }
function ky(n, e) {
    switch (e) {
        case 0: return n;
        case 1: return ie([], n);
        case 2:
            let t = n.prop("map").callFn([y(f.resolveForwardRef)]);
            return ie([], t);
        case 3: throw new Error("Unsupported with an array of pre-resolved dependencies");
    }
}
function Iy(n) { return we(d(n)); }
function Ql(n) { let e = Object.keys(n).map(t => { let s = Array.isArray(n[t]) ? n[t][0] : n[t]; return { key: t, value: d(s), quoted: !0 }; }); return pe(e); }
function Zl(n) { return n.length > 0 ? we(R(n.map(e => d(e)))) : At; }
function Uf(n) { let e = n.selector !== null ? n.selector.replace(/\n/g, "") : null; return [Ko(n.type.type, n.typeArgumentCount), e !== null ? Iy(e) : At, n.exportAs !== null ? Zl(n.exportAs) : At, we(Ny(n)), we(Ql(n.outputs)), Zl(n.queries.map(t => t.propertyName))]; }
function Ny(n) { return pe(Object.keys(n.inputs).map(e => { let t = n.inputs[e], s = [{ key: "alias", value: d(t.bindingPropertyName), quoted: !0 }, { key: "required", value: d(t.required), quoted: !0 }]; return t.isSignal && s.push({ key: "isSignal", value: d(t.isSignal), quoted: !0 }), { key: e, value: pe(s), quoted: !0 }; })); }
function Hf(n) { let e = Uf(n); return e.push(At), e.push(we(d(n.isStandalone))), e.push(Wf(n)), n.isSignal && e.push(we(d(n.isSignal))), we(y(f.DirectiveDeclaration, e)); }
function Dy(n, e, t, s, r, i, o) { let a = t.createBoundHostProperties(n.properties, e), l = t.createDirectiveHostEventAsts(n.listeners, e); n.specialAttributes.styleAttr && (n.attributes.style = d(n.specialAttributes.styleAttr)), n.specialAttributes.classAttr && (n.attributes.class = d(n.specialAttributes.classAttr)); let c = X2({ componentName: i, componentSelector: r, properties: a, events: l, attributes: n.attributes }, t, s); Af(c, A.Host), o.set("hostAttrs", c.root.attributes); let p = c.root.vars; return p !== null && p > 0 && o.set("hostVars", d(p)), j2(c); }
var Py = /^(?:\[([^\]]+)\])|(?:\(([^\)]+)\))$/;
function Ly(n) {
    let e = {}, t = {}, s = {}, r = {};
    for (let i of Object.keys(n)) {
        let o = n[i], a = i.match(Py);
        if (a === null)
            switch (i) {
                case "class":
                    if (typeof o != "string")
                        throw new Error("Class binding must be string");
                    r.classAttr = o;
                    break;
                case "style":
                    if (typeof o != "string")
                        throw new Error("Style binding must be string");
                    r.styleAttr = o;
                    break;
                default: typeof o == "string" ? e[i] = d(o) : e[i] = o;
            }
        else if (a[1] != null) {
            if (typeof o != "string")
                throw new Error("Property binding must be string");
            s[a[1]] = o;
        }
        else if (a[2] != null) {
            if (typeof o != "string")
                throw new Error("Event binding must be string");
            t[a[2]] = o;
        }
    }
    return { attributes: e, listeners: t, properties: s, specialAttributes: r };
}
function By(n, e) { let t = Uo(); return t.createDirectiveHostEventAsts(n.listeners, e), t.createBoundHostProperties(n.properties, e), t.errors; }
function My(n, e, t) { let s = new fo; return n.map(r => s.shimCssText(r, e, t)); }
function _A(n, e) { let t = new fo, s = e ? Yl.replace(Ho, e) : Yl, r = e ? Xl.replace(Ho, e) : Xl; return t.shimCssText(n, s, r); }
function Wf(n) { return n.hostDirectives?.length ? we(R(n.hostDirectives.map(e => pe([{ key: "directive", value: Xs(e.directive.type), quoted: !1 }, { key: "inputs", value: Ql(e.inputs || {}), quoted: !1 }, { key: "outputs", value: Ql(e.outputs || {}), quoted: !1 }])))) : At; }
function Ry(n) {
    let e = [], t = !1;
    for (let s of n) {
        if (!s.inputs && !s.outputs)
            e.push(s.directive.type);
        else {
            let r = [{ key: "directive", value: s.directive.type, quoted: !1 }];
            if (s.inputs) {
                let i = Wo(s.inputs);
                i && r.push({ key: "inputs", value: i, quoted: !1 });
            }
            if (s.outputs) {
                let i = Wo(s.outputs);
                i && r.push({ key: "outputs", value: i, quoted: !1 });
            }
            e.push(pe(r));
        }
        s.isForwardReference && (t = !0);
    }
    return t ? new Yt([], [new _e(R(e))]) : R(e);
}
function Wo(n) {
    let e = [];
    for (let t in n)
        n.hasOwnProperty(t) && e.push(d(t), d(n[t]));
    return e.length > 0 ? R(e) : null;
}
function TA(n) {
    let e = [];
    if (n.mode === 0) {
        for (let t of n.dependencies)
            if (t.isDeferrable) {
                let s = ie([new Z("m", qe)], N("m").prop(t.isDefaultImport ? "default" : t.symbolName)), r = new Qn(t.importPath).prop("then").callFn([s]);
                e.push(r);
            }
            else
                e.push(t.typeReference);
    }
    else
        for (let { symbolName: t, importPath: s, isDefaultImport: r } of n.dependencies) {
            let i = ie([new Z("m", qe)], N("m").prop(r ? "default" : t)), o = new Qn(s).prop("then").callFn([i]);
            e.push(o);
        }
    return ie([], R(e));
}
var Jl = class extends Zi {
    visit(e) { e instanceof Ge ? this.visit(e.ast) : e.visit(this); }
    visitElement(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitTemplate(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.templateAttrs), this.visitAllTemplateNodes(e.variables), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitContent(e) { this.visitAllTemplateNodes(e.children); }
    visitBoundAttribute(e) { this.visit(e.value); }
    visitBoundEvent(e) { this.visit(e.handler); }
    visitBoundText(e) { this.visit(e.value); }
    visitIcu(e) { Object.keys(e.vars).forEach(t => this.visit(e.vars[t])), Object.keys(e.placeholders).forEach(t => this.visit(e.placeholders[t])); }
    visitDeferredBlock(e) { e.visitAll(this); }
    visitDeferredTrigger(e) { e instanceof eo && this.visit(e.value); }
    visitDeferredBlockPlaceholder(e) { this.visitAllTemplateNodes(e.children); }
    visitDeferredBlockError(e) { this.visitAllTemplateNodes(e.children); }
    visitDeferredBlockLoading(e) { this.visitAllTemplateNodes(e.children); }
    visitSwitchBlock(e) { this.visit(e.expression), this.visitAllTemplateNodes(e.cases); }
    visitSwitchBlockCase(e) { e.expression && this.visit(e.expression), this.visitAllTemplateNodes(e.children); }
    visitForLoopBlock(e) { e.item.visit(this), this.visitAllTemplateNodes(e.contextVariables), this.visit(e.expression), this.visitAllTemplateNodes(e.children), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.visitAllTemplateNodes(e.children); }
    visitIfBlock(e) { this.visitAllTemplateNodes(e.branches); }
    visitIfBlockBranch(e) { e.expression && this.visit(e.expression), e.expressionAlias?.visit(this), this.visitAllTemplateNodes(e.children); }
    visitLetDeclaration(e) { this.visit(e.value); }
    visitComponent(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitDirective(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.references); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitText(e) { }
    visitUnknownBlock(e) { }
    visitAllTemplateNodes(e) {
        for (let t of e)
            this.visit(t);
    }
};
function Dp(n, e) { let t = new Set(e); return n.filter(s => !t.has(s)); }
function bA(n, e) {
    let t = new wr;
    for (let c of e) {
        let p = { selector: c, exportAs: null, inputs: { hasBindingPropertyName() { return !1; } }, outputs: { hasBindingPropertyName() { return !1; } } };
        t.addSelectables(Xn.parse(c), [p]);
    }
    let s = $f(n, ""), i = new jo(t).bind({ template: s.nodes }), o = i.getEagerlyUsedDirectives().map(c => c.selector), a = i.getUsedDirectives().map(c => c.selector), l = i.getEagerlyUsedPipes();
    return { directives: { regular: o, deferCandidates: Dp(a, o) }, pipes: { regular: l, deferCandidates: Dp(i.getUsedPipes(), l) } };
}
var jo = class {
    directiveMatcher;
    constructor(e) { this.directiveMatcher = e; }
    bind(e) {
        if (!e.template && !e.host)
            throw new Error("Empty bound targets are not supported");
        let t = new Map, s = [], r = new Set, i = new Map, o = new Map, a = new Map, l = new Map, c = new Map, p = new Map, h = new Set, m = new Set, v = [];
        if (e.template) {
            let w = zo.apply(e.template);
            Fy(w, a), Kl.apply(e.template, this.directiveMatcher, t, s, r, i, o), Go.applyWithScope(e.template, w, l, c, p, h, m, v);
        }
        return e.host && Go.applyWithScope(e.host, zo.apply(e.host), l, c, p, h, m, v), new ec(e, t, s, r, i, o, l, c, p, a, h, m, v);
    }
}, zo = class n {
    parentScope;
    rootNode;
    namedEntities = new Map;
    elementLikeInScope = new Set;
    childScopes = new Map;
    isDeferred;
    constructor(e, t) { this.parentScope = e, this.rootNode = t, this.isDeferred = e !== null && e.isDeferred ? !0 : t instanceof es; }
    static newRootScope() { return new n(null, null); }
    static apply(e) { let t = n.newRootScope(); return t.ingest(e), t; }
    ingest(e) { e instanceof Je ? (e.variables.forEach(t => this.visitVariable(t)), e.children.forEach(t => t.visit(this))) : e instanceof Hn ? (e.expressionAlias !== null && this.visitVariable(e.expressionAlias), e.children.forEach(t => t.visit(this))) : e instanceof Rs ? (this.visitVariable(e.item), e.contextVariables.forEach(t => this.visitVariable(t)), e.children.forEach(t => t.visit(this))) : e instanceof $r || e instanceof Or || e instanceof es || e instanceof Fr || e instanceof Mr || e instanceof Rr || e instanceof Fs ? e.children.forEach(t => t.visit(this)) : e instanceof ao || e.forEach(t => t.visit(this)); }
    visitElement(e) { this.visitElementLike(e); }
    visitTemplate(e) { e.directives.forEach(t => t.visit(this)), e.references.forEach(t => this.visitReference(t)), this.ingestScopedNode(e); }
    visitVariable(e) { this.maybeDeclare(e); }
    visitReference(e) { this.maybeDeclare(e); }
    visitDeferredBlock(e) { this.ingestScopedNode(e), e.placeholder?.visit(this), e.loading?.visit(this), e.error?.visit(this); }
    visitDeferredBlockPlaceholder(e) { this.ingestScopedNode(e); }
    visitDeferredBlockError(e) { this.ingestScopedNode(e); }
    visitDeferredBlockLoading(e) { this.ingestScopedNode(e); }
    visitSwitchBlock(e) { e.cases.forEach(t => t.visit(this)); }
    visitSwitchBlockCase(e) { this.ingestScopedNode(e); }
    visitForLoopBlock(e) { this.ingestScopedNode(e), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.ingestScopedNode(e); }
    visitIfBlock(e) { e.branches.forEach(t => t.visit(this)); }
    visitIfBlockBranch(e) { this.ingestScopedNode(e); }
    visitContent(e) { this.ingestScopedNode(e); }
    visitLetDeclaration(e) { this.maybeDeclare(e); }
    visitComponent(e) { this.visitElementLike(e); }
    visitDirective(e) { e.references.forEach(t => this.visitReference(t)); }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitBoundText(e) { }
    visitText(e) { }
    visitTextAttribute(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitElementLike(e) { e.directives.forEach(t => t.visit(this)), e.references.forEach(t => this.visitReference(t)), e.children.forEach(t => t.visit(this)), this.elementLikeInScope.add(e); }
    maybeDeclare(e) { this.namedEntities.has(e.name) || this.namedEntities.set(e.name, e); }
    lookup(e) { return this.namedEntities.has(e) ? this.namedEntities.get(e) : this.parentScope !== null ? this.parentScope.lookup(e) : null; }
    getChildScope(e) {
        let t = this.childScopes.get(e);
        if (t === void 0)
            throw new Error(`Assertion error: child scope for ${e} not found`);
        return t;
    }
    ingestScopedNode(e) { let t = new n(this, e); t.ingest(e), this.childScopes.set(e, t); }
}, Kl = class n {
    directiveMatcher;
    directives;
    eagerDirectives;
    missingDirectives;
    bindings;
    references;
    isInDeferBlock = !1;
    constructor(e, t, s, r, i, o) { this.directiveMatcher = e, this.directives = t, this.eagerDirectives = s, this.missingDirectives = r, this.bindings = i, this.references = o; }
    static apply(e, t, s, r, i, o, a) { new n(t, s, r, i, o, a).ingest(e); }
    ingest(e) { e.forEach(t => t.visit(this)); }
    visitElement(e) { this.visitElementOrTemplate(e); }
    visitTemplate(e) { this.visitElementOrTemplate(e); }
    visitDeferredBlock(e) { let t = this.isInDeferBlock; this.isInDeferBlock = !0, e.children.forEach(s => s.visit(this)), this.isInDeferBlock = t, e.placeholder?.visit(this), e.loading?.visit(this), e.error?.visit(this); }
    visitDeferredBlockPlaceholder(e) { e.children.forEach(t => t.visit(this)); }
    visitDeferredBlockError(e) { e.children.forEach(t => t.visit(this)); }
    visitDeferredBlockLoading(e) { e.children.forEach(t => t.visit(this)); }
    visitSwitchBlock(e) { e.cases.forEach(t => t.visit(this)); }
    visitSwitchBlockCase(e) { e.children.forEach(t => t.visit(this)); }
    visitForLoopBlock(e) { e.item.visit(this), e.contextVariables.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this)), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { e.children.forEach(t => t.visit(this)); }
    visitIfBlock(e) { e.branches.forEach(t => t.visit(this)); }
    visitIfBlockBranch(e) { e.expressionAlias?.visit(this), e.children.forEach(t => t.visit(this)); }
    visitContent(e) { e.children.forEach(t => t.visit(this)); }
    visitComponent(e) {
        if (this.directiveMatcher instanceof Bi) {
            let t = this.directiveMatcher.match(e.componentName);
            t.length > 0 ? this.trackSelectorlessMatchesAndDirectives(e, t) : this.missingDirectives.add(e.componentName);
        }
        e.directives.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this));
    }
    visitDirective(e) {
        if (this.directiveMatcher instanceof Bi) {
            let t = this.directiveMatcher.match(e.name);
            t.length > 0 ? this.trackSelectorlessMatchesAndDirectives(e, t) : this.missingDirectives.add(e.name);
        }
    }
    visitElementOrTemplate(e) {
        if (this.directiveMatcher instanceof wr) {
            let t = [], s = gm(e);
            this.directiveMatcher.match(s, (r, i) => t.push(...i)), this.trackSelectorBasedBindingsAndDirectives(e, t);
        }
        else
            e.references.forEach(t => { t.value.trim() === "" && this.references.set(t, e); });
        e.directives.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this));
    }
    trackMatchedDirectives(e, t) { t.length > 0 && (this.directives.set(e, t), this.isInDeferBlock || this.eagerDirectives.push(...t)); }
    trackSelectorlessMatchesAndDirectives(e, t) {
        if (t.length === 0)
            return;
        this.trackMatchedDirectives(e, t);
        let s = (r, i, o) => { r[o].hasBindingPropertyName(i.name) && this.bindings.set(i, r); };
        for (let r of t)
            e.inputs.forEach(i => s(r, i, "inputs")), e.attributes.forEach(i => s(r, i, "inputs")), e.outputs.forEach(i => s(r, i, "outputs"));
        e.references.forEach(r => this.references.set(r, { directive: t[0], node: e }));
    }
    trackSelectorBasedBindingsAndDirectives(e, t) {
        this.trackMatchedDirectives(e, t), e.references.forEach(r => {
            let i = null;
            if (r.value.trim() === "")
                i = t.find(o => o.isComponent) || null;
            else if (i = t.find(o => o.exportAs !== null && o.exportAs.some(a => a === r.value)) || null, i === null)
                return;
            i !== null ? this.references.set(r, { directive: i, node: e }) : this.references.set(r, e);
        });
        let s = (r, i) => { let o = t.find(l => l[i].hasBindingPropertyName(r.name)), a = o !== void 0 ? o : e; this.bindings.set(r, a); };
        e.inputs.forEach(r => s(r, "inputs")), e.attributes.forEach(r => s(r, "inputs")), e instanceof Je && e.templateAttrs.forEach(r => s(r, "inputs")), e.outputs.forEach(r => s(r, "outputs"));
    }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitBoundAttributeOrEvent(e) { }
    visitText(e) { }
    visitBoundText(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitLetDeclaration(e) { }
}, Go = class n extends Jl {
    bindings;
    symbols;
    usedPipes;
    eagerPipes;
    deferBlocks;
    nestingLevel;
    scope;
    rootNode;
    level;
    visitNode = e => e.visit(this);
    constructor(e, t, s, r, i, o, a, l, c) { super(), this.bindings = e, this.symbols = t, this.usedPipes = s, this.eagerPipes = r, this.deferBlocks = i, this.nestingLevel = o, this.scope = a, this.rootNode = l, this.level = c; }
    static applyWithScope(e, t, s, r, i, o, a, l) { let c = e instanceof Je ? e : null; new n(s, r, o, a, l, i, t, c, 0).ingest(e); }
    ingest(e) {
        if (e instanceof Je)
            e.variables.forEach(this.visitNode), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
        else if (e instanceof Hn)
            e.expressionAlias !== null && this.visitNode(e.expressionAlias), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
        else if (e instanceof Rs)
            this.visitNode(e.item), e.contextVariables.forEach(t => this.visitNode(t)), e.trackBy.visit(this), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
        else if (e instanceof es) {
            if (this.scope.rootNode !== e)
                throw new Error(`Assertion error: resolved incorrect scope for deferred block ${e}`);
            this.deferBlocks.push([e, this.scope]), e.children.forEach(t => t.visit(this)), this.nestingLevel.set(e, this.level);
        }
        else
            e instanceof $r || e instanceof Or || e instanceof Fr || e instanceof Mr || e instanceof Rr || e instanceof Fs ? (e.children.forEach(t => t.visit(this)), this.nestingLevel.set(e, this.level)) : e instanceof ao ? this.nestingLevel.set(e, 0) : e.forEach(this.visitNode);
    }
    visitTemplate(e) { e.inputs.forEach(this.visitNode), e.outputs.forEach(this.visitNode), e.directives.forEach(this.visitNode), e.templateAttrs.forEach(this.visitNode), e.references.forEach(this.visitNode), this.ingestScopedNode(e); }
    visitVariable(e) { this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitReference(e) { this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitDeferredBlock(e) { this.ingestScopedNode(e), e.triggers.when?.value.visit(this), e.prefetchTriggers.when?.value.visit(this), e.hydrateTriggers.when?.value.visit(this), e.hydrateTriggers.never?.visit(this), e.placeholder && this.visitNode(e.placeholder), e.loading && this.visitNode(e.loading), e.error && this.visitNode(e.error); }
    visitDeferredBlockPlaceholder(e) { this.ingestScopedNode(e); }
    visitDeferredBlockError(e) { this.ingestScopedNode(e); }
    visitDeferredBlockLoading(e) { this.ingestScopedNode(e); }
    visitSwitchBlockCase(e) { e.expression?.visit(this), this.ingestScopedNode(e); }
    visitForLoopBlock(e) { e.expression.visit(this), this.ingestScopedNode(e), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.ingestScopedNode(e); }
    visitIfBlockBranch(e) { e.expression?.visit(this), this.ingestScopedNode(e); }
    visitContent(e) { this.ingestScopedNode(e); }
    visitLetDeclaration(e) { super.visitLetDeclaration(e), this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitPipe(e, t) { return this.usedPipes.add(e.name), this.scope.isDeferred || this.eagerPipes.add(e.name), super.visitPipe(e, t); }
    visitPropertyRead(e, t) { return this.maybeMap(e, e.name), super.visitPropertyRead(e, t); }
    visitSafePropertyRead(e, t) { return this.maybeMap(e, e.name), super.visitSafePropertyRead(e, t); }
    ingestScopedNode(e) { let t = this.scope.getChildScope(e); new n(this.bindings, this.symbols, this.usedPipes, this.eagerPipes, this.deferBlocks, this.nestingLevel, t, e, this.level + 1).ingest(e); }
    maybeMap(e, t) {
        if (!(e.receiver instanceof Rt) || e.receiver instanceof Kn)
            return;
        let s = this.scope.lookup(t);
        s !== null && this.bindings.set(e, s);
    }
}, ec = class {
    target;
    directives;
    eagerDirectives;
    missingDirectives;
    bindings;
    references;
    exprTargets;
    symbols;
    nestingLevel;
    scopedNodeEntities;
    usedPipes;
    eagerPipes;
    deferredBlocks;
    deferredScopes;
    constructor(e, t, s, r, i, o, a, l, c, p, h, m, v) { this.target = e, this.directives = t, this.eagerDirectives = s, this.missingDirectives = r, this.bindings = i, this.references = o, this.exprTargets = a, this.symbols = l, this.nestingLevel = c, this.scopedNodeEntities = p, this.usedPipes = h, this.eagerPipes = m, this.deferredBlocks = v.map(w => w[0]), this.deferredScopes = new Map(v); }
    getEntitiesInScope(e) { return this.scopedNodeEntities.get(e) ?? new Set; }
    getDirectivesOfNode(e) { return this.directives.get(e) || null; }
    getReferenceTarget(e) { return this.references.get(e) || null; }
    getConsumerOfBinding(e) { return this.bindings.get(e) || null; }
    getExpressionTarget(e) { return this.exprTargets.get(e) || null; }
    getDefinitionNodeOfSymbol(e) { return this.symbols.get(e) || null; }
    getNestingLevel(e) { return this.nestingLevel.get(e) || 0; }
    getUsedDirectives() { let e = new Set; return this.directives.forEach(t => t.forEach(s => e.add(s))), Array.from(e.values()); }
    getEagerlyUsedDirectives() { let e = new Set(this.eagerDirectives); return Array.from(e.values()); }
    getUsedPipes() { return Array.from(this.usedPipes); }
    getEagerlyUsedPipes() { return Array.from(this.eagerPipes); }
    getDeferBlocks() { return this.deferredBlocks; }
    getDeferredTriggerTarget(e, t) {
        if (!(t instanceof no) && !(t instanceof so) && !(t instanceof to))
            return null;
        let s = t.reference;
        if (s === null) {
            let i = null;
            if (e.placeholder !== null) {
                for (let o of e.placeholder.children)
                    if (!(o instanceof ea)) {
                        if (i !== null)
                            return null;
                        o instanceof Ft && (i = o);
                    }
            }
            return i;
        }
        let r = this.findEntityInScope(e, s);
        if (r instanceof Vr && this.getDefinitionNodeOfSymbol(r) !== e) {
            let i = this.getReferenceTarget(r);
            if (i !== null)
                return this.referenceTargetToElement(i);
        }
        if (e.placeholder !== null) {
            let i = this.findEntityInScope(e.placeholder, s), o = i instanceof Vr ? this.getReferenceTarget(i) : null;
            if (o !== null)
                return this.referenceTargetToElement(o);
        }
        return null;
    }
    isDeferred(e) {
        for (let t of this.deferredBlocks) {
            if (!this.deferredScopes.has(t))
                continue;
            let s = [this.deferredScopes.get(t)];
            for (; s.length > 0;) {
                let r = s.pop();
                if (r.elementLikeInScope.has(e))
                    return !0;
                s.push(...r.childScopes.values());
            }
        }
        return !1;
    }
    referencedDirectiveExists(e) { return !this.missingDirectives.has(e); }
    findEntityInScope(e, t) {
        let s = this.getEntitiesInScope(e);
        for (let r of s)
            if (r.name === t)
                return r;
        return null;
    }
    referenceTargetToElement(e) { return e instanceof Ft ? e : e instanceof Je || e.node instanceof pr || e.node instanceof fh ? null : this.referenceTargetToElement(e.node); }
};
function Fy(n, e) {
    let t = new Map;
    function s(i) {
        if (t.has(i.rootNode))
            return t.get(i.rootNode);
        let o = i.namedEntities, a;
        return i.parentScope !== null ? a = new Map([...s(i.parentScope), ...o]) : a = new Map(o), t.set(i.rootNode, a), a;
    }
    let r = [n];
    for (; r.length > 0;) {
        let i = r.pop();
        for (let o of i.childScopes.values())
            r.push(o);
        s(i);
    }
    for (let [i, o] of t)
        e.set(i, new Set(o.values()));
}
var tc = class {
}, nc = class {
    jitEvaluator;
    FactoryTarget = Pt;
    ResourceLoader = tc;
    elementSchemaRegistry = new zs;
    constructor(e = new hl) { this.jitEvaluator = e; }
    compilePipe(e, t, s) { let r = { name: s.name, type: ge(s.type), typeArgumentCount: 0, deps: null, pipeName: s.pipeName, pure: s.pure, isStandalone: s.isStandalone }, i = Su(r); return this.jitExpression(i.expression, e, t, []); }
    compilePipeDeclaration(e, t, s) { let r = eC(s), i = Su(r); return this.jitExpression(i.expression, e, t, []); }
    compileInjectable(e, t, s) { let { expression: r, statements: i } = uu({ name: s.name, type: ge(s.type), typeArgumentCount: s.typeArgumentCount, providedIn: Fp(s.providedIn), useClass: ds(s, "useClass"), useFactory: Rp(s, "useFactory"), useValue: ds(s, "useValue"), useExisting: ds(s, "useExisting"), deps: s.deps?.map(Xf) }, !0); return this.jitExpression(r, e, t, i); }
    compileInjectableDeclaration(e, t, s) { let { expression: r, statements: i } = uu({ name: s.type.name, type: ge(s.type), typeArgumentCount: 0, providedIn: Fp(s.providedIn), useClass: ds(s, "useClass"), useFactory: Rp(s, "useFactory"), useValue: ds(s, "useValue"), useExisting: ds(s, "useExisting"), deps: s.deps?.map($p) }, !0); return this.jitExpression(r, e, t, i); }
    compileInjector(e, t, s) { let r = { name: s.name, type: ge(s.type), providers: s.providers && s.providers.length > 0 ? new U(s.providers) : null, imports: s.imports.map(o => new U(o)) }, i = Eu(r); return this.jitExpression(i.expression, e, t, []); }
    compileInjectorDeclaration(e, t, s) { let r = tC(s), i = Eu(r); return this.jitExpression(i.expression, e, t, []); }
    compileNgModule(e, t, s) { let r = { kind: Gt.Global, type: ge(s.type), bootstrap: s.bootstrap.map(ge), declarations: s.declarations.map(ge), publicDeclarationTypes: null, imports: s.imports.map(ge), includeImportTypes: !0, exports: s.exports.map(ge), selectorScopeMode: ho.Inline, containsForwardDecls: !1, schemas: s.schemas ? s.schemas.map(ge) : null, id: s.id ? new U(s.id) : null }, i = Rm(r); return this.jitExpression(i.expression, e, t, []); }
    compileNgModuleDeclaration(e, t, s) { let r = Fm(s); return this.jitExpression(r, e, t, []); }
    compileDirective(e, t, s) { let r = Bp(s); return this.compileDirectiveFromMeta(e, t, r); }
    compileDirectiveDeclaration(e, t, s) { let r = this.createParseSourceSpan("Directive", s.type.name, t), i = zf(s, r); return this.compileDirectiveFromMeta(e, t, i); }
    compileDirectiveFromMeta(e, t, s) { let r = new Oi, i = Uo(), o = Ty(s, r, i); return this.jitExpression(o.expression, e, t, r.statements); }
    compileComponent(e, t, s) { let { template: r, interpolation: i, defer: o } = Gf(s.template, s.name, t, s.preserveWhitespaces, s.interpolation, void 0), a = ue(E(E({}, s), Bp(s)), { selector: s.selector || this.elementSchemaRegistry.getDefaultComponentElementName(), template: r, declarations: s.declarations.map(qy), declarationListEmitMode: 0, defer: o, styles: [...s.styles, ...r.styles], encapsulation: s.encapsulation, interpolation: i, changeDetection: s.changeDetection ?? null, animations: s.animations != null ? new U(s.animations) : null, viewProviders: s.viewProviders != null ? new U(s.viewProviders) : null, relativeContextFilePath: "", i18nUseExternalIds: !0, relativeTemplatePath: null }), l = `ng:///${s.name}.js`; return this.compileComponentFromMeta(e, l, a); }
    compileComponentDeclaration(e, t, s) { let r = this.createParseSourceSpan("Component", s.type.name, t), i = Vy(s, r, t); return this.compileComponentFromMeta(e, t, i); }
    compileComponentFromMeta(e, t, s) { let r = new Oi, i = Uo(s.interpolation), o = by(s, r, i); return this.jitExpression(o.expression, e, t, r.statements); }
    compileFactory(e, t, s) { let r = Rn({ name: s.name, type: ge(s.type), typeArgumentCount: s.typeArgumentCount, deps: Wy(s.deps), target: s.target }); return this.jitExpression(r.expression, e, t, r.statements); }
    compileFactoryDeclaration(e, t, s) { let r = Rn({ name: s.type.name, type: ge(s.type), typeArgumentCount: 0, deps: Array.isArray(s.deps) ? s.deps.map($p) : s.deps, target: s.target }); return this.jitExpression(r.expression, e, t, r.statements); }
    createParseSourceSpan(e, t, s) { return Nm(e, t, s); }
    jitExpression(e, t, s, r) { let i = [...r, new le("$def", e, void 0, ae.Exported)]; return this.jitEvaluator.evaluateStatements(s, i, new dl(t), !0).$def; }
};
function Pp(n) { return ue(E({}, n), { isSignal: n.isSignal, predicate: jf(n.predicate), read: n.read ? new U(n.read) : null, static: n.static, emitDistinctChangesOnly: n.emitDistinctChangesOnly }); }
function Lp(n) { return { propertyName: n.propertyName, first: n.first ?? !1, predicate: jf(n.predicate), descendants: n.descendants ?? !1, read: n.read ? new U(n.read) : null, static: n.static ?? !1, emitDistinctChangesOnly: n.emitDistinctChangesOnly ?? !0, isSignal: !!n.isSignal }; }
function jf(n) { return Array.isArray(n) ? n : yc(new U(n), 1); }
function Bp(n) {
    let e = Ky(n.inputs || []), t = ka(n.outputs || []), s = n.propMetadata, r = {}, i = {};
    for (let a in s)
        s.hasOwnProperty(a) && s[a].forEach(l => { Yy(l) ? r[a] = { bindingPropertyName: l.alias || a, classPropertyName: a, required: l.required || !1, isSignal: !!l.isSignal, transformFunction: l.transform != null ? new U(l.transform) : null } : Qy(l) && (i[a] = l.alias || a); });
    let o = n.hostDirectives?.length ? n.hostDirectives.map(a => typeof a == "function" ? { directive: ge(a), inputs: null, outputs: null, isForwardReference: !1 } : { directive: ge(a.directive), isForwardReference: !1, inputs: a.inputs ? ka(a.inputs) : null, outputs: a.outputs ? ka(a.outputs) : null }) : null;
    return ue(E({}, n), { typeArgumentCount: 0, typeSourceSpan: n.typeSourceSpan, type: ge(n.type), deps: null, host: E({}, zy(n.propMetadata, n.typeSourceSpan, n.host)), inputs: E(E({}, e), r), outputs: E(E({}, t), i), queries: n.queries.map(Pp), providers: n.providers != null ? new U(n.providers) : null, viewQueries: n.viewQueries.map(Pp), fullInheritance: !1, hostDirectives: o });
}
function zf(n, e) { let t = n.hostDirectives?.length ? n.hostDirectives.map(s => ({ directive: ge(s.directive), isForwardReference: !1, inputs: s.inputs ? Mp(s.inputs) : null, outputs: s.outputs ? Mp(s.outputs) : null })) : null; return { name: n.type.name, type: ge(n.type), typeSourceSpan: e, selector: n.selector ?? null, inputs: n.inputs ? Zy(n.inputs) : {}, outputs: n.outputs ?? {}, host: $y(n.host), queries: (n.queries ?? []).map(Lp), viewQueries: (n.viewQueries ?? []).map(Lp), providers: n.providers !== void 0 ? new U(n.providers) : null, exportAs: n.exportAs ?? null, usesInheritance: n.usesInheritance ?? !1, lifecycle: { usesOnChanges: n.usesOnChanges ?? !1 }, deps: null, typeArgumentCount: 0, fullInheritance: !1, isStandalone: n.isStandalone ?? uh(n.version), isSignal: n.isSignal ?? !1, hostDirectives: t }; }
function $y(n = {}) { return { attributes: Oy(n.attributes ?? {}), listeners: n.listeners ?? {}, properties: n.properties ?? {}, specialAttributes: { classAttr: n.classAttribute, styleAttr: n.styleAttribute } }; }
function Mp(n) {
    let e = null;
    for (let t = 1; t < n.length; t += 2)
        e = e || {}, e[n[t - 1]] = n[t];
    return e;
}
function Oy(n) {
    let e = {};
    for (let t of Object.keys(n))
        e[t] = new U(n[t]);
    return e;
}
function Vy(n, e, t) {
    let { template: s, interpolation: r, defer: i } = Gf(n.template, n.type.name, t, n.preserveWhitespaces ?? !1, n.interpolation, n.deferBlockDependencies), o = [];
    if (n.dependencies)
        for (let l of n.dependencies)
            switch (l.kind) {
                case "directive":
                case "component":
                    o.push(ba(l));
                    break;
                case "pipe":
                    o.push(Hy(l));
                    break;
            }
    else
        (n.components || n.directives || n.pipes) && (n.components && o.push(...n.components.map(l => ba(l, !0))), n.directives && o.push(...n.directives.map(l => ba(l))), n.pipes && o.push(...Uy(n.pipes)));
    let a = o.every(({ kind: l }) => l === Qt.Directive || l === Qt.NgModule);
    return ue(E({}, zf(n, e)), { template: s, styles: n.styles ?? [], declarations: o, viewProviders: n.viewProviders !== void 0 ? new U(n.viewProviders) : null, animations: n.animations !== void 0 ? new U(n.animations) : null, defer: i, changeDetection: n.changeDetection ?? ui.Default, encapsulation: n.encapsulation ?? Et.Emulated, interpolation: r, declarationListEmitMode: 2, relativeContextFilePath: "", i18nUseExternalIds: !0, relativeTemplatePath: null, hasDirectiveDependencies: a });
}
function qy(n) { return ue(E({}, n), { type: new U(n.type) }); }
function ba(n, e = null) { return { kind: Qt.Directive, isComponent: e || n.kind === "component", selector: n.selector, type: new U(n.type), inputs: n.inputs ?? [], outputs: n.outputs ?? [], exportAs: n.exportAs ?? null }; }
function Uy(n) { return n ? Object.keys(n).map(e => ({ kind: Qt.Pipe, name: e, type: new U(n[e]) })) : []; }
function Hy(n) { return { kind: Qt.Pipe, name: n.name, type: new U(n.type) }; }
function Gf(n, e, t, s, r, i) {
    let o = r ? co.fromArray(r) : ot, a = $f(n, t, { preserveWhitespaces: s, interpolationConfig: o });
    if (a.errors !== null) {
        let p = a.errors.map(h => h.toString()).join(", ");
        throw new Error(`Errors during JIT compilation of template for ${e}: ${p}`);
    }
    let c = new jo(null).bind({ template: a.nodes });
    return { template: a, interpolation: o, defer: jy(c, i) };
}
function ds(n, e) {
    if (n.hasOwnProperty(e))
        return yc(new U(n[e]), 0);
}
function Rp(n, e) {
    if (n.hasOwnProperty(e))
        return new U(n[e]);
}
function Fp(n) { let e = typeof n == "function" ? new U(n) : new Ee(n ?? null); return yc(e, 0); }
function Wy(n) { return n == null ? null : n.map(Xf); }
function Xf(n) { let e = n.attribute != null, t = n.token === null ? null : new U(n.token), s = e ? new U(n.attribute) : t; return Yf(s, e, n.host, n.optional, n.self, n.skipSelf); }
function $p(n) { let e = n.attribute ?? !1, t = n.token === null ? null : new U(n.token); return Yf(t, e, n.host ?? !1, n.optional ?? !1, n.self ?? !1, n.skipSelf ?? !1); }
function Yf(n, e, t, s, r, i) { let o = e ? d("unknown") : null; return { token: n, attributeNameType: o, host: t, optional: s, self: r, skipSelf: i }; }
function jy(n, e) {
    let t = n.getDeferBlocks(), s = new Map;
    for (let r = 0; r < t.length; r++) {
        let i = e?.[r];
        s.set(t[r], i ? new U(i) : null);
    }
    return { mode: 0, blocks: s };
}
function zy(n, e, t) {
    let s = Ly(t || {}), r = By(s, e);
    if (r.length)
        throw new Error(r.map(i => i.msg).join(`
`));
    for (let i in n)
        n.hasOwnProperty(i) && n[i].forEach(o => { Gy(o) ? s.properties[o.hostPropertyName || i] = Qd("this", i) : Xy(o) && (s.listeners[o.eventName || i] = `${i}(${(o.args || []).join(",")})`); });
    return s;
}
function Gy(n) { return n.ngMetadataName === "HostBinding"; }
function Xy(n) { return n.ngMetadataName === "HostListener"; }
function Yy(n) { return n.ngMetadataName === "Input"; }
function Qy(n) { return n.ngMetadataName === "Output"; }
function Zy(n) { return Object.keys(n).reduce((e, t) => { let s = n[t]; return typeof s == "string" || Array.isArray(s) ? e[t] = Jy(s) : e[t] = { bindingPropertyName: s.publicName, classPropertyName: t, transformFunction: s.transformFunction !== null ? new U(s.transformFunction) : null, required: s.isRequired, isSignal: s.isSignal }, e; }, {}); }
function Jy(n) { return typeof n == "string" ? { bindingPropertyName: n, classPropertyName: n, transformFunction: null, required: !1, isSignal: !1 } : { bindingPropertyName: n[0], classPropertyName: n[1], transformFunction: n[2] ? new U(n[2]) : null, required: !1, isSignal: !1 }; }
function Ky(n) {
    return n.reduce((e, t) => {
        if (typeof t == "string") {
            let [s, r] = Qf(t);
            e[r] = { bindingPropertyName: s, classPropertyName: r, required: !1, isSignal: !1, transformFunction: null };
        }
        else
            e[t.name] = { bindingPropertyName: t.alias || t.name, classPropertyName: t.name, required: t.required || !1, isSignal: !1, transformFunction: t.transform != null ? new U(t.transform) : null };
        return e;
    }, {});
}
function ka(n) { return n.reduce((e, t) => { let [s, r] = Qf(t); return e[r] = s, e; }, {}); }
function Qf(n) { let [e, t] = n.split(":", 2).map(s => s.trim()); return [t ?? e, e]; }
function eC(n) { return { name: n.type.name, type: ge(n.type), typeArgumentCount: 0, pipeName: n.name, deps: null, pure: n.pure ?? !0, isStandalone: n.isStandalone ?? uh(n.version) }; }
function tC(n) { return { name: n.type.name, type: ge(n.type), providers: n.providers !== void 0 && n.providers.length > 0 ? new U(n.providers) : null, imports: n.imports !== void 0 ? n.imports.map(e => new U(e)) : [] }; }
function kA(n) { let e = n.ng || (n.ng = {}); e.ɵcompilerFacade = new nc; }
var Op = class {
    defaultEncapsulation;
    preserveWhitespaces;
    strictInjectionParameters;
    constructor({ defaultEncapsulation: e = Et.Emulated, preserveWhitespaces: t, strictInjectionParameters: s } = {}) { this.defaultEncapsulation = e, this.preserveWhitespaces = nC(Vd(t)), this.strictInjectionParameters = s === !0; }
};
function nC(n, e = !1) { return n === null ? e : n; }
var Zf = "i18n", sr = "i18n-", sC = /^i18n:?/, rC = "|", iC = "@@", Vp = !1;
function oC(n, e, t, s, r) { return new Xo(t, s, r).extract(n, e); }
function aC(n, e, t, s, r) { return new Xo(s, r).merge(n, e, t); }
var sc = class {
    messages;
    errors;
    constructor(e, t) { this.messages = e, this.errors = t; }
}, Dt = function (n) { return n[n.Extract = 0] = "Extract", n[n.Merge = 1] = "Merge", n; }(Dt || {}), Xo = class {
    _implicitTags;
    _implicitAttrs;
    _preserveSignificantWhitespace;
    _depth;
    _inI18nNode;
    _inImplicitNode;
    _inI18nBlock;
    _blockMeaningAndDesc;
    _blockChildren;
    _blockStartDepth;
    _inIcu;
    _msgCountAtSectionStart;
    _errors;
    _mode;
    _messages;
    _translations;
    _createI18nMessage;
    constructor(e, t, s = !0) { this._implicitTags = e, this._implicitAttrs = t, this._preserveSignificantWhitespace = s; }
    extract(e, t) { return this._init(Dt.Extract, t), e.forEach(s => s.visit(this, null)), this._inI18nBlock && this._reportError(e[e.length - 1], "Unclosed block"), new sc(this._messages, this._errors); }
    merge(e, t, s) { this._init(Dt.Merge, s), this._translations = t; let i = new De("wrapper", [], [], e, !1, void 0, void 0, void 0).visit(this, null); return this._inI18nBlock && this._reportError(e[e.length - 1], "Unclosed block"), new js(i.children, this._errors); }
    visitExpansionCase(e, t) {
        let s = L(this, e.expression, t);
        if (this._mode === Dt.Merge)
            return new ni(e.value, s, e.sourceSpan, e.valueSourceSpan, e.expSourceSpan);
    }
    visitExpansion(e, t) { this._mayBeAddBlockChildren(e); let s = this._inIcu; this._inIcu || (this._isInTranslatableSection && this._addMessage([e]), this._inIcu = !0); let r = L(this, e.cases, t); return this._mode === Dt.Merge && (e = new gn(e.switchValue, e.type, r, e.sourceSpan, e.switchValueSourceSpan)), this._inIcu = s, e; }
    visitComment(e, t) {
        let s = lC(e);
        if (s && this._isInTranslatableSection) {
            this._reportError(e, "Could not start a block inside a translatable section");
            return;
        }
        let r = cC(e);
        if (r && !this._inI18nBlock) {
            this._reportError(e, "Trying to close an unopened block");
            return;
        }
        if (!this._inI18nNode && !this._inIcu) {
            if (this._inI18nBlock) {
                if (r)
                    if (this._depth == this._blockStartDepth) {
                        this._closeTranslatableSection(e, this._blockChildren), this._inI18nBlock = !1;
                        let i = this._addMessage(this._blockChildren, this._blockMeaningAndDesc), o = this._translateMessage(e, i);
                        return L(this, o);
                    }
                    else {
                        this._reportError(e, "I18N blocks should not cross element boundaries");
                        return;
                    }
            }
            else if (s) {
                if (!Vp && console && console.warn) {
                    Vp = !0;
                    let i = e.sourceSpan.details ? `, ${e.sourceSpan.details}` : "";
                    console.warn(`I18n comments are deprecated, use an <ng-container> element instead (${e.sourceSpan.start}${i})`);
                }
                this._inI18nBlock = !0, this._blockStartDepth = this._depth, this._blockChildren = [], this._blockMeaningAndDesc = e.value.replace(sC, "").trim(), this._openTranslatableSection(e);
            }
        }
    }
    visitText(e, t) { return this._isInTranslatableSection && this._mayBeAddBlockChildren(e), e; }
    visitElement(e, t) { return this._visitElementLike(e, t); }
    visitAttribute(e, t) { throw new Error("unreachable code"); }
    visitBlock(e, t) { L(this, e.children, t); }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { return this._visitElementLike(e, t); }
    visitDirective(e, t) { throw new Error("unreachable code"); }
    _init(e, t) { this._mode = e, this._inI18nBlock = !1, this._inI18nNode = !1, this._depth = 0, this._inIcu = !1, this._msgCountAtSectionStart = void 0, this._errors = [], this._messages = [], this._inImplicitNode = !1, this._createI18nMessage = df(t, xh, !this._preserveSignificantWhitespace, this._preserveSignificantWhitespace); }
    _visitElementLike(e, t) {
        this._mayBeAddBlockChildren(e), this._depth++;
        let s = this._inI18nNode, r = this._inImplicitNode, i = [], o, a = e instanceof ye ? e.tagName : e.name, l = uC(e), c = l ? l.value : "", p = this._implicitTags.some(m => a === m) && !this._inIcu && !this._isInTranslatableSection, h = !r && p;
        if (this._inImplicitNode = r || p, !this._isInTranslatableSection && !this._inIcu) {
            if (l || h) {
                this._inI18nNode = !0;
                let m = this._addMessage(e.children, c);
                o = this._translateMessage(e, m);
            }
            if (this._mode == Dt.Extract) {
                let m = l || h;
                m && this._openTranslatableSection(e), L(this, e.children), m && this._closeTranslatableSection(e, e.children);
            }
        }
        else
            (l || h) && this._reportError(e, "Could not mark an element as translatable inside a translatable section"), this._mode == Dt.Extract && L(this, e.children);
        return this._mode === Dt.Merge && (o || e.children).forEach(v => { let w = v.visit(this, t); w && !this._isInTranslatableSection && (i = i.concat(w)); }), this._visitAttributesOf(e), this._depth--, this._inI18nNode = s, this._inImplicitNode = r, this._mode === Dt.Merge ? e instanceof De ? new De(e.name, this._translateAttributes(e), this._translateDirectives(e), i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan) : new ye(e.componentName, e.tagName, e.fullName, this._translateAttributes(e), this._translateDirectives(e), i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan) : null;
    }
    _visitAttributesOf(e) { let t = {}, s = this._implicitAttrs[e instanceof ye ? e.tagName || "" : e.name] || []; e.attrs.filter(r => r instanceof vn && r.name.startsWith(sr)).forEach(r => { t[r.name.slice(sr.length)] = r.value; }), e.attrs.forEach(r => { r.name in t ? this._addMessage([r], t[r.name]) : s.some(i => r.name === i) && this._addMessage([r]); }); }
    _addMessage(e, t) {
        if (e.length == 0 || this._isEmptyAttributeValue(e) || this._isPlaceholderOnlyAttributeValue(e) || this._isPlaceholderOnlyMessage(e))
            return null;
        let { meaning: s, description: r, id: i } = qp(t), o = this._createI18nMessage(e, s, r, i);
        return this._messages.push(o), o;
    }
    _isEmptyAttributeValue(e) { return Up(e) ? e[0].value.trim() === "" : !1; }
    _isPlaceholderOnlyAttributeValue(e) {
        if (!Up(e))
            return !1;
        let t = e[0].valueTokens ?? [], s = t.filter(i => i.type === 17), r = t.filter(i => i.type === 16).map(i => i.parts[0].trim()).join("");
        return s.length === 1 && r === "";
    }
    _isPlaceholderOnlyMessage(e) {
        if (!pC(e))
            return !1;
        let t = e[0].tokens, s = t.filter(i => i.type === 8), r = t.filter(i => i.type === 5).map(i => i.parts[0].trim()).join("");
        return s.length === 1 && r === "";
    }
    _translateMessage(e, t) {
        if (t && this._mode === Dt.Merge) {
            let s = this._translations.get(t);
            if (s)
                return s;
            this._reportError(e, `Translation unavailable for message id="${this._translations.digest(t)}"`);
        }
        return [];
    }
    _translateAttributes(e) {
        let t = {}, s = [];
        return e.attrs.forEach(r => { r.name.startsWith(sr) && (t[r.name.slice(sr.length)] = qp(r.value)); }), e.attrs.forEach(r => {
            if (!(r.name === Zf || r.name.startsWith(sr)))
                if (r.value && r.value != "" && t.hasOwnProperty(r.name)) {
                    let { meaning: i, description: o, id: a } = t[r.name], l = this._createI18nMessage([r], i, o, a), c = this._translations.get(l);
                    if (c) {
                        if (c.length == 0)
                            s.push(new vn(r.name, "", r.sourceSpan, void 0, void 0, void 0, void 0));
                        else if (c[0] instanceof nn) {
                            let p = c[0].value;
                            s.push(new vn(r.name, p, r.sourceSpan, void 0, void 0, void 0, void 0));
                        }
                        else
                            this._reportError(e, `Unexpected translation for attribute "${r.name}" (id="${a || this._translations.digest(l)}")`);
                    }
                    else
                        this._reportError(e, `Translation unavailable for attribute "${r.name}" (id="${a || this._translations.digest(l)}")`);
                }
                else
                    s.push(r);
        }), s;
    }
    _translateDirectives(e) { return e.directives.map(t => new bo(t.name, this._translateAttributes(t), t.sourceSpan, t.startSourceSpan, t.endSourceSpan)); }
    _mayBeAddBlockChildren(e) { this._inI18nBlock && !this._inIcu && this._depth == this._blockStartDepth && this._blockChildren.push(e); }
    _openTranslatableSection(e) { this._isInTranslatableSection ? this._reportError(e, "Unexpected section start") : this._msgCountAtSectionStart = this._messages.length; }
    get _isInTranslatableSection() { return this._msgCountAtSectionStart !== void 0; }
    _closeTranslatableSection(e, t) {
        if (!this._isInTranslatableSection) {
            this._reportError(e, "Unexpected section end");
            return;
        }
        let s = this._msgCountAtSectionStart;
        if (t.reduce((i, o) => i + (o instanceof In ? 0 : 1), 0) == 1)
            for (let i = this._messages.length - 1; i >= s; i--) {
                let o = this._messages[i].nodes;
                if (!(o.length == 1 && o[0] instanceof Bt)) {
                    this._messages.splice(i, 1);
                    break;
                }
            }
        this._msgCountAtSectionStart = void 0;
    }
    _reportError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
};
function lC(n) { return !!(n instanceof In && n.value && n.value.startsWith("i18n")); }
function cC(n) { return !!(n instanceof In && n.value && n.value === "/i18n"); }
function uC(n) { return n.attrs.find(e => e instanceof vn && e.name === Zf) || null; }
function qp(n) {
    if (!n)
        return { meaning: "", description: "", id: "" };
    let e = n.indexOf(iC), t = n.indexOf(rC), [s, r] = e > -1 ? [n.slice(0, e), n.slice(e + 2)] : [n, ""], [i, o] = t > -1 ? [s.slice(0, t), s.slice(t + 1)] : ["", s];
    return { meaning: i, description: o, id: r.trim() };
}
function pC(n) { return n.length === 1 && n[0] instanceof nn; }
function Up(n) { return n.length === 1 && n[0] instanceof vn; }
var rc = class {
    closedByParent = !1;
    implicitNamespacePrefix = null;
    isVoid = !1;
    ignoreFirstLf = !1;
    canSelfClose = !0;
    preventNamespaceInheritance = !1;
    requireExtraParent(e) { return !1; }
    isClosedByChild(e) { return !1; }
    getContentType() { return Lt.PARSABLE_DATA; }
}, hC = new rc;
function fC(n) { return hC; }
var Nn = class extends af {
    constructor() { super(fC); }
    parse(e, t, s = {}) { return super.parse(e, t, ue(E({}, s), { tokenizeBlocks: !1, tokenizeLet: !1, selectorlessEnabled: !1 })); }
}, dC = "1.2", mC = "urn:oasis:names:tc:xliff:document:1.2", gC = "en", Wt = "x", vC = "mrk", wC = "file", Jf = "source", EC = "seg-source", SC = "alt-trans", xC = "target", ic = "trans-unit", yC = "context-group", Hp = "context", oc = class extends $s {
    write(e, t) { let s = new CC, r = []; e.forEach(l => { let c = []; l.sources.forEach(h => { let m = new M(yC, { purpose: "location" }); m.children.push(new W(10), new M(Hp, { "context-type": "sourcefile" }, [new X(h.filePath)]), new W(10), new M(Hp, { "context-type": "linenumber" }, [new X(`${h.startLine}`)]), new W(8)), c.push(new W(8), m); }); let p = new M(ic, { id: l.id, datatype: "html" }); p.children.push(new W(8), new M(Jf, {}, s.serialize(l.nodes)), ...c), l.description && p.children.push(new W(8), new M("note", { priority: "1", from: "description" }, [new X(l.description)])), l.meaning && p.children.push(new W(8), new M("note", { priority: "1", from: "meaning" }, [new X(l.meaning)])), p.children.push(new W(6)), r.push(new W(6), p); }); let i = new M("body", {}, [...r, new W(4)]), o = new M("file", { "source-language": t || gC, datatype: "plaintext", original: "ng2.template" }, [new W(4), i, new W(2)]), a = new M("xliff", { version: dC, xmlns: mC }, [new W(2), o, new W]); return _c([new qr({ version: "1.0", encoding: "UTF-8" }), new W, a, new W]); }
    load(e, t) {
        let s = new ac, { locale: r, msgIdToHtml: i, errors: o } = s.parse(e, t), a = {}, l = new AC;
        if (Object.keys(i).forEach(c => { let { i18nNodes: p, errors: h } = l.convert(i[c], t); o.push(...h), a[c] = p; }), o.length)
            throw new Error(`xliff parse errors:
${o.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: a };
    }
    digest(e) { return Qp(e); }
}, CC = class {
    visitText(e, t) { return [new X(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new X(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new X(`${r} {`), ...e.cases[r].visit(this), new X("} ")); }), s.push(new X("}")), s; }
    visitTagPlaceholder(e, t) {
        let s = _C(e.tag);
        if (e.isVoid)
            return [new M(Wt, { id: e.startName, ctype: s, "equiv-text": `<${e.tag}/>` })];
        let r = new M(Wt, { id: e.startName, ctype: s, "equiv-text": `<${e.tag}>` }), i = new M(Wt, { id: e.closeName, ctype: s, "equiv-text": `</${e.tag}>` });
        return [r, ...this.serialize(e.children), i];
    }
    visitPlaceholder(e, t) { return [new M(Wt, { id: e.name, "equiv-text": `{{${e.value}}}` })]; }
    visitBlockPlaceholder(e, t) { let s = `x-${e.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`, r = new M(Wt, { id: e.startName, ctype: s, "equiv-text": `@${e.name}` }), i = new M(Wt, { id: e.closeName, ctype: s, "equiv-text": "}" }); return [r, ...this.serialize(e.children), i]; }
    visitIcuPlaceholder(e, t) { let s = `{${e.value.expression}, ${e.value.type}, ${Object.keys(e.value.cases).map(r => r + " {...}").join(" ")}}`; return [new M(Wt, { id: e.name, "equiv-text": s })]; }
    serialize(e) { return [].concat(...e.map(t => t.visit(this))); }
}, ac = class {
    _unitMlString;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._unitMlString = null, this._msgIdToHtml = {}; let s = new Nn().parse(e, t); return this._errors = s.errors, L(this, s.rootNodes, null), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) {
        switch (e.name) {
            case ic:
                this._unitMlString = null;
                let s = e.attrs.find(c => c.name === "id");
                if (!s)
                    this._addError(e, `<${ic}> misses the "id" attribute`);
                else {
                    let c = s.value;
                    this._msgIdToHtml.hasOwnProperty(c) ? this._addError(e, `Duplicated translations for msg ${c}`) : (L(this, e.children, null), typeof this._unitMlString == "string" ? this._msgIdToHtml[c] = this._unitMlString : this._addError(e, `Message ${c} misses a translation`));
                }
                break;
            case Jf:
            case EC:
            case SC: break;
            case xC:
                let r = e.startSourceSpan.end.offset, i = e.endSourceSpan.start.offset, a = e.startSourceSpan.start.file.content.slice(r, i);
                this._unitMlString = a;
                break;
            case wC:
                let l = e.attrs.find(c => c.name === "target-language");
                l && (this._locale = l.value), L(this, e.children, null);
                break;
            default: L(this, e.children, null);
        }
    }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { }
    visitDirective(e, t) { }
    _addError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
}, AC = class {
    _errors;
    convert(e, t) { let s = new Nn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : [].concat(...L(this, s.rootNodes)), errors: this._errors }; }
    visitText(e, t) { return new Bt(e.value, e.sourceSpan); }
    visitElement(e, t) {
        if (e.name === Wt) {
            let s = e.attrs.find(r => r.name === "id");
            return s ? new ht("", s.value, e.sourceSpan) : (this._addError(e, `<${Wt}> misses the "id" attribute`), null);
        }
        return e.name === vC ? [].concat(...L(this, e.children)) : (this._addError(e, "Unexpected tag"), null);
    }
    visitExpansion(e, t) { let s = {}; return L(this, e.cases).forEach(r => { s[r.value] = new Ke(r.nodes, e.sourceSpan); }), new An(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: L(this, e.expression) }; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
};
function _C(n) {
    switch (n.toLowerCase()) {
        case "br": return "lb";
        case "img": return "image";
        default: return `x-${n}`;
    }
}
var TC = "2.0", bC = "urn:oasis:names:tc:xliff:document:2.0", kC = "en", qn = "ph", lc = "pc", IC = "mrk", Kf = "xliff", ed = "source", NC = "target", cc = "unit", uc = class extends $s {
    write(e, t) { let s = new pc, r = []; e.forEach(a => { let l = new M(cc, { id: a.id }), c = new M("notes"); (a.description || a.meaning) && (a.description && c.children.push(new W(8), new M("note", { category: "description" }, [new X(a.description)])), a.meaning && c.children.push(new W(8), new M("note", { category: "meaning" }, [new X(a.meaning)]))), a.sources.forEach(h => { c.children.push(new W(8), new M("note", { category: "location" }, [new X(`${h.filePath}:${h.startLine}${h.endLine !== h.startLine ? "," + h.endLine : ""}`)])); }), c.children.push(new W(6)), l.children.push(new W(6), c); let p = new M("segment"); p.children.push(new W(8), new M(ed, {}, s.serialize(a.nodes)), new W(6)), l.children.push(new W(6), p, new W(4)), r.push(new W(4), l); }); let i = new M("file", { original: "ng.template", id: "ngi18n" }, [...r, new W(2)]), o = new M(Kf, { version: TC, xmlns: bC, srcLang: t || kC }, [new W(2), i, new W]); return _c([new qr({ version: "1.0", encoding: "UTF-8" }), new W, o, new W]); }
    load(e, t) {
        let s = new hc, { locale: r, msgIdToHtml: i, errors: o } = s.parse(e, t), a = {}, l = new DC;
        if (Object.keys(i).forEach(c => { let { i18nNodes: p, errors: h } = l.convert(i[c], t); o.push(...h), a[c] = p; }), o.length)
            throw new Error(`xliff2 parse errors:
${o.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: a };
    }
    digest(e) { return Ec(e); }
}, pc = class {
    _nextPlaceholderId = 0;
    visitText(e, t) { return [new X(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new X(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new X(`${r} {`), ...e.cases[r].visit(this), new X("} ")); }), s.push(new X("}")), s; }
    visitTagPlaceholder(e, t) {
        let s = PC(e.tag);
        if (e.isVoid)
            return [new M(qn, { id: (this._nextPlaceholderId++).toString(), equiv: e.startName, type: s, disp: `<${e.tag}/>` })];
        let r = new M(lc, { id: (this._nextPlaceholderId++).toString(), equivStart: e.startName, equivEnd: e.closeName, type: s, dispStart: `<${e.tag}>`, dispEnd: `</${e.tag}>` }), i = [].concat(...e.children.map(o => o.visit(this)));
        return i.length ? i.forEach(o => r.children.push(o)) : r.children.push(new X("")), [r];
    }
    visitPlaceholder(e, t) { let s = (this._nextPlaceholderId++).toString(); return [new M(qn, { id: s, equiv: e.name, disp: `{{${e.value}}}` })]; }
    visitBlockPlaceholder(e, t) { let s = new M(lc, { id: (this._nextPlaceholderId++).toString(), equivStart: e.startName, equivEnd: e.closeName, type: "other", dispStart: `@${e.name}`, dispEnd: "}" }), r = [].concat(...e.children.map(i => i.visit(this))); return r.length ? r.forEach(i => s.children.push(i)) : s.children.push(new X("")), [s]; }
    visitIcuPlaceholder(e, t) { let s = Object.keys(e.value.cases).map(i => i + " {...}").join(" "), r = (this._nextPlaceholderId++).toString(); return [new M(qn, { id: r, equiv: e.name, disp: `{${e.value.expression}, ${e.value.type}, ${s}}` })]; }
    serialize(e) { return this._nextPlaceholderId = 0, [].concat(...e.map(t => t.visit(this))); }
}, hc = class {
    _unitMlString;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._unitMlString = null, this._msgIdToHtml = {}; let s = new Nn().parse(e, t); return this._errors = s.errors, L(this, s.rootNodes, null), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) {
        switch (e.name) {
            case cc:
                this._unitMlString = null;
                let s = e.attrs.find(p => p.name === "id");
                if (!s)
                    this._addError(e, `<${cc}> misses the "id" attribute`);
                else {
                    let p = s.value;
                    this._msgIdToHtml.hasOwnProperty(p) ? this._addError(e, `Duplicated translations for msg ${p}`) : (L(this, e.children, null), typeof this._unitMlString == "string" ? this._msgIdToHtml[p] = this._unitMlString : this._addError(e, `Message ${p} misses a translation`));
                }
                break;
            case ed: break;
            case NC:
                let r = e.startSourceSpan.end.offset, i = e.endSourceSpan.start.offset, a = e.startSourceSpan.start.file.content.slice(r, i);
                this._unitMlString = a;
                break;
            case Kf:
                let l = e.attrs.find(p => p.name === "trgLang");
                l && (this._locale = l.value);
                let c = e.attrs.find(p => p.name === "version");
                if (c) {
                    let p = c.value;
                    p !== "2.0" ? this._addError(e, `The XLIFF file version ${p} is not compatible with XLIFF 2.0 serializer`) : L(this, e.children, null);
                }
                break;
            default: L(this, e.children, null);
        }
    }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { }
    visitDirective(e, t) { }
    _addError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
}, DC = class {
    _errors;
    convert(e, t) { let s = new Nn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : [].concat(...L(this, s.rootNodes)), errors: this._errors }; }
    visitText(e, t) { return new Bt(e.value, e.sourceSpan); }
    visitElement(e, t) {
        switch (e.name) {
            case qn:
                let s = e.attrs.find(o => o.name === "equiv");
                if (s)
                    return [new ht("", s.value, e.sourceSpan)];
                this._addError(e, `<${qn}> misses the "equiv" attribute`);
                break;
            case lc:
                let r = e.attrs.find(o => o.name === "equivStart"), i = e.attrs.find(o => o.name === "equivEnd");
                if (!r)
                    this._addError(e, `<${qn}> misses the "equivStart" attribute`);
                else if (!i)
                    this._addError(e, `<${qn}> misses the "equivEnd" attribute`);
                else {
                    let o = r.value, a = i.value;
                    return [].concat(new ht("", o, e.sourceSpan), ...e.children.map(c => c.visit(this, null)), new ht("", a, e.sourceSpan));
                }
                break;
            case IC: return [].concat(...L(this, e.children));
            default: this._addError(e, "Unexpected tag");
        }
        return null;
    }
    visitExpansion(e, t) { let s = {}; return L(this, e.cases).forEach(r => { s[r.value] = new Ke(r.nodes, e.sourceSpan); }), new An(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: [].concat(...L(this, e.expression)) }; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
};
function PC(n) {
    switch (n.toLowerCase()) {
        case "br":
        case "b":
        case "i":
        case "u": return "fmt";
        case "img": return "image";
        case "a": return "link";
        default: return "other";
    }
}
var Wp = "translationbundle", jp = "translation", zp = "ph", fc = class extends $s {
    write(e, t) { throw new Error("Unsupported"); }
    load(e, t) {
        let s = new dc, { locale: r, msgIdToHtml: i, errors: o } = s.parse(e, t), a = {}, l = new mc;
        if (Object.keys(i).forEach(c => {
            LC(a, c, function () {
                let { i18nNodes: h, errors: m } = l.convert(i[c], t);
                if (m.length)
                    throw new Error(`xtb parse errors:
${m.join(`
`)}`);
                return h;
            });
        }), o.length)
            throw new Error(`xtb parse errors:
${o.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: a };
    }
    digest(e) { return mh(e); }
    createNameMapper(e) { return new lo(e, Tc); }
};
function LC(n, e, t) { Object.defineProperty(n, e, { configurable: !0, enumerable: !0, get: function () { let s = t(); return Object.defineProperty(n, e, { enumerable: !0, value: s }), s; }, set: s => { throw new Error("Could not overwrite an XTB translation"); } }); }
var dc = class {
    _bundleDepth;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._bundleDepth = 0, this._msgIdToHtml = {}; let s = new Nn().parse(e, t); return this._errors = s.errors, L(this, s.rootNodes), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) {
        switch (e.name) {
            case Wp:
                this._bundleDepth++, this._bundleDepth > 1 && this._addError(e, `<${Wp}> elements can not be nested`);
                let s = e.attrs.find(i => i.name === "lang");
                s && (this._locale = s.value), L(this, e.children, null), this._bundleDepth--;
                break;
            case jp:
                let r = e.attrs.find(i => i.name === "id");
                if (!r)
                    this._addError(e, `<${jp}> misses the "id" attribute`);
                else {
                    let i = r.value;
                    if (this._msgIdToHtml.hasOwnProperty(i))
                        this._addError(e, `Duplicated translations for msg ${i}`);
                    else {
                        let o = e.startSourceSpan.end.offset, a = e.endSourceSpan.start.offset, c = e.startSourceSpan.start.file.content.slice(o, a);
                        this._msgIdToHtml[i] = c;
                    }
                }
                break;
            default: this._addError(e, "Unexpected tag");
        }
    }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
}, mc = class {
    _errors;
    convert(e, t) { let s = new Nn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : L(this, s.rootNodes), errors: this._errors }; }
    visitText(e, t) { return new Bt(e.value, e.sourceSpan); }
    visitExpansion(e, t) { let s = {}; return L(this, e.cases).forEach(r => { s[r.value] = new Ke(r.nodes, e.sourceSpan); }), new An(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: L(this, e.expression) }; }
    visitElement(e, t) {
        if (e.name === zp) {
            let s = e.attrs.find(r => r.name === "name");
            if (s)
                return new ht("", s.value, e.sourceSpan);
            this._addError(e, `<${zp}> misses the "name" attribute`);
        }
        else
            this._addError(e, "Unexpected tag");
        return null;
    }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
}, Yo = class n {
    _i18nNodesByMsgId;
    digest;
    mapperFactory;
    _i18nToHtml;
    constructor(e = {}, t, s, r, i = Ts.Warning, o) { this._i18nNodesByMsgId = e, this.digest = s, this.mapperFactory = r, this._i18nToHtml = new gc(e, t, s, r, i, o); }
    static load(e, t, s, r, i) { let { locale: o, i18nNodesByMsgId: a } = s.load(e, t), l = p => s.digest(p), c = p => s.createNameMapper(p); return new n(a, o, l, c, r, i); }
    get(e) {
        let t = this._i18nToHtml.convert(e);
        if (t.errors.length)
            throw new Error(t.errors.join(`
`));
        return t.nodes;
    }
    has(e) { return this.digest(e) in this._i18nNodesByMsgId; }
}, gc = class {
    _i18nNodesByMsgId;
    _locale;
    _digest;
    _mapperFactory;
    _missingTranslationStrategy;
    _console;
    _srcMsg;
    _errors = [];
    _contextStack = [];
    _mapper;
    constructor(e = {}, t, s, r, i, o) { this._i18nNodesByMsgId = e, this._locale = t, this._digest = s, this._mapperFactory = r, this._missingTranslationStrategy = i, this._console = o; }
    convert(e) { this._contextStack.length = 0, this._errors.length = 0; let t = this._convertToText(e), s = e.nodes[0].sourceSpan.start.file.url, r = new Vo().parse(t, s, { tokenizeExpansionForms: !0 }); return { nodes: r.rootNodes, errors: [...this._errors, ...r.errors] }; }
    visitText(e, t) { return ta(e.value); }
    visitContainer(e, t) { return e.children.map(s => s.visit(this)).join(""); }
    visitIcu(e, t) { let s = Object.keys(e.cases).map(i => `${i} {${e.cases[i].visit(this)}}`); return `{${this._srcMsg.placeholders.hasOwnProperty(e.expression) ? this._srcMsg.placeholders[e.expression].text : e.expression}, ${e.type}, ${s.join(" ")}}`; }
    visitPlaceholder(e, t) { let s = this._mapper(e.name); return this._srcMsg.placeholders.hasOwnProperty(s) ? this._srcMsg.placeholders[s].text : this._srcMsg.placeholderToMessage.hasOwnProperty(s) ? this._convertToText(this._srcMsg.placeholderToMessage[s]) : (this._addError(e, `Unknown placeholder "${e.name}"`), ""); }
    visitTagPlaceholder(e, t) {
        let s = `${e.tag}`, r = Object.keys(e.attrs).map(o => `${o}="${e.attrs[o]}"`).join(" ");
        if (e.isVoid)
            return `<${s} ${r}/>`;
        let i = e.children.map(o => o.visit(this)).join("");
        return `<${s} ${r}>${i}</${s}>`;
    }
    visitIcuPlaceholder(e, t) { return this._convertToText(this._srcMsg.placeholderToMessage[e.name]); }
    visitBlockPlaceholder(e, t) { let s = e.parameters.length === 0 ? "" : ` (${e.parameters.join("; ")})`, r = e.children.map(i => i.visit(this)).join(""); return `@${e.name}${s} {${r}}`; }
    _convertToText(e) {
        let t = this._digest(e), s = this._mapperFactory ? this._mapperFactory(e) : null, r;
        if (this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper }), this._srcMsg = e, this._i18nNodesByMsgId.hasOwnProperty(t))
            r = this._i18nNodesByMsgId[t], this._mapper = a => s ? s.toInternalName(a) : a;
        else {
            if (this._missingTranslationStrategy === Ts.Error) {
                let a = this._locale ? ` for locale "${this._locale}"` : "";
                this._addError(e.nodes[0], `Missing translation for message "${t}"${a}`);
            }
            else if (this._console && this._missingTranslationStrategy === Ts.Warning) {
                let a = this._locale ? ` for locale "${this._locale}"` : "";
                this._console.warn(`Missing translation for message "${t}"${a}`);
            }
            r = e.nodes, this._mapper = a => a;
        }
        let i = r.map(a => a.visit(this)).join(""), o = this._contextStack.pop();
        return this._srcMsg = o.msg, this._mapper = o.mapper, i;
    }
    _addError(e, t) { this._errors.push(new D(e.sourceSpan, t)); }
}, Gp = class {
    _htmlParser;
    getTagDefinition;
    _translationBundle;
    constructor(e, t, s, r = Ts.Warning, i) {
        if (this._htmlParser = e, t) {
            let o = BC(s);
            this._translationBundle = Yo.load(t, "i18n", o, r, i);
        }
        else
            this._translationBundle = new Yo({}, null, Qp, void 0, r, i);
    }
    parse(e, t, s = {}) { let r = s.interpolationConfig || ot, i = this._htmlParser.parse(e, t, E({ interpolationConfig: r }, s)); return i.errors.length ? new js(i.rootNodes, i.errors) : aC(i.rootNodes, this._translationBundle, r, [], {}); }
};
function BC(n) {
    switch (n = (n || "xlf").toLowerCase(), n) {
        case "xmb": return new il;
        case "xtb": return new fc;
        case "xliff2":
        case "xlf2": return new uc;
        case "xliff":
        case "xlf":
        default: return new oc;
    }
}
var Xp = class {
    _htmlParser;
    _implicitTags;
    _implicitAttrs;
    _locale;
    _preserveWhitespace;
    _messages = [];
    constructor(e, t, s, r = null, i = !0) { this._htmlParser = e, this._implicitTags = t, this._implicitAttrs = s, this._locale = r, this._preserveWhitespace = i; }
    updateFromTemplate(e, t, s) {
        let r = this._htmlParser.parse(e, t, { tokenizeExpansionForms: !0, interpolationConfig: s });
        if (r.errors.length)
            return r.errors;
        let i = this._preserveWhitespace ? r.rootNodes : gt(new ii(!1), r.rootNodes), o = oC(i, s, this._implicitTags, this._implicitAttrs, this._preserveWhitespace);
        return o.errors.length ? o.errors : (this._messages.push(...o.messages), []);
    }
    getMessages() { return this._messages; }
    write(e, t) { let s = {}, r = new vc; this._messages.forEach(o => { let a = e.digest(o); s.hasOwnProperty(a) ? s[a].sources.push(...o.sources) : s[a] = o; }); let i = Object.keys(s).map(o => { let a = e.createNameMapper(s[o]), l = s[o], c = a ? r.convert(l.nodes, a) : l.nodes, p = new ke(c, {}, {}, l.meaning, l.description, o); return p.sources = l.sources, t && p.sources.forEach(h => h.filePath = t(h.filePath)), p; }); return e.write(i, this._locale); }
}, vc = class extends tl {
    convert(e, t) { return t ? e.map(s => s.visit(this, t)) : e; }
    visitTagPlaceholder(e, t) { let s = t.toPublicName(e.startName), r = e.closeName ? t.toPublicName(e.closeName) : e.closeName, i = e.children.map(o => o.visit(this, t)); return new Ot(e.tag, e.attrs, s, r, i, e.isVoid, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitBlockPlaceholder(e, t) { let s = t.toPublicName(e.startName), r = e.closeName ? t.toPublicName(e.closeName) : e.closeName, i = e.children.map(o => o.visit(this, t)); return new Vt(e.name, e.parameters, s, r, i, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitPlaceholder(e, t) { return new ht(e.value, t.toPublicName(e.name), e.sourceSpan); }
    visitIcuPlaceholder(e, t) { return new _n(e.value, t.toPublicName(e.name), e.sourceSpan); }
};
function MC(n) { let e = td(n); return ie([], [_r(e).toStmt()]).callFn([]); }
function td(n) { return y(f.setClassMetadata).callFn([n.type, n.decorators, n.ctorParameters ?? d(null), n.propDecorators ?? d(null)]); }
function PA(n, e) { return e === null || e.length === 0 ? MC(n) : nd(n, e.map(t => new Z(t.symbolName, qe)), sd(e)); }
function LA(n, e, t) { return nd(n, t.map(s => new Z(s, qe)), e); }
function nd(n, e, t) { let s = td(n), r = ie(e, [s.toStmt()]), i = y(f.setClassMetadataAsync).callFn([n.type, t, r]); return ie([], [_r(i).toStmt()]).callFn([]); }
function sd(n) { let e = n.map(({ symbolName: t, importPath: s, isDefaultImport: r }) => { let i = ie([new Z("m", qe)], N("m").prop(r ? "default" : t)); return new Qn(s).prop("then").callFn([i]); }); return ie([], R(e)); }
var RC = "12.0.0", FC = "18.0.0";
function $C(n) { let e = new oe; return e.set("minVersion", d(RC)), e.set("version", d("20.1.0")), e.set("ngImport", y(f.core)), e.set("type", n.type), e.set("decorators", n.decorators), e.set("ctorParameters", n.ctorParameters), e.set("propDecorators", n.propDecorators), y(f.declareClassMetadata).callFn([e.toLiteralMap()]); }
function BA(n, e) {
    if (e === null || e.length === 0)
        return $C(n);
    let t = new oe, s = new oe;
    return s.set("decorators", n.decorators), s.set("ctorParameters", n.ctorParameters ?? d(null)), s.set("propDecorators", n.propDecorators ?? d(null)), t.set("minVersion", d(FC)), t.set("version", d("20.1.0")), t.set("ngImport", y(f.core)), t.set("type", n.type), t.set("resolveDeferredDeps", sd(e)), t.set("resolveMetadata", ie(e.map(r => new Z(r.symbolName, qe)), s.toLiteralMap())), y(f.declareClassMetadataAsync).callFn([t.toLiteralMap()]);
}
function cr(n, e) { return n === null || n.length === 0 ? null : R(n.map(t => e(t))); }
function Ia(n, e) { let t = Object.keys(n).map(s => { let r = n[s]; return { key: s, value: e(r), quoted: !0 }; }); return t.length > 0 ? pe(t) : null; }
function OC(n) { return n === "invalid" ? d("invalid") : n === null ? d(null) : R(n.map(rd)); }
function rd(n) { let e = new oe; return e.set("token", n.token), n.attributeNameType !== null && e.set("attribute", d(!0)), n.host && e.set("host", d(!0)), n.optional && e.set("optional", d(!0)), n.self && e.set("self", d(!0)), n.skipSelf && e.set("skipSelf", d(!0)), e.toLiteralMap(); }
function MA(n) { let e = id(n), t = y(f.declareDirective).callFn([e.toLiteralMap()]), s = Hf(n); return { expression: t, type: s, statements: [] }; }
function id(n) { let e = new oe, t = VC(n); return e.set("minVersion", d(t)), e.set("version", d("20.1.0")), e.set("type", n.type.value), n.isStandalone !== void 0 && e.set("isStandalone", d(n.isStandalone)), n.isSignal && e.set("isSignal", d(n.isSignal)), n.selector !== null && e.set("selector", d(n.selector)), e.set("inputs", od(n) ? HC(n.inputs) : WC(n.inputs)), e.set("outputs", ll(n.outputs)), e.set("host", qC(n.host)), e.set("providers", n.providers), n.queries.length > 0 && e.set("queries", R(n.queries.map(Yp))), n.viewQueries.length > 0 && e.set("viewQueries", R(n.viewQueries.map(Yp))), n.exportAs !== null && e.set("exportAs", Le(n.exportAs)), n.usesInheritance && e.set("usesInheritance", d(!0)), n.lifecycle.usesOnChanges && e.set("usesOnChanges", d(!0)), n.hostDirectives?.length && e.set("hostDirectives", UC(n.hostDirectives)), e.set("ngImport", y(f.core)), e; }
function VC(n) { let e = "14.0.0"; return Object.values(n.inputs).some(s => s.transformFunction !== null) && (e = "16.1.0"), od(n) && (e = "17.1.0"), (n.queries.some(s => s.isSignal) || n.viewQueries.some(s => s.isSignal)) && (e = "17.2.0"), e; }
function od(n) { return Object.values(n.inputs).some(e => e.isSignal); }
function Yp(n) { let e = new oe; return e.set("propertyName", d(n.propertyName)), n.first && e.set("first", d(!0)), e.set("predicate", Array.isArray(n.predicate) ? Le(n.predicate) : vs(n.predicate)), n.emitDistinctChangesOnly || e.set("emitDistinctChangesOnly", d(!1)), n.descendants && e.set("descendants", d(!0)), e.set("read", n.read), n.static && e.set("static", d(!0)), n.isSignal && e.set("isSignal", d(!0)), e.toLiteralMap(); }
function qC(n) { let e = new oe; return e.set("attributes", Ia(n.attributes, t => t)), e.set("listeners", Ia(n.listeners, d)), e.set("properties", Ia(n.properties, d)), n.specialAttributes.styleAttr && e.set("styleAttribute", d(n.specialAttributes.styleAttr)), n.specialAttributes.classAttr && e.set("classAttribute", d(n.specialAttributes.classAttr)), e.values.length > 0 ? e.toLiteralMap() : null; }
function UC(n) { let e = n.map(t => { let s = [{ key: "directive", value: t.isForwardReference ? Cc(t.directive.type) : t.directive.type, quoted: !1 }], r = t.inputs ? Wo(t.inputs) : null, i = t.outputs ? Wo(t.outputs) : null; return r && s.push({ key: "inputs", value: r, quoted: !1 }), i && s.push({ key: "outputs", value: i, quoted: !1 }), pe(s); }); return R(e); }
function HC(n) { let e = Object.getOwnPropertyNames(n); return e.length === 0 ? null : pe(e.map(t => { let s = n[t]; return { key: t, quoted: kc.test(t), value: pe([{ key: "classPropertyName", quoted: !1, value: Le(s.classPropertyName) }, { key: "publicName", quoted: !1, value: Le(s.bindingPropertyName) }, { key: "isSignal", quoted: !1, value: Le(s.isSignal) }, { key: "isRequired", quoted: !1, value: Le(s.required) }, { key: "transformFunction", quoted: !1, value: s.transformFunction ?? Sn }]) }; })); }
function WC(n) {
    let e = Object.getOwnPropertyNames(n);
    return e.length === 0 ? null : pe(e.map(t => {
        let s = n[t], r = s.bindingPropertyName, i = r !== t, o;
        if (i || s.transformFunction !== null) {
            let a = [Le(r), Le(t)];
            s.transformFunction !== null && a.push(s.transformFunction), o = R(a);
        }
        else
            o = Le(r);
        return { key: t, quoted: kc.test(t), value: o };
    }));
}
function RA(n, e, t) { let s = jC(n, e, t), r = y(f.declareComponent).callFn([s.toLiteralMap()]), i = qf(n); return { expression: r, type: i, statements: [] }; }
function jC(n, e, t) {
    let s = id(n), r = new wc;
    if (j(r, e.nodes), s.set("template", zC(e, t)), t.isInline && s.set("isInline", d(!0)), r.hasBlocks && s.set("minVersion", d("17.0.0")), s.set("styles", cr(n.styles, d)), s.set("dependencies", XC(n)), s.set("viewProviders", n.viewProviders), s.set("animations", n.animations), n.changeDetection !== null) {
        if (typeof n.changeDetection == "object")
            throw new Error("Impossible state! Change detection flag is not resolved!");
        s.set("changeDetection", y(f.ChangeDetectionStrategy).prop(ui[n.changeDetection]));
    }
    if (n.encapsulation !== Et.Emulated && s.set("encapsulation", y(f.ViewEncapsulation).prop(Et[n.encapsulation])), n.interpolation !== ot && s.set("interpolation", R([d(n.interpolation.start), d(n.interpolation.end)])), e.preserveWhitespaces === !0 && s.set("preserveWhitespaces", d(!0)), n.defer.mode === 0) {
        let i = [], o = !1;
        for (let a of n.defer.blocks.values())
            a === null ? i.push(d(null)) : (i.push(a), o = !0);
        o && s.set("deferBlockDependencies", R(i));
    }
    else
        throw new Error("Unsupported defer function emit mode in partial compilation");
    return s;
}
function zC(n, e) {
    if (e.inlineTemplateLiteralExpression !== null)
        return e.inlineTemplateLiteralExpression;
    if (e.isInline)
        return d(e.content, null, null);
    let t = e.content, s = new zr(t, e.sourceUrl), r = new ns(s, 0, 0, 0), i = GC(s, t), o = new B(r, i);
    return d(t, null, o);
}
function GC(n, e) {
    let t = e.length, s = 0, r = 0, i = 0;
    do
        s = e.indexOf(`
`, r), s !== -1 && (r = s + 1, i++);
    while (s !== -1);
    return new ns(n, t, i, t - r);
}
function XC(n) {
    let e = n.declarationListEmitMode !== 0 ? Cc : t => t;
    if (n.declarationListEmitMode === 3)
        throw new Error("Unsupported emit mode");
    return cr(n.declarations, t => {
        switch (t.kind) {
            case Qt.Directive:
                let s = new oe;
                return s.set("kind", d(t.isComponent ? "component" : "directive")), s.set("type", e(t.type)), s.set("selector", d(t.selector)), s.set("inputs", cr(t.inputs, d)), s.set("outputs", cr(t.outputs, d)), s.set("exportAs", cr(t.exportAs, d)), s.toLiteralMap();
            case Qt.Pipe:
                let r = new oe;
                return r.set("kind", d("pipe")), r.set("type", e(t.type)), r.set("name", d(t.name)), r.toLiteralMap();
            case Qt.NgModule:
                let i = new oe;
                return i.set("kind", d("ngmodule")), i.set("type", e(t.type)), i.toLiteralMap();
        }
    });
}
var wc = class extends rm {
    hasBlocks = !1;
    visitDeferredBlock() { this.hasBlocks = !0; }
    visitDeferredBlockPlaceholder() { this.hasBlocks = !0; }
    visitDeferredBlockLoading() { this.hasBlocks = !0; }
    visitDeferredBlockError() { this.hasBlocks = !0; }
    visitIfBlock() { this.hasBlocks = !0; }
    visitIfBlockBranch() { this.hasBlocks = !0; }
    visitForLoopBlock() { this.hasBlocks = !0; }
    visitForLoopBlockEmpty() { this.hasBlocks = !0; }
    visitSwitchBlock() { this.hasBlocks = !0; }
    visitSwitchBlockCase() { this.hasBlocks = !0; }
}, YC = "12.0.0";
function FA(n) { let e = new oe; return e.set("minVersion", d(YC)), e.set("version", d("20.1.0")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), e.set("deps", OC(n.deps)), e.set("target", y(f.FactoryTarget).prop(Pt[n.target])), { expression: y(f.declareFactory).callFn([e.toLiteralMap()]), statements: [], type: hh(n) }; }
var QC = "12.0.0";
function $A(n) { let e = ZC(n), t = y(f.declareInjectable).callFn([e.toLiteralMap()]), s = Sh(n); return { expression: t, type: s, statements: [] }; }
function ZC(n) {
    let e = new oe;
    if (e.set("minVersion", d(QC)), e.set("version", d("20.1.0")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.providedIn !== void 0) {
        let t = vs(n.providedIn);
        t.value !== null && e.set("providedIn", t);
    }
    return n.useClass !== void 0 && e.set("useClass", vs(n.useClass)), n.useExisting !== void 0 && e.set("useExisting", vs(n.useExisting)), n.useValue !== void 0 && e.set("useValue", vs(n.useValue)), n.useFactory !== void 0 && e.set("useFactory", n.useFactory), n.deps !== void 0 && e.set("deps", R(n.deps.map(rd))), e;
}
var JC = "12.0.0";
function OA(n) { let e = KC(n), t = y(f.declareInjector).callFn([e.toLiteralMap()]), s = Mh(n); return { expression: t, type: s, statements: [] }; }
function KC(n) { let e = new oe; return e.set("minVersion", d(JC)), e.set("version", d("20.1.0")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), e.set("providers", n.providers), n.imports.length > 0 && e.set("imports", R(n.imports)), e; }
var eA = "14.0.0";
function VA(n) { let e = tA(n), t = y(f.declareNgModule).callFn([e.toLiteralMap()]), s = Rh(n); return { expression: t, type: s, statements: [] }; }
function tA(n) {
    let e = new oe;
    if (n.kind === Gt.Local)
        throw new Error("Invalid path! Local compilation mode should not get into the partial compilation path");
    return e.set("minVersion", d(eA)), e.set("version", d("20.1.0")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.bootstrap.length > 0 && e.set("bootstrap", xt(n.bootstrap, n.containsForwardDecls)), n.declarations.length > 0 && e.set("declarations", xt(n.declarations, n.containsForwardDecls)), n.imports.length > 0 && e.set("imports", xt(n.imports, n.containsForwardDecls)), n.exports.length > 0 && e.set("exports", xt(n.exports, n.containsForwardDecls)), n.schemas !== null && n.schemas.length > 0 && e.set("schemas", R(n.schemas.map(t => t.value))), n.id !== null && e.set("id", n.id), e;
}
var nA = "14.0.0";
function qA(n) { let e = sA(n), t = y(f.declarePipe).callFn([e.toLiteralMap()]), s = Fh(n); return { expression: t, type: s, statements: [] }; }
function sA(n) { let e = new oe; return e.set("minVersion", d(nA)), e.set("version", d("20.1.0")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.isStandalone !== void 0 && e.set("isStandalone", d(n.isStandalone)), e.set("name", d(n.pipeName ?? n.name)), n.pure === !1 && e.set("pure", d(n.pure)), e; }
function UA(n) { let e = { className: n.className }; n.filePath && (e.filePath = n.filePath, e.lineNumber = n.lineNumber), n.forbidOrphanRendering && (e.forbidOrphanRendering = d(!0)); let t = y(f.setClassDebugInfo).callFn([n.type, To(e)]); return ie([], [_r(t).toStmt()]).callFn([]); }
function HA(n) { let e = "m", t = "d", s = "t", r = "id", i = `${n.className}_HmrLoad`, o = n.namespaceDependencies.map(b => new Jt({ moduleName: b.moduleName, name: null })), a = N(e).prop("default"), l = y(f.replaceMetadata).callFn([n.type, a, R(o), R(n.localDependencies.map(b => b.runtimeRepresentation)), N("import").prop("meta"), N(r)]), c = ie([new Z(e)], a.and(l)), p = y(f.getReplaceMetadataURL).callFn([N(r), N(s), N("import").prop("meta").prop("url")]), h = new yn(i, [new Z(s)], [new Qn(p, null, "@vite-ignore").prop("then").callFn([c]).toStmt()], null, ae.Final), m = ie([new Z(t)], N(t).prop("id").identical(N(r)).and(N(i).callFn([N(t).prop("timestamp")]))), v = N(i).callFn([N("Date").prop("now").callFn([])]), w = N("import").prop("meta").prop("hot"), C = w.clone().prop("on").callFn([d("angular:component-update"), m]); return ie([], [new le(r, d(encodeURIComponent(`${n.filePath}@${n.className}`)), null, ae.Final), h, _r(v).toStmt(), _r(w.and(C)).toStmt()]).callFn([]); }
function WA(n, e, t) {
    let s = "\u0275\u0275namespaces", r = [t.className, s].map(o => new Z(o, qe)), i = [];
    for (let o of t.localDependencies)
        r.push(new Z(o.name));
    for (let o = 0; o < t.namespaceDependencies.length; o++)
        i.push(new le(t.namespaceDependencies[o].assignedName, N(s).key(d(o)), qe, ae.Final));
    i.push(...e);
    for (let o of n)
        if (o.initializer !== null) {
            i.push(N(t.className).prop(o.name).set(o.initializer).toStmt());
            for (let a of o.statements)
                i.push(a);
        }
    return new yn(`${t.className}_UpdateMetadata`, r, i, null, ae.Final);
}
var jA = new Va("20.1.0");
export { se as AST, Tr as ASTWithName, Ge as ASTWithSource, Qe as AbsoluteSourceSpan, Ma as ArrayType, En as ArrowFunctionExpr, vn as Attribute, Ne as Binary, x as BinaryOperator, H as BinaryOperatorExpr, ji as BindingPipe, Ii as BindingPipeType, Y as BindingType, it as Block, ko as BlockParameter, Ki as BoundElementProperty, Ct as BuiltinType, Ht as BuiltinTypeName, Pa as CUSTOM_ELEMENTS_SCHEMA, Dr as Call, Ps as Chain, ui as ChangeDetectionStrategy, Jl as CombinedRecursiveAstVisitor, Oa as CommaExpr, In as Comment, Op as CompilerConfig, nc as CompilerFacadeImpl, ye as Component, Ui as Conditional, _t as ConditionalExpr, Oi as ConstantPool, Xn as CssSelector, ot as DEFAULT_INTERPOLATION_CONFIG, qe as DYNAMIC_TYPE, yn as DeclareFunctionStmt, le as DeclareVarStmt, bo as Directive, zs as DomElementSchemaRegistry, Qn as DynamicImportExpr, xi as EOF, De as Element, Bl as ElementSchemaRegistry, Ha as EmitterVisitorContext, Re as EmptyExpr, gn as Expansion, ni as ExpansionCase, G as Expression, ja as ExpressionBinding, tt as ExpressionStatement, Ze as ExpressionType, Jt as ExternalExpr, $a as ExternalReference, Pt as FactoryTarget, Yt as FunctionExpr, Vo as HtmlParser, V as HtmlTagDefinition, Gp as I18NHtmlParser, Ar as IfStmt, Rt as ImplicitReceiver, Is as InstantiateExpr, hi as Interpolation, co as InterpolationConfig, Me as InvokeFunctionExpr, Cr as JSDocComment, hl as JitEvaluator, Ls as KeyedRead, yr as LeadingComment, Io as LetDeclaration, oi as Lexer, zi as LiteralArray, ft as LiteralArrayExpr, Ee as LiteralExpr, Gi as LiteralMap, bt as LiteralMapExpr, ze as LiteralPrimitive, xr as LocalizedString, Ra as MapType, Xp as MessageBundle, At as NONE_TYPE, La as NO_ERRORS_SCHEMA, tn as NodeWithI18n, Nr as NonNullAssert, Ds as NotExpr, Tt as ParenthesizedExpr, Qi as ParenthesizedExpression, D as ParseError, fn as ParseErrorLevel, ns as ParseLocation, zr as ParseSourceFile, B as ParseSourceSpan, Jn as ParseSpan, js as ParseTreeResult, Ji as ParsedEvent, pt as ParsedEventType, ur as ParsedProperty, pn as ParsedPropertyType, za as ParsedVariable, Do as Parser, br as PrefixNot, mn as PropertyRead, f as R3Identifiers, Gt as R3NgModuleMetadataKind, ho as R3SelectorScopeMode, jo as R3TargetBinder, Qt as R3TemplateDependencyKind, Mt as ReadKeyExpr, Ue as ReadPropExpr, et as ReadVarExpr, Zi as RecursiveAstVisitor, Bu as RecursiveVisitor, tc as ResourceLoader, _e as ReturnStatement, zu as SECURITY_SCHEMA, Jo as STRING_TYPE, Xi as SafeCall, Wi as SafeKeyedRead, Hi as SafePropertyRead, Da as SelectorContext, Na as SelectorListContext, wr as SelectorMatcher, Bi as SelectorlessMatcher, $s as Serializer, Nl as SplitInterpolation, xn as Statement, ae as StmtModifier, dr as StringToken, jn as StringTokenKind, Lt as TagContentType, Pr as TaggedTemplateLiteral, ks as TaggedTemplateLiteralExpr, Dl as TemplateBindingParseResult, Lr as TemplateLiteral, Yi as TemplateLiteralElement, Sr as TemplateLiteralElementExpr, Ns as TemplateLiteralExpr, nn as Text, Kn as ThisReceiver, dt as TmplAstBlockNode, Ya as TmplAstBoundAttribute, eo as TmplAstBoundDeferredTrigger, Qa as TmplAstBoundEvent, Bs as TmplAstBoundText, pr as TmplAstComponent, Fs as TmplAstContent, es as TmplAstDeferredBlock, Fr as TmplAstDeferredBlockError, Rr as TmplAstDeferredBlockLoading, Mr as TmplAstDeferredBlockPlaceholder, $t as TmplAstDeferredTrigger, fh as TmplAstDirective, Ft as TmplAstElement, Rs as TmplAstForLoopBlock, Or as TmplAstForLoopBlockEmpty, ao as TmplAstHostElement, to as TmplAstHoverDeferredTrigger, dh as TmplAstIcu, Ja as TmplAstIdleDeferredTrigger, io as TmplAstIfBlock, Hn as TmplAstIfBlockBranch, Ka as TmplAstImmediateDeferredTrigger, no as TmplAstInteractionDeferredTrigger, Ac as TmplAstLetDeclaration, Za as TmplAstNeverDeferredTrigger, rm as TmplAstRecursiveVisitor, Vr as TmplAstReference, ro as TmplAstSwitchBlock, $r as TmplAstSwitchBlockCase, Je as TmplAstTemplate, On as TmplAstText, Ms as TmplAstTextAttribute, el as TmplAstTimerDeferredTrigger, oo as TmplAstUnknownBlock, Cn as TmplAstVariable, so as TmplAstViewportDeferredTrigger, Nt as Token, $ as TokenType, Fi as TransplantedType, he as TreeError, wn as Type, xc as TypeModifier, Yn as TypeofExpr, kr as TypeofExpression, ys as Unary, bs as UnaryOperator, Kt as UnaryOperatorExpr, jA as VERSION, Br as VariableBinding, Va as Version, Et as ViewEncapsulation, Er as VoidExpr, Ir as VoidExpression, U as WrappedNodeExpr, oc as Xliff, uc as Xliff2, il as Xmb, Nn as XmlParser, fc as Xtb, UA as compileClassDebugInfo, MC as compileClassMetadata, PA as compileComponentClassMetadata, BA as compileComponentDeclareClassMetadata, by as compileComponentFromMetadata, $C as compileDeclareClassMetadata, RA as compileDeclareComponentFromMetadata, MA as compileDeclareDirectiveFromMetadata, FA as compileDeclareFactoryFunction, $A as compileDeclareInjectableFromMetadata, OA as compileDeclareInjectorFromMetadata, VA as compileDeclareNgModuleFromMetadata, qA as compileDeclarePipeFromMetadata, TA as compileDeferResolverFunction, Ty as compileDirectiveFromMetadata, Rn as compileFactoryFunction, HA as compileHmrInitializer, WA as compileHmrUpdateCallback, uu as compileInjectable, Eu as compileInjector, Rm as compileNgModule, LA as compileOpaqueAsyncClassMetadata, Su as compilePipeFromMetadata, Kp as computeMsgId, rA as core, gm as createCssSelectorFromNode, Sh as createInjectableType, yc as createMayBeForwardRefExpression, _r as devOnlyGuardedExpression, ad as emitDistinctChangesOnlyDefaultValue, _A as encapsulateStyle, aA as escapeRegExp, bA as findMatchingDirectivesAndPipes, Ml as getHtmlTagDefinition, Xa as getNsPrefix, Qd as getSafePropertyAccessString, Pm as identifierName, lu as isNgContainer, Ga as isNgContent, sm as isNgTemplate, rh as jsDocComment, Td as leadingComment, d as literal, pe as literalMap, Uo as makeBindingParser, Ni as mergeNsAndName, oA as outputAst, Ly as parseHostBindings, $f as parseTemplate, nC as preserveWhitespacesDefault, kA as publishFacade, Nm as r3JitTypeSourceSpan, fr as sanitizeIdentifier, AA as setEnableTemplateSourceLocations, kt as splitNsName, j as tmplAstVisitAll, By as verifyHostBindings, L as visitAll }; /*! Bundled license information:

@angular/compiler/fesm2022/compiler.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/compiler/fesm2022/compiler.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
  (**
   *
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
