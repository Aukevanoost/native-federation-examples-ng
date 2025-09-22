import "@nf-internal/chunk-4CLCTAJ7";
import * as c from "@angular/core";
import { Version as E, Injector as O, Compiler as p, ViewEncapsulation as R, createPlatformFactory as y, COMPILER_OPTIONS as l, CompilerFactory as I } from "@angular/core";
import { CompilerConfig as d, ResourceLoader as m } from "@angular/compiler";
import { platformBrowser as h } from "@angular/platform-browser";
var L = new E("20.1.0"), _ = [{ provide: p, useFactory: () => new p }], u = class {
    _defaultOptions;
    constructor(t) { let r = { defaultEncapsulation: R.Emulated }; this._defaultOptions = [r, ...t]; }
    createCompiler(t = []) { let r = w(this._defaultOptions.concat(t)); return O.create({ providers: [_, { provide: d, useFactory: () => new d({ defaultEncapsulation: r.defaultEncapsulation, preserveWhitespaces: r.preserveWhitespaces }), deps: [] }, r.providers] }).get(p); }
};
function w(e) { return { defaultEncapsulation: f(e.map(t => t.defaultEncapsulation)), providers: C(e.map(t => t.providers)), preserveWhitespaces: f(e.map(t => t.preserveWhitespaces)) }; }
function f(e) {
    for (let t = e.length - 1; t >= 0; t--)
        if (e[t] !== void 0)
            return e[t];
}
function C(e) { let t = []; return e.forEach(r => r && t.push(...r)), t; }
var F = (() => {
    class e extends m {
        get(r) { let i, s, v = new Promise((a, n) => { i = a, s = n; }), o = new XMLHttpRequest; return o.open("GET", r, !0), o.responseType = "text", o.onload = function () { let a = o.response, n = o.status; n === 0 && (n = a ? 200 : 0), 200 <= n && n <= 300 ? i(a) : s(`Failed to load ${r}`); }, o.onerror = function () { s(`Failed to load ${r}`); }, o.send(), v; }
        static ɵfac = (() => { let r; return function (s) { return (r || (r = c.ɵɵgetInheritedFactory(e)))(s || e); }; })();
        static ɵprov = c.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
    }
    return e;
})(), D = [{ provide: l, useValue: { providers: [{ provide: m, useClass: F, deps: [] }] }, multi: !0 }, { provide: I, useClass: u, deps: [l] }], V = y(h, "browserDynamic", D);
export { u as JitCompilerFactory, L as VERSION, V as platformBrowserDynamic }; /*! Bundled license information:

@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
