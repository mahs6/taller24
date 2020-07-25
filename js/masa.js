//cuenta bancaria
var cuenta = {
  titular: "Alex",
  saldoinicial: 0,

  depositado: function(valor1) {
    console.log("se a ingresado " + valor1 + " pesos");
    return this.saldoinicial + valor1;
  },

  extraido: function(valor2) {
    console.log("se a extraido " + valor2 + " pesos");
    return this.saldoinicial - valor2;
  },

  informacion: function(info) {
    console.log("El nombre del titular es: " + this.titular + " El saldo actual de la cuenta es de " + this.saldoinicial + " pesos");
  }

}

console.log(cuenta.titular);
console.log(cuenta.saldoinicial);
console.log('-------------')
let valor1=prompt("valor a depositar");
cuenta.depositado(valor1);
let valor2=prompt("valor extraido");
cuenta.extraido(valor2)
cuenta.informacion();







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






/*                          tienda 
var store = {

name: 'Mitienda',
productos: {
  frutas: [
    {description:"banana", price:1000},
    {description:"orange", price:500}, 
    {description:"mango",  price:700},
    {description:"manzana",price:800},
  ],
  vegetales: [
    {description:"tomates",  price:700},
    {description:"cebollas",price:800},
  ]
},
location: "street 54 7",
decirlocacion: function(){
  console.log(this.location)
},

bienvenida: function(){
  console.log("beinvenido a la tienda");
},

//lista con foreach
listadefrutas1: function(){
  this.productos.frutas.forEach(element => {
    console.log("nombre::" , element.description);
    console.log("precio::" , element.price);
  });
},
//lista con for
listadefrutas2: function(){
    for (let index=0; index <this.productos.frutas.length; index++)
    console.log(this.productos.frutas[index]);
    console.log("indice:" , index);
    console.log("nombre:" , this.productos.frutas[index].description);
    console.log("precio:" , this.productos.price[index].price);
},

agregarfruta: function(){
    let nombrefruta = prompt ("nombre de la fruta");
    let preciofruta = prompt ("precio de la fruta");
    this.productos.frutas.push({ description : nombrefruta , price: preciofruta});
}
};

store.bienvenida();
store.decirlocacion();
store.listadefrutas1();
store.agregarfruta();
store.bienvenida();
store.listadefrutas2();*/