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

    // prove

    const proveMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".prove",
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
        .to(".prove__stick", { width: "30%" }, "a")
        .to(".prove__title--text:nth-child(1) span", { xPercent: -172 }, "a")
        .to(".prove__title--text:nth-child(3) span", { xPercent: 134 }, "a")


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
            scrub: 1, // 문대기
            invalidateOnRefresh: true, // 반응형 잘 먹히도록
        },
        default: {
            ease: "none"
        }
    })

    slideMotion
        .addLabel("a")
        .to(".slide__slider", { xPercent: -100 }, "a")
        .to(".slide__slider", {
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
        .to(".colorband .bg", { opacity: 1 }, "a-=0.3") // -=1초 앞서서 들어가게끔 초단위
        .to(".colorband__text", { opacity: 1 }, "a")


    marqueeMotion = gsap.to(".marquee__join", {
        duration: 10,
        xPercent: 100,
        repeat: -1,
        ease: "none",
        paused: true
    })
    // marquee
    ScrollTrigger.create({
        trigger: ".footer",
        start: "100% 100%",
        end: "100% 100%",
        markers: true,
        onEnter: () => {
            marqueeMotion.play()
        },
        onLeaveBack: () => {
            // start 지점을 빠져나갔을때
            marqueeMotion.pause()
        }
    })

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

// header white/black 효과 넣어주기
// function headerColorChange() {

//     window.addEventListener("scroll", function () {
//         let htmlTop = document.querySelector("html").scrollTop;
//         let showcase = document.querySelector(".showcase").offsetTop;
//         let challengeTop = document.querySelector(".challenge").offsetTop;
//         let possibleTop = document.querySelector(".slide--possibility").offsetTop;
//         let challengeAssetTop = document.querySelector(".challenge--asset").offsetTop;

//         if (challengeTop <= htmlTop && htmlTop < possibleTop) {
//             // section challenge보다 htmlTop이 더 클때
//             document.querySelector("header").classList.remove("white")
//             document.querySelector("body").classList.remove("dark")
//         } else if (challengeTop <= htmlTop && possibleTop <= htmlTop && htmlTop < challengeAssetTop) {
//             // section slide--possibility htmlTop이 더 클때
//             document.querySelector("header").classList.add("white")
//             document.querySelector("body").classList.add("dark")
//         } else if (challengeAssetTop <= htmlTop) {
//             // section challenge--asset htmlTop이 더 클때
//             document.querySelector("header").classList.remove("white")
//             document.querySelector("body").classList.remove("dark")
//         } else {
//             // 초기화
//             document.querySelector("header").classList.add("white")
//             document.querySelector("body").classList.remove("dark")
//         }

//         // goTop 버튼 제어
//         if (showcase <= htmlTop) {
//             $(window).bind('wheel', function (event) {
//                 if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
//                     // scroll up
//                     document.querySelector(".goTop").classList.add("show")
//                 }
//                 else {
//                     // scroll down
//                     document.querySelector(".goTop").classList.remove("show")
//                 }
//             });
//         } else {
//             document.querySelector(".goTop").classList.remove("show")
//         }
//     })
// }

// goTop 버튼 클릭 제어

document.querySelector(".goTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



// headerColorChange()
// window.addEventListener("resize", function () {
//     headerColorChange()
// })

// footer marquee text
// const pTag1 = document.querySelector('.footer__marquee');

// const text1 = '<div class="marquee__join--item green"><span>JOIN</span><i>US</i></div><div class="marquee__join--item pink"><span>JOIN</span><i>US</i></div><div class="marquee__join--item blue"><span>JOIN</span><i>US</i></div><div class="marquee__join--item green"><span>JOIN</span><i>US</i></div><div class="marquee__join--item pink"><span>JOIN</span><i>US</i></div><div class="marquee__join--item blue"><span>JOIN</span><i>US</i></div>'

// const textArr1 = [];
// textArr1.push(text1);

// function initTexts(element, textArray) {
//     textArray.push(...textArray)
//     element.insertAdjacentHTML("afterbegin", textArray);
// }
// initTexts(pTag1, textArr1);

// let count1 = 0;

// function marqueeText(count, element, direction) {
//     if (count > element.scrollWidth / 2) {
//         element.style.transform = `translateX(0)`
//         count = 0
//     }
//     element.style.transform = `translateX(${count * direction}px)`;
//     return count;
// }

// function animate() {
//     count1++;

//     count1 = marqueeText(count1, pTag1, 1);
//     // direction -1이면 왼쪽으로 흐르고 1은 오른쪽으로 흐름
//     // 대신 css로 전체 영역을 오른쪽 끄트머리에 맞춰주어야함 flex로 end 해주거나, right 0

//     window.requestAnimationFrame(animate)
// }

// animate()



// 스크롤 맨아래 감지
function detectBottom() {
    let scrollTop = $(window).scrollTop();
    let innerHeight = $(window).innerHeight();
    let scrollHeight = $('body').prop('scrollHeight');
    if (scrollTop + innerHeight >= scrollHeight) {
        $(".footer__marquee").addClass("show");
        return true;
    } else {
        $(".footer__marquee").removeClass("show");
        return false;
    }
}

$(window).scroll(function () {
    detectBottom()
});