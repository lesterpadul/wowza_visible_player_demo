! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.noplayer = t() : e.noplayer = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "<%=baseUrl%>/", t(0)
    }(function(e) {
        for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
                case "function":
                    break;
                case "object":
                    e[t] = function(t) {
                        var n = t.slice(1),
                            i = e[t[0]];
                        return function(e, t, r) {
                            i.apply(this, [e, t, r].concat(n))
                        }
                    }(e[t]);
                    break;
                default:
                    e[t] = e[e[t]]
            }
        return e
    }([function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(4),
                u = n(10),
                c = i(u),
                f = n(3),
                h = i(f),
                d = n(23),
                v = i(d),
                p = n(96),
                g = i(p),
                y = n(5),
                m = i(y),
                E = n(97),
                b = i(E),
                k = n(101),
                _ = i(k),
                A = n(29),
                T = (0, l.currentScriptUrl)().replace(/\/[^\/]+$/, ""),
                L = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
                        var n = {
                            playerId: (0, l.uniqueId)(""),
                            persistConfig: !0,
                            width: 640,
                            height: 360,
                            baseUrl: T
                        };
                        this.options = $.extend(n, e), this.options.sources = this.normalizeSources(e), this.loader = new b["default"](this.options.plugins || {}, this.options.playerId), this.registerOptionEventListeners(), this.playerInfo = v["default"].getInstance(this.options.playerId), this.playerInfo.currentSize = {
                            width: e.width,
                            height: e.height
                        }, this.playerInfo.options = this.options, this.coreFactory = new g["default"](this), this.options.parentId ? this.setParentId(this.options.parentId) : this.options.parent && this.attachTo(this.options.parent)
                    }
                    return a(t, e), o(t, [{
                        key: "loader",
                        set: function(e) {
                            this._loader = e
                        },
                        get: function() {
                            return this._loader = this._loader || new b["default"](this.options.plugins || {}, this.options.playerId)
                        }
                    }]), o(t, [{
                        key: "setParentId",
                        value: function(e) {
                            var t = document.querySelector(e);
                            t && this.attachTo(t)
                        }
                    }, {
                        key: "attachTo",
                        value: function(e) {
                            var t = new _["default"];
                            (this.options.parentElement = e, this.core = this.coreFactory.create(), this.addEventListeners())
                        }
                    }, {
                        key: "isReady",
                        value: function() {
                            return !!this.ready
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            this.core.isReady() ? this.onReady() : this.listenToOnce(this.core, h["default"].CORE_READY, this.onReady), this.listenTo(this.core.mediaControl, h["default"].MEDIACONTROL_CONTAINERCHANGED, this.containerChanged)
                        }
                    }, {
                        key: "addContainerEventListeners",
                        value: function() {
                            var e = this.core.mediaControl.container;
                            e && (this.listenTo(e, h["default"].CONTAINER_PLAY, this.onPlay), this.listenTo(e, h["default"].CONTAINER_PAUSE, this.onPause), this.listenTo(e, h["default"].CONTAINER_STOP, this.onStop), this.listenTo(e, h["default"].CONTAINER_ENDED, this.onEnded), this.listenTo(e, h["default"].CONTAINER_SEEK, this.onSeek), this.listenTo(e, h["default"].CONTAINER_ERROR, this.onError), this.listenTo(e, h["default"].CONTAINER_TIMEUPDATE, this.onTimeUpdate), this.listenTo(e, h["default"].CONTAINER_VOLUME, this.onVolumeUpdate))
                        }
                    }, {
                        key: "registerOptionEventListeners",
                        value: function() {
                            var e = this,
                                t = {
                                    onReady: h["default"].PLAYER_READY,
                                    onResize: h["default"].PLAYER_RESIZE,
                                    onPlay: h["default"].PLAYER_PLAY,
                                    onPause: h["default"].PLAYER_PAUSE,
                                    onStop: h["default"].PLAYER_STOP,
                                    onEnded: h["default"].PLAYER_ENDED,
                                    onSeek: h["default"].PLAYER_SEEK,
                                    onError: h["default"].PLAYBACK_ERROR,
                                    onTimeUpdate: h["default"].PLAYER_TIMEUPDATE,
                                    onVolumeUpdate: h["default"].PLAYER_VOLUMEUPDATE
                                },
                                n = this.options.events || {};
                            Object.keys(n).forEach(function(i) {
                                var r = t[i];
                                if (r) {
                                    var a = n[i];
                                    a = "function" == typeof a && a, a && e.listenTo(e, r, a)
                                }
                            })
                        }
                    }, {
                        key: "containerChanged",
                        value: function() {
                            this.stopListening(), this.addEventListeners()
                        }
                    }, {
                        key: "onReady",
                        value: function() {
                            this.ready = !0, this.addContainerEventListeners(), this.trigger(h["default"].PLAYER_READY)
                        }
                    }, {
                        key: "onVolumeUpdate",
                        value: function(e) {
                            this.trigger(h["default"].PLAYER_VOLUMEUPDATE, e)
                        }
                    }, {
                        key: "onPlay",
                        value: function() {
                            this.trigger(h["default"].PLAYER_PLAY)
                        }
                    }, {
                        key: "onPause",
                        value: function() {
                            this.trigger(h["default"].PLAYER_PAUSE, this.getCurrentTime())
                        }
                    }, {
                        key: "onStop",
                        value: function() {
                            this.trigger(h["default"].PLAYER_STOP, this.getCurrentTime())
                        }
                    }, {
                        key: "onEnded",
                        value: function() {
                            this.trigger(h["default"].PLAYER_ENDED)
                        }
                    }, {
                        key: "onSeek",
                        value: function(e) {
                            this.trigger(h["default"].PLAYER_SEEK, e)
                        }
                    }, {
                        key: "onTimeUpdate",
                        value: function(e) {
                            this.trigger(h["default"].PLAYER_TIMEUPDATE, e)
                        }
                    }, {
                        key: "onError",
                        value: function(e) {
                            this.trigger(h["default"].PLAYBACK_ERROR, e)
                        }
                    }, {
                        key: "is",
                        value: function(e, t) {
                            return e.constructor === t
                        }
                    }, {
                        key: "normalizeSources",
                        value: function(e) {
                            var t = e.sources || (void 0 !== e.source ? [e.source] : []);
                            return 0 === t.length ? [{
                                source: "",
                                mimeType: ""
                            }] : t
                        }
                    }, {
                        key: "resize",
                        value: function(e) {
                            this.core.resize(e)
                        }
                    }, {
                        key: "load",
                        value: function(e, t) {}
                    }, {
                        key: "destroy",
                        value: function() {
                            this.core.destroy()
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.core.mediaControl.container.play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.core.mediaControl.container.pause()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.core.mediaControl.container.stop()
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            this.core.mediaControl.container.seek(e)
                        }
                    }, {
                        key: "seekPercentage",
                        value: function(e) {
                            this.core.mediaControl.container.seekPercentage(e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.core.mediaControl.container.setVolume(e)
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.core.mediaControl.container.volume
                        }
                    }, {
                        key: "mute",
                        value: function() {
                            this.core.mediaControl.container.setVolume(0)
                        }
                    }, {
                        key: "unmute",
                        value: function() {
                            this.core.mediaControl.container.setVolume(100)
                        }
                    }, {
                        key: "isPlaying",
                        value: function() {
                            return this.core.mediaControl.container.isPlaying()
                        }
                    }, {
                        key: "configure",
                        value: function(e) {
                            this.core.configure(e)
                        }
                    }, {
                        key: "getPlugin",
                        value: function(e) {
                            var t = this.core.plugins.concat(this.core.mediaControl.container.plugins);
                            return find(t, function(t) {
                                return t.name === e
                            })
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.core.mediaControl.container.getCurrentTime()
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.core.mediaControl.container.getDuration()
                        }
                    }, {
                        key: "isSupported",
                        value: function() {
                            return A.isSupported()
                        }
                    }, {
                        key: "canPlay",
                        value: function(e, t) {
                            var n = e.split("?")[0].match(/.*\.(.*)$/) || [],
                                i = n.length > 1 && "m3u8" === n[1] || "application/x-mpegURL" === t || "application/vnd.apple.mpegurl" === t;
                            return !(!hls.isSupported() || !i || m["default"].isSafari)
                        }
                    }]), t
                }(c["default"]);
            t["default"] = L, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            ! function(n, i) {
                e.exports = t = i()
            }(void 0, function() {
                var e = e || function(e, t) {
                    var n = {},
                        i = n.lib = {},
                        r = i.Base = function() {
                            function e() {}
                            return {
                                extend: function(t) {
                                    e.prototype = this;
                                    var n = new e;
                                    return t && n.mixIn(t), n.hasOwnProperty("init") || (n.init = function() {
                                        n.$super.init.apply(this, arguments)
                                    }), n.init.prototype = n, n.$super = this, n
                                },
                                create: function() {
                                    var e = this.extend();
                                    return e.init.apply(e, arguments), e
                                },
                                init: function() {},
                                mixIn: function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                                },
                                clone: function() {
                                    return this.init.prototype.extend(this)
                                }
                            }
                        }(),
                        a = i.WordArray = r.extend({
                            init: function(e, n) {
                                e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                            },
                            toString: function(e) {
                                return (e || s).stringify(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    n = e.words,
                                    i = this.sigBytes,
                                    r = e.sigBytes;
                                if (this.clamp(), i % 4)
                                    for (var a = 0; r > a; a++) {
                                        var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                        t[i + a >>> 2] |= o << 24 - (i + a) % 4 * 8
                                    } else
                                        for (var a = 0; r > a; a += 4) t[i + a >>> 2] = n[a >>> 2];
                                return this.sigBytes += r, this
                            },
                            clamp: function() {
                                var t = this.words,
                                    n = this.sigBytes;
                                t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                            },
                            clone: function h() {
                                var h = r.clone.call(this);
                                return h.words = this.words.slice(0), h
                            },
                            random: function(t) {
                                for (var n, i = [], r = function(t) {
                                        var t = t,
                                            n = 987654321,
                                            i = 4294967295;
                                        return function() {
                                            n = 36969 * (65535 & n) + (n >> 16) & i, t = 18e3 * (65535 & t) + (t >> 16) & i;
                                            var r = (n << 16) + t & i;
                                            return r /= 4294967296, r += .5, r * (e.random() > .5 ? 1 : -1)
                                        }
                                    }, o = 0; t > o; o += 4) {
                                    var s = r(4294967296 * (n || e.random()));
                                    n = 987654071 * s(), i.push(4294967296 * s() | 0)
                                }
                                return new a.init(i, t)
                            }
                        }),
                        o = n.enc = {},
                        s = o.Hex = {
                            stringify: function(e) {
                                for (var t = e.words, n = e.sigBytes, i = [], r = 0; n > r; r++) {
                                    var a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                    i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16))
                                }
                                return i.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], i = 0; t > i; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return new a.init(n, t / 2)
                            }
                        },
                        l = o.Latin1 = {
                            stringify: function(e) {
                                for (var t = e.words, n = e.sigBytes, i = [], r = 0; n > r; r++) {
                                    var a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                    i.push(String.fromCharCode(a))
                                }
                                return i.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], i = 0; t > i; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                                return new a.init(n, t)
                            }
                        },
                        u = o.Utf8 = {
                            stringify: function(e) {
                                try {
                                    return decodeURIComponent(escape(l.stringify(e)))
                                } catch (t) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(e) {
                                return l.parse(unescape(encodeURIComponent(e)))
                            }
                        },
                        c = i.BufferedBlockAlgorithm = r.extend({
                            reset: function() {
                                this._data = new a.init, this._nDataBytes = 0
                            },
                            _append: function(e) {
                                "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                            },
                            _process: function(t) {
                                var n = this._data,
                                    i = n.words,
                                    r = n.sigBytes,
                                    o = this.blockSize,
                                    s = 4 * o,
                                    l = r / s;
                                l = t ? e.ceil(l) : e.max((0 | l) - this._minBufferSize, 0);
                                var u = l * o,
                                    c = e.min(4 * u, r);
                                if (u) {
                                    for (var f = 0; u > f; f += o) this._doProcessBlock(i, f);
                                    var h = i.splice(0, u);
                                    n.sigBytes -= c
                                }
                                return new a.init(h, c)
                            },
                            clone: function d() {
                                var d = r.clone.call(this);
                                return d._data = this._data.clone(), d
                            },
                            _minBufferSize: 0
                        }),
                        f = (i.Hasher = c.extend({
                            cfg: r.extend(),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e), this.reset()
                            },
                            reset: function() {
                                c.reset.call(this), this._doReset()
                            },
                            update: function(e) {
                                return this._append(e), this._process(), this
                            },
                            finalize: function(e) {
                                e && this._append(e);
                                var t = this._doFinalize();
                                return t
                            },
                            blockSize: 16,
                            _createHelper: function(e) {
                                return function(t, n) {
                                    return new e.init(n).finalize(t)
                                }
                            },
                            _createHmacHelper: function(e) {
                                return function(t, n) {
                                    return new f.HMAC.init(e, n).finalize(t)
                                }
                            }
                        }), n.algo = {});
                    return n
                }(Math);
                return e
            })
        }, function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                e.lib.Cipher || function(t) {
                    var n = e,
                        i = n.lib,
                        r = i.Base,
                        a = i.WordArray,
                        o = i.BufferedBlockAlgorithm,
                        s = n.enc,
                        l = (s.Utf8, s.Base64),
                        u = n.algo,
                        c = u.EvpKDF,
                        f = i.Cipher = o.extend({
                            cfg: r.extend(),
                            createEncryptor: function(e, t) {
                                return this.create(this._ENC_XFORM_MODE, e, t)
                            },
                            createDecryptor: function(e, t) {
                                return this.create(this._DEC_XFORM_MODE, e, t)
                            },
                            init: function(e, t, n) {
                                this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset()
                            },
                            reset: function() {
                                o.reset.call(this), this._doReset()
                            },
                            process: function(e) {
                                return this._append(e), this._process()
                            },
                            finalize: function(e) {
                                e && this._append(e);
                                var t = this._doFinalize();
                                return t
                            },
                            keySize: 4,
                            ivSize: 4,
                            _ENC_XFORM_MODE: 1,
                            _DEC_XFORM_MODE: 2,
                            _createHelper: function() {
                                function e(e) {
                                    return "string" == typeof e ? A : b
                                }
                                return function(t) {
                                    return {
                                        encrypt: function(n, i, r) {
                                            return e(i).encrypt(t, n, i, r)
                                        },
                                        decrypt: function(n, i, r) {
                                            return e(i).decrypt(t, n, i, r)
                                        }
                                    }
                                }
                            }()
                        }),
                        h = (i.StreamCipher = f.extend({
                            _doFinalize: function() {
                                var e = this._process(!0);
                                return e
                            },
                            blockSize: 1
                        }), n.mode = {}),
                        d = i.BlockCipherMode = r.extend({
                            createEncryptor: function(e, t) {
                                return this.Encryptor.create(e, t)
                            },
                            createDecryptor: function(e, t) {
                                return this.Decryptor.create(e, t)
                            },
                            init: function(e, t) {
                                this._cipher = e, this._iv = t
                            }
                        }),
                        v = h.CBC = function() {
                            function e(e, n, i) {
                                var r = this._iv;
                                if (r) {
                                    var a = r;
                                    this._iv = t
                                } else var a = this._prevBlock;
                                for (var o = 0; i > o; o++) e[n + o] ^= a[o]
                            }
                            var n = d.extend();
                            return n.Encryptor = n.extend({
                                processBlock: function(t, n) {
                                    var i = this._cipher,
                                        r = i.blockSize;
                                    e.call(this, t, n, r), i.encryptBlock(t, n), this._prevBlock = t.slice(n, n + r)
                                }
                            }), n.Decryptor = n.extend({
                                processBlock: function(t, n) {
                                    var i = this._cipher,
                                        r = i.blockSize,
                                        a = t.slice(n, n + r);
                                    i.decryptBlock(t, n), e.call(this, t, n, r), this._prevBlock = a
                                }
                            }), n
                        }(),
                        p = n.pad = {},
                        g = p.Pkcs7 = {
                            pad: function(e, t) {
                                for (var n = 4 * t, i = n - e.sigBytes % n, r = i << 24 | i << 16 | i << 8 | i, o = [], s = 0; i > s; s += 4) o.push(r);
                                var l = a.create(o, i);
                                e.concat(l)
                            },
                            unpad: function(e) {
                                var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                                e.sigBytes -= t
                            }
                        },
                        y = (i.BlockCipher = f.extend({
                            cfg: f.cfg.extend({
                                mode: v,
                                padding: g
                            }),
                            reset: function() {
                                f.reset.call(this);
                                var e = this.cfg,
                                    t = e.iv,
                                    n = e.mode;
                                if (this._xformMode == this._ENC_XFORM_MODE) var i = n.createEncryptor;
                                else {
                                    var i = n.createDecryptor;
                                    this._minBufferSize = 1
                                }
                                this._mode = i.call(n, this, t && t.words)
                            },
                            _doProcessBlock: function(e, t) {
                                this._mode.processBlock(e, t)
                            },
                            _doFinalize: function() {
                                var e = this.cfg.padding;
                                if (this._xformMode == this._ENC_XFORM_MODE) {
                                    e.pad(this._data, this.blockSize);
                                    var t = this._process(!0)
                                } else {
                                    var t = this._process(!0);
                                    e.unpad(t)
                                }
                                return t
                            },
                            blockSize: 4
                        }), i.CipherParams = r.extend({
                            init: function(e) {
                                this.mixIn(e)
                            },
                            toString: function(e) {
                                return (e || this.formatter).stringify(this)
                            }
                        })),
                        m = n.format = {},
                        E = m.OpenSSL = {
                            stringify: function(e) {
                                var t = e.ciphertext,
                                    n = e.salt;
                                if (n) var i = a.create([1398893684, 1701076831]).concat(n).concat(t);
                                else var i = t;
                                return i.toString(l)
                            },
                            parse: function(e) {
                                var t = l.parse(e),
                                    n = t.words;
                                if (1398893684 == n[0] && 1701076831 == n[1]) {
                                    var i = a.create(n.slice(2, 4));
                                    n.splice(0, 4), t.sigBytes -= 16
                                }
                                return y.create({
                                    ciphertext: t,
                                    salt: i
                                })
                            }
                        },
                        b = i.SerializableCipher = r.extend({
                            cfg: r.extend({
                                format: E
                            }),
                            encrypt: function(e, t, n, i) {
                                i = this.cfg.extend(i);
                                var r = e.createEncryptor(n, i),
                                    a = r.finalize(t),
                                    o = r.cfg;
                                return y.create({
                                    ciphertext: a,
                                    key: n,
                                    iv: o.iv,
                                    algorithm: e,
                                    mode: o.mode,
                                    padding: o.padding,
                                    blockSize: e.blockSize,
                                    formatter: i.format
                                })
                            },
                            decrypt: function(e, t, n, i) {
                                i = this.cfg.extend(i), t = this._parse(t, i.format);
                                var r = e.createDecryptor(n, i).finalize(t.ciphertext);
                                return r
                            },
                            _parse: function(e, t) {
                                return "string" == typeof e ? t.parse(e, this) : e
                            }
                        }),
                        k = n.kdf = {},
                        _ = k.OpenSSL = {
                            execute: function(e, t, n, i) {
                                i || (i = a.random(8));
                                var r = c.create({
                                        keySize: t + n
                                    }).compute(e, i),
                                    o = a.create(r.words.slice(t), 4 * n);
                                return r.sigBytes = 4 * t, y.create({
                                    key: r,
                                    iv: o,
                                    salt: i
                                })
                            }
                        },
                        A = i.PasswordBasedCipher = b.extend({
                            cfg: b.cfg.extend({
                                kdf: _
                            }),
                            encrypt: function(e, t, n, i) {
                                i = this.cfg.extend(i);
                                var r = i.kdf.execute(n, e.keySize, e.ivSize);
                                i.iv = r.iv;
                                var a = b.encrypt.call(this, e, t, r.key, i);
                                return a.mixIn(r), a
                            },
                            decrypt: function(e, t, n, i) {
                                i = this.cfg.extend(i), t = this._parse(t, i.format);
                                var r = i.kdf.execute(n, e.keySize, e.ivSize, t.salt);
                                i.iv = r.iv;
                                var a = b.decrypt.call(this, e, t, r.key, i);
                                return a
                            }
                        })
                }()
            })
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = n(114),
                s = i(o),
                l = n(4),
                u = n(65),
                c = i(u),
                f = Array.prototype.slice,
                h = function() {
                    function e() {
                        r(this, e)
                    }
                    return a(e, [{
                        key: "on",
                        value: function(e, t, n) {
                            if (!v(this, "on", e, [t, n]) || !t) return this;
                            this._events || (this._events = {});
                            var i = this._events[e] || (this._events[e] = []);
                            return i.push({
                                callback: t,
                                context: n,
                                ctx: n || this
                            }), this
                        }
                    }, {
                        key: "once",
                        value: function t(e, n, i) {
                            if (!v(this, "once", e, [n, i]) || !n) return this;
                            var r = this,
                                t = (0, c["default"])(function() {
                                    r.off(e, t), n.apply(this, arguments)
                                });
                            return t._callback = n, this.on(e, t, i)
                        }
                    }, {
                        key: "off",
                        value: function(e, t, n) {
                            var i, r, a, o, s, l, u, c;
                            if (!this._events || !v(this, "off", e, [t, n])) return this;
                            if (!e && !t && !n) return this._events = void 0, this;
                            for (o = e ? [e] : Object.keys(this._events), s = 0, l = o.length; l > s; s++)
                                if (e = o[s], a = this._events[e]) {
                                    if (this._events[e] = i = [], t || n)
                                        for (u = 0, c = a.length; c > u; u++) r = a[u], (t && t !== r.callback && t !== r.callback._callback || n && n !== r.context) && i.push(r);
                                    i.length || delete this._events[e]
                                }
                            return this
                        }
                    }, {
                        key: "trigger",
                        value: function(e) {
                            try {
                                var t = this.name || this.constructor.name;
                                if (s["default"].debug.apply(s["default"], [t].concat(Array.prototype.slice.call(arguments))), !this._events) return this;
                                var n = f.call(arguments, 1);
                                if (!v(this, "trigger", e, n)) return this;
                                var i = this._events[e],
                                    r = this._events.all;
                                i && p(i, n), r && p(r, arguments)
                            } catch (a) {
                                s["default"].error.apply(s["default"], [t, "error on event", e, "trigger", "-", a])
                            }
                            return this
                        }
                    }, {
                        key: "stopListening",
                        value: function(e, t, n) {
                            var i = this._listeningTo;
                            if (!i) return this;
                            var r = !t && !n;
                            n || "object" != typeof t || (n = this), e && ((i = {})[e._listenId] = e);
                            for (var a in i) e = i[a], e.off(t, n, this), (r || 0 === Object.keys(e._events).length) && delete this._listeningTo[a];
                            return this
                        }
                    }]), e
                }();
            t["default"] = h;
            var d = /\s+/,
                v = function(e, t, n, i) {
                    if (!n) return !0;
                    if ("object" == typeof n) {
                        for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                        return !1
                    }
                    if (d.test(n)) {
                        for (var a = n.split(d), o = 0, s = a.length; s > o; o++) e[t].apply(e, [a[o]].concat(i));
                        return !1
                    }
                    return !0
                },
                p = function(e, t) {
                    var n, i = -1,
                        r = e.length,
                        a = t[0],
                        o = t[1],
                        s = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx, a);
                            return;
                        case 2:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx, a, o);
                            return;
                        case 3:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx, a, o, s);
                            return;
                        default:
                            for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
                            return
                    }
                },
                g = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            Object.keys(g).forEach(function(e) {
                h.prototype[e] = function(t, n, i) {
                    var r = this._listeningTo || (this._listeningTo = {}),
                        a = t._listenId || (t._listenId = (0, l.uniqueId)("l"));
                    return r[a] = t, i || "object" != typeof n || (i = this), t[g[e]](n, i, this), this
                }
            }), h.PLAYER_READY = "ready", h.PLAYER_RESIZE = "resize", h.PLAYER_PLAY = "play", h.PLAYER_PAUSE = "pause", h.PLAYER_STOP = "stop", h.PLAYER_ENDED = "ended", h.PLAYER_SEEK = "seek", h.PLAYER_ERROR = "error", h.PLAYER_TIMEUPDATE = "timeupdate", h.PLAYER_VOLUMEUPDATE = "volumeupdate", h.PLAYER_LOADEDMETADATA = "loadedmetadata", h.PLAYBACK_PROGRESS = "playback:progress", h.PLAYBACK_TIMEUPDATE = "playback:timeupdate", h.PLAYBACK_READY = "playback:ready", h.PLAYBACK_BUFFERING = "playback:buffering", h.PLAYBACK_BUFFERFULL = "playback:bufferfull", h.PLAYBACK_SETTINGSUPDATE = "playback:settingsupdate", h.PLAYBACK_LOADEDMETADATA = "playback:loadedmetadata", h.PLAYBACK_HIGHDEFINITIONUPDATE = "playback:highdefinitionupdate", h.PLAYBACK_BITRATE = "playback:bitrate", h.PLAYBACK_LEVELS_AVAILABLE = "playback:levels:available", h.PLAYBACK_LEVEL_SWITCH_START = "playback:levels:switch:start", h.PLAYBACK_LEVEL_SWITCH_END = "playback:levels:switch:end", h.PLAYBACK_PLAYBACKSTATE = "playback:playbackstate", h.PLAYBACK_DVR = "playback:dvr", h.PLAYBACK_MEDIACONTROL_DISABLE = "playback:mediacontrol:disable", h.PLAYBACK_MEDIACONTROL_ENABLE = "playback:mediacontrol:enable", h.PLAYBACK_ENDED = "playback:ended", h.PLAYBACK_PLAY = "playback:play", h.PLAYBACK_PAUSE = "playback:pause", h.PLAYBACK_STOP = "playback:stop", h.PLAYBACK_ERROR = "playback:error", h.PLAYBACK_STATS_ADD = "playback:stats:add", h.PLAYBACK_FRAGMENT_LOADED = "playback:fragment:loaded", h.PLAYBACK_FRAGMENT_BUFFERED = "playback:fragment:buffered", h.PLAYBACK_LEVEL_SWITCH = "playback:level:switch", h.CORE_OPTIONS_CHANGE = "core:options:change", h.CORE_READY = "core:ready", h.CONTAINER_PLAYBACKSTATE = "container:playbackstate", h.CONTAINER_PLAYBACKDVRSTATECHANGED = "container:dvr", h.CONTAINER_BITRATE = "container:bitrate", h.CONTAINER_STATS_REPORT = "container:stats:report", h.CONTAINER_DESTROYED = "container:destroyed", h.CONTAINER_READY = "container:ready", h.CONTAINER_ERROR = "container:error", h.CONTAINER_LOADEDMETADATA = "container:loadedmetadata", h.CONTAINER_TIMEUPDATE = "container:timeupdate", h.CONTAINER_PROGRESS = "container:progress", h.CONTAINER_PLAY = "container:play", h.CONTAINER_STOP = "container:stop", h.CONTAINER_PAUSE = "container:pause", h.CONTAINER_ENDED = "container:ended", h.CONTAINER_CLICK = "container:click", h.CONTAINER_DBLCLICK = "container:dblclick", h.CONTAINER_CONTEXTMENU = "container:contextmenu", h.CONTAINER_MOUSE_ENTER = "container:mouseenter", h.CONTAINER_MOUSE_LEAVE = "container:mouseleave", h.CONTAINER_SEEK = "container:seek", h.CONTAINER_VOLUME = "container:volume", h.CONTAINER_FULLSCREEN = "container:fullscreen", h.CONTAINER_STATE_BUFFERING = "container:state:buffering", h.CONTAINER_STATE_BUFFERFULL = "container:state:bufferfull", h.CONTAINER_SETTINGSUPDATE = "container:settingsupdate", h.CONTAINER_HIGHDEFINITIONUPDATE = "container:highdefinitionupdate", h.CONTAINER_MEDIACONTROL_SHOW = "container:mediacontrol:show", h.CONTAINER_MEDIACONTROL_HIDE = "container:mediacontrol:hide", h.CONTAINER_MEDIACONTROL_DISABLE = "container:mediacontrol:disable", h.CONTAINER_MEDIACONTROL_ENABLE = "container:mediacontrol:enable", h.CONTAINER_STATS_ADD = "container:stats:add", h.CONTAINER_OPTIONS_CHANGE = "container:options:change", h.MEDIACONTROL_RENDERED = "mediacontrol:rendered", h.MEDIACONTROL_FULLSCREEN = "mediacontrol:fullscreen", h.MEDIACONTROL_SHOW = "mediacontrol:show", h.MEDIACONTROL_HIDE = "mediacontrol:hide", h.MEDIACONTROL_MOUSEMOVE_SEEKBAR = "mediacontrol:mousemove:seekbar", h.MEDIACONTROL_MOUSELEAVE_SEEKBAR = "mediacontrol:mouseleave:seekbar", h.MEDIACONTROL_PLAYING = "mediacontrol:playing", h.MEDIACONTROL_NOTPLAYING = "mediacontrol:notplaying", h.MEDIACONTROL_CONTAINERCHANGED = "mediacontrol:containerchanged", h.CORE_CONTAINERS_CREATED = "core:containers:created", e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function o(e, t) {
                var n = t.name || "",
                    i = function(e) {
                        function i(e) {
                            r(this, i), v(Object.getPrototypeOf(i.prototype), "constructor", this).call(this, e), t.initialize && t.initialize.apply(this, Array.prototype.slice.apply(arguments))
                        }
                        return a(i, e), d(i, [{
                            key: "name",
                            get: function() {
                                return n
                            }
                        }]), i
                    }(e);
                return delete t.name, m["default"].extend(i.prototype, t), i
            }

            function s(e, t) {
                if (!isFinite(e)) return "--:--";
                e = 1e3 * e, e = parseInt(e / 1e3);
                var n = e % 60;
                e = parseInt(e / 60);
                var i = e % 60;
                e = parseInt(e / 60);
                var r = e % 24,
                    a = parseInt(e / 24),
                    o = "";
                return a && a > 0 && (o += a + ":", 1 > r && (o += "00:")), (r && r > 0 || t) && (o += ("0" + r).slice(-2) + ":"), o += ("0" + i).slice(-2) + ":", o += ("0" + n).slice(-2), o.trim()
            }

            function l(e) {
                var t = e.match(/t=([0-9]*)(&|\/|$)/);
                if (t && t.length > 0) return parseInt(t[1], 10);
                var n = 0,
                    i = {
                        h: 3600,
                        m: 60,
                        s: 1
                    };
                return t = e.match(/[0-9]+[hms]+/g) || [], t.forEach(function(e) {
                    if (e) {
                        var t = e[e.length - 1],
                            r = parseInt(e.slice(0, e.length - 1), 10);
                        n += r * i[t]
                    }
                }), n
            }

            function u(e) {
                k[e] || (k[e] = 0);
                var t = ++k[e];
                return e + t
            }

            function c(e) {
                return e - parseFloat(e) + 1 >= 0
            }

            function f() {
                var e = document.getElementsByTagName("script");
                return e[e.length - 1].src
            }

            function h() {
                return window.navigator && window.navigator.language ? window.navigator.language.toLowerCase() : null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                v = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                };
            t.extend = o, t.formatTime = s, t.seekStringToSeconds = l, t.uniqueId = u, t.isNumber = c, t.currentScriptUrl = f, t.getBrowserLanguage = h;
            var p = n(5),
                g = i(p),
                y = n(6),
                m = i(y),
                E = {
                    isFullscreen: function() {
                        return document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || !!document.msFullscreenElement
                    },
                    requestFullscreen: function(e) {
                        e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.querySelector && e.querySelector("video") && e.querySelector("video").webkitEnterFullScreen && e.querySelector("video").webkitEnterFullScreen()
                    },
                    cancelFullscreen: function() {
                        document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
                    }
                };
            t.Fullscreen = E;
            var b = function() {
                function e() {
                    r(this, e)
                }
                return d(e, null, [{
                    key: "_defaultConfig",
                    value: function() {
                        return {
                            volume: {
                                value: 100,
                                parse: parseInt
                            }
                        }
                    }
                }, {
                    key: "_defaultValueFor",
                    value: function(e) {
                        try {
                            return this._defaultConfig()[e].parse(this._defaultConfig()[e].value)
                        } catch (t) {
                            return
                        }
                    }
                }, {
                    key: "_createKeyspace",
                    value: function(e) {
                        return "noplayer." + document.domain + "." + e
                    }
                }, {
                    key: "restore",
                    value: function(e) {
                        return g["default"].hasLocalstorage && localStorage[this._createKeyspace(e)] ? this._defaultConfig()[e].parse(localStorage[this._createKeyspace(e)]) : this._defaultValueFor(e)
                    }
                }, {
                    key: "persist",
                    value: function(e, t) {
                        if (g["default"].hasLocalstorage) try {
                            return localStorage[this._createKeyspace(e)] = t, !0
                        } catch (n) {
                            return !1
                        }
                    }
                }]), e
            }();
            t.Config = b;
            var k = {},
                _ = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                }).bind(window);
            t.requestAnimationFrame = _;
            var A = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout).bind(window);
            t.cancelAnimationFrame = A, t["default"] = {
                Config: b,
                Fullscreen: E,
                extend: o,
                formatTime: s,
                seekStringToSeconds: l,
                uniqueId: u,
                currentScriptUrl: f,
                isNumber: c,
                requestAnimationFrame: _,
                cancelAnimationFrame: A,
                getBrowserLanguage: h
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {},
                i = function() {
                    try {
                        return localStorage.setItem("noplayer", "noplayer"), localStorage.removeItem("noplayer"), !0
                    } catch (e) {
                        return !1
                    }
                },
                r = function() {
                    try {
                        var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        return !!e
                    } catch (t) {
                        return !(!navigator.mimeTypes || void 0 === navigator.mimeTypes["application/x-shockwave-flash"] || !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
                    }
                },
                a = function() {
                    var e, t = navigator.userAgent,
                        n = t.match(/\b(playstation 4|nx|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                    return /trident/i.test(n[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], {
                        name: "IE",
                        version: parseInt(e[1] || "")
                    }) : "Chrome" === n[1] && (e = t.match(/\bOPR\/(\d+)/), null != e) ? {
                        name: "Opera",
                        version: parseInt(e[1])
                    } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), {
                        name: n[0],
                        version: parseInt(n[1])
                    })
                },
                o = a();
            n.isSafari = /safari/i.test(navigator.userAgent) && -1 === navigator.userAgent.indexOf("Chrome"), n.isChrome = /chrome/i.test(navigator.userAgent), n.isFirefox = /firefox/i.test(navigator.userAgent), n.isLegacyIE = !!window.ActiveXObject, n.isIE = n.isLegacyIE || /trident.*rv:1\d/i.test(navigator.userAgent), n.isIE11 = /trident.*rv:11/i.test(navigator.userAgent), n.isChromecast = n.isChrome && /CrKey/i.test(navigator.userAgent), n.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(navigator.userAgent), n.isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent), n.isAndroid = /Android/i.test(navigator.userAgent), n.isWindowsPhone = /Windows Phone/i.test(navigator.userAgent), n.isWin8App = /MSAppHost/i.test(navigator.userAgent), n.isWiiU = /WiiU/i.test(navigator.userAgent), n.isPS4 = /PlayStation 4/i.test(navigator.userAgent), n.hasLocalstorage = i(), n.hasFlash = r(), n.name = o.name, n.version = o.version, t["default"] = n, e.exports = t["default"]
        }, function(e, t) {
            "use strict";
            var n = function() {
                function e(e) {
                    return null == e ? String(e) : W[q.call(e)] || "object"
                }

                function t(t) {
                    return "function" == e(t)
                }

                function n(e) {
                    return null != e && e == e.window
                }

                function i(e) {
                    return null != e && e.nodeType == e.DOCUMENT_NODE
                }

                function r(t) {
                    return "object" == e(t)
                }

                function a(e) {
                    return r(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
                }

                function o(e) {
                    return "number" == typeof e.length
                }

                function s(e) {
                    return C.call(e, function(e) {
                        return null != e
                    })
                }

                function l(e) {
                    return e.length > 0 ? T.fn.concat.apply([], e) : e
                }

                function u(e) {
                    return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }

                function c(e) {
                    return e in x ? x[e] : x[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
                }

                function f(e, t) {
                    return "number" != typeof t || N[u(e)] ? t : t + "px"
                }

                function h(e) {
                    var t, n;
                    return I[e] || (t = P.createElement(e), P.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), I[e] = n), I[e]
                }

                function d(e) {
                    return "children" in e ? D.call(e.children) : T.map(e.childNodes, function(e) {
                        return 1 == e.nodeType ? e : void 0
                    })
                }

                function v(e, t) {
                    var n, i = e ? e.length : 0;
                    for (n = 0; i > n; n++) this[n] = e[n];
                    this.length = i, this.selector = t || ""
                }

                function p(e, t, n) {
                    for (A in t) n && (a(t[A]) || Q(t[A])) ? (a(t[A]) && !a(e[A]) && (e[A] = {}), Q(t[A]) && !Q(e[A]) && (e[A] = []), p(e[A], t[A], n)) : t[A] !== _ && (e[A] = t[A])
                }

                function g(e, t) {
                    return null == t ? T(e) : T(e).filter(t)
                }

                function y(e, n, i, r) {
                    return t(n) ? n.call(e, i, r) : n
                }

                function m(e, t, n) {
                    null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
                }

                function E(e, t) {
                    var n = e.className || "",
                        i = n && n.baseVal !== _;
                    return t === _ ? i ? n.baseVal : n : void(i ? n.baseVal = t : e.className = t)
                }

                function b(e) {
                    try {
                        return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? T.parseJSON(e) : e) : e
                    } catch (t) {
                        return e
                    }
                }

                function k(e, t) {
                    t(e);
                    for (var n = 0, i = e.childNodes.length; i > n; n++) k(e.childNodes[n], t)
                }
                var _, A, T, L, S, R, O = [],
                    w = O.concat,
                    C = O.filter,
                    D = O.slice,
                    P = window.document,
                    I = {},
                    x = {},
                    N = {
                        "column-count": 1,
                        columns: 1,
                        "font-weight": 1,
                        "line-height": 1,
                        opacity: 1,
                        "z-index": 1,
                        zoom: 1
                    },
                    M = /^\s*<(\w+|!)[^>]*>/,
                    B = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                    F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                    j = /^(?:body|html)$/i,
                    U = /([A-Z])/g,
                    G = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                    V = ["after", "prepend", "before", "append"],
                    Y = P.createElement("table"),
                    K = P.createElement("tr"),
                    H = {
                        tr: P.createElement("tbody"),
                        tbody: Y,
                        thead: Y,
                        tfoot: Y,
                        td: K,
                        th: K,
                        "*": P.createElement("div")
                    },
                    z = /complete|loaded|interactive/,
                    $ = /^[\w-]*$/,
                    W = {},
                    q = W.toString,
                    X = {},
                    Z = P.createElement("div"),
                    J = {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        "for": "htmlFor",
                        "class": "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    },
                    Q = Array.isArray || function(e) {
                        return e instanceof Array
                    };
                return X.matches = function(e, t) {
                    if (!t || !e || 1 !== e.nodeType) return !1;
                    var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                    if (n) return n.call(e, t);
                    var i, r = e.parentNode,
                        a = !r;
                    return a && (r = Z).appendChild(e), i = ~X.qsa(r, t).indexOf(e), a && Z.removeChild(e), i
                }, S = function(e) {
                    return e.replace(/-+(.)?/g, function(e, t) {
                        return t ? t.toUpperCase() : ""
                    })
                }, R = function(e) {
                    return C.call(e, function(t, n) {
                        return e.indexOf(t) == n
                    })
                }, X.fragment = function(e, t, n) {
                    var i, r, o;
                    return B.test(e) && (i = T(P.createElement(RegExp.$1))), i || (e.replace && (e = e.replace(F, "<$1></$2>")), t === _ && (t = M.test(e) && RegExp.$1), t in H || (t = "*"), o = H[t], o.innerHTML = "" + e, i = T.each(D.call(o.childNodes), function() {
                        o.removeChild(this)
                    })), a(n) && (r = T(i), T.each(n, function(e, t) {
                        G.indexOf(e) > -1 ? r[e](t) : r.attr(e, t)
                    })), i
                }, X.Z = function(e, t) {
                    return new v(e, t)
                }, X.isZ = function(e) {
                    return e instanceof X.Z
                }, X.init = function(e, n) {
                    var i;
                    if (!e) return X.Z();
                    if ("string" == typeof e)
                        if (e = e.trim(), "<" == e[0] && M.test(e)) i = X.fragment(e, RegExp.$1, n), e = null;
                        else {
                            if (n !== _) return T(n).find(e);
                            i = X.qsa(P, e)
                        }
                    else {
                        if (t(e)) return T(P).ready(e);
                        if (X.isZ(e)) return e;
                        if (Q(e)) i = s(e);
                        else if (r(e)) i = [e], e = null;
                        else if (M.test(e)) i = X.fragment(e.trim(), RegExp.$1, n), e = null;
                        else {
                            if (n !== _) return T(n).find(e);
                            i = X.qsa(P, e)
                        }
                    }
                    return X.Z(i, e)
                }, T = function(e, t) {
                    return X.init(e, t)
                }, T.extend = function(e) {
                    var t, n = D.call(arguments, 1);
                    return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function(n) {
                        p(e, n, t)
                    }), e
                }, X.qsa = function(e, t) {
                    var n, i = "#" == t[0],
                        r = !i && "." == t[0],
                        a = i || r ? t.slice(1) : t,
                        o = $.test(a);
                    return e.getElementById && o && i ? (n = e.getElementById(a)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : D.call(o && !i && e.getElementsByClassName ? r ? e.getElementsByClassName(a) : e.getElementsByTagName(t) : e.querySelectorAll(t))
                }, T.contains = P.documentElement.contains ? function(e, t) {
                    return e !== t && e.contains(t)
                } : function(e, t) {
                    for (; t && (t = t.parentNode);)
                        if (t === e) return !0;
                    return !1
                }, T.type = e, T.isFunction = t, T.isWindow = n, T.isArray = Q, T.isPlainObject = a, T.isEmptyObject = function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, T.inArray = function(e, t, n) {
                    return O.indexOf.call(t, e, n)
                }, T.camelCase = S, T.trim = function(e) {
                    return null == e ? "" : String.prototype.trim.call(e)
                }, T.uuid = 0, T.support = {}, T.expr = {}, T.noop = function() {}, T.map = function(e, t) {
                    var n, i, r, a = [];
                    if (o(e))
                        for (i = 0; i < e.length; i++) n = t(e[i], i), null != n && a.push(n);
                    else
                        for (r in e) n = t(e[r], r), null != n && a.push(n);
                    return l(a)
                }, T.each = function(e, t) {
                    var n, i;
                    if (o(e)) {
                        for (n = 0; n < e.length; n++)
                            if (t.call(e[n], n, e[n]) === !1) return e
                    } else
                        for (i in e)
                            if (t.call(e[i], i, e[i]) === !1) return e;
                    return e
                }, T.grep = function(e, t) {
                    return C.call(e, t)
                }, window.JSON && (T.parseJSON = JSON.parse), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                    W["[object " + t + "]"] = t.toLowerCase()
                }), T.fn = {
                    constructor: X.Z,
                    length: 0,
                    forEach: O.forEach,
                    reduce: O.reduce,
                    push: O.push,
                    sort: O.sort,
                    splice: O.splice,
                    indexOf: O.indexOf,
                    concat: function() {
                        var e, t, n = [];
                        for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = X.isZ(t) ? t.toArray() : t;
                        return w.apply(X.isZ(this) ? this.toArray() : this, n)
                    },
                    map: function(e) {
                        return T(T.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function() {
                        return T(D.apply(this, arguments))
                    },
                    ready: function(e) {
                        return z.test(P.readyState) && P.body ? e(T) : P.addEventListener("DOMContentLoaded", function() {
                            e(T)
                        }, !1), this
                    },
                    get: function(e) {
                        return e === _ ? D.call(this) : this[e >= 0 ? e : e + this.length]
                    },
                    toArray: function() {
                        return this.get()
                    },
                    size: function() {
                        return this.length
                    },
                    remove: function() {
                        return this.each(function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        })
                    },
                    each: function(e) {
                        return O.every.call(this, function(t, n) {
                            return e.call(t, n, t) !== !1
                        }), this
                    },
                    filter: function(e) {
                        return t(e) ? this.not(this.not(e)) : T(C.call(this, function(t) {
                            return X.matches(t, e)
                        }))
                    },
                    add: function(e, t) {
                        return T(R(this.concat(T(e, t))))
                    },
                    is: function(e) {
                        return this.length > 0 && X.matches(this[0], e)
                    },
                    not: function(e) {
                        var n = [];
                        if (t(e) && e.call !== _) this.each(function(t) {
                            e.call(this, t) || n.push(this)
                        });
                        else {
                            var i = "string" == typeof e ? this.filter(e) : o(e) && t(e.item) ? D.call(e) : T(e);
                            this.forEach(function(e) {
                                i.indexOf(e) < 0 && n.push(e)
                            })
                        }
                        return T(n)
                    },
                    has: function(e) {
                        return this.filter(function() {
                            return r(e) ? T.contains(this, e) : T(this).find(e).size()
                        })
                    },
                    eq: function(e) {
                        return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                    },
                    first: function() {
                        var e = this[0];
                        return e && !r(e) ? e : T(e)
                    },
                    last: function() {
                        var e = this[this.length - 1];
                        return e && !r(e) ? e : T(e)
                    },
                    find: function(e) {
                        var t, n = this;
                        return t = e ? "object" == typeof e ? T(e).filter(function() {
                            var e = this;
                            return O.some.call(n, function(t) {
                                return T.contains(t, e)
                            })
                        }) : 1 == this.length ? T(X.qsa(this[0], e)) : this.map(function() {
                            return X.qsa(this, e)
                        }) : T()
                    },
                    closest: function(e, t) {
                        var n = this[0],
                            r = !1;
                        for ("object" == typeof e && (r = T(e)); n && !(r ? r.indexOf(n) >= 0 : X.matches(n, e));) n = n !== t && !i(n) && n.parentNode;
                        return T(n)
                    },
                    parents: function(e) {
                        for (var t = [], n = this; n.length > 0;) n = T.map(n, function(e) {
                            return (e = e.parentNode) && !i(e) && t.indexOf(e) < 0 ? (t.push(e), e) : void 0
                        });
                        return g(t, e)
                    },
                    parent: function(e) {
                        return g(R(this.pluck("parentNode")), e)
                    },
                    children: function(e) {
                        return g(this.map(function() {
                            return d(this)
                        }), e)
                    },
                    contents: function() {
                        return this.map(function() {
                            return this.contentDocument || D.call(this.childNodes)
                        })
                    },
                    siblings: function(e) {
                        return g(this.map(function(e, t) {
                            return C.call(d(t.parentNode), function(e) {
                                return e !== t
                            })
                        }), e)
                    },
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML = ""
                        })
                    },
                    pluck: function(e) {
                        return T.map(this, function(t) {
                            return t[e]
                        })
                    },
                    show: function() {
                        return this.each(function() {
                            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                        })
                    },
                    replaceWith: function(e) {
                        return this.before(e).remove()
                    },
                    wrap: function(e) {
                        var n = t(e);
                        if (this[0] && !n) var i = T(e).get(0),
                            r = i.parentNode || this.length > 1;
                        return this.each(function(t) {
                            T(this).wrapAll(n ? e.call(this, t) : r ? i.cloneNode(!0) : i)
                        })
                    },
                    wrapAll: function(e) {
                        if (this[0]) {
                            T(this[0]).before(e = T(e));
                            for (var t;
                                (t = e.children()).length;) e = t.first();
                            T(e).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        var n = t(e);
                        return this.each(function(t) {
                            var i = T(this),
                                r = i.contents(),
                                a = n ? e.call(this, t) : e;
                            r.length ? r.wrapAll(a) : i.append(a)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            T(this).replaceWith(T(this).children())
                        }), this
                    },
                    clone: function() {
                        return this.map(function() {
                            return this.cloneNode(!0)
                        })
                    },
                    hide: function() {
                        return this.css("display", "none")
                    },
                    toggle: function(e) {
                        return this.each(function() {
                            var t = T(this);
                            (e === _ ? "none" == t.css("display") : e) ? t.show(): t.hide()
                        })
                    },
                    prev: function(e) {
                        return T(this.pluck("previousElementSibling")).filter(e || "*")
                    },
                    next: function(e) {
                        return T(this.pluck("nextElementSibling")).filter(e || "*")
                    },
                    html: function(e) {
                        return 0 in arguments ? this.each(function(t) {
                            var n = this.innerHTML;
                            T(this).empty().append(y(this, e, t, n))
                        }) : 0 in this ? this[0].innerHTML : null
                    },
                    text: function(e) {
                        return 0 in arguments ? this.each(function(t) {
                            var n = y(this, e, t, this.textContent);
                            this.textContent = null == n ? "" : "" + n
                        }) : 0 in this ? this[0].textContent : null
                    },
                    attr: function(e, t) {
                        var n;
                        return "string" != typeof e || 1 in arguments ? this.each(function(n) {
                            if (1 === this.nodeType)
                                if (r(e))
                                    for (A in e) m(this, A, e[A]);
                                else m(this, e, y(this, t, n, this.getAttribute(e)))
                        }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : _
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            1 === this.nodeType && e.split(" ").forEach(function(e) {
                                m(this, e)
                            }, this)
                        })
                    },
                    prop: function(e, t) {
                        return e = J[e] || e, 1 in arguments ? this.each(function(n) {
                            this[e] = y(this, t, n, this[e])
                        }) : this[0] && this[0][e]
                    },
                    data: function(e, t) {
                        var n = "data-" + e.replace(U, "-$1").toLowerCase(),
                            i = 1 in arguments ? this.attr(n, t) : this.attr(n);
                        return null !== i ? b(i) : _
                    },
                    val: function(e) {
                        return 0 in arguments ? this.each(function(t) {
                            this.value = y(this, e, t, this.value)
                        }) : this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function() {
                            return this.selected
                        }).pluck("value") : this[0].value)
                    },
                    offset: function(e) {
                        if (e) return this.each(function(t) {
                            var n = T(this),
                                i = y(this, e, t, n.offset()),
                                r = n.offsetParent().offset(),
                                a = {
                                    top: i.top - r.top,
                                    left: i.left - r.left
                                };
                            "static" == n.css("position") && (a.position = "relative"), n.css(a)
                        });
                        if (!this.length) return null;
                        if (!T.contains(P.documentElement, this[0])) return {
                            top: 0,
                            left: 0
                        };
                        var t = this[0].getBoundingClientRect();
                        return {
                            left: t.left + window.pageXOffset,
                            top: t.top + window.pageYOffset,
                            width: Math.round(t.width),
                            height: Math.round(t.height)
                        }
                    },
                    css: function(t, n) {
                        if (arguments.length < 2) {
                            var i, r = this[0];
                            if (!r) return;
                            if (i = getComputedStyle(r, ""), "string" == typeof t) return r.style[S(t)] || i.getPropertyValue(t);
                            if (Q(t)) {
                                var a = {};
                                return T.each(t, function(e, t) {
                                    a[t] = r.style[S(t)] || i.getPropertyValue(t)
                                }), a
                            }
                        }
                        var o = "";
                        if ("string" == e(t)) n || 0 === n ? o = u(t) + ":" + f(t, n) : this.each(function() {
                            this.style.removeProperty(u(t))
                        });
                        else
                            for (A in t) t[A] || 0 === t[A] ? o += u(A) + ":" + f(A, t[A]) + ";" : this.each(function() {
                                this.style.removeProperty(u(A))
                            });
                        return this.each(function() {
                            this.style.cssText += ";" + o
                        })
                    },
                    index: function(e) {
                        return e ? this.indexOf(T(e)[0]) : this.parent().children().indexOf(this[0])
                    },
                    hasClass: function(e) {
                        return e ? O.some.call(this, function(e) {
                            return this.test(E(e))
                        }, c(e)) : !1
                    },
                    addClass: function(e) {
                        return e ? this.each(function(t) {
                            if ("className" in this) {
                                L = [];
                                var n = E(this),
                                    i = y(this, e, t, n);
                                i.split(/\s+/g).forEach(function(e) {
                                    T(this).hasClass(e) || L.push(e)
                                }, this), L.length && E(this, n + (n ? " " : "") + L.join(" "))
                            }
                        }) : this
                    },
                    removeClass: function(e) {
                        return this.each(function(t) {
                            if ("className" in this) {
                                if (e === _) return E(this, "");
                                L = E(this), y(this, e, t, L).split(/\s+/g).forEach(function(e) {
                                    L = L.replace(c(e), " ")
                                }), E(this, L.trim())
                            }
                        })
                    },
                    toggleClass: function(e, t) {
                        return e ? this.each(function(n) {
                            var i = T(this),
                                r = y(this, e, n, E(this));
                            r.split(/\s+/g).forEach(function(e) {
                                (t === _ ? !i.hasClass(e) : t) ? i.addClass(e): i.removeClass(e)
                            })
                        }) : this
                    },
                    scrollTop: function(e) {
                        if (this.length) {
                            var t = "scrollTop" in this[0];
                            return e === _ ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                                this.scrollTop = e
                            } : function() {
                                this.scrollTo(this.scrollX, e)
                            })
                        }
                    },
                    scrollLeft: function(e) {
                        if (this.length) {
                            var t = "scrollLeft" in this[0];
                            return e === _ ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                                this.scrollLeft = e
                            } : function() {
                                this.scrollTo(e, this.scrollY)
                            })
                        }
                    },
                    position: function() {
                        if (this.length) {
                            var e = this[0],
                                t = this.offsetParent(),
                                n = this.offset(),
                                i = j.test(t[0].nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : t.offset();
                            return n.top -= parseFloat(T(e).css("margin-top")) || 0, n.left -= parseFloat(T(e).css("margin-left")) || 0, i.top += parseFloat(T(t[0]).css("border-top-width")) || 0, i.left += parseFloat(T(t[0]).css("border-left-width")) || 0, {
                                top: n.top - i.top,
                                left: n.left - i.left
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent || P.body; e && !j.test(e.nodeName) && "static" == T(e).css("position");) e = e.offsetParent;
                            return e
                        })
                    }
                }, T.fn.detach = T.fn.remove, ["width", "height"].forEach(function(e) {
                    var t = e.replace(/./, function(e) {
                        return e[0].toUpperCase()
                    });
                    T.fn[e] = function(r) {
                        var a, o = this[0];
                        return r === _ ? n(o) ? o["inner" + t] : i(o) ? o.documentElement["scroll" + t] : (a = this.offset()) && a[e] : this.each(function(t) {
                            o = T(this), o.css(e, y(this, r, t, o[e]()))
                        })
                    }
                }), V.forEach(function(t, n) {
                    var i = n % 2;
                    T.fn[t] = function() {
                        var t, r, a = T.map(arguments, function(n) {
                                return t = e(n), "object" == t || "array" == t || null == n ? n : X.fragment(n)
                            }),
                            o = this.length > 1;
                        return a.length < 1 ? this : this.each(function(e, t) {
                            r = i ? t : t.parentNode, t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                            var s = T.contains(P.documentElement, r);
                            a.forEach(function(e) {
                                if (o) e = e.cloneNode(!0);
                                else if (!r) return T(e).remove();
                                r.insertBefore(e, t), s && k(e, function(e) {
                                    null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                                })
                            })
                        })
                    }, T.fn[i ? t + "To" : "insert" + (n ? "Before" : "After")] = function(e) {
                        return T(e)[t](this), this
                    }
                }), X.Z.prototype = v.prototype = T.fn, X.uniq = R, X.deserializeValue = b, T.zepto = X, T
            }();
            window.Zepto = n, void 0 === window.$ && (window.$ = n),
                function(e) {
                    function t(e) {
                        return e._zid || (e._zid = h++)
                    }

                    function n(e, n, a, o) {
                        if (n = i(n), n.ns) var s = r(n.ns);
                        return (g[t(e)] || []).filter(function(e) {
                            return !(!e || n.e && e.e != n.e || n.ns && !s.test(e.ns) || a && t(e.fn) !== t(a) || o && e.sel != o)
                        })
                    }

                    function i(e) {
                        var t = ("" + e).split(".");
                        return {
                            e: t[0],
                            ns: t.slice(1).sort().join(" ")
                        }
                    }

                    function r(e) {
                        return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
                    }

                    function a(e, t) {
                        return e.del && !m && e.e in E || !!t
                    }

                    function o(e) {
                        return b[e] || m && E[e] || e
                    }

                    function s(n, r, s, l, c, h, d) {
                        var v = t(n),
                            p = g[v] || (g[v] = []);
                        r.split(/\s/).forEach(function(t) {
                            if ("ready" == t) return e(document).ready(s);
                            var r = i(t);
                            r.fn = s, r.sel = c, r.e in b && (s = function(t) {
                                var n = t.relatedTarget;
                                return !n || n !== this && !e.contains(this, n) ? r.fn.apply(this, arguments) : void 0
                            }), r.del = h;
                            var v = h || s;
                            r.proxy = function(e) {
                                if (e = u(e), !e.isImmediatePropagationStopped()) {
                                    e.data = l;
                                    var t = v.apply(n, e._args == f ? [e] : [e].concat(e._args));
                                    return t === !1 && (e.preventDefault(), e.stopPropagation()), t
                                }
                            }, r.i = p.length, p.push(r), "addEventListener" in n && n.addEventListener(o(r.e), r.proxy, a(r, d))
                        })
                    }

                    function l(e, i, r, s, l) {
                        var u = t(e);
                        (i || "").split(/\s/).forEach(function(t) {
                            n(e, t, r, s).forEach(function(t) {
                                delete g[u][t.i], "removeEventListener" in e && e.removeEventListener(o(t.e), t.proxy, a(t, l))
                            })
                        })
                    }

                    function u(t, n) {
                        return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(T, function(e, i) {
                            var r = n[e];
                            t[e] = function() {
                                return this[i] = k, r && r.apply(n, arguments)
                            }, t[i] = _
                        }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = k)), t
                    }

                    function c(e) {
                        var t, n = {
                            originalEvent: e
                        };
                        for (t in e) A.test(t) || e[t] === f || (n[t] = e[t]);
                        return u(n, e)
                    }
                    var f, h = 1,
                        d = Array.prototype.slice,
                        v = e.isFunction,
                        p = function(e) {
                            return "string" == typeof e
                        },
                        g = {},
                        y = {},
                        m = "onfocusin" in window,
                        E = {
                            focus: "focusin",
                            blur: "focusout"
                        },
                        b = {
                            mouseenter: "mouseover",
                            mouseleave: "mouseout"
                        };
                    y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = {
                        add: s,
                        remove: l
                    }, e.proxy = function(n, i) {
                        var r = 2 in arguments && d.call(arguments, 2);
                        if (v(n)) {
                            var a = function() {
                                return n.apply(i, r ? r.concat(d.call(arguments)) : arguments)
                            };
                            return a._zid = t(n), a
                        }
                        if (p(i)) return r ? (r.unshift(n[i], n), e.proxy.apply(null, r)) : e.proxy(n[i], n);
                        throw new TypeError("expected function")
                    }, e.fn.bind = function(e, t, n) {
                        return this.on(e, t, n)
                    }, e.fn.unbind = function(e, t) {
                        return this.off(e, t)
                    }, e.fn.one = function(e, t, n, i) {
                        return this.on(e, t, n, i, 1)
                    };
                    var k = function() {
                            return !0
                        },
                        _ = function() {
                            return !1
                        },
                        A = /^([A-Z]|returnValue$|layer[XY]$)/,
                        T = {
                            preventDefault: "isDefaultPrevented",
                            stopImmediatePropagation: "isImmediatePropagationStopped",
                            stopPropagation: "isPropagationStopped"
                        };
                    e.fn.delegate = function(e, t, n) {
                        return this.on(t, e, n)
                    }, e.fn.undelegate = function(e, t, n) {
                        return this.off(t, e, n)
                    }, e.fn.live = function(t, n) {
                        return e(document.body).delegate(this.selector, t, n), this
                    }, e.fn.die = function(t, n) {
                        return e(document.body).undelegate(this.selector, t, n), this
                    }, e.fn.on = function(t, n, i, r, a) {
                        var o, u, h = this;
                        return t && !p(t) ? (e.each(t, function(e, t) {
                            h.on(e, n, i, t, a)
                        }), h) : (p(n) || v(r) || r === !1 || (r = i, i = n, n = f), (r === f || i === !1) && (r = i, i = f), r === !1 && (r = _), h.each(function(f, h) {
                            a && (o = function(e) {
                                return l(h, e.type, r), r.apply(this, arguments)
                            }), n && (u = function(t) {
                                var i, a = e(t.target).closest(n, h).get(0);
                                return a && a !== h ? (i = e.extend(c(t), {
                                    currentTarget: a,
                                    liveFired: h
                                }), (o || r).apply(a, [i].concat(d.call(arguments, 1)))) : void 0
                            }), s(h, t, r, i, n, u || o)
                        }))
                    }, e.fn.off = function(t, n, i) {
                        var r = this;
                        return t && !p(t) ? (e.each(t, function(e, t) {
                            r.off(e, n, t)
                        }), r) : (p(n) || v(i) || i === !1 || (i = n, n = f), i === !1 && (i = _), r.each(function() {
                            l(this, t, i, n)
                        }))
                    }, e.fn.trigger = function(t, n) {
                        return t = p(t) || e.isPlainObject(t) ? e.Event(t) : u(t), t._args = n, this.each(function() {
                            t.type in E && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                        })
                    }, e.fn.triggerHandler = function(t, i) {
                        var r, a;
                        return this.each(function(o, s) {
                            r = c(p(t) ? e.Event(t) : t), r._args = i, r.target = s, e.each(n(s, t.type || t), function(e, t) {
                                return a = t.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
                            })
                        }), a
                    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                        e.fn[t] = function(e) {
                            return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                        }
                    }), e.Event = function(e, t) {
                        p(e) || (t = e, e = t.type);
                        var n = document.createEvent(y[e] || "Events"),
                            i = !0;
                        if (t)
                            for (var r in t) "bubbles" == r ? i = !!t[r] : n[r] = t[r];
                        return n.initEvent(e, i, !0), u(n)
                    }
                }(n),
                function(e) {
                    function t(t, n, i) {
                        var r = e.Event(n);
                        return e(t).trigger(r, i), !r.isDefaultPrevented()
                    }

                    function n(e, n, i, r) {
                        return e.global ? t(n || m, i, r) : void 0
                    }

                    function i(t) {
                        t.global && 0 === e.active++ && n(t, null, "ajaxStart")
                    }

                    function r(t) {
                        t.global && !--e.active && n(t, null, "ajaxStop")
                    }

                    function a(e, t) {
                        var i = t.context;
                        return t.beforeSend.call(i, e, t) === !1 || n(t, i, "ajaxBeforeSend", [e, t]) === !1 ? !1 : void n(t, i, "ajaxSend", [e, t])
                    }

                    function o(e, t, i, r) {
                        var a = i.context,
                            o = "success";
                        i.success.call(a, e, o, t), r && r.resolveWith(a, [e, o, t]), n(i, a, "ajaxSuccess", [t, i, e]), l(o, t, i)
                    }

                    function s(e, t, i, r, a) {
                        var o = r.context;
                        r.error.call(o, i, t, e), a && a.rejectWith(o, [i, t, e]), n(r, o, "ajaxError", [i, r, e || t]), l(t, i, r)
                    }

                    function l(e, t, i) {
                        var a = i.context;
                        i.complete.call(a, t, e), n(i, a, "ajaxComplete", [t, i]), r(i)
                    }

                    function u() {}

                    function c(e) {
                        return e && (e = e.split(";", 2)[0]), e && (e == A ? "html" : e == _ ? "json" : b.test(e) ? "script" : k.test(e) && "xml") || "text"
                    }

                    function f(e, t) {
                        return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
                    }

                    function h(t) {
                        t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = f(t.url, t.data), t.data = void 0)
                    }

                    function d(t, n, i, r) {
                        return e.isFunction(n) && (r = i, i = n, n = void 0), e.isFunction(i) || (r = i, i = void 0), {
                            url: t,
                            data: n,
                            success: i,
                            dataType: r
                        }
                    }

                    function v(t, n, i, r) {
                        var a, o = e.isArray(n),
                            s = e.isPlainObject(n);
                        e.each(n, function(n, l) {
                            a = e.type(l), r && (n = i ? r : r + "[" + (s || "object" == a || "array" == a ? n : "") + "]"), !r && o ? t.add(l.name, l.value) : "array" == a || !i && "object" == a ? v(t, l, i, n) : t.add(n, l)
                        })
                    }
                    var p, g, y = 0,
                        m = window.document,
                        E = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                        b = /^(?:text|application)\/javascript/i,
                        k = /^(?:text|application)\/xml/i,
                        _ = "application/json",
                        A = "text/html",
                        T = /^\s*$/,
                        L = m.createElement("a");
                    L.href = window.location.href, e.active = 0, e.ajaxJSONP = function(t, n) {
                        if (!("type" in t)) return e.ajax(t);
                        var i, r, l = t.jsonpCallback,
                            u = (e.isFunction(l) ? l() : l) || "jsonp" + ++y,
                            c = m.createElement("script"),
                            f = window[u],
                            h = function(t) {
                                e(c).triggerHandler("error", t || "abort")
                            },
                            d = {
                                abort: h
                            };
                        return n && n.promise(d), e(c).on("load error", function(a, l) {
                            clearTimeout(r), e(c).off().remove(), "error" != a.type && i ? o(i[0], d, t, n) : s(null, l || "error", d, t, n), window[u] = f, i && e.isFunction(f) && f(i[0]), f = i = void 0
                        }), a(d, t) === !1 ? (h("abort"), d) : (window[u] = function() {
                            i = arguments
                        }, c.src = t.url.replace(/\?(.+)=\?/, "?$1=" + u), m.head.appendChild(c), t.timeout > 0 && (r = setTimeout(function() {
                            h("timeout")
                        }, t.timeout)), d)
                    }, e.ajaxSettings = {
                        type: "GET",
                        beforeSend: u,
                        success: u,
                        error: u,
                        complete: u,
                        context: null,
                        global: !0,
                        xhr: function() {
                            return new window.XMLHttpRequest
                        },
                        accepts: {
                            script: "text/javascript, application/javascript, application/x-javascript",
                            json: _,
                            xml: "application/xml, text/xml",
                            html: A,
                            text: "text/plain"
                        },
                        crossDomain: !1,
                        timeout: 0,
                        processData: !0,
                        cache: !0
                    }, e.ajax = function(t) {
                        var n, r, l = e.extend({}, t || {}),
                            d = e.Deferred && e.Deferred();
                        for (p in e.ajaxSettings) void 0 === l[p] && (l[p] = e.ajaxSettings[p]);
                        i(l), l.crossDomain || (n = m.createElement("a"), n.href = l.url, n.href = n.href, l.crossDomain = L.protocol + "//" + L.host != n.protocol + "//" + n.host), l.url || (l.url = window.location.toString()), (r = l.url.indexOf("#")) > -1 && (l.url = l.url.slice(0, r)), h(l);
                        var v = l.dataType,
                            y = /\?.+=\?/.test(l.url);
                        if (y && (v = "jsonp"), l.cache !== !1 && (t && t.cache === !0 || "script" != v && "jsonp" != v) || (l.url = f(l.url, "_=" + Date.now())), "jsonp" == v) return y || (l.url = f(l.url, l.jsonp ? l.jsonp + "=?" : l.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(l, d);
                        var E, b = l.accepts[v],
                            k = {},
                            _ = function(e, t) {
                                k[e.toLowerCase()] = [e, t]
                            },
                            A = /^([\w-]+:)\/\//.test(l.url) ? RegExp.$1 : window.location.protocol,
                            S = l.xhr(),
                            R = S.setRequestHeader;
                        if (d && d.promise(S), l.crossDomain || _("X-Requested-With", "XMLHttpRequest"), _("Accept", b || "*/*"), (b = l.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(b)), (l.contentType || l.contentType !== !1 && l.data && "GET" != l.type.toUpperCase()) && _("Content-Type", l.contentType || "application/x-www-form-urlencoded"), l.headers)
                            for (g in l.headers) _(g, l.headers[g]);
                        if (S.setRequestHeader = _, S.onreadystatechange = function() {
                                if (4 == S.readyState) {
                                    S.onreadystatechange = u, clearTimeout(E);
                                    var t, n = !1;
                                    if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == A) {
                                        v = v || c(l.mimeType || S.getResponseHeader("content-type")), t = S.responseText;
                                        try {
                                            "script" == v ? (0, eval)(t) : "xml" == v ? t = S.responseXML : "json" == v && (t = T.test(t) ? null : e.parseJSON(t))
                                        } catch (i) {
                                            n = i
                                        }
                                        n ? s(n, "parsererror", S, l, d) : o(t, S, l, d)
                                    } else s(S.statusText || null, S.status ? "error" : "abort", S, l, d)
                                }
                            }, a(S, l) === !1) return S.abort(), s(null, "abort", S, l, d), S;
                        if (l.xhrFields)
                            for (g in l.xhrFields) S[g] = l.xhrFields[g];
                        var O = "async" in l ? l.async : !0;
                        S.open(l.type, l.url, O, l.username, l.password);
                        for (g in k) R.apply(S, k[g]);
                        return l.timeout > 0 && (E = setTimeout(function() {
                            S.onreadystatechange = u, S.abort(), s(null, "timeout", S, l, d)
                        }, l.timeout)), S.send(l.data ? l.data : null), S
                    }, e.get = function() {
                        return e.ajax(d.apply(null, arguments))
                    }, e.post = function() {
                        var t = d.apply(null, arguments);
                        return t.type = "POST", e.ajax(t)
                    }, e.getJSON = function() {
                        var t = d.apply(null, arguments);
                        return t.dataType = "json", e.ajax(t)
                    }, e.fn.load = function(t, n, i) {
                        if (!this.length) return this;
                        var r, a = this,
                            o = t.split(/\s/),
                            s = d(t, n, i),
                            l = s.success;
                        return o.length > 1 && (s.url = o[0], r = o[1]), s.success = function(t) {
                            a.html(r ? e("<div>").html(t.replace(E, "")).find(r) : t), l && l.apply(a, arguments)
                        }, e.ajax(s), this
                    };
                    var S = encodeURIComponent;
                    e.param = function(t, n) {
                        var i = [];
                        return i.add = function(t, n) {
                            e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(S(t) + "=" + S(n))
                        }, v(i, t, n), i.join("&").replace(/%20/g, "+")
                    }
                }(n),
                function(e) {
                    e.Callbacks = function(t) {
                        t = e.extend({}, t);
                        var n, i, r, a, o, s, l = [],
                            u = !t.once && [],
                            c = function h(e) {
                                for (n = t.memory && e, i = !0, s = a || 0, a = 0, o = l.length, r = !0; l && o > s; ++s)
                                    if (l[s].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                                        n = !1;
                                        break
                                    }
                                r = !1, l && (u ? u.length && h(u.shift()) : n ? l.length = 0 : f.disable())
                            },
                            f = {
                                add: function() {
                                    if (l) {
                                        var i = l.length,
                                            s = function u(n) {
                                                e.each(n, function(e, n) {
                                                    "function" == typeof n ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" != typeof n && u(n)
                                                })
                                            };
                                        s(arguments), r ? o = l.length : n && (a = i, c(n))
                                    }
                                    return this
                                },
                                remove: function() {
                                    return l && e.each(arguments, function(t, n) {
                                        for (var i;
                                            (i = e.inArray(n, l, i)) > -1;) l.splice(i, 1), r && (o >= i && --o, s >= i && --s)
                                    }), this
                                },
                                has: function(t) {
                                    return !(!l || !(t ? e.inArray(t, l) > -1 : l.length))
                                },
                                empty: function() {
                                    return o = l.length = 0, this
                                },
                                disable: function() {
                                    return l = u = n = void 0, this
                                },
                                disabled: function() {
                                    return !l
                                },
                                lock: function() {
                                    return u = void 0, n || f.disable(), this
                                },
                                locked: function() {
                                    return !u
                                },
                                fireWith: function(e, t) {
                                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : c(t)), this
                                },
                                fire: function() {
                                    return f.fireWith(this, arguments)
                                },
                                fired: function() {
                                    return !!i
                                }
                            };
                        return f
                    }
                }(n),
                function(e) {
                    function t(n) {
                        var i = [
                                ["resolve", "done", e.Callbacks({
                                    once: 1,
                                    memory: 1
                                }), "resolved"],
                                ["reject", "fail", e.Callbacks({
                                    once: 1,
                                    memory: 1
                                }), "rejected"],
                                ["notify", "progress", e.Callbacks({
                                    memory: 1
                                })]
                            ],
                            r = "pending",
                            a = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                then: function() {
                                    var n = arguments;
                                    return t(function(t) {
                                        e.each(i, function(i, r) {
                                            var s = e.isFunction(n[i]) && n[i];
                                            o[r[1]](function() {
                                                var n = s && s.apply(this, arguments);
                                                if (n && e.isFunction(n.promise)) n.promise().done(t.resolve).fail(t.reject).progress(t.notify);
                                                else {
                                                    var i = this === a ? t.promise() : this,
                                                        o = s ? [n] : arguments;
                                                    t[r[0] + "With"](i, o)
                                                }
                                            })
                                        }), n = null
                                    }).promise()
                                },
                                promise: function(t) {
                                    return null != t ? e.extend(t, a) : a
                                }
                            },
                            o = {};
                        return e.each(i, function(e, t) {
                            var n = t[2],
                                s = t[3];
                            a[t[1]] = n.add, s && n.add(function() {
                                r = s
                            }, i[1 ^ e][2].disable, i[2][2].lock), o[t[0]] = function() {
                                return o[t[0] + "With"](this === o ? a : this, arguments), this
                            }, o[t[0] + "With"] = n.fireWith
                        }), a.promise(o), n && n.call(o, o), o
                    }
                    var n = Array.prototype.slice;
                    e.when = function(i) {
                        var r, a, o, s = n.call(arguments),
                            l = s.length,
                            u = 0,
                            c = 1 !== l || i && e.isFunction(i.promise) ? l : 0,
                            f = 1 === c ? i : t(),
                            h = function(e, t, i) {
                                return function(a) {
                                    t[e] = this, i[e] = arguments.length > 1 ? n.call(arguments) : a, i === r ? f.notifyWith(t, i) : --c || f.resolveWith(t, i)
                                }
                            };
                        if (l > 1)
                            for (r = new Array(l), a = new Array(l), o = new Array(l); l > u; ++u) s[u] && e.isFunction(s[u].promise) ? s[u].promise().done(h(u, o, s)).fail(f.reject).progress(h(u, a, r)) : --c;
                        return c || f.resolveWith(o, s), f.promise()
                    }, e.Deferred = t
                }(n),
                function(e) {
                    function t(e, t, n, i) {
                        return Math.abs(e - t) >= Math.abs(n - i) ? e - t > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
                    }

                    function n() {
                        c = null, h.last && (h.el.trigger("longTap"), h = {})
                    }

                    function i() {
                        c && clearTimeout(c), c = null
                    }

                    function r() {
                        s && clearTimeout(s), l && clearTimeout(l), u && clearTimeout(u), c && clearTimeout(c), s = l = u = c = null, h = {}
                    }

                    function a(e) {
                        return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
                    }

                    function o(e, t) {
                        return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
                    }
                    var s, l, u, c, f, h = {},
                        d = 750;
                    e(document).ready(function() {
                        var v, p, g, y, m = 0,
                            E = 0;
                        "MSGesture" in window && (f = new MSGesture, f.target = document.body), e(document).bind("MSGestureEnd", function(e) {
                            var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                            t && (h.el.trigger("swipe"), h.el.trigger("swipe" + t))
                        }).on("touchstart MSPointerDown pointerdown", function(t) {
                            (!(y = o(t, "down")) || a(t)) && (g = y ? t : t.touches[0], t.touches && 1 === t.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), v = Date.now(), p = v - (h.last || v), h.el = e("tagName" in g.target ? g.target : g.target.parentNode), s && clearTimeout(s), h.x1 = g.pageX, h.y1 = g.pageY, p > 0 && 250 >= p && (h.isDoubleTap = !0), h.last = v, c = setTimeout(n, d), f && y && f.addPointer(t.pointerId))
                        }).on("touchmove MSPointerMove pointermove", function(e) {
                            (!(y = o(e, "move")) || a(e)) && (g = y ? e : e.touches[0], i(), h.x2 = g.pageX, h.y2 = g.pageY, m += Math.abs(h.x1 - h.x2), E += Math.abs(h.y1 - h.y2))
                        }).on("touchend MSPointerUp pointerup", function(n) {
                            (!(y = o(n, "up")) || a(n)) && (i(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? u = setTimeout(function() {
                                h.el.trigger("swipe"), h.el.trigger("swipe" + t(h.x1, h.x2, h.y1, h.y2)), h = {}
                            }, 0) : "last" in h && (30 > m && 30 > E ? l = setTimeout(function() {
                                var t = e.Event("tap");
                                t.cancelTouch = r, h.el.trigger(t), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : s = setTimeout(function() {
                                    s = null, h.el && h.el.trigger("singleTap"), h = {}
                                }, 250)
                            }, 0) : h = {}), m = E = 0)
                        }).on("touchcancel MSPointerCancel pointercancel", r), e(window).on("scroll", r)
                    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
                        e.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    })
                }(n),
                function(e) {
                    function t(t) {
                        return t = e(t), !(!t.width() && !t.height()) && "none" !== t.css("display")
                    }

                    function n(e, t) {
                        e = e.replace(/=#\]/g, '="#"]');
                        var n, i, r = s.exec(e);
                        if (r && r[2] in o && (n = o[r[2]], i = r[3], e = r[1], i)) {
                            var a = Number(i);
                            i = isNaN(a) ? i.replace(/^["']|["']$/g, "") : a
                        }
                        return t(e, n, i)
                    }
                    var i = e.zepto,
                        r = i.qsa,
                        a = i.matches,
                        o = e.expr[":"] = {
                            visible: function() {
                                return t(this) ? this : void 0
                            },
                            hidden: function() {
                                return t(this) ? void 0 : this
                            },
                            selected: function() {
                                return this.selected ? this : void 0
                            },
                            checked: function() {
                                return this.checked ? this : void 0
                            },
                            parent: function() {
                                return this.parentNode
                            },
                            first: function(e) {
                                return 0 === e ? this : void 0
                            },
                            last: function(e, t) {
                                return e === t.length - 1 ? this : void 0
                            },
                            eq: function(e, t, n) {
                                return e === n ? this : void 0
                            },
                            contains: function(t, n, i) {
                                return e(this).text().indexOf(i) > -1 ? this : void 0
                            },
                            has: function(e, t, n) {
                                return i.qsa(this, n).length ? this : void 0
                            }
                        },
                        s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
                        l = /^\s*>/,
                        u = "Zepto" + +new Date;
                    i.qsa = function(t, a) {
                        return n(a, function(n, o, s) {
                            try {
                                var c;
                                !n && o ? n = "*" : l.test(n) && (c = e(t).addClass(u), n = "." + u + " " + n);
                                var f = r(t, n)
                            } catch (h) {
                                throw console.error("error performing selector: %o", a), h
                            } finally {
                                c && c.removeClass(u)
                            }
                            return o ? i.uniq(e.map(f, function(e, t) {
                                return o.call(e, t, f, s)
                            })) : f
                        })
                    }, i.matches = function(e, t) {
                        return n(t, function(t, n, i) {
                            return !(t && !a(e, t) || n && n.call(e, null, i) !== e)
                        })
                    }
                }(n),
                function() {
                    try {
                        getComputedStyle(void 0)
                    } catch (e) {
                        var t = getComputedStyle;
                        window.getComputedStyle = function(e) {
                            try {
                                return t(e)
                            } catch (n) {
                                return null
                            }
                        }
                    }
                }(), e.exports = n
        }, function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.WordArray,
                        r = t.enc;
                    r.Base64 = {
                        stringify: function(e) {
                            var t = e.words,
                                n = e.sigBytes,
                                i = this._map;
                            e.clamp();
                            for (var r = [], a = 0; n > a; a += 3)
                                for (var o = t[a >>> 2] >>> 24 - a % 4 * 8 & 255, s = t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255, l = t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, u = o << 16 | s << 8 | l, c = 0; 4 > c && n > a + .75 * c; c++) r.push(i.charAt(u >>> 6 * (3 - c) & 63));
                            var f = i.charAt(64);
                            if (f)
                                for (; r.length % 4;) r.push(f);
                            return r.join("")
                        },
                        parse: function(e) {
                            var t = e.length,
                                n = this._map,
                                r = n.charAt(64);
                            if (r) {
                                var a = e.indexOf(r); - 1 != a && (t = a)
                            }
                            for (var o = [], s = 0, l = 0; t > l; l++)
                                if (l % 4) {
                                    var u = n.indexOf(e.charAt(l - 1)) << l % 4 * 2,
                                        c = n.indexOf(e.charAt(l)) >>> 6 - l % 4 * 2,
                                        f = u | c;
                                    o[s >>> 2] |= f << 24 - s % 4 * 8, s++
                                }
                            return i.create(o, s)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(), e.enc.Base64
            })
        }, function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(20), n(19))
            }(void 0, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.Base,
                        r = n.WordArray,
                        a = t.algo,
                        o = a.MD5,
                        s = a.EvpKDF = i.extend({
                            cfg: i.extend({
                                keySize: 4,
                                hasher: o,
                                iterations: 1
                            }),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e)
                            },
                            compute: function(e, t) {
                                for (var n = this.cfg, i = n.hasher.create(), a = r.create(), o = a.words, s = n.keySize, l = n.iterations; o.length < s;) {
                                    u && i.update(u);
                                    var u = i.update(e).finalize(t);
                                    i.reset();
                                    for (var c = 1; l > c; c++) u = i.finalize(u), i.reset();
                                    a.concat(u)
                                }
                                return a.sigBytes = 4 * s, a
                            }
                        });
                    t.EvpKDF = function(e, t, n) {
                        return s.create(n).compute(e, t)
                    }
                }(), e.EvpKDF
            })
        }, function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function(t) {
                    function n(e, t, n, i, r, a, o) {
                        var s = e + (t & n | ~t & i) + r + o;
                        return (s << a | s >>> 32 - a) + t
                    }

                    function i(e, t, n, i, r, a, o) {
                        var s = e + (t & i | n & ~i) + r + o;
                        return (s << a | s >>> 32 - a) + t
                    }

                    function r(e, t, n, i, r, a, o) {
                        var s = e + (t ^ n ^ i) + r + o;
                        return (s << a | s >>> 32 - a) + t
                    }

                    function a(e, t, n, i, r, a, o) {
                        var s = e + (n ^ (t | ~i)) + r + o;
                        return (s << a | s >>> 32 - a) + t
                    }
                    var o = e,
                        s = o.lib,
                        l = s.WordArray,
                        u = s.Hasher,
                        c = o.algo,
                        f = [];
                    ! function() {
                        for (var e = 0; 64 > e; e++) f[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
                    }();
                    var h = c.MD5 = u.extend({
                        _doReset: function() {
                            this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878])
                        },
                        _doProcessBlock: function(e, t) {
                            for (var o = 0; 16 > o; o++) {
                                var s = t + o,
                                    l = e[s];
                                e[s] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                            }
                            var u = this._hash.words,
                                c = e[t + 0],
                                h = e[t + 1],
                                d = e[t + 2],
                                v = e[t + 3],
                                p = e[t + 4],
                                g = e[t + 5],
                                y = e[t + 6],
                                m = e[t + 7],
                                E = e[t + 8],
                                b = e[t + 9],
                                k = e[t + 10],
                                _ = e[t + 11],
                                A = e[t + 12],
                                T = e[t + 13],
                                L = e[t + 14],
                                S = e[t + 15],
                                R = u[0],
                                O = u[1],
                                w = u[2],
                                C = u[3];
                            R = n(R, O, w, C, c, 7, f[0]), C = n(C, R, O, w, h, 12, f[1]), w = n(w, C, R, O, d, 17, f[2]), O = n(O, w, C, R, v, 22, f[3]), R = n(R, O, w, C, p, 7, f[4]), C = n(C, R, O, w, g, 12, f[5]), w = n(w, C, R, O, y, 17, f[6]), O = n(O, w, C, R, m, 22, f[7]), R = n(R, O, w, C, E, 7, f[8]), C = n(C, R, O, w, b, 12, f[9]), w = n(w, C, R, O, k, 17, f[10]), O = n(O, w, C, R, _, 22, f[11]), R = n(R, O, w, C, A, 7, f[12]), C = n(C, R, O, w, T, 12, f[13]), w = n(w, C, R, O, L, 17, f[14]), O = n(O, w, C, R, S, 22, f[15]), R = i(R, O, w, C, h, 5, f[16]), C = i(C, R, O, w, y, 9, f[17]), w = i(w, C, R, O, _, 14, f[18]), O = i(O, w, C, R, c, 20, f[19]), R = i(R, O, w, C, g, 5, f[20]), C = i(C, R, O, w, k, 9, f[21]), w = i(w, C, R, O, S, 14, f[22]), O = i(O, w, C, R, p, 20, f[23]), R = i(R, O, w, C, b, 5, f[24]), C = i(C, R, O, w, L, 9, f[25]), w = i(w, C, R, O, v, 14, f[26]), O = i(O, w, C, R, E, 20, f[27]), R = i(R, O, w, C, T, 5, f[28]), C = i(C, R, O, w, d, 9, f[29]), w = i(w, C, R, O, m, 14, f[30]), O = i(O, w, C, R, A, 20, f[31]), R = r(R, O, w, C, g, 4, f[32]), C = r(C, R, O, w, E, 11, f[33]), w = r(w, C, R, O, _, 16, f[34]), O = r(O, w, C, R, L, 23, f[35]), R = r(R, O, w, C, h, 4, f[36]), C = r(C, R, O, w, p, 11, f[37]), w = r(w, C, R, O, m, 16, f[38]), O = r(O, w, C, R, k, 23, f[39]), R = r(R, O, w, C, T, 4, f[40]), C = r(C, R, O, w, c, 11, f[41]), w = r(w, C, R, O, v, 16, f[42]), O = r(O, w, C, R, y, 23, f[43]), R = r(R, O, w, C, b, 4, f[44]), C = r(C, R, O, w, A, 11, f[45]), w = r(w, C, R, O, S, 16, f[46]), O = r(O, w, C, R, d, 23, f[47]), R = a(R, O, w, C, c, 6, f[48]), C = a(C, R, O, w, m, 10, f[49]), w = a(w, C, R, O, L, 15, f[50]), O = a(O, w, C, R, g, 21, f[51]), R = a(R, O, w, C, A, 6, f[52]), C = a(C, R, O, w, v, 10, f[53]), w = a(w, C, R, O, k, 15, f[54]), O = a(O, w, C, R, h, 21, f[55]), R = a(R, O, w, C, E, 6, f[56]), C = a(C, R, O, w, S, 10, f[57]), w = a(w, C, R, O, y, 15, f[58]), O = a(O, w, C, R, T, 21, f[59]), R = a(R, O, w, C, p, 6, f[60]), C = a(C, R, O, w, _, 10, f[61]), w = a(w, C, R, O, d, 15, f[62]), O = a(O, w, C, R, b, 21, f[63]), u[0] = u[0] + R | 0, u[1] = u[1] + O | 0, u[2] = u[2] + w | 0, u[3] = u[3] + C | 0
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                n = e.words,
                                i = 8 * this._nDataBytes,
                                r = 8 * e.sigBytes;
                            n[r >>> 5] |= 128 << 24 - r % 32;
                            var a = t.floor(i / 4294967296),
                                o = i;
                            n[(r + 64 >>> 9 << 4) + 15] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[(r + 64 >>> 9 << 4) + 14] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e.sigBytes = 4 * (n.length + 1), this._process();
                            for (var s = this._hash, l = s.words, u = 0; 4 > u; u++) {
                                var c = l[u];
                                l[u] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                            }
                            return s
                        },
                        clone: function d() {
                            var d = u.clone.call(this);
                            return d._hash = this._hash.clone(), d
                        }
                    });
                    o.MD5 = u._createHelper(h), o.HmacMD5 = u._createHmacHelper(h)
                }(Math), e.MD5
            })
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                s = n(4),
                l = n(3),
                u = i(l),
                c = function(e) {
                    function t() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        r(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.uniqueId = (0, s.uniqueId)("o")
                    }
                    return a(t, e), t
                }(u["default"]);
            t["default"] = c, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(4),
                u = n(13),
                c = i(u),
                f = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.settings = {}
                    }
                    return a(t, e), o(t, [{
                        key: "play",
                        value: function() {}
                    }, {
                        key: "pause",
                        value: function() {}
                    }, {
                        key: "stop",
                        value: function() {}
                    }, {
                        key: "seek",
                        value: function(e) {}
                    }, {
                        key: "getDuration",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "isPlaying",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "getPlaybackType",
                        value: function() {
                            return t.NO_OP
                        }
                    }, {
                        key: "isHighDefinitionInUse",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "volume",
                        value: function(e) {}
                    }, {
                        key: "destroy",
                        value: function() {
                            this.$el.remove()
                        }
                    }]), t
                }(c["default"]);
            t["default"] = f, f.extend = function(e) {
                return (0, l.extend)(f, e)
            }, f.VOD = "vod", f.AOD = "aod", f.LIVE = "live", f.NO_OP = "no_op", f.canPlay = function(e, t) {
                return !1
            }, f.type = "playback", e.exports = t["default"]
        }, function(e, t, n) {
            var i, r;
            ! function(n) {
                var a = {
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g,
                        escape: /<%-([\s\S]+?)%>/g
                    },
                    o = /(.)^/,
                    s = {
                        "'": "'",
                        "\\": "\\",
                        "\r": "r",
                        "\n": "n",
                        "	": "t",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    l = /\\|'|\r|\n|\t|\u2028|\u2029/g,
                    u = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;"
                    },
                    c = new RegExp("[&<>\"']", "g"),
                    f = function(e) {
                        return null == e ? "" : ("" + e).replace(c, function(e) {
                            return u[e]
                        })
                    },
                    h = 0,
                    d = function(e, t) {
                        var n, i = new RegExp([(a.escape || o).source, (a.interpolate || o).source, (a.evaluate || o).source].join("|") + "|$", "g"),
                            r = 0,
                            u = "__p+='";
                        e.replace(i, function(t, n, i, a, o) {
                            return u += e.slice(r, o).replace(l, function(e) {
                                return "\\" + s[e]
                            }), n && (u += "'+\n((__t=(" + n + "))==null?'':escapeExpr(__t))+\n'"), i && (u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), a && (u += "';\n" + a + "\n__p+='"), r = o + t.length, t
                        }), u += "';\n", a.variable || (u = "with(obj||{}){\n" + u + "}\n"), u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n//# sourceURL=/microtemplates/source[" + h++ + "]";
                        try {
                            n = new Function(a.variable || "obj", "escapeExpr", u)
                        } catch (c) {
                            throw c.source = u, c
                        }
                        if (t) return n(t, f);
                        var d = function(e) {
                            return n.call(this, e, f)
                        };
                        return d.source = "function(" + (a.variable || "obj") + "){\n" + u + "}", d
                    };
                d.settings = a, i = [], r = function() {
                    return d
                }.apply(t, i), !(void 0 !== r && (e.exports = r))
            }(void 0)
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(4),
                u = n(6),
                c = i(u),
                f = n(67),
                h = i(f),
                d = n(10),
                v = i(d),
                p = /^(\S+)\s*(.*)$/,
                g = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.cid = (0, l.uniqueId)("c"), this._ensureElement(), this.delegateEvents()
                    }
                    return a(t, e), o(t, [{
                        key: "tagName",
                        get: function() {
                            return "div"
                        }
                    }, {
                        key: "events",
                        get: function() {
                            return {}
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return {}
                        }
                    }]), o(t, [{
                        key: "$",
                        value: function(e) {
                            return this.$el.find(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            return this.$el.remove(), this.stopListening(), this.undelegateEvents(), this
                        }
                    }, {
                        key: "setElement",
                        value: function(e, t) {
                            return this.$el && this.undelegateEvents(), this.$el = e instanceof c["default"] ? e : (0, c["default"])(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
                        }
                    }, {
                        key: "delegateEvents",
                        value: function(e) {
                            if (!e && !(e = (0, h["default"])(this, "events"))) return this;
                            this.undelegateEvents();
                            for (var t in e) {
                                var n = e[t];
                                if (n && n.constructor !== Function && (n = this[e[t]]), n) {
                                    var i = t.match(p),
                                        r = i[1],
                                        a = i[2];
                                    r += ".delegateEvents" + this.cid, "" === a ? this.$el.on(r, n.bind(this)) : this.$el.on(r, a, n.bind(this))
                                }
                            }
                            return this
                        }
                    }, {
                        key: "undelegateEvents",
                        value: function() {
                            return this.$el.off(".delegateEvents" + this.cid), this
                        }
                    }, {
                        key: "_ensureElement",
                        value: function() {
                            if (this.el) this.setElement((0, h["default"])(this, "el"), !1);
                            else {
                                var e = c["default"].extend({}, (0, h["default"])(this, "attributes"));
                                this.id && (e.id = (0, h["default"])(this, "id")), this.className && (e["class"] = (0, h["default"])(this, "className"));
                                var t = (0, c["default"])("<" + (0, h["default"])(this, "tagName") + ">").attr(e);
                                this.setElement(t, !1)
                            }
                        }
                    }]), t
                }(v["default"]);
            t["default"] = g, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function(t) {
                    var n = e,
                        i = n.lib,
                        r = i.Base,
                        a = i.WordArray,
                        o = n.x64 = {};
                    o.Word = r.extend({
                        init: function(e, t) {
                            this.high = e, this.low = t
                        }
                    }), o.WordArray = r.extend({
                        init: function(e, n) {
                            e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 8 * e.length
                        },
                        toX32: function() {
                            for (var e = this.words, t = e.length, n = [], i = 0; t > i; i++) {
                                var r = e[i];
                                n.push(r.high), n.push(r.low)
                            }
                            return a.create(n, this.sigBytes)
                        },
                        clone: function s() {
                            for (var s = r.clone.call(this), e = s.words = this.words.slice(0), t = e.length, n = 0; t > n; n++) e[n] = e[n].clone();
                            return s
                        }
                    })
                }(), e
            })
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                return function(n, i, a) {
                    if (i = r(i, a, 3), l(n)) {
                        var u = s(n, i, t);
                        return u > -1 ? n[u] : void 0
                    }
                    return o(n, i, e)
                }
            }
            var r = n(55),
                a = n(60),
                o = n(61),
                s = n(62),
                l = n(16),
                u = i(a);
            e.exports = u
        }, function(e, t) {
            "use strict";

            function n(e) {
                return !!e && "object" == typeof e
            }

            function i(e, t) {
                var n = null == e ? void 0 : e[t];
                return s(n) ? n : void 0
            }

            function r(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && y >= e
            }

            function a(e) {
                return o(e) && v.call(e) == u
            }

            function o(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function s(e) {
                return null == e ? !1 : a(e) ? p.test(h.call(e)) : n(e) && c.test(e)
            }
            var l = "[object Array]",
                u = "[object Function]",
                c = /^\[object .+?Constructor\]$/,
                f = Object.prototype,
                h = Function.prototype.toString,
                d = f.hasOwnProperty,
                v = f.toString,
                p = RegExp("^" + h.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                g = i(Array, "isArray"),
                y = 9007199254740991,
                m = g || function(e) {
                    return n(e) && r(e.length) && v.call(e) == l
                };
            e.exports = m
        }, 16, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(3),
                o = i(a),
                s = new o["default"],
                l = function u() {
                    r(this, u)
                };
            t["default"] = l, l.on = function(e, t, n) {
                s.on(e, t, n)
            }, l.once = function(e, t, n) {
                s.once(e, t, n)
            }, l.off = function(e, t, n) {
                s.off(e, t, n)
            }, l.trigger = function(e, t) {
                s.trigger.apply(s, Array.prototype.slice.call(arguments))
            }, l.stopListening = function(e, t, n) {
                s.stopListening(e, t, n)
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                ! function() {
                    var t = e,
                        n = t.lib,
                        i = n.Base,
                        r = t.enc,
                        a = r.Utf8,
                        o = t.algo;
                    o.HMAC = i.extend({
                        init: function(e, t) {
                            e = this._hasher = new e.init, "string" == typeof t && (t = a.parse(t));
                            var n = e.blockSize,
                                i = 4 * n;
                            t.sigBytes > i && (t = e.finalize(t)), t.clamp();
                            for (var r = this._oKey = t.clone(), o = this._iKey = t.clone(), s = r.words, l = o.words, u = 0; n > u; u++) s[u] ^= 1549556828, l[u] ^= 909522486;
                            r.sigBytes = o.sigBytes = i, this.reset()
                        },
                        reset: function() {
                            var e = this._hasher;
                            e.reset(), e.update(this._iKey)
                        },
                        update: function(e) {
                            return this._hasher.update(e), this
                        },
                        finalize: function(e) {
                            var t = this._hasher,
                                n = t.finalize(e);
                            t.reset();
                            var i = t.finalize(this._oKey.clone().concat(n));
                            return i
                        }
                    })
                }()
            })
        }, function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.WordArray,
                        r = n.Hasher,
                        a = t.algo,
                        o = [],
                        s = a.SHA1 = r.extend({
                            _doReset: function() {
                                this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, i = n[0], r = n[1], a = n[2], s = n[3], l = n[4], u = 0; 80 > u; u++) {
                                    if (16 > u) o[u] = 0 | e[t + u];
                                    else {
                                        var c = o[u - 3] ^ o[u - 8] ^ o[u - 14] ^ o[u - 16];
                                        o[u] = c << 1 | c >>> 31
                                    }
                                    var f = (i << 5 | i >>> 27) + l + o[u];
                                    f += 20 > u ? (r & a | ~r & s) + 1518500249 : 40 > u ? (r ^ a ^ s) + 1859775393 : 60 > u ? (r & a | r & s | a & s) - 1894007588 : (r ^ a ^ s) - 899497514, l = s, s = a, a = r << 30 | r >>> 2, r = i, i = f
                                }
                                n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + l | 0
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    t = e.words,
                                    n = 8 * this._nDataBytes,
                                    i = 8 * e.sigBytes;
                                return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                            },
                            clone: function l() {
                                var l = r.clone.call(this);
                                return l._hash = this._hash.clone(), l
                            }
                        });
                    t.SHA1 = r._createHelper(s), t.HmacSHA1 = r._createHmacHelper(s)
                }(), e.SHA1
            })
        },
        [124, 63, 64, 16],
        function(e, t) {
            "use strict";

            function n(e) {
                return !!e && "object" == typeof e
            }

            function i(e, t) {
                var n = null == e ? void 0 : e[t];
                return o(n) ? n : void 0
            }

            function r(e) {
                return a(e) && h.call(e) == s
            }

            function a(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function o(e) {
                return null == e ? !1 : r(e) ? d.test(c.call(e)) : n(e) && l.test(e)
            }
            var s = "[object Function]",
                l = /^\[object .+?Constructor\]$/,
                u = Object.prototype,
                c = Function.prototype.toString,
                f = u.hasOwnProperty,
                h = u.toString,
                d = RegExp("^" + c.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = i
        },
        function(e, t) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function r() {
                n(this, r), this.options = {}, this.playbackPlugins = [], this.currentSize = {
                    width: 0,
                    height: 0
                }
            };
            i._players = {}, i.getInstance = function(e) {
                return i._players[e] || (i._players[e] = new i)
            }, t["default"] = i, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function(t) {
                    var n = e,
                        i = n.lib,
                        r = i.WordArray,
                        a = i.Hasher,
                        o = n.algo,
                        s = [],
                        l = [];
                    ! function() {
                        function e(e) {
                            for (var n = t.sqrt(e), i = 2; n >= i; i++)
                                if (!(e % i)) return !1;
                            return !0
                        }

                        function n(e) {
                            return 4294967296 * (e - (0 | e)) | 0
                        }
                        for (var i = 2, r = 0; 64 > r;) e(i) && (8 > r && (s[r] = n(t.pow(i, .5))), l[r] = n(t.pow(i, 1 / 3)), r++), i++
                    }();
                    var u = [],
                        c = o.SHA256 = a.extend({
                            _doReset: function() {
                                this._hash = new r.init(s.slice(0))
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, i = n[0], r = n[1], a = n[2], o = n[3], s = n[4], c = n[5], f = n[6], h = n[7], d = 0; 64 > d; d++) {
                                    if (16 > d) u[d] = 0 | e[t + d];
                                    else {
                                        var v = u[d - 15],
                                            p = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3,
                                            g = u[d - 2],
                                            y = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                                        u[d] = p + u[d - 7] + y + u[d - 16]
                                    }
                                    var m = s & c ^ ~s & f,
                                        E = i & r ^ i & a ^ r & a,
                                        b = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                                        k = (s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25),
                                        _ = h + k + m + l[d] + u[d],
                                        A = b + E;
                                    h = f, f = c, c = s, s = o + _ | 0, o = a, a = r, r = i, i = _ + A | 0
                                }
                                n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + a | 0, n[3] = n[3] + o | 0, n[4] = n[4] + s | 0, n[5] = n[5] + c | 0, n[6] = n[6] + f | 0, n[7] = n[7] + h | 0
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    n = e.words,
                                    i = 8 * this._nDataBytes,
                                    r = 8 * e.sigBytes;
                                return n[r >>> 5] |= 128 << 24 - r % 32, n[(r + 64 >>> 9 << 4) + 14] = t.floor(i / 4294967296), n[(r + 64 >>> 9 << 4) + 15] = i, e.sigBytes = 4 * n.length, this._process(), this._hash
                            },
                            clone: function f() {
                                var f = a.clone.call(this);
                                return f._hash = this._hash.clone(), f
                            }
                        });
                    n.SHA256 = a._createHelper(c), n.HmacSHA256 = a._createHmacHelper(c)
                }(Math), e.SHA256
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(14))
            }(void 0, function(e) {
                return function() {
                    function t() {
                        return o.create.apply(o, arguments)
                    }
                    var n = e,
                        i = n.lib,
                        r = i.Hasher,
                        a = n.x64,
                        o = a.Word,
                        s = a.WordArray,
                        l = n.algo,
                        u = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)],
                        c = [];
                    ! function() {
                        for (var e = 0; 80 > e; e++) c[e] = t()
                    }();
                    var f = l.SHA512 = r.extend({
                        _doReset: function() {
                            this._hash = new s.init([new o.init(1779033703, 4089235720), new o.init(3144134277, 2227873595), new o.init(1013904242, 4271175723), new o.init(2773480762, 1595750129), new o.init(1359893119, 2917565137), new o.init(2600822924, 725511199), new o.init(528734635, 4215389547), new o.init(1541459225, 327033209)])
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = this._hash.words, i = n[0], r = n[1], a = n[2], o = n[3], s = n[4], l = n[5], f = n[6], h = n[7], d = i.high, v = i.low, p = r.high, g = r.low, y = a.high, m = a.low, E = o.high, b = o.low, k = s.high, _ = s.low, A = l.high, T = l.low, L = f.high, S = f.low, R = h.high, O = h.low, w = d, C = v, D = p, P = g, I = y, x = m, N = E, M = b, B = k, F = _, j = A, U = T, G = L, V = S, Y = R, K = O, H = 0; 80 > H; H++) {
                                var z = c[H];
                                if (16 > H) var $ = z.high = 0 | e[t + 2 * H],
                                    W = z.low = 0 | e[t + 2 * H + 1];
                                else {
                                    var q = c[H - 15],
                                        X = q.high,
                                        Z = q.low,
                                        J = (X >>> 1 | Z << 31) ^ (X >>> 8 | Z << 24) ^ X >>> 7,
                                        Q = (Z >>> 1 | X << 31) ^ (Z >>> 8 | X << 24) ^ (Z >>> 7 | X << 25),
                                        ee = c[H - 2],
                                        te = ee.high,
                                        ne = ee.low,
                                        ie = (te >>> 19 | ne << 13) ^ (te << 3 | ne >>> 29) ^ te >>> 6,
                                        re = (ne >>> 19 | te << 13) ^ (ne << 3 | te >>> 29) ^ (ne >>> 6 | te << 26),
                                        ae = c[H - 7],
                                        oe = ae.high,
                                        se = ae.low,
                                        le = c[H - 16],
                                        ue = le.high,
                                        ce = le.low,
                                        W = Q + se,
                                        $ = J + oe + (Q >>> 0 > W >>> 0 ? 1 : 0),
                                        W = W + re,
                                        $ = $ + ie + (re >>> 0 > W >>> 0 ? 1 : 0),
                                        W = W + ce,
                                        $ = $ + ue + (ce >>> 0 > W >>> 0 ? 1 : 0);
                                    z.high = $, z.low = W
                                }
                                var fe = B & j ^ ~B & G,
                                    he = F & U ^ ~F & V,
                                    de = w & D ^ w & I ^ D & I,
                                    ve = C & P ^ C & x ^ P & x,
                                    pe = (w >>> 28 | C << 4) ^ (w << 30 | C >>> 2) ^ (w << 25 | C >>> 7),
                                    ge = (C >>> 28 | w << 4) ^ (C << 30 | w >>> 2) ^ (C << 25 | w >>> 7),
                                    ye = (B >>> 14 | F << 18) ^ (B >>> 18 | F << 14) ^ (B << 23 | F >>> 9),
                                    me = (F >>> 14 | B << 18) ^ (F >>> 18 | B << 14) ^ (F << 23 | B >>> 9),
                                    Ee = u[H],
                                    be = Ee.high,
                                    ke = Ee.low,
                                    _e = K + me,
                                    Ae = Y + ye + (K >>> 0 > _e >>> 0 ? 1 : 0),
                                    _e = _e + he,
                                    Ae = Ae + fe + (he >>> 0 > _e >>> 0 ? 1 : 0),
                                    _e = _e + ke,
                                    Ae = Ae + be + (ke >>> 0 > _e >>> 0 ? 1 : 0),
                                    _e = _e + W,
                                    Ae = Ae + $ + (W >>> 0 > _e >>> 0 ? 1 : 0),
                                    Te = ge + ve,
                                    Le = pe + de + (ge >>> 0 > Te >>> 0 ? 1 : 0);
                                Y = G, K = V, G = j, V = U, j = B, U = F, F = M + _e | 0, B = N + Ae + (M >>> 0 > F >>> 0 ? 1 : 0) | 0, N = I, M = x, I = D, x = P, D = w, P = C, C = _e + Te | 0, w = Ae + Le + (_e >>> 0 > C >>> 0 ? 1 : 0) | 0
                            }
                            v = i.low = v + C, i.high = d + w + (C >>> 0 > v >>> 0 ? 1 : 0), g = r.low = g + P, r.high = p + D + (P >>> 0 > g >>> 0 ? 1 : 0), m = a.low = m + x, a.high = y + I + (x >>> 0 > m >>> 0 ? 1 : 0), b = o.low = b + M, o.high = E + N + (M >>> 0 > b >>> 0 ? 1 : 0), _ = s.low = _ + F, s.high = k + B + (F >>> 0 > _ >>> 0 ? 1 : 0), T = l.low = T + U, l.high = A + j + (U >>> 0 > T >>> 0 ? 1 : 0), S = f.low = S + V, f.high = L + G + (V >>> 0 > S >>> 0 ? 1 : 0), O = h.low = O + K, h.high = R + Y + (K >>> 0 > O >>> 0 ? 1 : 0)
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                t = e.words,
                                n = 8 * this._nDataBytes,
                                i = 8 * e.sigBytes;
                            t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 128 >>> 10 << 5) + 30] = Math.floor(n / 4294967296), t[(i + 128 >>> 10 << 5) + 31] = n, e.sigBytes = 4 * t.length, this._process();
                            var r = this._hash.toX32();
                            return r
                        },
                        clone: function h() {
                            var h = r.clone.call(this);
                            return h._hash = this._hash.clone(), h
                        },
                        blockSize: 32
                    });
                    n.SHA512 = r._createHelper(f), n.HmacSHA512 = r._createHmacHelper(f)
                }(), e.SHA512
            })
        },
        16,
        function(e, t) {
            "use strict";

            function n() {
                u = !1, o.length ? l = o.concat(l) : c = -1, l.length && i()
            }

            function i() {
                if (!u) {
                    var e = setTimeout(n);
                    u = !0;
                    for (var t = l.length; t;) {
                        for (o = l, l = []; ++c < t;) o && o[c].run();
                        c = -1, t = l.length
                    }
                    o = null, u = !1, clearTimeout(e)
                }
            }

            function r(e, t) {
                this.fun = e, this.array = t
            }

            function a() {}
            var o, s = e.exports = {},
                l = [],
                u = !1,
                c = -1;
            s.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new r(e, t)), 1 !== l.length || u || setTimeout(i, 0)
            }, r.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = a, s.addListener = a, s.once = a, s.off = a, s.removeListener = a, s.removeAllListeners = a, s.emit = a, s.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, s.cwd = function() {
                return "/"
            }, s.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, s.umask = function() {
                return 0
            }
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                this.element = e || window.document, this.initialize()
            };
            n.KEY_NAMES_BY_CODE = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "caps_lock",
                    27: "esc",
                    32: "space",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    112: "f1",
                    113: "f2",
                    114: "f3",
                    115: "f4",
                    116: "f5",
                    117: "f6",
                    118: "f7",
                    119: "f8",
                    120: "f9",
                    121: "f10",
                    122: "f11",
                    123: "f12"
                }, n.KEY_CODES_BY_NAME = {},
                function() {
                    for (var e in n.KEY_NAMES_BY_CODE) Object.prototype.hasOwnProperty.call(n.KEY_NAMES_BY_CODE, e) && (n.KEY_CODES_BY_NAME[n.KEY_NAMES_BY_CODE[e]] = +e)
                }(), n.MODIFIERS = ["shift", "ctrl", "alt"], n.registerEvent = function() {
                    return document.addEventListener ? function(e, t, n) {
                        e.addEventListener(t, n, !1)
                    } : document.attachEvent ? function(e, t, n) {
                        e.attachEvent("on" + t, n)
                    } : void 0
                }(), n.unregisterEvent = function() {
                    return document.removeEventListener ? function(e, t, n) {
                        e.removeEventListener(t, n, !1)
                    } : document.detachEvent ? function(e, t, n) {
                        e.detachEvent("on" + t, n)
                    } : void 0
                }(), n.stringContains = function(e, t) {
                    return -1 !== e.indexOf(t)
                }, n.neatString = function(e) {
                    return e.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")
                }, n.capitalize = function(e) {
                    return e.toLowerCase().replace(/^./, function(e) {
                        return e.toUpperCase()
                    })
                }, n.isString = function(e) {
                    return n.stringContains(Object.prototype.toString.call(e), "String")
                }, n.arrayIncludes = function() {
                    return Array.prototype.indexOf ? function(e, t) {
                        return -1 !== e.indexOf(t)
                    } : function(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n] === t) return !0;
                        return !1
                    }
                }(), n.extractModifiers = function(e) {
                    var t, i;
                    for (t = [], i = 0; i < n.MODIFIERS.length; i++) n.stringContains(e, n.MODIFIERS[i]) && t.push(n.MODIFIERS[i]);
                    return t
                }, n.extractKey = function(e) {
                    var t, i;
                    for (t = n.neatString(e).split(" "), i = 0; i < t.length; i++)
                        if (!n.arrayIncludes(n.MODIFIERS, t[i])) return t[i]
                }, n.modifiersAndKey = function(e) {
                    var t, i;
                    return n.stringContains(e, "any") ? n.neatString(e).split(" ").slice(0, 2).join(" ") : (t = n.extractModifiers(e), i = n.extractKey(e), i && !n.arrayIncludes(n.MODIFIERS, i) && t.push(i), t.join(" "))
                }, n.keyName = function(e) {
                    return n.KEY_NAMES_BY_CODE[e + ""]
                }, n.keyCode = function(e) {
                    return +n.KEY_CODES_BY_NAME[e]
                }, n.prototype.initialize = function() {
                    var e, t = this;
                    for (this.lastKeyCode = -1, this.lastModifiers = {}, e = 0; e < n.MODIFIERS.length; e++) this.lastModifiers[n.MODIFIERS[e]] = !1;
                    this.keysDown = {
                        any: []
                    }, this.keysUp = {
                        any: []
                    }, this.downHandler = this.handler("down"), this.upHandler = this.handler("up"), n.registerEvent(this.element, "keydown", this.downHandler), n.registerEvent(this.element, "keyup", this.upHandler), n.registerEvent(window, "unload", function i() {
                        n.unregisterEvent(t.element, "keydown", t.downHandler), n.unregisterEvent(t.element, "keyup", t.upHandler), n.unregisterEvent(window, "unload", i)
                    })
                }, n.prototype.handler = function(e) {
                    var t = this;
                    return function(i) {
                        var r, a, o;
                        for (i = i || window.event, t.lastKeyCode = i.keyCode, r = 0; r < n.MODIFIERS.length; r++) t.lastModifiers[n.MODIFIERS[r]] = i[n.MODIFIERS[r] + "Key"];
                        for (n.arrayIncludes(n.MODIFIERS, n.keyName(t.lastKeyCode)) && (t.lastModifiers[n.keyName(t.lastKeyCode)] = !0), a = t["keys" + n.capitalize(e)], r = 0; r < a.any.length; r++) a.any[r](i) === !1 && i.preventDefault && i.preventDefault();
                        if (o = t.lastModifiersAndKey(), a[o])
                            for (r = 0; r < a[o].length; r++) a[o][r](i) === !1 && i.preventDefault && i.preventDefault()
                    }
                }, n.prototype.registerKeys = function(e, t, i) {
                    var r, a, o = this["keys" + n.capitalize(e)];
                    for (n.isString(t) && (t = [t]), r = 0; r < t.length; r++) a = t[r], a = n.modifiersAndKey(a + ""), o[a] ? o[a].push(i) : o[a] = [i];
                    return this
                }, n.prototype.unregisterKeys = function(e, t, i) {
                    var r, a, o, s = this["keys" + n.capitalize(e)];
                    for (n.isString(t) && (t = [t]), r = 0; r < t.length; r++)
                        if (o = t[r], o = n.modifiersAndKey(o + ""), null === i) delete s[o];
                        else if (s[o])
                        for (a = 0; a < s[o].length; a++)
                            if (String(s[o][a]) === String(i)) {
                                s[o].splice(a, 1);
                                break
                            }
                    return this
                }, n.prototype.off = function(e) {
                    return this.unregisterKeys("down", e, null)
                }, n.prototype.delegate = function(e, t, n) {
                    return null !== n || void 0 !== n ? this.registerKeys(e, t, n) : this.unregisterKeys(e, t, n)
                }, n.prototype.down = function(e, t) {
                    return this.delegate("down", e, t)
                }, n.prototype.up = function(e, t) {
                    return this.delegate("up", e, t)
                }, n.prototype.lastKey = function(e) {
                    return e ? this.lastModifiers[e] : n.keyName(this.lastKeyCode)
                }, n.prototype.lastModifiersAndKey = function() {
                    var e, t;
                    for (e = [], t = 0; t < n.MODIFIERS.length; t++) this.lastKey(n.MODIFIERS[t]) && e.push(n.MODIFIERS[t]);
                    return n.arrayIncludes(e, this.lastKey()) || e.push(this.lastKey()), e.join(" ")
                }, t["default"] = n, e.exports = t["default"]
        },
        function(e, t, n) {
            var i, i;
            ! function(t) {
                e.exports = t()
            }(function() {
                return function e(t, n, r) {
                    function a(s, l) {
                        if (!n[s]) {
                            if (!t[s]) {
                                var u = "function" == typeof i && i;
                                if (!l && u) return i(s, !0);
                                if (o) return o(s, !0);
                                var c = new Error("Cannot find module '" + s + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var f = n[s] = {
                                exports: {}
                            };
                            t[s][0].call(f.exports, function(e) {
                                var n = t[s][1][e];
                                return a(n ? n : e)
                            }, f, f.exports, e, t, n, r)
                        }
                        return n[s].exports
                    }
                    for (var o = "function" == typeof i && i, s = 0; s < r.length; s++) a(r[s]);
                    return a
                }({
                    1: [function(e, t, n) {
                        function i() {
                            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                        }

                        function r(e) {
                            return "function" == typeof e
                        }

                        function a(e) {
                            return "number" == typeof e
                        }

                        function o(e) {
                            return "object" == typeof e && null !== e
                        }

                        function s(e) {
                            return void 0 === e
                        }
                        t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
                            if (!a(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
                            return this._maxListeners = e, this
                        }, i.prototype.emit = function(e) {
                            var t, n, i, a, l, u;
                            if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                                if (t = arguments[1], t instanceof Error) throw t;
                                throw TypeError('Uncaught, unspecified "error" event.')
                            }
                            if (n = this._events[e], s(n)) return !1;
                            if (r(n)) switch (arguments.length) {
                                case 1:
                                    n.call(this);
                                    break;
                                case 2:
                                    n.call(this, arguments[1]);
                                    break;
                                case 3:
                                    n.call(this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
                            } else if (o(n))
                                for (a = Array.prototype.slice.call(arguments, 1), u = n.slice(), i = u.length, l = 0; i > l; l++) u[l].apply(this, a);
                            return !0
                        }, i.prototype.addListener = function(e, t) {
                            var n;
                            if (!r(t)) throw TypeError("listener must be a function");
                            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (n = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
                        }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
                            function n() {
                                this.removeListener(e, n), i || (i = !0, t.apply(this, arguments))
                            }
                            if (!r(t)) throw TypeError("listener must be a function");
                            var i = !1;
                            return n.listener = t, this.on(e, n), this
                        }, i.prototype.removeListener = function(e, t) {
                            var n, i, a, s;
                            if (!r(t)) throw TypeError("listener must be a function");
                            if (!this._events || !this._events[e]) return this;
                            if (n = this._events[e], a = n.length, i = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                            else if (o(n)) {
                                for (s = a; s-- > 0;)
                                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                                        i = s;
                                        break
                                    }
                                if (0 > i) return this;
                                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
                            }
                            return this
                        }, i.prototype.removeAllListeners = function(e) {
                            var t, n;
                            if (!this._events) return this;
                            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                            if (0 === arguments.length) {
                                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                                return this.removeAllListeners("removeListener"), this._events = {}, this
                            }
                            if (n = this._events[e], r(n)) this.removeListener(e, n);
                            else if (n)
                                for (; n.length;) this.removeListener(e, n[n.length - 1]);
                            return delete this._events[e], this
                        }, i.prototype.listeners = function(e) {
                            var t;
                            return t = this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                        }, i.prototype.listenerCount = function(e) {
                            if (this._events) {
                                var t = this._events[e];
                                if (r(t)) return 1;
                                if (t) return t.length
                            }
                            return 0
                        }, i.listenerCount = function(e, t) {
                            return e.listenerCount(t)
                        }
                    }, {}],
                    2: [function(e, t, n) {
                        var i = arguments[3],
                            r = arguments[4],
                            a = arguments[5],
                            o = JSON.stringify;
                        t.exports = function(e) {
                            for (var t, n = Object.keys(a), s = 0, l = n.length; l > s; s++) {
                                var u = n[s],
                                    c = a[u].exports;
                                if (c === e || c["default"] === e) {
                                    t = u;
                                    break
                                }
                            }
                            if (!t) {
                                t = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                                for (var f = {}, s = 0, l = n.length; l > s; s++) {
                                    var u = n[s];
                                    f[u] = u
                                }
                                r[t] = [Function(["require", "module", "exports"], "(" + e + ")(self)"), f]
                            }
                            var h = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
                                d = {};
                            d[t] = t, r[h] = [Function(["require"], "var f = require(" + o(t) + ");(f.default ? f.default : f)(self);"), d];
                            var v = "(" + i + ")({" + Object.keys(r).map(function(e) {
                                    return o(e) + ":[" + r[e][0] + "," + o(r[e][1]) + "]"
                                }).join(",") + "},{},[" + o(h) + "])",
                                p = window.URL || window.webkitURL || window.mozURL || window.msURL;
                            return new Worker(p.createObjectURL(new Blob([v], {
                                type: "text/javascript"
                            })))
                        }
                    }, {}],
                    3: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(28),
                            d = i(h),
                            v = e(24),
                            p = e(43),
                            g = e(8),
                            y = i(g),
                            m = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, u["default"].FRAG_LOADING, u["default"].FRAG_LOADED, u["default"].FRAG_BUFFERED, u["default"].ERROR));
                                    return n.lastLoadedFragLevel = 0, n._autoLevelCapping = -1, n._nextAutoLevel = -1, n.hls = e, n.onCheck = n.abandonRulesCheck.bind(n), n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        this.clearTimer(), f["default"].prototype.destroy.call(this)
                                    }
                                }, {
                                    key: "onFragLoading",
                                    value: function(e) {
                                        var t = e.frag;
                                        if ("main" === t.type) {
                                            if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this.bwEstimator) {
                                                var n = this.hls,
                                                    i = e.frag.level,
                                                    r = n.levels[i].details.live,
                                                    a = n.config,
                                                    o = void 0,
                                                    s = void 0;
                                                r ? (o = a.abrEwmaFastLive, s = a.abrEwmaSlowLive) : (o = a.abrEwmaFastVoD, s = a.abrEwmaSlowVoD), this.bwEstimator = new y["default"](n, s, o, a.abrEwmaDefaultEstimate)
                                            }
                                            this.fragCurrent = t
                                        }
                                    }
                                }, {
                                    key: "abandonRulesCheck",
                                    value: function() {
                                        var e = this.hls,
                                            t = e.media,
                                            n = this.fragCurrent,
                                            i = n.loader;
                                        if (!i || i.stats && i.stats.aborted) return p.logger.warn("frag loader destroy or aborted, disarm abandonRules"), void this.clearTimer();
                                        var r = i.stats;
                                        if (t && (!t.paused && 0 !== t.playbackRate || !t.readyState) && n.autoLevel && n.level) {
                                            var a = performance.now() - r.trequest,
                                                o = Math.abs(t.playbackRate);
                                            if (a > 500 * n.duration / o) {
                                                var s = e.levels,
                                                    l = Math.max(1, r.bw ? r.bw / 8 : 1e3 * r.loaded / a),
                                                    c = r.total ? r.total : Math.max(r.loaded, Math.round(n.duration * s[n.level].bitrate / 8)),
                                                    f = t.currentTime,
                                                    h = (c - r.loaded) / l,
                                                    v = (d["default"].bufferInfo(t, f, e.config.maxBufferHole).end - f) / o;
                                                if (v < 2 * n.duration / o && h > v) {
                                                    var g = void 0,
                                                        y = void 0;
                                                    for (y = n.level - 1; y >= 0 && (g = n.duration * s[y].bitrate / (6.4 * l), !(v > g)); y--);
                                                    h > g && (y = Math.max(0, y), p.logger.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (n.level - 1) + "];bufferStarvationDelay:" + g.toFixed(1) + "<" + h.toFixed(1) + ":" + v.toFixed(1)), e.nextLoadLevel = y, this.bwEstimator.sample(a, r.loaded), i.abort(), this.clearTimer(), e.trigger(u["default"].FRAG_LOAD_EMERGENCY_ABORTED, {
                                                        frag: n,
                                                        stats: r
                                                    }))
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    key: "onFragLoaded",
                                    value: function(e) {
                                        var t = e.frag;
                                        if ("main" === t.type && (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, e.frag.bitrateTest)) {
                                            var n = e.stats;
                                            n.tparsed = n.tbuffered = n.tload, this.onFragBuffered(e)
                                        }
                                    }
                                }, {
                                    key: "onFragBuffered",
                                    value: function(e) {
                                        var t = e.stats,
                                            n = e.frag;
                                        if (t.aborted !== !0 && 1 === n.loadCounter && "main" === n.type && (!n.bitrateTest || t.tload === t.tbuffered)) {
                                            var i = t.tbuffered - t.trequest;
                                            p.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this.bwEstimator.sample(i, t.loaded), n.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
                                        }
                                    }
                                }, {
                                    key: "onError",
                                    value: function(e) {
                                        switch (e.details) {
                                            case v.ErrorDetails.FRAG_LOAD_ERROR:
                                            case v.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                this.clearTimer()
                                        }
                                    }
                                }, {
                                    key: "clearTimer",
                                    value: function() {
                                        this.timer && (clearInterval(this.timer),
                                            this.timer = null)
                                    }
                                }, {
                                    key: "findBestLevel",
                                    value: function(e, t, n, i, r, a, o, s) {
                                        for (var l = i; l >= 0; l--) {
                                            var u = s[l],
                                                c = u.details,
                                                f = c ? c.totalduration / c.fragments.length : t,
                                                h = void 0;
                                            h = e >= l ? a * n : o * n;
                                            var d = s[l].bitrate,
                                                v = d * f / h;
                                            if (p.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + l + "/" + Math.round(h) + "/" + d + "/" + f + "/" + r + "/" + v), h > d && (!v || r > v)) return l
                                        }
                                        return -1
                                    }
                                }, {
                                    key: "autoLevelCapping",
                                    get: function() {
                                        return this._autoLevelCapping
                                    },
                                    set: function(e) {
                                        this._autoLevelCapping = e
                                    }
                                }, {
                                    key: "nextAutoLevel",
                                    get: function() {
                                        var e = this._nextAutoLevel,
                                            t = this.bwEstimator;
                                        if (!(-1 === e || t && t.canEstimate())) return Math.min(e, this.maxAutoLevel);
                                        var n = this.nextABRAutoLevel;
                                        return -1 !== e && (n = Math.min(e, n)), n
                                    },
                                    set: function(e) {
                                        this._nextAutoLevel = e
                                    }
                                }, {
                                    key: "maxAutoLevel",
                                    get: function() {
                                        var e, t = this.hls.levels,
                                            n = this._autoLevelCapping;
                                        return e = -1 === n && t && t.length ? t.length - 1 : n
                                    }
                                }, {
                                    key: "nextABRAutoLevel",
                                    get: function() {
                                        var e = this.hls,
                                            t = this.maxAutoLevel,
                                            n = e.levels,
                                            i = e.config,
                                            r = e.media,
                                            a = this.lastLoadedFragLevel,
                                            o = this.fragCurrent ? this.fragCurrent.duration : 0,
                                            s = r ? r.currentTime : 0,
                                            l = r && 0 !== r.playbackRate ? Math.abs(r.playbackRate) : 1,
                                            u = this.bwEstimator ? this.bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
                                            c = (d["default"].bufferInfo(r, s, i.maxBufferHole).end - s) / l,
                                            f = this.findBestLevel(a, o, u, t, c, i.abrBandWidthFactor, i.abrBandWidthUpFactor, n);
                                        if (f >= 0) return f;
                                        p.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                                        var h = i.maxStarvationDelay,
                                            v = i.abrBandWidthFactor,
                                            g = i.abrBandWidthUpFactor;
                                        if (0 === c) {
                                            var y = this.bitrateTestDelay;
                                            y && (h = i.maxLoadingDelay - y, p.logger.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * h) + " ms"), v = g = 1)
                                        }
                                        return f = this.findBestLevel(a, o, u, t, c + h, v, g, n), Math.max(f, 0)
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = m
                    }, {
                        24: 24,
                        25: 25,
                        26: 26,
                        28: 28,
                        43: 43,
                        8: 8
                    }],
                    4: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(39),
                            u = i(l),
                            c = e(28),
                            f = i(c),
                            h = e(20),
                            d = i(h),
                            v = e(26),
                            p = i(v),
                            g = e(25),
                            y = i(g),
                            m = e(29),
                            E = i(m),
                            b = e(45),
                            k = i(b),
                            _ = e(24),
                            A = e(43),
                            T = {
                                STOPPED: "STOPPED",
                                STARTING: "STARTING",
                                IDLE: "IDLE",
                                PAUSED: "PAUSED",
                                KEY_LOADING: "KEY_LOADING",
                                FRAG_LOADING: "FRAG_LOADING",
                                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                                WAITING_TRACK: "WAITING_TRACK",
                                PARSING: "PARSING",
                                PARSED: "PARSED",
                                ENDED: "ENDED",
                                ERROR: "ERROR"
                            },
                            L = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, p["default"].MEDIA_ATTACHED, p["default"].MEDIA_DETACHING, p["default"].AUDIO_TRACKS_UPDATED, p["default"].AUDIO_TRACK_SWITCH, p["default"].AUDIO_TRACK_LOADED, p["default"].KEY_LOADED, p["default"].FRAG_LOADED, p["default"].FRAG_PARSING_INIT_SEGMENT, p["default"].FRAG_PARSING_DATA, p["default"].FRAG_PARSED, p["default"].ERROR, p["default"].BUFFER_CREATED, p["default"].BUFFER_APPENDED, p["default"].BUFFER_FLUSHED));
                                    return n.config = e.config, n.audioCodecSwap = !1, n.ticks = 0, n.ontick = n.tick.bind(n), n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y["default"].prototype.destroy.call(this), this.state = T.STOPPED
                                    }
                                }, {
                                    key: "startLoad",
                                    value: function(e) {
                                        if (this.tracks) {
                                            var t = this.media,
                                                n = this.lastCurrentTime;
                                            this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, t && n ? (A.logger.log("configure startPosition @" + n), this.state = T.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = T.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                                        } else this.startPosition = e, this.state = T.STOPPED
                                    }
                                }, {
                                    key: "stopLoad",
                                    value: function() {
                                        var e = this.fragCurrent;
                                        e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = T.STOPPED
                                    }
                                }, {
                                    key: "tick",
                                    value: function() {
                                        this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                                    }
                                }, {
                                    key: "doTick",
                                    value: function() {
                                        var e, t, n, i = this.hls,
                                            r = i.config;
                                        switch (this.state) {
                                            case T.ERROR:
                                            case T.PAUSED:
                                                break;
                                            case T.STARTING:
                                                this.state = T.WAITING_TRACK, this.loadedmetadata = !1;
                                                break;
                                            case T.IDLE:
                                                if (!this.media && (this.startFragRequested || !r.startFragPrefetch)) break;
                                                e = this.loadedmetadata ? this.media.currentTime : this.nextLoadPosition;
                                                var a = this.mediaBuffer ? this.mediaBuffer : this.media,
                                                    o = f["default"].bufferInfo(a, e, r.maxBufferHole),
                                                    s = o.len,
                                                    l = o.end,
                                                    c = this.fragPrevious,
                                                    h = r.maxMaxBufferLength;
                                                if (h > s && this.trackId < this.tracks.length) {
                                                    if (n = this.tracks[this.trackId].details, "undefined" == typeof n) {
                                                        this.state = T.WAITING_TRACK;
                                                        break
                                                    }
                                                    if (!n.live && c && c.sn === n.endSN && (!this.media.seeking || this.media.duration - l < c.duration / 2)) {
                                                        this.hls.trigger(p["default"].BUFFER_EOS, {
                                                            type: "audio"
                                                        }), this.state = T.ENDED;
                                                        break
                                                    }
                                                    var d = n.fragments,
                                                        v = d.length,
                                                        g = d[0].start,
                                                        y = d[v - 1].start + d[v - 1].duration,
                                                        m = void 0;
                                                    if (g > l ? m = d[0] : ! function() {
                                                            var e = void 0,
                                                                t = r.maxFragLookUpTolerance;
                                                            y > l ? (l > y - t && (t = 0), e = u["default"].search(d, function(e) {
                                                                return e.start + e.duration - t <= l ? 1 : e.start - t > l ? -1 : 0
                                                            })) : e = d[v - 1], e && (m = e, g = e.start, c && m.level === c.level && m.sn === c.sn && (m.sn < n.endSN ? (m = d[m.sn + 1 - n.startSN], A.logger.log("SN just loaded, load next one: " + m.sn)) : m = null))
                                                        }(), m)
                                                        if (null != m.decryptdata.uri && null == m.decryptdata.key) A.logger.log("Loading key for " + m.sn + " of [" + n.startSN + " ," + n.endSN + "],track " + this.trackId), this.state = T.KEY_LOADING, i.trigger(p["default"].KEY_LOADING, {
                                                            frag: m
                                                        });
                                                        else {
                                                            if (A.logger.log("Loading " + m.sn + " of [" + n.startSN + " ," + n.endSN + "],track " + this.trackId + ", currentTime:" + e + ",bufferEnd:" + l.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, m.loadCounter) {
                                                                m.loadCounter++;
                                                                var E = r.fragLoadingLoopThreshold;
                                                                if (m.loadCounter > E && Math.abs(this.fragLoadIdx - m.loadIdx) < E) return void i.trigger(p["default"].ERROR, {
                                                                    type: _.ErrorTypes.MEDIA_ERROR,
                                                                    details: _.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                                                                    fatal: !1,
                                                                    frag: m
                                                                })
                                                            } else m.loadCounter = 1;
                                                            m.loadIdx = this.fragLoadIdx, this.fragCurrent = m, this.startFragRequested = !0, i.trigger(p["default"].FRAG_LOADING, {
                                                                frag: m
                                                            }), this.state = T.FRAG_LOADING
                                                        }
                                                }
                                                break;
                                            case T.WAITING_TRACK:
                                                t = this.tracks[this.trackId], t && t.details && (this.state = T.IDLE);
                                                break;
                                            case T.FRAG_LOADING_WAITING_RETRY:
                                                var b = performance.now(),
                                                    k = this.retryDate;
                                                a = this.media;
                                                var L = a && a.seeking;
                                                (!k || b >= k || L) && (A.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = T.IDLE);
                                                break;
                                            case T.STOPPED:
                                            case T.FRAG_LOADING:
                                            case T.PARSING:
                                            case T.PARSED:
                                            case T.ENDED:
                                        }
                                    }
                                }, {
                                    key: "onMediaAttached",
                                    value: function(e) {
                                        var t = this.media = this.mediaBuffer = e.media;
                                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
                                        var n = this.config;
                                        this.tracks && n.autoStartLoad && this.startLoad(n.startPosition)
                                    }
                                }, {
                                    key: "onMediaDetaching",
                                    value: function() {
                                        var e = this.media;
                                        e && e.ended && (A.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                                        var t = this.tracks;
                                        t && t.forEach(function(e) {
                                            e.details && e.details.fragments.forEach(function(e) {
                                                e.loadCounter = void 0
                                            })
                                        }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = null, this.loadedmetadata = !1, this.stopLoad()
                                    }
                                }, {
                                    key: "onMediaSeeking",
                                    value: function() {
                                        this.state === T.ENDED && (this.state = T.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick()
                                    }
                                }, {
                                    key: "onMediaEnded",
                                    value: function() {
                                        this.startPosition = this.lastCurrentTime = 0
                                    }
                                }, {
                                    key: "onAudioTracksUpdated",
                                    value: function(e) {
                                        A.logger.log("audio tracks updated"), this.tracks = e.audioTracks
                                    }
                                }, {
                                    key: "onAudioTrackSwitch",
                                    value: function(e) {
                                        var t = !!e.url;
                                        this.trackId = e.id, this.state = T.IDLE, this.fragCurrent = null, this.state = T.PAUSED, t ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.hls.trigger(p["default"].BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: Number.POSITIVE_INFINITY,
                                            type: "audio"
                                        }), this.tick()
                                    }
                                }, {
                                    key: "onAudioTrackLoaded",
                                    value: function(e) {
                                        var t = e.details,
                                            n = e.id,
                                            i = this.tracks[n],
                                            r = t.totalduration;
                                        if (A.logger.log("track " + n + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + r), t.PTSKnown = !1, i.details = t, !this.startFragRequested) {
                                            if (-1 === this.startPosition) {
                                                var a = t.startTimeOffset;
                                                isNaN(a) ? this.startPosition = 0 : (A.logger.log("start time offset found in playlist, adjust startPosition to " + a), this.startPosition = a)
                                            }
                                            this.nextLoadPosition = this.startPosition
                                        }
                                        this.state === T.WAITING_TRACK && (this.state = T.IDLE), this.tick()
                                    }
                                }, {
                                    key: "onKeyLoaded",
                                    value: function() {
                                        this.state === T.KEY_LOADING && (this.state = T.IDLE, this.tick())
                                    }
                                }, {
                                    key: "onFragLoaded",
                                    value: function(e) {
                                        var t = this.fragCurrent;
                                        if (this.state === T.FRAG_LOADING && t && "audio" === e.frag.type && e.frag.level === t.level && e.frag.sn === t.sn) {
                                            this.state = T.PARSING, this.stats = e.stats;
                                            var n = this.tracks[this.trackId],
                                                i = n.details,
                                                r = i.totalduration,
                                                a = t.start,
                                                o = t.level,
                                                s = t.sn,
                                                l = this.config.defaultAudioCodec || n.audioCodec;
                                            this.pendingAppending = 0, this.demuxer || (this.demuxer = new d["default"](this.hls, "audio")), A.logger.log("Demuxing " + s + " of [" + i.startSN + " ," + i.endSN + "],track " + o);
                                            var u = i.PTSKnown || !i.live;
                                            this.demuxer.push(e.payload, l, null, a, t.cc, o, s, r, t.decryptdata, u)
                                        }
                                        this.fragLoadError = 0
                                    }
                                }, {
                                    key: "onFragParsingInitSegment",
                                    value: function(e) {
                                        var t = this.fragCurrent;
                                        if (t && "audio" === e.id && e.sn === t.sn && e.level === t.level && this.state === T.PARSING) {
                                            var n = e.tracks,
                                                i = void 0;
                                            if (i = n.audio) {
                                                i.levelCodec = "mp4a.40.2", i.id = e.id, this.hls.trigger(p["default"].BUFFER_CODECS, n), A.logger.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                                                var r = i.initSegment;
                                                r && (this.pendingAppending++, this.hls.trigger(p["default"].BUFFER_APPENDING, {
                                                    type: "audio",
                                                    data: r,
                                                    parent: "audio",
                                                    content: "initSegment"
                                                })), this.tick()
                                            }
                                        }
                                    }
                                }, {
                                    key: "onFragParsingData",
                                    value: function(e) {
                                        var t = this,
                                            n = this.fragCurrent;
                                        if (n && "audio" === e.id && e.sn === n.sn && e.level === n.level && this.state === T.PARSING) {
                                            var i = this.tracks[this.trackId],
                                                r = this.fragCurrent;
                                            A.logger.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), E["default"].updateFragPTSDTS(i.details, r.sn, e.startPTS, e.endPTS), [e.data1, e.data2].forEach(function(n) {
                                                n && (t.pendingAppending++, t.hls.trigger(p["default"].BUFFER_APPENDING, {
                                                    type: e.type,
                                                    data: n,
                                                    parent: "audio",
                                                    content: "data"
                                                }))
                                            }), this.nextLoadPosition = e.endPTS, this.tick()
                                        }
                                    }
                                }, {
                                    key: "onFragParsed",
                                    value: function(e) {
                                        var t = this.fragCurrent;
                                        t && "audio" === e.id && e.sn === t.sn && e.level === t.level && this.state === T.PARSING && (this.stats.tparsed = performance.now(), this.state = T.PARSED, this._checkAppendedParsed())
                                    }
                                }, {
                                    key: "onBufferCreated",
                                    value: function(e) {
                                        var t = e.tracks.audio;
                                        t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0)
                                    }
                                }, {
                                    key: "onBufferAppended",
                                    value: function(e) {
                                        if ("audio" === e.parent) switch (this.state) {
                                            case T.PARSING:
                                            case T.PARSED:
                                                this.pendingAppending--, this._checkAppendedParsed()
                                        }
                                    }
                                }, {
                                    key: "_checkAppendedParsed",
                                    value: function() {
                                        if (this.state === T.PARSED && 0 === this.pendingAppending) {
                                            var e = this.fragCurrent,
                                                t = this.stats;
                                            if (e) {
                                                this.fragPrevious = e, t.tbuffered = performance.now(), this.hls.trigger(p["default"].FRAG_BUFFERED, {
                                                    stats: t,
                                                    frag: e,
                                                    id: "audio"
                                                });
                                                var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                                A.logger.log("audio buffered : " + k["default"].toString(n.buffered)), this.state = T.IDLE
                                            }
                                            this.tick()
                                        }
                                    }
                                }, {
                                    key: "onError",
                                    value: function(e) {
                                        var t = e.frag;
                                        if (!t || "audio" === t.type) switch (e.details) {
                                            case _.ErrorDetails.FRAG_LOAD_ERROR:
                                            case _.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                if (!e.fatal) {
                                                    var n = this.fragLoadError;
                                                    n ? n++ : n = 1;
                                                    var i = this.config;
                                                    if (n <= i.fragLoadingMaxRetry) {
                                                        this.fragLoadError = n, t.loadCounter = 0;
                                                        var r = Math.min(Math.pow(2, n - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                                        A.logger.warn("audioStreamController: frag loading failed, retry in " + r + " ms"), this.retryDate = performance.now() + r, this.state = T.FRAG_LOADING_WAITING_RETRY
                                                    } else A.logger.error("audioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.trigger(p["default"].ERROR, e), this.state = T.ERROR
                                                }
                                                break;
                                            case _.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                            case _.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                                            case _.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                                            case _.ErrorDetails.KEY_LOAD_ERROR:
                                            case _.ErrorDetails.KEY_LOAD_TIMEOUT:
                                                this.state !== T.ERROR && (this.state = e.fatal ? T.ERROR : T.IDLE, A.logger.warn("audioStreamController: " + e.details + " while loading frag,switch to " + this.state + " state ..."))
                                        }
                                    }
                                }, {
                                    key: "onBufferFlushed",
                                    value: function() {
                                        this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = T.IDLE, this.fragPrevious = null, this.tick()
                                    }
                                }]), t
                            }(y["default"]);
                        n["default"] = L
                    }, {
                        20: 20,
                        24: 24,
                        25: 25,
                        26: 26,
                        28: 28,
                        29: 29,
                        39: 39,
                        43: 43,
                        45: 45
                    }],
                    5: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(43),
                            d = function(e) {
                                function t(e) {
                                    return r(this, t), a(this, Object.getPrototypeOf(t).call(this, e, u["default"].MANIFEST_LOADING, u["default"].MANIFEST_LOADED, u["default"].AUDIO_TRACK_LOADED))
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        f["default"].prototype.destroy.call(this)
                                    }
                                }, {
                                    key: "onManifestLoading",
                                    value: function() {
                                        this.tracks = [], this.trackId = -1
                                    }
                                }, {
                                    key: "onManifestLoaded",
                                    value: function(e) {
                                        var t = this,
                                            n = e.audioTracks || [],
                                            i = !1;
                                        this.tracks = n, this.hls.trigger(u["default"].AUDIO_TRACKS_UPDATED, {
                                            audioTracks: n
                                        });
                                        var r = 0;
                                        n.forEach(function(e) {
                                            return e["default"] ? (t.audioTrack = r, void(i = !0)) : void r++
                                        }), i === !1 && n.length && (h.logger.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
                                    }
                                }, {
                                    key: "onAudioTrackLoaded",
                                    value: function(e) {
                                        e.id < this.tracks.length && (h.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * e.details.targetduration)), !e.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
                                    }
                                }, {
                                    key: "setAudioTrackInternal",
                                    value: function(e) {
                                        if (e >= 0 && e < this.tracks.length) {
                                            this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = e, h.logger.log("switching to audioTrack " + e);
                                            var t = this.tracks[e],
                                                n = t.type,
                                                i = t.url;
                                            this.hls.trigger(u["default"].AUDIO_TRACK_SWITCH, {
                                                id: e,
                                                type: n,
                                                url: i
                                            });
                                            var r = t.details;
                                            !i || void 0 !== r && r.live !== !0 || (h.logger.log("(re)loading playlist for audioTrack " + e), this.hls.trigger(u["default"].AUDIO_TRACK_LOADING, {
                                                url: i,
                                                id: e
                                            }))
                                        }
                                    }
                                }, {
                                    key: "audioTracks",
                                    get: function() {
                                        return this.tracks
                                    }
                                }, {
                                    key: "audioTrack",
                                    get: function() {
                                        return this.trackId
                                    },
                                    set: function(e) {
                                        this.trackId === e && void 0 !== this.tracks[e].details || this.setAudioTrackInternal(e)
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = d
                    }, {
                        25: 25,
                        26: 26,
                        43: 43
                    }],
                    6: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(43),
                            d = e(24),
                            v = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, u["default"].MEDIA_ATTACHING, u["default"].MEDIA_DETACHING, u["default"].MANIFEST_PARSED, u["default"].BUFFER_RESET, u["default"].BUFFER_APPENDING, u["default"].BUFFER_CODECS, u["default"].BUFFER_EOS, u["default"].BUFFER_FLUSHING, u["default"].LEVEL_UPDATED));
                                    return n._msDuration = null, n._levelDuration = null, n.onsbue = n.onSBUpdateEnd.bind(n), n.onsbe = n.onSBUpdateError.bind(n), n.pendingTracks = {}, n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        f["default"].prototype.destroy.call(this)
                                    }
                                }, {
                                    key: "onManifestParsed",
                                    value: function(e) {
                                        var t = e.audio,
                                            n = e.video,
                                            i = 0;
                                        e.altAudio && (t || n) && (i = (t ? 1 : 0) + (n ? 1 : 0), h.logger.log(i + " sourceBuffer(s) expected")), this.sourceBufferNb = i
                                    }
                                }, {
                                    key: "onMediaAttaching",
                                    value: function(e) {
                                        var t = this.media = e.media;
                                        if (t) {
                                            var n = this.mediaSource = new MediaSource;
                                            this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), n.addEventListener("sourceopen", this.onmso), n.addEventListener("sourceended", this.onmse), n.addEventListener("sourceclose", this.onmsc), t.src = URL.createObjectURL(n)
                                        }
                                    }
                                }, {
                                    key: "onMediaDetaching",
                                    value: function() {
                                        h.logger.log("media source detaching");
                                        var e = this.mediaSource;
                                        if (e) {
                                            if ("open" === e.readyState) try {
                                                e.endOfStream()
                                            } catch (t) {
                                                h.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                                            }
                                            e.removeEventListener("sourceopen", this.onmso), e.removeEventListener("sourceended", this.onmse), e.removeEventListener("sourceclose", this.onmsc), this.media && (this.media.removeAttribute("src"), this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                                        }
                                        this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(u["default"].MEDIA_DETACHED)
                                    }
                                }, {
                                    key: "onMediaSourceOpen",
                                    value: function() {
                                        h.logger.log("media source opened"), this.hls.trigger(u["default"].MEDIA_ATTACHED, {
                                            media: this.media
                                        });
                                        var e = this.mediaSource;
                                        e && e.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                                    }
                                }, {
                                    key: "checkPendingTracks",
                                    value: function() {
                                        var e = this.pendingTracks,
                                            t = Object.keys(e).length;
                                        t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e), this.pendingTracks = {}, this.doAppending())
                                    }
                                }, {
                                    key: "onMediaSourceClose",
                                    value: function() {
                                        h.logger.log("media source closed")
                                    }
                                }, {
                                    key: "onMediaSourceEnded",
                                    value: function() {
                                        h.logger.log("media source ended")
                                    }
                                }, {
                                    key: "onSBUpdateEnd",
                                    value: function() {
                                        this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1, this.hls.trigger(u["default"].BUFFER_APPENDED, {
                                            parent: this.parent
                                        }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                                    }
                                }, {
                                    key: "onSBUpdateError",
                                    value: function(e) {
                                        h.logger.error("sourceBuffer error:" + e), this.hls.trigger(u["default"].ERROR, {
                                            type: d.ErrorTypes.MEDIA_ERROR,
                                            details: d.ErrorDetails.BUFFER_APPENDING_ERROR,
                                            fatal: !1
                                        })
                                    }
                                }, {
                                    key: "onBufferReset",
                                    value: function() {
                                        var e = this.sourceBuffer;
                                        for (var t in e) {
                                            var n = e[t];
                                            try {
                                                this.mediaSource.removeSourceBuffer(n), n.removeEventListener("updateend", this.onsbue), n.removeEventListener("error", this.onsbe)
                                            } catch (i) {}
                                        }
                                        this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                                    }
                                }, {
                                    key: "onBufferCodecs",
                                    value: function(e) {
                                        if (0 === Object.keys(this.sourceBuffer).length) {
                                            for (var t in e) this.pendingTracks[t] = e[t];
                                            var n = this.mediaSource;
                                            n && "open" === n.readyState && this.checkPendingTracks()
                                        }
                                    }
                                }, {
                                    key: "createSourceBuffers",
                                    value: function(e) {
                                        var t = this.sourceBuffer,
                                            n = this.mediaSource;
                                        for (var i in e)
                                            if (!t[i]) {
                                                var r = e[i],
                                                    a = r.levelCodec || r.codec,
                                                    o = r.container + ";codecs=" + a;
                                                h.logger.log("creating sourceBuffer(" + o + ")");
                                                try {
                                                    var s = t[i] = n.addSourceBuffer(o);
                                                    s.addEventListener("updateend", this.onsbue), s.addEventListener("error", this.onsbe), r.buffer = s
                                                } catch (l) {
                                                    h.logger.error("error while trying to add sourceBuffer:" + l.message), this.hls.trigger(u["default"].ERROR, {
                                                        type: d.ErrorTypes.MEDIA_ERROR,
                                                        details: d.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                                        fatal: !1,
                                                        err: l,
                                                        mimeType: o
                                                    })
                                                }
                                            }
                                        this.hls.trigger(u["default"].BUFFER_CREATED, {
                                            tracks: e
                                        })
                                    }
                                }, {
                                    key: "onBufferAppending",
                                    value: function(e) {
                                        this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
                                    }
                                }, {
                                    key: "onBufferAppendFail",
                                    value: function(e) {
                                        h.logger.error("sourceBuffer error:" + e.event), this.hls.trigger(u["default"].ERROR, {
                                            type: d.ErrorTypes.MEDIA_ERROR,
                                            details: d.ErrorDetails.BUFFER_APPENDING_ERROR,
                                            fatal: !1,
                                            frag: this.fragCurrent
                                        })
                                    }
                                }, {
                                    key: "onBufferEos",
                                    value: function(e) {
                                        var t = this.sourceBuffer,
                                            n = e.type;
                                        for (var i in t) n && i !== n || t[i].ended || (t[i].ended = !0, h.logger.log(i + " sourceBuffer now EOS"));
                                        this.checkEos()
                                    }
                                }, {
                                    key: "checkEos",
                                    value: function() {
                                        var e = this.sourceBuffer,
                                            t = this.mediaSource;
                                        if (!t || "open" !== t.readyState) return void(this._needsEos = !1);
                                        for (var n in e) {
                                            if (!e[n].ended) return;
                                            if (e[n].updating) return void(this._needsEos = !0)
                                        }
                                        h.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment"), t.endOfStream(), this._needsEos = !1
                                    }
                                }, {
                                    key: "onBufferFlushing",
                                    value: function(e) {
                                        this.flushRange.push({
                                            start: e.startOffset,
                                            end: e.endOffset,
                                            type: e.type
                                        }), this.flushBufferCounter = 0, this.doFlush()
                                    }
                                }, {
                                    key: "onLevelUpdated",
                                    value: function(e) {
                                        var t = e.details;
                                        0 !== t.fragments.length && (this._levelDuration = t.totalduration + t.fragments[0].start, this.updateMediaElementDuration())
                                    }
                                }, {
                                    key: "updateMediaElementDuration",
                                    value: function() {
                                        if (null !== this._levelDuration) {
                                            var e = this.media,
                                                t = this.mediaSource,
                                                n = this.sourceBuffer;
                                            if (e && t && n && 0 !== e.readyState && "open" === t.readyState) {
                                                for (var i in n)
                                                    if (n[i].updating) return;
                                                null === this._msDuration && (this._msDuration = t.duration), this._levelDuration > this._msDuration && (h.logger.log("Updating mediasource duration to " + this._levelDuration), t.duration = this._levelDuration, this._msDuration = this._levelDuration)
                                            }
                                        }
                                    }
                                }, {
                                    key: "doFlush",
                                    value: function() {
                                        for (; this.flushRange.length;) {
                                            var e = this.flushRange[0];
                                            if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
                                            this.flushRange.shift(), this.flushBufferCounter = 0
                                        }
                                        if (0 === this.flushRange.length) {
                                            this._needsFlush = !1;
                                            var t = 0,
                                                n = this.sourceBuffer;
                                            for (var i in n) t += n[i].buffered.length;
                                            this.appended = t, this.hls.trigger(u["default"].BUFFER_FLUSHED)
                                        }
                                    }
                                }, {
                                    key: "doAppending",
                                    value: function() {
                                        var e = this.hls,
                                            t = this.sourceBuffer,
                                            n = this.segments;
                                        if (Object.keys(t).length) {
                                            if (this.media.error) return this.segments = [], void h.logger.error("trying to append although a media error occured, flush segment and abort");
                                            if (this.appending) return;
                                            if (n && n.length) {
                                                var i = n.shift();
                                                try {
                                                    var r = i.type;
                                                    t[r] ? (t[r].ended = !1, this.parent = i.parent, t[r].appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                                                } catch (a) {
                                                    h.logger.error("error while trying to append buffer:" + a.message), n.unshift(i);
                                                    var o = {
                                                        type: d.ErrorTypes.MEDIA_ERROR
                                                    };
                                                    if (22 === a.code) return this.segments = [], o.details = d.ErrorDetails.BUFFER_FULL_ERROR, void e.trigger(u["default"].ERROR, o);
                                                    if (this.appendError ? this.appendError++ : this.appendError = 1, o.details = d.ErrorDetails.BUFFER_APPEND_ERROR, o.frag = this.fragCurrent, this.appendError > e.config.appendErrorMaxRetry) return h.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), n = [], o.fatal = !0, void e.trigger(u["default"].ERROR, o);
                                                    o.fatal = !1, e.trigger(u["default"].ERROR, o)
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    key: "flushBuffer",
                                    value: function(e, t, n) {
                                        var i, r, a, o, s, l, u = this.sourceBuffer;
                                        if (Object.keys(u).length) {
                                            if (h.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {
                                                for (var c in u)
                                                    if (!n || c === n) {
                                                        if (i = u[c], i.ended = !1, i.updating) return h.logger.warn("cannot flush, sb updating in progress"), !1;
                                                        for (r = 0; r < i.buffered.length; r++)
                                                            if (a = i.buffered.start(r), o = i.buffered.end(r), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && t === Number.POSITIVE_INFINITY ? (s = e, l = t) : (s = Math.max(a, e), l = Math.min(o, t)), Math.min(l, o) - s > .5) return this.flushBufferCounter++, h.logger.log("flush " + c + " [" + s + "," + l + "], of [" + a + "," + o + "], pos:" + this.media.currentTime), i.remove(s, l), !1
                                                    }
                                            } else h.logger.warn("abort flushing too many retries");
                                            h.logger.log("buffer flushed")
                                        }
                                        return !0
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = v
                    }, {
                        24: 24,
                        25: 25,
                        26: 26,
                        43: 43
                    }],
                    7: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = function(e) {
                                function t(e) {
                                    return r(this, t), a(this, Object.getPrototypeOf(t).call(this, e, u["default"].FPS_DROP_LEVEL_CAPPING, u["default"].MEDIA_ATTACHING, u["default"].MANIFEST_PARSED))
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
                                    }
                                }, {
                                    key: "onFpsDropLevelCapping",
                                    value: function(e) {
                                        this.restrictedLevels || (this.restrictedLevels = []), this.isLevelRestricted(e.droppedLevel) || this.restrictedLevels.push(e.droppedLevel)
                                    }
                                }, {
                                    key: "onMediaAttaching",
                                    value: function(e) {
                                        this.media = e.media instanceof HTMLVideoElement ? e.media : null
                                    }
                                }, {
                                    key: "onManifestParsed",
                                    value: function(e) {
                                        this.hls.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = e.levels, this.hls.firstLevel = this.getMaxLevel(e.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                                    }
                                }, {
                                    key: "detectPlayerSize",
                                    value: function() {
                                        if (this.media) {
                                            var e = this.levels ? this.levels.length : 0;
                                            e && (this.hls.autoLevelCapping = this.getMaxLevel(e - 1), this.hls.autoLevelCapping > this.autoLevelCapping && this.hls.streamController.nextLevelSwitch(), this.autoLevelCapping = this.hls.autoLevelCapping)
                                        }
                                    }
                                }, {
                                    key: "getMaxLevel",
                                    value: function(e) {
                                        var t = 0,
                                            n = void 0,
                                            i = void 0,
                                            r = this.mediaWidth,
                                            a = this.mediaHeight,
                                            o = 0,
                                            s = 0;
                                        for (n = 0; e >= n && (i = this.levels[n], !this.isLevelRestricted(n)) && (t = n, o = i.width, s = i.height, !(o >= r || s >= a)); n++);
                                        return t
                                    }
                                }, {
                                    key: "isLevelRestricted",
                                    value: function(e) {
                                        return !(!this.restrictedLevels || -1 === this.restrictedLevels.indexOf(e))
                                    }
                                }, {
                                    key: "contentScaleFactor",
                                    get: function() {
                                        var e = 1;
                                        try {
                                            e = window.devicePixelRatio
                                        } catch (t) {}
                                        return e
                                    }
                                }, {
                                    key: "mediaWidth",
                                    get: function() {
                                        var e = void 0;
                                        return this.media && (e = this.media.width || this.media.clientWidth || this.media.offsetWidth, e *= this.contentScaleFactor), e
                                    }
                                }, {
                                    key: "mediaHeight",
                                    get: function() {
                                        var e = void 0;
                                        return this.media && (e = this.media.height || this.media.clientHeight || this.media.offsetHeight, e *= this.contentScaleFactor), e
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = h
                    }, {
                        25: 25,
                        26: 26
                    }],
                    8: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(42),
                            s = i(o),
                            l = function() {
                                function e(t, n, i, a) {
                                    r(this, e), this.hls = t, this.defaultEstimate_ = a, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new s["default"](n), this.fast_ = new s["default"](i)
                                }
                                return a(e, [{
                                    key: "sample",
                                    value: function(e, t) {
                                        e = Math.max(e, this.minDelayMs_);
                                        var n = 8e3 * t / e,
                                            i = e / 1e3;
                                        this.fast_.sample(i, n), this.slow_.sample(i, n)
                                    }
                                }, {
                                    key: "canEstimate",
                                    value: function() {
                                        var e = this.fast_;
                                        return e && e.getTotalWeight() >= this.minWeight_
                                    }
                                }, {
                                    key: "getEstimate",
                                    value: function() {
                                        return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {}
                                }]), e
                            }();
                        n["default"] = l
                    }, {
                        42: 42
                    }],
                    9: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(43),
                            d = function(e) {
                                function t(e) {
                                    return r(this, t), a(this, Object.getPrototypeOf(t).call(this, e, u["default"].MEDIA_ATTACHING))
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                                    }
                                }, {
                                    key: "onMediaAttaching",
                                    value: function(e) {
                                        this.hls.config.capLevelOnFPSDrop && (this.video = e.media instanceof HTMLVideoElement ? e.media : null, "function" == typeof this.video.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), this.hls.config.fpsDroppedMonitoringPeriod))
                                    }
                                }, {
                                    key: "checkFPS",
                                    value: function(e, t, n) {
                                        var i = performance.now();
                                        if (t) {
                                            if (this.lastTime) {
                                                var r = i - this.lastTime,
                                                    a = n - this.lastDroppedFrames,
                                                    o = t - this.lastDecodedFrames,
                                                    s = 1e3 * a / r;
                                                if (this.hls.trigger(u["default"].FPS_DROP, {
                                                        currentDropped: a,
                                                        currentDecoded: o,
                                                        totalDroppedFrames: n
                                                    }), s > 0 && a > this.hls.config.fpsDroppedMonitoringThreshold * o) {
                                                    var l = this.hls.currentLevel;
                                                    h.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + l), l > 0 && (-1 === this.hls.autoLevelCapping || this.hls.autoLevelCapping >= l) && (l -= 1, this.hls.trigger(u["default"].FPS_DROP_LEVEL_CAPPING, {
                                                        level: l,
                                                        droppedLevel: this.hls.currentLevel
                                                    }), this.hls.autoLevelCapping = l, this.hls.streamController.nextLevelSwitch());
                                                }
                                            }
                                            this.lastTime = i, this.lastDroppedFrames = n, this.lastDecodedFrames = t
                                        }
                                    }
                                }, {
                                    key: "checkFPSInterval",
                                    value: function() {
                                        if (this.video)
                                            if (this.isVideoPlaybackQualityAvailable) {
                                                var e = this.video.getVideoPlaybackQuality();
                                                this.checkFPS(this.video, e.totalVideoFrames, e.droppedVideoFrames)
                                            } else this.checkFPS(this.video, this.video.webkitDecodedFrameCount, this.video.webkitDroppedFrameCount)
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = d
                    }, {
                        25: 25,
                        26: 26,
                        43: 43
                    }],
                    10: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(43),
                            d = e(24),
                            v = e(28),
                            p = i(v),
                            g = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, u["default"].MANIFEST_LOADED, u["default"].LEVEL_LOADED, u["default"].ERROR));
                                    return n.ontick = n.tick.bind(n), n._manualLevel = n._autoLevelCapping = -1, n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        this.timer && (clearTimeout(this.timer), this.timer = null), this._manualLevel = -1
                                    }
                                }, {
                                    key: "startLoad",
                                    value: function() {
                                        this.canload = !0, this.timer && this.tick()
                                    }
                                }, {
                                    key: "stopLoad",
                                    value: function() {
                                        this.canload = !1
                                    }
                                }, {
                                    key: "onManifestLoaded",
                                    value: function(e) {
                                        var t, n, i = [],
                                            r = [],
                                            a = {},
                                            o = !1,
                                            s = !1,
                                            l = this.hls;
                                        if (e.levels.forEach(function(e) {
                                                e.videoCodec && (o = !0), (e.audioCodec || e.attrs && e.attrs.AUDIO) && (s = !0);
                                                var t = a[e.bitrate];
                                                void 0 === t ? (a[e.bitrate] = i.length, e.url = [e.url], e.urlId = 0, i.push(e)) : i[t].url.push(e.url)
                                            }), o && s ? i.forEach(function(e) {
                                                e.videoCodec && r.push(e)
                                            }) : r = i, r = r.filter(function(e) {
                                                var t = function(e) {
                                                        return MediaSource.isTypeSupported("audio/mp4;codecs=" + e)
                                                    },
                                                    n = function(e) {
                                                        return MediaSource.isTypeSupported("video/mp4;codecs=" + e)
                                                    },
                                                    i = e.audioCodec,
                                                    r = e.videoCodec;
                                                return (!i || t(i)) && (!r || n(r))
                                            }), r.length) {
                                            for (t = r[0].bitrate, r.sort(function(e, t) {
                                                    return e.bitrate - t.bitrate
                                                }), this._levels = r, n = 0; n < r.length; n++)
                                                if (r[n].bitrate === t) {
                                                    this._firstLevel = n, h.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
                                                    break
                                                }
                                            l.trigger(u["default"].MANIFEST_PARSED, {
                                                levels: this._levels,
                                                firstLevel: this._firstLevel,
                                                stats: e.stats,
                                                audio: s,
                                                video: o,
                                                altAudio: e.audioTracks.length > 0
                                            })
                                        } else l.trigger(u["default"].ERROR, {
                                            type: d.ErrorTypes.MEDIA_ERROR,
                                            details: d.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                            fatal: !0,
                                            url: l.url,
                                            reason: "no level with compatible codecs found in manifest"
                                        })
                                    }
                                }, {
                                    key: "setLevelInternal",
                                    value: function(e) {
                                        var t = this._levels;
                                        if (e >= 0 && e < t.length) {
                                            this.timer && (clearTimeout(this.timer), this.timer = null), this._level !== e && (h.logger.log("switching to level " + e), this._level = e), this.hls.trigger(u["default"].LEVEL_SWITCH, {
                                                level: e
                                            });
                                            var n = t[e],
                                                i = n.details;
                                            if (!i || i.live === !0) {
                                                var r = n.urlId;
                                                this.hls.trigger(u["default"].LEVEL_LOADING, {
                                                    url: n.url[r],
                                                    level: e,
                                                    id: r
                                                })
                                            }
                                        } else this.hls.trigger(u["default"].ERROR, {
                                            type: d.ErrorTypes.OTHER_ERROR,
                                            details: d.ErrorDetails.LEVEL_SWITCH_ERROR,
                                            level: e,
                                            fatal: !1,
                                            reason: "invalid level idx"
                                        })
                                    }
                                }, {
                                    key: "onError",
                                    value: function(e) {
                                        if (!e.fatal) {
                                            var t = e.details,
                                                n = this.hls,
                                                i = void 0,
                                                r = void 0,
                                                a = !1;
                                            switch (t) {
                                                case d.ErrorDetails.FRAG_LOAD_ERROR:
                                                case d.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                case d.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                                case d.ErrorDetails.KEY_LOAD_ERROR:
                                                case d.ErrorDetails.KEY_LOAD_TIMEOUT:
                                                    i = e.frag.level;
                                                    break;
                                                case d.ErrorDetails.LEVEL_LOAD_ERROR:
                                                case d.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                                    i = e.context.level, a = !0
                                            }
                                            if (void 0 !== i)
                                                if (r = this._levels[i], r.urlId < r.url.length - 1) r.urlId++, r.details = void 0, h.logger.warn("level controller," + t + " for level " + i + ": switching to redundant stream id " + r.urlId);
                                                else {
                                                    var o = -1 === this._manualLevel && i;
                                                    if (o) h.logger.warn("level controller," + t + ": emergency switch-down for next fragment"), n.abrController.nextAutoLevel = 0;
                                                    else if (r && r.details && r.details.live) h.logger.warn("level controller," + t + " on live stream, discard"), a && (this._level = void 0);
                                                    else if (t === d.ErrorDetails.LEVEL_LOAD_ERROR || t === d.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                                                        var s = this.hls,
                                                            l = s.media,
                                                            c = l && p["default"].isBuffered(l, l.currentTime) && p["default"].isBuffered(l, l.currentTime + .4);
                                                        if (c) {
                                                            var f = s.config.levelLoadingRetryDelay;
                                                            h.logger.warn("level controller," + t + ", but media buffered, retry in " + f + "ms"), this.timer = setTimeout(this.ontick, f)
                                                        } else h.logger.error("cannot recover " + t + " error"), this._level = void 0, this.timer && (clearTimeout(this.timer), this.timer = null), e.fatal = !0, s.trigger(u["default"].ERROR, e)
                                                    }
                                                }
                                        }
                                    }
                                }, {
                                    key: "onLevelLoaded",
                                    value: function(e) {
                                        if (e.level === this._level) {
                                            var t = e.details;
                                            if (t.live) {
                                                var n = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
                                                    i = this._levels[e.level],
                                                    r = i.details;
                                                r && t.endSN === r.endSN && (n /= 2, h.logger.log("same live playlist, reload twice faster")), n -= performance.now() - e.stats.trequest, n = Math.max(1e3, Math.round(n)), h.logger.log("live playlist, reload in " + n + " ms"), this.timer = setTimeout(this.ontick, n)
                                            } else this.timer = null
                                        }
                                    }
                                }, {
                                    key: "tick",
                                    value: function() {
                                        var e = this._level;
                                        if (void 0 !== e && this.canload) {
                                            var t = this._levels[e],
                                                n = t.urlId;
                                            this.hls.trigger(u["default"].LEVEL_LOADING, {
                                                url: t.url[n],
                                                level: e,
                                                id: n
                                            })
                                        }
                                    }
                                }, {
                                    key: "levels",
                                    get: function() {
                                        return this._levels
                                    }
                                }, {
                                    key: "level",
                                    get: function() {
                                        return this._level
                                    },
                                    set: function(e) {
                                        var t = this._levels;
                                        t && t.length > e && (this._level === e && void 0 !== t[e].details || this.setLevelInternal(e))
                                    }
                                }, {
                                    key: "manualLevel",
                                    get: function() {
                                        return this._manualLevel
                                    },
                                    set: function(e) {
                                        this._manualLevel = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
                                    }
                                }, {
                                    key: "firstLevel",
                                    get: function() {
                                        return this._firstLevel
                                    },
                                    set: function(e) {
                                        this._firstLevel = e
                                    }
                                }, {
                                    key: "startLevel",
                                    get: function() {
                                        if (void 0 === this._startLevel) {
                                            var e = this.hls.config.startLevel;
                                            return void 0 !== e ? e : this._firstLevel
                                        }
                                        return this._startLevel
                                    },
                                    set: function(e) {
                                        this._startLevel = e
                                    }
                                }, {
                                    key: "nextLoadLevel",
                                    get: function() {
                                        return -1 !== this._manualLevel ? this._manualLevel : this.hls.abrController.nextAutoLevel
                                    },
                                    set: function(e) {
                                        this.level = e, -1 === this._manualLevel && (this.hls.abrController.nextAutoLevel = e)
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = g
                    }, {
                        24: 24,
                        25: 25,
                        26: 26,
                        28: 28,
                        43: 43
                    }],
                    11: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(39),
                            u = i(l),
                            c = e(28),
                            f = i(c),
                            h = e(20),
                            d = i(h),
                            v = e(26),
                            p = i(v),
                            g = e(25),
                            y = i(g),
                            m = e(29),
                            E = i(m),
                            b = e(45),
                            k = i(b),
                            _ = e(24),
                            A = e(43),
                            T = {
                                STOPPED: "STOPPED",
                                IDLE: "IDLE",
                                PAUSED: "PAUSED",
                                KEY_LOADING: "KEY_LOADING",
                                FRAG_LOADING: "FRAG_LOADING",
                                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                                WAITING_LEVEL: "WAITING_LEVEL",
                                PARSING: "PARSING",
                                PARSED: "PARSED",
                                ENDED: "ENDED",
                                ERROR: "ERROR"
                            },
                            L = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, p["default"].MEDIA_ATTACHED, p["default"].MEDIA_DETACHING, p["default"].MANIFEST_LOADING, p["default"].MANIFEST_PARSED, p["default"].LEVEL_LOADED, p["default"].KEY_LOADED, p["default"].FRAG_LOADED, p["default"].FRAG_LOAD_EMERGENCY_ABORTED, p["default"].FRAG_PARSING_INIT_SEGMENT, p["default"].FRAG_PARSING_DATA, p["default"].FRAG_PARSED, p["default"].ERROR, p["default"].AUDIO_TRACK_SWITCH, p["default"].BUFFER_CREATED, p["default"].BUFFER_APPENDED, p["default"].BUFFER_FLUSHED));
                                    return n.config = e.config, n.audioCodecSwap = !1, n.ticks = 0, n.ontick = n.tick.bind(n), n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y["default"].prototype.destroy.call(this), this.state = T.STOPPED
                                    }
                                }, {
                                    key: "startLoad",
                                    value: function(e) {
                                        if (this.levels) {
                                            var t = this.media,
                                                n = this.lastCurrentTime,
                                                i = this.hls;
                                            if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, t && n > 0 ? (A.logger.log("configure startPosition @" + n.toFixed(3)), this.lastPaused || (A.logger.log("resuming video"), t.play())) : this.lastCurrentTime = this.startPosition ? this.startPosition : e, !this.startFragRequested) {
                                                var r = i.startLevel; - 1 === r && (r = 0, this.bitrateTest = !0), this.level = i.nextLoadLevel = r, this.loadedmetadata = !1
                                            }
                                            this.state = T.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                                        } else A.logger.warn("cannot start loading as manifest not parsed yet"), this.state = T.STOPPED
                                    }
                                }, {
                                    key: "stopLoad",
                                    value: function() {
                                        var e = this.fragCurrent;
                                        e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = T.STOPPED
                                    }
                                }, {
                                    key: "tick",
                                    value: function() {
                                        this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                                    }
                                }, {
                                    key: "doTick",
                                    value: function() {
                                        switch (this.state) {
                                            case T.ERROR:
                                            case T.PAUSED:
                                                break;
                                            case T.IDLE:
                                                if (!this._doTickIdle()) return;
                                                break;
                                            case T.WAITING_LEVEL:
                                                var e = this.levels[this.level];
                                                e && e.details && (this.state = T.IDLE);
                                                break;
                                            case T.FRAG_LOADING_WAITING_RETRY:
                                                var t = performance.now(),
                                                    n = this.retryDate;
                                                (!n || t >= n || this.media && this.media.seeking) && (A.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = T.IDLE);
                                                break;
                                            case T.ERROR:
                                            case T.PAUSED:
                                            case T.STOPPED:
                                            case T.FRAG_LOADING:
                                            case T.PARSING:
                                            case T.PARSED:
                                            case T.ENDED:
                                        }
                                        this._checkBuffer(), this._checkFragmentChanged()
                                    }
                                }, {
                                    key: "_doTickIdle",
                                    value: function() {
                                        var e = this.hls,
                                            t = e.config,
                                            n = this.media;
                                        if (!n && (this.startFragRequested || !t.startFragPrefetch)) return !0;
                                        var i = void 0;
                                        i = this.loadedmetadata ? n.currentTime : this.nextLoadPosition;
                                        var r = e.nextLoadLevel,
                                            a = void 0;
                                        a = this.levels[r].hasOwnProperty("bitrate") ? Math.max(8 * t.maxBufferSize / this.levels[r].bitrate, t.maxBufferLength) : t.maxBufferLength, a = Math.min(a, t.maxMaxBufferLength);
                                        var o = f["default"].bufferInfo(this.mediaBuffer ? this.mediaBuffer : n, i, t.maxBufferHole),
                                            s = o.len;
                                        if (s >= a) return !0;
                                        A.logger.trace("buffer length of " + s.toFixed(3) + " is below max of " + a.toFixed(3) + ". checking for more payload ..."), e.nextLoadLevel = r, this.level = r;
                                        var l = this.levels[r].details;
                                        if ("undefined" == typeof l || l.live && this.levelLastLoaded !== r) return this.state = T.WAITING_LEVEL, !0;
                                        var u = this.fragPrevious;
                                        if (!l.live && u && u.sn === l.endSN && (!n.seeking && o.len || n.duration - o.end <= u.duration / 2)) {
                                            var c = {};
                                            return this.altAudio && (c.type = "video"), this.hls.trigger(p["default"].BUFFER_EOS, c), this.state = T.ENDED, !0
                                        }
                                        return this._fetchPayloadOrEos({
                                            pos: i,
                                            bufferInfo: o,
                                            levelDetails: l
                                        })
                                    }
                                }, {
                                    key: "_fetchPayloadOrEos",
                                    value: function(e) {
                                        var t = e.pos,
                                            n = e.bufferInfo,
                                            i = e.levelDetails,
                                            r = this.fragPrevious,
                                            a = this.level,
                                            o = i.fragments,
                                            s = o.length;
                                        if (0 === s) return !1;
                                        var l = o[0].start,
                                            u = o[s - 1].start + o[s - 1].duration,
                                            c = n.end,
                                            f = void 0;
                                        if (i.live) {
                                            if (f = this._ensureFragmentAtLivePoint({
                                                    levelDetails: i,
                                                    bufferEnd: c,
                                                    start: l,
                                                    end: u,
                                                    fragPrevious: r,
                                                    fragments: o,
                                                    fragLen: s
                                                }), null === f) return !1
                                        } else l > c && (f = o[0]);
                                        return f || (f = this._findFragment({
                                            start: l,
                                            fragPrevious: r,
                                            fragLen: s,
                                            fragments: o,
                                            bufferEnd: c,
                                            end: u,
                                            levelDetails: i
                                        })), f ? this._loadFragmentOrKey({
                                            frag: f,
                                            level: a,
                                            levelDetails: i,
                                            pos: t,
                                            bufferEnd: c
                                        }) : !0
                                    }
                                }, {
                                    key: "_ensureFragmentAtLivePoint",
                                    value: function(e) {
                                        var t = e.levelDetails,
                                            n = e.bufferEnd,
                                            i = e.start,
                                            r = e.end,
                                            a = e.fragPrevious,
                                            o = e.fragments,
                                            s = e.fragLen,
                                            l = this.hls.config,
                                            u = this.media,
                                            c = void 0,
                                            f = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * t.targetduration;
                                        if (n < Math.max(i, r - f)) {
                                            var h = this.liveSyncPosition = this.computeLivePosition(i, t);
                                            A.logger.log("buffer end: " + n.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), n = h, u && u.readyState && u.duration > h && (u.currentTime = h)
                                        }
                                        if (t.PTSKnown && n > r && u && u.readyState) return null;
                                        if (this.startFragRequested && !t.PTSKnown) {
                                            if (a) {
                                                var d = a.sn + 1;
                                                d >= t.startSN && d <= t.endSN && (c = o[d - t.startSN], A.logger.log("live playlist, switching playlist, load frag with next SN: " + c.sn))
                                            }
                                            c || (c = o[Math.min(s - 1, Math.round(s / 2))], A.logger.log("live playlist, switching playlist, unknown, load middle frag : " + c.sn))
                                        }
                                        return c
                                    }
                                }, {
                                    key: "_findFragment",
                                    value: function(e) {
                                        var t = e.start,
                                            n = e.fragPrevious,
                                            i = e.fragLen,
                                            r = e.fragments,
                                            a = e.bufferEnd,
                                            o = e.end,
                                            s = e.levelDetails,
                                            l = this.hls.config,
                                            c = void 0,
                                            f = void 0,
                                            h = l.maxFragLookUpTolerance;
                                        if (o > a ? (a > o - h && (h = 0), f = u["default"].search(r, function(e) {
                                                return e.start + e.duration - h <= a ? 1 : e.start - h > a && e.start ? -1 : 0
                                            })) : f = r[i - 1], f && (c = f, t = f.start, n && c.level === n.level && c.sn === n.sn))
                                            if (c.sn < s.endSN) {
                                                var d = n.deltaPTS,
                                                    v = c.sn - s.startSN;
                                                d && d > l.maxBufferHole && n.dropped && v ? (c = r[v - 1], A.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), n.loadCounter--) : (c = r[v + 1], A.logger.log("SN just loaded, load next one: " + c.sn))
                                            } else c = null;
                                        return c
                                    }
                                }, {
                                    key: "_loadFragmentOrKey",
                                    value: function(e) {
                                        var t = e.frag,
                                            n = e.level,
                                            i = e.levelDetails,
                                            r = e.pos,
                                            a = e.bufferEnd,
                                            o = this.hls,
                                            s = o.config;
                                        if (null == t.decryptdata.uri || null != t.decryptdata.key) {
                                            if (A.logger.log("Loading " + t.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + n + ", currentTime:" + r.toFixed(3) + ",bufferEnd:" + a.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, t.loadCounter) {
                                                t.loadCounter++;
                                                var l = s.fragLoadingLoopThreshold;
                                                if (t.loadCounter > l && Math.abs(this.fragLoadIdx - t.loadIdx) < l) return o.trigger(p["default"].ERROR, {
                                                    type: _.ErrorTypes.MEDIA_ERROR,
                                                    details: _.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                                                    fatal: !1,
                                                    frag: t
                                                }), !1
                                            } else t.loadCounter = 1;
                                            return t.loadIdx = this.fragLoadIdx, this.fragCurrent = t, this.startFragRequested = !0, t.autoLevel = o.autoLevelEnabled, t.bitrateTest = this.bitrateTest, o.trigger(p["default"].FRAG_LOADING, {
                                                frag: t
                                            }), this.state = T.FRAG_LOADING, !0
                                        }
                                        A.logger.log("Loading key for " + t.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + n), this.state = T.KEY_LOADING, o.trigger(p["default"].KEY_LOADING, {
                                            frag: t
                                        })
                                    }
                                }, {
                                    key: "getBufferRange",
                                    value: function(e) {
                                        var t, n, i = this.bufferRange;
                                        if (i)
                                            for (t = i.length - 1; t >= 0; t--)
                                                if (n = i[t], e >= n.start && e <= n.end) return n;
                                        return null
                                    }
                                }, {
                                    key: "followingBufferRange",
                                    value: function(e) {
                                        return e ? this.getBufferRange(e.end + .5) : null
                                    }
                                }, {
                                    key: "_checkFragmentChanged",
                                    value: function() {
                                        var e, t, n = this.media;
                                        if (n && n.readyState && n.seeking === !1 && (t = n.currentTime, t > n.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = t), f["default"].isBuffered(n, t) ? e = this.getBufferRange(t) : f["default"].isBuffered(n, t + .1) && (e = this.getBufferRange(t + .1)), e)) {
                                            var i = e.frag;
                                            i !== this.fragPlaying && (this.fragPlaying = i, this.hls.trigger(p["default"].FRAG_CHANGED, {
                                                frag: i
                                            }))
                                        }
                                    }
                                }, {
                                    key: "immediateLevelSwitch",
                                    value: function() {
                                        if (A.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                                            this.immediateSwitch = !0;
                                            var e = this.media,
                                                t = void 0;
                                            e ? (t = e.paused, e.pause()) : t = !0, this.previouslyPaused = t
                                        }
                                        var n = this.fragCurrent;
                                        n && n.loader && n.loader.abort(), this.fragCurrent = null, this.state = T.PAUSED, this.hls.trigger(p["default"].BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: Number.POSITIVE_INFINITY
                                        })
                                    }
                                }, {
                                    key: "immediateLevelSwitchEnd",
                                    value: function() {
                                        var e = this.media;
                                        e && e.buffered.length && (this.immediateSwitch = !1, f["default"].isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
                                    }
                                }, {
                                    key: "nextLevelSwitch",
                                    value: function() {
                                        var e = this.media;
                                        if (e && e.readyState) {
                                            var t = void 0,
                                                n = void 0,
                                                i = void 0;
                                            if (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, n = this.getBufferRange(e.currentTime), n && n.start > 1 && (this.state = T.PAUSED, this.hls.trigger(p["default"].BUFFER_FLUSHING, {
                                                    startOffset: 0,
                                                    endOffset: n.start - 1
                                                })), e.paused) t = 0;
                                            else {
                                                var r = this.hls.nextLoadLevel,
                                                    a = this.levels[r],
                                                    o = this.fragLastKbps;
                                                t = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
                                            }
                                            if (i = this.getBufferRange(e.currentTime + t), i && (i = this.followingBufferRange(i))) {
                                                var s = this.fragCurrent;
                                                s && s.loader && s.loader.abort(), this.fragCurrent = null, this.state = T.PAUSED, this.hls.trigger(p["default"].BUFFER_FLUSHING, {
                                                    startOffset: i.start,
                                                    endOffset: Number.POSITIVE_INFINITY
                                                })
                                            }
                                        }
                                    }
                                }, {
                                    key: "onMediaAttached",
                                    value: function(e) {
                                        var t = this.media = this.mediaBuffer = e.media;
                                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
                                        var n = this.config;
                                        this.levels && n.autoStartLoad && this.hls.startLoad(n.startPosition)
                                    }
                                }, {
                                    key: "onMediaDetaching",
                                    value: function() {
                                        var e = this.media;
                                        e && e.ended && (A.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                                        var t = this.levels;
                                        t && t.forEach(function(e) {
                                            e.details && e.details.fragments.forEach(function(e) {
                                                e.loadCounter = void 0
                                            })
                                        }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = null, this.loadedmetadata = !1, this.stopLoad()
                                    }
                                }, {
                                    key: "onMediaSeeking",
                                    value: function() {
                                        var e = this.media,
                                            t = e ? e.currentTime : void 0,
                                            n = this.config;
                                        if (A.logger.log("media seeking to " + t.toFixed(3)), this.state === T.FRAG_LOADING) {
                                            var i = f["default"].bufferInfo(e, t, this.config.maxBufferHole),
                                                r = this.fragCurrent;
                                            if (0 === i.len && r) {
                                                var a = n.maxFragLookUpTolerance,
                                                    o = r.start - a,
                                                    s = r.start + r.duration + a;
                                                o > t || t > s ? (r.loader && (A.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), r.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = T.IDLE) : A.logger.log("seeking outside of buffer but within currently loaded fragment range")
                                            }
                                        } else this.state === T.ENDED && (this.state = T.IDLE);
                                        e && (this.lastCurrentTime = t), this.state !== T.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * n.fragLoadingLoopThreshold), this.tick()
                                    }
                                }, {
                                    key: "onMediaSeeked",
                                    value: function() {
                                        A.logger.log("media seeked to " + this.media.currentTime.toFixed(3)), this.tick()
                                    }
                                }, {
                                    key: "onMediaEnded",
                                    value: function() {
                                        A.logger.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                                    }
                                }, {
                                    key: "onManifestLoading",
                                    value: function() {
                                        A.logger.log("trigger BUFFER_RESET"), this.hls.trigger(p["default"].BUFFER_RESET), this.bufferRange = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                                    }
                                }, {
                                    key: "onManifestParsed",
                                    value: function(e) {
                                        var t, n = !1,
                                            i = !1;
                                        e.levels.forEach(function(e) {
                                            t = e.audioCodec, t && (-1 !== t.indexOf("mp4a.40.2") && (n = !0), -1 !== t.indexOf("mp4a.40.5") && (i = !0))
                                        }), this.audioCodecSwitch = n && i, this.audioCodecSwitch && A.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startLevelLoaded = !1, this.startFragRequested = !1;
                                        var r = this.config;
                                        r.autoStartLoad && this.hls.startLoad(r.startPosition)
                                    }
                                }, {
                                    key: "onLevelLoaded",
                                    value: function(e) {
                                        var t = e.details,
                                            n = e.level,
                                            i = this.levels[n],
                                            r = t.totalduration,
                                            a = 0;
                                        if (A.logger.log("level " + n + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + r), this.levelLastLoaded = n, t.live) {
                                            var o = i.details;
                                            o && t.fragments.length > 0 ? (E["default"].mergeDetails(o, t), a = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(a, o), t.PTSKnown ? A.logger.log("live playlist sliding:" + a.toFixed(3)) : A.logger.log("live playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, A.logger.log("live playlist - first load, unknown sliding"))
                                        } else t.PTSKnown = !1;
                                        if (i.details = t, this.hls.trigger(p["default"].LEVEL_UPDATED, {
                                                details: t,
                                                level: n
                                            }), this.startFragRequested === !1) {
                                            if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                                var s = t.startTimeOffset;
                                                isNaN(s) ? t.live ? (this.startPosition = this.computeLivePosition(a, t), A.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (0 > s && (A.logger.log("negative start time offset " + s + ", count from end of last fragment"), s = a + r + s), A.logger.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s)
                                            }
                                            this.nextLoadPosition = this.startPosition
                                        }
                                        this.state === T.WAITING_LEVEL && (this.state = T.IDLE), this.tick()
                                    }
                                }, {
                                    key: "onKeyLoaded",
                                    value: function() {
                                        this.state === T.KEY_LOADING && (this.state = T.IDLE, this.tick())
                                    }
                                }, {
                                    key: "onFragLoaded",
                                    value: function(e) {
                                        var t = this.fragCurrent,
                                            n = e.frag;
                                        if (this.state === T.FRAG_LOADING && t && "main" === n.type && n.level === t.level && n.sn === t.sn) {
                                            var i = e.stats,
                                                r = this.levels[t.level],
                                                a = r.details;
                                            if (A.logger.log("Loaded  " + t.sn + " of [" + a.startSN + " ," + a.endSN + "],level " + t.level), this.bitrateTest = !1, n.bitrateTest === !0 && this.hls.nextLoadLevel) this.state = T.IDLE, this.startFragRequested = !1, i.tparsed = i.tbuffered = performance.now(), this.hls.trigger(p["default"].FRAG_BUFFERED, {
                                                stats: i,
                                                frag: t,
                                                id: "main"
                                            }), this.tick();
                                            else {
                                                this.state = T.PARSING, this.stats = i;
                                                var o = a.totalduration,
                                                    s = isNaN(t.startDTS) ? t.start : t.startDTS,
                                                    l = t.level,
                                                    u = t.sn,
                                                    c = this.config.defaultAudioCodec || r.audioCodec;
                                                this.audioCodecSwap && (A.logger.log("swapping playlist audio codec"), void 0 === c && (c = this.lastAudioCodec), c && (c = -1 !== c.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingAppending = 0, A.logger.log("Parsing " + u + " of [" + a.startSN + " ," + a.endSN + "],level " + l + ", cc " + t.cc);
                                                var f = this.demuxer;
                                                f || (f = this.demuxer = new d["default"](this.hls, "main"));
                                                var h = a.PTSKnown || !a.live;
                                                f.push(e.payload, c, r.videoCodec, s, t.cc, l, u, o, t.decryptdata, h)
                                            }
                                        }
                                        this.fragLoadError = 0
                                    }
                                }, {
                                    key: "onFragParsingInitSegment",
                                    value: function(e) {
                                        var t = this.fragCurrent;
                                        if (t && "main" === e.id && e.sn === t.sn && e.level === t.level && this.state === T.PARSING) {
                                            var n, i, r = e.tracks;
                                            if (r.audio && this.altAudio && delete r.audio, i = r.audio) {
                                                var a = this.levels[this.level].audioCodec,
                                                    o = navigator.userAgent.toLowerCase();
                                                a && this.audioCodecSwap && (A.logger.log("swapping playlist audio codec"), a = -1 !== a.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== i.metadata.channelCount && -1 === o.indexOf("firefox") && (a = "mp4a.40.5"), -1 !== o.indexOf("android") && (a = "mp4a.40.2", A.logger.log("Android: force audio codec to" + a)), i.levelCodec = a, i.id = e.id
                                            }
                                            if (i = r.video, i && (i.levelCodec = this.levels[this.level].videoCodec, i.id = e.id), e.unique) {
                                                var s = {
                                                    codec: "",
                                                    levelCodec: ""
                                                };
                                                for (n in e.tracks) i = r[n], s.container = i.container, s.codec && (s.codec += ",", s.levelCodec += ","), i.codec && (s.codec += i.codec), i.levelCodec && (s.levelCodec += i.levelCodec);
                                                r = {
                                                    audiovideo: s
                                                }
                                            }
                                            this.hls.trigger(p["default"].BUFFER_CODECS, r);
                                            for (n in r) {
                                                i = r[n], A.logger.log("main track:" + n + ",container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                                                var l = i.initSegment;
                                                l && (this.pendingAppending++, this.hls.trigger(p["default"].BUFFER_APPENDING, {
                                                    type: n,
                                                    data: l,
                                                    parent: "main",
                                                    content: "initSegment"
                                                }))
                                            }
                                            this.tick()
                                        }
                                    }
                                }, {
                                    key: "onFragParsingData",
                                    value: function(e) {
                                        var t = this,
                                            n = this.fragCurrent;
                                        if (n && "main" === e.id && e.sn === n.sn && e.level === n.level && ("audio" !== e.type || !this.altAudio) && this.state === T.PARSING) {
                                            var i = this.levels[this.level],
                                                r = this.fragCurrent;
                                            A.logger.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0));
                                            var a = E["default"].updateFragPTSDTS(i.details, r.sn, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
                                                o = this.hls;
                                            o.trigger(p["default"].LEVEL_PTS_UPDATED, {
                                                details: i.details,
                                                level: this.level,
                                                drift: a
                                            }), "video" === e.type && (r.dropped = e.dropped), [e.data1, e.data2].forEach(function(n) {
                                                n && (t.pendingAppending++, o.trigger(p["default"].BUFFER_APPENDING, {
                                                    type: e.type,
                                                    data: n,
                                                    parent: "main",
                                                    content: "data"
                                                }))
                                            }), this.nextLoadPosition = e.endPTS, this.bufferRange.push({
                                                type: e.type,
                                                start: e.startPTS,
                                                end: e.endPTS,
                                                frag: r
                                            }), this.tick()
                                        }
                                    }
                                }, {
                                    key: "onFragParsed",
                                    value: function(e) {
                                        var t = this.fragCurrent;
                                        t && "main" === e.id && e.sn === t.sn && e.level === t.level && this.state === T.PARSING && (this.stats.tparsed = performance.now(), this.state = T.PARSED, this._checkAppendedParsed())
                                    }
                                }, {
                                    key: "onAudioTrackSwitch",
                                    value: function(e) {
                                        var t = !!e.url;
                                        if (t) this.videoBuffer && this.mediaBuffer !== this.videoBuffer && (A.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = this.videoBuffer);
                                        else if (this.mediaBuffer !== this.media) {
                                            A.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                            var n = this.fragCurrent;
                                            n.loader && (A.logger.log("switching to main audio track, cancel main fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = T.IDLE
                                        }
                                        this.altAudio = t
                                    }
                                }, {
                                    key: "onBufferCreated",
                                    value: function(e) {
                                        var t = e.tracks,
                                            n = void 0,
                                            i = void 0,
                                            r = !1;
                                        for (var a in t) {
                                            var o = t[a];
                                            "main" === o.id ? (i = a, n = o, "video" === a && (this.videoBuffer = t[a].buffer)) : r = !0
                                        }
                                        r && n ? (A.logger.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = n.buffer) : this.mediaBuffer = this.media
                                    }
                                }, {
                                    key: "onBufferAppended",
                                    value: function(e) {
                                        if ("main" === e.parent) switch (this.state) {
                                            case T.PARSING:
                                            case T.PARSED:
                                                this.pendingAppending--, this._checkAppendedParsed()
                                        }
                                    }
                                }, {
                                    key: "_checkAppendedParsed",
                                    value: function() {
                                        if (this.state === T.PARSED && 0 === this.pendingAppending) {
                                            var e = this.fragCurrent,
                                                t = this.stats;
                                            if (e) {
                                                this.fragPrevious = e, t.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * t.total / (t.tbuffered - t.tfirst)), this.hls.trigger(p["default"].FRAG_BUFFERED, {
                                                    stats: t,
                                                    frag: e,
                                                    id: "main"
                                                });
                                                var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                                A.logger.log("main buffered : " + k["default"].toString(n.buffered)), this.state = T.IDLE
                                            }
                                            this.tick()
                                        }
                                    }
                                }, {
                                    key: "onError",
                                    value: function(e) {
                                        var t = e.frag || this.fragCurrent;
                                        if (!t || "main" === t.type) {
                                            var n = this.media,
                                                i = n && f["default"].isBuffered(n, n.currentTime) && f["default"].isBuffered(n, n.currentTime + .4);
                                            switch (e.details) {
                                                case _.ErrorDetails.FRAG_LOAD_ERROR:
                                                case _.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                    if (!e.fatal) {
                                                        var r = this.fragLoadError;
                                                        r ? r++ : r = 1;
                                                        var a = this.config;
                                                        if (r <= a.fragLoadingMaxRetry || i) {
                                                            this.fragLoadError = r, t.loadCounter = 0;
                                                            var o = Math.min(Math.pow(2, r - 1) * a.fragLoadingRetryDelay, a.fragLoadingMaxRetryTimeout);
                                                            A.logger.warn("mediaController: frag loading failed, retry in " + o + " ms"), this.retryDate = performance.now() + o, this.state = T.FRAG_LOADING_WAITING_RETRY
                                                        } else A.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.trigger(p["default"].ERROR, e), this.state = T.ERROR
                                                    }
                                                    break;
                                                case _.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                                    e.fatal || (i ? (this._reduceMaxBufferLength(t.duration), this.state = T.IDLE) : t.autoLevel && 0 !== t.level || (e.fatal = !0, this.hls.trigger(p["default"].ERROR, e), this.state = T.ERROR));
                                                    break;
                                                case _.ErrorDetails.LEVEL_LOAD_ERROR:
                                                case _.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                                case _.ErrorDetails.KEY_LOAD_ERROR:
                                                case _.ErrorDetails.KEY_LOAD_TIMEOUT:
                                                    this.state !== T.ERROR && (this.state = e.fatal ? T.ERROR : T.IDLE, A.logger.warn("mediaController: " + e.details + " while loading frag,switch to " + this.state + " state ..."));
                                                    break;
                                                case _.ErrorDetails.BUFFER_FULL_ERROR:
                                                    this.state !== T.PARSING && this.state !== T.PARSED || (i ? (this._reduceMaxBufferLength(t.duration), this.state = T.IDLE) : (A.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.state = T.PAUSED, this.hls.trigger(p["default"].BUFFER_FLUSHING, {
                                                        startOffset: 0,
                                                        endOffset: Number.POSITIVE_INFINITY
                                                    })))
                                            }
                                        }
                                    }
                                }, {
                                    key: "_reduceMaxBufferLength",
                                    value: function(e) {
                                        var t = this.config;
                                        t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, A.logger.warn("reduce max buffer length to " + t.maxMaxBufferLength + "s and switch to IDLE state"), this.fragLoadIdx += 2 * t.fragLoadingLoopThreshold)
                                    }
                                }, {
                                    key: "_checkBuffer",
                                    value: function() {
                                        var e = this.media;
                                        if (e && e.readyState) {
                                            var t = e.currentTime,
                                                n = e.buffered;
                                            if (!this.loadedmetadata && n.length) {
                                                this.loadedmetadata = !0;
                                                var i = this.startPosition,
                                                    r = f["default"].isBuffered(e, i);
                                                t === i && r || (A.logger.log("target start position:" + i), r || (i = n.start(0), A.logger.log("target start position not buffered, seek to buffered.start(0) " + i)), A.logger.log("adjust currentTime from " + t + " to " + i), e.currentTime = i)
                                            } else if (this.immediateSwitch) this.immediateLevelSwitchEnd();
                                            else {
                                                var a = f["default"].bufferInfo(e, t, 0),
                                                    o = !(e.paused || e.ended || 0 === e.buffered.length),
                                                    s = .4,
                                                    l = t > e.playbackRate * this.lastCurrentTime,
                                                    u = this.config;
                                                if (this.stalled && l && (this.stalled = !1, A.logger.log("playback not stuck anymore @" + t)), o && a.len <= s && (l ? (s = 0, this.seekHoleNudgeDuration = 0) : this.stalled ? this.seekHoleNudgeDuration += u.seekHoleNudgeDuration : (this.seekHoleNudgeDuration = 0, A.logger.log("playback seems stuck @" + t), this.hls.trigger(p["default"].ERROR, {
                                                        type: _.ErrorTypes.MEDIA_ERROR,
                                                        details: _.ErrorDetails.BUFFER_STALLED_ERROR,
                                                        fatal: !1
                                                    }), this.stalled = !0), a.len <= s)) {
                                                    var c = a.nextStart,
                                                        h = c - t;
                                                    if (c && h < u.maxSeekHole && h > 0) {
                                                        A.logger.log("adjust currentTime from " + e.currentTime + " to next buffered @ " + c + " + nudge " + this.seekHoleNudgeDuration);
                                                        var d = c + this.seekHoleNudgeDuration - e.currentTime;
                                                        e.currentTime = c + this.seekHoleNudgeDuration, this.hls.trigger(p["default"].ERROR, {
                                                            type: _.ErrorTypes.MEDIA_ERROR,
                                                            details: _.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                                            fatal: !1,
                                                            hole: d
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    key: "onFragLoadEmergencyAborted",
                                    value: function() {
                                        this.state = T.IDLE, this.loadedmetadata || (this.startFragRequested = !1), this.tick()
                                    }
                                }, {
                                    key: "onBufferFlushed",
                                    value: function() {
                                        var e = this.mediaBuffer ? this.mediaBuffer : this.media,
                                            t = this.bufferRange,
                                            n = [],
                                            i = void 0,
                                            r = void 0;
                                        for (r = 0; r < t.length; r++) i = t[r], f["default"].isBuffered(e, (i.start + i.end) / 2) && n.push(i);
                                        this.bufferRange = n, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = T.IDLE, this.fragPrevious = null
                                    }
                                }, {
                                    key: "swapAudioCodec",
                                    value: function() {
                                        this.audioCodecSwap = !this.audioCodecSwap
                                    }
                                }, {
                                    key: "computeLivePosition",
                                    value: function(e, t) {
                                        var n = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                                        return e + Math.max(0, t.totalduration - n)
                                    }
                                }, {
                                    key: "state",
                                    set: function(e) {
                                        if (this.state !== e) {
                                            var t = this.state;
                                            this._state = e, A.logger.log("engine state transition from " + t + " to " + e), this.hls.trigger(p["default"].STREAM_STATE_TRANSITION, {
                                                previousState: t,
                                                nextState: e
                                            })
                                        }
                                    },
                                    get: function() {
                                        return this._state
                                    }
                                }, {
                                    key: "currentLevel",
                                    get: function() {
                                        var e = this.media;
                                        if (e) {
                                            var t = this.getBufferRange(e.currentTime);
                                            if (t) return t.frag.level
                                        }
                                        return -1
                                    }
                                }, {
                                    key: "nextBufferRange",
                                    get: function() {
                                        var e = this.media;
                                        return e ? this.followingBufferRange(this.getBufferRange(e.currentTime)) : null
                                    }
                                }, {
                                    key: "nextLevel",
                                    get: function() {
                                        var e = this.nextBufferRange;
                                        return e ? e.frag.level : -1
                                    }
                                }, {
                                    key: "liveSyncPosition",
                                    get: function() {
                                        return this._liveSyncPosition
                                    },
                                    set: function(e) {
                                        this._liveSyncPosition = e
                                    }
                                }]), t
                            }(y["default"]);
                        n["default"] = L
                    }, {
                        20: 20,
                        24: 24,
                        25: 25,
                        26: 26,
                        28: 28,
                        29: 29,
                        39: 39,
                        43: 43,
                        45: 45
                    }],
                    12: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(40),
                            d = i(h),
                            v = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, u["default"].MEDIA_ATTACHING, u["default"].MEDIA_DETACHING, u["default"].FRAG_PARSING_USERDATA, u["default"].MANIFEST_LOADING, u["default"].FRAG_LOADED, u["default"].LEVEL_SWITCH));
                                    if (n.hls = e, n.config = e.config, n.enabled = !0, n.Cues = e.config.cueHandler, n.config.enableCEA708Captions) {
                                        var i = n,
                                            o = {
                                                newCue: function(e, t, n) {
                                                    if (!i.textTrack1) {
                                                        var r = i.getExistingTrack("1");
                                                        if (r) {
                                                            i.textTrack1 = r, i.clearCurrentCues(i.textTrack1);
                                                            var a = new window.Event("addtrack");
                                                            a.track = i.textTrack1, i.media.dispatchEvent(a)
                                                        } else i.textTrack1 = i.createTextTrack("captions", "English", "en"), i.textTrack1.textTrack1 = !0
                                                    }
                                                    i.Cues.newCue(i.textTrack1, e, t, n)
                                                }
                                            },
                                            s = {
                                                newCue: function(e, t, n) {
                                                    if (!i.textTrack2) {
                                                        var r = i.getExistingTrack("2");
                                                        if (r) {
                                                            i.textTrack2 = r, i.clearCurrentCues(i.textTrack2);
                                                            var a = new window.Event("addtrack");
                                                            a.track = i.textTrack2, i.media.dispatchEvent(a)
                                                        } else i.textTrack2 = i.createTextTrack("captions", "Spanish", "es"), i.textTrack2.textTrack2 = !0
                                                    }
                                                    i.Cues.newCue(i.textTrack2, e, t, n)
                                                }
                                            };
                                        n.cea608Parser = new d["default"](0, o, s)
                                    }
                                    return n
                                }
                                return o(t, e), s(t, [{
                                    key: "clearCurrentCues",
                                    value: function(e) {
                                        if (e && e.cues)
                                            for (; e.cues.length > 0;) e.removeCue(e.cues[0])
                                    }
                                }, {
                                    key: "getExistingTrack",
                                    value: function(e) {
                                        var t = this.media;
                                        if (t)
                                            for (var n = 0; n < t.textTracks.length; n++) {
                                                var i = t.textTracks[n],
                                                    r = "textTrack" + e;
                                                if (i[r] === !0) return i
                                            }
                                        return null
                                    }
                                }, {
                                    key: "createTextTrack",
                                    value: function(e, t, n) {
                                        return this.media ? this.media.addTextTrack(e, t, n) : void 0
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        f["default"].prototype.destroy.call(this)
                                    }
                                }, {
                                    key: "onMediaAttaching",
                                    value: function(e) {
                                        this.media = e.media
                                    }
                                }, {
                                    key: "onMediaDetaching",
                                    value: function() {}
                                }, {
                                    key: "onManifestLoading",
                                    value: function() {
                                        this.lastPts = Number.NEGATIVE_INFINITY
                                    }
                                }, {
                                    key: "onLevelSwitch",
                                    value: function() {
                                        "NONE" === this.hls.currentLevel.closedCaptions ? this.enabled = !1 : this.enabled = !0
                                    }
                                }, {
                                    key: "onFragLoaded",
                                    value: function(e) {
                                        if ("main" === e.frag.type) {
                                            var t = e.frag.start;
                                            t <= this.lastPts && (this.clearCurrentCues(this.textTrack1), this.clearCurrentCues(this.textTrack2)), this.lastPts = t
                                        }
                                    }
                                }, {
                                    key: "onFragParsingUserdata",
                                    value: function(e) {
                                        if (this.enabled)
                                            for (var t = 0; t < e.samples.length; t++) {
                                                var n = this.extractCea608Data(e.samples[t].bytes);
                                                this.cea608Parser.addData(e.samples[t].pts, n)
                                            }
                                    }
                                }, {
                                    key: "extractCea608Data",
                                    value: function(e) {
                                        for (var t, n, i, r, a, o = 31 & e[0], s = 2, l = [], u = 0; o > u; u++) t = e[s++], n = 127 & e[s++], i = 127 & e[s++], r = 0 !== (4 & t), a = 3 & t, 0 === n && 0 === i || r && 0 === a && (l.push(n), l.push(i));
                                        return l
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = v
                    }, {
                        25: 25,
                        26: 26,
                        40: 40
                    }],
                    13: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = function() {
                                function e(t) {
                                    i(this, e), this._tables = [
                                        [
                                            [],
                                            [],
                                            [],
                                            [],
                                            []
                                        ],
                                        [
                                            [],
                                            [],
                                            [],
                                            [],
                                            []
                                        ]
                                    ], this._precompute();
                                    var n, r, a, o, s, l = this._tables[0][4],
                                        u = this._tables[1],
                                        c = t.length,
                                        f = 1;
                                    if (4 !== c && 6 !== c && 8 !== c) throw new Error("Invalid aes key size=" + c);
                                    for (o = t.slice(0), s = [], this._key = [o, s], n = c; 4 * c + 28 > n; n++) a = o[n - 1], (n % c === 0 || 8 === c && n % c === 4) && (a = l[a >>> 24] << 24 ^ l[a >> 16 & 255] << 16 ^ l[a >> 8 & 255] << 8 ^ l[255 & a], n % c === 0 && (a = a << 8 ^ a >>> 24 ^ f << 24, f = f << 1 ^ 283 * (f >> 7))), o[n] = o[n - c] ^ a;
                                    for (r = 0; n; r++, n--) a = o[3 & r ? n : n - 4], 4 >= n || 4 > r ? s[r] = a : s[r] = u[0][l[a >>> 24]] ^ u[1][l[a >> 16 & 255]] ^ u[2][l[a >> 8 & 255]] ^ u[3][l[255 & a]]
                                }
                                return r(e, [{
                                    key: "_precompute",
                                    value: function() {
                                        var e, t, n, i, r, a, o, s, l, u = this._tables[0],
                                            c = this._tables[1],
                                            f = u[4],
                                            h = c[4],
                                            d = [],
                                            v = [];
                                        for (e = 0; 256 > e; e++) v[(d[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                                        for (t = n = 0; !f[t]; t ^= i || 1, n = v[n] || 1)
                                            for (o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4, o = o >> 8 ^ 255 & o ^ 99, f[t] = o, h[o] = t, a = d[r = d[i = d[t]]], l = 16843009 * a ^ 65537 * r ^ 257 * i ^ 16843008 * t, s = 257 * d[o] ^ 16843008 * o, e = 0; 4 > e; e++) u[e][t] = s = s << 24 ^ s >>> 8, c[e][o] = l = l << 24 ^ l >>> 8;
                                        for (e = 0; 5 > e; e++) u[e] = u[e].slice(0), c[e] = c[e].slice(0)
                                    }
                                }, {
                                    key: "decrypt",
                                    value: function(e, t, n, i, r, a) {
                                        var o, s, l, u, c = this._key[1],
                                            f = e ^ c[0],
                                            h = i ^ c[1],
                                            d = n ^ c[2],
                                            v = t ^ c[3],
                                            p = c.length / 4 - 2,
                                            g = 4,
                                            y = this._tables[1],
                                            m = y[0],
                                            E = y[1],
                                            b = y[2],
                                            k = y[3],
                                            _ = y[4];
                                        for (u = 0; p > u; u++) o = m[f >>> 24] ^ E[h >> 16 & 255] ^ b[d >> 8 & 255] ^ k[255 & v] ^ c[g], s = m[h >>> 24] ^ E[d >> 16 & 255] ^ b[v >> 8 & 255] ^ k[255 & f] ^ c[g + 1], l = m[d >>> 24] ^ E[v >> 16 & 255] ^ b[f >> 8 & 255] ^ k[255 & h] ^ c[g + 2], v = m[v >>> 24] ^ E[f >> 16 & 255] ^ b[h >> 8 & 255] ^ k[255 & d] ^ c[g + 3], g += 4, f = o, h = s, d = l;
                                        for (u = 0; 4 > u; u++) r[(3 & -u) + a] = _[f >>> 24] << 24 ^ _[h >> 16 & 255] << 16 ^ _[d >> 8 & 255] << 8 ^ _[255 & v] ^ c[g++], o = f, f = h, h = d, d = v, v = o
                                    }
                                }]), e
                            }();
                        n["default"] = a
                    }, {}],
                    14: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(13),
                            s = i(o),
                            l = function() {
                                function e(t, n) {
                                    r(this, e), this.key = t, this.iv = n
                                }
                                return a(e, [{
                                    key: "ntoh",
                                    value: function(e) {
                                        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                                    }
                                }, {
                                    key: "doDecrypt",
                                    value: function(e, t, n) {
                                        var i, r, a, o, l, u, c, f, h, d = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                                            v = new s["default"](Array.prototype.slice.call(t)),
                                            p = new Uint8Array(e.byteLength),
                                            g = new Int32Array(p.buffer);
                                        for (i = ~~n[0], r = ~~n[1], a = ~~n[2], o = ~~n[3], h = 0; h < d.length; h += 4) l = ~~this.ntoh(d[h]), u = ~~this.ntoh(d[h + 1]), c = ~~this.ntoh(d[h + 2]), f = ~~this.ntoh(d[h + 3]), v.decrypt(l, u, c, f, g, h), g[h] = this.ntoh(g[h] ^ i), g[h + 1] = this.ntoh(g[h + 1] ^ r), g[h + 2] = this.ntoh(g[h + 2] ^ a), g[h + 3] = this.ntoh(g[h + 3] ^ o), i = l, r = u, a = c, o = f;
                                        return p
                                    }
                                }, {
                                    key: "localDecrypt",
                                    value: function(e, t, n, i) {
                                        var r = this.doDecrypt(e, t, n);
                                        i.set(r, e.byteOffset)
                                    }
                                }, {
                                    key: "decrypt",
                                    value: function(e) {
                                        var t = 32e3,
                                            n = new Int32Array(e),
                                            i = new Uint8Array(e.byteLength),
                                            r = 0,
                                            a = this.key,
                                            o = this.iv;
                                        for (this.localDecrypt(n.subarray(r, r + t), a, o, i), r = t; r < n.length; r += t) o = new Uint32Array([this.ntoh(n[r - 4]), this.ntoh(n[r - 3]), this.ntoh(n[r - 2]), this.ntoh(n[r - 1])]), this.localDecrypt(n.subarray(r, r + t), a, o, i);
                                        return i
                                    }
                                }]), e
                            }();
                        n["default"] = l
                    }, {
                        13: 13
                    }],
                    15: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(14),
                            s = i(o),
                            l = e(24),
                            u = e(43),
                            c = function() {
                                function e(t) {
                                    r(this, e), this.hls = t;
                                    try {
                                        var n = window ? window.crypto : crypto;
                                        this.subtle = n.subtle || n.webkitSubtle, this.disableWebCrypto = !this.subtle
                                    } catch (i) {
                                        this.disableWebCrypto = !0
                                    }
                                }
                                return a(e, [{
                                    key: "destroy",
                                    value: function() {}
                                }, {
                                    key: "decrypt",
                                    value: function(e, t, n, i) {
                                        this.disableWebCrypto && this.hls.config.enableSoftwareAES ? this.decryptBySoftware(e, t, n, i) : this.decryptByWebCrypto(e, t, n, i)
                                    }
                                }, {
                                    key: "decryptByWebCrypto",
                                    value: function(e, t, n, i) {
                                        var r = this;
                                        u.logger.log("decrypting by WebCrypto API"), this.subtle.importKey("raw", t, {
                                            name: "AES-CBC",
                                            length: 128
                                        }, !1, ["decrypt"]).then(function(a) {
                                            r.subtle.decrypt({
                                                name: "AES-CBC",
                                                iv: n.buffer
                                            }, a, e).then(i)["catch"](function(a) {
                                                r.onWebCryptoError(a, e, t, n, i)
                                            })
                                        })["catch"](function(a) {
                                            r.onWebCryptoError(a, e, t, n, i)
                                        })
                                    }
                                }, {
                                    key: "decryptBySoftware",
                                    value: function(e, t, n, i) {
                                        u.logger.log("decrypting by JavaScript Implementation");
                                        var r = new DataView(t.buffer),
                                            a = new Uint32Array([r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12)]);
                                        r = new DataView(n.buffer);
                                        var o = new Uint32Array([r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12)]),
                                            l = new s["default"](a, o);
                                        i(l.decrypt(e).buffer)
                                    }
                                }, {
                                    key: "onWebCryptoError",
                                    value: function(e, t, n, i, r) {
                                        this.hls.config.enableSoftwareAES ? (u.logger.log("disabling to use WebCrypto API"), this.disableWebCrypto = !0, this.decryptBySoftware(t, n, i, r)) : (u.logger.error("decrypting error : " + e.message), this.hls.trigger(Event.ERROR, {
                                            type: l.ErrorTypes.MEDIA_ERROR,
                                            details: l.ErrorDetails.FRAG_DECRYPT_ERROR,
                                            fatal: !0,
                                            reason: e.message
                                        }))
                                    }
                                }]), e
                            }();
                        n["default"] = c
                    }, {
                        14: 14,
                        24: 24,
                        43: 43
                    }],
                    16: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(17),
                            s = i(o),
                            l = e(43),
                            u = e(22),
                            c = i(u),
                            f = function() {
                                function e(t, n, i, a) {
                                    r(this, e), this.observer = t, this.id = n, this.remuxerClass = i, this.config = a, this.remuxer = new this.remuxerClass(t, n, a), this.insertDiscontinuity()
                                }
                                return a(e, [{
                                    key: "insertDiscontinuity",
                                    value: function() {
                                        this._aacTrack = {
                                            container: "audio/adts",
                                            type: "audio",
                                            id: -1,
                                            sequenceNumber: 0,
                                            samples: [],
                                            len: 0
                                        }
                                    }
                                }, {
                                    key: "push",
                                    value: function(e, t, n, i, r, a, o, u, f) {
                                        var h, d, v, p, g, y, m, E, b, k, _ = new c["default"](e),
                                            A = 90 * _.timeStamp,
                                            T = !1;
                                        for (r !== this.lastCC ? (l.logger.log(this.id + " discontinuity detected"), this.lastCC = r, this.insertDiscontinuity(), this.remuxer.switchLevel(), this.remuxer.insertDiscontinuity()) : a !== this.lastLevel ? (l.logger.log("audio track switch detected"), this.lastLevel = a, this.remuxer.switchLevel(), this.insertDiscontinuity()) : o === this.lastSN + 1 && (T = !0), h = this._aacTrack, this.lastSN = o, this.lastLevel = a, y = _.length, b = e.length; b - 1 > y && (255 !== e[y] || 240 !== (240 & e[y + 1])); y++);
                                        for (h.audiosamplerate || (d = s["default"].getAudioConfig(this.observer, e, y, t), h.config = d.config, h.audiosamplerate = d.samplerate, h.channelCount = d.channelCount, h.codec = d.codec, h.duration = u, l.logger.log("parsed codec:" + h.codec + ",rate:" + d.samplerate + ",nb channel:" + d.channelCount)), g = 0, p = 9216e4 / h.audiosamplerate; b > y + 5 && (m = 1 & e[y + 1] ? 7 : 9, v = (3 & e[y + 3]) << 11 | e[y + 4] << 3 | (224 & e[y + 5]) >>> 5, v -= m, v > 0 && b >= y + m + v);)
                                            for (E = A + g * p, k = {
                                                    unit: e.subarray(y + m, y + m + v),
                                                    pts: E,
                                                    dts: E
                                                }, h.samples.push(k), h.len += v, y += v + m, g++; b - 1 > y && (255 !== e[y] || 240 !== (240 & e[y + 1])); y++);
                                        this.remuxer.remux(a, o, this._aacTrack, {
                                            samples: []
                                        }, {
                                            samples: [{
                                                pts: A,
                                                dts: A,
                                                unit: _.payload
                                            }]
                                        }, {
                                            samples: []
                                        }, i, T, f)
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {}
                                }], [{
                                    key: "probe",
                                    value: function(e) {
                                        var t, n, i = new c["default"](e);
                                        if (i.hasTimeStamp)
                                            for (t = i.length, n = e.length; n - 1 > t; t++)
                                                if (255 === e[t] && 240 === (240 & e[t + 1])) return !0;
                                        return !1
                                    }
                                }]), e
                            }();
                        n["default"] = f
                    }, {
                        17: 17,
                        22: 22,
                        43: 43
                    }],
                    17: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = e(43),
                            o = e(24),
                            s = function() {
                                function e() {
                                    i(this, e)
                                }
                                return r(e, null, [{
                                    key: "getAudioConfig",
                                    value: function(e, t, n, i) {
                                        var r, s, l, u, c, f = navigator.userAgent.toLowerCase(),
                                            h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                                        return r = ((192 & t[n + 2]) >>> 6) + 1, s = (60 & t[n + 2]) >>> 2, s > h.length - 1 ? void e.trigger(Event.ERROR, {
                                            type: o.ErrorTypes.MEDIA_ERROR,
                                            details: o.ErrorDetails.FRAG_PARSING_ERROR,
                                            fatal: !0,
                                            reason: "invalid ADTS sampling index:" + s
                                        }) : (u = (1 & t[n + 2]) << 2, u |= (192 & t[n + 3]) >>> 6, a.logger.log("manifest codec:" + i + ",ADTS data:type:" + r + ",sampleingIndex:" + s + "[" + h[s] + "Hz],channelConfig:" + u), /firefox|OPR/i.test(f) ? s >= 6 ? (r = 5, c = new Array(4), l = s - 3) : (r = 2, c = new Array(2), l = s) : -1 !== f.indexOf("android") ? (r = 2, c = new Array(2), l = s) : (r = 5, c = new Array(4), i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && s >= 6 ? l = s - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && s >= 6 && 1 === u || !i && 1 === u) && (r = 2, c = new Array(2)), l = s)), c[0] = r << 3, c[0] |= (14 & s) >> 1, c[1] |= (1 & s) << 7, c[1] |= u << 3, 5 === r && (c[1] |= (14 & l) >> 1, c[2] = (1 & l) << 7, c[2] |= 8, c[3] = 0), {
                                            config: c,
                                            samplerate: h[s],
                                            channelCount: u,
                                            codec: "mp4a.40." + r
                                        })
                                    }
                                }]), e
                            }();
                        n["default"] = s
                    }, {
                        24: 24,
                        43: 43
                    }],
                    18: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(26),
                            s = i(o),
                            l = e(24),
                            u = e(16),
                            c = i(u),
                            f = e(23),
                            h = i(f),
                            d = e(36),
                            v = i(d),
                            p = e(37),
                            g = i(p),
                            y = function() {
                                function e(t, n, i) {
                                    var a = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3];
                                    r(this, e), this.hls = t, this.id = n, this.config = this.hls.config || a, this.typeSupported = i
                                }
                                return a(e, [{
                                    key: "destroy",
                                    value: function() {
                                        var e = this.demuxer;
                                        e && e.destroy()
                                    }
                                }, {
                                    key: "push",
                                    value: function(e, t, n, i, r, a, o, u, f) {
                                        var d = this.demuxer;
                                        if (!d) {
                                            var p = this.hls,
                                                y = this.id;
                                            if (h["default"].probe(e)) d = this.typeSupported.mp2t === !0 ? new h["default"](p, y, g["default"], this.config) : new h["default"](p, y, v["default"], this.config);
                                            else {
                                                if (!c["default"].probe(e)) return void p.trigger(s["default"].ERROR, {
                                                    type: l.ErrorTypes.MEDIA_ERROR,
                                                    id: y,
                                                    details: l.ErrorDetails.FRAG_PARSING_ERROR,
                                                    fatal: !0,
                                                    reason: "no demux matching with content found"
                                                });
                                                d = new c["default"](p, y, v["default"], this.config)
                                            }
                                            this.demuxer = d
                                        }
                                        d.push(e, t, n, i, r, a, o, u, f)
                                    }
                                }]), e
                            }();
                        n["default"] = y
                    }, {
                        16: 16,
                        23: 23,
                        24: 24,
                        26: 26,
                        36: 36,
                        37: 37
                    }],
                    19: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = e(18),
                            a = i(r),
                            o = e(26),
                            s = i(o),
                            l = e(43),
                            u = e(1),
                            c = i(u),
                            f = function(e) {
                                var t = new c["default"];
                                t.trigger = function(e) {
                                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) i[r - 1] = arguments[r];
                                    t.emit.apply(t, [e, e].concat(i))
                                }, t.off = function(e) {
                                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) i[r - 1] = arguments[r];
                                    t.removeListener.apply(t, [e].concat(i))
                                }, e.addEventListener("message", function(n) {
                                    var i = n.data;
                                    switch (i.cmd) {
                                        case "init":
                                            var r = JSON.parse(i.config);
                                            e.demuxer = new a["default"](t, i.id, i.typeSupported, r);
                                            try {
                                                (0, l.enableLogs)(r.debug)
                                            } catch (o) {
                                                console.warn("demuxerWorker: unable to enable logs")
                                            }
                                            break;
                                        case "demux":
                                            e.demuxer.push(new Uint8Array(i.data), i.audioCodec, i.videoCodec, i.timeOffset, i.cc, i.level, i.sn, i.duration, i.accurateTimeOffset)
                                    }
                                });
                                var n = function(t, n) {
                                    e.postMessage({
                                        event: t,
                                        data: n
                                    })
                                };
                                t.on(s["default"].FRAG_PARSING_INIT_SEGMENT, n), t.on(s["default"].FRAG_PARSED, n), t.on(s["default"].ERROR, n), t.on(s["default"].FRAG_PARSING_METADATA, n), t.on(s["default"].FRAG_PARSING_USERDATA, n), t.on(s["default"].FRAG_PARSING_DATA, function(t, n) {
                                    var i = n.data1.buffer,
                                        r = n.data2.buffer;
                                    delete n.data1, delete n.data2, e.postMessage({
                                        event: t,
                                        data: n,
                                        data1: i,
                                        data2: r
                                    }, [i, r])
                                })
                            };
                        n["default"] = f
                    }, {
                        1: 1,
                        18: 18,
                        26: 26,
                        43: 43
                    }],
                    20: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(26),
                            s = i(o),
                            l = e(18),
                            u = i(l),
                            c = e(19),
                            f = i(c),
                            h = e(43),
                            d = e(15),
                            v = i(d),
                            p = e(24),
                            g = function() {
                                function t(n, i) {
                                    r(this, t), this.hls = n, this.id = i;
                                    var a = {
                                        mp4: MediaSource.isTypeSupported("video/mp4"),
                                        mp2t: n.config.enableMP2TPassThrough && MediaSource.isTypeSupported("video/mp2t")
                                    };
                                    if (n.config.enableWorker && "undefined" != typeof Worker) {
                                        h.logger.log("demuxing in webworker");
                                        try {
                                            var o = e(2),
                                                l = this.w = o(f["default"]);
                                            this.onwmsg = this.onWorkerMessage.bind(this), l.addEventListener("message", this.onwmsg), l.onerror = function(e) {
                                                n.trigger(s["default"].ERROR, {
                                                    type: p.ErrorTypes.OTHER_ERROR,
                                                    details: p.ErrorDetails.INTERNAL_EXCEPTION,
                                                    fatal: !0,
                                                    event: "demuxerWorker",
                                                    err: {
                                                        message: e.message + " (" + e.filename + ":" + e.lineno + ")"
                                                    }
                                                })
                                            }, l.postMessage({
                                                cmd: "init",
                                                typeSupported: a,
                                                id: i,
                                                config: JSON.stringify(n.config)
                                            })
                                        } catch (c) {
                                            h.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), this.demuxer = new u["default"](n, i, a)
                                        }
                                    } else this.demuxer = new u["default"](n, i, a);
                                    this.demuxInitialized = !0
                                }
                                return a(t, [{
                                    key: "destroy",
                                    value: function() {
                                        var e = this.w;
                                        if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
                                        else {
                                            var t = this.demuxer;
                                            t && (t.destroy(), this.demuxer = null)
                                        }
                                        var n = this.decrypter;
                                        n && (n.destroy(), this.decrypter = null)
                                    }
                                }, {
                                    key: "pushDecrypted",
                                    value: function(e, t, n, i, r, a, o, s, l) {
                                        var u = this.w;
                                        if (u) u.postMessage({
                                            cmd: "demux",
                                            data: e,
                                            audioCodec: t,
                                            videoCodec: n,
                                            timeOffset: i,
                                            cc: r,
                                            level: a,
                                            sn: o,
                                            duration: s,
                                            accurateTimeOffset: l
                                        }, [e]);
                                        else {
                                            var c = this.demuxer;
                                            c && c.push(new Uint8Array(e), t, n, i, r, a, o, s, l)
                                        }
                                    }
                                }, {
                                    key: "push",
                                    value: function(e, t, n, i, r, a, o, s, l, u) {
                                        if (e.byteLength > 0 && null != l && null != l.key && "AES-128" === l.method) {
                                            null == this.decrypter && (this.decrypter = new v["default"](this.hls));
                                            var c = this;
                                            this.decrypter.decrypt(e, l.key, l.iv, function(e) {
                                                c.pushDecrypted(e, t, n, i, r, a, o, s, u)
                                            })
                                        } else this.pushDecrypted(e, t, n, i, r, a, o, s, u)
                                    }
                                }, {
                                    key: "onWorkerMessage",
                                    value: function(e) {
                                        var t = e.data,
                                            n = this.hls;
                                        switch (t.event) {
                                            case s["default"].FRAG_PARSING_DATA:
                                                t.data.data1 = new Uint8Array(t.data1), t.data.data2 = new Uint8Array(t.data2);
                                            default:
                                                n.trigger(t.event, t.data)
                                        }
                                    }
                                }]), t
                            }();
                        n["default"] = g
                    }, {
                        15: 15,
                        18: 18,
                        19: 19,
                        2: 2,
                        24: 24,
                        26: 26,
                        43: 43
                    }],
                    21: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = e(43),
                            o = function() {
                                function e(t) {
                                    i(this, e), this.data = t, this.bytesAvailable = this.data.byteLength, this.word = 0, this.bitsAvailable = 0
                                }
                                return r(e, [{
                                    key: "loadWord",
                                    value: function() {
                                        var e = this.data.byteLength - this.bytesAvailable,
                                            t = new Uint8Array(4),
                                            n = Math.min(4, this.bytesAvailable);
                                        if (0 === n) throw new Error("no bytes available");
                                        t.set(this.data.subarray(e, e + n)), this.word = new DataView(t.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
                                    }
                                }, {
                                    key: "skipBits",
                                    value: function(e) {
                                        var t;
                                        this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
                                    }
                                }, {
                                    key: "readBits",
                                    value: function(e) {
                                        var t = Math.min(this.bitsAvailable, e),
                                            n = this.word >>> 32 - t;
                                        return e > 32 && a.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), t = e - t, t > 0 && this.bitsAvailable ? n << t | this.readBits(t) : n
                                    }
                                }, {
                                    key: "skipLZ",
                                    value: function() {
                                        var e;
                                        for (e = 0; e < this.bitsAvailable; ++e)
                                            if (0 !== (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                                        return this.loadWord(), e + this.skipLZ()
                                    }
                                }, {
                                    key: "skipUEG",
                                    value: function() {
                                        this.skipBits(1 + this.skipLZ())
                                    }
                                }, {
                                    key: "skipEG",
                                    value: function() {
                                        this.skipBits(1 + this.skipLZ())
                                    }
                                }, {
                                    key: "readUEG",
                                    value: function() {
                                        var e = this.skipLZ();
                                        return this.readBits(e + 1) - 1
                                    }
                                }, {
                                    key: "readEG",
                                    value: function() {
                                        var e = this.readUEG();
                                        return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                                    }
                                }, {
                                    key: "readBoolean",
                                    value: function() {
                                        return 1 === this.readBits(1)
                                    }
                                }, {
                                    key: "readUByte",
                                    value: function() {
                                        return this.readBits(8)
                                    }
                                }, {
                                    key: "readUShort",
                                    value: function() {
                                        return this.readBits(16)
                                    }
                                }, {
                                    key: "readUInt",
                                    value: function() {
                                        return this.readBits(32)
                                    }
                                }, {
                                    key: "skipScalingList",
                                    value: function(e) {
                                        var t, n, i = 8,
                                            r = 8;
                                        for (t = 0; e > t; t++) 0 !== r && (n = this.readEG(), r = (i + n + 256) % 256), i = 0 === r ? i : r
                                    }
                                }, {
                                    key: "readSPS",
                                    value: function() {
                                        var e, t, n, i, r, a, o, s, l, u = 0,
                                            c = 0,
                                            f = 0,
                                            h = 0,
                                            d = 1;
                                        if (this.readUByte(), e = this.readUByte(), t = this.readBits(5), this.skipBits(3), n = this.readUByte(), this.skipUEG(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                                            var v = this.readUEG();
                                            if (3 === v && this.skipBits(1), this.skipUEG(), this.skipUEG(), this.skipBits(1), this.readBoolean())
                                                for (s = 3 !== v ? 8 : 12, l = 0; s > l; l++) this.readBoolean() && (6 > l ? this.skipScalingList(16) : this.skipScalingList(64))
                                        }
                                        this.skipUEG();
                                        var p = this.readUEG();
                                        if (0 === p) this.readUEG();
                                        else if (1 === p)
                                            for (this.skipBits(1), this.skipEG(), this.skipEG(), i = this.readUEG(), l = 0; i > l; l++) this.skipEG();
                                        if (this.skipUEG(), this.skipBits(1), r = this.readUEG(), a = this.readUEG(), o = this.readBits(1), 0 === o && this.skipBits(1), this.skipBits(1), this.readBoolean() && (u = this.readUEG(), c = this.readUEG(), f = this.readUEG(), h = this.readUEG()), this.readBoolean() && this.readBoolean()) {
                                            var g = void 0,
                                                y = this.readUByte();
                                            switch (y) {
                                                case 1:
                                                    g = [1, 1];
                                                    break;
                                                case 2:
                                                    g = [12, 11];
                                                    break;
                                                case 3:
                                                    g = [10, 11];
                                                    break;
                                                case 4:
                                                    g = [16, 11];
                                                    break;
                                                case 5:
                                                    g = [40, 33];
                                                    break;
                                                case 6:
                                                    g = [24, 11];
                                                    break;
                                                case 7:
                                                    g = [20, 11];
                                                    break;
                                                case 8:
                                                    g = [32, 11];
                                                    break;
                                                case 9:
                                                    g = [80, 33];
                                                    break;
                                                case 10:
                                                    g = [18, 11];
                                                    break;
                                                case 11:
                                                    g = [15, 11];
                                                    break;
                                                case 12:
                                                    g = [64, 33];
                                                    break;
                                                case 13:
                                                    g = [160, 99];
                                                    break;
                                                case 14:
                                                    g = [4, 3];
                                                    break;
                                                case 15:
                                                    g = [3, 2];
                                                    break;
                                                case 16:
                                                    g = [2, 1];
                                                    break;
                                                case 255:
                                                    g = [this.readUByte() << 8 | this.readUByte(), this.readUByte() << 8 | this.readUByte()]
                                            }
                                            g && (d = g[0] / g[1])
                                        }
                                        return {
                                            width: Math.ceil((16 * (r + 1) - 2 * u - 2 * c) * d),
                                            height: (2 - o) * (a + 1) * 16 - (o ? 2 : 4) * (f + h)
                                        }
                                    }
                                }, {
                                    key: "readSliceType",
                                    value: function() {
                                        return this.readUByte(), this.readUEG(), this.readUEG()
                                    }
                                }]), e
                            }();
                        n["default"] = o
                    }, {
                        43: 43
                    }],
                    22: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = e(43),
                            o = function() {
                                function e(t) {
                                    i(this, e), this._hasTimeStamp = !1;
                                    for (var n, r, o, s, l, u, c, f, h = 0;;)
                                        if (c = this.readUTF(t, h, 3), h += 3, "ID3" === c) h += 3, n = 127 & t[h++], r = 127 & t[h++], o = 127 & t[h++], s = 127 & t[h++], l = (n << 21) + (r << 14) + (o << 7) + s, u = h + l, this._parseID3Frames(t, h, u), h = u;
                                        else {
                                            if ("3DI" !== c) return h -= 3, f = h, void(f && (this.hasTimeStamp || a.logger.warn("ID3 tag found, but no timestamp"), this._length = f, this._payload = t.subarray(0, f)));
                                            h += 7, a.logger.log("3DI footer found, end: " + h)
                                        }
                                }
                                return r(e, [{
                                    key: "readUTF",
                                    value: function(e, t, n) {
                                        var i = "",
                                            r = t,
                                            a = t + n;
                                        do i += String.fromCharCode(e[r++]); while (a > r);
                                        return i
                                    }
                                }, {
                                    key: "_parseID3Frames",
                                    value: function(e, t, n) {
                                        for (var i, r, o, s, l; n >= t + 8;) switch (i = this.readUTF(e, t, 4), t += 4, r = e[t++] << 24 + e[t++] << 16 + e[t++] << 8 + e[t++], s = e[t++] << 8 + e[t++], o = t, i) {
                                            case "PRIV":
                                                if ("com.apple.streaming.transportStreamTimestamp" === this.readUTF(e, t, 44)) {
                                                    t += 44, t += 4;
                                                    var u = 1 & e[t++];
                                                    this._hasTimeStamp = !0, l = ((e[t++] << 23) + (e[t++] << 15) + (e[t++] << 7) + e[t++]) / 45, u && (l += 47721858.84), l = Math.round(l), a.logger.trace("ID3 timestamp found: " + l), this._timeStamp = l
                                                }
                                        }
                                    }
                                }, {
                                    key: "hasTimeStamp",
                                    get: function() {
                                        return this._hasTimeStamp
                                    }
                                }, {
                                    key: "timeStamp",
                                    get: function() {
                                        return this._timeStamp
                                    }
                                }, {
                                    key: "length",
                                    get: function() {
                                        return this._length
                                    }
                                }, {
                                    key: "payload",
                                    get: function() {
                                        return this._payload
                                    }
                                }]), e
                            }();
                        n["default"] = o
                    }, {
                        43: 43
                    }],
                    23: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(17),
                            s = i(o),
                            l = e(26),
                            u = i(l),
                            c = e(21),
                            f = i(c),
                            h = e(43),
                            d = e(24),
                            v = function() {
                                function e(t, n, i, a) {
                                    r(this, e), this.observer = t, this.id = n, this.remuxerClass = i, this.config = a, this.lastCC = 0, this.remuxer = new this.remuxerClass(t, n, a)
                                }
                                return a(e, [{
                                    key: "switchLevel",
                                    value: function() {
                                        this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = {
                                            container: "video/mp2t",
                                            type: "video",
                                            id: -1,
                                            sequenceNumber: 0,
                                            samples: [],
                                            len: 0,
                                            dropped: 0
                                        }, this._aacTrack = {
                                            container: "video/mp2t",
                                            type: "audio",
                                            id: -1,
                                            sequenceNumber: 0,
                                            samples: [],
                                            len: 0
                                        }, this._id3Track = {
                                            type: "id3",
                                            id: -1,
                                            sequenceNumber: 0,
                                            samples: [],
                                            len: 0
                                        }, this._txtTrack = {
                                            type: "text",
                                            id: -1,
                                            sequenceNumber: 0,
                                            samples: [],
                                            len: 0
                                        }, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.remuxer.switchLevel()
                                    }
                                }, {
                                    key: "insertDiscontinuity",
                                    value: function() {
                                        this.switchLevel(), this.remuxer.insertDiscontinuity()
                                    }
                                }, {
                                    key: "push",
                                    value: function(e, t, n, i, r, a, o, s, l) {
                                        var c, f, v, p, g, y, m = e.length,
                                            E = this.remuxer.passthrough,
                                            b = !1;
                                        this.audioCodec = t, this.videoCodec = n, this._duration = s, this.contiguous = !1, this.accurateTimeOffset = l, r !== this.lastCC && (h.logger.log("discontinuity detected"), this.insertDiscontinuity(), this.lastCC = r), a !== this.lastLevel ? (h.logger.log("level switch detected"), this.switchLevel(), this.lastLevel = a) : o === this.lastSN + 1 && (this.contiguous = !0), this.lastSN = o;
                                        var k = this.pmtParsed,
                                            _ = this._avcTrack,
                                            A = this._aacTrack,
                                            T = this._id3Track,
                                            L = _.id,
                                            S = A.id,
                                            R = T.id,
                                            O = this._pmtId,
                                            w = _.pesData,
                                            C = A.pesData,
                                            D = T.pesData,
                                            P = this._parsePAT,
                                            I = this._parsePMT,
                                            x = this._parsePES,
                                            N = this._parseAVCPES.bind(this),
                                            M = this._parseAACPES.bind(this),
                                            B = this._parseID3PES.bind(this);
                                        for (m -= m % 188, c = 0; m > c; c += 188)
                                            if (71 === e[c]) {
                                                if (f = !!(64 & e[c + 1]), v = ((31 & e[c + 1]) << 8) + e[c + 2], p = (48 & e[c + 3]) >> 4, p > 1) {
                                                    if (g = c + 5 + e[c + 4], g === c + 188) continue
                                                } else g = c + 4;
                                                switch (v) {
                                                    case L:
                                                        if (f) {
                                                            if (w && (y = x(w)) && (N(y, !1), E && _.codec && (-1 === S || A.codec))) return void this.remux(a, o, e, i);
                                                            w = {
                                                                data: [],
                                                                size: 0
                                                            }
                                                        }
                                                        w && (w.data.push(e.subarray(g, c + 188)), w.size += c + 188 - g);
                                                        break;
                                                    case S:
                                                        if (f) {
                                                            if (C && (y = x(C)) && (M(y), E && A.codec && (-1 === L || _.codec))) return void this.remux(a, o, e, i);
                                                            C = {
                                                                data: [],
                                                                size: 0
                                                            }
                                                        }
                                                        C && (C.data.push(e.subarray(g, c + 188)), C.size += c + 188 - g);
                                                        break;
                                                    case R:
                                                        f && (D && (y = x(D)) && B(y), D = {
                                                            data: [],
                                                            size: 0
                                                        }), D && (D.data.push(e.subarray(g, c + 188)), D.size += c + 188 - g);
                                                        break;
                                                    case 0:
                                                        f && (g += e[g] + 1), O = this._pmtId = P(e, g);
                                                        break;
                                                    case O:
                                                        f && (g += e[g] + 1);
                                                        var F = I(e, g);
                                                        L = _.id = F.avc, S = A.id = F.aac, R = T.id = F.id3, b && !k && (h.logger.log("reparse from beginning"), b = !1, c = -188), k = this.pmtParsed = !0;
                                                        break;
                                                    case 17:
                                                    case 8191:
                                                        break;
                                                    default:
                                                        b = !0
                                                }
                                            } else this.observer.trigger(u["default"].ERROR, {
                                                type: d.ErrorTypes.MEDIA_ERROR,
                                                id: this.id,
                                                details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                                fatal: !1,
                                                reason: "TS packet did not start with 0x47"
                                            });
                                        w && (y = x(w)) ? (N(y, !0), _.pesData = null) : _.pesData = w, C && (y = x(C)) ? (M(y), A.pesData = null) : (C && C.size && h.logger.log("last AAC PES packet truncated,might overlap between fragments"), A.pesData = C), D && (y = x(D)) ? (B(y), T.pesData = null) : T.pesData = D, this.remux(a, o, null, i)
                                    }
                                }, {
                                    key: "remux",
                                    value: function(e, t, n, i) {
                                        var r = this._avcTrack,
                                            a = r.samples,
                                            o = a.reduce(function(e, t) {
                                                var n = t.units.units.reduce(function(e, t) {
                                                    return {
                                                        len: e.len + t.data.length,
                                                        nbNalu: e.nbNalu + 1
                                                    }
                                                }, {
                                                    len: 0,
                                                    nbNalu: 0
                                                });
                                                return t.length = n.len, {
                                                    len: e.len + n.len,
                                                    nbNalu: e.nbNalu + n.nbNalu
                                                }
                                            }, {
                                                len: 0,
                                                nbNalu: 0
                                            });
                                        r.len = o.len, r.nbNalu = o.nbNalu, this.remuxer.remux(e, t, this._aacTrack, this._avcTrack, this._id3Track, this._txtTrack, i, this.contiguous, this.accurateTimeOffset, n)
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.switchLevel(), this._initPTS = this._initDTS = void 0, this._duration = 0
                                    }
                                }, {
                                    key: "_parsePAT",
                                    value: function(e, t) {
                                        return (31 & e[t + 10]) << 8 | e[t + 11]
                                    }
                                }, {
                                    key: "_parsePMT",
                                    value: function(e, t) {
                                        var n, i, r, a, o = {
                                            aac: -1,
                                            avc: -1,
                                            id3: -1
                                        };
                                        for (n = (15 & e[t + 1]) << 8 | e[t + 2], i = t + 3 + n - 4, r = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + r; i > t;) {
                                            switch (a = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                                                case 15:
                                                    -1 === o.aac && (o.aac = a);
                                                    break;
                                                case 21:
                                                    -1 === o.id3 && (o.id3 = a);
                                                    break;
                                                case 27:
                                                    -1 === o.avc && (o.avc = a);
                                                    break;
                                                case 36:
                                                    h.logger.warn("HEVC stream type found, not supported for now");
                                                    break;
                                                default:
                                                    h.logger.log("unkown stream type:" + e[t])
                                            }
                                            t += ((15 & e[t + 3]) << 8 | e[t + 4]) + 5
                                        }
                                        return o
                                    }
                                }, {
                                    key: "_parsePES",
                                    value: function(e) {
                                        var t, n, i, r, a, o, s, l, u, c = 0,
                                            f = e.data;
                                        if (!e || 0 === e.size) return null;
                                        for (; f[0].length < 19 && f.length > 1;) {
                                            var h = new Uint8Array(f[0].length + f[1].length);
                                            h.set(f[0]), h.set(f[1], f[0].length), f[0] = h, f.splice(1, 1)
                                        }
                                        if (t = f[0], i = (t[0] << 16) + (t[1] << 8) + t[2], 1 === i) {
                                            if (r = (t[4] << 8) + t[5], r && r !== e.size - 6) return null;
                                            for (n = t[7], 192 & n && (s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, s > 4294967295 && (s -= 8589934592), 64 & n ? (l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2, l > 4294967295 && (l -= 8589934592)) : l = s), a = t[8], u = a + 9, e.size -= u, o = new Uint8Array(e.size); f.length;) {
                                                t = f.shift();
                                                var d = t.byteLength;
                                                if (u) {
                                                    if (u > d) {
                                                        u -= d;
                                                        continue
                                                    }
                                                    t = t.subarray(u), d -= u, u = 0
                                                }
                                                o.set(t, c), c += d
                                            }
                                            return r && (r -= a + 3), {
                                                data: o,
                                                pts: s,
                                                dts: l,
                                                len: r
                                            }
                                        }
                                        return null
                                    }
                                }, {
                                    key: "pushAccesUnit",
                                    value: function(e, t) {
                                        e.units.units.length && (!this.config.forceKeyFrameOnDiscontinuity || e.key === !0 || t.sps && (t.samples.length || this.contiguous) ? t.samples.push(e) : t.dropped++), e.debug.length && h.logger.log(e.pts + "/" + e.dts + ":" + e.debug + "," + e.units.length)
                                    }
                                }, {
                                    key: "_parseAVCPES",
                                    value: function(e, t) {
                                        var n, i, r, a = this,
                                            o = this._avcTrack,
                                            s = this._parseAVCNALu(e.data),
                                            l = !1,
                                            u = this.avcSample;
                                        e.data = null, s.forEach(function(t) {
                                            switch (t.type) {
                                                case 1:
                                                    i = !0, l && u && (u.debug += "NDR ");
                                                    break;
                                                case 5:
                                                    i = !0, u || (u = a.avcSample = a._createAVCSample(!0, e.pts, e.dts, "")), l && (u.debug += "IDR "), u.key = !0;
                                                    break;
                                                case 6:
                                                    i = !0, l && u && (u.debug += "SEI "), n = new f["default"](a.discardEPB(t.data)), n.readUByte();
                                                    for (var s = 0, c = 0, h = !1, d = 0; !h && n.bytesAvailable > 1;) {
                                                        s = 0;
                                                        do d = n.readUByte(), s += d; while (255 === d);
                                                        c = 0;
                                                        do d = n.readUByte(), c += d; while (255 === d);
                                                        if (4 === s && 0 !== n.bytesAvailable) {
                                                            h = !0;
                                                            var v = n.readUByte();
                                                            if (181 === v) {
                                                                var p = n.readUShort();
                                                                if (49 === p) {
                                                                    var g = n.readUInt();
                                                                    if (1195456820 === g) {
                                                                        var y = n.readUByte();
                                                                        if (3 === y) {
                                                                            var m = n.readUByte(),
                                                                                E = n.readUByte(),
                                                                                b = 31 & m,
                                                                                k = [m, E];
                                                                            for (r = 0; b > r; r++) k.push(n.readUByte()), k.push(n.readUByte()), k.push(n.readUByte());
                                                                            a._insertSampleInOrder(a._txtTrack.samples, {
                                                                                type: 3,
                                                                                pts: e.pts,
                                                                                bytes: k
                                                                            })
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else if (c < n.bytesAvailable)
                                                            for (r = 0; c > r; r++) n.readUByte()
                                                    }
                                                    break;
                                                case 7:
                                                    if (i = !0, l && u && (u.debug += "SPS "), !o.sps) {
                                                        n = new f["default"](t.data);
                                                        var _ = n.readSPS();
                                                        o.width = _.width, o.height = _.height, o.sps = [t.data], o.duration = a._duration;
                                                        var A = t.data.subarray(1, 4),
                                                            T = "avc1.";
                                                        for (r = 0; 3 > r; r++) {
                                                            var L = A[r].toString(16);
                                                            L.length < 2 && (L = "0" + L), T += L
                                                        }
                                                        o.codec = T
                                                    }
                                                    break;
                                                case 8:
                                                    i = !0, l && u && (u.debug += "PPS "), o.pps || (o.pps = [t.data]);
                                                    break;
                                                case 9:
                                                    i = !1, u && a.pushAccesUnit(u, o), u = a.avcSample = a._createAVCSample(!1, e.pts, e.dts, l ? "AUD " : "");
                                                    break;
                                                case 12:
                                                    i = !1;
                                                    break;
                                                default:
                                                    i = !1, u && (u.debug += "unknown NAL " + t.type + " ")
                                            }
                                            if (u && i) {
                                                var S = u.units;
                                                S.units.push(t)
                                            }
                                        }), t && u && (this.pushAccesUnit(u, o), this.avcSample = null)
                                    }
                                }, {
                                    key: "_createAVCSample",
                                    value: function(e, t, n, i) {
                                        return {
                                            key: e,
                                            pts: t,
                                            dts: n,
                                            units: {
                                                units: [],
                                                length: 0
                                            },
                                            debug: i
                                        }
                                    }
                                }, {
                                    key: "_insertSampleInOrder",
                                    value: function(e, t) {
                                        var n = e.length;
                                        if (n > 0) {
                                            if (t.pts >= e[n - 1].pts) e.push(t);
                                            else
                                                for (var i = n - 1; i >= 0; i--)
                                                    if (t.pts < e[i].pts) {
                                                        e.splice(i, 0, t);
                                                        break
                                                    }
                                        } else e.push(t)
                                    }
                                }, {
                                    key: "_getLastNalUnit",
                                    value: function() {
                                        var e = this.avcSample,
                                            t = void 0;
                                        if (!e || 0 === e.units.units.length) {
                                            var n = this._avcTrack,
                                                i = n.samples;
                                            e = i[i.length - 1]
                                        }
                                        if (e) {
                                            var r = e.units.units;
                                            t = r[r.length - 1]
                                        }
                                        return t
                                    }
                                }, {
                                    key: "_parseAVCNALu",
                                    value: function(e) {
                                        for (var t, n, i, r, a, o = 0, s = e.byteLength, l = this._avcTrack, u = l.naluState || 0, c = u, f = [], h = -1; s > o;) switch (t = e[o++], u) {
                                            case 0:
                                                0 === t && (u = 1);
                                                break;
                                            case 1:
                                                u = 0 === t ? 2 : 0;
                                                break;
                                            case 2:
                                            case 3:
                                                if (0 === t) u = 3;
                                                else if (1 === t) {
                                                    if (h >= 0) i = {
                                                        data: e.subarray(h, o - u - 1),
                                                        type: a
                                                    }, f.push(i);
                                                    else {
                                                        var d = this._getLastNalUnit();
                                                        if (d && (c && 4 - c >= o && d.state && (d.data = d.data.subarray(0, d.data.byteLength - c)), n = o - u - 1, n > 0)) {
                                                            var v = new Uint8Array(d.data.byteLength + n);
                                                            v.set(d.data, 0), v.set(e.subarray(0, n), d.data.byteLength), d.data = v
                                                        }
                                                    }
                                                    s > o ? (r = 31 & e[o], h = o, a = r, u = 0) : u = -1
                                                } else u = 0;
                                                break;
                                            case -1:
                                                h = 0, a = 31 & t, u = 0
                                        }
                                        if (h >= 0 && u >= 0 && (i = {
                                                data: e.subarray(h, s),
                                                type: a,
                                                state: u
                                            }, f.push(i)), 0 === f.length) {
                                            var p = this._getLastNalUnit();
                                            if (p) {
                                                var g = new Uint8Array(p.data.byteLength + e.byteLength);
                                                g.set(p.data, 0), g.set(e, p.data.byteLength), p.data = g
                                            }
                                        }
                                        return l.naluState = u, f
                                    }
                                }, {
                                    key: "discardEPB",
                                    value: function(e) {
                                        for (var t, n, i = e.byteLength, r = [], a = 1; i - 2 > a;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), a += 2) : a++;
                                        if (0 === r.length) return e;
                                        t = i - r.length, n = new Uint8Array(t);
                                        var o = 0;
                                        for (a = 0; t > a; o++, a++) o === r[0] && (o++, r.shift()), n[a] = e[o];
                                        return n
                                    }
                                }, {
                                    key: "_parseAACPES",
                                    value: function(e) {
                                        var t, n, i, r, a, o, l, c, f, v = this._aacTrack,
                                            p = e.data,
                                            g = e.pts,
                                            y = 0,
                                            m = this.aacOverFlow,
                                            E = this.aacLastPTS;
                                        if (m) {
                                            var b = new Uint8Array(m.byteLength + p.byteLength);
                                            b.set(m, 0), b.set(p, m.byteLength), p = b
                                        }
                                        for (a = y, c = p.length; c - 1 > a && (255 !== p[a] || 240 !== (240 & p[a + 1])); a++);
                                        if (a) {
                                            var k, _;
                                            if (c - 1 > a ? (k = "AAC PES did not start with ADTS header,offset:" + a, _ = !1) : (k = "no ADTS header found in AAC PES", _ = !0), h.logger.warn("parsing error:" + k), this.observer.trigger(u["default"].ERROR, {
                                                    type: d.ErrorTypes.MEDIA_ERROR,
                                                    id: this.id,
                                                    details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                                    fatal: _,
                                                    reason: k
                                                }), _) return
                                        }
                                        if (v.audiosamplerate || (t = s["default"].getAudioConfig(this.observer, p, a, this.audioCodec), v.config = t.config, v.audiosamplerate = t.samplerate, v.channelCount = t.channelCount, v.codec = t.codec, v.duration = this._duration, h.logger.log("parsed codec:" + v.codec + ",rate:" + t.samplerate + ",nb channel:" + t.channelCount)), r = 0, i = 9216e4 / v.audiosamplerate, m && E) {
                                            var A = E + i;
                                            Math.abs(A - g) > 1 && (h.logger.log("AAC: align PTS for overlapping frames by " + Math.round((A - g) / 90)), g = A)
                                        }
                                        for (; c > a + 5 && (o = 1 & p[a + 1] ? 7 : 9, n = (3 & p[a + 3]) << 11 | p[a + 4] << 3 | (224 & p[a + 5]) >>> 5, n -= o, n > 0 && c >= a + o + n);)
                                            for (l = g + r * i, f = {
                                                    unit: p.subarray(a + o, a + o + n),
                                                    pts: l,
                                                    dts: l
                                                }, v.samples.push(f), v.len += n, a += n + o, r++; c - 1 > a && (255 !== p[a] || 240 !== (240 & p[a + 1])); a++);
                                        m = c > a ? p.subarray(a, c) : null, this.aacOverFlow = m, this.aacLastPTS = l
                                    }
                                }, {
                                    key: "_parseID3PES",
                                    value: function(e) {
                                        this._id3Track.samples.push(e)
                                    }
                                }], [{
                                    key: "probe",
                                    value: function(e) {
                                        return e.length >= 564 && 71 === e[0] && 71 === e[188] && 71 === e[376]
                                    }
                                }]), e
                            }();
                        n["default"] = v
                    }, {
                        17: 17,
                        21: 21,
                        24: 24,
                        26: 26,
                        43: 43
                    }],
                    24: [function(e, t, n) {
                        "use strict";
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        n.ErrorTypes = {
                            NETWORK_ERROR: "networkError",
                            MEDIA_ERROR: "mediaError",
                            OTHER_ERROR: "otherError"
                        }, n.ErrorDetails = {
                            MANIFEST_LOAD_ERROR: "manifestLoadError",
                            MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                            MANIFEST_PARSING_ERROR: "manifestParsingError",
                            MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                            LEVEL_LOAD_ERROR: "levelLoadError",
                            LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                            LEVEL_SWITCH_ERROR: "levelSwitchError",
                            AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                            AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                            FRAG_LOAD_ERROR: "fragLoadError",
                            FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
                            FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                            FRAG_DECRYPT_ERROR: "fragDecryptError",
                            FRAG_PARSING_ERROR: "fragParsingError",
                            KEY_LOAD_ERROR: "keyLoadError",
                            KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                            BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                            BUFFER_APPEND_ERROR: "bufferAppendError",
                            BUFFER_APPENDING_ERROR: "bufferAppendingError",
                            BUFFER_STALLED_ERROR: "bufferStalledError",
                            BUFFER_FULL_ERROR: "bufferFullError",
                            BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                            INTERNAL_EXCEPTION: "internalException"
                        }
                    }, {}],
                    25: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                            },
                            o = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            s = e(43),
                            l = e(24),
                            u = e(26),
                            c = i(u),
                            f = function() {
                                function e(t) {
                                    r(this, e), this.hls = t, this.onEvent = this.onEvent.bind(this);
                                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; n > a; a++) i[a - 1] = arguments[a];
                                    this.handledEvents = i, this.useGenericHandler = !0, this.registerListeners()
                                }
                                return o(e, [{
                                    key: "destroy",
                                    value: function() {
                                        this.unregisterListeners()
                                    }
                                }, {
                                    key: "isEventHandler",
                                    value: function() {
                                        return "object" === a(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
                                    }
                                }, {
                                    key: "registerListeners",
                                    value: function() {
                                        this.isEventHandler() && this.handledEvents.forEach(function(e) {
                                            if ("hlsEventGeneric" === e) throw new Error("Forbidden event name: " + e);
                                            this.hls.on(e, this.onEvent)
                                        }.bind(this))
                                    }
                                }, {
                                    key: "unregisterListeners",
                                    value: function() {
                                        this.isEventHandler() && this.handledEvents.forEach(function(e) {
                                            this.hls.off(e, this.onEvent)
                                        }.bind(this))
                                    }
                                }, {
                                    key: "onEvent",
                                    value: function(e, t) {
                                        this.onEventGeneric(e, t)
                                    }
                                }, {
                                    key: "onEventGeneric",
                                    value: function(e, t) {
                                        var n = function(e, t) {
                                            var n = "on" + e.replace("hls", "");
                                            if ("function" != typeof this[n]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + n + ")");
                                            return this[n].bind(this, t)
                                        };
                                        try {
                                            n.call(this, e, t).call()
                                        } catch (i) {
                                            s.logger.error("internal error happened while processing " + e + ":" + i.message), this.hls.trigger(c["default"].ERROR, {
                                                type: l.ErrorTypes.OTHER_ERROR,
                                                details: l.ErrorDetails.INTERNAL_EXCEPTION,
                                                fatal: !1,
                                                event: e,
                                                err: i
                                            })
                                        }
                                    }
                                }]), e
                            }();
                        n["default"] = f
                    }, {
                        24: 24,
                        26: 26,
                        43: 43
                    }],
                    26: [function(e, t, n) {
                        "use strict";
                        t.exports = {
                            MEDIA_ATTACHING: "hlsMediaAttaching",
                            MEDIA_ATTACHED: "hlsMediaAttached",
                            MEDIA_DETACHING: "hlsMediaDetaching",
                            MEDIA_DETACHED: "hlsMediaDetached",
                            BUFFER_RESET: "hlsBufferReset",
                            BUFFER_CODECS: "hlsBufferCodecs",
                            BUFFER_CREATED: "hlsBufferCreated",
                            BUFFER_APPENDING: "hlsBufferAppending",
                            BUFFER_APPENDED: "hlsBufferAppended",
                            BUFFER_EOS: "hlsBufferEos",
                            BUFFER_FLUSHING: "hlsBufferFlushing",
                            BUFFER_FLUSHED: "hlsBufferFlushed",
                            MANIFEST_LOADING: "hlsManifestLoading",
                            MANIFEST_LOADED: "hlsManifestLoaded",
                            MANIFEST_PARSED: "hlsManifestParsed",
                            LEVEL_LOADING: "hlsLevelLoading",
                            LEVEL_LOADED: "hlsLevelLoaded",
                            LEVEL_UPDATED: "hlsLevelUpdated",
                            LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                            LEVEL_SWITCH: "hlsLevelSwitch",
                            AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                            AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
                            AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                            AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                            FRAG_LOADING: "hlsFragLoading",
                            FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                            FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                            FRAG_LOADED: "hlsFragLoaded",
                            FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                            FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                            FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                            FRAG_PARSING_DATA: "hlsFragParsingData",
                            FRAG_PARSED: "hlsFragParsed",
                            FRAG_BUFFERED: "hlsFragBuffered",
                            FRAG_CHANGED: "hlsFragChanged",
                            FPS_DROP: "hlsFpsDrop",
                            FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                            ERROR: "hlsError",
                            DESTROYING: "hlsDestroying",
                            KEY_LOADING: "hlsKeyLoading",
                            KEY_LOADED: "hlsKeyLoaded",
                            STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
                        }
                    }, {}],
                    27: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = function() {
                                function e() {
                                    i(this, e)
                                }
                                return r(e, null, [{
                                    key: "getSilentFrame",
                                    value: function(e) {
                                        return 1 === e ? new Uint8Array([0, 200, 0, 128, 35, 128]) : 2 === e ? new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]) : 3 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]) : 4 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]) : 5 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]) : 6 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) : null
                                    }
                                }]), e
                            }();
                        n["default"] = a
                    }, {}],
                    28: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = function() {
                                function e() {
                                    i(this, e)
                                }
                                return r(e, null, [{
                                    key: "isBuffered",
                                    value: function(e, t) {
                                        if (e)
                                            for (var n = e.buffered, i = 0; i < n.length; i++)
                                                if (t >= n.start(i) && t <= n.end(i)) return !0;
                                        return !1
                                    }
                                }, {
                                    key: "bufferInfo",
                                    value: function(e, t, n) {
                                        if (e) {
                                            var i, r = e.buffered,
                                                a = [];
                                            for (i = 0; i < r.length; i++) a.push({
                                                start: r.start(i),
                                                end: r.end(i)
                                            });
                                            return this.bufferedInfo(a, t, n)
                                        }
                                        return {
                                            len: 0,
                                            start: 0,
                                            end: 0,
                                            nextStart: void 0
                                        }
                                    }
                                }, {
                                    key: "bufferedInfo",
                                    value: function(e, t, n) {
                                        var i, r, a, o, s, l = [];
                                        for (e.sort(function(e, t) {
                                                var n = e.start - t.start;
                                                return n ? n : t.end - e.end
                                            }), s = 0; s < e.length; s++) {
                                            var u = l.length;
                                            if (u) {
                                                var c = l[u - 1].end;
                                                e[s].start - c < n ? e[s].end > c && (l[u - 1].end = e[s].end) : l.push(e[s])
                                            } else l.push(e[s])
                                        }
                                        for (s = 0, i = 0, r = a = t; s < l.length; s++) {
                                            var f = l[s].start,
                                                h = l[s].end;
                                            if (t + n >= f && h > t) r = f, a = h, i = a - t;
                                            else if (f > t + n) {
                                                o = f;
                                                break
                                            }
                                        }
                                        return {
                                            len: i,
                                            start: r,
                                            end: a,
                                            nextStart: o
                                        }
                                    }
                                }]), e
                            }();
                        n["default"] = a
                    }, {}],
                    29: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = e(43),
                            o = function() {
                                function e() {
                                    i(this, e)
                                }
                                return r(e, null, [{
                                    key: "mergeDetails",
                                    value: function(t, n) {
                                        var i, r = Math.max(t.startSN, n.startSN) - n.startSN,
                                            o = Math.min(t.endSN, n.endSN) - n.startSN,
                                            s = n.startSN - t.startSN,
                                            l = t.fragments,
                                            u = n.fragments,
                                            c = 0;
                                        if (r > o) return void(n.PTSKnown = !1);
                                        for (var f = r; o >= f; f++) {
                                            var h = l[s + f],
                                                d = u[f];
                                            d && h && (c = h.cc - d.cc, isNaN(h.startPTS) || (d.start = d.startPTS = h.startPTS, d.endPTS = h.endPTS, d.duration = h.duration, i = d))
                                        }
                                        if (c)
                                            for (a.logger.log("discontinuity sliding from playlist, take drift into account"), f = 0; f < u.length; f++) u[f].cc += c;
                                        if (i) e.updateFragPTSDTS(n, i.sn, i.startPTS, i.endPTS, i.startDTS, i.endDTS);
                                        else if (s >= 0 && s < l.length) {
                                            var v = l[s].start;
                                            for (f = 0; f < u.length; f++) u[f].start += v
                                        }
                                        n.PTSKnown = t.PTSKnown
                                    }
                                }, {
                                    key: "updateFragPTSDTS",
                                    value: function(t, n, i, r, a, o) {
                                        var s, l, u, c;
                                        if (n < t.startSN || n > t.endSN) return 0;
                                        if (s = n - t.startSN, l = t.fragments, u = l[s], !isNaN(u.startPTS)) {
                                            var f = Math.abs(u.startPTS - i);
                                            isNaN(u.deltaPTS) ? u.deltaPTS = f : u.deltaPTS = Math.max(f, u.deltaPTS), i = Math.min(i, u.startPTS), r = Math.max(r, u.endPTS), a = Math.min(a, u.startDTS), o = Math.max(o, u.endDTS)
                                        }
                                        var h = i - u.start;
                                        for (u.start = u.startPTS = i, u.endPTS = r, u.startDTS = a, u.endDTS = o, u.duration = r - i, c = s; c > 0; c--) e.updatePTS(l, c, c - 1);
                                        for (c = s; c < l.length - 1; c++) e.updatePTS(l, c, c + 1);
                                        return t.PTSKnown = !0, h
                                    }
                                }, {
                                    key: "updatePTS",
                                    value: function(e, t, n) {
                                        var i = e[t],
                                            r = e[n],
                                            o = r.startPTS;
                                        isNaN(o) ? n > t ? r.start = i.start + i.duration : r.start = i.start - r.duration : n > t ? (i.duration = o - i.start, i.duration < 0 && a.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (r.duration = i.start - o, r.duration < 0 && a.logger.warn("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!"))
                                    }
                                }]), e
                            }();
                        n["default"] = o
                    }, {
                        43: 43
                    }],
                    30: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(26),
                            s = i(o),
                            l = e(24),
                            u = e(34),
                            c = i(u),
                            f = e(32),
                            h = i(f),
                            d = e(3),
                            v = i(d),
                            p = e(6),
                            g = i(p),
                            y = e(7),
                            m = i(y),
                            E = e(4),
                            b = i(E),
                            k = e(11),
                            _ = i(k),
                            A = e(10),
                            T = i(A),
                            L = e(12),
                            S = i(L),
                            R = e(9),
                            O = i(R),
                            w = e(5),
                            C = i(w),
                            D = e(43),
                            P = e(47),
                            I = i(P),
                            x = e(1),
                            N = i(x),
                            M = e(33),
                            B = i(M),
                            F = e(41),
                            j = i(F),
                            U = function() {
                                function e() {
                                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                    r(this, e);
                                    var n = e.DefaultConfig;
                                    if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                                    for (var i in n) i in t || (t[i] = n[i]);
                                    if (void 0 !== t.liveMaxLatencyDurationCount && t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                                    if (void 0 !== t.liveMaxLatencyDuration && (t.liveMaxLatencyDuration <= t.liveSyncDuration || void 0 === t.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                                    (0, D.enableLogs)(t.debug), this.config = t;
                                    var a = this.observer = new N["default"];
                                    a.trigger = function(e) {
                                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                                        a.emit.apply(a, [e, e].concat(n))
                                    }, a.off = function(e) {
                                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                                        a.removeListener.apply(a, [e].concat(n))
                                    }, this.on = a.on.bind(a), this.off = a.off.bind(a), this.trigger = a.trigger.bind(a), this.playlistLoader = new c["default"](this), this.fragmentLoader = new h["default"](this), this.levelController = new T["default"](this), this.abrController = new t.abrController(this), this.bufferController = new t.bufferController(this), this.capLevelController = new t.capLevelController(this), this.fpsController = new t.fpsController(this), this.streamController = new t.streamController(this), this.audioStreamController = new t.audioStreamController(this), this.timelineController = new t.timelineController(this), this.audioTrackController = new C["default"](this), this.keyLoader = new B["default"](this)
                                }
                                return a(e, null, [{
                                    key: "isSupported",
                                    value: function() {
                                        return window.MediaSource && "function" == typeof window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                                    }
                                }, {
                                    key: "version",
                                    get: function() {
                                        return "0.6.6"
                                    }
                                }, {
                                    key: "Events",
                                    get: function() {
                                        return s["default"]
                                    }
                                }, {
                                    key: "ErrorTypes",
                                    get: function() {
                                        return l.ErrorTypes
                                    }
                                }, {
                                    key: "ErrorDetails",
                                    get: function() {
                                        return l.ErrorDetails
                                    }
                                }, {
                                    key: "DefaultConfig",
                                    get: function() {
                                        return e.defaultConfig || (e.defaultConfig = {
                                            autoStartLoad: !0,
                                            startPosition: -1,
                                            defaultAudioCodec: void 0,
                                            debug: !1,
                                            capLevelOnFPSDrop: !1,
                                            capLevelToPlayerSize: !1,
                                            maxBufferLength: 30,
                                            maxBufferSize: 6e7,
                                            maxBufferHole: .5,
                                            maxSeekHole: 2,
                                            seekHoleNudgeDuration: .01,
                                            stalledInBufferedNudgeThreshold: 10,
                                            maxFragLookUpTolerance: .2,
                                            liveSyncDurationCount: 3,
                                            liveMaxLatencyDurationCount: 1 / 0,
                                            liveSyncDuration: void 0,
                                            liveMaxLatencyDuration: void 0,
                                            maxMaxBufferLength: 600,
                                            enableWorker: !0,
                                            enableSoftwareAES: !0,
                                            manifestLoadingTimeOut: 1e4,
                                            manifestLoadingMaxRetry: 1,
                                            manifestLoadingRetryDelay: 1e3,
                                            manifestLoadingMaxRetryTimeout: 64e3,
                                            startLevel: void 0,
                                            levelLoadingTimeOut: 1e4,
                                            levelLoadingMaxRetry: 4,
                                            levelLoadingRetryDelay: 1e3,
                                            levelLoadingMaxRetryTimeout: 64e3,
                                            fragLoadingTimeOut: 2e4,
                                            fragLoadingMaxRetry: 6,
                                            fragLoadingRetryDelay: 1e3,
                                            fragLoadingMaxRetryTimeout: 64e3,
                                            fragLoadingLoopThreshold: 3,
                                            startFragPrefetch: !1,
                                            fpsDroppedMonitoringPeriod: 5e3,
                                            fpsDroppedMonitoringThreshold: .2,
                                            appendErrorMaxRetry: 3,
                                            loader: I["default"],
                                            fLoader: void 0,
                                            pLoader: void 0,
                                            xhrSetup: void 0,
                                            fetchSetup: void 0,
                                            abrController: v["default"],
                                            bufferController: g["default"],
                                            capLevelController: m["default"],
                                            fpsController: O["default"],
                                            streamController: _["default"],
                                            audioStreamController: b["default"],
                                            timelineController: S["default"],
                                            cueHandler: j["default"],
                                            enableCEA708Captions: !0,
                                            enableMP2TPassThrough: !1,
                                            stretchShortVideoTrack: !1,
                                            forceKeyFrameOnDiscontinuity: !0,
                                            abrEwmaFastLive: 5,
                                            abrEwmaSlowLive: 9,
                                            abrEwmaFastVoD: 3,
                                            abrEwmaSlowVoD: 9,
                                            abrEwmaDefaultEstimate: 5e5,
                                            abrBandWidthFactor: .8,
                                            abrBandWidthUpFactor: .7,
                                            maxStarvationDelay: 4,
                                            maxLoadingDelay: 4
                                        }), e.defaultConfig
                                    },
                                    set: function(t) {
                                        e.defaultConfig = t
                                    }
                                }]), a(e, [{
                                    key: "destroy",
                                    value: function() {
                                        D.logger.log("destroy"), this.trigger(s["default"].DESTROYING), this.detachMedia(), this.playlistLoader.destroy(), this.fragmentLoader.destroy(), this.levelController.destroy(), this.abrController.destroy(), this.bufferController.destroy(), this.capLevelController.destroy(), this.fpsController.destroy(), this.streamController.destroy(), this.audioStreamController.destroy(), this.timelineController.destroy(), this.audioTrackController.destroy(), this.keyLoader.destroy(), this.url = null, this.observer.removeAllListeners()
                                    }
                                }, {
                                    key: "attachMedia",
                                    value: function(e) {
                                        D.logger.log("attachMedia"), this.media = e, this.trigger(s["default"].MEDIA_ATTACHING, {
                                            media: e
                                        })
                                    }
                                }, {
                                    key: "detachMedia",
                                    value: function() {
                                        D.logger.log("detachMedia"), this.trigger(s["default"].MEDIA_DETACHING), this.media = null
                                    }
                                }, {
                                    key: "loadSource",
                                    value: function(e) {
                                        D.logger.log("loadSource:" + e), this.url = e, this.trigger(s["default"].MANIFEST_LOADING, {
                                            url: e
                                        })
                                    }
                                }, {
                                    key: "startLoad",
                                    value: function() {
                                        var e = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0];
                                        D.logger.log("startLoad"), this.levelController.startLoad(), this.streamController.startLoad(e), this.audioStreamController.startLoad(e)
                                    }
                                }, {
                                    key: "stopLoad",
                                    value: function() {
                                        D.logger.log("stopLoad"), this.levelController.stopLoad(), this.streamController.stopLoad(), this.audioStreamController.stopLoad()
                                    }
                                }, {
                                    key: "swapAudioCodec",
                                    value: function() {
                                        D.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                                    }
                                }, {
                                    key: "recoverMediaError",
                                    value: function() {
                                        D.logger.log("recoverMediaError");
                                        var e = this.media;
                                        this.detachMedia(), this.attachMedia(e)
                                    }
                                }, {
                                    key: "levels",
                                    get: function() {
                                        return this.levelController.levels
                                    }
                                }, {
                                    key: "currentLevel",
                                    get: function() {
                                        return this.streamController.currentLevel
                                    },
                                    set: function(e) {
                                        D.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
                                    }
                                }, {
                                    key: "nextLevel",
                                    get: function() {
                                        return this.streamController.nextLevel
                                    },
                                    set: function(e) {
                                        D.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
                                    }
                                }, {
                                    key: "loadLevel",
                                    get: function() {
                                        return this.levelController.level
                                    },
                                    set: function(e) {
                                        D.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
                                    }
                                }, {
                                    key: "nextLoadLevel",
                                    get: function() {
                                        return this.levelController.nextLoadLevel
                                    },
                                    set: function(e) {
                                        this.levelController.nextLoadLevel = e
                                    }
                                }, {
                                    key: "firstLevel",
                                    get: function() {
                                        return this.levelController.firstLevel
                                    },
                                    set: function(e) {
                                        D.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
                                    }
                                }, {
                                    key: "startLevel",
                                    get: function() {
                                        return this.levelController.startLevel
                                    },
                                    set: function(e) {
                                        D.logger.log("set startLevel:" + e), this.levelController.startLevel = e
                                    }
                                }, {
                                    key: "autoLevelCapping",
                                    get: function() {
                                        return this.abrController.autoLevelCapping
                                    },
                                    set: function(e) {
                                        D.logger.log("set autoLevelCapping:" + e), this.abrController.autoLevelCapping = e
                                    }
                                }, {
                                    key: "autoLevelEnabled",
                                    get: function() {
                                        return -1 === this.levelController.manualLevel
                                    }
                                }, {
                                    key: "manualLevel",
                                    get: function() {
                                        return this.levelController.manualLevel
                                    }
                                }, {
                                    key: "audioTracks",
                                    get: function() {
                                        return this.audioTrackController.audioTracks
                                    }
                                }, {
                                    key: "audioTrack",
                                    get: function() {
                                        return this.audioTrackController.audioTrack
                                    },
                                    set: function(e) {
                                        this.audioTrackController.audioTrack = e
                                    }
                                }, {
                                    key: "liveSyncPosition",
                                    get: function() {
                                        return this.streamController.liveSyncPosition
                                    }
                                }]), e
                            }();
                        n["default"] = U
                    }, {
                        1: 1,
                        10: 10,
                        11: 11,
                        12: 12,
                        24: 24,
                        26: 26,
                        3: 3,
                        32: 32,
                        33: 33,
                        34: 34,
                        4: 4,
                        41: 41,
                        43: 43,
                        47: 47,
                        5: 5,
                        6: 6,
                        7: 7,
                        9: 9
                    }],
                    31: [function(e, t, n) {
                        "use strict";
                        t.exports = e(30)["default"]
                    }, {
                        30: 30
                    }],
                    32: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(24),
                            d = e(43),
                            v = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, u["default"].FRAG_LOADING));
                                    return n.loaders = {}, n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        var e = this.loaders;
                                        for (var t in e) {
                                            var n = e[t];
                                            n && n.destroy()
                                        }
                                        this.loaders = {}, f["default"].prototype.destroy.call(this)
                                    }
                                }, {
                                    key: "onFragLoading",
                                    value: function(e) {
                                        var t = e.frag,
                                            n = t.type,
                                            i = this.loaders[n],
                                            r = this.hls.config;
                                        t.loaded = 0, i && (d.logger.warn("abort previous fragment loader for type:" + n), i.abort()), i = this.loaders[n] = t.loader = "undefined" != typeof r.fLoader ? new r.fLoader(r) : new r.loader(r);
                                        var a = void 0,
                                            o = void 0,
                                            s = void 0;
                                        a = {
                                            url: t.url,
                                            frag: t,
                                            responseType: "arraybuffer",
                                            progressData: !1
                                        };
                                        var l = t.byteRangeStartOffset,
                                            u = t.byteRangeEndOffset;
                                        isNaN(l) || isNaN(u) || (a.rangeStart = l, a.rangeEnd = u), o = {
                                            timeout: r.fragLoadingTimeOut,
                                            maxRetry: 0,
                                            retryDelay: 0,
                                            maxRetryDelay: r.fragLoadingMaxRetryTimeout
                                        }, s = {
                                            onSuccess: this.loadsuccess.bind(this),
                                            onError: this.loaderror.bind(this),
                                            onTimeout: this.loadtimeout.bind(this),
                                            onProgress: this.loadprogress.bind(this)
                                        }, i.load(a, o, s)
                                    }
                                }, {
                                    key: "loadsuccess",
                                    value: function(e, t, n) {
                                        var i = e.data,
                                            r = n.frag;
                                        r.loader = void 0, this.loaders[r.type] = void 0, this.hls.trigger(u["default"].FRAG_LOADED, {
                                            payload: i,
                                            frag: r,
                                            stats: t
                                        })
                                    }
                                }, {
                                    key: "loaderror",
                                    value: function(e, t) {
                                        var n = t.loader;
                                        n && n.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u["default"].ERROR, {
                                            type: h.ErrorTypes.NETWORK_ERROR,
                                            details: h.ErrorDetails.FRAG_LOAD_ERROR,
                                            fatal: !1,
                                            frag: t.frag,
                                            response: e
                                        })
                                    }
                                }, {
                                    key: "loadtimeout",
                                    value: function(e, t) {
                                        var n = t.loader;
                                        n && n.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u["default"].ERROR, {
                                            type: h.ErrorTypes.NETWORK_ERROR,
                                            details: h.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                            fatal: !1,
                                            frag: t.frag
                                        })
                                    }
                                }, {
                                    key: "loadprogress",
                                    value: function(e, t, n) {
                                        var i = t.frag;
                                        i.loaded = e.loaded, this.hls.trigger(u["default"].FRAG_LOAD_PROGRESS, {
                                            frag: i,
                                            stats: e
                                        })
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = v
                    }, {
                        24: 24,
                        25: 25,
                        26: 26,
                        43: 43
                    }],
                    33: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(24),
                            d = e(43),
                            v = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, u["default"].KEY_LOADING));
                                    return n.loaders = {}, n.decryptkey = null, n.decrypturl = null, n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        for (var e in this.loaders) {
                                            var t = this.loaders[e];
                                            t && t.destroy()
                                        }
                                        this.loaders = {}, f["default"].prototype.destroy.call(this)
                                    }
                                }, {
                                    key: "onKeyLoading",
                                    value: function(e) {
                                        var t = e.frag,
                                            n = t.type,
                                            i = this.loaders[n],
                                            r = t.decryptdata,
                                            a = r.uri;
                                        if (a !== this.decrypturl || null === this.decryptkey) {
                                            var o = this.hls.config;
                                            i && (d.logger.warn("abort previous fragment loader for type:" + n), i.abort()), t.loader = this.loaders[n] = new o.loader(o), this.decrypturl = a, this.decryptkey = null;
                                            var s = void 0,
                                                l = void 0,
                                                c = void 0;
                                            s = {
                                                url: a,
                                                frag: t,
                                                responseType: "arraybuffer"
                                            }, l = {
                                                timeout: o.fragLoadingTimeOut,
                                                maxRetry: o.fragLoadingMaxRetry,
                                                retryDelay: o.fragLoadingRetryDelay,
                                                maxRetryDelay: o.fragLoadingMaxRetryTimeout
                                            }, c = {
                                                onSuccess: this.loadsuccess.bind(this),
                                                onError: this.loaderror.bind(this),
                                                onTimeout: this.loadtimeout.bind(this)
                                            }, t.loader.load(s, l, c)
                                        } else this.decryptkey && (r.key = this.decryptkey, this.hls.trigger(u["default"].KEY_LOADED, {
                                            frag: t
                                        }))
                                    }
                                }, {
                                    key: "loadsuccess",
                                    value: function(e, t, n) {
                                        var i = n.frag;
                                        this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, this.loaders[n.type] = void 0, this.hls.trigger(u["default"].KEY_LOADED, {
                                            frag: i
                                        })
                                    }
                                }, {
                                    key: "loaderror",
                                    value: function(e, t) {
                                        var n = t.frag,
                                            i = n.loader;
                                        i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u["default"].ERROR, {
                                            type: h.ErrorTypes.NETWORK_ERROR,
                                            details: h.ErrorDetails.KEY_LOAD_ERROR,
                                            fatal: !1,
                                            frag: n,
                                            response: e
                                        })
                                    }
                                }, {
                                    key: "loadtimeout",
                                    value: function(e, t) {
                                        var n = t.frag,
                                            i = n.loader;
                                        i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u["default"].ERROR, {
                                            type: h.ErrorTypes.NETWORK_ERROR,
                                            details: h.ErrorDetails.KEY_LOAD_TIMEOUT,
                                            fatal: !1,
                                            frag: n
                                        })
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = v
                    }, {
                        24: 24,
                        25: 25,
                        26: 26,
                        43: 43
                    }],
                    34: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }

                        function a(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }

                        function o(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            l = e(26),
                            u = i(l),
                            c = e(25),
                            f = i(c),
                            h = e(24),
                            d = e(46),
                            v = i(d),
                            p = e(38),
                            g = i(p),
                            y = e(43),
                            m = function(e) {
                                function t(e) {
                                    r(this, t);
                                    var n = a(this, Object.getPrototypeOf(t).call(this, e, u["default"].MANIFEST_LOADING, u["default"].LEVEL_LOADING, u["default"].AUDIO_TRACK_LOADING));
                                    return n.loaders = {}, n
                                }
                                return o(t, e), s(t, [{
                                    key: "destroy",
                                    value: function() {
                                        for (var e in this.loaders) {
                                            var t = this.loaders[e];
                                            t && t.destroy()
                                        }
                                        this.loaders = {}, f["default"].prototype.destroy.call(this)
                                    }
                                }, {
                                    key: "onManifestLoading",
                                    value: function(e) {
                                        this.load(e.url, {
                                            type: "manifest"
                                        })
                                    }
                                }, {
                                    key: "onLevelLoading",
                                    value: function(e) {
                                        this.load(e.url, {
                                            type: "level",
                                            level: e.level,
                                            id: e.id
                                        })
                                    }
                                }, {
                                    key: "onAudioTrackLoading",
                                    value: function(e) {
                                        this.load(e.url, {
                                            type: "audioTrack",
                                            id: e.id
                                        })
                                    }
                                }, {
                                    key: "load",
                                    value: function(e, t) {
                                        var n = this.loaders[t.type];
                                        if (n) {
                                            var i = n.context;
                                            if (i && i.url === e) return void y.logger.trace("playlist request ongoing");
                                            y.logger.warn("abort previous loader for type:" + t.type), n.abort()
                                        }
                                        var r = this.hls.config,
                                            a = void 0,
                                            o = void 0,
                                            s = void 0,
                                            l = void 0;
                                        "manifest" === t.type ? (a = r.manifestLoadingMaxRetry, o = r.manifestLoadingTimeOut, s = r.manifestLoadingRetryDelay, l = r.manifestLoadingMaxRetryTimeOut) : (a = r.levelLoadingMaxRetry, o = r.levelLoadingTimeOut, s = r.levelLoadingRetryDelay, l = r.levelLoadingMaxRetryTimeOut, y.logger.log("loading playlist for level " + t.level)), n = this.loaders[t.type] = t.loader = "undefined" != typeof r.pLoader ? new r.pLoader(r) : new r.loader(r), t.url = e, t.responseType = "";
                                        var u = void 0,
                                            c = void 0;
                                        u = {
                                            timeout: o,
                                            maxRetry: a,
                                            retryDelay: s,
                                            maxRetryDelay: l
                                        }, c = {
                                            onSuccess: this.loadsuccess.bind(this),
                                            onError: this.loaderror.bind(this),
                                            onTimeout: this.loadtimeout.bind(this)
                                        }, n.load(t, u, c)
                                    }
                                }, {
                                    key: "resolve",
                                    value: function(e, t) {
                                        return v["default"].buildAbsoluteURL(t, e)
                                    }
                                }, {
                                    key: "parseMasterPlaylist",
                                    value: function(e, t) {
                                        for (var n = [], i = void 0, r = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g; null != (i = r.exec(e));) {
                                            var a = {},
                                                o = a.attrs = new g["default"](i[1]);
                                            a.url = this.resolve(i[2], t);
                                            var s = o.decimalResolution("RESOLUTION");
                                            s && (a.width = s.width, a.height = s.height), a.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"), a.name = o.NAME;
                                            var l = o.CODECS;
                                            if (l) {
                                                l = l.split(",");
                                                for (var u = 0; u < l.length; u++) {
                                                    var c = l[u]; - 1 !== c.indexOf("avc1") ? a.videoCodec = this.avc1toavcoti(c) : a.audioCodec = c
                                                }
                                            }
                                            n.push(a)
                                        }
                                        return n
                                    }
                                }, {
                                    key: "parseMasterPlaylistMedia",
                                    value: function(e, t, n) {
                                        for (var i = void 0, r = [], a = /#EXT-X-MEDIA:(.*)/g; null != (i = a.exec(e));) {
                                            var o = {},
                                                s = new g["default"](i[1]);
                                            s.TYPE === n && (o.groupId = s["GROUP-ID"], o.name = s.NAME, o.type = n, o["default"] = "YES" === s.DEFAULT, o.autoselect = "YES" === s.AUTOSELECT, o.forced = "YES" === s.FORCED, s.URI && (o.url = this.resolve(s.URI, t)), o.lang = s.LANGUAGE, o.name || (o.name = o.lang), r.push(o))
                                        }
                                        return r
                                    }
                                }, {
                                    key: "createInitializationVector",
                                    value: function(e) {
                                        for (var t = new Uint8Array(16), n = 12; 16 > n; n++) t[n] = e >> 8 * (15 - n) & 255;
                                        return t
                                    }
                                }, {
                                    key: "fragmentDecryptdataFromLevelkey",
                                    value: function(e, t) {
                                        var n = e;
                                        return e && e.method && e.uri && !e.iv && (n = this.cloneObj(e), n.iv = this.createInitializationVector(t)), n
                                    }
                                }, {
                                    key: "avc1toavcoti",
                                    value: function(e) {
                                        var t, n = e.split(".");
                                        return n.length > 2 ? (t = n.shift() + ".", t += parseInt(n.shift()).toString(16), t += ("000" + parseInt(n.shift()).toString(16)).substr(-4)) : t = e, t
                                    }
                                }, {
                                    key: "cloneObj",
                                    value: function(e) {
                                        return JSON.parse(JSON.stringify(e))
                                    }
                                }, {
                                    key: "parseLevelPlaylist",
                                    value: function(e, t, n, i) {
                                        var r, a, o, s = 0,
                                            l = 0,
                                            u = {
                                                type: null,
                                                version: null,
                                                url: t,
                                                fragments: [],
                                                live: !0,
                                                startSN: 0
                                            },
                                            c = {
                                                method: null,
                                                key: null,
                                                iv: null,
                                                uri: null
                                            },
                                            f = 0,
                                            h = null,
                                            d = null,
                                            v = null,
                                            p = null,
                                            m = null,
                                            E = null,
                                            b = [];
                                        for (o = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE):(\d+))|(?:#EXT-X-(TARGETDURATION):(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT(INF):(\d+(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:#EXT-X-(BYTERANGE):(\d+(?:@\d+(?:\.\d+)?)?)|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g; null !== (a = o.exec(e));) switch (a.shift(), a = a.filter(function(e) {
                                            return void 0 !== e
                                        }), a[0]) {
                                            case "PLAYLIST-TYPE":
                                                u.type = a[1].toUpperCase();
                                                break;
                                            case "MEDIA-SEQUENCE":
                                                s = u.startSN = parseInt(a[1]);
                                                break;
                                            case "TARGETDURATION":
                                                u.targetduration = parseFloat(a[1]);
                                                break;
                                            case "VERSION":
                                                u.version = parseInt(a[1]);
                                                break;
                                            case "EXTM3U":
                                                break;
                                            case "ENDLIST":
                                                u.live = !1;
                                                break;
                                            case "DIS":
                                                f++, b.push(a);
                                                break;
                                            case "BYTERANGE":
                                                var k = a[1].split("@");
                                                E = 1 === k.length ? m : parseInt(k[1]), m = parseInt(k[0]) + E;
                                                break;
                                            case "INF":
                                                v = parseFloat(a[1]), p = a[2] ? a[2] : null, b.push(a);
                                                break;
                                            case "":
                                                if (!isNaN(v)) {
                                                    var _ = s++;
                                                    r = this.fragmentDecryptdataFromLevelkey(c, _);
                                                    var A = a[1] ? this.resolve(a[1], t) : null;
                                                    d = {
                                                        url: A,
                                                        type: i,
                                                        duration: v,
                                                        title: p,
                                                        start: l,
                                                        sn: _,
                                                        level: n,
                                                        cc: f,
                                                        decryptdata: r,
                                                        programDateTime: h,
                                                        tagList: b
                                                    }, null !== E && (d.byteRangeStartOffset = E, d.byteRangeEndOffset = m), u.fragments.push(d), l += v, v = null, p = null, E = null, h = null, b = []
                                                }
                                                break;
                                            case "KEY":
                                                var T = a[1],
                                                    L = new g["default"](T),
                                                    S = L.enumeratedString("METHOD"),
                                                    R = L.URI,
                                                    O = L.hexadecimalInteger("IV");
                                                S && (c = {
                                                    method: null,
                                                    key: null,
                                                    iv: null,
                                                    uri: null
                                                }, R && "AES-128" === S && (c.method = S, c.uri = this.resolve(R, t), c.key = null, c.iv = O));
                                                break;
                                            case "START":
                                                var w = a[1],
                                                    C = new g["default"](w),
                                                    D = C.decimalFloatingPoint("TIME-OFFSET");
                                                isNaN(D) || (u.startTimeOffset = D);
                                                break;
                                            case "PROGRAM-DATE-TIME":
                                                h = new Date(Date.parse(a[1])), b.push(a);
                                                break;
                                            case "#":
                                                a.shift(), b.push(a);
                                                break;
                                            default:
                                                y.logger.warn("line parsed but not handled: " + a)
                                        }
                                        return d && !d.url && (u.fragments.pop(), l -= d.duration), u.totalduration = l, u.averagetargetduration = l / u.fragments.length, u.endSN = s - 1, u
                                    }
                                }, {
                                    key: "loadsuccess",
                                    value: function(e, t, n) {
                                        var i = e.data,
                                            r = e.url,
                                            a = n.type,
                                            o = n.id,
                                            s = n.level,
                                            l = this.hls;
                                        if (this.loaders[a] = void 0, void 0 !== r && 0 !== r.indexOf("data:") || (r = n.url), t.tload = performance.now(), 0 === i.indexOf("#EXTM3U"))
                                            if (i.indexOf("#EXTINF:") > 0) {
                                                var c = "audioTrack" !== a,
                                                    f = this.parseLevelPlaylist(i, r, (c ? s : o) || 0, c ? "main" : "audio");
                                                "manifest" === a && l.trigger(u["default"].MANIFEST_LOADED, {
                                                    levels: [{
                                                        url: r,
                                                        details: f
                                                    }],
                                                    url: r,
                                                    stats: t
                                                }), t.tparsed = performance.now(), c ? l.trigger(u["default"].LEVEL_LOADED, {
                                                    details: f,
                                                    level: s || 0,
                                                    id: o || 0,
                                                    stats: t
                                                }) : l.trigger(u["default"].AUDIO_TRACK_LOADED, {
                                                    details: f,
                                                    id: o,
                                                    stats: t
                                                })
                                            } else {
                                                var d = this.parseMasterPlaylist(i, r);
                                                if (d.length) {
                                                    var v = this.parseMasterPlaylistMedia(i, r, "AUDIO");
                                                    if (v.length) {
                                                        var p = !1;
                                                        v.forEach(function(e) {
                                                            e.url || (p = !0)
                                                        }), p === !1 && d[0].audioCodec && !d[0].attrs.AUDIO && (y.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),
                                                            v.unshift({
                                                                type: "main",
                                                                name: "main"
                                                            }))
                                                    }
                                                    l.trigger(u["default"].MANIFEST_LOADED, {
                                                        levels: d,
                                                        audioTracks: v,
                                                        url: r,
                                                        stats: t
                                                    })
                                                } else l.trigger(u["default"].ERROR, {
                                                    type: h.ErrorTypes.NETWORK_ERROR,
                                                    details: h.ErrorDetails.MANIFEST_PARSING_ERROR,
                                                    fatal: !0,
                                                    url: r,
                                                    reason: "no level found in manifest"
                                                })
                                            }
                                        else l.trigger(u["default"].ERROR, {
                                            type: h.ErrorTypes.NETWORK_ERROR,
                                            details: h.ErrorDetails.MANIFEST_PARSING_ERROR,
                                            fatal: !0,
                                            url: r,
                                            reason: "no EXTM3U delimiter"
                                        })
                                    }
                                }, {
                                    key: "loaderror",
                                    value: function(e, t) {
                                        var n, i, r = t.loader;
                                        switch (t.type) {
                                            case "manifest":
                                                n = h.ErrorDetails.MANIFEST_LOAD_ERROR, i = !0;
                                                break;
                                            case "level":
                                                n = h.ErrorDetails.LEVEL_LOAD_ERROR, i = !1;
                                                break;
                                            case "audioTrack":
                                                n = h.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, i = !1
                                        }
                                        r && (r.abort(), this.loaders[t.type] = void 0), this.hls.trigger(u["default"].ERROR, {
                                            type: h.ErrorTypes.NETWORK_ERROR,
                                            details: n,
                                            fatal: i,
                                            url: r.url,
                                            loader: r,
                                            response: e,
                                            context: t
                                        })
                                    }
                                }, {
                                    key: "loadtimeout",
                                    value: function(e, t) {
                                        var n, i, r = t.loader;
                                        switch (t.type) {
                                            case "manifest":
                                                n = h.ErrorDetails.MANIFEST_LOAD_TIMEOUT, i = !0;
                                                break;
                                            case "level":
                                                n = h.ErrorDetails.LEVEL_LOAD_TIMEOUT, i = !1;
                                                break;
                                            case "audioTrack":
                                                n = h.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, i = !1
                                        }
                                        r && (r.abort(), this.loaders[t.type] = void 0), this.hls.trigger(u["default"].ERROR, {
                                            type: h.ErrorTypes.NETWORK_ERROR,
                                            details: n,
                                            fatal: i,
                                            url: r.url,
                                            loader: r,
                                            context: t
                                        })
                                    }
                                }]), t
                            }(f["default"]);
                        n["default"] = m
                    }, {
                        24: 24,
                        25: 25,
                        26: 26,
                        38: 38,
                        43: 43,
                        46: 46
                    }],
                    35: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = function() {
                                function e() {
                                    i(this, e)
                                }
                                return r(e, null, [{
                                    key: "init",
                                    value: function() {
                                        e.types = {
                                            avc1: [],
                                            avcC: [],
                                            btrt: [],
                                            dinf: [],
                                            dref: [],
                                            esds: [],
                                            ftyp: [],
                                            hdlr: [],
                                            mdat: [],
                                            mdhd: [],
                                            mdia: [],
                                            mfhd: [],
                                            minf: [],
                                            moof: [],
                                            moov: [],
                                            mp4a: [],
                                            mvex: [],
                                            mvhd: [],
                                            sdtp: [],
                                            stbl: [],
                                            stco: [],
                                            stsc: [],
                                            stsd: [],
                                            stsz: [],
                                            stts: [],
                                            tfdt: [],
                                            tfhd: [],
                                            traf: [],
                                            trak: [],
                                            trun: [],
                                            trex: [],
                                            tkhd: [],
                                            vmhd: [],
                                            smhd: []
                                        };
                                        var t;
                                        for (t in e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                                        var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                            i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                                        e.HDLR_TYPES = {
                                            video: n,
                                            audio: i
                                        };
                                        var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                            a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                                        e.STTS = e.STSC = e.STCO = a, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                                        var o = new Uint8Array([105, 115, 111, 109]),
                                            s = new Uint8Array([97, 118, 99, 49]),
                                            l = new Uint8Array([0, 0, 0, 1]);
                                        e.FTYP = e.box(e.types.ftyp, o, l, o, s), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, r))
                                    }
                                }, {
                                    key: "box",
                                    value: function(e) {
                                        for (var t, n = Array.prototype.slice.call(arguments, 1), i = 8, r = n.length, a = r; r--;) i += n[r].byteLength;
                                        for (t = new Uint8Array(i), t[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), r = 0, i = 8; a > r; r++) t.set(n[r], i), i += n[r].byteLength;
                                        return t
                                    }
                                }, {
                                    key: "hdlr",
                                    value: function(t) {
                                        return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                                    }
                                }, {
                                    key: "mdat",
                                    value: function(t) {
                                        return e.box(e.types.mdat, t)
                                    }
                                }, {
                                    key: "mdhd",
                                    value: function(t, n) {
                                        return n *= t, e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                                    }
                                }, {
                                    key: "mdia",
                                    value: function(t) {
                                        return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                                    }
                                }, {
                                    key: "mfhd",
                                    value: function(t) {
                                        return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                                    }
                                }, {
                                    key: "minf",
                                    value: function(t) {
                                        return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                                    }
                                }, {
                                    key: "moof",
                                    value: function(t, n, i) {
                                        return e.box(e.types.moof, e.mfhd(t), e.traf(i, n))
                                    }
                                }, {
                                    key: "moov",
                                    value: function(t) {
                                        for (var n = t.length, i = []; n--;) i[n] = e.trak(t[n]);
                                        return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
                                    }
                                }, {
                                    key: "mvex",
                                    value: function(t) {
                                        for (var n = t.length, i = []; n--;) i[n] = e.trex(t[n]);
                                        return e.box.apply(null, [e.types.mvex].concat(i))
                                    }
                                }, {
                                    key: "mvhd",
                                    value: function(t, n) {
                                        n *= t;
                                        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                                        return e.box(e.types.mvhd, i)
                                    }
                                }, {
                                    key: "sdtp",
                                    value: function(t) {
                                        var n, i, r = t.samples || [],
                                            a = new Uint8Array(4 + r.length);
                                        for (i = 0; i < r.length; i++) n = r[i].flags, a[i + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
                                        return e.box(e.types.sdtp, a)
                                    }
                                }, {
                                    key: "stbl",
                                    value: function(t) {
                                        return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                                    }
                                }, {
                                    key: "avc1",
                                    value: function(t) {
                                        var n, i, r, a = [],
                                            o = [];
                                        for (n = 0; n < t.sps.length; n++) i = t.sps[n], r = i.byteLength, a.push(r >>> 8 & 255), a.push(255 & r), a = a.concat(Array.prototype.slice.call(i));
                                        for (n = 0; n < t.pps.length; n++) i = t.pps[n], r = i.byteLength, o.push(r >>> 8 & 255), o.push(255 & r), o = o.concat(Array.prototype.slice.call(i));
                                        var s = e.box(e.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | t.sps.length].concat(a).concat([t.pps.length]).concat(o))),
                                            l = t.width,
                                            u = t.height;
                                        return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                                    }
                                }, {
                                    key: "esds",
                                    value: function(e) {
                                        var t = e.config.length;
                                        return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                                    }
                                }, {
                                    key: "mp4a",
                                    value: function(t) {
                                        var n = t.audiosamplerate;
                                        return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0]), e.box(e.types.esds, e.esds(t)))
                                    }
                                }, {
                                    key: "stsd",
                                    value: function(t) {
                                        return "audio" === t.type ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                                    }
                                }, {
                                    key: "tkhd",
                                    value: function(t) {
                                        var n = t.id,
                                            i = t.duration * t.timescale,
                                            r = t.width,
                                            a = t.height;
                                        return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
                                    }
                                }, {
                                    key: "traf",
                                    value: function(t, n) {
                                        var i = e.sdtp(t),
                                            r = t.id;
                                        return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.trun(t, i.length + 16 + 16 + 8 + 16 + 8 + 8), i)
                                    }
                                }, {
                                    key: "trak",
                                    value: function(t) {
                                        return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                                    }
                                }, {
                                    key: "trex",
                                    value: function(t) {
                                        var n = t.id;
                                        return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                                    }
                                }, {
                                    key: "trun",
                                    value: function(t, n) {
                                        var i, r, a, o, s, l, u = t.samples || [],
                                            c = u.length,
                                            f = 12 + 16 * c,
                                            h = new Uint8Array(f);
                                        for (n += 8 + f, h.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n], 0), i = 0; c > i; i++) r = u[i], a = r.duration, o = r.size, s = r.flags, l = r.cts, h.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                                        return e.box(e.types.trun, h)
                                    }
                                }, {
                                    key: "initSegment",
                                    value: function(t) {
                                        e.types || e.init();
                                        var n, i = e.moov(t);
                                        return n = new Uint8Array(e.FTYP.byteLength + i.byteLength), n.set(e.FTYP), n.set(i, e.FTYP.byteLength), n
                                    }
                                }]), e
                            }();
                        n["default"] = a
                    }, {}],
                    36: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(27),
                            s = i(o),
                            l = e(26),
                            u = i(l),
                            c = e(43),
                            f = e(35),
                            h = i(f),
                            d = e(24);
                        e(44);
                        var v = function() {
                            function e(t, n, i) {
                                r(this, e), this.observer = t, this.id = n, this.config = i, this.ISGenerated = !1, this.PES2MP4SCALEFACTOR = 4, this.PES_TIMESCALE = 9e4, this.MP4_TIMESCALE = this.PES_TIMESCALE / this.PES2MP4SCALEFACTOR
                            }
                            return a(e, [{
                                key: "destroy",
                                value: function() {}
                            }, {
                                key: "insertDiscontinuity",
                                value: function() {
                                    this._initPTS = this._initDTS = void 0
                                }
                            }, {
                                key: "switchLevel",
                                value: function() {
                                    this.ISGenerated = !1
                                }
                            }, {
                                key: "remux",
                                value: function(e, t, n, i, r, a, o, s, l) {
                                    if (this.level = e, this.sn = t, this.ISGenerated || this.generateIS(n, i, o), this.ISGenerated)
                                        if (n.samples.length) {
                                            var c = this.remuxAudio(n, o, s, l);
                                            if (i.samples.length) {
                                                var f = void 0;
                                                c && (f = c.endPTS - c.startPTS), this.remuxVideo(i, o, s, f)
                                            }
                                        } else {
                                            var h = void 0;
                                            i.samples.length && (h = this.remuxVideo(i, o, s)), h && n.codec && this.remuxEmptyAudio(n, o, s, h)
                                        }
                                    r.samples.length && this.remuxID3(r, o), a.samples.length && this.remuxText(a, o), this.observer.trigger(u["default"].FRAG_PARSED, {
                                        id: this.id,
                                        level: this.level,
                                        sn: this.sn
                                    })
                                }
                            }, {
                                key: "generateIS",
                                value: function(e, t, n) {
                                    var i, r, a = this.observer,
                                        o = e.samples,
                                        s = t.samples,
                                        l = this.PES_TIMESCALE,
                                        f = {},
                                        v = {
                                            id: this.id,
                                            level: this.level,
                                            sn: this.sn,
                                            tracks: f,
                                            unique: !1
                                        },
                                        p = void 0 === this._initPTS;
                                    p && (i = r = 1 / 0), e.config && o.length && (e.timescale = e.audiosamplerate, e.timescale * e.duration > Math.pow(2, 32) && ! function() {
                                        var t = function(e, t) {
                                            for (var n = !0; n;) {
                                                var i = e,
                                                    r = t;
                                                if (n = !1, !r) return i;
                                                e = r, t = i % r, n = !0
                                            }
                                        };
                                        e.timescale = e.audiosamplerate / t(e.audiosamplerate, 1024)
                                    }(), c.logger.log("audio mp4 timescale :" + e.timescale), f.audio = {
                                        container: "audio/mp4",
                                        codec: e.codec,
                                        initSegment: h["default"].initSegment([e]),
                                        metadata: {
                                            channelCount: e.channelCount
                                        }
                                    }, p && (i = r = o[0].pts - l * n)), t.sps && t.pps && s.length && (t.timescale = this.MP4_TIMESCALE, f.video = {
                                        container: "video/mp4",
                                        codec: t.codec,
                                        initSegment: h["default"].initSegment([t]),
                                        metadata: {
                                            width: t.width,
                                            height: t.height
                                        }
                                    }, p && (i = Math.min(i, s[0].pts - l * n), r = Math.min(r, s[0].dts - l * n))), Object.keys(f).length ? (a.trigger(u["default"].FRAG_PARSING_INIT_SEGMENT, v), this.ISGenerated = !0, p && (this._initPTS = i, this._initDTS = r)) : a.trigger(u["default"].ERROR, {
                                        type: d.ErrorTypes.MEDIA_ERROR,
                                        id: this.id,
                                        details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: !1,
                                        reason: "no audio/video samples found"
                                    })
                                }
                            }, {
                                key: "remuxVideo",
                                value: function(e, t, n, i) {
                                    var r, a, o, s, l, f, d, v, p = 8,
                                        g = this.PES_TIMESCALE,
                                        y = this.PES2MP4SCALEFACTOR,
                                        m = e.samples,
                                        E = [],
                                        b = m.reduce(function(e, t) {
                                            return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                                        }, 0);
                                    if (0 > b) {
                                        c.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(b / 90) + " ms to overcome this issue");
                                        for (var k = 0; k < m.length; k++) m[k].dts += b
                                    }
                                    var _ = void 0;
                                    _ = n ? this.nextAvcDts : t * g;
                                    var A = m[0];
                                    l = Math.max(this._PTSNormalize(A.dts - this._initDTS, _), 0), s = Math.max(this._PTSNormalize(A.pts - this._initDTS, _), 0);
                                    var T = Math.round((l - _) / 90);
                                    n && T && (T > 1 ? c.logger.log("AVC:" + T + " ms hole between fragments detected,filling it") : -1 > T && c.logger.log("AVC:" + -T + " ms overlapping between fragments detected"), l = _, m[0].dts = l + this._initDTS, s = Math.max(s - T, _), m[0].pts = s + this._initDTS, c.logger.log("Video/PTS/DTS adjusted: " + Math.round(s / 90) + "/" + Math.round(l / 90) + ",delta:" + T + " ms")), f = l, A = m[m.length - 1], v = Math.max(this._PTSNormalize(A.dts - this._initDTS, _), 0), d = Math.max(this._PTSNormalize(A.pts - this._initDTS, _), 0), d = Math.max(d, v);
                                    var L = navigator.vendor,
                                        S = navigator.userAgent,
                                        R = L && L.indexOf("Apple") > -1 && S && !S.match("CriOS");
                                    R && (r = Math.round((v - l) / (y * (m.length - 1))));
                                    for (var O = 0; O < m.length; O++) {
                                        var w = m[O];
                                        R ? w.dts = l + O * y * r : (w.dts = Math.max(this._PTSNormalize(w.dts - this._initDTS, _), l), w.dts = Math.round(w.dts / y) * y), w.pts = Math.max(this._PTSNormalize(w.pts - this._initDTS, _), w.dts), w.pts = Math.round(w.pts / y) * y
                                    }
                                    a = new Uint8Array(e.len + 4 * e.nbNalu + 8);
                                    var C = new DataView(a.buffer);
                                    C.setUint32(0, a.byteLength), a.set(h["default"].types.mdat, 4);
                                    for (var D = 0; D < m.length; D++) {
                                        for (var P = m[D], I = 0, x = void 0; P.units.units.length;) {
                                            var N = P.units.units.shift();
                                            C.setUint32(p, N.data.byteLength), p += 4, a.set(N.data, p), p += N.data.byteLength, I += 4 + N.data.byteLength
                                        }
                                        if (R) x = Math.max(0, r * Math.round((P.pts - P.dts) / (y * r)));
                                        else {
                                            if (D < m.length - 1) r = m[D + 1].dts - P.dts;
                                            else {
                                                var M = this.config,
                                                    B = P.dts - m[D > 0 ? D - 1 : D].dts;
                                                if (M.stretchShortVideoTrack) {
                                                    var F = M.maxBufferHole,
                                                        j = M.maxSeekHole,
                                                        U = Math.floor(Math.min(F, j) * g),
                                                        G = (i ? s + i * g : this.nextAacPts) - P.pts;
                                                    G > U ? (r = G - B, 0 > r && (r = B), c.logger.log("It is approximately " + G / 90 + " ms to the next segment; using duration " + r / 90 + " ms for the last video frame.")) : r = B
                                                } else r = B
                                            }
                                            r /= y, x = Math.round((P.pts - P.dts) / y)
                                        }
                                        E.push({
                                            size: I,
                                            duration: r,
                                            cts: x,
                                            flags: {
                                                isLeading: 0,
                                                isDependedOn: 0,
                                                hasRedundancy: 0,
                                                degradPrio: 0,
                                                dependsOn: P.key ? 2 : 1,
                                                isNonSync: P.key ? 0 : 1
                                            }
                                        })
                                    }
                                    this.nextAvcDts = v + r * y;
                                    var V = e.dropped;
                                    if (e.len = 0, e.nbNalu = 0, e.dropped = 0, E.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                        var Y = E[0].flags;
                                        Y.dependsOn = 2, Y.isNonSync = 0
                                    }
                                    e.samples = E, o = h["default"].moof(e.sequenceNumber++, l / y, e), e.samples = [];
                                    var K = {
                                        id: this.id,
                                        level: this.level,
                                        sn: this.sn,
                                        data1: o,
                                        data2: a,
                                        startPTS: s / g,
                                        endPTS: (d + y * r) / g,
                                        startDTS: l / g,
                                        endDTS: this.nextAvcDts / g,
                                        type: "video",
                                        nb: E.length,
                                        dropped: V
                                    };
                                    return this.observer.trigger(u["default"].FRAG_PARSING_DATA, K), K
                                }
                            }, {
                                key: "remuxAudio",
                                value: function(e, t, n, i) {
                                    var r, a, o, l, f, d, v, p, g, y, m, E, b, k, _, A = this.PES_TIMESCALE,
                                        T = e.timescale,
                                        L = A / T,
                                        S = 1024 * e.timescale / e.audiosamplerate,
                                        R = 8,
                                        O = [],
                                        w = [];
                                    e.samples.sort(function(e, t) {
                                        return e.pts - t.pts
                                    }), w = e.samples, n |= w.length && this.nextAacPts && Math.abs(t - this.nextAacPts / A) < .1;
                                    var C = n ? this.nextAacPts : t * A,
                                        D = S * L,
                                        P = C;
                                    if (i)
                                        for (var I = 0; I < w.length;) {
                                            var x = w[I],
                                                N = this._PTSNormalize(x.pts - this._initDTS, C),
                                                M = N - P;
                                            if (-D >= M) c.logger.warn("Dropping 1 audio frame @ " + Math.round(P / 90) / 1e3 + "s due to " + Math.round(Math.abs(M / 90)) + " ms overlap."), w.splice(I, 1), e.len -= x.unit.length;
                                            else if (M >= D) {
                                                var B = Math.round(M / D);
                                                c.logger.warn("Injecting " + B + " audio frame @ " + Math.round(P / 90) / 1e3 + "s due to " + Math.round(M / 90) + " ms gap.");
                                                for (var F = 0; B > F; F++) _ = P + this._initDTS, _ = Math.max(_, this._initDTS), k = s["default"].getSilentFrame(e.channelCount), k || (c.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), k = x.unit.slice(0)), w.splice(I, 0, {
                                                    unit: k,
                                                    pts: _,
                                                    dts: _
                                                }), e.len += k.length, P += D, I += 1;
                                                x.pts = x.dts = P + this._initDTS, P += D, I += 1
                                            } else Math.abs(M) > .1 * D, P += D, 0 === I ? x.pts = x.dts = this._initDTS + C : x.pts = x.dts = w[I - 1].pts + D, I += 1
                                        }
                                    for (; w.length;) {
                                        if (a = w.shift(), l = a.unit, y = a.pts - this._initDTS, m = a.dts - this._initDTS, void 0 !== g) E = this._PTSNormalize(y, g), b = this._PTSNormalize(m, g), o.duration = Math.round((b - g) / L);
                                        else {
                                            E = this._PTSNormalize(y, C), b = this._PTSNormalize(m, C);
                                            var j = Math.round(1e3 * (E - C) / A),
                                                U = 0;
                                            if (n && j) {
                                                if (j > 0) U = Math.round((E - C) / D), c.logger.log(j + " ms hole between AAC samples detected,filling it"), U > 0 && (k = s["default"].getSilentFrame(e.channelCount), k || (k = l.slice(0)), e.len += U * k.length);
                                                else if (-12 > j) {
                                                    c.logger.log(-j + " ms overlapping between AAC samples detected, drop frame"), e.len -= l.byteLength;
                                                    continue
                                                }
                                                E = b = C
                                            }
                                            if (v = Math.max(0, E), p = Math.max(0, b), !(e.len > 0)) return;
                                            f = new Uint8Array(e.len + 8), r = new DataView(f.buffer), r.setUint32(0, f.byteLength), f.set(h["default"].types.mdat, 4);
                                            for (var G = 0; U > G; G++) _ = E - (U - G) * D, k = s["default"].getSilentFrame(e.channelCount), k || (c.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), k = l.slice(0)), f.set(k, R), R += k.byteLength, o = {
                                                size: k.byteLength,
                                                cts: 0,
                                                duration: 1024,
                                                flags: {
                                                    isLeading: 0,
                                                    isDependedOn: 0,
                                                    hasRedundancy: 0,
                                                    degradPrio: 0,
                                                    dependsOn: 1
                                                }
                                            }, O.push(o)
                                        }
                                        f.set(l, R), R += l.byteLength, o = {
                                            size: l.byteLength,
                                            cts: 0,
                                            duration: 0,
                                            flags: {
                                                isLeading: 0,
                                                isDependedOn: 0,
                                                hasRedundancy: 0,
                                                degradPrio: 0,
                                                dependsOn: 1
                                            }
                                        }, O.push(o), g = b
                                    }
                                    var V = 0,
                                        Y = O.length;
                                    if (Y >= 2 && (V = O[Y - 2].duration, o.duration = V), Y) {
                                        this.nextAacPts = E + L * V, e.len = 0, e.samples = O, d = h["default"].moof(e.sequenceNumber++, p / L, e), e.samples = [];
                                        var K = {
                                            id: this.id,
                                            level: this.level,
                                            sn: this.sn,
                                            data1: d,
                                            data2: f,
                                            startPTS: v / A,
                                            endPTS: this.nextAacPts / A,
                                            startDTS: p / A,
                                            endDTS: (b + L * V) / A,
                                            type: "audio",
                                            nb: Y
                                        };
                                        return this.observer.trigger(u["default"].FRAG_PARSING_DATA, K), K
                                    }
                                    return null
                                }
                            }, {
                                key: "remuxEmptyAudio",
                                value: function(e, t, n, i) {
                                    var r = this.PES_TIMESCALE,
                                        a = e.timescale ? e.timescale : e.audiosamplerate,
                                        o = r / a,
                                        l = i.startDTS * r + this._initDTS,
                                        u = i.endDTS * r + this._initDTS,
                                        f = 1024,
                                        h = o * f,
                                        d = Math.ceil((u - l) / h),
                                        v = s["default"].getSilentFrame(e.channelCount);
                                    if (!v) return void c.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                                    for (var p = [], g = 0; d > g; g++) {
                                        var y = l + g * h;
                                        p.push({
                                            unit: v.slice(0),
                                            pts: y,
                                            dts: y
                                        }), e.len += v.length
                                    }
                                    e.samples = p, this.remuxAudio(e, t, n)
                                }
                            }, {
                                key: "remuxID3",
                                value: function(e, t) {
                                    var n, i = e.samples.length;
                                    if (i) {
                                        for (var r = 0; i > r; r++) n = e.samples[r], n.pts = (n.pts - this._initPTS) / this.PES_TIMESCALE, n.dts = (n.dts - this._initDTS) / this.PES_TIMESCALE;
                                        this.observer.trigger(u["default"].FRAG_PARSING_METADATA, {
                                            id: this.id,
                                            level: this.level,
                                            sn: this.sn,
                                            samples: e.samples
                                        })
                                    }
                                    e.samples = [], t = t
                                }
                            }, {
                                key: "remuxText",
                                value: function(e, t) {
                                    e.samples.sort(function(e, t) {
                                        return e.pts - t.pts
                                    });
                                    var n, i = e.samples.length;
                                    if (i) {
                                        for (var r = 0; i > r; r++) n = e.samples[r], n.pts = (n.pts - this._initPTS) / this.PES_TIMESCALE;
                                        this.observer.trigger(u["default"].FRAG_PARSING_USERDATA, {
                                            id: this.id,
                                            level: this.level,
                                            sn: this.sn,
                                            samples: e.samples
                                        })
                                    }
                                    e.samples = [], t = t
                                }
                            }, {
                                key: "_PTSNormalize",
                                value: function(e, t) {
                                    var n;
                                    if (void 0 === t) return e;
                                    for (n = e > t ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += n;
                                    return e
                                }
                            }, {
                                key: "passthrough",
                                get: function() {
                                    return !1
                                }
                            }]), e
                        }();
                        n["default"] = v
                    }, {
                        24: 24,
                        26: 26,
                        27: 27,
                        35: 35,
                        43: 43,
                        44: 44
                    }],
                    37: [function(e, t, n) {
                        "use strict";

                        function i(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }

                        function r(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var a = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            o = e(26),
                            s = i(o),
                            l = function() {
                                function e(t, n) {
                                    r(this, e), this.observer = t, this.id = n, this.ISGenerated = !1
                                }
                                return a(e, [{
                                    key: "destroy",
                                    value: function() {}
                                }, {
                                    key: "insertDiscontinuity",
                                    value: function() {}
                                }, {
                                    key: "switchLevel",
                                    value: function() {
                                        this.ISGenerated = !1
                                    }
                                }, {
                                    key: "remux",
                                    value: function(e, t, n, i, r, a) {
                                        var o = this.observer;
                                        if (!this.ISGenerated) {
                                            var l = {},
                                                u = {
                                                    id: this.id,
                                                    tracks: l,
                                                    unique: !0
                                                },
                                                c = t,
                                                f = c.codec;
                                            f && (u.tracks.video = {
                                                container: c.container,
                                                codec: f,
                                                metadata: {
                                                    width: c.width,
                                                    height: c.height
                                                }
                                            }), c = e, f = c.codec, f && (u.tracks.audio = {
                                                container: c.container,
                                                codec: f,
                                                metadata: {
                                                    channelCount: c.channelCount
                                                }
                                            }), this.ISGenerated = !0, o.trigger(s["default"].FRAG_PARSING_INIT_SEGMENT, u)
                                        }
                                        o.trigger(s["default"].FRAG_PARSING_DATA, {
                                            id: this.id,
                                            data1: a,
                                            startPTS: r,
                                            startDTS: r,
                                            type: "audiovideo",
                                            nb: 1,
                                            dropped: 0
                                        })
                                    }
                                }, {
                                    key: "passthrough",
                                    get: function() {
                                        return !0
                                    }
                                }]), e
                            }();
                        n["default"] = l
                    }, {
                        26: 26
                    }],
                    38: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = function() {
                                function e(t) {
                                    i(this, e), "string" == typeof t && (t = e.parseAttrList(t));
                                    for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
                                }
                                return r(e, [{
                                    key: "decimalInteger",
                                    value: function(e) {
                                        var t = parseInt(this[e], 10);
                                        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                                    }
                                }, {
                                    key: "hexadecimalInteger",
                                    value: function(e) {
                                        if (this[e]) {
                                            var t = (this[e] || "0x").slice(2);
                                            t = (1 & t.length ? "0" : "") + t;
                                            for (var n = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) n[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
                                            return n
                                        }
                                        return null
                                    }
                                }, {
                                    key: "hexadecimalIntegerAsNumber",
                                    value: function(e) {
                                        var t = parseInt(this[e], 16);
                                        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                                    }
                                }, {
                                    key: "decimalFloatingPoint",
                                    value: function(e) {
                                        return parseFloat(this[e])
                                    }
                                }, {
                                    key: "enumeratedString",
                                    value: function(e) {
                                        return this[e]
                                    }
                                }, {
                                    key: "decimalResolution",
                                    value: function(e) {
                                        var t = /^(\d+)x(\d+)$/.exec(this[e]);
                                        if (null !== t) return {
                                            width: parseInt(t[1], 10),
                                            height: parseInt(t[2], 10)
                                        }
                                    }
                                }], [{
                                    key: "parseAttrList",
                                    value: function(e) {
                                        for (var t, n = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, i = {}; null !== (t = n.exec(e));) {
                                            var r = t[2],
                                                a = '"';
                                            0 === r.indexOf(a) && r.lastIndexOf(a) === r.length - 1 && (r = r.slice(1, -1)), i[t[1]] = r
                                        }
                                        return i
                                    }
                                }]), e
                            }();
                        n["default"] = a
                    }, {}],
                    39: [function(e, t, n) {
                        "use strict";
                        var i = {
                            search: function(e, t) {
                                for (var n = 0, i = e.length - 1, r = null, a = null; i >= n;) {
                                    r = (n + i) / 2 | 0, a = e[r];
                                    var o = t(a);
                                    if (o > 0) n = r + 1;
                                    else {
                                        if (!(0 > o)) return a;
                                        i = r - 1
                                    }
                                }
                                return null
                            }
                        };
                        t.exports = i
                    }, {}],
                    40: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = {
                                42: 225,
                                92: 233,
                                94: 237,
                                95: 243,
                                96: 250,
                                123: 231,
                                124: 247,
                                125: 209,
                                126: 241,
                                127: 9608,
                                128: 174,
                                129: 176,
                                130: 189,
                                131: 191,
                                132: 8482,
                                133: 162,
                                134: 163,
                                135: 9834,
                                136: 224,
                                137: 32,
                                138: 232,
                                139: 226,
                                140: 234,
                                141: 238,
                                142: 244,
                                143: 251,
                                144: 193,
                                145: 201,
                                146: 211,
                                147: 218,
                                148: 220,
                                149: 252,
                                150: 8216,
                                151: 161,
                                152: 42,
                                153: 8217,
                                154: 9473,
                                155: 169,
                                156: 8480,
                                157: 8226,
                                158: 8220,
                                159: 8221,
                                160: 192,
                                161: 194,
                                162: 199,
                                163: 200,
                                164: 202,
                                165: 203,
                                166: 235,
                                167: 206,
                                168: 207,
                                169: 239,
                                170: 212,
                                171: 217,
                                172: 249,
                                173: 219,
                                174: 171,
                                175: 187,
                                176: 195,
                                177: 227,
                                178: 205,
                                179: 204,
                                180: 236,
                                181: 210,
                                182: 242,
                                183: 213,
                                184: 245,
                                185: 123,
                                186: 125,
                                187: 92,
                                188: 94,
                                189: 95,
                                190: 124,
                                191: 8764,
                                192: 196,
                                193: 228,
                                194: 214,
                                195: 246,
                                196: 223,
                                197: 165,
                                198: 164,
                                199: 9475,
                                200: 197,
                                201: 229,
                                202: 216,
                                203: 248,
                                204: 9487,
                                205: 9491,
                                206: 9495,
                                207: 9499
                            },
                            o = function(e) {
                                var t = e;
                                return a.hasOwnProperty(e) && (t = a[e]), String.fromCharCode(t)
                            },
                            s = 15,
                            l = 32,
                            u = {
                                17: 1,
                                18: 3,
                                21: 5,
                                22: 7,
                                23: 9,
                                16: 11,
                                19: 12,
                                20: 14
                            },
                            c = {
                                17: 2,
                                18: 4,
                                21: 6,
                                22: 8,
                                23: 10,
                                19: 13,
                                20: 15
                            },
                            f = {
                                25: 1,
                                26: 3,
                                29: 5,
                                30: 7,
                                31: 9,
                                24: 11,
                                27: 12,
                                28: 14
                            },
                            h = {
                                25: 2,
                                26: 4,
                                29: 6,
                                30: 8,
                                31: 10,
                                27: 13,
                                28: 15
                            },
                            d = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
                            v = {
                                verboseFilter: {
                                    DATA: 3,
                                    DEBUG: 3,
                                    INFO: 2,
                                    WARNING: 2,
                                    TEXT: 1,
                                    ERROR: 0
                                },
                                time: null,
                                verboseLevel: 0,
                                setTime: function(e) {
                                    this.time = e
                                },
                                log: function(e, t) {
                                    var n = this.verboseFilter[e];
                                    this.verboseLevel >= n && console.log(this.time + " [" + e + "] " + t)
                                }
                            },
                            p = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) t.push(e[n].toString(16));
                                return t
                            },
                            g = function() {
                                function e(t, n, r, a, o) {
                                    i(this, e), this.foreground = t || "white", this.underline = n || !1, this.italics = r || !1, this.background = a || "black", this.flash = o || !1
                                }
                                return r(e, [{
                                    key: "reset",
                                    value: function() {
                                        this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                                    }
                                }, {
                                    key: "setStyles",
                                    value: function(e) {
                                        for (var t = ["foreground", "underline", "italics", "background", "flash"], n = 0; n < t.length; n++) {
                                            var i = t[n];
                                            e.hasOwnProperty(i) && (this[i] = e[i])
                                        }
                                    }
                                }, {
                                    key: "isDefault",
                                    value: function() {
                                        return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                                    }
                                }, {
                                    key: "equals",
                                    value: function(e) {
                                        return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                                    }
                                }, {
                                    key: "copy",
                                    value: function(e) {
                                        this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
                                    }
                                }, {
                                    key: "toString",
                                    value: function() {
                                        return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                                    }
                                }]), e
                            }(),
                            y = function() {
                                function e(t, n, r, a, o, s) {
                                    i(this, e), this.uchar = t || " ", this.penState = new g(n, r, a, o, s)
                                }
                                return r(e, [{
                                    key: "reset",
                                    value: function() {
                                        this.uchar = " ", this.penState.reset()
                                    }
                                }, {
                                    key: "setChar",
                                    value: function(e, t) {
                                        this.uchar = e, this.penState.copy(t)
                                    }
                                }, {
                                    key: "setPenState",
                                    value: function(e) {
                                        this.penState.copy(e)
                                    }
                                }, {
                                    key: "equals",
                                    value: function(e) {
                                        return this.uchar === e.uchar && this.penState.equals(e.penState)
                                    }
                                }, {
                                    key: "copy",
                                    value: function(e) {
                                        this.uchar = e.uchar, this.penState.copy(e.penState)
                                    }
                                }, {
                                    key: "isEmpty",
                                    value: function() {
                                        return " " === this.uchar && this.penState.isDefault()
                                    }
                                }]), e
                            }(),
                            m = function() {
                                function e() {
                                    i(this, e), this.chars = [];
                                    for (var t = 0; l > t; t++) this.chars.push(new y);
                                    this.pos = 0, this.currPenState = new g
                                }
                                return r(e, [{
                                    key: "equals",
                                    value: function(e) {
                                        for (var t = !0, n = 0; l > n; n++)
                                            if (!this.chars[n].equals(e.chars[n])) {
                                                t = !1;
                                                break
                                            }
                                        return t
                                    }
                                }, {
                                    key: "copy",
                                    value: function(e) {
                                        for (var t = 0; l > t; t++) this.chars[t].copy(e.chars[t])
                                    }
                                }, {
                                    key: "isEmpty",
                                    value: function() {
                                        for (var e = !0, t = 0; l > t; t++)
                                            if (!this.chars[t].isEmpty()) {
                                                e = !1;
                                                break
                                            }
                                        return e
                                    }
                                }, {
                                    key: "setCursor",
                                    value: function(e) {
                                        this.pos !== e && (this.pos = e), this.pos < 0 ? (v.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > l && (v.log("ERROR", "Too large cursor position " + this.pos), this.pos = l)
                                    }
                                }, {
                                    key: "moveCursor",
                                    value: function(e) {
                                        var t = this.pos + e;
                                        if (e > 1)
                                            for (var n = this.pos + 1; t + 1 > n; n++) this.chars[n].setPenState(this.currPenState);
                                        this.setCursor(t)
                                    }
                                }, {
                                    key: "backSpace",
                                    value: function() {
                                        this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                                    }
                                }, {
                                    key: "insertChar",
                                    value: function(e) {
                                        e >= 144 && this.backSpace();
                                        var t = o(e);
                                        return this.pos >= l ? void v.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), void this.moveCursor(1))
                                    }
                                }, {
                                    key: "clearFromPos",
                                    value: function(e) {
                                        var t;
                                        for (t = e; l > t; t++) this.chars[t].reset()
                                    }
                                }, {
                                    key: "clear",
                                    value: function() {
                                        this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                                    }
                                }, {
                                    key: "clearToEndOfRow",
                                    value: function() {
                                        this.clearFromPos(this.pos)
                                    }
                                }, {
                                    key: "getTextString",
                                    value: function() {
                                        for (var e = [], t = !0, n = 0; l > n; n++) {
                                            var i = this.chars[n].uchar;
                                            " " !== i && (t = !1), e.push(i)
                                        }
                                        return t ? "" : e.join("")
                                    }
                                }, {
                                    key: "setPenStyles",
                                    value: function(e) {
                                        this.currPenState.setStyles(e);
                                        var t = this.chars[this.pos];
                                        t.setPenState(this.currPenState)
                                    }
                                }]), e
                            }(),
                            E = function() {
                                function e() {
                                    i(this, e), this.rows = [];
                                    for (var t = 0; s > t; t++) this.rows.push(new m);
                                    this.currRow = s - 1, this.nrRollUpRows = null, this.reset()
                                }
                                return r(e, [{
                                    key: "reset",
                                    value: function() {
                                        for (var e = 0; s > e; e++) this.rows[e].clear();
                                        this.currRow = s - 1
                                    }
                                }, {
                                    key: "equals",
                                    value: function(e) {
                                        for (var t = !0, n = 0; s > n; n++)
                                            if (!this.rows[n].equals(e.rows[n])) {
                                                t = !1;
                                                break
                                            }
                                        return t
                                    }
                                }, {
                                    key: "copy",
                                    value: function(e) {
                                        for (var t = 0; s > t; t++) this.rows[t].copy(e.rows[t])
                                    }
                                }, {
                                    key: "isEmpty",
                                    value: function() {
                                        for (var e = !0, t = 0; s > t; t++)
                                            if (!this.rows[t].isEmpty()) {
                                                e = !1;
                                                break
                                            }
                                        return e
                                    }
                                }, {
                                    key: "backSpace",
                                    value: function() {
                                        var e = this.rows[this.currRow];
                                        e.backSpace()
                                    }
                                }, {
                                    key: "clearToEndOfRow",
                                    value: function() {
                                        var e = this.rows[this.currRow];
                                        e.clearToEndOfRow()
                                    }
                                }, {
                                    key: "insertChar",
                                    value: function(e) {
                                        var t = this.rows[this.currRow];
                                        t.insertChar(e)
                                    }
                                }, {
                                    key: "setPen",
                                    value: function(e) {
                                        var t = this.rows[this.currRow];
                                        t.setPenStyles(e)
                                    }
                                }, {
                                    key: "moveCursor",
                                    value: function(e) {
                                        var t = this.rows[this.currRow];
                                        t.moveCursor(e)
                                    }
                                }, {
                                    key: "setCursor",
                                    value: function(e) {
                                        v.log("INFO", "setCursor: " + e);
                                        var t = this.rows[this.currRow];
                                        t.setCursor(e)
                                    }
                                }, {
                                    key: "setPAC",
                                    value: function(e) {
                                        v.log("INFO", "pacData = " + JSON.stringify(e));
                                        var t = e.row - 1;
                                        this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.currRow = t;
                                        var n = this.rows[this.currRow];
                                        if (null !== e.indent) {
                                            var i = e.indent,
                                                r = Math.max(i - 1, 0);
                                            n.setCursor(e.indent), e.color = n.chars[r].penState.foreground
                                        }
                                        var a = {
                                            foreground: e.color,
                                            underline: e.underline,
                                            italics: e.italics,
                                            background: "black",
                                            flash: !1
                                        };
                                        this.setPen(a)
                                    }
                                }, {
                                    key: "setBkgData",
                                    value: function(e) {
                                        v.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
                                    }
                                }, {
                                    key: "setRollUpRows",
                                    value: function(e) {
                                        this.nrRollUpRows = e
                                    }
                                }, {
                                    key: "rollUp",
                                    value: function() {
                                        if (null === this.nrRollUpRows) return void v.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                                        v.log("TEXT", this.getDisplayText());
                                        var e = this.currRow + 1 - this.nrRollUpRows,
                                            t = this.rows.splice(e, 1)[0];
                                        t.clear(), this.rows.splice(this.currRow, 0, t), v.log("INFO", "Rolling up")
                                    }
                                }, {
                                    key: "getDisplayText",
                                    value: function(e) {
                                        e = e || !1;
                                        for (var t = [], n = "", i = -1, r = 0; s > r; r++) {
                                            var a = this.rows[r].getTextString();
                                            a && (i = r + 1, e ? t.push("Row " + i + ": '" + a + "'") : t.push(a.trim()))
                                        }
                                        return t.length > 0 && (n = e ? "[" + t.join(" | ") + "]" : t.join("\n")), n
                                    }
                                }, {
                                    key: "getTextAndFormat",
                                    value: function() {
                                        return this.rows
                                    }
                                }]), e
                            }(),
                            b = function() {
                                function e(t, n) {
                                    i(this, e), this.chNr = t, this.outputFilter = n, this.mode = null, this.verbose = 0, this.displayedMemory = new E, this.nonDisplayedMemory = new E, this.lastOutputScreen = new E, this.currRollUpRow = this.displayedMemory.rows[s - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                                }
                                return r(e, [{
                                    key: "reset",
                                    value: function() {
                                        this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[s - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                                    }
                                }, {
                                    key: "getHandler",
                                    value: function() {
                                        return this.outputFilter
                                    }
                                }, {
                                    key: "setHandler",
                                    value: function(e) {
                                        this.outputFilter = e
                                    }
                                }, {
                                    key: "setPAC",
                                    value: function(e) {
                                        this.writeScreen.setPAC(e)
                                    }
                                }, {
                                    key: "setBkgData",
                                    value: function(e) {
                                        this.writeScreen.setBkgData(e)
                                    }
                                }, {
                                    key: "setMode",
                                    value: function(e) {
                                        e !== this.mode && (this.mode = e, v.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
                                    }
                                }, {
                                    key: "insertChars",
                                    value: function(e) {
                                        for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
                                        var n = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                                        v.log("INFO", n + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (v.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                                    }
                                }, {
                                    key: "ccRCL",
                                    value: function() {
                                        v.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                                    }
                                }, {
                                    key: "ccBS",
                                    value: function() {
                                        v.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                                    }
                                }, {
                                    key: "ccAOF",
                                    value: function() {}
                                }, {
                                    key: "ccAON",
                                    value: function() {}
                                }, {
                                    key: "ccDER",
                                    value: function() {
                                        v.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                                    }
                                }, {
                                    key: "ccRU",
                                    value: function(e) {
                                        v.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
                                    }
                                }, {
                                    key: "ccFON",
                                    value: function() {
                                        v.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
                                            flash: !0
                                        })
                                    }
                                }, {
                                    key: "ccRDC",
                                    value: function() {
                                        v.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                                    }
                                }, {
                                    key: "ccTR",
                                    value: function() {
                                        v.log("INFO", "TR"), this.setMode("MODE_TEXT")
                                    }
                                }, {
                                    key: "ccRTD",
                                    value: function() {
                                        v.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                                    }
                                }, {
                                    key: "ccEDM",
                                    value: function() {
                                        v.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate()
                                    }
                                }, {
                                    key: "ccCR",
                                    value: function() {
                                        v.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate()
                                    }
                                }, {
                                    key: "ccENM",
                                    value: function() {
                                        v.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                                    }
                                }, {
                                    key: "ccEOC",
                                    value: function() {
                                        if (v.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                            var e = this.displayedMemory;
                                            this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, v.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                                        }
                                        this.outputDataUpdate()
                                    }
                                }, {
                                    key: "ccTO",
                                    value: function(e) {
                                        v.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
                                    }
                                }, {
                                    key: "ccMIDROW",
                                    value: function(e) {
                                        var t = {
                                            flash: !1
                                        };
                                        if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics) t.foreground = "white";
                                        else {
                                            var n = Math.floor(e / 2) - 16,
                                                i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                                            t.foreground = i[n]
                                        }
                                        v.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                                    }
                                }, {
                                    key: "outputDataUpdate",
                                    value: function() {
                                        var e = v.time;
                                        null !== e && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(e, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                                    }
                                }, {
                                    key: "cueSplitAtTime",
                                    value: function(e) {
                                        this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
                                    }
                                }]), e
                            }(),
                            k = function() {
                                function e(t, n, r) {
                                    i(this, e), this.field = t || 1, this.outputs = [n, r], this.channels = [new b(1, n), new b(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                                        padding: 0,
                                        "char": 0,
                                        cmd: 0,
                                        other: 0
                                    }
                                }
                                return r(e, [{
                                    key: "getHandler",
                                    value: function(e) {
                                        return this.channels[e].getHandler()
                                    }
                                }, {
                                    key: "setHandler",
                                    value: function(e, t) {
                                        this.channels[e].setHandler(t)
                                    }
                                }, {
                                    key: "addData",
                                    value: function(e, t) {
                                        var n, i, r, a = !1;
                                        this.lastTime = e, v.setTime(e);
                                        for (var o = 0; o < t.length; o += 2)
                                            if (i = 127 & t[o], r = 127 & t[o + 1], 0 !== i || 0 !== r) {
                                                if (v.log("DATA", "[" + p([t[o], t[o + 1]]) + "] -> (" + p([i, r]) + ")"), n = this.parseCmd(i, r), n || (n = this.parseMidrow(i, r)), n || (n = this.parsePAC(i, r)), n || (n = this.parseBackgroundAttributes(i, r)), !n && (a = this.parseChars(i, r)))
                                                    if (this.currChNr && this.currChNr >= 0) {
                                                        var s = this.channels[this.currChNr - 1];
                                                        s.insertChars(a)
                                                    } else v.log("WARNING", "No channel found yet. TEXT-MODE?");
                                                n ? this.dataCounters.cmd += 2 : a ? this.dataCounters["char"] += 2 : (this.dataCounters.other += 2, v.log("WARNING", "Couldn't parse cleaned data " + p([i, r]) + " orig: " + p([t[o], t[o + 1]])))
                                            } else this.dataCounters.padding += 2
                                    }
                                }, {
                                    key: "parseCmd",
                                    value: function(e, t) {
                                        var n = null,
                                            i = (20 === e || 28 === e) && t >= 32 && 47 >= t,
                                            r = (23 === e || 31 === e) && t >= 33 && 35 >= t;
                                        if (!i && !r) return !1;
                                        if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, v.log("DEBUG", "Repeated command (" + p([e, t]) + ") is dropped"), !0;
                                        n = 20 === e || 23 === e ? 1 : 2;
                                        var a = this.channels[n - 1];
                                        return 20 === e || 28 === e ? 32 === t ? a.ccRCL() : 33 === t ? a.ccBS() : 34 === t ? a.ccAOF() : 35 === t ? a.ccAON() : 36 === t ? a.ccDER() : 37 === t ? a.ccRU(2) : 38 === t ? a.ccRU(3) : 39 === t ? a.ccRU(4) : 40 === t ? a.ccFON() : 41 === t ? a.ccRDC() : 42 === t ? a.ccTR() : 43 === t ? a.ccRTD() : 44 === t ? a.ccEDM() : 45 === t ? a.ccCR() : 46 === t ? a.ccENM() : 47 === t && a.ccEOC() : a.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = n, !0
                                    }
                                }, {
                                    key: "parseMidrow",
                                    value: function(e, t) {
                                        var n = null;
                                        if ((17 === e || 25 === e) && t >= 32 && 47 >= t) {
                                            if (n = 17 === e ? 1 : 2, n !== this.currChNr) return v.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                                            var i = this.channels[n - 1];
                                            return i.ccMIDROW(t), v.log("DEBUG", "MIDROW (" + p([e, t]) + ")"), !0
                                        }
                                        return !1
                                    }
                                }, {
                                    key: "parsePAC",
                                    value: function(e, t) {
                                        var n = null,
                                            i = null,
                                            r = (e >= 17 && 23 >= e || e >= 25 && 31 >= e) && t >= 64 && 127 >= t,
                                            a = (16 === e || 24 === e) && t >= 64 && 95 >= t;
                                        if (!r && !a) return !1;
                                        if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                                        n = 23 >= e ? 1 : 2, i = t >= 64 && 95 >= t ? 1 === n ? u[e] : f[e] : 1 === n ? c[e] : h[e];
                                        var o = this.interpretPAC(i, t),
                                            s = this.channels[n - 1];
                                        return s.setPAC(o), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = n, !0
                                    }
                                }, {
                                    key: "interpretPAC",
                                    value: function(e, t) {
                                        var n = t,
                                            i = {
                                                color: null,
                                                italics: !1,
                                                indent: null,
                                                underline: !1,
                                                row: e
                                            };
                                        return n = t > 95 ? t - 96 : t - 64, i.underline = 1 === (1 & n), 13 >= n ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(n / 2)] : 15 >= n ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((n - 16) / 2), i
                                    }
                                }, {
                                    key: "parseChars",
                                    value: function(e, t) {
                                        var n = null,
                                            i = null,
                                            r = null;
                                        if (e >= 25 ? (n = 2, r = e - 8) : (n = 1, r = e), r >= 17 && 19 >= r) {
                                            var a = t;
                                            a = 17 === r ? t + 80 : 18 === r ? t + 112 : t + 144, v.log("INFO", "Special char '" + o(a) + "' in channel " + n), i = [a]
                                        } else e >= 32 && 127 >= e && (i = 0 === t ? [e] : [e, t]);
                                        if (i) {
                                            var s = p(i);
                                            v.log("DEBUG", "Char codes =  " + s.join(",")), this.lastCmdA = null, this.lastCmdB = null
                                        }
                                        return i
                                    }
                                }, {
                                    key: "parseBackgroundAttributes",
                                    value: function(e, t) {
                                        var n, i, r, a, o = (16 === e || 24 === e) && t >= 32 && 47 >= t,
                                            s = (23 === e || 31 === e) && t >= 45 && 47 >= t;
                                        return o || s ? (n = {}, 16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), n.background = d[i], t % 2 === 1 && (n.background = n.background + "_semi")) : 45 === t ? n.background = "transparent" : (n.foreground = "black", 47 === t && (n.underline = !0)), r = 24 > e ? 1 : 2, a = this.channels[r - 1], a.setBkgData(n), this.lastCmdA = null, this.lastCmdB = null, !0) : !1
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
                                        this.lastCmdA = null, this.lastCmdB = null
                                    }
                                }, {
                                    key: "cueSplitAtTime",
                                    value: function(e) {
                                        for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
                                    }
                                }]), e
                            }();
                        n["default"] = k
                    }, {}],
                    41: [function(e, t, n) {
                        "use strict";
                        var i = {
                            newCue: function(e, t, n, i) {
                                for (var r, a, o, s, l, u = window.VTTCue || window.TextTrackCue, c = 0; c < i.rows.length; c++)
                                    if (r = i.rows[c], o = !0, s = 0, l = "", !r.isEmpty()) {
                                        for (var f = 0; f < r.chars.length; f++) r.chars[f].uchar.match(/\s/) && o ? s++ : (l += r.chars[f].uchar, o = !1);
                                        a = new u(t, n, l.trim()), s >= 16 ? s-- : s++, navigator.userAgent.match(/Firefox\//) ? a.line = c + 1 : a.line = c > 7 ? c - 2 : c + 1, a.align = "left", a.position = 100 * (s / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0), e.addCue(a)
                                    }
                            }
                        };
                        t.exports = i
                    }, {}],
                    42: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = function() {
                                function e(t) {
                                    i(this, e), this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                                }
                                return r(e, [{
                                    key: "sample",
                                    value: function(e, t) {
                                        var n = Math.pow(this.alpha_, e);
                                        this.estimate_ = t * (1 - n) + n * this.estimate_, this.totalWeight_ += e
                                    }
                                }, {
                                    key: "getTotalWeight",
                                    value: function() {
                                        return this.totalWeight_
                                    }
                                }, {
                                    key: "getEstimate",
                                    value: function() {
                                        if (this.alpha_) {
                                            var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                            return this.estimate_ / e
                                        }
                                        return this.estimate_
                                    }
                                }]), e
                            }();
                        n["default"] = a
                    }, {}],
                    43: [function(e, t, n) {
                        "use strict";

                        function i() {}

                        function r(e, t) {
                            return t = "[" + e + "] > " + t
                        }

                        function a(e) {
                            var t = self.console[e];
                            return t ? function() {
                                for (var n = arguments.length, i = Array(n), a = 0; n > a; a++) i[a] = arguments[a];
                                i[0] && (i[0] = r(e, i[0])), t.apply(self.console, i)
                            } : i
                        }

                        function o(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                            n.forEach(function(t) {
                                u[t] = e[t] ? e[t].bind(e) : a(t)
                            })
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                            },
                            l = {
                                trace: i,
                                debug: i,
                                log: i,
                                warn: i,
                                info: i,
                                error: i
                            },
                            u = l;
                        n.enableLogs = function(e) {
                            if (e === !0 || "object" === ("undefined" == typeof e ? "undefined" : s(e))) {
                                o(e, "debug", "log", "info", "warn", "error");
                                try {
                                    u.log()
                                } catch (t) {
                                    u = l
                                }
                            } else u = l
                        }, n.logger = u
                    }, {}],
                    44: [function(e, t, n) {
                        "use strict";
                        "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function(e, t) {
                            var n = new Uint8Array(this);
                            void 0 === t && (t = n.length);
                            for (var i = new ArrayBuffer(t - e), r = new Uint8Array(i), a = 0; a < r.length; a++) r[a] = n[a + e];
                            return i
                        })
                    }, {}],
                    45: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = function() {
                                function e() {
                                    i(this, e)
                                }
                                return r(e, null, [{
                                    key: "toString",
                                    value: function(e) {
                                        for (var t = "", n = e.length, i = 0; n > i; i++) t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]";
                                        return t
                                    }
                                }]), e
                            }();
                        n["default"] = a
                    }, {}],
                    46: [function(e, t, n) {
                        "use strict";
                        var i = {
                            buildAbsoluteURL: function(e, t) {
                                if (t = t.trim(), /^[a-z]+:/i.test(t)) return t;
                                var n = null,
                                    r = null,
                                    a = /^([^#]*)(.*)$/.exec(t);
                                a && (r = a[2], t = a[1]);
                                var o = /^([^\?]*)(.*)$/.exec(t);
                                o && (n = o[2], t = o[1]);
                                var s = /^([^#]*)(.*)$/.exec(e);
                                s && (e = s[1]);
                                var l = /^([^\?]*)(.*)$/.exec(e);
                                l && (e = l[1]);
                                var u = /^(([a-z]+:)?\/\/[a-z0-9\.\-_~]+(:[0-9]+)?)?(\/.*)$/i.exec(e);
                                if (!u) throw new Error("Error trying to parse base URL.");
                                var c = u[2] || "",
                                    f = u[1] || "",
                                    h = u[4],
                                    d = null;
                                return d = /^\/\//.test(t) ? c + "//" + i.buildAbsolutePath("", t.substring(2)) : /^\//.test(t) ? f + "/" + i.buildAbsolutePath("", t.substring(1)) : i.buildAbsolutePath(f + h, t), n && (d += n), r && (d += r), d
                            },
                            buildAbsolutePath: function(e, t) {
                                for (var n, i, r = t, a = "", o = e.replace(/[^\/]*$/, r.replace(/(\/|^)(?:\.?\/+)+/g, "$1")), s = 0; i = o.indexOf("/../", s), i > -1; s = i + n) n = /^\/(?:\.\.\/)*/.exec(o.slice(i))[0].length, a = (a + o.substring(s, i)).replace(new RegExp("(?:\\/+[^\\/]*){0," + (n - 1) / 3 + "}$"), "/");
                                return a + o.substr(s)
                            }
                        };
                        t.exports = i
                    }, {}],
                    47: [function(e, t, n) {
                        "use strict";

                        function i(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                    }
                                }
                                return function(t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t
                                }
                            }(),
                            a = e(43),
                            o = function() {
                                function e(t) {
                                    i(this, e), t && t.xhrSetup && (this.xhrSetup = t.xhrSetup)
                                }
                                return r(e, [{
                                    key: "destroy",
                                    value: function() {
                                        this.abort(), this.loader = null
                                    }
                                }, {
                                    key: "abort",
                                    value: function() {
                                        var e = this.loader;
                                        e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                                    }
                                }, {
                                    key: "load",
                                    value: function(e, t, n) {
                                        this.context = e, this.config = t, this.callbacks = n, this.stats = {
                                            trequest: performance.now(),
                                            retry: 0
                                        }, this.retryDelay = t.retryDelay, this.loadInternal()
                                    }
                                }, {
                                    key: "loadInternal",
                                    value: function() {
                                        var e, t = this.context;
                                        e = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest : this.loader = new XMLHttpRequest, e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.open("GET", t.url, !0), t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.responseType = t.responseType;
                                        var n = this.stats;
                                        n.tfirst = 0, n.loaded = 0, this.xhrSetup && this.xhrSetup(e, t.url), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
                                    }
                                }, {
                                    key: "readystatechange",
                                    value: function(e) {
                                        var t = e.currentTarget,
                                            n = t.readyState,
                                            i = this.stats,
                                            r = this.context,
                                            o = this.config;
                                        if (!i.aborted && (window.clearTimeout(this.requestTimeout), n >= 2 && (0 === i.tfirst && (i.tfirst = Math.max(performance.now(), i.trequest), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), o.timeout - (i.tfirst - i.trequest))), 4 === n))) {
                                            var s = t.status;
                                            if (s >= 200 && 300 > s) {
                                                i.tload = Math.max(i.tfirst, performance.now());
                                                var l = void 0,
                                                    u = void 0;
                                                "arraybuffer" === r.responseType ? (l = t.response, u = l.byteLength) : (l = t.responseText, u = l.length), i.loaded = i.total = u;
                                                var c = {
                                                    url: t.responseURL,
                                                    data: l
                                                };
                                                this.callbacks.onSuccess(c, i, r)
                                            } else i.retry >= o.maxRetry || s >= 400 && 499 > s ? (a.logger.error(s + " while loading " + r.url), this.callbacks.onError({
                                                code: s,
                                                text: t.statusText
                                            }, r)) : (a.logger.warn(s + " while loading " + r.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, o.maxRetryDelay), i.retry++)
                                        }
                                    }
                                }, {
                                    key: "loadtimeout",
                                    value: function() {
                                        a.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context)
                                    }
                                }, {
                                    key: "loadprogress",
                                    value: function(e) {
                                        var t = this.stats;
                                        t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
                                        var n = this.callbacks.onProgress;
                                        n && n(t, this.context, null)
                                    }
                                }]), e
                            }();
                        n["default"] = o
                    }, {
                        43: 43
                    }]
                }, {}, [31])(31)
            })
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(109)
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(7), n(9), n(8), n(2))
            }(void 0, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.BlockCipher,
                        r = t.algo,
                        a = [],
                        o = [],
                        s = [],
                        l = [],
                        u = [],
                        c = [],
                        f = [],
                        h = [],
                        d = [],
                        v = [];
                    ! function() {
                        for (var e = [], t = 0; 256 > t; t++) 128 > t ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
                        for (var n = 0, i = 0, t = 0; 256 > t; t++) {
                            var r = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                            r = r >>> 8 ^ 255 & r ^ 99, a[n] = r, o[r] = n;
                            var p = e[n],
                                g = e[p],
                                y = e[g],
                                m = 257 * e[r] ^ 16843008 * r;
                            s[n] = m << 24 | m >>> 8, l[n] = m << 16 | m >>> 16, u[n] = m << 8 | m >>> 24, c[n] = m;
                            var m = 16843009 * y ^ 65537 * g ^ 257 * p ^ 16843008 * n;
                            f[r] = m << 24 | m >>> 8, h[r] = m << 16 | m >>> 16, d[r] = m << 8 | m >>> 24, v[r] = m, n ? (n = p ^ e[e[e[y ^ p]]], i ^= e[e[i]]) : n = i = 1
                        }
                    }();
                    var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                        g = r.AES = i.extend({
                            _doReset: function() {
                                for (var e = this._key, t = e.words, n = e.sigBytes / 4, i = this._nRounds = n + 6, r = 4 * (i + 1), o = this._keySchedule = [], s = 0; r > s; s++)
                                    if (n > s) o[s] = t[s];
                                    else {
                                        var l = o[s - 1];
                                        s % n ? n > 6 && s % n == 4 && (l = a[l >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & l]) : (l = l << 8 | l >>> 24, l = a[l >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & l], l ^= p[s / n | 0] << 24), o[s] = o[s - n] ^ l
                                    }
                                for (var u = this._invKeySchedule = [], c = 0; r > c; c++) {
                                    var s = r - c;
                                    if (c % 4) var l = o[s];
                                    else var l = o[s - 4];
                                    4 > c || 4 >= s ? u[c] = l : u[c] = f[a[l >>> 24]] ^ h[a[l >>> 16 & 255]] ^ d[a[l >>> 8 & 255]] ^ v[a[255 & l]]
                                }
                            },
                            encryptBlock: function(e, t) {
                                this._doCryptBlock(e, t, this._keySchedule, s, l, u, c, a)
                            },
                            decryptBlock: function(e, t) {
                                var n = e[t + 1];
                                e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, f, h, d, v, o);
                                var n = e[t + 1];
                                e[t + 1] = e[t + 3], e[t + 3] = n
                            },
                            _doCryptBlock: function(e, t, n, i, r, a, o, s) {
                                for (var l = this._nRounds, u = e[t] ^ n[0], c = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], h = e[t + 3] ^ n[3], d = 4, v = 1; l > v; v++) {
                                    var p = i[u >>> 24] ^ r[c >>> 16 & 255] ^ a[f >>> 8 & 255] ^ o[255 & h] ^ n[d++],
                                        g = i[c >>> 24] ^ r[f >>> 16 & 255] ^ a[h >>> 8 & 255] ^ o[255 & u] ^ n[d++],
                                        y = i[f >>> 24] ^ r[h >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & c] ^ n[d++],
                                        m = i[h >>> 24] ^ r[u >>> 16 & 255] ^ a[c >>> 8 & 255] ^ o[255 & f] ^ n[d++];
                                    u = p, c = g, f = y, h = m
                                }
                                var p = (s[u >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & h]) ^ n[d++],
                                    g = (s[c >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & u]) ^ n[d++],
                                    y = (s[f >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & c]) ^ n[d++],
                                    m = (s[h >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & f]) ^ n[d++];
                                e[t] = p, e[t + 1] = g, e[t + 2] = y, e[t + 3] = m
                            },
                            keySize: 8
                        });
                    t.AES = i._createHelper(g)
                }(), e.AES
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function() {
                    function t(e) {
                        return e << 8 & 4278255360 | e >>> 8 & 16711935
                    }
                    var n = e,
                        i = n.lib,
                        r = i.WordArray,
                        a = n.enc;
                    a.Utf16 = a.Utf16BE = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, i = [], r = 0; n > r; r += 2) {
                                var a = t[r >>> 2] >>> 16 - r % 4 * 8 & 65535;
                                i.push(String.fromCharCode(a))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], i = 0; t > i; i++) n[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
                            return r.create(n, 2 * t)
                        }
                    };
                    a.Utf16LE = {
                        stringify: function(e) {
                            for (var n = e.words, i = e.sigBytes, r = [], a = 0; i > a; a += 2) {
                                var o = t(n[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
                                r.push(String.fromCharCode(o))
                            }
                            return r.join("")
                        },
                        parse: function(e) {
                            for (var n = e.length, i = [], a = 0; n > a; a++) i[a >>> 1] |= t(e.charCodeAt(a) << 16 - a % 2 * 16);
                            return r.create(i, 2 * n)
                        }
                    }
                }(), e.enc.Utf16
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return function(t) {
                    var n = e,
                        i = n.lib,
                        r = i.CipherParams,
                        a = n.enc,
                        o = a.Hex,
                        s = n.format;
                    s.Hex = {
                        stringify: function(e) {
                            return e.ciphertext.toString(o)
                        },
                        parse: function(e) {
                            var t = o.parse(e);
                            return r.create({
                                ciphertext: t
                            })
                        }
                    }
                }(), e.format.Hex
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(14), n(35), n(32), n(7), n(9), n(20), n(24), n(51), n(25), n(53), n(52), n(50), n(19), n(46), n(8), n(2), n(36), n(38), n(37), n(40), n(39), n(41), n(42), n(43), n(45), n(44), n(33), n(31), n(54), n(49), n(48), n(47))
            }(void 0, function(e) {
                return e
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function() {
                    if ("function" == typeof ArrayBuffer) {
                        var t = e,
                            n = t.lib,
                            i = n.WordArray,
                            r = i.init,
                            a = i.init = function(e) {
                                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
                                    for (var t = e.byteLength, n = [], i = 0; t > i; i++) n[i >>> 2] |= e[i] << 24 - i % 4 * 8;
                                    r.call(this, n, t)
                                } else r.apply(this, arguments)
                            };
                        a.prototype = i
                    }
                }(), e.lib.WordArray
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.mode.CFB = function() {
                    function t(e, t, n, i) {
                        var r = this._iv;
                        if (r) {
                            var a = r.slice(0);
                            this._iv = void 0
                        } else var a = this._prevBlock;
                        i.encryptBlock(a, 0);
                        for (var o = 0; n > o; o++) e[t + o] ^= a[o]
                    }
                    var n = e.lib.BlockCipherMode.extend();
                    return n.Encryptor = n.extend({
                        processBlock: function(e, n) {
                            var i = this._cipher,
                                r = i.blockSize;
                            t.call(this, e, n, r, i), this._prevBlock = e.slice(n, n + r)
                        }
                    }), n.Decryptor = n.extend({
                        processBlock: function(e, n) {
                            var i = this._cipher,
                                r = i.blockSize,
                                a = e.slice(n, n + r);
                            t.call(this, e, n, r, i), this._prevBlock = a
                        }
                    }), n
                }(), e.mode.CFB
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.mode.CTRGladman = function() {
                    function t(e) {
                        if (255 === (e >> 24 & 255)) {
                            var t = e >> 16 & 255,
                                n = e >> 8 & 255,
                                i = 255 & e;
                            255 === t ? (t = 0, 255 === n ? (n = 0, 255 === i ? i = 0 : ++i) : ++n) : ++t, e = 0, e += t << 16, e += n << 8, e += i
                        } else e += 1 << 24;
                        return e
                    }

                    function n(e) {
                        return 0 === (e[0] = t(e[0])) && (e[1] = t(e[1])), e
                    }
                    var i = e.lib.BlockCipherMode.extend(),
                        r = i.Encryptor = i.extend({
                            processBlock: function(e, t) {
                                var i = this._cipher,
                                    r = i.blockSize,
                                    a = this._iv,
                                    o = this._counter;
                                a && (o = this._counter = a.slice(0), this._iv = void 0), n(o);
                                var s = o.slice(0);
                                i.encryptBlock(s, 0);
                                for (var l = 0; r > l; l++) e[t + l] ^= s[l]
                            }
                        });
                    return i.Decryptor = r, i
                }(), e.mode.CTRGladman
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.mode.CTR = function() {
                    var t = e.lib.BlockCipherMode.extend(),
                        n = t.Encryptor = t.extend({
                            processBlock: function(e, t) {
                                var n = this._cipher,
                                    i = n.blockSize,
                                    r = this._iv,
                                    a = this._counter;
                                r && (a = this._counter = r.slice(0), this._iv = void 0);
                                var o = a.slice(0);
                                n.encryptBlock(o, 0), a[i - 1] = a[i - 1] + 1 | 0;
                                for (var s = 0; i > s; s++) e[t + s] ^= o[s]
                            }
                        });
                    return t.Decryptor = n, t
                }(), e.mode.CTR
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.mode.ECB = function() {
                    var t = e.lib.BlockCipherMode.extend();
                    return t.Encryptor = t.extend({
                        processBlock: function(e, t) {
                            this._cipher.encryptBlock(e, t)
                        }
                    }), t.Decryptor = t.extend({
                        processBlock: function(e, t) {
                            this._cipher.decryptBlock(e, t)
                        }
                    }), t
                }(), e.mode.ECB
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.mode.OFB = function() {
                    var t = e.lib.BlockCipherMode.extend(),
                        n = t.Encryptor = t.extend({
                            processBlock: function(e, t) {
                                var n = this._cipher,
                                    i = n.blockSize,
                                    r = this._iv,
                                    a = this._keystream;
                                r && (a = this._keystream = r.slice(0), this._iv = void 0), n.encryptBlock(a, 0);
                                for (var o = 0; i > o; o++) e[t + o] ^= a[o]
                            }
                        });
                    return t.Decryptor = n, t
                }(), e.mode.OFB
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.pad.AnsiX923 = {
                    pad: function(e, t) {
                        var n = e.sigBytes,
                            i = 4 * t,
                            r = i - n % i,
                            a = n + r - 1;
                        e.clamp(), e.words[a >>> 2] |= r << 24 - a % 4 * 8, e.sigBytes += r
                    },
                    unpad: function(e) {
                        var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                        e.sigBytes -= t
                    }
                }, e.pad.Ansix923
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.pad.Iso10126 = {
                    pad: function(t, n) {
                        var i = 4 * n,
                            r = i - t.sigBytes % i;
                        t.concat(e.lib.WordArray.random(r - 1)).concat(e.lib.WordArray.create([r << 24], 1))
                    },
                    unpad: function(e) {
                        var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                        e.sigBytes -= t
                    }
                }, e.pad.Iso10126
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.pad.Iso97971 = {
                    pad: function(t, n) {
                        t.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(t, n)
                    },
                    unpad: function(t) {
                        e.pad.ZeroPadding.unpad(t), t.sigBytes--
                    }
                }, e.pad.Iso97971
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.pad.NoPadding = {
                    pad: function() {},
                    unpad: function() {}
                }, e.pad.NoPadding
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(2))
            }(void 0, function(e) {
                return e.pad.ZeroPadding = {
                    pad: function(e, t) {
                        var n = 4 * t;
                        e.clamp(), e.sigBytes += n - (e.sigBytes % n || n)
                    },
                    unpad: function(e) {
                        for (var t = e.words, n = e.sigBytes - 1; !(t[n >>> 2] >>> 24 - n % 4 * 8 & 255);) n--;
                        e.sigBytes = n + 1
                    }
                }, e.pad.ZeroPadding
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(20), n(19))
            }(void 0, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.Base,
                        r = n.WordArray,
                        a = t.algo,
                        o = a.SHA1,
                        s = a.HMAC,
                        l = a.PBKDF2 = i.extend({
                            cfg: i.extend({
                                keySize: 4,
                                hasher: o,
                                iterations: 1
                            }),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e)
                            },
                            compute: function(e, t) {
                                for (var n = this.cfg, i = s.create(n.hasher, e), a = r.create(), o = r.create([1]), l = a.words, u = o.words, c = n.keySize, f = n.iterations; l.length < c;) {
                                    var h = i.update(t).finalize(o);
                                    i.reset();
                                    for (var d = h.words, v = d.length, p = h, g = 1; f > g; g++) {
                                        p = i.finalize(p), i.reset();
                                        for (var y = p.words, m = 0; v > m; m++) d[m] ^= y[m]
                                    }
                                    a.concat(h), u[0]++
                                }
                                return a.sigBytes = 4 * c, a
                            }
                        });
                    t.PBKDF2 = function(e, t, n) {
                        return l.create(n).compute(e, t)
                    }
                }(), e.PBKDF2
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(7), n(9), n(8), n(2))
            }(void 0, function(e) {
                return function() {
                    function t() {
                        for (var e = this._X, t = this._C, n = 0; 8 > n; n++) s[n] = t[n];
                        t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < s[7] >>> 0 ? 1 : 0;
                        for (var n = 0; 8 > n; n++) {
                            var i = e[n] + t[n],
                                r = 65535 & i,
                                a = i >>> 16,
                                o = ((r * r >>> 17) + r * a >>> 15) + a * a,
                                u = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                            l[n] = o ^ u
                        }
                        e[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, e[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, e[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, e[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, e[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, e[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, e[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, e[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
                    }
                    var n = e,
                        i = n.lib,
                        r = i.StreamCipher,
                        a = n.algo,
                        o = [],
                        s = [],
                        l = [],
                        u = a.RabbitLegacy = r.extend({
                            _doReset: function() {
                                var e = this._key.words,
                                    n = this.cfg.iv,
                                    i = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
                                    r = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                                this._b = 0;
                                for (var a = 0; 4 > a; a++) t.call(this);
                                for (var a = 0; 8 > a; a++) r[a] ^= i[a + 4 & 7];
                                if (n) {
                                    var o = n.words,
                                        s = o[0],
                                        l = o[1],
                                        u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                                        c = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
                                        f = u >>> 16 | 4294901760 & c,
                                        h = c << 16 | 65535 & u;
                                    r[0] ^= u, r[1] ^= f, r[2] ^= c, r[3] ^= h, r[4] ^= u, r[5] ^= f, r[6] ^= c, r[7] ^= h;
                                    for (var a = 0; 4 > a; a++) t.call(this)
                                }
                            },
                            _doProcessBlock: function(e, n) {
                                var i = this._X;
                                t.call(this), o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                                for (var r = 0; 4 > r; r++) o[r] = 16711935 & (o[r] << 8 | o[r] >>> 24) | 4278255360 & (o[r] << 24 | o[r] >>> 8), e[n + r] ^= o[r]
                            },
                            blockSize: 4,
                            ivSize: 2
                        });
                    n.RabbitLegacy = r._createHelper(u)
                }(), e.RabbitLegacy
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(7), n(9), n(8), n(2))
            }(void 0, function(e) {
                return function() {
                    function t() {
                        for (var e = this._X, t = this._C, n = 0; 8 > n; n++) s[n] = t[n];
                        t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < s[7] >>> 0 ? 1 : 0;
                        for (var n = 0; 8 > n; n++) {
                            var i = e[n] + t[n],
                                r = 65535 & i,
                                a = i >>> 16,
                                o = ((r * r >>> 17) + r * a >>> 15) + a * a,
                                u = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                            l[n] = o ^ u
                        }
                        e[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, e[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, e[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, e[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, e[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, e[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, e[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, e[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
                    }
                    var n = e,
                        i = n.lib,
                        r = i.StreamCipher,
                        a = n.algo,
                        o = [],
                        s = [],
                        l = [],
                        u = a.Rabbit = r.extend({
                            _doReset: function() {
                                for (var e = this._key.words, n = this.cfg.iv, i = 0; 4 > i; i++) e[i] = 16711935 & (e[i] << 8 | e[i] >>> 24) | 4278255360 & (e[i] << 24 | e[i] >>> 8);
                                var r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
                                    a = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                                this._b = 0;
                                for (var i = 0; 4 > i; i++) t.call(this);
                                for (var i = 0; 8 > i; i++) a[i] ^= r[i + 4 & 7];
                                if (n) {
                                    var o = n.words,
                                        s = o[0],
                                        l = o[1],
                                        u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                                        c = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
                                        f = u >>> 16 | 4294901760 & c,
                                        h = c << 16 | 65535 & u;
                                    a[0] ^= u, a[1] ^= f, a[2] ^= c, a[3] ^= h, a[4] ^= u, a[5] ^= f, a[6] ^= c, a[7] ^= h;
                                    for (var i = 0; 4 > i; i++) t.call(this)
                                }
                            },
                            _doProcessBlock: function(e, n) {
                                var i = this._X;
                                t.call(this), o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                                for (var r = 0; 4 > r; r++) o[r] = 16711935 & (o[r] << 8 | o[r] >>> 24) | 4278255360 & (o[r] << 24 | o[r] >>> 8), e[n + r] ^= o[r]
                            },
                            blockSize: 4,
                            ivSize: 2
                        });
                    n.Rabbit = r._createHelper(u)
                }(), e.Rabbit
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(7), n(9), n(8), n(2))
            }(void 0, function(e) {
                return function() {
                    function t() {
                        for (var e = this._S, t = this._i, n = this._j, i = 0, r = 0; 4 > r; r++) {
                            t = (t + 1) % 256, n = (n + e[t]) % 256;
                            var a = e[t];
                            e[t] = e[n], e[n] = a, i |= e[(e[t] + e[n]) % 256] << 24 - 8 * r
                        }
                        return this._i = t, this._j = n, i
                    }
                    var n = e,
                        i = n.lib,
                        r = i.StreamCipher,
                        a = n.algo,
                        o = a.RC4 = r.extend({
                            _doReset: function() {
                                for (var e = this._key, t = e.words, n = e.sigBytes, i = this._S = [], r = 0; 256 > r; r++) i[r] = r;
                                for (var r = 0, a = 0; 256 > r; r++) {
                                    var o = r % n,
                                        s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    a = (a + i[r] + s) % 256;
                                    var l = i[r];
                                    i[r] = i[a], i[a] = l
                                }
                                this._i = this._j = 0
                            },
                            _doProcessBlock: function(e, n) {
                                e[n] ^= t.call(this)
                            },
                            keySize: 8,
                            ivSize: 0
                        });
                    n.RC4 = r._createHelper(o);
                    var s = a.RC4Drop = o.extend({
                        cfg: o.cfg.extend({
                            drop: 192
                        }),
                        _doReset: function() {
                            o._doReset.call(this);
                            for (var e = this.cfg.drop; e > 0; e--) t.call(this)
                        }
                    });
                    n.RC4Drop = r._createHelper(s)
                }(), e.RC4
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r) {
                e.exports = t = r(n(1))
            }(void 0, function(e) {
                return function(t) {
                    function n(e, t, n) {
                        return e ^ t ^ n
                    }

                    function i(e, t, n) {
                        return e & t | ~e & n
                    }

                    function r(e, t, n) {
                        return (e | ~t) ^ n
                    }

                    function a(e, t, n) {
                        return e & n | t & ~n
                    }

                    function o(e, t, n) {
                        return e ^ (t | ~n)
                    }

                    function s(e, t) {
                        return e << t | e >>> 32 - t
                    }
                    var l = e,
                        u = l.lib,
                        c = u.WordArray,
                        f = u.Hasher,
                        h = l.algo,
                        d = c.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                        v = c.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                        p = c.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                        g = c.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                        y = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                        m = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                        E = h.RIPEMD160 = f.extend({
                            _doReset: function() {
                                this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var l = 0; 16 > l; l++) {
                                    var u = t + l,
                                        c = e[u];
                                    e[u] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                                }
                                var f, h, E, b, k, _, A, T, L, S, R = this._hash.words,
                                    O = y.words,
                                    w = m.words,
                                    C = d.words,
                                    D = v.words,
                                    P = p.words,
                                    I = g.words;
                                _ = f = R[0], A = h = R[1], T = E = R[2], L = b = R[3], S = k = R[4];
                                for (var x, l = 0; 80 > l; l += 1) x = f + e[t + C[l]] | 0, x += 16 > l ? n(h, E, b) + O[0] : 32 > l ? i(h, E, b) + O[1] : 48 > l ? r(h, E, b) + O[2] : 64 > l ? a(h, E, b) + O[3] : o(h, E, b) + O[4], x = 0 | x, x = s(x, P[l]), x = x + k | 0, f = k, k = b, b = s(E, 10), E = h, h = x, x = _ + e[t + D[l]] | 0, x += 16 > l ? o(A, T, L) + w[0] : 32 > l ? a(A, T, L) + w[1] : 48 > l ? r(A, T, L) + w[2] : 64 > l ? i(A, T, L) + w[3] : n(A, T, L) + w[4], x = 0 | x, x = s(x, I[l]), x = x + S | 0, _ = S, S = L, L = s(T, 10), T = A, A = x;
                                x = R[1] + E + L | 0, R[1] = R[2] + b + S | 0, R[2] = R[3] + k + _ | 0, R[3] = R[4] + f + A | 0, R[4] = R[0] + h + T | 0, R[0] = x
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    t = e.words,
                                    n = 8 * this._nDataBytes,
                                    i = 8 * e.sigBytes;
                                t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
                                for (var r = this._hash, a = r.words, o = 0; 5 > o; o++) {
                                    var s = a[o];
                                    a[o] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                                }
                                return r
                            },
                            clone: function b() {
                                var b = f.clone.call(this);
                                return b._hash = this._hash.clone(), b
                            }
                        });
                    l.RIPEMD160 = f._createHelper(E), l.HmacRIPEMD160 = f._createHmacHelper(E)
                }(Math), e.RIPEMD160
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(24))
            }(void 0, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.WordArray,
                        r = t.algo,
                        a = r.SHA256,
                        o = r.SHA224 = a.extend({
                            _doReset: function() {
                                this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                            },
                            _doFinalize: function() {
                                var e = a._doFinalize.call(this);
                                return e.sigBytes -= 4, e
                            }
                        });
                    t.SHA224 = a._createHelper(o), t.HmacSHA224 = a._createHmacHelper(o)
                }(), e.SHA224
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(14))
            }(void 0, function(e) {
                return function(t) {
                    var n = e,
                        i = n.lib,
                        r = i.WordArray,
                        a = i.Hasher,
                        o = n.x64,
                        s = o.Word,
                        l = n.algo,
                        u = [],
                        c = [],
                        f = [];
                    ! function() {
                        for (var e = 1, t = 0, n = 0; 24 > n; n++) {
                            u[e + 5 * t] = (n + 1) * (n + 2) / 2 % 64;
                            var i = t % 5,
                                r = (2 * e + 3 * t) % 5;
                            e = i, t = r
                        }
                        for (var e = 0; 5 > e; e++)
                            for (var t = 0; 5 > t; t++) c[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
                        for (var a = 1, o = 0; 24 > o; o++) {
                            for (var l = 0, h = 0, d = 0; 7 > d; d++) {
                                if (1 & a) {
                                    var v = (1 << d) - 1;
                                    32 > v ? h ^= 1 << v : l ^= 1 << v - 32
                                }
                                128 & a ? a = a << 1 ^ 113 : a <<= 1
                            }
                            f[o] = s.create(l, h)
                        }
                    }();
                    var h = [];
                    ! function() {
                        for (var e = 0; 25 > e; e++) h[e] = s.create()
                    }();
                    var d = l.SHA3 = a.extend({
                        cfg: a.cfg.extend({
                            outputLength: 512
                        }),
                        _doReset: function() {
                            for (var e = this._state = [], t = 0; 25 > t; t++) e[t] = new s.init;
                            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = this._state, i = this.blockSize / 2, r = 0; i > r; r++) {
                                var a = e[t + 2 * r],
                                    o = e[t + 2 * r + 1];
                                a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                                var s = n[r];
                                s.high ^= o, s.low ^= a
                            }
                            for (var l = 0; 24 > l; l++) {
                                for (var d = 0; 5 > d; d++) {
                                    for (var v = 0, p = 0, g = 0; 5 > g; g++) {
                                        var s = n[d + 5 * g];
                                        v ^= s.high, p ^= s.low
                                    }
                                    var y = h[d];
                                    y.high = v, y.low = p
                                }
                                for (var d = 0; 5 > d; d++)
                                    for (var m = h[(d + 4) % 5], E = h[(d + 1) % 5], b = E.high, k = E.low, v = m.high ^ (b << 1 | k >>> 31), p = m.low ^ (k << 1 | b >>> 31), g = 0; 5 > g; g++) {
                                        var s = n[d + 5 * g];
                                        s.high ^= v, s.low ^= p
                                    }
                                for (var _ = 1; 25 > _; _++) {
                                    var s = n[_],
                                        A = s.high,
                                        T = s.low,
                                        L = u[_];
                                    if (32 > L) var v = A << L | T >>> 32 - L,
                                        p = T << L | A >>> 32 - L;
                                    else var v = T << L - 32 | A >>> 64 - L,
                                        p = A << L - 32 | T >>> 64 - L;
                                    var S = h[c[_]];
                                    S.high = v, S.low = p
                                }
                                var R = h[0],
                                    O = n[0];
                                R.high = O.high, R.low = O.low;
                                for (var d = 0; 5 > d; d++)
                                    for (var g = 0; 5 > g; g++) {
                                        var _ = d + 5 * g,
                                            s = n[_],
                                            w = h[_],
                                            C = h[(d + 1) % 5 + 5 * g],
                                            D = h[(d + 2) % 5 + 5 * g];
                                        s.high = w.high ^ ~C.high & D.high, s.low = w.low ^ ~C.low & D.low
                                    }
                                var s = n[0],
                                    P = f[l];
                                s.high ^= P.high, s.low ^= P.low
                            }
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                n = e.words,
                                i = (8 * this._nDataBytes, 8 * e.sigBytes),
                                a = 32 * this.blockSize;
                            n[i >>> 5] |= 1 << 24 - i % 32, n[(t.ceil((i + 1) / a) * a >>> 5) - 1] |= 128, e.sigBytes = 4 * n.length, this._process();
                            for (var o = this._state, s = this.cfg.outputLength / 8, l = s / 8, u = [], c = 0; l > c; c++) {
                                var f = o[c],
                                    h = f.high,
                                    d = f.low;
                                h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), u.push(d), u.push(h)
                            }
                            return new r.init(u, s)
                        },
                        clone: function v() {
                            for (var v = a.clone.call(this), e = v._state = this._state.slice(0), t = 0; 25 > t; t++) e[t] = e[t].clone();
                            return v
                        }
                    });
                    n.SHA3 = a._createHelper(d), n.HmacSHA3 = a._createHmacHelper(d)
                }(Math), e.SHA3
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(14), n(25));
            }(void 0, function(e) {
                return function() {
                    var t = e,
                        n = t.x64,
                        i = n.Word,
                        r = n.WordArray,
                        a = t.algo,
                        o = a.SHA512,
                        s = a.SHA384 = o.extend({
                            _doReset: function() {
                                this._hash = new r.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)])
                            },
                            _doFinalize: function() {
                                var e = o._doFinalize.call(this);
                                return e.sigBytes -= 16, e
                            }
                        });
                    t.SHA384 = o._createHelper(s), t.HmacSHA384 = o._createHmacHelper(s)
                }(), e.SHA384
            })
        },
        function(e, t, n) {
            "use strict";
            ! function(i, r, a) {
                e.exports = t = r(n(1), n(7), n(9), n(8), n(2))
            }(void 0, function(e) {
                return function() {
                    function t(e, t) {
                        var n = (this._lBlock >>> e ^ this._rBlock) & t;
                        this._rBlock ^= n, this._lBlock ^= n << e
                    }

                    function n(e, t) {
                        var n = (this._rBlock >>> e ^ this._lBlock) & t;
                        this._lBlock ^= n, this._rBlock ^= n << e
                    }
                    var i = e,
                        r = i.lib,
                        a = r.WordArray,
                        o = r.BlockCipher,
                        s = i.algo,
                        l = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                        u = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                        c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                        f = [{
                            0: 8421888,
                            268435456: 32768,
                            536870912: 8421378,
                            805306368: 2,
                            1073741824: 512,
                            1342177280: 8421890,
                            1610612736: 8389122,
                            1879048192: 8388608,
                            2147483648: 514,
                            2415919104: 8389120,
                            2684354560: 33280,
                            2952790016: 8421376,
                            3221225472: 32770,
                            3489660928: 8388610,
                            3758096384: 0,
                            4026531840: 33282,
                            134217728: 0,
                            402653184: 8421890,
                            671088640: 33282,
                            939524096: 32768,
                            1207959552: 8421888,
                            1476395008: 512,
                            1744830464: 8421378,
                            2013265920: 2,
                            2281701376: 8389120,
                            2550136832: 33280,
                            2818572288: 8421376,
                            3087007744: 8389122,
                            3355443200: 8388610,
                            3623878656: 32770,
                            3892314112: 514,
                            4160749568: 8388608,
                            1: 32768,
                            268435457: 2,
                            536870913: 8421888,
                            805306369: 8388608,
                            1073741825: 8421378,
                            1342177281: 33280,
                            1610612737: 512,
                            1879048193: 8389122,
                            2147483649: 8421890,
                            2415919105: 8421376,
                            2684354561: 8388610,
                            2952790017: 33282,
                            3221225473: 514,
                            3489660929: 8389120,
                            3758096385: 32770,
                            4026531841: 0,
                            134217729: 8421890,
                            402653185: 8421376,
                            671088641: 8388608,
                            939524097: 512,
                            1207959553: 32768,
                            1476395009: 8388610,
                            1744830465: 2,
                            2013265921: 33282,
                            2281701377: 32770,
                            2550136833: 8389122,
                            2818572289: 514,
                            3087007745: 8421888,
                            3355443201: 8389120,
                            3623878657: 0,
                            3892314113: 33280,
                            4160749569: 8421378
                        }, {
                            0: 1074282512,
                            16777216: 16384,
                            33554432: 524288,
                            50331648: 1074266128,
                            67108864: 1073741840,
                            83886080: 1074282496,
                            100663296: 1073758208,
                            117440512: 16,
                            134217728: 540672,
                            150994944: 1073758224,
                            167772160: 1073741824,
                            184549376: 540688,
                            201326592: 524304,
                            218103808: 0,
                            234881024: 16400,
                            251658240: 1074266112,
                            8388608: 1073758208,
                            25165824: 540688,
                            41943040: 16,
                            58720256: 1073758224,
                            75497472: 1074282512,
                            92274688: 1073741824,
                            109051904: 524288,
                            125829120: 1074266128,
                            142606336: 524304,
                            159383552: 0,
                            176160768: 16384,
                            192937984: 1074266112,
                            209715200: 1073741840,
                            226492416: 540672,
                            243269632: 1074282496,
                            260046848: 16400,
                            268435456: 0,
                            285212672: 1074266128,
                            301989888: 1073758224,
                            318767104: 1074282496,
                            335544320: 1074266112,
                            352321536: 16,
                            369098752: 540688,
                            385875968: 16384,
                            402653184: 16400,
                            419430400: 524288,
                            436207616: 524304,
                            452984832: 1073741840,
                            469762048: 540672,
                            486539264: 1073758208,
                            503316480: 1073741824,
                            520093696: 1074282512,
                            276824064: 540688,
                            293601280: 524288,
                            310378496: 1074266112,
                            327155712: 16384,
                            343932928: 1073758208,
                            360710144: 1074282512,
                            377487360: 16,
                            394264576: 1073741824,
                            411041792: 1074282496,
                            427819008: 1073741840,
                            444596224: 1073758224,
                            461373440: 524304,
                            478150656: 0,
                            494927872: 16400,
                            511705088: 1074266128,
                            528482304: 540672
                        }, {
                            0: 260,
                            1048576: 0,
                            2097152: 67109120,
                            3145728: 65796,
                            4194304: 65540,
                            5242880: 67108868,
                            6291456: 67174660,
                            7340032: 67174400,
                            8388608: 67108864,
                            9437184: 67174656,
                            10485760: 65792,
                            11534336: 67174404,
                            12582912: 67109124,
                            13631488: 65536,
                            14680064: 4,
                            15728640: 256,
                            524288: 67174656,
                            1572864: 67174404,
                            2621440: 0,
                            3670016: 67109120,
                            4718592: 67108868,
                            5767168: 65536,
                            6815744: 65540,
                            7864320: 260,
                            8912896: 4,
                            9961472: 256,
                            11010048: 67174400,
                            12058624: 65796,
                            13107200: 65792,
                            14155776: 67109124,
                            15204352: 67174660,
                            16252928: 67108864,
                            16777216: 67174656,
                            17825792: 65540,
                            18874368: 65536,
                            19922944: 67109120,
                            20971520: 256,
                            22020096: 67174660,
                            23068672: 67108868,
                            24117248: 0,
                            25165824: 67109124,
                            26214400: 67108864,
                            27262976: 4,
                            28311552: 65792,
                            29360128: 67174400,
                            30408704: 260,
                            31457280: 65796,
                            32505856: 67174404,
                            17301504: 67108864,
                            18350080: 260,
                            19398656: 67174656,
                            20447232: 0,
                            21495808: 65540,
                            22544384: 67109120,
                            23592960: 256,
                            24641536: 67174404,
                            25690112: 65536,
                            26738688: 67174660,
                            27787264: 65796,
                            28835840: 67108868,
                            29884416: 67109124,
                            30932992: 67174400,
                            31981568: 4,
                            33030144: 65792
                        }, {
                            0: 2151682048,
                            65536: 2147487808,
                            131072: 4198464,
                            196608: 2151677952,
                            262144: 0,
                            327680: 4198400,
                            393216: 2147483712,
                            458752: 4194368,
                            524288: 2147483648,
                            589824: 4194304,
                            655360: 64,
                            720896: 2147487744,
                            786432: 2151678016,
                            851968: 4160,
                            917504: 4096,
                            983040: 2151682112,
                            32768: 2147487808,
                            98304: 64,
                            163840: 2151678016,
                            229376: 2147487744,
                            294912: 4198400,
                            360448: 2151682112,
                            425984: 0,
                            491520: 2151677952,
                            557056: 4096,
                            622592: 2151682048,
                            688128: 4194304,
                            753664: 4160,
                            819200: 2147483648,
                            884736: 4194368,
                            950272: 4198464,
                            1015808: 2147483712,
                            1048576: 4194368,
                            1114112: 4198400,
                            1179648: 2147483712,
                            1245184: 0,
                            1310720: 4160,
                            1376256: 2151678016,
                            1441792: 2151682048,
                            1507328: 2147487808,
                            1572864: 2151682112,
                            1638400: 2147483648,
                            1703936: 2151677952,
                            1769472: 4198464,
                            1835008: 2147487744,
                            1900544: 4194304,
                            1966080: 64,
                            2031616: 4096,
                            1081344: 2151677952,
                            1146880: 2151682112,
                            1212416: 0,
                            1277952: 4198400,
                            1343488: 4194368,
                            1409024: 2147483648,
                            1474560: 2147487808,
                            1540096: 64,
                            1605632: 2147483712,
                            1671168: 4096,
                            1736704: 2147487744,
                            1802240: 2151678016,
                            1867776: 4160,
                            1933312: 2151682048,
                            1998848: 4194304,
                            2064384: 4198464
                        }, {
                            0: 128,
                            4096: 17039360,
                            8192: 262144,
                            12288: 536870912,
                            16384: 537133184,
                            20480: 16777344,
                            24576: 553648256,
                            28672: 262272,
                            32768: 16777216,
                            36864: 537133056,
                            40960: 536871040,
                            45056: 553910400,
                            49152: 553910272,
                            53248: 0,
                            57344: 17039488,
                            61440: 553648128,
                            2048: 17039488,
                            6144: 553648256,
                            10240: 128,
                            14336: 17039360,
                            18432: 262144,
                            22528: 537133184,
                            26624: 553910272,
                            30720: 536870912,
                            34816: 537133056,
                            38912: 0,
                            43008: 553910400,
                            47104: 16777344,
                            51200: 536871040,
                            55296: 553648128,
                            59392: 16777216,
                            63488: 262272,
                            65536: 262144,
                            69632: 128,
                            73728: 536870912,
                            77824: 553648256,
                            81920: 16777344,
                            86016: 553910272,
                            90112: 537133184,
                            94208: 16777216,
                            98304: 553910400,
                            102400: 553648128,
                            106496: 17039360,
                            110592: 537133056,
                            114688: 262272,
                            118784: 536871040,
                            122880: 0,
                            126976: 17039488,
                            67584: 553648256,
                            71680: 16777216,
                            75776: 17039360,
                            79872: 537133184,
                            83968: 536870912,
                            88064: 17039488,
                            92160: 128,
                            96256: 553910272,
                            100352: 262272,
                            104448: 553910400,
                            108544: 0,
                            112640: 553648128,
                            116736: 16777344,
                            120832: 262144,
                            124928: 537133056,
                            129024: 536871040
                        }, {
                            0: 268435464,
                            256: 8192,
                            512: 270532608,
                            768: 270540808,
                            1024: 268443648,
                            1280: 2097152,
                            1536: 2097160,
                            1792: 268435456,
                            2048: 0,
                            2304: 268443656,
                            2560: 2105344,
                            2816: 8,
                            3072: 270532616,
                            3328: 2105352,
                            3584: 8200,
                            3840: 270540800,
                            128: 270532608,
                            384: 270540808,
                            640: 8,
                            896: 2097152,
                            1152: 2105352,
                            1408: 268435464,
                            1664: 268443648,
                            1920: 8200,
                            2176: 2097160,
                            2432: 8192,
                            2688: 268443656,
                            2944: 270532616,
                            3200: 0,
                            3456: 270540800,
                            3712: 2105344,
                            3968: 268435456,
                            4096: 268443648,
                            4352: 270532616,
                            4608: 270540808,
                            4864: 8200,
                            5120: 2097152,
                            5376: 268435456,
                            5632: 268435464,
                            5888: 2105344,
                            6144: 2105352,
                            6400: 0,
                            6656: 8,
                            6912: 270532608,
                            7168: 8192,
                            7424: 268443656,
                            7680: 270540800,
                            7936: 2097160,
                            4224: 8,
                            4480: 2105344,
                            4736: 2097152,
                            4992: 268435464,
                            5248: 268443648,
                            5504: 8200,
                            5760: 270540808,
                            6016: 270532608,
                            6272: 270540800,
                            6528: 270532616,
                            6784: 8192,
                            7040: 2105352,
                            7296: 2097160,
                            7552: 0,
                            7808: 268435456,
                            8064: 268443656
                        }, {
                            0: 1048576,
                            16: 33555457,
                            32: 1024,
                            48: 1049601,
                            64: 34604033,
                            80: 0,
                            96: 1,
                            112: 34603009,
                            128: 33555456,
                            144: 1048577,
                            160: 33554433,
                            176: 34604032,
                            192: 34603008,
                            208: 1025,
                            224: 1049600,
                            240: 33554432,
                            8: 34603009,
                            24: 0,
                            40: 33555457,
                            56: 34604032,
                            72: 1048576,
                            88: 33554433,
                            104: 33554432,
                            120: 1025,
                            136: 1049601,
                            152: 33555456,
                            168: 34603008,
                            184: 1048577,
                            200: 1024,
                            216: 34604033,
                            232: 1,
                            248: 1049600,
                            256: 33554432,
                            272: 1048576,
                            288: 33555457,
                            304: 34603009,
                            320: 1048577,
                            336: 33555456,
                            352: 34604032,
                            368: 1049601,
                            384: 1025,
                            400: 34604033,
                            416: 1049600,
                            432: 1,
                            448: 0,
                            464: 34603008,
                            480: 33554433,
                            496: 1024,
                            264: 1049600,
                            280: 33555457,
                            296: 34603009,
                            312: 1,
                            328: 33554432,
                            344: 1048576,
                            360: 1025,
                            376: 34604032,
                            392: 33554433,
                            408: 34603008,
                            424: 0,
                            440: 34604033,
                            456: 1049601,
                            472: 1024,
                            488: 33555456,
                            504: 1048577
                        }, {
                            0: 134219808,
                            1: 131072,
                            2: 134217728,
                            3: 32,
                            4: 131104,
                            5: 134350880,
                            6: 134350848,
                            7: 2048,
                            8: 134348800,
                            9: 134219776,
                            10: 133120,
                            11: 134348832,
                            12: 2080,
                            13: 0,
                            14: 134217760,
                            15: 133152,
                            2147483648: 2048,
                            2147483649: 134350880,
                            2147483650: 134219808,
                            2147483651: 134217728,
                            2147483652: 134348800,
                            2147483653: 133120,
                            2147483654: 133152,
                            2147483655: 32,
                            2147483656: 134217760,
                            2147483657: 2080,
                            2147483658: 131104,
                            2147483659: 134350848,
                            2147483660: 0,
                            2147483661: 134348832,
                            2147483662: 134219776,
                            2147483663: 131072,
                            16: 133152,
                            17: 134350848,
                            18: 32,
                            19: 2048,
                            20: 134219776,
                            21: 134217760,
                            22: 134348832,
                            23: 131072,
                            24: 0,
                            25: 131104,
                            26: 134348800,
                            27: 134219808,
                            28: 134350880,
                            29: 133120,
                            30: 2080,
                            31: 134217728,
                            2147483664: 131072,
                            2147483665: 2048,
                            2147483666: 134348832,
                            2147483667: 133152,
                            2147483668: 32,
                            2147483669: 134348800,
                            2147483670: 134217728,
                            2147483671: 134219808,
                            2147483672: 134350880,
                            2147483673: 134217760,
                            2147483674: 134219776,
                            2147483675: 0,
                            2147483676: 133120,
                            2147483677: 2080,
                            2147483678: 131104,
                            2147483679: 134350848
                        }],
                        h = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                        d = s.DES = o.extend({
                            _doReset: function() {
                                for (var e = this._key, t = e.words, n = [], i = 0; 56 > i; i++) {
                                    var r = l[i] - 1;
                                    n[i] = t[r >>> 5] >>> 31 - r % 32 & 1
                                }
                                for (var a = this._subKeys = [], o = 0; 16 > o; o++) {
                                    for (var s = a[o] = [], f = c[o], i = 0; 24 > i; i++) s[i / 6 | 0] |= n[(u[i] - 1 + f) % 28] << 31 - i % 6, s[4 + (i / 6 | 0)] |= n[28 + (u[i + 24] - 1 + f) % 28] << 31 - i % 6;
                                    s[0] = s[0] << 1 | s[0] >>> 31;
                                    for (var i = 1; 7 > i; i++) s[i] = s[i] >>> 4 * (i - 1) + 3;
                                    s[7] = s[7] << 5 | s[7] >>> 27
                                }
                                for (var h = this._invSubKeys = [], i = 0; 16 > i; i++) h[i] = a[15 - i]
                            },
                            encryptBlock: function(e, t) {
                                this._doCryptBlock(e, t, this._subKeys)
                            },
                            decryptBlock: function(e, t) {
                                this._doCryptBlock(e, t, this._invSubKeys)
                            },
                            _doCryptBlock: function(e, i, r) {
                                this._lBlock = e[i], this._rBlock = e[i + 1], t.call(this, 4, 252645135), t.call(this, 16, 65535), n.call(this, 2, 858993459), n.call(this, 8, 16711935), t.call(this, 1, 1431655765);
                                for (var a = 0; 16 > a; a++) {
                                    for (var o = r[a], s = this._lBlock, l = this._rBlock, u = 0, c = 0; 8 > c; c++) u |= f[c][((l ^ o[c]) & h[c]) >>> 0];
                                    this._lBlock = l, this._rBlock = s ^ u
                                }
                                var d = this._lBlock;
                                this._lBlock = this._rBlock, this._rBlock = d, t.call(this, 1, 1431655765), n.call(this, 8, 16711935), n.call(this, 2, 858993459), t.call(this, 16, 65535), t.call(this, 4, 252645135), e[i] = this._lBlock, e[i + 1] = this._rBlock
                            },
                            keySize: 2,
                            ivSize: 2,
                            blockSize: 2
                        });
                    i.DES = o._createHelper(d);
                    var v = s.TripleDES = o.extend({
                        _doReset: function() {
                            var e = this._key,
                                t = e.words;
                            this._des1 = d.createEncryptor(a.create(t.slice(0, 2))), this._des2 = d.createEncryptor(a.create(t.slice(2, 4))), this._des3 = d.createEncryptor(a.create(t.slice(4, 6)))
                        },
                        encryptBlock: function(e, t) {
                            this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t)
                        },
                        decryptBlock: function(e, t) {
                            this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t)
                        },
                        keySize: 6,
                        ivSize: 2,
                        blockSize: 2
                    });
                    i.TripleDES = o._createHelper(v)
                }(), e.TripleDES
            })
        },
        [121, 56, 58, 16, 59],
        [122, 16, 57, 21],
        function(e, t) {
            "use strict";

            function n(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && a >= e
            }

            function i(e) {
                return !!e && "object" == typeof e
            }

            function r(e) {
                return i(e) && n(e.length) && !!C[P.call(e)]
            }
            var a = 9007199254740991,
                o = "[object Arguments]",
                s = "[object Array]",
                l = "[object Boolean]",
                u = "[object Date]",
                c = "[object Error]",
                f = "[object Function]",
                h = "[object Map]",
                d = "[object Number]",
                v = "[object Object]",
                p = "[object RegExp]",
                g = "[object Set]",
                y = "[object String]",
                m = "[object WeakMap]",
                E = "[object ArrayBuffer]",
                b = "[object DataView]",
                k = "[object Float32Array]",
                _ = "[object Float64Array]",
                A = "[object Int8Array]",
                T = "[object Int16Array]",
                L = "[object Int32Array]",
                S = "[object Uint8Array]",
                R = "[object Uint8ClampedArray]",
                O = "[object Uint16Array]",
                w = "[object Uint32Array]",
                C = {};
            C[k] = C[_] = C[A] = C[T] = C[L] = C[S] = C[R] = C[O] = C[w] = !0, C[o] = C[s] = C[E] = C[l] = C[b] = C[u] = C[c] = C[f] = C[h] = C[d] = C[v] = C[p] = C[g] = C[y] = C[m] = !1;
            var D = Object.prototype,
                P = D.toString;
            e.exports = r
        },
        function(e, t) {
            "use strict";

            function n(e, t, n) {
                if ("function" != typeof e) return i;
                if (void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 3:
                        return function(n, i, r) {
                            return e.call(t, n, i, r)
                        };
                    case 4:
                        return function(n, i, r, a) {
                            return e.call(t, n, i, r, a)
                        };
                    case 5:
                        return function(n, i, r, a, o) {
                            return e.call(t, n, i, r, a, o)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }

            function i(e) {
                return e
            }
            e.exports = n
        },
        [123, 21],
        function(e, t, n) {
            "use strict";

            function i(e, t) {
                return d(e, t, c)
            }

            function r(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }

            function a(e, t) {
                return function(n, i) {
                    var r = n ? v(n) : 0;
                    if (!s(r)) return e(n, i);
                    for (var a = t ? r : -1, o = l(n);
                        (t ? a-- : ++a < r) && i(o[a], a, o) !== !1;);
                    return n
                }
            }

            function o(e) {
                return function(t, n, i) {
                    for (var r = l(t), a = i(t), o = a.length, s = e ? o : -1; e ? s-- : ++s < o;) {
                        var u = a[s];
                        if (n(r[u], u, r) === !1) break
                    }
                    return t
                }
            }

            function s(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && f >= e
            }

            function l(e) {
                return u(e) ? e : Object(e)
            }

            function u(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            var c = n(21),
                f = 9007199254740991,
                h = a(i),
                d = o(),
                v = r("length");
            e.exports = h
        },
        function(e, t) {
            "use strict";

            function n(e, t, n, i) {
                var r;
                return n(e, function(e, n, a) {
                    return t(e, n, a) ? (r = i ? n : e, !1) : void 0
                }), r
            }
            e.exports = n
        },
        function(e, t) {
            "use strict";

            function n(e, t, n) {
                for (var i = e.length, r = n ? i : -1; n ? r-- : ++r < i;)
                    if (t(e[r], r, e)) return r;
                return -1
            }
            e.exports = n
        },
        22,
        function(e, t) {
            "use strict";

            function n(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }

            function i(e) {
                return a(e) && p.call(e, "callee") && (!y.call(e, "callee") || g.call(e) == f)
            }

            function r(e) {
                return null != e && s(m(e)) && !o(e)
            }

            function a(e) {
                return u(e) && r(e)
            }

            function o(e) {
                var t = l(e) ? g.call(e) : "";
                return t == h || t == d
            }

            function s(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && c >= e
            }

            function l(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function u(e) {
                return !!e && "object" == typeof e
            }
            var c = 9007199254740991,
                f = "[object Arguments]",
                h = "[object Function]",
                d = "[object GeneratorFunction]",
                v = Object.prototype,
                p = v.hasOwnProperty,
                g = v.toString,
                y = v.propertyIsEnumerable,
                m = n("length");
            e.exports = i
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return r(2, e)
            }
            var r = n(66);
            e.exports = i
        },
        function(e, t) {
            "use strict";

            function n(e, t) {
                var n;
                if ("function" != typeof t) {
                    if ("function" != typeof e) throw new TypeError(i);
                    var r = e;
                    e = t, t = r
                }
                return function() {
                    return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = void 0), n
                }
            }
            var i = "Expected a function";
            e.exports = n
        },
        function(e, t, n) {
            "use strict";

            function i(e, t) {
                var n = typeof e;
                if ("string" == n && v.test(e) || "number" == n) return !0;
                if (f(e)) return !1;
                var i = !d.test(e);
                return i || null != t && e in r(t)
            }

            function r(e) {
                return o(e) ? e : Object(e)
            }

            function a(e) {
                var t = e ? e.length : 0;
                return t ? e[t - 1] : void 0
            }

            function o(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function s(e, t, n) {
                var r = null == e ? void 0 : e[t];
                return void 0 === r && (null == e || i(t, e) || (t = c(t), e = 1 == t.length ? e : l(e, u(t, 0, -1)), r = null == e ? void 0 : e[a(t)]), r = void 0 === r ? n : r), h(r) ? r.call(e) : r
            }
            var l = n(68),
                u = n(69),
                c = n(70),
                f = n(26),
                h = n(71),
                d = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                v = /^\w*$/;
            e.exports = s
        },
        function(e, t) {
            "use strict";

            function n(e, t, n) {
                if (null != e) {
                    void 0 !== n && n in i(e) && (t = [n]);
                    for (var r = 0, a = t.length; null != e && a > r;) e = e[t[r++]];
                    return r && r == a ? e : void 0
                }
            }

            function i(e) {
                return r(e) ? e : Object(e)
            }

            function r(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            e.exports = n
        },
        function(e, t) {
            "use strict";

            function n(e, t, n) {
                var i = -1,
                    r = e.length;
                t = null == t ? 0 : +t || 0, 0 > t && (t = -t > r ? 0 : r + t), n = void 0 === n || n > r ? r : +n || 0, 0 > n && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var a = Array(r); ++i < r;) a[i] = e[i + t];
                return a
            }
            e.exports = n
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return null == e ? "" : e + ""
            }

            function r(e) {
                if (a(e)) return e;
                var t = [];
                return i(e).replace(o, function(e, n, i, r) {
                    t.push(i ? r.replace(s, "$1") : n || e)
                }), t
            }
            var a = n(26),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                s = /\\(\\)?/g;
            e.exports = r
        },
        function(e, t) {
            "use strict";

            function n(e) {
                var t = i(e) ? s.call(e) : "";
                return t == r || t == a
            }

            function i(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            var r = "[object Function]",
                a = "[object GeneratorFunction]",
                o = Object.prototype,
                s = o.toString;
            e.exports = n
        },
        function(e, t, n) {
            "use strict";

            function i(e, t) {
                for (var n, i = -1, r = e.length, a = -1, o = []; ++i < r;) {
                    var s = e[i],
                        l = t ? t(s, i, e) : s;
                    i && n === l || (n = l, o[++a] = s)
                }
                return o
            }

            function r(e, t, n, r) {
                var l = e ? e.length : 0;
                return l ? (null != t && "boolean" != typeof t && (r = n, n = s(e, t, r) ? void 0 : t, t = !1), n = null == n ? n : a(n, r, 3), t ? i(e, n) : o(e, n)) : []
            }
            var a = n(73),
                o = n(82),
                s = n(86);
            e.exports = r
        },
        [121, 74, 78, 17, 79],
        [122, 17, 75, 76], 57, [124, 22, 77, 17], 64, 58, [123, 80],
        [124, 22, 81, 17], 64,
        function(e, t, n) {
            "use strict";

            function i(e, t) {
                var n = -1,
                    i = r,
                    l = e.length,
                    u = !0,
                    c = u && l >= s,
                    f = c ? o() : null,
                    h = [];
                f ? (i = a, u = !1) : (c = !1, f = t ? [] : h);
                e: for (; ++n < l;) {
                    var d = e[n],
                        v = t ? t(d, n, e) : d;
                    if (u && d === d) {
                        for (var p = f.length; p--;)
                            if (f[p] === v) continue e;
                        t && f.push(v), h.push(d)
                    } else i(f, v, 0) < 0 && ((t || c) && f.push(v), h.push(d))
                }
                return h
            }
            var r = n(83),
                a = n(84),
                o = n(85),
                s = 200;
            e.exports = i
        },
        function(e, t) {
            "use strict";

            function n(e, t, n) {
                if (t !== t) return i(e, n);
                for (var r = n - 1, a = e.length; ++r < a;)
                    if (e[r] === t) return r;
                return -1
            }

            function i(e, t, n) {
                for (var i = e.length, r = t + (n ? 0 : -1); n ? r-- : ++r < i;) {
                    var a = e[r];
                    if (a !== a) return r
                }
                return -1
            }
            e.exports = n
        },
        function(e, t) {
            "use strict";

            function n(e, t) {
                var n = e.data,
                    r = "string" == typeof t || i(t) ? n.set.has(t) : n.hash[t];
                return r ? 0 : -1
            }

            function i(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            e.exports = n
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                var t = e ? e.length : 0;
                for (this.data = {
                        hash: u(null),
                        set: new l
                    }; t--;) this.push(e[t])
            }

            function r(e) {
                var t = this.data;
                "string" == typeof e || o(e) ? t.set.add(e) : t.hash[e] = !0
            }

            function a(e) {
                return u && l ? new i(e) : null
            }

            function o(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            var s = n(22),
                l = s({}, "Set"),
                u = s(Object, "create");
            i.prototype.push = r, e.exports = a
        },
        function(e, t) {
            "use strict";

            function n(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }

            function i(e) {
                return null != e && o(c(e))
            }

            function r(e, t) {
                return e = "number" == typeof e || l.test(e) ? +e : -1, t = null == t ? u : t, e > -1 && e % 1 == 0 && t > e
            }

            function a(e, t, n) {
                if (!s(n)) return !1;
                var a = typeof t;
                if ("number" == a ? i(n) && r(t, n.length) : "string" == a && t in n) {
                    var o = n[t];
                    return e === e ? e === o : o !== o
                }
                return !1
            }

            function o(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && u >= e
            }

            function s(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            var l = /^\d+$/,
                u = 9007199254740991,
                c = n("length");
            e.exports = a
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(10),
                u = i(l),
                c = n(4),
                f = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e.options), this.container = e, this.enabled = !0, this.bindEvents()
                    }
                    return a(t, e), o(t, [{
                        key: "enable",
                        value: function() {
                            this.enabled || (this.bindEvents(), this.enabled = !0)
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this.enabled && (this.stopListening(), this.enabled = !1)
                        }
                    }, {
                        key: "bindEvents",
                        value: function() {}
                    }, {
                        key: "destroy",
                        value: function() {
                            this.stopListening()
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this.container && this.container.options || {}
                        }
                    }]), t
                }(u["default"]);
            t["default"] = f, f.extend = function(e) {
                return (0, c.extend)(f, e)
            }, f.type = "container", e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(4),
                u = n(13),
                c = i(u),
                f = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.core = e, this.enabled = !0, this.bindEvents(), this.render()
                    }
                    return a(t, e), o(t, [{
                        key: "bindEvents",
                        value: function() {}
                    }, {
                        key: "getExternalInterface",
                        value: function() {
                            return {}
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            this.enabled || (this.bindEvents(), this.$el.show(), this.enabled = !0)
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this.stopListening(), this.$el.hide(), this.enabled = !1
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.remove()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.$el.html(this.template()), this.$el.append(this.styler.getStyleFor(this.name)), this.core.$el.append(this.el), this
                        }
                    }]), t
                }(c["default"]);
            t["default"] = f, f.extend = function(e) {
                return (0, l.extend)(f, e)
            }, f.type = "core", e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(3),
                u = i(l),
                c = n(13),
                f = i(c),
                h = n(11),
                d = i(h),
                v = n(12),
                p = i(v),
                g = n(15),
                y = i(g),
                m = n(5),
                E = i(m),
                b = n(6),
                k = i(b),
                _ = n(116),
                A = i(_),
                T = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.currentTime = 0, this.volume = 100, this.options = e, this.playback = e.playback, this.settings = k["default"].extend({}, this.playback.settings), this.isReady = !1, this.mediaControlDisabled = !1, this.plugins = [this.playback], this.bindEvents()
                    }
                    return a(t, e), o(t, [{
                        key: "name",
                        get: function() {
                            return "Container"
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return {
                                "class": "vjs-container"
                            }
                        }
                    }, {
                        key: "template",
                        get: function() {
                            return (0, p["default"])(A["default"])
                        }
                    }, {
                        key: "events",
                        get: function() {
                            return {
                                click: "clicked",
                                dblclick: "dblClicked",
                                doubleTap: "dblClicked",
                                contextmenu: "onContextMenu",
                                mouseenter: "mouseEnter",
                                mouseleave: "mouseLeave"
                            }
                        }
                    }]), o(t, [{
                        key: "bindEvents",
                        value: function() {
                            this.listenTo(this.playback, u["default"].PLAYBACK_PROGRESS, this.progress), this.listenTo(this.playback, u["default"].PLAYBACK_TIMEUPDATE, this.timeUpdated), this.listenTo(this.playback, u["default"].PLAYBACK_READY, this.ready), this.listenTo(this.playback, u["default"].PLAYBACK_BUFFERING, this.buffering), this.listenTo(this.playback, u["default"].PLAYBACK_BUFFERFULL, this.bufferfull), this.listenTo(this.playback, u["default"].PLAYBACK_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.playback, u["default"].PLAYBACK_LOADEDMETADATA, this.loadedMetadata), this.listenTo(this.playback, u["default"].PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.playback, u["default"].PLAYBACK_BITRATE, this.updateBitrate), this.listenTo(this.playback, u["default"].PLAYBACK_PLAYBACKSTATE, this.playbackStateChanged), this.listenTo(this.playback, u["default"].PLAYBACK_DVR, this.playbackDvrStateChanged), this.listenTo(this.playback, u["default"].PLAYBACK_MEDIACONTROL_DISABLE, this.disableMediaControl), this.listenTo(this.playback, u["default"].PLAYBACK_MEDIACONTROL_ENABLE, this.enableMediaControl), this.listenTo(this.playback, u["default"].PLAYBACK_ENDED, this.ended), this.listenTo(this.playback, u["default"].PLAYBACK_PLAY, this.playing), this.listenTo(this.playback, u["default"].PLAYBACK_PAUSE, this.paused), this.listenTo(this.playback, u["default"].PLAYBACK_STOP, this.stopped), this.listenTo(this.playback, u["default"].PLAYBACK_ERROR, this.error)
                        }
                    }, {
                        key: "playbackStateChanged",
                        value: function(e) {
                            this.trigger(u["default"].CONTAINER_PLAYBACKSTATE, e)
                        }
                    }, {
                        key: "playbackDvrStateChanged",
                        value: function(e) {
                            e ? (0, k["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-dvr").removeClass("vjs-dvr-live") : (0, k["default"])(this.options.parentElement).find(".vjs-default-skin").removeClass("vjs-dvr").addClass("vjs-dvr-live"), this.settings = this.playback.settings, this.dvrInUse = e, this.trigger(u["default"].CONTAINER_PLAYBACKDVRSTATECHANGED, e)
                        }
                    }, {
                        key: "updateBitrate",
                        value: function(e) {
                            this.trigger(u["default"].CONTAINER_BITRATE, e)
                        }
                    }, {
                        key: "statsReport",
                        value: function(e) {
                            this.trigger(u["default"].CONTAINER_STATS_REPORT, e)
                        }
                    }, {
                        key: "getPlaybackType",
                        value: function() {
                            return this.playback.getPlaybackType()
                        }
                    }, {
                        key: "isDvrEnabled",
                        value: function() {
                            return !!this.playback.dvrEnabled
                        }
                    }, {
                        key: "isDvrInUse",
                        value: function() {
                            return !!this.dvrInUse
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_DESTROYED, this, this.name), this.stopListening(), this.playback.destroy(), this.plugins.forEach(function(e) {
                                return e.destroy()
                            }), this.$el.remove()
                        }
                    }, {
                        key: "animate",
                        value: function(e, t) {
                            return this.$el.animate(e, t).promise()
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            this.isReady || (this.isReady = !0, this.options.poster && (E["default"].isMobile || (0, k["default"])(this.options.parentElement).find(".vjs-poster").css("background-size", "100% 100%")), this.options.autoPlay && (0, k["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-waiting").addClass("vjs-has-started").removeClass("vjs-paused").addClass("vjs-playing"), this.trigger(u["default"].CONTAINER_READY, this.name))
                        }
                    }, {
                        key: "isPlaying",
                        value: function() {
                            return this.playback.isPlaying()
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.currentTime
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.playback.getDuration()
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            "undefined" != typeof e.code && 4 != e.code ? ((0, k["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-error"), (0, k["default"])(this.options.parentElement).find(".vjs-error-display").html("<div>" + e.message + "</div>"), (0, k["default"])(this.options.parentElement).find(".vjs-error-display").show(), this.isReady || this.ready(), this.trigger(u["default"].CONTAINER_ERROR, {
                                error: e,
                                container: this
                            }, this.name)) : "undefined" == typeof e.type || "hlsNetworkError" != e.type && "networkError" != e.type || "undefined" == typeof e.fatal || 1 != e.fatal || ((0, k["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-error"), (0, k["default"])(this.options.parentElement).find(".vjs-error-display").html("<div>" + e.details + "</div>"), (0, k["default"])(this.options.parentElement).find(".vjs-error-display").show(), this.isReady || this.ready(), this.trigger(u["default"].CONTAINER_ERROR, {
                                error: e,
                                container: this
                            }, this.name))
                        }
                    }, {
                        key: "loadedMetadata",
                        value: function(e) {
                            this.trigger(u["default"].CONTAINER_LOADEDMETADATA, e), this.getPlaybackType() == d["default"].LIVE && (this.isDvrEnabled() ? (0, k["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-dvr-live") : (0, k["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-live"))
                        }
                    }, {
                        key: "timeUpdated",
                        value: function(e) {
                            this.currentTime = e.current, this.trigger(u["default"].CONTAINER_TIMEUPDATE, e, this.name)
                        }
                    }, {
                        key: "progress",
                        value: function(e) {
                            this.trigger(u["default"].CONTAINER_PROGRESS, e, this.name)
                        }
                    }, {
                        key: "playing",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_PLAY, this.name)
                        }
                    }, {
                        key: "paused",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_PAUSE, this.name)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.playback.play()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.playback.stop(), this.currentTime = 0
                        }
                    }, {
                        key: "pause",
                        value: function(e) {
                            this.playback.pause(e)
                        }
                    }, {
                        key: "ended",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_ENDED, this, this.name), this.currentTime = 0
                        }
                    }, {
                        key: "stopped",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_STOP)
                        }
                    }, {
                        key: "clicked",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_CLICK, this, this.name)
                        }
                    }, {
                        key: "dblClicked",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_DBLCLICK, this, this.name)
                        }
                    }, {
                        key: "onContextMenu",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_CONTEXTMENU, this, this.name)
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            this.trigger(u["default"].CONTAINER_SEEK, e, this.name), this.playback.seek(e)
                        }
                    }, {
                        key: "seekPercentage",
                        value: function(e) {
                            var t = this.getDuration();
                            if (e > 0 && 100 >= e) {
                                var n = t * (e / 100);
                                this.seek(n)
                            }
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.volume = parseInt(e, 10), this.trigger(u["default"].CONTAINER_VOLUME, e, this.name), this.playback.volume(e)
                        }
                    }, {
                        key: "fullscreen",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_FULLSCREEN, this.name)
                        }
                    }, {
                        key: "buffering",
                        value: function() {
                            (0, k["default"])(this.options.parentElement).find(".video-js").hasClass("vjs-waiting") || (0, k["default"])(this.options.parentElement).find(".video-js").addClass("vjs-waiting"), this.trigger(u["default"].CONTAINER_STATE_BUFFERING, this.name)
                        }
                    }, {
                        key: "bufferfull",
                        value: function() {
                            (0, k["default"])(this.options.parentElement).find(".video-js").removeClass("vjs-waiting"), this.trigger(u["default"].CONTAINER_STATE_BUFFERFULL, this.name)
                        }
                    }, {
                        key: "addPlugin",
                        value: function(e) {
                            this.plugins.push(e)
                        }
                    }, {
                        key: "hasPlugin",
                        value: function(e) {
                            return !!this.getPlugin(e)
                        }
                    }, {
                        key: "getPlugin",
                        value: function(e) {
                            return (0, y["default"])(this.plugins, function(t) {
                                return t.name === e
                            })
                        }
                    }, {
                        key: "mouseEnter",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_MOUSE_ENTER)
                        }
                    }, {
                        key: "mouseLeave",
                        value: function() {
                            this.trigger(u["default"].CONTAINER_MOUSE_LEAVE)
                        }
                    }, {
                        key: "settingsUpdate",
                        value: function() {
                            this.settings = this.playback.settings, this.trigger(u["default"].CONTAINER_SETTINGSUPDATE)
                        }
                    }, {
                        key: "highDefinitionUpdate",
                        value: function(e) {
                            this.trigger(u["default"].CONTAINER_HIGHDEFINITIONUPDATE, e)
                        }
                    }, {
                        key: "isHighDefinitionInUse",
                        value: function() {
                            return this.playback.isHighDefinitionInUse()
                        }
                    }, {
                        key: "disableMediaControl",
                        value: function() {
                            this.mediaControlDisabled = !0, this.trigger(u["default"].CONTAINER_MEDIACONTROL_DISABLE)
                        }
                    }, {
                        key: "enableMediaControl",
                        value: function() {
                            this.mediaControlDisabled = !1, this.trigger(u["default"].CONTAINER_MEDIACONTROL_ENABLE)
                        }
                    }, {
                        key: "configure",
                        value: function(e) {
                            this.options = k["default"].extend(this.options, e), this.trigger(u["default"].CONTAINER_OPTIONS_CHANGE)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.$el.append(this.playback.render().el), this.$el.append(this.template({
                                poster: this.options.poster
                            })), this
                        }
                    }]), t
                }(f["default"]);
            t["default"] = T, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(89)
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(10),
                u = i(l),
                c = n(3),
                f = i(c),
                h = n(90),
                d = i(h),
                v = n(6),
                p = i(v),
                g = n(15),
                y = i(g),
                m = function(e) {
                    function t(e, n) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.options = e, this.loader = n
                    }
                    return a(t, e), o(t, [{
                        key: "createContainers",
                        value: function() {
                            var e = this;
                            return p["default"].Deferred(function(t) {
                                t.resolve(e.options.sources.map(function(t) {
                                    return e.createContainer(t)
                                }))
                            })
                        }
                    }, {
                        key: "findPlaybackPlugin",
                        value: function(e, t) {
                            return (0, y["default"])(this.loader.playbackPlugins, function(n) {
                                return n.canPlay(e, t)
                            })
                        }
                    }, {
                        key: "createContainer",
                        value: function(e) {
                            var t = null,
                                n = this.options.mimeType;
                            "string" == typeof e || e instanceof String ? t = e.toString() : (t = e.source.toString(), e.mimeType && (n = e.mimeType)), t.match(/^\/\//) && (t = window.location.protocol + t);
                            var i = p["default"].extend({}, this.options, {
                                    src: t,
                                    mimeType: n
                                }),
                                r = this.findPlaybackPlugin(t, n),
                                a = new r(i);
                            i = p["default"].extend(i, {
                                playback: a
                            });
                            var o = new d["default"](i),
                                s = p["default"].Deferred();
                            return s.promise(o), this.addContainerPlugins(o, t), this.listenToOnce(o, f["default"].CONTAINER_READY, function() {
                                return s.resolve(o)
                            }), o
                        }
                    }, {
                        key: "addContainerPlugins",
                        value: function(e, t) {
                            this.loader.containerPlugins.forEach(function(t) {
                                e.addPlugin(new t(e))
                            })
                        }
                    }]), t
                }(u["default"]);
            t["default"] = m, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(91)
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(4),
                u = n(3),
                c = i(u),
                f = n(13),
                h = i(f),
                d = n(5),
                v = i(d),
                p = n(92),
                g = i(p),
                y = n(99),
                m = i(y),
                E = n(18),
                b = i(E),
                k = n(23),
                _ = i(k),
                A = n(15),
                T = i(A),
                L = n(6),
                S = i(L),
                R = function(e) {
                    function t(e) {
                        var n = this;
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.playerInfo = _["default"].getInstance(e.playerId), this.options = e, this.plugins = [], this.containers = [], this.setupMediaControl(null), (0, S["default"])(document).bind("fullscreenchange", function() {
                            return n.exit()
                        }), (0, S["default"])(document).bind("MSFullscreenChange", function() {
                            return n.exit()
                        }), (0, S["default"])(document).bind("mozfullscreenchange", function() {
                            return n.exit()
                        })
                    }
                    return a(t, e), o(t, [{
                        key: "events",
                        get: function() {
                            return {
                                webkitfullscreenchange: "exit",
                                "click .vjs-big-play-button": "play",
                                mouseover: "showMediaControl",
                                mousemove: "showMediaControl",
                                mouseleave: "hideMediaControl"
                            }
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return {
                                "class": "video-js vjs-default-skin vjs-paused vjs-big-play-centered"
                            }
                        }
                    }]), o(t, [{
                        key: "createContainers",
                        value: function(e) {
                            var t = this;
                            this.defer = S["default"].Deferred(), this.defer.promise(this), this.containerFactory = new g["default"](e, e.loader), this.containerFactory.createContainers().then(function(e) {
                                return t.setupContainers(e)
                            }).then(function(e) {
                                return t.resolveOnContainersReady(e)
                            })
                        }
                    }, {
                        key: "updateSize",
                        value: function() {
                            l.Fullscreen.isFullscreen() ? this.setFullscreen() : this.setPlayerSize(), b["default"].trigger(this.options.playerId + ":" + c["default"].PLAYER_RESIZE, this.playerInfo.currentSize)
                        }
                    }, {
                        key: "setFullscreen",
                        value: function() {
                            v["default"].isiOS || (this.$el.addClass("fullscreen"), this.$el.removeAttr("style"), this.playerInfo.previousSize = {
                                width: this.options.width,
                                height: this.options.height
                            }, this.playerInfo.currentSize = {
                                width: (0, S["default"])(window).width(),
                                height: (0, S["default"])(window).height()
                            })
                        }
                    }, {
                        key: "setPlayerSize",
                        value: function() {
                            this.$el.removeClass("fullscreen"), this.playerInfo.currentSize = this.playerInfo.previousSize, this.playerInfo.previousSize = {
                                width: (0, S["default"])(window).width(),
                                height: (0, S["default"])(window).height()
                            }, this.resize(this.playerInfo.currentSize)
                        }
                    }, {
                        key: "resize",
                        value: function(e) {
                            (0, l.isNumber)(e.height) || (0, l.isNumber)(e.width) ? (this.el.style.height = e.height + "px", this.el.style.width = e.width + "px") : (this.el.style.height = "" + e.height, this.el.style.width = "" + e.width), "0px" == (0, S["default"])(this.options.parentElement).css("height") && (0, S["default"])(this.options.parentElement).css({
                                width: e.width,
                                height: e.height
                            }), this.playerInfo.previousSize = {
                                width: this.options.width,
                                height: this.options.height
                            }, this.options.width = e.width, this.options.height = e.height, this.playerInfo.currentSize = e, b["default"].trigger(this.options.playerId + ":" + c["default"].PLAYER_RESIZE, this.playerInfo.currentSize)
                        }
                    }, {
                        key: "enableResizeObserver",
                        value: function() {
                            var e = this,
                                t = function() {
                                    e.resizeObserverInterval && clearInterval(e.resizeObserverInterval), e.playerInfo.computedSize.width == e.el.clientWidth && e.playerInfo.computedSize.height == e.el.clientHeight || (e.playerInfo.computedSize = {
                                        width: e.el.clientWidth,
                                        height: e.el.clientHeight
                                    }, b["default"].trigger(e.options.playerId + ":" + c["default"].PLAYER_RESIZE, e.playerInfo.computedSize))
                                };
                            this.resizeObserverInterval = setInterval(t, 500)
                        }
                    }, {
                        key: "disableResizeObserver",
                        value: function() {
                            this.resizeObserverInterval && clearInterval(this.resizeObserverInterval)
                        }
                    }, {
                        key: "resolveOnContainersReady",
                        value: function(e) {
                            var t = this;
                            S["default"].when.apply(S["default"], e).done(function() {
                                t.defer.resolve(t), t.ready = !0, t.trigger(c["default"].CORE_READY)
                            })
                        }
                    }, {
                        key: "addPlugin",
                        value: function(e) {
                            this.plugins.push(e)
                        }
                    }, {
                        key: "hasPlugin",
                        value: function(e) {
                            return !!this.getPlugin(e)
                        }
                    }, {
                        key: "getPlugin",
                        value: function(e) {
                            return (0, T["default"])(this.plugins, function(t) {
                                return t.name === e
                            })
                        }
                    }, {
                        key: "load",
                        value: function(e, t) {
                            var n = this;
                            this.options.mimeType = t, e = e && e.constructor === Array ? e : [e.toString()], this.containers.forEach(function(e) {
                                return e.destroy()
                            }), this.mediaControl.container = null, this.containerFactory.options = S["default"].extend(this.options, {
                                sources: e
                            }), this.containerFactory.createContainers().then(function(e) {
                                n.setupContainers(e)
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.disableResizeObserver(), this.containers.forEach(function(e) {
                                return e.destroy()
                            }), this.plugins.forEach(function(e) {
                                return e.destroy()
                            }), this.$el.remove(), (0, S["default"])(document).unbind("fullscreenchange"), (0, S["default"])(document).unbind("MSFullscreenChange"), (0, S["default"])(document).unbind("mozfullscreenchange")
                        }
                    }, {
                        key: "exit",
                        value: function() {
                            this.updateSize(), this.mediaControl.show()
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.mediaControl.bigPlay()
                        }
                    }, {
                        key: "setMediaControlContainer",
                        value: function(e) {
                            this.mediaControl.setContainer(e), this.mediaControl.render()
                        }
                    }, {
                        key: "disableMediaControl",
                        value: function() {
                            this.mediaControl.disable(), this.$el.removeClass("nocursor")
                        }
                    }, {
                        key: "enableMediaControl",
                        value: function() {
                            this.mediaControl.enable()
                        }
                    }, {
                        key: "removeContainer",
                        value: function(e) {
                            this.stopListening(e), this.containers = this.containers.filter(function(t) {
                                return t !== e
                            })
                        }
                    }, {
                        key: "appendContainer",
                        value: function(e) {
                            this.listenTo(e, c["default"].CONTAINER_DESTROYED, this.removeContainer), this.containers.push(e)
                        }
                    }, {
                        key: "setupContainers",
                        value: function(e) {
                            return e.map(this.appendContainer.bind(this)), this.trigger(c["default"].CORE_CONTAINERS_CREATED), this.renderContainers(), this.setupMediaControl(this.getCurrentContainer()), this.render(), this.$el.appendTo(this.options.parentElement), this.containers
                        }
                    }, {
                        key: "renderContainers",
                        value: function() {
                            var e = this;
                            this.containers.map(function(t) {
                                return e.el.appendChild(t.render().el)
                            })
                        }
                    }, {
                        key: "createContainer",
                        value: function(e, t) {
                            var n = this.containerFactory.createContainer(e, t);
                            return this.appendContainer(n), this.el.appendChild(n.render().el), n
                        }
                    }, {
                        key: "setupMediaControl",
                        value: function(e) {
                            this.mediaControl ? this.mediaControl.setContainer(e) : (this.mediaControl = this.createMediaControl(S["default"].extend({
                                container: e,
                                focusElement: this.el
                            }, this.options)), this.listenTo(this.mediaControl, c["default"].MEDIACONTROL_FULLSCREEN, this.toggleFullscreen), this.listenTo(this.mediaControl, c["default"].MEDIACONTROL_SHOW, this.onMediaControlShow.bind(this, !0)), this.listenTo(this.mediaControl, c["default"].MEDIACONTROL_HIDE, this.onMediaControlShow.bind(this, !1)))
                        }
                    }, {
                        key: "createMediaControl",
                        value: function(e) {
                            return e.mediacontrol && e.mediacontrol.external ? new e.mediacontrol.external(e) : new m["default"](e).render()
                        }
                    }, {
                        key: "getCurrentContainer",
                        value: function() {
                            return this.mediaControl && this.mediaControl.container ? this.mediaControl.container : this.containers[0]
                        }
                    }, {
                        key: "getCurrentPlayback",
                        value: function() {
                            var e = this.getCurrentContainer();
                            return e && e.playback
                        }
                    }, {
                        key: "getPlaybackType",
                        value: function() {
                            var e = this.getCurrentContainer();
                            return e && e.getPlaybackType()
                        }
                    }, {
                        key: "getCurrentMediaControl",
                        value: function() {
                            var e = this.mediaControl;
                            return e
                        }
                    }, {
                        key: "toggleFullscreen",
                        value: function() {
                            l.Fullscreen.isFullscreen() ? (l.Fullscreen.cancelFullscreen(), v["default"].isiOS || this.$el.removeClass("fullscreen nocursor")) : (l.Fullscreen.requestFullscreen(this.el), v["default"].isiOS || this.$el.addClass("fullscreen")), this.mediaControl.show()
                        }
                    }, {
                        key: "showMediaControl",
                        value: function(e) {
                            this.mediaControl.show(e)
                        }
                    }, {
                        key: "hideMediaControl",
                        value: function(e) {
                            this.mediaControl.hide(this.options.hideMediaControlDelay)
                        }
                    }, {
                        key: "onMediaControlShow",
                        value: function(e) {
                            this.getCurrentContainer().trigger(e ? c["default"].CONTAINER_MEDIACONTROL_SHOW : c["default"].CONTAINER_MEDIACONTROL_HIDE), e ? (this.$el.removeClass("nocursor"), this.$el.removeClass("vjs-user-inactive"), this.$el.addClass("vjs-user-active")) : (this.$el.addClass("vjs-user-inactive"), this.$el.removeClass("vjs-user-active"))
                        }
                    }, {
                        key: "isReady",
                        value: function() {
                            return !!this.ready
                        }
                    }, {
                        key: "configure",
                        value: function(e) {
                            var t = this;
                            this.options = S["default"].extend(this.options, e);
                            var n = e.source || e.sources;
                            n ? this.load(n) : (this.trigger(c["default"].CORE_OPTIONS_CHANGE), this.containers.forEach(function(e) {
                                e.configure(t.options)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.$el.find(".vjs-container").append(this.mediaControl.render().el), this.options.width = this.options.width || this.$el.width(), this.options.height = this.options.height || this.$el.height();
                            var e = {
                                width: this.options.width,
                                height: this.options.height
                            };
                            return this.playerInfo.previousSize = this.playerInfo.currentSize = this.playerInfo.computedSize = e, this.updateSize(), this.previousSize = {
                                width: this.$el.width(),
                                height: this.$el.height()
                            }, this.options.autoPlay && !v["default"].isMobile && this.$el.find(".vjs-big-play-button").hide(), this.enableResizeObserver(), this
                        }
                    }]), t
                }(h["default"]);
            t["default"] = R, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(93)
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(10),
                u = i(l),
                c = n(94),
                f = i(c),
                h = function(e) {
                    function t(e, n) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.player = e, this.options = e.options
                    }
                    return a(t, e), o(t, [{
                        key: "loader",
                        get: function() {
                            return this.player.loader
                        }
                    }]), o(t, [{
                        key: "create",
                        value: function() {
                            return this.options.loader = this.loader, this.core = new f["default"](this.options), this.addCorePlugins(), this.core.createContainers(this.options), this.core
                        }
                    }, {
                        key: "addCorePlugins",
                        value: function() {
                            var e = this;
                            return this.loader.corePlugins.forEach(function(t) {
                                var n = new t(e.core);
                                e.core.addPlugin(n), e.setupExternalInterface(n)
                            }), this.core
                        }
                    }, {
                        key: "setupExternalInterface",
                        value: function(e) {
                            var t = e.getExternalInterface();
                            for (var n in t) this.player[n] = t[n].bind(e)
                        }
                    }]), t
                }(u["default"]);
            t["default"] = h, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(95)
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(98)
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(10),
                u = i(l),
                c = n(23),
                f = i(c),
                h = n(72),
                d = i(h),
                v = n(108),
                p = i(v),
                g = n(30),
                y = i(g),
                m = n(106),
                E = i(m),
                b = n(111),
                k = i(b),
                _ = n(112),
                A = i(_),
                T = function(e) {
                    function t(e, n) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.playerId = n, this.playbackPlugins = [p["default"], y["default"], E["default"]], this.containerPlugins = [k["default"]], this.corePlugins = [A["default"]], e && (Array.isArray(e) || this.validateExternalPluginsType(e), this.addExternalPlugins(e))
                    }
                    return a(t, e), o(t, [{
                        key: "addExternalPlugins",
                        value: function(e) {
                            var t = function(e) {
                                return e.prototype.name
                            };
                            e.playback && (this.playbackPlugins = (0, d["default"])(e.playback.concat(this.playbackPlugins), t)), e.container && (this.containerPlugins = (0, d["default"])(e.container.concat(this.containerPlugins), t)), e.core && (this.corePlugins = (0, d["default"])(e.core.concat(this.corePlugins), t)), f["default"].getInstance(this.playerId).playbackPlugins = this.playbackPlugins
                        }
                    }, {
                        key: "validateExternalPluginsType",
                        value: function(e) {
                            var t = ["playback", "container", "core"];
                            t.forEach(function(t) {
                                (e[t] || []).forEach(function(e) {
                                    var n = "external " + e.type + " plugin on " + t + " array";
                                    if (e.type !== t) throw new ReferenceError(n)
                                })
                            })
                        }
                    }]), t
                }(u["default"]);
            t["default"] = T, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(100)
        },
        function(e, t, n) {
            (function(i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    l = function(e, t, n) {
                        for (var i = !0; i;) {
                            var r = e,
                                a = t,
                                o = n;
                            i = !1, null === r && (r = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(r, a);
                            if (void 0 !== s) {
                                if ("value" in s) return s.value;
                                var l = s.get;
                                if (void 0 === l) return;
                                return l.call(o)
                            }
                            var u = Object.getPrototypeOf(r);
                            if (null === u) return;
                            e = u, t = a, n = o, i = !0, s = u = void 0
                        }
                    },
                    u = n(4),
                    c = n(3),
                    f = r(c),
                    h = n(28),
                    d = r(h),
                    v = n(11),
                    p = r(v),
                    g = n(13),
                    y = r(g),
                    m = n(12),
                    E = r(m),
                    b = n(5),
                    k = r(b),
                    _ = n(18),
                    A = r(_),
                    T = n(6),
                    L = r(T),
                    S = n(117),
                    R = r(S),
                    O = function(e) {
                        function t(e) {
                            var n = this;
                            a(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.options = e, this.mute = this.options.mute, this.hasStarted = !1, this.persistConfig = this.options.persistConfig, this.actualLiveTime = 0, this.lastActualLiveTime = 0, this.container = e.container, this.currentPositionValue = null, this.currentDurationValue = null;
                            var i = this.persistConfig ? u.Config.restore("volume") : 100;
                            this.setVolume(this.mute ? 0 : i), this.keepVisible = !1, this.addEventListeners(), this.settings = {
                                left: ["play", "stop", "pause"],
                                right: ["volume"],
                                "default": ["position", "seekbar", "duration"]
                            }, this.container ? L["default"].isEmptyObject(this.container.settings) || (this.settings = L["default"].extend({}, this.container.settings)) : this.settings = {}, this.disabled = !1, (this.container && this.container.mediaControlDisabled || this.options.chromeless) && this.disable(), this.stopDragHandler = function(e) {
                                return n.stopDrag(e)
                            }, this.updateDragHandler = function(e) {
                                return n.updateDrag(e)
                            }, (0, L["default"])(document).bind("mouseup", this.stopDragHandler), (0, L["default"])(document).bind("mousemove", this.updateDragHandler)
                        }
                        return o(t, e), s(t, [{
                            key: "name",
                            get: function() {
                                return "MediaControl"
                            }
                        }, {
                            key: "attributes",
                            get: function() {
                                return {
                                    "class": "vjs-control-bar"
                                }
                            }
                        }, {
                            key: "events",
                            get: function() {
                                return {
                                    "click .vjs-big-play-button": "bigPlay",
                                    "click .vjs-big-pause-button": "bigPause",
                                    "click .vjs-play-control": "togglePlayPause",
                                    "click .vjs-stop-control": "stop",
                                    "click .vjs-fullscreen-control": "toggleFullscreen",
                                    "click .vjs-progress-holder": "seek",
                                    "click .vjs-volume-bar": "onVolumeClick",
                                    "click .vjs-mute-control": "toggleMute",
                                    "click .vjs-dvr-control": "backToLive",
                                    "mouseover .vjs-progress-holder": "openTimeTooltip",
                                    "mousedown .vjs-volume-handle": "startVolumeDrag",
                                    "mousemove .vjs-volume-handle": "mousemoveOnVolumeBar",
                                    "mousedown .vjs-seek-handle": "startSeekDrag",
                                    "mousemove .vjs-progress-holder": "mousemoveOnSeekBar",
                                    "mouseleave .vjs-progress-holder": "mouseleaveOnSeekBar"
                                }
                            }
                        }, {
                            key: "template",
                            get: function() {
                                return (0, E["default"])(R["default"])
                            }
                        }, {
                            key: "volume",
                            get: function() {
                                return this.container && this.container.isReady ? this.container.volume : this.intendedVolume
                            }
                        }]), s(t, [{
                            key: "addEventListeners",
                            value: function() {
                                this.container && (A["default"].on(this.options.playerId + ":" + f["default"].PLAYER_RESIZE, this.playerResize, this), this.listenTo(this.container, f["default"].CONTAINER_LOADEDMETADATA, this.loadmetadata), this.listenTo(this.container, f["default"].CONTAINER_PLAY, this.changeTogglePlay), this.listenTo(this.container, f["default"].CONTAINER_PAUSE, this.changeTogglePlay), this.listenTo(this.container, f["default"].CONTAINER_TIMEUPDATE, this.onTimeUpdate), this.listenTo(this.container, f["default"].CONTAINER_PROGRESS, this.updateProgressBar), this.listenTo(this.container, f["default"].CONTAINER_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.container, f["default"].CONTAINER_PLAYBACKDVRSTATECHANGED, this.toggleDvrActualLiveTime), this.listenTo(this.container, f["default"].CONTAINER_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.container, f["default"].CONTAINER_MEDIACONTROL_DISABLE, this.disable), this.listenTo(this.container, f["default"].CONTAINER_MEDIACONTROL_ENABLE, this.enable), this.listenTo(this.container, f["default"].CONTAINER_ENDED, this.ended), this.listenTo(this.container, f["default"].CONTAINER_VOLUME, this.onVolumeChanged))
                            }
                        }, {
                            key: "toggleDvrActualLiveTime",
                            value: function(e) {
                                e ? this.enableDvrActualLiveTime() : this.disableDvrActualLiveTime()
                            }
                        }, {
                            key: "openTimeTooltip",
                            value: function(e) {
                                (0, L["default"])(this.options.parentElement).find(".vjs-mouse-display").show(), this.actualLiveTime = 0, this.updateTimeTooltip(e)
                            }
                        }, {
                            key: "closeTimeTooltip",
                            value: function(e) {
                                (0, L["default"])(this.options.parentElement).find(".vjs-mouse-display").hide()
                            }
                        }, {
                            key: "updateTimeTooltip",
                            value: function(e) {
                                var t = e.pageX - this.$seekBarContainer.offset().left,
                                    n = t / this.$seekBarContainer.width() * 100;
                                n = Math.min(100, Math.max(n, 0));
                                var i;
                                if (this.container.isDvrEnabled()) {
                                    (0 === this.lastActualLiveTime || this.container.isPlaying()) && (this.lastActualLiveTime = (new Date).getTime());
                                    var r = this.currentDurationValue * (1 - n / 100),
                                        a = this.lastActualLiveTime - 1e3 * r - 1e4,
                                        i = ("00" + new Date(a).getHours()).slice(-2) + ":" + ("00" + new Date(a).getMinutes()).slice(-2) + ":" + ("00" + new Date(a).getSeconds()).slice(-2)
                                } else i = (0, u.formatTime)(this.currentDurationValue * (n / 100));
                                t > (0, L["default"])(this.options.parentElement).find(".vjs-mouse-display").width() / 2 && (t -= (0, L["default"])(this.options.parentElement).find(".vjs-mouse-display").width() / 2), t = Math.min(this.$seekBarContainer.width() - (0, L["default"])(this.options.parentElement).find(".vjs-mouse-display").width(), t), (0, L["default"])(this.options.parentElement).find(".vjs-mouse-display").html(i), (0, L["default"])(this.options.parentElement).find(".vjs-mouse-display").css({
                                    top: "-20px",
                                    left: t + "px"
                                })
                            }
                        }, {
                            key: "loadmetadata",
                            value: function(e) {
                                this.container.getPlaybackType() == p["default"].LIVE && (this.listenToOnce(this.container, f["default"].CONTAINER_PLAYBACKSTATE, this.checkDvr), this.container.isDvrEnabled() && !(0, L["default"])(this.options.parentElement).find(".vjs-default-skin").hasClass("vjs-dvr-live") ? (0, L["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-dvr-live") : (0, L["default"])(this.options.parentElement).find(".vjs-default-skin").hasClass("vjs-live") || (0, L["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-live"))
                            }
                        }, {
                            key: "checkDvr",
                            value: function() {
                                this.container.getPlaybackType() == p["default"].LIVE && this.container.isDvrEnabled() && !(0, L["default"])(this.options.parentElement).find(".vjs-default-skin").hasClass("vjs-dvr-live") && (0, L["default"])(this.options.parentElement).find(".vjs-default-skin").addClass("vjs-dvr-live").removeClass("vjs-live")
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                this.disabled = !0, this.hide(), this.$el.hide()
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                this.options.chromeless || (this.disabled = !1, this.show())
                            }
                        }, {
                            key: "bigPlay",
                            value: function() {
                                (0, L["default"])(this.options.parentElement).find(".vjs-big-play-button").hide(), (0, L["default"])(this.options.parentElement).find(".vjs-poster").hide(), (0, L["default"])(this.options.parentElement).find(".video-js").addClass("vjs-waiting"), this.show(), this.container.play()
                            }
                        }, {
                            key: "play",
                            value: function() {
                                this.container.play()
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                this.container.pause()
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this.container.stop()
                            }
                        }, {
                            key: "onVolumeChanged",
                            value: function(e) {
                                this.mute = 0 === this.currentVolume, this.setVolumeLevel(e), this.persistConfig && u.Config.persist("volume", e)
                            }
                        }, {
                            key: "changeTogglePlay",
                            value: function() {
                                this.container && this.container.isPlaying() ? (this.disabled || this.show(), (0, L["default"])(this.options.parentElement).find(".video-js").removeClass("vjs-paused").addClass("vjs-playing").addClass("vjs-user-active"), this.$el.find(".vjs-play-control").removeClass("vjs-paused").addClass("vjs-playing"), this.$playPauseToggle.find(".vjs-control-content").html('<span class="vjs-control-text">Pause</span>'), this.trigger(f["default"].MEDIACONTROL_PLAYING)) : ((0, L["default"])(this.options.parentElement).find(".video-js").removeClass("vjs-playing").addClass("vjs-paused"), this.$el.find(".vjs-play-control").removeClass("vjs-playing").addClass("vjs-paused"), this.$playPauseToggle.find(".vjs-control-content").html('<span class="vjs-control-text">Play</span>'), this.trigger(f["default"].MEDIACONTROL_NOTPLAYING))
                            }
                        }, {
                            key: "mousemoveOnSeekBar",
                            value: function(e) {
                                if (this.container.settings.seekEnabled) {
                                    var t = e.pageX - this.$seekBarContainer.offset().left - this.$seekBarHover.width() / 2;
                                    this.$seekBarHover.css({
                                        left: t
                                    }), this.updateTimeTooltip(e)
                                }
                                this.container.trigger(f["default"].MEDIACONTROL_MOUSEMOVE_SEEKBAR, e)
                            }
                        }, {
                            key: "mouseleaveOnSeekBar",
                            value: function(e) {
                                this.closeTimeTooltip(e), this.trigger(f["default"].MEDIACONTROL_MOUSELEAVE_SEEKBAR, e)
                            }
                        }, {
                            key: "mousemoveOnVolumeBar",
                            value: function(e) {
                                this.draggingVolumeBar && this.setVolume(this.getVolumeFromUIEvent(e))
                            }
                        }, {
                            key: "playerResize",
                            value: function(e) {
                                u.Fullscreen.isFullscreen() ? this.$fullscreenToggle.addClass("shrink") : this.$fullscreenToggle.removeClass("shrink"), this.$el.removeClass("w320"), (e.width <= 320 || this.options.hideVolumeBar) && this.$el.addClass("w320")
                            }
                        }, {
                            key: "togglePlayPause",
                            value: function() {
                                return this.container.isPlaying() ? this.container.pause() : this.container.play(), !1
                            }
                        }, {
                            key: "togglePlayStop",
                            value: function() {
                                this.container.isPlaying() ? this.container.stop() : this.container.play()
                            }
                        }, {
                            key: "startSeekDrag",
                            value: function(e) {
                                this.container.settings.seekEnabled && (this.draggingSeekBar = !0, this.$el.addClass("dragging"), this.$seekBarLoaded.addClass("media-control-notransition"), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition"), e && e.preventDefault())
                            }
                        }, {
                            key: "startVolumeDrag",
                            value: function(e) {
                                this.draggingVolumeBar = !0, this.$el.addClass("dragging"), e && e.preventDefault()
                            }
                        }, {
                            key: "stopDrag",
                            value: function(e) {
                                this.draggingSeekBar && this.seek(e), this.$el.removeClass("dragging"), this.$seekBarLoaded.removeClass("media-control-notransition"), this.$seekBarPosition.removeClass("media-control-notransition"), this.$seekBarScrubber.removeClass("media-control-notransition dragging"), this.draggingSeekBar = !1, this.draggingVolumeBar = !1
                            }
                        }, {
                            key: "updateDrag",
                            value: function(e) {
                                if (this.draggingSeekBar) {
                                    e.preventDefault();
                                    var t = (e.pageX - this.$seekBarContainer.offset().left) / this.$seekBarContainer.width() * 100;
                                    t = Math.min(100, Math.max(t, 0)), this.$el.find(".vjs-play-progress").css("width", t + "%"), this.$el.find(".vjs-seek-handle").css("left", t + "%"), this.setSeekPercentage(t)
                                } else this.draggingVolumeBar && (e.preventDefault(), this.setVolume(this.getVolumeFromUIEvent(e)))
                            }
                        }, {
                            key: "onVolumeClick",
                            value: function(e) {
                                this.setVolume(this.getVolumeFromUIEvent(e))
                            }
                        }, {
                            key: "getVolumeFromUIEvent",
                            value: function(e) {
                                var t = e.pageX - this.$volumeBarContainer.offset().left,
                                    n = t / this.$volumeBarContainer.width() * 100;
                                return n = Math.min(100, Math.max(n, 0)), this.$el.find(".vjs-volume-handle").css("left", n + "%"), n
                            }
                        }, {
                            key: "toggleMute",
                            value: function() {
                                this.setVolume(this.muted ? 100 : 0)
                            }
                        }, {
                            key: "setVolume",
                            value: function(e) {
                                var t = this;
                                this.intendedVolume = e, this.persistConfig && u.Config.persist("volume", e);
                                var n = function() {
                                    t.container.isReady ? t.container.setVolume(e) : t.listenToOnce(t.container, f["default"].CONTAINER_LOADEDMETADATA, function() {
                                        t.container.setVolume(e)
                                    })
                                };
                                this.container ? n() : this.listenToOnce(this, f["default"].MEDIACONTROL_CONTAINERCHANGED, function() {
                                    n()
                                })
                            }
                        }, {
                            key: "toggleFullscreen",
                            value: function() {
                                this.trigger(f["default"].MEDIACONTROL_FULLSCREEN, this.name), this.container.fullscreen(), this.resetUserKeepVisible()
                            }
                        }, {
                            key: "setContainer",
                            value: function(e) {
                                this.stopListening(this.container), A["default"].off(this.options.playerId + ":" + f["default"].PLAYER_RESIZE, this.playerResize, this), this.container = e, this.changeTogglePlay(), this.addEventListeners(), this.settingsUpdate(), this.container.trigger(f["default"].CONTAINER_PLAYBACKDVRSTATECHANGED, this.container.isDvrInUse()), this.setVolume(this.intendedVolume), this.container.mediaControlDisabled && this.disable(), this.trigger(f["default"].MEDIACONTROL_CONTAINERCHANGED)
                            }
                        }, {
                            key: "showVolumeBar",
                            value: function() {
                                this.hideVolumeId && clearTimeout(this.hideVolumeId), this.$volumeBarContainer.removeClass("volume-bar-hide")
                            }
                        }, {
                            key: "hideVolumeBar",
                            value: function() {
                                var e = this,
                                    t = arguments.length <= 0 || void 0 === arguments[0] ? 400 : arguments[0];
                                this.$volumeBarContainer && (this.draggingVolumeBar ? this.hideVolumeId = setTimeout(function() {
                                    return e.hideVolumeBar()
                                }, t) : (this.hideVolumeId && clearTimeout(this.hideVolumeId), this.hideVolumeId = setTimeout(function() {
                                    return e.$volumeBarContainer.addClass("volume-bar-hide")
                                }, t)))
                            }
                        }, {
                            key: "ended",
                            value: function() {
                                this.changeTogglePlay()
                            }
                        }, {
                            key: "updateProgressBar",
                            value: function(e) {
                                this.$el.find(".vjs-load-progress").css("width", e.current / e.total * 100 + "%"), this.$seekBarLoaded.css("width", e.current / e.total * 100 + "%")
                            }
                        }, {
                            key: "onTimeUpdate",
                            value: function(e) {
                                if (!this.draggingSeekBar) {
                                    var t = e.current < 0 ? e.total : e.current;
                                    this.currentPositionValue = t, this.currentDurationValue = e.total, this.renderSeekBar()
                                }
                            }
                        }, {
                            key: "enableDvrActualLiveTime",
                            value: function() {
                                var e = this;
                                if (null !== this.currentPositionValue && null !== this.currentDurationValue) {
                                    this.dvrActualLiveTimeInterval && clearInterval(this.dvrActualLiveTimeInterval), this.actualLiveTime = 0, this.$position.html('<span class="vjs-control-text">Current Time </span> --:--:--');
                                    var t = function() {
                                        0 === e.actualLiveTime ? e.actualLiveTime = (new Date).getTime() - (1e3 * e.currentDurationValue - 1e3 * e.currentPositionValue + 1e4) : e.actualLiveTime += 1e3;
                                        var t = ("00" + new Date(e.actualLiveTime).getHours()).slice(-2) + ":" + ("00" + new Date(e.actualLiveTime).getMinutes()).slice(-2) + ":" + ("00" + new Date(e.actualLiveTime).getSeconds()).slice(-2);
                                        e.container.isDvrInUse() && e.container.isPlaying() && e.$position.html('<span class="vjs-control-text">Current Time </span>' + t)
                                    };
                                    this.dvrActualLiveTimeInterval = setInterval(t, 1e3)
                                }
                            }
                        }, {
                            key: "disableDvrActualLiveTime",
                            value: function() {
                                this.dvrActualLiveTimeInterval && clearInterval(this.dvrActualLiveTimeInterval)
                            }
                        }, {
                            key: "renderSeekBar",
                            value: function() {
                                if (null !== this.currentPositionValue && null !== this.currentDurationValue) {
                                    !this.hasStarted && this.currentPositionValue > 0 && ((0, L["default"])(this.options.parentElement).find(".video-js").addClass("vjs-has-started").removeClass("vjs-waiting"), this.hasStarted = !0), this.currentSeekBarPercentage = 0, (this.container.getPlaybackType() !== p["default"].LIVE || this.container.isDvrInUse()) && (this.currentSeekBarPercentage = this.currentPositionValue / this.currentDurationValue * 100);
                                    var e = (0, u.formatTime)(this.currentPositionValue),
                                        t = (0, u.formatTime)(this.currentDurationValue);
                                    e !== this.displayedPosition && (this.container.isDvrInUse() || this.$position.html('<span class="vjs-control-text">Current Time </span>' + e)), t !== this.displayedDuration && "00:01" != t && this.$duration.html('<span class="vjs-control-text">Duration Time </span>' + t), this.displayedPosition = e, this.displayedDuration = t, this.container.isDvrEnabled() && !this.container.isDvrInUse() ? (this.$el.find(".vjs-play-progress").html('<span class="vjs-control-text"><span>Progress</span>: 100%</span>'), this.$el.find(".vjs-remaining-time-display").html('<span class="vjs-control-text">Remaining Time</span> -' + (0, u.formatTime)(this.currentDurationValue - this.currentPositionValue)), this.$el.find(".vjs-play-progress").css("width", "100%"), this.$el.find(".vjs-seek-handle").css("left", "100%"), this.$el.find(".vjs-seek-handle").html('<span class="vjs-control-text">' + e + "</span>")) : (this.$el.find(".vjs-play-progress").html('<span class="vjs-control-text"><span>Progress</span>: ' + this.currentSeekBarPercentage + "%</span>"), this.$el.find(".vjs-remaining-time-display").html('<span class="vjs-control-text">Remaining Time</span> -' + (0, u.formatTime)(this.currentDurationValue - this.currentPositionValue)),
                                        this.$el.find(".vjs-play-progress").css("width", this.currentSeekBarPercentage + "%"), this.$el.find(".vjs-seek-handle").css("left", this.currentSeekBarPercentage + "%"), this.$el.find(".vjs-seek-handle").html('<span class="vjs-control-text">' + e + "</span>"))
                                }
                            }
                        }, {
                            key: "seek",
                            value: function(e) {
                                if (this.container.settings.seekEnabled) {
                                    this.container.isDvrEnabled() && this.container.isDvrInUse() && this.container.trigger(f["default"].CONTAINER_PLAYBACKDVRSTATECHANGED, this.container.isDvrInUse());
                                    var t = (e.pageX - this.$seekBarContainer.offset().left) / this.$seekBarContainer.width() * 100;
                                    return t = Math.min(100, Math.max(t, 0)), this.container.seekPercentage(t), !1
                                }
                            }
                        }, {
                            key: "setKeepVisible",
                            value: function() {
                                this.keepVisible = !0
                            }
                        }, {
                            key: "resetKeepVisible",
                            value: function() {
                                this.keepVisible = !1
                            }
                        }, {
                            key: "setUserKeepVisible",
                            value: function() {
                                this.userKeepVisible = !0
                            }
                        }, {
                            key: "resetUserKeepVisible",
                            value: function() {
                                this.userKeepVisible = !1
                            }
                        }, {
                            key: "isStarted",
                            value: function() {
                                return (0, L["default"])(this.options.parentElement).find(".video-js").hasClass("vjs-has-started")
                            }
                        }, {
                            key: "isVisible",
                            value: function() {
                                return !this.$el.hasClass("media-control-hide")
                            }
                        }, {
                            key: "isError",
                            value: function() {
                                return (0, L["default"])(this.options.parentElement).find(".video-js").hasClass("vjs-error")
                            }
                        }, {
                            key: "show",
                            value: function(e) {
                                var t = this;
                                if (!this.disabled && this.isStarted() && !this.isError()) {
                                    var n = 2e3;
                                    (!e || e.clientX !== this.lastMouseX && e.clientY !== this.lastMouseY || navigator.userAgent.match(/firefox/i)) && (clearTimeout(this.hideId), this.$el.show(), this.trigger(f["default"].MEDIACONTROL_SHOW, this.name), this.hideId = setTimeout(function() {
                                        return t.hide()
                                    }, n), e && (this.lastMouseX = e.clientX, this.lastMouseY = e.clientY))
                                }
                            }
                        }, {
                            key: "hide",
                            value: function() {
                                var e = this,
                                    t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                                    n = t || 2e3;
                                clearTimeout(this.hideId), this.isVisible() && this.options.hideMediaControl !== !1 && (t || this.userKeepVisible || this.keepVisible || this.draggingSeekBar || this.draggingVolumeBar ? this.hideId = setTimeout(function() {
                                    return e.hide()
                                }, n) : (this.trigger(f["default"].MEDIACONTROL_HIDE, this.name), this.hideVolumeBar(0)))
                            }
                        }, {
                            key: "settingsUpdate",
                            value: function() {
                                var e = JSON.stringify(this.settings) !== JSON.stringify(this.container.settings);
                                this.container.getPlaybackType() && e && (this.settings = L["default"].extend({}, this.container.settings))
                            }
                        }, {
                            key: "highDefinitionUpdate",
                            value: function(e) {
                                var t = e ? "addClass" : "removeClass";
                                this.$el.find("button[data-hd-indicator]")[t]("enabled")
                            }
                        }, {
                            key: "createCachedElements",
                            value: function() {
                                var e = this.$el.find(".vjs-control-bar");
                                this.$duration = this.$el.find(".vjs-duration-display"), this.$position = this.$el.find(".vjs-current-time-display"), this.$fullscreenToggle = e.find(".vjs-fullscreen-control"), this.$playPauseToggle = this.$el.find(".vjs-play-control"), this.$playStopToggle = e.find("button.media-control-button[data-playstop]"), this.$seekBarContainer = this.$el.find(".vjs-progress-control"), this.$seekBarHover = e.find(".bar-hover[data-seekbar]"), this.$seekBarLoaded = e.find(".vjs-load-progress"), this.$seekBarPosition = e.find(".bar-fill-2[data-seekbar]"), this.$seekBarScrubber = e.find(".bar-scrubber[data-seekbar]"), this.$volumeBarContainer = this.$el.find(".vjs-volume-control"), this.$volumeContainer = e.find(".drawer-container[data-volume]"), this.$volumeIcon = e.find(".drawer-icon[data-volume]"), this.resetIndicators()
                            }
                        }, {
                            key: "resetIndicators",
                            value: function() {
                                this.displayedPosition = this.$position.text(), this.displayedDuration = this.$duration.text()
                            }
                        }, {
                            key: "setVolumeLevel",
                            value: function(e) {
                                var t = this;
                                if (this.container.isReady && this.$volumeBarContainer) {
                                    this.$el.find(".vjs-volume-bar").attr("aria-valuenow", e), this.$el.find(".vjs-volume-bar").attr("aria-valuetext", e + "%"), this.$el.find(".vjs-volume-level").css("width", e + "%"), this.$el.find(".vjs-volume-handle").css("left", .9 * e + "%");
                                    for (var n = 0; 4 > n; n++) this.$el.find(".vjs-mute-control").removeClass("vjs-vol-" + n);
                                    0 == e ? (this.$el.find(".vjs-mute-control").addClass("vjs-vol-0"), this.$el.find(".vjs-mute-control").html('<span class="vjs-control-text">Mute</span>')) : (33 > e ? this.$el.find(".vjs-mute-control").addClass("vjs-vol-1") : 66 > e ? this.$el.find(".vjs-mute-control").addClass("vjs-vol-2") : this.$el.find(".vjs-mute-control").addClass("vjs-vol-3"), this.$el.find(".vjs-mute-control").html('<span class="vjs-control-text">Unmute</span>'))
                                } else this.listenToOnce(this.container, f["default"].CONTAINER_READY, function() {
                                    return t.setVolumeLevel(e)
                                })
                            }
                        }, {
                            key: "setSeekPercentage",
                            value: function(e) {
                                e = Math.max(Math.min(e, 100), 0), this.displayedSeekBarPercentage === e
                            }
                        }, {
                            key: "seekRelative",
                            value: function(e) {
                                if (this.container.settings.seekEnabled) {
                                    var t = this.container.getCurrentTime(),
                                        n = this.container.getDuration(),
                                        i = Math.min(Math.max(t + e, 0), n);
                                    i = Math.min(100 * i / n, 100), this.container.seekPercentage(i)
                                }
                            }
                        }, {
                            key: "backToLive",
                            value: function() {
                                this.disableDvrActualLiveTime(), this.container.seek(this.container.getDuration() - 36), this.container.isPlaying() || this.container.play(), this.container.playbackDvrStateChanged(!1)
                            }
                        }, {
                            key: "bindKeyEvents",
                            value: function() {
                                var e = this;
                                this.kibo && this.unbindKeyEvents(), this.kibo = new d["default"](this.options.focusElement), this.kibo.down(["space"], function() {
                                    return e.togglePlayPause()
                                }), this.kibo.down(["left"], function() {
                                    return e.seekRelative(-15)
                                }), this.kibo.down(["right"], function() {
                                    return e.seekRelative(15)
                                });
                                var t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                                t.forEach(function(t) {
                                    e.kibo.down(t.toString(), function() {
                                        return e.container.settings.seekEnabled && e.container.seekPercentage(10 * t)
                                    })
                                })
                            }
                        }, {
                            key: "unbindKeyEvents",
                            value: function() {
                                this.kibo.off("space"), this.kibo.off("left"), this.kibo.off("right"), this.kibo.off([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
                            }
                        }, {
                            key: "parseColors",
                            value: function() {
                                if (this.options.mediacontrol) {
                                    var e = this.options.mediacontrol.buttons,
                                        t = this.options.mediacontrol.seekbar;
                                    this.$el.find(".bar-fill-2[data-seekbar]").css("background-color", t), this.$el.find("[data-media-control] > .media-control-icon, .drawer-icon").css("color", e), this.$el.find(".segmented-bar-element[data-volume]").css("boxShadow", "inset 2px 0 0 " + e)
                                }
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.remove(), (0, L["default"])(document).unbind("mouseup", this.stopDragHandler), (0, L["default"])(document).unbind("mousemove", this.updateDragHandler), this.unbindKeyEvents()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = 2e3;
                                this.$el.html(this.template({
                                    settings: this.settings
                                })), this.createCachedElements(), this.changeTogglePlay(), this.hideId = setTimeout(function() {
                                    return e.hide()
                                }, t), k["default"].isSafari && k["default"].isMobile && this.$volumeContainer.css("display", "none"), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition");
                                var n = 0;
                                return this.displayedSeekBarPercentage && (n = this.displayedSeekBarPercentage), this.displayedSeekBarPercentage = null, this.setSeekPercentage(n), i.nextTick(function() {
                                    e.container.settings.seekEnabled || e.$seekBarContainer.addClass("seek-disabled"), e.bindKeyEvents(), e.playerResize({
                                        width: e.options.width,
                                        height: e.options.height
                                    }), e.hideVolumeBar(0)
                                }), this.parseColors(), this.highDefinitionUpdate(), "block" == (0, L["default"])(this.$layer).css("display") && this.$layer.addClass("vjs-user-inactive"), this.trigger(f["default"].MEDIACONTROL_RENDERED), this
                            }
                        }]), t
                    }(y["default"]);
                t["default"] = O, e.exports = t["default"]
            }).call(t, n(27))
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = n(34),
                s = i(o),
                l = function() {
                    function e() {
                        r(this, e), this.p = "RnXcsftYjWRDA^Uy"
                    }
                    return a(e, [{
                        key: "encrypt",
                        value: function(e) {
                            return s["default"].AES.encrypt(e, this.p).toString()
                        }
                    }, {
                        key: "decrypt",
                        value: function(e) {
                            var t = s["default"].AES.decrypt(e, this.p);
                            return t.toString(s["default"].enc.Utf8)
                        }
                    }, {
                        key: "validate",
                        value: function(e) {
                            return this.decrypt(e) == window.location.hostname
                        }
                    }]), e
                }();
            t["default"] = l, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(11),
                u = i(l),
                c = n(12),
                f = i(c),
                h = n(5),
                d = i(h),
                v = n(6),
                p = (i(v), n(118)),
                g = i(p),
                y = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                m = function(e) {
                    function t() {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
                    }
                    return a(t, e), o(t, [{
                        key: "setElement",
                        value: function(e) {
                            this.$el = e, this.el = e[0]
                        }
                    }, {
                        key: "setupFirefox",
                        value: function() {
                            var e = this.$("embed");
                            e.attr("data-flash-playback", this.name), e.addClass(this.attributes["class"]), this.setElement(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.$el.html(this.template({
                                cid: this.cid,
                                swfPath: this.swfPath,
                                baseUrl: this.baseUrl,
                                playbackId: this.uniqueId,
                                wmode: this.wmode,
                                callbackName: "window.flashlsCallbacks." + this.cid
                            })), d["default"].isIE && d["default"].isLegacyIE && this.$el.attr("classid", y), d["default"].isFirefox && this.setupFirefox(), this.el.id = this.cid, this
                        }
                    }, {
                        key: "tagName",
                        get: function() {
                            return "object"
                        }
                    }, {
                        key: "wmode",
                        get: function() {
                            return "transparent"
                        }
                    }, {
                        key: "template",
                        get: function() {
                            return (0, f["default"])(g["default"])
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            var e = "application/x-shockwave-flash";
                            return d["default"].isLegacyIE && (e = ""), {
                                type: e,
                                width: "100%",
                                height: "100%",
                                "data-flash-playback": this.name
                            }
                        }
                    }]), t
                }(u["default"]);
            t["default"] = m, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = n(102), e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(103),
                u = i(l),
                c = n(3),
                f = i(c),
                h = n(12),
                d = (i(h), n(11)),
                v = i(d),
                p = n(18),
                g = i(p),
                y = n(5),
                m = i(y),
                E = n(105),
                b = i(E),
                k = n(6),
                _ = i(k),
                A = 60,
                T = -1,
                L = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.src = e.src, this.swfPath = e.swfPath, this.baseUrl = e.baseUrl, this.initHlsParameters(e), this.highDefinition = !1, this.autoPlay = e.autoPlay, this.loop = e.loop, this.defaultSettings = {
                            left: ["playstop"],
                            "default": ["seekbar"],
                            right: ["fullscreen", "volume", "hd-indicator"],
                            seekEnabled: !1
                        }, this.settings = _["default"].extend({}, this.defaultSettings), this.playbackType = v["default"].LIVE, this.addListeners()
                    }
                    return a(t, e), o(t, [{
                        key: "name",
                        get: function() {
                            return "flashls"
                        }
                    }, {
                        key: "levels",
                        get: function() {
                            return this._levels || []
                        }
                    }, {
                        key: "currentLevel",
                        get: function() {
                            return null === this._currentLevel || void 0 === this._currentLevel ? T : this._currentLevel
                        },
                        set: function(e) {
                            this._currentLevel = e, this.trigger(f["default"].PLAYBACK_LEVEL_SWITCH_START), this.el.playerSetCurrentLevel(e)
                        }
                    }]), o(t, [{
                        key: "initHlsParameters",
                        value: function(e) {
                            this.autoStartLoad = void 0 === e.autoStartLoad ? !0 : e.autoStartLoad, this.capLevelToStage = void 0 === e.capLevelToStage ? !1 : e.capLevelToStage, this.maxLevelCappingMode = void 0 === e.maxLevelCappingMode ? "downscale" : e.maxLevelCappingMode, this.minBufferLength = void 0 === e.minBufferLength ? -1 : e.minBufferLength, this.minBufferLengthCapping = void 0 === e.minBufferLengthCapping ? -1 : e.minBufferLengthCapping, this.maxBufferLength = void 0 === e.maxBufferLength ? 120 : e.maxBufferLength, this.maxBackBufferLength = void 0 === e.maxBackBufferLength ? 120 : e.maxBackBufferLength, this.lowBufferLength = void 0 === e.lowBufferLength ? 3 : e.lowBufferLength, this.mediaTimePeriod = void 0 === e.mediaTimePeriod ? 100 : e.mediaTimePeriod, this.fpsDroppedMonitoringPeriod = void 0 === e.fpsDroppedMonitoringPeriod ? 5e3 : e.fpsDroppedMonitoringPeriod, this.fpsDroppedMonitoringThreshold = void 0 === e.fpsDroppedMonitoringThreshold ? .2 : e.fpsDroppedMonitoringThreshold, this.capLevelonFPSDrop = void 0 === e.capLevelonFPSDrop ? !1 : e.capLevelonFPSDrop, this.smoothAutoSwitchonFPSDrop = void 0 === e.smoothAutoSwitchonFPSDrop ? this.capLevelonFPSDrop : e.smoothAutoSwitchonFPSDrop, this.switchDownOnLevelError = void 0 === e.switchDownOnLevelError ? !0 : e.switchDownOnLevelError, this.seekMode = void 0 === e.seekMode ? "ACCURATE" : e.seekMode, this.keyLoadMaxRetry = void 0 === e.keyLoadMaxRetry ? 3 : e.keyLoadMaxRetry, this.keyLoadMaxRetryTimeout = void 0 === e.keyLoadMaxRetryTimeout ? 64e3 : e.keyLoadMaxRetryTimeout, this.fragmentLoadMaxRetry = void 0 === e.fragmentLoadMaxRetry ? 3 : e.fragmentLoadMaxRetry, this.fragmentLoadMaxRetryTimeout = void 0 === e.fragmentLoadMaxRetryTimeout ? 4e3 : e.fragmentLoadMaxRetryTimeout, this.fragmentLoadSkipAfterMaxRetry = void 0 === e.fragmentLoadSkipAfterMaxRetry ? !0 : e.fragmentLoadSkipAfterMaxRetry, this.flushLiveURLCache = void 0 === e.flushLiveURLCache ? !1 : e.flushLiveURLCache, this.initialLiveManifestSize = void 0 === e.initialLiveManifestSize ? 1 : e.initialLiveManifestSize, this.manifestLoadMaxRetry = void 0 === e.manifestLoadMaxRetry ? 3 : e.manifestLoadMaxRetry, this.manifestLoadMaxRetryTimeout = void 0 === e.manifestLoadMaxRetryTimeout ? 64e3 : e.manifestLoadMaxRetryTimeout, this.manifestRedundantLoadmaxRetry = void 0 === e.manifestRedundantLoadmaxRetry ? 3 : e.manifestRedundantLoadmaxRetry, this.startFromBitrate = void 0 === e.startFromBitrate ? -1 : e.startFromBitrate, this.startFromLevel = void 0 === e.startFromLevel ? -1 : e.startFromLevel, this.autoStartMaxDuration = void 0 === e.autoStartMaxDuration ? -1 : e.autoStartMaxDuration, this.seekFromLevel = void 0 === e.seekFromLevel ? -1 : e.seekFromLevel, this.useHardwareVideoDecoder = void 0 === e.useHardwareVideoDecoder ? !0 : e.useHardwareVideoDecoder, this.hlsLogEnabled = void 0 === e.hlsLogEnabled ? !0 : e.hlsLogEnabled, this.logDebug = void 0 === e.logDebug ? !1 : e.logDebug, this.logDebug2 = void 0 === e.logDebug2 ? !1 : e.logDebug2, this.logWarn = void 0 === e.logWarn ? !0 : e.logWarn, this.logError = void 0 === e.logError ? !0 : e.logError, this.hlsMinimumDvrSize = void 0 === e.hlsMinimumDvrSize ? 60 : e.hlsMinimumDvrSize
                        }
                    }, {
                        key: "addListeners",
                        value: function() {
                            var e = this;
                            g["default"].on(this.cid + ":flashready", function() {
                                return e.bootstrap()
                            }), g["default"].on(this.cid + ":timeupdate", function(t) {
                                return e.updateTime(t)
                            }), g["default"].on(this.cid + ":playbackstate", function(t) {
                                return e.setPlaybackState(t)
                            }), g["default"].on(this.cid + ":levelchanged", function(t) {
                                return e.levelChanged(t)
                            }), g["default"].on(this.cid + ":error", function(t, n, i) {
                                return e.flashPlaybackError(t, n, i)
                            }), g["default"].on(this.cid + ":fragmentloaded", function(t) {
                                return e.onFragmentLoaded(t)
                            }), g["default"].once(this.cid + ":manifestloaded", function(t, n) {
                                return e.manifestLoaded(t, n)
                            })
                        }
                    }, {
                        key: "stopListening",
                        value: function() {
                            s(Object.getPrototypeOf(t.prototype), "stopListening", this).call(this), g["default"].off(this.cid + ":flashready"), g["default"].off(this.cid + ":timeupdate"), g["default"].off(this.cid + ":playbackstate"), g["default"].off(this.cid + ":levelchanged"), g["default"].off(this.cid + ":playbackerror"), g["default"].off(this.cid + ":fragmentloaded"), g["default"].off(this.cid + ":manifestloaded")
                        }
                    }, {
                        key: "bootstrap",
                        value: function() {
                            var e = this;
                            this.el.playerLoad ? (this.el.width = "100%", this.el.height = "100%", this.isReadyState = !0, this.srcLoaded = !1, this.currentState = "IDLE", this.setFlashSettings(), this.updatePlaybackType(), (this.autoPlay || this._shouldPlayOnManifestLoaded) && setTimeout(function() {
                                return e.play()
                            }, 200), this.trigger(f["default"].PLAYBACK_READY, this.name)) : (this._bootstrapAttempts = this._bootstrapAttempts || 0, ++this._bootstrapAttempts <= A ? setTimeout(function() {
                                return e.bootstrap()
                            }, 50) : this.trigger(f["default"].PLAYBACK_ERROR, {
                                message: "Max number of attempts reached"
                            }, this.name))
                        }
                    }, {
                        key: "setFlashSettings",
                        value: function() {
                            this.el.playerSetminBufferLength(this.minBufferLength), this.el.playerSetmaxBufferLength(this.maxBufferLength), this.el.playerSetlowBufferLength(this.lowBufferLength), this.el.playerCapLeveltoStage(this.capLevelToStage), this.el.playerSetstartFromLevel(this.startFromLevel), this.el.playerSetseekFromLevel(this.seekFromLevel), this.el.playerSetUseHardwareVideoDecoder(this.useHardwareVideoDecoder), this.el.playerSetflushLiveURLCache(this.flushLiveURLCache), this.el.playerSetLogDebug(this.logDebug), this.el.playerSetLogDebug2(this.logDebug2), this.el.playerSetSeekMode(this.seekMode)
                        }
                    }, {
                        key: "setSetMinBufferLength",
                        value: function(e) {
                            this.minBufferLength = e, this.el.playerSetminBufferLength(this.minBufferLength)
                        }
                    }, {
                        key: "setMaxBufferLength",
                        value: function(e) {
                            this.maxBufferLength = e, this.el.playerSetmaxBufferLength(this.maxBufferLength)
                        }
                    }, {
                        key: "setCapLevelToStage",
                        value: function(e) {
                            this.capLevelToStage = e, this.el.playerCapLeveltoStage(this.capLevelToStage)
                        }
                    }, {
                        key: "setLowBufferLength",
                        value: function(e) {
                            this.lowBufferLength = e, this.el.playerSetlowBufferLength(this.lowBufferLength)
                        }
                    }, {
                        key: "setMaxBackBufferLength",
                        value: function(e) {
                            this.maxBackBufferLength = e, this.el.playerSetbackBufferLength(this.maxBackBufferLength)
                        }
                    }, {
                        key: "setStartFromLevel",
                        value: function(e) {
                            this.startFromLevel = e, this.el.playerSetstartFromLevel(this.startFromLevel)
                        }
                    }, {
                        key: "setSeekFromLevel",
                        value: function(e) {
                            this.seekFromLevel = e, this.el.playerSetseekFromLevel(this.seekFromLevel)
                        }
                    }, {
                        key: "setUseHardwareVideoDecoder",
                        value: function(e) {
                            this.useHardwareVideoDecoder = e, this.el.playerSetUseHardwareVideoDecoder(this.useHardwareVideoDecoder)
                        }
                    }, {
                        key: "setFlushLiveURLCache",
                        value: function(e) {
                            this.flushLiveURLCache = e, this.el.playerSetflushLiveURLCache(this.flushLiveURLCache)
                        }
                    }, {
                        key: "setLogDebug",
                        value: function(e) {
                            this.logDebug = e, this.el.playerSetLogDebug(this.logDebug)
                        }
                    }, {
                        key: "setLogDebug2",
                        value: function(e) {
                            this.logDebug2 = e, this.el.playerSetLogDebug2(this.logDebug2)
                        }
                    }, {
                        key: "setSeekMode",
                        value: function(e) {
                            this.seekMode = e, this.el.playerSetSeekMode(this.seekMode)
                        }
                    }, {
                        key: "levelChanged",
                        value: function(e) {
                            var t = this.levels[e];
                            t && (this.highDefinition = t.height >= 720 || t.bitrate / 1e3 >= 2e3, this.trigger(f["default"].PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition), this.trigger(f["default"].PLAYBACK_BITRATE, {
                                height: t.height,
                                width: t.width,
                                bandwidth: t.bandwidth,
                                bitrate: t.bitrate,
                                level: e
                            }), this.trigger(f["default"].PLAYBACK_LEVEL_SWITCH_END))
                        }
                    }, {
                        key: "changeLevel",
                        value: function(e) {
                            this.el.playerSetLoadLevel(e), this.el.playerSetAutoLevelCapping(e)
                        }
                    }, {
                        key: "updateTime",
                        value: function(e) {
                            if ("IDLE" !== this.currentState) {
                                var t = this.normalizeDuration(e.duration),
                                    n = Math.min(Math.max(e.position, 0), t),
                                    i = this.dvrEnabled,
                                    r = this.playbackType === v["default"].LIVE;
                                this.dvrEnabled = r && t > this.hlsMinimumDvrSize, 100 !== t && void 0 !== r && (this.dvrEnabled !== i && (this.updateSettings(), this.trigger(f["default"].PLAYBACK_SETTINGSUPDATE, this.name)), !r || this.dvrEnabled && this.dvrInUse || (n = t), this.trigger(f["default"].PLAYBACK_TIMEUPDATE, {
                                    current: n,
                                    total: t
                                }, this.name))
                            }
                        }
                    }, {
                        key: "play",
                        value: function() {
                            "PAUSED" === this.currentState ? this.el.playerResume() : this.srcLoaded || "PLAYING" === this.currentState ? this.el.playerResume() : this.firstPlay()
                        }
                    }, {
                        key: "getPlaybackType",
                        value: function() {
                            return this.playbackType ? this.playbackType : null
                        }
                    }, {
                        key: "getCurrentLevelIndex",
                        value: function() {
                            return this.currentLevel
                        }
                    }, {
                        key: "getCurrentLevel",
                        value: function() {
                            return this.levels[this.currentLevel]
                        }
                    }, {
                        key: "getCurrentBitrate",
                        value: function() {
                            return this.levels[this.currentLevel].bitrate
                        }
                    }, {
                        key: "setCurrentLevel",
                        value: function(e) {
                            this.currentLevel = e
                        }
                    }, {
                        key: "isHighDefinitionInUse",
                        value: function() {
                            return this.highDefinition
                        }
                    }, {
                        key: "getLevels",
                        value: function() {
                            return this.levels
                        }
                    }, {
                        key: "setPlaybackState",
                        value: function(e) {
                            ["PLAYING_BUFFERING", "PAUSED_BUFFERING"].indexOf(e) >= 0 ? (this.trigger(f["default"].PLAYBACK_BUFFERING, this.name), this.updateCurrentState(e)) : ["PLAYING", "PAUSED"].indexOf(e) >= 0 ? (["PLAYING_BUFFERING", "PAUSED_BUFFERING", "IDLE"].indexOf(this.currentState) >= 0 && this.trigger(f["default"].PLAYBACK_BUFFERFULL, this.name), this.updateCurrentState(e)) : "IDLE" === e && (this.srcLoaded = !1, this.loop && ["PLAYING_BUFFERING", "PLAYING"].indexOf(this.currentState) >= 0 ? (this.seek(0), this.play()) : (this.updateCurrentState(e), this.trigger(f["default"].PLAYBACK_ENDED, this.name), this.trigger(f["default"].PLAYBACK_TIMEUPDATE, {
                                current: 0,
                                total: this.el.getDuration()
                            }, this.name)))
                        }
                    }, {
                        key: "updateCurrentState",
                        value: function(e) {
                            this.currentState = e, this.updatePlaybackType(), "PLAYING" === e ? this.trigger(f["default"].PLAYBACK_PLAY, this.name) : "PAUSED" === e && this.trigger(f["default"].PLAYBACK_PAUSE, this.name)
                        }
                    }, {
                        key: "updatePlaybackType",
                        value: function() {
                            try {
                                this.playbackType = this.el.getType(), this.playbackType && (this.playbackType = this.playbackType.toLowerCase(), this.playbackType === v["default"].VOD ? this.startReportingProgress() : this.stopReportingProgress()), this.trigger(f["default"].PLAYBACK_PLAYBACKSTATE, {
                                    type: this.playbackType
                                })
                            } catch (e) {}
                        }
                    }, {
                        key: "startReportingProgress",
                        value: function() {
                            this.reportingProgress || (this.reportingProgress = !0)
                        }
                    }, {
                        key: "stopReportingProgress",
                        value: function() {
                            this.reportingProgress = !1
                        }
                    }, {
                        key: "onFragmentLoaded",
                        value: function(e) {
                            if (this.trigger(f["default"].PLAYBACK_FRAGMENT_LOADED, e), this.reportingProgress && this.el.getPosition) {
                                var t = this.el.getPosition() + this.el.getbufferLength();
                                this.trigger(f["default"].PLAYBACK_PROGRESS, {
                                    start: this.el.getPosition(),
                                    current: t,
                                    total: this.el.getDuration()
                                })
                            }
                        }
                    }, {
                        key: "firstPlay",
                        value: function() {
                            var e = this;
                            this._shouldPlayOnManifestLoaded = !0, this.el.playerLoad && (g["default"].once(this.cid + ":manifestloaded", function(t, n) {
                                return e.manifestLoaded(t, n)
                            }), this.setFlashSettings(), this.el.playerLoad(this.src), this.srcLoaded = !0)
                        }
                    }, {
                        key: "volume",
                        value: function(e) {
                            var t = this;
                            this.isReady ? this.el.playerVolume(e) : this.listenToOnce(this, f["default"].PLAYBACK_BUFFERFULL, function() {
                                return t.volume(e)
                            })
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.el.playerPause(), this.playbackType === v["default"].LIVE && this.dvrEnabled && this.updateDvr(!0)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.srcLoaded = !1, this.el.playerStop(), this.trigger(f["default"].PLAYBACK_STOP), this.trigger(f["default"].PLAYBACK_TIMEUPDATE, {
                                current: 0,
                                total: 0
                            }, this.name)
                        }
                    }, {
                        key: "isPlaying",
                        value: function() {
                            return this.currentState ? !!this.currentState.match(/playing/i) : !1
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.normalizeDuration(this.el.getDuration())
                        }
                    }, {
                        key: "normalizeDuration",
                        value: function(e) {
                            return this.playbackType === v["default"].LIVE && (e -= 10), e
                        }
                    }, {
                        key: "seekPercentage",
                        value: function(e) {
                            var t = this.el.getDuration(),
                                n = 0;
                            e > 0 && (n = t * e / 100), this.seek(n)
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            var t = this.el.getDuration();
                            if (this.playbackType === v["default"].LIVE) {
                                var n = e >= 0 && t - e > 10;
                                this.updateDvr(n)
                            }
                            this.el.playerSeek(e), this.trigger(f["default"].PLAYBACK_TIMEUPDATE, {
                                current: e,
                                total: t
                            }, this.name)
                        }
                    }, {
                        key: "updateDvr",
                        value: function(e) {
                            !!this.dvrInUse;
                            this.dvrInUse = e, this.updateSettings(), this.trigger(f["default"].PLAYBACK_DVR, this.dvrInUse), this.trigger(f["default"].PLAYBACK_STATS_ADD, {
                                dvr: this.dvrInUse
                            })
                        }
                    }, {
                        key: "flashPlaybackError",
                        value: function(e, t, n) {
                            this.trigger(f["default"].PLAYBACK_ERROR, {
                                code: e,
                                url: t,
                                message: n
                            }), this.trigger(f["default"].PLAYBACK_STOP)
                        }
                    }, {
                        key: "manifestLoaded",
                        value: function(e, t) {
                            this._shouldPlayOnManifestLoaded && (this._shouldPlayOnManifestLoaded = !1, this.el.playerPlay());
                            var n = this.el.getLevels(),
                                i = n.length;
                            this._levels = [];
                            for (var r = 0; i > r; r++) this._levels.push({
                                id: r,
                                label: n[r].height + "p"
                            });
                            this.trigger(f["default"].PLAYBACK_LEVELS_AVAILABLE, this._levels), this.trigger(f["default"].PLAYBACK_LOADEDMETADATA, {
                                duration: e,
                                data: t
                            })
                        }
                    }, {
                        key: "timeUpdate",
                        value: function(e, t) {
                            this.trigger(f["default"].PLAYBACK_TIMEUPDATE, {
                                current: e,
                                total: t
                            }, this.name)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.stopListening(), this.$el.remove()
                        }
                    }, {
                        key: "updateSettings",
                        value: function() {
                            this.settings = _["default"].extend({}, this.defaultSettings), this.playbackType === v["default"].VOD || this.dvrInUse ? (this.settings.left = ["playpause", "position", "duration"], this.settings.seekEnabled = !0) : this.dvrEnabled ? (this.settings.left = ["playpause"], this.settings.seekEnabled = !0) : this.settings.seekEnabled = !1
                        }
                    }, {
                        key: "createCallbacks",
                        value: function() {
                            var e = this;
                            window.flashlsCallbacks || (window.flashlsCallbacks = {}), this.flashlsEvents = new b["default"](this.cid), window.flashlsCallbacks[this.cid] = function(t, n) {
                                e.flashlsEvents[t].apply(e.flashlsEvents, n)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s(Object.getPrototypeOf(t.prototype), "render", this).call(this), this.el.id = this.cid, this.createCallbacks(), this
                        }
                    }, {
                        key: "isReady",
                        get: function() {
                            return this.isReadyState
                        }
                    }]), t
                }(u["default"]);
            t["default"] = L, L.canPlay = function(e, t) {
                var n = e.split("?")[0].match(/.*\.(.*)$/) || [];
                return m["default"].hasFlash && (n.length > 1 && "m3u8" === n[1] || "application/x-mpegURL" === t || "application/vnd.apple.mpegurl" === t)
            }, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = n(18),
                s = i(o),
                l = function() {
                    function e(t) {
                        r(this, e), this.instanceId = t
                    }
                    return a(e, [{
                        key: "ready",
                        value: function() {
                            s["default"].trigger(this.instanceId + ":flashready")
                        }
                    }, {
                        key: "videoSize",
                        value: function(e, t) {
                            s["default"].trigger(this.instanceId + ":videosizechanged", e, t)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            s["default"].trigger(this.instanceId + ":complete")
                        }
                    }, {
                        key: "error",
                        value: function(e, t, n) {
                            s["default"].trigger(this.instanceId + ":error", e, t, n)
                        }
                    }, {
                        key: "manifest",
                        value: function(e, t) {
                            s["default"].trigger(this.instanceId + ":manifestloaded", e, t)
                        }
                    }, {
                        key: "audioLevelLoaded",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":audiolevelloaded", e)
                        }
                    }, {
                        key: "levelLoaded",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":levelloaded", e)
                        }
                    }, {
                        key: "fragmentLoaded",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":fragmentloaded", e)
                        }
                    }, {
                        key: "fragmentPlaying",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":fragmentplaying", e)
                        }
                    }, {
                        key: "position",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":timeupdate", e)
                        }
                    }, {
                        key: "state",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":playbackstate", e)
                        }
                    }, {
                        key: "seekState",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":seekstate", e)
                        }
                    }, {
                        key: "switch",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":levelchanged", e)
                        }
                    }, {
                        key: "audioTracksListChange",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":audiotracklistchanged", e)
                        }
                    }, {
                        key: "audioTrackChange",
                        value: function(e) {
                            s["default"].trigger(this.instanceId + ":audiotrackchanged", e)
                        }
                    }]), e
                }();
            t["default"] = l, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(104)
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(30),
                u = i(l),
                c = n(29),
                f = i(c),
                h = n(3),
                d = i(h),
                v = n(11),
                p = i(v),
                g = n(5),
                y = i(g),
                m = -1,
                E = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.minDvrSize = e.hlsMinimumDvrSize ? e.hlsMinimumDvrSize : 60, this.playbackType = p["default"].VOD, this.playableRegionStartTime = 0, this.playableRegionDuration = 0, e.autoPlay && this.setupHls(), this.recoverAttemptsRemaining = e.hlsRecoverAttempts || 16
                    }
                    return a(t, e), o(t, [{
                        key: "name",
                        get: function() {
                            return "hls"
                        }
                    }, {
                        key: "levels",
                        get: function() {
                            return this._levels || []
                        }
                    }, {
                        key: "currentLevel",
                        get: function() {
                            return null === this._currentLevel || void 0 === this._currentLevel ? m : this._currentLevel
                        },
                        set: function(e) {
                            this._currentLevel = e, this.trigger(d["default"].PLAYBACK_LEVEL_SWITCH_START), this.hls.currentLevel = this._currentLevel
                        }
                    }]), o(t, [{
                        key: "setupHls",
                        value: function() {
                            var e = this;
                            this.hls = new f["default"](this.options.hlsjsConfig || {
                                maxMaxBufferLength: this.options.maxBufferLength ? this.options.maxBufferLength : 30
                            }), this.hls.on(f["default"].Events.MEDIA_ATTACHED, function() {
                                return e.hls.loadSource(e.options.src)
                            }), this.hls.on(f["default"].Events.MANIFEST_PARSED, function() {
                                e.options.autoPlay && e.play()
                            }), this.hls.on(f["default"].Events.MANIFEST_LOADED, function(t, n) {
                                return e.manifestLoaded(t, n)
                            }), this.hls.on(f["default"].Events.LEVEL_LOADED, function(t, n) {
                                return e.updatePlaybackType(t, n)
                            }), this.hls.on(f["default"].Events.LEVEL_UPDATED, function(t, n) {
                                return e.onLevelUpdated(t, n)
                            }), this.hls.on(f["default"].Events.LEVEL_SWITCH, function(t, n) {
                                return e.onLevelSwitch(t, n)
                            }), this.hls.on(f["default"].Events.FRAG_LOADED, function(t, n) {
                                return e.onFragmentLoaded(t, n)
                            }), this.hls.on(f["default"].Events.FRAG_BUFFERED, function(t, n) {
                                return e.onFragmentBuffered(t, n)
                            }), this.hls.on(f["default"].Events.ERROR, function(t, n) {
                                return e.onError(t, n)
                            }), this.hls.attachMedia(this.el)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.playableRegionDuration
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.el.currentTime - this.playableRegionStartTime
                        }
                    }, {
                        key: "seekPercentage",
                        value: function(e) {
                            var t = this.playableRegionDuration;
                            e > 0 && (t = this.playableRegionDuration * (e / 100)), this.seek(t)
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            0 > e && (Log.warn("Attempt to seek to a negative time. Resetting to live point. Use seekToLivePoint() to seek to the live point."), e = this.getDuration()), this.dvrEnabled && this.updateDvr(e < this.getDuration() - 3), e += this.playableRegionStartTime, s(Object.getPrototypeOf(t.prototype), "seek", this).call(this, e)
                        }
                    }, {
                        key: "manifestLoaded",
                        value: function(e, t) {
                            this.trigger(d["default"].PLAYBACK_LOADEDMETADATA, t)
                        }
                    }, {
                        key: "updateDvr",
                        value: function(e) {
                            this.trigger(d["default"].PLAYBACK_DVR, e), this.trigger(d["default"].PLAYBACK_STATS_ADD, {
                                dvr: e
                            })
                        }
                    }, {
                        key: "durationChange",
                        value: function() {
                            this.playbackType === p["default"].VOD ? this.settings.left = ["playpause", "position", "duration"] : this.dvrEnabled ? this.settings.left = ["playpause"] : this.settings.left = ["playstop"], this.settings.seekEnabled = this.isSeekEnabled(), this.timeUpdated(), this.trigger(d["default"].PLAYBACK_SETTINGSUPDATE)
                        }
                    }, {
                        key: "changeLevel",
                        value: function(e) {
                            this.hls.currentLevel = e, this.hls.autoLevelCapping = e
                        }
                    }, {
                        key: "timeUpdated",
                        value: function() {
                            this.trigger(d["default"].PLAYBACK_TIMEUPDATE, {
                                current: this.getCurrentTime(),
                                total: this.getDuration()
                            }, this.name)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.hls || this.setupHls(), s(Object.getPrototypeOf(t.prototype), "play", this).call(this)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            s(Object.getPrototypeOf(t.prototype), "pause", this).call(this), this.dvrEnabled && this.updateDvr(!0)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.hls && (this.hls.destroy(), delete this.hls)
                        }
                    }, {
                        key: "updatePlaybackType",
                        value: function(e, t) {
                            this.playbackType = t.details.live ? p["default"].LIVE : p["default"].VOD, this.fillLevels(), this.onLevelUpdated(e, t)
                        }
                    }, {
                        key: "fillLevels",
                        value: function() {
                            this._levels = this.hls.levels.map(function(e, t) {
                                return {
                                    id: t,
                                    level: e,
                                    label: e.bitrate / 1e3 + "Kbps"
                                }
                            }), this.trigger(d["default"].PLAYBACK_LEVELS_AVAILABLE, this._levels)
                        }
                    }, {
                        key: "onLevelUpdated",
                        value: function(e, t) {
                            var n = t.details.fragments;
                            n.length > 0 && (this.playableRegionStartTime = n[0].start);
                            var i = t.details.totalduration;
                            if (this.playbackType === p["default"].LIVE) try {
                                var r = this.hls.levels[t.level],
                                    a = r.details.targetduration,
                                    o = this.options.hlsjsConfig || {},
                                    s = o.liveSyncDurationCount || f["default"].DefaultConfig.liveSyncDurationCount,
                                    l = a * s;
                                i >= l && (i -= l)
                            } catch (u) {}
                            i !== this.playableRegionDuration && (this.playableRegionDuration = i, this.onDurationChange(e, t))
                        }
                    }, {
                        key: "onDurationChange",
                        value: function(e, t) {
                            var n = t.details.fragments;
                            n.length > 0 && (this.playableRegionStartTime = n[0].start), this.playableRegionDuration = t.details.totalduration, this.durationChange()
                        }
                    }, {
                        key: "onFragmentLoaded",
                        value: function(e, t) {
                            this.trigger(d["default"].PLAYBACK_FRAGMENT_LOADED, t)
                        }
                    }, {
                        key: "onFragmentBuffered",
                        value: function(e, t) {
                            this.trigger(d["default"].PLAYBACK_FRAGMENT_BUFFERED, t)
                        }
                    }, {
                        key: "onError",
                        value: function(e, t) {
                            this.trigger(d["default"].PLAYBACK_ERROR, t)
                        }
                    }, {
                        key: "onLevelSwitch",
                        value: function(e, t) {
                            this.levels.length || this.fillLevels(), this.trigger(d["default"].PLAYBACK_LEVEL_SWITCH_END), this.trigger(d["default"].PLAYBACK_LEVEL_SWITCH, t);
                            var n = this.hls.levels[t.level];
                            n && (this.highDefinition = n.height >= 720 || n.bitrate / 1e3 >= 2e3, this.trigger(d["default"].PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition), this.trigger(d["default"].PLAYBACK_BITRATE, {
                                height: n.height,
                                width: n.width,
                                bandwidth: n.bandwidth,
                                bitrate: n.bitrate,
                                level: t.level
                            }))
                        }
                    }, {
                        key: "getPlaybackType",
                        value: function() {
                            return this.playbackType
                        }
                    }, {
                        key: "isSeekEnabled",
                        value: function() {
                            return this.playbackType === p["default"].VOD || this.dvrEnabled
                        }
                    }, {
                        key: "dvrEnabled",
                        get: function() {
                            return this.playableRegionDuration >= this.minDvrSize && this.getPlaybackType() === p["default"].LIVE
                        }
                    }]), t
                }(u["default"]);
            t["default"] = E, E.canPlay = function(e, t) {
                var n = e.split("?")[0].match(/.*\.(.*)$/) || [],
                    i = n.length > 1 && "m3u8" === n[1] || "application/x-mpegURL" === t || "application/vnd.apple.mpegurl" === t;
                return !(!f["default"].isSupported() || !i || y["default"].isSafari)
            }, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(107)
        },
        function(e, t, n) {
            (function(i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    l = function(e, t, n) {
                        for (var i = !0; i;) {
                            var r = e,
                                a = t,
                                o = n;
                            i = !1, null === r && (r = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(r, a);
                            if (void 0 !== s) {
                                if ("value" in s) return s.value;
                                var l = s.get;
                                if (void 0 === l) return;
                                return l.call(o)
                            }
                            var u = Object.getPrototypeOf(r);
                            if (null === u) return;
                            e = u, t = a, n = o, i = !0, s = u = void 0
                        }
                    },
                    u = n(15),
                    c = r(u),
                    f = n(3),
                    h = r(f),
                    d = n(11),
                    v = r(d),
                    p = n(12),
                    g = r(p),
                    y = n(4),
                    m = n(5),
                    E = r(m),
                    b = n(119),
                    k = r(b),
                    _ = function(e) {
                        function t(e) {
                            a(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.options = e, this.src = e.src, this.el.src = e.src, this.el.loop = e.loop, this.firstBuffer = !0, this.settings = {
                                "default": ["seekbar"]
                            }, E["default"].isSafari ? this.setupSafari() : (this.el.preload = e.preload ? e.preload : "metadata", this.settings.seekEnabled = !0), this.settings.left = ["playpause", "position", "duration"], this.settings.right = ["fullscreen", "volume", "hd-indicator"]
                        }
                        return o(t, e), s(t, [{
                            key: "name",
                            get: function() {
                                return "html5_video"
                            }
                        }, {
                            key: "tagName",
                            get: function() {
                                return "video"
                            }
                        }, {
                            key: "template",
                            get: function() {
                                return (0, g["default"])(k["default"])
                            }
                        }, {
                            key: "attributes",
                            get: function() {
                                return {
                                    "class": "vjs-tech",
                                    width: "100%",
                                    crossOrigin: "anonymous",
                                    height: "100%",
                                    "webkit-playsinline": "webkit-playsinline",
                                    playsinline: "playsinline"
                                }
                            }
                        }, {
                            key: "events",
                            get: function() {
                                return {
                                    timeupdate: "timeUpdated",
                                    progress: "progress",
                                    ended: "ended",
                                    stalled: "stalled",
                                    waiting: "waiting",
                                    canplaythrough: "bufferFull",
                                    loadedmetadata: "loadedMetadata",
                                    canplay: "ready",
                                    durationchange: "durationChange",
                                    error: "error",
                                    playing: "playing",
                                    pause: "paused"
                                }
                            }
                        }]), s(t, [{
                            key: "setupSafari",
                            value: function() {
                                this.el.preload = "auto"
                            }
                        }, {
                            key: "loadedMetadata",
                            value: function(e) {
                                this.durationChange(), this.trigger(h["default"].PLAYBACK_LOADEDMETADATA, {
                                    duration: e.target.duration,
                                    data: e
                                }), this.getPlaybackType() !== v["default"].LIVE && this.checkInitialSeek(), this.trigger(h["default"].PLAYBACK_READY, this.name)
                            }
                        }, {
                            key: "durationChange",
                            value: function() {
                                this.getPlaybackType() === v["default"].VOD ? this.settings.left = ["playpause", "position", "duration"] : this.settings.left = ["playstop"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(h["default"].PLAYBACK_SETTINGSUPDATE)
                            }
                        }, {
                            key: "isSeekEnabled",
                            value: function() {
                                return isFinite(this.getDuration())
                            }
                        }, {
                            key: "getPlaybackType",
                            value: function() {
                                return [0, void 0, 1 / 0].indexOf(this.el.duration) >= 0 ? v["default"].LIVE : v["default"].VOD
                            }
                        }, {
                            key: "isHighDefinitionInUse",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "play",
                            value: function() {
                                this.el.play()
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                this.el.pause()
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this.pause(), 0 !== this.el.readyState && (this.el.currentTime = 0)
                            }
                        }, {
                            key: "volume",
                            value: function(e) {
                                this.el.volume = e / 100
                            }
                        }, {
                            key: "mute",
                            value: function() {
                                this.el.volume = 0
                            }
                        }, {
                            key: "unmute",
                            value: function() {
                                this.el.volume = 1
                            }
                        }, {
                            key: "isMuted",
                            value: function() {
                                return !!this.el.volume
                            }
                        }, {
                            key: "isPlaying",
                            value: function() {
                                return !this.el.paused && !this.el.ended
                            }
                        }, {
                            key: "playing",
                            value: function() {
                                this.trigger(h["default"].PLAYBACK_PLAY)
                            }
                        }, {
                            key: "paused",
                            value: function() {
                                this.trigger(h["default"].PLAYBACK_PAUSE)
                            }
                        }, {
                            key: "ended",
                            value: function() {
                                this.trigger(h["default"].PLAYBACK_BUFFERFULL, this.name), this.trigger(h["default"].PLAYBACK_ENDED, this.name), this.trigger(h["default"].PLAYBACK_TIMEUPDATE, {
                                    current: 0,
                                    total: this.el.duration
                                }, this.name)
                            }
                        }, {
                            key: "stalled",
                            value: function() {
                                this.getPlaybackType() === v["default"].VOD && this.el.readyState < this.el.HAVE_FUTURE_DATA && this.trigger(h["default"].PLAYBACK_BUFFERING, this.name)
                            }
                        }, {
                            key: "waiting",
                            value: function() {
                                this.el.readyState < this.el.HAVE_FUTURE_DATA && (this.trigger(h["default"].PLAYBACK_BUFFERING, this.name), this.progress(), this.buffering = !0)
                            }
                        }, {
                            key: "bufferFull",
                            value: function() {
                                this.options.poster && this.firstBuffer ? (this.firstBuffer = !1, this.isPlaying() || (this.el.poster = this.options.poster)) : this.el.poster = "", this.trigger(h["default"].PLAYBACK_BUFFERFULL, this.name)
                            }
                        }, {
                            key: "error",
                            value: function(e) {
                                this.trigger(h["default"].PLAYBACK_ERROR, this.el.error, this.name)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.stop(), this.el.src = "", this.$el.remove()
                            }
                        }, {
                            key: "seek",
                            value: function(e) {
                                this.el.duration * (e / 100);
                                this.seekSeconds(e)
                            }
                        }, {
                            key: "seekSeconds",
                            value: function(e) {
                                this.el.currentTime = e
                            }
                        }, {
                            key: "checkInitialSeek",
                            value: function() {
                                var e = (0, y.seekStringToSeconds)(window.location.href);
                                this.seekSeconds(e)
                            }
                        }, {
                            key: "getCurrentTime",
                            value: function() {
                                return this.el.currentTime
                            }
                        }, {
                            key: "getDuration",
                            value: function() {
                                return this.el.duration
                            }
                        }, {
                            key: "timeUpdated",
                            value: function() {
                                this.getPlaybackType() === v["default"].LIVE ? this.trigger(h["default"].PLAYBACK_TIMEUPDATE, {
                                    current: 1,
                                    total: 1
                                }, this.name) : this.trigger(h["default"].PLAYBACK_TIMEUPDATE, {
                                    current: this.el.currentTime,
                                    total: this.el.duration
                                }, this.name)
                            }
                        }, {
                            key: "progress",
                            value: function() {
                                if (this.el.buffered.length) {
                                    for (var e = 0, t = 0; t < this.el.buffered.length; t++)
                                        if (this.el.currentTime >= this.el.buffered.start(t) && this.el.currentTime <= this.el.buffered.end(t)) {
                                            e = t;
                                            break
                                        }
                                    this.checkBufferState(this.el.buffered.end(e)), this.trigger(h["default"].PLAYBACK_PROGRESS, {
                                        start: this.el.buffered.start(e),
                                        current: this.el.buffered.end(e),
                                        total: this.el.duration
                                    })
                                }
                            }
                        }, {
                            key: "checkBufferState",
                            value: function(e) {
                                var t = this.el.currentTime + .05;
                                this.isPlaying() && t >= e ? (this.trigger(h["default"].PLAYBACK_BUFFERING, this.name), this.buffering = !0) : this.buffering && (this.trigger(h["default"].PLAYBACK_BUFFERFULL, this.name), this.buffering = !1)
                            }
                        }, {
                            key: "typeFor",
                            value: function(e) {
                                return e.indexOf(".m3u8") > 0 ? "application/vnd.apple.mpegurl" : "video/mp4"
                            }
                        }, {
                            key: "ready",
                            value: function() {
                                this.trigger(h["default"].PLAYBACK_READY, this.name)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this;
                                return this.$el.html(this.template({
                                    src: this.src,
                                    type: this.typeFor(this.src)
                                })), this.options.useVideoTagDefaultControls && this.$el.attr("controls", "controls"), null != this.options.poster && (this.el.poster = this.options.poster), this.options.disableVideoTagContextMenu && this.$el.on("contextmenu", function() {
                                    return !1
                                }), i.nextTick(function() {
                                    return e.options.autoPlay && e.play()
                                }), this.el.readyState === this.el.HAVE_ENOUGH_DATA && this.ready(), this
                            }
                        }]), t
                    }(v["default"]);
                t["default"] = _, _.canPlay = function(e, t) {
                    var n = {
                        mp4: ["avc1.42E01E", "avc1.58A01E", "avc1.4D401E", "avc1.64001E", "mp4v.20.8", "mp4v.20.240", "mp4a.40.2"].map(function(e) {
                            return 'video/mp4; codecs="' + e + ', mp4a.40.2"'
                        }),
                        ogg: ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
                        "3gpp": ['video/3gpp; codecs="mp4v.20.8, samr"'],
                        webm: ['video/webm; codecs="vp8, vorbis"'],
                        mkv: ['video/x-matroska; codecs="theora, vorbis"'],
                        m3u8: ["application/x-mpegURL"]
                    };
                    n.ogv = n.ogg, n["3gp"] = n["3gpp"];
                    var i = e.split("?")[0].match(/.*\.(.*)$/) || [];
                    if (i.length > 1 && void 0 !== n[i[1]]) {
                        var r = document.createElement("video");
                        return !!(0, c["default"])(n[i[1]], function(e) {
                            return !!r.canPlayType(e).replace(/no/, "")
                        })
                    }
                    if (t) {
                        var r = document.createElement("video");
                        return !!r.canPlayType(t).replace(/no/, "")
                    }
                    return !1
                }, e.exports = _, e.exports = t["default"]
            }).call(t, n(27))
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(87),
                u = i(l),
                c = n(3),
                f = i(c),
                h = function(e) {
                    function t(e) {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.container.options.trackerUrl && (this.trackerConfig = this.options.trackerConfig || {}, this.trackerUrl = this.container.options.trackerUrl, this.trackerName = this.container.options.trackerName ? this.container.options.trackerName + "." : "noplayer.", this.currentHDState = void 0, this.content = "", this.action = "", this.start_time = void 0, this.end_time = void 0, this.pos = 0, this.buffer = 0, this.elapsed_time = 0, this.inbytes = 0, this.ua = "", this.url = self.location.href, this.referer = "", this.embedScript())
                    }
                    return a(t, e), o(t, [{
                        key: "name",
                        get: function() {
                            return "analytics"
                        }
                    }]), o(t, [{
                        key: "embedScript",
                        value: function() {
                            this.addEventListeners()
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            var e = this;
                            try {
                                this.container && (this.listenTo(this.container, f["default"].CONTAINER_READY, this.onReady), this.listenTo(this.container, f["default"].CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, f["default"].CONTAINER_STOP, this.onStop), this.listenTo(this.container, f["default"].CONTAINER_PAUSE, this.onPause), this.listenTo(this.container, f["default"].CONTAINER_ENDED, this.onEnded), this.trackerConfig.onBuffering && this.listenTo(this.container, f["default"].CONTAINER_STATE_BUFFERING, this.onBuffering), this.trackerConfig.onBufferFull && this.listenTo(this.container, f["default"].CONTAINER_STATE_BUFFERFULL, this.onBufferFull), this.listenTo(this.container, f["default"].CONTAINER_ENDED, this.onEnded), this.listenTo(this.container, f["default"].CONTAINER_ERROR, this.onError), this.listenTo(this.container, f["default"].CONTAINER_VOLUME, function(t) {
                                    return e.onVolumeChanged(t)
                                }), this.listenTo(this.container, f["default"].CONTAINER_SEEK, function(t) {
                                    return e.onSeek(t)
                                })), (this.container.playback || this.trackerConfig.onFragmentLoaded) && this.listenTo(this.container.playback, f["default"].PLAYBACK_FRAGMENT_LOADED, this.onFragmentLoaded)
                            } catch (t) {
                                console.log(JSON.stringify(t))
                            }
                        }
                    }, {
                        key: "onFragmentLoaded",
                        value: function(e) {
                            this.action = "FragmentLoaded", e.stats ? this.inbytes = e.stats.length : e.size && (this.inbytes = e.size), this.push(["Video", "Playback", this.container.playback.src])
                        }
                    }, {
                        key: "onReady",
                        value: function() {
                            this.action = "Playback|" + this.container.playback.name, this.push(["Video", "Playback", this.container.playback.name])
                        }
                    }, {
                        key: "onPlay",
                        value: function() {
                            this.action = "Play", this.start_time = new Date, this.content = this.container.playback.src;
                            var e = {};
                            e.trackerUrl = this.trackerUrl, e.params = "action=" + this.action + "&cid=" + this.content + "&pos=" + Math.round(1e3 * this.pos) / 1e3 + "&elapsed_time=" + this.elapsed_time / 1e3 + "&ua=" + navigator.userAgent + "&referer=" + document.referrer, window.onbeforeunload = function() {
                                $.ajax({
                                    type: "GET",
                                    async: !1,
                                    url: e.trackerUrl,
                                    data: e.params,
                                    success: function() {
                                        alert(params)
                                    }
                                })
                            }, this.push(["Video", "Play", this.container.playback.src])
                        }
                    }, {
                        key: "onStop",
                        value: function() {
                            this.action = "Stop", this.content = this.container.playback.src, this.end_time = new Date, this.elapsed_time += this.end_time - this.start_time, window.onbeforeunload = function() {}, this.push(["Video", "Stop", this.container.playback.src])
                        }
                    }, {
                        key: "onEnded",
                        value: function() {
                            this.action = "Ended", this.content = this.container.playback.src, this.end_time = new Date, this.elapsed_time += this.end_time - this.start_time, window.onbeforeunload = function() {}, this.push(["Video", "Ended", this.container.playback.src])
                        }
                    }, {
                        key: "onBuffering",
                        value: function() {
                            this.action = "Buffering", this.content = this.container.playback.src, this.push(["Video", "Buffering", this.container.playback.src])
                        }
                    }, {
                        key: "onBufferFull",
                        value: function() {
                            this.action = "Bufferfull", this.content = this.container.playback.src, this.push(["Video", "Bufferfull", this.container.playback.src])
                        }
                    }, {
                        key: "onError",
                        value: function() {
                            this.action = "Error", this.content = this.container.playback.src, this.push(["Video", "Error", this.container.playback.src])
                        }
                    }, {
                        key: "onPause",
                        value: function() {
                            try {
                                this.action = "Pause", this.content = this.container.playback.src, this.end_time = new Date, this.elapsed_time += this.end_time - this.start_time, this.pos = this.container.currentTime, window.onbeforeunload = function() {}, this.push(["Video", "Pause", this.container.playback.src])
                            } catch (e) {
                                console.log(JSON.stringify(e))
                            }
                        }
                    }, {
                        key: "onSeek",
                        value: function() {
                            this.action = "Seek", this.pos = this.container.currentTime, this.content = this.container.playback.src, this.push(["Video", "Seek", this.container.playback.src])
                        }
                    }, {
                        key: "onVolumeChanged",
                        value: function() {
                            this.action = "Volume", this.content = this.container.playback.src, this.push(["Interaction", "Volume", this.container.playback.src])
                        }
                    }, {
                        key: "onFullscreen",
                        value: function() {
                            this.action = "Fullscreen", this.content = this.container.playback.src, this.push(["Interaction", "Fullscreen", this.container.playback.src])
                        }
                    }, {
                        key: "push",
                        value: function(e) {
                            var t = ([this.trackerName + "_trackEvent"].concat(e), "cid=" + this.content + "&action=" + this.action + "&pos=" + Math.round(1e3 * this.pos) / 1e3 + "&buffer=" + this.buffer + "&elapsed_time=" + this.elapsed_time / 1e3 + "&inbytes=" + ("FragmentLoaded" == this.action ? this.inbytes : 0) + "&ua=" + navigator.userAgent + "&url=" + this.url + "&referer=" + document.referrer);
                            $.ajax({
                                type: "GET",
                                async: !0,
                                url: this.trackerUrl,
                                data: t,
                                success: function() {}
                            })
                        }
                    }]), t
                }(u["default"]);
            t["default"] = h, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(110)
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(113)
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function(e, t, n) {
                    for (var i = !0; i;) {
                        var r = e,
                            a = t,
                            o = n;
                        i = !1, null === r && (r = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(r, a);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(o)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        e = u, t = a, n = o, i = !0, s = u = void 0
                    }
                },
                l = n(3),
                u = i(l),
                c = n(12),
                f = i(c),
                h = n(88),
                d = i(h),
                v = n(120),
                p = i(v),
                g = -1,
                y = function(e) {
                    function t() {
                        r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
                    }
                    return a(t, e), o(t, [{
                        key: "bindEvents",
                        value: function() {
                            this.listenTo(this.core, u["default"].CORE_READY, this.bindPlaybackEvents), this.listenTo(this.core.mediaControl, u["default"].MEDIACONTROL_CONTAINERCHANGED, this.reload), this.listenTo(this.core.mediaControl, u["default"].MEDIACONTROL_RENDERED, this.render), this.listenTo(this.core.mediaControl, u["default"].MEDIACONTROL_HIDE, this.hideSelectLevelMenu)
                        }
                    }, {
                        key: "unBindEvents",
                        value: function() {
                            this.stopListening(this.core, u["default"].CORE_READY), this.stopListening(this.core.mediaControl, u["default"].MEDIACONTROL_CONTAINERCHANGED), this.stopListening(this.core.mediaControl, u["default"].MEDIACONTROL_RENDERED), this.stopListening(this.core.mediaControl, u["default"].MEDIACONTROL_HIDE), this.stopListening(this.core.getCurrentPlayback(), u["default"].PLAYBACK_LEVELS_AVAILABLE), this.stopListening(this.core.getCurrentPlayback(), u["default"].PLAYBACK_BITRATE)
                        }
                    }, {
                        key: "bindPlaybackEvents",
                        value: function() {
                            var e = this.core.getCurrentPlayback();
                            this.listenToOnce(e, u["default"].PLAYBACK_LEVELS_AVAILABLE, this.fillLevels), this.listenTo(e, u["default"].PLAYBACK_BITRATE, this.updateCurrentLevel);
                            var t = e.levels && e.levels.length > 0;
                            t && this.fillLevels(e.levels)
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            this.unBindEvents(), this.bindEvents(), this.bindPlaybackEvents()
                        }
                    }, {
                        key: "shouldRender",
                        value: function() {
                            if (!this.core.getCurrentContainer()) return !1;
                            var e = this.core.getCurrentPlayback();
                            if (!e) return !1;
                            var t = void 0 !== e.currentLevel,
                                n = !!(this.levels && this.levels.length > 1);
                            return t && n
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.shouldRender() && (null === this.core.mediaControl.$(".vjs-res-button").html() && (this.$el.html(this.template()), this.core.mediaControl.$el.append(this.el)), this.highlightCurrentLevel()), this
                        }
                    }, {
                        key: "fillLevels",
                        value: function(e) {
                            var t = arguments.length <= 1 || void 0 === arguments[1] ? g : arguments[1];
                            if (void 0 === this.selectedLevelId && (this.selectedLevelId = t), this.levels = e, this.levels.length > 1 && "" === this.$(".vjs-control-content > .vjs-control-text").html() && this.$(".vjs-control-content > .vjs-control-text").html("Auto"), this.levelElement().length < this.levels.length)
                                for (var n = 1; n <= this.levels.length; n++) {
                                    var i = this.levels[this.levels.length - n];
                                    this.$(".vjs-menu > .vjs-menu-content").append('<li class="vjs-menu-item" role="button" aria-live="polite" tabindex="0" aria-selected="false" data-level-selector-select="' + i.id + '">' + (void 0 !== i.level ? i.level.height + "p" : i.label) + "</li>")
                                }
                            this.render()
                        }
                    }, {
                        key: "configureLevelsLabels",
                        value: function() {
                            if (void 0 !== this.core.options.levelSelectorConfig)
                                for (var e in this.core.options.levelSelectorConfig.labels || {}) {
                                    e = parseInt(e, 10);
                                    var t = !!this.findLevelBy(e);
                                    t && this.changeLevelLabelBy(e, this.core.options.levelSelectorConfig.labels[e])
                                }
                        }
                    }, {
                        key: "findLevelBy",
                        value: function(e) {
                            var t;
                            return this.levels.forEach(function(n) {
                                n.id === e && (t = n)
                            }), t
                        }
                    }, {
                        key: "changeLevelLabelBy",
                        value: function(e, t) {
                            var n = this;
                            this.levels.forEach(function(i, r) {
                                i.id === e && (n.levels[r].label = t)
                            })
                        }
                    }, {
                        key: "onLevelSelect",
                        value: function(e) {
                            if (e.target.dataset) {
                                if (this.selectedLevelId = parseInt(e.target.dataset.levelSelectorSelect, 10), this.core.getCurrentPlayback().currentLevel > -1 && this.core.getCurrentPlayback().currentLevel == this.selectedLevelId) return !1;
                                this.core.getCurrentPlayback().changeLevel(this.selectedLevelId)
                            }
                            return this.toggleContextMenu(), e.stopPropagation(), this.highlightCurrentLevel(this.selectedLevelId), !1
                        }
                    }, {
                        key: "onShowLevelSelectMenu",
                        value: function(e) {
                            this.toggleContextMenu()
                        }
                    }, {
                        key: "hideSelectLevelMenu",
                        value: function() {
                            this.$(".vjs-menu").hide()
                        }
                    }, {
                        key: "toggleContextMenu",
                        value: function() {
                            this.$(".vjs-menu").toggle()
                        }
                    }, {
                        key: "buttonElement",
                        value: function() {
                            return this.$(".vjs-control-text")
                        }
                    }, {
                        key: "levelElement",
                        value: function(e) {
                            return this.$(".vjs-menu-item" + (isNaN(e) ? "" : '[data-level-selector-select="' + e + '"]'))
                        }
                    }, {
                        key: "getTitle",
                        value: function() {
                            return (this.core.options.levelSelectorConfig || {}).title
                        }
                    }, {
                        key: "updateText",
                        value: function(e) {
                            e === g ? this.buttonElement().text(this.currentLevel ? (void 0 !== this.currentLevel.level ? this.currentLevel.level.height + "p" : this.currentLevel.label) + " (AUTO)" : "AUTO") : this.buttonElement().text(void 0 !== this.findLevelBy(e).level ? this.findLevelBy(e).level.height + "p" : this.findLevelBy(e).label)
                        }
                    }, {
                        key: "updateCurrentLevel",
                        value: function(e) {
                            var t = this.findLevelBy(e.level);
                            this.currentLevel = t ? t : null, this.highlightCurrentLevel()
                        }
                    }, {
                        key: "highlightCurrentLevel",
                        value: function(e) {
                            var t = this.core.getCurrentPlayback();
                            t || void 0 === t.currentLevel || t.currentLevel === g ? (this.levelElement().removeClass("vjs-selected").attr("aria-selected", !1), this.levelElement(isNaN(e) ? t.currentLevel : e).addClass("vjs-selected").attr("aria-selected", !0)) : (this.levelElement().removeClass("vjs-selected").attr("aria-selected", !1), this.currentLevel && this.levelElement(this.currentLevel.id).addClass("vjs-selected").attr("aria-selected", !0)), this.updateText(this.selectedLevelId)
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "level_selector"
                        }
                    }, {
                        key: "template",
                        get: function() {
                            return (0, f["default"])(p["default"])
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return {
                                "class": "vjs-res-button vjs-menu-button vjs-control",
                                role: "button",
                                tabindex: "0",
                                "aria-live": "polite",
                                "aria-haspopup": "true"
                            }
                        }
                    }, {
                        key: "events",
                        get: function() {
                            return {
                                "click .vjs-control-content": "onShowLevelSelectMenu",
                                "click .vjs-menu-item": "onLevelSelect"
                            }
                        }
                    }], [{
                        key: "version",
                        get: function() {
                            return "0.0.1"
                        }
                    }]), t
                }(d["default"]);
            t["default"] = y, e.exports = t["default"]
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(115)
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = n(28),
                s = i(o),
                l = "font-weight: bold; font-size: 13px;",
                u = "color: #006600;" + l,
                c = "color: #0000ff;" + l,
                f = "color: #ff8000;" + l,
                h = "color: #ff0000;" + l,
                d = 0,
                v = 1,
                p = 2,
                g = 3,
                y = 4,
                m = [c, u, f, h, h],
                E = ["debug", "info", "warn", "error", "disabled"],
                b = function() {
                    function e() {
                        var t = this,
                            n = arguments.length <= 0 || void 0 === arguments[0] ? v : arguments[0],
                            i = arguments.length <= 1 || void 0 === arguments[1] ? y : arguments[1];
                        r(this, e), this.kibo = new s["default"], this.kibo.down(["ctrl shift d"], function() {
                            return t.onOff()
                        }), this.BLACKLIST = ["timeupdate", "playback:timeupdate", "playback:progress", "container:hover", "container:timeupdate", "container:progress"], this.level = n, this.offLevel = i
                    }
                    return a(e, [{
                        key: "debug",
                        value: function(e) {
                            this.log(e, d, Array.prototype.slice.call(arguments, 1))
                        }
                    }, {
                        key: "info",
                        value: function(e) {
                            this.log(e, v, Array.prototype.slice.call(arguments, 1))
                        }
                    }, {
                        key: "warn",
                        value: function(e) {
                            this.log(e, p, Array.prototype.slice.call(arguments, 1))
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            this.log(e, g, Array.prototype.slice.call(arguments, 1))
                        }
                    }, {
                        key: "onOff",
                        value: function() {
                            this.level === this.offLevel ? this.level = this.previousLevel : (this.previousLevel = this.level, this.level = this.offLevel), window.console && window.console.log && console.log("%c[noplayer.Log] set log level to " + E[this.level], f)
                        }
                    }, {
                        key: "level",
                        value: function(e) {
                            this.level = e
                        }
                    }, {
                        key: "log",
                        value: function(e, t, n) {
                            if (!(this.BLACKLIST.indexOf(n[0]) >= 0 || t < this.level)) {
                                n || (n = e, e = null);
                                var i = "",
                                    r = m[t];
                                e && (i = "[" + e + "]"), window.console && window.console.log && console.log.apply(console, ["%c[" + E[t] + "]" + i, r].concat(n))
                            }
                        }
                    }]), e
                }();
            t["default"] = b, b.LEVEL_DEBUG = d, b.LEVEL_INFO = v, b.LEVEL_WARN = p, b.LEVEL_ERROR = g, b.getInstance = function() {
                return void 0 === this._instance && (this._instance = new this, this._instance.previousLevel = this._instance.level, this._instance.level = this._instance.offLevel), this._instance
            }, b.setLevel = function(e) {
                this.getInstance().level = e
            }, b.debug = function(e) {
                this.getInstance().debug.apply(this.getInstance(), arguments)
            }, b.info = function(e) {
                this.getInstance().info.apply(this.getInstance(), arguments)
            }, b.warn = function(e) {
                this.getInstance().warn.apply(this.getInstance(), arguments)
            }, b.error = function(e) {
                this.getInstance().error.apply(this.getInstance(), arguments)
            }, e.exports = t["default"]
        },
        function(e, t) {
            e.exports = '		<div class="vjs-poster" tabindex="-1"style="background-image: url(\'<%= poster %>\');"></div>\r\n		<div class="vjs-text-track-display"></div>\r\n		<div class="vjs-glasses-overlay"></div>\r\n		<div class="vjs-loading-spinner"></div>\r\n		<div class="vjs-big-play-button vjs-big-play-centered" role="button" aria-live="polite" tabindex="0" aria-label="play video">\r\n			<span aria-hidden="true"></span>\r\n		</div>\r\n		<div class="vjs-error-display">\r\n			<div></div>\r\n		</div>'
        },
        function(e, t) {
            e.exports = '			<div class="vjs-play-control vjs-control" role="button" aria-live="polite" tabindex="0">\n				<div class="vjs-control-content">\n					<span class="vjs-control-text">Play</span>\n				</div>\n			</div>\n			<div class="vjs-current-time vjs-time-controls vjs-control">\n				<div class="vjs-current-time-display" aria-live="off">\n					<span class="vjs-control-text">Current Time </span>\n					--:--\n				</div>\n			</div>\n			<div class="vjs-time-divider">\n				<div><span>/</span></div>\n			</div>\n			<div class="vjs-duration vjs-time-controls vjs-control">\n				<div class="vjs-duration-display" aria-live="off">\n					<span class="vjs-control-text">Duration Time </span>\n					--:--\n				</div>\n			</div>\n			<div class="vjs-remaining-time vjs-time-controls vjs-control">\n				<div class="vjs-remaining-time-display" aria-live="off">\n					<span class="vjs-control-text">Remaining Time </span>\n					-0:00\n				</div>\n			</div>\n			<div class="vjs-live-control vjs-control">\n				<div class="vjs-live-display" aria-live="off">\n					<span class="vjs-live-info"></span>\n					<span class="vjs-control-text">Stream Type </span>\n					LIVE\n				</div>\n			</div>\n			<div class="vjs-dvr-control vjs-control">\n				<div class="vjs-dvr-display" aria-live="off">\n					BACK TO LIVE\n				</div>\n			</div>\n			<div class="vjs-progress-control vjs-control">\n				<div role="slider" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" tabindex="0" class="vjs-progress-holder vjs-slider" aria-label="video progress bar" aria-valuetext="0:00:00">\n					<div class="vjs-load-progress">\n						<span class="vjs-control-text">\n							<span>Loaded</span>\n							: 100%\n						</span>\n					</div>\n					<div class="vjs-mouse-display" data-current-time="0:00" style="left: 0px;"></div>\n					<div class="vjs-play-progress">\n						<span class="vjs-control-text">\n							<span>Progress</span>\n							: 10%\n						</span>\n					</div>\n					<div class="vjs-seek-handle vjs-slider-handle" aria-live="off">\n						<span class="vjs-control-text">00:00</span>\n					</div>\n				</div>\n			</div>\n			<div class="vjs-fullscreen-control vjs-control" role="button" aria-live="polite" tabindex="0">\n				<div class="vjs-control-content">\n					<span class="vjs-control-text">Fullscreen</span>\n				</div>\n			</div>\n			<div class="vjs-vr-control vjs-control" role="button" aria-live="polite" tabindex="0">\n				<div class="vjs-control-content">\n					<span class="vjs-control-text">VR</span>\n				</div>\n			</div>\n			<div class="vjs-volume-control vjs-control">\n				<div role="slider" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" tabindex="0" class="vjs-volume-bar vjs-slider" aria-label="volume level" aria-valuetext="100%">\n					<div class="vjs-volume-level">\n						<span class="vjs-control-text"></span>\n					</div>\n					<div class="vjs-volume-handle vjs-slider-handle">\n						<span class="vjs-control-text">0</span>\n					</div>\n				</div>\n			</div>\n			<div class="vjs-mute-control vjs-control" role="button" aria-live="polite" tabindex="0">\n				<div>\n					<span class="vjs-control-text">Mute</span>\n				</div>\n			</div>'
        },
        function(e, t) {
            e.exports = '<param name="movie" value="<%= swfPath %>?inline=1">\n<param name="quality" value="autohigh">\n<param name="swliveconnect" value="true">\n<param name="allowScriptAccess" value="always">\n<param name="bgcolor" value="#000000">\n<param name="allowFullScreen" value="false">\n<param name="wmode" value="<%= wmode %>">\n<param name="tabindex" value="1">\n<param name="FlashVars" value="playbackId=<%= playbackId %>&callback=<%= callbackName %>">\n<embed\n  name="<%= cid %>"\n  type="application/x-shockwave-flash"\n  disabled="disabled"\n  tabindex="-1"\n  enablecontextmenu="false"\n  allowScriptAccess="always"\n  quality="autohigh"\n  pluginspage="http://www.macromedia.com/go/getflashplayer"\n  wmode="<%= wmode %>"\n  swliveconnect="true"\n  allowfullscreen="false"\n  bgcolor="#000000"\n  FlashVars="playbackId=<%= playbackId %>&callback=<%= callbackName %>"\n  src="<%= swfPath %>"\n  width="100%"\n  height="100%">\n</embed>\n\n'
        },
        function(e, t) {
            e.exports = '<source src="<%=src%>" type="<%=type%>">\n'
        },
        function(e, t) {
            e.exports = '<div class="vjs-control-content">\r\n	<span class="vjs-control-text"></span>\r\n</div>\r\n<div class="vjs-menu">\r\n	<ul class="vjs-menu-content">\r\n		<li class="vjs-menu-title vjs-res-menu-title" aria-selected="false">Quality</li>\r\n		<li class="vjs-menu-item" role="button" aria-live="polite" tabindex="0" aria-selected="false" data-level-selector-select="-1">AUTO</li>\r\n	</ul>\r\n</div>\r\n'
        },
        function(e, t, n, i, r, a, o) {
            "use strict";

            function s(e) {
                return null == e ? "" : e + ""
            }

            function l(e, t, n) {
                var i = typeof e;
                return "function" == i ? void 0 === t ? e : S(e, t, n) : null == e ? A : "object" == i ? f(e) : void 0 === t ? T(e) : h(e, t)
            }

            function u(e, t, n) {
                if (null != e) {
                    void 0 !== n && n in E(e) && (t = [n]);
                    for (var i = 0, r = t.length; null != e && r > i;) e = e[t[i++]];
                    return i && i == r ? e : void 0
                }
            }

            function c(e, t, n) {
                var i = t.length,
                    r = i,
                    a = !n;
                if (null == e) return !r;
                for (e = E(e); i--;) {
                    var o = t[i];
                    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
                }
                for (; ++i < r;) {
                    o = t[i];
                    var s = o[0],
                        l = e[s],
                        u = o[1];
                    if (a && o[2]) {
                        if (void 0 === l && !(s in e)) return !1
                    } else {
                        var c = n ? n(l, u, s) : void 0;
                        if (!(void 0 === c ? L(u, l, n, !0) : c)) return !1
                    }
                }
                return !0
            }

            function f(e) {
                var t = g(e);
                if (1 == t.length && t[0][2]) {
                    var n = t[0][0],
                        i = t[0][1];
                    return function(e) {
                        return null == e ? !1 : e[n] === i && (void 0 !== i || n in E(e))
                    }
                }
                return function(e) {
                    return c(e, t)
                }
            }

            function h(e, t) {
                var n = R(e),
                    i = y(e) && m(t),
                    r = e + "";
                return e = b(e),
                    function(a) {
                        if (null == a) return !1;
                        var o = r;
                        if (a = E(a), (n || !i) && !(o in a)) {
                            if (a = 1 == e.length ? a : u(a, p(e, 0, -1)), null == a) return !1;
                            o = k(e), a = E(a)
                        }
                        return a[o] === t ? void 0 !== t || o in a : L(t, a[o], void 0, !0)
                    }
            }

            function d(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }

            function v(e) {
                var t = e + "";
                return e = b(e),
                    function(n) {
                        return u(n, e, t)
                    }
            }

            function p(e, t, n) {
                var i = -1,
                    r = e.length;
                t = null == t ? 0 : +t || 0, 0 > t && (t = -t > r ? 0 : r + t), n = void 0 === n || n > r ? r : +n || 0, 0 > n && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var a = Array(r); ++i < r;) a[i] = e[i + t];
                return a
            }

            function g(e) {
                for (var t = O(e), n = t.length; n--;) t[n][2] = m(t[n][1]);
                return t
            }

            function y(e, t) {
                var n = typeof e;
                if ("string" == n && C.test(e) || "number" == n) return !0;
                if (R(e)) return !1;
                var i = !w.test(e);
                return i || null != t && e in E(t)
            }

            function m(e) {
                return e === e && !_(e)
            }

            function E(e) {
                return _(e) ? e : Object(e)
            }

            function b(e) {
                if (R(e)) return e;
                var t = [];
                return s(e).replace(D, function(e, n, i, r) {
                    t.push(i ? r.replace(P, "$1") : n || e)
                }), t
            }

            function k(e) {
                var t = e ? e.length : 0;
                return t ? e[t - 1] : void 0
            }

            function _(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function A(e) {
                return e
            }

            function T(e) {
                return y(e) ? d(e) : v(e)
            }
            var L = n(i),
                S = n(r),
                R = n(a),
                O = n(o),
                w = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                C = /^\w*$/,
                D = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                P = /\\(\\)?/g;
            e.exports = l
        },
        function(e, t, n, i, r, a) {
            "use strict";

            function o(e) {
                return !!e && "object" == typeof e
            }

            function s(e, t) {
                for (var n = -1, i = e.length; ++n < i;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }

            function l(e, t, n, i, r, a) {
                return e === t ? !0 : null == e || null == t || !d(e) && !o(t) ? e !== e && t !== t : u(e, t, l, n, i, r, a)
            }

            function u(e, t, n, i, r, a, o) {
                var s = v(e),
                    l = v(t),
                    u = m,
                    d = m;
                s || (u = O.call(e), u == y ? u = A : u != A && (s = p(e))), l || (d = O.call(t), d == y ? d = A : d != A && (l = p(t)));
                var g = u == A,
                    E = d == A,
                    b = u == d;
                if (b && !s && !g) return f(e, t, u);
                if (!r) {
                    var k = g && R.call(e, "__wrapped__"),
                        _ = E && R.call(t, "__wrapped__");
                    if (k || _) return n(k ? e.value() : e, _ ? t.value() : t, i, r, a, o)
                }
                if (!b) return !1;
                a || (a = []), o || (o = []);
                for (var T = a.length; T--;)
                    if (a[T] == e) return o[T] == t;
                a.push(e), o.push(t);
                var L = (s ? c : h)(e, t, n, i, r, a, o);
                return a.pop(), o.pop(), L
            }

            function c(e, t, n, i, r, a, o) {
                var l = -1,
                    u = e.length,
                    c = t.length;
                if (u != c && !(r && c > u)) return !1;
                for (; ++l < u;) {
                    var f = e[l],
                        h = t[l],
                        d = i ? i(r ? h : f, r ? f : h, l) : void 0;
                    if (void 0 !== d) {
                        if (d) continue;
                        return !1
                    }
                    if (r) {
                        if (!s(t, function(e) {
                                return f === e || n(f, e, i, r, a, o)
                            })) return !1
                    } else if (f !== h && !n(f, h, i, r, a, o)) return !1
                }
                return !0
            }

            function f(e, t, n) {
                switch (n) {
                    case E:
                    case b:
                        return +e == +t;
                    case k:
                        return e.name == t.name && e.message == t.message;
                    case _:
                        return e != +e ? t != +t : e == +t;
                    case T:
                    case L:
                        return e == t + ""
                }
                return !1
            }

            function h(e, t, n, i, r, a, o) {
                var s = g(e),
                    l = s.length,
                    u = g(t),
                    c = u.length;
                if (l != c && !r) return !1;
                for (var f = l; f--;) {
                    var h = s[f];
                    if (!(r ? h in t : R.call(t, h))) return !1
                }
                for (var d = r; ++f < l;) {
                    h = s[f];
                    var v = e[h],
                        p = t[h],
                        y = i ? i(r ? p : v, r ? v : p, h) : void 0;
                    if (!(void 0 === y ? n(v, p, i, r, a, o) : y)) return !1;
                    d || (d = "constructor" == h)
                }
                if (!d) {
                    var m = e.constructor,
                        E = t.constructor;
                    if (m != E && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof E && E instanceof E)) return !1
                }
                return !0
            }

            function d(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            var v = n(i),
                p = n(r),
                g = n(a),
                y = "[object Arguments]",
                m = "[object Array]",
                E = "[object Boolean]",
                b = "[object Date]",
                k = "[object Error]",
                _ = "[object Number]",
                A = "[object Object]",
                T = "[object RegExp]",
                L = "[object String]",
                S = Object.prototype,
                R = S.hasOwnProperty,
                O = S.toString;
            e.exports = l
        },
        function(e, t, n, i) {
            "use strict";

            function r(e) {
                return a(e) ? e : Object(e)
            }

            function a(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function o(e) {
                e = r(e);
                for (var t = -1, n = s(e), i = n.length, a = Array(i); ++t < i;) {
                    var o = n[t];
                    a[t] = [o, e[o]]
                }
                return a
            }
            var s = n(i);
            e.exports = o
        },
        function(e, t, n, i, r, a) {
            "use strict";

            function o(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }

            function s(e) {
                return null != e && u(k(e))
            }

            function l(e, t) {
                return e = "number" == typeof e || g.test(e) ? +e : -1, t = null == t ? b : t, e > -1 && e % 1 == 0 && t > e
            }

            function u(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && b >= e
            }

            function c(e) {
                for (var t = h(e), n = t.length, i = n && e.length, r = !!i && u(i) && (p(e) || v(e)), a = -1, o = []; ++a < n;) {
                    var s = t[a];
                    (r && l(s, i) || m.call(e, s)) && o.push(s)
                }
                return o
            }

            function f(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function h(e) {
                if (null == e) return [];
                f(e) || (e = Object(e));
                var t = e.length;
                t = t && u(t) && (p(e) || v(e)) && t || 0;
                for (var n = e.constructor, i = -1, r = "function" == typeof n && n.prototype === e, a = Array(t), o = t > 0; ++i < t;) a[i] = i + "";
                for (var s in e) o && l(s, t) || "constructor" == s && (r || !m.call(e, s)) || a.push(s);
                return a
            }
            var d = n(i),
                v = n(r),
                p = n(a),
                g = /^\d+$/,
                y = Object.prototype,
                m = y.hasOwnProperty,
                E = d(Object, "keys"),
                b = 9007199254740991,
                k = o("length"),
                _ = E ? function(e) {
                    var t = null == e ? void 0 : e.constructor;
                    return "function" == typeof t && t.prototype === e || "function" != typeof e && s(e) ? c(e) : f(e) ? E(e) : []
                } : c;
            e.exports = _
        }
    ]))
});