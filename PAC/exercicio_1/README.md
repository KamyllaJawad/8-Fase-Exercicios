# Exercício PAC 8 Fase

![](https://files.engaged.com.br/5db06876d1965b00074402c2/account/5db06876d1965b00074402c2/QJ1pjmKUQJGQZRO8UOPV_logos-final-14.png)

### Projeto de Verificação de Números Primos

Este é um projeto simples em JavaScript que permite ao usuário inserir um número inteiro e verificar se ele é um número primo menor que 1000.

### Funcionalidades

O projeto tem as seguintes funcionalidades:

- Verificar se um número é primo e menor que 1000.

- Exibir uma mensagem informando se o número é primo ou não.

### Como funciona

O projeto é composto por dois arquivos:

- index.html: arquivo HTML que contém a interface do usuário e carrega o arquivo app.js.

- app.js: arquivo JavaScript que contém a lógica do projeto.

Ao abrir o arquivo index.html em um navegador, o usuário verá uma caixa de texto onde pode inserir um número inteiro e um botão para enviar o formulário. Quando o usuário clica no botão, o arquivo app.js é carregado e verifica se o número inserido é um número primo menor que 1000. Se for, uma mensagem informando que o número é primo é exibida. Caso contrário, uma mensagem informando que o número não é primo é exibida.

### Como utilizar

Para utilizar o projeto, basta abrir o arquivo index.html em um navegador e inserir um número inteiro na caixa de texto. Em seguida, clique no botão "Enviar" e aguarde a mensagem de resposta.

### Como contribuir

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch com a sua alteração: git checkout -b minha-alteracao
3. Faça as alterações necessárias no arquivo app.js.
4. Teste suas alterações utilizando o arquivo app.test.js.
5. Confirme suas alterações: git commit -m "Minha alteração"
6. Envie para a branch principal: git push origin minha-alteracao
7. Crie um novo Pull Request.

## Conclusão

Para criar um projeto em JavaScript que verifica se um número é primo menor que 1000, foi utilizado um arquivo app.js com duas funções principais. A primeira função isPrime recebe um número como parâmetro e verifica se ele é primo ou não. A segunda função addEventListener é responsável por escutar o envio do formulário e exibir o resultado na página HTML.

Para testar o código, foi utilizado o framework de testes Jest. Foram criados dois testes unitários. O primeiro teste verifica se a função isPrime retorna corretamente se um número é primo ou não. Já o segundo teste simula o envio do formulário com um número específico e verifica se o resultado exibido na página HTML está correto.

A interface HTML foi construída utilizando o framework Bootstrap para estilização. O usuário insere um número inteiro no formulário e o resultado é exibido na página. Se o número for primo e menor que 1000, é exibida a mensagem "<numero> é um número primo menor que 1000.". Caso contrário, é exibida a mensagem "<numero> não é um número primo menor que 1000.".

Foi criado um arquivo .gitignore para evitar o envio da pasta node_modules ao repositório do Git. Isso é importante para manter o repositório mais limpo e evitar que arquivos desnecessários sejam compartilhados.

Este projeto é um exemplo simples de como utilizar JavaScript para criar uma funcionalidade de verificação de números primos em uma página HTML. Ele pode ser utilizado como base para projetos mais complexos que necessitem de lógica matemática similar.