import { a as D, b as _ } from "@nf-internal/chunk-4CLCTAJ7";
import { DOCUMENT as I, ɵgetDOM as k } from "@angular/common";
import * as i from "@angular/core";
import { InjectionToken as N, ɵRuntimeError as M, APP_ID as x, CSP_NONCE as H, PLATFORM_ID as U, ViewEncapsulation as m, ɵTracingService as B, RendererStyleFlags2 as v } from "@angular/core";
var $ = new N(""), Z = (() => { class o {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(s => { s.manager = this; }), this._plugins = e.slice().reverse(); }
    addEventListener(e, t, s, r) { return this._findPluginFor(t).addEventListener(e, t, s, r); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(r => r.supports(e)), !t)
        throw new M(5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static ɵfac = function (t) { return new (t || o)(i.ɵɵinject($), i.ɵɵinject(i.NgZone)); };
    static ɵprov = i.ɵɵdefineInjectable({ token: o, factory: o.ɵfac });
} return o; })(), R = class {
    _doc;
    constructor(n) { this._doc = n; }
    manager;
}, S = "ng-app-id";
function T(o) { for (let n of o)
    n.remove(); }
function P(o, n) { let e = n.createElement("style"); return e.textContent = o, e; }
function F(o, n, e, t) { let s = o.head?.querySelectorAll(`style[${S}="${n}"],link[${S}="${n}"]`); if (s)
    for (let r of s)
        r.removeAttribute(S), r instanceof HTMLLinkElement ? t.set(r.href.slice(r.href.lastIndexOf("/") + 1), { usage: 0, elements: [r] }) : r.textContent && e.set(r.textContent, { usage: 0, elements: [r] }); }
function C(o, n) { let e = n.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", o), e; }
var G = (() => { class o {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, s, r = {}) { this.doc = e, this.appId = t, this.nonce = s, F(e, t, this.inline, this.external), this.hosts.add(e.head); }
    addStyles(e, t) { for (let s of e)
        this.addUsage(s, this.inline, P); t?.forEach(s => this.addUsage(s, this.external, C)); }
    removeStyles(e, t) { for (let s of e)
        this.removeUsage(s, this.inline); t?.forEach(s => this.removeUsage(s, this.external)); }
    addUsage(e, t, s) { let r = t.get(e); r ? r.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(a => this.addElement(a, s(e, this.doc))) }); }
    removeUsage(e, t) { let s = t.get(e); s && (s.usage--, s.usage <= 0 && (T(s.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        T(e); this.hosts.clear(); }
    addHost(e) { this.hosts.add(e); for (let [t, { elements: s }] of this.inline)
        s.push(this.addElement(e, P(t, this.doc))); for (let [t, { elements: s }] of this.external)
        s.push(this.addElement(e, C(t, this.doc))); }
    removeHost(e) { this.hosts.delete(e); }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(S, this.appId), e.appendChild(t); }
    static ɵfac = function (t) { return new (t || o)(i.ɵɵinject(I), i.ɵɵinject(x), i.ɵɵinject(H, 8), i.ɵɵinject(U)); };
    static ɵprov = i.ɵɵdefineInjectable({ token: o, factory: o.ɵfac });
} return o; })(), E = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, A = /%COMP%/g;
var L = "%COMP%", V = `_nghost-${L}`, X = `_ngcontent-${L}`, Y = !0, z = new N("", { providedIn: "root", factory: () => Y });
function q(o) { return X.replace(A, o); }
function W(o) { return V.replace(A, o); }
function j(o, n) { return n.map(e => e.replace(A, o)); }
var ne = (() => { class o {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    platformId;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    platformIsServer;
    constructor(e, t, s, r, a, l, h, c = null, d = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = s, this.removeStylesOnCompDestroy = r, this.doc = a, this.platformId = l, this.ngZone = h, this.nonce = c, this.tracingService = d, this.platformIsServer = typeof ngServerMode < "u" && ngServerMode, this.defaultRenderer = new g(e, a, h, this.platformIsServer, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && t.encapsulation === m.ShadowDom && (t = _(D({}, t), { encapsulation: m.Emulated })); let s = this.getOrCreateRenderer(e, t); return s instanceof w ? s.applyToHost(e) : s instanceof y && s.applyStyles(), s; }
    getOrCreateRenderer(e, t) { let s = this.rendererByCompId, r = s.get(t.id); if (!r) {
        let a = this.doc, l = this.ngZone, h = this.eventManager, c = this.sharedStylesHost, d = this.removeStylesOnCompDestroy, u = this.platformIsServer, f = this.tracingService;
        switch (t.encapsulation) {
            case m.Emulated:
                r = new w(h, c, t, this.appId, d, a, l, u, f);
                break;
            case m.ShadowDom: return new O(h, c, e, t, a, l, this.nonce, u, f);
            default:
                r = new y(h, c, t, d, a, l, u, f);
                break;
        }
        s.set(t.id, r);
    } return r; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static ɵfac = function (t) { return new (t || o)(i.ɵɵinject(Z), i.ɵɵinject(G), i.ɵɵinject(x), i.ɵɵinject(z), i.ɵɵinject(I), i.ɵɵinject(U), i.ɵɵinject(i.NgZone), i.ɵɵinject(H), i.ɵɵinject(B, 8)); };
    static ɵprov = i.ɵɵdefineInjectable({ token: o, factory: o.ɵfac });
} return o; })(), g = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, t, s, r) { this.eventManager = n, this.doc = e, this.ngZone = t, this.platformIsServer = s, this.tracingService = r; }
    destroy() { }
    destroyNode = null;
    createElement(n, e) { return e ? this.doc.createElementNS(E[e] || e, n) : this.doc.createElement(n); }
    createComment(n) { return this.doc.createComment(n); }
    createText(n) { return this.doc.createTextNode(n); }
    appendChild(n, e) { (b(n) ? n.content : n).appendChild(e); }
    insertBefore(n, e, t) { n && (b(n) ? n.content : n).insertBefore(e, t); }
    removeChild(n, e) { e.remove(); }
    selectRootElement(n, e) { let t = typeof n == "string" ? this.doc.querySelector(n) : n; if (!t)
        throw new M(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(n) { return n.parentNode; }
    nextSibling(n) { return n.nextSibling; }
    setAttribute(n, e, t, s) { if (s) {
        e = s + ":" + e;
        let r = E[s];
        r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t);
    }
    else
        n.setAttribute(e, t); }
    removeAttribute(n, e, t) { if (t) {
        let s = E[t];
        s ? n.removeAttributeNS(s, e) : n.removeAttribute(`${t}:${e}`);
    }
    else
        n.removeAttribute(e); }
    addClass(n, e) { n.classList.add(e); }
    removeClass(n, e) { n.classList.remove(e); }
    setStyle(n, e, t, s) { s & (v.DashCase | v.Important) ? n.style.setProperty(e, t, s & v.Important ? "important" : "") : n.style[e] = t; }
    removeStyle(n, e, t) { t & v.DashCase ? n.style.removeProperty(e) : n.style[e] = ""; }
    setProperty(n, e, t) { n != null && (n[e] = t); }
    setValue(n, e) { n.nodeValue = e; }
    listen(n, e, t, s) { if (typeof n == "string" && (n = k().getGlobalEventTarget(this.doc, n), !n))
        throw new M(5102, !1); let r = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (r = this.tracingService.wrapEventListener(n, e, r)), this.eventManager.addEventListener(n, e, r, s); }
    decoratePreventDefault(n) { return e => { if (e === "__ngUnwrap__")
        return n; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => n(e)) : n(e)) === !1 && e.preventDefault(); }; }
};
function b(o) { return o.tagName === "TEMPLATE" && o.content !== void 0; }
var O = class extends g {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(n, e, t, s, r, a, l, h, c) { super(n, r, a, h, c), this.sharedStylesHost = e, this.hostEl = t, this.shadowRoot = t.attachShadow({ mode: "open" }), this.sharedStylesHost.addHost(this.shadowRoot); let d = s.styles; d = j(s.id, d); for (let f of d) {
        let p = document.createElement("style");
        l && p.setAttribute("nonce", l), p.textContent = f, this.shadowRoot.appendChild(p);
    } let u = s.getExternalStyles?.(); if (u)
        for (let f of u) {
            let p = C(f, r);
            l && p.setAttribute("nonce", l), this.shadowRoot.appendChild(p);
        } }
    nodeOrShadowRoot(n) { return n === this.hostEl ? this.shadowRoot : n; }
    appendChild(n, e) { return super.appendChild(this.nodeOrShadowRoot(n), e); }
    insertBefore(n, e, t) { return super.insertBefore(this.nodeOrShadowRoot(n), e, t); }
    removeChild(n, e) { return super.removeChild(null, e); }
    parentNode(n) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n))); }
    destroy() { this.sharedStylesHost.removeHost(this.shadowRoot); }
}, y = class extends g {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(n, e, t, s, r, a, l, h, c) { super(n, r, a, l, h), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = s; let d = t.styles; this.styles = c ? j(c, d) : d, this.styleUrls = t.getExternalStyles?.(c); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, w = class extends y {
    contentAttr;
    hostAttr;
    constructor(n, e, t, s, r, a, l, h, c) { let d = s + "-" + t.id; super(n, e, t, r, a, l, h, c, d), this.contentAttr = q(d), this.hostAttr = W(d); }
    applyToHost(n) { this.applyStyles(), this.setAttribute(n, this.hostAttr, ""); }
    createElement(n, e) { let t = super.createElement(n, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
export { $ as a, Z as b, R as c, G as d, z as e, ne as f }; /*! Bundled license information:

@angular/platform-browser/fesm2022/dom_renderer.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
