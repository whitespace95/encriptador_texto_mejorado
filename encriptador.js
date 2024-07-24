function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function mostrarError(mensaje) {
    swal("Error", mensaje, "error");
}

function restaurarContenidoInicial() {
    let tituloMensaje = document.getElementById("titulo_texto");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    if (!validarTexto(texto)) {
        mostrarError("Solo se permiten letras minúsculas sin acentos, no se permiten caracteres especiales ni números.");
        return;
    }

    let tituloMensaje = document.getElementById("titulo_texto");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (texto.length === 0) {
        restaurarContenidoInicial();
        swal("Cuidado!!!", "Debes ingresar algún texto", "warning");
        return;
    }

    let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "oe")
        .replace(/u/g, "ufat");

    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.png";
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    if (!validarTexto(texto)) {
        mostrarError("Solo se permiten letras minúsculas sin acentos, no se permiten caracteres especiales ni números");
        return;
    }

    let tituloMensaje = document.getElementById("titulo_texto");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (texto.length === 0) {
        restaurarContenidoInicial();
        swal("Cuidado!!!", "Debes ingresar algún texto", "warning");
        return;
    }

    let textoDescifrado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/oe/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("texto").value = textoDescifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.png";
}

// Restaurar el contenido inicial al cargar la página
document.addEventListener("DOMContentLoaded", restaurarContenidoInicial);

// Restaurar el contenido inicial al borrar el texto
document.getElementById("texto").addEventListener("input", function() {
    if (this.value.length === 0) {
        restaurarContenidoInicial();
    }
});

