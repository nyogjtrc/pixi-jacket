import * as PIXI from 'pixi.js'

let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
PIXI.utils.sayHello(type)

// empty canvas
const app = new PIXI.Application(800, 600)
app.renderer.backgroundColor = 0xFFAA99

document.body.appendChild(app.view)

// hello world
const hello = new PIXI.Text("hello world!")
hello.x = 400 - hello.width / 2
hello.y = 300 - hello.height / 2 

app.stage.addChild(hello)
