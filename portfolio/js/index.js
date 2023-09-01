

const customedCursor = document.querySelector(".cursor");
const customedCursorRed = document.querySelector(".cursor-red");
const hoverEye = document.querySelectorAll(".hover-eye");
const hoverEyeRed = document.querySelectorAll(".hover-eye-red");



document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움

    // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

    // pageX, pageY와는 다름.

    const mouseX = e.clientX;

    const mouseY = e.clientY;

    customedCursor.style.left = mouseX + 'px';

    customedCursor.style.top = mouseY + 'px';

    customedCursorRed.style.left = mouseX + 'px';

    customedCursorRed.style.top = mouseY + 'px';

});

hoverEye.forEach( (e) => {
    e.addEventListener("mouseenter", (event) => {
        customedCursor.classList.add("show");
        e.classList.add("cursor-none");
    })

    e.addEventListener("mouseleave", (event) => {
        customedCursor.classList.remove("show");
        e.classList.remove("cursor-none");
    })

} )

hoverEyeRed.forEach( (e) => {
    e.addEventListener("mouseenter", (event) => {
        customedCursorRed.classList.add("show");
        e.classList.add("cursor-none");
    })

    e.addEventListener("mouseleave", (event) => {
        customedCursorRed.classList.remove("show");
        e.classList.remove("cursor-none");
    })

} )

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