// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt(1)
  const num2 = prompt(2)

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt(3)
  const largura = prompt(5)

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt(2020)
  const anoNascimento = prompt(1990)

  console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt(85)
  const altura = prompt(1.8)

  console.log(IMC = (peso) / (altura * altura)) 
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = "Alice"
  const idade = 28
  const email = "alice@gmail.com"
  
  const nomeIdadeEmail = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  
  console.log (nomeIdadeEmail)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = "Azul"
  const cor2 = "Amarelo"
  const cor3 = "Vermelho"
  
  const cores = ["Azul", "Amarelo", "Vermelho"]
  
  console.log (cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const string = "oi"
  const stringM = string.toUpperCase();
  
  console.log(stringM);
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt(3000)
  const valorDeCadaIngresso = prompt(100)

  console.log((custo) / (valorDeCadaIngresso)) 

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = "ola"
  const string2 = "abc"

  console.log(string1 !== string2);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = "Ola"
  const string2 = "olA"

  console.log(string1 !== string2);
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = 2020
  const anoDeNascimento = 2000
  const anoDeEmissaoDoRg = 2015

  console.log(anoAtual !== anoDeNascimento !== anoDeEmissaoDoRg);
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = 2000
  const ano2 = 4000

  console.log(ano !== ano2)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const temMaisDe18 = "sim"
  const temEnsinoMédioCompleto = "sim"
  const temDisponibilidadeDeHorários = "sim"

  console.log(temMaisDe18 !== temEnsinoMédioCompleto !== temDisponibilidadeDeHorários)
}