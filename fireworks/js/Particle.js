import CanvasOption from "./CanvasOption.js";

export default class Particle extends CanvasOption {
    constructor(x, y, vx, vy, opacity, colorDeg) {
        // extends를 썼다면 super는 필수 그래야 this로 접근가능
        super()
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.opacity = opacity
        this.gravity = 0.12
        this.friction = 0.9
        this.colorDeg = colorDeg
    }

    update() {
        this.vy += this.gravity

        this.vx *= this.friction
        this.vy *= this.friction


        // 속도를 주어서 움직이게 한다.
        this.x += this.vx
        this.y += this.vy

        this.opacity -= 0.02
    }

    draw() {
        this.ctx.fillStyle = `hsla(${this.colorDeg}, 100%, 65%, ${this.opacity})` // particle이 터진 이후로 점점 사라지도록
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2) // 360도니까 Math.PI * 2
        this.ctx.fill()
        this.ctx.closePath()
    }
}