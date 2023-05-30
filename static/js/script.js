const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");
const boton_copiar = document.querySelector(".copi");
const button = document.querySelector(".copiar");
const texto = document.querySelector(".text-info");
const image = document.querySelector(".image");

button.addEventListener('click', e => {
    mensaje.select();
    document.execCommand('copy');
})

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }        
    }
    mensaje.style.display = "block"
    image.style.display = "none"
    boton_copiar.style.display = "block"
    texto.style.display = "none"
    return stringEncriptado
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }        
    }
    mensaje.style.display = "block"
    image.style.display = "none"
    texto.style.display = "none"
    return stringDesencriptado
}
