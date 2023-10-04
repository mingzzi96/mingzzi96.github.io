// 스크롤 감지
window.addEventListener('wheel',(event) => {
	let wheel = event.wheelDeltaY;
  
	if(wheel > 0) {
        document.querySelector(".header").classList.add("show");
    }
	else { // (wheel < 0)
        document.querySelector(".header").classList.remove("show");
    }
	// preScrollTop = nextScrollTop;
});