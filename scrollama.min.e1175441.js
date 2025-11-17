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
})({"scripts/scrollama.min.js":[function(require,module,exports) {
var define;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).scrollama = t();
}(this, function () {
  "use strict";

  function k(_ref) {
    var e = _ref.id,
        t = _ref.step,
        o = _ref.marginTop;
    return function (t) {
      var _t = t,
          n = _t.index,
          t = _t.height,
          n = "scrollama__debug-step--".concat(e, "-").concat(n);
      var r = document.querySelector(".".concat(n));
      r = r || function (e) {
        var t = document.createElement("div");
        t.className = "scrollama__debug-step ".concat(e), t.style.position = "fixed", t.style.left = "0", t.style.width = "100%", t.style.zIndex = "9999", t.style.borderTop = "2px solid black", t.style.borderBottom = "2px solid black";
        var o = document.createElement("p");
        return o.style.position = "absolute", o.style.left = "0", o.style.height = "1px", o.style.width = "100%", o.style.borderTop = "1px dashed black", t.appendChild(o), document.body.appendChild(t), t;
      }(n), r.style.top = "".concat(-1 * o, "px"), r.style.height = "".concat(t, "px"), r.querySelector("p").style.top = "".concat(t / 2, "px");
    }(t);
  }

  function M(e) {
    console.error("scrollama error: ".concat(e));
  }

  function q(e) {
    return +e.getAttribute("data-scrollama-index");
  }

  function O(e) {
    if ("string" == typeof e && 0 < e.indexOf("px")) {
      var t = +e.replace("px", "");
      return isNaN(t) ? (err("offset value must be in 'px' format. Fallback to 0.5."), {
        format: "percent",
        value: .5
      }) : {
        format: "pixels",
        value: t
      };
    }

    return "number" != typeof e && isNaN(+e) ? null : (1 < e && err("offset value is greater than 1. Fallback to 1."), e < 0 && err("offset value is lower than 0. Fallback to 0."), {
      format: "percent",
      value: Math.min(Math.max(0, e), 1)
    });
  }

  var A, N, T;

  function z(e) {
    e = e ? e.scrollTop : window.pageYOffset;
    A !== e && (A = e, A > N ? T = "down" : A < N && (T = "up"), N = A);
  }

  return function () {
    var r = {},
        i = function () {
      var t = "abcdefghijklmnopqrstuvwxyz",
          e = Date.now();
      var o = [];

      for (var _e2 = 0; _e2 < 6; _e2 += 1) {
        var n = t[Math.floor(Math.random() * t.length)];
        o.push(n);
      }

      return "".concat(o.join("")).concat(e);
    }(),
        f = [],
        p,
        u,
        d,
        h = 0,
        t = !1,
        g = !1,
        m = !1,
        v = !1,
        n = [];

    function x() {
      r = {
        stepEnter: function stepEnter() {},
        stepExit: function stepExit() {},
        stepProgress: function stepProgress() {}
      }, n = [];
    }

    function b(e) {
      e && !t && $(), !e && t && y(), t = e;
    }

    function s(e, t) {
      var o = q(e);
      var n = f[o];
      void 0 !== t && (n.progress = t);
      t = {
        element: e,
        index: o,
        progress: t,
        direction: T
      };
      "enter" === n.state && r.stepProgress(t);
    }

    function o(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          e = _ref3[0];

      var t = q(e.target);
      var o = f[t];
      e = e.target.offsetHeight;
      e !== o.height && (o.height = e, l(o), w(o), E(o));
    }

    function a(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
          e = _ref5[0];

      return function (e) {
        z(u);
        var _e3 = e,
            t = _e3.isIntersecting,
            e = _e3.target;
        (t ? function (e) {
          var t = q(e);
          var o = f[t];
          e = {
            element: e,
            index: t,
            direction: T
          }, o.direction = T, o.state = "enter", n[t] || r.stepEnter(e), v && (n[t] = !0);
        } : function (e) {
          var t = q(e);
          var o = f[t];
          o.state && (t = {
            element: e,
            index: t,
            direction: T
          }, g && ("down" === T && o.progress < 1 ? s(e, 1) : "up" === T && 0 < o.progress && s(e, 0)), o.direction = T, o.state = "exit", r.stepExit(t));
        })(e);
      }(e);
    }

    function c(_ref6) {
      var _ref7 = _slicedToArray(_ref6, 1),
          e = _ref7[0];

      return function (e) {
        var t = q(e.target),
            o = f[t],
            _e4 = e,
            n = _e4.isIntersecting,
            t = _e4.intersectionRatio,
            e = _e4.target;
        n && "enter" === o.state && s(e, t);
      }(e);
    }

    function l(_ref8) {
      var t = _ref8.observers;
      Object.keys(t).map(function (e) {
        t[e].disconnect();
      });
    }

    function y() {
      f.forEach(l);
    }

    function E(e) {
      var t = new ResizeObserver(o);
      t.observe(e.node), e.observers.resize = t;
    }

    function w(e) {
      var t = window.innerHeight,
          o = e.offset || p,
          n = "pixels" === o.format ? 1 : t,
          r = o.value * n,
          o = e.height / 2 - r,
          n = e.height / 2 - (t - r),
          t = "".concat(o, "px 0px ").concat(n, "px 0px"),
          r = d;
      var s = new IntersectionObserver(a, {
        rootMargin: t,
        threshold: .5,
        root: r
      });
      s.observe(e.node), e.observers.step = s, m && k({
        id: i,
        step: e,
        marginTop: o,
        marginBottom: n
      });
    }

    function e(e) {
      var t = window.innerHeight,
          o = e.offset || p,
          n = "pixels" === o.format ? 1 : t,
          n = o.value * n,
          n = "".concat(-n + e.height, "px 0px ").concat(n - t, "px 0px"),
          t = function (e, t) {
        var o = Math.ceil(e / t);
        var n = [];
        var r = 1 / o;

        for (var _e6 = 0; _e6 < o + 1; _e6 += 1) n.push(_e6 * r);

        return n;
      }(e.height, h);

      var r = new IntersectionObserver(c, {
        rootMargin: n,
        threshold: t
      });
      r.observe(e.node), e.observers.progress = r;
    }

    function $() {
      y(), f.forEach(E), f.forEach(w), g && f.forEach(e);
    }

    var S = {};
    return S.setup = function (_ref9) {
      var _ref10, _ref10$;

      var e = _ref9.step,
          t = _ref9.parent,
          _ref9$offset = _ref9.offset,
          o = _ref9$offset === void 0 ? .5 : _ref9$offset,
          _ref9$threshold = _ref9.threshold,
          n = _ref9$threshold === void 0 ? 4 : _ref9$threshold,
          _ref9$progress = _ref9.progress,
          r = _ref9$progress === void 0 ? !1 : _ref9$progress,
          _ref9$once = _ref9.once,
          s = _ref9$once === void 0 ? !1 : _ref9$once,
          _ref9$debug = _ref9.debug,
          i = _ref9$debug === void 0 ? !1 : _ref9$debug,
          _ref9$container = _ref9.container,
          a = _ref9$container === void 0 ? void 0 : _ref9$container,
          _ref9$root = _ref9.root,
          c = _ref9$root === void 0 ? null : _ref9$root;
      var l;
      return l = a, A = 0, N = 0, document.addEventListener("scroll", function () {
        return z(l);
      }), f = ((_ref10 = [e, t], e = _ref10[0], _ref10$ = _ref10[1], t = _ref10$ === void 0 ? document : _ref10$), ("string" == typeof e ? Array.from(t.querySelectorAll(e)) : e instanceof Element ? [e] : e instanceof NodeList ? Array.from(e) : e instanceof Array ? e : []).map(function (e, t) {
        return {
          index: t,
          direction: void 0,
          height: e.offsetHeight,
          node: e,
          observers: {},
          offset: O(e.dataset.offset),
          top: function (e) {
            var _e$getBoundingClientR = e.getBoundingClientRect(),
                e = _e$getBoundingClientR.top;

            return e + window.pageYOffset - (document.body.clientTop || 0);
          }(e),
          progress: 0,
          state: void 0
        };
      })), f.length ? (g = r, v = s, m = i, h = Math.max(1, +n), p = O(o), u = a, d = c, x(), f.forEach(function (e) {
        return e.node.setAttribute("data-scrollama-index", e.index);
      }), b(!0)) : M("no step elements"), S;
    }, S.enable = function () {
      return b(!0), S;
    }, S.disable = function () {
      return b(!1), S;
    }, S.destroy = function () {
      return b(!1), x(), S;
    }, S.resize = function () {
      return $(), S;
    }, S.offset = function (e) {
      return null == e ? p.value : (p = O(e), $(), S);
    }, S.onStepEnter = function (e) {
      return "function" == typeof e ? r.stepEnter = e : M("onStepEnter requires a function"), S;
    }, S.onStepExit = function (e) {
      return "function" == typeof e ? r.stepExit = e : M("onStepExit requires a function"), S;
    }, S.onStepProgress = function (e) {
      return "function" == typeof e ? r.stepProgress = e : M("onStepProgress requires a function"), S;
    }, S;
  };
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50213" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/scrollama.min.js"], "script")
//# sourceMappingURL=/scrollama.min.e1175441.js.map