"use strict";
(self.webpackChunkcsgoroll = self.webpackChunkcsgoroll || []).push([
    ["default-libs_crash_src_lib_crash-shared_module_ts"], {
        98839: (_t, K, t) => {
            t.d(K, {
                a: () => u
            });
            var e = t(22223);
            let u = (() => {
                class A {
                    transform(p) {
                        switch (p) {
                            case "leave":
                                return "scale3d(0.75, 0.75, 0.75) translate3d(0, -25%, 0)";
                            case "upcoming":
                                return "scale3d(0.5, 0.5, 0.5) translate3d(0, 50%, 0)";
                            default:
                                return "scale3d(1, 1, 1) translate3d(0, 0, 0)"
                        }
                    }
                }
                return A.\u0275fac = function(p) {
                    return new(p || A)
                }, A.\u0275pipe = e.Yjl({
                    name: "animatePotentialWinItem",
                    type: A,
                    pure: !0
                }), A
            })()
        },
        209: (_t, K, t) => {
            t.d(K, {
                v: () => h
            });
            var e = t(91591),
                u = t(75855),
                A = t(53788),
                D = t(57854),
                p = t(37365),
                w = t(9124),
                $ = t(94813),
                i = t(71884),
                B = t(54004),
                S = t(68675),
                E = t(34782),
                C = t(54968),
                n = t(78372),
                Z = t(18505),
                o = t(39300),
                s = t(43475),
                a = t(22223),
                F = t(5668),
                Q = t(44755),
                et = t(55829),
                j = t(82963),
                Y = t(12551),
                at = t(99233),
                mt = t(56340),
                T = t(45575),
                it = t(75744),
                q = t(16622),
                tt = t(66985),
                R = t(98839);

            function V(c, r) {
                1 & c && a.GkF(0)
            }

            function N(c, r) {
                1 & c && a.GkF(0)
            }

            function st(c, r) {
                if (1 & c && a._UZ(0, "cw-crash-bet", 12), 2 & c) {
                    const m = a.oxw().$implicit,
                        P = a.oxw(2).ngIf;
                    a.Q6J("gameStatus", P)("crashBet", m.bet)("cashedOut", !0)("floatingBet", !0)
                }
            }
            const H = function(c, r) {
                return {
                    left: c,
                    top: r
                }
            };

            function nt(c, r) {
                if (1 & c && (a.TgZ(0, "div", 10), a.YNc(1, st, 1, 4, "cw-crash-bet", 11), a.qZA()), 2 & c) {
                    const m = r.$implicit,
                        P = a.oxw().spawneryIndex;
                    a.Q6J("ngStyle", a.WLB(2, H, m.x + "%", m.y + "%")), a.xp6(1), a.Q6J("ngIf", m.spawneryIndex === P && m.bet)
                }
            }

            function G(c, r) {
                if (1 & c && a.YNc(0, nt, 2, 5, "div", 9), 2 & c) {
                    const m = a.oxw(2);
                    a.Q6J("ngForOf", m.betPopupsCache)
                }
            }

            function z(c, r) {
                if (1 & c && (a.ynx(0), a.TgZ(1, "img", 20), a.ALo(2, "ngrxPush"), a.ALo(3, "imgOptimize"), a.qZA(), a.BQk()), 2 & c) {
                    const m = a.oxw().$implicit,
                        P = a.oxw(5);
                    a.xp6(1), a.Udp("animation", a.lcZ(2, 5, P.scaleProgress$)), a.Q6J("@itemLeave", void 0)("src", a.xi3(3, 7, null == m.itemVariant ? null : m.itemVariant.iconUrl, P.maxImageSize), a.LSH)("sizes", P.maxImageSize)
                }
            }

            function M(c, r) {
                if (1 & c && (a._UZ(0, "img", 20), a.ALo(1, "imgOptimize")), 2 & c) {
                    const m = a.oxw().$implicit,
                        P = a.oxw(5);
                    a.Q6J("src", a.xi3(1, 2, null == m.itemVariant ? null : m.itemVariant.iconUrl, P.maxImageSize), a.LSH)("sizes", P.maxImageSize)
                }
            }

            function I(c, r) {
                if (1 & c && (a.TgZ(0, "div", 17)(1, "div", 18), a.ALo(2, "animatePotentialWinItem"), a.ALo(3, "ngrxPush"), a.YNc(4, z, 4, 10, "ng-container", 13), a.YNc(5, M, 2, 5, "ng-template", null, 19, a.W1O), a.qZA()()), 2 & c) {
                    const m = r.$implicit,
                        P = a.MAs(6),
                        L = a.oxw(5);
                    a.xp6(1), a.Udp("transform", a.lcZ(2, 8, m.state))("opacity", "leave" === m.state ? "0" : "1"), a.ekj("idle", !a.lcZ(3, 10, L.observedCrashBet$)), a.xp6(3), a.Q6J("ngIf", "upcoming" === m.state)("ngIfElse", P)
                }
            }

            function v(c, r) {
                if (1 & c && (a.ynx(0), a._UZ(1, "div", 15), a.ALo(2, "ngrxPush"), a.YNc(3, I, 7, 12, "div", 16), a.BQk()), 2 & c) {
                    const m = r.ngIf,
                        P = a.oxw(4);
                    a.xp6(1), a.Q6J("ngClass", a.lcZ(2, 2, P.observedCrashBet$) ? "text-" + (null == m[0] ? null : m[0].rarity) : "idle"), a.xp6(2), a.Q6J("ngForOf", P.itemsVisualStates)
                }
            }

            function b(c, r) {
                if (1 & c && (a.ynx(0), a.YNc(1, v, 4, 4, "ng-container", 1), a.ALo(2, "ngrxPush"), a.BQk()), 2 & c) {
                    const m = a.oxw(3);
                    a.xp6(1), a.Q6J("ngIf", a.lcZ(2, 1, m.potential$))
                }
            }

            function U(c, r) {
                1 & c && a._UZ(0, "cw-crash-coin-animation")
            }

            function ht(c, r) {
                if (1 & c && (a.ynx(0), a.YNc(1, b, 3, 3, "ng-container", 13), a.ALo(2, "ngrxPush"), a.YNc(3, U, 1, 0, "ng-template", null, 14, a.W1O), a.BQk()), 2 & c) {
                    const m = a.MAs(4),
                        P = a.oxw(2);
                    a.xp6(1), a.Q6J("ngIf", a.lcZ(2, 2, P.skinReward$))("ngIfElse", m)
                }
            }

            function dt(c, r) {
                1 & c && a._UZ(0, "cw-crash-multiplier")
            }

            function pt(c, r) {
                1 & c && (a.TgZ(0, "div", 21), a._UZ(1, "cw-crash-countdown"), a.qZA()), 2 & c && a.Q6J("@inOutAnimation", void 0)
            }
            const ut = function() {
                    return {
                        spawneryIndex: 0
                    }
                },
                ot = function() {
                    return {
                        spawneryIndex: 1
                    }
                };

            function x(c, r) {
                if (1 & c && (a.ynx(0), a.TgZ(1, "div", 2)(2, "div", 3), a.YNc(3, V, 1, 0, "ng-container", 4), a.qZA(), a.TgZ(4, "div", 5), a.YNc(5, N, 1, 0, "ng-container", 4), a.qZA(), a.YNc(6, G, 1, 1, "ng-template", null, 6, a.W1O), a.TgZ(8, "div", 7), a.YNc(9, ht, 5, 4, "ng-container", 1), a._UZ(10, "cw-crash-busted"), a.YNc(11, dt, 1, 0, "cw-crash-multiplier", 1), a.qZA()(), a.YNc(12, pt, 2, 1, "div", 8), a.BQk()), 2 & c) {
                    const m = r.ngIf,
                        P = a.MAs(7);
                    a.xp6(3), a.Q6J("ngTemplateOutlet", P)("ngTemplateOutletContext", a.DdM(10, ut)), a.xp6(2), a.Q6J("ngTemplateOutlet", P)("ngTemplateOutletContext", a.DdM(11, ot)), a.xp6(4), a.Q6J("ngIf", "STARTED" === m), a.xp6(1), a.ekj("invisible", "FINISHED" !== m), a.Q6J("@bustedShowAnim", "FINISHED" === m), a.xp6(1), a.Q6J("ngIf", "CREATED" !== m), a.xp6(1), a.Q6J("ngIf", "CREATED" === m)
                }
            }
            let h = (() => {
                class c {
                    constructor(m, P, L, W, k) {
                        this.userService = m, this.crashService = P, this.appConfig = L, this.platform = W, this.destoryRef = k, this.status$ = this.crashService.game$.pipe((0, $.j)("status"), (0, i.x)()), this.currency$ = this.userService.currency$, this.skinReward$ = this.crashService.crashBetMode$.pipe((0, B.U)(J => J === p.CBC.ITEMS_AND_COINS)), this.observedCrashBet$ = this.crashService.observedCrashBet$.pipe((0, S.O)(null), (0, E.d)({
                            bufferSize: 1,
                            refCount: !0
                        })), this.paths = this.appConfig.crash.animationPaths, this.itemFillsVisualStates = [], this.itemsVisualStates = [], this.betPopupsCache = [], this.betPopupsCacheSize = 8, this.betPopupsCacheIndex = 0, this.maxImageSize = 200, this.multiplierRelativeSize = .1888, (0, C.R)(this.platform.window, "resize").pipe((0, n.b)(500), (0, Z.b)(() => this.setSizeImages()), (0, u.sL)()).subscribe(), this.potential$ = this.crashService.potential$;
                        for (let J = 0; J < 2; J++) this.itemFillsVisualStates.push({
                            itemVariant: null,
                            state: "leave"
                        });
                        for (let J = 0; J < 3; J++) this.itemsVisualStates.push({
                            itemVariant: null,
                            state: "leave"
                        });
                        this.crashService.crashBets$.pipe((0, u.sL)()).subscribe(J => {
                            if (!J.length || this.betPopupsCache.length) return;
                            const rt = Object.assign({}, J[0]),
                                ct = [];
                            for (let Ct = 0; Ct < this.betPopupsCacheSize; Ct++) ct.push({
                                x: 0,
                                y: 0,
                                spawneryIndex: Ct % 2,
                                bet: rt
                            });
                            this.betPopupsCache = [...this.betPopupsCache, ...ct]
                        }), this.cashedOutCrashBetUpdate$ = this.crashService.betUpdate$.pipe((0, o.h)(J => !!J.tick)), this.cashedOutCrashBetUpdate$.pipe((0, u.sL)()).subscribe(this.onNewCashedOutBet.bind(this)), this.scaleProgress$ = this.crashService.timeBetweenPotentials.pipe((0, B.U)(J => `imageScaleUp ${Math.floor(J)}ms forwards`))
                    }
                    onNewCashedOutBet(m) {
                        this.betPopupsCache.length && (this.betPopupsCacheIndex = (this.betPopupsCacheIndex + 1) % this.betPopupsCache.length, this.betPopupsCache = [...this.betPopupsCache.slice(0, this.betPopupsCacheIndex), {
                            ...this.betPopupsCache[this.betPopupsCacheIndex],
                            x: 100 * Math.random(),
                            y: 100 * Math.random(),
                            bet: m
                        }, ...this.betPopupsCache.slice(this.betPopupsCacheIndex + 1)])
                    }
                    ngOnInit() {
                        this.potential$.pipe((0, u.sL)(this.destoryRef)).subscribe(m => {
                            m.forEach((L, W) => {
                                this.itemFillsVisualStates[W] && (this.itemFillsVisualStates[W].itemVariant = L)
                            });
                            const P = [...this.itemsVisualStates];
                            m.forEach((L, W) => {
                                const k = 0 === W ? "current" : "upcoming",
                                    J = P.find(Ct => Ct.itemVariant === L),
                                    rt = P.find(Ct => "leave" === Ct.state);
                                let ct;
                                ct = J || rt || P[0], ct.itemVariant = L, ct.state = k, P.splice(P.indexOf(ct), 1)
                            }), P.forEach(L => L.state = "leave")
                        }), this.setSizeImages()
                    }
                    getIndex(m) {
                        return m
                    }
                    setSizeImages() {
                        this.maxImageSize = Math.round(this.platform.window.innerHeight * this.multiplierRelativeSize)
                    }
                }
                return c.\u0275fac = function(m) {
                    return new(m || c)(a.Y36(D.KD), a.Y36(s.e), a.Y36(A.q), a.Y36(F.m), a.Y36(a.ktI))
                }, c.\u0275cmp = a.Xpm({
                    type: c,
                    selectors: [
                        ["cw-crash-animation"]
                    ],
                    inputs: {
                        startDate: "startDate",
                        game: "game"
                    },
                    decls: 3,
                    vars: 3,
                    consts: [
                        [1, "animation-container"],
                        [4, "ngIf"],
                        [1, "animation-bg"],
                        [1, "bet-popup-spawnery", "left-spawnery"],
                        [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                        [1, "bet-popup-spawnery", "right-spawnery"],
                        ["betPopupsTemplate", ""],
                        [1, "circle-button-container"],
                        ["class", "d-flex flex-column align-items-center justify-content-center position-absolute w-100 m-auto inset-0", 4, "ngIf"],
                        ["class", "floating-crash-bet-offset-wrap", 3, "ngStyle", 4, "ngFor", "ngForOf"],
                        [1, "floating-crash-bet-offset-wrap", 3, "ngStyle"],
                        ["class", "floating-crash-bet", 3, "gameStatus", "crashBet", "cashedOut", "floatingBet", 4, "ngIf"],
                        [1, "floating-crash-bet", 3, "gameStatus", "crashBet", "cashedOut", "floatingBet"],
                        [4, "ngIf", "ngIfElse"],
                        ["coinTpl", ""],
                        [1, "inner-hexagon-container", 3, "ngClass"],
                        ["class", "potential-win-wrapper", 4, "ngFor", "ngForTrackByIndex", "ngForOf"],
                        [1, "potential-win-wrapper"],
                        [1, "potential-win"],
                        ["imageNoTransformTpl", ""],
                        ["loading", "lazy", 3, "src", "sizes"],
                        [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "position-absolute", "w-100", "m-auto", "inset-0"]
                    ],
                    template: function(m, P) {
                        1 & m && (a.TgZ(0, "div", 0), a.YNc(1, x, 13, 12, "ng-container", 1), a.ALo(2, "ngrxPush"), a.qZA()), 2 & m && (a.xp6(1), a.Q6J("ngIf", a.lcZ(2, 1, P.status$)))
                    },
                    dependencies: [Q.mk, Q.sg, Q.O5, Q.tP, Q.PC, et.oO, et.Zl, j.d, Y.a, at.C, mt.L, T.o, it.R, q.fM, tt.H, R.a],
                    styles: ["[_nghost-%COMP%]{font-weight:var(--crash-game-status-font-weight);color:var(--crash-game-status-color);text-align:center;height:100%;display:flex;justify-content:center;align-items:center}.animation-container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding:min(3rem,6%) 8%}@media (max-width: 767.98px){.animation-container[_ngcontent-%COMP%]{padding:0}}.animation-container[_ngcontent-%COMP%]   .animation-bg[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto;background:center/contain var(--crash-bg-file) no-repeat;box-sizing:content-box}.animation-container[_ngcontent-%COMP%]   .bet-pupup-spawnery[_ngcontent-%COMP%]{position:absolute;inset:0 auto 0 0;width:7.5%;z-index:-1}.animation-container[_ngcontent-%COMP%]   .bet-pupup-spawnery.left-spawnery[_ngcontent-%COMP%]{right:calc(50% + 200px)}.animation-container[_ngcontent-%COMP%]   .bet-pupup-spawnery.right-spawnery[_ngcontent-%COMP%]{left:calc(50% + 200px)}.animation-container[_ngcontent-%COMP%]   .floating-crash-bet-offset-wrap[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%)}.animation-container[_ngcontent-%COMP%]   .floating-crash-bet-offset-wrap[_ngcontent-%COMP%]   cw-crash-bet[_ngcontent-%COMP%]{opacity:0}.animation-container[_ngcontent-%COMP%]   .circle-button-container[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:calc(100% - var(--crash-inner-shape-padding-horizontal, 0) * 2)}.animation-container[_ngcontent-%COMP%]   .circle-button-container[_ngcontent-%COMP%]   cw-crash-multiplier[_ngcontent-%COMP%]{position:absolute;inset:var(--crash-multiplier-position-top) auto auto auto;height:2rem}.animation-container[_ngcontent-%COMP%]   .inner-hexagon-container[_ngcontent-%COMP%]{position:absolute;inset:var(--crash-inner-shape-padding-top) 0 var(--crash-inner-shape-padding-bottom) 0}.animation-container[_ngcontent-%COMP%]   .inner-hexagon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.animation-container[_ngcontent-%COMP%]   .inner-hexagon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .item-fill[_ngcontent-%COMP%]{opacity:.5;transform:translateZ(0)}.animation-container[_ngcontent-%COMP%]   .inner-hexagon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .item-color-fill[_ngcontent-%COMP%]{transition:fill .2s}.animation-container[_ngcontent-%COMP%]   .inner-hexagon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .item-fill-patch[_ngcontent-%COMP%]{transform:scaleZ(1);transform-origin:50% 50%;fill:var(--crash-inner-shape-bg-color)}.animation-container[_ngcontent-%COMP%]   .inner-hexagon-container.idle[_ngcontent-%COMP%]{color:gray!important}.animation-container[_ngcontent-%COMP%]   .potential-win-wrapper[_ngcontent-%COMP%]{position:absolute;inset:0}.animation-container[_ngcontent-%COMP%]   .potential-win[_ngcontent-%COMP%]{position:absolute;inset:0;filter:drop-shadow(8px 8px 12px rgba(0,0,0,.8));transition:transform .3s,opacity .3s}.animation-container[_ngcontent-%COMP%]   .potential-win[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:0;height:30%;max-width:100%;transform:translateZ(0);margin:auto;object-fit:contain}.animation-container[_ngcontent-%COMP%]   .potential-win.idle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:grayscale(90%)}.bottom-box[_ngcontent-%COMP%]{height:8rem;color:#8e8e99;margin-top:2rem;font-size:var(--crash-game-countdown-small-font-size);display:inline-block;text-transform:uppercase}.bottom-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{min-width:14rem;overflow:hidden;white-space:nowrap}.bottom-box[_ngcontent-%COMP%]   .balance[_ngcontent-%COMP%]{margin-top:1rem;font-size:var(--crash-game-status-font-size);color:var(--crash-game-status-color)}@keyframes _ngcontent-%COMP%_imageScaleUp{0%{transform:scale3d(.25,.25,.25)}to{transform:scaleZ(1)}}", "@keyframes _ngcontent-%COMP%_tutorial-pointer{to{transform:translate3d(0,2rem,0)}}.box[_ngcontent-%COMP%]{padding:1rem;overflow:hidden;border-radius:.5rem;background:var(--card-bg)}.tutorial-overlay[_ngcontent-%COMP%]{z-index:1100}.tutorial-button-container[_ngcontent-%COMP%]{position:relative}.tutorial-button-container[_ngcontent-%COMP%]   .tutorial-pointer[_ngcontent-%COMP%]{pointer-events:none;position:absolute;top:-5.5rem;left:0;right:0;margin:auto;animation:_ngcontent-%COMP%_tutorial-pointer .5s infinite alternate;cursor:pointer}.tutorial-button-container[_ngcontent-%COMP%]   .tutorial-pointer.bottom[_ngcontent-%COMP%]{top:0}.tutorial-button-container[_ngcontent-%COMP%]   .tutorial-pointer.bottom[_ngcontent-%COMP%]   cw-icon[_ngcontent-%COMP%]{transform:rotate3d(0,0,1,90deg);margin-left:-1rem}.tutorial-button-container[_ngcontent-%COMP%]   .tutorial-pointer[_ngcontent-%COMP%]   cw-icon[_ngcontent-%COMP%]{transform:rotate3d(0,0,1,-90deg);margin-left:1rem;width:6rem;height:6rem}"],
                    data: {
                        animation: [(0, e.X$)("itemLeave", [(0, e.eR)(":leave", (0, e.jt)("300ms"))]), (0, w.ub)({
                            anchor: "bustedShowAnim",
                            duration: 500
                        }), (0, e.X$)("inOutAnimation", [(0, e.eR)(":enter", [(0, e.oB)({
                            opacity: 0
                        }), (0, e.jt)("150ms ease", (0, e.oB)({
                            opacity: 1
                        }))]), (0, e.eR)(":leave", [(0, e.oB)({
                            opacity: 1
                        }), (0, e.jt)("300ms ease", (0, e.oB)({
                            opacity: 0
                        }))])])]
                    },
                    changeDetection: 0
                }), c
            })()
        },
        66188: (_t, K, t) => {
            t.d(K, {
                F: () => ot
            });
            var e = t(53788),
                u = t(13264),
                A = t(57854),
                D = t(37365),
                p = t(9124),
                w = t(94813),
                $ = t(54004),
                i = t(71884),
                B = t(34782),
                S = t(54968),
                E = t(69718),
                C = t(56451),
                n = t(39646),
                Z = t(43475),
                o = t(22223),
                s = t(5668),
                a = t(44755),
                F = t(55829),
                Q = t(16622),
                et = t(86934),
                j = t(18174),
                Y = t(17007),
                at = t(5068),
                mt = t(12551),
                T = t(16984),
                it = t(65124);

            function q(x, h) {
                if (1 & x && (o.ynx(0), o.TgZ(1, "div", 12), o.GkF(2, 13), o.TgZ(3, "span", 14), o.SDv(4, 15), o.ALo(5, "ngrxPush"), o.qZA()(), o.BQk()), 2 & x) {
                    const c = o.oxw(),
                        r = o.MAs(22);
                    o.xp6(2), o.Q6J("ngTemplateOutlet", r), o.xp6(3), o.pQV(o.lcZ(5, 2, c.queuedBetsCount$)), o.QtT(4)
                }
            }

            function tt(x, h) {
                if (1 & x && (o.TgZ(0, "div", 12), o.GkF(1, 13), o.TgZ(2, "span", 16), o.SDv(3, 17), o.ALo(4, "ngrxPush"), o.qZA()()), 2 & x) {
                    const c = o.oxw(),
                        r = o.MAs(22);
                    let m;
                    o.xp6(1), o.Q6J("ngTemplateOutlet", r), o.xp6(3), o.pQV(null == (m = o.lcZ(4, 2, c.crashBetsInGame$)) ? null : m.length), o.QtT(3)
                }
            }

            function R(x, h) {
                if (1 & x && (o.ynx(0), o.TgZ(1, "span", 18), o._uU(2), o.ALo(3, "currencySymbol"), o.ALo(4, "ngrxPush"), o.qZA(), o.BQk()), 2 & x) {
                    const c = o.oxw();
                    o.xp6(2), o.Oqu(o.lcZ(3, 1, o.lcZ(4, 3, c.userCurrency$)))
                }
            }

            function V(x, h) {
                1 & x && o._UZ(0, "span", 19)
            }

            function N(x, h) {
                if (1 & x && (o.ynx(0), o._uU(1), o.ALo(2, "number"), o.BQk()), 2 & x) {
                    const c = o.oxw().ngrxLet;
                    o.xp6(1), o.hij(" ", o.xi3(2, 1, c, "1.2-2"), " ")
                }
            }

            function st(x, h) {
                if (1 & x && (o._uU(0), o.ALo(1, "number"), o.ALo(2, "ngrxPush"), o.ALo(3, "ticker")), 2 & x) {
                    const c = o.oxw().ngrxLet;
                    o.hij(" ", o.xi3(1, 1, o.lcZ(2, 4, o.lcZ(3, 6, c)), "1.2-2"), " ")
                }
            }

            function H(x, h) {
                if (1 & x && (o.ynx(0), o.TgZ(1, "span", 20), o.YNc(2, N, 3, 4, "ng-container", 1), o.ALo(3, "ngrxPush"), o.YNc(4, st, 4, 8, "ng-template", null, 21, o.W1O), o.qZA(), o.BQk()), 2 & x) {
                    const c = o.MAs(5),
                        r = o.oxw();
                    o.xp6(1), o.Q6J("cwTemporalClass", "updated")("cwTemporalClassTrigger", r.betTotal$)("cwTemporalClassTimeout", 750), o.xp6(1), o.Q6J("ngIf", o.lcZ(3, 5, r.isGameRunning$))("ngIfElse", c)
                }
            }

            function nt(x, h) {
                if (1 & x) {
                    const c = o.EpF();
                    o.TgZ(0, "cw-crash-bet", 22), o.NdJ("cancel", function() {
                        const P = o.CHM(c).ngIf,
                            L = o.oxw();
                        return o.KtG(L.cancelQueuedManualBet(P))
                    }), o.qZA()
                }
                if (2 & x) {
                    const c = h.ngIf,
                        r = o.oxw();
                    o.Q6J("gameStatus", r.CrashGameStatus.CREATED)("inQueue", !0)("crashBet", c)
                }
            }

            function G(x, h) {
                if (1 & x) {
                    const c = o.EpF();
                    o.TgZ(0, "cw-crash-bet", 22), o.NdJ("cancel", function() {
                        const P = o.CHM(c).$implicit,
                            L = o.oxw();
                        return o.KtG(L.cancelQueuedAutoBet(P))
                    }), o.qZA()
                }
                if (2 & x) {
                    const c = h.$implicit,
                        r = o.oxw();
                    o.Q6J("gameStatus", r.CrashGameStatus.CREATED)("inQueue", !0)("crashBet", c)
                }
            }

            function z(x, h) {
                if (1 & x && (o.TgZ(0, "header", 23)(1, "span", 14), o.SDv(2, 24), o.ALo(3, "ngrxPush"), o.qZA()()), 2 & x) {
                    const c = o.oxw();
                    let r;
                    o.xp6(3), o.pQV((null == (r = o.lcZ(3, 1, c.crashBetsInGame$)) ? null : r.length) || 0), o.QtT(2)
                }
            }
            const M = function(x) {
                return {
                    opacity: x
                }
            };

            function I(x, h) {
                if (1 & x && o._UZ(0, "div", 30), 2 & x) {
                    const c = h.index,
                        r = o.oxw(3);
                    o.Q6J("ngStyle", o.VKq(1, M, 1 - c / r.betPlaceholdersAmountArr.length))
                }
            }

            function v(x, h) {
                if (1 & x && (o.TgZ(0, "div", 28), o.YNc(1, I, 1, 3, "div", 29), o.qZA()), 2 & x) {
                    const c = o.oxw(2);
                    o.Q6J("@placeholdersLeaveAnim", void 0), o.xp6(1), o.Q6J("ngForOf", c.betPlaceholdersAmountArr)
                }
            }

            function b(x, h) {
                if (1 & x && o._UZ(0, "cw-crash-bet", 31), 2 & x) {
                    const c = h.$implicit,
                        r = o.oxw().$implicit,
                        m = o.oxw();
                    o.Q6J("gameStatus", m.game.status)("crashBet", c)("inLiveGame", r)
                }
            }

            function U(x, h) {
                if (1 & x && (o.TgZ(0, "header", 23)(1, "span", 14), o.SDv(2, 32), o.ALo(3, "ngrxPush"), o.qZA()()), 2 & x) {
                    const c = o.oxw(2);
                    let r;
                    o.xp6(3), o.pQV(null == (r = o.lcZ(3, 1, c.cashedOutCrashBets$)) ? null : r.length), o.QtT(2)
                }
            }

            function ht(x, h) {
                if (1 & x && o._UZ(0, "cw-crash-bet", 33), 2 & x) {
                    const c = h.$implicit,
                        r = o.oxw().$implicit,
                        m = o.oxw();
                    o.Q6J("gameStatus", m.game.status)("crashBet", c)("cashedOut", !0)("inLiveGame", r)
                }
            }

            function dt(x, h) {
                if (1 & x && (o.ynx(0), o.YNc(1, v, 2, 2, "div", 25), o.ALo(2, "ngrxPush"), o.ALo(3, "ngrxPush"), o.ALo(4, "ngrxPush"), o.YNc(5, b, 1, 3, "cw-crash-bet", 26), o.ALo(6, "ngrxPush"), o.YNc(7, U, 4, 3, "header", 10), o.ALo(8, "ngrxPush"), o.YNc(9, ht, 1, 4, "cw-crash-bet", 27), o.ALo(10, "ngrxPush"), o.BQk()), 2 & x) {
                    const c = o.oxw();
                    let r, m;
                    o.xp6(1), o.Q6J("ngIf", !(o.lcZ(2, 4, c.crashBetsInGame$).length || null != (r = o.lcZ(3, 6, c.cashedOutCrashBets$)) && r.length || 0 != o.lcZ(4, 8, c.queuedBetsCount$))), o.xp6(4), o.Q6J("ngForOf", o.lcZ(6, 10, c.crashBetsInGame$)), o.xp6(2), o.Q6J("ngIf", (null == (m = o.lcZ(8, 12, c.cashedOutCrashBets$)) ? null : m.length) > 0), o.xp6(2), o.Q6J("ngForOf", o.lcZ(10, 14, c.cashedOutCrashBets$))
                }
            }

            function pt(x, h) {
                if (1 & x && o._UZ(0, "span", 35), 2 & x) {
                    const c = h.ngIf;
                    o.ekj("bg-green", c.connected)("bg-red", !c.connected), o.Q6J("cwTooltip", c.connected ? "Connected" : "Reconnecting")
                }
            }

            function ut(x, h) {
                if (1 & x && (o.YNc(0, pt, 1, 5, "span", 34), o.ALo(1, "ngrxPush")), 2 & x) {
                    const c = o.oxw();
                    o.Q6J("ngIf", o.lcZ(1, 1, c.status$))
                }
            }
            let ot = (() => {
                class x {
                    constructor(c, r, m, P, L) {
                        this.appConfig = c, this.crashService = r, this.userItemService = m, this.userService = P, this.CrashGameStatus = D.Yow, this.manualCrashBetQueue$ = this.crashService.manualCrashBetQueue$, this.autoCrashBetsQueue$ = this.crashService.autoCrashBetsQueue$.items$, this.queuedBetsCount$ = this.crashService.queuedBetsCount$, this.betTotal$ = this.crashService.betTotal$, this.isGameRunning$ = this.crashService.game$.pipe((0, w.j)("status"), (0, $.U)(J => "STARTED" === J || "FINISHED" === J), (0, i.x)()), this.inLiveGame$ = this.crashService.userLiveBet$.pipe((0, $.U)(J => J && !J.tick)), this.visibleBetsLimit = 20, this.betPlaceholdersAmount = 10, this.betPlaceholdersAmountArr = new Array(this.betPlaceholdersAmount), this.useCurrency = this.appConfig.useCurrency, this.userCurrency$ = this.userService.currency$, this.distinctUntilChangedHelper = () => ((0, $.U)(J => J.slice(0, this.visibleBetsLimit)), (0, i.x)((J, rt) => {
                            const ct = J.map((Mt, Tt) => Mt.id),
                                Ct = rt.map((Mt, Tt) => Mt.id);
                            return JSON.stringify(ct) === JSON.stringify(Ct)
                        })), this.crashBetsInGame$ = this.crashService.crashBets$.pipe((0, $.U)(J => J.filter(rt => !rt.tick)), this.distinctUntilChangedHelper(), (0, B.d)({
                            bufferSize: 1,
                            refCount: !0
                        })), this.cashedOutCrashBets$ = this.crashService.crashBets$.pipe((0, $.U)(J => J.filter(rt => rt.tick)), this.distinctUntilChangedHelper(), (0, B.d)({
                            bufferSize: 1,
                            refCount: !0
                        }));
                        const W = (0, S.R)(L.document, "CW_WEB_SOCKET_RECONNECTED").pipe((0, E.h)({
                                connected: !0
                            })),
                            k = (0, S.R)(L.document, "CW_WEB_SOCKET_DISCONNECTED").pipe((0, E.h)({
                                connected: !1
                            }));
                        this.status$ = (0, C.T)(W, k, (0, n.of)({
                            connected: !0
                        })).pipe((0, B.d)({
                            refCount: !0,
                            bufferSize: 1
                        }))
                    }
                    cancelQueuedManualBet(c) {
                        this.crashService.manualCrashBetQueue$.next(null), this.removeReservedUserItems(c)
                    }
                    cancelQueuedAutoBet(c) {
                        this.crashService.autoCrashBetsQueue$.remove(c), this.removeReservedUserItems(c)
                    }
                    removeReservedUserItems(c) {
                        c.items.edges.forEach(r => this.userItemService.reservedCollection.removeByKey("id", r.node.id))
                    }
                }
                return x.\u0275fac = function(c) {
                    return new(c || x)(o.Y36(e.q), o.Y36(Z.e), o.Y36(u.m), o.Y36(A.KD), o.Y36(s.m))
                }, x.\u0275cmp = o.Xpm({
                    type: x,
                    selectors: [
                        ["cw-crash-bet-list"]
                    ],
                    inputs: {
                        game: "game"
                    },
                    decls: 23,
                    vars: 25,
                    consts: function() {
                        let h, c, r, m;
                        return h = $localize`:␟3b17c748f2148ca5fcf8c79d4ac9ab1dcaacada9␟5481028050637870295:${"\ufffd0\ufffd"}:INTERPOLATION: In Queue`, c = $localize`:␟0285531f6d751607657081d9fe607e884a43b4c8␟1531576359015915407:${"\ufffd0\ufffd"}:INTERPOLATION: Playing`, r = $localize`:␟a9bbfc6f82273b5c4773e9d33aab9025df471464␟5269806025769743259:${"\ufffd0\ufffd"}:INTERPOLATION: Playing`, m = $localize`:␟c3421343768061a21d6f01cd50432ea9d5561de8␟4308668278038725384:${"\ufffd0\ufffd"}:INTERPOLATION: Cashed Out`, [
                            [1, "summary", "d-flex", "align-items-end", "justify-content-between"],
                            [4, "ngIf", "ngIfElse"],
                            ["playersTpl", ""],
                            [1, "amount"],
                            ["coinsImg", ""],
                            [4, "ngrxLet"],
                            [1, "bets"],
                            [3, "scrollY", "betList"],
                            [3, "gameStatus", "inQueue", "crashBet", "cancel", 4, "ngIf"],
                            [3, "gameStatus", "inQueue", "crashBet", "cancel", 4, "ngFor", "ngForTrackById", "ngForOf"],
                            ["class", "summary mt-3", 4, "ngIf"],
                            ["status", ""],
                            [1, "d-flex", "align-items-center", "gap-05"],
                            [3, "ngTemplateOutlet"],
                            [1, "count"], h, ["data-test", "players-number", 1, "count"], c, [1, "amount-number"],
                            [1, "amount-img"],
                            ["data-test", "betted-amount", 1, "amount-number", 3, "cwTemporalClass", "cwTemporalClassTrigger", "cwTemporalClassTimeout"],
                            ["crashTotalBetsTpl", ""],
                            [3, "gameStatus", "inQueue", "crashBet", "cancel"],
                            [1, "summary", "mt-3"], r, ["class", "position-absolute w-100 h-100 overflow-hidden", 4, "ngIf"],
                            [3, "gameStatus", "crashBet", "inLiveGame", 4, "ngFor", "ngForTrackById", "ngForOf"],
                            [3, "gameStatus", "crashBet", "cashedOut", "inLiveGame", 4, "ngFor", "ngForTrackById", "ngForOf"],
                            [1, "position-absolute", "w-100", "h-100", "overflow-hidden"],
                            ["class", "bet-placeholder", 3, "ngStyle", 4, "ngFor", "ngForOf"],
                            [1, "bet-placeholder", 3, "ngStyle"],
                            [3, "gameStatus", "crashBet", "inLiveGame"], m, [3, "gameStatus", "crashBet", "cashedOut", "inLiveGame"],
                            ["class", "dot", "position", "left", 3, "bg-green", "bg-red", "cwTooltip", 4, "ngIf"],
                            ["position", "left", 1, "dot", 3, "cwTooltip"]
                        ]
                    },
                    template: function(c, r) {
                        if (1 & c && (o.TgZ(0, "header", 0), o.YNc(1, q, 6, 4, "ng-container", 1), o.ALo(2, "ngrxPush"), o.YNc(3, tt, 5, 4, "ng-template", null, 2, o.W1O), o.TgZ(5, "div", 3), o.YNc(6, R, 5, 5, "ng-container", 1), o.YNc(7, V, 1, 0, "ng-template", null, 4, o.W1O), o.YNc(9, H, 6, 7, "ng-container", 5), o.qZA()(), o.TgZ(10, "div", 6)(11, "cw-scroll", 7), o.YNc(12, nt, 1, 3, "cw-crash-bet", 8), o.ALo(13, "ngrxPush"), o.YNc(14, G, 1, 3, "cw-crash-bet", 9), o.ALo(15, "slice"), o.ALo(16, "ngrxPush"), o.YNc(17, z, 4, 3, "header", 10), o.ALo(18, "ngrxPush"), o.ALo(19, "ngrxPush"), o.YNc(20, dt, 11, 16, "ng-container", 5), o.qZA()(), o.YNc(21, ut, 2, 3, "ng-template", null, 11, o.W1O)), 2 & c) {
                            const m = o.MAs(4),
                                P = o.MAs(8);
                            let L;
                            o.xp6(1), o.Q6J("ngIf", o.lcZ(2, 11, r.queuedBetsCount$) > 0)("ngIfElse", m), o.xp6(5), o.Q6J("ngIf", r.useCurrency)("ngIfElse", P), o.xp6(3), o.Q6J("ngrxLet", r.betTotal$), o.xp6(2), o.Q6J("scrollY", !0)("betList", !0), o.xp6(1), o.Q6J("ngIf", o.lcZ(13, 13, r.manualCrashBetQueue$)), o.xp6(2), o.Q6J("ngForOf", o.Dn7(15, 15, o.lcZ(16, 19, r.autoCrashBetsQueue$), 0, r.visibleBetsLimit)), o.xp6(3), o.Q6J("ngIf", o.lcZ(18, 21, r.queuedBetsCount$) > 0 && (null == (L = o.lcZ(19, 23, r.crashBetsInGame$)) ? null : L.length) > 0), o.xp6(3), o.Q6J("ngrxLet", r.inLiveGame$)
                        }
                    },
                    dependencies: [a.sg, a.O5, a.tP, a.PC, F.Zl, Q.eJ, et.i, j.L, Y.l, at.w, mt.a, a.OU, a.JJ, Q.fM, T.G, it.t],
                    styles: ['[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.summary[_ngcontent-%COMP%]{padding:0 .5rem;margin-bottom:1rem;font-size:.9rem}.summary[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-weight:600;color:var(--crash-bet-color);text-transform:uppercase}.summary[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{min-width:7rem}.summary[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   .amount-img[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;width:var(--crash-total-bets-image-size);height:var(--crash-total-bets-image-size);vertical-align:bottom;background-size:contain;background-image:var(--crash-total-bets-image-url);background-repeat:no-repeat}.summary[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   .amount-number[_ngcontent-%COMP%]{font-weight:700;color:#fff;font-size:1.3rem;transition:color .5s}.summary[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   .amount-number.updated[_ngcontent-%COMP%]{transition:color .2s;color:gold}cw-crash-bet[_ngcontent-%COMP%], .bet-placeholder[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.05);margin-bottom:4px}.bet-placeholder[_ngcontent-%COMP%]{background-color:var(--crash-bet-bg-color);border-radius:.3rem;height:46px}.bets[_ngcontent-%COMP%]{flex:1;overflow-y:scroll}.bets[_ngcontent-%COMP%]::-webkit-scrollbar{width:9px;height:"auto"}.bets[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:5px;background:none}.bets[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:5px;background:rgba(0,0,0,.3)}.bets[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.4)}.bets[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:window-inactive{background:rgba(0,0,0,.1)}.dot[_ngcontent-%COMP%]{display:inline-block;width:10px;height:10px;border-radius:50%}.dot.bg-red[_ngcontent-%COMP%]{animation:flash .75s infinite}'],
                    data: {
                        animation: [(0, p.QQ)({
                            anchor: "placeholdersLeaveAnim",
                            duration: 300
                        })]
                    },
                    changeDetection: 0
                }), x
            })()
        },
        29939: (_t, K, t) => {
            t.d(K, {
                X: () => f
            });
            var e = t(75855),
                u = t(3691),
                A = t(61135),
                D = t(54004),
                p = t(13099),
                w = t(28746),
                $ = t(43475),
                i = t(55409),
                B = t(2043),
                S = t(56592);
            const E = S.Ps`
  fragment UserCrashBet on CrashBet {
    amount
    createdAt
    currency
    id
    game {
      id
      roll
    }
    items {
      edges {
        node {
          id
          itemVariant {
            ...ItemVariant
          }
        }
      }
    }
    maxTick
    remainderWinAmount
    tick
    totalBet
    totalWinAmount
    userItem {
      ...UserItemSimple
    }
  }
`,
                C = S.Ps`
  query CrashBetTable($first: PaginationAmount, $after: String, $orderBy: [CrashBetOrderBy], $userId: ID) {
    crashBets(first: $first, after: $after, orderBy: $orderBy, userId: $userId) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...UserCrashBet
        }
      }
    }
  }

  ${E}
  ${B.ak}
  ${i.xp}
`;
            var n = t(22223),
                Z = t(69144),
                o = t(39401),
                s = t(44755),
                a = t(49085),
                F = t(53626),
                Q = t(4859),
                et = t(59549),
                j = t(284),
                Y = t(84385),
                at = t(3238),
                mt = t(89847),
                T = t(86934),
                it = t(4807),
                q = t(406),
                tt = t(5068),
                R = t(30765),
                V = t(16622);

            function N(l, d) {
                1 & l && (n.TgZ(0, "mat-form-field")(1, "mat-label"), n.SDv(2, 24), n.qZA(), n._UZ(3, "input", 25), n.qZA())
            }

            function st(l, d) {
                if (1 & l) {
                    const g = n.EpF();
                    n.ynx(0), n.TgZ(1, "form", 17), n.NdJ("ngSubmit", function() {
                        n.CHM(g);
                        const O = n.oxw();
                        return n.KtG(O.filter())
                    }), n.YNc(2, N, 4, 0, "mat-form-field", 2), n.TgZ(3, "mat-form-field")(4, "mat-label"), n.SDv(5, 18), n.qZA(), n.TgZ(6, "mat-select", 19)(7, "mat-option", 20), n._uU(8, "Created"), n.qZA(), n.TgZ(9, "mat-option", 21), n._uU(10, "Created DESC"), n.qZA()()(), n.TgZ(11, "button", 22), n.SDv(12, 23), n.ALo(13, "ngrxPush"), n.qZA()(), n.BQk()
                }
                if (2 & l) {
                    const g = n.oxw();
                    n.xp6(1), n.Q6J("formGroup", g.form), n.xp6(1), n.Q6J("ngIf", !g.userId), n.xp6(9), n.Q6J("loading", n.lcZ(13, 3, g.dataSource.loading$))
                }
            }

            function H(l, d) {
                1 & l && (n.TgZ(0, "th", 26), n._uU(1, "ID"), n.qZA())
            }

            function nt(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27), n._uU(1), n.qZA()), 2 & l) {
                    const g = d.$implicit;
                    n.xp6(1), n.Oqu(g.id)
                }
            }

            function G(l, d) {
                1 & l && (n.TgZ(0, "th", 26), n._uU(1, "When"), n.qZA())
            }

            function z(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27)(1, "div")(2, "div"), n._uU(3), n.ALo(4, "date"), n.qZA(), n.TgZ(5, "small"), n._uU(6), n.ALo(7, "date"), n.qZA()()()), 2 & l) {
                    const g = d.$implicit;
                    n.xp6(3), n.Oqu(n.xi3(4, 2, g.createdAt, "mediumDate")), n.xp6(3), n.Oqu(n.xi3(7, 5, g.createdAt, "mediumTime"))
                }
            }

            function M(l, d) {
                1 & l && (n.TgZ(0, "th", 26), n._uU(1, "Multiplier"), n.qZA())
            }

            function I(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27), n._uU(1), n.qZA()), 2 & l) {
                    const g = d.$implicit;
                    n.xp6(1), n.hij("", g.tick / 100, "x")
                }
            }

            function v(l, d) {
                1 & l && (n.TgZ(0, "th", 26), n._uU(1, "Auto Exit"), n.qZA())
            }

            function b(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27), n._uU(1), n.qZA()), 2 & l) {
                    const g = d.$implicit;
                    n.xp6(1), n.AsE("", g.maxTick ? g.maxTick / 100 : "-", "", g.maxTick ? "x" : "", "")
                }
            }

            function U(l, d) {
                1 & l && (n.TgZ(0, "th", 26), n._uU(1, "Bet"), n.qZA())
            }

            function ht(l, d) {
                if (1 & l && (n.TgZ(0, "div", 33), n._uU(1, " Total bet: "), n._UZ(2, "cw-pretty-balance", 34), n.qZA()), 2 & l) {
                    const g = n.oxw().$implicit;
                    n.xp6(2), n.Q6J("currencyDigitsInfo", "1.2-4")("balance", g.amount)("currency", g.currency)
                }
            }

            function dt(l, d) {
                if (1 & l && n._UZ(0, "cw-user-item-simple", 37), 2 & l) {
                    const g = n.oxw().$implicit;
                    n.Q6J("userItem", g.node)
                }
            }

            function pt(l, d) {
                if (1 & l && (n.ynx(0), n.YNc(1, dt, 1, 1, "ng-template", null, 35, n.W1O), n._UZ(3, "img", 36), n.BQk()), 2 & l) {
                    const g = d.$implicit,
                        _ = n.MAs(2);
                    n.xp6(3), n.Q6J("cwTooltip", _)("src", g.node.itemVariant.iconUrl, n.LSH)
                }
            }

            function ut(l, d) {
                if (1 & l && (n.TgZ(0, "div", 38), n._uU(1), n.qZA()), 2 & l) {
                    const g = n.oxw().$implicit;
                    n.xp6(1), n.hij("+ ", g.items.edges.length - 3, "")
                }
            }

            function ot(l, d) {
                if (1 & l && n._UZ(0, "cw-pretty-balance", 34), 2 & l) {
                    const g = n.oxw().$implicit;
                    n.Q6J("currencyDigitsInfo", "1.2-4")("balance", g.remainder)("currency", g.currency)
                }
            }

            function x(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27), n.YNc(1, ht, 3, 3, "div", 28), n.TgZ(2, "div", 29), n.YNc(3, pt, 4, 2, "ng-container", 30), n.YNc(4, ut, 2, 1, "div", 31), n.YNc(5, ot, 1, 3, "cw-pretty-balance", 32), n.qZA()()), 2 & l) {
                    const g = d.$implicit;
                    n.xp6(1), n.Q6J("ngIf", g.items.edges.length > 0), n.xp6(2), n.Q6J("ngForOf", g.items.edges.slice(0, 3)), n.xp6(1), n.Q6J("ngIf", g.items.edges.length > 3), n.xp6(1), n.Q6J("ngIf", g.remainder > 0)
                }
            }

            function h(l, d) {
                1 & l && (n.TgZ(0, "th", 26), n._uU(1, "Won"), n.qZA())
            }

            function c(l, d) {
                if (1 & l && (n.TgZ(0, "div", 33), n._uU(1, " Total won: "), n._UZ(2, "cw-pretty-balance", 34), n.qZA()), 2 & l) {
                    const g = n.oxw().$implicit;
                    n.xp6(2), n.Q6J("currencyDigitsInfo", "1.2-4")("balance", g.totalWinAmount)("currency", g.currency)
                }
            }

            function r(l, d) {
                if (1 & l && n._UZ(0, "cw-user-item-simple", 37), 2 & l) {
                    const g = n.oxw(2).$implicit;
                    n.Q6J("userItem", g.userItem)
                }
            }

            function m(l, d) {
                if (1 & l && n.YNc(0, r, 1, 1, "cw-user-item-simple", 41), 2 & l) {
                    const g = n.oxw().$implicit;
                    n.Q6J("ngIf", g.userItem)
                }
            }

            function P(l, d) {
                if (1 & l && n._UZ(0, "img", 36), 2 & l) {
                    const g = n.oxw().$implicit,
                        _ = n.MAs(4);
                    n.Q6J("cwTooltip", _)("src", g.userItem.itemVariant.iconUrl, n.LSH)
                }
            }

            function L(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27), n.YNc(1, c, 3, 3, "div", 28), n.TgZ(2, "div", 29), n.YNc(3, m, 1, 1, "ng-template", null, 39, n.W1O), n.YNc(5, P, 1, 2, "img", 40), n._UZ(6, "cw-pretty-balance", 34), n.qZA()()), 2 & l) {
                    const g = d.$implicit;
                    n.xp6(1), n.Q6J("ngIf", g.userItem), n.xp6(4), n.Q6J("ngIf", g.userItem), n.xp6(1), n.Q6J("currencyDigitsInfo", "1.2-4")("balance", g.remainderWinAmount)("currency", g.currency)
                }
            }

            function W(l, d) {
                1 & l && (n.TgZ(0, "th", 26), n._uU(1, "Game"), n.qZA())
            }
            const k = function(l) {
                return ["/crash", l]
            };

            function J(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27)(1, "a", 42), n._uU(2), n.qZA()()), 2 & l) {
                    const g = d.$implicit;
                    n.xp6(1), n.Q6J("routerLink", n.VKq(2, k, g.game.id)), n.xp6(1), n.Oqu(g.game.id)
                }
            }

            function rt(l, d) {
                1 & l && n._UZ(0, "th", 26)
            }

            function ct(l, d) {
                if (1 & l) {
                    const g = n.EpF();
                    n.ynx(0), n.TgZ(1, "button", 43), n.NdJ("click", function() {
                        n.CHM(g);
                        const O = n.oxw().$implicit,
                            y = n.oxw();
                        return n.KtG(y.cashout(O))
                    }), n.SDv(2, 44), n.ALo(3, "ngrxPush"), n.qZA(), n.BQk()
                }
                if (2 & l) {
                    const g = n.oxw().$implicit,
                        _ = n.oxw();
                    n.xp6(1), n.Q6J("loading", n.lcZ(3, 1, _.cashingOut$) === g)
                }
            }

            function Ct(l, d) {
                if (1 & l && (n.TgZ(0, "td", 27), n.YNc(1, ct, 4, 3, "ng-container", 2), n.qZA()), 2 & l) {
                    const g = d.$implicit,
                        _ = n.oxw();
                    n.xp6(1), n.Q6J("ngIf", _.canCashout(g))
                }
            }

            function Mt(l, d) {
                1 & l && n._UZ(0, "tr", 45)
            }

            function Tt(l, d) {
                1 & l && n._UZ(0, "tr", 46)
            }
            let f = (() => {
                class l {
                    constructor(g, _, O) {
                        this.apollo = g, this.crashService = _, this.fb = O, this.userId = "", this.showFilters = !1, this.columns = ["createdAt", "tick", "maxTick", "amount", "userItem", "gameId", "actions"], this.cashingOut$ = new A.X(null)
                    }
                    ngOnInit() {
                        this.form = this.fb.group({
                            userId: this.userId,
                            orderBy: "ID_DESC"
                        }), this.dataSource = new u.g(this.apollo, {
                            query: C,
                            field: "crashBets",
                            variables: this.getVariables()
                        }), this.data$ = this.dataSource.connect().pipe((0, D.U)(g => g.map(_ => ({
                            ..._,
                            remainder: (_.totalBet - _.items.edges.reduce((O, {
                                node: y
                            }) => y.itemVariant.value + O, 0)).toFixed(2)
                        })), (0, p.B)()))
                    }
                    ngOnDestroy() {
                        this.dataSource = null, this.data$ = null
                    }
                    filter() {
                        this.dataSource.filter(this.getVariables())
                    }
                    canCashout(g) {
                        return !g.tick && g.maxTick && g.game.roll > g.maxTick
                    }
                    cashout(g) {
                        this.cashingOut$.next(g), this.crashService.exitCrash(g.id).pipe((0, w.x)(() => this.cashingOut$.next(null)), (0, e.sL)()).subscribe()
                    }
                    getVariables() {
                        return {
                            first: u.U,
                            ...this.form.value
                        }
                    }
                }
                return l.\u0275fac = function(g) {
                    return new(g || l)(n.Y36(Z._M), n.Y36($.e), n.Y36(o.QS))
                }, l.\u0275cmp = n.Xpm({
                    type: l,
                    selectors: [
                        ["cw-crash-bet-table"]
                    ],
                    inputs: {
                        userId: "userId",
                        showFilters: "showFilters"
                    },
                    decls: 34,
                    vars: 13,
                    consts: function() {
                        let d, g, _, O, y;
                        return d = $localize`:␟400c30183b9b6cf5b3decf8491a929e10fa21a3b␟3951121764366844614:Order by`, g = $localize`:␟5ca707824ab93066c7d9b44e1b8bf216725c2c22␟8829497237648100098:Filter`, _ = $localize`:␟83c4d4d764d2e2725ab8e919ec16ac400e1f290a␟2128755808672960949:User ID`, O = $localize`:␟eee0ffe01fd8c3f50ef18ba3e923efae0382d5f8␟8543535162971154127:VXNlcjox or 1`, y = $localize`:␟6a377d293983ac5b628c125471de9cc478c531f7␟62270500043667495: Cashout `, [
                            [1, "card"],
                            [1, "card-body"],
                            [4, "ngIf"],
                            ["mat-table", "", "cwTrackById", "", 1, "w-100", 3, "dataSource"],
                            ["matColumnDef", "id"],
                            ["mat-header-cell", "", 4, "matHeaderCellDef"],
                            ["mat-cell", "", 4, "matCellDef"],
                            ["matColumnDef", "createdAt"],
                            ["matColumnDef", "tick"],
                            ["matColumnDef", "maxTick"],
                            ["matColumnDef", "amount"],
                            ["matColumnDef", "userItem"],
                            ["matColumnDef", "gameId"],
                            ["matColumnDef", "actions"],
                            ["mat-header-row", "", 4, "matHeaderRowDef"],
                            ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
                            [3, "dataSource", "loading", "data"],
                            [1, "d-flex", "flex-wrap", "justify-content-start", "align-items-center", "gap-05", 3, "formGroup", "ngSubmit"], d, ["formControlName", "orderBy"],
                            ["value", "ID"],
                            ["value", "ID_DESC"],
                            ["type", "submit", "mat-flat-button", "", "color", "primary", 3, "loading"], g, _, ["matInput", "", "type", "text", "placeholder", O, "formControlName", "userId"],
                            ["mat-header-cell", ""],
                            ["mat-cell", ""],
                            ["class", "total", 4, "ngIf"],
                            [1, "crash-items"],
                            [4, "ngFor", "ngForOf"],
                            ["class", "remaining", 4, "ngIf"],
                            [3, "currencyDigitsInfo", "balance", "currency", 4, "ngIf"],
                            [1, "total"],
                            [3, "currencyDigitsInfo", "balance", "currency"],
                            ["betItem", ""],
                            ["loading", "lazy", 1, "crash-item", 3, "cwTooltip", "src"],
                            [3, "userItem"],
                            [1, "remaining"],
                            ["userItem", ""],
                            ["loading", "lazy", "class", "crash-item", 3, "cwTooltip", "src", 4, "ngIf"],
                            [3, "userItem", 4, "ngIf"],
                            ["mat-flat-button", "", "color", "primary", 3, "routerLink"],
                            ["type", "button", "mat-flat-button", "", "color", "primary", 3, "loading", "click"], y, ["mat-header-row", ""],
                            ["mat-row", ""]
                        ]
                    },
                    template: function(g, _) {
                        1 & g && (n.TgZ(0, "div", 0)(1, "div", 1), n.YNc(2, st, 14, 5, "ng-container", 2), n.TgZ(3, "table", 3), n.ALo(4, "ngrxPush"), n.ynx(5, 4), n.YNc(6, H, 2, 0, "th", 5), n.YNc(7, nt, 2, 1, "td", 6), n.BQk(), n.ynx(8, 7), n.YNc(9, G, 2, 0, "th", 5), n.YNc(10, z, 8, 8, "td", 6), n.BQk(), n.ynx(11, 8), n.YNc(12, M, 2, 0, "th", 5), n.YNc(13, I, 2, 1, "td", 6), n.BQk(), n.ynx(14, 9), n.YNc(15, v, 2, 0, "th", 5), n.YNc(16, b, 2, 2, "td", 6), n.BQk(), n.ynx(17, 10), n.YNc(18, U, 2, 0, "th", 5), n.YNc(19, x, 6, 4, "td", 6), n.BQk(), n.ynx(20, 11), n.YNc(21, h, 2, 0, "th", 5), n.YNc(22, L, 7, 5, "td", 6), n.BQk(), n.ynx(23, 12), n.YNc(24, W, 2, 0, "th", 5), n.YNc(25, J, 3, 4, "td", 6), n.BQk(), n.ynx(26, 13), n.YNc(27, rt, 1, 0, "th", 5), n.YNc(28, Ct, 2, 1, "td", 6), n.BQk(), n.YNc(29, Mt, 1, 0, "tr", 14), n.YNc(30, Tt, 1, 0, "tr", 15), n.qZA(), n._UZ(31, "cw-table-footer", 16), n.ALo(32, "ngrxPush"), n.ALo(33, "ngrxPush"), n.qZA()()), 2 & g && (n.xp6(2), n.Q6J("ngIf", _.showFilters), n.xp6(1), n.Q6J("dataSource", n.lcZ(4, 7, _.data$)), n.xp6(26), n.Q6J("matHeaderRowDef", _.columns), n.xp6(1), n.Q6J("matRowDefColumns", _.columns), n.xp6(1), n.Q6J("dataSource", _.dataSource)("loading", n.lcZ(32, 9, _.dataSource.loading$))("data", n.lcZ(33, 11, _.data$)))
                    },
                    dependencies: [s.sg, s.O5, a.rH, o._Y, o.Fj, o.JJ, o.JL, o.sg, o.u, F.BZ, F.fO, F.as, F.w1, F.Dz, F.nj, F.ge, F.ev, F.XQ, F.Gk, Q.lW, Q.zs, et.KE, et.hX, j.Nt, Y.gD, at.ey, mt.q, T.i, it.G, q.S, tt.w, R.M, s.uU, V.fM],
                    styles: ["cw-item[_ngcontent-%COMP%], cw-user-item-simple[_ngcontent-%COMP%]{display:block;max-width:150px;width:150px}.crash-items[_ngcontent-%COMP%]{white-space:nowrap;display:inline-flex;align-items:center}.crash-items[_ngcontent-%COMP%]   cw-pretty-balance[_ngcontent-%COMP%]{display:inline-flex;padding:0 .5rem;font-size:1.1rem}.total[_ngcontent-%COMP%]{margin:5px 0}.total[_ngcontent-%COMP%]   cw-pretty-balance[_ngcontent-%COMP%]{margin-left:5px}.crash-item[_ngcontent-%COMP%]{width:4.5rem;padding:0 .5rem;border-right:1px solid rgba(0,0,0,.05)}.crash-item[_ngcontent-%COMP%]:last-child{border-right:none}"],
                    changeDetection: 0
                }), l
            })()
        },
        12551: (_t, K, t) => {
            t.d(K, {
                a: () => x
            });
            var e = t(22223),
                u = t(75855),
                D = (t(37365), t(9124)),
                p = t(61135),
                w = t(39841),
                $ = t(71884),
                i = t(54004),
                B = t(18505),
                S = t(39300),
                E = t(43475),
                C = t(44755),
                n = t(49085),
                Z = t(55829),
                o = t(96298),
                s = t(16622),
                a = t(31495),
                F = t(27737),
                Q = t(89847),
                et = t(86934);

            function j(h, c) {
                if (1 & h) {
                    const r = e.EpF();
                    e.TgZ(0, "span", 5), e.NdJ("click", function() {
                        e.CHM(r);
                        const P = e.oxw(3);
                        return e.KtG(P.cancel.next())
                    }), e._UZ(1, "cw-icon", 6), e.qZA()
                }
                if (2 & h) {
                    e.oxw();
                    const r = e.MAs(6);
                    e.Q6J("cwTooltip", r)
                }
            }

            function Y(h, c) {
                if (1 & h) {
                    const r = e.EpF();
                    e.TgZ(0, "span", 7), e.NdJ("click", function() {
                        e.CHM(r);
                        const P = e.oxw(3);
                        return e.KtG(P.toggleManualObserve())
                    }), e.ALo(1, "ngrxPush"), e.ALo(2, "ngrxPush"), e._UZ(3, "cw-icon", 8), e.qZA()
                }
                if (2 & h) {
                    e.oxw();
                    const r = e.MAs(4),
                        m = e.oxw(2);
                    e.ekj("clickable", e.lcZ(1, 3, m.canChangeObserve$)), e.Q6J("cwTooltip", e.lcZ(2, 5, m.isObserved$) ? null : r)
                }
            }

            function at(h, c) {
                if (1 & h && (e._uU(0, " Watch "), e._UZ(1, "br"), e.TgZ(2, "b"), e._uU(3), e.qZA(), e._uU(4, "'s "), e._UZ(5, "br"), e._uU(6, " Crash ")), 2 & h) {
                    const r = e.oxw(2).$implicit;
                    e.xp6(3), e.Oqu(r.user.name)
                }
            }

            function mt(h, c) {
                1 & h && e._uU(0, "Cancel Bet")
            }

            function T(h, c) {
                if (1 & h && (e.ynx(0), e._UZ(1, "img", 22), e.BQk()), 2 & h) {
                    const r = c.ngIf;
                    e.xp6(1), e.Q6J("src", r.node.itemVariant.iconUrl, e.LSH)
                }
            }

            function it(h, c) {
                if (1 & h && (e.TgZ(0, "div", 23), e._uU(1), e.qZA()), 2 & h) {
                    const r = e.oxw(4).$implicit;
                    e.xp6(1), e.Oqu(r.items.edges.length)
                }
            }

            function q(h, c) {
                if (1 & h && (e.ynx(0), e.YNc(1, T, 2, 1, "ng-container", 13), e.YNc(2, it, 2, 1, "div", 21), e.BQk()), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.xp6(1), e.Q6J("ngIf", r.items.edges[0]), e.xp6(1), e.Q6J("ngIf", r.items.edges.length > 1)
                }
            }

            function tt(h, c) {
                if (1 & h && (e.ynx(0), e._UZ(1, "img", 24), e.BQk()), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.xp6(1), e.Q6J("src", r.userItem.itemVariant.iconUrl, e.LSH)
                }
            }

            function R(h, c) {
                if (1 & h && e._UZ(0, "cw-pretty-balance", 25), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.Q6J("currencyDigitsInfo", "1.2-4")("balance", r.totalBet)("currency", r.currency)
                }
            }

            function V(h, c) {
                if (1 & h && e._UZ(0, "cw-pretty-balance", 25), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.Q6J("currencyDigitsInfo", "1.2-4")("balance", r.totalBet)("currency", r.currency)
                }
            }

            function N(h, c) {
                if (1 & h && (e.ynx(0), e._UZ(1, "cw-pretty-balance", 26), e.BQk()), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.xp6(1), e.Q6J("currencyDigitsInfo", "1.2-4")("balance", r.totalWinAmount)("currency", r.currency)
                }
            }

            function st(h, c) {
                1 & h && e._UZ(0, "cw-icon", 27)
            }

            function H(h, c) {
                if (1 & h && e._UZ(0, "cw-pretty-balance", 28), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.Q6J("currencyDigitsInfo", "1.2-4")("balance", r.totalBet)("currency", r.currency)
                }
            }

            function nt(h, c) {
                if (1 & h && (e.ynx(0), e._UZ(1, "cw-pretty-balance", 26), e.BQk()), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.xp6(1), e.Q6J("currencyDigitsInfo", "1.2-4")("balance", r.totalWinAmount)("currency", r.currency)
                }
            }
            const G = function(h) {
                return {
                    invisible: h
                }
            };

            function z(h, c) {
                if (1 & h && e._UZ(0, "cw-icon", 29), 2 & h) {
                    const r = e.oxw().$implicit,
                        m = e.oxw(2).$implicit;
                    e.Q6J("ngClass", e.VKq(1, G, "STARTED" !== r || m.tick))
                }
            }

            function M(h, c) {
                if (1 & h && (e.ynx(0), e.TgZ(1, "span", 34), e._uU(2), e.ALo(3, "number"), e.qZA(), e.BQk()), 2 & h) {
                    const r = e.oxw(5).$implicit;
                    e.xp6(2), e.hij("x", e.xi3(3, 1, r.maxTick / 100, "1.2-2"), "")
                }
            }

            function I(h, c) {
                1 & h && e._uU(0, " LIVE ")
            }

            function v(h, c) {
                if (1 & h && (e.TgZ(0, "span"), e.YNc(1, M, 4, 4, "ng-container", 32), e.YNc(2, I, 1, 0, "ng-template", null, 33, e.W1O), e.qZA()), 2 & h) {
                    const r = e.MAs(3),
                        m = e.oxw(4).$implicit;
                    e.xp6(1), e.Q6J("ngIf", m.maxTick)("ngIfElse", r)
                }
            }

            function b(h, c) {
                if (1 & h && (e.TgZ(0, "span", 35), e._uU(1), e.ALo(2, "number"), e.qZA()), 2 & h) {
                    const r = e.oxw(4).$implicit;
                    e.xp6(1), e.hij("", e.xi3(2, 1, r.tick / 100, "1.2-2"), "x")
                }
            }

            function U(h, c) {
                if (1 & h && (e.TgZ(0, "div", 30), e.YNc(1, v, 4, 2, "span", 13), e.YNc(2, b, 3, 4, "span", 31), e.qZA()), 2 & h) {
                    const r = e.oxw(3).$implicit;
                    e.xp6(1), e.Q6J("ngIf", !r.tick), e.xp6(1), e.Q6J("ngIf", r.tick)
                }
            }

            function ht(h, c) {
                1 & h && e._UZ(0, "img", 36)
            }
            const dt = function(h) {
                return ["/player", h]
            };

            function pt(h, c) {
                if (1 & h && (e.ynx(0), e.TgZ(1, "div", 9)(2, "a", 10), e._UZ(3, "cw-user-avatar-badge", 11), e.qZA(), e.TgZ(4, "span", 12), e.YNc(5, q, 3, 2, "ng-container", 13), e.YNc(6, tt, 2, 1, "ng-container", 13), e.qZA(), e.YNc(7, R, 1, 3, "cw-pretty-balance", 14), e.YNc(8, V, 1, 3, "cw-pretty-balance", 14), e.YNc(9, N, 2, 3, "ng-container", 13), e.YNc(10, st, 1, 0, "cw-icon", 15), e.YNc(11, H, 1, 3, "cw-pretty-balance", 16), e.YNc(12, nt, 2, 3, "ng-container", 13), e.YNc(13, z, 1, 3, "cw-icon", 17), e.TgZ(14, "div", 18), e.YNc(15, U, 3, 2, "div", 19), e.ALo(16, "ngrxPush"), e.YNc(17, ht, 1, 0, "ng-template", null, 20, e.W1O), e.qZA()(), e.BQk()), 2 & h) {
                    const r = c.$implicit,
                        m = e.MAs(18),
                        P = e.oxw().$implicit,
                        L = e.oxw().$implicit,
                        W = e.oxw();
                    e.xp6(2), e.Q6J("routerLink", e.VKq(16, dt, L.user.id)), e.xp6(1), e.Q6J("user", L.user)("small", !0), e.xp6(2), e.Q6J("ngIf", !L.userItem && ("CREATED" === r || "STARTED" === r)), e.xp6(1), e.Q6J("ngIf", L.userItem), e.xp6(1), e.Q6J("ngIf", "CREATED" === r), e.xp6(1), e.Q6J("ngIf", "STARTED" === r && !L.tick), e.xp6(1), e.Q6J("ngIf", "STARTED" === r && L.tick), e.xp6(1), e.Q6J("ngIf", P), e.xp6(1), e.Q6J("ngIf", "FINISHED" === r && !L.tick), e.xp6(1), e.Q6J("ngIf", "FINISHED" === r && L.tick), e.xp6(1), e.Q6J("ngIf", !P), e.xp6(2), e.Q6J("ngIf", e.lcZ(16, 14, W.isBetAlive$))("ngIfElse", m)
                }
            }

            function ut(h, c) {
                if (1 & h && (e.ynx(0), e.YNc(1, j, 2, 1, "span", 1), e.YNc(2, Y, 4, 7, "span", 2), e.YNc(3, at, 7, 1, "ng-template", null, 3, e.W1O), e.YNc(5, mt, 1, 0, "ng-template", null, 4, e.W1O), e.YNc(7, pt, 19, 18, "ng-container", 0), e.BQk()), 2 & h) {
                    const r = c.$implicit,
                        m = e.oxw(2);
                    e.xp6(1), e.Q6J("ngIf", r), e.xp6(1), e.Q6J("ngIf", !r), e.xp6(5), e.Q6J("ngrxLet", m.gameStatus$)
                }
            }

            function ot(h, c) {
                if (1 & h && (e.ynx(0), e.YNc(1, ut, 8, 3, "ng-container", 0), e.BQk()), 2 & h) {
                    const r = e.oxw();
                    e.xp6(1), e.Q6J("ngrxLet", r.isInQueue$)
                }
            }
            let x = (() => {
                class h {
                    set gameStatus(r) {
                        this.gameStatus$.next(r)
                    }
                    set crashBet(r) {
                        this.crashBet$.next(r)
                    }
                    set inQueue(r) {
                        this.isInQueue$.next(r)
                    }
                    set inLiveGame(r) {
                        this.isInLiveGame$.next(r)
                    }
                    set cashedOut(r) {
                        this.hasCashedOut$.next(r)
                    }
                    constructor(r, m) {
                        this.crashService = r, this.destroyRef = m, this.gameStatus$ = new p.X(null), this.crashBet$ = new p.X(null), this.isInQueue$ = new p.X(!1), this.isInLiveGame$ = new p.X(!1), this.hasCashedOut$ = new p.X(!1), this.floatingBet = !1, this.cancel = new e.vpe, this.isObserved$ = new p.X(!1), this.hasCashed$ = new p.X(!1), this.hasCrashed$ = new p.X(!1), this.canChangeObserve$ = new p.X(!1), this.leaveAnim = !0, this.isSelectedObserved$ = new p.X(!1), this.isDefaultObserved$ = new p.X(!1), this.isBetAlive$ = new p.X(!1)
                    }
                    ngOnInit() {
                        this.isInQueue$.getValue() || (0, w.a)([this.crashService.defaultObservedCrashBet$, this.crashService.selectedObservedCrashBet$, this.crashBet$.pipe((0, $.x)())]).pipe((0, u.sL)(this.destroyRef)).subscribe(([r, m, P]) => {
                            this.isDefaultObserved$.next(r?.id === P.id), this.isSelectedObserved$.next(m?.id === P.id)
                        }), (0, w.a)([this.isInQueue$.pipe((0, $.x)()), this.gameStatus$.pipe((0, $.x)()), this.crashService.selectedObservedCrashBet$.pipe((0, $.x)())]).pipe((0, i.U)(([r, m, P]) => !(r || !["STARTED", "CREATED"].includes(m)) && (P ? this.isSelectedObserved$.getValue() : this.isDefaultObserved$.getValue())), (0, $.x)(), (0, B.b)(r => {
                            this.isObserved$.next(r)
                        }), (0, u.sL)(this.destroyRef)).subscribe(), this.crashBet$.pipe((0, i.U)(({
                            tick: r
                        }) => !!r), (0, $.x)(), (0, B.b)(r => this.hasCashed$.next(r)), (0, u.sL)(this.destroyRef)).subscribe(), this.gameStatus$.pipe((0, i.U)(r => "FINISHED" === r), (0, $.x)(), (0, S.h)(() => !this.hasCashed$.getValue()), (0, B.b)(r => this.hasCrashed$.next(r)), (0, u.sL)(this.destroyRef)).subscribe(), (0, w.a)([this.gameStatus$.pipe((0, $.x)()), this.isInLiveGame$.pipe((0, $.x)())]).pipe((0, i.U)(([r, m]) => "STARTED" === r && !m), (0, $.x)(), (0, B.b)(r => {
                            this.canChangeObserve$.next(r)
                        }), (0, u.sL)(this.destroyRef)).subscribe(), (0, w.a)([this.crashBet$.pipe((0, $.x)()), this.gameStatus$.pipe((0, $.x)())]).pipe((0, i.U)(([{
                            tick: r
                        }, m]) => "FINISHED" !== m || "FINISHED" === m && r), (0, $.x)(), (0, B.b)(r => this.isBetAlive$.next(r)), (0, u.sL)(this.destroyRef)).subscribe()
                    }
                    toggleManualObserve() {
                        if (this.canChangeObserve$.getValue()) {
                            if (this.isDefaultObserved$.getValue()) return void(this.crashService.selectedObservedCrashBet$.getValue() && this.crashService.selectedObservedCrashBet$.next(null));
                            this.isSelectedObserved$.getValue() ? this.crashService.selectedObservedCrashBet$.next(null) : this.crashService.selectedObservedCrashBet$.next(this.crashBet$.getValue())
                        }
                    }
                }
                return h.\u0275fac = function(r) {
                    return new(r || h)(e.Y36(E.e), e.Y36(e.ktI))
                }, h.\u0275cmp = e.Xpm({
                    type: h,
                    selectors: [
                        ["cw-crash-bet"]
                    ],
                    hostVars: 6,
                    hostBindings: function(r, m) {
                        1 & r && e.NdJ("$.class.observed", function() {
                            return m.isObserved$()
                        })("$.class.cashed", function() {
                            return m.hasCashed$()
                        })("$.class.crashed", function() {
                            return m.hasCrashed$()
                        }), 2 & r && (e.Ikx("$.class.observed", m.isObserved$)("$.class.cashed", m.hasCashed$)("$.class.crashed", m.hasCrashed$), e.d8E("@leaveAnim", m.leaveAnim), e.ekj("floating-bet", m.floatingBet))
                    },
                    inputs: {
                        gameStatus: "gameStatus",
                        crashBet: "crashBet",
                        inQueue: "inQueue",
                        inLiveGame: "inLiveGame",
                        cashedOut: "cashedOut",
                        floatingBet: "floatingBet"
                    },
                    outputs: {
                        cancel: "cancel"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        [4, "ngrxLet"],
                        ["class", "left-button clickable", "position", "left", "tooltipClass", "crash-bet-tooltip", 3, "cwTooltip", "click", 4, "ngIf"],
                        ["class", "left-button", "position", "left", "tooltipClass", "crash-bet-tooltip", 3, "clickable", "cwTooltip", "click", 4, "ngIf"],
                        ["observeTooltipContent", ""],
                        ["cancelBetTooltipContent", ""],
                        ["position", "left", "tooltipClass", "crash-bet-tooltip", 1, "left-button", "clickable", 3, "cwTooltip", "click"],
                        ["inlineSVG", "assets/icons/close-outline.svg", 1, "text-warning"],
                        ["position", "left", "tooltipClass", "crash-bet-tooltip", 1, "left-button", 3, "cwTooltip", "click"],
                        ["inlineSVG", "assets/icons/eye.svg"],
                        [1, "bet", "d-flex", "align-items-center", "justify-content-between", "gap-1", "w-100"],
                        [1, "avatar", 3, "routerLink"],
                        [3, "user", "small"],
                        [1, "items"],
                        [4, "ngIf"],
                        ["class", "text-contrast fs-14", 3, "currencyDigitsInfo", "balance", "currency", 4, "ngIf"],
                        ["inlineSVG", "assets/icons/clock-outline.svg", 4, "ngIf"],
                        ["class", "text-danger fs-14", 3, "currencyDigitsInfo", "balance", "currency", 4, "ngIf"],
                        ["class", "animated text-success in-progress-arrow", "inlineSVG", "assets/icons/arrow.svg", 3, "ngClass", 4, "ngIf"],
                        [1, "state"],
                        ["class", "state-label", 4, "ngIf", "ngIfElse"],
                        ["boom", ""],
                        ["class", "multiple-items", 4, "ngIf"],
                        [1, "crash-item", 3, "src"],
                        [1, "multiple-items"],
                        [1, "crash-item", "won", 3, "src"],
                        [1, "text-contrast", "fs-14", 3, "currencyDigitsInfo", "balance", "currency"],
                        [1, "text-success", "fs-14", 3, "currencyDigitsInfo", "balance", "currency"],
                        ["inlineSVG", "assets/icons/clock-outline.svg"],
                        [1, "text-danger", "fs-14", 3, "currencyDigitsInfo", "balance", "currency"],
                        ["inlineSVG", "assets/icons/arrow.svg", 1, "animated", "text-success", "in-progress-arrow", 3, "ngClass"],
                        [1, "state-label"],
                        ["class", "tick", 4, "ngIf"],
                        [4, "ngIf", "ngIfElse"],
                        ["liveTpl", ""],
                        [1, "max-tick"],
                        [1, "tick"],
                        ["src", "assets/icons/crash/boom.png", 1, "lost-img"]
                    ],
                    template: function(r, m) {
                        1 & r && e.YNc(0, ot, 2, 1, "ng-container", 0), 2 & r && e.Q6J("ngrxLet", m.crashBet$)
                    },
                    dependencies: [C.mk, C.O5, n.rH, Z.oO, o.d$, s.eJ, a.o, F.i, Q.q, et.i, C.JJ, s.fM],
                    styles: ["[_nghost-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.1rem .5rem .1rem 1rem;font-size:.8rem;background-color:var(--crash-bet-bg-color, transparent);border-radius:.3rem;margin-left:.74rem;position:relative;animation:betEnterAnim var(--enter-anim-dur)}.observed[_nghost-%COMP%]{background-color:var(--crash-bet-bg-color-lighten)}.observed[_nghost-%COMP%]   .left-button[_ngcontent-%COMP%]{background-color:var(--crash-bet-bg-color-lighten)}.cashed[_nghost-%COMP%]{background-color:#2d5347}.cashed[_nghost-%COMP%]   .left-button[_ngcontent-%COMP%]{background-color:#2d5347}.crashed[_nghost-%COMP%]{background-color:#523433}.crashed[_nghost-%COMP%]   .left-button[_ngcontent-%COMP%]{background-color:#523433}.floating-crash-bet[_nghost-%COMP%]{transform:translateZ(0);width:200px;padding-left:.5rem}.floating-crash-bet[_nghost-%COMP%]   .left-button[_ngcontent-%COMP%], .floating-crash-bet[_nghost-%COMP%]   .items[_ngcontent-%COMP%], .floating-crash-bet[_nghost-%COMP%]   .in-progress-arrow[_ngcontent-%COMP%]{display:none!important}.floating-crash-bet[_nghost-%COMP%]   .avatar[_ngcontent-%COMP%], .floating-crash-bet[_nghost-%COMP%]   .state[_ngcontent-%COMP%]{animation:none!important}.floating-bet[_nghost-%COMP%]{animation:_ngcontent-%COMP%_floatingBetAppearAnim 1.1s}.left-button[_ngcontent-%COMP%]{background-color:var(--crash-bet-bg-color);border-radius:50%;position:absolute;left:-.75rem;width:1.5rem;height:1.5rem;display:flex;justify-content:center;align-items:center}.left-button[_ngcontent-%COMP%]   cw-icon[_ngcontent-%COMP%]{width:1rem;height:1rem}.left-button.clickable[_ngcontent-%COMP%]{cursor:pointer;transition:filter .2s}.left-button.clickable[_ngcontent-%COMP%]:hover{filter:brightness(1.25)}  .crash-bet-tooltip{--tooltip-bg: var(--crash-bet-bg-color);--tooltip-fontSize: 14px;--tooltip-radius: 14px;--tooltip-padding: 7px 14px;animation:_ngcontent-%COMP%_tooltipEnterAnim .3s}  .crash-bet-tooltip b{color:#fff;font-weight:400}.bet[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:2rem;min-width:2rem;animation:avatarEnterAnim var(--enter-anim-dur)}.bet[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:inline-block;width:42px;height:42px;position:relative;text-align:center;margin-right:12px}.bet[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   img.crash-item[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:70%}.bet[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   img.crash-item.won[_ngcontent-%COMP%]{animation:scaleUpBig .16s 4 alternate}.bet[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .multiple-items[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;border-radius:.2rem;top:0;left:0;background-color:#0003;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:1.1rem}.bet[_ngcontent-%COMP%]   cw-pretty-balance[_ngcontent-%COMP%]{color:var(--crash-bet-color);font-size:.9rem}.bet[_ngcontent-%COMP%]   cw-pretty-balance.won[_ngcontent-%COMP%]{animation:scaleUpBig .16s 4 alternate}.bet[_ngcontent-%COMP%]   cw-icon[_ngcontent-%COMP%]{margin-left:8px;width:12px;vertical-align:middle}.bet[_ngcontent-%COMP%]   cw-icon.animated[_ngcontent-%COMP%]{animation:scaleUp .25s infinite alternate}.state[_ngcontent-%COMP%]{min-width:4rem;white-space:nowrap;display:inline-block;text-align:right;animation:_ngcontent-%COMP%_stateEnterAnim var(--enter-anim-dur)}.state[_ngcontent-%COMP%]   .state-label[_ngcontent-%COMP%]{min-width:3.8rem;text-align:center;font-size:.75rem;padding:4px 8px;border-radius:.2rem;background-color:var(--card-bg)}.state[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%]{font-size:.9rem;font-weight:700;color:#00c74d}.state[_ngcontent-%COMP%]   .max-tick[_ngcontent-%COMP%]{color:#ffe063;font-size:13px}.state[_ngcontent-%COMP%]   .lost-img[_ngcontent-%COMP%]{width:3rem;vertical-align:middle}.state[_ngcontent-%COMP%]   cw-coin-item[_ngcontent-%COMP%]{display:inline-flex;padding:0 10px}cw-pretty-balance[_ngcontent-%COMP%]{font-size:1.1rem}@keyframes _ngcontent-%COMP%_stateEnterAnim{0%{transform:translate3d(100%,0,0)}to{transform:translateZ(0)}}@keyframes _ngcontent-%COMP%_tooltipEnterAnim{0%{opacity:0;transform:translate(-20px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_floatingBetAppearAnim{0%{opacity:0;transform:scale3d(.9,.9,.9) translate3d(0,50%,0)}10%{opacity:1;transform:scaleZ(1) translateZ(0)}to{opacity:0;transform:scale3d(.9,.9,.9) translate3d(0,-150%,0)}}"],
                    data: {
                        animation: [(0, D.QQ)({
                            anchor: "leaveAnim",
                            duration: 200
                        })]
                    },
                    changeDetection: 0
                }), h
            })()
        },
        93678: (_t, K, t) => {
            t.d(K, {
                q: () => D
            });
            var e = t(37365),
                u = t(56592),
                A = t(41974);
            const D = u.Ps`
  fragment CrashBet on CrashBet {
    amount
    currency
    desiredItemVariantId
    desiredItemVariant {
      ...PotentialItemVariant
    }
    gameId
    id
    maxTick
    mode
    tick
    totalBet
    totalWinAmount
    userItem {
      id
      consumeValue
      itemVariant {
        ...PotentialItemVariant
      }
    }
    user {
      ...UserBadgeSimple
    }
    items {
      edges {
        node {
          id
          userItem {
            id
            consumeValue
          }
          itemVariant {
            ...PotentialItemVariant
          }
        }
      }
    }
  }

  ${e.edw}
  ${A.b}
`
        },
        99233: (_t, K, t) => {
            t.d(K, {
                C: () => u
            });
            var e = t(22223);
            let u = (() => {
                class A {
                    constructor() {
                        this.classes = "d-flex flex-column justify-content-center align-items-center position-absolute inset-0"
                    }
                }
                return A.\u0275fac = function(p) {
                    return new(p || A)
                }, A.\u0275cmp = e.Xpm({
                    type: A,
                    selectors: [
                        ["cw-crash-busted"]
                    ],
                    hostVars: 2,
                    hostBindings: function(p, w) {
                        2 & p && e.Tol(w.classes)
                    },
                    decls: 1,
                    vars: 0,
                    consts: [
                        ["src", "assets/icons/crash/boom.png"]
                    ],
                    template: function(p, w) {
                        1 & p && e._UZ(0, "img", 0)
                    },
                    styles: ["img[_ngcontent-%COMP%]{width:auto;height:30%}"],
                    changeDetection: 0
                }), A
            })()
        },
        56340: (_t, K, t) => {
            t.d(K, {
                L: () => S
            });
            var e = t(70655),
                u = t(97144),
                A = t(49933),
                D = t(80188),
                p = t(63900),
                w = t(35248),
                $ = t(43475),
                i = t(22223);
            const B = ["video"];
            let S = class {
                constructor(C) {
                    this.crashService = C, this.videoUrl = "assets/webm/coin2.webm"
                }
                ngAfterViewInit() {
                    const o = this.video.nativeElement;
                    (0, D.D)(fetch(this.videoUrl)).pipe((0, p.w)(() => (o.muted = !0, o.loop = !0, o.play())), (0, p.w)(() => this.crashService.multiplier$), (0, w.p)(2e3), (0, A.t)(this)).subscribe(s => {
                        const a = (0, u.uZ)((0, u.ii)(1, 3, s), 0, 1),
                            F = (0, u.t7)(1, 4, a);
                        o.playbackRate = F
                    })
                }
            };
            S.\u0275fac = function(C) {
                return new(C || S)(i.Y36($.e))
            }, S.\u0275cmp = i.Xpm({
                type: S,
                selectors: [
                    ["cw-crash-coin-animation"]
                ],
                viewQuery: function(C, n) {
                    if (1 & C && i.Gf(B, 5), 2 & C) {
                        let Z;
                        i.iGM(Z = i.CRH()) && (n.video = Z.first)
                    }
                },
                decls: 2,
                vars: 1,
                consts: [
                    ["type", "video/webm", "playsinline", "", "preload", "none", 1, "coin-video", 3, "src"],
                    ["video", ""]
                ],
                template: function(C, n) {
                    1 & C && i._UZ(0, "video", 0, 1), 2 & C && i.Q6J("src", n.videoUrl, i.LSH)
                },
                styles: ["[_nghost-%COMP%]{position:absolute;inset:0;margin:auto;display:block;height:100%;width:100%}video[_ngcontent-%COMP%]{height:100%}"],
                changeDetection: 0
            }), S = (0, e.gn)([(0, A.c)(), (0, e.w6)("design:paramtypes", [$.e])], S)
        },
        75744: (_t, K, t) => {
            t.d(K, {
                R: () => Z
            });
            var e = t(22223),
                u = t(61135),
                A = t(63900),
                D = t(39646),
                p = t(17445),
                w = t(70029),
                $ = t(54004),
                i = t(22529),
                B = t(28746),
                S = t(43475),
                E = t(1475),
                C = t(44755),
                n = t(16622);
            let Z = (() => {
                class o {
                    constructor() {
                        this.crashService = (0, e.f3M)(S.e), this.progress$ = new u.X(100), this.countdown$ = this.crashService.gameStartedAt$.pipe((0, A.w)(a => a <= 0 ? (0, D.of)(0) : (0, p.F)(0, w.Z).pipe((0, $.U)(() => {
                            const F = a - (new Date).getTime(),
                                Q = F < 0 ? 0 : F;
                            return this.progress$.next(Q / 100), Q / 1e3
                        }), (0, i.o)(F => F > 0, !0), (0, B.x)(() => {
                            this.progress$.next(0)
                        }))))
                    }
                }
                return o.\u0275fac = function(a) {
                    return new(a || o)
                }, o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["cw-crash-countdown"]
                    ],
                    decls: 9,
                    vars: 10,
                    consts: function() {
                        let s;
                        return s = $localize`:␟0348e4fa6fe0a5c0ca7d75e5e9daf4e2a86ff07b␟4917478086279049652:Next Round in...`, [
                            [1, "next-round"], s, [1, "countdown"],
                            ["className", "bg-success", 3, "total", "now"]
                        ]
                    },
                    template: function(a, F) {
                        1 & a && (e.TgZ(0, "div", 0), e.SDv(1, 1), e.qZA(), e.TgZ(2, "div", 2)(3, "span"), e._uU(4), e.ALo(5, "number"), e.ALo(6, "ngrxPush"), e.qZA()(), e._UZ(7, "cw-progress", 3), e.ALo(8, "ngrxPush")), 2 & a && (e.xp6(4), e.Oqu(e.xi3(5, 3, e.lcZ(6, 6, F.countdown$), "1.2-2")), e.xp6(3), e.Q6J("total", 100)("now", e.lcZ(8, 8, F.progress$)))
                    },
                    dependencies: [E.t, C.JJ, n.fM],
                    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem;position:relative;width:100%;height:100%}.next-round[_ngcontent-%COMP%]{text-transform:uppercase;color:#6c757d}.countdown[_ngcontent-%COMP%]{font-weight:700;font-size:var(--crash-game-score-font-size);font-family:var(--crash-game-status-font-family)}cw-progress[_ngcontent-%COMP%]{--progress-bar-radius: 1.875rem;width:min(10rem,30%);height:.3125rem;margin-top:.5rem}"],
                    changeDetection: 0
                }), o
            })()
        },
        32617: (_t, K, t) => {
            t.d(K, {
                f: () => F
            });
            var e = t(22223),
                u = t(97144),
                D = (t(37365), t(57994)),
                w = t(39841),
                $ = t(39300),
                i = t(54004),
                B = t(43475),
                S = t(44755),
                E = t(4859),
                C = t(89847),
                n = t(406),
                Z = t(16622);

            function o(Q, et) {
                if (1 & Q && (e.ynx(0), e.TgZ(1, "span", 4)(2, "span", 5), e.SDv(3, 6), e.qZA(), e._UZ(4, "cw-pretty-balance", 7), e.ALo(5, "ngrxPush"), e.qZA(), e.BQk()), 2 & Q) {
                    const j = e.oxw();
                    e.xp6(4), e.Q6J("currencyDigitsInfo", "1.2-2")("balance", e.lcZ(5, 3, j.coinsTotalValue$))("currency", j.currency)
                }
            }

            function s(Q, et) {
                if (1 & Q && (e.TgZ(0, "span")(1, "span"), e._uU(2), e.qZA(), e.TgZ(3, "span", 13), e._uU(4), e.qZA()()), 2 & Q) {
                    const j = e.oxw(2);
                    e.xp6(2), e.Oqu(" @ "), e.xp6(2), e.hij("x", j.multiplier, "")
                }
            }

            function a(Q, et) {
                if (1 & Q && (e.ynx(0), e.TgZ(1, "span", 8)(2, "span", 9), e.SDv(3, 10), e.qZA(), e._UZ(4, "cw-pretty-balance", 11), e.TgZ(5, "span"), e.SDv(6, 12), e.qZA(), e.YNc(7, s, 5, 2, "span", 3), e.qZA(), e.BQk()), 2 & Q) {
                    const j = e.oxw();
                    e.xp6(3), e.pQV("STARTED" === j.status ? "Queue" : "Place"), e.QtT(3), e.xp6(1), e.Q6J("currencyDigitsInfo", "1.2-2")("balance", j.totalBetAmount)("currency", j.currency), e.xp6(3), e.Q6J("ngIf", j.multiplier)
                }
            }
            let F = (() => {
                class Q {
                    constructor(j) {
                        this.crashService = j, this.cwSubmit = new e.vpe, this.coinsTotalValue$ = (0, w.a)([this.crashService.userLiveBet$.pipe((0, $.h)(u.$K)), this.crashService.multiplier$]).pipe((0, i.U)(([Y, at]) => Y.totalWinAmount ? Y.totalWinAmount : +(0, D.Big)(Y.totalBet).times(at).toFixed(2)))
                    }
                }
                return Q.\u0275fac = function(j) {
                    return new(j || Q)(e.Y36(B.e))
                }, Q.\u0275cmp = e.Xpm({
                    type: Q,
                    selectors: [
                        ["cw-crash-form-button"]
                    ],
                    inputs: {
                        canCashOut: "canCashOut",
                        currency: "currency",
                        disabled: "disabled",
                        loading: "loading",
                        totalBetAmount: "totalBetAmount",
                        multiplier: "multiplier",
                        status: "status"
                    },
                    outputs: {
                        cwSubmit: "cwSubmit"
                    },
                    decls: 5,
                    vars: 5,
                    consts: function() {
                        let et, j, Y;
                        return et = $localize`:␟ae33b6c82ef126972dc177bf3104c9360268025c␟1617142075103390555:Cash out`, j = $localize`:␟585b283089300469f3b25184b4b2b120a2af561a␟876610515909195338:${"\ufffd0\ufffd"}:INTERPOLATION:`, Y = $localize`:␟3611e207614b2c2b82dffc027ba08b92b20a92fb␟449928999286346224:Bet`, [
                            [1, "d-inline-block"],
                            ["mat-button", "", "mat-flat-button", "", "data-test", "place-queue-bet", 1, "crash-button", "mat-button-3d", 3, "color", "disabled", "loading", "click"],
                            [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text"],
                            [4, "ngIf"],
                            [1, "text-uppercase", "d-flex", "align-items-center"],
                            ["data-test", "cash-out"], et, [1, "fs-18", "fw-500", "mx-2", 3, "currencyDigitsInfo", "balance", "currency"],
                            ["data-test", "action-values", 1, "text-uppercase", "d-flex", "align-items-center"],
                            ["data-test", "place-queue"], j, ["data-test", "bet-amount", 1, "fs-18", "fw-500", "mx-2", 3, "currencyDigitsInfo", "balance", "currency"], Y, [1, "multiplier-label", "fs-14", "text-lowercase"]
                        ]
                    },
                    template: function(j, Y) {
                        1 & j && (e.TgZ(0, "div", 0)(1, "button", 1), e.NdJ("click", function() {
                            return Y.cwSubmit.next()
                        }), e.TgZ(2, "div", 2), e.YNc(3, o, 6, 5, "ng-container", 3), e.YNc(4, a, 8, 5, "ng-container", 3), e.qZA()()()), 2 & j && (e.xp6(1), e.Q6J("color", Y.canCashOut ? "red" : "accent")("disabled", Y.disabled)("loading", Y.loading), e.xp6(2), e.Q6J("ngIf", Y.canCashOut), e.xp6(1), e.Q6J("ngIf", !Y.canCashOut))
                    },
                    dependencies: [S.O5, E.lW, C.q, n.S, Z.fM],
                    styles: [".crash-button[_ngcontent-%COMP%]{line-height:14px!important;padding:0 .75rem;min-width:13rem;height:4rem;border-radius:var(--crash-button-border-radius)!important}@media (max-width: 767.98px){.crash-button[_ngcontent-%COMP%]{height:2.65rem}}"],
                    changeDetection: 0
                }), Q
            })()
        },
        91659: (_t, K, t) => {
            t.d(K, {
                $: () => l
            });
            var e = t(84080),
                u = t(75855),
                A = t(58591),
                D = t(99751),
                p = t(97144),
                w = t(42202),
                $ = t(26127),
                i = t(37365),
                B = t(57994),
                S = t(61135),
                E = t(77579),
                C = t(63900),
                n = t(39300),
                Z = t(95698),
                o = t(54004),
                s = t(22223),
                a = t(69144);
            let F = (() => {
                class d {
                    constructor(_) {
                        this.apollo = _, this.objective$ = new S.X(null), this.find$ = new E.x, this.find$.pipe((0, C.w)(O => this.findItemByValue(O))).subscribe(O => this.objective$.next(O))
                    }
                    findItemByValue({
                        amount: _,
                        maxTick: O
                    }) {
                        const y = Math.floor(+(0, B.Big)(_).times(O)) / 100;
                        return this.apollo.watchQuery({
                            query: i.zfh,
                            variables: {
                                maxValue: y,
                                obtainable: !0,
                                orderBy: i.l6t.VALUE_DESC,
                                first: 1
                            },
                            fetchPolicy: "cache-and-network"
                        }).valueChanges.pipe((0, n.h)(({
                            data: X
                        }) => !!X), (0, Z.q)(1), (0, o.U)(({
                            data: X
                        }) => {
                            const lt = X.itemVariants.edges.map(gt => gt.node);
                            return {
                                itemVariant: lt.length ? lt[0] : null,
                                maxTick: O
                            }
                        }))
                    }
                }
                return d.\u0275fac = function(_) {
                    return new(_ || d)(s.LFG(a._M))
                }, d.\u0275prov = s.Yz7({
                    token: d,
                    factory: d.\u0275fac,
                    providedIn: "root"
                }), d
            })();
            var Q = t(36982),
                et = t(99017),
                j = t(19024),
                Y = t(13264),
                at = t(57854),
                mt = t(63393),
                T = t(35715),
                it = t(68675),
                q = t(39841),
                tt = t(18505),
                R = t(71884),
                V = t(78372),
                N = t(39646),
                st = t(61260),
                H = t(17445),
                nt = t(28746),
                G = t(11365);

            function z(d, g) {
                return _ => null === _.value || "" === _.value || _.value >= d && _.value <= g ? null : {
                    multiplier: `Multiplier must be greater than ${d}`
                }
            }
            var M = t(25888),
                I = t(56423),
                v = t(43475),
                b = t(65412),
                U = t(39401),
                ht = t(98184),
                dt = t(97185),
                pt = t(71591),
                ut = t(44755),
                ot = t(55829),
                x = t(96298),
                h = t(10266),
                c = t(16622),
                r = t(89847),
                m = t(32617);
            const P = ["betAmount"];

            function L(d, g) {
                if (1 & d && (s.ynx(0), s._UZ(1, "div", 32)(2, "img", 33), s.BQk()), 2 & d) {
                    const _ = s.oxw(2).$implicit;
                    s.xp6(1), s.Q6J("ngClass", "bg-gradient-to-bottom-" + (null == _.itemVariant ? null : _.itemVariant.rarity)), s.xp6(1), s.Q6J("src", null == _.itemVariant ? null : _.itemVariant.iconUrl, s.LSH)("matTooltip", null == _.itemVariant ? null : _.itemVariant.name)
                }
            }

            function W(d, g) {
                if (1 & d && (s.ynx(0), s.YNc(1, L, 3, 3, "ng-container", 23), s.ALo(2, "ngrxPush"), s.BQk()), 2 & d) {
                    s.oxw();
                    const _ = s.MAs(5),
                        O = s.oxw();
                    s.xp6(1), s.Q6J("ngIf", s.lcZ(2, 2, O.crashBetMode$) === O.CrashBetMode.ITEMS_AND_COINS)("ngIfElse", _)
                }
            }

            function k(d, g) {
                if (1 & d && (s.TgZ(0, "div", 34), s._UZ(1, "cw-pretty-balance", 35), s.qZA()), 2 & d) {
                    const _ = s.oxw(2);
                    s.xp6(1), s.Q6J("currencyDigitsInfo", "1.2-4")("balance", _.form.controls.multiplier.value * _.form.controls.amount.value)
                }
            }

            function J(d, g) {
                1 & d && (s.TgZ(0, "div", 34), s._UZ(1, "span", 36), s.qZA())
            }
            const rt = function(d, g) {
                    return {
                        "text-danger": d,
                        "text-warning": g
                    }
                },
                ct = function() {
                    return [.1, 1]
                };

            function Ct(d, g) {
                if (1 & d) {
                    const _ = s.EpF();
                    s.TgZ(0, "div", 21)(1, "div", 22), s.NdJ("click", function() {
                        s.CHM(_);
                        const y = s.oxw();
                        return s.KtG(y.selectObjective())
                    }), s.YNc(2, W, 3, 4, "ng-container", 23), s._UZ(3, "span", 24), s.YNc(4, k, 2, 2, "ng-template", null, 25, s.W1O), s.YNc(6, J, 2, 0, "ng-template", null, 26, s.W1O), s.qZA(), s.TgZ(8, "div", 27)(9, "h6", 28), s.SDv(10, 29), s.qZA(), s.TgZ(11, "div", 30)(12, "cw-amount-input", 31), s.NdJ("clear", function() {
                        s.CHM(_);
                        const y = s.oxw();
                        return s.KtG(y.clearObjective())
                    }), s.qZA()()()()
                }
                if (2 & d) {
                    const _ = g.$implicit,
                        O = s.MAs(7),
                        y = s.oxw();
                    s.xp6(2), s.Q6J("ngIf", _)("ngIfElse", O), s.xp6(7), s.Q6J("ngClass", s.WLB(14, rt, y.form.controls.multiplier.invalid, y.form.controls.multiplier.valid && y.form.controls.multiplier.value)), s.xp6(3), s.Q6J("ctrl", y.form.controls.multiplier)("smallButtons", !0)("options", s.DdM(17, ct))("label", !1)("hideWhenLTLG", !1)("addAndSubtractButton", !1)("clearButton", null !== _)("lastButton", !1)("clearValue", null)("maxButton", !1)("doubleAndHalfButton", !1)
                }
            }
            const Mt = function(d) {
                return [d]
            };

            function Tt(d, g) {
                if (1 & d) {
                    const _ = s.EpF();
                    s.TgZ(0, "span", 37), s.NdJ("click", function() {
                        const X = s.CHM(_).$implicit,
                            lt = s.oxw();
                        return s.KtG(lt.toggleItem(X))
                    }), s._UZ(1, "span", 38)(2, "img", 39), s.qZA()
                }
                if (2 & d) {
                    const _ = g.$implicit;
                    s.ekj("selected", _.selected), s.xp6(1), s.Q6J("ngClass", s.VKq(8, Mt, "bg-" + _.itemVariant.rarity)), s.xp6(1), s.Q6J("src", _.itemVariant.iconUrl, s.LSH)("alt", _.itemVariant.name)("matTooltip", null == _.itemVariant ? null : _.itemVariant.name)("width", 32)("height", 32)
                }
            }
            const f = function() {
                return [1, 10]
            };
            let l = (() => {
                class d {
                    set game(_) {
                        this.game$.next(_), this.creating$.next(!1), this.exiting$.next(!1), this.processing$.next(!1), "CREATED" === _.status && this.crashService.hasBetsInQueue$.pipe((0, Z.q)(1), (0, u.sL)(this.destroyRef)).subscribe(O => {
                            O && this.createBets()
                        })
                    }
                    get selectedItemsCollection() {
                        return this.crashService.isLoadingSelectedItemsCollection$.pipe((0, n.h)(_ => !_), (0, o.U)(() => this.crashService.selectedItemsCollection))
                    }
                    constructor(_, O, y, X, lt, gt, vt, Et, xt, St, Ot, Pt, Bt, At, $t) {
                        this.authDialogService = _, this.crashService = O, this.dialog = y, this.fb = X, this.objectiveService = lt, this.overlay = gt, this.layoutService = vt, this.soundService = Et, this.toastrService = xt, this.userService = St, this.portableInventoryService = Ot, this.userItemService = Pt, this.store = Bt, this.destroyRef = At, this.settings = $t, this.game$ = new S.X(null), this.lastAmount = 0, this.minMultiplier = 1.01, this.maxMultiplier = 1e6, this.selectedItems$ = this.selectedItemsCollection.pipe((0, C.w)(({
                            items$: ft
                        }) => ft)), this.selectedItemsValue$ = this.selectedItems$.pipe((0, it.O)([]), (0, o.U)(ft => ft.reduce((It, Dt) => It + Dt.itemVariant.value, 0))), this.mostValuableUserItems$ = (0, q.a)([this.crashService.userItems$, this.selectedItems$]).pipe((0, o.U)(([ft, It]) => ft.sort((bt, Lt) => Lt.itemVariant.value - bt.itemVariant.value).map(bt => ({
                            ...bt,
                            selected: !!It.find(Lt => Lt.id === bt.id)
                        })))), this.creating$ = new S.X(!1), this.processing$ = new S.X(!1), this.exiting$ = new S.X(!1), this.loading$ = (0, q.a)([this.creating$, this.exiting$, this.processing$]).pipe((0, o.U)(ft => ft.some(Boolean))), this.form = this.fb.group({
                            amount: [0, [], this.amountFormValidator()],
                            multiplier: ["", [z(this.minMultiplier, this.maxMultiplier)]],
                            userItemIds: []
                        }), this.CrashBetMode = i.CBC, this.objective$ = this.objectiveService.objective$.pipe((0, tt.b)(() => this.fetchingObjective$.next(!1))), this.currency$ = this.userService.currency$, this.crashBetMode$ = this.crashService.crashBetMode$, this.canCashout$ = (0, q.a)([this.crashService.userLiveBet$, this.crashService.game$]).pipe((0, o.U)(([ft, It]) => this.canCashout(ft, It))), this.gameStatus$ = this.crashService.game$.pipe((0, o.U)(ft => ft.status)), this.minBetAmount$ = this.settings.getSetting(Q.n.CrashMinimumTotalBetValue).pipe((0, o.U)(ft => ft?.value)), this.maxBetAmount$ = this.settings.getSetting(Q.n.CrashMaximumTotalBetValue).pipe((0, o.U)(ft => ft?.value)), this.refreshSubmitDisabledObservable$ = new S.X(null), this.fetchingObjective$ = new S.X(!1)
                    }
                    ngOnInit() {
                        const _ = this.form.get("multiplier"),
                            O = this.form.get("amount");
                        this.isSubmitDisabled$ = (0, q.a)([_.valueChanges.pipe((0, it.O)(_.value)), this.crashService.manualCrashBetQueue$, this.crashService.userLiveBet$, this.crashService.game$, this.canCashout$, this.loading$, this.fetchingObjective$, this.refreshSubmitDisabledObservable$, O.valueChanges.pipe((0, it.O)(O.value))]).pipe((0, o.U)(([y, X, lt, gt, vt, Et, xt]) => {
                            if (vt) return !1;
                            const St = this.form.get("multiplier").value >= this.minMultiplier,
                                Ot = this.isManualBetActive(X, lt, gt) && !St;
                            return this.form.updateValueAndValidity(), Et || this.form.invalid || Ot || "FINISHED" === gt.status || xt
                        })), this.form.get("amount").valueChanges.pipe((0, u.sL)(this.destroyRef)).subscribe(y => {
                            y < this.lastAmount && this.soundService.playSound($.z.CRASH, $.g.CRASH_BET_DECREASE), y > this.lastAmount && this.soundService.playSound($.z.CRASH, $.g.CRASH_BET_INCREASE), this.lastAmount = y, this.crashService.betAmount$.next(+y)
                        }), this.crashService.betAmount$.next(this.form.get("amount").value), this.selectedItems$.pipe((0, u.sL)(this.destroyRef)).subscribe(y => {
                            this.form.get("userItemIds").setValue(y.map(X => X.id)), this.form.get("amount").updateValueAndValidity()
                        }), this.totalBetAmount$ = (0, q.a)([this.crashService.betAmount$, this.selectedItemsValue$]).pipe((0, o.U)(([y, X]) => y + X)), (0, q.a)([this.totalBetAmount$, this.form.get("multiplier").valueChanges.pipe((0, R.x)())]).pipe((0, u.sL)(this.destroyRef), (0, V.b)(200)).subscribe(([y, X]) => {
                            if (X > 1 && y > 0) {
                                const lt = Math.floor(+(0, B.Big)(X).times(100));
                                this.fetchingObjective$.next(!0), this.objectiveService.find$.next({
                                    amount: y,
                                    maxTick: lt
                                })
                            } else this.objectiveService.objective$.next(null)
                        })
                    }
                    focusAmount() {
                        this.amountInput.setFocus()
                    }
                    isManualBetActive(_, O, y) {
                        return !!_ || "CREATED" === y.status && null !== O
                    }
                    canCashout(_, O) {
                        return "STARTED" === O.status && !!_ && !_.tick
                    }
                    onSubmit() {
                        this.userService.user$.pipe((0, tt.b)(() => this.processing$.next(!0)), (0, C.w)(_ => _ ? (0, q.a)([(0, N.of)(_), this.selectedItems$, this.totalBetAmount$, this.crashService.userLiveBet$, this.userService.balance$, this.minBetAmount$, this.maxBetAmount$, this.crashService.queuedBetsCount$, this.crashService.queuedBetsTotalValue$]) : (this.authDialogService.openAuthModal(), (0, N.of)(null))), (0, Z.q)(1), (0, n.h)(p.$K), (0, o.U)(([_, O, y, X, lt, gt, vt, Et, xt]) => {
                            if ("STARTED" === this.game$.getValue()?.status && X && !X.tick) return void this.exitCrash(X);
                            const {
                                amount: St,
                                multiplier: Ot
                            } = this.form.getRawValue();
                            if (y < gt) this.toastrService.info(`Minimum bet amount is ${gt}`);
                            else if (y > vt) this.toastrService.info(`Maximum bet amount is ${vt}`);
                            else if (lt < St + xt) this.store.dispatch((0, D.e$)({}));
                            else if (this.form.valid) {
                                const Pt = this.objectiveService.objective$.getValue();
                                let Bt = {};
                                !Pt && Ot ? Bt.maxTick = 100 * Ot : Bt = Pt;
                                const At = this.createQueuedCrashBet(_, Bt, O);
                                if ("CREATED" === this.game$.getValue()?.status) this.createBet(At);
                                else {
                                    if (Et >= 5) return void this.toastrService.info("You can not queue more than 5 bets per round");
                                    Ot ? this.crashService.autoCrashBetsQueue$.add(At) : this.crashService.manualCrashBetQueue$.next(At)
                                }
                                if (At.items.edges.forEach($t => this.userItemService.reservedCollection.add($t.node)), this.crashService.selectedItemsCollection.clear(), Ot || this.objectiveService.objective$.getValue()) return this.clearObjective(), 500
                            }
                        }), (0, st.j)(_ => (0, H.F)(_)), (0, tt.b)(() => this.processing$.next(!1)), (0, u.sL)(this.destroyRef)).subscribe()
                    }
                    createQueuedCrashBet(_, O, y) {
                        const lt = this.form.getRawValue().amount || 0,
                            gt = +y.reduce((vt, Et) => vt.plus(Et.consumeValueInUserCurrency), (0, B.Big)(lt));
                        return {
                            ...this.form.getRawValue(),
                            totalBet: gt,
                            desiredItemVariantId: O?.itemVariant?.id,
                            maxTick: O?.maxTick,
                            mode: this.crashService.crashBetMode$.getValue(),
                            user: {
                                id: _.id,
                                avatar: _.avatar,
                                userProgress: _.userProgress
                            },
                            items: {
                                edges: y.map(vt => ({
                                    node: vt
                                }))
                            }
                        }
                    }
                    createBets() {
                        this.crashService.autoCrashBetsQueue$.items$.pipe((0, Z.q)(1), (0, u.sL)(this.destroyRef)).subscribe(_ => _.forEach(O => this.createBet(O))), this.crashService.manualCrashBetQueue$.getValue() && this.createBet(this.crashService.manualCrashBetQueue$.getValue()), this.crashService.clearQueues(), this.soundService.playSound($.z.CRASH, $.g.CRASH_START)
                    }
                    createBet(_) {
                        return this.creating$.next(!0), this.crashService.createCrashBet({
                            amount: +_.amount,
                            desiredItemVariantId: _.desiredItemVariantId,
                            maxTick: _.maxTick ? Math.floor(_.maxTick) : void 0,
                            mode: _.mode,
                            userItemIds: _.userItemIds || []
                        }).pipe((0, nt.x)(() => this.creating$.next(!1)), (0, tt.b)(() => this.form.get("userItemIds").reset()), (0, Z.q)(1), (0, u.sL)(this.destroyRef)).subscribe()
                    }
                    exitCrash(_) {
                        return this.exiting$.next(!0), this.crashService.exitCrash(_.id).pipe((0, Z.q)(1), (0, nt.x)(() => this.exiting$.next(!1)), (0, u.sL)(this.destroyRef)).subscribe()
                    }
                    selectObjective() {
                        this.userService.user$.pipe((0, Z.q)(1), (0, G.M)(this.totalBetAmount$), (0, u.sL)(this.destroyRef)).subscribe(([_, O]) => _ ? O <= 0 ? this.focusAmount() : this.openObjectiveModal() : this.authDialogService.openAuthModal())
                    }
                    toggleItem(_) {
                        _.selected ? this.crashService.selectedItemsCollection.removeByKey("id", _.id) : this.crashService.selectedItemsCollection.add({
                            ..._,
                            selected: !_.selected
                        })
                    }
                    togglePortableInventory(_) {
                        this.userService.user$.pipe((0, Z.q)(1), (0, u.sL)(this.destroyRef)).subscribe(O => {
                            O ? this.portableInventoryService.togglePortableInventory(_).pipe((0, Z.q)(1), (0, u.sL)(this.destroyRef)).subscribe(y => {
                                y.hasActionsFooter = !1
                            }) : this.authDialogService.openAuthModal()
                        })
                    }
                    openObjectiveModal() {
                        this.soundService.playSound($.z.CRASH, $.g.CRASH_CHOOSE_ITEM);
                        const _ = this.dialog.open(M.l, {
                            width: "1140px"
                        });
                        _.componentInstance.objective = this.objectiveService.objective$.value, _.componentInstance.minValue$ = this.totalBetAmount$, _.afterClosed().pipe((0, Z.q)(1), (0, G.M)(this.totalBetAmount$), (0, u.sL)(this.destroyRef)).subscribe(([O, y]) => {
                            if (!O) return;
                            const X = +(0, B.Big)(O.value).div(y).toFixed(2);
                            if (X < this.minMultiplier) return this.toastrService.info("The selected item is worth less than your bet. Choose a more expensive item or lower your bet"), void this.clearObjective();
                            const lt = +(0, B.Big)(X).times(100).toFixed(2);
                            this.objectiveService.objective$.next({
                                itemVariant: O,
                                maxTick: lt
                            }), this.form.get("multiplier").setValue(X, {
                                emitEvent: !1
                            }), this.refreshSubmitDisabledObservable$.next()
                        })
                    }
                    openCrashOptions(_) {
                        const O = this.overlay.create(this.layoutService.getOverlayConfig(_)),
                            y = new e.C5(I.o);
                        O.attach(y).instance.overlayRef = O
                    }
                    clearObjective() {
                        this.form.get("multiplier").setValue(null), this.objectiveService.objective$.next(null)
                    }
                    amountFormValidator() {
                        return _ => _.value?.toString().split(".")[1]?.length > 2 ? (0, N.of)({
                            amount: "Bet cannot have more than 2 decimals"
                        }) : (0, N.of)(_.value < 0 ? {
                            amount: "Bet value cannot be negative"
                        } : null)
                    }
                    ngOnDestroy() {
                        this.crashService.selectedItemsCollection.clear(), this.clearObjective()
                    }
                }
                return d.\u0275fac = function(_) {
                    return new(_ || d)(s.Y36(A.AuthDialogService), s.Y36(v.e), s.Y36(b.uw), s.Y36(U.QS), s.Y36(F), s.Y36(ht.aV), s.Y36(w.P), s.Y36(j.y), s.Y36(dt._W), s.Y36(at.KD), s.Y36(T.PortableInventoryService), s.Y36(Y.m), s.Y36(pt.yh), s.Y36(s.ktI), s.Y36(et.R))
                }, d.\u0275cmp = s.Xpm({
                    type: d,
                    selectors: [
                        ["cw-crash-form"]
                    ],
                    viewQuery: function(_, O) {
                        if (1 & _ && s.Gf(P, 5), 2 & _) {
                            let y;
                            s.iGM(y = s.CRH()) && (O.amountInput = y.first)
                        }
                    },
                    inputs: {
                        game: "game"
                    },
                    decls: 31,
                    vars: 38,
                    consts: function() {
                        let g, _;
                        return g = $localize`:␟41397f34e157dd4a100c93d6d2f28454d97bffda␟642250844117975457:BET`, _ = $localize`:␟8e853ca13051b19ecc6de41df7a262d0d150d357␟2986893075351718211: FIXED MULTIPLIER `, [
                            [1, "text-center", "position-relative"],
                            [3, "loading", "disabled", "canCashOut", "currency", "multiplier", "totalBetAmount", "status", "cwSubmit"],
                            [1, "d-flex", "flex-column-reverse", "flex-md-row", "flex-md-wrap", "align-items-md-end", "justify-content-center", "mt-2", "mt-sm-3", "gap-1"],
                            ["class", "d-flex align-items-end", 4, "ngrxLet"],
                            [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-start", "align-items-md-end", "gap-1"],
                            ["novalidate", "", 1, "amount-form", "d-flex", "flex-column", 3, "formGroup", "ngSubmit"], g, [1, "w-100", 3, "ctrl", "smallButtons", "options", "hideWhenLTLG", "label", "addAndSubtractButton", "clearButton", "maxButton", "lastButton", "doubleAndHalfButton", "showErrors"],
                            ["betAmount", ""],
                            [1, "items-input"],
                            [1, "d-flex", "justify-content-between"],
                            ["matTooltip", "Crash Settings", "matTooltipPosition", "above", 3, "click"],
                            ["optionsTrigger", ""],
                            ["inlineSVG", "assets/icons/settings.svg", 1, "cw-icon", "fs-15", "opacity-50", "pointer"],
                            [1, "selected-items-container", "d-flex"],
                            [1, "overflow-x-auto", "whitespace-no-wrap", "no-scrollbar", "flex-1"],
                            ["class", "item-icon", 3, "selected", "click", 4, "ngFor", "ngForOf"],
                            [1, "separator"],
                            ["data-test", "crash-inventory-bet", 1, "inventory-trigger", "mat-icon-button", 3, "click"],
                            ["inventoryTrigger", ""],
                            ["inlineSVG", "assets/icons/backpack.svg", 1, "cw-icon"],
                            [1, "d-flex", "align-items-end"],
                            [1, "mr-2", "position-relative", "pointer", 3, "click"],
                            [4, "ngIf", "ngIfElse"],
                            ["inlineSVG", "assets/icons/objective.svg", 1, "cw-icon", "objective-icon"],
                            ["coinsRewardObjectiveTpl", ""],
                            ["emptyObjItemTpl", ""],
                            [1, "flex-1"],
                            [3, "ngClass"], _, [1, "multiplier-input"],
                            ["icon", "assets/icons/crash/times-multiplier.svg", "placeholder", "NOT SET", "data-test", "multiplier", 1, "w-100", 3, "ctrl", "smallButtons", "options", "label", "hideWhenLTLG", "addAndSubtractButton", "clearButton", "lastButton", "clearValue", "maxButton", "doubleAndHalfButton", "clear"],
                            [1, "opacity-50", "selected-icon", 3, "ngClass"],
                            ["matTooltipPosition", "above", 3, "src", "matTooltip"],
                            [1, "empty-icon"],
                            [3, "currencyDigitsInfo", "balance"],
                            ["inlineSVG", "assets/icons/item-bg.svg", 1, "cw-icon", "fs-27"],
                            [1, "item-icon", 3, "click"],
                            [1, "bullet", 3, "ngClass"],
                            ["matTooltipPosition", "below", 3, "src", "alt", "matTooltip", "width", "height"]
                        ]
                    },
                    template: function(_, O) {
                        if (1 & _) {
                            const y = s.EpF();
                            s.TgZ(0, "div", 0)(1, "cw-crash-form-button", 1), s.NdJ("cwSubmit", function() {
                                return O.onSubmit()
                            }), s.ALo(2, "ngrxPush"), s.ALo(3, "ngrxPush"), s.ALo(4, "ngrxPush"), s.ALo(5, "ngrxPush"), s.ALo(6, "ngrxPush"), s.ALo(7, "ngrxPush"), s.qZA()(), s.TgZ(8, "div", 2), s.YNc(9, Ct, 13, 18, "div", 3), s.TgZ(10, "div", 4)(11, "form", 5), s.NdJ("ngSubmit", function() {
                                return O.onSubmit()
                            }), s.TgZ(12, "h6"), s.SDv(13, 6), s.qZA(), s._UZ(14, "cw-amount-input", 7, 8), s.qZA(), s.TgZ(16, "div", 9)(17, "h6", 10)(18, "span"), s._uU(19, "BET ITEMS"), s.qZA(), s.TgZ(20, "span", 11, 12), s.NdJ("click", function() {
                                s.CHM(y);
                                const lt = s.MAs(21);
                                return s.KtG(O.openCrashOptions(lt))
                            }), s._UZ(22, "span", 13), s.qZA()(), s.TgZ(23, "div", 14)(24, "div", 15), s.YNc(25, Tt, 3, 10, "span", 16), s.ALo(26, "ngrxPush"), s.qZA(), s._UZ(27, "div", 17), s.TgZ(28, "button", 18, 19), s.NdJ("click", function() {
                                s.CHM(y);
                                const lt = s.MAs(29);
                                return s.KtG(O.togglePortableInventory(lt))
                            }), s._UZ(30, "span", 20), s.qZA()()()()()
                        }
                        2 & _ && (s.xp6(1), s.Q6J("loading", s.lcZ(2, 23, O.loading$))("disabled", s.lcZ(3, 25, O.isSubmitDisabled$))("canCashOut", s.lcZ(4, 27, O.canCashout$))("currency", s.lcZ(5, 29, O.currency$))("multiplier", O.form.controls.multiplier.valid && O.form.controls.multiplier.value)("totalBetAmount", s.lcZ(6, 31, O.totalBetAmount$))("status", s.lcZ(7, 33, O.gameStatus$)), s.xp6(8), s.Q6J("ngrxLet", O.objective$), s.xp6(2), s.Q6J("formGroup", O.form), s.xp6(1), s.ekj("text-danger", O.form.controls.amount.invalid), s.xp6(2), s.Q6J("ctrl", O.form.controls.amount)("smallButtons", !0)("options", s.DdM(37, f))("hideWhenLTLG", !1)("label", !1)("addAndSubtractButton", !1)("clearButton", !1)("maxButton", !1)("lastButton", !1)("doubleAndHalfButton", !1)("showErrors", !1), s.xp6(11), s.Q6J("ngForOf", s.lcZ(26, 35, O.mostValuableUserItems$)))
                    },
                    dependencies: [ut.mk, ut.sg, ut.O5, U._Y, U.JL, U.sg, ot.oO, x.d$, h.gM, c.eJ, r.q, mt.l, m.f, c.fM],
                    styles: ["[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]     .mat-form-field-wrapper{padding-bottom:0;margin:0!important}[_nghost-%COMP%]     .multiplier-input cw-amount-input input{color:#ffe063}.cw-icon[_ngcontent-%COMP%]{color:inherit}.amount[_ngcontent-%COMP%]{margin-bottom:-1.5rem!important}.items-input[_ngcontent-%COMP%], .amount-form[_ngcontent-%COMP%], .multiplier-input[_ngcontent-%COMP%]{width:14rem}@media (max-width: 767.98px){.items-input[_ngcontent-%COMP%], .amount-form[_ngcontent-%COMP%], .multiplier-input[_ngcontent-%COMP%]{width:100%}}.selected-icon[_ngcontent-%COMP%], .empty-icon[_ngcontent-%COMP%]{width:4.5rem;height:4.5rem;border-radius:8px}img[_ngcontent-%COMP%]{width:80%;position:absolute;inset:0;margin:auto}.empty-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid rgba(255,255,255,.1);color:#ffffff1a}.empty-icon[_ngcontent-%COMP%]   cw-pretty-balance[_ngcontent-%COMP%]{color:#ffe063}.objective-icon[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;width:1.25rem;left:.25rem}.inventory-trigger[_ngcontent-%COMP%]{cursor:pointer}.inventory-trigger[_ngcontent-%COMP%]:hover{filter:brightness(1.25)}.selected-items-container[_ngcontent-%COMP%]{border-radius:6px;background-color:var(--form-field-bg);padding:.25rem .25rem 0;width:100%}.selected-items-container[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;width:2.5rem;height:2.5rem;margin-right:.25rem;border-radius:4px;background-color:var(--crash-button-bg);line-height:2rem;position:relative}.selected-items-container[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]:hover{filter:brightness(1.5)}.selected-items-container[_ngcontent-%COMP%]   .item-icon.selected[_ngcontent-%COMP%]{background-color:#00c74d4d}.selected-items-container[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%]{width:.375rem;height:.375rem;position:absolute;top:.25rem;right:.25rem}.selected-items-container[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:middle;width:100%;padding:.25rem}.selected-items-container[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{width:1px;margin:0 .5rem;height:2.5rem;background-color:var(--crash-button-bg)}.selected-items-container[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{background-color:var(--crash-button-bg);border-radius:6px}.observing-label[_ngcontent-%COMP%]{position:absolute;top:-1.7rem;right:0;left:0;width:12rem;color:#fff;padding:.5rem;font-weight:700;font-size:.75rem;margin:auto;background-color:rgba(var(--form-field-bg),.2);border-radius:4px}.observing-label[_ngcontent-%COMP%]   .cw-icon[_ngcontent-%COMP%]{margin-right:.2rem}"],
                    changeDetection: 0
                }), d
            })()
        },
        90505: (_t, K, t) => {
            t.d(K, {
                M: () => nt
            });
            var e = t(39401),
                u = t(97144),
                A = t(94813),
                D = t(56592),
                p = t(93678);
            const w = D.Ps`
  fragment CrashGameDetails on CrashGame {
    id
    scheduledAt
    status
    roll
    seed
    bets {
      edges {
        node {
          ...CrashBet
        }
      }
    }
  }

  ${p.q}
`,
                $ = D.Ps`
  query CrashGameSummary($previousId: ID!, $id: ID!, $nextId: ID!) {
    previousCrashGame: crashGame(id: $previousId) {
      id
      seed
      roll
    }
    crashGame(id: $id) {
      ...CrashGameDetails
    }
    nextCrashGame: crashGame(id: $nextId) {
      id
      seed
      roll
    }
  }

  ${w}
`;
            var i = t(22223),
                B = t(69144),
                S = t(65412),
                E = t(44755),
                C = t(49085),
                n = t(4859),
                Z = t(59549),
                o = t(284),
                s = t(96298),
                a = t(31495),
                F = t(81544),
                Q = t(79586),
                et = t(12551),
                j = t(16622);

            function Y(G, z) {
                if (1 & G) {
                    const M = i.EpF();
                    i.TgZ(0, "tr", 42)(1, "td", 38)(2, "button", 43), i.NdJ("click", function() {
                        i.CHM(M);
                        const v = i.oxw(4);
                        return i.KtG(v.next())
                    }), i._uU(3), i.qZA()(), i.TgZ(4, "td", 40), i._uU(5), i.qZA(), i.TgZ(6, "td", 41), i._uU(7), i.ALo(8, "number"), i.qZA()()
                }
                if (2 & G) {
                    const M = i.oxw(3).ngIf,
                        I = i.oxw();
                    i.xp6(2), i.Q6J("disabled", !M.nextCrashGame.roll), i.xp6(1), i.hij(" ", I.getGameNumber(M.nextCrashGame.id), " "), i.xp6(2), i.Oqu(M.nextCrashGame.seed || "Seed revealed when game finishes"), i.xp6(2), i.hij("", i.xi3(8, 4, M.nextCrashGame.roll / 100, "1.2-2"), "x")
                }
            }

            function at(G, z) {
                if (1 & G) {
                    const M = i.EpF();
                    i.TgZ(0, "tr", 42)(1, "td", 38)(2, "button", 44), i.NdJ("click", function() {
                        i.CHM(M);
                        const v = i.oxw(4);
                        return i.KtG(v.previous())
                    }), i._uU(3), i.qZA()(), i.TgZ(4, "td", 40), i._uU(5), i.qZA(), i.TgZ(6, "td", 41), i._uU(7), i.ALo(8, "number"), i.qZA()()
                }
                if (2 & G) {
                    const M = i.oxw(3).ngIf,
                        I = i.oxw();
                    i.xp6(3), i.hij(" ", I.getGameNumber(M.previousCrashGame.id), " "), i.xp6(2), i.Oqu(M.previousCrashGame.seed), i.xp6(2), i.hij("", i.xi3(8, 3, M.previousCrashGame.roll / 100, "1.2-2"), "x")
                }
            }
            const mt = function() {
                return ["/info/provably-fair"]
            };

            function T(G, z) {
                if (1 & G) {
                    const M = i.EpF();
                    i.ynx(0), i.TgZ(1, "div", 21)(2, "h6"), i.SDv(3, 30), i.qZA(), i._uU(4), i.ALo(5, "number"), i.ALo(6, "date"), i.qZA(), i._UZ(7, "hr", 19), i.TgZ(8, "h5"), i.SDv(9, 31), i.qZA(), i.TgZ(10, "p", 32), i._uU(11, " All hashes are pre-generated and fed into one another through SHA256. Running a game hash through any "), i.TgZ(12, "a", 33), i._uU(13, "online SHA256 encoder"), i.qZA(), i._uU(14, " will equal the previous game hash. For more information visit our "), i.TgZ(15, "a", 34), i.NdJ("click", function() {
                        i.CHM(M);
                        const v = i.oxw(3);
                        return i.KtG(v.dialogRef.close())
                    }), i._uU(16, "Provably Fair"), i.qZA(), i._uU(17, " page "), i.qZA(), i.TgZ(18, "table", 2)(19, "thead")(20, "tr")(21, "th"), i.SDv(22, 35), i.qZA(), i.TgZ(23, "th"), i.SDv(24, 36), i.qZA(), i.TgZ(25, "th"), i.SDv(26, 37), i.qZA()()(), i.TgZ(27, "tbody"), i.YNc(28, Y, 9, 7, "tr", 29), i.TgZ(29, "tr")(30, "td", 38), i.SDv(31, 39), i.qZA(), i.TgZ(32, "td", 40), i._uU(33), i.qZA(), i.TgZ(34, "td", 41), i._uU(35), i.ALo(36, "number"), i.qZA()(), i.YNc(37, at, 9, 6, "tr", 29), i.qZA()(), i.BQk()
                }
                if (2 & G) {
                    const M = i.oxw(2).ngIf,
                        I = i.oxw();
                    i.xp6(4), i.AsE(" ", i.xi3(5, 8, M.crashGame.roll / 100, "1.2-2"), "x @ ", i.xi3(6, 11, M.crashGame.scheduledAt, "medium"), " "), i.xp6(11), i.Q6J("routerLink", i.DdM(17, mt)), i.xp6(13), i.Q6J("ngIf", M.nextCrashGame), i.xp6(3), i.pQV(I.getGameNumber(M.crashGame.id)), i.QtT(31), i.xp6(2), i.Oqu(M.crashGame.seed), i.xp6(2), i.hij("", i.xi3(36, 14, M.crashGame.roll / 100, "1.2-2"), "x"), i.xp6(2), i.Q6J("ngIf", M.previousCrashGame)
                }
            }

            function it(G, z) {
                1 & G && (i.ynx(0), i.TgZ(1, "p", 42), i.SDv(2, 45), i.qZA(), i.BQk())
            }

            function q(G, z) {
                if (1 & G && i._UZ(0, "cw-crash-bet", 46), 2 & G) {
                    const M = z.$implicit,
                        I = i.oxw(2).ngIf;
                    i.Q6J("gameStatus", I.crashGame.status)("crashBet", M.node)
                }
            }

            function tt(G, z) {
                1 & G && (i.TgZ(0, "div", 42), i.SDv(1, 47), i.qZA())
            }

            function R(G, z) {
                if (1 & G) {
                    const M = i.EpF();
                    i.TgZ(0, "div")(1, "section", 13)(2, "button", 14), i.NdJ("click", function() {
                        i.CHM(M);
                        const v = i.oxw(2);
                        return i.KtG(v.next())
                    }), i.tHW(3, 15), i._UZ(4, "cw-icon", 16), i.N_p(), i.qZA(), i.TgZ(5, "button", 14), i.NdJ("click", function() {
                        i.CHM(M);
                        const v = i.oxw(2);
                        return i.KtG(v.previous())
                    }), i.tHW(6, 17), i._UZ(7, "cw-icon", 18), i.N_p(), i.qZA()(), i._UZ(8, "hr", 19), i.TgZ(9, "section", 20)(10, "div", 21)(11, "h6"), i.SDv(12, 22), i.qZA(), i._uU(13), i.qZA(), i.ynx(14, 23), i.YNc(15, T, 38, 18, "ng-container", 24), i.YNc(16, it, 3, 0, "ng-container", 25), i.BQk(), i.qZA(), i._UZ(17, "hr", 19), i.TgZ(18, "h5"), i.SDv(19, 26), i.qZA(), i.TgZ(20, "div", 27), i.YNc(21, q, 1, 2, "cw-crash-bet", 28), i.YNc(22, tt, 2, 0, "div", 29), i.qZA()()
                }
                if (2 & G) {
                    const M = i.oxw().ngIf,
                        I = i.oxw();
                    i.xp6(2), i.Q6J("disabled", !M.nextCrashGame || "FINISHED" !== M.crashGame.status), i.xp6(3), i.Q6J("disabled", 1 === I.id), i.xp6(8), i.AsE(" ", I.gameId, " (number ", I.getGameNumber(M.crashGame.id), ") "), i.xp6(1), i.Q6J("ngSwitch", M.crashGame.status), i.xp6(1), i.Q6J("ngSwitchCase", "FINISHED"), i.xp6(6), i.Q6J("ngForOf", M.crashGame.bets.edges), i.xp6(1), i.Q6J("ngIf", !M.crashGame.bets.edges.length)
                }
            }

            function V(G, z) {
                1 & G && (i.TgZ(0, "div"), i._uU(1, "There is no game with this ID in our system."), i.qZA())
            }

            function N(G, z) {
                if (1 & G && (i.ynx(0), i.YNc(1, R, 23, 8, "div", 12), i.YNc(2, V, 2, 0, "div", 12), i.BQk()), 2 & G) {
                    const M = z.ngIf;
                    i.xp6(1), i.Q6J("ngIf", M.crashGame), i.xp6(1), i.Q6J("ngIf", !M.crashGame)
                }
            }

            function st(G, z) {
                1 & G && i._UZ(0, "cw-loader", 48), 2 & G && i.Q6J("loading", !0)("type", "view")
            }
            const H = "CrashGame";
            let nt = (() => {
                class G {
                    set gameId(M) {
                        M ? (M = "string" == typeof M ? M : (0, u.AW)(+M, H), this._gameId = M) : this.dialogRef.close()
                    }
                    get gameId() {
                        return this._gameId
                    }
                    get id() {
                        return +atob(this.gameId).split(":")[1]
                    }
                    constructor(M, I) {
                        this.apollo = M, this.dialogRef = I, this.ctrl = new e.p4
                    }
                    ngOnInit() {
                        const M = this.getVariables();
                        this.queryRef = this.apollo.watchQuery({
                            query: $,
                            variables: M,
                            fetchPolicy: "cache-and-network"
                        }), this.data$ = this.queryRef.valueChanges.pipe((0, A.j)("data"))
                    }
                    ngOnDestroy() {
                        this.data$ = null
                    }
                    find() {
                        if (!this.ctrl.value) return;
                        const M = +this.ctrl.value ? (0, u.AW)(this.ctrl.value, H) : this.ctrl.value;
                        this.refetch(M)
                    }
                    previous() {
                        this.refetch((0, u.Q7)(this.gameId, H))
                    }
                    next() {
                        this.refetch((0, u.YN)(this.gameId, H))
                    }
                    getGameNumber(M) {
                        return (0, u.Qz)(M)
                    }
                    getVariables() {
                        return {
                            id: this.gameId,
                            previousId: (0, u.Q7)(this.gameId, H),
                            nextId: (0, u.YN)(this.gameId, H)
                        }
                    }
                    refetch(M) {
                        M && (this.gameId = M, this.queryRef.setVariables(this.getVariables()), this.queryRef.refetch())
                    }
                }
                return G.\u0275fac = function(M) {
                    return new(M || G)(i.Y36(B._M), i.Y36(S.so))
                }, G.\u0275cmp = i.Xpm({
                    type: G,
                    selectors: [
                        ["cw-crash-game-modal"]
                    ],
                    inputs: {
                        gameId: "gameId"
                    },
                    decls: 15,
                    vars: 5,
                    consts: function() {
                        let z, M, I, v, b, U, ht, dt, pt, ut, ot, x, h, c, r;
                        return z = $localize`:␟6498086affa9771c408515b774533215962254db␟7790661815484685146:Game information`, M = $localize`:␟67507e3470c375ff7e266557ffe8de4e8d0d36da␟1996778472776563388:Find game by ID ${"\ufffd#6\ufffd"}:START_TAG_CW_ICON:${"\ufffd/#6\ufffd"}:CLOSE_TAG_CW_ICON:`, I = $localize`:␟4f3d848c4237324e3aeb49dfe5eb3567b3829bcd␟1195280733202193781:FIND`, v = $localize`:␟ba9c9a3174aaaccf0a62fe8f7bb0914801d3ef3d␟1015188645761913700:${"\ufffd#4\ufffd"}:START_TAG_CW_ICON:${"\ufffd/#4\ufffd"}:CLOSE_TAG_CW_ICON: Next game `, b = $localize`:␟6dcbca35ba5840c105b0e942cc9ab37611ae31da␟154842268477848182: Previous game ${"\ufffd#7\ufffd"}:START_TAG_CW_ICON:${"\ufffd/#7\ufffd"}:CLOSE_TAG_CW_ICON:`, U = $localize`:␟c5f8766dd4e5fc7b90c776be8bd08f70db30de85␟2729314918455412771:Game ID:`, ht = $localize`:␟41adabbb19eff37580a8d90131baace8dc09274e␟610651800997652993:Bets`, dt = $localize`:␟868103577fba04a9002b5f31be74779f806dd13c␟833440453918337050:Crashed:`, pt = $localize`:␟a90b89a42fedf37f170c2fc72f5379616e6bf5f2␟3617959979821832:Seed Chain`, ut = $localize`:␟0e6a93b6d39a899de3abb0cb10c51f19057fa547␟4643591148728960560:Game`, ot = $localize`:␟a6c09c3b932b35a552020c24b37d5f517e2d4c3b␟1819215007804875232:Seed`, x = $localize`:␟2b43549b813b90101f4e1c364880352a2743d10d␟2734213108907937736:Roll`, h = $localize`:␟d5e1d51b707c9e95090884a792e909671a1a6798␟4883537492597731573:${"\ufffd0\ufffd"}:INTERPOLATION:`, c = $localize`:␟6a1035c7e961bd4cee04631c33921bcb81adcf86␟8047705234321520096:Game has not yet finished. The crash and seed will be revealed later.`, r = $localize`:␟c0a0954ff90f71227db0872e7b0633720bbff963␟7360784442352972151:There were no bets made during this round...`, [
                            ["mat-dialog-title", ""], z, [1, "w-100"],
                            [1, "bet-amount"], M, ["inlineSVG", "assets/icons/search.svg"],
                            ["matInput", "", "type", "text", "autoComplete", "off", 3, "formControl"],
                            [1, "form-field-buttons"],
                            ["type", "button", "mat-flat-button", "", "color", "dark", 3, "click"], I, [4, "ngIf", "ngIfElse"],
                            ["loadingTpl", ""],
                            [4, "ngIf"],
                            [1, "d-flex", "justify-content-between", "align-items-center"],
                            ["type", "button", "mat-flat-button", "", "color", "primary", 3, "disabled", "click"], v, ["inlineSVG", "assets/icons/chevron-left.svg"], b, ["inlineSVG", "assets/icons/chevron-right.svg"],
                            [1, "my-4"],
                            [1, "info"],
                            [1, "mb-3"], U, [3, "ngSwitch"],
                            [4, "ngSwitchCase"],
                            [4, "ngSwitchDefault"], ht, [1, "bets"],
                            [3, "gameStatus", "crashBet", 4, "ngFor", "ngForOf"],
                            ["class", "text-muted", 4, "ngIf"], dt, pt, [1, "small"],
                            ["cwExternalLink", "https://xorbin.com/tools/sha256-hash-calculator"],
                            [3, "routerLink", "click"], ut, ot, x, [1, "text-center"], h, [1, "seed"],
                            [1, "roll"],
                            [1, "text-muted"],
                            ["mat-flat-button", "", "color", "primary", 1, "w-100", 3, "disabled", "click"],
                            ["mat-flat-button", "", "color", "primary", 1, "w-100", 3, "click"], c, [3, "gameStatus", "crashBet"], r, [1, "m-6", 3, "loading", "type"]
                        ]
                    },
                    template: function(M, I) {
                        if (1 & M && (i.TgZ(0, "h4", 0), i.SDv(1, 1), i.qZA(), i.TgZ(2, "mat-dialog-content")(3, "mat-form-field", 2)(4, "mat-label", 3), i.tHW(5, 4), i._UZ(6, "cw-icon", 5), i.N_p(), i.qZA(), i._UZ(7, "input", 6), i.TgZ(8, "div", 7)(9, "button", 8), i.NdJ("click", function() {
                                return I.find()
                            }), i.SDv(10, 9), i.qZA()()(), i.YNc(11, N, 3, 2, "ng-container", 10), i.ALo(12, "ngrxPush"), i.YNc(13, st, 1, 2, "ng-template", null, 11, i.W1O), i.qZA()), 2 & M) {
                            const v = i.MAs(14);
                            i.xp6(7), i.Q6J("formControl", I.ctrl), i.xp6(4), i.Q6J("ngIf", i.lcZ(12, 3, I.data$))("ngIfElse", v)
                        }
                    },
                    dependencies: [E.sg, E.O5, E.RF, E.n9, E.ED, C.rH, e.Fj, e.JJ, e.oH, n.lW, Z.KE, Z.hX, o.Nt, S.uh, S.xY, s.d$, a.o, F.V, Q.R, et.a, E.JJ, E.uU, j.fM],
                    styles: [".seed[_ngcontent-%COMP%]{font-size:1.1rem;font-family:monospace;letter-spacing:.5px;word-break:break-all}.roll[_ngcontent-%COMP%]{white-space:nowrap}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-top:0}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}"],
                    changeDetection: 0
                }), G
            })()
        },
        42722: (_t, K, t) => {
            t.d(K, {
                W: () => i
            });
            var e = t(91591),
                u = t(90505),
                A = t(22223),
                D = t(65412),
                p = t(44755),
                w = t(5068);

            function $(B, S) {
                if (1 & B) {
                    const E = A.EpF();
                    A.TgZ(0, "div", 2), A.NdJ("click", function() {
                        const Z = A.CHM(E).$implicit,
                            o = A.oxw();
                        return A.KtG(o.openGameModal(Z))
                    }), A.TgZ(1, "span"), A._uU(2), A.ALo(3, "number"), A.qZA()()
                }
                if (2 & B) {
                    const E = S.$implicit;
                    A.ekj("low", E.roll < 200)("med", E.roll >= 200 && E.roll < 300)("high", E.roll >= 300), A.xp6(2), A.Oqu(A.xi3(3, 7, E.roll / 100, "1.2-2"))
                }
            }
            let i = (() => {
                class B {
                    set games(E) {
                        E && (this._games = E.slice(0, 10))
                    }
                    get games() {
                        return this._games
                    }
                    constructor(E) {
                        this.dialog = E, this._games = []
                    }
                    openGameModal(E) {
                        this.dialog.open(u.M, {
                            width: "800px"
                        }).componentInstance.gameId = E.id
                    }
                }
                return B.\u0275fac = function(E) {
                    return new(E || B)(A.Y36(D.uw))
                }, B.\u0275cmp = A.Xpm({
                    type: B,
                    selectors: [
                        ["cw-crash-games"]
                    ],
                    inputs: {
                        games: "games"
                    },
                    decls: 2,
                    vars: 1,
                    consts: [
                        [1, "no-scrollbar", "mw-100", "overflow-auto", "mx-auto", "py-1", "gap-025", "d-flex", "flex-wrap", "justify-content-center"],
                        ["class", "game", "data-test", "games-history", 3, "low", "med", "high", "click", 4, "ngFor", "ngForTrackById", "ngForOf"],
                        ["data-test", "games-history", 1, "game", 3, "click"]
                    ],
                    template: function(E, C) {
                        1 & E && (A.TgZ(0, "div", 0), A.YNc(1, $, 4, 10, "div", 1), A.qZA()), 2 & E && (A.xp6(1), A.Q6J("ngForOf", C.games))
                    },
                    dependencies: [p.sg, w.w, p.JJ],
                    styles: [".game[_ngcontent-%COMP%]{min-width:3.2rem;padding:.3rem .5rem;border-radius:.5rem;background-color:var(--card-bg);text-align:center;font-size:85%;font-weight:500;cursor:pointer;transition:transform .1s}.game[_ngcontent-%COMP%]:hover{transform:translateY(-2px);filter:brightness(1.15)}.game.med[_ngcontent-%COMP%]{background-color:var(--game-med-bg);border-color:var(--game-med);color:var(--game-med)}.game.high[_ngcontent-%COMP%]{background-color:var(--game-high-bg);border-color:var(--game-high);color:var(--game-high)}"],
                    data: {
                        animation: [(0, e.X$)("appear", [(0, e.eR)(":leave", [(0, e.jt)("300ms ease-out", (0, e.oB)({
                            marginRight: "-2.25rem"
                        }))])])]
                    },
                    changeDetection: 0
                }), B
            })()
        },
        45575: (_t, K, t) => {
            t.d(K, {
                o: () => i
            });
            var e = t(54004),
                u = t(71884),
                A = t(43475),
                D = t(22223),
                p = t(44755),
                w = t(16622);

            function $(B, S) {
                if (1 & B && (D.TgZ(0, "div", 1), D._uU(1), D.ALo(2, "number"), D.qZA()), 2 & B) {
                    const E = S.ngIf;
                    D.xp6(1), D.hij("x", D.xi3(2, 1, E, "1.2-2"), "")
                }
            }
            let i = (() => {
                class B {
                    constructor(E) {
                        this.crashService = E, this.multiplier$ = this.crashService.multiplier$, this.isMed$ = this.multiplier$.pipe((0, e.U)(C => C >= 2 && C < 3), (0, u.x)()), this.isHigh$ = this.multiplier$.pipe((0, e.U)(C => C >= 3), (0, u.x)()), this.crashed$ = this.crashService.game$.pipe((0, e.U)(C => "FINISHED" === C.status), (0, u.x)())
                    }
                }
                return B.\u0275fac = function(E) {
                    return new(E || B)(D.Y36(A.e))
                }, B.\u0275cmp = D.Xpm({
                    type: B,
                    selectors: [
                        ["cw-crash-multiplier"]
                    ],
                    hostVars: 3,
                    hostBindings: function(E, C) {
                        1 & E && D.NdJ("$.class.med", function() {
                            return C.isMed$()
                        })("$.class.high", function() {
                            return C.isHigh$()
                        })("$.class.crashed", function() {
                            return C.crashed$()
                        }), 2 & E && D.Ikx("$.class.med", C.isMed$)("$.class.high", C.isHigh$)("$.class.crashed", C.crashed$)
                    },
                    decls: 2,
                    vars: 3,
                    consts: [
                        ["class", "score", 4, "ngIf"],
                        [1, "score"]
                    ],
                    template: function(E, C) {
                        1 & E && (D.YNc(0, $, 3, 4, "div", 0), D.ALo(1, "ngrxPush")), 2 & E && D.Q6J("ngIf", D.lcZ(1, 1, C.multiplier$))
                    },
                    dependencies: [p.O5, p.JJ, w.fM],
                    styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%}.med[_nghost-%COMP%]   .score[_ngcontent-%COMP%]{color:var(--game-med)}.high[_nghost-%COMP%]   .score[_ngcontent-%COMP%]{color:var(--game-high)}.crashed[_nghost-%COMP%]{transform:scale3d(1.2,1.2,1.2);color:var(--danger)}.score[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:var(--crash-game-score-font-size);font-family:var(--crash-game-status-font-family);transition:color .5s,transform .15s}"],
                    changeDetection: 0
                }), B
            })()
        },
        25888: (_t, K, t) => {
            t.d(K, {
                l: () => S
            });
            var e = t(75855),
                u = t(28898),
                A = t(35684),
                D = t(95698),
                p = t(54004),
                w = t(22223),
                $ = t(65412),
                i = t(61283),
                B = t(16622);
            let S = (() => {
                class E {
                    constructor(n) {
                        this.dialogRef = n, this.selectedCollection = new u.V, this.selectedCollection.items$.pipe((0, A.T)(1), (0, D.q)(1), (0, p.U)(Z => Z[0]), (0, e.sL)()).subscribe(Z => this.dialogRef.close(Z))
                    }
                }
                return E.\u0275fac = function(n) {
                    return new(n || E)(w.Y36($.so))
                }, E.\u0275cmp = w.Xpm({
                    type: E,
                    selectors: [
                        ["cw-crash-objective-modal"]
                    ],
                    inputs: {
                        objective: "objective"
                    },
                    decls: 5,
                    vars: 7,
                    consts: function() {
                        let C;
                        return C = $localize`:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`, [
                            ["mat-dialog-title", ""], C, [3, "showStockDetails", "banned", "minValue", "selectedCollection", "distinctValues"]
                        ]
                    },
                    template: function(n, Z) {
                        1 & n && (w.TgZ(0, "h4", 0), w.SDv(1, 1), w.qZA(), w.TgZ(2, "mat-dialog-content"), w._UZ(3, "cw-item-variant-search-grid", 2), w.ALo(4, "ngrxPush"), w.qZA()), 2 & n && (w.xp6(3), w.Q6J("showStockDetails", !1)("banned", !1)("minValue", w.lcZ(4, 5, Z.minValue$))("selectedCollection", Z.selectedCollection)("distinctValues", !0))
                    },
                    dependencies: [$.uh, $.xY, i.F, B.fM],
                    styles: ["[_nghost-%COMP%]   cw-item-variant-search-grid[_ngcontent-%COMP%]{min-height:30rem}[_nghost-%COMP%]   cw-item-variant-search-grid[_ngcontent-%COMP%]     .scroll-grid-container{min-height:unset}"],
                    changeDetection: 0
                }), E
            })()
        },
        56423: (_t, K, t) => {
            t.d(K, {
                o: () => B
            });
            var e = t(29218),
                u = t(37365),
                A = t(50727),
                D = t(43475),
                p = t(22223),
                w = t(5668),
                $ = t(90455),
                i = t(16622);
            let B = (() => {
                class S {
                    set overlayRef(C) {
                        this._overlayRef = C, this.subscription = this._overlayRef.backdropClick().subscribe(() => this.close())
                    }
                    get overlayRef() {
                        return this._overlayRef
                    }
                    constructor(C, n) {
                        this.crashService = C, this.platform = n, this.CrashBetMode = u.CBC, this.crashBetMode$ = this.crashService.crashBetMode$, this.animationsEnabled$ = this.crashService.animationsEnabled$, this.subscription = new A.w0
                    }
                    toggleReward(C) {
                        const n = C.checked ? u.CBC.ITEMS_AND_COINS : u.CBC.COINS_ONLY;
                        this.crashService.crashBetMode$.next(n), this.platform.localStorage.set(e.F.CRASH_REWARD_TYPE, n)
                    }
                    toggleAnimations(C) {
                        this.crashService.animationsEnabled$.next(C.checked), this.platform.localStorage.set(e.F.CRASH_ANIMATIONS, C.checked.toString())
                    }
                    close() {
                        this.subscription.unsubscribe(), this.overlayRef.dispose()
                    }
                }
                return S.\u0275fac = function(C) {
                    return new(C || S)(p.Y36(D.e), p.Y36(w.m))
                }, S.\u0275cmp = p.Xpm({
                    type: S,
                    selectors: [
                        ["cw-crash-options"]
                    ],
                    decls: 11,
                    vars: 9,
                    consts: [
                        [1, "mt-0", "mb-3", "text-center", "text-uppercase"],
                        [1, "toggle-container", "always-active"],
                        ["labelPosition", "before", 3, "checked", "change"],
                        [1, "toggle-container"]
                    ],
                    template: function(C, n) {
                        1 & C && (p.TgZ(0, "h6", 0), p._uU(1, "Crash Settings"), p.qZA(), p.TgZ(2, "div", 1)(3, "mat-slide-toggle", 2), p.NdJ("change", function(o) {
                            return n.toggleReward(o)
                        }), p.ALo(4, "ngrxPush"), p._uU(5), p.ALo(6, "ngrxPush"), p.qZA()(), p.TgZ(7, "div", 3)(8, "mat-slide-toggle", 2), p.NdJ("change", function(o) {
                            return n.toggleAnimations(o)
                        }), p.ALo(9, "ngrxPush"), p._uU(10, " Animations "), p.qZA()()), 2 & C && (p.xp6(3), p.Q6J("checked", p.lcZ(4, 3, n.crashBetMode$) === n.CrashBetMode.ITEMS_AND_COINS), p.xp6(2), p.hij(" ", p.lcZ(6, 5, n.crashBetMode$) === n.CrashBetMode.ITEMS_AND_COINS ? "Item Reward" : "Coins Reward", " "), p.xp6(3), p.Q6J("checked", p.lcZ(9, 7, n.animationsEnabled$)))
                    },
                    dependencies: [$.Rr, i.fM],
                    styles: ["[_nghost-%COMP%]{margin-top:.5rem;background-color:var(--portable-inventory-bg);border-radius:.3rem;display:flex;flex-direction:column;color:var(--portable-inventory-color);font-size:.875rem;position:relative;padding:1rem;width:10rem}.toggle-container[_ngcontent-%COMP%]{margin-bottom:1rem}.toggle-container.always-active[_ngcontent-%COMP%]     .mat-slide-toggle-bar{background-color:#009439}.toggle-container.always-active[_ngcontent-%COMP%]     .mat-slide-toggle-thumb{background-color:#00c74d!important}.toggle-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{display:block;font-size:.75rem}.toggle-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content{opacity:.65}.toggle-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-label{justify-content:space-between}"],
                    changeDetection: 0
                }), S
            })()
        },
        41974: (_t, K, t) => {
            t.d(K, {
                b: () => u,
                p: () => A
            });
            var e = t(56592);
            const u = e.Ps`
  fragment PotentialItemVariant on ItemVariant {
    brand
    color
    iconUrl
    id
    name
    rarity
    size
    value
  }
`,
                A = e.Ps`
  query PotentialWins($first: PaginationAmount, $marketId: ID!, $minValue: Float!, $currentValue: Float) {
    crashBetItemVariants(first: $first, marketId: $marketId, minValue: $minValue, currentValue: $currentValue) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...PotentialItemVariant
        }
      }
    }
  }

  ${u}
`
        },
        9070: (_t, K, t) => {
            t.d(K, {
                B: () => M
            });
            var e = t(70655),
                u = t(97144),
                A = t(57854),
                D = t(37365),
                p = t(49933),
                w = t(69144),
                $ = t(61135),
                i = t(77579),
                B = t(71884),
                S = t(63900),
                E = t(39300),
                C = t(18505),
                n = t(54004),
                Z = t(36129),
                o = t(49770),
                s = t(39841),
                a = t(41974),
                F = t(39646),
                Q = t(60515),
                et = t(46590),
                j = t(4128),
                Y = t(69751);
            let at = (() => {
                class I {
                    static preloadImages(b) {
                        return b.length ? (0, F.of)([]) : Q.E.pipe((0, et.d)(void 0), (0, C.b)(() => {
                            I.imagesPlaceholder = []
                        }), (0, S.w)(() => (0, j.D)(b.map(I.preloadImage)).pipe((0, C.b)(U => {
                            I.imagesPlaceholder = U
                        }))))
                    }
                }
                return I.imagesPlaceholder = [], I.preloadImage = v => new Y.y(b => {
                    const U = new Image;
                    U.onload = function() {
                        b.next(U), b.complete()
                    }, U.src = v
                }), I
            })();
            var mt = t(43475),
                T = t(22223),
                it = t(44755),
                q = t(55829),
                tt = t(16622),
                R = t(89847);

            function V(I, v) {
                if (1 & I && T._UZ(0, "cw-pretty-balance", 4), 2 & I) {
                    const b = T.oxw().$implicit;
                    T.Q6J("currencyDigitsInfo", "1.2-2")("balance", b.totalBet)("currency", b.currency)
                }
            }
            const N = function(I) {
                return [I]
            };

            function st(I, v) {
                if (1 & I && (T.ynx(0), T.TgZ(1, "div", 5), T._uU(2), T.qZA(), T.TgZ(3, "div", 6), T._UZ(4, "span", 7), T.TgZ(5, "span"), T._uU(6), T.qZA()(), T.BQk()), 2 & I) {
                    const b = v.ngIf,
                        U = T.oxw(2);
                    T.xp6(2), T.Oqu(b.color || b.size), T.xp6(2), T.Q6J("ngClass", T.VKq(3, N, "bg-" + b.rarity)), T.xp6(2), T.Oqu(U.getName(b))
                }
            }
            const H = function(I) {
                return {
                    "text-success": I
                }
            };

            function nt(I, v) {
                if (1 & I && (T.ynx(0), T._UZ(1, "cw-pretty-balance", 8), T.ALo(2, "ngrxPush"), T.BQk()), 2 & I) {
                    const b = T.oxw().$implicit,
                        U = T.oxw();
                    T.xp6(1), T.Q6J("currencyDigitsInfo", "1.2-2")("ngClass", T.VKq(6, H, b.totalWinAmount))("balance", T.lcZ(2, 4, U.totalCoinWin$))("currency", b.currency)
                }
            }

            function G(I, v) {
                if (1 & I && (T.ynx(0), T.YNc(1, V, 1, 3, "cw-pretty-balance", 2), T.YNc(2, st, 7, 5, "ng-container", 3), T.ALo(3, "ngrxPush"), T.ALo(4, "ngrxPush"), T.YNc(5, nt, 3, 8, "ng-container", 3), T.ALo(6, "ngrxPush"), T.BQk()), 2 & I) {
                    const b = v.$implicit,
                        U = T.oxw();
                    T.xp6(1), T.Q6J("ngIf", "CREATED" === U.game.status && b), T.xp6(1), T.Q6J("ngIf", !0 === T.lcZ(3, 3, U.itemGameStarted$) && T.lcZ(4, 5, U.potential$)[0]), T.xp6(3), T.Q6J("ngIf", !0 === T.lcZ(6, 7, U.inCoinGame$))
                }
            }
            let M = class {
                set crashBet(v) {
                    this.crashBet$.next(v), this.insertObjectiveItem(v?.desiredItemVariant)
                }
                get multiplier() {
                    return this._multiplier
                }
                get currentValue() {
                    return this.crashBet$.getValue() ? this.crashBet$.getValue().totalBet * this.multiplier : this.crashService.fakeBetAmount * this.multiplier
                }
                constructor(v, b, U) {
                    this.crashService = v, this.apollo = b, this.userService = U, this.pageInfo = this.getEmptyPageInfo(), this.preloads$ = new $.X([]), this.crashBet$ = new $.X(null), this._multiplier = 1, this.fetchMore$ = new i.x, this.preloadCount = 80, this.fetchMoreWhenLeft = 30, this.forwardPreloads = 2, this.potential$ = this.crashService.potential$
                }
                ngOnInit() {
                    this.crashBet$.pipe((0, B.x)(), (0, S.w)(() => this.userService.market$), (0, E.h)(u.$K), (0, S.w)(v => (this.queryRef = this.apollo.watchQuery({
                        query: a.p,
                        variables: {
                            first: this.preloadCount,
                            minValue: this.crashBet$.getValue()?.totalBet || this.crashService.fakeBetAmount,
                            marketId: v.id
                        }
                    }), this.queryRef.valueChanges)), (0, p.t)(this)).subscribe(({
                        data: v
                    }) => {
                        v && (this.variants = v.crashBetItemVariants.edges.map(b => b.node), this.pageInfo = v.crashBetItemVariants.pageInfo, this.insertObjectiveItem(this.crashBet?.desiredItemVariant), this.calculate())
                    }), this.crashService.multiplier$.pipe((0, C.b)(v => {
                        this._multiplier = v, !this.potential$.getValue() || !this.potential$.getValue()[0] || this.potential$.getValue()
                    }), (0, n.U)(v => v.toFixed(2)), (0, B.x)(), (0, p.t)(this)).subscribe(() => this.calculate()), this.potential$.pipe((0, E.h)(v => {
                        if (v && v.length >= 2) {
                            const [b, U] = v;
                            return !!b && !!U
                        }
                        return !1
                    }), (0, C.b)(([{
                        value: v
                    }, {
                        value: b
                    }]) => {
                        const U = this.crashService.growthReverseFn(v),
                            ht = this.crashService.growthReverseFn(b);
                        this.crashService.timeBetweenPotentials.next(ht - U)
                    }), (0, p.t)(this)).subscribe(), this.fetchMore$.pipe((0, Z.z)(() => {
                        const v = {
                            currentValue: this.currentValue
                        };
                        return (0, o.P)(() => this.queryRef.fetchMore({
                            variables: v
                        })).pipe((0, C.b)(b => {
                            this.pageInfo = b.data.crashBetItemVariants.pageInfo
                        }))
                    }), (0, p.t)(this)).subscribe(), this.totalCoinWin$ = (0, s.a)([this.crashService.userLiveBet$, this.crashService.multiplier$]).pipe((0, n.U)(([v, b]) => v.totalWinAmount ? v.totalWinAmount : v.totalBet * b)), this.itemGameStarted$ = (0, s.a)([this.crashService.game$, this.crashService.crashBetMode$]).pipe((0, n.U)(([v, b]) => "STARTED" === v.status && b === D.CBC.ITEMS_AND_COINS)), this.inCoinGame$ = (0, s.a)([this.crashService.userLiveBet$, this.crashService.game$, this.crashService.crashBetMode$]).pipe((0, n.U)(([v, b, U]) => v && "STARTED" === b.status && U === D.CBC.COINS_ONLY)), this.preloads$.pipe((0, E.h)(v => !!v.length), (0, S.w)(v => {
                        const b = v.map(({
                            iconUrl: U
                        }) => U);
                        return at.preloadImages(b)
                    }), (0, p.t)(this)).subscribe()
                }
                getName(v) {
                    return [v.brand, v.name].filter(Boolean).join(" | ")
                }
                insertObjectiveItem(v) {
                    if (!v || !this.variants) return;
                    let b = null;
                    for (let U = this.variants.length - 1; U > 1; U--)
                        if (v.value > this.variants[U].value) {
                            if (this.pageInfo.hasNextPage && U === this.variants.length - 1) break;
                            b = U + 1;
                            break
                        } null !== b && this.variants.splice(b, 0, v)
                }
                calculate() {
                    if (!this.variants) return;
                    const v = this.currentValue;
                    let b, U;
                    for (let ot = this.variants.length - 1; ot >= 0; ot--)
                        if (v >= this.variants[ot].value) {
                            U = this.variants[ot], b = ot;
                            break
                        } if (!U) return;
                    const [ht] = this.potential$.getValue();
                    if (U === ht) return;
                    this.pageInfo.hasNextPage && b + 1 >= this.variants.length - this.fetchMoreWhenLeft && this.fetchMore$.next();
                    const dt = this.preloads$.getValue();
                    let pt = !1;
                    if (this.forwardPreloads)
                        for (let ot = b + 1; ot <= b + this.forwardPreloads; ot++) this.variants[ot] && (dt.push(this.variants[ot]), pt = !0);
                    pt && this.preloads$.next(dt.slice(0, 5)), this.potential$.next([U, this.variants[b + 1]])
                }
                getEmptyPageInfo() {
                    return {
                        hasNextPage: !1,
                        endCursor: null
                    }
                }
            };
            M.\u0275fac = function(v) {
                return new(v || M)(T.Y36(mt.e), T.Y36(w._M), T.Y36(A.KD))
            }, M.\u0275cmp = T.Xpm({
                type: M,
                selectors: [
                    ["cw-crash-potential-win"]
                ],
                inputs: {
                    game: "game",
                    crashBet: "crashBet"
                },
                decls: 2,
                vars: 2,
                consts: [
                    [1, "potential-data", 3, "ngClass.lt-md"],
                    [4, "ngrxLet"],
                    [3, "currencyDigitsInfo", "balance", "currency", 4, "ngIf"],
                    [4, "ngIf"],
                    [3, "currencyDigitsInfo", "balance", "currency"],
                    [1, "variant-text"],
                    [1, "item-name", "ellipsis"],
                    [1, "bullet", 3, "ngClass"],
                    [3, "currencyDigitsInfo", "ngClass", "balance", "currency"]
                ],
                template: function(v, b) {
                    1 & v && (T.TgZ(0, "div", 0), T.YNc(1, G, 7, 9, "ng-container", 1), T.qZA()), 2 & v && (T.Q6J("ngClass.lt-md", "lt-md"), T.xp6(1), T.Q6J("ngrxLet", b.crashBet$))
                },
                dependencies: [it.mk, it.O5, q.oO, tt.eJ, R.q, tt.fM],
                styles: [".potential-data[_ngcontent-%COMP%]{text-align:center;height:7vh;margin-bottom:2vh}.potential-data[_ngcontent-%COMP%]   .variant-text[_ngcontent-%COMP%]{height:1.5rem;color:#6c757d;letter-spacing:1.25px;font-size:.85rem;font-weight:700;text-transform:uppercase}.potential-data[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%]{display:inline-block;width:14px;height:14px;vertical-align:baseline;border-radius:2px;margin-right:10px;transition:background-color .2s}.potential-data[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{width:100%;font-size:1.25rem;text-transform:uppercase;color:#dee2e6;font-weight:700}.potential-data[_ngcontent-%COMP%]   cw-pretty-balance[_ngcontent-%COMP%]{display:block;font-size:1.3rem;font-weight:700}@media (max-width: 767.98px){.potential-data[_ngcontent-%COMP%]{height:6vh;margin-bottom:.2rem}.potential-data[_ngcontent-%COMP%]   .variant-text[_ngcontent-%COMP%]{height:1.1rem;font-size:.7rem}.potential-data[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{font-size:.85rem}}"],
                changeDetection: 0
            }), M = (0, e.gn)([(0, p.c)(), (0, e.w6)("design:paramtypes", [mt.e, w._M, A.KD])], M)
        },
        90836: (_t, K, t) => {
            t.d(K, {
                i: () => tt
            });
            var e = t(88096),
                u = t(10519),
                A = t(88266),
                D = t(34616),
                p = t(65648),
                a = (t(98839), t(209), t(66188), t(29939), t(12551), t(99233), t(56340), t(75744), t(32617), t(91659), t(90505), t(22223));
            t(44755), t(42722), t(45575), t(25888), t(56423), t(9070), t(16771);
            let tt = (() => {
                class R {}
                return R.\u0275fac = function(N) {
                    return new(N || R)
                }, R.\u0275mod = a.oAB({
                    type: R
                }), R.\u0275inj = a.cJS({
                    imports: [D.v, A.d, p.Y, u.$, e.F]
                }), R
            })()
        },
        16771: (_t, K, t) => {
            t.d(K, {
                p: () => q
            });
            var e = t(70655),
                u = t(22223),
                A = t(53788),
                D = t(5668),
                p = t(49933),
                w = t(54004),
                $ = t(61135),
                i = t(77579),
                B = t(63900),
                S = t(39646),
                E = t(4326),
                C = t(39300),
                n = t(39841),
                Z = t(71884),
                o = t(80188),
                s = t(4128),
                a = t(43475),
                F = t(44755),
                Q = t(55829),
                et = t(16622);
            const j = ["crashVideo"],
                Y = ["loops"],
                at = function(tt) {
                    return {
                        invisible: tt
                    }
                };

            function mt(tt, R) {
                if (1 & tt && (u._UZ(0, "video", 4, 5), u.ALo(2, "ngrxPush")), 2 & tt) {
                    const V = R.$implicit,
                        N = u.oxw(2);
                    u.Q6J("ngClass", u.VKq(4, at, "STARTED" !== u.lcZ(2, 2, N.status$)))("src", V, u.LSH)
                }
            }

            function T(tt, R) {
                if (1 & tt && (u.ynx(0)(1), u.YNc(2, mt, 3, 6, "video", 1), u.BQk(), u._UZ(3, "video", 2, 3), u.ALo(5, "ngrxPush"), u.BQk()), 2 & tt) {
                    const V = u.oxw();
                    u.xp6(2), u.Q6J("ngForOf", V.loopVideoUrls), u.xp6(1), u.Q6J("ngClass", u.VKq(5, at, !u.lcZ(5, 3, V.crashVideoVisible$)))("src", V.crashVideoUrl, u.LSH)
                }
            }
            let q = class {
                set loopVideoElements(R) {
                    null !== R && 0 !== R.length ? (R.forEach(V => {
                        const N = V.nativeElement;
                        N.muted = !0, N.loop = !0, N.load()
                    }), this._loopVideoElements = R, this.loopsViewReady$.next(!0)) : this.loopsViewReady$.next(!1)
                }
                get loopVideoElements() {
                    return this._loopVideoElements
                }
                set crashVideoElement(R) {
                    if (!R) return void this.crashViewReady$.next(!1);
                    const V = R.nativeElement;
                    V.muted = !0, V.load(), this._crashVideoElement = R, this.crashViewReady$.next(!0)
                }
                get crashVideoElement() {
                    return this._crashVideoElement
                }
                constructor(R, V, N, st) {
                    this.crashService = R, this.cdr = V, this.appConfig = N, this.platform = st, this.status$ = this.crashService.game$.pipe((0, w.U)(H => H.status)), this.crashVideoVisible$ = new $.X(!1), this.animationsEnabled$ = this.crashService.animationsEnabled$.pipe((0, w.U)(H => this.appConfig.crash.videoAnimations && H)), this.loopVideoUrls = ["assets/webm/loop1.webm", "assets/webm/loop2.webm", "assets/webm/loop3.webm"], this.crashVideoUrl = "assets/webm/crash.webm", this.videosPreloaded$ = new i.x, this.loopTransition$ = new i.x, this.loopsViewReady$ = new $.X(!1), this.crashViewReady$ = new $.X(!1), this.preloadVideos(), this.loopTransition$.pipe((0, B.w)(H => {
                        const nt = this.loopVideoElements.filter((G, z) => z + 1 !== H);
                        return nt.forEach(G => {
                            G.nativeElement.classList.remove("active")
                        }), this.cdr.detectChanges(), (0, S.of)(nt).pipe((0, E.g)(500))
                    }), (0, p.t)(this)).subscribe(H => {
                        H.forEach(nt => {
                            nt.nativeElement.paused || nt.nativeElement.pause()
                        }), this.cdr.detectChanges()
                    }), this.videosPreloaded$.pipe((0, B.w)(() => this.crashViewReady$), (0, C.h)(H => H), (0, B.w)(() => this.status$), (0, p.t)(this)).subscribe(H => {
                        const nt = this.crashVideoElement.nativeElement;
                        switch (H) {
                            case "FINISHED":
                                this.platform.document.hidden || nt.play().then(() => {
                                    this.crashVideoVisible$.next(!0), this.cdr.detectChanges()
                                });
                                break;
                            case "STARTED":
                                nt.paused || nt.pause(), this.crashVideoVisible$.next(!1)
                        }
                    }), this.videosPreloaded$.pipe((0, B.w)(() => (0, n.a)([this.loopsViewReady$, this.crashService.multiplier$.pipe((0, w.U)(H => H > 3 ? 3 : H > 2 ? 2 : H > 1 ? 1 : 0), (0, Z.x)())])), (0, p.t)(this)).subscribe(([H, nt]) => {
                        H && this.toggleVideos(nt)
                    })
                }
                preloadVideos() {
                    const R = this.loopVideoUrls.map(N => (0, o.D)(fetch(N))),
                        V = (0, o.D)(fetch(this.crashVideoUrl));
                    (0, s.D)([...R, V]).subscribe(() => this.videosPreloaded$.next())
                }
                toggleVideos(R) {
                    const V = this.loopVideoElements.filter((N, st) => st + 1 === R)[0];
                    if (V) {
                        const N = V.nativeElement;
                        return N.play().then(() => {
                            N.classList.add("active"), this.loopTransition$.next(R)
                        }), void this.cdr.detectChanges()
                    }
                    this.loopVideoElements.forEach(N => {
                        const st = N.nativeElement;
                        st.classList.remove("active"), st.paused || st.pause()
                    })
                }
            };
            q.\u0275fac = function(R) {
                return new(R || q)(u.Y36(a.e), u.Y36(u.sBO), u.Y36(A.q), u.Y36(D.m))
            }, q.\u0275cmp = u.Xpm({
                type: q,
                selectors: [
                    ["cw-crash-video-background"]
                ],
                viewQuery: function(R, V) {
                    if (1 & R && (u.Gf(j, 5), u.Gf(Y, 5)), 2 & R) {
                        let N;
                        u.iGM(N = u.CRH()) && (V.crashVideoElement = N.first), u.iGM(N = u.CRH()) && (V.loopVideoElements = N)
                    }
                },
                ngContentSelectors: ["*"],
                decls: 3,
                vars: 3,
                consts: [
                    [4, "ngIf"],
                    ["class", "loop", "preload", "none", "playsinline", "", "type", "video/webm", 3, "ngClass", "src", 4, "ngFor", "ngForOf"],
                    ["preload", "none", "playsinline", "", "type", "video/webm", 3, "ngClass", "src"],
                    ["crashVideo", ""],
                    ["preload", "none", "playsinline", "", "type", "video/webm", 1, "loop", 3, "ngClass", "src"],
                    ["loops", ""]
                ],
                template: function(R, V) {
                    1 & R && (u.F$t(), u.YNc(0, T, 6, 7, "ng-container", 0), u.ALo(1, "ngrxPush"), u.Hsn(2)), 2 & R && u.Q6J("ngIf", u.lcZ(1, 1, V.animationsEnabled$))
                },
                dependencies: [F.mk, F.sg, F.O5, Q.oO, et.fM],
                styles: ["[_nghost-%COMP%]{pointer-events:none}video[_ngcontent-%COMP%]{z-index:-10;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:min(260%,275vw)}video.loop[_ngcontent-%COMP%]{transition:opacity .5s;opacity:0}video.loop.active[_ngcontent-%COMP%]{opacity:1}"],
                changeDetection: 0
            }), q = (0, e.gn)([(0, p.c)(), (0, e.w6)("design:paramtypes", [a.e, u.sBO, Object, D.m])], q)
        },
        43475: (_t, K, t) => {
            t.d(K, {
                e: () => r
            });
            var e = t(86225),
                u = t(47293),
                A = t(97144),
                D = t(40022),
                p = t(29218),
                w = t(28898),
                $ = t(13264),
                i = t(57854),
                B = t(37365),
                S = t(61135),
                E = t(77579),
                C = t(11365),
                n = t(54004),
                Z = t(39841),
                o = t(56451),
                s = t(54968),
                a = t(68675),
                F = t(63900),
                Q = t(18505),
                et = t(22940),
                j = t(13099),
                Y = t(39300),
                at = t(5963),
                mt = t(82722),
                T = t(71884),
                it = t(34782),
                q = t(39646),
                tt = t(17445),
                R = t(70029),
                V = t(94813),
                N = t(95698),
                st = t(4128),
                H = t(56592),
                nt = t(93678),
                G = t(41974);
            const z = H.Ps`
  query CrashBetList($gameId: ID!) {
    crashBets(gameId: $gameId) {
      edges {
        node {
          ...CrashBet
        }
      }
    }
  }

  ${nt.q}
  ${B.edw}
`,
                M = H.Ps`
  subscription OnCreateCrashBet {
    createCrashBet {
      crashBet {
        ...CrashBet
      }
    }
  }

  ${nt.q}
  ${B.edw}
`,
                I = H.Ps`
  subscription OnUpdateCrashBet {
    updateCrashBet {
      crashBet {
        id
        maxTick
        tick
        totalWinAmount
        user {
          ...UserBadgeSimple
        }
        userItem {
          id
          consumeValue
          itemVariant {
            ...PotentialItemVariant
          }
          status
        }
      }
    }
  }

  ${B.edw}
  ${G.b}
`,
                v = H.Ps`
  mutation CreateCrashBet($input: CreateCrashBetInput!) {
    createCrashBet(input: $input) {
      crashBet {
        ...CrashBet
      }
    }
  }

  ${nt.q}
  ${B.edw}
`,
                b = H.Ps`
  mutation ExitCrash($input: ExitCrashInput!) {
    exitCrash(input: $input) {
      crashBet {
        ...CrashBet
      }
    }
  }

  ${nt.q}
  ${B.edw}
`,
                U = H.Ps`
  fragment CrashGame on CrashGame {
    id
    createdAt
    startedAt
    scheduledAt
    status
    roll
    seed
    bets {
      edges {
        node {
          id
        }
      }
    }
  }
`,
                ht = H.Ps`
  query CurrentCrashGame {
    crashGames(last: 1) {
      edges {
        node {
          ...CrashGame
        }
      }
    }
  }

  ${U}
`,
                dt = H.Ps`
  query CrashGameHistory($last: PaginationAmount) {
    crashGames(last: $last) {
      edges {
        node {
          id
          roll
        }
      }
    }
  }
`,
                pt = H.Ps`
  subscription OnCrashCreateGame {
    createCrashGame {
      crashGame {
        ...CrashGame
      }
    }
  }

  ${U}
`,
                ut = H.Ps`
  subscription OnCrashUpdateGame {
    updateCrashGame {
      crashGame {
        id
        status
        scheduledAt
        roll
        seed
      }
    }
  }
`;
            var ot = t(22223),
                x = t(71591),
                h = t(69144),
                c = t(5668);
            let r = (() => {
                class m {
                    constructor(L, W, k, J, rt, ct) {
                        this.store = L, this.apollo = W, this.exchangeRateService = k, this.userItemService = J, this.userService = rt, this.platformService = ct, this.betAmount$ = new S.X(0), this.selectedObservedCrashBet$ = new S.X(null), this.fakeBetAmount = 50, this.timeBetweenPotentials = new S.X(0), this.potential$ = new S.X([]), this.cashOut$ = new E.x, this.isLoadingSelectedItemsCollection$ = new S.X(!0), this.manualCrashBetQueue$ = new S.X(null), this.createCrashBetResults$ = new S.X([]), this.autoCrashBetsQueue$ = new w.V, this.hasBetsInQueue$ = this.manualCrashBetQueue$.pipe((0, C.M)(this.autoCrashBetsQueue$.items$), (0, n.U)(([f, l]) => !!f || l.length > 0)), this.queuedBetsCount$ = (0, Z.a)([this.manualCrashBetQueue$, this.autoCrashBetsQueue$.items$]).pipe((0, n.U)(([f, l]) => l.length + (f ? 1 : 0))), this.queuedBetsTotalValue$ = (0, Z.a)([this.manualCrashBetQueue$, this.autoCrashBetsQueue$.items$]).pipe((0, n.U)(([f, l]) => [f, ...l].reduce((d, g) => d + g?.amount, 0))), this.crashBetMode$ = new S.X(B.CBC.ITEMS_AND_COINS), this.animationsEnabled$ = new S.X(!0), this.gameValue$ = (0, o.T)((0, s.R)(this.platformService.document, "CW_WEB_SOCKET_RECONNECTED").pipe((0, a.O)(!0), (0, F.w)(() => this.apollo.subscribe({
                            query: ht,
                            fetchPolicy: "no-cache"
                        })), (0, n.U)(({
                            data: f
                        }) => (0, A._M)(f.crashGames)[0])), this.apollo.subscribe({
                            query: pt,
                            fetchPolicy: "no-cache"
                        }).pipe((0, Q.b)(() => {
                            const f = this.apollo.client,
                                l = {
                                    gameId: this.initialCrashGameId
                                },
                                d = f.readQuery({
                                    query: z,
                                    variables: l
                                });
                            f.writeQuery({
                                query: z,
                                data: {
                                    ...d,
                                    crashBets: {
                                        ...d?.crashBets || {},
                                        edges: []
                                    }
                                },
                                variables: l
                            })
                        }), (0, n.U)(({
                            data: f
                        }) => f.createCrashGame.crashGame)), this.apollo.subscribe({
                            query: ut,
                            fetchPolicy: "no-cache"
                        }).pipe((0, n.U)(({
                            data: f
                        }) => f.updateCrashGame.crashGame))).pipe((0, et.R)((f, l) => ({
                            ...f,
                            ...l
                        }), {}), (0, C.M)(this.store.select(e.gW)), (0, n.U)(([f, l]) => ({
                            ...f,
                            createdAt: (0, u.$m)(f.createdAt, l),
                            startedAt: (0, u.$m)(f.startedAt, l)
                        })), (0, j.B)()), this.startedGame$ = this.gameValue$.pipe((0, Y.h)(f => "CREATED" === f.status), (0, F.w)(f => {
                            const l = {
                                    ...f,
                                    status: "STARTED"
                                },
                                d = new Date(f.startedAt).getTime() - Date.now();
                            return (0, at.H)(d).pipe((0, mt.R)(this.gameValue$.pipe((0, Y.h)(g => "FINISHED" === g.status))), (0, n.U)(() => l))
                        })), this.game$ = (0, o.T)(this.gameValue$, this.startedGame$).pipe((0, T.x)((f, l) => f.status === l.status), (0, it.d)(1)), this.gameStartedAt$ = this.game$.pipe((0, Y.h)(f => ["CREATED", "STARTED"].includes(f.status)), (0, F.w)(f => (0, q.of)("STARTED" === f.status ? 0 : new Date(f.startedAt).getTime()))), this.multiplier$ = this.game$.pipe((0, Y.h)(f => ["CREATED", "STARTED", "FINISHED"].includes(f.status)), (0, F.w)(f => {
                            if ("CREATED" === f.status) return (0, q.of)(1);
                            if ("FINISHED" === f.status) return (0, q.of)(f.roll / 100);
                            const l = new Date(f.startedAt).getTime();
                            return (0, tt.F)(0, R.Z).pipe((0, n.U)(() => +this.growthFn(Date.now() - l).toFixed(3)), (0, T.x)(), (0, Y.h)(d => d >= 1))
                        }), (0, a.O)(1), (0, it.d)({
                            bufferSize: 1,
                            refCount: !0
                        })), this.historyAmount = 11, this.gamesHistoryApi$ = this.apollo.query({
                            query: dt,
                            fetchPolicy: "no-cache",
                            variables: {
                                last: this.historyAmount
                            }
                        }).pipe((0, n.U)(({
                            data: f
                        }) => (0, A._M)(f.crashGames))), this.games$ = (0, o.T)(this.gamesHistoryApi$, this.game$.pipe((0, Y.h)(f => "FINISHED" === f.status), (0, n.U)(f => [{
                            id: f.id,
                            roll: f.roll
                        }]))).pipe((0, et.R)((f, l) => [...l.filter(_ => !f.find(O => O.id === _.id)), ...f[0]?.id === l[0]?.id ? [l[0], ...f.slice(1)] : f], []), (0, n.U)(f => f.filter(l => !!l.roll)), (0, it.d)({
                            bufferSize: 1,
                            refCount: !0
                        })), this._betUpdate$ = new E.x, this.betUpdate$ = this._betUpdate$.asObservable(), this.game$.pipe((0, V.j)("status"), (0, T.x)(), (0, Q.b)(() => this.selectedObservedCrashBet$.next(null))).subscribe();
                        const Ct = this.game$.pipe((0, N.q)(1), (0, F.w)(f => {
                            this.initialCrashGameId = f.id;
                            const l = this.apollo.watchQuery({
                                query: z,
                                variables: {
                                    gameId: f.id
                                }
                            });
                            return this.subscribeToNewBets(l), this.subscribeToBetUpdates(l), l.valueChanges.pipe((0, n.U)(({
                                data: d
                            }) => (d.crashBets ? d.crashBets.edges : []).map(g => g.node)))
                        }));
                        this.crashBets$ = Ct.pipe((0, C.M)(this.userService.user$), (0, n.U)(([f, l]) => (0, A.tu)(f, "id").filter(Boolean).sort(this.sortBets(l))), (0, a.O)([]), (0, it.d)(1)), this.userCrashBets$ = this.userService.userId$.pipe((0, F.w)(f => this.crashBets$.pipe((0, n.U)(l => l.filter(d => d.user.id === f)))), (0, it.d)(1)), this.userLiveBet$ = this.userCrashBets$.pipe((0, n.U)(f => f.find(l => !l.maxTick) || null), (0, it.d)(1)), this.betTotal$ = (0, Z.a)([this.userService.currency$, this.crashBets$]).pipe((0, F.w)(([f, l]) => {
                            if (0 === l.length) return (0, q.of)([]);
                            const d = l.map(g => f === g.currency ? (0, q.of)(g.totalBet) : this.exchangeRateService.convert(f, g.totalBet, g.currency));
                            return (0, st.D)(d)
                        }), (0, n.U)(f => f.reduce((l, d) => l + d, 0)), (0, it.d)(1)), this.defaultObservedCrashBet$ = this.crashBets$.pipe((0, n.U)(f => f ? f.find(d => !d.tick) || f[0] : void 0), (0, T.x)((f, l) => !!(f === l || f && l && f.id === l.id)), (0, it.d)(1)), this.observedCrashBet$ = (0, Z.a)([this.selectedObservedCrashBet$, this.defaultObservedCrashBet$]).pipe((0, n.U)(([f, l]) => f || l)), this.userItems$ = this.userService.user$.pipe((0, Y.h)(A.$K), (0, N.q)(1), (0, n.U)(f => f.id), (0, F.w)(f => {
                            const l = [B.s0G.AVAILABLE],
                                d = {
                                    first: 50,
                                    userId: f,
                                    name: "",
                                    orderBy: B.j_8.VALUE_DESC,
                                    status: l,
                                    includeMarketId: !1
                                },
                                {
                                    dataSource$: g,
                                    selectedUserItems: _
                                } = this.userItemService.subscribeToUserItems(d);
                            return this.selectedItemsCollection = _, this.isLoadingSelectedItemsCollection$.next(!1), (0, Z.a)([g, this.selectedItemsCollection.items$, this.userItemService.reservedCollection.items$]).pipe((0, n.U)(([O, y, X]) => (l.length ? O.filter(({
                                status: gt
                            }) => l.includes(gt)) : O).filter(gt => !X.some(({
                                id: vt
                            }) => vt === gt.id)).map(gt => ({
                                ...gt,
                                selected: y.some(({
                                    id: vt
                                }) => vt === gt.id)
                            }))))
                        }));
                        const Mt = this.platformService.localStorage.get(p.F.CRASH_REWARD_TYPE);
                        null !== Mt && this.crashBetMode$.next(Mt);
                        const Tt = this.platformService.localStorage.get(p.F.CRASH_ANIMATIONS);
                        this.animationsEnabled$.next("true" === Tt), this.games$.subscribe()
                    }
                    createCrashBet(L) {
                        return this.apollo.mutate({
                            mutation: v,
                            variables: {
                                input: L
                            }
                        }).pipe((0, Q.b)(({
                            data: W
                        }) => {
                            const k = W.createCrashBet?.crashBet;
                            if (k) {
                                const J = {
                                        gameId: this.initialCrashGameId
                                    },
                                    rt = this.apollo.client,
                                    ct = rt.readQuery({
                                        query: z,
                                        variables: J
                                    }),
                                    Ct = (0, A.NZ)({
                                        node: k,
                                        prev: ct,
                                        key: "crashBets",
                                        typeName: "CrashBet"
                                    });
                                rt.writeQuery({
                                    query: z,
                                    data: Ct,
                                    variables: J
                                })
                            }
                        }))
                    }
                    exitCrash(L) {
                        return this.apollo.mutate({
                            mutation: b,
                            variables: {
                                input: {
                                    betId: L
                                }
                            }
                        }).pipe((0, n.U)(({
                            data: k
                        }) => k.exitCrash.crashBet), (0, Q.b)(k => this.cashOut$.next(k)))
                    }
                    growthFn(L) {
                        return Math.pow(Math.E, 6e-5 * L)
                    }
                    growthReverseFn(L) {
                        return Math.log(L) / 6e-5
                    }
                    clearQueues() {
                        const L = this.manualCrashBetQueue$.value;
                        L && this.removeReservedUserItems(L), this.autoCrashBetsQueue$.items$.pipe((0, N.q)(1)).subscribe(W => W.forEach(k => this.removeReservedUserItems(k))), this.manualCrashBetQueue$.next(null), this.autoCrashBetsQueue$.clear()
                    }
                    removeReservedUserItems(L) {
                        L.items.edges.forEach(W => this.userItemService.reservedCollection.removeByKey("id", W.node.id))
                    }
                    subscribeToNewBets(L) {
                        return L.subscribeToMore({
                            document: M,
                            updateQuery: (W, {
                                subscriptionData: k
                            }) => (0, A.NZ)({
                                node: k?.data?.createCrashBet?.crashBet,
                                prev: W,
                                key: "crashBets",
                                typeName: "CrashBet"
                            })
                        })
                    }
                    subscribeToBetUpdates(L) {
                        return L.subscribeToMore({
                            document: I,
                            updateQuery: (W, {
                                subscriptionData: k
                            }) => {
                                if (!k.data) return W;
                                (!W || !W.crashBets) && (W = Object.assign({}, W, {
                                    crashBets: {
                                        __typename: "CrashBetConnection",
                                        edges: []
                                    }
                                }));
                                const J = k?.data?.updateCrashBet?.crashBet;
                                if (J) {
                                    const rt = W?.crashBets.edges.find(ct => J.id === ct.node.id)?.node;
                                    rt && this._betUpdate$.next(rt)
                                }
                                return Object.assign({}, W, {
                                    ...W
                                })
                            }
                        })
                    }
                    sortBets(L) {
                        return (W, k) => {
                            if (L) {
                                if (W.user.id === L.id && k.user.id !== L.id) return -1;
                                if (k.user.id === L.id && W.user.id !== L.id) return 1;
                                if (W.user.id === L.id && k.user.id === L.id) {
                                    if (!W.maxTick) return -1;
                                    if (W.maxTick > k.maxTick) return 1;
                                    if (k.maxTick > W.maxTick) return -1
                                }
                            }
                            return W.totalWinAmount > k.totalWinAmount ? -1 : W.totalWinAmount < k.totalWinAmount ? 1 : W.amount > k.amount ? -1 : W.amount < k.amount || k.user.id > W.user.id ? 1 : -1
                        }
                    }
                }
                return m.\u0275fac = function(L) {
                    return new(L || m)(ot.LFG(x.yh), ot.LFG(h._M), ot.LFG(D.U), ot.LFG($.m), ot.LFG(i.KD), ot.LFG(c.m))
                }, m.\u0275prov = ot.Yz7({
                    token: m,
                    factory: m.\u0275fac,
                    providedIn: "root"
                }), m
            })()
        }
    }
]);