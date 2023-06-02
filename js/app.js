const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
let texto = document.querySelector(".texto");
texto.focus();

const encriptar = mensaje => {
    if (mensaje.trim() !== "") {
        if (!(esVocalConAcento(mensaje)) && !(contieneMayuscula(mensaje))) {
            let textoEncriptado = "";
            for (const letra of mensaje) {
                switch (letra) {
                    case "e":
                        textoEncriptado += "enter";
                        break;
                    case "i":
                        textoEncriptado += "imes";
                        break;
                    case "a":
                        textoEncriptado += "ai";
                        break;
                    case "o":
                        textoEncriptado += "ober";
                        break;
                    case "u":
                        textoEncriptado += "ufat";
                        break;
                    default:
                        textoEncriptado += letra;
                        break;
                }
            }
            getTextAreaTexto().value = "";
            getTextAreaTexto().focus();
            getTextAreaResult().value = textoEncriptado;
        } else {
            getTextAreaResult().value = "";
            swal("Info", "Ingrese sólo letras minúsculas y sin acentos.", "info");
        }
    } else {
        showEmptyFieldAlert();
    }
}

const desencriptar = mensaje => {
    if (mensaje.trim() !== "") {
        let textoDesencriptado = "";
        for (let i = 0; i < mensaje.length; i++) {
            const letra = mensaje[i];
            switch (letra) {
                case "e":
                    textoDesencriptado += letra;
                    i += 4;
                    break;
                case "i":
                    textoDesencriptado += letra;
                    i += 3;
                    break;
                case "a":
                    textoDesencriptado += letra;
                    i += 1;
                    break;
                case "o":
                    textoDesencriptado += letra;
                    i += 3;
                    break;
                case "u":
                    textoDesencriptado += letra;
                    i += 3;
                    break;
                default:
                    textoDesencriptado += letra;
                    break;
            }
        }
        getTextAreaTexto().value = "";
        getTextAreaTexto().focus();
        getTextAreaResult().value = textoDesencriptado;
    } else {
        showEmptyFieldAlert();
    }
}

const showEmptyFieldAlert = () => swal("Error", "El campo de texto está vacío. Por favor, ingresa un valor.", "error");

const getTextAreaTexto = () => {
    const textAreaDesencriptar = document.querySelector(".texto");
    return textAreaDesencriptar;
}

const getTextAreaResult = () => {
    const textAreaEncriptado = document.querySelector(".texto-resultado");
    return textAreaEncriptado;
}

const esVocalConAcento = mensaje => {
    const regExAcento = /[á-ú]/;
    return regExAcento.test(mensaje);
}

const contieneMayuscula = mensaje => {
    const regExMayus = /[A-Z]/;
    return regExMayus.test(mensaje);
}

btnEncriptar.addEventListener("click", () => encriptar(texto.value));
btnDesencriptar.addEventListener("click", () => desencriptar(texto.value));