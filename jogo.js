let personagem
let vitoria
let grama
let tamanho = 64
let comunista
let restart
let andarX = 0
let andarY = 0
let velocidade = 64

function setup() {
    createCanvas(576, 576);
    personagem = loadImage("foice.png")
    vitoria = loadImage("martelo.png")
    comunista = loadImage("valeucomuni.png")

}

function draw() {
    if (andarX < 0) {
        andarX = 0
    }
    if (andarY < 0) {
        andarY = 0
    }
    if (andarX > tamanho * 8) {
        andarX = tamanho * 8

    }
    if (andarY > tamanho * 8) {
        andarY = tamanho * 8

    }


    background(255, 0, 0);

    image(vitoria, 512, 512, tamanho, tamanho)

    image(personagem, andarX, andarY, tamanho, tamanho)

    if (andarX === tamanho * 8 && andarY === tamanho * 8) {

        rect(160, 160, 256, 256)
        textSize(30)
        text("vitória na guerra", 180, 200)

        image(comunista, 230, 250, 100, 100)

        restart = createButton("Reiniciar")
        restart.mousePressed(reset)
        noLoop()
    }
}
function reset() {
    andarX = 0
    andarY = 0
    restart.remove()
    loop()
}

function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade
    }
    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade
    }
    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade
    }
    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade
    }
}