$(function () {
    var mainSwiper = new Swiper(".mainSwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
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
        .addLabel("a")
        .to(".everything .introduce-scrollarea__left", { translateY : 120 }, "a")
        .to(".everything .introduce-scrollarea__right", { translateY : -120 }, "a")

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
        .to(".communication .introduce-scrollarea__left", { translateY : 120 }, "a")
        .to(".communication .introduce-scrollarea__right", { translateY : -120 }, "a")

    

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
        .to(".income .introduce-scrollarea__left", { translateY : 120 }, "a")
        .to(".income .introduce-scrollarea__right", { translateY : -120 }, "a")



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
        document.querySelector("header").classList.add("transparent")
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
        $("body").addClass("scroll-hidden")
        $(".header-group__link").addClass("on")
    })
    $(".header-button__mob-close").click(function(){
        $(".header-button__mob").removeClass("on")
        $(".header.mobile").removeClass("active")
        $("body").removeClass("scroll-hidden")
        $(".header-group__link").removeClass("on")
    })


    // 주메뉴 영역 li 를 저장한다.
    var mbMenuLis = $('.header.mobile .header-nav__list .header-nav__item');
    // 주메뉴(a) 클릭시 해당 .mb_submenu 보여주기
    $.each(mbMenuLis, function(index, item) {
        // 주메뉴 span
        var tempMenu = $(this).find('> a');
        // 각 주메뉴에 따른 서브 메뉴 ul
        var tempSub = $(this).find('.header-nav__sublist');
        // 클릭 처리
        tempMenu.click(function() {
            // 메뉴 토글 기능
            tempSub.slideToggle();
            // 이전에 클릭되었던 mb_submenu 닫기
            // this 의 숫자값을 전달해준다.
            allClose(index);
        });
    });

    // 전달 되는 번호 이외에는 모두 닫기 기능
    function allClose(num) {
        $.each(mbMenuLis, function(index, item) {

            if (num == index) {
                // 숫자값이 서로 같다면 slideup 제외
                return;
            }
            var tempSub = $(this).find('.header-nav__sublist');
            tempSub.slideUp();
        });
    }


    // mobile language menu open and close function
    $(".header.mobile .header-group__info__item").click(function() {
        $(".header.mobile .header-group__info__sub").toggle();
    });

})