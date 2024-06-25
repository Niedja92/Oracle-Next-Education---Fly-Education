//let titulo = document.querySelector('h1'); // usamos o document para selecionar a informação que queremos do HTML
//titulo.innerHTML = 'Jodo do número secreto'; // usamos a propriedade innerHTML para 'entrar' no HTML e mostrar as alterações que são feitas no que selecionamos

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//--------DEIXANDO O CÓDIGO MAIS ESTRUTURADO E MENOS VERBOSO ---------//
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//------ CHAMANDO A FUNÇÃO PASSANDO O PRIMEIRO E SEGUNDO PARÂMETROS (tag, texto) -----//
function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jodo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; // pegando o valor do input
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }

        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo()

    }
    // console.log(chute == numeroSecreto);
    // console.log(numeroSecreto)
}

//------ UTILIZANDO O 'return', que chamará a função da variável numeroSecreto ------//

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1)
}

// limpando o campo do input após digitar um número
function limparCampo () {
     chute = document.querySelector('input');
     chute.value = '';
}

// reiniciando o jogo
function reiniciarjogo () {
    numeroSecreto = gerarNumeroAleatorio(); // número secreto foi sorteado
    limparCampo(); // o campo do input foi limpo
    tentativas = 1; // as tentativas foram reiniciadas a partir do 1
    exibirMensagemInicial(); // exibindo novamente as mensagens na tela
    document.getElementById('reiniciar').setAttribute('disabled', true); // deixar o botão Novo Jogo habilitado apenas após o acerto
}


// --------------- DESAFIOS 01 ------------------//

// 1 - Criar uma função que exibe "Olá, mundo!" no console.
// function exibirOla() {
//       console.log("Olá, mundo!");
// }
 
// exibirOla();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function exibirOlaNome(nome) {
//     console.log(`Olá, ${nome}!`);
//   }
  
//   exibirOlaNome("Alice");

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function calcularDobro(numero) {
//     return numero * 2;
//   }
  
//   let resultadoDobro = calcularDobro(5);
//   console.log(resultadoDobro);

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
//     }
  
// let media = calcularMedia(4, 7, 10);
// console.log(media);

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function encontrarMaior(a, b) {
//     return a > b ? a : b;
//   }
  
//   let maiorNumero = encontrarMaior(15, 9);
//   console.log(maiorNumero);

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

// function quadrado(numero) {
//     return numero * numero;
//   }
  
//   let resultado = quadrado(2);
//   console.log(resultado); 


// --------------- DESAFIOS 02 ------------------//

// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:

// function calculaIMC(altura, peso){

//     let imc = peso / (alturaMetros * alturaMetros);
//   }

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
//   }
  
//   // Exemplo de uso
//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.

// function converterDolarParaReal(valorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReais.toFixed(2);
//   }
  
//   // Exemplo de uso
//   let valorEmDolar = 50;
//   let valorEmReais = converterDolarParaReal(valorEmDolar);
//   console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//     console.log(`Área da sala: ${area} metros quadrados`);
//     console.log(`Perímetro da sala: ${perimetro} metros`);
//   }
  
//   // Exemplo de uso
//   let altura = 3; // em metros
//   let largura = 5; // em metros
//   calcularAreaPerimetroSalaRetangular(altura, largura);
  
// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//   }
  
//   // Exemplo de uso
//   let raio = 4; // em metros
//   calcularAreaPerimetroSalaCircular(raio);

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function mostrarTabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       console.log(`${numero} x ${i} = ${resultado}`);
//     }
//   }
  
//   // Exemplo de uso
//   let numero = 7;
//   mostrarTabuada(numero);