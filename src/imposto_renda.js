/*
    Implemente uma função que retorne o valor a ser pago de imposto de renda, com base no salário bruto recebido. Use as regras abaixo:
    Salário até 2.212,00: isento;
    Salário entre R$ 2.212,01 e R$ 2.826,65: imposto = 7.5% do salário bruto;
    Salário entre R$ 2.826,66 e R$ 3.751,05: imposto = 15%;
    Salário entre R$ 3.751,06 e R$ 4.664,68: imposto = 22.5%;
    Salário acima de R$ 4.664,68: imposto = 27.5%.
*/

let impostoRenda = 0

function calcularImpostoRenda(salarioBruto) {
    if(salarioBruto <= 2259.20){   //2024
        impostoRenda = 0
    } else if(salarioBruto <= 2826.65){
        impostoRenda = (salarioBruto * 0.075) - 169.44
    } else if(salarioBruto <= 3751.05){
        impostoRenda = (salarioBruto * 0.15) - 381.44
    } else if(salarioBruto <= 4664.68){
        impostoRenda = (salarioBruto * 0.225) - 662.77
    } else {
        impostoRenda = (salarioBruto * 0.275) - 896
    }

    return (impostoRenda).toFixed(2)
}

module.exports = calcularImpostoRenda