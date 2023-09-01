$(function () {

    const mainTextMove = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 0%",
            // markers: true,
            scrub: 0, // 문대기 없애줌
        },
        default: {
            ease: "none" // ease 초기화해서 일정하게 들어가게끔
        }
    })

    mainTextMove
        .addLabel("a") // 같이 실행되고 싶은곳에만 추가
        .to(".intro h1:nth-child(1)", { x: -90 + "%" }, "a")
        .to(".intro h1:nth-child(3)", { x: -90 + "%" }, "a")
        .to(".intro h1:nth-child(2)", { x: 90 + "%" }, "a")
        .to(".intro h1:nth-child(4)", { x: 90 + "%" }, "a")





    const moveExTextMove = gsap.timeline({
        scrollTrigger: {
            trigger: ".move.ex",
            start: "-40% 0%", // 트리거 기준  / 윈도우 기준
            end: "50% 0%",
            markers: true,
            scrub: 0, // 문대기 없애줌
        },
        default: {
            ease: "none" // ease 초기화해서 일정하게 들어가게끔
        }
    })

    moveExTextMove
        .addLabel("a") // 같이 실행되고 싶은곳에만 추가
        .to(".move.ex h2:nth-child(1)", { x: 0 + "%", opacity:1 }, "a")
        .to(".move.ex h2:nth-child(3)", { x: 0 + "%", opacity:1 }, "a")
        .to(".move.ex h2:nth-child(2)", { x: 0 + "%", opacity:1 }, "a")
        // .to(".move.ex h2", { opacity: 0 })

})
