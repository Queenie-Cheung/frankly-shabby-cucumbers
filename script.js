let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

resizeCanvas()
window.addEventListener("resize", () => resizeCanvas())

function resizeCanvas(){
  canvas.width = window.innerWidth
  canvas.height = 1650
}
let gravityAcc = 0.45
let balls = []

setTimeout(drawLoop, 16)

function drawLoop () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  updateState()
  drawState()
  setTimeout(drawLoop, 16)
}

function updateState () {
  for (let ball of balls) {
    ball.y+=5
  }
}

function drawState () {
  for (let ball of balls){
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2)
  ctx.fillStyle = ball.colour
  ctx.fill()
  //ctx.stroke()
  }
}
window.onkeydown = (e) =>{
  if (e.key==='b'){
    balls.push(new Ball)
  }
}
setInterval(()=>balls.push(new Ball),10)


class Ball {
    r = random(50,5)
    x = random(canvas.width)
    //x = canvas.width/2
    y = 0
    vx = this.x<canvas.width/2? random(5):-random(5)
    vy = 0
    colourr = random(255)
    colourg = random(255)
    colourb = random(255)
    colour = `hsla(${random(75,150)},${random(16,100)}%,${random(16,90)}%,${Math.random()*100}%)`
    c = random(5,1)
    d = random(3,1)
  }

random = (max,min=0) => Math.floor(Math.random()*(max-min)+min)