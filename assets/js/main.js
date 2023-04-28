function imc() {

    const form = document.querySelector('.form-imc');
    const resultImc = document.querySelector('.result-imc');
    

    function calcularImc(evento) {
        evento.preventDefault();
        styelRImc();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const pesoToNumber = Number(peso.value);
        const alturaToNumber = Number(altura.value);

        const resultadoImc = pesoToNumber / Math.pow(alturaToNumber, 2);

        if (!pesoToNumber) {
            resultImc.innerHTML = '<p>Peso Inválido!</p>';
        } else if (!alturaToNumber) {
            resultImc.innerHTML = '<p>Altura Inválida!</p>';
        } else {
            verificaImc(resultadoImc);
        }
    }

    function verificaImc(valor) {
        if (valor < 18.5) {
            resultImc.innerHTML = `<p>Seu IMC é ${valor.toFixed(2)} (Abaixo do peso).</p>`;
        } else if (18.5 <= valor && valor < 25) {
            resultImc.innerHTML = `<p>Seu IMC é ${valor.toFixed(2)} (Peso Normal).</p>`;
        } else if (25 <= valor && valor < 30) {
            resultImc.innerHTML = `<p>Seu IMC é ${valor.toFixed(2)} (Sobrepeso).</p>`;
        } else if (30 <= valor && valor < 35) {
            resultImc.innerHTML = `<p>Seu IMC é ${valor.toFixed(2)} (Obesidade grau 1).</p>`;
        } else if (35 <= valor && valor < 40) {
            resultImc.innerHTML = `<p>Seu IMC é ${valor.toFixed(2)} (Obesidade grau 2).</p>`;
        } else if (valor >= 40) {
            resultImc.innerHTML = `<p>Seu IMC é ${valor.toFixed(2)} (Obesidade grau 3).</p>`;
        }
    }

    form.addEventListener('submit', calcularImc);
}

function styelRImc() {
    document.getElementById('r-imc').style.backgroundColor = '#0B2B40';
    document.getElementById('r-imc').style.padding = '5px 20px 5px 20px';
}

imc()