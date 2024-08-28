function fn_encriptar() {
    
    let texto = document.getElementById("txt_info").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");
   
    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    
    if (texto.length != 0) {
        console.log("El tamaño del txt_info es:"+texto.length);
        document.getElementById("txt_info").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        munieco.src = "./img/encriptado.jpg";            
    } else {
        munieco.src = "./img/munieco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Por favor ingresar un texto");
    }
}

function fn_desencriptar() {
    
    let texto = document.getElementById("txt_info").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("txt_info").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exíto";
        parrafo.textContent = "";
        munieco.src = "./img/desencriptado.jpg";  
    } else {
        munieco.src = "./img/munieco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }

}


  function fn_copiar(textarea) {
        
        textarea.select();    
        
        document.execCommand("copy");    
        
        alert("¡Texto copiado exitosamente!");
  }

