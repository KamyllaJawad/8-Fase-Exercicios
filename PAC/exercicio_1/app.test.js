const { JSDOM } = require('jsdom');

// cria um objeto DOM simulado
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <div class="container">
        <form>
          <input type="number" id="inputNumero">
          <div id="resultado"></div>
        </form>
      </div>
    </body>
  </html>
`);

// extrai as variáveis do objeto DOM simulado
const { window } = dom;
const { document } = window;
global.window = window;
global.document = document;

// carrega o arquivo JavaScript
const app = require('./app');

test('Testa a verificação de número primo', () => {
  // simula a entrada do usuário
  const inputNumero = document.querySelector('#inputNumero');
  inputNumero.value = '23';

  // simula o envio do formulário
  const form = document.querySelector('form');
  form.dispatchEvent(new window.Event('submit'));

  // verifica o resultado esperado
  const resultado = document.querySelector('#resultado').innerHTML;
  expect(resultado).toBe('23 é um número primo menor que 1000.');
});
