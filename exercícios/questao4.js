function clicar(){
var num=parseInt(prompt("Digite o número:"));
document.querySelector("p").innerHTML="O antecessor de "+num+" é: "+(num-1)+" e o sucessor é: "+(num+1);
}