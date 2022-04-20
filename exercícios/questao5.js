function clicar(){
var a=parseFloat(prompt("digite o número"));
var b=parseFloat(prompt("digite o segundo número"));
document.querySelector("#somar").innerHTML=("O resultado da soma é:"+(a+b));
document.querySelector("#subtrair").innerHTML=("O resultado da subtração é:"+(a-b));
document.querySelector("#multiplicar").innerHTML=("O resultado da multiplicação é:"+(a*b));
document.querySelector("#dividir").innerHTML=("O resultado da divisão é:"+(a/b));
}