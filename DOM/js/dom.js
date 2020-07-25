    
    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    console.log('hay '+ enlaces.length + ' enlaces en la pagina');
    document.write('hay ' + enlaces.length + ' enlaces en la pagina', "<br>");
    
    
    // Direccion del penultimo enlace
    var enlace = enlaces[enlaces.length-2].href;
    console.log("El penultimo enlace dirige a " + enlace);
    document.write("El penultimo enlace dirige a " + enlace , "<br>");
        
    
    // Numero de enlaces que apuntan a http://prueba
    var apuntador = 0;
    for(var index=0; index<enlaces.length; index++) {
        if(enlaces[index].href == "http://prueba/") {
        apuntador++;
        }
    }
    console.log("Los enlaces que apuntan a http://prueba/ son "+apuntador);
    document.write("Los enlaces que apuntan a http://prueba/ son" + apuntador , "<br>");
    
    
    // Numero de enlaces del tercer parrafo
    var cantidad = document.getElementsByTagName("p");
	enlace = cantidad[2].getElementsByTagName("a");  
  	console.log("La cantidad de enlaces del tercer párrafo son "+enlace.length);
    document.write("La cantidad de enlaces del tercer párrafo son "+enlace.length , "<br>");
    