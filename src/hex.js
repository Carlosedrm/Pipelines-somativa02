function codificarHex(texto) {
    if (typeof texto !== 'string') {
        throw new Error('Entrada deve ser uma string');
    }
    
    return texto
        .split('')
        .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');
}

function decodificarHex(hex) {
    if (typeof hex !== 'string') {
        throw new Error('Entrada deve ser uma string');
    }
    
    hex = hex.replace(/\s/g, '');
    if (hex.length % 2 !== 0) {
        throw new Error('String hexadecimal deve ter comprimento par');
    }
    
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
        throw new Error('String contém caracteres não hexadecimais');
    }
    
    let resultado = '';
    for (let i = 0; i < hex.length; i += 2) {
        const codigoChar = parseInt(hex.substr(i, 2), 16);
        resultado += String.fromCharCode(codigoChar);
    }
    
    return resultado;
}

function isHexValido(hex) {
    if (typeof hex !== 'string') {
        return false;
    }
    
    hex = hex.replace(/\s/g, '');
    return /^[0-9a-fA-F]*$/.test(hex) && hex.length % 2 === 0;
}

module.exports = {
    codificarHex,
    decodificarHex,
    isHexValido
};
