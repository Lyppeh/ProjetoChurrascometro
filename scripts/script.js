// Pegando os elementos do HTML
let totalAdultos = document.getElementById("adultos");
let totalCrianças = document.getElementById("crianças");
let totalDuração = document.getElementById("duração");

let resultado = document.getElementById("resultado")

// Criando a funçao para calcular
function calcular() {

    // Obrigando o usuario a preencher os dados necessários
    if (totalAdultos.value == "" || totalCrianças.value == "") {
        alert("Preencha todos os campos")
    }

    else {
        
        // transformando os dados em números inteiros
        let adultos = parseInt(totalAdultos.value)
        let crianças = parseInt(totalCrianças.value) / 2
        let duração = parseInt(totalDuração.value)

        // Calculando a quantidade de carne 
        let carneAdultos = quantidadeCarne(duração) * adultos
        let carneCrianças = (quantidadeCarne(duração) * crianças)
        let carneTotal = carneAdultos + carneCrianças

        // Calculando a quantidade de cerveja
        let cervejaTotal = quantidadeCerveja(duração) * adultos

        // Calculando a quantidade de refrigerantes
        let refrigerantesTotal = quantidadeRefri(duração) * (adultos + crianças)

        // Inserindo os dados no HTML
        resultado.innerHTML = `<p>${carneTotal / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(cervejaTotal / 437)} Latas de cerveja 473ml </p>`
        resultado.innerHTML += `<p>${refrigerantesTotal / 1000} Litros de Refrigerante</p>`
    }

}

// Passando os parametros para serem trabalhados
function quantidadeCarne(duração) {
    if (duração >= 6) {
        return 650
    }
    else {
        return 400
    }
}

function quantidadeCerveja(duração) {
    if (duração >= 6) {
        return 2000
    }
    else {
        return 1200
    }

}

function quantidadeRefri(duração) {
    if (duração >= 6) {
        return 1500
    }
    else {
        return 1000
    }
}




