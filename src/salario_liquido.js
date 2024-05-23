/*
    Implemente uma função que retorne valor do salario líquido, considerando:
    Salário bruto;
    INSS;
    Imposto de renda;
    Outros descontos.
*/

const calcularInss = require("./calculo_inss")
const calcularImpostoRenda = require("./imposto_renda")

let salarioLiquido = 0

function calcularSalarioLiquido(salarioBruto){
    salarioLiquido = salarioBruto - calcularInss(salarioBruto) - calcularImpostoRenda(salarioBruto)

    return salarioLiquido.toFixed(2)
}

module.exports = calcularSalarioLiquido