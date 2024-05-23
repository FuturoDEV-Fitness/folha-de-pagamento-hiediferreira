/*
    Implemente uma função que retorne o valor a ser pago de INSS, com base no salário bruto recebido. Use as regras abaixo:
        Salário bruto ate R$ 1.412,00: INSS = 7,5% do salário bruto;
        Salário bruto entre R$ 1.412,01 e R$ 2.666,68: INSS = 9%;
        Salário bruto entre R$ 2.666,69 e R$ 4.000,03: INSS = 12%;
        Salario bruto entre R$ 4.000,04 e R$ 7.786,02: INSS = 14%.

    Considere o teto do INSS como R$ 908,85 e, o modelo de cálculo simples, considerado a porcentagem sobre o valor total.
*/

// const readline = require('readline')
// const input = readline.createInterface({
//     process.stdin,
//     process.stdout
// })

let valorInss = 0

function calcularInss(salarioBruto){

    const TETO_INSS = 908.85

    if(salarioBruto <= 1412){
        valorInss = salarioBruto * 0.075  //7.5%    
    } else if(salarioBruto <= 2668.68){
        valorInss = salarioBruto * 0.09 //9% 
    } else if(salarioBruto <= 4000.03){
        valorInss = salarioBruto * 0.12 //12% 
    } else {
        valorInss = salarioBruto * 0.14 //14%
    }

    if(valorInss > TETO_INSS){
        valorInss = TETO_INSS   //Verificando se não passou do teto
    }

    return valorInss.toFixed(2)
}

module.exports = calcularInss