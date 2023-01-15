var texto ="";
var textoCifrado="";
var content = "";





function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        
        document.querySelector("#text-input-salida").value = textoCifrado;
        
        document.getElementById("btn-copy","text-input-salida").style.display=("block");
        document.getElementById("text-input-salida").style.display=("block");
        document.getElementById("text1" ).style.display=("none");
        document.getElementById("text2" ).style.display=("none");
        
}


function desencriptar (){
        var texto = document.querySelector("#input-texto").value;
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector("#text-input-salida").value = textoCifrado;
     
}


function btnCopy (){

    var copyText = document.getElementById("text-input-salida").value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("El texto a sido copiado");
    });


}



var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;


var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;


var boton3 = document.querySelector("#btn-copy");
boton3.onclick = btnCopy;
