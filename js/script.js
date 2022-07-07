// Função que realiza a soma de dois numeros
const soma = () =>{



// declara uma variavel eatribui valor..// window.prompt ele entende que é um texto
let numero1 = window.prompt('digite o primeiro numero')

let numero2 = window.prompt('digite o segundo numero')

console.log(numero1)
console.log(numero2)


// parseINT = converte uma string em inteiro(converte em numero)

let soma = parseFloat(numero1) + parseFloat(numero2)

// alerto exibe na tela
alert(`soma dos numeros:` +soma)
}

const soma2 = (numero1,numero2) =>{
    let soma = numero1 + numero2 
    alert(soma)
}

// Função que soma 2 numeros digitados pelo usuario em um form
const somanumeros = () => {
    let numero1 = document.getElementById('numero1').Value
    let numero2 = document.getElementById('numero2').value

    let soma = parseFloat(numero1) + parseFloat(numero2)

    // exibe a soma dentro da div resultado
    document.getElementById('resultado').innerhtml = `
    Resultado da soma é ${soma}
    `
}