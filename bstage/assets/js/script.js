$(function () {
    var mainSwiper = new Swiper(".mainSwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true
    });
    // 스크롤 감지
    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;

            //스크롤값을 가져온다.
        if(wheel>0){
            $('.header').removeClass('on')
        } else {
        //스크롤 내릴때
            $('.header').addClass('on')
        }
    });
})