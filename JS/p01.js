var canvas = document.getElementById("meuCanvas");
var context = canvas.getContext('2d');

//Começo a desenhar

context.beginPath();
//rect(x,y, largura, altura)
context.rect(20,40, 50,50);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();


context.beginPath();
// arc(x,y, raio, anguloInicial, anguloFInal [, antiHorario])
//context.arc(240,160, 20, 0, Math.PI*2,false);
context.arc(100, 75, 50, 0, 3.5 * Math.PI, Math.PI);
context.fillStyle = "green";
context.fill();
context.closePath();

/* criar um retangulo com eixo 
x = 160, 
eixo y = 10, 
altura = 40,
largura = 100,
Utilizar strokeStyle para preencher a cor 
= rgba(0, 0, 255, 0.5),
*/
context.beginPath();
//rect(x,y, largura, altura)
context.rect(160,10, 100,40);
context.strokeStyle = "rgba(0, 0, 255, 0.5)";
context.stroke();
context.closePath();


/*
arc(100, 75, 50, 0 * Math.PI, 1.5 * Math.PI)
Start angle: arc(100, 75, 50, 0, 1.5 * Math.PI)
arc(100, 75, 50, 0 * Math.PI, 3.5 * Math.PI)


*/