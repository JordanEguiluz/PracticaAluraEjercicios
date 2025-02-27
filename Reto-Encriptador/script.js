/*Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" = "enter"`
La letra "i" = "imes"`
La letra "a" = "ai"`
La letra "o" = "ober"`
La letra "u" = "ufat"`
*/
function encriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para que afecte a multiples lineas
    var txtCifrado = texto.replace(/e/igm,"enter")
    var txtCifrado = txtCifrado.replace(/o/igm,"ober")
    var txtCifrado = txtCifrado.replace(/i/igm,"imes")
    var txtCifrado = txtCifrado.replace(/a/igm,"ai")
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat")
    

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-titulo").style.display = "none";
    document.getElementById("texto-area").innerText = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
    
}

function desencriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para que afecte a multiples lineas
    var txtCifrado = texto.replace(/enter/igm,"e")
    var txtCifrado = txtCifrado.replace(/ober/igm,"o")
    var txtCifrado = txtCifrado.replace(/imes/igm,"i")
    var txtCifrado = txtCifrado.replace(/ai/igm,"a")
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u")

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-titulo").style.display = "none";
    document.getElementById("texto-area").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copiar(){
    var contenido = document.querySelector("#texto-area");
    contenido.select();
    document.execCommand("copy");
    alert("se copio");
}

