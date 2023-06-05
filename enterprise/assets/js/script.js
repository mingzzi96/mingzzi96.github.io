$(function () {
    gsap.set(".intro__description p", {
        opacity: 0
    })

    const introMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%",
            // markers: true,
            scrub: 0, // 문대기 없애줌
        },
        default: {
            ease: "none" // ease 초기화해서 일정하게 들어가게끔
        }
    })

    introMotion
        .addLabel("a") // 같이 실행되고 싶은곳에만 추가
        .to(".intro__description .bg", { opacity: 1 }, "a")
        .to(".intro__description p:nth-child(1)", { opacity: 1 }, "a")
        .to(".intro__description p:nth-child(1)", { opacity: 0 })
        .to(".intro__description p:nth-child(2)", { opacity: 1 })
        .to(".intro__description p:nth-child(2)", { opacity: 0 })
        .to(".intro__description p:nth-child(3)", { opacity: 1 })
        .to(".intro__description p:nth-child(3)", { opacity: 0 })
        .to(".intro__description p:nth-child(4)", { opacity: 1 })

    const introArwMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro",
            start: "90% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%",
            // markers: true,
            scrub: 0, // 문대기 없애줌
        },
        default: {
            ease: "none" // ease 초기화해서 일정하게 들어가게끔
        }
    })

    introArwMotion
        .to(".intro__description--down-arw", { opacity: 0 })

    // showcase
    // showcase__title--text

    const showcaseMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".showcase",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%",
            // markers: true,
            scrub: 1, // 문대기
        },
        default: {
            ease: "none"
        }
    })

    showcaseMotion
        .from(".showcase__title", { opacity: 0 })
        .to(".showcase .bg", { opacity: 1 })
        .addLabel("a")
        .to(".showcase__title--text:nth-child(1)", { xPercent: 100 }, "a")
        .to(".showcase__title--text:nth-child(3)", { xPercent: -100 }, "a")
        .addLabel("fadeOut")
        .to(".showcase__title", { opacity: 0 }, "fadeOut")
        .to(".showcase .bg", { opacity: 0 }, "fadeOut")


        .to(".showcase__img picture:nth-child(3)", { height: 0 })
        .to(".showcase__img picture:nth-child(2)", { height: 0 })
        .addLabel("fadeIn")
        .to(".showcase .showcase__discription", { opacity: 1 }, "fadeIn")
        .to(".showcase .bg", { opacity: 1 }, "fadeIn")


    // header-dark-area01  menu color change
    ScrollTrigger.create({
        trigger: ".header-dark-area01",
        start: "0% 50%",
        end: "100% 50%",
        // markers: true,
        toggleClass: { targets: "header", className: "dark" }
    })
    // header-dark-area02  menu color change 
    ScrollTrigger.create({
        trigger: ".header-dark-area02",
        start: "0% 50%",
        end: "100% 50%",
        // markers: true,
        toggleClass: { targets: "header", className: "dark" }
    })

    // prove prove--value

    const proveMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".prove--value",
            start: "0% 70%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 1, // 문대기
        },
        default: {
            ease: "none"
        }
    })

    proveMotion
        .addLabel("a")
        .to(".prove--value .prove__stick", { width: "30%" }, "a")
        .to(".prove--value .prove__title--text:nth-child(1) span", { xPercent: -172 }, "a")
        .to(".prove--value .prove__title--text:nth-child(3) span", { xPercent: 134 }, "a")


    // dark area
    ScrollTrigger.create({
        trigger: ".dark-area",
        start: "0% 50%",
        end: "100% 50%",
        // markers: true,
        toggleClass: { targets: "body", className: "dark" }
    })

    // slideMotion
    const slideMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".slide--possibility",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 0, // 문대기
            invalidateOnRefresh: true, // 반응형 잘 먹히도록
        },
        default: {
            ease: "none"
        }
    })

    slideMotion
        .addLabel("a")
        .to(".slide--possibility .slide__slider", { xPercent: -100 }, "a")
        .to(".slide--possibility .slide__slider", {
            x: () => {
                return window.innerWidth;
            }
        }, "a")

    // colorband
    gsap.set(".colorband__item:nth-child(1),.colorband__item:nth-child(2)", {
        xPercent: -50
    })
    gsap.set(".colorband__item:nth-child(3)", {
        xPercent: 50
    })
    const colorbandMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".colorband",
            start: "0% 95%", // 트리거 기준  / 윈도우 기준
            end: "100% 30%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 1, // 문대기
        },
        default: {
            ease: "none"
        }
    })

    colorbandMotion
        .to(".colorband__item", { xPercent: 0 })
        .addLabel("a")
        .to(".colorband .bg", { opacity: 1 }, "a") // label-=1초 앞서서 들어가게끔 초단위
        .to(".colorband__text", { opacity: 1 }, "a")

    // everything Motion
    ScrollTrigger.create({
        trigger: ".everything",
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        scrub: 0,
        onEnter: () => {
            $(".slide--unchange").addClass("hide");
            $(".everything").addClass("show");
        },
        onLeaveBack: () => {
            // start 지점을 빠져나갔을때
            $(".slide--unchange").removeClass("hide");
            $(".everything").removeClass("show");
        }
    })

    //  slide--service Motion
    ScrollTrigger.create({
        trigger: ".slide--service",
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        scrub: 0,
        onEnter: () => {
            $(".slide--service").addClass("show");
            $(".everything").removeClass("show");
        },
        onLeave: () => {
            $(".slide--service").removeClass("show");
        },
        onEnterBack: () => {
            // start 지점을 빠져나갔을때
            $(".slide--service").addClass("show");
        },
        onLeaveBack: () => {
            // start 지점을 빠져나갔을때
            $(".slide--service").removeClass("show");
            $(".everything").addClass("show");
        }
    })


    // slideMotion
    const slideUnchangeMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".slide--unchange",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 0, // 문대기
            invalidateOnRefresh: true, // 반응형 잘 먹히도록
        },
        default: {
            ease: "none"
        }
    })

    slideUnchangeMotion
        .addLabel("a")
        .to(".slide--unchange .slide__slider", { xPercent: -100 }, "a")
        .to(".slide--unchange .slide__slider", {
            x: () => {
                return window.innerWidth / 3 + 23;
            }
        }, "a")
        .to(".slide--unchange .slide__card--list .slide__card--item:last-child img:nth-child(1)", { opacity: 0 }, "a")
        .to(".slide--unchange .slide__card--list .slide__card--item:last-child img:nth-child(2)", { opacity: 1 }, "a")
        .to(".slide--unchange .slide__card--list .slide__card--item:last-child img:nth-child(2)", { opacity: 0 })
        .to(".slide--unchange .slide__card--list .slide__card--item:last-child .text-gradient", { opacity: 1 })

    // slideMotion
    const slideServiceMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".slide--service",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 0, // 문대기
            invalidateOnRefresh: true, // 반응형 잘 먹히도록
        },
        default: {
            ease: "none"
        }
    })

    slideServiceMotion
        .addLabel("a")
        .to(".slide--service .slide__slider", { xPercent: -100 }, "a")
        .to(".slide--service .slide__slider", {
            x: () => {
                return window.innerWidth / 3;
            }
        }, "a")


    // glowMotion
    const gloveMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".glow",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 0, // 문대기
            onEnter: () => {
                $(".glow").addClass("show");
            },
            onLeaveBack: () => {
                // start 지점을 빠져나갔을때
                $(".glow").removeClass("show");
            }
        },
        default: {
            ease: "none"
        }
    })

    gloveMotion
        .addLabel("a")
        .to(".glow .everything__card--glow", { opacity: 1, duration: 2 }, "a")
        .to(".glow .everything__card--right p", { opacity: 1, duration: 3 }, "a")


    marqueeMotion = gsap.to(".marquee__join", {
        duration: 45,
        xPercent: 100,
        repeat: -1,
        ease: "none",
        // paused: true
    })
    // marquee
    ScrollTrigger.create({
        trigger: ".footer",
        start: "100% 100%",
        end: "100% 100%",
        // markers: true,
        onEnter: () => {
            marqueeMotion.play();
            $(".footer__marquee").addClass("show");
        },
        onLeaveBack: () => {
            // start 지점을 빠져나갔을때
            marqueeMotion.pause();
            $(".footer__marquee").removeClass("show");
        }
    })

    // prove prove--asset

    const proveAssetMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".prove--asset",
            start: "0% 70%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 1, // 문대기
        },
        default: {
            ease: "none"
        }
    })

    proveAssetMotion
        .addLabel("a")
        .to(".prove--asset .prove__stick", { width: "30%" }, "a")
        .to(".prove--asset .prove__title--text:nth-child(1) span", { xPercent: -114 }, "a")
        .to(".prove--asset .prove__title--text:nth-child(3) span", { xPercent: 120 }, "a")

    // slideMotion slide--asset
    const slideAssetMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".slide--asset",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 0, // 문대기
            invalidateOnRefresh: true, // 반응형 잘 먹히도록
        },
        default: {
            ease: "none"
        }
    })

    slideAssetMotion
        .addLabel("a")
        .to(".slide--asset .slide__slider", { xPercent: -100 }, "a")
        .to(".slide--asset .slide__slider", {
            x: () => {
                return window.innerWidth;
            }
        }, "a")

    // slideAssetMotino - guide_text motion
    const guideTextMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".slide--asset",
            start: "30% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 0, // 문대기
        },
        default: {
            ease: "none"
        }
    })

    guideTextMotion
        .addLabel("a")
        .to(".slide--asset .guide_text--item:nth-child(1)", { opacity: 0 }, "a")
        .to(".slide--asset .guide_text--item:nth-child(2)", { opacity: 1 }, "a")

    // creator
    const creatorMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".creator",
            start: "00% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 1, // 문대기
        },
        default: {
            ease: "none"
        }
    })

    creatorMotion
        .to(".creator__title", { opacity: 1 })
        .to(".creator .intro__description--down-arw", { opacity: 1 }, "-=0.7")
        .to(".creator .intro__description--down-arw", { opacity: 0 })


    // slideMotion slide--creator
    const slideCreatorMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".slide--creator",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 100%", // 트리거 기준  / 윈도우 기준
            // markers: true,
            scrub: 0, // 문대기
            invalidateOnRefresh: true, // 반응형 잘 먹히도록
        },
        default: {
            ease: "none"
        }
    })

    slideCreatorMotion
        .addLabel("a")
        .to(".slide--creator .slide__slider", { xPercent: -100 }, "a")
        .to(".slide--creator .slide__slider", {
            x: () => {
                return window.innerWidth;
            }
        }, "a")

})


// video 로드 확인하여 이미지 opacity 0으로 만들어주기
function videoLoad() {
    console.log("video loaded!")
    document.querySelector(".intro picture").classList.add("loaded")
}

// lang menu
let langChangeBtn = document.querySelector(".header__lang");
let langChangeSubNav = document.querySelector(".header__lang--subnav");
langChangeBtn.addEventListener("click", function () {
    langChangeSubNav.classList.toggle("show");
})

// header 특정 위치 이상부터에서만 보이도록
window.addEventListener("scroll", function () {
    if (document.querySelector("html").scrollTop > 500) {
        document.querySelector("header").classList.add("show")
    } else {
        document.querySelector("header").classList.remove("show")
    }
})

// goTop 버튼 보여주기 제어
window.addEventListener("scroll", function () {
    let htmlTop = document.querySelector("html").scrollTop;
    let showcase = document.querySelector(".showcase").offsetTop;

    // goTop 버튼 제어
    if (showcase <= htmlTop) {
        $(window).bind('wheel', function (event) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // scroll up
                document.querySelector(".goTop").classList.add("show")
            }
            else {
                // scroll down
                document.querySelector(".goTop").classList.remove("show")
            }
        });
    } else {
        document.querySelector(".goTop").classList.remove("show")
    }
})

// goTop 버튼 클릭 제어

document.querySelector(".goTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
