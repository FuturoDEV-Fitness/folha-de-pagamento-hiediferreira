const calcularInss = require("./calculo_inss")
const calcularImpostoRenda = require("./imposto_renda")
const calcularSalarioLiquido = require("./salario_liquido")

const fs = require("fs")
const PDFDocument = require("pdfkit")

////Pegando informações do terminal
const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let nomeFuncionario = ""
let cpfFuncionario = ""
let salarioBruto = 0

input.question('Informe o nome do funcionário: ', (nomeInformado) => {
    nomeFuncionario = nomeInformado

    input.question('Informe o CPF do funcionário:? ', (cpfInformado) => {
        cpfFuncionario = cpfInformado

        input.question('Informe o salário bruto:? ', (salarioInformado) => {
            salarioBruto = Number(salarioInformado)
    
            console.log("--- Folha de Pagamento ---")
            console.log(`Nome: ${nomeFuncionario}`)
            console.log(`CPF: ${cpfFuncionario}`)
            console.log(`Salário Bruto: R$${salarioBruto}`)
            console.log(`INSS: R$${calcularInss(salarioBruto)} `)
            console.log(`Imposto de Renda: R$${calcularImpostoRenda(salarioBruto)}`)
            console.log(`Salário Líquido: R$${calcularSalarioLiquido(salarioBruto)}`)

            // Gerando PDF //
            const doc = new PDFDocument()
            doc.pipe(fs.createWriteStream(`funcionario_${nomeFuncionario}.pdf`))
            doc.fontSize(16)

            doc.font('Courier-Bold').text("--- Folha de Pagamento ---")
            doc.font('Courier').text(`Data de geração: ${new Date().toLocaleDateString()}`)
            doc.text(`Nome: ${nomeFuncionario}`)
            doc.text(`CPF: ${cpfFuncionario}`)
            doc.text("--------------------------")
            doc.text(`Salário Bruto: ${salarioBruto}`)
            doc.text("--------------------------")
            doc.text(`INSS: R$${calcularInss(salarioBruto)} `)
            doc.text(`Imposto de Renda: R$${calcularImpostoRenda(salarioBruto)}`)
            doc.text("Outros descontos: R$0.00")
            doc.text("--------------------------")
            doc.font('Courier-Bold').text(`Salário Líquido: R$${calcularSalarioLiquido(salarioBruto)}`)
            doc.end()
        })
    })
})