const miTextarea = document.getElementById('miTextarea');
const miParrafo = document.getElementById('outptTextArea');
const miDiv = document.getElementById('miDiv');
const miAside = document.getElementById('aside');
const btnCopy = document.getElementById("copy");

miTextarea.addEventListener('input', function() {
    if (miTextarea.value === '') {
        miDiv.style.display = 'block';
        miParrafo.style.display = "none"
    } 
});

const diccionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    miDiv.style.display = 'none';
    let textoEncriptado = '';
    
    for (const letra of miTextarea.value.toLowerCase()) {
        if (diccionario[letra]) {
            textoEncriptado += diccionario[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    miParrafo.style.display = "block";
    btnCopy.style.display = "block";
    miParrafo.innerHTML = textoEncriptado;
}

function desencriptar() {
    let textoDesencriptado = '';

    miParrafo.innerHTML = textoDesencriptado;
    console.log(diccionarioInvertido)
}

function decrypt(){
    if (inptTextArea.value !== ""){
        const text = inptTextArea.value;
        let encrypted = text;
        for (const key in keysEncoded) {
            const regex = new RegExp(keysEncoded[key], "g");
            encrypted = encrypted.replace(regex, key);
        }
        writeResult(encrypted);
    }
}

function writeResult(text){
    outptTextArea.value = text;
    showOrHiddenTextOutput("none", "block");
}



