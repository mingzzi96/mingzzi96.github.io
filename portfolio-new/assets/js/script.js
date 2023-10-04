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
            // markers: true,
            scrub: 0,
            onEnter: () => {
                $(".intro__desc").addClass("show");
            },
        }
    })
})
