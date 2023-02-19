let lastRenderTime = 0
const SNAKE_SPEED = 2
function main(currentTime) {
    const secondsSinceLasterRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLasterRender < 1 /SNAKE_SPEED) return

    console.log(secondsSinceLasterRender)
    lastRenderTime = currentTime

}

window.requestAnimationFrame(main)