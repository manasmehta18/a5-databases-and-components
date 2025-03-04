// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/js/aos.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' ? module.exports = t() : typeof define === 'function' && define.amd ? define([], t) : (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' ? exports.AOS = t() : e.AOS = t();
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = 'dist/', t(0);
  }([function (e, t, n) {
    'use strict';

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }

      return e;
    };

    var r = n(1);
    var a = (o(r), n(6));
    var u = o(a);
    var c = n(7);
    var s = o(c);
    var f = n(8);
    var d = o(f);
    var l = n(9);
    var p = o(l);
    var m = n(10);
    var b = o(m);
    var v = n(11);
    var y = o(v);
    var g = n(14);
    var h = o(g);
    var w = [];
    var k = !1;
    var x = {
      offset: 120,
      delay: 0,
      easing: 'ease',
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: 'DOMContentLoaded',
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    };

    var j = function j() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
    };

    var O = function O() {
      w = (0, h.default)(), j();
    };

    var M = function M() {
      w.forEach(function (e, t) {
        e.node.removeAttribute('data-aos'), e.node.removeAttribute('data-aos-easing'), e.node.removeAttribute('data-aos-duration'), e.node.removeAttribute('data-aos-delay');
      });
    };

    var S = function S(e) {
      return e === !0 || e === 'mobile' && p.default.mobile() || e === 'phone' && p.default.phone() || e === 'tablet' && p.default.tablet() || typeof e === 'function' && e() === !0;
    };

    var _ = function _(e) {
      x = i(x, e), w = (0, h.default)();
      var t = document.all && !window.atob;
      return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector('body').setAttribute('data-aos-easing', x.easing), document.querySelector('body').setAttribute('data-aos-duration', x.duration), document.querySelector('body').setAttribute('data-aos-delay', x.delay), x.startEvent === 'DOMContentLoaded' && ['complete', 'interactive'].indexOf(document.readyState) > -1 ? j(!0) : x.startEvent === 'load' ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener('resize', (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener('orientationchange', (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener('scroll', (0, u.default)(function () {
        (0, b.default)(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d.default.ready('[data-aos]', O), w);
    };

    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      'use strict';

      function n(e, t, n) {
        function o(t) {
          var n = b;
          var o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }

        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }

        function a(e) {
          var n = e - w;
          var o = e - k;
          var i = t - n;
          return S ? j(i, y - o) : i;
        }

        function c(e) {
          var n = e - w;
          var o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(O());
        }

        function m() {
          var e = O();
          var n = c(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b;
        var v;
        var y;
        var g;
        var h;
        var w;
        var k = 0;
        var M = !1;
        var S = !1;

        var _ = !0;

        if (typeof e !== 'function') throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = 'maxWait' in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = 'trailing' in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e, t, o) {
        var r = !0;
        var a = !0;
        if (typeof e !== 'function') throw new TypeError(s);
        return i(o) && (r = 'leading' in o ? !!o.leading : r, a = 'trailing' in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }

      function i(e) {
        var t = typeof e === 'undefined' ? 'undefined' : c(e);
        return !!e && (t == 'object' || t == 'function');
      }

      function r(e) {
        return !!e && (typeof e === 'undefined' ? 'undefined' : c(e)) == 'object';
      }

      function a(e) {
        return (typeof e === 'undefined' ? 'undefined' : c(e)) == 'symbol' || r(e) && k.call(e) == d;
      }

      function u(e) {
        if (typeof e === 'number') return e;
        if (a(e)) return f;

        if (i(e)) {
          var t = typeof e.valueOf === 'function' ? e.valueOf() : e;
          e = i(t) ? t + '' : t;
        }

        if (typeof e !== 'string') return e === 0 ? e : +e;
        e = e.replace(l, '');
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }

      var c = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : _typeof(e);
      };
      var s = 'Expected a function';
      var f = NaN;
      var d = '[object Symbol]';
      var l = /^\s+|\s+$/g;
      var p = /^[-+]0x[0-9a-f]+$/i;
      var m = /^0b[01]+$/i;
      var b = /^0o[0-7]+$/i;
      var v = parseInt;
      var y = (typeof t === 'undefined' ? 'undefined' : c(t)) == 'object' && t && t.Object === Object && t;
      var g = (typeof self === 'undefined' ? 'undefined' : c(self)) == 'object' && self && self.Object === Object && self;
      var h = y || g || Function('return this')();
      var w = Object.prototype;
      var k = w.toString;
      var x = Math.max;
      var j = Math.min;

      var O = function O() {
        return h.Date.now();
      };

      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      'use strict';

      function n(e, t, n) {
        function i(t) {
          var n = b;
          var o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }

        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }

        function u(e) {
          var n = e - w;
          var o = e - O;
          var i = t - n;
          return S ? x(i, y - o) : i;
        }

        function s(e) {
          var n = e - w;
          var o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = j();
          return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(j());
        }

        function m() {
          var e = j();
          var n = s(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b;
        var v;
        var y;
        var g;
        var h;
        var w;
        var O = 0;
        var M = !1;
        var S = !1;

        var _ = !0;

        if (typeof e !== 'function') throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = 'maxWait' in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = 'trailing' in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e) {
        var t = typeof e === 'undefined' ? 'undefined' : u(e);
        return !!e && (t == 'object' || t == 'function');
      }

      function i(e) {
        return !!e && (typeof e === 'undefined' ? 'undefined' : u(e)) == 'object';
      }

      function r(e) {
        return (typeof e === 'undefined' ? 'undefined' : u(e)) == 'symbol' || i(e) && w.call(e) == f;
      }

      function a(e) {
        if (typeof e === 'number') return e;
        if (r(e)) return s;

        if (o(e)) {
          var t = typeof e.valueOf === 'function' ? e.valueOf() : e;
          e = o(t) ? t + '' : t;
        }

        if (typeof e !== 'string') return e === 0 ? e : +e;
        e = e.replace(d, '');
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }

      var u = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : _typeof(e);
      };
      var c = 'Expected a function';
      var s = NaN;
      var f = '[object Symbol]';
      var d = /^\s+|\s+$/g;
      var l = /^[-+]0x[0-9a-f]+$/i;
      var p = /^0b[01]+$/i;
      var m = /^0o[0-7]+$/i;
      var b = parseInt;
      var v = (typeof t === 'undefined' ? 'undefined' : u(t)) == 'object' && t && t.Object === Object && t;
      var y = (typeof self === 'undefined' ? 'undefined' : u(self)) == 'object' && self && self.Object === Object && self;
      var g = v || y || Function('return this')();
      var h = Object.prototype;
      var w = h.toString;
      var k = Math.max;
      var x = Math.min;

      var j = function j() {
        return g.Date.now();
      };

      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    'use strict';

    function n(e) {
      var t = void 0;
      var o = void 0;
      var i = void 0;

      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }

      return !1;
    }

    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function i() {
      return !!o();
    }

    function r(e, t) {
      var n = window.document;
      var i = o();
      var r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }

    function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes);
        var o = Array.prototype.slice.call(e.removedNodes);
        var i = t.concat(o);
        if (n(i)) return u();
      });
    }

    Object.defineProperty(t, '__esModule', {
      value: !0
    });

    var u = function u() {};

    t.default = {
      isSupported: i,
      ready: r
    };
  }, function (e, t) {
    'use strict';

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || '';
    }

    Object.defineProperty(t, '__esModule', {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }();

    var r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
    var a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    var u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
    var c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

    var s = function () {
      function e() {
        n(this, e);
      }

      return i(e, [{
        key: 'phone',
        value: function value() {
          var e = o();
          return !(!r.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: 'mobile',
        value: function value() {
          var e = o();
          return !(!u.test(e) && !c.test(e.substr(0, 4)));
        }
      }, {
        key: 'tablet',
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t.default = new s();
  }, function (e, t) {
    'use strict';

    Object.defineProperty(t, '__esModule', {
      value: !0
    });

    var n = function n(e, t, _n) {
      var o = e.node.getAttribute('data-aos-once');
      t > e.position ? e.node.classList.add('aos-animate') : typeof o !== 'undefined' && (o === 'false' || !_n && o !== 'true') && e.node.classList.remove('aos-animate');
    };

    var o = function o(e, t) {
      var o = window.pageYOffset;
      var i = window.innerHeight;
      e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };

    t.default = o;
  }, function (e, t, n) {
    'use strict';

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var i = n(12);
    var r = o(i);

    var a = function a(e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add('aos-init'), e.position = (0, r.default)(e.node, t.offset);
      }), e;
    };

    t.default = a;
  }, function (e, t, n) {
    'use strict';

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var i = n(13);
    var r = o(i);

    var a = function a(e, t) {
      var n = 0;
      var o = 0;
      var i = window.innerHeight;
      var a = {
        offset: e.getAttribute('data-aos-offset'),
        anchor: e.getAttribute('data-aos-anchor'),
        anchorPlacement: e.getAttribute('data-aos-anchor-placement')
      };

      switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
        case 'top-bottom':
          break;

        case 'center-bottom':
          n += e.offsetHeight / 2;
          break;

        case 'bottom-bottom':
          n += e.offsetHeight;
          break;

        case 'top-center':
          n += i / 2;
          break;

        case 'bottom-center':
          n += i / 2 + e.offsetHeight;
          break;

        case 'center-center':
          n += i / 2 + e.offsetHeight / 2;
          break;

        case 'top-top':
          n += i;
          break;

        case 'bottom-top':
          n += e.offsetHeight + i;
          break;

        case 'center-top':
          n += e.offsetHeight / 2 + i;
      }

      return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };

    t.default = a;
  }, function (e, t) {
    'use strict';

    Object.defineProperty(t, '__esModule', {
      value: !0
    });

    var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - (e.tagName != 'BODY' ? e.scrollLeft : 0), n += e.offsetTop - (e.tagName != 'BODY' ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: n,
        left: t
      };
    };

    t.default = n;
  }, function (e, t) {
    'use strict';

    Object.defineProperty(t, '__esModule', {
      value: !0
    });

    var n = function n(e) {
      return e = e || document.querySelectorAll('[data-aos]'), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };

    t.default = n;
  }]);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56632" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/js/aos.js"], null)
//# sourceMappingURL=/aos.85ceb95f.js.map