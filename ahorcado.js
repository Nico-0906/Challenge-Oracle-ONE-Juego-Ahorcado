var listaPalabras = ["AGOSTINA", "SIMONGAS", "CONEJO", "ESCUADRON"];
var botonIniciar = document.querySelector("#iniciar-juego");
var botonNuevaPalabra = document.getElementById("nueva-palabra");
var botonIngreseLetra = document.getElementById("nueva-letra");
var letrasCorrectas = "";
var palabrita = "";
var letrasIncorrectas = "";
var totalLetrasIngresadas = "";
var sigueJugando = true;
var inicio = false;


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
	gatillo = 0;
	inicio = false;
}


botonIniciar.addEventListener("click", function(event){

	event.preventDefault();

	iniciar();

	console.log(palabrita);

	inicio = true;

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
	
	if(sigueJugando && inicio){
		var letraIngresada = document.querySelector("#input-letra").value;
		var repetida = false;

		if(letraIngresada.length === 1){

			letraIngresada = letraIngresada.toUpperCase();

			if(totalLetrasIngresadas == ""){

				totalLetrasIngresadas = totalLetrasIngresadas + letraIngresada;

			}else{

				for(i = 0 ; i < totalLetrasIngresadas.length ; i++){
					if(totalLetrasIngresadas[i] == letraIngresada){
						repetida = true;
						alert("Letra ya ingresada");
						break;
					}
				}

				if(repetida == false){
					totalLetrasIngresadas = totalLetrasIngresadas + letraIngresada;
				}

			}

			if((dibujarLetraCorrecta(palabrita, letraIngresada) == 1) && (repetida == false)){
				alert("INCORRECTO");
				letrasIncorrectas = letrasIncorrectas + letraIngresada;
				dibujarLetraIncorrecta(letrasIncorrectas);
			}else{
				letrasCorrectas = letrasCorrectas + letraIngresada;
			}

			if(letrasCorrectas.length == palabrita.length){
				gatillo = 2;
				sigueJugando = false;
				inicio = false;
			}

			if(letrasIncorrectas.length == 8){
            	gatillo = 1;
           		sigueJugando = false;
           		inicio = false;
			}
		
		}else{
			alert("Solo debe ingresar una letra");
		}
		document.querySelector("#input-letra").value = "";
	}else{
		alert("Inicie nuevo juego!");
		location.reload();
	}

	if(gatillo == 1){
		pincel.fillStyle = "red";
		pincel.fillText("Usted PERDIO!",450,100);
	}else if(gatillo == 2){
		pincel.fillStyle = "green";
		pincel.fillText("Usted GANO!",450,100);
	}
});
