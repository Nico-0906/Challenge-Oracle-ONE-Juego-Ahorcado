var listaPalabras = ["AGOSTINA", "SIMONGAS", "CONEJO", "ESCUADRON"];
var botonIniciar = document.querySelector("#iniciar-juego");
var botonNuevaPalabra = document.getElementById("nueva-palabra");
var botonIngreseLetra = document.getElementById("nueva-letra");
var canvas = document.getElementById('ahorcado');
var pincel = canvas.getContext('2d');
var palabrita = "";
var letrasIncorrectas = "";
var totalLetrasIngresadas = "";
var sigueJugando = true;


function elegirPalabraAlAzar(lista){

	var posicion = Math.random()*lista.length;

	return lista[Math.floor(posicion)];
}


function guionesPorPalabra(palabra){

	var x = 40;
	var y = 40;

	for(i = 0; i < palabra.length; i++){
		
		dibujarGuion(x, y);
		x = x + 40;
	}

}

function buscarLetra(letra, palabra){
	var posicion = [];
	for(i = 0 ; i < palabra.length; i++){
		if(letra == palabra[i]){
			posicion = posicion + i; 
		}
	}
	return posicion;

}

function iniciar(){
	limpiarTablero();
	palabrita = elegirPalabraAlAzar(listaPalabras);
	guionesPorPalabra(palabrita);
	letrasIncorrectas = "";
	totalLetrasIngresadas = "";
}


botonIniciar.addEventListener("click", function(event){

	event.preventDefault();

	iniciar();

	console.log(palabrita);

});



botonNuevaPalabra.addEventListener("click", function(event){
	event.preventDefault();
	var palabraIngresada = document.querySelector("#input-nueva-palabra").value;
	palabraIngresada = palabraIngresada.toUpperCase();

	 if (listaPalabras.includes(palabraIngresada)) {
        alert("La palabra ya existe");
    } else {
        listaPalabras.push(palabraIngresada);
        console.log(listaPalabras);
        alert("Se agrego nueva palabra al array");
    }
    document.querySelector("#input-nueva-palabra").value = "";
});

botonIngreseLetra.addEventListener("click", function(event){
	event.preventDefault();
	
	if(sigueJugando){
		var letraIngresada = document.querySelector("#input-letra").value;
		if(letraIngresada.length === 1){

			letraIngresada = letraIngresada.toUpperCase();

			totalLetrasIngresadas = totalLetrasIngresadas + letraIngresada;

			if(dibujarLetraCorrecta(palabrita, letraIngresada) == 1){
				alert("INCORRECTO");
				letrasIncorrectas = letrasIncorrectas + letraIngresada;
				dibujarLetraIncorrecta(letrasIncorrectas);
			};
			if(letrasIncorrectas.length == 8){
				alert("USTED PERDIO");
			}
		
		}else{
			alert("Solo debe ingresar una letra");
		}
		document.querySelector("#input-letra").value = "";
	}else{
		alert("Juego Finalizado!");
		location.reload();
	}
});
