var canvas = document.getElementById("meuCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10; 
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var btnEsquerda = false;
var btnDireita = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.code == "ArrowRight"){
    btnDireita = true;
} else if(e.code == "ArrowLeft"){
    btnEsquerda = true;
}
}
function keyUpHandler(e){
    if(e.code == "ArrowRight"){
        btnDireita = false;
    }
    else if(e.code == "ArrowLeft"){
        btnEsquerda = false;
    }
}

function desenharBola(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function desenharPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth,
        paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
}

function desenhar(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    desenharBola();
    desenharPaddle();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }

    else if(y + dy > canvas.height-ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        } else {
            clearInterval(game); // Inicia o game
            alert("GAME OVER"); // Game over
            document.location.reload(); // Recarrega o jogo 
        }
    }
    if(btnDireita && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(btnEsquerda && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}
var game = setInterval(desenhar, 10);