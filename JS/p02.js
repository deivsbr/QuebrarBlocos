var canvas = document.getElementById("meuCanvas");
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

//Criar a bolinha
function desenharBola(){
    ctx.beginPath();
    ctx.arc(x,y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
//Desenhar a bolinha na tela 
function desenhar(){
    //clearRect -> Limpar pixels da tela
    ctx.clearRect(0,0, canvas.width, canvas.height);
    desenharBola();
    x += dx;
    y += dy;
}
//requestAnimationFrame(desenharBola);
setInterval(desenhar, 10);

/*
EX 02 
Mudar direçao e velocidade da bolinha na tela 


*/