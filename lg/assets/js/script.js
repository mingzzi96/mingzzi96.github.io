$(function () {

    // intro picture imgs set
    for (i = 0; i <= 35; i++) {
        $(".intro .intro__picture .intro--sticky").append(`<img class='intro__img${i}' src='https://www.lg.com/uk/why-lgoled/images/overview/kv/OVERVIEW_KV_02_PC_${String(i).padStart(5, '0')}.jpg' alt=''>`);
    }

    const introPicture = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro__picture",
            start: "0% 0%",
            end: "100% 100%",
            // markers: true,
            scrub: 1,
        }
    })
    // intro picture imgs motion
    function introPictureFunction() {
        introPicture.to('.intro__img1', {
            'visibility': 'visible',
            duration: 0.2
        })
        introPicture.to('.intro__img0', {
            'visibility': 'hidden',
            duration: 0.2
        })
        for (i = 2; i < 35; i++) {
            introPicture.to('.intro__img' + (i), {
                'visibility': 'visible',
                duration: 0.2
            })
            if (i >= 2) {
                introPicture.to('.intro__img' + (i - 1), {
                    'visibility': 'hidden',
                    duration: 0.2
                })
            }
        }

        introPicture
            .to('.intro__picture .intro--discription--text:nth-child(1)', { opacity: 1, 'top': '50%' }, "-=3")
            .addLabel("a")
            .to('.intro__picture .intro--discription--text:nth-child(1)', { opacity: 0, 'top': '40%' }, "a-=2.5")
            .to('.intro__picture .intro--discription--text:nth-child(2)', { opacity: 1, 'top': '50%' }, "a-=2.5")
            .to('.intro__picture .intro--discription--text:nth-child(2)', { opacity: 0, 'top': '40%' }, "-=1.5")
    }

    introPictureFunction();

    //intro video motion
    const introVideo = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro__video",
            start: "0% 0%",
            end: "100% 100%",
            // markers: true,
            scrub: 1,
            onEnter: () => {
                $(".intro__video video").get(0).play();
            },
            onLeaveBack: () => {
                // start 지점을 빠져나갔을때
                $(".intro__video video").get(0).stop();
            }
        }
    })

    // video 로드 확인하여 애니메이션 실행
    function videoLoad() {
        console.log("loaded!")
        introVideo
            .to(".intro__video video", { opacity: 1 })
            .to('.intro__video .intro--discription--text:nth-child(1)', { opacity: 1, 'top': '50%' })
            .addLabel("a")
            .to('.intro__video .intro--discription--text:nth-child(1)', { opacity: 0, 'top': '40%' }, "a")
            .to('.intro__video .intro--discription--text:nth-child(2)', { opacity: 1, 'top': '50%' }, "a")
            .to('.intro__video .intro--discription--text:nth-child(2)', { opacity: 0, 'top': '40%' })
    }

    videoLoad()


    // pixcel imgs set
    for (i = 1; i < 50; i++) {
        $(".display .display__pixcel .display__pixcel--sticky").append(`<img class='pixcelImg${i} 'src='https://www.lg.com/uk/why-lgoled/images/overview/self/OVERVIEW_DISPLAY_PC_${String(2 * i - 1).padStart(5, '0')}.jpg' alt=''>`);
    }
    // pixcel picture imgs motion

    const pixcelPicture = gsap.timeline({
        scrollTrigger: {
            trigger: ".display__pixcel",
            start: "0% 0%",
            end: "100% 100%",
            // markers: true,
            scrub: 1,
        }
    })

    function pixcelPictureFunction() {
        pixcelPicture.to('.pixcelImg1', {
            'visibility': 'visible',
            duration: 0.2
        })
        pixcelPicture.to('.pixcelImg0', {
            'visibility': 'hidden',
            duration: 0.2
        })
        for (i = 2; i < 97; i++) {
            pixcelPicture.to('.pixcelImg' + (i), {
                'visibility': 'visible',
                duration: 0.2
            })
            if (i >= 2) {
                pixcelPicture.to('.pixcelImg' + (i - 1), {
                    'visibility': 'hidden',
                    duration: 0.2
                })
            }
        }
    }

    pixcelPictureFunction()

    // vivid video control

    const vividVideoControl = gsap.timeline({
        scrollTrigger: {
            trigger: ".display__vivid",
            start: "100% 100%",
            end: "200% 200%",
            // markers: true,
            scrub: 0,
            onEnter: () => {
                $(".display__vivid video").get(0).play();
            },
            onLeaveBack: () => {
                // start 지점을 빠져나갔을때
                $(".display__vivid video").get(0).stop();
            },
            onLeave: () => {
                // start 지점을 빠져나갔을때
                $(".display__vivid video").get(0).stop();
            }
        }
    })

    // size picture motion
    // 이해가 전혀 안되는 부분 ,,,
    const sizePictureMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".display__size",
            start: "center center",
            scrub: true,
            end: "+=2000"
        }
    })
    sizePictureMotion
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
        .to('.size1 .tv--blur', {
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
        .to('.size2 .tv--blur', {
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
        .to('.size3 .tv--blur', {
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
        .to('.size4 .tv--blur', {
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
        .to('.size5 .tv--blur', {
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
        .to('.size6 .tv--blur', {
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
        .to('.size7 .tv--blur', {
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


    // movie picture imgs set
    for (i = 1; i < 14; i++) {
        $(".movie .movie__img2").append(`<img class='movieImg${i}' src='https://www.lg.com/uk/why-lgoled/images/overview/room_blur${String(i)}.jpg' alt=''>`);
    }
    // movie img motion
    const movieMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".movie",
            start: "0% 0%",
            end: "100% 100%",
            // markers: true,
            scrub: 1,
        }
    })

    // intro picture imgs motion
    function moviePictureFunction() {
        movieMotion.addLabel("a")
        movieMotion.to('.movie .movie__img img:nth-child(1)', { 'transform': 'scale(1)' }, "a")
        movieMotion.to('.movie .movie__img img:nth-child(1)', { 'border-radius': '0px' }, "a")
        movieMotion.to('.movie .movie__img img:nth-child(2)', { 'clip-path': 'inset(0% 0% 0%)' })
        for (i = 1; i < 14; i++) {
            movieMotion.to('.movie .movieImg' + (i), {
                'visibility': 'visible',
                duration: 0.2
            })
        }
        // 여기 안에서 onEnter 쓸 수 있는 방법이 있을까요?
        // movieMotion.to('.movie .movie__video video', { 'display': 'block' })
        movieMotion.to('.movie .movie__scroll', { bottom: 0 })
    }

    moviePictureFunction()


    // game video control
    const gameVideoControl = gsap.timeline({
        scrollTrigger: {
            trigger: ".game",
            start: "0% 0%",
            end: "100% 100%",
            // markers: true,
            scrub: 1,
            onEnter: () => {
                $(".game__video video").get(0).play();
            },
            onLeaveBack: () => {
                // start 지점을 빠져나갔을때
                $(".game__video video").get(0).stop();
            }
        }
    })

    gameVideoControl
        .to(".game__title", { opacity: 1 })


    // design picture imgs set
    for (i = 0; i <= 59; i++) {
        $(".design .design__img--wrap1").append(`<img class='design__img${i}' src='https://www.lg.com/uk/why-lgoled/images/overview/design_sq/OVERVIEW_DESIGN_PC_FHD_${String(i).padStart(5, '0')}.jpg' alt='design discription image'>`);
    }

    const designPictureMotion = gsap.timeline({
        scrollTrigger: {
            trigger: ".design__sticky",
            start: "0% 0%",
            end: "100% 100%",
            // markers: true,
            scrub: 1,
        }
    })

    // design picture imgs motion
    function designPictureFunction() {
        designPictureMotion.to('.design__img1', {
            'visibility': 'visible',
            duration: 0.2
        })
        designPictureMotion.to('.design__img0', {
            'visibility': 'hidden',
            duration: 0.2
        })
        for (i = 2; i <= 59; i++) {
            designPictureMotion.to('.design__img' + (i), {
                'visibility': 'visible',
                duration: 0.2
            })
            if (i >= 2) {
                designPictureMotion.to('.design__img' + (i - 1), {
                    'visibility': 'hidden',
                    duration: 0.2
                })
            }
        }

        designPictureMotion
            .to('.design .design__discription', { opacity: 1, bottom: 70, duration: 4 })
            .to('.design .design__img--wrap2', { "clip-path": "inset(0% 0% 0% 0%)", duration: 10 })
    }

    designPictureFunction()

    // smart video control
    const smartVideoControl = gsap.timeline({
        scrollTrigger: {
            trigger: ".smart",
            start: "0% 50%",
            end: "100% 100%",
            // markers: true,
            scrub: 0,
            onEnter: () => {
                $(".smart__video video").get(0).play();
            },
            onLeaveBack: () => {
                // start 지점을 빠져나갔을때
                $(".smart__video video").get(0).stop();
            }
        }
    })

})
