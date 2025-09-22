var y = { JSACTION: "jsaction" };
var S = { JSACTION: "__jsaction", OWNER: "__owner" }, I = {};
function U(t) { return t[S.JSACTION]; }
function Ie(t) { let e = U(t) ?? {}; return T(t, e), e; }
function T(t, e) { t[S.JSACTION] = e; }
function Q(t) { return I[t]; }
function X(t, e) { I[t] = e; }
var i = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, $ = [i.MOUSEENTER, i.MOUSELEAVE, "pointerenter", "pointerleave"], z = [i.CLICK, i.DBLCLICK, i.FOCUSIN, i.FOCUSOUT, i.KEYDOWN, i.KEYUP, i.KEYPRESS, i.MOUSEOVER, i.MOUSEOUT, i.SUBMIT, i.TOUCHSTART, i.TOUCHEND, i.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], _ = [i.FOCUS, i.BLUR, i.ERROR, i.LOAD, i.TOGGLE], L = t => _.indexOf(t) >= 0, Z = z.concat(_), Ue = t => Z.indexOf(t) >= 0;
function W(t) { return t === i.MOUSEENTER ? i.MOUSEOVER : t === i.MOUSELEAVE ? i.MOUSEOUT : t === i.POINTERENTER ? i.POINTEROVER : t === i.POINTERLEAVE ? i.POINTEROUT : t; }
function J(t, e, n, r) { let s = !1; L(e) && (s = !0); let o = typeof r == "boolean" ? { capture: s, passive: r } : s; return t.addEventListener(e, n, o), { eventType: e, handler: n, capture: s, passive: r }; }
function ee(t, e) { if (t.removeEventListener) {
    let n = typeof e.passive == "boolean" ? { capture: e.capture } : e.capture;
    t.removeEventListener(e.eventType, e.handler, n);
}
else
    t.detachEvent && t.detachEvent(`on${e.eventType}`, e.handler); }
function te(t) { t.preventDefault ? t.preventDefault() : t.returnValue = !1; }
var P = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function ne(t) { return t.which === 2 || t.which == null && t.button === 4; }
function re(t) { return P && t.metaKey || !P && t.ctrlKey || ne(t) || t.shiftKey; }
function ie(t, e, n) { let r = t.relatedTarget; return (t.type === i.MOUSEOVER && e === i.MOUSEENTER || t.type === i.MOUSEOUT && e === i.MOUSELEAVE || t.type === i.POINTEROVER && e === i.POINTERENTER || t.type === i.POINTEROUT && e === i.POINTERLEAVE) && (!r || r !== n && !n.contains(r)); }
function se(t, e) { let n = {}; for (let r in t) {
    if (r === "srcElement" || r === "target")
        continue;
    let s = r, o = t[s];
    typeof o != "function" && (n[s] = o);
} return t.type === i.MOUSEOVER ? n.type = i.MOUSEENTER : t.type === i.MOUSEOUT ? n.type = i.MOUSELEAVE : t.type === i.POINTEROVER ? n.type = i.POINTERENTER : n.type = i.POINTERLEAVE, n.target = n.srcElement = e, n.bubbles = !1, n._originalEvent = t, n; }
var oe = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), m = class {
    element;
    handlerInfos = [];
    constructor(e) { this.element = e; }
    addEventListener(e, n, r) { oe && (this.element.style.cursor = "pointer"), this.handlerInfos.push(J(this.element, e, n(this.element), r)); }
    cleanUp() { for (let e = 0; e < this.handlerInfos.length; e++)
        ee(this.element, this.handlerInfos[e]); this.handlerInfos = []; }
}, ce = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function a(t) { return t.eventType; }
function A(t, e) { t.eventType = e; }
function h(t) { return t.event; }
function w(t, e) { t.event = e; }
function D(t) { return t.targetElement; }
function k(t, e) { t.targetElement = e; }
function b(t) { return t.eic; }
function Ee(t, e) { t.eic = e; }
function ae(t) { return t.timeStamp; }
function ue(t, e) { t.timeStamp = e; }
function d(t) { return t.eia; }
function V(t, e, n) { t.eia = [e, n]; }
function v(t) { t.eia = void 0; }
function l(t) { return t[1]; }
function pe(t) { return t.eirp; }
function F(t, e) { t.eirp = e; }
function K(t) { return t.eir; }
function H(t, e) { t.eir = e; }
function Y(t) { return { eventType: t.eventType, event: t.event, targetElement: t.targetElement, eic: t.eic, eia: t.eia, timeStamp: t.timeStamp, eirp: t.eirp, eiack: t.eiack, eir: t.eir }; }
function B(t, e, n, r, s, o, c, E) { return { eventType: t, event: e, targetElement: n, eic: r, timeStamp: s, eia: o, eirp: c, eiack: E }; }
var O = class t {
    eventInfo;
    constructor(e) { this.eventInfo = e; }
    getEventType() { return a(this.eventInfo); }
    setEventType(e) { A(this.eventInfo, e); }
    getEvent() { return h(this.eventInfo); }
    setEvent(e) { w(this.eventInfo, e); }
    getTargetElement() { return D(this.eventInfo); }
    setTargetElement(e) { k(this.eventInfo, e); }
    getContainer() { return b(this.eventInfo); }
    setContainer(e) { Ee(this.eventInfo, e); }
    getTimestamp() { return ae(this.eventInfo); }
    setTimestamp(e) { ue(this.eventInfo, e); }
    getAction() { let e = d(this.eventInfo); if (e)
        return { name: e[0], element: e[1] }; }
    setAction(e) { if (!e) {
        v(this.eventInfo);
        return;
    } V(this.eventInfo, e.name, e.element); }
    getIsReplay() { return pe(this.eventInfo); }
    setIsReplay(e) { F(this.eventInfo, e); }
    getResolved() { return K(this.eventInfo); }
    setResolved(e) { H(this.eventInfo, e); }
    clone() { return new t(Y(this.eventInfo)); }
}, le = {}, he = /\s*;\s*/, de = i.CLICK, g = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: e = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = e, this.clickModSupport = n; }
    resolveEventType(e) { this.clickModSupport && a(e) === i.CLICK && re(h(e)) ? A(e, i.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(e); }
    resolveAction(e) { K(e) || (this.populateAction(e, D(e)), H(e, !0)); }
    resolveParentAction(e) { let n = d(e), r = n && l(n); v(e); let s = r && this.getParentNode(r); s && this.populateAction(e, s); }
    populateAction(e, n) { let r = n; for (; r && r !== b(e) && (r.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(r, e), !d(e));)
        r = this.getParentNode(r); let s = d(e); if (s && (this.a11yClickSupport && this.preventDefaultForA11yClick(e), this.syntheticMouseEventSupport && (a(e) === i.MOUSEENTER || a(e) === i.MOUSELEAVE || a(e) === i.POINTERENTER || a(e) === i.POINTERLEAVE)))
        if (ie(h(e), a(e), l(s))) {
            let o = se(h(e), l(s));
            w(e, o), k(e, l(s));
        }
        else
            v(e); }
    getParentNode(e) { let n = e[S.OWNER]; if (n)
        return n; let r = e.parentNode; return r?.nodeName === "#document-fragment" ? r?.host ?? null : r; }
    populateActionOnElement(e, n) { let r = this.parseActions(e), s = r[a(n)]; s !== void 0 && V(n, s, e), this.a11yClickSupport && this.populateClickOnlyAction(e, n, r); }
    parseActions(e) { let n = U(e); if (!n) {
        let r = e.getAttribute(y.JSACTION);
        if (!r)
            n = le, T(e, n);
        else {
            if (n = Q(r), !n) {
                n = {};
                let s = r.split(he);
                for (let o = 0; o < s.length; o++) {
                    let c = s[o];
                    if (!c)
                        continue;
                    let E = c.indexOf(ce.EVENT_ACTION_SEPARATOR), p = E !== -1, f = p ? c.substr(0, E).trim() : de, q = p ? c.substr(E + 1).trim() : c;
                    n[f] = q;
                }
                X(r, n);
            }
            T(e, n);
        }
    } return n; }
    addA11yClickSupport(e, n, r) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = e, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = r; }
}, x = function (t) { return t[t.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", t; }(x || {}), R = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(e, { actionResolver: n, eventReplayer: r } = {}) { this.dispatchDelegate = e, this.actionResolver = n, this.eventReplayer = r; }
    dispatch(e) { let n = new O(e); this.actionResolver?.resolveEventType(e), this.actionResolver?.resolveAction(e); let r = n.getAction(); if (r && fe(r.element, n) && te(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(e) { this.replayEventInfoWrappers.push(e), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function fe(t, e) { return t.tagName === "A" && (e.getEventType() === i.CLICK || e.getEventType() === i.CLICKMOD); }
var j = Symbol.for("propagationStopped"), Te = { REPLAY: 101 };
var ve = "`preventDefault` called during event replay.";
var Oe = "`composedPath` called during event replay.", C = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(e, n = !0) { this.dispatchDelegate = e, this.clickModSupport = n, this.actionResolver = new g({ clickModSupport: n }), this.dispatcher = new R(r => { this.dispatchToDelegate(r); }, { actionResolver: this.actionResolver }); }
    dispatch(e) { this.dispatcher.dispatch(e); }
    dispatchToDelegate(e) { for (e.getIsReplay() && Se(e), ge(e); e.getAction();) {
        if (Ae(e), L(e.getEventType()) && e.getAction().element !== e.getTargetElement() || (this.dispatchDelegate(e.getEvent(), e.getAction().name), Re(e)))
            return;
        this.actionResolver.resolveParentAction(e.eventInfo);
    } }
};
function ge(t) { let e = t.getEvent(), n = t.getEvent().stopPropagation.bind(e), r = () => { e[j] = !0, n(); }; u(e, "stopPropagation", r), u(e, "stopImmediatePropagation", r); }
function Re(t) { return !!t.getEvent()[j]; }
function Se(t) { let e = t.getEvent(), n = t.getTargetElement(), r = e.preventDefault.bind(e); u(e, "target", n), u(e, "eventPhase", Te.REPLAY), u(e, "preventDefault", () => { throw r(), new Error(ve + ""); }), u(e, "composedPath", () => { throw new Error(Oe + ""); }); }
function Ae(t) { let e = t.getEvent(), n = t.getAction()?.element; n && u(e, "currentTarget", n, { configurable: !0 }); }
function u(t, e, n, { configurable: r = !1 } = {}) { Object.defineProperty(t, e, { value: n, configurable: r }); }
function _e(t, e) { t.ecrd(n => { e.dispatch(n); }, x.I_AM_THE_JSACTION_FRAMEWORK); }
function ye(t) { let e = [], n = s => { e.push(s); }; return { c: t, q: e, et: [], etc: [], d: n, h: s => { n(B(s.type, s, s.target, t, Date.now())); } }; }
function N(t, e, n) { for (let r = 0; r < e.length; r++) {
    let s = e[r];
    (n ? t.etc : t.et).push(s), t.c.addEventListener(s, t.h, n);
} }
function Pe(t) { return t?.q ?? []; }
function me(t, e) { t && (t.d = e); }
function G(t) { t && (M(t.c, t.et, t.h), M(t.c, t.etc, t.h, !0)); }
function M(t, e, n, r) { for (let s = 0; s < e.length; s++)
    t.removeEventListener(e[s], n, r); }
var Ce = !1, Le = (() => { class t {
    static MOUSE_SPECIAL_SUPPORT = Ce;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, r, s) { let o = B(n, r, r.target, s, Date.now()); this.handleEventInfo(o); }
    handleEventInfo(n) { if (!this.dispatcher) {
        F(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, r, s) { if (n in this.eventHandlers || !this.containerManager || !t.MOUSE_SPECIAL_SUPPORT && $.indexOf(n) >= 0)
        return; let o = (E, p, f) => { this.handleEvent(E, p, f); }; this.eventHandlers[n] = o; let c = W(r || n); if (c !== n) {
        let E = this.browserEventTypeToExtraEventTypes[c] || [];
        E.push(n), this.browserEventTypeToExtraEventTypes[c] = E;
    } this.containerManager.addEventListener(c, E => p => { o(n, p, E); }, s); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), G(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let r = 0; r < n.length; r++) {
        let s = n[r], o = this.getEventTypesForBrowserEventType(s.eventType);
        for (let c = 0; c < o.length; c++) {
            let E = Y(s);
            A(E, o[c]), this.handleEventInfo(E);
        }
    } }
    getEventTypesForBrowserEventType(n) { let r = []; return this.eventHandlers[n] && r.push(n), this.browserEventTypeToExtraEventTypes[n] && r.push(...this.browserEventTypeToExtraEventTypes[n]), r; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, r) { this.ecrd(n, r); }
    ecrd(n, r) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let s = 0; s < this.queuedEventInfos.length; s++)
            this.handleEventInfo(this.queuedEventInfos[s]);
        this.queuedEventInfos = null;
    } }
} return t; })();
function we(t, e, n, r, s = window) { let o = ye(t); s._ejsas || (s._ejsas = {}), s._ejsas[e] = o, N(o, n), N(o, r, !0); }
function De(t, e = window) { return Pe(e._ejsas?.[t]); }
function ke(t, e, n, r = window) { me(r._ejsas?.[e], n); }
function be(t, e = window) { G(e._ejsas?.[t]); }
function Ve(t, e = window) { e._ejsas && (e._ejsas[t] = void 0); }
export { y as a, Ie as b, L as c, Ue as d, m as e, O as f, Te as g, C as h, _e as i, Le as j, we as k, De as l, ke as m, be as n, Ve as o }; /*! Bundled license information:

@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
