var canvas = document.getElementById('ahorcado');
var pincel = canvas.getContext('2d');
var gatillo = 0;


function dibujarGuion(x, y){

    pincel.fillStyle = "black";
    pincel.fillRect(x, y, 15, 1);
    pincel.fill();
}

function dibujarLetraCorrecta(palabra, letra){
    var separacion = 40;
    var retorno = 1;

    pincel.font = "30px Comic Sans MS";
    pincel.fillStyle = "black";

    for(i=0; i < palabra.length; i++){
      if (palabra[i] == letra){
          pincel.fillText(palabra[i],separacion,35);
          retorno = 0;
      }

      separacion = separacion + 40;
      pincel.moveTo(separacion,400);
    }
    pincel.stroke();
    return retorno;
}

function dibujarColumna() {

  	pincel.moveTo(150,500);
  	pincel.lineWidth = 3;
  	pincel.lineTo(100,550);
  	pincel.lineTo(200,550);
  	pincel.closePath();          // base 
  	pincel.stroke();


    pincel.moveTo(150,500);
    pincel.lineTo(150,200);      // linea columna
    pincel.stroke();
}

function dibujarSoga() {
    pincel.moveTo(150,200);
    pincel.lineTo(300,200);      // linea horizontal
    pincel.lineTo(300,240);      //soga
    pincel.stroke();
}

function dibujarCabeza(){
    pincel.beginPath();
    pincel.arc(300,270,30,0,Math.PI*2,true); // Cabeza
    pincel.stroke();
}

function dibujarTorso () {
    pincel.moveTo(300,300);
    pincel.lineTo(300,420);      //torso
    pincel.stroke();
}

function dibujarPiernaIzq (){
    pincel.moveTo(300,420);      
    pincel.lineTo(250,500);      // pierna izq  
    pincel.stroke();
}

function dibujarPiernaDer (){
    pincel.moveTo(300,420);      
    pincel.lineTo(350,500);      // pierna der  
    pincel.stroke();
}

function dibujarBrazoIzq (){      
    pincel.moveTo(300,360);
    pincel.lineTo(230,290);      //brazo izq
    pincel.stroke();
}

function dibujarBrazoDer (){      
    pincel.moveTo(300,360);
    pincel.lineTo(370,290);      //brazo izq
    pincel.stroke();
}

function dibujarFin(texto){

    pincel.font = "40px Comic Sans MS";
    if(texto == "Fin del Juego!"){
      pincel.fillStyle ="red";
    }else{
      pincel.fillStyle = "green";
    }
    pincel.fillText(texto,520,350);
    pincel.stroke();
}

function dibujarLetraIncorrecta(letrasIncorrectas){
    var separacion = 40;
    pincel.font = "30px Comic Sans MS";
    pincel.fillStyle = "red";

    for(g=0; g < letrasIncorrectas.length; g++){
      pincel.fillText(letrasIncorrectas[g],separacion,100);
      separacion = separacion + 40;
      pincel.moveTo(separacion,400);
    }
    pincel.stroke();
    
    switch(letrasIncorrectas.length){
    	case 1:
      		dibujarColumna();
    		break;

   		case 2:
      		dibujarSoga();
    		break;

    	case 3:
    		dibujarCabeza();
    		break;

    	case 4:
    		dibujarTorso()
    		break;

    	case 5:
    		dibujarPiernaDer();
    		break;

    	case 6:
    		dibujarPiernaIzq();
    		break;

    	case 7:
    		dibujarBrazoDer();
    		break;

    	case 8:
    		dibujarBrazoIzq();
    		break;
    }
}

function limpiarTablero(){
	pincel.clearRect(0,0, 1200, 800);
}