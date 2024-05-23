const calcularInss = require("./calculo_inss")
const calcularImpostoRenda = require("./imposto_renda")
const calcularSalarioLiquido = require("./salario_liquido")

let salarioBruto = 4300

console.log(`Salário bruto: R$${salarioBruto} `)

console.log(`O valor da contribuição do INSS referente ao seu salário bruto é de R$${calcularInss(salarioBruto)}`)
console.log(`O valor do imposto de renda referente ao seu salário bruto é de R$${calcularImpostoRenda(salarioBruto)}`)
console.log(`O valor líquido com base nos descontos e no salário base informado é de R$${calcularSalarioLiquido(salarioBruto)}`)