$(function () {
    var mainSwiper = new Swiper(".mainSwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1100
    });
    // 스크롤 감지
    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;

        //스크롤값을 가져온다.
        if(wheel>0){
            $('.header').addClass('on')
        } else {
        //스크롤 내릴때
            $('.header').removeClass('on')
        }
    });

    // scroll image
    const imageControll1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".owner",
            start: "0% 0%",
            end: "100% -100%",
            // markers: true,
            scrub: 1,
        }
    })

    imageControll1
        .to(".everything .introduce-scrollarea__left", { translateY : 120 })
        .to(".everything .introduce-scrollarea__right", { translateY : -120 })

    const imageControll2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".everything",
            start: "0% 0%",
            end: "100% -100%",
            // markers: true,
            scrub: 1,
        }
    })

    imageControll2
        .to(".communication .introduce-scrollarea__left", { translateY : 120 })
        .to(".communication .introduce-scrollarea__right", { translateY : -120 })

    

    const imageControll3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".communication",
            start: "0% 0%",
            end: "100% -100%",
            // markers: true,
            scrub: 1,
        }
    })

    imageControll3
        .to(".income .introduce-scrollarea__left", { translateY : 120 })
        .to(".income .introduce-scrollarea__right", { translateY : -120 })



    // business-bg
    ScrollTrigger.create({
        trigger: ".business",
        start: "-70% 0%",
        end: "200% 180%",
        // markers: true,
        onEnter: () => {
            $(".business-bg__left").addClass("on");
        }
    })
    
    function setDeviceSize(){
        window.addEventListener("scroll", function () {
            wScrollTop = document.querySelector("html").scrollTop;
        })
    }

    setDeviceSize();
    window.addEventListener('resize', function(){
        setDeviceSize();
    });

    // header 특정 위치 이상부터에서만 보이도록
    window.addEventListener("scroll", function () {
        $(window).bind('wheel', function (event) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // scroll up
                document.querySelector("header").classList.add("on")
                if(wScrollTop == 0){
                    document.querySelector("header").classList.add("transparent")
                }else {
                    document.querySelector("header").classList.remove("transparent")
                }
            }
            else {
                // scroll down
                document.querySelector("header").classList.remove("on")
                document.querySelector("header").classList.remove("transparent")
            }
        });
    })

    // mobile menu open and close
    $(".header-button__mob-open").click(function(){
        $(".header-button__mob").addClass("on")
        $(".header.mobile").addClass("active")
    })
    $(".header-button__mob-close").click(function(){
        $(".header-button__mob").removeClass("on")
        $(".header.mobile").removeClass("active")
    })

})