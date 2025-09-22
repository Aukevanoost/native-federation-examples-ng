import { a as p, b as A, c as E, d as I, f as m } from "@nf-internal/chunk-6QGHXQ3P";
import { a as y } from "@nf-internal/chunk-4CLCTAJ7";
import { ɵDomAdapter as N, ɵsetRootDomAdapter as P, ɵparseCookieValue as B, ɵgetDOM as O, DOCUMENT as d, ɵPLATFORM_BROWSER_ID as V, XhrFactory as j, CommonModule as x } from "@angular/common";
import * as s from "@angular/core";
import { ɵglobal as l, ɵRuntimeError as U, ɵinternalCreateApplication as S, PLATFORM_ID as K, PLATFORM_INITIALIZER as H, createPlatformFactory as W, platformCore as G, InjectionToken as de, ɵTESTABILITY_GETTER as v, ɵTESTABILITY as Y, Testability as R, NgZone as h, TestabilityRegistry as b, ɵINJECTOR_SCOPE as z, ErrorHandler as _, RendererFactory2 as Z, ApplicationModule as X, ɵsetDocument as q } from "@angular/core";
var g = class t extends N {
    supportsDOMEvents = !0;
    static makeCurrent() { P(new t); }
    onAndCancel(o, e, n, r) { return o.addEventListener(e, n, r), () => { o.removeEventListener(e, n, r); }; }
    dispatchEvent(o, e) { o.dispatchEvent(e); }
    remove(o) { o.remove(); }
    createElement(o, e) { return e = e || this.getDefaultDocument(), e.createElement(o); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(o) { return o.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(o) { return o instanceof DocumentFragment; }
    getGlobalEventTarget(o, e) { return e === "window" ? window : e === "document" ? o : e === "body" ? o.body : null; }
    getBaseHref(o) { let e = J(); return e == null ? null : Q(e); }
    resetBaseElement() { c = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(o) { return B(document.cookie, o); }
}, c = null;
function J() { return c = c || document.head.querySelector("base"), c ? c.getAttribute("href") : null; }
function Q(t) { return new URL(t, document.baseURI).pathname; }
var D = class {
    addToWindow(o) { l.getAngularTestability = (n, r = !0) => { let i = o.findTestabilityInTree(n, r); if (i == null)
        throw new U(5103, !1); return i; }, l.getAllAngularTestabilities = () => o.getAllTestabilities(), l.getAllAngularRootElements = () => o.getAllRootElements(); let e = n => { let r = l.getAllAngularTestabilities(), i = r.length, a = function () { i--, i == 0 && n(); }; r.forEach(u => { u.whenStable(a); }); }; l.frameworkStabilizers || (l.frameworkStabilizers = []), l.frameworkStabilizers.push(e); }
    findTestabilityInTree(o, e, n) { if (e == null)
        return null; let r = o.getTestability(e); return r ?? (n ? O().isShadowRoot(e) ? this.findTestabilityInTree(o, e.host, !0) : this.findTestabilityInTree(o, e.parentElement, !0) : null); }
}, $ = (() => { class t {
    build() { return new XMLHttpRequest; }
    static ɵfac = function (n) { return new (n || t); };
    static ɵprov = s.ɵɵdefineInjectable({ token: t, factory: t.ɵfac });
} return t; })(), ee = (() => { class t extends E {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, n, r, i) { return e.addEventListener(n, r, i), () => this.removeEventListener(e, n, r, i); }
    removeEventListener(e, n, r, i) { return e.removeEventListener(n, r, i); }
    static ɵfac = function (n) { return new (n || t)(s.ɵɵinject(d)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: t, factory: t.ɵfac });
} return t; })(), w = ["alt", "control", "meta", "shift"], te = { "\b": "Backspace", "\t": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, ne = { alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey }, re = (() => { class t extends E {
    constructor(e) { super(e); }
    supports(e) { return t.parseEventName(e) != null; }
    addEventListener(e, n, r, i) { let a = t.parseEventName(n), u = t.eventCallback(a.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => O().onAndCancel(e, a.domEventName, u, i)); }
    static parseEventName(e) { let n = e.toLowerCase().split("."), r = n.shift(); if (n.length === 0 || !(r === "keydown" || r === "keyup"))
        return null; let i = t._normalizeKey(n.pop()), a = "", u = n.indexOf("code"); if (u > -1 && (n.splice(u, 1), a = "code."), w.forEach(T => { let M = n.indexOf(T); M > -1 && (n.splice(M, 1), a += T + "."); }), a += i, n.length != 0 || i.length === 0)
        return null; let f = {}; return f.domEventName = r, f.fullKey = a, f; }
    static matchEventFullKeyCode(e, n) { let r = te[e.key] || e.key, i = ""; return n.indexOf("code.") > -1 && (r = e.code, i = "code."), r == null || !r ? !1 : (r = r.toLowerCase(), r === " " ? r = "space" : r === "." && (r = "dot"), w.forEach(a => { if (a !== r) {
        let u = ne[a];
        u(e) && (i += a + ".");
    } }), i += r, i === n); }
    static eventCallback(e, n, r) { return i => { t.matchEventFullKeyCode(i, e) && r.runGuarded(() => n(i)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static ɵfac = function (n) { return new (n || t)(s.ɵɵinject(d)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: t, factory: t.ɵfac });
} return t; })();
function me(t, o) { return S(y({ rootComponent: t }, L(o))); }
function ve(t) { return S(L(t)); }
function L(t) { return { appProviders: [...F, ...(t?.providers ?? [])], platformProviders: C }; }
function Re() { return [...k]; }
function oe() { g.makeCurrent(); }
function ie() { return new _; }
function ae() { return q(document), document; }
var C = [{ provide: K, useValue: V }, { provide: H, useValue: oe, multi: !0 }, { provide: d, useFactory: ae }], ge = W(G, "browser", C);
var k = [{ provide: v, useClass: D }, { provide: Y, useClass: R, deps: [h, b, v] }, { provide: R, useClass: R, deps: [h, b, v] }], F = [{ provide: z, useValue: "root" }, { provide: _, useFactory: ie }, { provide: p, useClass: ee, multi: !0, deps: [d] }, { provide: p, useClass: re, multi: !0, deps: [d] }, m, I, A, { provide: Z, useExisting: m }, { provide: j, useClass: $ }, []], De = (() => { class t {
    constructor() { }
    static ɵfac = function (n) { return new (n || t); };
    static ɵmod = s.ɵɵdefineNgModule({ type: t });
    static ɵinj = s.ɵɵdefineInjector({ providers: [...F, ...k], imports: [x, X] });
} return t; })();
export { g as a, D as b, ee as c, re as d, me as e, ve as f, Re as g, ge as h, De as i }; /*! Bundled license information:

@angular/platform-browser/fesm2022/browser.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
