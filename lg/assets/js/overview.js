// v 1.0 JW _ OVERVIEW

document.addEventListener("DOMContentLoaded", function () {
    let window1024 = window.matchMedia('(max-width: 1023px)').matches
    let KVbgvideoState = 1
    let sc2roomvideoState = 1
    let sc2aivideoState = 1
    let sc3tearvideoState = 0

    if (window1024) {
        //mobile
    }
    else {
        //pc init
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.addEventListener("refresh", () => {
            console.log('refresh')
        })

        // sq init
        for (i = 0; i <= 35; i++) {
            $(".scene_key .kvImgWrap.pc").append(`<img class='kvimg pc kv${i}' src='./images/overview/kv/OVERVIEW_KV_02_PC_${String(i).padStart(5, '0')}.jpg' alt=''>`);
        }
        for (i = 1; i < 50; i++) {
            $(".scene_key .part2 .overVid.pc").append(`<img class='selfVid pc self${i} 'src='./images/overview/self/OVERVIEW_DISPLAY_PC_${String(2 * i - 1).padStart(5, '0')}.jpg' alt=''>`);
        }
        for (i = 0; i < 60; i++) {
            $(".sc4sqWrap.pc .imgwrap").append(`<img class='pc design${i} 'src='./images/overview/design_sq/OVERVIEW_DESIGN_PC_FHD_${String(i).padStart(5, '0')}.jpg' alt=''>`);
        }

        //pc lazy
        var loadImages = document.querySelectorAll("img.pc.lazy");
        var loadVids = document.querySelectorAll("video.pc.lazy");
        loadImages.forEach(function (img) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
        loadVids.forEach(function (video) {
            video.src = video.dataset.src;
            video.classList.remove('lazy');
        });

        // scrollto setting 
        /*! * ScrollToPlugin 3.9.1 * https://greensock.com * * @license Copyright 2021,GreenSock. All rights reserved. * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members,the agreement issued with that membership. * @author:Jack Doyle,jack@greensock.com */
        ! function (e, t) {
            "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {}
            )
        }
            (this, function (e) {
                "use strict"; function k() { return "undefined" != typeof window }
                function l() { return u || k() && (u = window.gsap) && u.registerPlugin && u }
                function m(e) { return "string" == typeof e }
                function n(e) { return "function" == typeof e }
                function o(e, t) { var o = "x" === t ? "Width" : "Height", n = "scroll" + o, r = "client" + o; return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[r] || c[r]) : e[n] - e["offset" + o] }
                function p(e, t) {
                    var o = "scroll" + ("x" === t ? "Left" : "Top"); return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c), function () { return e[o] }
                }
                function r(e, t) {
                    if (!(e = f(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
                        ; var o = e.getBoundingClientRect(), n = !t || t === T || t === c, r = n ? { top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0), left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0) }
                            : t.getBoundingClientRect(), l = { x: o.left - r.left, y: o.top - r.top }
                        ; return !n && t && (l.x += p(t, "x")(), l.y += p(t, "y")()), l
                }
                function s(e, t, n, l, i) { return isNaN(e) || "object" == typeof e ? m(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - i : "max" === e ? o(t, n) - i : Math.min(o(t, n), r(e, t)[n] - i) : parseFloat(e) - i }
                function t() {
                    u = l(), k() && u && document.body && (T = window, c = document.body, i = document.documentElement, f = u.utils.toArray, u.config({ autoKillThreshold: 7 }
                    ), v = u.config(), a = 1)
                }
                var u, a, T, i, c, f, v, y = {
                    version: "3.9.1", name: "scrollTo", rawVars: 1, register: function register(e) { u = e, t() }
                    , init: function init(e, o, r, l, i) {
                        a || t(); var c = this, f = u.getProperty(e, "scrollSnapType"); c.isWin = e === T, c.target = e, c.tween = r, o = function _clean(e, t, o, r) {
                            if (n(e) && (e = e(t, o, r)), "object" != typeof e) return m(e) && "max" !== e && "=" !== e.charAt(1) ? { x: e, y: e }
                                : { y: e }
                                ; if (e.nodeType) return { y: e, x: e }
                                    ; var l, i = {}
                                ; for (l in e) i[l] = "onAutoKill" !== l && n(e[l]) ? e[l](t, o, r) : e[l]; return i
                        }
                            (o, l, e, i), c.vars = o, c.autoKill = !!o.autoKill, c.getX = p(e, "x"), c.getY = p(e, "y"), c.x = c.xPrev = c.getX(), c.y = c.yPrev = c.getY(), f && "none" !== f && (c.snap = 1, c.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != o.x ? (c.add(c, "x", c.x, s(o.x, e, "x", c.x, o.offsetX || 0), l, i), c._props.push("scrollTo_x")) : c.skipX = 1, null != o.y ? (c.add(c, "y", c.y, s(o.y, e, "y", c.y, o.offsetY || 0), l, i), c._props.push("scrollTo_y")) : c.skipY = 1
                    }
                    , render: function render(e, t) { for (var n, r, l, i, s, p = t._pt, c = t.target, f = t.tween, u = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, x = t.snap, g = t.snapInline; p;) p.r(e, p.d), p = p._next; n = d || !t.skipX ? t.getX() : a, l = (r = d || !t.skipY ? t.getY() : y) - y, i = n - a, s = v.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), u && (!t.skipX && (s < i || i < -s) && n < o(c, "x") && (t.skipX = 1), !t.skipY && (s < l || l < -s) && r < o(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (f.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(f, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !x || 1 !== e && 0 !== e || (r = c.scrollTop, n = c.scrollLeft, g ? c.style.scrollSnapType = g : c.style.removeProperty("scroll-snap-type"), c.scrollTop = r + 1, c.scrollLeft = n + 1, c.scrollTop = r, c.scrollLeft = n), t.xPrev = t.x, t.yPrev = t.y }
                    , kill: function kill(e) { var t = "scrollTo" === e; !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1) }
                }
                    ; y.max = o, y.getOffset = r, y.buildGetter = p, l() && u.registerPlugin(y), e.ScrollToPlugin = y, e.default = y; if (typeof (window) === "undefined" || window !== e) {
                        Object.defineProperty(e, "__esModule", { value: !0 }
                        )
                    }
                else { delete e.default }
            }
            );

        //pc shopnow
        $('#shopNow').click(function (e) {
            e.preventDefault();
            gsap.to(window, { duration: 0, scrollTo: "#lineup_wrap" });
        });


    }

    // gnb fix setting
    let gnbState = 'white';

    if (window1024) {
        $(window).scroll(function () {
            let cookieBannerHeight = ($('.cookie-banner').css('display') == "none" ? 0 : $('.cookie-banner').outerHeight());
            let headerHeight = $('header.header').outerHeight();
            let windowY = window.scrollY;

            if (cookieBannerHeight != 0 && windowY > 94) {
                $('.kvImgWrap .kvimg.mo').css({ 'top': `${headerHeight + cookieBannerHeight}px` })
            }
            else { $('.kvImgWrap .kvimg.mo').css({ 'top': `${headerHeight}px` }) }

            if (gnbState == 'white' && windowY > 94) {
                $('.header').addClass('windowOn')
                $('.header').removeClass('windowOff')
                $('header.header').css({ 'background': 'rgba(0,0,0,0.8)' });
                $('header.header').css({ 'position': 'fixed' })
                $('header.header').css({ 'top': `${cookieBannerHeight}px` })
                $('.header .gnb li.off a').css({ 'color': '#777777' });
                $('.header .gnb li.on a').css({ 'color': '#f7f7f7' });
                $('header.header .gnb .bar').css({ 'background': '#ffffff' });
                $('.header .logo_lgoled').css({ 'background-image': "url('./images/common/MO/LGOLED_logo_w.png')" });
                gnbState = 'black';
            }
            else if (gnbState == 'black' && windowY <= 94) {
                $('.header').addClass('windowOff');
                $('.header').removeClass('windowOn');
                $('header.header').css({ 'position': 'absolute' });
                $('header.header').css({ 'top': '0' });
                $('header.header').css({ 'background': '#f7f7f7' });
                $('.header .gnb a.off').css({ 'color': '#727272' });
                $('.header .gnb li.on a').css({ 'color': '#000000' });
                $('header.header .gnb .bar').css({ 'background': '#ac183c' });
                $('.header .logo_lgoled').css({ 'background-image': "url('./images/common/MO/LGOLED_logo.png')" });
                gnbState = 'white';
            }
        })
    }
    else {
        ScrollTrigger.create({
            trigger: 'header.header',
            start: 'top top',
            endTrigger: '#disclaimer_num',
            end: '60000px bottom',
            pin: true,
            pinType: "fixed",
            pinReparent: true,
            pinSpacing: false,
            onUpdate: self => {
                let gnbState = 'white'
                let windowY = window.scrollY
                if (gnbState == 'white' && windowY > 94) {
                    $('.header').addClass('windowOn')
                    $('.header').removeClass('windowOff')
                    $('header.header').css({ 'background': 'rgba(0,0,0,0.8)' });
                    $('.header .gnb li.off a').css({ 'color': '#777777' });
                    $('.header .gnb li.on a').css({ 'color': '#f7f7f7' });
                    $('header.header .gnb .bar').css({ 'background': '#ffffff' });
                    $('.header .logo_lgoled').css({ 'background-image': "url('./images/common/MO/LGOLED_logo_w.png')" });
                    gnbState = 'black'
                }
                else if (gnbState = 'black' && windowY <= 94) {
                    $('.header').addClass('windowOff')
                    $('.header').removeClass('windowOn')
                    $('header.header').css({ 'background': '#f7f7f7' });
                    $('.header .gnb a.off').css({ 'color': '#727272' });
                    $('.header .gnb li.on a').css({ 'color': '#000000' });
                    $('header.header .gnb .bar').css({ 'background': '#ac183c' });
                    $('.header .logo_lgoled').css({ 'background-image': "url('./images/common/MO/LGOLED_logo.png')" });
                    gnbState = 'white'
                }
                else { console.log('GNBerror') }
            }
        });
    }




    // mo anim
    if (window1024) {
    }
    // pc anim
    else {

        function kvtimefunction() {
            keyv.to('.kv1', {
                'visibility': 'visible',
                duration: 0.4
            })
            keyv.to('.kv0', {
                'visibility': 'hidden',
                duration: 0.4
            })
            for (i = 2; i < 35; i++) {
                keyv.to('.kv' + (i), {
                    'visibility': 'visible',
                    duration: 0.4
                })
                if (i >= 2) {
                    keyv.to('.kv' + (i - 1), {
                        'visibility': 'hidden',
                        duration: 0.4
                    })
                }
            }
        }

        function selftimefunction() {
            keyv.to('.self2', {
                'visibility': 'visible',
                duration: 0.4
            })
            keyv.to('.self1', {
                'visibility': 'hidden',
                duration: 0.4
            })
            for (i = 3; i < 50; i++) {
                keyv.to('.self' + (i), {
                    'visibility': 'visible',
                    duration: 0.4
                })
                if (i >= 3) {
                    keyv.to('.self' + (i - 1), {
                        'visibility': 'hidden',
                        duration: 0.4
                    })
                }
            }
        }

        /* 0704 ver3.0 */
        let visualVideoState = 1
        /* //0704 ver3.0 */

        var keyv = gsap.timeline({
            scrollTrigger: {
                trigger: ".visual",
                start: "center center",
                scrub: true,
                pin: true,
                onUpdate: self => {
                    let copiIn = 1
                    //pixel Copy Fade
                    if (self.progress > 0.337 && copiIn != 0) {
                        gsap.timeline().to('.scene_key .part2 .textBox .textfirstwrap', {
                            autoAlpha: 1,
                            'transform': 'translateY(0)'
                        })
                        gsap.timeline().to('.scene_key .part2 .textBox .bottom', {
                            autoAlpha: 1,
                            'transform': 'translateY(0)'
                        })
                        gsap.timeline().to('.scene_key .part2 .textBox .onmore', {
                            autoAlpha: 1,
                            'transform': 'translateY(0)'
                        })
                        copiIn = 0
                    }
                    else {
                        gsap.timeline().to('.scene_key .part2 .textBox .textfirstwrap', {
                            autoAlpha: 0,
                            'transform': 'translateY(30px)'
                        })
                        gsap.timeline().to('.scene_key .part2 .textBox .bottom', {
                            autoAlpha: 0,
                            'transform': 'translateY(30px)'
                        })
                        gsap.timeline().to('.scene_key .part2 .textBox .onmore', {
                            autoAlpha: 0,
                            'transform': 'translateY(30px)'
                        })
                        copiIn = 1
                    }

                    /* 0704 ver3.0 */
                    if (self.progress > 0.37 && self.progress < 0.6) {
                        $('.visual .visual_video').get(0).play();
                    }

                    if (self.progress > 0.83 && KVbgvideoState != 0) {
                        $('.part4bgVideo.pc').get(0).play();
                        KVbgvideoState = 0;
                    }

                    // if(self.progress > 0.825 && self.progress < 1){
                    //   gsap.timeline().to('.scene_key .part4',{
                    //     autoAlpha:1,
                    //     'visibility':'visible',
                    //     duration:0,
                    //     'z-index':'3'
                    //   })
                    // }
                    // else if(self.progress <= 0.825 && self.progress >0){
                    //   gsap.timeline().to('.scene_key .part4',{
                    //     autoAlpha:0,
                    //     'visibility':'hidden',
                    //     duration:0,
                    //     'z-index':'2'
                    //   })
                    // }
                    /* //0704 ver3.0 */

                },
                end: "+=8000"
            }
        })
        // kv play 
        kvtimefunction();
        keyv.to('.visual .textBox1', {
            autoAlpha: 1,
            'transform': 'translate(-50%,-50%)',
            duration: 10
        })
            .to('.visual .textBox1', {
                autoAlpha: 0,
                'transform': 'translate(-50%,-80%)',
                duration: 13
            })
            /* 0704 ver3.0 */
            .to('.visual .part1 .textBox2', {
                autoAlpha: 1,
                'transform': 'translate(-50%,-50%)',
                duration: 10
            })
            .to('.visual .part1 .textBox2', {
                autoAlpha: 0,
                duration: 10
            })
            .to('.visual .part1', {
                autoAlpha: 0,
                duration: 15
            })
            .to('.visual .part1_2', {
                autoAlpha: 1,
                duration: 15
            }, '<')
            .to('.visual .part1_2 .visual_txt', {
                autoAlpha: 1,
                'transform': 'translate(-50%,0)',
                duration: 15
            }, '<')
            .to('.visual .part1_2 .visual_txt', {
                autoAlpha: 1,
                duration: 5
            })
            .to('.visual .part1_2 .visual_txt', {
                autoAlpha: 0,
                'transform': 'translate(-50%,-15%)',
                duration: 11
            })
            /* //0704 ver3.0 */
            .to('.visual .part2', {
                'transform': 'translateY(-50%)',
                duration: 50
            })
        // self video play 
        selftimefunction()

        /* 0704 ver3.0 */
        // keyv.to('.part2 .overVid',{
        //   autoAlpha:0,
        //   duration:10
        // })
        // .to('.part1',{
        //   autoAlpha:0,
        //   duration:0
        // })
        // .to('.visual .part3',{
        //   autoAlpha:1,
        //   duration:0
        // })
        // .to('.part3',{
        //   'top':'-2500px',
        //   duration:45
        // },'<')
        // .to('.visual .part4',{
        //   autoAlpha:1,
        //   duration:0
        // })
        // .to('.visual .part4',{
        //   'top':'0%',
        //   duration:20
        // })
        // .to('.part4 .textBox',{
        //   autoAlpha:1,
        //   'transform':'translateY(0)',
        //   duration:25
        // },'<')
        /* //0704 ver3.0 */
    }


    // mo anim 
    if (window1024) { }

    // sc1 pc anim 
    else {
        var sc1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".scene1",
                start: "center center",
                scrub: true,
                pin: true,
                end: "+=2000"
            }
        })
            .to('.size2', {
                opacity: 1,
                duration: 1
            })
            .to('.size2', {
                'left': '70%',
                duration: 8
            })
            .to('.size1', {
                'left': '30%',
                autoAlpha: 0.5,
                duration: 8
            }, '<')
            .to('.size1 .tvBlur', {
                autoAlpha: 0.8
            }, '<')
            .to('.size1', {
                'left': '10%',
                autoAlpha: 0,
                duration: 8
            })
            .to('.size2', {
                'left': '30%',
                autoAlpha: 0.5,
                duration: 8
            }, '<')
            .to('.size2 .tvBlur', {
                autoAlpha: 1,
                duration: 5
            }, '<')
            .to('.size3', {
                'left': '70%',
                duration: 8
            }, '<')
            .to('.size3', {
                autoAlpha: 1,
                duration: 1
            }, '<')

            .to('.size2', {
                'left': '10%',
                autoAlpha: 0,
                duration: 8
            })
            .to('.size3', {
                'left': '30%',
                autoAlpha: 0.5,
                duration: 8
            }, '<')
            .to('.size3 .tvBlur', {
                autoAlpha: 1,
                duration: 5
            }, '<')
            .to('.size4', {
                'left': '70%',
                duration: 8
            }, '<')
            .to('.size4', {
                autoAlpha: 1,
                duration: 1
            }, '<')

            .to('.size3', {
                'left': '10%',
                autoAlpha: 0,
                duration: 8
            })
            .to('.size4', {
                'left': '30%',
                autoAlpha: 0.5,
                duration: 8
            }, '<')
            .to('.size4 .tvBlur', {
                autoAlpha: 1,
                duration: 5
            }, '<')
            .to('.size5', {
                'left': '70%',
                duration: 8
            }, '<')
            .to('.size5', {
                autoAlpha: 1,
                duration: 1
            }, '<')

            .to('.size4', {
                'left': '10%',
                autoAlpha: 0,
                duration: 8
            })
            .to('.size5', {
                'left': '30%',
                autoAlpha: 0.5,
                duration: 8
            }, '<')
            .to('.size5 .tvBlur', {
                autoAlpha: 1,
                duration: 5
            }, '<')
            .to('.size6', {
                'left': '70%',
                duration: 8
            }, '<')
            .to('.size6', {
                autoAlpha: 1,
                duration: 1
            }, '<')

            .to('.size5', {
                'left': '10%',
                autoAlpha: 0,
                duration: 8
            })
            .to('.size6', {
                'left': '30%',
                autoAlpha: 0.5,
                duration: 8
            }, '<')
            .to('.size6 .tvBlur', {
                autoAlpha: 1,
                duration: 5
            }, '<')
            .to('.size7', {
                'left': '70%',
                duration: 8
            }, '<')
            .to('.size7', {
                autoAlpha: 1,
                duration: 1
            }, '<')

            // 0926 st
            .to('.size6', {
                'left': '10%',
                autoAlpha: 0,
                duration: 8
            })
            .to('.size7', {
                'left': '30%',
                autoAlpha: 0.5,
                duration: 8
            }, '<')
            .to('.size7 .tvBlur', {
                autoAlpha: 1,
                duration: 5
            }, '<')
            .to('.size8', {
                'left': '70%',
                duration: 8
            }, '<')
            .to('.size8', {
                autoAlpha: 1,
                duration: 1
            }, '<')
        // 0926 ed
    }


    //mo anim
    if (window1024) { }
    //pc anim
    else {
        function roomblurtimefunction() {
            sc2.to('.roomblur1.pc', {
                'visibility': 'visible',
                duration: 0.1
            })
                .to('.visionLogo.pc', {
                    autoAlpha: 0,
                    duration: 1
                }, '<')
            sc2.to('.room2.pc', {
                'visibility': 'hidden',
                duration: 0.1
            })
            for (i = 2; i < 14; i++) {
                sc2.to('.roomblur' + (i) + '.pc', {
                    'visibility': 'visible',
                    duration: 0.1
                })
                if (i >= 2) {
                    sc2.to('.roomblur' + (i - 1) + '.pc', {
                        'visibility': 'hidden',
                        duration: 0.1
                    })
                }
            }
            sc2.to('.roomVid.pc', {
                'visibility': 'visible',
                duration: 0.1
            })
                .to('.dolby.pc', {
                    autoAlpha: 1,
                    duration: 0.5
                }, '<')
                .to('.roomblur13.pc', {
                    'visibility': 'hidden',
                    duration: 0.1
                })

        }

        var sc2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".scene2",
                start: "center center",
                scrub: true,
                pin: true,
                onUpdate: self => {
                    if (self.progress < 0.4 && sc2roomvideoState != 0) {
                        sc2roomvideoState = 0
                    }
                    if (self.progress > 0.58 && sc2roomvideoState != 1) {
                        $('.roomVid.pc').get(0).play();
                        sc2roomvideoState = 1
                    }
                    if (self.progress < 0.60 && sc2aivideoState != 0) {
                        sc2aivideoState = 0
                    }
                },
                end: "+=3700"
            }
        })
            .to('.room1', {
                'transform': 'scale(1)',
                'border-radius': 0,
                duration: 5
            })
            // 0428 st 
            .to('.visionLogo.pc', {
                autoAlpha: 1,
                duration: 5,
                'transform': 'scale(1)',
            }, '<')
            // 0428 ed 
            .to('.room2', {
                autoAlpha: 1,
                duration: 1
            })
            .to('.room2', {
                'clip-path': 'inset(0% 0% 0% 0%)',
                duration: 10
            })
            .to('.room1', {
                autoAlpha: 0,
                duration: 0
            })
        roomblurtimefunction();
        sc2.to('.roomVid', {
            autoAlpha: 1,
            duration: 4
        })
            //roomVidPlay
            .to('.sc2part2', {
                bottom: 0,
                duration: 15
            })
            .to('.sc2part1', {
                autoAlpha: 0,
                duration: 0
            })
        // aiVidPlay
    }

    // sc3
    if (window1024) {
    }
    else {
        var sc3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".scene3",
                start: "center center",
                scrub: true,
                pin: true,
                onEnter: () => {
                    if (sc3tearvideoState != 1) {
                        $('.tearVid.pc').get(0).play();
                        sc3tearvideoState = 1
                    }
                },
                end: "+=500"
            }
        })
            .to('.scene3 .textBox', {
                'transform': 'translate(-50%,-50%)',
                autoAlpha: 1
            })
    }





    if (window1024) { }

    else {

        function designtimefunction() {
            sc4.to('.design1', {
                'visibility': 'visible',
                duration: 0.3
            })
            sc4.to('.design0', {
                'visibility': 'hidden',
                duration: 0.3
            })
            for (i = 2; i < 60; i++) {
                sc4.to('.design' + (i), {
                    'visibility': 'visible',
                    duration: 0.3
                })
                if (i >= 2) {
                    sc4.to('.design' + (i - 1), {
                        'visibility': 'hidden',
                        duration: 0.3
                    })
                }
            }
        }


        var sc4_txt = gsap.timeline({
            scrollTrigger: {
                trigger: ".scene4_txt",
                start: "top 700px",
                scrub: true,
                end: "+=300",
            }
        })
            .to('.scene4_txt', {
                'transform': 'translateY(0)',
                autoAlpha: 1,
                duration: 10
            })



        var sc4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".scene4",
                start: "center center",
                scrub: true,
                pin: true,
                /* 0704 ver3.0 */
                end: "+=4000"
                /* //0704 ver3.0 */
            }
        })
        // sc4video play
        designtimefunction();
        sc4.to('.sc4sqWrap .textBox2', {
            autoAlpha: 1,
            duration: 1
        })
            .to('.sc4sqWrap .textBox2', {
                'bottom': '10vh',
                duration: 13
            })
            .to('.sc4sqWrap .textBox2', {
                autoAlpha: 1,
                duration: 12
            })
            .to('.scene4 .sc4sqWrap .textBox2', {
                autoAlpha: 0,
                duration: 3
            })
        sc4.to('.lifeimg', {
            'clip-path': 'inset(0% 0% 0% 0%)',
            duration: 20
        })
            .to('.scene4 .sc4sqWrap .imgwrap', {
                autoAlpha: 0,
                duration: 0
            })

        /* 0704 ver3.0 */
        // .to('.scene4 .cards.first .fCard',{
        //   'bottom':'50%',
        //   'width':'462px',
        //   'height':'640px',
        //   duration:15
        // })
        // .to('.cards.first.pc',{
        //   'width': '462px',
        //   'height':'640px',
        //   'border-radius':'22px',
        //   'transform':'translateY(27px)',
        //   duration:14
        // },'<')

        // .to('.cards.first',{
        //   autoAlpha:1,
        //   duration:5
        // })
        // .to('.cards.first',{
        //   'transform':'translateY(-15%) scale(0.8)',
        //   autoAlpha:0.5,
        //   duration:13
        // })

        // // module 
        // .to('.cards.second',{
        //   'bottom':'calc(50% - 27px)',
        //   duration:13
        // },'<')
        // .to('.cards.second',{
        //   autoAlpha:1,
        //   duration:5
        // })
        // .to('.cards.second',{
        //   'transform':'translate(-50%,35%) scale(0.8)',
        //   scale:0.8,
        //   autoAlpha:0.5,
        //   duration:13
        // })
        // .to('.cards.first',{
        //   autoAlpha:0,
        //   duration:5
        // },'<')
        // // module 

        // .to('.cards.third',{
        //   'bottom':'calc(50% - 27px)',
        //   duration:13
        // },'<')
        // .to('.cards.third',{
        //   autoAlpha:1,
        //   duration:5
        // })
        /* //0704 ver3.0 */
    }




    let webosSwitch = true
    if (window1024) { }
    else {
        if ($(window).width() > 1921) {
            $('.scene5 .videoBox2').width($(window).width(1920))
            $('.scene5 .videoBox2').height(1920 / 2.03)
        }
        else {
            $('.scene5 .videoBox2').width($(window).width())
            $('.scene5 .videoBox2').height($(window).width() / 2.03)
        }

        var scweb = gsap.timeline({
            scrollTrigger: {
                trigger: ".scene5 .videoBox2",
                start: "top 400px",
                onEnter: () => {
                    if (webosSwitch) {
                        $('.webos.pc').get(0).play()
                        webosSwitch = false
                    }
                }
            }
        })
    }






    $('.tv').attr({ alt: 'Every size of the LG OLED appears on the screen size from the smallest to largest model' })
    $('.tvBlur').attr({ alt: 'Every size of the LG OLED appears on the screen size from the smallest to largest model' })
    $('.shadow').attr({ alt: 'Every size of the LG OLED appears on the screen size from the smallest to largest model' })

    // pc gnb hover 
    if (!window1024) {
        let nowpage = $('.gnb li.on')
        $('.gnb .off').hover(function () {
            $('.gnb li.on').removeClass('on')
            $(this).addClass('on')
        }, function () {
            $(this).removeClass('on')
            $(this).addClass('off')
            nowpage.addClass('on')
        })


        $(window).on('load', function () {
            ScrollTrigger.refresh()
        })
    }
});






