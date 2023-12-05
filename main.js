function somatorioDivisiveis(numero) {
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    return somatorio;
}

function calcularSomatorio() {
    const inputNumero = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');

    const numero = parseInt(inputNumero.value);

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerText = 'Digite um número inteiro positivo válido.';
    } else {
        const resultado = somatorioDivisiveis(numero);
        resultadoDiv.innerText = 'Resultado: ' + resultado;
    }
}
