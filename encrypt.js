function encrypt() {
    const plainText = document.getElementById("encryptPlainText").value;
    const shift = parseInt(document.getElementById("encryptShift").value);
    let cipherText = '';

    for (let i = 0; i < plainText.length; i++) {
        let char = plainText.charAt(i);
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = (char >= 'a') ? 97 : 65; // ASCII for 'a' and 'A'
            char = String.fromCharCode(((code - base + shift) % 26) + base);
        }
        cipherText += char;
    }

    document.getElementById("encryptCipherText").textContent = cipherText;
}

function decrypt() {
    const cipherText = document.getElementById("decryptCipherText").value;
    const shift = parseInt(document.getElementById("decryptShift").value);
    let plainText = '';

    for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText.charAt(i);
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = (char >= 'a') ? 97 : 65; // ASCII for 'a' and 'A'
            char = String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        plainText += char;
    }

    document.getElementById("decryptPlainText").textContent = plainText;
}
