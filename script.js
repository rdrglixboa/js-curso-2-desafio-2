// Criar uma função que exibe "Olá, mundo!" no console.

function exibirSaudacoes() {
  console.log("Olá, mundo!");
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirMensagem(nome) {
  console.log(`Olá ${nome}`);
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobrarNumero(numero) {
  return numero * 2;
}

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function retornarMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function verificarMaior(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  }
}

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multNumero(n1) {
  return n1 * n1;
}
