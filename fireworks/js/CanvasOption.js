export default class CanvasOption {
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.dpr = devicePixelRatio
        // fpx 60 맞춰줄때 필요한 변수들
        this.fps = 60
        this.interval = 1000 / this.fps
        this.canvasWidth = innerWidth
        this.canvasHeight = innerHeight
        this.bgColor = '#000000'
    }
}