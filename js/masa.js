//calculadora masa corporal
let p1, p2;                     //variable
p1= prompt ("Ingrese su peso");     //valores
p2= prompt ("Ingrese su altura"); //valores

function IMC (p1, p2){
    let resultado = p1/(p2^2);
     document.write("Su índice de masa corporal es= " + resultado);
}
IMC(p1,p2);


//tablas de multiplicar
var numero = 0; 

while (numero < 2 || numero > 10) {
  numero = Number(prompt("Elige un numero entre 2 y 10"));
}

var i = 1; 
while (i <= 10) {
  console.log(numero + " * " + i + " = " + numero * i);
  i++;
}

//numeros pares e impares
console.log("numeros pares e impares")
var numero = prompt("Introduce Limite de Numeros a Imprimir");
var cont=0;
for(cont=1;cont<=numero;cont++){
var resultado = parImpar(numero);
console.log("El número "+cont+" es "+resultado);
}
function parImpar(numero) {
if(cont % 2 == 0) {
return "par";
}
else {
return "impar";
}
}