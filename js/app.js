const textArea = document.querySelector('.textoEncriptar');
const mensaje = document.querySelector('.mensaje');

function btnEcriptar(){ 
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){ 
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","utaf"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEncriptado;
}

function btnDesecriptar(){ 
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = ""
}

function desencriptar(stringDesencriptado){ 
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","utaf"]];
    stringDesencriptado =stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
        
    }
    return stringDesencriptado;
}



function copiarTexto() {
    var mensaje = document.querySelector('.mensaje').value; // Obtenemos el valor del textarea
    try {
        navigator.clipboard.writeText(mensaje); // Copiamos el texto al portapapeles
    } catch (error) {
        console.log(error);
    }
}


