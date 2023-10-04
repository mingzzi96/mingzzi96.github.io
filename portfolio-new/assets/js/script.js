$(function () {

    const mainCardsMove = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro",
            start: "0% 0%", // 트리거 기준  / 윈도우 기준
            end: "100% 0%",
            // markers: true,
            scrub: 1, 
        },
        default: {
            ease: "none"
        }
    })

    mainCardsMove
        .to(".intro .intro__move--list", { x: -100 + "%" })


    const mainDescTextShow = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro .intro__move--list",
            start: "20% 0%",
            end: "100% 0%",
            markers: true,
            scrub: 0,
            onEnter: () => {
                $(".intro__desc").addClass("show");
            },
        }
    })

    // mainDescTextShow
    //     .to('.intro__desc--textbox:nth-child(1) p', { y : 0, opacity:1 })
    //     .to('.intro__desc--textboxt:nth-child(2) p', { y : 0, opacity:1 })
    //     .to('.intro__desc--textbox:nth-child(3) p', { y : 0, opacity:1 })
    //     .to('.intro__desc--textbox:nth-child(4) p', { y : 0, opacity:1 })
    //     .to('.intro__desc--textbox:nth-child(5) p', { y : 0, opacity:1 })
})
