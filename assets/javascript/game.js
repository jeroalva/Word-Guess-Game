var guessesLeft = 15;
var modelosTabletas = ["AluexLura", "JabeAluminio", "AluexRectangular", "AluexCircular", "AluexClasica"];
var inputsMade = [];
var guessesMade = [];

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

document.onkeyup = function(letraPresionada){
    intentosRestan--;
    var faltanLetras = tabletaAleatoria.length - tabletaAleatoria.replace(/[^*]/g,"").length;
    console.log(faltanLetras);
    if(intentosRestan>0 && faltanLetras>0){
    intentosRemanentes.textContent="Te quedan " + intentosRestan + " intentos!";
    }
    else{
        intentosRemanentes.textContent="Perdiste!"
    }

    if(tabletaAleatoria.indexOf(letraPresionada.key)>=0){
        var letraUsuario = letraPresionada.key;
        var posicionTableta = tabletaAleatoria.indexOf(letraUsuario);
        var posicionUnderS = tabletaAleatoria.indexOf(letraUsuario)*2;

        underScores = underScores.substring(0,posicionUnderS) + letraPresionada.key + underScores.substring(posicionUnderS+1,underScores.length+1);
        tabletaAleatoria = tabletaAleatoria.substring(0,posicionTableta) + "*" + tabletaAleatoria.substring(posicionTableta+1,tabletaAleatoria.length+1);
        console.log(underScores);
        console.log(tabletaAleatoria);

        espaciosLetras.textContent = underScores;

        if(cuentaIntentos===1){
            letIntentadas= "Letras intentadas: " + letraPresionada.key
        }
        else {
        letIntentadas = letIntentadas + ", " + letraPresionada.key
        }

        letrasIntentadas.textContent = letIntentadas;
    }
}