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
})