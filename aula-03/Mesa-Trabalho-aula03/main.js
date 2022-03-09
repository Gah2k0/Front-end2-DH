import somar from './somar.js'
import subtrair from './subtrair.js'
import dividir from './dividir.js'
import multiplicar from './multiplicar.js'

function calcular(){
    let primeiroNumero = parseInt(prompt("Digite o primeiro número"))
    let segundoNumero = parseInt(prompt("Digite o segundo número"))
    let operacao = prompt("Digite a operação que deseja realizar: \n 1: + \n 2: - \n 3: * \n 4: /")

    function decideOperacao(num1, num2, sinal) {
        if(sinal == '+') return somar(num1, num2)
        if(sinal == '-') return subtrair(num1, num2)
        if(sinal == '/') return dividir(num1, num2)
        if(sinal == '*') return multiplicar(num1, num2)
    }

    alert("O resultado é: " + decideOperacao(primeiroNumero, segundoNumero, operacao));
    if(confirm("Deseja realizar outro cálculo?")) calcular();
}

calcular();
