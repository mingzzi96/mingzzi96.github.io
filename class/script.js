// scroll spy 구현
// http://bootstrapk.com/javascript/
$('body').scrollspy({ target: '.navbar-example' })




// 위로가기 버튼 만들기
window.addEventListener("scroll", function(){
    if(document.querySelector("html").scrollTop > 100){
      document.querySelector(".goTop").classList.add("show")
    }else {
     document.querySelector(".goTop").classList.remove("show")
    }
  })
  document.querySelector(".goTop").addEventListener("click", function(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
})


// 셀렉트 박스 만들기
// nice select 사용
// https://jqueryniceselect.hernansartorio.com/
$('select').niceSelect();