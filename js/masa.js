let p1, p2;                     //variable
p1= prompt ("Ingrese su peso");     //valores
p2= prompt ("Ingrese su altura"); //valores

function IMC (p1, p2){
    let resultado = p1/(p2^2);
     document.write("Su índice de masa corporal es= " + resultado);
}
IMC(p1,p2);