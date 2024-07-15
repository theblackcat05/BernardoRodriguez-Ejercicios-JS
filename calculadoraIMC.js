function calcularIMC() {
    let altura = parseInt(document.getElementById('altura').value) / 100;
    let peso = parseInt(document.getElementById('peso').value);
    let imc = peso / (altura * altura);
    let resultado = '';

    if (imc < 18.5) {
        resultado = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidad';
    }

    document.getElementById('resultado').textContent = `Tu IMC es ${imc.toFixed(2)} (${resultado})`;
}



