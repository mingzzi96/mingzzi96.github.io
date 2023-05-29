// video 로드 확인하여 이미지 opacity 0으로 만들어주기
function videoLoad() {
    console.log("video loaded!")
    document.querySelector(".intro picture").classList.add("loaded")
}

// lang menu
let langChangeBtn = document.querySelector(".header__lang");
let langChangeSubNav = document.querySelector(".header__lang--subnav");
langChangeBtn.addEventListener("click", function(){
    langChangeSubNav.classList.toggle("show");
})

// header 특정 위치 이상부터에서만 보이도록
window.addEventListener("scroll", function(){
    if(document.querySelector("html").scrollTop > 500){
        document.querySelector("header").classList.add("show")
    }else {
        document.querySelector("header").classList.remove("show")
    }
})

// header white/black 효과 넣어주기
function headerColorChange() {

    window.addEventListener("scroll", function(){
        let htmlTop = document.querySelector("html").scrollTop;
        let showcase = document.querySelector(".showcase").offsetTop;
        let challengeTop = document.querySelector(".challenge").offsetTop;
        let possibleTop = document.querySelector(".slide--possibility").offsetTop;
        let challengeAssetTop = document.querySelector(".challenge--asset").offsetTop;
        
        if(challengeTop <= htmlTop && htmlTop < possibleTop){
            // section challenge보다 htmlTop이 더 클때
            document.querySelector("header").classList.remove("white")
            document.querySelector("body").classList.remove("dark")
        }else if(challengeTop <= htmlTop && possibleTop <= htmlTop && htmlTop < challengeAssetTop) {
            // section slide--possibility htmlTop이 더 클때
            document.querySelector("header").classList.add("white")
            document.querySelector("body").classList.add("dark")
        }else if(challengeAssetTop <= htmlTop) {
            // section challenge--asset htmlTop이 더 클때
            document.querySelector("header").classList.remove("white")
            document.querySelector("body").classList.remove("dark")
        }else {
            // 초기화
            document.querySelector("header").classList.add("white")
            document.querySelector("body").classList.remove("dark")
        }

        // goTop 버튼 제어
        if( showcase <= htmlTop ){
            $(window).bind('wheel', function(event){
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                    // scroll up
                    document.querySelector(".goTop").classList.add("show")
                }
                else {
                    // scroll down
                    document.querySelector(".goTop").classList.remove("show")
                }
            });
        }else {
            document.querySelector(".goTop").classList.remove("show")
        }
    })
}

// goTop 버튼 클릭 제어

document.querySelector(".goTop").addEventListener("click", function(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
})

headerColorChange()
window.addEventListener("resize", function(){
    headerColorChange()
})

// footer marquee text
const pTag1 = document.querySelector('.footer__marquee');

const text1 = '<div class="marquee__join--item green"><span>JOIN</span><i>US</i></div><div class="marquee__join--item pink"><span>JOIN</span><i>US</i></div><div class="marquee__join--item blue"><span>JOIN</span><i>US</i></div><div class="marquee__join--item green"><span>JOIN</span><i>US</i></div><div class="marquee__join--item pink"><span>JOIN</span><i>US</i></div><div class="marquee__join--item blue"><span>JOIN</span><i>US</i></div>'

const textArr1 = [];
textArr1.push(text1);

function initTexts(element, textArray) {
    textArray.push(...textArray)
    element.insertAdjacentHTML("afterbegin", textArray);
}
initTexts(pTag1, textArr1);

let count1 = 0;

function marqueeText(count, element, direction){
    if (count > element.scrollWidth / 2){
        element.style.transform = `translate(0)`
        count = 0
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
}

function animate() {
    count1++;

    count1 = marqueeText(count1, pTag1, 1);
    // direction -1이면 왼쪽으로 흐르고 1은 오른쪽으로 흐름
    // 대신 css로 전체 영역을 오른쪽 끄트머리에 맞춰주어야함 flex로 end 해주거나, right 0

    window.requestAnimationFrame(animate)
}

animate()



// 스크롤 맨아래 감지
function detectBottom() {
    let scrollTop = $(window).scrollTop();
    let innerHeight = $(window).innerHeight();
    let scrollHeight = $('body').prop('scrollHeight');
    if (scrollTop + innerHeight >= scrollHeight) {
        $(".footer__marquee").addClass("show");
        return true;
    } else {
        $(".footer__marquee").removeClass("show");
        return false;
    }
}

$(window).scroll(function(){
    detectBottom ()
});