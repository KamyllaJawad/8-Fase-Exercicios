// função para verificar se um número é primo
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// selecionar o formulário e o elemento de resultado
const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

// adicionar um evento de envio de formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impedir o envio padrão do formulário

  // obter o número do usuário
  const numero = parseInt(document.querySelector('#inputNumero').value);

  // verificar se o número é primo e menor que 1000
  if (isPrime(numero) && numero < 1000) {
    resultado.innerHTML = `${numero} é um número primo menor que 1000.`;
  } else {
    resultado.innerHTML = `${numero} não é um número primo menor que 1000.`;
  }
});
