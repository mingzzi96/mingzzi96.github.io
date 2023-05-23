export const randomNumBetween = (min, max) => {
    // 랜덤한 숫자를 뽑아준다.
    // 최소(0)와 최대(화면의 너비/높이) 사이 값을 리턴하는 계산
    return Math.random() * (max - min) + min
}

export const hypotenuse = (x, y) => {
    // 반응형을 위해 innerWidth와 innerHeight의 빗변을 구해줌
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}