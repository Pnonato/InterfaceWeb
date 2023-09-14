var visor = document.querySelector('#visor');

var botoes = document.querySelectorAll('.numeros');

var operadores = document.querySelectorAll('.operacao');

var valor1, valor2, resultado, sinal;

botoes.forEach(function (botao) {
    botao.addEventListener('click', () => {
        visor.value += botao.textContent;
    });
});

operadores.forEach((operador) => {
    operador.addEventListener('click', function () {
        valor1 = parseFloat(visor.value);
        sinal = operador.textContent;
        visor.value = '';
    });
});

// Use a class selector for the "calcular" button
var calcularButton = document.querySelector('.calcular');

calcularButton.onclick = () => {
    valor2 = parseFloat(visor.value);
    switch (sinal) {
        case '+':
            visor.value = valor1 + valor2;
            break;

        case '-':
            visor.value = valor1 - valor2;
            break;

        case 'x':
            visor.value = valor1 * valor2;
            break;

        case '/':
            visor.value = valor1 / valor2;
            break;
    }
}
