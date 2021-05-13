let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCalabresa = calabresaPP(duracao) * adultos + (calabresaPP(duracao) / 2 * criancas);
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${qdtTotalCalabresa / 1000} Kg de Calabresa</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Bebida</p>`
}

function carnePP(duracao) {
    if (duracao >= 12) {
        return 650;
    } else {
        return 400;
    }

}

function calabresaPP(duracao) {
    if (duracao >= 12) {
        return 400;
    } else {
        return 300;
    }

}

function cervejaPP(duracao) {
    if (duracao >= 12) {
        return 2000;
    } else {
        return 1200;
    }

}

function bebidasPP(duracao) {
    if (duracao >= 12) {
        return 1500;
    } else {
        return 1000;
    }

}