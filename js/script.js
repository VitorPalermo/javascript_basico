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
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value

    let soma = parseFloat(numero1) + parseFloat(numero2)

    // exibe a soma dentro da div resultado
    document.getElementById('resultado').innerHTML = `
    Resultado da soma é ${soma}
    `
}

const exibe = (id) =>{

 let elemento = document.getElementById(id)

 if(elemento.hidden == true){
    elemento.hidden = false
 }else{
    elemento.hidden = true
 }
}

const exibeSelect = () =>{

    let opcao = document.getElementById ('tecnologia').value
    alert(opcao)
    return

    let elemento = document.getElementById(id)
   
    if(elemento.hidden == true){
       elemento.hidden = false
    }else{
       elemento.hidden = true
    }
   }

   const exibeCidade = () =>{
    // captura o elemento html do estado
    let estado = document.getElementById('estado')
    let cidade = document.getElementById('cidade')
    // exibe o valor do elemento capturado
    
    if(estado.value == 'sp' ){    
        cidade.innerHTML = `
        <option value = ""> São Joao da boa vista </option>
        <option value = ""> Aguai </option>
        <option value = ""> Aguas da Prata </option>
        `
    }else if(estado.value =='rj') {
        cidade.innerHTML = `
        <option value = ""> Laranjeiras </option>
        <option value = ""> Xerem </option>
        <option value = ""> Paraty </option>
        `
    }else if(estado.value =='mg') {
        cidade.innerHTML = `
        <option value = ""> Andradas </option>
        <option value = ""> Poços de Caldas </option>
        <option value = ""> Belo Horizonte </option>
        `
    }
    }

    // Função que consulta o cep de uma API
    // 

    const consultaCep = () =>{
        let cep = document.getElementById ('cep').value
        const result = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response=>response.json())
        .then(result => {
            // resposta final da requisição, já validada em formato JSON
            // manipulação do HMTL
            console.log(result)
            document.getElementById('logradouro').value = result.logradouro;
            document.getElementById('bairro').value = result.bairro;
            document.getElementById('numero').value = result.numero;
            document.getElementById('localidade').value = result.localidade;
            document.getElementById('uf').value = result.uf;

        });
    };

