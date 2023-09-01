window.onload = function() {

  var swiper = new Swiper('.main_slide', {
    pagination: {
      el: '.main_slide .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
      navigation: {
        nextEl: '.main_vis .btn.next',
        prevEl: '.main_vis .btn.prev',
        },
      loop: true, // 슬라이드 무한 반복
			autoplay: {
				delay: 3000,
			},
      speed: 1000,
      });

  var swiper = new Swiper('.lineup_slide', {
      navigation: {
        nextEl: '.lineup_slide .btn.next',
        prevEl: '.lineup_slide .btn.prev',
        },
      loop: true, // 슬라이드 무한 반복
      slidesPerView: 5,
      spaceBetween: 0, // 슬라이드 간의 거리(px 단위)
      centeredSlides: true,// 활성 슬라이드는 가운데에 배치됩니다.
      });

      // (좌우) 버튼 보이고 숨기기
      $('.lineup_slide').mouseenter(function() {
          $('.lineup_slide .btn.prev').fadeIn();
          $('.lineup_slide .btn.next').fadeIn();
      });
      $('.lineup_slide').mouseleave(function() {
          $('.lineup_slide .btn.prev').fadeOut();
          $('.lineup_slide .btn.next').fadeOut();
      });
    
  var swiper = new Swiper('.event_slide', {
      pagination: {
        // type: 'bullets',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동
        el: '.event_slide .swiper-pagination',
            },
        slidesPerView: 'auto', // 너비를 주고싶을 때
        spaceBetween: 20, // 슬라이드 간의 거리(px 단위)
        loop: true, // 슬라이드 무한 반복
        });

  var swiper = new Swiper('.news_slide', {
    pagination: {
      el: '.news_slide .swiper-pagination',
      // type: 'bullets',
      clickable : true, // 페이징을 클릭하면 해당 영역으로 이동
      },
      loop: true, // 슬라이드 무한 반복
      slidesPerView: 'auto',
      centeredSlides: true,// 활성 슬라이드는 가운데에 배치됩니다.
      });

      // 창을 닫아도 유튜브가 계속 되기때문에 링크를 추가 및 삭제를 해줘야
      // 닫았을 때에 재생이 멈춤
      $('.media_wrap a').click(function(){
        $('.media_wrap .pop').addClass('on');
        // 띄어쓰기 절대 안돼
        $('.ifm_wrap').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/Oibog1I2nag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      })
      $('.pop .close').click(function(){
        $('.media_wrap .pop').removeClass('on');
        $('.ifm_wrap iframe').remove();
      })


      $(window).scroll(function() {
        curr = $(this).scrollTop();
        // 스크롤 이벤트 적용하고 싶은 타겟
        target= $('.search_wrap').offset().top;
        if(curr > target){
          $('.header').addClass('fix')
        }else{
          $('.header').removeClass('fix')
        }
      })


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
}