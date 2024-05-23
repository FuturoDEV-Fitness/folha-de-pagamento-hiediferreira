const calcularInss = require("./calculo_inss")
const calcularImpostoRenda = require("./imposto_renda")

let salarioBruto = 8000

console.log(`Salário bruto: R$${salarioBruto} `)

console.log(`O valor da contribuição do INSS referente ao seu salário bruto é de R$${calcularInss(salarioBruto)}`)
console.log(`O valor do imposto de renda referente ao seu salário bruto é de R$${calcularImpostoRenda(salarioBruto)}`)
