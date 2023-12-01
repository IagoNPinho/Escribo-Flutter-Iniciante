const dado = document.getElementById("dado");
const botao = document.getElementById("calcular");
const soma = document.getElementById("soma");
const divisiveis = document.getElementById("divisiveis");

botao.addEventListener("click", function () {
  soma.innerHTML = "";
  divisiveis.innerHTML = "";
  const valor = parseInt(dado.value);
  numeroValido(valor);
  dado.value = "";
});

function numeroValido(valor) {
  if (isNaN(valor) || valor <= 0 || valor >= 10000) {
    error();
  } else {
    const resultado = somar(valor);
    sucesso();
    soma.innerHTML = resultado;
  }
}

function error() {
  alert(
    "Número inválido!\nPor favor, insira um número maior que 0, menor que 1000 e sem letras"
  );
  soma.innerHTML = "valor errado";
  soma.style.color = "#FF3131";
}

function sucesso(){
  soma.style.color = "#0004FF";
}

function somar(valor) {
  let soma = 0;
  let numeros = [];

  for (let index = 1; index < valor; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      soma += index;
      numeros.push(index);
    }
  }

  exibirDivisiveis(numeros);
  return soma;
}

function exibirDivisiveis(numeros) {
  console.clear();
  numeros.map(function (e) {
    console.log(e);
    const newLi = `<li>${e}</li>`;
    divisiveis.innerHTML += newLi;
  });
}
