var guessesLeft = 15;
var modelosTabletas = ["AluexLura", "JabeAluminio", "Lumex", "Loral", "Malva"];
var inputsMade = [];
var guessesMade = [];
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "assets/images/Aluex-Circular-1.jpg";
imgArray[1] = new Image();
imgArray[1].src = "assets/images/Aluex-Clasica-64.jpg";
imgArray[2] = new Image();
imgArray[2].src = "assets/images/Imagen004.jpg";
imgArray[3] = new Image();
imgArray[3].src = "assets/images/Jabe-de-Aluminio-68.jpg";
imgArray[4] = new Image();
imgArray[4].src = "assets/images/Malva-17.jpg";

var cancion = new Audio("assets/songs/Celebration.mp3")

var imagenRes = document.getElementById("fotoRes");
var espaciosLetras = document.getElementById("letras");
var intentosRemanentes = document.getElementById("guessesLeft");
var letrasIntentadas = document.getElementById("textoInicial");

var valorAleatorio = Math.floor(Math.random() * modelosTabletas.length);
var tabletaAleatoria = modelosTabletas[valorAleatorio].toLowerCase();
console.log(tabletaAleatoria);
var underScores = "";

for(var i=1; i<=tabletaAleatoria.length; i++){
    underScores = underScores + "_ ";
    espaciosLetras.textContent = underScores;
}

console.log(underScores);

var cuentaIntentos = 0;
var intentosRestan = tabletaAleatoria.length * 2;
var letIntentadas = "";
var faltanLetras = tabletaAleatoria.length;

function estatusJuego(){
    if(intentosRestan>0 && faltanLetras>0){
        intentosRemanentes.textContent="Te quedan " + intentosRestan + " intentos!";
        }
        else if(intentosRestan<=0 && faltanLetras>0){
            intentosRemanentes.textContent="Perdiste!";
        }
        else if(intentosRestan>=0 && faltanLetras<=0){
            intentosRemanentes.textContent="Ganaste!";
            imagenRes.src = imgArray[valorAleatorio].src;
            cancion.play();
        }
}

document.onkeyup = function(letraPresionada){
    var letraUsuario = letraPresionada.key;
    var posicionTableta = tabletaAleatoria.indexOf(letraUsuario);
    var posicionUnderS = tabletaAleatoria.indexOf(letraUsuario)*2;
    intentosRestan--;
    cuentaIntentos++;

    if(cuentaIntentos===1){
        letIntentadas= "Letras intentadas: " + letraUsuario;
    }
    else {
    letIntentadas = letIntentadas + ", " + letraUsuario;
    }

        if(tabletaAleatoria.indexOf(letraPresionada.key)>=0 && intentosRestan>=0 && faltanLetras>0){

            underScores = underScores.substring(0,posicionUnderS) + letraPresionada.key + underScores.substring(posicionUnderS+1,underScores.length+1);
            tabletaAleatoria = tabletaAleatoria.substring(0,posicionTableta) + "*" + tabletaAleatoria.substring(posicionTableta+1,tabletaAleatoria.length+1);
            
            espaciosLetras.textContent = underScores;
            letrasIntentadas.textContent = letIntentadas;
        }

        faltanLetras = tabletaAleatoria.length - tabletaAleatoria.replace(/[^*]/g,"").length;
        estatusJuego();
}

var botonR = document.getElementById("botonReinicio");
botonR.addEventListener("click", function(boton){
intentosRemanentes.textContent = "Presiona cualquier tecla";
valorAleatorio = Math.floor(Math.random() * modelosTabletas.length);
tabletaAleatoria = modelosTabletas[valorAleatorio].toLowerCase();
underScores="";
for(var i=1; i<=tabletaAleatoria.length; i++){
    underScores = underScores + "_ ";
    espaciosLetras.textContent = underScores;
}
cuentaIntentos = 0;
intentosRestan = tabletaAleatoria.length * 2;
letrasIntentadas.textContent = "Presiona cualquier tecla!";
letIntentadas = "";
faltanLetras = tabletaAleatoria.length;
imagenRes.src = "assets/images/ImagenInicial.jpg";
cancion.pause();
cancion.currentTime=0;
console.log(tabletaAleatoria);
console.log(botonR);
})