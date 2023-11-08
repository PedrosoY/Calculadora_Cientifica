let expressao = '';

function adicionarTexto(texto) {
    expressao += texto;
    document.getElementById('display').value = expressao;
}

function adicionarOperador(operador) {
    expressao += operador;
    document.getElementById('display').value = expressao;
}

function adicionarDecimal() {
    if (!expressao.includes('.')) {
        expressao += '.';
        document.getElementById('display').value = expressao;
    }
}

function adicionarParenteses(parenteses) {
    expressao += parenteses;
    document.getElementById('display').value = expressao;
}

function limpar() {
    expressao = '';
    document.getElementById('display').value = '';
}

function calcular() {
    try {
        const resultado = eval(expressao);
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        expressao = '';
    }
}

function calcularRaizQuadrada() {
    try {
        const numero = eval(expressao);
        const resultado = Math.sqrt(numero);
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        expressao = '';
    }
}

function calcularPotencia() {
    try {
        const numero = eval(expressao);
        const resultado = Math.pow(numero, 2);
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        expressao = '';
    }
}

function calcularSeno() {
    try {
        const numero = eval(expressao);
        const resultado = Math.sin(numero);
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        expressao = '';
    }
}

function calcularCosseno() {
    try {
        const numero = eval(expressao);
        const resultado = Math.cos(numero);
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        expressao = '';
    }
}

function calcularTangente() {
    try {
        const numero = eval(expressao);
        const resultado = Math.tan(numero);
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        expressao = '';
    }
}

function calcularPorcentagem() {
    try {
        const numero = eval(expressao);
        const resultado = numero / 100;
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        expressao = '';
    }
}
