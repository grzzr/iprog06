[Índice](README.md)

# Exercícios - Condicionais

Estes exercícios usam o pacote `readline-sync`. O código para importar o pacote foi omitido dos exemplos por brevidade.

## Instruções para começar o trabalho
Para fazer os exercícios você precisa:

1. criar um diretório
2. nesse diretório, instalar o `readline-sync` usando o `npm`

  ```sh
  npm install readline-sync

  ```

3. em cada um de seus programas, incluir no começo deles a linha:

  ```js
  const rl = require('readline-sync');
  ```

## Interpretação de código


1. Explique o que o código faz. Qual o teste que ele realiza? 

    ```js
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```
    Qual tipo de número passa no teste qual não passa?

## Escrita de código

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um programa que verifica em qual turno do dia um aluno estuda.
    - Peça para digitar `M` (matutino) ou `V` (Vespertino) ou `N` (Noturno).
    - Imprima no console a mensagem "Bom Dia!" (se M), "Boa Tarde!" (se V) ou "Boa Noite!" (se N).
    
    Resolva usando `if/else`.

1. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero `fantasia` e se o ingresso está `abaixo de 15 reais`.

    Escreva um programa que pergunta ao usuário qual o gênero de filme que vocês vão assistir e depois pergunta qual o preço do ingresso desse filme. Depois, o programa verifica se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`; caso contrário, imprima `"Escolha outro filme :("`

[Índice](README.md)