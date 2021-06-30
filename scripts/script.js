let totalAdultos = document.getElementById("adultos");
let totalCrianças = document.getElementById("crianças");
let totalDuração = document.getElementById("duração");

let resultado = document.getElementById("resultado")

function calcular() {

    if (totalAdultos.value == "" || totalCrianças.value == "") {
        alert("Preencha todos os campos")
    }

    else {

        let adultos = parseInt(totalAdultos.value)
        let crianças = parseInt(totalCrianças.value) / 2
        let duração = parseInt(totalDuração.value)



        let carneAdultos = quantidadeCarne(duração) * adultos
        let carneCrianças = (quantidadeCarne(duração) * crianças)
        let carneTotal = carneAdultos + carneCrianças


        let cervejaTotal = quantidadeCerveja(duração) * adultos


        let refrigerantesTotal = quantidadeRefri(duração) * (adultos + crianças)


        resultado.innerHTML = `<p>${carneTotal / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(cervejaTotal / 437)} Latas de cerveja 473ml </p>`
        resultado.innerHTML += `<p>${refrigerantesTotal / 1000} Litros de Refrigerante</p>`
    }

}

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




