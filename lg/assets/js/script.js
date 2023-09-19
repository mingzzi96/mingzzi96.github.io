$(function () {

    // intro picture imgs set
    for (i = 0; i <= 35; i++) {
        $(".intro .intro__picture .intro--sticky").append(`<img class='intro__img${i}' src='assets/images/OVERVIEW_KV_02_PC_${String(i).padStart(5, '0')}.jpg' alt='main scroll images'>`);
    }

    const introPicture = gsap.timeline({
        scrollTrigger: {
            trigger: ".video-sticky",
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
    }

    introPictureFunction();
    // $(".intro__video video").get(0).stop();

    const stickyArea = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro .sticky-area2",
            start: "0% 0%",
            end: "100% 200%",
            // markers: true,
            scrub: 0,
        }
    })

    stickyArea
        .to('.intro__picture .intro--discription--text:nth-child(1)', { opacity: 1, 'top': '50%' })
        .to('.intro__picture .intro--discription--text:nth-child(1)', { opacity: 0, 'top': '40%' })

        .to('.intro__picture .intro--discription--text:nth-child(2)', { opacity: 1, 'top': '50%' })
        .to('.intro__picture .intro--discription--text:nth-child(2)', { opacity: 0, 'top': '40%' })

        .addLabel("a")
        .to('.intro__picture .intro--discription--text:nth-child(3)', { opacity: 1, 'top': '50%' }, "a")
        .to('.intro__video', { opacity: 1,
            onEnter:() => {
                $(".intro__video video").get(0).play();
            }
        }, "a")
        .to('.intro__picture .intro--discription--text:nth-child(3)', { delay:1, opacity: 0, 'top': '40%' })
        // .addLabel("b")
        // .to('.intro__picture .intro--discription--text:nth-child(3)', { opacity: 1, 'top': '40%' }, "b")
        // .to('.intro__picture .intro__video', {opacity : 1, 
        //     onEnter: function(){
        //         $(".intro__video video").get(0).play();
        //     }
        // }, "b")
        // .to('.intro__picture .intro--discription--text:nth-child(3)', { opacity: 0, 'top': '45%' }, "b")

    //intro video motion
    // const introVideo = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".intro__video",
    //         start: "0% 0%",
    //         end: "100% 100%",
    //         // markers: true,
    //         scrub: 1,
    //         onEnter: () => {
    //             $(".intro__video video").get(0).play();
    //         },
    //         onLeaveBack: () => {
    //             // start 지점을 빠져나갔을때
    //             $(".intro__video video").get(0).stop();
    //         }
    //     }
    // })

    // video 로드 확인하여 애니메이션 실행
    // function videoLoad() {
    //     console.log("loaded!")
    //     introVideo
    //         .to(".intro__video video", { opacity: 1 })
    //         .to('.intro__video .intro--discription--text:nth-child(1)', { opacity: 1, 'top': '50%' })
    //         .addLabel("a")
    //         .to('.intro__video .intro--discription--text:nth-child(1)', { opacity: 0, 'top': '40%' }, "a")
    //         .to('.intro__video .intro--discription--text:nth-child(2)', { opacity: 1, 'top': '50%' }, "a")
    //         .to('.intro__video .intro--discription--text:nth-child(2)', { opacity: 0, 'top': '40%' })
    // }

    // videoLoad()


    // pixcel imgs set
    // for (i = 1; i < 50; i++) {
    //     $(".display .display__pixcel .display__pixcel--sticky").append(`<img class='pixcelImg${i} 'src='assets/images/OVERVIEW_DISPLAY_PC_${String(2 * i - 1).padStart(5, '0')}.jpg' alt='pixcel scroll images'>`);
    // }
    // // pixcel picture imgs motion

    // const pixcelPicture = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".display__pixcel",
    //         start: "0% 0%",
    //         end: "100% 100%",
    //         // markers: true,
    //         scrub: 1,
    //     }
    // })

    // function pixcelPictureFunction() {
    //     pixcelPicture.to('.pixcelImg1', {
    //         'visibility': 'visible',
    //         duration: 0.2
    //     })
    //     pixcelPicture.to('.pixcelImg0', {
    //         'visibility': 'hidden',
    //         duration: 0.2
    //     })
    //     for (i = 2; i < 97; i++) {
    //         pixcelPicture.to('.pixcelImg' + (i), {
    //             'visibility': 'visible',
    //             duration: 0.2
    //         })
    //         if (i >= 2) {
    //             pixcelPicture.to('.pixcelImg' + (i - 1), {
    //                 'visibility': 'hidden',
    //                 duration: 0.2
    //             })
    //         }
    //     }
    //     // 마지막에 이미지 머물도록이 안되어용
    //     pixcelPicture.to('.pixcelImg49', {
    //         'visibility': 'visible',
    //         duration: 0.2
    //     })
    // }

    // pixcelPictureFunction()

    // pixcel NEW SOLUTION

    const canvas = document.querySelector('#canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = 960;
    canvas.height = 900;

    const frameCount = 49;

    const currentFrame = (idx) => {
        return `assets/images/OVERVIEW_DISPLAY_PC_${String(2 * idx - 1).padStart(5, '0')}.jpg`;
    }; // 리턴 필수

    const images = [];
    const card = {
        frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i + 1);
        images.push(img);
    }

    gsap.to(card, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
        trigger: '.display__pixcel',
        scrub: 1,
        start: '0% 0%',
        end: '100% 100%',
        // pin: true,
        // markers: true
        },
        onUpdate: render,
    });


    images[0].onload = render;

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[card.frame], 0, 0);
    }



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

    // ani = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".box1",
    //         start: "0% 0%",
    //         end: "100% 0%",
    //         markers: true
    //     }
    // })

    // ani
    // .to("box1", {x:500})
    // .to("box2", {x:500})
    // .to("box3", {x:500})

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
        $(".movie .movie__img2").append(`<img class='movieImg${i}' src='assets/images/room_blur${String(i)}.jpg' alt=''>`);
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
        $(".design .design__img--wrap1").append(`<img class='design__img${i}' src='assets/images/OVERVIEW_DESIGN_PC_FHD_${String(i).padStart(5, '0')}.jpg' alt='design discription image'>`);
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

    // slide sticky

    const swiperSticky = new Swiper('.stickySwiper', {
        slidesPerView: 6,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiperSticky.on('slideChange', function () {
        idx = swiperSticky.realIndex;
        swiperTable.slideToLoop(idx);
    });

    // slide table

    const swiperTable = new Swiper('.tableSwiper', {
        slidesPerView: 6,
    });

    swiperTable.on('slideChange', function () {
        idx = swiperTable.realIndex;
        swiperSticky.slideToLoop(idx);
    });

})

// compare section see more button control
function seemoreFunction() {
    let compareTableHeight = document.querySelector(".compare__table");
    let seemoreButton = document.querySelector(".compare__button--more button");

    compareTableHeight.style.height = "auto"
    seemoreButton.style.display = "none"
    document.querySelector(".compare__button--more").classList.add("hideGradient")
}
