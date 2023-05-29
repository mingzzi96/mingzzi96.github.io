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
        let challengeTop = document.querySelector(".challenge").offsetTop;
        let possibleTop = document.querySelector(".slide--possibility").offsetTop;
        let challengeAssetTop = document.querySelector(".challenge--asset").offsetTop;
        console.log(challengeAssetTop)
        console.log(htmlTop)
        
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
    })
}

headerColorChange()
window.addEventListener("resize", function(){
    headerColorChange()
})